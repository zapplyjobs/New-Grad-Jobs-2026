# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T09:01:36.873Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T09:01:14.960Z] ========================================
[2026-02-02T09:01:14.962Z] Discord Bot Execution Log
[2026-02-02T09:01:14.962Z] Environment: GitHub Actions
[2026-02-02T09:01:14.962Z] Node Version: v20.20.0
[2026-02-02T09:01:14.962Z] ========================================
[2026-02-02T09:01:14.962Z] Environment Variables Check:
[2026-02-02T09:01:14.962Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T09:01:14.962Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T09:01:14.962Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T09:01:14.963Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T09:01:14.963Z] 
Multi-Channel Configuration:
[2026-02-02T09:01:14.963Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T09:01:14.963Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T09:01:14.963Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T09:01:14.963Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T09:01:14.963Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T09:01:14.963Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T09:01:14.963Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T09:01:14.963Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T09:01:14.963Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T09:01:14.963Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T09:01:14.963Z] 
Data Files Check:
[2026-02-02T09:01:14.965Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152266 bytes)
[2026-02-02T09:01:15.023Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11165524 bytes)
[2026-02-02T09:01:15.023Z] 
========================================
[2026-02-02T09:01:15.023Z] Starting Enhanced Discord Bot...
[2026-02-02T09:01:15.023Z] ========================================
[2026-02-02T09:01:15.591Z] [BOT] ✅ Loaded V2 database: 2217 jobs
[2026-02-02T09:01:16.039Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T09:01:16.039Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T09:01:16.040Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T09:01:16.064Z] [BOT] ✅ Loaded pending queue: 390 total (340 pending, 50 enriched, 0 posted)
[2026-02-02T09:01:16.064Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T09:01:16.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T09:01:16.065Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T09:01:16.065Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T09:01:16.084Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T09:01:16.084Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Salesforce at brex
🚫 Skipping blacklisted job: Engineering Manager, GTM Engineering  at brex
[2026-02-02T09:01:16.084Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, GTM Engineering  at brex
🚫 Skipping blacklisted job: Engineering Manager, GTM Engineering  at brex
🚫 Skipping blacklisted job: Staff Economist at brex
🚫 Skipping blacklisted job: Senior Engineering Manager, Activation at brex
[2026-02-02T09:01:16.084Z] [BOT] 🚫 Skipping blacklisted job: BizOps Lead, BD at brex
🚫 Skipping blacklisted job: Community Marketing Manager - Figma Weave (New York, United States)  at figma
🚫 Skipping blacklisted job: Quality Engineer - Principal Quality Engineer at Northrop Grumman
[2026-02-02T09:01:16.084Z] [BOT] 🚫 Skipping blacklisted job: Strategic Program Manager, Contingent Workforce at figma
[2026-02-02T09:01:16.085Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
🚫 Skipping blacklisted job: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
🚫 Skipping blacklisted job: Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Principal Engineer System Protection at Berkshire Hathaway Energy
[2026-02-02T09:01:16.085Z] [BOT] 🚫 Skipping blacklisted job: Senior Contracts Manager, Procurement and AI at airtable
🚫 Skipping blacklisted job: Tax Director at brex
🚫 Skipping blacklisted job: Tax Director at brex
🚫 Skipping blacklisted job: GTM Strategy Manager  at figma
🚫 Skipping blacklisted job: Director, Product Marketing  at figma
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-02-02T09:01:16.085Z] [BOT] 🚫 Skipping blacklisted job: Director's Fellowship Postdoctoral Researcher at National Renewable Energy Laboratory
🚫 Skipping blacklisted job: Senior Backend Developer at Gallup
🚫 Skipping blacklisted job: Director of Sales, Scaled Vendor Sales at spotify
[2026-02-02T09:01:16.085Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence at Prairie View A&M University
🚫 Skipping blacklisted job: Sales Enablement Manager  at figma
🚫 Skipping blacklisted job: Senior Software Engineer at Oracle
[2026-02-02T09:01:16.085Z] [BOT] 🚫 Skipping blacklisted job: People Analytics Lead at airtable
🚫 Skipping blacklisted job: Product Manager, AI at airtable
🚫 Skipping blacklisted job: Product Manager, Omni Analysis & Q&A at airtable
🚫 Skipping blacklisted job: Scaled Customer Success Manager at airtable
[2026-02-02T09:01:16.085Z] [BOT] 🚫 Skipping blacklisted job: Senior Enterprise Marketing Manager at airtable
🚫 Skipping blacklisted job: Senior Manager, Finance Systems at airtable
🚫 Skipping blacklisted job: Senior Manager, People Systems at airtable
[2026-02-02T09:01:16.086Z] [BOT] 🚫 Skipping blacklisted job: Legal Operations Lead, CLM & Technology at figma
🚫 Skipping blacklisted job: Senior Manager, Music Label Deal Analysis - FP&A at spotify
🚫 Skipping blacklisted job: Senior Technical Revenue Manager at figma
[2026-02-02T09:01:16.086Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist at Walmart
🚫 Skipping blacklisted job: Data Insight Analyst - Principal Data Insight Analyst at Northrop Grumman
[2026-02-02T09:01:16.086Z] [BOT] 🚫 Skipping blacklisted job: Strategic Program Manager at figma
🚫 Skipping blacklisted job: Manager, Figma for Education  at figma
🚫 Skipping blacklisted job: Staff Economist at brex
🚫 Skipping blacklisted job: Compliance Manager, Customer Trust & Third Party Risk at figma
[2026-02-02T09:01:16.086Z] [BOT] 🚫 Skipping blacklisted job: Energy Supply GMS Analyst – Or Senior - Associate - Intermediate at Dominion Energy
🚫 Skipping blacklisted job: Load Forecasting Engineer – Engineer/Senior/Staff - Engineering Analytics & Modeling at Dominion Energy
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-02T09:01:16.086Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee at Argonne National Laboratory
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-02T09:01:16.116Z] [BOT] ✅ Loaded pending queue: 390 total (340 pending, 50 enriched, 0 posted)
[2026-02-02T09:01:16.157Z] [BOT] ✅ Saved pending queue: 344 total (340 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 3 jobs (46 blacklisted)
[2026-02-02T09:01:16.157Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-02T09:01:16.157Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
[2026-02-02T09:01:16.158Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-02T09:01:16.159Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-02T09:01:16.160Z] [BOT] 📍 [ROUTING] "Manufacturing Software Engineer" @ ORG_05d2f9ea Electric
[2026-02-02T09:01:16.160Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-02T09:01:16.177Z] [BOT ERROR] (node:3476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T09:01:16.508Z] [BOT] ✅ Posted message: Manufacturing Software Engineer @ ORG_05d2f9ea Electric in #💻・tech-jobs
[2026-02-02T09:01:16.509Z] [BOT] ✅ Industry: Manufacturing Software Engineer @ ORG_05d2f9ea Electric
[2026-02-02T09:01:16.510Z] [BOT] 💾 Added channel posting: Manufacturing Software Engineer @ ORG_05d2f9ea Electric → category channel (1 total channels)
[2026-02-02T09:01:16.510Z] [BOT] 💾 BEFORE MERGE: 2218 jobs in memory (cached)
[2026-02-02T09:01:16.552Z] [BOT] ✅ Loaded V2 database: 2217 jobs
💾 DISK STATE: 2217 jobs on disk
[2026-02-02T09:01:16.553Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2218
[2026-02-02T09:01:16.558Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T09:01:16.558Z] [BOT] 💾 AFTER MERGE: 2218 jobs (merged disk + memory)
[2026-02-02T09:01:16.559Z] [BOT] ✅ No jobs to archive (all 2218 jobs within 7-day window)
[2026-02-02T09:01:16.700Z] [BOT] 💾 Saved posted_jobs.json: 2218 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T09:01:18.417Z] [BOT] ✅ Posted message: Manufacturing Software Engineer @ ORG_05d2f9ea Electric in #📍・JID_6daed763
[2026-02-02T09:01:18.417Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-02T09:01:18.418Z] [BOT] 💾 Added channel posting: Manufacturing Software Engineer @ ORG_05d2f9ea Electric → location channel (2 total channels)
[2026-02-02T09:01:18.418Z] [BOT] 💾 BEFORE MERGE: 2218 jobs in memory (cached)
[2026-02-02T09:01:18.453Z] [BOT] ✅ Loaded V2 database: 2218 jobs
💾 DISK STATE: 2218 jobs on disk
[2026-02-02T09:01:18.454Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2218
[2026-02-02T09:01:18.458Z] [BOT] 🔀 Deep merged: Manufacturing Software Engineer @ ORG_05d2f9ea Electric (disk: 1 channels → merged: 2 channels)
[2026-02-02T09:01:18.458Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2218 jobs (merged disk + memory)
[2026-02-02T09:01:18.460Z] [BOT] ✅ No jobs to archive (all 2218 jobs within 7-day window)
[2026-02-02T09:01:18.567Z] [BOT] 💾 Saved posted_jobs.json: 2218 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T09:01:20.070Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_0e18dd01 Global Commerce
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-02T09:01:20.309Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_0e18dd01 Global Commerce in #💻・tech-jobs
[2026-02-02T09:01:20.309Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_0e18dd01 Global Commerce
[2026-02-02T09:01:20.310Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_0e18dd01 Global Commerce → category channel (1 total channels)
[2026-02-02T09:01:20.310Z] [BOT] 💾 BEFORE MERGE: 2219 jobs in memory (cached)
[2026-02-02T09:01:20.349Z] [BOT] ✅ Loaded V2 database: 2218 jobs
💾 DISK STATE: 2218 jobs on disk
[2026-02-02T09:01:20.350Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2219
[2026-02-02T09:01:20.354Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T09:01:20.354Z] [BOT] 💾 AFTER MERGE: 2219 jobs (merged disk + memory)
[2026-02-02T09:01:20.356Z] [BOT] ✅ No jobs to archive (all 2219 jobs within 7-day window)
[2026-02-02T09:01:20.467Z] [BOT] 💾 Saved posted_jobs.json: 2219 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T09:01:22.139Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_0e18dd01 Global Commerce in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-02T09:01:22.140Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_0e18dd01 Global Commerce → location channel (2 total channels)
[2026-02-02T09:01:22.140Z] [BOT] 💾 BEFORE MERGE: 2219 jobs in memory (cached)
[2026-02-02T09:01:22.180Z] [BOT] ✅ Loaded V2 database: 2219 jobs
💾 DISK STATE: 2219 jobs on disk
[2026-02-02T09:01:22.181Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2219
[2026-02-02T09:01:22.185Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_0e18dd01 Global Commerce (disk: 1 channels → merged: 2 channels)
[2026-02-02T09:01:22.186Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2219 jobs (merged disk + memory)
[2026-02-02T09:01:22.187Z] [BOT] ✅ No jobs to archive (all 2219 jobs within 7-day window)
[2026-02-02T09:01:22.309Z] [BOT] 💾 Saved posted_jobs.json: 2219 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T09:01:26.808Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-02T09:01:26.810Z] [BOT] 📍 [ROUTING] "GE Vernova Advanced Research Edison Rotational Program" @ ORG_e8760198 Vernova
[2026-02-02T09:01:26.810Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-02T09:01:27.023Z] [BOT] ✅ Posted message: GE Vernova Advanced Research Edison Rotational Program @ ORG_e8760198 Vernova in #🤖・ai-jobs
[2026-02-02T09:01:27.023Z] [BOT] ✅ Industry: GE Vernova Advanced Research Edison Rotational Program @ ORG_e8760198 Vernova
[2026-02-02T09:01:27.024Z] [BOT] 💾 Added channel posting: GE Vernova Advanced Research Edison Rotational Program @ ORG_e8760198 Vernova → category channel (1 total channels)
[2026-02-02T09:01:27.024Z] [BOT] 💾 BEFORE MERGE: 2220 jobs in memory (cached)
[2026-02-02T09:01:27.060Z] [BOT] ✅ Loaded V2 database: 2219 jobs
💾 DISK STATE: 2219 jobs on disk
[2026-02-02T09:01:27.061Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2220
[2026-02-02T09:01:27.065Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2220 jobs (merged disk + memory)
[2026-02-02T09:01:27.067Z] [BOT] ✅ No jobs to archive (all 2220 jobs within 7-day window)
[2026-02-02T09:01:27.183Z] [BOT] 💾 Saved posted_jobs.json: 2220 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T09:01:28.985Z] [BOT] ✅ Posted message: GE Vernova Advanced Research Edison Rotational Program @ ORG_e8760198 Vernova in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-02T09:01:28.985Z] [BOT] 💾 Added channel posting: GE Vernova Advanced Research Edison Rotational Program @ ORG_e8760198 Vernova → location channel (2 total channels)
[2026-02-02T09:01:28.985Z] [BOT] 💾 BEFORE MERGE: 2220 jobs in memory (cached)
[2026-02-02T09:01:29.023Z] [BOT] ✅ Loaded V2 database: 2220 jobs
💾 DISK STATE: 2220 jobs on disk
[2026-02-02T09:01:29.024Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2220
[2026-02-02T09:01:29.028Z] [BOT] 🔀 Deep merged: GE Vernova Advanced Research Edison Rotational Program @ ORG_e8760198 Vernova (disk: 1 channels → merged: 2 channels)
[2026-02-02T09:01:29.029Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2220 jobs (merged disk + memory)
[2026-02-02T09:01:29.030Z] [BOT] ✅ No jobs to archive (all 2220 jobs within 7-day window)
[2026-02-02T09:01:29.156Z] [BOT] 💾 Saved posted_jobs.json: 2220 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T09:01:33.655Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-02-02T09:01:33.657Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_45c085f2..." not found, but found as SHA256 "a3f5b54f39927b0e"
[2026-02-02T09:01:33.657Z] [BOT] ⏭️  Skipping duplicate: JID_b02011d1-cx_1-job-26000800 (posted within 7 days)
[2026-02-02T09:01:33.657Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_457168e7-vernova_..." not found, but found as SHA256 "51ef9d57c9ddbd96"
⏭️  Skipping duplicate: JID_457168e7-vernova_externalsite-JID_b73e99e1-program_r5015939-2 (posted within 7 days)
[2026-02-02T09:01:33.658Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fcdfb116..." not found, but found as SHA256 "223b8498b30fabdd"
[2026-02-02T09:01:33.658Z] [BOT] ⏭️  Skipping duplicate: JID_26136b1f (posted within 7 days)
[2026-02-02T09:01:33.677Z] [BOT] ✅ Loaded pending queue: 344 total (340 pending, 4 enriched, 0 posted)
[2026-02-02T09:01:33.713Z] [BOT] ✅ Saved pending queue: 344 total (340 pending, 1 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-02T09:01:33.821Z] [BOT] 📂 Loaded 12298 existing routing entries
[2026-02-02T09:01:33.939Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 12301
   Timestamp: 2026-02-02T09:01:33.888Z
[2026-02-02T09:01:33.940Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T09:01:33.940Z] [BOT] Total attempts: 53
   Successful: 6
   Failed: 0
   Skipped: 47
[2026-02-02T09:01:33.940Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-02T09:01:33.940Z] [BOT] Last cleanup: Never
   Total posts: 6
[2026-02-02T09:01:33.940Z] [BOT] Channels used: 4
   Top channels:
[2026-02-02T09:01:33.940Z] [BOT] 1. #💻・tech-jobs: 2 posts
     2. #📍・JID_6daed763: 2 posts
[2026-02-02T09:01:33.940Z] [BOT] 3. #🤖・ai-jobs: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-02-02T09:01:33.940Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2220 jobs in memory (cached)
[2026-02-02T09:01:33.987Z] [BOT] ✅ Loaded V2 database: 2220 jobs
💾 DISK STATE: 2220 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2220
[2026-02-02T09:01:33.996Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T09:01:33.996Z] [BOT] 💾 AFTER MERGE: 2220 jobs (merged disk + memory)
[2026-02-02T09:01:33.997Z] [BOT] ✅ No jobs to archive (all 2220 jobs within 7-day window)
[2026-02-02T09:01:34.113Z] [BOT] 💾 Saved posted_jobs.json: 2220 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T09:01:34.113Z] [BOT] ✅ Database saved successfully
[2026-02-02T09:01:36.139Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*