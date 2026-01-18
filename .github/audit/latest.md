# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T09:27:27.508Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 6
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T09:27:08.367Z] ========================================
[2026-01-18T09:27:08.369Z] Discord Bot Execution Log
[2026-01-18T09:27:08.369Z] Environment: GitHub Actions
[2026-01-18T09:27:08.369Z] Node Version: v20.19.6
[2026-01-18T09:27:08.369Z] ========================================
[2026-01-18T09:27:08.369Z] Environment Variables Check:
[2026-01-18T09:27:08.369Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T09:27:08.369Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T09:27:08.369Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T09:27:08.370Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T09:27:08.370Z] 
Multi-Channel Configuration:
[2026-01-18T09:27:08.370Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T09:27:08.370Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T09:27:08.370Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T09:27:08.370Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T09:27:08.370Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T09:27:08.370Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T09:27:08.370Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T09:27:08.370Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T09:27:08.370Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T09:27:08.370Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T09:27:08.370Z] 
Data Files Check:
[2026-01-18T09:27:08.371Z] .github/data/new_jobs.json: ✅ Exists (10 items, 145698 bytes)
[2026-01-18T09:27:08.382Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1453902 bytes)
[2026-01-18T09:27:08.382Z] 
========================================
[2026-01-18T09:27:08.382Z] Starting Enhanced Discord Bot...
[2026-01-18T09:27:08.382Z] ========================================
[2026-01-18T09:27:08.870Z] [BOT] ✅ Loaded V2 database: 2682 jobs
[2026-01-18T09:27:09.701Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T09:27:09.701Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T09:27:09.701Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T09:27:09.857Z] [BOT] ✅ Loaded pending queue: 2841 total (2821 pending, 20 enriched, 0 posted)
[2026-01-18T09:27:09.859Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Startups Solutions Architect, Applied AI at anthropic
[2026-01-18T09:27:09.862Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T09:27:09.862Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T09:27:09.862Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T09:27:09.863Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T09:27:09.863Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T09:27:09.868Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-18T09:27:09.868Z] [BOT] 📍 [ROUTING] "Startups Solutions Architect, Applied AI" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-18T09:27:09.868Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T09:27:09.872Z] [BOT ERROR] (node:2435) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T09:27:10.046Z] [BOT ERROR] ❌ Error posting job Startups Solutions Architect, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Startups Solutions Architect, Applied AI @ anthropic',
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
[2026-01-18T09:27:10.046Z] [BOT] ❌ Industry post failed: Startups Solutions Architect, Applied AI
⚠️  Channel full error count: 1/5
[2026-01-18T09:27:11.753Z] [BOT] ✅ Created forum post: 🏢 Startups Solutions Architect, Applied AI @ anthropic in #🌉・san-francisco
[2026-01-18T09:27:11.754Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T09:27:13.254Z] [BOT] 💾 Marked as posted: Startups Solutions Architect, Applied AI @ anthropic (instance #1)
[2026-01-18T09:27:13.254Z] [BOT] 💾 BEFORE ARCHIVING: 2683 jobs in database
[2026-01-18T09:27:13.256Z] [BOT] ✅ No jobs to archive (all 2683 jobs within 7-day window)
[2026-01-18T09:27:13.274Z] [BOT] 💾 Saved posted_jobs.json: 2683 active jobs
[2026-01-18T09:27:13.274Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T09:27:13.274Z] [BOT] 📍 [ROUTING] "Product Designer - Music Mission" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T09:27:13.423Z] [BOT ERROR] ❌ Error posting job Product Designer - Music Mission: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Designer - Music Mission @ spotify',
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
[2026-01-18T09:27:13.423Z] [BOT] ❌ Industry post failed: Product Designer - Music Mission
⚠️  Channel full error count: 2/5
[2026-01-18T09:27:15.121Z] [BOT] ✅ Created forum post: 🏢 Product Designer - Music Mission @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T09:27:16.621Z] [BOT] 💾 Marked as posted: Product Designer - Music Mission @ spotify (instance #1)
[2026-01-18T09:27:16.622Z] [BOT] 💾 BEFORE ARCHIVING: 2684 jobs in database
[2026-01-18T09:27:16.624Z] [BOT] ✅ No jobs to archive (all 2684 jobs within 7-day window)
[2026-01-18T09:27:16.640Z] [BOT] 💾 Saved posted_jobs.json: 2684 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T09:27:16.640Z] [BOT] 📍 [ROUTING] "Mixed Methods Researcher - Music Mission" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T09:27:16.640Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-18T09:27:16.776Z] [BOT ERROR] ❌ Error posting job Mixed Methods Researcher - Music Mission: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Mixed Methods Researcher - Music Mission @ spotify',
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
[2026-01-18T09:27:16.776Z] [BOT] ❌ Industry post failed: Mixed Methods Researcher - Music Mission
⚠️  Channel full error count: 3/5
[2026-01-18T09:27:18.490Z] [BOT] ✅ Created forum post: 🏢 Mixed Methods Researcher - Music Mission @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T09:27:19.992Z] [BOT] 💾 Marked as posted: Mixed Methods Researcher - Music Mission @ spotify (instance #1)
[2026-01-18T09:27:19.992Z] [BOT] 💾 BEFORE ARCHIVING: 2685 jobs in database
[2026-01-18T09:27:19.994Z] [BOT] ✅ No jobs to archive (all 2685 jobs within 7-day window)
[2026-01-18T09:27:20.013Z] [BOT] 💾 Saved posted_jobs.json: 2685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T09:27:23.015Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-18T09:27:23.015Z] [BOT] 📍 [ROUTING] "Product Policy Manager, Frontier Risk" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T09:27:23.201Z] [BOT ERROR] ❌ Error posting job Product Policy Manager, Frontier Risk: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Policy Manager, Frontier Risk @ anthropic',
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
[2026-01-18T09:27:23.202Z] [BOT] ❌ Industry post failed: Product Policy Manager, Frontier Risk
⚠️  Channel full error count: 4/5
[2026-01-18T09:27:24.829Z] [BOT ERROR] ❌ Error posting job Product Policy Manager, Frontier Risk: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Policy Manager, Frontier Risk @ anthropic',
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
[2026-01-18T09:27:24.829Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T09:27:26.330Z] [BOT] 📍 [ROUTING] "Technical Policy Manager, Cyber Harms " @ anthropic
[2026-01-18T09:27:26.330Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T09:27:26.477Z] [BOT ERROR] ❌ Error posting job Technical Policy Manager, Cyber Harms : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Policy Manager, Cyber Harms  @ anthropic',
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
[2026-01-18T09:27:26.477Z] [BOT] ❌ Industry post failed: Technical Policy Manager, Cyber Harms 
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 4 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T09:27:26.478Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T09:27:26.478Z] [BOT] Total attempts: 9
   Successful: 3
   Failed: 6
   Skipped: 0
[2026-01-18T09:27:26.478Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 3
   Channels used: 2
   Top channels:
[2026-01-18T09:27:26.479Z] [BOT] 1. #🗽・new-york: 2 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-18T09:27:26.479Z] [BOT] [STATS] Channel stats saved
[2026-01-18T09:27:26.479Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T09:27:26.489Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2435) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Startups Solutions Architect, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Startups Solutions Architect, Applied AI
- [BOT ERROR] ❌ Error posting job Product Designer - Music Mission: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Designer - Music Mission
- [BOT ERROR] ❌ Error posting job Mixed Methods Researcher - Music Mission: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Mixed Methods Researcher - Music Mission
- [BOT ERROR] ❌ Error posting job Product Policy Manager, Frontier Risk: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Policy Manager, Frontier Risk
- [BOT ERROR] ❌ Error posting job Product Policy Manager, Frontier Risk: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Technical Policy Manager, Cyber Harms : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Policy Manager, Cyber Harms
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 4 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*