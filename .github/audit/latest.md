# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T23:50:05.017Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-06T23:50:01.755Z] ========================================
[2026-01-06T23:50:01.757Z] Discord Bot Execution Log
[2026-01-06T23:50:01.757Z] Environment: GitHub Actions
[2026-01-06T23:50:01.757Z] Node Version: v20.19.6
[2026-01-06T23:50:01.757Z] ========================================
[2026-01-06T23:50:01.757Z] Environment Variables Check:
[2026-01-06T23:50:01.757Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T23:50:01.757Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T23:50:01.757Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T23:50:01.757Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T23:50:01.757Z] 
Multi-Channel Configuration:
[2026-01-06T23:50:01.757Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T23:50:01.758Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T23:50:01.758Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T23:50:01.758Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T23:50:01.758Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T23:50:01.758Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T23:50:01.758Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T23:50:01.758Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T23:50:01.758Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T23:50:01.758Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T23:50:01.758Z] 
Data Files Check:
[2026-01-06T23:50:01.759Z] .github/data/new_jobs.json: ✅ Exists (10 items, 111115 bytes)
[2026-01-06T23:50:01.764Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 712480 bytes)
[2026-01-06T23:50:01.764Z] 
========================================
[2026-01-06T23:50:01.764Z] Starting Enhanced Discord Bot...
[2026-01-06T23:50:01.764Z] ========================================
[2026-01-06T23:50:02.268Z] [BOT] ✅ Loaded V2 database: 1394 jobs
[2026-01-06T23:50:04.285Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T23:50:04.286Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T23:50:04.286Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T23:50:04.288Z] [BOT] ✅ Loaded pending queue: 70 total (50 pending, 20 enriched, 0 posted)
[2026-01-06T23:50:04.289Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Staff Product Manager, Payments at discord
[2026-01-06T23:50:04.289Z] [BOT] ⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
[2026-01-06T23:50:04.289Z] [BOT] ⏭️ Skipping already posted: Staff Product Manager, Payments at discord
[2026-01-06T23:50:04.289Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Industries at anthropic
[2026-01-06T23:50:04.290Z] [BOT] ⏭️  Skipping duplicate: JID_23521099 (posted within 7 days)
⏭️ Skipping already posted: Sales Analytics Engineer 1 - IV at Cincinnati Financial
[2026-01-06T23:50:04.290Z] [BOT] ⏭️  Skipping duplicate: JID_5858d9d4 (posted within 7 days)
[2026-01-06T23:50:04.290Z] [BOT] ⏭️ Skipping already posted: ROLE_a89ec93f at Rivian
⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-319271 (posted within 7 days)
⏭️ Skipping already posted: Software Developer 1 at Oracle
[2026-01-06T23:50:04.290Z] [BOT] ⏭️  Skipping duplicate: JID_9d819ca6 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9151f1cd at NBCUniversal
[2026-01-06T23:50:04.290Z] [BOT] ⏭️  Skipping duplicate: JID_b288fb7c (posted within 7 days)
⏭️ Skipping already posted: SMB Account Executive, Industries at anthropic
[2026-01-06T23:50:04.290Z] [BOT] ⏭️  Skipping duplicate: JID_b54cc3d5-cx_1-job-10003191 (posted within 7 days)
[2026-01-06T23:50:04.291Z] [BOT] ⏭️ Skipping already posted: Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Principal Engineer System Protection at Berkshire Hathaway Energy
⏭️  Skipping duplicate: JID_7ed7fe99 (posted within 7 days)
⏭️ Skipping already posted: ROLE_593bd0fe at anthropic
[2026-01-06T23:50:04.291Z] [BOT] ⏭️  Skipping duplicate: JID_b8474f61 (posted within 7 days)
[2026-01-06T23:50:04.291Z] [BOT] ⏭️ Skipping already posted: Senior Data Scientist, Analytics - Growth/SEO at discord
⏭️  Skipping duplicate: JID_220d5816 (posted within 7 days)
⏭️ Skipping already posted: ROLE_08ee845d at dropbox
[2026-01-06T23:50:04.291Z] [BOT] ⏭️  Skipping duplicate: JID_4f5bc67c (posted within 7 days)
[2026-01-06T23:50:04.291Z] [BOT] ⏭️ Skipping already posted: Client Account Manager, Mid-Market (B2B Services) at reddit
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer - Claude Code at anthropic
[2026-01-06T23:50:04.291Z] [BOT] ⏭️  Skipping duplicate: JID_78c05d9c (posted within 7 days)
⏭️ Skipping already posted: ROLE_fe88b457 at anthropic
[2026-01-06T23:50:04.291Z] [BOT] ⏭️  Skipping duplicate: JID_617408df (posted within 7 days)
⏭️ Skipping already posted: Enterprise Education Specialist (Contract) at anthropic
[2026-01-06T23:50:04.291Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_65cdf179 (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Claude Developer Platform at anthropic
[2026-01-06T23:50:04.292Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Director of UI Engineering, Claude Consumer Products at anthropic
[2026-01-06T23:50:04.292Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-06T23:50:04.292Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-06T23:50:04.292Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-06T23:50:04.303Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*