# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T21:54:21.467Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T21:54:16.601Z] ========================================
[2026-02-03T21:54:16.603Z] Discord Bot Execution Log
[2026-02-03T21:54:16.603Z] Environment: GitHub Actions
[2026-02-03T21:54:16.603Z] Node Version: v20.20.0
[2026-02-03T21:54:16.603Z] ========================================
[2026-02-03T21:54:16.603Z] Environment Variables Check:
[2026-02-03T21:54:16.604Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T21:54:16.604Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T21:54:16.604Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T21:54:16.604Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T21:54:16.604Z] 
Multi-Channel Configuration:
[2026-02-03T21:54:16.604Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T21:54:16.604Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:54:16.604Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:54:16.604Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T21:54:16.604Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:54:16.604Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:54:16.604Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:54:16.605Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:54:16.605Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:54:16.605Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T21:54:16.605Z] 
Data Files Check:
[2026-02-03T21:54:16.606Z] .github/data/new_jobs.json: ✅ Exists (10 items, 119510 bytes)
[2026-02-03T21:54:16.669Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11409844 bytes)
[2026-02-03T21:54:16.669Z] 
========================================
[2026-02-03T21:54:16.669Z] Starting Enhanced Discord Bot...
[2026-02-03T21:54:16.669Z] ========================================
[2026-02-03T21:54:17.235Z] [BOT] ✅ Loaded V2 database: 2255 jobs
[2026-02-03T21:54:17.779Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T21:54:17.779Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T21:54:17.779Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T21:54:17.800Z] [BOT] ✅ Loaded pending queue: 316 total (266 pending, 50 enriched, 0 posted)
[2026-02-03T21:54:17.801Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T21:54:17.802Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T21:54:17.802Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T21:54:17.802Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T21:54:17.802Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-03T21:54:17.803Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-03T21:54:17.821Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-03T21:54:17.821Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
[2026-02-03T21:54:17.821Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-03T21:54:17.821Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
[2026-02-03T21:54:17.822Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
[2026-02-03T21:54:17.822Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
[2026-02-03T21:54:17.822Z] [BOT] 🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
[2026-02-03T21:54:17.822Z] [BOT] 🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
[2026-02-03T21:54:17.822Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
[2026-02-03T21:54:17.822Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
[2026-02-03T21:54:17.822Z] [BOT] 🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
[2026-02-03T21:54:17.823Z] [BOT] 🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
[2026-02-03T21:54:17.823Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Director, Account Management at discord
[2026-02-03T21:54:17.823Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
[2026-02-03T21:54:17.823Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
[2026-02-03T21:54:17.823Z] [BOT] 🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
[2026-02-03T21:54:17.823Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-02-03T21:54:17.823Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
[2026-02-03T21:54:17.851Z] [BOT] ✅ Loaded pending queue: 316 total (266 pending, 50 enriched, 0 posted)
[2026-02-03T21:54:17.884Z] [BOT] ✅ Saved pending queue: 268 total (266 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-03T21:54:17.885Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T21:54:17.885Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T21:54:17.885Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T21:54:17.886Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T21:54:17.886Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T21:54:17.886Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-03T21:54:17.886Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-03T21:54:17.886Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T21:54:17.887Z] [BOT] 💾 BEFORE MERGE: 2255 jobs in memory (cached)
[2026-02-03T21:54:17.930Z] [BOT] ✅ Loaded V2 database: 2255 jobs
💾 DISK STATE: 2255 jobs on disk
[2026-02-03T21:54:17.930Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2255
[2026-02-03T21:54:17.935Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T21:54:17.935Z] [BOT] 💾 AFTER MERGE: 2255 jobs (merged disk + memory)
[2026-02-03T21:54:17.937Z] [BOT] ✅ No jobs to archive (all 2255 jobs within 7-day window)
[2026-02-03T21:54:18.084Z] [BOT] 💾 Saved posted_jobs.json: 2255 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T21:54:18.085Z] [BOT] ✅ Database saved successfully
[2026-02-03T21:54:18.085Z] [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T21:54:20.108Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*