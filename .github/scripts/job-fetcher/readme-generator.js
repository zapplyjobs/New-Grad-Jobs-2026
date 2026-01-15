const fs = require("fs");
const companyCategory = require("./software.json");
const {
  companies,
  ALL_COMPANIES,
  getCompanyEmoji,
  getCompanyCareerUrl,
  formatTimeAgo,
  getExperienceLevel,
  getJobCategory,
  formatLocation,
} = require("./utils");

// Filter jobs by age (1 week = 7 days)
function filterJobsByAge(allJobs) {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  const currentJobs = allJobs.filter(job => {
    const jobDate = new Date(job.job_posted_at_datetime_utc);
    return jobDate >= oneWeekAgo;
  });
  
  const archivedJobs = allJobs.filter(job => {
    const jobDate = new Date(job.job_posted_at_datetime_utc);
    return jobDate < oneWeekAgo;
  });
  
  return { currentJobs, archivedJobs };
}

// Filter out senior positions - only keep Entry-Level and Mid-Level
function filterOutSeniorPositions(jobs) {
  return jobs.filter(job => {
    const level = getExperienceLevel(job.job_title, job.job_description);
    return level !== "Senior";
  });
}

// Generate enhanced job table with better formatting
// Import or load the JSON configuration

function generateJobTable(jobs) {
  console.log(`🔍 DEBUG: Starting generateJobTable with ${jobs.length} total jobs`);
  
  // ADD THESE 3 LINES:
  jobs = filterOutSeniorPositions(jobs);
  console.log(`🔍 DEBUG: After filtering seniors: ${jobs.length} jobs remaining`);

  if (jobs.length === 0) {
    return `| Company | Role | Location | Posted | Level | Apply |
|---------|------|----------|--------|-------|-------|
| *No current openings* | *Check back tomorrow* | *-* | *-* | *-* | *-* |`;
  }

  // Create a map of lowercase company names to actual names for case-insensitive matching
  const companyNameMap = new Map();
  Object.entries(companyCategory).forEach(([categoryKey, category]) => {
    category.companies.forEach(company => {
      companyNameMap.set(company.toLowerCase(), { 
        name: company, 
        category: categoryKey,
        categoryTitle: category.title 
      });
    });
  });

  console.log(`🏢 DEBUG: Configured companies by category:`);
  Object.entries(companyCategory).forEach(([categoryKey, category]) => {
    console.log(`  ${category.emoji} ${category.title}: ${category.companies.join(', ')}`);
  });

  // Get unique companies from job data
  const uniqueJobCompanies = [...new Set(jobs.map(job => job.employer_name))];
  console.log(`\n📊 DEBUG: Unique companies found in job data (${uniqueJobCompanies.length}):`, uniqueJobCompanies);

  // Group jobs by company - PROCESS ALL COMPANIES (whitelist filter removed)
  const jobsByCompany = {};
  const processedCompanies = new Set();

  jobs.forEach((job) => {
    const companyName = job.employer_name;
    processedCompanies.add(companyName);

    if (!jobsByCompany[companyName]) {
      jobsByCompany[companyName] = [];
    }
    jobsByCompany[companyName].push(job);
  });

  console.log(`\n✅ DEBUG: ALL Companies INCLUDED (${processedCompanies.size}):`, [...processedCompanies].sort());

  // Log job counts by company
  console.log(`\n📈 DEBUG: Job counts by company:`);
  Object.entries(jobsByCompany)
    .sort((a, b) => b[1].length - a[1].length) // Sort by job count descending
    .forEach(([company, jobs]) => {
      const companyInfo = companyNameMap.get(company.toLowerCase());
      const category = companyInfo?.categoryTitle || 'Uncategorized';
      console.log(`  ${company}: ${jobs.length} jobs (Category: ${category})`);
    });

  let output = "";

  // Handle each category
  Object.entries(companyCategory).forEach(([categoryKey, categoryData]) => {
    // Filter companies that actually have jobs
    const companiesWithJobs = categoryData.companies.filter(company => 
      jobsByCompany[company] && jobsByCompany[company].length > 0
    );
    
    if (companiesWithJobs.length > 0) {
      const totalJobs = companiesWithJobs.reduce((sum, company) => 
        sum + jobsByCompany[company].length, 0
      );
      
      console.log(`\n📝 DEBUG: Processing category "${categoryData.title}" with ${companiesWithJobs.length} companies and ${totalJobs} total jobs:`);
      companiesWithJobs.forEach(company => {
        console.log(`  - ${company}: ${jobsByCompany[company].length} jobs`);
      });
      
      output += `### ${categoryData.emoji} **${categoryData.title}** (${totalJobs} positions)\n\n`;

      // First handle companies with more than 10 jobs - each gets its own table/section
      const bigCompanies = companiesWithJobs.filter(
        companyName => jobsByCompany[companyName].length > 10
      );

      bigCompanies.forEach((companyName) => {
        const companyJobs = jobsByCompany[companyName];
        const emoji = getCompanyEmoji(companyName);
        
        if (companyJobs.length > 50) {
          output += `<details>\n`;
          output += `<summary><h4>${emoji} <strong>${companyName}</strong> (${companyJobs.length} positions)</h4></summary>\n\n`;
        } else {
          output += `#### ${emoji} **${companyName}** (${companyJobs.length} positions)\n\n`;
        }
        
        output += `| Role | Location | Posted | Level | Apply |\n`;
        output += `|------|----------|--------|-------|-------|\n`;
        
        companyJobs.forEach((job) => {
          const role = job.job_title.substring(0, 35) + (job.job_title.length > 35 ? "..." : "");
          const location = formatLocation(job.job_city, job.job_state).substring(0, 12);
          const posted = formatTimeAgo(job.job_posted_at_datetime_utc);
          const level = getExperienceLevel(job.job_title, job.job_description);
          const category = getJobCategory(job.job_title, job.job_description);
          const applyLink = job.job_apply_link || getCompanyCareerUrl(job.employer_name);

          // Shorten level
          const levelShort = {
            "Entry-Level": '![Entry](https://img.shields.io/badge/-Entry-brightgreen "Entry-Level")',
            "Mid-Level": '![Mid](https://img.shields.io/badge/-Mid-yellow "Mid-Level")',
            "Senior": '![Senior](https://img.shields.io/badge/-Senior-red "Senior-Level")'
          }[level] || level;
          // Shorten category
          const categoryShort = category
            .replace("Machine Learning & AI", "ML/AI")
            .replace("DevOps & Infrastructure", "DevOps")
            .replace("Data Science & Analytics", "Data")
            .replace("Software Engineering", "Software")
            .replace("Full Stack Development", "Full Stack")
            .replace("Frontend Development", "Frontend")
            .replace("Backend Development", "Backend")
            .replace(" Development", "")
            .replace(" Engineering", "");

          let statusIndicator = "";
          const description = (job.job_description || "").toLowerCase();
          if (description.includes("no sponsorship") || description.includes("us citizen")) {
            statusIndicator = " 🇺🇸";
          }
          if (description.includes("remote")) {
            statusIndicator += " 🏠";
          }

          output += `| ${role}${statusIndicator} | ${location} | ${posted} | ${levelShort} | [<img src="images/apply.png" width="75" alt="Apply button">](${applyLink}) |\n`;
        });
        
        if (companyJobs.length > 50) {
          output += `\n</details>\n\n`;
        } else {
          output += "\n";
        }
      });

      // Then combine all companies with 10 or fewer jobs into one table
      const smallCompanies = companiesWithJobs.filter(
        companyName => jobsByCompany[companyName].length <= 10
      );

      if (smallCompanies.length > 0) {
        output += `| Company | Role | Location | Posted | Level | Apply |\n`;
        output += `|---------|------|----------|--------|-------|-------|\n`;

        smallCompanies.forEach((companyName) => {
          const companyJobs = jobsByCompany[companyName];
          const emoji = getCompanyEmoji(companyName);
          
          companyJobs.forEach((job) => {
            const role = job.job_title.substring(0, 35) + (job.job_title.length > 35 ? "..." : "");
            const location = formatLocation(job.job_city, job.job_state).substring(0, 12);
            const posted = formatTimeAgo(job.job_posted_at_datetime_utc);
            const level = getExperienceLevel(job.job_title, job.job_description);
            const category = getJobCategory(job.job_title, job.job_description);
            const applyLink = job.job_apply_link || getCompanyCareerUrl(job.employer_name);

            // ADD THESE TWO LINES:
            const levelShort = {
              "Entry-Level": '![Entry](https://img.shields.io/badge/-Entry-brightgreen "Entry-Level")',
              "Mid-Level": '![Mid](https://img.shields.io/badge/-Mid-yellow "Mid-Level")',
              "Senior": '![Senior](https://img.shields.io/badge/-Senior-red "Senior-Level")'
            }[level] || level;
            const categoryShort = category
              .replace("Machine Learning & AI", "ML/AI")
              .replace("DevOps & Infrastructure", "DevOps")
              .replace("Data Science & Analytics", "Data")
              .replace("Software Engineering", "Software")
              .replace("Full Stack Development", "Full Stack")
              .replace("Frontend Development", "Frontend")
              .replace("Backend Development", "Backend")
              .replace(" Development", "")
              .replace(" Engineering", "");

            let statusIndicator = "";
            const description = (job.job_description || "").toLowerCase();
            if (description.includes("no sponsorship") || description.includes("us citizen")) {
              statusIndicator = " 🇺🇸";
            }
            if (description.includes("remote")) {
              statusIndicator += " 🏠";
            }

            output += `| ${emoji} **${companyName}** | ${role}${statusIndicator} | ${location} | ${posted} | ${levelShort} | [<img src="images/apply.png" width="75" alt="Apply">](${applyLink}) |\n`;
          });
        });
        
        output += "\n";
      }
    }
  });

  // NEW: Process uncategorized companies (not in software.json)
  const categorizedCompanies = new Set();
  Object.values(companyCategory).forEach(category => {
    category.companies.forEach(company => categorizedCompanies.add(company));
  });

  const uncategorizedCompanies = Object.keys(jobsByCompany).filter(
    company => !categorizedCompanies.has(company)
  );

  if (uncategorizedCompanies.length > 0) {
    const totalUncategorizedJobs = uncategorizedCompanies.reduce(
      (sum, company) => sum + jobsByCompany[company].length, 0
    );

    console.log(`\n📝 DEBUG: Processing UNCATEGORIZED companies: ${uncategorizedCompanies.length} companies with ${totalUncategorizedJobs} jobs`);

    output += `### 🏢 **Other Companies** (${totalUncategorizedJobs} positions)\n\n`;

    // Handle large uncategorized companies (>10 jobs) separately
    const bigUncategorized = uncategorizedCompanies.filter(
      company => jobsByCompany[company].length > 10
    );

    bigUncategorized.forEach((companyName) => {
      const companyJobs = jobsByCompany[companyName];
      const emoji = getCompanyEmoji(companyName);

      if (companyJobs.length > 50) {
        output += `<details>\n`;
        output += `<summary><h4>${emoji} <strong>${companyName}</strong> (${companyJobs.length} positions)</h4></summary>\n\n`;
      } else {
        output += `#### ${emoji} **${companyName}** (${companyJobs.length} positions)\n\n`;
      }

      output += `| Role | Location | Posted | Level | Apply |\n`;
      output += `|------|----------|--------|-------|-------|\n`;

      companyJobs.forEach((job) => {
        const role = job.job_title.substring(0, 35) + (job.job_title.length > 35 ? "..." : "");
        const location = formatLocation(job.job_city, job.job_state).substring(0, 12);
        const posted = formatTimeAgo(job.job_posted_at_datetime_utc);
        const level = getExperienceLevel(job.job_title, job.job_description);
        const category = getJobCategory(job.job_title, job.job_description);
        const applyLink = job.job_apply_link || getCompanyCareerUrl(job.employer_name);

        const levelShort = {
          "Entry-Level": '![Entry](https://img.shields.io/badge/-Entry-brightgreen "Entry-Level")',
          "Mid-Level": '![Mid](https://img.shields.io/badge/-Mid-yellow "Mid-Level")',
          "Senior": '![Senior](https://img.shields.io/badge/-Senior-red "Senior-Level")'
        }[level] || level;
        const categoryShort = category
          .replace("Machine Learning & AI", "ML/AI")
          .replace("DevOps & Infrastructure", "DevOps")
          .replace("Data Science & Analytics", "Data")
          .replace("Software Engineering", "Software")
          .replace("Full Stack Development", "Full Stack")
          .replace("Frontend Development", "Frontend")
          .replace("Backend Development", "Backend")
          .replace(" Development", "")
          .replace(" Engineering", "");

        let statusIndicator = "";
        const description = (job.job_description || "").toLowerCase();
        if (description.includes("no sponsorship") || description.includes("us citizen")) {
          statusIndicator = " 🇺🇸";
        }
        if (description.includes("remote")) {
          statusIndicator += " 🏠";
        }

        output += `| ${role}${statusIndicator} | ${location} | ${posted} | ${levelShort} | [<img src="images/apply.png" width="75" alt="Apply">](${applyLink}) |\n`;
      });

      if (companyJobs.length > 50) {
        output += `</details>\n\n`;
      } else {
        output += "\n";
      }
    });

    // Handle small uncategorized companies (<=10 jobs) in one table
    const smallUncategorized = uncategorizedCompanies.filter(
      company => jobsByCompany[company].length <= 10
    );

    if (smallUncategorized.length > 0) {
      output += `| Company | Role | Location | Posted | Level | Apply |\n`;
      output += `|---------|------|----------|--------|-------|-------|\n`;

      smallUncategorized.forEach((companyName) => {
        const companyJobs = jobsByCompany[companyName];
        const emoji = getCompanyEmoji(companyName);

        companyJobs.forEach((job) => {
          const role = job.job_title.substring(0, 35) + (job.job_title.length > 35 ? "..." : "");
          const location = formatLocation(job.job_city, job.job_state).substring(0, 12);
          const posted = formatTimeAgo(job.job_posted_at_datetime_utc);
          const level = getExperienceLevel(job.job_title, job.job_description);
          const category = getJobCategory(job.job_title, job.job_description);
          const applyLink = job.job_apply_link || getCompanyCareerUrl(job.employer_name);

          const levelShort = {
            "Entry-Level": '![Entry](https://img.shields.io/badge/-Entry-brightgreen "Entry-Level")',
            "Mid-Level": '![Mid](https://img.shields.io/badge/-Mid-yellow "Mid-Level")',
            "Senior": '![Senior](https://img.shields.io/badge/-Senior-red "Senior-Level")'
          }[level] || level;
          const categoryShort = category
            .replace("Machine Learning & AI", "ML/AI")
            .replace("DevOps & Infrastructure", "DevOps")
            .replace("Data Science & Analytics", "Data")
            .replace("Software Engineering", "Software")
            .replace("Full Stack Development", "Full Stack")
            .replace("Frontend Development", "Frontend")
            .replace("Backend Development", "Backend")
            .replace(" Development", "")
            .replace(" Engineering", "");

          let statusIndicator = "";
          const description = (job.job_description || "").toLowerCase();
          if (description.includes("no sponsorship") || description.includes("us citizen")) {
            statusIndicator = " 🇺🇸";
          }
          if (description.includes("remote")) {
            statusIndicator += " 🏠";
          }

          output += `| ${emoji} **${companyName}** | ${role}${statusIndicator} | ${location} | ${posted} | ${levelShort} | [<img src="images/apply.png" width="75" alt="Apply">](${applyLink}) |\n`;
        });
      });

      output += "\n";
    }
  }

  console.log(`\n🎉 DEBUG: Finished generating job table with ${Object.keys(jobsByCompany).length} companies processed (${categorizedCompanies.size} categorized + ${uncategorizedCompanies.length} uncategorized)`);
  return output;
}
function generateInternshipSection(internshipData) {
  if (!internshipData) return "";

  return `
---

## SWE Internships 2026

<img src="images/ngj-internships.png" alt="Software engineering internships for 2026.">

### 🏢 **FAANG+ Internship Programs**

| Company | Program | Application Link |
|---------|---------|------------------|
${internshipData.companyPrograms
  .map((program) => {
    const companyObj = ALL_COMPANIES.find((c) => c.name === program.company);
    const emoji = companyObj ? companyObj.emoji : "🏢";
    return `| ${emoji} **${program.company}** | ${program.program} | <p align="center">[<img src="images/apply.png" width="75" alt="Apply button">](${program.url})</p> |`;
  })
  .join("\n")}

### 📚 **Top Software Internship Resources**

| Platform | Type | Description | Link |
|----------|------|-------------|------|
${internshipData.sources
  .map(
    (source) =>
      `| **${source.emogi} ${source.name}** | ${source.type} | ${source.description} | [<img src="images/ngj-visit.png" width="75" alt="Visit button">](${source.url}) |`
  )
  .join("\n")}

`;
}

function generateArchivedSection(archivedJobs, stats) {
  if (archivedJobs.length === 0) return "";

  // ADD THIS LINE:
  archivedJobs = filterOutSeniorPositions(archivedJobs);

  const archivedFaangJobs = archivedJobs.filter((job) =>
    companies.faang_plus.some((c) => c.name === job.employer_name)
  ).length;

  return `
---

<details>
<summary><h2>🗂️ <strong>ARCHIVED SWE JOBS</strong> - ${
    archivedJobs.length
  } Older Positions (7+ days old) - Click to Expand 👆</h2></summary>

### 📊 **Archived Job Stats**
- **📁 Total Jobs**: ${archivedJobs.length} positions
- **🏢 Companies**: ${Object.keys(stats.totalByCompany).length} companies
- **⭐ FAANG+ Jobs & Internships**: ${archivedFaangJobs} positions

${generateJobTable(archivedJobs)}

</details>

---

`;
}

// Generate comprehensive README
async function generateReadme(currentJobs, archivedJobs = [], internshipData = null, stats = null) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // ADD THIS LINE:
  currentJobs = filterOutSeniorPositions(currentJobs);

  // Calculate stats from currentJobs only (not archived)
  const currentStats = {
    byLevel: {},
    byLocation: {},
    byCategory: {},
    totalByCompany: {}
  };

  currentJobs.forEach(job => {
    // Count by level
    const level = getExperienceLevel(job.job_title, job.job_description);
    currentStats.byLevel[level] = (currentStats.byLevel[level] || 0) + 1;

    // Count by location
    const location = formatLocation(job.job_city, job.job_state);
    currentStats.byLocation[location] = (currentStats.byLocation[location] || 0) + 1;

    // Count by category
    const category = getJobCategory(job.job_title, job.job_description);
    currentStats.byCategory[category] = (currentStats.byCategory[category] || 0) + 1;

    // Count by company
    const company = job.employer_name;
    currentStats.totalByCompany[company] = (currentStats.totalByCompany[company] || 0) + 1;
  });

  const totalCompanies = Object.keys(currentStats.totalByCompany).length;

  return `



<div align="center">

<!-- Banner -->
<img src="images/ngj-heading.png" alt="New Grad Jobs 2026">

# New Grad Jobs 2026

![Total Jobs](https://img.shields.io/badge/Total_Jobs-10-brightgreen?style=flat&logo=briefcase)
![Companies](https://img.shields.io/badge/Companies-7-blue?style=flat&logo=building)
![FAANG+ Jobs](https://img.shields.io/badge/FAANG+_Jobs-3-red?style=flat&logo=star)
![Updated](https://img.shields.io/badge/Updated-Every_15_Minutes-orange?style=flat&logo=calendar)

Updated job openings for new grads in SWE and other tech roles | 2026

</div>

<p align="center">Welcome to an actively maintained collection of software engineering, tech, and IT jobs for new grads, data analysts, scientists, and entry-level software developers by [Zapply](https://zapply.jobs).</p>

<p align="center">This repo tracks roles in the United States and remote positions across tech giants and fast-growing startups.</p>

---

## Website & Autofill Extension

<img src="images/zapply.png" alt="Apply to jobs in seconds with Zapply.">

Explore Zapply's website and check out:

- Our chrome extension that auto-fills your job applications in seconds.
- A dedicated job board with the latest jobs for various types of roles.
- User account providing multiple profiles for different resume roles.
- Job application tracking with streaks to unlock commitment awards.

Experience an advanced career journey with us! 🚀

<p align="center">
  <a href="https://zapply.jobs/"><img src="images/zapply-button.png" alt="Visit Our Website" width="350"></a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href=""><img src="images/extension-button.png" alt="Install Our Extension - Coming Soon" width="350"></a>
</p>

---

## Explore Around

<img src="images/connect.png" alt="Explore Around">

Check out what we're doing on our socials, join our community to connect with fellow job seekers, get career advice, keep a lookout for free templates, and stay updated on the latest opportunities.

<p align="center">
  <a href="https://www.instagram.com/zapplyjobs"><img src="images/socials-instagram.png" alt="Instagram" height="50"></a>
  &nbsp;&nbsp;
  <a href="https://www.tiktok.com/@zapplyjobs"><img src="images/socials-tiktok.png" alt="TikTok" height="50"></a>
  &nbsp;&nbsp;
  <a href="https://www.linkedin.com/company/zapply-jobs/"><img src="images/socials-linkedin.png" alt="LinkedIn" height="50"></a>
  &nbsp;&nbsp;
  <a href="https://discord.gg/UswBsduwcD"><img src="images/socials-discord.png" alt="Discord" height="50"></a>
  &nbsp;&nbsp;
  <a href="https://www.reddit.com/r/Zapply/"><img src="images/socials-reddit.png" alt="Reddit" height="50"></a>
  &nbsp;&nbsp;
  <a href="https://github.com/zapplyjobs"><img src="images/socials-github.png" alt="GitHub" height="50"></a>
</p>

---

## Fresh Software Jobs 2026

<img src="images/ngj-listings.png" alt="Fresh 2026 job listings (under 1 week).">

${generateJobTable(currentJobs)}

---

## More Resources

<img src="images/more-resources.png" alt="Jobs and templates in our other repos.">

Check out our other repos for jobs and free resources:

<p align="center">
  <a href="https://github.com/zapplyjobs/New-Grad-Software-Engineering-Jobs-2026"><img src="images/repo-sej.png" alt="Software Engineering Jobs" height="40"></a>
  &nbsp;&nbsp;
  <a href="https://github.com/zapplyjobs/New-Grad-Data-Science-Jobs-2026"><img src="images/repo-dsj.png" alt="Data Science Jobs" height="40"></a>
  &nbsp;&nbsp;
  <a href="https://github.com/zapplyjobs/New-Grad-Hardware-Engineering-Jobs-2026"><img src="images/repo-hej.png" alt="Hardware Engineering Jobs" height="40"></a>
</p>
<p align="center">
  <a href="https://github.com/zapplyjobs/New-Grad-Nursing-Jobs-2026"><img src="images/repo-nsj.png" alt="Nursing Jobs" height="40"></a>
  &nbsp;&nbsp;
  <a href="https://github.com/zapplyjobs/resume-samples-2026"><img src="images/repo-rss.png" alt="Resume Samples" height="40"></a>
  &nbsp;&nbsp;
  <a href="https://github.com/zapplyjobs/interview-handbook-2026"><img src="images/repo-ihb.png" alt="Interview Handbook" height="40"></a>
</p>
<p align="center">
  <a href="https://github.com/zapplyjobs/Internships-2026"><img src="images/repo-int.png" alt="Internships 2026" height="40"></a>
  &nbsp;&nbsp;
  <a href="https://github.com/zapplyjobs/Research-Internships-for-Undergraduates"><img src="images/repo-rifu.png" alt="Research Internships" height="40"></a>
  &nbsp;&nbsp;
  <a href="https://github.com/zapplyjobs/underclassmen-internships"><img src="images/repo-uci.png" alt="Underclassmen Internships" height="40"></a>
</p>

---

### 🛠 Become a Contributor

<img src="images/contributor.png" alt="Become a Contributor">

Add new jobs to our listings keeping in mind the following:

- Located in the US, Canada, or Remote.
- Openings are currently accepting applications and not older than 1 week.
- Create a new issue to submit different job positions.
- Update a job by submitting an issue with the job URL and required changes.

Our team reviews within 24-48 hours and approved jobs are added to the main list!

Questions? Create a miscellaneous issue, and we'll assist! 🙏

${archivedJobs.length > 0 ? generateArchivedSection(archivedJobs, currentStats) : ""}

---

<div align="center">

**🎯 ${currentJobs.length} current opportunities from ${totalCompanies} companies**

**Found this helpful? Give it a ⭐ to support Zapply!**

*Not affiliated with any companies listed. All applications redirect to official career pages.*

---

**Last Updated**: ${currentDate}

</div>`;
}

// Update README file
async function updateReadme(allJobs, existingArchivedJobs = [], internshipData, stats) {
  try {
    console.log("📝 Generating README content...");
    
    // Filter jobs by age - only show jobs from last 7 days as current
    const { currentJobs, archivedJobs: newArchivedJobs } = filterJobsByAge(allJobs);
    
    // Combine new archived jobs with existing archived jobs
    const archivedJobs = [...newArchivedJobs, ...existingArchivedJobs];
    
    console.log(`📅 Jobs filtered: ${currentJobs.length} current (≤7 days), ${archivedJobs.length} archived (>7 days)`);
    
    const readmeContent = await generateReadme(
      currentJobs,
      archivedJobs,
      internshipData,
      stats
    );
    fs.writeFileSync("README.md", readmeContent, "utf8");
    console.log(`✅ README.md updated with ${currentJobs.length} current jobs`);

    console.log("\n📊 Summary:");
    console.log(`- Total current: ${currentJobs.length}`);
    console.log(`- Archived:      ${archivedJobs.length}`);
    console.log(
      `- Companies:     ${Object.keys(stats?.totalByCompany || {}).length}`
    );
  } catch (err) {
    console.error("❌ Error updating README:", err);
    throw err;
  }
}

module.exports = {
  generateJobTable,
  generateInternshipSection,
  generateArchivedSection,
  generateReadme,
  updateReadme,
  filterJobsByAge, 
  filterOutSeniorPositions,  // ADD THIS
};
