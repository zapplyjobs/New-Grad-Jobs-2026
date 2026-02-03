# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T06:12:37.635Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T06:12:31.381Z] ========================================
[2026-02-03T06:12:31.383Z] Discord Bot Execution Log
[2026-02-03T06:12:31.383Z] Environment: GitHub Actions
[2026-02-03T06:12:31.383Z] Node Version: v20.20.0
[2026-02-03T06:12:31.383Z] ========================================
[2026-02-03T06:12:31.383Z] Environment Variables Check:
[2026-02-03T06:12:31.383Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T06:12:31.383Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T06:12:31.383Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T06:12:31.383Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T06:12:31.384Z] 
Multi-Channel Configuration:
[2026-02-03T06:12:31.384Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T06:12:31.384Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T06:12:31.384Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T06:12:31.384Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T06:12:31.384Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T06:12:31.384Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T06:12:31.384Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T06:12:31.384Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T06:12:31.384Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T06:12:31.384Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T06:12:31.384Z] 
Data Files Check:
[2026-02-03T06:12:31.385Z] .github/data/new_jobs.json: ✅ Exists (10 items, 138109 bytes)
[2026-02-03T06:12:31.443Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11329063 bytes)
[2026-02-03T06:12:31.443Z] 
========================================
[2026-02-03T06:12:31.443Z] Starting Enhanced Discord Bot...
[2026-02-03T06:12:31.444Z] ========================================
[2026-02-03T06:12:32.005Z] [BOT] ✅ Loaded V2 database: 2244 jobs
[2026-02-03T06:12:34.122Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T06:12:34.123Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T06:12:34.123Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T06:12:34.144Z] [BOT] ✅ Loaded pending queue: 323 total (273 pending, 50 enriched, 0 posted)
[2026-02-03T06:12:34.144Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T06:12:34.146Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T06:12:34.146Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T06:12:34.146Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T06:12:34.165Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T06:12:34.165Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager at reddit
[2026-02-03T06:12:34.165Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-03T06:12:34.165Z] [BOT] 🚫 Skipping blacklisted job: Senior AI Engineering Manager at duolingo
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-02-03T06:12:34.165Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
[2026-02-03T06:12:34.166Z] [BOT] 🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
[2026-02-03T06:12:34.166Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Services at anthropic
[2026-02-03T06:12:34.166Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Public Policy, Events Lead at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
[2026-02-03T06:12:34.166Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
🚫 Skipping blacklisted job: Senior Manager, Product Data Science  at gusto
[2026-02-03T06:12:34.166Z] [BOT] 🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Product Design Manager, Engagement at discord
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
[2026-02-03T06:12:34.167Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-03T06:12:34.167Z] [BOT] 🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
[2026-02-03T06:12:34.167Z] [BOT] 🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
[2026-02-03T06:12:34.167Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
[2026-02-03T06:12:34.194Z] [BOT] ✅ Loaded pending queue: 323 total (273 pending, 50 enriched, 0 posted)
[2026-02-03T06:12:34.227Z] [BOT] ✅ Saved pending queue: 274 total (273 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-03T06:12:34.227Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T06:12:34.228Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T06:12:34.228Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T06:12:34.228Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 50
[2026-02-03T06:12:34.228Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T06:12:34.228Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-03T06:12:34.229Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-03T06:12:34.229Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T06:12:34.229Z] [BOT] 💾 BEFORE MERGE: 2244 jobs in memory (cached)
[2026-02-03T06:12:34.272Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-03T06:12:34.273Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2244
[2026-02-03T06:12:34.278Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T06:12:34.278Z] [BOT] 💾 AFTER MERGE: 2244 jobs (merged disk + memory)
[2026-02-03T06:12:34.279Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-02-03T06:12:34.409Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
[2026-02-03T06:12:34.411Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T06:12:34.411Z] [BOT ERROR] (node:3342) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T06:12:36.432Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3342) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*