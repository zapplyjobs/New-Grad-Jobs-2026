# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T15:16:19.350Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T15:15:38.934Z] ========================================
[2026-01-22T15:15:38.936Z] Discord Bot Execution Log
[2026-01-22T15:15:38.936Z] Environment: GitHub Actions
[2026-01-22T15:15:38.936Z] Node Version: v20.19.6
[2026-01-22T15:15:38.936Z] ========================================
[2026-01-22T15:15:38.937Z] Environment Variables Check:
[2026-01-22T15:15:38.937Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T15:15:38.937Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T15:15:38.937Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T15:15:38.937Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T15:15:38.937Z] 
Multi-Channel Configuration:
[2026-01-22T15:15:38.937Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T15:15:38.937Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T15:15:38.938Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T15:15:38.938Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T15:15:38.938Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T15:15:38.938Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T15:15:38.938Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T15:15:38.938Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T15:15:38.938Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T15:15:38.938Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T15:15:38.938Z] 
Data Files Check:
[2026-01-22T15:15:38.939Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T15:15:38.952Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2006790 bytes)
[2026-01-22T15:15:38.953Z] 
========================================
[2026-01-22T15:15:38.953Z] Starting Enhanced Discord Bot...
[2026-01-22T15:15:38.953Z] ========================================
[2026-01-22T15:15:39.510Z] [BOT] ✅ Loaded V2 database: 3449 jobs
[2026-01-22T15:15:40.071Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T15:15:40.071Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T15:15:40.072Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T15:15:40.200Z] [BOT] ✅ Loaded pending queue: 2778 total (2758 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T15:15:40.204Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T15:15:40.205Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T15:15:40.205Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T15:15:40.206Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T15:15:40.206Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T15:15:40.209Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T15:15:40.210Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T15:15:40.210Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T15:15:40.228Z] [BOT ERROR] (node:2379) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T15:15:40.438Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T15:15:40.438Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T15:15:40.439Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T15:15:40.439Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T15:15:40.442Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T15:15:40.447Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-22T15:15:40.448Z] [BOT] ✅ Archiving complete: 1 archived, 3448 active
[2026-01-22T15:15:40.478Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
[2026-01-22T15:15:40.478Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T15:15:41.980Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T15:15:41.980Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T15:15:42.222Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T15:15:42.223Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T15:15:42.223Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:15:42.226Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:15:42.248Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:15:44.081Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T15:15:44.081Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T15:15:44.082Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T15:15:44.082Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:15:44.086Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:15:44.112Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:15:45.614Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T15:15:45.614Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T15:15:45.805Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T15:15:45.805Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T15:15:45.805Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:15:45.808Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:15:45.832Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:15:47.750Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T15:15:47.751Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T15:15:47.751Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:15:47.753Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:15:47.774Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:15:49.276Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T15:15:49.276Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T15:15:49.582Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T15:15:49.583Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T15:15:49.583Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:15:49.586Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:15:49.612Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:15:51.114Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T15:15:51.114Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T15:15:51.463Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T15:15:51.464Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T15:15:51.464Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:15:51.466Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:15:51.489Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:15:53.196Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T15:15:53.197Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T15:15:53.197Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T15:15:53.197Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:15:53.199Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:15:53.223Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:15:57.724Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T15:15:57.726Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T15:15:57.726Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T15:15:57.951Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T15:15:57.951Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T15:15:57.952Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T15:15:57.952Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:15:57.954Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:15:57.975Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:15:59.477Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T15:15:59.478Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T15:15:59.707Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T15:15:59.708Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T15:15:59.708Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T15:15:59.708Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:15:59.710Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:15:59.731Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:16:01.447Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T15:16:01.447Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T15:16:01.447Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T15:16:01.447Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:16:01.449Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:16:01.470Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:16:02.972Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T15:16:02.972Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T15:16:03.335Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T15:16:03.335Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T15:16:03.336Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:16:03.338Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:16:03.358Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:16:04.860Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T15:16:04.860Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T15:16:05.172Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T15:16:05.172Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T15:16:05.173Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T15:16:05.173Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:16:05.175Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:16:05.197Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:16:06.890Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T15:16:06.890Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T15:16:06.890Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:16:06.893Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:16:06.914Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:16:11.416Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T15:16:11.416Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T15:16:11.416Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T15:16:11.678Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T15:16:11.679Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T15:16:11.679Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:16:11.681Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-22T15:16:11.704Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:16:16.206Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T15:16:16.208Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T15:16:16.296Z] [BOT] 📂 Loaded 6611 existing routing entries
[2026-01-22T15:16:16.395Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T15:16:16.395Z] [BOT] Total entries: 6621
   Timestamp: 2026-01-22T15:16:16.362Z
[2026-01-22T15:16:16.396Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T15:16:16.396Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T15:16:16.396Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T15:16:16.396Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-22T15:16:16.396Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T15:16:16.396Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T15:16:16.397Z] [BOT] [STATS] Channel stats saved
[2026-01-22T15:16:18.417Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2379) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*