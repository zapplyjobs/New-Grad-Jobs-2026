# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T10:41:29.545Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T10:41:24.521Z] ========================================
[2026-02-04T10:41:24.522Z] Discord Bot Execution Log
[2026-02-04T10:41:24.522Z] Environment: GitHub Actions
[2026-02-04T10:41:24.523Z] Node Version: v20.20.0
[2026-02-04T10:41:24.523Z] ========================================
[2026-02-04T10:41:24.523Z] Environment Variables Check:
[2026-02-04T10:41:24.523Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T10:41:24.523Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T10:41:24.523Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T10:41:24.523Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T10:41:24.523Z] 
Multi-Channel Configuration:
[2026-02-04T10:41:24.523Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T10:41:24.523Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:41:24.524Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:41:24.524Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T10:41:24.524Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:41:24.524Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:41:24.524Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:41:24.524Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:41:24.524Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T10:41:24.524Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T10:41:24.524Z] 
Data Files Check:
[2026-02-04T10:41:24.525Z] .github/data/new_jobs.json: ✅ Exists (10 items, 183101 bytes)
[2026-02-04T10:41:24.585Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T10:41:24.585Z] 
========================================
[2026-02-04T10:41:24.586Z] Starting Enhanced Discord Bot...
[2026-02-04T10:41:24.586Z] ========================================
[2026-02-04T10:41:25.179Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T10:41:25.776Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T10:41:25.776Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T10:41:25.776Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T10:41:25.797Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T10:41:25.797Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T10:41:25.798Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T10:41:25.798Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T10:41:25.799Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T10:41:25.799Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T10:41:25.818Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T10:41:25.818Z] [BOT] 🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
[2026-02-04T10:41:25.818Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
[2026-02-04T10:41:25.818Z] [BOT] 🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
[2026-02-04T10:41:25.818Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-02-04T10:41:25.819Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
[2026-02-04T10:41:25.819Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
[2026-02-04T10:41:25.819Z] [BOT] 🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
[2026-02-04T10:41:25.819Z] [BOT] 🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
[2026-02-04T10:41:25.819Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
[2026-02-04T10:41:25.819Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
[2026-02-04T10:41:25.819Z] [BOT] 🚫 Skipping blacklisted job: Product Design Manager, Engagement at discord
🚫 Skipping blacklisted job: SEO Lead at anthropic
[2026-02-04T10:41:25.819Z] [BOT] 🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-04T10:41:25.819Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
[2026-02-04T10:41:25.820Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-04T10:41:25.820Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-04T10:41:25.820Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-02-04T10:41:25.820Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T10:41:25.820Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T10:41:25.847Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T10:41:25.880Z] [BOT] ✅ Saved pending queue: 263 total (261 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-04T10:41:25.880Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T10:41:25.880Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T10:41:25.880Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T10:41:25.881Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 50
[2026-02-04T10:41:25.881Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T10:41:25.881Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T10:41:25.881Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T10:41:25.882Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T10:41:25.924Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T10:41:25.924Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T10:41:25.929Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T10:41:25.929Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T10:41:25.931Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T10:41:26.064Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T10:41:26.065Z] [BOT] ✅ Database saved successfully
[2026-02-04T10:41:26.065Z] [BOT ERROR] (node:2651) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T10:41:28.088Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2651) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*