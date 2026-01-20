# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T20:53:41.139Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T20:53:03.277Z] ========================================
[2026-01-20T20:53:03.279Z] Discord Bot Execution Log
[2026-01-20T20:53:03.279Z] Environment: GitHub Actions
[2026-01-20T20:53:03.279Z] Node Version: v20.19.6
[2026-01-20T20:53:03.279Z] ========================================
[2026-01-20T20:53:03.279Z] Environment Variables Check:
[2026-01-20T20:53:03.279Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T20:53:03.279Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T20:53:03.279Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T20:53:03.279Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T20:53:03.279Z] 
Multi-Channel Configuration:
[2026-01-20T20:53:03.280Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T20:53:03.280Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T20:53:03.280Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T20:53:03.280Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T20:53:03.280Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T20:53:03.280Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T20:53:03.280Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T20:53:03.280Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T20:53:03.280Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T20:53:03.280Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T20:53:03.280Z] 
Data Files Check:
[2026-01-20T20:53:03.281Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167952 bytes)
[2026-01-20T20:53:03.292Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1638678 bytes)
[2026-01-20T20:53:03.292Z] 
========================================
[2026-01-20T20:53:03.292Z] Starting Enhanced Discord Bot...
[2026-01-20T20:53:03.292Z] ========================================
[2026-01-20T20:53:03.814Z] [BOT] ✅ Loaded V2 database: 2930 jobs
[2026-01-20T20:53:04.674Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T20:53:04.674Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T20:53:04.674Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T20:53:04.795Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Sales Strategy Manager, New Product at samsara
[2026-01-20T20:53:04.797Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T20:53:04.798Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-20T20:53:04.904Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[2026-01-20T20:53:05.070Z] [BOT] ✅ Saved pending queue: 2766 total (2747 pending, 19 enriched, 0 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-20T20:53:05.071Z] [BOT] 📋 After blacklist filter: 19 jobs (1 blacklisted)
📋 After data quality filter: 19 jobs (0 invalid)
[2026-01-20T20:53:05.071Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-20T20:53:05.072Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Sales Recruiter (12-month contract) @ brex: salt lake city, utah, united states, san francisco, california, united states, new york, new york, united states
   - iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit: chicago, los angeles, san francisco
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T20:53:05.076Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-20T20:53:05.076Z] [BOT] 📍 [ROUTING] "Senior Sales Strategy Manager, New Product" @ samsara
[2026-01-20T20:53:05.076Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T20:53:05.081Z] [BOT ERROR] (node:2482) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T20:53:05.406Z] [BOT] ✅ Posted message: Senior Sales Strategy Manager, New Product @ samsara in #finance-jobs
[2026-01-20T20:53:05.406Z] [BOT] ✅ Industry: Senior Sales Strategy Manager, New Product @ samsara
[2026-01-20T20:53:05.407Z] [BOT] 💾 Added channel posting: Senior Sales Strategy Manager, New Product @ samsara → category channel (1 total channels)
[2026-01-20T20:53:05.407Z] [BOT] 💾 BEFORE ARCHIVING: 2931 jobs in database
[2026-01-20T20:53:05.410Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T20:53:05.414Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-20T20:53:05.415Z] [BOT] ✅ Archiving complete: 10 archived, 2921 active
[2026-01-20T20:53:05.436Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
[2026-01-20T20:53:05.436Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:06.938Z] [BOT] 💾 Marked as posted: Senior Sales Strategy Manager, New Product @ samsara (instance #1)
[2026-01-20T20:53:06.938Z] [BOT] 💾 BEFORE ARCHIVING: 2922 jobs in database
[2026-01-20T20:53:06.940Z] [BOT] ✅ No jobs to archive (all 2922 jobs within 7-day window)
[2026-01-20T20:53:06.956Z] [BOT] 💾 Saved posted_jobs.json: 2922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:06.957Z] [BOT] 📍 [ROUTING] "Tax Director" @ brex
[2026-01-20T20:53:06.957Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T20:53:07.328Z] [BOT] ✅ Posted message: Tax Director @ brex in #finance-jobs
[2026-01-20T20:53:07.328Z] [BOT] ✅ Industry: Tax Director @ brex
[2026-01-20T20:53:07.329Z] [BOT] 💾 Added channel posting: Tax Director @ brex → category channel (1 total channels)
[2026-01-20T20:53:07.329Z] [BOT] 💾 BEFORE ARCHIVING: 2923 jobs in database
[2026-01-20T20:53:07.331Z] [BOT] ✅ No jobs to archive (all 2923 jobs within 7-day window)
[2026-01-20T20:53:07.349Z] [BOT] 💾 Saved posted_jobs.json: 2923 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:08.850Z] [BOT] 💾 Marked as posted: Tax Director @ brex (instance #1)
[2026-01-20T20:53:08.851Z] [BOT] 💾 BEFORE ARCHIVING: 2924 jobs in database
[2026-01-20T20:53:08.852Z] [BOT] ✅ No jobs to archive (all 2924 jobs within 7-day window)
[2026-01-20T20:53:08.868Z] [BOT] 💾 Saved posted_jobs.json: 2924 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:11.870Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-20T20:53:11.870Z] [BOT] 📍 [ROUTING] "Customer Activation Manager, Large-Scale Deployments" @ anthropic
   Category: TECH (default)
[2026-01-20T20:53:11.870Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T20:53:12.297Z] [BOT] ✅ Posted message: Customer Activation Manager, Large-Scale Deployments @ anthropic in #tech-jobs
[2026-01-20T20:53:12.297Z] [BOT] ✅ Industry: Customer Activation Manager, Large-Scale Deployments @ anthropic
[2026-01-20T20:53:12.297Z] [BOT] 💾 Added channel posting: Customer Activation Manager, Large-Scale Deployments @ anthropic → category channel (1 total channels)
[2026-01-20T20:53:12.298Z] [BOT] 💾 BEFORE ARCHIVING: 2925 jobs in database
[2026-01-20T20:53:12.299Z] [BOT] ✅ No jobs to archive (all 2925 jobs within 7-day window)
[2026-01-20T20:53:12.316Z] [BOT] 💾 Saved posted_jobs.json: 2925 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:13.817Z] [BOT] 💾 Marked as posted: Customer Activation Manager, Large-Scale Deployments @ anthropic (instance #1)
[2026-01-20T20:53:13.818Z] [BOT] 💾 BEFORE ARCHIVING: 2926 jobs in database
[2026-01-20T20:53:13.819Z] [BOT] ✅ No jobs to archive (all 2926 jobs within 7-day window)
[2026-01-20T20:53:13.839Z] [BOT] 💾 Saved posted_jobs.json: 2926 active jobs
[2026-01-20T20:53:13.840Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:13.840Z] [BOT] 📍 [ROUTING] "Senior Software Security Engineer" @ anthropic
[2026-01-20T20:53:13.840Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T20:53:14.094Z] [BOT] ✅ Posted message: Senior Software Security Engineer @ anthropic in #tech-jobs
[2026-01-20T20:53:14.094Z] [BOT] ✅ Industry: Senior Software Security Engineer @ anthropic
[2026-01-20T20:53:14.094Z] [BOT] 💾 Added channel posting: Senior Software Security Engineer @ anthropic → category channel (1 total channels)
[2026-01-20T20:53:14.094Z] [BOT] 💾 BEFORE ARCHIVING: 2927 jobs in database
[2026-01-20T20:53:14.096Z] [BOT] ✅ No jobs to archive (all 2927 jobs within 7-day window)
[2026-01-20T20:53:14.115Z] [BOT] 💾 Saved posted_jobs.json: 2927 active jobs
[2026-01-20T20:53:14.115Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:15.617Z] [BOT] 💾 Marked as posted: Senior Software Security Engineer @ anthropic (instance #1)
[2026-01-20T20:53:15.617Z] [BOT] 💾 BEFORE ARCHIVING: 2928 jobs in database
[2026-01-20T20:53:15.619Z] [BOT] ✅ No jobs to archive (all 2928 jobs within 7-day window)
[2026-01-20T20:53:15.637Z] [BOT] 💾 Saved posted_jobs.json: 2928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:15.637Z] [BOT] 📍 [ROUTING] "Software Engineer, Safeguards" @ anthropic
[2026-01-20T20:53:15.637Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T20:53:15.925Z] [BOT] ✅ Posted message: Software Engineer, Safeguards @ anthropic in #tech-jobs
[2026-01-20T20:53:15.925Z] [BOT] ✅ Industry: Software Engineer, Safeguards @ anthropic
[2026-01-20T20:53:15.926Z] [BOT] 💾 Added channel posting: Software Engineer, Safeguards @ anthropic → category channel (1 total channels)
[2026-01-20T20:53:15.926Z] [BOT] 💾 BEFORE ARCHIVING: 2929 jobs in database
[2026-01-20T20:53:15.928Z] [BOT] ✅ No jobs to archive (all 2929 jobs within 7-day window)
[2026-01-20T20:53:15.945Z] [BOT] 💾 Saved posted_jobs.json: 2929 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:17.446Z] [BOT] 💾 Marked as posted: Software Engineer, Safeguards @ anthropic (instance #1)
[2026-01-20T20:53:17.447Z] [BOT] 💾 BEFORE ARCHIVING: 2930 jobs in database
[2026-01-20T20:53:17.449Z] [BOT] ✅ No jobs to archive (all 2930 jobs within 7-day window)
[2026-01-20T20:53:17.467Z] [BOT] 💾 Saved posted_jobs.json: 2930 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:17.467Z] [BOT] 📍 [ROUTING] "Staff Product Marketing Manager, v0" @ vercel
[2026-01-20T20:53:17.467Z] [BOT] Category: TECH (matched: "product marketing")
   Channel: tech-jobs (1462...4987)
[2026-01-20T20:53:17.759Z] [BOT] ✅ Posted message: Staff Product Marketing Manager, v0 @ vercel in #tech-jobs
  ✅ Industry: Staff Product Marketing Manager, v0 @ vercel
[2026-01-20T20:53:17.759Z] [BOT] 💾 Added channel posting: Staff Product Marketing Manager, v0 @ vercel → category channel (1 total channels)
[2026-01-20T20:53:17.759Z] [BOT] 💾 BEFORE ARCHIVING: 2931 jobs in database
[2026-01-20T20:53:17.761Z] [BOT] ✅ No jobs to archive (all 2931 jobs within 7-day window)
[2026-01-20T20:53:17.778Z] [BOT] 💾 Saved posted_jobs.json: 2931 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:19.279Z] [BOT] 💾 Marked as posted: Staff Product Marketing Manager, v0 @ vercel (instance #1)
[2026-01-20T20:53:19.280Z] [BOT] 💾 BEFORE ARCHIVING: 2932 jobs in database
[2026-01-20T20:53:19.281Z] [BOT] ✅ No jobs to archive (all 2932 jobs within 7-day window)
[2026-01-20T20:53:19.299Z] [BOT] 💾 Saved posted_jobs.json: 2932 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:19.299Z] [BOT] 📍 [ROUTING] "Sales Recruiter (12-month contract)" @ brex
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T20:53:19.533Z] [BOT] ✅ Posted message: Sales Recruiter (12-month contract) @ brex in #tech-jobs
[2026-01-20T20:53:19.533Z] [BOT] ✅ Industry: Sales Recruiter (12-month contract) @ brex
[2026-01-20T20:53:19.534Z] [BOT] 💾 Added channel posting: Sales Recruiter (12-month contract) @ brex → category channel (1 total channels)
[2026-01-20T20:53:19.534Z] [BOT] 💾 BEFORE ARCHIVING: 2933 jobs in database
[2026-01-20T20:53:19.535Z] [BOT] ✅ No jobs to archive (all 2933 jobs within 7-day window)
[2026-01-20T20:53:19.553Z] [BOT] 💾 Saved posted_jobs.json: 2933 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:21.392Z] [BOT] ✅ Posted message: Sales Recruiter (12-month contract) @ brex in #JID_ead674af
[2026-01-20T20:53:21.392Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T20:53:21.392Z] [BOT] 💾 Added channel posting: Sales Recruiter (12-month contract) @ brex → location channel (2 total channels)
[2026-01-20T20:53:21.393Z] [BOT] 💾 BEFORE ARCHIVING: 2933 jobs in database
[2026-01-20T20:53:21.394Z] [BOT] ✅ No jobs to archive (all 2933 jobs within 7-day window)
[2026-01-20T20:53:21.411Z] [BOT] 💾 Saved posted_jobs.json: 2933 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:22.913Z] [BOT] 💾 Marked as posted: Sales Recruiter (12-month contract) @ brex (instance #1)
[2026-01-20T20:53:22.913Z] [BOT] 💾 BEFORE ARCHIVING: 2934 jobs in database
[2026-01-20T20:53:22.915Z] [BOT] ✅ No jobs to archive (all 2934 jobs within 7-day window)
[2026-01-20T20:53:22.933Z] [BOT] 💾 Saved posted_jobs.json: 2934 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:22.934Z] [BOT] 💾 Marked as posted: Sales Recruiter (12-month contract) @ brex (instance #1)
[2026-01-20T20:53:22.934Z] [BOT] 💾 BEFORE ARCHIVING: 2935 jobs in database
[2026-01-20T20:53:22.935Z] [BOT] ✅ No jobs to archive (all 2935 jobs within 7-day window)
[2026-01-20T20:53:22.952Z] [BOT] 💾 Saved posted_jobs.json: 2935 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:22.952Z] [BOT] 💾 Marked as posted: Sales Recruiter (12-month contract) @ brex (instance #1)
[2026-01-20T20:53:22.952Z] [BOT] 💾 BEFORE ARCHIVING: 2936 jobs in database
[2026-01-20T20:53:22.954Z] [BOT] ✅ No jobs to archive (all 2936 jobs within 7-day window)
[2026-01-20T20:53:22.973Z] [BOT] 💾 Saved posted_jobs.json: 2936 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:22.974Z] [BOT] 📍 [ROUTING] "Director, Product Marketing " @ figma
[2026-01-20T20:53:22.974Z] [BOT] Category: TECH (matched: "product marketing")
   Channel: tech-jobs (1462...4987)
[2026-01-20T20:53:23.367Z] [BOT] ✅ Posted message: Director, Product Marketing  @ figma in #tech-jobs
[2026-01-20T20:53:23.367Z] [BOT] ✅ Industry: Director, Product Marketing  @ figma
[2026-01-20T20:53:23.368Z] [BOT] 💾 Added channel posting: Director, Product Marketing  @ figma → category channel (1 total channels)
[2026-01-20T20:53:23.368Z] [BOT] 💾 BEFORE ARCHIVING: 2937 jobs in database
[2026-01-20T20:53:23.369Z] [BOT] ✅ No jobs to archive (all 2937 jobs within 7-day window)
[2026-01-20T20:53:23.385Z] [BOT] 💾 Saved posted_jobs.json: 2937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:24.887Z] [BOT] 💾 Marked as posted: Director, Product Marketing  @ figma (instance #1)
[2026-01-20T20:53:24.887Z] [BOT] 💾 BEFORE ARCHIVING: 2938 jobs in database
[2026-01-20T20:53:24.889Z] [BOT] ✅ No jobs to archive (all 2938 jobs within 7-day window)
[2026-01-20T20:53:24.906Z] [BOT] 💾 Saved posted_jobs.json: 2938 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:27.907Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-20T20:53:27.907Z] [BOT] 📍 [ROUTING] "Software Engineer, Product Frontend (2-8 YOE)" @ airtable
[2026-01-20T20:53:27.907Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T20:53:28.278Z] [BOT] ✅ Posted message: Software Engineer, Product Frontend (2-8 YOE) @ airtable in #JID_fb739488
[2026-01-20T20:53:28.278Z] [BOT] ✅ Industry: Software Engineer, Product Frontend (2-8 YOE) @ airtable
[2026-01-20T20:53:28.279Z] [BOT] 💾 Added channel posting: Software Engineer, Product Frontend (2-8 YOE) @ airtable → category channel (1 total channels)
[2026-01-20T20:53:28.279Z] [BOT] 💾 BEFORE ARCHIVING: 2939 jobs in database
[2026-01-20T20:53:28.281Z] [BOT] ✅ No jobs to archive (all 2939 jobs within 7-day window)
[2026-01-20T20:53:28.301Z] [BOT] 💾 Saved posted_jobs.json: 2939 active jobs
[2026-01-20T20:53:28.301Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:29.802Z] [BOT] 💾 Marked as posted: Software Engineer, Product Frontend (2-8 YOE) @ airtable (instance #1)
[2026-01-20T20:53:29.803Z] [BOT] 💾 BEFORE ARCHIVING: 2940 jobs in database
[2026-01-20T20:53:29.804Z] [BOT] ✅ No jobs to archive (all 2940 jobs within 7-day window)
[2026-01-20T20:53:29.822Z] [BOT] 💾 Saved posted_jobs.json: 2940 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:32.823Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-20T20:53:32.823Z] [BOT] 📍 [ROUTING] "Analytics Engineer, Product Analytics" @ airtable
[2026-01-20T20:53:32.823Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-20T20:53:33.246Z] [BOT] ✅ Posted message: Analytics Engineer, Product Analytics @ airtable in #ai-jobs
[2026-01-20T20:53:33.246Z] [BOT] ✅ Industry: Analytics Engineer, Product Analytics @ airtable
[2026-01-20T20:53:33.247Z] [BOT] 💾 Added channel posting: Analytics Engineer, Product Analytics @ airtable → category channel (1 total channels)
[2026-01-20T20:53:33.247Z] [BOT] 💾 BEFORE ARCHIVING: 2941 jobs in database
[2026-01-20T20:53:33.249Z] [BOT] ✅ No jobs to archive (all 2941 jobs within 7-day window)
[2026-01-20T20:53:33.265Z] [BOT] 💾 Saved posted_jobs.json: 2941 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:34.766Z] [BOT] 💾 Marked as posted: Analytics Engineer, Product Analytics @ airtable (instance #1)
[2026-01-20T20:53:34.766Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-20T20:53:34.768Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-20T20:53:34.785Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
[2026-01-20T20:53:34.785Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T20:53:37.786Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T20:53:37.787Z] [BOT] ⏭️  Skipping duplicate: JID_b4774644 (posted within 7 days)
[2026-01-20T20:53:37.787Z] [BOT] ⏭️  Skipping duplicate: JID_f6b2d747 (posted within 7 days)
[2026-01-20T20:53:37.787Z] [BOT] ⏭️  Skipping duplicate: JID_21719862 (posted within 7 days)
[2026-01-20T20:53:37.788Z] [BOT] ⏭️  Skipping duplicate: JID_8ec96c63 (posted within 7 days)
[2026-01-20T20:53:37.788Z] [BOT] ⏭️  Skipping duplicate: JID_07c0c0a5 (posted within 7 days)
[2026-01-20T20:53:37.788Z] [BOT] ⏭️  Skipping duplicate: JID_588f7f3b (posted within 7 days)
[2026-01-20T20:53:37.788Z] [BOT] ⏭️  Skipping duplicate: JID_7fbd3e53 (posted within 7 days)
[2026-01-20T20:53:37.788Z] [BOT] ⏭️  Skipping duplicate: JID_5a3cb3c9 (posted within 7 days)
[2026-01-20T20:53:37.788Z] [BOT] ⏭️  Skipping duplicate: JID_e041e641 (posted within 7 days)
[2026-01-20T20:53:37.788Z] [BOT] ⏭️  Skipping duplicate: JID_c4ad9978 (posted within 7 days)
[2026-01-20T20:53:37.887Z] [BOT] ✅ Loaded pending queue: 2766 total (2747 pending, 19 enriched, 0 posted)
[2026-01-20T20:53:38.047Z] [BOT] ✅ Saved pending queue: 2766 total (2747 pending, 9 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-20T20:53:38.047Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T20:53:38.109Z] [BOT] 📂 Loaded 5472 existing routing entries
[2026-01-20T20:53:38.182Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5482
   Timestamp: 2026-01-20T20:53:38.160Z
[2026-01-20T20:53:38.184Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 12
   Successful: 11
   Failed: 0
   Skipped: 1
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 5
   Top channels:
     1. #tech-jobs: 6 posts
     2. #finance-jobs: 2 posts
     3. #JID_ead674af: 1 posts
     4. #JID_fb739488: 1 posts
     5. #ai-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-20T20:53:40.209Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2482) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*