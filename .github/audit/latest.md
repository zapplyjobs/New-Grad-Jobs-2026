# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T16:57:45.261Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-09T16:57:42.796Z] ========================================
[2026-01-09T16:57:42.798Z] Discord Bot Execution Log
[2026-01-09T16:57:42.798Z] Environment: GitHub Actions
[2026-01-09T16:57:42.798Z] Node Version: v20.19.6
[2026-01-09T16:57:42.798Z] ========================================
[2026-01-09T16:57:42.798Z] Environment Variables Check:
[2026-01-09T16:57:42.798Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T16:57:42.798Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T16:57:42.798Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T16:57:42.798Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T16:57:42.798Z] 
Multi-Channel Configuration:
[2026-01-09T16:57:42.799Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T16:57:42.799Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T16:57:42.799Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T16:57:42.799Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T16:57:42.799Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T16:57:42.799Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T16:57:42.799Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T16:57:42.799Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T16:57:42.799Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T16:57:42.799Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T16:57:42.799Z] 
Data Files Check:
[2026-01-09T16:57:42.800Z] .github/data/new_jobs.json: ✅ Exists (10 items, 147213 bytes)
[2026-01-09T16:57:42.806Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 765908 bytes)
[2026-01-09T16:57:42.806Z] 
========================================
[2026-01-09T16:57:42.806Z] Starting Enhanced Discord Bot...
[2026-01-09T16:57:42.806Z] ========================================
[2026-01-09T16:57:43.341Z] [BOT] ✅ Loaded V2 database: 1492 jobs
[2026-01-09T16:57:43.959Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T16:57:43.959Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T16:57:43.960Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T16:57:43.970Z] [BOT] ✅ Loaded pending queue: 225 total (205 pending, 20 enriched, 0 posted)
[2026-01-09T16:57:43.970Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer, Universes at anthropic
[2026-01-09T16:57:43.971Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
[2026-01-09T16:57:43.971Z] [BOT] ⏭️ Skipping already posted: Research Engineer, Universes at anthropic
[2026-01-09T16:57:43.971Z] [BOT] ⏭️  Skipping duplicate: JID_bab53bb3 (posted within 7 days)
[2026-01-09T16:57:43.972Z] [BOT] ⏭️ Skipping already posted: ROLE_5f7570db at samsara
⏭️  Skipping duplicate: JID_7ec53afc (posted within 7 days)
[2026-01-09T16:57:43.972Z] [BOT] ⏭️ Skipping already posted: Strategic Account Executive, Asset & Wealth Management at anthropic
[2026-01-09T16:57:43.972Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-09T16:57:43.972Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T16:57:43.972Z] [BOT] ⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ce65518c at USAA
[2026-01-09T16:57:43.972Z] [BOT] ⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
[2026-01-09T16:57:43.972Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
[2026-01-09T16:57:43.973Z] [BOT] ⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T16:57:43.973Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T16:57:43.973Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T16:57:43.973Z] [BOT] ⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
[2026-01-09T16:57:43.973Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
[2026-01-09T16:57:43.973Z] [BOT] ⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
[2026-01-09T16:57:43.973Z] [BOT] ⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
[2026-01-09T16:57:43.974Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T16:57:43.974Z] [BOT] ⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
[2026-01-09T16:57:43.974Z] [BOT] ⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
[2026-01-09T16:57:43.974Z] [BOT] ⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
[2026-01-09T16:57:43.974Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Amazon
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-09T16:57:43.985Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*