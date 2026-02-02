# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T06:57:43.104Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T06:57:38.817Z] ========================================
[2026-02-02T06:57:38.819Z] Discord Bot Execution Log
[2026-02-02T06:57:38.819Z] Environment: GitHub Actions
[2026-02-02T06:57:38.819Z] Node Version: v20.20.0
[2026-02-02T06:57:38.819Z] ========================================
[2026-02-02T06:57:38.819Z] Environment Variables Check:
[2026-02-02T06:57:38.819Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T06:57:38.819Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T06:57:38.819Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T06:57:38.820Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T06:57:38.820Z] 
Multi-Channel Configuration:
[2026-02-02T06:57:38.820Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T06:57:38.820Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:57:38.820Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:57:38.820Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T06:57:38.820Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:57:38.820Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:57:38.820Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:57:38.820Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:57:38.820Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T06:57:38.820Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T06:57:38.820Z] 
Data Files Check:
[2026-02-02T06:57:38.821Z] .github/data/new_jobs.json: ✅ Exists (10 items, 125111 bytes)
[2026-02-02T06:57:38.878Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11148180 bytes)
[2026-02-02T06:57:38.878Z] 
========================================
[2026-02-02T06:57:38.878Z] Starting Enhanced Discord Bot...
[2026-02-02T06:57:38.878Z] ========================================
[2026-02-02T06:57:39.463Z] [BOT] ✅ Loaded V2 database: 2215 jobs
[2026-02-02T06:57:39.981Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T06:57:39.981Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T06:57:39.982Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T06:57:40.023Z] [BOT] ✅ Loaded pending queue: 551 total (501 pending, 50 enriched, 0 posted)
[2026-02-02T06:57:40.023Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T06:57:40.024Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T06:57:40.024Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T06:57:40.024Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T06:57:40.044Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T06:57:40.044Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-02T06:57:40.044Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
[2026-02-02T06:57:40.044Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
[2026-02-02T06:57:40.044Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-02T06:57:40.045Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Senior Accountant (Platform Accounting) at gusto
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Staff Software Engineer - Payroll Platform at gusto
🚫 Skipping blacklisted job: Manager I, Engineering - CCM Optimize  at datadog
[2026-02-02T06:57:40.045Z] [BOT] 🚫 Skipping blacklisted job: Creator & Affiliate Marketing Manager at figma
🚫 Skipping blacklisted job: Manager, Strategic Sales at figma
🚫 Skipping blacklisted job: Partner Manager - Alliances (Commercial) at datadog
🚫 Skipping blacklisted job: Senior Technical Recruiter at samsara
[2026-02-02T06:57:40.045Z] [BOT] 🚫 Skipping blacklisted job: Manager, Trial Experience -  SaaS at gohighlevel
🚫 Skipping blacklisted job: Principal Software Engineer - Pay Group Engineering at gusto
[2026-02-02T06:57:40.045Z] [BOT] 🚫 Skipping blacklisted job: Product Partnerships Deal Lead at gusto
🚫 Skipping blacklisted job: Product Marketing Manager, Builder Audience at figma
🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-02T06:57:40.045Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Senior Manager, Recruiting at samsara
🚫 Skipping blacklisted job: Sr Staff Software Engineer, Gusto Pro at gusto
[2026-02-02T06:57:40.045Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, v0 at vercel
🚫 Skipping blacklisted job: Regional Sales Director, Enterprise Select-South East US at samsara
🚫 Skipping blacklisted job: Customer Success Manager - Denver at datadog
[2026-02-02T06:57:40.045Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Mid-Market (B2B Services)  at reddit
🚫 Skipping blacklisted job: Product Marketing Lead, PEO at gusto
🚫 Skipping blacklisted job: Manager II, Engineering - Runtime at datadog
[2026-02-02T06:57:40.045Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Serverless Monitoring) at datadog
🚫 Skipping blacklisted job: Director of Engineering, v0 at vercel
🚫 Skipping blacklisted job: Business Value Manager - Enterprise East at datadog
[2026-02-02T06:57:40.046Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
[2026-02-02T06:57:40.083Z] [BOT] ✅ Loaded pending queue: 551 total (501 pending, 50 enriched, 0 posted)
[2026-02-02T06:57:40.138Z] [BOT] ✅ Saved pending queue: 502 total (501 pending, 1 enriched, 0 posted)
[2026-02-02T06:57:40.139Z] [BOT] 🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T06:57:40.139Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T06:57:40.139Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T06:57:40.140Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T06:57:40.140Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-02T06:57:40.140Z] [BOT] Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T06:57:40.140Z] [BOT] 💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T06:57:40.181Z] [BOT] ✅ Loaded V2 database: 2215 jobs
💾 DISK STATE: 2215 jobs on disk
[2026-02-02T06:57:40.182Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T06:57:40.187Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T06:57:40.187Z] [BOT] 💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T06:57:40.189Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T06:57:40.324Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T06:57:40.325Z] [BOT] ✅ Database saved successfully
[2026-02-02T06:57:40.325Z] [BOT ERROR] (node:2641) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T06:57:42.348Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2641) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*