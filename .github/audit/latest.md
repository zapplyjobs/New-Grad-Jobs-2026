# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T16:05:46.460Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T16:04:48.646Z] ========================================
[2026-01-03T16:04:48.647Z] Discord Bot Execution Log
[2026-01-03T16:04:48.647Z] Environment: GitHub Actions
[2026-01-03T16:04:48.647Z] Node Version: v20.19.6
[2026-01-03T16:04:48.647Z] ========================================
[2026-01-03T16:04:48.647Z] Environment Variables Check:
[2026-01-03T16:04:48.647Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T16:04:48.647Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T16:04:48.648Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T16:04:48.648Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T16:04:48.648Z] 
Multi-Channel Configuration:
[2026-01-03T16:04:48.648Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T16:04:48.648Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T16:04:48.648Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T16:04:48.648Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T16:04:48.648Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T16:04:48.648Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T16:04:48.648Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T16:04:48.648Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T16:04:48.648Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T16:04:48.648Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T16:04:48.648Z] 
Data Files Check:
[2026-01-03T16:04:48.649Z] .github/data/new_jobs.json: ✅ Exists (10 items, 153185 bytes)
[2026-01-03T16:04:48.652Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 307423 bytes)
[2026-01-03T16:04:48.652Z] 
========================================
[2026-01-03T16:04:48.652Z] Starting Enhanced Discord Bot...
[2026-01-03T16:04:48.652Z] ========================================
[2026-01-03T16:04:49.109Z] [BOT] ✅ Loaded V2 database: 593 jobs
[2026-01-03T16:04:50.132Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T16:04:50.132Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T16:04:50.132Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T16:04:50.133Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T16:04:50.212Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T16:04:50.304Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T16:04:50.306Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T16:04:50.306Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T16:04:50.306Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T16:04:50.307Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T16:04:50.307Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T16:04:50.311Z] [BOT] 📌 Posting 2 jobs to #📊・JID_9910249a
[2026-01-03T16:04:50.312Z] [BOT] 📍 [ROUTING] "Senior Program Manager, Product & Platform Compliance" @ discord
   Category: PROJECT-MANAGEMENT (matched: "project-management")
[2026-01-03T16:04:50.312Z] [BOT] Channel: 📊・JID_9910249a (1391...1276)
[2026-01-03T16:04:50.316Z] [BOT ERROR] (node:2357) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T16:04:50.762Z] [BOT] ✅ Created forum post: 🏢 Senior Program Manager, Product & Platform Compliance @ discord in #📊・JID_9910249a
  ✅ Industry: Senior Program Manager, Product & Platform Compliance @ discord
[2026-01-03T16:04:52.464Z] [BOT] ✅ Created forum post: 🏢 Senior Program Manager, Product & Platform Compliance @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T16:04:53.965Z] [BOT] 💾 Marked as posted: Senior Program Manager, Product & Platform Compliance @ discord (instance #1)
[2026-01-03T16:04:53.965Z] [BOT] 💾 BEFORE ARCHIVING: 594 jobs in database
[2026-01-03T16:04:53.965Z] [BOT] ✅ No jobs to archive (all 594 jobs within 7-day window)
[2026-01-03T16:04:53.973Z] [BOT] 💾 Saved posted_jobs.json: 594 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:04:53.974Z] [BOT] 📍 [ROUTING] "Senior Technical Program Manager, Safety" @ discord
[2026-01-03T16:04:53.974Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-03T16:04:54.277Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Program Manager, Safety @ discord in #📊・JID_9910249a
  ✅ Industry: Senior Technical Program Manager, Safety @ discord
[2026-01-03T16:04:56.021Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Program Manager, Safety @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T16:04:57.522Z] [BOT] 💾 Marked as posted: Senior Technical Program Manager, Safety @ discord (instance #1)
💾 BEFORE ARCHIVING: 595 jobs in database
[2026-01-03T16:04:57.523Z] [BOT] ✅ No jobs to archive (all 595 jobs within 7-day window)
[2026-01-03T16:04:57.528Z] [BOT] 💾 Saved posted_jobs.json: 595 active jobs
[2026-01-03T16:04:57.528Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:05:00.528Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-03T16:05:00.529Z] [BOT] 📍 [ROUTING] "Software Engineer, Growth" @ anthropic
[2026-01-03T16:05:00.529Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T16:05:00.856Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Growth @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Growth @ anthropic
[2026-01-03T16:05:02.827Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Growth @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T16:05:04.329Z] [BOT] 💾 Marked as posted: Software Engineer, Growth @ anthropic (instance #1)
[2026-01-03T16:05:04.329Z] [BOT] 💾 BEFORE ARCHIVING: 596 jobs in database
[2026-01-03T16:05:04.329Z] [BOT] ✅ No jobs to archive (all 596 jobs within 7-day window)
[2026-01-03T16:05:04.335Z] [BOT] 💾 Saved posted_jobs.json: 596 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:05:04.335Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Mobile Architecture" @ discord
[2026-01-03T16:05:04.336Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T16:05:04.558Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Mobile Architecture @ discord in #💻・tech-jobs
[2026-01-03T16:05:04.558Z] [BOT] ✅ Industry: Staff Software Engineer, Mobile Architecture @ discord
[2026-01-03T16:05:06.307Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Mobile Architecture @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T16:05:07.808Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Mobile Architecture @ discord (instance #1)
[2026-01-03T16:05:07.808Z] [BOT] 💾 BEFORE ARCHIVING: 597 jobs in database
[2026-01-03T16:05:07.809Z] [BOT] ✅ No jobs to archive (all 597 jobs within 7-day window)
[2026-01-03T16:05:07.814Z] [BOT] 💾 Saved posted_jobs.json: 597 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:05:07.815Z] [BOT] 📍 [ROUTING] "Data Center Strategic Sourcing Lead" @ anthropic
[2026-01-03T16:05:07.815Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T16:05:08.293Z] [BOT] ✅ Created forum post: 🏢 Data Center Strategic Sourcing Lead @ anthropic in #💻・tech-jobs
[2026-01-03T16:05:08.293Z] [BOT] ✅ Industry: Data Center Strategic Sourcing Lead @ anthropic
[2026-01-03T16:05:10.117Z] [BOT] ✅ Created forum post: 🏢 Data Center Strategic Sourcing Lead @ anthropic in #🌉・san-francisco
[2026-01-03T16:05:10.117Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T16:05:11.617Z] [BOT] 💾 Marked as posted: Data Center Strategic Sourcing Lead @ anthropic (instance #1)
[2026-01-03T16:05:11.617Z] [BOT] 💾 BEFORE ARCHIVING: 598 jobs in database
[2026-01-03T16:05:11.618Z] [BOT] ✅ No jobs to archive (all 598 jobs within 7-day window)
[2026-01-03T16:05:11.623Z] [BOT] 💾 Saved posted_jobs.json: 598 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:05:11.623Z] [BOT] 📍 [ROUTING] "Data Center Facility Operations Lead" @ anthropic
   Category: TECH (matched: "data")
[2026-01-03T16:05:11.623Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T16:05:12.095Z] [BOT] ✅ Created forum post: 🏢 Data Center Facility Operations Lead @ anthropic in #💻・tech-jobs
[2026-01-03T16:05:12.096Z] [BOT] ✅ Industry: Data Center Facility Operations Lead @ anthropic
[2026-01-03T16:05:13.824Z] [BOT] ✅ Created forum post: 🏢 Data Center Facility Operations Lead @ anthropic in #🌉・san-francisco
[2026-01-03T16:05:13.824Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T16:05:15.325Z] [BOT] 💾 Marked as posted: Data Center Facility Operations Lead @ anthropic (instance #1)
[2026-01-03T16:05:15.325Z] [BOT] 💾 BEFORE ARCHIVING: 599 jobs in database
[2026-01-03T16:05:15.326Z] [BOT] ✅ No jobs to archive (all 599 jobs within 7-day window)
[2026-01-03T16:05:15.331Z] [BOT] 💾 Saved posted_jobs.json: 599 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:05:18.332Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-03T16:05:18.333Z] [BOT] 📍 [ROUTING] "Engineering Manager, Systems" @ anthropic
[2026-01-03T16:05:18.333Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T16:05:18.602Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Systems @ anthropic in #🤖・ai-jobs
  ✅ Industry: Engineering Manager, Systems @ anthropic
[2026-01-03T16:05:20.329Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Systems @ anthropic in #🌉・san-francisco
[2026-01-03T16:05:20.329Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T16:05:21.830Z] [BOT] 💾 Marked as posted: Engineering Manager, Systems @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 600 jobs in database
[2026-01-03T16:05:21.830Z] [BOT] ✅ No jobs to archive (all 600 jobs within 7-day window)
[2026-01-03T16:05:21.836Z] [BOT] 💾 Saved posted_jobs.json: 600 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:05:21.836Z] [BOT] 📍 [ROUTING] "Google Partnerships Manager, Digital Native & Startups" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-03T16:05:21.836Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-03T16:05:22.027Z] [BOT] ✅ Created forum post: 🏢 Google Partnerships Manager, Digital Native & Startups @ anthropic in #🤖・ai-jobs
  ✅ Industry: Google Partnerships Manager, Digital Native & Startups @ anthropic
[2026-01-03T16:05:24.184Z] [BOT] ✅ Created forum post: 🏢 Google Partnerships Manager, Digital Native & Startups @ anthropic in #🌉・san-francisco
[2026-01-03T16:05:24.184Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T16:05:25.685Z] [BOT] 💾 Marked as posted: Google Partnerships Manager, Digital Native & Startups @ anthropic (instance #1)
[2026-01-03T16:05:25.685Z] [BOT] 💾 BEFORE ARCHIVING: 601 jobs in database
[2026-01-03T16:05:25.686Z] [BOT] ✅ No jobs to archive (all 601 jobs within 7-day window)
[2026-01-03T16:05:25.691Z] [BOT] 💾 Saved posted_jobs.json: 601 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:05:28.692Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T16:05:28.693Z] [BOT] 📍 [ROUTING] "Manager, IT Support & Operations" @ anthropic
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T16:05:30.589Z] [BOT] ✅ Created forum post: 🏢 Manager, IT Support & Operations @ anthropic in #📣・marketing-jobs
  ✅ Industry: Manager, IT Support & Operations @ anthropic
[2026-01-03T16:05:32.393Z] [BOT] ✅ Created forum post: 🏢 Manager, IT Support & Operations @ anthropic in #🌉・san-francisco
[2026-01-03T16:05:32.393Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T16:05:33.894Z] [BOT] 💾 Marked as posted: Manager, IT Support & Operations @ anthropic (instance #1)
[2026-01-03T16:05:33.894Z] [BOT] 💾 BEFORE ARCHIVING: 602 jobs in database
[2026-01-03T16:05:33.894Z] [BOT] ✅ No jobs to archive (all 602 jobs within 7-day window)
[2026-01-03T16:05:33.900Z] [BOT] 💾 Saved posted_jobs.json: 602 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:05:36.901Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-03T16:05:36.901Z] [BOT] 📍 [ROUTING] "Microsoft GTM Partnerships Manager, Digital Natives & Startups" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T16:05:37.208Z] [BOT] ✅ Created forum post: 🏢 Microsoft GTM Partnerships Manager, Digital Natives & Startups @ anthropic in #💲・sales-jobs
  ✅ Industry: Microsoft GTM Partnerships Manager, Digital Natives & Startups @ anthropic
[2026-01-03T16:05:38.913Z] [BOT] ✅ Created forum post: 🏢 Microsoft GTM Partnerships Manager, Digital Natives & Startups @ anthropic in #🌉・san-francisco
[2026-01-03T16:05:38.913Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T16:05:40.413Z] [BOT] 💾 Marked as posted: Microsoft GTM Partnerships Manager, Digital Natives & Startups @ anthropic (instance #1)
[2026-01-03T16:05:40.413Z] [BOT] 💾 BEFORE ARCHIVING: 603 jobs in database
[2026-01-03T16:05:40.414Z] [BOT] ✅ No jobs to archive (all 603 jobs within 7-day window)
[2026-01-03T16:05:40.419Z] [BOT] 💾 Saved posted_jobs.json: 603 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:05:43.420Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T16:05:43.420Z] [BOT] ⏭️  Skipping duplicate: JID_e59cfc28 (posted within 7 days)
⏭️  Skipping duplicate: JID_f718e68a (posted within 7 days)
⏭️  Skipping duplicate: JID_fce8d8c4 (posted within 7 days)
[2026-01-03T16:05:43.420Z] [BOT] ⏭️  Skipping duplicate: JID_c9122c3a (posted within 7 days)
[2026-01-03T16:05:43.421Z] [BOT] ⏭️  Skipping duplicate: JID_e4c5f6ce (posted within 7 days)
[2026-01-03T16:05:43.421Z] [BOT] ⏭️  Skipping duplicate: JID_bd922941 (posted within 7 days)
[2026-01-03T16:05:43.421Z] [BOT] ⏭️  Skipping duplicate: JID_64549b88 (posted within 7 days)
[2026-01-03T16:05:43.421Z] [BOT] ⏭️  Skipping duplicate: JID_438870e0 (posted within 7 days)
[2026-01-03T16:05:43.421Z] [BOT] ⏭️  Skipping duplicate: JID_623a891c (posted within 7 days)
[2026-01-03T16:05:43.421Z] [BOT] ⏭️  Skipping duplicate: JID_a100ab7f (posted within 7 days)
[2026-01-03T16:05:43.495Z] [BOT] ✅ Loaded pending queue: 696 total (676 pending, 20 enriched, 0 posted)
[2026-01-03T16:05:43.565Z] [BOT] ✅ Saved pending queue: 696 total (676 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T16:05:43.611Z] [BOT] 📂 Loaded 1567 existing routing entries
[2026-01-03T16:05:43.656Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1577
   Timestamp: 2026-01-03T16:05:43.650Z
[2026-01-03T16:05:43.656Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 20
[2026-01-03T16:05:43.656Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-03T16:05:43.656Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
[2026-01-03T16:05:43.657Z] [BOT] Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 10 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-03T16:05:43.657Z] [BOT] 3. #📊・JID_9910249a: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-03T16:05:43.657Z] [BOT] [STATS] Channel stats saved
[2026-01-03T16:05:45.671Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2357) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*