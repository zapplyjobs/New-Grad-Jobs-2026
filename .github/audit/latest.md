# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T07:46:48.823Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T07:46:12.104Z] ========================================
[2026-01-20T07:46:12.106Z] Discord Bot Execution Log
[2026-01-20T07:46:12.106Z] Environment: GitHub Actions
[2026-01-20T07:46:12.106Z] Node Version: v20.19.6
[2026-01-20T07:46:12.106Z] ========================================
[2026-01-20T07:46:12.107Z] Environment Variables Check:
[2026-01-20T07:46:12.107Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T07:46:12.107Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T07:46:12.107Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T07:46:12.107Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T07:46:12.107Z] 
Multi-Channel Configuration:
[2026-01-20T07:46:12.107Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T07:46:12.107Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T07:46:12.107Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T07:46:12.107Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T07:46:12.108Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T07:46:12.108Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T07:46:12.108Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T07:46:12.108Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T07:46:12.108Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T07:46:12.108Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T07:46:12.108Z] 
Data Files Check:
[2026-01-20T07:46:12.109Z] .github/data/new_jobs.json: ✅ Exists (10 items, 174099 bytes)
[2026-01-20T07:46:12.119Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1569383 bytes)
[2026-01-20T07:46:12.119Z] 
========================================
[2026-01-20T07:46:12.119Z] Starting Enhanced Discord Bot...
[2026-01-20T07:46:12.119Z] ========================================
[2026-01-20T07:46:12.663Z] [BOT] ✅ Loaded V2 database: 2828 jobs
[2026-01-20T07:46:13.721Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T07:46:13.721Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T07:46:13.721Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T07:46:13.835Z] [BOT] ✅ Loaded pending queue: 2798 total (2778 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T07:46:13.839Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T07:46:13.839Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T07:46:13.839Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T07:46:13.840Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-20T07:46:13.840Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Sales Engineer (Customer Success) - Boston @ datadog: boston, massachusetts, usa, denver, colorado, usa, boston, massachusetts, usa; new york, new york, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-20T07:46:13.841Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T07:46:13.843Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T07:46:13.843Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T07:46:13.844Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T07:46:13.844Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T07:46:13.845Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-20T07:46:13.846Z] [BOT] 📍 [ROUTING] "Sales Engineer (Customer Success) - Boston" @ datadog
[2026-01-20T07:46:13.846Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:46:13.850Z] [BOT ERROR] (node:2475) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T07:46:14.070Z] [BOT] ✅ Posted message: Sales Engineer (Customer Success) - Boston @ datadog in #tech-jobs
[2026-01-20T07:46:14.070Z] [BOT] ✅ Industry: Sales Engineer (Customer Success) - Boston @ datadog
[2026-01-20T07:46:14.071Z] [BOT] 💾 Added channel posting: Sales Engineer (Customer Success) - Boston @ datadog → category channel (1 total channels)
[2026-01-20T07:46:14.071Z] [BOT] 💾 BEFORE ARCHIVING: 2829 jobs in database
[2026-01-20T07:46:14.073Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T07:46:14.079Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-20T07:46:14.079Z] [BOT] ✅ Archiving complete: 20 archived, 2809 active
[2026-01-20T07:46:14.097Z] [BOT] 💾 Saved posted_jobs.json: 2809 active jobs
[2026-01-20T07:46:14.098Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:15.600Z] [BOT] 💾 Marked as posted: Sales Engineer (Customer Success) - Boston @ datadog (instance #1)
[2026-01-20T07:46:15.600Z] [BOT] 💾 BEFORE ARCHIVING: 2810 jobs in database
[2026-01-20T07:46:15.602Z] [BOT] ✅ No jobs to archive (all 2810 jobs within 7-day window)
[2026-01-20T07:46:15.618Z] [BOT] 💾 Saved posted_jobs.json: 2810 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:15.618Z] [BOT] 💾 Marked as posted: Sales Engineer (Customer Success) - Denver @ datadog (instance #1)
[2026-01-20T07:46:15.619Z] [BOT] 💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-20T07:46:15.621Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-20T07:46:15.640Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:15.640Z] [BOT] 💾 Marked as posted: Sales Engineer (Customer Success - Spanish Speaking) @ datadog (instance #1)
[2026-01-20T07:46:15.640Z] [BOT] 💾 BEFORE ARCHIVING: 2812 jobs in database
[2026-01-20T07:46:15.642Z] [BOT] ✅ No jobs to archive (all 2812 jobs within 7-day window)
[2026-01-20T07:46:15.660Z] [BOT] 💾 Saved posted_jobs.json: 2812 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:15.660Z] [BOT] 📍 [ROUTING] "Security Engineer II, Risk Engineering" @ datadog
[2026-01-20T07:46:15.660Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:46:15.828Z] [BOT] ✅ Posted message: Security Engineer II, Risk Engineering @ datadog in #tech-jobs
  ✅ Industry: Security Engineer II, Risk Engineering @ datadog
[2026-01-20T07:46:15.829Z] [BOT] 💾 Added channel posting: Security Engineer II, Risk Engineering @ datadog → category channel (1 total channels)
[2026-01-20T07:46:15.829Z] [BOT] 💾 BEFORE ARCHIVING: 2813 jobs in database
[2026-01-20T07:46:15.831Z] [BOT] ✅ No jobs to archive (all 2813 jobs within 7-day window)
[2026-01-20T07:46:15.848Z] [BOT] 💾 Saved posted_jobs.json: 2813 active jobs
[2026-01-20T07:46:15.848Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:17.522Z] [BOT] ✅ Posted message: Security Engineer II, Risk Engineering @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:46:17.522Z] [BOT] 💾 Added channel posting: Security Engineer II, Risk Engineering @ datadog → location channel (2 total channels)
[2026-01-20T07:46:17.522Z] [BOT] 💾 BEFORE ARCHIVING: 2813 jobs in database
[2026-01-20T07:46:17.524Z] [BOT] ✅ No jobs to archive (all 2813 jobs within 7-day window)
[2026-01-20T07:46:17.539Z] [BOT] 💾 Saved posted_jobs.json: 2813 active jobs
[2026-01-20T07:46:17.539Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:19.040Z] [BOT] 💾 Marked as posted: Security Engineer II, Risk Engineering @ datadog (instance #1)
[2026-01-20T07:46:19.040Z] [BOT] 💾 BEFORE ARCHIVING: 2814 jobs in database
[2026-01-20T07:46:19.042Z] [BOT] ✅ No jobs to archive (all 2814 jobs within 7-day window)
[2026-01-20T07:46:19.058Z] [BOT] 💾 Saved posted_jobs.json: 2814 active jobs
[2026-01-20T07:46:19.058Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:19.058Z] [BOT] 📍 [ROUTING] "Senior Counsel, Corporate & M&A" @ datadog
[2026-01-20T07:46:19.058Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:46:19.233Z] [BOT] ✅ Posted message: Senior Counsel, Corporate & M&A @ datadog in #tech-jobs
[2026-01-20T07:46:19.233Z] [BOT] ✅ Industry: Senior Counsel, Corporate & M&A @ datadog
[2026-01-20T07:46:19.233Z] [BOT] 💾 Added channel posting: Senior Counsel, Corporate & M&A @ datadog → category channel (1 total channels)
[2026-01-20T07:46:19.233Z] [BOT] 💾 BEFORE ARCHIVING: 2815 jobs in database
[2026-01-20T07:46:19.235Z] [BOT] ✅ No jobs to archive (all 2815 jobs within 7-day window)
[2026-01-20T07:46:19.251Z] [BOT] 💾 Saved posted_jobs.json: 2815 active jobs
[2026-01-20T07:46:19.251Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:20.914Z] [BOT] ✅ Posted message: Senior Counsel, Corporate & M&A @ datadog in #JID_98d4f0de
[2026-01-20T07:46:20.915Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T07:46:20.915Z] [BOT] 💾 Added channel posting: Senior Counsel, Corporate & M&A @ datadog → location channel (2 total channels)
[2026-01-20T07:46:20.915Z] [BOT] 💾 BEFORE ARCHIVING: 2815 jobs in database
[2026-01-20T07:46:20.917Z] [BOT] ✅ No jobs to archive (all 2815 jobs within 7-day window)
[2026-01-20T07:46:20.932Z] [BOT] 💾 Saved posted_jobs.json: 2815 active jobs
[2026-01-20T07:46:20.932Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:22.433Z] [BOT] 💾 Marked as posted: Senior Counsel, Corporate & M&A @ datadog (instance #1)
[2026-01-20T07:46:22.433Z] [BOT] 💾 BEFORE ARCHIVING: 2816 jobs in database
[2026-01-20T07:46:22.435Z] [BOT] ✅ No jobs to archive (all 2816 jobs within 7-day window)
[2026-01-20T07:46:22.455Z] [BOT] 💾 Saved posted_jobs.json: 2816 active jobs
[2026-01-20T07:46:22.455Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:25.456Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-20T07:46:25.456Z] [BOT] 📍 [ROUTING] "Senior AI Engineer - APM Experiences" @ datadog
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T07:46:25.746Z] [BOT] ✅ Posted message: Senior AI Engineer - APM Experiences @ datadog in #ai-jobs
[2026-01-20T07:46:25.747Z] [BOT] ✅ Industry: Senior AI Engineer - APM Experiences @ datadog
[2026-01-20T07:46:25.747Z] [BOT] 💾 Added channel posting: Senior AI Engineer - APM Experiences @ datadog → category channel (1 total channels)
[2026-01-20T07:46:25.747Z] [BOT] 💾 BEFORE ARCHIVING: 2817 jobs in database
[2026-01-20T07:46:25.750Z] [BOT] ✅ No jobs to archive (all 2817 jobs within 7-day window)
[2026-01-20T07:46:25.769Z] [BOT] 💾 Saved posted_jobs.json: 2817 active jobs
[2026-01-20T07:46:25.769Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:27.586Z] [BOT] ✅ Posted message: Senior AI Engineer - APM Experiences @ datadog in #JID_98d4f0de
[2026-01-20T07:46:27.587Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T07:46:27.587Z] [BOT] 💾 Added channel posting: Senior AI Engineer - APM Experiences @ datadog → location channel (2 total channels)
[2026-01-20T07:46:27.587Z] [BOT] 💾 BEFORE ARCHIVING: 2817 jobs in database
[2026-01-20T07:46:27.589Z] [BOT] ✅ No jobs to archive (all 2817 jobs within 7-day window)
[2026-01-20T07:46:27.607Z] [BOT] 💾 Saved posted_jobs.json: 2817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:29.109Z] [BOT] 💾 Marked as posted: Senior AI Engineer - APM Experiences @ datadog (instance #1)
[2026-01-20T07:46:29.109Z] [BOT] 💾 BEFORE ARCHIVING: 2818 jobs in database
[2026-01-20T07:46:29.111Z] [BOT] ✅ No jobs to archive (all 2818 jobs within 7-day window)
[2026-01-20T07:46:29.127Z] [BOT] 💾 Saved posted_jobs.json: 2818 active jobs
[2026-01-20T07:46:29.127Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:32.128Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-20T07:46:32.128Z] [BOT] 📍 [ROUTING] "Senior Atlassian Administrator - Enterprise IT Operations" @ datadog
   Category: FINANCE (matched: "audit")
[2026-01-20T07:46:32.128Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-20T07:46:32.410Z] [BOT] ✅ Posted message: Senior Atlassian Administrator - Enterprise IT Operations @ datadog in #finance-jobs
  ✅ Industry: Senior Atlassian Administrator - Enterprise IT Operations @ datadog
[2026-01-20T07:46:32.410Z] [BOT] 💾 Added channel posting: Senior Atlassian Administrator - Enterprise IT Operations @ datadog → category channel (1 total channels)
[2026-01-20T07:46:32.410Z] [BOT] 💾 BEFORE ARCHIVING: 2819 jobs in database
[2026-01-20T07:46:32.412Z] [BOT] ✅ No jobs to archive (all 2819 jobs within 7-day window)
[2026-01-20T07:46:32.429Z] [BOT] 💾 Saved posted_jobs.json: 2819 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:34.303Z] [BOT] ✅ Posted message: Senior Atlassian Administrator - Enterprise IT Operations @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:46:34.304Z] [BOT] 💾 Added channel posting: Senior Atlassian Administrator - Enterprise IT Operations @ datadog → location channel (2 total channels)
[2026-01-20T07:46:34.304Z] [BOT] 💾 BEFORE ARCHIVING: 2819 jobs in database
[2026-01-20T07:46:34.306Z] [BOT] ✅ No jobs to archive (all 2819 jobs within 7-day window)
[2026-01-20T07:46:34.324Z] [BOT] 💾 Saved posted_jobs.json: 2819 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:35.824Z] [BOT] 💾 Marked as posted: Senior Atlassian Administrator - Enterprise IT Operations @ datadog (instance #1)
[2026-01-20T07:46:35.825Z] [BOT] 💾 BEFORE ARCHIVING: 2820 jobs in database
[2026-01-20T07:46:35.826Z] [BOT] ✅ No jobs to archive (all 2820 jobs within 7-day window)
[2026-01-20T07:46:35.843Z] [BOT] 💾 Saved posted_jobs.json: 2820 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:38.844Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-20T07:46:38.844Z] [BOT] 📍 [ROUTING] "Senior Customer Data Scientist" @ datadog
[2026-01-20T07:46:38.844Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T07:46:39.103Z] [BOT] ✅ Posted message: Senior Customer Data Scientist @ datadog in #JID_fb739488
  ✅ Industry: Senior Customer Data Scientist @ datadog
[2026-01-20T07:46:39.104Z] [BOT] 💾 Added channel posting: Senior Customer Data Scientist @ datadog → category channel (1 total channels)
[2026-01-20T07:46:39.104Z] [BOT] 💾 BEFORE ARCHIVING: 2821 jobs in database
[2026-01-20T07:46:39.105Z] [BOT] ✅ No jobs to archive (all 2821 jobs within 7-day window)
[2026-01-20T07:46:39.123Z] [BOT] 💾 Saved posted_jobs.json: 2821 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:40.788Z] [BOT] ✅ Posted message: Senior Customer Data Scientist @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:46:40.789Z] [BOT] 💾 Added channel posting: Senior Customer Data Scientist @ datadog → location channel (2 total channels)
[2026-01-20T07:46:40.789Z] [BOT] 💾 BEFORE ARCHIVING: 2821 jobs in database
[2026-01-20T07:46:40.791Z] [BOT] ✅ No jobs to archive (all 2821 jobs within 7-day window)
[2026-01-20T07:46:40.807Z] [BOT] 💾 Saved posted_jobs.json: 2821 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:42.309Z] [BOT] 💾 Marked as posted: Senior Customer Data Scientist @ datadog (instance #1)
[2026-01-20T07:46:42.309Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-20T07:46:42.311Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-20T07:46:42.329Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:46:45.329Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-20T07:46:45.331Z] [BOT] ⏭️  Skipping duplicate: JID_594f09b2 (posted within 7 days)
[2026-01-20T07:46:45.331Z] [BOT] ⏭️  Skipping duplicate: JID_3c74a7c8 (posted within 7 days)
[2026-01-20T07:46:45.331Z] [BOT] ⏭️  Skipping duplicate: JID_760f3023 (posted within 7 days)
[2026-01-20T07:46:45.331Z] [BOT] ⏭️  Skipping duplicate: JID_9373491e (posted within 7 days)
[2026-01-20T07:46:45.331Z] [BOT] ⏭️  Skipping duplicate: JID_365fb61f (posted within 7 days)
[2026-01-20T07:46:45.331Z] [BOT] ⏭️  Skipping duplicate: JID_96504ede (posted within 7 days)
[2026-01-20T07:46:45.440Z] [BOT] ✅ Loaded pending queue: 2798 total (2778 pending, 20 enriched, 0 posted)
[2026-01-20T07:46:45.616Z] [BOT] ✅ Saved pending queue: 2798 total (2778 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-01-20T07:46:45.616Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T07:46:45.692Z] [BOT] 📂 Loaded 5358 existing routing entries
[2026-01-20T07:46:45.764Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
[2026-01-20T07:46:45.764Z] [BOT] Total entries: 5364
   Timestamp: 2026-01-20T07:46:45.742Z
[2026-01-20T07:46:45.765Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T07:46:45.765Z] [BOT] Total attempts: 11
   Successful: 11
   Failed: 0
   Skipped: 0
[2026-01-20T07:46:45.765Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
[2026-01-20T07:46:45.765Z] [BOT] Channels used: 5
   Top channels:
     1. #JID_98d4f0de: 5 posts
     2. #tech-jobs: 3 posts
     3. #ai-jobs: 1 posts
     4. #finance-jobs: 1 posts
     5. #JID_fb739488: 1 posts
[2026-01-20T07:46:45.766Z] [BOT] [STATS] Channel stats saved
[2026-01-20T07:46:47.789Z] 
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
- [BOT ERROR] (node:2475) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*