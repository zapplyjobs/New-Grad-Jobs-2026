# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T19:34:12.089Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T19:34:03.436Z] ========================================
[2026-01-01T19:34:03.438Z] Discord Bot Execution Log
[2026-01-01T19:34:03.438Z] Environment: GitHub Actions
[2026-01-01T19:34:03.438Z] Node Version: v20.19.6
[2026-01-01T19:34:03.438Z] ========================================
[2026-01-01T19:34:03.438Z] Environment Variables Check:
[2026-01-01T19:34:03.438Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T19:34:03.439Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T19:34:03.439Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T19:34:03.439Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T19:34:03.439Z] 
Multi-Channel Configuration:
[2026-01-01T19:34:03.439Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T19:34:03.439Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T19:34:03.439Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T19:34:03.439Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T19:34:03.439Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T19:34:03.439Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T19:34:03.439Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T19:34:03.439Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T19:34:03.440Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T19:34:03.440Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T19:34:03.440Z] 
Data Files Check:
[2026-01-01T19:34:03.440Z] .github/data/new_jobs.json: ✅ Exists (1 items, 2122 bytes)
[2026-01-01T19:34:03.440Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 48392 bytes)
[2026-01-01T19:34:03.441Z] 
========================================
[2026-01-01T19:34:03.441Z] Starting Enhanced Discord Bot...
[2026-01-01T19:34:03.441Z] ========================================
[2026-01-01T19:34:03.948Z] [BOT] ✅ Loaded V2 database: 80 jobs
[2026-01-01T19:34:04.643Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T19:34:04.644Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T19:34:04.644Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T19:34:04.644Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-01T19:34:04.687Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-01T19:34:04.732Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 36
[2026-01-01T19:34:04.733Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-01T19:34:04.733Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-01T19:34:04.733Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-01T19:34:04.734Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-01T19:34:04.734Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T19:34:04.735Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-01T19:34:04.736Z] [BOT] 📍 [ROUTING] "Chemical Data Annotation Specialist" @ ORG_6a1ef406
[2026-01-01T19:34:04.736Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-01T19:34:04.753Z] [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T19:34:04.887Z] [BOT] ✅ Created forum post: 🏢 Chemical Data Annotation Specialist @ ORG_6a1ef406 in #🤖・ai-jobs
[2026-01-01T19:34:04.887Z] [BOT] ✅ Industry: Chemical Data Annotation Specialist @ ORG_6a1ef406
[2026-01-01T19:34:06.389Z] [BOT] 💾 Marked as posted: Chemical Data Annotation Specialist @ ORG_6a1ef406 (instance #1)
[2026-01-01T19:34:06.390Z] [BOT] 💾 BEFORE ARCHIVING: 81 jobs in database
[2026-01-01T19:34:06.390Z] [BOT] ✅ No jobs to archive (all 81 jobs within 7-day window)
[2026-01-01T19:34:06.395Z] [BOT] 💾 Saved posted_jobs.json: 81 active jobs
[2026-01-01T19:34:06.395Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T19:34:09.395Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-01T19:34:09.396Z] [BOT] ⏭️  Skipping duplicate: JID_e4cc550d (posted within 7 days)
[2026-01-01T19:34:09.396Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-01T19:34:09.396Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-01T19:34:09.397Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-01T19:34:09.439Z] [BOT] 📂 Loaded 1154 existing routing entries
[2026-01-01T19:34:09.484Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1155
   Timestamp: 2026-01-01T19:34:09.479Z
[2026-01-01T19:34:09.485Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
   Total attempts: 1
   Successful: 1
[2026-01-01T19:34:09.485Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-01T19:34:09.485Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 1
   Channels used: 1
[2026-01-01T19:34:09.485Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-01-01T19:34:09.485Z] [BOT] [STATS] Channel stats saved
[2026-01-01T19:34:11.499Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*