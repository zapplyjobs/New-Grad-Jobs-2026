# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T15:42:28.475Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T15:42:16.735Z] ========================================
[2026-02-06T15:42:16.737Z] Discord Bot Execution Log
[2026-02-06T15:42:16.737Z] Environment: GitHub Actions
[2026-02-06T15:42:16.737Z] Node Version: v20.20.0
[2026-02-06T15:42:16.737Z] ========================================
[2026-02-06T15:42:16.738Z] Environment Variables Check:
[2026-02-06T15:42:16.738Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T15:42:16.738Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T15:42:16.738Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T15:42:16.738Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T15:42:16.738Z] 
Multi-Channel Configuration:
[2026-02-06T15:42:16.738Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T15:42:16.738Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:42:16.738Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:42:16.738Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T15:42:16.738Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:42:16.738Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:42:16.738Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:42:16.738Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:42:16.738Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:42:16.738Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T15:42:16.739Z] 
Data Files Check:
[2026-02-06T15:42:16.740Z] .github/data/new_jobs.json: ✅ Exists (10 items, 129305 bytes)
[2026-02-06T15:42:16.794Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9567343 bytes)
[2026-02-06T15:42:16.794Z] 
========================================
[2026-02-06T15:42:16.794Z] Starting Enhanced Discord Bot...
[2026-02-06T15:42:16.794Z] ========================================
[2026-02-06T15:42:17.363Z] [BOT] ✅ Loaded V2 database: 1985 jobs
[2026-02-06T15:42:18.091Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-06T15:42:18.091Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T15:42:18.092Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T15:42:18.105Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-06T15:42:18.106Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T15:42:18.107Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T15:42:18.107Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T15:42:18.107Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T15:42:18.108Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T15:42:18.125Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T15:42:18.125Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
[2026-02-06T15:42:18.125Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
[2026-02-06T15:42:18.126Z] [BOT] 🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
[2026-02-06T15:42:18.126Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
[2026-02-06T15:42:18.126Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
[2026-02-06T15:42:18.126Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
[2026-02-06T15:42:18.126Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
[2026-02-06T15:42:18.126Z] [BOT] 🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
[2026-02-06T15:42:18.126Z] [BOT] 🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
[2026-02-06T15:42:18.126Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
[2026-02-06T15:42:18.126Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
[2026-02-06T15:42:18.127Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-06T15:42:18.141Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-06T15:42:18.166Z] [BOT] ✅ Saved pending queue: 171 total (168 pending, 3 enriched, 0 posted)
[2026-02-06T15:42:18.166Z] [BOT] 🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (47 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-06T15:42:18.166Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-06T15:42:18.166Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T15:42:18.168Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T15:42:18.170Z] [BOT] 📍 [ROUTING] "Home Health Nursing Internship" @ ORG_67c29814
[2026-02-06T15:42:18.170Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T15:42:18.187Z] [BOT ERROR] (node:2896) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T15:42:18.436Z] [BOT] ✅ Posted message: Home Health Nursing Internship @ ORG_67c29814 in #💻・tech-jobs
  ✅ Industry: Home Health Nursing Internship @ ORG_67c29814
[2026-02-06T15:42:18.437Z] [BOT] 💾 Added channel posting: Home Health Nursing Internship @ ORG_67c29814 → category channel (1 total channels)
[2026-02-06T15:42:18.438Z] [BOT] 💾 BEFORE MERGE: 1986 jobs in memory (cached)
[2026-02-06T15:42:18.476Z] [BOT] ✅ Loaded V2 database: 1985 jobs
[2026-02-06T15:42:18.476Z] [BOT] 💾 DISK STATE: 1985 jobs on disk
[2026-02-06T15:42:18.476Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1986
[2026-02-06T15:42:18.481Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T15:42:18.481Z] [BOT] 💾 AFTER MERGE: 1986 jobs (merged disk + memory)
[2026-02-06T15:42:18.482Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T15:42:18.488Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 1976 active
[2026-02-06T15:42:18.597Z] [BOT] 💾 Saved posted_jobs.json: 1976 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T15:42:20.361Z] [BOT] ✅ Posted message: Home Health Nursing Internship @ ORG_67c29814 in #📍・JID_6daed763
[2026-02-06T15:42:20.362Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T15:42:20.362Z] [BOT] 💾 Added channel posting: Home Health Nursing Internship @ ORG_67c29814 → location channel (2 total channels)
[2026-02-06T15:42:20.362Z] [BOT] 💾 BEFORE MERGE: 1976 jobs in memory (cached)
[2026-02-06T15:42:20.398Z] [BOT] ✅ Loaded V2 database: 1976 jobs
[2026-02-06T15:42:20.398Z] [BOT] 💾 DISK STATE: 1976 jobs on disk
[2026-02-06T15:42:20.398Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1976
[2026-02-06T15:42:20.403Z] [BOT] 🔀 Deep merged: Home Health Nursing Internship @ ORG_67c29814 (disk: 1 channels → merged: 2 channels)
[2026-02-06T15:42:20.403Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1976 jobs (merged disk + memory)
[2026-02-06T15:42:20.404Z] [BOT] ✅ No jobs to archive (all 1976 jobs within 7-day window)
[2026-02-06T15:42:20.515Z] [BOT] 💾 Saved posted_jobs.json: 1976 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T15:42:25.014Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-06T15:42:25.016Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bb778eea..." not found, but found as SHA256 "cee5b2548101e92b"
[2026-02-06T15:42:25.016Z] [BOT] ⏭️  Skipping duplicate: JID_2bc50813 (posted within 7 days)
[2026-02-06T15:42:25.026Z] [BOT] ✅ Loaded pending queue: 171 total (168 pending, 3 enriched, 0 posted)
[2026-02-06T15:42:25.042Z] [BOT] ✅ Saved pending queue: 171 total (168 pending, 2 enriched, 1 posted)
[2026-02-06T15:42:25.043Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T15:42:25.139Z] [BOT] 📂 Loaded 12554 existing routing entries
[2026-02-06T15:42:25.283Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12555
[2026-02-06T15:42:25.283Z] [BOT] Timestamp: 2026-02-06T15:42:25.225Z
[2026-02-06T15:42:25.285Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #📍・JID_6daed763: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1976 jobs in memory (cached)
[2026-02-06T15:42:25.337Z] [BOT] ✅ Loaded V2 database: 1976 jobs
💾 DISK STATE: 1976 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1976
[2026-02-06T15:42:25.342Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T15:42:25.342Z] [BOT] 💾 AFTER MERGE: 1976 jobs (merged disk + memory)
[2026-02-06T15:42:25.344Z] [BOT] ✅ No jobs to archive (all 1976 jobs within 7-day window)
[2026-02-06T15:42:25.455Z] [BOT] 💾 Saved posted_jobs.json: 1976 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T15:42:27.476Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2896) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*