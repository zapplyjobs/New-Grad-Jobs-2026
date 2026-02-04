# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T11:21:50.836Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T11:21:46.366Z] ========================================
[2026-02-04T11:21:46.368Z] Discord Bot Execution Log
[2026-02-04T11:21:46.368Z] Environment: GitHub Actions
[2026-02-04T11:21:46.369Z] Node Version: v20.20.0
[2026-02-04T11:21:46.369Z] ========================================
[2026-02-04T11:21:46.369Z] Environment Variables Check:
[2026-02-04T11:21:46.369Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T11:21:46.369Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T11:21:46.369Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T11:21:46.369Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T11:21:46.369Z] 
Multi-Channel Configuration:
[2026-02-04T11:21:46.369Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T11:21:46.369Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:21:46.369Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:21:46.370Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T11:21:46.370Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:21:46.370Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:21:46.370Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:21:46.370Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:21:46.370Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:21:46.370Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T11:21:46.370Z] 
Data Files Check:
[2026-02-04T11:21:46.371Z] .github/data/new_jobs.json: ✅ Exists (10 items, 164135 bytes)
[2026-02-04T11:21:46.432Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T11:21:46.432Z] 
========================================
[2026-02-04T11:21:46.432Z] Starting Enhanced Discord Bot...
[2026-02-04T11:21:46.432Z] ========================================
[2026-02-04T11:21:47.020Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T11:21:47.663Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T11:21:47.664Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T11:21:47.664Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T11:21:47.685Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T11:21:47.685Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T11:21:47.686Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T11:21:47.686Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T11:21:47.687Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T11:21:47.687Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T11:21:47.687Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T11:21:47.705Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T11:21:47.705Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-04T11:21:47.705Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
[2026-02-04T11:21:47.705Z] [BOT] 🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-04T11:21:47.706Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-04T11:21:47.706Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
[2026-02-04T11:21:47.706Z] [BOT] 🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
[2026-02-04T11:21:47.706Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
[2026-02-04T11:21:47.706Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
[2026-02-04T11:21:47.706Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
[2026-02-04T11:21:47.706Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
[2026-02-04T11:21:47.706Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
[2026-02-04T11:21:47.706Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
[2026-02-04T11:21:47.707Z] [BOT] 🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
[2026-02-04T11:21:47.707Z] [BOT] 🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-02-04T11:21:47.707Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
[2026-02-04T11:21:47.707Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-04T11:21:47.707Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-04T11:21:47.707Z] [BOT] 🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
[2026-02-04T11:21:47.734Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T11:21:47.768Z] [BOT] ✅ Saved pending queue: 263 total (261 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-04T11:21:47.768Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T11:21:47.769Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T11:21:47.769Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T11:21:47.769Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T11:21:47.770Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T11:21:47.770Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-04T11:21:47.770Z] [BOT] Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T11:21:47.770Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T11:21:47.814Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T11:21:47.815Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T11:21:47.820Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T11:21:47.820Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T11:21:47.822Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T11:21:47.960Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T11:21:47.960Z] [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T11:21:49.982Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*