# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T17:27:20.658Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T17:27:04.585Z] ========================================
[2026-02-04T17:27:04.588Z] Discord Bot Execution Log
[2026-02-04T17:27:04.588Z] Environment: GitHub Actions
[2026-02-04T17:27:04.588Z] Node Version: v20.20.0
[2026-02-04T17:27:04.588Z] ========================================
[2026-02-04T17:27:04.588Z] Environment Variables Check:
[2026-02-04T17:27:04.589Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T17:27:04.589Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T17:27:04.589Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T17:27:04.589Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T17:27:04.589Z] 
Multi-Channel Configuration:
[2026-02-04T17:27:04.589Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T17:27:04.589Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:27:04.589Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:27:04.589Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T17:27:04.589Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:27:04.589Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:27:04.589Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:27:04.589Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:27:04.589Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T17:27:04.589Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T17:27:04.590Z] 
Data Files Check:
[2026-02-04T17:27:04.591Z] .github/data/new_jobs.json: ✅ Exists (10 items, 164307 bytes)
[2026-02-04T17:27:04.665Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11502686 bytes)
[2026-02-04T17:27:04.665Z] 
========================================
[2026-02-04T17:27:04.665Z] Starting Enhanced Discord Bot...
[2026-02-04T17:27:04.665Z] ========================================
[2026-02-04T17:27:05.195Z] [BOT] ✅ Loaded V2 database: 2268 jobs
[2026-02-04T17:27:05.747Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T17:27:05.748Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T17:27:05.748Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T17:27:05.777Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T17:27:05.777Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T17:27:05.779Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T17:27:05.779Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T17:27:05.779Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T17:27:05.780Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T17:27:05.780Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T17:27:05.780Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T17:27:05.793Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-02-04T17:27:05.793Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
[2026-02-04T17:27:05.793Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-04T17:27:05.793Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-04T17:27:05.793Z] [BOT] 🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
[2026-02-04T17:27:05.794Z] [BOT] 🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
[2026-02-04T17:27:05.794Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
[2026-02-04T17:27:05.794Z] [BOT] 🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
[2026-02-04T17:27:05.794Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
[2026-02-04T17:27:05.794Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-04T17:27:05.794Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-04T17:27:05.794Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
[2026-02-04T17:27:05.794Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-04T17:27:05.794Z] [BOT] 🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
[2026-02-04T17:27:05.794Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-04T17:27:05.829Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T17:27:05.862Z] [BOT] ✅ Saved pending queue: 269 total (264 pending, 5 enriched, 0 posted)
🗑️ Removed 45 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (45 blacklisted)
[2026-02-04T17:27:05.862Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-04T17:27:05.863Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
⏸️ Limiting to 10 jobs this run, 45 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-04T17:27:05.865Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-04T17:27:05.867Z] [BOT] 📍 [ROUTING] "Immigration Coordinator" @ anthropic
[2026-02-04T17:27:05.867Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-04T17:27:05.883Z] [BOT ERROR] (node:2515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T17:27:06.349Z] [BOT] ✅ Posted message: Immigration Coordinator @ anthropic in #💻・tech-jobs
  ✅ Industry: Immigration Coordinator @ anthropic
[2026-02-04T17:27:06.350Z] [BOT] 💾 Added channel posting: Immigration Coordinator @ anthropic → category channel (1 total channels)
[2026-02-04T17:27:06.351Z] [BOT] 💾 BEFORE MERGE: 2269 jobs in memory (cached)
[2026-02-04T17:27:06.411Z] [BOT] ✅ Loaded V2 database: 2268 jobs
💾 DISK STATE: 2268 jobs on disk
[2026-02-04T17:27:06.412Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2269
[2026-02-04T17:27:06.417Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T17:27:06.417Z] [BOT] 💾 AFTER MERGE: 2269 jobs (merged disk + memory)
[2026-02-04T17:27:06.419Z] [BOT] ✅ No jobs to archive (all 2269 jobs within 7-day window)
[2026-02-04T17:27:06.559Z] [BOT] 💾 Saved posted_jobs.json: 2269 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T17:27:08.215Z] [BOT] ✅ Posted message: Immigration Coordinator @ anthropic in #🌉・JID_739bbc0b
[2026-02-04T17:27:08.215Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-04T17:27:08.216Z] [BOT] 💾 Added channel posting: Immigration Coordinator @ anthropic → location channel (2 total channels)
[2026-02-04T17:27:08.216Z] [BOT] 💾 BEFORE MERGE: 2269 jobs in memory (cached)
[2026-02-04T17:27:08.270Z] [BOT] ✅ Loaded V2 database: 2269 jobs
💾 DISK STATE: 2269 jobs on disk
[2026-02-04T17:27:08.271Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2269
[2026-02-04T17:27:08.276Z] [BOT] 🔀 Deep merged: Immigration Coordinator @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-04T17:27:08.276Z] [BOT] 💾 AFTER MERGE: 2269 jobs (merged disk + memory)
[2026-02-04T17:27:08.277Z] [BOT] ✅ No jobs to archive (all 2269 jobs within 7-day window)
[2026-02-04T17:27:08.403Z] [BOT] 💾 Saved posted_jobs.json: 2269 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T17:27:09.906Z] [BOT] 📍 [ROUTING] "QA Specialist II" @ duolingo
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-04T17:27:10.132Z] [BOT] ✅ Posted message: QA Specialist II @ duolingo in #💻・tech-jobs
  ✅ Industry: QA Specialist II @ duolingo
[2026-02-04T17:27:10.133Z] [BOT] 💾 Added channel posting: QA Specialist II @ duolingo → category channel (1 total channels)
[2026-02-04T17:27:10.133Z] [BOT] 💾 BEFORE MERGE: 2270 jobs in memory (cached)
[2026-02-04T17:27:10.192Z] [BOT] ✅ Loaded V2 database: 2269 jobs
💾 DISK STATE: 2269 jobs on disk
[2026-02-04T17:27:10.193Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2270
[2026-02-04T17:27:10.197Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T17:27:10.197Z] [BOT] 💾 AFTER MERGE: 2270 jobs (merged disk + memory)
[2026-02-04T17:27:10.199Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-02-04T17:27:10.327Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T17:27:12.065Z] [BOT] ✅ Posted message: QA Specialist II @ duolingo in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-04T17:27:12.066Z] [BOT] 💾 Added channel posting: QA Specialist II @ duolingo → location channel (2 total channels)
[2026-02-04T17:27:12.066Z] [BOT] 💾 BEFORE MERGE: 2270 jobs in memory (cached)
[2026-02-04T17:27:12.124Z] [BOT] ✅ Loaded V2 database: 2270 jobs
💾 DISK STATE: 2270 jobs on disk
[2026-02-04T17:27:12.125Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2270
[2026-02-04T17:27:12.129Z] [BOT] 🔀 Deep merged: QA Specialist II @ duolingo (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-04T17:27:12.130Z] [BOT] 💾 AFTER MERGE: 2270 jobs (merged disk + memory)
[2026-02-04T17:27:12.131Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-02-04T17:27:12.281Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T17:27:16.780Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-04T17:27:16.781Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "4b394fa186d2c0c1"
[2026-02-04T17:27:16.781Z] [BOT] ⏭️  Skipping duplicate: JID_530e0255 (posted within 7 days)
[2026-02-04T17:27:16.781Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_80a19829..." not found, but found as SHA256 "3c8c1e174f69572a"
[2026-02-04T17:27:16.782Z] [BOT] ⏭️  Skipping duplicate: JID_80a19829 (posted within 7 days)
[2026-02-04T17:27:16.805Z] [BOT] ✅ Loaded pending queue: 269 total (264 pending, 5 enriched, 0 posted)
[2026-02-04T17:27:16.835Z] [BOT] ✅ Saved pending queue: 269 total (264 pending, 3 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-04T17:27:16.940Z] [BOT] 📂 Loaded 12349 existing routing entries
[2026-02-04T17:27:17.073Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12351
[2026-02-04T17:27:17.073Z] [BOT] Timestamp: 2026-02-04T17:27:17.024Z
[2026-02-04T17:27:17.074Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 52
[2026-02-04T17:27:17.074Z] [BOT] Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-04T17:27:17.074Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-04T17:27:17.074Z] [BOT] Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-04T17:27:17.074Z] [BOT] 3. #🗽・JID_98d4f0de: 1 posts
[2026-02-04T17:27:17.075Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2270 jobs in memory (cached)
[2026-02-04T17:27:17.146Z] [BOT] ✅ Loaded V2 database: 2270 jobs
[2026-02-04T17:27:17.146Z] [BOT] 💾 DISK STATE: 2270 jobs on disk
[2026-02-04T17:27:17.147Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2270
[2026-02-04T17:27:17.153Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T17:27:17.153Z] [BOT] 💾 AFTER MERGE: 2270 jobs (merged disk + memory)
[2026-02-04T17:27:17.155Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-02-04T17:27:17.284Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T17:27:17.284Z] [BOT] ✅ Database saved successfully
[2026-02-04T17:27:19.303Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*