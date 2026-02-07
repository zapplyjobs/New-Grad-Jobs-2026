const fs = require("fs");
const path = require("path");
const jobCategories = require("./job_categories.json");
const {
  companies,
  ALL_COMPANIES,
  getCompanyEmoji,
  getCompanyCareerUrl,
  formatTimeAgo,
  getExperienceLevel,
  formatLocation,
} = require("./utils");

// Path to repo root README.md
const REPO_README_PATH = path.join(__dirname, '../../../README.md');

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

// Helper function to categorize a job based on keywords
function getJobCategoryFromKeywords(jobTitle, jobDescription = '') {
  const text = `${jobTitle} ${jobDescription}`.toLowerCase();

  // Check each category's keywords
  for (const [categoryKey, categoryData] of Object.entries(jobCategories)) {
    for (const keyword of categoryData.keywords) {
      if (text.includes(keyword.toLowerCase())) {
        return categoryKey;
      }
    }
  }

  return 'software_engineering'; // Default fallback
}

// Generate job table organized by job type categories
function generateJobTable(jobs) {
  console.log(`🔍 DEBUG: Starting generateJobTable with ${jobs.length} total jobs`);

  jobs = filterOutSeniorPositions(jobs);
  console.log(`🔍 DEBUG: After filtering seniors: ${jobs.length} jobs remaining`);

  if (jobs.length === 0) {
    return `| Company | Role | Location | Posted | Level | Apply |
|---------|------|----------|--------|-------|-------|
| *No current openings* | *Check back tomorrow* | *-* | *-* | *-* | *-* |`;
  }

  console.log(`🏷️ DEBUG: Configured job categories:`);
  Object.entries(jobCategories).forEach(([categoryKey, category]) => {
    console.log(`  ${category.emoji} ${category.title}: ${category.keywords.join(', ')}`);
  });

  // Categorize each job and group by category
  const jobsByCategory = {};
  const categorizedJobs = new Set();

  jobs.forEach((job) => {
    const categoryKey = getJobCategoryFromKeywords(job.job_title, job.job_description);
    categorizedJobs.add(job.job_id);

    if (!jobsByCategory[categoryKey]) {
      jobsByCategory[categoryKey] = [];
    }
    jobsByCategory[categoryKey].push(job);
  });

  console.log(`\n📈 DEBUG: Jobs by category:`);
  Object.entries(jobsByCategory).forEach(([categoryKey, categoryJobs]) => {
    console.log(`  ${jobCategories[categoryKey]?.title || categoryKey}: ${categoryJobs.length} jobs`);
  });

  let output = "";

  // Handle each job category
  Object.entries(jobCategories).forEach(([categoryKey, categoryData]) => {
    const categoryJobs = jobsByCategory[categoryKey];

    if (!categoryJobs || categoryJobs.length === 0) {
      return; // Skip empty categories
    }

    const totalJobs = categoryJobs.length;
    console.log(`\n📝 DEBUG: Processing category "${categoryData.title}" with ${totalJobs} jobs`);

    // Group jobs by company within this category
    const jobsByCompany = {};
    categoryJobs.forEach((job) => {
      const company = job.employer_name;
      if (!jobsByCompany[company]) {
        jobsByCompany[company] = [];
      }
      jobsByCompany[company].push(job);
    });

    // Start collapsible category section
    output += `<details>\n`;
    output += `<summary><h3>${categoryData.emoji} <strong>${categoryData.title}</strong> (${totalJobs} positions)</h3></summary>\n\n`;

    // Handle companies with >10 jobs separately
    const bigCompanies = Object.entries(jobsByCompany)
      .filter(([_, companyJobs]) => companyJobs.length > 10)
      .sort((a, b) => b[1].length - a[1].length);

    bigCompanies.forEach(([companyName, companyJobs]) => {
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
        const role = job.job_title.length > 35 ? job.job_title.substring(0, 32) + "..." : job.job_title;
        const location = formatLocation(job.job_city, job.job_state);
        const posted = formatTimeAgo(job.job_posted_at_datetime_utc);
        const level = getExperienceLevel(job.job_title, job.job_description);
        const applyLink = job.job_apply_link || getCompanyCareerUrl(job.employer_name);

        const levelShort = {
          "Entry-Level": '![Entry](https://img.shields.io/badge/-Entry-brightgreen "Entry-Level")',
          "Mid-Level": '![Mid](https://img.shields.io/badge/-Mid-blue "Mid-Level")',
          "Senior": '![Senior](https://img.shields.io/badge/-Senior-red "Senior-Level")'
        }[level] || level;

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
        output += `\n</details>\n\n`;
      } else {
        output += "\n";
      }
    });

    // Combine companies with <=10 jobs into one table
    const smallCompanies = Object.entries(jobsByCompany)
      .filter(([_, companyJobs]) => companyJobs.length <= 10)
      .sort((a, b) => a[0].localeCompare(b[0]));

    if (smallCompanies.length > 0) {
      output += `| Company | Role | Location | Posted | Level | Apply |\n`;
      output += `|---------|------|----------|--------|-------|-------|\n`;

      smallCompanies.forEach(([companyName, companyJobs]) => {
        const emoji = getCompanyEmoji(companyName);

        companyJobs.forEach((job) => {
          const role = job.job_title.length > 35 ? job.job_title.substring(0, 32) + "..." : job.job_title;
          const location = formatLocation(job.job_city, job.job_state);
          const posted = formatTimeAgo(job.job_posted_at_datetime_utc);
          const level = getExperienceLevel(job.job_title, job.job_description);
          const applyLink = job.job_apply_link || getCompanyCareerUrl(job.employer_name);

          const levelShort = {
            "Entry-Level": '![Entry](https://img.shields.io/badge/-Entry-brightgreen "Entry-Level")',
            "Mid-Level": '![Mid](https://img.shields.io/badge/-Mid-blue "Mid-Level")',
            "Senior": '![Senior](https://img.shields.io/badge/-Senior-red "Senior-Level")'
          }[level] || level;

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

    // End collapsible category section
    output += `</details>\n\n`;
  });

  console.log(`\n🎉 DEBUG: Finished generating job table with ${categorizedJobs.size} jobs categorized`);
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

  archivedJobs = filterOutSeniorPositions(archivedJobs);

  // Get top category from archived jobs
  const categoryCounts = {};
  archivedJobs.forEach(job => {
    const cat = getJobCategoryFromKeywords(job.job_title, job.job_description);
    const catTitle = jobCategories[cat]?.title || 'Software Engineering';
    categoryCounts[catTitle] = (categoryCounts[catTitle] || 0) + 1;
  });
  const topCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Software Engineering';

  return `
---

<details>
<summary><h2>🗂️ <strong>ARCHIVED SWE JOBS</strong> - ${
    archivedJobs.length
  } Older Positions (7+ days old) - Click to Expand 👆</h2></summary>

### 📊 **Archived Job Stats**
- **📁 Total Jobs**: ${archivedJobs.length} positions
- **🏢 Companies**: ${Object.keys(stats.totalByCompany).length} companies
- **🏷️ Top Category**: ${topCategory}

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

    // Count by category (using new job categories)
    const categoryKey = getJobCategoryFromKeywords(job.job_title, job.job_description);
    const categoryTitle = jobCategories[categoryKey]?.title || 'Software Engineering';
    currentStats.byCategory[categoryTitle] = (currentStats.byCategory[categoryTitle] || 0) + 1;

    // Count by company
    const company = job.employer_name;
    currentStats.totalByCompany[company] = (currentStats.totalByCompany[company] || 0) + 1;
  });

  const totalCompanies = Object.keys(currentStats.totalByCompany).length;

  // Get top category for badge
  const topCategoryEntry = Object.entries(currentStats.byCategory).sort((a, b) => b[1] - a[1])[0];
  const topCategory = topCategoryEntry?.[0] || 'Software Engineering';
  const topCategoryCount = topCategoryEntry?.[1] || 0;
  const topCategoryBadge = topCategory.replace(/\s+/g, '_').substring(0, 20);

  return `



<div align="center">

<!-- Banner -->
<img src="images/ngj-heading.png" alt="New Grad Jobs 2026">

# New Grad Jobs 2026

![Total Jobs](https://img.shields.io/badge/Total_Jobs-${currentJobs.length}-brightgreen?style=flat&logo=briefcase)
![Companies](https://img.shields.io/badge/Companies-${totalCompanies}-blue?style=flat&logo=building)
![${topCategory.substring(0, 15)}](https://img.shields.io/badge/${topCategoryBadge}-${topCategoryCount}-red?style=flat&logo=star)
![Updated](https://img.shields.io/badge/Updated-Every_15_Minutes-orange?style=flat&logo=calendar)

Updated job openings for new grads in SWE and other tech roles | 2026

</div>

<p align="center">Welcome to an actively maintained collection of software engineering, tech, and IT jobs for new grads, data analysts, scientists, and entry-level software developers by <a href="https://zapply.jobs"><img src="https://zapply.jobs/_astro/logo-white.BELjrjiH_Z18qziS.svg" alt="Zapply logo" height="20" align="center"></a></p>

> [!NOTE]
> This repo tracks roles in the United States and remote positions across tech giants and fast-growing startups.

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
  <a href="https://zapply.jobs/"><img src="images/zapply-button.png" alt="Visit Our Website" width="300"></a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://chromewebstore.google.com/detail/zapply-instant-autofill-f/lkomdndabnpakcabffgobiejimpamjom"><img src="images/extension-button.png" alt="Install Our Extension" width="300"></a>
</p>

---

## Explore Around

<img src="images/community.png" alt="Explore Around">

Connect and seek advice from a growing network of fellow students and new grads.

<p align="center">
  <a href="https://discord.gg/UswBsduwcD"><img src="images/discord-2d.png" alt="Visit Our Website" width="250"></a>
  &nbsp;&nbsp;
  <a href="https://www.instagram.com/zapplyjobs"><img src="images/instagram-icon-2d.png" alt="Instagram" width="120"></a>
  &nbsp;&nbsp;
  <a href="https://www.tiktok.com/@zapplyjobs"><img src="images/tiktok-icon-2d.png" alt="TikTok" width="120"></a>
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
  <a href="https://github.com/zapplyjobs/Remote-Jobs-2026"><img src="images/repo-rmj.png" alt="Remote Jobs" height="40"></a>
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

## Become a Contributor

<img src="images/contributor.png" alt="Become a Contributor">

Add new jobs to our listings keeping in mind the following:

- Located in the US.
- Openings are currently accepting applications and not older than 1 week.
- Create a new issue to submit different job positions.
- Update a job by submitting an issue with the job URL and required changes.

Our team reviews within 24-48 hours and approved jobs are added to the main list!

Questions? Create a miscellaneous issue, and we'll assist! 🙏

${archivedJobs.length > 0 ? generateArchivedSection(archivedJobs, currentStats) : ""}

<div align="center">

**🎯 ${currentJobs.length} current opportunities from ${totalCompanies} companies**

**Found this helpful? Give it a ⭐ to support Zapply!**

*Not affiliated with any companies listed. All applications redirect to official career pages.*

---

**Last Updated**: ${currentDate}

</div>`;
}

// Update README file
async function updateReadme(currentJobs, existingArchivedJobs = [], internshipData, stats) {
  try {
    console.log("📝 Generating README content...");

    // Jobs are already filtered by processJobs() - no need to re-filter
    // currentJobs: jobs <7 days old, existingArchivedJobs: jobs >7 days old

    const archivedJobs = existingArchivedJobs;

    console.log(`📅 Using pre-filtered jobs: ${currentJobs.length} current (≤7 days), ${archivedJobs.length} archived (>7 days)`);

    const readmeContent = await generateReadme(
      currentJobs,
      archivedJobs,
      internshipData,
      stats
    );
    fs.writeFileSync(REPO_README_PATH, readmeContent, "utf8");
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
