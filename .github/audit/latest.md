# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T19:39:55.647Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T19:39:32.057Z] ========================================
[2026-02-03T19:39:32.058Z] Discord Bot Execution Log
[2026-02-03T19:39:32.059Z] Environment: GitHub Actions
[2026-02-03T19:39:32.059Z] Node Version: v20.20.0
[2026-02-03T19:39:32.059Z] ========================================
[2026-02-03T19:39:32.059Z] Environment Variables Check:
[2026-02-03T19:39:32.059Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T19:39:32.059Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T19:39:32.059Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T19:39:32.059Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T19:39:32.059Z] 
Multi-Channel Configuration:
[2026-02-03T19:39:32.059Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T19:39:32.060Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:39:32.060Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:39:32.060Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T19:39:32.060Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:39:32.060Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:39:32.060Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:39:32.060Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:39:32.060Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:39:32.060Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T19:39:32.060Z] 
Data Files Check:
[2026-02-03T19:39:32.062Z] .github/data/new_jobs.json: ✅ Exists (10 items, 183620 bytes)
[2026-02-03T19:39:32.119Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11360462 bytes)
[2026-02-03T19:39:32.119Z] 
========================================
[2026-02-03T19:39:32.119Z] Starting Enhanced Discord Bot...
[2026-02-03T19:39:32.119Z] ========================================
[2026-02-03T19:39:32.705Z] [BOT] ✅ Loaded V2 database: 2249 jobs
[2026-02-03T19:39:33.185Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T19:39:33.185Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T19:39:33.185Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T19:39:33.207Z] [BOT] ✅ Loaded pending queue: 326 total (276 pending, 50 enriched, 0 posted)
[2026-02-03T19:39:33.207Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T19:39:33.208Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T19:39:33.209Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T19:39:33.228Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T19:39:33.228Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
[2026-02-03T19:39:33.228Z] [BOT] 🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
[2026-02-03T19:39:33.229Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
[2026-02-03T19:39:33.229Z] [BOT] 🚫 Skipping blacklisted job: Senior/Staff Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
[2026-02-03T19:39:33.229Z] [BOT] 🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-02-03T19:39:33.229Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
[2026-02-03T19:39:33.229Z] [BOT] 🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
[2026-02-03T19:39:33.229Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
[2026-02-03T19:39:33.229Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
[2026-02-03T19:39:33.229Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
[2026-02-03T19:39:33.230Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
[2026-02-03T19:39:33.230Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-03T19:39:33.230Z] [BOT] 🚫 Skipping blacklisted job: Senior Accountant (Platform Accounting) at gusto
[2026-02-03T19:39:33.230Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-03T19:39:33.230Z] [BOT] 🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-03T19:39:33.230Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
[2026-02-03T19:39:33.230Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-03T19:39:33.231Z] [BOT] 🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
[2026-02-03T19:39:33.258Z] [BOT] ✅ Loaded pending queue: 326 total (276 pending, 50 enriched, 0 posted)
[2026-02-03T19:39:33.295Z] [BOT] ✅ Saved pending queue: 280 total (276 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 3 jobs (46 blacklisted)
[2026-02-03T19:39:33.295Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-03T19:39:33.296Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-02-03T19:39:33.296Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T19:39:33.299Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-03T19:39:33.300Z] [BOT] 📍 [ROUTING] "Capital Formation, Coinbase Asset Management" @ coinbase
[2026-02-03T19:39:33.300Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-03T19:39:33.318Z] [BOT ERROR] (node:2578) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T19:39:33.647Z] [BOT] ✅ Posted message: Capital Formation, Coinbase Asset Management @ coinbase in #🤖・ai-jobs
[2026-02-03T19:39:33.647Z] [BOT] ✅ Industry: Capital Formation, Coinbase Asset Management @ coinbase
[2026-02-03T19:39:33.648Z] [BOT] 💾 Added channel posting: Capital Formation, Coinbase Asset Management @ coinbase → category channel (1 total channels)
[2026-02-03T19:39:33.649Z] [BOT] 💾 BEFORE MERGE: 2250 jobs in memory (cached)
[2026-02-03T19:39:33.695Z] [BOT] ✅ Loaded V2 database: 2249 jobs
💾 DISK STATE: 2249 jobs on disk
[2026-02-03T19:39:33.696Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2250
[2026-02-03T19:39:33.701Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T19:39:33.701Z] [BOT] 💾 AFTER MERGE: 2250 jobs (merged disk + memory)
[2026-02-03T19:39:33.703Z] [BOT] ✅ No jobs to archive (all 2250 jobs within 7-day window)
[2026-02-03T19:39:33.859Z] [BOT] 💾 Saved posted_jobs.json: 2250 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T19:39:35.577Z] [BOT] ✅ Posted message: Capital Formation, Coinbase Asset Management @ coinbase in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-03T19:39:35.578Z] [BOT] 💾 Added channel posting: Capital Formation, Coinbase Asset Management @ coinbase → location channel (2 total channels)
[2026-02-03T19:39:35.578Z] [BOT] 💾 BEFORE MERGE: 2250 jobs in memory (cached)
[2026-02-03T19:39:35.616Z] [BOT] ✅ Loaded V2 database: 2250 jobs
💾 DISK STATE: 2250 jobs on disk
[2026-02-03T19:39:35.616Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2250
[2026-02-03T19:39:35.621Z] [BOT] 🔀 Deep merged: Capital Formation, Coinbase Asset Management @ coinbase (disk: 1 channels → merged: 2 channels)
[2026-02-03T19:39:35.621Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2250 jobs (merged disk + memory)
[2026-02-03T19:39:35.623Z] [BOT] ✅ No jobs to archive (all 2250 jobs within 7-day window)
[2026-02-03T19:39:35.735Z] [BOT] 💾 Saved posted_jobs.json: 2250 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T19:39:40.236Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-03T19:39:40.239Z] [BOT] 📍 [ROUTING] "Account Executive, Territory, Chicago" @ verkada
[2026-02-03T19:39:40.239Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-03T19:39:40.437Z] [BOT] ✅ Posted message: Account Executive, Territory, Chicago @ verkada in #💰・finance-jobs
[2026-02-03T19:39:40.437Z] [BOT] ✅ Industry: Account Executive, Territory, Chicago @ verkada
[2026-02-03T19:39:40.438Z] [BOT] 💾 Added channel posting: Account Executive, Territory, Chicago @ verkada → category channel (1 total channels)
[2026-02-03T19:39:40.438Z] [BOT] 💾 BEFORE MERGE: 2251 jobs in memory (cached)
[2026-02-03T19:39:40.480Z] [BOT] ✅ Loaded V2 database: 2250 jobs
💾 DISK STATE: 2250 jobs on disk
[2026-02-03T19:39:40.481Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2251
[2026-02-03T19:39:40.486Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T19:39:40.486Z] [BOT] 💾 AFTER MERGE: 2251 jobs (merged disk + memory)
[2026-02-03T19:39:40.488Z] [BOT] ✅ No jobs to archive (all 2251 jobs within 7-day window)
[2026-02-03T19:39:40.601Z] [BOT] 💾 Saved posted_jobs.json: 2251 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T19:39:45.104Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-03T19:39:45.106Z] [BOT] 📍 [ROUTING] "Key Accounts Executive" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T19:39:45.332Z] [BOT] ✅ Posted message: Key Accounts Executive @ datadog in #💻・tech-jobs
[2026-02-03T19:39:45.332Z] [BOT] ✅ Industry: Key Accounts Executive @ datadog
[2026-02-03T19:39:45.333Z] [BOT] 💾 Added channel posting: Key Accounts Executive @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 2252 jobs in memory (cached)
[2026-02-03T19:39:45.375Z] [BOT] ✅ Loaded V2 database: 2251 jobs
[2026-02-03T19:39:45.375Z] [BOT] 💾 DISK STATE: 2251 jobs on disk
[2026-02-03T19:39:45.375Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2252
[2026-02-03T19:39:45.380Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T19:39:45.380Z] [BOT] 💾 AFTER MERGE: 2252 jobs (merged disk + memory)
[2026-02-03T19:39:45.381Z] [BOT] ✅ No jobs to archive (all 2252 jobs within 7-day window)
[2026-02-03T19:39:45.512Z] [BOT] 💾 Saved posted_jobs.json: 2252 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T19:39:47.357Z] [BOT] ✅ Posted message: Key Accounts Executive @ datadog in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-03T19:39:47.358Z] [BOT] 💾 Added channel posting: Key Accounts Executive @ datadog → location channel (2 total channels)
[2026-02-03T19:39:47.358Z] [BOT] 💾 BEFORE MERGE: 2252 jobs in memory (cached)
[2026-02-03T19:39:47.396Z] [BOT] ✅ Loaded V2 database: 2252 jobs
💾 DISK STATE: 2252 jobs on disk
[2026-02-03T19:39:47.397Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2252
[2026-02-03T19:39:47.402Z] [BOT] 🔀 Deep merged: Key Accounts Executive @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-03T19:39:47.402Z] [BOT] 💾 AFTER MERGE: 2252 jobs (merged disk + memory)
[2026-02-03T19:39:47.403Z] [BOT] ✅ No jobs to archive (all 2252 jobs within 7-day window)
[2026-02-03T19:39:47.525Z] [BOT] 💾 Saved posted_jobs.json: 2252 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T19:39:52.024Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-02-03T19:39:52.026Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_530b6c74..." not found, but found as SHA256 "681a9f1193202c3c"
⏭️  Skipping duplicate: JID_5c36de74 (posted within 7 days)
[2026-02-03T19:39:52.026Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "a692166b7a4dee3d"
⏭️  Skipping duplicate: JID_c05d8b42 (posted within 7 days)
[2026-02-03T19:39:52.026Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7046e135..." not found, but found as SHA256 "ccb64e2adfc8acea"
[2026-02-03T19:39:52.027Z] [BOT] ⏭️  Skipping duplicate: JID_7046e135 (posted within 7 days)
[2026-02-03T19:39:52.043Z] [BOT] ✅ Loaded pending queue: 280 total (276 pending, 4 enriched, 0 posted)
[2026-02-03T19:39:52.079Z] [BOT] ✅ Saved pending queue: 280 total (276 pending, 1 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-02-03T19:39:52.079Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T19:39:52.190Z] [BOT] 📂 Loaded 12330 existing routing entries
[2026-02-03T19:39:52.310Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 12333
   Timestamp: 2026-02-03T19:39:52.259Z
[2026-02-03T19:39:52.311Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 52
[2026-02-03T19:39:52.311Z] [BOT] Successful: 5
   Failed: 0
   Skipped: 47
[2026-02-03T19:39:52.311Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 5
   Channels used: 5
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🗽・JID_98d4f0de: 1 posts
     3. #💰・finance-jobs: 1 posts
     4. #💻・tech-jobs: 1 posts
     5. #🏠・JID_ead674af: 1 posts
[STATS] Channel stats saved
[2026-02-03T19:39:52.312Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2252 jobs in memory (cached)
[2026-02-03T19:39:52.371Z] [BOT] ✅ Loaded V2 database: 2252 jobs
💾 DISK STATE: 2252 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2252
[2026-02-03T19:39:52.377Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T19:39:52.377Z] [BOT] 💾 AFTER MERGE: 2252 jobs (merged disk + memory)
[2026-02-03T19:39:52.379Z] [BOT] ✅ No jobs to archive (all 2252 jobs within 7-day window)
[2026-02-03T19:39:52.517Z] [BOT] 💾 Saved posted_jobs.json: 2252 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T19:39:54.540Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2578) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*