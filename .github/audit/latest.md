# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T05:32:58.270Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T05:32:20.922Z] ========================================
[2026-01-20T05:32:20.924Z] Discord Bot Execution Log
[2026-01-20T05:32:20.924Z] Environment: GitHub Actions
[2026-01-20T05:32:20.924Z] Node Version: v20.19.6
[2026-01-20T05:32:20.924Z] ========================================
[2026-01-20T05:32:20.924Z] Environment Variables Check:
[2026-01-20T05:32:20.924Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T05:32:20.925Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T05:32:20.925Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T05:32:20.925Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T05:32:20.925Z] 
Multi-Channel Configuration:
[2026-01-20T05:32:20.925Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T05:32:20.925Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T05:32:20.925Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T05:32:20.925Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T05:32:20.925Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T05:32:20.925Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T05:32:20.925Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T05:32:20.925Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T05:32:20.926Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T05:32:20.926Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T05:32:20.926Z] 
Data Files Check:
[2026-01-20T05:32:20.927Z] .github/data/new_jobs.json: ✅ Exists (10 items, 199663 bytes)
[2026-01-20T05:32:20.937Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1530271 bytes)
[2026-01-20T05:32:20.937Z] 
========================================
[2026-01-20T05:32:20.937Z] Starting Enhanced Discord Bot...
[2026-01-20T05:32:20.937Z] ========================================
[2026-01-20T05:32:21.476Z] [BOT] ✅ Loaded V2 database: 2769 jobs
[2026-01-20T05:32:22.096Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T05:32:22.096Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T05:32:22.096Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T05:32:22.212Z] [BOT] ✅ Loaded pending queue: 2810 total (2790 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T05:32:22.215Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T05:32:22.215Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T05:32:22.215Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T05:32:22.216Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-20T05:32:22.217Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T05:32:22.219Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T05:32:22.221Z] [BOT] 📌 Posting 2 jobs to #JID_fb739488
[2026-01-20T05:32:22.221Z] [BOT] 📍 [ROUTING] "Software Engineer, Product Backend (2-8 YOE)" @ airtable
[2026-01-20T05:32:22.221Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T05:32:22.226Z] [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T05:32:22.490Z] [BOT] ✅ Posted message: Software Engineer, Product Backend (2-8 YOE) @ airtable in #JID_fb739488
[2026-01-20T05:32:22.490Z] [BOT] ✅ Industry: Software Engineer, Product Backend (2-8 YOE) @ airtable
[2026-01-20T05:32:22.491Z] [BOT] 💾 Added channel posting: Software Engineer, Product Backend (2-8 YOE) @ airtable → category channel (1 total channels)
[2026-01-20T05:32:22.491Z] [BOT] 💾 BEFORE ARCHIVING: 2770 jobs in database
[2026-01-20T05:32:22.493Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T05:32:22.498Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-20T05:32:22.498Z] [BOT] ✅ Archiving complete: 10 archived, 2760 active
[2026-01-20T05:32:22.513Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:24.015Z] [BOT] 💾 Marked as posted: Software Engineer, Product Backend (2-8 YOE) @ airtable (instance #1)
[2026-01-20T05:32:24.015Z] [BOT] 💾 BEFORE ARCHIVING: 2761 jobs in database
[2026-01-20T05:32:24.017Z] [BOT] ✅ No jobs to archive (all 2761 jobs within 7-day window)
[2026-01-20T05:32:24.034Z] [BOT] 💾 Saved posted_jobs.json: 2761 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:24.034Z] [BOT] 📍 [ROUTING] "Software Engineer, Product Backend (8+ YOE)" @ airtable
[2026-01-20T05:32:24.034Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T05:32:24.194Z] [BOT] ✅ Posted message: Software Engineer, Product Backend (8+ YOE) @ airtable in #JID_fb739488
[2026-01-20T05:32:24.195Z] [BOT] ✅ Industry: Software Engineer, Product Backend (8+ YOE) @ airtable
[2026-01-20T05:32:24.195Z] [BOT] 💾 Added channel posting: Software Engineer, Product Backend (8+ YOE) @ airtable → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2762 jobs in database
[2026-01-20T05:32:24.197Z] [BOT] ✅ No jobs to archive (all 2762 jobs within 7-day window)
[2026-01-20T05:32:24.216Z] [BOT] 💾 Saved posted_jobs.json: 2762 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:25.717Z] [BOT] 💾 Marked as posted: Software Engineer, Product Backend (8+ YOE) @ airtable (instance #1)
[2026-01-20T05:32:25.717Z] [BOT] 💾 BEFORE ARCHIVING: 2763 jobs in database
[2026-01-20T05:32:25.719Z] [BOT] ✅ No jobs to archive (all 2763 jobs within 7-day window)
[2026-01-20T05:32:25.737Z] [BOT] 💾 Saved posted_jobs.json: 2763 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:28.737Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-20T05:32:28.737Z] [BOT] 📍 [ROUTING] "Business Value Manager - Enterprise East" @ datadog
   Category: FINANCE (matched: "finance")
[2026-01-20T05:32:28.738Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-20T05:32:28.965Z] [BOT] ✅ Posted message: Business Value Manager - Enterprise East @ datadog in #finance-jobs
  ✅ Industry: Business Value Manager - Enterprise East @ datadog
[2026-01-20T05:32:28.965Z] [BOT] 💾 Added channel posting: Business Value Manager - Enterprise East @ datadog → category channel (1 total channels)
[2026-01-20T05:32:28.965Z] [BOT] 💾 BEFORE ARCHIVING: 2764 jobs in database
[2026-01-20T05:32:28.967Z] [BOT] ✅ No jobs to archive (all 2764 jobs within 7-day window)
[2026-01-20T05:32:28.985Z] [BOT] 💾 Saved posted_jobs.json: 2764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:30.764Z] [BOT] ✅ Posted message: Business Value Manager - Enterprise East @ datadog in #JID_98d4f0de
[2026-01-20T05:32:30.764Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T05:32:30.765Z] [BOT] 💾 Added channel posting: Business Value Manager - Enterprise East @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2764 jobs in database
[2026-01-20T05:32:30.767Z] [BOT] ✅ No jobs to archive (all 2764 jobs within 7-day window)
[2026-01-20T05:32:30.787Z] [BOT] 💾 Saved posted_jobs.json: 2764 active jobs
[2026-01-20T05:32:30.787Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:32.289Z] [BOT] 💾 Marked as posted: Business Value Manager - Enterprise East @ datadog (instance #1)
[2026-01-20T05:32:32.289Z] [BOT] 💾 BEFORE ARCHIVING: 2765 jobs in database
[2026-01-20T05:32:32.291Z] [BOT] ✅ No jobs to archive (all 2765 jobs within 7-day window)
[2026-01-20T05:32:32.309Z] [BOT] 💾 Saved posted_jobs.json: 2765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:32.310Z] [BOT] 📍 [ROUTING] "Technical Accounting" @ anthropic
[2026-01-20T05:32:32.310Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T05:32:33.950Z] [BOT] ✅ Posted message: Technical Accounting @ anthropic in #finance-jobs
[2026-01-20T05:32:33.950Z] [BOT] ✅ Industry: Technical Accounting @ anthropic
[2026-01-20T05:32:33.950Z] [BOT] 💾 Added channel posting: Technical Accounting @ anthropic → category channel (1 total channels)
[2026-01-20T05:32:33.951Z] [BOT] 💾 BEFORE ARCHIVING: 2766 jobs in database
[2026-01-20T05:32:33.952Z] [BOT] ✅ No jobs to archive (all 2766 jobs within 7-day window)
[2026-01-20T05:32:33.971Z] [BOT] 💾 Saved posted_jobs.json: 2766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:35.473Z] [BOT] 💾 Marked as posted: Technical Accounting @ anthropic (instance #1)
[2026-01-20T05:32:35.473Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-20T05:32:35.475Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-20T05:32:35.491Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:38.491Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-20T05:32:38.492Z] [BOT] 📍 [ROUTING] "ML Infrastructure Engineer, Safeguards" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-20T05:32:38.492Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T05:32:38.721Z] [BOT] ✅ Posted message: ML Infrastructure Engineer, Safeguards @ anthropic in #ai-jobs
  ✅ Industry: ML Infrastructure Engineer, Safeguards @ anthropic
[2026-01-20T05:32:38.722Z] [BOT] 💾 Added channel posting: ML Infrastructure Engineer, Safeguards @ anthropic → category channel (1 total channels)
[2026-01-20T05:32:38.722Z] [BOT] 💾 BEFORE ARCHIVING: 2768 jobs in database
[2026-01-20T05:32:38.724Z] [BOT] ✅ No jobs to archive (all 2768 jobs within 7-day window)
[2026-01-20T05:32:38.740Z] [BOT] 💾 Saved posted_jobs.json: 2768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:40.242Z] [BOT] 💾 Marked as posted: ML Infrastructure Engineer, Safeguards @ anthropic (instance #1)
[2026-01-20T05:32:40.243Z] [BOT] 💾 BEFORE ARCHIVING: 2769 jobs in database
[2026-01-20T05:32:40.244Z] [BOT] ✅ No jobs to archive (all 2769 jobs within 7-day window)
[2026-01-20T05:32:40.262Z] [BOT] 💾 Saved posted_jobs.json: 2769 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:40.263Z] [BOT] 📍 [ROUTING] "Software Engineer, Labs" @ anthropic
[2026-01-20T05:32:40.263Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T05:32:40.500Z] [BOT] ✅ Posted message: Software Engineer, Labs @ anthropic in #ai-jobs
[2026-01-20T05:32:40.500Z] [BOT] ✅ Industry: Software Engineer, Labs @ anthropic
[2026-01-20T05:32:40.501Z] [BOT] 💾 Added channel posting: Software Engineer, Labs @ anthropic → category channel (1 total channels)
[2026-01-20T05:32:40.501Z] [BOT] 💾 BEFORE ARCHIVING: 2770 jobs in database
[2026-01-20T05:32:40.503Z] [BOT] ✅ No jobs to archive (all 2770 jobs within 7-day window)
[2026-01-20T05:32:40.519Z] [BOT] 💾 Saved posted_jobs.json: 2770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:42.019Z] [BOT] 💾 Marked as posted: Software Engineer, Labs @ anthropic (instance #1)
[2026-01-20T05:32:42.019Z] [BOT] 💾 BEFORE ARCHIVING: 2771 jobs in database
[2026-01-20T05:32:42.021Z] [BOT] ✅ No jobs to archive (all 2771 jobs within 7-day window)
[2026-01-20T05:32:42.037Z] [BOT] 💾 Saved posted_jobs.json: 2771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:42.038Z] [BOT] 📍 [ROUTING] "AI Research Engineer – Datadog AI Research (DAIR)" @ datadog
[2026-01-20T05:32:42.038Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T05:32:42.205Z] [BOT] ✅ Posted message: AI Research Engineer – Datadog AI Research (DAIR) @ datadog in #ai-jobs
  ✅ Industry: AI Research Engineer – Datadog AI Research (DAIR) @ datadog
[2026-01-20T05:32:42.206Z] [BOT] 💾 Added channel posting: AI Research Engineer – Datadog AI Research (DAIR) @ datadog → category channel (1 total channels)
[2026-01-20T05:32:42.206Z] [BOT] 💾 BEFORE ARCHIVING: 2772 jobs in database
[2026-01-20T05:32:42.208Z] [BOT] ✅ No jobs to archive (all 2772 jobs within 7-day window)
[2026-01-20T05:32:42.225Z] [BOT] 💾 Saved posted_jobs.json: 2772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:43.931Z] [BOT] ✅ Posted message: AI Research Engineer – Datadog AI Research (DAIR) @ datadog in #JID_98d4f0de
[2026-01-20T05:32:43.931Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T05:32:43.932Z] [BOT] 💾 Added channel posting: AI Research Engineer – Datadog AI Research (DAIR) @ datadog → location channel (2 total channels)
[2026-01-20T05:32:43.932Z] [BOT] 💾 BEFORE ARCHIVING: 2772 jobs in database
[2026-01-20T05:32:43.934Z] [BOT] ✅ No jobs to archive (all 2772 jobs within 7-day window)
[2026-01-20T05:32:43.949Z] [BOT] 💾 Saved posted_jobs.json: 2772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:45.450Z] [BOT] 💾 Marked as posted: AI Research Engineer – Datadog AI Research (DAIR) @ datadog (instance #1)
[2026-01-20T05:32:45.450Z] [BOT] 💾 BEFORE ARCHIVING: 2773 jobs in database
[2026-01-20T05:32:45.452Z] [BOT] ✅ No jobs to archive (all 2773 jobs within 7-day window)
[2026-01-20T05:32:45.469Z] [BOT] 💾 Saved posted_jobs.json: 2773 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:48.469Z] [BOT] 📌 Posting 2 jobs to #tech-jobs
[2026-01-20T05:32:48.469Z] [BOT] 📍 [ROUTING] "Sales Engineer, Startups " @ vercel
   Category: TECH (default)
[2026-01-20T05:32:48.470Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T05:32:48.669Z] [BOT] ✅ Posted message: Sales Engineer, Startups  @ vercel in #tech-jobs
  ✅ Industry: Sales Engineer, Startups  @ vercel
[2026-01-20T05:32:48.670Z] [BOT] 💾 Added channel posting: Sales Engineer, Startups  @ vercel → category channel (1 total channels)
[2026-01-20T05:32:48.670Z] [BOT] 💾 BEFORE ARCHIVING: 2774 jobs in database
[2026-01-20T05:32:48.672Z] [BOT] ✅ No jobs to archive (all 2774 jobs within 7-day window)
[2026-01-20T05:32:48.690Z] [BOT] 💾 Saved posted_jobs.json: 2774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:50.192Z] [BOT] 💾 Marked as posted: Sales Engineer, Startups  @ vercel (instance #1)
[2026-01-20T05:32:50.192Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-20T05:32:50.194Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-20T05:32:50.209Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:50.209Z] [BOT] 📍 [ROUTING] "Candidate Experience Coordinator (12-month Contract)" @ brex
[2026-01-20T05:32:50.210Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T05:32:50.383Z] [BOT] ✅ Posted message: Candidate Experience Coordinator (12-month Contract) @ brex in #tech-jobs
  ✅ Industry: Candidate Experience Coordinator (12-month Contract) @ brex
[2026-01-20T05:32:50.384Z] [BOT] 💾 Added channel posting: Candidate Experience Coordinator (12-month Contract) @ brex → category channel (1 total channels)
[2026-01-20T05:32:50.384Z] [BOT] 💾 BEFORE ARCHIVING: 2776 jobs in database
[2026-01-20T05:32:50.386Z] [BOT] ✅ No jobs to archive (all 2776 jobs within 7-day window)
[2026-01-20T05:32:50.404Z] [BOT] 💾 Saved posted_jobs.json: 2776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:51.903Z] [BOT] 💾 Marked as posted: Candidate Experience Coordinator (12-month Contract) @ brex (instance #1)
[2026-01-20T05:32:51.903Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-20T05:32:51.905Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-20T05:32:51.924Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:32:54.925Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-20T05:32:54.925Z] [BOT] ⏭️  Skipping duplicate: JID_c16b5fb8 (posted within 7 days)
[2026-01-20T05:32:54.926Z] [BOT] ⏭️  Skipping duplicate: JID_ebbf5c6f (posted within 7 days)
[2026-01-20T05:32:54.926Z] [BOT] ⏭️  Skipping duplicate: JID_f786896a (posted within 7 days)
[2026-01-20T05:32:54.926Z] [BOT] ⏭️  Skipping duplicate: JID_6ef7d85e (posted within 7 days)
[2026-01-20T05:32:54.926Z] [BOT] ⏭️  Skipping duplicate: JID_c700fd53 (posted within 7 days)
[2026-01-20T05:32:54.926Z] [BOT] ⏭️  Skipping duplicate: JID_b09edb4f (posted within 7 days)
[2026-01-20T05:32:54.926Z] [BOT] ⏭️  Skipping duplicate: JID_0fbdd3f0 (posted within 7 days)
[2026-01-20T05:32:54.926Z] [BOT] ⏭️  Skipping duplicate: JID_1f2e2955 (posted within 7 days)
[2026-01-20T05:32:54.927Z] [BOT] ⏭️  Skipping duplicate: JID_dcc2a209 (posted within 7 days)
[2026-01-20T05:32:55.031Z] [BOT] ✅ Loaded pending queue: 2810 total (2790 pending, 20 enriched, 0 posted)
[2026-01-20T05:32:55.223Z] [BOT] ✅ Saved pending queue: 2810 total (2790 pending, 11 enriched, 9 posted)
[2026-01-20T05:32:55.223Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T05:32:55.292Z] [BOT] 📂 Loaded 5292 existing routing entries
[2026-01-20T05:32:55.367Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 5301
[2026-01-20T05:32:55.367Z] [BOT] Timestamp: 2026-01-20T05:32:55.345Z
[2026-01-20T05:32:55.368Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T05:32:55.368Z] [BOT] Total attempts: 11
   Successful: 11
   Failed: 0
   Skipped: 0
[2026-01-20T05:32:55.368Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 5
   Top channels:
     1. #ai-jobs: 3 posts
     2. #JID_fb739488: 2 posts
     3. #finance-jobs: 2 posts
     4. #JID_98d4f0de: 2 posts
     5. #tech-jobs: 2 posts
[2026-01-20T05:32:55.368Z] [BOT] [STATS] Channel stats saved
[2026-01-20T05:32:57.394Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
- [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*