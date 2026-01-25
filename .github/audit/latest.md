# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T18:32:09.306Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T18:31:38.300Z] ========================================
[2026-01-25T18:31:38.302Z] Discord Bot Execution Log
[2026-01-25T18:31:38.302Z] Environment: GitHub Actions
[2026-01-25T18:31:38.302Z] Node Version: v20.20.0
[2026-01-25T18:31:38.302Z] ========================================
[2026-01-25T18:31:38.302Z] Environment Variables Check:
[2026-01-25T18:31:38.302Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T18:31:38.302Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T18:31:38.302Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T18:31:38.303Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T18:31:38.303Z] 
Multi-Channel Configuration:
[2026-01-25T18:31:38.303Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T18:31:38.303Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T18:31:38.303Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T18:31:38.303Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T18:31:38.303Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T18:31:38.303Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T18:31:38.303Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T18:31:38.303Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T18:31:38.303Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T18:31:38.303Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T18:31:38.303Z] 
Data Files Check:
[2026-01-25T18:31:38.305Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T18:31:38.309Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 594003 bytes)
[2026-01-25T18:31:38.309Z] 
========================================
[2026-01-25T18:31:38.309Z] Starting Enhanced Discord Bot...
[2026-01-25T18:31:38.309Z] ========================================
[2026-01-25T18:31:38.853Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:31:39.353Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T18:31:39.353Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T18:31:39.353Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T18:31:39.472Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T18:31:39.476Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T18:31:39.476Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T18:31:39.476Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T18:31:39.477Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T18:31:39.478Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T18:31:39.478Z] [BOT] 📍 2 jobs with multiple locations:
[2026-01-25T18:31:39.478Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T18:31:39.482Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T18:31:39.482Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T18:31:39.482Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T18:31:39.499Z] [BOT ERROR] (node:2470) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T18:31:39.729Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T18:31:39.730Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T18:31:39.730Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:31:39.734Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:31:39.734Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:31:39.736Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:31:39.737Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:31:39.737Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:31:39.750Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T18:31:39.750Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T18:31:41.252Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T18:31:41.536Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T18:31:41.536Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T18:31:41.536Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T18:31:41.536Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:31:41.539Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:31:41.539Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:31:41.540Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:31:41.542Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:31:41.542Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:31:41.542Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:31:41.550Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:31:43.051Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T18:31:43.051Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T18:31:43.230Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T18:31:43.230Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T18:31:43.230Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:31:43.233Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:31:43.234Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:31:43.234Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:31:43.236Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:31:43.236Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:31:43.237Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:31:43.244Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T18:31:43.244Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T18:31:44.746Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T18:31:44.746Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T18:31:45.108Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T18:31:45.108Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T18:31:45.109Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:31:45.112Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:31:45.112Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:31:45.114Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:31:45.114Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:31:45.115Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:31:45.122Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:31:49.624Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T18:31:49.624Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T18:31:49.625Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T18:31:49.929Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T18:31:49.929Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T18:31:49.929Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:31:49.933Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:31:49.934Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:31:49.936Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:31:49.936Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:31:49.937Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:31:49.946Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:31:51.448Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T18:31:51.448Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T18:31:51.679Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T18:31:51.679Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T18:31:51.679Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T18:31:51.679Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:31:51.683Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:31:51.683Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:31:51.685Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:31:51.685Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:31:51.686Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:31:51.695Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T18:31:51.695Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T18:31:53.197Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T18:31:53.197Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T18:31:53.441Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T18:31:53.442Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T18:31:53.442Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T18:31:53.442Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:31:53.445Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:31:53.445Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:31:53.446Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:31:53.448Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:31:53.448Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:31:53.449Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:31:53.457Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T18:31:53.457Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T18:31:54.959Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T18:31:54.959Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T18:31:55.131Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T18:31:55.131Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T18:31:55.131Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:31:55.134Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:31:55.135Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:31:55.137Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:31:55.137Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:31:55.138Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:31:55.145Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T18:31:55.145Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T18:31:56.646Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T18:31:56.646Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T18:31:56.946Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T18:31:56.947Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T18:31:56.947Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:31:56.950Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:31:56.950Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:31:56.953Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:31:56.953Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:31:56.953Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:31:56.961Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T18:31:56.961Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T18:32:01.463Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T18:32:01.464Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T18:32:01.464Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T18:32:01.748Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T18:32:01.749Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T18:32:01.749Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:32:01.752Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:32:01.752Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:32:01.754Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:32:01.754Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:32:01.755Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:32:01.762Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:32:06.265Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T18:32:06.266Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T18:32:06.359Z] [BOT] 📂 Loaded 8901 existing routing entries
[2026-01-25T18:32:06.470Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T18:32:06.470Z] [BOT] Total entries: 8911
   Timestamp: 2026-01-25T18:32:06.428Z
[2026-01-25T18:32:06.470Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T18:32:06.471Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T18:32:06.471Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-25T18:32:08.489Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2470) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*