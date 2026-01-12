# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T19:26:18.315Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T19:25:30.807Z] ========================================
[2026-01-12T19:25:30.809Z] Discord Bot Execution Log
[2026-01-12T19:25:30.809Z] Environment: GitHub Actions
[2026-01-12T19:25:30.809Z] Node Version: v20.19.6
[2026-01-12T19:25:30.809Z] ========================================
[2026-01-12T19:25:30.809Z] Environment Variables Check:
[2026-01-12T19:25:30.809Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T19:25:30.809Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T19:25:30.809Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T19:25:30.810Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T19:25:30.810Z] 
Multi-Channel Configuration:
[2026-01-12T19:25:30.810Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T19:25:30.810Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T19:25:30.810Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T19:25:30.810Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T19:25:30.810Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T19:25:30.810Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T19:25:30.810Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T19:25:30.810Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T19:25:30.810Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T19:25:30.810Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T19:25:30.810Z] 
Data Files Check:
[2026-01-12T19:25:30.812Z] .github/data/new_jobs.json: ✅ Exists (10 items, 196111 bytes)
[2026-01-12T19:25:30.814Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 235219 bytes)
[2026-01-12T19:25:30.814Z] 
========================================
[2026-01-12T19:25:30.814Z] Starting Enhanced Discord Bot...
[2026-01-12T19:25:30.814Z] ========================================
[2026-01-12T19:25:31.319Z] [BOT] ✅ Loaded V2 database: 417 jobs
[2026-01-12T19:25:31.816Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T19:25:31.817Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T19:25:31.817Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T19:25:31.924Z] [BOT] ✅ Loaded pending queue: 2654 total (2634 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive (North Carolina - Corporate) at verkada
[2026-01-12T19:25:31.925Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T19:25:31.926Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T19:25:31.926Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T19:25:31.927Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-12T19:25:31.927Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T19:25:31.932Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-12T19:25:31.932Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (North Carolina - Corporate)" @ verkada
[2026-01-12T19:25:31.932Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:25:31.937Z] [BOT ERROR] (node:2347) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T19:25:32.462Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (North Carolina - Corporate) @ verkada in #💲・sales-jobs
[2026-01-12T19:25:32.463Z] [BOT] ✅ Industry: Enterprise Account Executive (North Carolina - Corporate) @ verkada
[2026-01-12T19:25:33.964Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (North Carolina - Corporate) @ verkada (instance #1)
[2026-01-12T19:25:33.964Z] [BOT] 💾 BEFORE ARCHIVING: 418 jobs in database
[2026-01-12T19:25:33.965Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T19:25:33.971Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
✅ Archiving complete: 2 archived, 416 active
[2026-01-12T19:25:33.975Z] [BOT] 💾 Saved posted_jobs.json: 416 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:25:33.976Z] [BOT] 📍 [ROUTING] "Sales Engineer, Startups " @ vercel
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:25:34.223Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer, Startups  @ vercel in #💲・sales-jobs
[2026-01-12T19:25:34.223Z] [BOT] ✅ Industry: Sales Engineer, Startups  @ vercel
[2026-01-12T19:25:36.282Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer, Startups  @ vercel in #🌉・san-francisco
[2026-01-12T19:25:36.282Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T19:25:37.782Z] [BOT] 💾 Marked as posted: Sales Engineer, Startups  @ vercel (instance #1)
[2026-01-12T19:25:37.782Z] [BOT] 💾 BEFORE ARCHIVING: 417 jobs in database
[2026-01-12T19:25:37.782Z] [BOT] ✅ No jobs to archive (all 417 jobs within 7-day window)
[2026-01-12T19:25:37.786Z] [BOT] 💾 Saved posted_jobs.json: 417 active jobs
[2026-01-12T19:25:37.786Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:25:37.786Z] [BOT] 📍 [ROUTING] "Technical Accounting" @ anthropic
[2026-01-12T19:25:37.787Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:25:37.982Z] [BOT] ✅ Created forum post: 🏢 Technical Accounting @ anthropic in #💲・sales-jobs
[2026-01-12T19:25:37.982Z] [BOT] ✅ Industry: Technical Accounting @ anthropic
[2026-01-12T19:25:39.658Z] [BOT] ✅ Created forum post: 🏢 Technical Accounting @ anthropic in #🌉・san-francisco
[2026-01-12T19:25:39.658Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T19:25:41.159Z] [BOT] 💾 Marked as posted: Technical Accounting @ anthropic (instance #1)
[2026-01-12T19:25:41.159Z] [BOT] 💾 BEFORE ARCHIVING: 418 jobs in database
[2026-01-12T19:25:41.159Z] [BOT] ✅ No jobs to archive (all 418 jobs within 7-day window)
[2026-01-12T19:25:41.164Z] [BOT] 💾 Saved posted_jobs.json: 418 active jobs
[2026-01-12T19:25:41.164Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:25:41.164Z] [BOT] 📍 [ROUTING] "Business Value Manager - Enterprise East" @ datadog
[2026-01-12T19:25:41.164Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:25:41.405Z] [BOT] ✅ Created forum post: 🏢 Business Value Manager - Enterprise East @ datadog in #💲・sales-jobs
[2026-01-12T19:25:41.405Z] [BOT] ✅ Industry: Business Value Manager - Enterprise East @ datadog
[2026-01-12T19:25:43.294Z] [BOT] ✅ Created forum post: 🏢 Business Value Manager - Enterprise East @ datadog in #🗽・new-york
[2026-01-12T19:25:43.294Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T19:25:44.794Z] [BOT] 💾 Marked as posted: Business Value Manager - Enterprise East @ datadog (instance #1)
[2026-01-12T19:25:44.794Z] [BOT] 💾 BEFORE ARCHIVING: 419 jobs in database
[2026-01-12T19:25:44.795Z] [BOT] ✅ No jobs to archive (all 419 jobs within 7-day window)
[2026-01-12T19:25:44.799Z] [BOT] 💾 Saved posted_jobs.json: 419 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:25:44.799Z] [BOT] 📍 [ROUTING] "Commercial Account Executive" @ datadog
[2026-01-12T19:25:44.799Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:25:45.154Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive @ datadog in #💲・sales-jobs
  ✅ Industry: Commercial Account Executive @ datadog
[2026-01-12T19:25:46.654Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ datadog (instance #1)
[2026-01-12T19:25:46.654Z] [BOT] 💾 BEFORE ARCHIVING: 420 jobs in database
[2026-01-12T19:25:46.654Z] [BOT] ✅ No jobs to archive (all 420 jobs within 7-day window)
[2026-01-12T19:25:46.658Z] [BOT] 💾 Saved posted_jobs.json: 420 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:25:46.658Z] [BOT] 💾 Marked as posted: Commercial Account Executive - LATAM (Portuguese Speaking) @ datadog (instance #1)
[2026-01-12T19:25:46.658Z] [BOT] 💾 BEFORE ARCHIVING: 421 jobs in database
[2026-01-12T19:25:46.658Z] [BOT] ✅ No jobs to archive (all 421 jobs within 7-day window)
[2026-01-12T19:25:46.662Z] [BOT] 💾 Saved posted_jobs.json: 421 active jobs
[2026-01-12T19:25:46.662Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:25:49.662Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-12T19:25:49.663Z] [BOT] 📍 [ROUTING] "ML Infrastructure Engineer, Safeguards" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T19:25:49.663Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:25:49.830Z] [BOT] ✅ Created forum post: 🏢 ML Infrastructure Engineer, Safeguards @ anthropic in #🤖・ai-jobs
  ✅ Industry: ML Infrastructure Engineer, Safeguards @ anthropic
[2026-01-12T19:25:51.612Z] [BOT] ✅ Created forum post: 🏢 ML Infrastructure Engineer, Safeguards @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T19:25:53.114Z] [BOT] 💾 Marked as posted: ML Infrastructure Engineer, Safeguards @ anthropic (instance #1)
[2026-01-12T19:25:53.114Z] [BOT] 💾 BEFORE ARCHIVING: 422 jobs in database
[2026-01-12T19:25:53.115Z] [BOT] ✅ No jobs to archive (all 422 jobs within 7-day window)
[2026-01-12T19:25:53.118Z] [BOT] 💾 Saved posted_jobs.json: 422 active jobs
[2026-01-12T19:25:53.118Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:25:53.118Z] [BOT] 📍 [ROUTING] "Software Engineer, Labs" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-12T19:25:53.119Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:25:55.279Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Labs @ anthropic in #🤖・ai-jobs
  ✅ Industry: Software Engineer, Labs @ anthropic
[2026-01-12T19:25:56.966Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Labs @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T19:25:58.468Z] [BOT] 💾 Marked as posted: Software Engineer, Labs @ anthropic (instance #1)
[2026-01-12T19:25:58.468Z] [BOT] 💾 BEFORE ARCHIVING: 423 jobs in database
[2026-01-12T19:25:58.468Z] [BOT] ✅ No jobs to archive (all 423 jobs within 7-day window)
[2026-01-12T19:25:58.472Z] [BOT] 💾 Saved posted_jobs.json: 423 active jobs
[2026-01-12T19:25:58.472Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:25:58.473Z] [BOT] 📍 [ROUTING] "AI Research Engineer – Datadog AI Research (DAIR)" @ datadog
[2026-01-12T19:25:58.473Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:25:58.939Z] [BOT] ✅ Created forum post: 🏢 AI Research Engineer – Datadog AI Research (DAIR) @ datadog in #🤖・ai-jobs
[2026-01-12T19:25:58.939Z] [BOT] ✅ Industry: AI Research Engineer – Datadog AI Research (DAIR) @ datadog
[2026-01-12T19:26:00.647Z] [BOT] ✅ Created forum post: 🏢 AI Research Engineer – Datadog AI Research (DAIR) @ datadog in #🗽・new-york
[2026-01-12T19:26:00.647Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T19:26:02.147Z] [BOT] 💾 Marked as posted: AI Research Engineer – Datadog AI Research (DAIR) @ datadog (instance #1)
[2026-01-12T19:26:02.148Z] [BOT] 💾 BEFORE ARCHIVING: 424 jobs in database
[2026-01-12T19:26:02.148Z] [BOT] ✅ No jobs to archive (all 424 jobs within 7-day window)
[2026-01-12T19:26:02.152Z] [BOT] 💾 Saved posted_jobs.json: 424 active jobs
[2026-01-12T19:26:02.152Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:26:02.152Z] [BOT] 📍 [ROUTING] "AI Research Scientist – Datadog AI Research (DAIR)" @ datadog
[2026-01-12T19:26:02.153Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:26:02.421Z] [BOT] ✅ Created forum post: 🏢 AI Research Scientist – Datadog AI Research (DAIR) @ datadog in #🤖・ai-jobs
[2026-01-12T19:26:02.421Z] [BOT] ✅ Industry: AI Research Scientist – Datadog AI Research (DAIR) @ datadog
[2026-01-12T19:26:04.309Z] [BOT] ✅ Created forum post: 🏢 AI Research Scientist – Datadog AI Research (DAIR) @ datadog in #🗽・new-york
[2026-01-12T19:26:04.309Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T19:26:05.810Z] [BOT] 💾 Marked as posted: AI Research Scientist – Datadog AI Research (DAIR) @ datadog (instance #1)
[2026-01-12T19:26:05.810Z] [BOT] 💾 BEFORE ARCHIVING: 425 jobs in database
[2026-01-12T19:26:05.810Z] [BOT] ✅ No jobs to archive (all 425 jobs within 7-day window)
[2026-01-12T19:26:05.815Z] [BOT] 💾 Saved posted_jobs.json: 425 active jobs
[2026-01-12T19:26:05.815Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:26:08.815Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2026-01-12T19:26:08.815Z] [BOT] 📍 [ROUTING] "Candidate Experience Coordinator (12-month Contract)" @ brex
[2026-01-12T19:26:08.815Z] [BOT] Category: SUPPLY-CHAIN (matched: "logistics")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-12T19:26:09.064Z] [BOT] ✅ Created forum post: 🏢 Candidate Experience Coordinator (12-month Contract) @ brex in #🏗️・JID_b7c6683f
  ✅ Industry: Candidate Experience Coordinator (12-month Contract) @ brex
[2026-01-12T19:26:10.753Z] [BOT] ✅ Created forum post: 🏢 Candidate Experience Coordinator (12-month Contract) @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T19:26:12.254Z] [BOT] 💾 Marked as posted: Candidate Experience Coordinator (12-month Contract) @ brex (instance #1)
[2026-01-12T19:26:12.254Z] [BOT] 💾 BEFORE ARCHIVING: 426 jobs in database
[2026-01-12T19:26:12.254Z] [BOT] ✅ No jobs to archive (all 426 jobs within 7-day window)
[2026-01-12T19:26:12.259Z] [BOT] 💾 Saved posted_jobs.json: 426 active jobs
[2026-01-12T19:26:12.259Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:26:15.259Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T19:26:15.260Z] [BOT] ⏭️  Skipping duplicate: JID_5b3f9c27 (posted within 7 days)
[2026-01-12T19:26:15.260Z] [BOT] ⏭️  Skipping duplicate: JID_0fbdd3f0 (posted within 7 days)
[2026-01-12T19:26:15.260Z] [BOT] ⏭️  Skipping duplicate: JID_6ef7d85e (posted within 7 days)
[2026-01-12T19:26:15.260Z] [BOT] ⏭️  Skipping duplicate: JID_c700fd53 (posted within 7 days)
⏭️  Skipping duplicate: JID_1f2e2955 (posted within 7 days)
[2026-01-12T19:26:15.260Z] [BOT] ⏭️  Skipping duplicate: JID_b09edb4f (posted within 7 days)
⏭️  Skipping duplicate: JID_dcc2a209 (posted within 7 days)
⏭️  Skipping duplicate: JID_3f5157b7 (posted within 7 days)
[2026-01-12T19:26:15.260Z] [BOT] ⏭️  Skipping duplicate: JID_f786896a (posted within 7 days)
[2026-01-12T19:26:15.260Z] [BOT] ⏭️  Skipping duplicate: JID_05c70ebf (posted within 7 days)
[2026-01-12T19:26:15.375Z] [BOT] ✅ Loaded pending queue: 2654 total (2634 pending, 20 enriched, 0 posted)
[2026-01-12T19:26:15.536Z] [BOT] ✅ Saved pending queue: 2654 total (2634 pending, 10 enriched, 10 posted)
[2026-01-12T19:26:15.537Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T19:26:15.586Z] [BOT] 📂 Loaded 2612 existing routing entries
[2026-01-12T19:26:15.640Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-12T19:26:15.640Z] [BOT] Total entries: 2622
   Timestamp: 2026-01-12T19:26:15.629Z
[2026-01-12T19:26:15.640Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T19:26:15.641Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-12T19:26:15.641Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-12T19:26:15.641Z] [BOT] Total posts: 18
   Channels used: 5
   Top channels:
     1. #💲・sales-jobs: 5 posts
[2026-01-12T19:26:15.641Z] [BOT] 2. #🌉・san-francisco: 5 posts
     3. #🤖・ai-jobs: 4 posts
     4. #🗽・new-york: 3 posts
     5. #🏗️・JID_b7c6683f: 1 posts
[2026-01-12T19:26:15.641Z] [BOT] [STATS] Channel stats saved
[2026-01-12T19:26:17.666Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2347) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*