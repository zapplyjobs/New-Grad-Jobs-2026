# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T23:02:30.316Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T23:02:25.095Z] ========================================
[2026-02-01T23:02:25.097Z] Discord Bot Execution Log
[2026-02-01T23:02:25.097Z] Environment: GitHub Actions
[2026-02-01T23:02:25.097Z] Node Version: v20.20.0
[2026-02-01T23:02:25.097Z] ========================================
[2026-02-01T23:02:25.098Z] Environment Variables Check:
[2026-02-01T23:02:25.098Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T23:02:25.098Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T23:02:25.098Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T23:02:25.098Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T23:02:25.098Z] 
Multi-Channel Configuration:
[2026-02-01T23:02:25.098Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T23:02:25.098Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:02:25.098Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:02:25.098Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T23:02:25.098Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:02:25.098Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:02:25.099Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:02:25.099Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:02:25.099Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T23:02:25.099Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T23:02:25.099Z] 
Data Files Check:
[2026-02-01T23:02:25.100Z] .github/data/new_jobs.json: ✅ Exists (10 items, 165250 bytes)
[2026-02-01T23:02:25.157Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11122164 bytes)
[2026-02-01T23:02:25.157Z] 
========================================
[2026-02-01T23:02:25.157Z] Starting Enhanced Discord Bot...
[2026-02-01T23:02:25.157Z] ========================================
[2026-02-01T23:02:25.723Z] [BOT] ✅ Loaded V2 database: 2212 jobs
[2026-02-01T23:02:26.628Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T23:02:26.629Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T23:02:26.629Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T23:02:26.676Z] [BOT] ✅ Loaded pending queue: 729 total (679 pending, 50 enriched, 0 posted)
[2026-02-01T23:02:26.677Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-01T23:02:26.678Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-01T23:02:26.678Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-01T23:02:26.678Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-01T23:02:26.697Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-01T23:02:26.698Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
🚫 Skipping blacklisted job: Senior Staff Software Engineer at gusto
[2026-02-01T23:02:26.698Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Software Engineer, Payments and Risk at gusto
🚫 Skipping blacklisted job: Director, User Research - Product Design at datadog
🚫 Skipping blacklisted job: Retirement AI Senior Staff Engineer at gusto
🚫 Skipping blacklisted job: Workforce Management Tools Administration Lead at gusto
🚫 Skipping blacklisted job: Workforce Management Program Manager at gusto
🚫 Skipping blacklisted job: Senior Manager, People Systems at vercel
🚫 Skipping blacklisted job: Staff Software Engineer – Cloud Foundations at datadog
🚫 Skipping blacklisted job: Senior Sales Engineer - Backstage at spotify
🚫 Skipping blacklisted job: Staff Product Designer - AI Observability at datadog
🚫 Skipping blacklisted job: Senior Product Design Engineer II at samsara
🚫 Skipping blacklisted job: Senior Manager, Revenue Accounting at gusto
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Manager, Corporate Development at coinbase
[2026-02-01T23:02:26.699Z] [BOT] 🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
[2026-02-01T23:02:26.699Z] [BOT] 🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
[2026-02-01T23:02:26.699Z] [BOT] 🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Services at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
🚫 Skipping blacklisted job: Manager, Commercial Promotion Partnerships at spotify
🚫 Skipping blacklisted job: Associate Director, Monetization Strategy at spotify
🚫 Skipping blacklisted job: Mid-Market Customer Success Manager at brex
[2026-02-01T23:02:26.699Z] [BOT] 🚫 Skipping blacklisted job: Mid-Market Customer Success Manager at brex
🚫 Skipping blacklisted job: Mid-Market Customer Success Manager at brex
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Inference Azure at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
[2026-02-01T23:02:26.699Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
[2026-02-01T23:02:26.699Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
[2026-02-01T23:02:26.700Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
[2026-02-01T23:02:26.744Z] [BOT] ✅ Loaded pending queue: 729 total (679 pending, 50 enriched, 0 posted)
[2026-02-01T23:02:26.817Z] [BOT] ✅ Saved pending queue: 680 total (679 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-01T23:02:26.818Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-01T23:02:26.818Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-01T23:02:26.819Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T23:02:26.819Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-01T23:02:26.819Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-01T23:02:26.819Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T23:02:26.819Z] [BOT] 💾 BEFORE MERGE: 2212 jobs in memory (cached)
[2026-02-01T23:02:26.860Z] [BOT] ✅ Loaded V2 database: 2212 jobs
💾 DISK STATE: 2212 jobs on disk
[2026-02-01T23:02:26.861Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2212
[2026-02-01T23:02:26.866Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T23:02:26.866Z] [BOT] 💾 AFTER MERGE: 2212 jobs (merged disk + memory)
[2026-02-01T23:02:26.867Z] [BOT] ✅ No jobs to archive (all 2212 jobs within 7-day window)
[2026-02-01T23:02:27.000Z] [BOT] 💾 Saved posted_jobs.json: 2212 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T23:02:27.001Z] [BOT ERROR] (node:2781) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T23:02:29.027Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2781) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*