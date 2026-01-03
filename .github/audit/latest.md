# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T11:49:02.143Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T11:48:11.463Z] ========================================
[2026-01-03T11:48:11.465Z] Discord Bot Execution Log
[2026-01-03T11:48:11.465Z] Environment: GitHub Actions
[2026-01-03T11:48:11.465Z] Node Version: v20.19.6
[2026-01-03T11:48:11.465Z] ========================================
[2026-01-03T11:48:11.465Z] Environment Variables Check:
[2026-01-03T11:48:11.465Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T11:48:11.465Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T11:48:11.465Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T11:48:11.466Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T11:48:11.466Z] 
Multi-Channel Configuration:
[2026-01-03T11:48:11.466Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T11:48:11.466Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T11:48:11.466Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T11:48:11.466Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T11:48:11.466Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T11:48:11.466Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T11:48:11.466Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T11:48:11.466Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T11:48:11.466Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T11:48:11.466Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T11:48:11.467Z] 
Data Files Check:
[2026-01-03T11:48:11.468Z] .github/data/new_jobs.json: ✅ Exists (10 items, 154562 bytes)
[2026-01-03T11:48:11.470Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 229764 bytes)
[2026-01-03T11:48:11.470Z] 
========================================
[2026-01-03T11:48:11.470Z] Starting Enhanced Discord Bot...
[2026-01-03T11:48:11.470Z] ========================================
[2026-01-03T11:48:11.996Z] [BOT] ✅ Loaded V2 database: 433 jobs
[2026-01-03T11:48:12.541Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T11:48:12.541Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T11:48:12.541Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T11:48:12.542Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T11:48:12.611Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T11:48:12.706Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T11:48:12.708Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T11:48:12.708Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T11:48:12.708Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T11:48:12.709Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-03T11:48:12.709Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Mid Market Account Executive @ datadog: new york, new york, usa, denver, colorado, usa
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T11:48:12.713Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T11:48:12.714Z] [BOT] 📍 [ROUTING] "Manager II, Engineering - Bits AI Security Analyst" @ datadog
[2026-01-03T11:48:12.714Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T11:48:12.719Z] [BOT ERROR] (node:2457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T11:48:13.053Z] [BOT] ✅ Created forum post: 🏢 Manager II, Engineering - Bits AI Security Analyst @ datadog in #🤖・ai-jobs
  ✅ Industry: Manager II, Engineering - Bits AI Security Analyst @ datadog
[2026-01-03T11:48:14.838Z] [BOT] ✅ Created forum post: 🏢 Manager II, Engineering - Bits AI Security Analyst @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:48:16.338Z] [BOT] 💾 Marked as posted: Manager II, Engineering - Bits AI Security Analyst @ datadog (instance #1)
[2026-01-03T11:48:16.339Z] [BOT] 💾 BEFORE ARCHIVING: 434 jobs in database
[2026-01-03T11:48:16.339Z] [BOT] ✅ No jobs to archive (all 434 jobs within 7-day window)
[2026-01-03T11:48:16.347Z] [BOT] 💾 Saved posted_jobs.json: 434 active jobs
[2026-01-03T11:48:16.347Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:48:19.348Z] [BOT] 📌 Posting 3 jobs to #📣・marketing-jobs
[2026-01-03T11:48:19.349Z] [BOT] 📍 [ROUTING] "Manager, Networking" @ datadog
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T11:48:19.590Z] [BOT] ✅ Created forum post: 🏢 Manager, Networking @ datadog in #📣・marketing-jobs
[2026-01-03T11:48:19.590Z] [BOT] ✅ Industry: Manager, Networking @ datadog
[2026-01-03T11:48:21.259Z] [BOT] ✅ Created forum post: 🏢 Manager, Networking @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:48:22.760Z] [BOT] 💾 Marked as posted: Manager, Networking @ datadog (instance #1)
[2026-01-03T11:48:22.760Z] [BOT] 💾 BEFORE ARCHIVING: 435 jobs in database
[2026-01-03T11:48:22.760Z] [BOT] ✅ No jobs to archive (all 435 jobs within 7-day window)
[2026-01-03T11:48:22.765Z] [BOT] 💾 Saved posted_jobs.json: 435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T11:48:22.766Z] [BOT] 📍 [ROUTING] "Office Operations Associate - NYC" @ datadog
[2026-01-03T11:48:22.766Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T11:48:23.053Z] [BOT] ✅ Created forum post: 🏢 Office Operations Associate - NYC @ datadog in #📣・marketing-jobs
  ✅ Industry: Office Operations Associate - NYC @ datadog
[2026-01-03T11:48:24.735Z] [BOT] ✅ Created forum post: 🏢 Office Operations Associate - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:48:26.235Z] [BOT] 💾 Marked as posted: Office Operations Associate - NYC @ datadog (instance #1)
[2026-01-03T11:48:26.235Z] [BOT] 💾 BEFORE ARCHIVING: 436 jobs in database
[2026-01-03T11:48:26.236Z] [BOT] ✅ No jobs to archive (all 436 jobs within 7-day window)
[2026-01-03T11:48:26.240Z] [BOT] 💾 Saved posted_jobs.json: 436 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T11:48:26.241Z] [BOT] 📍 [ROUTING] "Partner Marketing Manager (Public Sector)" @ datadog
[2026-01-03T11:48:26.241Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T11:48:26.391Z] [BOT] ✅ Created forum post: 🏢 Partner Marketing Manager (Public Sector) @ datadog in #📣・marketing-jobs
[2026-01-03T11:48:26.391Z] [BOT] ✅ Industry: Partner Marketing Manager (Public Sector) @ datadog
[2026-01-03T11:48:28.219Z] [BOT] ✅ Created forum post: 🏢 Partner Marketing Manager (Public Sector) @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T11:48:29.720Z] [BOT] 💾 Marked as posted: Partner Marketing Manager (Public Sector) @ datadog (instance #1)
[2026-01-03T11:48:29.720Z] [BOT] 💾 BEFORE ARCHIVING: 437 jobs in database
[2026-01-03T11:48:29.721Z] [BOT] ✅ No jobs to archive (all 437 jobs within 7-day window)
[2026-01-03T11:48:29.725Z] [BOT] 💾 Saved posted_jobs.json: 437 active jobs
[2026-01-03T11:48:29.725Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:48:32.725Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T11:48:32.726Z] [BOT] 📍 [ROUTING] "Marketing Analytics Engineer" @ datadog
[2026-01-03T11:48:32.726Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T11:48:33.293Z] [BOT] ✅ Created forum post: 🏢 Marketing Analytics Engineer @ datadog in #📈・JID_fb739488
  ✅ Industry: Marketing Analytics Engineer @ datadog
[2026-01-03T11:48:34.914Z] [BOT] ✅ Created forum post: 🏢 Marketing Analytics Engineer @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:48:36.416Z] [BOT] 💾 Marked as posted: Marketing Analytics Engineer @ datadog (instance #1)
[2026-01-03T11:48:36.416Z] [BOT] 💾 BEFORE ARCHIVING: 438 jobs in database
[2026-01-03T11:48:36.416Z] [BOT] ✅ No jobs to archive (all 438 jobs within 7-day window)
[2026-01-03T11:48:36.421Z] [BOT] 💾 Saved posted_jobs.json: 438 active jobs
[2026-01-03T11:48:36.421Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:48:39.421Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T11:48:39.421Z] [BOT] 📍 [ROUTING] "Mid Market Account Executive" @ datadog
[2026-01-03T11:48:39.421Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T11:48:39.618Z] [BOT] ✅ Created forum post: 🏢 Mid Market Account Executive @ datadog in #💲・sales-jobs
  ✅ Industry: Mid Market Account Executive @ datadog
[2026-01-03T11:48:41.305Z] [BOT] ✅ Created forum post: 🏢 Mid Market Account Executive @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T11:48:42.805Z] [BOT] 💾 Marked as posted: Mid Market Account Executive @ datadog (instance #1)
[2026-01-03T11:48:42.806Z] [BOT] 💾 BEFORE ARCHIVING: 439 jobs in database
[2026-01-03T11:48:42.806Z] [BOT] ✅ No jobs to archive (all 439 jobs within 7-day window)
[2026-01-03T11:48:42.810Z] [BOT] 💾 Saved posted_jobs.json: 439 active jobs
[2026-01-03T11:48:42.811Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:48:42.811Z] [BOT] 💾 Marked as posted: Mid Market Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 440 jobs in database
[2026-01-03T11:48:42.811Z] [BOT] ✅ No jobs to archive (all 440 jobs within 7-day window)
[2026-01-03T11:48:42.815Z] [BOT] 💾 Saved posted_jobs.json: 440 active jobs
[2026-01-03T11:48:42.815Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:48:42.815Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive (Boston)" @ datadog
[2026-01-03T11:48:42.816Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T11:48:43.274Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive (Boston) @ datadog in #💲・sales-jobs
  ✅ Industry: Mid-Market Account Executive (Boston) @ datadog
[2026-01-03T11:48:44.996Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive (Boston) @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-03T11:48:46.497Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive (Boston) @ datadog (instance #1)
[2026-01-03T11:48:46.498Z] [BOT] 💾 BEFORE ARCHIVING: 441 jobs in database
[2026-01-03T11:48:46.498Z] [BOT] ✅ No jobs to archive (all 441 jobs within 7-day window)
[2026-01-03T11:48:46.503Z] [BOT] 💾 Saved posted_jobs.json: 441 active jobs
[2026-01-03T11:48:46.503Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:48:46.503Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive (San Francisco)" @ datadog
[2026-01-03T11:48:46.503Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T11:48:46.683Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive (San Francisco) @ datadog in #💲・sales-jobs
[2026-01-03T11:48:46.683Z] [BOT] ✅ Industry: Mid-Market Account Executive (San Francisco) @ datadog
[2026-01-03T11:48:48.324Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive (San Francisco) @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T11:48:49.826Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive (San Francisco) @ datadog (instance #1)
[2026-01-03T11:48:49.826Z] [BOT] 💾 BEFORE ARCHIVING: 442 jobs in database
[2026-01-03T11:48:49.826Z] [BOT] ✅ No jobs to archive (all 442 jobs within 7-day window)
[2026-01-03T11:48:49.831Z] [BOT] 💾 Saved posted_jobs.json: 442 active jobs
[2026-01-03T11:48:49.831Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:48:52.831Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T11:48:52.832Z] [BOT] 📍 [ROUTING] "Premier Support Engineer 3 - NYC" @ datadog
   Category: TECH (matched: "engineer/engineering")
[2026-01-03T11:48:52.832Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T11:48:53.049Z] [BOT] ✅ Created forum post: 🏢 Premier Support Engineer 3 - NYC @ datadog in #💻・tech-jobs
  ✅ Industry: Premier Support Engineer 3 - NYC @ datadog
[2026-01-03T11:48:54.750Z] [BOT] ✅ Created forum post: 🏢 Premier Support Engineer 3 - NYC @ datadog in #🗽・new-york
[2026-01-03T11:48:54.750Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T11:48:56.250Z] [BOT] 💾 Marked as posted: Premier Support Engineer 3 - NYC @ datadog (instance #1)
[2026-01-03T11:48:56.250Z] [BOT] 💾 BEFORE ARCHIVING: 443 jobs in database
[2026-01-03T11:48:56.251Z] [BOT] ✅ No jobs to archive (all 443 jobs within 7-day window)
[2026-01-03T11:48:56.255Z] [BOT] 💾 Saved posted_jobs.json: 443 active jobs
[2026-01-03T11:48:56.255Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:48:59.255Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-03T11:48:59.255Z] [BOT] ⏭️  Skipping duplicate: JID_a336abed (posted within 7 days)
[2026-01-03T11:48:59.255Z] [BOT] ⏭️  Skipping duplicate: JID_ace0ebe9 (posted within 7 days)
[2026-01-03T11:48:59.256Z] [BOT] ⏭️  Skipping duplicate: JID_3433e97d (posted within 7 days)
[2026-01-03T11:48:59.256Z] [BOT] ⏭️  Skipping duplicate: JID_baa77441 (posted within 7 days)
[2026-01-03T11:48:59.256Z] [BOT] ⏭️  Skipping duplicate: JID_a569c0c1 (posted within 7 days)
[2026-01-03T11:48:59.256Z] [BOT] ⏭️  Skipping duplicate: JID_1fada6ce (posted within 7 days)
[2026-01-03T11:48:59.256Z] [BOT] ⏭️  Skipping duplicate: JID_8435b779 (posted within 7 days)
⏭️  Skipping duplicate: JID_10893c2a (posted within 7 days)
[2026-01-03T11:48:59.256Z] [BOT] ⏭️  Skipping duplicate: JID_a75435be (posted within 7 days)
[2026-01-03T11:48:59.324Z] [BOT] ✅ Loaded pending queue: 855 total (835 pending, 20 enriched, 0 posted)
[2026-01-03T11:48:59.421Z] [BOT] ✅ Saved pending queue: 855 total (835 pending, 11 enriched, 9 posted)
[2026-01-03T11:48:59.422Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T11:48:59.465Z] [BOT] 📂 Loaded 1426 existing routing entries
[2026-01-03T11:48:59.518Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-03T11:48:59.518Z] [BOT] New entries: 9
   Total entries: 1435
   Timestamp: 2026-01-03T11:48:59.510Z
[2026-01-03T11:48:59.518Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T11:48:59.519Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-03T11:48:59.519Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 9
   Top channels:
     1. #🗽・new-york: 6 posts
     2. #📣・marketing-jobs: 3 posts
     3. #💲・sales-jobs: 3 posts
     4. #🤖・ai-jobs: 1 posts
     5. #💻・remote-usa: 1 posts
[2026-01-03T11:48:59.519Z] [BOT] [STATS] Channel stats saved
[2026-01-03T11:49:01.536Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*