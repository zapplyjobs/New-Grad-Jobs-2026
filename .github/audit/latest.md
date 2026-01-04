# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T16:25:57.725Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T16:25:10.037Z] ========================================
[2026-01-04T16:25:10.039Z] Discord Bot Execution Log
[2026-01-04T16:25:10.039Z] Environment: GitHub Actions
[2026-01-04T16:25:10.039Z] Node Version: v20.19.6
[2026-01-04T16:25:10.039Z] ========================================
[2026-01-04T16:25:10.039Z] Environment Variables Check:
[2026-01-04T16:25:10.040Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T16:25:10.040Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T16:25:10.040Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T16:25:10.040Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T16:25:10.040Z] 
Multi-Channel Configuration:
[2026-01-04T16:25:10.040Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T16:25:10.040Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T16:25:10.040Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T16:25:10.040Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T16:25:10.040Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T16:25:10.040Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T16:25:10.041Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T16:25:10.041Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T16:25:10.041Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T16:25:10.041Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T16:25:10.041Z] 
Data Files Check:
[2026-01-04T16:25:10.042Z] .github/data/new_jobs.json: ✅ Exists (10 items, 91981 bytes)
[2026-01-04T16:25:10.046Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 609075 bytes)
[2026-01-04T16:25:10.046Z] 
========================================
[2026-01-04T16:25:10.046Z] Starting Enhanced Discord Bot...
[2026-01-04T16:25:10.046Z] ========================================
[2026-01-04T16:25:10.574Z] [BOT] ✅ Loaded V2 database: 1210 jobs
[2026-01-04T16:25:11.659Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T16:25:11.659Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T16:25:11.659Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T16:25:11.660Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T16:25:11.727Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T16:25:11.816Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T16:25:11.819Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T16:25:11.819Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T16:25:11.819Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T16:25:11.820Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T16:25:11.820Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T16:25:11.824Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-04T16:25:11.825Z] [BOT] 📍 [ROUTING] "Support Engineer (EMEA)" @ supabase
[2026-01-04T16:25:11.825Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T16:25:11.842Z] [BOT ERROR] (node:2744) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T16:25:12.098Z] [BOT] ✅ Created forum post: 🏢 Support Engineer (EMEA) @ supabase in #💻・tech-jobs
[2026-01-04T16:25:12.098Z] [BOT] ✅ Industry: Support Engineer (EMEA) @ supabase
[2026-01-04T16:25:13.601Z] [BOT] 💾 Marked as posted: Support Engineer (EMEA) @ supabase (instance #1)
[2026-01-04T16:25:13.601Z] [BOT] 💾 BEFORE ARCHIVING: 1211 jobs in database
[2026-01-04T16:25:13.602Z] [BOT] ✅ No jobs to archive (all 1211 jobs within 7-day window)
[2026-01-04T16:25:13.613Z] [BOT] 💾 Saved posted_jobs.json: 1211 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:25:16.614Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T16:25:16.615Z] [BOT] 📍 [ROUTING] "Business Development Representative (USA)" @ supabase
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T16:25:16.874Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative (USA) @ supabase in #💲・sales-jobs
[2026-01-04T16:25:16.875Z] [BOT] ✅ Industry: Business Development Representative (USA) @ supabase
[2026-01-04T16:25:18.606Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative (USA) @ supabase in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-04T16:25:20.106Z] [BOT] 💾 Marked as posted: Business Development Representative (USA) @ supabase (instance #1)
💾 BEFORE ARCHIVING: 1212 jobs in database
[2026-01-04T16:25:20.107Z] [BOT] ✅ No jobs to archive (all 1212 jobs within 7-day window)
[2026-01-04T16:25:20.115Z] [BOT] 💾 Saved posted_jobs.json: 1212 active jobs
[2026-01-04T16:25:20.115Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T16:25:23.116Z] [BOT] 📌 Posting 8 jobs to #🤖・ai-jobs
[2026-01-04T16:25:23.116Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer, GenRecs, Personalization" @ spotify
   Category: AI (matched: "machine learning")
[2026-01-04T16:25:23.117Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-04T16:25:23.368Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, GenRecs, Personalization @ spotify in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer, GenRecs, Personalization @ spotify
[2026-01-04T16:25:25.080Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, GenRecs, Personalization @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T16:25:26.580Z] [BOT] 💾 Marked as posted: Machine Learning Engineer, GenRecs, Personalization @ spotify (instance #1)
[2026-01-04T16:25:26.580Z] [BOT] 💾 BEFORE ARCHIVING: 1213 jobs in database
[2026-01-04T16:25:26.581Z] [BOT] ✅ No jobs to archive (all 1213 jobs within 7-day window)
[2026-01-04T16:25:26.589Z] [BOT] 💾 Saved posted_jobs.json: 1213 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:25:26.589Z] [BOT] 📍 [ROUTING] "Production Engineer (PE)" @ nominal
[2026-01-04T16:25:26.589Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T16:25:26.786Z] [BOT] ✅ Created forum post: 🏢 Production Engineer (PE) @ nominal in #🤖・ai-jobs
  ✅ Industry: Production Engineer (PE) @ nominal
[2026-01-04T16:25:28.481Z] [BOT] ✅ Created forum post: 🏢 Production Engineer (PE) @ nominal in #🗽・new-york
[2026-01-04T16:25:28.481Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T16:25:29.982Z] [BOT] 💾 Marked as posted: Production Engineer (PE) @ nominal (instance #1)
[2026-01-04T16:25:29.982Z] [BOT] 💾 BEFORE ARCHIVING: 1214 jobs in database
[2026-01-04T16:25:29.984Z] [BOT] ✅ No jobs to archive (all 1214 jobs within 7-day window)
[2026-01-04T16:25:29.995Z] [BOT] 💾 Saved posted_jobs.json: 1214 active jobs
[2026-01-04T16:25:29.995Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T16:25:29.996Z] [BOT] 📍 [ROUTING] "Production Engineer" @ nominal
[2026-01-04T16:25:29.996Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T16:25:30.262Z] [BOT] ✅ Created forum post: 🏢 Production Engineer @ nominal in #🤖・ai-jobs
[2026-01-04T16:25:30.262Z] [BOT] ✅ Industry: Production Engineer @ nominal
[2026-01-04T16:25:32.317Z] [BOT] ✅ Created forum post: 🏢 Production Engineer @ nominal in #🗽・new-york
[2026-01-04T16:25:32.318Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T16:25:33.819Z] [BOT] 💾 Marked as posted: Production Engineer @ nominal (instance #1)
[2026-01-04T16:25:33.819Z] [BOT] 💾 BEFORE ARCHIVING: 1215 jobs in database
[2026-01-04T16:25:33.820Z] [BOT] ✅ No jobs to archive (all 1215 jobs within 7-day window)
[2026-01-04T16:25:33.829Z] [BOT] 💾 Saved posted_jobs.json: 1215 active jobs
[2026-01-04T16:25:33.829Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T16:25:33.830Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ nominal
[2026-01-04T16:25:33.830Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-04T16:25:34.350Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ nominal in #🤖・ai-jobs
  ✅ Industry: Enterprise Account Executive @ nominal
[2026-01-04T16:25:36.207Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ nominal in #🦢・los-angeles
[2026-01-04T16:25:36.207Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-04T16:25:37.709Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ nominal (instance #1)
[2026-01-04T16:25:37.709Z] [BOT] 💾 BEFORE ARCHIVING: 1216 jobs in database
[2026-01-04T16:25:37.710Z] [BOT] ✅ No jobs to archive (all 1216 jobs within 7-day window)
[2026-01-04T16:25:37.722Z] [BOT] 💾 Saved posted_jobs.json: 1216 active jobs
[2026-01-04T16:25:37.722Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T16:25:37.722Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive" @ nominal
[2026-01-04T16:25:37.723Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T16:25:37.723Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, nonTechMatch (using ai)
[2026-01-04T16:25:38.109Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive @ nominal in #🤖・ai-jobs
[2026-01-04T16:25:38.109Z] [BOT] ✅ Industry: Mid-Market Account Executive @ nominal
[2026-01-04T16:25:40.020Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive @ nominal in #🦢・los-angeles
[2026-01-04T16:25:40.020Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-04T16:25:41.521Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive @ nominal (instance #1)
[2026-01-04T16:25:41.521Z] [BOT] 💾 BEFORE ARCHIVING: 1217 jobs in database
[2026-01-04T16:25:41.522Z] [BOT] ✅ No jobs to archive (all 1217 jobs within 7-day window)
[2026-01-04T16:25:41.530Z] [BOT] 💾 Saved posted_jobs.json: 1217 active jobs
[2026-01-04T16:25:41.530Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T16:25:41.531Z] [BOT] 📍 [ROUTING] "Roboticist In Residence" @ nominal
[2026-01-04T16:25:41.531Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T16:25:41.734Z] [BOT] ✅ Created forum post: 🏢 Roboticist In Residence @ nominal in #🤖・ai-jobs
  ✅ Industry: Roboticist In Residence @ nominal
[2026-01-04T16:25:43.505Z] [BOT] ✅ Created forum post: 🏢 Roboticist In Residence @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-04T16:25:45.005Z] [BOT] 💾 Marked as posted: Roboticist In Residence @ nominal (instance #1)
[2026-01-04T16:25:45.005Z] [BOT] 💾 BEFORE ARCHIVING: 1218 jobs in database
[2026-01-04T16:25:45.006Z] [BOT] ✅ No jobs to archive (all 1218 jobs within 7-day window)
[2026-01-04T16:25:45.014Z] [BOT] 💾 Saved posted_jobs.json: 1218 active jobs
[2026-01-04T16:25:45.014Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T16:25:45.014Z] [BOT] 📍 [ROUTING] "Software Engineer - Mission Dev" @ nominal
[2026-01-04T16:25:45.014Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T16:25:45.216Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Mission Dev @ nominal in #🤖・ai-jobs
[2026-01-04T16:25:45.216Z] [BOT] ✅ Industry: Software Engineer - Mission Dev @ nominal
[2026-01-04T16:25:46.913Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Mission Dev @ nominal in #🦢・los-angeles
[2026-01-04T16:25:46.913Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-04T16:25:48.415Z] [BOT] 💾 Marked as posted: Software Engineer - Mission Dev @ nominal (instance #1)
[2026-01-04T16:25:48.415Z] [BOT] 💾 BEFORE ARCHIVING: 1219 jobs in database
[2026-01-04T16:25:48.417Z] [BOT] ✅ No jobs to archive (all 1219 jobs within 7-day window)
[2026-01-04T16:25:48.426Z] [BOT] 💾 Saved posted_jobs.json: 1219 active jobs
[2026-01-04T16:25:48.426Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T16:25:48.426Z] [BOT] 📍 [ROUTING] "Mission Operations Engineer - USG/DoD" @ nominal
[2026-01-04T16:25:48.426Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T16:25:48.613Z] [BOT] ✅ Created forum post: 🏢 Mission Operations Engineer - USG/DoD @ nominal in #🤖・ai-jobs
[2026-01-04T16:25:48.614Z] [BOT] ✅ Industry: Mission Operations Engineer - USG/DoD @ nominal
[2026-01-04T16:25:50.368Z] [BOT] ✅ Created forum post: 🏢 Mission Operations Engineer - USG/DoD @ nominal in #🦢・los-angeles
[2026-01-04T16:25:50.368Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-04T16:25:51.870Z] [BOT] 💾 Marked as posted: Mission Operations Engineer - USG/DoD @ nominal (instance #1)
[2026-01-04T16:25:51.870Z] [BOT] 💾 BEFORE ARCHIVING: 1220 jobs in database
[2026-01-04T16:25:51.871Z] [BOT] ✅ No jobs to archive (all 1220 jobs within 7-day window)
[2026-01-04T16:25:51.879Z] [BOT] 💾 Saved posted_jobs.json: 1220 active jobs
[2026-01-04T16:25:51.879Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T16:25:54.880Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T16:25:54.881Z] [BOT] ⏭️  Skipping duplicate: JID_3ecc5e05 (posted within 7 days)
[2026-01-04T16:25:54.881Z] [BOT] ⏭️  Skipping duplicate: JID_18c96a34 (posted within 7 days)
[2026-01-04T16:25:54.882Z] [BOT] ⏭️  Skipping duplicate: JID_94cdbd47 (posted within 7 days)
⏭️  Skipping duplicate: JID_d93b8c9d (posted within 7 days)
⏭️  Skipping duplicate: JID_590d3304 (posted within 7 days)
⏭️  Skipping duplicate: JID_a2242605 (posted within 7 days)
⏭️  Skipping duplicate: JID_5e59fbea (posted within 7 days)
⏭️  Skipping duplicate: JID_8a19e16c (posted within 7 days)
⏭️  Skipping duplicate: JID_202cb693 (posted within 7 days)
[2026-01-04T16:25:54.882Z] [BOT] ⏭️  Skipping duplicate: JID_ef12ceb1 (posted within 7 days)
[2026-01-04T16:25:54.884Z] [BOT] ✅ Loaded pending queue: 80 total (60 pending, 20 enriched, 0 posted)
[2026-01-04T16:25:54.887Z] [BOT] ✅ Saved pending queue: 80 total (60 pending, 10 enriched, 10 posted)
[2026-01-04T16:25:54.887Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T16:25:54.935Z] [BOT] 📂 Loaded 2125 existing routing entries
[2026-01-04T16:25:54.993Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T16:25:54.993Z] [BOT] Total entries: 2135
   Timestamp: 2026-01-04T16:25:54.979Z
[2026-01-04T16:25:54.993Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T16:25:54.994Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-04T16:25:54.994Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 6
[2026-01-04T16:25:54.994Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 8 posts
     2. #🦢・los-angeles: 5 posts
     3. #🗽・new-york: 3 posts
     4. #💻・tech-jobs: 1 posts
     5. #💲・sales-jobs: 1 posts
[2026-01-04T16:25:54.994Z] [BOT] [STATS] Channel stats saved
[2026-01-04T16:25:57.007Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2744) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*