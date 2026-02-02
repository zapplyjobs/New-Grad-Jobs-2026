# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T03:48:35.750Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T03:48:31.527Z] ========================================
[2026-02-02T03:48:31.529Z] Discord Bot Execution Log
[2026-02-02T03:48:31.529Z] Environment: GitHub Actions
[2026-02-02T03:48:31.529Z] Node Version: v20.20.0
[2026-02-02T03:48:31.529Z] ========================================
[2026-02-02T03:48:31.530Z] Environment Variables Check:
[2026-02-02T03:48:31.530Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T03:48:31.530Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T03:48:31.530Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T03:48:31.530Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T03:48:31.530Z] 
Multi-Channel Configuration:
[2026-02-02T03:48:31.530Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T03:48:31.531Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T03:48:31.531Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T03:48:31.531Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T03:48:31.531Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T03:48:31.531Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T03:48:31.531Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T03:48:31.531Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T03:48:31.531Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T03:48:31.531Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T03:48:31.531Z] 
Data Files Check:
[2026-02-02T03:48:31.532Z] .github/data/new_jobs.json: ✅ Exists (10 items, 139047 bytes)
[2026-02-02T03:48:31.590Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11148180 bytes)
[2026-02-02T03:48:31.590Z] 
========================================
[2026-02-02T03:48:31.591Z] Starting Enhanced Discord Bot...
[2026-02-02T03:48:31.591Z] ========================================
[2026-02-02T03:48:32.187Z] [BOT] ✅ Loaded V2 database: 2215 jobs
[2026-02-02T03:48:32.549Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-02T03:48:32.549Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T03:48:32.549Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T03:48:32.593Z] [BOT] ✅ Loaded pending queue: 575 total (525 pending, 50 enriched, 0 posted)
[2026-02-02T03:48:32.593Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T03:48:32.594Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T03:48:32.594Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T03:48:32.614Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T03:48:32.614Z] [BOT] 🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-02T03:48:32.614Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-02T03:48:32.614Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
[2026-02-02T03:48:32.615Z] [BOT] 🚫 Skipping blacklisted job: Senior Analyst - Enterprise Field Tools at AbbVie
🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
[2026-02-02T03:48:32.615Z] [BOT] 🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
[2026-02-02T03:48:32.615Z] [BOT] 🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Public Policy, Events Lead at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
[2026-02-02T03:48:32.615Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
[2026-02-02T03:48:32.615Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
[2026-02-02T03:48:32.616Z] [BOT] 🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
🚫 Skipping blacklisted job: Technical Enterprise Client Success Manager - Symmetry at gusto
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Staff Software Engineer, Database Infrastructure at gusto
[2026-02-02T03:48:32.616Z] [BOT] 🚫 Skipping blacklisted job: Manager of Sales Engineering, Majors/Commercial - AMER at vercel
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Director, Technical Accounting & Financial Reporting at vercel
🚫 Skipping blacklisted job: Staff Brand Designer, Magic at brex
🚫 Skipping blacklisted job: Senior Machine Learning Engineer at spotify
🚫 Skipping blacklisted job: Principal Research Scientist - Music at spotify
[2026-02-02T03:48:32.616Z] [BOT] 🚫 Skipping blacklisted job: Staff Research Scientist - Music at spotify
🚫 Skipping blacklisted job: Senior Research Scientist - Music at spotify
🚫 Skipping blacklisted job: Senior Staff Machine Learning Engineer at spotify
[2026-02-02T03:48:32.616Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
[2026-02-02T03:48:32.616Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
[2026-02-02T03:48:32.661Z] [BOT] ✅ Loaded pending queue: 575 total (525 pending, 50 enriched, 0 posted)
[2026-02-02T03:48:32.718Z] [BOT] ✅ Saved pending queue: 526 total (525 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T03:48:32.719Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T03:48:32.719Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T03:48:32.719Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T03:48:32.720Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T03:48:32.720Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-02T03:48:32.720Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T03:48:32.721Z] [BOT] 💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T03:48:32.768Z] [BOT] ✅ Loaded V2 database: 2215 jobs
💾 DISK STATE: 2215 jobs on disk
[2026-02-02T03:48:32.769Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T03:48:32.774Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T03:48:32.774Z] [BOT] 💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T03:48:32.776Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T03:48:32.947Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T03:48:32.947Z] [BOT ERROR] (node:3102) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T03:48:34.974Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3102) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*