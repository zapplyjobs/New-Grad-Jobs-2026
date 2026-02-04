# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T09:23:50.844Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T09:23:46.626Z] ========================================
[2026-02-04T09:23:46.628Z] Discord Bot Execution Log
[2026-02-04T09:23:46.629Z] Environment: GitHub Actions
[2026-02-04T09:23:46.629Z] Node Version: v20.20.0
[2026-02-04T09:23:46.629Z] ========================================
[2026-02-04T09:23:46.629Z] Environment Variables Check:
[2026-02-04T09:23:46.629Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T09:23:46.629Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T09:23:46.629Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T09:23:46.629Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T09:23:46.629Z] 
Multi-Channel Configuration:
[2026-02-04T09:23:46.629Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T09:23:46.630Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:23:46.630Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:23:46.630Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T09:23:46.630Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:23:46.630Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:23:46.630Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:23:46.630Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:23:46.630Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T09:23:46.630Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T09:23:46.630Z] 
Data Files Check:
[2026-02-04T09:23:46.631Z] .github/data/new_jobs.json: ✅ Exists (10 items, 200707 bytes)
[2026-02-04T09:23:46.697Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T09:23:46.697Z] 
========================================
[2026-02-04T09:23:46.697Z] Starting Enhanced Discord Bot...
[2026-02-04T09:23:46.697Z] ========================================
[2026-02-04T09:23:47.291Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T09:23:47.729Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T09:23:47.730Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T09:23:47.730Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T09:23:47.751Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T09:23:47.751Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T09:23:47.752Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T09:23:47.752Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T09:23:47.753Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-04T09:23:47.753Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T09:23:47.772Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T09:23:47.773Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
[2026-02-04T09:23:47.773Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
[2026-02-04T09:23:47.773Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
[2026-02-04T09:23:47.773Z] [BOT] 🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
[2026-02-04T09:23:47.773Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
[2026-02-04T09:23:47.773Z] [BOT] 🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
[2026-02-04T09:23:47.773Z] [BOT] 🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
[2026-02-04T09:23:47.773Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
[2026-02-04T09:23:47.774Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
[2026-02-04T09:23:47.774Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
[2026-02-04T09:23:47.774Z] [BOT] 🚫 Skipping blacklisted job: Directors, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-04T09:23:47.774Z] [BOT] 🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
[2026-02-04T09:23:47.774Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-04T09:23:47.774Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
[2026-02-04T09:23:47.774Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
[2026-02-04T09:23:47.774Z] [BOT] 🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
[2026-02-04T09:23:47.775Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-04T09:23:47.802Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T09:23:47.837Z] [BOT] ✅ Saved pending queue: 263 total (261 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-04T09:23:47.838Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T09:23:47.839Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-04T09:23:47.839Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T09:23:47.839Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T09:23:47.839Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-04T09:23:47.839Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T09:23:47.839Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T09:23:47.840Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T09:23:47.883Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T09:23:47.884Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T09:23:47.889Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T09:23:47.890Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T09:23:47.891Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T09:23:48.048Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T09:23:48.048Z] [BOT ERROR] (node:2451) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T09:23:50.071Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2451) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*