# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T19:54:42.615Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T19:54:11.526Z] ========================================
[2026-01-25T19:54:11.528Z] Discord Bot Execution Log
[2026-01-25T19:54:11.528Z] Environment: GitHub Actions
[2026-01-25T19:54:11.528Z] Node Version: v20.20.0
[2026-01-25T19:54:11.528Z] ========================================
[2026-01-25T19:54:11.528Z] Environment Variables Check:
[2026-01-25T19:54:11.528Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T19:54:11.528Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T19:54:11.528Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T19:54:11.529Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T19:54:11.529Z] 
Multi-Channel Configuration:
[2026-01-25T19:54:11.529Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T19:54:11.529Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T19:54:11.529Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T19:54:11.529Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T19:54:11.529Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T19:54:11.529Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T19:54:11.529Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T19:54:11.529Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T19:54:11.529Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T19:54:11.529Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T19:54:11.530Z] 
Data Files Check:
[2026-01-25T19:54:11.531Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T19:54:11.535Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 593506 bytes)
[2026-01-25T19:54:11.535Z] 
========================================
[2026-01-25T19:54:11.535Z] Starting Enhanced Discord Bot...
[2026-01-25T19:54:11.535Z] ========================================
[2026-01-25T19:54:12.069Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T19:54:12.838Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T19:54:12.838Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T19:54:12.839Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T19:54:12.955Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T19:54:12.959Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T19:54:12.959Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T19:54:12.959Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T19:54:12.960Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T19:54:12.961Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-25T19:54:12.961Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-25T19:54:12.961Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T19:54:12.964Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T19:54:12.965Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T19:54:12.965Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:54:12.982Z] [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T19:54:13.330Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T19:54:13.330Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T19:54:13.331Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T19:54:13.331Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:54:13.335Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T19:54:13.335Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:54:13.335Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:54:13.338Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:54:13.338Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:54:13.339Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:54:13.350Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T19:54:13.350Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:54:14.853Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T19:54:14.853Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:54:15.131Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T19:54:15.131Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T19:54:15.131Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:54:15.136Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T19:54:15.136Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:54:15.136Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:54:15.138Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:54:15.138Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:54:15.139Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:54:15.149Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:54:16.650Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T19:54:16.651Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:54:16.824Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T19:54:16.824Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T19:54:16.825Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:54:16.828Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:54:16.828Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:54:16.830Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:54:16.830Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:54:16.831Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:54:16.838Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:54:18.340Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:54:18.514Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T19:54:18.515Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T19:54:18.515Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:54:18.518Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:54:18.518Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:54:18.520Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:54:18.521Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:54:18.521Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:54:18.528Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:54:23.029Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T19:54:23.030Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T19:54:23.030Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:54:23.285Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T19:54:23.285Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T19:54:23.285Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T19:54:23.285Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:54:23.289Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T19:54:23.290Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:54:23.290Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:54:23.292Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:54:23.293Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:54:23.293Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:54:23.302Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:54:24.805Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T19:54:24.806Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:54:24.984Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T19:54:24.985Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:54:24.988Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:54:24.989Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:54:24.991Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:54:24.991Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:54:24.992Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:54:25.001Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:54:26.503Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T19:54:26.503Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:54:26.708Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T19:54:26.708Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T19:54:26.708Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T19:54:26.708Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:54:26.712Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T19:54:26.712Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:54:26.713Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:54:26.715Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:54:26.715Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:54:26.716Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:54:26.724Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T19:54:26.724Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:54:28.225Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T19:54:28.225Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T19:54:28.226Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:54:28.427Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T19:54:28.428Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T19:54:28.428Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:54:28.431Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T19:54:28.431Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:54:28.432Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:54:28.434Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:54:28.434Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:54:28.435Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:54:28.442Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:54:29.944Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T19:54:29.944Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:54:30.105Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T19:54:30.106Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T19:54:30.106Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:54:30.109Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:54:30.110Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:54:30.112Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:54:30.112Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:54:30.113Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:54:30.121Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:54:34.623Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T19:54:34.623Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T19:54:34.624Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T19:54:34.998Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T19:54:34.998Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T19:54:34.999Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:54:35.002Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:54:35.002Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:54:35.004Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:54:35.005Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:54:35.012Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:54:39.515Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T19:54:39.516Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T19:54:39.611Z] [BOT] 📂 Loaded 8971 existing routing entries
[2026-01-25T19:54:39.722Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T19:54:39.722Z] [BOT] Total entries: 8981
   Timestamp: 2026-01-25T19:54:39.680Z
[2026-01-25T19:54:39.723Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T19:54:39.723Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T19:54:39.723Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T19:54:39.723Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T19:54:39.723Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T19:54:39.724Z] [BOT] [STATS] Channel stats saved
[2026-01-25T19:54:41.742Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*