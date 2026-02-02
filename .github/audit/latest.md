# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T00:10:04.544Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T00:09:51.955Z] ========================================
[2026-02-02T00:09:51.957Z] Discord Bot Execution Log
[2026-02-02T00:09:51.957Z] Environment: GitHub Actions
[2026-02-02T00:09:51.957Z] Node Version: v20.20.0
[2026-02-02T00:09:51.957Z] ========================================
[2026-02-02T00:09:51.957Z] Environment Variables Check:
[2026-02-02T00:09:51.957Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T00:09:51.957Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T00:09:51.957Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T00:09:51.958Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T00:09:51.958Z] 
Multi-Channel Configuration:
[2026-02-02T00:09:51.958Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T00:09:51.958Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:09:51.958Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:09:51.958Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T00:09:51.958Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:09:51.958Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:09:51.958Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:09:51.958Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:09:51.958Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:09:51.958Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T00:09:51.958Z] 
Data Files Check:
[2026-02-02T00:09:51.960Z] .github/data/new_jobs.json: ✅ Exists (10 items, 182328 bytes)
[2026-02-02T00:09:52.031Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11122164 bytes)
[2026-02-02T00:09:52.031Z] 
========================================
[2026-02-02T00:09:52.031Z] Starting Enhanced Discord Bot...
[2026-02-02T00:09:52.031Z] ========================================
[2026-02-02T00:09:52.540Z] [BOT] ✅ Loaded V2 database: 2212 jobs
[2026-02-02T00:09:53.446Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
[2026-02-02T00:09:53.447Z] [BOT] - Zapply (CH_20db82b8)
[2026-02-02T00:09:53.447Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T00:09:53.512Z] [BOT] ✅ Loaded pending queue: 729 total (679 pending, 50 enriched, 0 posted)
[2026-02-02T00:09:53.512Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T00:09:53.513Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T00:09:53.513Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T00:09:53.513Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T00:09:53.527Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T00:09:53.527Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager - Boston (Portuguese-speaking) at datadog
[2026-02-02T00:09:53.527Z] [BOT] 🚫 Skipping blacklisted job: Datadog for Startups Engineering Lead at datadog
🚫 Skipping blacklisted job: Datadog for Startups Lead at datadog
🚫 Skipping blacklisted job: Director, Pricing and Monetization at datadog
🚫 Skipping blacklisted job: Director, Sales Field Enablement - NYC at datadog
🚫 Skipping blacklisted job: Director, Security Sales Engineering at datadog
🚫 Skipping blacklisted job: Director, Technical Product Partnerships at datadog
[2026-02-02T00:09:53.528Z] [BOT] 🚫 Skipping blacklisted job: Enablement Operations Senior Associate at datadog
🚫 Skipping blacklisted job: Engineering Manager I - Cyber Threat Intelligence at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Denver at datadog
🚫 Skipping blacklisted job: Field Marketing Manager (LATAM South) at datadog
[2026-02-02T00:09:53.528Z] [BOT] 🚫 Skipping blacklisted job: Global Safety & Security Senior Manager - NYC at datadog
🚫 Skipping blacklisted job: GTM Strategy and Operations Senior Associate - AMER Commercial & Mid Market at datadog
🚫 Skipping blacklisted job: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
🚫 Skipping blacklisted job: Leadership Training Manager at datadog
🚫 Skipping blacklisted job: Lead UX Designer - New York at datadog
[2026-02-02T00:09:53.528Z] [BOT] 🚫 Skipping blacklisted job: Manager 1, Technical Account Management - Denver at datadog
🚫 Skipping blacklisted job: Manager 1, Technical Account Management - New York at datadog
🚫 Skipping blacklisted job: Manager 1, Technical Escalations Engineering - US-East at datadog
🚫 Skipping blacklisted job: Manager 2, Premier Support Engineering -  Boston at datadog
🚫 Skipping blacklisted job: Manager, Commercial Sales Engineering (AMER - East) at datadog
🚫 Skipping blacklisted job: Manager, Commercial Sales Engineering (AMER - West) at datadog
[2026-02-02T00:09:53.528Z] [BOT] 🚫 Skipping blacklisted job: Manager, Customer Success - Denver at datadog
🚫 Skipping blacklisted job: Manager I, Developer Advocacy at datadog
[2026-02-02T00:09:53.528Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Engineering - Cloud Security - Findings Prioritization at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Infrastructure Remediation at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Language Platform at datadog
🚫 Skipping blacklisted job: Manager II, Engineering - Bits AI Security Analyst at datadog
[2026-02-02T00:09:53.528Z] [BOT] 🚫 Skipping blacklisted job: Manager, Networking at datadog
🚫 Skipping blacklisted job: Manager, People Analytics Data Platform at datadog
🚫 Skipping blacklisted job: Partner Marketing Manager (Public Sector) at datadog
[2026-02-02T00:09:53.528Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner Manager - Cloud Alliances (AWS) at datadog
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-02T00:09:53.528Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-02T00:09:53.528Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
[2026-02-02T00:09:53.528Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
🚫 Skipping blacklisted job: Senior Product Manager - Notebooks at datadog
[2026-02-02T00:09:53.529Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Flex Logs at datadog
🚫 Skipping blacklisted job: Product Manager II - Incident Management at datadog
🚫 Skipping blacklisted job: Product Manager II - Software Delivery Suite at datadog
🚫 Skipping blacklisted job: Senior AI Engineer - APM Experiences at datadog
🚫 Skipping blacklisted job: Senior Associate, Sales Enablement Operations at datadog
[2026-02-02T00:09:53.595Z] [BOT] ✅ Loaded pending queue: 729 total (679 pending, 50 enriched, 0 posted)
[2026-02-02T00:09:53.669Z] [BOT] ✅ Saved pending queue: 681 total (679 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (48 blacklisted)
[2026-02-02T00:09:53.669Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-02T00:09:53.669Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-02T00:09:53.670Z] [BOT] ⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-02T00:09:53.670Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-02T00:09:53.672Z] [BOT] 📍 [ROUTING] "Research Engineer �� Cybersecurity RL" @ anthropic
[2026-02-02T00:09:53.672Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-02T00:09:53.689Z] [BOT ERROR] (node:2669) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T00:09:54.012Z] [BOT] ✅ Posted message: Research Engineer �� Cybersecurity RL @ anthropic in #🤖・ai-jobs
[2026-02-02T00:09:54.012Z] [BOT] ✅ Industry: Research Engineer �� Cybersecurity RL @ anthropic
[2026-02-02T00:09:54.013Z] [BOT] 💾 Added channel posting: Research Engineer �� Cybersecurity RL @ anthropic → category channel (1 total channels)
[2026-02-02T00:09:54.014Z] [BOT] 💾 BEFORE MERGE: 2213 jobs in memory (cached)
[2026-02-02T00:09:54.076Z] [BOT] ✅ Loaded V2 database: 2212 jobs
💾 DISK STATE: 2212 jobs on disk
[2026-02-02T00:09:54.076Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2213
[2026-02-02T00:09:54.081Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T00:09:54.081Z] [BOT] 💾 AFTER MERGE: 2213 jobs (merged disk + memory)
[2026-02-02T00:09:54.083Z] [BOT] ✅ No jobs to archive (all 2213 jobs within 7-day window)
[2026-02-02T00:09:54.230Z] [BOT] 💾 Saved posted_jobs.json: 2213 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T00:09:55.965Z] [BOT] ✅ Posted message: Research Engineer �� Cybersecurity RL @ anthropic in #🌉・JID_739bbc0b
[2026-02-02T00:09:55.965Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-02T00:09:55.965Z] [BOT] 💾 Added channel posting: Research Engineer �� Cybersecurity RL @ anthropic → location channel (2 total channels)
[2026-02-02T00:09:55.966Z] [BOT] 💾 BEFORE MERGE: 2213 jobs in memory (cached)
[2026-02-02T00:09:56.019Z] [BOT] ✅ Loaded V2 database: 2213 jobs
💾 DISK STATE: 2213 jobs on disk
[2026-02-02T00:09:56.020Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2213
[2026-02-02T00:09:56.025Z] [BOT] 🔀 Deep merged: Research Engineer �� Cybersecurity RL @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-02T00:09:56.025Z] [BOT] 💾 AFTER MERGE: 2213 jobs (merged disk + memory)
[2026-02-02T00:09:56.026Z] [BOT] ✅ No jobs to archive (all 2213 jobs within 7-day window)
[2026-02-02T00:09:56.148Z] [BOT] 💾 Saved posted_jobs.json: 2213 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T00:10:00.650Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-02T00:10:00.652Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "93ddb1caecf23e33"
[2026-02-02T00:10:00.652Z] [BOT] ⏭️  Skipping duplicate: JID_3008de4b (posted within 7 days)
[2026-02-02T00:10:00.706Z] [BOT] ✅ Loaded pending queue: 681 total (679 pending, 2 enriched, 0 posted)
[2026-02-02T00:10:00.775Z] [BOT] ✅ Saved pending queue: 681 total (679 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-02T00:10:00.898Z] [BOT] 📂 Loaded 12293 existing routing entries
[2026-02-02T00:10:01.017Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12294
[2026-02-02T00:10:01.017Z] [BOT] Timestamp: 2026-02-02T00:10:00.970Z
[2026-02-02T00:10:01.018Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
   Total attempts: 51
[2026-02-02T00:10:01.018Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-02T00:10:01.018Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2213 jobs in memory (cached)
[2026-02-02T00:10:01.074Z] [BOT] ✅ Loaded V2 database: 2213 jobs
💾 DISK STATE: 2213 jobs on disk
[2026-02-02T00:10:01.075Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2213
[2026-02-02T00:10:01.080Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T00:10:01.080Z] [BOT] 💾 AFTER MERGE: 2213 jobs (merged disk + memory)
[2026-02-02T00:10:01.081Z] [BOT] ✅ No jobs to archive (all 2213 jobs within 7-day window)
[2026-02-02T00:10:01.219Z] [BOT] 💾 Saved posted_jobs.json: 2213 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T00:10:01.220Z] [BOT] ✅ Database saved successfully
[2026-02-02T00:10:03.240Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2669) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*