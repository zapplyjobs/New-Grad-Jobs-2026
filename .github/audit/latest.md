# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T18:47:00.022Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-09T18:46:57.424Z] ========================================
[2026-01-09T18:46:57.425Z] Discord Bot Execution Log
[2026-01-09T18:46:57.426Z] Environment: GitHub Actions
[2026-01-09T18:46:57.426Z] Node Version: v20.19.6
[2026-01-09T18:46:57.426Z] ========================================
[2026-01-09T18:46:57.426Z] Environment Variables Check:
[2026-01-09T18:46:57.426Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T18:46:57.426Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T18:46:57.426Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T18:46:57.426Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T18:46:57.426Z] 
Multi-Channel Configuration:
[2026-01-09T18:46:57.426Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T18:46:57.427Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T18:46:57.427Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T18:46:57.427Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T18:46:57.427Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T18:46:57.427Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T18:46:57.427Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T18:46:57.427Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T18:46:57.427Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T18:46:57.427Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T18:46:57.427Z] 
Data Files Check:
[2026-01-09T18:46:57.428Z] .github/data/new_jobs.json: ✅ Exists (10 items, 150654 bytes)
[2026-01-09T18:46:57.434Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 767852 bytes)
[2026-01-09T18:46:57.434Z] 
========================================
[2026-01-09T18:46:57.434Z] Starting Enhanced Discord Bot...
[2026-01-09T18:46:57.434Z] ========================================
[2026-01-09T18:46:57.957Z] [BOT] ✅ Loaded V2 database: 1496 jobs
[2026-01-09T18:46:58.634Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T18:46:58.635Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T18:46:58.635Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T18:46:58.646Z] [BOT] ✅ Loaded pending queue: 228 total (208 pending, 20 enriched, 0 posted)
[2026-01-09T18:46:58.646Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-09T18:46:58.647Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
[2026-01-09T18:46:58.647Z] [BOT] ⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-09T18:46:58.647Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
[2026-01-09T18:46:58.647Z] [BOT] ⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-09T18:46:58.647Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-09T18:46:58.648Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T18:46:58.648Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-09T18:46:58.648Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-09T18:46:58.648Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-09T18:46:58.648Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-09T18:46:58.648Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-09T18:46:58.648Z] [BOT] ⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
[2026-01-09T18:46:58.649Z] [BOT] ⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
[2026-01-09T18:46:58.649Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-09T18:46:58.649Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
[2026-01-09T18:46:58.649Z] [BOT] ⏭️ Skipping already posted: ROLE_884052b1 at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-09T18:46:58.649Z] [BOT] ⏭️  Skipping duplicate: JID_305cb5c2 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Direct To Cell at SpaceX
[2026-01-09T18:46:58.649Z] [BOT] ⏭️  Skipping duplicate: JID_e942e20e (posted within 7 days)
⏭️ Skipping already posted: FP&A Manager,  GTM at vercel
⏭️  Skipping duplicate: JID_08a687ec (posted within 7 days)
[2026-01-09T18:46:58.649Z] [BOT] ⏭️ Skipping already posted:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-01-09T18:46:58.650Z] [BOT] ⏭️  Skipping duplicate: JID_d964c21b (posted within 7 days)
⏭️ Skipping already posted: Meteorologist - NASA Ballon Program at Peraton
[2026-01-09T18:46:58.650Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer, Universes at anthropic
⏭️  Skipping duplicate: JID_bab53bb3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f7570db at samsara
[2026-01-09T18:46:58.650Z] [BOT] ⏭️  Skipping duplicate: JID_633791af (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Front End Web at Intuit
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-09T18:46:58.661Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*