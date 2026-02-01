# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T21:02:10.944Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T21:01:58.906Z] ========================================
[2026-02-01T21:01:58.908Z] Discord Bot Execution Log
[2026-02-01T21:01:58.908Z] Environment: GitHub Actions
[2026-02-01T21:01:58.908Z] Node Version: v20.20.0
[2026-02-01T21:01:58.908Z] ========================================
[2026-02-01T21:01:58.908Z] Environment Variables Check:
[2026-02-01T21:01:58.908Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T21:01:58.908Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T21:01:58.909Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T21:01:58.909Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T21:01:58.909Z] 
Multi-Channel Configuration:
[2026-02-01T21:01:58.909Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T21:01:58.909Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:01:58.909Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:01:58.909Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T21:01:58.909Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:01:58.909Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:01:58.909Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:01:58.910Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:01:58.910Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:01:58.910Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T21:01:58.910Z] 
Data Files Check:
[2026-02-01T21:01:58.911Z] .github/data/new_jobs.json: ✅ Exists (10 items, 176519 bytes)
[2026-02-01T21:01:58.968Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10890079 bytes)
[2026-02-01T21:01:58.969Z] 
========================================
[2026-02-01T21:01:58.969Z] Starting Enhanced Discord Bot...
[2026-02-01T21:01:58.969Z] ========================================
[2026-02-01T21:01:59.565Z] [BOT] ✅ Loaded V2 database: 2178 jobs
[2026-02-01T21:02:00.054Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T21:02:00.055Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T21:02:00.055Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T21:02:00.105Z] [BOT] ✅ Loaded pending queue: 768 total (718 pending, 50 enriched, 0 posted)
[2026-02-01T21:02:00.105Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Client Account Manager, Large Customer Sales (Auto) at reddit
[2026-02-01T21:02:00.127Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T21:02:00.127Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
[2026-02-01T21:02:00.127Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
[2026-02-01T21:02:00.127Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
[2026-02-01T21:02:00.128Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
[2026-02-01T21:02:00.128Z] [BOT] 🚫 Skipping blacklisted job: Director, Global 3rd Party Partnerships at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
[2026-02-01T21:02:00.128Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
[2026-02-01T21:02:00.128Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-01T21:02:00.128Z] [BOT] 🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
🚫 Skipping blacklisted job: Senior Android Engineer, Apps Platform (Performance) at reddit
[2026-02-01T21:02:00.128Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer, Apps Platform (Performance) at reddit
🚫 Skipping blacklisted job: Senior iOS Software Engineer, iOS Platform at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-01T21:02:00.128Z] [BOT] 🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
🚫 Skipping blacklisted job: Senior iOS Software Engineer, iOS Platform at reddit
[2026-02-01T21:02:00.129Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer, iOS Platform at reddit
[2026-02-01T21:02:00.129Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Postdoctoral Scholar - Multiple Teams at University of Nevada Reno
[2026-02-01T21:02:00.129Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Finance  at brex
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-01T21:02:00.129Z] [BOT] 🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
[2026-02-01T21:02:00.129Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Director of Sales Engineering, AMER at vercel
🚫 Skipping blacklisted job: Director of Trust & Safety Engineering at vercel
[2026-02-01T21:02:00.129Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, CDN at vercel
🚫 Skipping blacklisted job: Finance Manager at vercel
🚫 Skipping blacklisted job: FP&A Manager,  GTM at vercel
🚫 Skipping blacklisted job: GSI & Consultancies, Partner Lead at vercel
🚫 Skipping blacklisted job: Platform Abuse Operations Lead, Trust & Safety at vercel
[2026-02-01T21:02:00.129Z] [BOT] 🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Product Manager - Accounts at vercel
🚫 Skipping blacklisted job: Senior Accountant at vercel
[2026-02-01T21:02:00.129Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, FP&A Systems at vercel
🚫 Skipping blacklisted job: Senior Partner Marketing Manager at vercel
🚫 Skipping blacklisted job: Staff Product Marketing Manager, v0 at vercel
🚫 Skipping blacklisted job: Strategic Finance Manager, GTM at vercel
[2026-02-01T21:02:00.130Z] [BOT] 🚫 Skipping blacklisted job: Senior Offline Media Manager at gusto
[2026-02-01T21:02:00.180Z] [BOT] ✅ Loaded pending queue: 768 total (718 pending, 50 enriched, 0 posted)
[2026-02-01T21:02:00.258Z] [BOT] ✅ Saved pending queue: 719 total (718 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (49 blacklisted)
[2026-02-01T21:02:00.259Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-01T21:02:00.259Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T21:02:00.261Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-01T21:02:00.263Z] [BOT] 📍 [ROUTING] "Visual Designer - Contract" @ datadog
[2026-02-01T21:02:00.263Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T21:02:00.282Z] [BOT ERROR] (node:2661) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T21:02:00.615Z] [BOT] ✅ Posted message: Visual Designer - Contract @ datadog in #💻・tech-jobs
  ✅ Industry: Visual Designer - Contract @ datadog
[2026-02-01T21:02:00.616Z] [BOT] 💾 Added channel posting: Visual Designer - Contract @ datadog → category channel (1 total channels)
[2026-02-01T21:02:00.616Z] [BOT] 💾 BEFORE MERGE: 2179 jobs in memory (cached)
[2026-02-01T21:02:00.662Z] [BOT] ✅ Loaded V2 database: 2178 jobs
💾 DISK STATE: 2178 jobs on disk
[2026-02-01T21:02:00.662Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2179
[2026-02-01T21:02:00.667Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:02:00.668Z] [BOT] 💾 AFTER MERGE: 2179 jobs (merged disk + memory)
[2026-02-01T21:02:00.669Z] [BOT] ✅ No jobs to archive (all 2179 jobs within 7-day window)
[2026-02-01T21:02:00.827Z] [BOT] 💾 Saved posted_jobs.json: 2179 active jobs
[2026-02-01T21:02:00.827Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T21:02:02.695Z] [BOT] ✅ Posted message: Visual Designer - Contract @ datadog in #🗽・JID_98d4f0de
[2026-02-01T21:02:02.696Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T21:02:02.696Z] [BOT] 💾 Added channel posting: Visual Designer - Contract @ datadog → location channel (2 total channels)
[2026-02-01T21:02:02.696Z] [BOT] 💾 BEFORE MERGE: 2179 jobs in memory (cached)
[2026-02-01T21:02:02.735Z] [BOT] ✅ Loaded V2 database: 2179 jobs
💾 DISK STATE: 2179 jobs on disk
[2026-02-01T21:02:02.736Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2179
[2026-02-01T21:02:02.740Z] [BOT] 🔀 Deep merged: Visual Designer - Contract @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:02:02.741Z] [BOT] 💾 AFTER MERGE: 2179 jobs (merged disk + memory)
[2026-02-01T21:02:02.742Z] [BOT] ✅ No jobs to archive (all 2179 jobs within 7-day window)
[2026-02-01T21:02:02.848Z] [BOT] 💾 Saved posted_jobs.json: 2179 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:02:07.350Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-01T21:02:07.352Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_408b606e..." not found, but found as SHA256 "356bfc0f3fdaf2d3"
[2026-02-01T21:02:07.352Z] [BOT] ⏭️  Skipping duplicate: JID_408b606e (posted within 7 days)
[2026-02-01T21:02:07.393Z] [BOT] ✅ Loaded pending queue: 719 total (718 pending, 1 enriched, 0 posted)
[2026-02-01T21:02:07.462Z] [BOT] ✅ Saved pending queue: 719 total (718 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T21:02:07.556Z] [BOT] 📂 Loaded 12259 existing routing entries
[2026-02-01T21:02:07.698Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-01T21:02:07.698Z] [BOT] Total entries: 12260
   Timestamp: 2026-02-01T21:02:07.645Z
[2026-02-01T21:02:07.699Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T21:02:07.699Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-01T21:02:07.699Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T21:02:07.699Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🗽・JID_98d4f0de: 1 posts
[2026-02-01T21:02:07.700Z] [BOT] [STATS] Channel stats saved
[2026-02-01T21:02:07.700Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2179 jobs in memory (cached)
[2026-02-01T21:02:07.745Z] [BOT] ✅ Loaded V2 database: 2179 jobs
💾 DISK STATE: 2179 jobs on disk
[2026-02-01T21:02:07.746Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2179
[2026-02-01T21:02:07.751Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:02:07.751Z] [BOT] 💾 AFTER MERGE: 2179 jobs (merged disk + memory)
[2026-02-01T21:02:07.752Z] [BOT] ✅ No jobs to archive (all 2179 jobs within 7-day window)
[2026-02-01T21:02:07.865Z] [BOT] 💾 Saved posted_jobs.json: 2179 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:02:07.865Z] [BOT] ✅ Database saved successfully
[2026-02-01T21:02:09.894Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2661) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*