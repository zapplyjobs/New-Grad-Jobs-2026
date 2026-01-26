# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T16:01:09.726Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T16:00:36.508Z] ========================================
[2026-01-26T16:00:36.510Z] Discord Bot Execution Log
[2026-01-26T16:00:36.510Z] Environment: GitHub Actions
[2026-01-26T16:00:36.510Z] Node Version: v20.20.0
[2026-01-26T16:00:36.511Z] ========================================
[2026-01-26T16:00:36.511Z] Environment Variables Check:
[2026-01-26T16:00:36.511Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T16:00:36.511Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T16:00:36.511Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T16:00:36.511Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T16:00:36.511Z] 
Multi-Channel Configuration:
[2026-01-26T16:00:36.511Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T16:00:36.511Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T16:00:36.511Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T16:00:36.511Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T16:00:36.511Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T16:00:36.512Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T16:00:36.512Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T16:00:36.512Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T16:00:36.512Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T16:00:36.512Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T16:00:36.512Z] 
Data Files Check:
[2026-01-26T16:00:36.513Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T16:00:36.517Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 494573 bytes)
[2026-01-26T16:00:36.517Z] 
========================================
[2026-01-26T16:00:36.517Z] Starting Enhanced Discord Bot...
[2026-01-26T16:00:36.517Z] ========================================
[2026-01-26T16:00:37.045Z] [BOT] ✅ Loaded V2 database: 860 jobs
[2026-01-26T16:00:37.707Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T16:00:37.708Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T16:00:37.708Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T16:00:37.829Z] [BOT] ✅ Loaded pending queue: 2866 total (2816 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T16:00:37.832Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T16:00:37.832Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T16:00:37.833Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T16:00:37.834Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T16:00:37.834Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-26T16:00:37.834Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-26T16:00:37.835Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T16:00:37.838Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T16:00:37.838Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T16:00:37.839Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T16:00:37.856Z] [BOT ERROR] (node:2503) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T16:00:38.238Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T16:00:38.238Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T16:00:38.238Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T16:00:38.239Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T16:00:38.241Z] [BOT] ✅ Loaded V2 database: 860 jobs
[2026-01-26T16:00:38.242Z] [BOT] 💾 DISK STATE: 860 jobs on disk
[2026-01-26T16:00:38.242Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T16:00:38.244Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:00:38.244Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T16:00:38.245Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T16:00:38.250Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-26T16:00:38.250Z] [BOT] ✅ Archiving complete: 1 archived, 859 active
[2026-01-26T16:00:38.256Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:00:39.758Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T16:00:40.003Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T16:00:40.004Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T16:00:40.004Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T16:00:40.004Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:00:40.007Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:00:40.007Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:00:40.008Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:00:40.009Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:00:40.009Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:00:40.016Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:00:41.516Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-26T16:00:41.516Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T16:00:41.728Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T16:00:41.728Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:00:41.731Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:00:41.731Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:00:41.733Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:00:41.733Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:00:41.734Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:00:41.740Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:00:43.241Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T16:00:43.724Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T16:00:43.724Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T16:00:43.724Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:00:43.727Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:00:43.728Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:00:43.729Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:00:43.729Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:00:43.730Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:00:43.736Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:00:43.736Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:00:48.237Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T16:00:48.238Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T16:00:48.238Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:00:48.462Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T16:00:48.462Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:00:48.465Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:00:48.467Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:00:48.469Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:00:48.469Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:00:48.470Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:00:48.478Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:00:49.979Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T16:00:49.979Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:00:50.262Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T16:00:50.262Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T16:00:50.262Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:00:50.265Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:00:50.265Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:00:50.265Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:00:50.267Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:00:50.267Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:00:50.268Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:00:50.276Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:00:50.276Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:00:51.778Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-26T16:00:51.778Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:00:51.975Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T16:00:51.976Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:00:51.978Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:00:51.979Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:00:51.980Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:00:51.981Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:00:51.981Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:00:51.988Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:00:51.988Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:00:53.490Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T16:00:53.490Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T16:00:53.490Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:00:53.657Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T16:00:53.657Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T16:00:53.657Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:00:53.660Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:00:53.660Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:00:53.662Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:00:53.662Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:00:53.663Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:00:53.669Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:00:55.170Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T16:00:55.171Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:00:55.420Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T16:00:55.420Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T16:00:55.420Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:00:55.423Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:00:55.423Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:00:55.425Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:00:55.426Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:00:55.432Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:00:55.432Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:00:59.933Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T16:00:59.933Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T16:00:59.934Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T16:01:01.445Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T16:01:01.445Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T16:01:01.445Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T16:01:01.445Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:01:01.448Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:01:01.448Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:01:01.448Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:01:01.450Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:01:01.450Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:01:01.451Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:01:01.457Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:01:01.458Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:01:05.960Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T16:01:05.961Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T16:01:06.068Z] [BOT] 📂 Loaded 9551 existing routing entries
[2026-01-26T16:01:06.189Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-26T16:01:06.189Z] [BOT] New entries: 10
   Total entries: 9561
   Timestamp: 2026-01-26T16:01:06.143Z
[2026-01-26T16:01:06.190Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T16:01:06.190Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T16:01:06.190Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T16:01:06.190Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-26T16:01:06.190Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T16:01:06.191Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:01:06.200Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:01:06.200Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:01:06.201Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:01:06.202Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:01:06.208Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:01:06.209Z] [BOT] ✅ Database saved successfully
[2026-01-26T16:01:08.226Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2503) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*