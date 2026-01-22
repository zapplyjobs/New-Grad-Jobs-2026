# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T19:31:05.480Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T19:30:24.624Z] ========================================
[2026-01-22T19:30:24.626Z] Discord Bot Execution Log
[2026-01-22T19:30:24.626Z] Environment: GitHub Actions
[2026-01-22T19:30:24.626Z] Node Version: v20.19.6
[2026-01-22T19:30:24.626Z] ========================================
[2026-01-22T19:30:24.626Z] Environment Variables Check:
[2026-01-22T19:30:24.626Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T19:30:24.626Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T19:30:24.626Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T19:30:24.627Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T19:30:24.627Z] 
Multi-Channel Configuration:
[2026-01-22T19:30:24.627Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T19:30:24.627Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T19:30:24.627Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T19:30:24.627Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T19:30:24.627Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T19:30:24.627Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T19:30:24.627Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T19:30:24.627Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T19:30:24.627Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T19:30:24.627Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T19:30:24.627Z] 
Data Files Check:
[2026-01-22T19:30:24.628Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T19:30:24.641Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1982792 bytes)
[2026-01-22T19:30:24.641Z] 
========================================
[2026-01-22T19:30:24.641Z] Starting Enhanced Discord Bot...
[2026-01-22T19:30:24.641Z] ========================================
[2026-01-22T19:30:25.183Z] [BOT] ✅ Loaded V2 database: 3407 jobs
[2026-01-22T19:30:26.007Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T19:30:26.007Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T19:30:26.007Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T19:30:26.123Z] [BOT] ✅ Loaded pending queue: 2787 total (2767 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T19:30:26.127Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T19:30:26.128Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T19:30:26.128Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T19:30:26.129Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T19:30:26.129Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T19:30:26.132Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T19:30:26.132Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T19:30:26.133Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T19:30:26.149Z] [BOT ERROR] (node:2404) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T19:30:26.422Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T19:30:26.422Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T19:30:26.423Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T19:30:26.423Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:30:26.426Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T19:30:26.431Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-22T19:30:26.431Z] [BOT] ✅ Archiving complete: 11 archived, 3396 active
[2026-01-22T19:30:26.458Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:27.960Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T19:30:27.960Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T19:30:28.255Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T19:30:28.256Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T19:30:28.256Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T19:30:28.256Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:28.259Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:28.278Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:29.954Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T19:30:29.955Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T19:30:29.955Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:29.957Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:29.979Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:31.480Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T19:30:31.480Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T19:30:31.880Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T19:30:31.880Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T19:30:31.880Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T19:30:31.881Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:31.883Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:31.906Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:33.714Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T19:30:33.714Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T19:30:33.714Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T19:30:33.714Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:33.717Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:33.737Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:35.239Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T19:30:35.239Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T19:30:35.665Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T19:30:35.665Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T19:30:35.666Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T19:30:35.666Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:35.668Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:35.692Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:37.194Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T19:30:37.194Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T19:30:37.405Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T19:30:37.405Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T19:30:37.406Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T19:30:37.406Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:37.408Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:37.430Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:39.165Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T19:30:39.166Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T19:30:39.166Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T19:30:39.166Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:39.168Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:39.190Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:43.691Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T19:30:43.693Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-22T19:30:43.693Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T19:30:44.199Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T19:30:44.199Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T19:30:44.200Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T19:30:44.200Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:44.202Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:44.221Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:45.723Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T19:30:45.920Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T19:30:45.921Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T19:30:45.921Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:45.923Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:45.942Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
[2026-01-22T19:30:45.943Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:47.813Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T19:30:47.814Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T19:30:47.814Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T19:30:47.814Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:47.816Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:47.835Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:49.336Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T19:30:49.336Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T19:30:49.590Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T19:30:49.590Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T19:30:49.590Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:49.593Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:49.612Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:51.113Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T19:30:51.113Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T19:30:51.291Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T19:30:51.291Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T19:30:51.291Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T19:30:51.291Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:51.293Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:51.313Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:53.012Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T19:30:53.012Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T19:30:53.012Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:53.014Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:53.034Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:30:57.536Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T19:30:57.536Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T19:30:57.537Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T19:30:57.940Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T19:30:57.940Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T19:30:57.941Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-22T19:30:57.943Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-22T19:30:57.964Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:31:02.467Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T19:31:02.468Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T19:31:02.550Z] [BOT] 📂 Loaded 6751 existing routing entries
[2026-01-22T19:31:02.645Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T19:31:02.645Z] [BOT] Total entries: 6761
   Timestamp: 2026-01-22T19:31:02.613Z
[2026-01-22T19:31:02.646Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
[2026-01-22T19:31:02.646Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T19:31:02.646Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-22T19:31:02.646Z] [BOT] Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
[2026-01-22T19:31:02.646Z] [BOT] 4. #JID_98d4f0de: 2 posts
[2026-01-22T19:31:02.646Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T19:31:02.647Z] [BOT] [STATS] Channel stats saved
[2026-01-22T19:31:04.663Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2404) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*