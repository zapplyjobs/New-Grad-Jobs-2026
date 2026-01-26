# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T00:56:56.766Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T00:56:25.040Z] ========================================
[2026-01-26T00:56:25.042Z] Discord Bot Execution Log
[2026-01-26T00:56:25.042Z] Environment: GitHub Actions
[2026-01-26T00:56:25.042Z] Node Version: v20.20.0
[2026-01-26T00:56:25.042Z] ========================================
[2026-01-26T00:56:25.042Z] Environment Variables Check:
[2026-01-26T00:56:25.042Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T00:56:25.043Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T00:56:25.043Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T00:56:25.043Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T00:56:25.043Z] 
Multi-Channel Configuration:
[2026-01-26T00:56:25.043Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T00:56:25.043Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T00:56:25.043Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T00:56:25.043Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T00:56:25.043Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T00:56:25.043Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T00:56:25.043Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T00:56:25.043Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T00:56:25.044Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T00:56:25.044Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T00:56:25.044Z] 
Data Files Check:
[2026-01-26T00:56:25.045Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T00:56:25.049Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 559690 bytes)
[2026-01-26T00:56:25.049Z] 
========================================
[2026-01-26T00:56:25.049Z] Starting Enhanced Discord Bot...
[2026-01-26T00:56:25.049Z] ========================================
[2026-01-26T00:56:25.582Z] [BOT] ✅ Loaded V2 database: 980 jobs
[2026-01-26T00:56:26.110Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T00:56:26.110Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T00:56:26.110Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T00:56:26.229Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T00:56:26.233Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T00:56:26.234Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T00:56:26.234Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T00:56:26.235Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T00:56:26.235Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-26T00:56:26.235Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T00:56:26.239Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T00:56:26.240Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T00:56:26.240Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T00:56:26.257Z] [BOT ERROR] (node:2491) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T00:56:26.609Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T00:56:26.609Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T00:56:26.609Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T00:56:26.610Z] [BOT] 💾 BEFORE MERGE: 980 jobs in memory
[2026-01-26T00:56:26.613Z] [BOT] ✅ Loaded V2 database: 980 jobs
[2026-01-26T00:56:26.613Z] [BOT] 💾 DISK STATE: 980 jobs on disk
[2026-01-26T00:56:26.613Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=980
[2026-01-26T00:56:26.615Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:56:26.616Z] [BOT] 💾 AFTER MERGE: 980 jobs (merged disk + memory)
[2026-01-26T00:56:26.617Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T00:56:26.625Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
✅ Archiving complete: 7 archived, 973 active
[2026-01-26T00:56:26.633Z] [BOT] 💾 Saved posted_jobs.json: 973 active jobs
[2026-01-26T00:56:26.633Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T00:56:28.136Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T00:56:28.421Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T00:56:28.421Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T00:56:28.421Z] [BOT] 💾 BEFORE MERGE: 973 jobs in memory
[2026-01-26T00:56:28.424Z] [BOT] ✅ Loaded V2 database: 973 jobs
💾 DISK STATE: 973 jobs on disk
[2026-01-26T00:56:28.425Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=973
[2026-01-26T00:56:28.426Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:56:28.427Z] [BOT] 💾 AFTER MERGE: 973 jobs (merged disk + memory)
[2026-01-26T00:56:28.427Z] [BOT] ✅ No jobs to archive (all 973 jobs within 7-day window)
[2026-01-26T00:56:28.434Z] [BOT] 💾 Saved posted_jobs.json: 973 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T00:56:29.934Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T00:56:30.179Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T00:56:30.179Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T00:56:30.179Z] [BOT] 💾 BEFORE MERGE: 973 jobs in memory
[2026-01-26T00:56:30.182Z] [BOT] ✅ Loaded V2 database: 973 jobs
💾 DISK STATE: 973 jobs on disk
[2026-01-26T00:56:30.182Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=973
[2026-01-26T00:56:30.184Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:56:30.184Z] [BOT] 💾 AFTER MERGE: 973 jobs (merged disk + memory)
[2026-01-26T00:56:30.185Z] [BOT] ✅ No jobs to archive (all 973 jobs within 7-day window)
[2026-01-26T00:56:30.192Z] [BOT] 💾 Saved posted_jobs.json: 973 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T00:56:31.693Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-26T00:56:31.693Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T00:56:31.877Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T00:56:31.877Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T00:56:31.877Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T00:56:31.877Z] [BOT] 💾 BEFORE MERGE: 973 jobs in memory
[2026-01-26T00:56:31.880Z] [BOT] ✅ Loaded V2 database: 973 jobs
💾 DISK STATE: 973 jobs on disk
[2026-01-26T00:56:31.881Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=973
[2026-01-26T00:56:31.883Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:56:31.883Z] [BOT] 💾 AFTER MERGE: 973 jobs (merged disk + memory)
[2026-01-26T00:56:31.884Z] [BOT] ✅ No jobs to archive (all 973 jobs within 7-day window)
[2026-01-26T00:56:31.890Z] [BOT] 💾 Saved posted_jobs.json: 973 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T00:56:36.392Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T00:56:36.393Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T00:56:36.393Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T00:56:36.806Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-26T00:56:36.807Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T00:56:36.807Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T00:56:36.807Z] [BOT] 💾 BEFORE MERGE: 973 jobs in memory
[2026-01-26T00:56:36.811Z] [BOT] ✅ Loaded V2 database: 973 jobs
[2026-01-26T00:56:36.811Z] [BOT] 💾 DISK STATE: 973 jobs on disk
[2026-01-26T00:56:36.811Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=973
[2026-01-26T00:56:36.814Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:56:36.814Z] [BOT] 💾 AFTER MERGE: 973 jobs (merged disk + memory)
[2026-01-26T00:56:36.814Z] [BOT] ✅ No jobs to archive (all 973 jobs within 7-day window)
[2026-01-26T00:56:36.823Z] [BOT] 💾 Saved posted_jobs.json: 973 active jobs
[2026-01-26T00:56:36.823Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T00:56:38.324Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T00:56:38.324Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T00:56:38.593Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T00:56:38.593Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T00:56:38.594Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T00:56:38.594Z] [BOT] 💾 BEFORE MERGE: 973 jobs in memory
[2026-01-26T00:56:38.597Z] [BOT] ✅ Loaded V2 database: 973 jobs
[2026-01-26T00:56:38.597Z] [BOT] 💾 DISK STATE: 973 jobs on disk
[2026-01-26T00:56:38.597Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=973
[2026-01-26T00:56:38.599Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:56:38.599Z] [BOT] 💾 AFTER MERGE: 973 jobs (merged disk + memory)
[2026-01-26T00:56:38.600Z] [BOT] ✅ No jobs to archive (all 973 jobs within 7-day window)
[2026-01-26T00:56:38.608Z] [BOT] 💾 Saved posted_jobs.json: 973 active jobs
[2026-01-26T00:56:38.608Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T00:56:40.109Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-26T00:56:40.110Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T00:56:40.494Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T00:56:40.494Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T00:56:40.494Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T00:56:40.494Z] [BOT] 💾 BEFORE MERGE: 973 jobs in memory
[2026-01-26T00:56:40.497Z] [BOT] ✅ Loaded V2 database: 973 jobs
[2026-01-26T00:56:40.498Z] [BOT] 💾 DISK STATE: 973 jobs on disk
[2026-01-26T00:56:40.498Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=973
[2026-01-26T00:56:40.500Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:56:40.500Z] [BOT] 💾 AFTER MERGE: 973 jobs (merged disk + memory)
[2026-01-26T00:56:40.501Z] [BOT] ✅ No jobs to archive (all 973 jobs within 7-day window)
[2026-01-26T00:56:40.509Z] [BOT] 💾 Saved posted_jobs.json: 973 active jobs
[2026-01-26T00:56:40.509Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T00:56:42.009Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T00:56:42.010Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T00:56:42.233Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T00:56:42.233Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T00:56:42.233Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T00:56:42.233Z] [BOT] 💾 BEFORE MERGE: 973 jobs in memory
[2026-01-26T00:56:42.236Z] [BOT] ✅ Loaded V2 database: 973 jobs
💾 DISK STATE: 973 jobs on disk
[2026-01-26T00:56:42.236Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=973
[2026-01-26T00:56:42.240Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:56:42.240Z] [BOT] 💾 AFTER MERGE: 973 jobs (merged disk + memory)
[2026-01-26T00:56:42.241Z] [BOT] ✅ No jobs to archive (all 973 jobs within 7-day window)
[2026-01-26T00:56:42.247Z] [BOT] 💾 Saved posted_jobs.json: 973 active jobs
[2026-01-26T00:56:42.247Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T00:56:43.749Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T00:56:43.749Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T00:56:44.046Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T00:56:44.046Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T00:56:44.046Z] [BOT] 💾 BEFORE MERGE: 973 jobs in memory
[2026-01-26T00:56:44.049Z] [BOT] ✅ Loaded V2 database: 973 jobs
💾 DISK STATE: 973 jobs on disk
[2026-01-26T00:56:44.050Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=973
[2026-01-26T00:56:44.051Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:56:44.052Z] [BOT] 💾 AFTER MERGE: 973 jobs (merged disk + memory)
[2026-01-26T00:56:44.052Z] [BOT] ✅ No jobs to archive (all 973 jobs within 7-day window)
[2026-01-26T00:56:44.059Z] [BOT] 💾 Saved posted_jobs.json: 973 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T00:56:48.560Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T00:56:48.561Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T00:56:48.561Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T00:56:48.766Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T00:56:48.766Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T00:56:48.766Z] [BOT] 💾 BEFORE MERGE: 973 jobs in memory
[2026-01-26T00:56:48.770Z] [BOT] ✅ Loaded V2 database: 973 jobs
💾 DISK STATE: 973 jobs on disk
[2026-01-26T00:56:48.770Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=973
[2026-01-26T00:56:48.772Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:56:48.772Z] [BOT] 💾 AFTER MERGE: 973 jobs (merged disk + memory)
[2026-01-26T00:56:48.773Z] [BOT] ✅ No jobs to archive (all 973 jobs within 7-day window)
[2026-01-26T00:56:48.780Z] [BOT] 💾 Saved posted_jobs.json: 973 active jobs
[2026-01-26T00:56:48.781Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T00:56:53.283Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T00:56:53.284Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T00:56:53.378Z] [BOT] 📂 Loaded 9151 existing routing entries
[2026-01-26T00:56:53.491Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9161
[2026-01-26T00:56:53.492Z] [BOT] Timestamp: 2026-01-26T00:56:53.448Z
[2026-01-26T00:56:53.492Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T00:56:53.492Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T00:56:53.492Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T00:56:53.492Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T00:56:53.492Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T00:56:53.493Z] [BOT] [STATS] Channel stats saved
[2026-01-26T00:56:55.511Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2491) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*