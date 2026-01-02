# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T16:40:47.156Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T16:40:30.003Z] ========================================
[2026-01-02T16:40:30.005Z] Discord Bot Execution Log
[2026-01-02T16:40:30.005Z] Environment: GitHub Actions
[2026-01-02T16:40:30.005Z] Node Version: v20.19.6
[2026-01-02T16:40:30.005Z] ========================================
[2026-01-02T16:40:30.005Z] Environment Variables Check:
[2026-01-02T16:40:30.005Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T16:40:30.005Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T16:40:30.005Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T16:40:30.005Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T16:40:30.005Z] 
Multi-Channel Configuration:
[2026-01-02T16:40:30.006Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T16:40:30.006Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T16:40:30.006Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T16:40:30.006Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T16:40:30.006Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T16:40:30.006Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T16:40:30.006Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T16:40:30.006Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T16:40:30.006Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T16:40:30.006Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T16:40:30.006Z] 
Data Files Check:
[2026-01-02T16:40:30.007Z] .github/data/new_jobs.json: ✅ Exists (2 items, 18646 bytes)
[2026-01-02T16:40:30.007Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 77984 bytes)
[2026-01-02T16:40:30.008Z] 
========================================
[2026-01-02T16:40:30.008Z] Starting Enhanced Discord Bot...
[2026-01-02T16:40:30.008Z] ========================================
[2026-01-02T16:40:30.530Z] [BOT] ✅ Loaded V2 database: 128 jobs
[2026-01-02T16:40:31.113Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T16:40:31.114Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T16:40:31.114Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T16:40:31.114Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-02T16:40:31.158Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-02T16:40:31.207Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 49
[2026-01-02T16:40:31.208Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-02T16:40:31.208Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-02T16:40:31.209Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-02T16:40:31.209Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-02T16:40:31.209Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T16:40:31.212Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-02T16:40:31.213Z] [BOT] 📍 [ROUTING] "Research Specialist" @ ORG_9d38443e of Chicago
[2026-01-02T16:40:31.213Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-02T16:40:31.218Z] [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T16:40:31.607Z] [BOT] ✅ Created forum post: 🏢 Research Specialist @ ORG_9d38443e of Chicago in #🩺・healthcare-jobs
  ✅ Industry: Research Specialist @ ORG_9d38443e of Chicago
[2026-01-02T16:40:33.382Z] [BOT] ✅ Created forum post: 🏢 Research Specialist @ ORG_9d38443e of Chicago in #🌆・chicago
[2026-01-02T16:40:33.382Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-02T16:40:34.883Z] [BOT] 💾 Marked as posted: Research Specialist @ ORG_9d38443e of Chicago (instance #1)
[2026-01-02T16:40:34.883Z] [BOT] 💾 BEFORE ARCHIVING: 129 jobs in database
[2026-01-02T16:40:34.883Z] [BOT] ✅ No jobs to archive (all 129 jobs within 7-day window)
[2026-01-02T16:40:34.889Z] [BOT] 💾 Saved posted_jobs.json: 129 active jobs
[2026-01-02T16:40:34.889Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T16:40:37.890Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-02T16:40:37.890Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow 1" @ ORG_82bce10b State University
[2026-01-02T16:40:37.891Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-02T16:40:38.113Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow 1 @ ORG_82bce10b State University in #🤖・ai-jobs
[2026-01-02T16:40:38.113Z] [BOT] ✅ Industry: Postdoctoral Fellow 1 @ ORG_82bce10b State University
[2026-01-02T16:40:39.874Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow 1 @ ORG_82bce10b State University in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-02T16:40:41.375Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow 1 @ ORG_82bce10b State University (instance #1)
[2026-01-02T16:40:41.375Z] [BOT] 💾 BEFORE ARCHIVING: 130 jobs in database
✅ No jobs to archive (all 130 jobs within 7-day window)
[2026-01-02T16:40:41.377Z] [BOT] 💾 Saved posted_jobs.json: 130 active jobs
[2026-01-02T16:40:41.377Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T16:40:44.378Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-02T16:40:44.378Z] [BOT] ⏭️  Skipping duplicate: JID_32cb8765-specialist_jr31878 (posted within 7 days)
[2026-01-02T16:40:44.379Z] [BOT] ⏭️  Skipping duplicate: JID_0877829a (posted within 7 days)
[2026-01-02T16:40:44.379Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-02T16:40:44.380Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2026-01-02T16:40:44.380Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T16:40:44.424Z] [BOT] 📂 Loaded 1203 existing routing entries
[2026-01-02T16:40:44.472Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-02T16:40:44.472Z] [BOT] Total entries: 1205
   Timestamp: 2026-01-02T16:40:44.466Z
[2026-01-02T16:40:44.472Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T16:40:44.472Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-02T16:40:44.473Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-02T16:40:44.473Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #🩺・healthcare-jobs: 1 posts
     2. #🌆・chicago: 1 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🌉・san-francisco: 1 posts
[2026-01-02T16:40:44.473Z] [BOT] [STATS] Channel stats saved
[2026-01-02T16:40:46.485Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*