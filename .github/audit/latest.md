# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T01:44:20.177Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T01:44:15.415Z] ========================================
[2026-02-02T01:44:15.417Z] Discord Bot Execution Log
[2026-02-02T01:44:15.417Z] Environment: GitHub Actions
[2026-02-02T01:44:15.417Z] Node Version: v20.20.0
[2026-02-02T01:44:15.417Z] ========================================
[2026-02-02T01:44:15.417Z] Environment Variables Check:
[2026-02-02T01:44:15.417Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T01:44:15.417Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T01:44:15.417Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T01:44:15.417Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T01:44:15.417Z] 
Multi-Channel Configuration:
[2026-02-02T01:44:15.417Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T01:44:15.418Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:44:15.418Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:44:15.418Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T01:44:15.418Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:44:15.418Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:44:15.418Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:44:15.418Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:44:15.418Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T01:44:15.418Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T01:44:15.418Z] 
Data Files Check:
[2026-02-02T01:44:15.419Z] .github/data/new_jobs.json: ✅ Exists (10 items, 173270 bytes)
[2026-02-02T01:44:15.476Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11148180 bytes)
[2026-02-02T01:44:15.476Z] 
========================================
[2026-02-02T01:44:15.476Z] Starting Enhanced Discord Bot...
[2026-02-02T01:44:15.476Z] ========================================
[2026-02-02T01:44:16.053Z] [BOT] ✅ Loaded V2 database: 2215 jobs
[2026-02-02T01:44:16.818Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T01:44:16.819Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T01:44:16.819Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T01:44:16.865Z] [BOT] ✅ Loaded pending queue: 728 total (678 pending, 50 enriched, 0 posted)
[2026-02-02T01:44:16.866Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T01:44:16.867Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T01:44:16.867Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T01:44:16.867Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T01:44:16.886Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T01:44:16.886Z] [BOT] 🚫 Skipping blacklisted job: Process and Controls Financial Manager at gusto
[2026-02-02T01:44:16.886Z] [BOT] 🚫 Skipping blacklisted job: Expansion Account Manager  at gusto
🚫 Skipping blacklisted job: Principal Software Engineer - Payroll at gusto
🚫 Skipping blacklisted job: Corporate Development & Partnerships Deal Lead at gusto
[2026-02-02T01:44:16.887Z] [BOT] 🚫 Skipping blacklisted job: Software Engineering Manager, Symmetry  at gusto
🚫 Skipping blacklisted job: Manager, Partner Product and Delivery at spotify
🚫 Skipping blacklisted job: Associate Product Manager Intern at coinbase
🚫 Skipping blacklisted job: Engineering Manager, Salesforce at brex
[2026-02-02T01:44:16.887Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Salesforce at brex
[2026-02-02T01:44:16.887Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, GTM Engineering  at brex
🚫 Skipping blacklisted job: Engineering Manager, GTM Engineering  at brex
🚫 Skipping blacklisted job: Engineering Manager, GTM Engineering  at brex
🚫 Skipping blacklisted job: Staff Economist at brex
🚫 Skipping blacklisted job: Senior Engineering Manager, Activation at brex
🚫 Skipping blacklisted job: BizOps Lead, BD at brex
🚫 Skipping blacklisted job: Community Marketing Manager - Figma Weave (New York, United States)  at figma
🚫 Skipping blacklisted job: Quality Engineer - Principal Quality Engineer at Northrop Grumman
[2026-02-02T01:44:16.887Z] [BOT] 🚫 Skipping blacklisted job: Strategic Program Manager, Contingent Workforce at figma
🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
🚫 Skipping blacklisted job: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-02-02T01:44:16.887Z] [BOT] 🚫 Skipping blacklisted job: Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Principal Engineer System Protection at Berkshire Hathaway Energy
🚫 Skipping blacklisted job: Senior Contracts Manager, Procurement and AI at airtable
🚫 Skipping blacklisted job: Tax Director at brex
🚫 Skipping blacklisted job: Tax Director at brex
[2026-02-02T01:44:16.887Z] [BOT] 🚫 Skipping blacklisted job: GTM Strategy Manager  at figma
[2026-02-02T01:44:16.887Z] [BOT] 🚫 Skipping blacklisted job: Director, Product Marketing  at figma
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Director's Fellowship Postdoctoral Researcher at National Renewable Energy Laboratory
[2026-02-02T01:44:16.888Z] [BOT] 🚫 Skipping blacklisted job: Senior Backend Developer at Gallup
🚫 Skipping blacklisted job: Director of Sales, Scaled Vendor Sales at spotify
🚫 Skipping blacklisted job: Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence at Prairie View A&M University
🚫 Skipping blacklisted job: Sales Enablement Manager  at figma
[2026-02-02T01:44:16.888Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer at Oracle
🚫 Skipping blacklisted job: People Analytics Lead at airtable
🚫 Skipping blacklisted job: Product Manager, AI at airtable
🚫 Skipping blacklisted job: Product Manager, Omni Analysis & Q&A at airtable
🚫 Skipping blacklisted job: Scaled Customer Success Manager at airtable
[2026-02-02T01:44:16.888Z] [BOT] 🚫 Skipping blacklisted job: Senior Enterprise Marketing Manager at airtable
🚫 Skipping blacklisted job: Senior Manager, Finance Systems at airtable
🚫 Skipping blacklisted job: Senior Manager, People Systems at airtable
🚫 Skipping blacklisted job: Legal Operations Lead, CLM & Technology at figma
[2026-02-02T01:44:16.888Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Music Label Deal Analysis - FP&A at spotify
🚫 Skipping blacklisted job: Senior Technical Revenue Manager at figma
🚫 Skipping blacklisted job: Senior Data Scientist at Walmart
🚫 Skipping blacklisted job: Data Insight Analyst - Principal Data Insight Analyst at Northrop Grumman
🚫 Skipping blacklisted job: Strategic Program Manager at figma
🚫 Skipping blacklisted job: Manager, Figma for Education  at figma
🚫 Skipping blacklisted job: Staff Economist at brex
🚫 Skipping blacklisted job: Compliance Manager, Customer Trust & Third Party Risk at figma
[2026-02-02T01:44:16.930Z] [BOT] ✅ Loaded pending queue: 728 total (678 pending, 50 enriched, 0 posted)
[2026-02-02T01:44:17.012Z] [BOT] ✅ Saved pending queue: 679 total (678 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-02T01:44:17.012Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T01:44:17.012Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T01:44:17.012Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T01:44:17.013Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T01:44:17.013Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T01:44:17.013Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-02T01:44:17.014Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T01:44:17.014Z] [BOT] 💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T01:44:17.060Z] [BOT] ✅ Loaded V2 database: 2215 jobs
💾 DISK STATE: 2215 jobs on disk
[2026-02-02T01:44:17.061Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T01:44:17.066Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T01:44:17.066Z] [BOT] 💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T01:44:17.067Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T01:44:17.207Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T01:44:17.208Z] [BOT] ✅ Database saved successfully
[2026-02-02T01:44:17.208Z] [BOT ERROR] (node:3474) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T01:44:19.233Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3474) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*