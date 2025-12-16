# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T03:16:58.737Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T03:16:15.187Z] ========================================
[2025-12-16T03:16:15.188Z] Discord Bot Execution Log
[2025-12-16T03:16:15.188Z] Environment: GitHub Actions
[2025-12-16T03:16:15.189Z] Node Version: v20.19.6
[2025-12-16T03:16:15.189Z] ========================================
[2025-12-16T03:16:15.189Z] Environment Variables Check:
[2025-12-16T03:16:15.189Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T03:16:15.189Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T03:16:15.189Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T03:16:15.189Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T03:16:15.189Z] 
Multi-Channel Configuration:
[2025-12-16T03:16:15.189Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T03:16:15.189Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T03:16:15.190Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T03:16:15.190Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T03:16:15.190Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T03:16:15.190Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T03:16:15.190Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T03:16:15.190Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T03:16:15.190Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T03:16:15.190Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T03:16:15.190Z] 
Data Files Check:
[2025-12-16T03:16:15.191Z] .github/data/new_jobs.json: ✅ Exists (10 items, 36725 bytes)
[2025-12-16T03:16:15.191Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 123761 bytes)
[2025-12-16T03:16:15.191Z] 
========================================
[2025-12-16T03:16:15.192Z] Starting Enhanced Discord Bot...
[2025-12-16T03:16:15.192Z] ========================================
[2025-12-16T03:16:15.712Z] [BOT] ✅ Loaded V2 database: 195 jobs
[2025-12-16T03:16:16.332Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T03:16:16.332Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T03:16:16.332Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T03:16:16.333Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T03:16:16.389Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T03:16:16.456Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T03:16:16.457Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T03:16:16.458Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T03:16:16.458Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T03:16:16.459Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T03:16:16.459Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T03:16:16.462Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2025-12-16T03:16:16.463Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_7a23266b
[2025-12-16T03:16:16.463Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T03:16:16.467Z] [BOT ERROR] (node:2873) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T03:16:16.695Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7a23266b in #💻・tech-jobs
[2025-12-16T03:16:16.696Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_7a23266b
[2025-12-16T03:16:18.770Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7a23266b in #💻・remote-usa
[2025-12-16T03:16:18.770Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T03:16:20.270Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_7a23266b (instance #1)
[2025-12-16T03:16:20.270Z] [BOT] 💾 BEFORE ARCHIVING: 196 jobs in database
[2025-12-16T03:16:20.270Z] [BOT] ✅ No jobs to archive (all 196 jobs within 7-day window)
[2025-12-16T03:16:20.277Z] [BOT] 💾 Saved posted_jobs.json: 196 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T03:16:20.277Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Ad Demand" @ ORG_a731a58c
[2025-12-16T03:16:20.278Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T03:16:20.437Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Ad Demand @ ORG_a731a58c in #💻・tech-jobs
[2025-12-16T03:16:20.437Z] [BOT] ✅ Industry: Software Engineer 1 - Ad Demand @ ORG_a731a58c
[2025-12-16T03:16:22.070Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Ad Demand @ ORG_a731a58c in #🌉・san-francisco
[2025-12-16T03:16:22.070Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T03:16:23.570Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Ad Demand @ ORG_a731a58c (instance #1)
[2025-12-16T03:16:23.571Z] [BOT] 💾 BEFORE ARCHIVING: 197 jobs in database
[2025-12-16T03:16:23.571Z] [BOT] ✅ No jobs to archive (all 197 jobs within 7-day window)
[2025-12-16T03:16:23.573Z] [BOT] 💾 Saved posted_jobs.json: 197 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T03:16:23.574Z] [BOT] 📍 [ROUTING] "Software Engineer – May Graduates" @ ORG_6b607b1f
[2025-12-16T03:16:23.574Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T03:16:23.713Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – May Graduates @ ORG_6b607b1f in #💻・tech-jobs
[2025-12-16T03:16:23.714Z] [BOT] ✅ Industry: Software Engineer – May Graduates @ ORG_6b607b1f
[2025-12-16T03:16:25.421Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – May Graduates @ ORG_6b607b1f in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T03:16:26.921Z] [BOT] 💾 Marked as posted: Software Engineer – May Graduates @ ORG_6b607b1f (instance #1)
[2025-12-16T03:16:26.921Z] [BOT] 💾 BEFORE ARCHIVING: 198 jobs in database
✅ No jobs to archive (all 198 jobs within 7-day window)
[2025-12-16T03:16:26.925Z] [BOT] 💾 Saved posted_jobs.json: 198 active jobs
[2025-12-16T03:16:26.925Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T03:16:26.926Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Ad Demand" @ ORG_49d2dc07
[2025-12-16T03:16:26.926Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T03:16:27.632Z] [BOT] ✅ Created forum post: 📦 Software Engineer 1 - Ad Demand @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Ad Demand @ ORG_49d2dc07
[2025-12-16T03:16:29.274Z] [BOT] ✅ Created forum post: 📦 Software Engineer 1 - Ad Demand @ ORG_49d2dc07 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T03:16:30.775Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Ad Demand @ ORG_49d2dc07 (instance #1)
[2025-12-16T03:16:30.775Z] [BOT] 💾 BEFORE ARCHIVING: 199 jobs in database
[2025-12-16T03:16:30.776Z] [BOT] ✅ No jobs to archive (all 199 jobs within 7-day window)
[2025-12-16T03:16:30.779Z] [BOT] 💾 Saved posted_jobs.json: 199 active jobs
[2025-12-16T03:16:30.779Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T03:16:30.779Z] [BOT] 📍 [ROUTING] "Software Developer 1" @ ORG_dc7620eb
[2025-12-16T03:16:30.779Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T03:16:30.923Z] [BOT] ✅ Created forum post: 🔴 Software Developer 1 @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Software Developer 1 @ ORG_dc7620eb
[2025-12-16T03:16:32.607Z] [BOT] ✅ Created forum post: 🔴 Software Developer 1 @ ORG_dc7620eb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T03:16:34.109Z] [BOT] 💾 Marked as posted: Software Developer 1 @ ORG_dc7620eb (instance #1)
[2025-12-16T03:16:34.109Z] [BOT] 💾 BEFORE ARCHIVING: 200 jobs in database
[2025-12-16T03:16:34.109Z] [BOT] ✅ No jobs to archive (all 200 jobs within 7-day window)
[2025-12-16T03:16:34.112Z] [BOT] 💾 Saved posted_jobs.json: 200 active jobs
[2025-12-16T03:16:34.112Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T03:16:34.112Z] [BOT] 📍 [ROUTING] "Principal Mission Assurance Engineer" @ ORG_f3f2248d Grumman
[2025-12-16T03:16:34.113Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T03:16:34.294Z] [BOT] ✅ Created forum post: 🏢 Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2025-12-16T03:16:34.295Z] [BOT] ✅ Industry: Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman
[2025-12-16T03:16:36.150Z] [BOT] ✅ Created forum post: 🏢 Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman in #💻・remote-usa
[2025-12-16T03:16:36.150Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T03:16:37.651Z] [BOT] 💾 Marked as posted: Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman (instance #1)
[2025-12-16T03:16:37.651Z] [BOT] 💾 BEFORE ARCHIVING: 201 jobs in database
[2025-12-16T03:16:37.651Z] [BOT] ✅ No jobs to archive (all 201 jobs within 7-day window)
[2025-12-16T03:16:37.655Z] [BOT] 💾 Saved posted_jobs.json: 201 active jobs
[2025-12-16T03:16:37.655Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T03:16:37.655Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_47ec0177 Mutual
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T03:16:37.804Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_47ec0177 Mutual in #💻・tech-jobs
[2025-12-16T03:16:37.804Z] [BOT] ✅ Industry: Associate Software Developer @ ORG_47ec0177 Mutual
[2025-12-16T03:16:39.492Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_47ec0177 Mutual in #🤠・austin
[2025-12-16T03:16:39.492Z] [BOT] ✅ Location: 🤠・austin
[2025-12-16T03:16:40.993Z] [BOT] 💾 Marked as posted: Associate Software Developer @ ORG_47ec0177 Mutual (instance #1)
[2025-12-16T03:16:40.993Z] [BOT] 💾 BEFORE ARCHIVING: 202 jobs in database
[2025-12-16T03:16:40.993Z] [BOT] ✅ No jobs to archive (all 202 jobs within 7-day window)
[2025-12-16T03:16:40.996Z] [BOT] 💾 Saved posted_jobs.json: 202 active jobs
[2025-12-16T03:16:40.996Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T03:16:40.996Z] [BOT] 📍 [ROUTING] "Java Full Stack Engineer - Associate" @ ORG_cb204781
   Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T03:16:41.149Z] [BOT] ✅ Created forum post: 🏢 Java Full Stack Engineer - Associate @ ORG_cb204781 in #💻・tech-jobs
  ✅ Industry: Java Full Stack Engineer - Associate @ ORG_cb204781
[2025-12-16T03:16:42.650Z] [BOT] 💾 Marked as posted: Java Full Stack Engineer - Associate @ ORG_cb204781 (instance #1)
[2025-12-16T03:16:42.651Z] [BOT] 💾 BEFORE ARCHIVING: 203 jobs in database
✅ No jobs to archive (all 203 jobs within 7-day window)
[2025-12-16T03:16:42.654Z] [BOT] 💾 Saved posted_jobs.json: 203 active jobs
[2025-12-16T03:16:42.654Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T03:16:42.654Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
[2025-12-16T03:16:42.654Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T03:16:42.923Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
  ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2025-12-16T03:16:44.588Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T03:16:46.089Z] [BOT] 💾 Marked as posted: Early Career Software Engineer @ ORG_2b147ca6 Health (instance #1)
[2025-12-16T03:16:46.089Z] [BOT] 💾 BEFORE ARCHIVING: 204 jobs in database
[2025-12-16T03:16:46.089Z] [BOT] ✅ No jobs to archive (all 204 jobs within 7-day window)
[2025-12-16T03:16:46.092Z] [BOT] 💾 Saved posted_jobs.json: 204 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T03:16:49.092Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T03:16:49.093Z] [BOT] 📍 [ROUTING] "Associate Engineer / Engineer / Senior Engineer - Electric Transmission Operations Analytics" @ ORG_1111d586inion Energy
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-16T03:16:49.093Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-16T03:16:49.093Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T03:16:49.757Z] [BOT] ✅ Created forum post: 🏢 Associate Engineer / Engineer / Senior Engineer - Electric Transmission Operations Analytics @ ORG_30094e0b in #📈・JID_fb739488
  ✅ Industry: Associate Engineer / Engineer / Senior Engineer - Electric Transmission Operations Analytics @ ORG_1111d586inion Energy
[2025-12-16T03:16:51.572Z] [BOT] ✅ Created forum post: 🏢 Associate Engineer / Engineer / Senior Engineer - Electric Transmission Operations Analytics @ ORG_30094e0b in #💻・remote-usa
[2025-12-16T03:16:51.572Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T03:16:53.073Z] [BOT] 💾 Marked as posted: Associate Engineer / Engineer / Senior Engineer - Electric Transmission Operations Analytics @ ORG_1111d586inion Energy (instance #1)
[2025-12-16T03:16:53.073Z] [BOT] 💾 BEFORE ARCHIVING: 205 jobs in database
[2025-12-16T03:16:53.074Z] [BOT] ✅ No jobs to archive (all 205 jobs within 7-day window)
[2025-12-16T03:16:53.077Z] [BOT] 💾 Saved posted_jobs.json: 205 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T03:16:56.078Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T03:16:56.078Z] [BOT] ⏭️  Skipping duplicate: JID_7786e29c (posted within 7 days)
[2025-12-16T03:16:56.078Z] [BOT] ⏭️  Skipping duplicate: JID_02f4f2d9 (posted within 7 days)
[2025-12-16T03:16:56.078Z] [BOT] ⏭️  Skipping duplicate: JID_059fdb40 (posted within 7 days)
[2025-12-16T03:16:56.078Z] [BOT] ⏭️  Skipping duplicate: JID_0942e2cc (posted within 7 days)
⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-315615 (posted within 7 days)
[2025-12-16T03:16:56.078Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_62b698da-16584_r10216305 (posted within 7 days)
[2025-12-16T03:16:56.078Z] [BOT] ⏭️  Skipping duplicate: JID_429d49b0-cx_1-job-41204 (posted within 7 days)
[2025-12-16T03:16:56.079Z] [BOT] ⏭️  Skipping duplicate: JID_3a1da1cf-sr_-JID_4f84af85 (posted within 7 days)
[2025-12-16T03:16:56.079Z] [BOT] ⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-549450 (posted within 7 days)
⏭️  Skipping duplicate: JID_d0ce8eb6 (posted within 7 days)
[2025-12-16T03:16:56.084Z] [BOT] ✅ Loaded pending queue: 671 total (651 pending, 20 enriched, 0 posted)
[2025-12-16T03:16:56.094Z] [BOT] ✅ Saved pending queue: 671 total (651 pending, 10 enriched, 10 posted)
[2025-12-16T03:16:56.094Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T03:16:56.131Z] [BOT] 📂 Loaded 188 existing routing entries
[2025-12-16T03:16:56.168Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 198
   Timestamp: 2025-12-16T03:16:56.167Z
[2025-12-16T03:16:56.169Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T03:16:56.169Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2025-12-16T03:16:58.181Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2873) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*