# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T07:58:14.080Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T07:57:34.786Z] ========================================
[2026-01-22T07:57:34.788Z] Discord Bot Execution Log
[2026-01-22T07:57:34.788Z] Environment: GitHub Actions
[2026-01-22T07:57:34.788Z] Node Version: v20.19.6
[2026-01-22T07:57:34.788Z] ========================================
[2026-01-22T07:57:34.788Z] Environment Variables Check:
[2026-01-22T07:57:34.788Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T07:57:34.789Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T07:57:34.789Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T07:57:34.789Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T07:57:34.789Z] 
Multi-Channel Configuration:
[2026-01-22T07:57:34.789Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T07:57:34.789Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T07:57:34.789Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T07:57:34.789Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T07:57:34.789Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T07:57:34.789Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T07:57:34.789Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T07:57:34.789Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T07:57:34.790Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T07:57:34.790Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T07:57:34.790Z] 
Data Files Check:
[2026-01-22T07:57:34.791Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T07:57:34.804Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2039908 bytes)
[2026-01-22T07:57:34.805Z] 
========================================
[2026-01-22T07:57:34.805Z] Starting Enhanced Discord Bot...
[2026-01-22T07:57:34.805Z] ========================================
[2026-01-22T07:57:35.359Z] [BOT] ✅ Loaded V2 database: 3511 jobs
[2026-01-22T07:57:35.925Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T07:57:35.926Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T07:57:35.926Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T07:57:36.043Z] [BOT] ✅ Loaded pending queue: 2765 total (2745 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T07:57:36.047Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T07:57:36.047Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T07:57:36.047Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T07:57:36.048Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T07:57:36.049Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T07:57:36.051Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T07:57:36.052Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T07:57:36.052Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:57:36.069Z] [BOT ERROR] (node:2410) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T07:57:36.298Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T07:57:36.299Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T07:57:36.299Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:57:36.302Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T07:57:36.308Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-22T07:57:36.308Z] [BOT] ✅ Archiving complete: 10 archived, 3501 active
[2026-01-22T07:57:36.336Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:57:37.837Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:57:38.040Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T07:57:38.040Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T07:57:38.041Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T07:57:38.041Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:57:38.043Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:57:38.065Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:57:39.733Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T07:57:39.733Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T07:57:39.734Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T07:57:39.734Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:57:39.737Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:57:39.760Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:57:41.262Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-22T07:57:41.262Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:57:41.554Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T07:57:41.554Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T07:57:41.555Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T07:57:41.555Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:57:41.558Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:57:41.581Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:57:43.230Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T07:57:43.231Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T07:57:43.231Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T07:57:43.231Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:57:43.233Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:57:43.253Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:57:44.755Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T07:57:44.755Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:57:45.129Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T07:57:45.129Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T07:57:45.130Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T07:57:45.130Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:57:45.132Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:57:45.157Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:57:46.659Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T07:57:46.660Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T07:57:46.866Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T07:57:46.866Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T07:57:46.867Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:57:46.869Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:57:46.893Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:57:48.573Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T07:57:48.574Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T07:57:48.574Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:57:48.576Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:57:48.599Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:57:53.100Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T07:57:53.101Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T07:57:53.101Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T07:57:53.337Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T07:57:53.337Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T07:57:53.337Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T07:57:53.337Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:57:53.340Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:57:53.360Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:57:54.862Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T07:57:55.011Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T07:57:55.011Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T07:57:55.011Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:57:55.014Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:57:55.034Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:57:56.710Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T07:57:56.710Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T07:57:56.710Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:57:56.712Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:57:56.733Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:57:58.234Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T07:57:58.234Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T07:57:58.392Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T07:57:58.393Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T07:57:58.393Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:57:58.395Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:57:58.416Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:57:59.916Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T07:58:00.335Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T07:58:00.335Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T07:58:00.336Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:58:00.338Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:58:00.359Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:58:02.005Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T07:58:02.006Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T07:58:02.006Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:58:02.008Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:58:02.028Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:58:06.530Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T07:58:06.531Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
[2026-01-22T07:58:06.531Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-22T07:58:06.740Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T07:58:06.740Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T07:58:06.741Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T07:58:06.741Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-22T07:58:06.743Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-22T07:58:06.764Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:58:11.266Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T07:58:11.268Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T07:58:11.349Z] [BOT] 📂 Loaded 6401 existing routing entries
[2026-01-22T07:58:11.443Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6411
[2026-01-22T07:58:11.443Z] [BOT] Timestamp: 2026-01-22T07:58:11.412Z
[2026-01-22T07:58:11.444Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T07:58:11.444Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T07:58:11.444Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T07:58:11.444Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
[2026-01-22T07:58:11.444Z] [BOT] 4. #JID_98d4f0de: 2 posts
[2026-01-22T07:58:11.444Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T07:58:11.445Z] [BOT] [STATS] Channel stats saved
[2026-01-22T07:58:13.462Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2410) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*