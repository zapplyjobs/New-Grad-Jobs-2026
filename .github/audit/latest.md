# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T12:29:09.495Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T12:28:42.772Z] ========================================
[2026-02-06T12:28:42.774Z] Discord Bot Execution Log
[2026-02-06T12:28:42.774Z] Environment: GitHub Actions
[2026-02-06T12:28:42.774Z] Node Version: v20.20.0
[2026-02-06T12:28:42.774Z] ========================================
[2026-02-06T12:28:42.774Z] Environment Variables Check:
[2026-02-06T12:28:42.774Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T12:28:42.774Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T12:28:42.774Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T12:28:42.774Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T12:28:42.775Z] 
Multi-Channel Configuration:
[2026-02-06T12:28:42.775Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T12:28:42.775Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:28:42.775Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:28:42.775Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T12:28:42.775Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:28:42.775Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:28:42.775Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:28:42.775Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:28:42.775Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:28:42.775Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T12:28:42.775Z] 
Data Files Check:
[2026-02-06T12:28:42.777Z] .github/data/new_jobs.json: ✅ Exists (10 items, 171912 bytes)
[2026-02-06T12:28:42.836Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9866454 bytes)
[2026-02-06T12:28:42.837Z] 
========================================
[2026-02-06T12:28:42.837Z] Starting Enhanced Discord Bot...
[2026-02-06T12:28:42.837Z] ========================================
[2026-02-06T12:28:43.398Z] [BOT] ✅ Loaded V2 database: 2034 jobs
[2026-02-06T12:28:43.763Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T12:28:43.763Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T12:28:43.764Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T12:28:43.778Z] [BOT] ✅ Loaded pending queue: 223 total (173 pending, 50 enriched, 0 posted)
[2026-02-06T12:28:43.778Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T12:28:43.779Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T12:28:43.779Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-06T12:28:43.779Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T12:28:43.780Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T12:28:43.781Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
[2026-02-06T12:28:43.781Z] [BOT] ⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T12:28:43.798Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T12:28:43.798Z] [BOT] 🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-06T12:28:43.798Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
[2026-02-06T12:28:43.798Z] [BOT] 🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
[2026-02-06T12:28:43.798Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-06T12:28:43.798Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-06T12:28:43.799Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-06T12:28:43.799Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-02-06T12:28:43.799Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T12:28:43.799Z] [BOT] 🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
[2026-02-06T12:28:43.799Z] [BOT] 🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
[2026-02-06T12:28:43.799Z] [BOT] 🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
[2026-02-06T12:28:43.799Z] [BOT] 🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T12:28:43.799Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
[2026-02-06T12:28:43.813Z] [BOT] ✅ Loaded pending queue: 223 total (173 pending, 50 enriched, 0 posted)
[2026-02-06T12:28:43.837Z] [BOT] ✅ Saved pending queue: 182 total (173 pending, 9 enriched, 0 posted)
🗑️ Removed 41 blacklisted jobs from pending queue
[2026-02-06T12:28:43.837Z] [BOT] 📋 After blacklist filter: 5 jobs (41 blacklisted)
📋 After data quality filter: 5 jobs (0 invalid)
[2026-02-06T12:28:43.838Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-02-06T12:28:43.838Z] [BOT] ⏸️ Limiting to 10 jobs this run, 41 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T12:28:43.841Z] [BOT] 📌 Posting 3 jobs to #💰・finance-jobs
[2026-02-06T12:28:43.842Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
[2026-02-06T12:28:43.842Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T12:28:43.859Z] [BOT ERROR] (node:2624) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T12:28:44.289Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
[2026-02-06T12:28:44.290Z] [BOT] ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-02-06T12:28:44.291Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-02-06T12:28:44.291Z] [BOT] 💾 BEFORE MERGE: 2035 jobs in memory (cached)
[2026-02-06T12:28:44.329Z] [BOT] ✅ Loaded V2 database: 2034 jobs
💾 DISK STATE: 2034 jobs on disk
[2026-02-06T12:28:44.329Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2035
[2026-02-06T12:28:44.334Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T12:28:44.334Z] [BOT] 💾 AFTER MERGE: 2035 jobs (merged disk + memory)
[2026-02-06T12:28:44.336Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T12:28:44.341Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 2025 active
[2026-02-06T12:28:44.456Z] [BOT] 💾 Saved posted_jobs.json: 2025 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:28:45.959Z] [BOT] 📍 [ROUTING] "Enterprise Sales Account Executive,  State" @ verkada
[2026-02-06T12:28:45.959Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T12:28:46.196Z] [BOT] ✅ Posted message: Enterprise Sales Account Executive,  State @ verkada in #💰・finance-jobs
[2026-02-06T12:28:46.196Z] [BOT] ✅ Industry: Enterprise Sales Account Executive,  State @ verkada
[2026-02-06T12:28:46.197Z] [BOT] 💾 Added channel posting: Enterprise Sales Account Executive,  State @ verkada → category channel (1 total channels)
[2026-02-06T12:28:46.197Z] [BOT] 💾 BEFORE MERGE: 2026 jobs in memory (cached)
[2026-02-06T12:28:46.232Z] [BOT] ✅ Loaded V2 database: 2025 jobs
[2026-02-06T12:28:46.232Z] [BOT] 💾 DISK STATE: 2025 jobs on disk
[2026-02-06T12:28:46.233Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2026
[2026-02-06T12:28:46.237Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T12:28:46.237Z] [BOT] 💾 AFTER MERGE: 2026 jobs (merged disk + memory)
[2026-02-06T12:28:46.238Z] [BOT] ✅ No jobs to archive (all 2026 jobs within 7-day window)
[2026-02-06T12:28:46.348Z] [BOT] 💾 Saved posted_jobs.json: 2026 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:28:47.848Z] [BOT] 📍 [ROUTING] "Enterprise Sales Account Executive,  State (Virginia)" @ verkada
[2026-02-06T12:28:47.848Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T12:28:48.003Z] [BOT] ✅ Posted message: Enterprise Sales Account Executive,  State (Virginia) @ verkada in #💰・finance-jobs
[2026-02-06T12:28:48.004Z] [BOT] ✅ Industry: Enterprise Sales Account Executive,  State (Virginia) @ verkada
[2026-02-06T12:28:48.004Z] [BOT] 💾 Added channel posting: Enterprise Sales Account Executive,  State (Virginia) @ verkada → category channel (1 total channels)
[2026-02-06T12:28:48.004Z] [BOT] 💾 BEFORE MERGE: 2027 jobs in memory (cached)
[2026-02-06T12:28:48.037Z] [BOT] ✅ Loaded V2 database: 2026 jobs
💾 DISK STATE: 2026 jobs on disk
[2026-02-06T12:28:48.038Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2027
[2026-02-06T12:28:48.042Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T12:28:48.042Z] [BOT] 💾 AFTER MERGE: 2027 jobs (merged disk + memory)
[2026-02-06T12:28:48.043Z] [BOT] ✅ No jobs to archive (all 2027 jobs within 7-day window)
[2026-02-06T12:28:48.139Z] [BOT] 💾 Saved posted_jobs.json: 2027 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:28:52.643Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T12:28:52.644Z] [BOT] 📍 [ROUTING] "Nurse Extern I - Nursing Internship - PRN" @ ORG_402a0ea8 Health
   Category: TECH (default)
[2026-02-06T12:28:52.644Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T12:28:52.973Z] [BOT] ✅ Posted message: Nurse Extern I - Nursing Internship - PRN @ ORG_402a0ea8 Health in #💻・tech-jobs
[2026-02-06T12:28:52.973Z] [BOT] ✅ Industry: Nurse Extern I - Nursing Internship - PRN @ ORG_402a0ea8 Health
[2026-02-06T12:28:52.974Z] [BOT] 💾 Added channel posting: Nurse Extern I - Nursing Internship - PRN @ ORG_402a0ea8 Health → category channel (1 total channels)
[2026-02-06T12:28:52.974Z] [BOT] 💾 BEFORE MERGE: 2028 jobs in memory (cached)
[2026-02-06T12:28:53.008Z] [BOT] ✅ Loaded V2 database: 2027 jobs
💾 DISK STATE: 2027 jobs on disk
[2026-02-06T12:28:53.008Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2028
[2026-02-06T12:28:53.012Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T12:28:53.012Z] [BOT] 💾 AFTER MERGE: 2028 jobs (merged disk + memory)
[2026-02-06T12:28:53.013Z] [BOT] ✅ No jobs to archive (all 2028 jobs within 7-day window)
[2026-02-06T12:28:53.122Z] [BOT] 💾 Saved posted_jobs.json: 2028 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:28:55.013Z] [BOT] ✅ Posted message: Nurse Extern I - Nursing Internship - PRN @ ORG_402a0ea8 Health in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T12:28:55.014Z] [BOT] 💾 Added channel posting: Nurse Extern I - Nursing Internship - PRN @ ORG_402a0ea8 Health → location channel (2 total channels)
[2026-02-06T12:28:55.014Z] [BOT] 💾 BEFORE MERGE: 2028 jobs in memory (cached)
[2026-02-06T12:28:55.049Z] [BOT] ✅ Loaded V2 database: 2028 jobs
💾 DISK STATE: 2028 jobs on disk
[2026-02-06T12:28:55.050Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2028
[2026-02-06T12:28:55.054Z] [BOT] 🔀 Deep merged: Nurse Extern I - Nursing Internship - PRN @ ORG_402a0ea8 Health (disk: 1 channels → merged: 2 channels)
[2026-02-06T12:28:55.054Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2028 jobs (merged disk + memory)
[2026-02-06T12:28:55.055Z] [BOT] ✅ No jobs to archive (all 2028 jobs within 7-day window)
[2026-02-06T12:28:55.164Z] [BOT] 💾 Saved posted_jobs.json: 2028 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:28:59.662Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-06T12:28:59.664Z] [BOT] 📍 [ROUTING] "Analytics Undergrad Intern" @ Org_Subtype_BU023_Global_Services
[2026-02-06T12:28:59.664Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-06T12:28:59.664Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-06T12:28:59.848Z] [BOT] ✅ Posted message: Analytics Undergrad Intern @ Org_Subtype_BU023_Global_Services in #📊・JID_fb739488
[2026-02-06T12:28:59.848Z] [BOT] ✅ Industry: Analytics Undergrad Intern @ Org_Subtype_BU023_Global_Services
[2026-02-06T12:28:59.849Z] [BOT] 💾 Added channel posting: Analytics Undergrad Intern @ Org_Subtype_BU023_Global_Services → category channel (1 total channels)
[2026-02-06T12:28:59.849Z] [BOT] 💾 BEFORE MERGE: 2029 jobs in memory (cached)
[2026-02-06T12:28:59.882Z] [BOT] ✅ Loaded V2 database: 2028 jobs
💾 DISK STATE: 2028 jobs on disk
[2026-02-06T12:28:59.882Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2029
[2026-02-06T12:28:59.886Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T12:28:59.887Z] [BOT] 💾 AFTER MERGE: 2029 jobs (merged disk + memory)
[2026-02-06T12:28:59.888Z] [BOT] ✅ No jobs to archive (all 2029 jobs within 7-day window)
[2026-02-06T12:28:59.990Z] [BOT] 💾 Saved posted_jobs.json: 2029 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:29:01.653Z] [BOT] ✅ Posted message: Analytics Undergrad Intern @ Org_Subtype_BU023_Global_Services in #📍・JID_6daed763
[2026-02-06T12:29:01.653Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T12:29:01.653Z] [BOT] 💾 Added channel posting: Analytics Undergrad Intern @ Org_Subtype_BU023_Global_Services → location channel (2 total channels)
[2026-02-06T12:29:01.653Z] [BOT] 💾 BEFORE MERGE: 2029 jobs in memory (cached)
[2026-02-06T12:29:01.689Z] [BOT] ✅ Loaded V2 database: 2029 jobs
💾 DISK STATE: 2029 jobs on disk
[2026-02-06T12:29:01.692Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2029
[2026-02-06T12:29:01.701Z] [BOT] 🔀 Deep merged: Analytics Undergrad Intern @ Org_Subtype_BU023_Global_Services (disk: 1 channels → merged: 2 channels)
[2026-02-06T12:29:01.701Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2029 jobs (merged disk + memory)
[2026-02-06T12:29:01.704Z] [BOT] ✅ No jobs to archive (all 2029 jobs within 7-day window)
[2026-02-06T12:29:01.808Z] [BOT] 💾 Saved posted_jobs.json: 2029 active jobs
[2026-02-06T12:29:01.808Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-06T12:29:06.308Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-02-06T12:29:06.310Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b6a7840..." not found, but found as SHA256 "d043a70eda2ac052"
[2026-02-06T12:29:06.310Z] [BOT] ⏭️  Skipping duplicate: JID_aa50da2e (posted within 7 days)
[2026-02-06T12:29:06.310Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "fec4890377d06a1b"
⏭️  Skipping duplicate: JID_1b21d62b (posted within 7 days)
[2026-02-06T12:29:06.310Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "4390f164f3590ca2"
[2026-02-06T12:29:06.311Z] [BOT] ⏭️  Skipping duplicate: JID_5ba604a3 (posted within 7 days)
[2026-02-06T12:29:06.311Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e54bc5a3..." not found, but found as SHA256 "bdc60d7c4b6a40af"
[2026-02-06T12:29:06.311Z] [BOT] ⏭️  Skipping duplicate: JID_e54bc5a3 (posted within 7 days)
[2026-02-06T12:29:06.311Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c76922c9..." not found, but found as SHA256 "bb48789a6bca130b"
[2026-02-06T12:29:06.311Z] [BOT] ⏭️  Skipping duplicate: JID_0ba7ba4f (posted within 7 days)
[2026-02-06T12:29:06.321Z] [BOT] ✅ Loaded pending queue: 182 total (173 pending, 9 enriched, 0 posted)
[2026-02-06T12:29:06.337Z] [BOT] ✅ Saved pending queue: 182 total (173 pending, 4 enriched, 5 posted)
[2026-02-06T12:29:06.338Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T12:29:06.446Z] [BOT] 📂 Loaded 12535 existing routing entries
[2026-02-06T12:29:06.567Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-02-06T12:29:06.567Z] [BOT] Total entries: 12540
   Timestamp: 2026-02-06T12:29:06.514Z
[2026-02-06T12:29:06.567Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T12:29:06.567Z] [BOT] Total attempts: 52
   Successful: 7
   Failed: 0
   Skipped: 45
[2026-02-06T12:29:06.568Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T12:29:06.568Z] [BOT] Last cleanup: Never
   Total posts: 7
   Channels used: 4
   Top channels:
[2026-02-06T12:29:06.568Z] [BOT] 1. #💰・finance-jobs: 3 posts
     2. #📍・JID_6daed763: 2 posts
     3. #💻・tech-jobs: 1 posts
     4. #📊・JID_fb739488: 1 posts
[2026-02-06T12:29:06.568Z] [BOT] [STATS] Channel stats saved
[2026-02-06T12:29:06.568Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2029 jobs in memory (cached)
[2026-02-06T12:29:06.617Z] [BOT] ✅ Loaded V2 database: 2029 jobs
💾 DISK STATE: 2029 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2029
[2026-02-06T12:29:06.622Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T12:29:06.623Z] [BOT] 💾 AFTER MERGE: 2029 jobs (merged disk + memory)
[2026-02-06T12:29:06.624Z] [BOT] ✅ No jobs to archive (all 2029 jobs within 7-day window)
[2026-02-06T12:29:06.738Z] [BOT] 💾 Saved posted_jobs.json: 2029 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T12:29:08.757Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2624) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*