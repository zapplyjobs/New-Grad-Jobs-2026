# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T18:05:59.260Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T18:05:09.757Z] ========================================
[2026-01-04T18:05:09.759Z] Discord Bot Execution Log
[2026-01-04T18:05:09.759Z] Environment: GitHub Actions
[2026-01-04T18:05:09.759Z] Node Version: v20.19.6
[2026-01-04T18:05:09.759Z] ========================================
[2026-01-04T18:05:09.759Z] Environment Variables Check:
[2026-01-04T18:05:09.759Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T18:05:09.759Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T18:05:09.759Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T18:05:09.760Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T18:05:09.760Z] 
Multi-Channel Configuration:
[2026-01-04T18:05:09.760Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T18:05:09.760Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T18:05:09.760Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T18:05:09.760Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T18:05:09.760Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T18:05:09.760Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T18:05:09.760Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T18:05:09.760Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T18:05:09.760Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T18:05:09.760Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T18:05:09.760Z] 
Data Files Check:
[2026-01-04T18:05:09.761Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47800 bytes)
[2026-01-04T18:05:09.766Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 642644 bytes)
[2026-01-04T18:05:09.766Z] 
========================================
[2026-01-04T18:05:09.766Z] Starting Enhanced Discord Bot...
[2026-01-04T18:05:09.766Z] ========================================
[2026-01-04T18:05:10.315Z] [BOT] ✅ Loaded V2 database: 1266 jobs
[2026-01-04T18:05:10.953Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T18:05:10.954Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T18:05:10.954Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T18:05:10.954Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T18:05:11.023Z] [BOT] 🧹 Cleaned up 9 jobs older than 7 days
[2026-01-04T18:05:11.111Z] [BOT] ✅ Export complete: Added 9, Skipped 1, Total 216
[2026-01-04T18:05:11.113Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T18:05:11.113Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T18:05:11.114Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T18:05:11.114Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-04T18:05:11.115Z] [BOT] (2 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T18:05:11.119Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-04T18:05:11.119Z] [BOT] 📍 [ROUTING] "University Graduate Software Engineer - Software Engineering" @ ORG_72fd3ae0
[2026-01-04T18:05:11.119Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T18:05:11.137Z] [BOT ERROR] (node:2374) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T18:05:11.351Z] [BOT] ✅ Created forum post: 🎨 University Graduate Software Engineer - Software Engineering @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: University Graduate Software Engineer - Software Engineering @ ORG_72fd3ae0
[2026-01-04T18:05:13.286Z] [BOT] ✅ Created forum post: 🎨 University Graduate Software Engineer - Software Engineering @ ORG_72fd3ae0 in #🌉・san-francisco
[2026-01-04T18:05:13.286Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T18:05:14.788Z] [BOT] 💾 Marked as posted: University Graduate Software Engineer - Software Engineering @ ORG_72fd3ae0 (instance #1)
[2026-01-04T18:05:14.788Z] [BOT] 💾 BEFORE ARCHIVING: 1267 jobs in database
[2026-01-04T18:05:14.789Z] [BOT] ✅ No jobs to archive (all 1267 jobs within 7-day window)
[2026-01-04T18:05:14.801Z] [BOT] 💾 Saved posted_jobs.json: 1267 active jobs
[2026-01-04T18:05:14.801Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T18:05:14.801Z] [BOT] 📍 [ROUTING] "University Graduate - Machine Learning Engineer" @ ORG_72fd3ae0
[2026-01-04T18:05:14.802Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T18:05:14.802Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T18:05:15.214Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-04T18:05:15.214Z] [BOT] ✅ Industry: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0
[2026-01-04T18:05:17.039Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🌧️・seattle
[2026-01-04T18:05:17.039Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-04T18:05:18.538Z] [BOT] 💾 Marked as posted: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-04T18:05:18.539Z] [BOT] 💾 BEFORE ARCHIVING: 1268 jobs in database
[2026-01-04T18:05:18.539Z] [BOT] ✅ No jobs to archive (all 1268 jobs within 7-day window)
[2026-01-04T18:05:18.548Z] [BOT] 💾 Saved posted_jobs.json: 1268 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T18:05:18.549Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Machine Learning Engineer" @ ORG_72fd3ae0
[2026-01-04T18:05:18.549Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T18:05:19.103Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-04T18:05:19.104Z] [BOT] ✅ Industry: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0
[2026-01-04T18:05:20.750Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🌧️・seattle
[2026-01-04T18:05:20.750Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-04T18:05:22.250Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-04T18:05:22.250Z] [BOT] 💾 BEFORE ARCHIVING: 1269 jobs in database
[2026-01-04T18:05:22.251Z] [BOT] ✅ No jobs to archive (all 1269 jobs within 7-day window)
[2026-01-04T18:05:22.260Z] [BOT] 💾 Saved posted_jobs.json: 1269 active jobs
[2026-01-04T18:05:22.260Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T18:05:22.260Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-04T18:05:22.260Z] [BOT] 💾 BEFORE ARCHIVING: 1270 jobs in database
[2026-01-04T18:05:22.261Z] [BOT] ✅ No jobs to archive (all 1270 jobs within 7-day window)
[2026-01-04T18:05:22.268Z] [BOT] 💾 Saved posted_jobs.json: 1270 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T18:05:22.269Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Software Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-04T18:05:22.269Z] [BOT] 💾 BEFORE ARCHIVING: 1271 jobs in database
[2026-01-04T18:05:22.270Z] [BOT] ✅ No jobs to archive (all 1271 jobs within 7-day window)
[2026-01-04T18:05:22.277Z] [BOT] 💾 Saved posted_jobs.json: 1271 active jobs
[2026-01-04T18:05:22.277Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T18:05:22.277Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist in Code Generation" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T18:05:22.494Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist in Code Generation @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Research Scientist in Code Generation @ ORG_08c9a13c
[2026-01-04T18:05:24.168Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist in Code Generation @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T18:05:25.668Z] [BOT] 💾 Marked as posted: Graduate Research Scientist in Code Generation @ ORG_08c9a13c (instance #1)
[2026-01-04T18:05:25.668Z] [BOT] 💾 BEFORE ARCHIVING: 1272 jobs in database
[2026-01-04T18:05:25.669Z] [BOT] ✅ No jobs to archive (all 1272 jobs within 7-day window)
[2026-01-04T18:05:25.676Z] [BOT] 💾 Saved posted_jobs.json: 1272 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T18:05:28.677Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-04T18:05:28.679Z] [BOT] 📍 [ROUTING] "Implementation Analyst" @ ORG_53b59486 Financial Software
[2026-01-04T18:05:28.679Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-04T18:05:30.597Z] [BOT] ✅ Created forum post: 🏢 Implementation Analyst @ ORG_53b59486 Financial Software  in #💰・finance-jobs
[2026-01-04T18:05:30.597Z] [BOT] ✅ Industry: Implementation Analyst @ ORG_53b59486 Financial Software
[2026-01-04T18:05:32.330Z] [BOT] ✅ Created forum post: 🏢 Implementation Analyst @ ORG_53b59486 Financial Software  in #💻・remote-usa
[2026-01-04T18:05:32.331Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-04T18:05:33.832Z] [BOT] 💾 Marked as posted: Implementation Analyst @ ORG_53b59486 Financial Software  (instance #1)
[2026-01-04T18:05:33.832Z] [BOT] 💾 BEFORE ARCHIVING: 1273 jobs in database
[2026-01-04T18:05:33.833Z] [BOT] ✅ No jobs to archive (all 1273 jobs within 7-day window)
[2026-01-04T18:05:33.844Z] [BOT] 💾 Saved posted_jobs.json: 1273 active jobs
[2026-01-04T18:05:33.844Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T18:05:36.844Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-04T18:05:36.845Z] [BOT] 📍 [ROUTING] "Software Quality Engineer I" @ ORG_88a78b3d
   Category: TECH (matched: "software")
[2026-01-04T18:05:36.845Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T18:05:37.084Z] [BOT] ✅ Created forum post: 🏢 Software Quality Engineer I @ ORG_88a78b3d in #💻・tech-jobs
  ✅ Industry: Software Quality Engineer I @ ORG_88a78b3d
[2026-01-04T18:05:38.776Z] [BOT] ✅ Created forum post: 🏢 Software Quality Engineer I @ ORG_88a78b3d in #🦢・los-angeles
[2026-01-04T18:05:38.777Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-04T18:05:40.277Z] [BOT] 💾 Marked as posted: Software Quality Engineer I @ ORG_88a78b3d (instance #1)
[2026-01-04T18:05:40.277Z] [BOT] 💾 BEFORE ARCHIVING: 1274 jobs in database
[2026-01-04T18:05:40.278Z] [BOT] ✅ No jobs to archive (all 1274 jobs within 7-day window)
[2026-01-04T18:05:40.287Z] [BOT] 💾 Saved posted_jobs.json: 1274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T18:05:43.288Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-04T18:05:43.289Z] [BOT] 📍 [ROUTING] "Master Data Coordinator" @ ORG_5fd2321d
[2026-01-04T18:05:43.289Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T18:05:43.866Z] [BOT] ✅ Created forum post: 🏢 Master Data Coordinator @ ORG_5fd2321d in #📈・JID_fb739488
  ✅ Industry: Master Data Coordinator @ ORG_5fd2321d
[2026-01-04T18:05:45.557Z] [BOT] ✅ Created forum post: 🏢 Master Data Coordinator @ ORG_5fd2321d in #💻・remote-usa
[2026-01-04T18:05:45.557Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-04T18:05:47.057Z] [BOT] 💾 Marked as posted: Master Data Coordinator @ ORG_5fd2321d (instance #1)
[2026-01-04T18:05:47.057Z] [BOT] 💾 BEFORE ARCHIVING: 1275 jobs in database
[2026-01-04T18:05:47.058Z] [BOT] ✅ No jobs to archive (all 1275 jobs within 7-day window)
[2026-01-04T18:05:47.069Z] [BOT] 💾 Saved posted_jobs.json: 1275 active jobs
[2026-01-04T18:05:47.069Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T18:05:50.069Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2026-01-04T18:05:50.069Z] [BOT] 📍 [ROUTING] "Technical Advisor" @ ORG_84877948 Enterprises, LLC
[2026-01-04T18:05:50.070Z] [BOT] Category: SUPPLY-CHAIN (matched: "logistics")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-04T18:05:50.258Z] [BOT] ✅ Created forum post: 🏢 Technical Advisor @ ORG_84877948 Enterprises, LLC in #🏗️・JID_b7c6683f
[2026-01-04T18:05:50.258Z] [BOT] ✅ Industry: Technical Advisor @ ORG_84877948 Enterprises, LLC
[2026-01-04T18:05:52.056Z] [BOT] ✅ Created forum post: 🏢 Technical Advisor @ ORG_84877948 Enterprises, LLC in #💻・remote-usa
[2026-01-04T18:05:52.056Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-04T18:05:53.557Z] [BOT] 💾 Marked as posted: Technical Advisor @ ORG_84877948 Enterprises, LLC (instance #1)
[2026-01-04T18:05:53.557Z] [BOT] 💾 BEFORE ARCHIVING: 1276 jobs in database
[2026-01-04T18:05:53.558Z] [BOT] ✅ No jobs to archive (all 1276 jobs within 7-day window)
[2026-01-04T18:05:53.567Z] [BOT] 💾 Saved posted_jobs.json: 1276 active jobs
[2026-01-04T18:05:53.567Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T18:05:56.568Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-04T18:05:56.569Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_a8dc759f-engineer_r158638 (posted within 7 days)
[2026-01-04T18:05:56.569Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_ced046c2-engineer_r160133 (posted within 7 days)
[2026-01-04T18:05:56.569Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r160134 (posted within 7 days)
[2026-01-04T18:05:56.569Z] [BOT] ⏭️  Skipping duplicate: JID_12411879-2026_r170 (posted within 7 days)
[2026-01-04T18:05:56.569Z] [BOT] ⏭️  Skipping duplicate: JID_839428ba-i_31128083-1 (posted within 7 days)
[2026-01-04T18:05:56.569Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a4f688c9-detail (posted within 7 days)
[2026-01-04T18:05:56.570Z] [BOT] ⏭️  Skipping duplicate: JID_57b1edca (posted within 7 days)
⏭️  Skipping duplicate: JID_4497394c (posted within 7 days)
[2026-01-04T18:05:56.571Z] [BOT] ✅ Loaded pending queue: 53 total (33 pending, 20 enriched, 0 posted)
[2026-01-04T18:05:56.572Z] [BOT] ✅ Saved pending queue: 53 total (33 pending, 12 enriched, 8 posted)
[2026-01-04T18:05:56.572Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T18:05:56.622Z] [BOT] 📂 Loaded 2178 existing routing entries
[2026-01-04T18:05:56.679Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
[2026-01-04T18:05:56.680Z] [BOT] Total entries: 2186
   Timestamp: 2026-01-04T18:05:56.668Z
[2026-01-04T18:05:56.680Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T18:05:56.680Z] [BOT] Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-04T18:05:56.680Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T18:05:56.681Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 9
   Top channels:
     1. #🤖・ai-jobs: 4 posts
     2. #💻・remote-usa: 3 posts
[2026-01-04T18:05:56.681Z] [BOT] 3. #🌉・san-francisco: 2 posts
     4. #🌧️・seattle: 2 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-04T18:05:56.681Z] [BOT] [STATS] Channel stats saved
[2026-01-04T18:05:58.693Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2374) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*