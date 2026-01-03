# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T15:24:51.015Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T15:23:55.024Z] ========================================
[2026-01-03T15:23:55.026Z] Discord Bot Execution Log
[2026-01-03T15:23:55.026Z] Environment: GitHub Actions
[2026-01-03T15:23:55.026Z] Node Version: v20.19.6
[2026-01-03T15:23:55.026Z] ========================================
[2026-01-03T15:23:55.026Z] Environment Variables Check:
[2026-01-03T15:23:55.026Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T15:23:55.026Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T15:23:55.026Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T15:23:55.026Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T15:23:55.027Z] 
Multi-Channel Configuration:
[2026-01-03T15:23:55.027Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T15:23:55.027Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T15:23:55.027Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T15:23:55.027Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T15:23:55.027Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T15:23:55.027Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T15:23:55.027Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T15:23:55.027Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T15:23:55.027Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T15:23:55.027Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T15:23:55.027Z] 
Data Files Check:
[2026-01-03T15:23:55.029Z] .github/data/new_jobs.json: ✅ Exists (10 items, 188385 bytes)
[2026-01-03T15:23:55.031Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 292637 bytes)
[2026-01-03T15:23:55.031Z] 
========================================
[2026-01-03T15:23:55.031Z] Starting Enhanced Discord Bot...
[2026-01-03T15:23:55.031Z] ========================================
[2026-01-03T15:23:55.538Z] [BOT] ✅ Loaded V2 database: 563 jobs
[2026-01-03T15:23:56.223Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T15:23:56.223Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T15:23:56.224Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T15:23:56.225Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T15:23:56.293Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T15:23:56.387Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T15:23:56.389Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T15:23:56.389Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T15:23:56.390Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T15:23:56.390Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-03T15:23:56.390Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Product Designer - DeepSky @ airtable: san francisco, ca;, remote
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T15:23:56.395Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-03T15:23:56.395Z] [BOT] 📍 [ROUTING] "Field Marketing Manager, East" @ airtable
[2026-01-03T15:23:56.395Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T15:23:56.400Z] [BOT ERROR] (node:2343) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T15:23:56.599Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager, East @ airtable in #📣・marketing-jobs
[2026-01-03T15:23:56.599Z] [BOT] ✅ Industry: Field Marketing Manager, East @ airtable
[2026-01-03T15:23:58.329Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager, East @ airtable in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T15:23:59.830Z] [BOT] 💾 Marked as posted: Field Marketing Manager, East @ airtable (instance #1)
[2026-01-03T15:23:59.830Z] [BOT] 💾 BEFORE ARCHIVING: 564 jobs in database
[2026-01-03T15:23:59.831Z] [BOT] ✅ No jobs to archive (all 564 jobs within 7-day window)
[2026-01-03T15:23:59.839Z] [BOT] 💾 Saved posted_jobs.json: 564 active jobs
[2026-01-03T15:23:59.840Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:23:59.841Z] [BOT] 📍 [ROUTING] "Product Designer - DeepSky" @ airtable
[2026-01-03T15:23:59.841Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T15:24:00.366Z] [BOT] ✅ Created forum post: 🏢 Product Designer - DeepSky @ airtable in #📣・marketing-jobs
[2026-01-03T15:24:00.366Z] [BOT] ✅ Industry: Product Designer - DeepSky @ airtable
[2026-01-03T15:24:03.028Z] [BOT] ✅ Created forum post: 🏢 Product Designer - DeepSky @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:24:04.529Z] [BOT] 💾 Marked as posted: Product Designer - DeepSky @ airtable (instance #1)
[2026-01-03T15:24:04.529Z] [BOT] 💾 BEFORE ARCHIVING: 565 jobs in database
[2026-01-03T15:24:04.529Z] [BOT] ✅ No jobs to archive (all 565 jobs within 7-day window)
[2026-01-03T15:24:04.536Z] [BOT] 💾 Saved posted_jobs.json: 565 active jobs
[2026-01-03T15:24:04.537Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:24:04.537Z] [BOT] 💾 Marked as posted: Product Designer - Mobile @ airtable (instance #1)
💾 BEFORE ARCHIVING: 566 jobs in database
[2026-01-03T15:24:04.537Z] [BOT] ✅ No jobs to archive (all 566 jobs within 7-day window)
[2026-01-03T15:24:04.542Z] [BOT] 💾 Saved posted_jobs.json: 566 active jobs
[2026-01-03T15:24:04.543Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:24:07.543Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-03T15:24:07.545Z] [BOT] 📍 [ROUTING] "Field Marketing Specialist, West" @ airtable
   Category: SALES (matched: "sales")
[2026-01-03T15:24:07.545Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T15:24:07.995Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Specialist, West @ airtable in #💲・sales-jobs
  ✅ Industry: Field Marketing Specialist, West @ airtable
[2026-01-03T15:24:09.927Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Specialist, West @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:24:11.428Z] [BOT] 💾 Marked as posted: Field Marketing Specialist, West @ airtable (instance #1)
[2026-01-03T15:24:11.428Z] [BOT] 💾 BEFORE ARCHIVING: 567 jobs in database
[2026-01-03T15:24:11.429Z] [BOT] ✅ No jobs to archive (all 567 jobs within 7-day window)
[2026-01-03T15:24:11.434Z] [BOT] 💾 Saved posted_jobs.json: 567 active jobs
[2026-01-03T15:24:11.434Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:24:11.434Z] [BOT] 📍 [ROUTING] "Lead Solutions Consultant" @ airtable
[2026-01-03T15:24:11.434Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T15:24:13.030Z] [BOT] ✅ Created forum post: 🏢 Lead Solutions Consultant @ airtable in #💲・sales-jobs
  ✅ Industry: Lead Solutions Consultant @ airtable
[2026-01-03T15:24:15.106Z] [BOT] ✅ Created forum post: 🏢 Lead Solutions Consultant @ airtable in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T15:24:16.607Z] [BOT] 💾 Marked as posted: Lead Solutions Consultant @ airtable (instance #1)
[2026-01-03T15:24:16.607Z] [BOT] 💾 BEFORE ARCHIVING: 568 jobs in database
[2026-01-03T15:24:16.608Z] [BOT] ✅ No jobs to archive (all 568 jobs within 7-day window)
[2026-01-03T15:24:16.612Z] [BOT] 💾 Saved posted_jobs.json: 568 active jobs
[2026-01-03T15:24:16.612Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:24:19.613Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T15:24:19.614Z] [BOT] 📍 [ROUTING] "People Analytics Lead" @ airtable
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-03T15:24:19.614Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T15:24:19.833Z] [BOT] ✅ Created forum post: 🏢 People Analytics Lead @ airtable in #📈・JID_fb739488
  ✅ Industry: People Analytics Lead @ airtable
[2026-01-03T15:24:21.622Z] [BOT] ✅ Created forum post: 🏢 People Analytics Lead @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:24:23.124Z] [BOT] 💾 Marked as posted: People Analytics Lead @ airtable (instance #1)
[2026-01-03T15:24:23.125Z] [BOT] 💾 BEFORE ARCHIVING: 569 jobs in database
[2026-01-03T15:24:23.125Z] [BOT] ✅ No jobs to archive (all 569 jobs within 7-day window)
[2026-01-03T15:24:23.130Z] [BOT] 💾 Saved posted_jobs.json: 569 active jobs
[2026-01-03T15:24:23.130Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:24:26.131Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-03T15:24:26.132Z] [BOT] 📍 [ROUTING] " People Systems Engineer, Airtable Specialist" @ airtable
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T15:24:26.132Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T15:24:26.506Z] [BOT] ✅ Created forum post: 🏢  People Systems Engineer, Airtable Specialist @ airtable in #🤖・ai-jobs
  ✅ Industry:  People Systems Engineer, Airtable Specialist @ airtable
[2026-01-03T15:24:28.313Z] [BOT] ✅ Created forum post: 🏢  People Systems Engineer, Airtable Specialist @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:24:29.814Z] [BOT] 💾 Marked as posted:  People Systems Engineer, Airtable Specialist @ airtable (instance #1)
[2026-01-03T15:24:29.815Z] [BOT] 💾 BEFORE ARCHIVING: 570 jobs in database
[2026-01-03T15:24:29.815Z] [BOT] ✅ No jobs to archive (all 570 jobs within 7-day window)
[2026-01-03T15:24:29.821Z] [BOT] 💾 Saved posted_jobs.json: 570 active jobs
[2026-01-03T15:24:29.821Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:24:29.821Z] [BOT] 📍 [ROUTING] "Product Manager, AI" @ airtable
[2026-01-03T15:24:29.821Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch, nonTechMatch (using ai)
[2026-01-03T15:24:30.398Z] [BOT] ✅ Created forum post: 🏢 Product Manager, AI @ airtable in #🤖・ai-jobs
  ✅ Industry: Product Manager, AI @ airtable
[2026-01-03T15:24:32.188Z] [BOT] ✅ Created forum post: 🏢 Product Manager, AI @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:24:33.690Z] [BOT] 💾 Marked as posted: Product Manager, AI @ airtable (instance #1)
[2026-01-03T15:24:33.690Z] [BOT] 💾 BEFORE ARCHIVING: 571 jobs in database
[2026-01-03T15:24:33.691Z] [BOT] ✅ No jobs to archive (all 571 jobs within 7-day window)
[2026-01-03T15:24:33.695Z] [BOT] 💾 Saved posted_jobs.json: 571 active jobs
[2026-01-03T15:24:33.696Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:24:33.696Z] [BOT] 📍 [ROUTING] "Product Manager, Omni Analysis & Q&A" @ airtable
[2026-01-03T15:24:33.696Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-03T15:24:33.943Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Omni Analysis & Q&A @ airtable in #🤖・ai-jobs
  ✅ Industry: Product Manager, Omni Analysis & Q&A @ airtable
[2026-01-03T15:24:35.803Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Omni Analysis & Q&A @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:24:37.305Z] [BOT] 💾 Marked as posted: Product Manager, Omni Analysis & Q&A @ airtable (instance #1)
[2026-01-03T15:24:37.305Z] [BOT] 💾 BEFORE ARCHIVING: 572 jobs in database
[2026-01-03T15:24:37.305Z] [BOT] ✅ No jobs to archive (all 572 jobs within 7-day window)
[2026-01-03T15:24:37.310Z] [BOT] 💾 Saved posted_jobs.json: 572 active jobs
[2026-01-03T15:24:37.310Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:24:40.312Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T15:24:40.312Z] [BOT] 📍 [ROUTING] "Product Manager, AI & Automation" @ airtable
[2026-01-03T15:24:40.312Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-03T15:24:41.290Z] [BOT] ✅ Created forum post: 🏢 Product Manager, AI & Automation @ airtable in #💻・tech-jobs
  ✅ Industry: Product Manager, AI & Automation @ airtable
[2026-01-03T15:24:43.016Z] [BOT] ✅ Created forum post: 🏢 Product Manager, AI & Automation @ airtable in #🌉・san-francisco
[2026-01-03T15:24:43.016Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T15:24:44.517Z] [BOT] 💾 Marked as posted: Product Manager, AI & Automation @ airtable (instance #1)
[2026-01-03T15:24:44.517Z] [BOT] 💾 BEFORE ARCHIVING: 573 jobs in database
[2026-01-03T15:24:44.518Z] [BOT] ✅ No jobs to archive (all 573 jobs within 7-day window)
[2026-01-03T15:24:44.527Z] [BOT] 💾 Saved posted_jobs.json: 573 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T15:24:47.527Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-03T15:24:47.527Z] [BOT] ⏭️  Skipping duplicate: JID_e3ba22a4 (posted within 7 days)
[2026-01-03T15:24:47.527Z] [BOT] ⏭️  Skipping duplicate: JID_ad49cabe (posted within 7 days)
[2026-01-03T15:24:47.527Z] [BOT] ⏭️  Skipping duplicate: JID_64a8496a (posted within 7 days)
⏭️  Skipping duplicate: JID_37726e3e (posted within 7 days)
[2026-01-03T15:24:47.527Z] [BOT] ⏭️  Skipping duplicate: JID_ba7988a5 (posted within 7 days)
[2026-01-03T15:24:47.527Z] [BOT] ⏭️  Skipping duplicate: JID_e20e3bf0 (posted within 7 days)
[2026-01-03T15:24:47.527Z] [BOT] ⏭️  Skipping duplicate: JID_0d66a7b5 (posted within 7 days)
[2026-01-03T15:24:47.527Z] [BOT] ⏭️  Skipping duplicate: JID_4b48924d (posted within 7 days)
⏭️  Skipping duplicate: JID_fb8f2bd9 (posted within 7 days)
[2026-01-03T15:24:47.588Z] [BOT] ✅ Loaded pending queue: 726 total (706 pending, 20 enriched, 0 posted)
[2026-01-03T15:24:47.661Z] [BOT] ✅ Saved pending queue: 726 total (706 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-03T15:24:47.661Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T15:24:47.706Z] [BOT] 📂 Loaded 1538 existing routing entries
[2026-01-03T15:24:47.752Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2026-01-03T15:24:47.753Z] [BOT] Total entries: 1547
   Timestamp: 2026-01-03T15:24:47.746Z
[2026-01-03T15:24:47.753Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 18
[2026-01-03T15:24:47.753Z] [BOT] Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-03T15:24:47.754Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 7 posts
     2. #🤖・ai-jobs: 3 posts
     3. #📣・marketing-jobs: 2 posts
     4. #🗽・new-york: 2 posts
[2026-01-03T15:24:47.754Z] [BOT] 5. #💲・sales-jobs: 2 posts
[2026-01-03T15:24:47.754Z] [BOT] [STATS] Channel stats saved
[2026-01-03T15:24:49.770Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2343) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*