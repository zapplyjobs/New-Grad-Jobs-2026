# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T12:32:55.068Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T12:32:38.657Z] ========================================
[2026-01-20T12:32:38.659Z] Discord Bot Execution Log
[2026-01-20T12:32:38.659Z] Environment: GitHub Actions
[2026-01-20T12:32:38.659Z] Node Version: v20.19.6
[2026-01-20T12:32:38.659Z] ========================================
[2026-01-20T12:32:38.659Z] Environment Variables Check:
[2026-01-20T12:32:38.660Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T12:32:38.660Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T12:32:38.660Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T12:32:38.660Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T12:32:38.660Z] 
Multi-Channel Configuration:
[2026-01-20T12:32:38.660Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T12:32:38.660Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T12:32:38.660Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T12:32:38.660Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T12:32:38.661Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T12:32:38.661Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T12:32:38.661Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T12:32:38.661Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T12:32:38.661Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T12:32:38.661Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T12:32:38.661Z] 
Data Files Check:
[2026-01-20T12:32:38.662Z] .github/data/new_jobs.json: ✅ Exists (10 items, 151659 bytes)
[2026-01-20T12:32:38.673Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1621948 bytes)
[2026-01-20T12:32:38.673Z] 
========================================
[2026-01-20T12:32:38.673Z] Starting Enhanced Discord Bot...
[2026-01-20T12:32:38.673Z] ========================================
[2026-01-20T12:32:39.244Z] [BOT] ✅ Loaded V2 database: 2915 jobs
[2026-01-20T12:32:39.883Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T12:32:39.883Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T12:32:39.883Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T12:32:40.024Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T12:32:40.029Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T12:32:40.029Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T12:32:40.030Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T12:32:40.031Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-20T12:32:40.032Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-20T12:32:40.032Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T12:32:40.035Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T12:32:40.037Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T12:32:40.037Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T12:32:40.037Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T12:32:40.037Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T12:32:40.038Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T12:32:40.038Z] [BOT ERROR] ⚠️ No channel configured for job: Designer Advocate - Figma Weave (New York, United States) - skipping
[2026-01-20T12:32:40.039Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-20T12:32:40.039Z] [BOT] 📍 [ROUTING] "Director of Product Management, Learning" @ duolingo
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T12:32:40.046Z] [BOT ERROR] (node:2397) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T12:32:40.256Z] [BOT] ✅ Posted message: Director of Product Management, Learning @ duolingo in #tech-jobs
[2026-01-20T12:32:40.257Z] [BOT] ✅ Industry: Director of Product Management, Learning @ duolingo
[2026-01-20T12:32:40.257Z] [BOT] 💾 Added channel posting: Director of Product Management, Learning @ duolingo → category channel (1 total channels)
[2026-01-20T12:32:40.257Z] [BOT] 💾 BEFORE ARCHIVING: 2916 jobs in database
[2026-01-20T12:32:40.260Z] [BOT] ✅ No jobs to archive (all 2916 jobs within 7-day window)
[2026-01-20T12:32:40.282Z] [BOT] 💾 Saved posted_jobs.json: 2916 active jobs
[2026-01-20T12:32:40.283Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T12:32:41.974Z] [BOT] ✅ Posted message: Director of Product Management, Learning @ duolingo in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T12:32:41.975Z] [BOT] 💾 Added channel posting: Director of Product Management, Learning @ duolingo → location channel (2 total channels)
[2026-01-20T12:32:41.976Z] [BOT] 💾 BEFORE ARCHIVING: 2916 jobs in database
[2026-01-20T12:32:41.977Z] [BOT] ✅ No jobs to archive (all 2916 jobs within 7-day window)
[2026-01-20T12:32:41.996Z] [BOT] 💾 Saved posted_jobs.json: 2916 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:32:43.497Z] [BOT] 💾 Marked as posted: Director of Product Management, Learning @ duolingo (instance #1)
[2026-01-20T12:32:43.497Z] [BOT] 💾 BEFORE ARCHIVING: 2917 jobs in database
[2026-01-20T12:32:43.499Z] [BOT] ✅ No jobs to archive (all 2917 jobs within 7-day window)
[2026-01-20T12:32:43.522Z] [BOT] 💾 Saved posted_jobs.json: 2917 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:32:43.522Z] [BOT] 📍 [ROUTING] "Engineering Manager, Design Accelerator" @ duolingo
   Category: TECH (matched: "engineer/engineering")
[2026-01-20T12:32:43.522Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T12:32:43.727Z] [BOT] ✅ Posted message: Engineering Manager, Design Accelerator @ duolingo in #tech-jobs
  ✅ Industry: Engineering Manager, Design Accelerator @ duolingo
[2026-01-20T12:32:43.727Z] [BOT] 💾 Added channel posting: Engineering Manager, Design Accelerator @ duolingo → category channel (1 total channels)
[2026-01-20T12:32:43.728Z] [BOT] 💾 BEFORE ARCHIVING: 2918 jobs in database
[2026-01-20T12:32:43.730Z] [BOT] ✅ No jobs to archive (all 2918 jobs within 7-day window)
[2026-01-20T12:32:43.749Z] [BOT] 💾 Saved posted_jobs.json: 2918 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:32:45.434Z] [BOT] ✅ Posted message: Engineering Manager, Design Accelerator @ duolingo in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T12:32:45.434Z] [BOT] 💾 Added channel posting: Engineering Manager, Design Accelerator @ duolingo → location channel (2 total channels)
[2026-01-20T12:32:45.434Z] [BOT] 💾 BEFORE ARCHIVING: 2918 jobs in database
[2026-01-20T12:32:45.437Z] [BOT] ✅ No jobs to archive (all 2918 jobs within 7-day window)
[2026-01-20T12:32:45.458Z] [BOT] 💾 Saved posted_jobs.json: 2918 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:32:46.959Z] [BOT] 💾 Marked as posted: Engineering Manager, Design Accelerator @ duolingo (instance #1)
[2026-01-20T12:32:46.959Z] [BOT] 💾 BEFORE ARCHIVING: 2919 jobs in database
[2026-01-20T12:32:46.961Z] [BOT] ✅ No jobs to archive (all 2919 jobs within 7-day window)
[2026-01-20T12:32:46.977Z] [BOT] 💾 Saved posted_jobs.json: 2919 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:32:46.978Z] [BOT] 📍 [ROUTING] "Rust/C++ Senior Software Engineer" @ discord
[2026-01-20T12:32:46.978Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T12:32:47.164Z] [BOT] ✅ Posted message: Rust/C++ Senior Software Engineer @ discord in #tech-jobs
[2026-01-20T12:32:47.164Z] [BOT] ✅ Industry: Rust/C++ Senior Software Engineer @ discord
[2026-01-20T12:32:47.164Z] [BOT] 💾 Added channel posting: Rust/C++ Senior Software Engineer @ discord → category channel (1 total channels)
[2026-01-20T12:32:47.164Z] [BOT] 💾 BEFORE ARCHIVING: 2920 jobs in database
[2026-01-20T12:32:47.166Z] [BOT] ✅ No jobs to archive (all 2920 jobs within 7-day window)
[2026-01-20T12:32:47.183Z] [BOT] 💾 Saved posted_jobs.json: 2920 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:32:48.684Z] [BOT] 💾 Marked as posted: Rust/C++ Senior Software Engineer @ discord (instance #1)
[2026-01-20T12:32:48.684Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-20T12:32:48.686Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-20T12:32:48.707Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:32:51.709Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-20T12:32:51.710Z] [BOT] ⏭️  Skipping duplicate: JID_2514eec0 (posted within 7 days)
[2026-01-20T12:32:51.710Z] [BOT] ⏭️  Skipping duplicate: JID_5921c4f7 (posted within 7 days)
[2026-01-20T12:32:51.710Z] [BOT] ⏭️  Skipping duplicate: JID_ef00ba2c (posted within 7 days)
[2026-01-20T12:32:51.824Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[2026-01-20T12:32:51.997Z] [BOT] ✅ Saved pending queue: 2796 total (2776 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T12:32:52.060Z] [BOT] 📂 Loaded 5422 existing routing entries
[2026-01-20T12:32:52.135Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 5425
   Timestamp: 2026-01-20T12:32:52.112Z
[2026-01-20T12:32:52.135Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 5
[2026-01-20T12:32:52.136Z] [BOT] Successful: 5
   Failed: 0
   Skipped: 0
[2026-01-20T12:32:52.136Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 5
[2026-01-20T12:32:52.136Z] [BOT] Channels used: 2
   Top channels:
     1. #tech-jobs: 3 posts
     2. #JID_98d4f0de: 2 posts
[2026-01-20T12:32:52.137Z] [BOT] [STATS] Channel stats saved
[2026-01-20T12:32:54.161Z] 
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
- [BOT ERROR] (node:2397) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*