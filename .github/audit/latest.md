# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T22:27:18.153Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T22:26:32.384Z] ========================================
[2026-01-18T22:26:32.385Z] Discord Bot Execution Log
[2026-01-18T22:26:32.386Z] Environment: GitHub Actions
[2026-01-18T22:26:32.386Z] Node Version: v20.19.6
[2026-01-18T22:26:32.386Z] ========================================
[2026-01-18T22:26:32.386Z] Environment Variables Check:
[2026-01-18T22:26:32.386Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T22:26:32.386Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T22:26:32.386Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T22:26:32.386Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T22:26:32.386Z] 
Multi-Channel Configuration:
[2026-01-18T22:26:32.386Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T22:26:32.386Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T22:26:32.387Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T22:26:32.387Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T22:26:32.387Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T22:26:32.387Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T22:26:32.387Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T22:26:32.387Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T22:26:32.387Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T22:26:32.387Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T22:26:32.387Z] 
Data Files Check:
[2026-01-18T22:26:32.388Z] .github/data/new_jobs.json: ✅ Exists (10 items, 45907 bytes)
[2026-01-18T22:26:32.398Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1497445 bytes)
[2026-01-18T22:26:32.398Z] 
========================================
[2026-01-18T22:26:32.398Z] Starting Enhanced Discord Bot...
[2026-01-18T22:26:32.398Z] ========================================
[2026-01-18T22:26:32.937Z] [BOT] ✅ Loaded V2 database: 2758 jobs
[2026-01-18T22:26:33.592Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T22:26:33.593Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T22:26:33.593Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T22:26:33.712Z] [BOT] ✅ Loaded pending queue: 2835 total (2815 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 - Connected Aviation at RTX
[2026-01-18T22:26:33.715Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T22:26:33.715Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T22:26:33.715Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T22:26:33.716Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T22:26:33.716Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T22:26:33.719Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-01-18T22:26:33.720Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Connected Aviation" @ ORG_75f04b84
[2026-01-18T22:26:33.721Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T22:26:33.725Z] [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T22:26:33.919Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Connected Aviation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Connected Aviation @ RTX',
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
  url: 'https://discord.com/api/v10/channels/CH_717e47bc/threads'
}
[2026-01-18T22:26:33.919Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Connected Aviation
⚠️  Channel full error count: 1/5
[2026-01-18T22:26:36.221Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Connected Aviation @ ORG_75f04b84 in #💻・remote-usa
[2026-01-18T22:26:36.221Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T22:26:37.722Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Connected Aviation @ ORG_75f04b84 (instance #1)
[2026-01-18T22:26:37.723Z] [BOT] 💾 BEFORE ARCHIVING: 2759 jobs in database
[2026-01-18T22:26:37.724Z] [BOT] ✅ No jobs to archive (all 2759 jobs within 7-day window)
[2026-01-18T22:26:37.743Z] [BOT] 💾 Saved posted_jobs.json: 2759 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:26:37.743Z] [BOT] 📍 [ROUTING] "Platform Enabling Software Engineer" @ ORG_9dbe1a97
[2026-01-18T22:26:37.743Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T22:26:38.064Z] [BOT] ✅ Created forum post: 🔷 Platform Enabling Software Engineer @ ORG_9dbe1a97 in #💻・tech-jobs
[2026-01-18T22:26:38.064Z] [BOT] ✅ Industry: Platform Enabling Software Engineer @ ORG_9dbe1a97
[2026-01-18T22:26:39.887Z] [BOT] ✅ Created forum post: 🔷 Platform Enabling Software Engineer @ ORG_9dbe1a97 in #💻・remote-usa
[2026-01-18T22:26:39.887Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T22:26:41.387Z] [BOT] 💾 Marked as posted: Platform Enabling Software Engineer @ ORG_9dbe1a97 (instance #1)
[2026-01-18T22:26:41.387Z] [BOT] 💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-18T22:26:41.389Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-18T22:26:41.404Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:26:41.404Z] [BOT] 📍 [ROUTING] "Clinical Analytics Analyst - IS Analytic Health" @ ORG_0f4848d3ing Health
[2026-01-18T22:26:41.404Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-18T22:26:41.628Z] [BOT] ✅ Created forum post: 🏢 Clinical Analytics Analyst - IS Analytic Health @ ORG_0f4848d3ing Health in #💻・tech-jobs
  ✅ Industry: Clinical Analytics Analyst - IS Analytic Health @ ORG_0f4848d3ing Health
[2026-01-18T22:26:43.425Z] [BOT] ✅ Created forum post: 🏢 Clinical Analytics Analyst - IS Analytic Health @ ORG_0f4848d3ing Health in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T22:26:44.926Z] [BOT] 💾 Marked as posted: Clinical Analytics Analyst - IS Analytic Health @ ORG_0f4848d3ing Health (instance #1)
[2026-01-18T22:26:44.926Z] [BOT] 💾 BEFORE ARCHIVING: 2761 jobs in database
[2026-01-18T22:26:44.928Z] [BOT] ✅ No jobs to archive (all 2761 jobs within 7-day window)
[2026-01-18T22:26:44.948Z] [BOT] 💾 Saved posted_jobs.json: 2761 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:26:44.949Z] [BOT] 📍 [ROUTING] "IT Data Solutions Developer Associate" @ ORG_810ace5b Health Care
[2026-01-18T22:26:44.949Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T22:26:45.260Z] [BOT] ✅ Created forum post: 🏢 IT Data Solutions Developer Associate @ ORG_810ace5b Health Care in #💻・tech-jobs
[2026-01-18T22:26:45.260Z] [BOT] ✅ Industry: IT Data Solutions Developer Associate @ ORG_810ace5b Health Care
[2026-01-18T22:26:47.013Z] [BOT] ✅ Created forum post: 🏢 IT Data Solutions Developer Associate @ ORG_810ace5b Health Care in #🌆・chicago
[2026-01-18T22:26:47.013Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-18T22:26:48.514Z] [BOT] 💾 Marked as posted: IT Data Solutions Developer Associate @ ORG_810ace5b Health Care (instance #1)
[2026-01-18T22:26:48.514Z] [BOT] 💾 BEFORE ARCHIVING: 2762 jobs in database
[2026-01-18T22:26:48.516Z] [BOT] ✅ No jobs to archive (all 2762 jobs within 7-day window)
[2026-01-18T22:26:48.535Z] [BOT] 💾 Saved posted_jobs.json: 2762 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:26:48.536Z] [BOT] 📍 [ROUTING] "Forward Deployed Engineer" @ ORG_213985e1
   Category: TECH (matched: "engineer/engineering")
[2026-01-18T22:26:48.536Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T22:26:48.801Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Engineer @ ORG_213985e1 in #💻・tech-jobs
  ✅ Industry: Forward Deployed Engineer @ ORG_213985e1
[2026-01-18T22:26:50.517Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Engineer @ ORG_213985e1 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T22:26:52.018Z] [BOT] 💾 Marked as posted: Forward Deployed Engineer @ ORG_213985e1 (instance #1)
[2026-01-18T22:26:52.018Z] [BOT] 💾 BEFORE ARCHIVING: 2763 jobs in database
[2026-01-18T22:26:52.020Z] [BOT] ✅ No jobs to archive (all 2763 jobs within 7-day window)
[2026-01-18T22:26:52.036Z] [BOT] 💾 Saved posted_jobs.json: 2763 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:26:52.037Z] [BOT] 📍 [ROUTING] "Contractor - Tutoring Data - Contractor" @ ORG_68ca5164
[2026-01-18T22:26:52.037Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T22:26:52.448Z] [BOT] ✅ Created forum post: 🏢 Contractor - Tutoring Data - Contractor @ ORG_68ca5164 in #💻・tech-jobs
  ✅ Industry: Contractor - Tutoring Data - Contractor @ ORG_68ca5164
[2026-01-18T22:26:54.188Z] [BOT] ✅ Created forum post: 🏢 Contractor - Tutoring Data - Contractor @ ORG_68ca5164 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T22:26:55.688Z] [BOT] 💾 Marked as posted: Contractor - Tutoring Data - Contractor @ ORG_68ca5164 (instance #1)
[2026-01-18T22:26:55.689Z] [BOT] 💾 BEFORE ARCHIVING: 2764 jobs in database
[2026-01-18T22:26:55.691Z] [BOT] ✅ No jobs to archive (all 2764 jobs within 7-day window)
[2026-01-18T22:26:55.708Z] [BOT] 💾 Saved posted_jobs.json: 2764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:26:55.709Z] [BOT] 📍 [ROUTING] "Associate Engineer - Cloud Development" @ ORG_c339827b
[2026-01-18T22:26:55.709Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T22:26:55.996Z] [BOT] ✅ Created forum post: 🏢 Associate Engineer - Cloud Development @ ORG_c339827b in #💻・tech-jobs
  ✅ Industry: Associate Engineer - Cloud Development @ ORG_c339827b
[2026-01-18T22:26:57.791Z] [BOT] ✅ Created forum post: 🏢 Associate Engineer - Cloud Development @ ORG_c339827b in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-18T22:26:59.293Z] [BOT] 💾 Marked as posted: Associate Engineer - Cloud Development @ ORG_c339827b (instance #1)
[2026-01-18T22:26:59.293Z] [BOT] 💾 BEFORE ARCHIVING: 2765 jobs in database
[2026-01-18T22:26:59.295Z] [BOT] ✅ No jobs to archive (all 2765 jobs within 7-day window)
[2026-01-18T22:26:59.311Z] [BOT] 💾 Saved posted_jobs.json: 2765 active jobs
[2026-01-18T22:26:59.311Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T22:26:59.311Z] [BOT] 📍 [ROUTING] "Raytheon ISMA Engineer 1" @ ORG_75f04b84
[2026-01-18T22:26:59.312Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T22:26:59.506Z] [BOT] ✅ Created forum post: 🏢 Raytheon ISMA Engineer 1 @ ORG_75f04b84 in #💻・tech-jobs
[2026-01-18T22:26:59.506Z] [BOT] ✅ Industry: Raytheon ISMA Engineer 1 @ ORG_75f04b84
[2026-01-18T22:27:01.355Z] [BOT] ✅ Created forum post: 🏢 Raytheon ISMA Engineer 1 @ ORG_75f04b84 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-18T22:27:02.856Z] [BOT] 💾 Marked as posted: Raytheon ISMA Engineer 1 @ ORG_75f04b84 (instance #1)
💾 BEFORE ARCHIVING: 2766 jobs in database
[2026-01-18T22:27:02.858Z] [BOT] ✅ No jobs to archive (all 2766 jobs within 7-day window)
[2026-01-18T22:27:02.874Z] [BOT] 💾 Saved posted_jobs.json: 2766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:27:02.875Z] [BOT] 📍 [ROUTING] "Senior Software Development Engineer" @ ORG_7eece419
[2026-01-18T22:27:02.875Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T22:27:03.063Z] [BOT] ✅ Created forum post: 🏢 Senior Software Development Engineer @ ORG_7eece419 in #💻・tech-jobs
[2026-01-18T22:27:03.063Z] [BOT] ✅ Industry: Senior Software Development Engineer @ ORG_7eece419
[2026-01-18T22:27:04.565Z] [BOT] 💾 Marked as posted: Senior Software Development Engineer @ ORG_7eece419 (instance #1)
[2026-01-18T22:27:04.565Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-18T22:27:04.567Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-18T22:27:04.584Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:27:07.585Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-18T22:27:07.586Z] [BOT] 📍 [ROUTING] "Triage Associate 1" @ ORG_238a676d AI
[2026-01-18T22:27:07.586Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T22:27:07.839Z] [BOT] ✅ Created forum post: 🏢 Triage Associate 1 @ ORG_238a676d AI in #🤖・ai-jobs
[2026-01-18T22:27:07.839Z] [BOT] ✅ Industry: Triage Associate 1 @ ORG_238a676d AI
[2026-01-18T22:27:10.100Z] [BOT] ✅ Created forum post: 🏢 Triage Associate 1 @ ORG_238a676d AI in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T22:27:11.600Z] [BOT] 💾 Marked as posted: Triage Associate 1 @ ORG_238a676d AI (instance #1)
[2026-01-18T22:27:11.600Z] [BOT] 💾 BEFORE ARCHIVING: 2768 jobs in database
[2026-01-18T22:27:11.602Z] [BOT] ✅ No jobs to archive (all 2768 jobs within 7-day window)
[2026-01-18T22:27:11.619Z] [BOT] 💾 Saved posted_jobs.json: 2768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:27:14.619Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-18T22:27:14.619Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_6eac5d30-_01816959 (posted within 7 days)
[2026-01-18T22:27:14.620Z] [BOT] ⏭️  Skipping duplicate: JID_696f8276-engineer_jr0279546 (posted within 7 days)
[2026-01-18T22:27:14.620Z] [BOT] ⏭️  Skipping duplicate: JID_6ff14097 (posted within 7 days)
[2026-01-18T22:27:14.620Z] [BOT] ⏭️  Skipping duplicate: JID_09934be7-associate_r178892 (posted within 7 days)
⏭️  Skipping duplicate: JID_1cc9c6cb (posted within 7 days)
⏭️  Skipping duplicate: JID_8a0f8aa5-amplify_careers-JID_b931c7cc-_req_12395 (posted within 7 days)
[2026-01-18T22:27:14.620Z] [BOT] ⏭️  Skipping duplicate: JID_3003029b-resmed_external_careers-JID_39d1f227-development_jr_047682-1 (posted within 7 days)
[2026-01-18T22:27:14.621Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_cd3699cb-onsite_01816801 (posted within 7 days)
[2026-01-18T22:27:14.621Z] [BOT] ⏭️  Skipping duplicate: JID_a0da2a11 (posted within 7 days)
[2026-01-18T22:27:14.621Z] [BOT] ⏭️  Skipping duplicate: JID_df78494e (posted within 7 days)
[2026-01-18T22:27:14.749Z] [BOT] ✅ Loaded pending queue: 2835 total (2815 pending, 20 enriched, 0 posted)
[2026-01-18T22:27:14.921Z] [BOT] ✅ Saved pending queue: 2835 total (2815 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-18T22:27:14.921Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-18T22:27:14.983Z] [BOT] 📂 Loaded 4895 existing routing entries
[2026-01-18T22:27:15.054Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4905
[2026-01-18T22:27:15.054Z] [BOT] Timestamp: 2026-01-18T22:27:15.034Z
[2026-01-18T22:27:15.054Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T22:27:15.055Z] [BOT] Total attempts: 19
   Successful: 18
   Failed: 1
   Skipped: 0
[2026-01-18T22:27:15.055Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T22:27:15.055Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #💻・remote-usa: 4 posts
[2026-01-18T22:27:15.055Z] [BOT] 3. #🌉・san-francisco: 2 posts
     4. #🌆・chicago: 1 posts
     5. #🦢・los-angeles: 1 posts
[2026-01-18T22:27:15.055Z] [BOT] [STATS] Channel stats saved
[2026-01-18T22:27:17.080Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Connected Aviation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Connected Aviation
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*