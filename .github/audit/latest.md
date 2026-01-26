# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T04:20:24.860Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T04:19:53.254Z] ========================================
[2026-01-26T04:19:53.256Z] Discord Bot Execution Log
[2026-01-26T04:19:53.256Z] Environment: GitHub Actions
[2026-01-26T04:19:53.257Z] Node Version: v20.20.0
[2026-01-26T04:19:53.257Z] ========================================
[2026-01-26T04:19:53.257Z] Environment Variables Check:
[2026-01-26T04:19:53.257Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T04:19:53.257Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T04:19:53.257Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T04:19:53.257Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T04:19:53.257Z] 
Multi-Channel Configuration:
[2026-01-26T04:19:53.257Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T04:19:53.258Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T04:19:53.258Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T04:19:53.258Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T04:19:53.258Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T04:19:53.258Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T04:19:53.258Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T04:19:53.258Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T04:19:53.258Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T04:19:53.258Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T04:19:53.258Z] 
Data Files Check:
[2026-01-26T04:19:53.259Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T04:19:53.264Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 547949 bytes)
[2026-01-26T04:19:53.264Z] 
========================================
[2026-01-26T04:19:53.264Z] Starting Enhanced Discord Bot...
[2026-01-26T04:19:53.264Z] ========================================
[2026-01-26T04:19:53.817Z] [BOT] ✅ Loaded V2 database: 957 jobs
[2026-01-26T04:19:54.317Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T04:19:54.317Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T04:19:54.317Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T04:19:54.459Z] [BOT] ✅ Loaded pending queue: 2857 total (2807 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T04:19:54.463Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T04:19:54.463Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T04:19:54.463Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T04:19:54.464Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T04:19:54.465Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-26T04:19:54.465Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T04:19:54.468Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T04:19:54.469Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T04:19:54.469Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T04:19:54.486Z] [BOT ERROR] (node:2593) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T04:19:54.764Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T04:19:54.765Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T04:19:54.765Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T04:19:54.766Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T04:19:54.769Z] [BOT] ✅ Loaded V2 database: 957 jobs
[2026-01-26T04:19:54.769Z] [BOT] 💾 DISK STATE: 957 jobs on disk
[2026-01-26T04:19:54.769Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T04:19:54.772Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:19:54.772Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T04:19:54.772Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T04:19:54.785Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:19:56.288Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-26T04:19:56.289Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T04:19:56.608Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T04:19:56.609Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T04:19:56.609Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T04:19:56.609Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T04:19:56.612Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T04:19:56.612Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T04:19:56.614Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:19:56.614Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T04:19:56.615Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T04:19:56.622Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:19:58.122Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-26T04:19:58.122Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T04:19:58.344Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T04:19:58.344Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T04:19:58.344Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T04:19:58.345Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T04:19:58.347Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T04:19:58.348Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T04:19:58.349Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:19:58.350Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T04:19:58.350Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T04:19:58.358Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:19:59.859Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-26T04:19:59.860Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T04:20:00.088Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T04:20:00.088Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T04:20:00.088Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T04:20:00.088Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T04:20:00.091Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T04:20:00.092Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T04:20:00.093Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:20:00.094Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T04:20:00.094Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T04:20:00.101Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:20:04.603Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T04:20:04.603Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T04:20:04.603Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T04:20:04.800Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T04:20:04.800Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T04:20:04.803Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T04:20:04.805Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T04:20:04.807Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:20:04.807Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T04:20:04.808Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T04:20:04.817Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:20:06.319Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T04:20:06.319Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T04:20:06.792Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T04:20:06.792Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T04:20:06.792Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T04:20:06.796Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T04:20:06.796Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T04:20:06.799Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T04:20:06.799Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T04:20:06.809Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:20:08.311Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T04:20:08.311Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T04:20:08.608Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T04:20:08.608Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T04:20:08.608Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T04:20:08.612Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T04:20:08.612Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T04:20:08.614Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:20:08.614Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T04:20:08.614Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T04:20:08.623Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:20:10.123Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T04:20:10.124Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T04:20:10.333Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T04:20:10.333Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T04:20:10.333Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T04:20:10.338Z] [BOT] ✅ Loaded V2 database: 957 jobs
[2026-01-26T04:20:10.338Z] [BOT] 💾 DISK STATE: 957 jobs on disk
[2026-01-26T04:20:10.338Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T04:20:10.339Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:20:10.339Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T04:20:10.340Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T04:20:10.348Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:20:11.850Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T04:20:11.850Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T04:20:12.104Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T04:20:12.104Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T04:20:12.105Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T04:20:12.105Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T04:20:12.108Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T04:20:12.108Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T04:20:12.111Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:20:12.111Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T04:20:12.112Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T04:20:12.120Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:20:16.623Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T04:20:16.624Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T04:20:16.624Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T04:20:16.842Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T04:20:16.843Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T04:20:16.843Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T04:20:16.843Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T04:20:16.847Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T04:20:16.847Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T04:20:16.849Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:20:16.849Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T04:20:16.850Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T04:20:16.858Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:20:21.361Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T04:20:21.362Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T04:20:21.469Z] [BOT] 📂 Loaded 9191 existing routing entries
[2026-01-26T04:20:21.587Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T04:20:21.587Z] [BOT] Total entries: 9201
   Timestamp: 2026-01-26T04:20:21.542Z
[2026-01-26T04:20:21.588Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T04:20:21.588Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T04:20:21.588Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T04:20:21.588Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T04:20:21.588Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-26T04:20:21.588Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-26T04:20:21.589Z] [BOT] [STATS] Channel stats saved
[2026-01-26T04:20:23.607Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2593) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*