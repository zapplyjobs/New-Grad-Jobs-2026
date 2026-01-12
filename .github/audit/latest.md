# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T22:07:36.894Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T22:06:43.375Z] ========================================
[2026-01-12T22:06:43.377Z] Discord Bot Execution Log
[2026-01-12T22:06:43.377Z] Environment: GitHub Actions
[2026-01-12T22:06:43.377Z] Node Version: v20.19.6
[2026-01-12T22:06:43.377Z] ========================================
[2026-01-12T22:06:43.377Z] Environment Variables Check:
[2026-01-12T22:06:43.377Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T22:06:43.377Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T22:06:43.377Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T22:06:43.377Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T22:06:43.377Z] 
Multi-Channel Configuration:
[2026-01-12T22:06:43.377Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T22:06:43.378Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T22:06:43.378Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T22:06:43.378Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T22:06:43.378Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T22:06:43.378Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T22:06:43.378Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T22:06:43.378Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T22:06:43.378Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T22:06:43.378Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T22:06:43.378Z] 
Data Files Check:
[2026-01-12T22:06:43.379Z] .github/data/new_jobs.json: ✅ Exists (10 items, 190932 bytes)
[2026-01-12T22:06:43.382Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 300294 bytes)
[2026-01-12T22:06:43.382Z] 
========================================
[2026-01-12T22:06:43.382Z] Starting Enhanced Discord Bot...
[2026-01-12T22:06:43.382Z] ========================================
[2026-01-12T22:06:43.923Z] [BOT] ✅ Loaded V2 database: 555 jobs
[2026-01-12T22:06:44.456Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T22:06:44.456Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T22:06:44.457Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T22:06:44.567Z] [BOT] ✅ Loaded pending queue: 2656 total (2636 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Strategic Account Executive (SLED) at datadog
[2026-01-12T22:06:44.568Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T22:06:44.569Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T22:06:44.569Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T22:06:44.570Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-12T22:06:44.570Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Strategic Account Executive (SLED) @ datadog: boston, massachusetts, usa; new york, new york, usa, remote
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-12T22:06:44.570Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T22:06:44.575Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-12T22:06:44.575Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (SLED)" @ datadog
[2026-01-12T22:06:44.576Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T22:06:44.580Z] [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T22:06:44.834Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive (SLED) @ datadog in #💲・sales-jobs
[2026-01-12T22:06:44.834Z] [BOT] ✅ Industry: Strategic Account Executive (SLED) @ datadog
[2026-01-12T22:06:46.503Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive (SLED) @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T22:06:48.004Z] [BOT] 💾 Marked as posted: Strategic Account Executive (SLED) @ datadog (instance #1)
[2026-01-12T22:06:48.004Z] [BOT] 💾 BEFORE ARCHIVING: 556 jobs in database
[2026-01-12T22:06:48.005Z] [BOT] ✅ No jobs to archive (all 556 jobs within 7-day window)
[2026-01-12T22:06:48.013Z] [BOT] 💾 Saved posted_jobs.json: 556 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:06:48.013Z] [BOT] 💾 Marked as posted: Strategic Account Executive (SLED) @ datadog (instance #1)
💾 BEFORE ARCHIVING: 557 jobs in database
[2026-01-12T22:06:48.014Z] [BOT] ✅ No jobs to archive (all 557 jobs within 7-day window)
[2026-01-12T22:06:48.019Z] [BOT] 💾 Saved posted_jobs.json: 557 active jobs
[2026-01-12T22:06:48.020Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:06:48.020Z] [BOT] 💾 Marked as posted: Strategic Account Executive (SLED) @ datadog (instance #1)
💾 BEFORE ARCHIVING: 558 jobs in database
✅ No jobs to archive (all 558 jobs within 7-day window)
[2026-01-12T22:06:48.028Z] [BOT] 💾 Saved posted_jobs.json: 558 active jobs
[2026-01-12T22:06:48.028Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:06:48.028Z] [BOT] 📍 [ROUTING] "Technical Account Manager 2 - New York" @ datadog
[2026-01-12T22:06:48.029Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T22:06:48.269Z] [BOT] ✅ Created forum post: 🏢 Technical Account Manager 2 - New York @ datadog in #💲・sales-jobs
[2026-01-12T22:06:48.270Z] [BOT] ✅ Industry: Technical Account Manager 2 - New York @ datadog
[2026-01-12T22:06:49.989Z] [BOT] ✅ Created forum post: 🏢 Technical Account Manager 2 - New York @ datadog in #🗽・new-york
[2026-01-12T22:06:49.989Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T22:06:51.491Z] [BOT] 💾 Marked as posted: Technical Account Manager 2 - New York @ datadog (instance #1)
💾 BEFORE ARCHIVING: 559 jobs in database
✅ No jobs to archive (all 559 jobs within 7-day window)
[2026-01-12T22:06:51.495Z] [BOT] 💾 Saved posted_jobs.json: 559 active jobs
[2026-01-12T22:06:51.495Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:06:51.496Z] [BOT] 📍 [ROUTING] "Vice President, GTM Enablement & Business Value - NYC" @ datadog
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T22:06:51.673Z] [BOT] ✅ Created forum post: 🏢 Vice President, GTM Enablement & Business Value - NYC @ datadog in #💲・sales-jobs
  ✅ Industry: Vice President, GTM Enablement & Business Value - NYC @ datadog
[2026-01-12T22:06:53.378Z] [BOT] ✅ Created forum post: 🏢 Vice President, GTM Enablement & Business Value - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T22:06:54.879Z] [BOT] 💾 Marked as posted: Vice President, GTM Enablement & Business Value - NYC @ datadog (instance #1)
[2026-01-12T22:06:54.879Z] [BOT] 💾 BEFORE ARCHIVING: 560 jobs in database
[2026-01-12T22:06:54.880Z] [BOT] ✅ No jobs to archive (all 560 jobs within 7-day window)
[2026-01-12T22:06:54.885Z] [BOT] 💾 Saved posted_jobs.json: 560 active jobs
[2026-01-12T22:06:54.885Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:06:54.885Z] [BOT] 📍 [ROUTING] "Global Real Estate Design & Construction Manager" @ anthropic
[2026-01-12T22:06:54.886Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T22:06:55.076Z] [BOT] ✅ Created forum post: 🏢 Global Real Estate Design & Construction Manager @ anthropic in #💲・sales-jobs
[2026-01-12T22:06:55.076Z] [BOT] ✅ Industry: Global Real Estate Design & Construction Manager @ anthropic
[2026-01-12T22:06:56.961Z] [BOT] ✅ Created forum post: 🏢 Global Real Estate Design & Construction Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:06:58.462Z] [BOT] 💾 Marked as posted: Global Real Estate Design & Construction Manager @ anthropic (instance #1)
[2026-01-12T22:06:58.462Z] [BOT] 💾 BEFORE ARCHIVING: 561 jobs in database
[2026-01-12T22:06:58.463Z] [BOT] ✅ No jobs to archive (all 561 jobs within 7-day window)
[2026-01-12T22:06:58.468Z] [BOT] 💾 Saved posted_jobs.json: 561 active jobs
[2026-01-12T22:06:58.468Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:06:58.468Z] [BOT] 📍 [ROUTING] "Designer Advocate - Figma Weave (New York, United States)" @ figma
[2026-01-12T22:06:58.468Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T22:06:58.699Z] [BOT] ✅ Created forum post: 🏢 Designer Advocate - Figma Weave (New York, United States) @ figma in #💲・sales-jobs
  ✅ Industry: Designer Advocate - Figma Weave (New York, United States) @ figma
[2026-01-12T22:07:00.356Z] [BOT] ✅ Created forum post: 🏢 Designer Advocate - Figma Weave (New York, United States) @ figma in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T22:07:01.857Z] [BOT] 💾 Marked as posted: Designer Advocate - Figma Weave (New York, United States) @ figma (instance #1)
[2026-01-12T22:07:01.857Z] [BOT] 💾 BEFORE ARCHIVING: 562 jobs in database
[2026-01-12T22:07:01.857Z] [BOT] ✅ No jobs to archive (all 562 jobs within 7-day window)
[2026-01-12T22:07:01.862Z] [BOT] 💾 Saved posted_jobs.json: 562 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:07:04.864Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-12T22:07:04.864Z] [BOT] 📍 [ROUTING] "Technical Content Writer" @ datadog
[2026-01-12T22:07:04.864Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T22:07:05.040Z] [BOT] ✅ Created forum post: 🏢 Technical Content Writer @ datadog in #📣・marketing-jobs
  ✅ Industry: Technical Content Writer @ datadog
[2026-01-12T22:07:06.745Z] [BOT] ✅ Created forum post: 🏢 Technical Content Writer @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T22:07:08.246Z] [BOT] 💾 Marked as posted: Technical Content Writer @ datadog (instance #1)
[2026-01-12T22:07:08.246Z] [BOT] 💾 BEFORE ARCHIVING: 563 jobs in database
[2026-01-12T22:07:08.247Z] [BOT] ✅ No jobs to archive (all 563 jobs within 7-day window)
[2026-01-12T22:07:08.252Z] [BOT] 💾 Saved posted_jobs.json: 563 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:07:11.253Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-12T22:07:11.253Z] [BOT] 📍 [ROUTING] "Technical Support Engineer 2, Premier - Denver" @ datadog
[2026-01-12T22:07:11.254Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T22:07:11.556Z] [BOT] ✅ Created forum post: 🏢 Technical Support Engineer 2, Premier - Denver @ datadog in #💻・tech-jobs
[2026-01-12T22:07:11.556Z] [BOT] ✅ Industry: Technical Support Engineer 2, Premier - Denver @ datadog
[2026-01-12T22:07:13.058Z] [BOT] 💾 Marked as posted: Technical Support Engineer 2, Premier - Denver @ datadog (instance #1)
[2026-01-12T22:07:13.058Z] [BOT] 💾 BEFORE ARCHIVING: 564 jobs in database
[2026-01-12T22:07:13.059Z] [BOT] ✅ No jobs to archive (all 564 jobs within 7-day window)
[2026-01-12T22:07:13.064Z] [BOT] 💾 Saved posted_jobs.json: 564 active jobs
[2026-01-12T22:07:13.065Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:07:13.065Z] [BOT] 📍 [ROUTING] "Partner Marketing Manager, Cloud Partners" @ anthropic
[2026-01-12T22:07:13.065Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-12T22:07:13.316Z] [BOT] ✅ Created forum post: 🏢 Partner Marketing Manager, Cloud Partners @ anthropic in #💻・tech-jobs
[2026-01-12T22:07:13.316Z] [BOT] ✅ Industry: Partner Marketing Manager, Cloud Partners @ anthropic
[2026-01-12T22:07:15.058Z] [BOT] ✅ Created forum post: 🏢 Partner Marketing Manager, Cloud Partners @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:07:16.559Z] [BOT] 💾 Marked as posted: Partner Marketing Manager, Cloud Partners @ anthropic (instance #1)
[2026-01-12T22:07:16.559Z] [BOT] 💾 BEFORE ARCHIVING: 565 jobs in database
[2026-01-12T22:07:16.560Z] [BOT] ✅ No jobs to archive (all 565 jobs within 7-day window)
[2026-01-12T22:07:16.566Z] [BOT] 💾 Saved posted_jobs.json: 565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:07:19.567Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-12T22:07:19.567Z] [BOT] 📍 [ROUTING] "Associate Product Manager Intern" @ coinbase
[2026-01-12T22:07:19.567Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-12T22:07:19.941Z] [BOT] ✅ Created forum post: 🏢 Associate Product Manager Intern @ coinbase in #🤖・ai-jobs
  ✅ Industry: Associate Product Manager Intern @ coinbase
[2026-01-12T22:07:22.291Z] [BOT] ✅ Created forum post: 🏢 Associate Product Manager Intern @ coinbase in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:07:23.792Z] [BOT] 💾 Marked as posted: Associate Product Manager Intern @ coinbase (instance #1)
[2026-01-12T22:07:23.792Z] [BOT] 💾 BEFORE ARCHIVING: 566 jobs in database
[2026-01-12T22:07:23.792Z] [BOT] ✅ No jobs to archive (all 566 jobs within 7-day window)
[2026-01-12T22:07:23.798Z] [BOT] 💾 Saved posted_jobs.json: 566 active jobs
[2026-01-12T22:07:23.798Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:07:26.798Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-12T22:07:26.799Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_e42479b2
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-12T22:07:26.799Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T22:07:27.030Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_e42479b2 in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_e42479b2
[2026-01-12T22:07:29.145Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_e42479b2 in #🌆・chicago
[2026-01-12T22:07:29.145Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-12T22:07:30.646Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_e42479b2 (instance #1)
[2026-01-12T22:07:30.646Z] [BOT] 💾 BEFORE ARCHIVING: 567 jobs in database
[2026-01-12T22:07:30.647Z] [BOT] ✅ No jobs to archive (all 567 jobs within 7-day window)
[2026-01-12T22:07:30.652Z] [BOT] 💾 Saved posted_jobs.json: 567 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:07:33.653Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T22:07:33.654Z] [BOT] ⏭️  Skipping duplicate: JID_7eaa560a (posted within 7 days)
[2026-01-12T22:07:33.654Z] [BOT] ⏭️  Skipping duplicate: JID_02167180 (posted within 7 days)
[2026-01-12T22:07:33.654Z] [BOT] ⏭️  Skipping duplicate: JID_ea2b096f (posted within 7 days)
⏭️  Skipping duplicate: JID_37f7437b (posted within 7 days)
[2026-01-12T22:07:33.654Z] [BOT] ⏭️  Skipping duplicate: JID_602076ee (posted within 7 days)
[2026-01-12T22:07:33.654Z] [BOT] ⏭️  Skipping duplicate: JID_e4d0fb77 (posted within 7 days)
[2026-01-12T22:07:33.654Z] [BOT] ⏭️  Skipping duplicate: JID_0432ef70 (posted within 7 days)
[2026-01-12T22:07:33.654Z] [BOT] ⏭️  Skipping duplicate: JID_02c50a26 (posted within 7 days)
⏭️  Skipping duplicate: JID_663bfed6 (posted within 7 days)
[2026-01-12T22:07:33.654Z] [BOT] ⏭️  Skipping duplicate: JID_bfffdb5c (posted within 7 days)
[2026-01-12T22:07:33.770Z] [BOT] ✅ Loaded pending queue: 2656 total (2636 pending, 20 enriched, 0 posted)
[2026-01-12T22:07:33.939Z] [BOT] ✅ Saved pending queue: 2656 total (2636 pending, 10 enriched, 10 posted)
[2026-01-12T22:07:33.939Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T22:07:33.991Z] [BOT] 📂 Loaded 2720 existing routing entries
[2026-01-12T22:07:34.048Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2730
   Timestamp: 2026-01-12T22:07:34.036Z
[2026-01-12T22:07:34.048Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 19
   Successful: 19
[2026-01-12T22:07:34.049Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-12T22:07:34.049Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 8
   Top channels:
     1. #💲・sales-jobs: 5 posts
     2. #🗽・new-york: 5 posts
     3. #🌉・san-francisco: 3 posts
     4. #💻・tech-jobs: 2 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-12T22:07:34.050Z] [BOT] [STATS] Channel stats saved
[2026-01-12T22:07:36.077Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*