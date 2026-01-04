# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T05:44:22.348Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 4
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T05:43:30.796Z] ========================================
[2026-01-04T05:43:30.798Z] Discord Bot Execution Log
[2026-01-04T05:43:30.798Z] Environment: GitHub Actions
[2026-01-04T05:43:30.798Z] Node Version: v20.19.6
[2026-01-04T05:43:30.798Z] ========================================
[2026-01-04T05:43:30.798Z] Environment Variables Check:
[2026-01-04T05:43:30.798Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T05:43:30.799Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T05:43:30.799Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T05:43:30.799Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T05:43:30.799Z] 
Multi-Channel Configuration:
[2026-01-04T05:43:30.799Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T05:43:30.799Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T05:43:30.799Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T05:43:30.799Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T05:43:30.799Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T05:43:30.799Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T05:43:30.799Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T05:43:30.799Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T05:43:30.800Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T05:43:30.800Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T05:43:30.800Z] 
Data Files Check:
[2026-01-04T05:43:30.801Z] .github/data/new_jobs.json: ✅ Exists (10 items, 153744 bytes)
[2026-01-04T05:43:30.804Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 452920 bytes)
[2026-01-04T05:43:30.804Z] 
========================================
[2026-01-04T05:43:30.804Z] Starting Enhanced Discord Bot...
[2026-01-04T05:43:30.804Z] ========================================
[2026-01-04T05:43:31.341Z] [BOT] ✅ Loaded V2 database: 898 jobs
[2026-01-04T05:43:31.841Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T05:43:31.841Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T05:43:31.841Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T05:43:31.845Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T05:43:31.912Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T05:43:32.001Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T05:43:32.004Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T05:43:32.004Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T05:43:32.005Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T05:43:32.005Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T05:43:32.005Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T05:43:32.011Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-04T05:43:32.011Z] [BOT] 📍 [ROUTING] "Head of Partner Experience & Success" @ anthropic
[2026-01-04T05:43:32.011Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T05:43:32.029Z] [BOT ERROR] (node:2576) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T05:43:32.170Z] [BOT ERROR] ❌ Error posting job Head of Partner Experience & Success: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Head of Partner Experience & Success @ anthropic',
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
[2026-01-04T05:43:32.170Z] [BOT] ❌ Industry post failed: Head of Partner Experience & Success
⚠️  Channel full error count: 1/5
[2026-01-04T05:43:33.925Z] [BOT] ✅ Created forum post: 🏢 Head of Partner Experience & Success @ anthropic in #🌉・san-francisco
[2026-01-04T05:43:33.925Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T05:43:35.427Z] [BOT] 💾 Marked as posted: Head of Partner Experience & Success @ anthropic (instance #1)
[2026-01-04T05:43:35.427Z] [BOT] 💾 BEFORE ARCHIVING: 899 jobs in database
[2026-01-04T05:43:35.428Z] [BOT] ✅ No jobs to archive (all 899 jobs within 7-day window)
[2026-01-04T05:43:35.437Z] [BOT] 💾 Saved posted_jobs.json: 899 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:43:35.437Z] [BOT] 📍 [ROUTING] "Senior CES Operations Manager" @ figma
[2026-01-04T05:43:35.437Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T05:43:35.637Z] [BOT] ✅ Created forum post: 🏢 Senior CES Operations Manager @ figma in #💲・sales-jobs
[2026-01-04T05:43:35.637Z] [BOT] ✅ Industry: Senior CES Operations Manager @ figma
[2026-01-04T05:43:37.324Z] [BOT] ✅ Created forum post: 🏢 Senior CES Operations Manager @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:43:38.824Z] [BOT] 💾 Marked as posted: Senior CES Operations Manager @ figma (instance #1)
[2026-01-04T05:43:38.825Z] [BOT] 💾 BEFORE ARCHIVING: 900 jobs in database
[2026-01-04T05:43:38.825Z] [BOT] ✅ No jobs to archive (all 900 jobs within 7-day window)
[2026-01-04T05:43:38.831Z] [BOT] 💾 Saved posted_jobs.json: 900 active jobs
[2026-01-04T05:43:38.831Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:43:38.832Z] [BOT] 📍 [ROUTING] "Global Indirect - Sales Tax & VAT" @ anthropic
[2026-01-04T05:43:38.832Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T05:43:39.128Z] [BOT] ✅ Created forum post: 🏢 Global Indirect - Sales Tax & VAT @ anthropic in #💲・sales-jobs
  ✅ Industry: Global Indirect - Sales Tax & VAT @ anthropic
[2026-01-04T05:43:40.855Z] [BOT] ✅ Created forum post: 🏢 Global Indirect - Sales Tax & VAT @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:43:42.355Z] [BOT] 💾 Marked as posted: Global Indirect - Sales Tax & VAT @ anthropic (instance #1)
[2026-01-04T05:43:42.355Z] [BOT] 💾 BEFORE ARCHIVING: 901 jobs in database
[2026-01-04T05:43:42.356Z] [BOT] ✅ No jobs to archive (all 901 jobs within 7-day window)
[2026-01-04T05:43:42.362Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:43:45.363Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T05:43:45.363Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager, Nitro" @ discord
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T05:43:45.541Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager, Nitro @ discord in #📣・marketing-jobs
  ✅ Industry: Senior Product Marketing Manager, Nitro @ discord
[2026-01-04T05:43:47.505Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager, Nitro @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:43:49.006Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager, Nitro @ discord (instance #1)
[2026-01-04T05:43:49.006Z] [BOT] 💾 BEFORE ARCHIVING: 902 jobs in database
[2026-01-04T05:43:49.007Z] [BOT] ✅ No jobs to archive (all 902 jobs within 7-day window)
[2026-01-04T05:43:49.014Z] [BOT] 💾 Saved posted_jobs.json: 902 active jobs
[2026-01-04T05:43:49.014Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:43:52.014Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-04T05:43:52.015Z] [BOT] 📍 [ROUTING] "Illustrator, Thrive Intern" @ duolingo
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T05:43:52.379Z] [BOT] ✅ Created forum post: 🏢 Illustrator, Thrive Intern @ duolingo in #💻・tech-jobs
  ✅ Industry: Illustrator, Thrive Intern @ duolingo
[2026-01-04T05:43:53.881Z] [BOT] 💾 Marked as posted: Illustrator, Thrive Intern @ duolingo (instance #1)
[2026-01-04T05:43:53.881Z] [BOT] 💾 BEFORE ARCHIVING: 903 jobs in database
[2026-01-04T05:43:53.882Z] [BOT] ✅ No jobs to archive (all 903 jobs within 7-day window)
[2026-01-04T05:43:53.890Z] [BOT] 💾 Saved posted_jobs.json: 903 active jobs
[2026-01-04T05:43:53.890Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:43:53.890Z] [BOT] 📍 [ROUTING] "Staff iOS Engineer, App Builds" @ duolingo
[2026-01-04T05:43:53.890Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T05:43:54.033Z] [BOT] ✅ Created forum post: 🏢 Staff iOS Engineer, App Builds @ duolingo in #💻・tech-jobs
  ✅ Industry: Staff iOS Engineer, App Builds @ duolingo
[2026-01-04T05:43:55.842Z] [BOT] ✅ Created forum post: 🏢 Staff iOS Engineer, App Builds @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T05:43:57.343Z] [BOT] 💾 Marked as posted: Staff iOS Engineer, App Builds @ duolingo (instance #1)
[2026-01-04T05:43:57.343Z] [BOT] 💾 BEFORE ARCHIVING: 904 jobs in database
[2026-01-04T05:43:57.344Z] [BOT] ✅ No jobs to archive (all 904 jobs within 7-day window)
[2026-01-04T05:43:57.351Z] [BOT] 💾 Saved posted_jobs.json: 904 active jobs
[2026-01-04T05:43:57.351Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:43:57.351Z] [BOT] 📍 [ROUTING] "Senior iOS Engineer, App Builds" @ duolingo
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T05:43:57.351Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T05:43:57.509Z] [BOT] ✅ Created forum post: 🏢 Senior iOS Engineer, App Builds @ duolingo in #💻・tech-jobs
  ✅ Industry: Senior iOS Engineer, App Builds @ duolingo
[2026-01-04T05:43:59.203Z] [BOT] ✅ Created forum post: 🏢 Senior iOS Engineer, App Builds @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T05:44:00.703Z] [BOT] 💾 Marked as posted: Senior iOS Engineer, App Builds @ duolingo (instance #1)
[2026-01-04T05:44:00.704Z] [BOT] 💾 BEFORE ARCHIVING: 905 jobs in database
[2026-01-04T05:44:00.705Z] [BOT] ✅ No jobs to archive (all 905 jobs within 7-day window)
[2026-01-04T05:44:00.712Z] [BOT] 💾 Saved posted_jobs.json: 905 active jobs
[2026-01-04T05:44:00.712Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:44:03.712Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-04T05:44:03.712Z] [BOT] 📍 [ROUTING] "Marketing Strategy Manager" @ figma
[2026-01-04T05:44:03.712Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
[2026-01-04T05:44:03.713Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-04T05:44:03.909Z] [BOT] ✅ Created forum post: 🏢 Marketing Strategy Manager @ figma in #📈・JID_fb739488
  ✅ Industry: Marketing Strategy Manager @ figma
[2026-01-04T05:44:05.553Z] [BOT] ✅ Created forum post: 🏢 Marketing Strategy Manager @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:44:07.053Z] [BOT] 💾 Marked as posted: Marketing Strategy Manager @ figma (instance #1)
[2026-01-04T05:44:07.053Z] [BOT] 💾 BEFORE ARCHIVING: 906 jobs in database
[2026-01-04T05:44:07.054Z] [BOT] ✅ No jobs to archive (all 906 jobs within 7-day window)
[2026-01-04T05:44:07.061Z] [BOT] 💾 Saved posted_jobs.json: 906 active jobs
[2026-01-04T05:44:07.061Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:44:07.061Z] [BOT] 📍 [ROUTING] "Product Manager, Core Product" @ discord
[2026-01-04T05:44:07.061Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-04T05:44:07.224Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Core Product @ discord in #📈・JID_fb739488
[2026-01-04T05:44:07.224Z] [BOT] ✅ Industry: Product Manager, Core Product @ discord
[2026-01-04T05:44:08.849Z] [BOT ERROR] ❌ Error posting job Product Manager, Core Product: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Product Manager, Core Product @ discord',
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
[2026-01-04T05:44:08.849Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T05:44:10.349Z] [BOT] 💾 Marked as posted: Product Manager, Core Product @ discord (instance #1)
[2026-01-04T05:44:10.349Z] [BOT] 💾 BEFORE ARCHIVING: 907 jobs in database
[2026-01-04T05:44:10.350Z] [BOT] ✅ No jobs to archive (all 907 jobs within 7-day window)
[2026-01-04T05:44:10.358Z] [BOT] 💾 Saved posted_jobs.json: 907 active jobs
[2026-01-04T05:44:10.358Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:44:13.358Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-04T05:44:13.358Z] [BOT] 📍 [ROUTING] "Manager of Solutions Architecture, Applied AI" @ anthropic
[2026-01-04T05:44:13.358Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T05:44:13.468Z] [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Manager of Solutions Architecture, Applied AI @ anthropic',
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
  url: 'https://discord.com/api/v10/channels/CH_36e7e449/threads'
}
[2026-01-04T05:44:13.468Z] [BOT] ❌ Industry post failed: Manager of Solutions Architecture, Applied AI
⚠️  Channel full error count: 1/5
[2026-01-04T05:44:15.075Z] [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Manager of Solutions Architecture, Applied AI @ anthropic',
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
[2026-01-04T05:44:15.076Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T05:44:19.577Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-04T05:44:19.577Z] [BOT] ⏭️  Skipping duplicate: JID_6f9d89d8 (posted within 7 days)
[2026-01-04T05:44:19.577Z] [BOT] ⏭️  Skipping duplicate: JID_77c1d578 (posted within 7 days)
[2026-01-04T05:44:19.577Z] [BOT] ⏭️  Skipping duplicate: JID_97e87354 (posted within 7 days)
[2026-01-04T05:44:19.577Z] [BOT] ⏭️  Skipping duplicate: JID_eb54c2b6 (posted within 7 days)
⏭️  Skipping duplicate: JID_98962c52 (posted within 7 days)
[2026-01-04T05:44:19.577Z] [BOT] ⏭️  Skipping duplicate: JID_6006fee5 (posted within 7 days)
[2026-01-04T05:44:19.578Z] [BOT] ⏭️  Skipping duplicate: JID_5686fd03 (posted within 7 days)
[2026-01-04T05:44:19.578Z] [BOT] ⏭️  Skipping duplicate: JID_ee6462dd (posted within 7 days)
⏭️  Skipping duplicate: JID_e951055e (posted within 7 days)
[2026-01-04T05:44:19.612Z] [BOT] ✅ Loaded pending queue: 391 total (371 pending, 20 enriched, 0 posted)
[2026-01-04T05:44:19.649Z] [BOT] ✅ Saved pending queue: 391 total (371 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T05:44:19.698Z] [BOT] 📂 Loaded 1799 existing routing entries
[2026-01-04T05:44:19.746Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T05:44:19.746Z] [BOT] Total entries: 1809
   Timestamp: 2026-01-04T05:44:19.739Z
[2026-01-04T05:44:19.747Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T05:44:19.747Z] [BOT] Total attempts: 19
   Successful: 15
   Failed: 4
   Skipped: 0
[2026-01-04T05:44:19.747Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 5 posts
     2. #💻・tech-jobs: 3 posts
     3. #💲・sales-jobs: 2 posts
     4. #🗽・new-york: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2026-01-04T05:44:19.748Z] [BOT] [STATS] Channel stats saved
[2026-01-04T05:44:21.763Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2576) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Head of Partner Experience & Success: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Head of Partner Experience & Success
- [BOT ERROR] ❌ Error posting job Product Manager, Core Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Manager of Solutions Architecture, Applied AI
- [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*