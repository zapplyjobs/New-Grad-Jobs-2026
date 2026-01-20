# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T01:41:35.190Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T01:40:38.050Z] ========================================
[2026-01-20T01:40:38.052Z] Discord Bot Execution Log
[2026-01-20T01:40:38.052Z] Environment: GitHub Actions
[2026-01-20T01:40:38.052Z] Node Version: v20.19.6
[2026-01-20T01:40:38.052Z] ========================================
[2026-01-20T01:40:38.052Z] Environment Variables Check:
[2026-01-20T01:40:38.052Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T01:40:38.052Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T01:40:38.052Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T01:40:38.053Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T01:40:38.053Z] 
Multi-Channel Configuration:
[2026-01-20T01:40:38.053Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T01:40:38.053Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T01:40:38.053Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T01:40:38.053Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T01:40:38.053Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T01:40:38.053Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T01:40:38.053Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T01:40:38.053Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T01:40:38.053Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T01:40:38.053Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T01:40:38.053Z] 
Data Files Check:
[2026-01-20T01:40:38.054Z] .github/data/new_jobs.json: ✅ Exists (10 items, 55913 bytes)
[2026-01-20T01:40:38.063Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1533494 bytes)
[2026-01-20T01:40:38.063Z] 
========================================
[2026-01-20T01:40:38.063Z] Starting Enhanced Discord Bot...
[2026-01-20T01:40:38.063Z] ========================================
[2026-01-20T01:40:38.585Z] [BOT] ✅ Loaded V2 database: 2792 jobs
[2026-01-20T01:40:39.278Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T01:40:39.278Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T01:40:39.279Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T01:40:39.397Z] [BOT] ✅ Loaded pending queue: 2814 total (2794 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Development Engineer 1 - Early Career at Blue Origin
[2026-01-20T01:40:39.400Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T01:40:39.401Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T01:40:39.401Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T01:40:39.402Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-20T01:40:39.402Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-20T01:40:39.402Z] [BOT] - Associate Machine Learning Engineer @ PitchBook: nyc, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T01:40:39.407Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-20T01:40:39.407Z] [BOT] 📍 [ROUTING] "Software Development Engineer 1 - Early Career" @ ORG_ec7d56a0 Origin
[2026-01-20T01:40:39.408Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-20T01:40:39.412Z] [BOT ERROR] (node:3328) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T01:40:39.547Z] [BOT ERROR] ❌ Error posting job Software Development Engineer 1 - Early Career: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Development Engineer 1 - Early Career @ ORG_ec7d56a0 Origin',
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
[2026-01-20T01:40:39.547Z] [BOT] ❌ Industry post failed: Software Development Engineer 1 - Early Career
⚠️  Channel full error count: 1/5
[2026-01-20T01:40:41.252Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 - Early Career @ ORG_ec7d56a0 Origin in #🌧️・seattle
[2026-01-20T01:40:41.252Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-20T01:40:42.753Z] [BOT] 💾 Marked as posted: Software Development Engineer 1 - Early Career @ ORG_ec7d56a0 Origin (instance #1)
[2026-01-20T01:40:42.753Z] [BOT] 💾 BEFORE ARCHIVING: 2793 jobs in database
[2026-01-20T01:40:42.756Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T01:40:42.761Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-20T01:40:42.761Z] [BOT] ✅ Archiving complete: 10 archived, 2783 active
[2026-01-20T01:40:42.778Z] [BOT] 💾 Saved posted_jobs.json: 2783 active jobs
[2026-01-20T01:40:42.778Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T01:40:42.779Z] [BOT] 📍 [ROUTING] "Senior Software Engineer" @ ORG_3eab285c
[2026-01-20T01:40:42.779Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-20T01:40:43.031Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_3eab285c in #💻・tech-jobs
  ✅ Industry: Senior Software Engineer @ ORG_3eab285c
[2026-01-20T01:40:44.748Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_3eab285c in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-20T01:40:46.249Z] [BOT] 💾 Marked as posted: Senior Software Engineer @ ORG_3eab285c (instance #1)
[2026-01-20T01:40:46.250Z] [BOT] 💾 BEFORE ARCHIVING: 2784 jobs in database
[2026-01-20T01:40:46.252Z] [BOT] ✅ No jobs to archive (all 2784 jobs within 7-day window)
[2026-01-20T01:40:46.266Z] [BOT] 💾 Saved posted_jobs.json: 2784 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T01:40:46.267Z] [BOT] 📍 [ROUTING] "Research Scientist - Foundation Model - Vision and Language" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-20T01:40:46.437Z] [BOT ERROR] ❌ Error posting job Research Scientist - Foundation Model - Vision and Language: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist - Foundation Model - Vision and Language @ ByteDance',
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
[2026-01-20T01:40:46.437Z] [BOT] ❌ Industry post failed: Research Scientist - Foundation Model - Vision and Language
⚠️  Channel full error count: 1/5
[2026-01-20T01:40:48.291Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Foundation Model - Vision and Language @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-20T01:40:48.291Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-20T01:40:49.792Z] [BOT] 💾 Marked as posted: Research Scientist - Foundation Model - Vision and Language @ ORG_08c9a13c (instance #1)
[2026-01-20T01:40:49.793Z] [BOT] 💾 BEFORE ARCHIVING: 2785 jobs in database
[2026-01-20T01:40:49.795Z] [BOT] ✅ No jobs to archive (all 2785 jobs within 7-day window)
[2026-01-20T01:40:49.815Z] [BOT] 💾 Saved posted_jobs.json: 2785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T01:40:52.816Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-20T01:40:52.817Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
[2026-01-20T01:40:52.817Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T01:40:53.082Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2026-01-20T01:40:54.802Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🌧️・seattle
[2026-01-20T01:40:54.802Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-20T01:40:56.302Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-20T01:40:56.303Z] [BOT] 💾 BEFORE ARCHIVING: 2786 jobs in database
[2026-01-20T01:40:56.304Z] [BOT] ✅ No jobs to archive (all 2786 jobs within 7-day window)
[2026-01-20T01:40:56.323Z] [BOT] 💾 Saved posted_jobs.json: 2786 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T01:40:56.324Z] [BOT] 📍 [ROUTING] "AI Engineer – New Graduate" @ ORG_33141a27 AI
[2026-01-20T01:40:56.324Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T01:40:56.569Z] [BOT] ✅ Created forum post: 🏢 AI Engineer – New Graduate @ ORG_33141a27 AI in #🤖・ai-jobs
[2026-01-20T01:40:56.569Z] [BOT] ✅ Industry: AI Engineer – New Graduate @ ORG_33141a27 AI
[2026-01-20T01:40:58.311Z] [BOT] ✅ Created forum post: 🏢 AI Engineer – New Graduate @ ORG_33141a27 AI in #🌉・san-francisco
[2026-01-20T01:40:58.311Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-20T01:40:59.812Z] [BOT] 💾 Marked as posted: AI Engineer – New Graduate @ ORG_33141a27 AI (instance #1)
[2026-01-20T01:40:59.812Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-20T01:40:59.814Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-20T01:40:59.831Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T01:40:59.832Z] [BOT] 📍 [ROUTING] "Associate Machine Learning Engineer" @ ORG_7a291dc3
[2026-01-20T01:40:59.832Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-20T01:41:00.284Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_7a291dc3 in #🤖・ai-jobs
  ✅ Industry: Associate Machine Learning Engineer @ ORG_7a291dc3
[2026-01-20T01:41:02.119Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_7a291dc3 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-20T01:41:03.621Z] [BOT] 💾 Marked as posted: Associate Machine Learning Engineer @ ORG_7a291dc3 (instance #1)
[2026-01-20T01:41:03.621Z] [BOT] 💾 BEFORE ARCHIVING: 2788 jobs in database
[2026-01-20T01:41:03.623Z] [BOT] ✅ No jobs to archive (all 2788 jobs within 7-day window)
[2026-01-20T01:41:03.639Z] [BOT] 💾 Saved posted_jobs.json: 2788 active jobs
[2026-01-20T01:41:03.639Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T01:41:03.639Z] [BOT] 💾 Marked as posted: Associate Machine Learning Engineer @ ORG_7a291dc3 (instance #1)
[2026-01-20T01:41:03.639Z] [BOT] 💾 BEFORE ARCHIVING: 2789 jobs in database
[2026-01-20T01:41:03.641Z] [BOT] ✅ No jobs to archive (all 2789 jobs within 7-day window)
[2026-01-20T01:41:03.658Z] [BOT] 💾 Saved posted_jobs.json: 2789 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T01:41:03.658Z] [BOT] 📍 [ROUTING] "Manager, Partner Product and Delivery" @ spotify
[2026-01-20T01:41:03.658Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-20T01:41:03.868Z] [BOT] ✅ Created forum post: 🏢 Manager, Partner Product and Delivery @ spotify in #🤖・ai-jobs
  ✅ Industry: Manager, Partner Product and Delivery @ spotify
[2026-01-20T01:41:05.584Z] [BOT] ✅ Created forum post: 🏢 Manager, Partner Product and Delivery @ spotify in #💻・remote-usa
[2026-01-20T01:41:05.584Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-20T01:41:07.084Z] [BOT] 💾 Marked as posted: Manager, Partner Product and Delivery @ spotify (instance #1)
[2026-01-20T01:41:07.085Z] [BOT] 💾 BEFORE ARCHIVING: 2790 jobs in database
[2026-01-20T01:41:07.086Z] [BOT] ✅ No jobs to archive (all 2790 jobs within 7-day window)
[2026-01-20T01:41:07.104Z] [BOT] 💾 Saved posted_jobs.json: 2790 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T01:41:10.104Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-20T01:41:10.104Z] [BOT] 📍 [ROUTING] "Real Estate Graduate" @ ORG_9e04a5f8 Group
[2026-01-20T01:41:10.104Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-20T01:41:10.414Z] [BOT] ✅ Created forum post: 🏢 Real Estate Graduate @ ORG_9e04a5f8 Group in #💰・finance-jobs
[2026-01-20T01:41:10.414Z] [BOT] ✅ Industry: Real Estate Graduate @ ORG_9e04a5f8 Group
[2026-01-20T01:41:12.199Z] [BOT] ✅ Created forum post: 🏢 Real Estate Graduate @ ORG_9e04a5f8 Group in #💻・remote-usa
[2026-01-20T01:41:12.200Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-20T01:41:13.701Z] [BOT] 💾 Marked as posted: Real Estate Graduate @ ORG_9e04a5f8 Group (instance #1)
[2026-01-20T01:41:13.701Z] [BOT] 💾 BEFORE ARCHIVING: 2791 jobs in database
[2026-01-20T01:41:13.703Z] [BOT] ✅ No jobs to archive (all 2791 jobs within 7-day window)
[2026-01-20T01:41:13.719Z] [BOT] 💾 Saved posted_jobs.json: 2791 active jobs
[2026-01-20T01:41:13.720Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T01:41:16.721Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-20T01:41:16.721Z] [BOT] 📍 [ROUTING] "Partial Hospitalization Program - PHP - Therapist" @ ORG_64e21aeaint Health
   Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-20T01:41:17.024Z] [BOT] ✅ Created forum post: 🏢 Partial Hospitalization Program - PHP - Therapist @ ORG_64e21aeaint Health in #🩺・healthcare-jobs
[2026-01-20T01:41:17.024Z] [BOT] ✅ Industry: Partial Hospitalization Program - PHP - Therapist @ ORG_64e21aeaint Health
[2026-01-20T01:41:18.736Z] [BOT] ✅ Created forum post: 🏢 Partial Hospitalization Program - PHP - Therapist @ ORG_64e21aeaint Health in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-20T01:41:20.237Z] [BOT] 💾 Marked as posted: Partial Hospitalization Program - PHP - Therapist @ ORG_64e21aeaint Health (instance #1)
[2026-01-20T01:41:20.237Z] [BOT] 💾 BEFORE ARCHIVING: 2792 jobs in database
[2026-01-20T01:41:20.239Z] [BOT] ✅ No jobs to archive (all 2792 jobs within 7-day window)
[2026-01-20T01:41:20.255Z] [BOT] 💾 Saved posted_jobs.json: 2792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T01:41:23.255Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-20T01:41:23.255Z] [BOT] 📍 [ROUTING] "Financial Crimes Data Analyst 1" @ ORG_dca96eca Whitney
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T01:41:24.875Z] [BOT] ✅ Created forum post: 🏢 Financial Crimes Data Analyst 1 @ ORG_dca96eca Whitney in #📈・JID_fb739488
  ✅ Industry: Financial Crimes Data Analyst 1 @ ORG_dca96eca Whitney
[2026-01-20T01:41:26.897Z] [BOT] ✅ Created forum post: 🏢 Financial Crimes Data Analyst 1 @ ORG_dca96eca Whitney in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-20T01:41:28.399Z] [BOT] 💾 Marked as posted: Financial Crimes Data Analyst 1 @ ORG_dca96eca Whitney (instance #1)
[2026-01-20T01:41:28.399Z] [BOT] 💾 BEFORE ARCHIVING: 2793 jobs in database
[2026-01-20T01:41:28.401Z] [BOT] ✅ No jobs to archive (all 2793 jobs within 7-day window)
[2026-01-20T01:41:28.419Z] [BOT] 💾 Saved posted_jobs.json: 2793 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T01:41:31.420Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T01:41:31.421Z] [BOT] ⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
[2026-01-20T01:41:31.421Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
[2026-01-20T01:41:31.421Z] [BOT] ⏭️  Skipping duplicate: JID_b87a4832 (posted within 7 days)
[2026-01-20T01:41:31.421Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378366-1 (posted within 7 days)
[2026-01-20T01:41:31.422Z] [BOT] ⏭️  Skipping duplicate: JID_bfb8d39a (posted within 7 days)
[2026-01-20T01:41:31.422Z] [BOT] ⏭️  Skipping duplicate: JID_9f131a57-cx_1-job-309521 (posted within 7 days)
[2026-01-20T01:41:31.422Z] [BOT] ⏭️  Skipping duplicate: JID_bc80fdc0 (posted within 7 days)
[2026-01-20T01:41:31.422Z] [BOT] ⏭️  Skipping duplicate: JID_1fec24fe-1_r016047 (posted within 7 days)
[2026-01-20T01:41:31.422Z] [BOT] ⏭️  Skipping duplicate: JID_fc856bea (posted within 7 days)
[2026-01-20T01:41:31.422Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_f968c32f-detail (posted within 7 days)
[2026-01-20T01:41:31.547Z] [BOT] ✅ Loaded pending queue: 2814 total (2794 pending, 20 enriched, 0 posted)
[2026-01-20T01:41:31.729Z] [BOT] ✅ Saved pending queue: 2814 total (2794 pending, 10 enriched, 10 posted)
[2026-01-20T01:41:31.729Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T01:41:31.791Z] [BOT] 📂 Loaded 5235 existing routing entries
[2026-01-20T01:41:31.863Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5245
   Timestamp: 2026-01-20T01:41:31.841Z
[2026-01-20T01:41:31.863Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 20
[2026-01-20T01:41:31.863Z] [BOT] Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-20T01:41:31.864Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 10
   Top channels:
     1. #🤖・ai-jobs: 4 posts
     2. #💻・remote-usa: 4 posts
     3. #🌧️・seattle: 2 posts
     4. #🌉・san-francisco: 2 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-20T01:41:31.864Z] [BOT] [STATS] Channel stats saved
[2026-01-20T01:41:33.890Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3328) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Development Engineer 1 - Early Career: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Development Engineer 1 - Early Career
- [BOT ERROR] ❌ Error posting job Research Scientist - Foundation Model - Vision and Language: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist - Foundation Model - Vision and Language
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*