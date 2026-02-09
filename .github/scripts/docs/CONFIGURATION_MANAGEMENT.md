# Configuration Management - Template Guide

**Created:** 2026-02-09
**Purpose:** Guide for customizing configuration when cloning the template to other repos

---

## Configuration Hierarchy

```
.github/scripts/
├── config/
│   ├── domain-config.js         # Repo-specific business logic
│   └── jsearch-config.js        # JSearch API settings
└── shared/
    └── config/
        ├── api-limits.js        # Global rate limits & retry
        ├── categories.js        # Job categories & keywords
        └── locations.js         # US states, countries, cities
```

### Configuration Levels

| Level | File | Purpose | Template Customization |
|-------|------|---------|------------------------|
| **Global** | `shared/config/*` | Cross-repo settings | ❌ Never modify |
| **Repo** | `config/domain-config.js` | Business logic | ✅ Always customize |
| **Source** | `config/jsearch-config.js` | API-specific | ✅ Customize per source |

---

## domain-config.js - Repository Settings

### Required Customizations for Each Repo

When creating a new job board repo, update these settings in `config/domain-config.js`:

#### 1. Data Retention Settings

```javascript
module.exports = {
  // Data retention settings
  README_CUTOFF_DAYS: 7,        // Jobs shown in README (adjust for your repo)
  DATABASE_RETENTION_DAYS: 14,  // Jobs kept in database
```

**Recommendations by repo type:**
- **New-Grad-Jobs:** 7/14 days (fresh grads only)
- **Internships:** 14/30 days (internships last longer)
- **Remote-Jobs:** 7/14 days (fast-moving market)

#### 2. Location Filters

```javascript
  LOCATION_FILTERS: {
    // US-only job board (no international locations)
    ALLOWED_COUNTRIES: ['us', 'usa', 'united states'],
    REMOTE_KEYWORDS: ['remote', 'hybrid', 'nationwide', 'anywhere']
  },
```

**Customization options:**
- US-only: `['us', 'usa', 'united states']`
- International: Add country codes (e.g., `['uk', 'ca', 'de', ...]`)
- Global: Remove ALLOWED_COUNTRIES filter entirely

#### 3. Job Processing Limits

```javascript
  PROCESSING_LIMITS: {
    MAX_JOBS_PER_RUN: 20,        // Jobs sent to Discord per run
    MAX_JOBS_IN_README: null,     // No limit for README display
    BATCH_SIZE: 50,               // Jobs processed in batch
    DESCRIPTION_BATCH_SIZE: 10,   // Jobs fetched simultaneously
    DELAY_BETWEEN_REQUESTS: 1000  // ms delay between requests
  },
```

**Adjust based on:**
- Discord rate limits (30 messages/minute for bots)
- API quota limits
- Workflow timeout constraints

#### 4. Healthcare Filter (Repo-Specific)

```javascript
  // Healthcare job filtering (for New-Grad board - tech roles only)
  HEALTHCARE_FILTER_KEYWORDS: [
    'nurse', 'nursing', 'rn ', 'registered nurse', ...
  ],
```

**Customization:**
- **Tech boards:** Keep healthcare filter
- **Healthcare boards:** Remove entirely
- **General boards:** Consider removing

---

## jsearch-config.js - API Configuration

### Per-Repo Customizations

#### Request Quota

```javascript
module.exports = {
  // Rate limiting (adjust based on your API plan)
  MAX_REQUESTS_PER_DAY: 100,  // Free tier: 100, Paid: up to 5000
```

**JSearch API Tiers:**
| Tier | Quota | Cost |
|------|-------|------|
| Free | 100 requests/day | $0 |
| Basic | 1,000 requests/day | $50/month |
| Pro | 5,000 requests/day | $200/month |

#### Search Queries

```javascript
  // Query templates for job searches
  SEARCH_QUERIES: [
    // Customize for your repo's focus:
    'software engineer',      // General tech
    'new grad software engineer',  // Entry-level
    'internship',             // For internships repo
    ...
  ],
```

**Recommendations by repo:**
- **New-Grad-Jobs:** Include "new grad", "entry level", "junior"
- **Internships:** Include "internship", "summer intern", "co-op"
- **Remote-Jobs:** Include "remote", "hybrid", "anywhere"

---

## Global Configuration (shared/config/*)

### DO NOT MODIFY

These files are shared across all repos via the shared package:

| File | Purpose | Example Settings |
|------|---------|------------------|
| `api-limits.js` | Rate limits & retry | `socketHangUp.maxRetries: 5` |
| `categories.js` | Job categories | 11 categories with keywords |
| `locations.js` | Location data | 50 states, 200+ cities |

### To Customize Global Settings

If you need repo-specific values, override them in `domain-config.js`:

```javascript
// In domain-config.js
module.exports = {
  // Override shared config values
  OVERRIDE_SHARED_CONFIG: {
    'api-limits.socketHangUp.maxRetries': 3,  // Reduce retries
    'locations.maxDistance': 50,               // Limit remote radius
  }
};
```

---

## Configuration Priority

When values conflict, priority is:

1. **Environment variables** (highest) - e.g., `JSEARCH_API_KEY`
2. **Repo config** (`domain-config.js`, `jsearch-config.js`)
3. **Shared config** (`shared/config/*`)
4. **Code defaults** (lowest)

---

## Quick Setup Checklist

For a new job board repo:

- [ ] Copy `config/domain-config.js` from template
- [ ] Update `README_CUTOFF_DAYS` and `DATABASE_RETENTION_DAYS`
- [ ] Customize `LOCATION_FILTERS.ALLOWED_COUNTRIES`
- [ ] Adjust `PROCESSING_LIMITS.MAX_JOBS_PER_RUN` for your Discord rate limits
- [ ] Customize `SEARCH_QUERIES` in `jsearch-config.js`
- [ ] Set `MAX_REQUESTS_PER_DAY` based on your JSearch API tier
- [ ] Remove/adjust `HEALTHCARE_FILTER_KEYWORDS` if not a tech-only board
- [ ] Add environment variables for API keys
- [ ] Test configuration by running the job fetcher

---

## Configuration Examples by Repo Type

### New-Grad-Jobs-2026

```javascript
{
  README_CUTOFF_DAYS: 7,
  DATABASE_RETENTION_DAYS: 14,
  LOCATION_FILTERS: { ALLOWED_COUNTRIES: ['us', 'usa'] },
  PROCESSING_LIMITS: { MAX_JOBS_PER_RUN: 20 },
  HEALTHCARE_FILTER_KEYWORDS: [/* keep */]
}
```

### Internships-2026

```javascript
{
  README_CUTOFF_DAYS: 14,  // Longer retention
  DATABASE_RETENTION_DAYS: 30,
  LOCATION_FILTERS: { ALLOWED_COUNTRIES: ['us', 'usa'] },
  PROCESSING_LIMITS: { MAX_JOBS_PER_RUN: 15 },
  HEALTHCARE_FILTER_KEYWORDS: []  // Remove - internships include all fields
}
```

### Remote-Jobs-2026

```javascript
{
  README_CUTOFF_DAYS: 7,
  DATABASE_RETENTION_DAYS: 14,
  LOCATION_FILTERS: { ALLOWED_COUNTRIES: [] },  // Empty = global
  PROCESSING_LIMITS: { MAX_JOBS_PER_RUN: 25 },
  HEALTHCARE_FILTER_KEYWORDS: [/* keep */]
}
```

---

## Troubleshooting

### Jobs Not Appearing

**Check:**
- `README_CUTOFF_DAYS` - might be too short
- `LOCATION_FILTERS.ALLOWED_COUNTRIES` - might be filtering valid jobs
- `HEALTHCARE_FILTER_KEYWORDS` - might be filtering desired roles

### API Rate Limit Errors

**Check:**
- `MAX_REQUESTS_PER_DAY` in `jsearch-config.js`
- `DELAY_BETWEEN_REQUESTS` in `domain-config.js`
- JSearch API tier quota

### Discord Posting Issues

**Check:**
- `MAX_JOBS_PER_RUN` - might exceed Discord rate limits
- Discord bot rate limits: 30 messages/minute per channel

---

**Related Files:**
- `config/domain-config.js` - Repo-specific settings
- `config/jsearch-config.js` - JSearch API settings
- `shared/config/api-limits.js` - Global rate limits
- `shared/config/categories.js` - Global job categories

**Maintained By:** Zapply Engineering
