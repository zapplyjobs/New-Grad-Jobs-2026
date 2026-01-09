# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T05:54:30.991Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T05:54:19.732Z] ========================================
[2026-01-09T05:54:19.734Z] Discord Bot Execution Log
[2026-01-09T05:54:19.734Z] Environment: GitHub Actions
[2026-01-09T05:54:19.734Z] Node Version: v20.19.6
[2026-01-09T05:54:19.734Z] ========================================
[2026-01-09T05:54:19.734Z] Environment Variables Check:
[2026-01-09T05:54:19.734Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T05:54:19.734Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T05:54:19.734Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T05:54:19.735Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T05:54:19.735Z] 
Multi-Channel Configuration:
[2026-01-09T05:54:19.735Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T05:54:19.735Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T05:54:19.735Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T05:54:19.735Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T05:54:19.735Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T05:54:19.735Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T05:54:19.735Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T05:54:19.735Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T05:54:19.735Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T05:54:19.735Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T05:54:19.736Z] 
Data Files Check:
[2026-01-09T05:54:19.737Z] .github/data/new_jobs.json: ✅ Exists (10 items, 117263 bytes)
[2026-01-09T05:54:19.742Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 772394 bytes)
[2026-01-09T05:54:19.742Z] 
========================================
[2026-01-09T05:54:19.743Z] Starting Enhanced Discord Bot...
[2026-01-09T05:54:19.743Z] ========================================
[2026-01-09T05:54:20.259Z] [BOT] ✅ Loaded V2 database: 1501 jobs
[2026-01-09T05:54:21.004Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T05:54:21.004Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T05:54:21.004Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T05:54:21.012Z] [BOT] ✅ Loaded pending queue: 212 total (192 pending, 20 enriched, 0 posted)
[2026-01-09T05:54:21.013Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-09T05:54:21.013Z] [BOT] [BOT] 🔍 Sample enriched job: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T05:54:21.014Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
[2026-01-09T05:54:21.014Z] [BOT] ⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
[2026-01-09T05:54:21.014Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T05:54:21.015Z] [BOT] ⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
[2026-01-09T05:54:21.015Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T05:54:21.015Z] [BOT] ⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
[2026-01-09T05:54:21.015Z] [BOT] ⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
[2026-01-09T05:54:21.015Z] [BOT] ⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T05:54:21.015Z] [BOT] ⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
[2026-01-09T05:54:21.016Z] [BOT] ⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
[2026-01-09T05:54:21.016Z] [BOT] ⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
[2026-01-09T05:54:21.016Z] [BOT] ⏭️  Skipping duplicate: JID_8d58a7c2-ft_r197676 (posted within 7 days)
[2026-01-09T05:54:21.016Z] [BOT] ⏭️ Skipping already posted: ROLE_f7ffdd20 at Advocate Health Care
[2026-01-09T05:54:21.016Z] [BOT] ⏭️  Skipping duplicate: JID_5280a14a-scientist_r2517664 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d69b468e at Applied Materials
[2026-01-09T05:54:21.016Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378366-1 (posted within 7 days)
[2026-01-09T05:54:21.016Z] [BOT] ⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
⏭️  Skipping duplicate: JID_7b17b840-entry_j00173791 (posted within 7 days)
⏭️ Skipping already posted: Data Processing Specialist - Entry at Equifax
[2026-01-09T05:54:21.016Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-09T05:54:21.016Z] [BOT] ⏭️  Skipping duplicate: JID_22bbcb93 (posted within 7 days)
⏭️ Skipping already posted: Manager, Account Executive - Enterprise Sales  at anthropic
[2026-01-09T05:54:21.017Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23270 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
[2026-01-09T05:54:21.017Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq212564-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d1a2e1c0 at General Dynamics Information Technology
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ac961f8e-_jr2026490878-1 (posted within 7 days)
⏭️ Skipping already posted: Atmospheric Scientist – Associate or Mid-Level at The Boeing Company
[2026-01-09T05:54:21.017Z] [BOT] ⏭️  Skipping duplicate: JID_4bd2e4a1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9921d7a0 at Wing
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T05:54:21.017Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-09T05:54:21.017Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T05:54:21.018Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T05:54:21.018Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T05:54:21.020Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-09T05:54:21.021Z] [BOT] 📍 [ROUTING] "Partner Marketing Lead, GSIs" @ anthropic
[2026-01-09T05:54:21.021Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-09T05:54:21.026Z] [BOT ERROR] (node:3181) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T05:54:21.323Z] [BOT] ✅ Created forum post: 🏢 Partner Marketing Lead, GSIs @ anthropic in #💲・sales-jobs
[2026-01-09T05:54:21.323Z] [BOT] ✅ Industry: Partner Marketing Lead, GSIs @ anthropic
[2026-01-09T05:54:23.037Z] [BOT] ✅ Created forum post: 🏢 Partner Marketing Lead, GSIs @ anthropic in #🌉・san-francisco
[2026-01-09T05:54:23.037Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-09T05:54:24.538Z] [BOT] 💾 Marked as posted: Partner Marketing Lead, GSIs @ anthropic (instance #1)
[2026-01-09T05:54:24.538Z] [BOT] 💾 BEFORE ARCHIVING: 1502 jobs in database
[2026-01-09T05:54:24.540Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T05:54:24.545Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-09T05:54:24.545Z] [BOT] ✅ Archiving complete: 1 archived, 1501 active
[2026-01-09T05:54:24.565Z] [BOT] 💾 Saved posted_jobs.json: 1501 active jobs
[2026-01-09T05:54:24.565Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T05:54:27.566Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T05:54:27.566Z] [BOT] ⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
[2026-01-09T05:54:27.577Z] [BOT] ✅ Loaded pending queue: 212 total (192 pending, 20 enriched, 0 posted)
[2026-01-09T05:54:27.587Z] [BOT] ✅ Saved pending queue: 212 total (192 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-09T05:54:27.588Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T05:54:27.639Z] [BOT] 📂 Loaded 2483 existing routing entries
[2026-01-09T05:54:27.698Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-09T05:54:27.699Z] [BOT] Total entries: 2484
   Timestamp: 2026-01-09T05:54:27.685Z
[2026-01-09T05:54:27.699Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T05:54:27.699Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T05:54:27.699Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-09T05:54:27.700Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-09T05:54:27.700Z] [BOT] [STATS] Channel stats saved
[2026-01-09T05:54:29.713Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3181) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*