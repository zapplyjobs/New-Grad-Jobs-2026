# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T10:45:57.173Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T10:45:26.553Z] ========================================
[2026-01-25T10:45:26.555Z] Discord Bot Execution Log
[2026-01-25T10:45:26.555Z] Environment: GitHub Actions
[2026-01-25T10:45:26.555Z] Node Version: v20.20.0
[2026-01-25T10:45:26.555Z] ========================================
[2026-01-25T10:45:26.555Z] Environment Variables Check:
[2026-01-25T10:45:26.555Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T10:45:26.555Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T10:45:26.555Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T10:45:26.556Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T10:45:26.556Z] 
Multi-Channel Configuration:
[2026-01-25T10:45:26.556Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T10:45:26.556Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T10:45:26.556Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T10:45:26.556Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T10:45:26.556Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T10:45:26.556Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T10:45:26.556Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T10:45:26.556Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T10:45:26.557Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T10:45:26.557Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T10:45:26.557Z] 
Data Files Check:
[2026-01-25T10:45:26.558Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T10:45:26.563Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 599443 bytes)
[2026-01-25T10:45:26.563Z] 
========================================
[2026-01-25T10:45:26.563Z] Starting Enhanced Discord Bot...
[2026-01-25T10:45:26.563Z] ========================================
[2026-01-25T10:45:27.124Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:45:27.799Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T10:45:27.800Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T10:45:27.800Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T10:45:27.924Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T10:45:27.928Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T10:45:27.928Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T10:45:27.929Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T10:45:27.930Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T10:45:27.930Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-25T10:45:27.930Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T10:45:27.934Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T10:45:27.934Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T10:45:27.934Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T10:45:27.935Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:45:27.952Z] [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T10:45:28.156Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T10:45:28.156Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T10:45:28.157Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T10:45:28.157Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:45:28.161Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:45:28.161Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:45:28.161Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:45:28.164Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:45:28.164Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:45:28.165Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:45:28.182Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:45:29.684Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T10:45:29.684Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T10:45:29.684Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:45:29.848Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T10:45:29.848Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T10:45:29.848Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:45:29.852Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:45:29.852Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:45:29.852Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:45:29.854Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:45:29.854Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:45:29.855Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:45:29.863Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T10:45:29.863Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T10:45:31.363Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T10:45:31.363Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T10:45:31.363Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:45:31.574Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T10:45:31.575Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T10:45:31.575Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T10:45:31.575Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:45:31.578Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:45:31.578Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:45:31.579Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:45:31.581Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:45:31.581Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:45:31.582Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:45:31.591Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:45:33.091Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T10:45:33.092Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:45:33.255Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T10:45:33.255Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T10:45:33.255Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T10:45:33.255Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:45:33.259Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:45:33.259Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:45:33.261Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:45:33.262Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:45:33.271Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:45:37.773Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T10:45:37.774Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T10:45:37.774Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T10:45:37.775Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:45:38.057Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T10:45:38.058Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T10:45:38.058Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:45:38.063Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:45:38.063Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:45:38.063Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:45:38.065Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:45:38.066Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:45:38.066Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:45:38.076Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:45:39.578Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T10:45:39.578Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T10:45:39.578Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:45:39.722Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T10:45:39.722Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T10:45:39.723Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:45:39.728Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:45:39.728Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:45:39.728Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:45:39.731Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:45:39.731Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:45:39.732Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:45:39.741Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:45:41.241Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T10:45:41.242Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:45:41.437Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T10:45:41.438Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T10:45:41.438Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:45:41.442Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:45:41.442Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:45:41.444Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:45:41.445Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:45:41.454Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:45:42.955Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T10:45:42.955Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T10:45:42.956Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:45:43.142Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T10:45:43.142Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T10:45:43.143Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:45:43.146Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:45:43.146Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:45:43.146Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:45:43.148Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:45:43.149Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:45:43.149Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:45:43.156Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:45:44.658Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T10:45:44.658Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:45:44.870Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T10:45:44.871Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T10:45:44.871Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T10:45:44.871Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:45:44.875Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:45:44.875Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:45:44.878Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:45:44.878Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:45:44.879Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:45:44.886Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T10:45:44.887Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T10:45:49.388Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T10:45:49.388Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T10:45:49.389Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T10:45:49.389Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:45:49.654Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T10:45:49.654Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T10:45:49.655Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:45:49.658Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:45:49.658Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:45:49.658Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:45:49.660Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:45:49.660Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:45:49.661Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:45:49.668Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:45:54.171Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T10:45:54.172Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T10:45:54.269Z] [BOT] 📂 Loaded 8611 existing routing entries
[2026-01-25T10:45:54.382Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8621
[2026-01-25T10:45:54.382Z] [BOT] Timestamp: 2026-01-25T10:45:54.341Z
[2026-01-25T10:45:54.383Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T10:45:54.383Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T10:45:54.383Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T10:45:54.383Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T10:45:54.383Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T10:45:54.384Z] [BOT] [STATS] Channel stats saved
[2026-01-25T10:45:56.402Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*