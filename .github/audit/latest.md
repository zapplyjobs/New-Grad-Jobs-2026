# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T12:27:11.742Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 3
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T12:26:08.335Z] ========================================
[2026-01-04T12:26:08.337Z] Discord Bot Execution Log
[2026-01-04T12:26:08.337Z] Environment: GitHub Actions
[2026-01-04T12:26:08.337Z] Node Version: v20.19.6
[2026-01-04T12:26:08.337Z] ========================================
[2026-01-04T12:26:08.337Z] Environment Variables Check:
[2026-01-04T12:26:08.337Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T12:26:08.337Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T12:26:08.337Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T12:26:08.337Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T12:26:08.337Z] 
Multi-Channel Configuration:
[2026-01-04T12:26:08.337Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T12:26:08.337Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T12:26:08.338Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T12:26:08.338Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T12:26:08.338Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T12:26:08.338Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T12:26:08.338Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T12:26:08.338Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T12:26:08.338Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T12:26:08.338Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T12:26:08.338Z] 
Data Files Check:
[2026-01-04T12:26:08.339Z] .github/data/new_jobs.json: ✅ Exists (10 items, 168785 bytes)
[2026-01-04T12:26:08.343Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 542938 bytes)
[2026-01-04T12:26:08.343Z] 
========================================
[2026-01-04T12:26:08.344Z] Starting Enhanced Discord Bot...
[2026-01-04T12:26:08.344Z] ========================================
[2026-01-04T12:26:08.801Z] [BOT] ✅ Loaded V2 database: 1079 jobs
[2026-01-04T12:26:09.939Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T12:26:09.940Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T12:26:09.940Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T12:26:09.941Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T12:26:10.019Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T12:26:10.105Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T12:26:10.107Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T12:26:10.107Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T12:26:10.107Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T12:26:10.108Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T12:26:10.108Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T12:26:10.113Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-04T12:26:10.113Z] [BOT] 📍 [ROUTING] "Director, Design - Communication Tools" @ figma
   Category: SALES (matched: "sales")
[2026-01-04T12:26:10.113Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:26:10.130Z] [BOT ERROR] (node:2376) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T12:26:10.255Z] [BOT ERROR] ❌ Error posting job Director, Design - Communication Tools: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Director, Design - Communication Tools @ figma',
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
[2026-01-04T12:26:10.255Z] [BOT] ❌ Industry post failed: Director, Design - Communication Tools
[2026-01-04T12:26:10.256Z] [BOT] ⚠️  Channel full error count: 1/5
[2026-01-04T12:26:11.906Z] [BOT ERROR] ❌ Error posting job Director, Design - Communication Tools: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Director, Design - Communication Tools @ figma',
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
[2026-01-04T12:26:11.907Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T12:26:13.407Z] [BOT] 📍 [ROUTING] "Associate Solutions Consultant" @ figma
[2026-01-04T12:26:13.407Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:26:13.817Z] [BOT] ✅ Created forum post: 🏢 Associate Solutions Consultant @ figma in #💲・sales-jobs
[2026-01-04T12:26:13.817Z] [BOT] ✅ Industry: Associate Solutions Consultant @ figma
[2026-01-04T12:26:15.466Z] [BOT ERROR] ❌ Error posting job Associate Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Solutions Consultant @ figma',
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
[2026-01-04T12:26:15.466Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T12:26:16.965Z] [BOT] 💾 Marked as posted: Associate Solutions Consultant @ figma (instance #1)
[2026-01-04T12:26:16.966Z] [BOT] 💾 BEFORE ARCHIVING: 1080 jobs in database
[2026-01-04T12:26:16.966Z] [BOT] ✅ No jobs to archive (all 1080 jobs within 7-day window)
[2026-01-04T12:26:16.976Z] [BOT] 💾 Saved posted_jobs.json: 1080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:26:16.976Z] [BOT] 📍 [ROUTING] "Demo Strategy & Effectiveness Manager " @ figma
   Category: SALES (matched: "sales")
[2026-01-04T12:26:16.976Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:26:17.245Z] [BOT] ✅ Created forum post: 🏢 Demo Strategy & Effectiveness Manager  @ figma in #💲・sales-jobs
  ✅ Industry: Demo Strategy & Effectiveness Manager  @ figma
[2026-01-04T12:26:19.083Z] [BOT] ✅ Created forum post: 🏢 Demo Strategy & Effectiveness Manager  @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:26:20.583Z] [BOT] 💾 Marked as posted: Demo Strategy & Effectiveness Manager  @ figma (instance #1)
[2026-01-04T12:26:20.583Z] [BOT] 💾 BEFORE ARCHIVING: 1081 jobs in database
[2026-01-04T12:26:20.584Z] [BOT] ✅ No jobs to archive (all 1081 jobs within 7-day window)
[2026-01-04T12:26:20.592Z] [BOT] 💾 Saved posted_jobs.json: 1081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:26:23.592Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-04T12:26:23.592Z] [BOT] 📍 [ROUTING] "Internal Product Manager, AI Tooling" @ figma
   Category: TECH (matched: "machine learning")
[2026-01-04T12:26:23.592Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T12:26:23.593Z] [BOT] ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-04T12:26:24.090Z] [BOT] ✅ Created forum post: 🏢 Internal Product Manager, AI Tooling @ figma in #💻・tech-jobs
[2026-01-04T12:26:24.090Z] [BOT] ✅ Industry: Internal Product Manager, AI Tooling @ figma
[2026-01-04T12:26:26.423Z] [BOT] ✅ Created forum post: 🏢 Internal Product Manager, AI Tooling @ figma in #🌉・san-francisco
[2026-01-04T12:26:26.423Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T12:26:27.923Z] [BOT] 💾 Marked as posted: Internal Product Manager, AI Tooling @ figma (instance #1)
[2026-01-04T12:26:27.923Z] [BOT] 💾 BEFORE ARCHIVING: 1082 jobs in database
[2026-01-04T12:26:27.924Z] [BOT] ✅ No jobs to archive (all 1082 jobs within 7-day window)
[2026-01-04T12:26:27.933Z] [BOT] 💾 Saved posted_jobs.json: 1082 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:26:30.933Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-04T12:26:30.934Z] [BOT] 📍 [ROUTING] "Manager, Product Design - Expressive Design" @ figma
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T12:26:31.529Z] [BOT] ✅ Created forum post: 🏢 Manager, Product Design - Expressive Design @ figma in #🤖・ai-jobs
  ✅ Industry: Manager, Product Design - Expressive Design @ figma
[2026-01-04T12:26:33.349Z] [BOT] ✅ Created forum post: 🏢 Manager, Product Design - Expressive Design @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:26:34.850Z] [BOT] 💾 Marked as posted: Manager, Product Design - Expressive Design @ figma (instance #1)
[2026-01-04T12:26:34.850Z] [BOT] 💾 BEFORE ARCHIVING: 1083 jobs in database
[2026-01-04T12:26:34.851Z] [BOT] ✅ No jobs to archive (all 1083 jobs within 7-day window)
[2026-01-04T12:26:34.860Z] [BOT] 💾 Saved posted_jobs.json: 1083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:26:37.860Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-04T12:26:37.860Z] [BOT] 📍 [ROUTING] "Sales Onboarding Program Manager" @ figma
[2026-01-04T12:26:37.860Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-04T12:26:38.103Z] [BOT] ✅ Created forum post: 🏢 Sales Onboarding Program Manager @ figma in #📊・JID_9910249a
[2026-01-04T12:26:38.103Z] [BOT] ✅ Industry: Sales Onboarding Program Manager @ figma
[2026-01-04T12:26:39.776Z] [BOT] ✅ Created forum post: 🏢 Sales Onboarding Program Manager @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:26:41.276Z] [BOT] 💾 Marked as posted: Sales Onboarding Program Manager @ figma (instance #1)
[2026-01-04T12:26:41.276Z] [BOT] 💾 BEFORE ARCHIVING: 1084 jobs in database
[2026-01-04T12:26:41.277Z] [BOT] ✅ No jobs to archive (all 1084 jobs within 7-day window)
[2026-01-04T12:26:41.287Z] [BOT] 💾 Saved posted_jobs.json: 1084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:26:44.287Z] [BOT] 📌 Posting 2 jobs to #📦・product-jobs
[2026-01-04T12:26:44.287Z] [BOT] 📍 [ROUTING] "Product Manager, Creation Engine" @ figma
[2026-01-04T12:26:44.287Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-04T12:26:44.519Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Creation Engine @ figma in #📦・product-jobs
[2026-01-04T12:26:44.519Z] [BOT] ✅ Industry: Product Manager, Creation Engine @ figma
[2026-01-04T12:26:46.265Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Creation Engine @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:26:47.765Z] [BOT] 💾 Marked as posted: Product Manager, Creation Engine @ figma (instance #1)
[2026-01-04T12:26:47.765Z] [BOT] 💾 BEFORE ARCHIVING: 1085 jobs in database
[2026-01-04T12:26:47.766Z] [BOT] ✅ No jobs to archive (all 1085 jobs within 7-day window)
[2026-01-04T12:26:47.774Z] [BOT] 💾 Saved posted_jobs.json: 1085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:26:47.775Z] [BOT] 📍 [ROUTING] "Product Manager, Scale" @ figma
   Category: PRODUCT (matched: "product")
[2026-01-04T12:26:47.775Z] [BOT] Channel: 📦・product-jobs (1391...8889)
[2026-01-04T12:26:48.546Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Scale @ figma in #📦・product-jobs
[2026-01-04T12:26:48.546Z] [BOT] ✅ Industry: Product Manager, Scale @ figma
[2026-01-04T12:26:50.443Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Scale @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:26:51.943Z] [BOT] 💾 Marked as posted: Product Manager, Scale @ figma (instance #1)
[2026-01-04T12:26:51.943Z] [BOT] 💾 BEFORE ARCHIVING: 1086 jobs in database
[2026-01-04T12:26:51.944Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-04T12:26:51.952Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:26:54.954Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T12:26:54.954Z] [BOT] 📍 [ROUTING] "Product Marketing Manager, Emerging Products" @ figma
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T12:26:55.219Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Emerging Products @ figma in #📣・marketing-jobs
  ✅ Industry: Product Marketing Manager, Emerging Products @ figma
[2026-01-04T12:26:57.142Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Emerging Products @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:26:58.644Z] [BOT] 💾 Marked as posted: Product Marketing Manager, Emerging Products @ figma (instance #1)
💾 BEFORE ARCHIVING: 1087 jobs in database
[2026-01-04T12:26:58.645Z] [BOT] ✅ No jobs to archive (all 1087 jobs within 7-day window)
[2026-01-04T12:26:58.652Z] [BOT] 💾 Saved posted_jobs.json: 1087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:27:01.654Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-04T12:27:01.654Z] [BOT] 📍 [ROUTING] "Data Science Intern (2026)" @ figma
[2026-01-04T12:27:01.654Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T12:27:02.198Z] [BOT] ✅ Created forum post: 🏢 Data Science Intern (2026) @ figma in #📈・JID_fb739488
  ✅ Industry: Data Science Intern (2026) @ figma
[2026-01-04T12:27:03.968Z] [BOT] ✅ Created forum post: 🏢 Data Science Intern (2026) @ figma in #🌉・san-francisco
[2026-01-04T12:27:03.968Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T12:27:05.469Z] [BOT] 💾 Marked as posted: Data Science Intern (2026) @ figma (instance #1)
[2026-01-04T12:27:05.470Z] [BOT] 💾 BEFORE ARCHIVING: 1088 jobs in database
[2026-01-04T12:27:05.470Z] [BOT] ✅ No jobs to archive (all 1088 jobs within 7-day window)
[2026-01-04T12:27:05.479Z] [BOT] 💾 Saved posted_jobs.json: 1088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:27:08.480Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-04T12:27:08.480Z] [BOT] ⏭️  Skipping duplicate: JID_e2262e32 (posted within 7 days)
[2026-01-04T12:27:08.480Z] [BOT] ⏭️  Skipping duplicate: JID_036849e2 (posted within 7 days)
[2026-01-04T12:27:08.480Z] [BOT] ⏭️  Skipping duplicate: JID_71573458 (posted within 7 days)
[2026-01-04T12:27:08.481Z] [BOT] ⏭️  Skipping duplicate: JID_9c8a6ec2 (posted within 7 days)
⏭️  Skipping duplicate: JID_f58c81d4 (posted within 7 days)
⏭️  Skipping duplicate: JID_fc6200ef (posted within 7 days)
[2026-01-04T12:27:08.481Z] [BOT] ⏭️  Skipping duplicate: JID_03d65a75 (posted within 7 days)
⏭️  Skipping duplicate: JID_61991a1b (posted within 7 days)
[2026-01-04T12:27:08.481Z] [BOT] ⏭️  Skipping duplicate: JID_015db60b (posted within 7 days)
[2026-01-04T12:27:08.497Z] [BOT] ✅ Loaded pending queue: 211 total (191 pending, 20 enriched, 0 posted)
[2026-01-04T12:27:08.517Z] [BOT] ✅ Saved pending queue: 211 total (191 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T12:27:08.570Z] [BOT] 📂 Loaded 1989 existing routing entries
[2026-01-04T12:27:08.620Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1999
   Timestamp: 2026-01-04T12:27:08.613Z
[2026-01-04T12:27:08.621Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 20
   Successful: 17
[2026-01-04T12:27:08.621Z] [BOT] Failed: 3
   Skipped: 0
[2026-01-04T12:27:08.621Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 8
   Top channels:
[2026-01-04T12:27:08.621Z] [BOT] 1. #🌉・san-francisco: 8 posts
     2. #💲・sales-jobs: 2 posts
     3. #📦・product-jobs: 2 posts
     4. #💻・tech-jobs: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-04T12:27:08.622Z] [BOT] [STATS] Channel stats saved
[2026-01-04T12:27:10.632Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2376) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Director, Design - Communication Tools: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Director, Design - Communication Tools
- [BOT ERROR] ❌ Error posting job Director, Design - Communication Tools: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*