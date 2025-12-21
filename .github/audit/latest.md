# Discord Bot Execution Audit
**Timestamp:** 2025-12-21T18:25:25.159Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-21T18:24:36.290Z] ========================================
[2025-12-21T18:24:36.292Z] Discord Bot Execution Log
[2025-12-21T18:24:36.292Z] Environment: GitHub Actions
[2025-12-21T18:24:36.292Z] Node Version: v20.19.6
[2025-12-21T18:24:36.292Z] ========================================
[2025-12-21T18:24:36.292Z] Environment Variables Check:
[2025-12-21T18:24:36.292Z] DISCORD_TOKEN: ✅ Set
[2025-12-21T18:24:36.293Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-21T18:24:36.293Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-21T18:24:36.293Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-21T18:24:36.293Z] 
Multi-Channel Configuration:
[2025-12-21T18:24:36.293Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-21T18:24:36.293Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-21T18:24:36.293Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-21T18:24:36.293Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-21T18:24:36.293Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-21T18:24:36.293Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-21T18:24:36.293Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-21T18:24:36.293Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-21T18:24:36.294Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-21T18:24:36.294Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-21T18:24:36.294Z] 
Data Files Check:
[2025-12-21T18:24:36.294Z] .github/data/new_jobs.json: ✅ Exists (10 items, 53352 bytes)
[2025-12-21T18:24:36.299Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 494289 bytes)
[2025-12-21T18:24:36.299Z] 
========================================
[2025-12-21T18:24:36.299Z] Starting Enhanced Discord Bot...
[2025-12-21T18:24:36.299Z] ========================================
[2025-12-21T18:24:36.824Z] [BOT] ✅ Loaded V2 database: 844 jobs
[2025-12-21T18:24:37.470Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-21T18:24:37.471Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-21T18:24:37.471Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-21T18:24:37.471Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-21T18:24:37.523Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-21T18:24:37.576Z] [BOT] ✅ Export complete: Added 1, Skipped 9, Total 114
[2025-12-21T18:24:37.578Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-21T18:24:37.578Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-21T18:24:37.578Z] [BOT] 📋 After blacklist filter: 9 jobs (1 blacklisted)
[2025-12-21T18:24:37.578Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-21T18:24:37.579Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-21T18:24:37.579Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-21T18:24:37.579Z] [BOT] 📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-21T18:24:37.581Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-21T18:24:37.583Z] [BOT] 📍 [ROUTING] "Predoctoral Appointee - Machine Learning" @ ORG_a867f63f National Laboratory
[2025-12-21T18:24:37.583Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-21T18:24:37.587Z] [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-21T18:24:37.807Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Appointee - Machine Learning @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
[2025-12-21T18:24:37.808Z] [BOT] ✅ Industry: Predoctoral Appointee - Machine Learning @ ORG_a867f63f National Laboratory
[2025-12-21T18:24:39.668Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Appointee - Machine Learning @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-21T18:24:41.169Z] [BOT] 💾 Marked as posted: Predoctoral Appointee - Machine Learning @ ORG_a867f63f National Laboratory (instance #1)
[2025-12-21T18:24:41.169Z] [BOT] 💾 BEFORE ARCHIVING: 845 jobs in database
[2025-12-21T18:24:41.170Z] [BOT] ✅ No jobs to archive (all 845 jobs within 7-day window)
[2025-12-21T18:24:41.181Z] [BOT] 💾 Saved posted_jobs.json: 845 active jobs
[2025-12-21T18:24:41.181Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:24:41.182Z] [BOT] 📍 [ROUTING] "DGX Cloud Performance Engineer" @ ORG_0890f456
[2025-12-21T18:24:41.182Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-21T18:24:41.182Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-21T18:24:41.454Z] [BOT] ✅ Created forum post: 🏢 DGX Cloud Performance Engineer @ ORG_0890f456 in #🤖・ai-jobs
[2025-12-21T18:24:41.455Z] [BOT] ✅ Industry: DGX Cloud Performance Engineer @ ORG_0890f456
[2025-12-21T18:24:43.461Z] [BOT] ✅ Created forum post: 🏢 DGX Cloud Performance Engineer @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-21T18:24:44.962Z] [BOT] 💾 Marked as posted: DGX Cloud Performance Engineer @ ORG_0890f456 (instance #1)
💾 BEFORE ARCHIVING: 846 jobs in database
✅ No jobs to archive (all 846 jobs within 7-day window)
[2025-12-21T18:24:44.973Z] [BOT] 💾 Saved posted_jobs.json: 846 active jobs
[2025-12-21T18:24:44.974Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:24:44.974Z] [BOT] 📍 [ROUTING] "Software Engineer 2" @ ORG_8b09cf05
[2025-12-21T18:24:44.974Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-21T18:24:46.914Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 @ ORG_8b09cf05 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 2 @ ORG_8b09cf05
[2025-12-21T18:24:48.617Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 @ ORG_8b09cf05 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T18:24:50.117Z] [BOT] 💾 Marked as posted: Software Engineer 2 @ ORG_8b09cf05 (instance #1)
[2025-12-21T18:24:50.117Z] [BOT] 💾 BEFORE ARCHIVING: 847 jobs in database
[2025-12-21T18:24:50.118Z] [BOT] ✅ No jobs to archive (all 847 jobs within 7-day window)
[2025-12-21T18:24:50.126Z] [BOT] 💾 Saved posted_jobs.json: 847 active jobs
[2025-12-21T18:24:50.126Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:24:53.126Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-21T18:24:53.128Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_c91c6840ingstar
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:24:53.400Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_c91c6840ingstar in #💻・tech-jobs
[2025-12-21T18:24:53.401Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_c91c6840ingstar
[2025-12-21T18:24:55.105Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_c91c6840ingstar in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-21T18:24:56.607Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_c91c6840ingstar (instance #1)
[2025-12-21T18:24:56.607Z] [BOT] 💾 BEFORE ARCHIVING: 848 jobs in database
[2025-12-21T18:24:56.607Z] [BOT] ✅ No jobs to archive (all 848 jobs within 7-day window)
[2025-12-21T18:24:56.615Z] [BOT] 💾 Saved posted_jobs.json: 848 active jobs
[2025-12-21T18:24:56.615Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:24:56.616Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_3812004b Capital Group
[2025-12-21T18:24:56.616Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:24:56.812Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_3812004b Capital Group in #💻・tech-jobs
[2025-12-21T18:24:56.812Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_3812004b Capital Group
[2025-12-21T18:24:58.720Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_3812004b Capital Group in #🦢・los-angeles
[2025-12-21T18:24:58.720Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-21T18:25:00.221Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_3812004b Capital Group (instance #1)
[2025-12-21T18:25:00.222Z] [BOT] 💾 BEFORE ARCHIVING: 849 jobs in database
[2025-12-21T18:25:00.222Z] [BOT] ✅ No jobs to archive (all 849 jobs within 7-day window)
[2025-12-21T18:25:00.230Z] [BOT] 💾 Saved posted_jobs.json: 849 active jobs
[2025-12-21T18:25:00.230Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:25:00.230Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_dc008d0e Bros.
[2025-12-21T18:25:00.230Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:25:00.753Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_dc008d0e Bros. in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_dc008d0e Bros.
[2025-12-21T18:25:02.511Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_dc008d0e Bros. in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-21T18:25:04.013Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_dc008d0e Bros. (instance #1)
[2025-12-21T18:25:04.013Z] [BOT] 💾 BEFORE ARCHIVING: 850 jobs in database
[2025-12-21T18:25:04.013Z] [BOT] ✅ No jobs to archive (all 850 jobs within 7-day window)
[2025-12-21T18:25:04.021Z] [BOT] 💾 Saved posted_jobs.json: 850 active jobs
[2025-12-21T18:25:04.021Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:25:04.022Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_b1b059ca Systems
   Category: TECH (matched: "software")
[2025-12-21T18:25:04.022Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:25:04.505Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_b1b059ca Systems in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_b1b059ca Systems
[2025-12-21T18:25:06.564Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_b1b059ca Systems in #🗽・new-york
[2025-12-21T18:25:06.565Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-21T18:25:08.066Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_b1b059ca Systems (instance #1)
[2025-12-21T18:25:08.066Z] [BOT] 💾 BEFORE ARCHIVING: 851 jobs in database
[2025-12-21T18:25:08.067Z] [BOT] ✅ No jobs to archive (all 851 jobs within 7-day window)
[2025-12-21T18:25:08.075Z] [BOT] 💾 Saved posted_jobs.json: 851 active jobs
[2025-12-21T18:25:08.075Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:25:08.075Z] [BOT] 📍 [ROUTING] "Data Quality Analyst 1" @ ORG_0aa5052d State University (LSU)
   Category: TECH (matched: "data")
[2025-12-21T18:25:08.075Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:25:08.644Z] [BOT] ✅ Created forum post: 🏢 Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU) in #💻・tech-jobs
  ✅ Industry: Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU)
[2025-12-21T18:25:10.562Z] [BOT] ✅ Created forum post: 🏢 Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T18:25:12.063Z] [BOT] 💾 Marked as posted: Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU) (instance #1)
[2025-12-21T18:25:12.063Z] [BOT] 💾 BEFORE ARCHIVING: 852 jobs in database
[2025-12-21T18:25:12.064Z] [BOT] ✅ No jobs to archive (all 852 jobs within 7-day window)
[2025-12-21T18:25:12.071Z] [BOT] 💾 Saved posted_jobs.json: 852 active jobs
[2025-12-21T18:25:12.071Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:25:15.072Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-21T18:25:15.073Z] [BOT] 📍 [ROUTING] "Sales & Pricing Analyst" @ ORG_3aec9bf8
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-21T18:25:15.073Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-21T18:25:15.552Z] [BOT] ✅ Created forum post: 🏢 Sales & Pricing Analyst @ ORG_3aec9bf8 in #📈・JID_fb739488
  ✅ Industry: Sales & Pricing Analyst @ ORG_3aec9bf8
[2025-12-21T18:25:17.320Z] [BOT] ✅ Created forum post: 🏢 Sales & Pricing Analyst @ ORG_3aec9bf8 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T18:25:18.821Z] [BOT] 💾 Marked as posted: Sales & Pricing Analyst @ ORG_3aec9bf8 (instance #1)
[2025-12-21T18:25:18.821Z] [BOT] 💾 BEFORE ARCHIVING: 853 jobs in database
[2025-12-21T18:25:18.822Z] [BOT] ✅ No jobs to archive (all 853 jobs within 7-day window)
[2025-12-21T18:25:18.829Z] [BOT] 💾 Saved posted_jobs.json: 853 active jobs
[2025-12-21T18:25:18.829Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:25:21.831Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-21T18:25:21.831Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_c022fab3-learning_421538 (posted within 7 days)
[2025-12-21T18:25:21.831Z] [BOT] ⏭️  Skipping duplicate: JID_43246070-engineer_req-054479-2 (posted within 7 days)
[2025-12-21T18:25:21.831Z] [BOT] ⏭️  Skipping duplicate: JID_9c9c9537-engineer_hr-19575-2 (posted within 7 days)
⏭️  Skipping duplicate: JID_c560983c-engineer_r000101226 (posted within 7 days)
[2025-12-21T18:25:21.831Z] [BOT] ⏭️  Skipping duplicate: JID_2a81cca7-analyst_r0013020 (posted within 7 days)
[2025-12-21T18:25:21.831Z] [BOT] ⏭️  Skipping duplicate: JID_b795c300 (posted within 7 days)
[2025-12-21T18:25:21.831Z] [BOT] ⏭️  Skipping duplicate: JID_a4dd9e68-2026_jr2009610 (posted within 7 days)
[2025-12-21T18:25:21.831Z] [BOT] ⏭️  Skipping duplicate: JID_cbe31eb0 (posted within 7 days)
[2025-12-21T18:25:21.832Z] [BOT] ⏭️  Skipping duplicate: JID_a9275996-1_r00111644-1 (posted within 7 days)
[2025-12-21T18:25:21.833Z] [BOT] ✅ Loaded pending queue: 98 total (78 pending, 20 enriched, 0 posted)
[2025-12-21T18:25:21.835Z] [BOT] ✅ Saved pending queue: 98 total (78 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-21T18:25:21.876Z] [BOT] 📂 Loaded 905 existing routing entries
[2025-12-21T18:25:21.922Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-21T18:25:21.922Z] [BOT] New entries: 9
   Total entries: 914
   Timestamp: 2025-12-21T18:25:21.917Z
[2025-12-21T18:25:21.923Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e38d000c.jsonl
   Total attempts: 19
[2025-12-21T18:25:21.923Z] [BOT] Successful: 18
   Failed: 0
   Skipped: 1
[2025-12-21T18:25:21.923Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-21T18:25:21.923Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 3 posts
[2025-12-21T18:25:21.923Z] [BOT] 3. #💻・remote-usa: 3 posts
     4. #🌆・chicago: 2 posts
     5. #🦢・los-angeles: 2 posts
[2025-12-21T18:25:21.923Z] [BOT] [STATS] Channel stats saved
[2025-12-21T18:25:23.935Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*