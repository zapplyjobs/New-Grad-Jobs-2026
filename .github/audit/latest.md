# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T23:14:47.929Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T23:14:43.843Z] ========================================
[2026-02-01T23:14:43.845Z] Discord Bot Execution Log
[2026-02-01T23:14:43.845Z] Environment: GitHub Actions
[2026-02-01T23:14:43.845Z] Node Version: v20.20.0
[2026-02-01T23:14:43.845Z] ========================================
[2026-02-01T23:14:43.845Z] Environment Variables Check:
[2026-02-01T23:14:43.845Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T23:14:43.845Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T23:14:43.845Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T23:14:43.846Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T23:14:43.846Z] 
Multi-Channel Configuration:
[2026-02-01T23:14:43.846Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T23:14:43.846Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:14:43.846Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:14:43.846Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T23:14:43.846Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:14:43.846Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:14:43.846Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:14:43.846Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:14:43.846Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:14:43.846Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T23:14:43.846Z] 
Data Files Check:
[2026-02-01T23:14:43.848Z] .github/data/new_jobs.json: ✅ Exists (10 items, 214474 bytes)
[2026-02-01T23:14:43.905Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11122164 bytes)
[2026-02-01T23:14:43.905Z] 
========================================
[2026-02-01T23:14:43.905Z] Starting Enhanced Discord Bot...
[2026-02-01T23:14:43.905Z] ========================================
[2026-02-01T23:14:44.467Z] [BOT] ✅ Loaded V2 database: 2212 jobs
[2026-02-01T23:14:44.870Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T23:14:44.871Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T23:14:44.871Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T23:14:44.917Z] [BOT] ✅ Loaded pending queue: 729 total (679 pending, 50 enriched, 0 posted)
[2026-02-01T23:14:44.917Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-01T23:14:44.918Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-01T23:14:44.919Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-01T23:14:44.937Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-01T23:14:44.937Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
[2026-02-01T23:14:44.938Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
[2026-02-01T23:14:44.938Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Global Technology Partner Lead at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
[2026-02-01T23:14:44.938Z] [BOT] 🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
[2026-02-01T23:14:44.938Z] [BOT] 🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
🚫 Skipping blacklisted job: Manager, IT Support & Operations at anthropic
[2026-02-01T23:14:44.938Z] [BOT] 🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-01T23:14:44.939Z] [BOT] 🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
[2026-02-01T23:14:44.939Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
[2026-02-01T23:14:44.939Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
[2026-02-01T23:14:44.939Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, API  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
[2026-02-01T23:14:44.939Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
[2026-02-01T23:14:44.939Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
[2026-02-01T23:14:44.939Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
[2026-02-01T23:14:44.940Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Continuous Integration  at anthropic
[2026-02-01T23:14:44.940Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
[2026-02-01T23:14:44.940Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
[2026-02-01T23:14:44.981Z] [BOT] ✅ Loaded pending queue: 729 total (679 pending, 50 enriched, 0 posted)
[2026-02-01T23:14:45.052Z] [BOT] ✅ Saved pending queue: 680 total (679 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-01T23:14:45.053Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-01T23:14:45.053Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T23:14:45.054Z] [BOT] ℹ️ No routing entries to save
📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-01T23:14:45.054Z] [BOT] [STATS] Channel stats saved
[2026-02-01T23:14:45.054Z] [BOT] 💾 Saving posted jobs database...
[2026-02-01T23:14:45.055Z] [BOT] 💾 BEFORE MERGE: 2212 jobs in memory (cached)
[2026-02-01T23:14:45.094Z] [BOT] ✅ Loaded V2 database: 2212 jobs
💾 DISK STATE: 2212 jobs on disk
[2026-02-01T23:14:45.094Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2212
[2026-02-01T23:14:45.099Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T23:14:45.099Z] [BOT] 💾 AFTER MERGE: 2212 jobs (merged disk + memory)
[2026-02-01T23:14:45.101Z] [BOT] ✅ No jobs to archive (all 2212 jobs within 7-day window)
[2026-02-01T23:14:45.227Z] [BOT] 💾 Saved posted_jobs.json: 2212 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T23:14:45.227Z] [BOT ERROR] (node:2676) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2676) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*