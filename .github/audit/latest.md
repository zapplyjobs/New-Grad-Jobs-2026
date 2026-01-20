# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T10:30:33.365Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T10:30:07.220Z] ========================================
[2026-01-20T10:30:07.222Z] Discord Bot Execution Log
[2026-01-20T10:30:07.222Z] Environment: GitHub Actions
[2026-01-20T10:30:07.222Z] Node Version: v20.19.6
[2026-01-20T10:30:07.222Z] ========================================
[2026-01-20T10:30:07.222Z] Environment Variables Check:
[2026-01-20T10:30:07.222Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T10:30:07.223Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T10:30:07.223Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T10:30:07.223Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T10:30:07.223Z] 
Multi-Channel Configuration:
[2026-01-20T10:30:07.223Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T10:30:07.223Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T10:30:07.223Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T10:30:07.223Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T10:30:07.223Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T10:30:07.223Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T10:30:07.223Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T10:30:07.223Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T10:30:07.224Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T10:30:07.224Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T10:30:07.224Z] 
Data Files Check:
[2026-01-20T10:30:07.225Z] .github/data/new_jobs.json: ✅ Exists (10 items, 172196 bytes)
[2026-01-20T10:30:07.236Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1588458 bytes)
[2026-01-20T10:30:07.236Z] 
========================================
[2026-01-20T10:30:07.236Z] Starting Enhanced Discord Bot...
[2026-01-20T10:30:07.236Z] ========================================
[2026-01-20T10:30:07.779Z] [BOT] ✅ Loaded V2 database: 2857 jobs
[2026-01-20T10:30:08.299Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T10:30:08.299Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T10:30:08.299Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T10:30:08.413Z] [BOT] ✅ Loaded pending queue: 2790 total (2770 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T10:30:08.417Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T10:30:08.418Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T10:30:08.418Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T10:30:08.419Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-20T10:30:08.419Z] [BOT] (10 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Strategic Account Executive @ datadog: remote, new york, new york, usa, chicago, illinois, usa, san francisco, california, usa, boston, massachusetts, usa
   - Strategic Account Executive (SLED) @ datadog: remote, boston, massachusetts, usa; new york, new york, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-20T10:30:08.419Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T10:30:08.421Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T10:30:08.422Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T10:30:08.422Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T10:30:08.423Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T10:30:08.423Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T10:30:08.423Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T10:30:08.424Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-20T10:30:08.425Z] [BOT] 📍 [ROUTING] "Staff Statistics Engineer - Feature Flagging and Experimentation" @ datadog
[2026-01-20T10:30:08.425Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T10:30:08.429Z] [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T10:30:10.351Z] [BOT] ✅ Posted message: Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog in #JID_fb739488
  ✅ Industry: Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog
[2026-01-20T10:30:10.352Z] [BOT] 💾 Added channel posting: Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog → category channel (1 total channels)
[2026-01-20T10:30:10.352Z] [BOT] 💾 BEFORE ARCHIVING: 2858 jobs in database
[2026-01-20T10:30:10.354Z] [BOT] ✅ No jobs to archive (all 2858 jobs within 7-day window)
[2026-01-20T10:30:10.373Z] [BOT] 💾 Saved posted_jobs.json: 2858 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:12.076Z] [BOT] ✅ Posted message: Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T10:30:12.077Z] [BOT] 💾 Added channel posting: Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog → location channel (2 total channels)
[2026-01-20T10:30:12.077Z] [BOT] 💾 BEFORE ARCHIVING: 2858 jobs in database
[2026-01-20T10:30:12.079Z] [BOT] ✅ No jobs to archive (all 2858 jobs within 7-day window)
[2026-01-20T10:30:12.096Z] [BOT] 💾 Saved posted_jobs.json: 2858 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:13.598Z] [BOT] 💾 Marked as posted: Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog (instance #1)
[2026-01-20T10:30:13.599Z] [BOT] 💾 BEFORE ARCHIVING: 2859 jobs in database
[2026-01-20T10:30:13.601Z] [BOT] ✅ No jobs to archive (all 2859 jobs within 7-day window)
[2026-01-20T10:30:13.619Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:16.619Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-20T10:30:16.619Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T10:30:16.851Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #tech-jobs
[2026-01-20T10:30:16.852Z] [BOT] ✅ Industry: Strategic Account Executive @ datadog
[2026-01-20T10:30:16.852Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → category channel (1 total channels)
[2026-01-20T10:30:16.852Z] [BOT] 💾 BEFORE ARCHIVING: 2860 jobs in database
[2026-01-20T10:30:16.854Z] [BOT] ✅ No jobs to archive (all 2860 jobs within 7-day window)
[2026-01-20T10:30:16.874Z] [BOT] 💾 Saved posted_jobs.json: 2860 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:18.527Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #JID_ead674af
[2026-01-20T10:30:18.527Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T10:30:18.528Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → location channel (2 total channels)
[2026-01-20T10:30:18.528Z] [BOT] 💾 BEFORE ARCHIVING: 2860 jobs in database
[2026-01-20T10:30:18.530Z] [BOT] ✅ No jobs to archive (all 2860 jobs within 7-day window)
[2026-01-20T10:30:18.551Z] [BOT] 💾 Saved posted_jobs.json: 2860 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:20.052Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
[2026-01-20T10:30:20.053Z] [BOT] 💾 BEFORE ARCHIVING: 2861 jobs in database
[2026-01-20T10:30:20.055Z] [BOT] ✅ No jobs to archive (all 2861 jobs within 7-day window)
[2026-01-20T10:30:20.072Z] [BOT] 💾 Saved posted_jobs.json: 2861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:20.072Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
[2026-01-20T10:30:20.072Z] [BOT] 💾 BEFORE ARCHIVING: 2862 jobs in database
[2026-01-20T10:30:20.074Z] [BOT] ✅ No jobs to archive (all 2862 jobs within 7-day window)
[2026-01-20T10:30:20.092Z] [BOT] 💾 Saved posted_jobs.json: 2862 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:20.092Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
[2026-01-20T10:30:20.092Z] [BOT] 💾 BEFORE ARCHIVING: 2863 jobs in database
[2026-01-20T10:30:20.094Z] [BOT] ✅ No jobs to archive (all 2863 jobs within 7-day window)
[2026-01-20T10:30:20.111Z] [BOT] 💾 Saved posted_jobs.json: 2863 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:20.112Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
[2026-01-20T10:30:20.112Z] [BOT] 💾 BEFORE ARCHIVING: 2864 jobs in database
[2026-01-20T10:30:20.114Z] [BOT] ✅ No jobs to archive (all 2864 jobs within 7-day window)
[2026-01-20T10:30:20.130Z] [BOT] 💾 Saved posted_jobs.json: 2864 active jobs
[2026-01-20T10:30:20.131Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:20.131Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
[2026-01-20T10:30:20.131Z] [BOT] 💾 BEFORE ARCHIVING: 2865 jobs in database
[2026-01-20T10:30:20.132Z] [BOT] ✅ No jobs to archive (all 2865 jobs within 7-day window)
[2026-01-20T10:30:20.148Z] [BOT] 💾 Saved posted_jobs.json: 2865 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:20.148Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
[2026-01-20T10:30:20.148Z] [BOT] 💾 BEFORE ARCHIVING: 2866 jobs in database
[2026-01-20T10:30:20.150Z] [BOT] ✅ No jobs to archive (all 2866 jobs within 7-day window)
[2026-01-20T10:30:20.168Z] [BOT] 💾 Saved posted_jobs.json: 2866 active jobs
[2026-01-20T10:30:20.168Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:20.168Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 2867 jobs in database
[2026-01-20T10:30:20.170Z] [BOT] ✅ No jobs to archive (all 2867 jobs within 7-day window)
[2026-01-20T10:30:20.186Z] [BOT] 💾 Saved posted_jobs.json: 2867 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:20.186Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
[2026-01-20T10:30:20.186Z] [BOT] 💾 BEFORE ARCHIVING: 2868 jobs in database
[2026-01-20T10:30:20.188Z] [BOT] ✅ No jobs to archive (all 2868 jobs within 7-day window)
[2026-01-20T10:30:20.208Z] [BOT] 💾 Saved posted_jobs.json: 2868 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:20.209Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (FED)" @ datadog
[2026-01-20T10:30:20.209Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T10:30:20.393Z] [BOT] ✅ Posted message: Strategic Account Executive (FED) @ datadog in #tech-jobs
[2026-01-20T10:30:20.393Z] [BOT] ✅ Industry: Strategic Account Executive (FED) @ datadog
[2026-01-20T10:30:20.394Z] [BOT] 💾 Added channel posting: Strategic Account Executive (FED) @ datadog → category channel (1 total channels)
[2026-01-20T10:30:20.394Z] [BOT] 💾 BEFORE ARCHIVING: 2869 jobs in database
[2026-01-20T10:30:20.395Z] [BOT] ✅ No jobs to archive (all 2869 jobs within 7-day window)
[2026-01-20T10:30:20.416Z] [BOT] 💾 Saved posted_jobs.json: 2869 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:22.241Z] [BOT] ✅ Posted message: Strategic Account Executive (FED) @ datadog in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T10:30:22.241Z] [BOT] 💾 Added channel posting: Strategic Account Executive (FED) @ datadog → location channel (2 total channels)
[2026-01-20T10:30:22.241Z] [BOT] 💾 BEFORE ARCHIVING: 2869 jobs in database
[2026-01-20T10:30:22.243Z] [BOT] ✅ No jobs to archive (all 2869 jobs within 7-day window)
[2026-01-20T10:30:22.258Z] [BOT] 💾 Saved posted_jobs.json: 2869 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:23.760Z] [BOT] 💾 Marked as posted: Strategic Account Executive (FED) @ datadog (instance #1)
[2026-01-20T10:30:23.760Z] [BOT] 💾 BEFORE ARCHIVING: 2870 jobs in database
[2026-01-20T10:30:23.762Z] [BOT] ✅ No jobs to archive (all 2870 jobs within 7-day window)
[2026-01-20T10:30:23.780Z] [BOT] 💾 Saved posted_jobs.json: 2870 active jobs
[2026-01-20T10:30:23.780Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:23.780Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (SLED)" @ datadog
[2026-01-20T10:30:23.780Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T10:30:23.978Z] [BOT] ✅ Posted message: Strategic Account Executive (SLED) @ datadog in #tech-jobs
[2026-01-20T10:30:23.978Z] [BOT] ✅ Industry: Strategic Account Executive (SLED) @ datadog
[2026-01-20T10:30:23.978Z] [BOT] 💾 Added channel posting: Strategic Account Executive (SLED) @ datadog → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2871 jobs in database
[2026-01-20T10:30:23.980Z] [BOT] ✅ No jobs to archive (all 2871 jobs within 7-day window)
[2026-01-20T10:30:23.995Z] [BOT] 💾 Saved posted_jobs.json: 2871 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:25.692Z] [BOT] ✅ Posted message: Strategic Account Executive (SLED) @ datadog in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T10:30:25.693Z] [BOT] 💾 Added channel posting: Strategic Account Executive (SLED) @ datadog → location channel (2 total channels)
[2026-01-20T10:30:25.693Z] [BOT] 💾 BEFORE ARCHIVING: 2871 jobs in database
[2026-01-20T10:30:25.694Z] [BOT] ✅ No jobs to archive (all 2871 jobs within 7-day window)
[2026-01-20T10:30:25.712Z] [BOT] 💾 Saved posted_jobs.json: 2871 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:27.214Z] [BOT] 💾 Marked as posted: Strategic Account Executive (SLED) @ datadog (instance #1)
[2026-01-20T10:30:27.214Z] [BOT] 💾 BEFORE ARCHIVING: 2872 jobs in database
[2026-01-20T10:30:27.216Z] [BOT] ✅ No jobs to archive (all 2872 jobs within 7-day window)
[2026-01-20T10:30:27.233Z] [BOT] 💾 Saved posted_jobs.json: 2872 active jobs
[2026-01-20T10:30:27.234Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:27.234Z] [BOT] 💾 Marked as posted: Strategic Account Executive (SLED) @ datadog (instance #1)
[2026-01-20T10:30:27.234Z] [BOT] 💾 BEFORE ARCHIVING: 2873 jobs in database
[2026-01-20T10:30:27.235Z] [BOT] ✅ No jobs to archive (all 2873 jobs within 7-day window)
[2026-01-20T10:30:27.252Z] [BOT] 💾 Saved posted_jobs.json: 2873 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:27.252Z] [BOT] 💾 Marked as posted: Strategic Account Executive (SLED) @ datadog (instance #1)
[2026-01-20T10:30:27.252Z] [BOT] 💾 BEFORE ARCHIVING: 2874 jobs in database
[2026-01-20T10:30:27.253Z] [BOT] ✅ No jobs to archive (all 2874 jobs within 7-day window)
[2026-01-20T10:30:27.270Z] [BOT] 💾 Saved posted_jobs.json: 2874 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:30:30.270Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-20T10:30:30.271Z] [BOT] ⏭️  Skipping duplicate: JID_bda667dc (posted within 7 days)
[2026-01-20T10:30:30.272Z] [BOT] ⏭️  Skipping duplicate: JID_e03342c6 (posted within 7 days)
[2026-01-20T10:30:30.272Z] [BOT] ⏭️  Skipping duplicate: JID_40da89da (posted within 7 days)
[2026-01-20T10:30:30.272Z] [BOT] ⏭️  Skipping duplicate: JID_2261fdc2 (posted within 7 days)
[2026-01-20T10:30:30.372Z] [BOT] ✅ Loaded pending queue: 2790 total (2770 pending, 20 enriched, 0 posted)
[2026-01-20T10:30:30.558Z] [BOT] ✅ Saved pending queue: 2790 total (2770 pending, 16 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
[2026-01-20T10:30:30.558Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T10:30:30.619Z] [BOT] 📂 Loaded 5396 existing routing entries
[2026-01-20T10:30:30.691Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 5400
   Timestamp: 2026-01-20T10:30:30.669Z
[2026-01-20T10:30:30.692Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 8
[2026-01-20T10:30:30.692Z] [BOT] Successful: 8
[2026-01-20T10:30:30.692Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-20T10:30:30.692Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 8
   Channels used: 4
   Top channels:
[2026-01-20T10:30:30.693Z] [BOT] 1. #tech-jobs: 3 posts
     2. #JID_ead674af: 3 posts
     3. #JID_fb739488: 1 posts
[2026-01-20T10:30:30.693Z] [BOT] 4. #JID_98d4f0de: 1 posts
[2026-01-20T10:30:30.693Z] [BOT] [STATS] Channel stats saved
[2026-01-20T10:30:32.718Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
- [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*