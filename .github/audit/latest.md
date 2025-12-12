# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T06:26:47.620Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T06:26:15.807Z] ========================================
[2025-12-12T06:26:15.809Z] Discord Bot Execution Log
[2025-12-12T06:26:15.809Z] Environment: GitHub Actions
[2025-12-12T06:26:15.809Z] Node Version: v20.19.6
[2025-12-12T06:26:15.809Z] ========================================
[2025-12-12T06:26:15.809Z] Environment Variables Check:
[2025-12-12T06:26:15.810Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T06:26:15.810Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T06:26:15.810Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T06:26:15.810Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T06:26:15.810Z] 
Multi-Channel Configuration:
[2025-12-12T06:26:15.810Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T06:26:15.810Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T06:26:15.810Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T06:26:15.810Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T06:26:15.810Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T06:26:15.810Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T06:26:15.810Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T06:26:15.811Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T06:26:15.811Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T06:26:15.811Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T06:26:15.811Z] 
Data Files Check:
[2025-12-12T06:26:15.812Z] .github/data/new_jobs.json: ✅ Exists (10 items, 155004 bytes)
[2025-12-12T06:26:15.812Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 48711 bytes)
[2025-12-12T06:26:15.812Z] 
========================================
[2025-12-12T06:26:15.812Z] Starting Enhanced Discord Bot...
[2025-12-12T06:26:15.812Z] ========================================
[2025-12-12T06:26:16.377Z] [BOT] ✅ Loaded V2 database: 75 jobs
[2025-12-12T06:26:17.566Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T06:26:17.567Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T06:26:17.567Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T06:26:17.568Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T06:26:17.686Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 183
[2025-12-12T06:26:17.687Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T06:26:17.687Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
[2025-12-12T06:26:17.687Z] [BOT] ⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
[2025-12-12T06:26:17.687Z] [BOT] ⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
⏭️  Skipping duplicate: JID_3345e37e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer I, Frontend at Twitch
[2025-12-12T06:26:17.688Z] [BOT] 📬 Found 6 new jobs (4 already posted)...
[2025-12-12T06:26:17.688Z] [BOT] 📋 After blacklist filter: 6 jobs (0 blacklisted)
📋 After data quality filter: 6 jobs (0 invalid)
[2025-12-12T06:26:17.689Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2025-12-12T06:26:17.689Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T06:26:17.693Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-12T06:26:17.693Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
[2025-12-12T06:26:17.693Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-12T06:26:17.698Z] [BOT ERROR] (node:2701) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T06:26:17.886Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
  ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-12T06:26:19.586Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T06:26:21.087Z] [BOT] 💾 Marked as posted: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares (instance #1)
[2025-12-12T06:26:21.087Z] [BOT] 💾 BEFORE ARCHIVING: 76 jobs in database
[2025-12-12T06:26:21.087Z] [BOT] ✅ No jobs to archive (all 76 jobs within 7-day window)
[2025-12-12T06:26:21.093Z] [BOT] 💾 Saved posted_jobs.json: 76 active jobs
[2025-12-12T06:26:21.094Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T06:26:24.093Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-12T06:26:24.094Z] [BOT] 📍 [ROUTING] "SAP Developer - Level 1" @ ORG_25a52514
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T06:26:24.339Z] [BOT] ✅ Created forum post: 🏢 SAP Developer - Level 1 @ ORG_25a52514 in #💻・tech-jobs
[2025-12-12T06:26:24.339Z] [BOT] ✅ Industry: SAP Developer - Level 1 @ ORG_25a52514
[2025-12-12T06:26:26.063Z] [BOT] ✅ Created forum post: 🏢 SAP Developer - Level 1 @ ORG_25a52514 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T06:26:27.564Z] [BOT] 💾 Marked as posted: SAP Developer - Level 1 @ ORG_25a52514 (instance #1)
[2025-12-12T06:26:27.565Z] [BOT] 💾 BEFORE ARCHIVING: 77 jobs in database
✅ No jobs to archive (all 77 jobs within 7-day window)
[2025-12-12T06:26:27.567Z] [BOT] 💾 Saved posted_jobs.json: 77 active jobs
[2025-12-12T06:26:27.567Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T06:26:27.567Z] [BOT] 💾 Marked as posted: SAP Developer - Level 1 @ ORG_25a52514 (instance #1)
💾 BEFORE ARCHIVING: 78 jobs in database
[2025-12-12T06:26:27.567Z] [BOT] ✅ No jobs to archive (all 78 jobs within 7-day window)
[2025-12-12T06:26:27.569Z] [BOT] 💾 Saved posted_jobs.json: 78 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T06:26:27.569Z] [BOT] 📍 [ROUTING] "Software Engineer - Level 2 or 3" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T06:26:28.069Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level 2 or 3 @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2025-12-12T06:26:28.069Z] [BOT] ✅ Industry: Software Engineer - Level 2 or 3 @ ORG_f3f2248d Grumman
[2025-12-12T06:26:29.758Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level 2 or 3 @ ORG_f3f2248d Grumman in #💻・remote-usa
[2025-12-12T06:26:29.758Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T06:26:31.259Z] [BOT] 💾 Marked as posted: Software Engineer - Level 2 or 3 @ ORG_f3f2248d Grumman (instance #1)
[2025-12-12T06:26:31.259Z] [BOT] 💾 BEFORE ARCHIVING: 79 jobs in database
✅ No jobs to archive (all 79 jobs within 7-day window)
[2025-12-12T06:26:31.261Z] [BOT] 💾 Saved posted_jobs.json: 79 active jobs
[2025-12-12T06:26:31.261Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Mainframe Software Engineer 1 or 2" @ ORG_a258b30f Payments
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T06:26:31.480Z] [BOT] ✅ Created forum post: 🏢 Mainframe Software Engineer 1 or 2 @ ORG_a258b30f Payments in #💻・tech-jobs
[2025-12-12T06:26:31.480Z] [BOT] ✅ Industry: Mainframe Software Engineer 1 or 2 @ ORG_a258b30f Payments
[2025-12-12T06:26:33.209Z] [BOT] ✅ Created forum post: 🏢 Mainframe Software Engineer 1 or 2 @ ORG_a258b30f Payments in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T06:26:34.710Z] [BOT] 💾 Marked as posted: Mainframe Software Engineer 1 or 2 @ ORG_a258b30f Payments (instance #1)
[2025-12-12T06:26:34.710Z] [BOT] 💾 BEFORE ARCHIVING: 80 jobs in database
✅ No jobs to archive (all 80 jobs within 7-day window)
[2025-12-12T06:26:34.713Z] [BOT] 💾 Saved posted_jobs.json: 80 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T06:26:37.714Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-12T06:26:37.714Z] [BOT] 📍 [ROUTING] "Senior Analyst - Business Support" @ ORG_3eab285c
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-12T06:26:38.027Z] [BOT] ✅ Created forum post: 🏢 Senior Analyst - Business Support @ ORG_3eab285c in #📣・marketing-jobs
  ✅ Industry: Senior Analyst - Business Support @ ORG_3eab285c
[2025-12-12T06:26:39.741Z] [BOT] ✅ Created forum post: 🏢 Senior Analyst - Business Support @ ORG_3eab285c in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T06:26:41.242Z] [BOT] 💾 Marked as posted: Senior Analyst - Business Support @ ORG_3eab285c (instance #1)
[2025-12-12T06:26:41.243Z] [BOT] 💾 BEFORE ARCHIVING: 81 jobs in database
✅ No jobs to archive (all 81 jobs within 7-day window)
[2025-12-12T06:26:41.245Z] [BOT] 💾 Saved posted_jobs.json: 81 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T06:26:44.246Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-12-12T06:26:44.246Z] [BOT] ⏭️  Skipping duplicate: JID_6ff5df0b-_r0067581 (posted within 7 days)
⏭️  Skipping duplicate: JID_f63b0a9c (posted within 7 days)
[2025-12-12T06:26:44.246Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_c72e6c1d-3_r10216455-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_b4b04a19-support_r-2364373 (posted within 7 days)
[2025-12-12T06:26:44.246Z] [BOT] ⏭️  Skipping duplicate: JID_f43e281c-ii_r0067829 (posted within 7 days)
[2025-12-12T06:26:44.251Z] [BOT] ✅ Loaded pending queue: 772 total (762 pending, 10 enriched, 0 posted)
[2025-12-12T06:26:44.263Z] [BOT] ✅ Saved pending queue: 772 total (712 pending, 5 enriched, 55 posted)
[2025-12-12T06:26:44.263Z] [BOT] 📋 Updated queue: marked 55 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-12T06:26:44.300Z] [BOT] 📂 Loaded 71 existing routing entries
[2025-12-12T06:26:44.336Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2025-12-12T06:26:44.336Z] [BOT] Total entries: 76
   Timestamp: 2025-12-12T06:26:44.335Z
[2025-12-12T06:26:46.347Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2701) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*