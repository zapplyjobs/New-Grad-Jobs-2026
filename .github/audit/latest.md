# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T07:31:54.886Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T07:31:49.893Z] ========================================
[2026-02-02T07:31:49.895Z] Discord Bot Execution Log
[2026-02-02T07:31:49.895Z] Environment: GitHub Actions
[2026-02-02T07:31:49.896Z] Node Version: v20.20.0
[2026-02-02T07:31:49.896Z] ========================================
[2026-02-02T07:31:49.896Z] Environment Variables Check:
[2026-02-02T07:31:49.896Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T07:31:49.896Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T07:31:49.896Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T07:31:49.896Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T07:31:49.896Z] 
Multi-Channel Configuration:
[2026-02-02T07:31:49.897Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T07:31:49.897Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:31:49.897Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:31:49.897Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T07:31:49.897Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:31:49.897Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:31:49.897Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:31:49.897Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:31:49.897Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T07:31:49.897Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T07:31:49.897Z] 
Data Files Check:
[2026-02-02T07:31:49.899Z] .github/data/new_jobs.json: ✅ Exists (10 items, 176042 bytes)
[2026-02-02T07:31:49.956Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11148180 bytes)
[2026-02-02T07:31:49.956Z] 
========================================
[2026-02-02T07:31:49.956Z] Starting Enhanced Discord Bot...
[2026-02-02T07:31:49.956Z] ========================================
[2026-02-02T07:31:50.529Z] [BOT] ✅ Loaded V2 database: 2215 jobs
[2026-02-02T07:31:51.143Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T07:31:51.144Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T07:31:51.144Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T07:31:51.184Z] [BOT] ✅ Loaded pending queue: 530 total (480 pending, 50 enriched, 0 posted)
[2026-02-02T07:31:51.184Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T07:31:51.185Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T07:31:51.185Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T07:31:51.185Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T07:31:51.203Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T07:31:51.203Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
[2026-02-02T07:31:51.204Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
🚫 Skipping blacklisted job: Senior Product Manager - Notebooks at datadog
[2026-02-02T07:31:51.204Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Flex Logs at datadog
🚫 Skipping blacklisted job: Customer Success Manager - Boston (Portuguese-speaking) at datadog
🚫 Skipping blacklisted job: Datadog for Startups Engineering Lead at datadog
[2026-02-02T07:31:51.204Z] [BOT] 🚫 Skipping blacklisted job: Datadog for Startups Lead at datadog
🚫 Skipping blacklisted job: Director, Pricing and Monetization at datadog
[2026-02-02T07:31:51.204Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales Field Enablement - NYC at datadog
🚫 Skipping blacklisted job: Director, Security Sales Engineering at datadog
🚫 Skipping blacklisted job: Director, Technical Product Partnerships at datadog
🚫 Skipping blacklisted job: Enablement Operations Senior Associate at datadog
🚫 Skipping blacklisted job: Engineering Manager I - Cyber Threat Intelligence at datadog
[2026-02-02T07:31:51.204Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Denver at datadog
🚫 Skipping blacklisted job: Field Marketing Manager (LATAM South) at datadog
🚫 Skipping blacklisted job: Global Safety & Security Senior Manager - NYC at datadog
🚫 Skipping blacklisted job: GTM Strategy and Operations Senior Associate - AMER Commercial & Mid Market at datadog
[2026-02-02T07:31:51.204Z] [BOT] 🚫 Skipping blacklisted job: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
🚫 Skipping blacklisted job: Leadership Training Manager at datadog
🚫 Skipping blacklisted job: Lead UX Designer - New York at datadog
[2026-02-02T07:31:51.204Z] [BOT] 🚫 Skipping blacklisted job: Manager 1, Technical Account Management - Denver at datadog
[2026-02-02T07:31:51.205Z] [BOT] 🚫 Skipping blacklisted job: Manager 1, Technical Account Management - New York at datadog
🚫 Skipping blacklisted job: Manager 1, Technical Escalations Engineering - US-East at datadog
[2026-02-02T07:31:51.205Z] [BOT] 🚫 Skipping blacklisted job: Manager 2, Premier Support Engineering -  Boston at datadog
🚫 Skipping blacklisted job: Manager, Commercial Sales Engineering (AMER - East) at datadog
🚫 Skipping blacklisted job: Manager, Commercial Sales Engineering (AMER - West) at datadog
🚫 Skipping blacklisted job: Manager, Customer Success - Denver at datadog
[2026-02-02T07:31:51.205Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Developer Advocacy at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Cloud Security - Findings Prioritization at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Infrastructure Remediation at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Language Platform at datadog
🚫 Skipping blacklisted job: Manager II, Engineering - Bits AI Security Analyst at datadog
🚫 Skipping blacklisted job: Manager, Networking at datadog
🚫 Skipping blacklisted job: Manager, People Analytics Data Platform at datadog
[2026-02-02T07:31:51.205Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Manager (Public Sector) at datadog
🚫 Skipping blacklisted job: Principal Partner Manager - Cloud Alliances (AWS) at datadog
🚫 Skipping blacklisted job: Product Manager II - Incident Management at datadog
🚫 Skipping blacklisted job: Product Manager II - Software Delivery Suite at datadog
🚫 Skipping blacklisted job: Senior AI Engineer - APM Experiences at datadog
[2026-02-02T07:31:51.205Z] [BOT] 🚫 Skipping blacklisted job: Senior Associate, Sales Enablement Operations at datadog
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-02T07:31:51.205Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-02T07:31:51.206Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-02T07:31:51.239Z] [BOT] ✅ Loaded pending queue: 530 total (480 pending, 50 enriched, 0 posted)
[2026-02-02T07:31:51.291Z] [BOT] ✅ Saved pending queue: 481 total (480 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-02T07:31:51.291Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T07:31:51.292Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T07:31:51.292Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T07:31:51.293Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T07:31:51.293Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T07:31:51.293Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-02T07:31:51.293Z] [BOT] [STATS] Channel stats saved
[2026-02-02T07:31:51.293Z] [BOT] 💾 Saving posted jobs database...
[2026-02-02T07:31:51.294Z] [BOT] 💾 BEFORE MERGE: 2215 jobs in memory (cached)
[2026-02-02T07:31:51.334Z] [BOT] ✅ Loaded V2 database: 2215 jobs
💾 DISK STATE: 2215 jobs on disk
[2026-02-02T07:31:51.335Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2215
[2026-02-02T07:31:51.340Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T07:31:51.340Z] [BOT] 💾 AFTER MERGE: 2215 jobs (merged disk + memory)
[2026-02-02T07:31:51.341Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-02-02T07:31:51.464Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T07:31:51.464Z] [BOT ERROR] (node:3099) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T07:31:53.487Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3099) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*