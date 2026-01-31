# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T01:42:15.373Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T01:41:45.676Z] ========================================
[2026-01-31T01:41:45.678Z] Discord Bot Execution Log
[2026-01-31T01:41:45.678Z] Environment: GitHub Actions
[2026-01-31T01:41:45.678Z] Node Version: v20.20.0
[2026-01-31T01:41:45.678Z] ========================================
[2026-01-31T01:41:45.678Z] Environment Variables Check:
[2026-01-31T01:41:45.678Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T01:41:45.678Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T01:41:45.678Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T01:41:45.679Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T01:41:45.679Z] 
Multi-Channel Configuration:
[2026-01-31T01:41:45.679Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T01:41:45.679Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T01:41:45.679Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T01:41:45.679Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T01:41:45.679Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T01:41:45.679Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T01:41:45.679Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T01:41:45.679Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T01:41:45.679Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T01:41:45.679Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T01:41:45.679Z] 
Data Files Check:
[2026-01-31T01:41:45.680Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T01:41:45.709Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5401828 bytes)
[2026-01-31T01:41:45.709Z] 
========================================
[2026-01-31T01:41:45.709Z] Starting Enhanced Discord Bot...
[2026-01-31T01:41:45.709Z] ========================================
[2026-01-31T01:41:46.255Z] [BOT] ✅ Loaded V2 database: 818 jobs
[2026-01-31T01:41:46.959Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T01:41:46.959Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T01:41:46.959Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T01:41:47.073Z] [BOT] ✅ Loaded pending queue: 2952 total (2113 pending, 50 enriched, 789 posted)
[2026-01-31T01:41:47.073Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T01:41:47.073Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T01:41:47.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T01:41:47.074Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T01:41:47.074Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T01:41:47.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T01:41:47.075Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T01:41:47.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T01:41:47.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T01:41:47.076Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T01:41:47.076Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T01:41:47.076Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T01:41:47.076Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-31T01:41:47.077Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T01:41:47.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T01:41:47.077Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T01:41:47.077Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T01:41:47.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-01-31T01:41:47.077Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T01:41:47.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T01:41:47.077Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T01:41:47.078Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T01:41:47.078Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T01:41:47.078Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T01:41:47.078Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T01:41:47.084Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T01:41:47.084Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-31T01:41:47.084Z] [BOT] 🚫 Skipping blacklisted job: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-01-31T01:41:47.198Z] [BOT] ✅ Loaded pending queue: 2952 total (2113 pending, 50 enriched, 789 posted)
[2026-01-31T01:41:47.405Z] [BOT] ✅ Saved pending queue: 2950 total (2113 pending, 48 enriched, 789 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-01-31T01:41:47.405Z] [BOT] 📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-31T01:41:47.405Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-31T01:41:47.406Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-01-31T01:41:47.406Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-31T01:41:47.406Z] [BOT] - Litigation and Risk Counsel @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T01:41:47.410Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-31T01:41:47.411Z] [BOT] 📍 [ROUTING] "Account Executive, Enterprise" @ figma
[2026-01-31T01:41:47.411Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:41:47.428Z] [BOT ERROR] (node:3149) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T01:41:47.647Z] [BOT] ✅ Posted message: Account Executive, Enterprise @ figma in #💻・tech-jobs
[2026-01-31T01:41:47.648Z] [BOT] ✅ Industry: Account Executive, Enterprise @ figma
[2026-01-31T01:41:47.648Z] [BOT] 💾 Added channel posting: Account Executive, Enterprise @ figma → category channel (1 total channels)
[2026-01-31T01:41:47.649Z] [BOT] 💾 BEFORE MERGE: 819 jobs in memory (cached)
[2026-01-31T01:41:47.668Z] [BOT] ✅ Loaded V2 database: 818 jobs
💾 DISK STATE: 818 jobs on disk
[2026-01-31T01:41:47.668Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=819
[2026-01-31T01:41:47.670Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:41:47.670Z] [BOT] 💾 AFTER MERGE: 819 jobs (merged disk + memory)
[2026-01-31T01:41:47.671Z] [BOT] ✅ No jobs to archive (all 819 jobs within 7-day window)
[2026-01-31T01:41:47.730Z] [BOT] 💾 Saved posted_jobs.json: 819 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:41:49.234Z] [BOT] 📍 [ROUTING] "Specialist - Data Transfer - Integration & Quality" @ ORG_01d9a8c4
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:41:49.400Z] [BOT] ✅ Posted message: Specialist - Data Transfer - Integration & Quality @ ORG_01d9a8c4 in #💻・tech-jobs
  ✅ Industry: Specialist - Data Transfer - Integration & Quality @ ORG_01d9a8c4
[2026-01-31T01:41:49.401Z] [BOT] 💾 Added channel posting: Specialist - Data Transfer - Integration & Quality @ ORG_01d9a8c4 → category channel (1 total channels)
💾 BEFORE MERGE: 820 jobs in memory (cached)
[2026-01-31T01:41:49.418Z] [BOT] ✅ Loaded V2 database: 819 jobs
💾 DISK STATE: 819 jobs on disk
[2026-01-31T01:41:49.418Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=820
[2026-01-31T01:41:49.420Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:41:49.420Z] [BOT] 💾 AFTER MERGE: 820 jobs (merged disk + memory)
[2026-01-31T01:41:49.421Z] [BOT] ✅ No jobs to archive (all 820 jobs within 7-day window)
[2026-01-31T01:41:49.474Z] [BOT] 💾 Saved posted_jobs.json: 820 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:41:50.976Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_7dcce8d0ine
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:41:51.176Z] [BOT] ✅ Posted message: Associate Software Developer @ ORG_7dcce8d0ine in #💻・tech-jobs
[2026-01-31T01:41:51.176Z] [BOT] ✅ Industry: Associate Software Developer @ ORG_7dcce8d0ine
[2026-01-31T01:41:51.177Z] [BOT] 💾 Added channel posting: Associate Software Developer @ ORG_7dcce8d0ine → category channel (1 total channels)
[2026-01-31T01:41:51.177Z] [BOT] 💾 BEFORE MERGE: 821 jobs in memory (cached)
[2026-01-31T01:41:51.194Z] [BOT] ✅ Loaded V2 database: 820 jobs
💾 DISK STATE: 820 jobs on disk
[2026-01-31T01:41:51.194Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=821
[2026-01-31T01:41:51.196Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:41:51.196Z] [BOT] 💾 AFTER MERGE: 821 jobs (merged disk + memory)
[2026-01-31T01:41:51.197Z] [BOT] ✅ No jobs to archive (all 821 jobs within 7-day window)
[2026-01-31T01:41:51.251Z] [BOT] 💾 Saved posted_jobs.json: 821 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:41:52.752Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_61859c65 Learning
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:41:52.986Z] [BOT] ✅ Posted message: Software Engineer @ ORG_61859c65 Learning in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_61859c65 Learning
[2026-01-31T01:41:52.986Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_61859c65 Learning → category channel (1 total channels)
[2026-01-31T01:41:52.987Z] [BOT] 💾 BEFORE MERGE: 822 jobs in memory (cached)
[2026-01-31T01:41:53.004Z] [BOT] ✅ Loaded V2 database: 821 jobs
💾 DISK STATE: 821 jobs on disk
[2026-01-31T01:41:53.004Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=822
[2026-01-31T01:41:53.006Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:41:53.006Z] [BOT] 💾 AFTER MERGE: 822 jobs (merged disk + memory)
[2026-01-31T01:41:53.007Z] [BOT] ✅ No jobs to archive (all 822 jobs within 7-day window)
[2026-01-31T01:41:53.064Z] [BOT] 💾 Saved posted_jobs.json: 822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:41:54.564Z] [BOT] 📍 [ROUTING] "Software Engineer - Level - Space Systems" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-31T01:41:54.565Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:41:54.808Z] [BOT] ✅ Posted message: Software Engineer - Level - Space Systems @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Software Engineer - Level - Space Systems @ ORG_f3f2248d Grumman
[2026-01-31T01:41:54.809Z] [BOT] 💾 Added channel posting: Software Engineer - Level - Space Systems @ ORG_f3f2248d Grumman → category channel (1 total channels)
[2026-01-31T01:41:54.809Z] [BOT] 💾 BEFORE MERGE: 823 jobs in memory (cached)
[2026-01-31T01:41:54.826Z] [BOT] ✅ Loaded V2 database: 822 jobs
💾 DISK STATE: 822 jobs on disk
[2026-01-31T01:41:54.826Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=823
[2026-01-31T01:41:54.828Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:41:54.828Z] [BOT] 💾 AFTER MERGE: 823 jobs (merged disk + memory)
[2026-01-31T01:41:54.828Z] [BOT] ✅ No jobs to archive (all 823 jobs within 7-day window)
[2026-01-31T01:41:54.883Z] [BOT] 💾 Saved posted_jobs.json: 823 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:41:56.385Z] [BOT] 📍 [ROUTING] "C++ Software Engineer" @ ORG_316d43c0 Design Systems
[2026-01-31T01:41:56.385Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:41:56.564Z] [BOT] ✅ Posted message: C++ Software Engineer @ ORG_316d43c0 Design Systems in #💻・tech-jobs
[2026-01-31T01:41:56.564Z] [BOT] ✅ Industry: C++ Software Engineer @ ORG_316d43c0 Design Systems
[2026-01-31T01:41:56.565Z] [BOT] 💾 Added channel posting: C++ Software Engineer @ ORG_316d43c0 Design Systems → category channel (1 total channels)
[2026-01-31T01:41:56.565Z] [BOT] 💾 BEFORE MERGE: 824 jobs in memory (cached)
[2026-01-31T01:41:56.580Z] [BOT] ✅ Loaded V2 database: 823 jobs
💾 DISK STATE: 823 jobs on disk
[2026-01-31T01:41:56.581Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=824
[2026-01-31T01:41:56.583Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 824 jobs (merged disk + memory)
[2026-01-31T01:41:56.583Z] [BOT] ✅ No jobs to archive (all 824 jobs within 7-day window)
[2026-01-31T01:41:56.634Z] [BOT] 💾 Saved posted_jobs.json: 824 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:41:58.135Z] [BOT] 📍 [ROUTING] "SAP Analyst" @ ORG_6cd9e83c
   Category: TECH (default)
[2026-01-31T01:41:58.136Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:41:58.351Z] [BOT] ✅ Posted message: SAP Analyst @ ORG_6cd9e83c in #💻・tech-jobs
  ✅ Industry: SAP Analyst @ ORG_6cd9e83c
[2026-01-31T01:41:58.352Z] [BOT] 💾 Added channel posting: SAP Analyst @ ORG_6cd9e83c → category channel (1 total channels)
💾 BEFORE MERGE: 825 jobs in memory (cached)
[2026-01-31T01:41:58.369Z] [BOT] ✅ Loaded V2 database: 824 jobs
💾 DISK STATE: 824 jobs on disk
[2026-01-31T01:41:58.369Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=825
[2026-01-31T01:41:58.371Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:41:58.371Z] [BOT] 💾 AFTER MERGE: 825 jobs (merged disk + memory)
[2026-01-31T01:41:58.371Z] [BOT] ✅ No jobs to archive (all 825 jobs within 7-day window)
[2026-01-31T01:41:58.428Z] [BOT] 💾 Saved posted_jobs.json: 825 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:41:59.930Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Builder Frameworks" @ ORG_a731a58c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T01:42:00.137Z] [BOT] ✅ Posted message: Software Engineer 1 - Builder Frameworks @ ORG_a731a58c in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Builder Frameworks @ ORG_a731a58c
[2026-01-31T01:42:00.138Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Builder Frameworks @ ORG_a731a58c → category channel (1 total channels)
[2026-01-31T01:42:00.138Z] [BOT] 💾 BEFORE MERGE: 826 jobs in memory (cached)
[2026-01-31T01:42:00.154Z] [BOT] ✅ Loaded V2 database: 825 jobs
💾 DISK STATE: 825 jobs on disk
[2026-01-31T01:42:00.154Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=826
[2026-01-31T01:42:00.156Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:42:00.156Z] [BOT] 💾 AFTER MERGE: 826 jobs (merged disk + memory)
[2026-01-31T01:42:00.157Z] [BOT] ✅ No jobs to archive (all 826 jobs within 7-day window)
[2026-01-31T01:42:00.210Z] [BOT] 💾 Saved posted_jobs.json: 826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:42:04.712Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T01:42:04.713Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_44ebd2cb
[2026-01-31T01:42:04.713Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T01:42:05.064Z] [BOT] ✅ Posted message: Software Engineer @ ORG_44ebd2cb in #🤖・ai-jobs
  ✅ Industry: Software Engineer @ ORG_44ebd2cb
[2026-01-31T01:42:05.064Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_44ebd2cb → category channel (1 total channels)
[2026-01-31T01:42:05.065Z] [BOT] 💾 BEFORE MERGE: 827 jobs in memory (cached)
[2026-01-31T01:42:05.080Z] [BOT] ✅ Loaded V2 database: 826 jobs
💾 DISK STATE: 826 jobs on disk
[2026-01-31T01:42:05.081Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=827
[2026-01-31T01:42:05.083Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 827 jobs (merged disk + memory)
[2026-01-31T01:42:05.083Z] [BOT] ✅ No jobs to archive (all 827 jobs within 7-day window)
[2026-01-31T01:42:05.137Z] [BOT] 💾 Saved posted_jobs.json: 827 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:42:06.639Z] [BOT] 📍 [ROUTING] "Research Analyst - Pnw" @ ORG_fe16a941 Lang LaSalle (JLL)
[2026-01-31T01:42:06.639Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T01:42:07.048Z] [BOT] ✅ Posted message: Research Analyst - Pnw @ ORG_fe16a941 Lang LaSalle (JLL) in #🤖・ai-jobs
  ✅ Industry: Research Analyst - Pnw @ ORG_fe16a941 Lang LaSalle (JLL)
[2026-01-31T01:42:07.048Z] [BOT] 💾 Added channel posting: Research Analyst - Pnw @ ORG_fe16a941 Lang LaSalle (JLL) → category channel (1 total channels)
[2026-01-31T01:42:07.048Z] [BOT] 💾 BEFORE MERGE: 828 jobs in memory (cached)
[2026-01-31T01:42:07.064Z] [BOT] ✅ Loaded V2 database: 827 jobs
💾 DISK STATE: 827 jobs on disk
[2026-01-31T01:42:07.065Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=828
[2026-01-31T01:42:07.066Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:42:07.067Z] [BOT] 💾 AFTER MERGE: 828 jobs (merged disk + memory)
[2026-01-31T01:42:07.067Z] [BOT] ✅ No jobs to archive (all 828 jobs within 7-day window)
[2026-01-31T01:42:07.120Z] [BOT] 💾 Saved posted_jobs.json: 828 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:42:11.621Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T01:42:11.622Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d97f547..." not found, but found as SHA256 "a77c3df00c9741c6"
⏭️  Skipping duplicate: JID_ed49cd2c (posted within 7 days)
[2026-01-31T01:42:11.622Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ebdfa283..." not found, but found as SHA256 "29987cee73ced5be"
[2026-01-31T01:42:11.622Z] [BOT] ⏭️  Skipping duplicate: JID_a3f17800-cx_1001-job-72536 (posted within 7 days)
[2026-01-31T01:42:11.622Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4d2f7d1f-uline_..." not found, but found as SHA256 "a7a66d9325ad7648"
⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_aeb89c5c-developer_r260376 (posted within 7 days)
[2026-01-31T01:42:11.623Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2161d003..." not found, but found as SHA256 "a902ac20787cc2f0"
⏭️  Skipping duplicate: JID_d30d38d3 (posted within 7 days)
[2026-01-31T01:42:11.623Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4633d184..." not found, but found as SHA256 "458a5bc1a5898322"
⏭️  Skipping duplicate: JID_4633d184 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_3637cf46..." not found, but found as SHA256 "b579a26502335767"
⏭️  Skipping duplicate: JID_049d09e3-pnw_req451478 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e3128470-northrop_grumm..." not found, but found as SHA256 "951ee9f48314cdd3"
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_54c2d808-_r10218502 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_1980d06d-external_c..." not found, but found as SHA256 "2e57dad94ad99d65"
⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_ff8193b5-engineer_r50546 (posted within 7 days)
[2026-01-31T01:42:11.624Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e5549071..." not found, but found as SHA256 "4f06ae851aafaa32"
[2026-01-31T01:42:11.624Z] [BOT] ⏭️  Skipping duplicate: JID_6a6f08a0 (posted within 7 days)
[2026-01-31T01:42:11.625Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea70fec5..." not found, but found as SHA256 "12fe7b6413b53621"
[2026-01-31T01:42:11.625Z] [BOT] ⏭️  Skipping duplicate: JID_fb1c39ec (posted within 7 days)
[2026-01-31T01:42:11.736Z] [BOT] ✅ Loaded pending queue: 2950 total (2113 pending, 48 enriched, 789 posted)
[2026-01-31T01:42:11.922Z] [BOT] ✅ Saved pending queue: 2950 total (2113 pending, 38 enriched, 799 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T01:42:11.923Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T01:42:12.006Z] [BOT] 📂 Loaded 10880 existing routing entries
[2026-01-31T01:42:12.131Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10890
   Timestamp: 2026-01-31T01:42:12.087Z
[2026-01-31T01:42:12.136Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 26
   Successful: 10
   Failed: 0
   Skipped: 16
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🤖・ai-jobs: 2 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 828 jobs in memory (cached)
[2026-01-31T01:42:12.163Z] [BOT] ✅ Loaded V2 database: 828 jobs
💾 DISK STATE: 828 jobs on disk
[2026-01-31T01:42:12.164Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=828
[2026-01-31T01:42:12.167Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T01:42:12.167Z] [BOT] 💾 AFTER MERGE: 828 jobs (merged disk + memory)
[2026-01-31T01:42:12.168Z] [BOT] ✅ No jobs to archive (all 828 jobs within 7-day window)
[2026-01-31T01:42:12.219Z] [BOT] 💾 Saved posted_jobs.json: 828 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T01:42:12.219Z] [BOT] ✅ Database saved successfully
[2026-01-31T01:42:14.249Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3149) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*