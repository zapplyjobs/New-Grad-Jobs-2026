# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T04:19:50.592Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T04:19:02.566Z] ========================================
[2026-01-14T04:19:02.568Z] Discord Bot Execution Log
[2026-01-14T04:19:02.568Z] Environment: GitHub Actions
[2026-01-14T04:19:02.568Z] Node Version: v20.19.6
[2026-01-14T04:19:02.568Z] ========================================
[2026-01-14T04:19:02.568Z] Environment Variables Check:
[2026-01-14T04:19:02.568Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T04:19:02.568Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T04:19:02.568Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T04:19:02.569Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T04:19:02.569Z] 
Multi-Channel Configuration:
[2026-01-14T04:19:02.569Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T04:19:02.569Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T04:19:02.569Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T04:19:02.569Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T04:19:02.569Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T04:19:02.569Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T04:19:02.569Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T04:19:02.569Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T04:19:02.569Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T04:19:02.569Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T04:19:02.570Z] 
Data Files Check:
[2026-01-14T04:19:02.571Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157205 bytes)
[2026-01-14T04:19:02.575Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 613812 bytes)
[2026-01-14T04:19:02.575Z] 
========================================
[2026-01-14T04:19:02.575Z] Starting Enhanced Discord Bot...
[2026-01-14T04:19:02.575Z] ========================================
[2026-01-14T04:19:03.092Z] [BOT] ✅ Loaded V2 database: 1161 jobs
[2026-01-14T04:19:03.873Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T04:19:03.873Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T04:19:03.874Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T04:19:03.985Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Data Scientist at brex
[2026-01-14T04:19:03.988Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T04:19:03.989Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T04:19:03.989Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T04:19:03.990Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2026-01-14T04:19:03.990Z] [BOT] (13 grouped as same job with different locations)
📍 7 jobs with multiple locations:
   - Senior Data Scientist @ brex: new york, new york, united states, san francisco, california, united states
   - Senior Engineering Manager, Acquisition @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
   - Senior Engineering Manager, Activation @ brex: new york, new york, united states, seattle, washington, united states
   - Senior Engineering Manager, Risk Management @ brex: new york, new york, united states, seattle, washington, united states, san francisco, california, united states
   - Senior GTM Recruiter @ brex: salt lake city, utah, united states, san francisco, california, united states, new york, new york, united states
[2026-01-14T04:19:03.990Z] [BOT] -  Senior Manager, Implementation @ brex: salt lake city, utah, united states, san francisco, california, united states, seattle, washington, united states, new york, new york, united states
   - Senior Partner Marketing Manager @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 13 deferred for next run
📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T04:19:03.994Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T04:19:03.995Z] [BOT] 📍 [ROUTING] "Senior Data Scientist" @ brex
[2026-01-14T04:19:03.995Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T04:19:04.012Z] [BOT ERROR] (node:2546) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T04:19:04.216Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist @ brex in #📈・JID_fb739488
[2026-01-14T04:19:04.216Z] [BOT] ✅ Industry: Senior Data Scientist @ brex
[2026-01-14T04:19:05.981Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T04:19:07.482Z] [BOT] 💾 Marked as posted: Senior Data Scientist @ brex (instance #1)
[2026-01-14T04:19:07.482Z] [BOT] 💾 BEFORE ARCHIVING: 1162 jobs in database
[2026-01-14T04:19:07.483Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T04:19:07.485Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-14T04:19:07.486Z] [BOT] ✅ Archiving complete: 1 archived, 1161 active
[2026-01-14T04:19:07.493Z] [BOT] 💾 Saved posted_jobs.json: 1161 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:07.493Z] [BOT] 💾 Marked as posted: Senior Data Scientist @ brex (instance #1)
[2026-01-14T04:19:07.493Z] [BOT] 💾 BEFORE ARCHIVING: 1162 jobs in database
[2026-01-14T04:19:07.494Z] [BOT] ✅ No jobs to archive (all 1162 jobs within 7-day window)
[2026-01-14T04:19:07.501Z] [BOT] 💾 Saved posted_jobs.json: 1162 active jobs
[2026-01-14T04:19:07.501Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:10.502Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-14T04:19:10.502Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Acquisition" @ brex
[2026-01-14T04:19:10.502Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T04:19:10.748Z] [BOT] ✅ Created forum post: 🏢 Senior Engineering Manager, Acquisition @ brex in #💻・tech-jobs
  ✅ Industry: Senior Engineering Manager, Acquisition @ brex
[2026-01-14T04:19:12.509Z] [BOT] ✅ Created forum post: 🏢 Senior Engineering Manager, Acquisition @ brex in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-14T04:19:14.010Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Acquisition @ brex (instance #1)
[2026-01-14T04:19:14.010Z] [BOT] 💾 BEFORE ARCHIVING: 1163 jobs in database
[2026-01-14T04:19:14.011Z] [BOT] ✅ No jobs to archive (all 1163 jobs within 7-day window)
[2026-01-14T04:19:14.020Z] [BOT] 💾 Saved posted_jobs.json: 1163 active jobs
[2026-01-14T04:19:14.020Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:14.020Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Acquisition @ brex (instance #1)
💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-14T04:19:14.021Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-14T04:19:14.029Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
[2026-01-14T04:19:14.030Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:14.030Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Acquisition @ brex (instance #1)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-14T04:19:14.031Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-14T04:19:14.038Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:14.039Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Risk Management" @ brex
[2026-01-14T04:19:14.039Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T04:19:14.502Z] [BOT] ✅ Created forum post: 🏢 Senior Engineering Manager, Risk Management @ brex in #💻・tech-jobs
  ✅ Industry: Senior Engineering Manager, Risk Management @ brex
[2026-01-14T04:19:16.311Z] [BOT] ✅ Created forum post: 🏢 Senior Engineering Manager, Risk Management @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T04:19:17.811Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Risk Management @ brex (instance #1)
[2026-01-14T04:19:17.811Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-14T04:19:17.812Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-14T04:19:17.820Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:17.820Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Risk Management  @ brex (instance #1)
💾 BEFORE ARCHIVING: 1167 jobs in database
[2026-01-14T04:19:17.821Z] [BOT] ✅ No jobs to archive (all 1167 jobs within 7-day window)
[2026-01-14T04:19:17.829Z] [BOT] 💾 Saved posted_jobs.json: 1167 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:17.829Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Risk Management  @ brex (instance #1)
💾 BEFORE ARCHIVING: 1168 jobs in database
[2026-01-14T04:19:17.830Z] [BOT] ✅ No jobs to archive (all 1168 jobs within 7-day window)
[2026-01-14T04:19:17.836Z] [BOT] 💾 Saved posted_jobs.json: 1168 active jobs
[2026-01-14T04:19:17.836Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:20.837Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-14T04:19:20.838Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Activation" @ brex
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T04:19:20.838Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T04:19:21.057Z] [BOT] ✅ Created forum post: 🏢 Senior Engineering Manager, Activation @ brex in #🤖・ai-jobs
  ✅ Industry: Senior Engineering Manager, Activation @ brex
[2026-01-14T04:19:22.822Z] [BOT] ✅ Created forum post: 🏢 Senior Engineering Manager, Activation @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T04:19:24.323Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Activation @ brex (instance #1)
[2026-01-14T04:19:24.323Z] [BOT] 💾 BEFORE ARCHIVING: 1169 jobs in database
[2026-01-14T04:19:24.324Z] [BOT] ✅ No jobs to archive (all 1169 jobs within 7-day window)
[2026-01-14T04:19:24.331Z] [BOT] 💾 Saved posted_jobs.json: 1169 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:24.331Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Activation @ brex (instance #1)
[2026-01-14T04:19:24.331Z] [BOT] 💾 BEFORE ARCHIVING: 1170 jobs in database
[2026-01-14T04:19:24.332Z] [BOT] ✅ No jobs to archive (all 1170 jobs within 7-day window)
[2026-01-14T04:19:24.339Z] [BOT] 💾 Saved posted_jobs.json: 1170 active jobs
[2026-01-14T04:19:24.339Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:27.341Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-14T04:19:27.341Z] [BOT] 📍 [ROUTING] "Senior GTM Recruiter" @ brex
[2026-01-14T04:19:27.341Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-14T04:19:27.546Z] [BOT] ✅ Created forum post: 🏢 Senior GTM Recruiter @ brex in #📁・JID_e938df7b
[2026-01-14T04:19:27.546Z] [BOT] ✅ Industry: Senior GTM Recruiter @ brex
[2026-01-14T04:19:29.289Z] [BOT] ✅ Created forum post: 🏢 Senior GTM Recruiter @ brex in #💻・remote-usa
[2026-01-14T04:19:29.289Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T04:19:30.790Z] [BOT] 💾 Marked as posted: Senior GTM Recruiter @ brex (instance #1)
[2026-01-14T04:19:30.790Z] [BOT] 💾 BEFORE ARCHIVING: 1171 jobs in database
[2026-01-14T04:19:30.791Z] [BOT] ✅ No jobs to archive (all 1171 jobs within 7-day window)
[2026-01-14T04:19:30.798Z] [BOT] 💾 Saved posted_jobs.json: 1171 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:30.798Z] [BOT] 💾 Marked as posted: Senior GTM Recruiter @ brex (instance #1)
[2026-01-14T04:19:30.798Z] [BOT] 💾 BEFORE ARCHIVING: 1172 jobs in database
[2026-01-14T04:19:30.799Z] [BOT] ✅ No jobs to archive (all 1172 jobs within 7-day window)
[2026-01-14T04:19:30.807Z] [BOT] 💾 Saved posted_jobs.json: 1172 active jobs
[2026-01-14T04:19:30.807Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior GTM Recruiter @ brex (instance #1)
[2026-01-14T04:19:30.808Z] [BOT] 💾 BEFORE ARCHIVING: 1173 jobs in database
[2026-01-14T04:19:30.808Z] [BOT] ✅ No jobs to archive (all 1173 jobs within 7-day window)
[2026-01-14T04:19:30.816Z] [BOT] 💾 Saved posted_jobs.json: 1173 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:33.817Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-14T04:19:33.817Z] [BOT] 📍 [ROUTING] " Senior Manager, Implementation" @ brex
[2026-01-14T04:19:33.817Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T04:19:34.040Z] [BOT] ✅ Created forum post: 🏢  Senior Manager, Implementation @ brex in #💲・sales-jobs
  ✅ Industry:  Senior Manager, Implementation @ brex
[2026-01-14T04:19:35.770Z] [BOT] ✅ Created forum post: 🏢  Senior Manager, Implementation @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T04:19:37.271Z] [BOT] 💾 Marked as posted:  Senior Manager, Implementation @ brex (instance #1)
[2026-01-14T04:19:37.271Z] [BOT] 💾 BEFORE ARCHIVING: 1174 jobs in database
[2026-01-14T04:19:37.272Z] [BOT] ✅ No jobs to archive (all 1174 jobs within 7-day window)
[2026-01-14T04:19:37.281Z] [BOT] 💾 Saved posted_jobs.json: 1174 active jobs
[2026-01-14T04:19:37.281Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:37.281Z] [BOT] 💾 Marked as posted: Senior Manager, Implementation @ brex (instance #1)
💾 BEFORE ARCHIVING: 1175 jobs in database
[2026-01-14T04:19:37.282Z] [BOT] ✅ No jobs to archive (all 1175 jobs within 7-day window)
[2026-01-14T04:19:37.290Z] [BOT] 💾 Saved posted_jobs.json: 1175 active jobs
[2026-01-14T04:19:37.290Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Manager, Implementation @ brex (instance #1)
[2026-01-14T04:19:37.290Z] [BOT] 💾 BEFORE ARCHIVING: 1176 jobs in database
[2026-01-14T04:19:37.291Z] [BOT] ✅ No jobs to archive (all 1176 jobs within 7-day window)
[2026-01-14T04:19:37.299Z] [BOT] 💾 Saved posted_jobs.json: 1176 active jobs
[2026-01-14T04:19:37.299Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Manager, Implementation @ brex (instance #1)
[2026-01-14T04:19:37.299Z] [BOT] 💾 BEFORE ARCHIVING: 1177 jobs in database
[2026-01-14T04:19:37.299Z] [BOT] ✅ No jobs to archive (all 1177 jobs within 7-day window)
[2026-01-14T04:19:37.307Z] [BOT] 💾 Saved posted_jobs.json: 1177 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:40.308Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T04:19:40.308Z] [BOT] 📍 [ROUTING] "Senior Partner Marketing Manager" @ brex
[2026-01-14T04:19:40.308Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T04:19:40.533Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Marketing Manager @ brex in #📣・marketing-jobs
  ✅ Industry: Senior Partner Marketing Manager @ brex
[2026-01-14T04:19:42.317Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Marketing Manager @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T04:19:43.817Z] [BOT] 💾 Marked as posted: Senior Partner Marketing Manager @ brex (instance #1)
[2026-01-14T04:19:43.817Z] [BOT] 💾 BEFORE ARCHIVING: 1178 jobs in database
[2026-01-14T04:19:43.818Z] [BOT] ✅ No jobs to archive (all 1178 jobs within 7-day window)
[2026-01-14T04:19:43.825Z] [BOT] 💾 Saved posted_jobs.json: 1178 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:43.825Z] [BOT] 💾 Marked as posted: Senior Partner Marketing Manager @ brex (instance #1)
💾 BEFORE ARCHIVING: 1179 jobs in database
[2026-01-14T04:19:43.826Z] [BOT] ✅ No jobs to archive (all 1179 jobs within 7-day window)
[2026-01-14T04:19:43.834Z] [BOT] 💾 Saved posted_jobs.json: 1179 active jobs
[2026-01-14T04:19:43.834Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:43.834Z] [BOT] 💾 Marked as posted: Senior Partner Marketing Manager @ brex (instance #1)
[2026-01-14T04:19:43.835Z] [BOT] 💾 BEFORE ARCHIVING: 1180 jobs in database
[2026-01-14T04:19:43.835Z] [BOT] ✅ No jobs to archive (all 1180 jobs within 7-day window)
[2026-01-14T04:19:43.842Z] [BOT] 💾 Saved posted_jobs.json: 1180 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:19:46.842Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2026-01-14T04:19:46.843Z] [BOT] ⏭️  Skipping duplicate: JID_bb297a35 (posted within 7 days)
[2026-01-14T04:19:46.843Z] [BOT] ⏭️  Skipping duplicate: JID_3157d0a9 (posted within 7 days)
[2026-01-14T04:19:46.843Z] [BOT] ⏭️  Skipping duplicate: JID_9952953e (posted within 7 days)
⏭️  Skipping duplicate: JID_ce5b43d8 (posted within 7 days)
[2026-01-14T04:19:46.843Z] [BOT] ⏭️  Skipping duplicate: JID_9fe1ebc6 (posted within 7 days)
[2026-01-14T04:19:46.843Z] [BOT] ⏭️  Skipping duplicate: JID_a30c2924 (posted within 7 days)
[2026-01-14T04:19:46.843Z] [BOT] ⏭️  Skipping duplicate: JID_852284f9 (posted within 7 days)
[2026-01-14T04:19:46.950Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[2026-01-14T04:19:47.116Z] [BOT] ✅ Saved pending queue: 2734 total (2714 pending, 13 enriched, 7 posted)
[2026-01-14T04:19:47.117Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T04:19:47.169Z] [BOT] 📂 Loaded 3298 existing routing entries
[2026-01-14T04:19:47.228Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
   Total entries: 3305
[2026-01-14T04:19:47.228Z] [BOT] Timestamp: 2026-01-14T04:19:47.214Z
[2026-01-14T04:19:47.228Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T04:19:47.229Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-14T04:19:47.229Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T04:19:47.229Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 9
   Top channels:
     1. #🗽・new-york: 3 posts
[2026-01-14T04:19:47.229Z] [BOT] 2. #💻・remote-usa: 3 posts
     3. #💻・tech-jobs: 2 posts
     4. #📈・JID_fb739488: 1 posts
     5. #🌧️・seattle: 1 posts
[2026-01-14T04:19:47.229Z] [BOT] [STATS] Channel stats saved
[2026-01-14T04:19:49.253Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2546) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*