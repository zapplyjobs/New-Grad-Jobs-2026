# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T22:37:17.054Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T22:36:30.164Z] ========================================
[2025-12-20T22:36:30.165Z] Discord Bot Execution Log
[2025-12-20T22:36:30.165Z] Environment: GitHub Actions
[2025-12-20T22:36:30.166Z] Node Version: v20.19.6
[2025-12-20T22:36:30.166Z] ========================================
[2025-12-20T22:36:30.166Z] Environment Variables Check:
[2025-12-20T22:36:30.166Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T22:36:30.166Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T22:36:30.166Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T22:36:30.166Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T22:36:30.166Z] 
Multi-Channel Configuration:
[2025-12-20T22:36:30.166Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T22:36:30.167Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T22:36:30.167Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T22:36:30.167Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T22:36:30.167Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T22:36:30.167Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T22:36:30.167Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T22:36:30.167Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T22:36:30.167Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T22:36:30.167Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T22:36:30.167Z] 
Data Files Check:
[2025-12-20T22:36:30.168Z] .github/data/new_jobs.json: ✅ Exists (10 items, 69562 bytes)
[2025-12-20T22:36:30.171Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 451617 bytes)
[2025-12-20T22:36:30.171Z] 
========================================
[2025-12-20T22:36:30.171Z] Starting Enhanced Discord Bot...
[2025-12-20T22:36:30.171Z] ========================================
[2025-12-20T22:36:30.685Z] [BOT] ✅ Loaded V2 database: 777 jobs
[2025-12-20T22:36:31.245Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T22:36:31.245Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T22:36:31.245Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T22:36:31.246Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T22:36:31.332Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 51
[2025-12-20T22:36:31.334Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T22:36:31.334Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T22:36:31.335Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T22:36:31.335Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-20T22:36:31.335Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-20T22:36:31.336Z] [BOT] 📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T22:36:31.339Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-20T22:36:31.340Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_c8cc37eb
[2025-12-20T22:36:31.340Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:36:31.344Z] [BOT ERROR] (node:3036) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T22:36:31.503Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_c8cc37eb in #💻・tech-jobs
[2025-12-20T22:36:31.503Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_c8cc37eb
[2025-12-20T22:36:33.188Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_c8cc37eb in #💻・remote-usa
[2025-12-20T22:36:33.188Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T22:36:34.690Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_c8cc37eb (instance #1)
[2025-12-20T22:36:34.690Z] [BOT] 💾 BEFORE ARCHIVING: 778 jobs in database
[2025-12-20T22:36:34.691Z] [BOT] ✅ No jobs to archive (all 778 jobs within 7-day window)
[2025-12-20T22:36:34.701Z] [BOT] 💾 Saved posted_jobs.json: 778 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:36:34.702Z] [BOT] 📍 [ROUTING] "Software Engineer/Developer" @ ORG_55898449 Research
[2025-12-20T22:36:34.702Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:36:34.906Z] [BOT] ✅ Created forum post: 🏢 Software Engineer/Developer @ ORG_55898449 Research in #💻・tech-jobs
[2025-12-20T22:36:34.906Z] [BOT] ✅ Industry: Software Engineer/Developer @ ORG_55898449 Research
[2025-12-20T22:36:36.648Z] [BOT] ✅ Created forum post: 🏢 Software Engineer/Developer @ ORG_55898449 Research in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-20T22:36:38.149Z] [BOT] 💾 Marked as posted: Software Engineer/Developer @ ORG_55898449 Research (instance #1)
[2025-12-20T22:36:38.149Z] [BOT] 💾 BEFORE ARCHIVING: 779 jobs in database
[2025-12-20T22:36:38.150Z] [BOT] ✅ No jobs to archive (all 779 jobs within 7-day window)
[2025-12-20T22:36:38.156Z] [BOT] 💾 Saved posted_jobs.json: 779 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:36:38.157Z] [BOT] 📍 [ROUTING] "Junior Oracle Integration Cloud (OIC) Integration Specialist" @ ORG_a258b30f Partners
[2025-12-20T22:36:38.157Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:36:38.928Z] [BOT] ✅ Created forum post: 🏢 Junior Oracle Integration Cloud (OIC) Integration Specialist @ ORG_a258b30f Partners in #💻・tech-jobs
[2025-12-20T22:36:38.928Z] [BOT] ✅ Industry: Junior Oracle Integration Cloud (OIC) Integration Specialist @ ORG_a258b30f Partners
[2025-12-20T22:36:40.555Z] [BOT] ✅ Created forum post: 🏢 Junior Oracle Integration Cloud (OIC) Integration Specialist @ ORG_a258b30f Partners in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-20T22:36:42.056Z] [BOT] 💾 Marked as posted: Junior Oracle Integration Cloud (OIC) Integration Specialist @ ORG_a258b30f Partners (instance #1)
[2025-12-20T22:36:42.057Z] [BOT] 💾 BEFORE ARCHIVING: 780 jobs in database
[2025-12-20T22:36:42.057Z] [BOT] ✅ No jobs to archive (all 780 jobs within 7-day window)
[2025-12-20T22:36:42.064Z] [BOT] 💾 Saved posted_jobs.json: 780 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:36:42.065Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_1954b120
[2025-12-20T22:36:42.065Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:36:42.380Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_1954b120 in #💻・tech-jobs
[2025-12-20T22:36:42.380Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_1954b120
[2025-12-20T22:36:44.055Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_1954b120 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T22:36:45.557Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_1954b120 (instance #1)
[2025-12-20T22:36:45.557Z] [BOT] 💾 BEFORE ARCHIVING: 781 jobs in database
[2025-12-20T22:36:45.558Z] [BOT] ✅ No jobs to archive (all 781 jobs within 7-day window)
[2025-12-20T22:36:45.565Z] [BOT] 💾 Saved posted_jobs.json: 781 active jobs
[2025-12-20T22:36:45.565Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:36:45.565Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2025-12-20T22:36:45.565Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:36:45.759Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-20T22:36:47.534Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-20T22:36:49.034Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-20T22:36:49.035Z] [BOT] 💾 BEFORE ARCHIVING: 782 jobs in database
[2025-12-20T22:36:49.036Z] [BOT] ✅ No jobs to archive (all 782 jobs within 7-day window)
[2025-12-20T22:36:49.042Z] [BOT] 💾 Saved posted_jobs.json: 782 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:36:49.043Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-20T22:36:49.043Z] [BOT] 💾 BEFORE ARCHIVING: 783 jobs in database
[2025-12-20T22:36:49.043Z] [BOT] ✅ No jobs to archive (all 783 jobs within 7-day window)
[2025-12-20T22:36:49.050Z] [BOT] 💾 Saved posted_jobs.json: 783 active jobs
[2025-12-20T22:36:49.050Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:36:52.051Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-20T22:36:52.052Z] [BOT] 📍 [ROUTING] "Therapist - Child & Adolescent" @ ORG_6a97f77a Behavioral Health
[2025-12-20T22:36:52.052Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-20T22:36:52.214Z] [BOT] ✅ Created forum post: 🏢 Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health in #🩺・healthcare-jobs
[2025-12-20T22:36:52.214Z] [BOT] ✅ Industry: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health
[2025-12-20T22:36:53.861Z] [BOT] ✅ Created forum post: 🏢 Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health in #💻・remote-usa
[2025-12-20T22:36:53.862Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T22:36:55.363Z] [BOT] 💾 Marked as posted: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health (instance #1)
[2025-12-20T22:36:55.363Z] [BOT] 💾 BEFORE ARCHIVING: 784 jobs in database
[2025-12-20T22:36:55.364Z] [BOT] ✅ No jobs to archive (all 784 jobs within 7-day window)
[2025-12-20T22:36:55.370Z] [BOT] 💾 Saved posted_jobs.json: 784 active jobs
[2025-12-20T22:36:55.370Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:36:58.371Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-20T22:36:58.372Z] [BOT] 📍 [ROUTING] "Associate Data Analyst - Mobility" @ ORG_e82c1600 Global
[2025-12-20T22:36:58.372Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-20T22:36:58.768Z] [BOT] ✅ Created forum post: 🏢 Associate Data Analyst - Mobility @ ORG_e82c1600 Global in #📈・JID_fb739488
  ✅ Industry: Associate Data Analyst - Mobility @ ORG_e82c1600 Global
[2025-12-20T22:37:00.269Z] [BOT] 💾 Marked as posted: Associate Data Analyst - Mobility @ ORG_e82c1600 Global (instance #1)
[2025-12-20T22:37:00.270Z] [BOT] 💾 BEFORE ARCHIVING: 785 jobs in database
[2025-12-20T22:37:00.270Z] [BOT] ✅ No jobs to archive (all 785 jobs within 7-day window)
[2025-12-20T22:37:00.278Z] [BOT] 💾 Saved posted_jobs.json: 785 active jobs
[2025-12-20T22:37:00.278Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:37:00.278Z] [BOT] 📍 [ROUTING] "Data Scientist, Social - PhD Early Career" @ ORG_0acab0cf
[2025-12-20T22:37:00.278Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-20T22:37:00.429Z] [BOT] ✅ Created forum post: 🟩 Data Scientist, Social - PhD Early Career @ ORG_0acab0cf in #📈・JID_fb739488
[2025-12-20T22:37:00.429Z] [BOT] ✅ Industry: Data Scientist, Social - PhD Early Career @ ORG_0acab0cf
[2025-12-20T22:37:03.519Z] [BOT] ✅ Created forum post: 🟩 Data Scientist, Social - PhD Early Career @ ORG_0acab0cf in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-20T22:37:05.019Z] [BOT] 💾 Marked as posted: Data Scientist, Social - PhD Early Career @ ORG_0acab0cf (instance #1)
[2025-12-20T22:37:05.019Z] [BOT] 💾 BEFORE ARCHIVING: 786 jobs in database
[2025-12-20T22:37:05.020Z] [BOT] ✅ No jobs to archive (all 786 jobs within 7-day window)
[2025-12-20T22:37:05.028Z] [BOT] 💾 Saved posted_jobs.json: 786 active jobs
[2025-12-20T22:37:05.028Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:37:08.028Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-20T22:37:08.028Z] [BOT] 📍 [ROUTING] "Systems Software Engineer" @ ORG_0890f456
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T22:37:08.212Z] [BOT] ✅ Created forum post: 🏢 Systems Software Engineer @ ORG_0890f456 in #🤖・ai-jobs
[2025-12-20T22:37:08.212Z] [BOT] ✅ Industry: Systems Software Engineer @ ORG_0890f456
[2025-12-20T22:37:09.866Z] [BOT] ✅ Created forum post: 🏢 Systems Software Engineer @ ORG_0890f456 in #💻・remote-usa
[2025-12-20T22:37:09.867Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T22:37:11.367Z] [BOT] 💾 Marked as posted: Systems Software Engineer @ ORG_0890f456 (instance #1)
[2025-12-20T22:37:11.367Z] [BOT] 💾 BEFORE ARCHIVING: 787 jobs in database
[2025-12-20T22:37:11.367Z] [BOT] ✅ No jobs to archive (all 787 jobs within 7-day window)
[2025-12-20T22:37:11.375Z] [BOT] 💾 Saved posted_jobs.json: 787 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:37:14.375Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-20T22:37:14.376Z] [BOT] ⏭️  Skipping duplicate: JID_380f1b32-engineer_jr-023879 (posted within 7 days)
[2025-12-20T22:37:14.376Z] [BOT] ⏭️  Skipping duplicate: JID_7cb5a7fa-iop_r5758 (posted within 7 days)
[2025-12-20T22:37:14.376Z] [BOT] ⏭️  Skipping duplicate: JID_c7edba21-hri_careers-JID_a96bae99-developer_jr-0001933 (posted within 7 days)
[2025-12-20T22:37:14.376Z] [BOT] ⏭️  Skipping duplicate: JID_0e594b31-spgi_internal-JID_47cf0e16-analyst_322809 (posted within 7 days)
[2025-12-20T22:37:14.376Z] [BOT] ⏭️  Skipping duplicate: JID_dc8c6a6c (posted within 7 days)
[2025-12-20T22:37:14.376Z] [BOT] ⏭️  Skipping duplicate: JID_27cd48a2-2026_jr2009926 (posted within 7 days)
[2025-12-20T22:37:14.377Z] [BOT] ⏭️  Skipping duplicate: JID_b57bb219-specialist_r0029882 (posted within 7 days)
⏭️  Skipping duplicate: JID_b75ac13d-engineer_320514 (posted within 7 days)
[2025-12-20T22:37:14.377Z] [BOT] ⏭️  Skipping duplicate: JID_950b4696 (posted within 7 days)
[2025-12-20T22:37:14.379Z] [BOT] ✅ Loaded pending queue: 163 total (143 pending, 20 enriched, 0 posted)
[2025-12-20T22:37:14.382Z] [BOT] ✅ Saved pending queue: 163 total (143 pending, 11 enriched, 9 posted)
[2025-12-20T22:37:14.383Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T22:37:14.428Z] [BOT] 📂 Loaded 843 existing routing entries
[2025-12-20T22:37:14.475Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-20T22:37:14.475Z] [BOT] Total entries: 852
   Timestamp: 2025-12-20T22:37:14.471Z
[2025-12-20T22:37:14.475Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
   Total attempts: 17
[2025-12-20T22:37:14.475Z] [BOT] Successful: 17
   Failed: 0
   Skipped: 0
[2025-12-20T22:37:14.476Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-20T22:37:14.476Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2025-12-20T22:37:14.476Z] [BOT] 2. #💻・remote-usa: 4 posts
     3. #🗽・new-york: 2 posts
     4. #📈・JID_fb739488: 2 posts
     5. #🚌・boston: 1 posts
[2025-12-20T22:37:14.476Z] [BOT] [STATS] Channel stats saved
[2025-12-20T22:37:16.488Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3036) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*