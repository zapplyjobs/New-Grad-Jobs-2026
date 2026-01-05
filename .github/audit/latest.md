# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T08:06:33.522Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T08:06:15.724Z] ========================================
[2026-01-05T08:06:15.726Z] Discord Bot Execution Log
[2026-01-05T08:06:15.726Z] Environment: GitHub Actions
[2026-01-05T08:06:15.726Z] Node Version: v20.19.6
[2026-01-05T08:06:15.726Z] ========================================
[2026-01-05T08:06:15.726Z] Environment Variables Check:
[2026-01-05T08:06:15.726Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T08:06:15.726Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T08:06:15.727Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T08:06:15.727Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T08:06:15.727Z] 
Multi-Channel Configuration:
[2026-01-05T08:06:15.727Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T08:06:15.727Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T08:06:15.727Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T08:06:15.727Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T08:06:15.727Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T08:06:15.727Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T08:06:15.727Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T08:06:15.727Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T08:06:15.727Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T08:06:15.728Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T08:06:15.728Z] 
Data Files Check:
[2026-01-05T08:06:15.728Z] .github/data/new_jobs.json: ✅ Exists (10 items, 19033 bytes)
[2026-01-05T08:06:15.733Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 652285 bytes)
[2026-01-05T08:06:15.733Z] 
========================================
[2026-01-05T08:06:15.733Z] Starting Enhanced Discord Bot...
[2026-01-05T08:06:15.733Z] ========================================
[2026-01-05T08:06:16.248Z] [BOT] ✅ Loaded V2 database: 1282 jobs
[2026-01-05T08:06:16.966Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T08:06:16.966Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T08:06:16.966Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T08:06:16.967Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-05T08:06:17.041Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-05T08:06:17.128Z] [BOT] ✅ Export complete: Added 2, Skipped 8, Total 214
[2026-01-05T08:06:17.131Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-05T08:06:17.131Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T08:06:17.131Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2026-01-05T08:06:17.131Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2026-01-05T08:06:17.131Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T08:06:17.133Z] [BOT] ✅ Loaded pending queue: 52 total (32 pending, 20 enriched, 0 posted)
[2026-01-05T08:06:17.134Z] [BOT] ✅ Saved pending queue: 44 total (32 pending, 12 enriched, 0 posted)
[2026-01-05T08:06:17.134Z] [BOT] 🗑️ Removed 8 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (8 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-05T08:06:17.135Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-05T08:06:17.135Z] [BOT] ⏸️ Limiting to 10 jobs this run, 8 deferred for next run
[2026-01-05T08:06:17.135Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T08:06:17.138Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-05T08:06:17.139Z] [BOT] 📍 [ROUTING] "Launch into Control System Configuration Management" @ Rolls-Royce
[2026-01-05T08:06:17.139Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-05T08:06:17.144Z] [BOT ERROR] (node:2762) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T08:06:17.359Z] [BOT] ✅ Created forum post: 🏢 Launch into Control System Configuration Management @ Rolls-Royce in #📣・marketing-jobs
  ✅ Industry: Launch into Control System Configuration Management @ Rolls-Royce
[2026-01-05T08:06:19.126Z] [BOT] ✅ Created forum post: 🏢 Launch into Control System Configuration Management @ Rolls-Royce in #💻・remote-usa
[2026-01-05T08:06:19.126Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-05T08:06:20.627Z] [BOT] 💾 Marked as posted: Launch into Control System Configuration Management @ Rolls-Royce (instance #1)
[2026-01-05T08:06:20.627Z] [BOT] 💾 BEFORE ARCHIVING: 1283 jobs in database
[2026-01-05T08:06:20.628Z] [BOT] ✅ No jobs to archive (all 1283 jobs within 7-day window)
[2026-01-05T08:06:20.640Z] [BOT] 💾 Saved posted_jobs.json: 1283 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T08:06:23.641Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-05T08:06:23.641Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_a725bda1
[2026-01-05T08:06:23.641Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T08:06:23.838Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a725bda1 in #💻・tech-jobs
[2026-01-05T08:06:23.838Z] [BOT] ✅ Industry: Software Engineer @ ORG_a725bda1
[2026-01-05T08:06:25.589Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a725bda1 in #🤠・austin
[2026-01-05T08:06:25.589Z] [BOT] ✅ Location: 🤠・austin
[2026-01-05T08:06:27.091Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_a725bda1 (instance #1)
[2026-01-05T08:06:27.091Z] [BOT] 💾 BEFORE ARCHIVING: 1284 jobs in database
[2026-01-05T08:06:27.093Z] [BOT] ✅ No jobs to archive (all 1284 jobs within 7-day window)
[2026-01-05T08:06:27.102Z] [BOT] 💾 Saved posted_jobs.json: 1284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T08:06:30.103Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-05T08:06:30.104Z] [BOT] ⏭️  Skipping duplicate: JID_50e86a3b-intern_graduate-JID_9a7a9ef4-management_jr6148423 (posted within 7 days)
[2026-01-05T08:06:30.104Z] [BOT] ⏭️  Skipping duplicate: JID_e051b6e4 (posted within 7 days)
[2026-01-05T08:06:30.105Z] [BOT] ✅ Loaded pending queue: 44 total (32 pending, 12 enriched, 0 posted)
[2026-01-05T08:06:30.106Z] [BOT] ✅ Saved pending queue: 44 total (32 pending, 10 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-05T08:06:30.107Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-05T08:06:30.155Z] [BOT] 📂 Loaded 2192 existing routing entries
[2026-01-05T08:06:30.215Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-05T08:06:30.215Z] [BOT] Total entries: 2194
   Timestamp: 2026-01-05T08:06:30.200Z
[2026-01-05T08:06:30.216Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
   Total attempts: 12
[2026-01-05T08:06:30.216Z] [BOT] Successful: 4
   Failed: 0
   Skipped: 8
[2026-01-05T08:06:30.216Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-05T08:06:30.216Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #📣・marketing-jobs: 1 posts
[2026-01-05T08:06:30.216Z] [BOT] 2. #💻・remote-usa: 1 posts
     3. #💻・tech-jobs: 1 posts
     4. #🤠・austin: 1 posts
[2026-01-05T08:06:30.217Z] [BOT] [STATS] Channel stats saved
[2026-01-05T08:06:32.227Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2762) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*