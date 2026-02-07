# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T00:28:39.867Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T00:28:12.984Z] ========================================
[2026-02-07T00:28:12.986Z] Discord Bot Execution Log
[2026-02-07T00:28:12.986Z] Environment: GitHub Actions
[2026-02-07T00:28:12.986Z] Node Version: v20.20.0
[2026-02-07T00:28:12.986Z] ========================================
[2026-02-07T00:28:12.986Z] Environment Variables Check:
[2026-02-07T00:28:12.986Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T00:28:12.987Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T00:28:12.987Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T00:28:12.987Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T00:28:12.987Z] 
Multi-Channel Configuration:
[2026-02-07T00:28:12.987Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T00:28:12.987Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T00:28:12.987Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T00:28:12.987Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T00:28:12.987Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T00:28:12.987Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T00:28:12.987Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T00:28:12.987Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T00:28:12.988Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T00:28:12.988Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T00:28:12.988Z] 
Data Files Check:
[2026-02-07T00:28:12.989Z] .github/data/new_jobs.json: ✅ Exists (10 items, 101592 bytes)
[2026-02-07T00:28:13.027Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8032704 bytes)
[2026-02-07T00:28:13.028Z] 
========================================
[2026-02-07T00:28:13.028Z] Starting Enhanced Discord Bot...
[2026-02-07T00:28:13.028Z] ========================================
[2026-02-07T00:28:13.602Z] [BOT] ✅ Loaded V2 database: 1753 jobs
[2026-02-07T00:28:14.138Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-07T00:28:14.139Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T00:28:14.139Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T00:28:14.159Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T00:28:14.159Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T00:28:14.160Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T00:28:14.160Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T00:28:14.161Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T00:28:14.161Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T00:28:14.174Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T00:28:14.174Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
[2026-02-07T00:28:14.174Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-07T00:28:14.174Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
[2026-02-07T00:28:14.174Z] [BOT] 🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
[2026-02-07T00:28:14.175Z] [BOT] 🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-07T00:28:14.175Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
[2026-02-07T00:28:14.175Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
[2026-02-07T00:28:14.175Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager, Enterprise  at anthropic
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-07T00:28:14.175Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
[2026-02-07T00:28:14.175Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
[2026-02-07T00:28:14.175Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
[2026-02-07T00:28:14.175Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
[2026-02-07T00:28:14.175Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-07T00:28:14.175Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
[2026-02-07T00:28:14.189Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T00:28:14.213Z] [BOT] ✅ Saved pending queue: 174 total (168 pending, 6 enriched, 0 posted)
🗑️ Removed 44 blacklisted jobs from pending queue
📋 After blacklist filter: 4 jobs (44 blacklisted)
[2026-02-07T00:28:14.213Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2026-02-07T00:28:14.214Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-02-07T00:28:14.214Z] [BOT] ⏸️ Limiting to 10 jobs this run, 44 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-07T00:28:14.216Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-02-07T00:28:14.218Z] [BOT] 📍 [ROUTING] "Business Systems Analyst " @ anthropic
[2026-02-07T00:28:14.218Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-07T00:28:14.238Z] [BOT ERROR] (node:2498) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T00:28:14.478Z] [BOT] ✅ Posted message: Business Systems Analyst  @ anthropic in #📊・JID_fb739488
[2026-02-07T00:28:14.479Z] [BOT] ✅ Industry: Business Systems Analyst  @ anthropic
[2026-02-07T00:28:14.480Z] [BOT] 💾 Added channel posting: Business Systems Analyst  @ anthropic → category channel (1 total channels)
[2026-02-07T00:28:14.480Z] [BOT] 💾 BEFORE MERGE: 1754 jobs in memory (cached)
[2026-02-07T00:28:14.506Z] [BOT] ✅ Loaded V2 database: 1753 jobs
💾 DISK STATE: 1753 jobs on disk
[2026-02-07T00:28:14.507Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1754
[2026-02-07T00:28:14.511Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T00:28:14.511Z] [BOT] 💾 AFTER MERGE: 1754 jobs (merged disk + memory)
[2026-02-07T00:28:14.513Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T00:28:14.516Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T00:28:14.516Z] [BOT] ✅ Archiving complete: 10 archived, 1744 active
[2026-02-07T00:28:14.595Z] [BOT] 💾 Saved posted_jobs.json: 1744 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T00:28:16.408Z] [BOT] ✅ Posted message: Business Systems Analyst  @ anthropic in #🌉・JID_739bbc0b
[2026-02-07T00:28:16.408Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-07T00:28:16.409Z] [BOT] 💾 Added channel posting: Business Systems Analyst  @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 1744 jobs in memory (cached)
[2026-02-07T00:28:16.433Z] [BOT] ✅ Loaded V2 database: 1744 jobs
💾 DISK STATE: 1744 jobs on disk
[2026-02-07T00:28:16.434Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1744
[2026-02-07T00:28:16.437Z] [BOT] 🔀 Deep merged: Business Systems Analyst  @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T00:28:16.438Z] [BOT] 💾 AFTER MERGE: 1744 jobs (merged disk + memory)
[2026-02-07T00:28:16.439Z] [BOT] ✅ No jobs to archive (all 1744 jobs within 7-day window)
[2026-02-07T00:28:16.517Z] [BOT] 💾 Saved posted_jobs.json: 1744 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T00:28:18.019Z] [BOT] 📍 [ROUTING] "Software Engineer III" @ Sam's Club
[2026-02-07T00:28:18.020Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-07T00:28:18.248Z] [BOT] ✅ Posted message: Software Engineer III @ Sam's Club in #📊・JID_fb739488
[2026-02-07T00:28:18.248Z] [BOT] ✅ Industry: Software Engineer III @ Sam's Club
[2026-02-07T00:28:18.249Z] [BOT] 💾 Added channel posting: Software Engineer III @ Sam's Club → category channel (1 total channels)
[2026-02-07T00:28:18.249Z] [BOT] 💾 BEFORE MERGE: 1745 jobs in memory (cached)
[2026-02-07T00:28:18.273Z] [BOT] ✅ Loaded V2 database: 1744 jobs
💾 DISK STATE: 1744 jobs on disk
[2026-02-07T00:28:18.274Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1745
[2026-02-07T00:28:18.277Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T00:28:18.278Z] [BOT] 💾 AFTER MERGE: 1745 jobs (merged disk + memory)
[2026-02-07T00:28:18.279Z] [BOT] ✅ No jobs to archive (all 1745 jobs within 7-day window)
[2026-02-07T00:28:18.357Z] [BOT] 💾 Saved posted_jobs.json: 1745 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T00:28:20.039Z] [BOT] ✅ Posted message: Software Engineer III @ Sam's Club in #🌉・JID_739bbc0b
[2026-02-07T00:28:20.039Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-07T00:28:20.040Z] [BOT] 💾 Added channel posting: Software Engineer III @ Sam's Club → location channel (2 total channels)
[2026-02-07T00:28:20.040Z] [BOT] 💾 BEFORE MERGE: 1745 jobs in memory (cached)
[2026-02-07T00:28:20.065Z] [BOT] ✅ Loaded V2 database: 1745 jobs
💾 DISK STATE: 1745 jobs on disk
[2026-02-07T00:28:20.065Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1745
[2026-02-07T00:28:20.069Z] [BOT] 🔀 Deep merged: Software Engineer III @ Sam's Club (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T00:28:20.069Z] [BOT] 💾 AFTER MERGE: 1745 jobs (merged disk + memory)
[2026-02-07T00:28:20.070Z] [BOT] ✅ No jobs to archive (all 1745 jobs within 7-day window)
[2026-02-07T00:28:20.149Z] [BOT] 💾 Saved posted_jobs.json: 1745 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T00:28:24.653Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-07T00:28:24.654Z] [BOT] 📍 [ROUTING] "COMPUTER SCIENTIST - RESEARCH COMPUTER SCIENTIST - RESEARCH ENGINEER - Junior Software Developer" @ ORG_89135357 Research Institute
   Category: TECH (matched: "software")
[2026-02-07T00:28:24.654Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T00:28:25.395Z] [BOT] ✅ Posted message: COMPUTER SCIENTIST - RESEARCH COMPUTER SCIENTIST - RESEARCH ENGINEER - Junior Software Developer @ ORG_89135357 Research Institute in #💻・tech-jobs
[2026-02-07T00:28:25.395Z] [BOT] ✅ Industry: COMPUTER SCIENTIST - RESEARCH COMPUTER SCIENTIST - RESEARCH ENGINEER - Junior Software Developer @ ORG_89135357 Research Institute
[2026-02-07T00:28:25.396Z] [BOT] 💾 Added channel posting: COMPUTER SCIENTIST - RESEARCH COMPUTER SCIENTIST - RESEARCH ENGINEER - Junior Software Developer @ ORG_89135357 Research Institute → category channel (1 total channels)
[2026-02-07T00:28:25.396Z] [BOT] 💾 BEFORE MERGE: 1746 jobs in memory (cached)
[2026-02-07T00:28:25.422Z] [BOT] ✅ Loaded V2 database: 1745 jobs
💾 DISK STATE: 1745 jobs on disk
[2026-02-07T00:28:25.422Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1746
[2026-02-07T00:28:25.426Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T00:28:25.426Z] [BOT] 💾 AFTER MERGE: 1746 jobs (merged disk + memory)
[2026-02-07T00:28:25.427Z] [BOT] ✅ No jobs to archive (all 1746 jobs within 7-day window)
[2026-02-07T00:28:25.506Z] [BOT] 💾 Saved posted_jobs.json: 1746 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T00:28:27.183Z] [BOT] ✅ Posted message: COMPUTER SCIENTIST - RESEARCH COMPUTER SCIENTIST - RESEARCH ENGINEER - Junior Software Developer @ ORG_89135357 Research Institute in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-07T00:28:27.184Z] [BOT] 💾 Added channel posting: COMPUTER SCIENTIST - RESEARCH COMPUTER SCIENTIST - RESEARCH ENGINEER - Junior Software Developer @ ORG_89135357 Research Institute → location channel (2 total channels)
[2026-02-07T00:28:27.184Z] [BOT] 💾 BEFORE MERGE: 1746 jobs in memory (cached)
[2026-02-07T00:28:27.209Z] [BOT] ✅ Loaded V2 database: 1746 jobs
💾 DISK STATE: 1746 jobs on disk
[2026-02-07T00:28:27.209Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1746
[2026-02-07T00:28:27.213Z] [BOT] 🔀 Deep merged: COMPUTER SCIENTIST - RESEARCH COMPUTER SCIENTIST - RESEARCH ENGINEER - Junior Software Developer @ ORG_89135357 Research Institute (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T00:28:27.213Z] [BOT] 💾 AFTER MERGE: 1746 jobs (merged disk + memory)
[2026-02-07T00:28:27.215Z] [BOT] ✅ No jobs to archive (all 1746 jobs within 7-day window)
[2026-02-07T00:28:27.301Z] [BOT] 💾 Saved posted_jobs.json: 1746 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T00:28:28.803Z] [BOT] 📍 [ROUTING] "Expert Software Engineer" @ ORG_54322929 Health
   Category: TECH (matched: "software")
[2026-02-07T00:28:28.803Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T00:28:29.017Z] [BOT] ✅ Posted message: Expert Software Engineer @ ORG_54322929 Health in #💻・tech-jobs
[2026-02-07T00:28:29.017Z] [BOT] ✅ Industry: Expert Software Engineer @ ORG_54322929 Health
[2026-02-07T00:28:29.018Z] [BOT] 💾 Added channel posting: Expert Software Engineer @ ORG_54322929 Health → category channel (1 total channels)
[2026-02-07T00:28:29.018Z] [BOT] 💾 BEFORE MERGE: 1747 jobs in memory (cached)
[2026-02-07T00:28:29.043Z] [BOT] ✅ Loaded V2 database: 1746 jobs
💾 DISK STATE: 1746 jobs on disk
[2026-02-07T00:28:29.043Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1747
[2026-02-07T00:28:29.046Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T00:28:29.046Z] [BOT] 💾 AFTER MERGE: 1747 jobs (merged disk + memory)
[2026-02-07T00:28:29.047Z] [BOT] ✅ No jobs to archive (all 1747 jobs within 7-day window)
[2026-02-07T00:28:29.126Z] [BOT] 💾 Saved posted_jobs.json: 1747 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T00:28:32.150Z] [BOT] ✅ Posted message: Expert Software Engineer @ ORG_54322929 Health in #📍・JID_6daed763
[2026-02-07T00:28:32.150Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-07T00:28:32.150Z] [BOT] 💾 Added channel posting: Expert Software Engineer @ ORG_54322929 Health → location channel (2 total channels)
[2026-02-07T00:28:32.150Z] [BOT] 💾 BEFORE MERGE: 1747 jobs in memory (cached)
[2026-02-07T00:28:32.175Z] [BOT] ✅ Loaded V2 database: 1747 jobs
[2026-02-07T00:28:32.175Z] [BOT] 💾 DISK STATE: 1747 jobs on disk
[2026-02-07T00:28:32.175Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1747
[2026-02-07T00:28:32.179Z] [BOT] 🔀 Deep merged: Expert Software Engineer @ ORG_54322929 Health (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T00:28:32.179Z] [BOT] 💾 AFTER MERGE: 1747 jobs (merged disk + memory)
[2026-02-07T00:28:32.185Z] [BOT] ✅ No jobs to archive (all 1747 jobs within 7-day window)
[2026-02-07T00:28:32.272Z] [BOT] 💾 Saved posted_jobs.json: 1747 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T00:28:36.772Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-02-07T00:28:36.773Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "6c33e77ad3080836"
[2026-02-07T00:28:36.773Z] [BOT] ⏭️  Skipping duplicate: JID_e7a0cae8 (posted within 7 days)
[2026-02-07T00:28:36.773Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_155f5c80..." not found, but found as SHA256 "bfe871cd3f406734"
[2026-02-07T00:28:36.773Z] [BOT] ⏭️  Skipping duplicate: JID_d3568e11 (posted within 7 days)
[2026-02-07T00:28:36.774Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_050c3047..." not found, but found as SHA256 "7b0445b4d117fecb"
⏭️  Skipping duplicate: JID_59033619 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_331b4df0..." not found, but found as SHA256 "86875f6c9df11009"
⏭️  Skipping duplicate: JID_f059dd99 (posted within 7 days)
[2026-02-07T00:28:36.784Z] [BOT] ✅ Loaded pending queue: 174 total (168 pending, 6 enriched, 0 posted)
[2026-02-07T00:28:36.800Z] [BOT] ✅ Saved pending queue: 174 total (168 pending, 2 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
[2026-02-07T00:28:36.800Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T00:28:36.920Z] [BOT] 📂 Loaded 12613 existing routing entries
[2026-02-07T00:28:37.047Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 12617
[2026-02-07T00:28:37.047Z] [BOT] Timestamp: 2026-02-07T00:28:36.989Z
[2026-02-07T00:28:37.047Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T00:28:37.048Z] [BOT] Total attempts: 54
   Successful: 8
   Failed: 0
   Skipped: 46
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 8
   Channels used: 4
   Top channels:
     1. #📊・JID_fb739488: 2 posts
     2. #🌉・JID_739bbc0b: 2 posts
     3. #💻・tech-jobs: 2 posts
     4. #📍・JID_6daed763: 2 posts
[2026-02-07T00:28:37.048Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T00:28:37.048Z] [BOT] 💾 BEFORE MERGE: 1747 jobs in memory (cached)
[2026-02-07T00:28:37.073Z] [BOT] ✅ Loaded V2 database: 1747 jobs
💾 DISK STATE: 1747 jobs on disk
[2026-02-07T00:28:37.074Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1747
[2026-02-07T00:28:37.078Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T00:28:37.078Z] [BOT] 💾 AFTER MERGE: 1747 jobs (merged disk + memory)
[2026-02-07T00:28:37.079Z] [BOT] ✅ No jobs to archive (all 1747 jobs within 7-day window)
[2026-02-07T00:28:37.163Z] [BOT] 💾 Saved posted_jobs.json: 1747 active jobs
[2026-02-07T00:28:37.163Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-07T00:28:39.183Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2498) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*