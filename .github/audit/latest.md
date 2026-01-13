# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T21:08:53.427Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T21:07:58.407Z] ========================================
[2026-01-13T21:07:58.409Z] Discord Bot Execution Log
[2026-01-13T21:07:58.409Z] Environment: GitHub Actions
[2026-01-13T21:07:58.409Z] Node Version: v20.19.6
[2026-01-13T21:07:58.409Z] ========================================
[2026-01-13T21:07:58.409Z] Environment Variables Check:
[2026-01-13T21:07:58.409Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T21:07:58.410Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T21:07:58.410Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T21:07:58.410Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T21:07:58.410Z] 
Multi-Channel Configuration:
[2026-01-13T21:07:58.410Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T21:07:58.410Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T21:07:58.410Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T21:07:58.410Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T21:07:58.410Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T21:07:58.410Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T21:07:58.410Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T21:07:58.410Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T21:07:58.411Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T21:07:58.411Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T21:07:58.411Z] 
Data Files Check:
[2026-01-13T21:07:58.412Z] .github/data/new_jobs.json: ✅ Exists (10 items, 122314 bytes)
[2026-01-13T21:07:58.416Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 521613 bytes)
[2026-01-13T21:07:58.416Z] 
========================================
[2026-01-13T21:07:58.416Z] Starting Enhanced Discord Bot...
[2026-01-13T21:07:58.416Z] ========================================
[2026-01-13T21:07:58.969Z] [BOT] ✅ Loaded V2 database: 985 jobs
[2026-01-13T21:07:59.735Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T21:07:59.735Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T21:07:59.736Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T21:07:59.842Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Strategic Program Manager at figma
[2026-01-13T21:07:59.844Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T21:07:59.845Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T21:07:59.845Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T21:07:59.846Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T21:07:59.846Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T21:07:59.850Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-13T21:07:59.851Z] [BOT] 📍 [ROUTING] "Strategic Program Manager" @ figma
[2026-01-13T21:07:59.851Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-13T21:07:59.855Z] [BOT ERROR] (node:3164) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T21:08:00.084Z] [BOT] ✅ Created forum post: 🏢 Strategic Program Manager @ figma in #📊・JID_9910249a
[2026-01-13T21:08:00.084Z] [BOT] ✅ Industry: Strategic Program Manager @ figma
[2026-01-13T21:08:01.771Z] [BOT] ✅ Created forum post: 🏢 Strategic Program Manager @ figma in #🌉・san-francisco
[2026-01-13T21:08:01.772Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T21:08:03.273Z] [BOT] 💾 Marked as posted: Strategic Program Manager @ figma (instance #1)
[2026-01-13T21:08:03.273Z] [BOT] 💾 BEFORE ARCHIVING: 986 jobs in database
[2026-01-13T21:08:03.274Z] [BOT] ✅ No jobs to archive (all 986 jobs within 7-day window)
[2026-01-13T21:08:03.284Z] [BOT] 💾 Saved posted_jobs.json: 986 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:08:06.286Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-13T21:08:06.286Z] [BOT] 📍 [ROUTING] "Staff Data Platform Engineer" @ vercel
[2026-01-13T21:08:06.286Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:08:06.608Z] [BOT] ✅ Created forum post: 🏢 Staff Data Platform Engineer @ vercel in #💻・tech-jobs
[2026-01-13T21:08:06.608Z] [BOT] ✅ Industry: Staff Data Platform Engineer @ vercel
[2026-01-13T21:08:08.351Z] [BOT] ✅ Created forum post: 🏢 Staff Data Platform Engineer @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T21:08:09.852Z] [BOT] 💾 Marked as posted: Staff Data Platform Engineer @ vercel (instance #1)
[2026-01-13T21:08:09.852Z] [BOT] 💾 BEFORE ARCHIVING: 987 jobs in database
[2026-01-13T21:08:09.853Z] [BOT] ✅ No jobs to archive (all 987 jobs within 7-day window)
[2026-01-13T21:08:09.863Z] [BOT] 💾 Saved posted_jobs.json: 987 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:08:09.864Z] [BOT] 📍 [ROUTING] "Manager, Customer Support Engineering" @ vercel
[2026-01-13T21:08:09.864Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:08:10.190Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Support Engineering @ vercel in #💻・tech-jobs
  ✅ Industry: Manager, Customer Support Engineering @ vercel
[2026-01-13T21:08:11.965Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Support Engineering @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T21:08:13.466Z] [BOT] 💾 Marked as posted: Manager, Customer Support Engineering @ vercel (instance #1)
[2026-01-13T21:08:13.466Z] [BOT] 💾 BEFORE ARCHIVING: 988 jobs in database
[2026-01-13T21:08:13.467Z] [BOT] ✅ No jobs to archive (all 988 jobs within 7-day window)
[2026-01-13T21:08:13.475Z] [BOT] 💾 Saved posted_jobs.json: 988 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:08:13.476Z] [BOT] 📍 [ROUTING] "Senior Security Software Engineer, Detection and Response" @ discord
[2026-01-13T21:08:13.476Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:08:13.850Z] [BOT] ✅ Created forum post: 🏢 Senior Security Software Engineer, Detection and Response @ discord in #💻・tech-jobs
[2026-01-13T21:08:13.850Z] [BOT] ✅ Industry: Senior Security Software Engineer, Detection and Response @ discord
[2026-01-13T21:08:15.523Z] [BOT] ✅ Created forum post: 🏢 Senior Security Software Engineer, Detection and Response @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T21:08:17.024Z] [BOT] 💾 Marked as posted: Senior Security Software Engineer, Detection and Response @ discord (instance #1)
[2026-01-13T21:08:17.024Z] [BOT] 💾 BEFORE ARCHIVING: 989 jobs in database
[2026-01-13T21:08:17.025Z] [BOT] ✅ No jobs to archive (all 989 jobs within 7-day window)
[2026-01-13T21:08:17.034Z] [BOT] 💾 Saved posted_jobs.json: 989 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:08:17.034Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_dc008d0e Bros.
   Category: TECH (matched: "software")
[2026-01-13T21:08:17.034Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:08:17.226Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_dc008d0e Bros. in #💻・tech-jobs
[2026-01-13T21:08:17.227Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_dc008d0e Bros.
[2026-01-13T21:08:18.906Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_dc008d0e Bros. in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-13T21:08:20.407Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_dc008d0e Bros. (instance #1)
[2026-01-13T21:08:20.407Z] [BOT] 💾 BEFORE ARCHIVING: 990 jobs in database
[2026-01-13T21:08:20.408Z] [BOT] ✅ No jobs to archive (all 990 jobs within 7-day window)
[2026-01-13T21:08:20.416Z] [BOT] 💾 Saved posted_jobs.json: 990 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:08:23.417Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T21:08:23.418Z] [BOT] 📍 [ROUTING] "Engineering Manager, Engagement" @ discord
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-13T21:08:23.418Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T21:08:23.675Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Engagement @ discord in #📈・JID_fb739488
  ✅ Industry: Engineering Manager, Engagement @ discord
[2026-01-13T21:08:25.353Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Engagement @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T21:08:26.855Z] [BOT] 💾 Marked as posted: Engineering Manager, Engagement @ discord (instance #1)
[2026-01-13T21:08:26.855Z] [BOT] 💾 BEFORE ARCHIVING: 991 jobs in database
[2026-01-13T21:08:26.856Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-13T21:08:26.864Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:08:29.864Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-13T21:08:29.865Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial Install Base " @ vercel
[2026-01-13T21:08:29.865Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T21:08:30.100Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Commercial Install Base  @ vercel in #💲・sales-jobs
  ✅ Industry: Account Executive, Commercial Install Base  @ vercel
[2026-01-13T21:08:31.815Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Commercial Install Base  @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T21:08:33.315Z] [BOT] 💾 Marked as posted: Account Executive, Commercial Install Base  @ vercel (instance #1)
[2026-01-13T21:08:33.316Z] [BOT] 💾 BEFORE ARCHIVING: 992 jobs in database
[2026-01-13T21:08:33.316Z] [BOT] ✅ No jobs to archive (all 992 jobs within 7-day window)
[2026-01-13T21:08:33.326Z] [BOT] 💾 Saved posted_jobs.json: 992 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:08:33.327Z] [BOT] 📍 [ROUTING] "Manager, Figma for Education " @ figma
[2026-01-13T21:08:33.327Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T21:08:33.526Z] [BOT] ✅ Created forum post: 🏢 Manager, Figma for Education  @ figma in #💲・sales-jobs
  ✅ Industry: Manager, Figma for Education  @ figma
[2026-01-13T21:08:35.251Z] [BOT] ✅ Created forum post: 🏢 Manager, Figma for Education  @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T21:08:36.752Z] [BOT] 💾 Marked as posted: Manager, Figma for Education  @ figma (instance #1)
[2026-01-13T21:08:36.752Z] [BOT] 💾 BEFORE ARCHIVING: 993 jobs in database
[2026-01-13T21:08:36.753Z] [BOT] ✅ No jobs to archive (all 993 jobs within 7-day window)
[2026-01-13T21:08:36.761Z] [BOT] 💾 Saved posted_jobs.json: 993 active jobs
[2026-01-13T21:08:36.761Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:08:36.761Z] [BOT] 📍 [ROUTING] "Staff Economist" @ brex
[2026-01-13T21:08:36.762Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T21:08:36.950Z] [BOT] ✅ Created forum post: 🏢 Staff Economist @ brex in #💲・sales-jobs
  ✅ Industry: Staff Economist @ brex
[2026-01-13T21:08:38.806Z] [BOT] ✅ Created forum post: 🏢 Staff Economist @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T21:08:40.306Z] [BOT] 💾 Marked as posted: Staff Economist @ brex (instance #1)
[2026-01-13T21:08:40.307Z] [BOT] 💾 BEFORE ARCHIVING: 994 jobs in database
[2026-01-13T21:08:40.307Z] [BOT] ✅ No jobs to archive (all 994 jobs within 7-day window)
[2026-01-13T21:08:40.316Z] [BOT] 💾 Saved posted_jobs.json: 994 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:08:43.318Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-13T21:08:43.318Z] [BOT] 📍 [ROUTING] "AI Engineer" @ vercel
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T21:08:43.318Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T21:08:43.800Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ vercel in #🤖・ai-jobs
  ✅ Industry: AI Engineer @ vercel
[2026-01-13T21:08:45.731Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T21:08:47.233Z] [BOT] 💾 Marked as posted: AI Engineer @ vercel (instance #1)
[2026-01-13T21:08:47.233Z] [BOT] 💾 BEFORE ARCHIVING: 995 jobs in database
[2026-01-13T21:08:47.234Z] [BOT] ✅ No jobs to archive (all 995 jobs within 7-day window)
[2026-01-13T21:08:47.242Z] [BOT] 💾 Saved posted_jobs.json: 995 active jobs
[2026-01-13T21:08:47.242Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:08:50.243Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T21:08:50.243Z] [BOT] ⏭️  Skipping duplicate: JID_8ffa1ccf (posted within 7 days)
[2026-01-13T21:08:50.243Z] [BOT] ⏭️  Skipping duplicate: JID_527413fd (posted within 7 days)
[2026-01-13T21:08:50.244Z] [BOT] ⏭️  Skipping duplicate: JID_3d2eb61b (posted within 7 days)
[2026-01-13T21:08:50.244Z] [BOT] ⏭️  Skipping duplicate: JID_32dda557 (posted within 7 days)
[2026-01-13T21:08:50.244Z] [BOT] ⏭️  Skipping duplicate: JID_e8051f69 (posted within 7 days)
[2026-01-13T21:08:50.244Z] [BOT] ⏭️  Skipping duplicate: JID_3ad8d869 (posted within 7 days)
[2026-01-13T21:08:50.244Z] [BOT] ⏭️  Skipping duplicate: JID_9d30b256 (posted within 7 days)
[2026-01-13T21:08:50.244Z] [BOT] ⏭️  Skipping duplicate: JID_44b041dc (posted within 7 days)
[2026-01-13T21:08:50.244Z] [BOT] ⏭️  Skipping duplicate: JID_f3f7bbd7 (posted within 7 days)
[2026-01-13T21:08:50.244Z] [BOT] ⏭️  Skipping duplicate: JID_c560983c-engineer_r000101226 (posted within 7 days)
[2026-01-13T21:08:50.358Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[2026-01-13T21:08:50.518Z] [BOT] ✅ Saved pending queue: 2725 total (2705 pending, 10 enriched, 10 posted)
[2026-01-13T21:08:50.518Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T21:08:50.570Z] [BOT] 📂 Loaded 3135 existing routing entries
[2026-01-13T21:08:50.628Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3145
   Timestamp: 2026-01-13T21:08:50.615Z
[2026-01-13T21:08:50.628Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T21:08:50.629Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-13T21:08:50.629Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-13T21:08:50.629Z] [BOT] Total posts: 20
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 9 posts
[2026-01-13T21:08:50.629Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💲・sales-jobs: 3 posts
     4. #📊・JID_9910249a: 1 posts
     5. #🦢・los-angeles: 1 posts
[2026-01-13T21:08:50.629Z] [BOT] [STATS] Channel stats saved
[2026-01-13T21:08:52.654Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3164) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*