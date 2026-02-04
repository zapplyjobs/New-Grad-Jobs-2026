# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T16:25:38.096Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T16:25:33.759Z] ========================================
[2026-02-04T16:25:33.761Z] Discord Bot Execution Log
[2026-02-04T16:25:33.761Z] Environment: GitHub Actions
[2026-02-04T16:25:33.761Z] Node Version: v20.20.0
[2026-02-04T16:25:33.761Z] ========================================
[2026-02-04T16:25:33.762Z] Environment Variables Check:
[2026-02-04T16:25:33.762Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T16:25:33.762Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T16:25:33.762Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T16:25:33.762Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T16:25:33.762Z] 
Multi-Channel Configuration:
[2026-02-04T16:25:33.762Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T16:25:33.762Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:25:33.762Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:25:33.763Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T16:25:33.763Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:25:33.763Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:25:33.763Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:25:33.763Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:25:33.763Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:25:33.763Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T16:25:33.763Z] 
Data Files Check:
[2026-02-04T16:25:33.764Z] .github/data/new_jobs.json: ✅ Exists (10 items, 181367 bytes)
[2026-02-04T16:25:33.826Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T16:25:33.826Z] 
========================================
[2026-02-04T16:25:33.826Z] Starting Enhanced Discord Bot...
[2026-02-04T16:25:33.826Z] ========================================
[2026-02-04T16:25:34.418Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T16:25:35.070Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T16:25:35.070Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T16:25:35.070Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T16:25:35.092Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T16:25:35.092Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T16:25:35.093Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T16:25:35.093Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T16:25:35.094Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T16:25:35.094Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T16:25:35.094Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T16:25:35.103Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T16:25:35.103Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T16:25:35.113Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-02-04T16:25:35.113Z] [BOT] 🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
[2026-02-04T16:25:35.113Z] [BOT] 🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
[2026-02-04T16:25:35.113Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-02-04T16:25:35.114Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
[2026-02-04T16:25:35.114Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
[2026-02-04T16:25:35.114Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
[2026-02-04T16:25:35.114Z] [BOT] 🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
[2026-02-04T16:25:35.114Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
[2026-02-04T16:25:35.114Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
[2026-02-04T16:25:35.114Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Director, Account Management at discord
[2026-02-04T16:25:35.114Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
[2026-02-04T16:25:35.115Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
[2026-02-04T16:25:35.115Z] [BOT] 🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
[2026-02-04T16:25:35.115Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
[2026-02-04T16:25:35.115Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-02-04T16:25:35.115Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
[2026-02-04T16:25:35.115Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-04T16:25:35.115Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-04T16:25:35.115Z] [BOT] 🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
[2026-02-04T16:25:35.143Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T16:25:35.178Z] [BOT] ✅ Saved pending queue: 267 total (264 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (47 blacklisted)
[2026-02-04T16:25:35.178Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T16:25:35.179Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T16:25:35.179Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T16:25:35.179Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T16:25:35.180Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-04T16:25:35.180Z] [BOT] Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T16:25:35.180Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T16:25:35.224Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T16:25:35.225Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T16:25:35.230Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T16:25:35.230Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T16:25:35.232Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T16:25:35.374Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T16:25:35.374Z] [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T16:25:37.398Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*