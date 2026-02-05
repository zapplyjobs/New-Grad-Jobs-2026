# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T23:26:28.349Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T23:26:12.965Z] ========================================
[2026-02-05T23:26:12.967Z] Discord Bot Execution Log
[2026-02-05T23:26:12.967Z] Environment: GitHub Actions
[2026-02-05T23:26:12.967Z] Node Version: v20.20.0
[2026-02-05T23:26:12.967Z] ========================================
[2026-02-05T23:26:12.967Z] Environment Variables Check:
[2026-02-05T23:26:12.967Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T23:26:12.967Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T23:26:12.967Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T23:26:12.968Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T23:26:12.968Z] 
Multi-Channel Configuration:
[2026-02-05T23:26:12.968Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T23:26:12.968Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:26:12.968Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:26:12.968Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T23:26:12.968Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:26:12.968Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:26:12.968Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:26:12.968Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:26:12.968Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:26:12.968Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T23:26:12.968Z] 
Data Files Check:
[2026-02-05T23:26:12.969Z] .github/data/new_jobs.json: ✅ Exists (10 items, 145099 bytes)
[2026-02-05T23:26:13.050Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11382957 bytes)
[2026-02-05T23:26:13.050Z] 
========================================
[2026-02-05T23:26:13.050Z] Starting Enhanced Discord Bot...
[2026-02-05T23:26:13.050Z] ========================================
[2026-02-05T23:26:13.593Z] [BOT] ✅ Loaded V2 database: 2248 jobs
[2026-02-05T23:26:14.053Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-05T23:26:14.053Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T23:26:14.054Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T23:26:14.077Z] [BOT] ✅ Loaded pending queue: 240 total (190 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T23:26:14.078Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T23:26:14.078Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T23:26:14.079Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T23:26:14.079Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T23:26:14.079Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T23:26:14.080Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T23:26:14.080Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T23:26:14.080Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T23:26:14.080Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-05T23:26:14.081Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-05T23:26:14.093Z] [BOT] 📬 Found 45 new jobs (5 already posted)...
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
[2026-02-05T23:26:14.093Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
[2026-02-05T23:26:14.094Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
[2026-02-05T23:26:14.094Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
[2026-02-05T23:26:14.094Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
[2026-02-05T23:26:14.094Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
[2026-02-05T23:26:14.094Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
[2026-02-05T23:26:14.094Z] [BOT] 🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
[2026-02-05T23:26:14.094Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-05T23:26:14.094Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Engineering Manager at reddit
[2026-02-05T23:26:14.094Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-05T23:26:14.094Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-05T23:26:14.123Z] [BOT] ✅ Loaded pending queue: 240 total (190 pending, 50 enriched, 0 posted)
[2026-02-05T23:26:14.142Z] [BOT] ✅ Saved pending queue: 197 total (190 pending, 7 enriched, 0 posted)
🗑️ Removed 43 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (43 blacklisted)
[2026-02-05T23:26:14.142Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-05T23:26:14.143Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-05T23:26:14.143Z] [BOT] ⏸️ Limiting to 10 jobs this run, 43 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T23:26:14.144Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-05T23:26:14.146Z] [BOT] 📍 [ROUTING] "Security Software Engineer, D&R Platform" @ anthropic
[2026-02-05T23:26:14.146Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T23:26:14.162Z] [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T23:26:14.477Z] [BOT] ✅ Posted message: Security Software Engineer, D&R Platform @ anthropic in #💻・tech-jobs
[2026-02-05T23:26:14.477Z] [BOT] ✅ Industry: Security Software Engineer, D&R Platform @ anthropic
[2026-02-05T23:26:14.478Z] [BOT] 💾 Added channel posting: Security Software Engineer, D&R Platform @ anthropic → category channel (1 total channels)
[2026-02-05T23:26:14.478Z] [BOT] 💾 BEFORE MERGE: 2249 jobs in memory (cached)
[2026-02-05T23:26:14.540Z] [BOT] ✅ Loaded V2 database: 2248 jobs
💾 DISK STATE: 2248 jobs on disk
[2026-02-05T23:26:14.541Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2249
[2026-02-05T23:26:14.546Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:26:14.547Z] [BOT] 💾 AFTER MERGE: 2249 jobs (merged disk + memory)
[2026-02-05T23:26:14.548Z] [BOT] ✅ No jobs to archive (all 2249 jobs within 7-day window)
[2026-02-05T23:26:14.693Z] [BOT] 💾 Saved posted_jobs.json: 2249 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:26:16.475Z] [BOT] ✅ Posted message: Security Software Engineer, D&R Platform @ anthropic in #🌉・JID_739bbc0b
[2026-02-05T23:26:16.475Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T23:26:16.476Z] [BOT] 💾 Added channel posting: Security Software Engineer, D&R Platform @ anthropic → location channel (2 total channels)
[2026-02-05T23:26:16.476Z] [BOT] 💾 BEFORE MERGE: 2249 jobs in memory (cached)
[2026-02-05T23:26:16.532Z] [BOT] ✅ Loaded V2 database: 2249 jobs
💾 DISK STATE: 2249 jobs on disk
[2026-02-05T23:26:16.533Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2249
[2026-02-05T23:26:16.538Z] [BOT] 🔀 Deep merged: Security Software Engineer, D&R Platform @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-05T23:26:16.538Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2249 jobs (merged disk + memory)
[2026-02-05T23:26:16.540Z] [BOT] ✅ No jobs to archive (all 2249 jobs within 7-day window)
[2026-02-05T23:26:16.668Z] [BOT] 💾 Saved posted_jobs.json: 2249 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:26:18.169Z] [BOT] 📍 [ROUTING] "Founding Design Engineer, AI Capability Development, Education Labs" @ anthropic
   Category: TECH (matched: "machine learning")
[2026-02-05T23:26:18.170Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T23:26:18.437Z] [BOT] ✅ Posted message: Founding Design Engineer, AI Capability Development, Education Labs @ anthropic in #💻・tech-jobs
[2026-02-05T23:26:18.437Z] [BOT] ✅ Industry: Founding Design Engineer, AI Capability Development, Education Labs @ anthropic
[2026-02-05T23:26:18.438Z] [BOT] 💾 Added channel posting: Founding Design Engineer, AI Capability Development, Education Labs @ anthropic → category channel (1 total channels)
[2026-02-05T23:26:18.438Z] [BOT] 💾 BEFORE MERGE: 2250 jobs in memory (cached)
[2026-02-05T23:26:18.494Z] [BOT] ✅ Loaded V2 database: 2249 jobs
💾 DISK STATE: 2249 jobs on disk
[2026-02-05T23:26:18.495Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2250
[2026-02-05T23:26:18.499Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:26:18.499Z] [BOT] 💾 AFTER MERGE: 2250 jobs (merged disk + memory)
[2026-02-05T23:26:18.501Z] [BOT] ✅ No jobs to archive (all 2250 jobs within 7-day window)
[2026-02-05T23:26:18.640Z] [BOT] 💾 Saved posted_jobs.json: 2250 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:26:20.322Z] [BOT] ✅ Posted message: Founding Design Engineer, AI Capability Development, Education Labs @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T23:26:20.323Z] [BOT] 💾 Added channel posting: Founding Design Engineer, AI Capability Development, Education Labs @ anthropic → location channel (2 total channels)
[2026-02-05T23:26:20.323Z] [BOT] 💾 BEFORE MERGE: 2250 jobs in memory (cached)
[2026-02-05T23:26:20.381Z] [BOT] ✅ Loaded V2 database: 2250 jobs
💾 DISK STATE: 2250 jobs on disk
[2026-02-05T23:26:20.382Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2250
[2026-02-05T23:26:20.387Z] [BOT] 🔀 Deep merged: Founding Design Engineer, AI Capability Development, Education Labs @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T23:26:20.387Z] [BOT] 💾 AFTER MERGE: 2250 jobs (merged disk + memory)
[2026-02-05T23:26:20.389Z] [BOT] ✅ No jobs to archive (all 2250 jobs within 7-day window)
[2026-02-05T23:26:20.513Z] [BOT] 💾 Saved posted_jobs.json: 2250 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:26:25.013Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-05T23:26:25.014Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "75a3848db8e287cb"
[2026-02-05T23:26:25.014Z] [BOT] ⏭️  Skipping duplicate: JID_d535d200 (posted within 7 days)
[2026-02-05T23:26:25.015Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "e0dbb98e40797433"
[2026-02-05T23:26:25.015Z] [BOT] ⏭️  Skipping duplicate: JID_d875e421 (posted within 7 days)
[2026-02-05T23:26:25.032Z] [BOT] ✅ Loaded pending queue: 197 total (190 pending, 7 enriched, 0 posted)
[2026-02-05T23:26:25.052Z] [BOT] ✅ Saved pending queue: 197 total (190 pending, 5 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T23:26:25.163Z] [BOT] 📂 Loaded 12479 existing routing entries
[2026-02-05T23:26:25.300Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12481
   Timestamp: 2026-02-05T23:26:25.253Z
[2026-02-05T23:26:25.301Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T23:26:25.301Z] [BOT] Total attempts: 52
   Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-05T23:26:25.302Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🌉・JID_739bbc0b: 2 posts
[2026-02-05T23:26:25.302Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2250 jobs in memory (cached)
[2026-02-05T23:26:25.364Z] [BOT] ✅ Loaded V2 database: 2250 jobs
💾 DISK STATE: 2250 jobs on disk
[2026-02-05T23:26:25.365Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2250
[2026-02-05T23:26:25.370Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:26:25.370Z] [BOT] 💾 AFTER MERGE: 2250 jobs (merged disk + memory)
[2026-02-05T23:26:25.371Z] [BOT] ✅ No jobs to archive (all 2250 jobs within 7-day window)
[2026-02-05T23:26:25.511Z] [BOT] 💾 Saved posted_jobs.json: 2250 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:26:25.511Z] [BOT] ✅ Database saved successfully
[2026-02-05T23:26:27.529Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*