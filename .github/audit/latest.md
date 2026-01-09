# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T19:25:02.940Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-09T19:25:00.618Z] ========================================
[2026-01-09T19:25:00.620Z] Discord Bot Execution Log
[2026-01-09T19:25:00.620Z] Environment: GitHub Actions
[2026-01-09T19:25:00.620Z] Node Version: v20.19.6
[2026-01-09T19:25:00.620Z] ========================================
[2026-01-09T19:25:00.620Z] Environment Variables Check:
[2026-01-09T19:25:00.620Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T19:25:00.620Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T19:25:00.620Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T19:25:00.620Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T19:25:00.621Z] 
Multi-Channel Configuration:
[2026-01-09T19:25:00.621Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T19:25:00.621Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T19:25:00.621Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T19:25:00.621Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T19:25:00.621Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T19:25:00.621Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T19:25:00.621Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T19:25:00.621Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T19:25:00.621Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T19:25:00.621Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T19:25:00.621Z] 
Data Files Check:
[2026-01-09T19:25:00.623Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157500 bytes)
[2026-01-09T19:25:00.628Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 766573 bytes)
[2026-01-09T19:25:00.628Z] 
========================================
[2026-01-09T19:25:00.628Z] Starting Enhanced Discord Bot...
[2026-01-09T19:25:00.628Z] ========================================
[2026-01-09T19:25:01.186Z] [BOT] ✅ Loaded V2 database: 1495 jobs
[2026-01-09T19:25:02.016Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T19:25:02.016Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T19:25:02.017Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T19:25:02.028Z] [BOT] ✅ Loaded pending queue: 228 total (208 pending, 20 enriched, 0 posted)
[2026-01-09T19:25:02.028Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Partner Manager - Channels (Public Sector) at datadog
[2026-01-09T19:25:02.029Z] [BOT] ⏭️  Skipping duplicate: JID_93d2930f (posted within 7 days)
[2026-01-09T19:25:02.029Z] [BOT] ⏭️ Skipping already posted: Senior Partner Manager - Channels (Public Sector) at datadog
[2026-01-09T19:25:02.029Z] [BOT] ⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
⏭️ Skipping already posted: ROLE_076e9ead at vercel
[2026-01-09T19:25:02.029Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
[2026-01-09T19:25:02.029Z] [BOT] ⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-09T19:25:02.030Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-09T19:25:02.030Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
[2026-01-09T19:25:02.030Z] [BOT] ⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T19:25:02.030Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-09T19:25:02.030Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-09T19:25:02.030Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-09T19:25:02.031Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-09T19:25:02.031Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-09T19:25:02.031Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-09T19:25:02.031Z] [BOT] ⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-09T19:25:02.031Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-09T19:25:02.031Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-09T19:25:02.031Z] [BOT] ⏭️  Skipping duplicate: JID_305cb5c2 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Direct To Cell at SpaceX
[2026-01-09T19:25:02.031Z] [BOT] ⏭️  Skipping duplicate: JID_e942e20e (posted within 7 days)
⏭️ Skipping already posted: FP&A Manager,  GTM at vercel
[2026-01-09T19:25:02.032Z] [BOT] ⏭️  Skipping duplicate: JID_08a687ec (posted within 7 days)
⏭️ Skipping already posted:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-01-09T19:25:02.032Z] [BOT] ⏭️  Skipping duplicate: JID_d964c21b (posted within 7 days)
⏭️ Skipping already posted: Meteorologist - NASA Ballon Program at Peraton
[2026-01-09T19:25:02.032Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer, Universes at anthropic
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-09T19:25:02.043Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*