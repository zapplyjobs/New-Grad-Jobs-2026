# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T23:33:40.812Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T23:33:28.863Z] ========================================
[2026-02-04T23:33:28.865Z] Discord Bot Execution Log
[2026-02-04T23:33:28.865Z] Environment: GitHub Actions
[2026-02-04T23:33:28.865Z] Node Version: v20.20.0
[2026-02-04T23:33:28.865Z] ========================================
[2026-02-04T23:33:28.865Z] Environment Variables Check:
[2026-02-04T23:33:28.865Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T23:33:28.865Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T23:33:28.866Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T23:33:28.866Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T23:33:28.866Z] 
Multi-Channel Configuration:
[2026-02-04T23:33:28.866Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T23:33:28.866Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:33:28.866Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:33:28.866Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T23:33:28.866Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:33:28.866Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:33:28.866Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:33:28.866Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:33:28.866Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:33:28.866Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T23:33:28.866Z] 
Data Files Check:
[2026-02-04T23:33:28.868Z] .github/data/new_jobs.json: ✅ Exists (10 items, 168639 bytes)
[2026-02-04T23:33:28.940Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11488190 bytes)
[2026-02-04T23:33:28.940Z] 
========================================
[2026-02-04T23:33:28.940Z] Starting Enhanced Discord Bot...
[2026-02-04T23:33:28.940Z] ========================================
[2026-02-04T23:33:29.444Z] [BOT] ✅ Loaded V2 database: 2264 jobs
[2026-02-04T23:33:30.089Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T23:33:30.089Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T23:33:30.089Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T23:33:30.119Z] [BOT] ✅ Loaded pending queue: 324 total (274 pending, 50 enriched, 0 posted)
[2026-02-04T23:33:30.119Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T23:33:30.120Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T23:33:30.120Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T23:33:30.121Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T23:33:30.121Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T23:33:30.122Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T23:33:30.122Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T23:33:30.122Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-04T23:33:30.134Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-04T23:33:30.135Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
[2026-02-04T23:33:30.135Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-04T23:33:30.135Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
[2026-02-04T23:33:30.135Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-02-04T23:33:30.135Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-04T23:33:30.135Z] [BOT] 🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
[2026-02-04T23:33:30.135Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
[2026-02-04T23:33:30.135Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T23:33:30.135Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
[2026-02-04T23:33:30.136Z] [BOT] 🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
[2026-02-04T23:33:30.136Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
[2026-02-04T23:33:30.136Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
[2026-02-04T23:33:30.136Z] [BOT] 🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
[2026-02-04T23:33:30.171Z] [BOT] ✅ Loaded pending queue: 324 total (274 pending, 50 enriched, 0 posted)
[2026-02-04T23:33:30.204Z] [BOT] ✅ Saved pending queue: 279 total (274 pending, 5 enriched, 0 posted)
🗑️ Removed 45 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (45 blacklisted)
[2026-02-04T23:33:30.204Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-04T23:33:30.204Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-04T23:33:30.204Z] [BOT] ⏸️ Limiting to 10 jobs this run, 45 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-04T23:33:30.206Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-04T23:33:30.208Z] [BOT] 📍 [ROUTING] "Advocate, Federal" @ figma
[2026-02-04T23:33:30.208Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-04T23:33:30.224Z] [BOT ERROR] (node:2567) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T23:33:30.491Z] [BOT] ✅ Posted message: Advocate, Federal @ figma in #💻・tech-jobs
[2026-02-04T23:33:30.491Z] [BOT] ✅ Industry: Advocate, Federal @ figma
[2026-02-04T23:33:30.492Z] [BOT] 💾 Added channel posting: Advocate, Federal @ figma → category channel (1 total channels)
[2026-02-04T23:33:30.492Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-04T23:33:30.552Z] [BOT] ✅ Loaded V2 database: 2264 jobs
💾 DISK STATE: 2264 jobs on disk
[2026-02-04T23:33:30.552Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-04T23:33:30.557Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T23:33:30.557Z] [BOT] 💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-04T23:33:30.559Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-04T23:33:30.700Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T23:33:32.374Z] [BOT] ✅ Posted message: Advocate, Federal @ figma in #🌉・JID_739bbc0b
[2026-02-04T23:33:32.374Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-04T23:33:32.375Z] [BOT] 💾 Added channel posting: Advocate, Federal @ figma → location channel (2 total channels)
[2026-02-04T23:33:32.375Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-04T23:33:32.429Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-04T23:33:32.430Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-04T23:33:32.434Z] [BOT] 🔀 Deep merged: Advocate, Federal @ figma (disk: 1 channels → merged: 2 channels)
[2026-02-04T23:33:32.434Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-04T23:33:32.436Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-04T23:33:32.558Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T23:33:37.058Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-04T23:33:37.059Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea5aa985..." not found, but found as SHA256 "d0844594c159c719"
[2026-02-04T23:33:37.059Z] [BOT] ⏭️  Skipping duplicate: JID_2038c59a (posted within 7 days)
[2026-02-04T23:33:37.083Z] [BOT] ✅ Loaded pending queue: 279 total (274 pending, 5 enriched, 0 posted)
[2026-02-04T23:33:37.114Z] [BOT] ✅ Saved pending queue: 279 total (274 pending, 4 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-04T23:33:37.114Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T23:33:37.216Z] [BOT] 📂 Loaded 12355 existing routing entries
[2026-02-04T23:33:37.346Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12356
   Timestamp: 2026-02-04T23:33:37.302Z
[2026-02-04T23:33:37.346Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 51
[2026-02-04T23:33:37.346Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-04T23:33:37.347Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-04T23:33:37.347Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-04T23:33:37.347Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T23:33:37.347Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-04T23:33:37.408Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-04T23:33:37.408Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-04T23:33:37.413Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T23:33:37.413Z] [BOT] 💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-04T23:33:37.415Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-04T23:33:37.554Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T23:33:39.571Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2567) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*