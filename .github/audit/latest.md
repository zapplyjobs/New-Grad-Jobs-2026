# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T07:14:44.828Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T07:13:53.308Z] ========================================
[2026-01-14T07:13:53.310Z] Discord Bot Execution Log
[2026-01-14T07:13:53.310Z] Environment: GitHub Actions
[2026-01-14T07:13:53.310Z] Node Version: v20.19.6
[2026-01-14T07:13:53.310Z] ========================================
[2026-01-14T07:13:53.310Z] Environment Variables Check:
[2026-01-14T07:13:53.310Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T07:13:53.310Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T07:13:53.310Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T07:13:53.310Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T07:13:53.311Z] 
Multi-Channel Configuration:
[2026-01-14T07:13:53.311Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T07:13:53.311Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T07:13:53.311Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T07:13:53.311Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T07:13:53.311Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T07:13:53.311Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T07:13:53.311Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T07:13:53.311Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T07:13:53.311Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T07:13:53.311Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T07:13:53.311Z] 
Data Files Check:
[2026-01-14T07:13:53.312Z] .github/data/new_jobs.json: ✅ Exists (10 items, 115449 bytes)
[2026-01-14T07:13:53.317Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 680263 bytes)
[2026-01-14T07:13:53.317Z] 
========================================
[2026-01-14T07:13:53.317Z] Starting Enhanced Discord Bot...
[2026-01-14T07:13:53.317Z] ========================================
[2026-01-14T07:13:53.836Z] [BOT] ✅ Loaded V2 database: 1285 jobs
[2026-01-14T07:13:54.557Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T07:13:54.558Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T07:13:54.558Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T07:13:54.673Z] [BOT] ✅ Loaded pending queue: 2729 total (2709 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer - Perception Infrastructure at pony.ai
[2026-01-14T07:13:54.675Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T07:13:54.675Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T07:13:54.676Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T07:13:54.676Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T07:13:54.677Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T07:13:54.680Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-14T07:13:54.681Z] [BOT] 📍 [ROUTING] "Software Engineer - Perception Infrastructure" @ pony.ai
   Category: TECH (matched: "software")
[2026-01-14T07:13:54.681Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:13:54.699Z] [BOT ERROR] (node:3272) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T07:13:54.858Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Perception Infrastructure @ pony.ai in #💻・tech-jobs
[2026-01-14T07:13:54.859Z] [BOT] ✅ Industry: Software Engineer - Perception Infrastructure @ pony.ai
[2026-01-14T07:13:56.553Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Perception Infrastructure @ pony.ai in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T07:13:58.054Z] [BOT] 💾 Marked as posted: Software Engineer - Perception Infrastructure @ pony.ai (instance #1)
[2026-01-14T07:13:58.054Z] [BOT] 💾 BEFORE ARCHIVING: 1286 jobs in database
[2026-01-14T07:13:58.055Z] [BOT] ✅ No jobs to archive (all 1286 jobs within 7-day window)
[2026-01-14T07:13:58.067Z] [BOT] 💾 Saved posted_jobs.json: 1286 active jobs
[2026-01-14T07:13:58.068Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:13:58.068Z] [BOT] 📍 [ROUTING] "Software Engineer / Principal Software Engineer - Aht" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:13:58.324Z] [BOT] ✅ Created forum post: 🏢 Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-14T07:13:58.324Z] [BOT] ✅ Industry: Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman
[2026-01-14T07:14:00.008Z] [BOT] ✅ Created forum post: 🏢 Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #🌧️・seattle
[2026-01-14T07:14:00.008Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-14T07:14:01.508Z] [BOT] 💾 Marked as posted: Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman (instance #1)
[2026-01-14T07:14:01.508Z] [BOT] 💾 BEFORE ARCHIVING: 1287 jobs in database
[2026-01-14T07:14:01.510Z] [BOT] ✅ No jobs to archive (all 1287 jobs within 7-day window)
[2026-01-14T07:14:01.517Z] [BOT] 💾 Saved posted_jobs.json: 1287 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:14:01.518Z] [BOT] 📍 [ROUTING] "Appian Application Developer" @ ORG_36b7cbc3
   Category: TECH (matched: "software")
[2026-01-14T07:14:01.518Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:14:02.020Z] [BOT] ✅ Created forum post: 🏢 Appian Application Developer @ ORG_36b7cbc3 in #💻・tech-jobs
  ✅ Industry: Appian Application Developer @ ORG_36b7cbc3
[2026-01-14T07:14:03.725Z] [BOT] ✅ Created forum post: 🏢 Appian Application Developer @ ORG_36b7cbc3 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T07:14:05.227Z] [BOT] 💾 Marked as posted: Appian Application Developer @ ORG_36b7cbc3 (instance #1)
[2026-01-14T07:14:05.227Z] [BOT] 💾 BEFORE ARCHIVING: 1288 jobs in database
[2026-01-14T07:14:05.228Z] [BOT] ✅ No jobs to archive (all 1288 jobs within 7-day window)
[2026-01-14T07:14:05.238Z] [BOT] 💾 Saved posted_jobs.json: 1288 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:14:08.239Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-14T07:14:08.241Z] [BOT] 📍 [ROUTING] "2026 – Americas - New York City Area - Engineering" @ ORG_d49bddaa Sachs
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T07:14:08.242Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T07:14:08.503Z] [BOT] ✅ Created forum post: 🏢 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs in #🤖・ai-jobs
  ✅ Industry: 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs
[2026-01-14T07:14:10.193Z] [BOT] ✅ Created forum post: 🏢 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T07:14:11.693Z] [BOT] 💾 Marked as posted: 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs (instance #1)
[2026-01-14T07:14:11.693Z] [BOT] 💾 BEFORE ARCHIVING: 1289 jobs in database
[2026-01-14T07:14:11.694Z] [BOT] ✅ No jobs to archive (all 1289 jobs within 7-day window)
[2026-01-14T07:14:11.706Z] [BOT] 💾 Saved posted_jobs.json: 1289 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:14:11.708Z] [BOT] 📍 [ROUTING] "Research Scientist" @ ORG_72fd3ae0
[2026-01-14T07:14:11.708Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T07:14:11.949Z] [BOT] ✅ Created forum post: 🎨 Research Scientist @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: Research Scientist @ ORG_72fd3ae0
[2026-01-14T07:14:13.681Z] [BOT] ✅ Created forum post: 🎨 Research Scientist @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T07:14:15.181Z] [BOT] 💾 Marked as posted: Research Scientist @ ORG_72fd3ae0 (instance #1)
[2026-01-14T07:14:15.182Z] [BOT] 💾 BEFORE ARCHIVING: 1290 jobs in database
[2026-01-14T07:14:15.183Z] [BOT] ✅ No jobs to archive (all 1290 jobs within 7-day window)
[2026-01-14T07:14:15.193Z] [BOT] 💾 Saved posted_jobs.json: 1290 active jobs
[2026-01-14T07:14:15.193Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:14:15.194Z] [BOT] 📍 [ROUTING] "Finance Systems Integration Engineer" @ anthropic
[2026-01-14T07:14:15.194Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T07:14:15.392Z] [BOT] ✅ Created forum post: 🏢 Finance Systems Integration Engineer @ anthropic in #🤖・ai-jobs
  ✅ Industry: Finance Systems Integration Engineer @ anthropic
[2026-01-14T07:14:17.186Z] [BOT] ✅ Created forum post: 🏢 Finance Systems Integration Engineer @ anthropic in #🌉・san-francisco
[2026-01-14T07:14:17.187Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T07:14:18.688Z] [BOT] 💾 Marked as posted: Finance Systems Integration Engineer @ anthropic (instance #1)
[2026-01-14T07:14:18.688Z] [BOT] 💾 BEFORE ARCHIVING: 1291 jobs in database
[2026-01-14T07:14:18.689Z] [BOT] ✅ No jobs to archive (all 1291 jobs within 7-day window)
[2026-01-14T07:14:18.699Z] [BOT] 💾 Saved posted_jobs.json: 1291 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:14:18.699Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Spanish Speaking" @ figma
[2026-01-14T07:14:18.699Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T07:14:18.889Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Spanish Speaking @ figma in #🤖・ai-jobs
[2026-01-14T07:14:18.890Z] [BOT] ✅ Industry: Enterprise Support Specialist, Spanish Speaking @ figma
[2026-01-14T07:14:20.647Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Spanish Speaking @ figma in #🌉・san-francisco
[2026-01-14T07:14:20.647Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T07:14:22.148Z] [BOT] 💾 Marked as posted: Enterprise Support Specialist, Spanish Speaking @ figma (instance #1)
[2026-01-14T07:14:22.149Z] [BOT] 💾 BEFORE ARCHIVING: 1292 jobs in database
[2026-01-14T07:14:22.150Z] [BOT] ✅ No jobs to archive (all 1292 jobs within 7-day window)
[2026-01-14T07:14:22.158Z] [BOT] 💾 Saved posted_jobs.json: 1292 active jobs
[2026-01-14T07:14:22.158Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:14:25.160Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-14T07:14:25.160Z] [BOT] 📍 [ROUTING] "Marketing Strategy Manager" @ figma
[2026-01-14T07:14:25.160Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-14T07:14:25.386Z] [BOT] ✅ Created forum post: 🏢 Marketing Strategy Manager @ figma in #📈・JID_fb739488
  ✅ Industry: Marketing Strategy Manager @ figma
[2026-01-14T07:14:27.071Z] [BOT] ✅ Created forum post: 🏢 Marketing Strategy Manager @ figma in #🌉・san-francisco
[2026-01-14T07:14:27.071Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T07:14:28.572Z] [BOT] 💾 Marked as posted: Marketing Strategy Manager @ figma (instance #1)
[2026-01-14T07:14:28.572Z] [BOT] 💾 BEFORE ARCHIVING: 1293 jobs in database
[2026-01-14T07:14:28.573Z] [BOT] ✅ No jobs to archive (all 1293 jobs within 7-day window)
[2026-01-14T07:14:28.583Z] [BOT] 💾 Saved posted_jobs.json: 1293 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:14:28.583Z] [BOT] 📍 [ROUTING] "Product Manager, Core Product" @ discord
[2026-01-14T07:14:28.583Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-14T07:14:28.805Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Core Product @ discord in #📈・JID_fb739488
  ✅ Industry: Product Manager, Core Product @ discord
[2026-01-14T07:14:30.517Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Core Product @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T07:14:32.019Z] [BOT] 💾 Marked as posted: Product Manager, Core Product @ discord (instance #1)
[2026-01-14T07:14:32.019Z] [BOT] 💾 BEFORE ARCHIVING: 1294 jobs in database
[2026-01-14T07:14:32.020Z] [BOT] ✅ No jobs to archive (all 1294 jobs within 7-day window)
[2026-01-14T07:14:32.030Z] [BOT] 💾 Saved posted_jobs.json: 1294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:14:35.032Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-14T07:14:35.032Z] [BOT] 📍 [ROUTING] "Global Indirect - Sales Tax & VAT" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-14T07:14:35.032Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T07:14:35.268Z] [BOT] ✅ Created forum post: 🏢 Global Indirect - Sales Tax & VAT @ anthropic in #💲・sales-jobs
  ✅ Industry: Global Indirect - Sales Tax & VAT @ anthropic
[2026-01-14T07:14:36.979Z] [BOT] ✅ Created forum post: 🏢 Global Indirect - Sales Tax & VAT @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T07:14:38.480Z] [BOT] 💾 Marked as posted: Global Indirect - Sales Tax & VAT @ anthropic (instance #1)
[2026-01-14T07:14:38.480Z] [BOT] 💾 BEFORE ARCHIVING: 1295 jobs in database
[2026-01-14T07:14:38.481Z] [BOT] ✅ No jobs to archive (all 1295 jobs within 7-day window)
[2026-01-14T07:14:38.491Z] [BOT] 💾 Saved posted_jobs.json: 1295 active jobs
[2026-01-14T07:14:38.491Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:14:41.492Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T07:14:41.493Z] [BOT] ⏭️  Skipping duplicate: JID_53e0b423 (posted within 7 days)
[2026-01-14T07:14:41.493Z] [BOT] ⏭️  Skipping duplicate: JID_f426c972 (posted within 7 days)
[2026-01-14T07:14:41.493Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_ca9e8846-scientist_r163076 (posted within 7 days)
[2026-01-14T07:14:41.493Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_c4eaea7c-_r10216147 (posted within 7 days)
[2026-01-14T07:14:41.493Z] [BOT] ⏭️  Skipping duplicate: JID_5686fd03 (posted within 7 days)
[2026-01-14T07:14:41.493Z] [BOT] ⏭️  Skipping duplicate: JID_8f92590b-developer_r20060158 (posted within 7 days)
[2026-01-14T07:14:41.493Z] [BOT] ⏭️  Skipping duplicate: JID_ee6462dd (posted within 7 days)
[2026-01-14T07:14:41.494Z] [BOT] ⏭️  Skipping duplicate: JID_e951055e (posted within 7 days)
[2026-01-14T07:14:41.494Z] [BOT] ⏭️  Skipping duplicate: JID_3a16f5b7 (posted within 7 days)
⏭️  Skipping duplicate: JID_e6ef062c (posted within 7 days)
[2026-01-14T07:14:41.610Z] [BOT] ✅ Loaded pending queue: 2729 total (2709 pending, 20 enriched, 0 posted)
[2026-01-14T07:14:41.789Z] [BOT] ✅ Saved pending queue: 2729 total (2709 pending, 10 enriched, 10 posted)
[2026-01-14T07:14:41.790Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T07:14:41.842Z] [BOT] 📂 Loaded 3405 existing routing entries
[2026-01-14T07:14:41.902Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-14T07:14:41.902Z] [BOT] Total entries: 3415
   Timestamp: 2026-01-14T07:14:41.888Z
[2026-01-14T07:14:41.902Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T07:14:41.903Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T07:14:41.903Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 7 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💻・tech-jobs: 3 posts
     4. #🗽・new-york: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2026-01-14T07:14:41.903Z] [BOT] [STATS] Channel stats saved
[2026-01-14T07:14:43.929Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3272) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*