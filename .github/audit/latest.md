# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T11:56:39.496Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T11:55:58.911Z] ========================================
[2026-01-22T11:55:58.913Z] Discord Bot Execution Log
[2026-01-22T11:55:58.914Z] Environment: GitHub Actions
[2026-01-22T11:55:58.914Z] Node Version: v20.19.6
[2026-01-22T11:55:58.914Z] ========================================
[2026-01-22T11:55:58.914Z] Environment Variables Check:
[2026-01-22T11:55:58.914Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T11:55:58.914Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T11:55:58.914Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T11:55:58.914Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T11:55:58.914Z] 
Multi-Channel Configuration:
[2026-01-22T11:55:58.914Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T11:55:58.914Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T11:55:58.915Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T11:55:58.915Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T11:55:58.915Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T11:55:58.915Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T11:55:58.915Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T11:55:58.915Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T11:55:58.915Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T11:55:58.915Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T11:55:58.915Z] 
Data Files Check:
[2026-01-22T11:55:58.916Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T11:55:58.930Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2006790 bytes)
[2026-01-22T11:55:58.930Z] 
========================================
[2026-01-22T11:55:58.930Z] Starting Enhanced Discord Bot...
[2026-01-22T11:55:58.930Z] ========================================
[2026-01-22T11:55:59.498Z] [BOT] ✅ Loaded V2 database: 3449 jobs
[2026-01-22T11:56:00.146Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T11:56:00.146Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T11:56:00.146Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T11:56:00.264Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T11:56:00.267Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T11:56:00.268Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T11:56:00.268Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T11:56:00.269Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T11:56:00.269Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T11:56:00.272Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T11:56:00.273Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T11:56:00.273Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:56:00.289Z] [BOT ERROR] (node:2385) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T11:56:00.734Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T11:56:00.734Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T11:56:00.735Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T11:56:00.735Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:00.738Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:00.763Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:02.264Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T11:56:02.264Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T11:56:02.552Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T11:56:02.552Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T11:56:02.553Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T11:56:02.553Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:02.555Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:02.576Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:04.254Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T11:56:04.254Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T11:56:04.254Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T11:56:04.254Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:04.257Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:04.280Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:05.782Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-22T11:56:05.782Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:56:05.970Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T11:56:05.970Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T11:56:05.971Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T11:56:05.971Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:05.974Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:05.997Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:07.970Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T11:56:07.971Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T11:56:07.971Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:07.973Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:07.994Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:09.495Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T11:56:09.496Z] [BOT] Category: TECH (matched: "software")
[2026-01-22T11:56:09.496Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T11:56:09.736Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T11:56:09.736Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T11:56:09.737Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T11:56:09.737Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:09.739Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:09.764Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:11.266Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T11:56:11.266Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:56:11.457Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T11:56:11.458Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T11:56:11.458Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:11.460Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:11.483Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:13.172Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T11:56:13.173Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:13.175Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:13.198Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:17.699Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T11:56:17.700Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T11:56:17.700Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T11:56:17.928Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T11:56:17.928Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T11:56:17.928Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T11:56:17.929Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:17.931Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:17.962Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:19.464Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-22T11:56:19.464Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T11:56:19.722Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T11:56:19.722Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T11:56:19.723Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T11:56:19.723Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:19.725Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:19.745Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:21.432Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T11:56:21.433Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T11:56:21.433Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:21.435Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:21.455Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:22.956Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T11:56:22.957Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T11:56:23.148Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T11:56:23.148Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T11:56:23.149Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T11:56:23.149Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:23.151Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:23.171Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:24.672Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T11:56:24.992Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T11:56:24.992Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T11:56:24.993Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:24.994Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:25.014Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:26.714Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T11:56:26.715Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T11:56:26.715Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:26.717Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:26.737Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
[2026-01-22T11:56:26.737Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:31.238Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T11:56:31.239Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T11:56:31.239Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T11:56:31.465Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T11:56:31.465Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T11:56:31.467Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T11:56:31.489Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:56:35.992Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T11:56:35.993Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T11:56:36.074Z] [BOT] 📂 Loaded 6531 existing routing entries
[2026-01-22T11:56:36.168Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T11:56:36.168Z] [BOT] Total entries: 6541
   Timestamp: 2026-01-22T11:56:36.137Z
[2026-01-22T11:56:36.168Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T11:56:36.168Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T11:56:36.169Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T11:56:36.169Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-22T11:56:36.169Z] [BOT] 3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T11:56:36.169Z] [BOT] [STATS] Channel stats saved
[2026-01-22T11:56:38.186Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2385) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*