# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T11:35:34.711Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T11:34:55.375Z] ========================================
[2026-01-03T11:34:55.377Z] Discord Bot Execution Log
[2026-01-03T11:34:55.377Z] Environment: GitHub Actions
[2026-01-03T11:34:55.377Z] Node Version: v20.19.6
[2026-01-03T11:34:55.377Z] ========================================
[2026-01-03T11:34:55.377Z] Environment Variables Check:
[2026-01-03T11:34:55.377Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T11:34:55.378Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T11:34:55.378Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T11:34:55.378Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T11:34:55.378Z] 
Multi-Channel Configuration:
[2026-01-03T11:34:55.378Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T11:34:55.378Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T11:34:55.378Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T11:34:55.378Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T11:34:55.378Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T11:34:55.378Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T11:34:55.378Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T11:34:55.378Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T11:34:55.378Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T11:34:55.379Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T11:34:55.379Z] 
Data Files Check:
[2026-01-03T11:34:55.380Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157250 bytes)
[2026-01-03T11:34:55.382Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 224928 bytes)
[2026-01-03T11:34:55.382Z] 
========================================
[2026-01-03T11:34:55.382Z] Starting Enhanced Discord Bot...
[2026-01-03T11:34:55.382Z] ========================================
[2026-01-03T11:34:55.902Z] [BOT] ✅ Loaded V2 database: 423 jobs
[2026-01-03T11:34:57.146Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T11:34:57.147Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T11:34:57.147Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T11:34:57.148Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T11:34:57.218Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T11:34:57.312Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T11:34:57.314Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T11:34:57.314Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T11:34:57.314Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T11:34:57.315Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-03T11:34:57.315Z] [BOT] (2 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T11:34:57.319Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-03T11:34:57.320Z] [BOT] 📍 [ROUTING] "Manager 1, Technical Escalations Engineering - US-East" @ datadog
[2026-01-03T11:34:57.320Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T11:34:57.324Z] [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T11:34:57.587Z] [BOT] ✅ Created forum post: 🏢 Manager 1, Technical Escalations Engineering - US-East @ datadog in #💻・tech-jobs
[2026-01-03T11:34:57.587Z] [BOT] ✅ Industry: Manager 1, Technical Escalations Engineering - US-East @ datadog
[2026-01-03T11:34:59.323Z] [BOT] ✅ Created forum post: 🏢 Manager 1, Technical Escalations Engineering - US-East @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:35:00.824Z] [BOT] 💾 Marked as posted: Manager 1, Technical Escalations Engineering - US-East @ datadog (instance #1)
[2026-01-03T11:35:00.825Z] [BOT] 💾 BEFORE ARCHIVING: 424 jobs in database
[2026-01-03T11:35:00.825Z] [BOT] ✅ No jobs to archive (all 424 jobs within 7-day window)
[2026-01-03T11:35:00.834Z] [BOT] 💾 Saved posted_jobs.json: 424 active jobs
[2026-01-03T11:35:00.834Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:35:00.835Z] [BOT] 📍 [ROUTING] "Manager 2, Premier Support Engineering - New York" @ datadog
[2026-01-03T11:35:00.835Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T11:35:01.107Z] [BOT] ✅ Created forum post: 🏢 Manager 2, Premier Support Engineering - New York @ datadog in #💻・tech-jobs
[2026-01-03T11:35:01.107Z] [BOT] ✅ Industry: Manager 2, Premier Support Engineering - New York @ datadog
[2026-01-03T11:35:02.937Z] [BOT] ✅ Created forum post: 🏢 Manager 2, Premier Support Engineering - New York @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:35:04.437Z] [BOT] 💾 Marked as posted: Manager 2, Premier Support Engineering - New York @ datadog (instance #1)
[2026-01-03T11:35:04.437Z] [BOT] 💾 BEFORE ARCHIVING: 425 jobs in database
[2026-01-03T11:35:04.438Z] [BOT] ✅ No jobs to archive (all 425 jobs within 7-day window)
[2026-01-03T11:35:04.442Z] [BOT] 💾 Saved posted_jobs.json: 425 active jobs
[2026-01-03T11:35:04.442Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:35:04.442Z] [BOT] 📍 [ROUTING] "Manager I, Developer Advocacy" @ datadog
   Category: TECH (matched: "software")
[2026-01-03T11:35:04.442Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T11:35:04.756Z] [BOT] ✅ Created forum post: 🏢 Manager I, Developer Advocacy @ datadog in #💻・tech-jobs
[2026-01-03T11:35:04.756Z] [BOT] ✅ Industry: Manager I, Developer Advocacy @ datadog
[2026-01-03T11:35:06.710Z] [BOT] ✅ Created forum post: 🏢 Manager I, Developer Advocacy @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:35:08.211Z] [BOT] 💾 Marked as posted: Manager I, Developer Advocacy @ datadog (instance #1)
[2026-01-03T11:35:08.211Z] [BOT] 💾 BEFORE ARCHIVING: 426 jobs in database
[2026-01-03T11:35:08.211Z] [BOT] ✅ No jobs to archive (all 426 jobs within 7-day window)
[2026-01-03T11:35:08.218Z] [BOT] 💾 Saved posted_jobs.json: 426 active jobs
[2026-01-03T11:35:08.219Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:35:08.220Z] [BOT] 📍 [ROUTING] "Manager I, Engineering - APM SDK Capabilities" @ datadog
[2026-01-03T11:35:08.220Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T11:35:08.559Z] [BOT] ✅ Created forum post: 🏢 Manager I, Engineering - APM SDK Capabilities @ datadog in #💻・tech-jobs
[2026-01-03T11:35:08.559Z] [BOT] ✅ Industry: Manager I, Engineering - APM SDK Capabilities @ datadog
[2026-01-03T11:35:10.273Z] [BOT] ✅ Created forum post: 🏢 Manager I, Engineering - APM SDK Capabilities @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:35:11.775Z] [BOT] 💾 Marked as posted: Manager I, Engineering - APM SDK Capabilities @ datadog (instance #1)
[2026-01-03T11:35:11.775Z] [BOT] 💾 BEFORE ARCHIVING: 427 jobs in database
[2026-01-03T11:35:11.776Z] [BOT] ✅ No jobs to archive (all 427 jobs within 7-day window)
[2026-01-03T11:35:11.780Z] [BOT] 💾 Saved posted_jobs.json: 427 active jobs
[2026-01-03T11:35:11.780Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:35:11.781Z] [BOT] 💾 Marked as posted: Manager I, Engineering - Infrastructure Remediation @ datadog (instance #1)
💾 BEFORE ARCHIVING: 428 jobs in database
[2026-01-03T11:35:11.781Z] [BOT] ✅ No jobs to archive (all 428 jobs within 7-day window)
[2026-01-03T11:35:11.786Z] [BOT] 💾 Saved posted_jobs.json: 428 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T11:35:11.786Z] [BOT] 💾 Marked as posted: Manager I, Engineering - Language Platform @ datadog (instance #1)
💾 BEFORE ARCHIVING: 429 jobs in database
[2026-01-03T11:35:11.787Z] [BOT] ✅ No jobs to archive (all 429 jobs within 7-day window)
[2026-01-03T11:35:11.790Z] [BOT] 💾 Saved posted_jobs.json: 429 active jobs
[2026-01-03T11:35:11.790Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:35:11.791Z] [BOT] 📍 [ROUTING] "Manager I, Engineering - Cloud SIEM - Security Data Enrichment" @ datadog
[2026-01-03T11:35:11.791Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T11:35:12.018Z] [BOT] ✅ Created forum post: 🏢 Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog in #💻・tech-jobs
  ✅ Industry: Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog
[2026-01-03T11:35:13.735Z] [BOT] ✅ Created forum post: 🏢 Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:35:15.236Z] [BOT] 💾 Marked as posted: Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog (instance #1)
[2026-01-03T11:35:15.236Z] [BOT] 💾 BEFORE ARCHIVING: 430 jobs in database
[2026-01-03T11:35:15.236Z] [BOT] ✅ No jobs to archive (all 430 jobs within 7-day window)
[2026-01-03T11:35:15.241Z] [BOT] 💾 Saved posted_jobs.json: 430 active jobs
[2026-01-03T11:35:15.241Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:35:18.242Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-03T11:35:18.242Z] [BOT] 📍 [ROUTING] "Manager, Commercial Sales Engineering (AMER - West)" @ datadog
   Category: SALES (matched: "sales")
[2026-01-03T11:35:18.242Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T11:35:18.505Z] [BOT] ✅ Created forum post: 🏢 Manager, Commercial Sales Engineering (AMER - West) @ datadog in #💲・sales-jobs
  ✅ Industry: Manager, Commercial Sales Engineering (AMER - West) @ datadog
[2026-01-03T11:35:20.006Z] [BOT] 💾 Marked as posted: Manager, Commercial Sales Engineering (AMER - West) @ datadog (instance #1)
[2026-01-03T11:35:20.007Z] [BOT] 💾 BEFORE ARCHIVING: 431 jobs in database
[2026-01-03T11:35:20.007Z] [BOT] ✅ No jobs to archive (all 431 jobs within 7-day window)
[2026-01-03T11:35:20.012Z] [BOT] 💾 Saved posted_jobs.json: 431 active jobs
[2026-01-03T11:35:20.012Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:35:20.012Z] [BOT] 📍 [ROUTING] "Manager, Customer Success - Denver" @ datadog
[2026-01-03T11:35:20.012Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T11:35:20.265Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Success - Denver @ datadog in #💲・sales-jobs
  ✅ Industry: Manager, Customer Success - Denver @ datadog
[2026-01-03T11:35:21.766Z] [BOT] 💾 Marked as posted: Manager, Customer Success - Denver @ datadog (instance #1)
[2026-01-03T11:35:21.766Z] [BOT] 💾 BEFORE ARCHIVING: 432 jobs in database
[2026-01-03T11:35:21.767Z] [BOT] ✅ No jobs to archive (all 432 jobs within 7-day window)
[2026-01-03T11:35:21.771Z] [BOT] 💾 Saved posted_jobs.json: 432 active jobs
[2026-01-03T11:35:21.771Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:35:24.772Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T11:35:24.772Z] [BOT] 📍 [ROUTING] "Manager II, Engineering - APM Root Cause Analysis (GenAI / LLM)" @ datadog
[2026-01-03T11:35:24.772Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T11:35:24.999Z] [BOT] ✅ Created forum post: 🏢 Manager II, Engineering - APM Root Cause Analysis (GenAI / LLM) @ datadog in #🤖・ai-jobs
  ✅ Industry: Manager II, Engineering - APM Root Cause Analysis (GenAI / LLM) @ datadog
[2026-01-03T11:35:26.689Z] [BOT] ✅ Created forum post: 🏢 Manager II, Engineering - APM Root Cause Analysis (GenAI / LLM) @ datadog in #🗽・new-york
[2026-01-03T11:35:26.690Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T11:35:28.190Z] [BOT] 💾 Marked as posted: Manager II, Engineering - APM Root Cause Analysis (GenAI / LLM) @ datadog (instance #1)
[2026-01-03T11:35:28.191Z] [BOT] 💾 BEFORE ARCHIVING: 433 jobs in database
[2026-01-03T11:35:28.191Z] [BOT] ✅ No jobs to archive (all 433 jobs within 7-day window)
[2026-01-03T11:35:28.195Z] [BOT] 💾 Saved posted_jobs.json: 433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T11:35:31.195Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-03T11:35:31.196Z] [BOT] ⏭️  Skipping duplicate: JID_ad0fd891 (posted within 7 days)
[2026-01-03T11:35:31.196Z] [BOT] ⏭️  Skipping duplicate: JID_e33cc99a (posted within 7 days)
[2026-01-03T11:35:31.196Z] [BOT] ⏭️  Skipping duplicate: JID_e2c56bbd (posted within 7 days)
[2026-01-03T11:35:31.196Z] [BOT] ⏭️  Skipping duplicate: JID_15193999 (posted within 7 days)
⏭️  Skipping duplicate: JID_3ffc39ad (posted within 7 days)
[2026-01-03T11:35:31.196Z] [BOT] ⏭️  Skipping duplicate: JID_8de85186 (posted within 7 days)
⏭️  Skipping duplicate: JID_582fe66a (posted within 7 days)
[2026-01-03T11:35:31.196Z] [BOT] ⏭️  Skipping duplicate: JID_e2949030 (posted within 7 days)
[2026-01-03T11:35:31.267Z] [BOT] ✅ Loaded pending queue: 865 total (845 pending, 20 enriched, 0 posted)
[2026-01-03T11:35:31.365Z] [BOT] ✅ Saved pending queue: 865 total (845 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-03T11:35:31.365Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T11:35:31.408Z] [BOT] 📂 Loaded 1418 existing routing entries
[2026-01-03T11:35:31.453Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
[2026-01-03T11:35:31.453Z] [BOT] Total entries: 1426
   Timestamp: 2026-01-03T11:35:31.447Z
[2026-01-03T11:35:31.454Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T11:35:31.454Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-03T11:35:31.454Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T11:35:31.454Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 4
   Top channels:
[2026-01-03T11:35:31.454Z] [BOT] 1. #🗽・new-york: 6 posts
     2. #💻・tech-jobs: 5 posts
     3. #💲・sales-jobs: 2 posts
     4. #🤖・ai-jobs: 1 posts
[2026-01-03T11:35:31.455Z] [BOT] [STATS] Channel stats saved
[2026-01-03T11:35:33.471Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*