# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T07:57:34.938Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T07:57:02.382Z] ========================================
[2026-01-20T07:57:02.384Z] Discord Bot Execution Log
[2026-01-20T07:57:02.384Z] Environment: GitHub Actions
[2026-01-20T07:57:02.384Z] Node Version: v20.19.6
[2026-01-20T07:57:02.384Z] ========================================
[2026-01-20T07:57:02.384Z] Environment Variables Check:
[2026-01-20T07:57:02.384Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T07:57:02.384Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T07:57:02.384Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T07:57:02.385Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T07:57:02.385Z] 
Multi-Channel Configuration:
[2026-01-20T07:57:02.385Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T07:57:02.385Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T07:57:02.385Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T07:57:02.385Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T07:57:02.385Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T07:57:02.385Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T07:57:02.385Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T07:57:02.385Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T07:57:02.385Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T07:57:02.385Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T07:57:02.385Z] 
Data Files Check:
[2026-01-20T07:57:02.387Z] .github/data/new_jobs.json: ✅ Exists (10 items, 170711 bytes)
[2026-01-20T07:57:02.398Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1566418 bytes)
[2026-01-20T07:57:02.398Z] 
========================================
[2026-01-20T07:57:02.398Z] Starting Enhanced Discord Bot...
[2026-01-20T07:57:02.398Z] ========================================
[2026-01-20T07:57:02.841Z] [BOT] ✅ Loaded V2 database: 2822 jobs
[2026-01-20T07:57:03.651Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T07:57:03.651Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T07:57:03.652Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T07:57:03.804Z] [BOT] ✅ Loaded pending queue: 2798 total (2778 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T07:57:03.807Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T07:57:03.808Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T07:57:03.808Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T07:57:03.809Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-20T07:57:03.809Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Software Engineer  @ datadog: boston, massachusetts, usa; new york, new york, usa, new york, new york, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-20T07:57:03.809Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T07:57:03.811Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T07:57:03.812Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T07:57:03.812Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T07:57:03.812Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T07:57:03.813Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-20T07:57:03.813Z] [BOT] 📍 [ROUTING] "Senior Developer Advocate - Generative AI" @ datadog
[2026-01-20T07:57:03.813Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T07:57:03.818Z] [BOT ERROR] (node:2437) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T07:57:04.020Z] [BOT] ✅ Posted message: Senior Developer Advocate - Generative AI @ datadog in #ai-jobs
[2026-01-20T07:57:04.020Z] [BOT] ✅ Industry: Senior Developer Advocate - Generative AI @ datadog
[2026-01-20T07:57:04.021Z] [BOT] 💾 Added channel posting: Senior Developer Advocate - Generative AI @ datadog → category channel (1 total channels)
[2026-01-20T07:57:04.021Z] [BOT] 💾 BEFORE ARCHIVING: 2823 jobs in database
[2026-01-20T07:57:04.023Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T07:57:04.029Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-20T07:57:04.029Z] [BOT] ✅ Archiving complete: 10 archived, 2813 active
[2026-01-20T07:57:04.053Z] [BOT] 💾 Saved posted_jobs.json: 2813 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:05.554Z] [BOT] 💾 Marked as posted: Senior Developer Advocate - Generative AI @ datadog (instance #1)
[2026-01-20T07:57:05.554Z] [BOT] 💾 BEFORE ARCHIVING: 2814 jobs in database
[2026-01-20T07:57:05.556Z] [BOT] ✅ No jobs to archive (all 2814 jobs within 7-day window)
[2026-01-20T07:57:05.572Z] [BOT] 💾 Saved posted_jobs.json: 2814 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:05.572Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager (AI)" @ datadog
   Category: AI (matched: "machine learning")
[2026-01-20T07:57:05.572Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T07:57:05.794Z] [BOT] ✅ Posted message: Senior Product Marketing Manager (AI) @ datadog in #ai-jobs
[2026-01-20T07:57:05.794Z] [BOT] ✅ Industry: Senior Product Marketing Manager (AI) @ datadog
[2026-01-20T07:57:05.795Z] [BOT] 💾 Added channel posting: Senior Product Marketing Manager (AI) @ datadog → category channel (1 total channels)
[2026-01-20T07:57:05.795Z] [BOT] 💾 BEFORE ARCHIVING: 2815 jobs in database
[2026-01-20T07:57:05.797Z] [BOT] ✅ No jobs to archive (all 2815 jobs within 7-day window)
[2026-01-20T07:57:05.815Z] [BOT] 💾 Saved posted_jobs.json: 2815 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:07.315Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager (AI) @ datadog (instance #1)
[2026-01-20T07:57:07.316Z] [BOT] 💾 BEFORE ARCHIVING: 2816 jobs in database
[2026-01-20T07:57:07.317Z] [BOT] ✅ No jobs to archive (all 2816 jobs within 7-day window)
[2026-01-20T07:57:07.335Z] [BOT] 💾 Saved posted_jobs.json: 2816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:10.336Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-20T07:57:10.337Z] [BOT] 📍 [ROUTING] "Senior FP&A Analyst - NYC" @ datadog
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
[2026-01-20T07:57:10.716Z] [BOT] ✅ Posted message: Senior FP&A Analyst - NYC @ datadog in #JID_fb739488
  ✅ Industry: Senior FP&A Analyst - NYC @ datadog
[2026-01-20T07:57:10.717Z] [BOT] 💾 Added channel posting: Senior FP&A Analyst - NYC @ datadog → category channel (1 total channels)
[2026-01-20T07:57:10.717Z] [BOT] 💾 BEFORE ARCHIVING: 2817 jobs in database
[2026-01-20T07:57:10.719Z] [BOT] ✅ No jobs to archive (all 2817 jobs within 7-day window)
[2026-01-20T07:57:10.736Z] [BOT] 💾 Saved posted_jobs.json: 2817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:12.406Z] [BOT] ✅ Posted message: Senior FP&A Analyst - NYC @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:57:12.406Z] [BOT] 💾 Added channel posting: Senior FP&A Analyst - NYC @ datadog → location channel (2 total channels)
[2026-01-20T07:57:12.406Z] [BOT] 💾 BEFORE ARCHIVING: 2817 jobs in database
[2026-01-20T07:57:12.408Z] [BOT] ✅ No jobs to archive (all 2817 jobs within 7-day window)
[2026-01-20T07:57:12.427Z] [BOT] 💾 Saved posted_jobs.json: 2817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:13.929Z] [BOT] 💾 Marked as posted: Senior FP&A Analyst - NYC @ datadog (instance #1)
[2026-01-20T07:57:13.930Z] [BOT] 💾 BEFORE ARCHIVING: 2818 jobs in database
[2026-01-20T07:57:13.932Z] [BOT] ✅ No jobs to archive (all 2818 jobs within 7-day window)
[2026-01-20T07:57:13.951Z] [BOT] 💾 Saved posted_jobs.json: 2818 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:16.952Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-20T07:57:16.953Z] [BOT] 📍 [ROUTING] "Senior GTM Compensation Partner - NYC" @ datadog
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:57:17.600Z] [BOT] ✅ Posted message: Senior GTM Compensation Partner - NYC @ datadog in #tech-jobs
[2026-01-20T07:57:17.600Z] [BOT] ✅ Industry: Senior GTM Compensation Partner - NYC @ datadog
[2026-01-20T07:57:17.600Z] [BOT] 💾 Added channel posting: Senior GTM Compensation Partner - NYC @ datadog → category channel (1 total channels)
[2026-01-20T07:57:17.601Z] [BOT] 💾 BEFORE ARCHIVING: 2819 jobs in database
[2026-01-20T07:57:17.602Z] [BOT] ✅ No jobs to archive (all 2819 jobs within 7-day window)
[2026-01-20T07:57:17.620Z] [BOT] 💾 Saved posted_jobs.json: 2819 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:19.508Z] [BOT] ✅ Posted message: Senior GTM Compensation Partner - NYC @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:57:19.509Z] [BOT] 💾 Added channel posting: Senior GTM Compensation Partner - NYC @ datadog → location channel (2 total channels)
[2026-01-20T07:57:19.509Z] [BOT] 💾 BEFORE ARCHIVING: 2819 jobs in database
[2026-01-20T07:57:19.511Z] [BOT] ✅ No jobs to archive (all 2819 jobs within 7-day window)
[2026-01-20T07:57:19.529Z] [BOT] 💾 Saved posted_jobs.json: 2819 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:21.029Z] [BOT] 💾 Marked as posted: Senior GTM Compensation Partner - NYC @ datadog (instance #1)
[2026-01-20T07:57:21.029Z] [BOT] 💾 BEFORE ARCHIVING: 2820 jobs in database
[2026-01-20T07:57:21.031Z] [BOT] ✅ No jobs to archive (all 2820 jobs within 7-day window)
[2026-01-20T07:57:21.048Z] [BOT] 💾 Saved posted_jobs.json: 2820 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:21.048Z] [BOT] 📍 [ROUTING] "Senior Manager, People Business Partner - NYC" @ datadog
[2026-01-20T07:57:21.048Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:57:21.566Z] [BOT] ✅ Posted message: Senior Manager, People Business Partner - NYC @ datadog in #tech-jobs
  ✅ Industry: Senior Manager, People Business Partner - NYC @ datadog
[2026-01-20T07:57:21.566Z] [BOT] 💾 Added channel posting: Senior Manager, People Business Partner - NYC @ datadog → category channel (1 total channels)
[2026-01-20T07:57:21.567Z] [BOT] 💾 BEFORE ARCHIVING: 2821 jobs in database
[2026-01-20T07:57:21.568Z] [BOT] ✅ No jobs to archive (all 2821 jobs within 7-day window)
[2026-01-20T07:57:21.585Z] [BOT] 💾 Saved posted_jobs.json: 2821 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:23.370Z] [BOT] ✅ Posted message: Senior Manager, People Business Partner - NYC @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:57:23.370Z] [BOT] 💾 Added channel posting: Senior Manager, People Business Partner - NYC @ datadog → location channel (2 total channels)
[2026-01-20T07:57:23.370Z] [BOT] 💾 BEFORE ARCHIVING: 2821 jobs in database
[2026-01-20T07:57:23.372Z] [BOT] ✅ No jobs to archive (all 2821 jobs within 7-day window)
[2026-01-20T07:57:23.389Z] [BOT] 💾 Saved posted_jobs.json: 2821 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:24.891Z] [BOT] 💾 Marked as posted: Senior Manager, People Business Partner - NYC @ datadog (instance #1)
[2026-01-20T07:57:24.891Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-20T07:57:24.893Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-20T07:57:24.910Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:24.910Z] [BOT] 📍 [ROUTING] "Senior Product Designer" @ datadog
   Category: TECH (default)
[2026-01-20T07:57:24.910Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T07:57:25.201Z] [BOT] ✅ Posted message: Senior Product Designer @ datadog in #tech-jobs
[2026-01-20T07:57:25.202Z] [BOT] ✅ Industry: Senior Product Designer @ datadog
[2026-01-20T07:57:25.202Z] [BOT] 💾 Added channel posting: Senior Product Designer @ datadog → category channel (1 total channels)
[2026-01-20T07:57:25.202Z] [BOT] 💾 BEFORE ARCHIVING: 2823 jobs in database
[2026-01-20T07:57:25.204Z] [BOT] ✅ No jobs to archive (all 2823 jobs within 7-day window)
[2026-01-20T07:57:25.221Z] [BOT] 💾 Saved posted_jobs.json: 2823 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:26.897Z] [BOT] ✅ Posted message: Senior Product Designer @ datadog in #JID_98d4f0de
[2026-01-20T07:57:26.897Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T07:57:26.898Z] [BOT] 💾 Added channel posting: Senior Product Designer @ datadog → location channel (2 total channels)
[2026-01-20T07:57:26.898Z] [BOT] 💾 BEFORE ARCHIVING: 2823 jobs in database
[2026-01-20T07:57:26.899Z] [BOT] ✅ No jobs to archive (all 2823 jobs within 7-day window)
[2026-01-20T07:57:26.916Z] [BOT] 💾 Saved posted_jobs.json: 2823 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:28.417Z] [BOT] 💾 Marked as posted: Senior Product Designer @ datadog (instance #1)
[2026-01-20T07:57:28.417Z] [BOT] 💾 BEFORE ARCHIVING: 2824 jobs in database
[2026-01-20T07:57:28.418Z] [BOT] ✅ No jobs to archive (all 2824 jobs within 7-day window)
[2026-01-20T07:57:28.435Z] [BOT] 💾 Saved posted_jobs.json: 2824 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:57:31.436Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-20T07:57:31.437Z] [BOT] ⏭️  Skipping duplicate: JID_3398b2c2 (posted within 7 days)
[2026-01-20T07:57:31.438Z] [BOT] ⏭️  Skipping duplicate: JID_06fe009a (posted within 7 days)
[2026-01-20T07:57:31.438Z] [BOT] ⏭️  Skipping duplicate: JID_b7d554a6 (posted within 7 days)
[2026-01-20T07:57:31.438Z] [BOT] ⏭️  Skipping duplicate: JID_e5a693b8 (posted within 7 days)
[2026-01-20T07:57:31.438Z] [BOT] ⏭️  Skipping duplicate: JID_0b600350 (posted within 7 days)
[2026-01-20T07:57:31.438Z] [BOT] ⏭️  Skipping duplicate: JID_33b8c7b0 (posted within 7 days)
[2026-01-20T07:57:31.589Z] [BOT] ✅ Loaded pending queue: 2798 total (2778 pending, 20 enriched, 0 posted)
[2026-01-20T07:57:31.773Z] [BOT] ✅ Saved pending queue: 2798 total (2778 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-01-20T07:57:31.774Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T07:57:31.847Z] [BOT] 📂 Loaded 5364 existing routing entries
[2026-01-20T07:57:31.936Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 5370
   Timestamp: 2026-01-20T07:57:31.917Z
[2026-01-20T07:57:31.936Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 10
   Successful: 10
[2026-01-20T07:57:31.937Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-20T07:57:31.937Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 4
   Top channels:
     1. #JID_98d4f0de: 4 posts
     2. #tech-jobs: 3 posts
     3. #ai-jobs: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-20T07:57:33.953Z] 
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
- [BOT ERROR] (node:2437) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*