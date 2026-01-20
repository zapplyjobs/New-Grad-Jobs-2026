# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T12:56:40.716Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T12:56:23.625Z] ========================================
[2026-01-20T12:56:23.627Z] Discord Bot Execution Log
[2026-01-20T12:56:23.627Z] Environment: GitHub Actions
[2026-01-20T12:56:23.627Z] Node Version: v20.19.6
[2026-01-20T12:56:23.627Z] ========================================
[2026-01-20T12:56:23.627Z] Environment Variables Check:
[2026-01-20T12:56:23.627Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T12:56:23.627Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T12:56:23.627Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T12:56:23.628Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T12:56:23.628Z] 
Multi-Channel Configuration:
[2026-01-20T12:56:23.628Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T12:56:23.628Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T12:56:23.628Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T12:56:23.628Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T12:56:23.628Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T12:56:23.628Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T12:56:23.628Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T12:56:23.628Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T12:56:23.628Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T12:56:23.628Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T12:56:23.628Z] 
Data Files Check:
[2026-01-20T12:56:23.630Z] .github/data/new_jobs.json: ✅ Exists (10 items, 172195 bytes)
[2026-01-20T12:56:23.640Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1625624 bytes)
[2026-01-20T12:56:23.641Z] 
========================================
[2026-01-20T12:56:23.641Z] Starting Enhanced Discord Bot...
[2026-01-20T12:56:23.641Z] ========================================
[2026-01-20T12:56:24.180Z] [BOT] ✅ Loaded V2 database: 2921 jobs
[2026-01-20T12:56:24.812Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T12:56:24.812Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T12:56:24.812Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T12:56:24.925Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-20T12:56:24.927Z] [BOT] [BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T12:56:24.930Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T12:56:24.931Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T12:56:24.931Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T12:56:24.932Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-20T12:56:24.932Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Product Manager, Math @ duolingo: new york, seattle
[2026-01-20T12:56:24.932Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T12:56:24.934Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T12:56:24.935Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T12:56:24.935Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T12:56:24.936Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T12:56:24.936Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T12:56:24.936Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T12:56:24.936Z] [BOT ERROR] ⚠️ No channel configured for job: Designer Advocate - Figma Weave (New York, United States) - skipping
[2026-01-20T12:56:24.937Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-20T12:56:24.937Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Insurance" @ anthropic
[2026-01-20T12:56:24.938Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T12:56:24.942Z] [BOT ERROR] (node:2385) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T12:56:25.468Z] [BOT] ✅ Posted message: Strategic Account Executive, Insurance @ anthropic in #tech-jobs
[2026-01-20T12:56:25.469Z] [BOT] ✅ Industry: Strategic Account Executive, Insurance @ anthropic
[2026-01-20T12:56:25.469Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Insurance @ anthropic → category channel (1 total channels)
[2026-01-20T12:56:25.470Z] [BOT] 💾 BEFORE ARCHIVING: 2922 jobs in database
[2026-01-20T12:56:25.472Z] [BOT] ✅ No jobs to archive (all 2922 jobs within 7-day window)
[2026-01-20T12:56:25.493Z] [BOT] 💾 Saved posted_jobs.json: 2922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:56:27.167Z] [BOT] ✅ Posted message: Strategic Account Executive, Insurance @ anthropic in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T12:56:27.167Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Insurance @ anthropic → location channel (2 total channels)
[2026-01-20T12:56:27.167Z] [BOT] 💾 BEFORE ARCHIVING: 2922 jobs in database
[2026-01-20T12:56:27.169Z] [BOT] ✅ No jobs to archive (all 2922 jobs within 7-day window)
[2026-01-20T12:56:27.186Z] [BOT] 💾 Saved posted_jobs.json: 2922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:56:28.687Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Insurance @ anthropic (instance #1)
[2026-01-20T12:56:28.688Z] [BOT] 💾 BEFORE ARCHIVING: 2923 jobs in database
[2026-01-20T12:56:28.689Z] [BOT] ✅ No jobs to archive (all 2923 jobs within 7-day window)
[2026-01-20T12:56:28.710Z] [BOT] 💾 Saved posted_jobs.json: 2923 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:56:28.711Z] [BOT] 📍 [ROUTING] "Recruiter, Applied AI" @ anthropic
[2026-01-20T12:56:28.711Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: tech-jobs (1462...4987)
[2026-01-20T12:56:28.945Z] [BOT] ✅ Posted message: Recruiter, Applied AI @ anthropic in #tech-jobs
  ✅ Industry: Recruiter, Applied AI @ anthropic
[2026-01-20T12:56:28.945Z] [BOT] 💾 Added channel posting: Recruiter, Applied AI @ anthropic → category channel (1 total channels)
[2026-01-20T12:56:28.945Z] [BOT] 💾 BEFORE ARCHIVING: 2924 jobs in database
[2026-01-20T12:56:28.947Z] [BOT] ✅ No jobs to archive (all 2924 jobs within 7-day window)
[2026-01-20T12:56:28.966Z] [BOT] 💾 Saved posted_jobs.json: 2924 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:56:30.468Z] [BOT] 💾 Marked as posted: Recruiter, Applied AI @ anthropic (instance #1)
[2026-01-20T12:56:30.468Z] [BOT] 💾 BEFORE ARCHIVING: 2925 jobs in database
[2026-01-20T12:56:30.470Z] [BOT] ✅ No jobs to archive (all 2925 jobs within 7-day window)
[2026-01-20T12:56:30.490Z] [BOT] 💾 Saved posted_jobs.json: 2925 active jobs
[2026-01-20T12:56:30.490Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Head of Brand Campaigns" @ duolingo
[2026-01-20T12:56:30.490Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T12:56:30.679Z] [BOT] ✅ Posted message: Head of Brand Campaigns @ duolingo in #tech-jobs
[2026-01-20T12:56:30.680Z] [BOT] ✅ Industry: Head of Brand Campaigns @ duolingo
[2026-01-20T12:56:30.680Z] [BOT] 💾 Added channel posting: Head of Brand Campaigns @ duolingo → category channel (1 total channels)
[2026-01-20T12:56:30.680Z] [BOT] 💾 BEFORE ARCHIVING: 2926 jobs in database
[2026-01-20T12:56:30.682Z] [BOT] ✅ No jobs to archive (all 2926 jobs within 7-day window)
[2026-01-20T12:56:30.698Z] [BOT] 💾 Saved posted_jobs.json: 2926 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:56:32.398Z] [BOT] ✅ Posted message: Head of Brand Campaigns @ duolingo in #JID_98d4f0de
[2026-01-20T12:56:32.399Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T12:56:32.399Z] [BOT] 💾 Added channel posting: Head of Brand Campaigns @ duolingo → location channel (2 total channels)
[2026-01-20T12:56:32.399Z] [BOT] 💾 BEFORE ARCHIVING: 2926 jobs in database
[2026-01-20T12:56:32.401Z] [BOT] ✅ No jobs to archive (all 2926 jobs within 7-day window)
[2026-01-20T12:56:32.418Z] [BOT] 💾 Saved posted_jobs.json: 2926 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:56:33.918Z] [BOT] 💾 Marked as posted: Head of Brand Campaigns @ duolingo (instance #1)
[2026-01-20T12:56:33.918Z] [BOT] 💾 BEFORE ARCHIVING: 2927 jobs in database
[2026-01-20T12:56:33.920Z] [BOT] ✅ No jobs to archive (all 2927 jobs within 7-day window)
[2026-01-20T12:56:33.941Z] [BOT] 💾 Saved posted_jobs.json: 2927 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T12:56:36.942Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-20T12:56:36.944Z] [BOT] ⏭️  Skipping duplicate: JID_e13d0cd0 (posted within 7 days)
[2026-01-20T12:56:36.944Z] [BOT] ⏭️  Skipping duplicate: JID_6f02cdd5 (posted within 7 days)
[2026-01-20T12:56:36.944Z] [BOT] ⏭️  Skipping duplicate: JID_838eee4a (posted within 7 days)
[2026-01-20T12:56:37.063Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[2026-01-20T12:56:37.233Z] [BOT] ✅ Saved pending queue: 2796 total (2776 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T12:56:37.299Z] [BOT] 📂 Loaded 5425 existing routing entries
[2026-01-20T12:56:37.372Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 5428
   Timestamp: 2026-01-20T12:56:37.349Z
[2026-01-20T12:56:37.372Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T12:56:37.372Z] [BOT] Total attempts: 5
   Successful: 5
   Failed: 0
   Skipped: 0
[2026-01-20T12:56:37.373Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 5
   Channels used: 2
[2026-01-20T12:56:37.373Z] [BOT] Top channels:
     1. #tech-jobs: 3 posts
     2. #JID_98d4f0de: 2 posts
[STATS] Channel stats saved
[2026-01-20T12:56:39.400Z] 
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
- [BOT ERROR] (node:2385) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*