# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T10:35:31.952Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T10:35:27.609Z] ========================================
[2026-02-03T10:35:27.611Z] Discord Bot Execution Log
[2026-02-03T10:35:27.611Z] Environment: GitHub Actions
[2026-02-03T10:35:27.611Z] Node Version: v20.20.0
[2026-02-03T10:35:27.611Z] ========================================
[2026-02-03T10:35:27.611Z] Environment Variables Check:
[2026-02-03T10:35:27.611Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T10:35:27.612Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T10:35:27.612Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T10:35:27.612Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T10:35:27.612Z] 
Multi-Channel Configuration:
[2026-02-03T10:35:27.612Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T10:35:27.612Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:35:27.612Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:35:27.612Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T10:35:27.612Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:35:27.612Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:35:27.612Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:35:27.612Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:35:27.613Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:35:27.613Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T10:35:27.613Z] 
Data Files Check:
[2026-02-03T10:35:27.614Z] .github/data/new_jobs.json: ✅ Exists (10 items, 186517 bytes)
[2026-02-03T10:35:27.672Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11337576 bytes)
[2026-02-03T10:35:27.672Z] 
========================================
[2026-02-03T10:35:27.672Z] Starting Enhanced Discord Bot...
[2026-02-03T10:35:27.672Z] ========================================
[2026-02-03T10:35:28.236Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-02-03T10:35:28.783Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T10:35:28.784Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T10:35:28.784Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T10:35:28.805Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-03T10:35:28.805Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T10:35:28.806Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T10:35:28.807Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T10:35:28.825Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T10:35:28.825Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
[2026-02-03T10:35:28.826Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
[2026-02-03T10:35:28.826Z] [BOT] 🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
[2026-02-03T10:35:28.826Z] [BOT] 🚫 Skipping blacklisted job: Senior/Staff Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-02-03T10:35:28.826Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
[2026-02-03T10:35:28.826Z] [BOT] 🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
[2026-02-03T10:35:28.827Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
[2026-02-03T10:35:28.827Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
[2026-02-03T10:35:28.827Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-02-03T10:35:28.827Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
[2026-02-03T10:35:28.827Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
[2026-02-03T10:35:28.827Z] [BOT] 🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-03T10:35:28.827Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-03T10:35:28.827Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
[2026-02-03T10:35:28.855Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-03T10:35:28.889Z] [BOT] ✅ Saved pending queue: 272 total (271 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-03T10:35:28.890Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T10:35:28.890Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T10:35:28.890Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T10:35:28.891Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T10:35:28.891Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T10:35:28.891Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T10:35:28.891Z] [BOT] [STATS] Channel stats saved
[2026-02-03T10:35:28.892Z] [BOT] 💾 Saving posted jobs database...
[2026-02-03T10:35:28.892Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T10:35:28.935Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-03T10:35:28.935Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T10:35:28.940Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T10:35:28.941Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T10:35:28.942Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T10:35:29.071Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T10:35:29.071Z] [BOT] ✅ Database saved successfully
[2026-02-03T10:35:29.071Z] [BOT ERROR] (node:2460) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T10:35:31.094Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2460) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*