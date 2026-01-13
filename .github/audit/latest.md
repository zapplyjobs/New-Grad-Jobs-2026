# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T00:43:49.832Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T00:42:58.691Z] ========================================
[2026-01-13T00:42:58.693Z] Discord Bot Execution Log
[2026-01-13T00:42:58.693Z] Environment: GitHub Actions
[2026-01-13T00:42:58.693Z] Node Version: v20.19.6
[2026-01-13T00:42:58.693Z] ========================================
[2026-01-13T00:42:58.693Z] Environment Variables Check:
[2026-01-13T00:42:58.694Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T00:42:58.694Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T00:42:58.694Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T00:42:58.694Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T00:42:58.694Z] 
Multi-Channel Configuration:
[2026-01-13T00:42:58.694Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T00:42:58.694Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T00:42:58.694Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T00:42:58.694Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T00:42:58.694Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T00:42:58.694Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T00:42:58.694Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T00:42:58.695Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T00:42:58.695Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T00:42:58.695Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T00:42:58.695Z] 
Data Files Check:
[2026-01-13T00:42:58.696Z] .github/data/new_jobs.json: ✅ Exists (10 items, 125220 bytes)
[2026-01-13T00:42:58.699Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 344307 bytes)
[2026-01-13T00:42:58.699Z] 
========================================
[2026-01-13T00:42:58.699Z] Starting Enhanced Discord Bot...
[2026-01-13T00:42:58.699Z] ========================================
[2026-01-13T00:42:59.218Z] [BOT] ✅ Loaded V2 database: 647 jobs
[2026-01-13T00:42:59.855Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T00:42:59.855Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T00:42:59.855Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T00:42:59.964Z] [BOT] ✅ Loaded pending queue: 2683 total (2663 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer - Realtime Infrastructure at discord
[2026-01-13T00:42:59.966Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T00:42:59.966Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T00:42:59.967Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T00:42:59.967Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-13T00:42:59.968Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit: los angeles, chicago, san francisco
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-13T00:42:59.968Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T00:42:59.972Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-13T00:42:59.972Z] [BOT] 📍 [ROUTING] "Software Engineer - Realtime Infrastructure" @ discord
[2026-01-13T00:42:59.973Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T00:42:59.977Z] [BOT ERROR] (node:3000) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T00:43:00.299Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Realtime Infrastructure @ discord in #💻・tech-jobs
  ✅ Industry: Software Engineer - Realtime Infrastructure @ discord
[2026-01-13T00:43:02.005Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Realtime Infrastructure @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T00:43:03.506Z] [BOT] 💾 Marked as posted: Software Engineer - Realtime Infrastructure @ discord (instance #1)
[2026-01-13T00:43:03.506Z] [BOT] 💾 BEFORE ARCHIVING: 648 jobs in database
[2026-01-13T00:43:03.507Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T00:43:03.512Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-13T00:43:03.512Z] [BOT] ✅ Archiving complete: 9 archived, 639 active
[2026-01-13T00:43:03.517Z] [BOT] 💾 Saved posted_jobs.json: 639 active jobs
[2026-01-13T00:43:03.517Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:43:06.518Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-13T00:43:06.518Z] [BOT] 📍 [ROUTING] "iOS Software Engineer, i18n: Grow Global and Local Communities" @ reddit
[2026-01-13T00:43:06.518Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T00:43:06.762Z] [BOT] ✅ Created forum post: 🏢 iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit in #🤖・ai-jobs
[2026-01-13T00:43:06.762Z] [BOT] ✅ Industry: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit
[2026-01-13T00:43:08.563Z] [BOT] ✅ Created forum post: 🏢 iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-13T00:43:10.064Z] [BOT] 💾 Marked as posted: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit (instance #1)
[2026-01-13T00:43:10.064Z] [BOT] 💾 BEFORE ARCHIVING: 640 jobs in database
[2026-01-13T00:43:10.065Z] [BOT] ✅ No jobs to archive (all 640 jobs within 7-day window)
[2026-01-13T00:43:10.070Z] [BOT] 💾 Saved posted_jobs.json: 640 active jobs
[2026-01-13T00:43:10.070Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:43:10.070Z] [BOT] 💾 Marked as posted: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit (instance #1)
[2026-01-13T00:43:10.071Z] [BOT] 💾 BEFORE ARCHIVING: 641 jobs in database
[2026-01-13T00:43:10.071Z] [BOT] ✅ No jobs to archive (all 641 jobs within 7-day window)
[2026-01-13T00:43:10.076Z] [BOT] 💾 Saved posted_jobs.json: 641 active jobs
[2026-01-13T00:43:10.076Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit (instance #1)
💾 BEFORE ARCHIVING: 642 jobs in database
[2026-01-13T00:43:10.077Z] [BOT] ✅ No jobs to archive (all 642 jobs within 7-day window)
[2026-01-13T00:43:10.081Z] [BOT] 💾 Saved posted_jobs.json: 642 active jobs
[2026-01-13T00:43:10.081Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:43:10.082Z] [BOT] 📍 [ROUTING] "Software Engineer - Java/AI/ML/Kubernetes" @ ORG_530743c3
[2026-01-13T00:43:10.082Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T00:43:10.082Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T00:43:10.455Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Java/AI/ML/Kubernetes @ ORG_530743c3 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Java/AI/ML/Kubernetes @ ORG_530743c3
[2026-01-13T00:43:12.306Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Java/AI/ML/Kubernetes @ ORG_530743c3 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T00:43:13.806Z] [BOT] 💾 Marked as posted: Software Engineer - Java/AI/ML/Kubernetes @ ORG_530743c3 (instance #1)
[2026-01-13T00:43:13.806Z] [BOT] 💾 BEFORE ARCHIVING: 643 jobs in database
[2026-01-13T00:43:13.807Z] [BOT] ✅ No jobs to archive (all 643 jobs within 7-day window)
[2026-01-13T00:43:13.811Z] [BOT] 💾 Saved posted_jobs.json: 643 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T00:43:13.812Z] [BOT] 📍 [ROUTING] "Data Scientist, Marketing" @ anthropic
[2026-01-13T00:43:13.812Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T00:43:14.067Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, Marketing @ anthropic in #🤖・ai-jobs
  ✅ Industry: Data Scientist, Marketing @ anthropic
[2026-01-13T00:43:15.770Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, Marketing @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T00:43:17.272Z] [BOT] 💾 Marked as posted: Data Scientist, Marketing @ anthropic (instance #1)
[2026-01-13T00:43:17.272Z] [BOT] 💾 BEFORE ARCHIVING: 644 jobs in database
[2026-01-13T00:43:17.272Z] [BOT] ✅ No jobs to archive (all 644 jobs within 7-day window)
[2026-01-13T00:43:17.277Z] [BOT] 💾 Saved posted_jobs.json: 644 active jobs
[2026-01-13T00:43:17.277Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:43:17.278Z] [BOT] 📍 [ROUTING] "Director, Global 3rd Party Partnerships" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-13T00:43:17.278Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T00:43:17.529Z] [BOT] ✅ Created forum post: 🏢 Director, Global 3rd Party Partnerships @ reddit in #🤖・ai-jobs
[2026-01-13T00:43:17.529Z] [BOT] ✅ Industry: Director, Global 3rd Party Partnerships @ reddit
[2026-01-13T00:43:19.184Z] [BOT] ✅ Created forum post: 🏢 Director, Global 3rd Party Partnerships @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T00:43:20.684Z] [BOT] 💾 Marked as posted: Director, Global 3rd Party Partnerships @ reddit (instance #1)
[2026-01-13T00:43:20.685Z] [BOT] 💾 BEFORE ARCHIVING: 645 jobs in database
[2026-01-13T00:43:20.685Z] [BOT] ✅ No jobs to archive (all 645 jobs within 7-day window)
[2026-01-13T00:43:20.691Z] [BOT] 💾 Saved posted_jobs.json: 645 active jobs
[2026-01-13T00:43:20.691Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:43:23.692Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-13T00:43:23.693Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ vercel
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T00:43:23.899Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ vercel in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive @ vercel
[2026-01-13T00:43:25.599Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ vercel in #🌉・san-francisco
[2026-01-13T00:43:25.599Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T00:43:27.099Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ vercel (instance #1)
[2026-01-13T00:43:27.099Z] [BOT] 💾 BEFORE ARCHIVING: 646 jobs in database
[2026-01-13T00:43:27.100Z] [BOT] ✅ No jobs to archive (all 646 jobs within 7-day window)
[2026-01-13T00:43:27.106Z] [BOT] 💾 Saved posted_jobs.json: 646 active jobs
[2026-01-13T00:43:27.106Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:43:27.106Z] [BOT] 📍 [ROUTING] "Head of Asset & Wealth Management, GTM Sales" @ anthropic
[2026-01-13T00:43:27.106Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T00:43:27.279Z] [BOT] ✅ Created forum post: 🏢 Head of Asset & Wealth Management, GTM Sales @ anthropic in #💲・sales-jobs
[2026-01-13T00:43:27.280Z] [BOT] ✅ Industry: Head of Asset & Wealth Management, GTM Sales @ anthropic
[2026-01-13T00:43:28.949Z] [BOT] ✅ Created forum post: 🏢 Head of Asset & Wealth Management, GTM Sales @ anthropic in #🌉・san-francisco
[2026-01-13T00:43:28.949Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T00:43:30.451Z] [BOT] 💾 Marked as posted: Head of Asset & Wealth Management, GTM Sales @ anthropic (instance #1)
[2026-01-13T00:43:30.451Z] [BOT] 💾 BEFORE ARCHIVING: 647 jobs in database
[2026-01-13T00:43:30.452Z] [BOT] ✅ No jobs to archive (all 647 jobs within 7-day window)
[2026-01-13T00:43:30.458Z] [BOT] 💾 Saved posted_jobs.json: 647 active jobs
[2026-01-13T00:43:30.458Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:43:30.458Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Retail & Commercial Banking" @ anthropic
[2026-01-13T00:43:30.458Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T00:43:30.615Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Retail & Commercial Banking @ anthropic in #💲・sales-jobs
[2026-01-13T00:43:30.616Z] [BOT] ✅ Industry: Strategic Account Executive, Retail & Commercial Banking @ anthropic
[2026-01-13T00:43:32.304Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Retail & Commercial Banking @ anthropic in #🌉・san-francisco
[2026-01-13T00:43:32.305Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T00:43:33.805Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Retail & Commercial Banking @ anthropic (instance #1)
[2026-01-13T00:43:33.805Z] [BOT] 💾 BEFORE ARCHIVING: 648 jobs in database
[2026-01-13T00:43:33.805Z] [BOT] ✅ No jobs to archive (all 648 jobs within 7-day window)
[2026-01-13T00:43:33.812Z] [BOT] 💾 Saved posted_jobs.json: 648 active jobs
[2026-01-13T00:43:33.812Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:43:36.812Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-13T00:43:36.812Z] [BOT] 📍 [ROUTING] "NetSuite Implementation Consultant" @ ORG_efa4a8df
   Category: MARKETING (matched: "growth")
[2026-01-13T00:43:36.813Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T00:43:37.025Z] [BOT] ✅ Created forum post: 🏢 NetSuite Implementation Consultant @ ORG_efa4a8df in #📣・marketing-jobs
  ✅ Industry: NetSuite Implementation Consultant @ ORG_efa4a8df
[2026-01-13T00:43:38.728Z] [BOT] ✅ Created forum post: 🏢 NetSuite Implementation Consultant @ ORG_efa4a8df in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T00:43:40.228Z] [BOT] 💾 Marked as posted: NetSuite Implementation Consultant @ ORG_efa4a8df (instance #1)
[2026-01-13T00:43:40.228Z] [BOT] 💾 BEFORE ARCHIVING: 649 jobs in database
[2026-01-13T00:43:40.229Z] [BOT] ✅ No jobs to archive (all 649 jobs within 7-day window)
[2026-01-13T00:43:40.235Z] [BOT] 💾 Saved posted_jobs.json: 649 active jobs
[2026-01-13T00:43:40.235Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:43:40.235Z] [BOT] 📍 [ROUTING] "Launch into Control System Configuration Management" @ Rolls-Royce
[2026-01-13T00:43:40.235Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T00:43:40.431Z] [BOT] ✅ Created forum post: 🏢 Launch into Control System Configuration Management @ Rolls-Royce in #📣・marketing-jobs
  ✅ Industry: Launch into Control System Configuration Management @ Rolls-Royce
[2026-01-13T00:43:42.160Z] [BOT] ✅ Created forum post: 🏢 Launch into Control System Configuration Management @ Rolls-Royce in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T00:43:43.661Z] [BOT] 💾 Marked as posted: Launch into Control System Configuration Management @ Rolls-Royce (instance #1)
[2026-01-13T00:43:43.661Z] [BOT] 💾 BEFORE ARCHIVING: 650 jobs in database
[2026-01-13T00:43:43.661Z] [BOT] ✅ No jobs to archive (all 650 jobs within 7-day window)
[2026-01-13T00:43:43.667Z] [BOT] 💾 Saved posted_jobs.json: 650 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T00:43:46.668Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T00:43:46.668Z] [BOT] ⏭️  Skipping duplicate: JID_9f9fd338 (posted within 7 days)
[2026-01-13T00:43:46.669Z] [BOT] ⏭️  Skipping duplicate: JID_b0b374e1 (posted within 7 days)
[2026-01-13T00:43:46.669Z] [BOT] ⏭️  Skipping duplicate: JID_14eae989 (posted within 7 days)
[2026-01-13T00:43:46.669Z] [BOT] ⏭️  Skipping duplicate: JID_51a4bf73-external_careers-JID_e041c4ce-consultant_r-50086 (posted within 7 days)
[2026-01-13T00:43:46.669Z] [BOT] ⏭️  Skipping duplicate: JID_56b300dd (posted within 7 days)
[2026-01-13T00:43:46.669Z] [BOT] ⏭️  Skipping duplicate: JID_0cafa48d (posted within 7 days)
[2026-01-13T00:43:46.669Z] [BOT] ⏭️  Skipping duplicate: JID_53e922ae (posted within 7 days)
[2026-01-13T00:43:46.669Z] [BOT] ⏭️  Skipping duplicate: JID_50e86a3b-intern_graduate-JID_9a7a9ef4-management_jr6148423 (posted within 7 days)
[2026-01-13T00:43:46.669Z] [BOT] ⏭️  Skipping duplicate: JID_68f3abf5 (posted within 7 days)
[2026-01-13T00:43:46.669Z] [BOT] ⏭️  Skipping duplicate: JID_8ccc27e9 (posted within 7 days)
[2026-01-13T00:43:46.786Z] [BOT] ✅ Loaded pending queue: 2683 total (2663 pending, 20 enriched, 0 posted)
[2026-01-13T00:43:46.948Z] [BOT] ✅ Saved pending queue: 2683 total (2663 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-13T00:43:46.948Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T00:43:46.999Z] [BOT] 📂 Loaded 2808 existing routing entries
[2026-01-13T00:43:47.055Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-13T00:43:47.055Z] [BOT] New entries: 10
   Total entries: 2818
   Timestamp: 2026-01-13T00:43:47.044Z
[2026-01-13T00:43:47.056Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T00:43:47.056Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-13T00:43:47.056Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T00:43:47.056Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
     1. #🌉・san-francisco: 5 posts
[2026-01-13T00:43:47.056Z] [BOT] 2. #🤖・ai-jobs: 4 posts
     3. #💲・sales-jobs: 3 posts
     4. #💻・remote-usa: 2 posts
     5. #📣・marketing-jobs: 2 posts
[2026-01-13T00:43:47.057Z] [BOT] [STATS] Channel stats saved
[2026-01-13T00:43:49.082Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3000) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*