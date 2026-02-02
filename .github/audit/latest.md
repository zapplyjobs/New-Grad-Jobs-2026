# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T08:22:13.447Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T08:21:57.917Z] ========================================
[2026-02-02T08:21:57.919Z] Discord Bot Execution Log
[2026-02-02T08:21:57.919Z] Environment: GitHub Actions
[2026-02-02T08:21:57.919Z] Node Version: v20.20.0
[2026-02-02T08:21:57.919Z] ========================================
[2026-02-02T08:21:57.919Z] Environment Variables Check:
[2026-02-02T08:21:57.919Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T08:21:57.919Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T08:21:57.920Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T08:21:57.920Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T08:21:57.920Z] 
Multi-Channel Configuration:
[2026-02-02T08:21:57.920Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T08:21:57.920Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:21:57.920Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:21:57.920Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T08:21:57.920Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:21:57.920Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:21:57.920Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:21:57.920Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:21:57.921Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T08:21:57.921Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T08:21:57.921Z] 
Data Files Check:
[2026-02-02T08:21:57.922Z] .github/data/new_jobs.json: ✅ Exists (10 items, 168474 bytes)
[2026-02-02T08:21:57.983Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11148180 bytes)
[2026-02-02T08:21:57.983Z] 
========================================
[2026-02-02T08:21:57.983Z] Starting Enhanced Discord Bot...
[2026-02-02T08:21:57.983Z] ========================================
[2026-02-02T08:21:58.566Z] [BOT] ✅ Loaded V2 database: 2215 jobs
[2026-02-02T08:21:59.355Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T08:21:59.355Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T08:21:59.356Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T08:21:59.390Z] [BOT] ✅ Loaded pending queue: 466 total (416 pending, 50 enriched, 0 posted)
[2026-02-02T08:21:59.391Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T08:21:59.392Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T08:21:59.392Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T08:21:59.412Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T08:21:59.412Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
[2026-02-02T08:21:59.412Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
[2026-02-02T08:21:59.413Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
[2026-02-02T08:21:59.413Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
[2026-02-02T08:21:59.413Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Technical Program Manager, AI Research at figma
[2026-02-02T08:21:59.413Z] [BOT] 🚫 Skipping blacklisted job: Manager, On-Site Executive IT Support (Residential Operations) at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Full-Stack at brex
[2026-02-02T08:21:59.413Z] [BOT] 🚫 Skipping blacklisted job: Data Architect Senior at Intermountain Healthcare
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, Product-Led Growth at brex
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, Product-Led Growth at brex
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, B2B Sales at brex
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, B2B Sales at brex
[2026-02-02T08:21:59.413Z] [BOT] 🚫 Skipping blacklisted job: Senior Fullstack Engineer - Backstage Portal, Data Experience at spotify
[2026-02-02T08:21:59.414Z] [BOT] 🚫 Skipping blacklisted job: Customer Enablement Manager - Figma Weave (New York, United States) at figma
[2026-02-02T08:21:59.414Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager - Spotify for Artists, Campaign Kit at spotify
🚫 Skipping blacklisted job: Senior GRC Lead at brex
[2026-02-02T08:21:59.414Z] [BOT] 🚫 Skipping blacklisted job: Senior GRC Lead at brex
🚫 Skipping blacklisted job: Director, Sales Commissions at samsara
🚫 Skipping blacklisted job: Director, Sales Commissions at samsara
[2026-02-02T08:21:59.414Z] [BOT] 🚫 Skipping blacklisted job: Manager Account Development - Atlanta at samsara
🚫 Skipping blacklisted job: Manager Account Development, Relocation to Atlanta at samsara
[2026-02-02T08:21:59.414Z] [BOT] 🚫 Skipping blacklisted job: Manager II, Shipping and Receiving Logistics at samsara
🚫 Skipping blacklisted job: Manager of Account Development at samsara
[2026-02-02T08:21:59.414Z] [BOT] 🚫 Skipping blacklisted job: Senior Hardware Reliability Engineer at samsara
🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Senior Staff Hardware Systems Engineer at samsara
[2026-02-02T08:21:59.414Z] [BOT] 🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: USA – Tax - Business Tax Services - Federal Tax Advisory','Fta','Jd/LLM','Staff 2 at Ernst & Young
🚫 Skipping blacklisted job: USA – Tax - Indirect Tax - Technology Staff at Ernst & Young
[2026-02-02T08:21:59.414Z] [BOT] 🚫 Skipping blacklisted job: Sr Staff Software Engineer, Entity Management at gusto
🚫 Skipping blacklisted job: TRAIL Rising Leaders Program - Software Engineering at Newrez
[2026-02-02T08:21:59.414Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-02T08:21:59.415Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
[2026-02-02T08:21:59.445Z] [BOT] ✅ Loaded pending queue: 466 total (416 pending, 50 enriched, 0 posted)
[2026-02-02T08:21:59.495Z] [BOT] ✅ Saved pending queue: 419 total (416 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (47 blacklisted)
[2026-02-02T08:21:59.495Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-02T08:21:59.496Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-02T08:21:59.496Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-02T08:21:59.499Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-02T08:21:59.500Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Design" @ figma
[2026-02-02T08:21:59.500Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-02T08:21:59.517Z] [BOT ERROR] (node:2876) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T08:21:59.782Z] [BOT] ✅ Posted message: Technical Recruiter, Design @ figma in #💻・tech-jobs
[2026-02-02T08:21:59.782Z] [BOT] ✅ Industry: Technical Recruiter, Design @ figma
[2026-02-02T08:21:59.783Z] [BOT] 💾 Added channel posting: Technical Recruiter, Design @ figma → category channel (1 total channels)
[2026-02-02T08:21:59.783Z] [BOT] 💾 BEFORE MERGE: 2216 jobs in memory (cached)
[2026-02-02T08:21:59.827Z] [BOT] ✅ Loaded V2 database: 2215 jobs
💾 DISK STATE: 2215 jobs on disk
[2026-02-02T08:21:59.827Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2216
[2026-02-02T08:21:59.832Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T08:21:59.832Z] [BOT] 💾 AFTER MERGE: 2216 jobs (merged disk + memory)
[2026-02-02T08:21:59.834Z] [BOT] ✅ No jobs to archive (all 2216 jobs within 7-day window)
[2026-02-02T08:21:59.962Z] [BOT] 💾 Saved posted_jobs.json: 2216 active jobs
[2026-02-02T08:21:59.963Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-02T08:22:01.616Z] [BOT] ✅ Posted message: Technical Recruiter, Design @ figma in #🌉・JID_739bbc0b
[2026-02-02T08:22:01.616Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-02T08:22:01.617Z] [BOT] 💾 Added channel posting: Technical Recruiter, Design @ figma → location channel (2 total channels)
[2026-02-02T08:22:01.617Z] [BOT] 💾 BEFORE MERGE: 2216 jobs in memory (cached)
[2026-02-02T08:22:01.653Z] [BOT] ✅ Loaded V2 database: 2216 jobs
💾 DISK STATE: 2216 jobs on disk
[2026-02-02T08:22:01.654Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2216
[2026-02-02T08:22:01.658Z] [BOT] 🔀 Deep merged: Technical Recruiter, Design @ figma (disk: 1 channels → merged: 2 channels)
[2026-02-02T08:22:01.659Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2216 jobs (merged disk + memory)
[2026-02-02T08:22:01.660Z] [BOT] ✅ No jobs to archive (all 2216 jobs within 7-day window)
[2026-02-02T08:22:01.763Z] [BOT] 💾 Saved posted_jobs.json: 2216 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T08:22:03.266Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Product " @ figma
   Category: TECH (default)
[2026-02-02T08:22:03.266Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-02T08:22:03.439Z] [BOT] ✅ Posted message: Technical Recruiter, Product  @ figma in #💻・tech-jobs
  ✅ Industry: Technical Recruiter, Product  @ figma
[2026-02-02T08:22:03.440Z] [BOT] 💾 Added channel posting: Technical Recruiter, Product  @ figma → category channel (1 total channels)
[2026-02-02T08:22:03.440Z] [BOT] 💾 BEFORE MERGE: 2217 jobs in memory (cached)
[2026-02-02T08:22:03.479Z] [BOT] ✅ Loaded V2 database: 2216 jobs
💾 DISK STATE: 2216 jobs on disk
[2026-02-02T08:22:03.479Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2217
[2026-02-02T08:22:03.484Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T08:22:03.484Z] [BOT] 💾 AFTER MERGE: 2217 jobs (merged disk + memory)
[2026-02-02T08:22:03.485Z] [BOT] ✅ No jobs to archive (all 2217 jobs within 7-day window)
[2026-02-02T08:22:03.601Z] [BOT] 💾 Saved posted_jobs.json: 2217 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T08:22:05.318Z] [BOT] ✅ Posted message: Technical Recruiter, Product  @ figma in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-02T08:22:05.319Z] [BOT] 💾 Added channel posting: Technical Recruiter, Product  @ figma → location channel (2 total channels)
[2026-02-02T08:22:05.319Z] [BOT] 💾 BEFORE MERGE: 2217 jobs in memory (cached)
[2026-02-02T08:22:05.356Z] [BOT] ✅ Loaded V2 database: 2217 jobs
💾 DISK STATE: 2217 jobs on disk
[2026-02-02T08:22:05.357Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2217
[2026-02-02T08:22:05.361Z] [BOT] 🔀 Deep merged: Technical Recruiter, Product  @ figma (disk: 1 channels → merged: 2 channels)
[2026-02-02T08:22:05.361Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2217 jobs (merged disk + memory)
[2026-02-02T08:22:05.363Z] [BOT] ✅ No jobs to archive (all 2217 jobs within 7-day window)
[2026-02-02T08:22:05.468Z] [BOT] 💾 Saved posted_jobs.json: 2217 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T08:22:09.970Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-02T08:22:09.971Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_886cceeb..." not found, but found as SHA256 "7bcd2ca95bfa2411"
[2026-02-02T08:22:09.972Z] [BOT] ⏭️  Skipping duplicate: JID_79aa7205 (posted within 7 days)
[2026-02-02T08:22:09.972Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2fe0e9b4..." not found, but found as SHA256 "2c67bdbb7744b6fd"
[2026-02-02T08:22:09.972Z] [BOT] ⏭️  Skipping duplicate: JID_2aab6a01 (posted within 7 days)
[2026-02-02T08:22:09.996Z] [BOT] ✅ Loaded pending queue: 419 total (416 pending, 3 enriched, 0 posted)
[2026-02-02T08:22:10.040Z] [BOT] ✅ Saved pending queue: 419 total (416 pending, 1 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-02T08:22:10.145Z] [BOT] 📂 Loaded 12296 existing routing entries
[2026-02-02T08:22:10.269Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12298
   Timestamp: 2026-02-02T08:22:10.218Z
[2026-02-02T08:22:10.269Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T08:22:10.269Z] [BOT] Total attempts: 52
   Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-02T08:22:10.269Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 2
[2026-02-02T08:22:10.270Z] [BOT] Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🌉・JID_739bbc0b: 2 posts
[2026-02-02T08:22:10.270Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T08:22:10.270Z] [BOT] 💾 BEFORE MERGE: 2217 jobs in memory (cached)
[2026-02-02T08:22:10.317Z] [BOT] ✅ Loaded V2 database: 2217 jobs
💾 DISK STATE: 2217 jobs on disk
[2026-02-02T08:22:10.318Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2217
[2026-02-02T08:22:10.328Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T08:22:10.328Z] [BOT] 💾 AFTER MERGE: 2217 jobs (merged disk + memory)
[2026-02-02T08:22:10.329Z] [BOT] ✅ No jobs to archive (all 2217 jobs within 7-day window)
[2026-02-02T08:22:10.439Z] [BOT] 💾 Saved posted_jobs.json: 2217 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T08:22:10.440Z] [BOT] ✅ Database saved successfully
[2026-02-02T08:22:12.467Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2876) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*