# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T00:14:51.941Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T00:14:01.922Z] ========================================
[2026-01-16T00:14:01.924Z] Discord Bot Execution Log
[2026-01-16T00:14:01.924Z] Environment: GitHub Actions
[2026-01-16T00:14:01.924Z] Node Version: v20.19.6
[2026-01-16T00:14:01.924Z] ========================================
[2026-01-16T00:14:01.924Z] Environment Variables Check:
[2026-01-16T00:14:01.924Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T00:14:01.924Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T00:14:01.924Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T00:14:01.924Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T00:14:01.924Z] 
Multi-Channel Configuration:
[2026-01-16T00:14:01.925Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T00:14:01.925Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T00:14:01.925Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T00:14:01.925Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T00:14:01.925Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T00:14:01.925Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T00:14:01.925Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T00:14:01.925Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T00:14:01.925Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T00:14:01.925Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T00:14:01.925Z] 
Data Files Check:
[2026-01-16T00:14:01.926Z] .github/data/new_jobs.json: ✅ Exists (10 items, 36541 bytes)
[2026-01-16T00:14:01.933Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1012718 bytes)
[2026-01-16T00:14:01.933Z] 
========================================
[2026-01-16T00:14:01.933Z] Starting Enhanced Discord Bot...
[2026-01-16T00:14:01.933Z] ========================================
[2026-01-16T00:14:02.465Z] [BOT] ✅ Loaded V2 database: 1882 jobs
[2026-01-16T00:14:03.410Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T00:14:03.411Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T00:14:03.411Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T00:14:03.525Z] [BOT] ✅ Loaded pending queue: 2756 total (2736 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer I - Remote Assist at Aurora Innovation
[2026-01-16T00:14:03.527Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T00:14:03.528Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T00:14:03.528Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T00:14:03.529Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-16T00:14:03.529Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T00:14:03.529Z] [BOT] - Software Engineer I - Remote Assist @ ORG_e9de098c Innovation: pittsburgh, mountain view
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T00:14:03.531Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-16T00:14:03.532Z] [BOT] 📍 [ROUTING] "Software Engineer I - Remote Assist" @ ORG_e9de098c Innovation
[2026-01-16T00:14:03.533Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T00:14:03.549Z] [BOT ERROR] (node:3491) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T00:14:03.695Z] [BOT ERROR] ❌ Error posting job Software Engineer I - Remote Assist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer I - Remote Assist @ ORG_e9de098c Innovation',
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
[2026-01-16T00:14:03.695Z] [BOT] ❌ Industry post failed: Software Engineer I - Remote Assist
⚠️  Channel full error count: 1/5
[2026-01-16T00:14:05.532Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I - Remote Assist @ ORG_e9de098c Innovation in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T00:14:07.035Z] [BOT] 💾 Marked as posted: Software Engineer I - Remote Assist @ ORG_e9de098c Innovation (instance #1)
[2026-01-16T00:14:07.035Z] [BOT] 💾 BEFORE ARCHIVING: 1883 jobs in database
[2026-01-16T00:14:07.037Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T00:14:07.041Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-16T00:14:07.042Z] [BOT] ✅ Archiving complete: 3 archived, 1880 active
[2026-01-16T00:14:07.053Z] [BOT] 💾 Saved posted_jobs.json: 1880 active jobs
[2026-01-16T00:14:07.053Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T00:14:07.053Z] [BOT] 💾 Marked as posted: Software Engineer I - Remote Assist @ ORG_e9de098c Innovation (instance #1)
[2026-01-16T00:14:07.053Z] [BOT] 💾 BEFORE ARCHIVING: 1881 jobs in database
[2026-01-16T00:14:07.055Z] [BOT] ✅ No jobs to archive (all 1881 jobs within 7-day window)
[2026-01-16T00:14:07.066Z] [BOT] 💾 Saved posted_jobs.json: 1881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:14:07.067Z] [BOT] 📍 [ROUTING] "Product Engineer" @ ORG_49005fd1
[2026-01-16T00:14:07.067Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T00:14:07.412Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ ORG_49005fd1 in #💻・tech-jobs
[2026-01-16T00:14:07.412Z] [BOT] ✅ Industry: Product Engineer @ ORG_49005fd1
[2026-01-16T00:14:09.243Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ ORG_49005fd1 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T00:14:10.744Z] [BOT] 💾 Marked as posted: Product Engineer @ ORG_49005fd1 (instance #1)
[2026-01-16T00:14:10.744Z] [BOT] 💾 BEFORE ARCHIVING: 1882 jobs in database
[2026-01-16T00:14:10.746Z] [BOT] ✅ No jobs to archive (all 1882 jobs within 7-day window)
[2026-01-16T00:14:10.757Z] [BOT] 💾 Saved posted_jobs.json: 1882 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:14:10.757Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Clinical Systems (Lab Ops)" @ ORG_ba2089ca
[2026-01-16T00:14:10.757Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-16T00:14:11.096Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Clinical Systems (Lab Ops) @ ORG_ba2089ca in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer - Clinical Systems (Lab Ops) @ ORG_ba2089ca
[2026-01-16T00:14:12.855Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Clinical Systems (Lab Ops) @ ORG_ba2089ca in #🤠・austin
[2026-01-16T00:14:12.855Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T00:14:14.356Z] [BOT] 💾 Marked as posted: Associate Software Engineer - Clinical Systems (Lab Ops) @ ORG_ba2089ca (instance #1)
[2026-01-16T00:14:14.357Z] [BOT] 💾 BEFORE ARCHIVING: 1883 jobs in database
[2026-01-16T00:14:14.358Z] [BOT] ✅ No jobs to archive (all 1883 jobs within 7-day window)
[2026-01-16T00:14:14.372Z] [BOT] 💾 Saved posted_jobs.json: 1883 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:14:14.372Z] [BOT] 💾 Marked as posted: Associate Software Engineer - Clinical Systems (External Apps) @ ORG_ba2089ca (instance #1)
[2026-01-16T00:14:14.372Z] [BOT] 💾 BEFORE ARCHIVING: 1884 jobs in database
[2026-01-16T00:14:14.373Z] [BOT] ✅ No jobs to archive (all 1884 jobs within 7-day window)
[2026-01-16T00:14:14.385Z] [BOT] 💾 Saved posted_jobs.json: 1884 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:14:17.386Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-16T00:14:17.387Z] [BOT] 📍 [ROUTING] "Scientific Data Engineer" @ ORG_6a1ef406
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T00:14:17.387Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-16T00:14:17.813Z] [BOT] ✅ Created forum post: 🏢 Scientific Data Engineer @ ORG_6a1ef406 in #🤖・ai-jobs
  ✅ Industry: Scientific Data Engineer @ ORG_6a1ef406
[2026-01-16T00:14:19.553Z] [BOT] ✅ Created forum post: 🏢 Scientific Data Engineer @ ORG_6a1ef406 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T00:14:21.054Z] [BOT] 💾 Marked as posted: Scientific Data Engineer @ ORG_6a1ef406 (instance #1)
[2026-01-16T00:14:21.055Z] [BOT] 💾 BEFORE ARCHIVING: 1885 jobs in database
[2026-01-16T00:14:21.056Z] [BOT] ✅ No jobs to archive (all 1885 jobs within 7-day window)
[2026-01-16T00:14:21.069Z] [BOT] 💾 Saved posted_jobs.json: 1885 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:14:21.070Z] [BOT] 📍 [ROUTING] "Software Engineer - Rust / Bevy / WebGPU" @ nominal
[2026-01-16T00:14:21.070Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T00:14:21.431Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Rust / Bevy / WebGPU @ nominal in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Rust / Bevy / WebGPU @ nominal
[2026-01-16T00:14:23.119Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Rust / Bevy / WebGPU @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T00:14:24.620Z] [BOT] 💾 Marked as posted: Software Engineer - Rust / Bevy / WebGPU @ nominal (instance #1)
[2026-01-16T00:14:24.621Z] [BOT] 💾 BEFORE ARCHIVING: 1886 jobs in database
[2026-01-16T00:14:24.622Z] [BOT] ✅ No jobs to archive (all 1886 jobs within 7-day window)
[2026-01-16T00:14:24.633Z] [BOT] 💾 Saved posted_jobs.json: 1886 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:14:24.634Z] [BOT] 📍 [ROUTING] "Software Engineer – Systems & Real-Time (RTOS / HIL)" @ nominal
[2026-01-16T00:14:24.634Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T00:14:24.635Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T00:14:24.892Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Systems & Real-Time (RTOS / HIL) @ nominal in #🤖・ai-jobs
[2026-01-16T00:14:24.892Z] [BOT] ✅ Industry: Software Engineer – Systems & Real-Time (RTOS / HIL) @ nominal
[2026-01-16T00:14:26.726Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Systems & Real-Time (RTOS / HIL) @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T00:14:28.228Z] [BOT] 💾 Marked as posted: Software Engineer – Systems & Real-Time (RTOS / HIL) @ nominal (instance #1)
[2026-01-16T00:14:28.228Z] [BOT] 💾 BEFORE ARCHIVING: 1887 jobs in database
[2026-01-16T00:14:28.229Z] [BOT] ✅ No jobs to archive (all 1887 jobs within 7-day window)
[2026-01-16T00:14:28.242Z] [BOT] 💾 Saved posted_jobs.json: 1887 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:14:28.242Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career - Cloud Infrastructure" @ ORG_f9896d55 AI
[2026-01-16T00:14:28.242Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T00:14:28.567Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Early Career - Cloud Infrastructure @ ORG_f9896d55 AI in #🤖・ai-jobs
[2026-01-16T00:14:28.568Z] [BOT] ✅ Industry: Software Engineer – Early Career - Cloud Infrastructure @ ORG_f9896d55 AI
[2026-01-16T00:14:30.265Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Early Career - Cloud Infrastructure @ ORG_f9896d55 AI in #🦢・los-angeles
[2026-01-16T00:14:30.266Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-16T00:14:31.767Z] [BOT] 💾 Marked as posted: Software Engineer – Early Career - Cloud Infrastructure @ ORG_f9896d55 AI (instance #1)
[2026-01-16T00:14:31.768Z] [BOT] 💾 BEFORE ARCHIVING: 1888 jobs in database
[2026-01-16T00:14:31.769Z] [BOT] ✅ No jobs to archive (all 1888 jobs within 7-day window)
[2026-01-16T00:14:31.785Z] [BOT] 💾 Saved posted_jobs.json: 1888 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:14:31.786Z] [BOT] 📍 [ROUTING] "Product Designer - Early Career" @ nominal
[2026-01-16T00:14:31.786Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T00:14:32.047Z] [BOT] ✅ Created forum post: 🏢 Product Designer - Early Career @ nominal in #🤖・ai-jobs
  ✅ Industry: Product Designer - Early Career @ nominal
[2026-01-16T00:14:33.829Z] [BOT] ✅ Created forum post: 🏢 Product Designer - Early Career @ nominal in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T00:14:35.330Z] [BOT] 💾 Marked as posted: Product Designer - Early Career @ nominal (instance #1)
[2026-01-16T00:14:35.331Z] [BOT] 💾 BEFORE ARCHIVING: 1889 jobs in database
[2026-01-16T00:14:35.332Z] [BOT] ✅ No jobs to archive (all 1889 jobs within 7-day window)
[2026-01-16T00:14:35.347Z] [BOT] 💾 Saved posted_jobs.json: 1889 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:14:38.347Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-16T00:14:38.347Z] [BOT] 📍 [ROUTING] "Anti-Fraud Data Analyst Graduate" @ ORG_1bb6fcfb
[2026-01-16T00:14:38.347Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T00:14:38.654Z] [BOT] ✅ Created forum post: 🏢 Anti-Fraud Data Analyst Graduate @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Anti-Fraud Data Analyst Graduate @ ORG_1bb6fcfb
[2026-01-16T00:14:40.336Z] [BOT] ✅ Created forum post: 🏢 Anti-Fraud Data Analyst Graduate @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T00:14:41.838Z] [BOT] 💾 Marked as posted: Anti-Fraud Data Analyst Graduate @ ORG_1bb6fcfb (instance #1)
[2026-01-16T00:14:41.838Z] [BOT] 💾 BEFORE ARCHIVING: 1890 jobs in database
[2026-01-16T00:14:41.839Z] [BOT] ✅ No jobs to archive (all 1890 jobs within 7-day window)
[2026-01-16T00:14:41.851Z] [BOT] 💾 Saved posted_jobs.json: 1890 active jobs
[2026-01-16T00:14:41.851Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T00:14:41.851Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T00:14:41.852Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T00:14:42.062Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb
[2026-01-16T00:14:43.860Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T00:14:45.362Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2026-01-16T00:14:45.362Z] [BOT] 💾 BEFORE ARCHIVING: 1891 jobs in database
[2026-01-16T00:14:45.364Z] [BOT] ✅ No jobs to archive (all 1891 jobs within 7-day window)
[2026-01-16T00:14:45.375Z] [BOT] 💾 Saved posted_jobs.json: 1891 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:14:45.375Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb (instance #1)
💾 BEFORE ARCHIVING: 1892 jobs in database
[2026-01-16T00:14:45.376Z] [BOT] ✅ No jobs to archive (all 1892 jobs within 7-day window)
[2026-01-16T00:14:45.388Z] [BOT] 💾 Saved posted_jobs.json: 1892 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:14:48.389Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T00:14:48.390Z] [BOT] ⏭️  Skipping duplicate: JID_b5408d87 (posted within 7 days)
[2026-01-16T00:14:48.390Z] [BOT] ⏭️  Skipping duplicate: JID_625785e1 (posted within 7 days)
[2026-01-16T00:14:48.390Z] [BOT] ⏭️  Skipping duplicate: JID_3796b931 (posted within 7 days)
[2026-01-16T00:14:48.390Z] [BOT] ⏭️  Skipping duplicate: JID_4bc2d6bd (posted within 7 days)
[2026-01-16T00:14:48.391Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_28505151 (posted within 7 days)
[2026-01-16T00:14:48.391Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_b142e3fa (posted within 7 days)
[2026-01-16T00:14:48.391Z] [BOT] ⏭️  Skipping duplicate: JID_0346ba48 (posted within 7 days)
[2026-01-16T00:14:48.391Z] [BOT] ⏭️  Skipping duplicate: JID_814fa0f7 (posted within 7 days)
[2026-01-16T00:14:48.391Z] [BOT] ⏭️  Skipping duplicate: JID_6fad8774 (posted within 7 days)
[2026-01-16T00:14:48.391Z] [BOT] ⏭️  Skipping duplicate: JID_e96c3a0f-_jr104012-1 (posted within 7 days)
[2026-01-16T00:14:48.497Z] [BOT] ✅ Loaded pending queue: 2756 total (2736 pending, 20 enriched, 0 posted)
[2026-01-16T00:14:48.669Z] [BOT] ✅ Saved pending queue: 2756 total (2736 pending, 10 enriched, 10 posted)
[2026-01-16T00:14:48.669Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T00:14:48.726Z] [BOT] 📂 Loaded 4085 existing routing entries
[2026-01-16T00:14:48.791Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4095
   Timestamp: 2026-01-16T00:14:48.773Z
[2026-01-16T00:14:48.791Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 20
[2026-01-16T00:14:48.792Z] [BOT] Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-16T00:14:48.792Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 9
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #🌧️・seattle: 3 posts
     3. #🦢・los-angeles: 3 posts
     4. #💻・tech-jobs: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2026-01-16T00:14:48.792Z] [BOT] [STATS] Channel stats saved
[2026-01-16T00:14:50.817Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3491) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer I - Remote Assist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer I - Remote Assist
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*