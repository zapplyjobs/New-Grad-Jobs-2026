# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T19:12:45.458Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T19:11:52.729Z] ========================================
[2026-02-01T19:11:52.731Z] Discord Bot Execution Log
[2026-02-01T19:11:52.731Z] Environment: GitHub Actions
[2026-02-01T19:11:52.731Z] Node Version: v20.20.0
[2026-02-01T19:11:52.731Z] ========================================
[2026-02-01T19:11:52.731Z] Environment Variables Check:
[2026-02-01T19:11:52.731Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T19:11:52.731Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T19:11:52.731Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T19:11:52.731Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T19:11:52.731Z] 
Multi-Channel Configuration:
[2026-02-01T19:11:52.731Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T19:11:52.731Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:11:52.731Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:11:52.731Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T19:11:52.731Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:11:52.731Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:11:52.731Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:11:52.731Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:11:52.732Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:11:52.732Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T19:11:52.732Z] 
Data Files Check:
[2026-02-01T19:11:52.732Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57412 bytes)
[2026-02-01T19:11:52.796Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10667362 bytes)
[2026-02-01T19:11:52.796Z] 
========================================
[2026-02-01T19:11:52.796Z] Starting Enhanced Discord Bot...
[2026-02-01T19:11:52.796Z] ========================================
[2026-02-01T19:11:53.285Z] [BOT] ✅ Loaded V2 database: 2137 jobs
[2026-02-01T19:11:53.795Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T19:11:53.795Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T19:11:53.795Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T19:11:53.860Z] [BOT] ✅ Loaded pending queue: 807 total (757 pending, 50 enriched, 0 posted)
[2026-02-01T19:11:53.861Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer – New Grad at Palantir
[2026-02-01T19:11:53.875Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T19:11:53.876Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Cloud Inference Azure at anthropic
[2026-02-01T19:11:53.876Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
[2026-02-01T19:11:53.876Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
[2026-02-01T19:11:53.876Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
[2026-02-01T19:11:53.876Z] [BOT] 🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Global Technology Partner Lead at anthropic
[2026-02-01T19:11:53.876Z] [BOT] 🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
🚫 Skipping blacklisted job: Manager, IT Support & Operations at anthropic
[2026-02-01T19:11:53.943Z] [BOT] ✅ Loaded pending queue: 807 total (757 pending, 50 enriched, 0 posted)
[2026-02-01T19:11:54.010Z] [BOT] ✅ Saved pending queue: 783 total (757 pending, 26 enriched, 0 posted)
🗑️ Removed 24 blacklisted jobs from pending queue
📋 After blacklist filter: 26 jobs (24 blacklisted)
[2026-02-01T19:11:54.010Z] [BOT] 📋 After data quality filter: 26 jobs (0 invalid)
[2026-02-01T19:11:54.011Z] [BOT] 📋 After multi-location grouping: 25 unique jobs to post
[2026-02-01T19:11:54.011Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer – New Grad @ Palantir: new york, denver
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T19:11:54.014Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-01T19:11:54.016Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_f56b7436
[2026-02-01T19:11:54.016Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:11:54.032Z] [BOT ERROR] (node:3821) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T19:11:54.500Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_f56b7436 in #💻・tech-jobs
[2026-02-01T19:11:54.500Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_f56b7436
[2026-02-01T19:11:54.501Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_f56b7436 → category channel (1 total channels)
[2026-02-01T19:11:54.501Z] [BOT] 💾 BEFORE MERGE: 2138 jobs in memory (cached)
[2026-02-01T19:11:54.561Z] [BOT] ✅ Loaded V2 database: 2137 jobs
[2026-02-01T19:11:54.565Z] [BOT] 💾 DISK STATE: 2137 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2138
[2026-02-01T19:11:54.569Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:11:54.569Z] [BOT] 💾 AFTER MERGE: 2138 jobs (merged disk + memory)
[2026-02-01T19:11:54.571Z] [BOT] ✅ No jobs to archive (all 2138 jobs within 7-day window)
[2026-02-01T19:11:54.706Z] [BOT] 💾 Saved posted_jobs.json: 2138 active jobs
[2026-02-01T19:11:54.706Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T19:11:56.483Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_f56b7436 in #🗽・JID_98d4f0de
[2026-02-01T19:11:56.483Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T19:11:56.484Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_f56b7436 → location channel (2 total channels)
[2026-02-01T19:11:56.484Z] [BOT] 💾 BEFORE MERGE: 2138 jobs in memory (cached)
[2026-02-01T19:11:56.536Z] [BOT] ✅ Loaded V2 database: 2138 jobs
💾 DISK STATE: 2138 jobs on disk
[2026-02-01T19:11:56.536Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2138
[2026-02-01T19:11:56.541Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad @ ORG_f56b7436 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:11:56.541Z] [BOT] 💾 AFTER MERGE: 2138 jobs (merged disk + memory)
[2026-02-01T19:11:56.542Z] [BOT] ✅ No jobs to archive (all 2138 jobs within 7-day window)
[2026-02-01T19:11:56.655Z] [BOT] 💾 Saved posted_jobs.json: 2138 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:11:58.158Z] [BOT] 📍 [ROUTING] "Graduate & Entry-Level Roles" @ ORG_3557afe5
[2026-02-01T19:11:58.158Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:11:58.428Z] [BOT] ✅ Posted message: Graduate & Entry-Level Roles @ ORG_3557afe5 in #💻・tech-jobs
[2026-02-01T19:11:58.428Z] [BOT] ✅ Industry: Graduate & Entry-Level Roles @ ORG_3557afe5
[2026-02-01T19:11:58.429Z] [BOT] 💾 Added channel posting: Graduate & Entry-Level Roles @ ORG_3557afe5 → category channel (1 total channels)
[2026-02-01T19:11:58.429Z] [BOT] 💾 BEFORE MERGE: 2139 jobs in memory (cached)
[2026-02-01T19:11:58.482Z] [BOT] ✅ Loaded V2 database: 2138 jobs
💾 DISK STATE: 2138 jobs on disk
[2026-02-01T19:11:58.483Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2139
[2026-02-01T19:11:58.487Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:11:58.487Z] [BOT] 💾 AFTER MERGE: 2139 jobs (merged disk + memory)
[2026-02-01T19:11:58.489Z] [BOT] ✅ No jobs to archive (all 2139 jobs within 7-day window)
[2026-02-01T19:11:58.603Z] [BOT] 💾 Saved posted_jobs.json: 2139 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:00.261Z] [BOT] ✅ Posted message: Graduate & Entry-Level Roles @ ORG_3557afe5 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T19:12:00.262Z] [BOT] 💾 Added channel posting: Graduate & Entry-Level Roles @ ORG_3557afe5 → location channel (2 total channels)
[2026-02-01T19:12:00.262Z] [BOT] 💾 BEFORE MERGE: 2139 jobs in memory (cached)
[2026-02-01T19:12:00.312Z] [BOT] ✅ Loaded V2 database: 2139 jobs
💾 DISK STATE: 2139 jobs on disk
[2026-02-01T19:12:00.313Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2139
[2026-02-01T19:12:00.317Z] [BOT] 🔀 Deep merged: Graduate & Entry-Level Roles @ ORG_3557afe5 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:12:00.317Z] [BOT] 💾 AFTER MERGE: 2139 jobs (merged disk + memory)
[2026-02-01T19:12:00.319Z] [BOT] ✅ No jobs to archive (all 2139 jobs within 7-day window)
[2026-02-01T19:12:00.432Z] [BOT] 💾 Saved posted_jobs.json: 2139 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:01.934Z] [BOT] 📍 [ROUTING] "R&D Software Engineer - Esa" @ ORG_9d38443e of Texas - Austin
   Category: TECH (matched: "software")
[2026-02-01T19:12:01.934Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:12:02.329Z] [BOT] ✅ Posted message: R&D Software Engineer - Esa @ ORG_9d38443e of Texas - Austin in #💻・tech-jobs
[2026-02-01T19:12:02.329Z] [BOT] ✅ Industry: R&D Software Engineer - Esa @ ORG_9d38443e of Texas - Austin
[2026-02-01T19:12:02.330Z] [BOT] 💾 Added channel posting: R&D Software Engineer - Esa @ ORG_9d38443e of Texas - Austin → category channel (1 total channels)
[2026-02-01T19:12:02.330Z] [BOT] 💾 BEFORE MERGE: 2140 jobs in memory (cached)
[2026-02-01T19:12:02.382Z] [BOT] ✅ Loaded V2 database: 2139 jobs
💾 DISK STATE: 2139 jobs on disk
[2026-02-01T19:12:02.382Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2140
[2026-02-01T19:12:02.386Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:12:02.387Z] [BOT] 💾 AFTER MERGE: 2140 jobs (merged disk + memory)
[2026-02-01T19:12:02.388Z] [BOT] ✅ No jobs to archive (all 2140 jobs within 7-day window)
[2026-02-01T19:12:02.511Z] [BOT] 💾 Saved posted_jobs.json: 2140 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:04.206Z] [BOT] ✅ Posted message: R&D Software Engineer - Esa @ ORG_9d38443e of Texas - Austin in #📍・JID_6daed763
[2026-02-01T19:12:04.206Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T19:12:04.206Z] [BOT] 💾 Added channel posting: R&D Software Engineer - Esa @ ORG_9d38443e of Texas - Austin → location channel (2 total channels)
[2026-02-01T19:12:04.206Z] [BOT] 💾 BEFORE MERGE: 2140 jobs in memory (cached)
[2026-02-01T19:12:04.257Z] [BOT] ✅ Loaded V2 database: 2140 jobs
💾 DISK STATE: 2140 jobs on disk
[2026-02-01T19:12:04.257Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2140
[2026-02-01T19:12:04.261Z] [BOT] 🔀 Deep merged: R&D Software Engineer - Esa @ ORG_9d38443e of Texas - Austin (disk: 1 channels → merged: 2 channels)
[2026-02-01T19:12:04.261Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2140 jobs (merged disk + memory)
[2026-02-01T19:12:04.262Z] [BOT] ✅ No jobs to archive (all 2140 jobs within 7-day window)
[2026-02-01T19:12:04.371Z] [BOT] 💾 Saved posted_jobs.json: 2140 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:05.874Z] [BOT] 📍 [ROUTING] "AI-First Software Engineer – Entry Level" @ ORG_6d829758
[2026-02-01T19:12:05.874Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:12:06.118Z] [BOT] ✅ Posted message: AI-First Software Engineer – Entry Level @ ORG_6d829758 in #💻・tech-jobs
[2026-02-01T19:12:06.118Z] [BOT] ✅ Industry: AI-First Software Engineer – Entry Level @ ORG_6d829758
[2026-02-01T19:12:06.118Z] [BOT] 💾 Added channel posting: AI-First Software Engineer – Entry Level @ ORG_6d829758 → category channel (1 total channels)
[2026-02-01T19:12:06.119Z] [BOT] 💾 BEFORE MERGE: 2141 jobs in memory (cached)
[2026-02-01T19:12:06.171Z] [BOT] ✅ Loaded V2 database: 2140 jobs
💾 DISK STATE: 2140 jobs on disk
[2026-02-01T19:12:06.172Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2141
[2026-02-01T19:12:06.175Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:12:06.176Z] [BOT] 💾 AFTER MERGE: 2141 jobs (merged disk + memory)
[2026-02-01T19:12:06.177Z] [BOT] ✅ No jobs to archive (all 2141 jobs within 7-day window)
[2026-02-01T19:12:06.289Z] [BOT] 💾 Saved posted_jobs.json: 2141 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:08.089Z] [BOT] ✅ Posted message: AI-First Software Engineer – Entry Level @ ORG_6d829758 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T19:12:08.089Z] [BOT] 💾 Added channel posting: AI-First Software Engineer – Entry Level @ ORG_6d829758 → location channel (2 total channels)
[2026-02-01T19:12:08.090Z] [BOT] 💾 BEFORE MERGE: 2141 jobs in memory (cached)
[2026-02-01T19:12:08.142Z] [BOT] ✅ Loaded V2 database: 2141 jobs
💾 DISK STATE: 2141 jobs on disk
[2026-02-01T19:12:08.142Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2141
[2026-02-01T19:12:08.146Z] [BOT] 🔀 Deep merged: AI-First Software Engineer – Entry Level @ ORG_6d829758 (disk: 1 channels → merged: 2 channels)
[2026-02-01T19:12:08.146Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2141 jobs (merged disk + memory)
[2026-02-01T19:12:08.147Z] [BOT] ✅ No jobs to archive (all 2141 jobs within 7-day window)
[2026-02-01T19:12:08.259Z] [BOT] 💾 Saved posted_jobs.json: 2141 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:09.761Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Lrx Core" @ ORG_a014c1c4
[2026-02-01T19:12:09.761Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:12:10.184Z] [BOT] ✅ Posted message: Software Engineer 1 - Lrx Core @ ORG_a014c1c4 in #💻・tech-jobs
[2026-02-01T19:12:10.184Z] [BOT] ✅ Industry: Software Engineer 1 - Lrx Core @ ORG_a014c1c4
[2026-02-01T19:12:10.185Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Lrx Core @ ORG_a014c1c4 → category channel (1 total channels)
[2026-02-01T19:12:10.185Z] [BOT] 💾 BEFORE MERGE: 2142 jobs in memory (cached)
[2026-02-01T19:12:10.237Z] [BOT] ✅ Loaded V2 database: 2141 jobs
💾 DISK STATE: 2141 jobs on disk
[2026-02-01T19:12:10.238Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2142
[2026-02-01T19:12:10.241Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:12:10.242Z] [BOT] 💾 AFTER MERGE: 2142 jobs (merged disk + memory)
[2026-02-01T19:12:10.243Z] [BOT] ✅ No jobs to archive (all 2142 jobs within 7-day window)
[2026-02-01T19:12:10.372Z] [BOT] 💾 Saved posted_jobs.json: 2142 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:12.065Z] [BOT] ✅ Posted message: Software Engineer 1 - Lrx Core @ ORG_a014c1c4 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T19:12:12.065Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Lrx Core @ ORG_a014c1c4 → location channel (2 total channels)
[2026-02-01T19:12:12.065Z] [BOT] 💾 BEFORE MERGE: 2142 jobs in memory (cached)
[2026-02-01T19:12:12.116Z] [BOT] ✅ Loaded V2 database: 2142 jobs
💾 DISK STATE: 2142 jobs on disk
[2026-02-01T19:12:12.117Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2142
[2026-02-01T19:12:12.120Z] [BOT] 🔀 Deep merged: Software Engineer 1 - Lrx Core @ ORG_a014c1c4 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:12:12.120Z] [BOT] 💾 AFTER MERGE: 2142 jobs (merged disk + memory)
[2026-02-01T19:12:12.122Z] [BOT] ✅ No jobs to archive (all 2142 jobs within 7-day window)
[2026-02-01T19:12:12.231Z] [BOT] 💾 Saved posted_jobs.json: 2142 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:13.734Z] [BOT] 📍 [ROUTING] "Software Engineer MTS" @ ORG_33a7935d
[2026-02-01T19:12:13.734Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:12:14.050Z] [BOT] ✅ Posted message: Software Engineer MTS @ ORG_33a7935d in #💻・tech-jobs
[2026-02-01T19:12:14.050Z] [BOT] ✅ Industry: Software Engineer MTS @ ORG_33a7935d
[2026-02-01T19:12:14.050Z] [BOT] 💾 Added channel posting: Software Engineer MTS @ ORG_33a7935d → category channel (1 total channels)
[2026-02-01T19:12:14.051Z] [BOT] 💾 BEFORE MERGE: 2143 jobs in memory (cached)
[2026-02-01T19:12:14.102Z] [BOT] ✅ Loaded V2 database: 2142 jobs
💾 DISK STATE: 2142 jobs on disk
[2026-02-01T19:12:14.103Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2143
[2026-02-01T19:12:14.107Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:12:14.107Z] [BOT] 💾 AFTER MERGE: 2143 jobs (merged disk + memory)
[2026-02-01T19:12:14.108Z] [BOT] ✅ No jobs to archive (all 2143 jobs within 7-day window)
[2026-02-01T19:12:14.220Z] [BOT] 💾 Saved posted_jobs.json: 2143 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:15.887Z] [BOT] ✅ Posted message: Software Engineer MTS @ ORG_33a7935d in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T19:12:15.888Z] [BOT] 💾 Added channel posting: Software Engineer MTS @ ORG_33a7935d → location channel (2 total channels)
[2026-02-01T19:12:15.888Z] [BOT] 💾 BEFORE MERGE: 2143 jobs in memory (cached)
[2026-02-01T19:12:15.939Z] [BOT] ✅ Loaded V2 database: 2143 jobs
💾 DISK STATE: 2143 jobs on disk
[2026-02-01T19:12:15.940Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2143
[2026-02-01T19:12:15.943Z] [BOT] 🔀 Deep merged: Software Engineer MTS @ ORG_33a7935d (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:12:15.944Z] [BOT] 💾 AFTER MERGE: 2143 jobs (merged disk + memory)
[2026-02-01T19:12:15.945Z] [BOT] ✅ No jobs to archive (all 2143 jobs within 7-day window)
[2026-02-01T19:12:16.063Z] [BOT] 💾 Saved posted_jobs.json: 2143 active jobs
[2026-02-01T19:12:16.066Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:20.567Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T19:12:20.568Z] [BOT] 📍 [ROUTING] "Associate Machine Learning Engineer" @ ORG_b344d80e Walt Disney Company
   Category: AI (matched: "machine learning")
[2026-02-01T19:12:20.568Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T19:12:20.954Z] [BOT] ✅ Posted message: Associate Machine Learning Engineer @ ORG_b344d80e Walt Disney Company in #🤖・ai-jobs
[2026-02-01T19:12:20.954Z] [BOT] ✅ Industry: Associate Machine Learning Engineer @ ORG_b344d80e Walt Disney Company
[2026-02-01T19:12:20.954Z] [BOT] 💾 Added channel posting: Associate Machine Learning Engineer @ ORG_b344d80e Walt Disney Company → category channel (1 total channels)
[2026-02-01T19:12:20.955Z] [BOT] 💾 BEFORE MERGE: 2144 jobs in memory (cached)
[2026-02-01T19:12:21.006Z] [BOT] ✅ Loaded V2 database: 2143 jobs
💾 DISK STATE: 2143 jobs on disk
[2026-02-01T19:12:21.006Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2144
[2026-02-01T19:12:21.010Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:12:21.010Z] [BOT] 💾 AFTER MERGE: 2144 jobs (merged disk + memory)
[2026-02-01T19:12:21.011Z] [BOT] ✅ No jobs to archive (all 2144 jobs within 7-day window)
[2026-02-01T19:12:21.128Z] [BOT] 💾 Saved posted_jobs.json: 2144 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:22.940Z] [BOT] ✅ Posted message: Associate Machine Learning Engineer @ ORG_b344d80e Walt Disney Company in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T19:12:22.940Z] [BOT] 💾 Added channel posting: Associate Machine Learning Engineer @ ORG_b344d80e Walt Disney Company → location channel (2 total channels)
[2026-02-01T19:12:22.941Z] [BOT] 💾 BEFORE MERGE: 2144 jobs in memory (cached)
[2026-02-01T19:12:22.994Z] [BOT] ✅ Loaded V2 database: 2144 jobs
💾 DISK STATE: 2144 jobs on disk
[2026-02-01T19:12:22.994Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2144
[2026-02-01T19:12:22.998Z] [BOT] 🔀 Deep merged: Associate Machine Learning Engineer @ ORG_b344d80e Walt Disney Company (disk: 1 channels → merged: 2 channels)
[2026-02-01T19:12:22.998Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2144 jobs (merged disk + memory)
[2026-02-01T19:12:22.999Z] [BOT] ✅ No jobs to archive (all 2144 jobs within 7-day window)
[2026-02-01T19:12:23.123Z] [BOT] 💾 Saved posted_jobs.json: 2144 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:24.624Z] [BOT] 📍 [ROUTING] "AI Engineer 2" @ ORG_37856574 Health
   Category: AI (matched: "machine learning")
[2026-02-01T19:12:24.624Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T19:12:24.789Z] [BOT] ✅ Posted message: AI Engineer 2 @ ORG_37856574 Health in #🤖・ai-jobs
  ✅ Industry: AI Engineer 2 @ ORG_37856574 Health
[2026-02-01T19:12:24.790Z] [BOT] 💾 Added channel posting: AI Engineer 2 @ ORG_37856574 Health → category channel (1 total channels)
[2026-02-01T19:12:24.790Z] [BOT] 💾 BEFORE MERGE: 2145 jobs in memory (cached)
[2026-02-01T19:12:24.841Z] [BOT] ✅ Loaded V2 database: 2144 jobs
💾 DISK STATE: 2144 jobs on disk
[2026-02-01T19:12:24.842Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2145
[2026-02-01T19:12:24.846Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:12:24.846Z] [BOT] 💾 AFTER MERGE: 2145 jobs (merged disk + memory)
[2026-02-01T19:12:24.847Z] [BOT] ✅ No jobs to archive (all 2145 jobs within 7-day window)
[2026-02-01T19:12:24.959Z] [BOT] 💾 Saved posted_jobs.json: 2145 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:26.711Z] [BOT] ✅ Posted message: AI Engineer 2 @ ORG_37856574 Health in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T19:12:26.712Z] [BOT] 💾 Added channel posting: AI Engineer 2 @ ORG_37856574 Health → location channel (2 total channels)
[2026-02-01T19:12:26.712Z] [BOT] 💾 BEFORE MERGE: 2145 jobs in memory (cached)
[2026-02-01T19:12:26.765Z] [BOT] ✅ Loaded V2 database: 2145 jobs
💾 DISK STATE: 2145 jobs on disk
[2026-02-01T19:12:26.766Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2145
[2026-02-01T19:12:26.769Z] [BOT] 🔀 Deep merged: AI Engineer 2 @ ORG_37856574 Health (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:12:26.769Z] [BOT] 💾 AFTER MERGE: 2145 jobs (merged disk + memory)
[2026-02-01T19:12:26.771Z] [BOT] ✅ No jobs to archive (all 2145 jobs within 7-day window)
[2026-02-01T19:12:26.886Z] [BOT] 💾 Saved posted_jobs.json: 2145 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:31.389Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-02-01T19:12:31.390Z] [BOT] 📍 [ROUTING] "Data Associate" @ ORG_b344d80e Movement Cooperative
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-02-01T19:12:31.390Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T19:12:31.391Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T19:12:31.605Z] [BOT] ✅ Posted message: Data Associate @ ORG_b344d80e Movement Cooperative in #📊・JID_fb739488
[2026-02-01T19:12:31.606Z] [BOT] ✅ Industry: Data Associate @ ORG_b344d80e Movement Cooperative
[2026-02-01T19:12:31.606Z] [BOT] 💾 Added channel posting: Data Associate @ ORG_b344d80e Movement Cooperative → category channel (1 total channels)
[2026-02-01T19:12:31.606Z] [BOT] 💾 BEFORE MERGE: 2146 jobs in memory (cached)
[2026-02-01T19:12:31.657Z] [BOT] ✅ Loaded V2 database: 2145 jobs
💾 DISK STATE: 2145 jobs on disk
[2026-02-01T19:12:31.657Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2146
[2026-02-01T19:12:31.661Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:12:31.662Z] [BOT] 💾 AFTER MERGE: 2146 jobs (merged disk + memory)
[2026-02-01T19:12:31.663Z] [BOT] ✅ No jobs to archive (all 2146 jobs within 7-day window)
[2026-02-01T19:12:31.784Z] [BOT] 💾 Saved posted_jobs.json: 2146 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:33.548Z] [BOT] ✅ Posted message: Data Associate @ ORG_b344d80e Movement Cooperative in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T19:12:33.548Z] [BOT] 💾 Added channel posting: Data Associate @ ORG_b344d80e Movement Cooperative → location channel (2 total channels)
[2026-02-01T19:12:33.548Z] [BOT] 💾 BEFORE MERGE: 2146 jobs in memory (cached)
[2026-02-01T19:12:33.600Z] [BOT] ✅ Loaded V2 database: 2146 jobs
💾 DISK STATE: 2146 jobs on disk
[2026-02-01T19:12:33.600Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2146
[2026-02-01T19:12:33.604Z] [BOT] 🔀 Deep merged: Data Associate @ ORG_b344d80e Movement Cooperative (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:12:33.604Z] [BOT] 💾 AFTER MERGE: 2146 jobs (merged disk + memory)
[2026-02-01T19:12:33.605Z] [BOT] ✅ No jobs to archive (all 2146 jobs within 7-day window)
[2026-02-01T19:12:33.729Z] [BOT] 💾 Saved posted_jobs.json: 2146 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:35.231Z] [BOT] 📍 [ROUTING] "Data Scientist 1 - Integrity" @ ORG_534e1fbb
[2026-02-01T19:12:35.232Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T19:12:35.452Z] [BOT] ✅ Posted message: Data Scientist 1 - Integrity @ ORG_534e1fbb in #📊・JID_fb739488
[2026-02-01T19:12:35.452Z] [BOT] ✅ Industry: Data Scientist 1 - Integrity @ ORG_534e1fbb
[2026-02-01T19:12:35.453Z] [BOT] 💾 Added channel posting: Data Scientist 1 - Integrity @ ORG_534e1fbb → category channel (1 total channels)
[2026-02-01T19:12:35.453Z] [BOT] 💾 BEFORE MERGE: 2147 jobs in memory (cached)
[2026-02-01T19:12:35.504Z] [BOT] ✅ Loaded V2 database: 2146 jobs
💾 DISK STATE: 2146 jobs on disk
[2026-02-01T19:12:35.505Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2147
[2026-02-01T19:12:35.508Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:12:35.508Z] [BOT] 💾 AFTER MERGE: 2147 jobs (merged disk + memory)
[2026-02-01T19:12:35.510Z] [BOT] ✅ No jobs to archive (all 2147 jobs within 7-day window)
[2026-02-01T19:12:35.618Z] [BOT] 💾 Saved posted_jobs.json: 2147 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:37.335Z] [BOT] ✅ Posted message: Data Scientist 1 - Integrity @ ORG_534e1fbb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T19:12:37.335Z] [BOT] 💾 Added channel posting: Data Scientist 1 - Integrity @ ORG_534e1fbb → location channel (2 total channels)
[2026-02-01T19:12:37.336Z] [BOT] 💾 BEFORE MERGE: 2147 jobs in memory (cached)
[2026-02-01T19:12:37.389Z] [BOT] ✅ Loaded V2 database: 2147 jobs
💾 DISK STATE: 2147 jobs on disk
[2026-02-01T19:12:37.390Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2147
[2026-02-01T19:12:37.393Z] [BOT] 🔀 Deep merged: Data Scientist 1 - Integrity @ ORG_534e1fbb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:12:37.393Z] [BOT] 💾 AFTER MERGE: 2147 jobs (merged disk + memory)
[2026-02-01T19:12:37.394Z] [BOT] ✅ No jobs to archive (all 2147 jobs within 7-day window)
[2026-02-01T19:12:37.514Z] [BOT] 💾 Saved posted_jobs.json: 2147 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:42.014Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T19:12:42.015Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c4a40f68..." not found, but found as SHA256 "629e2f9a9e656755"
[2026-02-01T19:12:42.015Z] [BOT] ⏭️  Skipping duplicate: JID_ec68a743 (posted within 7 days)
[2026-02-01T19:12:42.016Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_350dc7b1..." not found, but found as SHA256 "4a2a0e95c8945262"
[2026-02-01T19:12:42.016Z] [BOT] ⏭️  Skipping duplicate: JID_cc25fcc8 (posted within 7 days)
[2026-02-01T19:12:42.016Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3878102c..." not found, but found as SHA256 "8304ef3765865bca"
[2026-02-01T19:12:42.017Z] [BOT] ⏭️  Skipping duplicate: JID_a446bd44-_r_00044000 (posted within 7 days)
[2026-02-01T19:12:42.017Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_16445bb6..." not found, but found as SHA256 "499d511fb7fbd3d6"
[2026-02-01T19:12:42.017Z] [BOT] ⏭️  Skipping duplicate: JID_16445bb6 (posted within 7 days)
[2026-02-01T19:12:42.017Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a56f93b9..." not found, but found as SHA256 "b2a0e5957c2bd21c"
[2026-02-01T19:12:42.017Z] [BOT] ⏭️  Skipping duplicate: JID_29d4a054-engineer_10140209 (posted within 7 days)
[2026-02-01T19:12:42.018Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b539ae7b..." not found, but found as SHA256 "fcec9eda08c0d2b0"
[2026-02-01T19:12:42.018Z] [BOT] ⏭️  Skipping duplicate: JID_ff5bcaf0 (posted within 7 days)
[2026-02-01T19:12:42.018Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_08020971..." not found, but found as SHA256 "c41f36b7be31d4d0"
[2026-02-01T19:12:42.018Z] [BOT] ⏭️  Skipping duplicate: JID_cb4307d2 (posted within 7 days)
[2026-02-01T19:12:42.018Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cb01922c..." not found, but found as SHA256 "b0f1c320dad3b99d"
[2026-02-01T19:12:42.018Z] [BOT] ⏭️  Skipping duplicate: JID_edadfe67-external_career_site-JID_d401c590-mts_jr323701 (posted within 7 days)
[2026-02-01T19:12:42.019Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_379c1a47..." not found, but found as SHA256 "48036a9050d52cda"
[2026-02-01T19:12:42.019Z] [BOT] ⏭️  Skipping duplicate: JID_ea24e86d (posted within 7 days)
[2026-02-01T19:12:42.019Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a9e90755..." not found, but found as SHA256 "22b67685631e3673"
[2026-02-01T19:12:42.020Z] [BOT] ⏭️  Skipping duplicate: JID_0c2d9b4d-vcuhealth_careers-JID_c8a25921-ii_r40510 (posted within 7 days)
[2026-02-01T19:12:42.075Z] [BOT] ✅ Loaded pending queue: 783 total (757 pending, 26 enriched, 0 posted)
[2026-02-01T19:12:42.143Z] [BOT] ✅ Saved pending queue: 783 total (757 pending, 16 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T19:12:42.261Z] [BOT] 📂 Loaded 12218 existing routing entries
[2026-02-01T19:12:42.369Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12228
   Timestamp: 2026-02-01T19:12:42.326Z
[2026-02-01T19:12:42.370Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T19:12:42.370Z] [BOT] Total attempts: 44
   Successful: 20
   Failed: 0
   Skipped: 24
[2026-02-01T19:12:42.370Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T19:12:42.370Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
[2026-02-01T19:12:42.370Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🌲・JID_efdf5921: 3 posts
     3. #🌉・JID_739bbc0b: 3 posts
     4. #📍・JID_6daed763: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2026-02-01T19:12:42.371Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2147 jobs in memory (cached)
[2026-02-01T19:12:42.424Z] [BOT] ✅ Loaded V2 database: 2147 jobs
💾 DISK STATE: 2147 jobs on disk
[2026-02-01T19:12:42.425Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2147
[2026-02-01T19:12:42.429Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:12:42.429Z] [BOT] 💾 AFTER MERGE: 2147 jobs (merged disk + memory)
[2026-02-01T19:12:42.430Z] [BOT] ✅ No jobs to archive (all 2147 jobs within 7-day window)
[2026-02-01T19:12:42.545Z] [BOT] 💾 Saved posted_jobs.json: 2147 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:12:42.546Z] [BOT] ✅ Database saved successfully
[2026-02-01T19:12:44.562Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3821) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*