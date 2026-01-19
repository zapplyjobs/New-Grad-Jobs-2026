# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T08:49:30.288Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T08:48:39.736Z] ========================================
[2026-01-19T08:48:39.738Z] Discord Bot Execution Log
[2026-01-19T08:48:39.738Z] Environment: GitHub Actions
[2026-01-19T08:48:39.738Z] Node Version: v20.19.6
[2026-01-19T08:48:39.738Z] ========================================
[2026-01-19T08:48:39.738Z] Environment Variables Check:
[2026-01-19T08:48:39.738Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T08:48:39.738Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T08:48:39.738Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T08:48:39.738Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T08:48:39.738Z] 
Multi-Channel Configuration:
[2026-01-19T08:48:39.739Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T08:48:39.739Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T08:48:39.739Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T08:48:39.739Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T08:48:39.739Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T08:48:39.739Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T08:48:39.739Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T08:48:39.739Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T08:48:39.739Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T08:48:39.739Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T08:48:39.739Z] 
Data Files Check:
[2026-01-19T08:48:39.740Z] .github/data/new_jobs.json: ✅ Exists (10 items, 130132 bytes)
[2026-01-19T08:48:39.751Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1595626 bytes)
[2026-01-19T08:48:39.751Z] 
========================================
[2026-01-19T08:48:39.751Z] Starting Enhanced Discord Bot...
[2026-01-19T08:48:39.751Z] ========================================
[2026-01-19T08:48:40.312Z] [BOT] ✅ Loaded V2 database: 2933 jobs
[2026-01-19T08:48:40.837Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T08:48:40.837Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T08:48:40.837Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T08:48:40.958Z] [BOT] ✅ Loaded pending queue: 2825 total (2805 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer II, Ads Product & Tech at spotify
[2026-01-19T08:48:40.962Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T08:48:40.962Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T08:48:40.962Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T08:48:40.963Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-19T08:48:40.963Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior GRC Lead @ brex: new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-19T08:48:40.964Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T08:48:40.967Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-19T08:48:40.968Z] [BOT] 📍 [ROUTING] "Data Engineer II, Ads Product & Tech" @ spotify
[2026-01-19T08:48:40.968Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T08:48:40.973Z] [BOT ERROR] (node:2695) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T08:48:41.186Z] [BOT] ✅ Created forum post: 🏢 Data Engineer II, Ads Product & Tech @ spotify in #🤖・ai-jobs
  ✅ Industry: Data Engineer II, Ads Product & Tech @ spotify
[2026-01-19T08:48:42.892Z] [BOT] ✅ Created forum post: 🏢 Data Engineer II, Ads Product & Tech @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T08:48:44.393Z] [BOT] 💾 Marked as posted: Data Engineer II, Ads Product & Tech @ spotify (instance #1)
[2026-01-19T08:48:44.393Z] [BOT] 💾 BEFORE ARCHIVING: 2934 jobs in database
[2026-01-19T08:48:44.396Z] [BOT] ✅ No jobs to archive (all 2934 jobs within 7-day window)
[2026-01-19T08:48:44.419Z] [BOT] 💾 Saved posted_jobs.json: 2934 active jobs
[2026-01-19T08:48:44.419Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T08:48:44.419Z] [BOT] 📍 [ROUTING] "Vendor Performance Manager, North America" @ reddit
[2026-01-19T08:48:44.419Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T08:48:44.695Z] [BOT] ✅ Created forum post: 🏢 Vendor Performance Manager, North America @ reddit in #🤖・ai-jobs
  ✅ Industry: Vendor Performance Manager, North America @ reddit
[2026-01-19T08:48:46.198Z] [BOT] 💾 Marked as posted: Vendor Performance Manager, North America @ reddit (instance #1)
[2026-01-19T08:48:46.198Z] [BOT] 💾 BEFORE ARCHIVING: 2935 jobs in database
[2026-01-19T08:48:46.200Z] [BOT] ✅ No jobs to archive (all 2935 jobs within 7-day window)
[2026-01-19T08:48:46.216Z] [BOT] 💾 Saved posted_jobs.json: 2935 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:48:46.216Z] [BOT] 📍 [ROUTING] "Customer Success Manager, Digital Native Businesses " @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-19T08:48:46.216Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T08:48:46.672Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Digital Native Businesses  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Customer Success Manager, Digital Native Businesses  @ anthropic
[2026-01-19T08:48:48.456Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Digital Native Businesses  @ anthropic in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T08:48:49.957Z] [BOT] 💾 Marked as posted: Customer Success Manager, Digital Native Businesses  @ anthropic (instance #1)
[2026-01-19T08:48:49.957Z] [BOT] 💾 BEFORE ARCHIVING: 2936 jobs in database
[2026-01-19T08:48:49.959Z] [BOT] ✅ No jobs to archive (all 2936 jobs within 7-day window)
[2026-01-19T08:48:49.979Z] [BOT] 💾 Saved posted_jobs.json: 2936 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:48:49.981Z] [BOT] 📍 [ROUTING] "Startup Partnerships " @ anthropic
[2026-01-19T08:48:49.981Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T08:48:50.218Z] [BOT] ✅ Created forum post: 🏢 Startup Partnerships  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Startup Partnerships  @ anthropic
[2026-01-19T08:48:51.947Z] [BOT] ✅ Created forum post: 🏢 Startup Partnerships  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T08:48:53.448Z] [BOT] 💾 Marked as posted: Startup Partnerships  @ anthropic (instance #1)
[2026-01-19T08:48:53.448Z] [BOT] 💾 BEFORE ARCHIVING: 2937 jobs in database
[2026-01-19T08:48:53.450Z] [BOT] ✅ No jobs to archive (all 2937 jobs within 7-day window)
[2026-01-19T08:48:53.468Z] [BOT] 💾 Saved posted_jobs.json: 2937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:48:53.469Z] [BOT] 📍 [ROUTING] "Applied AI Engineer, Beneficial Deployments" @ anthropic
[2026-01-19T08:48:53.469Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T08:48:53.753Z] [BOT] ✅ Created forum post: 🏢 Applied AI Engineer, Beneficial Deployments @ anthropic in #🤖・ai-jobs
  ✅ Industry: Applied AI Engineer, Beneficial Deployments @ anthropic
[2026-01-19T08:48:55.574Z] [BOT] ✅ Created forum post: 🏢 Applied AI Engineer, Beneficial Deployments @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T08:48:57.075Z] [BOT] 💾 Marked as posted: Applied AI Engineer, Beneficial Deployments @ anthropic (instance #1)
[2026-01-19T08:48:57.075Z] [BOT] 💾 BEFORE ARCHIVING: 2938 jobs in database
[2026-01-19T08:48:57.078Z] [BOT] ✅ No jobs to archive (all 2938 jobs within 7-day window)
[2026-01-19T08:48:57.097Z] [BOT] 💾 Saved posted_jobs.json: 2938 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:49:00.097Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T08:49:00.098Z] [BOT] 📍 [ROUTING] "Senior Data Engineer, Ads Product & Tech" @ spotify
[2026-01-19T08:49:00.098Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T08:49:00.295Z] [BOT] ✅ Created forum post: 🏢 Senior Data Engineer, Ads Product & Tech @ spotify in #📈・JID_fb739488
[2026-01-19T08:49:00.295Z] [BOT] ✅ Industry: Senior Data Engineer, Ads Product & Tech @ spotify
[2026-01-19T08:49:02.172Z] [BOT] ✅ Created forum post: 🏢 Senior Data Engineer, Ads Product & Tech @ spotify in #🗽・new-york
[2026-01-19T08:49:02.172Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-19T08:49:03.674Z] [BOT] 💾 Marked as posted: Senior Data Engineer, Ads Product & Tech @ spotify (instance #1)
[2026-01-19T08:49:03.674Z] [BOT] 💾 BEFORE ARCHIVING: 2939 jobs in database
[2026-01-19T08:49:03.676Z] [BOT] ✅ No jobs to archive (all 2939 jobs within 7-day window)
[2026-01-19T08:49:03.694Z] [BOT] 💾 Saved posted_jobs.json: 2939 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:49:06.695Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-19T08:49:06.695Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Design Systems" @ discord
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T08:49:06.949Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Design Systems @ discord in #💻・tech-jobs
  ✅ Industry: Staff Software Engineer, Design Systems @ discord
[2026-01-19T08:49:08.630Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Design Systems @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T08:49:10.132Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Design Systems @ discord (instance #1)
[2026-01-19T08:49:10.132Z] [BOT] 💾 BEFORE ARCHIVING: 2940 jobs in database
[2026-01-19T08:49:10.134Z] [BOT] ✅ No jobs to archive (all 2940 jobs within 7-day window)
[2026-01-19T08:49:10.151Z] [BOT] 💾 Saved posted_jobs.json: 2940 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:49:10.151Z] [BOT] 📍 [ROUTING] "Software Engineer - Identity Access Management" @ ORG_7bc88ebb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T08:49:10.345Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Identity Access Management @ ORG_7bc88ebb in #💻・tech-jobs
[2026-01-19T08:49:10.345Z] [BOT] ✅ Industry: Software Engineer - Identity Access Management @ ORG_7bc88ebb
[2026-01-19T08:49:12.346Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Identity Access Management @ ORG_7bc88ebb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T08:49:13.848Z] [BOT] 💾 Marked as posted: Software Engineer - Identity Access Management @ ORG_7bc88ebb (instance #1)
[2026-01-19T08:49:13.848Z] [BOT] 💾 BEFORE ARCHIVING: 2941 jobs in database
[2026-01-19T08:49:13.850Z] [BOT] ✅ No jobs to archive (all 2941 jobs within 7-day window)
[2026-01-19T08:49:13.868Z] [BOT] 💾 Saved posted_jobs.json: 2941 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:49:13.868Z] [BOT] 📍 [ROUTING] "Senior iOS Engineer, Application Stability & Performance" @ duolingo
[2026-01-19T08:49:13.868Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T08:49:14.039Z] [BOT] ✅ Created forum post: 🏢 Senior iOS Engineer, Application Stability & Performance @ duolingo in #💻・tech-jobs
  ✅ Industry: Senior iOS Engineer, Application Stability & Performance @ duolingo
[2026-01-19T08:49:15.731Z] [BOT] ✅ Created forum post: 🏢 Senior iOS Engineer, Application Stability & Performance @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T08:49:17.233Z] [BOT] 💾 Marked as posted: Senior iOS Engineer, Application Stability & Performance @ duolingo (instance #1)
[2026-01-19T08:49:17.233Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-19T08:49:17.235Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-19T08:49:17.252Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:49:20.253Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T08:49:20.253Z] [BOT] 📍 [ROUTING] "Senior GRC Lead" @ brex
[2026-01-19T08:49:20.254Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T08:49:20.579Z] [BOT] ✅ Created forum post: 🏢 Senior GRC Lead @ brex in #📣・marketing-jobs
[2026-01-19T08:49:20.580Z] [BOT] ✅ Industry: Senior GRC Lead @ brex
[2026-01-19T08:49:22.387Z] [BOT] ✅ Created forum post: 🏢 Senior GRC Lead @ brex in #🗽・new-york
[2026-01-19T08:49:22.388Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-19T08:49:23.889Z] [BOT] 💾 Marked as posted: Senior GRC Lead @ brex (instance #1)
[2026-01-19T08:49:23.890Z] [BOT] 💾 BEFORE ARCHIVING: 2943 jobs in database
[2026-01-19T08:49:23.891Z] [BOT] ✅ No jobs to archive (all 2943 jobs within 7-day window)
[2026-01-19T08:49:23.908Z] [BOT] 💾 Saved posted_jobs.json: 2943 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:49:23.909Z] [BOT] 💾 Marked as posted: Senior GRC Lead @ brex (instance #1)
[2026-01-19T08:49:23.909Z] [BOT] 💾 BEFORE ARCHIVING: 2944 jobs in database
[2026-01-19T08:49:23.911Z] [BOT] ✅ No jobs to archive (all 2944 jobs within 7-day window)
[2026-01-19T08:49:23.928Z] [BOT] 💾 Saved posted_jobs.json: 2944 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:49:26.929Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-19T08:49:26.930Z] [BOT] ⏭️  Skipping duplicate: JID_fba72aa3 (posted within 7 days)
[2026-01-19T08:49:26.930Z] [BOT] ⏭️  Skipping duplicate: JID_7e70a9e2 (posted within 7 days)
[2026-01-19T08:49:26.931Z] [BOT] ⏭️  Skipping duplicate: JID_9a52b1e4 (posted within 7 days)
[2026-01-19T08:49:26.931Z] [BOT] ⏭️  Skipping duplicate: JID_e4d25de5 (posted within 7 days)
[2026-01-19T08:49:26.931Z] [BOT] ⏭️  Skipping duplicate: JID_ed8c8a54 (posted within 7 days)
[2026-01-19T08:49:26.931Z] [BOT] ⏭️  Skipping duplicate: JID_0f96adef (posted within 7 days)
⏭️  Skipping duplicate: JID_89b9b14b (posted within 7 days)
⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
[2026-01-19T08:49:26.932Z] [BOT] ⏭️  Skipping duplicate: JID_ce1f556b (posted within 7 days)
[2026-01-19T08:49:26.932Z] [BOT] ⏭️  Skipping duplicate: JID_a269b1c9 (posted within 7 days)
[2026-01-19T08:49:27.055Z] [BOT] ✅ Loaded pending queue: 2825 total (2805 pending, 20 enriched, 0 posted)
[2026-01-19T08:49:27.250Z] [BOT] ✅ Saved pending queue: 2825 total (2805 pending, 10 enriched, 10 posted)
[2026-01-19T08:49:27.251Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T08:49:27.313Z] [BOT] 📂 Loaded 5085 existing routing entries
[2026-01-19T08:49:27.389Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5095
[2026-01-19T08:49:27.389Z] [BOT] Timestamp: 2026-01-19T08:49:27.365Z
[2026-01-19T08:49:27.389Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T08:49:27.390Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-19T08:49:27.390Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-19T08:49:27.390Z] [BOT] Total posts: 19
   Channels used: 6
[2026-01-19T08:49:27.390Z] [BOT] Top channels:
[2026-01-19T08:49:27.390Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #🗽・new-york: 5 posts
[2026-01-19T08:49:27.390Z] [BOT] 3. #🌉・san-francisco: 4 posts
     4. #💻・tech-jobs: 3 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-19T08:49:27.390Z] [BOT] [STATS] Channel stats saved
[2026-01-19T08:49:29.416Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2695) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*