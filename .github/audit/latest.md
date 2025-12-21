# Discord Bot Execution Audit
**Timestamp:** 2025-12-21T20:37:40.069Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-21T20:36:55.857Z] ========================================
[2025-12-21T20:36:55.859Z] Discord Bot Execution Log
[2025-12-21T20:36:55.859Z] Environment: GitHub Actions
[2025-12-21T20:36:55.859Z] Node Version: v20.19.6
[2025-12-21T20:36:55.859Z] ========================================
[2025-12-21T20:36:55.860Z] Environment Variables Check:
[2025-12-21T20:36:55.860Z] DISCORD_TOKEN: ✅ Set
[2025-12-21T20:36:55.860Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-21T20:36:55.860Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-21T20:36:55.860Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-21T20:36:55.860Z] 
Multi-Channel Configuration:
[2025-12-21T20:36:55.860Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-21T20:36:55.860Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-21T20:36:55.860Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-21T20:36:55.860Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-21T20:36:55.860Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-21T20:36:55.861Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-21T20:36:55.861Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-21T20:36:55.861Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-21T20:36:55.861Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-21T20:36:55.861Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-21T20:36:55.861Z] 
Data Files Check:
[2025-12-21T20:36:55.861Z] .github/data/new_jobs.json: ✅ Exists (10 items, 43196 bytes)
[2025-12-21T20:36:55.865Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 525249 bytes)
[2025-12-21T20:36:55.865Z] 
========================================
[2025-12-21T20:36:55.865Z] Starting Enhanced Discord Bot...
[2025-12-21T20:36:55.865Z] ========================================
[2025-12-21T20:36:56.372Z] [BOT] ✅ Loaded V2 database: 897 jobs
[2025-12-21T20:36:57.301Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-21T20:36:57.301Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-21T20:36:57.301Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-21T20:36:57.301Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-21T20:36:57.353Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2025-12-21T20:36:57.413Z] [BOT] ✅ Export complete: Added 2, Skipped 8, Total 174
[2025-12-21T20:36:57.415Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-21T20:36:57.415Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-21T20:36:57.416Z] [BOT] 📋 After blacklist filter: 9 jobs (1 blacklisted)
[2025-12-21T20:36:57.416Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-21T20:36:57.417Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-21T20:36:57.417Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
[2025-12-21T20:36:57.417Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-21T20:36:57.421Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-21T20:36:57.421Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_e5268fee University
[2025-12-21T20:36:57.421Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:36:57.426Z] [BOT ERROR] (node:2412) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-21T20:36:57.936Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_e5268fee University in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_e5268fee University
[2025-12-21T20:36:59.438Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_e5268fee University (instance #1)
[2025-12-21T20:36:59.438Z] [BOT] 💾 BEFORE ARCHIVING: 898 jobs in database
[2025-12-21T20:36:59.439Z] [BOT] ✅ No jobs to archive (all 898 jobs within 7-day window)
[2025-12-21T20:36:59.496Z] [BOT] 💾 Saved posted_jobs.json: 898 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:36:59.496Z] [BOT] 📍 [ROUTING] "Sales and Product Development Engineer" @ ORG_7611a65f
[2025-12-21T20:36:59.496Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:36:59.660Z] [BOT] ✅ Created forum post: 🏢 Sales and Product Development Engineer @ ORG_7611a65f in #💻・tech-jobs
  ✅ Industry: Sales and Product Development Engineer @ ORG_7611a65f
[2025-12-21T20:37:01.518Z] [BOT] ✅ Created forum post: 🏢 Sales and Product Development Engineer @ ORG_7611a65f in #💻・remote-usa
[2025-12-21T20:37:01.518Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T20:37:03.019Z] [BOT] 💾 Marked as posted: Sales and Product Development Engineer @ ORG_7611a65f (instance #1)
[2025-12-21T20:37:03.019Z] [BOT] 💾 BEFORE ARCHIVING: 899 jobs in database
[2025-12-21T20:37:03.020Z] [BOT] ✅ No jobs to archive (all 899 jobs within 7-day window)
[2025-12-21T20:37:03.026Z] [BOT] 💾 Saved posted_jobs.json: 899 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:37:03.027Z] [BOT] 📍 [ROUTING] "Analyst – Analytics" @ ORG_db84132b Group
[2025-12-21T20:37:03.027Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:37:03.250Z] [BOT] ✅ Created forum post: 🏢 Analyst – Analytics @ ORG_db84132b Group in #💻・tech-jobs
  ✅ Industry: Analyst – Analytics @ ORG_db84132b Group
[2025-12-21T20:37:05.196Z] [BOT] ✅ Created forum post: 🏢 Analyst – Analytics @ ORG_db84132b Group in #🦢・los-angeles
[2025-12-21T20:37:05.196Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-21T20:37:06.698Z] [BOT] 💾 Marked as posted: Analyst – Analytics @ ORG_db84132b Group (instance #1)
[2025-12-21T20:37:06.698Z] [BOT] 💾 BEFORE ARCHIVING: 900 jobs in database
[2025-12-21T20:37:06.699Z] [BOT] ✅ No jobs to archive (all 900 jobs within 7-day window)
[2025-12-21T20:37:06.706Z] [BOT] 💾 Saved posted_jobs.json: 900 active jobs
[2025-12-21T20:37:06.706Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T20:37:06.707Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - Direct Issuance - Frontend" @ ORG_a10ae009
[2025-12-21T20:37:06.707Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:37:06.988Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Direct Issuance - Frontend @ ORG_a10ae009 in #💻・tech-jobs
[2025-12-21T20:37:06.988Z] [BOT] ✅ Industry: Software Engineer 2 - Direct Issuance - Frontend @ ORG_a10ae009
[2025-12-21T20:37:08.894Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Direct Issuance - Frontend @ ORG_a10ae009 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-21T20:37:10.394Z] [BOT] 💾 Marked as posted: Software Engineer 2 - Direct Issuance - Frontend @ ORG_a10ae009 (instance #1)
[2025-12-21T20:37:10.394Z] [BOT] 💾 BEFORE ARCHIVING: 901 jobs in database
[2025-12-21T20:37:10.395Z] [BOT] ✅ No jobs to archive (all 901 jobs within 7-day window)
[2025-12-21T20:37:10.403Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
[2025-12-21T20:37:10.403Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T20:37:10.404Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - Elixir" @ ORG_3cbc87c7 Anomaly
[2025-12-21T20:37:10.404Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:37:10.597Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Elixir @ ORG_3cbc87c7 Anomaly in #💻・tech-jobs
[2025-12-21T20:37:10.597Z] [BOT] ✅ Industry: Software Engineer 2 - Elixir @ ORG_3cbc87c7 Anomaly
[2025-12-21T20:37:12.320Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Elixir @ ORG_3cbc87c7 Anomaly in #🦢・los-angeles
[2025-12-21T20:37:12.320Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-21T20:37:13.821Z] [BOT] 💾 Marked as posted: Software Engineer 2 - Elixir @ ORG_3cbc87c7 Anomaly (instance #1)
[2025-12-21T20:37:13.822Z] [BOT] 💾 BEFORE ARCHIVING: 902 jobs in database
[2025-12-21T20:37:13.822Z] [BOT] ✅ No jobs to archive (all 902 jobs within 7-day window)
[2025-12-21T20:37:13.830Z] [BOT] 💾 Saved posted_jobs.json: 902 active jobs
[2025-12-21T20:37:13.831Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T20:37:16.831Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-21T20:37:16.831Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
[2025-12-21T20:37:16.832Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-21T20:37:17.125Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2025-12-21T20:37:18.823Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-21T20:37:20.325Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 (instance #1)
[2025-12-21T20:37:20.325Z] [BOT] 💾 BEFORE ARCHIVING: 903 jobs in database
[2025-12-21T20:37:20.326Z] [BOT] ✅ No jobs to archive (all 903 jobs within 7-day window)
[2025-12-21T20:37:20.333Z] [BOT] 💾 Saved posted_jobs.json: 903 active jobs
[2025-12-21T20:37:20.333Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T20:37:20.333Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence" @ ORG_2380d607 View A&M University
   Category: AI (matched: "machine learning")
[2025-12-21T20:37:20.333Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-21T20:37:20.663Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence @ ORG_2380d607 View A&M Universit in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence @ ORG_2380d607 View A&M University
[2025-12-21T20:37:22.581Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence @ ORG_2380d607 View A&M Universit in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-21T20:37:24.082Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence @ ORG_2380d607 View A&M University (instance #1)
[2025-12-21T20:37:24.082Z] [BOT] 💾 BEFORE ARCHIVING: 904 jobs in database
[2025-12-21T20:37:24.082Z] [BOT] ✅ No jobs to archive (all 904 jobs within 7-day window)
[2025-12-21T20:37:24.090Z] [BOT] 💾 Saved posted_jobs.json: 904 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:37:24.091Z] [BOT] 📍 [ROUTING] "Research Scientist" @ ORG_72fd3ae0
[2025-12-21T20:37:24.091Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-21T20:37:24.405Z] [BOT] ✅ Created forum post: 🎨 Research Scientist @ ORG_72fd3ae0 in #🤖・ai-jobs
[2025-12-21T20:37:24.405Z] [BOT] ✅ Industry: Research Scientist @ ORG_72fd3ae0
[2025-12-21T20:37:26.041Z] [BOT] ✅ Created forum post: 🎨 Research Scientist @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-21T20:37:26.041Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-21T20:37:27.542Z] [BOT] 💾 Marked as posted: Research Scientist @ ORG_72fd3ae0 (instance #1)
[2025-12-21T20:37:27.542Z] [BOT] 💾 BEFORE ARCHIVING: 905 jobs in database
[2025-12-21T20:37:27.543Z] [BOT] ✅ No jobs to archive (all 905 jobs within 7-day window)
[2025-12-21T20:37:27.551Z] [BOT] 💾 Saved posted_jobs.json: 905 active jobs
[2025-12-21T20:37:27.551Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T20:37:30.551Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-21T20:37:30.551Z] [BOT] 📍 [ROUTING] "Phlebotomist Team Leader" @ ORG_538ca2aa
[2025-12-21T20:37:30.552Z] [BOT] Category: SALES (matched: "donor")
   Channel: 💲・sales-jobs (1391...3632)
[2025-12-21T20:37:30.787Z] [BOT] ✅ Created forum post: 🏢 Phlebotomist Team Leader @ ORG_538ca2aa in #💲・sales-jobs
[2025-12-21T20:37:30.787Z] [BOT] ✅ Industry: Phlebotomist Team Leader @ ORG_538ca2aa
[2025-12-21T20:37:32.724Z] [BOT] ✅ Created forum post: 🏢 Phlebotomist Team Leader @ ORG_538ca2aa in #💻・remote-usa
[2025-12-21T20:37:32.724Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T20:37:34.225Z] [BOT] 💾 Marked as posted: Phlebotomist Team Leader @ ORG_538ca2aa (instance #1)
[2025-12-21T20:37:34.226Z] [BOT] 💾 BEFORE ARCHIVING: 906 jobs in database
[2025-12-21T20:37:34.226Z] [BOT] ✅ No jobs to archive (all 906 jobs within 7-day window)
[2025-12-21T20:37:34.234Z] [BOT] 💾 Saved posted_jobs.json: 906 active jobs
[2025-12-21T20:37:34.235Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T20:37:37.235Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-21T20:37:37.235Z] [BOT] ⏭️  Skipping duplicate: JID_33b5120f-mcgill_careers-JID_a4d3b744-developer_jr0000072713 (posted within 7 days)
[2025-12-21T20:37:37.235Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r158869 (posted within 7 days)
[2025-12-21T20:37:37.235Z] [BOT] ⏭️  Skipping duplicate: JID_914a3e4e-cx_1001-job-2021718 (posted within 7 days)
[2025-12-21T20:37:37.236Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-pvamu_external-JID_08c2ea1a-2_r-089885-1 (posted within 7 days)
[2025-12-21T20:37:37.236Z] [BOT] ⏭️  Skipping duplicate: JID_d512e010-analytics_jr27759-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_75841756 (posted within 7 days)
⏭️  Skipping duplicate: JID_726d36e3 (posted within 7 days)
⏭️  Skipping duplicate: JID_ed22a702 (posted within 7 days)
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_ca9e8846-scientist_r163076 (posted within 7 days)
[2025-12-21T20:37:37.237Z] [BOT] ✅ Loaded pending queue: 17 total (0 pending, 17 enriched, 0 posted)
[2025-12-21T20:37:37.239Z] [BOT] ✅ Saved pending queue: 17 total (0 pending, 8 enriched, 9 posted)
[2025-12-21T20:37:37.239Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-21T20:37:37.280Z] [BOT] 📂 Loaded 981 existing routing entries
[2025-12-21T20:37:37.327Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-21T20:37:37.327Z] [BOT] Total entries: 990
   Timestamp: 2025-12-21T20:37:37.322Z
[2025-12-21T20:37:37.327Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e38d000c.jsonl
[2025-12-21T20:37:37.327Z] [BOT] Total attempts: 18
   Successful: 17
   Failed: 0
   Skipped: 1
[2025-12-21T20:37:37.328Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-21T20:37:37.328Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 8
   Top channels:
[2025-12-21T20:37:37.328Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🦢・los-angeles: 3 posts
     3. #🤖・ai-jobs: 3 posts
     4. #💻・remote-usa: 2 posts
     5. #🌧️・seattle: 1 posts
[2025-12-21T20:37:37.328Z] [BOT] [STATS] Channel stats saved
[2025-12-21T20:37:39.339Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2412) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*