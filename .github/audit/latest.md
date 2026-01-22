# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T16:38:48.474Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T16:38:06.963Z] ========================================
[2026-01-22T16:38:06.964Z] Discord Bot Execution Log
[2026-01-22T16:38:06.965Z] Environment: GitHub Actions
[2026-01-22T16:38:06.965Z] Node Version: v20.19.6
[2026-01-22T16:38:06.965Z] ========================================
[2026-01-22T16:38:06.965Z] Environment Variables Check:
[2026-01-22T16:38:06.965Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T16:38:06.965Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T16:38:06.965Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T16:38:06.965Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T16:38:06.965Z] 
Multi-Channel Configuration:
[2026-01-22T16:38:06.965Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T16:38:06.966Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T16:38:06.966Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T16:38:06.966Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T16:38:06.966Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T16:38:06.966Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T16:38:06.966Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T16:38:06.966Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T16:38:06.966Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T16:38:06.966Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T16:38:06.966Z] 
Data Files Check:
[2026-01-22T16:38:06.967Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T16:38:06.981Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2001632 bytes)
[2026-01-22T16:38:06.981Z] 
========================================
[2026-01-22T16:38:06.981Z] Starting Enhanced Discord Bot...
[2026-01-22T16:38:06.981Z] ========================================
[2026-01-22T16:38:07.517Z] [BOT] ✅ Loaded V2 database: 3439 jobs
[2026-01-22T16:38:08.696Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T16:38:08.697Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T16:38:08.697Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T16:38:08.812Z] [BOT] ✅ Loaded pending queue: 2782 total (2762 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T16:38:08.816Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T16:38:08.816Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T16:38:08.817Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T16:38:08.818Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T16:38:08.818Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T16:38:08.821Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T16:38:08.821Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T16:38:08.822Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T16:38:08.839Z] [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T16:38:09.062Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T16:38:09.063Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T16:38:09.063Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:38:09.066Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T16:38:09.086Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-22T16:38:09.087Z] [BOT] ✅ Archiving complete: 2 archived, 3437 active
[2026-01-22T16:38:09.108Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:10.609Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T16:38:10.609Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T16:38:10.792Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T16:38:10.792Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T16:38:10.793Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T16:38:10.793Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:10.795Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:10.816Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:12.463Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T16:38:12.464Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T16:38:12.464Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:12.466Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:12.490Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:13.990Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T16:38:13.990Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T16:38:14.270Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T16:38:14.271Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T16:38:14.271Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:14.274Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:14.296Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
[2026-01-22T16:38:14.296Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:15.956Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T16:38:15.957Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T16:38:15.957Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:15.959Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:15.979Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:17.481Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T16:38:17.481Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T16:38:17.667Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T16:38:17.668Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T16:38:17.668Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:17.671Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:17.695Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:19.197Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T16:38:19.197Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T16:38:19.512Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T16:38:19.512Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T16:38:19.512Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T16:38:19.513Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:19.515Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:19.538Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:21.435Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T16:38:21.435Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T16:38:21.436Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:21.438Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:21.460Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
[2026-01-22T16:38:21.460Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:25.962Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T16:38:25.963Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T16:38:26.121Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T16:38:26.122Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T16:38:26.122Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:26.124Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:26.144Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:27.646Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T16:38:27.833Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T16:38:27.834Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T16:38:27.834Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:27.836Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:27.856Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:29.552Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T16:38:29.553Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T16:38:29.553Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T16:38:29.553Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:29.555Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:29.575Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:31.076Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T16:38:31.076Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T16:38:31.353Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T16:38:31.353Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T16:38:31.353Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T16:38:31.353Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:31.355Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:31.375Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:32.877Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T16:38:32.877Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T16:38:33.172Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T16:38:33.173Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T16:38:33.173Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:33.175Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:33.195Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:35.018Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T16:38:35.019Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T16:38:35.019Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:35.021Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:35.041Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:39.542Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T16:38:39.543Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T16:38:39.543Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T16:38:39.799Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T16:38:39.799Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T16:38:39.800Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-22T16:38:39.802Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-22T16:38:39.822Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:38:44.322Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T16:38:44.324Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T16:38:44.404Z] [BOT] 📂 Loaded 6661 existing routing entries
[2026-01-22T16:38:44.499Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T16:38:44.499Z] [BOT] Total entries: 6671
   Timestamp: 2026-01-22T16:38:44.467Z
[2026-01-22T16:38:44.499Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T16:38:44.500Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T16:38:44.500Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T16:38:44.500Z] [BOT] [STATS] Channel stats saved
[2026-01-22T16:38:46.516Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*