# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T21:42:31.368Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T21:41:37.840Z] ========================================
[2026-01-19T21:41:37.842Z] Discord Bot Execution Log
[2026-01-19T21:41:37.842Z] Environment: GitHub Actions
[2026-01-19T21:41:37.842Z] Node Version: v20.19.6
[2026-01-19T21:41:37.842Z] ========================================
[2026-01-19T21:41:37.842Z] Environment Variables Check:
[2026-01-19T21:41:37.842Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T21:41:37.842Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T21:41:37.843Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T21:41:37.843Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T21:41:37.843Z] 
Multi-Channel Configuration:
[2026-01-19T21:41:37.843Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T21:41:37.843Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T21:41:37.843Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T21:41:37.843Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T21:41:37.843Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T21:41:37.843Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T21:41:37.843Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T21:41:37.843Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T21:41:37.844Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T21:41:37.844Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T21:41:37.844Z] 
Data Files Check:
[2026-01-19T21:41:37.845Z] .github/data/new_jobs.json: ✅ Exists (10 items, 171661 bytes)
[2026-01-19T21:41:37.855Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1571402 bytes)
[2026-01-19T21:41:37.855Z] 
========================================
[2026-01-19T21:41:37.855Z] Starting Enhanced Discord Bot...
[2026-01-19T21:41:37.855Z] ========================================
[2026-01-19T21:41:38.383Z] [BOT] ✅ Loaded V2 database: 2873 jobs
[2026-01-19T21:41:38.902Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T21:41:38.902Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T21:41:38.902Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T21:41:39.022Z] [BOT] ✅ Loaded pending queue: 2813 total (2793 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Product Marketing Manager, HR Experiences at gusto
[2026-01-19T21:41:39.026Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T21:41:39.026Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T21:41:39.026Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T21:41:39.027Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T21:41:39.027Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T21:41:39.032Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-19T21:41:39.032Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager, HR Experiences" @ gusto
[2026-01-19T21:41:39.033Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T21:41:39.037Z] [BOT ERROR] (node:2441) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T21:41:39.185Z] [BOT ERROR] ❌ Error posting job Senior Product Marketing Manager, HR Experiences: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Product Marketing Manager, HR Experiences @ gusto',
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
[2026-01-19T21:41:39.185Z] [BOT] ❌ Industry post failed: Senior Product Marketing Manager, HR Experiences
⚠️  Channel full error count: 1/5
[2026-01-19T21:41:41.123Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager, HR Experiences @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T21:41:42.623Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager, HR Experiences @ gusto (instance #1)
[2026-01-19T21:41:42.623Z] [BOT] 💾 BEFORE ARCHIVING: 2874 jobs in database
[2026-01-19T21:41:42.626Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T21:41:42.631Z] [BOT] 📦 Archived 12 jobs to 2026-01.json (12 total in archive)
[2026-01-19T21:41:42.631Z] [BOT] ✅ Archiving complete: 12 archived, 2862 active
[2026-01-19T21:41:42.654Z] [BOT] 💾 Saved posted_jobs.json: 2862 active jobs
[2026-01-19T21:41:42.654Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T21:41:42.654Z] [BOT] 📍 [ROUTING] "Senior Tax Credits Specialist" @ gusto
   Category: MARKETING (matched: "growth")
[2026-01-19T21:41:42.655Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T21:41:42.893Z] [BOT] ✅ Created forum post: 🏢 Senior Tax Credits Specialist @ gusto in #📣・marketing-jobs
[2026-01-19T21:41:42.893Z] [BOT] ✅ Industry: Senior Tax Credits Specialist @ gusto
[2026-01-19T21:41:44.640Z] [BOT] ✅ Created forum post: 🏢 Senior Tax Credits Specialist @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T21:41:46.140Z] [BOT] 💾 Marked as posted: Senior Tax Credits Specialist @ gusto (instance #1)
[2026-01-19T21:41:46.141Z] [BOT] 💾 BEFORE ARCHIVING: 2863 jobs in database
[2026-01-19T21:41:46.143Z] [BOT] ✅ No jobs to archive (all 2863 jobs within 7-day window)
[2026-01-19T21:41:46.158Z] [BOT] 💾 Saved posted_jobs.json: 2863 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:41:49.159Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-19T21:41:49.159Z] [BOT] 📍 [ROUTING] "Sr. Platform Engineer" @ gusto
   Category: TECH (matched: "data engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T21:41:49.389Z] [BOT] ✅ Created forum post: 🏢 Sr. Platform Engineer @ gusto in #💻・tech-jobs
  ✅ Industry: Sr. Platform Engineer @ gusto
[2026-01-19T21:41:51.065Z] [BOT] ✅ Created forum post: 🏢 Sr. Platform Engineer @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T21:41:52.567Z] [BOT] 💾 Marked as posted: Sr. Platform Engineer @ gusto (instance #1)
[2026-01-19T21:41:52.567Z] [BOT] 💾 BEFORE ARCHIVING: 2864 jobs in database
[2026-01-19T21:41:52.569Z] [BOT] ✅ No jobs to archive (all 2864 jobs within 7-day window)
[2026-01-19T21:41:52.590Z] [BOT] 💾 Saved posted_jobs.json: 2864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:41:52.590Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Database Infrastructure" @ gusto
[2026-01-19T21:41:52.590Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T21:41:52.900Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Database Infrastructure @ gusto in #💻・tech-jobs
[2026-01-19T21:41:52.900Z] [BOT] ✅ Industry: Staff Software Engineer, Database Infrastructure @ gusto
[2026-01-19T21:41:54.568Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Database Infrastructure @ gusto in #🌉・san-francisco
[2026-01-19T21:41:54.568Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T21:41:56.069Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Database Infrastructure @ gusto (instance #1)
[2026-01-19T21:41:56.069Z] [BOT] 💾 BEFORE ARCHIVING: 2865 jobs in database
[2026-01-19T21:41:56.071Z] [BOT] ✅ No jobs to archive (all 2865 jobs within 7-day window)
[2026-01-19T21:41:56.087Z] [BOT] 💾 Saved posted_jobs.json: 2865 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:41:59.088Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-19T21:41:59.088Z] [BOT] 📍 [ROUTING] "Sr Sales Operations Analyst" @ gusto
[2026-01-19T21:41:59.089Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-19T21:41:59.286Z] [BOT] ✅ Created forum post: 🏢 Sr Sales Operations Analyst @ gusto in #🤖・ai-jobs
[2026-01-19T21:41:59.287Z] [BOT] ✅ Industry: Sr Sales Operations Analyst @ gusto
[2026-01-19T21:42:01.093Z] [BOT] ✅ Created forum post: 🏢 Sr Sales Operations Analyst @ gusto in #🌉・san-francisco
[2026-01-19T21:42:01.093Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T21:42:02.594Z] [BOT] 💾 Marked as posted: Sr Sales Operations Analyst @ gusto (instance #1)
[2026-01-19T21:42:02.595Z] [BOT] 💾 BEFORE ARCHIVING: 2866 jobs in database
[2026-01-19T21:42:02.597Z] [BOT] ✅ No jobs to archive (all 2866 jobs within 7-day window)
[2026-01-19T21:42:02.615Z] [BOT] 💾 Saved posted_jobs.json: 2866 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:42:02.615Z] [BOT] 📍 [ROUTING] "Technical Enterprise Client Success Manager - Symmetry" @ gusto
   Category: AI (matched: "AI/ML")
[2026-01-19T21:42:02.616Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T21:42:02.828Z] [BOT] ✅ Created forum post: 🏢 Technical Enterprise Client Success Manager - Symmetry @ gusto in #🤖・ai-jobs
  ✅ Industry: Technical Enterprise Client Success Manager - Symmetry @ gusto
[2026-01-19T21:42:04.536Z] [BOT ERROR] ❌ Error posting job Technical Enterprise Client Success Manager - Symmetry: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Enterprise Client Success Manager - Symmetry @ gusto',
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
[2026-01-19T21:42:04.536Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T21:42:06.037Z] [BOT] 💾 Marked as posted: Technical Enterprise Client Success Manager - Symmetry @ gusto (instance #1)
[2026-01-19T21:42:06.038Z] [BOT] 💾 BEFORE ARCHIVING: 2867 jobs in database
[2026-01-19T21:42:06.040Z] [BOT] ✅ No jobs to archive (all 2867 jobs within 7-day window)
[2026-01-19T21:42:06.057Z] [BOT] 💾 Saved posted_jobs.json: 2867 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:42:09.057Z] [BOT] 📌 Posting 3 jobs to #🩺・healthcare-jobs
[2026-01-19T21:42:09.058Z] [BOT] 📍 [ROUTING] "Future Opportunities: Benefits Advocate" @ gusto
[2026-01-19T21:42:09.058Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T21:42:09.180Z] [BOT ERROR] ❌ Error posting job Future Opportunities: Benefits Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Future Opportunities: Benefits Advocate @ gusto',
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
  url: 'https://discord.com/api/v10/channels/CH_5b30ede1/threads'
}
[2026-01-19T21:42:09.180Z] [BOT] ❌ Industry post failed: Future Opportunities: Benefits Advocate
⚠️  Channel full error count: 1/5
[2026-01-19T21:42:10.813Z] [BOT ERROR] ❌ Error posting job Future Opportunities: Benefits Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Future Opportunities: Benefits Advocate @ gusto',
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
  url: 'https://discord.com/api/v10/channels/CH_f6887b5d/threads'
}
[2026-01-19T21:42:10.813Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-19T21:42:12.314Z] [BOT] 📍 [ROUTING] "Future Opportunities: Payroll Advocate" @ gusto
[2026-01-19T21:42:12.314Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T21:42:12.448Z] [BOT ERROR] ❌ Error posting job Future Opportunities: Payroll Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Future Opportunities: Payroll Advocate @ gusto',
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
  url: 'https://discord.com/api/v10/channels/CH_5b30ede1/threads'
}
[2026-01-19T21:42:12.449Z] [BOT] ❌ Industry post failed: Future Opportunities: Payroll Advocate
⚠️  Channel full error count: 2/5
[2026-01-19T21:42:14.100Z] [BOT ERROR] ❌ Error posting job Future Opportunities: Payroll Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Future Opportunities: Payroll Advocate @ gusto',
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
  url: 'https://discord.com/api/v10/channels/CH_f6887b5d/threads'
}
[2026-01-19T21:42:14.100Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-19T21:42:15.601Z] [BOT] 📍 [ROUTING] "Future Opportunities: Retirement Advocate" @ gusto
   Category: HEALTHCARE (matched: "medical")
[2026-01-19T21:42:15.601Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T21:42:15.727Z] [BOT ERROR] ❌ Error posting job Future Opportunities: Retirement Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Future Opportunities: Retirement Advocate @ gusto',
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
  url: 'https://discord.com/api/v10/channels/CH_5b30ede1/threads'
}
[2026-01-19T21:42:15.727Z] [BOT] ❌ Industry post failed: Future Opportunities: Retirement Advocate
⚠️  Channel full error count: 3/5
[2026-01-19T21:42:17.348Z] [BOT ERROR] ❌ Error posting job Future Opportunities: Retirement Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Future Opportunities: Retirement Advocate @ gusto',
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
  url: 'https://discord.com/api/v10/channels/CH_f6887b5d/threads'
}
[2026-01-19T21:42:17.348Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-19T21:42:21.849Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-19T21:42:21.850Z] [BOT] 📍 [ROUTING] "Head of Business Systems Analysts, Revenue" @ gusto
   Category: SALES (matched: "sales")
[2026-01-19T21:42:21.850Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T21:42:22.013Z] [BOT ERROR] ❌ Error posting job Head of Business Systems Analysts, Revenue: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Head of Business Systems Analysts, Revenue @ gusto',
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
[2026-01-19T21:42:22.014Z] [BOT] ❌ Industry post failed: Head of Business Systems Analysts, Revenue
⚠️  Channel full error count: 4/5
[2026-01-19T21:42:23.672Z] [BOT ERROR] ❌ Error posting job Head of Business Systems Analysts, Revenue: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Head of Business Systems Analysts, Revenue @ gusto',
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
[2026-01-19T21:42:23.672Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T21:42:28.174Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-19T21:42:28.175Z] [BOT] ⏭️  Skipping duplicate: JID_0e9a5127 (posted within 7 days)
[2026-01-19T21:42:28.175Z] [BOT] ⏭️  Skipping duplicate: JID_87d03e55 (posted within 7 days)
[2026-01-19T21:42:28.175Z] [BOT] ⏭️  Skipping duplicate: JID_70fb3976 (posted within 7 days)
[2026-01-19T21:42:28.175Z] [BOT] ⏭️  Skipping duplicate: JID_4304f19b (posted within 7 days)
[2026-01-19T21:42:28.175Z] [BOT] ⏭️  Skipping duplicate: JID_6fe2cff3 (posted within 7 days)
[2026-01-19T21:42:28.175Z] [BOT] ⏭️  Skipping duplicate: JID_4606412e (posted within 7 days)
[2026-01-19T21:42:28.300Z] [BOT] ✅ Loaded pending queue: 2813 total (2793 pending, 20 enriched, 0 posted)
[2026-01-19T21:42:28.466Z] [BOT] ✅ Saved pending queue: 2813 total (2793 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-01-19T21:42:28.466Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-19T21:42:28.528Z] [BOT] 📂 Loaded 5165 existing routing entries
[2026-01-19T21:42:28.600Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-19T21:42:28.600Z] [BOT] Total entries: 5175
   Timestamp: 2026-01-19T21:42:28.578Z
[2026-01-19T21:42:28.600Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T21:42:28.600Z] [BOT] Total attempts: 20
   Successful: 10
   Failed: 10
   Skipped: 0
[2026-01-19T21:42:28.601Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 4
   Top channels:
     1. #🌉・san-francisco: 5 posts
     2. #💻・tech-jobs: 2 posts
     3. #🤖・ai-jobs: 2 posts
     4. #📣・marketing-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-19T21:42:30.625Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2441) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Product Marketing Manager, HR Experiences: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Product Marketing Manager, HR Experiences
- [BOT ERROR] ❌ Error posting job Technical Enterprise Client Success Manager - Symmetry: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Future Opportunities: Benefits Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Future Opportunities: Benefits Advocate
- [BOT ERROR] ❌ Error posting job Future Opportunities: Benefits Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Future Opportunities: Payroll Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Future Opportunities: Payroll Advocate
- [BOT ERROR] ❌ Error posting job Future Opportunities: Payroll Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Future Opportunities: Retirement Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Future Opportunities: Retirement Advocate
- [BOT ERROR] ❌ Error posting job Future Opportunities: Retirement Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Head of Business Systems Analysts, Revenue: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Head of Business Systems Analysts, Revenue
- [BOT ERROR] ❌ Error posting job Head of Business Systems Analysts, Revenue: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*