# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T16:04:53.306Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T16:04:12.472Z] ========================================
[2026-01-22T16:04:12.474Z] Discord Bot Execution Log
[2026-01-22T16:04:12.474Z] Environment: GitHub Actions
[2026-01-22T16:04:12.474Z] Node Version: v20.19.6
[2026-01-22T16:04:12.474Z] ========================================
[2026-01-22T16:04:12.475Z] Environment Variables Check:
[2026-01-22T16:04:12.475Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T16:04:12.475Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T16:04:12.475Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T16:04:12.475Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T16:04:12.475Z] 
Multi-Channel Configuration:
[2026-01-22T16:04:12.475Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T16:04:12.475Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T16:04:12.475Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T16:04:12.475Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T16:04:12.476Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T16:04:12.476Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T16:04:12.476Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T16:04:12.476Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T16:04:12.476Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T16:04:12.476Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T16:04:12.476Z] 
Data Files Check:
[2026-01-22T16:04:12.477Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T16:04:12.490Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2003828 bytes)
[2026-01-22T16:04:12.490Z] 
========================================
[2026-01-22T16:04:12.490Z] Starting Enhanced Discord Bot...
[2026-01-22T16:04:12.490Z] ========================================
[2026-01-22T16:04:13.032Z] [BOT] ✅ Loaded V2 database: 3443 jobs
[2026-01-22T16:04:13.765Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T16:04:13.765Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T16:04:13.766Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T16:04:13.879Z] [BOT] ✅ Loaded pending queue: 2785 total (2765 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T16:04:13.883Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T16:04:13.884Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T16:04:13.884Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T16:04:13.885Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T16:04:13.885Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T16:04:13.888Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T16:04:13.888Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T16:04:13.889Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T16:04:13.905Z] [BOT ERROR] (node:2393) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T16:04:14.099Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T16:04:14.099Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T16:04:14.100Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T16:04:14.100Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T16:04:14.103Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T16:04:14.108Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-22T16:04:14.108Z] [BOT] ✅ Archiving complete: 1 archived, 3442 active
[2026-01-22T16:04:14.137Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
[2026-01-22T16:04:14.137Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:15.639Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T16:04:15.639Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T16:04:15.961Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T16:04:15.962Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T16:04:15.962Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:15.964Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:15.985Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
[2026-01-22T16:04:15.985Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:17.691Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T16:04:17.691Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T16:04:17.692Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T16:04:17.692Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:17.694Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:17.717Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:19.217Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-22T16:04:19.217Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T16:04:19.396Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T16:04:19.396Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T16:04:19.397Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T16:04:19.397Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:19.400Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:19.422Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
[2026-01-22T16:04:19.422Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:21.191Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T16:04:21.191Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T16:04:21.191Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:21.193Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:21.214Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:22.715Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T16:04:22.716Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T16:04:22.943Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T16:04:22.944Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T16:04:22.944Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:22.946Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:22.971Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:24.473Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T16:04:24.473Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T16:04:24.732Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T16:04:24.733Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T16:04:24.733Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:24.735Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:24.758Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:26.616Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T16:04:26.617Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T16:04:26.617Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:26.619Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:26.642Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:31.144Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T16:04:31.145Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T16:04:31.550Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T16:04:31.551Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T16:04:31.551Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:31.553Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:31.574Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:33.076Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T16:04:33.284Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T16:04:33.285Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T16:04:33.285Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:33.287Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:33.308Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:35.055Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T16:04:35.056Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T16:04:35.056Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:35.058Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:35.079Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:36.580Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T16:04:36.580Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T16:04:36.795Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T16:04:36.796Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T16:04:36.796Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:36.798Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:36.819Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:38.320Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T16:04:38.320Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T16:04:38.588Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T16:04:38.589Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T16:04:38.589Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:38.591Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:38.611Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:40.411Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T16:04:40.411Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T16:04:40.411Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:40.413Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:40.434Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:44.935Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T16:04:44.936Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
[2026-01-22T16:04:44.936Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-22T16:04:45.285Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T16:04:45.286Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T16:04:45.286Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:04:45.288Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-22T16:04:45.309Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:04:49.811Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T16:04:49.813Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T16:04:49.894Z] [BOT] 📂 Loaded 6641 existing routing entries
[2026-01-22T16:04:49.991Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6651
[2026-01-22T16:04:49.992Z] [BOT] Timestamp: 2026-01-22T16:04:49.960Z
[2026-01-22T16:04:49.992Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T16:04:49.993Z] [BOT] 5. #finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-22T16:04:52.010Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2393) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*