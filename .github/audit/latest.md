# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T22:25:29.625Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-09T22:25:27.976Z] ========================================
[2026-01-09T22:25:27.978Z] Discord Bot Execution Log
[2026-01-09T22:25:27.978Z] Environment: GitHub Actions
[2026-01-09T22:25:27.978Z] Node Version: v20.19.6
[2026-01-09T22:25:27.978Z] ========================================
[2026-01-09T22:25:27.978Z] Environment Variables Check:
[2026-01-09T22:25:27.978Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T22:25:27.978Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T22:25:27.978Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T22:25:27.979Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T22:25:27.979Z] 
Multi-Channel Configuration:
[2026-01-09T22:25:27.979Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T22:25:27.979Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T22:25:27.979Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T22:25:27.979Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T22:25:27.979Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T22:25:27.979Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T22:25:27.979Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T22:25:27.979Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T22:25:27.979Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T22:25:27.979Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T22:25:27.979Z] 
Data Files Check:
[2026-01-09T22:25:27.981Z] .github/data/new_jobs.json: ✅ Exists (10 items, 151973 bytes)
[2026-01-09T22:25:27.986Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 767385 bytes)
[2026-01-09T22:25:27.986Z] 
========================================
[2026-01-09T22:25:27.986Z] Starting Enhanced Discord Bot...
[2026-01-09T22:25:27.986Z] ========================================
[2026-01-09T22:25:28.505Z] [BOT] ✅ Loaded V2 database: 1497 jobs
[2026-01-09T22:25:28.999Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T22:25:29.000Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T22:25:29.000Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T22:25:29.010Z] [BOT] ✅ Loaded pending queue: 230 total (210 pending, 20 enriched, 0 posted)
[2026-01-09T22:25:29.011Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer, Universes at anthropic
[2026-01-09T22:25:29.011Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
[2026-01-09T22:25:29.011Z] [BOT] ⏭️ Skipping already posted: Research Engineer, Universes at anthropic
[2026-01-09T22:25:29.011Z] [BOT] ⏭️  Skipping duplicate: JID_ce1f556b (posted within 7 days)
[2026-01-09T22:25:29.012Z] [BOT] ⏭️ Skipping already posted: ROLE_2eb59940 at duolingo
⏭️  Skipping duplicate: JID_89b9b14b (posted within 7 days)
[2026-01-09T22:25:29.012Z] [BOT] ⏭️ Skipping already posted: ROLE_4bbc4a01  at anthropic
[2026-01-09T22:25:29.012Z] [BOT] ⏭️  Skipping duplicate: JID_0f96adef (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-01-09T22:25:29.012Z] [BOT] ⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
[2026-01-09T22:25:29.012Z] [BOT] ⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
⏭️ Skipping already posted: ROLE_076e9ead at vercel
[2026-01-09T22:25:29.012Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-09T22:25:29.012Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-09T22:25:29.013Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-09T22:25:29.013Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T22:25:29.013Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-09T22:25:29.013Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-09T22:25:29.013Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-09T22:25:29.013Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-09T22:25:29.013Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-09T22:25:29.014Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-09T22:25:29.014Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
⏭️  Skipping duplicate: JID_305cb5c2 (posted within 7 days)
[2026-01-09T22:25:29.014Z] [BOT] ⏭️ Skipping already posted: Software Engineer - Direct To Cell at SpaceX
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-09T22:25:29.025Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*