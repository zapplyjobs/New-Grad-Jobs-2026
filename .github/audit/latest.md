# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T03:48:55.645Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T03:48:51.412Z] ========================================
[2026-02-04T03:48:51.413Z] Discord Bot Execution Log
[2026-02-04T03:48:51.413Z] Environment: GitHub Actions
[2026-02-04T03:48:51.413Z] Node Version: v20.20.0
[2026-02-04T03:48:51.413Z] ========================================
[2026-02-04T03:48:51.413Z] Environment Variables Check:
[2026-02-04T03:48:51.414Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T03:48:51.414Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T03:48:51.414Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T03:48:51.414Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T03:48:51.414Z] 
Multi-Channel Configuration:
[2026-02-04T03:48:51.414Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T03:48:51.414Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:48:51.414Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:48:51.414Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T03:48:51.414Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:48:51.414Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:48:51.414Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:48:51.414Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:48:51.414Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T03:48:51.414Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T03:48:51.415Z] 
Data Files Check:
[2026-02-04T03:48:51.416Z] .github/data/new_jobs.json: ✅ Exists (10 items, 124707 bytes)
[2026-02-04T03:48:51.493Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11471726 bytes)
[2026-02-04T03:48:51.493Z] 
========================================
[2026-02-04T03:48:51.493Z] Starting Enhanced Discord Bot...
[2026-02-04T03:48:51.493Z] ========================================
[2026-02-04T03:48:52.012Z] [BOT] ✅ Loaded V2 database: 2265 jobs
[2026-02-04T03:48:52.425Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T03:48:52.426Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T03:48:52.426Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T03:48:52.455Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T03:48:52.455Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T03:48:52.456Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T03:48:52.457Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T03:48:52.457Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T03:48:52.457Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T03:48:52.458Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T03:48:52.471Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T03:48:52.471Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-04T03:48:52.471Z] [BOT] 🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-04T03:48:52.471Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
[2026-02-04T03:48:52.472Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
[2026-02-04T03:48:52.472Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
[2026-02-04T03:48:52.472Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
[2026-02-04T03:48:52.472Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
[2026-02-04T03:48:52.472Z] [BOT] 🚫 Skipping blacklisted job: Directors, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-04T03:48:52.472Z] [BOT] 🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
[2026-02-04T03:48:52.472Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-04T03:48:52.472Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
[2026-02-04T03:48:52.472Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-04T03:48:52.508Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T03:48:52.540Z] [BOT] ✅ Saved pending queue: 263 total (261 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-04T03:48:52.541Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T03:48:52.541Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T03:48:52.541Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T03:48:52.542Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T03:48:52.542Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T03:48:52.542Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T03:48:52.542Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T03:48:52.542Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-04T03:48:52.603Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-04T03:48:52.604Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-04T03:48:52.609Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T03:48:52.609Z] [BOT] 💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-04T03:48:52.611Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-04T03:48:52.770Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T03:48:52.770Z] [BOT] ✅ Database saved successfully
[2026-02-04T03:48:52.771Z] [BOT ERROR] (node:2643) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T03:48:54.788Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2643) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*