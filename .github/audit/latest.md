# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T06:31:48.404Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T06:31:09.251Z] ========================================
[2026-01-22T06:31:09.253Z] Discord Bot Execution Log
[2026-01-22T06:31:09.253Z] Environment: GitHub Actions
[2026-01-22T06:31:09.253Z] Node Version: v20.19.6
[2026-01-22T06:31:09.253Z] ========================================
[2026-01-22T06:31:09.253Z] Environment Variables Check:
[2026-01-22T06:31:09.253Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T06:31:09.253Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T06:31:09.253Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T06:31:09.253Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T06:31:09.253Z] 
Multi-Channel Configuration:
[2026-01-22T06:31:09.253Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T06:31:09.253Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T06:31:09.254Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T06:31:09.254Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T06:31:09.254Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T06:31:09.254Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T06:31:09.254Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T06:31:09.254Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T06:31:09.254Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T06:31:09.254Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T06:31:09.254Z] 
Data Files Check:
[2026-01-22T06:31:09.255Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T06:31:09.268Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2079519 bytes)
[2026-01-22T06:31:09.268Z] 
========================================
[2026-01-22T06:31:09.268Z] Starting Enhanced Discord Bot...
[2026-01-22T06:31:09.268Z] ========================================
[2026-01-22T06:31:09.821Z] [BOT] ✅ Loaded V2 database: 3575 jobs
[2026-01-22T06:31:10.400Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T06:31:10.400Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T06:31:10.400Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T06:31:10.514Z] [BOT] ✅ Loaded pending queue: 2779 total (2759 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T06:31:10.519Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T06:31:10.520Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T06:31:10.520Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T06:31:10.521Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T06:31:10.521Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T06:31:10.524Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T06:31:10.525Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T06:31:10.525Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T06:31:10.542Z] [BOT ERROR] (node:2396) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T06:31:11.003Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T06:31:11.003Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T06:31:11.004Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T06:31:11.005Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-22T06:31:11.008Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T06:31:11.013Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-22T06:31:11.013Z] [BOT] ✅ Archiving complete: 10 archived, 3565 active
[2026-01-22T06:31:11.037Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:12.538Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T06:31:12.539Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T06:31:12.666Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T06:31:12.666Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T06:31:12.667Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:12.669Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:12.690Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:14.347Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T06:31:14.348Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T06:31:14.348Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T06:31:14.348Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:14.351Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:14.375Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:15.876Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T06:31:15.876Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T06:31:16.056Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T06:31:16.057Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T06:31:16.057Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T06:31:16.058Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:16.060Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:16.083Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:17.781Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T06:31:17.781Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T06:31:17.782Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:17.784Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:17.805Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:19.306Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T06:31:19.306Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T06:31:19.461Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T06:31:19.462Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T06:31:19.462Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T06:31:19.462Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:19.465Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:19.492Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:20.994Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T06:31:20.994Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T06:31:21.184Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T06:31:21.185Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T06:31:21.185Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:21.187Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:21.210Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:22.968Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T06:31:22.969Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T06:31:22.969Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:22.971Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:22.994Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:27.497Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T06:31:27.498Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T06:31:27.498Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T06:31:27.734Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T06:31:27.735Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T06:31:27.735Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T06:31:27.735Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:27.738Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:27.758Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:29.261Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T06:31:29.421Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T06:31:29.422Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T06:31:29.422Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:29.424Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:29.445Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:31.157Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T06:31:31.158Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T06:31:31.158Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:31.160Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:31.181Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:32.683Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T06:31:32.683Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T06:31:32.926Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T06:31:32.927Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T06:31:32.927Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:32.929Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:32.950Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:34.451Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T06:31:34.451Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T06:31:34.617Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T06:31:34.617Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T06:31:34.617Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:34.620Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:34.640Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:36.255Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T06:31:36.255Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T06:31:36.256Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T06:31:36.256Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:36.258Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:36.279Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:40.781Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T06:31:40.781Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T06:31:40.781Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T06:31:41.042Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T06:31:41.042Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T06:31:41.042Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T06:31:41.042Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:31:41.044Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-22T06:31:41.065Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:31:45.566Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T06:31:45.568Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T06:31:45.648Z] [BOT] 📂 Loaded 6351 existing routing entries
[2026-01-22T06:31:45.743Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6361
[2026-01-22T06:31:45.743Z] [BOT] Timestamp: 2026-01-22T06:31:45.713Z
[2026-01-22T06:31:45.744Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T06:31:45.744Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T06:31:45.744Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T06:31:45.745Z] [BOT] [STATS] Channel stats saved
[2026-01-22T06:31:47.763Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2396) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*