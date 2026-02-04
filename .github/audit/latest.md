# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T21:52:28.860Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T21:52:23.965Z] ========================================
[2026-02-04T21:52:23.967Z] Discord Bot Execution Log
[2026-02-04T21:52:23.967Z] Environment: GitHub Actions
[2026-02-04T21:52:23.967Z] Node Version: v20.20.0
[2026-02-04T21:52:23.967Z] ========================================
[2026-02-04T21:52:23.967Z] Environment Variables Check:
[2026-02-04T21:52:23.967Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T21:52:23.967Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T21:52:23.967Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T21:52:23.967Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T21:52:23.968Z] 
Multi-Channel Configuration:
[2026-02-04T21:52:23.968Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T21:52:23.968Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:52:23.968Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:52:23.968Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T21:52:23.968Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:52:23.968Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:52:23.968Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:52:23.968Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:52:23.968Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T21:52:23.968Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T21:52:23.968Z] 
Data Files Check:
[2026-02-04T21:52:23.969Z] .github/data/new_jobs.json: ✅ Exists (10 items, 148800 bytes)
[2026-02-04T21:52:24.029Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11456000 bytes)
[2026-02-04T21:52:24.029Z] 
========================================
[2026-02-04T21:52:24.029Z] Starting Enhanced Discord Bot...
[2026-02-04T21:52:24.029Z] ========================================
[2026-02-04T21:52:24.600Z] [BOT] ✅ Loaded V2 database: 2260 jobs
[2026-02-04T21:52:25.154Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T21:52:25.155Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T21:52:25.155Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T21:52:25.177Z] [BOT] ✅ Loaded pending queue: 324 total (274 pending, 50 enriched, 0 posted)
[2026-02-04T21:52:25.177Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T21:52:25.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T21:52:25.178Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T21:52:25.179Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T21:52:25.179Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T21:52:25.180Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T21:52:25.180Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T21:52:25.180Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-04T21:52:25.180Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-04T21:52:25.197Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-04T21:52:25.198Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-02-04T21:52:25.198Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-02-04T21:52:25.198Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
[2026-02-04T21:52:25.199Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
[2026-02-04T21:52:25.199Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
[2026-02-04T21:52:25.199Z] [BOT] 🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
[2026-02-04T21:52:25.199Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Directors, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-04T21:52:25.199Z] [BOT] 🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-04T21:52:25.227Z] [BOT] ✅ Loaded pending queue: 324 total (274 pending, 50 enriched, 0 posted)
[2026-02-04T21:52:25.261Z] [BOT] ✅ Saved pending queue: 278 total (274 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (46 blacklisted)
[2026-02-04T21:52:25.262Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T21:52:25.262Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T21:52:25.262Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T21:52:25.263Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T21:52:25.263Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T21:52:25.263Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T21:52:25.263Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T21:52:25.263Z] [BOT] 💾 BEFORE MERGE: 2260 jobs in memory (cached)
[2026-02-04T21:52:25.307Z] [BOT] ✅ Loaded V2 database: 2260 jobs
💾 DISK STATE: 2260 jobs on disk
[2026-02-04T21:52:25.308Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2260
[2026-02-04T21:52:25.313Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T21:52:25.313Z] [BOT] 💾 AFTER MERGE: 2260 jobs (merged disk + memory)
[2026-02-04T21:52:25.314Z] [BOT] ✅ No jobs to archive (all 2260 jobs within 7-day window)
[2026-02-04T21:52:25.445Z] [BOT] 💾 Saved posted_jobs.json: 2260 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T21:52:25.445Z] [BOT ERROR] (node:2507) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T21:52:27.465Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2507) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*