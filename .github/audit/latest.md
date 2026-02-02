# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T07:56:21.060Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T07:56:16.327Z] ========================================
[2026-02-02T07:56:16.329Z] Discord Bot Execution Log
[2026-02-02T07:56:16.329Z] Environment: GitHub Actions
[2026-02-02T07:56:16.329Z] Node Version: v20.20.0
[2026-02-02T07:56:16.329Z] ========================================
[2026-02-02T07:56:16.329Z] Environment Variables Check:
[2026-02-02T07:56:16.329Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T07:56:16.330Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T07:56:16.330Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T07:56:16.330Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T07:56:16.330Z] 
Multi-Channel Configuration:
[2026-02-02T07:56:16.330Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T07:56:16.330Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:56:16.330Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:56:16.330Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T07:56:16.330Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:56:16.330Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:56:16.331Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:56:16.331Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:56:16.331Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:56:16.331Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T07:56:16.331Z] 
Data Files Check:
[2026-02-02T07:56:16.332Z] .github/data/new_jobs.json: ✅ Exists (10 items, 172744 bytes)
[2026-02-02T07:56:16.393Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11148180 bytes)
[2026-02-02T07:56:16.393Z] 
========================================
[2026-02-02T07:56:16.393Z] Starting Enhanced Discord Bot...
[2026-02-02T07:56:16.393Z] ========================================
[2026-02-02T07:56:16.965Z] [BOT] ✅ Loaded V2 database: 2215 jobs
[2026-02-02T07:56:17.533Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T07:56:17.533Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T07:56:17.533Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T07:56:17.573Z] [BOT] ✅ Loaded pending queue: 496 total (446 pending, 50 enriched, 0 posted)
[2026-02-02T07:56:17.573Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T07:56:17.574Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T07:56:17.574Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T07:56:17.593Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T07:56:17.593Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-02T07:56:17.593Z] [BOT] 🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
[2026-02-02T07:56:17.593Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
[2026-02-02T07:56:17.594Z] [BOT] 🚫 Skipping blacklisted job: Brand Marketing Director at gusto
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Staff Applied Scientist - Observability Data Platform at datadog
[2026-02-02T07:56:17.594Z] [BOT] 🚫 Skipping blacklisted job: Staff Applied Scientist - Observability Data Platform at datadog
[2026-02-02T07:56:17.594Z] [BOT] 🚫 Skipping blacklisted job: Senior Atlassian Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Senior Counsel, Corporate & M&A at datadog
🚫 Skipping blacklisted job: Senior Customer Data Scientist at datadog
[2026-02-02T07:56:17.594Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Product Design at datadog
🚫 Skipping blacklisted job: Senior Enablement Manager, Emerging Technology at datadog
🚫 Skipping blacklisted job: Senior Field Enablement Manager - Leadership Development at datadog
🚫 Skipping blacklisted job: Senior FP&A Analyst - NYC at datadog
🚫 Skipping blacklisted job: Senior Manager, People Business Partner - NYC at datadog
[2026-02-02T07:56:17.594Z] [BOT] 🚫 Skipping blacklisted job: Senior Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior Product Manager - Cost and Usage Experience at datadog
🚫 Skipping blacklisted job: Senior Product Manager - Database AI Optimization at datadog
[2026-02-02T07:56:17.594Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager (AI Security) at datadog
[2026-02-02T07:56:17.594Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager (Cloud Cost Management) at datadog
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts (West) at datadog
🚫 Skipping blacklisted job: Senior Security Engineer, Data Security at datadog
[2026-02-02T07:56:17.594Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Engineer - Threat Detection Engineering at datadog
🚫 Skipping blacklisted job: Senior Software Engineer  at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - AI Code Gen - Agent Engineer at datadog
[2026-02-02T07:56:17.595Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Frontend at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - IDE AI Experiences - LLM Engineer at datadog
🚫 Skipping blacklisted job: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) at datadog
[2026-02-02T07:56:17.595Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Software Engineer  at datadog
🚫 Skipping blacklisted job: Senior Tax Accountant - NYC at datadog
🚫 Skipping blacklisted job: Senior Technical Program Manager, Knowledge Systems at datadog
🚫 Skipping blacklisted job: Staff GenAI Engineer - Application Performance Monitoring (APM) at datadog
🚫 Skipping blacklisted job: Staff Software Engineer at datadog
🚫 Skipping blacklisted job: Staff Software Engineer - Frontend at datadog
🚫 Skipping blacklisted job: Staff Software Engineer - ML Observability at datadog
[2026-02-02T07:56:17.595Z] [BOT] 🚫 Skipping blacklisted job: Staff Statistics Engineer - Feature Flagging and Experimentation at datadog
🚫 Skipping blacklisted job: Senior Growth Marketing Manager, Builders at airtable
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-02T07:56:17.595Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Technical Documentation Specialist, Claude Developer Platform at anthropic
[2026-02-02T07:56:17.595Z] [BOT] 🚫 Skipping blacklisted job: Education Platform Engineering Lead at anthropic
[2026-02-02T07:56:17.629Z] [BOT] ✅ Loaded pending queue: 496 total (446 pending, 50 enriched, 0 posted)
[2026-02-02T07:56:17.680Z] [BOT] ✅ Saved pending queue: 447 total (446 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T07:56:17.680Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T07:56:17.681Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-02T07:56:17.681Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T07:56:17.681Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T07:56:17.681Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-02T07:56:17.682Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T07:56:17.682Z] [BOT] 💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T07:56:17.723Z] [BOT] ✅ Loaded V2 database: 2215 jobs
[2026-02-02T07:56:17.724Z] [BOT] 💾 DISK STATE: 2215 jobs on disk
[2026-02-02T07:56:17.724Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T07:56:17.729Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T07:56:17.729Z] [BOT] 💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T07:56:17.731Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T07:56:17.884Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T07:56:17.885Z] [BOT] ✅ Database saved successfully
[2026-02-02T07:56:17.885Z] [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T07:56:19.910Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*