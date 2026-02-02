# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T06:01:47.385Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T06:01:42.463Z] ========================================
[2026-02-02T06:01:42.465Z] Discord Bot Execution Log
[2026-02-02T06:01:42.465Z] Environment: GitHub Actions
[2026-02-02T06:01:42.465Z] Node Version: v20.20.0
[2026-02-02T06:01:42.465Z] ========================================
[2026-02-02T06:01:42.465Z] Environment Variables Check:
[2026-02-02T06:01:42.465Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T06:01:42.465Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T06:01:42.465Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T06:01:42.465Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T06:01:42.465Z] 
Multi-Channel Configuration:
[2026-02-02T06:01:42.465Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T06:01:42.466Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:01:42.466Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:01:42.466Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T06:01:42.466Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:01:42.466Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:01:42.466Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:01:42.466Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:01:42.466Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:01:42.466Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T06:01:42.466Z] 
Data Files Check:
[2026-02-02T06:01:42.467Z] .github/data/new_jobs.json: ✅ Exists (10 items, 94351 bytes)
[2026-02-02T06:01:42.537Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11148180 bytes)
[2026-02-02T06:01:42.538Z] 
========================================
[2026-02-02T06:01:42.538Z] Starting Enhanced Discord Bot...
[2026-02-02T06:01:42.538Z] ========================================
[2026-02-02T06:01:43.050Z] [BOT] ✅ Loaded V2 database: 2215 jobs
[2026-02-02T06:01:43.724Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T06:01:43.724Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T06:01:43.725Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T06:01:43.782Z] [BOT] ✅ Loaded pending queue: 570 total (520 pending, 50 enriched, 0 posted)
[2026-02-02T06:01:43.782Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T06:01:43.783Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T06:01:43.784Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T06:01:43.784Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T06:01:43.797Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T06:01:43.797Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-02T06:01:43.798Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-02T06:01:43.798Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-02T06:01:43.798Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Monetization at duolingo
[2026-02-02T06:01:43.798Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer at Walmart
🚫 Skipping blacklisted job: Senior/Staff Software Engineer, Inference at anthropic
[2026-02-02T06:01:43.798Z] [BOT] 🚫 Skipping blacklisted job: Staff Infrastructure Engineer, Pre-training at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
[2026-02-02T06:01:43.798Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
[2026-02-02T06:01:43.798Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-02-02T06:01:43.798Z] [BOT] 🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
[2026-02-02T06:01:43.799Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Data Center Infrastructure at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
[2026-02-02T06:01:43.799Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
[2026-02-02T06:01:43.799Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
[2026-02-02T06:01:43.799Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Senior Data Scientist - Gusto 401(k) at gusto
🚫 Skipping blacklisted job: Staff Product Designer, Visual Systems at datadog
🚫 Skipping blacklisted job: Staff Product Designer, Bits AI at datadog
🚫 Skipping blacklisted job: Director, Product Foundations at vercel
[2026-02-02T06:01:43.799Z] [BOT] 🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
🚫 Skipping blacklisted job: Senior Manager, National Technology Partners at brex
🚫 Skipping blacklisted job: Senior Accountant - NYC at datadog
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-02T06:01:43.799Z] [BOT] 🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Financial Forecasting at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
[2026-02-02T06:01:43.857Z] [BOT] ✅ Loaded pending queue: 570 total (520 pending, 50 enriched, 0 posted)
[2026-02-02T06:01:43.913Z] [BOT] ✅ Saved pending queue: 521 total (520 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T06:01:43.914Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T06:01:43.914Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T06:01:43.914Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T06:01:43.915Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T06:01:43.915Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T06:01:43.915Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-02T06:01:43.915Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-02T06:01:43.915Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T06:01:43.915Z] [BOT] 💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T06:01:43.977Z] [BOT] ✅ Loaded V2 database: 2215 jobs
💾 DISK STATE: 2215 jobs on disk
[2026-02-02T06:01:43.978Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T06:01:43.983Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T06:01:43.983Z] [BOT] 💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T06:01:43.984Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T06:01:44.131Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T06:01:44.131Z] [BOT ERROR] (node:2613) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T06:01:46.147Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2613) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*