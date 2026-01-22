# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T05:48:59.554Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T05:48:19.937Z] ========================================
[2026-01-22T05:48:19.939Z] Discord Bot Execution Log
[2026-01-22T05:48:19.939Z] Environment: GitHub Actions
[2026-01-22T05:48:19.939Z] Node Version: v20.19.6
[2026-01-22T05:48:19.939Z] ========================================
[2026-01-22T05:48:19.939Z] Environment Variables Check:
[2026-01-22T05:48:19.939Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T05:48:19.939Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T05:48:19.939Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T05:48:19.939Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T05:48:19.939Z] 
Multi-Channel Configuration:
[2026-01-22T05:48:19.939Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T05:48:19.940Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T05:48:19.940Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T05:48:19.940Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T05:48:19.940Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T05:48:19.940Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T05:48:19.940Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T05:48:19.940Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T05:48:19.940Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T05:48:19.940Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T05:48:19.940Z] 
Data Files Check:
[2026-01-22T05:48:19.941Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T05:48:19.956Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2097428 bytes)
[2026-01-22T05:48:19.956Z] 
========================================
[2026-01-22T05:48:19.956Z] Starting Enhanced Discord Bot...
[2026-01-22T05:48:19.956Z] ========================================
[2026-01-22T05:48:20.481Z] [BOT] ✅ Loaded V2 database: 3605 jobs
[2026-01-22T05:48:20.901Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T05:48:20.902Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T05:48:20.902Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T05:48:21.016Z] [BOT] ✅ Loaded pending queue: 2785 total (2765 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T05:48:21.021Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T05:48:21.021Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T05:48:21.021Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T05:48:21.022Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T05:48:21.022Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T05:48:21.025Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T05:48:21.026Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T05:48:21.026Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T05:48:21.043Z] [BOT ERROR] (node:2486) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T05:48:21.392Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T05:48:21.392Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T05:48:21.393Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T05:48:21.394Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:48:21.397Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T05:48:21.402Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-22T05:48:21.402Z] [BOT] ✅ Archiving complete: 20 archived, 3585 active
[2026-01-22T05:48:21.425Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:22.927Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T05:48:22.928Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T05:48:23.635Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T05:48:23.636Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T05:48:23.636Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:23.639Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:23.660Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:25.523Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T05:48:25.523Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T05:48:25.524Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T05:48:25.524Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:25.526Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:25.550Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:27.052Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T05:48:27.052Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T05:48:27.257Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T05:48:27.257Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T05:48:27.258Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T05:48:27.258Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:27.260Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:27.284Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:29.019Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T05:48:29.019Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T05:48:29.019Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T05:48:29.019Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:29.021Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:29.042Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:30.544Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T05:48:30.545Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T05:48:30.794Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T05:48:30.795Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T05:48:30.795Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:30.797Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:30.822Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:32.324Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T05:48:32.324Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T05:48:32.543Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T05:48:32.543Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T05:48:32.544Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T05:48:32.544Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:32.546Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:32.569Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:34.207Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T05:48:34.207Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T05:48:34.207Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T05:48:34.207Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:34.210Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:34.233Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:38.735Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T05:48:38.736Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T05:48:38.736Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T05:48:38.921Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T05:48:38.922Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T05:48:38.922Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:38.924Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:38.945Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:40.447Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T05:48:40.568Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T05:48:40.569Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T05:48:40.569Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:40.571Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:40.592Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:42.244Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T05:48:42.244Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T05:48:42.244Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:42.246Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:42.267Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:43.768Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T05:48:43.769Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T05:48:44.000Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T05:48:44.000Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T05:48:44.000Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:44.002Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:44.023Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:45.524Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T05:48:45.525Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T05:48:45.790Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T05:48:45.790Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T05:48:45.790Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T05:48:45.791Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:45.793Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:45.813Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:47.480Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T05:48:47.481Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T05:48:47.481Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:47.483Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:47.504Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:52.006Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T05:48:52.006Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T05:48:52.006Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T05:48:52.169Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T05:48:52.169Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T05:48:52.169Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T05:48:52.171Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T05:48:52.193Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:48:56.695Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T05:48:56.697Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T05:48:56.776Z] [BOT] 📂 Loaded 6321 existing routing entries
[2026-01-22T05:48:56.869Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6331
[2026-01-22T05:48:56.869Z] [BOT] Timestamp: 2026-01-22T05:48:56.839Z
[2026-01-22T05:48:56.870Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T05:48:56.870Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T05:48:56.870Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T05:48:56.870Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-22T05:48:56.870Z] [BOT] 3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T05:48:56.871Z] [BOT] 5. #finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-22T05:48:58.889Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2486) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*