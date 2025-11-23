#!/usr/bin/env node

/**
 * Jobs Data Exporter with Encryption
 * Purpose: Export complete job data (including descriptions) to encrypted JSON
 * Use Case: External job boards can fetch jobs with full details
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class JobsDataExporter {
  constructor() {
    this.dataDir = path.join(process.cwd(), '.github', 'data');
    this.outputPath = path.join(this.dataDir, 'jobs-data-encrypted.json');
    this.password = process.env.LOG_ENCRYPT_PASSWORD || 'default-password-change-me';

    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
  }

  encrypt(data) {
    const salt = crypto.randomBytes(32);
    const key = crypto.scryptSync(this.password, salt, 32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

    const jsonData = JSON.stringify(data);
    let encrypted = cipher.update(jsonData, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return {
      encrypted: encrypted,
      iv: iv.toString('hex'),
      authTag: cipher.getAuthTag().toString('hex'),
      salt: salt.toString('hex'),
      algorithm: 'aes-256-gcm'
    };
  }

  decrypt(encryptedData) {
    const salt = Buffer.from(encryptedData.salt, 'hex');
    const key = crypto.scryptSync(this.password, salt, 32);
    const iv = Buffer.from(encryptedData.iv, 'hex');
    const authTag = Buffer.from(encryptedData.authTag, 'hex');

    const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return JSON.parse(decrypted);
  }

  loadExistingData() {
    if (!fs.existsSync(this.outputPath)) {
      return { metadata: { version: '1.0', created: new Date().toISOString(), lastUpdated: new Date().toISOString(), totalJobs: 0 }, jobs: [] };
    }

    try {
      const encryptedData = JSON.parse(fs.readFileSync(this.outputPath, 'utf8'));
      return this.decrypt(encryptedData);
    } catch (error) {
      return { metadata: { version: '1.0', created: new Date().toISOString(), lastUpdated: new Date().toISOString(), totalJobs: 0 }, jobs: [] };
    }
  }

  generateJobId(job) {
    const company = (job.employer_name || job.company_name || '').toLowerCase().replace(/[^a-z0-9]/g, '-');
    const title = (job.job_title || job.title || '').toLowerCase().replace(/[^a-z0-9]/g, '-');
    const location = (job.job_city || job.location || '').toLowerCase().replace(/[^a-z0-9]/g, '-');
    return `${company}-${title}-${location}`.replace(/--+/g, '-').replace(/^-|-$/g, '');
  }

  exportJobs(newJobs) {
    console.log(`\n📦 Exporting ${newJobs.length} jobs to encrypted JSON...`);

    const existingData = this.loadExistingData();
    const existingJobIds = new Set(existingData.jobs.map(j => j.id));

    let addedCount = 0;
    let skippedCount = 0;

    for (const job of newJobs) {
      const jobId = this.generateJobId(job);
      if (existingJobIds.has(jobId)) {
        skippedCount++;
        continue;
      }

      const normalizedJob = {
        id: jobId,
        title: job.job_title || job.title,
        company: job.employer_name || job.company_name,
        location: job.job_city || job.location || 'Remote',
        state: job.job_state || '',
        description: job.job_description || job.description || '',
        url: job.job_apply_link || job.url,
        salary: job.salary_range || job.salary || null,
        experience: job.job_required_experience || job.experience || 'Entry-Level',
        category: job.category || 'Uncategorized',
        postedDate: job.job_posted_at_datetime_utc || new Date().toISOString(),
        addedToDatabase: new Date().toISOString(),
        source: job.source || 'Unknown'
      };

      existingData.jobs.push(normalizedJob);
      addedCount++;
    }

    existingData.metadata.lastUpdated = new Date().toISOString();
    existingData.metadata.totalJobs = existingData.jobs.length;

    const encryptedData = this.encrypt(existingData);
    fs.writeFileSync(this.outputPath, JSON.stringify(encryptedData, null, 2));

    console.log(`✅ Export complete: Added ${addedCount}, Skipped ${skippedCount}, Total ${existingData.metadata.totalJobs}`);

    return { success: true, added: addedCount, skipped: skippedCount, total: existingData.metadata.totalJobs };
  }

  getJobs(filters = {}) {
    const data = this.loadExistingData();
    let jobs = data.jobs;

    if (filters.category) jobs = jobs.filter(j => j.category.toLowerCase() === filters.category.toLowerCase());
    if (filters.location) jobs = jobs.filter(j => j.location.toLowerCase().includes(filters.location.toLowerCase()) || j.state.toLowerCase().includes(filters.location.toLowerCase()));
    if (filters.company) jobs = jobs.filter(j => j.company.toLowerCase().includes(filters.company.toLowerCase()));
    if (filters.limit) jobs = jobs.slice(0, filters.limit);

    return jobs;
  }
}

module.exports = JobsDataExporter;

if (require.main === module) {
  const exporter = new JobsDataExporter();
  const newJobsPath = path.join(process.cwd(), '.github', 'data', 'new_jobs.json');
  if (fs.existsSync(newJobsPath)) {
    const newJobs = JSON.parse(fs.readFileSync(newJobsPath, 'utf8'));
    exporter.exportJobs(newJobs);
  }
}
