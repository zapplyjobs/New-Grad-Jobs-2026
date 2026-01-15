# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T05:45:27.270Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T05:44:37.643Z] ========================================
[2026-01-15T05:44:37.645Z] Discord Bot Execution Log
[2026-01-15T05:44:37.645Z] Environment: GitHub Actions
[2026-01-15T05:44:37.645Z] Node Version: v20.19.6
[2026-01-15T05:44:37.645Z] ========================================
[2026-01-15T05:44:37.645Z] Environment Variables Check:
[2026-01-15T05:44:37.645Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T05:44:37.645Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T05:44:37.646Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T05:44:37.646Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T05:44:37.646Z] 
Multi-Channel Configuration:
[2026-01-15T05:44:37.646Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T05:44:37.646Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T05:44:37.646Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T05:44:37.646Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T05:44:37.646Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T05:44:37.646Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T05:44:37.646Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T05:44:37.646Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T05:44:37.647Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T05:44:37.647Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T05:44:37.647Z] 
Data Files Check:
[2026-01-15T05:44:37.647Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47598 bytes)
[2026-01-15T05:44:37.654Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 858213 bytes)
[2026-01-15T05:44:37.654Z] 
========================================
[2026-01-15T05:44:37.654Z] Starting Enhanced Discord Bot...
[2026-01-15T05:44:37.654Z] ========================================
[2026-01-15T05:44:38.173Z] [BOT] ✅ Loaded V2 database: 1616 jobs
[2026-01-15T05:44:38.682Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T05:44:38.682Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T05:44:38.683Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T05:44:38.794Z] [BOT] ✅ Loaded pending queue: 2719 total (2699 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Operations Analyst at Fortive
[2026-01-15T05:44:38.797Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T05:44:38.798Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T05:44:38.798Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T05:44:38.799Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T05:44:38.799Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T05:44:38.803Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-15T05:44:38.803Z] [BOT] 📍 [ROUTING] "Operations Analyst" @ ORG_ad6fabcb
[2026-01-15T05:44:38.804Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T05:44:38.820Z] [BOT ERROR] (node:2655) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T05:44:39.000Z] [BOT] ✅ Created forum post: 🏢 Operations Analyst @ ORG_ad6fabcb in #💲・sales-jobs
  ✅ Industry: Operations Analyst @ ORG_ad6fabcb
[2026-01-15T05:44:40.658Z] [BOT] ✅ Created forum post: 🏢 Operations Analyst @ ORG_ad6fabcb in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-15T05:44:42.159Z] [BOT] 💾 Marked as posted: Operations Analyst @ ORG_ad6fabcb (instance #1)
[2026-01-15T05:44:42.159Z] [BOT] 💾 BEFORE ARCHIVING: 1617 jobs in database
[2026-01-15T05:44:42.161Z] [BOT] ✅ No jobs to archive (all 1617 jobs within 7-day window)
[2026-01-15T05:44:42.177Z] [BOT] 💾 Saved posted_jobs.json: 1617 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:44:45.179Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-15T05:44:45.179Z] [BOT] 📍 [ROUTING] "University Graduate - Applied Science" @ ORG_72fd3ae0
[2026-01-15T05:44:45.179Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T05:44:45.653Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Applied Science @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-15T05:44:45.653Z] [BOT] ✅ Industry: University Graduate - Applied Science @ ORG_72fd3ae0
[2026-01-15T05:44:47.400Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Applied Science @ ORG_72fd3ae0 in #🌧️・seattle
[2026-01-15T05:44:47.400Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-15T05:44:48.902Z] [BOT] 💾 Marked as posted: University Graduate - Applied Science @ ORG_72fd3ae0 (instance #1)
[2026-01-15T05:44:48.902Z] [BOT] 💾 BEFORE ARCHIVING: 1618 jobs in database
[2026-01-15T05:44:48.904Z] [BOT] ✅ No jobs to archive (all 1618 jobs within 7-day window)
[2026-01-15T05:44:48.915Z] [BOT] 💾 Saved posted_jobs.json: 1618 active jobs
[2026-01-15T05:44:48.915Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:44:48.916Z] [BOT] 📍 [ROUTING] "Software Engineer - Infrastructure" @ nominal
[2026-01-15T05:44:48.916Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T05:44:48.916Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T05:44:49.218Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Infrastructure @ nominal in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Infrastructure @ nominal
[2026-01-15T05:44:50.905Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Infrastructure @ nominal in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T05:44:52.407Z] [BOT] 💾 Marked as posted: Software Engineer - Infrastructure @ nominal (instance #1)
[2026-01-15T05:44:52.407Z] [BOT] 💾 BEFORE ARCHIVING: 1619 jobs in database
[2026-01-15T05:44:52.408Z] [BOT] ✅ No jobs to archive (all 1619 jobs within 7-day window)
[2026-01-15T05:44:52.419Z] [BOT] 💾 Saved posted_jobs.json: 1619 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:44:52.419Z] [BOT] 📍 [ROUTING] "Artificial Intelligence" @ ORG_9d38443e of Miami
[2026-01-15T05:44:52.419Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T05:44:52.635Z] [BOT] ✅ Created forum post: 🏢 Artificial Intelligence @ ORG_9d38443e of Miami in #🤖・ai-jobs
  ✅ Industry: Artificial Intelligence @ ORG_9d38443e of Miami
[2026-01-15T05:44:54.447Z] [BOT] ✅ Created forum post: 🏢 Artificial Intelligence @ ORG_9d38443e of Miami in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T05:44:55.949Z] [BOT] 💾 Marked as posted: Artificial Intelligence @ ORG_9d38443e of Miami (instance #1)
[2026-01-15T05:44:55.949Z] [BOT] 💾 BEFORE ARCHIVING: 1620 jobs in database
[2026-01-15T05:44:55.950Z] [BOT] ✅ No jobs to archive (all 1620 jobs within 7-day window)
[2026-01-15T05:44:55.960Z] [BOT] 💾 Saved posted_jobs.json: 1620 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:44:55.961Z] [BOT] 📍 [ROUTING] "Assistant Professor - Data Science" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T05:44:56.180Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor - Data Science @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
[2026-01-15T05:44:56.180Z] [BOT] ✅ Industry: Assistant Professor - Data Science @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-15T05:44:57.810Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor - Data Science @ ORG_4b95ce62 A&M University - Corpus Christi in #🤠・austin
[2026-01-15T05:44:57.810Z] [BOT] ✅ Location: 🤠・austin
[2026-01-15T05:44:59.311Z] [BOT] 💾 Marked as posted: Assistant Professor - Data Science @ ORG_4b95ce62 A&M University - Corpus Christi (instance #1)
[2026-01-15T05:44:59.311Z] [BOT] 💾 BEFORE ARCHIVING: 1621 jobs in database
[2026-01-15T05:44:59.312Z] [BOT] ✅ No jobs to archive (all 1621 jobs within 7-day window)
[2026-01-15T05:44:59.322Z] [BOT] 💾 Saved posted_jobs.json: 1621 active jobs
[2026-01-15T05:44:59.322Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:45:02.323Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-15T05:45:02.323Z] [BOT] 📍 [ROUTING] "Application Engineer - IT Racks and Cabinets" @ ORG_9b9b6e44
[2026-01-15T05:45:02.323Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:45:02.547Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - IT Racks and Cabinets @ ORG_9b9b6e44 in #💻・tech-jobs
[2026-01-15T05:45:02.547Z] [BOT] ✅ Industry: Application Engineer - IT Racks and Cabinets @ ORG_9b9b6e44
[2026-01-15T05:45:04.406Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - IT Racks and Cabinets @ ORG_9b9b6e44 in #💻・remote-usa
[2026-01-15T05:45:04.407Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T05:45:05.908Z] [BOT] 💾 Marked as posted: Application Engineer - IT Racks and Cabinets @ ORG_9b9b6e44 (instance #1)
[2026-01-15T05:45:05.908Z] [BOT] 💾 BEFORE ARCHIVING: 1622 jobs in database
[2026-01-15T05:45:05.909Z] [BOT] ✅ No jobs to archive (all 1622 jobs within 7-day window)
[2026-01-15T05:45:05.922Z] [BOT] 💾 Saved posted_jobs.json: 1622 active jobs
[2026-01-15T05:45:05.922Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:45:05.922Z] [BOT] 📍 [ROUTING] "Rust Engineer" @ supabase
[2026-01-15T05:45:05.922Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:45:06.230Z] [BOT] ✅ Created forum post: 🏢 Rust Engineer @ supabase in #💻・tech-jobs
  ✅ Industry: Rust Engineer @ supabase
[2026-01-15T05:45:07.731Z] [BOT] 💾 Marked as posted: Rust Engineer @ supabase (instance #1)
[2026-01-15T05:45:07.732Z] [BOT] 💾 BEFORE ARCHIVING: 1623 jobs in database
[2026-01-15T05:45:07.733Z] [BOT] ✅ No jobs to archive (all 1623 jobs within 7-day window)
[2026-01-15T05:45:07.745Z] [BOT] 💾 Saved posted_jobs.json: 1623 active jobs
[2026-01-15T05:45:07.745Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:45:07.745Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Entry Level" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:45:07.909Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Entry Level @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2026-01-15T05:45:07.909Z] [BOT] ✅ Industry: Software Engineer 1 - Entry Level @ ORG_c910d474 Dynamics Mission Systems
[2026-01-15T05:45:09.561Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Entry Level @ ORG_c910d474 Dynamics Mission Systems in #🚌・boston
[2026-01-15T05:45:09.561Z] [BOT] ✅ Location: 🚌・boston
[2026-01-15T05:45:11.062Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Entry Level @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2026-01-15T05:45:11.062Z] [BOT] 💾 BEFORE ARCHIVING: 1624 jobs in database
[2026-01-15T05:45:11.064Z] [BOT] ✅ No jobs to archive (all 1624 jobs within 7-day window)
[2026-01-15T05:45:11.074Z] [BOT] 💾 Saved posted_jobs.json: 1624 active jobs
[2026-01-15T05:45:11.074Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:45:11.075Z] [BOT] 📍 [ROUTING] "Application Engineer 1 - Pre-sale Product Selection" @ ORG_7a23266b
[2026-01-15T05:45:11.075Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:45:11.459Z] [BOT] ✅ Created forum post: 🏢 Application Engineer 1 - Pre-sale Product Selection @ ORG_7a23266b in #💻・tech-jobs
  ✅ Industry: Application Engineer 1 - Pre-sale Product Selection @ ORG_7a23266b
[2026-01-15T05:45:13.231Z] [BOT] ✅ Created forum post: 🏢 Application Engineer 1 - Pre-sale Product Selection @ ORG_7a23266b in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-15T05:45:14.732Z] [BOT] 💾 Marked as posted: Application Engineer 1 - Pre-sale Product Selection @ ORG_7a23266b (instance #1)
[2026-01-15T05:45:14.732Z] [BOT] 💾 BEFORE ARCHIVING: 1625 jobs in database
[2026-01-15T05:45:14.733Z] [BOT] ✅ No jobs to archive (all 1625 jobs within 7-day window)
[2026-01-15T05:45:14.744Z] [BOT] 💾 Saved posted_jobs.json: 1625 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:45:17.745Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-15T05:45:17.745Z] [BOT] 📍 [ROUTING] "Report Customization Specialist - Temporary Assignment" @ ORG_a032d230 Medical Corporation
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-15T05:45:17.977Z] [BOT] ✅ Created forum post: 🏢 Report Customization Specialist - Temporary Assignment @ ORG_a032d230 Medical Corporation in #🩺・healthcare-jobs
[2026-01-15T05:45:17.977Z] [BOT] ✅ Industry: Report Customization Specialist - Temporary Assignment @ ORG_a032d230 Medical Corporation
[2026-01-15T05:45:19.688Z] [BOT] ✅ Created forum post: 🏢 Report Customization Specialist - Temporary Assignment @ ORG_a032d230 Medical Corporation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T05:45:21.190Z] [BOT] 💾 Marked as posted: Report Customization Specialist - Temporary Assignment @ ORG_a032d230 Medical Corporation (instance #1)
[2026-01-15T05:45:21.190Z] [BOT] 💾 BEFORE ARCHIVING: 1626 jobs in database
[2026-01-15T05:45:21.191Z] [BOT] ✅ No jobs to archive (all 1626 jobs within 7-day window)
[2026-01-15T05:45:21.204Z] [BOT] 💾 Saved posted_jobs.json: 1626 active jobs
[2026-01-15T05:45:21.204Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:45:24.205Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T05:45:24.206Z] [BOT] ⏭️  Skipping duplicate: JID_59941b58-cx_2001-job-8088 (posted within 7 days)
[2026-01-15T05:45:24.206Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_ae2d465b-science_r160136 (posted within 7 days)
[2026-01-15T05:45:24.206Z] [BOT] ⏭️  Skipping duplicate: JID_23094729 (posted within 7 days)
[2026-01-15T05:45:24.206Z] [BOT] ⏭️  Skipping duplicate: JID_b99e2b7b (posted within 7 days)
[2026-01-15T05:45:24.206Z] [BOT] ⏭️  Skipping duplicate: JID_c385d046-assignment_r17168 (posted within 7 days)
[2026-01-15T05:45:24.207Z] [BOT] ⏭️  Skipping duplicate: JID_12e13baa-_r100092114 (posted within 7 days)
[2026-01-15T05:45:24.207Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-tamucc_external-JID_95243951-science_r-088833-1 (posted within 7 days)
[2026-01-15T05:45:24.207Z] [BOT] ⏭️  Skipping duplicate: JID_eec4e6ca (posted within 7 days)
[2026-01-15T05:45:24.207Z] [BOT] ⏭️  Skipping duplicate: JID_3f76dbbd (posted within 7 days)
⏭️  Skipping duplicate: JID_aecea04f (posted within 7 days)
[2026-01-15T05:45:24.335Z] [BOT] ✅ Loaded pending queue: 2719 total (2699 pending, 20 enriched, 0 posted)
[2026-01-15T05:45:24.497Z] [BOT] ✅ Saved pending queue: 2719 total (2699 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-15T05:45:24.497Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T05:45:24.553Z] [BOT] 📂 Loaded 3795 existing routing entries
[2026-01-15T05:45:24.614Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3805
[2026-01-15T05:45:24.615Z] [BOT] Timestamp: 2026-01-15T05:45:24.599Z
[2026-01-15T05:45:24.615Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T05:45:24.615Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-15T05:45:24.615Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T05:45:24.615Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 9
   Top channels:
     1. #🤖・ai-jobs: 4 posts
     2. #💻・tech-jobs: 4 posts
     3. #💻・remote-usa: 3 posts
[2026-01-15T05:45:24.616Z] [BOT] 4. #🤠・austin: 2 posts
     5. #🚌・boston: 2 posts
[2026-01-15T05:45:24.616Z] [BOT] [STATS] Channel stats saved
[2026-01-15T05:45:26.643Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2655) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*