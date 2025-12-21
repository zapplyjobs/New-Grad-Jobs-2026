# Discord Bot Execution Audit
**Timestamp:** 2025-12-21T19:34:06.793Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-21T19:33:25.117Z] ========================================
[2025-12-21T19:33:25.119Z] Discord Bot Execution Log
[2025-12-21T19:33:25.119Z] Environment: GitHub Actions
[2025-12-21T19:33:25.119Z] Node Version: v20.19.6
[2025-12-21T19:33:25.119Z] ========================================
[2025-12-21T19:33:25.119Z] Environment Variables Check:
[2025-12-21T19:33:25.120Z] DISCORD_TOKEN: ✅ Set
[2025-12-21T19:33:25.120Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-21T19:33:25.120Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-21T19:33:25.120Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-21T19:33:25.120Z] 
Multi-Channel Configuration:
[2025-12-21T19:33:25.120Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-21T19:33:25.120Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-21T19:33:25.120Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-21T19:33:25.120Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-21T19:33:25.120Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-21T19:33:25.120Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-21T19:33:25.120Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-21T19:33:25.120Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-21T19:33:25.120Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-21T19:33:25.120Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-21T19:33:25.120Z] 
Data Files Check:
[2025-12-21T19:33:25.121Z] .github/data/new_jobs.json: ✅ Exists (10 items, 46162 bytes)
[2025-12-21T19:33:25.125Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 504179 bytes)
[2025-12-21T19:33:25.125Z] 
========================================
[2025-12-21T19:33:25.125Z] Starting Enhanced Discord Bot...
[2025-12-21T19:33:25.125Z] ========================================
[2025-12-21T19:33:25.633Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2025-12-21T19:33:26.196Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-21T19:33:26.197Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-21T19:33:26.197Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-21T19:33:26.197Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-21T19:33:26.305Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 146
[2025-12-21T19:33:26.307Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-21T19:33:26.308Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-21T19:33:26.308Z] [BOT] 📋 After blacklist filter: 9 jobs (1 blacklisted)
[2025-12-21T19:33:26.308Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-21T19:33:26.309Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2025-12-21T19:33:26.309Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer 1 @ Intuit: mountain view, nyc
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-21T19:33:26.313Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-21T19:33:26.313Z] [BOT] 📍 [ROUTING] "Rotational Engineer - Central Technology" @ Activision-Blizzard
[2025-12-21T19:33:26.314Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:33:26.318Z] [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-21T19:33:26.496Z] [BOT] ✅ Created forum post: 🏢 Rotational Engineer - Central Technology @ Activision-Blizzard in #💻・tech-jobs
[2025-12-21T19:33:26.496Z] [BOT] ✅ Industry: Rotational Engineer - Central Technology @ Activision-Blizzard
[2025-12-21T19:33:28.327Z] [BOT] ✅ Created forum post: 🏢 Rotational Engineer - Central Technology @ Activision-Blizzard in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T19:33:29.827Z] [BOT] 💾 Marked as posted: Rotational Engineer - Central Technology @ Activision-Blizzard (instance #1)
[2025-12-21T19:33:29.828Z] [BOT] 💾 BEFORE ARCHIVING: 862 jobs in database
[2025-12-21T19:33:29.829Z] [BOT] ✅ No jobs to archive (all 862 jobs within 7-day window)
[2025-12-21T19:33:29.840Z] [BOT] 💾 Saved posted_jobs.json: 862 active jobs
[2025-12-21T19:33:29.840Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:33:29.840Z] [BOT] 📍 [ROUTING] "TEMP Specialist - Fundraising Data" @ ORG_203d8e36 & Girls Clubs of America
[2025-12-21T19:33:29.840Z] [BOT] Category: TECH (matched: "data")
[2025-12-21T19:33:29.841Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:33:30.197Z] [BOT] ✅ Created forum post: 🏢 TEMP Specialist - Fundraising Data @ ORG_203d8e36 & Girls Clubs of America in #💻・tech-jobs
  ✅ Industry: TEMP Specialist - Fundraising Data @ ORG_203d8e36 & Girls Clubs of America
[2025-12-21T19:33:31.959Z] [BOT] ✅ Created forum post: 🏢 TEMP Specialist - Fundraising Data @ ORG_203d8e36 & Girls Clubs of America in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T19:33:33.460Z] [BOT] 💾 Marked as posted: TEMP Specialist - Fundraising Data @ ORG_203d8e36 & Girls Clubs of America (instance #1)
[2025-12-21T19:33:33.461Z] [BOT] 💾 BEFORE ARCHIVING: 863 jobs in database
[2025-12-21T19:33:33.461Z] [BOT] ✅ No jobs to archive (all 863 jobs within 7-day window)
[2025-12-21T19:33:33.467Z] [BOT] 💾 Saved posted_jobs.json: 863 active jobs
[2025-12-21T19:33:33.467Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:33:33.468Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2025-12-21T19:33:33.468Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:33:33.676Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-21T19:33:35.750Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
[2025-12-21T19:33:35.750Z] [BOT] ✅ Location: 🌄・mountain-view
[2025-12-21T19:33:37.250Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-21T19:33:37.250Z] [BOT] 💾 BEFORE ARCHIVING: 864 jobs in database
[2025-12-21T19:33:37.251Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2025-12-21T19:33:37.258Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2025-12-21T19:33:37.258Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:33:37.258Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
💾 BEFORE ARCHIVING: 865 jobs in database
[2025-12-21T19:33:37.259Z] [BOT] ✅ No jobs to archive (all 865 jobs within 7-day window)
[2025-12-21T19:33:37.265Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
[2025-12-21T19:33:37.265Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:33:37.266Z] [BOT] 📍 [ROUTING] "Warehouse Automation Software Engineer" @ ORG_4b1f297a
[2025-12-21T19:33:37.266Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:33:37.543Z] [BOT] ✅ Created forum post: 🏢 Warehouse Automation Software Engineer @ ORG_4b1f297a in #💻・tech-jobs
[2025-12-21T19:33:37.543Z] [BOT] ✅ Industry: Warehouse Automation Software Engineer @ ORG_4b1f297a
[2025-12-21T19:33:39.448Z] [BOT] ✅ Created forum post: 🏢 Warehouse Automation Software Engineer @ ORG_4b1f297a in #💻・remote-usa
[2025-12-21T19:33:39.448Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T19:33:40.949Z] [BOT] 💾 Marked as posted: Warehouse Automation Software Engineer @ ORG_4b1f297a (instance #1)
[2025-12-21T19:33:40.950Z] [BOT] 💾 BEFORE ARCHIVING: 866 jobs in database
[2025-12-21T19:33:40.950Z] [BOT] ✅ No jobs to archive (all 866 jobs within 7-day window)
[2025-12-21T19:33:40.957Z] [BOT] 💾 Saved posted_jobs.json: 866 active jobs
[2025-12-21T19:33:40.957Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:33:40.958Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_fb8c4aa0 Corporation
[2025-12-21T19:33:40.958Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:33:41.110Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_fb8c4aa0 Corporation in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_fb8c4aa0 Corporation
[2025-12-21T19:33:42.848Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_fb8c4aa0 Corporation in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-21T19:33:44.347Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_fb8c4aa0 Corporation (instance #1)
[2025-12-21T19:33:44.347Z] [BOT] 💾 BEFORE ARCHIVING: 867 jobs in database
[2025-12-21T19:33:44.348Z] [BOT] ✅ No jobs to archive (all 867 jobs within 7-day window)
[2025-12-21T19:33:44.355Z] [BOT] 💾 Saved posted_jobs.json: 867 active jobs
[2025-12-21T19:33:44.355Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:33:47.355Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-21T19:33:47.355Z] [BOT] 📍 [ROUTING] "Entry-Level Planner" @ ORG_0ac534ed
   Category: AI (matched: "machine learning")
[2025-12-21T19:33:47.355Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-21T19:33:47.563Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Planner @ ORG_0ac534ed in #🤖・ai-jobs
  ✅ Industry: Entry-Level Planner @ ORG_0ac534ed
[2025-12-21T19:33:49.260Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Planner @ ORG_0ac534ed in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T19:33:50.761Z] [BOT] 💾 Marked as posted: Entry-Level Planner @ ORG_0ac534ed (instance #1)
[2025-12-21T19:33:50.761Z] [BOT] 💾 BEFORE ARCHIVING: 868 jobs in database
[2025-12-21T19:33:50.762Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2025-12-21T19:33:50.770Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
[2025-12-21T19:33:50.770Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:33:50.770Z] [BOT] 📍 [ROUTING] "University Graduate - Machine Learning Engineer" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-21T19:33:51.017Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0
[2025-12-21T19:33:53.011Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-21T19:33:53.011Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-21T19:33:54.512Z] [BOT] 💾 Marked as posted: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 (instance #1)
[2025-12-21T19:33:54.512Z] [BOT] 💾 BEFORE ARCHIVING: 869 jobs in database
[2025-12-21T19:33:54.513Z] [BOT] ✅ No jobs to archive (all 869 jobs within 7-day window)
[2025-12-21T19:33:54.520Z] [BOT] 💾 Saved posted_jobs.json: 869 active jobs
[2025-12-21T19:33:54.520Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:33:57.521Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-21T19:33:57.521Z] [BOT] 📍 [ROUTING] "GIS Technician" @ NV5 Global
[2025-12-21T19:33:57.521Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-21T19:33:57.736Z] [BOT] ✅ Created forum post: 🏢 GIS Technician @ NV5 Global in #📣・marketing-jobs
[2025-12-21T19:33:57.736Z] [BOT] ✅ Industry: GIS Technician @ NV5 Global
[2025-12-21T19:33:59.467Z] [BOT] ✅ Created forum post: 🏢 GIS Technician @ NV5 Global in #💻・remote-usa
[2025-12-21T19:33:59.467Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T19:34:00.968Z] [BOT] 💾 Marked as posted: GIS Technician @ NV5 Global (instance #1)
[2025-12-21T19:34:00.968Z] [BOT] 💾 BEFORE ARCHIVING: 870 jobs in database
[2025-12-21T19:34:00.969Z] [BOT] ✅ No jobs to archive (all 870 jobs within 7-day window)
[2025-12-21T19:34:00.977Z] [BOT] 💾 Saved posted_jobs.json: 870 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T19:34:03.978Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2025-12-21T19:34:03.978Z] [BOT] ⏭️  Skipping duplicate: JID_78e3784c-technology_r026155 (posted within 7 days)
[2025-12-21T19:34:03.978Z] [BOT] ⏭️  Skipping duplicate: JID_f9ec1628 (posted within 7 days)
[2025-12-21T19:34:03.979Z] [BOT] ⏭️  Skipping duplicate: JID_65b18361 (posted within 7 days)
[2025-12-21T19:34:03.979Z] [BOT] ⏭️  Skipping duplicate: JID_c313cfe5 (posted within 7 days)
[2025-12-21T19:34:03.979Z] [BOT] ⏭️  Skipping duplicate: JID_c42ff2c9 (posted within 7 days)
[2025-12-21T19:34:03.979Z] [BOT] ⏭️  Skipping duplicate: JID_c5752838-kion_scs-JID_e17fb0e6-engineer_jr-0083243 (posted within 7 days)
[2025-12-21T19:34:03.979Z] [BOT] ⏭️  Skipping duplicate: JID_3d43dd17-engineer_2533377 (posted within 7 days)
[2025-12-21T19:34:03.979Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r160648 (posted within 7 days)
[2025-12-21T19:34:03.981Z] [BOT] ✅ Loaded pending queue: 53 total (33 pending, 20 enriched, 0 posted)
[2025-12-21T19:34:03.982Z] [BOT] ✅ Saved pending queue: 53 total (33 pending, 12 enriched, 8 posted)
[2025-12-21T19:34:03.982Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-21T19:34:04.026Z] [BOT] 📂 Loaded 948 existing routing entries
[2025-12-21T19:34:04.076Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
[2025-12-21T19:34:04.076Z] [BOT] Total entries: 956
   Timestamp: 2025-12-21T19:34:04.071Z
[2025-12-21T19:34:04.077Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e38d000c.jsonl
[2025-12-21T19:34:04.077Z] [BOT] Total attempts: 17
   Successful: 16
   Failed: 0
   Skipped: 1
[2025-12-21T19:34:04.077Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 16
   Channels used: 7
   Top channels:
[2025-12-21T19:34:04.077Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #💻・remote-usa: 5 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🌄・mountain-view: 1 posts
     5. #🦢・los-angeles: 1 posts
[2025-12-21T19:34:04.078Z] [BOT] [STATS] Channel stats saved
[2025-12-21T19:34:06.089Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*