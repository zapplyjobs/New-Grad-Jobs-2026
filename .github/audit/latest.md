# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T21:36:13.103Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T21:36:08.560Z] ========================================
[2026-02-03T21:36:08.562Z] Discord Bot Execution Log
[2026-02-03T21:36:08.562Z] Environment: GitHub Actions
[2026-02-03T21:36:08.562Z] Node Version: v20.20.0
[2026-02-03T21:36:08.563Z] ========================================
[2026-02-03T21:36:08.563Z] Environment Variables Check:
[2026-02-03T21:36:08.563Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T21:36:08.563Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T21:36:08.563Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T21:36:08.563Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T21:36:08.563Z] 
Multi-Channel Configuration:
[2026-02-03T21:36:08.563Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T21:36:08.563Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:36:08.563Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:36:08.564Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T21:36:08.564Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:36:08.564Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:36:08.564Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:36:08.564Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:36:08.564Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:36:08.564Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T21:36:08.564Z] 
Data Files Check:
[2026-02-03T21:36:08.565Z] .github/data/new_jobs.json: ✅ Exists (10 items, 135530 bytes)
[2026-02-03T21:36:08.624Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11409844 bytes)
[2026-02-03T21:36:08.624Z] 
========================================
[2026-02-03T21:36:08.624Z] Starting Enhanced Discord Bot...
[2026-02-03T21:36:08.624Z] ========================================
[2026-02-03T21:36:09.223Z] [BOT] ✅ Loaded V2 database: 2255 jobs
[2026-02-03T21:36:09.828Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T21:36:09.829Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T21:36:09.829Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T21:36:09.850Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-03T21:36:09.851Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T21:36:09.852Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T21:36:09.852Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T21:36:09.852Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T21:36:09.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-03T21:36:09.853Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-03T21:36:09.871Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-03T21:36:09.871Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-03T21:36:09.871Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-03T21:36:09.872Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-02-03T21:36:09.872Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-03T21:36:09.872Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
[2026-02-03T21:36:09.872Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
[2026-02-03T21:36:09.872Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
[2026-02-03T21:36:09.872Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
[2026-02-03T21:36:09.872Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
[2026-02-03T21:36:09.872Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
[2026-02-03T21:36:09.872Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
[2026-02-03T21:36:09.873Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
[2026-02-03T21:36:09.873Z] [BOT] 🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
[2026-02-03T21:36:09.873Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-03T21:36:09.900Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-03T21:36:09.935Z] [BOT] ✅ Saved pending queue: 266 total (264 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-03T21:36:09.935Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T21:36:09.936Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T21:36:09.936Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T21:36:09.937Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T21:36:09.937Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T21:36:09.937Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T21:36:09.937Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T21:36:09.938Z] [BOT] 💾 BEFORE MERGE: 2255 jobs in memory (cached)
[2026-02-03T21:36:09.982Z] [BOT] ✅ Loaded V2 database: 2255 jobs
💾 DISK STATE: 2255 jobs on disk
[2026-02-03T21:36:09.983Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2255
[2026-02-03T21:36:09.989Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T21:36:09.989Z] [BOT] 💾 AFTER MERGE: 2255 jobs (merged disk + memory)
[2026-02-03T21:36:09.990Z] [BOT] ✅ No jobs to archive (all 2255 jobs within 7-day window)
[2026-02-03T21:36:10.151Z] [BOT] 💾 Saved posted_jobs.json: 2255 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T21:36:10.151Z] [BOT] ✅ Database saved successfully
[2026-02-03T21:36:10.152Z] [BOT ERROR] (node:2548) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T21:36:12.175Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2548) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*