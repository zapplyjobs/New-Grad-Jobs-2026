# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T17:42:52.519Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T17:42:23.459Z] ========================================
[2026-01-05T17:42:23.461Z] Discord Bot Execution Log
[2026-01-05T17:42:23.461Z] Environment: GitHub Actions
[2026-01-05T17:42:23.461Z] Node Version: v20.19.6
[2026-01-05T17:42:23.461Z] ========================================
[2026-01-05T17:42:23.461Z] Environment Variables Check:
[2026-01-05T17:42:23.461Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T17:42:23.461Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T17:42:23.461Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T17:42:23.462Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T17:42:23.462Z] 
Multi-Channel Configuration:
[2026-01-05T17:42:23.462Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T17:42:23.462Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T17:42:23.462Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T17:42:23.462Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T17:42:23.462Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T17:42:23.462Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T17:42:23.462Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T17:42:23.462Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T17:42:23.462Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T17:42:23.462Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T17:42:23.462Z] 
Data Files Check:
[2026-01-05T17:42:23.463Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59913 bytes)
[2026-01-05T17:42:23.468Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 660015 bytes)
[2026-01-05T17:42:23.468Z] 
========================================
[2026-01-05T17:42:23.468Z] Starting Enhanced Discord Bot...
[2026-01-05T17:42:23.468Z] ========================================
[2026-01-05T17:42:23.981Z] [BOT] ✅ Loaded V2 database: 1296 jobs
[2026-01-05T17:42:24.818Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T17:42:24.819Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T17:42:24.819Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T17:42:24.820Z] [BOT] ✅ Loaded pending queue: 55 total (35 pending, 20 enriched, 0 posted)
[2026-01-05T17:42:24.820Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-05T17:42:24.820Z] [BOT] [BOT] 🔍 Sample enriched job: Product Designer, Notifications at discord
[2026-01-05T17:42:24.822Z] [BOT] ⏭️  Skipping duplicate: JID_28f307b7-naelfy26_r00304885 (posted within 7 days)
[2026-01-05T17:42:24.823Z] [BOT] ⏭️ Skipping already posted: Atc – Software and Platform Analyst at Accenture
[2026-01-05T17:42:24.823Z] [BOT] ⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_aabf8ae3-expert_req_096760 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_5605df93-expert_req_096762-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
[2026-01-05T17:42:24.823Z] [BOT] 📬 Found 17 new jobs (3 already posted)...
[2026-01-05T17:42:24.823Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:42:24.824Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:42:24.824Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:42:24.824Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:42:24.824Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:42:24.825Z] [BOT] ✅ Loaded pending queue: 55 total (35 pending, 20 enriched, 0 posted)
[2026-01-05T17:42:24.827Z] [BOT] ✅ Saved pending queue: 43 total (35 pending, 8 enriched, 0 posted)
[2026-01-05T17:42:24.827Z] [BOT] 🗑️ Removed 12 blacklisted jobs from pending queue
📋 After blacklist filter: 5 jobs (12 blacklisted)
[2026-01-05T17:42:24.827Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-01-05T17:42:24.828Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-05T17:42:24.828Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit: los angeles, chicago
⏸️ Limiting to 10 jobs this run, 13 deferred for next run
[2026-01-05T17:42:24.828Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T17:42:24.829Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-05T17:42:24.831Z] [BOT] 📍 [ROUTING] "Product Designer, Notifications" @ discord
[2026-01-05T17:42:24.831Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-05T17:42:24.836Z] [BOT ERROR] (node:2746) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T17:42:25.069Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Notifications @ discord in #📈・JID_fb739488
[2026-01-05T17:42:25.069Z] [BOT] ✅ Industry: Product Designer, Notifications @ discord
[2026-01-05T17:42:27.268Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Notifications @ discord in #🌉・san-francisco
[2026-01-05T17:42:27.268Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-05T17:42:28.769Z] [BOT] 💾 Marked as posted: Product Designer, Notifications @ discord (instance #1)
[2026-01-05T17:42:28.769Z] [BOT] 💾 BEFORE ARCHIVING: 1297 jobs in database
[2026-01-05T17:42:28.770Z] [BOT] ✅ No jobs to archive (all 1297 jobs within 7-day window)
[2026-01-05T17:42:28.783Z] [BOT] 💾 Saved posted_jobs.json: 1297 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T17:42:31.784Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-05T17:42:31.785Z] [BOT] 📍 [ROUTING] "iOS Software Engineer, i18n: Grow Global and Local Communities" @ reddit
[2026-01-05T17:42:31.785Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-05T17:42:32.226Z] [BOT] ✅ Created forum post: 🏢 iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit in #🤖・ai-jobs
[2026-01-05T17:42:32.226Z] [BOT] ✅ Industry: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit
[2026-01-05T17:42:34.110Z] [BOT] ✅ Created forum post: 🏢 iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit in #🦢・los-angeles
[2026-01-05T17:42:34.110Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-05T17:42:35.611Z] [BOT] 💾 Marked as posted: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit (instance #1)
[2026-01-05T17:42:35.611Z] [BOT] 💾 BEFORE ARCHIVING: 1298 jobs in database
[2026-01-05T17:42:35.612Z] [BOT] ✅ No jobs to archive (all 1298 jobs within 7-day window)
[2026-01-05T17:42:35.621Z] [BOT] 💾 Saved posted_jobs.json: 1298 active jobs
[2026-01-05T17:42:35.621Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T17:42:35.621Z] [BOT] 💾 Marked as posted: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit (instance #1)
[2026-01-05T17:42:35.621Z] [BOT] 💾 BEFORE ARCHIVING: 1299 jobs in database
[2026-01-05T17:42:35.623Z] [BOT] ✅ No jobs to archive (all 1299 jobs within 7-day window)
[2026-01-05T17:42:35.631Z] [BOT] 💾 Saved posted_jobs.json: 1299 active jobs
[2026-01-05T17:42:35.631Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T17:42:38.632Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-05T17:42:38.633Z] [BOT] 📍 [ROUTING] "Scoop Core - Associate Software Engineer" @ ORG_b344d80e New York Times
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T17:42:38.886Z] [BOT] ✅ Created forum post: 🏢 Scoop Core - Associate Software Engineer @ ORG_b344d80e New York Times in #💻・tech-jobs
  ✅ Industry: Scoop Core - Associate Software Engineer @ ORG_b344d80e New York Times
[2026-01-05T17:42:40.768Z] [BOT] ✅ Created forum post: 🏢 Scoop Core - Associate Software Engineer @ ORG_b344d80e New York Times in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-05T17:42:42.269Z] [BOT] 💾 Marked as posted: Scoop Core - Associate Software Engineer @ ORG_b344d80e New York Times (instance #1)
[2026-01-05T17:42:42.269Z] [BOT] 💾 BEFORE ARCHIVING: 1300 jobs in database
[2026-01-05T17:42:42.270Z] [BOT] ✅ No jobs to archive (all 1300 jobs within 7-day window)
[2026-01-05T17:42:42.278Z] [BOT] 💾 Saved posted_jobs.json: 1300 active jobs
[2026-01-05T17:42:42.278Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T17:42:42.279Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_d6d2009d
[2026-01-05T17:42:42.279Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T17:42:42.785Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_d6d2009d in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer @ ORG_d6d2009d
[2026-01-05T17:42:44.483Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_d6d2009d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-05T17:42:45.984Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_d6d2009d (instance #1)
[2026-01-05T17:42:45.984Z] [BOT] 💾 BEFORE ARCHIVING: 1301 jobs in database
[2026-01-05T17:42:45.985Z] [BOT] ✅ No jobs to archive (all 1301 jobs within 7-day window)
[2026-01-05T17:42:45.996Z] [BOT] 💾 Saved posted_jobs.json: 1301 active jobs
[2026-01-05T17:42:45.996Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T17:42:48.997Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-05T17:42:48.998Z] [BOT] ⏭️  Skipping duplicate: JID_074cb95b (posted within 7 days)
[2026-01-05T17:42:48.998Z] [BOT] ⏭️  Skipping duplicate: JID_b0b374e1 (posted within 7 days)
[2026-01-05T17:42:48.998Z] [BOT] ⏭️  Skipping duplicate: JID_f896baf9 (posted within 7 days)
⏭️  Skipping duplicate: JID_4d44f971 (posted within 7 days)
[2026-01-05T17:42:48.999Z] [BOT] ✅ Loaded pending queue: 43 total (35 pending, 8 enriched, 0 posted)
[2026-01-05T17:42:49.001Z] [BOT] ✅ Saved pending queue: 43 total (35 pending, 4 enriched, 4 posted)
[2026-01-05T17:42:49.001Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T17:42:49.067Z] [BOT] 📂 Loaded 2204 existing routing entries
[2026-01-05T17:42:49.128Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-05T17:42:49.129Z] [BOT] Total entries: 2208
   Timestamp: 2026-01-05T17:42:49.114Z
[2026-01-05T17:42:49.129Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T17:42:49.129Z] [BOT] Total attempts: 23
   Successful: 8
   Failed: 0
   Skipped: 15
[2026-01-05T17:42:49.129Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-05T17:42:49.129Z] [BOT] Last cleanup: Never
   Total posts: 8
   Channels used: 7
   Top channels:
[2026-01-05T17:42:49.129Z] [BOT] 1. #💻・tech-jobs: 2 posts
     2. #📈・JID_fb739488: 1 posts
     3. #🌉・san-francisco: 1 posts
     4. #🤖・ai-jobs: 1 posts
[2026-01-05T17:42:49.130Z] [BOT] 5. #🦢・los-angeles: 1 posts
[2026-01-05T17:42:49.130Z] [BOT] [STATS] Channel stats saved
[2026-01-05T17:42:51.142Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2746) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*