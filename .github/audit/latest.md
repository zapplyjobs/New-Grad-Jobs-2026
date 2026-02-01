# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T23:48:36.835Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T23:48:31.957Z] ========================================
[2026-02-01T23:48:31.959Z] Discord Bot Execution Log
[2026-02-01T23:48:31.959Z] Environment: GitHub Actions
[2026-02-01T23:48:31.959Z] Node Version: v20.20.0
[2026-02-01T23:48:31.959Z] ========================================
[2026-02-01T23:48:31.960Z] Environment Variables Check:
[2026-02-01T23:48:31.960Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T23:48:31.960Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T23:48:31.960Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T23:48:31.960Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T23:48:31.960Z] 
Multi-Channel Configuration:
[2026-02-01T23:48:31.960Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T23:48:31.960Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:48:31.960Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:48:31.960Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T23:48:31.960Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:48:31.960Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:48:31.960Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:48:31.961Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:48:31.961Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:48:31.961Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T23:48:31.961Z] 
Data Files Check:
[2026-02-01T23:48:31.962Z] .github/data/new_jobs.json: ✅ Exists (10 items, 128559 bytes)
[2026-02-01T23:48:32.019Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11122164 bytes)
[2026-02-01T23:48:32.019Z] 
========================================
[2026-02-01T23:48:32.019Z] Starting Enhanced Discord Bot...
[2026-02-01T23:48:32.019Z] ========================================
[2026-02-01T23:48:32.598Z] [BOT] ✅ Loaded V2 database: 2212 jobs
[2026-02-01T23:48:33.426Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T23:48:33.427Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T23:48:33.427Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T23:48:33.476Z] [BOT] ✅ Loaded pending queue: 729 total (679 pending, 50 enriched, 0 posted)
[2026-02-01T23:48:33.477Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-01T23:48:33.478Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-01T23:48:33.478Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-01T23:48:33.478Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-01T23:48:33.497Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-01T23:48:33.497Z] [BOT] 🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
[2026-02-01T23:48:33.498Z] [BOT] 🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Financial Forecasting at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
[2026-02-01T23:48:33.498Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
[2026-02-01T23:48:33.498Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
[2026-02-01T23:48:33.498Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-01T23:48:33.498Z] [BOT] 🚫 Skipping blacklisted job: Manager Consumer Business Development, TV Partnerships at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer - Majors Northeast at datadog
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Director, Product Counseling at vercel
[2026-02-01T23:48:33.498Z] [BOT] 🚫 Skipping blacklisted job: Graduate Leadership Engineer - Computer Engineering at Westinghouse Electric Company
🚫 Skipping blacklisted job: Workforce Management Contact Routing Lead at gusto
[2026-02-01T23:48:33.499Z] [BOT] 🚫 Skipping blacklisted job: Data Science Senior Manager at gusto
🚫 Skipping blacklisted job: Technology Leadership Development Program Associate at Ameriprise Financial
🚫 Skipping blacklisted job: Senior Manager, Business Development at brex
[2026-02-01T23:48:33.499Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Business Development (Embedded Finance) at brex
[2026-02-01T23:48:33.499Z] [BOT] 🚫 Skipping blacklisted job: Senior Solutions Consultant at airtable
🚫 Skipping blacklisted job: Lead Solutions Consultant at airtable
[2026-02-01T23:48:33.499Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI Product at airtable
🚫 Skipping blacklisted job: Benefits Customer Onboarding Manager at gusto
🚫 Skipping blacklisted job: Senior Manager, National Technology Partners  at brex
[2026-02-01T23:48:33.499Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Engineering - Applied AI - Natural Language & Conversational Interfaces at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-01T23:48:33.499Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Staff Software Engineer – Fabric at datadog
[2026-02-01T23:48:33.499Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Operations Analyst - Health Insurance at gusto
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
[2026-02-01T23:48:33.499Z] [BOT] 🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
[2026-02-01T23:48:33.499Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
[2026-02-01T23:48:33.500Z] [BOT] 🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
[2026-02-01T23:48:33.500Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
[2026-02-01T23:48:33.546Z] [BOT] ✅ Loaded pending queue: 729 total (679 pending, 50 enriched, 0 posted)
[2026-02-01T23:48:33.626Z] [BOT] ✅ Saved pending queue: 680 total (679 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-01T23:48:33.626Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-01T23:48:33.627Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-01T23:48:33.627Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 50
   Successful: 0
[2026-02-01T23:48:33.627Z] [BOT] Failed: 0
   Skipped: 50
[2026-02-01T23:48:33.627Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-01T23:48:33.628Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T23:48:33.628Z] [BOT] 💾 BEFORE MERGE: 2212 jobs in memory (cached)
[2026-02-01T23:48:33.674Z] [BOT] ✅ Loaded V2 database: 2212 jobs
💾 DISK STATE: 2212 jobs on disk
[2026-02-01T23:48:33.675Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2212
[2026-02-01T23:48:33.680Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T23:48:33.680Z] [BOT] 💾 AFTER MERGE: 2212 jobs (merged disk + memory)
[2026-02-01T23:48:33.682Z] [BOT] ✅ No jobs to archive (all 2212 jobs within 7-day window)
[2026-02-01T23:48:33.822Z] [BOT] 💾 Saved posted_jobs.json: 2212 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T23:48:33.823Z] [BOT] ✅ Database saved successfully
[2026-02-01T23:48:33.823Z] [BOT ERROR] (node:2796) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T23:48:35.848Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2796) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*