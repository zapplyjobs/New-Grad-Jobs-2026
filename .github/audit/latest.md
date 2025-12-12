# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T04:27:25.690Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T04:26:45.540Z] ========================================
[2025-12-12T04:26:45.542Z] Discord Bot Execution Log
[2025-12-12T04:26:45.542Z] Environment: GitHub Actions
[2025-12-12T04:26:45.542Z] Node Version: v20.19.6
[2025-12-12T04:26:45.543Z] ========================================
[2025-12-12T04:26:45.543Z] Environment Variables Check:
[2025-12-12T04:26:45.543Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T04:26:45.543Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T04:26:45.543Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T04:26:45.543Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T04:26:45.543Z] 
Multi-Channel Configuration:
[2025-12-12T04:26:45.543Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T04:26:45.543Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T04:26:45.543Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T04:26:45.544Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T04:26:45.544Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T04:26:45.544Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T04:26:45.544Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T04:26:45.544Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T04:26:45.544Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T04:26:45.544Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T04:26:45.544Z] 
Data Files Check:
[2025-12-12T04:26:45.545Z] .github/data/new_jobs.json: ✅ Exists (10 items, 76753 bytes)
[2025-12-12T04:26:45.545Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 12788 bytes)
[2025-12-12T04:26:45.545Z] 
========================================
[2025-12-12T04:26:45.545Z] Starting Enhanced Discord Bot...
[2025-12-12T04:26:45.545Z] ========================================
[2025-12-12T04:26:46.104Z] [BOT] ✅ Loaded V2 database: 19 jobs
[2025-12-12T04:26:47.117Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T04:26:47.117Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T04:26:47.117Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T04:26:47.118Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T04:26:47.222Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 129
[2025-12-12T04:26:47.222Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T04:26:47.222Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
[2025-12-12T04:26:47.222Z] [BOT] ⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
[2025-12-12T04:26:47.223Z] [BOT] 📬 Found 8 new jobs (2 already posted)...
[2025-12-12T04:26:47.223Z] [BOT] 📋 After blacklist filter: 8 jobs (0 blacklisted)
[2025-12-12T04:26:47.224Z] [BOT] 📋 After data quality filter: 8 jobs (0 invalid)
[2025-12-12T04:26:47.224Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2025-12-12T04:26:47.224Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T04:26:47.228Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2025-12-12T04:26:47.228Z] [BOT] 📍 [ROUTING] "Associate IT BSD OMS Team" @ ORG_8315ec2e Edison
[2025-12-12T04:26:47.228Z] [BOT] Category: SUPPLY-CHAIN (matched: "distribution")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2025-12-12T04:26:47.232Z] [BOT ERROR] (node:2412) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T04:26:47.467Z] [BOT] ✅ Created forum post: 🏢 Associate IT BSD OMS Team @ ORG_8315ec2e Edison in #🏗️・JID_b7c6683f
  ✅ Industry: Associate IT BSD OMS Team @ ORG_8315ec2e Edison
[2025-12-12T04:26:49.231Z] [BOT] ✅ Created forum post: 🏢 Associate IT BSD OMS Team @ ORG_8315ec2e Edison in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-12T04:26:50.730Z] [BOT] 💾 Marked as posted: Associate IT BSD OMS Team @ ORG_8315ec2e Edison (instance #1)
[2025-12-12T04:26:50.731Z] [BOT] 💾 BEFORE ARCHIVING: 20 jobs in database
[2025-12-12T04:26:50.731Z] [BOT] ✅ No jobs to archive (all 20 jobs within 7-day window)
[2025-12-12T04:26:50.736Z] [BOT] 💾 Saved posted_jobs.json: 20 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T04:26:53.737Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-12T04:26:53.738Z] [BOT] 📍 [ROUTING] "Research Scientist - Generalist Embodied Agent Research" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T04:26:53.978Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Generalist Embodied Agent Research @ ORG_0890f456 in #🤖・ai-jobs
[2025-12-12T04:26:53.978Z] [BOT] ✅ Industry: Research Scientist - Generalist Embodied Agent Research @ ORG_0890f456
[2025-12-12T04:26:55.479Z] [BOT] 💾 Marked as posted: Research Scientist - Generalist Embodied Agent Research @ ORG_0890f456 (instance #1)
💾 BEFORE ARCHIVING: 21 jobs in database
✅ No jobs to archive (all 21 jobs within 7-day window)
[2025-12-12T04:26:55.483Z] [BOT] 💾 Saved posted_jobs.json: 21 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T04:26:55.483Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T04:26:55.697Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-12T04:26:57.644Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-12T04:26:59.144Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-12T04:26:59.144Z] [BOT] 💾 BEFORE ARCHIVING: 22 jobs in database
✅ No jobs to archive (all 22 jobs within 7-day window)
[2025-12-12T04:26:59.146Z] [BOT] 💾 Saved posted_jobs.json: 22 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T04:26:59.146Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-12T04:26:59.146Z] [BOT] 💾 BEFORE ARCHIVING: 23 jobs in database
✅ No jobs to archive (all 23 jobs within 7-day window)
[2025-12-12T04:26:59.147Z] [BOT] 💾 Saved posted_jobs.json: 23 active jobs
[2025-12-12T04:26:59.147Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:27:02.148Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2025-12-12T04:27:02.148Z] [BOT] 📍 [ROUTING] "Data Analyst" @ R+L Global Logistics
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T04:27:02.406Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ R+L Global Logistics in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ R+L Global Logistics
[2025-12-12T04:27:04.241Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ R+L Global Logistics in #💻・remote-usa
[2025-12-12T04:27:04.241Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T04:27:05.741Z] [BOT] 💾 Marked as posted: Data Analyst @ R+L Global Logistics (instance #1)
[2025-12-12T04:27:05.742Z] [BOT] 💾 BEFORE ARCHIVING: 24 jobs in database
✅ No jobs to archive (all 24 jobs within 7-day window)
[2025-12-12T04:27:05.743Z] [BOT] 💾 Saved posted_jobs.json: 24 active jobs
[2025-12-12T04:27:05.743Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Graduate Data Scientist" @ ORG_742553d6 Entertainment
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-12T04:27:05.743Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T04:27:06.436Z] [BOT] ✅ Created forum post: 🏢 Graduate Data Scientist @ ORG_742553d6 Entertainment in #📈・JID_fb739488
  ✅ Industry: Graduate Data Scientist @ ORG_742553d6 Entertainment
[2025-12-12T04:27:08.155Z] [BOT] ✅ Created forum post: 🏢 Graduate Data Scientist @ ORG_742553d6 Entertainment in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T04:27:09.655Z] [BOT] 💾 Marked as posted: Graduate Data Scientist @ ORG_742553d6 Entertainment (instance #1)
[2025-12-12T04:27:09.655Z] [BOT] 💾 BEFORE ARCHIVING: 25 jobs in database
✅ No jobs to archive (all 25 jobs within 7-day window)
[2025-12-12T04:27:09.656Z] [BOT] 💾 Saved posted_jobs.json: 25 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T04:27:09.656Z] [BOT] 📍 [ROUTING] "Associate / Staff Mission Data Analyst" @ ORG_dabc49d5
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-12T04:27:09.657Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T04:27:09.881Z] [BOT] ✅ Created forum post: 🏢 Associate / Staff Mission Data Analyst @ ORG_dabc49d5 in #📈・JID_fb739488
  ✅ Industry: Associate / Staff Mission Data Analyst @ ORG_dabc49d5
[2025-12-12T04:27:11.560Z] [BOT] ✅ Created forum post: 🏢 Associate / Staff Mission Data Analyst @ ORG_dabc49d5 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-12T04:27:13.060Z] [BOT] 💾 Marked as posted: Associate / Staff Mission Data Analyst @ ORG_dabc49d5 (instance #1)
[2025-12-12T04:27:13.060Z] [BOT] 💾 BEFORE ARCHIVING: 26 jobs in database
✅ No jobs to archive (all 26 jobs within 7-day window)
[2025-12-12T04:27:13.061Z] [BOT] 💾 Saved posted_jobs.json: 26 active jobs
[2025-12-12T04:27:13.062Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:27:16.063Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-12T04:27:16.063Z] [BOT] 📍 [ROUTING] "Quantum Software Engineer" @ ORG_c7bac469
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:27:16.301Z] [BOT] ✅ Created forum post: 🟦 Quantum Software Engineer @ ORG_c7bac469 in #💻・tech-jobs
[2025-12-12T04:27:16.301Z] [BOT] ✅ Industry: Quantum Software Engineer @ ORG_c7bac469
[2025-12-12T04:27:17.994Z] [BOT] ✅ Created forum post: 🟦 Quantum Software Engineer @ ORG_c7bac469 in #🖥️・redmond
[2025-12-12T04:27:17.994Z] [BOT] ✅ Location: 🖥️・redmond
[2025-12-12T04:27:19.494Z] [BOT] 💾 Marked as posted: Quantum Software Engineer @ ORG_c7bac469 (instance #1)
[2025-12-12T04:27:19.494Z] [BOT] 💾 BEFORE ARCHIVING: 27 jobs in database
✅ No jobs to archive (all 27 jobs within 7-day window)
[2025-12-12T04:27:19.496Z] [BOT] 💾 Saved posted_jobs.json: 27 active jobs
[2025-12-12T04:27:19.496Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:27:22.496Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-12-12T04:27:22.497Z] [BOT] ⏭️  Skipping duplicate: JID_53ca989f-cx_1033-job-4886 (posted within 7 days)
[2025-12-12T04:27:22.497Z] [BOT] ⏭️  Skipping duplicate: JID_1fa6454f-2026_jr2009294 (posted within 7 days)
⏭️  Skipping duplicate: JID_7b2a0f97 (posted within 7 days)
⏭️  Skipping duplicate: JID_fb9e75b5-cx_4-job-37853 (posted within 7 days)
[2025-12-12T04:27:22.497Z] [BOT] ⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-73987 (posted within 7 days)
⏭️  Skipping duplicate: JID_1f033110 (posted within 7 days)
[2025-12-12T04:27:22.497Z] [BOT] ⏭️  Skipping duplicate: JID_3cc30985 (posted within 7 days)
[2025-12-12T04:27:22.499Z] [BOT] ✅ Loaded pending queue: 289 total (279 pending, 10 enriched, 0 posted)
[2025-12-12T04:27:22.505Z] [BOT] ✅ Saved pending queue: 289 total (265 pending, 3 enriched, 21 posted)
[2025-12-12T04:27:22.505Z] [BOT] 📋 Updated queue: marked 21 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-12T04:27:22.542Z] [BOT] 📂 Loaded 17 existing routing entries
[2025-12-12T04:27:22.577Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-12T04:27:22.577Z] [BOT] New entries: 7
   Total entries: 24
   Timestamp: 2025-12-12T04:27:22.577Z
[2025-12-12T04:27:24.589Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2412) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*