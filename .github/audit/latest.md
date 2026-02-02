# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T18:10:02.447Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T18:09:44.492Z] ========================================
[2026-02-02T18:09:44.494Z] Discord Bot Execution Log
[2026-02-02T18:09:44.494Z] Environment: GitHub Actions
[2026-02-02T18:09:44.494Z] Node Version: v20.20.0
[2026-02-02T18:09:44.494Z] ========================================
[2026-02-02T18:09:44.494Z] Environment Variables Check:
[2026-02-02T18:09:44.495Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T18:09:44.495Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T18:09:44.495Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T18:09:44.495Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T18:09:44.495Z] 
Multi-Channel Configuration:
[2026-02-02T18:09:44.495Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T18:09:44.495Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T18:09:44.495Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T18:09:44.495Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T18:09:44.495Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T18:09:44.496Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T18:09:44.496Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T18:09:44.496Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T18:09:44.496Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T18:09:44.496Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T18:09:44.496Z] 
Data Files Check:
[2026-02-02T18:09:44.497Z] .github/data/new_jobs.json: ✅ Exists (10 items, 154491 bytes)
[2026-02-02T18:09:44.554Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11238052 bytes)
[2026-02-02T18:09:44.555Z] 
========================================
[2026-02-02T18:09:44.555Z] Starting Enhanced Discord Bot...
[2026-02-02T18:09:44.555Z] ========================================
[2026-02-02T18:09:45.136Z] [BOT] ✅ Loaded V2 database: 2229 jobs
[2026-02-02T18:09:45.487Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T18:09:45.488Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T18:09:45.488Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T18:09:45.508Z] [BOT] ✅ Loaded pending queue: 345 total (295 pending, 50 enriched, 0 posted)
[2026-02-02T18:09:45.509Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T18:09:45.510Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T18:09:45.510Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T18:09:45.510Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T18:09:45.529Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T18:09:45.529Z] [BOT] 🚫 Skipping blacklisted job: Sr Staff Software Engineer, Entity Management at gusto
[2026-02-02T18:09:45.529Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: TRAIL Rising Leaders Program - Software Engineering at Newrez
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-02T18:09:45.529Z] [BOT] 🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
[2026-02-02T18:09:45.529Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-02T18:09:45.530Z] [BOT] 🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
[2026-02-02T18:09:45.530Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-02T18:09:45.530Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-02T18:09:45.530Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
[2026-02-02T18:09:45.530Z] [BOT] 🚫 Skipping blacklisted job: Brand Marketing Director at gusto
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Technical Documentation Specialist, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Education Platform Engineering Lead at anthropic
[2026-02-02T18:09:45.531Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
[2026-02-02T18:09:45.531Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
[2026-02-02T18:09:45.531Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-02T18:09:45.531Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
[2026-02-02T18:09:45.531Z] [BOT] 🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-02T18:09:45.531Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-02T18:09:45.531Z] [BOT] 🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
[2026-02-02T18:09:45.531Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
[2026-02-02T18:09:45.559Z] [BOT] ✅ Loaded pending queue: 345 total (295 pending, 50 enriched, 0 posted)
[2026-02-02T18:09:45.593Z] [BOT] ✅ Saved pending queue: 298 total (295 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (47 blacklisted)
[2026-02-02T18:09:45.594Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-02T18:09:45.594Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
[2026-02-02T18:09:45.594Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-02T18:09:45.595Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-02T18:09:45.597Z] [BOT] 📍 [ROUTING] "Associate – Software Engineering: Java" @ ORG_9c7df1af
[2026-02-02T18:09:45.597Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-02T18:09:45.614Z] [BOT ERROR] (node:3179) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T18:09:45.794Z] [BOT] ✅ Posted message: Associate – Software Engineering: Java @ ORG_9c7df1af in #💻・tech-jobs
[2026-02-02T18:09:45.794Z] [BOT] ✅ Industry: Associate – Software Engineering: Java @ ORG_9c7df1af
[2026-02-02T18:09:45.794Z] [BOT] 💾 Added channel posting: Associate – Software Engineering: Java @ ORG_9c7df1af → category channel (1 total channels)
[2026-02-02T18:09:45.795Z] [BOT] 💾 BEFORE MERGE: 2230 jobs in memory (cached)
[2026-02-02T18:09:45.836Z] [BOT] ✅ Loaded V2 database: 2229 jobs
💾 DISK STATE: 2229 jobs on disk
[2026-02-02T18:09:45.837Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2230
[2026-02-02T18:09:45.841Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T18:09:45.842Z] [BOT] 💾 AFTER MERGE: 2230 jobs (merged disk + memory)
[2026-02-02T18:09:45.843Z] [BOT] ✅ No jobs to archive (all 2230 jobs within 7-day window)
[2026-02-02T18:09:45.969Z] [BOT] 💾 Saved posted_jobs.json: 2230 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T18:09:47.654Z] [BOT] ✅ Posted message: Associate – Software Engineering: Java @ ORG_9c7df1af in #📍・JID_6daed763
[2026-02-02T18:09:47.654Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-02T18:09:47.655Z] [BOT] 💾 Added channel posting: Associate – Software Engineering: Java @ ORG_9c7df1af → location channel (2 total channels)
[2026-02-02T18:09:47.655Z] [BOT] 💾 BEFORE MERGE: 2230 jobs in memory (cached)
[2026-02-02T18:09:47.691Z] [BOT] ✅ Loaded V2 database: 2230 jobs
💾 DISK STATE: 2230 jobs on disk
[2026-02-02T18:09:47.692Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2230
[2026-02-02T18:09:47.696Z] [BOT] 🔀 Deep merged: Associate – Software Engineering: Java @ ORG_9c7df1af (disk: 1 channels → merged: 2 channels)
[2026-02-02T18:09:47.696Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2230 jobs (merged disk + memory)
[2026-02-02T18:09:47.698Z] [BOT] ✅ No jobs to archive (all 2230 jobs within 7-day window)
[2026-02-02T18:09:47.805Z] [BOT] 💾 Saved posted_jobs.json: 2230 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T18:09:52.305Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-02T18:09:52.307Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_a5c0bcc7
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-02T18:09:52.307Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-02T18:09:52.711Z] [BOT] ✅ Posted message: Software Engineer @ ORG_a5c0bcc7 in #📊・JID_fb739488
  ✅ Industry: Software Engineer @ ORG_a5c0bcc7
[2026-02-02T18:09:52.712Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_a5c0bcc7 → category channel (1 total channels)
[2026-02-02T18:09:52.712Z] [BOT] 💾 BEFORE MERGE: 2231 jobs in memory (cached)
[2026-02-02T18:09:52.753Z] [BOT] ✅ Loaded V2 database: 2230 jobs
💾 DISK STATE: 2230 jobs on disk
[2026-02-02T18:09:52.754Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2231
[2026-02-02T18:09:52.758Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T18:09:52.758Z] [BOT] 💾 AFTER MERGE: 2231 jobs (merged disk + memory)
[2026-02-02T18:09:52.760Z] [BOT] ✅ No jobs to archive (all 2231 jobs within 7-day window)
[2026-02-02T18:09:52.868Z] [BOT] 💾 Saved posted_jobs.json: 2231 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T18:09:54.528Z] [BOT] ✅ Posted message: Software Engineer @ ORG_a5c0bcc7 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-02T18:09:54.528Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_a5c0bcc7 → location channel (2 total channels)
💾 BEFORE MERGE: 2231 jobs in memory (cached)
[2026-02-02T18:09:54.577Z] [BOT] ✅ Loaded V2 database: 2231 jobs
[2026-02-02T18:09:54.578Z] [BOT] 💾 DISK STATE: 2231 jobs on disk
[2026-02-02T18:09:54.578Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2231
[2026-02-02T18:09:54.583Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_a5c0bcc7 (disk: 1 channels → merged: 2 channels)
[2026-02-02T18:09:54.583Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2231 jobs (merged disk + memory)
[2026-02-02T18:09:54.584Z] [BOT] ✅ No jobs to archive (all 2231 jobs within 7-day window)
[2026-02-02T18:09:54.706Z] [BOT] 💾 Saved posted_jobs.json: 2231 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T18:09:59.208Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-02T18:09:59.209Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0d2634c3..." not found, but found as SHA256 "104aae53c17cef39"
[2026-02-02T18:09:59.210Z] [BOT] ⏭️  Skipping duplicate: JID_e90ffffb-java_req-4555-2 (posted within 7 days)
[2026-02-02T18:09:59.210Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5ff2a935..." not found, but found as SHA256 "b356b91fabda93d6"
[2026-02-02T18:09:59.210Z] [BOT] ⏭️  Skipping duplicate: JID_df424a35-clarivate_careers-JID_5ed4cc86-engineer_jreq134681-1 (posted within 7 days)
[2026-02-02T18:09:59.227Z] [BOT] ✅ Loaded pending queue: 298 total (295 pending, 3 enriched, 0 posted)
[2026-02-02T18:09:59.258Z] [BOT] ✅ Saved pending queue: 298 total (295 pending, 1 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-02-02T18:09:59.259Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T18:09:59.348Z] [BOT] 📂 Loaded 12310 existing routing entries
[2026-02-02T18:09:59.485Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12312
[2026-02-02T18:09:59.485Z] [BOT] Timestamp: 2026-02-02T18:09:59.434Z
[2026-02-02T18:09:59.486Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T18:09:59.486Z] [BOT] Total attempts: 52
   Successful: 4
   Failed: 0
[2026-02-02T18:09:59.486Z] [BOT] Skipped: 48
[2026-02-02T18:09:59.487Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2026-02-02T18:09:59.487Z] [BOT] 1. #📍・JID_6daed763: 2 posts
     2. #💻・tech-jobs: 1 posts
     3. #📊・JID_fb739488: 1 posts
[2026-02-02T18:09:59.487Z] [BOT] [STATS] Channel stats saved
[2026-02-02T18:09:59.487Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2231 jobs in memory (cached)
[2026-02-02T18:09:59.545Z] [BOT] ✅ Loaded V2 database: 2231 jobs
💾 DISK STATE: 2231 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2231
[2026-02-02T18:09:59.551Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T18:09:59.552Z] [BOT] 💾 AFTER MERGE: 2231 jobs (merged disk + memory)
[2026-02-02T18:09:59.553Z] [BOT] ✅ No jobs to archive (all 2231 jobs within 7-day window)
[2026-02-02T18:09:59.661Z] [BOT] 💾 Saved posted_jobs.json: 2231 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T18:09:59.662Z] [BOT] ✅ Database saved successfully
[2026-02-02T18:10:01.685Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3179) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*