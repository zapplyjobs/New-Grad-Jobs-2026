# README Badge Format - Template Standard

**Created:** 2026-02-08
**Purpose:** Standardize badge format across all Zapply job board repositories

---

## Badge Format Specification

### Top-Level Badges (Required)

All job board repositories MUST include these 4 badges at the top of README.md:

```markdown
<div align="center">

<!-- Banner -->
<img src="images/[REPO]-heading.png" alt="[Repo Name]">

# [Repo Name]

![Total Jobs](https://img.shields.io/badge/Total_Jobs-{count}-brightgreen?style=flat&logo=briefcase)
![Companies](https://img.shields.io/badge/Companies-{count}-blue?style=flat&logo=building)
![{Top Category}](https://img.shields.io/badge/{Top_Category_Badge}-{count}-red?style=flat&logo=star)
![Updated](https://img.shields.io/badge/Updated-{update_frequency}-orange?style=flat&logo=calendar)

Updated job openings for new grads in SWE and other tech roles | {Year}

</div>
```

### Badge Definitions

| Badge | Label | Color | Logo | Description |
|-------|-------|-------|------|-------------|
| **Total Jobs** | `Total_Jobs` | `brightgreen` | `briefcase` | Number of active job postings |
| **Companies** | `Companies` | `blue` | `building` | Number of unique companies hiring |
| **Top Category** | `{category_name}` | `red` | `star` | Most common job category with count |
| **Updated** | `Updated` | `orange` | `calendar` | Update frequency (e.g., "Every_15_Minutes") |

### URL Encoding

Badge labels MUST be URL-encoded:
- Spaces → Underscores (`_`)
- Special characters → Percent-encoded

**Examples:**
- `Software Engineering` → `Software_Engineering`
- `Every 15 Minutes` → `Every_15_Minutes`

---

## Badge Generation (readme-generator.js)

### Implementation Location

The badges are generated in `.github/scripts/job-fetcher/readme-generator.js`

### Code Reference

```javascript
// Line 353-356 in readme-generator.js
![Total Jobs](https://img.shields.io/badge/Total_Jobs-${currentJobs.length}-brightgreen?style=flat&logo=briefcase)
![Companies](https://img.shields.io/badge/Companies-${totalCompanies}-blue?style=flat&logo=building)
![${topCategory.substring(0, 15)}](https://img.shields.io/badge/${topCategoryBadge}-${topCategoryCount}-red?style=flat&logo=star)
![Updated](https://img.shields.io/badge/Updated-Every_15_Minutes-orange?style=flat&logo=calendar)
```

### Data Sources

| Badge | Source Variable | Calculation |
|-------|----------------|-------------|
| Total Jobs | `currentJobs.length` | Count of jobs < 7 days old |
| Companies | `totalCompanies` | Count of unique employer names |
| Top Category | `topCategory` | Most frequent job category |
| Updated | Static text | Configured per repo |

---

## Level Badges (Job Tables)

Individual job postings use level badges:

| Level | Badge Markdown | Color |
|-------|----------------|-------|
| Entry-Level | `![Entry](https://img.shields.io/badge/-Entry-brightgreen "Entry-Level")` | Green |
| Mid-Level | `![Mid](https://img.shields.io/badge/-Mid-blue "Mid-Level")` | Blue |
| Senior | `![Senior](https://img.shields.io/badge/-Senior-red "Senior-Level")` | Red |

**Code:** Lines 151-155, 195-199 in readme-generator.js

---

## Repository-Specific Configurations

### New-Grad-Jobs-2026
```javascript
const BADGE_CONFIG = {
  update_frequency: "Every_15_Minutes",
  target_year: "2026",
  banner_image: "images/ngj-heading.png"
};
```

### Internships-2026
```javascript
const BADGE_CONFIG = {
  update_frequency: "Daily",
  target_year: "2026",
  banner_image: "images/internships-heading.png"
};
```

### Remote-Jobs-2026
```javascript
const BADGE_CONFIG = {
  update_frequency: "Hourly",
  target_year: "2026",
  banner_image: "images/remote-heading.png"
};
```

---

## Template Setup Instructions

### For New Repos

1. **Copy readme-generator.js** from template repo
2. **Update badge config** in the copied file:
   ```javascript
   const REPO_NAME = "Your-Repo-Name";
   const TARGET_YEAR = "2026";
   const UPDATE_FREQUENCY = "Every_15_Minutes";
   ```
3. **Update banner image** path
4. **Run update-readme.yml** workflow to generate initial badges

### Badge Color Options

| Color | Usage |
|-------|-------|
| `brightgreen` | High count, positive status |
| `blue` | Neutral information |
| `red` | Alerts, important categories |
| `orange` | Time-based, frequency info |
| `yellow` | Warnings, medium priority |
| `green` | Standard success indicators |

---

## Validation

### Automated Check

The `.github/scripts/validate-secrets.js` script validates badge format by checking:
- Badge URLs are properly formatted
- Colors match approved list
- Logos are valid shields.io icons

### Manual Check

```bash
# Preview badges locally
curl "https://img.shields.io/badge/Total_Jobs-100-brightgreen?style=flat&logo=briefcase"
```

---

## Update Workflow

### Automatic Updates

Badges are regenerated automatically when:
- `update-jobs.yml` runs (every 15 minutes)
- `update-readme.yml` runs (manual trigger)
- Job data changes

### Manual Update

```bash
# Trigger README regeneration
npm run update-readme
```

---

## Troubleshooting

### Badge Not Displaying

**Cause:** Invalid URL encoding or color
**Fix:** Check spaces are replaced with underscores

### Count Incorrect

**Cause:** Data not filtered correctly
**Fix:** Verify `filterJobsByAge()` function in readme-generator.js

### Category Badge Missing

**Cause:** No jobs in top category
**Fix:** Check `jobCategories` config in job_categories.json

---

**Related Files:**
- `.github/scripts/job-fetcher/readme-generator.js` - Badge generation
- `.github/scripts/job-fetcher/job_categories.json` - Category config
- `.github/workflows/update-readme.yml` - Badge update workflow

**Maintained By:** Zapply Engineering
