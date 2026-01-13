# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T23:08:41.581Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T23:07:52.737Z] ========================================
[2026-01-13T23:07:52.739Z] Discord Bot Execution Log
[2026-01-13T23:07:52.739Z] Environment: GitHub Actions
[2026-01-13T23:07:52.739Z] Node Version: v20.19.6
[2026-01-13T23:07:52.739Z] ========================================
[2026-01-13T23:07:52.739Z] Environment Variables Check:
[2026-01-13T23:07:52.739Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T23:07:52.740Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T23:07:52.740Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T23:07:52.740Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T23:07:52.740Z] 
Multi-Channel Configuration:
[2026-01-13T23:07:52.740Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T23:07:52.740Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T23:07:52.740Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T23:07:52.740Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T23:07:52.740Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T23:07:52.740Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T23:07:52.740Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T23:07:52.740Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T23:07:52.741Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T23:07:52.741Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T23:07:52.741Z] 
Data Files Check:
[2026-01-13T23:07:52.742Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108981 bytes)
[2026-01-13T23:07:52.746Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 564069 bytes)
[2026-01-13T23:07:52.746Z] 
========================================
[2026-01-13T23:07:52.746Z] Starting Enhanced Discord Bot...
[2026-01-13T23:07:52.746Z] ========================================
[2026-01-13T23:07:53.271Z] [BOT] ✅ Loaded V2 database: 1057 jobs
[2026-01-13T23:07:53.866Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T23:07:53.866Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T23:07:53.867Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T23:07:53.974Z] [BOT] ✅ Loaded pending queue: 2711 total (2691 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Scientist - Generalist Embodied Agent Research at NVIDIA
[2026-01-13T23:07:53.977Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T23:07:53.977Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T23:07:53.977Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T23:07:53.978Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-13T23:07:53.978Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Enterprise Customer Success Manager @ brex: salt lake city, utah, united states, san francisco, california, united states, new york, new york, united states, seattle, washington, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-13T23:07:53.978Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T23:07:53.983Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-13T23:07:53.983Z] [BOT] 📍 [ROUTING] "Research Scientist - Generalist Embodied Agent Research" @ ORG_0890f456
[2026-01-13T23:07:53.983Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T23:07:54.000Z] [BOT ERROR] (node:3131) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T23:07:54.275Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Generalist Embodied Agent Research @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-13T23:07:54.275Z] [BOT] ✅ Industry: Research Scientist - Generalist Embodied Agent Research @ ORG_0890f456
[2026-01-13T23:07:55.777Z] [BOT] 💾 Marked as posted: Research Scientist - Generalist Embodied Agent Research @ ORG_0890f456 (instance #1)
[2026-01-13T23:07:55.778Z] [BOT] 💾 BEFORE ARCHIVING: 1058 jobs in database
[2026-01-13T23:07:55.779Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T23:07:55.783Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T23:07:55.784Z] [BOT] ✅ Archiving complete: 1 archived, 1057 active
[2026-01-13T23:07:55.792Z] [BOT] 💾 Saved posted_jobs.json: 1057 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:07:55.792Z] [BOT] 📍 [ROUTING] "GM, AI Foundation" @ spotify
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T23:07:56.161Z] [BOT] ✅ Created forum post: 🏢 GM, AI Foundation @ spotify in #🤖・ai-jobs
  ✅ Industry: GM, AI Foundation @ spotify
[2026-01-13T23:07:58.029Z] [BOT] ✅ Created forum post: 🏢 GM, AI Foundation @ spotify in #🗽・new-york
[2026-01-13T23:07:58.029Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T23:07:59.531Z] [BOT] 💾 Marked as posted: GM, AI Foundation @ spotify (instance #1)
[2026-01-13T23:07:59.531Z] [BOT] 💾 BEFORE ARCHIVING: 1058 jobs in database
[2026-01-13T23:07:59.531Z] [BOT] ✅ No jobs to archive (all 1058 jobs within 7-day window)
[2026-01-13T23:07:59.538Z] [BOT] 💾 Saved posted_jobs.json: 1058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:08:02.538Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T23:08:02.539Z] [BOT] 📍 [ROUTING] "Graduate Data Scientist" @ ORG_742553d6 Entertainment
[2026-01-13T23:08:02.540Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-13T23:08:02.540Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T23:08:02.726Z] [BOT] ✅ Created forum post: 🏢 Graduate Data Scientist @ ORG_742553d6 Entertainment in #📈・JID_fb739488
[2026-01-13T23:08:02.726Z] [BOT] ✅ Industry: Graduate Data Scientist @ ORG_742553d6 Entertainment
[2026-01-13T23:08:04.587Z] [BOT] ✅ Created forum post: 🏢 Graduate Data Scientist @ ORG_742553d6 Entertainment in #💻・remote-usa
[2026-01-13T23:08:04.587Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T23:08:06.088Z] [BOT] 💾 Marked as posted: Graduate Data Scientist @ ORG_742553d6 Entertainment (instance #1)
[2026-01-13T23:08:06.089Z] [BOT] 💾 BEFORE ARCHIVING: 1059 jobs in database
[2026-01-13T23:08:06.090Z] [BOT] ✅ No jobs to archive (all 1059 jobs within 7-day window)
[2026-01-13T23:08:06.098Z] [BOT] 💾 Saved posted_jobs.json: 1059 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:08:09.099Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-13T23:08:09.100Z] [BOT] 📍 [ROUTING] "Quantum Software Engineer" @ ORG_c7bac469
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T23:08:09.417Z] [BOT] ✅ Created forum post: 🟦 Quantum Software Engineer @ ORG_c7bac469 in #💻・tech-jobs
  ✅ Industry: Quantum Software Engineer @ ORG_c7bac469
[2026-01-13T23:08:11.221Z] [BOT] ✅ Created forum post: 🟦 Quantum Software Engineer @ ORG_c7bac469 in #🖥️・redmond
[2026-01-13T23:08:11.221Z] [BOT] ✅ Location: 🖥️・redmond
[2026-01-13T23:08:12.723Z] [BOT] 💾 Marked as posted: Quantum Software Engineer @ ORG_c7bac469 (instance #1)
[2026-01-13T23:08:12.723Z] [BOT] 💾 BEFORE ARCHIVING: 1060 jobs in database
[2026-01-13T23:08:12.724Z] [BOT] ✅ No jobs to archive (all 1060 jobs within 7-day window)
[2026-01-13T23:08:12.732Z] [BOT] 💾 Saved posted_jobs.json: 1060 active jobs
[2026-01-13T23:08:12.732Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:08:12.732Z] [BOT] 📍 [ROUTING] "Junior Full Stack Developer" @ ORG_2b03a7ca
[2026-01-13T23:08:12.732Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T23:08:12.944Z] [BOT] ✅ Created forum post: 🏢 Junior Full Stack Developer @ ORG_2b03a7ca in #💻・tech-jobs
[2026-01-13T23:08:12.945Z] [BOT] ✅ Industry: Junior Full Stack Developer @ ORG_2b03a7ca
[2026-01-13T23:08:14.915Z] [BOT] ✅ Created forum post: 🏢 Junior Full Stack Developer @ ORG_2b03a7ca in #💻・remote-usa
[2026-01-13T23:08:14.916Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T23:08:16.417Z] [BOT] 💾 Marked as posted: Junior Full Stack Developer @ ORG_2b03a7ca (instance #1)
[2026-01-13T23:08:16.417Z] [BOT] 💾 BEFORE ARCHIVING: 1061 jobs in database
[2026-01-13T23:08:16.418Z] [BOT] ✅ No jobs to archive (all 1061 jobs within 7-day window)
[2026-01-13T23:08:16.426Z] [BOT] 💾 Saved posted_jobs.json: 1061 active jobs
[2026-01-13T23:08:16.426Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:08:16.426Z] [BOT] 📍 [ROUTING] "Full-Stack Developer, Junior" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
[2026-01-13T23:08:16.427Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T23:08:16.665Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Developer, Junior @ ORG_39417f32 Allen in #💻・tech-jobs
[2026-01-13T23:08:16.665Z] [BOT] ✅ Industry: Full-Stack Developer, Junior @ ORG_39417f32 Allen
[2026-01-13T23:08:18.775Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Developer, Junior @ ORG_39417f32 Allen in #💻・remote-usa
[2026-01-13T23:08:18.775Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T23:08:20.275Z] [BOT] 💾 Marked as posted: Full-Stack Developer, Junior @ ORG_39417f32 Allen (instance #1)
[2026-01-13T23:08:20.275Z] [BOT] 💾 BEFORE ARCHIVING: 1062 jobs in database
[2026-01-13T23:08:20.276Z] [BOT] ✅ No jobs to archive (all 1062 jobs within 7-day window)
[2026-01-13T23:08:20.283Z] [BOT] 💾 Saved posted_jobs.json: 1062 active jobs
[2026-01-13T23:08:20.283Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:08:20.283Z] [BOT] 📍 [ROUTING] "Korean Bilingual Software Test Engineer (Entry Level)" @ ORG_d5c1b124 Solutions
[2026-01-13T23:08:20.284Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T23:08:20.504Z] [BOT] ✅ Created forum post: 🏢 Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions in #💻・tech-jobs
[2026-01-13T23:08:20.504Z] [BOT] ✅ Industry: Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions
[2026-01-13T23:08:22.161Z] [BOT] ✅ Created forum post: 🏢 Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions in #🤠・austin
[2026-01-13T23:08:22.161Z] [BOT] ✅ Location: 🤠・austin
[2026-01-13T23:08:23.660Z] [BOT] 💾 Marked as posted: Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions (instance #1)
[2026-01-13T23:08:23.661Z] [BOT] 💾 BEFORE ARCHIVING: 1063 jobs in database
[2026-01-13T23:08:23.661Z] [BOT] ✅ No jobs to archive (all 1063 jobs within 7-day window)
[2026-01-13T23:08:23.670Z] [BOT] 💾 Saved posted_jobs.json: 1063 active jobs
[2026-01-13T23:08:23.670Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:08:26.670Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-13T23:08:26.670Z] [BOT] 📍 [ROUTING] "GTM Partner Enablement" @ anthropic
[2026-01-13T23:08:26.670Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T23:08:26.935Z] [BOT] ✅ Created forum post: 🏢 GTM Partner Enablement @ anthropic in #💲・sales-jobs
  ✅ Industry: GTM Partner Enablement @ anthropic
[2026-01-13T23:08:28.709Z] [BOT] ✅ Created forum post: 🏢 GTM Partner Enablement @ anthropic in #🌉・san-francisco
[2026-01-13T23:08:28.709Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T23:08:30.209Z] [BOT] 💾 Marked as posted: GTM Partner Enablement @ anthropic (instance #1)
[2026-01-13T23:08:30.210Z] [BOT] 💾 BEFORE ARCHIVING: 1064 jobs in database
[2026-01-13T23:08:30.210Z] [BOT] ✅ No jobs to archive (all 1064 jobs within 7-day window)
[2026-01-13T23:08:30.217Z] [BOT] 💾 Saved posted_jobs.json: 1064 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:08:30.218Z] [BOT] 📍 [ROUTING] "Enterprise Customer Success Manager" @ brex
[2026-01-13T23:08:30.218Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T23:08:30.421Z] [BOT] ✅ Created forum post: 🏢 Enterprise Customer Success Manager @ brex in #💲・sales-jobs
[2026-01-13T23:08:30.421Z] [BOT] ✅ Industry: Enterprise Customer Success Manager @ brex
[2026-01-13T23:08:32.123Z] [BOT] ✅ Created forum post: 🏢 Enterprise Customer Success Manager @ brex in #💻・remote-usa
[2026-01-13T23:08:32.123Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T23:08:33.624Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager @ brex (instance #1)
[2026-01-13T23:08:33.624Z] [BOT] 💾 BEFORE ARCHIVING: 1065 jobs in database
[2026-01-13T23:08:33.625Z] [BOT] ✅ No jobs to archive (all 1065 jobs within 7-day window)
[2026-01-13T23:08:33.634Z] [BOT] 💾 Saved posted_jobs.json: 1065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:08:33.634Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager @ brex (instance #1)
[2026-01-13T23:08:33.634Z] [BOT] 💾 BEFORE ARCHIVING: 1066 jobs in database
[2026-01-13T23:08:33.635Z] [BOT] ✅ No jobs to archive (all 1066 jobs within 7-day window)
[2026-01-13T23:08:33.643Z] [BOT] 💾 Saved posted_jobs.json: 1066 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:08:33.643Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager @ brex (instance #1)
[2026-01-13T23:08:33.643Z] [BOT] 💾 BEFORE ARCHIVING: 1067 jobs in database
[2026-01-13T23:08:33.644Z] [BOT] ✅ No jobs to archive (all 1067 jobs within 7-day window)
[2026-01-13T23:08:33.651Z] [BOT] 💾 Saved posted_jobs.json: 1067 active jobs
[2026-01-13T23:08:33.651Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Enterprise Customer Success Manager @ brex (instance #1)
💾 BEFORE ARCHIVING: 1068 jobs in database
[2026-01-13T23:08:33.651Z] [BOT] ✅ No jobs to archive (all 1068 jobs within 7-day window)
[2026-01-13T23:08:33.659Z] [BOT] 💾 Saved posted_jobs.json: 1068 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:08:33.659Z] [BOT] 📍 [ROUTING] "Customer Solution Architect Team Lead (AMER)" @ supabase
[2026-01-13T23:08:33.659Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T23:08:33.879Z] [BOT] ✅ Created forum post: 🏢 Customer Solution Architect Team Lead (AMER) @ supabase in #💲・sales-jobs
[2026-01-13T23:08:33.880Z] [BOT] ✅ Industry: Customer Solution Architect Team Lead (AMER) @ supabase
[2026-01-13T23:08:35.380Z] [BOT] 💾 Marked as posted: Customer Solution Architect Team Lead (AMER) @ supabase (instance #1)
[2026-01-13T23:08:35.381Z] [BOT] 💾 BEFORE ARCHIVING: 1069 jobs in database
[2026-01-13T23:08:35.381Z] [BOT] ✅ No jobs to archive (all 1069 jobs within 7-day window)
[2026-01-13T23:08:35.389Z] [BOT] 💾 Saved posted_jobs.json: 1069 active jobs
[2026-01-13T23:08:35.389Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:08:38.389Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T23:08:38.389Z] [BOT] ⏭️  Skipping duplicate: JID_1fa6454f-2026_jr2009294 (posted within 7 days)
[2026-01-13T23:08:38.389Z] [BOT] ⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-73987 (posted within 7 days)
[2026-01-13T23:08:38.389Z] [BOT] ⏭️  Skipping duplicate: JID_3cc30985 (posted within 7 days)
[2026-01-13T23:08:38.390Z] [BOT] ⏭️  Skipping duplicate: JID_4fd6c10c (posted within 7 days)
[2026-01-13T23:08:38.390Z] [BOT] ⏭️  Skipping duplicate: JID_b8d16eff (posted within 7 days)
[2026-01-13T23:08:38.390Z] [BOT] ⏭️  Skipping duplicate: JID_a9cdfa5a (posted within 7 days)
[2026-01-13T23:08:38.390Z] [BOT] ⏭️  Skipping duplicate: JID_4d632599 (posted within 7 days)
⏭️  Skipping duplicate: JID_66641ac6 (posted within 7 days)
[2026-01-13T23:08:38.390Z] [BOT] ⏭️  Skipping duplicate: JID_3a244b89-bah_jobs-JID_eae44490-junior_r0230620 (posted within 7 days)
⏭️  Skipping duplicate: JID_9fba6108-ao7167525_jr101482 (posted within 7 days)
[2026-01-13T23:08:38.501Z] [BOT] ✅ Loaded pending queue: 2711 total (2691 pending, 20 enriched, 0 posted)
[2026-01-13T23:08:38.676Z] [BOT] ✅ Saved pending queue: 2711 total (2691 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T23:08:38.733Z] [BOT] 📂 Loaded 3205 existing routing entries
[2026-01-13T23:08:38.791Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3215
[2026-01-13T23:08:38.792Z] [BOT] Timestamp: 2026-01-13T23:08:38.778Z
[2026-01-13T23:08:38.792Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T23:08:38.792Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-13T23:08:38.793Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 9
   Top channels:
     1. #💻・remote-usa: 4 posts
     2. #💻・tech-jobs: 4 posts
     3. #💲・sales-jobs: 3 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2026-01-13T23:08:40.819Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3131) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*