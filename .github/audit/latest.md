# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T06:14:35.695Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 6
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T06:14:05.273Z] ========================================
[2026-02-06T06:14:05.276Z] Discord Bot Execution Log
[2026-02-06T06:14:05.276Z] Environment: GitHub Actions
[2026-02-06T06:14:05.276Z] Node Version: v20.20.0
[2026-02-06T06:14:05.276Z] ========================================
[2026-02-06T06:14:05.277Z] Environment Variables Check:
[2026-02-06T06:14:05.277Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T06:14:05.277Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T06:14:05.277Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T06:14:05.277Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T06:14:05.277Z] 
Multi-Channel Configuration:
[2026-02-06T06:14:05.277Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T06:14:05.277Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:14:05.278Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:14:05.278Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T06:14:05.278Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:14:05.278Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:14:05.278Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:14:05.278Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:14:05.278Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:14:05.278Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T06:14:05.278Z] 
Data Files Check:
[2026-02-06T06:14:05.279Z] .github/data/new_jobs.json: ✅ Exists (10 items, 168992 bytes)
[2026-02-06T06:14:05.335Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10811971 bytes)
[2026-02-06T06:14:05.336Z] 
========================================
[2026-02-06T06:14:05.336Z] Starting Enhanced Discord Bot...
[2026-02-06T06:14:05.336Z] ========================================
[2026-02-06T06:14:05.915Z] [BOT] ✅ Loaded V2 database: 2173 jobs
[2026-02-06T06:14:06.438Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T06:14:06.438Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T06:14:06.439Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T06:14:06.453Z] [BOT] ✅ Loaded pending queue: 228 total (178 pending, 50 enriched, 0 posted)
[2026-02-06T06:14:06.453Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T06:14:06.454Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-06T06:14:06.455Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T06:14:06.455Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T06:14:06.455Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T06:14:06.456Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T06:14:06.456Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T06:14:06.457Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-06T06:14:06.457Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-06T06:14:06.457Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T06:14:06.457Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T06:14:06.473Z] [BOT] 📬 Found 44 new jobs (6 already posted)...
[2026-02-06T06:14:06.474Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
[2026-02-06T06:14:06.474Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
[2026-02-06T06:14:06.474Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
[2026-02-06T06:14:06.474Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
[2026-02-06T06:14:06.474Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
[2026-02-06T06:14:06.474Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
[2026-02-06T06:14:06.475Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
[2026-02-06T06:14:06.475Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
[2026-02-06T06:14:06.475Z] [BOT] 🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
[2026-02-06T06:14:06.475Z] [BOT] 🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
[2026-02-06T06:14:06.475Z] [BOT] 🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
[2026-02-06T06:14:06.475Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
[2026-02-06T06:14:06.493Z] [BOT] ✅ Loaded pending queue: 228 total (178 pending, 50 enriched, 0 posted)
[2026-02-06T06:14:06.514Z] [BOT] ✅ Saved pending queue: 189 total (178 pending, 11 enriched, 0 posted)
🗑️ Removed 39 blacklisted jobs from pending queue
📋 After blacklist filter: 5 jobs (39 blacklisted)
[2026-02-06T06:14:06.515Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-02-06T06:14:06.515Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
⏸️ Limiting to 10 jobs this run, 39 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T06:14:06.518Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-02-06T06:14:06.519Z] [BOT] 📍 [ROUTING] "Enterprise Development Representative" @ verkada
[2026-02-06T06:14:06.519Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T06:14:06.536Z] [BOT ERROR] (node:2997) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T06:14:06.742Z] [BOT] ✅ Posted message: Enterprise Development Representative @ verkada in #💰・finance-jobs
[2026-02-06T06:14:06.742Z] [BOT] ✅ Industry: Enterprise Development Representative @ verkada
[2026-02-06T06:14:06.743Z] [BOT] 💾 Added channel posting: Enterprise Development Representative @ verkada → category channel (1 total channels)
[2026-02-06T06:14:06.743Z] [BOT] 💾 BEFORE MERGE: 2174 jobs in memory (cached)
[2026-02-06T06:14:06.784Z] [BOT] ✅ Loaded V2 database: 2173 jobs
💾 DISK STATE: 2173 jobs on disk
[2026-02-06T06:14:06.785Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2174
[2026-02-06T06:14:06.790Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T06:14:06.790Z] [BOT] 💾 AFTER MERGE: 2174 jobs (merged disk + memory)
[2026-02-06T06:14:06.791Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T06:14:06.797Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 2164 active
[2026-02-06T06:14:06.912Z] [BOT] 💾 Saved posted_jobs.json: 2164 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:14:08.416Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Colo & Networks" @ anthropic
[2026-02-06T06:14:08.416Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T06:14:08.621Z] [BOT] ✅ Posted message: Commercial Counsel, Colo & Networks @ anthropic in #💰・finance-jobs
[2026-02-06T06:14:08.621Z] [BOT] ✅ Industry: Commercial Counsel, Colo & Networks @ anthropic
[2026-02-06T06:14:08.622Z] [BOT] 💾 Added channel posting: Commercial Counsel, Colo & Networks @ anthropic → category channel (1 total channels)
[2026-02-06T06:14:08.622Z] [BOT] 💾 BEFORE MERGE: 2165 jobs in memory (cached)
[2026-02-06T06:14:08.666Z] [BOT] ✅ Loaded V2 database: 2164 jobs
[2026-02-06T06:14:08.667Z] [BOT] 💾 DISK STATE: 2164 jobs on disk
[2026-02-06T06:14:08.667Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2165
[2026-02-06T06:14:08.672Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T06:14:08.672Z] [BOT] 💾 AFTER MERGE: 2165 jobs (merged disk + memory)
[2026-02-06T06:14:08.674Z] [BOT] ✅ No jobs to archive (all 2165 jobs within 7-day window)
[2026-02-06T06:14:08.781Z] [BOT] 💾 Saved posted_jobs.json: 2165 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:14:10.472Z] [BOT] ✅ Posted message: Commercial Counsel, Colo & Networks @ anthropic in #🌉・JID_739bbc0b
[2026-02-06T06:14:10.472Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T06:14:10.472Z] [BOT] 💾 Added channel posting: Commercial Counsel, Colo & Networks @ anthropic → location channel (2 total channels)
[2026-02-06T06:14:10.472Z] [BOT] 💾 BEFORE MERGE: 2165 jobs in memory (cached)
[2026-02-06T06:14:10.509Z] [BOT] ✅ Loaded V2 database: 2165 jobs
💾 DISK STATE: 2165 jobs on disk
[2026-02-06T06:14:10.510Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2165
[2026-02-06T06:14:10.514Z] [BOT] 🔀 Deep merged: Commercial Counsel, Colo & Networks @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T06:14:10.514Z] [BOT] 💾 AFTER MERGE: 2165 jobs (merged disk + memory)
[2026-02-06T06:14:10.516Z] [BOT] ✅ No jobs to archive (all 2165 jobs within 7-day window)
[2026-02-06T06:14:10.624Z] [BOT] 💾 Saved posted_jobs.json: 2165 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:14:15.127Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T06:14:15.129Z] [BOT] 📍 [ROUTING] "Applied AI Engineer (Startups)" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-02-06T06:14:15.129Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-02-06T06:14:15.129Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-06T06:14:15.363Z] [BOT] ✅ Posted message: Applied AI Engineer (Startups) @ anthropic in #🤖・ai-jobs
[2026-02-06T06:14:15.363Z] [BOT] ✅ Industry: Applied AI Engineer (Startups) @ anthropic
[2026-02-06T06:14:15.364Z] [BOT] 💾 Added channel posting: Applied AI Engineer (Startups) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 2166 jobs in memory (cached)
[2026-02-06T06:14:15.402Z] [BOT] ✅ Loaded V2 database: 2165 jobs
💾 DISK STATE: 2165 jobs on disk
[2026-02-06T06:14:15.402Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2166
[2026-02-06T06:14:15.407Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T06:14:15.407Z] [BOT] 💾 AFTER MERGE: 2166 jobs (merged disk + memory)
[2026-02-06T06:14:15.408Z] [BOT] ✅ No jobs to archive (all 2166 jobs within 7-day window)
[2026-02-06T06:14:15.517Z] [BOT] 💾 Saved posted_jobs.json: 2166 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:14:17.200Z] [BOT] ✅ Posted message: Applied AI Engineer (Startups) @ anthropic in #🌉・JID_739bbc0b
[2026-02-06T06:14:17.200Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T06:14:17.200Z] [BOT] 💾 Added channel posting: Applied AI Engineer (Startups) @ anthropic → location channel (2 total channels)
[2026-02-06T06:14:17.200Z] [BOT] 💾 BEFORE MERGE: 2166 jobs in memory (cached)
[2026-02-06T06:14:17.245Z] [BOT] ✅ Loaded V2 database: 2166 jobs
💾 DISK STATE: 2166 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2166
[2026-02-06T06:14:17.255Z] [BOT] 🔀 Deep merged: Applied AI Engineer (Startups) @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T06:14:17.256Z] [BOT] 💾 AFTER MERGE: 2166 jobs (merged disk + memory)
[2026-02-06T06:14:17.257Z] [BOT] ✅ No jobs to archive (all 2166 jobs within 7-day window)
[2026-02-06T06:14:17.366Z] [BOT] 💾 Saved posted_jobs.json: 2166 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:14:21.866Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-06T06:14:21.868Z] [BOT] 📍 [ROUTING] "Account Executive, SLED" @ airtable
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T06:14:22.071Z] [BOT] ✅ Posted message: Account Executive, SLED @ airtable in #💻・tech-jobs
  ✅ Industry: Account Executive, SLED @ airtable
[2026-02-06T06:14:22.072Z] [BOT] 💾 Added channel posting: Account Executive, SLED @ airtable → category channel (1 total channels)
[2026-02-06T06:14:22.072Z] [BOT] 💾 BEFORE MERGE: 2167 jobs in memory (cached)
[2026-02-06T06:14:22.114Z] [BOT] ✅ Loaded V2 database: 2166 jobs
💾 DISK STATE: 2166 jobs on disk
[2026-02-06T06:14:22.115Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2167
[2026-02-06T06:14:22.121Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T06:14:22.121Z] [BOT] 💾 AFTER MERGE: 2167 jobs (merged disk + memory)
[2026-02-06T06:14:22.123Z] [BOT] ✅ No jobs to archive (all 2167 jobs within 7-day window)
[2026-02-06T06:14:22.235Z] [BOT] 💾 Saved posted_jobs.json: 2167 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:14:23.982Z] [BOT] ✅ Posted message: Account Executive, SLED @ airtable in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T06:14:23.982Z] [BOT] 💾 Added channel posting: Account Executive, SLED @ airtable → location channel (2 total channels)
[2026-02-06T06:14:23.982Z] [BOT] 💾 BEFORE MERGE: 2167 jobs in memory (cached)
[2026-02-06T06:14:24.018Z] [BOT] ✅ Loaded V2 database: 2167 jobs
💾 DISK STATE: 2167 jobs on disk
[2026-02-06T06:14:24.018Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2167
[2026-02-06T06:14:24.022Z] [BOT] 🔀 Deep merged: Account Executive, SLED @ airtable (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T06:14:24.022Z] [BOT] 💾 AFTER MERGE: 2167 jobs (merged disk + memory)
[2026-02-06T06:14:24.024Z] [BOT] ✅ No jobs to archive (all 2167 jobs within 7-day window)
[2026-02-06T06:14:24.132Z] [BOT] 💾 Saved posted_jobs.json: 2167 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:14:25.635Z] [BOT] 📍 [ROUTING] "Sales Analytics Intern" @ ORG_6c323d12
[2026-02-06T06:14:25.635Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T06:14:25.812Z] [BOT] ✅ Posted message: Sales Analytics Intern @ ORG_6c323d12 in #💻・tech-jobs
[2026-02-06T06:14:25.813Z] [BOT] ✅ Industry: Sales Analytics Intern @ ORG_6c323d12
[2026-02-06T06:14:25.813Z] [BOT] 💾 Added channel posting: Sales Analytics Intern @ ORG_6c323d12 → category channel (1 total channels)
[2026-02-06T06:14:25.814Z] [BOT] 💾 BEFORE MERGE: 2168 jobs in memory (cached)
[2026-02-06T06:14:25.849Z] [BOT] ✅ Loaded V2 database: 2167 jobs
💾 DISK STATE: 2167 jobs on disk
[2026-02-06T06:14:25.850Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2168
[2026-02-06T06:14:25.854Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T06:14:25.854Z] [BOT] 💾 AFTER MERGE: 2168 jobs (merged disk + memory)
[2026-02-06T06:14:25.856Z] [BOT] ✅ No jobs to archive (all 2168 jobs within 7-day window)
[2026-02-06T06:14:25.959Z] [BOT] 💾 Saved posted_jobs.json: 2168 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:14:27.644Z] [BOT] ✅ Posted message: Sales Analytics Intern @ ORG_6c323d12 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-06T06:14:27.645Z] [BOT] 💾 Added channel posting: Sales Analytics Intern @ ORG_6c323d12 → location channel (2 total channels)
[2026-02-06T06:14:27.645Z] [BOT] 💾 BEFORE MERGE: 2168 jobs in memory (cached)
[2026-02-06T06:14:27.683Z] [BOT] ✅ Loaded V2 database: 2168 jobs
💾 DISK STATE: 2168 jobs on disk
[2026-02-06T06:14:27.683Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2168
[2026-02-06T06:14:27.688Z] [BOT] 🔀 Deep merged: Sales Analytics Intern @ ORG_6c323d12 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T06:14:27.688Z] [BOT] 💾 AFTER MERGE: 2168 jobs (merged disk + memory)
[2026-02-06T06:14:27.689Z] [BOT] ✅ No jobs to archive (all 2168 jobs within 7-day window)
[2026-02-06T06:14:27.797Z] [BOT] 💾 Saved posted_jobs.json: 2168 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:14:32.299Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-02-06T06:14:32.300Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "a2378f7efeee689d"
[2026-02-06T06:14:32.300Z] [BOT] ⏭️  Skipping duplicate: JID_ce87da78 (posted within 7 days)
[2026-02-06T06:14:32.301Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "4feddc338d9cd197"
[2026-02-06T06:14:32.301Z] [BOT] ⏭️  Skipping duplicate: JID_ef49bed9 (posted within 7 days)
[2026-02-06T06:14:32.301Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "46655020d51c7f4e"
⏭️  Skipping duplicate: JID_c9e10682 (posted within 7 days)
[2026-02-06T06:14:32.302Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "6dacb871910f4b4d"
[2026-02-06T06:14:32.302Z] [BOT] ⏭️  Skipping duplicate: JID_34247f54 (posted within 7 days)
[2026-02-06T06:14:32.302Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fb5d2377..." not found, but found as SHA256 "858e3bba7ab408f1"
⏭️  Skipping duplicate: JID_6f5f8e4d (posted within 7 days)
[2026-02-06T06:14:32.312Z] [BOT] ✅ Loaded pending queue: 189 total (178 pending, 11 enriched, 0 posted)
[2026-02-06T06:14:32.329Z] [BOT] ✅ Saved pending queue: 189 total (178 pending, 6 enriched, 5 posted)
[2026-02-06T06:14:32.329Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T06:14:32.422Z] [BOT] 📂 Loaded 12494 existing routing entries
[2026-02-06T06:14:32.568Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-06T06:14:32.568Z] [BOT] New entries: 5
   Total entries: 12499
   Timestamp: 2026-02-06T06:14:32.507Z
[2026-02-06T06:14:32.569Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T06:14:32.569Z] [BOT] Total attempts: 54
   Successful: 9
   Failed: 0
   Skipped: 45
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 9
   Channels used: 5
   Top channels:
     1. #🌉・JID_739bbc0b: 3 posts
     2. #💰・finance-jobs: 2 posts
     3. #💻・tech-jobs: 2 posts
     4. #🤖・ai-jobs: 1 posts
[2026-02-06T06:14:32.570Z] [BOT] 5. #🏠・JID_ead674af: 1 posts
[2026-02-06T06:14:32.570Z] [BOT] [STATS] Channel stats saved
[2026-02-06T06:14:32.570Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2168 jobs in memory (cached)
[2026-02-06T06:14:32.621Z] [BOT] ✅ Loaded V2 database: 2168 jobs
💾 DISK STATE: 2168 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2168
[2026-02-06T06:14:32.631Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2168 jobs (merged disk + memory)
[2026-02-06T06:14:32.632Z] [BOT] ✅ No jobs to archive (all 2168 jobs within 7-day window)
[2026-02-06T06:14:32.751Z] [BOT] 💾 Saved posted_jobs.json: 2168 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T06:14:34.774Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2997) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*