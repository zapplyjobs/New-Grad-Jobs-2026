# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T20:27:09.296Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T20:26:15.433Z] ========================================
[2026-01-12T20:26:15.435Z] Discord Bot Execution Log
[2026-01-12T20:26:15.435Z] Environment: GitHub Actions
[2026-01-12T20:26:15.435Z] Node Version: v20.19.6
[2026-01-12T20:26:15.435Z] ========================================
[2026-01-12T20:26:15.435Z] Environment Variables Check:
[2026-01-12T20:26:15.435Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T20:26:15.435Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T20:26:15.435Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T20:26:15.435Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T20:26:15.436Z] 
Multi-Channel Configuration:
[2026-01-12T20:26:15.436Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T20:26:15.436Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T20:26:15.436Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T20:26:15.436Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T20:26:15.436Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T20:26:15.436Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T20:26:15.436Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T20:26:15.436Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T20:26:15.436Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T20:26:15.436Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T20:26:15.436Z] 
Data Files Check:
[2026-01-12T20:26:15.438Z] .github/data/new_jobs.json: ✅ Exists (10 items, 164582 bytes)
[2026-01-12T20:26:15.440Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 257784 bytes)
[2026-01-12T20:26:15.440Z] 
========================================
[2026-01-12T20:26:15.440Z] Starting Enhanced Discord Bot...
[2026-01-12T20:26:15.440Z] ========================================
[2026-01-12T20:26:15.962Z] [BOT] ✅ Loaded V2 database: 465 jobs
[2026-01-12T20:26:16.351Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T20:26:16.351Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T20:26:16.351Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T20:26:16.461Z] [BOT] ✅ Loaded pending queue: 2655 total (2635 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Global Safety & Security Senior Manager - NYC at datadog
[2026-01-12T20:26:16.463Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T20:26:16.463Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T20:26:16.463Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T20:26:16.464Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-12T20:26:16.464Z] [BOT] (4 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Major Account Manager @ datadog: remote, boston, massachusetts, usa; new york, new york, usa
   - Manager 1, Technical Account Management - Denver @ datadog: denver, colorado, usa, new york, new york, usa
   - Manager 2, Premier Support Engineering -  Boston @ datadog: boston, massachusetts, usa, new york, new york, usa
[2026-01-12T20:26:16.465Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T20:26:16.469Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-12T20:26:16.469Z] [BOT] 📍 [ROUTING] "Global Safety & Security Senior Manager - NYC" @ datadog
[2026-01-12T20:26:16.470Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T20:26:16.474Z] [BOT ERROR] (node:2348) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T20:26:16.624Z] [BOT] ✅ Created forum post: 🏢 Global Safety & Security Senior Manager - NYC @ datadog in #💻・tech-jobs
[2026-01-12T20:26:16.624Z] [BOT] ✅ Industry: Global Safety & Security Senior Manager - NYC @ datadog
[2026-01-12T20:26:18.379Z] [BOT] ✅ Created forum post: 🏢 Global Safety & Security Senior Manager - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T20:26:19.881Z] [BOT] 💾 Marked as posted: Global Safety & Security Senior Manager - NYC @ datadog (instance #1)
[2026-01-12T20:26:19.881Z] [BOT] 💾 BEFORE ARCHIVING: 466 jobs in database
[2026-01-12T20:26:19.882Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T20:26:19.887Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-12T20:26:19.887Z] [BOT] ✅ Archiving complete: 1 archived, 465 active
[2026-01-12T20:26:19.906Z] [BOT] 💾 Saved posted_jobs.json: 465 active jobs
[2026-01-12T20:26:19.907Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:26:19.907Z] [BOT] 📍 [ROUTING] "Information Security Analyst II" @ datadog
[2026-01-12T20:26:19.907Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T20:26:20.155Z] [BOT] ✅ Created forum post: 🏢 Information Security Analyst II @ datadog in #💻・tech-jobs
[2026-01-12T20:26:20.155Z] [BOT] ✅ Industry: Information Security Analyst II @ datadog
[2026-01-12T20:26:22.013Z] [BOT] ✅ Created forum post: 🏢 Information Security Analyst II @ datadog in #🗽・new-york
[2026-01-12T20:26:22.014Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T20:26:23.515Z] [BOT] 💾 Marked as posted: Information Security Analyst II @ datadog (instance #1)
[2026-01-12T20:26:23.515Z] [BOT] 💾 BEFORE ARCHIVING: 466 jobs in database
[2026-01-12T20:26:23.515Z] [BOT] ✅ No jobs to archive (all 466 jobs within 7-day window)
[2026-01-12T20:26:23.519Z] [BOT] 💾 Saved posted_jobs.json: 466 active jobs
[2026-01-12T20:26:23.519Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:26:26.520Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-12T20:26:26.521Z] [BOT] 📍 [ROUTING] "GTM Strategy and Operations Analyst - Channels & Alliances" @ datadog
[2026-01-12T20:26:26.521Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:26:26.745Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy and Operations Analyst - Channels & Alliances @ datadog in #💲・sales-jobs
[2026-01-12T20:26:26.745Z] [BOT] ✅ Industry: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog
[2026-01-12T20:26:28.456Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy and Operations Analyst - Channels & Alliances @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T20:26:29.957Z] [BOT] 💾 Marked as posted: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog (instance #1)
[2026-01-12T20:26:29.957Z] [BOT] 💾 BEFORE ARCHIVING: 467 jobs in database
[2026-01-12T20:26:29.958Z] [BOT] ✅ No jobs to archive (all 467 jobs within 7-day window)
[2026-01-12T20:26:29.962Z] [BOT] 💾 Saved posted_jobs.json: 467 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:26:29.962Z] [BOT] 📍 [ROUTING] "Key Accounts Executive (East)" @ datadog
[2026-01-12T20:26:29.962Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:26:30.386Z] [BOT] ✅ Created forum post: 🏢 Key Accounts Executive (East) @ datadog in #💲・sales-jobs
  ✅ Industry: Key Accounts Executive (East) @ datadog
[2026-01-12T20:26:32.139Z] [BOT] ✅ Created forum post: 🏢 Key Accounts Executive (East) @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T20:26:33.640Z] [BOT] 💾 Marked as posted: Key Accounts Executive (East) @ datadog (instance #1)
[2026-01-12T20:26:33.641Z] [BOT] 💾 BEFORE ARCHIVING: 468 jobs in database
[2026-01-12T20:26:33.642Z] [BOT] ✅ No jobs to archive (all 468 jobs within 7-day window)
[2026-01-12T20:26:33.646Z] [BOT] 💾 Saved posted_jobs.json: 468 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:26:33.647Z] [BOT] 📍 [ROUTING] "Major Account Manager" @ datadog
[2026-01-12T20:26:33.647Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:26:33.813Z] [BOT] ✅ Created forum post: 🏢 Major Account Manager @ datadog in #💲・sales-jobs
  ✅ Industry: Major Account Manager @ datadog
[2026-01-12T20:26:35.506Z] [BOT] ✅ Created forum post: 🏢 Major Account Manager @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-12T20:26:37.007Z] [BOT] 💾 Marked as posted: Major Account Manager @ datadog (instance #1)
[2026-01-12T20:26:37.008Z] [BOT] 💾 BEFORE ARCHIVING: 469 jobs in database
[2026-01-12T20:26:37.008Z] [BOT] ✅ No jobs to archive (all 469 jobs within 7-day window)
[2026-01-12T20:26:37.013Z] [BOT] 💾 Saved posted_jobs.json: 469 active jobs
[2026-01-12T20:26:37.013Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:26:37.013Z] [BOT] 💾 Marked as posted: Major Account Manager @ datadog (instance #1)
[2026-01-12T20:26:37.013Z] [BOT] 💾 BEFORE ARCHIVING: 470 jobs in database
[2026-01-12T20:26:37.013Z] [BOT] ✅ No jobs to archive (all 470 jobs within 7-day window)
[2026-01-12T20:26:37.017Z] [BOT] 💾 Saved posted_jobs.json: 470 active jobs
[2026-01-12T20:26:37.017Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:26:37.018Z] [BOT] 📍 [ROUTING] "Manager 1, Technical Account Management - Denver" @ datadog
[2026-01-12T20:26:37.018Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:26:37.358Z] [BOT] ✅ Created forum post: 🏢 Manager 1, Technical Account Management - Denver @ datadog in #💲・sales-jobs
  ✅ Industry: Manager 1, Technical Account Management - Denver @ datadog
[2026-01-12T20:26:38.859Z] [BOT] 💾 Marked as posted: Manager 1, Technical Account Management - Denver @ datadog (instance #1)
[2026-01-12T20:26:38.859Z] [BOT] 💾 BEFORE ARCHIVING: 471 jobs in database
[2026-01-12T20:26:38.859Z] [BOT] ✅ No jobs to archive (all 471 jobs within 7-day window)
[2026-01-12T20:26:38.864Z] [BOT] 💾 Saved posted_jobs.json: 471 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:26:38.864Z] [BOT] 💾 Marked as posted: Manager 1, Technical Account Management - New York @ datadog (instance #1)
[2026-01-12T20:26:38.864Z] [BOT] 💾 BEFORE ARCHIVING: 472 jobs in database
[2026-01-12T20:26:38.865Z] [BOT] ✅ No jobs to archive (all 472 jobs within 7-day window)
[2026-01-12T20:26:38.868Z] [BOT] 💾 Saved posted_jobs.json: 472 active jobs
[2026-01-12T20:26:38.869Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:26:41.869Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-12T20:26:41.870Z] [BOT] 📍 [ROUTING] "Inclusion Program Manager - NYC" @ datadog
[2026-01-12T20:26:41.870Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-12T20:26:42.243Z] [BOT] ✅ Created forum post: 🏢 Inclusion Program Manager - NYC @ datadog in #📊・JID_9910249a
  ✅ Industry: Inclusion Program Manager - NYC @ datadog
[2026-01-12T20:26:45.315Z] [BOT] ✅ Created forum post: 🏢 Inclusion Program Manager - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T20:26:46.816Z] [BOT] 💾 Marked as posted: Inclusion Program Manager - NYC @ datadog (instance #1)
[2026-01-12T20:26:46.816Z] [BOT] 💾 BEFORE ARCHIVING: 473 jobs in database
[2026-01-12T20:26:46.816Z] [BOT] ✅ No jobs to archive (all 473 jobs within 7-day window)
[2026-01-12T20:26:46.820Z] [BOT] 💾 Saved posted_jobs.json: 473 active jobs
[2026-01-12T20:26:46.820Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:26:49.821Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-12T20:26:49.822Z] [BOT] 📍 [ROUTING] "Internal Communications Specialist - NYC" @ datadog
[2026-01-12T20:26:49.822Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T20:26:49.994Z] [BOT] ✅ Created forum post: 🏢 Internal Communications Specialist - NYC @ datadog in #🤖・ai-jobs
[2026-01-12T20:26:49.994Z] [BOT] ✅ Industry: Internal Communications Specialist - NYC @ datadog
[2026-01-12T20:26:51.785Z] [BOT] ✅ Created forum post: 🏢 Internal Communications Specialist - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T20:26:53.286Z] [BOT] 💾 Marked as posted: Internal Communications Specialist - NYC @ datadog (instance #1)
[2026-01-12T20:26:53.286Z] [BOT] 💾 BEFORE ARCHIVING: 474 jobs in database
[2026-01-12T20:26:53.287Z] [BOT] ✅ No jobs to archive (all 474 jobs within 7-day window)
[2026-01-12T20:26:53.291Z] [BOT] 💾 Saved posted_jobs.json: 474 active jobs
[2026-01-12T20:26:53.292Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:26:53.292Z] [BOT] 📍 [ROUTING] "Leadership Training Manager" @ datadog
   Category: AI (matched: "machine learning")
[2026-01-12T20:26:53.292Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-12T20:26:53.473Z] [BOT] ✅ Created forum post: 🏢 Leadership Training Manager @ datadog in #🤖・ai-jobs
[2026-01-12T20:26:53.473Z] [BOT] ✅ Industry: Leadership Training Manager @ datadog
[2026-01-12T20:26:55.263Z] [BOT] ✅ Created forum post: 🏢 Leadership Training Manager @ datadog in #🗽・new-york
[2026-01-12T20:26:55.263Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T20:26:56.763Z] [BOT] 💾 Marked as posted: Leadership Training Manager @ datadog (instance #1)
[2026-01-12T20:26:56.763Z] [BOT] 💾 BEFORE ARCHIVING: 475 jobs in database
[2026-01-12T20:26:56.763Z] [BOT] ✅ No jobs to archive (all 475 jobs within 7-day window)
[2026-01-12T20:26:56.768Z] [BOT] 💾 Saved posted_jobs.json: 475 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:26:59.768Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-12T20:26:59.768Z] [BOT] 📍 [ROUTING] "Lead UX Designer - New York" @ datadog
[2026-01-12T20:26:59.769Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T20:26:59.938Z] [BOT] ✅ Created forum post: 🏢 Lead UX Designer - New York @ datadog in #📣・marketing-jobs
[2026-01-12T20:26:59.938Z] [BOT] ✅ Industry: Lead UX Designer - New York @ datadog
[2026-01-12T20:27:01.694Z] [BOT] ✅ Created forum post: 🏢 Lead UX Designer - New York @ datadog in #🗽・new-york
[2026-01-12T20:27:01.694Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T20:27:03.195Z] [BOT] 💾 Marked as posted: Lead UX Designer - New York @ datadog (instance #1)
[2026-01-12T20:27:03.196Z] [BOT] 💾 BEFORE ARCHIVING: 476 jobs in database
[2026-01-12T20:27:03.196Z] [BOT] ✅ No jobs to archive (all 476 jobs within 7-day window)
[2026-01-12T20:27:03.201Z] [BOT] 💾 Saved posted_jobs.json: 476 active jobs
[2026-01-12T20:27:03.201Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:27:06.201Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T20:27:06.201Z] [BOT] ⏭️  Skipping duplicate: JID_d1b38d6c (posted within 7 days)
[2026-01-12T20:27:06.201Z] [BOT] ⏭️  Skipping duplicate: JID_d9e3e533 (posted within 7 days)
[2026-01-12T20:27:06.201Z] [BOT] ⏭️  Skipping duplicate: JID_f519db33 (posted within 7 days)
⏭️  Skipping duplicate: JID_a21cfa1f (posted within 7 days)
[2026-01-12T20:27:06.202Z] [BOT] ⏭️  Skipping duplicate: JID_e615c6f9 (posted within 7 days)
[2026-01-12T20:27:06.202Z] [BOT] ⏭️  Skipping duplicate: JID_122347b6 (posted within 7 days)
[2026-01-12T20:27:06.202Z] [BOT] ⏭️  Skipping duplicate: JID_bbacdee7 (posted within 7 days)
[2026-01-12T20:27:06.202Z] [BOT] ⏭️  Skipping duplicate: JID_78a569be (posted within 7 days)
[2026-01-12T20:27:06.202Z] [BOT] ⏭️  Skipping duplicate: JID_e60d9b4f (posted within 7 days)
[2026-01-12T20:27:06.202Z] [BOT] ⏭️  Skipping duplicate: JID_dfe4d61a (posted within 7 days)
[2026-01-12T20:27:06.331Z] [BOT] ✅ Loaded pending queue: 2655 total (2635 pending, 20 enriched, 0 posted)
[2026-01-12T20:27:06.488Z] [BOT] ✅ Saved pending queue: 2655 total (2635 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T20:27:06.539Z] [BOT] 📂 Loaded 2652 existing routing entries
[2026-01-12T20:27:06.593Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2662
   Timestamp: 2026-01-12T20:27:06.583Z
[2026-01-12T20:27:06.594Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T20:27:06.594Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-12T20:27:06.595Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T20:27:06.595Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
     1. #🗽・new-york: 8 posts
     2. #💲・sales-jobs: 4 posts
     3. #💻・tech-jobs: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #💻・remote-usa: 1 posts
[2026-01-12T20:27:06.595Z] [BOT] [STATS] Channel stats saved
[2026-01-12T20:27:08.622Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2348) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*