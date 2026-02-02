# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T02:34:19.686Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T02:34:14.932Z] ========================================
[2026-02-02T02:34:14.934Z] Discord Bot Execution Log
[2026-02-02T02:34:14.934Z] Environment: GitHub Actions
[2026-02-02T02:34:14.934Z] Node Version: v20.20.0
[2026-02-02T02:34:14.934Z] ========================================
[2026-02-02T02:34:14.934Z] Environment Variables Check:
[2026-02-02T02:34:14.934Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T02:34:14.934Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T02:34:14.934Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T02:34:14.934Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T02:34:14.935Z] 
Multi-Channel Configuration:
[2026-02-02T02:34:14.935Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T02:34:14.935Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:34:14.935Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:34:14.935Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T02:34:14.935Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:34:14.935Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:34:14.935Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:34:14.935Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:34:14.935Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:34:14.935Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T02:34:14.935Z] 
Data Files Check:
[2026-02-02T02:34:14.936Z] .github/data/new_jobs.json: ✅ Exists (10 items, 126657 bytes)
[2026-02-02T02:34:14.994Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11148180 bytes)
[2026-02-02T02:34:14.995Z] 
========================================
[2026-02-02T02:34:14.995Z] Starting Enhanced Discord Bot...
[2026-02-02T02:34:14.995Z] ========================================
[2026-02-02T02:34:15.557Z] [BOT] ✅ Loaded V2 database: 2215 jobs
[2026-02-02T02:34:16.289Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-02T02:34:16.289Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T02:34:16.289Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T02:34:16.335Z] [BOT] ✅ Loaded pending queue: 680 total (630 pending, 50 enriched, 0 posted)
[2026-02-02T02:34:16.336Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T02:34:16.337Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T02:34:16.337Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T02:34:16.356Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T02:34:16.356Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
[2026-02-02T02:34:16.356Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at brex
[2026-02-02T02:34:16.356Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at brex
🚫 Skipping blacklisted job: Staff Engineer I, Software Process Engineering at Samsung
🚫 Skipping blacklisted job: Staff Analytics Engineer at gohighlevel
🚫 Skipping blacklisted job: Energy Supply GMS Analyst – Or Senior - Associate - Intermediate at Dominion Energy
🚫 Skipping blacklisted job: Load Forecasting Engineer – Engineer/Senior/Staff - Engineering Analytics & Modeling at Dominion Energy
🚫 Skipping blacklisted job: Manager, Software Engineering - Interaction Design at figma
[2026-02-02T02:34:16.357Z] [BOT] 🚫 Skipping blacklisted job: Principal Mission Assurance Engineer at Northrop Grumman
[2026-02-02T02:34:16.357Z] [BOT] 🚫 Skipping blacklisted job: Director of Sales, Emerging & Scaled (New Business) at spotify
[2026-02-02T02:34:16.357Z] [BOT] 🚫 Skipping blacklisted job: Senior – Data Scientist at Walmart
🚫 Skipping blacklisted job: Manager, Sales Operations – Commissions at spotify
[2026-02-02T02:34:16.357Z] [BOT] 🚫 Skipping blacklisted job: Senior CES Operations Manager at figma
🚫 Skipping blacklisted job: Postdoctoral Researcher at National Renewable Energy Laboratory
🚫 Skipping blacklisted job: Software Engineer / Principal Software Engineer - Aht at Northrop Grumman
🚫 Skipping blacklisted job: Marketing Strategy Manager at figma
🚫 Skipping blacklisted job: Community Experiences Manager at figma
🚫 Skipping blacklisted job: Manager, Software Engineering - Billing at figma
[2026-02-02T02:34:16.357Z] [BOT] 🚫 Skipping blacklisted job: Manager, GTM Finance at figma
🚫 Skipping blacklisted job: Postdoctoral Research Associate at Texas A&M University - Corpus Christi
[2026-02-02T02:34:16.357Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Scholar-Neutrino Physics at PennState University
🚫 Skipping blacklisted job: Postdoctoral Scholar at University of Miami
[2026-02-02T02:34:16.357Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - Cosmology - Spherex Galaxy Clusters at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Appointee - Coastal-urban Flooding at Argonne National Laboratory
[2026-02-02T02:34:16.357Z] [BOT] 🚫 Skipping blacklisted job: Manager, Field Marketing at figma
[2026-02-02T02:34:16.357Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Billing at clerk
[2026-02-02T02:34:16.357Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales at figma
🚫 Skipping blacklisted job: Manager, Software Engineering - Creation Engine at figma
[2026-02-02T02:34:16.358Z] [BOT] 🚫 Skipping blacklisted job: Manager, Solutions Consulting at figma
🚫 Skipping blacklisted job: Partner Manager, Scaled at figma
🚫 Skipping blacklisted job: Product Manager, Sites at figma
🚫 Skipping blacklisted job: Product Manager, CMS at figma
🚫 Skipping blacklisted job: Product Manager, Growth at figma
[2026-02-02T02:34:16.358Z] [BOT] 🚫 Skipping blacklisted job: Director, Design - Communication Tools at figma
🚫 Skipping blacklisted job: Manager, Software Engineering - Expressive AI at figma
🚫 Skipping blacklisted job: Manager, Software Engineering - Collaboration Tools at figma
🚫 Skipping blacklisted job: Sales Onboarding Program Manager at figma
🚫 Skipping blacklisted job: Demo Strategy & Effectiveness Manager  at figma
[2026-02-02T02:34:16.358Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Creation Engine at figma
🚫 Skipping blacklisted job: Product Manager, Scale at figma
🚫 Skipping blacklisted job: Director, Software Engineering - Growth at figma
🚫 Skipping blacklisted job: Director, Software Engineering - Product Platform at figma
🚫 Skipping blacklisted job: Product Manager, AI at figma
[2026-02-02T02:34:16.358Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales  at figma
🚫 Skipping blacklisted job: Product Manager, Design Tools at figma
🚫 Skipping blacklisted job: Postdoctoral Appointee - Cosmological Physics & Advanced Computing - CPAC at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Researcher - Computer Vision - AI/ML Radiology and Oncology at Johnson & Johnson
[2026-02-02T02:34:16.358Z] [BOT] 🚫 Skipping blacklisted job: Senior Lidar Specialist at Parkhill
🚫 Skipping blacklisted job: Sr. Director, Integrated Marketing at gohighlevel
[2026-02-02T02:34:16.403Z] [BOT] ✅ Loaded pending queue: 680 total (630 pending, 50 enriched, 0 posted)
[2026-02-02T02:34:16.474Z] [BOT] ✅ Saved pending queue: 631 total (630 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T02:34:16.474Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T02:34:16.475Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-02T02:34:16.475Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-02T02:34:16.475Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T02:34:16.476Z] [BOT] 💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T02:34:16.520Z] [BOT] ✅ Loaded V2 database: 2215 jobs
💾 DISK STATE: 2215 jobs on disk
[2026-02-02T02:34:16.520Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T02:34:16.525Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T02:34:16.525Z] [BOT] 💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T02:34:16.527Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T02:34:16.663Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T02:34:16.663Z] [BOT ERROR] (node:4077) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T02:34:18.687Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4077) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*