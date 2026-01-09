# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T17:41:16.928Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-09T17:41:14.953Z] ========================================
[2026-01-09T17:41:14.955Z] Discord Bot Execution Log
[2026-01-09T17:41:14.955Z] Environment: GitHub Actions
[2026-01-09T17:41:14.955Z] Node Version: v20.19.6
[2026-01-09T17:41:14.956Z] ========================================
[2026-01-09T17:41:14.956Z] Environment Variables Check:
[2026-01-09T17:41:14.956Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T17:41:14.956Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T17:41:14.956Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T17:41:14.956Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T17:41:14.956Z] 
Multi-Channel Configuration:
[2026-01-09T17:41:14.956Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T17:41:14.956Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T17:41:14.956Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T17:41:14.957Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T17:41:14.957Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T17:41:14.957Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T17:41:14.957Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T17:41:14.957Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T17:41:14.957Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T17:41:14.957Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T17:41:14.957Z] 
Data Files Check:
[2026-01-09T17:41:14.958Z] .github/data/new_jobs.json: ✅ Exists (10 items, 191545 bytes)
[2026-01-09T17:41:14.964Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 768155 bytes)
[2026-01-09T17:41:14.964Z] 
========================================
[2026-01-09T17:41:14.964Z] Starting Enhanced Discord Bot...
[2026-01-09T17:41:14.964Z] ========================================
[2026-01-09T17:41:15.492Z] [BOT] ✅ Loaded V2 database: 1496 jobs
[2026-01-09T17:41:16.099Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T17:41:16.100Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T17:41:16.100Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T17:41:16.111Z] [BOT] ✅ Loaded pending queue: 230 total (210 pending, 20 enriched, 0 posted)
[2026-01-09T17:41:16.111Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: FP&A Manager,  GTM at vercel
[2026-01-09T17:41:16.112Z] [BOT] ⏭️  Skipping duplicate: JID_e942e20e (posted within 7 days)
[2026-01-09T17:41:16.112Z] [BOT] ⏭️ Skipping already posted: FP&A Manager,  GTM at vercel
[2026-01-09T17:41:16.112Z] [BOT] ⏭️  Skipping duplicate: JID_08a687ec (posted within 7 days)
[2026-01-09T17:41:16.113Z] [BOT] ⏭️ Skipping already posted:  Strategy and Messaging Communications Lead, Narrative at anthropic
⏭️  Skipping duplicate: JID_d964c21b (posted within 7 days)
[2026-01-09T17:41:16.113Z] [BOT] ⏭️ Skipping already posted: Meteorologist - NASA Ballon Program at Peraton
[2026-01-09T17:41:16.113Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer, Universes at anthropic
[2026-01-09T17:41:16.113Z] [BOT] ⏭️  Skipping duplicate: JID_bab53bb3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f7570db at samsara
[2026-01-09T17:41:16.113Z] [BOT] ⏭️  Skipping duplicate: JID_633791af (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Front End Web at Intuit
[2026-01-09T17:41:16.114Z] [BOT] ⏭️  Skipping duplicate: JID_648a0f2e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Tax Preparation Data Management at Intuit
⏭️  Skipping duplicate: JID_7ec53afc (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Asset & Wealth Management at anthropic
⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ce65518c at USAA
⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T17:41:16.115Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T17:41:16.115Z] [BOT] ⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
[2026-01-09T17:41:16.115Z] [BOT] ⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T17:41:16.115Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
[2026-01-09T17:41:16.115Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T17:41:16.116Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-09T17:41:16.127Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*