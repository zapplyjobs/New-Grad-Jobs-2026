# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T19:26:35.216Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T19:25:44.740Z] ========================================
[2026-01-13T19:25:44.742Z] Discord Bot Execution Log
[2026-01-13T19:25:44.742Z] Environment: GitHub Actions
[2026-01-13T19:25:44.742Z] Node Version: v20.19.6
[2026-01-13T19:25:44.742Z] ========================================
[2026-01-13T19:25:44.742Z] Environment Variables Check:
[2026-01-13T19:25:44.742Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T19:25:44.743Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T19:25:44.743Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T19:25:44.743Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T19:25:44.743Z] 
Multi-Channel Configuration:
[2026-01-13T19:25:44.743Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T19:25:44.743Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T19:25:44.743Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T19:25:44.743Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T19:25:44.743Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T19:25:44.743Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T19:25:44.743Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T19:25:44.743Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T19:25:44.744Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T19:25:44.744Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T19:25:44.744Z] 
Data Files Check:
[2026-01-13T19:25:44.745Z] .github/data/new_jobs.json: ✅ Exists (10 items, 148182 bytes)
[2026-01-13T19:25:44.748Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 480812 bytes)
[2026-01-13T19:25:44.748Z] 
========================================
[2026-01-13T19:25:44.748Z] Starting Enhanced Discord Bot...
[2026-01-13T19:25:44.748Z] ========================================
[2026-01-13T19:25:45.280Z] [BOT] ✅ Loaded V2 database: 911 jobs
[2026-01-13T19:25:45.973Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T19:25:45.974Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T19:25:45.974Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T19:25:46.082Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Staff Software Engineer, Mobile Architecture at discord
[2026-01-13T19:25:46.083Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T19:25:46.084Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T19:25:46.084Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T19:25:46.085Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-13T19:25:46.085Z] [BOT] (4 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Android Software Engineer, Ad Formats @ reddit: chicago, san francisco, new york
   - iOS Software Engineer, Ad Formats @ reddit: chicago, new york
   - Senior Android Engineer, Apps Platform (Performance) @ reddit: chicago, new york
[2026-01-13T19:25:46.085Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T19:25:46.089Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-13T19:25:46.090Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Mobile Architecture" @ discord
[2026-01-13T19:25:46.090Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:25:46.095Z] [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T19:25:46.366Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Mobile Architecture @ discord in #💻・tech-jobs
[2026-01-13T19:25:46.366Z] [BOT] ✅ Industry: Staff Software Engineer, Mobile Architecture @ discord
[2026-01-13T19:25:48.057Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Mobile Architecture @ discord in #🌉・san-francisco
[2026-01-13T19:25:48.057Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T19:25:49.558Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Mobile Architecture @ discord (instance #1)
[2026-01-13T19:25:49.558Z] [BOT] 💾 BEFORE ARCHIVING: 912 jobs in database
[2026-01-13T19:25:49.559Z] [BOT] ✅ No jobs to archive (all 912 jobs within 7-day window)
[2026-01-13T19:25:49.569Z] [BOT] 💾 Saved posted_jobs.json: 912 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:25:49.569Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Mobile Architecture" @ discord
   Category: TECH (matched: "software")
[2026-01-13T19:25:49.569Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:25:49.768Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Mobile Architecture @ discord in #💻・tech-jobs
[2026-01-13T19:25:49.768Z] [BOT] ✅ Industry: Senior Software Engineer, Mobile Architecture @ discord
[2026-01-13T19:25:51.593Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Mobile Architecture @ discord in #🌉・san-francisco
[2026-01-13T19:25:51.593Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T19:25:53.094Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Mobile Architecture @ discord (instance #1)
[2026-01-13T19:25:53.095Z] [BOT] 💾 BEFORE ARCHIVING: 913 jobs in database
[2026-01-13T19:25:53.095Z] [BOT] ✅ No jobs to archive (all 913 jobs within 7-day window)
[2026-01-13T19:25:53.102Z] [BOT] 💾 Saved posted_jobs.json: 913 active jobs
[2026-01-13T19:25:53.102Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:25:53.102Z] [BOT] 📍 [ROUTING] "Director of Engineering, Developer Ecosystem" @ discord
   Category: TECH (matched: "software")
[2026-01-13T19:25:53.102Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:25:53.343Z] [BOT] ✅ Created forum post: 🏢 Director of Engineering, Developer Ecosystem @ discord in #💻・tech-jobs
[2026-01-13T19:25:53.343Z] [BOT] ✅ Industry: Director of Engineering, Developer Ecosystem @ discord
[2026-01-13T19:25:55.318Z] [BOT] ✅ Created forum post: 🏢 Director of Engineering, Developer Ecosystem @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:25:56.819Z] [BOT] 💾 Marked as posted: Director of Engineering, Developer Ecosystem @ discord (instance #1)
[2026-01-13T19:25:56.819Z] [BOT] 💾 BEFORE ARCHIVING: 914 jobs in database
[2026-01-13T19:25:56.820Z] [BOT] ✅ No jobs to archive (all 914 jobs within 7-day window)
[2026-01-13T19:25:56.827Z] [BOT] 💾 Saved posted_jobs.json: 914 active jobs
[2026-01-13T19:25:56.827Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:25:56.828Z] [BOT] 📍 [ROUTING] "Software Engineer, Mobile" @ discord
[2026-01-13T19:25:56.828Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:25:57.013Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Mobile @ discord in #💻・tech-jobs
  ✅ Industry: Software Engineer, Mobile @ discord
[2026-01-13T19:25:58.677Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Mobile @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:26:00.177Z] [BOT] 💾 Marked as posted: Software Engineer, Mobile @ discord (instance #1)
[2026-01-13T19:26:00.178Z] [BOT] 💾 BEFORE ARCHIVING: 915 jobs in database
[2026-01-13T19:26:00.178Z] [BOT] ✅ No jobs to archive (all 915 jobs within 7-day window)
[2026-01-13T19:26:00.186Z] [BOT] 💾 Saved posted_jobs.json: 915 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:26:00.186Z] [BOT] 📍 [ROUTING] "Senior Software Engineer- Persistence Infrastructure" @ discord
[2026-01-13T19:26:00.186Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:26:00.354Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer- Persistence Infrastructure @ discord in #💻・tech-jobs
[2026-01-13T19:26:00.354Z] [BOT] ✅ Industry: Senior Software Engineer- Persistence Infrastructure @ discord
[2026-01-13T19:26:02.022Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer- Persistence Infrastructure @ discord in #🌉・san-francisco
[2026-01-13T19:26:02.023Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T19:26:03.523Z] [BOT] 💾 Marked as posted: Senior Software Engineer- Persistence Infrastructure @ discord (instance #1)
[2026-01-13T19:26:03.524Z] [BOT] 💾 BEFORE ARCHIVING: 916 jobs in database
[2026-01-13T19:26:03.524Z] [BOT] ✅ No jobs to archive (all 916 jobs within 7-day window)
[2026-01-13T19:26:03.531Z] [BOT] 💾 Saved posted_jobs.json: 916 active jobs
[2026-01-13T19:26:03.532Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:26:03.532Z] [BOT] 📍 [ROUTING] "Data Center Strategic Sourcing Lead" @ anthropic
   Category: TECH (matched: "data")
[2026-01-13T19:26:03.532Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:26:03.733Z] [BOT] ✅ Created forum post: 🏢 Data Center Strategic Sourcing Lead @ anthropic in #💻・tech-jobs
[2026-01-13T19:26:03.733Z] [BOT] ✅ Industry: Data Center Strategic Sourcing Lead @ anthropic
[2026-01-13T19:26:07.577Z] [BOT] ✅ Created forum post: 🏢 Data Center Strategic Sourcing Lead @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:26:09.078Z] [BOT] 💾 Marked as posted: Data Center Strategic Sourcing Lead @ anthropic (instance #1)
[2026-01-13T19:26:09.078Z] [BOT] 💾 BEFORE ARCHIVING: 917 jobs in database
[2026-01-13T19:26:09.079Z] [BOT] ✅ No jobs to archive (all 917 jobs within 7-day window)
[2026-01-13T19:26:09.086Z] [BOT] 💾 Saved posted_jobs.json: 917 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:26:09.086Z] [BOT] 📍 [ROUTING] "Data Center Facility Operations Lead" @ anthropic
[2026-01-13T19:26:09.087Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:26:09.291Z] [BOT] ✅ Created forum post: 🏢 Data Center Facility Operations Lead @ anthropic in #💻・tech-jobs
  ✅ Industry: Data Center Facility Operations Lead @ anthropic
[2026-01-13T19:26:10.980Z] [BOT] ✅ Created forum post: 🏢 Data Center Facility Operations Lead @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:26:12.480Z] [BOT] 💾 Marked as posted: Data Center Facility Operations Lead @ anthropic (instance #1)
[2026-01-13T19:26:12.481Z] [BOT] 💾 BEFORE ARCHIVING: 918 jobs in database
[2026-01-13T19:26:12.481Z] [BOT] ✅ No jobs to archive (all 918 jobs within 7-day window)
[2026-01-13T19:26:12.489Z] [BOT] 💾 Saved posted_jobs.json: 918 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:26:15.490Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-13T19:26:15.490Z] [BOT] 📍 [ROUTING] "Manager, IT Support & Operations" @ anthropic
[2026-01-13T19:26:15.490Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T19:26:15.810Z] [BOT] ✅ Created forum post: 🏢 Manager, IT Support & Operations @ anthropic in #💲・sales-jobs
  ✅ Industry: Manager, IT Support & Operations @ anthropic
[2026-01-13T19:26:17.581Z] [BOT] ✅ Created forum post: 🏢 Manager, IT Support & Operations @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:26:19.082Z] [BOT] 💾 Marked as posted: Manager, IT Support & Operations @ anthropic (instance #1)
[2026-01-13T19:26:19.082Z] [BOT] 💾 BEFORE ARCHIVING: 919 jobs in database
[2026-01-13T19:26:19.083Z] [BOT] ✅ No jobs to archive (all 919 jobs within 7-day window)
[2026-01-13T19:26:19.097Z] [BOT] 💾 Saved posted_jobs.json: 919 active jobs
✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Microsoft GTM Partnerships Manager, Digital Natives & Startups" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T19:26:19.334Z] [BOT] ✅ Created forum post: 🏢 Microsoft GTM Partnerships Manager, Digital Natives & Startups @ anthropic in #💲・sales-jobs
[2026-01-13T19:26:19.334Z] [BOT] ✅ Industry: Microsoft GTM Partnerships Manager, Digital Natives & Startups @ anthropic
[2026-01-13T19:26:21.038Z] [BOT] ✅ Created forum post: 🏢 Microsoft GTM Partnerships Manager, Digital Natives & Startups @ anthropic in #🌉・san-francisco
[2026-01-13T19:26:21.038Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T19:26:22.539Z] [BOT] 💾 Marked as posted: Microsoft GTM Partnerships Manager, Digital Natives & Startups @ anthropic (instance #1)
[2026-01-13T19:26:22.539Z] [BOT] 💾 BEFORE ARCHIVING: 920 jobs in database
[2026-01-13T19:26:22.540Z] [BOT] ✅ No jobs to archive (all 920 jobs within 7-day window)
[2026-01-13T19:26:22.548Z] [BOT] 💾 Saved posted_jobs.json: 920 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:26:25.548Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-13T19:26:25.549Z] [BOT] 📍 [ROUTING] "Google Partnerships Manager, Digital Native & Startups" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T19:26:25.549Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-13T19:26:25.902Z] [BOT] ✅ Created forum post: 🏢 Google Partnerships Manager, Digital Native & Startups @ anthropic in #🤖・ai-jobs
  ✅ Industry: Google Partnerships Manager, Digital Native & Startups @ anthropic
[2026-01-13T19:26:27.691Z] [BOT] ✅ Created forum post: 🏢 Google Partnerships Manager, Digital Native & Startups @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:26:29.191Z] [BOT] 💾 Marked as posted: Google Partnerships Manager, Digital Native & Startups @ anthropic (instance #1)
[2026-01-13T19:26:29.192Z] [BOT] 💾 BEFORE ARCHIVING: 921 jobs in database
[2026-01-13T19:26:29.192Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2026-01-13T19:26:29.200Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:26:32.200Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T19:26:32.201Z] [BOT] ⏭️  Skipping duplicate: JID_c9122c3a (posted within 7 days)
[2026-01-13T19:26:32.201Z] [BOT] ⏭️  Skipping duplicate: JID_b719c3d5 (posted within 7 days)
[2026-01-13T19:26:32.201Z] [BOT] ⏭️  Skipping duplicate: JID_1be29ec0 (posted within 7 days)
[2026-01-13T19:26:32.201Z] [BOT] ⏭️  Skipping duplicate: JID_041d5ff5 (posted within 7 days)
[2026-01-13T19:26:32.201Z] [BOT] ⏭️  Skipping duplicate: JID_3441115b (posted within 7 days)
[2026-01-13T19:26:32.201Z] [BOT] ⏭️  Skipping duplicate: JID_bd922941 (posted within 7 days)
[2026-01-13T19:26:32.201Z] [BOT] ⏭️  Skipping duplicate: JID_64549b88 (posted within 7 days)
[2026-01-13T19:26:32.202Z] [BOT] ⏭️  Skipping duplicate: JID_438870e0 (posted within 7 days)
[2026-01-13T19:26:32.202Z] [BOT] ⏭️  Skipping duplicate: JID_623a891c (posted within 7 days)
[2026-01-13T19:26:32.202Z] [BOT] ⏭️  Skipping duplicate: JID_a100ab7f (posted within 7 days)
[2026-01-13T19:26:32.317Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[2026-01-13T19:26:32.483Z] [BOT] ✅ Saved pending queue: 2726 total (2706 pending, 10 enriched, 10 posted)
[2026-01-13T19:26:32.483Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T19:26:32.536Z] [BOT] 📂 Loaded 3065 existing routing entries
[2026-01-13T19:26:32.593Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T19:26:32.594Z] [BOT] Total entries: 3075
   Timestamp: 2026-01-13T19:26:32.581Z
[2026-01-13T19:26:32.594Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T19:26:32.594Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-13T19:26:32.594Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 4
   Top channels:
     1. #🌉・san-francisco: 10 posts
     2. #💻・tech-jobs: 7 posts
     3. #💲・sales-jobs: 2 posts
[2026-01-13T19:26:32.595Z] [BOT] 4. #🤖・ai-jobs: 1 posts
[2026-01-13T19:26:32.595Z] [BOT] [STATS] Channel stats saved
[2026-01-13T19:26:34.621Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*