# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T18:56:02.661Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T18:55:14.197Z] ========================================
[2026-02-01T18:55:14.199Z] Discord Bot Execution Log
[2026-02-01T18:55:14.199Z] Environment: GitHub Actions
[2026-02-01T18:55:14.199Z] Node Version: v20.20.0
[2026-02-01T18:55:14.199Z] ========================================
[2026-02-01T18:55:14.199Z] Environment Variables Check:
[2026-02-01T18:55:14.199Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T18:55:14.199Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T18:55:14.199Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T18:55:14.200Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T18:55:14.200Z] 
Multi-Channel Configuration:
[2026-02-01T18:55:14.200Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T18:55:14.200Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:55:14.200Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:55:14.200Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T18:55:14.200Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:55:14.200Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:55:14.200Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:55:14.200Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:55:14.200Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:55:14.200Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T18:55:14.200Z] 
Data Files Check:
[2026-02-01T18:55:14.201Z] .github/data/new_jobs.json: ✅ Exists (10 items, 72930 bytes)
[2026-02-01T18:55:14.255Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10592252 bytes)
[2026-02-01T18:55:14.255Z] 
========================================
[2026-02-01T18:55:14.255Z] Starting Enhanced Discord Bot...
[2026-02-01T18:55:14.255Z] ========================================
[2026-02-01T18:55:14.852Z] [BOT] ✅ Loaded V2 database: 2127 jobs
[2026-02-01T18:55:15.663Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T18:55:15.663Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T18:55:15.664Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T18:55:15.713Z] [BOT] ✅ Loaded pending queue: 820 total (770 pending, 50 enriched, 0 posted)
[2026-02-01T18:55:15.713Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer – New Grad at Palantir
[2026-02-01T18:55:15.733Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T18:55:15.734Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
[2026-02-01T18:55:15.734Z] [BOT] 🚫 Skipping blacklisted job: Manager, Commercial Promotion Partnerships at spotify
[2026-02-01T18:55:15.734Z] [BOT] 🚫 Skipping blacklisted job: Associate Director, Monetization Strategy at spotify
🚫 Skipping blacklisted job: Mid-Market Customer Success Manager at brex
🚫 Skipping blacklisted job: Mid-Market Customer Success Manager at brex
[2026-02-01T18:55:15.734Z] [BOT] 🚫 Skipping blacklisted job: Mid-Market Customer Success Manager at brex
[2026-02-01T18:55:15.735Z] [BOT] 🚫 Skipping blacklisted job: Senior Operations Data Analyst at 84.51 Degrees
🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
[2026-02-01T18:55:15.735Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
[2026-02-01T18:55:15.735Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
[2026-02-01T18:55:15.735Z] [BOT] 🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
🚫 Skipping blacklisted job: Data Center Physical Security Lead at anthropic
🚫 Skipping blacklisted job: Data Center Strategic Sourcing Lead at anthropic
[2026-02-01T18:55:15.735Z] [BOT] 🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
[2026-02-01T18:55:15.735Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Services at anthropic
[2026-02-01T18:55:15.791Z] [BOT] ✅ Loaded pending queue: 820 total (770 pending, 50 enriched, 0 posted)
[2026-02-01T18:55:15.866Z] [BOT] ✅ Saved pending queue: 797 total (770 pending, 27 enriched, 0 posted)
[2026-02-01T18:55:15.867Z] [BOT] 🗑️ Removed 23 blacklisted jobs from pending queue
📋 After blacklist filter: 27 jobs (23 blacklisted)
📋 After data quality filter: 27 jobs (0 invalid)
[2026-02-01T18:55:15.868Z] [BOT] 📋 After multi-location grouping: 25 unique jobs to post
[2026-02-01T18:55:15.868Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer – New Grad @ Palantir: seattle, new york, denver
[2026-02-01T18:55:15.868Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T18:55:15.871Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T18:55:15.872Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_f56b7436
[2026-02-01T18:55:15.872Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:55:15.890Z] [BOT ERROR] (node:4052) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T18:55:17.603Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_f56b7436 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad @ ORG_f56b7436
[2026-02-01T18:55:17.605Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_f56b7436 → category channel (1 total channels)
[2026-02-01T18:55:17.605Z] [BOT] 💾 BEFORE MERGE: 2128 jobs in memory (cached)
[2026-02-01T18:55:17.654Z] [BOT] ✅ Loaded V2 database: 2127 jobs
💾 DISK STATE: 2127 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2128
[2026-02-01T18:55:17.660Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:55:17.660Z] [BOT] 💾 AFTER MERGE: 2128 jobs (merged disk + memory)
[2026-02-01T18:55:17.662Z] [BOT] ✅ No jobs to archive (all 2128 jobs within 7-day window)
[2026-02-01T18:55:17.807Z] [BOT] 💾 Saved posted_jobs.json: 2128 active jobs
[2026-02-01T18:55:17.808Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:19.490Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_f56b7436 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T18:55:19.490Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_f56b7436 → location channel (2 total channels)
[2026-02-01T18:55:19.490Z] [BOT] 💾 BEFORE MERGE: 2128 jobs in memory (cached)
[2026-02-01T18:55:19.528Z] [BOT] ✅ Loaded V2 database: 2128 jobs
[2026-02-01T18:55:19.528Z] [BOT] 💾 DISK STATE: 2128 jobs on disk
[2026-02-01T18:55:19.528Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2128
[2026-02-01T18:55:19.533Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad @ ORG_f56b7436 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:55:19.533Z] [BOT] 💾 AFTER MERGE: 2128 jobs (merged disk + memory)
[2026-02-01T18:55:19.535Z] [BOT] ✅ No jobs to archive (all 2128 jobs within 7-day window)
[2026-02-01T18:55:19.644Z] [BOT] 💾 Saved posted_jobs.json: 2128 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:21.147Z] [BOT] 📍 [ROUTING] "Software Engineer – Entry Level" @ ORG_c910d474 Dynamics Mission Systems
[2026-02-01T18:55:21.147Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:55:21.296Z] [BOT] ✅ Posted message: Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2026-02-01T18:55:21.296Z] [BOT] ✅ Industry: Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems
[2026-02-01T18:55:21.297Z] [BOT] 💾 Added channel posting: Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems → category channel (1 total channels)
[2026-02-01T18:55:21.297Z] [BOT] 💾 BEFORE MERGE: 2129 jobs in memory (cached)
[2026-02-01T18:55:21.332Z] [BOT] ✅ Loaded V2 database: 2128 jobs
💾 DISK STATE: 2128 jobs on disk
[2026-02-01T18:55:21.333Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2129
[2026-02-01T18:55:21.337Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:55:21.337Z] [BOT] 💾 AFTER MERGE: 2129 jobs (merged disk + memory)
[2026-02-01T18:55:21.339Z] [BOT] ✅ No jobs to archive (all 2129 jobs within 7-day window)
[2026-02-01T18:55:21.445Z] [BOT] 💾 Saved posted_jobs.json: 2129 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:23.198Z] [BOT] ✅ Posted message: Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems in #📍・JID_6daed763
[2026-02-01T18:55:23.198Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T18:55:23.198Z] [BOT] 💾 Added channel posting: Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems → location channel (2 total channels)
[2026-02-01T18:55:23.198Z] [BOT] 💾 BEFORE MERGE: 2129 jobs in memory (cached)
[2026-02-01T18:55:23.236Z] [BOT] ✅ Loaded V2 database: 2129 jobs
💾 DISK STATE: 2129 jobs on disk
[2026-02-01T18:55:23.237Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2129
[2026-02-01T18:55:23.241Z] [BOT] 🔀 Deep merged: Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:55:23.241Z] [BOT] 💾 AFTER MERGE: 2129 jobs (merged disk + memory)
[2026-02-01T18:55:23.243Z] [BOT] ✅ No jobs to archive (all 2129 jobs within 7-day window)
[2026-02-01T18:55:23.362Z] [BOT] 💾 Saved posted_jobs.json: 2129 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:24.862Z] [BOT] 📍 [ROUTING] "Asset & Wealth Management - Software Engineer - Associate" @ ORG_d49bddaa Sachs
   Category: TECH (matched: "software")
[2026-02-01T18:55:24.862Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:55:25.094Z] [BOT] ✅ Posted message: Asset & Wealth Management - Software Engineer - Associate @ ORG_d49bddaa Sachs in #💻・tech-jobs
  ✅ Industry: Asset & Wealth Management - Software Engineer - Associate @ ORG_d49bddaa Sachs
[2026-02-01T18:55:25.096Z] [BOT] 💾 Added channel posting: Asset & Wealth Management - Software Engineer - Associate @ ORG_d49bddaa Sachs → category channel (1 total channels)
[2026-02-01T18:55:25.096Z] [BOT] 💾 BEFORE MERGE: 2130 jobs in memory (cached)
[2026-02-01T18:55:25.132Z] [BOT] ✅ Loaded V2 database: 2129 jobs
💾 DISK STATE: 2129 jobs on disk
[2026-02-01T18:55:25.132Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2130
[2026-02-01T18:55:25.137Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:55:25.137Z] [BOT] 💾 AFTER MERGE: 2130 jobs (merged disk + memory)
[2026-02-01T18:55:25.138Z] [BOT] ✅ No jobs to archive (all 2130 jobs within 7-day window)
[2026-02-01T18:55:25.244Z] [BOT] 💾 Saved posted_jobs.json: 2130 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:27.000Z] [BOT] ✅ Posted message: Asset & Wealth Management - Software Engineer - Associate @ ORG_d49bddaa Sachs in #🗽・JID_98d4f0de
[2026-02-01T18:55:27.000Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T18:55:27.001Z] [BOT] 💾 Added channel posting: Asset & Wealth Management - Software Engineer - Associate @ ORG_d49bddaa Sachs → location channel (2 total channels)
[2026-02-01T18:55:27.001Z] [BOT] 💾 BEFORE MERGE: 2130 jobs in memory (cached)
[2026-02-01T18:55:27.039Z] [BOT] ✅ Loaded V2 database: 2130 jobs
💾 DISK STATE: 2130 jobs on disk
[2026-02-01T18:55:27.039Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2130
[2026-02-01T18:55:27.044Z] [BOT] 🔀 Deep merged: Asset & Wealth Management - Software Engineer - Associate @ ORG_d49bddaa Sachs (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:55:27.044Z] [BOT] 💾 AFTER MERGE: 2130 jobs (merged disk + memory)
[2026-02-01T18:55:27.045Z] [BOT] ✅ No jobs to archive (all 2130 jobs within 7-day window)
[2026-02-01T18:55:27.165Z] [BOT] 💾 Saved posted_jobs.json: 2130 active jobs
[2026-02-01T18:55:27.165Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:28.667Z] [BOT] 📍 [ROUTING] "Application Engineer - Industrial OE Ame" @ MANN+HUMMEL
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:55:28.879Z] [BOT] ✅ Posted message: Application Engineer - Industrial OE Ame @ MANN+HUMMEL in #💻・tech-jobs
  ✅ Industry: Application Engineer - Industrial OE Ame @ MANN+HUMMEL
[2026-02-01T18:55:28.880Z] [BOT] 💾 Added channel posting: Application Engineer - Industrial OE Ame @ MANN+HUMMEL → category channel (1 total channels)
[2026-02-01T18:55:28.880Z] [BOT] 💾 BEFORE MERGE: 2131 jobs in memory (cached)
[2026-02-01T18:55:28.917Z] [BOT] ✅ Loaded V2 database: 2130 jobs
💾 DISK STATE: 2130 jobs on disk
[2026-02-01T18:55:28.918Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2131
[2026-02-01T18:55:28.924Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:55:28.924Z] [BOT] 💾 AFTER MERGE: 2131 jobs (merged disk + memory)
[2026-02-01T18:55:28.926Z] [BOT] ✅ No jobs to archive (all 2131 jobs within 7-day window)
[2026-02-01T18:55:29.033Z] [BOT] 💾 Saved posted_jobs.json: 2131 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:30.675Z] [BOT] ✅ Posted message: Application Engineer - Industrial OE Ame @ MANN+HUMMEL in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T18:55:30.676Z] [BOT] 💾 Added channel posting: Application Engineer - Industrial OE Ame @ MANN+HUMMEL → location channel (2 total channels)
[2026-02-01T18:55:30.676Z] [BOT] 💾 BEFORE MERGE: 2131 jobs in memory (cached)
[2026-02-01T18:55:30.714Z] [BOT] ✅ Loaded V2 database: 2131 jobs
💾 DISK STATE: 2131 jobs on disk
[2026-02-01T18:55:30.715Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2131
[2026-02-01T18:55:30.719Z] [BOT] 🔀 Deep merged: Application Engineer - Industrial OE Ame @ MANN+HUMMEL (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:55:30.719Z] [BOT] 💾 AFTER MERGE: 2131 jobs (merged disk + memory)
[2026-02-01T18:55:30.720Z] [BOT] ✅ No jobs to archive (all 2131 jobs within 7-day window)
[2026-02-01T18:55:30.826Z] [BOT] 💾 Saved posted_jobs.json: 2131 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:32.327Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_1550f0e6 ABLOY
   Category: TECH (matched: "software")
[2026-02-01T18:55:32.328Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:55:32.560Z] [BOT] ✅ Posted message: Software Developer @ ORG_1550f0e6 ABLOY in #💻・tech-jobs
[2026-02-01T18:55:32.560Z] [BOT] ✅ Industry: Software Developer @ ORG_1550f0e6 ABLOY
[2026-02-01T18:55:32.561Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_1550f0e6 ABLOY → category channel (1 total channels)
[2026-02-01T18:55:32.561Z] [BOT] 💾 BEFORE MERGE: 2132 jobs in memory (cached)
[2026-02-01T18:55:32.607Z] [BOT] ✅ Loaded V2 database: 2131 jobs
💾 DISK STATE: 2131 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2132
[2026-02-01T18:55:32.617Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:55:32.618Z] [BOT] 💾 AFTER MERGE: 2132 jobs (merged disk + memory)
[2026-02-01T18:55:32.619Z] [BOT] ✅ No jobs to archive (all 2132 jobs within 7-day window)
[2026-02-01T18:55:32.721Z] [BOT] 💾 Saved posted_jobs.json: 2132 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:34.369Z] [BOT] ✅ Posted message: Software Developer @ ORG_1550f0e6 ABLOY in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T18:55:34.369Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_1550f0e6 ABLOY → location channel (2 total channels)
[2026-02-01T18:55:34.369Z] [BOT] 💾 BEFORE MERGE: 2132 jobs in memory (cached)
[2026-02-01T18:55:34.407Z] [BOT] ✅ Loaded V2 database: 2132 jobs
[2026-02-01T18:55:34.408Z] [BOT] 💾 DISK STATE: 2132 jobs on disk
[2026-02-01T18:55:34.408Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2132
[2026-02-01T18:55:34.412Z] [BOT] 🔀 Deep merged: Software Developer @ ORG_1550f0e6 ABLOY (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:55:34.412Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2132 jobs (merged disk + memory)
[2026-02-01T18:55:34.413Z] [BOT] ✅ No jobs to archive (all 2132 jobs within 7-day window)
[2026-02-01T18:55:34.531Z] [BOT] 💾 Saved posted_jobs.json: 2132 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:36.033Z] [BOT] 📍 [ROUTING] "New Grad 2026 - Technology - Software Development" @ ORG_d021e8e8 Financial Holdings
[2026-02-01T18:55:36.033Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:55:36.205Z] [BOT] ✅ Posted message: New Grad 2026 - Technology - Software Development @ ORG_d021e8e8 Financial Holdings in #💻・tech-jobs
[2026-02-01T18:55:36.205Z] [BOT] ✅ Industry: New Grad 2026 - Technology - Software Development @ ORG_d021e8e8 Financial Holdings
[2026-02-01T18:55:36.206Z] [BOT] 💾 Added channel posting: New Grad 2026 - Technology - Software Development @ ORG_d021e8e8 Financial Holdings → category channel (1 total channels)
[2026-02-01T18:55:36.206Z] [BOT] 💾 BEFORE MERGE: 2133 jobs in memory (cached)
[2026-02-01T18:55:36.241Z] [BOT] ✅ Loaded V2 database: 2132 jobs
💾 DISK STATE: 2132 jobs on disk
[2026-02-01T18:55:36.241Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2133
[2026-02-01T18:55:36.245Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:55:36.245Z] [BOT] 💾 AFTER MERGE: 2133 jobs (merged disk + memory)
[2026-02-01T18:55:36.246Z] [BOT] ✅ No jobs to archive (all 2133 jobs within 7-day window)
[2026-02-01T18:55:36.345Z] [BOT] 💾 Saved posted_jobs.json: 2133 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:37.847Z] [BOT] 📍 [ROUTING] "Engineering Associate - Middleware Operations" @ ORG_332e04b7 Fargo
[2026-02-01T18:55:37.847Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:55:38.090Z] [BOT] ✅ Posted message: Engineering Associate - Middleware Operations @ ORG_332e04b7 Fargo in #💻・tech-jobs
[2026-02-01T18:55:38.090Z] [BOT] ✅ Industry: Engineering Associate - Middleware Operations @ ORG_332e04b7 Fargo
[2026-02-01T18:55:38.091Z] [BOT] 💾 Added channel posting: Engineering Associate - Middleware Operations @ ORG_332e04b7 Fargo → category channel (1 total channels)
[2026-02-01T18:55:38.091Z] [BOT] 💾 BEFORE MERGE: 2134 jobs in memory (cached)
[2026-02-01T18:55:38.129Z] [BOT] ✅ Loaded V2 database: 2133 jobs
💾 DISK STATE: 2133 jobs on disk
[2026-02-01T18:55:38.129Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2134
[2026-02-01T18:55:38.133Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:55:38.133Z] [BOT] 💾 AFTER MERGE: 2134 jobs (merged disk + memory)
[2026-02-01T18:55:38.134Z] [BOT] ✅ No jobs to archive (all 2134 jobs within 7-day window)
[2026-02-01T18:55:38.240Z] [BOT] 💾 Saved posted_jobs.json: 2134 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:39.922Z] [BOT] ✅ Posted message: Engineering Associate - Middleware Operations @ ORG_332e04b7 Fargo in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T18:55:39.923Z] [BOT] 💾 Added channel posting: Engineering Associate - Middleware Operations @ ORG_332e04b7 Fargo → location channel (2 total channels)
[2026-02-01T18:55:39.923Z] [BOT] 💾 BEFORE MERGE: 2134 jobs in memory (cached)
[2026-02-01T18:55:39.961Z] [BOT] ✅ Loaded V2 database: 2134 jobs
💾 DISK STATE: 2134 jobs on disk
[2026-02-01T18:55:39.962Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2134
[2026-02-01T18:55:39.965Z] [BOT] 🔀 Deep merged: Engineering Associate - Middleware Operations @ ORG_332e04b7 Fargo (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:55:39.966Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2134 jobs (merged disk + memory)
[2026-02-01T18:55:39.967Z] [BOT] ✅ No jobs to archive (all 2134 jobs within 7-day window)
[2026-02-01T18:55:40.078Z] [BOT] 💾 Saved posted_jobs.json: 2134 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:44.581Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-01T18:55:44.582Z] [BOT] 📍 [ROUTING] "Early Career Research Engineer" @ ORG_d97c0909 Web Systems
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T18:55:44.582Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T18:55:44.957Z] [BOT] ✅ Posted message: Early Career Research Engineer @ ORG_d97c0909 Web Systems in #🤖・ai-jobs
  ✅ Industry: Early Career Research Engineer @ ORG_d97c0909 Web Systems
[2026-02-01T18:55:44.958Z] [BOT] 💾 Added channel posting: Early Career Research Engineer @ ORG_d97c0909 Web Systems → category channel (1 total channels)
[2026-02-01T18:55:44.958Z] [BOT] 💾 BEFORE MERGE: 2135 jobs in memory (cached)
[2026-02-01T18:55:44.993Z] [BOT] ✅ Loaded V2 database: 2134 jobs
💾 DISK STATE: 2134 jobs on disk
[2026-02-01T18:55:44.994Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2135
[2026-02-01T18:55:44.998Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:55:44.998Z] [BOT] 💾 AFTER MERGE: 2135 jobs (merged disk + memory)
[2026-02-01T18:55:44.999Z] [BOT] ✅ No jobs to archive (all 2135 jobs within 7-day window)
[2026-02-01T18:55:45.110Z] [BOT] 💾 Saved posted_jobs.json: 2135 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:46.881Z] [BOT] ✅ Posted message: Early Career Research Engineer @ ORG_d97c0909 Web Systems in #🌉・JID_739bbc0b
[2026-02-01T18:55:46.881Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T18:55:46.882Z] [BOT] 💾 Added channel posting: Early Career Research Engineer @ ORG_d97c0909 Web Systems → location channel (2 total channels)
[2026-02-01T18:55:46.882Z] [BOT] 💾 BEFORE MERGE: 2135 jobs in memory (cached)
[2026-02-01T18:55:46.920Z] [BOT] ✅ Loaded V2 database: 2135 jobs
💾 DISK STATE: 2135 jobs on disk
[2026-02-01T18:55:46.920Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2135
[2026-02-01T18:55:46.924Z] [BOT] 🔀 Deep merged: Early Career Research Engineer @ ORG_d97c0909 Web Systems (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:55:46.924Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2135 jobs (merged disk + memory)
[2026-02-01T18:55:46.925Z] [BOT] ✅ No jobs to archive (all 2135 jobs within 7-day window)
[2026-02-01T18:55:47.047Z] [BOT] 💾 Saved posted_jobs.json: 2135 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:48.547Z] [BOT] 📍 [ROUTING] "CNO Analyst/Programmer" @ ORG_8b09cf05
   Category: AI (matched: "artificial intelligence")
[2026-02-01T18:55:48.547Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T18:55:48.776Z] [BOT] ✅ Posted message: CNO Analyst/Programmer @ ORG_8b09cf05 in #🤖・ai-jobs
  ✅ Industry: CNO Analyst/Programmer @ ORG_8b09cf05
[2026-02-01T18:55:48.777Z] [BOT] 💾 Added channel posting: CNO Analyst/Programmer @ ORG_8b09cf05 → category channel (1 total channels)
[2026-02-01T18:55:48.777Z] [BOT] 💾 BEFORE MERGE: 2136 jobs in memory (cached)
[2026-02-01T18:55:48.813Z] [BOT] ✅ Loaded V2 database: 2135 jobs
💾 DISK STATE: 2135 jobs on disk
[2026-02-01T18:55:48.813Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2136
[2026-02-01T18:55:48.817Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:55:48.817Z] [BOT] 💾 AFTER MERGE: 2136 jobs (merged disk + memory)
[2026-02-01T18:55:48.818Z] [BOT] ✅ No jobs to archive (all 2136 jobs within 7-day window)
[2026-02-01T18:55:48.919Z] [BOT] 💾 Saved posted_jobs.json: 2136 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:50.628Z] [BOT] ✅ Posted message: CNO Analyst/Programmer @ ORG_8b09cf05 in #📍・JID_6daed763
[2026-02-01T18:55:50.628Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T18:55:50.628Z] [BOT] 💾 Added channel posting: CNO Analyst/Programmer @ ORG_8b09cf05 → location channel (2 total channels)
[2026-02-01T18:55:50.629Z] [BOT] 💾 BEFORE MERGE: 2136 jobs in memory (cached)
[2026-02-01T18:55:50.666Z] [BOT] ✅ Loaded V2 database: 2136 jobs
💾 DISK STATE: 2136 jobs on disk
[2026-02-01T18:55:50.667Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2136
[2026-02-01T18:55:50.670Z] [BOT] 🔀 Deep merged: CNO Analyst/Programmer @ ORG_8b09cf05 (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:55:50.671Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2136 jobs (merged disk + memory)
[2026-02-01T18:55:50.672Z] [BOT] ✅ No jobs to archive (all 2136 jobs within 7-day window)
[2026-02-01T18:55:50.778Z] [BOT] 💾 Saved posted_jobs.json: 2136 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:52.279Z] [BOT] 📍 [ROUTING] "AI Machine Learning Engineer 2" @ ORG_aa669b28
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T18:55:52.279Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T18:55:52.526Z] [BOT] ✅ Posted message: AI Machine Learning Engineer 2 @ ORG_aa669b28 in #🤖・ai-jobs
  ✅ Industry: AI Machine Learning Engineer 2 @ ORG_aa669b28
[2026-02-01T18:55:52.527Z] [BOT] 💾 Added channel posting: AI Machine Learning Engineer 2 @ ORG_aa669b28 → category channel (1 total channels)
[2026-02-01T18:55:52.527Z] [BOT] 💾 BEFORE MERGE: 2137 jobs in memory (cached)
[2026-02-01T18:55:52.565Z] [BOT] ✅ Loaded V2 database: 2136 jobs
💾 DISK STATE: 2136 jobs on disk
[2026-02-01T18:55:52.565Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2137
[2026-02-01T18:55:52.569Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:55:52.569Z] [BOT] 💾 AFTER MERGE: 2137 jobs (merged disk + memory)
[2026-02-01T18:55:52.571Z] [BOT] ✅ No jobs to archive (all 2137 jobs within 7-day window)
[2026-02-01T18:55:52.677Z] [BOT] 💾 Saved posted_jobs.json: 2137 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:54.419Z] [BOT] ✅ Posted message: AI Machine Learning Engineer 2 @ ORG_aa669b28 in #🌉・JID_739bbc0b
[2026-02-01T18:55:54.419Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T18:55:54.419Z] [BOT] 💾 Added channel posting: AI Machine Learning Engineer 2 @ ORG_aa669b28 → location channel (2 total channels)
[2026-02-01T18:55:54.420Z] [BOT] 💾 BEFORE MERGE: 2137 jobs in memory (cached)
[2026-02-01T18:55:54.467Z] [BOT] ✅ Loaded V2 database: 2137 jobs
💾 DISK STATE: 2137 jobs on disk
[2026-02-01T18:55:54.468Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2137
[2026-02-01T18:55:54.472Z] [BOT] 🔀 Deep merged: AI Machine Learning Engineer 2 @ ORG_aa669b28 (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:55:54.472Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2137 jobs (merged disk + memory)
[2026-02-01T18:55:54.473Z] [BOT] ✅ No jobs to archive (all 2137 jobs within 7-day window)
[2026-02-01T18:55:54.586Z] [BOT] 💾 Saved posted_jobs.json: 2137 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:59.086Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T18:55:59.088Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_85f72610..." not found, but found as SHA256 "18085e3552e4def8"
[2026-02-01T18:55:59.088Z] [BOT] ⏭️  Skipping duplicate: JID_05a8d836 (posted within 7 days)
[2026-02-01T18:55:59.089Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_34b3c00a-..." not found, but found as SHA256 "34097aecf9f01363"
⏭️  Skipping duplicate: JID_e8cee011 (posted within 7 days)
[2026-02-01T18:55:59.089Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b9a59ae7..." not found, but found as SHA256 "ead9d53bf90f853b"
⏭️  Skipping duplicate: JID_d521d1ff (posted within 7 days)
[2026-02-01T18:55:59.089Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_76c187e1..." not found, but found as SHA256 "d668c4712415caee"
[2026-02-01T18:55:59.090Z] [BOT] ⏭️  Skipping duplicate: JID_76c187e1 (posted within 7 days)
[2026-02-01T18:55:59.090Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_80ea3032..." not found, but found as SHA256 "2283519a65ae2631"
⏭️  Skipping duplicate: JID_80ea3032 (posted within 7 days)
[2026-02-01T18:55:59.090Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_70fcbf14..." not found, but found as SHA256 "fceb5da92d1bde0c"
[2026-02-01T18:55:59.090Z] [BOT] ⏭️  Skipping duplicate: JID_a499259c (posted within 7 days)
[2026-02-01T18:55:59.090Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_74eada2b..." not found, but found as SHA256 "0e54777c03759921"
[2026-02-01T18:55:59.090Z] [BOT] ⏭️  Skipping duplicate: JID_6f96ceb6 (posted within 7 days)
[2026-02-01T18:55:59.091Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_42b8d223..." not found, but found as SHA256 "3ae862c8bc540972"
[2026-02-01T18:55:59.091Z] [BOT] ⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
[2026-02-01T18:55:59.091Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1b96a442..." not found, but found as SHA256 "9f5ca3cb5f0f435b"
[2026-02-01T18:55:59.091Z] [BOT] ⏭️  Skipping duplicate: JID_96bd2ed5-development_r-046207-1 (posted within 7 days)
[2026-02-01T18:55:59.091Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_07047103..." not found, but found as SHA256 "98b45956c1d8d9ad"
⏭️  Skipping duplicate: JID_d8de0dba-operations_r-518252 (posted within 7 days)
[2026-02-01T18:55:59.131Z] [BOT] ✅ Loaded pending queue: 797 total (770 pending, 27 enriched, 0 posted)
[2026-02-01T18:55:59.210Z] [BOT] ✅ Saved pending queue: 797 total (770 pending, 17 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T18:55:59.210Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T18:55:59.304Z] [BOT] 📂 Loaded 12208 existing routing entries
[2026-02-01T18:55:59.460Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T18:55:59.461Z] [BOT] New entries: 10
   Total entries: 12218
   Timestamp: 2026-02-01T18:55:59.398Z
[2026-02-01T18:55:59.461Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T18:55:59.461Z] [BOT] Total attempts: 42
   Successful: 19
   Failed: 0
   Skipped: 23
[2026-02-01T18:55:59.462Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #📍・JID_6daed763: 5 posts
     3. #🤖・ai-jobs: 3 posts
[2026-02-01T18:55:59.462Z] [BOT] 4. #🌉・JID_739bbc0b: 2 posts
     5. #🌲・JID_efdf5921: 1 posts
[2026-02-01T18:55:59.462Z] [BOT] [STATS] Channel stats saved
[2026-02-01T18:55:59.462Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2137 jobs in memory (cached)
[2026-02-01T18:55:59.503Z] [BOT] ✅ Loaded V2 database: 2137 jobs
💾 DISK STATE: 2137 jobs on disk
[2026-02-01T18:55:59.503Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2137
[2026-02-01T18:55:59.507Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:55:59.507Z] [BOT] 💾 AFTER MERGE: 2137 jobs (merged disk + memory)
[2026-02-01T18:55:59.509Z] [BOT] ✅ No jobs to archive (all 2137 jobs within 7-day window)
[2026-02-01T18:55:59.610Z] [BOT] 💾 Saved posted_jobs.json: 2137 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:55:59.610Z] [BOT] ✅ Database saved successfully
[2026-02-01T18:56:01.643Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4052) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*