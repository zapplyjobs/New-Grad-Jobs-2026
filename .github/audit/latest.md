# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T07:40:12.537Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T07:40:08.388Z] ========================================
[2026-02-03T07:40:08.390Z] Discord Bot Execution Log
[2026-02-03T07:40:08.390Z] Environment: GitHub Actions
[2026-02-03T07:40:08.390Z] Node Version: v20.20.0
[2026-02-03T07:40:08.390Z] ========================================
[2026-02-03T07:40:08.390Z] Environment Variables Check:
[2026-02-03T07:40:08.390Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T07:40:08.390Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T07:40:08.390Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T07:40:08.391Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T07:40:08.391Z] 
Multi-Channel Configuration:
[2026-02-03T07:40:08.391Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T07:40:08.391Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:40:08.391Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:40:08.391Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T07:40:08.391Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:40:08.391Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:40:08.391Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:40:08.391Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:40:08.391Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T07:40:08.391Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T07:40:08.391Z] 
Data Files Check:
[2026-02-03T07:40:08.393Z] .github/data/new_jobs.json: ✅ Exists (10 items, 188370 bytes)
[2026-02-03T07:40:08.454Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11329063 bytes)
[2026-02-03T07:40:08.455Z] 
========================================
[2026-02-03T07:40:08.455Z] Starting Enhanced Discord Bot...
[2026-02-03T07:40:08.455Z] ========================================
[2026-02-03T07:40:09.067Z] [BOT] ✅ Loaded V2 database: 2244 jobs
[2026-02-03T07:40:09.422Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T07:40:09.423Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T07:40:09.423Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T07:40:09.445Z] [BOT] ✅ Loaded pending queue: 323 total (273 pending, 50 enriched, 0 posted)
[2026-02-03T07:40:09.446Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T07:40:09.447Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T07:40:09.447Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T07:40:09.448Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T07:40:09.468Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T07:40:09.468Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
[2026-02-03T07:40:09.468Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
[2026-02-03T07:40:09.468Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
[2026-02-03T07:40:09.468Z] [BOT] 🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Continuous Integration  at anthropic
[2026-02-03T07:40:09.469Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Senior/Staff Software Engineer, Inference at anthropic
[2026-02-03T07:40:09.469Z] [BOT] 🚫 Skipping blacklisted job: Staff Infrastructure Engineer, Pre-training at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
[2026-02-03T07:40:09.469Z] [BOT] 🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-02-03T07:40:09.469Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
[2026-02-03T07:40:09.469Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
[2026-02-03T07:40:09.469Z] [BOT] 🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-02-03T07:40:09.469Z] [BOT] 🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
[2026-02-03T07:40:09.469Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
[2026-02-03T07:40:09.470Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-03T07:40:09.470Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Sr Staff Software Engineer, Entity Management at gusto
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
[2026-02-03T07:40:09.470Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Product Marketing Lead, PEO at gusto
🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-03T07:40:09.470Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-03T07:40:09.470Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-03T07:40:09.471Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-03T07:40:09.471Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-03T07:40:09.500Z] [BOT] ✅ Loaded pending queue: 323 total (273 pending, 50 enriched, 0 posted)
[2026-02-03T07:40:09.535Z] [BOT] ✅ Saved pending queue: 274 total (273 pending, 1 enriched, 0 posted)
[2026-02-03T07:40:09.535Z] [BOT] 🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T07:40:09.536Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T07:40:09.536Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T07:40:09.537Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 50
[2026-02-03T07:40:09.537Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-03T07:40:09.537Z] [BOT] Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T07:40:09.538Z] [BOT] 💾 BEFORE MERGE: 2244 jobs in memory (cached)
[2026-02-03T07:40:09.591Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-03T07:40:09.592Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2244
[2026-02-03T07:40:09.598Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T07:40:09.598Z] [BOT] 💾 AFTER MERGE: 2244 jobs (merged disk + memory)
[2026-02-03T07:40:09.600Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-02-03T07:40:09.748Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T07:40:09.748Z] [BOT ERROR] (node:2589) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T07:40:11.775Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2589) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*