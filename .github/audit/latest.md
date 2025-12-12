# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T07:13:04.316Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T07:12:32.034Z] ========================================
[2025-12-12T07:12:32.036Z] Discord Bot Execution Log
[2025-12-12T07:12:32.036Z] Environment: GitHub Actions
[2025-12-12T07:12:32.036Z] Node Version: v20.19.6
[2025-12-12T07:12:32.036Z] ========================================
[2025-12-12T07:12:32.036Z] Environment Variables Check:
[2025-12-12T07:12:32.036Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T07:12:32.036Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T07:12:32.036Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T07:12:32.036Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T07:12:32.036Z] 
Multi-Channel Configuration:
[2025-12-12T07:12:32.037Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T07:12:32.037Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T07:12:32.037Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T07:12:32.037Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T07:12:32.037Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T07:12:32.037Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T07:12:32.037Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T07:12:32.037Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T07:12:32.037Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T07:12:32.037Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T07:12:32.037Z] 
Data Files Check:
[2025-12-12T07:12:32.038Z] .github/data/new_jobs.json: ✅ Exists (10 items, 145016 bytes)
[2025-12-12T07:12:32.039Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 59257 bytes)
[2025-12-12T07:12:32.039Z] 
========================================
[2025-12-12T07:12:32.039Z] Starting Enhanced Discord Bot...
[2025-12-12T07:12:32.039Z] ========================================
[2025-12-12T07:12:32.603Z] [BOT] ✅ Loaded V2 database: 91 jobs
[2025-12-12T07:12:33.499Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T07:12:33.499Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T07:12:33.500Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T07:12:33.500Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T07:12:33.623Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 194
[2025-12-12T07:12:33.623Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T07:12:33.623Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
[2025-12-12T07:12:33.623Z] [BOT] ⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
[2025-12-12T07:12:33.624Z] [BOT] ⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
⏭️  Skipping duplicate: JID_3345e37e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer I, Frontend at Twitch
[2025-12-12T07:12:33.624Z] [BOT] ⏭️  Skipping duplicate: JID_abad3e00 (posted within 7 days)
⏭️ Skipping already posted: SAP Developer - Level 1 at Cintas
[2025-12-12T07:12:33.624Z] [BOT] 📬 Found 5 new jobs (5 already posted)...
[2025-12-12T07:12:33.624Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2025-12-12T07:12:33.625Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2025-12-12T07:12:33.625Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2025-12-12T07:12:33.625Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T07:12:33.629Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-12T07:12:33.629Z] [BOT] 📍 [ROUTING] "GIS Technician" @ ORG_bf9b9a09
[2025-12-12T07:12:33.629Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2025-12-12T07:12:33.633Z] [BOT ERROR] (node:2572) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T07:12:33.810Z] [BOT] ✅ Created forum post: 🏢 GIS Technician @ ORG_bf9b9a09 in #💰・finance-jobs
  ✅ Industry: GIS Technician @ ORG_bf9b9a09
[2025-12-12T07:12:35.823Z] [BOT] ✅ Created forum post: 🏢 GIS Technician @ ORG_bf9b9a09 in #💻・remote-usa
[2025-12-12T07:12:35.823Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T07:12:37.324Z] [BOT] 💾 Marked as posted: GIS Technician @ ORG_bf9b9a09 (instance #1)
[2025-12-12T07:12:37.324Z] [BOT] 💾 BEFORE ARCHIVING: 92 jobs in database
[2025-12-12T07:12:37.324Z] [BOT] ✅ No jobs to archive (all 92 jobs within 7-day window)
[2025-12-12T07:12:37.331Z] [BOT] 💾 Saved posted_jobs.json: 92 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T07:12:40.330Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-12T07:12:40.331Z] [BOT] 📍 [ROUTING] "System Engineer 2" @ ORG_75f04b84
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T07:12:40.638Z] [BOT] ✅ Created forum post: 🏢 System Engineer 2 @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: System Engineer 2 @ ORG_75f04b84
[2025-12-12T07:12:42.362Z] [BOT] ✅ Created forum post: 🏢 System Engineer 2 @ ORG_75f04b84 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T07:12:43.862Z] [BOT] 💾 Marked as posted: System Engineer 2 @ ORG_75f04b84 (instance #1)
[2025-12-12T07:12:43.863Z] [BOT] 💾 BEFORE ARCHIVING: 93 jobs in database
✅ No jobs to archive (all 93 jobs within 7-day window)
[2025-12-12T07:12:43.865Z] [BOT] 💾 Saved posted_jobs.json: 93 active jobs
[2025-12-12T07:12:43.865Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Data Assistant" @ 10a Labs
   Category: TECH (matched: "data")
[2025-12-12T07:12:43.865Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T07:12:44.075Z] [BOT] ✅ Created forum post: 🏢 Data Assistant @ 10a Labs in #💻・tech-jobs
  ✅ Industry: Data Assistant @ 10a Labs
[2025-12-12T07:12:45.982Z] [BOT] ✅ Created forum post: 🏢 Data Assistant @ 10a Labs in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-12T07:12:47.483Z] [BOT] 💾 Marked as posted: Data Assistant @ 10a Labs (instance #1)
[2025-12-12T07:12:47.483Z] [BOT] 💾 BEFORE ARCHIVING: 94 jobs in database
✅ No jobs to archive (all 94 jobs within 7-day window)
[2025-12-12T07:12:47.485Z] [BOT] 💾 Saved posted_jobs.json: 94 active jobs
[2025-12-12T07:12:47.485Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer 1" @ ORG_c7bac469
   Category: TECH (matched: "software")
[2025-12-12T07:12:47.486Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T07:12:47.865Z] [BOT] ✅ Created forum post: 🟦 Software Engineer 1 @ ORG_c7bac469 in #💻・tech-jobs
[2025-12-12T07:12:47.866Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_c7bac469
[2025-12-12T07:12:49.719Z] [BOT] ✅ Created forum post: 🟦 Software Engineer 1 @ ORG_c7bac469 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2025-12-12T07:12:51.219Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_c7bac469 (instance #1)
[2025-12-12T07:12:51.220Z] [BOT] 💾 BEFORE ARCHIVING: 95 jobs in database
✅ No jobs to archive (all 95 jobs within 7-day window)
[2025-12-12T07:12:51.222Z] [BOT] 💾 Saved posted_jobs.json: 95 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T07:12:54.222Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-12T07:12:54.223Z] [BOT] 📍 [ROUTING] "Applied Scientist" @ ORG_c7bac469
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T07:12:54.656Z] [BOT] ✅ Created forum post: 🟦 Applied Scientist @ ORG_c7bac469 in #🤖・ai-jobs
[2025-12-12T07:12:54.656Z] [BOT] ✅ Industry: Applied Scientist @ ORG_c7bac469
[2025-12-12T07:12:56.427Z] [BOT] ✅ Created forum post: 🟦 Applied Scientist @ ORG_c7bac469 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2025-12-12T07:12:57.928Z] [BOT] 💾 Marked as posted: Applied Scientist @ ORG_c7bac469 (instance #1)
[2025-12-12T07:12:57.928Z] [BOT] 💾 BEFORE ARCHIVING: 96 jobs in database
✅ No jobs to archive (all 96 jobs within 7-day window)
[2025-12-12T07:12:57.931Z] [BOT] 💾 Saved posted_jobs.json: 96 active jobs
[2025-12-12T07:12:57.931Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T07:13:00.932Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-12-12T07:13:00.932Z] [BOT] ⏭️  Skipping duplicate: JID_936e62c6-technician_r00941372-1 (posted within 7 days)
[2025-12-12T07:13:00.932Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_b70eb051-_01811453 (posted within 7 days)
⏭️  Skipping duplicate: JID_4ffb67e7 (posted within 7 days)
[2025-12-12T07:13:00.932Z] [BOT] ⏭️  Skipping duplicate: JID_d9c18e62 (posted within 7 days)
⏭️  Skipping duplicate: JID_15363e9e (posted within 7 days)
[2025-12-12T07:13:00.939Z] [BOT] ✅ Loaded pending queue: 901 total (891 pending, 10 enriched, 0 posted)
[2025-12-12T07:13:00.954Z] [BOT] ✅ Saved pending queue: 901 total (826 pending, 5 enriched, 70 posted)
📋 Updated queue: marked 70 jobs as posted
[2025-12-12T07:13:00.954Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-12T07:13:00.993Z] [BOT] 📂 Loaded 86 existing routing entries
[2025-12-12T07:13:01.031Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 91
[2025-12-12T07:13:01.031Z] [BOT] Timestamp: 2025-12-12T07:13:01.030Z
[2025-12-12T07:13:03.042Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2572) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*