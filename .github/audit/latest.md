# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T20:18:09.827Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T20:17:27.968Z] ========================================
[2026-01-30T20:17:27.970Z] Discord Bot Execution Log
[2026-01-30T20:17:27.970Z] Environment: GitHub Actions
[2026-01-30T20:17:27.970Z] Node Version: v20.20.0
[2026-01-30T20:17:27.970Z] ========================================
[2026-01-30T20:17:27.970Z] Environment Variables Check:
[2026-01-30T20:17:27.970Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T20:17:27.971Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T20:17:27.971Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T20:17:27.971Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T20:17:27.971Z] 
Multi-Channel Configuration:
[2026-01-30T20:17:27.971Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T20:17:27.971Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T20:17:27.971Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T20:17:27.971Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T20:17:27.971Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T20:17:27.971Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T20:17:27.971Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T20:17:27.971Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T20:17:27.971Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T20:17:27.971Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T20:17:27.972Z] 
Data Files Check:
[2026-01-30T20:17:27.973Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T20:17:28.000Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4230181 bytes)
[2026-01-30T20:17:28.000Z] 
========================================
[2026-01-30T20:17:28.000Z] Starting Enhanced Discord Bot...
[2026-01-30T20:17:28.000Z] ========================================
[2026-01-30T20:17:28.532Z] [BOT] ✅ Loaded V2 database: 642 jobs
[2026-01-30T20:17:28.992Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T20:17:28.992Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T20:17:28.993Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T20:17:29.120Z] [BOT] ✅ Loaded pending queue: 2933 total (2270 pending, 50 enriched, 613 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T20:17:29.121Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T20:17:29.122Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T20:17:29.122Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T20:17:29.122Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T20:17:29.123Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T20:17:29.123Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T20:17:29.123Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T20:17:29.123Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T20:17:29.123Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T20:17:29.124Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T20:17:29.124Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T20:17:29.124Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T20:17:29.124Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T20:17:29.124Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-30T20:17:29.125Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-30T20:17:29.125Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T20:17:29.125Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T20:17:29.129Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T20:17:29.129Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
[2026-01-30T20:17:29.129Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Global 3rd Party Partnerships at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
[2026-01-30T20:17:29.129Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-01-30T20:17:29.243Z] [BOT] ✅ Loaded pending queue: 2933 total (2270 pending, 50 enriched, 613 posted)
[2026-01-30T20:17:29.423Z] [BOT] ✅ Saved pending queue: 2927 total (2270 pending, 44 enriched, 613 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
📋 After blacklist filter: 30 jobs (6 blacklisted)
[2026-01-30T20:17:29.424Z] [BOT] 📋 After data quality filter: 30 jobs (0 invalid)
[2026-01-30T20:17:29.425Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-30T20:17:29.425Z] [BOT] (20 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Account Executive, Commercial @ samsara: boston, phoenix, arizona, portland
   - Mid-Market Account Executive - PubSec @ samsara: houston, texas, charleston, dallas, san antonio, louisville
   - Select Major Account Executive EST/CST - Columbia, SC @ samsara: columbia, dallas, hartford, houston, texas, jacksonville, miami, nashville, orlando, raleigh, san antonio, tallahassee, tampa
   - Android Software Engineer, Ad Formats @ reddit: san francisco, new york, chicago
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T20:17:29.428Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-30T20:17:29.429Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial" @ samsara
   Category: TECH (default)
[2026-01-30T20:17:29.430Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:17:29.448Z] [BOT ERROR] (node:2588) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T20:17:29.680Z] [BOT] ✅ Posted message: Account Executive, Commercial @ samsara in #💻・tech-jobs
  ✅ Industry: Account Executive, Commercial @ samsara
[2026-01-30T20:17:29.680Z] [BOT] 💾 Added channel posting: Account Executive, Commercial @ samsara → category channel (1 total channels)
[2026-01-30T20:17:29.681Z] [BOT] 💾 BEFORE MERGE: 643 jobs in memory (cached)
[2026-01-30T20:17:29.698Z] [BOT] ✅ Loaded V2 database: 642 jobs
💾 DISK STATE: 642 jobs on disk
[2026-01-30T20:17:29.698Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=643
[2026-01-30T20:17:29.700Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:17:29.700Z] [BOT] 💾 AFTER MERGE: 643 jobs (merged disk + memory)
[2026-01-30T20:17:29.701Z] [BOT] ✅ No jobs to archive (all 643 jobs within 7-day window)
[2026-01-30T20:17:29.750Z] [BOT] 💾 Saved posted_jobs.json: 643 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:17:31.253Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive - PubSec" @ samsara
   Category: TECH (default)
[2026-01-30T20:17:31.253Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:17:31.496Z] [BOT] ✅ Posted message: Mid-Market Account Executive - PubSec @ samsara in #💻・tech-jobs
[2026-01-30T20:17:31.497Z] [BOT] ✅ Industry: Mid-Market Account Executive - PubSec @ samsara
[2026-01-30T20:17:31.497Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive - PubSec @ samsara → category channel (1 total channels)
[2026-01-30T20:17:31.497Z] [BOT] 💾 BEFORE MERGE: 644 jobs in memory (cached)
[2026-01-30T20:17:31.512Z] [BOT] ✅ Loaded V2 database: 643 jobs
💾 DISK STATE: 643 jobs on disk
[2026-01-30T20:17:31.512Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=644
[2026-01-30T20:17:31.514Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:17:31.514Z] [BOT] 💾 AFTER MERGE: 644 jobs (merged disk + memory)
[2026-01-30T20:17:31.514Z] [BOT] ✅ No jobs to archive (all 644 jobs within 7-day window)
[2026-01-30T20:17:31.558Z] [BOT] 💾 Saved posted_jobs.json: 644 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:17:36.058Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T20:17:36.059Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Columbia, SC" @ samsara
   Category: FINANCE (matched: "finance")
[2026-01-30T20:17:36.059Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T20:17:36.550Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Columbia, SC @ samsara in #💰・finance-jobs
[2026-01-30T20:17:36.551Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Columbia, SC @ samsara
[2026-01-30T20:17:36.551Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Columbia, SC @ samsara → category channel (1 total channels)
[2026-01-30T20:17:36.551Z] [BOT] 💾 BEFORE MERGE: 645 jobs in memory (cached)
[2026-01-30T20:17:36.566Z] [BOT] ✅ Loaded V2 database: 644 jobs
💾 DISK STATE: 644 jobs on disk
[2026-01-30T20:17:36.566Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=645
[2026-01-30T20:17:36.567Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 645 jobs (merged disk + memory)
[2026-01-30T20:17:36.568Z] [BOT] ✅ No jobs to archive (all 645 jobs within 7-day window)
[2026-01-30T20:17:36.611Z] [BOT] 💾 Saved posted_jobs.json: 645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:17:41.112Z] [BOT] 📌 Posting 7 jobs to #🤖・ai-jobs
[2026-01-30T20:17:41.113Z] [BOT] 📍 [ROUTING] "Android Software Engineer, Ad Formats" @ reddit
[2026-01-30T20:17:41.114Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T20:17:41.114Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T20:17:41.312Z] [BOT] ✅ Posted message: Android Software Engineer, Ad Formats @ reddit in #🤖・ai-jobs
[2026-01-30T20:17:41.312Z] [BOT] ✅ Industry: Android Software Engineer, Ad Formats @ reddit
[2026-01-30T20:17:41.312Z] [BOT] 💾 Added channel posting: Android Software Engineer, Ad Formats @ reddit → category channel (1 total channels)
[2026-01-30T20:17:41.312Z] [BOT] 💾 BEFORE MERGE: 646 jobs in memory (cached)
[2026-01-30T20:17:41.335Z] [BOT] ✅ Loaded V2 database: 645 jobs
💾 DISK STATE: 645 jobs on disk
[2026-01-30T20:17:41.335Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=646
[2026-01-30T20:17:41.337Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:17:41.337Z] [BOT] 💾 AFTER MERGE: 646 jobs (merged disk + memory)
[2026-01-30T20:17:41.337Z] [BOT] ✅ No jobs to archive (all 646 jobs within 7-day window)
[2026-01-30T20:17:41.392Z] [BOT] 💾 Saved posted_jobs.json: 646 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:17:42.894Z] [BOT] 📍 [ROUTING] "Client Account Executive, Mid-Market (App Dev)" @ reddit
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T20:17:43.121Z] [BOT] ✅ Posted message: Client Account Executive, Mid-Market (App Dev) @ reddit in #🤖・ai-jobs
  ✅ Industry: Client Account Executive, Mid-Market (App Dev) @ reddit
[2026-01-30T20:17:43.121Z] [BOT] 💾 Added channel posting: Client Account Executive, Mid-Market (App Dev) @ reddit → category channel (1 total channels)
[2026-01-30T20:17:43.121Z] [BOT] 💾 BEFORE MERGE: 647 jobs in memory (cached)
[2026-01-30T20:17:43.136Z] [BOT] ✅ Loaded V2 database: 646 jobs
💾 DISK STATE: 646 jobs on disk
[2026-01-30T20:17:43.136Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=647
[2026-01-30T20:17:43.138Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 647 jobs (merged disk + memory)
[2026-01-30T20:17:43.139Z] [BOT] ✅ No jobs to archive (all 647 jobs within 7-day window)
[2026-01-30T20:17:43.190Z] [BOT] 💾 Saved posted_jobs.json: 647 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:17:46.329Z] [BOT] ✅ Posted message: Client Account Executive, Mid-Market (App Dev) @ reddit in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T20:17:46.329Z] [BOT] 💾 Added channel posting: Client Account Executive, Mid-Market (App Dev) @ reddit → location channel (2 total channels)
[2026-01-30T20:17:46.329Z] [BOT] 💾 BEFORE MERGE: 647 jobs in memory (cached)
[2026-01-30T20:17:46.343Z] [BOT] ✅ Loaded V2 database: 647 jobs
💾 DISK STATE: 647 jobs on disk
[2026-01-30T20:17:46.343Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=647
[2026-01-30T20:17:46.345Z] [BOT] 🔀 Deep merged: Client Account Executive, Mid-Market (App Dev) @ reddit (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 647 jobs (merged disk + memory)
[2026-01-30T20:17:46.346Z] [BOT] ✅ No jobs to archive (all 647 jobs within 7-day window)
[2026-01-30T20:17:46.389Z] [BOT] 💾 Saved posted_jobs.json: 647 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:17:47.891Z] [BOT] 📍 [ROUTING] "Client Account Executive, Mid-Market Sales (B2B Services)" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-30T20:17:47.891Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T20:17:48.052Z] [BOT] ✅ Posted message: Client Account Executive, Mid-Market Sales (B2B Services) @ reddit in #🤖・ai-jobs
[2026-01-30T20:17:48.053Z] [BOT] ✅ Industry: Client Account Executive, Mid-Market Sales (B2B Services) @ reddit
[2026-01-30T20:17:48.053Z] [BOT] 💾 Added channel posting: Client Account Executive, Mid-Market Sales (B2B Services) @ reddit → category channel (1 total channels)
[2026-01-30T20:17:48.053Z] [BOT] 💾 BEFORE MERGE: 648 jobs in memory (cached)
[2026-01-30T20:17:48.067Z] [BOT] ✅ Loaded V2 database: 647 jobs
💾 DISK STATE: 647 jobs on disk
[2026-01-30T20:17:48.068Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=648
[2026-01-30T20:17:48.069Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:17:48.069Z] [BOT] 💾 AFTER MERGE: 648 jobs (merged disk + memory)
[2026-01-30T20:17:48.070Z] [BOT] ✅ No jobs to archive (all 648 jobs within 7-day window)
[2026-01-30T20:17:48.115Z] [BOT] 💾 Saved posted_jobs.json: 648 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:17:49.616Z] [BOT] 📍 [ROUTING] "Client Account Executive, Mid-Market Sales (B2C Services)" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-30T20:17:49.616Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T20:17:49.881Z] [BOT] ✅ Posted message: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit in #🤖・ai-jobs
[2026-01-30T20:17:49.882Z] [BOT] ✅ Industry: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit
[2026-01-30T20:17:49.882Z] [BOT] 💾 Added channel posting: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit → category channel (1 total channels)
[2026-01-30T20:17:49.882Z] [BOT] 💾 BEFORE MERGE: 649 jobs in memory (cached)
[2026-01-30T20:17:49.896Z] [BOT] ✅ Loaded V2 database: 648 jobs
💾 DISK STATE: 648 jobs on disk
[2026-01-30T20:17:49.896Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=649
[2026-01-30T20:17:49.898Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 649 jobs (merged disk + memory)
[2026-01-30T20:17:49.898Z] [BOT] ✅ No jobs to archive (all 649 jobs within 7-day window)
[2026-01-30T20:17:49.943Z] [BOT] 💾 Saved posted_jobs.json: 649 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:17:52.929Z] [BOT] ✅ Posted message: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T20:17:52.929Z] [BOT] 💾 Added channel posting: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit → location channel (2 total channels)
[2026-01-30T20:17:52.929Z] [BOT] 💾 BEFORE MERGE: 649 jobs in memory (cached)
[2026-01-30T20:17:52.944Z] [BOT] ✅ Loaded V2 database: 649 jobs
💾 DISK STATE: 649 jobs on disk
[2026-01-30T20:17:52.944Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=649
[2026-01-30T20:17:52.945Z] [BOT] 🔀 Deep merged: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T20:17:52.945Z] [BOT] 💾 AFTER MERGE: 649 jobs (merged disk + memory)
[2026-01-30T20:17:52.946Z] [BOT] ✅ No jobs to archive (all 649 jobs within 7-day window)
[2026-01-30T20:17:52.991Z] [BOT] 💾 Saved posted_jobs.json: 649 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:17:54.492Z] [BOT] 📍 [ROUTING] "Client Partner, Mid-Market (Agency Acquisitions)" @ reddit
[2026-01-30T20:17:54.493Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T20:17:54.732Z] [BOT] ✅ Posted message: Client Partner, Mid-Market (Agency Acquisitions) @ reddit in #🤖・ai-jobs
[2026-01-30T20:17:54.733Z] [BOT] ✅ Industry: Client Partner, Mid-Market (Agency Acquisitions) @ reddit
[2026-01-30T20:17:54.733Z] [BOT] 💾 Added channel posting: Client Partner, Mid-Market (Agency Acquisitions) @ reddit → category channel (1 total channels)
[2026-01-30T20:17:54.733Z] [BOT] 💾 BEFORE MERGE: 650 jobs in memory (cached)
[2026-01-30T20:17:54.747Z] [BOT] ✅ Loaded V2 database: 649 jobs
💾 DISK STATE: 649 jobs on disk
[2026-01-30T20:17:54.747Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=650
[2026-01-30T20:17:54.749Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:17:54.749Z] [BOT] 💾 AFTER MERGE: 650 jobs (merged disk + memory)
[2026-01-30T20:17:54.749Z] [BOT] ✅ No jobs to archive (all 650 jobs within 7-day window)
[2026-01-30T20:17:54.794Z] [BOT] 💾 Saved posted_jobs.json: 650 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:17:56.564Z] [BOT] ✅ Posted message: Client Partner, Mid-Market (Agency Acquisitions) @ reddit in #🗽・JID_98d4f0de
[2026-01-30T20:17:56.564Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T20:17:56.564Z] [BOT] 💾 Added channel posting: Client Partner, Mid-Market (Agency Acquisitions) @ reddit → location channel (2 total channels)
[2026-01-30T20:17:56.564Z] [BOT] 💾 BEFORE MERGE: 650 jobs in memory (cached)
[2026-01-30T20:17:56.578Z] [BOT] ✅ Loaded V2 database: 650 jobs
💾 DISK STATE: 650 jobs on disk
[2026-01-30T20:17:56.578Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=650
[2026-01-30T20:17:56.579Z] [BOT] 🔀 Deep merged: Client Partner, Mid-Market (Agency Acquisitions) @ reddit (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T20:17:56.579Z] [BOT] 💾 AFTER MERGE: 650 jobs (merged disk + memory)
[2026-01-30T20:17:56.580Z] [BOT] ✅ No jobs to archive (all 650 jobs within 7-day window)
[2026-01-30T20:17:56.625Z] [BOT] 💾 Saved posted_jobs.json: 650 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:17:58.126Z] [BOT] 📍 [ROUTING] "Client Partner, Mid-Market (Services Acquisitions)" @ reddit
[2026-01-30T20:17:58.127Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T20:17:58.270Z] [BOT] ✅ Posted message: Client Partner, Mid-Market (Services Acquisitions) @ reddit in #🤖・ai-jobs
  ✅ Industry: Client Partner, Mid-Market (Services Acquisitions) @ reddit
[2026-01-30T20:17:58.271Z] [BOT] 💾 Added channel posting: Client Partner, Mid-Market (Services Acquisitions) @ reddit → category channel (1 total channels)
💾 BEFORE MERGE: 651 jobs in memory (cached)
[2026-01-30T20:17:58.284Z] [BOT] ✅ Loaded V2 database: 650 jobs
💾 DISK STATE: 650 jobs on disk
[2026-01-30T20:17:58.285Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=651
[2026-01-30T20:17:58.286Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 651 jobs (merged disk + memory)
[2026-01-30T20:17:58.287Z] [BOT] ✅ No jobs to archive (all 651 jobs within 7-day window)
[2026-01-30T20:17:58.331Z] [BOT] 💾 Saved posted_jobs.json: 651 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:17:59.833Z] [BOT] 📍 [ROUTING] "Counsel, Product & Platform Compliance" @ reddit
[2026-01-30T20:17:59.833Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T20:18:00.013Z] [BOT] ✅ Posted message: Counsel, Product & Platform Compliance @ reddit in #🤖・ai-jobs
  ✅ Industry: Counsel, Product & Platform Compliance @ reddit
[2026-01-30T20:18:00.013Z] [BOT] 💾 Added channel posting: Counsel, Product & Platform Compliance @ reddit → category channel (1 total channels)
[2026-01-30T20:18:00.013Z] [BOT] 💾 BEFORE MERGE: 652 jobs in memory (cached)
[2026-01-30T20:18:00.028Z] [BOT] ✅ Loaded V2 database: 651 jobs
💾 DISK STATE: 651 jobs on disk
[2026-01-30T20:18:00.028Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=652
[2026-01-30T20:18:00.029Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:18:00.030Z] [BOT] 💾 AFTER MERGE: 652 jobs (merged disk + memory)
[2026-01-30T20:18:00.030Z] [BOT] ✅ No jobs to archive (all 652 jobs within 7-day window)
[2026-01-30T20:18:00.076Z] [BOT] 💾 Saved posted_jobs.json: 652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:18:01.837Z] [BOT] ✅ Posted message: Counsel, Product & Platform Compliance @ reddit in #🗽・JID_98d4f0de
[2026-01-30T20:18:01.837Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T20:18:01.837Z] [BOT] 💾 Added channel posting: Counsel, Product & Platform Compliance @ reddit → location channel (2 total channels)
[2026-01-30T20:18:01.837Z] [BOT] 💾 BEFORE MERGE: 652 jobs in memory (cached)
[2026-01-30T20:18:01.851Z] [BOT] ✅ Loaded V2 database: 652 jobs
💾 DISK STATE: 652 jobs on disk
[2026-01-30T20:18:01.852Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=652
[2026-01-30T20:18:01.853Z] [BOT] 🔀 Deep merged: Counsel, Product & Platform Compliance @ reddit (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T20:18:01.853Z] [BOT] 💾 AFTER MERGE: 652 jobs (merged disk + memory)
[2026-01-30T20:18:01.854Z] [BOT] ✅ No jobs to archive (all 652 jobs within 7-day window)
[2026-01-30T20:18:01.898Z] [BOT] 💾 Saved posted_jobs.json: 652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:18:06.401Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T20:18:06.402Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a3180e8..." not found, but found as SHA256 "b6ea0214add5505e"
[2026-01-30T20:18:06.402Z] [BOT] ⏭️  Skipping duplicate: JID_9d63bb2f (posted within 7 days)
[2026-01-30T20:18:06.402Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dd557031..." not found, but found as SHA256 "1d8b18f36098b52a"
⏭️  Skipping duplicate: JID_ddd2cfaa (posted within 7 days)
[2026-01-30T20:18:06.402Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eafe9357..." not found, but found as SHA256 "48a49d7e8d781227"
[2026-01-30T20:18:06.402Z] [BOT] ⏭️  Skipping duplicate: JID_e82c03ca (posted within 7 days)
[2026-01-30T20:18:06.403Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2f443385..." not found, but found as SHA256 "2b5e3069e113554e"
[2026-01-30T20:18:06.403Z] [BOT] ⏭️  Skipping duplicate: JID_4cf4e6fa (posted within 7 days)
[2026-01-30T20:18:06.404Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2f443385..." not found, but found as SHA256 "a705d729696cd70d"
⏭️  Skipping duplicate: JID_5e2048d2 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_2f443385..." not found, but found as SHA256 "9d50f55fac433d99"
⏭️  Skipping duplicate: JID_6fcd7373 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_2f443385..." not found, but found as SHA256 "1a226c81897508d3"
⏭️  Skipping duplicate: JID_811cd046 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_74cbbd6e..." not found, but found as SHA256 "3e8ac719e8789b65"
⏭️  Skipping duplicate: JID_7774d1e7 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_74cbbd6e..." not found, but found as SHA256 "8f66ed1d58f31918"
⏭️  Skipping duplicate: JID_322b88f9 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_d8d97f43..." not found, but found as SHA256 "59aac2c3eb1c4828"
⏭️  Skipping duplicate: JID_98004585 (posted within 7 days)
[2026-01-30T20:18:06.510Z] [BOT] ✅ Loaded pending queue: 2927 total (2270 pending, 44 enriched, 613 posted)
[2026-01-30T20:18:06.692Z] [BOT] ✅ Saved pending queue: 2927 total (2270 pending, 34 enriched, 623 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T20:18:06.784Z] [BOT] 📂 Loaded 10704 existing routing entries
[2026-01-30T20:18:06.900Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T20:18:06.901Z] [BOT] Total entries: 10714
   Timestamp: 2026-01-30T20:18:06.867Z
[2026-01-30T20:18:06.901Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 34
[2026-01-30T20:18:06.901Z] [BOT] Successful: 14
   Failed: 0
   Skipped: 20
[2026-01-30T20:18:06.902Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 7 posts
     2. #🗽・JID_98d4f0de: 4 posts
     3. #💻・tech-jobs: 2 posts
     4. #💰・finance-jobs: 1 posts
[2026-01-30T20:18:06.902Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 652 jobs in memory (cached)
[2026-01-30T20:18:06.924Z] [BOT] ✅ Loaded V2 database: 652 jobs
[2026-01-30T20:18:06.926Z] [BOT] 💾 DISK STATE: 652 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=652
[2026-01-30T20:18:06.939Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 652 jobs (merged disk + memory)
✅ No jobs to archive (all 652 jobs within 7-day window)
[2026-01-30T20:18:06.983Z] [BOT] 💾 Saved posted_jobs.json: 652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:18:06.984Z] [BOT] ✅ Database saved successfully
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2588) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*