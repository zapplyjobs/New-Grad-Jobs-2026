# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T22:15:26.717Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T22:15:07.433Z] ========================================
[2026-02-01T22:15:07.435Z] Discord Bot Execution Log
[2026-02-01T22:15:07.435Z] Environment: GitHub Actions
[2026-02-01T22:15:07.435Z] Node Version: v20.20.0
[2026-02-01T22:15:07.436Z] ========================================
[2026-02-01T22:15:07.436Z] Environment Variables Check:
[2026-02-01T22:15:07.436Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T22:15:07.436Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T22:15:07.436Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T22:15:07.436Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T22:15:07.436Z] 
Multi-Channel Configuration:
[2026-02-01T22:15:07.436Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T22:15:07.436Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:15:07.436Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:15:07.437Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T22:15:07.437Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:15:07.437Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:15:07.437Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:15:07.437Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:15:07.437Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:15:07.437Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T22:15:07.437Z] 
Data Files Check:
[2026-02-01T22:15:07.438Z] .github/data/new_jobs.json: ✅ Exists (10 items, 68061 bytes)
[2026-02-01T22:15:07.493Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11056439 bytes)
[2026-02-01T22:15:07.493Z] 
========================================
[2026-02-01T22:15:07.493Z] Starting Enhanced Discord Bot...
[2026-02-01T22:15:07.493Z] ========================================
[2026-02-01T22:15:08.069Z] [BOT] ✅ Loaded V2 database: 2204 jobs
[2026-02-01T22:15:08.643Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T22:15:08.643Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T22:15:08.643Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T22:15:08.693Z] [BOT] ✅ Loaded pending queue: 738 total (688 pending, 50 enriched, 0 posted)
[2026-02-01T22:15:08.693Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Upmarket Account Executive at brex
[2026-02-01T22:15:08.713Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T22:15:08.713Z] [BOT] 🚫 Skipping blacklisted job: Post-Doctoral Fellow at Worcester Polytechnic Institute
[2026-02-01T22:15:08.713Z] [BOT] 🚫 Skipping blacklisted job: Software Engineer/Principal Software Engineer - Aht at Northrop Grumman
🚫 Skipping blacklisted job: Postdoctoral Researcher at Louisiana State University (LSU)
[2026-02-01T22:15:08.713Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee: Physics-Informed AI for Microelectronics Materials at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Appointee - AI for Coherent X-ray Imaging at Argonne National Laboratory
[2026-02-01T22:15:08.713Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Associate at University of Maryland - College Park
🚫 Skipping blacklisted job: Senior Software Engineer at Onto Innovation
[2026-02-01T22:15:08.714Z] [BOT] 🚫 Skipping blacklisted job: Senior Salesforce Marketing Cloud Developer at Wounded Warrior Project
🚫 Skipping blacklisted job: Postdoctoral Fellow in Future Runoff and Reservoir Evaporation Projections for Texas River Basins at University of Texas - Austin
🚫 Skipping blacklisted job: Postdoctoral Scholar - Experimental Ultrahigh Energy Neutrino - PUEO Experiment at PennState University
🚫 Skipping blacklisted job: Senior Scientist - Autonomous Mobility & Delivery at Uber
[2026-02-01T22:15:08.714Z] [BOT] 🚫 Skipping blacklisted job: Senior Associate - Application Development - Greenville TX at L3Harris Technologies
🚫 Skipping blacklisted job: Postdoctoral Appointee at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Appointee - MSD Experimental Condensed Matter Physics at Argonne National Laboratory
[2026-02-01T22:15:08.714Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - Foundation Models with Federated Learning at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Appointee - Experimental AI at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Appointee - Energy Systems at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Appointee - Medium Energy Physics at Argonne National Laboratory
🚫 Skipping blacklisted job: Post-Doctoral Associate at University of Maryland - College Park
[2026-02-01T22:15:08.714Z] [BOT] 🚫 Skipping blacklisted job: Associate Data Science Product Manager at Red Ventures
🚫 Skipping blacklisted job: Postdoctoral Researcher - Survey Science/Time Domain Astronomy at PennState University
[2026-02-01T22:15:08.714Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist at Oracle
🚫 Skipping blacklisted job: Senior Software Engineer - Back End at Archer
🚫 Skipping blacklisted job: Events Partnerships Manager at gohighlevel
[2026-02-01T22:15:08.714Z] [BOT] 🚫 Skipping blacklisted job: Customer Solution Architect Team Lead (EMEA) at supabase
[2026-02-01T22:15:08.714Z] [BOT] 🚫 Skipping blacklisted job: Staff Research Engineer - Music at spotify
🚫 Skipping blacklisted job: Senior Research Engineer - Music at spotify
[2026-02-01T22:15:08.714Z] [BOT] 🚫 Skipping blacklisted job: Senior Content Accountant at spotify
🚫 Skipping blacklisted job: Finance Program Manager at spotify
🚫 Skipping blacklisted job: Senior Software Engineer, Growth at clerk
[2026-02-01T22:15:08.714Z] [BOT] 🚫 Skipping blacklisted job: Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation at Lawrence Berkeley National Laboratory
🚫 Skipping blacklisted job: Postdoc – Machine Learning at Brookhaven Lab
[2026-02-01T22:15:08.715Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher - Pier at Prairie View A&M University
🚫 Skipping blacklisted job: Postdoctoral Researcher at Prairie View A&M University
[2026-02-01T22:15:08.715Z] [BOT] 🚫 Skipping blacklisted job: Manager - BDR at gohighlevel
🚫 Skipping blacklisted job: Senior Research Specialist 1 at Princeton University
[2026-02-01T22:15:08.715Z] [BOT] 🚫 Skipping blacklisted job: Manager, Digital Marketing at gohighlevel
🚫 Skipping blacklisted job: Product Marketing Manager  at supabase
🚫 Skipping blacklisted job: Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering at University of Texas - Austin
🚫 Skipping blacklisted job: Postdoctoral Fellow - AI Driven Precision Oncology at University of Texas - Austin
🚫 Skipping blacklisted job: Postdoctoral Fellow - Agentic AI at University of Texas - Austin
[2026-02-01T22:15:08.715Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Fellow at University of Texas - Austin
🚫 Skipping blacklisted job: Postdoctoral Fellow - Department of Computer Science at University of Texas - Austin
🚫 Skipping blacklisted job: Postdoctoral Scholar at PennState University
🚫 Skipping blacklisted job: Seismology Postdoctoral Fellow at University of Texas - Austin
[2026-02-01T22:15:08.715Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Associate at University of Miami
🚫 Skipping blacklisted job: Postdoctoral Research Associate at Northeastern
[2026-02-01T22:15:08.715Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Scholar - Department of Physics - Wissel Research Group at PennState University
[2026-02-01T22:15:08.765Z] [BOT] ✅ Loaded pending queue: 738 total (688 pending, 50 enriched, 0 posted)
[2026-02-01T22:15:08.845Z] [BOT] ✅ Saved pending queue: 690 total (688 pending, 2 enriched, 0 posted)
[2026-02-01T22:15:08.845Z] [BOT] 🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (48 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-01T22:15:08.846Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-01T22:15:08.846Z] [BOT] ⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T22:15:08.848Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-01T22:15:08.850Z] [BOT] 📍 [ROUTING] "Upmarket Account Executive" @ brex
[2026-02-01T22:15:08.850Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T22:15:08.867Z] [BOT ERROR] (node:6296) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T22:15:09.232Z] [BOT] ✅ Posted message: Upmarket Account Executive @ brex in #💰・finance-jobs
[2026-02-01T22:15:09.232Z] [BOT] ✅ Industry: Upmarket Account Executive @ brex
[2026-02-01T22:15:09.234Z] [BOT] 💾 Added channel posting: Upmarket Account Executive @ brex → category channel (1 total channels)
[2026-02-01T22:15:09.234Z] [BOT] 💾 BEFORE MERGE: 2205 jobs in memory (cached)
[2026-02-01T22:15:09.279Z] [BOT] ✅ Loaded V2 database: 2204 jobs
💾 DISK STATE: 2204 jobs on disk
[2026-02-01T22:15:09.279Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2205
[2026-02-01T22:15:09.284Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:15:09.284Z] [BOT] 💾 AFTER MERGE: 2205 jobs (merged disk + memory)
[2026-02-01T22:15:09.286Z] [BOT] ✅ No jobs to archive (all 2205 jobs within 7-day window)
[2026-02-01T22:15:09.412Z] [BOT] 💾 Saved posted_jobs.json: 2205 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:15:11.184Z] [BOT] ✅ Posted message: Upmarket Account Executive @ brex in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T22:15:11.185Z] [BOT] 💾 Added channel posting: Upmarket Account Executive @ brex → location channel (2 total channels)
[2026-02-01T22:15:11.185Z] [BOT] 💾 BEFORE MERGE: 2205 jobs in memory (cached)
[2026-02-01T22:15:11.224Z] [BOT] ✅ Loaded V2 database: 2205 jobs
[2026-02-01T22:15:11.224Z] [BOT] 💾 DISK STATE: 2205 jobs on disk
[2026-02-01T22:15:11.224Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2205
[2026-02-01T22:15:11.229Z] [BOT] 🔀 Deep merged: Upmarket Account Executive @ brex (disk: 1 channels → merged: 2 channels)
[2026-02-01T22:15:11.229Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2205 jobs (merged disk + memory)
[2026-02-01T22:15:11.230Z] [BOT] ✅ No jobs to archive (all 2205 jobs within 7-day window)
[2026-02-01T22:15:11.339Z] [BOT] 💾 Saved posted_jobs.json: 2205 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:15:15.841Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T22:15:15.843Z] [BOT] 📍 [ROUTING] "IP Legal Specialist" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T22:15:16.059Z] [BOT] ✅ Posted message: IP Legal Specialist @ anthropic in #🤖・ai-jobs
  ✅ Industry: IP Legal Specialist @ anthropic
[2026-02-01T22:15:16.060Z] [BOT] 💾 Added channel posting: IP Legal Specialist @ anthropic → category channel (1 total channels)
[2026-02-01T22:15:16.061Z] [BOT] 💾 BEFORE MERGE: 2206 jobs in memory (cached)
[2026-02-01T22:15:16.100Z] [BOT] ✅ Loaded V2 database: 2205 jobs
💾 DISK STATE: 2205 jobs on disk
[2026-02-01T22:15:16.100Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2206
[2026-02-01T22:15:16.105Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:15:16.105Z] [BOT] 💾 AFTER MERGE: 2206 jobs (merged disk + memory)
[2026-02-01T22:15:16.106Z] [BOT] ✅ No jobs to archive (all 2206 jobs within 7-day window)
[2026-02-01T22:15:16.240Z] [BOT] 💾 Saved posted_jobs.json: 2206 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:15:17.917Z] [BOT] ✅ Posted message: IP Legal Specialist @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T22:15:17.918Z] [BOT] 💾 Added channel posting: IP Legal Specialist @ anthropic → location channel (2 total channels)
[2026-02-01T22:15:17.918Z] [BOT] 💾 BEFORE MERGE: 2206 jobs in memory (cached)
[2026-02-01T22:15:17.956Z] [BOT] ✅ Loaded V2 database: 2206 jobs
💾 DISK STATE: 2206 jobs on disk
[2026-02-01T22:15:17.957Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2206
[2026-02-01T22:15:17.961Z] [BOT] 🔀 Deep merged: IP Legal Specialist @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T22:15:17.961Z] [BOT] 💾 AFTER MERGE: 2206 jobs (merged disk + memory)
[2026-02-01T22:15:17.962Z] [BOT] ✅ No jobs to archive (all 2206 jobs within 7-day window)
[2026-02-01T22:15:18.077Z] [BOT] 💾 Saved posted_jobs.json: 2206 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:15:22.579Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-01T22:15:22.580Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ccb6c379..." not found, but found as SHA256 "160a2a0c0ab9992e"
[2026-02-01T22:15:22.580Z] [BOT] ⏭️  Skipping duplicate: JID_ccb6c379 (posted within 7 days)
[2026-02-01T22:15:22.581Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
[2026-02-01T22:15:22.619Z] [BOT] ✅ Loaded pending queue: 690 total (688 pending, 2 enriched, 0 posted)
[2026-02-01T22:15:22.698Z] [BOT] ✅ Saved pending queue: 690 total (688 pending, 0 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T22:15:22.806Z] [BOT] 📂 Loaded 12285 existing routing entries
[2026-02-01T22:15:22.927Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12287
   Timestamp: 2026-02-01T22:15:22.876Z
[2026-02-01T22:15:22.928Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 52
[2026-02-01T22:15:22.928Z] [BOT] Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-01T22:15:22.928Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2026-02-01T22:15:22.928Z] [BOT] 1. #🌉・JID_739bbc0b: 2 posts
     2. #💰・finance-jobs: 1 posts
     3. #🤖・ai-jobs: 1 posts
[2026-02-01T22:15:22.928Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T22:15:22.928Z] [BOT] 💾 BEFORE MERGE: 2206 jobs in memory (cached)
[2026-02-01T22:15:22.975Z] [BOT] ✅ Loaded V2 database: 2206 jobs
💾 DISK STATE: 2206 jobs on disk
[2026-02-01T22:15:22.977Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2206
[2026-02-01T22:15:22.989Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2206 jobs (merged disk + memory)
[2026-02-01T22:15:22.990Z] [BOT] ✅ No jobs to archive (all 2206 jobs within 7-day window)
[2026-02-01T22:15:23.107Z] [BOT] 💾 Saved posted_jobs.json: 2206 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:15:23.107Z] [BOT] ✅ Database saved successfully
[2026-02-01T22:15:25.135Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:6296) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*