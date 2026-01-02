# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T12:46:49.760Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T12:46:16.280Z] ========================================
[2026-01-02T12:46:16.282Z] Discord Bot Execution Log
[2026-01-02T12:46:16.282Z] Environment: GitHub Actions
[2026-01-02T12:46:16.282Z] Node Version: v20.19.6
[2026-01-02T12:46:16.282Z] ========================================
[2026-01-02T12:46:16.283Z] Environment Variables Check:
[2026-01-02T12:46:16.283Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T12:46:16.283Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T12:46:16.283Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T12:46:16.283Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T12:46:16.283Z] 
Multi-Channel Configuration:
[2026-01-02T12:46:16.283Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T12:46:16.283Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T12:46:16.283Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T12:46:16.283Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T12:46:16.284Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T12:46:16.284Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T12:46:16.284Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T12:46:16.284Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T12:46:16.284Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T12:46:16.284Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T12:46:16.284Z] 
Data Files Check:
[2026-01-02T12:46:16.285Z] .github/data/new_jobs.json: ✅ Exists (5 items, 29015 bytes)
[2026-01-02T12:46:16.285Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 67946 bytes)
[2026-01-02T12:46:16.285Z] 
========================================
[2026-01-02T12:46:16.285Z] Starting Enhanced Discord Bot...
[2026-01-02T12:46:16.285Z] ========================================
[2026-01-02T12:46:16.820Z] [BOT] ✅ Loaded V2 database: 113 jobs
[2026-01-02T12:46:17.452Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T12:46:17.452Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T12:46:17.453Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T12:46:17.453Z] [BOT] 📦 Exporting 5 jobs to encrypted JSON...
[2026-01-02T12:46:17.496Z] [BOT] 🧹 Cleaned up 5 jobs older than 7 days
[2026-01-02T12:46:17.546Z] [BOT] ✅ Export complete: Added 5, Skipped 0, Total 53
[2026-01-02T12:46:17.547Z] [BOT] 📬 Found 5 new jobs (0 already posted)...
[2026-01-02T12:46:17.547Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2026-01-02T12:46:17.548Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-01-02T12:46:17.548Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-02T12:46:17.548Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T12:46:17.552Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-02T12:46:17.553Z] [BOT] 📍 [ROUTING] "Metering Specialist 1" @ ORG_b4d76491
[2026-01-02T12:46:17.553Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-02T12:46:17.557Z] [BOT ERROR] (node:2604) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T12:46:17.807Z] [BOT] ✅ Created forum post: 🏢 Metering Specialist 1 @ ORG_b4d76491 in #📣・marketing-jobs
[2026-01-02T12:46:17.807Z] [BOT] ✅ Industry: Metering Specialist 1 @ ORG_b4d76491
[2026-01-02T12:46:19.484Z] [BOT] ✅ Created forum post: 🏢 Metering Specialist 1 @ ORG_b4d76491 in #💻・remote-usa
[2026-01-02T12:46:19.485Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-02T12:46:20.986Z] [BOT] 💾 Marked as posted: Metering Specialist 1 @ ORG_b4d76491 (instance #1)
[2026-01-02T12:46:20.986Z] [BOT] 💾 BEFORE ARCHIVING: 114 jobs in database
[2026-01-02T12:46:20.987Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-02T12:46:20.992Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (2 total in archive)
[2026-01-02T12:46:20.992Z] [BOT] ✅ Archiving complete: 2 archived, 112 active
[2026-01-02T12:46:20.994Z] [BOT] 💾 Saved posted_jobs.json: 112 active jobs
[2026-01-02T12:46:20.994Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T12:46:23.995Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-02T12:46:23.995Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science" @ ORG_08c9a13c
[2026-01-02T12:46:23.996Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-02T12:46:24.449Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science @ ORG_125466b8 in #💻・tech-jobs
[2026-01-02T12:46:24.449Z] [BOT] ✅ Industry: Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science @ ORG_08c9a13c
[2026-01-02T12:46:26.143Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science @ ORG_125466b8 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-02T12:46:27.645Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science @ ORG_08c9a13c (instance #1)
[2026-01-02T12:46:27.645Z] [BOT] 💾 BEFORE ARCHIVING: 113 jobs in database
✅ No jobs to archive (all 113 jobs within 7-day window)
[2026-01-02T12:46:27.647Z] [BOT] 💾 Saved posted_jobs.json: 113 active jobs
[2026-01-02T12:46:27.647Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T12:46:30.648Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-02T12:46:30.651Z] [BOT] 📍 [ROUTING] "Field Service Tech 1 - Clovis" @ ORG_3aa5abc7 Games
   Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-02T12:46:30.844Z] [BOT] ✅ Created forum post: 🏢 Field Service Tech 1 - Clovis @ ORG_3aa5abc7 Games in #💲・sales-jobs
[2026-01-02T12:46:30.845Z] [BOT] ✅ Industry: Field Service Tech 1 - Clovis @ ORG_3aa5abc7 Games
[2026-01-02T12:46:32.522Z] [BOT] ✅ Created forum post: 🏢 Field Service Tech 1 - Clovis @ ORG_3aa5abc7 Games in #💻・remote-usa
[2026-01-02T12:46:32.522Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-02T12:46:34.023Z] [BOT] 💾 Marked as posted: Field Service Tech 1 - Clovis @ ORG_3aa5abc7 Games (instance #1)
[2026-01-02T12:46:34.024Z] [BOT] 💾 BEFORE ARCHIVING: 114 jobs in database
✅ No jobs to archive (all 114 jobs within 7-day window)
[2026-01-02T12:46:34.026Z] [BOT] 💾 Saved posted_jobs.json: 114 active jobs
[2026-01-02T12:46:34.026Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T12:46:34.027Z] [BOT] 📍 [ROUTING] "Field Service Tech - Farmington" @ ORG_3aa5abc7 Games
[2026-01-02T12:46:34.027Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-02T12:46:34.189Z] [BOT] ✅ Created forum post: 🏢 Field Service Tech - Farmington @ ORG_3aa5abc7 Games in #💲・sales-jobs
[2026-01-02T12:46:34.189Z] [BOT] ✅ Industry: Field Service Tech - Farmington @ ORG_3aa5abc7 Games
[2026-01-02T12:46:35.902Z] [BOT] ✅ Created forum post: 🏢 Field Service Tech - Farmington @ ORG_3aa5abc7 Games in #💻・remote-usa
[2026-01-02T12:46:35.902Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-02T12:46:37.403Z] [BOT] 💾 Marked as posted: Field Service Tech - Farmington @ ORG_3aa5abc7 Games (instance #1)
[2026-01-02T12:46:37.404Z] [BOT] 💾 BEFORE ARCHIVING: 115 jobs in database
✅ No jobs to archive (all 115 jobs within 7-day window)
[2026-01-02T12:46:37.406Z] [BOT] 💾 Saved posted_jobs.json: 115 active jobs
[2026-01-02T12:46:37.406Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T12:46:40.407Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-02T12:46:40.407Z] [BOT] 📍 [ROUTING] "Application Support Engineer" @ ORG_c072f44b
[2026-01-02T12:46:40.407Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-02T12:46:40.626Z] [BOT] ✅ Created forum post: 🏢 Application Support Engineer @ ORG_c072f44b in #🤖・ai-jobs
[2026-01-02T12:46:40.626Z] [BOT] ✅ Industry: Application Support Engineer @ ORG_c072f44b
[2026-01-02T12:46:42.363Z] [BOT] ✅ Created forum post: 🏢 Application Support Engineer @ ORG_c072f44b in #🦢・los-angeles
[2026-01-02T12:46:42.363Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-02T12:46:43.864Z] [BOT] 💾 Marked as posted: Application Support Engineer @ ORG_c072f44b (instance #1)
[2026-01-02T12:46:43.865Z] [BOT] 💾 BEFORE ARCHIVING: 116 jobs in database
[2026-01-02T12:46:43.865Z] [BOT] ✅ No jobs to archive (all 116 jobs within 7-day window)
[2026-01-02T12:46:43.867Z] [BOT] 💾 Saved posted_jobs.json: 116 active jobs
[2026-01-02T12:46:43.867Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T12:46:46.868Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-02T12:46:46.868Z] [BOT] ⏭️  Skipping duplicate: JID_4936a540 (posted within 7 days)
[2026-01-02T12:46:46.868Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_b43fb50a-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_03b6e054-i_r503556 (posted within 7 days)
⏭️  Skipping duplicate: JID_29d7e240-farmington_r503552 (posted within 7 days)
[2026-01-02T12:46:46.868Z] [BOT] ⏭️  Skipping duplicate: JID_c21b7855 (posted within 7 days)
[2026-01-02T12:46:46.869Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2026-01-02T12:46:46.870Z] [BOT] ✅ Saved pending queue: 5 total (0 pending, 0 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
[2026-01-02T12:46:46.870Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-02T12:46:46.914Z] [BOT] 📂 Loaded 1185 existing routing entries
[2026-01-02T12:46:46.963Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-01-02T12:46:46.963Z] [BOT] Total entries: 1190
   Timestamp: 2026-01-02T12:46:46.956Z
[2026-01-02T12:46:46.963Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T12:46:46.963Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-02T12:46:46.964Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 7
   Top channels:
[2026-01-02T12:46:46.964Z] [BOT] 1. #💻・remote-usa: 3 posts
     2. #💲・sales-jobs: 2 posts
     3. #📣・marketing-jobs: 1 posts
     4. #💻・tech-jobs: 1 posts
     5. #🌧️・seattle: 1 posts
[2026-01-02T12:46:46.964Z] [BOT] [STATS] Channel stats saved
[2026-01-02T12:46:48.976Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2604) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*