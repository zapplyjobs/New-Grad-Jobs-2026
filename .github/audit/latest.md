# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T15:47:01.810Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T15:46:26.190Z] ========================================
[2026-01-23T15:46:26.192Z] Discord Bot Execution Log
[2026-01-23T15:46:26.192Z] Environment: GitHub Actions
[2026-01-23T15:46:26.192Z] Node Version: v20.20.0
[2026-01-23T15:46:26.192Z] ========================================
[2026-01-23T15:46:26.192Z] Environment Variables Check:
[2026-01-23T15:46:26.192Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T15:46:26.192Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T15:46:26.192Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T15:46:26.192Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T15:46:26.192Z] 
Multi-Channel Configuration:
[2026-01-23T15:46:26.193Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T15:46:26.193Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T15:46:26.193Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T15:46:26.193Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T15:46:26.193Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T15:46:26.193Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T15:46:26.193Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T15:46:26.193Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T15:46:26.193Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T15:46:26.193Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T15:46:26.193Z] 
Data Files Check:
[2026-01-23T15:46:26.194Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T15:46:26.206Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1801716 bytes)
[2026-01-23T15:46:26.206Z] 
========================================
[2026-01-23T15:46:26.206Z] Starting Enhanced Discord Bot...
[2026-01-23T15:46:26.206Z] ========================================
[2026-01-23T15:46:26.767Z] [BOT] ✅ Loaded V2 database: 3087 jobs
[2026-01-23T15:46:27.564Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T15:46:27.565Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T15:46:27.565Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T15:46:27.682Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T15:46:27.688Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T15:46:27.689Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T15:46:27.689Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T15:46:27.690Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T15:46:27.690Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-23T15:46:27.690Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T15:46:27.693Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T15:46:27.694Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T15:46:27.694Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T15:46:27.717Z] [BOT ERROR] (node:2505) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T15:46:27.888Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T15:46:27.888Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T15:46:27.889Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T15:46:27.889Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:46:27.891Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:46:27.915Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:46:29.417Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T15:46:29.418Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T15:46:29.746Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T15:46:29.746Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T15:46:29.747Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T15:46:29.747Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:46:29.749Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:46:29.770Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:46:31.271Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T15:46:31.455Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T15:46:31.455Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T15:46:31.456Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:46:31.458Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:46:31.480Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:46:33.197Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T15:46:33.197Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T15:46:33.197Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:46:33.200Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:46:33.221Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:46:34.723Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T15:46:34.723Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T15:46:35.057Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T15:46:35.058Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:46:35.060Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:46:35.081Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:46:36.583Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T15:46:36.583Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T15:46:37.138Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T15:46:37.138Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T15:46:37.138Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T15:46:37.139Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:46:37.141Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:46:37.164Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:46:38.837Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T15:46:38.837Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T15:46:38.838Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T15:46:38.838Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:46:38.840Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:46:38.861Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:46:43.364Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T15:46:43.365Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T15:46:43.366Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T15:46:43.727Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T15:46:43.728Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:46:43.730Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:46:43.752Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:46:45.255Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T15:46:45.255Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T15:46:45.462Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T15:46:45.462Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T15:46:45.464Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:46:45.465Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:46:45.485Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:46:46.988Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-23T15:46:46.988Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T15:46:47.193Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T15:46:47.193Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T15:46:47.193Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:46:47.195Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:46:47.215Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:46:48.716Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T15:46:49.063Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T15:46:49.063Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T15:46:49.063Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:46:49.065Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:46:49.085Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:46:53.588Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T15:46:53.588Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T15:46:53.589Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T15:46:53.957Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T15:46:53.957Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T15:46:53.957Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:46:53.959Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:46:53.979Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:46:58.482Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T15:46:58.484Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T15:46:58.566Z] [BOT] 📂 Loaded 7281 existing routing entries
[2026-01-23T15:46:58.662Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7291
   Timestamp: 2026-01-23T15:46:58.629Z
[2026-01-23T15:46:58.662Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T15:46:58.662Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T15:46:58.663Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-23T15:47:00.681Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2505) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*