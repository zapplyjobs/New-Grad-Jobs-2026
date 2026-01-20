# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T05:50:30.434Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T05:49:54.282Z] ========================================
[2026-01-20T05:49:54.284Z] Discord Bot Execution Log
[2026-01-20T05:49:54.284Z] Environment: GitHub Actions
[2026-01-20T05:49:54.284Z] Node Version: v20.19.6
[2026-01-20T05:49:54.284Z] ========================================
[2026-01-20T05:49:54.284Z] Environment Variables Check:
[2026-01-20T05:49:54.284Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T05:49:54.284Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T05:49:54.284Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T05:49:54.284Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T05:49:54.285Z] 
Multi-Channel Configuration:
[2026-01-20T05:49:54.285Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T05:49:54.285Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T05:49:54.285Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T05:49:54.285Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T05:49:54.285Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T05:49:54.285Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T05:49:54.285Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T05:49:54.285Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T05:49:54.285Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T05:49:54.285Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T05:49:54.285Z] 
Data Files Check:
[2026-01-20T05:49:54.287Z] .github/data/new_jobs.json: ✅ Exists (10 items, 170822 bytes)
[2026-01-20T05:49:54.297Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1535010 bytes)
[2026-01-20T05:49:54.297Z] 
========================================
[2026-01-20T05:49:54.297Z] Starting Enhanced Discord Bot...
[2026-01-20T05:49:54.297Z] ========================================
[2026-01-20T05:49:54.818Z] [BOT] ✅ Loaded V2 database: 2777 jobs
[2026-01-20T05:49:55.345Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T05:49:55.345Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T05:49:55.346Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T05:49:55.461Z] [BOT] ✅ Loaded pending queue: 2809 total (2789 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T05:49:55.464Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T05:49:55.464Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T05:49:55.465Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T05:49:55.466Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-20T05:49:55.466Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Deal Desk Analyst @ datadog: boston, massachusetts, usa; new york, new york, usa, denver, colorado, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-20T05:49:55.466Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T05:49:55.468Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T05:49:55.470Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-20T05:49:55.471Z] [BOT] 📍 [ROUTING] "AI Research Scientist – Datadog AI Research (DAIR)" @ datadog
[2026-01-20T05:49:55.471Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T05:49:55.475Z] [BOT ERROR] (node:2387) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T05:49:55.683Z] [BOT] ✅ Posted message: AI Research Scientist – Datadog AI Research (DAIR) @ datadog in #ai-jobs
[2026-01-20T05:49:55.683Z] [BOT] ✅ Industry: AI Research Scientist – Datadog AI Research (DAIR) @ datadog
[2026-01-20T05:49:55.684Z] [BOT] 💾 Added channel posting: AI Research Scientist – Datadog AI Research (DAIR) @ datadog → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2778 jobs in database
[2026-01-20T05:49:55.687Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T05:49:55.693Z] [BOT] 📦 Archived 15 jobs to 2026-01.json (15 total in archive)
[2026-01-20T05:49:55.693Z] [BOT] ✅ Archiving complete: 15 archived, 2763 active
[2026-01-20T05:49:55.719Z] [BOT] 💾 Saved posted_jobs.json: 2763 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:49:57.384Z] [BOT] ✅ Posted message: AI Research Scientist – Datadog AI Research (DAIR) @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T05:49:57.385Z] [BOT] 💾 Added channel posting: AI Research Scientist – Datadog AI Research (DAIR) @ datadog → location channel (2 total channels)
[2026-01-20T05:49:57.385Z] [BOT] 💾 BEFORE ARCHIVING: 2763 jobs in database
[2026-01-20T05:49:57.387Z] [BOT] ✅ No jobs to archive (all 2763 jobs within 7-day window)
[2026-01-20T05:49:57.402Z] [BOT] 💾 Saved posted_jobs.json: 2763 active jobs
[2026-01-20T05:49:57.402Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T05:49:58.904Z] [BOT] 💾 Marked as posted: AI Research Scientist – Datadog AI Research (DAIR) @ datadog (instance #1)
[2026-01-20T05:49:58.904Z] [BOT] 💾 BEFORE ARCHIVING: 2764 jobs in database
[2026-01-20T05:49:58.907Z] [BOT] ✅ No jobs to archive (all 2764 jobs within 7-day window)
[2026-01-20T05:49:58.926Z] [BOT] 💾 Saved posted_jobs.json: 2764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:01.927Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-20T05:50:01.928Z] [BOT] 📍 [ROUTING] "Commercial Account Executive" @ datadog
[2026-01-20T05:50:01.928Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T05:50:02.186Z] [BOT] ✅ Posted message: Commercial Account Executive @ datadog in #tech-jobs
  ✅ Industry: Commercial Account Executive @ datadog
[2026-01-20T05:50:02.187Z] [BOT] 💾 Added channel posting: Commercial Account Executive @ datadog → category channel (1 total channels)
[2026-01-20T05:50:02.187Z] [BOT] 💾 BEFORE ARCHIVING: 2765 jobs in database
[2026-01-20T05:50:02.189Z] [BOT] ✅ No jobs to archive (all 2765 jobs within 7-day window)
[2026-01-20T05:50:02.205Z] [BOT] 💾 Saved posted_jobs.json: 2765 active jobs
[2026-01-20T05:50:02.206Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:03.707Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ datadog (instance #1)
[2026-01-20T05:50:03.707Z] [BOT] 💾 BEFORE ARCHIVING: 2766 jobs in database
[2026-01-20T05:50:03.709Z] [BOT] ✅ No jobs to archive (all 2766 jobs within 7-day window)
[2026-01-20T05:50:03.727Z] [BOT] 💾 Saved posted_jobs.json: 2766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:03.727Z] [BOT] 💾 Marked as posted: Commercial Account Executive - LATAM (Portuguese Speaking) @ datadog (instance #1)
[2026-01-20T05:50:03.728Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-20T05:50:03.729Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-20T05:50:03.747Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:03.747Z] [BOT] 📍 [ROUTING] "Commercial Account Executive (Boston)" @ datadog
   Category: TECH (default)
[2026-01-20T05:50:03.747Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T05:50:04.018Z] [BOT] ✅ Posted message: Commercial Account Executive (Boston) @ datadog in #tech-jobs
  ✅ Industry: Commercial Account Executive (Boston) @ datadog
[2026-01-20T05:50:04.019Z] [BOT] 💾 Added channel posting: Commercial Account Executive (Boston) @ datadog → category channel (1 total channels)
[2026-01-20T05:50:04.019Z] [BOT] 💾 BEFORE ARCHIVING: 2768 jobs in database
[2026-01-20T05:50:04.021Z] [BOT] ✅ No jobs to archive (all 2768 jobs within 7-day window)
[2026-01-20T05:50:04.037Z] [BOT] 💾 Saved posted_jobs.json: 2768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:05.539Z] [BOT] 💾 Marked as posted: Commercial Account Executive (Boston) @ datadog (instance #1)
[2026-01-20T05:50:05.539Z] [BOT] 💾 BEFORE ARCHIVING: 2769 jobs in database
[2026-01-20T05:50:05.541Z] [BOT] ✅ No jobs to archive (all 2769 jobs within 7-day window)
[2026-01-20T05:50:05.559Z] [BOT] 💾 Saved posted_jobs.json: 2769 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:05.559Z] [BOT] 📍 [ROUTING] "Commercial Account Executive - LATAM (Spanish Speaking) - Boston" @ datadog
[2026-01-20T05:50:05.559Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T05:50:05.853Z] [BOT] ✅ Posted message: Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog in #tech-jobs
[2026-01-20T05:50:05.853Z] [BOT] ✅ Industry: Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog
[2026-01-20T05:50:05.854Z] [BOT] 💾 Added channel posting: Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog → category channel (1 total channels)
[2026-01-20T05:50:05.854Z] [BOT] 💾 BEFORE ARCHIVING: 2770 jobs in database
[2026-01-20T05:50:05.855Z] [BOT] ✅ No jobs to archive (all 2770 jobs within 7-day window)
[2026-01-20T05:50:05.873Z] [BOT] 💾 Saved posted_jobs.json: 2770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:07.374Z] [BOT] 💾 Marked as posted: Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog (instance #1)
[2026-01-20T05:50:07.374Z] [BOT] 💾 BEFORE ARCHIVING: 2771 jobs in database
[2026-01-20T05:50:07.375Z] [BOT] ✅ No jobs to archive (all 2771 jobs within 7-day window)
[2026-01-20T05:50:07.391Z] [BOT] 💾 Saved posted_jobs.json: 2771 active jobs
[2026-01-20T05:50:07.391Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:07.391Z] [BOT] 📍 [ROUTING] "Commercial Sales Engineer (East)" @ datadog
[2026-01-20T05:50:07.391Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T05:50:07.583Z] [BOT] ✅ Posted message: Commercial Sales Engineer (East) @ datadog in #tech-jobs
[2026-01-20T05:50:07.584Z] [BOT] ✅ Industry: Commercial Sales Engineer (East) @ datadog
[2026-01-20T05:50:07.584Z] [BOT] 💾 Added channel posting: Commercial Sales Engineer (East) @ datadog → category channel (1 total channels)
[2026-01-20T05:50:07.584Z] [BOT] 💾 BEFORE ARCHIVING: 2772 jobs in database
[2026-01-20T05:50:07.586Z] [BOT] ✅ No jobs to archive (all 2772 jobs within 7-day window)
[2026-01-20T05:50:07.603Z] [BOT] 💾 Saved posted_jobs.json: 2772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:09.105Z] [BOT] 💾 Marked as posted: Commercial Sales Engineer (East) @ datadog (instance #1)
[2026-01-20T05:50:09.105Z] [BOT] 💾 BEFORE ARCHIVING: 2773 jobs in database
[2026-01-20T05:50:09.107Z] [BOT] ✅ No jobs to archive (all 2773 jobs within 7-day window)
[2026-01-20T05:50:09.122Z] [BOT] 💾 Saved posted_jobs.json: 2773 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:09.123Z] [BOT] 📍 [ROUTING] "Commercial Sales Engineer - NYC" @ datadog
[2026-01-20T05:50:09.123Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T05:50:09.269Z] [BOT] ✅ Posted message: Commercial Sales Engineer - NYC @ datadog in #tech-jobs
[2026-01-20T05:50:09.269Z] [BOT] ✅ Industry: Commercial Sales Engineer - NYC @ datadog
[2026-01-20T05:50:09.270Z] [BOT] 💾 Added channel posting: Commercial Sales Engineer - NYC @ datadog → category channel (1 total channels)
[2026-01-20T05:50:09.270Z] [BOT] 💾 BEFORE ARCHIVING: 2774 jobs in database
[2026-01-20T05:50:09.272Z] [BOT] ✅ No jobs to archive (all 2774 jobs within 7-day window)
[2026-01-20T05:50:09.289Z] [BOT] 💾 Saved posted_jobs.json: 2774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:10.988Z] [BOT] ✅ Posted message: Commercial Sales Engineer - NYC @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T05:50:10.988Z] [BOT] 💾 Added channel posting: Commercial Sales Engineer - NYC @ datadog → location channel (2 total channels)
[2026-01-20T05:50:10.988Z] [BOT] 💾 BEFORE ARCHIVING: 2774 jobs in database
[2026-01-20T05:50:10.990Z] [BOT] ✅ No jobs to archive (all 2774 jobs within 7-day window)
[2026-01-20T05:50:11.009Z] [BOT] 💾 Saved posted_jobs.json: 2774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:12.510Z] [BOT] 💾 Marked as posted: Commercial Sales Engineer - NYC @ datadog (instance #1)
[2026-01-20T05:50:12.510Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-20T05:50:12.512Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-20T05:50:12.528Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:12.528Z] [BOT] 📍 [ROUTING] "Container Runtime Engineer" @ datadog
[2026-01-20T05:50:12.528Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T05:50:12.715Z] [BOT] ✅ Posted message: Container Runtime Engineer @ datadog in #tech-jobs
[2026-01-20T05:50:12.715Z] [BOT] ✅ Industry: Container Runtime Engineer @ datadog
[2026-01-20T05:50:12.716Z] [BOT] 💾 Added channel posting: Container Runtime Engineer @ datadog → category channel (1 total channels)
[2026-01-20T05:50:12.716Z] [BOT] 💾 BEFORE ARCHIVING: 2776 jobs in database
[2026-01-20T05:50:12.717Z] [BOT] ✅ No jobs to archive (all 2776 jobs within 7-day window)
[2026-01-20T05:50:12.735Z] [BOT] 💾 Saved posted_jobs.json: 2776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:14.484Z] [BOT] ✅ Posted message: Container Runtime Engineer @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T05:50:14.484Z] [BOT] 💾 Added channel posting: Container Runtime Engineer @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2776 jobs in database
[2026-01-20T05:50:14.486Z] [BOT] ✅ No jobs to archive (all 2776 jobs within 7-day window)
[2026-01-20T05:50:14.504Z] [BOT] 💾 Saved posted_jobs.json: 2776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:16.006Z] [BOT] 💾 Marked as posted: Container Runtime Engineer @ datadog (instance #1)
[2026-01-20T05:50:16.006Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-20T05:50:16.008Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-20T05:50:16.028Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:16.028Z] [BOT] 📍 [ROUTING] "Coordinator, Business Recruiting - Contract" @ datadog
[2026-01-20T05:50:16.028Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T05:50:16.349Z] [BOT] ✅ Posted message: Coordinator, Business Recruiting - Contract @ datadog in #tech-jobs
[2026-01-20T05:50:16.349Z] [BOT] ✅ Industry: Coordinator, Business Recruiting - Contract @ datadog
[2026-01-20T05:50:16.350Z] [BOT] 💾 Added channel posting: Coordinator, Business Recruiting - Contract @ datadog → category channel (1 total channels)
[2026-01-20T05:50:16.350Z] [BOT] 💾 BEFORE ARCHIVING: 2778 jobs in database
[2026-01-20T05:50:16.351Z] [BOT] ✅ No jobs to archive (all 2778 jobs within 7-day window)
[2026-01-20T05:50:16.369Z] [BOT] 💾 Saved posted_jobs.json: 2778 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:18.053Z] [BOT] ✅ Posted message: Coordinator, Business Recruiting - Contract @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T05:50:18.053Z] [BOT] 💾 Added channel posting: Coordinator, Business Recruiting - Contract @ datadog → location channel (2 total channels)
[2026-01-20T05:50:18.053Z] [BOT] 💾 BEFORE ARCHIVING: 2778 jobs in database
[2026-01-20T05:50:18.055Z] [BOT] ✅ No jobs to archive (all 2778 jobs within 7-day window)
[2026-01-20T05:50:18.073Z] [BOT] 💾 Saved posted_jobs.json: 2778 active jobs
[2026-01-20T05:50:18.074Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:19.575Z] [BOT] 💾 Marked as posted: Coordinator, Business Recruiting - Contract @ datadog (instance #1)
[2026-01-20T05:50:19.575Z] [BOT] 💾 BEFORE ARCHIVING: 2779 jobs in database
[2026-01-20T05:50:19.576Z] [BOT] ✅ No jobs to archive (all 2779 jobs within 7-day window)
[2026-01-20T05:50:19.592Z] [BOT] 💾 Saved posted_jobs.json: 2779 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:22.593Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-20T05:50:22.593Z] [BOT] 📍 [ROUTING] "Revenue Accounting" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T05:50:22.855Z] [BOT] ✅ Posted message: Revenue Accounting @ anthropic in #finance-jobs
  ✅ Industry: Revenue Accounting @ anthropic
[2026-01-20T05:50:22.856Z] [BOT] 💾 Added channel posting: Revenue Accounting @ anthropic → category channel (1 total channels)
[2026-01-20T05:50:22.856Z] [BOT] 💾 BEFORE ARCHIVING: 2780 jobs in database
[2026-01-20T05:50:22.858Z] [BOT] ✅ No jobs to archive (all 2780 jobs within 7-day window)
[2026-01-20T05:50:22.876Z] [BOT] 💾 Saved posted_jobs.json: 2780 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:24.377Z] [BOT] 💾 Marked as posted: Revenue Accounting @ anthropic (instance #1)
[2026-01-20T05:50:24.377Z] [BOT] 💾 BEFORE ARCHIVING: 2781 jobs in database
[2026-01-20T05:50:24.379Z] [BOT] ✅ No jobs to archive (all 2781 jobs within 7-day window)
[2026-01-20T05:50:24.396Z] [BOT] 💾 Saved posted_jobs.json: 2781 active jobs
[2026-01-20T05:50:24.396Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T05:50:27.397Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-20T05:50:27.398Z] [BOT] ⏭️  Skipping duplicate: JID_3f5157b7 (posted within 7 days)
[2026-01-20T05:50:27.398Z] [BOT] ⏭️  Skipping duplicate: JID_05c70ebf (posted within 7 days)
[2026-01-20T05:50:27.398Z] [BOT] ⏭️  Skipping duplicate: JID_fb667c9c (posted within 7 days)
[2026-01-20T05:50:27.399Z] [BOT] ⏭️  Skipping duplicate: JID_658f6006 (posted within 7 days)
⏭️  Skipping duplicate: JID_aabfb282 (posted within 7 days)
[2026-01-20T05:50:27.399Z] [BOT] ⏭️  Skipping duplicate: JID_2cfa1f86 (posted within 7 days)
[2026-01-20T05:50:27.399Z] [BOT] ⏭️  Skipping duplicate: JID_50a40467 (posted within 7 days)
[2026-01-20T05:50:27.399Z] [BOT] ⏭️  Skipping duplicate: JID_8e57d643 (posted within 7 days)
[2026-01-20T05:50:27.399Z] [BOT] ⏭️  Skipping duplicate: JID_304f6b44 (posted within 7 days)
[2026-01-20T05:50:27.511Z] [BOT] ✅ Loaded pending queue: 2809 total (2789 pending, 20 enriched, 0 posted)
[2026-01-20T05:50:27.685Z] [BOT] ✅ Saved pending queue: 2809 total (2789 pending, 11 enriched, 9 posted)
[2026-01-20T05:50:27.686Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T05:50:27.747Z] [BOT] 📂 Loaded 5301 existing routing entries
[2026-01-20T05:50:27.821Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2026-01-20T05:50:27.821Z] [BOT] Total entries: 5310
   Timestamp: 2026-01-20T05:50:27.798Z
[2026-01-20T05:50:27.822Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T05:50:27.822Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-20T05:50:27.822Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-20T05:50:27.822Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 4
   Top channels:
     1. #tech-jobs: 7 posts
[2026-01-20T05:50:27.822Z] [BOT] 2. #JID_98d4f0de: 4 posts
     3. #ai-jobs: 1 posts
     4. #finance-jobs: 1 posts
[2026-01-20T05:50:27.822Z] [BOT] [STATS] Channel stats saved
[2026-01-20T05:50:29.848Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
- [BOT ERROR] (node:2387) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*