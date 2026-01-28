# Discord Bot Execution Audit
**Timestamp:** 2026-01-28T09:22:45.936Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-28T09:22:14.127Z] ========================================
[2026-01-28T09:22:14.129Z] Discord Bot Execution Log
[2026-01-28T09:22:14.129Z] Environment: GitHub Actions
[2026-01-28T09:22:14.129Z] Node Version: v20.20.0
[2026-01-28T09:22:14.129Z] ========================================
[2026-01-28T09:22:14.129Z] Environment Variables Check:
[2026-01-28T09:22:14.129Z] DISCORD_TOKEN: ✅ Set
[2026-01-28T09:22:14.129Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-28T09:22:14.129Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-28T09:22:14.129Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-28T09:22:14.130Z] 
Multi-Channel Configuration:
[2026-01-28T09:22:14.130Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-28T09:22:14.130Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-28T09:22:14.130Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-28T09:22:14.130Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-28T09:22:14.130Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-28T09:22:14.130Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-28T09:22:14.130Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-28T09:22:14.130Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-28T09:22:14.130Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-28T09:22:14.130Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-28T09:22:14.130Z] 
Data Files Check:
[2026-01-28T09:22:14.131Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-28T09:22:14.133Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 142563 bytes)
[2026-01-28T09:22:14.133Z] 
========================================
[2026-01-28T09:22:14.133Z] Starting Enhanced Discord Bot...
[2026-01-28T09:22:14.133Z] ========================================
[2026-01-28T09:22:14.659Z] [BOT] ✅ Loaded V2 database: 246 jobs
[2026-01-28T09:22:15.220Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-28T09:22:15.221Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-28T09:22:15.221Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-28T09:22:15.336Z] [BOT] ✅ Loaded pending queue: 2988 total (2938 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-28T09:22:15.339Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-28T09:22:15.340Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-28T09:22:15.340Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-28T09:22:15.341Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-28T09:22:15.341Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-28T09:22:15.341Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-28T09:22:15.345Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-28T09:22:15.345Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T09:22:15.345Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T09:22:15.362Z] [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-28T09:22:15.635Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T09:22:15.636Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-28T09:22:15.636Z] [BOT] 💾 BEFORE MERGE: 246 jobs in memory (cached)
[2026-01-28T09:22:15.637Z] [BOT] ✅ Loaded V2 database: 246 jobs
💾 DISK STATE: 246 jobs on disk
[2026-01-28T09:22:15.637Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=246
[2026-01-28T09:22:15.638Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T09:22:15.638Z] [BOT] 💾 AFTER MERGE: 246 jobs (merged disk + memory)
[2026-01-28T09:22:15.639Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-28T09:22:15.645Z] [BOT] 📦 Archived 64 jobs to 2026-01.json (64 total in archive)
[2026-01-28T09:22:15.645Z] [BOT] ✅ Archiving complete: 64 archived, 182 active
[2026-01-28T09:22:15.648Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
[2026-01-28T09:22:15.648Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T09:22:17.151Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T09:22:17.460Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-28T09:22:17.461Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 182 jobs in memory (cached)
[2026-01-28T09:22:17.461Z] [BOT] ✅ Loaded V2 database: 182 jobs
💾 DISK STATE: 182 jobs on disk
[2026-01-28T09:22:17.462Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=182
[2026-01-28T09:22:17.462Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 182 jobs (merged disk + memory)
[2026-01-28T09:22:17.462Z] [BOT] ✅ No jobs to archive (all 182 jobs within 7-day window)
[2026-01-28T09:22:17.465Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T09:22:18.965Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T09:22:19.251Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-28T09:22:19.252Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-28T09:22:19.252Z] [BOT] 💾 BEFORE MERGE: 182 jobs in memory (cached)
[2026-01-28T09:22:19.252Z] [BOT] ✅ Loaded V2 database: 182 jobs
💾 DISK STATE: 182 jobs on disk
[2026-01-28T09:22:19.252Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=182
[2026-01-28T09:22:19.253Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T09:22:19.253Z] [BOT] 💾 AFTER MERGE: 182 jobs (merged disk + memory)
[2026-01-28T09:22:19.253Z] [BOT] ✅ No jobs to archive (all 182 jobs within 7-day window)
[2026-01-28T09:22:19.256Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
[2026-01-28T09:22:19.256Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T09:22:20.757Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T09:22:21.113Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-28T09:22:21.113Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 182 jobs in memory (cached)
[2026-01-28T09:22:21.114Z] [BOT] ✅ Loaded V2 database: 182 jobs
💾 DISK STATE: 182 jobs on disk
[2026-01-28T09:22:21.114Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=182
[2026-01-28T09:22:21.115Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 182 jobs (merged disk + memory)
[2026-01-28T09:22:21.115Z] [BOT] ✅ No jobs to archive (all 182 jobs within 7-day window)
[2026-01-28T09:22:21.117Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
[2026-01-28T09:22:21.117Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T09:22:25.620Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-28T09:22:25.620Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-28T09:22:25.620Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T09:22:25.891Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-28T09:22:25.891Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 182 jobs in memory (cached)
[2026-01-28T09:22:25.892Z] [BOT] ✅ Loaded V2 database: 182 jobs
[2026-01-28T09:22:25.892Z] [BOT] 💾 DISK STATE: 182 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=182
[2026-01-28T09:22:25.892Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T09:22:25.892Z] [BOT] 💾 AFTER MERGE: 182 jobs (merged disk + memory)
[2026-01-28T09:22:25.892Z] [BOT] ✅ No jobs to archive (all 182 jobs within 7-day window)
[2026-01-28T09:22:25.895Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
[2026-01-28T09:22:25.895Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T09:22:27.397Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-28T09:22:27.397Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T09:22:27.583Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T09:22:27.583Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 182 jobs in memory (cached)
[2026-01-28T09:22:27.584Z] [BOT] ✅ Loaded V2 database: 182 jobs
[2026-01-28T09:22:27.584Z] [BOT] 💾 DISK STATE: 182 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=182
[2026-01-28T09:22:27.584Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T09:22:27.584Z] [BOT] 💾 AFTER MERGE: 182 jobs (merged disk + memory)
[2026-01-28T09:22:27.585Z] [BOT] ✅ No jobs to archive (all 182 jobs within 7-day window)
[2026-01-28T09:22:27.587Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T09:22:29.088Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-28T09:22:29.089Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T09:22:29.511Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T09:22:29.512Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 182 jobs in memory (cached)
[2026-01-28T09:22:29.513Z] [BOT] ✅ Loaded V2 database: 182 jobs
[2026-01-28T09:22:29.513Z] [BOT] 💾 DISK STATE: 182 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=182
[2026-01-28T09:22:29.513Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 182 jobs (merged disk + memory)
[2026-01-28T09:22:29.513Z] [BOT] ✅ No jobs to archive (all 182 jobs within 7-day window)
[2026-01-28T09:22:29.516Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
[2026-01-28T09:22:29.517Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T09:22:31.018Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-28T09:22:31.018Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T09:22:31.332Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-28T09:22:31.332Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 182 jobs in memory (cached)
[2026-01-28T09:22:31.333Z] [BOT] ✅ Loaded V2 database: 182 jobs
💾 DISK STATE: 182 jobs on disk
[2026-01-28T09:22:31.333Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=182
[2026-01-28T09:22:31.334Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 182 jobs (merged disk + memory)
✅ No jobs to archive (all 182 jobs within 7-day window)
[2026-01-28T09:22:31.338Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
[2026-01-28T09:22:31.338Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T09:22:32.840Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-28T09:22:32.840Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T09:22:33.034Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-28T09:22:33.034Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-28T09:22:33.034Z] [BOT] 💾 BEFORE MERGE: 182 jobs in memory (cached)
[2026-01-28T09:22:33.035Z] [BOT] ✅ Loaded V2 database: 182 jobs
[2026-01-28T09:22:33.035Z] [BOT] 💾 DISK STATE: 182 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=182
[2026-01-28T09:22:33.036Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T09:22:33.036Z] [BOT] 💾 AFTER MERGE: 182 jobs (merged disk + memory)
[2026-01-28T09:22:33.036Z] [BOT] ✅ No jobs to archive (all 182 jobs within 7-day window)
[2026-01-28T09:22:33.039Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
[2026-01-28T09:22:33.039Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T09:22:37.541Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-28T09:22:37.542Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-28T09:22:37.542Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-28T09:22:37.768Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-28T09:22:37.768Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-28T09:22:37.768Z] [BOT] 💾 BEFORE MERGE: 182 jobs in memory (cached)
[2026-01-28T09:22:37.769Z] [BOT] ✅ Loaded V2 database: 182 jobs
[2026-01-28T09:22:37.769Z] [BOT] 💾 DISK STATE: 182 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=182
[2026-01-28T09:22:37.770Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T09:22:37.770Z] [BOT] 💾 AFTER MERGE: 182 jobs (merged disk + memory)
[2026-01-28T09:22:37.770Z] [BOT] ✅ No jobs to archive (all 182 jobs within 7-day window)
[2026-01-28T09:22:37.773Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
[2026-01-28T09:22:37.773Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T09:22:42.274Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-28T09:22:42.275Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-28T09:22:42.378Z] [BOT] 📂 Loaded 9731 existing routing entries
[2026-01-28T09:22:42.500Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-28T09:22:42.501Z] [BOT] Total entries: 9741
   Timestamp: 2026-01-28T09:22:42.450Z
[2026-01-28T09:22:42.501Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fb2c9de9.jsonl
[2026-01-28T09:22:42.501Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-28T09:22:42.501Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-28T09:22:42.502Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-28T09:22:42.502Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-28T09:22:42.502Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 182 jobs in memory (cached)
[2026-01-28T09:22:42.508Z] [BOT] ✅ Loaded V2 database: 182 jobs
💾 DISK STATE: 182 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=182
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 182 jobs (merged disk + memory)
✅ No jobs to archive (all 182 jobs within 7-day window)
[2026-01-28T09:22:42.511Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
[2026-01-28T09:22:42.511Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-28T09:22:44.529Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*