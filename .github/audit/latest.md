# Discord Bot Execution Audit
**Timestamp:** 2025-12-14T23:34:22.221Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-14T23:34:10.927Z] ========================================
[2025-12-14T23:34:10.929Z] Discord Bot Execution Log
[2025-12-14T23:34:10.929Z] Environment: GitHub Actions
[2025-12-14T23:34:10.929Z] Node Version: v20.19.6
[2025-12-14T23:34:10.929Z] ========================================
[2025-12-14T23:34:10.929Z] Environment Variables Check:
[2025-12-14T23:34:10.929Z] DISCORD_TOKEN: ✅ Set
[2025-12-14T23:34:10.930Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-14T23:34:10.930Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-14T23:34:10.930Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-14T23:34:10.930Z] 
Multi-Channel Configuration:
[2025-12-14T23:34:10.930Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-14T23:34:10.930Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-14T23:34:10.930Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-14T23:34:10.930Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-14T23:34:10.930Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-14T23:34:10.930Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-14T23:34:10.930Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-14T23:34:10.930Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-14T23:34:10.931Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-14T23:34:10.931Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-14T23:34:10.931Z] 
Data Files Check:
[2025-12-14T23:34:10.931Z] .github/data/new_jobs.json: ✅ Exists (1 items, 17373 bytes)
[2025-12-14T23:34:10.932Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 85687 bytes)
[2025-12-14T23:34:10.932Z] 
========================================
[2025-12-14T23:34:10.932Z] Starting Enhanced Discord Bot...
[2025-12-14T23:34:10.932Z] ========================================
[2025-12-14T23:34:11.505Z] [BOT] ✅ Loaded V2 database: 134 jobs
[2025-12-14T23:34:12.286Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-14T23:34:12.286Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-14T23:34:12.287Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-14T23:34:12.287Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-14T23:34:12.391Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 133
[2025-12-14T23:34:12.392Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-14T23:34:12.392Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-14T23:34:12.392Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-14T23:34:12.393Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-14T23:34:12.393Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-14T23:34:12.394Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-14T23:34:12.394Z] [BOT] 📍 [ROUTING] "Senior Software Engineer in Test Prisma Access - AI Automation Engineer" @ ORG_94b92bc9 Alto Networks
[2025-12-14T23:34:12.394Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-14T23:34:12.399Z] [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-14T23:34:12.600Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks in #💻・tech-jobs
[2025-12-14T23:34:12.600Z] [BOT] ✅ Industry: Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks
[2025-12-14T23:34:14.361Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks in #🌉・san-francisco
[2025-12-14T23:34:14.361Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-14T23:34:15.860Z] [BOT] 💾 Marked as posted: Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks (instance #1)
[2025-12-14T23:34:15.861Z] [BOT] 💾 BEFORE ARCHIVING: 135 jobs in database
[2025-12-14T23:34:15.861Z] [BOT] ✅ No jobs to archive (all 135 jobs within 7-day window)
[2025-12-14T23:34:15.879Z] [BOT] 💾 Saved posted_jobs.json: 135 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-14T23:34:18.879Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-14T23:34:18.879Z] [BOT] ⏭️  Skipping duplicate: JID_6f88185d (posted within 7 days)
[2025-12-14T23:34:18.880Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-14T23:34:18.880Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2025-12-14T23:34:18.880Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-14T23:34:18.918Z] [BOT] 📂 Loaded 128 existing routing entries
[2025-12-14T23:34:18.954Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 129
   Timestamp: 2025-12-14T23:34:18.953Z
[2025-12-14T23:34:20.963Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*