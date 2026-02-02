# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T12:30:26.122Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T12:30:21.092Z] ========================================
[2026-02-02T12:30:21.093Z] Discord Bot Execution Log
[2026-02-02T12:30:21.094Z] Environment: GitHub Actions
[2026-02-02T12:30:21.094Z] Node Version: v20.20.0
[2026-02-02T12:30:21.094Z] ========================================
[2026-02-02T12:30:21.094Z] Environment Variables Check:
[2026-02-02T12:30:21.094Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T12:30:21.094Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T12:30:21.094Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T12:30:21.094Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T12:30:21.094Z] 
Multi-Channel Configuration:
[2026-02-02T12:30:21.094Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T12:30:21.095Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:30:21.095Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:30:21.095Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T12:30:21.095Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:30:21.095Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:30:21.095Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:30:21.095Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:30:21.095Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:30:21.095Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T12:30:21.095Z] 
Data Files Check:
[2026-02-02T12:30:21.096Z] .github/data/new_jobs.json: ✅ Exists (10 items, 128552 bytes)
[2026-02-02T12:30:21.153Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11214263 bytes)
[2026-02-02T12:30:21.153Z] 
========================================
[2026-02-02T12:30:21.153Z] Starting Enhanced Discord Bot...
[2026-02-02T12:30:21.153Z] ========================================
[2026-02-02T12:30:21.712Z] [BOT] ✅ Loaded V2 database: 2225 jobs
[2026-02-02T12:30:22.379Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T12:30:22.379Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T12:30:22.380Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T12:30:22.401Z] [BOT] ✅ Loaded pending queue: 339 total (289 pending, 50 enriched, 0 posted)
[2026-02-02T12:30:22.402Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T12:30:22.403Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T12:30:22.403Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T12:30:22.421Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T12:30:22.422Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-02T12:30:22.422Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee at Argonne National Laboratory
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
[2026-02-02T12:30:22.422Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-02T12:30:22.422Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-02-02T12:30:22.422Z] [BOT] 🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
[2026-02-02T12:30:22.422Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
[2026-02-02T12:30:22.423Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-02-02T12:30:22.423Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
[2026-02-02T12:30:22.423Z] [BOT] 🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
[2026-02-02T12:30:22.423Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Senior Analyst - Enterprise Field Tools at AbbVie
[2026-02-02T12:30:22.423Z] [BOT] 🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
[2026-02-02T12:30:22.423Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
[2026-02-02T12:30:22.423Z] [BOT] 🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
[2026-02-02T12:30:22.423Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
🚫 Skipping blacklisted job: Operations Manager, Communications  at anthropic
🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
[2026-02-02T12:30:22.423Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager - Boston at datadog
🚫 Skipping blacklisted job: Senior Principal Revenue Analyst at gusto
🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
[2026-02-02T12:30:22.451Z] [BOT] ✅ Loaded pending queue: 339 total (289 pending, 50 enriched, 0 posted)
[2026-02-02T12:30:22.485Z] [BOT] ✅ Saved pending queue: 290 total (289 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-02T12:30:22.486Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T12:30:22.486Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T12:30:22.486Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T12:30:22.487Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T12:30:22.487Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T12:30:22.487Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-02T12:30:22.487Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-02T12:30:22.487Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T12:30:22.487Z] [BOT] 💾 BEFORE MERGE: 2225 jobs in memory (cached)
[2026-02-02T12:30:22.530Z] [BOT] ✅ Loaded V2 database: 2225 jobs
💾 DISK STATE: 2225 jobs on disk
[2026-02-02T12:30:22.531Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2225
[2026-02-02T12:30:22.536Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T12:30:22.536Z] [BOT] 💾 AFTER MERGE: 2225 jobs (merged disk + memory)
[2026-02-02T12:30:22.538Z] [BOT] ✅ No jobs to archive (all 2225 jobs within 7-day window)
[2026-02-02T12:30:22.669Z] [BOT] 💾 Saved posted_jobs.json: 2225 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T12:30:22.670Z] [BOT] ✅ Database saved successfully
[2026-02-02T12:30:22.670Z] [BOT ERROR] (node:2598) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T12:30:24.692Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2598) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*