# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T19:36:00.645Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T19:35:37.017Z] ========================================
[2026-01-30T19:35:37.019Z] Discord Bot Execution Log
[2026-01-30T19:35:37.019Z] Environment: GitHub Actions
[2026-01-30T19:35:37.019Z] Node Version: v20.20.0
[2026-01-30T19:35:37.019Z] ========================================
[2026-01-30T19:35:37.019Z] Environment Variables Check:
[2026-01-30T19:35:37.019Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T19:35:37.019Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T19:35:37.019Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T19:35:37.019Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T19:35:37.019Z] 
Multi-Channel Configuration:
[2026-01-30T19:35:37.019Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T19:35:37.020Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T19:35:37.020Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T19:35:37.020Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T19:35:37.020Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T19:35:37.020Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T19:35:37.020Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T19:35:37.020Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T19:35:37.020Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T19:35:37.020Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T19:35:37.020Z] 
Data Files Check:
[2026-01-30T19:35:37.021Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T19:35:37.050Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4036890 bytes)
[2026-01-30T19:35:37.050Z] 
========================================
[2026-01-30T19:35:37.050Z] Starting Enhanced Discord Bot...
[2026-01-30T19:35:37.050Z] ========================================
[2026-01-30T19:35:37.532Z] [BOT] ✅ Loaded V2 database: 617 jobs
[2026-01-30T19:35:38.172Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T19:35:38.172Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T19:35:38.172Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T19:35:38.328Z] [BOT] ✅ Loaded pending queue: 2928 total (2290 pending, 50 enriched, 588 posted)
[2026-01-30T19:35:38.328Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T19:35:38.328Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T19:35:38.329Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T19:35:38.329Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T19:35:38.329Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T19:35:38.329Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T19:35:38.330Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T19:35:38.330Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T19:35:38.330Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-30T19:35:38.330Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T19:35:38.330Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T19:35:38.330Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-30T19:35:38.331Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T19:35:38.331Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T19:35:38.331Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T19:35:38.332Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T19:35:38.332Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T19:35:38.332Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T19:35:38.336Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T19:35:38.336Z] [BOT] 🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
[2026-01-30T19:35:38.337Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Senior Staff Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Systems EPM at samsara
[2026-01-30T19:35:38.483Z] [BOT] ✅ Loaded pending queue: 2928 total (2290 pending, 50 enriched, 588 posted)
[2026-01-30T19:35:38.660Z] [BOT] ✅ Saved pending queue: 2924 total (2290 pending, 46 enriched, 588 posted)
🗑️ Removed 4 blacklisted jobs from pending queue
📋 After blacklist filter: 32 jobs (4 blacklisted)
[2026-01-30T19:35:38.660Z] [BOT] 📋 After data quality filter: 32 jobs (0 invalid)
[2026-01-30T19:35:38.661Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-30T19:35:38.661Z] [BOT] (27 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Account Executive, Commercial @ samsara: salt lake, los angeles, denver, boston, phoenix, arizona, portland
   - Mid-Market Account Executive - PubSec @ samsara: denver, baltimore, chicago, houston, texas, charleston, dallas, san antonio, louisville
   - Select Major Account Executive EST/CST - Atlanta, GA @ samsara: atlanta, austin, charlotte, columbia, dallas, hartford, houston, texas, jacksonville, miami, nashville, orlando, raleigh, san antonio, tallahassee, tampa
⏸️ Limiting to 10 jobs this run, 31 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T19:35:38.664Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-30T19:35:38.665Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial" @ samsara
[2026-01-30T19:35:38.665Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T19:35:38.682Z] [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T19:35:38.947Z] [BOT] ✅ Posted message: Account Executive, Commercial @ samsara in #💻・tech-jobs
  ✅ Industry: Account Executive, Commercial @ samsara
[2026-01-30T19:35:38.947Z] [BOT] 💾 Added channel posting: Account Executive, Commercial @ samsara → category channel (1 total channels)
[2026-01-30T19:35:38.948Z] [BOT] 💾 BEFORE MERGE: 618 jobs in memory (cached)
[2026-01-30T19:35:38.968Z] [BOT] ✅ Loaded V2 database: 617 jobs
💾 DISK STATE: 617 jobs on disk
[2026-01-30T19:35:38.968Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=618
[2026-01-30T19:35:38.970Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:35:38.970Z] [BOT] 💾 AFTER MERGE: 618 jobs (merged disk + memory)
[2026-01-30T19:35:38.971Z] [BOT] ✅ No jobs to archive (all 618 jobs within 7-day window)
[2026-01-30T19:35:39.025Z] [BOT] 💾 Saved posted_jobs.json: 618 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:35:40.527Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive - PubSec" @ samsara
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T19:35:40.747Z] [BOT] ✅ Posted message: Mid-Market Account Executive - PubSec @ samsara in #💻・tech-jobs
  ✅ Industry: Mid-Market Account Executive - PubSec @ samsara
[2026-01-30T19:35:40.748Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive - PubSec @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 619 jobs in memory (cached)
[2026-01-30T19:35:40.767Z] [BOT] ✅ Loaded V2 database: 618 jobs
💾 DISK STATE: 618 jobs on disk
[2026-01-30T19:35:40.767Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=619
[2026-01-30T19:35:40.769Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 619 jobs (merged disk + memory)
[2026-01-30T19:35:40.769Z] [BOT] ✅ No jobs to archive (all 619 jobs within 7-day window)
[2026-01-30T19:35:40.815Z] [BOT] 💾 Saved posted_jobs.json: 619 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:35:42.316Z] [BOT] 📍 [ROUTING] "Software Engineer II - Mobile Platform" @ samsara
   Category: TECH (matched: "software")
[2026-01-30T19:35:42.316Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T19:35:42.521Z] [BOT] ✅ Posted message: Software Engineer II - Mobile Platform @ samsara in #💻・tech-jobs
[2026-01-30T19:35:42.521Z] [BOT] ✅ Industry: Software Engineer II - Mobile Platform @ samsara
[2026-01-30T19:35:42.522Z] [BOT] 💾 Added channel posting: Software Engineer II - Mobile Platform @ samsara → category channel (1 total channels)
[2026-01-30T19:35:42.522Z] [BOT] 💾 BEFORE MERGE: 620 jobs in memory (cached)
[2026-01-30T19:35:42.540Z] [BOT] ✅ Loaded V2 database: 619 jobs
💾 DISK STATE: 619 jobs on disk
[2026-01-30T19:35:42.540Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=620
[2026-01-30T19:35:42.541Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 620 jobs (merged disk + memory)
[2026-01-30T19:35:42.542Z] [BOT] ✅ No jobs to archive (all 620 jobs within 7-day window)
[2026-01-30T19:35:42.588Z] [BOT] 💾 Saved posted_jobs.json: 620 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:35:47.091Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T19:35:47.092Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Atlanta, GA" @ samsara
   Category: FINANCE (matched: "finance")
[2026-01-30T19:35:47.092Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T19:35:47.388Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Atlanta, GA @ samsara in #💰・finance-jobs
  ✅ Industry: Select Major Account Executive EST/CST - Atlanta, GA @ samsara
[2026-01-30T19:35:47.389Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Atlanta, GA @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 621 jobs in memory (cached)
[2026-01-30T19:35:47.414Z] [BOT] ✅ Loaded V2 database: 620 jobs
💾 DISK STATE: 620 jobs on disk
[2026-01-30T19:35:47.414Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=621
[2026-01-30T19:35:47.416Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:35:47.416Z] [BOT] 💾 AFTER MERGE: 621 jobs (merged disk + memory)
[2026-01-30T19:35:47.416Z] [BOT] ✅ No jobs to archive (all 621 jobs within 7-day window)
[2026-01-30T19:35:47.474Z] [BOT] 💾 Saved posted_jobs.json: 621 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:35:51.976Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-30T19:35:51.977Z] [BOT] 📍 [ROUTING] "Solutions Integration Engineer III" @ samsara
   Category: AI (matched: "AI/ML")
[2026-01-30T19:35:51.978Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T19:35:52.228Z] [BOT] ✅ Posted message: Solutions Integration Engineer III @ samsara in #🤖・ai-jobs
[2026-01-30T19:35:52.228Z] [BOT] ✅ Industry: Solutions Integration Engineer III @ samsara
[2026-01-30T19:35:52.229Z] [BOT] 💾 Added channel posting: Solutions Integration Engineer III @ samsara → category channel (1 total channels)
[2026-01-30T19:35:52.229Z] [BOT] 💾 BEFORE MERGE: 622 jobs in memory (cached)
[2026-01-30T19:35:52.247Z] [BOT] ✅ Loaded V2 database: 621 jobs
💾 DISK STATE: 621 jobs on disk
[2026-01-30T19:35:52.247Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=622
[2026-01-30T19:35:52.249Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 622 jobs (merged disk + memory)
[2026-01-30T19:35:52.249Z] [BOT] ✅ No jobs to archive (all 622 jobs within 7-day window)
[2026-01-30T19:35:52.302Z] [BOT] 💾 Saved posted_jobs.json: 622 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:35:56.805Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-30T19:35:56.806Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ce1872f..." not found, but found as SHA256 "cc800850e5f36bc6"
[2026-01-30T19:35:56.806Z] [BOT] ⏭️  Skipping duplicate: JID_1e5f69ac (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_dd557031..." not found, but found as SHA256 "ee7c8a81700794c7"
⏭️  Skipping duplicate: JID_c67ba95c (posted within 7 days)
[2026-01-30T19:35:56.806Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eafe9357..." not found, but found as SHA256 "c4ac457a1e146407"
⏭️  Skipping duplicate: JID_32d2e687 (posted within 7 days)
[2026-01-30T19:35:56.806Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_13e4a2ec..." not found, but found as SHA256 "dbcd0d268423dbe2"
[2026-01-30T19:35:56.806Z] [BOT] ⏭️  Skipping duplicate: JID_f676ed39 (posted within 7 days)
[2026-01-30T19:35:56.806Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a2fbe3e..." not found, but found as SHA256 "2234386b503762f8"
⏭️  Skipping duplicate: JID_a5f1480c (posted within 7 days)
[2026-01-30T19:35:56.977Z] [BOT] ✅ Loaded pending queue: 2924 total (2290 pending, 46 enriched, 588 posted)
[2026-01-30T19:35:57.141Z] [BOT] ✅ Saved pending queue: 2924 total (2290 pending, 41 enriched, 593 posted)
📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T19:35:57.238Z] [BOT] 📂 Loaded 10679 existing routing entries
[2026-01-30T19:35:57.353Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 10684
   Timestamp: 2026-01-30T19:35:57.315Z
[2026-01-30T19:35:57.354Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T19:35:57.354Z] [BOT] Total attempts: 23
   Successful: 5
   Failed: 0
   Skipped: 18
[2026-01-30T19:35:57.354Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T19:35:57.354Z] [BOT] Last cleanup: Never
   Total posts: 5
   Channels used: 3
[2026-01-30T19:35:57.354Z] [BOT] Top channels:
[2026-01-30T19:35:57.355Z] [BOT] 1. #💻・tech-jobs: 3 posts
     2. #💰・finance-jobs: 1 posts
     3. #🤖・ai-jobs: 1 posts
[2026-01-30T19:35:57.355Z] [BOT] [STATS] Channel stats saved
[2026-01-30T19:35:57.355Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 622 jobs in memory (cached)
[2026-01-30T19:35:57.382Z] [BOT] ✅ Loaded V2 database: 622 jobs
💾 DISK STATE: 622 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=622
[2026-01-30T19:35:57.383Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:35:57.383Z] [BOT] 💾 AFTER MERGE: 622 jobs (merged disk + memory)
[2026-01-30T19:35:57.384Z] [BOT] ✅ No jobs to archive (all 622 jobs within 7-day window)
[2026-01-30T19:35:57.439Z] [BOT] 💾 Saved posted_jobs.json: 622 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:35:57.439Z] [BOT] ✅ Database saved successfully
[2026-01-30T19:35:59.465Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*