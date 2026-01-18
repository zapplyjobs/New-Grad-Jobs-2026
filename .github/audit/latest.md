# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T07:39:55.843Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T07:39:07.428Z] ========================================
[2026-01-18T07:39:07.430Z] Discord Bot Execution Log
[2026-01-18T07:39:07.430Z] Environment: GitHub Actions
[2026-01-18T07:39:07.430Z] Node Version: v20.19.6
[2026-01-18T07:39:07.430Z] ========================================
[2026-01-18T07:39:07.430Z] Environment Variables Check:
[2026-01-18T07:39:07.430Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T07:39:07.430Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T07:39:07.430Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T07:39:07.430Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T07:39:07.431Z] 
Multi-Channel Configuration:
[2026-01-18T07:39:07.431Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T07:39:07.431Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T07:39:07.431Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T07:39:07.431Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T07:39:07.431Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T07:39:07.431Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T07:39:07.431Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T07:39:07.431Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T07:39:07.431Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T07:39:07.431Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T07:39:07.431Z] 
Data Files Check:
[2026-01-18T07:39:07.432Z] .github/data/new_jobs.json: ✅ Exists (10 items, 121454 bytes)
[2026-01-18T07:39:07.443Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1426821 bytes)
[2026-01-18T07:39:07.443Z] 
========================================
[2026-01-18T07:39:07.443Z] Starting Enhanced Discord Bot...
[2026-01-18T07:39:07.443Z] ========================================
[2026-01-18T07:39:07.979Z] [BOT] ✅ Loaded V2 database: 2634 jobs
[2026-01-18T07:39:08.706Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T07:39:08.707Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T07:39:08.707Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T07:39:08.826Z] [BOT] ✅ Loaded pending queue: 2860 total (2840 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer at Carnegie Mellon University
[2026-01-18T07:39:08.829Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T07:39:08.830Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T07:39:08.830Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T07:39:08.831Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T07:39:08.831Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T07:39:08.836Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-18T07:39:08.836Z] [BOT] 📍 [ROUTING] "Data Engineer" @ ORG_15a5b314 Mellon University
[2026-01-18T07:39:08.836Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T07:39:08.841Z] [BOT ERROR] (node:2545) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T07:39:08.916Z] [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineer @ ORG_15a5b314 Mellon University',
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
[2026-01-18T07:39:08.916Z] [BOT] ❌ Industry post failed: Data Engineer
⚠️  Channel full error count: 1/5
[2026-01-18T07:39:10.506Z] [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineer @ ORG_15a5b314 Mellon University',
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
[2026-01-18T07:39:10.507Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T07:39:12.008Z] [BOT] 📍 [ROUTING] "Technical Scaled Abuse Threat Investigator" @ anthropic
[2026-01-18T07:39:12.008Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-18T07:39:12.770Z] [BOT] ✅ Created forum post: 🏢 Technical Scaled Abuse Threat Investigator @ anthropic in #🤖・ai-jobs
[2026-01-18T07:39:12.770Z] [BOT] ✅ Industry: Technical Scaled Abuse Threat Investigator @ anthropic
[2026-01-18T07:39:14.407Z] [BOT] ✅ Created forum post: 🏢 Technical Scaled Abuse Threat Investigator @ anthropic in #🌉・san-francisco
[2026-01-18T07:39:14.407Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T07:39:15.909Z] [BOT] 💾 Marked as posted: Technical Scaled Abuse Threat Investigator @ anthropic (instance #1)
[2026-01-18T07:39:15.909Z] [BOT] 💾 BEFORE ARCHIVING: 2635 jobs in database
[2026-01-18T07:39:15.911Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-18T07:39:15.913Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-18T07:39:15.913Z] [BOT] ✅ Archiving complete: 1 archived, 2634 active
[2026-01-18T07:39:15.928Z] [BOT] 💾 Saved posted_jobs.json: 2634 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:39:15.928Z] [BOT] 📍 [ROUTING] "Technical CBRN-E  Threat Investigator " @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T07:39:16.065Z] [BOT] ✅ Created forum post: 🏢 Technical CBRN-E  Threat Investigator  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Technical CBRN-E  Threat Investigator  @ anthropic
[2026-01-18T07:39:17.930Z] [BOT] ✅ Created forum post: 🏢 Technical CBRN-E  Threat Investigator  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T07:39:19.432Z] [BOT] 💾 Marked as posted: Technical CBRN-E  Threat Investigator  @ anthropic (instance #1)
[2026-01-18T07:39:19.432Z] [BOT] 💾 BEFORE ARCHIVING: 2635 jobs in database
[2026-01-18T07:39:19.435Z] [BOT] ✅ No jobs to archive (all 2635 jobs within 7-day window)
[2026-01-18T07:39:19.454Z] [BOT] 💾 Saved posted_jobs.json: 2635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:39:19.455Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_81f16575ington Ingalls Industries
[2026-01-18T07:39:19.455Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T07:39:19.632Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_81f16575ington Ingalls Industries in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_81f16575ington Ingalls Industries
[2026-01-18T07:39:21.309Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_81f16575ington Ingalls Industries in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T07:39:22.810Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_81f16575ington Ingalls Industries (instance #1)
[2026-01-18T07:39:22.810Z] [BOT] 💾 BEFORE ARCHIVING: 2636 jobs in database
[2026-01-18T07:39:22.812Z] [BOT] ✅ No jobs to archive (all 2636 jobs within 7-day window)
[2026-01-18T07:39:22.830Z] [BOT] 💾 Saved posted_jobs.json: 2636 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:39:25.831Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-18T07:39:25.831Z] [BOT] 📍 [ROUTING] "Biological Safety Research Scientist" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-18T07:39:25.831Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T07:39:26.066Z] [BOT] ✅ Created forum post: 🏢 Biological Safety Research Scientist @ anthropic in #💲・sales-jobs
  ✅ Industry: Biological Safety Research Scientist @ anthropic
[2026-01-18T07:39:27.725Z] [BOT] ✅ Created forum post: 🏢 Biological Safety Research Scientist @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T07:39:29.227Z] [BOT] 💾 Marked as posted: Biological Safety Research Scientist @ anthropic (instance #1)
[2026-01-18T07:39:29.227Z] [BOT] 💾 BEFORE ARCHIVING: 2637 jobs in database
[2026-01-18T07:39:29.229Z] [BOT] ✅ No jobs to archive (all 2637 jobs within 7-day window)
[2026-01-18T07:39:29.247Z] [BOT] 💾 Saved posted_jobs.json: 2637 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:39:29.247Z] [BOT] 📍 [ROUTING] "Account Executive, SMB - Figma Weave (New York, United States)" @ figma
[2026-01-18T07:39:29.247Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T07:39:29.423Z] [BOT] ✅ Created forum post: 🏢 Account Executive, SMB - Figma Weave (New York, United States) @ figma in #💲・sales-jobs
  ✅ Industry: Account Executive, SMB - Figma Weave (New York, United States) @ figma
[2026-01-18T07:39:31.170Z] [BOT] ✅ Created forum post: 🏢 Account Executive, SMB - Figma Weave (New York, United States) @ figma in #🗽・new-york
[2026-01-18T07:39:31.170Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T07:39:32.670Z] [BOT] 💾 Marked as posted: Account Executive, SMB - Figma Weave (New York, United States) @ figma (instance #1)
[2026-01-18T07:39:32.671Z] [BOT] 💾 BEFORE ARCHIVING: 2638 jobs in database
[2026-01-18T07:39:32.673Z] [BOT] ✅ No jobs to archive (all 2638 jobs within 7-day window)
[2026-01-18T07:39:32.692Z] [BOT] 💾 Saved posted_jobs.json: 2638 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:39:32.693Z] [BOT] 📍 [ROUTING] "Account Executive, Mid-Market - Figma Weave (New York, United States)" @ figma
[2026-01-18T07:39:32.693Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T07:39:32.823Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid-Market - Figma Weave (New York, United States) @ figma in #💲・sales-jobs
  ✅ Industry: Account Executive, Mid-Market - Figma Weave (New York, United States) @ figma
[2026-01-18T07:39:34.498Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid-Market - Figma Weave (New York, United States) @ figma in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T07:39:36.000Z] [BOT] 💾 Marked as posted: Account Executive, Mid-Market - Figma Weave (New York, United States) @ figma (instance #1)
[2026-01-18T07:39:36.000Z] [BOT] 💾 BEFORE ARCHIVING: 2639 jobs in database
[2026-01-18T07:39:36.002Z] [BOT] ✅ No jobs to archive (all 2639 jobs within 7-day window)
[2026-01-18T07:39:36.019Z] [BOT] 💾 Saved posted_jobs.json: 2639 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:39:39.020Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-18T07:39:39.020Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Builder" @ ORG_49d2dc07
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T07:39:39.485Z] [BOT] ✅ Created forum post: 📦 Software Engineer 1 - Builder @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Builder @ ORG_49d2dc07
[2026-01-18T07:39:41.196Z] [BOT] ✅ Created forum post: 📦 Software Engineer 1 - Builder @ ORG_49d2dc07 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T07:39:42.697Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Builder @ ORG_49d2dc07 (instance #1)
💾 BEFORE ARCHIVING: 2640 jobs in database
[2026-01-18T07:39:42.699Z] [BOT] ✅ No jobs to archive (all 2640 jobs within 7-day window)
[2026-01-18T07:39:42.715Z] [BOT] 💾 Saved posted_jobs.json: 2640 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:39:42.715Z] [BOT] 📍 [ROUTING] "Manager, Workplace Operations" @ samsara
[2026-01-18T07:39:42.715Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T07:39:42.950Z] [BOT] ✅ Created forum post: 🏢 Manager, Workplace Operations @ samsara in #💻・tech-jobs
  ✅ Industry: Manager, Workplace Operations @ samsara
[2026-01-18T07:39:44.793Z] [BOT] ✅ Created forum post: 🏢 Manager, Workplace Operations @ samsara in #🌉・san-francisco
[2026-01-18T07:39:44.793Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T07:39:46.295Z] [BOT] 💾 Marked as posted: Manager, Workplace Operations @ samsara (instance #1)
[2026-01-18T07:39:46.295Z] [BOT] 💾 BEFORE ARCHIVING: 2641 jobs in database
[2026-01-18T07:39:46.297Z] [BOT] ✅ No jobs to archive (all 2641 jobs within 7-day window)
[2026-01-18T07:39:46.314Z] [BOT] 💾 Saved posted_jobs.json: 2641 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:39:46.315Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - 2026 Start" @ ORG_7bc88ebb
[2026-01-18T07:39:46.315Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T07:39:46.521Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb
[2026-01-18T07:39:48.194Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T07:39:49.696Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb (instance #1)
[2026-01-18T07:39:49.696Z] [BOT] 💾 BEFORE ARCHIVING: 2642 jobs in database
[2026-01-18T07:39:49.698Z] [BOT] ✅ No jobs to archive (all 2642 jobs within 7-day window)
[2026-01-18T07:39:49.723Z] [BOT] 💾 Saved posted_jobs.json: 2642 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:39:52.724Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-18T07:39:52.725Z] [BOT] ⏭️  Skipping duplicate: JID_a8b02a89 (posted within 7 days)
[2026-01-18T07:39:52.725Z] [BOT] ⏭️  Skipping duplicate: JID_5f76228e (posted within 7 days)
[2026-01-18T07:39:52.725Z] [BOT] ⏭️  Skipping duplicate: JID_4d6b4f74 (posted within 7 days)
[2026-01-18T07:39:52.725Z] [BOT] ⏭️  Skipping duplicate: JID_f0a2048e (posted within 7 days)
[2026-01-18T07:39:52.725Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
[2026-01-18T07:39:52.726Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
[2026-01-18T07:39:52.726Z] [BOT] ⏭️  Skipping duplicate: JID_3b2cbde5 (posted within 7 days)
[2026-01-18T07:39:52.726Z] [BOT] ⏭️  Skipping duplicate: JID_637321ae (posted within 7 days)
[2026-01-18T07:39:52.726Z] [BOT] ⏭️  Skipping duplicate: JID_23252284 (posted within 7 days)
[2026-01-18T07:39:52.841Z] [BOT] ✅ Loaded pending queue: 2860 total (2840 pending, 20 enriched, 0 posted)
[2026-01-18T07:39:53.017Z] [BOT] ✅ Saved pending queue: 2860 total (2840 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-18T07:39:53.017Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-18T07:39:53.093Z] [BOT] 📂 Loaded 4795 existing routing entries
[2026-01-18T07:39:53.163Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-18T07:39:53.163Z] [BOT] Total entries: 4805
   Timestamp: 2026-01-18T07:39:53.143Z
[2026-01-18T07:39:53.163Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T07:39:53.163Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-18T07:39:53.164Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-18T07:39:53.164Z] [BOT] Total posts: 18
   Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #💲・sales-jobs: 3 posts
     4. #💻・tech-jobs: 3 posts
     5. #🗽・new-york: 2 posts
[2026-01-18T07:39:53.164Z] [BOT] [STATS] Channel stats saved
[2026-01-18T07:39:55.185Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2545) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Engineer
- [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*