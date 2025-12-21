# Discord Bot Execution Audit
**Timestamp:** 2025-12-21T20:04:42.914Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-21T20:04:02.019Z] ========================================
[2025-12-21T20:04:02.021Z] Discord Bot Execution Log
[2025-12-21T20:04:02.021Z] Environment: GitHub Actions
[2025-12-21T20:04:02.021Z] Node Version: v20.19.6
[2025-12-21T20:04:02.021Z] ========================================
[2025-12-21T20:04:02.021Z] Environment Variables Check:
[2025-12-21T20:04:02.021Z] DISCORD_TOKEN: ✅ Set
[2025-12-21T20:04:02.021Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-21T20:04:02.021Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-21T20:04:02.021Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-21T20:04:02.021Z] 
Multi-Channel Configuration:
[2025-12-21T20:04:02.021Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-21T20:04:02.021Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-21T20:04:02.021Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-21T20:04:02.021Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-21T20:04:02.021Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-21T20:04:02.021Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-21T20:04:02.021Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-21T20:04:02.022Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-21T20:04:02.022Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-21T20:04:02.022Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-21T20:04:02.022Z] 
Data Files Check:
[2025-12-21T20:04:02.022Z] .github/data/new_jobs.json: ✅ Exists (10 items, 63363 bytes)
[2025-12-21T20:04:02.026Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 514233 bytes)
[2025-12-21T20:04:02.026Z] 
========================================
[2025-12-21T20:04:02.026Z] Starting Enhanced Discord Bot...
[2025-12-21T20:04:02.026Z] ========================================
[2025-12-21T20:04:02.486Z] [BOT] ✅ Loaded V2 database: 879 jobs
[2025-12-21T20:04:03.216Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-21T20:04:03.216Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-21T20:04:03.216Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-21T20:04:03.217Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-21T20:04:03.272Z] [BOT] 🧹 Cleaned up 4 jobs older than 7 days
[2025-12-21T20:04:03.331Z] [BOT] ✅ Export complete: Added 4, Skipped 6, Total 161
[2025-12-21T20:04:03.334Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-21T20:04:03.334Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-21T20:04:03.334Z] [BOT] 📋 After blacklist filter: 9 jobs (1 blacklisted)
[2025-12-21T20:04:03.334Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-21T20:04:03.335Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2025-12-21T20:04:03.335Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2025-12-21T20:04:03.335Z] [BOT] - Software Engineer 1 @ Intuit: san diego, nyc
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-21T20:04:03.338Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-21T20:04:03.339Z] [BOT] 📍 [ROUTING] "Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles" @ ORG_0890f456
[2025-12-21T20:04:03.339Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-21T20:04:03.343Z] [BOT ERROR] (node:2712) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-21T20:04:03.508Z] [BOT] ✅ Created forum post: 🏢 Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles @ ORG_0890f456
[2025-12-21T20:04:05.276Z] [BOT] ✅ Created forum post: 🏢 Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles @ ORG_0890f456 in #🌉・san-francisco
[2025-12-21T20:04:05.276Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-21T20:04:06.776Z] [BOT] 💾 Marked as posted: Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles @ ORG_0890f456 (instance #1)
💾 BEFORE ARCHIVING: 880 jobs in database
[2025-12-21T20:04:06.777Z] [BOT] ✅ No jobs to archive (all 880 jobs within 7-day window)
[2025-12-21T20:04:06.786Z] [BOT] 💾 Saved posted_jobs.json: 880 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:04:06.787Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2025-12-21T20:04:06.787Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-21T20:04:06.976Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🤖・ai-jobs
[2025-12-21T20:04:06.976Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-21T20:04:08.686Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-21T20:04:10.187Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-21T20:04:10.187Z] [BOT] 💾 BEFORE ARCHIVING: 881 jobs in database
[2025-12-21T20:04:10.188Z] [BOT] ✅ No jobs to archive (all 881 jobs within 7-day window)
[2025-12-21T20:04:10.194Z] [BOT] 💾 Saved posted_jobs.json: 881 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:04:10.194Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-21T20:04:10.194Z] [BOT] 💾 BEFORE ARCHIVING: 882 jobs in database
[2025-12-21T20:04:10.195Z] [BOT] ✅ No jobs to archive (all 882 jobs within 7-day window)
[2025-12-21T20:04:10.200Z] [BOT] 💾 Saved posted_jobs.json: 882 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:04:13.201Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-21T20:04:13.202Z] [BOT] 📍 [ROUTING] "Software Engineering Graduate" @ ORG_a5257743 Packard Enterprise
   Category: TECH (matched: "software")
[2025-12-21T20:04:13.202Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:04:13.517Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Graduate @ ORG_a5257743 Packard Enterprise in #💻・tech-jobs
  ✅ Industry: Software Engineering Graduate @ ORG_a5257743 Packard Enterprise
[2025-12-21T20:04:15.337Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Graduate @ ORG_a5257743 Packard Enterprise in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T20:04:16.838Z] [BOT] 💾 Marked as posted: Software Engineering Graduate @ ORG_a5257743 Packard Enterprise (instance #1)
[2025-12-21T20:04:16.838Z] [BOT] 💾 BEFORE ARCHIVING: 883 jobs in database
[2025-12-21T20:04:16.839Z] [BOT] ✅ No jobs to archive (all 883 jobs within 7-day window)
[2025-12-21T20:04:16.845Z] [BOT] 💾 Saved posted_jobs.json: 883 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:04:16.846Z] [BOT] 📍 [ROUTING] "Senior Program Analyst - Data Management Program" @ ORG_0baaf6f2 Express
[2025-12-21T20:04:16.846Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:04:17.029Z] [BOT] ✅ Created forum post: 🏢 Senior Program Analyst - Data Management Program @ ORG_0baaf6f2 Express in #💻・tech-jobs
[2025-12-21T20:04:17.029Z] [BOT] ✅ Industry: Senior Program Analyst - Data Management Program @ ORG_0baaf6f2 Express
[2025-12-21T20:04:18.769Z] [BOT] ✅ Created forum post: 🏢 Senior Program Analyst - Data Management Program @ ORG_0baaf6f2 Express in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T20:04:20.270Z] [BOT] 💾 Marked as posted: Senior Program Analyst - Data Management Program @ ORG_0baaf6f2 Express (instance #1)
[2025-12-21T20:04:20.270Z] [BOT] 💾 BEFORE ARCHIVING: 884 jobs in database
[2025-12-21T20:04:20.271Z] [BOT] ✅ No jobs to archive (all 884 jobs within 7-day window)
[2025-12-21T20:04:20.279Z] [BOT] 💾 Saved posted_jobs.json: 884 active jobs
[2025-12-21T20:04:20.279Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T20:04:20.279Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_bfcb8951
[2025-12-21T20:04:20.279Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:04:20.476Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bfcb8951 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_bfcb8951
[2025-12-21T20:04:22.275Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bfcb8951 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-21T20:04:23.776Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_bfcb8951 (instance #1)
💾 BEFORE ARCHIVING: 885 jobs in database
[2025-12-21T20:04:23.777Z] [BOT] ✅ No jobs to archive (all 885 jobs within 7-day window)
[2025-12-21T20:04:23.785Z] [BOT] 💾 Saved posted_jobs.json: 885 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:04:26.785Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-21T20:04:26.786Z] [BOT] 📍 [ROUTING] "Technology Operations Specialist 1" @ ORG_d52a1c22 Financial
   Category: DATA-SCIENCE (matched: "analytics")
[2025-12-21T20:04:26.786Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-21T20:04:27.132Z] [BOT] ✅ Created forum post: 🏢 Technology Operations Specialist 1 @ ORG_d52a1c22 Financial in #📈・JID_fb739488
  ✅ Industry: Technology Operations Specialist 1 @ ORG_d52a1c22 Financial
[2025-12-21T20:04:28.839Z] [BOT] ✅ Created forum post: 🏢 Technology Operations Specialist 1 @ ORG_d52a1c22 Financial in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T20:04:30.340Z] [BOT] 💾 Marked as posted: Technology Operations Specialist 1 @ ORG_d52a1c22 Financial (instance #1)
[2025-12-21T20:04:30.340Z] [BOT] 💾 BEFORE ARCHIVING: 886 jobs in database
[2025-12-21T20:04:30.341Z] [BOT] ✅ No jobs to archive (all 886 jobs within 7-day window)
[2025-12-21T20:04:30.348Z] [BOT] 💾 Saved posted_jobs.json: 886 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:04:30.348Z] [BOT] 📍 [ROUTING] "Associate Data Engineer" @ ORG_e34691a8 Health
[2025-12-21T20:04:30.349Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T20:04:30.526Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer @ ORG_e34691a8 Health in #📈・JID_fb739488
  ✅ Industry: Associate Data Engineer @ ORG_e34691a8 Health
[2025-12-21T20:04:32.027Z] [BOT] 💾 Marked as posted: Associate Data Engineer @ ORG_e34691a8 Health (instance #1)
[2025-12-21T20:04:32.027Z] [BOT] 💾 BEFORE ARCHIVING: 887 jobs in database
[2025-12-21T20:04:32.028Z] [BOT] ✅ No jobs to archive (all 887 jobs within 7-day window)
[2025-12-21T20:04:32.035Z] [BOT] 💾 Saved posted_jobs.json: 887 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:04:35.036Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-21T20:04:35.036Z] [BOT] 📍 [ROUTING] "Fiber Network Mapping Specialist 4" @ ORG_8d0003a5
   Category: MARKETING (matched: "growth")
[2025-12-21T20:04:35.036Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2025-12-21T20:04:35.369Z] [BOT] ✅ Created forum post: 🏢 Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 in #📣・marketing-jobs
  ✅ Industry: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5
[2025-12-21T20:04:36.871Z] [BOT] 💾 Marked as posted: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 (instance #1)
[2025-12-21T20:04:36.871Z] [BOT] 💾 BEFORE ARCHIVING: 888 jobs in database
[2025-12-21T20:04:36.872Z] [BOT] ✅ No jobs to archive (all 888 jobs within 7-day window)
[2025-12-21T20:04:36.880Z] [BOT] 💾 Saved posted_jobs.json: 888 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:04:39.881Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2025-12-21T20:04:39.882Z] [BOT] ⏭️  Skipping duplicate: JID_8d05fa0a-2026_jr2008395 (posted within 7 days)
[2025-12-21T20:04:39.882Z] [BOT] ⏭️  Skipping duplicate: JID_705febb2-graduate_1192959-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_06272f6d (posted within 7 days)
[2025-12-21T20:04:39.882Z] [BOT] ⏭️  Skipping duplicate: JID_7bc07e0b (posted within 7 days)
[2025-12-21T20:04:39.882Z] [BOT] ⏭️  Skipping duplicate: JID_c7109edb-iv_r0014039 (posted within 7 days)
[2025-12-21T20:04:39.882Z] [BOT] ⏭️  Skipping duplicate: JID_0c2a4a4a-engineer_j273811 (posted within 7 days)
[2025-12-21T20:04:39.882Z] [BOT] ⏭️  Skipping duplicate: JID_32127847-ii_jr102189 (posted within 7 days)
⏭️  Skipping duplicate: JID_a8c28b3f (posted within 7 days)
[2025-12-21T20:04:39.884Z] [BOT] ✅ Loaded pending queue: 35 total (15 pending, 20 enriched, 0 posted)
[2025-12-21T20:04:39.885Z] [BOT] ✅ Saved pending queue: 35 total (15 pending, 12 enriched, 8 posted)
[2025-12-21T20:04:39.885Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-21T20:04:39.931Z] [BOT] 📂 Loaded 964 existing routing entries
[2025-12-21T20:04:39.981Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 972
   Timestamp: 2025-12-21T20:04:39.977Z
[2025-12-21T20:04:39.982Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e38d000c.jsonl
[2025-12-21T20:04:39.982Z] [BOT] Total attempts: 15
   Successful: 14
   Failed: 0
   Skipped: 1
[2025-12-21T20:04:39.982Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
[2025-12-21T20:04:39.982Z] [BOT] Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #💻・remote-usa: 3 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🦢・los-angeles: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2025-12-21T20:04:39.982Z] [BOT] [STATS] Channel stats saved
[2025-12-21T20:04:41.991Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2712) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*