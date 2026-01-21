# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T07:32:42.572Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T07:32:14.665Z] ========================================
[2026-01-21T07:32:14.667Z] Discord Bot Execution Log
[2026-01-21T07:32:14.667Z] Environment: GitHub Actions
[2026-01-21T07:32:14.667Z] Node Version: v20.19.6
[2026-01-21T07:32:14.667Z] ========================================
[2026-01-21T07:32:14.667Z] Environment Variables Check:
[2026-01-21T07:32:14.667Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T07:32:14.668Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T07:32:14.668Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T07:32:14.668Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T07:32:14.668Z] 
Multi-Channel Configuration:
[2026-01-21T07:32:14.668Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T07:32:14.668Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T07:32:14.668Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T07:32:14.668Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T07:32:14.668Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T07:32:14.668Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T07:32:14.668Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T07:32:14.668Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T07:32:14.668Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T07:32:14.668Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T07:32:14.669Z] 
Data Files Check:
[2026-01-21T07:32:14.670Z] .github/data/new_jobs.json: ✅ Exists (10 items, 138417 bytes)
[2026-01-21T07:32:14.683Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1796565 bytes)
[2026-01-21T07:32:14.683Z] 
========================================
[2026-01-21T07:32:14.683Z] Starting Enhanced Discord Bot...
[2026-01-21T07:32:14.683Z] ========================================
[2026-01-21T07:32:15.213Z] [BOT] ✅ Loaded V2 database: 3158 jobs
[2026-01-21T07:32:15.693Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T07:32:15.693Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T07:32:15.694Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T07:32:15.826Z] [BOT] ✅ Loaded pending queue: 2743 total (2723 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Program Manager, Product & Platform Compliance at discord
[2026-01-21T07:32:15.831Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T07:32:15.831Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T07:32:15.832Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
📋 After multi-location grouping: 17 unique jobs to post
   (3 grouped as same job with different locations)
[2026-01-21T07:32:15.832Z] [BOT] 📍 2 jobs with multiple locations:
   - Android Software Engineer, Ad Formats @ reddit: san francisco, new york, chicago
   - iOS Software Engineer, Ad Formats @ reddit: new york, chicago
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-21T07:32:15.833Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T07:32:15.837Z] [BOT] 📌 Posting 9 jobs to #tech-jobs
[2026-01-21T07:32:15.837Z] [BOT] 📍 [ROUTING] "Senior Program Manager, Product & Platform Compliance" @ discord
   Category: TECH (matched: "project-management")
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:32:15.843Z] [BOT ERROR] (node:2418) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T07:32:16.063Z] [BOT] ✅ Posted message: Senior Program Manager, Product & Platform Compliance @ discord in #tech-jobs
  ✅ Industry: Senior Program Manager, Product & Platform Compliance @ discord
[2026-01-21T07:32:16.064Z] [BOT] 💾 Added channel posting: Senior Program Manager, Product & Platform Compliance @ discord → category channel (1 total channels)
[2026-01-21T07:32:16.064Z] [BOT] 💾 BEFORE ARCHIVING: 3159 jobs in database
[2026-01-21T07:32:16.067Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T07:32:16.071Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T07:32:16.071Z] [BOT] ✅ Archiving complete: 10 archived, 3149 active
[2026-01-21T07:32:16.092Z] [BOT] 💾 Saved posted_jobs.json: 3149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:17.595Z] [BOT] 💾 Marked as posted: Senior Program Manager, Product & Platform Compliance @ discord (instance #1)
[2026-01-21T07:32:17.595Z] [BOT] 💾 BEFORE ARCHIVING: 3150 jobs in database
[2026-01-21T07:32:17.597Z] [BOT] ✅ No jobs to archive (all 3150 jobs within 7-day window)
[2026-01-21T07:32:17.615Z] [BOT] 💾 Saved posted_jobs.json: 3150 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:17.615Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Mobile Architecture" @ discord
[2026-01-21T07:32:17.616Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:32:17.927Z] [BOT] ✅ Posted message: Senior Software Engineer, Mobile Architecture @ discord in #tech-jobs
  ✅ Industry: Senior Software Engineer, Mobile Architecture @ discord
[2026-01-21T07:32:17.928Z] [BOT] 💾 Added channel posting: Senior Software Engineer, Mobile Architecture @ discord → category channel (1 total channels)
[2026-01-21T07:32:17.928Z] [BOT] 💾 BEFORE ARCHIVING: 3151 jobs in database
[2026-01-21T07:32:17.930Z] [BOT] ✅ No jobs to archive (all 3151 jobs within 7-day window)
[2026-01-21T07:32:17.951Z] [BOT] 💾 Saved posted_jobs.json: 3151 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:19.452Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Mobile Architecture @ discord (instance #1)
[2026-01-21T07:32:19.453Z] [BOT] 💾 BEFORE ARCHIVING: 3152 jobs in database
[2026-01-21T07:32:19.455Z] [BOT] ✅ No jobs to archive (all 3152 jobs within 7-day window)
[2026-01-21T07:32:19.476Z] [BOT] 💾 Saved posted_jobs.json: 3152 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:19.476Z] [BOT] 📍 [ROUTING] "Senior Technical Program Manager, Safety" @ discord
[2026-01-21T07:32:19.476Z] [BOT] Category: TECH (matched: "project-management")
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:32:19.825Z] [BOT] ✅ Posted message: Senior Technical Program Manager, Safety @ discord in #tech-jobs
  ✅ Industry: Senior Technical Program Manager, Safety @ discord
[2026-01-21T07:32:19.826Z] [BOT] 💾 Added channel posting: Senior Technical Program Manager, Safety @ discord → category channel (1 total channels)
[2026-01-21T07:32:19.826Z] [BOT] 💾 BEFORE ARCHIVING: 3153 jobs in database
[2026-01-21T07:32:19.828Z] [BOT] ✅ No jobs to archive (all 3153 jobs within 7-day window)
[2026-01-21T07:32:19.849Z] [BOT] 💾 Saved posted_jobs.json: 3153 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:21.351Z] [BOT] 💾 Marked as posted: Senior Technical Program Manager, Safety @ discord (instance #1)
[2026-01-21T07:32:21.351Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-21T07:32:21.353Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-21T07:32:21.372Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:21.372Z] [BOT] 📍 [ROUTING] "Director of Engineering, Developer Ecosystem" @ discord
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:32:21.565Z] [BOT] ✅ Posted message: Director of Engineering, Developer Ecosystem @ discord in #tech-jobs
  ✅ Industry: Director of Engineering, Developer Ecosystem @ discord
[2026-01-21T07:32:21.566Z] [BOT] 💾 Added channel posting: Director of Engineering, Developer Ecosystem @ discord → category channel (1 total channels)
[2026-01-21T07:32:21.566Z] [BOT] 💾 BEFORE ARCHIVING: 3155 jobs in database
[2026-01-21T07:32:21.568Z] [BOT] ✅ No jobs to archive (all 3155 jobs within 7-day window)
[2026-01-21T07:32:21.587Z] [BOT] 💾 Saved posted_jobs.json: 3155 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:23.088Z] [BOT] 💾 Marked as posted: Director of Engineering, Developer Ecosystem @ discord (instance #1)
💾 BEFORE ARCHIVING: 3156 jobs in database
[2026-01-21T07:32:23.090Z] [BOT] ✅ No jobs to archive (all 3156 jobs within 7-day window)
[2026-01-21T07:32:23.110Z] [BOT] 💾 Saved posted_jobs.json: 3156 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:23.110Z] [BOT] 📍 [ROUTING] "Senior Software Engineer- Persistence Infrastructure" @ discord
[2026-01-21T07:32:23.110Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:32:23.349Z] [BOT] ✅ Posted message: Senior Software Engineer- Persistence Infrastructure @ discord in #tech-jobs
  ✅ Industry: Senior Software Engineer- Persistence Infrastructure @ discord
[2026-01-21T07:32:23.349Z] [BOT] 💾 Added channel posting: Senior Software Engineer- Persistence Infrastructure @ discord → category channel (1 total channels)
[2026-01-21T07:32:23.350Z] [BOT] 💾 BEFORE ARCHIVING: 3157 jobs in database
[2026-01-21T07:32:23.351Z] [BOT] ✅ No jobs to archive (all 3157 jobs within 7-day window)
[2026-01-21T07:32:23.370Z] [BOT] 💾 Saved posted_jobs.json: 3157 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:24.872Z] [BOT] 💾 Marked as posted: Senior Software Engineer- Persistence Infrastructure @ discord (instance #1)
[2026-01-21T07:32:24.872Z] [BOT] 💾 BEFORE ARCHIVING: 3158 jobs in database
[2026-01-21T07:32:24.874Z] [BOT] ✅ No jobs to archive (all 3158 jobs within 7-day window)
[2026-01-21T07:32:24.896Z] [BOT] 💾 Saved posted_jobs.json: 3158 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:24.897Z] [BOT] 📍 [ROUTING] "Software Engineer, Mobile" @ discord
[2026-01-21T07:32:24.897Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:32:25.021Z] [BOT] ✅ Posted message: Software Engineer, Mobile @ discord in #tech-jobs
  ✅ Industry: Software Engineer, Mobile @ discord
[2026-01-21T07:32:25.021Z] [BOT] 💾 Added channel posting: Software Engineer, Mobile @ discord → category channel (1 total channels)
[2026-01-21T07:32:25.022Z] [BOT] 💾 BEFORE ARCHIVING: 3159 jobs in database
[2026-01-21T07:32:25.024Z] [BOT] ✅ No jobs to archive (all 3159 jobs within 7-day window)
[2026-01-21T07:32:25.045Z] [BOT] 💾 Saved posted_jobs.json: 3159 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:26.547Z] [BOT] 💾 Marked as posted: Software Engineer, Mobile @ discord (instance #1)
[2026-01-21T07:32:26.547Z] [BOT] 💾 BEFORE ARCHIVING: 3160 jobs in database
[2026-01-21T07:32:26.549Z] [BOT] ✅ No jobs to archive (all 3160 jobs within 7-day window)
[2026-01-21T07:32:26.570Z] [BOT] 💾 Saved posted_jobs.json: 3160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:26.571Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Mobile Architecture" @ discord
[2026-01-21T07:32:26.571Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:32:26.745Z] [BOT] ✅ Posted message: Staff Software Engineer, Mobile Architecture @ discord in #tech-jobs
[2026-01-21T07:32:26.745Z] [BOT] ✅ Industry: Staff Software Engineer, Mobile Architecture @ discord
[2026-01-21T07:32:26.746Z] [BOT] 💾 Added channel posting: Staff Software Engineer, Mobile Architecture @ discord → category channel (1 total channels)
[2026-01-21T07:32:26.746Z] [BOT] 💾 BEFORE ARCHIVING: 3161 jobs in database
[2026-01-21T07:32:26.748Z] [BOT] ✅ No jobs to archive (all 3161 jobs within 7-day window)
[2026-01-21T07:32:26.767Z] [BOT] 💾 Saved posted_jobs.json: 3161 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:28.269Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Mobile Architecture @ discord (instance #1)
[2026-01-21T07:32:28.269Z] [BOT] 💾 BEFORE ARCHIVING: 3162 jobs in database
[2026-01-21T07:32:28.271Z] [BOT] ✅ No jobs to archive (all 3162 jobs within 7-day window)
[2026-01-21T07:32:28.291Z] [BOT] 💾 Saved posted_jobs.json: 3162 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:28.291Z] [BOT] 📍 [ROUTING] "Data Center Facility Operations Lead" @ anthropic
   Category: TECH (matched: "data")
[2026-01-21T07:32:28.291Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T07:32:28.424Z] [BOT] ✅ Posted message: Data Center Facility Operations Lead @ anthropic in #tech-jobs
  ✅ Industry: Data Center Facility Operations Lead @ anthropic
[2026-01-21T07:32:28.425Z] [BOT] 💾 Added channel posting: Data Center Facility Operations Lead @ anthropic → category channel (1 total channels)
[2026-01-21T07:32:28.425Z] [BOT] 💾 BEFORE ARCHIVING: 3163 jobs in database
[2026-01-21T07:32:28.427Z] [BOT] ✅ No jobs to archive (all 3163 jobs within 7-day window)
[2026-01-21T07:32:28.447Z] [BOT] 💾 Saved posted_jobs.json: 3163 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:29.948Z] [BOT] 💾 Marked as posted: Data Center Facility Operations Lead @ anthropic (instance #1)
[2026-01-21T07:32:29.948Z] [BOT] 💾 BEFORE ARCHIVING: 3164 jobs in database
[2026-01-21T07:32:29.950Z] [BOT] ✅ No jobs to archive (all 3164 jobs within 7-day window)
[2026-01-21T07:32:29.968Z] [BOT] 💾 Saved posted_jobs.json: 3164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:29.969Z] [BOT] 📍 [ROUTING] "Data Center Strategic Sourcing Lead" @ anthropic
   Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:32:30.181Z] [BOT] ✅ Posted message: Data Center Strategic Sourcing Lead @ anthropic in #tech-jobs
  ✅ Industry: Data Center Strategic Sourcing Lead @ anthropic
[2026-01-21T07:32:30.182Z] [BOT] 💾 Added channel posting: Data Center Strategic Sourcing Lead @ anthropic → category channel (1 total channels)
[2026-01-21T07:32:30.182Z] [BOT] 💾 BEFORE ARCHIVING: 3165 jobs in database
[2026-01-21T07:32:30.184Z] [BOT] ✅ No jobs to archive (all 3165 jobs within 7-day window)
[2026-01-21T07:32:30.202Z] [BOT] 💾 Saved posted_jobs.json: 3165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:31.704Z] [BOT] 💾 Marked as posted: Data Center Strategic Sourcing Lead @ anthropic (instance #1)
[2026-01-21T07:32:31.705Z] [BOT] 💾 BEFORE ARCHIVING: 3166 jobs in database
[2026-01-21T07:32:31.706Z] [BOT] ✅ No jobs to archive (all 3166 jobs within 7-day window)
[2026-01-21T07:32:31.728Z] [BOT] 💾 Saved posted_jobs.json: 3166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:34.728Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-21T07:32:34.728Z] [BOT] 📍 [ROUTING] "Google Partnerships Manager, Digital Native & Startups" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T07:32:34.729Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-21T07:32:34.890Z] [BOT] ✅ Posted message: Google Partnerships Manager, Digital Native & Startups @ anthropic in #ai-jobs
  ✅ Industry: Google Partnerships Manager, Digital Native & Startups @ anthropic
[2026-01-21T07:32:34.891Z] [BOT] 💾 Added channel posting: Google Partnerships Manager, Digital Native & Startups @ anthropic → category channel (1 total channels)
[2026-01-21T07:32:34.891Z] [BOT] 💾 BEFORE ARCHIVING: 3167 jobs in database
[2026-01-21T07:32:34.894Z] [BOT] ✅ No jobs to archive (all 3167 jobs within 7-day window)
[2026-01-21T07:32:34.913Z] [BOT] 💾 Saved posted_jobs.json: 3167 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:36.415Z] [BOT] 💾 Marked as posted: Google Partnerships Manager, Digital Native & Startups @ anthropic (instance #1)
[2026-01-21T07:32:36.415Z] [BOT] 💾 BEFORE ARCHIVING: 3168 jobs in database
[2026-01-21T07:32:36.417Z] [BOT] ✅ No jobs to archive (all 3168 jobs within 7-day window)
[2026-01-21T07:32:36.438Z] [BOT] 💾 Saved posted_jobs.json: 3168 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:32:39.438Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T07:32:39.439Z] [BOT] ⏭️  Skipping duplicate: JID_e59cfc28 (posted within 7 days)
[2026-01-21T07:32:39.439Z] [BOT] ⏭️  Skipping duplicate: JID_b719c3d5 (posted within 7 days)
[2026-01-21T07:32:39.439Z] [BOT] ⏭️  Skipping duplicate: JID_fce8d8c4 (posted within 7 days)
[2026-01-21T07:32:39.440Z] [BOT] ⏭️  Skipping duplicate: JID_1be29ec0 (posted within 7 days)
[2026-01-21T07:32:39.440Z] [BOT] ⏭️  Skipping duplicate: JID_3441115b (posted within 7 days)
[2026-01-21T07:32:39.440Z] [BOT] ⏭️  Skipping duplicate: JID_041d5ff5 (posted within 7 days)
[2026-01-21T07:32:39.440Z] [BOT] ⏭️  Skipping duplicate: JID_c9122c3a (posted within 7 days)
[2026-01-21T07:32:39.440Z] [BOT] ⏭️  Skipping duplicate: JID_64549b88 (posted within 7 days)
[2026-01-21T07:32:39.440Z] [BOT] ⏭️  Skipping duplicate: JID_bd922941 (posted within 7 days)
[2026-01-21T07:32:39.440Z] [BOT] ⏭️  Skipping duplicate: JID_a100ab7f (posted within 7 days)
[2026-01-21T07:32:39.556Z] [BOT] ✅ Loaded pending queue: 2743 total (2723 pending, 20 enriched, 0 posted)
[2026-01-21T07:32:39.736Z] [BOT] ✅ Saved pending queue: 2743 total (2723 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-21T07:32:39.736Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T07:32:39.806Z] [BOT] 📂 Loaded 5735 existing routing entries
[2026-01-21T07:32:39.883Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5745
[2026-01-21T07:32:39.883Z] [BOT] Timestamp: 2026-01-21T07:32:39.863Z
[2026-01-21T07:32:39.883Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T07:32:39.884Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-21T07:32:39.884Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 2
   Top channels:
     1. #tech-jobs: 9 posts
     2. #ai-jobs: 1 posts
[2026-01-21T07:32:39.884Z] [BOT] [STATS] Channel stats saved
[2026-01-21T07:32:41.911Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2418) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*