# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T22:33:31.831Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T22:33:27.682Z] ========================================
[2026-02-04T22:33:27.684Z] Discord Bot Execution Log
[2026-02-04T22:33:27.684Z] Environment: GitHub Actions
[2026-02-04T22:33:27.684Z] Node Version: v20.20.0
[2026-02-04T22:33:27.684Z] ========================================
[2026-02-04T22:33:27.684Z] Environment Variables Check:
[2026-02-04T22:33:27.684Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T22:33:27.684Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T22:33:27.684Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T22:33:27.685Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T22:33:27.685Z] 
Multi-Channel Configuration:
[2026-02-04T22:33:27.685Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T22:33:27.685Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:33:27.685Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:33:27.685Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T22:33:27.685Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:33:27.685Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:33:27.685Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:33:27.685Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:33:27.685Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:33:27.685Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T22:33:27.685Z] 
Data Files Check:
[2026-02-04T22:33:27.687Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152731 bytes)
[2026-02-04T22:33:27.746Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11464298 bytes)
[2026-02-04T22:33:27.746Z] 
========================================
[2026-02-04T22:33:27.746Z] Starting Enhanced Discord Bot...
[2026-02-04T22:33:27.746Z] ========================================
[2026-02-04T22:33:28.322Z] [BOT] ✅ Loaded V2 database: 2261 jobs
[2026-02-04T22:33:28.797Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T22:33:28.798Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T22:33:28.798Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T22:33:28.820Z] [BOT] ✅ Loaded pending queue: 326 total (276 pending, 50 enriched, 0 posted)
[2026-02-04T22:33:28.820Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T22:33:28.821Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T22:33:28.821Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T22:33:28.822Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T22:33:28.822Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T22:33:28.822Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T22:33:28.823Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T22:33:28.823Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T22:33:28.823Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-04T22:33:28.823Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-04T22:33:28.840Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-04T22:33:28.841Z] [BOT] 🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
[2026-02-04T22:33:28.841Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-04T22:33:28.841Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-02-04T22:33:28.841Z] [BOT] 🚫 Skipping blacklisted job: Sales Operations Manager at discord
[2026-02-04T22:33:28.841Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-04T22:33:28.841Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
[2026-02-04T22:33:28.841Z] [BOT] 🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
[2026-02-04T22:33:28.842Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
[2026-02-04T22:33:28.842Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
[2026-02-04T22:33:28.842Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
[2026-02-04T22:33:28.842Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-04T22:33:28.842Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-04T22:33:28.842Z] [BOT] 🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
[2026-02-04T22:33:28.842Z] [BOT] 🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
🚫 Skipping blacklisted job: Contracts Manager at anthropic
[2026-02-04T22:33:28.842Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-02-04T22:33:28.842Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
[2026-02-04T22:33:28.842Z] [BOT] 🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
[2026-02-04T22:33:28.843Z] [BOT] 🚫 Skipping blacklisted job: Technical Support Manager  at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
[2026-02-04T22:33:28.843Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Events Content Manager at anthropic
[2026-02-04T22:33:28.843Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Product Design Manager, Engagement at discord
[2026-02-04T22:33:28.843Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
[2026-02-04T22:33:28.843Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-02-04T22:33:28.871Z] [BOT] ✅ Loaded pending queue: 326 total (276 pending, 50 enriched, 0 posted)
[2026-02-04T22:33:28.907Z] [BOT] ✅ Saved pending queue: 280 total (276 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-04T22:33:28.908Z] [BOT] 📋 After blacklist filter: 0 jobs (46 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T22:33:28.908Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T22:33:28.908Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T22:33:28.909Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T22:33:28.909Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T22:33:28.909Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T22:33:28.909Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T22:33:28.910Z] [BOT] 💾 BEFORE MERGE: 2261 jobs in memory (cached)
[2026-02-04T22:33:28.953Z] [BOT] ✅ Loaded V2 database: 2261 jobs
💾 DISK STATE: 2261 jobs on disk
[2026-02-04T22:33:28.954Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2261
[2026-02-04T22:33:28.959Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T22:33:28.959Z] [BOT] 💾 AFTER MERGE: 2261 jobs (merged disk + memory)
[2026-02-04T22:33:28.961Z] [BOT] ✅ No jobs to archive (all 2261 jobs within 7-day window)
[2026-02-04T22:33:29.108Z] [BOT] 💾 Saved posted_jobs.json: 2261 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T22:33:29.108Z] [BOT ERROR] (node:2542) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T22:33:31.132Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2542) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*