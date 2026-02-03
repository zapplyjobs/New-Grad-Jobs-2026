# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T12:59:09.787Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T12:59:05.053Z] ========================================
[2026-02-03T12:59:05.055Z] Discord Bot Execution Log
[2026-02-03T12:59:05.055Z] Environment: GitHub Actions
[2026-02-03T12:59:05.055Z] Node Version: v20.20.0
[2026-02-03T12:59:05.055Z] ========================================
[2026-02-03T12:59:05.055Z] Environment Variables Check:
[2026-02-03T12:59:05.055Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T12:59:05.055Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T12:59:05.055Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T12:59:05.055Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T12:59:05.055Z] 
Multi-Channel Configuration:
[2026-02-03T12:59:05.055Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T12:59:05.056Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:59:05.056Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:59:05.056Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T12:59:05.056Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:59:05.056Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:59:05.056Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:59:05.056Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:59:05.056Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T12:59:05.056Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T12:59:05.056Z] 
Data Files Check:
[2026-02-03T12:59:05.058Z] .github/data/new_jobs.json: ✅ Exists (10 items, 187617 bytes)
[2026-02-03T12:59:05.117Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11337576 bytes)
[2026-02-03T12:59:05.117Z] 
========================================
[2026-02-03T12:59:05.117Z] Starting Enhanced Discord Bot...
[2026-02-03T12:59:05.117Z] ========================================
[2026-02-03T12:59:05.691Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-02-03T12:59:06.265Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T12:59:06.266Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T12:59:06.266Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T12:59:06.287Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T12:59:06.287Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T12:59:06.288Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T12:59:06.289Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T12:59:06.308Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T12:59:06.308Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
[2026-02-03T12:59:06.308Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
[2026-02-03T12:59:06.309Z] [BOT] 🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Senior/Staff Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
[2026-02-03T12:59:06.309Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
[2026-02-03T12:59:06.309Z] [BOT] 🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
[2026-02-03T12:59:06.309Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
[2026-02-03T12:59:06.309Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
[2026-02-03T12:59:06.309Z] [BOT] 🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-03T12:59:06.309Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
[2026-02-03T12:59:06.309Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-03T12:59:06.310Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-03T12:59:06.310Z] [BOT] 🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-03T12:59:06.310Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-03T12:59:06.310Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-02-03T12:59:06.339Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T12:59:06.373Z] [BOT] ✅ Saved pending queue: 271 total (270 pending, 1 enriched, 0 posted)
[2026-02-03T12:59:06.373Z] [BOT] 🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T12:59:06.373Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T12:59:06.373Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T12:59:06.374Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T12:59:06.374Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T12:59:06.374Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-03T12:59:06.374Z] [BOT] Channels used: 0
[STATS] Channel stats saved
[2026-02-03T12:59:06.374Z] [BOT] 💾 Saving posted jobs database...
[2026-02-03T12:59:06.375Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T12:59:06.419Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-03T12:59:06.419Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T12:59:06.424Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T12:59:06.424Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T12:59:06.426Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T12:59:06.576Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T12:59:06.576Z] [BOT] ✅ Database saved successfully
[2026-02-03T12:59:06.577Z] [BOT ERROR] (node:2553) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T12:59:08.600Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2553) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*