# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T18:06:07.024Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T18:05:22.518Z] ========================================
[2026-01-03T18:05:22.520Z] Discord Bot Execution Log
[2026-01-03T18:05:22.520Z] Environment: GitHub Actions
[2026-01-03T18:05:22.520Z] Node Version: v20.19.6
[2026-01-03T18:05:22.520Z] ========================================
[2026-01-03T18:05:22.520Z] Environment Variables Check:
[2026-01-03T18:05:22.520Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T18:05:22.520Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T18:05:22.520Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T18:05:22.520Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T18:05:22.520Z] 
Multi-Channel Configuration:
[2026-01-03T18:05:22.520Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T18:05:22.521Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T18:05:22.521Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T18:05:22.521Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T18:05:22.521Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T18:05:22.521Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T18:05:22.521Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T18:05:22.521Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T18:05:22.521Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T18:05:22.521Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T18:05:22.521Z] 
Data Files Check:
[2026-01-03T18:05:22.522Z] .github/data/new_jobs.json: ✅ Exists (10 items, 143392 bytes)
[2026-01-03T18:05:22.525Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 346973 bytes)
[2026-01-03T18:05:22.525Z] 
========================================
[2026-01-03T18:05:22.525Z] Starting Enhanced Discord Bot...
[2026-01-03T18:05:22.525Z] ========================================
[2026-01-03T18:05:23.053Z] [BOT] ✅ Loaded V2 database: 673 jobs
[2026-01-03T18:05:23.898Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T18:05:23.899Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T18:05:23.899Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T18:05:23.900Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T18:05:23.977Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T18:05:24.067Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T18:05:24.069Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T18:05:24.070Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T18:05:24.070Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T18:05:24.071Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2026-01-03T18:05:24.071Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Security Operations Engineer  @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
[2026-01-03T18:05:24.071Z] [BOT] ⏸️ Limiting to 10 jobs this run, 3 deferred for next run
📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T18:05:24.076Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-03T18:05:24.076Z] [BOT] 📍 [ROUTING] "Senior Financial Analyst" @ discord
[2026-01-03T18:05:24.076Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T18:05:24.081Z] [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T18:05:24.334Z] [BOT] ✅ Created forum post: 🏢 Senior Financial Analyst @ discord in #💰・finance-jobs
[2026-01-03T18:05:24.334Z] [BOT] ✅ Industry: Senior Financial Analyst @ discord
[2026-01-03T18:05:26.065Z] [BOT] ✅ Created forum post: 🏢 Senior Financial Analyst @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T18:05:27.566Z] [BOT] 💾 Marked as posted: Senior Financial Analyst @ discord (instance #1)
[2026-01-03T18:05:27.566Z] [BOT] 💾 BEFORE ARCHIVING: 674 jobs in database
[2026-01-03T18:05:27.567Z] [BOT] ✅ No jobs to archive (all 674 jobs within 7-day window)
[2026-01-03T18:05:27.577Z] [BOT] 💾 Saved posted_jobs.json: 674 active jobs
[2026-01-03T18:05:27.577Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:05:30.578Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-03T18:05:30.578Z] [BOT] 📍 [ROUTING] "Product Designer, Claude Code " @ anthropic
[2026-01-03T18:05:30.578Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T18:05:30.887Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Claude Code  @ anthropic in #💲・sales-jobs
  ✅ Industry: Product Designer, Claude Code  @ anthropic
[2026-01-03T18:05:32.661Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Claude Code  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T18:05:34.161Z] [BOT] 💾 Marked as posted: Product Designer, Claude Code  @ anthropic (instance #1)
[2026-01-03T18:05:34.161Z] [BOT] 💾 BEFORE ARCHIVING: 675 jobs in database
[2026-01-03T18:05:34.161Z] [BOT] ✅ No jobs to archive (all 675 jobs within 7-day window)
[2026-01-03T18:05:34.167Z] [BOT] 💾 Saved posted_jobs.json: 675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:05:37.167Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-03T18:05:37.167Z] [BOT] 📍 [ROUTING] "Infrastructure Engineer, Sandboxing" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-01-03T18:05:37.168Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T18:05:38.304Z] [BOT] ✅ Created forum post: 🏢 Infrastructure Engineer, Sandboxing @ anthropic in #💻・tech-jobs
  ✅ Industry: Infrastructure Engineer, Sandboxing @ anthropic
[2026-01-03T18:05:39.998Z] [BOT] ✅ Created forum post: 🏢 Infrastructure Engineer, Sandboxing @ anthropic in #🌉・san-francisco
[2026-01-03T18:05:39.998Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T18:05:41.499Z] [BOT] 💾 Marked as posted: Infrastructure Engineer, Sandboxing @ anthropic (instance #1)
[2026-01-03T18:05:41.499Z] [BOT] 💾 BEFORE ARCHIVING: 676 jobs in database
[2026-01-03T18:05:41.500Z] [BOT] ✅ No jobs to archive (all 676 jobs within 7-day window)
[2026-01-03T18:05:41.506Z] [BOT] 💾 Saved posted_jobs.json: 676 active jobs
[2026-01-03T18:05:41.506Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:05:41.507Z] [BOT] 📍 [ROUTING] "Software Engineer, Sandboxing (Systems)" @ anthropic
[2026-01-03T18:05:41.507Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T18:05:41.754Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Sandboxing (Systems) @ anthropic in #💻・tech-jobs
[2026-01-03T18:05:41.754Z] [BOT] ✅ Industry: Software Engineer, Sandboxing (Systems) @ anthropic
[2026-01-03T18:05:44.067Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Sandboxing (Systems) @ anthropic in #🌉・san-francisco
[2026-01-03T18:05:44.067Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T18:05:45.567Z] [BOT] 💾 Marked as posted: Software Engineer, Sandboxing (Systems) @ anthropic (instance #1)
[2026-01-03T18:05:45.568Z] [BOT] 💾 BEFORE ARCHIVING: 677 jobs in database
[2026-01-03T18:05:45.569Z] [BOT] ✅ No jobs to archive (all 677 jobs within 7-day window)
[2026-01-03T18:05:45.575Z] [BOT] 💾 Saved posted_jobs.json: 677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:05:45.576Z] [BOT] 📍 [ROUTING] "Senior Security Operations Engineer " @ brex
[2026-01-03T18:05:45.576Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T18:05:45.926Z] [BOT] ✅ Created forum post: 🏢 Senior Security Operations Engineer  @ brex in #💻・tech-jobs
[2026-01-03T18:05:45.926Z] [BOT] ✅ Industry: Senior Security Operations Engineer  @ brex
[2026-01-03T18:05:47.623Z] [BOT] ✅ Created forum post: 🏢 Senior Security Operations Engineer  @ brex in #🌧️・seattle
[2026-01-03T18:05:47.624Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-03T18:05:49.125Z] [BOT] 💾 Marked as posted: Senior Security Operations Engineer  @ brex (instance #1)
[2026-01-03T18:05:49.125Z] [BOT] 💾 BEFORE ARCHIVING: 678 jobs in database
[2026-01-03T18:05:49.126Z] [BOT] ✅ No jobs to archive (all 678 jobs within 7-day window)
[2026-01-03T18:05:49.132Z] [BOT] 💾 Saved posted_jobs.json: 678 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:05:49.133Z] [BOT] 💾 Marked as posted: Senior Security Operations Engineer  @ brex (instance #1)
[2026-01-03T18:05:49.133Z] [BOT] 💾 BEFORE ARCHIVING: 679 jobs in database
[2026-01-03T18:05:49.133Z] [BOT] ✅ No jobs to archive (all 679 jobs within 7-day window)
[2026-01-03T18:05:49.139Z] [BOT] 💾 Saved posted_jobs.json: 679 active jobs
[2026-01-03T18:05:49.139Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Security Operations Engineer  @ brex (instance #1)
[2026-01-03T18:05:49.139Z] [BOT] 💾 BEFORE ARCHIVING: 680 jobs in database
[2026-01-03T18:05:49.140Z] [BOT] ✅ No jobs to archive (all 680 jobs within 7-day window)
[2026-01-03T18:05:49.145Z] [BOT] 💾 Saved posted_jobs.json: 680 active jobs
[2026-01-03T18:05:49.145Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:05:52.146Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T18:05:52.147Z] [BOT] 📍 [ROUTING] "Event Planner I - Hosted Events" @ gohighlevel
[2026-01-03T18:05:52.147Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T18:05:52.405Z] [BOT] ✅ Created forum post: 🏢 Event Planner I - Hosted Events @ gohighlevel in #🤖・ai-jobs
[2026-01-03T18:05:52.405Z] [BOT] ✅ Industry: Event Planner I - Hosted Events @ gohighlevel
[2026-01-03T18:05:53.906Z] [BOT] 💾 Marked as posted: Event Planner I - Hosted Events @ gohighlevel (instance #1)
[2026-01-03T18:05:53.906Z] [BOT] 💾 BEFORE ARCHIVING: 681 jobs in database
[2026-01-03T18:05:53.907Z] [BOT] ✅ No jobs to archive (all 681 jobs within 7-day window)
[2026-01-03T18:05:53.912Z] [BOT] 💾 Saved posted_jobs.json: 681 active jobs
[2026-01-03T18:05:53.913Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Event Planner I - Sponsored Events @ gohighlevel (instance #1)
💾 BEFORE ARCHIVING: 682 jobs in database
[2026-01-03T18:05:53.913Z] [BOT] ✅ No jobs to archive (all 682 jobs within 7-day window)
[2026-01-03T18:05:53.919Z] [BOT] 💾 Saved posted_jobs.json: 682 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:05:56.920Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2026-01-03T18:05:56.921Z] [BOT] 📍 [ROUTING] "Recruiting Coordinator (12-month Contract)" @ brex
[2026-01-03T18:05:56.921Z] [BOT] Category: SUPPLY-CHAIN (matched: "logistics")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-03T18:05:57.281Z] [BOT] ✅ Created forum post: 🏢 Recruiting Coordinator (12-month Contract) @ brex in #🏗️・JID_b7c6683f
  ✅ Industry: Recruiting Coordinator (12-month Contract) @ brex
[2026-01-03T18:05:59.026Z] [BOT] ✅ Created forum post: 🏢 Recruiting Coordinator (12-month Contract) @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T18:06:00.526Z] [BOT] 💾 Marked as posted: Recruiting Coordinator (12-month Contract) @ brex (instance #1)
[2026-01-03T18:06:00.526Z] [BOT] 💾 BEFORE ARCHIVING: 683 jobs in database
[2026-01-03T18:06:00.527Z] [BOT] ✅ No jobs to archive (all 683 jobs within 7-day window)
[2026-01-03T18:06:00.532Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
[2026-01-03T18:06:00.533Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:06:03.534Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2026-01-03T18:06:03.534Z] [BOT] ⏭️  Skipping duplicate: JID_b6ce3b8d (posted within 7 days)
[2026-01-03T18:06:03.534Z] [BOT] ⏭️  Skipping duplicate: JID_8071fa01 (posted within 7 days)
[2026-01-03T18:06:03.534Z] [BOT] ⏭️  Skipping duplicate: JID_37f991dd (posted within 7 days)
[2026-01-03T18:06:03.534Z] [BOT] ⏭️  Skipping duplicate: JID_59f7845f (posted within 7 days)
[2026-01-03T18:06:03.534Z] [BOT] ⏭️  Skipping duplicate: JID_376daae5 (posted within 7 days)
[2026-01-03T18:06:03.534Z] [BOT] ⏭️  Skipping duplicate: JID_70cd8084 (posted within 7 days)
[2026-01-03T18:06:03.535Z] [BOT] ⏭️  Skipping duplicate: JID_1f2e2955 (posted within 7 days)
[2026-01-03T18:06:03.590Z] [BOT] ✅ Loaded pending queue: 616 total (596 pending, 20 enriched, 0 posted)
[2026-01-03T18:06:03.650Z] [BOT] ✅ Saved pending queue: 616 total (596 pending, 13 enriched, 7 posted)
📋 Updated queue: marked 7 jobs as posted
[2026-01-03T18:06:03.650Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T18:06:03.696Z] [BOT] 📂 Loaded 1637 existing routing entries
[2026-01-03T18:06:03.745Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
[2026-01-03T18:06:03.745Z] [BOT] Total entries: 1644
   Timestamp: 2026-01-03T18:06:03.738Z
[2026-01-03T18:06:03.746Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T18:06:03.746Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-03T18:06:03.746Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T18:06:03.746Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 5 posts
     2. #💻・tech-jobs: 3 posts
[2026-01-03T18:06:03.746Z] [BOT] 3. #💰・finance-jobs: 1 posts
     4. #💲・sales-jobs: 1 posts
     5. #🌧️・seattle: 1 posts
[2026-01-03T18:06:03.747Z] [BOT] [STATS] Channel stats saved
[2026-01-03T18:06:05.762Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*