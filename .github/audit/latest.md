# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T01:04:33.806Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T01:04:21.473Z] ========================================
[2026-02-02T01:04:21.475Z] Discord Bot Execution Log
[2026-02-02T01:04:21.475Z] Environment: GitHub Actions
[2026-02-02T01:04:21.476Z] Node Version: v20.20.0
[2026-02-02T01:04:21.476Z] ========================================
[2026-02-02T01:04:21.476Z] Environment Variables Check:
[2026-02-02T01:04:21.476Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T01:04:21.476Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T01:04:21.476Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T01:04:21.476Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T01:04:21.476Z] 
Multi-Channel Configuration:
[2026-02-02T01:04:21.476Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T01:04:21.476Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:04:21.476Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:04:21.476Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T01:04:21.477Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:04:21.477Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:04:21.477Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:04:21.477Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:04:21.477Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:04:21.477Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T01:04:21.477Z] 
Data Files Check:
[2026-02-02T01:04:21.478Z] .github/data/new_jobs.json: ✅ Exists (10 items, 169665 bytes)
[2026-02-02T01:04:21.536Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11140016 bytes)
[2026-02-02T01:04:21.536Z] 
========================================
[2026-02-02T01:04:21.536Z] Starting Enhanced Discord Bot...
[2026-02-02T01:04:21.536Z] ========================================
[2026-02-02T01:04:22.122Z] [BOT] ✅ Loaded V2 database: 2214 jobs
[2026-02-02T01:04:22.734Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T01:04:22.735Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T01:04:22.735Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T01:04:22.784Z] [BOT] ✅ Loaded pending queue: 731 total (681 pending, 50 enriched, 0 posted)
[2026-02-02T01:04:22.784Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T01:04:22.786Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T01:04:22.786Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T01:04:22.786Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T01:04:22.804Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T01:04:22.804Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-02T01:04:22.805Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
[2026-02-02T01:04:22.805Z] [BOT] 🚫 Skipping blacklisted job: Director, Global 3rd Party Partnerships at reddit
🚫 Skipping blacklisted job: Senior Android Engineer, Apps Platform (Performance) at reddit
🚫 Skipping blacklisted job: Senior Android Engineer, Apps Platform (Performance) at reddit
[2026-02-02T01:04:22.805Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer, iOS Platform at reddit
🚫 Skipping blacklisted job: Senior iOS Software Engineer, iOS Platform at reddit
🚫 Skipping blacklisted job: Senior iOS Software Engineer, iOS Platform at reddit
[2026-02-02T01:04:22.805Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Scholar - Multiple Teams at University of Nevada Reno
🚫 Skipping blacklisted job: Senior Data Scientist, Finance  at brex
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Director of Sales Engineering, AMER at vercel
🚫 Skipping blacklisted job: Director of Trust & Safety Engineering at vercel
🚫 Skipping blacklisted job: Engineering Manager, CDN at vercel
🚫 Skipping blacklisted job: Finance Manager at vercel
[2026-02-02T01:04:22.805Z] [BOT] 🚫 Skipping blacklisted job: FP&A Manager,  GTM at vercel
🚫 Skipping blacklisted job: GSI & Consultancies, Partner Lead at vercel
🚫 Skipping blacklisted job: Platform Abuse Operations Lead, Trust & Safety at vercel
[2026-02-02T01:04:22.806Z] [BOT] 🚫 Skipping blacklisted job: Product Manager - Accounts at vercel
🚫 Skipping blacklisted job: Senior Accountant at vercel
[2026-02-02T01:04:22.806Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, FP&A Systems at vercel
🚫 Skipping blacklisted job: Senior Partner Marketing Manager at vercel
🚫 Skipping blacklisted job: Staff Product Marketing Manager, v0 at vercel
🚫 Skipping blacklisted job: Strategic Finance Manager, GTM at vercel
🚫 Skipping blacklisted job: Senior Offline Media Manager at gusto
[2026-02-02T01:04:22.806Z] [BOT] 🚫 Skipping blacklisted job: Sr Staff Software Engineer, Entity Management at gusto
🚫 Skipping blacklisted job: TRAIL Rising Leaders Program - Software Engineering at Newrez
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, Product-Led Growth at brex
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, B2B Sales at brex
[2026-02-02T01:04:22.806Z] [BOT] 🚫 Skipping blacklisted job: BizOps Lead, BD at brex
🚫 Skipping blacklisted job: BizOps Lead, BD at brex
🚫 Skipping blacklisted job:  BizOps Lead, BD at brex
[2026-02-02T01:04:22.806Z] [BOT] 🚫 Skipping blacklisted job: Manager, Global Yield Programs & Incentives at spotify
🚫 Skipping blacklisted job: Senior Associate - Analytics - Media at VaynerMedia
[2026-02-02T01:04:22.806Z] [BOT] 🚫 Skipping blacklisted job: Director, Corporate & Securities Counsel at figma
🚫 Skipping blacklisted job: Associate Manager, Compliance at coinbase
[2026-02-02T01:04:22.807Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist - Product at gusto
🚫 Skipping blacklisted job: Postdoctoral Research Associate - Mathematics at Northeastern University
🚫 Skipping blacklisted job: Postdoctoral Scholar - Interdisciplinary Data Science at University of Nevada Las Vegas (UNLV)
🚫 Skipping blacklisted job: People Technology Delivery Manager at gusto
🚫 Skipping blacklisted job: Senior Product Marketing Manager, HR Experiences at gusto
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Payroll GTM at gusto
[2026-02-02T01:04:22.807Z] [BOT] 🚫 Skipping blacklisted job: Government Affairs Lead (Small Business Healthcare, Benefits, and HR Policy) at gusto
🚫 Skipping blacklisted job: Corporate Tax Manager at gusto
[2026-02-02T01:04:22.855Z] [BOT] ✅ Loaded pending queue: 731 total (681 pending, 50 enriched, 0 posted)
[2026-02-02T01:04:22.932Z] [BOT] ✅ Saved pending queue: 683 total (681 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-02T01:04:22.932Z] [BOT] 📋 After blacklist filter: 1 jobs (48 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-02T01:04:22.933Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 1 jobs...
[2026-02-02T01:04:22.933Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-02T01:04:22.935Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-02T01:04:22.936Z] [BOT] 📍 [ROUTING] "Email Marketing Operations" @ figma
[2026-02-02T01:04:22.937Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-02T01:04:22.955Z] [BOT ERROR] (node:3101) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T01:04:23.234Z] [BOT] ✅ Posted message: Email Marketing Operations @ figma in #💻・tech-jobs
[2026-02-02T01:04:23.235Z] [BOT] ✅ Industry: Email Marketing Operations @ figma
[2026-02-02T01:04:23.236Z] [BOT] 💾 Added channel posting: Email Marketing Operations @ figma → category channel (1 total channels)
[2026-02-02T01:04:23.236Z] [BOT] 💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T01:04:23.282Z] [BOT] ✅ Loaded V2 database: 2214 jobs
💾 DISK STATE: 2214 jobs on disk
[2026-02-02T01:04:23.283Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T01:04:23.288Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T01:04:23.288Z] [BOT] 💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T01:04:23.289Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T01:04:23.426Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T01:04:25.176Z] [BOT] ✅ Posted message: Email Marketing Operations @ figma in #🌉・JID_739bbc0b
[2026-02-02T01:04:25.176Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-02T01:04:25.177Z] [BOT] 💾 Added channel posting: Email Marketing Operations @ figma → location channel (2 total channels)
[2026-02-02T01:04:25.177Z] [BOT] 💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T01:04:25.214Z] [BOT] ✅ Loaded V2 database: 2215 jobs
💾 DISK STATE: 2215 jobs on disk
[2026-02-02T01:04:25.214Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T01:04:25.219Z] [BOT] 🔀 Deep merged: Email Marketing Operations @ figma (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-02T01:04:25.219Z] [BOT] 💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T01:04:25.220Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T01:04:25.330Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T01:04:29.832Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-02T01:04:29.834Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_580bb3e3..." not found, but found as SHA256 "55b160a48d928e51"
[2026-02-02T01:04:29.834Z] [BOT] ⏭️  Skipping duplicate: JID_01eec499 (posted within 7 days)
[2026-02-02T01:04:29.875Z] [BOT] ✅ Loaded pending queue: 683 total (681 pending, 2 enriched, 0 posted)
[2026-02-02T01:04:29.945Z] [BOT] ✅ Saved pending queue: 683 total (681 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-02T01:04:29.945Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T01:04:30.053Z] [BOT] 📂 Loaded 12295 existing routing entries
[2026-02-02T01:04:30.173Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-02T01:04:30.173Z] [BOT] Total entries: 12296
   Timestamp: 2026-02-02T01:04:30.123Z
[2026-02-02T01:04:30.174Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
   Total attempts: 51
[2026-02-02T01:04:30.174Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-02T01:04:30.174Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-02T01:04:30.174Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-02T01:04:30.174Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-02T01:04:30.174Z] [BOT] [STATS] Channel stats saved
[2026-02-02T01:04:30.174Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T01:04:30.235Z] [BOT] ✅ Loaded V2 database: 2215 jobs
💾 DISK STATE: 2215 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T01:04:30.238Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T01:04:30.238Z] [BOT] 💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T01:04:30.240Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T01:04:30.357Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T01:04:32.387Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3101) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*