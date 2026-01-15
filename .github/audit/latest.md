# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T04:22:39.704Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T04:21:52.504Z] ========================================
[2026-01-15T04:21:52.506Z] Discord Bot Execution Log
[2026-01-15T04:21:52.506Z] Environment: GitHub Actions
[2026-01-15T04:21:52.506Z] Node Version: v20.19.6
[2026-01-15T04:21:52.506Z] ========================================
[2026-01-15T04:21:52.506Z] Environment Variables Check:
[2026-01-15T04:21:52.506Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T04:21:52.506Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T04:21:52.506Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T04:21:52.507Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T04:21:52.507Z] 
Multi-Channel Configuration:
[2026-01-15T04:21:52.507Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T04:21:52.507Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T04:21:52.507Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T04:21:52.507Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T04:21:52.507Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T04:21:52.507Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T04:21:52.507Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T04:21:52.507Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T04:21:52.507Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T04:21:52.507Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T04:21:52.507Z] 
Data Files Check:
[2026-01-15T04:21:52.508Z] .github/data/new_jobs.json: ✅ Exists (10 items, 110530 bytes)
[2026-01-15T04:21:52.515Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 830850 bytes)
[2026-01-15T04:21:52.515Z] 
========================================
[2026-01-15T04:21:52.515Z] Starting Enhanced Discord Bot...
[2026-01-15T04:21:52.515Z] ========================================
[2026-01-15T04:21:53.024Z] [BOT] ✅ Loaded V2 database: 1566 jobs
[2026-01-15T04:21:54.156Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T04:21:54.157Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T04:21:54.157Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T04:21:54.274Z] [BOT] ✅ Loaded pending queue: 2723 total (2703 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer, CI/CD at vercel
[2026-01-15T04:21:54.277Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T04:21:54.277Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T04:21:54.278Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T04:21:54.278Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T04:21:54.278Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T04:21:54.283Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-15T04:21:54.284Z] [BOT] 📍 [ROUTING] "Software Engineer, CI/CD" @ vercel
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T04:21:54.301Z] [BOT ERROR] (node:2829) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T04:21:54.475Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, CI/CD @ vercel in #💻・tech-jobs
[2026-01-15T04:21:54.475Z] [BOT] ✅ Industry: Software Engineer, CI/CD @ vercel
[2026-01-15T04:21:56.164Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, CI/CD @ vercel in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T04:21:57.666Z] [BOT] 💾 Marked as posted: Software Engineer, CI/CD @ vercel (instance #1)
[2026-01-15T04:21:57.666Z] [BOT] 💾 BEFORE ARCHIVING: 1567 jobs in database
[2026-01-15T04:21:57.667Z] [BOT] ✅ No jobs to archive (all 1567 jobs within 7-day window)
[2026-01-15T04:21:57.680Z] [BOT] 💾 Saved posted_jobs.json: 1567 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:21:57.681Z] [BOT] 📍 [ROUTING] "Software Engineer, Deployment Infrastructure" @ vercel
[2026-01-15T04:21:57.681Z] [BOT] Category: TECH (matched: "software")
[2026-01-15T04:21:57.681Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T04:21:58.304Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Deployment Infrastructure @ vercel in #💻・tech-jobs
  ✅ Industry: Software Engineer, Deployment Infrastructure @ vercel
[2026-01-15T04:22:00.077Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Deployment Infrastructure @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T04:22:01.578Z] [BOT] 💾 Marked as posted: Software Engineer, Deployment Infrastructure @ vercel (instance #1)
[2026-01-15T04:22:01.578Z] [BOT] 💾 BEFORE ARCHIVING: 1568 jobs in database
[2026-01-15T04:22:01.579Z] [BOT] ✅ No jobs to archive (all 1568 jobs within 7-day window)
[2026-01-15T04:22:01.588Z] [BOT] 💾 Saved posted_jobs.json: 1568 active jobs
[2026-01-15T04:22:01.588Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T04:22:01.588Z] [BOT] 📍 [ROUTING] "Software Engineer, Financial Infrastructure" @ vercel
   Category: TECH (matched: "software")
[2026-01-15T04:22:01.589Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T04:22:01.862Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Financial Infrastructure @ vercel in #💻・tech-jobs
[2026-01-15T04:22:01.862Z] [BOT] ✅ Industry: Software Engineer, Financial Infrastructure @ vercel
[2026-01-15T04:22:03.575Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Financial Infrastructure @ vercel in #🌉・san-francisco
[2026-01-15T04:22:03.576Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T04:22:05.077Z] [BOT] 💾 Marked as posted: Software Engineer, Financial Infrastructure @ vercel (instance #1)
[2026-01-15T04:22:05.077Z] [BOT] 💾 BEFORE ARCHIVING: 1569 jobs in database
[2026-01-15T04:22:05.078Z] [BOT] ✅ No jobs to archive (all 1569 jobs within 7-day window)
[2026-01-15T04:22:05.089Z] [BOT] 💾 Saved posted_jobs.json: 1569 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:22:05.090Z] [BOT] 📍 [ROUTING] "Software Engineer, Growth" @ vercel
[2026-01-15T04:22:05.090Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T04:22:05.319Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Growth @ vercel in #💻・tech-jobs
[2026-01-15T04:22:05.320Z] [BOT] ✅ Industry: Software Engineer, Growth @ vercel
[2026-01-15T04:22:07.099Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Growth @ vercel in #🌉・san-francisco
[2026-01-15T04:22:07.099Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T04:22:08.600Z] [BOT] 💾 Marked as posted: Software Engineer, Growth @ vercel (instance #1)
[2026-01-15T04:22:08.600Z] [BOT] 💾 BEFORE ARCHIVING: 1570 jobs in database
[2026-01-15T04:22:08.601Z] [BOT] ✅ No jobs to archive (all 1570 jobs within 7-day window)
[2026-01-15T04:22:08.612Z] [BOT] 💾 Saved posted_jobs.json: 1570 active jobs
[2026-01-15T04:22:08.613Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T04:22:08.613Z] [BOT] 📍 [ROUTING] "Software Engineer, Support Platform" @ vercel
[2026-01-15T04:22:08.613Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T04:22:08.813Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Support Platform @ vercel in #💻・tech-jobs
  ✅ Industry: Software Engineer, Support Platform @ vercel
[2026-01-15T04:22:10.546Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Support Platform @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T04:22:12.048Z] [BOT] 💾 Marked as posted: Software Engineer, Support Platform @ vercel (instance #1)
[2026-01-15T04:22:12.048Z] [BOT] 💾 BEFORE ARCHIVING: 1571 jobs in database
[2026-01-15T04:22:12.049Z] [BOT] ✅ No jobs to archive (all 1571 jobs within 7-day window)
[2026-01-15T04:22:12.059Z] [BOT] 💾 Saved posted_jobs.json: 1571 active jobs
[2026-01-15T04:22:12.059Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T04:22:12.060Z] [BOT] 📍 [ROUTING] "Software Engineer - Trust & Safety" @ vercel
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T04:22:12.293Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Trust & Safety @ vercel in #💻・tech-jobs
  ✅ Industry: Software Engineer - Trust & Safety @ vercel
[2026-01-15T04:22:14.300Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Trust & Safety @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T04:22:15.802Z] [BOT] 💾 Marked as posted: Software Engineer - Trust & Safety @ vercel (instance #1)
[2026-01-15T04:22:15.802Z] [BOT] 💾 BEFORE ARCHIVING: 1572 jobs in database
[2026-01-15T04:22:15.803Z] [BOT] ✅ No jobs to archive (all 1572 jobs within 7-day window)
[2026-01-15T04:22:15.812Z] [BOT] 💾 Saved posted_jobs.json: 1572 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:22:15.813Z] [BOT] 📍 [ROUTING] "Technical Support Engineer, Vercel Marketplaces " @ vercel
[2026-01-15T04:22:15.813Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T04:22:16.474Z] [BOT] ✅ Created forum post: 🏢 Technical Support Engineer, Vercel Marketplaces  @ vercel in #💻・tech-jobs
  ✅ Industry: Technical Support Engineer, Vercel Marketplaces  @ vercel
[2026-01-15T04:22:18.196Z] [BOT] ✅ Created forum post: 🏢 Technical Support Engineer, Vercel Marketplaces  @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T04:22:19.697Z] [BOT] 💾 Marked as posted: Technical Support Engineer, Vercel Marketplaces  @ vercel (instance #1)
[2026-01-15T04:22:19.697Z] [BOT] 💾 BEFORE ARCHIVING: 1573 jobs in database
[2026-01-15T04:22:19.698Z] [BOT] ✅ No jobs to archive (all 1573 jobs within 7-day window)
[2026-01-15T04:22:19.708Z] [BOT] 💾 Saved posted_jobs.json: 1573 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:22:19.708Z] [BOT] 📍 [ROUTING] "Manager, Community Programs" @ gohighlevel
[2026-01-15T04:22:19.708Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T04:22:20.037Z] [BOT] ✅ Created forum post: 🏢 Manager, Community Programs @ gohighlevel in #💻・tech-jobs
[2026-01-15T04:22:20.037Z] [BOT] ✅ Industry: Manager, Community Programs @ gohighlevel
[2026-01-15T04:22:21.538Z] [BOT] 💾 Marked as posted: Manager, Community Programs @ gohighlevel (instance #1)
[2026-01-15T04:22:21.538Z] [BOT] 💾 BEFORE ARCHIVING: 1574 jobs in database
[2026-01-15T04:22:21.539Z] [BOT] ✅ No jobs to archive (all 1574 jobs within 7-day window)
[2026-01-15T04:22:21.548Z] [BOT] 💾 Saved posted_jobs.json: 1574 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:22:24.549Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-15T04:22:24.549Z] [BOT] 📍 [ROUTING] "Sr. Director of SOX and Internal Controls" @ vercel
   Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T04:22:24.842Z] [BOT] ✅ Created forum post: 🏢 Sr. Director of SOX and Internal Controls @ vercel in #💲・sales-jobs
[2026-01-15T04:22:24.842Z] [BOT] ✅ Industry: Sr. Director of SOX and Internal Controls @ vercel
[2026-01-15T04:22:26.586Z] [BOT] ✅ Created forum post: 🏢 Sr. Director of SOX and Internal Controls @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T04:22:28.085Z] [BOT] 💾 Marked as posted: Sr. Director of SOX and Internal Controls @ vercel (instance #1)
[2026-01-15T04:22:28.085Z] [BOT] 💾 BEFORE ARCHIVING: 1575 jobs in database
[2026-01-15T04:22:28.086Z] [BOT] ✅ No jobs to archive (all 1575 jobs within 7-day window)
[2026-01-15T04:22:28.098Z] [BOT] 💾 Saved posted_jobs.json: 1575 active jobs
[2026-01-15T04:22:28.098Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T04:22:31.098Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-15T04:22:31.098Z] [BOT] 📍 [ROUTING] "Senior Director, Integrated Marketing" @ gohighlevel
[2026-01-15T04:22:31.098Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T04:22:31.477Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Integrated Marketing @ gohighlevel in #🤖・ai-jobs
[2026-01-15T04:22:31.477Z] [BOT] ✅ Industry: Senior Director, Integrated Marketing @ gohighlevel
[2026-01-15T04:22:32.979Z] [BOT] 💾 Marked as posted: Senior Director, Integrated Marketing @ gohighlevel (instance #1)
[2026-01-15T04:22:32.979Z] [BOT] 💾 BEFORE ARCHIVING: 1576 jobs in database
[2026-01-15T04:22:32.980Z] [BOT] ✅ No jobs to archive (all 1576 jobs within 7-day window)
[2026-01-15T04:22:32.992Z] [BOT] 💾 Saved posted_jobs.json: 1576 active jobs
[2026-01-15T04:22:32.992Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T04:22:35.993Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T04:22:35.994Z] [BOT] ⏭️  Skipping duplicate: JID_a856957e (posted within 7 days)
[2026-01-15T04:22:35.994Z] [BOT] ⏭️  Skipping duplicate: JID_be1974ea (posted within 7 days)
[2026-01-15T04:22:35.994Z] [BOT] ⏭️  Skipping duplicate: JID_40fb2d1a (posted within 7 days)
[2026-01-15T04:22:35.994Z] [BOT] ⏭️  Skipping duplicate: JID_7f179bae (posted within 7 days)
[2026-01-15T04:22:35.994Z] [BOT] ⏭️  Skipping duplicate: JID_42f20984 (posted within 7 days)
[2026-01-15T04:22:35.995Z] [BOT] ⏭️  Skipping duplicate: JID_50e3b0eb (posted within 7 days)
[2026-01-15T04:22:35.995Z] [BOT] ⏭️  Skipping duplicate: JID_3a1c74f3 (posted within 7 days)
[2026-01-15T04:22:35.995Z] [BOT] ⏭️  Skipping duplicate: JID_853a3ab6 (posted within 7 days)
[2026-01-15T04:22:35.995Z] [BOT] ⏭️  Skipping duplicate: JID_0da5a202 (posted within 7 days)
⏭️  Skipping duplicate: JID_11ac40c2 (posted within 7 days)
[2026-01-15T04:22:36.108Z] [BOT] ✅ Loaded pending queue: 2723 total (2703 pending, 20 enriched, 0 posted)
[2026-01-15T04:22:36.273Z] [BOT] ✅ Saved pending queue: 2723 total (2703 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-15T04:22:36.274Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T04:22:36.327Z] [BOT] 📂 Loaded 3745 existing routing entries
[2026-01-15T04:22:36.389Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T04:22:36.389Z] [BOT] Total entries: 3755
   Timestamp: 2026-01-15T04:22:36.373Z
[2026-01-15T04:22:36.389Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T04:22:36.389Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-15T04:22:36.390Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-15T04:22:36.390Z] [BOT] Total posts: 18
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🌉・san-francisco: 7 posts
[2026-01-15T04:22:36.390Z] [BOT] 3. #🗽・new-york: 1 posts
     4. #💲・sales-jobs: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-15T04:22:36.390Z] [BOT] [STATS] Channel stats saved
[2026-01-15T04:22:38.414Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2829) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*