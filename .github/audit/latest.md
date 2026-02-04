# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T15:55:03.388Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T15:54:58.739Z] ========================================
[2026-02-04T15:54:58.741Z] Discord Bot Execution Log
[2026-02-04T15:54:58.741Z] Environment: GitHub Actions
[2026-02-04T15:54:58.741Z] Node Version: v20.20.0
[2026-02-04T15:54:58.741Z] ========================================
[2026-02-04T15:54:58.741Z] Environment Variables Check:
[2026-02-04T15:54:58.741Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T15:54:58.741Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T15:54:58.741Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T15:54:58.741Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T15:54:58.741Z] 
Multi-Channel Configuration:
[2026-02-04T15:54:58.741Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T15:54:58.742Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:54:58.742Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:54:58.742Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T15:54:58.742Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:54:58.742Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:54:58.742Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:54:58.742Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:54:58.742Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T15:54:58.742Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T15:54:58.742Z] 
Data Files Check:
[2026-02-04T15:54:58.744Z] .github/data/new_jobs.json: ✅ Exists (10 items, 182383 bytes)
[2026-02-04T15:54:58.802Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T15:54:58.802Z] 
========================================
[2026-02-04T15:54:58.802Z] Starting Enhanced Discord Bot...
[2026-02-04T15:54:58.802Z] ========================================
[2026-02-04T15:54:59.383Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T15:55:00.020Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-04T15:55:00.021Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T15:55:00.021Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T15:55:00.044Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T15:55:00.044Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T15:55:00.045Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T15:55:00.045Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T15:55:00.045Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T15:55:00.046Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T15:55:00.064Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T15:55:00.064Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
[2026-02-04T15:55:00.065Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
[2026-02-04T15:55:00.065Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
[2026-02-04T15:55:00.065Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
[2026-02-04T15:55:00.065Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
[2026-02-04T15:55:00.065Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
[2026-02-04T15:55:00.065Z] [BOT] 🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-04T15:55:00.065Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployment) at anthropic
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
[2026-02-04T15:55:00.065Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
[2026-02-04T15:55:00.065Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
[2026-02-04T15:55:00.065Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
[2026-02-04T15:55:00.066Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
[2026-02-04T15:55:00.066Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T15:55:00.066Z] [BOT] 🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-04T15:55:00.066Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
[2026-02-04T15:55:00.066Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
[2026-02-04T15:55:00.095Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T15:55:00.128Z] [BOT] ✅ Saved pending queue: 266 total (264 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-04T15:55:00.129Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T15:55:00.129Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T15:55:00.129Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T15:55:00.130Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T15:55:00.130Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T15:55:00.130Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T15:55:00.130Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T15:55:00.130Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T15:55:00.173Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T15:55:00.174Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T15:55:00.179Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T15:55:00.179Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T15:55:00.180Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T15:55:00.306Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T15:55:00.306Z] [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T15:55:02.329Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*