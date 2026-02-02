# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T05:28:40.775Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T05:28:36.184Z] ========================================
[2026-02-02T05:28:36.186Z] Discord Bot Execution Log
[2026-02-02T05:28:36.186Z] Environment: GitHub Actions
[2026-02-02T05:28:36.186Z] Node Version: v20.20.0
[2026-02-02T05:28:36.186Z] ========================================
[2026-02-02T05:28:36.186Z] Environment Variables Check:
[2026-02-02T05:28:36.186Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T05:28:36.186Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T05:28:36.186Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T05:28:36.187Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T05:28:36.187Z] 
Multi-Channel Configuration:
[2026-02-02T05:28:36.187Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T05:28:36.187Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T05:28:36.187Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T05:28:36.187Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T05:28:36.187Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T05:28:36.187Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T05:28:36.187Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T05:28:36.187Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T05:28:36.187Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T05:28:36.187Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T05:28:36.187Z] 
Data Files Check:
[2026-02-02T05:28:36.189Z] .github/data/new_jobs.json: ✅ Exists (10 items, 206539 bytes)
[2026-02-02T05:28:36.246Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11148180 bytes)
[2026-02-02T05:28:36.246Z] 
========================================
[2026-02-02T05:28:36.246Z] Starting Enhanced Discord Bot...
[2026-02-02T05:28:36.246Z] ========================================
[2026-02-02T05:28:36.821Z] [BOT] ✅ Loaded V2 database: 2215 jobs
[2026-02-02T05:28:37.419Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T05:28:37.419Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T05:28:37.420Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T05:28:37.462Z] [BOT] ✅ Loaded pending queue: 570 total (520 pending, 50 enriched, 0 posted)
[2026-02-02T05:28:37.462Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T05:28:37.463Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T05:28:37.464Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T05:28:37.482Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T05:28:37.483Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
[2026-02-02T05:28:37.483Z] [BOT] 🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
[2026-02-02T05:28:37.483Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Global Technology Partner Lead at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
[2026-02-02T05:28:37.483Z] [BOT] 🚫 Skipping blacklisted job: Manager, IT Support & Operations at anthropic
🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-02T05:28:37.484Z] [BOT] 🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
[2026-02-02T05:28:37.484Z] [BOT] 🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
[2026-02-02T05:28:37.484Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, API  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
[2026-02-02T05:28:37.484Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
[2026-02-02T05:28:37.484Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
[2026-02-02T05:28:37.484Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
[2026-02-02T05:28:37.484Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
[2026-02-02T05:28:37.484Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Continuous Integration  at anthropic
[2026-02-02T05:28:37.484Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-02T05:28:37.485Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior AI Engineering Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-02T05:28:37.527Z] [BOT] ✅ Loaded pending queue: 570 total (520 pending, 50 enriched, 0 posted)
[2026-02-02T05:28:37.581Z] [BOT] ✅ Saved pending queue: 521 total (520 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T05:28:37.582Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T05:28:37.582Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-02T05:28:37.583Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
[2026-02-02T05:28:37.583Z] [BOT] 💾 Saving posted jobs database...
[2026-02-02T05:28:37.584Z] [BOT] 💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T05:28:37.629Z] [BOT] ✅ Loaded V2 database: 2215 jobs
💾 DISK STATE: 2215 jobs on disk
[2026-02-02T05:28:37.629Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T05:28:37.634Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T05:28:37.634Z] [BOT] 💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T05:28:37.636Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T05:28:37.780Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T05:28:37.780Z] [BOT ERROR] (node:2545) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T05:28:39.804Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2545) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*