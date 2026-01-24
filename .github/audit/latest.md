# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T22:43:48.804Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T22:43:17.287Z] ========================================
[2026-01-24T22:43:17.289Z] Discord Bot Execution Log
[2026-01-24T22:43:17.289Z] Environment: GitHub Actions
[2026-01-24T22:43:17.289Z] Node Version: v20.20.0
[2026-01-24T22:43:17.289Z] ========================================
[2026-01-24T22:43:17.289Z] Environment Variables Check:
[2026-01-24T22:43:17.289Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T22:43:17.289Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T22:43:17.289Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T22:43:17.290Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T22:43:17.290Z] 
Multi-Channel Configuration:
[2026-01-24T22:43:17.290Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T22:43:17.290Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T22:43:17.290Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T22:43:17.290Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T22:43:17.290Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T22:43:17.290Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T22:43:17.290Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T22:43:17.290Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T22:43:17.290Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T22:43:17.290Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T22:43:17.290Z] 
Data Files Check:
[2026-01-24T22:43:17.291Z] .github/data/new_jobs.json: ✅ Exists (10 items, 126343 bytes)
[2026-01-24T22:43:17.296Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 658933 bytes)
[2026-01-24T22:43:17.296Z] 
========================================
[2026-01-24T22:43:17.296Z] Starting Enhanced Discord Bot...
[2026-01-24T22:43:17.296Z] ========================================
[2026-01-24T22:43:17.825Z] [BOT] ✅ Loaded V2 database: 1160 jobs
[2026-01-24T22:43:18.299Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T22:43:18.300Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T22:43:18.300Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T22:43:18.418Z] [BOT] ✅ Loaded pending queue: 2874 total (2824 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-24T22:43:18.421Z] [BOT] ⏭️  Skipping duplicate: JID_8a23ff6d (posted within 7 days)
[2026-01-24T22:43:18.421Z] [BOT] ⏭️ Skipping already posted: ROLE_fb2c6bf8 at gusto
[2026-01-24T22:43:18.421Z] [BOT] ⏭️  Skipping duplicate: JID_570fa866 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99be8aad at gusto
[2026-01-24T22:43:18.422Z] [BOT] ⏭️  Skipping duplicate: JID_3441115b (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer- Persistence Infrastructure at discord
[2026-01-24T22:43:18.423Z] [BOT] ⏭️  Skipping duplicate: JID_ffe128ac (posted within 7 days)
[2026-01-24T22:43:18.423Z] [BOT] ⏭️ Skipping already posted: Software Engineer, Python Language at anthropic
[2026-01-24T22:43:18.424Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-01-24T22:43:18.424Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
[2026-01-24T22:43:18.424Z] [BOT] 🚫 Skipping blacklisted job: Workforce Management Contact Routing Lead at gusto
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-01-24T22:43:18.425Z] [BOT] 🚫 Skipping blacklisted job: Data Science Senior Manager at gusto
🚫 Skipping blacklisted job: Staff Data Scientist - Walmart Connect at Walmart
🚫 Skipping blacklisted job: Technology Leadership Development Program Associate at Ameriprise Financial
🚫 Skipping blacklisted job: Postdoctoral Appointee - MSD Experimental Condensed Matter Physics at Argonne National Laboratory
[2026-01-24T22:43:18.425Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Business Development at brex
[2026-01-24T22:43:18.425Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Business Development (Embedded Finance) at brex
🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
[2026-01-24T22:43:18.524Z] [BOT] ✅ Loaded pending queue: 2874 total (2824 pending, 50 enriched, 0 posted)
[2026-01-24T22:43:18.689Z] [BOT] ✅ Saved pending queue: 2862 total (2824 pending, 38 enriched, 0 posted)
🗑️ Removed 12 blacklisted jobs from pending queue
[2026-01-24T22:43:18.689Z] [BOT] 📋 After blacklist filter: 34 jobs (12 blacklisted)
📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-24T22:43:18.690Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-01-24T22:43:18.690Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-24T22:43:18.691Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
⏸️ Limiting to 10 jobs this run, 36 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T22:43:18.694Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-24T22:43:18.695Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-24T22:43:18.695Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T22:43:18.713Z] [BOT ERROR] (node:4443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T22:43:18.934Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-24T22:43:18.934Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-24T22:43:18.934Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-24T22:43:18.935Z] [BOT] 💾 BEFORE ARCHIVING: 1161 jobs in database
[2026-01-24T22:43:18.936Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T22:43:18.941Z] [BOT] 📦 Archived 21 jobs to 2026-01.json (21 total in archive)
[2026-01-24T22:43:18.941Z] [BOT] ✅ Archiving complete: 21 archived, 1140 active
[2026-01-24T22:43:18.954Z] [BOT] 💾 Saved posted_jobs.json: 1140 active jobs
[2026-01-24T22:43:18.954Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T22:43:20.457Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T22:43:20.645Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-24T22:43:20.645Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-24T22:43:20.645Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1141 jobs in database
[2026-01-24T22:43:20.646Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-24T22:43:20.654Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:43:22.155Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T22:43:22.549Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-24T22:43:22.549Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-24T22:43:22.550Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-24T22:43:22.550Z] [BOT] 💾 BEFORE ARCHIVING: 1142 jobs in database
[2026-01-24T22:43:22.551Z] [BOT] ✅ No jobs to archive (all 1142 jobs within 7-day window)
[2026-01-24T22:43:22.559Z] [BOT] 💾 Saved posted_jobs.json: 1142 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:43:24.061Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T22:43:24.262Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-24T22:43:24.263Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-24T22:43:24.263Z] [BOT] 💾 BEFORE ARCHIVING: 1143 jobs in database
[2026-01-24T22:43:24.264Z] [BOT] ✅ No jobs to archive (all 1143 jobs within 7-day window)
[2026-01-24T22:43:24.271Z] [BOT] 💾 Saved posted_jobs.json: 1143 active jobs
[2026-01-24T22:43:24.271Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T22:43:28.774Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-24T22:43:28.774Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T22:43:28.774Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:43:29.024Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-24T22:43:29.025Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T22:43:29.025Z] [BOT] 💾 BEFORE ARCHIVING: 1144 jobs in database
[2026-01-24T22:43:29.026Z] [BOT] ✅ No jobs to archive (all 1144 jobs within 7-day window)
[2026-01-24T22:43:29.035Z] [BOT] 💾 Saved posted_jobs.json: 1144 active jobs
[2026-01-24T22:43:29.035Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T22:43:30.536Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-24T22:43:30.537Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:43:30.706Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-24T22:43:30.706Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-24T22:43:30.707Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-24T22:43:30.707Z] [BOT] 💾 BEFORE ARCHIVING: 1145 jobs in database
[2026-01-24T22:43:30.708Z] [BOT] ✅ No jobs to archive (all 1145 jobs within 7-day window)
[2026-01-24T22:43:30.722Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
[2026-01-24T22:43:30.722Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T22:43:32.223Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T22:43:32.224Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:43:32.491Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-24T22:43:32.491Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-24T22:43:32.492Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-24T22:43:32.492Z] [BOT] 💾 BEFORE ARCHIVING: 1146 jobs in database
[2026-01-24T22:43:32.493Z] [BOT] ✅ No jobs to archive (all 1146 jobs within 7-day window)
[2026-01-24T22:43:32.501Z] [BOT] 💾 Saved posted_jobs.json: 1146 active jobs
[2026-01-24T22:43:32.501Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T22:43:34.003Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-24T22:43:34.003Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:43:34.225Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-24T22:43:34.225Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T22:43:34.226Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T22:43:34.235Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
[2026-01-24T22:43:34.235Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T22:43:35.737Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T22:43:35.737Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:43:35.987Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-24T22:43:35.987Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-24T22:43:35.987Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1148 jobs in database
[2026-01-24T22:43:35.988Z] [BOT] ✅ No jobs to archive (all 1148 jobs within 7-day window)
[2026-01-24T22:43:35.997Z] [BOT] 💾 Saved posted_jobs.json: 1148 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:43:40.500Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-24T22:43:40.500Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-24T22:43:40.500Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-24T22:43:40.748Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-24T22:43:40.749Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-24T22:43:40.749Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-24T22:43:40.749Z] [BOT] 💾 BEFORE ARCHIVING: 1149 jobs in database
[2026-01-24T22:43:40.750Z] [BOT] ✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-24T22:43:40.759Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
[2026-01-24T22:43:40.759Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T22:43:45.260Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T22:43:45.262Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T22:43:45.352Z] [BOT] 📂 Loaded 8231 existing routing entries
[2026-01-24T22:43:45.466Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T22:43:45.466Z] [BOT] Total entries: 8241
   Timestamp: 2026-01-24T22:43:45.430Z
[2026-01-24T22:43:45.466Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T22:43:45.467Z] [BOT] Total attempts: 26
   Successful: 10
   Failed: 0
   Skipped: 16
[2026-01-24T22:43:45.467Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T22:43:45.467Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-24T22:43:45.467Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-24T22:43:45.467Z] [BOT] [STATS] Channel stats saved
[2026-01-24T22:43:47.489Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*