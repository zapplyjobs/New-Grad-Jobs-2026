# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T03:47:00.894Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T03:46:12.334Z] ========================================
[2025-12-16T03:46:12.336Z] Discord Bot Execution Log
[2025-12-16T03:46:12.336Z] Environment: GitHub Actions
[2025-12-16T03:46:12.336Z] Node Version: v20.19.6
[2025-12-16T03:46:12.336Z] ========================================
[2025-12-16T03:46:12.336Z] Environment Variables Check:
[2025-12-16T03:46:12.336Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T03:46:12.336Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T03:46:12.336Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T03:46:12.336Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T03:46:12.337Z] 
Multi-Channel Configuration:
[2025-12-16T03:46:12.337Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T03:46:12.337Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T03:46:12.337Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T03:46:12.337Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T03:46:12.337Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T03:46:12.337Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T03:46:12.337Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T03:46:12.337Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T03:46:12.337Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T03:46:12.337Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T03:46:12.337Z] 
Data Files Check:
[2025-12-16T03:46:12.338Z] .github/data/new_jobs.json: ✅ Exists (10 items, 52790 bytes)
[2025-12-16T03:46:12.339Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 129920 bytes)
[2025-12-16T03:46:12.339Z] 
========================================
[2025-12-16T03:46:12.339Z] Starting Enhanced Discord Bot...
[2025-12-16T03:46:12.339Z] ========================================
[2025-12-16T03:46:12.784Z] [BOT] ✅ Loaded V2 database: 205 jobs
[2025-12-16T03:46:13.753Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T03:46:13.753Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T03:46:13.754Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T03:46:13.757Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T03:46:13.816Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T03:46:13.885Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T03:46:13.886Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T03:46:13.887Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T03:46:13.887Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T03:46:13.887Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T03:46:13.888Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T03:46:13.891Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T03:46:13.892Z] [BOT] 📍 [ROUTING] "Meter Data Analyst 1" @ ORG_48c95877 Energy
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-16T03:46:13.892Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T03:46:13.896Z] [BOT ERROR] (node:2873) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T03:46:14.090Z] [BOT] ✅ Created forum post: 🏢 Meter Data Analyst 1 @ ORG_48c95877 Energy in #📈・JID_fb739488
[2025-12-16T03:46:14.090Z] [BOT] ✅ Industry: Meter Data Analyst 1 @ ORG_48c95877 Energy
[2025-12-16T03:46:16.219Z] [BOT] ✅ Created forum post: 🏢 Meter Data Analyst 1 @ ORG_48c95877 Energy in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T03:46:17.720Z] [BOT] 💾 Marked as posted: Meter Data Analyst 1 @ ORG_48c95877 Energy (instance #1)
[2025-12-16T03:46:17.721Z] [BOT] 💾 BEFORE ARCHIVING: 206 jobs in database
[2025-12-16T03:46:17.721Z] [BOT] ✅ No jobs to archive (all 206 jobs within 7-day window)
[2025-12-16T03:46:17.726Z] [BOT] 💾 Saved posted_jobs.json: 206 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T03:46:20.727Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2025-12-16T03:46:20.727Z] [BOT] 📍 [ROUTING] "Software Engineer 3 - Multiple Teams" @ ORG_ce770667
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T03:46:21.245Z] [BOT] ✅ Created forum post: 🟢 Software Engineer 3 - Multiple Teams @ ORG_ce770667 in #🤖・ai-jobs
[2025-12-16T03:46:21.245Z] [BOT] ✅ Industry: Software Engineer 3 - Multiple Teams @ ORG_ce770667
[2025-12-16T03:46:22.940Z] [BOT] ✅ Created forum post: 🟢 Software Engineer 3 - Multiple Teams @ ORG_ce770667 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T03:46:24.440Z] [BOT] 💾 Marked as posted: Software Engineer 3 - Multiple Teams @ ORG_ce770667 (instance #1)
💾 BEFORE ARCHIVING: 207 jobs in database
[2025-12-16T03:46:24.440Z] [BOT] ✅ No jobs to archive (all 207 jobs within 7-day window)
[2025-12-16T03:46:24.443Z] [BOT] 💾 Saved posted_jobs.json: 207 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T03:46:24.444Z] [BOT] 📍 [ROUTING] "GenAI Contact Center as a Service Application Developer" @ ORG_d51736fa
   Category: AI (matched: "AI/ML")
[2025-12-16T03:46:24.444Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T03:46:24.636Z] [BOT] ✅ Created forum post: 🏢 GenAI Contact Center as a Service Application Developer @ ORG_d51736fa in #🤖・ai-jobs
[2025-12-16T03:46:24.636Z] [BOT] ✅ Industry: GenAI Contact Center as a Service Application Developer @ ORG_d51736fa
[2025-12-16T03:46:26.416Z] [BOT] ✅ Created forum post: 🏢 GenAI Contact Center as a Service Application Developer @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T03:46:27.916Z] [BOT] 💾 Marked as posted: GenAI Contact Center as a Service Application Developer @ ORG_d51736fa (instance #1)
[2025-12-16T03:46:27.916Z] [BOT] 💾 BEFORE ARCHIVING: 208 jobs in database
[2025-12-16T03:46:27.916Z] [BOT] ✅ No jobs to archive (all 208 jobs within 7-day window)
[2025-12-16T03:46:27.919Z] [BOT] 💾 Saved posted_jobs.json: 208 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T03:46:27.919Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_44ebd2cb
   Category: AI (matched: "machine learning")
[2025-12-16T03:46:27.920Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T03:46:28.290Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_44ebd2cb in #🤖・ai-jobs
[2025-12-16T03:46:28.290Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_44ebd2cb
[2025-12-16T03:46:30.013Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_44ebd2cb in #🌉・san-francisco
[2025-12-16T03:46:30.013Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T03:46:31.512Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_44ebd2cb (instance #1)
[2025-12-16T03:46:31.513Z] [BOT] 💾 BEFORE ARCHIVING: 209 jobs in database
[2025-12-16T03:46:31.513Z] [BOT] ✅ No jobs to archive (all 209 jobs within 7-day window)
[2025-12-16T03:46:31.516Z] [BOT] 💾 Saved posted_jobs.json: 209 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T03:46:31.516Z] [BOT] 📍 [ROUTING] "AI Product Engineer – New Grad" @ ORG_a528a4d5
   Category: AI (matched: "AI/ML")
[2025-12-16T03:46:31.517Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T03:46:31.837Z] [BOT] ✅ Created forum post: 🏢 AI Product Engineer – New Grad @ ORG_a528a4d5 in #🤖・ai-jobs
  ✅ Industry: AI Product Engineer – New Grad @ ORG_a528a4d5
[2025-12-16T03:46:33.554Z] [BOT] ✅ Created forum post: 🏢 AI Product Engineer – New Grad @ ORG_a528a4d5 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T03:46:35.054Z] [BOT] 💾 Marked as posted: AI Product Engineer – New Grad @ ORG_a528a4d5 (instance #1)
[2025-12-16T03:46:35.054Z] [BOT] 💾 BEFORE ARCHIVING: 210 jobs in database
✅ No jobs to archive (all 210 jobs within 7-day window)
[2025-12-16T03:46:35.057Z] [BOT] 💾 Saved posted_jobs.json: 210 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T03:46:35.058Z] [BOT] 📍 [ROUTING] "Research Data Coordinator-Cardiovascular Research" @ ORG_efeccf10 Israel Lahey Health
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T03:46:35.058Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T03:46:35.420Z] [BOT] ✅ Created forum post: 🏢 Research Data Coordinator-Cardiovascular Research @ ORG_efeccf10 Israel Lahey Health in #🤖・ai-jobs
  ✅ Industry: Research Data Coordinator-Cardiovascular Research @ ORG_efeccf10 Israel Lahey Health
[2025-12-16T03:46:37.160Z] [BOT] ✅ Created forum post: 🏢 Research Data Coordinator-Cardiovascular Research @ ORG_efeccf10 Israel Lahey Health in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-16T03:46:38.660Z] [BOT] 💾 Marked as posted: Research Data Coordinator-Cardiovascular Research @ ORG_efeccf10 Israel Lahey Health (instance #1)
💾 BEFORE ARCHIVING: 211 jobs in database
[2025-12-16T03:46:38.660Z] [BOT] ✅ No jobs to archive (all 211 jobs within 7-day window)
[2025-12-16T03:46:38.663Z] [BOT] 💾 Saved posted_jobs.json: 211 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T03:46:41.663Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-16T03:46:41.663Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Elixir" @ ORG_3cbc87c7 Anomaly
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T03:46:41.952Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Elixir @ ORG_3cbc87c7 Anomaly in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Elixir @ ORG_3cbc87c7 Anomaly
[2025-12-16T03:46:43.759Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Elixir @ ORG_3cbc87c7 Anomaly in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-16T03:46:45.260Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Elixir @ ORG_3cbc87c7 Anomaly (instance #1)
💾 BEFORE ARCHIVING: 212 jobs in database
✅ No jobs to archive (all 212 jobs within 7-day window)
[2025-12-16T03:46:45.263Z] [BOT] 💾 Saved posted_jobs.json: 212 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T03:46:45.263Z] [BOT] 📍 [ROUTING] "Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD" @ ORG_988ceb7c Pharmaceuticals
   Category: TECH (matched: "data")
[2025-12-16T03:46:45.263Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T03:46:46.365Z] [BOT] ✅ Created forum post: 🏢 Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuti in #💻・tech-jobs
  ✅ Industry: Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuticals
[2025-12-16T03:46:48.086Z] [BOT] ✅ Created forum post: 🏢 Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuti in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T03:46:49.587Z] [BOT] 💾 Marked as posted: Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuticals (instance #1)
[2025-12-16T03:46:49.587Z] [BOT] 💾 BEFORE ARCHIVING: 213 jobs in database
[2025-12-16T03:46:49.588Z] [BOT] ✅ No jobs to archive (all 213 jobs within 7-day window)
[2025-12-16T03:46:49.591Z] [BOT] 💾 Saved posted_jobs.json: 213 active jobs
[2025-12-16T03:46:49.591Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T03:46:49.592Z] [BOT] 📍 [ROUTING] "Mathematician" @ ORG_dbcd5e7b & Wonder
[2025-12-16T03:46:49.592Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T03:46:49.860Z] [BOT] ✅ Created forum post: 🏢 Mathematician @ ORG_dbcd5e7b & Wonder in #💻・tech-jobs
  ✅ Industry: Mathematician @ ORG_dbcd5e7b & Wonder
[2025-12-16T03:46:51.606Z] [BOT] ✅ Created forum post: 🏢 Mathematician @ ORG_dbcd5e7b & Wonder in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T03:46:53.108Z] [BOT] 💾 Marked as posted: Mathematician @ ORG_dbcd5e7b & Wonder (instance #1)
[2025-12-16T03:46:53.108Z] [BOT] 💾 BEFORE ARCHIVING: 214 jobs in database
[2025-12-16T03:46:53.109Z] [BOT] ✅ No jobs to archive (all 214 jobs within 7-day window)
[2025-12-16T03:46:53.112Z] [BOT] 💾 Saved posted_jobs.json: 214 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T03:46:53.112Z] [BOT] 📍 [ROUTING] "Application Support Engineer" @ ORG_6491c1f5
[2025-12-16T03:46:53.112Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T03:46:53.306Z] [BOT] ✅ Created forum post: 🏢 Application Support Engineer @ ORG_6491c1f5 in #💻・tech-jobs
  ✅ Industry: Application Support Engineer @ ORG_6491c1f5
[2025-12-16T03:46:54.807Z] [BOT] 💾 Marked as posted: Application Support Engineer @ ORG_6491c1f5 (instance #1)
[2025-12-16T03:46:54.808Z] [BOT] 💾 BEFORE ARCHIVING: 215 jobs in database
✅ No jobs to archive (all 215 jobs within 7-day window)
[2025-12-16T03:46:54.810Z] [BOT] 💾 Saved posted_jobs.json: 215 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T03:46:57.811Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T03:46:57.812Z] [BOT] ⏭️  Skipping duplicate: JID_dbb558cc-i_jr-9238 (posted within 7 days)
[2025-12-16T03:46:57.812Z] [BOT] ⏭️  Skipping duplicate: JID_6bb08f4f-CH_3c03b352 (posted within 7 days)
[2025-12-16T03:46:57.812Z] [BOT] ⏭️  Skipping duplicate: JID_498dbc85 (posted within 7 days)
⏭️  Skipping duplicate: JID_d089d358-_r43767 (posted within 7 days)
[2025-12-16T03:46:57.812Z] [BOT] ⏭️  Skipping duplicate: JID_e824c1e0-mathematician_r320859 (posted within 7 days)
[2025-12-16T03:46:57.812Z] [BOT] ⏭️  Skipping duplicate: JID_b8d5891a-developer_r-00170128 (posted within 7 days)
[2025-12-16T03:46:57.812Z] [BOT] ⏭️  Skipping duplicate: JID_b0bb2e8b (posted within 7 days)
⏭️  Skipping duplicate: JID_78990e76 (posted within 7 days)
[2025-12-16T03:46:57.812Z] [BOT] ⏭️  Skipping duplicate: JID_75385a15 (posted within 7 days)
⏭️  Skipping duplicate: JID_7b25577d-lab_jr87230 (posted within 7 days)
[2025-12-16T03:46:57.816Z] [BOT] ✅ Loaded pending queue: 672 total (652 pending, 20 enriched, 0 posted)
[2025-12-16T03:46:57.826Z] [BOT] ✅ Saved pending queue: 672 total (652 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2025-12-16T03:46:57.826Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-16T03:46:57.864Z] [BOT] 📂 Loaded 198 existing routing entries
[2025-12-16T03:46:57.900Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 208
   Timestamp: 2025-12-16T03:46:57.899Z
[2025-12-16T03:46:57.901Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T03:46:57.901Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2025-12-16T03:46:59.910Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2873) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*