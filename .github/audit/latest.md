# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T05:06:39.335Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T05:05:48.822Z] ========================================
[2026-01-19T05:05:48.824Z] Discord Bot Execution Log
[2026-01-19T05:05:48.824Z] Environment: GitHub Actions
[2026-01-19T05:05:48.824Z] Node Version: v20.19.6
[2026-01-19T05:05:48.824Z] ========================================
[2026-01-19T05:05:48.824Z] Environment Variables Check:
[2026-01-19T05:05:48.824Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T05:05:48.824Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T05:05:48.824Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T05:05:48.824Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T05:05:48.824Z] 
Multi-Channel Configuration:
[2026-01-19T05:05:48.824Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T05:05:48.825Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T05:05:48.825Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T05:05:48.825Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T05:05:48.825Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T05:05:48.825Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T05:05:48.825Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T05:05:48.825Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T05:05:48.825Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T05:05:48.825Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T05:05:48.825Z] 
Data Files Check:
[2026-01-19T05:05:48.826Z] .github/data/new_jobs.json: ✅ Exists (10 items, 75820 bytes)
[2026-01-19T05:05:48.837Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1541146 bytes)
[2026-01-19T05:05:48.837Z] 
========================================
[2026-01-19T05:05:48.837Z] Starting Enhanced Discord Bot...
[2026-01-19T05:05:48.837Z] ========================================
[2026-01-19T05:05:49.299Z] [BOT] ✅ Loaded V2 database: 2841 jobs
[2026-01-19T05:05:50.074Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T05:05:50.074Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T05:05:50.074Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T05:05:50.231Z] [BOT] ✅ Loaded pending queue: 2837 total (2817 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: GIS Technician at NiSource
[2026-01-19T05:05:50.234Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T05:05:50.234Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T05:05:50.235Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T05:05:50.235Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T05:05:50.236Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T05:05:50.240Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-19T05:05:50.241Z] [BOT] 📍 [ROUTING] "GIS Technician" @ ORG_bf9b9a09
[2026-01-19T05:05:50.241Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-19T05:05:50.245Z] [BOT ERROR] (node:2744) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T05:05:50.356Z] [BOT ERROR] ❌ Error posting job GIS Technician: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:866:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 GIS Technician @ NiSource',
      auto_archive_duration: 1440,
      rate_limit_per_user: undefined,
      applied_tags: undefined,
      message: [Object]
    }
  },
  rawError: { message: 'Maximum number of active threads reached', code: 160006 },
  code: 160006,
  status: 400,
  method: 'POST',
  url: 'https://discord.com/api/v10/channels/CH_a550ae94/threads'
}
[2026-01-19T05:05:50.356Z] [BOT] ❌ Industry post failed: GIS Technician
⚠️  Channel full error count: 1/5
[2026-01-19T05:05:52.072Z] [BOT] ✅ Created forum post: 🏢 GIS Technician @ ORG_bf9b9a09 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T05:05:53.573Z] [BOT] 💾 Marked as posted: GIS Technician @ ORG_bf9b9a09 (instance #1)
[2026-01-19T05:05:53.573Z] [BOT] 💾 BEFORE ARCHIVING: 2842 jobs in database
[2026-01-19T05:05:53.575Z] [BOT] ✅ No jobs to archive (all 2842 jobs within 7-day window)
[2026-01-19T05:05:53.596Z] [BOT] 💾 Saved posted_jobs.json: 2842 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:05:56.596Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-19T05:05:56.597Z] [BOT] 📍 [ROUTING] "Tech Lead – Software Engineering" @ ORG_feb5566a Health
[2026-01-19T05:05:56.597Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:05:56.928Z] [BOT] ✅ Created forum post: 🏢 Tech Lead – Software Engineering @ ORG_feb5566a Health in #💻・tech-jobs
  ✅ Industry: Tech Lead – Software Engineering @ ORG_feb5566a Health
[2026-01-19T05:05:58.786Z] [BOT] ✅ Created forum post: 🏢 Tech Lead – Software Engineering @ ORG_feb5566a Health in #💻・remote-usa
[2026-01-19T05:05:58.786Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T05:06:00.287Z] [BOT] 💾 Marked as posted: Tech Lead – Software Engineering @ ORG_feb5566a Health (instance #1)
[2026-01-19T05:06:00.287Z] [BOT] 💾 BEFORE ARCHIVING: 2843 jobs in database
[2026-01-19T05:06:00.289Z] [BOT] ✅ No jobs to archive (all 2843 jobs within 7-day window)
[2026-01-19T05:06:00.309Z] [BOT] 💾 Saved posted_jobs.json: 2843 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:06:00.310Z] [BOT] 📍 [ROUTING] "Analyst 1 – Labor Analytics - Corporate - Las Vegas" @ ORG_742553d6 Entertainment
   Category: TECH (matched: "analytics")
[2026-01-19T05:06:00.310Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:06:00.482Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 – Labor Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment in #💻・tech-jobs
[2026-01-19T05:06:00.482Z] [BOT] ✅ Industry: Analyst 1 – Labor Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment
[2026-01-19T05:06:02.436Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 – Labor Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment in #💻・remote-usa
[2026-01-19T05:06:02.436Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T05:06:03.937Z] [BOT] 💾 Marked as posted: Analyst 1 – Labor Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment (instance #1)
[2026-01-19T05:06:03.937Z] [BOT] 💾 BEFORE ARCHIVING: 2844 jobs in database
[2026-01-19T05:06:03.939Z] [BOT] ✅ No jobs to archive (all 2844 jobs within 7-day window)
[2026-01-19T05:06:03.958Z] [BOT] 💾 Saved posted_jobs.json: 2844 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:06:03.959Z] [BOT] 📍 [ROUTING] "2026 Fulltime - Data Management Analyst I" @ ORG_75f04b84
   Category: TECH (matched: "data")
[2026-01-19T05:06:03.959Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:06:04.132Z] [BOT] ✅ Created forum post: 🏢 2026 Fulltime - Data Management Analyst I @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: 2026 Fulltime - Data Management Analyst I @ ORG_75f04b84
[2026-01-19T05:06:05.864Z] [BOT] ✅ Created forum post: 🏢 2026 Fulltime - Data Management Analyst I @ ORG_75f04b84 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T05:06:07.366Z] [BOT] 💾 Marked as posted: 2026 Fulltime - Data Management Analyst I @ ORG_75f04b84 (instance #1)
[2026-01-19T05:06:07.366Z] [BOT] 💾 BEFORE ARCHIVING: 2845 jobs in database
[2026-01-19T05:06:07.368Z] [BOT] ✅ No jobs to archive (all 2845 jobs within 7-day window)
[2026-01-19T05:06:07.385Z] [BOT] 💾 Saved posted_jobs.json: 2845 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:06:07.386Z] [BOT] 📍 [ROUTING] "Nuclear Analysis Technician - Engineering Techs - Physics Techs" @ ORG_41a6741einghouse Electric Company
[2026-01-19T05:06:07.386Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:06:07.774Z] [BOT] ✅ Created forum post: 🏢 Nuclear Analysis Technician - Engineering Techs - Physics Techs @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
  ✅ Industry: Nuclear Analysis Technician - Engineering Techs - Physics Techs @ ORG_41a6741einghouse Electric Company
[2026-01-19T05:06:09.445Z] [BOT] ✅ Created forum post: 🏢 Nuclear Analysis Technician - Engineering Techs - Physics Techs @ ORG_41a6741einghouse Electric Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T05:06:10.946Z] [BOT] 💾 Marked as posted: Nuclear Analysis Technician - Engineering Techs - Physics Techs @ ORG_41a6741einghouse Electric Company (instance #1)
💾 BEFORE ARCHIVING: 2846 jobs in database
[2026-01-19T05:06:10.948Z] [BOT] ✅ No jobs to archive (all 2846 jobs within 7-day window)
[2026-01-19T05:06:10.963Z] [BOT] 💾 Saved posted_jobs.json: 2846 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:06:10.964Z] [BOT] 📍 [ROUTING] "2026 Full-time - Software Engineer I - Onsite/CO" @ ORG_75f04b84
[2026-01-19T05:06:10.964Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:06:11.154Z] [BOT] ✅ Created forum post: 🏢 2026 Full-time - Software Engineer I - Onsite/CO @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: 2026 Full-time - Software Engineer I - Onsite/CO @ ORG_75f04b84
[2026-01-19T05:06:12.892Z] [BOT] ✅ Created forum post: 🏢 2026 Full-time - Software Engineer I - Onsite/CO @ ORG_75f04b84 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-19T05:06:14.393Z] [BOT] 💾 Marked as posted: 2026 Full-time - Software Engineer I - Onsite/CO @ ORG_75f04b84 (instance #1)
💾 BEFORE ARCHIVING: 2847 jobs in database
[2026-01-19T05:06:14.395Z] [BOT] ✅ No jobs to archive (all 2847 jobs within 7-day window)
[2026-01-19T05:06:14.412Z] [BOT] 💾 Saved posted_jobs.json: 2847 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:06:14.412Z] [BOT] 📍 [ROUTING] "Software Development Engineer 1 - Frontend" @ ORG_ba59014a
[2026-01-19T05:06:14.412Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:06:14.790Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 - Frontend @ ORG_ba59014a in #💻・tech-jobs
  ✅ Industry: Software Development Engineer 1 - Frontend @ ORG_ba59014a
[2026-01-19T05:06:16.292Z] [BOT] 💾 Marked as posted: Software Development Engineer 1 - Frontend @ ORG_ba59014a (instance #1)
💾 BEFORE ARCHIVING: 2848 jobs in database
[2026-01-19T05:06:16.294Z] [BOT] ✅ No jobs to archive (all 2848 jobs within 7-day window)
[2026-01-19T05:06:16.310Z] [BOT] 💾 Saved posted_jobs.json: 2848 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:06:19.311Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
📍 [ROUTING] "Data Analyst" @ ORG_df3160c8
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T05:06:19.566Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_df3160c8 in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_df3160c8
[2026-01-19T05:06:21.252Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_df3160c8 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T05:06:22.753Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_df3160c8 (instance #1)
💾 BEFORE ARCHIVING: 2849 jobs in database
[2026-01-19T05:06:22.755Z] [BOT] ✅ No jobs to archive (all 2849 jobs within 7-day window)
[2026-01-19T05:06:22.773Z] [BOT] 💾 Saved posted_jobs.json: 2849 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:06:22.774Z] [BOT] 📍 [ROUTING] "People Analytics Data Engineer" @ anthropic
[2026-01-19T05:06:22.774Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T05:06:22.983Z] [BOT] ✅ Created forum post: 🏢 People Analytics Data Engineer @ anthropic in #📈・JID_fb739488
  ✅ Industry: People Analytics Data Engineer @ anthropic
[2026-01-19T05:06:24.732Z] [BOT] ✅ Created forum post: 🏢 People Analytics Data Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T05:06:26.233Z] [BOT] 💾 Marked as posted: People Analytics Data Engineer @ anthropic (instance #1)
[2026-01-19T05:06:26.233Z] [BOT] 💾 BEFORE ARCHIVING: 2850 jobs in database
[2026-01-19T05:06:26.235Z] [BOT] ✅ No jobs to archive (all 2850 jobs within 7-day window)
[2026-01-19T05:06:26.252Z] [BOT] 💾 Saved posted_jobs.json: 2850 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:06:29.253Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
📍 [ROUTING] "Senior Product Manager, Learning" @ duolingo
   Category: PRODUCT (matched: "product")
[2026-01-19T05:06:29.253Z] [BOT] Channel: 📦・product-jobs (1391...8889)
[2026-01-19T05:06:29.511Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Learning @ duolingo in #📦・product-jobs
[2026-01-19T05:06:29.511Z] [BOT] ✅ Industry: Senior Product Manager, Learning @ duolingo
[2026-01-19T05:06:31.326Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Learning @ duolingo in #🗽・new-york
[2026-01-19T05:06:31.326Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-19T05:06:32.828Z] [BOT] 💾 Marked as posted: Senior Product Manager, Learning @ duolingo (instance #1)
[2026-01-19T05:06:32.828Z] [BOT] 💾 BEFORE ARCHIVING: 2851 jobs in database
[2026-01-19T05:06:32.830Z] [BOT] ✅ No jobs to archive (all 2851 jobs within 7-day window)
[2026-01-19T05:06:32.846Z] [BOT] 💾 Saved posted_jobs.json: 2851 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:06:35.847Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-19T05:06:35.848Z] [BOT] ⏭️  Skipping duplicate: JID_386de6fc-technician_r00941773 (posted within 7 days)
[2026-01-19T05:06:35.848Z] [BOT] ⏭️  Skipping duplicate: JID_3bb8bc40 (posted within 7 days)
[2026-01-19T05:06:35.848Z] [BOT] ⏭️  Skipping duplicate: JID_4e7066d1 (posted within 7 days)
[2026-01-19T05:06:35.848Z] [BOT] ⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-78241 (posted within 7 days)
[2026-01-19T05:06:35.849Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_e58e6cb8-onsite_01815653 (posted within 7 days)
[2026-01-19T05:06:35.849Z] [BOT] ⏭️  Skipping duplicate: JID_18900469 (posted within 7 days)
[2026-01-19T05:06:35.849Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_f5e19171-_01810840 (posted within 7 days)
[2026-01-19T05:06:35.849Z] [BOT] ⏭️  Skipping duplicate: JID_3c762fab (posted within 7 days)
[2026-01-19T05:06:35.849Z] [BOT] ⏭️  Skipping duplicate: JID_3bd18c71 (posted within 7 days)
[2026-01-19T05:06:35.849Z] [BOT] ⏭️  Skipping duplicate: JID_fcdc7c78 (posted within 7 days)
[2026-01-19T05:06:35.996Z] [BOT] ✅ Loaded pending queue: 2837 total (2817 pending, 20 enriched, 0 posted)
[2026-01-19T05:06:36.184Z] [BOT] ✅ Saved pending queue: 2837 total (2817 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T05:06:36.251Z] [BOT] 📂 Loaded 4985 existing routing entries
[2026-01-19T05:06:36.319Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4995
   Timestamp: 2026-01-19T05:06:36.301Z
[2026-01-19T05:06:36.320Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T05:06:36.320Z] [BOT] Total attempts: 19
   Successful: 18
   Failed: 1
   Skipped: 0
[2026-01-19T05:06:36.320Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T05:06:36.320Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-01-19T05:06:36.320Z] [BOT] 2. #💻・remote-usa: 5 posts
     3. #📈・JID_fb739488: 2 posts
     4. #🗽・new-york: 2 posts
     5. #🌆・chicago: 1 posts
[2026-01-19T05:06:36.321Z] [BOT] [STATS] Channel stats saved
[2026-01-19T05:06:38.340Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2744) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job GIS Technician: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: GIS Technician
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*