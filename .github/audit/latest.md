# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T21:42:53.341Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T21:41:54.562Z] ========================================
[2026-01-14T21:41:54.563Z] Discord Bot Execution Log
[2026-01-14T21:41:54.564Z] Environment: GitHub Actions
[2026-01-14T21:41:54.564Z] Node Version: v20.19.6
[2026-01-14T21:41:54.564Z] ========================================
[2026-01-14T21:41:54.564Z] Environment Variables Check:
[2026-01-14T21:41:54.564Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T21:41:54.564Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T21:41:54.564Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T21:41:54.564Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T21:41:54.564Z] 
Multi-Channel Configuration:
[2026-01-14T21:41:54.564Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T21:41:54.564Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T21:41:54.564Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T21:41:54.564Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T21:41:54.564Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T21:41:54.564Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T21:41:54.564Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T21:41:54.564Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T21:41:54.564Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T21:41:54.564Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T21:41:54.565Z] 
Data Files Check:
[2026-01-14T21:41:54.566Z] .github/data/new_jobs.json: ✅ Exists (10 items, 156095 bytes)
[2026-01-14T21:41:54.571Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 765978 bytes)
[2026-01-14T21:41:54.571Z] 
========================================
[2026-01-14T21:41:54.571Z] Starting Enhanced Discord Bot...
[2026-01-14T21:41:54.572Z] ========================================
[2026-01-14T21:41:55.109Z] [BOT] ✅ Loaded V2 database: 1438 jobs
[2026-01-14T21:41:55.674Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T21:41:55.675Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T21:41:55.675Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T21:41:55.787Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[2026-01-14T21:41:55.787Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer, Beneficial Deployments  at anthropic
[2026-01-14T21:41:55.792Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T21:41:55.792Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T21:41:55.793Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T21:41:55.793Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T21:41:55.794Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T21:41:55.798Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-14T21:41:55.799Z] [BOT] 📍 [ROUTING] "Software Engineer, Beneficial Deployments " @ anthropic
[2026-01-14T21:41:55.799Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T21:41:55.799Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T21:41:55.817Z] [BOT ERROR] (node:2845) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T21:41:56.008Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Beneficial Deployments  @ anthropic in #🤖・ai-jobs
[2026-01-14T21:41:56.008Z] [BOT] ✅ Industry: Software Engineer, Beneficial Deployments  @ anthropic
[2026-01-14T21:41:57.727Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Beneficial Deployments  @ anthropic in #🌉・san-francisco
[2026-01-14T21:41:57.728Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T21:41:59.229Z] [BOT] 💾 Marked as posted: Software Engineer, Beneficial Deployments  @ anthropic (instance #1)
[2026-01-14T21:41:59.229Z] [BOT] 💾 BEFORE ARCHIVING: 1439 jobs in database
[2026-01-14T21:41:59.231Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T21:41:59.236Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-14T21:41:59.236Z] [BOT] ✅ Archiving complete: 1 archived, 1438 active
[2026-01-14T21:41:59.253Z] [BOT] 💾 Saved posted_jobs.json: 1438 active jobs
[2026-01-14T21:41:59.253Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T21:41:59.254Z] [BOT] 📍 [ROUTING] "Software Engineer, Claude Code" @ anthropic
[2026-01-14T21:41:59.254Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T21:41:59.254Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T21:41:59.445Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-14T21:41:59.445Z] [BOT] ✅ Industry: Software Engineer, Claude Code @ anthropic
[2026-01-14T21:42:01.254Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Claude Code @ anthropic in #🌉・san-francisco
[2026-01-14T21:42:01.254Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T21:42:02.755Z] [BOT] 💾 Marked as posted: Software Engineer, Claude Code @ anthropic (instance #1)
[2026-01-14T21:42:02.755Z] [BOT] 💾 BEFORE ARCHIVING: 1439 jobs in database
[2026-01-14T21:42:02.756Z] [BOT] ✅ No jobs to archive (all 1439 jobs within 7-day window)
[2026-01-14T21:42:02.765Z] [BOT] 💾 Saved posted_jobs.json: 1439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:42:05.765Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-14T21:42:05.766Z] [BOT] 📍 [ROUTING] "Software Engineer, Desktop" @ anthropic
[2026-01-14T21:42:05.766Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T21:42:05.982Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Desktop @ anthropic in #💻・tech-jobs
[2026-01-14T21:42:05.982Z] [BOT] ✅ Industry: Software Engineer, Desktop @ anthropic
[2026-01-14T21:42:09.110Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Desktop @ anthropic in #🌉・san-francisco
[2026-01-14T21:42:09.110Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T21:42:10.611Z] [BOT] 💾 Marked as posted: Software Engineer, Desktop @ anthropic (instance #1)
[2026-01-14T21:42:10.611Z] [BOT] 💾 BEFORE ARCHIVING: 1440 jobs in database
[2026-01-14T21:42:10.612Z] [BOT] ✅ No jobs to archive (all 1440 jobs within 7-day window)
[2026-01-14T21:42:10.623Z] [BOT] 💾 Saved posted_jobs.json: 1440 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:42:10.624Z] [BOT] 📍 [ROUTING] "Software Engineer, Public Sector" @ anthropic
   Category: TECH (matched: "software")
[2026-01-14T21:42:10.624Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T21:42:10.938Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Public Sector @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Public Sector @ anthropic
[2026-01-14T21:42:12.617Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Public Sector @ anthropic in #🌉・san-francisco
[2026-01-14T21:42:12.619Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T21:42:14.119Z] [BOT] 💾 Marked as posted: Software Engineer, Public Sector @ anthropic (instance #1)
[2026-01-14T21:42:14.119Z] [BOT] 💾 BEFORE ARCHIVING: 1441 jobs in database
[2026-01-14T21:42:14.120Z] [BOT] ✅ No jobs to archive (all 1441 jobs within 7-day window)
[2026-01-14T21:42:14.132Z] [BOT] 💾 Saved posted_jobs.json: 1441 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:42:14.132Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Claude Developer Platform (Full Stack)" @ anthropic
[2026-01-14T21:42:14.133Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T21:42:14.384Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Claude Developer Platform (Full Stack) @ anthropic in #💻・tech-jobs
  ✅ Industry: Staff Software Engineer, Claude Developer Platform (Full Stack) @ anthropic
[2026-01-14T21:42:16.100Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Claude Developer Platform (Full Stack) @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T21:42:17.602Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Claude Developer Platform (Full Stack) @ anthropic (instance #1)
[2026-01-14T21:42:17.602Z] [BOT] 💾 BEFORE ARCHIVING: 1442 jobs in database
[2026-01-14T21:42:17.603Z] [BOT] ✅ No jobs to archive (all 1442 jobs within 7-day window)
[2026-01-14T21:42:17.613Z] [BOT] 💾 Saved posted_jobs.json: 1442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:42:17.613Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Security" @ anthropic
[2026-01-14T21:42:17.613Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-14T21:42:17.905Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Security @ anthropic in #💻・tech-jobs
  ✅ Industry: Technical Program Manager, Security @ anthropic
[2026-01-14T21:42:19.580Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Security @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T21:42:21.081Z] [BOT] 💾 Marked as posted: Technical Program Manager, Security @ anthropic (instance #1)
[2026-01-14T21:42:21.082Z] [BOT] 💾 BEFORE ARCHIVING: 1443 jobs in database
[2026-01-14T21:42:21.083Z] [BOT] ✅ No jobs to archive (all 1443 jobs within 7-day window)
[2026-01-14T21:42:21.092Z] [BOT] 💾 Saved posted_jobs.json: 1443 active jobs
[2026-01-14T21:42:21.092Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T21:42:24.093Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T21:42:24.093Z] [BOT] 📍 [ROUTING] "Support Operations Specialist" @ anthropic
[2026-01-14T21:42:24.093Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-14T21:42:24.298Z] [BOT] ✅ Created forum post: 🏢 Support Operations Specialist @ anthropic in #📈・JID_fb739488
[2026-01-14T21:42:24.298Z] [BOT] ✅ Industry: Support Operations Specialist @ anthropic
[2026-01-14T21:42:25.999Z] [BOT] ✅ Created forum post: 🏢 Support Operations Specialist @ anthropic in #🌉・san-francisco
[2026-01-14T21:42:25.999Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T21:42:27.500Z] [BOT] 💾 Marked as posted: Support Operations Specialist @ anthropic (instance #1)
[2026-01-14T21:42:27.500Z] [BOT] 💾 BEFORE ARCHIVING: 1444 jobs in database
[2026-01-14T21:42:27.501Z] [BOT] ✅ No jobs to archive (all 1444 jobs within 7-day window)
[2026-01-14T21:42:27.513Z] [BOT] 💾 Saved posted_jobs.json: 1444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:42:30.514Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-14T21:42:30.515Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Inference" @ anthropic
[2026-01-14T21:42:30.515Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-14T21:42:30.729Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Inference @ anthropic in #📊・JID_9910249a
  ✅ Industry: Technical Program Manager, Inference @ anthropic
[2026-01-14T21:42:32.481Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Inference @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T21:42:33.982Z] [BOT] 💾 Marked as posted: Technical Program Manager, Inference @ anthropic (instance #1)
[2026-01-14T21:42:33.983Z] [BOT] 💾 BEFORE ARCHIVING: 1445 jobs in database
[2026-01-14T21:42:33.984Z] [BOT] ✅ No jobs to archive (all 1445 jobs within 7-day window)
[2026-01-14T21:42:33.995Z] [BOT] 💾 Saved posted_jobs.json: 1445 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:42:36.996Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-14T21:42:36.996Z] [BOT] 📍 [ROUTING] "Research Professional" @ ORG_9d38443e of Chicago
[2026-01-14T21:42:36.996Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-14T21:42:37.263Z] [BOT] ✅ Created forum post: 🏢 Research Professional @ ORG_9d38443e of Chicago in #💰・finance-jobs
  ✅ Industry: Research Professional @ ORG_9d38443e of Chicago
[2026-01-14T21:42:39.054Z] [BOT] ✅ Created forum post: 🏢 Research Professional @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-14T21:42:40.555Z] [BOT] 💾 Marked as posted: Research Professional @ ORG_9d38443e of Chicago (instance #1)
💾 BEFORE ARCHIVING: 1446 jobs in database
[2026-01-14T21:42:40.556Z] [BOT] ✅ No jobs to archive (all 1446 jobs within 7-day window)
[2026-01-14T21:42:40.572Z] [BOT] 💾 Saved posted_jobs.json: 1446 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:42:43.572Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T21:42:43.572Z] [BOT] 📍 [ROUTING] "Operations Research Analyst-Foundational" @ ORG_fee50aac
[2026-01-14T21:42:43.572Z] [BOT] Category: MARKETING (matched: "campaign")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T21:42:43.814Z] [BOT] ✅ Created forum post: 🏢 Operations Research Analyst-Foundational @ ORG_fee50aac in #📣・marketing-jobs
[2026-01-14T21:42:43.814Z] [BOT] ✅ Industry: Operations Research Analyst-Foundational @ ORG_fee50aac
[2026-01-14T21:42:45.589Z] [BOT] ✅ Created forum post: 🏢 Operations Research Analyst-Foundational @ ORG_fee50aac in #💻・remote-usa
[2026-01-14T21:42:45.589Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T21:42:47.090Z] [BOT] 💾 Marked as posted: Operations Research Analyst-Foundational @ ORG_fee50aac (instance #1)
[2026-01-14T21:42:47.090Z] [BOT] 💾 BEFORE ARCHIVING: 1447 jobs in database
[2026-01-14T21:42:47.091Z] [BOT] ✅ No jobs to archive (all 1447 jobs within 7-day window)
[2026-01-14T21:42:47.102Z] [BOT] 💾 Saved posted_jobs.json: 1447 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:42:50.103Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T21:42:50.103Z] [BOT] ⏭️  Skipping duplicate: JID_691589b6 (posted within 7 days)
[2026-01-14T21:42:50.104Z] [BOT] ⏭️  Skipping duplicate: JID_310f7e64 (posted within 7 days)
[2026-01-14T21:42:50.104Z] [BOT] ⏭️  Skipping duplicate: JID_d04e5201 (posted within 7 days)
[2026-01-14T21:42:50.104Z] [BOT] ⏭️  Skipping duplicate: JID_e91d1e6d (posted within 7 days)
[2026-01-14T21:42:50.104Z] [BOT] ⏭️  Skipping duplicate: JID_8eb25d02 (posted within 7 days)
[2026-01-14T21:42:50.104Z] [BOT] ⏭️  Skipping duplicate: JID_e0dce9a6 (posted within 7 days)
[2026-01-14T21:42:50.104Z] [BOT] ⏭️  Skipping duplicate: JID_45a2177a (posted within 7 days)
[2026-01-14T21:42:50.104Z] [BOT] ⏭️  Skipping duplicate: JID_ae8dd09b (posted within 7 days)
[2026-01-14T21:42:50.104Z] [BOT] ⏭️  Skipping duplicate: JID_32cb8765-professional_jr31451 (posted within 7 days)
[2026-01-14T21:42:50.105Z] [BOT] ⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_89d20214-foundational_r2111121 (posted within 7 days)
[2026-01-14T21:42:50.219Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[2026-01-14T21:42:50.387Z] [BOT] ✅ Saved pending queue: 2734 total (2714 pending, 10 enriched, 10 posted)
[2026-01-14T21:42:50.387Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T21:42:50.441Z] [BOT] 📂 Loaded 3575 existing routing entries
[2026-01-14T21:42:50.502Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3585
   Timestamp: 2026-01-14T21:42:50.487Z
[2026-01-14T21:42:50.503Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T21:42:50.503Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T21:42:50.503Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T21:42:50.503Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
     1. #🌉・san-francisco: 8 posts
[2026-01-14T21:42:50.503Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #🤖・ai-jobs: 2 posts
     4. #📈・JID_fb739488: 1 posts
     5. #📊・JID_9910249a: 1 posts
[2026-01-14T21:42:50.504Z] [BOT] [STATS] Channel stats saved
[2026-01-14T21:42:52.529Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2845) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*