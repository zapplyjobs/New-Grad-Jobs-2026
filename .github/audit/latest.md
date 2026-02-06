# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T20:23:14.988Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T20:22:42.001Z] ========================================
[2026-02-06T20:22:42.003Z] Discord Bot Execution Log
[2026-02-06T20:22:42.003Z] Environment: GitHub Actions
[2026-02-06T20:22:42.003Z] Node Version: v20.20.0
[2026-02-06T20:22:42.003Z] ========================================
[2026-02-06T20:22:42.003Z] Environment Variables Check:
[2026-02-06T20:22:42.003Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T20:22:42.003Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T20:22:42.003Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T20:22:42.003Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T20:22:42.004Z] 
Multi-Channel Configuration:
[2026-02-06T20:22:42.004Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T20:22:42.004Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:22:42.004Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:22:42.004Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T20:22:42.004Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:22:42.004Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:22:42.004Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:22:42.004Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:22:42.004Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:22:42.004Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T20:22:42.004Z] 
Data Files Check:
[2026-02-06T20:22:42.006Z] .github/data/new_jobs.json: ✅ Exists (10 items, 179162 bytes)
[2026-02-06T20:22:42.058Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8877291 bytes)
[2026-02-06T20:22:42.058Z] 
========================================
[2026-02-06T20:22:42.058Z] Starting Enhanced Discord Bot...
[2026-02-06T20:22:42.058Z] ========================================
[2026-02-06T20:22:42.626Z] [BOT] ✅ Loaded V2 database: 1885 jobs
[2026-02-06T20:22:43.289Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T20:22:43.290Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T20:22:43.290Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T20:22:43.315Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-06T20:22:43.315Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T20:22:43.316Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T20:22:43.316Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T20:22:43.317Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T20:22:43.317Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T20:22:43.334Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T20:22:43.334Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
[2026-02-06T20:22:43.334Z] [BOT] 🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
[2026-02-06T20:22:43.335Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-06T20:22:43.335Z] [BOT] 🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
[2026-02-06T20:22:43.335Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-06T20:22:43.335Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-06T20:22:43.335Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
[2026-02-06T20:22:43.335Z] [BOT] 🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
[2026-02-06T20:22:43.335Z] [BOT] 🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
[2026-02-06T20:22:43.335Z] [BOT] 🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-06T20:22:43.335Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-06T20:22:43.336Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Senior Web Producer Manager at airtable
🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
[2026-02-06T20:22:43.336Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
[2026-02-06T20:22:43.352Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-06T20:22:43.378Z] [BOT] ✅ Saved pending queue: 176 total (169 pending, 7 enriched, 0 posted)
🗑️ Removed 43 blacklisted jobs from pending queue
[2026-02-06T20:22:43.378Z] [BOT] 📋 After blacklist filter: 5 jobs (43 blacklisted)
📋 After data quality filter: 5 jobs (0 invalid)
[2026-02-06T20:22:43.379Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-02-06T20:22:43.379Z] [BOT] ⏸️ Limiting to 10 jobs this run, 43 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T20:22:43.381Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-06T20:22:43.383Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant" @ samsara
   Category: TECH (default)
[2026-02-06T20:22:43.383Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T20:22:43.400Z] [BOT ERROR] (node:2819) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T20:22:43.730Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant @ samsara in #💻・tech-jobs
[2026-02-06T20:22:43.730Z] [BOT] ✅ Industry: Enterprise Implementation Consultant @ samsara
[2026-02-06T20:22:43.731Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant @ samsara → category channel (1 total channels)
[2026-02-06T20:22:43.731Z] [BOT] 💾 BEFORE MERGE: 1886 jobs in memory (cached)
[2026-02-06T20:22:43.765Z] [BOT] ✅ Loaded V2 database: 1885 jobs
💾 DISK STATE: 1885 jobs on disk
[2026-02-06T20:22:43.765Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1886
[2026-02-06T20:22:43.773Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T20:22:43.773Z] [BOT] 💾 AFTER MERGE: 1886 jobs (merged disk + memory)
[2026-02-06T20:22:43.775Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T20:22:43.781Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T20:22:43.781Z] [BOT] ✅ Archiving complete: 10 archived, 1876 active
[2026-02-06T20:22:43.891Z] [BOT] 💾 Saved posted_jobs.json: 1876 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:22:45.624Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant @ samsara in #🏠・JID_ead674af
[2026-02-06T20:22:45.624Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-06T20:22:45.624Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant @ samsara → location channel (2 total channels)
[2026-02-06T20:22:45.624Z] [BOT] 💾 BEFORE MERGE: 1876 jobs in memory (cached)
[2026-02-06T20:22:45.652Z] [BOT] ✅ Loaded V2 database: 1876 jobs
💾 DISK STATE: 1876 jobs on disk
[2026-02-06T20:22:45.653Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1876
[2026-02-06T20:22:45.660Z] [BOT] 🔀 Deep merged: Enterprise Implementation Consultant @ samsara (disk: 1 channels → merged: 2 channels)
[2026-02-06T20:22:45.661Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1876 jobs (merged disk + memory)
[2026-02-06T20:22:45.662Z] [BOT] ✅ No jobs to archive (all 1876 jobs within 7-day window)
[2026-02-06T20:22:45.746Z] [BOT] 💾 Saved posted_jobs.json: 1876 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:22:47.248Z] [BOT] 📍 [ROUTING] "Software Engineer – Intern" @ ORG_bbdad7eb Careers
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T20:22:47.868Z] [BOT] ✅ Posted message: Software Engineer – Intern @ ORG_bbdad7eb Careers in #💻・tech-jobs
  ✅ Industry: Software Engineer – Intern @ ORG_bbdad7eb Careers
[2026-02-06T20:22:47.869Z] [BOT] 💾 Added channel posting: Software Engineer – Intern @ ORG_bbdad7eb Careers → category channel (1 total channels)
[2026-02-06T20:22:47.869Z] [BOT] 💾 BEFORE MERGE: 1877 jobs in memory (cached)
[2026-02-06T20:22:47.896Z] [BOT] ✅ Loaded V2 database: 1876 jobs
💾 DISK STATE: 1876 jobs on disk
[2026-02-06T20:22:47.897Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1877
[2026-02-06T20:22:47.904Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T20:22:47.904Z] [BOT] 💾 AFTER MERGE: 1877 jobs (merged disk + memory)
[2026-02-06T20:22:47.905Z] [BOT] ✅ No jobs to archive (all 1877 jobs within 7-day window)
[2026-02-06T20:22:47.999Z] [BOT] 💾 Saved posted_jobs.json: 1877 active jobs
[2026-02-06T20:22:48.000Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-06T20:22:49.672Z] [BOT] ✅ Posted message: Software Engineer – Intern @ ORG_bbdad7eb Careers in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T20:22:49.673Z] [BOT] 💾 Added channel posting: Software Engineer – Intern @ ORG_bbdad7eb Careers → location channel (2 total channels)
[2026-02-06T20:22:49.673Z] [BOT] 💾 BEFORE MERGE: 1877 jobs in memory (cached)
[2026-02-06T20:22:49.702Z] [BOT] ✅ Loaded V2 database: 1877 jobs
💾 DISK STATE: 1877 jobs on disk
[2026-02-06T20:22:49.702Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1877
[2026-02-06T20:22:49.708Z] [BOT] 🔀 Deep merged: Software Engineer – Intern @ ORG_bbdad7eb Careers (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T20:22:49.708Z] [BOT] 💾 AFTER MERGE: 1877 jobs (merged disk + memory)
[2026-02-06T20:22:49.709Z] [BOT] ✅ No jobs to archive (all 1877 jobs within 7-day window)
[2026-02-06T20:22:49.789Z] [BOT] 💾 Saved posted_jobs.json: 1877 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:22:54.291Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T20:22:54.292Z] [BOT] 📍 [ROUTING] "Java Software Engineer Intern - Oracle Health & Analytics - Full-time" @ ORG_dc7620eb
[2026-02-06T20:22:54.292Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-06T20:22:54.626Z] [BOT] ✅ Posted message: Java Software Engineer Intern - Oracle Health & Analytics - Full-time @ ORG_dc7620eb in #🤖・ai-jobs
[2026-02-06T20:22:54.626Z] [BOT] ✅ Industry: Java Software Engineer Intern - Oracle Health & Analytics - Full-time @ ORG_dc7620eb
[2026-02-06T20:22:54.627Z] [BOT] 💾 Added channel posting: Java Software Engineer Intern - Oracle Health & Analytics - Full-time @ ORG_dc7620eb → category channel (1 total channels)
[2026-02-06T20:22:54.627Z] [BOT] 💾 BEFORE MERGE: 1878 jobs in memory (cached)
[2026-02-06T20:22:54.655Z] [BOT] ✅ Loaded V2 database: 1877 jobs
💾 DISK STATE: 1877 jobs on disk
[2026-02-06T20:22:54.656Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1878
[2026-02-06T20:22:54.661Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T20:22:54.661Z] [BOT] 💾 AFTER MERGE: 1878 jobs (merged disk + memory)
[2026-02-06T20:22:54.662Z] [BOT] ✅ No jobs to archive (all 1878 jobs within 7-day window)
[2026-02-06T20:22:54.747Z] [BOT] 💾 Saved posted_jobs.json: 1878 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:22:56.543Z] [BOT] ✅ Posted message: Java Software Engineer Intern - Oracle Health & Analytics - Full-time @ ORG_dc7620eb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T20:22:56.544Z] [BOT] 💾 Added channel posting: Java Software Engineer Intern - Oracle Health & Analytics - Full-time @ ORG_dc7620eb → location channel (2 total channels)
[2026-02-06T20:22:56.544Z] [BOT] 💾 BEFORE MERGE: 1878 jobs in memory (cached)
[2026-02-06T20:22:56.581Z] [BOT] ✅ Loaded V2 database: 1878 jobs
💾 DISK STATE: 1878 jobs on disk
[2026-02-06T20:22:56.582Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1878
[2026-02-06T20:22:56.589Z] [BOT] 🔀 Deep merged: Java Software Engineer Intern - Oracle Health & Analytics - Full-time @ ORG_dc7620eb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T20:22:56.589Z] [BOT] 💾 AFTER MERGE: 1878 jobs (merged disk + memory)
[2026-02-06T20:22:56.590Z] [BOT] ✅ No jobs to archive (all 1878 jobs within 7-day window)
[2026-02-06T20:22:56.676Z] [BOT] 💾 Saved posted_jobs.json: 1878 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:23:01.178Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-02-06T20:23:01.180Z] [BOT] 📍 [ROUTING] "Legal Counsel" @ figma
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-06T20:23:01.407Z] [BOT] ✅ Posted message: Legal Counsel @ figma in #📊・JID_fb739488
[2026-02-06T20:23:01.408Z] [BOT] ✅ Industry: Legal Counsel @ figma
[2026-02-06T20:23:01.408Z] [BOT] 💾 Added channel posting: Legal Counsel @ figma → category channel (1 total channels)
[2026-02-06T20:23:01.408Z] [BOT] 💾 BEFORE MERGE: 1879 jobs in memory (cached)
[2026-02-06T20:23:01.436Z] [BOT] ✅ Loaded V2 database: 1878 jobs
💾 DISK STATE: 1878 jobs on disk
[2026-02-06T20:23:01.437Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1879
[2026-02-06T20:23:01.444Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T20:23:01.444Z] [BOT] 💾 AFTER MERGE: 1879 jobs (merged disk + memory)
[2026-02-06T20:23:01.445Z] [BOT] ✅ No jobs to archive (all 1879 jobs within 7-day window)
[2026-02-06T20:23:01.542Z] [BOT] 💾 Saved posted_jobs.json: 1879 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:23:03.378Z] [BOT] ✅ Posted message: Legal Counsel @ figma in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T20:23:03.379Z] [BOT] 💾 Added channel posting: Legal Counsel @ figma → location channel (2 total channels)
[2026-02-06T20:23:03.379Z] [BOT] 💾 BEFORE MERGE: 1879 jobs in memory (cached)
[2026-02-06T20:23:03.407Z] [BOT] ✅ Loaded V2 database: 1879 jobs
[2026-02-06T20:23:03.407Z] [BOT] 💾 DISK STATE: 1879 jobs on disk
[2026-02-06T20:23:03.407Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1879
[2026-02-06T20:23:03.412Z] [BOT] 🔀 Deep merged: Legal Counsel @ figma (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T20:23:03.413Z] [BOT] 💾 AFTER MERGE: 1879 jobs (merged disk + memory)
[2026-02-06T20:23:03.414Z] [BOT] ✅ No jobs to archive (all 1879 jobs within 7-day window)
[2026-02-06T20:23:03.493Z] [BOT] 💾 Saved posted_jobs.json: 1879 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:23:04.996Z] [BOT] 📍 [ROUTING] "Internships in Data Science, Math, Statistics or Operations Research" @ ORG_b344d80e MITRE Corporation
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-06T20:23:04.996Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-06T20:23:05.196Z] [BOT] ✅ Posted message: Internships in Data Science, Math, Statistics or Operations Research @ ORG_b344d80e MITRE Corporation in #📊・JID_fb739488
  ✅ Industry: Internships in Data Science, Math, Statistics or Operations Research @ ORG_b344d80e MITRE Corporation
[2026-02-06T20:23:05.197Z] [BOT] 💾 Added channel posting: Internships in Data Science, Math, Statistics or Operations Research @ ORG_b344d80e MITRE Corporation → category channel (1 total channels)
[2026-02-06T20:23:05.197Z] [BOT] 💾 BEFORE MERGE: 1880 jobs in memory (cached)
[2026-02-06T20:23:05.238Z] [BOT] ✅ Loaded V2 database: 1879 jobs
💾 DISK STATE: 1879 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1880
[2026-02-06T20:23:05.242Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T20:23:05.242Z] [BOT] 💾 AFTER MERGE: 1880 jobs (merged disk + memory)
[2026-02-06T20:23:05.243Z] [BOT] ✅ No jobs to archive (all 1880 jobs within 7-day window)
[2026-02-06T20:23:05.326Z] [BOT] 💾 Saved posted_jobs.json: 1880 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:23:07.123Z] [BOT] ✅ Posted message: Internships in Data Science, Math, Statistics or Operations Research @ ORG_b344d80e MITRE Corporation in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T20:23:07.123Z] [BOT] 💾 Added channel posting: Internships in Data Science, Math, Statistics or Operations Research @ ORG_b344d80e MITRE Corporation → location channel (2 total channels)
[2026-02-06T20:23:07.123Z] [BOT] 💾 BEFORE MERGE: 1880 jobs in memory (cached)
[2026-02-06T20:23:07.152Z] [BOT] ✅ Loaded V2 database: 1880 jobs
💾 DISK STATE: 1880 jobs on disk
[2026-02-06T20:23:07.152Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1880
[2026-02-06T20:23:07.159Z] [BOT] 🔀 Deep merged: Internships in Data Science, Math, Statistics or Operations Research @ ORG_b344d80e MITRE Corporation (disk: 1 channels → merged: 2 channels)
[2026-02-06T20:23:07.159Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1880 jobs (merged disk + memory)
[2026-02-06T20:23:07.160Z] [BOT] ✅ No jobs to archive (all 1880 jobs within 7-day window)
[2026-02-06T20:23:07.246Z] [BOT] 💾 Saved posted_jobs.json: 1880 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:23:11.747Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-02-06T20:23:11.749Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a2fbe3e..." not found, but found as SHA256 "b3a5dd1b34e789c1"
⏭️  Skipping duplicate: JID_ff256bbe (posted within 7 days)
[2026-02-06T20:23:11.749Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_61b8f08f..." not found, but found as SHA256 "da6e79feb0d7f085"
[2026-02-06T20:23:11.749Z] [BOT] ⏭️  Skipping duplicate: JID_61b8f08f (posted within 7 days)
[2026-02-06T20:23:11.750Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3bbf9653..." not found, but found as SHA256 "93dec56dab4fe7e2"
⏭️  Skipping duplicate: JID_3cbe1c89 (posted within 7 days)
[2026-02-06T20:23:11.750Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ae1f31de..." not found, but found as SHA256 "d02d168e74876b22"
⏭️  Skipping duplicate: JID_53bb5c56 (posted within 7 days)
[2026-02-06T20:23:11.750Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_35a8ab82..." not found, but found as SHA256 "9875365c117ce1fb"
[2026-02-06T20:23:11.750Z] [BOT] ⏭️  Skipping duplicate: JID_db20f4d7 (posted within 7 days)
[2026-02-06T20:23:11.760Z] [BOT] ✅ Loaded pending queue: 176 total (169 pending, 7 enriched, 0 posted)
[2026-02-06T20:23:11.777Z] [BOT] ✅ Saved pending queue: 176 total (169 pending, 2 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T20:23:11.874Z] [BOT] 📂 Loaded 12589 existing routing entries
[2026-02-06T20:23:12.013Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-02-06T20:23:12.014Z] [BOT] Total entries: 12594
   Timestamp: 2026-02-06T20:23:11.961Z
[2026-02-06T20:23:12.014Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 55
   Successful: 10
   Failed: 0
   Skipped: 45
[2026-02-06T20:23:12.015Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-02-06T20:23:12.015Z] [BOT] Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #📍・JID_6daed763: 2 posts
     3. #🌉・JID_739bbc0b: 2 posts
     4. #📊・JID_fb739488: 2 posts
     5. #🏠・JID_ead674af: 1 posts
[STATS] Channel stats saved
[2026-02-06T20:23:12.015Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1880 jobs in memory (cached)
[2026-02-06T20:23:12.060Z] [BOT] ✅ Loaded V2 database: 1880 jobs
💾 DISK STATE: 1880 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1880
[2026-02-06T20:23:12.063Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T20:23:12.063Z] [BOT] 💾 AFTER MERGE: 1880 jobs (merged disk + memory)
[2026-02-06T20:23:12.065Z] [BOT] ✅ No jobs to archive (all 1880 jobs within 7-day window)
[2026-02-06T20:23:12.150Z] [BOT] 💾 Saved posted_jobs.json: 1880 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:23:12.150Z] [BOT] ✅ Database saved successfully
[2026-02-06T20:23:14.174Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2819) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*