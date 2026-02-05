# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T05:12:31.797Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T05:12:27.596Z] ========================================
[2026-02-05T05:12:27.598Z] Discord Bot Execution Log
[2026-02-05T05:12:27.598Z] Environment: GitHub Actions
[2026-02-05T05:12:27.598Z] Node Version: v20.20.0
[2026-02-05T05:12:27.598Z] ========================================
[2026-02-05T05:12:27.598Z] Environment Variables Check:
[2026-02-05T05:12:27.598Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T05:12:27.598Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T05:12:27.598Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T05:12:27.598Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T05:12:27.599Z] 
Multi-Channel Configuration:
[2026-02-05T05:12:27.599Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T05:12:27.599Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:12:27.599Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:12:27.599Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T05:12:27.599Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:12:27.599Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:12:27.599Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:12:27.599Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:12:27.599Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:12:27.599Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T05:12:27.599Z] 
Data Files Check:
[2026-02-05T05:12:27.601Z] .github/data/new_jobs.json: ✅ Exists (10 items, 158392 bytes)
[2026-02-05T05:12:27.663Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11514248 bytes)
[2026-02-05T05:12:27.664Z] 
========================================
[2026-02-05T05:12:27.664Z] Starting Enhanced Discord Bot...
[2026-02-05T05:12:27.664Z] ========================================
[2026-02-05T05:12:28.257Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-05T05:12:28.725Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T05:12:28.726Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T05:12:28.726Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T05:12:28.740Z] [BOT] ✅ Loaded pending queue: 247 total (197 pending, 50 enriched, 0 posted)
[2026-02-05T05:12:28.741Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T05:12:28.742Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T05:12:28.742Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T05:12:28.742Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T05:12:28.743Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T05:12:28.743Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T05:12:28.744Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T05:12:28.744Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T05:12:28.744Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T05:12:28.762Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T05:12:28.762Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployment) at anthropic
[2026-02-05T05:12:28.762Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-02-05T05:12:28.762Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-05T05:12:28.763Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
[2026-02-05T05:12:28.763Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-05T05:12:28.763Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
[2026-02-05T05:12:28.763Z] [BOT] 🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
[2026-02-05T05:12:28.763Z] [BOT] 🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
[2026-02-05T05:12:28.763Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
[2026-02-05T05:12:28.763Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
[2026-02-05T05:12:28.763Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
[2026-02-05T05:12:28.763Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
[2026-02-05T05:12:28.763Z] [BOT] 🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
[2026-02-05T05:12:28.764Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
[2026-02-05T05:12:28.764Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
[2026-02-05T05:12:28.764Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design at figma
[2026-02-05T05:12:28.778Z] [BOT] ✅ Loaded pending queue: 247 total (197 pending, 50 enriched, 0 posted)
[2026-02-05T05:12:28.804Z] [BOT] ✅ Saved pending queue: 201 total (197 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (46 blacklisted)
[2026-02-05T05:12:28.805Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-05T05:12:28.805Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-05T05:12:28.805Z] [BOT] ℹ️ No routing entries to save
[2026-02-05T05:12:28.806Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T05:12:28.806Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-05T05:12:28.806Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-05T05:12:28.806Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-05T05:12:28.806Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-05T05:12:28.851Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-05T05:12:28.852Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-05T05:12:28.857Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T05:12:28.857Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-05T05:12:28.859Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-05T05:12:28.989Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T05:12:28.989Z] [BOT] ✅ Database saved successfully
[2026-02-05T05:12:28.990Z] [BOT ERROR] (node:2622) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T05:12:31.011Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2622) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*