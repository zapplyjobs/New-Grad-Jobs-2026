# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T23:15:56.907Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T23:15:15.346Z] ========================================
[2026-01-21T23:15:15.348Z] Discord Bot Execution Log
[2026-01-21T23:15:15.348Z] Environment: GitHub Actions
[2026-01-21T23:15:15.348Z] Node Version: v20.19.6
[2026-01-21T23:15:15.349Z] ========================================
[2026-01-21T23:15:15.349Z] Environment Variables Check:
[2026-01-21T23:15:15.349Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T23:15:15.349Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T23:15:15.349Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T23:15:15.349Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T23:15:15.349Z] 
Multi-Channel Configuration:
[2026-01-21T23:15:15.349Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T23:15:15.349Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T23:15:15.349Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T23:15:15.350Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T23:15:15.350Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T23:15:15.350Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T23:15:15.350Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T23:15:15.350Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T23:15:15.350Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T23:15:15.350Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T23:15:15.350Z] 
Data Files Check:
[2026-01-21T23:15:15.351Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-21T23:15:15.366Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2176606 bytes)
[2026-01-21T23:15:15.366Z] 
========================================
[2026-01-21T23:15:15.367Z] Starting Enhanced Discord Bot...
[2026-01-21T23:15:15.367Z] ========================================
[2026-01-21T23:15:15.916Z] [BOT] ✅ Loaded V2 database: 3755 jobs
[2026-01-21T23:15:16.592Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T23:15:16.593Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T23:15:16.593Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T23:15:16.713Z] [BOT] ✅ Loaded pending queue: 2762 total (2742 pending, 20 enriched, 0 posted)
[2026-01-21T23:15:16.713Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-21T23:15:16.720Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T23:15:16.720Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T23:15:16.721Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T23:15:16.722Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T23:15:16.722Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-21T23:15:16.722Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T23:15:16.725Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T23:15:16.725Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-21T23:15:16.726Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:15:16.743Z] [BOT ERROR] (node:2473) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T23:15:17.067Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-21T23:15:17.069Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-21T23:15:17.069Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:15:17.072Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T23:15:17.078Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T23:15:17.078Z] [BOT] ✅ Archiving complete: 10 archived, 3745 active
[2026-01-21T23:15:17.105Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:18.607Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:15:18.883Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-21T23:15:18.884Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-21T23:15:18.884Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:18.887Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:18.910Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:20.681Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T23:15:20.682Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-21T23:15:20.682Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:20.684Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:20.710Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:22.211Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-21T23:15:22.212Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T23:15:22.603Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-21T23:15:22.603Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-21T23:15:22.604Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:22.606Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:22.632Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:24.479Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T23:15:24.480Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-21T23:15:24.480Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:24.482Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:24.505Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:26.006Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-21T23:15:26.006Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T23:15:26.198Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-21T23:15:26.199Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-21T23:15:26.199Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-21T23:15:26.199Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:26.202Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:26.229Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:27.732Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:15:28.081Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-21T23:15:28.081Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-21T23:15:28.082Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-21T23:15:28.082Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:28.084Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:28.108Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:29.952Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T23:15:29.953Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-21T23:15:29.953Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:29.955Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:29.982Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:34.484Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T23:15:34.486Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:15:34.783Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-21T23:15:34.784Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-21T23:15:34.784Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:34.787Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:34.810Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:36.314Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:15:36.515Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-21T23:15:36.516Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T23:15:36.516Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:36.519Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:36.544Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:38.436Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T23:15:38.437Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T23:15:38.437Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:38.440Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:38.463Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:39.965Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:15:39.965Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T23:15:40.158Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-21T23:15:40.158Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T23:15:40.158Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:40.161Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:40.187Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:41.688Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:15:41.914Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-21T23:15:41.914Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T23:15:41.914Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:41.916Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:41.939Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:44.211Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T23:15:44.212Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T23:15:44.212Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:44.214Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:44.236Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:48.738Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T23:15:48.739Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-21T23:15:48.739Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T23:15:48.941Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-21T23:15:48.942Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-21T23:15:48.942Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T23:15:48.944Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T23:15:48.968Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:15:53.470Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T23:15:53.471Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T23:15:53.539Z] [BOT] 📂 Loaded 6191 existing routing entries
[2026-01-21T23:15:53.628Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T23:15:53.628Z] [BOT] Total entries: 6201
   Timestamp: 2026-01-21T23:15:53.595Z
[2026-01-21T23:15:53.629Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T23:15:53.629Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-21T23:15:53.629Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T23:15:53.630Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-21T23:15:53.630Z] [BOT] [STATS] Channel stats saved
[2026-01-21T23:15:55.649Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2473) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*