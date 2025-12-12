# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T05:51:27.087Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T05:50:54.336Z] ========================================
[2025-12-12T05:50:54.337Z] Discord Bot Execution Log
[2025-12-12T05:50:54.337Z] Environment: GitHub Actions
[2025-12-12T05:50:54.338Z] Node Version: v20.19.6
[2025-12-12T05:50:54.338Z] ========================================
[2025-12-12T05:50:54.338Z] Environment Variables Check:
[2025-12-12T05:50:54.338Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T05:50:54.338Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T05:50:54.338Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T05:50:54.338Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T05:50:54.338Z] 
Multi-Channel Configuration:
[2025-12-12T05:50:54.338Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T05:50:54.338Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T05:50:54.338Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T05:50:54.339Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T05:50:54.339Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T05:50:54.339Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T05:50:54.339Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T05:50:54.339Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T05:50:54.339Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T05:50:54.339Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T05:50:54.339Z] 
Data Files Check:
[2025-12-12T05:50:54.340Z] .github/data/new_jobs.json: ✅ Exists (10 items, 144827 bytes)
[2025-12-12T05:50:54.341Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 40073 bytes)
[2025-12-12T05:50:54.341Z] 
========================================
[2025-12-12T05:50:54.341Z] Starting Enhanced Discord Bot...
[2025-12-12T05:50:54.341Z] ========================================
[2025-12-12T05:50:54.897Z] [BOT] ✅ Loaded V2 database: 62 jobs
[2025-12-12T05:50:55.936Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T05:50:55.937Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T05:50:55.937Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T05:50:55.938Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T05:50:56.055Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 171
[2025-12-12T05:50:56.055Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T05:50:56.055Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
[2025-12-12T05:50:56.056Z] [BOT] ⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2025-12-12T05:50:56.056Z] [BOT] 📬 Found 7 new jobs (3 already posted)...
[2025-12-12T05:50:56.057Z] [BOT] 📋 After blacklist filter: 7 jobs (0 blacklisted)
[2025-12-12T05:50:56.057Z] [BOT] 📋 After data quality filter: 7 jobs (0 invalid)
[2025-12-12T05:50:56.057Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
   (1 grouped as same job with different locations)
[2025-12-12T05:50:56.057Z] [BOT] 📍 1 jobs with multiple locations:
   - Software Engineer I, Frontend @ Twitch: san francisco, irvine
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-12T05:50:56.057Z] [BOT] 📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T05:50:56.061Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-12T05:50:56.061Z] [BOT] 📍 [ROUTING] "Data Dictionary Software Engineer 1" @ ORG_1954b120
[2025-12-12T05:50:56.061Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:50:56.065Z] [BOT ERROR] (node:2691) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T05:50:56.246Z] [BOT] ✅ Created forum post: 🏢 Data Dictionary Software Engineer 1 @ ORG_1954b120 in #💻・tech-jobs
[2025-12-12T05:50:56.246Z] [BOT] ✅ Industry: Data Dictionary Software Engineer 1 @ ORG_1954b120
[2025-12-12T05:50:57.980Z] [BOT] ✅ Created forum post: 🏢 Data Dictionary Software Engineer 1 @ ORG_1954b120 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T05:50:59.480Z] [BOT] 💾 Marked as posted: Data Dictionary Software Engineer 1 @ ORG_1954b120 (instance #1)
[2025-12-12T05:50:59.480Z] [BOT] 💾 BEFORE ARCHIVING: 63 jobs in database
[2025-12-12T05:50:59.481Z] [BOT] ✅ No jobs to archive (all 63 jobs within 7-day window)
[2025-12-12T05:50:59.496Z] [BOT] 💾 Saved posted_jobs.json: 63 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T05:50:59.496Z] [BOT] 📍 [ROUTING] "Junior Backend Engineer" @ ORG_81885e17
   Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:51:00.676Z] [BOT] ✅ Created forum post: 🏢 Junior Backend Engineer @ ORG_81885e17 in #💻・tech-jobs
[2025-12-12T05:51:00.677Z] [BOT] ✅ Industry: Junior Backend Engineer @ ORG_81885e17
[2025-12-12T05:51:02.377Z] [BOT] ✅ Created forum post: 🏢 Junior Backend Engineer @ ORG_81885e17 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-12T05:51:03.877Z] [BOT] 💾 Marked as posted: Junior Backend Engineer @ ORG_81885e17 (instance #1)
[2025-12-12T05:51:03.878Z] [BOT] 💾 BEFORE ARCHIVING: 64 jobs in database
✅ No jobs to archive (all 64 jobs within 7-day window)
[2025-12-12T05:51:03.879Z] [BOT] 💾 Saved posted_jobs.json: 64 active jobs
[2025-12-12T05:51:03.879Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Application Engineer 2" @ ORG_0c79a9c2 Materials
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:51:04.238Z] [BOT] ✅ Created forum post: 🏢 Application Engineer 2 @ ORG_0c79a9c2 Materials in #💻・tech-jobs
  ✅ Industry: Application Engineer 2 @ ORG_0c79a9c2 Materials
[2025-12-12T05:51:06.041Z] [BOT] ✅ Created forum post: 🏢 Application Engineer 2 @ ORG_0c79a9c2 Materials in #🌉・san-francisco
[2025-12-12T05:51:06.041Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-12T05:51:07.541Z] [BOT] 💾 Marked as posted: Application Engineer 2 @ ORG_0c79a9c2 Materials (instance #1)
[2025-12-12T05:51:07.541Z] [BOT] 💾 BEFORE ARCHIVING: 65 jobs in database
✅ No jobs to archive (all 65 jobs within 7-day window)
[2025-12-12T05:51:07.543Z] [BOT] 💾 Saved posted_jobs.json: 65 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T05:51:07.543Z] [BOT] 📍 [ROUTING] "Software Engineer I, Frontend" @ ORG_a731a58c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:51:07.776Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I, Frontend @ ORG_a731a58c in #💻・tech-jobs
[2025-12-12T05:51:07.776Z] [BOT] ✅ Industry: Software Engineer I, Frontend @ ORG_a731a58c
[2025-12-12T05:51:09.497Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I, Frontend @ ORG_a731a58c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-12T05:51:10.998Z] [BOT] 💾 Marked as posted: Software Engineer I, Frontend @ ORG_a731a58c (instance #1)
[2025-12-12T05:51:10.998Z] [BOT] 💾 BEFORE ARCHIVING: 66 jobs in database
✅ No jobs to archive (all 66 jobs within 7-day window)
[2025-12-12T05:51:11.000Z] [BOT] 💾 Saved posted_jobs.json: 66 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T05:51:11.000Z] [BOT] 💾 Marked as posted: Software Engineer I, Frontend @ ORG_a731a58c (instance #1)
[2025-12-12T05:51:11.000Z] [BOT] 💾 BEFORE ARCHIVING: 67 jobs in database
[2025-12-12T05:51:11.000Z] [BOT] ✅ No jobs to archive (all 67 jobs within 7-day window)
[2025-12-12T05:51:11.002Z] [BOT] 💾 Saved posted_jobs.json: 67 active jobs
[2025-12-12T05:51:11.002Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "2026 Full-time - Software Engineer I" @ ORG_75f04b84
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:51:11.199Z] [BOT] ✅ Created forum post: 🏢 2026 Full-time - Software Engineer I @ ORG_75f04b84 in #💻・tech-jobs
[2025-12-12T05:51:11.199Z] [BOT] ✅ Industry: 2026 Full-time - Software Engineer I @ ORG_75f04b84
[2025-12-12T05:51:12.863Z] [BOT] ✅ Created forum post: 🏢 2026 Full-time - Software Engineer I @ ORG_75f04b84 in #💻・remote-usa
[2025-12-12T05:51:12.863Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T05:51:14.364Z] [BOT] 💾 Marked as posted: 2026 Full-time - Software Engineer I @ ORG_75f04b84 (instance #1)
[2025-12-12T05:51:14.364Z] [BOT] 💾 BEFORE ARCHIVING: 68 jobs in database
✅ No jobs to archive (all 68 jobs within 7-day window)
[2025-12-12T05:51:14.366Z] [BOT] 💾 Saved posted_jobs.json: 68 active jobs
[2025-12-12T05:51:14.366Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T05:51:17.366Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-12T05:51:17.366Z] [BOT] 📍 [ROUTING] "Fiber Network Mapping Specialist 4" @ ORG_8d0003a5
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-12T05:51:17.586Z] [BOT] ✅ Created forum post: 🏢 Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 in #📣・marketing-jobs
[2025-12-12T05:51:17.587Z] [BOT] ✅ Industry: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5
[2025-12-12T05:51:19.291Z] [BOT] ✅ Created forum post: 🏢 Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 in #💻・remote-usa
[2025-12-12T05:51:19.291Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T05:51:20.792Z] [BOT] 💾 Marked as posted: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 (instance #1)
[2025-12-12T05:51:20.792Z] [BOT] 💾 BEFORE ARCHIVING: 69 jobs in database
[2025-12-12T05:51:20.792Z] [BOT] ✅ No jobs to archive (all 69 jobs within 7-day window)
[2025-12-12T05:51:20.794Z] [BOT] 💾 Saved posted_jobs.json: 69 active jobs
[2025-12-12T05:51:20.794Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T05:51:23.794Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2025-12-12T05:51:23.794Z] [BOT] ⏭️  Skipping duplicate: JID_e7388d16-1_320288 (posted within 7 days)
[2025-12-12T05:51:23.794Z] [BOT] ⏭️  Skipping duplicate: JID_9ff5d674 (posted within 7 days)
⏭️  Skipping duplicate: JID_feee2f19-ii_r2519522 (posted within 7 days)
⏭️  Skipping duplicate: JID_74713f9b (posted within 7 days)
[2025-12-12T05:51:23.794Z] [BOT] ⏭️  Skipping duplicate: JID_c7109edb-iv_r0014038 (posted within 7 days)
⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_b16c7bb4-_01811827 (posted within 7 days)
[2025-12-12T05:51:23.799Z] [BOT] ✅ Loaded pending queue: 680 total (670 pending, 10 enriched, 0 posted)
[2025-12-12T05:51:23.810Z] [BOT] ✅ Saved pending queue: 680 total (622 pending, 4 enriched, 54 posted)
[2025-12-12T05:51:23.810Z] [BOT] 📋 Updated queue: marked 54 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-12T05:51:23.846Z] [BOT] 📂 Loaded 59 existing routing entries
[2025-12-12T05:51:23.882Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
[2025-12-12T05:51:23.882Z] [BOT] Total entries: 65
   Timestamp: 2025-12-12T05:51:23.881Z
[2025-12-12T05:51:25.891Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2691) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*