# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T22:33:53.263Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T22:33:27.991Z] ========================================
[2026-02-01T22:33:27.993Z] Discord Bot Execution Log
[2026-02-01T22:33:27.994Z] Environment: GitHub Actions
[2026-02-01T22:33:27.994Z] Node Version: v20.20.0
[2026-02-01T22:33:27.994Z] ========================================
[2026-02-01T22:33:27.994Z] Environment Variables Check:
[2026-02-01T22:33:27.994Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T22:33:27.994Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T22:33:27.994Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T22:33:27.994Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T22:33:27.994Z] 
Multi-Channel Configuration:
[2026-02-01T22:33:27.994Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T22:33:27.995Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:33:27.995Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:33:27.995Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T22:33:27.995Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:33:27.995Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:33:27.995Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:33:27.995Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:33:27.995Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:33:27.995Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T22:33:27.995Z] 
Data Files Check:
[2026-02-01T22:33:27.996Z] .github/data/new_jobs.json: ✅ Exists (10 items, 61350 bytes)
[2026-02-01T22:33:28.050Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11073890 bytes)
[2026-02-01T22:33:28.050Z] 
========================================
[2026-02-01T22:33:28.050Z] Starting Enhanced Discord Bot...
[2026-02-01T22:33:28.050Z] ========================================
[2026-02-01T22:33:28.634Z] [BOT] ✅ Loaded V2 database: 2206 jobs
[2026-02-01T22:33:29.411Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T22:33:29.412Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T22:33:29.412Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T22:33:29.458Z] [BOT] ✅ Loaded pending queue: 745 total (695 pending, 50 enriched, 0 posted)
[2026-02-01T22:33:29.459Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Physics Department - Postdoctoral Scholar - Ligo at PennState University
[2026-02-01T22:33:29.467Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-01T22:33:29.467Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-01T22:33:29.467Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-01T22:33:29.479Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-01T22:33:29.480Z] [BOT] 🚫 Skipping blacklisted job: Physics Department - Postdoctoral Scholar - Ligo at PennState University
[2026-02-01T22:33:29.480Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Research Fellow at Northeastern
🚫 Skipping blacklisted job: Postdoctoral Researcher - Aerosols and hydroclimate risk at University of Texas - Austin
[2026-02-01T22:33:29.480Z] [BOT] 🚫 Skipping blacklisted job: Computer Science Postdoctoral Fellow at American University
🚫 Skipping blacklisted job: Global Sr. Manager, Experiential & Content Production at spotify
🚫 Skipping blacklisted job: Postdoctoral Fellow in Water Systems - Ml at University of Texas - Austin
[2026-02-01T22:33:29.480Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Research Associate at Argonne National Laboratory
🚫 Skipping blacklisted job: Machine Learning Engineer (Lead Ads Technology) - 2026 Start (BS/MS) at TikTok
[2026-02-01T22:33:29.480Z] [BOT] 🚫 Skipping blacklisted job: Graduate Leadership Program - AI & Software Engineering at PMG
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Research Product Manager at anthropic
[2026-02-01T22:33:29.480Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager - Boston at datadog
🚫 Skipping blacklisted job: Senior Principal Revenue Analyst at gusto
[2026-02-01T22:33:29.481Z] [BOT] 🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
[2026-02-01T22:33:29.481Z] [BOT] 🚫 Skipping blacklisted job: Senior Full-Stack Engineer - Product at railway
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-01T22:33:29.481Z] [BOT] 🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-02-01T22:33:29.481Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-01T22:33:29.481Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
[2026-02-01T22:33:29.481Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
[2026-02-01T22:33:29.481Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
[2026-02-01T22:33:29.481Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
[2026-02-01T22:33:29.481Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
🚫 Skipping blacklisted job: Operations Manager, Communications  at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
[2026-02-01T22:33:29.482Z] [BOT] 🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
[2026-02-01T22:33:29.482Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
🚫 Skipping blacklisted job: Postdoctoral Researcher at Brookhaven Lab
🚫 Skipping blacklisted job: Staff Software Engineer,  Infrastructure  at gusto
[2026-02-01T22:33:29.482Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Staff Machine Learning Engineer - Home at spotify
🚫 Skipping blacklisted job: Lead TMS Compliance Analyst  at coinbase
[2026-02-01T22:33:29.482Z] [BOT] 🚫 Skipping blacklisted job: Lead TMS Quality Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Account Executive, SMB at figma
[2026-02-01T22:33:29.523Z] [BOT] ✅ Loaded pending queue: 745 total (695 pending, 50 enriched, 0 posted)
[2026-02-01T22:33:29.601Z] [BOT] ✅ Saved pending queue: 701 total (695 pending, 6 enriched, 0 posted)
🗑️ Removed 44 blacklisted jobs from pending queue
📋 After blacklist filter: 5 jobs (44 blacklisted)
[2026-02-01T22:33:29.601Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-02-01T22:33:29.602Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-02-01T22:33:29.602Z] [BOT] ⏸️ Limiting to 10 jobs this run, 44 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T22:33:29.604Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-02-01T22:33:29.605Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_aa669b28
[2026-02-01T22:33:29.605Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T22:33:29.622Z] [BOT ERROR] (node:3427) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T22:33:29.852Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_aa669b28 in #💻・tech-jobs
[2026-02-01T22:33:29.853Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_aa669b28
[2026-02-01T22:33:29.854Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_aa669b28 → category channel (1 total channels)
[2026-02-01T22:33:29.854Z] [BOT] 💾 BEFORE MERGE: 2207 jobs in memory (cached)
[2026-02-01T22:33:29.894Z] [BOT] ✅ Loaded V2 database: 2206 jobs
💾 DISK STATE: 2206 jobs on disk
[2026-02-01T22:33:29.895Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2207
[2026-02-01T22:33:29.900Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:33:29.900Z] [BOT] 💾 AFTER MERGE: 2207 jobs (merged disk + memory)
[2026-02-01T22:33:29.901Z] [BOT] ✅ No jobs to archive (all 2207 jobs within 7-day window)
[2026-02-01T22:33:30.031Z] [BOT] 💾 Saved posted_jobs.json: 2207 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:33:31.803Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_aa669b28 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T22:33:31.803Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_aa669b28 → location channel (2 total channels)
[2026-02-01T22:33:31.803Z] [BOT] 💾 BEFORE MERGE: 2207 jobs in memory (cached)
[2026-02-01T22:33:31.841Z] [BOT] ✅ Loaded V2 database: 2207 jobs
💾 DISK STATE: 2207 jobs on disk
[2026-02-01T22:33:31.842Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2207
[2026-02-01T22:33:31.846Z] [BOT] 🔀 Deep merged: Software Engineer 1 @ ORG_aa669b28 (disk: 1 channels → merged: 2 channels)
[2026-02-01T22:33:31.846Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2207 jobs (merged disk + memory)
[2026-02-01T22:33:31.848Z] [BOT] ✅ No jobs to archive (all 2207 jobs within 7-day window)
[2026-02-01T22:33:31.954Z] [BOT] 💾 Saved posted_jobs.json: 2207 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:33:33.457Z] [BOT] 📍 [ROUTING] "Software Engineer 2" @ ORG_aa669b28
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T22:33:33.694Z] [BOT] ✅ Posted message: Software Engineer 2 @ ORG_aa669b28 in #💻・tech-jobs
  ✅ Industry: Software Engineer 2 @ ORG_aa669b28
[2026-02-01T22:33:33.695Z] [BOT] 💾 Added channel posting: Software Engineer 2 @ ORG_aa669b28 → category channel (1 total channels)
[2026-02-01T22:33:33.695Z] [BOT] 💾 BEFORE MERGE: 2208 jobs in memory (cached)
[2026-02-01T22:33:33.733Z] [BOT] ✅ Loaded V2 database: 2207 jobs
💾 DISK STATE: 2207 jobs on disk
[2026-02-01T22:33:33.733Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2208
[2026-02-01T22:33:33.738Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:33:33.738Z] [BOT] 💾 AFTER MERGE: 2208 jobs (merged disk + memory)
[2026-02-01T22:33:33.739Z] [BOT] ✅ No jobs to archive (all 2208 jobs within 7-day window)
[2026-02-01T22:33:33.857Z] [BOT] 💾 Saved posted_jobs.json: 2208 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:33:35.591Z] [BOT] ✅ Posted message: Software Engineer 2 @ ORG_aa669b28 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T22:33:35.591Z] [BOT] 💾 Added channel posting: Software Engineer 2 @ ORG_aa669b28 → location channel (2 total channels)
[2026-02-01T22:33:35.591Z] [BOT] 💾 BEFORE MERGE: 2208 jobs in memory (cached)
[2026-02-01T22:33:35.630Z] [BOT] ✅ Loaded V2 database: 2208 jobs
💾 DISK STATE: 2208 jobs on disk
[2026-02-01T22:33:35.630Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2208
[2026-02-01T22:33:35.635Z] [BOT] 🔀 Deep merged: Software Engineer 2 @ ORG_aa669b28 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T22:33:35.635Z] [BOT] 💾 AFTER MERGE: 2208 jobs (merged disk + memory)
[2026-02-01T22:33:35.636Z] [BOT] ✅ No jobs to archive (all 2208 jobs within 7-day window)
[2026-02-01T22:33:35.747Z] [BOT] 💾 Saved posted_jobs.json: 2208 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:33:37.247Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Infrastructure" @ ORG_d5eef8ad
   Category: TECH (matched: "software")
[2026-02-01T22:33:37.248Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T22:33:37.515Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Infrastructure @ ORG_d5eef8ad in #💻・tech-jobs
[2026-02-01T22:33:37.515Z] [BOT] ✅ Industry: Software Engineer – New Grad - Infrastructure @ ORG_d5eef8ad
[2026-02-01T22:33:37.516Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Infrastructure @ ORG_d5eef8ad → category channel (1 total channels)
[2026-02-01T22:33:37.516Z] [BOT] 💾 BEFORE MERGE: 2209 jobs in memory (cached)
[2026-02-01T22:33:37.562Z] [BOT] ✅ Loaded V2 database: 2208 jobs
💾 DISK STATE: 2208 jobs on disk
[2026-02-01T22:33:37.563Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2209
[2026-02-01T22:33:37.569Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:33:37.569Z] [BOT] 💾 AFTER MERGE: 2209 jobs (merged disk + memory)
[2026-02-01T22:33:37.571Z] [BOT] ✅ No jobs to archive (all 2209 jobs within 7-day window)
[2026-02-01T22:33:37.702Z] [BOT] 💾 Saved posted_jobs.json: 2209 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:33:39.397Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Infrastructure @ ORG_d5eef8ad in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T22:33:39.398Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Infrastructure @ ORG_d5eef8ad → location channel (2 total channels)
[2026-02-01T22:33:39.398Z] [BOT] 💾 BEFORE MERGE: 2209 jobs in memory (cached)
[2026-02-01T22:33:39.434Z] [BOT] ✅ Loaded V2 database: 2209 jobs
💾 DISK STATE: 2209 jobs on disk
[2026-02-01T22:33:39.434Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2209
[2026-02-01T22:33:39.438Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad - Infrastructure @ ORG_d5eef8ad (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T22:33:39.438Z] [BOT] 💾 AFTER MERGE: 2209 jobs (merged disk + memory)
[2026-02-01T22:33:39.439Z] [BOT] ✅ No jobs to archive (all 2209 jobs within 7-day window)
[2026-02-01T22:33:39.538Z] [BOT] 💾 Saved posted_jobs.json: 2209 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:33:41.041Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_c7953dfe
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T22:33:41.401Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_c7953dfe in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_c7953dfe
[2026-02-01T22:33:41.402Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_c7953dfe → category channel (1 total channels)
[2026-02-01T22:33:41.402Z] [BOT] 💾 BEFORE MERGE: 2210 jobs in memory (cached)
[2026-02-01T22:33:41.439Z] [BOT] ✅ Loaded V2 database: 2209 jobs
💾 DISK STATE: 2209 jobs on disk
[2026-02-01T22:33:41.439Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2210
[2026-02-01T22:33:41.443Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:33:41.443Z] [BOT] 💾 AFTER MERGE: 2210 jobs (merged disk + memory)
[2026-02-01T22:33:41.444Z] [BOT] ✅ No jobs to archive (all 2210 jobs within 7-day window)
[2026-02-01T22:33:41.554Z] [BOT] 💾 Saved posted_jobs.json: 2210 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:33:43.056Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_530743c3
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T22:33:43.229Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_530743c3 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_530743c3
[2026-02-01T22:33:43.230Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_530743c3 → category channel (1 total channels)
[2026-02-01T22:33:43.230Z] [BOT] 💾 BEFORE MERGE: 2211 jobs in memory (cached)
[2026-02-01T22:33:43.270Z] [BOT] ✅ Loaded V2 database: 2210 jobs
💾 DISK STATE: 2210 jobs on disk
[2026-02-01T22:33:43.270Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2211
[2026-02-01T22:33:43.274Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:33:43.274Z] [BOT] 💾 AFTER MERGE: 2211 jobs (merged disk + memory)
[2026-02-01T22:33:43.275Z] [BOT] ✅ No jobs to archive (all 2211 jobs within 7-day window)
[2026-02-01T22:33:43.387Z] [BOT] 💾 Saved posted_jobs.json: 2211 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:33:45.104Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_530743c3 in #📍・JID_6daed763
[2026-02-01T22:33:45.104Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T22:33:45.104Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_530743c3 → location channel (2 total channels)
[2026-02-01T22:33:45.105Z] [BOT] 💾 BEFORE MERGE: 2211 jobs in memory (cached)
[2026-02-01T22:33:45.151Z] [BOT] ✅ Loaded V2 database: 2211 jobs
💾 DISK STATE: 2211 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2211
[2026-02-01T22:33:45.162Z] [BOT] 🔀 Deep merged: Software Engineer 1 @ ORG_530743c3 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T22:33:45.162Z] [BOT] 💾 AFTER MERGE: 2211 jobs (merged disk + memory)
[2026-02-01T22:33:45.163Z] [BOT] ✅ No jobs to archive (all 2211 jobs within 7-day window)
[2026-02-01T22:33:45.270Z] [BOT] 💾 Saved posted_jobs.json: 2211 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:33:49.771Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-02-01T22:33:49.773Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_270da109..." not found, but found as SHA256 "30a68e33de83b2a9"
[2026-02-01T22:33:49.773Z] [BOT] ⏭️  Skipping duplicate: JID_270da109 (posted within 7 days)
[2026-02-01T22:33:49.774Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7befc69e..." not found, but found as SHA256 "d1fb5ddbe9241e08"
⏭️  Skipping duplicate: JID_7befc69e (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_89a1ed8f..." not found, but found as SHA256 "b2143b22cb8f8720"
⏭️  Skipping duplicate: JID_96fe0c0a (posted within 7 days)
[2026-02-01T22:33:49.774Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_17d3945c..." not found, but found as SHA256 "90768c7536e249f4"
[2026-02-01T22:33:49.774Z] [BOT] ⏭️  Skipping duplicate: JID_17d3945c (posted within 7 days)
[2026-02-01T22:33:49.774Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a079a374..." not found, but found as SHA256 "25322c69431acdac"
[2026-02-01T22:33:49.774Z] [BOT] ⏭️  Skipping duplicate: JID_f6e75282 (posted within 7 days)
[2026-02-01T22:33:49.814Z] [BOT] ✅ Loaded pending queue: 701 total (695 pending, 6 enriched, 0 posted)
[2026-02-01T22:33:49.885Z] [BOT] ✅ Saved pending queue: 701 total (695 pending, 1 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
[2026-02-01T22:33:49.885Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T22:33:49.976Z] [BOT] 📂 Loaded 12287 existing routing entries
[2026-02-01T22:33:50.115Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-02-01T22:33:50.115Z] [BOT] Total entries: 12292
   Timestamp: 2026-02-01T22:33:50.060Z
[2026-02-01T22:33:50.116Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T22:33:50.116Z] [BOT] Total attempts: 54
   Successful: 9
   Failed: 0
   Skipped: 45
[2026-02-01T22:33:50.116Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-01T22:33:50.116Z] [BOT] Total posts: 9
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🌉・JID_739bbc0b: 3 posts
[2026-02-01T22:33:50.117Z] [BOT] 3. #📍・JID_6daed763: 1 posts
[2026-02-01T22:33:50.117Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2211 jobs in memory (cached)
[2026-02-01T22:33:50.169Z] [BOT] ✅ Loaded V2 database: 2211 jobs
💾 DISK STATE: 2211 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2211
[2026-02-01T22:33:50.172Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:33:50.172Z] [BOT] 💾 AFTER MERGE: 2211 jobs (merged disk + memory)
[2026-02-01T22:33:50.174Z] [BOT] ✅ No jobs to archive (all 2211 jobs within 7-day window)
[2026-02-01T22:33:50.277Z] [BOT] 💾 Saved posted_jobs.json: 2211 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:33:50.277Z] [BOT] ✅ Database saved successfully
[2026-02-01T22:33:52.305Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3427) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*