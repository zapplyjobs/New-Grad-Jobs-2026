# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T09:59:27.044Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T09:58:50.737Z] ========================================
[2026-01-23T09:58:50.739Z] Discord Bot Execution Log
[2026-01-23T09:58:50.739Z] Environment: GitHub Actions
[2026-01-23T09:58:50.739Z] Node Version: v20.20.0
[2026-01-23T09:58:50.739Z] ========================================
[2026-01-23T09:58:50.739Z] Environment Variables Check:
[2026-01-23T09:58:50.739Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T09:58:50.739Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T09:58:50.739Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T09:58:50.740Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T09:58:50.740Z] 
Multi-Channel Configuration:
[2026-01-23T09:58:50.740Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T09:58:50.740Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T09:58:50.740Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T09:58:50.740Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T09:58:50.740Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T09:58:50.740Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T09:58:50.740Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T09:58:50.740Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T09:58:50.740Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T09:58:50.740Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T09:58:50.740Z] 
Data Files Check:
[2026-01-23T09:58:50.741Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T09:58:50.753Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1806853 bytes)
[2026-01-23T09:58:50.753Z] 
========================================
[2026-01-23T09:58:50.753Z] Starting Enhanced Discord Bot...
[2026-01-23T09:58:50.753Z] ========================================
[2026-01-23T09:58:51.308Z] [BOT] ✅ Loaded V2 database: 3096 jobs
[2026-01-23T09:58:51.969Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T09:58:51.970Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T09:58:51.970Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T09:58:52.098Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T09:58:52.102Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T09:58:52.102Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T09:58:52.103Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T09:58:52.104Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T09:58:52.106Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T09:58:52.106Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T09:58:52.107Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:58:52.124Z] [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T09:58:52.330Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T09:58:52.330Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T09:58:52.331Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T09:58:52.331Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:58:52.334Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T09:58:52.339Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-23T09:58:52.339Z] [BOT] ✅ Archiving complete: 1 archived, 3095 active
[2026-01-23T09:58:52.360Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:58:53.862Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:58:54.032Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T09:58:54.033Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T09:58:54.033Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T09:58:54.033Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T09:58:54.036Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T09:58:54.055Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:58:55.557Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T09:58:55.557Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T09:58:55.782Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T09:58:55.782Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T09:58:55.783Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T09:58:55.783Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T09:58:55.785Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T09:58:55.806Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:58:57.636Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T09:58:57.636Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T09:58:57.637Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T09:58:57.637Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T09:58:57.639Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T09:58:57.660Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:58:59.162Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T09:58:59.163Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T09:58:59.326Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T09:58:59.326Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T09:58:59.327Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T09:58:59.327Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T09:58:59.329Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T09:58:59.351Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:59:00.852Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T09:59:00.852Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:59:01.134Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T09:59:01.135Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T09:59:01.135Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T09:59:01.137Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T09:59:01.160Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:59:02.895Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T09:59:02.896Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T09:59:02.896Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T09:59:02.899Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T09:59:02.920Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:59:07.422Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T09:59:07.423Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:59:07.680Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T09:59:07.681Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T09:59:07.681Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T09:59:07.683Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T09:59:07.705Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:59:09.209Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T09:59:09.209Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:59:09.456Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T09:59:09.456Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T09:59:09.457Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T09:59:09.457Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T09:59:09.459Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T09:59:09.479Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:59:10.981Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:59:10.982Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T09:59:12.782Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T09:59:12.782Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T09:59:12.783Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T09:59:12.784Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T09:59:12.804Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:59:14.306Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:59:14.612Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T09:59:14.613Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T09:59:14.613Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T09:59:14.615Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T09:59:14.634Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:59:19.136Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T09:59:19.136Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T09:59:19.136Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T09:59:19.478Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T09:59:19.478Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T09:59:19.478Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T09:59:19.480Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T09:59:19.498Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:59:24.002Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T09:59:24.004Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T09:59:24.087Z] [BOT] 📂 Loaded 7141 existing routing entries
[2026-01-23T09:59:24.180Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T09:59:24.180Z] [BOT] Total entries: 7151
   Timestamp: 2026-01-23T09:59:24.149Z
[2026-01-23T09:59:24.181Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T09:59:24.181Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T09:59:24.181Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
[2026-01-23T09:59:24.181Z] [BOT] Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T09:59:24.182Z] [BOT] [STATS] Channel stats saved
[2026-01-23T09:59:26.199Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*