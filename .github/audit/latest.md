# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T22:56:54.223Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T22:56:00.812Z] ========================================
[2026-01-19T22:56:00.814Z] Discord Bot Execution Log
[2026-01-19T22:56:00.814Z] Environment: GitHub Actions
[2026-01-19T22:56:00.814Z] Node Version: v20.19.6
[2026-01-19T22:56:00.814Z] ========================================
[2026-01-19T22:56:00.814Z] Environment Variables Check:
[2026-01-19T22:56:00.814Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T22:56:00.815Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T22:56:00.815Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T22:56:00.815Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T22:56:00.815Z] 
Multi-Channel Configuration:
[2026-01-19T22:56:00.815Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T22:56:00.815Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T22:56:00.815Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T22:56:00.815Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T22:56:00.815Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T22:56:00.815Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T22:56:00.815Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T22:56:00.815Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T22:56:00.816Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T22:56:00.816Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T22:56:00.816Z] 
Data Files Check:
[2026-01-19T22:56:00.817Z] .github/data/new_jobs.json: ✅ Exists (10 items, 88043 bytes)
[2026-01-19T22:56:00.828Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1553566 bytes)
[2026-01-19T22:56:00.828Z] 
========================================
[2026-01-19T22:56:00.828Z] Starting Enhanced Discord Bot...
[2026-01-19T22:56:00.828Z] ========================================
[2026-01-19T22:56:01.352Z] [BOT] ✅ Loaded V2 database: 2836 jobs
[2026-01-19T22:56:01.940Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T22:56:01.940Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T22:56:01.941Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T22:56:02.069Z] [BOT] ✅ Loaded pending queue: 2811 total (2791 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Expansion Account Manager  at gusto
[2026-01-19T22:56:02.073Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T22:56:02.073Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T22:56:02.074Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T22:56:02.074Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T22:56:02.075Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T22:56:02.078Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-19T22:56:02.079Z] [BOT] 📍 [ROUTING] "Expansion Account Manager " @ gusto
[2026-01-19T22:56:02.079Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T22:56:02.083Z] [BOT ERROR] (node:2771) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T22:56:02.207Z] [BOT ERROR] ❌ Error posting job Expansion Account Manager : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Expansion Account Manager  @ gusto',
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
[2026-01-19T22:56:02.207Z] [BOT] ❌ Industry post failed: Expansion Account Manager 
⚠️  Channel full error count: 1/5
[2026-01-19T22:56:03.958Z] [BOT] ✅ Created forum post: 🏢 Expansion Account Manager  @ gusto in #🌆・chicago
[2026-01-19T22:56:03.958Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-19T22:56:05.460Z] [BOT] 💾 Marked as posted: Expansion Account Manager  @ gusto (instance #1)
[2026-01-19T22:56:05.460Z] [BOT] 💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-19T22:56:05.463Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T22:56:05.471Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 2827 active
[2026-01-19T22:56:05.488Z] [BOT] 💾 Saved posted_jobs.json: 2827 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:56:08.489Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T22:56:08.490Z] [BOT] 📍 [ROUTING] "Corporate Development & Partnerships Deal Lead" @ gusto
[2026-01-19T22:56:08.490Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T22:56:08.828Z] [BOT] ✅ Created forum post: 🏢 Corporate Development & Partnerships Deal Lead @ gusto in #📣・marketing-jobs
[2026-01-19T22:56:08.828Z] [BOT] ✅ Industry: Corporate Development & Partnerships Deal Lead @ gusto
[2026-01-19T22:56:10.612Z] [BOT] ✅ Created forum post: 🏢 Corporate Development & Partnerships Deal Lead @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T22:56:12.113Z] [BOT] 💾 Marked as posted: Corporate Development & Partnerships Deal Lead @ gusto (instance #1)
[2026-01-19T22:56:12.113Z] [BOT] 💾 BEFORE ARCHIVING: 2828 jobs in database
[2026-01-19T22:56:12.115Z] [BOT] ✅ No jobs to archive (all 2828 jobs within 7-day window)
[2026-01-19T22:56:12.130Z] [BOT] 💾 Saved posted_jobs.json: 2828 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:56:15.130Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-19T22:56:15.131Z] [BOT] 📍 [ROUTING] "Software Engineering Manager, Symmetry " @ gusto
[2026-01-19T22:56:15.131Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T22:56:15.131Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T22:56:15.519Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Manager, Symmetry  @ gusto in #🤖・ai-jobs
[2026-01-19T22:56:15.519Z] [BOT] ✅ Industry: Software Engineering Manager, Symmetry  @ gusto
[2026-01-19T22:56:17.405Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Manager, Symmetry  @ gusto in #🌉・san-francisco
[2026-01-19T22:56:17.405Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T22:56:18.907Z] [BOT] 💾 Marked as posted: Software Engineering Manager, Symmetry  @ gusto (instance #1)
[2026-01-19T22:56:18.907Z] [BOT] 💾 BEFORE ARCHIVING: 2829 jobs in database
[2026-01-19T22:56:18.910Z] [BOT] ✅ No jobs to archive (all 2829 jobs within 7-day window)
[2026-01-19T22:56:18.929Z] [BOT] 💾 Saved posted_jobs.json: 2829 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:56:18.930Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer - Starshield" @ ORG_afd623b1
[2026-01-19T22:56:18.930Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T22:56:19.117Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Starshield @ ORG_afd623b1 in #🤖・ai-jobs
  ✅ Industry: Full Stack Software Engineer - Starshield @ ORG_afd623b1
[2026-01-19T22:56:20.895Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Starshield @ ORG_afd623b1 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-19T22:56:22.396Z] [BOT] 💾 Marked as posted: Full Stack Software Engineer - Starshield @ ORG_afd623b1 (instance #1)
[2026-01-19T22:56:22.397Z] [BOT] 💾 BEFORE ARCHIVING: 2830 jobs in database
[2026-01-19T22:56:22.399Z] [BOT] ✅ No jobs to archive (all 2830 jobs within 7-day window)
[2026-01-19T22:56:22.417Z] [BOT] 💾 Saved posted_jobs.json: 2830 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:56:22.418Z] [BOT] 📍 [ROUTING] "Senior Algorithm Application Engineer" @ ORG_c908d13f
[2026-01-19T22:56:22.418Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T22:56:22.666Z] [BOT] ✅ Created forum post: 🏢 Senior Algorithm Application Engineer @ ORG_c908d13f in #🤖・ai-jobs
[2026-01-19T22:56:22.667Z] [BOT] ✅ Industry: Senior Algorithm Application Engineer @ ORG_c908d13f
[2026-01-19T22:56:24.419Z] [BOT] ✅ Created forum post: 🏢 Senior Algorithm Application Engineer @ ORG_c908d13f in #🌉・san-francisco
[2026-01-19T22:56:24.420Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T22:56:25.920Z] [BOT] 💾 Marked as posted: Senior Algorithm Application Engineer @ ORG_c908d13f (instance #1)
[2026-01-19T22:56:25.920Z] [BOT] 💾 BEFORE ARCHIVING: 2831 jobs in database
[2026-01-19T22:56:25.922Z] [BOT] ✅ No jobs to archive (all 2831 jobs within 7-day window)
[2026-01-19T22:56:25.941Z] [BOT] 💾 Saved posted_jobs.json: 2831 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:56:25.942Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Ohio - US" @ ORG_f3ae3598
[2026-01-19T22:56:25.942Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T22:56:26.197Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Ohio - US @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-01-19T22:56:26.198Z] [BOT] ✅ Industry: AI Data Specialist - Ohio - US @ ORG_f3ae3598
[2026-01-19T22:56:27.699Z] [BOT] 💾 Marked as posted: AI Data Specialist - Ohio - US @ ORG_f3ae3598 (instance #1)
[2026-01-19T22:56:27.699Z] [BOT] 💾 BEFORE ARCHIVING: 2832 jobs in database
[2026-01-19T22:56:27.701Z] [BOT] ✅ No jobs to archive (all 2832 jobs within 7-day window)
[2026-01-19T22:56:27.718Z] [BOT] 💾 Saved posted_jobs.json: 2832 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:56:30.718Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T22:56:30.719Z] [BOT] 📍 [ROUTING] "Senior Staff Software Engineer, Payments and Risk" @ gusto
[2026-01-19T22:56:30.719Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T22:56:31.113Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Software Engineer, Payments and Risk @ gusto in #📈・JID_fb739488
[2026-01-19T22:56:31.113Z] [BOT] ✅ Industry: Senior Staff Software Engineer, Payments and Risk @ gusto
[2026-01-19T22:56:32.847Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Software Engineer, Payments and Risk @ gusto in #🌉・san-francisco
[2026-01-19T22:56:32.847Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T22:56:34.348Z] [BOT] 💾 Marked as posted: Senior Staff Software Engineer, Payments and Risk @ gusto (instance #1)
[2026-01-19T22:56:34.349Z] [BOT] 💾 BEFORE ARCHIVING: 2833 jobs in database
[2026-01-19T22:56:34.351Z] [BOT] ✅ No jobs to archive (all 2833 jobs within 7-day window)
[2026-01-19T22:56:34.370Z] [BOT] 💾 Saved posted_jobs.json: 2833 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:56:37.371Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-19T22:56:37.371Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c7bac469
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T22:56:37.614Z] [BOT] ✅ Created forum post: 🟦 Software Engineer @ ORG_c7bac469 in #💻・tech-jobs
[2026-01-19T22:56:37.614Z] [BOT] ✅ Industry: Software Engineer @ ORG_c7bac469
[2026-01-19T22:56:39.356Z] [BOT] ✅ Created forum post: 🟦 Software Engineer @ ORG_c7bac469 in #🖥️・redmond
[2026-01-19T22:56:39.356Z] [BOT] ✅ Location: 🖥️・redmond
[2026-01-19T22:56:40.857Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_c7bac469 (instance #1)
[2026-01-19T22:56:40.858Z] [BOT] 💾 BEFORE ARCHIVING: 2834 jobs in database
[2026-01-19T22:56:40.859Z] [BOT] ✅ No jobs to archive (all 2834 jobs within 7-day window)
[2026-01-19T22:56:40.878Z] [BOT] 💾 Saved posted_jobs.json: 2834 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:56:40.878Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_c7bac469
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T22:56:41.038Z] [BOT] ✅ Created forum post: 🟦 Software Engineer 1 @ ORG_c7bac469 in #💻・tech-jobs
[2026-01-19T22:56:41.038Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_c7bac469
[2026-01-19T22:56:42.719Z] [BOT] ✅ Created forum post: 🟦 Software Engineer 1 @ ORG_c7bac469 in #🖥️・redmond
[2026-01-19T22:56:42.719Z] [BOT] ✅ Location: 🖥️・redmond
[2026-01-19T22:56:44.221Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_c7bac469 (instance #1)
[2026-01-19T22:56:44.221Z] [BOT] 💾 BEFORE ARCHIVING: 2835 jobs in database
[2026-01-19T22:56:44.222Z] [BOT] ✅ No jobs to archive (all 2835 jobs within 7-day window)
[2026-01-19T22:56:44.240Z] [BOT] 💾 Saved posted_jobs.json: 2835 active jobs
[2026-01-19T22:56:44.240Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T22:56:44.241Z] [BOT] 📍 [ROUTING] "Revenue Analytics Lead" @ ORG_fb25d5e8
   Category: TECH (matched: "analytics")
[2026-01-19T22:56:44.241Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T22:56:44.735Z] [BOT] ✅ Created forum post: 🏢 Revenue Analytics Lead @ ORG_fb25d5e8 in #💻・tech-jobs
  ✅ Industry: Revenue Analytics Lead @ ORG_fb25d5e8
[2026-01-19T22:56:46.456Z] [BOT] ✅ Created forum post: 🏢 Revenue Analytics Lead @ ORG_fb25d5e8 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-19T22:56:47.958Z] [BOT] 💾 Marked as posted: Revenue Analytics Lead @ ORG_fb25d5e8 (instance #1)
[2026-01-19T22:56:47.958Z] [BOT] 💾 BEFORE ARCHIVING: 2836 jobs in database
[2026-01-19T22:56:47.960Z] [BOT] ✅ No jobs to archive (all 2836 jobs within 7-day window)
[2026-01-19T22:56:47.975Z] [BOT] 💾 Saved posted_jobs.json: 2836 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:56:50.975Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-19T22:56:50.976Z] [BOT] ⏭️  Skipping duplicate: JID_89e10bde (posted within 7 days)
[2026-01-19T22:56:50.976Z] [BOT] ⏭️  Skipping duplicate: JID_bda302f2 (posted within 7 days)
[2026-01-19T22:56:50.977Z] [BOT] ⏭️  Skipping duplicate: JID_0af24d40 (posted within 7 days)
[2026-01-19T22:56:50.977Z] [BOT] ⏭️  Skipping duplicate: JID_16a45a9a (posted within 7 days)
[2026-01-19T22:56:50.977Z] [BOT] ⏭️  Skipping duplicate: JID_4bb8a75a (posted within 7 days)
[2026-01-19T22:56:50.977Z] [BOT] ⏭️  Skipping duplicate: JID_f48ad3c7 (posted within 7 days)
[2026-01-19T22:56:50.977Z] [BOT] ⏭️  Skipping duplicate: JID_32956f50 (posted within 7 days)
[2026-01-19T22:56:50.977Z] [BOT] ⏭️  Skipping duplicate: JID_19417653-engineer_j-00329367 (posted within 7 days)
[2026-01-19T22:56:50.977Z] [BOT] ⏭️  Skipping duplicate: JID_2c8a7f50 (posted within 7 days)
[2026-01-19T22:56:50.978Z] [BOT] ⏭️  Skipping duplicate: JID_ac108620 (posted within 7 days)
[2026-01-19T22:56:51.108Z] [BOT] ✅ Loaded pending queue: 2811 total (2791 pending, 20 enriched, 0 posted)
[2026-01-19T22:56:51.278Z] [BOT] ✅ Saved pending queue: 2811 total (2791 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-19T22:56:51.278Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-19T22:56:51.339Z] [BOT] 📂 Loaded 5195 existing routing entries
[2026-01-19T22:56:51.410Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5205
   Timestamp: 2026-01-19T22:56:51.389Z
[2026-01-19T22:56:51.411Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 19
[2026-01-19T22:56:51.411Z] [BOT] Successful: 18
   Failed: 1
   Skipped: 0
[2026-01-19T22:56:51.411Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-19T22:56:51.411Z] [BOT] Total posts: 18
   Channels used: 9
   Top channels:
     1. #🌉・san-francisco: 4 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-19T22:56:51.412Z] [BOT] 3. #💻・tech-jobs: 3 posts
     4. #🖥️・redmond: 2 posts
     5. #🌆・chicago: 1 posts
[2026-01-19T22:56:51.412Z] [BOT] [STATS] Channel stats saved
[2026-01-19T22:56:53.437Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2771) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Expansion Account Manager : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Expansion Account Manager
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*