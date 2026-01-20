# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T09:33:55.753Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T09:33:37.425Z] ========================================
[2026-01-20T09:33:37.427Z] Discord Bot Execution Log
[2026-01-20T09:33:37.427Z] Environment: GitHub Actions
[2026-01-20T09:33:37.427Z] Node Version: v20.19.6
[2026-01-20T09:33:37.427Z] ========================================
[2026-01-20T09:33:37.427Z] Environment Variables Check:
[2026-01-20T09:33:37.428Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T09:33:37.428Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T09:33:37.428Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T09:33:37.428Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T09:33:37.428Z] 
Multi-Channel Configuration:
[2026-01-20T09:33:37.428Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T09:33:37.428Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T09:33:37.428Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T09:33:37.428Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T09:33:37.428Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T09:33:37.428Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T09:33:37.429Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T09:33:37.429Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T09:33:37.429Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T09:33:37.429Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T09:33:37.429Z] 
Data Files Check:
[2026-01-20T09:33:37.430Z] .github/data/new_jobs.json: ✅ Exists (10 items, 169753 bytes)
[2026-01-20T09:33:37.441Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1574532 bytes)
[2026-01-20T09:33:37.441Z] 
========================================
[2026-01-20T09:33:37.441Z] Starting Enhanced Discord Bot...
[2026-01-20T09:33:37.441Z] ========================================
[2026-01-20T09:33:37.962Z] [BOT] ✅ Loaded V2 database: 2833 jobs
[2026-01-20T09:33:38.689Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T09:33:38.689Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T09:33:38.690Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T09:33:38.811Z] [BOT] ✅ Loaded pending queue: 2789 total (2769 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T09:33:38.815Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T09:33:38.816Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T09:33:38.816Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T09:33:38.817Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-20T09:33:38.817Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T09:33:38.820Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T09:33:38.822Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T09:33:38.822Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T09:33:38.822Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T09:33:38.822Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T09:33:38.823Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T09:33:38.823Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-20T09:33:38.824Z] [BOT] 📍 [ROUTING] "Forward Deployed Engineer" @ anthropic
[2026-01-20T09:33:38.824Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T09:33:38.831Z] [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T09:33:39.123Z] [BOT] ✅ Posted message: Forward Deployed Engineer @ anthropic in #ai-jobs
[2026-01-20T09:33:39.124Z] [BOT] ✅ Industry: Forward Deployed Engineer @ anthropic
[2026-01-20T09:33:39.124Z] [BOT] 💾 Added channel posting: Forward Deployed Engineer @ anthropic → category channel (1 total channels)
[2026-01-20T09:33:39.125Z] [BOT] 💾 BEFORE ARCHIVING: 2834 jobs in database
[2026-01-20T09:33:39.127Z] [BOT] ✅ No jobs to archive (all 2834 jobs within 7-day window)
[2026-01-20T09:33:39.148Z] [BOT] 💾 Saved posted_jobs.json: 2834 active jobs
[2026-01-20T09:33:39.148Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T09:33:40.651Z] [BOT] 💾 Marked as posted: Forward Deployed Engineer @ anthropic (instance #1)
[2026-01-20T09:33:40.651Z] [BOT] 💾 BEFORE ARCHIVING: 2835 jobs in database
[2026-01-20T09:33:40.652Z] [BOT] ✅ No jobs to archive (all 2835 jobs within 7-day window)
[2026-01-20T09:33:40.670Z] [BOT] 💾 Saved posted_jobs.json: 2835 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:33:40.671Z] [BOT] 📍 [ROUTING] "Client Account Manager, Mid-Market (B2B Services)" @ reddit
[2026-01-20T09:33:40.671Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T09:33:40.900Z] [BOT] ✅ Posted message: Client Account Manager, Mid-Market (B2B Services) @ reddit in #ai-jobs
[2026-01-20T09:33:40.900Z] [BOT] ✅ Industry: Client Account Manager, Mid-Market (B2B Services) @ reddit
[2026-01-20T09:33:40.900Z] [BOT] 💾 Added channel posting: Client Account Manager, Mid-Market (B2B Services) @ reddit → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2836 jobs in database
[2026-01-20T09:33:40.902Z] [BOT] ✅ No jobs to archive (all 2836 jobs within 7-day window)
[2026-01-20T09:33:40.921Z] [BOT] 💾 Saved posted_jobs.json: 2836 active jobs
[2026-01-20T09:33:40.921Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T09:33:42.422Z] [BOT] 💾 Marked as posted: Client Account Manager, Mid-Market (B2B Services) @ reddit (instance #1)
[2026-01-20T09:33:42.422Z] [BOT] 💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-20T09:33:42.424Z] [BOT] ✅ No jobs to archive (all 2837 jobs within 7-day window)
[2026-01-20T09:33:42.442Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:33:45.443Z] [BOT] 📌 Posting 2 jobs to #JID_fb739488
[2026-01-20T09:33:45.444Z] [BOT] 📍 [ROUTING] "Analytics Data Engineer" @ anthropic
[2026-01-20T09:33:45.444Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T09:33:45.879Z] [BOT] ✅ Posted message: Analytics Data Engineer @ anthropic in #JID_fb739488
  ✅ Industry: Analytics Data Engineer @ anthropic
[2026-01-20T09:33:45.880Z] [BOT] 💾 Added channel posting: Analytics Data Engineer @ anthropic → category channel (1 total channels)
[2026-01-20T09:33:45.880Z] [BOT] 💾 BEFORE ARCHIVING: 2838 jobs in database
[2026-01-20T09:33:45.882Z] [BOT] ✅ No jobs to archive (all 2838 jobs within 7-day window)
[2026-01-20T09:33:45.900Z] [BOT] 💾 Saved posted_jobs.json: 2838 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:33:47.402Z] [BOT] 💾 Marked as posted: Analytics Data Engineer @ anthropic (instance #1)
[2026-01-20T09:33:47.402Z] [BOT] 💾 BEFORE ARCHIVING: 2839 jobs in database
[2026-01-20T09:33:47.404Z] [BOT] ✅ No jobs to archive (all 2839 jobs within 7-day window)
[2026-01-20T09:33:47.424Z] [BOT] 💾 Saved posted_jobs.json: 2839 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:33:47.425Z] [BOT] 📍 [ROUTING] "Cross-functional Prompt Engineer" @ anthropic
[2026-01-20T09:33:47.425Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T09:33:47.669Z] [BOT] ✅ Posted message: Cross-functional Prompt Engineer @ anthropic in #JID_fb739488
[2026-01-20T09:33:47.669Z] [BOT] ✅ Industry: Cross-functional Prompt Engineer @ anthropic
[2026-01-20T09:33:47.670Z] [BOT] 💾 Added channel posting: Cross-functional Prompt Engineer @ anthropic → category channel (1 total channels)
[2026-01-20T09:33:47.670Z] [BOT] 💾 BEFORE ARCHIVING: 2840 jobs in database
[2026-01-20T09:33:47.672Z] [BOT] ✅ No jobs to archive (all 2840 jobs within 7-day window)
[2026-01-20T09:33:47.692Z] [BOT] 💾 Saved posted_jobs.json: 2840 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:33:49.194Z] [BOT] 💾 Marked as posted: Cross-functional Prompt Engineer @ anthropic (instance #1)
[2026-01-20T09:33:49.194Z] [BOT] 💾 BEFORE ARCHIVING: 2841 jobs in database
[2026-01-20T09:33:49.196Z] [BOT] ✅ No jobs to archive (all 2841 jobs within 7-day window)
[2026-01-20T09:33:49.217Z] [BOT] 💾 Saved posted_jobs.json: 2841 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:33:52.217Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-20T09:33:52.219Z] [BOT] ⏭️  Skipping duplicate: JID_a5422c25 (posted within 7 days)
[2026-01-20T09:33:52.219Z] [BOT] ⏭️  Skipping duplicate: JID_9f055210 (posted within 7 days)
[2026-01-20T09:33:52.219Z] [BOT] ⏭️  Skipping duplicate: JID_0ab0ba0f (posted within 7 days)
[2026-01-20T09:33:52.219Z] [BOT] ⏭️  Skipping duplicate: JID_97a7cfc5 (posted within 7 days)
[2026-01-20T09:33:52.336Z] [BOT] ✅ Loaded pending queue: 2789 total (2769 pending, 20 enriched, 0 posted)
[2026-01-20T09:33:52.502Z] [BOT] ✅ Saved pending queue: 2789 total (2769 pending, 16 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T09:33:52.567Z] [BOT] 📂 Loaded 5384 existing routing entries
[2026-01-20T09:33:52.639Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-20T09:33:52.639Z] [BOT] Total entries: 5388
   Timestamp: 2026-01-20T09:33:52.618Z
[2026-01-20T09:33:52.640Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T09:33:52.640Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-20T09:33:52.641Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-20T09:33:52.641Z] [BOT] Total posts: 4
   Channels used: 2
   Top channels:
     1. #ai-jobs: 2 posts
     2. #JID_fb739488: 2 posts
[STATS] Channel stats saved
[2026-01-20T09:33:54.668Z] 
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
- [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*