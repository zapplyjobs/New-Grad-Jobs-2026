# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T12:16:39.047Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T12:16:20.629Z] ========================================
[2026-01-20T12:16:20.631Z] Discord Bot Execution Log
[2026-01-20T12:16:20.631Z] Environment: GitHub Actions
[2026-01-20T12:16:20.631Z] Node Version: v20.19.6
[2026-01-20T12:16:20.632Z] ========================================
[2026-01-20T12:16:20.632Z] Environment Variables Check:
[2026-01-20T12:16:20.632Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T12:16:20.632Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T12:16:20.632Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T12:16:20.632Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T12:16:20.632Z] 
Multi-Channel Configuration:
[2026-01-20T12:16:20.632Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T12:16:20.632Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T12:16:20.632Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T12:16:20.633Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T12:16:20.633Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T12:16:20.633Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T12:16:20.633Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T12:16:20.633Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T12:16:20.633Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T12:16:20.633Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T12:16:20.633Z] 
Data Files Check:
[2026-01-20T12:16:20.634Z] .github/data/new_jobs.json: ✅ Exists (10 items, 153915 bytes)
[2026-01-20T12:16:20.644Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1618070 bytes)
[2026-01-20T12:16:20.644Z] 
========================================
[2026-01-20T12:16:20.644Z] Starting Enhanced Discord Bot...
[2026-01-20T12:16:20.645Z] ========================================
[2026-01-20T12:16:21.160Z] [BOT] ✅ Loaded V2 database: 2909 jobs
[2026-01-20T12:16:21.777Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T12:16:21.778Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T12:16:21.778Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T12:16:21.891Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T12:16:21.894Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T12:16:21.895Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T12:16:21.895Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T12:16:21.896Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-20T12:16:21.896Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T12:16:21.898Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T12:16:21.899Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T12:16:21.899Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T12:16:21.899Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T12:16:21.900Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T12:16:21.900Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T12:16:21.900Z] [BOT ERROR] ⚠️ No channel configured for job: Designer Advocate - Figma Weave (New York, United States) - skipping
[2026-01-20T12:16:21.901Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-20T12:16:21.901Z] [BOT] 📍 [ROUTING] "Director of Learning Design, Immersive Language Learning" @ duolingo
[2026-01-20T12:16:21.901Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T12:16:21.905Z] [BOT ERROR] (node:2379) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T12:16:22.208Z] [BOT] ✅ Posted message: Director of Learning Design, Immersive Language Learning @ duolingo in #tech-jobs
[2026-01-20T12:16:22.208Z] [BOT] ✅ Industry: Director of Learning Design, Immersive Language Learning @ duolingo
[2026-01-20T12:16:22.209Z] [BOT] 💾 Added channel posting: Director of Learning Design, Immersive Language Learning @ duolingo → category channel (1 total channels)
[2026-01-20T12:16:22.209Z] [BOT] 💾 BEFORE ARCHIVING: 2910 jobs in database
[2026-01-20T12:16:22.211Z] [BOT] ✅ No jobs to archive (all 2910 jobs within 7-day window)
[2026-01-20T12:16:22.235Z] [BOT] 💾 Saved posted_jobs.json: 2910 active jobs
[2026-01-20T12:16:22.235Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T12:16:23.960Z] [BOT] ✅ Posted message: Director of Learning Design, Immersive Language Learning @ duolingo in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T12:16:23.960Z] [BOT] 💾 Added channel posting: Director of Learning Design, Immersive Language Learning @ duolingo → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2910 jobs in database
[2026-01-20T12:16:23.962Z] [BOT] ✅ No jobs to archive (all 2910 jobs within 7-day window)
[2026-01-20T12:16:23.980Z] [BOT] 💾 Saved posted_jobs.json: 2910 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:16:25.481Z] [BOT] 💾 Marked as posted: Director of Learning Design, Immersive Language Learning @ duolingo (instance #1)
[2026-01-20T12:16:25.482Z] [BOT] 💾 BEFORE ARCHIVING: 2911 jobs in database
[2026-01-20T12:16:25.483Z] [BOT] ✅ No jobs to archive (all 2911 jobs within 7-day window)
[2026-01-20T12:16:25.504Z] [BOT] 💾 Saved posted_jobs.json: 2911 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:16:25.504Z] [BOT] 📍 [ROUTING] "Director of Learning Design, New Subjects" @ duolingo
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T12:16:25.700Z] [BOT] ✅ Posted message: Director of Learning Design, New Subjects @ duolingo in #tech-jobs
[2026-01-20T12:16:25.700Z] [BOT] ✅ Industry: Director of Learning Design, New Subjects @ duolingo
[2026-01-20T12:16:25.701Z] [BOT] 💾 Added channel posting: Director of Learning Design, New Subjects @ duolingo → category channel (1 total channels)
[2026-01-20T12:16:25.701Z] [BOT] 💾 BEFORE ARCHIVING: 2912 jobs in database
[2026-01-20T12:16:25.703Z] [BOT] ✅ No jobs to archive (all 2912 jobs within 7-day window)
[2026-01-20T12:16:25.721Z] [BOT] 💾 Saved posted_jobs.json: 2912 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:16:27.512Z] [BOT] ✅ Posted message: Director of Learning Design, New Subjects @ duolingo in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T12:16:27.513Z] [BOT] 💾 Added channel posting: Director of Learning Design, New Subjects @ duolingo → location channel (2 total channels)
[2026-01-20T12:16:27.513Z] [BOT] 💾 BEFORE ARCHIVING: 2912 jobs in database
[2026-01-20T12:16:27.515Z] [BOT] ✅ No jobs to archive (all 2912 jobs within 7-day window)
[2026-01-20T12:16:27.534Z] [BOT] 💾 Saved posted_jobs.json: 2912 active jobs
[2026-01-20T12:16:27.534Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T12:16:29.036Z] [BOT] 💾 Marked as posted: Director of Learning Design, New Subjects @ duolingo (instance #1)
[2026-01-20T12:16:29.036Z] [BOT] 💾 BEFORE ARCHIVING: 2913 jobs in database
[2026-01-20T12:16:29.037Z] [BOT] ✅ No jobs to archive (all 2913 jobs within 7-day window)
[2026-01-20T12:16:29.054Z] [BOT] 💾 Saved posted_jobs.json: 2913 active jobs
[2026-01-20T12:16:29.054Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T12:16:29.054Z] [BOT] 📍 [ROUTING] "Director of Performance Marketing" @ duolingo
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T12:16:29.286Z] [BOT] ✅ Posted message: Director of Performance Marketing @ duolingo in #tech-jobs
[2026-01-20T12:16:29.286Z] [BOT] ✅ Industry: Director of Performance Marketing @ duolingo
[2026-01-20T12:16:29.287Z] [BOT] 💾 Added channel posting: Director of Performance Marketing @ duolingo → category channel (1 total channels)
[2026-01-20T12:16:29.287Z] [BOT] 💾 BEFORE ARCHIVING: 2914 jobs in database
[2026-01-20T12:16:29.288Z] [BOT] ✅ No jobs to archive (all 2914 jobs within 7-day window)
[2026-01-20T12:16:29.304Z] [BOT] 💾 Saved posted_jobs.json: 2914 active jobs
[2026-01-20T12:16:29.304Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T12:16:31.156Z] [BOT] ✅ Posted message: Director of Performance Marketing @ duolingo in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T12:16:31.156Z] [BOT] 💾 Added channel posting: Director of Performance Marketing @ duolingo → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2914 jobs in database
[2026-01-20T12:16:31.159Z] [BOT] ✅ No jobs to archive (all 2914 jobs within 7-day window)
[2026-01-20T12:16:31.178Z] [BOT] 💾 Saved posted_jobs.json: 2914 active jobs
[2026-01-20T12:16:31.178Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T12:16:32.680Z] [BOT] 💾 Marked as posted: Director of Performance Marketing @ duolingo (instance #1)
[2026-01-20T12:16:32.680Z] [BOT] 💾 BEFORE ARCHIVING: 2915 jobs in database
[2026-01-20T12:16:32.681Z] [BOT] ✅ No jobs to archive (all 2915 jobs within 7-day window)
[2026-01-20T12:16:32.701Z] [BOT] 💾 Saved posted_jobs.json: 2915 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:16:35.702Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-20T12:16:35.703Z] [BOT] ⏭️  Skipping duplicate: JID_5ac86695 (posted within 7 days)
[2026-01-20T12:16:35.704Z] [BOT] ⏭️  Skipping duplicate: JID_c4a32929 (posted within 7 days)
[2026-01-20T12:16:35.704Z] [BOT] ⏭️  Skipping duplicate: JID_91a40c48 (posted within 7 days)
[2026-01-20T12:16:35.818Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[2026-01-20T12:16:35.987Z] [BOT] ✅ Saved pending queue: 2796 total (2776 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-01-20T12:16:35.987Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T12:16:36.049Z] [BOT] 📂 Loaded 5419 existing routing entries
[2026-01-20T12:16:36.121Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 5422
   Timestamp: 2026-01-20T12:16:36.099Z
[2026-01-20T12:16:36.121Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 6
   Successful: 6
[2026-01-20T12:16:36.121Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-20T12:16:36.122Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 2
   Top channels:
[2026-01-20T12:16:36.122Z] [BOT] 1. #tech-jobs: 3 posts
     2. #JID_98d4f0de: 3 posts
[2026-01-20T12:16:36.122Z] [BOT] [STATS] Channel stats saved
[2026-01-20T12:16:38.145Z] 
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
- [BOT ERROR] (node:2379) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*