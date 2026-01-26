# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T18:20:11.296Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T18:19:40.149Z] ========================================
[2026-01-26T18:19:40.151Z] Discord Bot Execution Log
[2026-01-26T18:19:40.151Z] Environment: GitHub Actions
[2026-01-26T18:19:40.151Z] Node Version: v20.20.0
[2026-01-26T18:19:40.151Z] ========================================
[2026-01-26T18:19:40.151Z] Environment Variables Check:
[2026-01-26T18:19:40.151Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T18:19:40.151Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T18:19:40.151Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T18:19:40.151Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T18:19:40.152Z] 
Multi-Channel Configuration:
[2026-01-26T18:19:40.152Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T18:19:40.152Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T18:19:40.152Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T18:19:40.152Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T18:19:40.152Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T18:19:40.152Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T18:19:40.152Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T18:19:40.152Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T18:19:40.152Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T18:19:40.152Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T18:19:40.152Z] 
Data Files Check:
[2026-01-26T18:19:40.153Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T18:19:40.157Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 493981 bytes)
[2026-01-26T18:19:40.157Z] 
========================================
[2026-01-26T18:19:40.157Z] Starting Enhanced Discord Bot...
[2026-01-26T18:19:40.157Z] ========================================
[2026-01-26T18:19:40.702Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T18:19:41.265Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T18:19:41.265Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T18:19:41.266Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T18:19:41.385Z] [BOT] ✅ Loaded pending queue: 2871 total (2821 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T18:19:41.388Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T18:19:41.389Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T18:19:41.389Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T18:19:41.390Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T18:19:41.390Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T18:19:41.391Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T18:19:41.394Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T18:19:41.394Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T18:19:41.395Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T18:19:41.412Z] [BOT ERROR] (node:2460) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T18:19:41.812Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T18:19:41.813Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T18:19:41.813Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T18:19:41.813Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T18:19:41.816Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T18:19:41.817Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T18:19:41.817Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T18:19:41.819Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T18:19:41.819Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T18:19:41.820Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T18:19:41.825Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
[2026-01-26T18:19:41.825Z] [BOT] ✅ Archiving complete: 4 archived, 855 active
[2026-01-26T18:19:41.832Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T18:19:43.334Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T18:19:43.604Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T18:19:43.605Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 855 jobs in memory (cached)
[2026-01-26T18:19:43.608Z] [BOT] ✅ Loaded V2 database: 855 jobs
[2026-01-26T18:19:43.608Z] [BOT] 💾 DISK STATE: 855 jobs on disk
[2026-01-26T18:19:43.608Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=855
[2026-01-26T18:19:43.609Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T18:19:43.609Z] [BOT] 💾 AFTER MERGE: 855 jobs (merged disk + memory)
[2026-01-26T18:19:43.610Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2026-01-26T18:19:43.616Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T18:19:45.116Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-26T18:19:45.116Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T18:19:45.292Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T18:19:45.292Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T18:19:45.292Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 855 jobs in memory (cached)
[2026-01-26T18:19:45.295Z] [BOT] ✅ Loaded V2 database: 855 jobs
💾 DISK STATE: 855 jobs on disk
[2026-01-26T18:19:45.296Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=855
[2026-01-26T18:19:45.297Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T18:19:45.297Z] [BOT] 💾 AFTER MERGE: 855 jobs (merged disk + memory)
[2026-01-26T18:19:45.298Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2026-01-26T18:19:45.304Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
[2026-01-26T18:19:45.304Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T18:19:46.806Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-26T18:19:46.806Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T18:19:47.256Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T18:19:47.256Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T18:19:47.256Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 855 jobs in memory (cached)
[2026-01-26T18:19:47.260Z] [BOT] ✅ Loaded V2 database: 855 jobs
💾 DISK STATE: 855 jobs on disk
[2026-01-26T18:19:47.260Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=855
[2026-01-26T18:19:47.262Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T18:19:47.262Z] [BOT] 💾 AFTER MERGE: 855 jobs (merged disk + memory)
[2026-01-26T18:19:47.262Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2026-01-26T18:19:47.268Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T18:19:51.770Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T18:19:51.771Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T18:19:51.771Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T18:19:52.119Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T18:19:52.120Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 855 jobs in memory (cached)
[2026-01-26T18:19:52.124Z] [BOT] ✅ Loaded V2 database: 855 jobs
💾 DISK STATE: 855 jobs on disk
[2026-01-26T18:19:52.124Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=855
[2026-01-26T18:19:52.126Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T18:19:52.126Z] [BOT] 💾 AFTER MERGE: 855 jobs (merged disk + memory)
[2026-01-26T18:19:52.127Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2026-01-26T18:19:52.135Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
[2026-01-26T18:19:52.135Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T18:19:53.636Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T18:19:53.636Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T18:19:53.805Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T18:19:53.805Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T18:19:53.805Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 855 jobs in memory (cached)
[2026-01-26T18:19:53.809Z] [BOT] ✅ Loaded V2 database: 855 jobs
[2026-01-26T18:19:53.809Z] [BOT] 💾 DISK STATE: 855 jobs on disk
[2026-01-26T18:19:53.809Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=855
[2026-01-26T18:19:53.811Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T18:19:53.811Z] [BOT] 💾 AFTER MERGE: 855 jobs (merged disk + memory)
[2026-01-26T18:19:53.812Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2026-01-26T18:19:53.819Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T18:19:55.319Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-26T18:19:55.320Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T18:19:55.475Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T18:19:55.475Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T18:19:55.475Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T18:19:55.476Z] [BOT] 💾 BEFORE MERGE: 855 jobs in memory (cached)
[2026-01-26T18:19:55.479Z] [BOT] ✅ Loaded V2 database: 855 jobs
💾 DISK STATE: 855 jobs on disk
[2026-01-26T18:19:55.479Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=855
[2026-01-26T18:19:55.481Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T18:19:55.481Z] [BOT] 💾 AFTER MERGE: 855 jobs (merged disk + memory)
[2026-01-26T18:19:55.482Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2026-01-26T18:19:55.489Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T18:19:56.989Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T18:19:56.990Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T18:19:57.224Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T18:19:57.224Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T18:19:57.224Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T18:19:57.224Z] [BOT] 💾 BEFORE MERGE: 855 jobs in memory (cached)
[2026-01-26T18:19:57.227Z] [BOT] ✅ Loaded V2 database: 855 jobs
[2026-01-26T18:19:57.227Z] [BOT] 💾 DISK STATE: 855 jobs on disk
[2026-01-26T18:19:57.228Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=855
[2026-01-26T18:19:57.230Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T18:19:57.230Z] [BOT] 💾 AFTER MERGE: 855 jobs (merged disk + memory)
[2026-01-26T18:19:57.231Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2026-01-26T18:19:57.237Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
[2026-01-26T18:19:57.237Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T18:19:58.737Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T18:19:58.738Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T18:19:58.947Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T18:19:58.947Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T18:19:58.947Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T18:19:58.947Z] [BOT] 💾 BEFORE MERGE: 855 jobs in memory (cached)
[2026-01-26T18:19:58.950Z] [BOT] ✅ Loaded V2 database: 855 jobs
[2026-01-26T18:19:58.950Z] [BOT] 💾 DISK STATE: 855 jobs on disk
[2026-01-26T18:19:58.950Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=855
[2026-01-26T18:19:58.952Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T18:19:58.952Z] [BOT] 💾 AFTER MERGE: 855 jobs (merged disk + memory)
[2026-01-26T18:19:58.952Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2026-01-26T18:19:58.959Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
[2026-01-26T18:19:58.959Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T18:20:03.461Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T18:20:03.462Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T18:20:03.462Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T18:20:03.694Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T18:20:03.694Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T18:20:03.694Z] [BOT] 💾 BEFORE MERGE: 855 jobs in memory (cached)
[2026-01-26T18:20:03.698Z] [BOT] ✅ Loaded V2 database: 855 jobs
💾 DISK STATE: 855 jobs on disk
[2026-01-26T18:20:03.698Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=855
[2026-01-26T18:20:03.699Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 855 jobs (merged disk + memory)
[2026-01-26T18:20:03.700Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2026-01-26T18:20:03.707Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T18:20:08.209Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T18:20:08.211Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T18:20:08.310Z] [BOT] 📂 Loaded 9581 existing routing entries
[2026-01-26T18:20:08.435Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T18:20:08.435Z] [BOT] Total entries: 9591
   Timestamp: 2026-01-26T18:20:08.387Z
[2026-01-26T18:20:08.436Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
[2026-01-26T18:20:08.436Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T18:20:08.436Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
[2026-01-26T18:20:08.436Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-26T18:20:08.436Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-26T18:20:08.436Z] [BOT] [STATS] Channel stats saved
[2026-01-26T18:20:08.436Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 855 jobs in memory (cached)
[2026-01-26T18:20:08.445Z] [BOT] ✅ Loaded V2 database: 855 jobs
💾 DISK STATE: 855 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=855
[2026-01-26T18:20:08.446Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T18:20:08.446Z] [BOT] 💾 AFTER MERGE: 855 jobs (merged disk + memory)
[2026-01-26T18:20:08.447Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2026-01-26T18:20:08.453Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
[2026-01-26T18:20:08.454Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-26T18:20:10.473Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2460) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*