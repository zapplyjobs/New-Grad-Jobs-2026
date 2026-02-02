# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T12:07:23.016Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T12:07:03.948Z] ========================================
[2026-02-02T12:07:03.950Z] Discord Bot Execution Log
[2026-02-02T12:07:03.950Z] Environment: GitHub Actions
[2026-02-02T12:07:03.950Z] Node Version: v20.20.0
[2026-02-02T12:07:03.951Z] ========================================
[2026-02-02T12:07:03.951Z] Environment Variables Check:
[2026-02-02T12:07:03.951Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T12:07:03.951Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T12:07:03.951Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T12:07:03.951Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T12:07:03.951Z] 
Multi-Channel Configuration:
[2026-02-02T12:07:03.951Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T12:07:03.951Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:07:03.951Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:07:03.951Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T12:07:03.952Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:07:03.952Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:07:03.952Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:07:03.952Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:07:03.952Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T12:07:03.952Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T12:07:03.952Z] 
Data Files Check:
[2026-02-02T12:07:03.953Z] .github/data/new_jobs.json: ✅ Exists (10 items, 147168 bytes)
[2026-02-02T12:07:04.010Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11192801 bytes)
[2026-02-02T12:07:04.011Z] 
========================================
[2026-02-02T12:07:04.011Z] Starting Enhanced Discord Bot...
[2026-02-02T12:07:04.011Z] ========================================
[2026-02-02T12:07:04.621Z] [BOT] ✅ Loaded V2 database: 2222 jobs
[2026-02-02T12:07:05.014Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T12:07:05.015Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T12:07:05.015Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T12:07:05.037Z] [BOT] ✅ Loaded pending queue: 343 total (293 pending, 50 enriched, 0 posted)
[2026-02-02T12:07:05.037Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T12:07:05.039Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T12:07:05.039Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T12:07:05.057Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T12:07:05.057Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
[2026-02-02T12:07:05.058Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
[2026-02-02T12:07:05.058Z] [BOT] 🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-02T12:07:05.058Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Brand Marketing Director at gusto
[2026-02-02T12:07:05.058Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Staff Applied Scientist - Observability Data Platform at datadog
🚫 Skipping blacklisted job: Staff Applied Scientist - Observability Data Platform at datadog
[2026-02-02T12:07:05.058Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Documentation Specialist, Claude Developer Platform at anthropic
[2026-02-02T12:07:05.059Z] [BOT] 🚫 Skipping blacklisted job: Education Platform Engineering Lead at anthropic
🚫 Skipping blacklisted job: Sr Staff Software Engineer, Entity Management at gusto
🚫 Skipping blacklisted job: TRAIL Rising Leaders Program - Software Engineering at Newrez
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
[2026-02-02T12:07:05.059Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
[2026-02-02T12:07:05.059Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-02T12:07:05.059Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
[2026-02-02T12:07:05.059Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
[2026-02-02T12:07:05.059Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-02T12:07:05.059Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
[2026-02-02T12:07:05.059Z] [BOT] 🚫 Skipping blacklisted job: Technical Support Manager  at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
🚫 Skipping blacklisted job: Energy Supply GMS Analyst – Or Senior - Associate - Intermediate at Dominion Energy
🚫 Skipping blacklisted job: Load Forecasting Engineer – Engineer/Senior/Staff - Engineering Analytics & Modeling at Dominion Energy
[2026-02-02T12:07:05.087Z] [BOT] ✅ Loaded pending queue: 343 total (293 pending, 50 enriched, 0 posted)
[2026-02-02T12:07:05.122Z] [BOT] ✅ Saved pending queue: 297 total (293 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 3 jobs (46 blacklisted)
[2026-02-02T12:07:05.122Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-02T12:07:05.123Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-02-02T12:07:05.123Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-02T12:07:05.124Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-02T12:07:05.126Z] [BOT] 📍 [ROUTING] "Application Developer 1" @ ORG_b70ac5e6 Group
[2026-02-02T12:07:05.126Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-02T12:07:05.143Z] [BOT ERROR] (node:2694) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T12:07:05.510Z] [BOT] ✅ Posted message: Application Developer 1 @ ORG_b70ac5e6 Group in #💻・tech-jobs
[2026-02-02T12:07:05.510Z] [BOT] ✅ Industry: Application Developer 1 @ ORG_b70ac5e6 Group
[2026-02-02T12:07:05.511Z] [BOT] 💾 Added channel posting: Application Developer 1 @ ORG_b70ac5e6 Group → category channel (1 total channels)
[2026-02-02T12:07:05.512Z] [BOT] 💾 BEFORE MERGE: 2223 jobs in memory (cached)
[2026-02-02T12:07:05.556Z] [BOT] ✅ Loaded V2 database: 2222 jobs
💾 DISK STATE: 2222 jobs on disk
[2026-02-02T12:07:05.557Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2223
[2026-02-02T12:07:05.562Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T12:07:05.562Z] [BOT] 💾 AFTER MERGE: 2223 jobs (merged disk + memory)
[2026-02-02T12:07:05.564Z] [BOT] ✅ No jobs to archive (all 2223 jobs within 7-day window)
[2026-02-02T12:07:05.684Z] [BOT] 💾 Saved posted_jobs.json: 2223 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T12:07:07.524Z] [BOT] ✅ Posted message: Application Developer 1 @ ORG_b70ac5e6 Group in #🏠・JID_ead674af
[2026-02-02T12:07:07.524Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-02T12:07:07.525Z] [BOT] 💾 Added channel posting: Application Developer 1 @ ORG_b70ac5e6 Group → location channel (2 total channels)
[2026-02-02T12:07:07.525Z] [BOT] 💾 BEFORE MERGE: 2223 jobs in memory (cached)
[2026-02-02T12:07:07.561Z] [BOT] ✅ Loaded V2 database: 2223 jobs
💾 DISK STATE: 2223 jobs on disk
[2026-02-02T12:07:07.562Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2223
[2026-02-02T12:07:07.567Z] [BOT] 🔀 Deep merged: Application Developer 1 @ ORG_b70ac5e6 Group (disk: 1 channels → merged: 2 channels)
[2026-02-02T12:07:07.567Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2223 jobs (merged disk + memory)
[2026-02-02T12:07:07.568Z] [BOT] ✅ No jobs to archive (all 2223 jobs within 7-day window)
[2026-02-02T12:07:07.674Z] [BOT] 💾 Saved posted_jobs.json: 2223 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T12:07:09.177Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Integration & Test" @ ORG_75f04b84
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-02T12:07:09.442Z] [BOT] ✅ Posted message: Software Engineer 1 - Integration & Test @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Integration & Test @ ORG_75f04b84
[2026-02-02T12:07:09.443Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Integration & Test @ ORG_75f04b84 → category channel (1 total channels)
[2026-02-02T12:07:09.443Z] [BOT] 💾 BEFORE MERGE: 2224 jobs in memory (cached)
[2026-02-02T12:07:09.483Z] [BOT] ✅ Loaded V2 database: 2223 jobs
💾 DISK STATE: 2223 jobs on disk
[2026-02-02T12:07:09.484Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2224
[2026-02-02T12:07:09.489Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T12:07:09.489Z] [BOT] 💾 AFTER MERGE: 2224 jobs (merged disk + memory)
[2026-02-02T12:07:09.490Z] [BOT] ✅ No jobs to archive (all 2224 jobs within 7-day window)
[2026-02-02T12:07:09.607Z] [BOT] 💾 Saved posted_jobs.json: 2224 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T12:07:11.291Z] [BOT] ✅ Posted message: Software Engineer 1 - Integration & Test @ ORG_75f04b84 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-02T12:07:11.291Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Integration & Test @ ORG_75f04b84 → location channel (2 total channels)
[2026-02-02T12:07:11.291Z] [BOT] 💾 BEFORE MERGE: 2224 jobs in memory (cached)
[2026-02-02T12:07:11.332Z] [BOT] ✅ Loaded V2 database: 2224 jobs
💾 DISK STATE: 2224 jobs on disk
[2026-02-02T12:07:11.333Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2224
[2026-02-02T12:07:11.337Z] [BOT] 🔀 Deep merged: Software Engineer 1 - Integration & Test @ ORG_75f04b84 (disk: 1 channels → merged: 2 channels)
[2026-02-02T12:07:11.337Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2224 jobs (merged disk + memory)
[2026-02-02T12:07:11.338Z] [BOT] ✅ No jobs to archive (all 2224 jobs within 7-day window)
[2026-02-02T12:07:11.466Z] [BOT] 💾 Saved posted_jobs.json: 2224 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T12:07:12.964Z] [BOT] 📍 [ROUTING] "API Engineer (NASA or APAC)" @ supabase
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-02T12:07:13.130Z] [BOT] ✅ Posted message: API Engineer (NASA or APAC) @ supabase in #💻・tech-jobs
  ✅ Industry: API Engineer (NASA or APAC) @ supabase
[2026-02-02T12:07:13.131Z] [BOT] 💾 Added channel posting: API Engineer (NASA or APAC) @ supabase → category channel (1 total channels)
[2026-02-02T12:07:13.131Z] [BOT] 💾 BEFORE MERGE: 2225 jobs in memory (cached)
[2026-02-02T12:07:13.168Z] [BOT] ✅ Loaded V2 database: 2224 jobs
💾 DISK STATE: 2224 jobs on disk
[2026-02-02T12:07:13.168Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2225
[2026-02-02T12:07:13.173Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T12:07:13.173Z] [BOT] 💾 AFTER MERGE: 2225 jobs (merged disk + memory)
[2026-02-02T12:07:13.174Z] [BOT] ✅ No jobs to archive (all 2225 jobs within 7-day window)
[2026-02-02T12:07:13.287Z] [BOT] 💾 Saved posted_jobs.json: 2225 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T12:07:15.124Z] [BOT] ✅ Posted message: API Engineer (NASA or APAC) @ supabase in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-02T12:07:15.125Z] [BOT] 💾 Added channel posting: API Engineer (NASA or APAC) @ supabase → location channel (2 total channels)
[2026-02-02T12:07:15.125Z] [BOT] 💾 BEFORE MERGE: 2225 jobs in memory (cached)
[2026-02-02T12:07:15.163Z] [BOT] ✅ Loaded V2 database: 2225 jobs
💾 DISK STATE: 2225 jobs on disk
[2026-02-02T12:07:15.164Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2225
[2026-02-02T12:07:15.168Z] [BOT] 🔀 Deep merged: API Engineer (NASA or APAC) @ supabase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-02T12:07:15.168Z] [BOT] 💾 AFTER MERGE: 2225 jobs (merged disk + memory)
[2026-02-02T12:07:15.170Z] [BOT] ✅ No jobs to archive (all 2225 jobs within 7-day window)
[2026-02-02T12:07:15.285Z] [BOT] 💾 Saved posted_jobs.json: 2225 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T12:07:19.788Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-02-02T12:07:19.789Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_563dcde2..." not found, but found as SHA256 "c0352a4c3bbebfb5"
[2026-02-02T12:07:19.790Z] [BOT] ⏭️  Skipping duplicate: JID_18e395c4-i_jr102821 (posted within 7 days)
[2026-02-02T12:07:19.790Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6957dde4-rec_rtx_e..." not found, but found as SHA256 "de0f18d834b5cfba"
[2026-02-02T12:07:19.790Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_39063c56-_01820758 (posted within 7 days)
[2026-02-02T12:07:19.790Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e5595553-..." not found, but found as SHA256 "e8e50308b5fe1b98"
[2026-02-02T12:07:19.790Z] [BOT] ⏭️  Skipping duplicate: JID_723a9904 (posted within 7 days)
[2026-02-02T12:07:19.807Z] [BOT] ✅ Loaded pending queue: 297 total (293 pending, 4 enriched, 0 posted)
[2026-02-02T12:07:19.840Z] [BOT] ✅ Saved pending queue: 297 total (293 pending, 1 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-02T12:07:19.951Z] [BOT] 📂 Loaded 12303 existing routing entries
[2026-02-02T12:07:20.070Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 12306
[2026-02-02T12:07:20.071Z] [BOT] Timestamp: 2026-02-02T12:07:20.019Z
[2026-02-02T12:07:20.071Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T12:07:20.071Z] [BOT] Total attempts: 53
   Successful: 6
   Failed: 0
   Skipped: 47
[2026-02-02T12:07:20.072Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-02T12:07:20.072Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 3
[2026-02-02T12:07:20.072Z] [BOT] Top channels:
[2026-02-02T12:07:20.072Z] [BOT] 1. #💻・tech-jobs: 3 posts
     2. #🏠・JID_ead674af: 2 posts
     3. #📍・JID_6daed763: 1 posts
[2026-02-02T12:07:20.072Z] [BOT] [STATS] Channel stats saved
[2026-02-02T12:07:20.072Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2225 jobs in memory (cached)
[2026-02-02T12:07:20.115Z] [BOT] ✅ Loaded V2 database: 2225 jobs
💾 DISK STATE: 2225 jobs on disk
[2026-02-02T12:07:20.115Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2225
[2026-02-02T12:07:20.119Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T12:07:20.119Z] [BOT] 💾 AFTER MERGE: 2225 jobs (merged disk + memory)
[2026-02-02T12:07:20.121Z] [BOT] ✅ No jobs to archive (all 2225 jobs within 7-day window)
[2026-02-02T12:07:20.238Z] [BOT] 💾 Saved posted_jobs.json: 2225 active jobs
[2026-02-02T12:07:20.238Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T12:07:22.264Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2694) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*