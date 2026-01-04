# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T15:24:43.475Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T15:24:05.317Z] ========================================
[2026-01-04T15:24:05.319Z] Discord Bot Execution Log
[2026-01-04T15:24:05.319Z] Environment: GitHub Actions
[2026-01-04T15:24:05.319Z] Node Version: v20.19.6
[2026-01-04T15:24:05.319Z] ========================================
[2026-01-04T15:24:05.319Z] Environment Variables Check:
[2026-01-04T15:24:05.319Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T15:24:05.319Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T15:24:05.319Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T15:24:05.320Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T15:24:05.320Z] 
Multi-Channel Configuration:
[2026-01-04T15:24:05.320Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T15:24:05.320Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T15:24:05.320Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T15:24:05.320Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T15:24:05.320Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T15:24:05.320Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T15:24:05.320Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T15:24:05.320Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T15:24:05.320Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T15:24:05.320Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T15:24:05.321Z] 
Data Files Check:
[2026-01-04T15:24:05.321Z] .github/data/new_jobs.json: ✅ Exists (10 items, 88804 bytes)
[2026-01-04T15:24:05.326Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 588196 bytes)
[2026-01-04T15:24:05.326Z] 
========================================
[2026-01-04T15:24:05.326Z] Starting Enhanced Discord Bot...
[2026-01-04T15:24:05.326Z] ========================================
[2026-01-04T15:24:05.835Z] [BOT] ✅ Loaded V2 database: 1170 jobs
[2026-01-04T15:24:06.484Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T15:24:06.484Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T15:24:06.484Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T15:24:06.485Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T15:24:06.555Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T15:24:06.649Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T15:24:06.651Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T15:24:06.651Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T15:24:06.651Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T15:24:06.652Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-04T15:24:06.652Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Area Director - Sales @ nominal: new york, austin, los angeles
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T15:24:06.655Z] [BOT] 📌 Posting 7 jobs to #🤖・ai-jobs
[2026-01-04T15:24:06.656Z] [BOT] 📍 [ROUTING] "Machine Learning Engineering Manager, Personalization" @ spotify
[2026-01-04T15:24:06.656Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T15:24:06.673Z] [BOT ERROR] (node:3027) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T15:24:07.451Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineering Manager, Personalization @ spotify in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineering Manager, Personalization @ spotify
[2026-01-04T15:24:09.160Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineering Manager, Personalization @ spotify in #🗽・new-york
[2026-01-04T15:24:09.160Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T15:24:10.661Z] [BOT] 💾 Marked as posted: Machine Learning Engineering Manager, Personalization @ spotify (instance #1)
[2026-01-04T15:24:10.661Z] [BOT] 💾 BEFORE ARCHIVING: 1171 jobs in database
[2026-01-04T15:24:10.662Z] [BOT] ✅ No jobs to archive (all 1171 jobs within 7-day window)
[2026-01-04T15:24:10.674Z] [BOT] 💾 Saved posted_jobs.json: 1171 active jobs
[2026-01-04T15:24:10.674Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:24:10.676Z] [BOT] 📍 [ROUTING] "Software Engineer - Rust / Bevy / WebGPU" @ nominal
[2026-01-04T15:24:10.677Z] [BOT] Category: AI (matched: "artificial intelligence")
[2026-01-04T15:24:10.677Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T15:24:10.954Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Rust / Bevy / WebGPU @ nominal in #🤖・ai-jobs
[2026-01-04T15:24:10.954Z] [BOT] ✅ Industry: Software Engineer - Rust / Bevy / WebGPU @ nominal
[2026-01-04T15:24:12.716Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Rust / Bevy / WebGPU @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-04T15:24:14.216Z] [BOT] 💾 Marked as posted: Software Engineer - Rust / Bevy / WebGPU @ nominal (instance #1)
[2026-01-04T15:24:14.216Z] [BOT] 💾 BEFORE ARCHIVING: 1172 jobs in database
[2026-01-04T15:24:14.217Z] [BOT] ✅ No jobs to archive (all 1172 jobs within 7-day window)
[2026-01-04T15:24:14.224Z] [BOT] 💾 Saved posted_jobs.json: 1172 active jobs
[2026-01-04T15:24:14.224Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:24:14.225Z] [BOT] 📍 [ROUTING] "Software Engineer – Systems & Real-Time (RTOS / HIL)" @ nominal
[2026-01-04T15:24:14.225Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T15:24:14.502Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Systems & Real-Time (RTOS / HIL) @ nominal in #🤖・ai-jobs
[2026-01-04T15:24:14.502Z] [BOT] ✅ Industry: Software Engineer – Systems & Real-Time (RTOS / HIL) @ nominal
[2026-01-04T15:24:16.332Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Systems & Real-Time (RTOS / HIL) @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-04T15:24:17.833Z] [BOT] 💾 Marked as posted: Software Engineer – Systems & Real-Time (RTOS / HIL) @ nominal (instance #1)
[2026-01-04T15:24:17.834Z] [BOT] 💾 BEFORE ARCHIVING: 1173 jobs in database
[2026-01-04T15:24:17.835Z] [BOT] ✅ No jobs to archive (all 1173 jobs within 7-day window)
[2026-01-04T15:24:17.844Z] [BOT] 💾 Saved posted_jobs.json: 1173 active jobs
[2026-01-04T15:24:17.844Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:24:17.846Z] [BOT] 📍 [ROUTING] "Product Designer - Early Career" @ nominal
[2026-01-04T15:24:17.846Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:24:18.104Z] [BOT] ✅ Created forum post: 🏢 Product Designer - Early Career @ nominal in #🤖・ai-jobs
[2026-01-04T15:24:18.104Z] [BOT] ✅ Industry: Product Designer - Early Career @ nominal
[2026-01-04T15:24:19.944Z] [BOT] ✅ Created forum post: 🏢 Product Designer - Early Career @ nominal in #🗽・new-york
[2026-01-04T15:24:19.944Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T15:24:21.446Z] [BOT] 💾 Marked as posted: Product Designer - Early Career @ nominal (instance #1)
[2026-01-04T15:24:21.446Z] [BOT] 💾 BEFORE ARCHIVING: 1174 jobs in database
[2026-01-04T15:24:21.447Z] [BOT] ✅ No jobs to archive (all 1174 jobs within 7-day window)
[2026-01-04T15:24:21.456Z] [BOT] 💾 Saved posted_jobs.json: 1174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:24:21.457Z] [BOT] 📍 [ROUTING] "Executive Assistant" @ nominal
[2026-01-04T15:24:21.457Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:24:21.651Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant @ nominal in #🤖・ai-jobs
  ✅ Industry: Executive Assistant @ nominal
[2026-01-04T15:24:23.419Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-04T15:24:24.920Z] [BOT] 💾 Marked as posted: Executive Assistant @ nominal (instance #1)
[2026-01-04T15:24:24.921Z] [BOT] 💾 BEFORE ARCHIVING: 1175 jobs in database
[2026-01-04T15:24:24.921Z] [BOT] ✅ No jobs to archive (all 1175 jobs within 7-day window)
[2026-01-04T15:24:24.929Z] [BOT] 💾 Saved posted_jobs.json: 1175 active jobs
[2026-01-04T15:24:24.930Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:24:24.930Z] [BOT] 📍 [ROUTING] "Area Director - Sales" @ nominal
[2026-01-04T15:24:24.930Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:24:25.130Z] [BOT] ✅ Created forum post: 🏢 Area Director - Sales @ nominal in #🤖・ai-jobs
[2026-01-04T15:24:25.130Z] [BOT] ✅ Industry: Area Director - Sales @ nominal
[2026-01-04T15:24:26.861Z] [BOT] ✅ Created forum post: 🏢 Area Director - Sales @ nominal in #🗽・new-york
[2026-01-04T15:24:26.861Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T15:24:28.361Z] [BOT] 💾 Marked as posted: Area Director - Sales @ nominal (instance #1)
[2026-01-04T15:24:28.361Z] [BOT] 💾 BEFORE ARCHIVING: 1176 jobs in database
[2026-01-04T15:24:28.362Z] [BOT] ✅ No jobs to archive (all 1176 jobs within 7-day window)
[2026-01-04T15:24:28.370Z] [BOT] 💾 Saved posted_jobs.json: 1176 active jobs
[2026-01-04T15:24:28.370Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:24:28.371Z] [BOT] 💾 Marked as posted: Area Director - Sales @ nominal (instance #1)
💾 BEFORE ARCHIVING: 1177 jobs in database
[2026-01-04T15:24:28.371Z] [BOT] ✅ No jobs to archive (all 1177 jobs within 7-day window)
[2026-01-04T15:24:28.379Z] [BOT] 💾 Saved posted_jobs.json: 1177 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:24:28.379Z] [BOT] 💾 Marked as posted: Area Director - Sales @ nominal (instance #1)
💾 BEFORE ARCHIVING: 1178 jobs in database
[2026-01-04T15:24:28.380Z] [BOT] ✅ No jobs to archive (all 1178 jobs within 7-day window)
[2026-01-04T15:24:28.387Z] [BOT] 💾 Saved posted_jobs.json: 1178 active jobs
[2026-01-04T15:24:28.387Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:24:28.387Z] [BOT] 📍 [ROUTING] "Lead Sales Engineer" @ nominal
   Category: AI (matched: "artificial intelligence")
[2026-01-04T15:24:28.387Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:24:28.695Z] [BOT] ✅ Created forum post: 🏢 Lead Sales Engineer @ nominal in #🤖・ai-jobs
  ✅ Industry: Lead Sales Engineer @ nominal
[2026-01-04T15:24:30.397Z] [BOT] ✅ Created forum post: 🏢 Lead Sales Engineer @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-04T15:24:31.898Z] [BOT] 💾 Marked as posted: Lead Sales Engineer @ nominal (instance #1)
[2026-01-04T15:24:31.898Z] [BOT] 💾 BEFORE ARCHIVING: 1179 jobs in database
[2026-01-04T15:24:31.899Z] [BOT] ✅ No jobs to archive (all 1179 jobs within 7-day window)
[2026-01-04T15:24:31.906Z] [BOT] 💾 Saved posted_jobs.json: 1179 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:24:34.907Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T15:24:34.908Z] [BOT] 📍 [ROUTING] "Brand Designer" @ supabase
[2026-01-04T15:24:34.908Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T15:24:35.561Z] [BOT] ✅ Created forum post: 🏢 Brand Designer @ supabase in #💲・sales-jobs
  ✅ Industry: Brand Designer @ supabase
[2026-01-04T15:24:37.063Z] [BOT] 💾 Marked as posted: Brand Designer @ supabase (instance #1)
[2026-01-04T15:24:37.063Z] [BOT] 💾 BEFORE ARCHIVING: 1180 jobs in database
[2026-01-04T15:24:37.064Z] [BOT] ✅ No jobs to archive (all 1180 jobs within 7-day window)
[2026-01-04T15:24:37.073Z] [BOT] 💾 Saved posted_jobs.json: 1180 active jobs
[2026-01-04T15:24:37.073Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:24:40.074Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-04T15:24:40.074Z] [BOT] ⏭️  Skipping duplicate: JID_cd9053b6 (posted within 7 days)
[2026-01-04T15:24:40.075Z] [BOT] ⏭️  Skipping duplicate: JID_3796b931 (posted within 7 days)
[2026-01-04T15:24:40.075Z] [BOT] ⏭️  Skipping duplicate: JID_4bc2d6bd (posted within 7 days)
[2026-01-04T15:24:40.075Z] [BOT] ⏭️  Skipping duplicate: JID_814fa0f7 (posted within 7 days)
⏭️  Skipping duplicate: JID_38f88f25 (posted within 7 days)
[2026-01-04T15:24:40.075Z] [BOT] ⏭️  Skipping duplicate: JID_4cecf120 (posted within 7 days)
[2026-01-04T15:24:40.075Z] [BOT] ⏭️  Skipping duplicate: JID_d82e3c61 (posted within 7 days)
⏭️  Skipping duplicate: JID_baa95e15 (posted within 7 days)
[2026-01-04T15:24:40.081Z] [BOT] ✅ Loaded pending queue: 120 total (100 pending, 20 enriched, 0 posted)
[2026-01-04T15:24:40.087Z] [BOT] ✅ Saved pending queue: 120 total (100 pending, 12 enriched, 8 posted)
[2026-01-04T15:24:40.087Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T15:24:40.136Z] [BOT] 📂 Loaded 2089 existing routing entries
[2026-01-04T15:24:40.195Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-04T15:24:40.196Z] [BOT] New entries: 8
   Total entries: 2097
   Timestamp: 2026-01-04T15:24:40.181Z
[2026-01-04T15:24:40.196Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T15:24:40.196Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-04T15:24:40.197Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T15:24:40.197Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 4
   Top channels:
[2026-01-04T15:24:40.197Z] [BOT] 1. #🤖・ai-jobs: 7 posts
     2. #🦢・los-angeles: 4 posts
     3. #🗽・new-york: 3 posts
     4. #💲・sales-jobs: 1 posts
[2026-01-04T15:24:40.197Z] [BOT] [STATS] Channel stats saved
[2026-01-04T15:24:42.209Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3027) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*