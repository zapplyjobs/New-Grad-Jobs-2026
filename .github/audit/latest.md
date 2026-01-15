# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T19:43:42.719Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T19:42:51.228Z] ========================================
[2026-01-15T19:42:51.230Z] Discord Bot Execution Log
[2026-01-15T19:42:51.230Z] Environment: GitHub Actions
[2026-01-15T19:42:51.230Z] Node Version: v20.19.6
[2026-01-15T19:42:51.230Z] ========================================
[2026-01-15T19:42:51.230Z] Environment Variables Check:
[2026-01-15T19:42:51.230Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T19:42:51.230Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T19:42:51.230Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T19:42:51.231Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T19:42:51.231Z] 
Multi-Channel Configuration:
[2026-01-15T19:42:51.231Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T19:42:51.231Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T19:42:51.231Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T19:42:51.231Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T19:42:51.231Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T19:42:51.231Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T19:42:51.231Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T19:42:51.231Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T19:42:51.231Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T19:42:51.231Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T19:42:51.231Z] 
Data Files Check:
[2026-01-15T19:42:51.232Z] .github/data/new_jobs.json: ✅ Exists (10 items, 36732 bytes)
[2026-01-15T19:42:51.239Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 957530 bytes)
[2026-01-15T19:42:51.240Z] 
========================================
[2026-01-15T19:42:51.240Z] Starting Enhanced Discord Bot...
[2026-01-15T19:42:51.240Z] ========================================
[2026-01-15T19:42:51.753Z] [BOT] ✅ Loaded V2 database: 1784 jobs
[2026-01-15T19:42:52.236Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T19:42:52.236Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T19:42:52.237Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T19:42:52.348Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer - University Hire 2026 at The Voleon Group
[2026-01-15T19:42:52.351Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T19:42:52.351Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T19:42:52.352Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T19:42:52.352Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T19:42:52.352Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T19:42:52.356Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-15T19:42:52.357Z] [BOT] 📍 [ROUTING] "Software Engineer - University Hire 2026" @ ORG_b344d80e Voleon Group
[2026-01-15T19:42:52.357Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T19:42:52.374Z] [BOT ERROR] (node:3539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T19:42:52.559Z] [BOT ERROR] ❌ Error posting job Software Engineer - University Hire 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - University Hire 2026 @ ORG_b344d80e Voleon Group',
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
[2026-01-15T19:42:52.559Z] [BOT] ❌ Industry post failed: Software Engineer - University Hire 2026
⚠️  Channel full error count: 1/5
[2026-01-15T19:42:54.296Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - University Hire 2026 @ ORG_b344d80e Voleon Group in #🌉・san-francisco
[2026-01-15T19:42:54.296Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T19:42:55.797Z] [BOT] 💾 Marked as posted: Software Engineer - University Hire 2026 @ ORG_b344d80e Voleon Group (instance #1)
[2026-01-15T19:42:55.797Z] [BOT] 💾 BEFORE ARCHIVING: 1785 jobs in database
[2026-01-15T19:42:55.799Z] [BOT] ✅ No jobs to archive (all 1785 jobs within 7-day window)
[2026-01-15T19:42:55.814Z] [BOT] 💾 Saved posted_jobs.json: 1785 active jobs
[2026-01-15T19:42:55.815Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T19:42:55.815Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Researcher" @ ORG_9505081b Trading
[2026-01-15T19:42:55.815Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T19:42:55.815Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T19:42:56.046Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Researcher @ ORG_9505081b Trading in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Researcher @ ORG_9505081b Trading
[2026-01-15T19:42:57.907Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Researcher @ ORG_9505081b Trading in #🌆・chicago
[2026-01-15T19:42:57.908Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T19:42:59.408Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Researcher @ ORG_9505081b Trading (instance #1)
💾 BEFORE ARCHIVING: 1786 jobs in database
[2026-01-15T19:42:59.409Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T19:42:59.410Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-15T19:42:59.410Z] [BOT] ✅ Archiving complete: 1 archived, 1785 active
[2026-01-15T19:42:59.421Z] [BOT] 💾 Saved posted_jobs.json: 1785 active jobs
[2026-01-15T19:42:59.421Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T19:42:59.421Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_29bc579d
   Category: AI (matched: "machine learning")
[2026-01-15T19:42:59.421Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T19:42:59.610Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_29bc579d in #🤖・ai-jobs
  ✅ Industry: Software Engineer @ ORG_29bc579d
[2026-01-15T19:43:01.351Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_29bc579d in #🌉・san-francisco
[2026-01-15T19:43:01.351Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T19:43:02.852Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_29bc579d (instance #1)
[2026-01-15T19:43:02.852Z] [BOT] 💾 BEFORE ARCHIVING: 1786 jobs in database
[2026-01-15T19:43:02.855Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (3 total in archive)
[2026-01-15T19:43:02.855Z] [BOT] ✅ Archiving complete: 2 archived, 1784 active
[2026-01-15T19:43:02.867Z] [BOT] 💾 Saved posted_jobs.json: 1784 active jobs
[2026-01-15T19:43:02.867Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T19:43:02.868Z] [BOT] 📍 [ROUTING] "Entry-Level C++ Software Engineer" @ ORG_096a7f3dine Trading
[2026-01-15T19:43:02.868Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T19:43:03.087Z] [BOT] ✅ Created forum post: 🏢 Entry-Level C++ Software Engineer @ ORG_096a7f3dine Trading in #🤖・ai-jobs
[2026-01-15T19:43:03.087Z] [BOT] ✅ Industry: Entry-Level C++ Software Engineer @ ORG_096a7f3dine Trading
[2026-01-15T19:43:04.829Z] [BOT] ✅ Created forum post: 🏢 Entry-Level C++ Software Engineer @ ORG_096a7f3dine Trading in #🌆・chicago
[2026-01-15T19:43:04.829Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T19:43:06.331Z] [BOT] 💾 Marked as posted: Entry-Level C++ Software Engineer @ ORG_096a7f3dine Trading (instance #1)
[2026-01-15T19:43:06.331Z] [BOT] 💾 BEFORE ARCHIVING: 1785 jobs in database
[2026-01-15T19:43:06.332Z] [BOT] ✅ No jobs to archive (all 1785 jobs within 7-day window)
[2026-01-15T19:43:06.344Z] [BOT] 💾 Saved posted_jobs.json: 1785 active jobs
[2026-01-15T19:43:06.344Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T19:43:06.345Z] [BOT] 📍 [ROUTING] "R&D Software Engineer" @ ORG_64dba1b4
[2026-01-15T19:43:06.345Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T19:43:06.739Z] [BOT] ✅ Created forum post: 🏢 R&D Software Engineer @ ORG_64dba1b4 in #🤖・ai-jobs
  ✅ Industry: R&D Software Engineer @ ORG_64dba1b4
[2026-01-15T19:43:08.484Z] [BOT] ✅ Created forum post: 🏢 R&D Software Engineer @ ORG_64dba1b4 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-15T19:43:09.986Z] [BOT] 💾 Marked as posted: R&D Software Engineer @ ORG_64dba1b4 (instance #1)
[2026-01-15T19:43:09.986Z] [BOT] 💾 BEFORE ARCHIVING: 1786 jobs in database
[2026-01-15T19:43:09.989Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (4 total in archive)
[2026-01-15T19:43:09.989Z] [BOT] ✅ Archiving complete: 1 archived, 1785 active
[2026-01-15T19:43:10.000Z] [BOT] 💾 Saved posted_jobs.json: 1785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:43:13.001Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-15T19:43:13.001Z] [BOT] 📍 [ROUTING] "Web Software Engineer - Commerce Engineering" @ ORG_bfe7eb5a
[2026-01-15T19:43:13.001Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:43:13.337Z] [BOT] ✅ Created forum post: 🏢 Web Software Engineer - Commerce Engineering @ ORG_bfe7eb5a in #💻・tech-jobs
[2026-01-15T19:43:13.337Z] [BOT] ✅ Industry: Web Software Engineer - Commerce Engineering @ ORG_bfe7eb5a
[2026-01-15T19:43:15.037Z] [BOT] ✅ Created forum post: 🏢 Web Software Engineer - Commerce Engineering @ ORG_bfe7eb5a in #🌉・san-francisco
[2026-01-15T19:43:15.038Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T19:43:16.539Z] [BOT] 💾 Marked as posted: Web Software Engineer - Commerce Engineering @ ORG_bfe7eb5a (instance #1)
[2026-01-15T19:43:16.539Z] [BOT] 💾 BEFORE ARCHIVING: 1786 jobs in database
[2026-01-15T19:43:16.542Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (5 total in archive)
[2026-01-15T19:43:16.542Z] [BOT] ✅ Archiving complete: 1 archived, 1785 active
[2026-01-15T19:43:16.553Z] [BOT] 💾 Saved posted_jobs.json: 1785 active jobs
[2026-01-15T19:43:16.553Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T19:43:16.554Z] [BOT] 📍 [ROUTING] "Associate Image Processing Engineer" @ L3Harris Technologies
[2026-01-15T19:43:16.554Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:43:16.799Z] [BOT] ✅ Created forum post: 🏢 Associate Image Processing Engineer @ L3Harris Technologies in #💻・tech-jobs
[2026-01-15T19:43:16.799Z] [BOT] ✅ Industry: Associate Image Processing Engineer @ L3Harris Technologies
[2026-01-15T19:43:18.658Z] [BOT] ✅ Created forum post: 🏢 Associate Image Processing Engineer @ L3Harris Technologies in #💻・remote-usa
[2026-01-15T19:43:18.658Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T19:43:20.159Z] [BOT] 💾 Marked as posted: Associate Image Processing Engineer @ L3Harris Technologies (instance #1)
[2026-01-15T19:43:20.160Z] [BOT] 💾 BEFORE ARCHIVING: 1786 jobs in database
[2026-01-15T19:43:20.161Z] [BOT] ✅ No jobs to archive (all 1786 jobs within 7-day window)
[2026-01-15T19:43:20.176Z] [BOT] 💾 Saved posted_jobs.json: 1786 active jobs
[2026-01-15T19:43:20.177Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T19:43:20.177Z] [BOT] 📍 [ROUTING] "Entry Level Specialist - AI Trainer" @ ORG_4ee447c5 Technologies
[2026-01-15T19:43:20.177Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:43:20.422Z] [BOT] ✅ Created forum post: 🏢 Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #💻・tech-jobs
  ✅ Industry: Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies
[2026-01-15T19:43:22.114Z] [BOT] ✅ Created forum post: 🏢 Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T19:43:23.616Z] [BOT] 💾 Marked as posted: Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies (instance #1)
[2026-01-15T19:43:23.616Z] [BOT] 💾 BEFORE ARCHIVING: 1787 jobs in database
[2026-01-15T19:43:23.617Z] [BOT] ✅ No jobs to archive (all 1787 jobs within 7-day window)
[2026-01-15T19:43:23.637Z] [BOT] 💾 Saved posted_jobs.json: 1787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:43:26.635Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-15T19:43:26.636Z] [BOT] 📍 [ROUTING] "Asset and Wealth Management Analyst" @ ORG_d49bddaa Sachs
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-15T19:43:26.824Z] [BOT] ✅ Created forum post: 🏢 Asset and Wealth Management Analyst @ ORG_d49bddaa Sachs in #📣・marketing-jobs
  ✅ Industry: Asset and Wealth Management Analyst @ ORG_d49bddaa Sachs
[2026-01-15T19:43:28.550Z] [BOT] ✅ Created forum post: 🏢 Asset and Wealth Management Analyst @ ORG_d49bddaa Sachs in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T19:43:30.052Z] [BOT] 💾 Marked as posted: Asset and Wealth Management Analyst @ ORG_d49bddaa Sachs (instance #1)
[2026-01-15T19:43:30.052Z] [BOT] 💾 BEFORE ARCHIVING: 1788 jobs in database
[2026-01-15T19:43:30.053Z] [BOT] ✅ No jobs to archive (all 1788 jobs within 7-day window)
[2026-01-15T19:43:30.065Z] [BOT] 💾 Saved posted_jobs.json: 1788 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:43:33.066Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-15T19:43:33.066Z] [BOT] 📍 [ROUTING] "Field Data Analyst" @ ORG_074a3f54 Engineers
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-15T19:43:33.066Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T19:43:33.257Z] [BOT] ✅ Created forum post: 🏢 Field Data Analyst @ ORG_074a3f54 Engineers in #📈・JID_fb739488
  ✅ Industry: Field Data Analyst @ ORG_074a3f54 Engineers
[2026-01-15T19:43:34.971Z] [BOT] ✅ Created forum post: 🏢 Field Data Analyst @ ORG_074a3f54 Engineers in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-15T19:43:36.473Z] [BOT] 💾 Marked as posted: Field Data Analyst @ ORG_074a3f54 Engineers (instance #1)
[2026-01-15T19:43:36.473Z] [BOT] 💾 BEFORE ARCHIVING: 1789 jobs in database
[2026-01-15T19:43:36.474Z] [BOT] ✅ No jobs to archive (all 1789 jobs within 7-day window)
[2026-01-15T19:43:36.488Z] [BOT] 💾 Saved posted_jobs.json: 1789 active jobs
[2026-01-15T19:43:36.488Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T19:43:39.489Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T19:43:39.490Z] [BOT] ⏭️  Skipping duplicate: JID_1a44f75e (posted within 7 days)
[2026-01-15T19:43:39.490Z] [BOT] ⏭️  Skipping duplicate: JID_18a10bca (posted within 7 days)
[2026-01-15T19:43:39.490Z] [BOT] ⏭️  Skipping duplicate: JID_b285be64 (posted within 7 days)
[2026-01-15T19:43:39.490Z] [BOT] ⏭️  Skipping duplicate: JID_bd69bf03 (posted within 7 days)
[2026-01-15T19:43:39.491Z] [BOT] ⏭️  Skipping duplicate: JID_16c06c08 (posted within 7 days)
[2026-01-15T19:43:39.491Z] [BOT] ⏭️  Skipping duplicate: JID_404029d3 (posted within 7 days)
[2026-01-15T19:43:39.491Z] [BOT] ⏭️  Skipping duplicate: JID_fd5bc9ee (posted within 7 days)
⏭️  Skipping duplicate: JID_6e3a4ccc-engineer_r123231 (posted within 7 days)
[2026-01-15T19:43:39.491Z] [BOT] ⏭️  Skipping duplicate: JID_c50ff87e (posted within 7 days)
[2026-01-15T19:43:39.491Z] [BOT] ⏭️  Skipping duplicate: JID_c3a25800 (posted within 7 days)
[2026-01-15T19:43:39.608Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[2026-01-15T19:43:39.764Z] [BOT] ✅ Saved pending queue: 2766 total (2746 pending, 10 enriched, 10 posted)
[2026-01-15T19:43:39.764Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T19:43:39.820Z] [BOT] 📂 Loaded 3965 existing routing entries
[2026-01-15T19:43:39.885Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T19:43:39.885Z] [BOT] Total entries: 3975
   Timestamp: 2026-01-15T19:43:39.867Z
[2026-01-15T19:43:39.886Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T19:43:39.886Z] [BOT] Total attempts: 20
   Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-15T19:43:39.886Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T19:43:39.886Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 9
   Top channels:
     1. #🤖・ai-jobs: 4 posts
[2026-01-15T19:43:39.886Z] [BOT] 2. #🌉・san-francisco: 3 posts
     3. #💻・tech-jobs: 3 posts
     4. #💻・remote-usa: 3 posts
     5. #🌆・chicago: 2 posts
[2026-01-15T19:43:39.886Z] [BOT] [STATS] Channel stats saved
[2026-01-15T19:43:41.911Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer - University Hire 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - University Hire 2026
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*