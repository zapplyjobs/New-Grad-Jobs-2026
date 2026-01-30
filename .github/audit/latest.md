# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T19:20:12.105Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T19:19:50.831Z] ========================================
[2026-01-30T19:19:50.833Z] Discord Bot Execution Log
[2026-01-30T19:19:50.833Z] Environment: GitHub Actions
[2026-01-30T19:19:50.833Z] Node Version: v20.20.0
[2026-01-30T19:19:50.833Z] ========================================
[2026-01-30T19:19:50.833Z] Environment Variables Check:
[2026-01-30T19:19:50.833Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T19:19:50.833Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T19:19:50.833Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T19:19:50.834Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T19:19:50.834Z] 
Multi-Channel Configuration:
[2026-01-30T19:19:50.834Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T19:19:50.834Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T19:19:50.834Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T19:19:50.834Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T19:19:50.834Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T19:19:50.834Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T19:19:50.834Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T19:19:50.834Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T19:19:50.834Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T19:19:50.834Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T19:19:50.834Z] 
Data Files Check:
[2026-01-30T19:19:50.835Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T19:19:50.859Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3999074 bytes)
[2026-01-30T19:19:50.860Z] 
========================================
[2026-01-30T19:19:50.860Z] Starting Enhanced Discord Bot...
[2026-01-30T19:19:50.860Z] ========================================
[2026-01-30T19:19:51.393Z] [BOT] ✅ Loaded V2 database: 613 jobs
[2026-01-30T19:19:52.045Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T19:19:52.046Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T19:19:52.046Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T19:19:52.157Z] [BOT] ✅ Loaded pending queue: 2929 total (2295 pending, 50 enriched, 584 posted)
[2026-01-30T19:19:52.158Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T19:19:52.158Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T19:19:52.159Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T19:19:52.159Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T19:19:52.159Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T19:19:52.159Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T19:19:52.159Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T19:19:52.160Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T19:19:52.160Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T19:19:52.160Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T19:19:52.160Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T19:19:52.160Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-30T19:19:52.160Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T19:19:52.161Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T19:19:52.161Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T19:19:52.162Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T19:19:52.162Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T19:19:52.162Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T19:19:52.163Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T19:19:52.167Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T19:19:52.167Z] [BOT] 🚫 Skipping blacklisted job: Senior Hardware Reliability Engineer at samsara
[2026-01-30T19:19:52.167Z] [BOT] 🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
[2026-01-30T19:19:52.274Z] [BOT] ✅ Loaded pending queue: 2929 total (2295 pending, 50 enriched, 584 posted)
[2026-01-30T19:19:52.455Z] [BOT] ✅ Saved pending queue: 2927 total (2295 pending, 48 enriched, 584 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-30T19:19:52.456Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-30T19:19:52.456Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-30T19:19:52.457Z] [BOT] (30 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Account Executive, Commercial @ samsara: san diego, salt lake, los angeles, denver, boston, phoenix, arizona, portland
   - Mid-Market Account Executive - PubSec @ samsara: salt lake, denver, baltimore, chicago, houston, texas, charleston, dallas, san antonio, louisville
   - Select Major Account Executive EST/CST @ samsara: milwaukee, atlanta, austin, charlotte, columbia, dallas, hartford, houston, texas, jacksonville, miami, nashville, orlando, raleigh, san antonio, tallahassee, tampa
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T19:19:52.461Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-30T19:19:52.462Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial" @ samsara
[2026-01-30T19:19:52.462Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T19:19:52.483Z] [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T19:19:52.709Z] [BOT] ✅ Posted message: Account Executive, Commercial @ samsara in #💻・tech-jobs
[2026-01-30T19:19:52.709Z] [BOT] ✅ Industry: Account Executive, Commercial @ samsara
[2026-01-30T19:19:52.710Z] [BOT] 💾 Added channel posting: Account Executive, Commercial @ samsara → category channel (1 total channels)
[2026-01-30T19:19:52.710Z] [BOT] 💾 BEFORE MERGE: 614 jobs in memory (cached)
[2026-01-30T19:19:52.726Z] [BOT] ✅ Loaded V2 database: 613 jobs
💾 DISK STATE: 613 jobs on disk
[2026-01-30T19:19:52.726Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=614
[2026-01-30T19:19:52.728Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:19:52.728Z] [BOT] 💾 AFTER MERGE: 614 jobs (merged disk + memory)
[2026-01-30T19:19:52.729Z] [BOT] ✅ No jobs to archive (all 614 jobs within 7-day window)
[2026-01-30T19:19:52.777Z] [BOT] 💾 Saved posted_jobs.json: 614 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:19:54.280Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive - PubSec" @ samsara
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T19:19:54.497Z] [BOT] ✅ Posted message: Mid-Market Account Executive - PubSec @ samsara in #💻・tech-jobs
[2026-01-30T19:19:54.497Z] [BOT] ✅ Industry: Mid-Market Account Executive - PubSec @ samsara
[2026-01-30T19:19:54.498Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive - PubSec @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 615 jobs in memory (cached)
[2026-01-30T19:19:54.511Z] [BOT] ✅ Loaded V2 database: 614 jobs
[2026-01-30T19:19:54.511Z] [BOT] 💾 DISK STATE: 614 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=615
[2026-01-30T19:19:54.513Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:19:54.513Z] [BOT] 💾 AFTER MERGE: 615 jobs (merged disk + memory)
[2026-01-30T19:19:54.513Z] [BOT] ✅ No jobs to archive (all 615 jobs within 7-day window)
[2026-01-30T19:19:54.554Z] [BOT] 💾 Saved posted_jobs.json: 615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:19:59.058Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T19:19:59.058Z] [BOT] 📍 [ROUTING] "Core Enterprise Account Executive EST/CST - Remote - Houston, TX" @ samsara
   Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T19:19:59.421Z] [BOT] ✅ Posted message: Core Enterprise Account Executive EST/CST - Remote - Houston, TX @ samsara in #📊・JID_fb739488
  ✅ Industry: Core Enterprise Account Executive EST/CST - Remote - Houston, TX @ samsara
[2026-01-30T19:19:59.421Z] [BOT] 💾 Added channel posting: Core Enterprise Account Executive EST/CST - Remote - Houston, TX @ samsara → category channel (1 total channels)
[2026-01-30T19:19:59.422Z] [BOT] 💾 BEFORE MERGE: 616 jobs in memory (cached)
[2026-01-30T19:19:59.434Z] [BOT] ✅ Loaded V2 database: 615 jobs
💾 DISK STATE: 615 jobs on disk
[2026-01-30T19:19:59.434Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=616
[2026-01-30T19:19:59.436Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:19:59.436Z] [BOT] 💾 AFTER MERGE: 616 jobs (merged disk + memory)
[2026-01-30T19:19:59.437Z] [BOT] ✅ No jobs to archive (all 616 jobs within 7-day window)
[2026-01-30T19:19:59.480Z] [BOT] 💾 Saved posted_jobs.json: 616 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:20:03.981Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T19:20:03.982Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST" @ samsara
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T19:20:04.198Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST @ samsara in #💰・finance-jobs
  ✅ Industry: Select Major Account Executive EST/CST @ samsara
[2026-01-30T19:20:04.199Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST @ samsara → category channel (1 total channels)
[2026-01-30T19:20:04.199Z] [BOT] 💾 BEFORE MERGE: 617 jobs in memory (cached)
[2026-01-30T19:20:04.220Z] [BOT] ✅ Loaded V2 database: 616 jobs
💾 DISK STATE: 616 jobs on disk
[2026-01-30T19:20:04.220Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=617
[2026-01-30T19:20:04.221Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:20:04.221Z] [BOT] 💾 AFTER MERGE: 617 jobs (merged disk + memory)
[2026-01-30T19:20:04.222Z] [BOT] ✅ No jobs to archive (all 617 jobs within 7-day window)
[2026-01-30T19:20:04.274Z] [BOT] 💾 Saved posted_jobs.json: 617 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:20:08.777Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-30T19:20:08.778Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ce1872f..." not found, but found as SHA256 "3df9f1fc6cfae09c"
[2026-01-30T19:20:08.779Z] [BOT] ⏭️  Skipping duplicate: JID_0c44eeda (posted within 7 days)
[2026-01-30T19:20:08.779Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a3180e8..." not found, but found as SHA256 "a2b0d531e1913c61"
⏭️  Skipping duplicate: JID_4af0c27d (posted within 7 days)
[2026-01-30T19:20:08.779Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ce1872f..." not found, but found as SHA256 "aaa54e4d973c46a3"
[2026-01-30T19:20:08.779Z] [BOT] ⏭️  Skipping duplicate: JID_c25769a5 (posted within 7 days)
[2026-01-30T19:20:08.779Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e4e0171d..." not found, but found as SHA256 "ebf98eda288bfdd8"
⏭️  Skipping duplicate: JID_3e169f30 (posted within 7 days)
[2026-01-30T19:20:08.893Z] [BOT] ✅ Loaded pending queue: 2927 total (2295 pending, 48 enriched, 584 posted)
[2026-01-30T19:20:09.085Z] [BOT] ✅ Saved pending queue: 2927 total (2295 pending, 44 enriched, 588 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T19:20:09.193Z] [BOT] 📂 Loaded 10675 existing routing entries
[2026-01-30T19:20:09.334Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T19:20:09.335Z] [BOT] New entries: 4
   Total entries: 10679
   Timestamp: 2026-01-30T19:20:09.274Z
[2026-01-30T19:20:09.336Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T19:20:09.336Z] [BOT] Total attempts: 20
   Successful: 4
   Failed: 0
   Skipped: 16
[2026-01-30T19:20:09.336Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T19:20:09.336Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2026-01-30T19:20:09.336Z] [BOT] 1. #💻・tech-jobs: 2 posts
     2. #📊・JID_fb739488: 1 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-30T19:20:09.337Z] [BOT] [STATS] Channel stats saved
[2026-01-30T19:20:09.337Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 617 jobs in memory (cached)
[2026-01-30T19:20:09.349Z] [BOT] ✅ Loaded V2 database: 617 jobs
💾 DISK STATE: 617 jobs on disk
[2026-01-30T19:20:09.349Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=617
[2026-01-30T19:20:09.351Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:20:09.351Z] [BOT] 💾 AFTER MERGE: 617 jobs (merged disk + memory)
[2026-01-30T19:20:09.351Z] [BOT] ✅ No jobs to archive (all 617 jobs within 7-day window)
[2026-01-30T19:20:09.391Z] [BOT] 💾 Saved posted_jobs.json: 617 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:20:09.391Z] [BOT] ✅ Database saved successfully
[2026-01-30T19:20:11.422Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*