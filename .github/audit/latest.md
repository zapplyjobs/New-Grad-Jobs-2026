# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T07:02:13.263Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T07:01:19.815Z] ========================================
[2026-01-14T07:01:19.817Z] Discord Bot Execution Log
[2026-01-14T07:01:19.817Z] Environment: GitHub Actions
[2026-01-14T07:01:19.817Z] Node Version: v20.19.6
[2026-01-14T07:01:19.817Z] ========================================
[2026-01-14T07:01:19.817Z] Environment Variables Check:
[2026-01-14T07:01:19.817Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T07:01:19.817Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T07:01:19.817Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T07:01:19.818Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T07:01:19.818Z] 
Multi-Channel Configuration:
[2026-01-14T07:01:19.818Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T07:01:19.818Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T07:01:19.818Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T07:01:19.818Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T07:01:19.818Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T07:01:19.818Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T07:01:19.818Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T07:01:19.818Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T07:01:19.818Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T07:01:19.818Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T07:01:19.818Z] 
Data Files Check:
[2026-01-14T07:01:19.819Z] .github/data/new_jobs.json: ✅ Exists (10 items, 111172 bytes)
[2026-01-14T07:01:19.824Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 674377 bytes)
[2026-01-14T07:01:19.824Z] 
========================================
[2026-01-14T07:01:19.824Z] Starting Enhanced Discord Bot...
[2026-01-14T07:01:19.824Z] ========================================
[2026-01-14T07:01:20.292Z] [BOT] ✅ Loaded V2 database: 1275 jobs
[2026-01-14T07:01:21.076Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T07:01:21.076Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T07:01:21.076Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T07:01:21.222Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Microsoft GTM Partnership, Enterprise at anthropic
[2026-01-14T07:01:21.224Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T07:01:21.224Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T07:01:21.224Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T07:01:21.225Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T07:01:21.225Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T07:01:21.230Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-14T07:01:21.230Z] [BOT] 📍 [ROUTING] "Microsoft GTM Partnership, Enterprise" @ anthropic
[2026-01-14T07:01:21.230Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T07:01:21.246Z] [BOT ERROR] (node:2694) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T07:01:21.433Z] [BOT] ✅ Created forum post: 🏢 Microsoft GTM Partnership, Enterprise @ anthropic in #💲・sales-jobs
[2026-01-14T07:01:21.433Z] [BOT] ✅ Industry: Microsoft GTM Partnership, Enterprise @ anthropic
[2026-01-14T07:01:23.480Z] [BOT] ✅ Created forum post: 🏢 Microsoft GTM Partnership, Enterprise @ anthropic in #🌉・san-francisco
[2026-01-14T07:01:23.480Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T07:01:24.980Z] [BOT] 💾 Marked as posted: Microsoft GTM Partnership, Enterprise @ anthropic (instance #1)
[2026-01-14T07:01:24.981Z] [BOT] 💾 BEFORE ARCHIVING: 1276 jobs in database
[2026-01-14T07:01:24.982Z] [BOT] ✅ No jobs to archive (all 1276 jobs within 7-day window)
[2026-01-14T07:01:24.993Z] [BOT] 💾 Saved posted_jobs.json: 1276 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:01:24.993Z] [BOT] 📍 [ROUTING] "Head of Partner Experience & Success" @ anthropic
[2026-01-14T07:01:24.994Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T07:01:25.307Z] [BOT] ✅ Created forum post: 🏢 Head of Partner Experience & Success @ anthropic in #💲・sales-jobs
  ✅ Industry: Head of Partner Experience & Success @ anthropic
[2026-01-14T07:01:27.021Z] [BOT] ✅ Created forum post: 🏢 Head of Partner Experience & Success @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T07:01:28.522Z] [BOT] 💾 Marked as posted: Head of Partner Experience & Success @ anthropic (instance #1)
[2026-01-14T07:01:28.522Z] [BOT] 💾 BEFORE ARCHIVING: 1277 jobs in database
[2026-01-14T07:01:28.523Z] [BOT] ✅ No jobs to archive (all 1277 jobs within 7-day window)
[2026-01-14T07:01:28.532Z] [BOT] 💾 Saved posted_jobs.json: 1277 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:01:28.533Z] [BOT] 📍 [ROUTING] "Senior CES Operations Manager" @ figma
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T07:01:28.720Z] [BOT] ✅ Created forum post: 🏢 Senior CES Operations Manager @ figma in #💲・sales-jobs
  ✅ Industry: Senior CES Operations Manager @ figma
[2026-01-14T07:01:30.536Z] [BOT] ✅ Created forum post: 🏢 Senior CES Operations Manager @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T07:01:32.038Z] [BOT] 💾 Marked as posted: Senior CES Operations Manager @ figma (instance #1)
💾 BEFORE ARCHIVING: 1278 jobs in database
[2026-01-14T07:01:32.039Z] [BOT] ✅ No jobs to archive (all 1278 jobs within 7-day window)
[2026-01-14T07:01:32.049Z] [BOT] 💾 Saved posted_jobs.json: 1278 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:01:32.049Z] [BOT] 📍 [ROUTING] "ATC Salesforce Analyst - Nashville" @ ORG_6cd9e83c
   Category: SALES (matched: "sales")
[2026-01-14T07:01:32.049Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T07:01:32.526Z] [BOT] ✅ Created forum post: 🏢 ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #💲・sales-jobs
[2026-01-14T07:01:32.526Z] [BOT] ✅ Industry: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c
[2026-01-14T07:01:34.385Z] [BOT] ✅ Created forum post: 🏢 ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #🗽・new-york
[2026-01-14T07:01:34.386Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T07:01:35.887Z] [BOT] 💾 Marked as posted: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c (instance #1)
[2026-01-14T07:01:35.887Z] [BOT] 💾 BEFORE ARCHIVING: 1279 jobs in database
[2026-01-14T07:01:35.888Z] [BOT] ✅ No jobs to archive (all 1279 jobs within 7-day window)
[2026-01-14T07:01:35.897Z] [BOT] 💾 Saved posted_jobs.json: 1279 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:01:38.898Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-14T07:01:38.899Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager, Nitro" @ discord
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T07:01:39.202Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager, Nitro @ discord in #📣・marketing-jobs
  ✅ Industry: Senior Product Marketing Manager, Nitro @ discord
[2026-01-14T07:01:41.157Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager, Nitro @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T07:01:42.658Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager, Nitro @ discord (instance #1)
[2026-01-14T07:01:42.659Z] [BOT] 💾 BEFORE ARCHIVING: 1280 jobs in database
[2026-01-14T07:01:42.660Z] [BOT] ✅ No jobs to archive (all 1280 jobs within 7-day window)
[2026-01-14T07:01:42.669Z] [BOT] 💾 Saved posted_jobs.json: 1280 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:01:42.669Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_865b30e2 Renewable Energy Laboratory
   Category: MARKETING (matched: "growth")
[2026-01-14T07:01:42.669Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T07:01:42.840Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #📣・marketing-jobs
  ✅ Industry: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory
[2026-01-14T07:01:44.565Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T07:01:46.066Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory (instance #1)
💾 BEFORE ARCHIVING: 1281 jobs in database
[2026-01-14T07:01:46.068Z] [BOT] ✅ No jobs to archive (all 1281 jobs within 7-day window)
[2026-01-14T07:01:46.078Z] [BOT] 💾 Saved posted_jobs.json: 1281 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:01:49.079Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-14T07:01:49.079Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_655fad25
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T07:01:49.079Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T07:01:49.311Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_655fad25 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_655fad25
[2026-01-14T07:01:51.004Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_655fad25 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-14T07:01:52.504Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_655fad25 (instance #1)
[2026-01-14T07:01:52.504Z] [BOT] 💾 BEFORE ARCHIVING: 1282 jobs in database
[2026-01-14T07:01:52.505Z] [BOT] ✅ No jobs to archive (all 1282 jobs within 7-day window)
[2026-01-14T07:01:52.516Z] [BOT] 💾 Saved posted_jobs.json: 1282 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:01:52.516Z] [BOT] 📍 [ROUTING] "Associate Cloud Data Engineer" @ ORG_6bda74c9 Health
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T07:01:52.675Z] [BOT] ✅ Created forum post: 🏢 Associate Cloud Data Engineer @ ORG_6bda74c9 Health in #🤖・ai-jobs
[2026-01-14T07:01:52.675Z] [BOT] ✅ Industry: Associate Cloud Data Engineer @ ORG_6bda74c9 Health
[2026-01-14T07:01:54.357Z] [BOT] ✅ Created forum post: 🏢 Associate Cloud Data Engineer @ ORG_6bda74c9 Health in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-14T07:01:55.858Z] [BOT] 💾 Marked as posted: Associate Cloud Data Engineer @ ORG_6bda74c9 Health (instance #1)
💾 BEFORE ARCHIVING: 1283 jobs in database
[2026-01-14T07:01:55.859Z] [BOT] ✅ No jobs to archive (all 1283 jobs within 7-day window)
[2026-01-14T07:01:55.868Z] [BOT] 💾 Saved posted_jobs.json: 1283 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:01:58.869Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T07:01:58.870Z] [BOT] 📍 [ROUTING] "Associate Analytics Engineer" @ ORG_b0eaa6e6
   Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T07:01:59.061Z] [BOT] ✅ Created forum post: 🏢 Associate Analytics Engineer @ ORG_b0eaa6e6 in #📈・JID_fb739488
  ✅ Industry: Associate Analytics Engineer @ ORG_b0eaa6e6
[2026-01-14T07:02:00.563Z] [BOT] 💾 Marked as posted: Associate Analytics Engineer @ ORG_b0eaa6e6 (instance #1)
[2026-01-14T07:02:00.563Z] [BOT] 💾 BEFORE ARCHIVING: 1284 jobs in database
[2026-01-14T07:02:00.564Z] [BOT] ✅ No jobs to archive (all 1284 jobs within 7-day window)
[2026-01-14T07:02:00.573Z] [BOT] 💾 Saved posted_jobs.json: 1284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:02:03.573Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-14T07:02:03.574Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend - Platform" @ ORG_9ee5b96f
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:02:03.859Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend - Platform @ ORG_9ee5b96f in #💻・tech-jobs
  ✅ Industry: Software Engineer - Backend - Platform @ ORG_9ee5b96f
[2026-01-14T07:02:05.584Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend - Platform @ ORG_9ee5b96f in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T07:02:07.086Z] [BOT] 💾 Marked as posted: Software Engineer - Backend - Platform @ ORG_9ee5b96f (instance #1)
💾 BEFORE ARCHIVING: 1285 jobs in database
[2026-01-14T07:02:07.087Z] [BOT] ✅ No jobs to archive (all 1285 jobs within 7-day window)
[2026-01-14T07:02:07.097Z] [BOT] 💾 Saved posted_jobs.json: 1285 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:02:10.098Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T07:02:10.098Z] [BOT] ⏭️  Skipping duplicate: JID_55a5b826 (posted within 7 days)
[2026-01-14T07:02:10.099Z] [BOT] ⏭️  Skipping duplicate: JID_6f9d89d8 (posted within 7 days)
[2026-01-14T07:02:10.099Z] [BOT] ⏭️  Skipping duplicate: JID_77c1d578 (posted within 7 days)
⏭️  Skipping duplicate: JID_eb54c2b6 (posted within 7 days)
[2026-01-14T07:02:10.099Z] [BOT] ⏭️  Skipping duplicate: JID_e9645df1 (posted within 7 days)
⏭️  Skipping duplicate: JID_567ab9c9-biorefining_r14058 (posted within 7 days)
[2026-01-14T07:02:10.099Z] [BOT] ⏭️  Skipping duplicate: JID_91286fee-engineer_r-005112-1 (posted within 7 days)
[2026-01-14T07:02:10.099Z] [BOT] ⏭️  Skipping duplicate: JID_57002500 (posted within 7 days)
[2026-01-14T07:02:10.099Z] [BOT] ⏭️  Skipping duplicate: JID_26efe88c-cvs_health_careers-JID_5f9f8a66-engineer_r0781617 (posted within 7 days)
[2026-01-14T07:02:10.099Z] [BOT] ⏭️  Skipping duplicate: JID_fa487e74-naelfy26_r00300075 (posted within 7 days)
[2026-01-14T07:02:10.247Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[2026-01-14T07:02:10.409Z] [BOT] ✅ Saved pending queue: 2734 total (2714 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-14T07:02:10.409Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-14T07:02:10.465Z] [BOT] 📂 Loaded 3395 existing routing entries
[2026-01-14T07:02:10.520Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3405
   Timestamp: 2026-01-14T07:02:10.509Z
[2026-01-14T07:02:10.521Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 19
[2026-01-14T07:02:10.521Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-14T07:02:10.521Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-14T07:02:10.521Z] [BOT] Total posts: 19
   Channels used: 10
   Top channels:
     1. #🌉・san-francisco: 5 posts
[2026-01-14T07:02:10.521Z] [BOT] 2. #💲・sales-jobs: 4 posts
     3. #📣・marketing-jobs: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🗽・new-york: 1 posts
[2026-01-14T07:02:10.522Z] [BOT] [STATS] Channel stats saved
[2026-01-14T07:02:12.541Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2694) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*