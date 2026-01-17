# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T20:10:25.028Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T20:09:27.818Z] ========================================
[2026-01-17T20:09:27.820Z] Discord Bot Execution Log
[2026-01-17T20:09:27.820Z] Environment: GitHub Actions
[2026-01-17T20:09:27.820Z] Node Version: v20.19.6
[2026-01-17T20:09:27.820Z] ========================================
[2026-01-17T20:09:27.820Z] Environment Variables Check:
[2026-01-17T20:09:27.820Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T20:09:27.820Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T20:09:27.820Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T20:09:27.821Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T20:09:27.821Z] 
Multi-Channel Configuration:
[2026-01-17T20:09:27.821Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T20:09:27.821Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T20:09:27.821Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T20:09:27.821Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T20:09:27.821Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T20:09:27.821Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T20:09:27.821Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T20:09:27.821Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T20:09:27.821Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T20:09:27.821Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T20:09:27.821Z] 
Data Files Check:
[2026-01-17T20:09:27.822Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58376 bytes)
[2026-01-17T20:09:27.831Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1321853 bytes)
[2026-01-17T20:09:27.831Z] 
========================================
[2026-01-17T20:09:27.831Z] Starting Enhanced Discord Bot...
[2026-01-17T20:09:27.831Z] ========================================
[2026-01-17T20:09:28.368Z] [BOT] ✅ Loaded V2 database: 2445 jobs
[2026-01-17T20:09:28.882Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T20:09:28.882Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T20:09:28.882Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T20:09:29.000Z] [BOT] ✅ Loaded pending queue: 2902 total (2882 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Landscape Architecture Analyst at Kimley-Horn
[2026-01-17T20:09:29.003Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T20:09:29.003Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T20:09:29.003Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T20:09:29.004Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-17T20:09:29.004Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T20:09:29.009Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-17T20:09:29.009Z] [BOT] 📍 [ROUTING] "Landscape Architecture Analyst" @ Kimley-Horn
[2026-01-17T20:09:29.009Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-17T20:09:29.014Z] [BOT ERROR] (node:3539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T20:09:29.208Z] [BOT] ✅ Created forum post: 🏢 Landscape Architecture Analyst @ Kimley-Horn in #🩺・healthcare-jobs
[2026-01-17T20:09:29.208Z] [BOT] ✅ Industry: Landscape Architecture Analyst @ Kimley-Horn
[2026-01-17T20:09:31.048Z] [BOT] ✅ Created forum post: 🏢 Landscape Architecture Analyst @ Kimley-Horn in #💻・remote-usa
[2026-01-17T20:09:31.048Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T20:09:32.549Z] [BOT] 💾 Marked as posted: Landscape Architecture Analyst @ Kimley-Horn (instance #1)
[2026-01-17T20:09:32.550Z] [BOT] 💾 BEFORE ARCHIVING: 2446 jobs in database
[2026-01-17T20:09:32.551Z] [BOT] ✅ No jobs to archive (all 2446 jobs within 7-day window)
[2026-01-17T20:09:32.574Z] [BOT] 💾 Saved posted_jobs.json: 2446 active jobs
[2026-01-17T20:09:32.574Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T20:09:35.574Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-17T20:09:35.575Z] [BOT] 📍 [ROUTING] "Technology Analyst Program" @ ORG_a5457c49
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-17T20:09:35.575Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-17T20:09:36.255Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst Program @ ORG_a5457c49 in #📈・JID_fb739488
[2026-01-17T20:09:36.255Z] [BOT] ✅ Industry: Technology Analyst Program @ ORG_a5457c49
[2026-01-17T20:09:38.036Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst Program @ ORG_a5457c49 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-17T20:09:39.537Z] [BOT] 💾 Marked as posted: Technology Analyst Program @ ORG_a5457c49 (instance #1)
[2026-01-17T20:09:39.537Z] [BOT] 💾 BEFORE ARCHIVING: 2447 jobs in database
[2026-01-17T20:09:39.540Z] [BOT] ✅ No jobs to archive (all 2447 jobs within 7-day window)
[2026-01-17T20:09:39.557Z] [BOT] 💾 Saved posted_jobs.json: 2447 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T20:09:39.558Z] [BOT] 📍 [ROUTING] "Electronic Resources Data Analyst 1" @ ORG_17ed0843 University
[2026-01-17T20:09:39.558Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-17T20:09:39.558Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T20:09:39.814Z] [BOT] ✅ Created forum post: 🏢 Electronic Resources Data Analyst 1 @ ORG_17ed0843 University in #📈・JID_fb739488
  ✅ Industry: Electronic Resources Data Analyst 1 @ ORG_17ed0843 University
[2026-01-17T20:09:41.576Z] [BOT] ✅ Created forum post: 🏢 Electronic Resources Data Analyst 1 @ ORG_17ed0843 University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T20:09:43.077Z] [BOT] 💾 Marked as posted: Electronic Resources Data Analyst 1 @ ORG_17ed0843 University (instance #1)
[2026-01-17T20:09:43.078Z] [BOT] 💾 BEFORE ARCHIVING: 2448 jobs in database
[2026-01-17T20:09:43.079Z] [BOT] ✅ No jobs to archive (all 2448 jobs within 7-day window)
[2026-01-17T20:09:43.096Z] [BOT] 💾 Saved posted_jobs.json: 2448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T20:09:46.097Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-17T20:09:46.098Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_7b717950
[2026-01-17T20:09:46.098Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T20:09:46.303Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_7b717950 in #💻・tech-jobs
[2026-01-17T20:09:46.304Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_7b717950
[2026-01-17T20:09:48.026Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_7b717950 in #🗽・new-york
[2026-01-17T20:09:48.026Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-17T20:09:49.527Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_7b717950 (instance #1)
[2026-01-17T20:09:49.527Z] [BOT] 💾 BEFORE ARCHIVING: 2449 jobs in database
[2026-01-17T20:09:49.528Z] [BOT] ✅ No jobs to archive (all 2449 jobs within 7-day window)
[2026-01-17T20:09:49.542Z] [BOT] 💾 Saved posted_jobs.json: 2449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T20:09:49.542Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - React/ C#" @ McDonald's
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T20:09:49.776Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - React/ C# @ McDonald's in #💻・tech-jobs
[2026-01-17T20:09:49.776Z] [BOT] ✅ Industry: Software Engineer 1 - React/ C# @ McDonald's
[2026-01-17T20:09:51.501Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - React/ C# @ McDonald's in #🌆・chicago
[2026-01-17T20:09:51.501Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-17T20:09:53.001Z] [BOT] 💾 Marked as posted: Software Engineer 1 - React/ C# @ McDonald's (instance #1)
[2026-01-17T20:09:53.002Z] [BOT] 💾 BEFORE ARCHIVING: 2450 jobs in database
[2026-01-17T20:09:53.003Z] [BOT] ✅ No jobs to archive (all 2450 jobs within 7-day window)
[2026-01-17T20:09:53.020Z] [BOT] 💾 Saved posted_jobs.json: 2450 active jobs
[2026-01-17T20:09:53.021Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T20:09:53.021Z] [BOT] 📍 [ROUTING] "Premier Support Engineer 2 - New York" @ datadog
[2026-01-17T20:09:53.021Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T20:09:53.213Z] [BOT] ✅ Created forum post: 🏢 Premier Support Engineer 2 - New York @ datadog in #💻・tech-jobs
[2026-01-17T20:09:53.213Z] [BOT] ✅ Industry: Premier Support Engineer 2 - New York @ datadog
[2026-01-17T20:09:54.875Z] [BOT] ✅ Created forum post: 🏢 Premier Support Engineer 2 - New York @ datadog in #🗽・new-york
[2026-01-17T20:09:54.875Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-17T20:09:56.376Z] [BOT] 💾 Marked as posted: Premier Support Engineer 2 - New York @ datadog (instance #1)
[2026-01-17T20:09:56.377Z] [BOT] 💾 BEFORE ARCHIVING: 2451 jobs in database
[2026-01-17T20:09:56.378Z] [BOT] ✅ No jobs to archive (all 2451 jobs within 7-day window)
[2026-01-17T20:09:56.394Z] [BOT] 💾 Saved posted_jobs.json: 2451 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T20:09:59.395Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-17T20:09:59.395Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model - Generative AI" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T20:09:59.663Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Foundation Model - Generative AI @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Research Scientist Graduate - Foundation Model - Generative AI @ ORG_08c9a13c
[2026-01-17T20:10:01.310Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Foundation Model - Generative AI @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-17T20:10:01.310Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T20:10:02.810Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Foundation Model - Generative AI @ ORG_08c9a13c (instance #1)
[2026-01-17T20:10:02.810Z] [BOT] 💾 BEFORE ARCHIVING: 2452 jobs in database
[2026-01-17T20:10:02.812Z] [BOT] ✅ No jobs to archive (all 2452 jobs within 7-day window)
[2026-01-17T20:10:02.827Z] [BOT] 💾 Saved posted_jobs.json: 2452 active jobs
[2026-01-17T20:10:02.827Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T20:10:05.828Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-17T20:10:05.828Z] [BOT] 📍 [ROUTING] "Applications Analyst Associate" @ ORG_37856574 Health
[2026-01-17T20:10:05.828Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-17T20:10:05.998Z] [BOT] ✅ Created forum post: 🏢 Applications Analyst Associate @ ORG_37856574 Health in #💰・finance-jobs
  ✅ Industry: Applications Analyst Associate @ ORG_37856574 Health
[2026-01-17T20:10:07.663Z] [BOT] ✅ Created forum post: 🏢 Applications Analyst Associate @ ORG_37856574 Health in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T20:10:09.165Z] [BOT] 💾 Marked as posted: Applications Analyst Associate @ ORG_37856574 Health (instance #1)
[2026-01-17T20:10:09.165Z] [BOT] 💾 BEFORE ARCHIVING: 2453 jobs in database
[2026-01-17T20:10:09.166Z] [BOT] ✅ No jobs to archive (all 2453 jobs within 7-day window)
[2026-01-17T20:10:09.185Z] [BOT] 💾 Saved posted_jobs.json: 2453 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T20:10:09.186Z] [BOT] 📍 [ROUTING] "Recreation Assistant" @ ORG_b344d80e Salvation Army
[2026-01-17T20:10:09.186Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-17T20:10:09.385Z] [BOT] ✅ Created forum post: 🏢 Recreation Assistant @ ORG_b344d80e Salvation Army in #💰・finance-jobs
[2026-01-17T20:10:09.385Z] [BOT] ✅ Industry: Recreation Assistant @ ORG_b344d80e Salvation Army
[2026-01-17T20:10:11.057Z] [BOT] ✅ Created forum post: 🏢 Recreation Assistant @ ORG_b344d80e Salvation Army in #💻・remote-usa
[2026-01-17T20:10:11.057Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T20:10:12.559Z] [BOT] 💾 Marked as posted: Recreation Assistant @ ORG_b344d80e Salvation Army (instance #1)
[2026-01-17T20:10:12.559Z] [BOT] 💾 BEFORE ARCHIVING: 2454 jobs in database
[2026-01-17T20:10:12.560Z] [BOT] ✅ No jobs to archive (all 2454 jobs within 7-day window)
[2026-01-17T20:10:12.575Z] [BOT] 💾 Saved posted_jobs.json: 2454 active jobs
[2026-01-17T20:10:12.576Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T20:10:15.577Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T20:10:15.578Z] [BOT] 📍 [ROUTING] "Product Operations Manager, Claude Code" @ anthropic
[2026-01-17T20:10:15.578Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T20:10:15.760Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager, Claude Code @ anthropic in #💲・sales-jobs
  ✅ Industry: Product Operations Manager, Claude Code @ anthropic
[2026-01-17T20:10:17.430Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager, Claude Code @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T20:10:18.930Z] [BOT] 💾 Marked as posted: Product Operations Manager, Claude Code @ anthropic (instance #1)
[2026-01-17T20:10:18.930Z] [BOT] 💾 BEFORE ARCHIVING: 2455 jobs in database
[2026-01-17T20:10:18.932Z] [BOT] ✅ No jobs to archive (all 2455 jobs within 7-day window)
[2026-01-17T20:10:18.949Z] [BOT] 💾 Saved posted_jobs.json: 2455 active jobs
[2026-01-17T20:10:18.949Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T20:10:21.950Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-17T20:10:21.951Z] [BOT] ⏭️  Skipping duplicate: JID_884a3a9f (posted within 7 days)
[2026-01-17T20:10:21.951Z] [BOT] ⏭️  Skipping duplicate: JID_58a7eb64-_r-10385188 (posted within 7 days)
[2026-01-17T20:10:21.951Z] [BOT] ⏭️  Skipping duplicate: JID_1ef37ebe (posted within 7 days)
[2026-01-17T20:10:21.951Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_8b85d47c-detail (posted within 7 days)
[2026-01-17T20:10:21.951Z] [BOT] ⏭️  Skipping duplicate: JID_415c8a18 (posted within 7 days)
[2026-01-17T20:10:21.951Z] [BOT] ⏭️  Skipping duplicate: JID_0c2d9b4d-vcuhealth_careers-JID_fb0b3453-associate_r40772-1 (posted within 7 days)
[2026-01-17T20:10:21.952Z] [BOT] ⏭️  Skipping duplicate: JID_66f91ac5-lu_job_board_staff-JID_2278b2fd-jfl_r0009510 (posted within 7 days)
[2026-01-17T20:10:21.952Z] [BOT] ⏭️  Skipping duplicate: JID_f90546be (posted within 7 days)
[2026-01-17T20:10:21.952Z] [BOT] ⏭️  Skipping duplicate: JID_8311b1b4 (posted within 7 days)
[2026-01-17T20:10:21.952Z] [BOT] ⏭️  Skipping duplicate: JID_206b832c (posted within 7 days)
[2026-01-17T20:10:22.073Z] [BOT] ✅ Loaded pending queue: 2902 total (2882 pending, 20 enriched, 0 posted)
[2026-01-17T20:10:22.250Z] [BOT] ✅ Saved pending queue: 2902 total (2882 pending, 10 enriched, 10 posted)
[2026-01-17T20:10:22.251Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T20:10:22.307Z] [BOT] 📂 Loaded 4625 existing routing entries
[2026-01-17T20:10:22.374Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-17T20:10:22.374Z] [BOT] Total entries: 4635
   Timestamp: 2026-01-17T20:10:22.355Z
[2026-01-17T20:10:22.375Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 10
   Top channels:
     1. #💻・remote-usa: 3 posts
[2026-01-17T20:10:22.375Z] [BOT] 2. #🗽・new-york: 3 posts
     3. #💻・tech-jobs: 3 posts
     4. #🌉・san-francisco: 3 posts
[2026-01-17T20:10:22.375Z] [BOT] 5. #📈・JID_fb739488: 2 posts
[2026-01-17T20:10:22.375Z] [BOT] [STATS] Channel stats saved
[2026-01-17T20:10:24.401Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*