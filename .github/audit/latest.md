# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T21:31:01.636Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T21:30:30.958Z] ========================================
[2026-01-25T21:30:30.960Z] Discord Bot Execution Log
[2026-01-25T21:30:30.960Z] Environment: GitHub Actions
[2026-01-25T21:30:30.960Z] Node Version: v20.20.0
[2026-01-25T21:30:30.960Z] ========================================
[2026-01-25T21:30:30.960Z] Environment Variables Check:
[2026-01-25T21:30:30.960Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T21:30:30.960Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T21:30:30.960Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T21:30:30.961Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T21:30:30.961Z] 
Multi-Channel Configuration:
[2026-01-25T21:30:30.961Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T21:30:30.961Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T21:30:30.961Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T21:30:30.961Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T21:30:30.961Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T21:30:30.961Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T21:30:30.961Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T21:30:30.961Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T21:30:30.961Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T21:30:30.961Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T21:30:30.962Z] 
Data Files Check:
[2026-01-25T21:30:30.963Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T21:30:30.967Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 586851 bytes)
[2026-01-25T21:30:30.967Z] 
========================================
[2026-01-25T21:30:30.967Z] Starting Enhanced Discord Bot...
[2026-01-25T21:30:30.967Z] ========================================
[2026-01-25T21:30:31.478Z] [BOT] ✅ Loaded V2 database: 1026 jobs
[2026-01-25T21:30:31.980Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T21:30:31.980Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T21:30:31.981Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T21:30:32.098Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T21:30:32.102Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T21:30:32.102Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T21:30:32.102Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T21:30:32.103Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T21:30:32.104Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-25T21:30:32.104Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T21:30:32.107Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T21:30:32.108Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T21:30:32.108Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T21:30:32.124Z] [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T21:30:32.241Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T21:30:32.241Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T21:30:32.242Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T21:30:32.242Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T21:30:32.246Z] [BOT] ✅ Loaded V2 database: 1026 jobs
[2026-01-25T21:30:32.246Z] [BOT] 💾 DISK STATE: 1026 jobs on disk
[2026-01-25T21:30:32.246Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T21:30:32.248Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:30:32.248Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T21:30:32.249Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T21:30:32.255Z] [BOT] 📦 Archived 8 jobs to 2026-01.json (8 total in archive)
[2026-01-25T21:30:32.255Z] [BOT] ✅ Archiving complete: 8 archived, 1018 active
[2026-01-25T21:30:32.265Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
[2026-01-25T21:30:32.265Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:30:33.768Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T21:30:33.895Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T21:30:33.895Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T21:30:33.896Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1018 jobs in memory
[2026-01-25T21:30:33.899Z] [BOT] ✅ Loaded V2 database: 1018 jobs
[2026-01-25T21:30:33.899Z] [BOT] 💾 DISK STATE: 1018 jobs on disk
[2026-01-25T21:30:33.900Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1018
[2026-01-25T21:30:33.902Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:30:33.902Z] [BOT] 💾 AFTER MERGE: 1018 jobs (merged disk + memory)
[2026-01-25T21:30:33.903Z] [BOT] ✅ No jobs to archive (all 1018 jobs within 7-day window)
[2026-01-25T21:30:33.910Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:30:35.410Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T21:30:35.540Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T21:30:35.540Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1018 jobs in memory
[2026-01-25T21:30:35.543Z] [BOT] ✅ Loaded V2 database: 1018 jobs
💾 DISK STATE: 1018 jobs on disk
[2026-01-25T21:30:35.544Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1018
[2026-01-25T21:30:35.546Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:30:35.546Z] [BOT] 💾 AFTER MERGE: 1018 jobs (merged disk + memory)
[2026-01-25T21:30:35.547Z] [BOT] ✅ No jobs to archive (all 1018 jobs within 7-day window)
[2026-01-25T21:30:35.554Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
[2026-01-25T21:30:35.554Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:30:37.054Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T21:30:37.055Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T21:30:37.367Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T21:30:37.368Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T21:30:37.368Z] [BOT] 💾 BEFORE MERGE: 1018 jobs in memory
[2026-01-25T21:30:37.371Z] [BOT] ✅ Loaded V2 database: 1018 jobs
💾 DISK STATE: 1018 jobs on disk
[2026-01-25T21:30:37.371Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1018
[2026-01-25T21:30:37.373Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:30:37.374Z] [BOT] 💾 AFTER MERGE: 1018 jobs (merged disk + memory)
[2026-01-25T21:30:37.374Z] [BOT] ✅ No jobs to archive (all 1018 jobs within 7-day window)
[2026-01-25T21:30:37.381Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:30:41.883Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T21:30:41.884Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T21:30:41.884Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:30:42.255Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T21:30:42.256Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T21:30:42.256Z] [BOT] 💾 BEFORE MERGE: 1018 jobs in memory
[2026-01-25T21:30:42.260Z] [BOT] ✅ Loaded V2 database: 1018 jobs
[2026-01-25T21:30:42.260Z] [BOT] 💾 DISK STATE: 1018 jobs on disk
[2026-01-25T21:30:42.260Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1018
[2026-01-25T21:30:42.263Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:30:42.263Z] [BOT] 💾 AFTER MERGE: 1018 jobs (merged disk + memory)
[2026-01-25T21:30:42.264Z] [BOT] ✅ No jobs to archive (all 1018 jobs within 7-day window)
[2026-01-25T21:30:42.272Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
[2026-01-25T21:30:42.273Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:30:43.774Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T21:30:43.774Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:30:43.935Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T21:30:43.935Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T21:30:43.935Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T21:30:43.935Z] [BOT] 💾 BEFORE MERGE: 1018 jobs in memory
[2026-01-25T21:30:43.938Z] [BOT] ✅ Loaded V2 database: 1018 jobs
[2026-01-25T21:30:43.938Z] [BOT] 💾 DISK STATE: 1018 jobs on disk
[2026-01-25T21:30:43.938Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1018
[2026-01-25T21:30:43.941Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:30:43.941Z] [BOT] 💾 AFTER MERGE: 1018 jobs (merged disk + memory)
[2026-01-25T21:30:43.942Z] [BOT] ✅ No jobs to archive (all 1018 jobs within 7-day window)
[2026-01-25T21:30:43.950Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:30:45.450Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T21:30:45.451Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:30:45.641Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T21:30:45.641Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T21:30:45.641Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T21:30:45.642Z] [BOT] 💾 BEFORE MERGE: 1018 jobs in memory
[2026-01-25T21:30:45.645Z] [BOT] ✅ Loaded V2 database: 1018 jobs
[2026-01-25T21:30:45.645Z] [BOT] 💾 DISK STATE: 1018 jobs on disk
[2026-01-25T21:30:45.645Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1018
[2026-01-25T21:30:45.648Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:30:45.648Z] [BOT] 💾 AFTER MERGE: 1018 jobs (merged disk + memory)
[2026-01-25T21:30:45.648Z] [BOT] ✅ No jobs to archive (all 1018 jobs within 7-day window)
[2026-01-25T21:30:45.656Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
[2026-01-25T21:30:45.656Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:30:47.157Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-25T21:30:47.158Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:30:47.862Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T21:30:47.862Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T21:30:47.862Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T21:30:47.863Z] [BOT] 💾 BEFORE MERGE: 1018 jobs in memory
[2026-01-25T21:30:47.866Z] [BOT] ✅ Loaded V2 database: 1018 jobs
[2026-01-25T21:30:47.866Z] [BOT] 💾 DISK STATE: 1018 jobs on disk
[2026-01-25T21:30:47.866Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1018
[2026-01-25T21:30:47.868Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:30:47.868Z] [BOT] 💾 AFTER MERGE: 1018 jobs (merged disk + memory)
[2026-01-25T21:30:47.869Z] [BOT] ✅ No jobs to archive (all 1018 jobs within 7-day window)
[2026-01-25T21:30:47.876Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
[2026-01-25T21:30:47.876Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:30:49.378Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T21:30:49.378Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:30:49.509Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T21:30:49.510Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T21:30:49.510Z] [BOT] 💾 BEFORE MERGE: 1018 jobs in memory
[2026-01-25T21:30:49.513Z] [BOT] ✅ Loaded V2 database: 1018 jobs
💾 DISK STATE: 1018 jobs on disk
[2026-01-25T21:30:49.514Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1018
[2026-01-25T21:30:49.516Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:30:49.516Z] [BOT] 💾 AFTER MERGE: 1018 jobs (merged disk + memory)
[2026-01-25T21:30:49.517Z] [BOT] ✅ No jobs to archive (all 1018 jobs within 7-day window)
[2026-01-25T21:30:49.525Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
[2026-01-25T21:30:49.525Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:30:54.027Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T21:30:54.028Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T21:30:54.028Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T21:30:54.287Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T21:30:54.288Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T21:30:54.288Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1018 jobs in memory
[2026-01-25T21:30:54.291Z] [BOT] ✅ Loaded V2 database: 1018 jobs
💾 DISK STATE: 1018 jobs on disk
[2026-01-25T21:30:54.291Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1018
[2026-01-25T21:30:54.293Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1018 jobs (merged disk + memory)
[2026-01-25T21:30:54.294Z] [BOT] ✅ No jobs to archive (all 1018 jobs within 7-day window)
[2026-01-25T21:30:54.301Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
[2026-01-25T21:30:54.302Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:30:58.804Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T21:30:58.806Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T21:30:58.900Z] [BOT] 📂 Loaded 9031 existing routing entries
[2026-01-25T21:30:59.012Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9041
   Timestamp: 2026-01-25T21:30:58.970Z
[2026-01-25T21:30:59.012Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T21:30:59.012Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T21:30:59.014Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-25T21:31:01.032Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*