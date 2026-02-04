# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T08:36:14.804Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T08:36:02.542Z] ========================================
[2026-02-04T08:36:02.544Z] Discord Bot Execution Log
[2026-02-04T08:36:02.544Z] Environment: GitHub Actions
[2026-02-04T08:36:02.544Z] Node Version: v20.20.0
[2026-02-04T08:36:02.544Z] ========================================
[2026-02-04T08:36:02.544Z] Environment Variables Check:
[2026-02-04T08:36:02.545Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T08:36:02.545Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T08:36:02.545Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T08:36:02.545Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T08:36:02.545Z] 
Multi-Channel Configuration:
[2026-02-04T08:36:02.545Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T08:36:02.545Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:36:02.545Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:36:02.545Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T08:36:02.545Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:36:02.545Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:36:02.546Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:36:02.546Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:36:02.546Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:36:02.546Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T08:36:02.546Z] 
Data Files Check:
[2026-02-04T08:36:02.547Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166997 bytes)
[2026-02-04T08:36:02.606Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11480581 bytes)
[2026-02-04T08:36:02.606Z] 
========================================
[2026-02-04T08:36:02.606Z] Starting Enhanced Discord Bot...
[2026-02-04T08:36:02.606Z] ========================================
[2026-02-04T08:36:03.192Z] [BOT] ✅ Loaded V2 database: 2266 jobs
[2026-02-04T08:36:04.067Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T08:36:04.068Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T08:36:04.068Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T08:36:04.089Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T08:36:04.090Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T08:36:04.091Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T08:36:04.091Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T08:36:04.091Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T08:36:04.092Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T08:36:04.092Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T08:36:04.110Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T08:36:04.110Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
[2026-02-04T08:36:04.110Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
[2026-02-04T08:36:04.111Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
[2026-02-04T08:36:04.111Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-04T08:36:04.111Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
[2026-02-04T08:36:04.111Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
[2026-02-04T08:36:04.111Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
[2026-02-04T08:36:04.111Z] [BOT] 🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployment) at anthropic
[2026-02-04T08:36:04.111Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
[2026-02-04T08:36:04.111Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
[2026-02-04T08:36:04.111Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
[2026-02-04T08:36:04.112Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-04T08:36:04.112Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
[2026-02-04T08:36:04.139Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T08:36:04.173Z] [BOT] ✅ Saved pending queue: 267 total (264 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (47 blacklisted)
[2026-02-04T08:36:04.173Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-04T08:36:04.174Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-04T08:36:04.175Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-04T08:36:04.176Z] [BOT] 📍 [ROUTING] "Data Scientist" @ anthropic
[2026-02-04T08:36:04.177Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-04T08:36:04.194Z] [BOT ERROR] (node:2449) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T08:36:04.594Z] [BOT] ✅ Posted message: Data Scientist @ anthropic in #🤖・ai-jobs
[2026-02-04T08:36:04.594Z] [BOT] ✅ Industry: Data Scientist @ anthropic
[2026-02-04T08:36:04.595Z] [BOT] 💾 Added channel posting: Data Scientist @ anthropic → category channel (1 total channels)
[2026-02-04T08:36:04.596Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T08:36:04.640Z] [BOT] ✅ Loaded V2 database: 2266 jobs
💾 DISK STATE: 2266 jobs on disk
[2026-02-04T08:36:04.640Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T08:36:04.646Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T08:36:04.646Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T08:36:04.648Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T08:36:04.816Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T08:36:06.536Z] [BOT] ✅ Posted message: Data Scientist @ anthropic in #🌉・JID_739bbc0b
[2026-02-04T08:36:06.536Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-04T08:36:06.537Z] [BOT] 💾 Added channel posting: Data Scientist @ anthropic → location channel (2 total channels)
[2026-02-04T08:36:06.537Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T08:36:06.574Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T08:36:06.575Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T08:36:06.580Z] [BOT] 🔀 Deep merged: Data Scientist @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-04T08:36:06.580Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T08:36:06.582Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T08:36:06.695Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T08:36:11.196Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-04T08:36:11.198Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "2f4b7be645c7b2ea"
[2026-02-04T08:36:11.198Z] [BOT] ⏭️  Skipping duplicate: JID_97623477 (posted within 7 days)
[2026-02-04T08:36:11.214Z] [BOT] ✅ Loaded pending queue: 267 total (264 pending, 3 enriched, 0 posted)
[2026-02-04T08:36:11.247Z] [BOT] ✅ Saved pending queue: 267 total (264 pending, 2 enriched, 1 posted)
[2026-02-04T08:36:11.247Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-04T08:36:11.342Z] [BOT] 📂 Loaded 12347 existing routing entries
[2026-02-04T08:36:11.482Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-04T08:36:11.483Z] [BOT] Total entries: 12348
   Timestamp: 2026-02-04T08:36:11.431Z
[2026-02-04T08:36:11.483Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 51
   Successful: 2
   Failed: 0
[2026-02-04T08:36:11.483Z] [BOT] Skipped: 49
[2026-02-04T08:36:11.483Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-04T08:36:11.483Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-04T08:36:11.484Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-04T08:36:11.484Z] [BOT] [STATS] Channel stats saved
[2026-02-04T08:36:11.484Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T08:36:11.528Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T08:36:11.530Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T08:36:11.533Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T08:36:11.533Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T08:36:11.535Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T08:36:11.661Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T08:36:11.661Z] [BOT] ✅ Database saved successfully
[2026-02-04T08:36:13.686Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2449) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*