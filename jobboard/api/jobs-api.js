#!/usr/bin/env node

/**
 * Job Board API Server
 *
 * RESTful API for job board website
 * Serves job data with category filtering, search, and pagination
 *
 * Security: Only serves public job information
 * Competitive intelligence data remains encrypted
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

class JobsAPI {
  constructor() {
    this.app = express();
    this.port = process.env.JOBS_API_PORT || 3001;
    this.dataPath = path.join(__dirname, '../../.github/data/job-details-public.json');

    this.setupMiddleware();
    this.setupRoutes();
  }

  setupMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use((req, res, next) => {
      res.header('Cache-Control', 'public, max-age=300'); // 5 minute cache
      next();
    });
  }

  setupRoutes() {
    // Health check
    this.app.get('/health', (req, res) => {
      res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        jobsCount: this.getJobsCount()
      });
    });

    // Get all jobs with pagination
    this.app.get('/api/jobs', (req, res) => {
      try {
        const { page = 1, limit = 20, category, search, sortBy = 'postedAt', sortOrder = 'desc' } = req.query;

        let jobs = this.loadJobs();

        // Apply filters
        if (category && category !== 'all') {
          jobs = jobs.filter(job => job.category === category);
        }

        if (search) {
          const searchLower = search.toLowerCase();
          jobs = jobs.filter(job =>
            job.title.toLowerCase().includes(searchLower) ||
            job.company.toLowerCase().includes(searchLower) ||
            (job.description && job.description.toLowerCase().includes(searchLower))
          );
        }

        // Apply sorting
        jobs.sort((a, b) => {
          const aValue = a[sortBy] || '';
          const bValue = b[sortBy] || '';

          if (sortOrder === 'desc') {
            return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
          } else {
            return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
          }
        });

        // Apply pagination
        const startIndex = (parseInt(page) - 1) * parseInt(limit);
        const endIndex = startIndex + parseInt(limit);
        const paginatedJobs = jobs.slice(startIndex, endIndex);

        res.json({
          jobs: paginatedJobs,
          pagination: {
            page: parseInt(page),
            limit: parseInt(limit),
            total: jobs.length,
            pages: Math.ceil(jobs.length / parseInt(limit))
          },
          filters: {
            categories: this.getAvailableCategories(),
            totalJobs: this.getJobsCount()
          }
        });
      } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });

    // Get job by ID
    this.app.get('/api/jobs/:id', (req, res) => {
      try {
        const jobs = this.loadJobs();
        const job = jobs.find(job => job.id === req.params.id);

        if (!job) {
          return res.status(404).json({ error: 'Job not found' });
        }

        res.json(job);
      } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });

    // Get categories with counts
    this.app.get('/api/categories', (req, res) => {
      try {
        const jobs = this.loadJobs();
        const categories = {};

        jobs.forEach(job => {
          categories[job.category] = (categories[job.category] || 0) + 1;
        });

        const categoryList = Object.entries(categories).map(([category, count]) => ({
          category,
          count,
          displayName: this.formatCategoryDisplayName(category)
        }));

        res.json({
          categories: categoryList.sort((a, b) => b.count - a.count),
          totalCategories: categoryList.length
        });
      } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });

    // Get recent jobs for homepage
    this.app.get('/api/recent', (req, res) => {
      try {
        const { limit = 10, category } = req.query;

        let jobs = this.loadJobs();

        if (category && category !== 'all') {
          jobs = jobs.filter(job => job.category === category);
        }

        const recentJobs = jobs
          .sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt))
          .slice(0, parseInt(limit));

        res.json({
          jobs: recentJobs,
          category: category || 'all'
        });
      } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });

    // Search jobs (advanced)
    this.app.post('/api/search', (req, res) => {
      try {
        const {
          query,
          category,
          location,
          company,
          dateRange = '30d',
          page = 1,
          limit = 20
        } = req.body;

        let jobs = this.loadJobs();

        // Text search
        if (query) {
          const searchLower = query.toLowerCase();
          jobs = jobs.filter(job =>
            job.title.toLowerCase().includes(searchLower) ||
            job.company.toLowerCase().includes(searchLower) ||
            (job.description && job.description.toLowerCase().includes(searchLower))
          );
        }

        // Category filter
        if (category && category !== 'all') {
          jobs = jobs.filter(job => job.category === category);
        }

        // Location filter
        if (location) {
          const locationLower = location.toLowerCase();
          jobs = jobs.filter(job =>
            (job.location && job.location.toLowerCase().includes(locationLower))
          );
        }

        // Company filter
        if (company) {
          const companyLower = company.toLowerCase();
          jobs = jobs.filter(job =>
            job.company.toLowerCase().includes(companyLower)
          );
        }

        // Date range filter
        const daysAgo = parseInt(dateRange.replace('d', '')) || 30;
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - daysAgo);

        jobs = jobs.filter(job => new Date(job.postedAt) >= cutoffDate);

        // Sort by relevance (text matches in title first)
        jobs.sort((a, b) => {
          const aTitle = (a.title || '').toLowerCase();
          const bTitle = (b.title || '').toLowerCase();
          const queryLower = (query || '').toLowerCase();

          const aTitleScore = aTitle.includes(queryLower) ? 2 : 1;
          const bTitleScore = bTitle.includes(queryLower) ? 2 : 1;

          if (aTitleScore !== bTitleScore) {
            return bTitleScore - aTitleScore;
          }

          return new Date(b.postedAt) - new Date(a.postedAt);
        });

        // Pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedJobs = jobs.slice(startIndex, endIndex);

        res.json({
          jobs: paginatedJobs,
          pagination: {
            page,
            limit,
            total: jobs.length,
            pages: Math.ceil(jobs.length / limit)
          },
          searchQuery: {
            query,
            category,
            location,
            company,
            dateRange
          }
        });
      } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });

    // Statistics endpoint
    this.app.get('/api/stats', (req, res) => {
      try {
        const jobs = this.loadJobs();
        const last7Days = new Date();
        last7Days.setDate(last7Days.getDate() - 7);

        const recentJobs = jobs.filter(job => new Date(job.postedAt) >= last7Days);
        const categoryStats = {};

        recentJobs.forEach(job => {
          categoryStats[job.category] = (categoryStats[job.category] || 0) + 1;
        });

        res.json({
          totalJobs: jobs.length,
          recentJobs: recentJobs.length,
          categories: categoryStats,
          lastUpdated: jobs.length > 0 ? jobs[0].postedAt : null
        });
      } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });
  }

  loadJobs() {
    if (!fs.existsSync(this.dataPath)) {
      return [];
    }

    try {
      return JSON.parse(fs.readFileSync(this.dataPath, 'utf8'));
    } catch (error) {
      console.error('Failed to load jobs:', error);
      return [];
    }
  }

  getJobsCount() {
    return this.loadJobs().length;
  }

  getAvailableCategories() {
    const jobs = this.loadJobs();
    const categories = new Set();

    jobs.forEach(job => {
      if (job.category) {
        categories.add(job.category);
      }
    });

    return Array.from(categories);
  }

  formatCategoryDisplayName(category) {
    const displayNames = {
      'tech': '💻 Tech Jobs',
      'sales': '💰 Sales Jobs',
      'marketing': '📢 Marketing Jobs',
      'finance': '💳 Finance Jobs',
      'healthcare': '🏥 Healthcare Jobs',
      'product': '📱 Product Management',
      'supply-chain': '🚚 Supply Chain',
      'project-management': '📋 Project Management',
      'hr': '👥 HR Jobs'
    };

    return displayNames[category] || category;
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Jobs API Server running on port ${this.port}`);
      console.log(`📊 Serving ${this.getJobsCount()} jobs`);
      console.log(`🔗 Available endpoints:`);
      console.log(`   GET  /api/jobs - Get all jobs with filters`);
      console.log(`   GET  /api/jobs/:id - Get specific job`);
      console.log(`   GET  /api/categories - Get categories with counts`);
      console.log(`   GET  /api/recent - Get recent jobs`);
      console.log(`   POST /api/search - Advanced job search`);
      console.log(`   GET  /api/stats - Job statistics`);
    });
  }
}

// Start server if run directly
if (require.main === module) {
  const api = new JobsAPI();
  api.start();
}

module.exports = JobsAPI;