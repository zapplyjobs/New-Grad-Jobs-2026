# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T22:04:10.116Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T22:03:57.909Z] ========================================
[2026-02-06T22:03:57.911Z] Discord Bot Execution Log
[2026-02-06T22:03:57.911Z] Environment: GitHub Actions
[2026-02-06T22:03:57.911Z] Node Version: v20.20.0
[2026-02-06T22:03:57.911Z] ========================================
[2026-02-06T22:03:57.911Z] Environment Variables Check:
[2026-02-06T22:03:57.911Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T22:03:57.912Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T22:03:57.912Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T22:03:57.912Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T22:03:57.912Z] 
Multi-Channel Configuration:
[2026-02-06T22:03:57.912Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T22:03:57.912Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:03:57.912Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:03:57.912Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T22:03:57.912Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:03:57.912Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:03:57.912Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:03:57.912Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:03:57.913Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:03:57.913Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T22:03:57.913Z] 
Data Files Check:
[2026-02-06T22:03:57.914Z] .github/data/new_jobs.json: ✅ Exists (10 items, 183030 bytes)
[2026-02-06T22:03:57.955Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8521793 bytes)
[2026-02-06T22:03:57.955Z] 
========================================
[2026-02-06T22:03:57.955Z] Starting Enhanced Discord Bot...
[2026-02-06T22:03:57.956Z] ========================================
[2026-02-06T22:03:58.524Z] [BOT] ✅ Loaded V2 database: 1831 jobs
[2026-02-06T22:03:59.251Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-06T22:03:59.252Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T22:03:59.252Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T22:03:59.270Z] [BOT] ✅ Loaded pending queue: 225 total (175 pending, 50 enriched, 0 posted)
[2026-02-06T22:03:59.270Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T22:03:59.271Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T22:03:59.271Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T22:03:59.272Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T22:03:59.272Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T22:03:59.272Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T22:03:59.289Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T22:03:59.289Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
[2026-02-06T22:03:59.289Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Manager, Product Design at figma
[2026-02-06T22:03:59.290Z] [BOT] 🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
[2026-02-06T22:03:59.290Z] [BOT] 🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
[2026-02-06T22:03:59.290Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
[2026-02-06T22:03:59.290Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
[2026-02-06T22:03:59.290Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
[2026-02-06T22:03:59.290Z] [BOT] 🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
[2026-02-06T22:03:59.290Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
[2026-02-06T22:03:59.290Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-06T22:03:59.291Z] [BOT] 🚫 Skipping blacklisted job: Copy of Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
[2026-02-06T22:03:59.291Z] [BOT] 🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: TPM Manager, Compute & Infrastructure at anthropic
🚫 Skipping blacklisted job: Manager II, Engineering - AI Platform Training, Serving and Storage (NorAm) at datadog
[2026-02-06T22:03:59.291Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - AAA/Telemetry Optimization at datadog
🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-02-06T22:03:59.291Z] [BOT] 🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
[2026-02-06T22:03:59.291Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-06T22:03:59.291Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
[2026-02-06T22:03:59.291Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Director, Account Management at discord
[2026-02-06T22:03:59.291Z] [BOT] 🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
[2026-02-06T22:03:59.292Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-06T22:03:59.311Z] [BOT] ✅ Loaded pending queue: 225 total (175 pending, 50 enriched, 0 posted)
[2026-02-06T22:03:59.337Z] [BOT] ✅ Saved pending queue: 178 total (175 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
[2026-02-06T22:03:59.337Z] [BOT] 📋 After blacklist filter: 1 jobs (47 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-06T22:03:59.337Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-06T22:03:59.337Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T22:03:59.338Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T22:03:59.340Z] [BOT] 📍 [ROUTING] "Applied AI Engineer, Life Sciences (Beneficial Deployments)" @ anthropic
[2026-02-06T22:03:59.340Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-06T22:03:59.357Z] [BOT ERROR] (node:2529) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T22:04:00.209Z] [BOT] ✅ Posted message: Applied AI Engineer, Life Sciences (Beneficial Deployments) @ anthropic in #🤖・ai-jobs
[2026-02-06T22:04:00.210Z] [BOT] ✅ Industry: Applied AI Engineer, Life Sciences (Beneficial Deployments) @ anthropic
[2026-02-06T22:04:00.211Z] [BOT] 💾 Added channel posting: Applied AI Engineer, Life Sciences (Beneficial Deployments) @ anthropic → category channel (1 total channels)
[2026-02-06T22:04:00.211Z] [BOT] 💾 BEFORE MERGE: 1832 jobs in memory (cached)
[2026-02-06T22:04:00.245Z] [BOT] ✅ Loaded V2 database: 1831 jobs
💾 DISK STATE: 1831 jobs on disk
[2026-02-06T22:04:00.245Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1832
[2026-02-06T22:04:00.249Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T22:04:00.252Z] [BOT] 💾 AFTER MERGE: 1832 jobs (merged disk + memory)
[2026-02-06T22:04:00.254Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T22:04:00.259Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T22:04:00.259Z] [BOT] ✅ Archiving complete: 10 archived, 1822 active
[2026-02-06T22:04:00.369Z] [BOT] 💾 Saved posted_jobs.json: 1822 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:04:02.289Z] [BOT] ✅ Posted message: Applied AI Engineer, Life Sciences (Beneficial Deployments) @ anthropic in #🌉・JID_739bbc0b
[2026-02-06T22:04:02.289Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T22:04:02.290Z] [BOT] 💾 Added channel posting: Applied AI Engineer, Life Sciences (Beneficial Deployments) @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 1822 jobs in memory (cached)
[2026-02-06T22:04:02.317Z] [BOT] ✅ Loaded V2 database: 1822 jobs
💾 DISK STATE: 1822 jobs on disk
[2026-02-06T22:04:02.317Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1822
[2026-02-06T22:04:02.321Z] [BOT] 🔀 Deep merged: Applied AI Engineer, Life Sciences (Beneficial Deployments) @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-06T22:04:02.321Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1822 jobs (merged disk + memory)
[2026-02-06T22:04:02.326Z] [BOT] ✅ No jobs to archive (all 1822 jobs within 7-day window)
[2026-02-06T22:04:02.408Z] [BOT] 💾 Saved posted_jobs.json: 1822 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:04:06.909Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-06T22:04:06.910Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "7da6747cde031f27"
[2026-02-06T22:04:06.910Z] [BOT] ⏭️  Skipping duplicate: JID_00f47414 (posted within 7 days)
[2026-02-06T22:04:06.920Z] [BOT] ✅ Loaded pending queue: 178 total (175 pending, 3 enriched, 0 posted)
[2026-02-06T22:04:06.937Z] [BOT] ✅ Saved pending queue: 178 total (175 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-06T22:04:06.938Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T22:04:07.035Z] [BOT] 📂 Loaded 12601 existing routing entries
[2026-02-06T22:04:07.188Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-06T22:04:07.188Z] [BOT] Total entries: 12602
   Timestamp: 2026-02-06T22:04:07.134Z
[2026-02-06T22:04:07.189Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T22:04:07.189Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-06T22:04:07.189Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-02-06T22:04:07.189Z] [BOT] 2. #🌉・JID_739bbc0b: 1 posts
[2026-02-06T22:04:07.189Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T22:04:07.189Z] [BOT] 💾 BEFORE MERGE: 1822 jobs in memory (cached)
[2026-02-06T22:04:07.220Z] [BOT] ✅ Loaded V2 database: 1822 jobs
💾 DISK STATE: 1822 jobs on disk
[2026-02-06T22:04:07.220Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1822
[2026-02-06T22:04:07.224Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T22:04:07.224Z] [BOT] 💾 AFTER MERGE: 1822 jobs (merged disk + memory)
[2026-02-06T22:04:07.227Z] [BOT] ✅ No jobs to archive (all 1822 jobs within 7-day window)
[2026-02-06T22:04:07.303Z] [BOT] 💾 Saved posted_jobs.json: 1822 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:04:07.303Z] [BOT] ✅ Database saved successfully
[2026-02-06T22:04:09.330Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2529) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*