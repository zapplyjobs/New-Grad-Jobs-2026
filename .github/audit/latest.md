# Discord Bot Execution Audit
**Timestamp:** 2025-12-21T20:49:31.676Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-21T20:48:55.195Z] ========================================
[2025-12-21T20:48:55.197Z] Discord Bot Execution Log
[2025-12-21T20:48:55.197Z] Environment: GitHub Actions
[2025-12-21T20:48:55.197Z] Node Version: v20.19.6
[2025-12-21T20:48:55.197Z] ========================================
[2025-12-21T20:48:55.197Z] Environment Variables Check:
[2025-12-21T20:48:55.197Z] DISCORD_TOKEN: ✅ Set
[2025-12-21T20:48:55.197Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-21T20:48:55.197Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-21T20:48:55.198Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-21T20:48:55.198Z] 
Multi-Channel Configuration:
[2025-12-21T20:48:55.198Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-21T20:48:55.198Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-21T20:48:55.198Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-21T20:48:55.198Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-21T20:48:55.198Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-21T20:48:55.198Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-21T20:48:55.198Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-21T20:48:55.198Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-21T20:48:55.198Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-21T20:48:55.198Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-21T20:48:55.198Z] 
Data Files Check:
[2025-12-21T20:48:55.199Z] .github/data/new_jobs.json: ✅ Exists (8 items, 40895 bytes)
[2025-12-21T20:48:55.203Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 530836 bytes)
[2025-12-21T20:48:55.203Z] 
========================================
[2025-12-21T20:48:55.203Z] Starting Enhanced Discord Bot...
[2025-12-21T20:48:55.203Z] ========================================
[2025-12-21T20:48:55.748Z] [BOT] ✅ Loaded V2 database: 906 jobs
[2025-12-21T20:48:56.259Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-21T20:48:56.259Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-21T20:48:56.259Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-21T20:48:56.260Z] [BOT] 📦 Exporting 8 jobs to encrypted JSON...
[2025-12-21T20:48:56.315Z] [BOT] 🧹 Cleaned up 6 jobs older than 7 days
[2025-12-21T20:48:56.376Z] [BOT] ✅ Export complete: Added 6, Skipped 2, Total 179
[2025-12-21T20:48:56.378Z] [BOT] 📬 Found 8 new jobs (0 already posted)...
[2025-12-21T20:48:56.378Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-21T20:48:56.378Z] [BOT] 📋 After blacklist filter: 7 jobs (1 blacklisted)
[2025-12-21T20:48:56.378Z] [BOT] 📋 After data quality filter: 7 jobs (0 invalid)
[2025-12-21T20:48:56.379Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2025-12-21T20:48:56.379Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-21T20:48:56.382Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-21T20:48:56.383Z] [BOT] 📍 [ROUTING] "Configuration and Data Management Specialist - Configuration and Data Management Specialist" @ ORG_bf9a1fe7
[2025-12-21T20:48:56.383Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:48:56.400Z] [BOT ERROR] (node:2298) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-21T20:48:56.595Z] [BOT] ✅ Created forum post: 🏢 Configuration and Data Management Specialist - Configuration and Data Management Specialist @ ORG_95d64cac in #💻・tech-jobs
[2025-12-21T20:48:56.595Z] [BOT] ✅ Industry: Configuration and Data Management Specialist - Configuration and Data Management Specialist @ ORG_bf9a1fe7
[2025-12-21T20:48:58.548Z] [BOT] ✅ Created forum post: 🏢 Configuration and Data Management Specialist - Configuration and Data Management Specialist @ ORG_95d64cac in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-21T20:49:00.049Z] [BOT] 💾 Marked as posted: Configuration and Data Management Specialist - Configuration and Data Management Specialist @ ORG_bf9a1fe7 (instance #1)
[2025-12-21T20:49:00.049Z] [BOT] 💾 BEFORE ARCHIVING: 907 jobs in database
[2025-12-21T20:49:00.050Z] [BOT] ✅ No jobs to archive (all 907 jobs within 7-day window)
[2025-12-21T20:49:00.064Z] [BOT] 💾 Saved posted_jobs.json: 907 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:49:00.064Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_6a7367ef Insurance
[2025-12-21T20:49:00.065Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:49:00.478Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_6a7367ef Insurance in #💻・tech-jobs
[2025-12-21T20:49:00.479Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_6a7367ef Insurance
[2025-12-21T20:49:02.197Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_6a7367ef Insurance in #💻・remote-usa
[2025-12-21T20:49:02.197Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T20:49:03.699Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_6a7367ef Insurance (instance #1)
[2025-12-21T20:49:03.699Z] [BOT] 💾 BEFORE ARCHIVING: 908 jobs in database
[2025-12-21T20:49:03.700Z] [BOT] ✅ No jobs to archive (all 908 jobs within 7-day window)
[2025-12-21T20:49:03.706Z] [BOT] 💾 Saved posted_jobs.json: 908 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:49:03.707Z] [BOT] 📍 [ROUTING] "BIOS Engineer" @ ORG_8185c8ac Micro Computer
   Category: TECH (matched: "engineer/engineering")
[2025-12-21T20:49:03.707Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:49:03.901Z] [BOT] ✅ Created forum post: 🏢 BIOS Engineer @ ORG_8185c8ac Micro Computer in #💻・tech-jobs
  ✅ Industry: BIOS Engineer @ ORG_8185c8ac Micro Computer
[2025-12-21T20:49:06.030Z] [BOT] ✅ Created forum post: 🏢 BIOS Engineer @ ORG_8185c8ac Micro Computer in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-21T20:49:07.531Z] [BOT] 💾 Marked as posted: BIOS Engineer @ ORG_8185c8ac Micro Computer (instance #1)
[2025-12-21T20:49:07.531Z] [BOT] 💾 BEFORE ARCHIVING: 909 jobs in database
[2025-12-21T20:49:07.532Z] [BOT] ✅ No jobs to archive (all 909 jobs within 7-day window)
[2025-12-21T20:49:07.541Z] [BOT] 💾 Saved posted_jobs.json: 909 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:49:07.541Z] [BOT] 📍 [ROUTING] "Data Center Network Modeling Technician 3" @ ORG_8d0003a5
[2025-12-21T20:49:07.541Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:49:07.726Z] [BOT] ✅ Created forum post: 🏢 Data Center Network Modeling Technician 3 @ ORG_8d0003a5 in #💻・tech-jobs
[2025-12-21T20:49:07.726Z] [BOT] ✅ Industry: Data Center Network Modeling Technician 3 @ ORG_8d0003a5
[2025-12-21T20:49:09.484Z] [BOT] ✅ Created forum post: 🏢 Data Center Network Modeling Technician 3 @ ORG_8d0003a5 in #💻・remote-usa
[2025-12-21T20:49:09.484Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T20:49:10.984Z] [BOT] 💾 Marked as posted: Data Center Network Modeling Technician 3 @ ORG_8d0003a5 (instance #1)
[2025-12-21T20:49:10.985Z] [BOT] 💾 BEFORE ARCHIVING: 910 jobs in database
[2025-12-21T20:49:10.985Z] [BOT] ✅ No jobs to archive (all 910 jobs within 7-day window)
[2025-12-21T20:49:10.992Z] [BOT] 💾 Saved posted_jobs.json: 910 active jobs
[2025-12-21T20:49:10.993Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T20:49:13.993Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-21T20:49:13.995Z] [BOT] 📍 [ROUTING] "Configuration and Logistics Data Analyst 1 - Engineering" @ ORG_c910d474 Dynamics
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-21T20:49:13.995Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T20:49:14.219Z] [BOT] ✅ Created forum post: 🏢 Configuration and Logistics Data Analyst 1 - Engineering @ ORG_c910d474 Dynamics in #📈・JID_fb739488
  ✅ Industry: Configuration and Logistics Data Analyst 1 - Engineering @ ORG_c910d474 Dynamics
[2025-12-21T20:49:15.938Z] [BOT] ✅ Created forum post: 🏢 Configuration and Logistics Data Analyst 1 - Engineering @ ORG_c910d474 Dynamics in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T20:49:17.438Z] [BOT] 💾 Marked as posted: Configuration and Logistics Data Analyst 1 - Engineering @ ORG_c910d474 Dynamics (instance #1)
[2025-12-21T20:49:17.439Z] [BOT] 💾 BEFORE ARCHIVING: 911 jobs in database
[2025-12-21T20:49:17.439Z] [BOT] ✅ No jobs to archive (all 911 jobs within 7-day window)
[2025-12-21T20:49:17.452Z] [BOT] 💾 Saved posted_jobs.json: 911 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:49:20.452Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-21T20:49:20.453Z] [BOT] 📍 [ROUTING] "Associate Data Engineer" @ ORG_3db6634d
   Category: AI (matched: "machine learning")
[2025-12-21T20:49:20.453Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-21T20:49:20.746Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer @ ORG_3db6634d in #🤖・ai-jobs
  ✅ Industry: Associate Data Engineer @ ORG_3db6634d
[2025-12-21T20:49:22.246Z] [BOT] 💾 Marked as posted: Associate Data Engineer @ ORG_3db6634d (instance #1)
[2025-12-21T20:49:22.247Z] [BOT] 💾 BEFORE ARCHIVING: 912 jobs in database
[2025-12-21T20:49:22.247Z] [BOT] ✅ No jobs to archive (all 912 jobs within 7-day window)
[2025-12-21T20:49:22.256Z] [BOT] 💾 Saved posted_jobs.json: 912 active jobs
[2025-12-21T20:49:22.256Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T20:49:22.257Z] [BOT] 📍 [ROUTING] "Data Science Engineer" @ ORG_c9453059 Berkley
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-21T20:49:22.465Z] [BOT] ✅ Created forum post: 🏢 Data Science Engineer @ ORG_c9453059 Berkley in #🤖・ai-jobs
  ✅ Industry: Data Science Engineer @ ORG_c9453059 Berkley
[2025-12-21T20:49:24.316Z] [BOT] ✅ Created forum post: 🏢 Data Science Engineer @ ORG_c9453059 Berkley in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T20:49:25.818Z] [BOT] 💾 Marked as posted: Data Science Engineer @ ORG_c9453059 Berkley (instance #1)
[2025-12-21T20:49:25.818Z] [BOT] 💾 BEFORE ARCHIVING: 913 jobs in database
[2025-12-21T20:49:25.819Z] [BOT] ✅ No jobs to archive (all 913 jobs within 7-day window)
[2025-12-21T20:49:25.827Z] [BOT] 💾 Saved posted_jobs.json: 913 active jobs
[2025-12-21T20:49:25.827Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T20:49:28.828Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-12-21T20:49:28.828Z] [BOT] ⏭️  Skipping duplicate: JID_44a4fe5f (posted within 7 days)
[2025-12-21T20:49:28.828Z] [BOT] ⏭️  Skipping duplicate: JID_fadc0c7d (posted within 7 days)
[2025-12-21T20:49:28.828Z] [BOT] ⏭️  Skipping duplicate: JID_a98705f4 (posted within 7 days)
⏭️  Skipping duplicate: JID_829ed3c9 (posted within 7 days)
[2025-12-21T20:49:28.829Z] [BOT] ⏭️  Skipping duplicate: JID_25d5911a (posted within 7 days)
⏭️  Skipping duplicate: JID_fd945994 (posted within 7 days)
⏭️  Skipping duplicate: JID_17f073d0-iii_r0014121 (posted within 7 days)
[2025-12-21T20:49:28.829Z] [BOT] ✅ Loaded pending queue: 8 total (0 pending, 8 enriched, 0 posted)
[2025-12-21T20:49:28.830Z] [BOT] ✅ Saved pending queue: 8 total (0 pending, 1 enriched, 7 posted)
[2025-12-21T20:49:28.830Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-21T20:49:28.876Z] [BOT] 📂 Loaded 990 existing routing entries
[2025-12-21T20:49:28.922Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
[2025-12-21T20:49:28.923Z] [BOT] Total entries: 997
   Timestamp: 2025-12-21T20:49:28.917Z
[2025-12-21T20:49:28.923Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e38d000c.jsonl
   Total attempts: 14
   Successful: 13
   Failed: 0
   Skipped: 1
[2025-12-21T20:49:28.923Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-21T20:49:28.924Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 4 posts
[2025-12-21T20:49:28.924Z] [BOT] 2. #💻・remote-usa: 4 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🤠・austin: 1 posts
     5. #🌉・san-francisco: 1 posts
[2025-12-21T20:49:28.924Z] [BOT] [STATS] Channel stats saved
[2025-12-21T20:49:30.936Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2298) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*