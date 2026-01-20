# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T06:02:09.721Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T06:01:33.054Z] ========================================
[2026-01-20T06:01:33.056Z] Discord Bot Execution Log
[2026-01-20T06:01:33.056Z] Environment: GitHub Actions
[2026-01-20T06:01:33.056Z] Node Version: v20.19.6
[2026-01-20T06:01:33.056Z] ========================================
[2026-01-20T06:01:33.056Z] Environment Variables Check:
[2026-01-20T06:01:33.056Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T06:01:33.056Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T06:01:33.056Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T06:01:33.057Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T06:01:33.057Z] 
Multi-Channel Configuration:
[2026-01-20T06:01:33.057Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T06:01:33.057Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T06:01:33.057Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T06:01:33.057Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T06:01:33.057Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T06:01:33.057Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T06:01:33.057Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T06:01:33.057Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T06:01:33.057Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T06:01:33.057Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T06:01:33.058Z] 
Data Files Check:
[2026-01-20T06:01:33.059Z] .github/data/new_jobs.json: ✅ Exists (10 items, 164137 bytes)
[2026-01-20T06:01:33.069Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1537966 bytes)
[2026-01-20T06:01:33.069Z] 
========================================
[2026-01-20T06:01:33.069Z] Starting Enhanced Discord Bot...
[2026-01-20T06:01:33.069Z] ========================================
[2026-01-20T06:01:33.598Z] [BOT] ✅ Loaded V2 database: 2781 jobs
[2026-01-20T06:01:34.147Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T06:01:34.148Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T06:01:34.148Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T06:01:34.262Z] [BOT] ✅ Loaded pending queue: 2808 total (2788 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T06:01:34.265Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T06:01:34.265Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T06:01:34.266Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T06:01:34.266Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-20T06:01:34.267Z] [BOT] (4 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Deal Desk Analyst @ datadog: boston, massachusetts, usa; new york, new york, usa, denver, colorado, usa
   - Enterprise Customer Success Manager - Denver @ datadog: denver, colorado, usa, boston, massachusetts, usa; new york, new york, usa
   - Enterprise Sales Executive @ datadog: washington, district of columbia, usa, remote
[2026-01-20T06:01:34.267Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T06:01:34.269Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T06:01:34.271Z] [BOT] 📌 Posting 6 jobs to #finance-jobs
[2026-01-20T06:01:34.271Z] [BOT] 📍 [ROUTING] "Customer Success Associate - Boston (Portuguese-speaking)" @ datadog
[2026-01-20T06:01:34.272Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T06:01:34.276Z] [BOT ERROR] (node:2382) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T06:01:34.500Z] [BOT] ✅ Posted message: Customer Success Associate - Boston (Portuguese-speaking) @ datadog in #finance-jobs
[2026-01-20T06:01:34.501Z] [BOT] ✅ Industry: Customer Success Associate - Boston (Portuguese-speaking) @ datadog
[2026-01-20T06:01:34.502Z] [BOT] 💾 Added channel posting: Customer Success Associate - Boston (Portuguese-speaking) @ datadog → category channel (1 total channels)
[2026-01-20T06:01:34.502Z] [BOT] 💾 BEFORE ARCHIVING: 2782 jobs in database
[2026-01-20T06:01:34.504Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T06:01:34.507Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-20T06:01:34.507Z] [BOT] ✅ Archiving complete: 10 archived, 2772 active
[2026-01-20T06:01:34.522Z] [BOT] 💾 Saved posted_jobs.json: 2772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:36.024Z] [BOT] 💾 Marked as posted: Customer Success Associate - Boston (Portuguese-speaking) @ datadog (instance #1)
[2026-01-20T06:01:36.024Z] [BOT] 💾 BEFORE ARCHIVING: 2773 jobs in database
[2026-01-20T06:01:36.026Z] [BOT] ✅ No jobs to archive (all 2773 jobs within 7-day window)
[2026-01-20T06:01:36.041Z] [BOT] 💾 Saved posted_jobs.json: 2773 active jobs
[2026-01-20T06:01:36.041Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:36.041Z] [BOT] 📍 [ROUTING] "Customer Success Manager - Boston" @ datadog
[2026-01-20T06:01:36.041Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T06:01:36.280Z] [BOT] ✅ Posted message: Customer Success Manager - Boston @ datadog in #finance-jobs
[2026-01-20T06:01:36.280Z] [BOT] ✅ Industry: Customer Success Manager - Boston @ datadog
[2026-01-20T06:01:36.281Z] [BOT] 💾 Added channel posting: Customer Success Manager - Boston @ datadog → category channel (1 total channels)
[2026-01-20T06:01:36.281Z] [BOT] 💾 BEFORE ARCHIVING: 2774 jobs in database
[2026-01-20T06:01:36.282Z] [BOT] ✅ No jobs to archive (all 2774 jobs within 7-day window)
[2026-01-20T06:01:36.302Z] [BOT] 💾 Saved posted_jobs.json: 2774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:37.802Z] [BOT] 💾 Marked as posted: Customer Success Manager - Boston @ datadog (instance #1)
[2026-01-20T06:01:37.802Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-20T06:01:37.804Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-20T06:01:37.821Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:37.821Z] [BOT] 📍 [ROUTING] "Customer Success Manager - Boston (Portuguese-speaking)" @ datadog
[2026-01-20T06:01:37.821Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T06:01:38.096Z] [BOT] ✅ Posted message: Customer Success Manager - Boston (Portuguese-speaking) @ datadog in #finance-jobs
[2026-01-20T06:01:38.096Z] [BOT] ✅ Industry: Customer Success Manager - Boston (Portuguese-speaking) @ datadog
[2026-01-20T06:01:38.097Z] [BOT] 💾 Added channel posting: Customer Success Manager - Boston (Portuguese-speaking) @ datadog → category channel (1 total channels)
[2026-01-20T06:01:38.097Z] [BOT] 💾 BEFORE ARCHIVING: 2776 jobs in database
[2026-01-20T06:01:38.099Z] [BOT] ✅ No jobs to archive (all 2776 jobs within 7-day window)
[2026-01-20T06:01:38.117Z] [BOT] 💾 Saved posted_jobs.json: 2776 active jobs
[2026-01-20T06:01:38.117Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:39.618Z] [BOT] 💾 Marked as posted: Customer Success Manager - Boston (Portuguese-speaking) @ datadog (instance #1)
[2026-01-20T06:01:39.618Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-20T06:01:39.619Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-20T06:01:39.636Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:39.636Z] [BOT] 📍 [ROUTING] "Deal Desk Analyst" @ datadog
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T06:01:39.988Z] [BOT] ✅ Posted message: Deal Desk Analyst @ datadog in #finance-jobs
[2026-01-20T06:01:39.988Z] [BOT] ✅ Industry: Deal Desk Analyst @ datadog
[2026-01-20T06:01:39.989Z] [BOT] 💾 Added channel posting: Deal Desk Analyst @ datadog → category channel (1 total channels)
[2026-01-20T06:01:39.989Z] [BOT] 💾 BEFORE ARCHIVING: 2778 jobs in database
[2026-01-20T06:01:39.991Z] [BOT] ✅ No jobs to archive (all 2778 jobs within 7-day window)
[2026-01-20T06:01:40.006Z] [BOT] 💾 Saved posted_jobs.json: 2778 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:41.772Z] [BOT] ✅ Posted message: Deal Desk Analyst @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T06:01:41.772Z] [BOT] 💾 Added channel posting: Deal Desk Analyst @ datadog → location channel (2 total channels)
[2026-01-20T06:01:41.773Z] [BOT] 💾 BEFORE ARCHIVING: 2778 jobs in database
[2026-01-20T06:01:41.774Z] [BOT] ✅ No jobs to archive (all 2778 jobs within 7-day window)
[2026-01-20T06:01:41.791Z] [BOT] 💾 Saved posted_jobs.json: 2778 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:43.292Z] [BOT] 💾 Marked as posted: Deal Desk Analyst @ datadog (instance #1)
[2026-01-20T06:01:43.293Z] [BOT] 💾 BEFORE ARCHIVING: 2779 jobs in database
[2026-01-20T06:01:43.294Z] [BOT] ✅ No jobs to archive (all 2779 jobs within 7-day window)
[2026-01-20T06:01:43.313Z] [BOT] 💾 Saved posted_jobs.json: 2779 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:43.314Z] [BOT] 💾 Marked as posted: Deal Desk Analyst - Denver @ datadog (instance #1)
[2026-01-20T06:01:43.314Z] [BOT] 💾 BEFORE ARCHIVING: 2780 jobs in database
[2026-01-20T06:01:43.315Z] [BOT] ✅ No jobs to archive (all 2780 jobs within 7-day window)
[2026-01-20T06:01:43.334Z] [BOT] 💾 Saved posted_jobs.json: 2780 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:43.334Z] [BOT] 📍 [ROUTING] "Director, Pricing and Monetization" @ datadog
[2026-01-20T06:01:43.335Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T06:01:43.675Z] [BOT] ✅ Posted message: Director, Pricing and Monetization @ datadog in #finance-jobs
  ✅ Industry: Director, Pricing and Monetization @ datadog
[2026-01-20T06:01:43.676Z] [BOT] 💾 Added channel posting: Director, Pricing and Monetization @ datadog → category channel (1 total channels)
[2026-01-20T06:01:43.676Z] [BOT] 💾 BEFORE ARCHIVING: 2781 jobs in database
[2026-01-20T06:01:43.678Z] [BOT] ✅ No jobs to archive (all 2781 jobs within 7-day window)
[2026-01-20T06:01:43.694Z] [BOT] 💾 Saved posted_jobs.json: 2781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:45.447Z] [BOT] ✅ Posted message: Director, Pricing and Monetization @ datadog in #JID_98d4f0de
[2026-01-20T06:01:45.447Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T06:01:45.447Z] [BOT] 💾 Added channel posting: Director, Pricing and Monetization @ datadog → location channel (2 total channels)
[2026-01-20T06:01:45.448Z] [BOT] 💾 BEFORE ARCHIVING: 2781 jobs in database
[2026-01-20T06:01:45.449Z] [BOT] ✅ No jobs to archive (all 2781 jobs within 7-day window)
[2026-01-20T06:01:45.466Z] [BOT] 💾 Saved posted_jobs.json: 2781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:46.967Z] [BOT] 💾 Marked as posted: Director, Pricing and Monetization @ datadog (instance #1)
[2026-01-20T06:01:46.967Z] [BOT] 💾 BEFORE ARCHIVING: 2782 jobs in database
[2026-01-20T06:01:46.969Z] [BOT] ✅ No jobs to archive (all 2782 jobs within 7-day window)
[2026-01-20T06:01:46.985Z] [BOT] 💾 Saved posted_jobs.json: 2782 active jobs
[2026-01-20T06:01:46.985Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:46.986Z] [BOT] 📍 [ROUTING] "Director, Sales Field Enablement - NYC" @ datadog
[2026-01-20T06:01:46.986Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T06:01:47.167Z] [BOT] ✅ Posted message: Director, Sales Field Enablement - NYC @ datadog in #finance-jobs
  ✅ Industry: Director, Sales Field Enablement - NYC @ datadog
[2026-01-20T06:01:47.168Z] [BOT] 💾 Added channel posting: Director, Sales Field Enablement - NYC @ datadog → category channel (1 total channels)
[2026-01-20T06:01:47.168Z] [BOT] 💾 BEFORE ARCHIVING: 2783 jobs in database
[2026-01-20T06:01:47.170Z] [BOT] ✅ No jobs to archive (all 2783 jobs within 7-day window)
[2026-01-20T06:01:47.186Z] [BOT] 💾 Saved posted_jobs.json: 2783 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:48.838Z] [BOT] ✅ Posted message: Director, Sales Field Enablement - NYC @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T06:01:48.839Z] [BOT] 💾 Added channel posting: Director, Sales Field Enablement - NYC @ datadog → location channel (2 total channels)
[2026-01-20T06:01:48.839Z] [BOT] 💾 BEFORE ARCHIVING: 2783 jobs in database
[2026-01-20T06:01:48.841Z] [BOT] ✅ No jobs to archive (all 2783 jobs within 7-day window)
[2026-01-20T06:01:48.858Z] [BOT] 💾 Saved posted_jobs.json: 2783 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:50.358Z] [BOT] 💾 Marked as posted: Director, Sales Field Enablement - NYC @ datadog (instance #1)
[2026-01-20T06:01:50.359Z] [BOT] 💾 BEFORE ARCHIVING: 2784 jobs in database
[2026-01-20T06:01:50.360Z] [BOT] ✅ No jobs to archive (all 2784 jobs within 7-day window)
[2026-01-20T06:01:50.377Z] [BOT] 💾 Saved posted_jobs.json: 2784 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:53.379Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-20T06:01:53.379Z] [BOT] 📍 [ROUTING] "Datadog for Startups Lead" @ datadog
[2026-01-20T06:01:53.379Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T06:01:53.620Z] [BOT] ✅ Posted message: Datadog for Startups Lead @ datadog in #tech-jobs
  ✅ Industry: Datadog for Startups Lead @ datadog
[2026-01-20T06:01:53.620Z] [BOT] 💾 Added channel posting: Datadog for Startups Lead @ datadog → category channel (1 total channels)
[2026-01-20T06:01:53.621Z] [BOT] 💾 BEFORE ARCHIVING: 2785 jobs in database
[2026-01-20T06:01:53.622Z] [BOT] ✅ No jobs to archive (all 2785 jobs within 7-day window)
[2026-01-20T06:01:53.638Z] [BOT] 💾 Saved posted_jobs.json: 2785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:55.139Z] [BOT] 💾 Marked as posted: Datadog for Startups Lead @ datadog (instance #1)
[2026-01-20T06:01:55.139Z] [BOT] 💾 BEFORE ARCHIVING: 2786 jobs in database
[2026-01-20T06:01:55.141Z] [BOT] ✅ No jobs to archive (all 2786 jobs within 7-day window)
[2026-01-20T06:01:55.158Z] [BOT] 💾 Saved posted_jobs.json: 2786 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:55.158Z] [BOT] 📍 [ROUTING] "Developer Advocate - Community" @ datadog
[2026-01-20T06:01:55.158Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T06:01:55.386Z] [BOT] ✅ Posted message: Developer Advocate - Community @ datadog in #tech-jobs
  ✅ Industry: Developer Advocate - Community @ datadog
[2026-01-20T06:01:55.387Z] [BOT] 💾 Added channel posting: Developer Advocate - Community @ datadog → category channel (1 total channels)
[2026-01-20T06:01:55.387Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-20T06:01:55.389Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-20T06:01:55.407Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
[2026-01-20T06:01:55.407Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:57.228Z] [BOT] ✅ Posted message: Developer Advocate - Community @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T06:01:57.229Z] [BOT] 💾 Added channel posting: Developer Advocate - Community @ datadog → location channel (2 total channels)
[2026-01-20T06:01:57.229Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-20T06:01:57.231Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-20T06:01:57.246Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
[2026-01-20T06:01:57.246Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:58.748Z] [BOT] 💾 Marked as posted: Developer Advocate - Community @ datadog (instance #1)
[2026-01-20T06:01:58.748Z] [BOT] 💾 BEFORE ARCHIVING: 2788 jobs in database
[2026-01-20T06:01:58.750Z] [BOT] ✅ No jobs to archive (all 2788 jobs within 7-day window)
[2026-01-20T06:01:58.768Z] [BOT] 💾 Saved posted_jobs.json: 2788 active jobs
[2026-01-20T06:01:58.768Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T06:01:58.768Z] [BOT] 📍 [ROUTING] "Director, Technical Product Partnerships" @ datadog
[2026-01-20T06:01:58.768Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T06:02:00.297Z] [BOT] ✅ Posted message: Director, Technical Product Partnerships @ datadog in #tech-jobs
  ✅ Industry: Director, Technical Product Partnerships @ datadog
[2026-01-20T06:02:00.297Z] [BOT] 💾 Added channel posting: Director, Technical Product Partnerships @ datadog → category channel (1 total channels)
[2026-01-20T06:02:00.297Z] [BOT] 💾 BEFORE ARCHIVING: 2789 jobs in database
[2026-01-20T06:02:00.299Z] [BOT] ✅ No jobs to archive (all 2789 jobs within 7-day window)
[2026-01-20T06:02:00.315Z] [BOT] 💾 Saved posted_jobs.json: 2789 active jobs
[2026-01-20T06:02:00.316Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T06:02:01.995Z] [BOT] ✅ Posted message: Director, Technical Product Partnerships @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T06:02:01.995Z] [BOT] 💾 Added channel posting: Director, Technical Product Partnerships @ datadog → location channel (2 total channels)
[2026-01-20T06:02:01.995Z] [BOT] 💾 BEFORE ARCHIVING: 2789 jobs in database
[2026-01-20T06:02:01.997Z] [BOT] ✅ No jobs to archive (all 2789 jobs within 7-day window)
[2026-01-20T06:02:02.012Z] [BOT] 💾 Saved posted_jobs.json: 2789 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:02:03.513Z] [BOT] 💾 Marked as posted: Director, Technical Product Partnerships @ datadog (instance #1)
[2026-01-20T06:02:03.514Z] [BOT] 💾 BEFORE ARCHIVING: 2790 jobs in database
[2026-01-20T06:02:03.515Z] [BOT] ✅ No jobs to archive (all 2790 jobs within 7-day window)
[2026-01-20T06:02:03.532Z] [BOT] 💾 Saved posted_jobs.json: 2790 active jobs
[2026-01-20T06:02:03.533Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T06:02:06.533Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-20T06:02:06.534Z] [BOT] ⏭️  Skipping duplicate: JID_61aeb04f (posted within 7 days)
[2026-01-20T06:02:06.534Z] [BOT] ⏭️  Skipping duplicate: JID_92a27594 (posted within 7 days)
[2026-01-20T06:02:06.534Z] [BOT] ⏭️  Skipping duplicate: JID_a65e0bad (posted within 7 days)
[2026-01-20T06:02:06.534Z] [BOT] ⏭️  Skipping duplicate: JID_6084715e (posted within 7 days)
[2026-01-20T06:02:06.534Z] [BOT] ⏭️  Skipping duplicate: JID_2f2f0401 (posted within 7 days)
[2026-01-20T06:02:06.534Z] [BOT] ⏭️  Skipping duplicate: JID_1f442e76 (posted within 7 days)
[2026-01-20T06:02:06.534Z] [BOT] ⏭️  Skipping duplicate: JID_27a15fea (posted within 7 days)
[2026-01-20T06:02:06.535Z] [BOT] ⏭️  Skipping duplicate: JID_298aa8b5 (posted within 7 days)
[2026-01-20T06:02:06.535Z] [BOT] ⏭️  Skipping duplicate: JID_5d6f1e71 (posted within 7 days)
[2026-01-20T06:02:06.638Z] [BOT] ✅ Loaded pending queue: 2808 total (2788 pending, 20 enriched, 0 posted)
[2026-01-20T06:02:06.815Z] [BOT] ✅ Saved pending queue: 2808 total (2788 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-20T06:02:06.815Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T06:02:06.876Z] [BOT] 📂 Loaded 5310 existing routing entries
[2026-01-20T06:02:06.948Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 5319
   Timestamp: 2026-01-20T06:02:06.926Z
[2026-01-20T06:02:06.950Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 3
   Top channels:
     1. #finance-jobs: 6 posts
     2. #JID_98d4f0de: 5 posts
     3. #tech-jobs: 3 posts
[STATS] Channel stats saved
[2026-01-20T06:02:08.972Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
- [BOT ERROR] (node:2382) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*