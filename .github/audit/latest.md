# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T09:52:10.315Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T09:51:30.136Z] ========================================
[2026-01-22T09:51:30.138Z] Discord Bot Execution Log
[2026-01-22T09:51:30.138Z] Environment: GitHub Actions
[2026-01-22T09:51:30.138Z] Node Version: v20.19.6
[2026-01-22T09:51:30.138Z] ========================================
[2026-01-22T09:51:30.139Z] Environment Variables Check:
[2026-01-22T09:51:30.139Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T09:51:30.139Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T09:51:30.139Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T09:51:30.139Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T09:51:30.139Z] 
Multi-Channel Configuration:
[2026-01-22T09:51:30.139Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T09:51:30.139Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T09:51:30.139Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T09:51:30.139Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T09:51:30.140Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T09:51:30.140Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T09:51:30.140Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T09:51:30.140Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T09:51:30.140Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T09:51:30.140Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T09:51:30.140Z] 
Data Files Check:
[2026-01-22T09:51:30.141Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T09:51:30.154Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2009238 bytes)
[2026-01-22T09:51:30.155Z] 
========================================
[2026-01-22T09:51:30.155Z] Starting Enhanced Discord Bot...
[2026-01-22T09:51:30.155Z] ========================================
[2026-01-22T09:51:30.696Z] [BOT] ✅ Loaded V2 database: 3454 jobs
[2026-01-22T09:51:31.224Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T09:51:31.224Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T09:51:31.224Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T09:51:31.340Z] [BOT] ✅ Loaded pending queue: 2756 total (2736 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T09:51:31.344Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T09:51:31.345Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T09:51:31.345Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T09:51:31.346Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T09:51:31.346Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T09:51:31.350Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T09:51:31.351Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T09:51:31.351Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T09:51:31.368Z] [BOT ERROR] (node:2405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T09:51:31.635Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T09:51:31.636Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T09:51:31.636Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:31.639Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:31.665Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:51:33.167Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T09:51:33.167Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T09:51:33.596Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T09:51:33.596Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T09:51:33.597Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T09:51:33.597Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:33.599Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:33.620Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:51:35.634Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T09:51:35.634Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T09:51:35.635Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T09:51:35.635Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:35.638Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:35.661Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:51:37.162Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T09:51:37.163Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T09:51:37.356Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T09:51:37.356Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T09:51:37.356Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T09:51:37.357Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:37.359Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:37.382Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:51:39.088Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T09:51:39.089Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T09:51:39.089Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:39.091Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:39.111Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:51:40.613Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T09:51:40.613Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T09:51:40.827Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T09:51:40.827Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T09:51:40.827Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T09:51:40.828Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:40.830Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:40.856Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:51:42.358Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T09:51:42.358Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T09:51:42.584Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T09:51:42.584Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T09:51:42.585Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T09:51:42.585Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:42.587Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:42.609Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
[2026-01-22T09:51:42.609Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T09:51:44.391Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T09:51:44.391Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T09:51:44.392Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:44.394Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:44.416Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
[2026-01-22T09:51:44.416Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T09:51:48.917Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T09:51:48.919Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T09:51:49.299Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T09:51:49.300Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T09:51:49.300Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:49.303Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:49.323Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:51:50.825Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T09:51:51.016Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T09:51:51.017Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T09:51:51.017Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:51.019Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:51.039Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
[2026-01-22T09:51:51.039Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T09:51:52.793Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T09:51:52.794Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T09:51:52.794Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:52.796Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:52.816Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:51:54.317Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T09:51:54.317Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T09:51:54.642Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T09:51:54.642Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T09:51:54.642Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:54.644Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:54.664Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:51:56.165Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T09:51:56.355Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T09:51:56.355Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T09:51:56.355Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:56.357Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:56.378Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:51:58.082Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T09:51:58.082Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T09:51:58.082Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T09:51:58.082Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:51:58.084Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:51:58.105Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:52:02.608Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T09:52:02.609Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T09:52:02.609Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T09:52:02.839Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T09:52:02.839Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T09:52:02.840Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:52:02.842Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:52:02.863Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:52:07.365Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T09:52:07.366Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T09:52:07.445Z] [BOT] 📂 Loaded 6451 existing routing entries
[2026-01-22T09:52:07.539Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6461
[2026-01-22T09:52:07.539Z] [BOT] Timestamp: 2026-01-22T09:52:07.509Z
[2026-01-22T09:52:07.540Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T09:52:07.540Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T09:52:07.540Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T09:52:07.540Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T09:52:07.540Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
[2026-01-22T09:52:07.540Z] [BOT] 4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T09:52:07.541Z] [BOT] [STATS] Channel stats saved
[2026-01-22T09:52:09.559Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*