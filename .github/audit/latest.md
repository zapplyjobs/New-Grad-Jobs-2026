# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T03:28:05.358Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T03:27:07.608Z] ========================================
[2026-01-18T03:27:07.610Z] Discord Bot Execution Log
[2026-01-18T03:27:07.610Z] Environment: GitHub Actions
[2026-01-18T03:27:07.610Z] Node Version: v20.19.6
[2026-01-18T03:27:07.610Z] ========================================
[2026-01-18T03:27:07.611Z] Environment Variables Check:
[2026-01-18T03:27:07.611Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T03:27:07.611Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T03:27:07.611Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T03:27:07.611Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T03:27:07.611Z] 
Multi-Channel Configuration:
[2026-01-18T03:27:07.611Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T03:27:07.611Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T03:27:07.611Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T03:27:07.611Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T03:27:07.611Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T03:27:07.612Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T03:27:07.612Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T03:27:07.612Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T03:27:07.612Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T03:27:07.612Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T03:27:07.612Z] 
Data Files Check:
[2026-01-18T03:27:07.613Z] .github/data/new_jobs.json: ✅ Exists (10 items, 103889 bytes)
[2026-01-18T03:27:07.623Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1366374 bytes)
[2026-01-18T03:27:07.623Z] 
========================================
[2026-01-18T03:27:07.623Z] Starting Enhanced Discord Bot...
[2026-01-18T03:27:07.623Z] ========================================
[2026-01-18T03:27:08.155Z] [BOT] ✅ Loaded V2 database: 2523 jobs
[2026-01-18T03:27:08.645Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T03:27:08.645Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T03:27:08.645Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T03:27:08.765Z] [BOT] ✅ Loaded pending queue: 2867 total (2847 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Mobile Flex Team Phlebotomist - Will Train at Rhode Island Blood Center
[2026-01-18T03:27:08.768Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T03:27:08.769Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T03:27:08.769Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T03:27:08.770Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-18T03:27:08.770Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-18T03:27:08.770Z] [BOT] - Director, Mid-Market Sales (B2B Services) @ reddit: san francisco, new york
   - Director, Mid-Market Sales (Goods - Shopping) @ reddit: los angeles, san francisco, new york
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T03:27:08.775Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-18T03:27:08.776Z] [BOT] 📍 [ROUTING] "Mobile Flex Team Phlebotomist - Will Train" @ ORG_47c6299b Island Blood Center
[2026-01-18T03:27:08.776Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T03:27:08.794Z] [BOT ERROR] (node:2706) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T03:27:08.876Z] [BOT ERROR] ❌ Error posting job Mobile Flex Team Phlebotomist - Will Train: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Mobile Flex Team Phlebotomist - Will Train @ ORG_47c6299b Island Blood Center',
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
[2026-01-18T03:27:08.876Z] [BOT] ❌ Industry post failed: Mobile Flex Team Phlebotomist - Will Train
⚠️  Channel full error count: 1/5
[2026-01-18T03:27:10.574Z] [BOT] ✅ Created forum post: 🏢 Mobile Flex Team Phlebotomist - Will Train @ ORG_47c6299b Island Blood Center in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T03:27:12.076Z] [BOT] 💾 Marked as posted: Mobile Flex Team Phlebotomist - Will Train @ ORG_47c6299b Island Blood Center (instance #1)
[2026-01-18T03:27:12.076Z] [BOT] 💾 BEFORE ARCHIVING: 2524 jobs in database
[2026-01-18T03:27:12.078Z] [BOT] ✅ No jobs to archive (all 2524 jobs within 7-day window)
[2026-01-18T03:27:12.101Z] [BOT] 💾 Saved posted_jobs.json: 2524 active jobs
[2026-01-18T03:27:12.101Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T03:27:12.102Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_c910d474 Atomics
[2026-01-18T03:27:12.102Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T03:27:12.316Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_c910d474 Atomics in #💻・tech-jobs
  ✅ Industry: Associate Software Developer @ ORG_c910d474 Atomics
[2026-01-18T03:27:13.927Z] [BOT ERROR] ❌ Error posting job Associate Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Software Developer @ ORG_c910d474 Atomics',
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
  url: 'https://discord.com/api/v10/channels/CH_297f020b/threads'
}
[2026-01-18T03:27:13.927Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-18T03:27:15.428Z] [BOT] 💾 Marked as posted: Associate Software Developer @ ORG_c910d474 Atomics (instance #1)
[2026-01-18T03:27:15.429Z] [BOT] 💾 BEFORE ARCHIVING: 2525 jobs in database
[2026-01-18T03:27:15.430Z] [BOT] ✅ No jobs to archive (all 2525 jobs within 7-day window)
[2026-01-18T03:27:15.445Z] [BOT] 💾 Saved posted_jobs.json: 2525 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T03:27:18.446Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-18T03:27:18.447Z] [BOT] 📍 [ROUTING] "Licensed Social Worker" @ ORG_2fd71d70
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T03:27:18.776Z] [BOT] ✅ Created forum post: 🏢 Licensed Social Worker @ ORG_2fd71d70 in #📣・marketing-jobs
[2026-01-18T03:27:18.777Z] [BOT] ✅ Industry: Licensed Social Worker @ ORG_2fd71d70
[2026-01-18T03:27:20.501Z] [BOT] ✅ Created forum post: 🏢 Licensed Social Worker @ ORG_2fd71d70 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-18T03:27:22.003Z] [BOT] 💾 Marked as posted: Licensed Social Worker @ ORG_2fd71d70 (instance #1)
[2026-01-18T03:27:22.003Z] [BOT] 💾 BEFORE ARCHIVING: 2526 jobs in database
[2026-01-18T03:27:22.005Z] [BOT] ✅ No jobs to archive (all 2526 jobs within 7-day window)
[2026-01-18T03:27:22.024Z] [BOT] 💾 Saved posted_jobs.json: 2526 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T03:27:22.025Z] [BOT] 📍 [ROUTING] "Registered Behavior Technician - Registered Behavior Technician" @ ORG_30152252 Steps
[2026-01-18T03:27:22.025Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T03:27:22.198Z] [BOT] ✅ Created forum post: 🏢 Registered Behavior Technician - Registered Behavior Technician @ ORG_30152252 Steps in #📣・marketing-jobs
[2026-01-18T03:27:22.199Z] [BOT] ✅ Industry: Registered Behavior Technician - Registered Behavior Technician @ ORG_30152252 Steps
[2026-01-18T03:27:23.896Z] [BOT] ✅ Created forum post: 🏢 Registered Behavior Technician - Registered Behavior Technician @ ORG_30152252 Steps in #💻・remote-usa
[2026-01-18T03:27:23.896Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T03:27:25.396Z] [BOT] 💾 Marked as posted: Registered Behavior Technician - Registered Behavior Technician @ ORG_30152252 Steps (instance #1)
[2026-01-18T03:27:25.396Z] [BOT] 💾 BEFORE ARCHIVING: 2527 jobs in database
[2026-01-18T03:27:25.400Z] [BOT] ✅ No jobs to archive (all 2527 jobs within 7-day window)
[2026-01-18T03:27:25.416Z] [BOT] 💾 Saved posted_jobs.json: 2527 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T03:27:28.417Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-18T03:27:28.417Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
   Category: SALES (matched: "sales")
[2026-01-18T03:27:28.417Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T03:27:28.659Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive @ datadog in #💲・sales-jobs
  ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-18T03:27:30.306Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T03:27:31.807Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
[2026-01-18T03:27:31.808Z] [BOT] 💾 BEFORE ARCHIVING: 2528 jobs in database
[2026-01-18T03:27:31.810Z] [BOT] ✅ No jobs to archive (all 2528 jobs within 7-day window)
[2026-01-18T03:27:31.827Z] [BOT] 💾 Saved posted_jobs.json: 2528 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T03:27:34.828Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T03:27:34.828Z] [BOT] 📍 [ROUTING] "Data Engineer" @ ORG_cae3b4b3
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T03:27:34.828Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T03:27:35.068Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_cae3b4b3 in #🤖・ai-jobs
  ✅ Industry: Data Engineer @ ORG_cae3b4b3
[2026-01-18T03:27:36.765Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_cae3b4b3 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T03:27:38.266Z] [BOT] 💾 Marked as posted: Data Engineer @ ORG_cae3b4b3 (instance #1)
[2026-01-18T03:27:38.266Z] [BOT] 💾 BEFORE ARCHIVING: 2529 jobs in database
[2026-01-18T03:27:38.268Z] [BOT] ✅ No jobs to archive (all 2529 jobs within 7-day window)
[2026-01-18T03:27:38.284Z] [BOT] 💾 Saved posted_jobs.json: 2529 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T03:27:38.284Z] [BOT] 📍 [ROUTING] "Manager, Global Yield Programs & Incentives" @ spotify
   Category: AI (matched: "artificial intelligence")
[2026-01-18T03:27:38.285Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T03:27:38.448Z] [BOT] ✅ Created forum post: 🏢 Manager, Global Yield Programs & Incentives @ spotify in #🤖・ai-jobs
  ✅ Industry: Manager, Global Yield Programs & Incentives @ spotify
[2026-01-18T03:27:40.303Z] [BOT] ✅ Created forum post: 🏢 Manager, Global Yield Programs & Incentives @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T03:27:41.804Z] [BOT] 💾 Marked as posted: Manager, Global Yield Programs & Incentives @ spotify (instance #1)
[2026-01-18T03:27:41.804Z] [BOT] 💾 BEFORE ARCHIVING: 2530 jobs in database
[2026-01-18T03:27:41.806Z] [BOT] ✅ No jobs to archive (all 2530 jobs within 7-day window)
[2026-01-18T03:27:41.821Z] [BOT] 💾 Saved posted_jobs.json: 2530 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T03:27:44.823Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2026-01-18T03:27:44.823Z] [BOT] 📍 [ROUTING] "Hydrologist 1" @ ORG_5ff96fe0 Vegas Valley Water District
   Category: SUPPLY-CHAIN (matched: "distribution")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-18T03:27:45.037Z] [BOT] ✅ Created forum post: 🏢 Hydrologist 1 @ ORG_5ff96fe0 Vegas Valley Water District in #🏗️・JID_b7c6683f
[2026-01-18T03:27:45.037Z] [BOT] ✅ Industry: Hydrologist 1 @ ORG_5ff96fe0 Vegas Valley Water District
[2026-01-18T03:27:47.694Z] [BOT] ✅ Created forum post: 🏢 Hydrologist 1 @ ORG_5ff96fe0 Vegas Valley Water District in #💻・remote-usa
[2026-01-18T03:27:47.694Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T03:27:49.194Z] [BOT] 💾 Marked as posted: Hydrologist 1 @ ORG_5ff96fe0 Vegas Valley Water District (instance #1)
[2026-01-18T03:27:49.194Z] [BOT] 💾 BEFORE ARCHIVING: 2531 jobs in database
[2026-01-18T03:27:49.196Z] [BOT] ✅ No jobs to archive (all 2531 jobs within 7-day window)
[2026-01-18T03:27:49.212Z] [BOT] 💾 Saved posted_jobs.json: 2531 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T03:27:52.212Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-18T03:27:52.212Z] [BOT] 📍 [ROUTING] "Benefits Operations Data Analyst - HR Operations - San Jose','Third-Party Associate" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T03:27:52.456Z] [BOT] ✅ Created forum post: 🏢 Benefits Operations Data Analyst - HR Operations - San Jose','Third-Party Associate @ ORG_1bb6fcfb in #📈・JID_fb739488
[2026-01-18T03:27:52.456Z] [BOT] ✅ Industry: Benefits Operations Data Analyst - HR Operations - San Jose','Third-Party Associate @ ORG_1bb6fcfb
[2026-01-18T03:27:54.305Z] [BOT] ✅ Created forum post: 🏢 Benefits Operations Data Analyst - HR Operations - San Jose','Third-Party Associate @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-18T03:27:54.306Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T03:27:55.807Z] [BOT] 💾 Marked as posted: Benefits Operations Data Analyst - HR Operations - San Jose','Third-Party Associate @ ORG_1bb6fcfb (instance #1)
[2026-01-18T03:27:55.807Z] [BOT] 💾 BEFORE ARCHIVING: 2532 jobs in database
[2026-01-18T03:27:55.809Z] [BOT] ✅ No jobs to archive (all 2532 jobs within 7-day window)
[2026-01-18T03:27:55.828Z] [BOT] 💾 Saved posted_jobs.json: 2532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T03:27:55.828Z] [BOT] 📍 [ROUTING] "Technology Rotational Development Program" @ ORG_3bbcab64 Capital
[2026-01-18T03:27:55.828Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T03:27:56.032Z] [BOT] ✅ Created forum post: 🏢 Technology Rotational Development Program @ ORG_3bbcab64 Capital in #📈・JID_fb739488
[2026-01-18T03:27:56.032Z] [BOT] ✅ Industry: Technology Rotational Development Program @ ORG_3bbcab64 Capital
[2026-01-18T03:27:57.665Z] [BOT] ✅ Created forum post: 🏢 Technology Rotational Development Program @ ORG_3bbcab64 Capital in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-18T03:27:59.166Z] [BOT] 💾 Marked as posted: Technology Rotational Development Program @ ORG_3bbcab64 Capital (instance #1)
[2026-01-18T03:27:59.166Z] [BOT] 💾 BEFORE ARCHIVING: 2533 jobs in database
[2026-01-18T03:27:59.168Z] [BOT] ✅ No jobs to archive (all 2533 jobs within 7-day window)
[2026-01-18T03:27:59.184Z] [BOT] 💾 Saved posted_jobs.json: 2533 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T03:28:02.185Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-18T03:28:02.185Z] [BOT] ⏭️  Skipping duplicate: JID_5b766925 (posted within 7 days)
[2026-01-18T03:28:02.185Z] [BOT] ⏭️  Skipping duplicate: JID_6e8616df (posted within 7 days)
[2026-01-18T03:28:02.186Z] [BOT] ⏭️  Skipping duplicate: JID_52aea1aa (posted within 7 days)
[2026-01-18T03:28:02.187Z] [BOT] ⏭️  Skipping duplicate: JID_90d51a18 (posted within 7 days)
⏭️  Skipping duplicate: JID_03b4e370 (posted within 7 days)
⏭️  Skipping duplicate: JID_4e3533af (posted within 7 days)
⏭️  Skipping duplicate: JID_b6028d6a-i_r0003445 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_bcc4694e (posted within 7 days)
⏭️  Skipping duplicate: JID_c25a3369 (posted within 7 days)
⏭️  Skipping duplicate: JID_66af162a-campus_careers-JID_6c983f24-program_r1400 (posted within 7 days)
[2026-01-18T03:28:02.310Z] [BOT] ✅ Loaded pending queue: 2867 total (2847 pending, 20 enriched, 0 posted)
[2026-01-18T03:28:02.492Z] [BOT] ✅ Saved pending queue: 2867 total (2847 pending, 10 enriched, 10 posted)
[2026-01-18T03:28:02.492Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T03:28:02.552Z] [BOT] 📂 Loaded 4695 existing routing entries
[2026-01-18T03:28:02.622Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-18T03:28:02.622Z] [BOT] Total entries: 4705
   Timestamp: 2026-01-18T03:28:02.602Z
[2026-01-18T03:28:02.623Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 11
   Top channels:
[2026-01-18T03:28:02.623Z] [BOT] 1. #💻・remote-usa: 4 posts
     2. #🗽・new-york: 2 posts
     3. #📣・marketing-jobs: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2026-01-18T03:28:02.623Z] [BOT] [STATS] Channel stats saved
[2026-01-18T03:28:04.648Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2706) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Mobile Flex Team Phlebotomist - Will Train: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Mobile Flex Team Phlebotomist - Will Train
- [BOT ERROR] ❌ Error posting job Associate Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*