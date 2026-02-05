# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T01:04:09.467Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T01:04:04.986Z] ========================================
[2026-02-05T01:04:04.988Z] Discord Bot Execution Log
[2026-02-05T01:04:04.988Z] Environment: GitHub Actions
[2026-02-05T01:04:04.988Z] Node Version: v20.20.0
[2026-02-05T01:04:04.988Z] ========================================
[2026-02-05T01:04:04.988Z] Environment Variables Check:
[2026-02-05T01:04:04.988Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T01:04:04.988Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T01:04:04.989Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T01:04:04.989Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T01:04:04.989Z] 
Multi-Channel Configuration:
[2026-02-05T01:04:04.989Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T01:04:04.989Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:04:04.989Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:04:04.989Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T01:04:04.989Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:04:04.989Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:04:04.989Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:04:04.989Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:04:04.989Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T01:04:04.989Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T01:04:04.990Z] 
Data Files Check:
[2026-02-05T01:04:04.991Z] .github/data/new_jobs.json: ✅ Exists (10 items, 176639 bytes)
[2026-02-05T01:04:05.049Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11495862 bytes)
[2026-02-05T01:04:05.050Z] 
========================================
[2026-02-05T01:04:05.050Z] Starting Enhanced Discord Bot...
[2026-02-05T01:04:05.050Z] ========================================
[2026-02-05T01:04:05.635Z] [BOT] ✅ Loaded V2 database: 2265 jobs
[2026-02-05T01:04:06.210Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T01:04:06.210Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T01:04:06.210Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T01:04:06.232Z] [BOT] ✅ Loaded pending queue: 323 total (273 pending, 50 enriched, 0 posted)
[2026-02-05T01:04:06.232Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T01:04:06.233Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T01:04:06.233Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T01:04:06.234Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T01:04:06.234Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T01:04:06.234Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T01:04:06.235Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T01:04:06.235Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T01:04:06.235Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T01:04:06.252Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T01:04:06.253Z] [BOT] 🚫 Skipping blacklisted job: Startups Partner Manager at brex
[2026-02-05T01:04:06.253Z] [BOT] 🚫 Skipping blacklisted job: Startups Partner Manager at brex
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
[2026-02-05T01:04:06.253Z] [BOT] 🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployment) at anthropic
[2026-02-05T01:04:06.253Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-05T01:04:06.253Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
[2026-02-05T01:04:06.253Z] [BOT] 🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-02-05T01:04:06.253Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-05T01:04:06.254Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-05T01:04:06.254Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
[2026-02-05T01:04:06.254Z] [BOT] 🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
[2026-02-05T01:04:06.254Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
[2026-02-05T01:04:06.254Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
[2026-02-05T01:04:06.254Z] [BOT] 🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
[2026-02-05T01:04:06.254Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
[2026-02-05T01:04:06.255Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
[2026-02-05T01:04:06.255Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
🚫 Skipping blacklisted job: Research Product Manager at anthropic
[2026-02-05T01:04:06.255Z] [BOT] 🚫 Skipping blacklisted job: Transaction Manager at anthropic
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
[2026-02-05T01:04:06.255Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
[2026-02-05T01:04:06.282Z] [BOT] ✅ Loaded pending queue: 323 total (273 pending, 50 enriched, 0 posted)
[2026-02-05T01:04:06.316Z] [BOT] ✅ Saved pending queue: 277 total (273 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-05T01:04:06.316Z] [BOT] 📋 After blacklist filter: 0 jobs (46 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-05T01:04:06.317Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-05T01:04:06.317Z] [BOT] ℹ️ No routing entries to save
[2026-02-05T01:04:06.318Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T01:04:06.318Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-05T01:04:06.318Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-05T01:04:06.318Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-05T01:04:06.318Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-05T01:04:06.361Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-05T01:04:06.362Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-05T01:04:06.367Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T01:04:06.367Z] [BOT] 💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-05T01:04:06.368Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-05T01:04:06.507Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T01:04:06.509Z] [BOT] ✅ Database saved successfully
[2026-02-05T01:04:06.509Z] [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T01:04:08.531Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*