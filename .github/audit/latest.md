# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T19:32:00.618Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T19:31:10.584Z] ========================================
[2026-01-13T19:31:10.586Z] Discord Bot Execution Log
[2026-01-13T19:31:10.586Z] Environment: GitHub Actions
[2026-01-13T19:31:10.586Z] Node Version: v20.19.6
[2026-01-13T19:31:10.586Z] ========================================
[2026-01-13T19:31:10.586Z] Environment Variables Check:
[2026-01-13T19:31:10.586Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T19:31:10.586Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T19:31:10.586Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T19:31:10.586Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T19:31:10.586Z] 
Multi-Channel Configuration:
[2026-01-13T19:31:10.586Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T19:31:10.587Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T19:31:10.587Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T19:31:10.587Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T19:31:10.587Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T19:31:10.587Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T19:31:10.587Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T19:31:10.587Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T19:31:10.587Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T19:31:10.587Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T19:31:10.587Z] 
Data Files Check:
[2026-01-13T19:31:10.588Z] .github/data/new_jobs.json: ✅ Exists (10 items, 168823 bytes)
[2026-01-13T19:31:10.592Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 485871 bytes)
[2026-01-13T19:31:10.592Z] 
========================================
[2026-01-13T19:31:10.592Z] Starting Enhanced Discord Bot...
[2026-01-13T19:31:10.592Z] ========================================
[2026-01-13T19:31:11.117Z] [BOT] ✅ Loaded V2 database: 921 jobs
[2026-01-13T19:31:11.703Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T19:31:11.704Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T19:31:11.704Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T19:31:11.813Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer, Web Product at anthropic
[2026-01-13T19:31:11.815Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T19:31:11.816Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T19:31:11.816Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T19:31:11.817Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-13T19:31:11.817Z] [BOT] (6 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Android Software Engineer, Ad Formats @ reddit: chicago, san francisco, new york
   - iOS Software Engineer, Ad Formats @ reddit: chicago, new york
   - Senior Android Engineer, Apps Platform (Performance) @ reddit: chicago, new york
[2026-01-13T19:31:11.817Z] [BOT] - Senior iOS Software Engineer, iOS Platform @ reddit: los angeles, new york, san francisco
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T19:31:11.821Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-13T19:31:11.821Z] [BOT] 📍 [ROUTING] "Software Engineer, Web Product" @ anthropic
[2026-01-13T19:31:11.821Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:31:11.826Z] [BOT ERROR] (node:2694) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T19:31:12.036Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Web Product @ anthropic in #💻・tech-jobs
[2026-01-13T19:31:12.036Z] [BOT] ✅ Industry: Software Engineer, Web Product @ anthropic
[2026-01-13T19:31:13.795Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Web Product @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:31:15.297Z] [BOT] 💾 Marked as posted: Software Engineer, Web Product @ anthropic (instance #1)
[2026-01-13T19:31:15.297Z] [BOT] 💾 BEFORE ARCHIVING: 922 jobs in database
[2026-01-13T19:31:15.298Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2026-01-13T19:31:15.308Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
[2026-01-13T19:31:15.309Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:31:18.309Z] [BOT] 📌 Posting 7 jobs to #🤖・ai-jobs
[2026-01-13T19:31:18.309Z] [BOT] 📍 [ROUTING] "Research Engineer, Reward Models Training" @ anthropic
[2026-01-13T19:31:18.310Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T19:31:18.570Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Reward Models Training @ anthropic in #🤖・ai-jobs
[2026-01-13T19:31:18.570Z] [BOT] ✅ Industry: Research Engineer, Reward Models Training @ anthropic
[2026-01-13T19:31:20.306Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Reward Models Training @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:31:21.807Z] [BOT] 💾 Marked as posted: Research Engineer, Reward Models Training @ anthropic (instance #1)
[2026-01-13T19:31:21.807Z] [BOT] 💾 BEFORE ARCHIVING: 923 jobs in database
[2026-01-13T19:31:21.808Z] [BOT] ✅ No jobs to archive (all 923 jobs within 7-day window)
[2026-01-13T19:31:21.816Z] [BOT] 💾 Saved posted_jobs.json: 923 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:31:21.817Z] [BOT] 📍 [ROUTING] "Android Software Engineer, Ad Formats" @ reddit
[2026-01-13T19:31:21.817Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T19:31:21.817Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T19:31:22.151Z] [BOT] ✅ Created forum post: 🏢 Android Software Engineer, Ad Formats @ reddit in #🤖・ai-jobs
  ✅ Industry: Android Software Engineer, Ad Formats @ reddit
[2026-01-13T19:31:24.249Z] [BOT] ✅ Created forum post: 🏢 Android Software Engineer, Ad Formats @ reddit in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-13T19:31:25.749Z] [BOT] 💾 Marked as posted: Android Software Engineer, Ad Formats @ reddit (instance #1)
[2026-01-13T19:31:25.749Z] [BOT] 💾 BEFORE ARCHIVING: 924 jobs in database
[2026-01-13T19:31:25.750Z] [BOT] ✅ No jobs to archive (all 924 jobs within 7-day window)
[2026-01-13T19:31:25.758Z] [BOT] 💾 Saved posted_jobs.json: 924 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:31:25.758Z] [BOT] 💾 Marked as posted: Android Software Engineer, Ad Formats @ reddit (instance #1)
💾 BEFORE ARCHIVING: 925 jobs in database
[2026-01-13T19:31:25.759Z] [BOT] ✅ No jobs to archive (all 925 jobs within 7-day window)
[2026-01-13T19:31:25.766Z] [BOT] 💾 Saved posted_jobs.json: 925 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:31:25.766Z] [BOT] 💾 Marked as posted: Android Software Engineer, Ad Formats @ reddit (instance #1)
💾 BEFORE ARCHIVING: 926 jobs in database
[2026-01-13T19:31:25.766Z] [BOT] ✅ No jobs to archive (all 926 jobs within 7-day window)
[2026-01-13T19:31:25.773Z] [BOT] 💾 Saved posted_jobs.json: 926 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:31:25.773Z] [BOT] 📍 [ROUTING] "iOS Software Engineer, Ad Formats" @ reddit
[2026-01-13T19:31:25.774Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T19:31:26.073Z] [BOT] ✅ Created forum post: 🏢 iOS Software Engineer, Ad Formats @ reddit in #🤖・ai-jobs
[2026-01-13T19:31:26.074Z] [BOT] ✅ Industry: iOS Software Engineer, Ad Formats @ reddit
[2026-01-13T19:31:27.791Z] [BOT] ✅ Created forum post: 🏢 iOS Software Engineer, Ad Formats @ reddit in #🌆・chicago
[2026-01-13T19:31:27.791Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-13T19:31:29.292Z] [BOT] 💾 Marked as posted: iOS Software Engineer, Ad Formats @ reddit (instance #1)
[2026-01-13T19:31:29.292Z] [BOT] 💾 BEFORE ARCHIVING: 927 jobs in database
[2026-01-13T19:31:29.293Z] [BOT] ✅ No jobs to archive (all 927 jobs within 7-day window)
[2026-01-13T19:31:29.299Z] [BOT] 💾 Saved posted_jobs.json: 927 active jobs
[2026-01-13T19:31:29.299Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:31:29.299Z] [BOT] 💾 Marked as posted: iOS Software Engineer, Ad Formats @ reddit (instance #1)
💾 BEFORE ARCHIVING: 928 jobs in database
[2026-01-13T19:31:29.300Z] [BOT] ✅ No jobs to archive (all 928 jobs within 7-day window)
[2026-01-13T19:31:29.306Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
[2026-01-13T19:31:29.306Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:31:29.307Z] [BOT] 📍 [ROUTING] "Senior Android Engineer, Apps Platform (Performance)" @ reddit
[2026-01-13T19:31:29.307Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T19:31:29.594Z] [BOT] ✅ Created forum post: 🏢 Senior Android Engineer, Apps Platform (Performance) @ reddit in #🤖・ai-jobs
[2026-01-13T19:31:29.594Z] [BOT] ✅ Industry: Senior Android Engineer, Apps Platform (Performance) @ reddit
[2026-01-13T19:31:31.310Z] [BOT] ✅ Created forum post: 🏢 Senior Android Engineer, Apps Platform (Performance) @ reddit in #🌆・chicago
[2026-01-13T19:31:31.310Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-13T19:31:32.811Z] [BOT] 💾 Marked as posted: Senior Android Engineer, Apps Platform (Performance) @ reddit (instance #1)
[2026-01-13T19:31:32.812Z] [BOT] 💾 BEFORE ARCHIVING: 929 jobs in database
[2026-01-13T19:31:32.812Z] [BOT] ✅ No jobs to archive (all 929 jobs within 7-day window)
[2026-01-13T19:31:32.818Z] [BOT] 💾 Saved posted_jobs.json: 929 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:31:32.818Z] [BOT] 💾 Marked as posted: Senior Android Engineer, Apps Platform (Performance) @ reddit (instance #1)
[2026-01-13T19:31:32.819Z] [BOT] 💾 BEFORE ARCHIVING: 930 jobs in database
[2026-01-13T19:31:32.819Z] [BOT] ✅ No jobs to archive (all 930 jobs within 7-day window)
[2026-01-13T19:31:32.825Z] [BOT] 💾 Saved posted_jobs.json: 930 active jobs
[2026-01-13T19:31:32.825Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:31:32.826Z] [BOT] 📍 [ROUTING] "Senior Client Account Manager, Large Customer Sales (B2B Tech)" @ reddit
[2026-01-13T19:31:32.827Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-13T19:31:33.076Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit
[2026-01-13T19:31:34.823Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T19:31:36.324Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit (instance #1)
[2026-01-13T19:31:36.325Z] [BOT] 💾 BEFORE ARCHIVING: 931 jobs in database
[2026-01-13T19:31:36.325Z] [BOT] ✅ No jobs to archive (all 931 jobs within 7-day window)
[2026-01-13T19:31:36.331Z] [BOT] 💾 Saved posted_jobs.json: 931 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:31:36.332Z] [BOT] 📍 [ROUTING] "Senior iOS Software Engineer, iOS Platform" @ reddit
[2026-01-13T19:31:36.332Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T19:31:36.989Z] [BOT] ✅ Created forum post: 🏢 Senior iOS Software Engineer, iOS Platform @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior iOS Software Engineer, iOS Platform @ reddit
[2026-01-13T19:31:38.797Z] [BOT] ✅ Created forum post: 🏢 Senior iOS Software Engineer, iOS Platform @ reddit in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-13T19:31:40.297Z] [BOT] 💾 Marked as posted: Senior iOS Software Engineer, iOS Platform @ reddit (instance #1)
[2026-01-13T19:31:40.297Z] [BOT] 💾 BEFORE ARCHIVING: 932 jobs in database
[2026-01-13T19:31:40.298Z] [BOT] ✅ No jobs to archive (all 932 jobs within 7-day window)
[2026-01-13T19:31:40.306Z] [BOT] 💾 Saved posted_jobs.json: 932 active jobs
[2026-01-13T19:31:40.306Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior iOS Software Engineer, iOS Platform @ reddit (instance #1)
💾 BEFORE ARCHIVING: 933 jobs in database
[2026-01-13T19:31:40.306Z] [BOT] ✅ No jobs to archive (all 933 jobs within 7-day window)
[2026-01-13T19:31:40.313Z] [BOT] 💾 Saved posted_jobs.json: 933 active jobs
[2026-01-13T19:31:40.313Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior iOS Software Engineer, iOS Platform @ reddit (instance #1)
💾 BEFORE ARCHIVING: 934 jobs in database
[2026-01-13T19:31:40.314Z] [BOT] ✅ No jobs to archive (all 934 jobs within 7-day window)
[2026-01-13T19:31:40.319Z] [BOT] 💾 Saved posted_jobs.json: 934 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:31:40.320Z] [BOT] 📍 [ROUTING] "Data Scientist  - Business Analytics" @ spotify
[2026-01-13T19:31:40.320Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T19:31:40.565Z] [BOT] ✅ Created forum post: 🏢 Data Scientist  - Business Analytics @ spotify in #🤖・ai-jobs
  ✅ Industry: Data Scientist  - Business Analytics @ spotify
[2026-01-13T19:31:42.297Z] [BOT] ✅ Created forum post: 🏢 Data Scientist  - Business Analytics @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T19:31:43.798Z] [BOT] 💾 Marked as posted: Data Scientist  - Business Analytics @ spotify (instance #1)
[2026-01-13T19:31:43.798Z] [BOT] 💾 BEFORE ARCHIVING: 935 jobs in database
[2026-01-13T19:31:43.799Z] [BOT] ✅ No jobs to archive (all 935 jobs within 7-day window)
[2026-01-13T19:31:43.806Z] [BOT] 💾 Saved posted_jobs.json: 935 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:31:46.807Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-13T19:31:46.808Z] [BOT] 📍 [ROUTING] "Nonprofit Account Executive" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-13T19:31:46.808Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T19:31:47.211Z] [BOT] ✅ Created forum post: 🏢 Nonprofit Account Executive @ anthropic in #💲・sales-jobs
  ✅ Industry: Nonprofit Account Executive @ anthropic
[2026-01-13T19:31:48.937Z] [BOT] ✅ Created forum post: 🏢 Nonprofit Account Executive @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:31:50.438Z] [BOT] 💾 Marked as posted: Nonprofit Account Executive @ anthropic (instance #1)
[2026-01-13T19:31:50.439Z] [BOT] 💾 BEFORE ARCHIVING: 936 jobs in database
[2026-01-13T19:31:50.439Z] [BOT] ✅ No jobs to archive (all 936 jobs within 7-day window)
[2026-01-13T19:31:50.447Z] [BOT] 💾 Saved posted_jobs.json: 936 active jobs
[2026-01-13T19:31:50.447Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:31:50.448Z] [BOT] 📍 [ROUTING] "Community Support Specialist" @ figma
   Category: SALES (matched: "sales")
[2026-01-13T19:31:50.448Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T19:31:50.596Z] [BOT ERROR] ❌ Error posting job Community Support Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Community Support Specialist @ figma',
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
  url: 'https://discord.com/api/v10/channels/CH_0a8e6a27/threads'
}
[2026-01-13T19:31:50.596Z] [BOT] ❌ Industry post failed: Community Support Specialist
⚠️  Channel full error count: 1/5
[2026-01-13T19:31:52.263Z] [BOT ERROR] ❌ Error posting job Community Support Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:935:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Community Support Specialist @ figma',
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
  url: 'https://discord.com/api/v10/channels/CH_fac6befb/threads'
}
[2026-01-13T19:31:52.263Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T19:31:56.765Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-13T19:31:56.766Z] [BOT] ⏭️  Skipping duplicate: JID_07a84756 (posted within 7 days)
[2026-01-13T19:31:56.766Z] [BOT] ⏭️  Skipping duplicate: JID_aa3e041f (posted within 7 days)
[2026-01-13T19:31:56.766Z] [BOT] ⏭️  Skipping duplicate: JID_bd579612 (posted within 7 days)
[2026-01-13T19:31:56.766Z] [BOT] ⏭️  Skipping duplicate: JID_301322c4 (posted within 7 days)
[2026-01-13T19:31:56.767Z] [BOT] ⏭️  Skipping duplicate: JID_e5471d14 (posted within 7 days)
⏭️  Skipping duplicate: JID_95ef8602 (posted within 7 days)
⏭️  Skipping duplicate: JID_70f48c09 (posted within 7 days)
⏭️  Skipping duplicate: JID_30ee4c4d (posted within 7 days)
⏭️  Skipping duplicate: JID_48163599 (posted within 7 days)
[2026-01-13T19:31:56.884Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[2026-01-13T19:31:57.047Z] [BOT] ✅ Saved pending queue: 2726 total (2706 pending, 11 enriched, 9 posted)
[2026-01-13T19:31:57.047Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T19:31:57.100Z] [BOT] 📂 Loaded 3075 existing routing entries
[2026-01-13T19:31:57.158Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T19:31:57.158Z] [BOT] Total entries: 3085
   Timestamp: 2026-01-13T19:31:57.145Z
[2026-01-13T19:31:57.159Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 20
[2026-01-13T19:31:57.159Z] [BOT] Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-13T19:31:57.159Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-13T19:31:57.159Z] [BOT] Total posts: 18
   Channels used: 7
   Top channels:
[2026-01-13T19:31:57.159Z] [BOT] 1. #🤖・ai-jobs: 7 posts
     2. #🌉・san-francisco: 3 posts
     3. #🌆・chicago: 3 posts
     4. #🗽・new-york: 2 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-13T19:31:57.159Z] [BOT] [STATS] Channel stats saved
[2026-01-13T19:31:59.185Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2694) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Community Support Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Community Support Specialist
- [BOT ERROR] ❌ Error posting job Community Support Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*