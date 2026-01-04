# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T15:37:26.036Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T15:36:46.769Z] ========================================
[2026-01-04T15:36:46.771Z] Discord Bot Execution Log
[2026-01-04T15:36:46.771Z] Environment: GitHub Actions
[2026-01-04T15:36:46.771Z] Node Version: v20.19.6
[2026-01-04T15:36:46.771Z] ========================================
[2026-01-04T15:36:46.771Z] Environment Variables Check:
[2026-01-04T15:36:46.771Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T15:36:46.772Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T15:36:46.772Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T15:36:46.772Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T15:36:46.772Z] 
Multi-Channel Configuration:
[2026-01-04T15:36:46.772Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T15:36:46.772Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T15:36:46.772Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T15:36:46.772Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T15:36:46.772Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T15:36:46.772Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T15:36:46.772Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T15:36:46.773Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T15:36:46.773Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T15:36:46.773Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T15:36:46.773Z] 
Data Files Check:
[2026-01-04T15:36:46.774Z] .github/data/new_jobs.json: ✅ Exists (10 items, 97431 bytes)
[2026-01-04T15:36:46.778Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 593353 bytes)
[2026-01-04T15:36:46.778Z] 
========================================
[2026-01-04T15:36:46.778Z] Starting Enhanced Discord Bot...
[2026-01-04T15:36:46.778Z] ========================================
[2026-01-04T15:36:47.306Z] [BOT] ✅ Loaded V2 database: 1180 jobs
[2026-01-04T15:36:48.197Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T15:36:48.197Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T15:36:48.197Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T15:36:48.198Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T15:36:48.266Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T15:36:48.355Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T15:36:48.357Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T15:36:48.358Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T15:36:48.358Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T15:36:48.359Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-04T15:36:48.359Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Enterprise Account Executive @ nominal: new york, austin
   - Mission Operations Engineer @ nominal: new york, austin
[2026-01-04T15:36:48.359Z] [BOT] ⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T15:36:48.362Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-04T15:36:48.363Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ nominal
[2026-01-04T15:36:48.363Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:36:48.363Z] [BOT] ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-04T15:36:48.381Z] [BOT ERROR] (node:2887) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T15:36:48.609Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ nominal in #🤖・ai-jobs
  ✅ Industry: Enterprise Account Executive @ nominal
[2026-01-04T15:36:50.421Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ nominal in #🗽・new-york
[2026-01-04T15:36:50.421Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T15:36:51.921Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ nominal (instance #1)
[2026-01-04T15:36:51.921Z] [BOT] 💾 BEFORE ARCHIVING: 1181 jobs in database
[2026-01-04T15:36:51.922Z] [BOT] ✅ No jobs to archive (all 1181 jobs within 7-day window)
[2026-01-04T15:36:51.933Z] [BOT] 💾 Saved posted_jobs.json: 1181 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:36:51.934Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ nominal (instance #1)
[2026-01-04T15:36:51.934Z] [BOT] 💾 BEFORE ARCHIVING: 1182 jobs in database
[2026-01-04T15:36:51.935Z] [BOT] ✅ No jobs to archive (all 1182 jobs within 7-day window)
[2026-01-04T15:36:51.942Z] [BOT] 💾 Saved posted_jobs.json: 1182 active jobs
[2026-01-04T15:36:51.943Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:36:51.943Z] [BOT] 📍 [ROUTING] "Product Support Engineer" @ nominal
[2026-01-04T15:36:51.944Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T15:36:54.333Z] [BOT] ✅ Created forum post: 🏢 Product Support Engineer @ nominal in #🤖・ai-jobs
[2026-01-04T15:36:54.333Z] [BOT] ✅ Industry: Product Support Engineer @ nominal
[2026-01-04T15:36:56.072Z] [BOT] ✅ Created forum post: 🏢 Product Support Engineer @ nominal in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T15:36:57.574Z] [BOT] 💾 Marked as posted: Product Support Engineer @ nominal (instance #1)
[2026-01-04T15:36:57.574Z] [BOT] 💾 BEFORE ARCHIVING: 1183 jobs in database
[2026-01-04T15:36:57.575Z] [BOT] ✅ No jobs to archive (all 1183 jobs within 7-day window)
[2026-01-04T15:36:57.583Z] [BOT] 💾 Saved posted_jobs.json: 1183 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:36:57.583Z] [BOT] 📍 [ROUTING] "Manager, Digital Marketing" @ gohighlevel
[2026-01-04T15:36:57.583Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:36:57.862Z] [BOT] ✅ Created forum post: 🏢 Manager, Digital Marketing @ gohighlevel in #🤖・ai-jobs
  ✅ Industry: Manager, Digital Marketing @ gohighlevel
[2026-01-04T15:36:59.363Z] [BOT] 💾 Marked as posted: Manager, Digital Marketing @ gohighlevel (instance #1)
[2026-01-04T15:36:59.363Z] [BOT] 💾 BEFORE ARCHIVING: 1184 jobs in database
[2026-01-04T15:36:59.364Z] [BOT] ✅ No jobs to archive (all 1184 jobs within 7-day window)
[2026-01-04T15:36:59.372Z] [BOT] 💾 Saved posted_jobs.json: 1184 active jobs
[2026-01-04T15:36:59.372Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:36:59.372Z] [BOT] 📍 [ROUTING] "Mission Operations Engineer" @ nominal
[2026-01-04T15:36:59.372Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T15:36:59.631Z] [BOT] ✅ Created forum post: 🏢 Mission Operations Engineer @ nominal in #🤖・ai-jobs
  ✅ Industry: Mission Operations Engineer @ nominal
[2026-01-04T15:37:01.447Z] [BOT] ✅ Created forum post: 🏢 Mission Operations Engineer @ nominal in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T15:37:02.949Z] [BOT] 💾 Marked as posted: Mission Operations Engineer @ nominal (instance #1)
[2026-01-04T15:37:02.949Z] [BOT] 💾 BEFORE ARCHIVING: 1185 jobs in database
[2026-01-04T15:37:02.950Z] [BOT] ✅ No jobs to archive (all 1185 jobs within 7-day window)
[2026-01-04T15:37:02.957Z] [BOT] 💾 Saved posted_jobs.json: 1185 active jobs
[2026-01-04T15:37:02.957Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:37:02.957Z] [BOT] 💾 Marked as posted: Mission Operations Engineer @ nominal (instance #1)
💾 BEFORE ARCHIVING: 1186 jobs in database
[2026-01-04T15:37:02.958Z] [BOT] ✅ No jobs to archive (all 1186 jobs within 7-day window)
[2026-01-04T15:37:02.965Z] [BOT] 💾 Saved posted_jobs.json: 1186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:37:02.965Z] [BOT] 📍 [ROUTING] "Product Designer" @ nominal
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:37:03.297Z] [BOT] ✅ Created forum post: 🏢 Product Designer @ nominal in #🤖・ai-jobs
[2026-01-04T15:37:03.297Z] [BOT] ✅ Industry: Product Designer @ nominal
[2026-01-04T15:37:05.059Z] [BOT] ✅ Created forum post: 🏢 Product Designer @ nominal in #🦢・los-angeles
[2026-01-04T15:37:05.060Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-04T15:37:06.561Z] [BOT] 💾 Marked as posted: Product Designer @ nominal (instance #1)
[2026-01-04T15:37:06.561Z] [BOT] 💾 BEFORE ARCHIVING: 1187 jobs in database
[2026-01-04T15:37:06.562Z] [BOT] ✅ No jobs to archive (all 1187 jobs within 7-day window)
[2026-01-04T15:37:06.571Z] [BOT] 💾 Saved posted_jobs.json: 1187 active jobs
[2026-01-04T15:37:06.571Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:37:09.571Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T15:37:09.572Z] [BOT] 📍 [ROUTING] "Technical Account Executive" @ clerk
[2026-01-04T15:37:09.572Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T15:37:09.960Z] [BOT] ✅ Created forum post: 🏢 Technical Account Executive @ clerk in #💲・sales-jobs
[2026-01-04T15:37:09.960Z] [BOT] ✅ Industry: Technical Account Executive @ clerk
[2026-01-04T15:37:11.756Z] [BOT] ✅ Created forum post: 🏢 Technical Account Executive @ clerk in #🌉・san-francisco
[2026-01-04T15:37:11.756Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T15:37:13.256Z] [BOT] 💾 Marked as posted: Technical Account Executive @ clerk (instance #1)
[2026-01-04T15:37:13.256Z] [BOT] 💾 BEFORE ARCHIVING: 1188 jobs in database
[2026-01-04T15:37:13.257Z] [BOT] ✅ No jobs to archive (all 1188 jobs within 7-day window)
[2026-01-04T15:37:13.267Z] [BOT] 💾 Saved posted_jobs.json: 1188 active jobs
[2026-01-04T15:37:13.267Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:37:16.267Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-04T15:37:16.268Z] [BOT] 📍 [ROUTING] "CLI Engineer" @ supabase
[2026-01-04T15:37:16.268Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T15:37:16.478Z] [BOT] ✅ Created forum post: 🏢 CLI Engineer @ supabase in #💻・tech-jobs
[2026-01-04T15:37:16.478Z] [BOT] ✅ Industry: CLI Engineer @ supabase
[2026-01-04T15:37:17.978Z] [BOT] 💾 Marked as posted: CLI Engineer @ supabase (instance #1)
[2026-01-04T15:37:17.979Z] [BOT] 💾 BEFORE ARCHIVING: 1189 jobs in database
[2026-01-04T15:37:17.979Z] [BOT] ✅ No jobs to archive (all 1189 jobs within 7-day window)
[2026-01-04T15:37:17.990Z] [BOT] 💾 Saved posted_jobs.json: 1189 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:37:17.990Z] [BOT] 📍 [ROUTING] "Backend Engineer" @ clerk
[2026-01-04T15:37:17.990Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T15:37:18.199Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer @ clerk in #💻・tech-jobs
[2026-01-04T15:37:18.199Z] [BOT] ✅ Industry: Backend Engineer @ clerk
[2026-01-04T15:37:19.700Z] [BOT] 💾 Marked as posted: Backend Engineer @ clerk (instance #1)
[2026-01-04T15:37:19.700Z] [BOT] 💾 BEFORE ARCHIVING: 1190 jobs in database
[2026-01-04T15:37:19.700Z] [BOT] ✅ No jobs to archive (all 1190 jobs within 7-day window)
[2026-01-04T15:37:19.709Z] [BOT] 💾 Saved posted_jobs.json: 1190 active jobs
[2026-01-04T15:37:19.709Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:37:22.708Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-04T15:37:22.709Z] [BOT] ⏭️  Skipping duplicate: JID_be56f432 (posted within 7 days)
[2026-01-04T15:37:22.709Z] [BOT] ⏭️  Skipping duplicate: JID_110a55cc (posted within 7 days)
[2026-01-04T15:37:22.709Z] [BOT] ⏭️  Skipping duplicate: JID_5a14ec1a (posted within 7 days)
[2026-01-04T15:37:22.709Z] [BOT] ⏭️  Skipping duplicate: JID_1f4eb4ff (posted within 7 days)
⏭️  Skipping duplicate: JID_afadcbd6 (posted within 7 days)
[2026-01-04T15:37:22.709Z] [BOT] ⏭️  Skipping duplicate: JID_47c4946b (posted within 7 days)
[2026-01-04T15:37:22.710Z] [BOT] ⏭️  Skipping duplicate: JID_d56c9495 (posted within 7 days)
[2026-01-04T15:37:22.710Z] [BOT] ⏭️  Skipping duplicate: JID_b8e1326e (posted within 7 days)
[2026-01-04T15:37:22.713Z] [BOT] ✅ Loaded pending queue: 110 total (90 pending, 20 enriched, 0 posted)
[2026-01-04T15:37:22.720Z] [BOT] ✅ Saved pending queue: 110 total (90 pending, 12 enriched, 8 posted)
[2026-01-04T15:37:22.720Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T15:37:22.771Z] [BOT] 📂 Loaded 2097 existing routing entries
[2026-01-04T15:37:22.829Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
[2026-01-04T15:37:22.830Z] [BOT] Total entries: 2105
   Timestamp: 2026-01-04T15:37:22.817Z
[2026-01-04T15:37:22.830Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T15:37:22.830Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-04T15:37:22.830Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T15:37:22.831Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 6
   Top channels:
[2026-01-04T15:37:22.831Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #🗽・new-york: 3 posts
     3. #💻・tech-jobs: 2 posts
[2026-01-04T15:37:22.831Z] [BOT] 4. #🦢・los-angeles: 1 posts
     5. #💲・sales-jobs: 1 posts
[2026-01-04T15:37:22.831Z] [BOT] [STATS] Channel stats saved
[2026-01-04T15:37:24.841Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2887) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*