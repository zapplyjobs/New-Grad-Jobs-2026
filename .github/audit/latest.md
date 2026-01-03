# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T17:07:40.282Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T17:06:44.968Z] ========================================
[2026-01-03T17:06:44.970Z] Discord Bot Execution Log
[2026-01-03T17:06:44.970Z] Environment: GitHub Actions
[2026-01-03T17:06:44.970Z] Node Version: v20.19.6
[2026-01-03T17:06:44.970Z] ========================================
[2026-01-03T17:06:44.970Z] Environment Variables Check:
[2026-01-03T17:06:44.970Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T17:06:44.970Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T17:06:44.970Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T17:06:44.970Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T17:06:44.970Z] 
Multi-Channel Configuration:
[2026-01-03T17:06:44.971Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T17:06:44.971Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T17:06:44.971Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T17:06:44.971Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T17:06:44.971Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T17:06:44.971Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T17:06:44.971Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T17:06:44.971Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T17:06:44.971Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T17:06:44.971Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T17:06:44.971Z] 
Data Files Check:
[2026-01-03T17:06:44.973Z] .github/data/new_jobs.json: ✅ Exists (10 items, 170900 bytes)
[2026-01-03T17:06:44.975Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 327298 bytes)
[2026-01-03T17:06:44.975Z] 
========================================
[2026-01-03T17:06:44.975Z] Starting Enhanced Discord Bot...
[2026-01-03T17:06:44.975Z] ========================================
[2026-01-03T17:06:45.513Z] [BOT] ✅ Loaded V2 database: 633 jobs
[2026-01-03T17:06:46.330Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T17:06:46.331Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T17:06:46.331Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T17:06:46.332Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T17:06:46.400Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T17:06:46.500Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T17:06:46.503Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T17:06:46.503Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T17:06:46.503Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T17:06:46.504Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T17:06:46.504Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T17:06:46.509Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-03T17:06:46.510Z] [BOT] 📍 [ROUTING] "Research Engineer, Reward Models Platform" @ anthropic
[2026-01-03T17:06:46.510Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T17:06:46.515Z] [BOT ERROR] (node:2350) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T17:06:46.680Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Reward Models Platform @ anthropic in #💻・tech-jobs
[2026-01-03T17:06:46.680Z] [BOT] ✅ Industry: Research Engineer, Reward Models Platform @ anthropic
[2026-01-03T17:06:48.505Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Reward Models Platform @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T17:06:50.006Z] [BOT] 💾 Marked as posted: Research Engineer, Reward Models Platform @ anthropic (instance #1)
[2026-01-03T17:06:50.006Z] [BOT] 💾 BEFORE ARCHIVING: 634 jobs in database
[2026-01-03T17:06:50.007Z] [BOT] ✅ No jobs to archive (all 634 jobs within 7-day window)
[2026-01-03T17:06:50.015Z] [BOT] 💾 Saved posted_jobs.json: 634 active jobs
[2026-01-03T17:06:50.015Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:06:50.016Z] [BOT] 📍 [ROUTING] "Director, Security Operations & Information Security" @ figma
[2026-01-03T17:06:50.016Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T17:06:50.216Z] [BOT] ✅ Created forum post: 🏢 Director, Security Operations & Information Security @ figma in #💻・tech-jobs
[2026-01-03T17:06:50.216Z] [BOT] ✅ Industry: Director, Security Operations & Information Security @ figma
[2026-01-03T17:06:51.912Z] [BOT] ✅ Created forum post: 🏢 Director, Security Operations & Information Security @ figma in #🌉・san-francisco
[2026-01-03T17:06:51.912Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:06:53.412Z] [BOT] 💾 Marked as posted: Director, Security Operations & Information Security @ figma (instance #1)
[2026-01-03T17:06:53.412Z] [BOT] 💾 BEFORE ARCHIVING: 635 jobs in database
[2026-01-03T17:06:53.413Z] [BOT] ✅ No jobs to archive (all 635 jobs within 7-day window)
[2026-01-03T17:06:53.418Z] [BOT] 💾 Saved posted_jobs.json: 635 active jobs
[2026-01-03T17:06:53.419Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:06:56.419Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-03T17:06:56.420Z] [BOT] 📍 [ROUTING] "Compensation Systems and Infrastructure" @ anthropic
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T17:06:56.686Z] [BOT] ✅ Created forum post: 🏢 Compensation Systems and Infrastructure @ anthropic in #📣・marketing-jobs
  ✅ Industry: Compensation Systems and Infrastructure @ anthropic
[2026-01-03T17:06:58.396Z] [BOT] ✅ Created forum post: 🏢 Compensation Systems and Infrastructure @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T17:06:59.897Z] [BOT] 💾 Marked as posted: Compensation Systems and Infrastructure @ anthropic (instance #1)
[2026-01-03T17:06:59.898Z] [BOT] 💾 BEFORE ARCHIVING: 636 jobs in database
[2026-01-03T17:06:59.898Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2026-01-03T17:06:59.905Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
[2026-01-03T17:06:59.905Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:06:59.905Z] [BOT] 📍 [ROUTING] "Finance Systems, Senior Business Systems Analyst - Finance & Strategy" @ anthropic
[2026-01-03T17:06:59.905Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T17:07:00.113Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Senior Business Systems Analyst - Finance & Strategy @ anthropic in #📣・marketing-jobs
[2026-01-03T17:07:00.113Z] [BOT] ✅ Industry: Finance Systems, Senior Business Systems Analyst - Finance & Strategy @ anthropic
[2026-01-03T17:07:01.867Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Senior Business Systems Analyst - Finance & Strategy @ anthropic in #🌉・san-francisco
[2026-01-03T17:07:01.867Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:07:03.368Z] [BOT] 💾 Marked as posted: Finance Systems, Senior Business Systems Analyst - Finance & Strategy @ anthropic (instance #1)
[2026-01-03T17:07:03.368Z] [BOT] 💾 BEFORE ARCHIVING: 637 jobs in database
[2026-01-03T17:07:03.369Z] [BOT] ✅ No jobs to archive (all 637 jobs within 7-day window)
[2026-01-03T17:07:03.374Z] [BOT] 💾 Saved posted_jobs.json: 637 active jobs
[2026-01-03T17:07:03.375Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:07:06.375Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-03T17:07:06.376Z] [BOT] 📍 [ROUTING] "AI Applied Scientist" @ figma
[2026-01-03T17:07:06.376Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T17:07:06.849Z] [BOT] ✅ Created forum post: 🏢 AI Applied Scientist @ figma in #🤖・ai-jobs
[2026-01-03T17:07:06.850Z] [BOT] ✅ Industry: AI Applied Scientist @ figma
[2026-01-03T17:07:08.636Z] [BOT] ✅ Created forum post: 🏢 AI Applied Scientist @ figma in #🌉・san-francisco
[2026-01-03T17:07:08.636Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:07:10.137Z] [BOT] 💾 Marked as posted: AI Applied Scientist @ figma (instance #1)
[2026-01-03T17:07:10.138Z] [BOT] 💾 BEFORE ARCHIVING: 638 jobs in database
[2026-01-03T17:07:10.138Z] [BOT] ✅ No jobs to archive (all 638 jobs within 7-day window)
[2026-01-03T17:07:10.144Z] [BOT] 💾 Saved posted_jobs.json: 638 active jobs
[2026-01-03T17:07:10.144Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:07:10.144Z] [BOT] 📍 [ROUTING] "Product Engineer, Applied AI " @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T17:07:10.382Z] [BOT] ✅ Created forum post: 🏢 Product Engineer, Applied AI  @ anthropic in #🤖・ai-jobs
[2026-01-03T17:07:10.382Z] [BOT] ✅ Industry: Product Engineer, Applied AI  @ anthropic
[2026-01-03T17:07:12.187Z] [BOT] ✅ Created forum post: 🏢 Product Engineer, Applied AI  @ anthropic in #🌉・san-francisco
[2026-01-03T17:07:12.187Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:07:13.687Z] [BOT] 💾 Marked as posted: Product Engineer, Applied AI  @ anthropic (instance #1)
[2026-01-03T17:07:13.687Z] [BOT] 💾 BEFORE ARCHIVING: 639 jobs in database
[2026-01-03T17:07:13.688Z] [BOT] ✅ No jobs to archive (all 639 jobs within 7-day window)
[2026-01-03T17:07:13.693Z] [BOT] 💾 Saved posted_jobs.json: 639 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T17:07:16.694Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-03T17:07:16.694Z] [BOT] 📍 [ROUTING] "Senior Data Scientist, Analytics - GTM Ads" @ discord
[2026-01-03T17:07:16.694Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T17:07:17.092Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Analytics - GTM Ads @ discord in #📈・JID_fb739488
[2026-01-03T17:07:17.092Z] [BOT] ✅ Industry: Senior Data Scientist, Analytics - GTM Ads @ discord
[2026-01-03T17:07:18.789Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Analytics - GTM Ads @ discord in #🌉・san-francisco
[2026-01-03T17:07:18.789Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:07:20.289Z] [BOT] 💾 Marked as posted: Senior Data Scientist, Analytics - GTM Ads @ discord (instance #1)
[2026-01-03T17:07:20.289Z] [BOT] 💾 BEFORE ARCHIVING: 640 jobs in database
[2026-01-03T17:07:20.290Z] [BOT] ✅ No jobs to archive (all 640 jobs within 7-day window)
[2026-01-03T17:07:20.296Z] [BOT] 💾 Saved posted_jobs.json: 640 active jobs
[2026-01-03T17:07:20.296Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:07:20.296Z] [BOT] 📍 [ROUTING] "Data Scientist, Analytics - Ads Reporting" @ discord
[2026-01-03T17:07:20.297Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T17:07:20.796Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, Analytics - Ads Reporting @ discord in #📈・JID_fb739488
[2026-01-03T17:07:20.796Z] [BOT] ✅ Industry: Data Scientist, Analytics - Ads Reporting @ discord
[2026-01-03T17:07:22.494Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, Analytics - Ads Reporting @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T17:07:23.994Z] [BOT] 💾 Marked as posted: Data Scientist, Analytics - Ads Reporting @ discord (instance #1)
[2026-01-03T17:07:23.994Z] [BOT] 💾 BEFORE ARCHIVING: 641 jobs in database
[2026-01-03T17:07:23.995Z] [BOT] ✅ No jobs to archive (all 641 jobs within 7-day window)
[2026-01-03T17:07:24.001Z] [BOT] 💾 Saved posted_jobs.json: 641 active jobs
[2026-01-03T17:07:24.001Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:07:27.001Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-03T17:07:27.001Z] [BOT] 📍 [ROUTING] "People Analyst" @ figma
[2026-01-03T17:07:27.001Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T17:07:27.304Z] [BOT] ✅ Created forum post: 🏢 People Analyst @ figma in #💲・sales-jobs
[2026-01-03T17:07:27.305Z] [BOT] ✅ Industry: People Analyst @ figma
[2026-01-03T17:07:29.178Z] [BOT] ✅ Created forum post: 🏢 People Analyst @ figma in #🌉・san-francisco
[2026-01-03T17:07:29.178Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:07:30.679Z] [BOT] 💾 Marked as posted: People Analyst @ figma (instance #1)
[2026-01-03T17:07:30.679Z] [BOT] 💾 BEFORE ARCHIVING: 642 jobs in database
[2026-01-03T17:07:30.680Z] [BOT] ✅ No jobs to archive (all 642 jobs within 7-day window)
[2026-01-03T17:07:30.685Z] [BOT] 💾 Saved posted_jobs.json: 642 active jobs
[2026-01-03T17:07:30.686Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:07:30.686Z] [BOT] 📍 [ROUTING] "Customer Activation Manager" @ anthropic
[2026-01-03T17:07:30.686Z] [BOT] Category: SALES (matched: "account executive")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T17:07:30.847Z] [BOT] ✅ Created forum post: 🏢 Customer Activation Manager @ anthropic in #💲・sales-jobs
  ✅ Industry: Customer Activation Manager @ anthropic
[2026-01-03T17:07:32.508Z] [BOT] ✅ Created forum post: 🏢 Customer Activation Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T17:07:34.009Z] [BOT] 💾 Marked as posted: Customer Activation Manager @ anthropic (instance #1)
[2026-01-03T17:07:34.010Z] [BOT] 💾 BEFORE ARCHIVING: 643 jobs in database
[2026-01-03T17:07:34.010Z] [BOT] ✅ No jobs to archive (all 643 jobs within 7-day window)
[2026-01-03T17:07:34.016Z] [BOT] 💾 Saved posted_jobs.json: 643 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T17:07:37.016Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T17:07:37.016Z] [BOT] ⏭️  Skipping duplicate: JID_ed8a4c29 (posted within 7 days)
[2026-01-03T17:07:37.016Z] [BOT] ⏭️  Skipping duplicate: JID_9f7e5676 (posted within 7 days)
[2026-01-03T17:07:37.016Z] [BOT] ⏭️  Skipping duplicate: JID_682e1f65 (posted within 7 days)
[2026-01-03T17:07:37.016Z] [BOT] ⏭️  Skipping duplicate: JID_8634f5d2 (posted within 7 days)
⏭️  Skipping duplicate: JID_da0d656b (posted within 7 days)
[2026-01-03T17:07:37.017Z] [BOT] ⏭️  Skipping duplicate: JID_68d1a4d6 (posted within 7 days)
[2026-01-03T17:07:37.017Z] [BOT] ⏭️  Skipping duplicate: JID_e3d43b6a (posted within 7 days)
[2026-01-03T17:07:37.017Z] [BOT] ⏭️  Skipping duplicate: JID_21ef7452 (posted within 7 days)
[2026-01-03T17:07:37.017Z] [BOT] ⏭️  Skipping duplicate: JID_ce001e83 (posted within 7 days)
[2026-01-03T17:07:37.017Z] [BOT] ⏭️  Skipping duplicate: JID_e797549b (posted within 7 days)
[2026-01-03T17:07:37.074Z] [BOT] ✅ Loaded pending queue: 656 total (636 pending, 20 enriched, 0 posted)
[2026-01-03T17:07:37.136Z] [BOT] ✅ Saved pending queue: 656 total (636 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T17:07:37.137Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T17:07:37.181Z] [BOT] 📂 Loaded 1600 existing routing entries
[2026-01-03T17:07:37.229Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1610
   Timestamp: 2026-01-03T17:07:37.221Z
[2026-01-03T17:07:37.230Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T17:07:37.230Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-03T17:07:37.230Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T17:07:37.230Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
[2026-01-03T17:07:37.230Z] [BOT] 1. #🌉・san-francisco: 10 posts
     2. #💻・tech-jobs: 2 posts
     3. #📣・marketing-jobs: 2 posts
     4. #🤖・ai-jobs: 2 posts
[2026-01-03T17:07:37.230Z] [BOT] 5. #📈・JID_fb739488: 2 posts
[2026-01-03T17:07:37.230Z] [BOT] [STATS] Channel stats saved
[2026-01-03T17:07:39.246Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2350) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*