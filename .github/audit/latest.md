# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T22:17:20.745Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T22:17:06.761Z] ========================================
[2026-02-03T22:17:06.763Z] Discord Bot Execution Log
[2026-02-03T22:17:06.763Z] Environment: GitHub Actions
[2026-02-03T22:17:06.763Z] Node Version: v20.20.0
[2026-02-03T22:17:06.763Z] ========================================
[2026-02-03T22:17:06.763Z] Environment Variables Check:
[2026-02-03T22:17:06.763Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T22:17:06.763Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T22:17:06.763Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T22:17:06.764Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T22:17:06.764Z] 
Multi-Channel Configuration:
[2026-02-03T22:17:06.764Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T22:17:06.764Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:17:06.764Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:17:06.764Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T22:17:06.764Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:17:06.764Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:17:06.764Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:17:06.764Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:17:06.764Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:17:06.764Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T22:17:06.764Z] 
Data Files Check:
[2026-02-03T22:17:06.766Z] .github/data/new_jobs.json: ✅ Exists (10 items, 125445 bytes)
[2026-02-03T22:17:06.827Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11409844 bytes)
[2026-02-03T22:17:06.827Z] 
========================================
[2026-02-03T22:17:06.827Z] Starting Enhanced Discord Bot...
[2026-02-03T22:17:06.827Z] ========================================
[2026-02-03T22:17:07.399Z] [BOT] ✅ Loaded V2 database: 2255 jobs
[2026-02-03T22:17:07.991Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-03T22:17:07.992Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T22:17:07.992Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T22:17:08.013Z] [BOT] ✅ Loaded pending queue: 317 total (267 pending, 50 enriched, 0 posted)
[2026-02-03T22:17:08.013Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T22:17:08.015Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T22:17:08.015Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T22:17:08.015Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-03T22:17:08.015Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-03T22:17:08.034Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-03T22:17:08.034Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-03T22:17:08.035Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
[2026-02-03T22:17:08.035Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
[2026-02-03T22:17:08.035Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
[2026-02-03T22:17:08.035Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
[2026-02-03T22:17:08.035Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
[2026-02-03T22:17:08.035Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
[2026-02-03T22:17:08.035Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
[2026-02-03T22:17:08.035Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-03T22:17:08.035Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
[2026-02-03T22:17:08.036Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
[2026-02-03T22:17:08.036Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-03T22:17:08.036Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-03T22:17:08.066Z] [BOT] ✅ Loaded pending queue: 317 total (267 pending, 50 enriched, 0 posted)
[2026-02-03T22:17:08.102Z] [BOT] ✅ Saved pending queue: 270 total (267 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
[2026-02-03T22:17:08.103Z] [BOT] 📋 After blacklist filter: 1 jobs (47 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-03T22:17:08.103Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-03T22:17:08.103Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T22:17:08.105Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-03T22:17:08.106Z] [BOT] 📍 [ROUTING] "Account Executive, AI Sales" @ stripe
[2026-02-03T22:17:08.106Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T22:17:08.124Z] [BOT ERROR] (node:2685) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T22:17:08.846Z] [BOT] ✅ Posted message: Account Executive, AI Sales @ stripe in #💻・tech-jobs
[2026-02-03T22:17:08.846Z] [BOT] ✅ Industry: Account Executive, AI Sales @ stripe
[2026-02-03T22:17:08.847Z] [BOT] 💾 Added channel posting: Account Executive, AI Sales @ stripe → category channel (1 total channels)
[2026-02-03T22:17:08.848Z] [BOT] 💾 BEFORE MERGE: 2256 jobs in memory (cached)
[2026-02-03T22:17:08.892Z] [BOT] ✅ Loaded V2 database: 2255 jobs
💾 DISK STATE: 2255 jobs on disk
[2026-02-03T22:17:08.893Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2256
[2026-02-03T22:17:08.898Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T22:17:08.898Z] [BOT] 💾 AFTER MERGE: 2256 jobs (merged disk + memory)
[2026-02-03T22:17:08.900Z] [BOT] ✅ No jobs to archive (all 2256 jobs within 7-day window)
[2026-02-03T22:17:09.028Z] [BOT] 💾 Saved posted_jobs.json: 2256 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T22:17:12.380Z] [BOT] ✅ Posted message: Account Executive, AI Sales @ stripe in #🌉・JID_739bbc0b
[2026-02-03T22:17:12.380Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T22:17:12.380Z] [BOT] 💾 Added channel posting: Account Executive, AI Sales @ stripe → location channel (2 total channels)
[2026-02-03T22:17:12.381Z] [BOT] 💾 BEFORE MERGE: 2256 jobs in memory (cached)
[2026-02-03T22:17:12.418Z] [BOT] ✅ Loaded V2 database: 2256 jobs
💾 DISK STATE: 2256 jobs on disk
[2026-02-03T22:17:12.419Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2256
[2026-02-03T22:17:12.423Z] [BOT] 🔀 Deep merged: Account Executive, AI Sales @ stripe (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-03T22:17:12.423Z] [BOT] 💾 AFTER MERGE: 2256 jobs (merged disk + memory)
[2026-02-03T22:17:12.425Z] [BOT] ✅ No jobs to archive (all 2256 jobs within 7-day window)
[2026-02-03T22:17:12.536Z] [BOT] 💾 Saved posted_jobs.json: 2256 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T22:17:17.038Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-03T22:17:17.040Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bcb83e1f..." not found, but found as SHA256 "88814cd9ae6ccd7e"
⏭️  Skipping duplicate: JID_bcb83e1f (posted within 7 days)
[2026-02-03T22:17:17.056Z] [BOT] ✅ Loaded pending queue: 270 total (267 pending, 3 enriched, 0 posted)
[2026-02-03T22:17:17.090Z] [BOT] ✅ Saved pending queue: 270 total (267 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-03T22:17:17.202Z] [BOT] 📂 Loaded 12336 existing routing entries
[2026-02-03T22:17:17.319Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12337
   Timestamp: 2026-02-03T22:17:17.268Z
[2026-02-03T22:17:17.319Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 51
[2026-02-03T22:17:17.320Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-03T22:17:17.320Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-03T22:17:17.320Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2256 jobs in memory (cached)
[2026-02-03T22:17:17.362Z] [BOT] ✅ Loaded V2 database: 2256 jobs
💾 DISK STATE: 2256 jobs on disk
[2026-02-03T22:17:17.363Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2256
[2026-02-03T22:17:17.368Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T22:17:17.368Z] [BOT] 💾 AFTER MERGE: 2256 jobs (merged disk + memory)
[2026-02-03T22:17:17.369Z] [BOT] ✅ No jobs to archive (all 2256 jobs within 7-day window)
[2026-02-03T22:17:17.498Z] [BOT] 💾 Saved posted_jobs.json: 2256 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T22:17:19.522Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2685) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*