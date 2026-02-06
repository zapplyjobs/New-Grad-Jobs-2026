# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T08:33:52.486Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T08:33:36.185Z] ========================================
[2026-02-06T08:33:36.187Z] Discord Bot Execution Log
[2026-02-06T08:33:36.188Z] Environment: GitHub Actions
[2026-02-06T08:33:36.188Z] Node Version: v20.20.0
[2026-02-06T08:33:36.188Z] ========================================
[2026-02-06T08:33:36.188Z] Environment Variables Check:
[2026-02-06T08:33:36.188Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T08:33:36.188Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T08:33:36.188Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T08:33:36.188Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T08:33:36.188Z] 
Multi-Channel Configuration:
[2026-02-06T08:33:36.188Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T08:33:36.189Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:33:36.189Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:33:36.189Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T08:33:36.189Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:33:36.189Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:33:36.189Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:33:36.189Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:33:36.189Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:33:36.189Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T08:33:36.189Z] 
Data Files Check:
[2026-02-06T08:33:36.191Z] .github/data/new_jobs.json: ✅ Exists (10 items, 169153 bytes)
[2026-02-06T08:33:36.259Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10460124 bytes)
[2026-02-06T08:33:36.260Z] 
========================================
[2026-02-06T08:33:36.260Z] Starting Enhanced Discord Bot...
[2026-02-06T08:33:36.260Z] ========================================
[2026-02-06T08:33:36.849Z] [BOT] ✅ Loaded V2 database: 2129 jobs
[2026-02-06T08:33:37.597Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T08:33:37.597Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T08:33:37.597Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T08:33:37.611Z] [BOT] ✅ Loaded pending queue: 221 total (171 pending, 50 enriched, 0 posted)
[2026-02-06T08:33:37.612Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T08:33:37.613Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T08:33:37.613Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-06T08:33:37.613Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T08:33:37.614Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T08:33:37.614Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T08:33:37.615Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T08:33:37.615Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T08:33:37.634Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T08:33:37.634Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
[2026-02-06T08:33:37.635Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
[2026-02-06T08:33:37.635Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
[2026-02-06T08:33:37.635Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
[2026-02-06T08:33:37.635Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
[2026-02-06T08:33:37.635Z] [BOT] 🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
[2026-02-06T08:33:37.635Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
[2026-02-06T08:33:37.635Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-06T08:33:37.636Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
[2026-02-06T08:33:37.636Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
[2026-02-06T08:33:37.636Z] [BOT] 🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
[2026-02-06T08:33:37.636Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-06T08:33:37.636Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
[2026-02-06T08:33:37.649Z] [BOT] ✅ Loaded pending queue: 221 total (171 pending, 50 enriched, 0 posted)
[2026-02-06T08:33:37.674Z] [BOT] ✅ Saved pending queue: 177 total (171 pending, 6 enriched, 0 posted)
🗑️ Removed 44 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (44 blacklisted)
[2026-02-06T08:33:37.674Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-06T08:33:37.675Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-06T08:33:37.675Z] [BOT] ⏸️ Limiting to 10 jobs this run, 44 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T08:33:37.676Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-06T08:33:37.678Z] [BOT] 📍 [ROUTING] "Product Support Specialist" @ anthropic
[2026-02-06T08:33:37.678Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-06T08:33:37.696Z] [BOT ERROR] (node:2943) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T08:33:38.124Z] [BOT] ✅ Posted message: Product Support Specialist @ anthropic in #🤖・ai-jobs
[2026-02-06T08:33:38.124Z] [BOT] ✅ Industry: Product Support Specialist @ anthropic
[2026-02-06T08:33:38.125Z] [BOT] 💾 Added channel posting: Product Support Specialist @ anthropic → category channel (1 total channels)
[2026-02-06T08:33:38.126Z] [BOT] 💾 BEFORE MERGE: 2130 jobs in memory (cached)
[2026-02-06T08:33:38.168Z] [BOT] ✅ Loaded V2 database: 2129 jobs
💾 DISK STATE: 2129 jobs on disk
[2026-02-06T08:33:38.168Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2130
[2026-02-06T08:33:38.174Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T08:33:38.174Z] [BOT] 💾 AFTER MERGE: 2130 jobs (merged disk + memory)
[2026-02-06T08:33:38.176Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T08:33:38.183Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
✅ Archiving complete: 20 archived, 2110 active
[2026-02-06T08:33:38.297Z] [BOT] 💾 Saved posted_jobs.json: 2110 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:33:40.143Z] [BOT] ✅ Posted message: Product Support Specialist @ anthropic in #🌉・JID_739bbc0b
[2026-02-06T08:33:40.143Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T08:33:40.144Z] [BOT] 💾 Added channel posting: Product Support Specialist @ anthropic → location channel (2 total channels)
[2026-02-06T08:33:40.144Z] [BOT] 💾 BEFORE MERGE: 2110 jobs in memory (cached)
[2026-02-06T08:33:40.188Z] [BOT] ✅ Loaded V2 database: 2110 jobs
💾 DISK STATE: 2110 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2110
[2026-02-06T08:33:40.194Z] [BOT] 🔀 Deep merged: Product Support Specialist @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T08:33:40.194Z] [BOT] 💾 AFTER MERGE: 2110 jobs (merged disk + memory)
[2026-02-06T08:33:40.196Z] [BOT] ✅ No jobs to archive (all 2110 jobs within 7-day window)
[2026-02-06T08:33:40.309Z] [BOT] 💾 Saved posted_jobs.json: 2110 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:33:41.809Z] [BOT] 📍 [ROUTING] "Software Engineer (Flight Controls & Autonomy) - Intern" @ ORG_c4d60d82 Martin
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-06T08:33:41.809Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-06T08:33:42.058Z] [BOT] ✅ Posted message: Software Engineer (Flight Controls & Autonomy) - Intern @ ORG_c4d60d82 Martin in #🤖・ai-jobs
[2026-02-06T08:33:42.059Z] [BOT] ✅ Industry: Software Engineer (Flight Controls & Autonomy) - Intern @ ORG_c4d60d82 Martin
[2026-02-06T08:33:42.059Z] [BOT] 💾 Added channel posting: Software Engineer (Flight Controls & Autonomy) - Intern @ ORG_c4d60d82 Martin → category channel (1 total channels)
[2026-02-06T08:33:42.060Z] [BOT] 💾 BEFORE MERGE: 2111 jobs in memory (cached)
[2026-02-06T08:33:42.094Z] [BOT] ✅ Loaded V2 database: 2110 jobs
💾 DISK STATE: 2110 jobs on disk
[2026-02-06T08:33:42.095Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2111
[2026-02-06T08:33:42.099Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T08:33:42.099Z] [BOT] 💾 AFTER MERGE: 2111 jobs (merged disk + memory)
[2026-02-06T08:33:42.100Z] [BOT] ✅ No jobs to archive (all 2111 jobs within 7-day window)
[2026-02-06T08:33:42.206Z] [BOT] 💾 Saved posted_jobs.json: 2111 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:33:43.965Z] [BOT] ✅ Posted message: Software Engineer (Flight Controls & Autonomy) - Intern @ ORG_c4d60d82 Martin in #📍・JID_6daed763
[2026-02-06T08:33:43.965Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T08:33:43.965Z] [BOT] 💾 Added channel posting: Software Engineer (Flight Controls & Autonomy) - Intern @ ORG_c4d60d82 Martin → location channel (2 total channels)
[2026-02-06T08:33:43.966Z] [BOT] 💾 BEFORE MERGE: 2111 jobs in memory (cached)
[2026-02-06T08:33:44.008Z] [BOT] ✅ Loaded V2 database: 2111 jobs
💾 DISK STATE: 2111 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2111
[2026-02-06T08:33:44.020Z] [BOT] 🔀 Deep merged: Software Engineer (Flight Controls & Autonomy) - Intern @ ORG_c4d60d82 Martin (disk: 1 channels → merged: 2 channels)
[2026-02-06T08:33:44.020Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T08:33:44.021Z] [BOT] 💾 AFTER MERGE: 2111 jobs (merged disk + memory)
[2026-02-06T08:33:44.023Z] [BOT] ✅ No jobs to archive (all 2111 jobs within 7-day window)
[2026-02-06T08:33:44.128Z] [BOT] 💾 Saved posted_jobs.json: 2111 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:33:48.629Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-06T08:33:48.631Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "b3aea4212ab87403"
[2026-02-06T08:33:48.631Z] [BOT] ⏭️  Skipping duplicate: JID_4e442941 (posted within 7 days)
[2026-02-06T08:33:48.632Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_08b90eeb..." not found, but found as SHA256 "5ed5cf3fc47eb846"
⏭️  Skipping duplicate: JID_82739644 (posted within 7 days)
[2026-02-06T08:33:48.641Z] [BOT] ✅ Loaded pending queue: 177 total (171 pending, 6 enriched, 0 posted)
[2026-02-06T08:33:48.658Z] [BOT] ✅ Saved pending queue: 177 total (171 pending, 4 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T08:33:48.756Z] [BOT] 📂 Loaded 12510 existing routing entries
[2026-02-06T08:33:48.895Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-02-06T08:33:48.895Z] [BOT] Total entries: 12512
   Timestamp: 2026-02-06T08:33:48.837Z
[2026-02-06T08:33:48.896Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T08:33:48.896Z] [BOT] Total attempts: 52
   Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-06T08:33:48.896Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T08:33:48.896Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 2 posts
     2. #🌉・JID_739bbc0b: 1 posts
     3. #📍・JID_6daed763: 1 posts
[2026-02-06T08:33:48.897Z] [BOT] [STATS] Channel stats saved
[2026-02-06T08:33:48.897Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2111 jobs in memory (cached)
[2026-02-06T08:33:48.947Z] [BOT] ✅ Loaded V2 database: 2111 jobs
💾 DISK STATE: 2111 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2111
[2026-02-06T08:33:48.951Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T08:33:48.951Z] [BOT] 💾 AFTER MERGE: 2111 jobs (merged disk + memory)
[2026-02-06T08:33:48.953Z] [BOT] ✅ No jobs to archive (all 2111 jobs within 7-day window)
[2026-02-06T08:33:49.071Z] [BOT] 💾 Saved posted_jobs.json: 2111 active jobs
[2026-02-06T08:33:49.072Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T08:33:51.095Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2943) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*