# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T22:52:16.978Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-09T22:52:14.924Z] ========================================
[2026-01-09T22:52:14.925Z] Discord Bot Execution Log
[2026-01-09T22:52:14.926Z] Environment: GitHub Actions
[2026-01-09T22:52:14.926Z] Node Version: v20.19.6
[2026-01-09T22:52:14.926Z] ========================================
[2026-01-09T22:52:14.926Z] Environment Variables Check:
[2026-01-09T22:52:14.926Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T22:52:14.926Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T22:52:14.926Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T22:52:14.926Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T22:52:14.926Z] 
Multi-Channel Configuration:
[2026-01-09T22:52:14.926Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T22:52:14.926Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T22:52:14.926Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T22:52:14.926Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T22:52:14.927Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T22:52:14.927Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T22:52:14.927Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T22:52:14.927Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T22:52:14.927Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T22:52:14.927Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T22:52:14.927Z] 
Data Files Check:
[2026-01-09T22:52:14.928Z] .github/data/new_jobs.json: ✅ Exists (10 items, 150221 bytes)
[2026-01-09T22:52:14.934Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 768377 bytes)
[2026-01-09T22:52:14.934Z] 
========================================
[2026-01-09T22:52:14.934Z] Starting Enhanced Discord Bot...
[2026-01-09T22:52:14.934Z] ========================================
[2026-01-09T22:52:15.444Z] [BOT] ✅ Loaded V2 database: 1499 jobs
[2026-01-09T22:52:16.187Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T22:52:16.188Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T22:52:16.188Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T22:52:16.196Z] [BOT] ✅ Loaded pending queue: 227 total (207 pending, 20 enriched, 0 posted)
[2026-01-09T22:52:16.196Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-09T22:52:16.196Z] [BOT] [BOT] 🔍 Sample enriched job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-01-09T22:52:16.197Z] [BOT] ⏭️  Skipping duplicate: JID_ce1f556b (posted within 7 days)
[2026-01-09T22:52:16.197Z] [BOT] ⏭️ Skipping already posted: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-01-09T22:52:16.197Z] [BOT] ⏭️  Skipping duplicate: JID_9a274ef8 (posted within 7 days)
⏭️ Skipping already posted: Channel Development Representative, West (Phoenix)  at verkada
[2026-01-09T22:52:16.197Z] [BOT] ⏭️  Skipping duplicate: JID_e8212de3 (posted within 7 days)
[2026-01-09T22:52:16.198Z] [BOT] ⏭️ Skipping already posted: Senior Sales Engineer - Key Accounts (West) at datadog
[2026-01-09T22:52:16.198Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer, Universes at anthropic
[2026-01-09T22:52:16.198Z] [BOT] ⏭️  Skipping duplicate: JID_89b9b14b (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bbc4a01  at anthropic
[2026-01-09T22:52:16.198Z] [BOT] ⏭️  Skipping duplicate: JID_0f96adef (posted within 7 days)
[2026-01-09T22:52:16.198Z] [BOT] ⏭️ Skipping already posted: Customer Success Manager, Digital Native Businesses  at anthropic
⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
[2026-01-09T22:52:16.198Z] [BOT] ⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
[2026-01-09T22:52:16.198Z] [BOT] ⏭️ Skipping already posted: ROLE_076e9ead at vercel
[2026-01-09T22:52:16.199Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-09T22:52:16.199Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-09T22:52:16.199Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-09T22:52:16.199Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
[2026-01-09T22:52:16.199Z] [BOT] ⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-09T22:52:16.199Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-09T22:52:16.199Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-09T22:52:16.200Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-09T22:52:16.200Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
[2026-01-09T22:52:16.200Z] [BOT] ⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-09T22:52:16.200Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-09T22:52:16.200Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-09T22:52:16.211Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*