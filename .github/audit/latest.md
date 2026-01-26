# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T11:30:50.162Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T11:30:19.985Z] ========================================
[2026-01-26T11:30:19.987Z] Discord Bot Execution Log
[2026-01-26T11:30:19.987Z] Environment: GitHub Actions
[2026-01-26T11:30:19.987Z] Node Version: v20.20.0
[2026-01-26T11:30:19.987Z] ========================================
[2026-01-26T11:30:19.987Z] Environment Variables Check:
[2026-01-26T11:30:19.987Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T11:30:19.988Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T11:30:19.988Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T11:30:19.988Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T11:30:19.988Z] 
Multi-Channel Configuration:
[2026-01-26T11:30:19.988Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T11:30:19.988Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T11:30:19.988Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T11:30:19.988Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T11:30:19.988Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T11:30:19.988Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T11:30:19.988Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T11:30:19.989Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T11:30:19.989Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T11:30:19.989Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T11:30:19.989Z] 
Data Files Check:
[2026-01-26T11:30:19.990Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T11:30:19.994Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 497243 bytes)
[2026-01-26T11:30:19.994Z] 
========================================
[2026-01-26T11:30:19.994Z] Starting Enhanced Discord Bot...
[2026-01-26T11:30:19.994Z] ========================================
[2026-01-26T11:30:20.553Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:30:20.985Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T11:30:20.985Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T11:30:20.986Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T11:30:21.108Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T11:30:21.111Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T11:30:21.112Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T11:30:21.112Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T11:30:21.113Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T11:30:21.113Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-26T11:30:21.113Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T11:30:21.113Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T11:30:21.117Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T11:30:21.117Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T11:30:21.117Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:30:21.134Z] [BOT ERROR] (node:2490) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T11:30:21.335Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T11:30:21.335Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T11:30:21.335Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T11:30:21.336Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:30:21.339Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:30:21.339Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:30:21.339Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:30:21.341Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:30:21.341Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:30:21.342Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:30:21.353Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:30:22.855Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:30:23.046Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T11:30:23.046Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T11:30:23.046Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:30:23.049Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:30:23.049Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:30:23.050Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:30:23.051Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:30:23.051Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:30:23.052Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:30:23.061Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:30:24.563Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-26T11:30:24.563Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:30:24.708Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T11:30:24.709Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T11:30:24.709Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:30:24.712Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:30:24.712Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:30:24.714Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:30:24.714Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:30:24.714Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:30:24.724Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:30:26.225Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:30:26.425Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T11:30:26.425Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T11:30:26.426Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:30:26.429Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:30:26.429Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:30:26.431Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:30:26.431Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:30:26.431Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:30:26.437Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:30:30.939Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T11:30:30.939Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T11:30:30.939Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:30:31.120Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T11:30:31.120Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T11:30:31.120Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:30:31.125Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:30:31.125Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:30:31.125Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:30:31.127Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:30:31.127Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:30:31.128Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:30:31.136Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:30:32.637Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T11:30:32.638Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:30:32.776Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T11:30:32.777Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:30:32.780Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:30:32.780Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:30:32.782Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:30:32.782Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:30:32.789Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T11:30:32.789Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T11:30:34.290Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T11:30:34.290Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:30:34.532Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T11:30:34.533Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:30:34.536Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:30:34.536Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:30:34.539Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:30:34.539Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:30:34.539Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:30:34.546Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:30:36.047Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-26T11:30:36.047Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:30:36.155Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T11:30:36.155Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T11:30:36.155Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:30:36.158Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:30:36.158Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:30:36.159Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:30:36.162Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:30:36.162Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:30:36.162Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:30:36.169Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:30:37.670Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-26T11:30:37.670Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:30:37.981Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T11:30:37.981Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T11:30:37.981Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:30:37.984Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:30:37.984Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:30:37.986Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:30:37.986Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:30:37.986Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:30:37.994Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:30:42.495Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T11:30:42.496Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T11:30:42.496Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T11:30:42.674Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T11:30:42.674Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T11:30:42.674Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:30:42.677Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:30:42.677Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:30:42.679Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:30:42.680Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:30:42.680Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:30:42.689Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:30:47.192Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T11:30:47.194Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T11:30:47.303Z] [BOT] 📂 Loaded 9421 existing routing entries
[2026-01-26T11:30:47.421Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T11:30:47.421Z] [BOT] Total entries: 9431
   Timestamp: 2026-01-26T11:30:47.376Z
[2026-01-26T11:30:47.421Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T11:30:47.421Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T11:30:47.422Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T11:30:47.422Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T11:30:47.422Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T11:30:47.422Z] [BOT] [STATS] Channel stats saved
[2026-01-26T11:30:49.441Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2490) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*