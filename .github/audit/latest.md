# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T16:33:53.919Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T16:33:13.934Z] ========================================
[2026-01-21T16:33:13.936Z] Discord Bot Execution Log
[2026-01-21T16:33:13.936Z] Environment: GitHub Actions
[2026-01-21T16:33:13.936Z] Node Version: v20.19.6
[2026-01-21T16:33:13.936Z] ========================================
[2026-01-21T16:33:13.936Z] Environment Variables Check:
[2026-01-21T16:33:13.936Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T16:33:13.936Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T16:33:13.937Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T16:33:13.937Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T16:33:13.937Z] 
Multi-Channel Configuration:
[2026-01-21T16:33:13.937Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T16:33:13.937Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T16:33:13.937Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T16:33:13.937Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T16:33:13.937Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T16:33:13.937Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T16:33:13.937Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T16:33:13.937Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T16:33:13.937Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T16:33:13.938Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T16:33:13.938Z] 
Data Files Check:
[2026-01-21T16:33:13.939Z] .github/data/new_jobs.json: ✅ Exists (10 items, 139370 bytes)
[2026-01-21T16:33:13.952Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2094119 bytes)
[2026-01-21T16:33:13.952Z] 
========================================
[2026-01-21T16:33:13.952Z] Starting Enhanced Discord Bot...
[2026-01-21T16:33:13.952Z] ========================================
[2026-01-21T16:33:14.486Z] [BOT] ✅ Loaded V2 database: 3651 jobs
[2026-01-21T16:33:15.029Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T16:33:15.029Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T16:33:15.030Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T16:33:15.147Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Startups Account Executive at brex
[2026-01-21T16:33:15.151Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T16:33:15.152Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T16:33:15.152Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T16:33:15.153Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-21T16:33:15.153Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Startups Account Executive @ brex: new york, new york, united states, san francisco, california, united states
   - Startups Ambassador @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-21T16:33:15.153Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T16:33:15.157Z] [BOT] 📌 Posting 4 jobs to #finance-jobs
[2026-01-21T16:33:15.158Z] [BOT] 📍 [ROUTING] "Startups Account Executive" @ brex
[2026-01-21T16:33:15.158Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T16:33:15.175Z] [BOT ERROR] (node:2945) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T16:33:15.415Z] [BOT] ✅ Posted message: Startups Account Executive @ brex in #finance-jobs
  ✅ Industry: Startups Account Executive @ brex
[2026-01-21T16:33:15.416Z] [BOT] 💾 Added channel posting: Startups Account Executive @ brex → category channel (1 total channels)
[2026-01-21T16:33:15.416Z] [BOT] 💾 BEFORE ARCHIVING: 3652 jobs in database
[2026-01-21T16:33:15.419Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T16:33:15.424Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-21T16:33:15.424Z] [BOT] ✅ Archiving complete: 1 archived, 3651 active
[2026-01-21T16:33:15.449Z] [BOT] 💾 Saved posted_jobs.json: 3651 active jobs
[2026-01-21T16:33:15.449Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:17.174Z] [BOT] ✅ Posted message: Startups Account Executive @ brex in #JID_98d4f0de
[2026-01-21T16:33:17.174Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T16:33:17.175Z] [BOT] 💾 Added channel posting: Startups Account Executive @ brex → location channel (2 total channels)
[2026-01-21T16:33:17.175Z] [BOT] 💾 BEFORE ARCHIVING: 3651 jobs in database
[2026-01-21T16:33:17.177Z] [BOT] ✅ No jobs to archive (all 3651 jobs within 7-day window)
[2026-01-21T16:33:17.198Z] [BOT] 💾 Saved posted_jobs.json: 3651 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:18.699Z] [BOT] 💾 Marked as posted: Startups Account Executive @ brex (instance #1)
[2026-01-21T16:33:18.699Z] [BOT] 💾 BEFORE ARCHIVING: 3652 jobs in database
[2026-01-21T16:33:18.702Z] [BOT] ✅ No jobs to archive (all 3652 jobs within 7-day window)
[2026-01-21T16:33:18.725Z] [BOT] 💾 Saved posted_jobs.json: 3652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:18.726Z] [BOT] 💾 Marked as posted: Startups Account Executive @ brex (instance #1)
[2026-01-21T16:33:18.726Z] [BOT] 💾 BEFORE ARCHIVING: 3653 jobs in database
[2026-01-21T16:33:18.728Z] [BOT] ✅ No jobs to archive (all 3653 jobs within 7-day window)
[2026-01-21T16:33:18.751Z] [BOT] 💾 Saved posted_jobs.json: 3653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:18.751Z] [BOT] 📍 [ROUTING] "Startups Ambassador" @ brex
[2026-01-21T16:33:18.751Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T16:33:18.931Z] [BOT] ✅ Posted message: Startups Ambassador @ brex in #finance-jobs
  ✅ Industry: Startups Ambassador @ brex
[2026-01-21T16:33:18.932Z] [BOT] 💾 Added channel posting: Startups Ambassador @ brex → category channel (1 total channels)
[2026-01-21T16:33:18.932Z] [BOT] 💾 BEFORE ARCHIVING: 3654 jobs in database
[2026-01-21T16:33:18.935Z] [BOT] ✅ No jobs to archive (all 3654 jobs within 7-day window)
[2026-01-21T16:33:18.955Z] [BOT] 💾 Saved posted_jobs.json: 3654 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:20.457Z] [BOT] 💾 Marked as posted: Startups Ambassador @ brex (instance #1)
[2026-01-21T16:33:20.457Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-21T16:33:20.459Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-21T16:33:20.479Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:20.480Z] [BOT] 💾 Marked as posted: Startups Ambassador @ brex (instance #1)
[2026-01-21T16:33:20.480Z] [BOT] 💾 BEFORE ARCHIVING: 3656 jobs in database
[2026-01-21T16:33:20.482Z] [BOT] ✅ No jobs to archive (all 3656 jobs within 7-day window)
[2026-01-21T16:33:20.503Z] [BOT] 💾 Saved posted_jobs.json: 3656 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:20.503Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Partnerships & Alliances" @ anthropic
[2026-01-21T16:33:20.503Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T16:33:20.705Z] [BOT] ✅ Posted message: Commercial Counsel, Partnerships & Alliances @ anthropic in #finance-jobs
[2026-01-21T16:33:20.705Z] [BOT] ✅ Industry: Commercial Counsel, Partnerships & Alliances @ anthropic
[2026-01-21T16:33:20.705Z] [BOT] 💾 Added channel posting: Commercial Counsel, Partnerships & Alliances @ anthropic → category channel (1 total channels)
[2026-01-21T16:33:20.706Z] [BOT] 💾 BEFORE ARCHIVING: 3657 jobs in database
[2026-01-21T16:33:20.708Z] [BOT] ✅ No jobs to archive (all 3657 jobs within 7-day window)
[2026-01-21T16:33:20.728Z] [BOT] 💾 Saved posted_jobs.json: 3657 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:22.230Z] [BOT] 💾 Marked as posted: Commercial Counsel, Partnerships & Alliances @ anthropic (instance #1)
[2026-01-21T16:33:22.230Z] [BOT] 💾 BEFORE ARCHIVING: 3658 jobs in database
[2026-01-21T16:33:22.232Z] [BOT] ✅ No jobs to archive (all 3658 jobs within 7-day window)
[2026-01-21T16:33:22.253Z] [BOT] 💾 Saved posted_jobs.json: 3658 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:22.253Z] [BOT] 📍 [ROUTING] "Senior Manager, Tax Operations, Provision & Compliance" @ anthropic
[2026-01-21T16:33:22.254Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T16:33:22.441Z] [BOT] ✅ Posted message: Senior Manager, Tax Operations, Provision & Compliance @ anthropic in #finance-jobs
[2026-01-21T16:33:22.441Z] [BOT] ✅ Industry: Senior Manager, Tax Operations, Provision & Compliance @ anthropic
[2026-01-21T16:33:22.442Z] [BOT] 💾 Added channel posting: Senior Manager, Tax Operations, Provision & Compliance @ anthropic → category channel (1 total channels)
[2026-01-21T16:33:22.442Z] [BOT] 💾 BEFORE ARCHIVING: 3659 jobs in database
[2026-01-21T16:33:22.444Z] [BOT] ✅ No jobs to archive (all 3659 jobs within 7-day window)
[2026-01-21T16:33:22.464Z] [BOT] 💾 Saved posted_jobs.json: 3659 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:23.966Z] [BOT] 💾 Marked as posted: Senior Manager, Tax Operations, Provision & Compliance @ anthropic (instance #1)
[2026-01-21T16:33:23.966Z] [BOT] 💾 BEFORE ARCHIVING: 3660 jobs in database
[2026-01-21T16:33:23.969Z] [BOT] ✅ No jobs to archive (all 3660 jobs within 7-day window)
[2026-01-21T16:33:23.995Z] [BOT] 💾 Saved posted_jobs.json: 3660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:26.996Z] [BOT] 📌 Posting 4 jobs to #tech-jobs
[2026-01-21T16:33:26.996Z] [BOT] 📍 [ROUTING] "Support Specialist I (Remote)" @ brex
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T16:33:27.322Z] [BOT] ✅ Posted message: Support Specialist I (Remote) @ brex in #tech-jobs
[2026-01-21T16:33:27.322Z] [BOT] ✅ Industry: Support Specialist I (Remote) @ brex
[2026-01-21T16:33:27.323Z] [BOT] 💾 Added channel posting: Support Specialist I (Remote) @ brex → category channel (1 total channels)
[2026-01-21T16:33:27.323Z] [BOT] 💾 BEFORE ARCHIVING: 3661 jobs in database
[2026-01-21T16:33:27.325Z] [BOT] ✅ No jobs to archive (all 3661 jobs within 7-day window)
[2026-01-21T16:33:27.350Z] [BOT] 💾 Saved posted_jobs.json: 3661 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:29.080Z] [BOT] ✅ Posted message: Support Specialist I (Remote) @ brex in #JID_ead674af
[2026-01-21T16:33:29.080Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T16:33:29.081Z] [BOT] 💾 Added channel posting: Support Specialist I (Remote) @ brex → location channel (2 total channels)
[2026-01-21T16:33:29.081Z] [BOT] 💾 BEFORE ARCHIVING: 3661 jobs in database
[2026-01-21T16:33:29.083Z] [BOT] ✅ No jobs to archive (all 3661 jobs within 7-day window)
[2026-01-21T16:33:29.109Z] [BOT] 💾 Saved posted_jobs.json: 3661 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:30.611Z] [BOT] 💾 Marked as posted: Support Specialist I (Remote) @ brex (instance #1)
[2026-01-21T16:33:30.611Z] [BOT] 💾 BEFORE ARCHIVING: 3662 jobs in database
[2026-01-21T16:33:30.614Z] [BOT] ✅ No jobs to archive (all 3662 jobs within 7-day window)
[2026-01-21T16:33:30.635Z] [BOT] 💾 Saved posted_jobs.json: 3662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:30.636Z] [BOT] 📍 [ROUTING] "Policy Communications Manager" @ anthropic
   Category: TECH (default)
[2026-01-21T16:33:30.636Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T16:33:30.988Z] [BOT] ✅ Posted message: Policy Communications Manager @ anthropic in #tech-jobs
  ✅ Industry: Policy Communications Manager @ anthropic
[2026-01-21T16:33:30.989Z] [BOT] 💾 Added channel posting: Policy Communications Manager @ anthropic → category channel (1 total channels)
[2026-01-21T16:33:30.989Z] [BOT] 💾 BEFORE ARCHIVING: 3663 jobs in database
[2026-01-21T16:33:30.992Z] [BOT] ✅ No jobs to archive (all 3663 jobs within 7-day window)
[2026-01-21T16:33:31.015Z] [BOT] 💾 Saved posted_jobs.json: 3663 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:32.517Z] [BOT] 💾 Marked as posted: Policy Communications Manager @ anthropic (instance #1)
[2026-01-21T16:33:32.517Z] [BOT] 💾 BEFORE ARCHIVING: 3664 jobs in database
[2026-01-21T16:33:32.519Z] [BOT] ✅ No jobs to archive (all 3664 jobs within 7-day window)
[2026-01-21T16:33:32.541Z] [BOT] 💾 Saved posted_jobs.json: 3664 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:32.541Z] [BOT] 📍 [ROUTING] "Software Engineer, Android" @ anthropic
[2026-01-21T16:33:32.541Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T16:33:32.806Z] [BOT] ✅ Posted message: Software Engineer, Android @ anthropic in #tech-jobs
  ✅ Industry: Software Engineer, Android @ anthropic
[2026-01-21T16:33:32.807Z] [BOT] 💾 Added channel posting: Software Engineer, Android @ anthropic → category channel (1 total channels)
[2026-01-21T16:33:32.807Z] [BOT] 💾 BEFORE ARCHIVING: 3665 jobs in database
[2026-01-21T16:33:32.809Z] [BOT] ✅ No jobs to archive (all 3665 jobs within 7-day window)
[2026-01-21T16:33:32.834Z] [BOT] 💾 Saved posted_jobs.json: 3665 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:34.336Z] [BOT] 💾 Marked as posted: Software Engineer, Android @ anthropic (instance #1)
[2026-01-21T16:33:34.336Z] [BOT] 💾 BEFORE ARCHIVING: 3666 jobs in database
[2026-01-21T16:33:34.338Z] [BOT] ✅ No jobs to archive (all 3666 jobs within 7-day window)
[2026-01-21T16:33:34.360Z] [BOT] 💾 Saved posted_jobs.json: 3666 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:34.360Z] [BOT] 📍 [ROUTING] "Software Engineer, iOS" @ anthropic
[2026-01-21T16:33:34.360Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T16:33:34.602Z] [BOT] ✅ Posted message: Software Engineer, iOS @ anthropic in #tech-jobs
  ✅ Industry: Software Engineer, iOS @ anthropic
[2026-01-21T16:33:34.603Z] [BOT] 💾 Added channel posting: Software Engineer, iOS @ anthropic → category channel (1 total channels)
[2026-01-21T16:33:34.603Z] [BOT] 💾 BEFORE ARCHIVING: 3667 jobs in database
[2026-01-21T16:33:34.605Z] [BOT] ✅ No jobs to archive (all 3667 jobs within 7-day window)
[2026-01-21T16:33:34.626Z] [BOT] 💾 Saved posted_jobs.json: 3667 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:36.128Z] [BOT] 💾 Marked as posted: Software Engineer, iOS @ anthropic (instance #1)
[2026-01-21T16:33:36.128Z] [BOT] 💾 BEFORE ARCHIVING: 3668 jobs in database
[2026-01-21T16:33:36.130Z] [BOT] ✅ No jobs to archive (all 3668 jobs within 7-day window)
[2026-01-21T16:33:36.152Z] [BOT] 💾 Saved posted_jobs.json: 3668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:39.153Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T16:33:39.154Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst" @ ORG_f931030b
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-21T16:33:39.154Z] [BOT] Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T16:33:39.345Z] [BOT] ✅ Posted message: Business Intelligence Analyst @ ORG_f931030b in #JID_fb739488
  ✅ Industry: Business Intelligence Analyst @ ORG_f931030b
[2026-01-21T16:33:39.346Z] [BOT] 💾 Added channel posting: Business Intelligence Analyst @ ORG_f931030b → category channel (1 total channels)
[2026-01-21T16:33:39.346Z] [BOT] 💾 BEFORE ARCHIVING: 3669 jobs in database
[2026-01-21T16:33:39.348Z] [BOT] ✅ No jobs to archive (all 3669 jobs within 7-day window)
[2026-01-21T16:33:39.369Z] [BOT] 💾 Saved posted_jobs.json: 3669 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:41.132Z] [BOT] ✅ Posted message: Business Intelligence Analyst @ ORG_f931030b in #JID_ead674af
[2026-01-21T16:33:41.132Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T16:33:41.133Z] [BOT] 💾 Added channel posting: Business Intelligence Analyst @ ORG_f931030b → location channel (2 total channels)
[2026-01-21T16:33:41.133Z] [BOT] 💾 BEFORE ARCHIVING: 3669 jobs in database
[2026-01-21T16:33:41.135Z] [BOT] ✅ No jobs to archive (all 3669 jobs within 7-day window)
[2026-01-21T16:33:41.157Z] [BOT] 💾 Saved posted_jobs.json: 3669 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:42.658Z] [BOT] 💾 Marked as posted: Business Intelligence Analyst @ ORG_f931030b (instance #1)
[2026-01-21T16:33:42.659Z] [BOT] 💾 BEFORE ARCHIVING: 3670 jobs in database
[2026-01-21T16:33:42.661Z] [BOT] ✅ No jobs to archive (all 3670 jobs within 7-day window)
[2026-01-21T16:33:42.682Z] [BOT] 💾 Saved posted_jobs.json: 3670 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:45.683Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-21T16:33:45.684Z] [BOT] 📍 [ROUTING] "Research Engineer – Cybersecurity RL" @ anthropic
[2026-01-21T16:33:45.684Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T16:33:46.011Z] [BOT] ✅ Posted message: Research Engineer – Cybersecurity RL @ anthropic in #ai-jobs
  ✅ Industry: Research Engineer – Cybersecurity RL @ anthropic
[2026-01-21T16:33:46.012Z] [BOT] 💾 Added channel posting: Research Engineer – Cybersecurity RL @ anthropic → category channel (1 total channels)
[2026-01-21T16:33:46.012Z] [BOT] 💾 BEFORE ARCHIVING: 3671 jobs in database
[2026-01-21T16:33:46.015Z] [BOT] ✅ No jobs to archive (all 3671 jobs within 7-day window)
[2026-01-21T16:33:46.038Z] [BOT] 💾 Saved posted_jobs.json: 3671 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:47.539Z] [BOT] 💾 Marked as posted: Research Engineer – Cybersecurity RL @ anthropic (instance #1)
[2026-01-21T16:33:47.539Z] [BOT] 💾 BEFORE ARCHIVING: 3672 jobs in database
[2026-01-21T16:33:47.541Z] [BOT] ✅ No jobs to archive (all 3672 jobs within 7-day window)
[2026-01-21T16:33:47.564Z] [BOT] 💾 Saved posted_jobs.json: 3672 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:33:50.564Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T16:33:50.565Z] [BOT] ⏭️  Skipping duplicate: JID_bb4f8bca (posted within 7 days)
[2026-01-21T16:33:50.565Z] [BOT] ⏭️  Skipping duplicate: JID_9259cd44 (posted within 7 days)
[2026-01-21T16:33:50.565Z] [BOT] ⏭️  Skipping duplicate: JID_89b48b67 (posted within 7 days)
[2026-01-21T16:33:50.566Z] [BOT] ⏭️  Skipping duplicate: JID_20575f82-analyst_r233902 (posted within 7 days)
[2026-01-21T16:33:50.566Z] [BOT] ⏭️  Skipping duplicate: JID_979f27ac (posted within 7 days)
[2026-01-21T16:33:50.566Z] [BOT] ⏭️  Skipping duplicate: JID_cdbf504d (posted within 7 days)
[2026-01-21T16:33:50.566Z] [BOT] ⏭️  Skipping duplicate: JID_3008de4b (posted within 7 days)
[2026-01-21T16:33:50.566Z] [BOT] ⏭️  Skipping duplicate: JID_52319a13 (posted within 7 days)
[2026-01-21T16:33:50.567Z] [BOT] ⏭️  Skipping duplicate: JID_18e6eb79 (posted within 7 days)
[2026-01-21T16:33:50.567Z] [BOT] ⏭️  Skipping duplicate: JID_5f23f2e1 (posted within 7 days)
[2026-01-21T16:33:50.673Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[2026-01-21T16:33:50.867Z] [BOT] ✅ Saved pending queue: 2771 total (2751 pending, 10 enriched, 10 posted)
[2026-01-21T16:33:50.867Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T16:33:50.932Z] [BOT] 📂 Loaded 5981 existing routing entries
[2026-01-21T16:33:51.011Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T16:33:51.011Z] [BOT] Total entries: 5991
   Timestamp: 2026-01-21T16:33:50.984Z
[2026-01-21T16:33:51.012Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T16:33:51.012Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-21T16:33:51.012Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 6
   Top channels:
[2026-01-21T16:33:51.012Z] [BOT] 1. #finance-jobs: 4 posts
     2. #tech-jobs: 4 posts
     3. #JID_ead674af: 2 posts
     4. #JID_98d4f0de: 1 posts
     5. #JID_fb739488: 1 posts
[2026-01-21T16:33:51.013Z] [BOT] [STATS] Channel stats saved
[2026-01-21T16:33:53.039Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2945) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*