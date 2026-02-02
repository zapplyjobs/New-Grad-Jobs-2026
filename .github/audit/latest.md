# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T02:48:38.080Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T02:48:33.459Z] ========================================
[2026-02-02T02:48:33.461Z] Discord Bot Execution Log
[2026-02-02T02:48:33.461Z] Environment: GitHub Actions
[2026-02-02T02:48:33.462Z] Node Version: v20.20.0
[2026-02-02T02:48:33.462Z] ========================================
[2026-02-02T02:48:33.462Z] Environment Variables Check:
[2026-02-02T02:48:33.462Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T02:48:33.462Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T02:48:33.462Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T02:48:33.462Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T02:48:33.462Z] 
Multi-Channel Configuration:
[2026-02-02T02:48:33.462Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T02:48:33.462Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:48:33.462Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:48:33.462Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T02:48:33.463Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:48:33.463Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:48:33.463Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:48:33.463Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:48:33.463Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T02:48:33.463Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T02:48:33.463Z] 
Data Files Check:
[2026-02-02T02:48:33.464Z] .github/data/new_jobs.json: ✅ Exists (10 items, 74266 bytes)
[2026-02-02T02:48:33.519Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11148180 bytes)
[2026-02-02T02:48:33.519Z] 
========================================
[2026-02-02T02:48:33.519Z] Starting Enhanced Discord Bot...
[2026-02-02T02:48:33.519Z] ========================================
[2026-02-02T02:48:34.097Z] [BOT] ✅ Loaded V2 database: 2215 jobs
[2026-02-02T02:48:34.724Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T02:48:34.724Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T02:48:34.724Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T02:48:34.768Z] [BOT] ✅ Loaded pending queue: 633 total (583 pending, 50 enriched, 0 posted)
[2026-02-02T02:48:34.769Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T02:48:34.770Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T02:48:34.770Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T02:48:34.770Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T02:48:34.788Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T02:48:34.789Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee at Argonne National Laboratory
[2026-02-02T02:48:34.789Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - MSD Experimental Condensed Matter Physics at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Researcher - Pier at Prairie View A&M University
[2026-02-02T02:48:34.789Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - Foundation Models with Federated Learning at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Appointee - Experimental AI at Argonne National Laboratory
[2026-02-02T02:48:34.789Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Fellow - AI Driven Precision Oncology at University of Texas - Austin
[2026-02-02T02:48:34.789Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - Energy Systems at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Fellow - Agentic AI at University of Texas - Austin
[2026-02-02T02:48:34.790Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Fellow at University of Texas - Austin
[2026-02-02T02:48:34.790Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher at Louisiana State University (LSU)
[2026-02-02T02:48:34.790Z] [BOT] 🚫 Skipping blacklisted job: Post-Doctoral Fellow at Worcester Polytechnic Institute
🚫 Skipping blacklisted job: Software Engineer/Principal Software Engineer - Aht at Northrop Grumman
[2026-02-02T02:48:34.790Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - Medium Energy Physics at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Appointee: Physics-Informed AI for Microelectronics Materials at Argonne National Laboratory
[2026-02-02T02:48:34.790Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - AI for Coherent X-ray Imaging at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Associate at University of Maryland - College Park
🚫 Skipping blacklisted job: Senior Software Engineer at Onto Innovation
[2026-02-02T02:48:34.790Z] [BOT] 🚫 Skipping blacklisted job: Senior Salesforce Marketing Cloud Developer at Wounded Warrior Project
🚫 Skipping blacklisted job: Postdoctoral Fellow in Future Runoff and Reservoir Evaporation Projections for Texas River Basins at University of Texas - Austin
[2026-02-02T02:48:34.790Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Scholar - Experimental Ultrahigh Energy Neutrino - PUEO Experiment at PennState University
[2026-02-02T02:48:34.790Z] [BOT] 🚫 Skipping blacklisted job: Senior Scientist - Autonomous Mobility & Delivery at Uber
🚫 Skipping blacklisted job: Senior Associate - Application Development - Greenville TX at L3Harris Technologies
🚫 Skipping blacklisted job: Post-Doctoral Associate at University of Maryland - College Park
🚫 Skipping blacklisted job: Associate Data Science Product Manager at Red Ventures
[2026-02-02T02:48:34.790Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher - Survey Science/Time Domain Astronomy at PennState University
[2026-02-02T02:48:34.791Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist at Oracle
🚫 Skipping blacklisted job: Senior Software Engineer - Back End at Archer
[2026-02-02T02:48:34.791Z] [BOT] 🚫 Skipping blacklisted job: Events Partnerships Manager at gohighlevel
🚫 Skipping blacklisted job: Customer Solution Architect Team Lead (EMEA) at supabase
[2026-02-02T02:48:34.791Z] [BOT] 🚫 Skipping blacklisted job: Staff Research Engineer - Music at spotify
🚫 Skipping blacklisted job: Senior Research Engineer - Music at spotify
🚫 Skipping blacklisted job: Senior Content Accountant at spotify
🚫 Skipping blacklisted job: Finance Program Manager at spotify
[2026-02-02T02:48:34.791Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Growth at clerk
🚫 Skipping blacklisted job: Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation at Lawrence Berkeley National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Fellow - Department of Computer Science at University of Texas - Austin
[2026-02-02T02:48:34.791Z] [BOT] 🚫 Skipping blacklisted job: Postdoc – Machine Learning at Brookhaven Lab
🚫 Skipping blacklisted job: Postdoctoral Scholar at PennState University
[2026-02-02T02:48:34.791Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher at Prairie View A&M University
🚫 Skipping blacklisted job: Manager - BDR at gohighlevel
[2026-02-02T02:48:34.791Z] [BOT] 🚫 Skipping blacklisted job: Senior Research Specialist 1 at Princeton University
🚫 Skipping blacklisted job: Manager, Digital Marketing at gohighlevel
[2026-02-02T02:48:34.791Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager  at supabase
🚫 Skipping blacklisted job: Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering at University of Texas - Austin
[2026-02-02T02:48:34.791Z] [BOT] 🚫 Skipping blacklisted job: Seismology Postdoctoral Fellow at University of Texas - Austin
🚫 Skipping blacklisted job: Postdoctoral Associate at University of Miami
[2026-02-02T02:48:34.791Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Research Associate at Northeastern
🚫 Skipping blacklisted job: Postdoctoral Scholar - Department of Physics - Wissel Research Group at PennState University
[2026-02-02T02:48:34.791Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-02T02:48:34.830Z] [BOT] ✅ Loaded pending queue: 633 total (583 pending, 50 enriched, 0 posted)
[2026-02-02T02:48:34.901Z] [BOT] ✅ Saved pending queue: 584 total (583 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-02T02:48:34.901Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T02:48:34.901Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T02:48:34.902Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T02:48:34.902Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T02:48:34.902Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T02:48:34.902Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-02T02:48:34.903Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-02T02:48:34.903Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T02:48:34.903Z] [BOT] 💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T02:48:34.944Z] [BOT] ✅ Loaded V2 database: 2215 jobs
💾 DISK STATE: 2215 jobs on disk
[2026-02-02T02:48:34.944Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T02:48:34.949Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T02:48:34.949Z] [BOT] 💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T02:48:34.951Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T02:48:35.083Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
[2026-02-02T02:48:35.086Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T02:48:35.086Z] [BOT ERROR] (node:6288) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T02:48:37.111Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:6288) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*