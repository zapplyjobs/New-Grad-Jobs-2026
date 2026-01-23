# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T22:11:45.930Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T22:11:11.631Z] ========================================
[2026-01-23T22:11:11.633Z] Discord Bot Execution Log
[2026-01-23T22:11:11.633Z] Environment: GitHub Actions
[2026-01-23T22:11:11.633Z] Node Version: v20.20.0
[2026-01-23T22:11:11.633Z] ========================================
[2026-01-23T22:11:11.633Z] Environment Variables Check:
[2026-01-23T22:11:11.634Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T22:11:11.634Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T22:11:11.634Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T22:11:11.634Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T22:11:11.634Z] 
Multi-Channel Configuration:
[2026-01-23T22:11:11.634Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T22:11:11.634Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T22:11:11.634Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T22:11:11.634Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T22:11:11.634Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T22:11:11.635Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T22:11:11.635Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T22:11:11.635Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T22:11:11.635Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T22:11:11.635Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T22:11:11.635Z] 
Data Files Check:
[2026-01-23T22:11:11.635Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T22:11:11.648Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1723576 bytes)
[2026-01-23T22:11:11.648Z] 
========================================
[2026-01-23T22:11:11.648Z] Starting Enhanced Discord Bot...
[2026-01-23T22:11:11.648Z] ========================================
[2026-01-23T22:11:12.214Z] [BOT] ✅ Loaded V2 database: 2953 jobs
[2026-01-23T22:11:12.819Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T22:11:12.819Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T22:11:12.820Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T22:11:12.937Z] [BOT] ✅ Loaded pending queue: 2781 total (2761 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T22:11:12.940Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T22:11:12.940Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T22:11:12.941Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T22:11:12.941Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T22:11:12.942Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-23T22:11:12.942Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T22:11:12.943Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T22:11:12.944Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T22:11:12.944Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T22:11:12.961Z] [BOT ERROR] (node:2640) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T22:11:13.168Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T22:11:13.168Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T22:11:13.169Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T22:11:13.169Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-23T22:11:13.172Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T22:11:13.176Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-23T22:11:13.177Z] [BOT] ✅ Archiving complete: 11 archived, 2942 active
[2026-01-23T22:11:13.200Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:11:14.703Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T22:11:14.703Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T22:11:14.997Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T22:11:14.997Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T22:11:14.997Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-23T22:11:14.999Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-23T22:11:15.017Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:11:16.518Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T22:11:16.656Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T22:11:16.656Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T22:11:16.656Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-23T22:11:16.659Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-23T22:11:16.680Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:11:18.455Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T22:11:18.456Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T22:11:18.456Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-23T22:11:18.458Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-23T22:11:18.478Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:11:19.979Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T22:11:19.979Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T22:11:20.247Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T22:11:20.247Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T22:11:20.247Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T22:11:20.247Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-23T22:11:20.250Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-23T22:11:20.270Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:11:21.772Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T22:11:21.930Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T22:11:21.931Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T22:11:21.931Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-23T22:11:21.933Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-23T22:11:21.956Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:11:23.653Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T22:11:23.654Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T22:11:23.654Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T22:11:23.654Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-23T22:11:23.656Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-23T22:11:23.679Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:11:28.181Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T22:11:28.183Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T22:11:28.407Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T22:11:28.408Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T22:11:28.408Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-23T22:11:28.410Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-23T22:11:28.429Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:11:29.931Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T22:11:29.931Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T22:11:30.129Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T22:11:30.129Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T22:11:30.129Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-23T22:11:30.132Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-23T22:11:30.150Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:11:31.651Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T22:11:31.651Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T22:11:31.921Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T22:11:31.922Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T22:11:31.922Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-23T22:11:31.924Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-23T22:11:31.942Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:11:33.444Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T22:11:33.564Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T22:11:33.565Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T22:11:33.565Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-23T22:11:33.567Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-23T22:11:33.586Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:11:38.089Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T22:11:38.089Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T22:11:38.089Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T22:11:38.591Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T22:11:38.591Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T22:11:38.592Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T22:11:38.592Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-23T22:11:38.594Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-23T22:11:38.613Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T22:11:43.114Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T22:11:43.116Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T22:11:43.188Z] [BOT] 📂 Loaded 7531 existing routing entries
[2026-01-23T22:11:43.294Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-23T22:11:43.294Z] [BOT] New entries: 10
   Total entries: 7541
   Timestamp: 2026-01-23T22:11:43.246Z
[2026-01-23T22:11:43.294Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T22:11:43.295Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T22:11:43.295Z] [BOT] [STATS] Channel stats saved
[2026-01-23T22:11:45.315Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2640) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*