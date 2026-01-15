# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T21:42:57.075Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T21:42:09.740Z] ========================================
[2026-01-15T21:42:09.742Z] Discord Bot Execution Log
[2026-01-15T21:42:09.742Z] Environment: GitHub Actions
[2026-01-15T21:42:09.743Z] Node Version: v20.19.6
[2026-01-15T21:42:09.743Z] ========================================
[2026-01-15T21:42:09.743Z] Environment Variables Check:
[2026-01-15T21:42:09.743Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T21:42:09.743Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T21:42:09.743Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T21:42:09.743Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T21:42:09.743Z] 
Multi-Channel Configuration:
[2026-01-15T21:42:09.743Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T21:42:09.743Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T21:42:09.744Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T21:42:09.744Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T21:42:09.744Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T21:42:09.744Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T21:42:09.744Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T21:42:09.744Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T21:42:09.744Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T21:42:09.744Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T21:42:09.744Z] 
Data Files Check:
[2026-01-15T21:42:09.745Z] .github/data/new_jobs.json: ✅ Exists (10 items, 42695 bytes)
[2026-01-15T21:42:09.752Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 981537 bytes)
[2026-01-15T21:42:09.752Z] 
========================================
[2026-01-15T21:42:09.752Z] Starting Enhanced Discord Bot...
[2026-01-15T21:42:09.752Z] ========================================
[2026-01-15T21:42:10.293Z] [BOT] ✅ Loaded V2 database: 1829 jobs
[2026-01-15T21:42:11.145Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T21:42:11.146Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T21:42:11.146Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T21:42:11.259Z] [BOT] ✅ Loaded pending queue: 2758 total (2738 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer I at Kroll
[2026-01-15T21:42:11.262Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T21:42:11.262Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T21:42:11.262Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T21:42:11.263Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T21:42:11.263Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T21:42:11.269Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-15T21:42:11.269Z] [BOT] 📍 [ROUTING] "Data Engineer I" @ ORG_5d46ba90
   Category: DATA-SCIENCE (matched: "data engineering")
[2026-01-15T21:42:11.270Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T21:42:11.286Z] [BOT ERROR] (node:2820) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T21:42:11.445Z] [BOT ERROR] ❌ Error posting job Data Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineer I @ Kroll',
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
  url: 'https://discord.com/api/v10/channels/CH_0d209940/threads'
}
[2026-01-15T21:42:11.446Z] [BOT] ❌ Industry post failed: Data Engineer I
⚠️  Channel full error count: 1/5
[2026-01-15T21:42:12.947Z] [BOT] 📍 [ROUTING] "Data Analytics Engineer 1 - Future Opening" @ ORG_e9a14aad
   Category: DATA-SCIENCE (matched: "analytics")
[2026-01-15T21:42:12.947Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T21:42:13.373Z] [BOT] ✅ Created forum post: 🏢 Data Analytics Engineer 1 - Future Opening @ ORG_e9a14aad in #📈・JID_fb739488
  ✅ Industry: Data Analytics Engineer 1 - Future Opening @ ORG_e9a14aad
[2026-01-15T21:42:14.873Z] [BOT] 💾 Marked as posted: Data Analytics Engineer 1 - Future Opening @ ORG_e9a14aad (instance #1)
[2026-01-15T21:42:14.874Z] [BOT] 💾 BEFORE ARCHIVING: 1830 jobs in database
[2026-01-15T21:42:14.876Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T21:42:14.881Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-15T21:42:14.881Z] [BOT] ✅ Archiving complete: 2 archived, 1828 active
[2026-01-15T21:42:14.895Z] [BOT] 💾 Saved posted_jobs.json: 1828 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T21:42:17.896Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-15T21:42:17.896Z] [BOT] 📍 [ROUTING] "Data Conversion Specialist 1" @ ORG_2ec4b129
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T21:42:18.193Z] [BOT] ✅ Created forum post: 🏢 Data Conversion Specialist 1 @ ORG_2ec4b129 in #🤖・ai-jobs
  ✅ Industry: Data Conversion Specialist 1 @ ORG_2ec4b129
[2026-01-15T21:42:19.939Z] [BOT] ✅ Created forum post: 🏢 Data Conversion Specialist 1 @ ORG_2ec4b129 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T21:42:21.440Z] [BOT] 💾 Marked as posted: Data Conversion Specialist 1 @ ORG_2ec4b129 (instance #1)
[2026-01-15T21:42:21.440Z] [BOT] 💾 BEFORE ARCHIVING: 1829 jobs in database
[2026-01-15T21:42:21.442Z] [BOT] ✅ No jobs to archive (all 1829 jobs within 7-day window)
[2026-01-15T21:42:21.457Z] [BOT] 💾 Saved posted_jobs.json: 1829 active jobs
[2026-01-15T21:42:21.457Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T21:42:21.458Z] [BOT] 📍 [ROUTING] "Events Partnerships Manager" @ gohighlevel
[2026-01-15T21:42:21.458Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T21:42:21.659Z] [BOT] ✅ Created forum post: 🏢 Events Partnerships Manager @ gohighlevel in #🤖・ai-jobs
  ✅ Industry: Events Partnerships Manager @ gohighlevel
[2026-01-15T21:42:23.160Z] [BOT] 💾 Marked as posted: Events Partnerships Manager @ gohighlevel (instance #1)
[2026-01-15T21:42:23.160Z] [BOT] 💾 BEFORE ARCHIVING: 1830 jobs in database
[2026-01-15T21:42:23.162Z] [BOT] ✅ No jobs to archive (all 1830 jobs within 7-day window)
[2026-01-15T21:42:23.174Z] [BOT] 💾 Saved posted_jobs.json: 1830 active jobs
[2026-01-15T21:42:23.174Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T21:42:23.175Z] [BOT] 📍 [ROUTING] "Application Support Engineer" @ ORG_c072f44b
[2026-01-15T21:42:23.175Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T21:42:23.444Z] [BOT] ✅ Created forum post: 🏢 Application Support Engineer @ ORG_c072f44b in #🤖・ai-jobs
  ✅ Industry: Application Support Engineer @ ORG_c072f44b
[2026-01-15T21:42:25.296Z] [BOT] ✅ Created forum post: 🏢 Application Support Engineer @ ORG_c072f44b in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-15T21:42:26.797Z] [BOT] 💾 Marked as posted: Application Support Engineer @ ORG_c072f44b (instance #1)
[2026-01-15T21:42:26.797Z] [BOT] 💾 BEFORE ARCHIVING: 1831 jobs in database
[2026-01-15T21:42:26.799Z] [BOT] ✅ No jobs to archive (all 1831 jobs within 7-day window)
[2026-01-15T21:42:26.811Z] [BOT] 💾 Saved posted_jobs.json: 1831 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T21:42:26.811Z] [BOT] 📍 [ROUTING] "Software Engineer 0" @ ORG_8b09cf05
[2026-01-15T21:42:26.811Z] [BOT] Category: AI (matched: "artificial intelligence")
[2026-01-15T21:42:26.811Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T21:42:27.089Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 0 @ ORG_8b09cf05 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 0 @ ORG_8b09cf05
[2026-01-15T21:42:28.797Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 0 @ ORG_8b09cf05 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T21:42:30.298Z] [BOT] 💾 Marked as posted: Software Engineer 0 @ ORG_8b09cf05 (instance #1)
[2026-01-15T21:42:30.298Z] [BOT] 💾 BEFORE ARCHIVING: 1832 jobs in database
[2026-01-15T21:42:30.299Z] [BOT] ✅ No jobs to archive (all 1832 jobs within 7-day window)
[2026-01-15T21:42:30.310Z] [BOT] 💾 Saved posted_jobs.json: 1832 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T21:42:33.311Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-15T21:42:33.311Z] [BOT] 📍 [ROUTING] "B-Crew Dockman - 7" @ ORG_b23b6b4d 
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T21:42:33.575Z] [BOT] ✅ Created forum post: 🏢 B-Crew Dockman - 7 @ ORG_b23b6b4d  in #💻・tech-jobs
  ✅ Industry: B-Crew Dockman - 7 @ ORG_b23b6b4d
[2026-01-15T21:42:35.320Z] [BOT] ✅ Created forum post: 🏢 B-Crew Dockman - 7 @ ORG_b23b6b4d  in #💻・remote-usa
[2026-01-15T21:42:35.320Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T21:42:36.821Z] [BOT] 💾 Marked as posted: B-Crew Dockman - 7 @ ORG_b23b6b4d  (instance #1)
[2026-01-15T21:42:36.822Z] [BOT] 💾 BEFORE ARCHIVING: 1833 jobs in database
[2026-01-15T21:42:36.823Z] [BOT] ✅ No jobs to archive (all 1833 jobs within 7-day window)
[2026-01-15T21:42:36.835Z] [BOT] 💾 Saved posted_jobs.json: 1833 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T21:42:36.835Z] [BOT] 📍 [ROUTING] "Software Engineer - Starship Quality" @ ORG_afd623b1
[2026-01-15T21:42:36.835Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T21:42:37.057Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Starship Quality @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Starship Quality @ ORG_afd623b1
[2026-01-15T21:42:38.878Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Starship Quality @ ORG_afd623b1 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-15T21:42:40.379Z] [BOT] 💾 Marked as posted: Software Engineer - Starship Quality @ ORG_afd623b1 (instance #1)
[2026-01-15T21:42:40.380Z] [BOT] 💾 BEFORE ARCHIVING: 1834 jobs in database
[2026-01-15T21:42:40.381Z] [BOT] ✅ No jobs to archive (all 1834 jobs within 7-day window)
[2026-01-15T21:42:40.396Z] [BOT] 💾 Saved posted_jobs.json: 1834 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T21:42:40.396Z] [BOT] 📍 [ROUTING] "Material Handler I" @ ORG_7f2969dd & Minor
   Category: TECH (default)
[2026-01-15T21:42:40.396Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T21:42:40.561Z] [BOT] ✅ Created forum post: 🏢 Material Handler I @ ORG_7f2969dd & Minor in #💻・tech-jobs
[2026-01-15T21:42:40.562Z] [BOT] ✅ Industry: Material Handler I @ ORG_7f2969dd & Minor
[2026-01-15T21:42:42.404Z] [BOT] ✅ Created forum post: 🏢 Material Handler I @ ORG_7f2969dd & Minor in #💻・remote-usa
[2026-01-15T21:42:42.404Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T21:42:43.905Z] [BOT] 💾 Marked as posted: Material Handler I @ ORG_7f2969dd & Minor (instance #1)
[2026-01-15T21:42:43.905Z] [BOT] 💾 BEFORE ARCHIVING: 1835 jobs in database
[2026-01-15T21:42:43.906Z] [BOT] ✅ No jobs to archive (all 1835 jobs within 7-day window)
[2026-01-15T21:42:43.920Z] [BOT] 💾 Saved posted_jobs.json: 1835 active jobs
[2026-01-15T21:42:43.920Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T21:42:46.921Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-15T21:42:46.921Z] [BOT] 📍 [ROUTING] "Baseball Operations Associate Analyst" @ ORG_66123962 Giants
[2026-01-15T21:42:46.921Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-15T21:42:47.312Z] [BOT] ✅ Created forum post: 🏢 Baseball Operations Associate Analyst @ ORG_66123962 Giants in #🩺・healthcare-jobs
[2026-01-15T21:42:47.312Z] [BOT] ✅ Industry: Baseball Operations Associate Analyst @ ORG_66123962 Giants
[2026-01-15T21:42:49.006Z] [BOT] ✅ Created forum post: 🏢 Baseball Operations Associate Analyst @ ORG_66123962 Giants in #🌉・san-francisco
[2026-01-15T21:42:49.007Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T21:42:50.508Z] [BOT] 💾 Marked as posted: Baseball Operations Associate Analyst @ ORG_66123962 Giants (instance #1)
[2026-01-15T21:42:50.508Z] [BOT] 💾 BEFORE ARCHIVING: 1836 jobs in database
[2026-01-15T21:42:50.510Z] [BOT] ✅ No jobs to archive (all 1836 jobs within 7-day window)
[2026-01-15T21:42:50.521Z] [BOT] 💾 Saved posted_jobs.json: 1836 active jobs
[2026-01-15T21:42:50.522Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T21:42:53.522Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-15T21:42:53.523Z] [BOT] ⏭️  Skipping duplicate: JID_4f0e26ca (posted within 7 days)
[2026-01-15T21:42:53.523Z] [BOT] ⏭️  Skipping duplicate: JID_56f04e2f (posted within 7 days)
[2026-01-15T21:42:53.524Z] [BOT] ⏭️  Skipping duplicate: JID_06b89b40-universal_logistics_holdings-JID_12c4bbf1-7_jr115349-1 (posted within 7 days)
[2026-01-15T21:42:53.524Z] [BOT] ⏭️  Skipping duplicate: JID_89f6c23a (posted within 7 days)
[2026-01-15T21:42:53.524Z] [BOT] ⏭️  Skipping duplicate: JID_c21b7855 (posted within 7 days)
[2026-01-15T21:42:53.524Z] [BOT] ⏭️  Skipping duplicate: JID_e8d9c351 (posted within 7 days)
⏭️  Skipping duplicate: JID_df378c87 (posted within 7 days)
[2026-01-15T21:42:53.524Z] [BOT] ⏭️  Skipping duplicate: JID_b09bb8c9-i_req_24_19332 (posted within 7 days)
[2026-01-15T21:42:53.524Z] [BOT] ⏭️  Skipping duplicate: JID_a3059077 (posted within 7 days)
[2026-01-15T21:42:53.637Z] [BOT] ✅ Loaded pending queue: 2758 total (2738 pending, 20 enriched, 0 posted)
[2026-01-15T21:42:53.822Z] [BOT] ✅ Saved pending queue: 2758 total (2738 pending, 11 enriched, 9 posted)
[2026-01-15T21:42:53.822Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T21:42:53.878Z] [BOT] 📂 Loaded 4015 existing routing entries
[2026-01-15T21:42:53.941Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T21:42:53.941Z] [BOT] Total entries: 4025
   Timestamp: 2026-01-15T21:42:53.924Z
[2026-01-15T21:42:53.942Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T21:42:53.942Z] [BOT] Total attempts: 17
   Successful: 16
   Failed: 1
   Skipped: 0
[2026-01-15T21:42:53.942Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T21:42:53.942Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 8
   Top channels:
     1. #🤖・ai-jobs: 4 posts
[2026-01-15T21:42:53.943Z] [BOT] 2. #💻・remote-usa: 4 posts
     3. #💻・tech-jobs: 3 posts
     4. #📈・JID_fb739488: 1 posts
     5. #🦢・los-angeles: 1 posts
[STATS] Channel stats saved
[2026-01-15T21:42:55.970Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2820) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Engineer I
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*