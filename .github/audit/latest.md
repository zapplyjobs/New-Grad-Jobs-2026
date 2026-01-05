# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T18:26:09.381Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T18:25:51.913Z] ========================================
[2026-01-05T18:25:51.915Z] Discord Bot Execution Log
[2026-01-05T18:25:51.915Z] Environment: GitHub Actions
[2026-01-05T18:25:51.915Z] Node Version: v20.19.6
[2026-01-05T18:25:51.915Z] ========================================
[2026-01-05T18:25:51.915Z] Environment Variables Check:
[2026-01-05T18:25:51.915Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T18:25:51.915Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T18:25:51.915Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T18:25:51.915Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T18:25:51.915Z] 
Multi-Channel Configuration:
[2026-01-05T18:25:51.916Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T18:25:51.916Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T18:25:51.916Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T18:25:51.916Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T18:25:51.916Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T18:25:51.916Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T18:25:51.916Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T18:25:51.916Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T18:25:51.916Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T18:25:51.916Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T18:25:51.916Z] 
Data Files Check:
[2026-01-05T18:25:51.917Z] .github/data/new_jobs.json: ✅ Exists (2 items, 20374 bytes)
[2026-01-05T18:25:51.922Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 667158 bytes)
[2026-01-05T18:25:51.922Z] 
========================================
[2026-01-05T18:25:51.922Z] Starting Enhanced Discord Bot...
[2026-01-05T18:25:51.922Z] ========================================
[2026-01-05T18:25:52.447Z] [BOT] ✅ Loaded V2 database: 1309 jobs
[2026-01-05T18:25:53.061Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T18:25:53.062Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T18:25:53.062Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T18:25:53.062Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[BOT] 📬 Found 2 enriched jobs ready to post from pending queue
[2026-01-05T18:25:53.062Z] [BOT] [BOT] 🔍 Sample enriched job: Director, Product Marketing  at figma
[2026-01-05T18:25:53.064Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-05T18:25:53.064Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-05T18:25:53.064Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-05T18:25:53.065Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-05T18:25:53.065Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T18:25:53.068Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-05T18:25:53.068Z] [BOT] 📍 [ROUTING] "Director, Product Marketing " @ figma
[2026-01-05T18:25:53.069Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-05T18:25:53.073Z] [BOT ERROR] (node:2332) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T18:25:53.306Z] [BOT] ✅ Created forum post: 🏢 Director, Product Marketing  @ figma in #💲・sales-jobs
[2026-01-05T18:25:53.306Z] [BOT] ✅ Industry: Director, Product Marketing  @ figma
[2026-01-05T18:25:54.979Z] [BOT] ✅ Created forum post: 🏢 Director, Product Marketing  @ figma in #🌉・san-francisco
[2026-01-05T18:25:54.980Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-05T18:25:56.480Z] [BOT] 💾 Marked as posted: Director, Product Marketing  @ figma (instance #1)
[2026-01-05T18:25:56.480Z] [BOT] 💾 BEFORE ARCHIVING: 1310 jobs in database
[2026-01-05T18:25:56.481Z] [BOT] ✅ No jobs to archive (all 1310 jobs within 7-day window)
[2026-01-05T18:25:56.495Z] [BOT] 💾 Saved posted_jobs.json: 1310 active jobs
[2026-01-05T18:25:56.495Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T18:25:59.496Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-05T18:25:59.497Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer 1 - Mobile" @ ORG_3cfbdbc3
[2026-01-05T18:25:59.497Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T18:26:00.201Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3 in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3
[2026-01-05T18:26:01.946Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3 in #🌧️・seattle
[2026-01-05T18:26:01.946Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-05T18:26:03.447Z] [BOT] 💾 Marked as posted: Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3 (instance #1)
[2026-01-05T18:26:03.448Z] [BOT] 💾 BEFORE ARCHIVING: 1311 jobs in database
[2026-01-05T18:26:03.449Z] [BOT] ✅ No jobs to archive (all 1311 jobs within 7-day window)
[2026-01-05T18:26:03.459Z] [BOT] 💾 Saved posted_jobs.json: 1311 active jobs
[2026-01-05T18:26:03.459Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T18:26:06.459Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-05T18:26:06.460Z] [BOT] ⏭️  Skipping duplicate: JID_e041e641 (posted within 7 days)
[2026-01-05T18:26:06.460Z] [BOT] ⏭️  Skipping duplicate: JID_4ac515f0 (posted within 7 days)
[2026-01-05T18:26:06.460Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-05T18:26:06.461Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2026-01-05T18:26:06.461Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T18:26:06.514Z] [BOT] 📂 Loaded 2216 existing routing entries
[2026-01-05T18:26:06.576Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2218
[2026-01-05T18:26:06.576Z] [BOT] Timestamp: 2026-01-05T18:26:06.560Z
[2026-01-05T18:26:06.576Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T18:26:06.576Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-05T18:26:06.576Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-05T18:26:06.576Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
[2026-01-05T18:26:06.577Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
     3. #💻・tech-jobs: 1 posts
     4. #🌧️・seattle: 1 posts
[2026-01-05T18:26:06.577Z] [BOT] [STATS] Channel stats saved
[2026-01-05T18:26:08.587Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2332) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*