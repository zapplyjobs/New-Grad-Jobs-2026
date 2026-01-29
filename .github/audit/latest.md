# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T16:19:16.454Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T16:19:03.369Z] ========================================
[2026-01-29T16:19:03.371Z] Discord Bot Execution Log
[2026-01-29T16:19:03.371Z] Environment: GitHub Actions
[2026-01-29T16:19:03.371Z] Node Version: v20.20.0
[2026-01-29T16:19:03.371Z] ========================================
[2026-01-29T16:19:03.371Z] Environment Variables Check:
[2026-01-29T16:19:03.371Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T16:19:03.371Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T16:19:03.371Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T16:19:03.371Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T16:19:03.372Z] 
Multi-Channel Configuration:
[2026-01-29T16:19:03.372Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T16:19:03.372Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T16:19:03.372Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T16:19:03.372Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T16:19:03.372Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T16:19:03.372Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T16:19:03.372Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T16:19:03.372Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T16:19:03.372Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T16:19:03.372Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T16:19:03.372Z] 
Data Files Check:
[2026-01-29T16:19:03.373Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T16:19:03.374Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T16:19:03.374Z] 
========================================
[2026-01-29T16:19:03.374Z] Starting Enhanced Discord Bot...
[2026-01-29T16:19:03.374Z] ========================================
[2026-01-29T16:19:03.909Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T16:19:04.448Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T16:19:04.448Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T16:19:04.448Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T16:19:04.572Z] [BOT] ✅ Loaded pending queue: 3056 total (3006 pending, 50 enriched, 0 posted)
[2026-01-29T16:19:04.573Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-29T16:19:04.573Z] [BOT] [BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T16:19:04.575Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T16:19:04.576Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T16:19:04.576Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T16:19:04.577Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T16:19:04.577Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T16:19:04.577Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T16:19:04.581Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T16:19:04.581Z] [BOT] ⏭️ Skipping - already posted to #💻・tech-jobs: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T16:19:04.582Z] [BOT] ⏭️ Skipping - already posted to #💻・tech-jobs: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T16:19:04.582Z] [BOT] ⏭️ Skipping - already posted to #💻・tech-jobs: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T16:19:04.582Z] [BOT] ⏭️ Skipping - already posted to #💻・tech-jobs: Analyst – People Analytics @ ORG_03419b97
⏭️ Skipping - already posted to #💻・tech-jobs: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
[2026-01-29T16:19:04.582Z] [BOT] ⏭️ Skipping - already posted to #💻・tech-jobs: Software Developer @ ORG_39417f32 Allen
[2026-01-29T16:19:04.583Z] [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T16:19:07.585Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T16:19:07.586Z] [BOT] ⏭️ Skipping - already posted to #🤖・ai-jobs: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T16:19:07.586Z] [BOT] ⏭️ Skipping - already posted to #🤖・ai-jobs: Software Integration Engineer @ Q-CTRL
[2026-01-29T16:19:07.586Z] [BOT] ⏭️ Skipping - already posted to #🤖・ai-jobs: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T16:19:10.586Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T16:19:10.586Z] [BOT] ⏭️ Skipping - already posted to #💰・finance-jobs: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T16:19:13.588Z] [BOT] 🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-01-29T16:19:13.589Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T16:19:13.589Z] [BOT] ℹ️ No routing entries to save
[2026-01-29T16:19:13.589Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
   Total attempts: 10
[2026-01-29T16:19:13.589Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 10
[2026-01-29T16:19:13.590Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-01-29T16:19:13.590Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-29T16:19:13.590Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T16:19:13.591Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T16:19:13.591Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T16:19:13.591Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T16:19:13.591Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T16:19:13.595Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T16:19:13.595Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T16:19:15.611Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*