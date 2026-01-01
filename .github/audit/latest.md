# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T20:04:36.079Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T20:04:12.436Z] ========================================
[2026-01-01T20:04:12.438Z] Discord Bot Execution Log
[2026-01-01T20:04:12.438Z] Environment: GitHub Actions
[2026-01-01T20:04:12.438Z] Node Version: v20.19.6
[2026-01-01T20:04:12.438Z] ========================================
[2026-01-01T20:04:12.438Z] Environment Variables Check:
[2026-01-01T20:04:12.438Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T20:04:12.438Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T20:04:12.439Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T20:04:12.439Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T20:04:12.439Z] 
Multi-Channel Configuration:
[2026-01-01T20:04:12.439Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T20:04:12.439Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T20:04:12.439Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T20:04:12.439Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T20:04:12.439Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T20:04:12.439Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T20:04:12.439Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T20:04:12.439Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T20:04:12.440Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T20:04:12.440Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T20:04:12.440Z] 
Data Files Check:
[2026-01-01T20:04:12.440Z] .github/data/new_jobs.json: ✅ Exists (3 items, 16413 bytes)
[2026-01-01T20:04:12.441Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 48949 bytes)
[2026-01-01T20:04:12.441Z] 
========================================
[2026-01-01T20:04:12.441Z] Starting Enhanced Discord Bot...
[2026-01-01T20:04:12.441Z] ========================================
[2026-01-01T20:04:12.968Z] [BOT] ✅ Loaded V2 database: 81 jobs
[2026-01-01T20:04:13.654Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T20:04:13.654Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T20:04:13.654Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T20:04:13.655Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2026-01-01T20:04:13.698Z] [BOT] 🧹 Cleaned up 3 jobs older than 7 days
[2026-01-01T20:04:13.744Z] [BOT] ✅ Export complete: Added 3, Skipped 0, Total 38
[2026-01-01T20:04:13.745Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2026-01-01T20:04:13.745Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2026-01-01T20:04:13.746Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-01T20:04:13.746Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-01T20:04:13.746Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T20:04:13.750Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-01T20:04:13.753Z] [BOT] 📍 [ROUTING] "Engineer 1 - AI Business Engineer" @ ORG_d7d2f0ff Alliance
[2026-01-01T20:04:13.753Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T20:04:13.757Z] [BOT ERROR] (node:2358) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T20:04:13.962Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 - AI Business Engineer @ ORG_d7d2f0ff Alliance in #💻・tech-jobs
[2026-01-01T20:04:13.962Z] [BOT] ✅ Industry: Engineer 1 - AI Business Engineer @ ORG_d7d2f0ff Alliance
[2026-01-01T20:04:15.606Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 - AI Business Engineer @ ORG_d7d2f0ff Alliance in #💻・remote-usa
[2026-01-01T20:04:15.606Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-01T20:04:17.106Z] [BOT] 💾 Marked as posted: Engineer 1 - AI Business Engineer @ ORG_d7d2f0ff Alliance (instance #1)
[2026-01-01T20:04:17.107Z] [BOT] 💾 BEFORE ARCHIVING: 82 jobs in database
[2026-01-01T20:04:17.107Z] [BOT] ✅ No jobs to archive (all 82 jobs within 7-day window)
[2026-01-01T20:04:17.119Z] [BOT] 💾 Saved posted_jobs.json: 82 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T20:04:20.121Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-01T20:04:20.122Z] [BOT] 📍 [ROUTING] "Technical Translator 1" @ ORG_19be7dd5 Technologies
   Category: HEALTHCARE (matched: "medical")
[2026-01-01T20:04:20.122Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-01T20:04:20.330Z] [BOT] ✅ Created forum post: 🏢 Technical Translator 1 @ ORG_19be7dd5 Technologies in #🩺・healthcare-jobs
[2026-01-01T20:04:20.330Z] [BOT] ✅ Industry: Technical Translator 1 @ ORG_19be7dd5 Technologies
[2026-01-01T20:04:22.229Z] [BOT] ✅ Created forum post: 🏢 Technical Translator 1 @ ORG_19be7dd5 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-01T20:04:23.729Z] [BOT] 💾 Marked as posted: Technical Translator 1 @ ORG_19be7dd5 Technologies (instance #1)
[2026-01-01T20:04:23.729Z] [BOT] 💾 BEFORE ARCHIVING: 83 jobs in database
✅ No jobs to archive (all 83 jobs within 7-day window)
[2026-01-01T20:04:23.731Z] [BOT] 💾 Saved posted_jobs.json: 83 active jobs
[2026-01-01T20:04:23.731Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T20:04:26.732Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-01T20:04:26.734Z] [BOT] 📍 [ROUTING] "Associate – Entry Level" @ ORG_5f6cd045
[2026-01-01T20:04:26.734Z] [BOT] Category: HR (matched: "compensation")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-01T20:04:27.009Z] [BOT] ✅ Created forum post: 🏢 Associate – Entry Level @ ORG_5f6cd045 in #📁・JID_e938df7b
  ✅ Industry: Associate – Entry Level @ ORG_5f6cd045
[2026-01-01T20:04:28.871Z] [BOT] ✅ Created forum post: 🏢 Associate – Entry Level @ ORG_5f6cd045 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-01T20:04:30.373Z] [BOT] 💾 Marked as posted: Associate – Entry Level @ ORG_5f6cd045 (instance #1)
[2026-01-01T20:04:30.373Z] [BOT] 💾 BEFORE ARCHIVING: 84 jobs in database
✅ No jobs to archive (all 84 jobs within 7-day window)
[2026-01-01T20:04:30.374Z] [BOT] 💾 Saved posted_jobs.json: 84 active jobs
[2026-01-01T20:04:30.375Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T20:04:33.376Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-01T20:04:33.376Z] [BOT] ⏭️  Skipping duplicate: JID_a3a25f58-engineer_r11957 (posted within 7 days)
[2026-01-01T20:04:33.376Z] [BOT] ⏭️  Skipping duplicate: JID_fbb3e460 (posted within 7 days)
⏭️  Skipping duplicate: JID_86f06dfe (posted within 7 days)
[2026-01-01T20:04:33.377Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2026-01-01T20:04:33.377Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 0 enriched, 3 posted)
[2026-01-01T20:04:33.377Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T20:04:33.421Z] [BOT] 📂 Loaded 1155 existing routing entries
[2026-01-01T20:04:33.468Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-01T20:04:33.468Z] [BOT] Total entries: 1158
   Timestamp: 2026-01-01T20:04:33.462Z
[2026-01-01T20:04:33.469Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
   Total attempts: 6
   Successful: 6
   Failed: 0
   Skipped: 0
[2026-01-01T20:04:33.469Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-01T20:04:33.469Z] [BOT] Total posts: 6
   Channels used: 5
   Top channels:
     1. #💻・remote-usa: 2 posts
     2. #💻・tech-jobs: 1 posts
[2026-01-01T20:04:33.469Z] [BOT] 3. #🩺・healthcare-jobs: 1 posts
     4. #📁・JID_e938df7b: 1 posts
     5. #🗽・new-york: 1 posts
[2026-01-01T20:04:33.469Z] [BOT] [STATS] Channel stats saved
[2026-01-01T20:04:35.482Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2358) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*