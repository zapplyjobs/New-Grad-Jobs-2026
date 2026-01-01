# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T09:05:32.642Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T09:05:22.096Z] ========================================
[2026-01-01T09:05:22.098Z] Discord Bot Execution Log
[2026-01-01T09:05:22.098Z] Environment: GitHub Actions
[2026-01-01T09:05:22.098Z] Node Version: v20.19.6
[2026-01-01T09:05:22.098Z] ========================================
[2026-01-01T09:05:22.098Z] Environment Variables Check:
[2026-01-01T09:05:22.098Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T09:05:22.098Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T09:05:22.098Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T09:05:22.098Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T09:05:22.098Z] 
Multi-Channel Configuration:
[2026-01-01T09:05:22.099Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T09:05:22.099Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T09:05:22.099Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T09:05:22.099Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T09:05:22.099Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T09:05:22.099Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T09:05:22.099Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T09:05:22.099Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T09:05:22.099Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T09:05:22.099Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T09:05:22.099Z] 
Data Files Check:
[2026-01-01T09:05:22.100Z] .github/data/new_jobs.json: ✅ Exists (1 items, 7166 bytes)
[2026-01-01T09:05:22.100Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 30743 bytes)
[2026-01-01T09:05:22.100Z] 
========================================
[2026-01-01T09:05:22.100Z] Starting Enhanced Discord Bot...
[2026-01-01T09:05:22.100Z] ========================================
[2026-01-01T09:05:22.634Z] [BOT] ✅ Loaded V2 database: 52 jobs
[2026-01-01T09:05:23.226Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T09:05:23.227Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T09:05:23.227Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T09:05:23.227Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-01T09:05:23.275Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-01T09:05:23.320Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 33
[2026-01-01T09:05:23.321Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-01T09:05:23.322Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-01T09:05:23.323Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
📋 After multi-location grouping: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T09:05:23.323Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-01T09:05:23.325Z] [BOT] 📍 [ROUTING] "Vibe Marketer" @ ORG_f102986b AI
[2026-01-01T09:05:23.325Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-01T09:05:23.330Z] [BOT ERROR] (node:2315) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T09:05:23.627Z] [BOT] ✅ Created forum post: 🏢 Vibe Marketer @ ORG_f102986b AI in #🤖・ai-jobs
[2026-01-01T09:05:23.627Z] [BOT] ✅ Industry: Vibe Marketer @ ORG_f102986b AI
[2026-01-01T09:05:25.325Z] [BOT] ✅ Created forum post: 🏢 Vibe Marketer @ ORG_f102986b AI in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-01T09:05:26.826Z] [BOT] 💾 Marked as posted: Vibe Marketer @ ORG_f102986b AI (instance #1)
[2026-01-01T09:05:26.826Z] [BOT] 💾 BEFORE ARCHIVING: 53 jobs in database
[2026-01-01T09:05:26.826Z] [BOT] ✅ No jobs to archive (all 53 jobs within 7-day window)
[2026-01-01T09:05:26.837Z] [BOT] 💾 Saved posted_jobs.json: 53 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T09:05:29.838Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-01T09:05:29.838Z] [BOT] ⏭️  Skipping duplicate: JID_08c34893 (posted within 7 days)
[2026-01-01T09:05:29.839Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-01T09:05:29.839Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T09:05:29.882Z] [BOT] 📂 Loaded 1125 existing routing entries
[2026-01-01T09:05:29.927Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1126
   Timestamp: 2026-01-01T09:05:29.922Z
[2026-01-01T09:05:29.928Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
[2026-01-01T09:05:29.928Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-01T09:05:29.928Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-01T09:05:29.928Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-01T09:05:29.928Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-01T09:05:29.928Z] [BOT] [STATS] Channel stats saved
[2026-01-01T09:05:31.938Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2315) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*