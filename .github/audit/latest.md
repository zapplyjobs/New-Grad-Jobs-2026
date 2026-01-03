# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T20:05:40.596Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T20:05:04.327Z] ========================================
[2026-01-03T20:05:04.329Z] Discord Bot Execution Log
[2026-01-03T20:05:04.329Z] Environment: GitHub Actions
[2026-01-03T20:05:04.329Z] Node Version: v20.19.6
[2026-01-03T20:05:04.329Z] ========================================
[2026-01-03T20:05:04.329Z] Environment Variables Check:
[2026-01-03T20:05:04.329Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T20:05:04.329Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T20:05:04.329Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T20:05:04.330Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T20:05:04.330Z] 
Multi-Channel Configuration:
[2026-01-03T20:05:04.330Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T20:05:04.330Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T20:05:04.330Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T20:05:04.330Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T20:05:04.330Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T20:05:04.330Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T20:05:04.330Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T20:05:04.330Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T20:05:04.330Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T20:05:04.330Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T20:05:04.330Z] 
Data Files Check:
[2026-01-03T20:05:04.331Z] .github/data/new_jobs.json: ✅ Exists (10 items, 142482 bytes)
[2026-01-03T20:05:04.334Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 386062 bytes)
[2026-01-03T20:05:04.334Z] 
========================================
[2026-01-03T20:05:04.334Z] Starting Enhanced Discord Bot...
[2026-01-03T20:05:04.334Z] ========================================
[2026-01-03T20:05:04.773Z] [BOT] ✅ Loaded V2 database: 753 jobs
[2026-01-03T20:05:05.517Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T20:05:05.518Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T20:05:05.518Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T20:05:05.518Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T20:05:05.594Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T20:05:05.677Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T20:05:05.679Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T20:05:05.680Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T20:05:05.680Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
   (4 grouped as same job with different locations)
[2026-01-03T20:05:05.680Z] [BOT] 📍 3 jobs with multiple locations:
[2026-01-03T20:05:05.681Z] [BOT] - Account Executive, Mid Market @ brex: salt lake city, utah, united states, san francisco, california, united states
   - Accounting Channel Partnerships Manager @ brex: new york, new york, united states, san francisco, california, united states
   -  Accounting Manager, Legal Entity Controllership @ brex: salt lake city, utah, united states, new york, new york, united states, seattle, washington, united states
⏸️ Limiting to 10 jobs this run, 4 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T20:05:05.684Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T20:05:05.685Z] [BOT] 📍 [ROUTING] "Software Engineer, Enterprise Product Engineering" @ anthropic
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-03T20:05:05.685Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T20:05:05.689Z] [BOT ERROR] (node:2367) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T20:05:06.068Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Enterprise Product Engineering @ anthropic in #📈・JID_fb739488
[2026-01-03T20:05:06.068Z] [BOT] ✅ Industry: Software Engineer, Enterprise Product Engineering @ anthropic
[2026-01-03T20:05:07.846Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Enterprise Product Engineering @ anthropic in #🌉・san-francisco
[2026-01-03T20:05:07.846Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T20:05:09.347Z] [BOT] 💾 Marked as posted: Software Engineer, Enterprise Product Engineering @ anthropic (instance #1)
[2026-01-03T20:05:09.347Z] [BOT] 💾 BEFORE ARCHIVING: 754 jobs in database
[2026-01-03T20:05:09.348Z] [BOT] ✅ No jobs to archive (all 754 jobs within 7-day window)
[2026-01-03T20:05:09.353Z] [BOT] 💾 Saved posted_jobs.json: 754 active jobs
[2026-01-03T20:05:09.353Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T20:05:12.354Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-03T20:05:12.354Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ spotify
   Category: AI (matched: "machine learning")
[2026-01-03T20:05:12.354Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-03T20:05:12.617Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ spotify in #🤖・ai-jobs
[2026-01-03T20:05:12.618Z] [BOT] ✅ Industry: Machine Learning Engineer @ spotify
[2026-01-03T20:05:14.558Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T20:05:16.059Z] [BOT] 💾 Marked as posted: Machine Learning Engineer @ spotify (instance #1)
[2026-01-03T20:05:16.059Z] [BOT] 💾 BEFORE ARCHIVING: 755 jobs in database
[2026-01-03T20:05:16.060Z] [BOT] ✅ No jobs to archive (all 755 jobs within 7-day window)
[2026-01-03T20:05:16.066Z] [BOT] 💾 Saved posted_jobs.json: 755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:05:16.066Z] [BOT] 📍 [ROUTING] "Backend Engineer" @ spotify
[2026-01-03T20:05:16.066Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T20:05:16.394Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer @ spotify in #🤖・ai-jobs
[2026-01-03T20:05:16.394Z] [BOT] ✅ Industry: Backend Engineer @ spotify
[2026-01-03T20:05:18.154Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T20:05:19.656Z] [BOT] 💾 Marked as posted: Backend Engineer @ spotify (instance #1)
[2026-01-03T20:05:19.656Z] [BOT] 💾 BEFORE ARCHIVING: 756 jobs in database
[2026-01-03T20:05:19.657Z] [BOT] ✅ No jobs to archive (all 756 jobs within 7-day window)
[2026-01-03T20:05:19.662Z] [BOT] 💾 Saved posted_jobs.json: 756 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:05:22.663Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T20:05:22.665Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ brex
[2026-01-03T20:05:22.665Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T20:05:23.307Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market @ brex in #💲・sales-jobs
  ✅ Industry: Account Executive, Mid Market @ brex
[2026-01-03T20:05:25.050Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T20:05:26.552Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market @ brex (instance #1)
[2026-01-03T20:05:26.553Z] [BOT] 💾 BEFORE ARCHIVING: 757 jobs in database
[2026-01-03T20:05:26.553Z] [BOT] ✅ No jobs to archive (all 757 jobs within 7-day window)
[2026-01-03T20:05:26.559Z] [BOT] 💾 Saved posted_jobs.json: 757 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:05:26.559Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market @ brex (instance #1)
[2026-01-03T20:05:26.559Z] [BOT] 💾 BEFORE ARCHIVING: 758 jobs in database
[2026-01-03T20:05:26.560Z] [BOT] ✅ No jobs to archive (all 758 jobs within 7-day window)
[2026-01-03T20:05:26.565Z] [BOT] 💾 Saved posted_jobs.json: 758 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:05:26.567Z] [BOT] 📍 [ROUTING] "Accounting Channel Partnerships Manager" @ brex
[2026-01-03T20:05:26.567Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T20:05:26.984Z] [BOT] ✅ Created forum post: 🏢 Accounting Channel Partnerships Manager @ brex in #💲・sales-jobs
  ✅ Industry: Accounting Channel Partnerships Manager @ brex
[2026-01-03T20:05:29.300Z] [BOT] ✅ Created forum post: 🏢 Accounting Channel Partnerships Manager @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T20:05:30.802Z] [BOT] 💾 Marked as posted: Accounting Channel Partnerships Manager @ brex (instance #1)
[2026-01-03T20:05:30.802Z] [BOT] 💾 BEFORE ARCHIVING: 759 jobs in database
[2026-01-03T20:05:30.803Z] [BOT] ✅ No jobs to archive (all 759 jobs within 7-day window)
[2026-01-03T20:05:30.808Z] [BOT] 💾 Saved posted_jobs.json: 759 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:05:30.808Z] [BOT] 💾 Marked as posted: Accounting Channel Partnerships Manager @ brex (instance #1)
💾 BEFORE ARCHIVING: 760 jobs in database
[2026-01-03T20:05:30.809Z] [BOT] ✅ No jobs to archive (all 760 jobs within 7-day window)
[2026-01-03T20:05:30.814Z] [BOT] 💾 Saved posted_jobs.json: 760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:05:30.814Z] [BOT] 📍 [ROUTING] " Accounting Manager, Legal Entity Controllership" @ brex
[2026-01-03T20:05:30.815Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T20:05:31.000Z] [BOT] ✅ Created forum post: 🏢  Accounting Manager, Legal Entity Controllership @ brex in #💲・sales-jobs
[2026-01-03T20:05:31.001Z] [BOT] ✅ Industry:  Accounting Manager, Legal Entity Controllership @ brex
[2026-01-03T20:05:32.767Z] [BOT] ✅ Created forum post: 🏢  Accounting Manager, Legal Entity Controllership @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T20:05:34.268Z] [BOT] 💾 Marked as posted:  Accounting Manager, Legal Entity Controllership @ brex (instance #1)
[2026-01-03T20:05:34.268Z] [BOT] 💾 BEFORE ARCHIVING: 761 jobs in database
[2026-01-03T20:05:34.269Z] [BOT] ✅ No jobs to archive (all 761 jobs within 7-day window)
[2026-01-03T20:05:34.274Z] [BOT] 💾 Saved posted_jobs.json: 761 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:05:34.274Z] [BOT] 💾 Marked as posted: Accounting Manager, Legal Entity Controllership @ brex (instance #1)
💾 BEFORE ARCHIVING: 762 jobs in database
[2026-01-03T20:05:34.274Z] [BOT] ✅ No jobs to archive (all 762 jobs within 7-day window)
[2026-01-03T20:05:34.280Z] [BOT] 💾 Saved posted_jobs.json: 762 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:05:34.280Z] [BOT] 💾 Marked as posted: Accounting Manager, Legal Entity Controllership @ brex (instance #1)
[2026-01-03T20:05:34.280Z] [BOT] 💾 BEFORE ARCHIVING: 763 jobs in database
[2026-01-03T20:05:34.281Z] [BOT] ✅ No jobs to archive (all 763 jobs within 7-day window)
[2026-01-03T20:05:34.285Z] [BOT] 💾 Saved posted_jobs.json: 763 active jobs
[2026-01-03T20:05:34.285Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T20:05:37.286Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-03T20:05:37.286Z] [BOT] ⏭️  Skipping duplicate: JID_7b2bffcb (posted within 7 days)
[2026-01-03T20:05:37.287Z] [BOT] ⏭️  Skipping duplicate: JID_bf3e2eb6 (posted within 7 days)
⏭️  Skipping duplicate: JID_6cf2538f (posted within 7 days)
[2026-01-03T20:05:37.287Z] [BOT] ⏭️  Skipping duplicate: JID_026a52e5 (posted within 7 days)
⏭️  Skipping duplicate: JID_d7efbcc3 (posted within 7 days)
[2026-01-03T20:05:37.287Z] [BOT] ⏭️  Skipping duplicate: JID_20232dd2 (posted within 7 days)
[2026-01-03T20:05:37.339Z] [BOT] ✅ Loaded pending queue: 536 total (516 pending, 20 enriched, 0 posted)
[2026-01-03T20:05:37.387Z] [BOT] ✅ Saved pending queue: 536 total (516 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T20:05:37.436Z] [BOT] 📂 Loaded 1706 existing routing entries
[2026-01-03T20:05:37.480Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 1712
   Timestamp: 2026-01-03T20:05:37.474Z
[2026-01-03T20:05:37.481Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T20:05:37.481Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-03T20:05:37.481Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
[2026-01-03T20:05:37.481Z] [BOT] Channels used: 6
   Top channels:
     1. #🗽・new-york: 3 posts
     2. #💲・sales-jobs: 3 posts
     3. #🤖・ai-jobs: 2 posts
     4. #💻・remote-usa: 2 posts
[2026-01-03T20:05:37.481Z] [BOT] 5. #📈・JID_fb739488: 1 posts
[2026-01-03T20:05:37.481Z] [BOT] [STATS] Channel stats saved
[2026-01-03T20:05:39.494Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2367) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*