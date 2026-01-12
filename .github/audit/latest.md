# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T22:40:41.522Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T22:39:57.099Z] ========================================
[2026-01-12T22:39:57.101Z] Discord Bot Execution Log
[2026-01-12T22:39:57.101Z] Environment: GitHub Actions
[2026-01-12T22:39:57.101Z] Node Version: v20.19.6
[2026-01-12T22:39:57.101Z] ========================================
[2026-01-12T22:39:57.101Z] Environment Variables Check:
[2026-01-12T22:39:57.101Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T22:39:57.102Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T22:39:57.102Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T22:39:57.102Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T22:39:57.102Z] 
Multi-Channel Configuration:
[2026-01-12T22:39:57.102Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T22:39:57.102Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T22:39:57.102Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T22:39:57.102Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T22:39:57.102Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T22:39:57.102Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T22:39:57.102Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T22:39:57.103Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T22:39:57.103Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T22:39:57.103Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T22:39:57.103Z] 
Data Files Check:
[2026-01-12T22:39:57.104Z] .github/data/new_jobs.json: ✅ Exists (10 items, 140993 bytes)
[2026-01-12T22:39:57.107Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 310549 bytes)
[2026-01-12T22:39:57.107Z] 
========================================
[2026-01-12T22:39:57.107Z] Starting Enhanced Discord Bot...
[2026-01-12T22:39:57.107Z] ========================================
[2026-01-12T22:39:57.635Z] [BOT] ✅ Loaded V2 database: 576 jobs
[2026-01-12T22:39:58.716Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T22:39:58.717Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T22:39:58.717Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T22:39:58.833Z] [BOT] ✅ Loaded pending queue: 2656 total (2636 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Supervisor, Customer Success Team (Onsite - Relocation Assistance Available) at coinbase
[2026-01-12T22:39:58.835Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T22:39:58.835Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T22:39:58.836Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T22:39:58.837Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-12T22:39:58.838Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T22:39:58.842Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-12T22:39:58.843Z] [BOT] 📍 [ROUTING] "Supervisor, Customer Success Team (Onsite - Relocation Assistance Available)" @ coinbase
[2026-01-12T22:39:58.843Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T22:39:58.848Z] [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T22:39:59.025Z] [BOT] ✅ Created forum post: 🏢 Supervisor, Customer Success Team (Onsite - Relocation Assistance Available) @ coinbase in #🤖・ai-jobs
[2026-01-12T22:39:59.026Z] [BOT] ✅ Industry: Supervisor, Customer Success Team (Onsite - Relocation Assistance Available) @ coinbase
[2026-01-12T22:40:00.528Z] [BOT] 💾 Marked as posted: Supervisor, Customer Success Team (Onsite - Relocation Assistance Available) @ coinbase (instance #1)
[2026-01-12T22:40:00.529Z] [BOT] 💾 BEFORE ARCHIVING: 577 jobs in database
[2026-01-12T22:40:00.529Z] [BOT] ✅ No jobs to archive (all 577 jobs within 7-day window)
[2026-01-12T22:40:00.538Z] [BOT] 💾 Saved posted_jobs.json: 577 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:40:00.539Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_44ebd2cb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T22:40:00.719Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_44ebd2cb in #🤖・ai-jobs
  ✅ Industry: Junior Software Engineer @ ORG_44ebd2cb
[2026-01-12T22:40:02.475Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_44ebd2cb in #🌉・san-francisco
[2026-01-12T22:40:02.475Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T22:40:03.976Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_44ebd2cb (instance #1)
[2026-01-12T22:40:03.976Z] [BOT] 💾 BEFORE ARCHIVING: 578 jobs in database
[2026-01-12T22:40:03.977Z] [BOT] ✅ No jobs to archive (all 578 jobs within 7-day window)
[2026-01-12T22:40:03.981Z] [BOT] 💾 Saved posted_jobs.json: 578 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:40:03.981Z] [BOT] 📍 [ROUTING] "Software Engineer Intern" @ coinbase
[2026-01-12T22:40:03.981Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T22:40:04.712Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Intern @ coinbase in #🤖・ai-jobs
[2026-01-12T22:40:04.713Z] [BOT] ✅ Industry: Software Engineer Intern @ coinbase
[2026-01-12T22:40:06.521Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Intern @ coinbase in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:40:08.022Z] [BOT] 💾 Marked as posted: Software Engineer Intern @ coinbase (instance #1)
[2026-01-12T22:40:08.022Z] [BOT] 💾 BEFORE ARCHIVING: 579 jobs in database
[2026-01-12T22:40:08.023Z] [BOT] ✅ No jobs to archive (all 579 jobs within 7-day window)
[2026-01-12T22:40:08.029Z] [BOT] 💾 Saved posted_jobs.json: 579 active jobs
[2026-01-12T22:40:08.029Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:40:08.030Z] [BOT] 📍 [ROUTING] "Manager of Solutions Architecture, Applied AI (Industries)" @ anthropic
[2026-01-12T22:40:08.030Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T22:40:08.234Z] [BOT] ✅ Created forum post: 🏢 Manager of Solutions Architecture, Applied AI (Industries) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Manager of Solutions Architecture, Applied AI (Industries) @ anthropic
[2026-01-12T22:40:09.925Z] [BOT] ✅ Created forum post: 🏢 Manager of Solutions Architecture, Applied AI (Industries) @ anthropic in #🌉・san-francisco
[2026-01-12T22:40:09.926Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T22:40:11.426Z] [BOT] 💾 Marked as posted: Manager of Solutions Architecture, Applied AI (Industries) @ anthropic (instance #1)
[2026-01-12T22:40:11.426Z] [BOT] 💾 BEFORE ARCHIVING: 580 jobs in database
[2026-01-12T22:40:11.427Z] [BOT] ✅ No jobs to archive (all 580 jobs within 7-day window)
[2026-01-12T22:40:11.432Z] [BOT] 💾 Saved posted_jobs.json: 580 active jobs
[2026-01-12T22:40:11.432Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:40:14.433Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-12T22:40:14.433Z] [BOT] 📍 [ROUTING] "Account Executive, Enterprise" @ figma
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T22:40:14.727Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Enterprise @ figma in #💲・sales-jobs
[2026-01-12T22:40:14.727Z] [BOT] ✅ Industry: Account Executive, Enterprise @ figma
[2026-01-12T22:40:16.492Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Enterprise @ figma in #🌉・san-francisco
[2026-01-12T22:40:16.492Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T22:40:17.994Z] [BOT] 💾 Marked as posted: Account Executive, Enterprise @ figma (instance #1)
[2026-01-12T22:40:17.994Z] [BOT] 💾 BEFORE ARCHIVING: 581 jobs in database
[2026-01-12T22:40:17.995Z] [BOT] ✅ No jobs to archive (all 581 jobs within 7-day window)
[2026-01-12T22:40:17.999Z] [BOT] 💾 Saved posted_jobs.json: 581 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:40:18.000Z] [BOT] 📍 [ROUTING] "Head of Infrastructure Accounting " @ anthropic
[2026-01-12T22:40:18.000Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T22:40:18.325Z] [BOT] ✅ Created forum post: 🏢 Head of Infrastructure Accounting  @ anthropic in #💲・sales-jobs
  ✅ Industry: Head of Infrastructure Accounting  @ anthropic
[2026-01-12T22:40:20.068Z] [BOT] ✅ Created forum post: 🏢 Head of Infrastructure Accounting  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:40:21.570Z] [BOT] 💾 Marked as posted: Head of Infrastructure Accounting  @ anthropic (instance #1)
[2026-01-12T22:40:21.570Z] [BOT] 💾 BEFORE ARCHIVING: 582 jobs in database
[2026-01-12T22:40:21.570Z] [BOT] ✅ No jobs to archive (all 582 jobs within 7-day window)
[2026-01-12T22:40:21.576Z] [BOT] 💾 Saved posted_jobs.json: 582 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:40:21.576Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Phoenix - Corporate)" @ verkada
[2026-01-12T22:40:21.576Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T22:40:23.215Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Phoenix - Corporate) @ verkada in #💲・sales-jobs
[2026-01-12T22:40:23.215Z] [BOT] ✅ Industry: Enterprise Account Executive (Phoenix - Corporate) @ verkada
[2026-01-12T22:40:24.717Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Phoenix - Corporate) @ verkada (instance #1)
[2026-01-12T22:40:24.718Z] [BOT] 💾 BEFORE ARCHIVING: 583 jobs in database
[2026-01-12T22:40:24.718Z] [BOT] ✅ No jobs to archive (all 583 jobs within 7-day window)
[2026-01-12T22:40:24.723Z] [BOT] 💾 Saved posted_jobs.json: 583 active jobs
[2026-01-12T22:40:24.723Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:40:27.724Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-12T22:40:27.724Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_61859c65 Learning
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T22:40:28.079Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_61859c65 Learning in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_61859c65 Learning
[2026-01-12T22:40:29.939Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_61859c65 Learning in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-12T22:40:31.440Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_61859c65 Learning (instance #1)
[2026-01-12T22:40:31.440Z] [BOT] 💾 BEFORE ARCHIVING: 584 jobs in database
[2026-01-12T22:40:31.440Z] [BOT] ✅ No jobs to archive (all 584 jobs within 7-day window)
[2026-01-12T22:40:31.446Z] [BOT] 💾 Saved posted_jobs.json: 584 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:40:31.446Z] [BOT] 📍 [ROUTING] "Motion Design Animator, Thrive Intern" @ duolingo
[2026-01-12T22:40:31.446Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T22:40:31.772Z] [BOT] ✅ Created forum post: 🏢 Motion Design Animator, Thrive Intern @ duolingo in #💻・tech-jobs
[2026-01-12T22:40:31.773Z] [BOT] ✅ Industry: Motion Design Animator, Thrive Intern @ duolingo
[2026-01-12T22:40:33.275Z] [BOT] 💾 Marked as posted: Motion Design Animator, Thrive Intern @ duolingo (instance #1)
[2026-01-12T22:40:33.275Z] [BOT] 💾 BEFORE ARCHIVING: 585 jobs in database
[2026-01-12T22:40:33.276Z] [BOT] ✅ No jobs to archive (all 585 jobs within 7-day window)
[2026-01-12T22:40:33.281Z] [BOT] 💾 Saved posted_jobs.json: 585 active jobs
[2026-01-12T22:40:33.281Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:40:33.281Z] [BOT] 📍 [ROUTING] "Illustrator, Thrive Intern" @ duolingo
   Category: TECH (default)
[2026-01-12T22:40:33.281Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T22:40:33.478Z] [BOT] ✅ Created forum post: 🏢 Illustrator, Thrive Intern @ duolingo in #💻・tech-jobs
  ✅ Industry: Illustrator, Thrive Intern @ duolingo
[2026-01-12T22:40:34.979Z] [BOT] 💾 Marked as posted: Illustrator, Thrive Intern @ duolingo (instance #1)
[2026-01-12T22:40:34.979Z] [BOT] 💾 BEFORE ARCHIVING: 586 jobs in database
[2026-01-12T22:40:34.980Z] [BOT] ✅ No jobs to archive (all 586 jobs within 7-day window)
[2026-01-12T22:40:34.985Z] [BOT] 💾 Saved posted_jobs.json: 586 active jobs
[2026-01-12T22:40:34.985Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:40:37.985Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T22:40:37.986Z] [BOT] ⏭️  Skipping duplicate: JID_b4d61227 (posted within 7 days)
[2026-01-12T22:40:37.986Z] [BOT] ⏭️  Skipping duplicate: JID_ed49cd2c (posted within 7 days)
[2026-01-12T22:40:37.986Z] [BOT] ⏭️  Skipping duplicate: JID_b0bb2e8b (posted within 7 days)
[2026-01-12T22:40:37.986Z] [BOT] ⏭️  Skipping duplicate: JID_4633d184 (posted within 7 days)
⏭️  Skipping duplicate: JID_fd362e00 (posted within 7 days)
⏭️  Skipping duplicate: JID_1fba0dfd (posted within 7 days)
[2026-01-12T22:40:37.986Z] [BOT] ⏭️  Skipping duplicate: JID_a45c2b21 (posted within 7 days)
[2026-01-12T22:40:37.987Z] [BOT] ⏭️  Skipping duplicate: JID_cb60aed1 (posted within 7 days)
⏭️  Skipping duplicate: JID_97e87354 (posted within 7 days)
⏭️  Skipping duplicate: JID_58b7e124 (posted within 7 days)
[2026-01-12T22:40:38.104Z] [BOT] ✅ Loaded pending queue: 2656 total (2636 pending, 20 enriched, 0 posted)
[2026-01-12T22:40:38.275Z] [BOT] ✅ Saved pending queue: 2656 total (2636 pending, 10 enriched, 10 posted)
[2026-01-12T22:40:38.275Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T22:40:38.326Z] [BOT] 📂 Loaded 2740 existing routing entries
[2026-01-12T22:40:38.381Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2750
   Timestamp: 2026-01-12T22:40:38.370Z
[2026-01-12T22:40:38.382Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T22:40:38.382Z] [BOT] Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-12T22:40:38.382Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T22:40:38.382Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 5 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-12T22:40:38.382Z] [BOT] 3. #💲・sales-jobs: 3 posts
     4. #💻・tech-jobs: 3 posts
     5. #🦢・los-angeles: 1 posts
[2026-01-12T22:40:38.383Z] [BOT] [STATS] Channel stats saved
[2026-01-12T22:40:40.408Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*