# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T06:32:57.438Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T06:32:52.450Z] ========================================
[2026-02-02T06:32:52.451Z] Discord Bot Execution Log
[2026-02-02T06:32:52.451Z] Environment: GitHub Actions
[2026-02-02T06:32:52.451Z] Node Version: v20.20.0
[2026-02-02T06:32:52.451Z] ========================================
[2026-02-02T06:32:52.452Z] Environment Variables Check:
[2026-02-02T06:32:52.452Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T06:32:52.452Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T06:32:52.452Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T06:32:52.452Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T06:32:52.452Z] 
Multi-Channel Configuration:
[2026-02-02T06:32:52.452Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T06:32:52.452Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:32:52.452Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:32:52.452Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T06:32:52.452Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:32:52.452Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:32:52.452Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:32:52.452Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:32:52.453Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:32:52.453Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T06:32:52.453Z] 
Data Files Check:
[2026-02-02T06:32:52.454Z] .github/data/new_jobs.json: ✅ Exists (10 items, 130988 bytes)
[2026-02-02T06:32:52.523Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11148180 bytes)
[2026-02-02T06:32:52.524Z] 
========================================
[2026-02-02T06:32:52.524Z] Starting Enhanced Discord Bot...
[2026-02-02T06:32:52.524Z] ========================================
[2026-02-02T06:32:53.026Z] [BOT] ✅ Loaded V2 database: 2215 jobs
[2026-02-02T06:32:53.865Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T06:32:53.865Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T06:32:53.865Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T06:32:53.923Z] [BOT] ✅ Loaded pending queue: 570 total (520 pending, 50 enriched, 0 posted)
[2026-02-02T06:32:53.923Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T06:32:53.924Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T06:32:53.925Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T06:32:53.925Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T06:32:53.939Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T06:32:53.939Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
[2026-02-02T06:32:53.940Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
[2026-02-02T06:32:53.940Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
[2026-02-02T06:32:53.940Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-02T06:32:53.940Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-02-02T06:32:53.940Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-02T06:32:53.940Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager Consumer Business Development, TV Partnerships at spotify
[2026-02-02T06:32:53.940Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Majors Northeast at datadog
[2026-02-02T06:32:53.940Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Director, Product Counseling at vercel
🚫 Skipping blacklisted job: Graduate Leadership Engineer - Computer Engineering at Westinghouse Electric Company
🚫 Skipping blacklisted job: Workforce Management Contact Routing Lead at gusto
🚫 Skipping blacklisted job: Data Science Senior Manager at gusto
[2026-02-02T06:32:53.940Z] [BOT] 🚫 Skipping blacklisted job: Technology Leadership Development Program Associate at Ameriprise Financial
🚫 Skipping blacklisted job: Senior Manager, Business Development at brex
🚫 Skipping blacklisted job: Senior Manager, Business Development (Embedded Finance) at brex
🚫 Skipping blacklisted job: Senior Solutions Consultant at airtable
[2026-02-02T06:32:53.940Z] [BOT] 🚫 Skipping blacklisted job: Lead Solutions Consultant at airtable
🚫 Skipping blacklisted job: Engineering Manager, AI Product at airtable
[2026-02-02T06:32:53.941Z] [BOT] 🚫 Skipping blacklisted job: Benefits Customer Onboarding Manager at gusto
🚫 Skipping blacklisted job: Senior Manager, National Technology Partners  at brex
🚫 Skipping blacklisted job: Manager I, Engineering - Applied AI - Natural Language & Conversational Interfaces at datadog
[2026-02-02T06:32:53.941Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-02T06:32:53.941Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer – Fabric at datadog
🚫 Skipping blacklisted job: Senior Sales Operations Analyst - Health Insurance at gusto
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-02-02T06:32:53.941Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
[2026-02-02T06:32:53.993Z] [BOT] ✅ Loaded pending queue: 570 total (520 pending, 50 enriched, 0 posted)
[2026-02-02T06:32:54.049Z] [BOT] ✅ Saved pending queue: 521 total (520 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T06:32:54.050Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T06:32:54.050Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T06:32:54.050Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T06:32:54.051Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T06:32:54.051Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T06:32:54.051Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-02T06:32:54.051Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-02T06:32:54.051Z] [BOT] [STATS] Channel stats saved
[2026-02-02T06:32:54.051Z] [BOT] 💾 Saving posted jobs database...
[2026-02-02T06:32:54.051Z] [BOT] 💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T06:32:54.108Z] [BOT] ✅ Loaded V2 database: 2215 jobs
💾 DISK STATE: 2215 jobs on disk
[2026-02-02T06:32:54.109Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T06:32:54.114Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T06:32:54.115Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T06:32:54.259Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T06:32:54.259Z] [BOT ERROR] (node:2721) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T06:32:56.274Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2721) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*