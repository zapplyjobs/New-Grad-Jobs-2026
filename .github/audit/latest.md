# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T20:32:46.497Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T20:32:19.348Z] ========================================
[2026-01-30T20:32:19.349Z] Discord Bot Execution Log
[2026-01-30T20:32:19.350Z] Environment: GitHub Actions
[2026-01-30T20:32:19.350Z] Node Version: v20.20.0
[2026-01-30T20:32:19.350Z] ========================================
[2026-01-30T20:32:19.350Z] Environment Variables Check:
[2026-01-30T20:32:19.350Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T20:32:19.350Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T20:32:19.350Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T20:32:19.350Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T20:32:19.350Z] 
Multi-Channel Configuration:
[2026-01-30T20:32:19.350Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T20:32:19.350Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T20:32:19.351Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T20:32:19.351Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T20:32:19.351Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T20:32:19.351Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T20:32:19.351Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T20:32:19.351Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T20:32:19.351Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T20:32:19.351Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T20:32:19.351Z] 
Data Files Check:
[2026-01-30T20:32:19.352Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T20:32:19.377Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4306504 bytes)
[2026-01-30T20:32:19.377Z] 
========================================
[2026-01-30T20:32:19.377Z] Starting Enhanced Discord Bot...
[2026-01-30T20:32:19.377Z] ========================================
[2026-01-30T20:32:19.917Z] [BOT] ✅ Loaded V2 database: 652 jobs
[2026-01-30T20:32:20.513Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T20:32:20.514Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T20:32:20.514Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T20:32:20.629Z] [BOT] ✅ Loaded pending queue: 2933 total (2260 pending, 50 enriched, 623 posted)
[2026-01-30T20:32:20.630Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T20:32:20.630Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T20:32:20.630Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T20:32:20.631Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T20:32:20.631Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T20:32:20.631Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T20:32:20.631Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T20:32:20.631Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T20:32:20.631Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-30T20:32:20.632Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T20:32:20.632Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-30T20:32:20.632Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T20:32:20.632Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T20:32:20.632Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-30T20:32:20.632Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T20:32:20.633Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-30T20:32:20.633Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T20:32:20.633Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-30T20:32:20.633Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T20:32:20.633Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-30T20:32:20.633Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T20:32:20.633Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-30T20:32:20.634Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T20:32:20.634Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-30T20:32:20.634Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T20:32:20.634Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-30T20:32:20.634Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T20:32:20.638Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T20:32:20.639Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-01-30T20:32:20.639Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Senior Android Engineer, Apps Platform (Performance) at reddit
[2026-01-30T20:32:20.639Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer, Apps Platform (Performance) at reddit
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
[2026-01-30T20:32:20.639Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Acquisitions) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
[2026-01-30T20:32:20.639Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
[2026-01-30T20:32:20.639Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer, iOS Platform at reddit
[2026-01-30T20:32:20.749Z] [BOT] ✅ Loaded pending queue: 2933 total (2260 pending, 50 enriched, 623 posted)
[2026-01-30T20:32:20.937Z] [BOT] ✅ Saved pending queue: 2922 total (2260 pending, 39 enriched, 623 posted)
🗑️ Removed 11 blacklisted jobs from pending queue
[2026-01-30T20:32:20.938Z] [BOT] 📋 After blacklist filter: 25 jobs (11 blacklisted)
[2026-01-30T20:32:20.938Z] [BOT] 📋 After data quality filter: 25 jobs (0 invalid)
[2026-01-30T20:32:20.939Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2026-01-30T20:32:20.939Z] [BOT] (19 grouped as same job with different locations)
📍 6 jobs with multiple locations:
   - Account Executive, Commercial - (Phoenix, AR) @ samsara: phoenix, arizona, portland
   - Mid-Market Account Executive - PubSec @ samsara: charleston, dallas, san antonio, louisville
[2026-01-30T20:32:20.939Z] [BOT] - Select Major Account Executive EST/CST - Dallas, TX @ samsara: dallas, hartford, houston, texas, jacksonville, miami, nashville, orlando, raleigh, san antonio, tallahassee, tampa
   - Android Software Engineer, Ad Formats @ reddit: new york, chicago
   - iOS Software Engineer, Ad Formats @ reddit: chicago, new york
   - iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit: chicago, san francisco, los angeles
⏸️ Limiting to 10 jobs this run, 30 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T20:32:20.942Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-30T20:32:20.943Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial - (Phoenix, AR)" @ samsara
[2026-01-30T20:32:20.943Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:32:20.960Z] [BOT ERROR] (node:2445) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T20:32:21.178Z] [BOT] ✅ Posted message: Account Executive, Commercial - (Phoenix, AR) @ samsara in #💻・tech-jobs
[2026-01-30T20:32:21.178Z] [BOT] ✅ Industry: Account Executive, Commercial - (Phoenix, AR) @ samsara
[2026-01-30T20:32:21.179Z] [BOT] 💾 Added channel posting: Account Executive, Commercial - (Phoenix, AR) @ samsara → category channel (1 total channels)
[2026-01-30T20:32:21.179Z] [BOT] 💾 BEFORE MERGE: 653 jobs in memory (cached)
[2026-01-30T20:32:21.200Z] [BOT] ✅ Loaded V2 database: 652 jobs
💾 DISK STATE: 652 jobs on disk
[2026-01-30T20:32:21.200Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=653
[2026-01-30T20:32:21.202Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:32:21.202Z] [BOT] 💾 AFTER MERGE: 653 jobs (merged disk + memory)
[2026-01-30T20:32:21.202Z] [BOT] ✅ No jobs to archive (all 653 jobs within 7-day window)
[2026-01-30T20:32:21.253Z] [BOT] 💾 Saved posted_jobs.json: 653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:32:22.756Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive - PubSec" @ samsara
[2026-01-30T20:32:22.756Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T20:32:22.946Z] [BOT] ✅ Posted message: Mid-Market Account Executive - PubSec @ samsara in #💻・tech-jobs
[2026-01-30T20:32:22.946Z] [BOT] ✅ Industry: Mid-Market Account Executive - PubSec @ samsara
[2026-01-30T20:32:22.947Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive - PubSec @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 654 jobs in memory (cached)
[2026-01-30T20:32:22.961Z] [BOT] ✅ Loaded V2 database: 653 jobs
💾 DISK STATE: 653 jobs on disk
[2026-01-30T20:32:22.961Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=654
[2026-01-30T20:32:22.963Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:32:22.963Z] [BOT] 💾 AFTER MERGE: 654 jobs (merged disk + memory)
[2026-01-30T20:32:22.963Z] [BOT] ✅ No jobs to archive (all 654 jobs within 7-day window)
[2026-01-30T20:32:23.006Z] [BOT] 💾 Saved posted_jobs.json: 654 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:32:27.507Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T20:32:27.507Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Dallas, TX" @ samsara
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T20:32:27.753Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Dallas, TX @ samsara in #💰・finance-jobs
[2026-01-30T20:32:27.753Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Dallas, TX @ samsara
[2026-01-30T20:32:27.754Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Dallas, TX @ samsara → category channel (1 total channels)
[2026-01-30T20:32:27.754Z] [BOT] 💾 BEFORE MERGE: 655 jobs in memory (cached)
[2026-01-30T20:32:27.768Z] [BOT] ✅ Loaded V2 database: 654 jobs
💾 DISK STATE: 654 jobs on disk
[2026-01-30T20:32:27.768Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=655
[2026-01-30T20:32:27.770Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:32:27.770Z] [BOT] 💾 AFTER MERGE: 655 jobs (merged disk + memory)
[2026-01-30T20:32:27.770Z] [BOT] ✅ No jobs to archive (all 655 jobs within 7-day window)
[2026-01-30T20:32:27.814Z] [BOT] 💾 Saved posted_jobs.json: 655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:32:32.316Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-30T20:32:32.317Z] [BOT] 📍 [ROUTING] "Android Software Engineer, Ad Formats" @ reddit
[2026-01-30T20:32:32.317Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T20:32:32.317Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T20:32:32.518Z] [BOT] ✅ Posted message: Android Software Engineer, Ad Formats @ reddit in #🤖・ai-jobs
[2026-01-30T20:32:32.518Z] [BOT] ✅ Industry: Android Software Engineer, Ad Formats @ reddit
[2026-01-30T20:32:32.519Z] [BOT] 💾 Added channel posting: Android Software Engineer, Ad Formats @ reddit → category channel (1 total channels)
[2026-01-30T20:32:32.519Z] [BOT] 💾 BEFORE MERGE: 656 jobs in memory (cached)
[2026-01-30T20:32:32.540Z] [BOT] ✅ Loaded V2 database: 655 jobs
💾 DISK STATE: 655 jobs on disk
[2026-01-30T20:32:32.541Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=656
[2026-01-30T20:32:32.542Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:32:32.542Z] [BOT] 💾 AFTER MERGE: 656 jobs (merged disk + memory)
[2026-01-30T20:32:32.543Z] [BOT] ✅ No jobs to archive (all 656 jobs within 7-day window)
[2026-01-30T20:32:32.595Z] [BOT] 💾 Saved posted_jobs.json: 656 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:32:34.631Z] [BOT] ✅ Posted message: Android Software Engineer, Ad Formats @ reddit in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T20:32:34.631Z] [BOT] 💾 Added channel posting: Android Software Engineer, Ad Formats @ reddit → location channel (2 total channels)
[2026-01-30T20:32:34.632Z] [BOT] 💾 BEFORE MERGE: 656 jobs in memory (cached)
[2026-01-30T20:32:34.645Z] [BOT] ✅ Loaded V2 database: 656 jobs
💾 DISK STATE: 656 jobs on disk
[2026-01-30T20:32:34.645Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=656
[2026-01-30T20:32:34.647Z] [BOT] 🔀 Deep merged: Android Software Engineer, Ad Formats @ reddit (disk: 1 channels → merged: 2 channels)
[2026-01-30T20:32:34.647Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 656 jobs (merged disk + memory)
[2026-01-30T20:32:34.648Z] [BOT] ✅ No jobs to archive (all 656 jobs within 7-day window)
[2026-01-30T20:32:34.698Z] [BOT] 💾 Saved posted_jobs.json: 656 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:32:36.200Z] [BOT] 📍 [ROUTING] "iOS Software Engineer, Ad Formats" @ reddit
[2026-01-30T20:32:36.200Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T20:32:36.613Z] [BOT] ✅ Posted message: iOS Software Engineer, Ad Formats @ reddit in #🤖・ai-jobs
[2026-01-30T20:32:36.613Z] [BOT] ✅ Industry: iOS Software Engineer, Ad Formats @ reddit
[2026-01-30T20:32:36.613Z] [BOT] 💾 Added channel posting: iOS Software Engineer, Ad Formats @ reddit → category channel (1 total channels)
[2026-01-30T20:32:36.613Z] [BOT] 💾 BEFORE MERGE: 657 jobs in memory (cached)
[2026-01-30T20:32:36.626Z] [BOT] ✅ Loaded V2 database: 656 jobs
💾 DISK STATE: 656 jobs on disk
[2026-01-30T20:32:36.627Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=657
[2026-01-30T20:32:36.628Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:32:36.628Z] [BOT] 💾 AFTER MERGE: 657 jobs (merged disk + memory)
[2026-01-30T20:32:36.629Z] [BOT] ✅ No jobs to archive (all 657 jobs within 7-day window)
[2026-01-30T20:32:36.672Z] [BOT] 💾 Saved posted_jobs.json: 657 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:32:38.173Z] [BOT] 📍 [ROUTING] "iOS Software Engineer, i18n: Grow Global and Local Communities" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-30T20:32:38.173Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T20:32:38.570Z] [BOT] ✅ Posted message: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit in #🤖・ai-jobs
[2026-01-30T20:32:38.570Z] [BOT] ✅ Industry: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit
[2026-01-30T20:32:38.570Z] [BOT] 💾 Added channel posting: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit → category channel (1 total channels)
💾 BEFORE MERGE: 658 jobs in memory (cached)
[2026-01-30T20:32:38.584Z] [BOT] ✅ Loaded V2 database: 657 jobs
💾 DISK STATE: 657 jobs on disk
[2026-01-30T20:32:38.584Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=658
[2026-01-30T20:32:38.586Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:32:38.586Z] [BOT] 💾 AFTER MERGE: 658 jobs (merged disk + memory)
[2026-01-30T20:32:38.587Z] [BOT] ✅ No jobs to archive (all 658 jobs within 7-day window)
[2026-01-30T20:32:38.637Z] [BOT] 💾 Saved posted_jobs.json: 658 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:32:43.140Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-30T20:32:43.141Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a3180e8..." not found, but found as SHA256 "52625152cac309ca"
⏭️  Skipping duplicate: JID_cafea66d (posted within 7 days)
[2026-01-30T20:32:43.141Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_17a2d705..." not found, but found as SHA256 "24b83e27a80676a6"
⏭️  Skipping duplicate: JID_25829d23 (posted within 7 days)
[2026-01-30T20:32:43.142Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0bcaf4cc..." not found, but found as SHA256 "64370370ab4853f8"
[2026-01-30T20:32:43.142Z] [BOT] ⏭️  Skipping duplicate: JID_17f50b97 (posted within 7 days)
[2026-01-30T20:32:43.142Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2f443385..." not found, but found as SHA256 "c9d98e1d902d773b"
⏭️  Skipping duplicate: JID_72076831 (posted within 7 days)
[2026-01-30T20:32:43.142Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2f443385..." not found, but found as SHA256 "2bb26d748f440a6f"
[2026-01-30T20:32:43.142Z] [BOT] ⏭️  Skipping duplicate: JID_e5471d14 (posted within 7 days)
[2026-01-30T20:32:43.142Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b905c074..." not found, but found as SHA256 "63ff7554599eac96"
⏭️  Skipping duplicate: JID_60735a57 (posted within 7 days)
[2026-01-30T20:32:43.241Z] [BOT] ✅ Loaded pending queue: 2922 total (2260 pending, 39 enriched, 623 posted)
[2026-01-30T20:32:43.423Z] [BOT] ✅ Saved pending queue: 2922 total (2260 pending, 33 enriched, 629 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-01-30T20:32:43.423Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T20:32:43.510Z] [BOT] 📂 Loaded 10714 existing routing entries
[2026-01-30T20:32:43.650Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T20:32:43.650Z] [BOT] New entries: 6
   Total entries: 10720
   Timestamp: 2026-01-30T20:32:43.591Z
[2026-01-30T20:32:43.650Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T20:32:43.651Z] [BOT] Total attempts: 32
   Successful: 7
   Failed: 0
   Skipped: 25
[2026-01-30T20:32:43.651Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T20:32:43.651Z] [BOT] Last cleanup: Never
   Total posts: 7
   Channels used: 4
   Top channels:
[2026-01-30T20:32:43.651Z] [BOT] 1. #🤖・ai-jobs: 3 posts
     2. #💻・tech-jobs: 2 posts
     3. #💰・finance-jobs: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-01-30T20:32:43.651Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T20:32:43.651Z] [BOT] 💾 BEFORE MERGE: 658 jobs in memory (cached)
[2026-01-30T20:32:43.665Z] [BOT] ✅ Loaded V2 database: 658 jobs
💾 DISK STATE: 658 jobs on disk
[2026-01-30T20:32:43.666Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=658
[2026-01-30T20:32:43.667Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T20:32:43.667Z] [BOT] 💾 AFTER MERGE: 658 jobs (merged disk + memory)
[2026-01-30T20:32:43.668Z] [BOT] ✅ No jobs to archive (all 658 jobs within 7-day window)
[2026-01-30T20:32:43.711Z] [BOT] 💾 Saved posted_jobs.json: 658 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T20:32:43.712Z] [BOT] ✅ Database saved successfully
[2026-01-30T20:32:45.742Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2445) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*