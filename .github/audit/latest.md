# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T06:49:17.178Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T06:48:25.149Z] ========================================
[2026-01-14T06:48:25.151Z] Discord Bot Execution Log
[2026-01-14T06:48:25.151Z] Environment: GitHub Actions
[2026-01-14T06:48:25.151Z] Node Version: v20.19.6
[2026-01-14T06:48:25.151Z] ========================================
[2026-01-14T06:48:25.151Z] Environment Variables Check:
[2026-01-14T06:48:25.151Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T06:48:25.151Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T06:48:25.151Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T06:48:25.151Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T06:48:25.151Z] 
Multi-Channel Configuration:
[2026-01-14T06:48:25.152Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T06:48:25.152Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T06:48:25.152Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T06:48:25.152Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T06:48:25.152Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T06:48:25.152Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T06:48:25.152Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T06:48:25.152Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T06:48:25.152Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T06:48:25.152Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T06:48:25.152Z] 
Data Files Check:
[2026-01-14T06:48:25.153Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59170 bytes)
[2026-01-14T06:48:25.158Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 668946 bytes)
[2026-01-14T06:48:25.158Z] 
========================================
[2026-01-14T06:48:25.158Z] Starting Enhanced Discord Bot...
[2026-01-14T06:48:25.158Z] ========================================
[2026-01-14T06:48:25.673Z] [BOT] ✅ Loaded V2 database: 1265 jobs
[2026-01-14T06:48:26.200Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T06:48:26.201Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T06:48:26.201Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T06:48:26.310Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Relations, MCP at anthropic
[2026-01-14T06:48:26.312Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T06:48:26.313Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T06:48:26.313Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T06:48:26.314Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T06:48:26.314Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T06:48:26.317Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-14T06:48:26.318Z] [BOT] 📍 [ROUTING] "Developer Relations, MCP" @ anthropic
[2026-01-14T06:48:26.318Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T06:48:26.335Z] [BOT ERROR] (node:2831) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T06:48:26.628Z] [BOT] ✅ Created forum post: 🏢 Developer Relations, MCP @ anthropic in #🤖・ai-jobs
[2026-01-14T06:48:26.629Z] [BOT] ✅ Industry: Developer Relations, MCP @ anthropic
[2026-01-14T06:48:28.390Z] [BOT] ✅ Created forum post: 🏢 Developer Relations, MCP @ anthropic in #🌉・san-francisco
[2026-01-14T06:48:28.390Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T06:48:29.889Z] [BOT] 💾 Marked as posted: Developer Relations, MCP @ anthropic (instance #1)
[2026-01-14T06:48:29.890Z] [BOT] 💾 BEFORE ARCHIVING: 1266 jobs in database
[2026-01-14T06:48:29.891Z] [BOT] ✅ No jobs to archive (all 1266 jobs within 7-day window)
[2026-01-14T06:48:29.904Z] [BOT] 💾 Saved posted_jobs.json: 1266 active jobs
[2026-01-14T06:48:29.904Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T06:48:29.904Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_2ea541c5
   Category: AI (matched: "artificial intelligence")
[2026-01-14T06:48:29.904Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T06:48:30.248Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_2ea541c5 in #🤖・ai-jobs
[2026-01-14T06:48:30.249Z] [BOT] ✅ Industry: Data Analyst @ ORG_2ea541c5
[2026-01-14T06:48:32.123Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_2ea541c5 in #🌉・san-francisco
[2026-01-14T06:48:32.123Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T06:48:33.624Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_2ea541c5 (instance #1)
[2026-01-14T06:48:33.625Z] [BOT] 💾 BEFORE ARCHIVING: 1267 jobs in database
[2026-01-14T06:48:33.626Z] [BOT] ✅ No jobs to archive (all 1267 jobs within 7-day window)
[2026-01-14T06:48:33.633Z] [BOT] 💾 Saved posted_jobs.json: 1267 active jobs
[2026-01-14T06:48:33.633Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T06:48:33.634Z] [BOT] 📍 [ROUTING] "Data Science Level 2 - Advanced AI - NLP" @ ORG_a6a32dbc
[2026-01-14T06:48:33.634Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T06:48:33.839Z] [BOT] ✅ Created forum post: 🏢 Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc in #🤖・ai-jobs
[2026-01-14T06:48:33.839Z] [BOT] ✅ Industry: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc
[2026-01-14T06:48:35.600Z] [BOT] ✅ Created forum post: 🏢 Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T06:48:37.101Z] [BOT] 💾 Marked as posted: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc (instance #1)
[2026-01-14T06:48:37.101Z] [BOT] 💾 BEFORE ARCHIVING: 1268 jobs in database
[2026-01-14T06:48:37.102Z] [BOT] ✅ No jobs to archive (all 1268 jobs within 7-day window)
[2026-01-14T06:48:37.112Z] [BOT] 💾 Saved posted_jobs.json: 1268 active jobs
[2026-01-14T06:48:37.112Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T06:48:37.113Z] [BOT] 📍 [ROUTING] "Cryptoanalyst Level 2 - CCA allowed" @ ORG_a6a32dbc
[2026-01-14T06:48:37.113Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-14T06:48:37.328Z] [BOT] ✅ Created forum post: 🏢 Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc in #🤖・ai-jobs
[2026-01-14T06:48:37.328Z] [BOT] ✅ Industry: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc
[2026-01-14T06:48:38.978Z] [BOT] ✅ Created forum post: 🏢 Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T06:48:40.478Z] [BOT] 💾 Marked as posted: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc (instance #1)
[2026-01-14T06:48:40.478Z] [BOT] 💾 BEFORE ARCHIVING: 1269 jobs in database
[2026-01-14T06:48:40.479Z] [BOT] ✅ No jobs to archive (all 1269 jobs within 7-day window)
[2026-01-14T06:48:40.488Z] [BOT] 💾 Saved posted_jobs.json: 1269 active jobs
[2026-01-14T06:48:40.488Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T06:48:40.489Z] [BOT] 📍 [ROUTING] "Manager, Sales Operations – Commissions" @ spotify
[2026-01-14T06:48:40.489Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T06:48:40.812Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Operations – Commissions @ spotify in #🤖・ai-jobs
  ✅ Industry: Manager, Sales Operations – Commissions @ spotify
[2026-01-14T06:48:42.460Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Operations – Commissions @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T06:48:43.960Z] [BOT] 💾 Marked as posted: Manager, Sales Operations – Commissions @ spotify (instance #1)
[2026-01-14T06:48:43.960Z] [BOT] 💾 BEFORE ARCHIVING: 1270 jobs in database
[2026-01-14T06:48:43.961Z] [BOT] ✅ No jobs to archive (all 1270 jobs within 7-day window)
[2026-01-14T06:48:43.969Z] [BOT] 💾 Saved posted_jobs.json: 1270 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:48:46.970Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-14T06:48:46.971Z] [BOT] 📍 [ROUTING] "Enablement Operations Data Analyst - NYC" @ ORG_8bd7b9fd
[2026-01-14T06:48:46.971Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T06:48:47.170Z] [BOT] ✅ Created forum post: 🏢 Enablement Operations Data Analyst - NYC @ ORG_8bd7b9fd in #📈・JID_fb739488
  ✅ Industry: Enablement Operations Data Analyst - NYC @ ORG_8bd7b9fd
[2026-01-14T06:48:48.935Z] [BOT] ✅ Created forum post: 🏢 Enablement Operations Data Analyst - NYC @ ORG_8bd7b9fd in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T06:48:50.435Z] [BOT] 💾 Marked as posted: Enablement Operations Data Analyst - NYC @ ORG_8bd7b9fd (instance #1)
[2026-01-14T06:48:50.435Z] [BOT] 💾 BEFORE ARCHIVING: 1271 jobs in database
[2026-01-14T06:48:50.436Z] [BOT] ✅ No jobs to archive (all 1271 jobs within 7-day window)
[2026-01-14T06:48:50.444Z] [BOT] 💾 Saved posted_jobs.json: 1271 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:48:50.445Z] [BOT] 📍 [ROUTING] "Analytics/Dashboarding Analyst - Ada" @ ORG_434be781
[2026-01-14T06:48:50.445Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T06:48:50.713Z] [BOT] ✅ Created forum post: 🏢 Analytics/Dashboarding Analyst - Ada @ ORG_434be781 in #📈・JID_fb739488
  ✅ Industry: Analytics/Dashboarding Analyst - Ada @ ORG_434be781
[2026-01-14T06:48:52.913Z] [BOT] ✅ Created forum post: 🏢 Analytics/Dashboarding Analyst - Ada @ ORG_434be781 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T06:48:54.414Z] [BOT] 💾 Marked as posted: Analytics/Dashboarding Analyst - Ada @ ORG_434be781 (instance #1)
[2026-01-14T06:48:54.414Z] [BOT] 💾 BEFORE ARCHIVING: 1272 jobs in database
[2026-01-14T06:48:54.415Z] [BOT] ✅ No jobs to archive (all 1272 jobs within 7-day window)
[2026-01-14T06:48:54.425Z] [BOT] 💾 Saved posted_jobs.json: 1272 active jobs
[2026-01-14T06:48:54.425Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T06:48:57.426Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-14T06:48:57.427Z] [BOT] 📍 [ROUTING] "Systems Analyst" @ ORG_f6a2986e
   Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T06:48:57.669Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_f6a2986e in #💲・sales-jobs
  ✅ Industry: Systems Analyst @ ORG_f6a2986e
[2026-01-14T06:48:59.364Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_f6a2986e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T06:49:00.865Z] [BOT] 💾 Marked as posted: Systems Analyst @ ORG_f6a2986e (instance #1)
[2026-01-14T06:49:00.865Z] [BOT] 💾 BEFORE ARCHIVING: 1273 jobs in database
[2026-01-14T06:49:00.866Z] [BOT] ✅ No jobs to archive (all 1273 jobs within 7-day window)
[2026-01-14T06:49:00.876Z] [BOT] 💾 Saved posted_jobs.json: 1273 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:49:03.877Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-14T06:49:03.877Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_afd623b1
   Category: TECH (matched: "software")
[2026-01-14T06:49:03.877Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T06:49:04.179Z] [BOT] ✅ Created forum post: 🚀 Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
[2026-01-14T06:49:04.179Z] [BOT] ✅ Industry: Software Engineer @ ORG_afd623b1
[2026-01-14T06:49:05.830Z] [BOT] ✅ Created forum post: 🚀 Software Engineer @ ORG_afd623b1 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-14T06:49:07.331Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_afd623b1 (instance #1)
[2026-01-14T06:49:07.332Z] [BOT] 💾 BEFORE ARCHIVING: 1274 jobs in database
[2026-01-14T06:49:07.333Z] [BOT] ✅ No jobs to archive (all 1274 jobs within 7-day window)
[2026-01-14T06:49:07.343Z] [BOT] 💾 Saved posted_jobs.json: 1274 active jobs
[2026-01-14T06:49:07.343Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T06:49:07.343Z] [BOT] 📍 [ROUTING] "Data Collections Specialist" @ ORG_0aa5052d State University (LSU)
[2026-01-14T06:49:07.343Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T06:49:07.576Z] [BOT] ✅ Created forum post: 🏢 Data Collections Specialist @ ORG_0aa5052d State University (LSU) in #💻・tech-jobs
[2026-01-14T06:49:07.576Z] [BOT] ✅ Industry: Data Collections Specialist @ ORG_0aa5052d State University (LSU)
[2026-01-14T06:49:09.342Z] [BOT] ✅ Created forum post: 🏢 Data Collections Specialist @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
[2026-01-14T06:49:09.342Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T06:49:10.843Z] [BOT] 💾 Marked as posted: Data Collections Specialist @ ORG_0aa5052d State University (LSU) (instance #1)
[2026-01-14T06:49:10.843Z] [BOT] 💾 BEFORE ARCHIVING: 1275 jobs in database
[2026-01-14T06:49:10.844Z] [BOT] ✅ No jobs to archive (all 1275 jobs within 7-day window)
[2026-01-14T06:49:10.854Z] [BOT] 💾 Saved posted_jobs.json: 1275 active jobs
[2026-01-14T06:49:10.854Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T06:49:13.855Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T06:49:13.855Z] [BOT] ⏭️  Skipping duplicate: JID_e9d8a165 (posted within 7 days)
[2026-01-14T06:49:13.856Z] [BOT] ⏭️  Skipping duplicate: JID_3d950a93 (posted within 7 days)
[2026-01-14T06:49:13.856Z] [BOT] ⏭️  Skipping duplicate: JID_6ed77441-computer_aid-JID_2293a33c-analyst_r6732 (posted within 7 days)
[2026-01-14T06:49:13.856Z] [BOT] ⏭️  Skipping duplicate: JID_ee1ee315 (posted within 7 days)
[2026-01-14T06:49:13.856Z] [BOT] ⏭️  Skipping duplicate: JID_a87be6c2-_r175222-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_e6dfcdcd-specialist_r00111435-1 (posted within 7 days)
[2026-01-14T06:49:13.856Z] [BOT] ⏭️  Skipping duplicate: JID_4d0b0565 (posted within 7 days)
⏭️  Skipping duplicate: JID_e093c9c0 (posted within 7 days)
[2026-01-14T06:49:13.856Z] [BOT] ⏭️  Skipping duplicate: JID_7efa0dae (posted within 7 days)
[2026-01-14T06:49:13.857Z] [BOT] ⏭️  Skipping duplicate: JID_be985fce (posted within 7 days)
[2026-01-14T06:49:13.971Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[2026-01-14T06:49:14.148Z] [BOT] ✅ Saved pending queue: 2734 total (2714 pending, 10 enriched, 10 posted)
[2026-01-14T06:49:14.149Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T06:49:14.201Z] [BOT] 📂 Loaded 3385 existing routing entries
[2026-01-14T06:49:14.258Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3395
   Timestamp: 2026-01-14T06:49:14.245Z
[2026-01-14T06:49:14.259Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 20
[2026-01-14T06:49:14.259Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T06:49:14.259Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T06:49:14.259Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-14T06:49:14.259Z] [BOT] 2. #💻・remote-usa: 5 posts
[2026-01-14T06:49:14.259Z] [BOT] 3. #🌉・san-francisco: 2 posts
     4. #🗽・new-york: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2026-01-14T06:49:14.260Z] [BOT] [STATS] Channel stats saved
[2026-01-14T06:49:16.283Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2831) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*