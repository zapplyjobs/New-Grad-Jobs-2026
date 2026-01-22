# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T22:58:00.849Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T22:57:26.042Z] ========================================
[2026-01-22T22:57:26.044Z] Discord Bot Execution Log
[2026-01-22T22:57:26.044Z] Environment: GitHub Actions
[2026-01-22T22:57:26.044Z] Node Version: v20.20.0
[2026-01-22T22:57:26.044Z] ========================================
[2026-01-22T22:57:26.044Z] Environment Variables Check:
[2026-01-22T22:57:26.044Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T22:57:26.044Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T22:57:26.044Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T22:57:26.044Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T22:57:26.044Z] 
Multi-Channel Configuration:
[2026-01-22T22:57:26.044Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T22:57:26.044Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T22:57:26.044Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T22:57:26.044Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T22:57:26.045Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T22:57:26.045Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T22:57:26.045Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T22:57:26.045Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T22:57:26.045Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T22:57:26.045Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T22:57:26.045Z] 
Data Files Check:
[2026-01-22T22:57:26.046Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T22:57:26.061Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1925278 bytes)
[2026-01-22T22:57:26.061Z] 
========================================
[2026-01-22T22:57:26.061Z] Starting Enhanced Discord Bot...
[2026-01-22T22:57:26.061Z] ========================================
[2026-01-22T22:57:26.551Z] [BOT] ✅ Loaded V2 database: 3305 jobs
[2026-01-22T22:57:27.060Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T22:57:27.061Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T22:57:27.061Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T22:57:27.231Z] [BOT] ✅ Loaded pending queue: 2775 total (2755 pending, 20 enriched, 0 posted)
[2026-01-22T22:57:27.234Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T22:57:27.238Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T22:57:27.238Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T22:57:27.239Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T22:57:27.240Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T22:57:27.240Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T22:57:27.243Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T22:57:27.243Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T22:57:27.244Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T22:57:27.263Z] [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T22:57:27.615Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T22:57:27.616Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T22:57:27.616Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T22:57:27.617Z] [BOT] 💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-22T22:57:27.619Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T22:57:27.624Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-22T22:57:27.624Z] [BOT] ✅ Archiving complete: 1 archived, 3304 active
[2026-01-22T22:57:27.656Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:57:29.158Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T22:57:29.158Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T22:57:29.418Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T22:57:29.418Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T22:57:29.418Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T22:57:29.419Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T22:57:29.421Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T22:57:29.442Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:57:30.943Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T22:57:30.943Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T22:57:31.196Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T22:57:31.196Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T22:57:31.197Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T22:57:31.197Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T22:57:31.199Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T22:57:31.222Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:57:33.093Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T22:57:33.093Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T22:57:33.093Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T22:57:33.094Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T22:57:33.096Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T22:57:33.118Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:57:34.619Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T22:57:34.837Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T22:57:34.838Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T22:57:34.838Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T22:57:34.840Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T22:57:34.862Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:57:36.363Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T22:57:36.363Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T22:57:36.539Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T22:57:36.540Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T22:57:36.540Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T22:57:36.542Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T22:57:36.568Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:57:38.241Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T22:57:38.241Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T22:57:38.242Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T22:57:38.242Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T22:57:38.244Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T22:57:38.268Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:57:42.770Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T22:57:42.770Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-22T22:57:42.771Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T22:57:43.056Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T22:57:43.057Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T22:57:43.057Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T22:57:43.060Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T22:57:43.082Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:57:44.583Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T22:57:44.772Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T22:57:44.772Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T22:57:44.773Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T22:57:44.774Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T22:57:44.797Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:57:46.299Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T22:57:46.299Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T22:57:46.623Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T22:57:46.623Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T22:57:46.624Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T22:57:46.624Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T22:57:46.626Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T22:57:46.652Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:57:48.153Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T22:57:48.153Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T22:57:48.456Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T22:57:48.456Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T22:57:48.456Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T22:57:48.456Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T22:57:48.458Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T22:57:48.482Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:57:52.984Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T22:57:52.985Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T22:57:52.985Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T22:57:53.253Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T22:57:53.254Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T22:57:53.254Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-22T22:57:53.256Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-22T22:57:53.278Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T22:57:57.780Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T22:57:57.782Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T22:57:57.880Z] [BOT] 📂 Loaded 6851 existing routing entries
[2026-01-22T22:57:57.979Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6861
   Timestamp: 2026-01-22T22:57:57.948Z
[2026-01-22T22:57:57.980Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T22:57:57.980Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-22T22:57:57.980Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-22T22:57:57.980Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #finance-jobs: 1 posts
[2026-01-22T22:57:57.980Z] [BOT] [STATS] Channel stats saved
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*