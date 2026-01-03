# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T19:06:14.499Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T19:05:16.578Z] ========================================
[2026-01-03T19:05:16.580Z] Discord Bot Execution Log
[2026-01-03T19:05:16.580Z] Environment: GitHub Actions
[2026-01-03T19:05:16.580Z] Node Version: v20.19.6
[2026-01-03T19:05:16.580Z] ========================================
[2026-01-03T19:05:16.580Z] Environment Variables Check:
[2026-01-03T19:05:16.580Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T19:05:16.580Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T19:05:16.580Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T19:05:16.581Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T19:05:16.581Z] 
Multi-Channel Configuration:
[2026-01-03T19:05:16.581Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T19:05:16.581Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T19:05:16.581Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T19:05:16.581Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T19:05:16.581Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T19:05:16.581Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T19:05:16.581Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T19:05:16.581Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T19:05:16.581Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T19:05:16.581Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T19:05:16.581Z] 
Data Files Check:
[2026-01-03T19:05:16.583Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166369 bytes)
[2026-01-03T19:05:16.586Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 366280 bytes)
[2026-01-03T19:05:16.586Z] 
========================================
[2026-01-03T19:05:16.586Z] Starting Enhanced Discord Bot...
[2026-01-03T19:05:16.586Z] ========================================
[2026-01-03T19:05:17.065Z] [BOT] ✅ Loaded V2 database: 713 jobs
[2026-01-03T19:05:17.828Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T19:05:17.828Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T19:05:17.829Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T19:05:17.829Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T19:05:17.915Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T19:05:18.005Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T19:05:18.008Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T19:05:18.008Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T19:05:18.008Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T19:05:18.009Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T19:05:18.009Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T19:05:18.014Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-03T19:05:18.015Z] [BOT] 📍 [ROUTING] "Senior Director, Internal Audit" @ discord
[2026-01-03T19:05:18.015Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T19:05:18.019Z] [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T19:05:18.338Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Internal Audit @ discord in #💰・finance-jobs
[2026-01-03T19:05:18.338Z] [BOT] ✅ Industry: Senior Director, Internal Audit @ discord
[2026-01-03T19:05:20.021Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Internal Audit @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:05:21.521Z] [BOT] 💾 Marked as posted: Senior Director, Internal Audit @ discord (instance #1)
💾 BEFORE ARCHIVING: 714 jobs in database
[2026-01-03T19:05:21.522Z] [BOT] ✅ No jobs to archive (all 714 jobs within 7-day window)
[2026-01-03T19:05:21.531Z] [BOT] 💾 Saved posted_jobs.json: 714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:05:24.532Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-03T19:05:24.532Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Safeguards" @ anthropic
[2026-01-03T19:05:24.533Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
[2026-01-03T19:05:24.533Z] [BOT] Channel: 📊・JID_9910249a (1391...1276)
[2026-01-03T19:05:25.477Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Safeguards @ anthropic in #📊・JID_9910249a
[2026-01-03T19:05:25.477Z] [BOT] ✅ Industry: Technical Program Manager, Safeguards @ anthropic
[2026-01-03T19:05:27.175Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Safeguards @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:05:28.675Z] [BOT] 💾 Marked as posted: Technical Program Manager, Safeguards @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 715 jobs in database
[2026-01-03T19:05:28.676Z] [BOT] ✅ No jobs to archive (all 715 jobs within 7-day window)
[2026-01-03T19:05:28.681Z] [BOT] 💾 Saved posted_jobs.json: 715 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:05:31.683Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T19:05:31.683Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Model Evaluations" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-03T19:05:31.683Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:05:31.683Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, nonTechMatch (using ai)
[2026-01-03T19:05:31.979Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Model Evaluations @ anthropic in #🤖・ai-jobs
  ✅ Industry: Technical Program Manager, Model Evaluations @ anthropic
[2026-01-03T19:05:33.724Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Model Evaluations @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:05:35.225Z] [BOT] 💾 Marked as posted: Technical Program Manager, Model Evaluations @ anthropic (instance #1)
[2026-01-03T19:05:35.226Z] [BOT] 💾 BEFORE ARCHIVING: 716 jobs in database
[2026-01-03T19:05:35.226Z] [BOT] ✅ No jobs to archive (all 716 jobs within 7-day window)
[2026-01-03T19:05:35.232Z] [BOT] 💾 Saved posted_jobs.json: 716 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:05:38.232Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-03T19:05:38.232Z] [BOT] 📍 [ROUTING] "Staff+ Software Engineer, Data Infrastructure" @ anthropic
   Category: TECH (matched: "software")
[2026-01-03T19:05:38.233Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T19:05:39.998Z] [BOT] ✅ Created forum post: 🏢 Staff+ Software Engineer, Data Infrastructure @ anthropic in #💻・tech-jobs
[2026-01-03T19:05:39.998Z] [BOT] ✅ Industry: Staff+ Software Engineer, Data Infrastructure @ anthropic
[2026-01-03T19:05:41.786Z] [BOT] ✅ Created forum post: 🏢 Staff+ Software Engineer, Data Infrastructure @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:05:43.287Z] [BOT] 💾 Marked as posted: Staff+ Software Engineer, Data Infrastructure @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 717 jobs in database
[2026-01-03T19:05:43.288Z] [BOT] ✅ No jobs to archive (all 717 jobs within 7-day window)
[2026-01-03T19:05:43.294Z] [BOT] 💾 Saved posted_jobs.json: 717 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:05:43.294Z] [BOT] 📍 [ROUTING] "Staff+ Software Engineer, Databases" @ anthropic
   Category: TECH (matched: "software")
[2026-01-03T19:05:43.294Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T19:05:43.880Z] [BOT] ✅ Created forum post: 🏢 Staff+ Software Engineer, Databases @ anthropic in #💻・tech-jobs
  ✅ Industry: Staff+ Software Engineer, Databases @ anthropic
[2026-01-03T19:05:45.646Z] [BOT] ✅ Created forum post: 🏢 Staff+ Software Engineer, Databases @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:05:47.147Z] [BOT] 💾 Marked as posted: Staff+ Software Engineer, Databases @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 718 jobs in database
[2026-01-03T19:05:47.148Z] [BOT] ✅ No jobs to archive (all 718 jobs within 7-day window)
[2026-01-03T19:05:47.154Z] [BOT] 💾 Saved posted_jobs.json: 718 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:05:47.154Z] [BOT] 📍 [ROUTING] "Security Engineer, Detection & Response" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-01-03T19:05:47.154Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T19:05:47.448Z] [BOT] ✅ Created forum post: 🏢 Security Engineer, Detection & Response @ anthropic in #💻・tech-jobs
[2026-01-03T19:05:47.448Z] [BOT] ✅ Industry: Security Engineer, Detection & Response @ anthropic
[2026-01-03T19:05:49.181Z] [BOT] ✅ Created forum post: 🏢 Security Engineer, Detection & Response @ anthropic in #🌉・san-francisco
[2026-01-03T19:05:49.182Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T19:05:50.683Z] [BOT] 💾 Marked as posted: Security Engineer, Detection & Response @ anthropic (instance #1)
[2026-01-03T19:05:50.683Z] [BOT] 💾 BEFORE ARCHIVING: 719 jobs in database
[2026-01-03T19:05:50.683Z] [BOT] ✅ No jobs to archive (all 719 jobs within 7-day window)
[2026-01-03T19:05:50.690Z] [BOT] 💾 Saved posted_jobs.json: 719 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:05:53.690Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-03T19:05:53.691Z] [BOT] 📍 [ROUTING] "Manager, Digital Native Sales" @ anthropic
[2026-01-03T19:05:53.691Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T19:05:53.945Z] [BOT] ✅ Created forum post: 🏢 Manager, Digital Native Sales @ anthropic in #💲・sales-jobs
[2026-01-03T19:05:53.945Z] [BOT] ✅ Industry: Manager, Digital Native Sales @ anthropic
[2026-01-03T19:05:55.665Z] [BOT] ✅ Created forum post: 🏢 Manager, Digital Native Sales @ anthropic in #🌉・san-francisco
[2026-01-03T19:05:55.665Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T19:05:57.166Z] [BOT] 💾 Marked as posted: Manager, Digital Native Sales @ anthropic (instance #1)
[2026-01-03T19:05:57.166Z] [BOT] 💾 BEFORE ARCHIVING: 720 jobs in database
[2026-01-03T19:05:57.167Z] [BOT] ✅ No jobs to archive (all 720 jobs within 7-day window)
[2026-01-03T19:05:57.173Z] [BOT] 💾 Saved posted_jobs.json: 720 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:05:57.173Z] [BOT] 📍 [ROUTING] "Manager, Startup Account Executive" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-03T19:05:57.173Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T19:05:57.449Z] [BOT] ✅ Created forum post: 🏢 Manager, Startup Account Executive @ anthropic in #💲・sales-jobs
[2026-01-03T19:05:57.449Z] [BOT] ✅ Industry: Manager, Startup Account Executive @ anthropic
[2026-01-03T19:05:59.495Z] [BOT] ✅ Created forum post: 🏢 Manager, Startup Account Executive @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:06:00.996Z] [BOT] 💾 Marked as posted: Manager, Startup Account Executive @ anthropic (instance #1)
[2026-01-03T19:06:00.996Z] [BOT] 💾 BEFORE ARCHIVING: 721 jobs in database
[2026-01-03T19:06:00.996Z] [BOT] ✅ No jobs to archive (all 721 jobs within 7-day window)
[2026-01-03T19:06:01.002Z] [BOT] 💾 Saved posted_jobs.json: 721 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:06:01.002Z] [BOT] 📍 [ROUTING] "Manager, Growth Account Executive" @ anthropic
[2026-01-03T19:06:01.002Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T19:06:01.338Z] [BOT] ✅ Created forum post: 🏢 Manager, Growth Account Executive @ anthropic in #💲・sales-jobs
[2026-01-03T19:06:01.338Z] [BOT] ✅ Industry: Manager, Growth Account Executive @ anthropic
[2026-01-03T19:06:03.091Z] [BOT] ✅ Created forum post: 🏢 Manager, Growth Account Executive @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:06:04.593Z] [BOT] 💾 Marked as posted: Manager, Growth Account Executive @ anthropic (instance #1)
[2026-01-03T19:06:04.593Z] [BOT] 💾 BEFORE ARCHIVING: 722 jobs in database
[2026-01-03T19:06:04.594Z] [BOT] ✅ No jobs to archive (all 722 jobs within 7-day window)
[2026-01-03T19:06:04.600Z] [BOT] 💾 Saved posted_jobs.json: 722 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:06:04.601Z] [BOT] 📍 [ROUTING] "Global Partner Sales Manager, Systems Integrators" @ anthropic
[2026-01-03T19:06:04.601Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T19:06:05.009Z] [BOT] ✅ Created forum post: 🏢 Global Partner Sales Manager, Systems Integrators @ anthropic in #💲・sales-jobs
  ✅ Industry: Global Partner Sales Manager, Systems Integrators @ anthropic
[2026-01-03T19:06:06.686Z] [BOT] ✅ Created forum post: 🏢 Global Partner Sales Manager, Systems Integrators @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:06:08.187Z] [BOT] 💾 Marked as posted: Global Partner Sales Manager, Systems Integrators @ anthropic (instance #1)
[2026-01-03T19:06:08.188Z] [BOT] 💾 BEFORE ARCHIVING: 723 jobs in database
[2026-01-03T19:06:08.188Z] [BOT] ✅ No jobs to archive (all 723 jobs within 7-day window)
[2026-01-03T19:06:08.194Z] [BOT] 💾 Saved posted_jobs.json: 723 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:06:11.195Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T19:06:11.195Z] [BOT] ⏭️  Skipping duplicate: JID_33a6531d (posted within 7 days)
[2026-01-03T19:06:11.196Z] [BOT] ⏭️  Skipping duplicate: JID_a973aebd (posted within 7 days)
[2026-01-03T19:06:11.196Z] [BOT] ⏭️  Skipping duplicate: JID_124ec8bf (posted within 7 days)
⏭️  Skipping duplicate: JID_02ba5dd4 (posted within 7 days)
⏭️  Skipping duplicate: JID_4a38c3e5 (posted within 7 days)
[2026-01-03T19:06:11.196Z] [BOT] ⏭️  Skipping duplicate: JID_9c0c7605 (posted within 7 days)
⏭️  Skipping duplicate: JID_52ce7fbb (posted within 7 days)
[2026-01-03T19:06:11.196Z] [BOT] ⏭️  Skipping duplicate: JID_7a1af65d (posted within 7 days)
⏭️  Skipping duplicate: JID_ad2ee979 (posted within 7 days)
[2026-01-03T19:06:11.196Z] [BOT] ⏭️  Skipping duplicate: JID_827caba2 (posted within 7 days)
[2026-01-03T19:06:11.265Z] [BOT] ✅ Loaded pending queue: 576 total (556 pending, 20 enriched, 0 posted)
[2026-01-03T19:06:11.320Z] [BOT] ✅ Saved pending queue: 576 total (556 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T19:06:11.369Z] [BOT] 📂 Loaded 1667 existing routing entries
[2026-01-03T19:06:11.419Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1677
   Timestamp: 2026-01-03T19:06:11.412Z
[2026-01-03T19:06:11.419Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 20
[2026-01-03T19:06:11.419Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-03T19:06:11.420Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
[2026-01-03T19:06:11.420Z] [BOT] 1. #🌉・san-francisco: 10 posts
     2. #💲・sales-jobs: 4 posts
     3. #💻・tech-jobs: 3 posts
     4. #💰・finance-jobs: 1 posts
     5. #📊・JID_9910249a: 1 posts
[2026-01-03T19:06:11.420Z] [BOT] [STATS] Channel stats saved
[2026-01-03T19:06:13.433Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*