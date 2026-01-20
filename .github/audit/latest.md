# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T21:12:31.393Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T21:11:51.991Z] ========================================
[2026-01-20T21:11:51.993Z] Discord Bot Execution Log
[2026-01-20T21:11:51.993Z] Environment: GitHub Actions
[2026-01-20T21:11:51.993Z] Node Version: v20.19.6
[2026-01-20T21:11:51.993Z] ========================================
[2026-01-20T21:11:51.993Z] Environment Variables Check:
[2026-01-20T21:11:51.993Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T21:11:51.993Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T21:11:51.993Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T21:11:51.994Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T21:11:51.994Z] 
Multi-Channel Configuration:
[2026-01-20T21:11:51.994Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T21:11:51.994Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T21:11:51.994Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T21:11:51.994Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T21:11:51.994Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T21:11:51.994Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T21:11:51.994Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T21:11:51.994Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T21:11:51.994Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T21:11:51.994Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T21:11:51.995Z] 
Data Files Check:
[2026-01-20T21:11:51.996Z] .github/data/new_jobs.json: ✅ Exists (10 items, 144587 bytes)
[2026-01-20T21:11:52.006Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1645241 bytes)
[2026-01-20T21:11:52.006Z] 
========================================
[2026-01-20T21:11:52.006Z] Starting Enhanced Discord Bot...
[2026-01-20T21:11:52.007Z] ========================================
[2026-01-20T21:11:52.532Z] [BOT] ✅ Loaded V2 database: 2942 jobs
[2026-01-20T21:11:53.157Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T21:11:53.157Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T21:11:53.157Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T21:11:53.271Z] [BOT] ✅ Loaded pending queue: 2763 total (2743 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 2 at Markon
[2026-01-20T21:11:53.275Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T21:11:53.276Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T21:11:53.276Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T21:11:53.277Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-20T21:11:53.277Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit: chicago, los angeles, san francisco
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-20T21:11:53.277Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T21:11:53.281Z] [BOT] 📌 Posting 4 jobs to #tech-jobs
[2026-01-20T21:11:53.281Z] [BOT] 📍 [ROUTING] "Software Engineer 2" @ ORG_26f6f1be
[2026-01-20T21:11:53.281Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T21:11:53.286Z] [BOT ERROR] (node:2643) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T21:11:53.491Z] [BOT] ✅ Posted message: Software Engineer 2 @ ORG_26f6f1be in #tech-jobs
[2026-01-20T21:11:53.491Z] [BOT] ✅ Industry: Software Engineer 2 @ ORG_26f6f1be
[2026-01-20T21:11:53.492Z] [BOT] 💾 Added channel posting: Software Engineer 2 @ ORG_26f6f1be → category channel (1 total channels)
[2026-01-20T21:11:53.492Z] [BOT] 💾 BEFORE ARCHIVING: 2943 jobs in database
[2026-01-20T21:11:53.495Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T21:11:53.500Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-20T21:11:53.500Z] [BOT] ✅ Archiving complete: 20 archived, 2923 active
[2026-01-20T21:11:53.521Z] [BOT] 💾 Saved posted_jobs.json: 2923 active jobs
[2026-01-20T21:11:53.521Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:11:55.291Z] [BOT] ✅ Posted message: Software Engineer 2 @ ORG_26f6f1be in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T21:11:55.291Z] [BOT] 💾 Added channel posting: Software Engineer 2 @ ORG_26f6f1be → location channel (2 total channels)
[2026-01-20T21:11:55.291Z] [BOT] 💾 BEFORE ARCHIVING: 2923 jobs in database
[2026-01-20T21:11:55.294Z] [BOT] ✅ No jobs to archive (all 2923 jobs within 7-day window)
[2026-01-20T21:11:55.311Z] [BOT] 💾 Saved posted_jobs.json: 2923 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:11:56.811Z] [BOT] 💾 Marked as posted: Software Engineer 2 @ ORG_26f6f1be (instance #1)
[2026-01-20T21:11:56.812Z] [BOT] 💾 BEFORE ARCHIVING: 2924 jobs in database
[2026-01-20T21:11:56.814Z] [BOT] ✅ No jobs to archive (all 2924 jobs within 7-day window)
[2026-01-20T21:11:56.833Z] [BOT] 💾 Saved posted_jobs.json: 2924 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:11:56.833Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Retail & Commercial Banking" @ anthropic
[2026-01-20T21:11:56.833Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T21:11:57.066Z] [BOT] ✅ Posted message: Strategic Account Executive, Retail & Commercial Banking @ anthropic in #tech-jobs
[2026-01-20T21:11:57.066Z] [BOT] ✅ Industry: Strategic Account Executive, Retail & Commercial Banking @ anthropic
[2026-01-20T21:11:57.067Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Retail & Commercial Banking @ anthropic → category channel (1 total channels)
[2026-01-20T21:11:57.067Z] [BOT] 💾 BEFORE ARCHIVING: 2925 jobs in database
[2026-01-20T21:11:57.069Z] [BOT] ✅ No jobs to archive (all 2925 jobs within 7-day window)
[2026-01-20T21:11:57.087Z] [BOT] 💾 Saved posted_jobs.json: 2925 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:11:58.588Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Retail & Commercial Banking @ anthropic (instance #1)
[2026-01-20T21:11:58.588Z] [BOT] 💾 BEFORE ARCHIVING: 2926 jobs in database
[2026-01-20T21:11:58.590Z] [BOT] ✅ No jobs to archive (all 2926 jobs within 7-day window)
[2026-01-20T21:11:58.610Z] [BOT] 💾 Saved posted_jobs.json: 2926 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:11:58.610Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ vercel
   Category: TECH (default)
[2026-01-20T21:11:58.611Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T21:11:58.982Z] [BOT] ✅ Posted message: Enterprise Account Executive @ vercel in #tech-jobs
[2026-01-20T21:11:58.983Z] [BOT] ✅ Industry: Enterprise Account Executive @ vercel
[2026-01-20T21:11:58.983Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ vercel → category channel (1 total channels)
[2026-01-20T21:11:58.983Z] [BOT] 💾 BEFORE ARCHIVING: 2927 jobs in database
[2026-01-20T21:11:58.985Z] [BOT] ✅ No jobs to archive (all 2927 jobs within 7-day window)
[2026-01-20T21:11:59.001Z] [BOT] 💾 Saved posted_jobs.json: 2927 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:00.502Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ vercel (instance #1)
[2026-01-20T21:12:00.502Z] [BOT] 💾 BEFORE ARCHIVING: 2928 jobs in database
[2026-01-20T21:12:00.504Z] [BOT] ✅ No jobs to archive (all 2928 jobs within 7-day window)
[2026-01-20T21:12:00.520Z] [BOT] 💾 Saved posted_jobs.json: 2928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:00.520Z] [BOT] 📍 [ROUTING] "Full Stack Engineer" @ ORG_a8053538
   Category: TECH (matched: "web engineer")
[2026-01-20T21:12:00.520Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T21:12:00.815Z] [BOT] ✅ Posted message: Full Stack Engineer @ ORG_a8053538 in #tech-jobs
[2026-01-20T21:12:00.815Z] [BOT] ✅ Industry: Full Stack Engineer @ ORG_a8053538
[2026-01-20T21:12:00.815Z] [BOT] 💾 Added channel posting: Full Stack Engineer @ ORG_a8053538 → category channel (1 total channels)
[2026-01-20T21:12:00.815Z] [BOT] 💾 BEFORE ARCHIVING: 2929 jobs in database
[2026-01-20T21:12:00.817Z] [BOT] ✅ No jobs to archive (all 2929 jobs within 7-day window)
[2026-01-20T21:12:00.834Z] [BOT] 💾 Saved posted_jobs.json: 2929 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:02.604Z] [BOT] ✅ Posted message: Full Stack Engineer @ ORG_a8053538 in #JID_ead674af
[2026-01-20T21:12:02.604Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T21:12:02.604Z] [BOT] 💾 Added channel posting: Full Stack Engineer @ ORG_a8053538 → location channel (2 total channels)
[2026-01-20T21:12:02.604Z] [BOT] 💾 BEFORE ARCHIVING: 2929 jobs in database
[2026-01-20T21:12:02.607Z] [BOT] ✅ No jobs to archive (all 2929 jobs within 7-day window)
[2026-01-20T21:12:02.627Z] [BOT] 💾 Saved posted_jobs.json: 2929 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:04.128Z] [BOT] 💾 Marked as posted: Full Stack Engineer @ ORG_a8053538 (instance #1)
[2026-01-20T21:12:04.129Z] [BOT] 💾 BEFORE ARCHIVING: 2930 jobs in database
[2026-01-20T21:12:04.130Z] [BOT] ✅ No jobs to archive (all 2930 jobs within 7-day window)
[2026-01-20T21:12:04.150Z] [BOT] 💾 Saved posted_jobs.json: 2930 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:07.151Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-20T21:12:07.152Z] [BOT] 📍 [ROUTING] "ERP Master Data Specialist" @ ORG_70339031 Technologies
[2026-01-20T21:12:07.152Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-20T21:12:07.532Z] [BOT] ✅ Posted message: ERP Master Data Specialist @ ORG_70339031 Technologies in #ai-jobs
[2026-01-20T21:12:07.532Z] [BOT] ✅ Industry: ERP Master Data Specialist @ ORG_70339031 Technologies
[2026-01-20T21:12:07.533Z] [BOT] 💾 Added channel posting: ERP Master Data Specialist @ ORG_70339031 Technologies → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2931 jobs in database
[2026-01-20T21:12:07.535Z] [BOT] ✅ No jobs to archive (all 2931 jobs within 7-day window)
[2026-01-20T21:12:07.552Z] [BOT] 💾 Saved posted_jobs.json: 2931 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:09.418Z] [BOT] ✅ Posted message: ERP Master Data Specialist @ ORG_70339031 Technologies in #JID_ead674af
[2026-01-20T21:12:09.418Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T21:12:09.419Z] [BOT] 💾 Added channel posting: ERP Master Data Specialist @ ORG_70339031 Technologies → location channel (2 total channels)
[2026-01-20T21:12:09.419Z] [BOT] 💾 BEFORE ARCHIVING: 2931 jobs in database
[2026-01-20T21:12:09.421Z] [BOT] ✅ No jobs to archive (all 2931 jobs within 7-day window)
[2026-01-20T21:12:09.440Z] [BOT] 💾 Saved posted_jobs.json: 2931 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:10.942Z] [BOT] 💾 Marked as posted: ERP Master Data Specialist @ ORG_70339031 Technologies (instance #1)
[2026-01-20T21:12:10.942Z] [BOT] 💾 BEFORE ARCHIVING: 2932 jobs in database
[2026-01-20T21:12:10.944Z] [BOT] ✅ No jobs to archive (all 2932 jobs within 7-day window)
[2026-01-20T21:12:10.961Z] [BOT] 💾 Saved posted_jobs.json: 2932 active jobs
[2026-01-20T21:12:10.961Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:10.962Z] [BOT] 📍 [ROUTING] "Director, Global 3rd Party Partnerships" @ reddit
[2026-01-20T21:12:10.962Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T21:12:11.145Z] [BOT] ✅ Posted message: Director, Global 3rd Party Partnerships @ reddit in #ai-jobs
  ✅ Industry: Director, Global 3rd Party Partnerships @ reddit
[2026-01-20T21:12:11.145Z] [BOT] 💾 Added channel posting: Director, Global 3rd Party Partnerships @ reddit → category channel (1 total channels)
[2026-01-20T21:12:11.146Z] [BOT] 💾 BEFORE ARCHIVING: 2933 jobs in database
[2026-01-20T21:12:11.147Z] [BOT] ✅ No jobs to archive (all 2933 jobs within 7-day window)
[2026-01-20T21:12:11.165Z] [BOT] 💾 Saved posted_jobs.json: 2933 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:12.883Z] [BOT] ✅ Posted message: Director, Global 3rd Party Partnerships @ reddit in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T21:12:12.883Z] [BOT] 💾 Added channel posting: Director, Global 3rd Party Partnerships @ reddit → location channel (2 total channels)
[2026-01-20T21:12:12.883Z] [BOT] 💾 BEFORE ARCHIVING: 2933 jobs in database
[2026-01-20T21:12:12.885Z] [BOT] ✅ No jobs to archive (all 2933 jobs within 7-day window)
[2026-01-20T21:12:12.904Z] [BOT] 💾 Saved posted_jobs.json: 2933 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:14.405Z] [BOT] 💾 Marked as posted: Director, Global 3rd Party Partnerships @ reddit (instance #1)
[2026-01-20T21:12:14.405Z] [BOT] 💾 BEFORE ARCHIVING: 2934 jobs in database
[2026-01-20T21:12:14.407Z] [BOT] ✅ No jobs to archive (all 2934 jobs within 7-day window)
[2026-01-20T21:12:14.424Z] [BOT] 💾 Saved posted_jobs.json: 2934 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:14.424Z] [BOT] 📍 [ROUTING] "iOS Software Engineer, i18n: Grow Global and Local Communities" @ reddit
[2026-01-20T21:12:14.424Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T21:12:14.698Z] [BOT] ✅ Posted message: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit in #ai-jobs
  ✅ Industry: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit
[2026-01-20T21:12:14.699Z] [BOT] 💾 Added channel posting: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit → category channel (1 total channels)
[2026-01-20T21:12:14.699Z] [BOT] 💾 BEFORE ARCHIVING: 2935 jobs in database
[2026-01-20T21:12:14.701Z] [BOT] ✅ No jobs to archive (all 2935 jobs within 7-day window)
[2026-01-20T21:12:14.718Z] [BOT] 💾 Saved posted_jobs.json: 2935 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:16.220Z] [BOT] 💾 Marked as posted: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit (instance #1)
[2026-01-20T21:12:16.220Z] [BOT] 💾 BEFORE ARCHIVING: 2936 jobs in database
[2026-01-20T21:12:16.222Z] [BOT] ✅ No jobs to archive (all 2936 jobs within 7-day window)
[2026-01-20T21:12:16.241Z] [BOT] 💾 Saved posted_jobs.json: 2936 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:16.241Z] [BOT] 💾 Marked as posted: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit (instance #1)
[2026-01-20T21:12:16.241Z] [BOT] 💾 BEFORE ARCHIVING: 2937 jobs in database
[2026-01-20T21:12:16.243Z] [BOT] ✅ No jobs to archive (all 2937 jobs within 7-day window)
[2026-01-20T21:12:16.259Z] [BOT] 💾 Saved posted_jobs.json: 2937 active jobs
[2026-01-20T21:12:16.259Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:16.259Z] [BOT] 💾 Marked as posted: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit (instance #1)
💾 BEFORE ARCHIVING: 2938 jobs in database
[2026-01-20T21:12:16.260Z] [BOT] ✅ No jobs to archive (all 2938 jobs within 7-day window)
[2026-01-20T21:12:16.278Z] [BOT] 💾 Saved posted_jobs.json: 2938 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:16.278Z] [BOT] 📍 [ROUTING] "Data Scientist, Marketing" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-20T21:12:16.278Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-20T21:12:16.477Z] [BOT] ✅ Posted message: Data Scientist, Marketing @ anthropic in #ai-jobs
  ✅ Industry: Data Scientist, Marketing @ anthropic
[2026-01-20T21:12:16.477Z] [BOT] 💾 Added channel posting: Data Scientist, Marketing @ anthropic → category channel (1 total channels)
[2026-01-20T21:12:16.478Z] [BOT] 💾 BEFORE ARCHIVING: 2939 jobs in database
[2026-01-20T21:12:16.479Z] [BOT] ✅ No jobs to archive (all 2939 jobs within 7-day window)
[2026-01-20T21:12:16.495Z] [BOT] 💾 Saved posted_jobs.json: 2939 active jobs
[2026-01-20T21:12:16.495Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:17.996Z] [BOT] 💾 Marked as posted: Data Scientist, Marketing @ anthropic (instance #1)
[2026-01-20T21:12:17.996Z] [BOT] 💾 BEFORE ARCHIVING: 2940 jobs in database
[2026-01-20T21:12:17.998Z] [BOT] ✅ No jobs to archive (all 2940 jobs within 7-day window)
[2026-01-20T21:12:18.014Z] [BOT] 💾 Saved posted_jobs.json: 2940 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:21.014Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-20T21:12:21.014Z] [BOT] 📍 [ROUTING] "Head of Asset & Wealth Management, GTM Sales" @ anthropic
[2026-01-20T21:12:21.014Z] [BOT] Category: FINANCE (matched: "investment")
   Channel: finance-jobs (1462...4023)
[2026-01-20T21:12:21.303Z] [BOT] ✅ Posted message: Head of Asset & Wealth Management, GTM Sales @ anthropic in #finance-jobs
  ✅ Industry: Head of Asset & Wealth Management, GTM Sales @ anthropic
[2026-01-20T21:12:21.304Z] [BOT] 💾 Added channel posting: Head of Asset & Wealth Management, GTM Sales @ anthropic → category channel (1 total channels)
[2026-01-20T21:12:21.304Z] [BOT] 💾 BEFORE ARCHIVING: 2941 jobs in database
[2026-01-20T21:12:21.306Z] [BOT] ✅ No jobs to archive (all 2941 jobs within 7-day window)
[2026-01-20T21:12:21.325Z] [BOT] 💾 Saved posted_jobs.json: 2941 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:22.825Z] [BOT] 💾 Marked as posted: Head of Asset & Wealth Management, GTM Sales @ anthropic (instance #1)
[2026-01-20T21:12:22.825Z] [BOT] 💾 BEFORE ARCHIVING: 2942 jobs in database
[2026-01-20T21:12:22.827Z] [BOT] ✅ No jobs to archive (all 2942 jobs within 7-day window)
[2026-01-20T21:12:22.843Z] [BOT] 💾 Saved posted_jobs.json: 2942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:22.843Z] [BOT] 📍 [ROUTING] "NetSuite Implementation Consultant" @ ORG_efa4a8df
[2026-01-20T21:12:22.843Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T21:12:23.096Z] [BOT] ✅ Posted message: NetSuite Implementation Consultant @ ORG_efa4a8df in #finance-jobs
[2026-01-20T21:12:23.097Z] [BOT] ✅ Industry: NetSuite Implementation Consultant @ ORG_efa4a8df
[2026-01-20T21:12:23.097Z] [BOT] 💾 Added channel posting: NetSuite Implementation Consultant @ ORG_efa4a8df → category channel (1 total channels)
[2026-01-20T21:12:23.097Z] [BOT] 💾 BEFORE ARCHIVING: 2943 jobs in database
[2026-01-20T21:12:23.099Z] [BOT] ✅ No jobs to archive (all 2943 jobs within 7-day window)
[2026-01-20T21:12:23.116Z] [BOT] 💾 Saved posted_jobs.json: 2943 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:24.617Z] [BOT] 💾 Marked as posted: NetSuite Implementation Consultant @ ORG_efa4a8df (instance #1)
[2026-01-20T21:12:24.617Z] [BOT] 💾 BEFORE ARCHIVING: 2944 jobs in database
[2026-01-20T21:12:24.619Z] [BOT] ✅ No jobs to archive (all 2944 jobs within 7-day window)
[2026-01-20T21:12:24.638Z] [BOT] 💾 Saved posted_jobs.json: 2944 active jobs
[2026-01-20T21:12:24.638Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:12:27.639Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T21:12:27.639Z] [BOT] ⏭️  Skipping duplicate: JID_b6aeb185 (posted within 7 days)
[2026-01-20T21:12:27.640Z] [BOT] ⏭️  Skipping duplicate: JID_a9d5db58 (posted within 7 days)
[2026-01-20T21:12:27.640Z] [BOT] ⏭️  Skipping duplicate: JID_8ccc27e9 (posted within 7 days)
[2026-01-20T21:12:27.640Z] [BOT] ⏭️  Skipping duplicate: JID_60735a57 (posted within 7 days)
[2026-01-20T21:12:27.640Z] [BOT] ⏭️  Skipping duplicate: JID_68f3abf5 (posted within 7 days)
[2026-01-20T21:12:27.640Z] [BOT] ⏭️  Skipping duplicate: JID_0cafa48d (posted within 7 days)
[2026-01-20T21:12:27.640Z] [BOT] ⏭️  Skipping duplicate: JID_53e922ae (posted within 7 days)
[2026-01-20T21:12:27.641Z] [BOT] ⏭️  Skipping duplicate: JID_14eae989 (posted within 7 days)
[2026-01-20T21:12:27.641Z] [BOT] ⏭️  Skipping duplicate: JID_51a4bf73-external_careers-JID_e041c4ce-consultant_r-50086 (posted within 7 days)
[2026-01-20T21:12:27.641Z] [BOT] ⏭️  Skipping duplicate: JID_8b48b8bc (posted within 7 days)
[2026-01-20T21:12:27.744Z] [BOT] ✅ Loaded pending queue: 2763 total (2743 pending, 20 enriched, 0 posted)
[2026-01-20T21:12:27.929Z] [BOT] ✅ Saved pending queue: 2763 total (2743 pending, 10 enriched, 10 posted)
[2026-01-20T21:12:27.929Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T21:12:27.991Z] [BOT] 📂 Loaded 5482 existing routing entries
[2026-01-20T21:12:28.066Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5492
[2026-01-20T21:12:28.066Z] [BOT] Timestamp: 2026-01-20T21:12:28.042Z
[2026-01-20T21:12:28.067Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 14
[2026-01-20T21:12:28.067Z] [BOT] Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-20T21:12:28.067Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-20T21:12:28.067Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 5
   Top channels:
[2026-01-20T21:12:28.067Z] [BOT] 1. #tech-jobs: 4 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #finance-jobs: 2 posts
[2026-01-20T21:12:28.067Z] [BOT] 5. #JID_98d4f0de: 1 posts
[2026-01-20T21:12:28.067Z] [BOT] [STATS] Channel stats saved
[2026-01-20T21:12:30.093Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2643) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*