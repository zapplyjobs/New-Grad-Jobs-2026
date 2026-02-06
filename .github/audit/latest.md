# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T16:57:15.205Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T16:56:49.533Z] ========================================
[2026-02-06T16:56:49.535Z] Discord Bot Execution Log
[2026-02-06T16:56:49.535Z] Environment: GitHub Actions
[2026-02-06T16:56:49.535Z] Node Version: v20.20.0
[2026-02-06T16:56:49.535Z] ========================================
[2026-02-06T16:56:49.535Z] Environment Variables Check:
[2026-02-06T16:56:49.535Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T16:56:49.535Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T16:56:49.535Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T16:56:49.535Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T16:56:49.535Z] 
Multi-Channel Configuration:
[2026-02-06T16:56:49.535Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T16:56:49.535Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:56:49.536Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:56:49.536Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T16:56:49.536Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:56:49.536Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:56:49.536Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:56:49.536Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:56:49.536Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:56:49.536Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T16:56:49.536Z] 
Data Files Check:
[2026-02-06T16:56:49.537Z] .github/data/new_jobs.json: ✅ Exists (10 items, 169024 bytes)
[2026-02-06T16:56:49.595Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9409544 bytes)
[2026-02-06T16:56:49.595Z] 
========================================
[2026-02-06T16:56:49.595Z] Starting Enhanced Discord Bot...
[2026-02-06T16:56:49.595Z] ========================================
[2026-02-06T16:56:50.166Z] [BOT] ✅ Loaded V2 database: 1960 jobs
[2026-02-06T16:56:50.781Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T16:56:50.781Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T16:56:50.781Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T16:56:50.801Z] [BOT] ✅ Loaded pending queue: 222 total (172 pending, 50 enriched, 0 posted)
[2026-02-06T16:56:50.801Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T16:56:50.802Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T16:56:50.802Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T16:56:50.802Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T16:56:50.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T16:56:50.803Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T16:56:50.816Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T16:56:50.816Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
[2026-02-06T16:56:50.816Z] [BOT] 🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
[2026-02-06T16:56:50.816Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
[2026-02-06T16:56:50.817Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
[2026-02-06T16:56:50.817Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
[2026-02-06T16:56:50.817Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-06T16:56:50.817Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Manager, Product Design at figma
[2026-02-06T16:56:50.817Z] [BOT] 🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
[2026-02-06T16:56:50.817Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
[2026-02-06T16:56:50.817Z] [BOT] 🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
[2026-02-06T16:56:50.838Z] [BOT] ✅ Loaded pending queue: 222 total (172 pending, 50 enriched, 0 posted)
[2026-02-06T16:56:50.866Z] [BOT] ✅ Saved pending queue: 177 total (172 pending, 5 enriched, 0 posted)
🗑️ Removed 45 blacklisted jobs from pending queue
[2026-02-06T16:56:50.866Z] [BOT] 📋 After blacklist filter: 3 jobs (45 blacklisted)
📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-06T16:56:50.867Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-02-06T16:56:50.867Z] [BOT] ⏸️ Limiting to 10 jobs this run, 45 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T16:56:50.868Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T16:56:50.870Z] [BOT] 📍 [ROUTING] "Software Engineer Intern" @ ORG_8172eb20ines Reporting Corporation
   Category: AI (matched: "AI/ML")
[2026-02-06T16:56:50.870Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-06T16:56:50.887Z] [BOT ERROR] (node:2515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T16:56:51.285Z] [BOT] ✅ Posted message: Software Engineer Intern @ ORG_8172eb20ines Reporting Corporation in #🤖・ai-jobs
[2026-02-06T16:56:51.285Z] [BOT] ✅ Industry: Software Engineer Intern @ ORG_8172eb20ines Reporting Corporation
[2026-02-06T16:56:51.286Z] [BOT] 💾 Added channel posting: Software Engineer Intern @ ORG_8172eb20ines Reporting Corporation → category channel (1 total channels)
[2026-02-06T16:56:51.287Z] [BOT] 💾 BEFORE MERGE: 1961 jobs in memory (cached)
[2026-02-06T16:56:51.331Z] [BOT] ✅ Loaded V2 database: 1960 jobs
💾 DISK STATE: 1960 jobs on disk
[2026-02-06T16:56:51.331Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1961
[2026-02-06T16:56:51.336Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T16:56:51.336Z] [BOT] 💾 AFTER MERGE: 1961 jobs (merged disk + memory)
[2026-02-06T16:56:51.338Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T16:56:51.344Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-02-06T16:56:51.344Z] [BOT] ✅ Archiving complete: 20 archived, 1941 active
[2026-02-06T16:56:51.453Z] [BOT] 💾 Saved posted_jobs.json: 1941 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:56:53.201Z] [BOT] ✅ Posted message: Software Engineer Intern @ ORG_8172eb20ines Reporting Corporation in #📍・JID_6daed763
[2026-02-06T16:56:53.202Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T16:56:53.202Z] [BOT] 💾 Added channel posting: Software Engineer Intern @ ORG_8172eb20ines Reporting Corporation → location channel (2 total channels)
[2026-02-06T16:56:53.202Z] [BOT] 💾 BEFORE MERGE: 1941 jobs in memory (cached)
[2026-02-06T16:56:53.240Z] [BOT] ✅ Loaded V2 database: 1941 jobs
💾 DISK STATE: 1941 jobs on disk
[2026-02-06T16:56:53.241Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1941
[2026-02-06T16:56:53.245Z] [BOT] 🔀 Deep merged: Software Engineer Intern @ ORG_8172eb20ines Reporting Corporation (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T16:56:53.245Z] [BOT] 💾 AFTER MERGE: 1941 jobs (merged disk + memory)
[2026-02-06T16:56:53.246Z] [BOT] ✅ No jobs to archive (all 1941 jobs within 7-day window)
[2026-02-06T16:56:53.340Z] [BOT] 💾 Saved posted_jobs.json: 1941 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:56:57.840Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T16:56:57.841Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer Intern - Database Technologies" @ ORG_dc7620eb
   Category: TECH (matched: "software")
[2026-02-06T16:56:57.842Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T16:56:58.086Z] [BOT] ✅ Posted message: Undergrad Software Engineer Intern - Database Technologies @ ORG_dc7620eb in #💻・tech-jobs
[2026-02-06T16:56:58.086Z] [BOT] ✅ Industry: Undergrad Software Engineer Intern - Database Technologies @ ORG_dc7620eb
[2026-02-06T16:56:58.087Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer Intern - Database Technologies @ ORG_dc7620eb → category channel (1 total channels)
[2026-02-06T16:56:58.087Z] [BOT] 💾 BEFORE MERGE: 1942 jobs in memory (cached)
[2026-02-06T16:56:58.125Z] [BOT] ✅ Loaded V2 database: 1941 jobs
💾 DISK STATE: 1941 jobs on disk
[2026-02-06T16:56:58.125Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1942
[2026-02-06T16:56:58.129Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T16:56:58.130Z] [BOT] 💾 AFTER MERGE: 1942 jobs (merged disk + memory)
[2026-02-06T16:56:58.131Z] [BOT] ✅ No jobs to archive (all 1942 jobs within 7-day window)
[2026-02-06T16:56:58.235Z] [BOT] 💾 Saved posted_jobs.json: 1942 active jobs
[2026-02-06T16:56:58.238Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-06T16:57:00.077Z] [BOT] ✅ Posted message: Undergrad Software Engineer Intern - Database Technologies @ ORG_dc7620eb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T16:57:00.078Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer Intern - Database Technologies @ ORG_dc7620eb → location channel (2 total channels)
💾 BEFORE MERGE: 1942 jobs in memory (cached)
[2026-02-06T16:57:00.113Z] [BOT] ✅ Loaded V2 database: 1942 jobs
💾 DISK STATE: 1942 jobs on disk
[2026-02-06T16:57:00.113Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1942
[2026-02-06T16:57:00.117Z] [BOT] 🔀 Deep merged: Undergrad Software Engineer Intern - Database Technologies @ ORG_dc7620eb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T16:57:00.117Z] [BOT] 💾 AFTER MERGE: 1942 jobs (merged disk + memory)
[2026-02-06T16:57:00.118Z] [BOT] ✅ No jobs to archive (all 1942 jobs within 7-day window)
[2026-02-06T16:57:00.215Z] [BOT] 💾 Saved posted_jobs.json: 1942 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:57:04.717Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-06T16:57:04.719Z] [BOT] 📍 [ROUTING] "[Remote] junior data scientist/Data engineer/Software developer" @ ORG_8a194a36
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-06T16:57:04.719Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-06T16:57:04.944Z] [BOT] ✅ Posted message: [Remote] junior data scientist/Data engineer/Software developer @ ORG_8a194a36 in #📊・JID_fb739488
  ✅ Industry: [Remote] junior data scientist/Data engineer/Software developer @ ORG_8a194a36
[2026-02-06T16:57:04.945Z] [BOT] 💾 Added channel posting: [Remote] junior data scientist/Data engineer/Software developer @ ORG_8a194a36 → category channel (1 total channels)
[2026-02-06T16:57:04.945Z] [BOT] 💾 BEFORE MERGE: 1943 jobs in memory (cached)
[2026-02-06T16:57:04.982Z] [BOT] ✅ Loaded V2 database: 1942 jobs
💾 DISK STATE: 1942 jobs on disk
[2026-02-06T16:57:04.983Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1943
[2026-02-06T16:57:04.987Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T16:57:04.987Z] [BOT] 💾 AFTER MERGE: 1943 jobs (merged disk + memory)
[2026-02-06T16:57:04.988Z] [BOT] ✅ No jobs to archive (all 1943 jobs within 7-day window)
[2026-02-06T16:57:05.097Z] [BOT] 💾 Saved posted_jobs.json: 1943 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:57:06.830Z] [BOT] ✅ Posted message: [Remote] junior data scientist/Data engineer/Software developer @ ORG_8a194a36 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-06T16:57:06.830Z] [BOT] 💾 Added channel posting: [Remote] junior data scientist/Data engineer/Software developer @ ORG_8a194a36 → location channel (2 total channels)
[2026-02-06T16:57:06.830Z] [BOT] 💾 BEFORE MERGE: 1943 jobs in memory (cached)
[2026-02-06T16:57:06.870Z] [BOT] ✅ Loaded V2 database: 1943 jobs
💾 DISK STATE: 1943 jobs on disk
[2026-02-06T16:57:06.871Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1943
[2026-02-06T16:57:06.875Z] [BOT] 🔀 Deep merged: [Remote] junior data scientist/Data engineer/Software developer @ ORG_8a194a36 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T16:57:06.875Z] [BOT] 💾 AFTER MERGE: 1943 jobs (merged disk + memory)
[2026-02-06T16:57:06.876Z] [BOT] ✅ No jobs to archive (all 1943 jobs within 7-day window)
[2026-02-06T16:57:06.981Z] [BOT] 💾 Saved posted_jobs.json: 1943 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:57:11.484Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-02-06T16:57:11.486Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5a3e4e4a..." not found, but found as SHA256 "8ef2e6ac57cbcc12"
[2026-02-06T16:57:11.486Z] [BOT] ⏭️  Skipping duplicate: JID_bff5c704 (posted within 7 days)
[2026-02-06T16:57:11.486Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d07f52f..." not found, but found as SHA256 "0d37f9f5b1e2254e"
⏭️  Skipping duplicate: JID_9d07f52f (posted within 7 days)
[2026-02-06T16:57:11.486Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_737f36ae..." not found, but found as SHA256 "f4d7777e212d798e"
⏭️  Skipping duplicate: JID_0ff32aa5 (posted within 7 days)
[2026-02-06T16:57:11.497Z] [BOT] ✅ Loaded pending queue: 177 total (172 pending, 5 enriched, 0 posted)
[2026-02-06T16:57:11.512Z] [BOT] ✅ Saved pending queue: 177 total (172 pending, 2 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-02-06T16:57:11.512Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T16:57:11.630Z] [BOT] 📂 Loaded 12559 existing routing entries
[2026-02-06T16:57:11.743Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 12562
[2026-02-06T16:57:11.743Z] [BOT] Timestamp: 2026-02-06T16:57:11.701Z
[2026-02-06T16:57:11.744Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T16:57:11.744Z] [BOT] Total attempts: 53
[2026-02-06T16:57:11.744Z] [BOT] Successful: 6
   Failed: 0
   Skipped: 47
[2026-02-06T16:57:11.744Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T16:57:11.744Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 6
   Top channels:
[2026-02-06T16:57:11.744Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #📍・JID_6daed763: 1 posts
     3. #💻・tech-jobs: 1 posts
     4. #🌉・JID_739bbc0b: 1 posts
     5. #📊・JID_fb739488: 1 posts
[2026-02-06T16:57:11.745Z] [BOT] [STATS] Channel stats saved
[2026-02-06T16:57:11.745Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1943 jobs in memory (cached)
[2026-02-06T16:57:11.787Z] [BOT] ✅ Loaded V2 database: 1943 jobs
💾 DISK STATE: 1943 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1943
[2026-02-06T16:57:11.794Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T16:57:11.794Z] [BOT] 💾 AFTER MERGE: 1943 jobs (merged disk + memory)
[2026-02-06T16:57:11.799Z] [BOT] ✅ No jobs to archive (all 1943 jobs within 7-day window)
[2026-02-06T16:57:11.899Z] [BOT] 💾 Saved posted_jobs.json: 1943 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:57:11.899Z] [BOT] ✅ Database saved successfully
[2026-02-06T16:57:13.920Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*