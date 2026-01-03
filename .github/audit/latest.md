# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T11:24:12.329Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T11:23:17.458Z] ========================================
[2026-01-03T11:23:17.460Z] Discord Bot Execution Log
[2026-01-03T11:23:17.460Z] Environment: GitHub Actions
[2026-01-03T11:23:17.460Z] Node Version: v20.19.6
[2026-01-03T11:23:17.460Z] ========================================
[2026-01-03T11:23:17.460Z] Environment Variables Check:
[2026-01-03T11:23:17.461Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T11:23:17.461Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T11:23:17.461Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T11:23:17.461Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T11:23:17.461Z] 
Multi-Channel Configuration:
[2026-01-03T11:23:17.461Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T11:23:17.461Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T11:23:17.461Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T11:23:17.461Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T11:23:17.461Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T11:23:17.462Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T11:23:17.462Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T11:23:17.462Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T11:23:17.462Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T11:23:17.462Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T11:23:17.462Z] 
Data Files Check:
[2026-01-03T11:23:17.463Z] .github/data/new_jobs.json: ✅ Exists (10 items, 174384 bytes)
[2026-01-03T11:23:17.465Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 220199 bytes)
[2026-01-03T11:23:17.465Z] 
========================================
[2026-01-03T11:23:17.465Z] Starting Enhanced Discord Bot...
[2026-01-03T11:23:17.465Z] ========================================
[2026-01-03T11:23:18.003Z] [BOT] ✅ Loaded V2 database: 413 jobs
[2026-01-03T11:23:18.617Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T11:23:18.617Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T11:23:18.617Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T11:23:18.618Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T11:23:18.689Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T11:23:18.785Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T11:23:18.787Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T11:23:18.787Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T11:23:18.787Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T11:23:18.788Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T11:23:18.788Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T11:23:18.792Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-03T11:23:18.793Z] [BOT] 📍 [ROUTING] "Field CTO - Media & Entertainment" @ datadog
[2026-01-03T11:23:18.793Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T11:23:18.797Z] [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T11:23:19.093Z] [BOT] ✅ Created forum post: 🏢 Field CTO - Media & Entertainment @ datadog in #💲・sales-jobs
[2026-01-03T11:23:19.093Z] [BOT] ✅ Industry: Field CTO - Media & Entertainment @ datadog
[2026-01-03T11:23:20.776Z] [BOT] ✅ Created forum post: 🏢 Field CTO - Media & Entertainment @ datadog in #🌉・san-francisco
[2026-01-03T11:23:20.776Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T11:23:22.277Z] [BOT] 💾 Marked as posted: Field CTO - Media & Entertainment @ datadog (instance #1)
[2026-01-03T11:23:22.277Z] [BOT] 💾 BEFORE ARCHIVING: 414 jobs in database
[2026-01-03T11:23:22.278Z] [BOT] ✅ No jobs to archive (all 414 jobs within 7-day window)
[2026-01-03T11:23:22.286Z] [BOT] 💾 Saved posted_jobs.json: 414 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T11:23:22.287Z] [BOT] 📍 [ROUTING] "Field Enablement Manager (NYC)" @ datadog
[2026-01-03T11:23:22.287Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T11:23:22.687Z] [BOT] ✅ Created forum post: 🏢 Field Enablement Manager (NYC) @ datadog in #💲・sales-jobs
[2026-01-03T11:23:22.687Z] [BOT] ✅ Industry: Field Enablement Manager (NYC) @ datadog
[2026-01-03T11:23:24.408Z] [BOT] ✅ Created forum post: 🏢 Field Enablement Manager (NYC) @ datadog in #🗽・new-york
[2026-01-03T11:23:24.408Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T11:23:25.910Z] [BOT] 💾 Marked as posted: Field Enablement Manager (NYC) @ datadog (instance #1)
[2026-01-03T11:23:25.910Z] [BOT] 💾 BEFORE ARCHIVING: 415 jobs in database
[2026-01-03T11:23:25.910Z] [BOT] ✅ No jobs to archive (all 415 jobs within 7-day window)
[2026-01-03T11:23:25.914Z] [BOT] 💾 Saved posted_jobs.json: 415 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T11:23:25.915Z] [BOT] 📍 [ROUTING] "GTM Strategy and Operations Analyst - Channels & Alliances" @ datadog
[2026-01-03T11:23:25.915Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T11:23:26.068Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy and Operations Analyst - Channels & Alliances @ datadog in #💲・sales-jobs
[2026-01-03T11:23:26.068Z] [BOT] ✅ Industry: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog
[2026-01-03T11:23:27.835Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy and Operations Analyst - Channels & Alliances @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:23:29.336Z] [BOT] 💾 Marked as posted: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog (instance #1)
[2026-01-03T11:23:29.336Z] [BOT] 💾 BEFORE ARCHIVING: 416 jobs in database
[2026-01-03T11:23:29.337Z] [BOT] ✅ No jobs to archive (all 416 jobs within 7-day window)
[2026-01-03T11:23:29.340Z] [BOT] 💾 Saved posted_jobs.json: 416 active jobs
[2026-01-03T11:23:29.340Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:23:29.341Z] [BOT] 📍 [ROUTING] "Major Account Manager" @ datadog
[2026-01-03T11:23:29.341Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T11:23:29.669Z] [BOT] ✅ Created forum post: 🏢 Major Account Manager @ datadog in #💲・sales-jobs
  ✅ Industry: Major Account Manager @ datadog
[2026-01-03T11:23:31.418Z] [BOT] ✅ Created forum post: 🏢 Major Account Manager @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:23:32.919Z] [BOT] 💾 Marked as posted: Major Account Manager @ datadog (instance #1)
[2026-01-03T11:23:32.919Z] [BOT] 💾 BEFORE ARCHIVING: 417 jobs in database
[2026-01-03T11:23:32.919Z] [BOT] ✅ No jobs to archive (all 417 jobs within 7-day window)
[2026-01-03T11:23:32.923Z] [BOT] 💾 Saved posted_jobs.json: 417 active jobs
[2026-01-03T11:23:32.923Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:23:35.925Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T11:23:35.925Z] [BOT] 📍 [ROUTING] "Field Marketing Manager" @ datadog
[2026-01-03T11:23:35.925Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T11:23:36.135Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager @ datadog in #📣・marketing-jobs
  ✅ Industry: Field Marketing Manager @ datadog
[2026-01-03T11:23:38.014Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:23:39.515Z] [BOT] 💾 Marked as posted: Field Marketing Manager @ datadog (instance #1)
[2026-01-03T11:23:39.515Z] [BOT] 💾 BEFORE ARCHIVING: 418 jobs in database
[2026-01-03T11:23:39.516Z] [BOT] ✅ No jobs to archive (all 418 jobs within 7-day window)
[2026-01-03T11:23:39.519Z] [BOT] 💾 Saved posted_jobs.json: 418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T11:23:42.520Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-03T11:23:42.520Z] [BOT] 📍 [ROUTING] "Global Safety & Security Senior Manager - NYC" @ datadog
   Category: TECH (matched: "security")
[2026-01-03T11:23:42.520Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T11:23:42.713Z] [BOT] ✅ Created forum post: 🏢 Global Safety & Security Senior Manager - NYC @ datadog in #💻・tech-jobs
[2026-01-03T11:23:42.714Z] [BOT] ✅ Industry: Global Safety & Security Senior Manager - NYC @ datadog
[2026-01-03T11:23:44.421Z] [BOT] ✅ Created forum post: 🏢 Global Safety & Security Senior Manager - NYC @ datadog in #🗽・new-york
[2026-01-03T11:23:44.421Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T11:23:45.922Z] [BOT] 💾 Marked as posted: Global Safety & Security Senior Manager - NYC @ datadog (instance #1)
[2026-01-03T11:23:45.922Z] [BOT] 💾 BEFORE ARCHIVING: 419 jobs in database
[2026-01-03T11:23:45.923Z] [BOT] ✅ No jobs to archive (all 419 jobs within 7-day window)
[2026-01-03T11:23:45.926Z] [BOT] 💾 Saved posted_jobs.json: 419 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T11:23:45.927Z] [BOT] 📍 [ROUTING] "Information Security Analyst II" @ datadog
[2026-01-03T11:23:45.927Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T11:23:46.280Z] [BOT] ✅ Created forum post: 🏢 Information Security Analyst II @ datadog in #💻・tech-jobs
  ✅ Industry: Information Security Analyst II @ datadog
[2026-01-03T11:23:47.954Z] [BOT] ✅ Created forum post: 🏢 Information Security Analyst II @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:23:49.454Z] [BOT] 💾 Marked as posted: Information Security Analyst II @ datadog (instance #1)
[2026-01-03T11:23:49.454Z] [BOT] 💾 BEFORE ARCHIVING: 420 jobs in database
[2026-01-03T11:23:49.455Z] [BOT] ✅ No jobs to archive (all 420 jobs within 7-day window)
[2026-01-03T11:23:49.459Z] [BOT] 💾 Saved posted_jobs.json: 420 active jobs
[2026-01-03T11:23:49.459Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:23:52.460Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-03T11:23:52.460Z] [BOT] 📍 [ROUTING] "Inclusion Program Manager - NYC" @ datadog
[2026-01-03T11:23:52.461Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-03T11:23:52.710Z] [BOT] ✅ Created forum post: 🏢 Inclusion Program Manager - NYC @ datadog in #📊・JID_9910249a
[2026-01-03T11:23:52.710Z] [BOT] ✅ Industry: Inclusion Program Manager - NYC @ datadog
[2026-01-03T11:23:54.471Z] [BOT] ✅ Created forum post: 🏢 Inclusion Program Manager - NYC @ datadog in #🗽・new-york
[2026-01-03T11:23:54.471Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T11:23:55.973Z] [BOT] 💾 Marked as posted: Inclusion Program Manager - NYC @ datadog (instance #1)
[2026-01-03T11:23:55.973Z] [BOT] 💾 BEFORE ARCHIVING: 421 jobs in database
[2026-01-03T11:23:55.973Z] [BOT] ✅ No jobs to archive (all 421 jobs within 7-day window)
[2026-01-03T11:23:55.977Z] [BOT] 💾 Saved posted_jobs.json: 421 active jobs
[2026-01-03T11:23:55.977Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:23:58.978Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-03T11:23:58.979Z] [BOT] 📍 [ROUTING] "Internal Communications Specialist - NYC" @ datadog
[2026-01-03T11:23:58.979Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T11:23:59.236Z] [BOT] ✅ Created forum post: 🏢 Internal Communications Specialist - NYC @ datadog in #🤖・ai-jobs
  ✅ Industry: Internal Communications Specialist - NYC @ datadog
[2026-01-03T11:24:01.032Z] [BOT] ✅ Created forum post: 🏢 Internal Communications Specialist - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:24:02.533Z] [BOT] 💾 Marked as posted: Internal Communications Specialist - NYC @ datadog (instance #1)
[2026-01-03T11:24:02.534Z] [BOT] 💾 BEFORE ARCHIVING: 422 jobs in database
[2026-01-03T11:24:02.534Z] [BOT] ✅ No jobs to archive (all 422 jobs within 7-day window)
[2026-01-03T11:24:02.538Z] [BOT] 💾 Saved posted_jobs.json: 422 active jobs
[2026-01-03T11:24:02.538Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:24:02.538Z] [BOT] 📍 [ROUTING] "Leadership Training Manager" @ datadog
[2026-01-03T11:24:02.538Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-03T11:24:03.063Z] [BOT] ✅ Created forum post: 🏢 Leadership Training Manager @ datadog in #🤖・ai-jobs
  ✅ Industry: Leadership Training Manager @ datadog
[2026-01-03T11:24:04.729Z] [BOT] ✅ Created forum post: 🏢 Leadership Training Manager @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:24:06.230Z] [BOT] 💾 Marked as posted: Leadership Training Manager @ datadog (instance #1)
[2026-01-03T11:24:06.231Z] [BOT] 💾 BEFORE ARCHIVING: 423 jobs in database
[2026-01-03T11:24:06.231Z] [BOT] ✅ No jobs to archive (all 423 jobs within 7-day window)
[2026-01-03T11:24:06.235Z] [BOT] 💾 Saved posted_jobs.json: 423 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T11:24:09.236Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T11:24:09.236Z] [BOT] ⏭️  Skipping duplicate: JID_96b2c378 (posted within 7 days)
[2026-01-03T11:24:09.237Z] [BOT] ⏭️  Skipping duplicate: JID_b760f914 (posted within 7 days)
[2026-01-03T11:24:09.237Z] [BOT] ⏭️  Skipping duplicate: JID_03a27a7d (posted within 7 days)
[2026-01-03T11:24:09.237Z] [BOT] ⏭️  Skipping duplicate: JID_d1b38d6c (posted within 7 days)
⏭️  Skipping duplicate: JID_d9e3e533 (posted within 7 days)
[2026-01-03T11:24:09.237Z] [BOT] ⏭️  Skipping duplicate: JID_f519db33 (posted within 7 days)
[2026-01-03T11:24:09.237Z] [BOT] ⏭️  Skipping duplicate: JID_a21cfa1f (posted within 7 days)
⏭️  Skipping duplicate: JID_e615c6f9 (posted within 7 days)
[2026-01-03T11:24:09.237Z] [BOT] ⏭️  Skipping duplicate: JID_bbacdee7 (posted within 7 days)
[2026-01-03T11:24:09.237Z] [BOT] ⏭️  Skipping duplicate: JID_2155f838 (posted within 7 days)
[2026-01-03T11:24:09.308Z] [BOT] ✅ Loaded pending queue: 875 total (855 pending, 20 enriched, 0 posted)
[2026-01-03T11:24:09.409Z] [BOT] ✅ Saved pending queue: 875 total (855 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T11:24:09.410Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T11:24:09.454Z] [BOT] 📂 Loaded 1408 existing routing entries
[2026-01-03T11:24:09.500Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1418
   Timestamp: 2026-01-03T11:24:09.494Z
[2026-01-03T11:24:09.501Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 20
[2026-01-03T11:24:09.501Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-03T11:24:09.501Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-03T11:24:09.501Z] [BOT] Total posts: 20
   Channels used: 7
   Top channels:
     1. #🗽・new-york: 9 posts
[2026-01-03T11:24:09.501Z] [BOT] 2. #💲・sales-jobs: 4 posts
     3. #💻・tech-jobs: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🌉・san-francisco: 1 posts
[2026-01-03T11:24:09.501Z] [BOT] [STATS] Channel stats saved
[2026-01-03T11:24:11.519Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*