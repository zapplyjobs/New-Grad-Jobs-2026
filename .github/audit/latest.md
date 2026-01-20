# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T11:32:05.768Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T11:31:49.467Z] ========================================
[2026-01-20T11:31:49.469Z] Discord Bot Execution Log
[2026-01-20T11:31:49.469Z] Environment: GitHub Actions
[2026-01-20T11:31:49.469Z] Node Version: v20.19.6
[2026-01-20T11:31:49.469Z] ========================================
[2026-01-20T11:31:49.469Z] Environment Variables Check:
[2026-01-20T11:31:49.469Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T11:31:49.469Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T11:31:49.469Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T11:31:49.469Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T11:31:49.469Z] 
Multi-Channel Configuration:
[2026-01-20T11:31:49.470Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T11:31:49.470Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T11:31:49.470Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T11:31:49.470Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T11:31:49.470Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T11:31:49.470Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T11:31:49.470Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T11:31:49.470Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T11:31:49.470Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T11:31:49.470Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T11:31:49.470Z] 
Data Files Check:
[2026-01-20T11:31:49.472Z] .github/data/new_jobs.json: ✅ Exists (10 items, 175196 bytes)
[2026-01-20T11:31:49.484Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1609425 bytes)
[2026-01-20T11:31:49.484Z] 
========================================
[2026-01-20T11:31:49.484Z] Starting Enhanced Discord Bot...
[2026-01-20T11:31:49.484Z] ========================================
[2026-01-20T11:31:50.046Z] [BOT] ✅ Loaded V2 database: 2894 jobs
[2026-01-20T11:31:50.874Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T11:31:50.874Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T11:31:50.875Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T11:31:50.992Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T11:31:50.996Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T11:31:50.996Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T11:31:50.996Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T11:31:50.997Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-20T11:31:50.997Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T11:31:50.999Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T11:31:51.000Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T11:31:51.001Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T11:31:51.001Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T11:31:51.001Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T11:31:51.001Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T11:31:51.002Z] [BOT ERROR] ⚠️ No channel configured for job: Designer Advocate - Figma Weave (New York, United States) - skipping
[2026-01-20T11:31:51.002Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-20T11:31:51.003Z] [BOT] 📍 [ROUTING] "Supervisor, Customer Success Team (Onsite - Relocation Assistance Available)" @ coinbase
[2026-01-20T11:31:51.003Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-20T11:31:51.008Z] [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T11:31:51.228Z] [BOT] ✅ Posted message: Supervisor, Customer Success Team (Onsite - Relocation Assistance Available) @ coinbase in #ai-jobs
[2026-01-20T11:31:51.228Z] [BOT] ✅ Industry: Supervisor, Customer Success Team (Onsite - Relocation Assistance Available) @ coinbase
[2026-01-20T11:31:51.229Z] [BOT] 💾 Added channel posting: Supervisor, Customer Success Team (Onsite - Relocation Assistance Available) @ coinbase → category channel (1 total channels)
[2026-01-20T11:31:51.229Z] [BOT] 💾 BEFORE ARCHIVING: 2895 jobs in database
[2026-01-20T11:31:51.231Z] [BOT] ✅ No jobs to archive (all 2895 jobs within 7-day window)
[2026-01-20T11:31:51.255Z] [BOT] 💾 Saved posted_jobs.json: 2895 active jobs
[2026-01-20T11:31:51.255Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T11:31:52.758Z] [BOT] 💾 Marked as posted: Supervisor, Customer Success Team (Onsite - Relocation Assistance Available) @ coinbase (instance #1)
[2026-01-20T11:31:52.758Z] [BOT] 💾 BEFORE ARCHIVING: 2896 jobs in database
[2026-01-20T11:31:52.760Z] [BOT] ✅ No jobs to archive (all 2896 jobs within 7-day window)
[2026-01-20T11:31:52.777Z] [BOT] 💾 Saved posted_jobs.json: 2896 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:31:55.778Z] [BOT] 📌 Posting 2 jobs to #tech-jobs
[2026-01-20T11:31:55.778Z] [BOT] 📍 [ROUTING] "Account Executive, Enterprise" @ figma
[2026-01-20T11:31:55.778Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T11:31:56.061Z] [BOT] ✅ Posted message: Account Executive, Enterprise @ figma in #tech-jobs
[2026-01-20T11:31:56.061Z] [BOT] ✅ Industry: Account Executive, Enterprise @ figma
[2026-01-20T11:31:56.062Z] [BOT] 💾 Added channel posting: Account Executive, Enterprise @ figma → category channel (1 total channels)
[2026-01-20T11:31:56.062Z] [BOT] 💾 BEFORE ARCHIVING: 2897 jobs in database
[2026-01-20T11:31:56.064Z] [BOT] ✅ No jobs to archive (all 2897 jobs within 7-day window)
[2026-01-20T11:31:56.084Z] [BOT] 💾 Saved posted_jobs.json: 2897 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:31:57.586Z] [BOT] 💾 Marked as posted: Account Executive, Enterprise @ figma (instance #1)
[2026-01-20T11:31:57.586Z] [BOT] 💾 BEFORE ARCHIVING: 2898 jobs in database
[2026-01-20T11:31:57.588Z] [BOT] ✅ No jobs to archive (all 2898 jobs within 7-day window)
[2026-01-20T11:31:57.608Z] [BOT] 💾 Saved posted_jobs.json: 2898 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:31:57.609Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_61859c65 Learning
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T11:31:57.856Z] [BOT] ✅ Posted message: Software Engineer @ ORG_61859c65 Learning in #tech-jobs
[2026-01-20T11:31:57.856Z] [BOT] ✅ Industry: Software Engineer @ ORG_61859c65 Learning
[2026-01-20T11:31:57.857Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_61859c65 Learning → category channel (1 total channels)
[2026-01-20T11:31:57.857Z] [BOT] 💾 BEFORE ARCHIVING: 2899 jobs in database
[2026-01-20T11:31:57.859Z] [BOT] ✅ No jobs to archive (all 2899 jobs within 7-day window)
[2026-01-20T11:31:57.877Z] [BOT] 💾 Saved posted_jobs.json: 2899 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:31:59.378Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_61859c65 Learning (instance #1)
[2026-01-20T11:31:59.379Z] [BOT] 💾 BEFORE ARCHIVING: 2900 jobs in database
[2026-01-20T11:31:59.381Z] [BOT] ✅ No jobs to archive (all 2900 jobs within 7-day window)
[2026-01-20T11:31:59.401Z] [BOT] 💾 Saved posted_jobs.json: 2900 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:32:02.402Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-20T11:32:02.403Z] [BOT] ⏭️  Skipping duplicate: JID_b4d61227 (posted within 7 days)
[2026-01-20T11:32:02.404Z] [BOT] ⏭️  Skipping duplicate: JID_ed49cd2c (posted within 7 days)
[2026-01-20T11:32:02.404Z] [BOT] ⏭️  Skipping duplicate: JID_4633d184 (posted within 7 days)
[2026-01-20T11:32:02.533Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[2026-01-20T11:32:02.720Z] [BOT] ✅ Saved pending queue: 2796 total (2776 pending, 17 enriched, 3 posted)
[2026-01-20T11:32:02.720Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T11:32:02.783Z] [BOT] 📂 Loaded 5410 existing routing entries
[2026-01-20T11:32:02.859Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-20T11:32:02.859Z] [BOT] Total entries: 5413
   Timestamp: 2026-01-20T11:32:02.835Z
[2026-01-20T11:32:02.859Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T11:32:02.860Z] [BOT] Total attempts: 3
   Successful: 3
   Failed: 0
   Skipped: 0
[2026-01-20T11:32:02.861Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-20T11:32:02.861Z] [BOT] Total posts: 3
   Channels used: 2
   Top channels:
     1. #tech-jobs: 2 posts
     2. #ai-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-20T11:32:04.889Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Designer Advocate - Figma Weave (New York, United States) - skipping
- [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*