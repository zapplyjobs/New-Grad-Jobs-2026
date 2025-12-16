# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T05:06:13.215Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T05:05:22.429Z] ========================================
[2025-12-16T05:05:22.430Z] Discord Bot Execution Log
[2025-12-16T05:05:22.431Z] Environment: GitHub Actions
[2025-12-16T05:05:22.431Z] Node Version: v20.19.6
[2025-12-16T05:05:22.431Z] ========================================
[2025-12-16T05:05:22.431Z] Environment Variables Check:
[2025-12-16T05:05:22.431Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T05:05:22.431Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T05:05:22.431Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T05:05:22.431Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T05:05:22.431Z] 
Multi-Channel Configuration:
[2025-12-16T05:05:22.431Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T05:05:22.431Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T05:05:22.432Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T05:05:22.432Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T05:05:22.432Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T05:05:22.432Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T05:05:22.432Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T05:05:22.432Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T05:05:22.432Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T05:05:22.432Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T05:05:22.432Z] 
Data Files Check:
[2025-12-16T05:05:22.433Z] .github/data/new_jobs.json: ✅ Exists (10 items, 33203 bytes)
[2025-12-16T05:05:22.434Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 160112 bytes)
[2025-12-16T05:05:22.434Z] 
========================================
[2025-12-16T05:05:22.434Z] Starting Enhanced Discord Bot...
[2025-12-16T05:05:22.434Z] ========================================
[2025-12-16T05:05:22.961Z] [BOT] ✅ Loaded V2 database: 255 jobs
[2025-12-16T05:05:23.448Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T05:05:23.448Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T05:05:23.449Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T05:05:23.449Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T05:05:23.507Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T05:05:23.575Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T05:05:23.576Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T05:05:23.577Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T05:05:23.577Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T05:05:23.577Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T05:05:23.578Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T05:05:23.582Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T05:05:23.583Z] [BOT] 📍 [ROUTING] "Data Engineer Graduate - Data Platform - Global Live" @ ORG_1bb6fcfb
[2025-12-16T05:05:23.583Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T05:05:23.600Z] [BOT ERROR] (node:3405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T05:05:24.039Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - Data Platform - Global Live @ ORG_1bb6fcfb in #📈・JID_fb739488
[2025-12-16T05:05:24.039Z] [BOT] ✅ Industry: Data Engineer Graduate - Data Platform - Global Live @ ORG_1bb6fcfb
[2025-12-16T05:05:25.729Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - Data Platform - Global Live @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-16T05:05:25.730Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T05:05:27.230Z] [BOT] 💾 Marked as posted: Data Engineer Graduate - Data Platform - Global Live @ ORG_1bb6fcfb (instance #1)
[2025-12-16T05:05:27.230Z] [BOT] 💾 BEFORE ARCHIVING: 256 jobs in database
[2025-12-16T05:05:27.231Z] [BOT] ✅ No jobs to archive (all 256 jobs within 7-day window)
[2025-12-16T05:05:27.238Z] [BOT] 💾 Saved posted_jobs.json: 256 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:05:30.239Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-16T05:05:30.239Z] [BOT] 📍 [ROUTING] "Application Engineer" @ ORG_3495e757 Cap Supply Holdings
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:05:30.537Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_3495e757 Cap Supply Holdings in #💻・tech-jobs
[2025-12-16T05:05:30.537Z] [BOT] ✅ Industry: Application Engineer @ ORG_3495e757 Cap Supply Holdings
[2025-12-16T05:05:32.379Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_3495e757 Cap Supply Holdings in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T05:05:33.880Z] [BOT] 💾 Marked as posted: Application Engineer @ ORG_3495e757 Cap Supply Holdings (instance #1)
[2025-12-16T05:05:33.880Z] [BOT] 💾 BEFORE ARCHIVING: 257 jobs in database
[2025-12-16T05:05:33.880Z] [BOT] ✅ No jobs to archive (all 257 jobs within 7-day window)
[2025-12-16T05:05:33.884Z] [BOT] 💾 Saved posted_jobs.json: 257 active jobs
[2025-12-16T05:05:33.884Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T05:05:33.885Z] [BOT] 📍 [ROUTING] "Java Full Stack Engineer - Associate Mavericks" @ ORG_cb204781
[2025-12-16T05:05:33.885Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:05:34.224Z] [BOT] ✅ Created forum post: 🏢 Java Full Stack Engineer - Associate Mavericks @ ORG_cb204781 in #💻・tech-jobs
  ✅ Industry: Java Full Stack Engineer - Associate Mavericks @ ORG_cb204781
[2025-12-16T05:05:35.724Z] [BOT] 💾 Marked as posted: Java Full Stack Engineer - Associate Mavericks @ ORG_cb204781 (instance #1)
[2025-12-16T05:05:35.724Z] [BOT] 💾 BEFORE ARCHIVING: 258 jobs in database
[2025-12-16T05:05:35.725Z] [BOT] ✅ No jobs to archive (all 258 jobs within 7-day window)
[2025-12-16T05:05:35.727Z] [BOT] 💾 Saved posted_jobs.json: 258 active jobs
[2025-12-16T05:05:35.727Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T05:05:35.728Z] [BOT] 📍 [ROUTING] "Entry Level Developer - Contract" @ ORG_97f70c9d
[2025-12-16T05:05:35.728Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:05:36.194Z] [BOT] ✅ Created forum post: 🏢 Entry Level Developer - Contract @ ORG_97f70c9d in #💻・tech-jobs
  ✅ Industry: Entry Level Developer - Contract @ ORG_97f70c9d
[2025-12-16T05:05:37.905Z] [BOT] ✅ Created forum post: 🏢 Entry Level Developer - Contract @ ORG_97f70c9d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T05:05:39.406Z] [BOT] 💾 Marked as posted: Entry Level Developer - Contract @ ORG_97f70c9d (instance #1)
[2025-12-16T05:05:39.406Z] [BOT] 💾 BEFORE ARCHIVING: 259 jobs in database
[2025-12-16T05:05:39.406Z] [BOT] ✅ No jobs to archive (all 259 jobs within 7-day window)
[2025-12-16T05:05:39.409Z] [BOT] 💾 Saved posted_jobs.json: 259 active jobs
[2025-12-16T05:05:39.410Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T05:05:39.410Z] [BOT] 📍 [ROUTING] "Product Engineer" @ 3M
[2025-12-16T05:05:39.411Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:05:39.548Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ 3M in #💻・tech-jobs
[2025-12-16T05:05:39.549Z] [BOT] ✅ Industry: Product Engineer @ 3M
[2025-12-16T05:05:41.278Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ 3M in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T05:05:42.779Z] [BOT] 💾 Marked as posted: Product Engineer @ 3M (instance #1)
[2025-12-16T05:05:42.779Z] [BOT] 💾 BEFORE ARCHIVING: 260 jobs in database
[2025-12-16T05:05:42.779Z] [BOT] ✅ No jobs to archive (all 260 jobs within 7-day window)
[2025-12-16T05:05:42.783Z] [BOT] 💾 Saved posted_jobs.json: 260 active jobs
[2025-12-16T05:05:42.783Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T05:05:42.783Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_df6ef51e
   Category: TECH (matched: "software")
[2025-12-16T05:05:42.783Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:05:43.069Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_df6ef51e in #💻・tech-jobs
  ✅ Industry: Associate Software Developer @ ORG_df6ef51e
[2025-12-16T05:05:44.772Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_df6ef51e in #💻・remote-usa
[2025-12-16T05:05:44.772Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T05:05:46.274Z] [BOT] 💾 Marked as posted: Associate Software Developer @ ORG_df6ef51e (instance #1)
[2025-12-16T05:05:46.274Z] [BOT] 💾 BEFORE ARCHIVING: 261 jobs in database
[2025-12-16T05:05:46.274Z] [BOT] ✅ No jobs to archive (all 261 jobs within 7-day window)
[2025-12-16T05:05:46.279Z] [BOT] 💾 Saved posted_jobs.json: 261 active jobs
[2025-12-16T05:05:46.279Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T05:05:46.279Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_3429c666 United
[2025-12-16T05:05:46.279Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:05:46.642Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_3429c666 United in #💻・tech-jobs
[2025-12-16T05:05:46.642Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_3429c666 United
[2025-12-16T05:05:48.143Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_3429c666 United (instance #1)
[2025-12-16T05:05:48.144Z] [BOT] 💾 BEFORE ARCHIVING: 262 jobs in database
[2025-12-16T05:05:48.144Z] [BOT] ✅ No jobs to archive (all 262 jobs within 7-day window)
[2025-12-16T05:05:48.147Z] [BOT] 💾 Saved posted_jobs.json: 262 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:05:51.148Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-16T05:05:51.149Z] [BOT] 📍 [ROUTING] "Pubsec Project Admin" @ ORG_21db5199 International
[2025-12-16T05:05:51.149Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-16T05:05:51.381Z] [BOT] ✅ Created forum post: 🏢 Pubsec Project Admin @ ORG_21db5199 International  in #📣・marketing-jobs
  ✅ Industry: Pubsec Project Admin @ ORG_21db5199 International
[2025-12-16T05:05:53.059Z] [BOT] ✅ Created forum post: 🏢 Pubsec Project Admin @ ORG_21db5199 International  in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T05:05:54.560Z] [BOT] 💾 Marked as posted: Pubsec Project Admin @ ORG_21db5199 International  (instance #1)
[2025-12-16T05:05:54.561Z] [BOT] 💾 BEFORE ARCHIVING: 263 jobs in database
[2025-12-16T05:05:54.561Z] [BOT] ✅ No jobs to archive (all 263 jobs within 7-day window)
[2025-12-16T05:05:54.565Z] [BOT] 💾 Saved posted_jobs.json: 263 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:05:57.566Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-16T05:05:57.566Z] [BOT] 📍 [ROUTING] "Physicist" @ ORG_b891e1e7 Technologies
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-16T05:05:57.813Z] [BOT] ✅ Created forum post: 🏢 Physicist @ ORG_b891e1e7 Technologies in #🩺・healthcare-jobs
[2025-12-16T05:05:57.813Z] [BOT] ✅ Industry: Physicist @ ORG_b891e1e7 Technologies
[2025-12-16T05:05:59.479Z] [BOT] ✅ Created forum post: 🏢 Physicist @ ORG_b891e1e7 Technologies in #💻・remote-usa
[2025-12-16T05:05:59.480Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T05:06:00.981Z] [BOT] 💾 Marked as posted: Physicist @ ORG_b891e1e7 Technologies (instance #1)
[2025-12-16T05:06:00.981Z] [BOT] 💾 BEFORE ARCHIVING: 264 jobs in database
[2025-12-16T05:06:00.981Z] [BOT] ✅ No jobs to archive (all 264 jobs within 7-day window)
[2025-12-16T05:06:00.984Z] [BOT] 💾 Saved posted_jobs.json: 264 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:06:03.985Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-16T05:06:03.985Z] [BOT] 📍 [ROUTING] "Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence" @ ORG_569ec613 Morgan Chase
[2025-12-16T05:06:03.985Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T05:06:04.179Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence  in #🤖・ai-jobs
  ✅ Industry: Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence @ ORG_569ec613 Morgan Chase
[2025-12-16T05:06:05.882Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence  in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T05:06:07.382Z] [BOT] 💾 Marked as posted: Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence @ ORG_569ec613 Morgan Chase (instance #1)
[2025-12-16T05:06:07.383Z] [BOT] 💾 BEFORE ARCHIVING: 265 jobs in database
[2025-12-16T05:06:07.383Z] [BOT] ✅ No jobs to archive (all 265 jobs within 7-day window)
[2025-12-16T05:06:07.387Z] [BOT] 💾 Saved posted_jobs.json: 265 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:06:10.388Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T05:06:10.388Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_8454199c (posted within 7 days)
[2025-12-16T05:06:10.388Z] [BOT] ⏭️  Skipping duplicate: JID_ec17fa96-orlando_32822-application-engineer_wcjr-028621-1 (posted within 7 days)
[2025-12-16T05:06:10.388Z] [BOT] ⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-547547 (posted within 7 days)
⏭️  Skipping duplicate: JID_8f268ae7-admin_jr2034 (posted within 7 days)
[2025-12-16T05:06:10.388Z] [BOT] ⏭️  Skipping duplicate: JID_397bad24-radiance_external-JID_828405a7-physicist_hr101844 (posted within 7 days)
[2025-12-16T05:06:10.388Z] [BOT] ⏭️  Skipping duplicate: JID_2f15b3ae-contract_jr-0774 (posted within 7 days)
[2025-12-16T05:06:10.388Z] [BOT] ⏭️  Skipping duplicate: JID_860e27d6-cx_1001-job-210682815 (posted within 7 days)
[2025-12-16T05:06:10.388Z] [BOT] ⏭️  Skipping duplicate: JID_c55e1fc7-engineer_r01158471 (posted within 7 days)
⏭️  Skipping duplicate: JID_cd7b25fd-developer_r8050 (posted within 7 days)
[2025-12-16T05:06:10.389Z] [BOT] ⏭️  Skipping duplicate: JID_2b2a8f44-engineer_r5288 (posted within 7 days)
[2025-12-16T05:06:10.392Z] [BOT] ✅ Loaded pending queue: 623 total (603 pending, 20 enriched, 0 posted)
[2025-12-16T05:06:10.401Z] [BOT] ✅ Saved pending queue: 623 total (603 pending, 10 enriched, 10 posted)
[2025-12-16T05:06:10.401Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T05:06:10.440Z] [BOT] 📂 Loaded 248 existing routing entries
[2025-12-16T05:06:10.479Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-16T05:06:10.479Z] [BOT] Total entries: 258
   Timestamp: 2025-12-16T05:06:10.477Z
[2025-12-16T05:06:10.480Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T05:06:10.480Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2025-12-16T05:06:12.491Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*