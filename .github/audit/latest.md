# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T11:24:32.867Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T11:24:28.047Z] ========================================
[2026-02-02T11:24:28.049Z] Discord Bot Execution Log
[2026-02-02T11:24:28.049Z] Environment: GitHub Actions
[2026-02-02T11:24:28.049Z] Node Version: v20.20.0
[2026-02-02T11:24:28.049Z] ========================================
[2026-02-02T11:24:28.049Z] Environment Variables Check:
[2026-02-02T11:24:28.049Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T11:24:28.049Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T11:24:28.050Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T11:24:28.050Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T11:24:28.050Z] 
Multi-Channel Configuration:
[2026-02-02T11:24:28.050Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T11:24:28.050Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:24:28.050Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:24:28.050Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T11:24:28.050Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:24:28.050Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:24:28.050Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:24:28.050Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:24:28.050Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:24:28.051Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T11:24:28.051Z] 
Data Files Check:
[2026-02-02T11:24:28.052Z] .github/data/new_jobs.json: ✅ Exists (10 items, 193592 bytes)
[2026-02-02T11:24:28.111Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11182184 bytes)
[2026-02-02T11:24:28.111Z] 
========================================
[2026-02-02T11:24:28.111Z] Starting Enhanced Discord Bot...
[2026-02-02T11:24:28.111Z] ========================================
[2026-02-02T11:24:28.701Z] [BOT] ✅ Loaded V2 database: 2220 jobs
[2026-02-02T11:24:29.159Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T11:24:29.159Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T11:24:29.159Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T11:24:29.182Z] [BOT] ✅ Loaded pending queue: 345 total (295 pending, 50 enriched, 0 posted)
[2026-02-02T11:24:29.182Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T11:24:29.184Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T11:24:29.184Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T11:24:29.203Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T11:24:29.203Z] [BOT] 🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
[2026-02-02T11:24:29.203Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-02-02T11:24:29.204Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
[2026-02-02T11:24:29.204Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Data Center Infrastructure at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
[2026-02-02T11:24:29.204Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
[2026-02-02T11:24:29.204Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
[2026-02-02T11:24:29.204Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist - Gusto 401(k) at gusto
🚫 Skipping blacklisted job: Staff Product Designer, Visual Systems at datadog
[2026-02-02T11:24:29.204Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer, Bits AI at datadog
🚫 Skipping blacklisted job: Director, Product Foundations at vercel
🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
[2026-02-02T11:24:29.205Z] [BOT] 🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
🚫 Skipping blacklisted job: Senior Manager, National Technology Partners at brex
[2026-02-02T11:24:29.205Z] [BOT] 🚫 Skipping blacklisted job: Senior Accountant - NYC at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-02T11:24:29.205Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
[2026-02-02T11:24:29.205Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
[2026-02-02T11:24:29.205Z] [BOT] 🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-02T11:24:29.205Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-02T11:24:29.205Z] [BOT] 🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
[2026-02-02T11:24:29.234Z] [BOT] ✅ Loaded pending queue: 345 total (295 pending, 50 enriched, 0 posted)
[2026-02-02T11:24:29.269Z] [BOT] ✅ Saved pending queue: 296 total (295 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T11:24:29.269Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T11:24:29.269Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T11:24:29.270Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T11:24:29.270Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
[2026-02-02T11:24:29.270Z] [BOT] Skipped: 50
[2026-02-02T11:24:29.270Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-02T11:24:29.270Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T11:24:29.271Z] [BOT] 💾 BEFORE MERGE: 2220 jobs in memory (cached)
[2026-02-02T11:24:29.312Z] [BOT] ✅ Loaded V2 database: 2220 jobs
💾 DISK STATE: 2220 jobs on disk
[2026-02-02T11:24:29.313Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2220
[2026-02-02T11:24:29.318Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T11:24:29.318Z] [BOT] 💾 AFTER MERGE: 2220 jobs (merged disk + memory)
[2026-02-02T11:24:29.320Z] [BOT] ✅ No jobs to archive (all 2220 jobs within 7-day window)
[2026-02-02T11:24:29.452Z] [BOT] 💾 Saved posted_jobs.json: 2220 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T11:24:29.452Z] [BOT ERROR] (node:2591) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T11:24:31.474Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2591) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*