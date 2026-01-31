# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T06:53:53.372Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T06:53:13.826Z] ========================================
[2026-01-31T06:53:13.828Z] Discord Bot Execution Log
[2026-01-31T06:53:13.828Z] Environment: GitHub Actions
[2026-01-31T06:53:13.828Z] Node Version: v20.20.0
[2026-01-31T06:53:13.828Z] ========================================
[2026-01-31T06:53:13.828Z] Environment Variables Check:
[2026-01-31T06:53:13.828Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T06:53:13.828Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T06:53:13.828Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T06:53:13.829Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T06:53:13.829Z] 
Multi-Channel Configuration:
[2026-01-31T06:53:13.829Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T06:53:13.829Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T06:53:13.829Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T06:53:13.829Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T06:53:13.829Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T06:53:13.829Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T06:53:13.829Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T06:53:13.829Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T06:53:13.829Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T06:53:13.829Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T06:53:13.829Z] 
Data Files Check:
[2026-01-31T06:53:13.831Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T06:53:13.860Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5880015 bytes)
[2026-01-31T06:53:13.860Z] 
========================================
[2026-01-31T06:53:13.861Z] Starting Enhanced Discord Bot...
[2026-01-31T06:53:13.861Z] ========================================
[2026-01-31T06:53:14.412Z] [BOT] ✅ Loaded V2 database: 908 jobs
[2026-01-31T06:53:15.211Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T06:53:15.212Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T06:53:15.212Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T06:53:15.326Z] [BOT] ✅ Loaded pending queue: 2958 total (2029 pending, 50 enriched, 879 posted)
[2026-01-31T06:53:15.327Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T06:53:15.327Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T06:53:15.327Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T06:53:15.328Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T06:53:15.328Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T06:53:15.328Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T06:53:15.328Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T06:53:15.328Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T06:53:15.329Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T06:53:15.329Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T06:53:15.329Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T06:53:15.330Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T06:53:15.330Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T06:53:15.330Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T06:53:15.330Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T06:53:15.330Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T06:53:15.330Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T06:53:15.331Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
[2026-01-31T06:53:15.331Z] [BOT] ⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T06:53:15.331Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-01-31T06:53:15.331Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T06:53:15.331Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T06:53:15.331Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T06:53:15.339Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T06:53:15.340Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence at Prairie View A&M University
[2026-01-31T06:53:15.340Z] [BOT] 🚫 Skipping blacklisted job: Sales Enablement Manager  at figma
[2026-01-31T06:53:15.443Z] [BOT] ✅ Loaded pending queue: 2958 total (2029 pending, 50 enriched, 879 posted)
[2026-01-31T06:53:15.631Z] [BOT] ✅ Saved pending queue: 2956 total (2029 pending, 48 enriched, 879 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-01-31T06:53:15.632Z] [BOT] 📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-31T06:53:15.632Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-31T06:53:15.633Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-01-31T06:53:15.633Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Android Sales Expert @ 2020 Companies: sf, alameda
[2026-01-31T06:53:15.633Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T06:53:15.637Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-31T06:53:15.638Z] [BOT] 📍 [ROUTING] "Technical Consultant" @ brex
[2026-01-31T06:53:15.638Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T06:53:15.655Z] [BOT ERROR] (node:2801) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T06:53:15.882Z] [BOT] ✅ Posted message: Technical Consultant @ brex in #💰・finance-jobs
[2026-01-31T06:53:15.883Z] [BOT] ✅ Industry: Technical Consultant @ brex
[2026-01-31T06:53:15.883Z] [BOT] 💾 Added channel posting: Technical Consultant @ brex → category channel (1 total channels)
[2026-01-31T06:53:15.884Z] [BOT] 💾 BEFORE MERGE: 909 jobs in memory (cached)
[2026-01-31T06:53:15.907Z] [BOT] ✅ Loaded V2 database: 908 jobs
💾 DISK STATE: 908 jobs on disk
[2026-01-31T06:53:15.907Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=909
[2026-01-31T06:53:15.910Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:53:15.910Z] [BOT] 💾 AFTER MERGE: 909 jobs (merged disk + memory)
[2026-01-31T06:53:15.910Z] [BOT] ✅ No jobs to archive (all 909 jobs within 7-day window)
[2026-01-31T06:53:15.983Z] [BOT] 💾 Saved posted_jobs.json: 909 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:53:17.854Z] [BOT] ✅ Posted message: Technical Consultant @ brex in #🏠・JID_ead674af
[2026-01-31T06:53:17.854Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T06:53:17.855Z] [BOT] 💾 Added channel posting: Technical Consultant @ brex → location channel (2 total channels)
💾 BEFORE MERGE: 909 jobs in memory (cached)
[2026-01-31T06:53:17.873Z] [BOT] ✅ Loaded V2 database: 909 jobs
💾 DISK STATE: 909 jobs on disk
[2026-01-31T06:53:17.873Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=909
[2026-01-31T06:53:17.875Z] [BOT] 🔀 Deep merged: Technical Consultant @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T06:53:17.875Z] [BOT] 💾 AFTER MERGE: 909 jobs (merged disk + memory)
[2026-01-31T06:53:17.876Z] [BOT] ✅ No jobs to archive (all 909 jobs within 7-day window)
[2026-01-31T06:53:17.934Z] [BOT] 💾 Saved posted_jobs.json: 909 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:53:22.437Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T06:53:22.437Z] [BOT] 📍 [ROUTING] "Consulting Associate - Engineering or Geology" @ ORG_d41a2092
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:53:22.660Z] [BOT] ✅ Posted message: Consulting Associate - Engineering or Geology @ ORG_d41a2092 in #💻・tech-jobs
[2026-01-31T06:53:22.660Z] [BOT] ✅ Industry: Consulting Associate - Engineering or Geology @ ORG_d41a2092
[2026-01-31T06:53:22.660Z] [BOT] 💾 Added channel posting: Consulting Associate - Engineering or Geology @ ORG_d41a2092 → category channel (1 total channels)
[2026-01-31T06:53:22.660Z] [BOT] 💾 BEFORE MERGE: 910 jobs in memory (cached)
[2026-01-31T06:53:22.678Z] [BOT] ✅ Loaded V2 database: 909 jobs
💾 DISK STATE: 909 jobs on disk
[2026-01-31T06:53:22.679Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=910
[2026-01-31T06:53:22.680Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:53:22.681Z] [BOT] 💾 AFTER MERGE: 910 jobs (merged disk + memory)
[2026-01-31T06:53:22.681Z] [BOT] ✅ No jobs to archive (all 910 jobs within 7-day window)
[2026-01-31T06:53:22.739Z] [BOT] 💾 Saved posted_jobs.json: 910 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:53:24.240Z] [BOT] 📍 [ROUTING] "Atc – Software and Platform Analyst" @ ORG_6cd9e83c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:53:24.480Z] [BOT] ✅ Posted message: Atc – Software and Platform Analyst @ ORG_6cd9e83c in #💻・tech-jobs
[2026-01-31T06:53:24.480Z] [BOT] ✅ Industry: Atc – Software and Platform Analyst @ ORG_6cd9e83c
[2026-01-31T06:53:24.481Z] [BOT] 💾 Added channel posting: Atc – Software and Platform Analyst @ ORG_6cd9e83c → category channel (1 total channels)
💾 BEFORE MERGE: 911 jobs in memory (cached)
[2026-01-31T06:53:24.499Z] [BOT] ✅ Loaded V2 database: 910 jobs
💾 DISK STATE: 910 jobs on disk
[2026-01-31T06:53:24.499Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=911
[2026-01-31T06:53:24.501Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:53:24.501Z] [BOT] 💾 AFTER MERGE: 911 jobs (merged disk + memory)
[2026-01-31T06:53:24.502Z] [BOT] ✅ No jobs to archive (all 911 jobs within 7-day window)
[2026-01-31T06:53:24.567Z] [BOT] 💾 Saved posted_jobs.json: 911 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:53:26.254Z] [BOT] ✅ Posted message: Atc – Software and Platform Analyst @ ORG_6cd9e83c in #🗽・JID_98d4f0de
[2026-01-31T06:53:26.255Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T06:53:26.255Z] [BOT] 💾 Added channel posting: Atc – Software and Platform Analyst @ ORG_6cd9e83c → location channel (2 total channels)
[2026-01-31T06:53:26.255Z] [BOT] 💾 BEFORE MERGE: 911 jobs in memory (cached)
[2026-01-31T06:53:26.272Z] [BOT] ✅ Loaded V2 database: 911 jobs
💾 DISK STATE: 911 jobs on disk
[2026-01-31T06:53:26.272Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=911
[2026-01-31T06:53:26.274Z] [BOT] 🔀 Deep merged: Atc – Software and Platform Analyst @ ORG_6cd9e83c (disk: 1 channels → merged: 2 channels)
[2026-01-31T06:53:26.274Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 911 jobs (merged disk + memory)
[2026-01-31T06:53:26.275Z] [BOT] ✅ No jobs to archive (all 911 jobs within 7-day window)
[2026-01-31T06:53:26.329Z] [BOT] 💾 Saved posted_jobs.json: 911 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:53:27.831Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - 3D/4D Generation - 2026 Start" @ ORG_08c9a13c
[2026-01-31T06:53:27.831Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:53:28.079Z] [BOT] ✅ Posted message: Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c
[2026-01-31T06:53:28.079Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T06:53:28.079Z] [BOT] 💾 BEFORE MERGE: 912 jobs in memory (cached)
[2026-01-31T06:53:28.105Z] [BOT] ✅ Loaded V2 database: 911 jobs
💾 DISK STATE: 911 jobs on disk
[2026-01-31T06:53:28.105Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=912
[2026-01-31T06:53:28.107Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:53:28.107Z] [BOT] 💾 AFTER MERGE: 912 jobs (merged disk + memory)
[2026-01-31T06:53:28.107Z] [BOT] ✅ No jobs to archive (all 912 jobs within 7-day window)
[2026-01-31T06:53:28.163Z] [BOT] 💾 Saved posted_jobs.json: 912 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:53:29.665Z] [BOT] 📍 [ROUTING] "Software Engineer - Manufacturing Integration" @ ORG_e03f7067 Technologies
[2026-01-31T06:53:29.665Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:53:29.861Z] [BOT] ✅ Posted message: Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies in #💻・tech-jobs
  ✅ Industry: Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies
[2026-01-31T06:53:29.862Z] [BOT] 💾 Added channel posting: Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies → category channel (1 total channels)
[2026-01-31T06:53:29.862Z] [BOT] 💾 BEFORE MERGE: 913 jobs in memory (cached)
[2026-01-31T06:53:29.881Z] [BOT] ✅ Loaded V2 database: 912 jobs
💾 DISK STATE: 912 jobs on disk
[2026-01-31T06:53:29.882Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=913
[2026-01-31T06:53:29.883Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:53:29.883Z] [BOT] 💾 AFTER MERGE: 913 jobs (merged disk + memory)
[2026-01-31T06:53:29.884Z] [BOT] ✅ No jobs to archive (all 913 jobs within 7-day window)
[2026-01-31T06:53:29.938Z] [BOT] 💾 Saved posted_jobs.json: 913 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:53:31.439Z] [BOT] 📍 [ROUTING] "Software Engineer - AI Automation - Internal Tools" @ ORG_e03f7067 Technologies
[2026-01-31T06:53:31.439Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:53:31.706Z] [BOT] ✅ Posted message: Software Engineer - AI Automation - Internal Tools @ ORG_e03f7067 Technologies in #💻・tech-jobs
  ✅ Industry: Software Engineer - AI Automation - Internal Tools @ ORG_e03f7067 Technologies
[2026-01-31T06:53:31.707Z] [BOT] 💾 Added channel posting: Software Engineer - AI Automation - Internal Tools @ ORG_e03f7067 Technologies → category channel (1 total channels)
💾 BEFORE MERGE: 914 jobs in memory (cached)
[2026-01-31T06:53:31.725Z] [BOT] ✅ Loaded V2 database: 913 jobs
💾 DISK STATE: 913 jobs on disk
[2026-01-31T06:53:31.725Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=914
[2026-01-31T06:53:31.727Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:53:31.727Z] [BOT] 💾 AFTER MERGE: 914 jobs (merged disk + memory)
[2026-01-31T06:53:31.728Z] [BOT] ✅ No jobs to archive (all 914 jobs within 7-day window)
[2026-01-31T06:53:31.783Z] [BOT] 💾 Saved posted_jobs.json: 914 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:53:33.284Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_6468cf88
[2026-01-31T06:53:33.284Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T06:53:33.439Z] [BOT] ✅ Posted message: Software Developer @ ORG_6468cf88 in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_6468cf88
[2026-01-31T06:53:33.439Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_6468cf88 → category channel (1 total channels)
[2026-01-31T06:53:33.439Z] [BOT] 💾 BEFORE MERGE: 915 jobs in memory (cached)
[2026-01-31T06:53:33.456Z] [BOT] ✅ Loaded V2 database: 914 jobs
💾 DISK STATE: 914 jobs on disk
[2026-01-31T06:53:33.457Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=915
[2026-01-31T06:53:33.458Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 915 jobs (merged disk + memory)
[2026-01-31T06:53:33.459Z] [BOT] ✅ No jobs to archive (all 915 jobs within 7-day window)
[2026-01-31T06:53:33.513Z] [BOT] 💾 Saved posted_jobs.json: 915 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:53:38.015Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T06:53:38.015Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_9d38443e of Chicago
   Category: AI (matched: "machine learning")
[2026-01-31T06:53:38.016Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T06:53:38.306Z] [BOT] ✅ Posted message: Data Analyst @ ORG_9d38443e of Chicago in #🤖・ai-jobs
  ✅ Industry: Data Analyst @ ORG_9d38443e of Chicago
[2026-01-31T06:53:38.306Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_9d38443e of Chicago → category channel (1 total channels)
💾 BEFORE MERGE: 916 jobs in memory (cached)
[2026-01-31T06:53:38.324Z] [BOT] ✅ Loaded V2 database: 915 jobs
💾 DISK STATE: 915 jobs on disk
[2026-01-31T06:53:38.325Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=916
[2026-01-31T06:53:38.326Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:53:38.326Z] [BOT] 💾 AFTER MERGE: 916 jobs (merged disk + memory)
[2026-01-31T06:53:38.327Z] [BOT] ✅ No jobs to archive (all 916 jobs within 7-day window)
[2026-01-31T06:53:38.390Z] [BOT] 💾 Saved posted_jobs.json: 916 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:53:39.891Z] [BOT] 📍 [ROUTING] "AI Software Engineer - Agents - Ace" @ ORG_e03f7067 Technologies
   Category: AI (matched: "AI/ML")
[2026-01-31T06:53:39.891Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T06:53:40.125Z] [BOT] ✅ Posted message: AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies in #🤖・ai-jobs
[2026-01-31T06:53:40.125Z] [BOT] ✅ Industry: AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies
[2026-01-31T06:53:40.126Z] [BOT] 💾 Added channel posting: AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies → category channel (1 total channels)
[2026-01-31T06:53:40.126Z] [BOT] 💾 BEFORE MERGE: 917 jobs in memory (cached)
[2026-01-31T06:53:40.144Z] [BOT] ✅ Loaded V2 database: 916 jobs
💾 DISK STATE: 916 jobs on disk
[2026-01-31T06:53:40.144Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=917
[2026-01-31T06:53:40.145Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 917 jobs (merged disk + memory)
[2026-01-31T06:53:40.146Z] [BOT] ✅ No jobs to archive (all 917 jobs within 7-day window)
[2026-01-31T06:53:40.201Z] [BOT] 💾 Saved posted_jobs.json: 917 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:53:44.703Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T06:53:44.703Z] [BOT] 📍 [ROUTING] "Predoctoral Scholar" @ ORG_9d38443e of Chicago
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-31T06:53:44.703Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T06:53:45.023Z] [BOT] ✅ Posted message: Predoctoral Scholar @ ORG_9d38443e of Chicago in #📊・JID_fb739488
  ✅ Industry: Predoctoral Scholar @ ORG_9d38443e of Chicago
[2026-01-31T06:53:45.024Z] [BOT] 💾 Added channel posting: Predoctoral Scholar @ ORG_9d38443e of Chicago → category channel (1 total channels)
[2026-01-31T06:53:45.024Z] [BOT] 💾 BEFORE MERGE: 918 jobs in memory (cached)
[2026-01-31T06:53:45.042Z] [BOT] ✅ Loaded V2 database: 917 jobs
💾 DISK STATE: 917 jobs on disk
[2026-01-31T06:53:45.043Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=918
[2026-01-31T06:53:45.044Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T06:53:45.044Z] [BOT] 💾 AFTER MERGE: 918 jobs (merged disk + memory)
[2026-01-31T06:53:45.045Z] [BOT] ✅ No jobs to archive (all 918 jobs within 7-day window)
[2026-01-31T06:53:45.109Z] [BOT] 💾 Saved posted_jobs.json: 918 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:53:49.611Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T06:53:49.613Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_447eeef0..." not found, but found as SHA256 "1b5ace6c3c1105dc"
⏭️  Skipping duplicate: JID_447eeef0 (posted within 7 days)
[2026-01-31T06:53:49.613Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "a298a948c0f083d3"
[2026-01-31T06:53:49.613Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_6cf3bd5c-geology_r00028752 (posted within 7 days)
[2026-01-31T06:53:49.613Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_96a99c4b-..." not found, but found as SHA256 "a4f6137a7281d3fe"
⏭️  Skipping duplicate: JID_e938e280-analyst_jr32386 (posted within 7 days)
[2026-01-31T06:53:49.614Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e4e59022..." not found, but found as SHA256 "d2107bba30165518"
⏭️  Skipping duplicate: JID_28f307b7-naelfy26_r00304885 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_1237610b..." not found, but found as SHA256 "6edb672f8cc03222"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_5b3b53e8-detail (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_96a99c4b-..." not found, but found as SHA256 "e576c29ddc58fb7f"
⏭️  Skipping duplicate: JID_a58979e1-scholar_jr32397 (posted within 7 days)
[2026-01-31T06:53:49.614Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1f686b0f..." not found, but found as SHA256 "d57503037fda7723"
⏭️  Skipping duplicate: JID_758e78d3 (posted within 7 days)
[2026-01-31T06:53:49.614Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1f686b0f..." not found, but found as SHA256 "54888438fdb90bf0"
⏭️  Skipping duplicate: JID_db0316a6 (posted within 7 days)
[2026-01-31T06:53:49.615Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1f686b0f..." not found, but found as SHA256 "1f96889daf69b4be"
⏭️  Skipping duplicate: JID_23021325 (posted within 7 days)
[2026-01-31T06:53:49.615Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e4e9bec6..." not found, but found as SHA256 "96557dce390e3b9f"
⏭️  Skipping duplicate: JID_679ebc85-developer_jr100173 (posted within 7 days)
[2026-01-31T06:53:49.720Z] [BOT] ✅ Loaded pending queue: 2956 total (2029 pending, 48 enriched, 879 posted)
[2026-01-31T06:53:49.893Z] [BOT] ✅ Saved pending queue: 2956 total (2029 pending, 38 enriched, 889 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T06:53:49.893Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T06:53:49.978Z] [BOT] 📂 Loaded 10970 existing routing entries
[2026-01-31T06:53:50.099Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T06:53:50.099Z] [BOT] Total entries: 10980
   Timestamp: 2026-01-31T06:53:50.055Z
[2026-01-31T06:53:50.100Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T06:53:50.100Z] [BOT] Total attempts: 28
   Successful: 12
   Failed: 0
   Skipped: 16
[2026-01-31T06:53:50.100Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 6
   Top channels:
[2026-01-31T06:53:50.100Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 2 posts
     3. #💰・finance-jobs: 1 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #🗽・JID_98d4f0de: 1 posts
[2026-01-31T06:53:50.101Z] [BOT] [STATS] Channel stats saved
[2026-01-31T06:53:50.101Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 918 jobs in memory (cached)
[2026-01-31T06:53:50.138Z] [BOT] ✅ Loaded V2 database: 918 jobs
💾 DISK STATE: 918 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=918
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 918 jobs (merged disk + memory)
✅ No jobs to archive (all 918 jobs within 7-day window)
[2026-01-31T06:53:50.196Z] [BOT] 💾 Saved posted_jobs.json: 918 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T06:53:50.196Z] [BOT] ✅ Database saved successfully
[2026-01-31T06:53:52.225Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2801) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*