# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T19:33:11.167Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T19:32:21.000Z] ========================================
[2026-02-01T19:32:21.002Z] Discord Bot Execution Log
[2026-02-01T19:32:21.002Z] Environment: GitHub Actions
[2026-02-01T19:32:21.002Z] Node Version: v20.20.0
[2026-02-01T19:32:21.002Z] ========================================
[2026-02-01T19:32:21.002Z] Environment Variables Check:
[2026-02-01T19:32:21.002Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T19:32:21.002Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T19:32:21.002Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T19:32:21.002Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T19:32:21.003Z] 
Multi-Channel Configuration:
[2026-02-01T19:32:21.003Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T19:32:21.003Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:32:21.003Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:32:21.003Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T19:32:21.003Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:32:21.003Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:32:21.003Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:32:21.003Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:32:21.003Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:32:21.003Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T19:32:21.003Z] 
Data Files Check:
[2026-02-01T19:32:21.004Z] .github/data/new_jobs.json: ✅ Exists (10 items, 48776 bytes)
[2026-02-01T19:32:21.055Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10724654 bytes)
[2026-02-01T19:32:21.055Z] 
========================================
[2026-02-01T19:32:21.055Z] Starting Enhanced Discord Bot...
[2026-02-01T19:32:21.055Z] ========================================
[2026-02-01T19:32:21.637Z] [BOT] ✅ Loaded V2 database: 2147 jobs
[2026-02-01T19:32:22.142Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T19:32:22.143Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T19:32:22.143Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T19:32:22.192Z] [BOT] ✅ Loaded pending queue: 797 total (747 pending, 50 enriched, 0 posted)
[2026-02-01T19:32:22.192Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer – New Grad at Palantir
[2026-02-01T19:32:22.211Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T19:32:22.211Z] [BOT] 🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
[2026-02-01T19:32:22.212Z] [BOT] 🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
[2026-02-01T19:32:22.212Z] [BOT] 🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
[2026-02-01T19:32:22.212Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
[2026-02-01T19:32:22.212Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Principal Threat Intelligence Lead at anthropic
🚫 Skipping blacklisted job: Product Manager, API  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
[2026-02-01T19:32:22.213Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
[2026-02-01T19:32:22.213Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
[2026-02-01T19:32:22.213Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
🚫 Skipping blacklisted job: Director - IT Compliance at gohighlevel
🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
[2026-02-01T19:32:22.213Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Continuous Integration  at anthropic
[2026-02-01T19:32:22.213Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Senior / Staff Software Engineer - Autonomous Agent Infrastructure at anthropic
[2026-02-01T19:32:22.272Z] [BOT] ✅ Loaded pending queue: 797 total (747 pending, 50 enriched, 0 posted)
[2026-02-01T19:32:22.355Z] [BOT] ✅ Saved pending queue: 763 total (747 pending, 16 enriched, 0 posted)
🗑️ Removed 34 blacklisted jobs from pending queue
[2026-02-01T19:32:22.355Z] [BOT] 📋 After blacklist filter: 16 jobs (34 blacklisted)
📋 After data quality filter: 16 jobs (0 invalid)
[2026-02-01T19:32:22.356Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-02-01T19:32:22.356Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T19:32:22.359Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-01T19:32:22.360Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_f56b7436
[2026-02-01T19:32:22.360Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:32:22.378Z] [BOT ERROR] (node:2597) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T19:32:22.636Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_f56b7436 in #💻・tech-jobs
[2026-02-01T19:32:22.636Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_f56b7436
[2026-02-01T19:32:22.637Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_f56b7436 → category channel (1 total channels)
[2026-02-01T19:32:22.637Z] [BOT] 💾 BEFORE MERGE: 2148 jobs in memory (cached)
[2026-02-01T19:32:22.697Z] [BOT] ✅ Loaded V2 database: 2147 jobs
💾 DISK STATE: 2147 jobs on disk
[2026-02-01T19:32:22.698Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2148
[2026-02-01T19:32:22.704Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:32:22.704Z] [BOT] 💾 AFTER MERGE: 2148 jobs (merged disk + memory)
[2026-02-01T19:32:22.706Z] [BOT] ✅ No jobs to archive (all 2148 jobs within 7-day window)
[2026-02-01T19:32:22.837Z] [BOT] 💾 Saved posted_jobs.json: 2148 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:24.811Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_f56b7436 in #📍・JID_6daed763
[2026-02-01T19:32:24.811Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T19:32:24.811Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_f56b7436 → location channel (2 total channels)
[2026-02-01T19:32:24.811Z] [BOT] 💾 BEFORE MERGE: 2148 jobs in memory (cached)
[2026-02-01T19:32:24.849Z] [BOT] ✅ Loaded V2 database: 2148 jobs
💾 DISK STATE: 2148 jobs on disk
[2026-02-01T19:32:24.849Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2148
[2026-02-01T19:32:24.854Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad @ ORG_f56b7436 (disk: 1 channels → merged: 2 channels)
[2026-02-01T19:32:24.854Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2148 jobs (merged disk + memory)
[2026-02-01T19:32:24.855Z] [BOT] ✅ No jobs to archive (all 2148 jobs within 7-day window)
[2026-02-01T19:32:24.957Z] [BOT] 💾 Saved posted_jobs.json: 2148 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:26.459Z] [BOT] 📍 [ROUTING] "System Software Engineer" @ ORG_9dbe1a97
[2026-02-01T19:32:26.459Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:32:26.655Z] [BOT] ✅ Posted message: System Software Engineer @ ORG_9dbe1a97 in #💻・tech-jobs
[2026-02-01T19:32:26.655Z] [BOT] ✅ Industry: System Software Engineer @ ORG_9dbe1a97
[2026-02-01T19:32:26.656Z] [BOT] 💾 Added channel posting: System Software Engineer @ ORG_9dbe1a97 → category channel (1 total channels)
[2026-02-01T19:32:26.656Z] [BOT] 💾 BEFORE MERGE: 2149 jobs in memory (cached)
[2026-02-01T19:32:26.694Z] [BOT] ✅ Loaded V2 database: 2148 jobs
[2026-02-01T19:32:26.695Z] [BOT] 💾 DISK STATE: 2148 jobs on disk
[2026-02-01T19:32:26.695Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2149
[2026-02-01T19:32:26.699Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:32:26.699Z] [BOT] 💾 AFTER MERGE: 2149 jobs (merged disk + memory)
[2026-02-01T19:32:26.701Z] [BOT] ✅ No jobs to archive (all 2149 jobs within 7-day window)
[2026-02-01T19:32:26.804Z] [BOT] 💾 Saved posted_jobs.json: 2149 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:28.472Z] [BOT] ✅ Posted message: System Software Engineer @ ORG_9dbe1a97 in #🌉・JID_739bbc0b
[2026-02-01T19:32:28.472Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T19:32:28.472Z] [BOT] 💾 Added channel posting: System Software Engineer @ ORG_9dbe1a97 → location channel (2 total channels)
[2026-02-01T19:32:28.472Z] [BOT] 💾 BEFORE MERGE: 2149 jobs in memory (cached)
[2026-02-01T19:32:28.510Z] [BOT] ✅ Loaded V2 database: 2149 jobs
💾 DISK STATE: 2149 jobs on disk
[2026-02-01T19:32:28.511Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2149
[2026-02-01T19:32:28.515Z] [BOT] 🔀 Deep merged: System Software Engineer @ ORG_9dbe1a97 (disk: 1 channels → merged: 2 channels)
[2026-02-01T19:32:28.515Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2149 jobs (merged disk + memory)
[2026-02-01T19:32:28.517Z] [BOT] ✅ No jobs to archive (all 2149 jobs within 7-day window)
[2026-02-01T19:32:28.627Z] [BOT] 💾 Saved posted_jobs.json: 2149 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:30.129Z] [BOT] 📍 [ROUTING] "Software Development Specialist 3" @ ORG_eb6c7f52 Young University - Provo
   Category: TECH (matched: "software")
[2026-02-01T19:32:30.129Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:32:30.526Z] [BOT] ✅ Posted message: Software Development Specialist 3 @ ORG_eb6c7f52 Young University - Provo in #💻・tech-jobs
  ✅ Industry: Software Development Specialist 3 @ ORG_eb6c7f52 Young University - Provo
[2026-02-01T19:32:30.528Z] [BOT] 💾 Added channel posting: Software Development Specialist 3 @ ORG_eb6c7f52 Young University - Provo → category channel (1 total channels)
💾 BEFORE MERGE: 2150 jobs in memory (cached)
[2026-02-01T19:32:30.589Z] [BOT] ✅ Loaded V2 database: 2149 jobs
💾 DISK STATE: 2149 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2150
[2026-02-01T19:32:30.593Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:32:30.593Z] [BOT] 💾 AFTER MERGE: 2150 jobs (merged disk + memory)
[2026-02-01T19:32:30.595Z] [BOT] ✅ No jobs to archive (all 2150 jobs within 7-day window)
[2026-02-01T19:32:30.699Z] [BOT] 💾 Saved posted_jobs.json: 2150 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:32.519Z] [BOT] ✅ Posted message: Software Development Specialist 3 @ ORG_eb6c7f52 Young University - Provo in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T19:32:32.520Z] [BOT] 💾 Added channel posting: Software Development Specialist 3 @ ORG_eb6c7f52 Young University - Provo → location channel (2 total channels)
[2026-02-01T19:32:32.520Z] [BOT] 💾 BEFORE MERGE: 2150 jobs in memory (cached)
[2026-02-01T19:32:32.558Z] [BOT] ✅ Loaded V2 database: 2150 jobs
💾 DISK STATE: 2150 jobs on disk
[2026-02-01T19:32:32.558Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2150
[2026-02-01T19:32:32.562Z] [BOT] 🔀 Deep merged: Software Development Specialist 3 @ ORG_eb6c7f52 Young University - Provo (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:32:32.562Z] [BOT] 💾 AFTER MERGE: 2150 jobs (merged disk + memory)
[2026-02-01T19:32:32.563Z] [BOT] ✅ No jobs to archive (all 2150 jobs within 7-day window)
[2026-02-01T19:32:32.667Z] [BOT] 💾 Saved posted_jobs.json: 2150 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:34.169Z] [BOT] 📍 [ROUTING] "Interface Support Specialist" @ ORG_d0121094
[2026-02-01T19:32:34.170Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:32:34.487Z] [BOT] ✅ Posted message: Interface Support Specialist @ ORG_d0121094 in #💻・tech-jobs
[2026-02-01T19:32:34.487Z] [BOT] ✅ Industry: Interface Support Specialist @ ORG_d0121094
[2026-02-01T19:32:34.488Z] [BOT] 💾 Added channel posting: Interface Support Specialist @ ORG_d0121094 → category channel (1 total channels)
[2026-02-01T19:32:34.488Z] [BOT] 💾 BEFORE MERGE: 2151 jobs in memory (cached)
[2026-02-01T19:32:34.525Z] [BOT] ✅ Loaded V2 database: 2150 jobs
💾 DISK STATE: 2150 jobs on disk
[2026-02-01T19:32:34.526Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2151
[2026-02-01T19:32:34.530Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:32:34.530Z] [BOT] 💾 AFTER MERGE: 2151 jobs (merged disk + memory)
[2026-02-01T19:32:34.531Z] [BOT] ✅ No jobs to archive (all 2151 jobs within 7-day window)
[2026-02-01T19:32:34.635Z] [BOT] 💾 Saved posted_jobs.json: 2151 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:36.354Z] [BOT] ✅ Posted message: Interface Support Specialist @ ORG_d0121094 in #🏠・JID_ead674af
[2026-02-01T19:32:36.354Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T19:32:36.354Z] [BOT] 💾 Added channel posting: Interface Support Specialist @ ORG_d0121094 → location channel (2 total channels)
[2026-02-01T19:32:36.354Z] [BOT] 💾 BEFORE MERGE: 2151 jobs in memory (cached)
[2026-02-01T19:32:36.393Z] [BOT] ✅ Loaded V2 database: 2151 jobs
💾 DISK STATE: 2151 jobs on disk
[2026-02-01T19:32:36.393Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2151
[2026-02-01T19:32:36.397Z] [BOT] 🔀 Deep merged: Interface Support Specialist @ ORG_d0121094 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:32:36.397Z] [BOT] 💾 AFTER MERGE: 2151 jobs (merged disk + memory)
[2026-02-01T19:32:36.398Z] [BOT] ✅ No jobs to archive (all 2151 jobs within 7-day window)
[2026-02-01T19:32:36.503Z] [BOT] 💾 Saved posted_jobs.json: 2151 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:38.003Z] [BOT] 📍 [ROUTING] "Associate Programmer Analyst" @ ORG_b344d80e Boeing Company
[2026-02-01T19:32:38.003Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:32:38.183Z] [BOT] ✅ Posted message: Associate Programmer Analyst @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Associate Programmer Analyst @ ORG_b344d80e Boeing Company
[2026-02-01T19:32:38.184Z] [BOT] 💾 Added channel posting: Associate Programmer Analyst @ ORG_b344d80e Boeing Company → category channel (1 total channels)
[2026-02-01T19:32:38.184Z] [BOT] 💾 BEFORE MERGE: 2152 jobs in memory (cached)
[2026-02-01T19:32:38.222Z] [BOT] ✅ Loaded V2 database: 2151 jobs
💾 DISK STATE: 2151 jobs on disk
[2026-02-01T19:32:38.222Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2152
[2026-02-01T19:32:38.226Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:32:38.226Z] [BOT] 💾 AFTER MERGE: 2152 jobs (merged disk + memory)
[2026-02-01T19:32:38.228Z] [BOT] ✅ No jobs to archive (all 2152 jobs within 7-day window)
[2026-02-01T19:32:38.341Z] [BOT] 💾 Saved posted_jobs.json: 2152 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:40.033Z] [BOT] ✅ Posted message: Associate Programmer Analyst @ ORG_b344d80e Boeing Company in #🌲・JID_efdf5921
[2026-02-01T19:32:40.033Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T19:32:40.033Z] [BOT] 💾 Added channel posting: Associate Programmer Analyst @ ORG_b344d80e Boeing Company → location channel (2 total channels)
💾 BEFORE MERGE: 2152 jobs in memory (cached)
[2026-02-01T19:32:40.069Z] [BOT] ✅ Loaded V2 database: 2152 jobs
💾 DISK STATE: 2152 jobs on disk
[2026-02-01T19:32:40.070Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2152
[2026-02-01T19:32:40.073Z] [BOT] 🔀 Deep merged: Associate Programmer Analyst @ ORG_b344d80e Boeing Company (disk: 1 channels → merged: 2 channels)
[2026-02-01T19:32:40.074Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2152 jobs (merged disk + memory)
[2026-02-01T19:32:40.075Z] [BOT] ✅ No jobs to archive (all 2152 jobs within 7-day window)
[2026-02-01T19:32:40.172Z] [BOT] 💾 Saved posted_jobs.json: 2152 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:41.674Z] [BOT] 📍 [ROUTING] "Software Engineer New Grad" @ 8VC
[2026-02-01T19:32:41.674Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:32:41.919Z] [BOT] ✅ Posted message: Software Engineer New Grad @ 8VC in #💻・tech-jobs
[2026-02-01T19:32:41.919Z] [BOT] ✅ Industry: Software Engineer New Grad @ 8VC
[2026-02-01T19:32:41.919Z] [BOT] 💾 Added channel posting: Software Engineer New Grad @ 8VC → category channel (1 total channels)
[2026-02-01T19:32:41.920Z] [BOT] 💾 BEFORE MERGE: 2153 jobs in memory (cached)
[2026-02-01T19:32:41.955Z] [BOT] ✅ Loaded V2 database: 2152 jobs
💾 DISK STATE: 2152 jobs on disk
[2026-02-01T19:32:41.955Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2153
[2026-02-01T19:32:41.959Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:32:41.959Z] [BOT] 💾 AFTER MERGE: 2153 jobs (merged disk + memory)
[2026-02-01T19:32:41.960Z] [BOT] ✅ No jobs to archive (all 2153 jobs within 7-day window)
[2026-02-01T19:32:42.063Z] [BOT] 💾 Saved posted_jobs.json: 2153 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:44.006Z] [BOT] ✅ Posted message: Software Engineer New Grad @ 8VC in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T19:32:44.006Z] [BOT] 💾 Added channel posting: Software Engineer New Grad @ 8VC → location channel (2 total channels)
[2026-02-01T19:32:44.007Z] [BOT] 💾 BEFORE MERGE: 2153 jobs in memory (cached)
[2026-02-01T19:32:44.045Z] [BOT] ✅ Loaded V2 database: 2153 jobs
💾 DISK STATE: 2153 jobs on disk
[2026-02-01T19:32:44.045Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2153
[2026-02-01T19:32:44.049Z] [BOT] 🔀 Deep merged: Software Engineer New Grad @ 8VC (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:32:44.049Z] [BOT] 💾 AFTER MERGE: 2153 jobs (merged disk + memory)
[2026-02-01T19:32:44.050Z] [BOT] ✅ No jobs to archive (all 2153 jobs within 7-day window)
[2026-02-01T19:32:44.156Z] [BOT] 💾 Saved posted_jobs.json: 2153 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:48.657Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T19:32:48.658Z] [BOT] 📍 [ROUTING] "Systems Software Engineer - GPU" @ ORG_0890f456
[2026-02-01T19:32:48.658Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T19:32:48.810Z] [BOT] ✅ Posted message: Systems Software Engineer - GPU @ ORG_0890f456 in #🤖・ai-jobs
[2026-02-01T19:32:48.810Z] [BOT] ✅ Industry: Systems Software Engineer - GPU @ ORG_0890f456
[2026-02-01T19:32:48.811Z] [BOT] 💾 Added channel posting: Systems Software Engineer - GPU @ ORG_0890f456 → category channel (1 total channels)
[2026-02-01T19:32:48.811Z] [BOT] 💾 BEFORE MERGE: 2154 jobs in memory (cached)
[2026-02-01T19:32:48.850Z] [BOT] ✅ Loaded V2 database: 2153 jobs
💾 DISK STATE: 2153 jobs on disk
[2026-02-01T19:32:48.850Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2154
[2026-02-01T19:32:48.854Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:32:48.854Z] [BOT] 💾 AFTER MERGE: 2154 jobs (merged disk + memory)
[2026-02-01T19:32:48.855Z] [BOT] ✅ No jobs to archive (all 2154 jobs within 7-day window)
[2026-02-01T19:32:48.973Z] [BOT] 💾 Saved posted_jobs.json: 2154 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:50.761Z] [BOT] ✅ Posted message: Systems Software Engineer - GPU @ ORG_0890f456 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T19:32:50.761Z] [BOT] 💾 Added channel posting: Systems Software Engineer - GPU @ ORG_0890f456 → location channel (2 total channels)
[2026-02-01T19:32:50.761Z] [BOT] 💾 BEFORE MERGE: 2154 jobs in memory (cached)
[2026-02-01T19:32:50.797Z] [BOT] ✅ Loaded V2 database: 2154 jobs
💾 DISK STATE: 2154 jobs on disk
[2026-02-01T19:32:50.797Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2154
[2026-02-01T19:32:50.801Z] [BOT] 🔀 Deep merged: Systems Software Engineer - GPU @ ORG_0890f456 (disk: 1 channels → merged: 2 channels)
[2026-02-01T19:32:50.801Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2154 jobs (merged disk + memory)
[2026-02-01T19:32:50.803Z] [BOT] ✅ No jobs to archive (all 2154 jobs within 7-day window)
[2026-02-01T19:32:50.901Z] [BOT] 💾 Saved posted_jobs.json: 2154 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:52.402Z] [BOT] 📍 [ROUTING] "Associate Machine Learning Engineer" @ ORG_7b1987fb
   Category: AI (matched: "machine learning")
[2026-02-01T19:32:52.402Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T19:32:52.541Z] [BOT] ✅ Posted message: Associate Machine Learning Engineer @ ORG_7b1987fb in #🤖・ai-jobs
  ✅ Industry: Associate Machine Learning Engineer @ ORG_7b1987fb
[2026-02-01T19:32:52.542Z] [BOT] 💾 Added channel posting: Associate Machine Learning Engineer @ ORG_7b1987fb → category channel (1 total channels)
[2026-02-01T19:32:52.542Z] [BOT] 💾 BEFORE MERGE: 2155 jobs in memory (cached)
[2026-02-01T19:32:52.595Z] [BOT] ✅ Loaded V2 database: 2154 jobs
💾 DISK STATE: 2154 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2155
[2026-02-01T19:32:52.599Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:32:52.599Z] [BOT] 💾 AFTER MERGE: 2155 jobs (merged disk + memory)
[2026-02-01T19:32:52.601Z] [BOT] ✅ No jobs to archive (all 2155 jobs within 7-day window)
[2026-02-01T19:32:52.702Z] [BOT] 💾 Saved posted_jobs.json: 2155 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:54.370Z] [BOT] ✅ Posted message: Associate Machine Learning Engineer @ ORG_7b1987fb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T19:32:54.370Z] [BOT] 💾 Added channel posting: Associate Machine Learning Engineer @ ORG_7b1987fb → location channel (2 total channels)
[2026-02-01T19:32:54.370Z] [BOT] 💾 BEFORE MERGE: 2155 jobs in memory (cached)
[2026-02-01T19:32:54.409Z] [BOT] ✅ Loaded V2 database: 2155 jobs
💾 DISK STATE: 2155 jobs on disk
[2026-02-01T19:32:54.409Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2155
[2026-02-01T19:32:54.413Z] [BOT] 🔀 Deep merged: Associate Machine Learning Engineer @ ORG_7b1987fb (disk: 1 channels → merged: 2 channels)
[2026-02-01T19:32:54.413Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2155 jobs (merged disk + memory)
[2026-02-01T19:32:54.414Z] [BOT] ✅ No jobs to archive (all 2155 jobs within 7-day window)
[2026-02-01T19:32:54.520Z] [BOT] 💾 Saved posted_jobs.json: 2155 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:32:59.022Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-02-01T19:32:59.023Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_ae835968 media
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T19:32:59.023Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T19:32:59.023Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T19:32:59.283Z] [BOT] ✅ Posted message: Data Analyst @ ORG_ae835968 media in #📊・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_ae835968 media
[2026-02-01T19:32:59.284Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_ae835968 media → category channel (1 total channels)
💾 BEFORE MERGE: 2156 jobs in memory (cached)
[2026-02-01T19:32:59.323Z] [BOT] ✅ Loaded V2 database: 2155 jobs
💾 DISK STATE: 2155 jobs on disk
[2026-02-01T19:32:59.323Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2156
[2026-02-01T19:32:59.327Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:32:59.327Z] [BOT] 💾 AFTER MERGE: 2156 jobs (merged disk + memory)
[2026-02-01T19:32:59.328Z] [BOT] ✅ No jobs to archive (all 2156 jobs within 7-day window)
[2026-02-01T19:32:59.434Z] [BOT] 💾 Saved posted_jobs.json: 2156 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:33:00.937Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_3013b18f & Johnson
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T19:33:00.937Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T19:33:01.156Z] [BOT] ✅ Posted message: Data Analyst @ ORG_3013b18f & Johnson in #📊・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_3013b18f & Johnson
[2026-02-01T19:33:01.157Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_3013b18f & Johnson → category channel (1 total channels)
💾 BEFORE MERGE: 2157 jobs in memory (cached)
[2026-02-01T19:33:01.195Z] [BOT] ✅ Loaded V2 database: 2156 jobs
💾 DISK STATE: 2156 jobs on disk
[2026-02-01T19:33:01.195Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2157
[2026-02-01T19:33:01.199Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:33:01.199Z] [BOT] 💾 AFTER MERGE: 2157 jobs (merged disk + memory)
[2026-02-01T19:33:01.200Z] [BOT] ✅ No jobs to archive (all 2157 jobs within 7-day window)
[2026-02-01T19:33:01.306Z] [BOT] 💾 Saved posted_jobs.json: 2157 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:33:02.961Z] [BOT] ✅ Posted message: Data Analyst @ ORG_3013b18f & Johnson in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T19:33:02.961Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_3013b18f & Johnson → location channel (2 total channels)
[2026-02-01T19:33:02.962Z] [BOT] 💾 BEFORE MERGE: 2157 jobs in memory (cached)
[2026-02-01T19:33:03.013Z] [BOT] ✅ Loaded V2 database: 2157 jobs
💾 DISK STATE: 2157 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2157
[2026-02-01T19:33:03.018Z] [BOT] 🔀 Deep merged: Data Analyst @ ORG_3013b18f & Johnson (disk: 1 channels → merged: 2 channels)
[2026-02-01T19:33:03.018Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2157 jobs (merged disk + memory)
[2026-02-01T19:33:03.019Z] [BOT] ✅ No jobs to archive (all 2157 jobs within 7-day window)
[2026-02-01T19:33:03.121Z] [BOT] 💾 Saved posted_jobs.json: 2157 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:33:07.623Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T19:33:07.624Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_093a9340..." not found, but found as SHA256 "32e214656199cb08"
[2026-02-01T19:33:07.625Z] [BOT] ⏭️  Skipping duplicate: JID_f378d599 (posted within 7 days)
[2026-02-01T19:33:07.625Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c871a8e3..." not found, but found as SHA256 "6c082057487ece5f"
[2026-02-01T19:33:07.625Z] [BOT] ⏭️  Skipping duplicate: JID_427e0bfb-engineer_jr0280320 (posted within 7 days)
[2026-02-01T19:33:07.626Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5035b4e3..." not found, but found as SHA256 "3a6fe6eaab884073"
⏭️  Skipping duplicate: JID_a45ba734-iii_jr-7889 (posted within 7 days)
[2026-02-01T19:33:07.626Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "29668ec70becc8d7"
⏭️  Skipping duplicate: JID_af194023-gpu_jr2012376 (posted within 7 days)
[2026-02-01T19:33:07.626Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bca2a390..." not found, but found as SHA256 "6540ebf6e41aadda"
[2026-02-01T19:33:07.626Z] [BOT] ⏭️  Skipping duplicate: JID_c3140b64-analyst_r0016505 (posted within 7 days)
[2026-02-01T19:33:07.626Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_12cce3ff..." not found, but found as SHA256 "9a2aa83d21bd3c15"
⏭️  Skipping duplicate: JID_f3e27889-support_jr102119 (posted within 7 days)
[2026-02-01T19:33:07.627Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a573c606-external_ca..." not found, but found as SHA256 "40f38d2bb8285022"
[2026-02-01T19:33:07.627Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_a2cbd389-analyst_jr2026492587-1 (posted within 7 days)
[2026-02-01T19:33:07.627Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c448d11..." not found, but found as SHA256 "bdb9febc418ba6fa"
[2026-02-01T19:33:07.627Z] [BOT] ⏭️  Skipping duplicate: JID_d3f700c8-ops_r-054422-1 (posted within 7 days)
[2026-02-01T19:33:07.627Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_225187ad-..." not found, but found as SHA256 "f56333a67044a87e"
[2026-02-01T19:33:07.627Z] [BOT] ⏭️  Skipping duplicate: JID_c5cbc762 (posted within 7 days)
[2026-02-01T19:33:07.628Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_39193cb1..." not found, but found as SHA256 "6a9671410f9fc68c"
[2026-02-01T19:33:07.628Z] [BOT] ⏭️  Skipping duplicate: JID_8984adc1 (posted within 7 days)
[2026-02-01T19:33:07.666Z] [BOT] ✅ Loaded pending queue: 763 total (747 pending, 16 enriched, 0 posted)
[2026-02-01T19:33:07.737Z] [BOT] ✅ Saved pending queue: 763 total (747 pending, 6 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T19:33:07.828Z] [BOT] 📂 Loaded 12228 existing routing entries
[2026-02-01T19:33:07.966Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12238
   Timestamp: 2026-02-01T19:33:07.915Z
[2026-02-01T19:33:07.967Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 53
   Successful: 19
   Failed: 0
   Skipped: 34
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #📍・JID_6daed763: 3 posts
     3. #🌉・JID_739bbc0b: 3 posts
     4. #🌲・JID_efdf5921: 2 posts
     5. #🤖・ai-jobs: 2 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T19:33:07.967Z] [BOT] 💾 BEFORE MERGE: 2157 jobs in memory (cached)
[2026-02-01T19:33:08.009Z] [BOT] ✅ Loaded V2 database: 2157 jobs
💾 DISK STATE: 2157 jobs on disk
[2026-02-01T19:33:08.009Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2157
[2026-02-01T19:33:08.013Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:33:08.013Z] [BOT] 💾 AFTER MERGE: 2157 jobs (merged disk + memory)
[2026-02-01T19:33:08.014Z] [BOT] ✅ No jobs to archive (all 2157 jobs within 7-day window)
[2026-02-01T19:33:08.136Z] [BOT] 💾 Saved posted_jobs.json: 2157 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T19:33:10.165Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2597) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*