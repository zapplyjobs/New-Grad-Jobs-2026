# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T12:58:57.902Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T12:58:53.079Z] ========================================
[2026-02-04T12:58:53.081Z] Discord Bot Execution Log
[2026-02-04T12:58:53.081Z] Environment: GitHub Actions
[2026-02-04T12:58:53.081Z] Node Version: v20.20.0
[2026-02-04T12:58:53.081Z] ========================================
[2026-02-04T12:58:53.081Z] Environment Variables Check:
[2026-02-04T12:58:53.081Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T12:58:53.082Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T12:58:53.082Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T12:58:53.082Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T12:58:53.082Z] 
Multi-Channel Configuration:
[2026-02-04T12:58:53.082Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T12:58:53.082Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:58:53.082Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:58:53.082Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T12:58:53.082Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:58:53.082Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:58:53.082Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:58:53.082Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:58:53.083Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T12:58:53.083Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T12:58:53.083Z] 
Data Files Check:
[2026-02-04T12:58:53.084Z] .github/data/new_jobs.json: ✅ Exists (10 items, 187125 bytes)
[2026-02-04T12:58:53.142Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T12:58:53.143Z] 
========================================
[2026-02-04T12:58:53.143Z] Starting Enhanced Discord Bot...
[2026-02-04T12:58:53.143Z] ========================================
[2026-02-04T12:58:53.711Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T12:58:54.146Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T12:58:54.146Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T12:58:54.146Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T12:58:54.167Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T12:58:54.168Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T12:58:54.169Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T12:58:54.169Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T12:58:54.169Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T12:58:54.170Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T12:58:54.170Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T12:58:54.189Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T12:58:54.189Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
[2026-02-04T12:58:54.190Z] [BOT] 🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
[2026-02-04T12:58:54.190Z] [BOT] 🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-02-04T12:58:54.190Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
[2026-02-04T12:58:54.190Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-02-04T12:58:54.190Z] [BOT] 🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
[2026-02-04T12:58:54.190Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
[2026-02-04T12:58:54.190Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
[2026-02-04T12:58:54.190Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
[2026-02-04T12:58:54.191Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployment) at anthropic
[2026-02-04T12:58:54.191Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
[2026-02-04T12:58:54.191Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
[2026-02-04T12:58:54.191Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
[2026-02-04T12:58:54.191Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-04T12:58:54.191Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T12:58:54.191Z] [BOT] 🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-04T12:58:54.192Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
[2026-02-04T12:58:54.218Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T12:58:54.251Z] [BOT] ✅ Saved pending queue: 263 total (261 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-04T12:58:54.251Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T12:58:54.252Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T12:58:54.252Z] [BOT] ℹ️ No routing entries to save
📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T12:58:54.253Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-04T12:58:54.253Z] [BOT] Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T12:58:54.253Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T12:58:54.296Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T12:58:54.297Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T12:58:54.302Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T12:58:54.302Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T12:58:54.303Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T12:58:54.445Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T12:58:54.445Z] [BOT] ✅ Database saved successfully
[2026-02-04T12:58:54.446Z] [BOT ERROR] (node:2525) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T12:58:56.469Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2525) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*