# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T09:51:34.236Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T09:51:13.716Z] ========================================
[2026-01-20T09:51:13.718Z] Discord Bot Execution Log
[2026-01-20T09:51:13.718Z] Environment: GitHub Actions
[2026-01-20T09:51:13.718Z] Node Version: v20.19.6
[2026-01-20T09:51:13.718Z] ========================================
[2026-01-20T09:51:13.718Z] Environment Variables Check:
[2026-01-20T09:51:13.718Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T09:51:13.718Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T09:51:13.718Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T09:51:13.719Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T09:51:13.719Z] 
Multi-Channel Configuration:
[2026-01-20T09:51:13.719Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T09:51:13.719Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T09:51:13.719Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T09:51:13.719Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T09:51:13.719Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T09:51:13.719Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T09:51:13.719Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T09:51:13.719Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T09:51:13.719Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T09:51:13.719Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T09:51:13.719Z] 
Data Files Check:
[2026-01-20T09:51:13.721Z] .github/data/new_jobs.json: ✅ Exists (10 items, 189220 bytes)
[2026-01-20T09:51:13.732Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1578968 bytes)
[2026-01-20T09:51:13.732Z] 
========================================
[2026-01-20T09:51:13.732Z] Starting Enhanced Discord Bot...
[2026-01-20T09:51:13.732Z] ========================================
[2026-01-20T09:51:14.196Z] [BOT] ✅ Loaded V2 database: 2841 jobs
[2026-01-20T09:51:14.761Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T09:51:14.761Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T09:51:14.761Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T09:51:14.911Z] [BOT] ✅ Loaded pending queue: 2789 total (2769 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T09:51:14.914Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T09:51:14.915Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T09:51:14.915Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T09:51:14.916Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
   (4 grouped as same job with different locations)
[2026-01-20T09:51:14.916Z] [BOT] 📍 1 jobs with multiple locations:
   - Strategic Account Executive @ datadog: remote, new york, new york, usa, chicago, illinois, usa, san francisco, california, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T09:51:14.918Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T09:51:14.918Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T09:51:14.919Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T09:51:14.919Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T09:51:14.919Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T09:51:14.919Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T09:51:14.920Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-20T09:51:14.921Z] [BOT] 📍 [ROUTING] "Engineering Manager, Product Platform & Accounts Platform" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-20T09:51:14.921Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T09:51:14.925Z] [BOT ERROR] (node:2429) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T09:51:15.096Z] [BOT] ✅ Posted message: Engineering Manager, Product Platform & Accounts Platform @ anthropic in #ai-jobs
[2026-01-20T09:51:15.097Z] [BOT] ✅ Industry: Engineering Manager, Product Platform & Accounts Platform @ anthropic
[2026-01-20T09:51:15.097Z] [BOT] 💾 Added channel posting: Engineering Manager, Product Platform & Accounts Platform @ anthropic → category channel (1 total channels)
[2026-01-20T09:51:15.098Z] [BOT] 💾 BEFORE ARCHIVING: 2842 jobs in database
[2026-01-20T09:51:15.100Z] [BOT] ✅ No jobs to archive (all 2842 jobs within 7-day window)
[2026-01-20T09:51:15.121Z] [BOT] 💾 Saved posted_jobs.json: 2842 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:51:16.623Z] [BOT] 💾 Marked as posted: Engineering Manager, Product Platform & Accounts Platform @ anthropic (instance #1)
[2026-01-20T09:51:16.623Z] [BOT] 💾 BEFORE ARCHIVING: 2843 jobs in database
[2026-01-20T09:51:16.625Z] [BOT] ✅ No jobs to archive (all 2843 jobs within 7-day window)
[2026-01-20T09:51:16.641Z] [BOT] 💾 Saved posted_jobs.json: 2843 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:51:16.641Z] [BOT] 📍 [ROUTING] "Partner Solutions Architect, Applied AI" @ anthropic
[2026-01-20T09:51:16.642Z] [BOT] Category: AI (matched: "machine learning")
[2026-01-20T09:51:16.642Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-20T09:51:16.889Z] [BOT] ✅ Posted message: Partner Solutions Architect, Applied AI @ anthropic in #ai-jobs
  ✅ Industry: Partner Solutions Architect, Applied AI @ anthropic
[2026-01-20T09:51:16.890Z] [BOT] 💾 Added channel posting: Partner Solutions Architect, Applied AI @ anthropic → category channel (1 total channels)
[2026-01-20T09:51:16.890Z] [BOT] 💾 BEFORE ARCHIVING: 2844 jobs in database
[2026-01-20T09:51:16.892Z] [BOT] ✅ No jobs to archive (all 2844 jobs within 7-day window)
[2026-01-20T09:51:16.911Z] [BOT] 💾 Saved posted_jobs.json: 2844 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:51:18.411Z] [BOT] 💾 Marked as posted: Partner Solutions Architect, Applied AI @ anthropic (instance #1)
[2026-01-20T09:51:18.411Z] [BOT] 💾 BEFORE ARCHIVING: 2845 jobs in database
[2026-01-20T09:51:18.413Z] [BOT] ✅ No jobs to archive (all 2845 jobs within 7-day window)
[2026-01-20T09:51:18.430Z] [BOT] 💾 Saved posted_jobs.json: 2845 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:51:21.432Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-20T09:51:21.432Z] [BOT] 📍 [ROUTING] "Global Real Estate Design & Construction Manager" @ anthropic
[2026-01-20T09:51:21.432Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T09:51:21.655Z] [BOT] ✅ Posted message: Global Real Estate Design & Construction Manager @ anthropic in #finance-jobs
[2026-01-20T09:51:21.656Z] [BOT] ✅ Industry: Global Real Estate Design & Construction Manager @ anthropic
[2026-01-20T09:51:21.656Z] [BOT] 💾 Added channel posting: Global Real Estate Design & Construction Manager @ anthropic → category channel (1 total channels)
[2026-01-20T09:51:21.656Z] [BOT] 💾 BEFORE ARCHIVING: 2846 jobs in database
[2026-01-20T09:51:21.658Z] [BOT] ✅ No jobs to archive (all 2846 jobs within 7-day window)
[2026-01-20T09:51:21.675Z] [BOT] 💾 Saved posted_jobs.json: 2846 active jobs
[2026-01-20T09:51:21.675Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T09:51:23.176Z] [BOT] 💾 Marked as posted: Global Real Estate Design & Construction Manager @ anthropic (instance #1)
[2026-01-20T09:51:23.176Z] [BOT] 💾 BEFORE ARCHIVING: 2847 jobs in database
[2026-01-20T09:51:23.178Z] [BOT] ✅ No jobs to archive (all 2847 jobs within 7-day window)
[2026-01-20T09:51:23.197Z] [BOT] 💾 Saved posted_jobs.json: 2847 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:51:26.196Z] [BOT] 📌 Posting 1 jobs to #tech-jobs
[2026-01-20T09:51:26.197Z] [BOT] 📍 [ROUTING] "Partner Marketing Manager, Cloud Partners" @ anthropic
[2026-01-20T09:51:26.197Z] [BOT] Category: TECH (matched: "cloud")
   Channel: tech-jobs (1462...4987)
[2026-01-20T09:51:26.442Z] [BOT] ✅ Posted message: Partner Marketing Manager, Cloud Partners @ anthropic in #tech-jobs
[2026-01-20T09:51:26.443Z] [BOT] ✅ Industry: Partner Marketing Manager, Cloud Partners @ anthropic
[2026-01-20T09:51:26.443Z] [BOT] 💾 Added channel posting: Partner Marketing Manager, Cloud Partners @ anthropic → category channel (1 total channels)
[2026-01-20T09:51:26.444Z] [BOT] 💾 BEFORE ARCHIVING: 2848 jobs in database
[2026-01-20T09:51:26.446Z] [BOT] ✅ No jobs to archive (all 2848 jobs within 7-day window)
[2026-01-20T09:51:26.464Z] [BOT] 💾 Saved posted_jobs.json: 2848 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:51:27.965Z] [BOT] 💾 Marked as posted: Partner Marketing Manager, Cloud Partners @ anthropic (instance #1)
[2026-01-20T09:51:27.966Z] [BOT] 💾 BEFORE ARCHIVING: 2849 jobs in database
[2026-01-20T09:51:27.967Z] [BOT] ✅ No jobs to archive (all 2849 jobs within 7-day window)
[2026-01-20T09:51:27.985Z] [BOT] 💾 Saved posted_jobs.json: 2849 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:51:30.986Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-20T09:51:30.988Z] [BOT] ⏭️  Skipping duplicate: JID_eb557646 (posted within 7 days)
[2026-01-20T09:51:30.988Z] [BOT] ⏭️  Skipping duplicate: JID_0432ef70 (posted within 7 days)
[2026-01-20T09:51:30.988Z] [BOT] ⏭️  Skipping duplicate: JID_663bfed6 (posted within 7 days)
[2026-01-20T09:51:30.988Z] [BOT] ⏭️  Skipping duplicate: JID_d4f45886 (posted within 7 days)
[2026-01-20T09:51:31.141Z] [BOT] ✅ Loaded pending queue: 2789 total (2769 pending, 20 enriched, 0 posted)
[2026-01-20T09:51:31.303Z] [BOT] ✅ Saved pending queue: 2789 total (2769 pending, 16 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T09:51:31.369Z] [BOT] 📂 Loaded 5388 existing routing entries
[2026-01-20T09:51:31.435Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 5392
   Timestamp: 2026-01-20T09:51:31.417Z
[2026-01-20T09:51:31.436Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 4
[2026-01-20T09:51:31.436Z] [BOT] Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-20T09:51:31.436Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #ai-jobs: 2 posts
     2. #finance-jobs: 1 posts
     3. #tech-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-20T09:51:33.453Z] 
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
- [BOT ERROR] (node:2429) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*