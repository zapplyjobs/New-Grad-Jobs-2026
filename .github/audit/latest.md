# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T15:46:01.753Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T15:45:48.231Z] ========================================
[2026-01-29T15:45:48.233Z] Discord Bot Execution Log
[2026-01-29T15:45:48.233Z] Environment: GitHub Actions
[2026-01-29T15:45:48.233Z] Node Version: v20.20.0
[2026-01-29T15:45:48.233Z] ========================================
[2026-01-29T15:45:48.233Z] Environment Variables Check:
[2026-01-29T15:45:48.233Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T15:45:48.233Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T15:45:48.233Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T15:45:48.233Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T15:45:48.233Z] 
Multi-Channel Configuration:
[2026-01-29T15:45:48.233Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T15:45:48.234Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T15:45:48.234Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T15:45:48.234Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T15:45:48.234Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T15:45:48.234Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T15:45:48.234Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T15:45:48.234Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T15:45:48.234Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T15:45:48.234Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T15:45:48.234Z] 
Data Files Check:
[2026-01-29T15:45:48.235Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T15:45:48.235Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T15:45:48.235Z] 
========================================
[2026-01-29T15:45:48.235Z] Starting Enhanced Discord Bot...
[2026-01-29T15:45:48.235Z] ========================================
[2026-01-29T15:45:48.684Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:45:49.289Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T15:45:49.289Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T15:45:49.290Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T15:45:49.451Z] [BOT] ✅ Loaded pending queue: 3053 total (3003 pending, 50 enriched, 0 posted)
[2026-01-29T15:45:49.452Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-29T15:45:49.452Z] [BOT] [BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T15:45:49.454Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T15:45:49.455Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T15:45:49.455Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T15:45:49.456Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-29T15:45:49.456Z] [BOT] 📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T15:45:49.460Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T15:45:49.460Z] [BOT] ⏭️ Skipping - already posted to #💻・tech-jobs: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T15:45:49.460Z] [BOT] ⏭️ Skipping - already posted to #💻・tech-jobs: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T15:45:49.460Z] [BOT] ⏭️ Skipping - already posted to #💻・tech-jobs: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T15:45:49.460Z] [BOT] ⏭️ Skipping - already posted to #💻・tech-jobs: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T15:45:49.460Z] [BOT] ⏭️ Skipping - already posted to #💻・tech-jobs: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
[2026-01-29T15:45:49.460Z] [BOT] ⏭️ Skipping - already posted to #💻・tech-jobs: Software Developer @ ORG_39417f32 Allen
[2026-01-29T15:45:49.461Z] [BOT ERROR] (node:2604) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T15:45:52.463Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T15:45:52.464Z] [BOT] ⏭️ Skipping - already posted to #🤖・ai-jobs: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T15:45:52.464Z] [BOT] ⏭️ Skipping - already posted to #🤖・ai-jobs: Software Integration Engineer @ Q-CTRL
[2026-01-29T15:45:52.464Z] [BOT] ⏭️ Skipping - already posted to #🤖・ai-jobs: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T15:45:55.467Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T15:45:55.468Z] [BOT] ⏭️ Skipping - already posted to #💰・finance-jobs: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T15:45:58.469Z] [BOT] 🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-01-29T15:45:58.470Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T15:45:58.470Z] [BOT] ℹ️ No routing entries to save
[2026-01-29T15:45:58.471Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T15:45:58.471Z] [BOT] Total attempts: 10
   Successful: 0
   Failed: 0
   Skipped: 10
[2026-01-29T15:45:58.471Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-29T15:45:58.471Z] [BOT] Total posts: 0
   Channels used: 0
[2026-01-29T15:45:58.471Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-29T15:45:58.471Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:45:58.472Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:45:58.472Z] [BOT] 💾 DISK STATE: 29 jobs on disk
[2026-01-29T15:45:58.472Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:45:58.473Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:45:58.473Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:45:58.476Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:45:58.476Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T15:46:00.489Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2604) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*