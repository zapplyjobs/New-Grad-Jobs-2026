# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T17:07:52.967Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T17:07:14.076Z] ========================================
[2026-01-18T17:07:14.078Z] Discord Bot Execution Log
[2026-01-18T17:07:14.078Z] Environment: GitHub Actions
[2026-01-18T17:07:14.078Z] Node Version: v20.19.6
[2026-01-18T17:07:14.078Z] ========================================
[2026-01-18T17:07:14.078Z] Environment Variables Check:
[2026-01-18T17:07:14.078Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T17:07:14.079Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T17:07:14.079Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T17:07:14.079Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T17:07:14.079Z] 
Multi-Channel Configuration:
[2026-01-18T17:07:14.079Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T17:07:14.079Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T17:07:14.079Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T17:07:14.079Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T17:07:14.079Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T17:07:14.079Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T17:07:14.079Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T17:07:14.079Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T17:07:14.080Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T17:07:14.080Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T17:07:14.080Z] 
Data Files Check:
[2026-01-18T17:07:14.081Z] .github/data/new_jobs.json: ✅ Exists (10 items, 109673 bytes)
[2026-01-18T17:07:14.091Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1461330 bytes)
[2026-01-18T17:07:14.091Z] 
========================================
[2026-01-18T17:07:14.091Z] Starting Enhanced Discord Bot...
[2026-01-18T17:07:14.091Z] ========================================
[2026-01-18T17:07:14.611Z] [BOT] ✅ Loaded V2 database: 2697 jobs
[2026-01-18T17:07:15.504Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T17:07:15.504Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T17:07:15.504Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T17:07:15.620Z] [BOT] ✅ Loaded pending queue: 2842 total (2822 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Recruiter, Sales & GTM at airtable
[2026-01-18T17:07:15.624Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T17:07:15.624Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T17:07:15.624Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T17:07:15.625Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T17:07:15.625Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T17:07:15.629Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-18T17:07:15.630Z] [BOT] 📍 [ROUTING] "Recruiter, Sales & GTM" @ airtable
[2026-01-18T17:07:15.630Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-18T17:07:15.634Z] [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T17:07:15.893Z] [BOT ERROR] ❌ Error posting job Recruiter, Sales & GTM: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Recruiter, Sales & GTM @ airtable',
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
  url: 'https://discord.com/api/v10/channels/CH_6bf05ed9/threads'
}
[2026-01-18T17:07:15.894Z] [BOT] ❌ Industry post failed: Recruiter, Sales & GTM
⚠️  Channel full error count: 1/5
[2026-01-18T17:07:17.643Z] [BOT] ✅ Created forum post: 🏢 Recruiter, Sales & GTM @ airtable in #🌉・san-francisco
[2026-01-18T17:07:17.643Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T17:07:19.144Z] [BOT] 💾 Marked as posted: Recruiter, Sales & GTM @ airtable (instance #1)
[2026-01-18T17:07:19.144Z] [BOT] 💾 BEFORE ARCHIVING: 2698 jobs in database
[2026-01-18T17:07:19.146Z] [BOT] ✅ No jobs to archive (all 2698 jobs within 7-day window)
[2026-01-18T17:07:19.167Z] [BOT] 💾 Saved posted_jobs.json: 2698 active jobs
[2026-01-18T17:07:19.167Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T17:07:22.166Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T17:07:22.166Z] [BOT] 📍 [ROUTING] "Account Executive - Media & Entertainment" @ discord
[2026-01-18T17:07:22.166Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-18T17:07:22.550Z] [BOT] ✅ Created forum post: 🏢 Account Executive - Media & Entertainment @ discord in #📈・JID_fb739488
  ✅ Industry: Account Executive - Media & Entertainment @ discord
[2026-01-18T17:07:24.371Z] [BOT] ✅ Created forum post: 🏢 Account Executive - Media & Entertainment @ discord in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-18T17:07:25.873Z] [BOT] 💾 Marked as posted: Account Executive - Media & Entertainment @ discord (instance #1)
[2026-01-18T17:07:25.873Z] [BOT] 💾 BEFORE ARCHIVING: 2699 jobs in database
[2026-01-18T17:07:25.875Z] [BOT] ✅ No jobs to archive (all 2699 jobs within 7-day window)
[2026-01-18T17:07:25.894Z] [BOT] 💾 Saved posted_jobs.json: 2699 active jobs
[2026-01-18T17:07:25.894Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T17:07:28.895Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T17:07:28.896Z] [BOT] 📍 [ROUTING] "Senior Data Engineer, Analytics" @ discord
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T17:07:28.897Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T17:07:29.210Z] [BOT] ✅ Created forum post: 🏢 Senior Data Engineer, Analytics @ discord in #🤖・ai-jobs
  ✅ Industry: Senior Data Engineer, Analytics @ discord
[2026-01-18T17:07:30.882Z] [BOT ERROR] ❌ Error posting job Senior Data Engineer, Analytics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Data Engineer, Analytics @ discord',
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
[2026-01-18T17:07:30.882Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T17:07:32.385Z] [BOT] 💾 Marked as posted: Senior Data Engineer, Analytics @ discord (instance #1)
[2026-01-18T17:07:32.385Z] [BOT] 💾 BEFORE ARCHIVING: 2700 jobs in database
[2026-01-18T17:07:32.387Z] [BOT] ✅ No jobs to archive (all 2700 jobs within 7-day window)
[2026-01-18T17:07:32.405Z] [BOT] 💾 Saved posted_jobs.json: 2700 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T17:07:32.405Z] [BOT] 📍 [ROUTING] "Security Risk & Compliance, Cloud & Data Center" @ anthropic
[2026-01-18T17:07:32.405Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T17:07:32.546Z] [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Security Risk & Compliance, Cloud & Data Center @ anthropic',
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
[2026-01-18T17:07:32.546Z] [BOT] ❌ Industry post failed: Security Risk & Compliance, Cloud & Data Center
⚠️  Channel full error count: 1/5
[2026-01-18T17:07:34.170Z] [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Security Risk & Compliance, Cloud & Data Center @ anthropic',
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
[2026-01-18T17:07:34.170Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T17:07:38.672Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T17:07:38.672Z] [BOT] 📍 [ROUTING] "Senior Field Marketing Manager (Federal / State)" @ verkada
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T17:07:39.058Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Federal / State) @ verkada',
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
  url: 'https://discord.com/api/v10/channels/CH_61c65c32/threads'
}
[2026-01-18T17:07:39.059Z] [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Federal / State)
⚠️  Channel full error count: 2/5
[2026-01-18T17:07:40.676Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Federal / State) @ verkada',
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
  url: 'https://discord.com/api/v10/channels/CH_7bf909b6/threads'
}
[2026-01-18T17:07:40.676Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T17:07:45.179Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-18T17:07:45.180Z] [BOT] 📍 [ROUTING] "Field Application Engineer – New College Graduate - Ncg" @ ORG_54360ad7
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T17:07:45.362Z] [BOT ERROR] ❌ Error posting job Field Application Engineer – New College Graduate - Ncg: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Field Application Engineer – New College Graduate - Ncg @ Sandisk',
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
[2026-01-18T17:07:45.363Z] [BOT] ❌ Industry post failed: Field Application Engineer – New College Graduate - Ncg
⚠️  Channel full error count: 3/5
[2026-01-18T17:07:47.011Z] [BOT ERROR] ❌ Error posting job Field Application Engineer – New College Graduate - Ncg: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Field Application Engineer – New College Graduate - Ncg @ Sandisk',
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
  url: 'https://discord.com/api/v10/channels/CH_64745ef9/threads'
}
[2026-01-18T17:07:47.012Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-18T17:07:48.513Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_297c6f0f
[2026-01-18T17:07:48.513Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T17:07:48.630Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 @ Ticketmaster',
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
[2026-01-18T17:07:48.630Z] [BOT] ❌ Industry post failed: Software Engineer 1
⚠️  Channel full error count: 4/5
[2026-01-18T17:07:50.302Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 @ Ticketmaster',
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
  url: 'https://discord.com/api/v10/channels/CH_7bf909b6/threads'
}
[2026-01-18T17:07:50.303Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T17:07:51.804Z] [BOT] 📍 [ROUTING] "Software Engineer Support Analyst Graduate" @ ORG_a5257743 Packard Enterprise
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T17:07:51.968Z] [BOT ERROR] ❌ Error posting job Software Engineer Support Analyst Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Support Analyst Graduate @ ORG_a5257743 Packard Enterprise',
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
[2026-01-18T17:07:51.968Z] [BOT] ❌ Industry post failed: Software Engineer Support Analyst Graduate
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T17:07:51.969Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T17:07:51.969Z] [BOT] Total attempts: 15
   Successful: 4
   Failed: 11
   Skipped: 0
[2026-01-18T17:07:51.969Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
[2026-01-18T17:07:51.970Z] [BOT] Channels used: 4
   Top channels:
     1. #🌉・san-francisco: 1 posts
     2. #📈・JID_fb739488: 1 posts
     3. #🦢・los-angeles: 1 posts
     4. #🤖・ai-jobs: 1 posts
[2026-01-18T17:07:51.970Z] [BOT] [STATS] Channel stats saved
[2026-01-18T17:07:51.970Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T17:07:51.984Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Recruiter, Sales & GTM: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Recruiter, Sales & GTM
- [BOT ERROR] ❌ Error posting job Senior Data Engineer, Analytics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Security Risk & Compliance, Cloud & Data Center
- [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Federal / State)
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Field Application Engineer – New College Graduate - Ncg: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Field Application Engineer – New College Graduate - Ncg
- [BOT ERROR] ❌ Error posting job Field Application Engineer – New College Graduate - Ncg: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Support Analyst Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Support Analyst Graduate
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*