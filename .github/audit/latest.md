# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T22:06:06.017Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T22:05:16.901Z] ========================================
[2025-12-18T22:05:16.903Z] Discord Bot Execution Log
[2025-12-18T22:05:16.903Z] Environment: GitHub Actions
[2025-12-18T22:05:16.903Z] Node Version: v20.19.6
[2025-12-18T22:05:16.903Z] ========================================
[2025-12-18T22:05:16.903Z] Environment Variables Check:
[2025-12-18T22:05:16.903Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T22:05:16.904Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T22:05:16.904Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T22:05:16.904Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T22:05:16.904Z] 
Multi-Channel Configuration:
[2025-12-18T22:05:16.904Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T22:05:16.904Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T22:05:16.904Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T22:05:16.904Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T22:05:16.904Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T22:05:16.904Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T22:05:16.904Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T22:05:16.904Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T22:05:16.905Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T22:05:16.905Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T22:05:16.905Z] 
Data Files Check:
[2025-12-18T22:05:16.905Z] .github/data/new_jobs.json: ✅ Exists (10 items, 24389 bytes)
[2025-12-18T22:05:16.908Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 353520 bytes)
[2025-12-18T22:05:16.908Z] 
========================================
[2025-12-18T22:05:16.908Z] Starting Enhanced Discord Bot...
[2025-12-18T22:05:16.908Z] ========================================
[2025-12-18T22:05:17.424Z] [BOT] ✅ Loaded V2 database: 585 jobs
[2025-12-18T22:05:18.454Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T22:05:18.454Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T22:05:18.455Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T22:05:18.455Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T22:05:18.501Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T22:05:18.553Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 100
[2025-12-18T22:05:18.555Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T22:05:18.555Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T22:05:18.555Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T22:05:18.556Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T22:05:18.556Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T22:05:18.561Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-18T22:05:18.562Z] [BOT] 📍 [ROUTING] "Associate Application Developer - Appian Platform" @ ORG_49005fd1
[2025-12-18T22:05:18.562Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T22:05:18.579Z] [BOT ERROR] (node:3012) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T22:05:18.763Z] [BOT] ✅ Created forum post: 🏢 Associate Application Developer - Appian Platform @ ORG_49005fd1 in #📈・JID_fb739488
[2025-12-18T22:05:18.764Z] [BOT] ✅ Industry: Associate Application Developer - Appian Platform @ ORG_49005fd1
[2025-12-18T22:05:20.500Z] [BOT] ✅ Created forum post: 🏢 Associate Application Developer - Appian Platform @ ORG_49005fd1 in #💻・remote-usa
[2025-12-18T22:05:20.500Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T22:05:22.001Z] [BOT] 💾 Marked as posted: Associate Application Developer - Appian Platform @ ORG_49005fd1 (instance #1)
[2025-12-18T22:05:22.001Z] [BOT] 💾 BEFORE ARCHIVING: 586 jobs in database
[2025-12-18T22:05:22.002Z] [BOT] ✅ No jobs to archive (all 586 jobs within 7-day window)
[2025-12-18T22:05:22.012Z] [BOT] 💾 Saved posted_jobs.json: 586 active jobs
[2025-12-18T22:05:22.012Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:05:25.013Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-18T22:05:25.014Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD" @ ORG_08c9a13c
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:05:25.370Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c in #💻・tech-jobs
[2025-12-18T22:05:25.370Z] [BOT] ✅ Industry: Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c
[2025-12-18T22:05:27.094Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-18T22:05:28.595Z] [BOT] 💾 Marked as posted: Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c (instance #1)
[2025-12-18T22:05:28.596Z] [BOT] 💾 BEFORE ARCHIVING: 587 jobs in database
[2025-12-18T22:05:28.596Z] [BOT] ✅ No jobs to archive (all 587 jobs within 7-day window)
[2025-12-18T22:05:28.602Z] [BOT] 💾 Saved posted_jobs.json: 587 active jobs
[2025-12-18T22:05:28.602Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:05:28.603Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate - Seed-Infra-Inference-US - PhD" @ ORG_08c9a13c
[2025-12-18T22:05:28.603Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:05:29.002Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ORG_08c9a13c in #💻・tech-jobs
[2025-12-18T22:05:29.002Z] [BOT] ✅ Industry: Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ORG_08c9a13c
[2025-12-18T22:05:30.707Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ORG_08c9a13c in #🌧️・seattle
[2025-12-18T22:05:30.707Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-18T22:05:32.209Z] [BOT] 💾 Marked as posted: Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ORG_08c9a13c (instance #1)
[2025-12-18T22:05:32.209Z] [BOT] 💾 BEFORE ARCHIVING: 588 jobs in database
[2025-12-18T22:05:32.209Z] [BOT] ✅ No jobs to archive (all 588 jobs within 7-day window)
[2025-12-18T22:05:32.215Z] [BOT] 💾 Saved posted_jobs.json: 588 active jobs
[2025-12-18T22:05:32.215Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:05:32.216Z] [BOT] 📍 [ROUTING] "Financial Systems Analyst 1" @ ORG_c625ca57 Brisbois
[2025-12-18T22:05:32.216Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:05:32.396Z] [BOT] ✅ Created forum post: 🏢 Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois in #💻・tech-jobs
  ✅ Industry: Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois
[2025-12-18T22:05:34.072Z] [BOT] ✅ Created forum post: 🏢 Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-18T22:05:35.573Z] [BOT] 💾 Marked as posted: Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois (instance #1)
[2025-12-18T22:05:35.573Z] [BOT] 💾 BEFORE ARCHIVING: 589 jobs in database
[2025-12-18T22:05:35.573Z] [BOT] ✅ No jobs to archive (all 589 jobs within 7-day window)
[2025-12-18T22:05:35.579Z] [BOT] 💾 Saved posted_jobs.json: 589 active jobs
[2025-12-18T22:05:35.579Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:05:35.579Z] [BOT] 📍 [ROUTING] "Backend Software Engineer - Supply Chain and Logistics - Usds" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:05:35.836Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer - Supply Chain and Logistics - Usds @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-18T22:05:35.836Z] [BOT] ✅ Industry: Backend Software Engineer - Supply Chain and Logistics - Usds @ ORG_1bb6fcfb
[2025-12-18T22:05:37.605Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer - Supply Chain and Logistics - Usds @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T22:05:39.106Z] [BOT] 💾 Marked as posted: Backend Software Engineer - Supply Chain and Logistics - Usds @ ORG_1bb6fcfb (instance #1)
[2025-12-18T22:05:39.107Z] [BOT] 💾 BEFORE ARCHIVING: 590 jobs in database
[2025-12-18T22:05:39.107Z] [BOT] ✅ No jobs to archive (all 590 jobs within 7-day window)
[2025-12-18T22:05:39.112Z] [BOT] 💾 Saved posted_jobs.json: 590 active jobs
[2025-12-18T22:05:39.112Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:05:39.113Z] [BOT] 📍 [ROUTING] "Graduate Research Associate - Post Bachelors" @ ORG_f7906b79 River National Laboratory
[2025-12-18T22:05:39.113Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:05:39.349Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Associate - Post Bachelors @ ORG_f7906b79 River National Laboratory in #💻・tech-jobs
  ✅ Industry: Graduate Research Associate - Post Bachelors @ ORG_f7906b79 River National Laboratory
[2025-12-18T22:05:41.206Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Associate - Post Bachelors @ ORG_f7906b79 River National Laboratory in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T22:05:42.707Z] [BOT] 💾 Marked as posted: Graduate Research Associate - Post Bachelors @ ORG_f7906b79 River National Laboratory (instance #1)
[2025-12-18T22:05:42.707Z] [BOT] 💾 BEFORE ARCHIVING: 591 jobs in database
[2025-12-18T22:05:42.708Z] [BOT] ✅ No jobs to archive (all 591 jobs within 7-day window)
[2025-12-18T22:05:42.714Z] [BOT] 💾 Saved posted_jobs.json: 591 active jobs
[2025-12-18T22:05:42.714Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:05:42.714Z] [BOT] 📍 [ROUTING] "Software Engineer - Direct To Cell" @ ORG_afd623b1
[2025-12-18T22:05:42.714Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:05:43.016Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Direct To Cell @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Direct To Cell @ ORG_afd623b1
[2025-12-18T22:05:44.756Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Direct To Cell @ ORG_afd623b1 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2025-12-18T22:05:46.258Z] [BOT] 💾 Marked as posted: Software Engineer - Direct To Cell @ ORG_afd623b1 (instance #1)
[2025-12-18T22:05:46.258Z] [BOT] 💾 BEFORE ARCHIVING: 592 jobs in database
[2025-12-18T22:05:46.258Z] [BOT] ✅ No jobs to archive (all 592 jobs within 7-day window)
[2025-12-18T22:05:46.264Z] [BOT] 💾 Saved posted_jobs.json: 592 active jobs
[2025-12-18T22:05:46.264Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:05:49.264Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-18T22:05:49.265Z] [BOT] 📍 [ROUTING] "Graduate Research Engineer" @ ORG_08c9a13c
[2025-12-18T22:05:49.265Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T22:05:49.680Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Engineer @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Research Engineer @ ORG_08c9a13c
[2025-12-18T22:05:51.360Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Engineer @ ORG_08c9a13c in #🌧️・seattle
[2025-12-18T22:05:51.361Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-18T22:05:52.862Z] [BOT] 💾 Marked as posted: Graduate Research Engineer @ ORG_08c9a13c (instance #1)
[2025-12-18T22:05:52.862Z] [BOT] 💾 BEFORE ARCHIVING: 593 jobs in database
[2025-12-18T22:05:52.863Z] [BOT] ✅ No jobs to archive (all 593 jobs within 7-day window)
[2025-12-18T22:05:52.868Z] [BOT] 💾 Saved posted_jobs.json: 593 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T22:05:52.869Z] [BOT] 📍 [ROUTING] "Data Analyst - Supply Chain" @ ORG_b344d80e Home Depot
[2025-12-18T22:05:52.869Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-18T22:05:53.136Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Supply Chain @ ORG_b344d80e Home Depot in #🤖・ai-jobs
[2025-12-18T22:05:53.137Z] [BOT] ✅ Industry: Data Analyst - Supply Chain @ ORG_b344d80e Home Depot
[2025-12-18T22:05:54.827Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Supply Chain @ ORG_b344d80e Home Depot in #💻・remote-usa
[2025-12-18T22:05:54.827Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T22:05:56.328Z] [BOT] 💾 Marked as posted: Data Analyst - Supply Chain @ ORG_b344d80e Home Depot (instance #1)
[2025-12-18T22:05:56.328Z] [BOT] 💾 BEFORE ARCHIVING: 594 jobs in database
[2025-12-18T22:05:56.329Z] [BOT] ✅ No jobs to archive (all 594 jobs within 7-day window)
[2025-12-18T22:05:56.334Z] [BOT] 💾 Saved posted_jobs.json: 594 active jobs
[2025-12-18T22:05:56.335Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:05:56.335Z] [BOT] 📍 [ROUTING] "Research Assistant" @ ORG_64dba1b4
[2025-12-18T22:05:56.335Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T22:05:56.555Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_64dba1b4 in #🤖・ai-jobs
[2025-12-18T22:05:56.555Z] [BOT] ✅ Industry: Research Assistant @ ORG_64dba1b4
[2025-12-18T22:05:58.344Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_64dba1b4 in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-18T22:05:59.845Z] [BOT] 💾 Marked as posted: Research Assistant @ ORG_64dba1b4 (instance #1)
[2025-12-18T22:05:59.846Z] [BOT] 💾 BEFORE ARCHIVING: 595 jobs in database
[2025-12-18T22:05:59.846Z] [BOT] ✅ No jobs to archive (all 595 jobs within 7-day window)
[2025-12-18T22:05:59.851Z] [BOT] 💾 Saved posted_jobs.json: 595 active jobs
[2025-12-18T22:05:59.851Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:06:02.852Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T22:06:02.853Z] [BOT] ⏭️  Skipping duplicate: JID_647cf8f2 (posted within 7 days)
[2025-12-18T22:06:02.853Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_b8c6c876-detail (posted within 7 days)
[2025-12-18T22:06:02.853Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_19a0ff0c-detail (posted within 7 days)
[2025-12-18T22:06:02.853Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_9b1ea507-detail (posted within 7 days)
[2025-12-18T22:06:02.853Z] [BOT] ⏭️  Skipping duplicate: JID_d6d5d720 (posted within 7 days)
⏭️  Skipping duplicate: JID_f2c2e040-chain_req157131 (posted within 7 days)
[2025-12-18T22:06:02.853Z] [BOT] ⏭️  Skipping duplicate: JID_ea76c2ba-assistant_r136132-1 (posted within 7 days)
[2025-12-18T22:06:02.854Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_56b295bd (posted within 7 days)
[2025-12-18T22:06:02.854Z] [BOT] ⏭️  Skipping duplicate: JID_441b424b-cx_1-JID_9a670161 (posted within 7 days)
[2025-12-18T22:06:02.854Z] [BOT] ⏭️  Skipping duplicate: JID_506248f0 (posted within 7 days)
[2025-12-18T22:06:02.856Z] [BOT] ✅ Loaded pending queue: 387 total (367 pending, 20 enriched, 0 posted)
[2025-12-18T22:06:02.862Z] [BOT] ✅ Saved pending queue: 387 total (367 pending, 10 enriched, 10 posted)
[2025-12-18T22:06:02.862Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T22:06:02.903Z] [BOT] 📂 Loaded 566 existing routing entries
[2025-12-18T22:06:02.947Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 576
   Timestamp: 2025-12-18T22:06:02.941Z
📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #💻・remote-usa: 3 posts
     3. #🌧️・seattle: 3 posts
     4. #🤖・ai-jobs: 3 posts
     5. #📈・JID_fb739488: 1 posts
[STATS] Channel stats saved
[2025-12-18T22:06:04.957Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3012) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*