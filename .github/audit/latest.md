# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T21:43:23.568Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T21:42:46.310Z] ========================================
[2026-01-20T21:42:46.312Z] Discord Bot Execution Log
[2026-01-20T21:42:46.312Z] Environment: GitHub Actions
[2026-01-20T21:42:46.312Z] Node Version: v20.19.6
[2026-01-20T21:42:46.312Z] ========================================
[2026-01-20T21:42:46.313Z] Environment Variables Check:
[2026-01-20T21:42:46.313Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T21:42:46.313Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T21:42:46.313Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T21:42:46.313Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T21:42:46.313Z] 
Multi-Channel Configuration:
[2026-01-20T21:42:46.313Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T21:42:46.313Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T21:42:46.313Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T21:42:46.313Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T21:42:46.314Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T21:42:46.314Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T21:42:46.314Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T21:42:46.314Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T21:42:46.314Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T21:42:46.314Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T21:42:46.314Z] 
Data Files Check:
[2026-01-20T21:42:46.315Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157684 bytes)
[2026-01-20T21:42:46.327Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1659199 bytes)
[2026-01-20T21:42:46.327Z] 
========================================
[2026-01-20T21:42:46.327Z] Starting Enhanced Discord Bot...
[2026-01-20T21:42:46.327Z] ========================================
[2026-01-20T21:42:46.853Z] [BOT] ✅ Loaded V2 database: 2964 jobs
[2026-01-20T21:42:47.408Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T21:42:47.408Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T21:42:47.408Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T21:42:47.524Z] [BOT] ✅ Loaded pending queue: 2769 total (2749 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Scientist in Large Language Model Graduate - Seed-LLM at ByteDance
[2026-01-20T21:42:47.527Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T21:42:47.528Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T21:42:47.529Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T21:42:47.529Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-20T21:42:47.529Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Director, Global Sales Enablement @ reddit: new york, san francisco
   - Senior Software Engineer, Android Test Engineering @ reddit: new york, chicago, san francisco, los angeles
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-20T21:42:47.529Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T21:42:47.533Z] [BOT] 📌 Posting 8 jobs to #ai-jobs
[2026-01-20T21:42:47.533Z] [BOT] 📍 [ROUTING] "Research Scientist in Large Language Model Graduate - Seed-LLM" @ ORG_08c9a13c
[2026-01-20T21:42:47.533Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-20T21:42:47.537Z] [BOT ERROR] (node:2447) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T21:42:47.829Z] [BOT] ✅ Posted message: Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c in #ai-jobs
[2026-01-20T21:42:47.829Z] [BOT] ✅ Industry: Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c
[2026-01-20T21:42:47.830Z] [BOT] 💾 Added channel posting: Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-20T21:42:47.830Z] [BOT] 💾 BEFORE ARCHIVING: 2965 jobs in database
[2026-01-20T21:42:47.833Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T21:42:47.837Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-20T21:42:47.837Z] [BOT] ✅ Archiving complete: 10 archived, 2955 active
[2026-01-20T21:42:47.856Z] [BOT] 💾 Saved posted_jobs.json: 2955 active jobs
[2026-01-20T21:42:47.856Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:42:49.358Z] [BOT] 💾 Marked as posted: Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c (instance #1)
[2026-01-20T21:42:49.359Z] [BOT] 💾 BEFORE ARCHIVING: 2956 jobs in database
[2026-01-20T21:42:49.361Z] [BOT] ✅ No jobs to archive (all 2956 jobs within 7-day window)
[2026-01-20T21:42:49.379Z] [BOT] 💾 Saved posted_jobs.json: 2956 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:42:49.379Z] [BOT] 📍 [ROUTING] "Business Partner, Global Revenue Strategy & Operations " @ reddit
[2026-01-20T21:42:49.379Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-20T21:42:49.595Z] [BOT] ✅ Posted message: Business Partner, Global Revenue Strategy & Operations  @ reddit in #ai-jobs
[2026-01-20T21:42:49.595Z] [BOT] ✅ Industry: Business Partner, Global Revenue Strategy & Operations  @ reddit
[2026-01-20T21:42:49.595Z] [BOT] 💾 Added channel posting: Business Partner, Global Revenue Strategy & Operations  @ reddit → category channel (1 total channels)
[2026-01-20T21:42:49.595Z] [BOT] 💾 BEFORE ARCHIVING: 2957 jobs in database
[2026-01-20T21:42:49.598Z] [BOT] ✅ No jobs to archive (all 2957 jobs within 7-day window)
[2026-01-20T21:42:49.618Z] [BOT] 💾 Saved posted_jobs.json: 2957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:42:51.412Z] [BOT] ✅ Posted message: Business Partner, Global Revenue Strategy & Operations  @ reddit in #JID_98d4f0de
[2026-01-20T21:42:51.412Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T21:42:51.413Z] [BOT] 💾 Added channel posting: Business Partner, Global Revenue Strategy & Operations  @ reddit → location channel (2 total channels)
[2026-01-20T21:42:51.413Z] [BOT] 💾 BEFORE ARCHIVING: 2957 jobs in database
[2026-01-20T21:42:51.415Z] [BOT] ✅ No jobs to archive (all 2957 jobs within 7-day window)
[2026-01-20T21:42:51.433Z] [BOT] 💾 Saved posted_jobs.json: 2957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:42:52.935Z] [BOT] 💾 Marked as posted: Business Partner, Global Revenue Strategy & Operations  @ reddit (instance #1)
[2026-01-20T21:42:52.935Z] [BOT] 💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-20T21:42:52.937Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-20T21:42:52.957Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:42:52.957Z] [BOT] 📍 [ROUTING] "Client Account Executive, Mid-Market (App Dev)" @ reddit
[2026-01-20T21:42:52.957Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T21:42:53.116Z] [BOT] ✅ Posted message: Client Account Executive, Mid-Market (App Dev) @ reddit in #ai-jobs
[2026-01-20T21:42:53.116Z] [BOT] ✅ Industry: Client Account Executive, Mid-Market (App Dev) @ reddit
[2026-01-20T21:42:53.117Z] [BOT] 💾 Added channel posting: Client Account Executive, Mid-Market (App Dev) @ reddit → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2959 jobs in database
[2026-01-20T21:42:53.119Z] [BOT] ✅ No jobs to archive (all 2959 jobs within 7-day window)
[2026-01-20T21:42:53.135Z] [BOT] 💾 Saved posted_jobs.json: 2959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:42:55.074Z] [BOT] ✅ Posted message: Client Account Executive, Mid-Market (App Dev) @ reddit in #JID_98d4f0de
[2026-01-20T21:42:55.074Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T21:42:55.075Z] [BOT] 💾 Added channel posting: Client Account Executive, Mid-Market (App Dev) @ reddit → location channel (2 total channels)
[2026-01-20T21:42:55.075Z] [BOT] 💾 BEFORE ARCHIVING: 2959 jobs in database
[2026-01-20T21:42:55.077Z] [BOT] ✅ No jobs to archive (all 2959 jobs within 7-day window)
[2026-01-20T21:42:55.093Z] [BOT] 💾 Saved posted_jobs.json: 2959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:42:56.595Z] [BOT] 💾 Marked as posted: Client Account Executive, Mid-Market (App Dev) @ reddit (instance #1)
[2026-01-20T21:42:56.595Z] [BOT] 💾 BEFORE ARCHIVING: 2960 jobs in database
[2026-01-20T21:42:56.597Z] [BOT] ✅ No jobs to archive (all 2960 jobs within 7-day window)
[2026-01-20T21:42:56.619Z] [BOT] 💾 Saved posted_jobs.json: 2960 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:42:56.620Z] [BOT] 📍 [ROUTING] "Client Account Executive, Mid-Market Sales (B2B Services)" @ reddit
[2026-01-20T21:42:56.621Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T21:42:56.828Z] [BOT] ✅ Posted message: Client Account Executive, Mid-Market Sales (B2B Services) @ reddit in #ai-jobs
[2026-01-20T21:42:56.828Z] [BOT] ✅ Industry: Client Account Executive, Mid-Market Sales (B2B Services) @ reddit
[2026-01-20T21:42:56.829Z] [BOT] 💾 Added channel posting: Client Account Executive, Mid-Market Sales (B2B Services) @ reddit → category channel (1 total channels)
[2026-01-20T21:42:56.829Z] [BOT] 💾 BEFORE ARCHIVING: 2961 jobs in database
[2026-01-20T21:42:56.831Z] [BOT] ✅ No jobs to archive (all 2961 jobs within 7-day window)
[2026-01-20T21:42:56.856Z] [BOT] 💾 Saved posted_jobs.json: 2961 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:42:58.358Z] [BOT] 💾 Marked as posted: Client Account Executive, Mid-Market Sales (B2B Services) @ reddit (instance #1)
[2026-01-20T21:42:58.359Z] [BOT] 💾 BEFORE ARCHIVING: 2962 jobs in database
[2026-01-20T21:42:58.361Z] [BOT] ✅ No jobs to archive (all 2962 jobs within 7-day window)
[2026-01-20T21:42:58.378Z] [BOT] 💾 Saved posted_jobs.json: 2962 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:42:58.379Z] [BOT] 📍 [ROUTING] "Client Account Executive, Mid-Market Sales (B2C Services)" @ reddit
[2026-01-20T21:42:58.379Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T21:42:58.794Z] [BOT] ✅ Posted message: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit in #ai-jobs
  ✅ Industry: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit
[2026-01-20T21:42:58.795Z] [BOT] 💾 Added channel posting: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit → category channel (1 total channels)
[2026-01-20T21:42:58.796Z] [BOT] 💾 BEFORE ARCHIVING: 2963 jobs in database
[2026-01-20T21:42:58.797Z] [BOT] ✅ No jobs to archive (all 2963 jobs within 7-day window)
[2026-01-20T21:42:58.815Z] [BOT] 💾 Saved posted_jobs.json: 2963 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:00.538Z] [BOT] ✅ Posted message: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T21:43:00.539Z] [BOT] 💾 Added channel posting: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit → location channel (2 total channels)
[2026-01-20T21:43:00.539Z] [BOT] 💾 BEFORE ARCHIVING: 2963 jobs in database
[2026-01-20T21:43:00.541Z] [BOT] ✅ No jobs to archive (all 2963 jobs within 7-day window)
[2026-01-20T21:43:00.558Z] [BOT] 💾 Saved posted_jobs.json: 2963 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:02.059Z] [BOT] 💾 Marked as posted: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit (instance #1)
[2026-01-20T21:43:02.059Z] [BOT] 💾 BEFORE ARCHIVING: 2964 jobs in database
[2026-01-20T21:43:02.061Z] [BOT] ✅ No jobs to archive (all 2964 jobs within 7-day window)
[2026-01-20T21:43:02.079Z] [BOT] 💾 Saved posted_jobs.json: 2964 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:02.080Z] [BOT] 📍 [ROUTING] "Client Partner, Mid-Market (Agency Acquisitions)" @ reddit
[2026-01-20T21:43:02.080Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T21:43:02.368Z] [BOT] ✅ Posted message: Client Partner, Mid-Market (Agency Acquisitions) @ reddit in #ai-jobs
[2026-01-20T21:43:02.368Z] [BOT] ✅ Industry: Client Partner, Mid-Market (Agency Acquisitions) @ reddit
[2026-01-20T21:43:02.368Z] [BOT] 💾 Added channel posting: Client Partner, Mid-Market (Agency Acquisitions) @ reddit → category channel (1 total channels)
[2026-01-20T21:43:02.368Z] [BOT] 💾 BEFORE ARCHIVING: 2965 jobs in database
[2026-01-20T21:43:02.370Z] [BOT] ✅ No jobs to archive (all 2965 jobs within 7-day window)
[2026-01-20T21:43:02.387Z] [BOT] 💾 Saved posted_jobs.json: 2965 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:04.174Z] [BOT] ✅ Posted message: Client Partner, Mid-Market (Agency Acquisitions) @ reddit in #JID_98d4f0de
[2026-01-20T21:43:04.174Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T21:43:04.175Z] [BOT] 💾 Added channel posting: Client Partner, Mid-Market (Agency Acquisitions) @ reddit → location channel (2 total channels)
[2026-01-20T21:43:04.175Z] [BOT] 💾 BEFORE ARCHIVING: 2965 jobs in database
[2026-01-20T21:43:04.176Z] [BOT] ✅ No jobs to archive (all 2965 jobs within 7-day window)
[2026-01-20T21:43:04.195Z] [BOT] 💾 Saved posted_jobs.json: 2965 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:05.697Z] [BOT] 💾 Marked as posted: Client Partner, Mid-Market (Agency Acquisitions) @ reddit (instance #1)
[2026-01-20T21:43:05.697Z] [BOT] 💾 BEFORE ARCHIVING: 2966 jobs in database
[2026-01-20T21:43:05.700Z] [BOT] ✅ No jobs to archive (all 2966 jobs within 7-day window)
[2026-01-20T21:43:05.716Z] [BOT] 💾 Saved posted_jobs.json: 2966 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:05.717Z] [BOT] 📍 [ROUTING] "Client Partner, Mid-Market (Services Acquisitions)" @ reddit
[2026-01-20T21:43:05.717Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T21:43:05.909Z] [BOT] ✅ Posted message: Client Partner, Mid-Market (Services Acquisitions) @ reddit in #ai-jobs
  ✅ Industry: Client Partner, Mid-Market (Services Acquisitions) @ reddit
[2026-01-20T21:43:05.910Z] [BOT] 💾 Added channel posting: Client Partner, Mid-Market (Services Acquisitions) @ reddit → category channel (1 total channels)
[2026-01-20T21:43:05.910Z] [BOT] 💾 BEFORE ARCHIVING: 2967 jobs in database
[2026-01-20T21:43:05.912Z] [BOT] ✅ No jobs to archive (all 2967 jobs within 7-day window)
[2026-01-20T21:43:05.930Z] [BOT] 💾 Saved posted_jobs.json: 2967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:07.432Z] [BOT] 💾 Marked as posted: Client Partner, Mid-Market (Services Acquisitions) @ reddit (instance #1)
[2026-01-20T21:43:07.432Z] [BOT] 💾 BEFORE ARCHIVING: 2968 jobs in database
[2026-01-20T21:43:07.434Z] [BOT] ✅ No jobs to archive (all 2968 jobs within 7-day window)
[2026-01-20T21:43:07.453Z] [BOT] 💾 Saved posted_jobs.json: 2968 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:07.453Z] [BOT] 📍 [ROUTING] "Counsel, Product & Platform Compliance" @ reddit
[2026-01-20T21:43:07.453Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T21:43:07.656Z] [BOT] ✅ Posted message: Counsel, Product & Platform Compliance @ reddit in #ai-jobs
[2026-01-20T21:43:07.656Z] [BOT] ✅ Industry: Counsel, Product & Platform Compliance @ reddit
[2026-01-20T21:43:07.657Z] [BOT] 💾 Added channel posting: Counsel, Product & Platform Compliance @ reddit → category channel (1 total channels)
[2026-01-20T21:43:07.657Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-20T21:43:07.659Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-20T21:43:07.675Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:09.420Z] [BOT] ✅ Posted message: Counsel, Product & Platform Compliance @ reddit in #JID_98d4f0de
[2026-01-20T21:43:09.421Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T21:43:09.421Z] [BOT] 💾 Added channel posting: Counsel, Product & Platform Compliance @ reddit → location channel (2 total channels)
[2026-01-20T21:43:09.421Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-20T21:43:09.423Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-20T21:43:09.442Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:10.944Z] [BOT] 💾 Marked as posted: Counsel, Product & Platform Compliance @ reddit (instance #1)
[2026-01-20T21:43:10.944Z] [BOT] 💾 BEFORE ARCHIVING: 2970 jobs in database
[2026-01-20T21:43:10.946Z] [BOT] ✅ No jobs to archive (all 2970 jobs within 7-day window)
[2026-01-20T21:43:10.964Z] [BOT] 💾 Saved posted_jobs.json: 2970 active jobs
[2026-01-20T21:43:10.964Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:13.965Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-20T21:43:13.966Z] [BOT] 📍 [ROUTING] "Technical Revenue Accounting" @ anthropic
[2026-01-20T21:43:13.966Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T21:43:14.225Z] [BOT] ✅ Posted message: Technical Revenue Accounting @ anthropic in #finance-jobs
  ✅ Industry: Technical Revenue Accounting @ anthropic
[2026-01-20T21:43:14.226Z] [BOT] 💾 Added channel posting: Technical Revenue Accounting @ anthropic → category channel (1 total channels)
[2026-01-20T21:43:14.226Z] [BOT] 💾 BEFORE ARCHIVING: 2971 jobs in database
[2026-01-20T21:43:14.228Z] [BOT] ✅ No jobs to archive (all 2971 jobs within 7-day window)
[2026-01-20T21:43:14.245Z] [BOT] 💾 Saved posted_jobs.json: 2971 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:15.746Z] [BOT] 💾 Marked as posted: Technical Revenue Accounting @ anthropic (instance #1)
[2026-01-20T21:43:15.747Z] [BOT] 💾 BEFORE ARCHIVING: 2972 jobs in database
[2026-01-20T21:43:15.748Z] [BOT] ✅ No jobs to archive (all 2972 jobs within 7-day window)
[2026-01-20T21:43:15.766Z] [BOT] 💾 Saved posted_jobs.json: 2972 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:15.766Z] [BOT] 📍 [ROUTING] "Director, Compute Infrastructure Procurement " @ anthropic
[2026-01-20T21:43:15.766Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T21:43:15.914Z] [BOT] ✅ Posted message: Director, Compute Infrastructure Procurement  @ anthropic in #finance-jobs
  ✅ Industry: Director, Compute Infrastructure Procurement  @ anthropic
[2026-01-20T21:43:15.914Z] [BOT] 💾 Added channel posting: Director, Compute Infrastructure Procurement  @ anthropic → category channel (1 total channels)
[2026-01-20T21:43:15.915Z] [BOT] 💾 BEFORE ARCHIVING: 2973 jobs in database
[2026-01-20T21:43:15.916Z] [BOT] ✅ No jobs to archive (all 2973 jobs within 7-day window)
[2026-01-20T21:43:15.933Z] [BOT] 💾 Saved posted_jobs.json: 2973 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:17.434Z] [BOT] 💾 Marked as posted: Director, Compute Infrastructure Procurement  @ anthropic (instance #1)
[2026-01-20T21:43:17.434Z] [BOT] 💾 BEFORE ARCHIVING: 2974 jobs in database
[2026-01-20T21:43:17.436Z] [BOT] ✅ No jobs to archive (all 2974 jobs within 7-day window)
[2026-01-20T21:43:17.452Z] [BOT] 💾 Saved posted_jobs.json: 2974 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:43:20.453Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T21:43:20.454Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_6deadf27-detail (posted within 7 days)
[2026-01-20T21:43:20.454Z] [BOT] ⏭️  Skipping duplicate: JID_d41e3b92 (posted within 7 days)
[2026-01-20T21:43:20.454Z] [BOT] ⏭️  Skipping duplicate: JID_5a1fa03b (posted within 7 days)
[2026-01-20T21:43:20.454Z] [BOT] ⏭️  Skipping duplicate: JID_fa49d8be (posted within 7 days)
[2026-01-20T21:43:20.454Z] [BOT] ⏭️  Skipping duplicate: JID_5e2048d2 (posted within 7 days)
[2026-01-20T21:43:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_6fcd7373 (posted within 7 days)
[2026-01-20T21:43:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_811cd046 (posted within 7 days)
[2026-01-20T21:43:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_7774d1e7 (posted within 7 days)
[2026-01-20T21:43:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_322b88f9 (posted within 7 days)
[2026-01-20T21:43:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_98004585 (posted within 7 days)
[2026-01-20T21:43:20.558Z] [BOT] ✅ Loaded pending queue: 2769 total (2749 pending, 20 enriched, 0 posted)
[2026-01-20T21:43:20.739Z] [BOT] ✅ Saved pending queue: 2769 total (2749 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T21:43:20.805Z] [BOT] 📂 Loaded 5502 existing routing entries
[2026-01-20T21:43:20.878Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5512
   Timestamp: 2026-01-20T21:43:20.855Z
[2026-01-20T21:43:20.879Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 15
[2026-01-20T21:43:20.879Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-20T21:43:20.879Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 3
   Top channels:
[2026-01-20T21:43:20.879Z] [BOT] 1. #ai-jobs: 8 posts
     2. #JID_98d4f0de: 5 posts
     3. #finance-jobs: 2 posts
[2026-01-20T21:43:20.880Z] [BOT] [STATS] Channel stats saved
[2026-01-20T21:43:22.906Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2447) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*