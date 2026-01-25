# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T17:31:10.542Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T17:30:37.239Z] ========================================
[2026-01-25T17:30:37.241Z] Discord Bot Execution Log
[2026-01-25T17:30:37.241Z] Environment: GitHub Actions
[2026-01-25T17:30:37.241Z] Node Version: v20.20.0
[2026-01-25T17:30:37.241Z] ========================================
[2026-01-25T17:30:37.241Z] Environment Variables Check:
[2026-01-25T17:30:37.241Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T17:30:37.241Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T17:30:37.241Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T17:30:37.242Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T17:30:37.242Z] 
Multi-Channel Configuration:
[2026-01-25T17:30:37.242Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T17:30:37.242Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T17:30:37.242Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T17:30:37.242Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T17:30:37.242Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T17:30:37.242Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T17:30:37.242Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T17:30:37.242Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T17:30:37.242Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T17:30:37.243Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T17:30:37.243Z] 
Data Files Check:
[2026-01-25T17:30:37.244Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T17:30:37.248Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 594003 bytes)
[2026-01-25T17:30:37.248Z] 
========================================
[2026-01-25T17:30:37.248Z] Starting Enhanced Discord Bot...
[2026-01-25T17:30:37.249Z] ========================================
[2026-01-25T17:30:37.781Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:30:38.409Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T17:30:38.409Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T17:30:38.410Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T17:30:38.559Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T17:30:38.562Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T17:30:38.562Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T17:30:38.563Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T17:30:38.564Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T17:30:38.564Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T17:30:38.564Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T17:30:38.568Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T17:30:38.569Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T17:30:38.569Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:30:38.570Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:30:38.588Z] [BOT ERROR] (node:2495) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T17:30:39.071Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T17:30:39.072Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T17:30:39.073Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:30:39.076Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:30:39.076Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:30:39.076Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:30:39.079Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:30:39.079Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:30:39.080Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:30:39.089Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:30:40.591Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:30:40.592Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:30:40.818Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T17:30:40.818Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T17:30:40.819Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T17:30:40.819Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:30:40.823Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:30:40.824Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:30:40.824Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:30:40.827Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:30:40.827Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:30:40.828Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:30:40.836Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:30:42.336Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:30:42.336Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:30:42.696Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T17:30:42.697Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:30:42.700Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:30:42.701Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:30:42.703Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:30:42.703Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:30:42.703Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:30:42.711Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:30:42.711Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:30:44.212Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:30:44.213Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:30:44.411Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T17:30:44.411Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T17:30:44.411Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:30:44.415Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:30:44.415Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:30:44.417Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:30:44.417Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:30:44.427Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:30:44.427Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:30:48.928Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T17:30:48.929Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T17:30:48.929Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:30:48.929Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:30:49.170Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T17:30:49.170Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T17:30:49.171Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T17:30:49.171Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:30:49.175Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:30:49.175Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:30:49.175Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:30:49.178Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:30:49.178Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:30:49.178Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:30:49.187Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:30:49.188Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:30:50.689Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T17:30:50.690Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:30:50.690Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:30:50.876Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T17:30:50.876Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T17:30:50.878Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:30:50.882Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:30:50.882Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:30:50.882Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:30:50.884Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:30:50.885Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:30:50.885Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:30:50.894Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:30:52.395Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T17:30:52.395Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:30:54.124Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T17:30:54.124Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T17:30:54.124Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:30:54.128Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:30:54.128Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:30:54.131Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:30:54.131Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:30:54.132Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:30:54.140Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:30:54.140Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:30:55.641Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T17:30:55.641Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:30:55.641Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:30:56.078Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T17:30:56.079Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T17:30:56.079Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T17:30:56.079Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:30:56.082Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:30:56.082Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:30:56.084Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:30:56.085Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:30:56.085Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:30:56.093Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:30:57.594Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T17:30:57.594Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:30:57.594Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:30:57.811Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T17:30:57.812Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T17:30:57.812Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T17:30:57.812Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:30:57.816Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:30:57.816Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:30:57.818Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:30:57.818Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:30:57.819Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:30:57.827Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:30:57.827Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:31:02.330Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T17:31:02.330Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T17:31:02.331Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T17:31:02.331Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:31:02.686Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T17:31:02.686Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T17:31:02.687Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T17:31:02.687Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:31:02.690Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:31:02.690Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:31:02.692Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:31:02.693Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:31:02.693Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:31:02.701Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:31:02.701Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:31:07.204Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T17:31:07.205Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T17:31:07.299Z] [BOT] 📂 Loaded 8861 existing routing entries
[2026-01-25T17:31:07.416Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T17:31:07.416Z] [BOT] Total entries: 8871
   Timestamp: 2026-01-25T17:31:07.372Z
[2026-01-25T17:31:07.417Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T17:31:07.417Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T17:31:07.417Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T17:31:07.417Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T17:31:07.417Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-25T17:31:09.433Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2495) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*