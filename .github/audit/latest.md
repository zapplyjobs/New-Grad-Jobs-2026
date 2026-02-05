# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T03:47:24.309Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T03:47:19.620Z] ========================================
[2026-02-05T03:47:19.622Z] Discord Bot Execution Log
[2026-02-05T03:47:19.622Z] Environment: GitHub Actions
[2026-02-05T03:47:19.622Z] Node Version: v20.20.0
[2026-02-05T03:47:19.622Z] ========================================
[2026-02-05T03:47:19.623Z] Environment Variables Check:
[2026-02-05T03:47:19.623Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T03:47:19.623Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T03:47:19.623Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T03:47:19.623Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T03:47:19.623Z] 
Multi-Channel Configuration:
[2026-02-05T03:47:19.623Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T03:47:19.623Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T03:47:19.623Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T03:47:19.623Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T03:47:19.623Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T03:47:19.623Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T03:47:19.624Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T03:47:19.624Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T03:47:19.624Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T03:47:19.624Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T03:47:19.624Z] 
Data Files Check:
[2026-02-05T03:47:19.625Z] .github/data/new_jobs.json: ✅ Exists (10 items, 178580 bytes)
[2026-02-05T03:47:19.684Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11514248 bytes)
[2026-02-05T03:47:19.684Z] 
========================================
[2026-02-05T03:47:19.684Z] Starting Enhanced Discord Bot...
[2026-02-05T03:47:19.684Z] ========================================
[2026-02-05T03:47:20.238Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-05T03:47:20.808Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T03:47:20.809Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T03:47:20.809Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T03:47:20.831Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-05T03:47:20.832Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T03:47:20.833Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T03:47:20.833Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T03:47:20.834Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T03:47:20.834Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T03:47:20.834Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T03:47:20.835Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T03:47:20.835Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T03:47:20.852Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T03:47:20.852Z] [BOT] 🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
[2026-02-05T03:47:20.852Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
[2026-02-05T03:47:20.852Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
[2026-02-05T03:47:20.852Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-02-05T03:47:20.852Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
[2026-02-05T03:47:20.853Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
[2026-02-05T03:47:20.853Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
[2026-02-05T03:47:20.853Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-05T03:47:20.853Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
[2026-02-05T03:47:20.853Z] [BOT] 🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
[2026-02-05T03:47:20.853Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
[2026-02-05T03:47:20.853Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
[2026-02-05T03:47:20.883Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-05T03:47:20.917Z] [BOT] ✅ Saved pending queue: 274 total (270 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (46 blacklisted)
[2026-02-05T03:47:20.918Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-05T03:47:20.918Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-05T03:47:20.919Z] [BOT] ℹ️ No routing entries to save
[2026-02-05T03:47:20.919Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-05T03:47:20.919Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-05T03:47:20.919Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-05T03:47:20.919Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-05T03:47:20.919Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-05T03:47:20.964Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-05T03:47:20.964Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-05T03:47:20.969Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T03:47:20.969Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-05T03:47:20.971Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-05T03:47:21.119Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T03:47:21.120Z] [BOT ERROR] (node:2604) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T03:47:23.139Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2604) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*