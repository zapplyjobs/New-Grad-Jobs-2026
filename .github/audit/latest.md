# Discord Bot Execution Audit
**Timestamp:** 2025-12-25T00:09:32.379Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-25T00:09:10.842Z] ========================================
[2025-12-25T00:09:10.844Z] Discord Bot Execution Log
[2025-12-25T00:09:10.844Z] Environment: GitHub Actions
[2025-12-25T00:09:10.844Z] Node Version: v20.19.6
[2025-12-25T00:09:10.844Z] ========================================
[2025-12-25T00:09:10.844Z] Environment Variables Check:
[2025-12-25T00:09:10.844Z] DISCORD_TOKEN: ✅ Set
[2025-12-25T00:09:10.844Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-25T00:09:10.844Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-25T00:09:10.844Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-25T00:09:10.844Z] 
Multi-Channel Configuration:
[2025-12-25T00:09:10.844Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-25T00:09:10.844Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-25T00:09:10.844Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-25T00:09:10.844Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-25T00:09:10.844Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-25T00:09:10.844Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-25T00:09:10.844Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-25T00:09:10.845Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-25T00:09:10.845Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-25T00:09:10.845Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-25T00:09:10.845Z] 
Data Files Check:
[2025-12-25T00:09:10.845Z] .github/data/new_jobs.json: ✅ Exists (4 items, 19719 bytes)
[2025-12-25T00:09:10.848Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 392410 bytes)
[2025-12-25T00:09:10.849Z] 
========================================
[2025-12-25T00:09:10.849Z] Starting Enhanced Discord Bot...
[2025-12-25T00:09:10.849Z] ========================================
[2025-12-25T00:09:11.319Z] [BOT] ✅ Loaded V2 database: 676 jobs
[2025-12-25T00:09:11.880Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-25T00:09:11.881Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-25T00:09:11.881Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-25T00:09:11.881Z] [BOT] 📦 Exporting 4 jobs to encrypted JSON...
[2025-12-25T00:09:11.938Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-25T00:09:11.994Z] [BOT] ✅ Export complete: Added 1, Skipped 3, Total 132
[2025-12-25T00:09:11.996Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2025-12-25T00:09:11.996Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-25T00:09:11.996Z] [BOT] 📋 After blacklist filter: 3 jobs (1 blacklisted)
📋 After data quality filter: 3 jobs (0 invalid)
[2025-12-25T00:09:11.997Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2025-12-25T00:09:11.997Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-25T00:09:11.999Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-25T00:09:12.000Z] [BOT] 📍 [ROUTING] "Associate Risk Reporting Analyst" @ ORG_55898449 Plan One
[2025-12-25T00:09:12.000Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-25T00:09:12.004Z] [BOT ERROR] (node:2629) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-25T00:09:12.175Z] [BOT] ✅ Created forum post: 🏢 Associate Risk Reporting Analyst @ ORG_55898449 Plan One in #📈・JID_fb739488
  ✅ Industry: Associate Risk Reporting Analyst @ ORG_55898449 Plan One
[2025-12-25T00:09:13.678Z] [BOT] 💾 Marked as posted: Associate Risk Reporting Analyst @ ORG_55898449 Plan One (instance #1)
[2025-12-25T00:09:13.678Z] [BOT] 💾 BEFORE ARCHIVING: 677 jobs in database
[2025-12-25T00:09:13.678Z] [BOT] ✅ No jobs to archive (all 677 jobs within 7-day window)
[2025-12-25T00:09:13.687Z] [BOT] 💾 Saved posted_jobs.json: 677 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-25T00:09:16.688Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-25T00:09:16.689Z] [BOT] 📍 [ROUTING] "Consulting Associate - Engineering or Geology" @ ORG_d41a2092
[2025-12-25T00:09:16.689Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-25T00:09:16.887Z] [BOT] ✅ Created forum post: 🏢 Consulting Associate - Engineering or Geology @ ORG_d41a2092 in #💻・tech-jobs
[2025-12-25T00:09:16.887Z] [BOT] ✅ Industry: Consulting Associate - Engineering or Geology @ ORG_d41a2092
[2025-12-25T00:09:18.620Z] [BOT] ✅ Created forum post: 🏢 Consulting Associate - Engineering or Geology @ ORG_d41a2092 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-25T00:09:20.121Z] [BOT] 💾 Marked as posted: Consulting Associate - Engineering or Geology @ ORG_d41a2092 (instance #1)
💾 BEFORE ARCHIVING: 678 jobs in database
[2025-12-25T00:09:20.121Z] [BOT] ✅ No jobs to archive (all 678 jobs within 7-day window)
[2025-12-25T00:09:20.128Z] [BOT] 💾 Saved posted_jobs.json: 678 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-25T00:09:23.129Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-25T00:09:23.131Z] [BOT] 📍 [ROUTING] "AI Software Engineer - Agents - Ace" @ ORG_e03f7067 Technologies
   Category: AI (matched: "AI/ML")
[2025-12-25T00:09:23.131Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-25T00:09:23.325Z] [BOT] ✅ Created forum post: 🏢 AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies in #🤖・ai-jobs
[2025-12-25T00:09:23.325Z] [BOT] ✅ Industry: AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies
[2025-12-25T00:09:25.027Z] [BOT] ✅ Created forum post: 🏢 AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-25T00:09:26.529Z] [BOT] 💾 Marked as posted: AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies (instance #1)
[2025-12-25T00:09:26.529Z] [BOT] 💾 BEFORE ARCHIVING: 679 jobs in database
[2025-12-25T00:09:26.530Z] [BOT] ✅ No jobs to archive (all 679 jobs within 7-day window)
[2025-12-25T00:09:26.537Z] [BOT] 💾 Saved posted_jobs.json: 679 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-25T00:09:29.538Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-25T00:09:29.538Z] [BOT] ⏭️  Skipping duplicate: JID_53b2d2f2-analyst_jr1407 (posted within 7 days)
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_6cf3bd5c-geology_r00028752 (posted within 7 days)
[2025-12-25T00:09:29.538Z] [BOT] ⏭️  Skipping duplicate: JID_23021325 (posted within 7 days)
[2025-12-25T00:09:29.539Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2025-12-25T00:09:29.540Z] [BOT] ✅ Saved pending queue: 4 total (0 pending, 1 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2025-12-25T00:09:29.540Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-25T00:09:29.585Z] [BOT] 📂 Loaded 1069 existing routing entries
[2025-12-25T00:09:29.632Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 1072
[2025-12-25T00:09:29.632Z] [BOT] Timestamp: 2025-12-25T00:09:29.627Z
[2025-12-25T00:09:29.632Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9a8c61a9.jsonl
[2025-12-25T00:09:29.633Z] [BOT] Total attempts: 6
   Successful: 5
   Failed: 0
   Skipped: 1
[2025-12-25T00:09:29.633Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 5
   Channels used: 5
   Top channels:
     1. #📈・JID_fb739488: 1 posts
     2. #💻・tech-jobs: 1 posts
     3. #💻・remote-usa: 1 posts
     4. #🤖・ai-jobs: 1 posts
     5. #🌧️・seattle: 1 posts
[2025-12-25T00:09:29.633Z] [BOT] [STATS] Channel stats saved
[2025-12-25T00:09:31.643Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2629) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*