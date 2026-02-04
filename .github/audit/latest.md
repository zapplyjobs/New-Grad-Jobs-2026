# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T16:56:02.554Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T16:55:51.336Z] ========================================
[2026-02-04T16:55:51.338Z] Discord Bot Execution Log
[2026-02-04T16:55:51.338Z] Environment: GitHub Actions
[2026-02-04T16:55:51.338Z] Node Version: v20.20.0
[2026-02-04T16:55:51.338Z] ========================================
[2026-02-04T16:55:51.338Z] Environment Variables Check:
[2026-02-04T16:55:51.338Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T16:55:51.338Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T16:55:51.338Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T16:55:51.339Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T16:55:51.339Z] 
Multi-Channel Configuration:
[2026-02-04T16:55:51.339Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T16:55:51.339Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:55:51.339Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:55:51.339Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T16:55:51.339Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:55:51.339Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:55:51.339Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:55:51.339Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:55:51.339Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T16:55:51.339Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T16:55:51.339Z] 
Data Files Check:
[2026-02-04T16:55:51.341Z] .github/data/new_jobs.json: ✅ Exists (10 items, 169581 bytes)
[2026-02-04T16:55:51.404Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T16:55:51.404Z] 
========================================
[2026-02-04T16:55:51.404Z] Starting Enhanced Discord Bot...
[2026-02-04T16:55:51.404Z] ========================================
[2026-02-04T16:55:51.970Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T16:55:52.310Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T16:55:52.310Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T16:55:52.311Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T16:55:52.332Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T16:55:52.332Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T16:55:52.333Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T16:55:52.334Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T16:55:52.334Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T16:55:52.334Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T16:55:52.334Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T16:55:52.335Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T16:55:52.335Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T16:55:52.353Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-02-04T16:55:52.353Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
[2026-02-04T16:55:52.353Z] [BOT] 🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
[2026-02-04T16:55:52.353Z] [BOT] 🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
[2026-02-04T16:55:52.353Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
[2026-02-04T16:55:52.353Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
[2026-02-04T16:55:52.353Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
[2026-02-04T16:55:52.354Z] [BOT] 🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
[2026-02-04T16:55:52.354Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-04T16:55:52.354Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
[2026-02-04T16:55:52.354Z] [BOT] 🚫 Skipping blacklisted job: Directors, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
[2026-02-04T16:55:52.354Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
[2026-02-04T16:55:52.354Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-04T16:55:52.354Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
[2026-02-04T16:55:52.354Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
[2026-02-04T16:55:52.354Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
[2026-02-04T16:55:52.354Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
[2026-02-04T16:55:52.355Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-02-04T16:55:52.355Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-04T16:55:52.381Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T16:55:52.415Z] [BOT] ✅ Saved pending queue: 268 total (264 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (46 blacklisted)
[2026-02-04T16:55:52.415Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-04T16:55:52.416Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-04T16:55:52.416Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-04T16:55:52.418Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-04T16:55:52.419Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, State & Local Sales" @ anthropic
[2026-02-04T16:55:52.420Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-04T16:55:52.436Z] [BOT ERROR] (node:2634) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T16:55:52.647Z] [BOT] ✅ Posted message: Enterprise Account Executive, State & Local Sales @ anthropic in #💻・tech-jobs
[2026-02-04T16:55:52.648Z] [BOT] ✅ Industry: Enterprise Account Executive, State & Local Sales @ anthropic
[2026-02-04T16:55:52.649Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, State & Local Sales @ anthropic → category channel (1 total channels)
[2026-02-04T16:55:52.649Z] [BOT] 💾 BEFORE MERGE: 2268 jobs in memory (cached)
[2026-02-04T16:55:52.693Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T16:55:52.694Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2268
[2026-02-04T16:55:52.699Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T16:55:52.699Z] [BOT] 💾 AFTER MERGE: 2268 jobs (merged disk + memory)
[2026-02-04T16:55:52.700Z] [BOT] ✅ No jobs to archive (all 2268 jobs within 7-day window)
[2026-02-04T16:55:52.824Z] [BOT] 💾 Saved posted_jobs.json: 2268 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T16:55:54.534Z] [BOT] ✅ Posted message: Enterprise Account Executive, State & Local Sales @ anthropic in #🌉・JID_739bbc0b
[2026-02-04T16:55:54.534Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-04T16:55:54.535Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, State & Local Sales @ anthropic → location channel (2 total channels)
[2026-02-04T16:55:54.535Z] [BOT] 💾 BEFORE MERGE: 2268 jobs in memory (cached)
[2026-02-04T16:55:54.572Z] [BOT] ✅ Loaded V2 database: 2268 jobs
💾 DISK STATE: 2268 jobs on disk
[2026-02-04T16:55:54.572Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2268
[2026-02-04T16:55:54.577Z] [BOT] 🔀 Deep merged: Enterprise Account Executive, State & Local Sales @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-04T16:55:54.577Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2268 jobs (merged disk + memory)
[2026-02-04T16:55:54.578Z] [BOT] ✅ No jobs to archive (all 2268 jobs within 7-day window)
[2026-02-04T16:55:54.687Z] [BOT] 💾 Saved posted_jobs.json: 2268 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T16:55:59.188Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-04T16:55:59.189Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "49d14930ef47a987"
[2026-02-04T16:55:59.189Z] [BOT] ⏭️  Skipping duplicate: JID_579e9581 (posted within 7 days)
[2026-02-04T16:55:59.204Z] [BOT] ✅ Loaded pending queue: 268 total (264 pending, 4 enriched, 0 posted)
[2026-02-04T16:55:59.237Z] [BOT] ✅ Saved pending queue: 268 total (264 pending, 3 enriched, 1 posted)
[2026-02-04T16:55:59.237Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-04T16:55:59.328Z] [BOT] 📂 Loaded 12348 existing routing entries
[2026-02-04T16:55:59.466Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12349
   Timestamp: 2026-02-04T16:55:59.415Z
[2026-02-04T16:55:59.466Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 51
[2026-02-04T16:55:59.466Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-04T16:55:59.466Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-04T16:55:59.467Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-04T16:55:59.467Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-04T16:55:59.467Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T16:55:59.467Z] [BOT] 💾 BEFORE MERGE: 2268 jobs in memory (cached)
[2026-02-04T16:55:59.511Z] [BOT] ✅ Loaded V2 database: 2268 jobs
💾 DISK STATE: 2268 jobs on disk
[2026-02-04T16:55:59.513Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2268
[2026-02-04T16:55:59.519Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2268 jobs (merged disk + memory)
[2026-02-04T16:55:59.520Z] [BOT] ✅ No jobs to archive (all 2268 jobs within 7-day window)
[2026-02-04T16:55:59.639Z] [BOT] 💾 Saved posted_jobs.json: 2268 active jobs
[2026-02-04T16:55:59.640Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T16:56:01.663Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2634) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*