# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T22:55:44.452Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T22:54:49.799Z] ========================================
[2026-01-13T22:54:49.801Z] Discord Bot Execution Log
[2026-01-13T22:54:49.801Z] Environment: GitHub Actions
[2026-01-13T22:54:49.801Z] Node Version: v20.19.6
[2026-01-13T22:54:49.801Z] ========================================
[2026-01-13T22:54:49.801Z] Environment Variables Check:
[2026-01-13T22:54:49.801Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T22:54:49.801Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T22:54:49.802Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T22:54:49.802Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T22:54:49.802Z] 
Multi-Channel Configuration:
[2026-01-13T22:54:49.802Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T22:54:49.802Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T22:54:49.802Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T22:54:49.802Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T22:54:49.802Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T22:54:49.802Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T22:54:49.802Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T22:54:49.802Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T22:54:49.802Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T22:54:49.802Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T22:54:49.803Z] 
Data Files Check:
[2026-01-13T22:54:49.803Z] .github/data/new_jobs.json: ✅ Exists (10 items, 86545 bytes)
[2026-01-13T22:54:49.808Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 559055 bytes)
[2026-01-13T22:54:49.808Z] 
========================================
[2026-01-13T22:54:49.808Z] Starting Enhanced Discord Bot...
[2026-01-13T22:54:49.808Z] ========================================
[2026-01-13T22:54:50.325Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-13T22:54:50.826Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T22:54:50.826Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T22:54:50.826Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T22:54:50.938Z] [BOT] ✅ Loaded pending queue: 2714 total (2694 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Manager, Inside Sales at figma
[2026-01-13T22:54:50.940Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T22:54:50.940Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T22:54:50.941Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T22:54:50.941Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-13T22:54:50.942Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-13T22:54:50.942Z] [BOT] - Enterprise Customer Success Manager @ brex: salt lake city, utah, united states, san francisco, california, united states, new york, new york, united states, seattle, washington, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T22:54:50.947Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-13T22:54:50.947Z] [BOT] 📍 [ROUTING] "Manager, Inside Sales" @ figma
[2026-01-13T22:54:50.947Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T22:54:50.965Z] [BOT ERROR] (node:3223) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T22:54:51.135Z] [BOT] ✅ Created forum post: 🏢 Manager, Inside Sales @ figma in #💲・sales-jobs
[2026-01-13T22:54:51.136Z] [BOT] ✅ Industry: Manager, Inside Sales @ figma
[2026-01-13T22:54:52.806Z] [BOT] ✅ Created forum post: 🏢 Manager, Inside Sales @ figma in #🗽・new-york
[2026-01-13T22:54:52.806Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T22:54:54.308Z] [BOT] 💾 Marked as posted: Manager, Inside Sales @ figma (instance #1)
[2026-01-13T22:54:54.308Z] [BOT] 💾 BEFORE ARCHIVING: 1051 jobs in database
[2026-01-13T22:54:54.309Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T22:54:54.314Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-13T22:54:54.314Z] [BOT] ✅ Archiving complete: 3 archived, 1048 active
[2026-01-13T22:54:54.321Z] [BOT] 💾 Saved posted_jobs.json: 1048 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:54:57.321Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-13T22:54:57.322Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Web Frameworks - Officer" @ ORG_a3b50c47 Street
[2026-01-13T22:54:57.322Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:54:57.605Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street
[2026-01-13T22:54:59.430Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-13T22:55:00.932Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street (instance #1)
[2026-01-13T22:55:00.932Z] [BOT] 💾 BEFORE ARCHIVING: 1049 jobs in database
[2026-01-13T22:55:00.933Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-13T22:55:00.941Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:55:00.942Z] [BOT] 📍 [ROUTING] "Software Engineer - Ent" @ ORG_f3f2248d Grumman
[2026-01-13T22:55:00.942Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:55:01.150Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Ent @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Software Engineer - Ent @ ORG_f3f2248d Grumman
[2026-01-13T22:55:02.861Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Ent @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T22:55:04.363Z] [BOT] 💾 Marked as posted: Software Engineer - Ent @ ORG_f3f2248d Grumman (instance #1)
[2026-01-13T22:55:04.363Z] [BOT] 💾 BEFORE ARCHIVING: 1050 jobs in database
[2026-01-13T22:55:04.364Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-13T22:55:04.372Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-13T22:55:04.372Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:55:04.373Z] [BOT] 📍 [ROUTING] "Research Scientist - Post Doc Research Fellow" @ ORG_f186449d University
[2026-01-13T22:55:04.373Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:55:04.602Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Post Doc Research Fellow @ ORG_f186449d University in #💻・tech-jobs
  ✅ Industry: Research Scientist - Post Doc Research Fellow @ ORG_f186449d University
[2026-01-13T22:55:06.569Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Post Doc Research Fellow @ ORG_f186449d University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T22:55:08.071Z] [BOT] 💾 Marked as posted: Research Scientist - Post Doc Research Fellow @ ORG_f186449d University (instance #1)
[2026-01-13T22:55:08.071Z] [BOT] 💾 BEFORE ARCHIVING: 1051 jobs in database
[2026-01-13T22:55:08.072Z] [BOT] ✅ No jobs to archive (all 1051 jobs within 7-day window)
[2026-01-13T22:55:08.079Z] [BOT] 💾 Saved posted_jobs.json: 1051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:55:11.079Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-13T22:55:11.079Z] [BOT] 📍 [ROUTING] "Product Analyst - Digital Advertising" @ ORG_162cc64c Tower
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T22:55:11.079Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T22:55:11.480Z] [BOT] ✅ Created forum post: 🏢 Product Analyst - Digital Advertising @ ORG_162cc64c Tower in #🤖・ai-jobs
  ✅ Industry: Product Analyst - Digital Advertising @ ORG_162cc64c Tower
[2026-01-13T22:55:13.295Z] [BOT] ✅ Created forum post: 🏢 Product Analyst - Digital Advertising @ ORG_162cc64c Tower in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-13T22:55:14.795Z] [BOT] 💾 Marked as posted: Product Analyst - Digital Advertising @ ORG_162cc64c Tower (instance #1)
[2026-01-13T22:55:14.795Z] [BOT] 💾 BEFORE ARCHIVING: 1052 jobs in database
[2026-01-13T22:55:14.796Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-13T22:55:14.804Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-13T22:55:14.805Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:55:14.805Z] [BOT] 📍 [ROUTING] "Associate Director, Programmatic Platform Operations" @ spotify
[2026-01-13T22:55:14.805Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T22:55:15.016Z] [BOT] ✅ Created forum post: 🏢 Associate Director, Programmatic Platform Operations @ spotify in #🤖・ai-jobs
  ✅ Industry: Associate Director, Programmatic Platform Operations @ spotify
[2026-01-13T22:55:16.742Z] [BOT] ✅ Created forum post: 🏢 Associate Director, Programmatic Platform Operations @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T22:55:18.243Z] [BOT] 💾 Marked as posted: Associate Director, Programmatic Platform Operations @ spotify (instance #1)
[2026-01-13T22:55:18.243Z] [BOT] 💾 BEFORE ARCHIVING: 1053 jobs in database
[2026-01-13T22:55:18.244Z] [BOT] ✅ No jobs to archive (all 1053 jobs within 7-day window)
[2026-01-13T22:55:18.253Z] [BOT] 💾 Saved posted_jobs.json: 1053 active jobs
[2026-01-13T22:55:18.253Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:55:18.254Z] [BOT] 📍 [ROUTING] "GPU and SoC Modelling Architect – New College Grad" @ ORG_0890f456
[2026-01-13T22:55:18.254Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T22:55:18.504Z] [BOT] ✅ Created forum post: 🏢 GPU and SoC Modelling Architect – New College Grad @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-13T22:55:18.504Z] [BOT] ✅ Industry: GPU and SoC Modelling Architect – New College Grad @ ORG_0890f456
[2026-01-13T22:55:20.242Z] [BOT] ✅ Created forum post: 🏢 GPU and SoC Modelling Architect – New College Grad @ ORG_0890f456 in #🌉・san-francisco
[2026-01-13T22:55:20.242Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T22:55:21.743Z] [BOT] 💾 Marked as posted: GPU and SoC Modelling Architect – New College Grad @ ORG_0890f456 (instance #1)
[2026-01-13T22:55:21.743Z] [BOT] 💾 BEFORE ARCHIVING: 1054 jobs in database
[2026-01-13T22:55:21.744Z] [BOT] ✅ No jobs to archive (all 1054 jobs within 7-day window)
[2026-01-13T22:55:21.753Z] [BOT] 💾 Saved posted_jobs.json: 1054 active jobs
[2026-01-13T22:55:21.753Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:55:24.754Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-13T22:55:24.754Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_692aa04a
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-13T22:55:24.754Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T22:55:25.374Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_692aa04a in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_692aa04a
[2026-01-13T22:55:27.082Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_692aa04a in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T22:55:28.584Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_692aa04a (instance #1)
[2026-01-13T22:55:28.584Z] [BOT] 💾 BEFORE ARCHIVING: 1055 jobs in database
[2026-01-13T22:55:28.585Z] [BOT] ✅ No jobs to archive (all 1055 jobs within 7-day window)
[2026-01-13T22:55:28.594Z] [BOT] 💾 Saved posted_jobs.json: 1055 active jobs
[2026-01-13T22:55:28.594Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:55:28.594Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst" @ ORG_2d1e8306 Specialty
[2026-01-13T22:55:28.594Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T22:55:28.769Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_2d1e8306 Specialty in #📈・JID_fb739488
  ✅ Industry: Business Intelligence Analyst @ ORG_2d1e8306 Specialty
[2026-01-13T22:55:30.422Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_2d1e8306 Specialty in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T22:55:31.922Z] [BOT] 💾 Marked as posted: Business Intelligence Analyst @ ORG_2d1e8306 Specialty (instance #1)
[2026-01-13T22:55:31.922Z] [BOT] 💾 BEFORE ARCHIVING: 1056 jobs in database
[2026-01-13T22:55:31.923Z] [BOT] ✅ No jobs to archive (all 1056 jobs within 7-day window)
[2026-01-13T22:55:31.931Z] [BOT] 💾 Saved posted_jobs.json: 1056 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:55:34.931Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-13T22:55:34.932Z] [BOT] 📍 [ROUTING] "Segment Marketing Manager, Startups" @ anthropic
[2026-01-13T22:55:34.932Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T22:55:35.279Z] [BOT] ✅ Created forum post: 🏢 Segment Marketing Manager, Startups @ anthropic in #📣・marketing-jobs
  ✅ Industry: Segment Marketing Manager, Startups @ anthropic
[2026-01-13T22:55:36.923Z] [BOT] ✅ Created forum post: 🏢 Segment Marketing Manager, Startups @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T22:55:38.423Z] [BOT] 💾 Marked as posted: Segment Marketing Manager, Startups @ anthropic (instance #1)
[2026-01-13T22:55:38.423Z] [BOT] 💾 BEFORE ARCHIVING: 1057 jobs in database
[2026-01-13T22:55:38.424Z] [BOT] ✅ No jobs to archive (all 1057 jobs within 7-day window)
[2026-01-13T22:55:38.432Z] [BOT] 💾 Saved posted_jobs.json: 1057 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:55:41.432Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T22:55:41.433Z] [BOT] ⏭️  Skipping duplicate: JID_60d64f1d (posted within 7 days)
[2026-01-13T22:55:41.433Z] [BOT] ⏭️  Skipping duplicate: JID_cc999bf9-officer_r-779734-1 (posted within 7 days)
[2026-01-13T22:55:41.433Z] [BOT] ⏭️  Skipping duplicate: JID_aed7440b (posted within 7 days)
[2026-01-13T22:55:41.433Z] [BOT] ⏭️  Skipping duplicate: JID_8a767604 (posted within 7 days)
[2026-01-13T22:55:41.433Z] [BOT] ⏭️  Skipping duplicate: JID_f18f7721-analyst_r105711 (posted within 7 days)
[2026-01-13T22:55:41.433Z] [BOT] ⏭️  Skipping duplicate: JID_b3f780e6 (posted within 7 days)
[2026-01-13T22:55:41.433Z] [BOT] ⏭️  Skipping duplicate: JID_2f317ae4-2026_jr2009934 (posted within 7 days)
[2026-01-13T22:55:41.434Z] [BOT] ⏭️  Skipping duplicate: JID_9ecc75be-ryan_specialty_career_site-JID_097d5bb0-analyst_jr25-3719 (posted within 7 days)
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_d9435324-_r10216983 (posted within 7 days)
[2026-01-13T22:55:41.434Z] [BOT] ⏭️  Skipping duplicate: JID_22004331-_jr107708-1 (posted within 7 days)
[2026-01-13T22:55:41.564Z] [BOT] ✅ Loaded pending queue: 2714 total (2694 pending, 20 enriched, 0 posted)
[2026-01-13T22:55:41.719Z] [BOT] ✅ Saved pending queue: 2714 total (2694 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-13T22:55:41.719Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T22:55:41.771Z] [BOT] 📂 Loaded 3195 existing routing entries
[2026-01-13T22:55:41.830Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T22:55:41.830Z] [BOT] Total entries: 3205
   Timestamp: 2026-01-13T22:55:41.816Z
[2026-01-13T22:55:41.831Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T22:55:41.831Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-13T22:55:41.831Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T22:55:41.831Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
[2026-01-13T22:55:41.831Z] [BOT] Top channels:
[2026-01-13T22:55:41.831Z] [BOT] 1. #💻・remote-usa: 4 posts
     2. #💻・tech-jobs: 3 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🗽・new-york: 2 posts
     5. #🚌・boston: 2 posts
[2026-01-13T22:55:41.831Z] [BOT] [STATS] Channel stats saved
[2026-01-13T22:55:43.857Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3223) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*