# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T23:32:41.742Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T23:32:37.443Z] ========================================
[2026-02-01T23:32:37.445Z] Discord Bot Execution Log
[2026-02-01T23:32:37.445Z] Environment: GitHub Actions
[2026-02-01T23:32:37.445Z] Node Version: v20.20.0
[2026-02-01T23:32:37.445Z] ========================================
[2026-02-01T23:32:37.445Z] Environment Variables Check:
[2026-02-01T23:32:37.445Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T23:32:37.445Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T23:32:37.445Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T23:32:37.445Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T23:32:37.446Z] 
Multi-Channel Configuration:
[2026-02-01T23:32:37.446Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T23:32:37.446Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:32:37.446Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:32:37.446Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T23:32:37.446Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:32:37.446Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:32:37.446Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:32:37.446Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:32:37.446Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:32:37.446Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T23:32:37.446Z] 
Data Files Check:
[2026-02-01T23:32:37.448Z] .github/data/new_jobs.json: ✅ Exists (10 items, 147631 bytes)
[2026-02-01T23:32:37.504Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11122164 bytes)
[2026-02-01T23:32:37.505Z] 
========================================
[2026-02-01T23:32:37.505Z] Starting Enhanced Discord Bot...
[2026-02-01T23:32:37.505Z] ========================================
[2026-02-01T23:32:38.082Z] [BOT] ✅ Loaded V2 database: 2212 jobs
[2026-02-01T23:32:38.562Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T23:32:38.562Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T23:32:38.562Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T23:32:38.610Z] [BOT] ✅ Loaded pending queue: 729 total (679 pending, 50 enriched, 0 posted)
[2026-02-01T23:32:38.610Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-01T23:32:38.611Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-01T23:32:38.612Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-01T23:32:38.630Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-01T23:32:38.630Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
[2026-02-01T23:32:38.630Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-02-01T23:32:38.631Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer at Walmart
🚫 Skipping blacklisted job: Senior/Staff Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Staff Infrastructure Engineer, Pre-training at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-02-01T23:32:38.631Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
[2026-02-01T23:32:38.631Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
[2026-02-01T23:32:38.631Z] [BOT] 🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Data Center Infrastructure at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
[2026-02-01T23:32:38.631Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
[2026-02-01T23:32:38.631Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
[2026-02-01T23:32:38.632Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
[2026-02-01T23:32:38.632Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
[2026-02-01T23:32:38.632Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Senior Data Scientist - Gusto 401(k) at gusto
🚫 Skipping blacklisted job: Staff Product Designer, Visual Systems at datadog
[2026-02-01T23:32:38.632Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer, Bits AI at datadog
🚫 Skipping blacklisted job: Director, Product Foundations at vercel
🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
[2026-02-01T23:32:38.632Z] [BOT] 🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
🚫 Skipping blacklisted job: Senior Manager, National Technology Partners at brex
[2026-02-01T23:32:38.632Z] [BOT] 🚫 Skipping blacklisted job: Senior Accountant - NYC at datadog
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior AI Engineering Manager at duolingo
[2026-02-01T23:32:38.632Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-01T23:32:38.632Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-01T23:32:38.632Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Monetization at duolingo
[2026-02-01T23:32:38.680Z] [BOT] ✅ Loaded pending queue: 729 total (679 pending, 50 enriched, 0 posted)
[2026-02-01T23:32:38.755Z] [BOT] ✅ Saved pending queue: 680 total (679 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-01T23:32:38.755Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-01T23:32:38.755Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T23:32:38.755Z] [BOT] ℹ️ No routing entries to save
[2026-02-01T23:32:38.756Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T23:32:38.756Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-01T23:32:38.756Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-01T23:32:38.756Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T23:32:38.757Z] [BOT] 💾 BEFORE MERGE: 2212 jobs in memory (cached)
[2026-02-01T23:32:38.801Z] [BOT] ✅ Loaded V2 database: 2212 jobs
💾 DISK STATE: 2212 jobs on disk
[2026-02-01T23:32:38.802Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2212
[2026-02-01T23:32:38.807Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T23:32:38.807Z] [BOT] 💾 AFTER MERGE: 2212 jobs (merged disk + memory)
[2026-02-01T23:32:38.809Z] [BOT] ✅ No jobs to archive (all 2212 jobs within 7-day window)
[2026-02-01T23:32:38.940Z] [BOT] 💾 Saved posted_jobs.json: 2212 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T23:32:38.940Z] [BOT ERROR] (node:2615) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T23:32:40.964Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2615) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*