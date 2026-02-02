# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T02:58:55.982Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T02:58:51.339Z] ========================================
[2026-02-02T02:58:51.341Z] Discord Bot Execution Log
[2026-02-02T02:58:51.341Z] Environment: GitHub Actions
[2026-02-02T02:58:51.341Z] Node Version: v20.20.0
[2026-02-02T02:58:51.341Z] ========================================
[2026-02-02T02:58:51.341Z] Environment Variables Check:
[2026-02-02T02:58:51.341Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T02:58:51.341Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T02:58:51.341Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T02:58:51.341Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T02:58:51.341Z] 
Multi-Channel Configuration:
[2026-02-02T02:58:51.342Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T02:58:51.342Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:58:51.342Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:58:51.342Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T02:58:51.342Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:58:51.342Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:58:51.342Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:58:51.342Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:58:51.342Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:58:51.342Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T02:58:51.342Z] 
Data Files Check:
[2026-02-02T02:58:51.343Z] .github/data/new_jobs.json: ✅ Exists (10 items, 126180 bytes)
[2026-02-02T02:58:51.401Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11148180 bytes)
[2026-02-02T02:58:51.401Z] 
========================================
[2026-02-02T02:58:51.401Z] Starting Enhanced Discord Bot...
[2026-02-02T02:58:51.401Z] ========================================
[2026-02-02T02:58:52.008Z] [BOT] ✅ Loaded V2 database: 2215 jobs
[2026-02-02T02:58:52.619Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T02:58:52.619Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T02:58:52.619Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T02:58:52.663Z] [BOT] ✅ Loaded pending queue: 586 total (536 pending, 50 enriched, 0 posted)
[2026-02-02T02:58:52.663Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T02:58:52.664Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T02:58:52.665Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T02:58:52.684Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T02:58:52.684Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-02T02:58:52.684Z] [BOT] 🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-02T02:58:52.685Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
[2026-02-02T02:58:52.685Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
[2026-02-02T02:58:52.685Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
[2026-02-02T02:58:52.685Z] [BOT] 🚫 Skipping blacklisted job: Operations Manager, Communications  at anthropic
🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
🚫 Skipping blacklisted job: Customer Success Manager - Boston at datadog
🚫 Skipping blacklisted job: Senior Principal Revenue Analyst at gusto
🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
[2026-02-02T02:58:52.686Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher at Brookhaven Lab
🚫 Skipping blacklisted job: Staff Software Engineer,  Infrastructure  at gusto
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
[2026-02-02T02:58:52.686Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Machine Learning Engineer - Home at spotify
[2026-02-02T02:58:52.686Z] [BOT] 🚫 Skipping blacklisted job: Lead TMS Compliance Analyst  at coinbase
🚫 Skipping blacklisted job: Lead TMS Quality Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Account Executive, SMB at figma
[2026-02-02T02:58:52.686Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Research Associate at Argonne National Laboratory
🚫 Skipping blacklisted job: Physics Department - Postdoctoral Scholar - Ligo at PennState University
[2026-02-02T02:58:52.686Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Research Fellow at Northeastern
🚫 Skipping blacklisted job: Postdoctoral Researcher - Aerosols and hydroclimate risk at University of Texas - Austin
[2026-02-02T02:58:52.686Z] [BOT] 🚫 Skipping blacklisted job: Computer Science Postdoctoral Fellow at American University
🚫 Skipping blacklisted job: Global Sr. Manager, Experiential & Content Production at spotify
🚫 Skipping blacklisted job: Postdoctoral Fellow in Water Systems - Ml at University of Texas - Austin
[2026-02-02T02:58:52.686Z] [BOT] 🚫 Skipping blacklisted job: Machine Learning Engineer (Lead Ads Technology) - 2026 Start (BS/MS) at TikTok
🚫 Skipping blacklisted job: Graduate Leadership Program - AI & Software Engineering at PMG
🚫 Skipping blacklisted job: Senior Full-Stack Engineer - Product at railway
[2026-02-02T02:58:52.686Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
[2026-02-02T02:58:52.730Z] [BOT] ✅ Loaded pending queue: 586 total (536 pending, 50 enriched, 0 posted)
[2026-02-02T02:58:52.790Z] [BOT] ✅ Saved pending queue: 537 total (536 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T02:58:52.790Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T02:58:52.790Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T02:58:52.791Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T02:58:52.791Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T02:58:52.791Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T02:58:52.791Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-02T02:58:52.792Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T02:58:52.792Z] [BOT] 💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T02:58:52.836Z] [BOT] ✅ Loaded V2 database: 2215 jobs
💾 DISK STATE: 2215 jobs on disk
[2026-02-02T02:58:52.837Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T02:58:52.842Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T02:58:52.842Z] [BOT] 💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T02:58:52.843Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T02:58:52.976Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T02:58:52.976Z] [BOT ERROR] (node:3424) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T02:58:54.999Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3424) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*