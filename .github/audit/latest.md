# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T23:26:56.705Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T23:25:56.647Z] ========================================
[2026-01-13T23:25:56.650Z] Discord Bot Execution Log
[2026-01-13T23:25:56.650Z] Environment: GitHub Actions
[2026-01-13T23:25:56.650Z] Node Version: v20.19.6
[2026-01-13T23:25:56.650Z] ========================================
[2026-01-13T23:25:56.650Z] Environment Variables Check:
[2026-01-13T23:25:56.650Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T23:25:56.650Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T23:25:56.650Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T23:25:56.650Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T23:25:56.651Z] 
Multi-Channel Configuration:
[2026-01-13T23:25:56.651Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T23:25:56.651Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T23:25:56.651Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T23:25:56.651Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T23:25:56.651Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T23:25:56.651Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T23:25:56.651Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T23:25:56.651Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T23:25:56.651Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T23:25:56.651Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T23:25:56.651Z] 
Data Files Check:
[2026-01-13T23:25:56.652Z] .github/data/new_jobs.json: ✅ Exists (10 items, 72505 bytes)
[2026-01-13T23:25:56.657Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 570712 bytes)
[2026-01-13T23:25:56.657Z] 
========================================
[2026-01-13T23:25:56.657Z] Starting Enhanced Discord Bot...
[2026-01-13T23:25:56.657Z] ========================================
[2026-01-13T23:25:57.172Z] [BOT] ✅ Loaded V2 database: 1069 jobs
[2026-01-13T23:25:58.014Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T23:25:58.014Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T23:25:58.014Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T23:25:58.118Z] [BOT] ✅ Loaded pending queue: 2710 total (2690 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate Software Quality Engineer I at AspenTech
[2026-01-13T23:25:58.120Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T23:25:58.121Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T23:25:58.121Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T23:25:58.122Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T23:25:58.122Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T23:25:58.126Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-13T23:25:58.126Z] [BOT] 📍 [ROUTING] "Associate Software Quality Engineer I" @ ORG_df6ef51e
[2026-01-13T23:25:58.126Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T23:25:58.144Z] [BOT ERROR] (node:2471) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T23:25:58.540Z] [BOT] ✅ Created forum post: 🏢 Associate Software Quality Engineer I @ ORG_df6ef51e in #💻・tech-jobs
[2026-01-13T23:25:58.540Z] [BOT] ✅ Industry: Associate Software Quality Engineer I @ ORG_df6ef51e
[2026-01-13T23:26:00.270Z] [BOT] ✅ Created forum post: 🏢 Associate Software Quality Engineer I @ ORG_df6ef51e in #💻・remote-usa
[2026-01-13T23:26:00.270Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T23:26:01.770Z] [BOT] 💾 Marked as posted: Associate Software Quality Engineer I @ ORG_df6ef51e (instance #1)
[2026-01-13T23:26:01.771Z] [BOT] 💾 BEFORE ARCHIVING: 1070 jobs in database
[2026-01-13T23:26:01.771Z] [BOT] ✅ No jobs to archive (all 1070 jobs within 7-day window)
[2026-01-13T23:26:01.783Z] [BOT] 💾 Saved posted_jobs.json: 1070 active jobs
[2026-01-13T23:26:01.783Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:26:01.783Z] [BOT] 📍 [ROUTING] "Associate Cloud Engineer" @ ORG_591935b1 Storage
   Category: TECH (matched: "DevOps/SRE")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T23:26:01.996Z] [BOT] ✅ Created forum post: 🏢 Associate Cloud Engineer @ ORG_591935b1 Storage in #💻・tech-jobs
[2026-01-13T23:26:01.996Z] [BOT] ✅ Industry: Associate Cloud Engineer @ ORG_591935b1 Storage
[2026-01-13T23:26:03.798Z] [BOT] ✅ Created forum post: 🏢 Associate Cloud Engineer @ ORG_591935b1 Storage in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T23:26:05.297Z] [BOT] 💾 Marked as posted: Associate Cloud Engineer @ ORG_591935b1 Storage (instance #1)
[2026-01-13T23:26:05.297Z] [BOT] 💾 BEFORE ARCHIVING: 1071 jobs in database
[2026-01-13T23:26:05.298Z] [BOT] ✅ No jobs to archive (all 1071 jobs within 7-day window)
[2026-01-13T23:26:05.305Z] [BOT] 💾 Saved posted_jobs.json: 1071 active jobs
[2026-01-13T23:26:05.305Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:26:05.305Z] [BOT] 📍 [ROUTING] "Probabilistic Risk Assessment Engineer 1" @ ORG_41a6741einghouse Electric Company
[2026-01-13T23:26:05.306Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T23:26:06.403Z] [BOT] ✅ Created forum post: 🏢 Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
  ✅ Industry: Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company
[2026-01-13T23:26:08.320Z] [BOT] ✅ Created forum post: 🏢 Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company in #🤠・austin
[2026-01-13T23:26:08.320Z] [BOT] ✅ Location: 🤠・austin
[2026-01-13T23:26:09.821Z] [BOT] 💾 Marked as posted: Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company (instance #1)
[2026-01-13T23:26:09.822Z] [BOT] 💾 BEFORE ARCHIVING: 1072 jobs in database
[2026-01-13T23:26:09.823Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-13T23:26:09.831Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-13T23:26:09.831Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:26:09.832Z] [BOT] 📍 [ROUTING] "Energy Storage Application Engineer" @ ORG_74da6415
[2026-01-13T23:26:09.832Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T23:26:10.232Z] [BOT] ✅ Created forum post: 🏢 Energy Storage Application Engineer @ ORG_74da6415 in #💻・tech-jobs
  ✅ Industry: Energy Storage Application Engineer @ ORG_74da6415
[2026-01-13T23:26:11.963Z] [BOT] ✅ Created forum post: 🏢 Energy Storage Application Engineer @ ORG_74da6415 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T23:26:13.463Z] [BOT] 💾 Marked as posted: Energy Storage Application Engineer @ ORG_74da6415 (instance #1)
[2026-01-13T23:26:13.464Z] [BOT] 💾 BEFORE ARCHIVING: 1073 jobs in database
[2026-01-13T23:26:13.465Z] [BOT] ✅ No jobs to archive (all 1073 jobs within 7-day window)
[2026-01-13T23:26:13.473Z] [BOT] 💾 Saved posted_jobs.json: 1073 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:26:16.474Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-13T23:26:16.475Z] [BOT] 📍 [ROUTING] "Product Marketing Manager, Ads " @ discord
   Category: MARKETING (matched: "marketing")
[2026-01-13T23:26:16.475Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T23:26:16.745Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Ads  @ discord in #📣・marketing-jobs
  ✅ Industry: Product Marketing Manager, Ads  @ discord
[2026-01-13T23:26:18.556Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Ads  @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T23:26:20.058Z] [BOT] 💾 Marked as posted: Product Marketing Manager, Ads  @ discord (instance #1)
[2026-01-13T23:26:20.058Z] [BOT] 💾 BEFORE ARCHIVING: 1074 jobs in database
[2026-01-13T23:26:20.059Z] [BOT] ✅ No jobs to archive (all 1074 jobs within 7-day window)
[2026-01-13T23:26:20.068Z] [BOT] 💾 Saved posted_jobs.json: 1074 active jobs
[2026-01-13T23:26:20.068Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:26:23.069Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-13T23:26:23.069Z] [BOT] 📍 [ROUTING] "Sales Engineer" @ vercel
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T23:26:23.366Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer @ vercel in #💲・sales-jobs
  ✅ Industry: Sales Engineer @ vercel
[2026-01-13T23:26:25.126Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T23:26:26.627Z] [BOT] 💾 Marked as posted: Sales Engineer @ vercel (instance #1)
[2026-01-13T23:26:26.627Z] [BOT] 💾 BEFORE ARCHIVING: 1075 jobs in database
[2026-01-13T23:26:26.628Z] [BOT] ✅ No jobs to archive (all 1075 jobs within 7-day window)
[2026-01-13T23:26:26.637Z] [BOT] 💾 Saved posted_jobs.json: 1075 active jobs
[2026-01-13T23:26:26.637Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:26:26.637Z] [BOT] 📍 [ROUTING] "Manager, Product Marketing " @ figma
[2026-01-13T23:26:26.637Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T23:26:26.981Z] [BOT] ✅ Created forum post: 🏢 Manager, Product Marketing  @ figma in #💲・sales-jobs
  ✅ Industry: Manager, Product Marketing  @ figma
[2026-01-13T23:26:28.773Z] [BOT] ✅ Created forum post: 🏢 Manager, Product Marketing  @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T23:26:30.274Z] [BOT] 💾 Marked as posted: Manager, Product Marketing  @ figma (instance #1)
[2026-01-13T23:26:30.274Z] [BOT] 💾 BEFORE ARCHIVING: 1076 jobs in database
[2026-01-13T23:26:30.274Z] [BOT] ✅ No jobs to archive (all 1076 jobs within 7-day window)
[2026-01-13T23:26:30.283Z] [BOT] 💾 Saved posted_jobs.json: 1076 active jobs
[2026-01-13T23:26:30.283Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:26:33.284Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T23:26:33.284Z] [BOT] 📍 [ROUTING] "Biostatistician/AI Data Scientist 1" @ ORG_a96b217e
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T23:26:33.614Z] [BOT] ✅ Created forum post: 🏢 Biostatistician/AI Data Scientist 1 @ ORG_a96b217e in #📈・JID_fb739488
[2026-01-13T23:26:33.614Z] [BOT] ✅ Industry: Biostatistician/AI Data Scientist 1 @ ORG_a96b217e
[2026-01-13T23:26:35.367Z] [BOT] ✅ Created forum post: 🏢 Biostatistician/AI Data Scientist 1 @ ORG_a96b217e in #💻・remote-usa
[2026-01-13T23:26:35.367Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T23:26:36.868Z] [BOT] 💾 Marked as posted: Biostatistician/AI Data Scientist 1 @ ORG_a96b217e (instance #1)
[2026-01-13T23:26:36.868Z] [BOT] 💾 BEFORE ARCHIVING: 1077 jobs in database
[2026-01-13T23:26:36.869Z] [BOT] ✅ No jobs to archive (all 1077 jobs within 7-day window)
[2026-01-13T23:26:36.877Z] [BOT] 💾 Saved posted_jobs.json: 1077 active jobs
[2026-01-13T23:26:36.877Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:26:39.877Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-13T23:26:39.877Z] [BOT] 📍 [ROUTING] "Software Developer - 2026 Leadership Development Program - Houston" @ ORG_49d0893a Group
[2026-01-13T23:26:39.877Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T23:26:40.093Z] [BOT] ✅ Created forum post: 🏢 Software Developer - 2026 Leadership Development Program - Houston @ ORG_49d0893a Group in #🤖・ai-jobs
[2026-01-13T23:26:40.093Z] [BOT] ✅ Industry: Software Developer - 2026 Leadership Development Program - Houston @ ORG_49d0893a Group
[2026-01-13T23:26:41.947Z] [BOT] ✅ Created forum post: 🏢 Software Developer - 2026 Leadership Development Program - Houston @ ORG_49d0893a Group in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T23:26:43.448Z] [BOT] 💾 Marked as posted: Software Developer - 2026 Leadership Development Program - Houston @ ORG_49d0893a Group (instance #1)
[2026-01-13T23:26:43.448Z] [BOT] 💾 BEFORE ARCHIVING: 1078 jobs in database
[2026-01-13T23:26:43.449Z] [BOT] ✅ No jobs to archive (all 1078 jobs within 7-day window)
[2026-01-13T23:26:43.458Z] [BOT] 💾 Saved posted_jobs.json: 1078 active jobs
[2026-01-13T23:26:43.458Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:26:46.459Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-13T23:26:46.459Z] [BOT] 📍 [ROUTING] "Product Manager, Claude Code Growth" @ anthropic
[2026-01-13T23:26:46.459Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-13T23:26:46.730Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Claude Code Growth @ anthropic in #📦・product-jobs
[2026-01-13T23:26:46.730Z] [BOT] ✅ Industry: Product Manager, Claude Code Growth @ anthropic
[2026-01-13T23:26:48.518Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Claude Code Growth @ anthropic in #🌉・san-francisco
[2026-01-13T23:26:48.518Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T23:26:50.019Z] [BOT] 💾 Marked as posted: Product Manager, Claude Code Growth @ anthropic (instance #1)
[2026-01-13T23:26:50.019Z] [BOT] 💾 BEFORE ARCHIVING: 1079 jobs in database
[2026-01-13T23:26:50.020Z] [BOT] ✅ No jobs to archive (all 1079 jobs within 7-day window)
[2026-01-13T23:26:50.029Z] [BOT] 💾 Saved posted_jobs.json: 1079 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:26:53.030Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T23:26:53.031Z] [BOT] ⏭️  Skipping duplicate: JID_9573866e-i_r8298-1 (posted within 7 days)
[2026-01-13T23:26:53.031Z] [BOT] ⏭️  Skipping duplicate: JID_a4d142a8 (posted within 7 days)
[2026-01-13T23:26:53.031Z] [BOT] ⏭️  Skipping duplicate: JID_c7bdff19 (posted within 7 days)
[2026-01-13T23:26:53.031Z] [BOT] ⏭️  Skipping duplicate: JID_247a9cce (posted within 7 days)
[2026-01-13T23:26:53.031Z] [BOT] ⏭️  Skipping duplicate: JID_b29f0920-i_34595-1 (posted within 7 days)
[2026-01-13T23:26:53.031Z] [BOT] ⏭️  Skipping duplicate: JID_4eca8e55 (posted within 7 days)
[2026-01-13T23:26:53.031Z] [BOT] ⏭️  Skipping duplicate: JID_9056ae39 (posted within 7 days)
⏭️  Skipping duplicate: JID_3d20dc96 (posted within 7 days)
[2026-01-13T23:26:53.032Z] [BOT] ⏭️  Skipping duplicate: JID_292d0ae8 (posted within 7 days)
[2026-01-13T23:26:53.032Z] [BOT] ⏭️  Skipping duplicate: JID_1834e261 (posted within 7 days)
[2026-01-13T23:26:53.147Z] [BOT] ✅ Loaded pending queue: 2710 total (2690 pending, 20 enriched, 0 posted)
[2026-01-13T23:26:53.312Z] [BOT] ✅ Saved pending queue: 2710 total (2690 pending, 10 enriched, 10 posted)
[2026-01-13T23:26:53.312Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T23:26:53.365Z] [BOT] 📂 Loaded 3215 existing routing entries
[2026-01-13T23:26:53.422Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T23:26:53.422Z] [BOT] Total entries: 3225
   Timestamp: 2026-01-13T23:26:53.409Z
[2026-01-13T23:26:53.423Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 20
[2026-01-13T23:26:53.423Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 9
[2026-01-13T23:26:53.423Z] [BOT] Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #🌉・san-francisco: 4 posts
     3. #💻・remote-usa: 3 posts
     4. #🤠・austin: 3 posts
[2026-01-13T23:26:53.423Z] [BOT] 5. #💲・sales-jobs: 2 posts
[2026-01-13T23:26:53.423Z] [BOT] [STATS] Channel stats saved
[2026-01-13T23:26:55.448Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2471) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*