# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T16:44:27.743Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T16:44:09.789Z] ========================================
[2026-01-05T16:44:09.791Z] Discord Bot Execution Log
[2026-01-05T16:44:09.791Z] Environment: GitHub Actions
[2026-01-05T16:44:09.791Z] Node Version: v20.19.6
[2026-01-05T16:44:09.791Z] ========================================
[2026-01-05T16:44:09.791Z] Environment Variables Check:
[2026-01-05T16:44:09.791Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T16:44:09.791Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T16:44:09.792Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T16:44:09.792Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T16:44:09.792Z] 
Multi-Channel Configuration:
[2026-01-05T16:44:09.792Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T16:44:09.792Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T16:44:09.792Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T16:44:09.792Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T16:44:09.792Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T16:44:09.792Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T16:44:09.792Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T16:44:09.792Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T16:44:09.792Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T16:44:09.793Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T16:44:09.793Z] 
Data Files Check:
[2026-01-05T16:44:09.793Z] .github/data/new_jobs.json: ✅ Exists (10 items, 39611 bytes)
[2026-01-05T16:44:09.798Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 655034 bytes)
[2026-01-05T16:44:09.798Z] 
========================================
[2026-01-05T16:44:09.798Z] Starting Enhanced Discord Bot...
[2026-01-05T16:44:09.798Z] ========================================
[2026-01-05T16:44:10.341Z] [BOT] ✅ Loaded V2 database: 1287 jobs
[2026-01-05T16:44:11.067Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T16:44:11.068Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T16:44:11.068Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T16:44:11.069Z] [BOT] ✅ Loaded pending queue: 52 total (32 pending, 20 enriched, 0 posted)
[2026-01-05T16:44:11.069Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-05T16:44:11.069Z] [BOT] [BOT] 🔍 Sample enriched job: Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) at datadog
[2026-01-05T16:44:11.072Z] [BOT] ⏭️  Skipping duplicate: JID_28f307b7-naelfy26_r00304885 (posted within 7 days)
[2026-01-05T16:44:11.072Z] [BOT] ⏭️ Skipping already posted: Atc – Software and Platform Analyst at Accenture
[2026-01-05T16:44:11.072Z] [BOT] ⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_aabf8ae3-expert_req_096760 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_5605df93-expert_req_096762-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
[2026-01-05T16:44:11.072Z] [BOT] ⏭️  Skipping duplicate: JID_eae91a50 (posted within 7 days)
⏭️ Skipping already posted: Applied Scientist 1 - Amazon at Amazon
[2026-01-05T16:44:11.073Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r158869 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
📬 Found 15 new jobs (5 already posted)...
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T16:44:11.073Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T16:44:11.073Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T16:44:11.073Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T16:44:11.073Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T16:44:11.074Z] [BOT] ✅ Loaded pending queue: 52 total (32 pending, 20 enriched, 0 posted)
[2026-01-05T16:44:11.076Z] [BOT] ✅ Saved pending queue: 40 total (32 pending, 8 enriched, 0 posted)
🗑️ Removed 12 blacklisted jobs from pending queue
[2026-01-05T16:44:11.076Z] [BOT] 📋 After blacklist filter: 3 jobs (12 blacklisted)
[2026-01-05T16:44:11.076Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-05T16:44:11.077Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-05T16:44:11.077Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 13 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T16:44:11.080Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-05T16:44:11.081Z] [BOT] 📍 [ROUTING] "Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking)" @ datadog
[2026-01-05T16:44:11.081Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-05T16:44:11.085Z] [BOT ERROR] (node:2835) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T16:44:11.386Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog in #💲・sales-jobs
[2026-01-05T16:44:11.386Z] [BOT] ✅ Industry: Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog
[2026-01-05T16:44:13.353Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog in #🚌・boston
[2026-01-05T16:44:13.353Z] [BOT] ✅ Location: 🚌・boston
[2026-01-05T16:44:14.854Z] [BOT] 💾 Marked as posted: Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog (instance #1)
[2026-01-05T16:44:14.854Z] [BOT] 💾 BEFORE ARCHIVING: 1288 jobs in database
[2026-01-05T16:44:14.855Z] [BOT] ✅ No jobs to archive (all 1288 jobs within 7-day window)
[2026-01-05T16:44:14.868Z] [BOT] 💾 Saved posted_jobs.json: 1288 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T16:44:14.868Z] [BOT] 💾 Marked as posted: Sales Development Representative - Summer 2026 Graduates (Spanish Speaking) @ datadog (instance #1)
[2026-01-05T16:44:14.869Z] [BOT] 💾 BEFORE ARCHIVING: 1289 jobs in database
[2026-01-05T16:44:14.870Z] [BOT] ✅ No jobs to archive (all 1289 jobs within 7-day window)
[2026-01-05T16:44:14.878Z] [BOT] 💾 Saved posted_jobs.json: 1289 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T16:44:17.878Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-05T16:44:17.879Z] [BOT] 📍 [ROUTING] "Research Data Analyst 1 - Center For Biostatistics" @ ORG_438a7d59 State University
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-05T16:44:17.879Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-05T16:44:17.879Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-05T16:44:18.105Z] [BOT] ✅ Created forum post: 🏢 Research Data Analyst 1 - Center For Biostatistics @ ORG_438a7d59 State University in #📈・JID_fb739488
  ✅ Industry: Research Data Analyst 1 - Center For Biostatistics @ ORG_438a7d59 State University
[2026-01-05T16:44:19.808Z] [BOT] ✅ Created forum post: 🏢 Research Data Analyst 1 - Center For Biostatistics @ ORG_438a7d59 State University in #💻・remote-usa
[2026-01-05T16:44:19.809Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-05T16:44:21.310Z] [BOT] 💾 Marked as posted: Research Data Analyst 1 - Center For Biostatistics @ ORG_438a7d59 State University (instance #1)
[2026-01-05T16:44:21.310Z] [BOT] 💾 BEFORE ARCHIVING: 1290 jobs in database
[2026-01-05T16:44:21.312Z] [BOT] ✅ No jobs to archive (all 1290 jobs within 7-day window)
[2026-01-05T16:44:21.321Z] [BOT] 💾 Saved posted_jobs.json: 1290 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T16:44:24.322Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-05T16:44:24.323Z] [BOT] ⏭️  Skipping duplicate: JID_932a4860 (posted within 7 days)
[2026-01-05T16:44:24.323Z] [BOT] ⏭️  Skipping duplicate: JID_147291dc-biostatistics_r142714-2 (posted within 7 days)
[2026-01-05T16:44:24.324Z] [BOT] ✅ Loaded pending queue: 40 total (32 pending, 8 enriched, 0 posted)
[2026-01-05T16:44:24.325Z] [BOT] ✅ Saved pending queue: 40 total (32 pending, 6 enriched, 2 posted)
[2026-01-05T16:44:24.325Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T16:44:24.381Z] [BOT] 📂 Loaded 2197 existing routing entries
[2026-01-05T16:44:24.444Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-05T16:44:24.444Z] [BOT] Total entries: 2199
   Timestamp: 2026-01-05T16:44:24.428Z
[2026-01-05T16:44:24.445Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T16:44:24.445Z] [BOT] Total attempts: 21
   Successful: 4
   Failed: 0
   Skipped: 17
[2026-01-05T16:44:24.445Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-05T16:44:24.445Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #💲・sales-jobs: 1 posts
[2026-01-05T16:44:24.445Z] [BOT] 2. #🚌・boston: 1 posts
     3. #📈・JID_fb739488: 1 posts
     4. #💻・remote-usa: 1 posts
[2026-01-05T16:44:24.445Z] [BOT] [STATS] Channel stats saved
[2026-01-05T16:44:26.458Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2835) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*