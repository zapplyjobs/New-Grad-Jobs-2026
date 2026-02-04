# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T07:55:01.347Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T07:54:56.677Z] ========================================
[2026-02-04T07:54:56.678Z] Discord Bot Execution Log
[2026-02-04T07:54:56.678Z] Environment: GitHub Actions
[2026-02-04T07:54:56.678Z] Node Version: v20.20.0
[2026-02-04T07:54:56.678Z] ========================================
[2026-02-04T07:54:56.678Z] Environment Variables Check:
[2026-02-04T07:54:56.678Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T07:54:56.679Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T07:54:56.679Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T07:54:56.679Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T07:54:56.679Z] 
Multi-Channel Configuration:
[2026-02-04T07:54:56.679Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T07:54:56.679Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:54:56.679Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:54:56.679Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T07:54:56.679Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:54:56.679Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:54:56.679Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:54:56.679Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:54:56.679Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T07:54:56.679Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T07:54:56.680Z] 
Data Files Check:
[2026-02-04T07:54:56.681Z] .github/data/new_jobs.json: ✅ Exists (10 items, 183101 bytes)
[2026-02-04T07:54:56.756Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11480581 bytes)
[2026-02-04T07:54:56.756Z] 
========================================
[2026-02-04T07:54:56.756Z] Starting Enhanced Discord Bot...
[2026-02-04T07:54:56.756Z] ========================================
[2026-02-04T07:54:57.278Z] [BOT] ✅ Loaded V2 database: 2266 jobs
[2026-02-04T07:54:57.960Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T07:54:57.960Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T07:54:57.990Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T07:54:57.990Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T07:54:57.991Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T07:54:57.991Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T07:54:57.992Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T07:54:57.992Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T07:54:58.006Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T07:54:58.006Z] [BOT] 🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
[2026-02-04T07:54:58.006Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
[2026-02-04T07:54:58.006Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-02-04T07:54:58.006Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
[2026-02-04T07:54:58.006Z] [BOT] 🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
[2026-02-04T07:54:58.007Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
[2026-02-04T07:54:58.007Z] [BOT] 🚫 Skipping blacklisted job: Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
[2026-02-04T07:54:58.007Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-04T07:54:58.007Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
[2026-02-04T07:54:58.007Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
[2026-02-04T07:54:58.007Z] [BOT] 🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-04T07:54:58.007Z] [BOT] 🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
[2026-02-04T07:54:58.007Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-04T07:54:58.007Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
[2026-02-04T07:54:58.042Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T07:54:58.073Z] [BOT] ✅ Saved pending queue: 264 total (262 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-04T07:54:58.073Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T07:54:58.073Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T07:54:58.074Z] [BOT] ℹ️ No routing entries to save
📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T07:54:58.074Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T07:54:58.075Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T07:54:58.075Z] [BOT] 💾 BEFORE MERGE: 2266 jobs in memory (cached)
[2026-02-04T07:54:58.135Z] [BOT] ✅ Loaded V2 database: 2266 jobs
💾 DISK STATE: 2266 jobs on disk
[2026-02-04T07:54:58.136Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2266
[2026-02-04T07:54:58.141Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T07:54:58.141Z] [BOT] 💾 AFTER MERGE: 2266 jobs (merged disk + memory)
[2026-02-04T07:54:58.142Z] [BOT] ✅ No jobs to archive (all 2266 jobs within 7-day window)
[2026-02-04T07:54:58.300Z] [BOT] 💾 Saved posted_jobs.json: 2266 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T07:54:58.301Z] [BOT ERROR] (node:2597) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T07:55:00.314Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2597) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*