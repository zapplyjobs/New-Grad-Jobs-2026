# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T08:38:52.148Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T08:38:47.997Z] ========================================
[2026-02-02T08:38:47.999Z] Discord Bot Execution Log
[2026-02-02T08:38:47.999Z] Environment: GitHub Actions
[2026-02-02T08:38:47.999Z] Node Version: v20.20.0
[2026-02-02T08:38:47.999Z] ========================================
[2026-02-02T08:38:47.999Z] Environment Variables Check:
[2026-02-02T08:38:47.999Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T08:38:47.999Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T08:38:47.999Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T08:38:47.999Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T08:38:48.000Z] 
Multi-Channel Configuration:
[2026-02-02T08:38:48.000Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T08:38:48.000Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:38:48.000Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:38:48.000Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T08:38:48.000Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:38:48.000Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:38:48.000Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:38:48.000Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:38:48.000Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:38:48.000Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T08:38:48.000Z] 
Data Files Check:
[2026-02-02T08:38:48.002Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152569 bytes)
[2026-02-02T08:38:48.059Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11165524 bytes)
[2026-02-02T08:38:48.059Z] 
========================================
[2026-02-02T08:38:48.059Z] Starting Enhanced Discord Bot...
[2026-02-02T08:38:48.059Z] ========================================
[2026-02-02T08:38:48.644Z] [BOT] ✅ Loaded V2 database: 2217 jobs
[2026-02-02T08:38:49.034Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T08:38:49.034Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T08:38:49.034Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T08:38:49.060Z] [BOT] ✅ Loaded pending queue: 437 total (387 pending, 50 enriched, 0 posted)
[2026-02-02T08:38:49.061Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T08:38:49.062Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T08:38:49.062Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T08:38:49.080Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T08:38:49.081Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
[2026-02-02T08:38:49.081Z] [BOT] 🚫 Skipping blacklisted job: Director, Global 3rd Party Partnerships at reddit
🚫 Skipping blacklisted job: Senior Android Engineer, Apps Platform (Performance) at reddit
[2026-02-02T08:38:49.081Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer, Apps Platform (Performance) at reddit
🚫 Skipping blacklisted job: Senior iOS Software Engineer, iOS Platform at reddit
🚫 Skipping blacklisted job: Senior iOS Software Engineer, iOS Platform at reddit
🚫 Skipping blacklisted job: Senior iOS Software Engineer, iOS Platform at reddit
🚫 Skipping blacklisted job: Postdoctoral Scholar - Multiple Teams at University of Nevada Reno
[2026-02-02T08:38:49.081Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Finance  at brex
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
[2026-02-02T08:38:49.081Z] [BOT] 🚫 Skipping blacklisted job: Director of Sales Engineering, AMER at vercel
🚫 Skipping blacklisted job: Director of Trust & Safety Engineering at vercel
🚫 Skipping blacklisted job: Engineering Manager, CDN at vercel
🚫 Skipping blacklisted job: Finance Manager at vercel
[2026-02-02T08:38:49.082Z] [BOT] 🚫 Skipping blacklisted job: FP&A Manager,  GTM at vercel
🚫 Skipping blacklisted job: GSI & Consultancies, Partner Lead at vercel
🚫 Skipping blacklisted job: Platform Abuse Operations Lead, Trust & Safety at vercel
🚫 Skipping blacklisted job: Product Manager - Accounts at vercel
🚫 Skipping blacklisted job: Senior Accountant at vercel
[2026-02-02T08:38:49.082Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, FP&A Systems at vercel
🚫 Skipping blacklisted job: Senior Partner Marketing Manager at vercel
🚫 Skipping blacklisted job: Staff Product Marketing Manager, v0 at vercel
[2026-02-02T08:38:49.082Z] [BOT] 🚫 Skipping blacklisted job: Strategic Finance Manager, GTM at vercel
[2026-02-02T08:38:49.082Z] [BOT] 🚫 Skipping blacklisted job: Senior Offline Media Manager at gusto
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, Product-Led Growth at brex
[2026-02-02T08:38:49.082Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Operations Manager, B2B Sales at brex
🚫 Skipping blacklisted job: BizOps Lead, BD at brex
🚫 Skipping blacklisted job: BizOps Lead, BD at brex
[2026-02-02T08:38:49.082Z] [BOT] 🚫 Skipping blacklisted job:  BizOps Lead, BD at brex
🚫 Skipping blacklisted job: Manager, Global Yield Programs & Incentives at spotify
[2026-02-02T08:38:49.082Z] [BOT] 🚫 Skipping blacklisted job: Senior Associate - Analytics - Media at VaynerMedia
🚫 Skipping blacklisted job: Director, Corporate & Securities Counsel at figma
[2026-02-02T08:38:49.082Z] [BOT] 🚫 Skipping blacklisted job: Associate Manager, Compliance at coinbase
🚫 Skipping blacklisted job: Staff Data Scientist - Product at gusto
[2026-02-02T08:38:49.083Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Research Associate - Mathematics at Northeastern University
🚫 Skipping blacklisted job: Postdoctoral Scholar - Interdisciplinary Data Science at University of Nevada Las Vegas (UNLV)
🚫 Skipping blacklisted job: People Technology Delivery Manager at gusto
🚫 Skipping blacklisted job: Senior Product Marketing Manager, HR Experiences at gusto
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Payroll GTM at gusto
[2026-02-02T08:38:49.083Z] [BOT] 🚫 Skipping blacklisted job: Government Affairs Lead (Small Business Healthcare, Benefits, and HR Policy) at gusto
🚫 Skipping blacklisted job: Corporate Tax Manager at gusto
🚫 Skipping blacklisted job: Process and Controls Financial Manager at gusto
🚫 Skipping blacklisted job: Expansion Account Manager  at gusto
[2026-02-02T08:38:49.083Z] [BOT] 🚫 Skipping blacklisted job: Principal Software Engineer - Payroll at gusto
🚫 Skipping blacklisted job: Corporate Development & Partnerships Deal Lead at gusto
[2026-02-02T08:38:49.083Z] [BOT] 🚫 Skipping blacklisted job: Software Engineering Manager, Symmetry  at gusto
🚫 Skipping blacklisted job: Manager, Partner Product and Delivery at spotify
[2026-02-02T08:38:49.083Z] [BOT] 🚫 Skipping blacklisted job: Associate Product Manager Intern at coinbase
🚫 Skipping blacklisted job: Engineering Manager, Salesforce at brex
[2026-02-02T08:38:49.115Z] [BOT] ✅ Loaded pending queue: 437 total (387 pending, 50 enriched, 0 posted)
[2026-02-02T08:38:49.159Z] [BOT] ✅ Saved pending queue: 388 total (387 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-02T08:38:49.159Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T08:38:49.160Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-02T08:38:49.160Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
   Total attempts: 50
[2026-02-02T08:38:49.160Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T08:38:49.161Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-02T08:38:49.161Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T08:38:49.161Z] [BOT] 💾 BEFORE MERGE: 2217 jobs in memory (cached)
[2026-02-02T08:38:49.205Z] [BOT] ✅ Loaded V2 database: 2217 jobs
💾 DISK STATE: 2217 jobs on disk
[2026-02-02T08:38:49.206Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2217
[2026-02-02T08:38:49.211Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T08:38:49.212Z] [BOT] 💾 AFTER MERGE: 2217 jobs (merged disk + memory)
[2026-02-02T08:38:49.213Z] [BOT] ✅ No jobs to archive (all 2217 jobs within 7-day window)
[2026-02-02T08:38:49.345Z] [BOT] 💾 Saved posted_jobs.json: 2217 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T08:38:49.345Z] [BOT ERROR] (node:3052) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T08:38:51.368Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3052) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*