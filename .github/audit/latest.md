# Discord Bot Execution Audit
**Timestamp:** 2025-12-23T03:53:27.083Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-23T03:52:53.907Z] ========================================
[2025-12-23T03:52:53.909Z] Discord Bot Execution Log
[2025-12-23T03:52:53.909Z] Environment: GitHub Actions
[2025-12-23T03:52:53.909Z] Node Version: v20.19.6
[2025-12-23T03:52:53.909Z] ========================================
[2025-12-23T03:52:53.909Z] Environment Variables Check:
[2025-12-23T03:52:53.909Z] DISCORD_TOKEN: ✅ Set
[2025-12-23T03:52:53.909Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-23T03:52:53.909Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-23T03:52:53.909Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-23T03:52:53.909Z] 
Multi-Channel Configuration:
[2025-12-23T03:52:53.909Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-23T03:52:53.910Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-23T03:52:53.910Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-23T03:52:53.910Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-23T03:52:53.910Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-23T03:52:53.910Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-23T03:52:53.910Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-23T03:52:53.910Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-23T03:52:53.910Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-23T03:52:53.910Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-23T03:52:53.910Z] 
Data Files Check:
[2025-12-23T03:52:53.911Z] .github/data/new_jobs.json: ✅ Exists (7 items, 35800 bytes)
[2025-12-23T03:52:53.915Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 535483 bytes)
[2025-12-23T03:52:53.915Z] 
========================================
[2025-12-23T03:52:53.915Z] Starting Enhanced Discord Bot...
[2025-12-23T03:52:53.915Z] ========================================
[2025-12-23T03:52:54.433Z] [BOT] ✅ Loaded V2 database: 914 jobs
[2025-12-23T03:52:55.151Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-23T03:52:55.152Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-23T03:52:55.152Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-23T03:52:55.152Z] [BOT] 📦 Exporting 7 jobs to encrypted JSON...
[2025-12-23T03:52:55.273Z] [BOT] ✅ Export complete: Added 0, Skipped 7, Total 165
[2025-12-23T03:52:55.275Z] [BOT] 📬 Found 7 new jobs (0 already posted)...
[2025-12-23T03:52:55.275Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-23T03:52:55.276Z] [BOT] 📋 After blacklist filter: 6 jobs (1 blacklisted)
[2025-12-23T03:52:55.276Z] [BOT] 📋 After data quality filter: 6 jobs (0 invalid)
[2025-12-23T03:52:55.276Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2025-12-23T03:52:55.277Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-23T03:52:55.278Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-23T03:52:55.279Z] [BOT] 📍 [ROUTING] "USA – Staff - Data Scientist" @ ORG_3eab285c
[2025-12-23T03:52:55.280Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-23T03:52:55.284Z] [BOT ERROR] (node:2894) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-23T03:52:55.478Z] [BOT] ✅ Created forum post: 🏢 USA – Staff - Data Scientist @ ORG_3eab285c in #🤖・ai-jobs
[2025-12-23T03:52:55.478Z] [BOT] ✅ Industry: USA – Staff - Data Scientist @ ORG_3eab285c
[2025-12-23T03:52:57.173Z] [BOT] ✅ Created forum post: 🏢 USA – Staff - Data Scientist @ ORG_3eab285c in #💻・remote-usa
[2025-12-23T03:52:57.173Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-23T03:52:58.674Z] [BOT] 💾 Marked as posted: USA – Staff - Data Scientist @ ORG_3eab285c (instance #1)
[2025-12-23T03:52:58.674Z] [BOT] 💾 BEFORE ARCHIVING: 915 jobs in database
[2025-12-23T03:52:58.675Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-23T03:52:58.680Z] [BOT] 📦 Archived 50 jobs to 2025-12.json (50 total in archive)
✅ Archiving complete: 50 archived, 865 active
[2025-12-23T03:52:58.686Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
[2025-12-23T03:52:58.686Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T03:52:58.687Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Experimental AI" @ ORG_a867f63f National Laboratory
[2025-12-23T03:52:58.687Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-23T03:52:58.943Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Experimental AI @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
[2025-12-23T03:52:58.943Z] [BOT] ✅ Industry: Postdoctoral Appointee - Experimental AI @ ORG_a867f63f National Laboratory
[2025-12-23T03:53:00.634Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Experimental AI @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-23T03:53:02.135Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Experimental AI @ ORG_a867f63f National Laboratory (instance #1)
💾 BEFORE ARCHIVING: 866 jobs in database
[2025-12-23T03:53:02.136Z] [BOT] ✅ No jobs to archive (all 866 jobs within 7-day window)
[2025-12-23T03:53:02.142Z] [BOT] 💾 Saved posted_jobs.json: 866 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T03:53:05.143Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2025-12-23T03:53:05.145Z] [BOT] 📍 [ROUTING] "Manufacturing Data Analyst" @ ORG_2fb6cbf5 Industries
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-23T03:53:05.145Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-23T03:53:05.424Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Data Analyst @ ORG_2fb6cbf5 Industries in #📈・JID_fb739488
  ✅ Industry: Manufacturing Data Analyst @ ORG_2fb6cbf5 Industries
[2025-12-23T03:53:06.925Z] [BOT] 💾 Marked as posted: Manufacturing Data Analyst @ ORG_2fb6cbf5 Industries (instance #1)
[2025-12-23T03:53:06.926Z] [BOT] 💾 BEFORE ARCHIVING: 867 jobs in database
[2025-12-23T03:53:06.926Z] [BOT] ✅ No jobs to archive (all 867 jobs within 7-day window)
[2025-12-23T03:53:06.934Z] [BOT] 💾 Saved posted_jobs.json: 867 active jobs
[2025-12-23T03:53:06.934Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T03:53:06.935Z] [BOT] 📍 [ROUTING] "Test & Evaluation Engineer - Multiple Teams" @ ORG_b344d80e Boeing Company
[2025-12-23T03:53:06.935Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-23T03:53:07.214Z] [BOT] ✅ Created forum post: 🏢 Test & Evaluation Engineer - Multiple Teams @ ORG_b344d80e Boeing Company in #📈・JID_fb739488
[2025-12-23T03:53:07.214Z] [BOT] ✅ Industry: Test & Evaluation Engineer - Multiple Teams @ ORG_b344d80e Boeing Company
[2025-12-23T03:53:09.099Z] [BOT] ✅ Created forum post: 🏢 Test & Evaluation Engineer - Multiple Teams @ ORG_b344d80e Boeing Company in #🌉・san-francisco
[2025-12-23T03:53:09.099Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-23T03:53:10.600Z] [BOT] 💾 Marked as posted: Test & Evaluation Engineer - Multiple Teams @ ORG_b344d80e Boeing Company (instance #1)
[2025-12-23T03:53:10.600Z] [BOT] 💾 BEFORE ARCHIVING: 868 jobs in database
[2025-12-23T03:53:10.601Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2025-12-23T03:53:10.609Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
[2025-12-23T03:53:10.609Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T03:53:10.610Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_9d38443e of Chicago
[2025-12-23T03:53:10.610Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-23T03:53:10.958Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_9d38443e of Chicago in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_9d38443e of Chicago
[2025-12-23T03:53:12.667Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-23T03:53:14.169Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_9d38443e of Chicago (instance #1)
[2025-12-23T03:53:14.169Z] [BOT] 💾 BEFORE ARCHIVING: 869 jobs in database
[2025-12-23T03:53:14.170Z] [BOT] ✅ No jobs to archive (all 869 jobs within 7-day window)
[2025-12-23T03:53:14.176Z] [BOT] 💾 Saved posted_jobs.json: 869 active jobs
[2025-12-23T03:53:14.176Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T03:53:17.176Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-23T03:53:17.177Z] [BOT] 📍 [ROUTING] "2026 Undergraduate - LEAP: Software Engineer" @ ORG_66279f04 Investments
   Category: TECH (matched: "software")
[2025-12-23T03:53:17.177Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-23T03:53:17.513Z] [BOT] ✅ Created forum post: 🏢 2026 Undergraduate - LEAP: Software Engineer @ ORG_66279f04 Investments in #💻・tech-jobs
  ✅ Industry: 2026 Undergraduate - LEAP: Software Engineer @ ORG_66279f04 Investments
[2025-12-23T03:53:19.236Z] [BOT] ✅ Created forum post: 🏢 2026 Undergraduate - LEAP: Software Engineer @ ORG_66279f04 Investments in #🤠・austin
[2025-12-23T03:53:19.236Z] [BOT] ✅ Location: 🤠・austin
[2025-12-23T03:53:20.737Z] [BOT] 💾 Marked as posted: 2026 Undergraduate - LEAP: Software Engineer @ ORG_66279f04 Investments (instance #1)
[2025-12-23T03:53:20.737Z] [BOT] 💾 BEFORE ARCHIVING: 870 jobs in database
[2025-12-23T03:53:20.738Z] [BOT] ✅ No jobs to archive (all 870 jobs within 7-day window)
[2025-12-23T03:53:20.745Z] [BOT] 💾 Saved posted_jobs.json: 870 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T03:53:23.746Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2025-12-23T03:53:23.746Z] [BOT] ⏭️  Skipping duplicate: JID_bafe7868-scientist_r-2331754 (posted within 7 days)
[2025-12-23T03:53:23.746Z] [BOT] ⏭️  Skipping duplicate: JID_aa367e41-ppg_careers-JID_e53563da-analyst_jr2518708 (posted within 7 days)
[2025-12-23T03:53:23.746Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_04391be1-_jr2025467413-1 (posted within 7 days)
[2025-12-23T03:53:23.747Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_89ac2162-ai_421579 (posted within 7 days)
[2025-12-23T03:53:23.747Z] [BOT] ⏭️  Skipping duplicate: JID_e938e280-analyst_jr32225 (posted within 7 days)
[2025-12-23T03:53:23.747Z] [BOT] ⏭️  Skipping duplicate: JID_8233d323-engineer_2116586-1 (posted within 7 days)
[2025-12-23T03:53:23.747Z] [BOT] ✅ Loaded pending queue: 7 total (0 pending, 7 enriched, 0 posted)
[2025-12-23T03:53:23.748Z] [BOT] ✅ Saved pending queue: 7 total (0 pending, 1 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2025-12-23T03:53:23.748Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-23T03:53:23.791Z] [BOT] 📂 Loaded 1028 existing routing entries
[2025-12-23T03:53:23.841Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 1034
   Timestamp: 2025-12-23T03:53:23.831Z
📝 Discord posting log saved: .github/logs/JID_805c58df.jsonl
   Total attempts: 12
   Successful: 11
   Failed: 0
   Skipped: 1
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 7
   Top channels:
     1. #📈・JID_fb739488: 3 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🌆・chicago: 2 posts
     4. #💻・remote-usa: 1 posts
     5. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2025-12-23T03:53:25.850Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2894) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*