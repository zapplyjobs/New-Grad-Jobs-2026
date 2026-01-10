# Discord Bot Execution Audit
**Timestamp:** 2026-01-10T00:11:44.314Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 15
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-10T00:11:17.379Z] ========================================
[2026-01-10T00:11:17.381Z] Discord Bot Execution Log
[2026-01-10T00:11:17.381Z] Environment: GitHub Actions
[2026-01-10T00:11:17.381Z] Node Version: v20.19.6
[2026-01-10T00:11:17.381Z] ========================================
[2026-01-10T00:11:17.381Z] Environment Variables Check:
[2026-01-10T00:11:17.381Z] DISCORD_TOKEN: ✅ Set
[2026-01-10T00:11:17.382Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-10T00:11:17.382Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-10T00:11:17.382Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-10T00:11:17.382Z] 
Multi-Channel Configuration:
[2026-01-10T00:11:17.382Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-10T00:11:17.382Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-10T00:11:17.382Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-10T00:11:17.382Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-10T00:11:17.382Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-10T00:11:17.383Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-10T00:11:17.383Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-10T00:11:17.383Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-10T00:11:17.383Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-10T00:11:17.383Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-10T00:11:17.383Z] 
Data Files Check:
[2026-01-10T00:11:17.384Z] .github/data/new_jobs.json: ✅ Exists (10 items, 100998 bytes)
[2026-01-10T00:11:17.390Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 769446 bytes)
[2026-01-10T00:11:17.390Z] 
========================================
[2026-01-10T00:11:17.390Z] Starting Enhanced Discord Bot...
[2026-01-10T00:11:17.390Z] ========================================
[2026-01-10T00:11:17.927Z] [BOT] ✅ Loaded V2 database: 1501 jobs
[2026-01-10T00:11:18.622Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-10T00:11:18.622Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-10T00:11:18.623Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-10T00:11:18.634Z] [BOT] ✅ Loaded pending queue: 235 total (215 pending, 20 enriched, 0 posted)
[2026-01-10T00:11:18.634Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-10T00:11:18.635Z] [BOT] ⏭️  Skipping duplicate: JID_3154d390 (posted within 7 days)
[2026-01-10T00:11:18.635Z] [BOT] ⏭️ Skipping already posted: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-10T00:11:18.637Z] [BOT] ⏭️  Skipping duplicate: JID_e4f7b470 (posted within 7 days)
[2026-01-10T00:11:18.637Z] [BOT] ⏭️ Skipping already posted: ROLE_40d95d81 at anthropic
⏭️  Skipping duplicate: JID_44a3ab36-developer_r0068238 (posted within 7 days)
[2026-01-10T00:11:18.637Z] [BOT] ⏭️ Skipping already posted: ROLE_4fc63349 at Huntington Bancshares
[2026-01-10T00:11:18.637Z] [BOT] ⏭️  Skipping duplicate: JID_39398126 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer, Cybersecurity Products at anthropic
⏭️  Skipping duplicate: JID_ce1f556b (posted within 7 days)
⏭️ Skipping already posted: Senior iOS Engineer, Application Stability & Performance at duolingo
⏭️  Skipping duplicate: JID_9a274ef8 (posted within 7 days)
⏭️ Skipping already posted: Channel Development Representative, West (Phoenix)  at verkada
[2026-01-10T00:11:18.638Z] [BOT] ⏭️  Skipping duplicate: JID_e8212de3 (posted within 7 days)
⏭️ Skipping already posted: Senior Sales Engineer - Key Accounts (West) at datadog
[2026-01-10T00:11:18.638Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer, Universes at anthropic
[2026-01-10T00:11:18.638Z] [BOT] ⏭️  Skipping duplicate: JID_89b9b14b (posted within 7 days)
[2026-01-10T00:11:18.638Z] [BOT] ⏭️ Skipping already posted: ROLE_4bbc4a01  at anthropic
⏭️  Skipping duplicate: JID_0f96adef (posted within 7 days)
[2026-01-10T00:11:18.638Z] [BOT] ⏭️ Skipping already posted: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-01-10T00:11:18.638Z] [BOT] ⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
[2026-01-10T00:11:18.638Z] [BOT] ⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
⏭️ Skipping already posted: ROLE_076e9ead at vercel
[2026-01-10T00:11:18.638Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-10T00:11:18.639Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-10T00:11:18.639Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
📬 Found 5 new jobs (15 already posted)...
[2026-01-10T00:11:18.639Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2026-01-10T00:11:18.639Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-01-10T00:11:18.640Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-10T00:11:18.640Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ AbbVie: waukegan, cambridge
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2026-01-10T00:11:18.640Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-10T00:11:18.645Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-10T00:11:18.645Z] [BOT] 📍 [ROUTING] "Consulting Associate - Environmental Engineering - Geology / Scientist" @ ORG_d41a2092
[2026-01-10T00:11:18.646Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-10T00:11:18.650Z] [BOT ERROR] (node:2844) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-10T00:11:18.826Z] [BOT] ✅ Created forum post: 🏢 Consulting Associate - Environmental Engineering - Geology / Scientist @ ORG_d41a2092 in #💻・tech-jobs
[2026-01-10T00:11:18.826Z] [BOT] ✅ Industry: Consulting Associate - Environmental Engineering - Geology / Scientist @ ORG_d41a2092
[2026-01-10T00:11:20.590Z] [BOT] ✅ Created forum post: 🏢 Consulting Associate - Environmental Engineering - Geology / Scientist @ ORG_d41a2092 in #💻・remote-usa
[2026-01-10T00:11:20.590Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-10T00:11:22.091Z] [BOT] 💾 Marked as posted: Consulting Associate - Environmental Engineering - Geology / Scientist @ ORG_d41a2092 (instance #1)
[2026-01-10T00:11:22.092Z] [BOT] 💾 BEFORE ARCHIVING: 1502 jobs in database
[2026-01-10T00:11:22.093Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-10T00:11:22.102Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
✅ Archiving complete: 3 archived, 1499 active
[2026-01-10T00:11:22.113Z] [BOT] 💾 Saved posted_jobs.json: 1499 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T00:11:22.114Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_bbacffd9
[2026-01-10T00:11:22.114Z] [BOT] Category: TECH (matched: "software")
[2026-01-10T00:11:22.114Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-10T00:11:22.392Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #💻・tech-jobs
[2026-01-10T00:11:22.393Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_bbacffd9
[2026-01-10T00:11:24.070Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-10T00:11:25.570Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_bbacffd9 (instance #1)
💾 BEFORE ARCHIVING: 1500 jobs in database
[2026-01-10T00:11:25.572Z] [BOT] ✅ No jobs to archive (all 1500 jobs within 7-day window)
[2026-01-10T00:11:25.582Z] [BOT] 💾 Saved posted_jobs.json: 1500 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T00:11:28.582Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-10T00:11:28.585Z] [BOT] 📍 [ROUTING] "Analyst Geospatial - GIS" @ ORG_0ed94d48
[2026-01-10T00:11:28.585Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-10T00:11:28.868Z] [BOT] ✅ Created forum post: 🏢 Analyst Geospatial - GIS @ ORG_0ed94d48 in #📣・marketing-jobs
  ✅ Industry: Analyst Geospatial - GIS @ ORG_0ed94d48
[2026-01-10T00:11:30.530Z] [BOT] ✅ Created forum post: 🏢 Analyst Geospatial - GIS @ ORG_0ed94d48 in #🌆・chicago
[2026-01-10T00:11:30.530Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-10T00:11:32.031Z] [BOT] 💾 Marked as posted: Analyst Geospatial - GIS @ ORG_0ed94d48 (instance #1)
[2026-01-10T00:11:32.032Z] [BOT] 💾 BEFORE ARCHIVING: 1501 jobs in database
[2026-01-10T00:11:32.033Z] [BOT] ✅ No jobs to archive (all 1501 jobs within 7-day window)
[2026-01-10T00:11:32.046Z] [BOT] 💾 Saved posted_jobs.json: 1501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T00:11:35.048Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-10T00:11:35.049Z] [BOT] 📍 [ROUTING] "Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights" @ ORG_1b9f0910
[2026-01-10T00:11:35.049Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch, nonTechMatch (using ai)
[2026-01-10T00:11:35.266Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 in #🤖・ai-jobs
[2026-01-10T00:11:35.266Z] [BOT] ✅ Industry: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910
[2026-01-10T00:11:36.953Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 in #🚌・boston
[2026-01-10T00:11:36.953Z] [BOT] ✅ Location: 🚌・boston
[2026-01-10T00:11:38.454Z] [BOT] 💾 Marked as posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 (instance #1)
[2026-01-10T00:11:38.455Z] [BOT] 💾 BEFORE ARCHIVING: 1502 jobs in database
[2026-01-10T00:11:38.456Z] [BOT] ✅ No jobs to archive (all 1502 jobs within 7-day window)
[2026-01-10T00:11:38.467Z] [BOT] 💾 Saved posted_jobs.json: 1502 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T00:11:38.468Z] [BOT] 💾 Marked as posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 (instance #1)
[2026-01-10T00:11:38.468Z] [BOT] 💾 BEFORE ARCHIVING: 1503 jobs in database
[2026-01-10T00:11:38.469Z] [BOT] ✅ No jobs to archive (all 1503 jobs within 7-day window)
[2026-01-10T00:11:38.479Z] [BOT] 💾 Saved posted_jobs.json: 1503 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T00:11:41.480Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-10T00:11:41.480Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_8d139cbf-scientist_r00028796-1 (posted within 7 days)
[2026-01-10T00:11:41.481Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671420 (posted within 7 days)
⏭️  Skipping duplicate: JID_fa4b2a4c-_r10228-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_09f269c8 (posted within 7 days)
[2026-01-10T00:11:41.497Z] [BOT] ✅ Loaded pending queue: 235 total (215 pending, 20 enriched, 0 posted)
[2026-01-10T00:11:41.516Z] [BOT] ✅ Saved pending queue: 235 total (215 pending, 16 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
[2026-01-10T00:11:41.516Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-10T00:11:41.576Z] [BOT] 📂 Loaded 2516 existing routing entries
[2026-01-10T00:11:41.633Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-10T00:11:41.633Z] [BOT] Total entries: 2520
   Timestamp: 2026-01-10T00:11:41.622Z
[2026-01-10T00:11:41.633Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c5a28238.jsonl
   Total attempts: 23
[2026-01-10T00:11:41.634Z] [BOT] Successful: 8
   Failed: 0
   Skipped: 15
[2026-01-10T00:11:41.634Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-10T00:11:41.634Z] [BOT] Total posts: 8
   Channels used: 6
   Top channels:
[2026-01-10T00:11:41.634Z] [BOT] 1. #💻・tech-jobs: 2 posts
     2. #💻・remote-usa: 2 posts
     3. #📣・marketing-jobs: 1 posts
     4. #🌆・chicago: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-10T00:11:41.634Z] [BOT] [STATS] Channel stats saved
[2026-01-10T00:11:43.650Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2844) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*