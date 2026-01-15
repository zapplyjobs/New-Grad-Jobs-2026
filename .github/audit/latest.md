# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T19:55:07.354Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 3
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T19:54:10.915Z] ========================================
[2026-01-15T19:54:10.917Z] Discord Bot Execution Log
[2026-01-15T19:54:10.917Z] Environment: GitHub Actions
[2026-01-15T19:54:10.917Z] Node Version: v20.19.6
[2026-01-15T19:54:10.917Z] ========================================
[2026-01-15T19:54:10.917Z] Environment Variables Check:
[2026-01-15T19:54:10.917Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T19:54:10.917Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T19:54:10.917Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T19:54:10.917Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T19:54:10.918Z] 
Multi-Channel Configuration:
[2026-01-15T19:54:10.918Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T19:54:10.918Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T19:54:10.918Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T19:54:10.918Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T19:54:10.918Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T19:54:10.918Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T19:54:10.918Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T19:54:10.918Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T19:54:10.918Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T19:54:10.918Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T19:54:10.918Z] 
Data Files Check:
[2026-01-15T19:54:10.919Z] .github/data/new_jobs.json: ✅ Exists (10 items, 70320 bytes)
[2026-01-15T19:54:10.927Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 959306 bytes)
[2026-01-15T19:54:10.927Z] 
========================================
[2026-01-15T19:54:10.927Z] Starting Enhanced Discord Bot...
[2026-01-15T19:54:10.927Z] ========================================
[2026-01-15T19:54:11.505Z] [BOT] ✅ Loaded V2 database: 1789 jobs
[2026-01-15T19:54:11.901Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T19:54:11.902Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T19:54:11.902Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T19:54:12.020Z] [BOT] ✅ Loaded pending queue: 2757 total (2737 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-15T19:54:12.021Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer - 2026 start dates - In person at SEP
[2026-01-15T19:54:12.024Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T19:54:12.025Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T19:54:12.025Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T19:54:12.026Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T19:54:12.026Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-15T19:54:12.026Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T19:54:12.032Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-15T19:54:12.032Z] [BOT] 📍 [ROUTING] "Software Engineer - 2026 start dates - In person" @ ORG_b6cb1069
[2026-01-15T19:54:12.032Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:54:12.050Z] [BOT ERROR] (node:2465) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T19:54:12.196Z] [BOT ERROR] ❌ Error posting job Software Engineer - 2026 start dates - In person: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - 2026 start dates - In person @ SEP',
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
[2026-01-15T19:54:12.197Z] [BOT] ❌ Industry post failed: Software Engineer - 2026 start dates - In person
⚠️  Channel full error count: 1/5
[2026-01-15T19:54:13.989Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - 2026 start dates - In person @ ORG_b6cb1069 in #💻・remote-usa
[2026-01-15T19:54:13.989Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T19:54:15.491Z] [BOT] 💾 Marked as posted: Software Engineer - 2026 start dates - In person @ ORG_b6cb1069 (instance #1)
[2026-01-15T19:54:15.491Z] [BOT] 💾 BEFORE ARCHIVING: 1790 jobs in database
[2026-01-15T19:54:15.493Z] [BOT] ✅ No jobs to archive (all 1790 jobs within 7-day window)
[2026-01-15T19:54:15.510Z] [BOT] 💾 Saved posted_jobs.json: 1790 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:54:15.510Z] [BOT] 📍 [ROUTING] "Android Engineer 1 - Growth" @ ORG_3acb0a4a
[2026-01-15T19:54:15.510Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:54:15.709Z] [BOT] ✅ Created forum post: 🏢 Android Engineer 1 - Growth @ ORG_3acb0a4a in #💻・tech-jobs
[2026-01-15T19:54:15.710Z] [BOT] ✅ Industry: Android Engineer 1 - Growth @ ORG_3acb0a4a
[2026-01-15T19:54:17.490Z] [BOT] ✅ Created forum post: 🏢 Android Engineer 1 - Growth @ ORG_3acb0a4a in #🚌・boston
[2026-01-15T19:54:17.490Z] [BOT] ✅ Location: 🚌・boston
[2026-01-15T19:54:18.991Z] [BOT] 💾 Marked as posted: Android Engineer 1 - Growth @ ORG_3acb0a4a (instance #1)
[2026-01-15T19:54:18.991Z] [BOT] 💾 BEFORE ARCHIVING: 1791 jobs in database
[2026-01-15T19:54:18.993Z] [BOT] ✅ No jobs to archive (all 1791 jobs within 7-day window)
[2026-01-15T19:54:19.005Z] [BOT] 💾 Saved posted_jobs.json: 1791 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:54:19.005Z] [BOT] 📍 [ROUTING] "Field Service Tech 1 - Clovis" @ ORG_3aa5abc7 Games
[2026-01-15T19:54:19.005Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:54:19.208Z] [BOT] ✅ Created forum post: 🏢 Field Service Tech 1 - Clovis @ ORG_3aa5abc7 Games in #💻・tech-jobs
  ✅ Industry: Field Service Tech 1 - Clovis @ ORG_3aa5abc7 Games
[2026-01-15T19:54:20.882Z] [BOT] ✅ Created forum post: 🏢 Field Service Tech 1 - Clovis @ ORG_3aa5abc7 Games in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T19:54:22.383Z] [BOT] 💾 Marked as posted: Field Service Tech 1 - Clovis @ ORG_3aa5abc7 Games (instance #1)
[2026-01-15T19:54:22.383Z] [BOT] 💾 BEFORE ARCHIVING: 1792 jobs in database
[2026-01-15T19:54:22.385Z] [BOT] ✅ No jobs to archive (all 1792 jobs within 7-day window)
[2026-01-15T19:54:22.400Z] [BOT] 💾 Saved posted_jobs.json: 1792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:54:25.401Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-15T19:54:25.401Z] [BOT] 📍 [ROUTING] "Deployment Engineer" @ ORG_0e771a5f
[2026-01-15T19:54:25.402Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T19:54:25.605Z] [BOT] ✅ Created forum post: 🏢 Deployment Engineer @ ORG_0e771a5f in #📈・JID_fb739488
[2026-01-15T19:54:25.605Z] [BOT] ✅ Industry: Deployment Engineer @ ORG_0e771a5f
[2026-01-15T19:54:27.395Z] [BOT] ✅ Created forum post: 🏢 Deployment Engineer @ ORG_0e771a5f in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T19:54:28.897Z] [BOT] 💾 Marked as posted: Deployment Engineer @ ORG_0e771a5f (instance #1)
[2026-01-15T19:54:28.897Z] [BOT] 💾 BEFORE ARCHIVING: 1793 jobs in database
[2026-01-15T19:54:28.898Z] [BOT] ✅ No jobs to archive (all 1793 jobs within 7-day window)
[2026-01-15T19:54:28.914Z] [BOT] 💾 Saved posted_jobs.json: 1793 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:54:28.915Z] [BOT] 📍 [ROUTING] "C# Backend Development Engineer "C2C"" @ ORG_0e771a5f
[2026-01-15T19:54:28.915Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T19:54:29.166Z] [BOT] ✅ Created forum post: 🏢 C# Backend Development Engineer "C2C" @ ORG_0e771a5f in #📈・JID_fb739488
  ✅ Industry: C# Backend Development Engineer "C2C" @ ORG_0e771a5f
[2026-01-15T19:54:30.820Z] [BOT] ✅ Created forum post: 🏢 C# Backend Development Engineer "C2C" @ ORG_0e771a5f in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T19:54:32.322Z] [BOT] 💾 Marked as posted: C# Backend Development Engineer "C2C" @ ORG_0e771a5f (instance #1)
[2026-01-15T19:54:32.322Z] [BOT] 💾 BEFORE ARCHIVING: 1794 jobs in database
[2026-01-15T19:54:32.324Z] [BOT] ✅ No jobs to archive (all 1794 jobs within 7-day window)
[2026-01-15T19:54:32.335Z] [BOT] 💾 Saved posted_jobs.json: 1794 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:54:32.336Z] [BOT] 📍 [ROUTING] "Associate Data Science Product Manager" @ ORG_ba19e9c3 Ventures
[2026-01-15T19:54:32.336Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch, nonTechMatch (using data-science)
[2026-01-15T19:54:32.501Z] [BOT] ✅ Created forum post: 🏢 Associate Data Science Product Manager @ ORG_ba19e9c3 Ventures in #📈・JID_fb739488
  ✅ Industry: Associate Data Science Product Manager @ ORG_ba19e9c3 Ventures
[2026-01-15T19:54:34.191Z] [BOT] ✅ Created forum post: 🏢 Associate Data Science Product Manager @ ORG_ba19e9c3 Ventures in #💻・remote-usa
[2026-01-15T19:54:34.191Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T19:54:35.693Z] [BOT] 💾 Marked as posted: Associate Data Science Product Manager @ ORG_ba19e9c3 Ventures (instance #1)
[2026-01-15T19:54:35.693Z] [BOT] 💾 BEFORE ARCHIVING: 1795 jobs in database
[2026-01-15T19:54:35.694Z] [BOT] ✅ No jobs to archive (all 1795 jobs within 7-day window)
[2026-01-15T19:54:35.707Z] [BOT] 💾 Saved posted_jobs.json: 1795 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:54:38.708Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-15T19:54:38.709Z] [BOT] 📍 [ROUTING] "Associate Scientist or Geoscientist - Emergency Response Team" @ ORG_48266817 Solutions
[2026-01-15T19:54:38.709Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-15T19:54:38.995Z] [BOT] ✅ Created forum post: 🏢 Associate Scientist or Geoscientist - Emergency Response Team @ ORG_48266817 Solutions in #📣・marketing-jobs
  ✅ Industry: Associate Scientist or Geoscientist - Emergency Response Team @ ORG_48266817 Solutions
[2026-01-15T19:54:40.787Z] [BOT] ✅ Created forum post: 🏢 Associate Scientist or Geoscientist - Emergency Response Team @ ORG_48266817 Solutions in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T19:54:42.288Z] [BOT] 💾 Marked as posted: Associate Scientist or Geoscientist - Emergency Response Team @ ORG_48266817 Solutions (instance #1)
[2026-01-15T19:54:42.288Z] [BOT] 💾 BEFORE ARCHIVING: 1796 jobs in database
[2026-01-15T19:54:42.290Z] [BOT] ✅ No jobs to archive (all 1796 jobs within 7-day window)
[2026-01-15T19:54:42.302Z] [BOT] 💾 Saved posted_jobs.json: 1796 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:54:45.303Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-15T19:54:45.304Z] [BOT] 📍 [ROUTING] "Field Service Tech - Farmington" @ ORG_3aa5abc7 Games
[2026-01-15T19:54:45.304Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T19:54:45.455Z] [BOT] ✅ Created forum post: 🏢 Field Service Tech - Farmington @ ORG_3aa5abc7 Games in #💲・sales-jobs
  ✅ Industry: Field Service Tech - Farmington @ ORG_3aa5abc7 Games
[2026-01-15T19:54:47.094Z] [BOT] ✅ Created forum post: 🏢 Field Service Tech - Farmington @ ORG_3aa5abc7 Games in #💻・remote-usa
[2026-01-15T19:54:47.094Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T19:54:48.595Z] [BOT] 💾 Marked as posted: Field Service Tech - Farmington @ ORG_3aa5abc7 Games (instance #1)
[2026-01-15T19:54:48.596Z] [BOT] 💾 BEFORE ARCHIVING: 1797 jobs in database
[2026-01-15T19:54:48.597Z] [BOT] ✅ No jobs to archive (all 1797 jobs within 7-day window)
[2026-01-15T19:54:48.613Z] [BOT] 💾 Saved posted_jobs.json: 1797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:54:51.614Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-15T19:54:51.614Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher - Survey Science/Time Domain Astronomy" @ ORG_478e100e University
[2026-01-15T19:54:51.614Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T19:54:51.806Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Survey Science/Time Domain Astronomy @ ORG_478e100e University in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Researcher - Survey Science/Time Domain Astronomy @ ORG_478e100e University
[2026-01-15T19:54:53.530Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Survey Science/Time Domain Astronomy @ ORG_478e100e University in #💻・remote-usa
[2026-01-15T19:54:53.530Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T19:54:55.032Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher - Survey Science/Time Domain Astronomy @ ORG_478e100e University (instance #1)
[2026-01-15T19:54:55.032Z] [BOT] 💾 BEFORE ARCHIVING: 1798 jobs in database
[2026-01-15T19:54:55.034Z] [BOT] ✅ No jobs to archive (all 1798 jobs within 7-day window)
[2026-01-15T19:54:55.049Z] [BOT] 💾 Saved posted_jobs.json: 1798 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:54:58.050Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-15T19:54:58.050Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow" @ ORG_9d38443e of Texas - Austin
[2026-01-15T19:54:58.051Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-15T19:54:58.147Z] [BOT ERROR] ❌ Error posting job Postdoctoral Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin',
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
[2026-01-15T19:54:58.148Z] [BOT] ❌ Industry post failed: Postdoctoral Fellow
⚠️  Channel full error count: 1/5
[2026-01-15T19:54:59.759Z] [BOT ERROR] ❌ Error posting job Postdoctoral Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin',
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
  url: 'https://discord.com/api/v10/channels/CH_c4049df6/threads'
}
[2026-01-15T19:54:59.759Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-15T19:55:04.261Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-15T19:55:04.262Z] [BOT] ⏭️  Skipping duplicate: JID_c641a1c5 (posted within 7 days)
[2026-01-15T19:55:04.262Z] [BOT] ⏭️  Skipping duplicate: JID_c43d4fb3-centific_global-JID_1be6a3c6-engineer_jr101165 (posted within 7 days)
[2026-01-15T19:55:04.262Z] [BOT] ⏭️  Skipping duplicate: JID_c43d4fb3-centific_global-JID_9f108857-_jr103606 (posted within 7 days)
[2026-01-15T19:55:04.262Z] [BOT] ⏭️  Skipping duplicate: JID_be0fbb97 (posted within 7 days)
[2026-01-15T19:55:04.263Z] [BOT] ⏭️  Skipping duplicate: JID_94c60ba9 (posted within 7 days)
[2026-01-15T19:55:04.263Z] [BOT] ⏭️  Skipping duplicate: JID_03b6e054-i_r503556 (posted within 7 days)
[2026-01-15T19:55:04.263Z] [BOT] ⏭️  Skipping duplicate: JID_cc707d2b (posted within 7 days)
[2026-01-15T19:55:04.263Z] [BOT] ⏭️  Skipping duplicate: JID_29d7e240-farmington_r503552 (posted within 7 days)
[2026-01-15T19:55:04.263Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_5c5ee63f-astronomy_req_0000072795-2 (posted within 7 days)
[2026-01-15T19:55:04.403Z] [BOT] ✅ Loaded pending queue: 2757 total (2737 pending, 20 enriched, 0 posted)
[2026-01-15T19:55:04.569Z] [BOT] ✅ Saved pending queue: 2757 total (2737 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-15T19:55:04.569Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T19:55:04.629Z] [BOT] 📂 Loaded 3975 existing routing entries
[2026-01-15T19:55:04.695Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3985
[2026-01-15T19:55:04.695Z] [BOT] Timestamp: 2026-01-15T19:55:04.678Z
[2026-01-15T19:55:04.695Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 20
[2026-01-15T19:55:04.696Z] [BOT] Successful: 17
   Failed: 3
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
[2026-01-15T19:55:04.696Z] [BOT] Channels used: 7
   Top channels:
     1. #💻・remote-usa: 8 posts
     2. #📈・JID_fb739488: 3 posts
     3. #💻・tech-jobs: 2 posts
[2026-01-15T19:55:04.696Z] [BOT] 4. #🚌・boston: 1 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-15T19:55:04.696Z] [BOT] [STATS] Channel stats saved
[2026-01-15T19:55:06.723Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2465) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer - 2026 start dates - In person: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - 2026 start dates - In person
- [BOT ERROR] ❌ Error posting job Postdoctoral Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Fellow
- [BOT ERROR] ❌ Error posting job Postdoctoral Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*