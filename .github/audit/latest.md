# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T19:52:50.547Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T19:51:54.073Z] ========================================
[2026-01-17T19:51:54.075Z] Discord Bot Execution Log
[2026-01-17T19:51:54.075Z] Environment: GitHub Actions
[2026-01-17T19:51:54.075Z] Node Version: v20.19.6
[2026-01-17T19:51:54.075Z] ========================================
[2026-01-17T19:51:54.076Z] Environment Variables Check:
[2026-01-17T19:51:54.076Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T19:51:54.076Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T19:51:54.076Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T19:51:54.076Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T19:51:54.076Z] 
Multi-Channel Configuration:
[2026-01-17T19:51:54.076Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T19:51:54.076Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T19:51:54.076Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T19:51:54.076Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T19:51:54.076Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T19:51:54.076Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T19:51:54.076Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T19:51:54.077Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T19:51:54.077Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T19:51:54.077Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T19:51:54.077Z] 
Data Files Check:
[2026-01-17T19:51:54.078Z] .github/data/new_jobs.json: ✅ Exists (10 items, 149468 bytes)
[2026-01-17T19:51:54.088Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1316403 bytes)
[2026-01-17T19:51:54.088Z] 
========================================
[2026-01-17T19:51:54.088Z] Starting Enhanced Discord Bot...
[2026-01-17T19:51:54.088Z] ========================================
[2026-01-17T19:51:54.630Z] [BOT] ✅ Loaded V2 database: 2434 jobs
[2026-01-17T19:51:55.226Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T19:51:55.226Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T19:51:55.226Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T19:51:55.347Z] [BOT] ✅ Loaded pending queue: 2904 total (2884 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Security Development Project Specialist at anthropic
[2026-01-17T19:51:55.350Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T19:51:55.351Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T19:51:55.351Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T19:51:55.352Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-17T19:51:55.352Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T19:51:55.357Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-17T19:51:55.357Z] [BOT] 📍 [ROUTING] "Security Development Project Specialist" @ anthropic
[2026-01-17T19:51:55.357Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T19:51:55.362Z] [BOT ERROR] (node:2776) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T19:51:55.591Z] [BOT] ✅ Created forum post: 🏢 Security Development Project Specialist @ anthropic in #💻・tech-jobs
[2026-01-17T19:51:55.591Z] [BOT] ✅ Industry: Security Development Project Specialist @ anthropic
[2026-01-17T19:51:57.346Z] [BOT] ✅ Created forum post: 🏢 Security Development Project Specialist @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T19:51:58.846Z] [BOT] 💾 Marked as posted: Security Development Project Specialist @ anthropic (instance #1)
[2026-01-17T19:51:58.846Z] [BOT] 💾 BEFORE ARCHIVING: 2435 jobs in database
[2026-01-17T19:51:58.848Z] [BOT] ✅ No jobs to archive (all 2435 jobs within 7-day window)
[2026-01-17T19:51:58.867Z] [BOT] 💾 Saved posted_jobs.json: 2435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T19:51:58.867Z] [BOT] 📍 [ROUTING] "Engineering Manager, Claude Services" @ anthropic
[2026-01-17T19:51:58.868Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T19:51:59.063Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Claude Services @ anthropic in #💻・tech-jobs
[2026-01-17T19:51:59.063Z] [BOT] ✅ Industry: Engineering Manager, Claude Services @ anthropic
[2026-01-17T19:52:00.826Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Claude Services @ anthropic in #🌉・san-francisco
[2026-01-17T19:52:00.827Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T19:52:02.328Z] [BOT] 💾 Marked as posted: Engineering Manager, Claude Services @ anthropic (instance #1)
[2026-01-17T19:52:02.328Z] [BOT] 💾 BEFORE ARCHIVING: 2436 jobs in database
[2026-01-17T19:52:02.330Z] [BOT] ✅ No jobs to archive (all 2436 jobs within 7-day window)
[2026-01-17T19:52:02.343Z] [BOT] 💾 Saved posted_jobs.json: 2436 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T19:52:05.345Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-17T19:52:05.345Z] [BOT] 📍 [ROUTING] "Recruiting Coordinator (Contract)" @ vercel
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T19:52:05.553Z] [BOT] ✅ Created forum post: 🏢 Recruiting Coordinator (Contract) @ vercel in #📣・marketing-jobs
  ✅ Industry: Recruiting Coordinator (Contract) @ vercel
[2026-01-17T19:52:07.495Z] [BOT] ✅ Created forum post: 🏢 Recruiting Coordinator (Contract) @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T19:52:08.997Z] [BOT] 💾 Marked as posted: Recruiting Coordinator (Contract) @ vercel (instance #1)
[2026-01-17T19:52:08.997Z] [BOT] 💾 BEFORE ARCHIVING: 2437 jobs in database
[2026-01-17T19:52:09.000Z] [BOT] ✅ No jobs to archive (all 2437 jobs within 7-day window)
[2026-01-17T19:52:09.019Z] [BOT] 💾 Saved posted_jobs.json: 2437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T19:52:09.019Z] [BOT] 📍 [ROUTING] "Senior Lidar Specialist" @ ORG_6ae04125
   Category: MARKETING (matched: "growth")
[2026-01-17T19:52:09.019Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T19:52:09.318Z] [BOT] ✅ Created forum post: 🏢 Senior Lidar Specialist @ ORG_6ae04125 in #📣・marketing-jobs
[2026-01-17T19:52:09.318Z] [BOT] ✅ Industry: Senior Lidar Specialist @ ORG_6ae04125
[2026-01-17T19:52:11.411Z] [BOT] ✅ Created forum post: 🏢 Senior Lidar Specialist @ ORG_6ae04125 in #💻・remote-usa
[2026-01-17T19:52:11.411Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T19:52:12.912Z] [BOT] 💾 Marked as posted: Senior Lidar Specialist @ ORG_6ae04125 (instance #1)
[2026-01-17T19:52:12.913Z] [BOT] 💾 BEFORE ARCHIVING: 2438 jobs in database
[2026-01-17T19:52:12.914Z] [BOT] ✅ No jobs to archive (all 2438 jobs within 7-day window)
[2026-01-17T19:52:12.930Z] [BOT] 💾 Saved posted_jobs.json: 2438 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T19:52:15.931Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-17T19:52:15.931Z] [BOT] 📍 [ROUTING] "Senior Manager, Enterprise Sales - Figma Weave (New York, United States)" @ figma
[2026-01-17T19:52:15.931Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T19:52:16.202Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Enterprise Sales - Figma Weave (New York, United States) @ figma in #💲・sales-jobs
  ✅ Industry: Senior Manager, Enterprise Sales - Figma Weave (New York, United States) @ figma
[2026-01-17T19:52:18.256Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Enterprise Sales - Figma Weave (New York, United States) @ figma in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-17T19:52:19.758Z] [BOT] 💾 Marked as posted: Senior Manager, Enterprise Sales - Figma Weave (New York, United States) @ figma (instance #1)
[2026-01-17T19:52:19.758Z] [BOT] 💾 BEFORE ARCHIVING: 2439 jobs in database
[2026-01-17T19:52:19.760Z] [BOT] ✅ No jobs to archive (all 2439 jobs within 7-day window)
[2026-01-17T19:52:19.777Z] [BOT] 💾 Saved posted_jobs.json: 2439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T19:52:19.777Z] [BOT] 📍 [ROUTING] "GTM Strategy Manager " @ figma
[2026-01-17T19:52:19.777Z] [BOT] Category: SALES (matched: "sales")
[2026-01-17T19:52:19.777Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T19:52:20.010Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy Manager  @ figma in #💲・sales-jobs
  ✅ Industry: GTM Strategy Manager  @ figma
[2026-01-17T19:52:21.743Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy Manager  @ figma in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-17T19:52:23.245Z] [BOT] 💾 Marked as posted: GTM Strategy Manager  @ figma (instance #1)
[2026-01-17T19:52:23.246Z] [BOT] 💾 BEFORE ARCHIVING: 2440 jobs in database
[2026-01-17T19:52:23.247Z] [BOT] ✅ No jobs to archive (all 2440 jobs within 7-day window)
[2026-01-17T19:52:23.262Z] [BOT] 💾 Saved posted_jobs.json: 2440 active jobs
[2026-01-17T19:52:23.262Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T19:52:23.262Z] [BOT] 📍 [ROUTING] "Head of Sales Programs" @ datadog
   Category: SALES (matched: "sales")
[2026-01-17T19:52:23.262Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T19:52:23.487Z] [BOT] ✅ Created forum post: 🏢 Head of Sales Programs @ datadog in #💲・sales-jobs
  ✅ Industry: Head of Sales Programs @ datadog
[2026-01-17T19:52:25.179Z] [BOT] ✅ Created forum post: 🏢 Head of Sales Programs @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T19:52:26.679Z] [BOT] 💾 Marked as posted: Head of Sales Programs @ datadog (instance #1)
[2026-01-17T19:52:26.679Z] [BOT] 💾 BEFORE ARCHIVING: 2441 jobs in database
[2026-01-17T19:52:26.681Z] [BOT] ✅ No jobs to archive (all 2441 jobs within 7-day window)
[2026-01-17T19:52:26.697Z] [BOT] 💾 Saved posted_jobs.json: 2441 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T19:52:29.697Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-17T19:52:29.697Z] [BOT] 📍 [ROUTING] "Transportation Planning Analyst" @ Kimley-Horn
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-17T19:52:30.051Z] [BOT] ✅ Created forum post: 🏢 Transportation Planning Analyst @ Kimley-Horn in #🩺・healthcare-jobs
[2026-01-17T19:52:30.051Z] [BOT] ✅ Industry: Transportation Planning Analyst @ Kimley-Horn
[2026-01-17T19:52:31.826Z] [BOT] ✅ Created forum post: 🏢 Transportation Planning Analyst @ Kimley-Horn in #🤠・austin
[2026-01-17T19:52:31.826Z] [BOT] ✅ Location: 🤠・austin
[2026-01-17T19:52:33.328Z] [BOT] 💾 Marked as posted: Transportation Planning Analyst @ Kimley-Horn (instance #1)
[2026-01-17T19:52:33.328Z] [BOT] 💾 BEFORE ARCHIVING: 2442 jobs in database
[2026-01-17T19:52:33.329Z] [BOT] ✅ No jobs to archive (all 2442 jobs within 7-day window)
[2026-01-17T19:52:33.345Z] [BOT] 💾 Saved posted_jobs.json: 2442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T19:52:36.346Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-17T19:52:36.346Z] [BOT] 📍 [ROUTING] "Software Engineer, Platform" @ anthropic
[2026-01-17T19:52:36.346Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T19:52:36.840Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Platform @ anthropic in #🤖・ai-jobs
  ✅ Industry: Software Engineer, Platform @ anthropic
[2026-01-17T19:52:38.610Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Platform @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T19:52:40.111Z] [BOT] 💾 Marked as posted: Software Engineer, Platform @ anthropic (instance #1)
[2026-01-17T19:52:40.111Z] [BOT] 💾 BEFORE ARCHIVING: 2443 jobs in database
[2026-01-17T19:52:40.113Z] [BOT] ✅ No jobs to archive (all 2443 jobs within 7-day window)
[2026-01-17T19:52:40.132Z] [BOT] 💾 Saved posted_jobs.json: 2443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T19:52:40.132Z] [BOT] 📍 [ROUTING] "Senior Client Account Manager, Mid-Market (Goods - Acquisitions)" @ reddit
[2026-01-17T19:52:40.132Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-17T19:52:40.384Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Mid-Market (Goods - Acquisitions) @ reddit in #🤖・ai-jobs
[2026-01-17T19:52:40.384Z] [BOT] ✅ Industry: Senior Client Account Manager, Mid-Market (Goods - Acquisitions) @ reddit
[2026-01-17T19:52:42.316Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Mid-Market (Goods - Acquisitions) @ reddit in #🌉・san-francisco
[2026-01-17T19:52:42.316Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T19:52:43.818Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Mid-Market (Goods - Acquisitions) @ reddit (instance #1)
[2026-01-17T19:52:43.818Z] [BOT] 💾 BEFORE ARCHIVING: 2444 jobs in database
[2026-01-17T19:52:43.819Z] [BOT] ✅ No jobs to archive (all 2444 jobs within 7-day window)
[2026-01-17T19:52:43.838Z] [BOT] 💾 Saved posted_jobs.json: 2444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T19:52:43.838Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Mid-Market (Goods) @ reddit (instance #1)
[2026-01-17T19:52:43.838Z] [BOT] 💾 BEFORE ARCHIVING: 2445 jobs in database
[2026-01-17T19:52:43.840Z] [BOT] ✅ No jobs to archive (all 2445 jobs within 7-day window)
[2026-01-17T19:52:43.856Z] [BOT] 💾 Saved posted_jobs.json: 2445 active jobs
[2026-01-17T19:52:43.856Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T19:52:46.856Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-17T19:52:46.857Z] [BOT] ⏭️  Skipping duplicate: JID_68413eab (posted within 7 days)
[2026-01-17T19:52:46.857Z] [BOT] ⏭️  Skipping duplicate: JID_658bcfb4 (posted within 7 days)
[2026-01-17T19:52:46.857Z] [BOT] ⏭️  Skipping duplicate: JID_744ef2b2 (posted within 7 days)
[2026-01-17T19:52:46.858Z] [BOT] ⏭️  Skipping duplicate: JID_64fc9a9d (posted within 7 days)
[2026-01-17T19:52:46.858Z] [BOT] ⏭️  Skipping duplicate: JID_28fe4b57 (posted within 7 days)
[2026-01-17T19:52:46.858Z] [BOT] ⏭️  Skipping duplicate: JID_98c1a3c8 (posted within 7 days)
⏭️  Skipping duplicate: JID_b613c2f8 (posted within 7 days)
[2026-01-17T19:52:46.858Z] [BOT] ⏭️  Skipping duplicate: JID_000b2714 (posted within 7 days)
[2026-01-17T19:52:46.858Z] [BOT] ⏭️  Skipping duplicate: JID_ecc1f27f (posted within 7 days)
[2026-01-17T19:52:46.858Z] [BOT] ⏭️  Skipping duplicate: JID_25a027c8 (posted within 7 days)
[2026-01-17T19:52:46.979Z] [BOT] ✅ Loaded pending queue: 2904 total (2884 pending, 20 enriched, 0 posted)
[2026-01-17T19:52:47.156Z] [BOT] ✅ Saved pending queue: 2904 total (2884 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-17T19:52:47.156Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-17T19:52:47.216Z] [BOT] 📂 Loaded 4615 existing routing entries
[2026-01-17T19:52:47.285Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4625
   Timestamp: 2026-01-17T19:52:47.265Z
[2026-01-17T19:52:47.285Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 20
[2026-01-17T19:52:47.286Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-17T19:52:47.286Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-17T19:52:47.286Z] [BOT] Total posts: 20
   Channels used: 9
[2026-01-17T19:52:47.286Z] [BOT] Top channels:
[2026-01-17T19:52:47.286Z] [BOT] 1. #🌉・san-francisco: 6 posts
     2. #💲・sales-jobs: 3 posts
     3. #💻・tech-jobs: 2 posts
     4. #📣・marketing-jobs: 2 posts
     5. #🗽・new-york: 2 posts
[2026-01-17T19:52:47.286Z] [BOT] [STATS] Channel stats saved
[2026-01-17T19:52:49.309Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2776) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*