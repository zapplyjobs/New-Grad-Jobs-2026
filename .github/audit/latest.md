# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T23:43:47.363Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T23:43:09.056Z] ========================================
[2026-01-20T23:43:09.058Z] Discord Bot Execution Log
[2026-01-20T23:43:09.058Z] Environment: GitHub Actions
[2026-01-20T23:43:09.058Z] Node Version: v20.19.6
[2026-01-20T23:43:09.058Z] ========================================
[2026-01-20T23:43:09.058Z] Environment Variables Check:
[2026-01-20T23:43:09.058Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T23:43:09.058Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T23:43:09.058Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T23:43:09.059Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T23:43:09.059Z] 
Multi-Channel Configuration:
[2026-01-20T23:43:09.059Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T23:43:09.059Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T23:43:09.059Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T23:43:09.059Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T23:43:09.059Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T23:43:09.059Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T23:43:09.059Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T23:43:09.059Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T23:43:09.059Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T23:43:09.059Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T23:43:09.059Z] 
Data Files Check:
[2026-01-20T23:43:09.060Z] .github/data/new_jobs.json: ✅ Exists (10 items, 64925 bytes)
[2026-01-20T23:43:09.071Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1709270 bytes)
[2026-01-20T23:43:09.071Z] 
========================================
[2026-01-20T23:43:09.071Z] Starting Enhanced Discord Bot...
[2026-01-20T23:43:09.071Z] ========================================
[2026-01-20T23:43:09.613Z] [BOT] ✅ Loaded V2 database: 3050 jobs
[2026-01-20T23:43:10.441Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T23:43:10.442Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T23:43:10.442Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T23:43:10.558Z] [BOT] ✅ Loaded pending queue: 2739 total (2719 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Pattern Data
[2026-01-20T23:43:10.563Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T23:43:10.563Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T23:43:10.563Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T23:43:10.564Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-20T23:43:10.564Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-20T23:43:10.565Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: salt lake city, ut united states, tempe, az united states, austin, tx united states, new york city, ny united states
   - National Channel Sales Manager, Convergint (East) @ verkada: atlanta, ga united states, jacksonville, fl united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T23:43:10.568Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-20T23:43:10.568Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_4288ade7 Data
[2026-01-20T23:43:10.569Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:43:10.573Z] [BOT ERROR] (node:2666) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T23:43:10.877Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_4288ade7 Data in #tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_4288ade7 Data
[2026-01-20T23:43:10.878Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_4288ade7 Data → category channel (1 total channels)
[2026-01-20T23:43:10.878Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-20T23:43:10.881Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T23:43:10.885Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-20T23:43:10.885Z] [BOT] ✅ Archiving complete: 10 archived, 3041 active
[2026-01-20T23:43:10.905Z] [BOT] 💾 Saved posted_jobs.json: 3041 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:12.555Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_4288ade7 Data in #JID_ead674af
[2026-01-20T23:43:12.555Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T23:43:12.556Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_4288ade7 Data → location channel (2 total channels)
[2026-01-20T23:43:12.556Z] [BOT] 💾 BEFORE ARCHIVING: 3041 jobs in database
[2026-01-20T23:43:12.558Z] [BOT] ✅ No jobs to archive (all 3041 jobs within 7-day window)
[2026-01-20T23:43:12.575Z] [BOT] 💾 Saved posted_jobs.json: 3041 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:14.077Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_4288ade7 Data (instance #1)
[2026-01-20T23:43:14.077Z] [BOT] 💾 BEFORE ARCHIVING: 3042 jobs in database
[2026-01-20T23:43:14.079Z] [BOT] ✅ No jobs to archive (all 3042 jobs within 7-day window)
[2026-01-20T23:43:14.100Z] [BOT] 💾 Saved posted_jobs.json: 3042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:14.101Z] [BOT] 📍 [ROUTING] "Software Engineer - Distributed Systems - Platform Software" @ ORG_8f1bec75
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:43:14.221Z] [BOT] ✅ Posted message: Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75 in #tech-jobs
[2026-01-20T23:43:14.222Z] [BOT] ✅ Industry: Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75
[2026-01-20T23:43:14.222Z] [BOT] 💾 Added channel posting: Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75 → category channel (1 total channels)
[2026-01-20T23:43:14.222Z] [BOT] 💾 BEFORE ARCHIVING: 3043 jobs in database
[2026-01-20T23:43:14.224Z] [BOT] ✅ No jobs to archive (all 3043 jobs within 7-day window)
[2026-01-20T23:43:14.245Z] [BOT] 💾 Saved posted_jobs.json: 3043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:15.746Z] [BOT] 💾 Marked as posted: Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75 (instance #1)
[2026-01-20T23:43:15.746Z] [BOT] 💾 BEFORE ARCHIVING: 3044 jobs in database
[2026-01-20T23:43:15.748Z] [BOT] ✅ No jobs to archive (all 3044 jobs within 7-day window)
[2026-01-20T23:43:15.770Z] [BOT] 💾 Saved posted_jobs.json: 3044 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:15.770Z] [BOT] 📍 [ROUTING] "Software Engineer - Starlink Ground Network" @ ORG_afd623b1
[2026-01-20T23:43:15.770Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:43:15.975Z] [BOT] ✅ Posted message: Software Engineer - Starlink Ground Network @ ORG_afd623b1 in #tech-jobs
  ✅ Industry: Software Engineer - Starlink Ground Network @ ORG_afd623b1
[2026-01-20T23:43:15.976Z] [BOT] 💾 Added channel posting: Software Engineer - Starlink Ground Network @ ORG_afd623b1 → category channel (1 total channels)
[2026-01-20T23:43:15.976Z] [BOT] 💾 BEFORE ARCHIVING: 3045 jobs in database
[2026-01-20T23:43:15.978Z] [BOT] ✅ No jobs to archive (all 3045 jobs within 7-day window)
[2026-01-20T23:43:15.995Z] [BOT] 💾 Saved posted_jobs.json: 3045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:17.496Z] [BOT] 💾 Marked as posted: Software Engineer - Starlink Ground Network @ ORG_afd623b1 (instance #1)
[2026-01-20T23:43:17.496Z] [BOT] 💾 BEFORE ARCHIVING: 3046 jobs in database
[2026-01-20T23:43:17.498Z] [BOT] ✅ No jobs to archive (all 3046 jobs within 7-day window)
[2026-01-20T23:43:17.517Z] [BOT] 💾 Saved posted_jobs.json: 3046 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:17.517Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b344d80e Job Sauce
   Category: TECH (matched: "software")
[2026-01-20T23:43:17.517Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T23:43:17.735Z] [BOT] ✅ Posted message: Software Engineer @ ORG_b344d80e Job Sauce in #tech-jobs
[2026-01-20T23:43:17.735Z] [BOT] ✅ Industry: Software Engineer @ ORG_b344d80e Job Sauce
[2026-01-20T23:43:17.736Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_b344d80e Job Sauce → category channel (1 total channels)
[2026-01-20T23:43:17.736Z] [BOT] 💾 BEFORE ARCHIVING: 3047 jobs in database
[2026-01-20T23:43:17.738Z] [BOT] ✅ No jobs to archive (all 3047 jobs within 7-day window)
[2026-01-20T23:43:17.756Z] [BOT] 💾 Saved posted_jobs.json: 3047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:19.257Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_b344d80e Job Sauce (instance #1)
[2026-01-20T23:43:19.258Z] [BOT] 💾 BEFORE ARCHIVING: 3048 jobs in database
[2026-01-20T23:43:19.260Z] [BOT] ✅ No jobs to archive (all 3048 jobs within 7-day window)
[2026-01-20T23:43:19.281Z] [BOT] 💾 Saved posted_jobs.json: 3048 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:19.282Z] [BOT] 📍 [ROUTING] "Applications Development Intermediate Programmer Analyst" @ ORG_e9591c52
[2026-01-20T23:43:19.282Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:43:19.490Z] [BOT] ✅ Posted message: Applications Development Intermediate Programmer Analyst @ ORG_e9591c52 in #tech-jobs
[2026-01-20T23:43:19.490Z] [BOT] ✅ Industry: Applications Development Intermediate Programmer Analyst @ ORG_e9591c52
[2026-01-20T23:43:19.491Z] [BOT] 💾 Added channel posting: Applications Development Intermediate Programmer Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-20T23:43:19.491Z] [BOT] 💾 BEFORE ARCHIVING: 3049 jobs in database
[2026-01-20T23:43:19.493Z] [BOT] ✅ No jobs to archive (all 3049 jobs within 7-day window)
[2026-01-20T23:43:19.515Z] [BOT] 💾 Saved posted_jobs.json: 3049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:21.203Z] [BOT] ✅ Posted message: Applications Development Intermediate Programmer Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-20T23:43:21.204Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T23:43:21.204Z] [BOT] 💾 Added channel posting: Applications Development Intermediate Programmer Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-20T23:43:21.204Z] [BOT] 💾 BEFORE ARCHIVING: 3049 jobs in database
[2026-01-20T23:43:21.206Z] [BOT] ✅ No jobs to archive (all 3049 jobs within 7-day window)
[2026-01-20T23:43:21.227Z] [BOT] 💾 Saved posted_jobs.json: 3049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:22.728Z] [BOT] 💾 Marked as posted: Applications Development Intermediate Programmer Analyst @ ORG_e9591c52 (instance #1)
[2026-01-20T23:43:22.728Z] [BOT] 💾 BEFORE ARCHIVING: 3050 jobs in database
[2026-01-20T23:43:22.730Z] [BOT] ✅ No jobs to archive (all 3050 jobs within 7-day window)
[2026-01-20T23:43:22.751Z] [BOT] 💾 Saved posted_jobs.json: 3050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:22.752Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Backend" @ ORG_b18a8c08
   Category: TECH (matched: "software")
[2026-01-20T23:43:22.752Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T23:43:22.919Z] [BOT] ✅ Posted message: Software Engineer 1 - Backend @ ORG_b18a8c08 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Backend @ ORG_b18a8c08
[2026-01-20T23:43:22.920Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Backend @ ORG_b18a8c08 → category channel (1 total channels)
[2026-01-20T23:43:22.920Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-20T23:43:22.922Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-20T23:43:22.940Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:24.719Z] [BOT] ✅ Posted message: Software Engineer 1 - Backend @ ORG_b18a8c08 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T23:43:24.720Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Backend @ ORG_b18a8c08 → location channel (2 total channels)
[2026-01-20T23:43:24.720Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-20T23:43:24.722Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-20T23:43:24.742Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:26.243Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Backend @ ORG_b18a8c08 (instance #1)
💾 BEFORE ARCHIVING: 3052 jobs in database
[2026-01-20T23:43:26.245Z] [BOT] ✅ No jobs to archive (all 3052 jobs within 7-day window)
[2026-01-20T23:43:26.265Z] [BOT] 💾 Saved posted_jobs.json: 3052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:29.265Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-20T23:43:29.266Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), Salt Lake City" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-20T23:43:29.266Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-20T23:43:29.491Z] [BOT] ✅ Posted message: Sales Development Representative (AAE), Salt Lake City @ verkada in #finance-jobs
[2026-01-20T23:43:29.491Z] [BOT] ✅ Industry: Sales Development Representative (AAE), Salt Lake City @ verkada
[2026-01-20T23:43:29.492Z] [BOT] 💾 Added channel posting: Sales Development Representative (AAE), Salt Lake City @ verkada → category channel (1 total channels)
[2026-01-20T23:43:29.492Z] [BOT] 💾 BEFORE ARCHIVING: 3053 jobs in database
[2026-01-20T23:43:29.494Z] [BOT] ✅ No jobs to archive (all 3053 jobs within 7-day window)
[2026-01-20T23:43:29.513Z] [BOT] 💾 Saved posted_jobs.json: 3053 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:31.014Z] [BOT] 💾 Marked as posted: Sales Development Representative (AAE), Salt Lake City @ verkada (instance #1)
[2026-01-20T23:43:31.015Z] [BOT] 💾 BEFORE ARCHIVING: 3054 jobs in database
[2026-01-20T23:43:31.016Z] [BOT] ✅ No jobs to archive (all 3054 jobs within 7-day window)
[2026-01-20T23:43:31.035Z] [BOT] 💾 Saved posted_jobs.json: 3054 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:31.035Z] [BOT] 📍 [ROUTING] "Senior Manager, Stock Administration" @ discord
[2026-01-20T23:43:31.035Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T23:43:31.318Z] [BOT] ✅ Posted message: Senior Manager, Stock Administration @ discord in #finance-jobs
  ✅ Industry: Senior Manager, Stock Administration @ discord
[2026-01-20T23:43:31.319Z] [BOT] 💾 Added channel posting: Senior Manager, Stock Administration @ discord → category channel (1 total channels)
[2026-01-20T23:43:31.319Z] [BOT] 💾 BEFORE ARCHIVING: 3055 jobs in database
[2026-01-20T23:43:31.320Z] [BOT] ✅ No jobs to archive (all 3055 jobs within 7-day window)
[2026-01-20T23:43:31.339Z] [BOT] 💾 Saved posted_jobs.json: 3055 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:32.841Z] [BOT] 💾 Marked as posted: Senior Manager, Stock Administration @ discord (instance #1)
[2026-01-20T23:43:32.842Z] [BOT] 💾 BEFORE ARCHIVING: 3056 jobs in database
[2026-01-20T23:43:32.844Z] [BOT] ✅ No jobs to archive (all 3056 jobs within 7-day window)
[2026-01-20T23:43:32.862Z] [BOT] 💾 Saved posted_jobs.json: 3056 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:35.863Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-20T23:43:35.863Z] [BOT] 📍 [ROUTING] "Early Career Talent - Applications Engineer - Data Science/Automation" @ ORG_d7d2f0ff Digital
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-20T23:43:35.863Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-20T23:43:36.172Z] [BOT] ✅ Posted message: Early Career Talent - Applications Engineer - Data Science/Automation @ ORG_d7d2f0ff Digital in #ai-jobs
  ✅ Industry: Early Career Talent - Applications Engineer - Data Science/Automation @ ORG_d7d2f0ff Digital
[2026-01-20T23:43:36.173Z] [BOT] 💾 Added channel posting: Early Career Talent - Applications Engineer - Data Science/Automation @ ORG_d7d2f0ff Digital → category channel (1 total channels)
[2026-01-20T23:43:36.173Z] [BOT] 💾 BEFORE ARCHIVING: 3057 jobs in database
[2026-01-20T23:43:36.175Z] [BOT] ✅ No jobs to archive (all 3057 jobs within 7-day window)
[2026-01-20T23:43:36.195Z] [BOT] 💾 Saved posted_jobs.json: 3057 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:37.697Z] [BOT] 💾 Marked as posted: Early Career Talent - Applications Engineer - Data Science/Automation @ ORG_d7d2f0ff Digital (instance #1)
[2026-01-20T23:43:37.697Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-20T23:43:37.699Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-20T23:43:37.720Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:37.720Z] [BOT] 📍 [ROUTING] "Business Data Analyst" @ ORG_d31dc978
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-20T23:43:37.906Z] [BOT] ✅ Posted message: Business Data Analyst @ ORG_d31dc978 in #ai-jobs
  ✅ Industry: Business Data Analyst @ ORG_d31dc978
[2026-01-20T23:43:37.907Z] [BOT] 💾 Added channel posting: Business Data Analyst @ ORG_d31dc978 → category channel (1 total channels)
[2026-01-20T23:43:37.907Z] [BOT] 💾 BEFORE ARCHIVING: 3059 jobs in database
[2026-01-20T23:43:37.909Z] [BOT] ✅ No jobs to archive (all 3059 jobs within 7-day window)
[2026-01-20T23:43:37.929Z] [BOT] 💾 Saved posted_jobs.json: 3059 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:39.714Z] [BOT] ✅ Posted message: Business Data Analyst @ ORG_d31dc978 in #JID_98d4f0de
[2026-01-20T23:43:39.714Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T23:43:39.714Z] [BOT] 💾 Added channel posting: Business Data Analyst @ ORG_d31dc978 → location channel (2 total channels)
[2026-01-20T23:43:39.714Z] [BOT] 💾 BEFORE ARCHIVING: 3059 jobs in database
[2026-01-20T23:43:39.716Z] [BOT] ✅ No jobs to archive (all 3059 jobs within 7-day window)
[2026-01-20T23:43:39.737Z] [BOT] 💾 Saved posted_jobs.json: 3059 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:41.238Z] [BOT] 💾 Marked as posted: Business Data Analyst @ ORG_d31dc978 (instance #1)
[2026-01-20T23:43:41.239Z] [BOT] 💾 BEFORE ARCHIVING: 3060 jobs in database
[2026-01-20T23:43:41.240Z] [BOT] ✅ No jobs to archive (all 3060 jobs within 7-day window)
[2026-01-20T23:43:41.259Z] [BOT] 💾 Saved posted_jobs.json: 3060 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:43:44.260Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T23:43:44.261Z] [BOT] ⏭️  Skipping duplicate: JID_44dfe28d (posted within 7 days)
[2026-01-20T23:43:44.261Z] [BOT] ⏭️  Skipping duplicate: JID_ade9d0d9 (posted within 7 days)
[2026-01-20T23:43:44.261Z] [BOT] ⏭️  Skipping duplicate: JID_55a87b9c (posted within 7 days)
[2026-01-20T23:43:44.261Z] [BOT] ⏭️  Skipping duplicate: JID_f3eebe33 (posted within 7 days)
[2026-01-20T23:43:44.261Z] [BOT] ⏭️  Skipping duplicate: JID_ff11a902 (posted within 7 days)
[2026-01-20T23:43:44.262Z] [BOT] ⏭️  Skipping duplicate: JID_1bb13100 (posted within 7 days)
[2026-01-20T23:43:44.262Z] [BOT] ⏭️  Skipping duplicate: JID_a74c4f3b (posted within 7 days)
[2026-01-20T23:43:44.262Z] [BOT] ⏭️  Skipping duplicate: JID_5982c0f1-officer_25926282 (posted within 7 days)
[2026-01-20T23:43:44.262Z] [BOT] ⏭️  Skipping duplicate: JID_46fb8f73-cx_1-job-25910 (posted within 7 days)
[2026-01-20T23:43:44.262Z] [BOT] ⏭️  Skipping duplicate: JID_6c5ec1fe (posted within 7 days)
[2026-01-20T23:43:44.369Z] [BOT] ✅ Loaded pending queue: 2739 total (2719 pending, 20 enriched, 0 posted)
[2026-01-20T23:43:44.560Z] [BOT] ✅ Saved pending queue: 2739 total (2719 pending, 10 enriched, 10 posted)
[2026-01-20T23:43:44.561Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T23:43:44.625Z] [BOT] 📂 Loaded 5565 existing routing entries
[2026-01-20T23:43:44.701Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5575
   Timestamp: 2026-01-20T23:43:44.677Z
[2026-01-20T23:43:44.702Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T23:43:44.702Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-20T23:43:44.702Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 5
   Top channels:
     1. #tech-jobs: 6 posts
     2. #JID_ead674af: 3 posts
     3. #finance-jobs: 2 posts
     4. #ai-jobs: 2 posts
     5. #JID_98d4f0de: 1 posts
[2026-01-20T23:43:44.702Z] [BOT] [STATS] Channel stats saved
[2026-01-20T23:43:46.730Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2666) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*