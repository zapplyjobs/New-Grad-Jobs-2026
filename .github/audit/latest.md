# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T19:50:34.924Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T19:49:51.838Z] ========================================
[2026-01-21T19:49:51.840Z] Discord Bot Execution Log
[2026-01-21T19:49:51.840Z] Environment: GitHub Actions
[2026-01-21T19:49:51.840Z] Node Version: v20.19.6
[2026-01-21T19:49:51.840Z] ========================================
[2026-01-21T19:49:51.840Z] Environment Variables Check:
[2026-01-21T19:49:51.840Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T19:49:51.840Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T19:49:51.840Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T19:49:51.840Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T19:49:51.841Z] 
Multi-Channel Configuration:
[2026-01-21T19:49:51.841Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T19:49:51.841Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T19:49:51.841Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T19:49:51.841Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T19:49:51.841Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T19:49:51.841Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T19:49:51.841Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T19:49:51.841Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T19:49:51.841Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T19:49:51.841Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T19:49:51.841Z] 
Data Files Check:
[2026-01-21T19:49:51.843Z] .github/data/new_jobs.json: ✅ Exists (10 items, 103820 bytes)
[2026-01-21T19:49:51.857Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2156894 bytes)
[2026-01-21T19:49:51.857Z] 
========================================
[2026-01-21T19:49:51.857Z] Starting Enhanced Discord Bot...
[2026-01-21T19:49:51.857Z] ========================================
[2026-01-21T19:49:52.411Z] [BOT] ✅ Loaded V2 database: 3747 jobs
[2026-01-21T19:49:53.056Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T19:49:53.057Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T19:49:53.057Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T19:49:53.178Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Collections Specialist at Louisiana State University (LSU)
[2026-01-21T19:49:53.183Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T19:49:53.183Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T19:49:53.183Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T19:49:53.184Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T19:49:53.185Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T19:49:53.188Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-21T19:49:53.188Z] [BOT] 📍 [ROUTING] "Data Collections Specialist" @ ORG_0aa5052d State University (LSU)
[2026-01-21T19:49:53.188Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T19:49:53.206Z] [BOT ERROR] (node:2917) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T19:49:53.591Z] [BOT] ✅ Posted message: Data Collections Specialist @ ORG_0aa5052d State University (LSU) in #tech-jobs
[2026-01-21T19:49:53.592Z] [BOT] ✅ Industry: Data Collections Specialist @ ORG_0aa5052d State University (LSU)
[2026-01-21T19:49:53.593Z] [BOT] 💾 Added channel posting: Data Collections Specialist @ ORG_0aa5052d State University (LSU) → category channel (1 total channels)
[2026-01-21T19:49:53.593Z] [BOT] 💾 BEFORE ARCHIVING: 3748 jobs in database
[2026-01-21T19:49:53.596Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T19:49:53.608Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T19:49:53.608Z] [BOT] ✅ Archiving complete: 10 archived, 3738 active
[2026-01-21T19:49:53.633Z] [BOT] 💾 Saved posted_jobs.json: 3738 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:49:55.413Z] [BOT] ✅ Posted message: Data Collections Specialist @ ORG_0aa5052d State University (LSU) in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T19:49:55.413Z] [BOT] 💾 Added channel posting: Data Collections Specialist @ ORG_0aa5052d State University (LSU) → location channel (2 total channels)
[2026-01-21T19:49:55.414Z] [BOT] 💾 BEFORE ARCHIVING: 3738 jobs in database
[2026-01-21T19:49:55.416Z] [BOT] ✅ No jobs to archive (all 3738 jobs within 7-day window)
[2026-01-21T19:49:55.441Z] [BOT] 💾 Saved posted_jobs.json: 3738 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:49:56.943Z] [BOT] 💾 Marked as posted: Data Collections Specialist @ ORG_0aa5052d State University (LSU) (instance #1)
[2026-01-21T19:49:56.943Z] [BOT] 💾 BEFORE ARCHIVING: 3739 jobs in database
[2026-01-21T19:49:56.946Z] [BOT] ✅ No jobs to archive (all 3739 jobs within 7-day window)
[2026-01-21T19:49:56.972Z] [BOT] 💾 Saved posted_jobs.json: 3739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:49:56.972Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager, Nitro" @ discord
[2026-01-21T19:49:56.972Z] [BOT] Category: TECH (matched: "product marketing")
   Channel: tech-jobs (1462...4987)
[2026-01-21T19:49:57.209Z] [BOT] ✅ Posted message: Senior Product Marketing Manager, Nitro @ discord in #tech-jobs
[2026-01-21T19:49:57.209Z] [BOT] ✅ Industry: Senior Product Marketing Manager, Nitro @ discord
[2026-01-21T19:49:57.210Z] [BOT] 💾 Added channel posting: Senior Product Marketing Manager, Nitro @ discord → category channel (1 total channels)
[2026-01-21T19:49:57.210Z] [BOT] 💾 BEFORE ARCHIVING: 3740 jobs in database
[2026-01-21T19:49:57.212Z] [BOT] ✅ No jobs to archive (all 3740 jobs within 7-day window)
[2026-01-21T19:49:57.239Z] [BOT] 💾 Saved posted_jobs.json: 3740 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:49:58.741Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager, Nitro @ discord (instance #1)
[2026-01-21T19:49:58.741Z] [BOT] 💾 BEFORE ARCHIVING: 3741 jobs in database
[2026-01-21T19:49:58.743Z] [BOT] ✅ No jobs to archive (all 3741 jobs within 7-day window)
[2026-01-21T19:49:58.766Z] [BOT] 💾 Saved posted_jobs.json: 3741 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:49:58.766Z] [BOT] 📍 [ROUTING] "Microsoft GTM Partnership, Enterprise" @ anthropic
[2026-01-21T19:49:58.767Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T19:49:59.146Z] [BOT] ✅ Posted message: Microsoft GTM Partnership, Enterprise @ anthropic in #tech-jobs
[2026-01-21T19:49:59.146Z] [BOT] ✅ Industry: Microsoft GTM Partnership, Enterprise @ anthropic
[2026-01-21T19:49:59.146Z] [BOT] 💾 Added channel posting: Microsoft GTM Partnership, Enterprise @ anthropic → category channel (1 total channels)
[2026-01-21T19:49:59.147Z] [BOT] 💾 BEFORE ARCHIVING: 3742 jobs in database
[2026-01-21T19:49:59.149Z] [BOT] ✅ No jobs to archive (all 3742 jobs within 7-day window)
[2026-01-21T19:49:59.174Z] [BOT] 💾 Saved posted_jobs.json: 3742 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:00.674Z] [BOT] 💾 Marked as posted: Microsoft GTM Partnership, Enterprise @ anthropic (instance #1)
[2026-01-21T19:50:00.674Z] [BOT] 💾 BEFORE ARCHIVING: 3743 jobs in database
[2026-01-21T19:50:00.677Z] [BOT] ✅ No jobs to archive (all 3743 jobs within 7-day window)
[2026-01-21T19:50:00.698Z] [BOT] 💾 Saved posted_jobs.json: 3743 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:03.700Z] [BOT] 📌 Posting 5 jobs to #ai-jobs
[2026-01-21T19:50:03.700Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_2ea541c5
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T19:50:03.700Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T19:50:03.945Z] [BOT] ✅ Posted message: Data Analyst @ ORG_2ea541c5 in #ai-jobs
[2026-01-21T19:50:03.946Z] [BOT] ✅ Industry: Data Analyst @ ORG_2ea541c5
[2026-01-21T19:50:03.947Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_2ea541c5 → category channel (1 total channels)
[2026-01-21T19:50:03.947Z] [BOT] 💾 BEFORE ARCHIVING: 3744 jobs in database
[2026-01-21T19:50:03.949Z] [BOT] ✅ No jobs to archive (all 3744 jobs within 7-day window)
[2026-01-21T19:50:03.972Z] [BOT] 💾 Saved posted_jobs.json: 3744 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:05.474Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_2ea541c5 (instance #1)
[2026-01-21T19:50:05.474Z] [BOT] 💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T19:50:05.477Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T19:50:05.499Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:05.499Z] [BOT] 📍 [ROUTING] "Data Science Level 2 - Advanced AI - NLP" @ ORG_a6a32dbc
[2026-01-21T19:50:05.499Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T19:50:05.682Z] [BOT] ✅ Posted message: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc in #ai-jobs
[2026-01-21T19:50:05.682Z] [BOT] ✅ Industry: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc
[2026-01-21T19:50:05.682Z] [BOT] 💾 Added channel posting: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc → category channel (1 total channels)
[2026-01-21T19:50:05.682Z] [BOT] 💾 BEFORE ARCHIVING: 3746 jobs in database
[2026-01-21T19:50:05.685Z] [BOT] ✅ No jobs to archive (all 3746 jobs within 7-day window)
[2026-01-21T19:50:05.708Z] [BOT] 💾 Saved posted_jobs.json: 3746 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:07.706Z] [BOT] ✅ Posted message: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc in #JID_ead674af
[2026-01-21T19:50:07.706Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T19:50:07.707Z] [BOT] 💾 Added channel posting: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc → location channel (2 total channels)
[2026-01-21T19:50:07.707Z] [BOT] 💾 BEFORE ARCHIVING: 3746 jobs in database
[2026-01-21T19:50:07.710Z] [BOT] ✅ No jobs to archive (all 3746 jobs within 7-day window)
[2026-01-21T19:50:07.733Z] [BOT] 💾 Saved posted_jobs.json: 3746 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:09.234Z] [BOT] 💾 Marked as posted: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc (instance #1)
[2026-01-21T19:50:09.234Z] [BOT] 💾 BEFORE ARCHIVING: 3747 jobs in database
[2026-01-21T19:50:09.236Z] [BOT] ✅ No jobs to archive (all 3747 jobs within 7-day window)
[2026-01-21T19:50:09.259Z] [BOT] 💾 Saved posted_jobs.json: 3747 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:09.259Z] [BOT] 📍 [ROUTING] "Cryptoanalyst Level 2 - CCA allowed" @ ORG_a6a32dbc
[2026-01-21T19:50:09.259Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-21T19:50:09.479Z] [BOT] ✅ Posted message: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc in #ai-jobs
  ✅ Industry: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc
[2026-01-21T19:50:09.480Z] [BOT] 💾 Added channel posting: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc → category channel (1 total channels)
[2026-01-21T19:50:09.480Z] [BOT] 💾 BEFORE ARCHIVING: 3748 jobs in database
[2026-01-21T19:50:09.482Z] [BOT] ✅ No jobs to archive (all 3748 jobs within 7-day window)
[2026-01-21T19:50:09.504Z] [BOT] 💾 Saved posted_jobs.json: 3748 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:11.380Z] [BOT] ✅ Posted message: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T19:50:11.381Z] [BOT] 💾 Added channel posting: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc → location channel (2 total channels)
[2026-01-21T19:50:11.381Z] [BOT] 💾 BEFORE ARCHIVING: 3748 jobs in database
[2026-01-21T19:50:11.383Z] [BOT] ✅ No jobs to archive (all 3748 jobs within 7-day window)
[2026-01-21T19:50:11.405Z] [BOT] 💾 Saved posted_jobs.json: 3748 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:12.907Z] [BOT] 💾 Marked as posted: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc (instance #1)
[2026-01-21T19:50:12.907Z] [BOT] 💾 BEFORE ARCHIVING: 3749 jobs in database
[2026-01-21T19:50:12.910Z] [BOT] ✅ No jobs to archive (all 3749 jobs within 7-day window)
[2026-01-21T19:50:12.932Z] [BOT] 💾 Saved posted_jobs.json: 3749 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:12.933Z] [BOT] 📍 [ROUTING] "Manager, Sales Operations – Commissions" @ spotify
[2026-01-21T19:50:12.933Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T19:50:13.186Z] [BOT] ✅ Posted message: Manager, Sales Operations – Commissions @ spotify in #ai-jobs
[2026-01-21T19:50:13.187Z] [BOT] ✅ Industry: Manager, Sales Operations – Commissions @ spotify
[2026-01-21T19:50:13.187Z] [BOT] 💾 Added channel posting: Manager, Sales Operations – Commissions @ spotify → category channel (1 total channels)
[2026-01-21T19:50:13.187Z] [BOT] 💾 BEFORE ARCHIVING: 3750 jobs in database
[2026-01-21T19:50:13.190Z] [BOT] ✅ No jobs to archive (all 3750 jobs within 7-day window)
[2026-01-21T19:50:13.211Z] [BOT] 💾 Saved posted_jobs.json: 3750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:14.983Z] [BOT] ✅ Posted message: Manager, Sales Operations – Commissions @ spotify in #JID_98d4f0de
[2026-01-21T19:50:14.983Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T19:50:14.984Z] [BOT] 💾 Added channel posting: Manager, Sales Operations – Commissions @ spotify → location channel (2 total channels)
[2026-01-21T19:50:14.984Z] [BOT] 💾 BEFORE ARCHIVING: 3750 jobs in database
[2026-01-21T19:50:14.987Z] [BOT] ✅ No jobs to archive (all 3750 jobs within 7-day window)
[2026-01-21T19:50:15.013Z] [BOT] 💾 Saved posted_jobs.json: 3750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:16.516Z] [BOT] 💾 Marked as posted: Manager, Sales Operations – Commissions @ spotify (instance #1)
[2026-01-21T19:50:16.516Z] [BOT] 💾 BEFORE ARCHIVING: 3751 jobs in database
[2026-01-21T19:50:16.518Z] [BOT] ✅ No jobs to archive (all 3751 jobs within 7-day window)
[2026-01-21T19:50:16.549Z] [BOT] 💾 Saved posted_jobs.json: 3751 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:16.550Z] [BOT] 📍 [ROUTING] "Finance Systems Integration Engineer" @ anthropic
[2026-01-21T19:50:16.550Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T19:50:16.896Z] [BOT] ✅ Posted message: Finance Systems Integration Engineer @ anthropic in #ai-jobs
[2026-01-21T19:50:16.896Z] [BOT] ✅ Industry: Finance Systems Integration Engineer @ anthropic
[2026-01-21T19:50:16.897Z] [BOT] 💾 Added channel posting: Finance Systems Integration Engineer @ anthropic → category channel (1 total channels)
[2026-01-21T19:50:16.897Z] [BOT] 💾 BEFORE ARCHIVING: 3752 jobs in database
[2026-01-21T19:50:16.899Z] [BOT] ✅ No jobs to archive (all 3752 jobs within 7-day window)
[2026-01-21T19:50:16.926Z] [BOT] 💾 Saved posted_jobs.json: 3752 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:18.427Z] [BOT] 💾 Marked as posted: Finance Systems Integration Engineer @ anthropic (instance #1)
[2026-01-21T19:50:18.428Z] [BOT] 💾 BEFORE ARCHIVING: 3753 jobs in database
[2026-01-21T19:50:18.430Z] [BOT] ✅ No jobs to archive (all 3753 jobs within 7-day window)
[2026-01-21T19:50:18.454Z] [BOT] 💾 Saved posted_jobs.json: 3753 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:21.456Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T19:50:21.456Z] [BOT] 📍 [ROUTING] "Product Manager, Core Product" @ discord
[2026-01-21T19:50:21.456Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-21T19:50:21.736Z] [BOT] ✅ Posted message: Product Manager, Core Product @ discord in #JID_fb739488
[2026-01-21T19:50:21.736Z] [BOT] ✅ Industry: Product Manager, Core Product @ discord
[2026-01-21T19:50:21.737Z] [BOT] 💾 Added channel posting: Product Manager, Core Product @ discord → category channel (1 total channels)
[2026-01-21T19:50:21.737Z] [BOT] 💾 BEFORE ARCHIVING: 3754 jobs in database
[2026-01-21T19:50:21.740Z] [BOT] ✅ No jobs to archive (all 3754 jobs within 7-day window)
[2026-01-21T19:50:21.764Z] [BOT] 💾 Saved posted_jobs.json: 3754 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:23.265Z] [BOT] 💾 Marked as posted: Product Manager, Core Product @ discord (instance #1)
[2026-01-21T19:50:23.266Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T19:50:23.268Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T19:50:23.292Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:26.293Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T19:50:26.294Z] [BOT] 📍 [ROUTING] "Senior CES Operations Manager" @ figma
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T19:50:26.599Z] [BOT] ✅ Posted message: Senior CES Operations Manager @ figma in #finance-jobs
  ✅ Industry: Senior CES Operations Manager @ figma
[2026-01-21T19:50:26.600Z] [BOT] 💾 Added channel posting: Senior CES Operations Manager @ figma → category channel (1 total channels)
[2026-01-21T19:50:26.601Z] [BOT] 💾 BEFORE ARCHIVING: 3756 jobs in database
[2026-01-21T19:50:26.603Z] [BOT] ✅ No jobs to archive (all 3756 jobs within 7-day window)
[2026-01-21T19:50:26.628Z] [BOT] 💾 Saved posted_jobs.json: 3756 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:28.130Z] [BOT] 💾 Marked as posted: Senior CES Operations Manager @ figma (instance #1)
[2026-01-21T19:50:28.130Z] [BOT] 💾 BEFORE ARCHIVING: 3757 jobs in database
[2026-01-21T19:50:28.132Z] [BOT] ✅ No jobs to archive (all 3757 jobs within 7-day window)
[2026-01-21T19:50:28.155Z] [BOT] 💾 Saved posted_jobs.json: 3757 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:50:31.156Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T19:50:31.157Z] [BOT] ⏭️  Skipping duplicate: JID_e6dfcdcd-specialist_r00111435-1 (posted within 7 days)
[2026-01-21T19:50:31.158Z] [BOT] ⏭️  Skipping duplicate: JID_4d0b0565 (posted within 7 days)
[2026-01-21T19:50:31.158Z] [BOT] ⏭️  Skipping duplicate: JID_e093c9c0 (posted within 7 days)
[2026-01-21T19:50:31.158Z] [BOT] ⏭️  Skipping duplicate: JID_7efa0dae (posted within 7 days)
[2026-01-21T19:50:31.158Z] [BOT] ⏭️  Skipping duplicate: JID_be985fce (posted within 7 days)
[2026-01-21T19:50:31.158Z] [BOT] ⏭️  Skipping duplicate: JID_ee6462dd (posted within 7 days)
[2026-01-21T19:50:31.159Z] [BOT] ⏭️  Skipping duplicate: JID_77c1d578 (posted within 7 days)
[2026-01-21T19:50:31.159Z] [BOT] ⏭️  Skipping duplicate: JID_3a16f5b7 (posted within 7 days)
[2026-01-21T19:50:31.159Z] [BOT] ⏭️  Skipping duplicate: JID_55a5b826 (posted within 7 days)
[2026-01-21T19:50:31.159Z] [BOT] ⏭️  Skipping duplicate: JID_eb54c2b6 (posted within 7 days)
[2026-01-21T19:50:31.268Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[2026-01-21T19:50:31.465Z] [BOT] ✅ Saved pending queue: 2766 total (2746 pending, 10 enriched, 10 posted)
[2026-01-21T19:50:31.465Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T19:50:31.531Z] [BOT] 📂 Loaded 6051 existing routing entries
[2026-01-21T19:50:31.614Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6061
   Timestamp: 2026-01-21T19:50:31.585Z
[2026-01-21T19:50:31.614Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T19:50:31.615Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-21T19:50:31.615Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 6
   Top channels:
[2026-01-21T19:50:31.615Z] [BOT] 1. #ai-jobs: 5 posts
     2. #tech-jobs: 3 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 1 posts
     5. #JID_fb739488: 1 posts
[2026-01-21T19:50:31.615Z] [BOT] [STATS] Channel stats saved
[2026-01-21T19:50:33.644Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2917) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*