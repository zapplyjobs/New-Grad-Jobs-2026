# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T21:26:32.884Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T21:25:50.418Z] ========================================
[2026-01-21T21:25:50.420Z] Discord Bot Execution Log
[2026-01-21T21:25:50.421Z] Environment: GitHub Actions
[2026-01-21T21:25:50.421Z] Node Version: v20.19.6
[2026-01-21T21:25:50.421Z] ========================================
[2026-01-21T21:25:50.421Z] Environment Variables Check:
[2026-01-21T21:25:50.421Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T21:25:50.421Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T21:25:50.421Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T21:25:50.421Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T21:25:50.421Z] 
Multi-Channel Configuration:
[2026-01-21T21:25:50.421Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T21:25:50.422Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T21:25:50.422Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T21:25:50.422Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T21:25:50.422Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T21:25:50.422Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T21:25:50.422Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T21:25:50.422Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T21:25:50.422Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T21:25:50.422Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T21:25:50.422Z] 
Data Files Check:
[2026-01-21T21:25:50.423Z] .github/data/new_jobs.json: ✅ Exists (10 items, 53714 bytes)
[2026-01-21T21:25:50.438Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2202739 bytes)
[2026-01-21T21:25:50.438Z] 
========================================
[2026-01-21T21:25:50.438Z] Starting Enhanced Discord Bot...
[2026-01-21T21:25:50.438Z] ========================================
[2026-01-21T21:25:51.012Z] [BOT] ✅ Loaded V2 database: 3807 jobs
[2026-01-21T21:25:52.098Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T21:25:52.098Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T21:25:52.098Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T21:25:52.217Z] [BOT] ✅ Loaded pending queue: 2765 total (2745 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-21T21:25:52.222Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T21:25:52.222Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T21:25:52.222Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T21:25:52.329Z] [BOT] ✅ Loaded pending queue: 2765 total (2745 pending, 20 enriched, 0 posted)
[2026-01-21T21:25:52.516Z] [BOT] ✅ Saved pending queue: 2762 total (2745 pending, 17 enriched, 0 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
📋 After blacklist filter: 17 jobs (3 blacklisted)
[2026-01-21T21:25:52.516Z] [BOT] 📋 After data quality filter: 17 jobs (0 invalid)
[2026-01-21T21:25:52.517Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-21T21:25:52.517Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T21:25:52.520Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T21:25:52.521Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-21T21:25:52.521Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:25:52.538Z] [BOT ERROR] (node:3381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T21:25:52.745Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-21T21:25:52.745Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-21T21:25:52.746Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-21T21:25:52.747Z] [BOT] 💾 BEFORE ARCHIVING: 3808 jobs in database
[2026-01-21T21:25:52.750Z] [BOT] ✅ No jobs to archive (all 3808 jobs within 7-day window)
[2026-01-21T21:25:52.781Z] [BOT] 💾 Saved posted_jobs.json: 3808 active jobs
[2026-01-21T21:25:52.782Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T21:25:54.284Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-21T21:25:54.284Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:25:54.471Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-21T21:25:54.472Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (1 total channels)
[2026-01-21T21:25:54.472Z] [BOT] 💾 BEFORE ARCHIVING: 3809 jobs in database
[2026-01-21T21:25:54.475Z] [BOT] ✅ No jobs to archive (all 3809 jobs within 7-day window)
[2026-01-21T21:25:54.497Z] [BOT] 💾 Saved posted_jobs.json: 3809 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:25:56.646Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-21T21:25:56.646Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T21:25:56.646Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-21T21:25:56.646Z] [BOT] 💾 BEFORE ARCHIVING: 3809 jobs in database
[2026-01-21T21:25:56.649Z] [BOT] ✅ No jobs to archive (all 3809 jobs within 7-day window)
[2026-01-21T21:25:56.672Z] [BOT] 💾 Saved posted_jobs.json: 3809 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:25:58.173Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-21T21:25:58.174Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T21:25:58.625Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-21T21:25:58.626Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (1 total channels)
[2026-01-21T21:25:58.626Z] [BOT] 💾 BEFORE ARCHIVING: 3810 jobs in database
[2026-01-21T21:25:58.629Z] [BOT] ✅ No jobs to archive (all 3810 jobs within 7-day window)
[2026-01-21T21:25:58.651Z] [BOT] 💾 Saved posted_jobs.json: 3810 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:26:00.554Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-21T21:26:00.554Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T21:26:00.554Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-21T21:26:00.554Z] [BOT] 💾 BEFORE ARCHIVING: 3810 jobs in database
[2026-01-21T21:26:00.557Z] [BOT] ✅ No jobs to archive (all 3810 jobs within 7-day window)
[2026-01-21T21:26:00.585Z] [BOT] 💾 Saved posted_jobs.json: 3810 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:26:02.087Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-21T21:26:02.087Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T21:26:02.350Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-21T21:26:02.351Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-21T21:26:02.351Z] [BOT] 💾 BEFORE ARCHIVING: 3811 jobs in database
[2026-01-21T21:26:02.354Z] [BOT] ✅ No jobs to archive (all 3811 jobs within 7-day window)
[2026-01-21T21:26:02.382Z] [BOT] 💾 Saved posted_jobs.json: 3811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:26:03.884Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:26:04.177Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-21T21:26:04.178Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (1 total channels)
[2026-01-21T21:26:04.178Z] [BOT] 💾 BEFORE ARCHIVING: 3812 jobs in database
[2026-01-21T21:26:04.181Z] [BOT] ✅ No jobs to archive (all 3812 jobs within 7-day window)
[2026-01-21T21:26:04.206Z] [BOT] 💾 Saved posted_jobs.json: 3812 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:26:06.231Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-21T21:26:06.231Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T21:26:06.232Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-21T21:26:06.232Z] [BOT] 💾 BEFORE ARCHIVING: 3812 jobs in database
[2026-01-21T21:26:06.235Z] [BOT] ✅ No jobs to archive (all 3812 jobs within 7-day window)
[2026-01-21T21:26:06.258Z] [BOT] 💾 Saved posted_jobs.json: 3812 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:26:10.760Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T21:26:10.761Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T21:26:11.036Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-21T21:26:11.037Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-21T21:26:11.037Z] [BOT] 💾 BEFORE ARCHIVING: 3813 jobs in database
[2026-01-21T21:26:11.039Z] [BOT] ✅ No jobs to archive (all 3813 jobs within 7-day window)
[2026-01-21T21:26:11.066Z] [BOT] 💾 Saved posted_jobs.json: 3813 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:26:12.569Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-21T21:26:12.569Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T21:26:12.840Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-21T21:26:12.841Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-21T21:26:12.841Z] [BOT] 💾 BEFORE ARCHIVING: 3814 jobs in database
[2026-01-21T21:26:12.844Z] [BOT] ✅ No jobs to archive (all 3814 jobs within 7-day window)
[2026-01-21T21:26:12.867Z] [BOT] 💾 Saved posted_jobs.json: 3814 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:26:14.616Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T21:26:14.617Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T21:26:14.617Z] [BOT] 💾 BEFORE ARCHIVING: 3814 jobs in database
[2026-01-21T21:26:14.619Z] [BOT] ✅ No jobs to archive (all 3814 jobs within 7-day window)
[2026-01-21T21:26:14.644Z] [BOT] 💾 Saved posted_jobs.json: 3814 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:26:16.145Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T21:26:16.145Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T21:26:16.376Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-21T21:26:16.377Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T21:26:16.377Z] [BOT] 💾 BEFORE ARCHIVING: 3815 jobs in database
[2026-01-21T21:26:16.379Z] [BOT] ✅ No jobs to archive (all 3815 jobs within 7-day window)
[2026-01-21T21:26:16.403Z] [BOT] 💾 Saved posted_jobs.json: 3815 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:26:17.905Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-21T21:26:17.905Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T21:26:18.252Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-21T21:26:18.253Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-21T21:26:18.253Z] [BOT] 💾 BEFORE ARCHIVING: 3816 jobs in database
[2026-01-21T21:26:18.255Z] [BOT] ✅ No jobs to archive (all 3816 jobs within 7-day window)
[2026-01-21T21:26:18.282Z] [BOT] 💾 Saved posted_jobs.json: 3816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:26:20.054Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T21:26:20.055Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T21:26:20.055Z] [BOT] 💾 BEFORE ARCHIVING: 3816 jobs in database
[2026-01-21T21:26:20.057Z] [BOT] ✅ No jobs to archive (all 3816 jobs within 7-day window)
[2026-01-21T21:26:20.082Z] [BOT] 💾 Saved posted_jobs.json: 3816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:26:24.584Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T21:26:24.584Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
[2026-01-21T21:26:24.584Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T21:26:24.913Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-21T21:26:24.914Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-21T21:26:24.914Z] [BOT] 💾 BEFORE ARCHIVING: 3817 jobs in database
[2026-01-21T21:26:24.916Z] [BOT] ✅ No jobs to archive (all 3817 jobs within 7-day window)
[2026-01-21T21:26:24.939Z] [BOT] 💾 Saved posted_jobs.json: 3817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:26:29.441Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T21:26:29.443Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T21:26:29.507Z] [BOT] 📂 Loaded 6111 existing routing entries
[2026-01-21T21:26:29.590Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6121
   Timestamp: 2026-01-21T21:26:29.559Z
[2026-01-21T21:26:29.591Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T21:26:29.591Z] [BOT] Total attempts: 18
   Successful: 15
   Failed: 0
   Skipped: 3
[2026-01-21T21:26:29.591Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T21:26:29.591Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-21T21:26:29.591Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-21T21:26:29.591Z] [BOT] 3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-21T21:26:29.591Z] [BOT] [STATS] Channel stats saved
[2026-01-21T21:26:31.613Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*