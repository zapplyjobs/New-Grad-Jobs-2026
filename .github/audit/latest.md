# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T23:35:58.003Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T23:35:11.397Z] ========================================
[2025-12-20T23:35:11.399Z] Discord Bot Execution Log
[2025-12-20T23:35:11.399Z] Environment: GitHub Actions
[2025-12-20T23:35:11.400Z] Node Version: v20.19.6
[2025-12-20T23:35:11.400Z] ========================================
[2025-12-20T23:35:11.400Z] Environment Variables Check:
[2025-12-20T23:35:11.400Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T23:35:11.400Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T23:35:11.400Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T23:35:11.400Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T23:35:11.400Z] 
Multi-Channel Configuration:
[2025-12-20T23:35:11.400Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T23:35:11.401Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T23:35:11.401Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T23:35:11.401Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T23:35:11.401Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T23:35:11.401Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T23:35:11.401Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T23:35:11.401Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T23:35:11.401Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T23:35:11.401Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T23:35:11.401Z] 
Data Files Check:
[2025-12-20T23:35:11.402Z] .github/data/new_jobs.json: ✅ Exists (10 items, 30561 bytes)
[2025-12-20T23:35:11.405Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 476668 bytes)
[2025-12-20T23:35:11.405Z] 
========================================
[2025-12-20T23:35:11.405Z] Starting Enhanced Discord Bot...
[2025-12-20T23:35:11.405Z] ========================================
[2025-12-20T23:35:11.931Z] [BOT] ✅ Loaded V2 database: 817 jobs
[2025-12-20T23:35:12.589Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T23:35:12.589Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T23:35:12.590Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T23:35:12.590Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T23:35:12.689Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 88
[2025-12-20T23:35:12.691Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T23:35:12.691Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-20T23:35:12.691Z] [BOT] 📋 After blacklist filter: 9 jobs (1 blacklisted)
[2025-12-20T23:35:12.692Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-20T23:35:12.692Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-20T23:35:12.693Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T23:35:12.698Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-20T23:35:12.698Z] [BOT] 📍 [ROUTING] "Provider Data Management Analyst 1" @ ORG_441f2234
[2025-12-20T23:35:12.698Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:35:12.702Z] [BOT ERROR] (node:3277) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T23:35:12.927Z] [BOT] ✅ Created forum post: 🏢 Provider Data Management Analyst 1 @ ORG_441f2234 in #💻・tech-jobs
[2025-12-20T23:35:12.927Z] [BOT] ✅ Industry: Provider Data Management Analyst 1 @ ORG_441f2234
[2025-12-20T23:35:14.428Z] [BOT] 💾 Marked as posted: Provider Data Management Analyst 1 @ ORG_441f2234 (instance #1)
[2025-12-20T23:35:14.429Z] [BOT] 💾 BEFORE ARCHIVING: 818 jobs in database
[2025-12-20T23:35:14.429Z] [BOT] ✅ No jobs to archive (all 818 jobs within 7-day window)
[2025-12-20T23:35:14.440Z] [BOT] 💾 Saved posted_jobs.json: 818 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:35:14.440Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Java" @ ORG_bdf03daa Fintech Solutions
[2025-12-20T23:35:14.440Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:35:14.899Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions in #💻・tech-jobs
[2025-12-20T23:35:14.899Z] [BOT] ✅ Industry: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions
[2025-12-20T23:35:16.627Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions in #🤠・austin
[2025-12-20T23:35:16.627Z] [BOT] ✅ Location: 🤠・austin
[2025-12-20T23:35:18.127Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions (instance #1)
[2025-12-20T23:35:18.128Z] [BOT] 💾 BEFORE ARCHIVING: 819 jobs in database
[2025-12-20T23:35:18.129Z] [BOT] ✅ No jobs to archive (all 819 jobs within 7-day window)
[2025-12-20T23:35:18.135Z] [BOT] 💾 Saved posted_jobs.json: 819 active jobs
[2025-12-20T23:35:18.135Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T23:35:18.135Z] [BOT] 📍 [ROUTING] "Arabic Language Specialist" @ ORG_0f2833f9
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:35:18.411Z] [BOT] ✅ Created forum post: 🏢 Arabic Language Specialist @ ORG_0f2833f9 in #💻・tech-jobs
[2025-12-20T23:35:18.411Z] [BOT] ✅ Industry: Arabic Language Specialist @ ORG_0f2833f9
[2025-12-20T23:35:19.911Z] [BOT] 💾 Marked as posted: Arabic Language Specialist @ ORG_0f2833f9 (instance #1)
[2025-12-20T23:35:19.912Z] [BOT] 💾 BEFORE ARCHIVING: 820 jobs in database
[2025-12-20T23:35:19.912Z] [BOT] ✅ No jobs to archive (all 820 jobs within 7-day window)
[2025-12-20T23:35:19.919Z] [BOT] 💾 Saved posted_jobs.json: 820 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:35:19.919Z] [BOT] 📍 [ROUTING] "Software Engineer I (Onsite)" @ ORG_75f04b84
[2025-12-20T23:35:19.919Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:35:20.241Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I (Onsite) @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: Software Engineer I (Onsite) @ ORG_75f04b84
[2025-12-20T23:35:23.293Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I (Onsite) @ ORG_75f04b84 in #🦢・los-angeles
[2025-12-20T23:35:23.293Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-20T23:35:24.793Z] [BOT] 💾 Marked as posted: Software Engineer I (Onsite) @ ORG_75f04b84 (instance #1)
[2025-12-20T23:35:24.794Z] [BOT] 💾 BEFORE ARCHIVING: 821 jobs in database
[2025-12-20T23:35:24.794Z] [BOT] ✅ No jobs to archive (all 821 jobs within 7-day window)
[2025-12-20T23:35:24.802Z] [BOT] 💾 Saved posted_jobs.json: 821 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:35:24.803Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_ec7d56a0 Yonder
[2025-12-20T23:35:24.803Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:35:25.055Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_ec7d56a0 Yonder in #💻・tech-jobs
[2025-12-20T23:35:25.055Z] [BOT] ✅ Industry: Software Engineer I @ ORG_ec7d56a0 Yonder
[2025-12-20T23:35:26.774Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_ec7d56a0 Yonder in #🤠・austin
[2025-12-20T23:35:26.774Z] [BOT] ✅ Location: 🤠・austin
[2025-12-20T23:35:28.274Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_ec7d56a0 Yonder (instance #1)
[2025-12-20T23:35:28.275Z] [BOT] 💾 BEFORE ARCHIVING: 822 jobs in database
[2025-12-20T23:35:28.275Z] [BOT] ✅ No jobs to archive (all 822 jobs within 7-day window)
[2025-12-20T23:35:28.282Z] [BOT] 💾 Saved posted_jobs.json: 822 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:35:28.283Z] [BOT] 📍 [ROUTING] "Research Associate - College of Engineering - Electrical and Computer Engineering" @ ORG_15a5b314 Mellon University
[2025-12-20T23:35:28.283Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:35:28.553Z] [BOT] ✅ Created forum post: 🏢 Research Associate - College of Engineering - Electrical and Computer Engineering @ ORG_15a5b314 Mell in #💻・tech-jobs
[2025-12-20T23:35:28.553Z] [BOT] ✅ Industry: Research Associate - College of Engineering - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University
[2025-12-20T23:35:30.257Z] [BOT] ✅ Created forum post: 🏢 Research Associate - College of Engineering - Electrical and Computer Engineering @ ORG_15a5b314 Mell in #💻・remote-usa
[2025-12-20T23:35:30.257Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T23:35:31.757Z] [BOT] 💾 Marked as posted: Research Associate - College of Engineering - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University (instance #1)
[2025-12-20T23:35:31.758Z] [BOT] 💾 BEFORE ARCHIVING: 823 jobs in database
[2025-12-20T23:35:31.758Z] [BOT] ✅ No jobs to archive (all 823 jobs within 7-day window)
[2025-12-20T23:35:31.767Z] [BOT] 💾 Saved posted_jobs.json: 823 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:35:34.768Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-20T23:35:34.768Z] [BOT] 📍 [ROUTING] "Fiber Network Mapping Specialist 3" @ ORG_8d0003a5
[2025-12-20T23:35:34.768Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-20T23:35:35.191Z] [BOT] ✅ Created forum post: 🏢 Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 in #📣・marketing-jobs
[2025-12-20T23:35:35.191Z] [BOT] ✅ Industry: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5
[2025-12-20T23:35:36.949Z] [BOT] ✅ Created forum post: 🏢 Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 in #💻・remote-usa
[2025-12-20T23:35:36.949Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T23:35:38.450Z] [BOT] 💾 Marked as posted: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 (instance #1)
[2025-12-20T23:35:38.450Z] [BOT] 💾 BEFORE ARCHIVING: 824 jobs in database
[2025-12-20T23:35:38.450Z] [BOT] ✅ No jobs to archive (all 824 jobs within 7-day window)
[2025-12-20T23:35:38.458Z] [BOT] 💾 Saved posted_jobs.json: 824 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:35:41.458Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-20T23:35:41.459Z] [BOT] 📍 [ROUTING] "Research Scientist New College Grad - ML Systems" @ ORG_0890f456
[2025-12-20T23:35:41.459Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T23:35:41.933Z] [BOT] ✅ Created forum post: 🏢 Research Scientist New College Grad - ML Systems @ ORG_0890f456 in #🤖・ai-jobs
[2025-12-20T23:35:41.933Z] [BOT] ✅ Industry: Research Scientist New College Grad - ML Systems @ ORG_0890f456
[2025-12-20T23:35:43.681Z] [BOT] ✅ Created forum post: 🏢 Research Scientist New College Grad - ML Systems @ ORG_0890f456 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T23:35:45.181Z] [BOT] 💾 Marked as posted: Research Scientist New College Grad - ML Systems @ ORG_0890f456 (instance #1)
[2025-12-20T23:35:45.182Z] [BOT] 💾 BEFORE ARCHIVING: 825 jobs in database
[2025-12-20T23:35:45.182Z] [BOT] ✅ No jobs to archive (all 825 jobs within 7-day window)
[2025-12-20T23:35:45.190Z] [BOT] 💾 Saved posted_jobs.json: 825 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:35:48.192Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-20T23:35:48.192Z] [BOT] 📍 [ROUTING] "Enterprise Data Analyst" @ ORG_19382d21 Bank
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-20T23:35:48.621Z] [BOT] ✅ Created forum post: 🏢 Enterprise Data Analyst @ ORG_19382d21 Bank in #📈・JID_fb739488
  ✅ Industry: Enterprise Data Analyst @ ORG_19382d21 Bank
[2025-12-20T23:35:50.307Z] [BOT] ✅ Created forum post: 🏢 Enterprise Data Analyst @ ORG_19382d21 Bank in #💻・remote-usa
[2025-12-20T23:35:50.307Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T23:35:51.808Z] [BOT] 💾 Marked as posted: Enterprise Data Analyst @ ORG_19382d21 Bank (instance #1)
[2025-12-20T23:35:51.808Z] [BOT] 💾 BEFORE ARCHIVING: 826 jobs in database
[2025-12-20T23:35:51.809Z] [BOT] ✅ No jobs to archive (all 826 jobs within 7-day window)
[2025-12-20T23:35:51.817Z] [BOT] 💾 Saved posted_jobs.json: 826 active jobs
[2025-12-20T23:35:51.817Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T23:35:54.818Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-20T23:35:54.819Z] [BOT] ⏭️  Skipping duplicate: JID_6f58f2a4-centene_external-JID_a9fba327-i_1623950 (posted within 7 days)
[2025-12-20T23:35:54.819Z] [BOT] ⏭️  Skipping duplicate: JID_61d16690-_jr104034 (posted within 7 days)
[2025-12-20T23:35:54.819Z] [BOT] ⏭️  Skipping duplicate: JID_1d439da3 (posted within 7 days)
[2025-12-20T23:35:54.819Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_1a7d0ad5-_01813181 (posted within 7 days)
[2025-12-20T23:35:54.819Z] [BOT] ⏭️  Skipping duplicate: JID_76a0c247-i_253496 (posted within 7 days)
[2025-12-20T23:35:54.819Z] [BOT] ⏭️  Skipping duplicate: JID_c7109edb-iii_r0014034 (posted within 7 days)
[2025-12-20T23:35:54.819Z] [BOT] ⏭️  Skipping duplicate: JID_c78ce377-2026_jr2010161 (posted within 7 days)
[2025-12-20T23:35:54.819Z] [BOT] ⏭️  Skipping duplicate: JID_6a951444 (posted within 7 days)
[2025-12-20T23:35:54.820Z] [BOT] ⏭️  Skipping duplicate: JID_0b882a9a-engineering_2023997 (posted within 7 days)
[2025-12-20T23:35:54.821Z] [BOT] ✅ Loaded pending queue: 124 total (104 pending, 20 enriched, 0 posted)
[2025-12-20T23:35:54.824Z] [BOT] ✅ Saved pending queue: 124 total (104 pending, 11 enriched, 9 posted)
[2025-12-20T23:35:54.824Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T23:35:54.866Z] [BOT] 📂 Loaded 881 existing routing entries
[2025-12-20T23:35:54.915Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 890
   Timestamp: 2025-12-20T23:35:54.909Z
[2025-12-20T23:35:54.916Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
[2025-12-20T23:35:54.916Z] [BOT] Total attempts: 17
[2025-12-20T23:35:54.916Z] [BOT] Successful: 16
   Failed: 0
[2025-12-20T23:35:54.916Z] [BOT] Skipped: 1
[2025-12-20T23:35:54.916Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 16
[2025-12-20T23:35:54.917Z] [BOT] Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #💻・remote-usa: 3 posts
[2025-12-20T23:35:54.917Z] [BOT] 3. #🤠・austin: 2 posts
     4. #🦢・los-angeles: 1 posts
     5. #📣・marketing-jobs: 1 posts
[2025-12-20T23:35:54.919Z] [BOT] [STATS] Channel stats saved
[2025-12-20T23:35:56.932Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3277) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*