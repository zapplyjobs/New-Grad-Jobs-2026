# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T16:08:33.226Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 7
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T16:08:23.032Z] ========================================
[2026-01-05T16:08:23.033Z] Discord Bot Execution Log
[2026-01-05T16:08:23.034Z] Environment: GitHub Actions
[2026-01-05T16:08:23.034Z] Node Version: v20.19.6
[2026-01-05T16:08:23.034Z] ========================================
[2026-01-05T16:08:23.034Z] Environment Variables Check:
[2026-01-05T16:08:23.034Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T16:08:23.034Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T16:08:23.034Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T16:08:23.034Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T16:08:23.034Z] 
Multi-Channel Configuration:
[2026-01-05T16:08:23.034Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T16:08:23.034Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T16:08:23.035Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T16:08:23.035Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T16:08:23.035Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T16:08:23.035Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T16:08:23.035Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T16:08:23.035Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T16:08:23.035Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T16:08:23.035Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T16:08:23.035Z] 
Data Files Check:
[2026-01-05T16:08:23.036Z] .github/data/new_jobs.json: ✅ Exists (10 items, 28200 bytes)
[2026-01-05T16:08:23.040Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 654558 bytes)
[2026-01-05T16:08:23.040Z] 
========================================
[2026-01-05T16:08:23.040Z] Starting Enhanced Discord Bot...
[2026-01-05T16:08:23.040Z] ========================================
[2026-01-05T16:08:23.555Z] [BOT] ✅ Loaded V2 database: 1286 jobs
[2026-01-05T16:08:24.151Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T16:08:24.151Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T16:08:24.152Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T16:08:24.152Z] [BOT] ✅ Loaded pending queue: 50 total (30 pending, 20 enriched, 0 posted)
[2026-01-05T16:08:24.152Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-05T16:08:24.153Z] [BOT] [BOT] 🔍 Sample enriched job: Product Marketing Manager - CloudPrem at datadog
[2026-01-05T16:08:24.155Z] [BOT] ⏭️  Skipping duplicate: JID_28f307b7-naelfy26_r00304885 (posted within 7 days)
[2026-01-05T16:08:24.155Z] [BOT] ⏭️ Skipping already posted: Atc – Software and Platform Analyst at Accenture
[2026-01-05T16:08:24.155Z] [BOT] ⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_aabf8ae3-expert_req_096760 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_5605df93-expert_req_096762-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
[2026-01-05T16:08:24.155Z] [BOT] ⏭️  Skipping duplicate: JID_eae91a50 (posted within 7 days)
[2026-01-05T16:08:24.156Z] [BOT] ⏭️ Skipping already posted: Applied Scientist 1 - Amazon at Amazon
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r158869 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
⏭️  Skipping duplicate: JID_78e3784c-technology_r026155 (posted within 7 days)
⏭️ Skipping already posted: Rotational Engineer - Central Technology at Activision-Blizzard
[2026-01-05T16:08:24.156Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r160648 (posted within 7 days)
⏭️ Skipping already posted: University Graduate - Machine Learning Engineer at Adobe
📬 Found 13 new jobs (7 already posted)...
[2026-01-05T16:08:24.156Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T16:08:24.156Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T16:08:24.156Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T16:08:24.156Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T16:08:24.156Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T16:08:24.157Z] [BOT] ✅ Loaded pending queue: 50 total (30 pending, 20 enriched, 0 posted)
[2026-01-05T16:08:24.159Z] [BOT] ✅ Saved pending queue: 38 total (30 pending, 8 enriched, 0 posted)
[2026-01-05T16:08:24.160Z] [BOT] 🗑️ Removed 12 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (12 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-05T16:08:24.160Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-05T16:08:24.160Z] [BOT] ⏸️ Limiting to 10 jobs this run, 12 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T16:08:24.162Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-05T16:08:24.163Z] [BOT] 📍 [ROUTING] "Product Marketing Manager - CloudPrem" @ datadog
[2026-01-05T16:08:24.163Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-05T16:08:24.168Z] [BOT ERROR] (node:3000) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T16:08:24.338Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager - CloudPrem @ datadog in #📣・marketing-jobs
  ✅ Industry: Product Marketing Manager - CloudPrem @ datadog
[2026-01-05T16:08:25.985Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager - CloudPrem @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-05T16:08:27.485Z] [BOT] 💾 Marked as posted: Product Marketing Manager - CloudPrem @ datadog (instance #1)
[2026-01-05T16:08:27.486Z] [BOT] 💾 BEFORE ARCHIVING: 1287 jobs in database
[2026-01-05T16:08:27.487Z] [BOT] ✅ No jobs to archive (all 1287 jobs within 7-day window)
[2026-01-05T16:08:27.500Z] [BOT] 💾 Saved posted_jobs.json: 1287 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T16:08:30.500Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-05T16:08:30.500Z] [BOT] ⏭️  Skipping duplicate: JID_8a6e32f3 (posted within 7 days)
[2026-01-05T16:08:30.501Z] [BOT] ✅ Loaded pending queue: 38 total (30 pending, 8 enriched, 0 posted)
[2026-01-05T16:08:30.502Z] [BOT] ✅ Saved pending queue: 38 total (30 pending, 7 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T16:08:30.555Z] [BOT] 📂 Loaded 2196 existing routing entries
[2026-01-05T16:08:30.613Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-05T16:08:30.613Z] [BOT] Total entries: 2197
   Timestamp: 2026-01-05T16:08:30.599Z
[2026-01-05T16:08:30.613Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T16:08:30.613Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-05T16:08:30.614Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-05T16:08:30.614Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #📣・marketing-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-05T16:08:30.614Z] [BOT] [STATS] Channel stats saved
[2026-01-05T16:08:32.625Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3000) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*