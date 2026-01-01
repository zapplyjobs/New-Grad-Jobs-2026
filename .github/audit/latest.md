# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T19:04:35.209Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T19:04:08.231Z] ========================================
[2026-01-01T19:04:08.233Z] Discord Bot Execution Log
[2026-01-01T19:04:08.233Z] Environment: GitHub Actions
[2026-01-01T19:04:08.233Z] Node Version: v20.19.6
[2026-01-01T19:04:08.233Z] ========================================
[2026-01-01T19:04:08.233Z] Environment Variables Check:
[2026-01-01T19:04:08.233Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T19:04:08.233Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T19:04:08.233Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T19:04:08.233Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T19:04:08.233Z] 
Multi-Channel Configuration:
[2026-01-01T19:04:08.233Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T19:04:08.234Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T19:04:08.234Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T19:04:08.234Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T19:04:08.234Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T19:04:08.234Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T19:04:08.234Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T19:04:08.234Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T19:04:08.234Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T19:04:08.234Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T19:04:08.234Z] 
Data Files Check:
[2026-01-01T19:04:08.235Z] .github/data/new_jobs.json: ✅ Exists (4 items, 17086 bytes)
[2026-01-01T19:04:08.235Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 46204 bytes)
[2026-01-01T19:04:08.235Z] 
========================================
[2026-01-01T19:04:08.235Z] Starting Enhanced Discord Bot...
[2026-01-01T19:04:08.235Z] ========================================
[2026-01-01T19:04:08.750Z] [BOT] ✅ Loaded V2 database: 76 jobs
[2026-01-01T19:04:09.160Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T19:04:09.161Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T19:04:09.161Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T19:04:09.161Z] [BOT] 📦 Exporting 4 jobs to encrypted JSON...
[2026-01-01T19:04:09.203Z] [BOT] 🧹 Cleaned up 4 jobs older than 7 days
[2026-01-01T19:04:09.248Z] [BOT] ✅ Export complete: Added 4, Skipped 0, Total 39
[2026-01-01T19:04:09.249Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2026-01-01T19:04:09.249Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
[2026-01-01T19:04:09.250Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2026-01-01T19:04:09.250Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-01T19:04:09.251Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T19:04:09.254Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-01T19:04:09.255Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
[2026-01-01T19:04:09.255Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T19:04:09.259Z] [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T19:04:09.492Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #💻・tech-jobs
[2026-01-01T19:04:09.492Z] [BOT] ✅ Industry: Software Engineer @ Q2
[2026-01-01T19:04:11.285Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #🤠・austin
[2026-01-01T19:04:11.285Z] [BOT] ✅ Location: 🤠・austin
[2026-01-01T19:04:12.786Z] [BOT] 💾 Marked as posted: Software Engineer @ Q2 (instance #1)
[2026-01-01T19:04:12.787Z] [BOT] 💾 BEFORE ARCHIVING: 77 jobs in database
[2026-01-01T19:04:12.787Z] [BOT] ✅ No jobs to archive (all 77 jobs within 7-day window)
[2026-01-01T19:04:12.792Z] [BOT] 💾 Saved posted_jobs.json: 77 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T19:04:12.792Z] [BOT] 📍 [ROUTING] "Early Career Geologist" @ ORG_b01859ad
   Category: TECH (default)
[2026-01-01T19:04:12.793Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T19:04:12.974Z] [BOT] ✅ Created forum post: 🏢 Early Career Geologist @ ORG_b01859ad in #💻・tech-jobs
  ✅ Industry: Early Career Geologist @ ORG_b01859ad
[2026-01-01T19:04:14.739Z] [BOT] ✅ Created forum post: 🏢 Early Career Geologist @ ORG_b01859ad in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-01T19:04:16.241Z] [BOT] 💾 Marked as posted: Early Career Geologist @ ORG_b01859ad (instance #1)
[2026-01-01T19:04:16.241Z] [BOT] 💾 BEFORE ARCHIVING: 78 jobs in database
✅ No jobs to archive (all 78 jobs within 7-day window)
[2026-01-01T19:04:16.243Z] [BOT] 💾 Saved posted_jobs.json: 78 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T19:04:19.243Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-01T19:04:19.245Z] [BOT] 📍 [ROUTING] "Transportation Planning Analyst" @ Kimley-Horn
[2026-01-01T19:04:19.246Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-01T19:04:19.453Z] [BOT] ✅ Created forum post: 🏢 Transportation Planning Analyst @ Kimley-Horn in #🩺・healthcare-jobs
[2026-01-01T19:04:19.454Z] [BOT] ✅ Industry: Transportation Planning Analyst @ Kimley-Horn
[2026-01-01T19:04:21.141Z] [BOT] ✅ Created forum post: 🏢 Transportation Planning Analyst @ Kimley-Horn in #🤠・austin
[2026-01-01T19:04:21.141Z] [BOT] ✅ Location: 🤠・austin
[2026-01-01T19:04:22.642Z] [BOT] 💾 Marked as posted: Transportation Planning Analyst @ Kimley-Horn (instance #1)
[2026-01-01T19:04:22.642Z] [BOT] 💾 BEFORE ARCHIVING: 79 jobs in database
✅ No jobs to archive (all 79 jobs within 7-day window)
[2026-01-01T19:04:22.644Z] [BOT] 💾 Saved posted_jobs.json: 79 active jobs
[2026-01-01T19:04:22.644Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T19:04:25.645Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-01T19:04:25.647Z] [BOT] 📍 [ROUTING] "Associate Nuclear Consultant/Engineer" @ ORG_f273c1b5 Hughes
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-01T19:04:25.647Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-01T19:04:26.051Z] [BOT] ✅ Created forum post: 🏢 Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes in #🤖・ai-jobs
  ✅ Industry: Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes
[2026-01-01T19:04:27.892Z] [BOT] ✅ Created forum post: 🏢 Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-01T19:04:29.394Z] [BOT] 💾 Marked as posted: Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes (instance #1)
[2026-01-01T19:04:29.394Z] [BOT] 💾 BEFORE ARCHIVING: 80 jobs in database
✅ No jobs to archive (all 80 jobs within 7-day window)
[2026-01-01T19:04:29.396Z] [BOT] 💾 Saved posted_jobs.json: 80 active jobs
[2026-01-01T19:04:29.396Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T19:04:32.396Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-01T19:04:32.397Z] [BOT] ⏭️  Skipping duplicate: JID_68fe2f2f-engineer_req-11939 (posted within 7 days)
[2026-01-01T19:04:32.397Z] [BOT] ⏭️  Skipping duplicate: JID_64fc9a9d (posted within 7 days)
⏭️  Skipping duplicate: JID_4fd8b629 (posted within 7 days)
⏭️  Skipping duplicate: JID_113f9ae5-cx_2001-job-76719 (posted within 7 days)
[2026-01-01T19:04:32.397Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2026-01-01T19:04:32.398Z] [BOT] ✅ Saved pending queue: 4 total (0 pending, 0 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T19:04:32.441Z] [BOT] 📂 Loaded 1150 existing routing entries
[2026-01-01T19:04:32.488Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-01T19:04:32.488Z] [BOT] Total entries: 1154
   Timestamp: 2026-01-01T19:04:32.482Z
[2026-01-01T19:04:32.489Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
[2026-01-01T19:04:32.489Z] [BOT] Total attempts: 8
   Successful: 8
   Failed: 0
   Skipped: 0
[2026-01-01T19:04:32.489Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-01T19:04:32.490Z] [BOT] Total posts: 8
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🤠・austin: 2 posts
     3. #💻・remote-usa: 2 posts
[2026-01-01T19:04:32.490Z] [BOT] 4. #🩺・healthcare-jobs: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-01T19:04:32.490Z] [BOT] [STATS] Channel stats saved
[2026-01-01T19:04:34.501Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*