# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T04:06:05.688Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T04:05:17.791Z] ========================================
[2025-12-12T04:05:17.793Z] Discord Bot Execution Log
[2025-12-12T04:05:17.793Z] Environment: GitHub Actions
[2025-12-12T04:05:17.793Z] Node Version: v20.19.6
[2025-12-12T04:05:17.793Z] ========================================
[2025-12-12T04:05:17.793Z] Environment Variables Check:
[2025-12-12T04:05:17.793Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T04:05:17.794Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T04:05:17.794Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T04:05:17.794Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T04:05:17.794Z] 
Multi-Channel Configuration:
[2025-12-12T04:05:17.794Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T04:05:17.794Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T04:05:17.794Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T04:05:17.794Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T04:05:17.794Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T04:05:17.794Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T04:05:17.794Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T04:05:17.794Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T04:05:17.795Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T04:05:17.795Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T04:05:17.795Z] 
Data Files Check:
[2025-12-12T04:05:17.796Z] .github/data/new_jobs.json: ✅ Exists (10 items, 160670 bytes)
[2025-12-12T04:05:17.796Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6815 bytes)
[2025-12-12T04:05:17.796Z] 
========================================
[2025-12-12T04:05:17.796Z] Starting Enhanced Discord Bot...
[2025-12-12T04:05:17.796Z] ========================================
[2025-12-12T04:05:18.386Z] [BOT] ✅ Loaded V2 database: 10 jobs
[2025-12-12T04:05:19.097Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T04:05:19.097Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T04:05:19.098Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T04:05:19.099Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T04:05:19.206Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 121
[2025-12-12T04:05:19.206Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T04:05:19.206Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
[2025-12-12T04:05:19.207Z] [BOT] 📬 Found 9 new jobs (1 already posted)...
[2025-12-12T04:05:19.207Z] [BOT] 📋 After blacklist filter: 9 jobs (0 blacklisted)
📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-12T04:05:19.208Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2025-12-12T04:05:19.208Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Associate Software Engineer - Starting Summer 2026 @ Empower: greenwood village, hartford
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T04:05:19.212Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-12T04:05:19.212Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_13e36faa Lab
[2025-12-12T04:05:19.212Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-12T04:05:19.217Z] [BOT ERROR] (node:3099) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T04:05:19.566Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_13e36faa Lab in #📁・JID_e938df7b
[2025-12-12T04:05:19.566Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_13e36faa Lab
[2025-12-12T04:05:21.417Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_13e36faa Lab in #🗽・new-york
[2025-12-12T04:05:21.418Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-12T04:05:22.918Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate @ ORG_13e36faa Lab (instance #1)
[2025-12-12T04:05:22.918Z] [BOT] 💾 BEFORE ARCHIVING: 11 jobs in database
[2025-12-12T04:05:22.919Z] [BOT] ✅ No jobs to archive (all 11 jobs within 7-day window)
[2025-12-12T04:05:22.925Z] [BOT] 💾 Saved posted_jobs.json: 11 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T04:05:25.925Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-12T04:05:25.926Z] [BOT] 📍 [ROUTING] "Entry-Level Field Geologist" @ ORG_9b39a44d
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-12T04:05:26.217Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Field Geologist @ ORG_9b39a44d in #🩺・healthcare-jobs
  ✅ Industry: Entry-Level Field Geologist @ ORG_9b39a44d
[2025-12-12T04:05:27.946Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Field Geologist @ ORG_9b39a44d in #💻・remote-usa
[2025-12-12T04:05:27.947Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T04:05:29.448Z] [BOT] 💾 Marked as posted: Entry-Level Field Geologist @ ORG_9b39a44d (instance #1)
[2025-12-12T04:05:29.448Z] [BOT] 💾 BEFORE ARCHIVING: 12 jobs in database
✅ No jobs to archive (all 12 jobs within 7-day window)
[2025-12-12T04:05:29.449Z] [BOT] 💾 Saved posted_jobs.json: 12 active jobs
[2025-12-12T04:05:29.449Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:05:32.449Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-12T04:05:32.450Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst" @ ORG_2d1e8306 Specialty
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T04:05:32.763Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_2d1e8306 Specialty in #📈・JID_fb739488
[2025-12-12T04:05:32.763Z] [BOT] ✅ Industry: Business Intelligence Analyst @ ORG_2d1e8306 Specialty
[2025-12-12T04:05:34.449Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_2d1e8306 Specialty in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T04:05:35.949Z] [BOT] 💾 Marked as posted: Business Intelligence Analyst @ ORG_2d1e8306 Specialty (instance #1)
[2025-12-12T04:05:35.950Z] [BOT] 💾 BEFORE ARCHIVING: 13 jobs in database
✅ No jobs to archive (all 13 jobs within 7-day window)
[2025-12-12T04:05:35.951Z] [BOT] 💾 Saved posted_jobs.json: 13 active jobs
[2025-12-12T04:05:35.951Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:05:38.952Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-12T04:05:38.952Z] [BOT] 📍 [ROUTING] "Software Engineer - Ent" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:05:39.269Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Ent @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2025-12-12T04:05:39.269Z] [BOT] ✅ Industry: Software Engineer - Ent @ ORG_f3f2248d Grumman
[2025-12-12T04:05:41.086Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Ent @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T04:05:42.587Z] [BOT] 💾 Marked as posted: Software Engineer - Ent @ ORG_f3f2248d Grumman (instance #1)
[2025-12-12T04:05:42.587Z] [BOT] 💾 BEFORE ARCHIVING: 14 jobs in database
✅ No jobs to archive (all 14 jobs within 7-day window)
[2025-12-12T04:05:42.588Z] [BOT] 💾 Saved posted_jobs.json: 14 active jobs
[2025-12-12T04:05:42.588Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Developer" @ ORG_f231c4f6insRéalis
   Category: TECH (matched: "software")
[2025-12-12T04:05:42.589Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:05:42.826Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_f231c4f6insRéalis in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_f231c4f6insRéalis
[2025-12-12T04:05:44.595Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_f231c4f6insRéalis in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T04:05:46.095Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_f231c4f6insRéalis (instance #1)
[2025-12-12T04:05:46.096Z] [BOT] 💾 BEFORE ARCHIVING: 15 jobs in database
✅ No jobs to archive (all 15 jobs within 7-day window)
[2025-12-12T04:05:46.097Z] [BOT] 💾 Saved posted_jobs.json: 15 active jobs
[2025-12-12T04:05:46.097Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Associate Software Engineer - Starting Summer 2026" @ ORG_332e75fd
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:05:46.293Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Starting Summer 2026 @ ORG_332e75fd in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer - Starting Summer 2026 @ ORG_332e75fd
[2025-12-12T04:05:47.964Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Starting Summer 2026 @ ORG_332e75fd in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T04:05:49.465Z] [BOT] 💾 Marked as posted: Associate Software Engineer - Starting Summer 2026 @ ORG_332e75fd (instance #1)
[2025-12-12T04:05:49.465Z] [BOT] 💾 BEFORE ARCHIVING: 16 jobs in database
✅ No jobs to archive (all 16 jobs within 7-day window)
[2025-12-12T04:05:49.467Z] [BOT] 💾 Saved posted_jobs.json: 16 active jobs
[2025-12-12T04:05:49.467Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:05:49.467Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_332e75fd (instance #1)
[2025-12-12T04:05:49.467Z] [BOT] 💾 BEFORE ARCHIVING: 17 jobs in database
[2025-12-12T04:05:49.467Z] [BOT] ✅ No jobs to archive (all 17 jobs within 7-day window)
[2025-12-12T04:05:49.468Z] [BOT] 💾 Saved posted_jobs.json: 17 active jobs
[2025-12-12T04:05:49.468Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:05:52.468Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-12T04:05:52.469Z] [BOT] 📍 [ROUTING] "Research Scientist - Post Doc Research Fellow" @ ORG_f186449d University
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T04:05:52.892Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Post Doc Research Fellow @ ORG_f186449d University in #🤖・ai-jobs
[2025-12-12T04:05:52.892Z] [BOT] ✅ Industry: Research Scientist - Post Doc Research Fellow @ ORG_f186449d University
[2025-12-12T04:05:54.582Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Post Doc Research Fellow @ ORG_f186449d University in #💻・remote-usa
[2025-12-12T04:05:54.582Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T04:05:56.083Z] [BOT] 💾 Marked as posted: Research Scientist - Post Doc Research Fellow @ ORG_f186449d University (instance #1)
[2025-12-12T04:05:56.083Z] [BOT] 💾 BEFORE ARCHIVING: 18 jobs in database
✅ No jobs to archive (all 18 jobs within 7-day window)
[2025-12-12T04:05:56.084Z] [BOT] 💾 Saved posted_jobs.json: 18 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T04:05:56.084Z] [BOT] 📍 [ROUTING] "Applied Scientist" @ ORG_72fd3ae0
[2025-12-12T04:05:56.084Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T04:05:56.502Z] [BOT] ✅ Created forum post: 🎨 Applied Scientist @ ORG_72fd3ae0 in #🤖・ai-jobs
[2025-12-12T04:05:56.502Z] [BOT] ✅ Industry: Applied Scientist @ ORG_72fd3ae0
[2025-12-12T04:05:58.311Z] [BOT] ✅ Created forum post: 🎨 Applied Scientist @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-12T04:05:59.813Z] [BOT] 💾 Marked as posted: Applied Scientist @ ORG_72fd3ae0 (instance #1)
[2025-12-12T04:05:59.813Z] [BOT] 💾 BEFORE ARCHIVING: 19 jobs in database
✅ No jobs to archive (all 19 jobs within 7-day window)
[2025-12-12T04:05:59.814Z] [BOT] 💾 Saved posted_jobs.json: 19 active jobs
[2025-12-12T04:05:59.814Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:06:02.815Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2025-12-12T04:06:02.815Z] [BOT] ⏭️  Skipping duplicate: JID_3e41ae3e-associate_jr102131 (posted within 7 days)
⏭️  Skipping duplicate: JID_24413a51 (posted within 7 days)
[2025-12-12T04:06:02.816Z] [BOT] ⏭️  Skipping duplicate: JID_9ecc75be-ryan_specialty_career_site-JID_097d5bb0-analyst_jr25-3719 (posted within 7 days)
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_d9435324-_r10216983 (posted within 7 days)
[2025-12-12T04:06:02.816Z] [BOT] ⏭️  Skipping duplicate: JID_f9177f3a-developer_r-136762-1 (posted within 7 days)
[2025-12-12T04:06:02.816Z] [BOT] ⏭️  Skipping duplicate: JID_72cf4298-2026_r0054978-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_22004331-_jr107708-1 (posted within 7 days)
[2025-12-12T04:06:02.816Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_c174e875-engineer_r157087 (posted within 7 days)
[2025-12-12T04:06:02.818Z] [BOT] ✅ Loaded pending queue: 201 total (191 pending, 10 enriched, 0 posted)
[2025-12-12T04:06:02.824Z] [BOT] ✅ Saved pending queue: 201 total (183 pending, 2 enriched, 16 posted)
📋 Updated queue: marked 16 jobs as posted
[2025-12-12T04:06:02.824Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-12T04:06:02.861Z] [BOT] 📂 Loaded 9 existing routing entries
[2025-12-12T04:06:02.898Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 17
   Timestamp: 2025-12-12T04:06:02.897Z
[2025-12-12T04:06:04.911Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3099) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*