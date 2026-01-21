# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T18:26:50.602Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T18:26:09.791Z] ========================================
[2026-01-21T18:26:09.793Z] Discord Bot Execution Log
[2026-01-21T18:26:09.793Z] Environment: GitHub Actions
[2026-01-21T18:26:09.793Z] Node Version: v20.19.6
[2026-01-21T18:26:09.793Z] ========================================
[2026-01-21T18:26:09.793Z] Environment Variables Check:
[2026-01-21T18:26:09.793Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T18:26:09.793Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T18:26:09.793Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T18:26:09.793Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T18:26:09.794Z] 
Multi-Channel Configuration:
[2026-01-21T18:26:09.794Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T18:26:09.794Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T18:26:09.794Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T18:26:09.794Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T18:26:09.794Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T18:26:09.794Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T18:26:09.794Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T18:26:09.794Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T18:26:09.794Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T18:26:09.794Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T18:26:09.794Z] 
Data Files Check:
[2026-01-21T18:26:09.795Z] .github/data/new_jobs.json: ✅ Exists (10 items, 81606 bytes)
[2026-01-21T18:26:09.811Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2127763 bytes)
[2026-01-21T18:26:09.811Z] 
========================================
[2026-01-21T18:26:09.811Z] Starting Enhanced Discord Bot...
[2026-01-21T18:26:09.811Z] ========================================
[2026-01-21T18:26:10.286Z] [BOT] ✅ Loaded V2 database: 3706 jobs
[2026-01-21T18:26:10.842Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T18:26:10.842Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T18:26:10.842Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T18:26:10.998Z] [BOT] ✅ Loaded pending queue: 2769 total (2749 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist, Analytics - Ads Reporting at discord
[2026-01-21T18:26:11.002Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T18:26:11.003Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T18:26:11.003Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T18:26:11.004Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T18:26:11.004Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T18:26:11.006Z] [BOT] 📌 Posting 2 jobs to #JID_fb739488
[2026-01-21T18:26:11.007Z] [BOT] 📍 [ROUTING] "Data Scientist, Analytics - Ads Reporting" @ discord
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-21T18:26:11.007Z] [BOT] Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T18:26:11.011Z] [BOT ERROR] (node:2762) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T18:26:11.313Z] [BOT] ✅ Posted message: Data Scientist, Analytics - Ads Reporting @ discord in #JID_fb739488
[2026-01-21T18:26:11.314Z] [BOT] ✅ Industry: Data Scientist, Analytics - Ads Reporting @ discord
[2026-01-21T18:26:11.315Z] [BOT] 💾 Added channel posting: Data Scientist, Analytics - Ads Reporting @ discord → category channel (1 total channels)
[2026-01-21T18:26:11.315Z] [BOT] 💾 BEFORE ARCHIVING: 3707 jobs in database
[2026-01-21T18:26:11.318Z] [BOT] ✅ No jobs to archive (all 3707 jobs within 7-day window)
[2026-01-21T18:26:11.346Z] [BOT] 💾 Saved posted_jobs.json: 3707 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:12.847Z] [BOT] 💾 Marked as posted: Data Scientist, Analytics - Ads Reporting @ discord (instance #1)
[2026-01-21T18:26:12.847Z] [BOT] 💾 BEFORE ARCHIVING: 3708 jobs in database
[2026-01-21T18:26:12.849Z] [BOT] ✅ No jobs to archive (all 3708 jobs within 7-day window)
[2026-01-21T18:26:12.871Z] [BOT] 💾 Saved posted_jobs.json: 3708 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:12.872Z] [BOT] 📍 [ROUTING] "Senior Data Scientist, Analytics - GTM Ads" @ discord
[2026-01-21T18:26:12.872Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
[2026-01-21T18:26:12.872Z] [BOT] Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T18:26:13.144Z] [BOT] ✅ Posted message: Senior Data Scientist, Analytics - GTM Ads @ discord in #JID_fb739488
[2026-01-21T18:26:13.144Z] [BOT] ✅ Industry: Senior Data Scientist, Analytics - GTM Ads @ discord
[2026-01-21T18:26:13.145Z] [BOT] 💾 Added channel posting: Senior Data Scientist, Analytics - GTM Ads @ discord → category channel (1 total channels)
[2026-01-21T18:26:13.145Z] [BOT] 💾 BEFORE ARCHIVING: 3709 jobs in database
[2026-01-21T18:26:13.147Z] [BOT] ✅ No jobs to archive (all 3709 jobs within 7-day window)
[2026-01-21T18:26:13.170Z] [BOT] 💾 Saved posted_jobs.json: 3709 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:14.672Z] [BOT] 💾 Marked as posted: Senior Data Scientist, Analytics - GTM Ads @ discord (instance #1)
[2026-01-21T18:26:14.672Z] [BOT] 💾 BEFORE ARCHIVING: 3710 jobs in database
[2026-01-21T18:26:14.674Z] [BOT] ✅ No jobs to archive (all 3710 jobs within 7-day window)
[2026-01-21T18:26:14.698Z] [BOT] 💾 Saved posted_jobs.json: 3710 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:17.699Z] [BOT] 📌 Posting 4 jobs to #tech-jobs
[2026-01-21T18:26:17.699Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Quest Experiences" @ discord
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T18:26:18.030Z] [BOT] ✅ Posted message: Staff Software Engineer, Quest Experiences @ discord in #tech-jobs
  ✅ Industry: Staff Software Engineer, Quest Experiences @ discord
[2026-01-21T18:26:18.031Z] [BOT] 💾 Added channel posting: Staff Software Engineer, Quest Experiences @ discord → category channel (1 total channels)
[2026-01-21T18:26:18.031Z] [BOT] 💾 BEFORE ARCHIVING: 3711 jobs in database
[2026-01-21T18:26:18.033Z] [BOT] ✅ No jobs to archive (all 3711 jobs within 7-day window)
[2026-01-21T18:26:18.054Z] [BOT] 💾 Saved posted_jobs.json: 3711 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:19.556Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Quest Experiences @ discord (instance #1)
[2026-01-21T18:26:19.556Z] [BOT] 💾 BEFORE ARCHIVING: 3712 jobs in database
[2026-01-21T18:26:19.558Z] [BOT] ✅ No jobs to archive (all 3712 jobs within 7-day window)
[2026-01-21T18:26:19.584Z] [BOT] 💾 Saved posted_jobs.json: 3712 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:19.584Z] [BOT] 📍 [ROUTING] "Software Engineering Associate" @ ORG_c3f8f1e2 Insurance
   Category: TECH (matched: "software")
[2026-01-21T18:26:19.584Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T18:26:19.828Z] [BOT] ✅ Posted message: Software Engineering Associate @ ORG_c3f8f1e2 Insurance in #tech-jobs
  ✅ Industry: Software Engineering Associate @ ORG_c3f8f1e2 Insurance
[2026-01-21T18:26:19.829Z] [BOT] 💾 Added channel posting: Software Engineering Associate @ ORG_c3f8f1e2 Insurance → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3713 jobs in database
[2026-01-21T18:26:19.831Z] [BOT] ✅ No jobs to archive (all 3713 jobs within 7-day window)
[2026-01-21T18:26:19.857Z] [BOT] 💾 Saved posted_jobs.json: 3713 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:21.539Z] [BOT] ✅ Posted message: Software Engineering Associate @ ORG_c3f8f1e2 Insurance in #JID_ead674af
[2026-01-21T18:26:21.539Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T18:26:21.540Z] [BOT] 💾 Added channel posting: Software Engineering Associate @ ORG_c3f8f1e2 Insurance → location channel (2 total channels)
[2026-01-21T18:26:21.540Z] [BOT] 💾 BEFORE ARCHIVING: 3713 jobs in database
[2026-01-21T18:26:21.543Z] [BOT] ✅ No jobs to archive (all 3713 jobs within 7-day window)
[2026-01-21T18:26:21.568Z] [BOT] 💾 Saved posted_jobs.json: 3713 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:23.069Z] [BOT] 💾 Marked as posted: Software Engineering Associate @ ORG_c3f8f1e2 Insurance (instance #1)
[2026-01-21T18:26:23.069Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T18:26:23.071Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T18:26:23.096Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:23.097Z] [BOT] 📍 [ROUTING] "Analyst – Customer Insights" @ ORG_85aef4c3
[2026-01-21T18:26:23.097Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T18:26:23.288Z] [BOT] ✅ Posted message: Analyst – Customer Insights @ ORG_85aef4c3 in #tech-jobs
  ✅ Industry: Analyst – Customer Insights @ ORG_85aef4c3
[2026-01-21T18:26:23.289Z] [BOT] 💾 Added channel posting: Analyst – Customer Insights @ ORG_85aef4c3 → category channel (1 total channels)
[2026-01-21T18:26:23.289Z] [BOT] 💾 BEFORE ARCHIVING: 3715 jobs in database
[2026-01-21T18:26:23.292Z] [BOT] ✅ No jobs to archive (all 3715 jobs within 7-day window)
[2026-01-21T18:26:23.315Z] [BOT] 💾 Saved posted_jobs.json: 3715 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:25.048Z] [BOT] ✅ Posted message: Analyst – Customer Insights @ ORG_85aef4c3 in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T18:26:25.049Z] [BOT] 💾 Added channel posting: Analyst – Customer Insights @ ORG_85aef4c3 → location channel (2 total channels)
[2026-01-21T18:26:25.049Z] [BOT] 💾 BEFORE ARCHIVING: 3715 jobs in database
[2026-01-21T18:26:25.051Z] [BOT] ✅ No jobs to archive (all 3715 jobs within 7-day window)
[2026-01-21T18:26:25.078Z] [BOT] 💾 Saved posted_jobs.json: 3715 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:26.580Z] [BOT] 💾 Marked as posted: Analyst – Customer Insights @ ORG_85aef4c3 (instance #1)
[2026-01-21T18:26:26.580Z] [BOT] 💾 BEFORE ARCHIVING: 3716 jobs in database
[2026-01-21T18:26:26.583Z] [BOT] ✅ No jobs to archive (all 3716 jobs within 7-day window)
[2026-01-21T18:26:26.605Z] [BOT] 💾 Saved posted_jobs.json: 3716 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:26.606Z] [BOT] 📍 [ROUTING] "Software Engineer – May Graduates" @ ORG_6b607b1f
   Category: TECH (matched: "software")
[2026-01-21T18:26:26.606Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T18:26:27.008Z] [BOT] ✅ Posted message: Software Engineer – May Graduates @ ORG_6b607b1f in #tech-jobs
  ✅ Industry: Software Engineer – May Graduates @ ORG_6b607b1f
[2026-01-21T18:26:27.009Z] [BOT] 💾 Added channel posting: Software Engineer – May Graduates @ ORG_6b607b1f → category channel (1 total channels)
[2026-01-21T18:26:27.009Z] [BOT] 💾 BEFORE ARCHIVING: 3717 jobs in database
[2026-01-21T18:26:27.011Z] [BOT] ✅ No jobs to archive (all 3717 jobs within 7-day window)
[2026-01-21T18:26:27.036Z] [BOT] 💾 Saved posted_jobs.json: 3717 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:28.801Z] [BOT] ✅ Posted message: Software Engineer – May Graduates @ ORG_6b607b1f in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T18:26:28.802Z] [BOT] 💾 Added channel posting: Software Engineer – May Graduates @ ORG_6b607b1f → location channel (2 total channels)
[2026-01-21T18:26:28.802Z] [BOT] 💾 BEFORE ARCHIVING: 3717 jobs in database
[2026-01-21T18:26:28.804Z] [BOT] ✅ No jobs to archive (all 3717 jobs within 7-day window)
[2026-01-21T18:26:28.827Z] [BOT] 💾 Saved posted_jobs.json: 3717 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:30.329Z] [BOT] 💾 Marked as posted: Software Engineer – May Graduates @ ORG_6b607b1f (instance #1)
[2026-01-21T18:26:30.329Z] [BOT] 💾 BEFORE ARCHIVING: 3718 jobs in database
[2026-01-21T18:26:30.331Z] [BOT] ✅ No jobs to archive (all 3718 jobs within 7-day window)
[2026-01-21T18:26:30.356Z] [BOT] 💾 Saved posted_jobs.json: 3718 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:33.357Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T18:26:33.358Z] [BOT] 📍 [ROUTING] "Associate Data Science" @ ORG_ae835968 media
[2026-01-21T18:26:33.358Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T18:26:33.695Z] [BOT] ✅ Posted message: Associate Data Science @ ORG_ae835968 media in #ai-jobs
  ✅ Industry: Associate Data Science @ ORG_ae835968 media
[2026-01-21T18:26:33.696Z] [BOT] 💾 Added channel posting: Associate Data Science @ ORG_ae835968 media → category channel (1 total channels)
[2026-01-21T18:26:33.696Z] [BOT] 💾 BEFORE ARCHIVING: 3719 jobs in database
[2026-01-21T18:26:33.698Z] [BOT] ✅ No jobs to archive (all 3719 jobs within 7-day window)
[2026-01-21T18:26:33.721Z] [BOT] 💾 Saved posted_jobs.json: 3719 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:35.486Z] [BOT] ✅ Posted message: Associate Data Science @ ORG_ae835968 media in #JID_98d4f0de
[2026-01-21T18:26:35.486Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T18:26:35.487Z] [BOT] 💾 Added channel posting: Associate Data Science @ ORG_ae835968 media → location channel (2 total channels)
[2026-01-21T18:26:35.487Z] [BOT] 💾 BEFORE ARCHIVING: 3719 jobs in database
[2026-01-21T18:26:35.489Z] [BOT] ✅ No jobs to archive (all 3719 jobs within 7-day window)
[2026-01-21T18:26:35.511Z] [BOT] 💾 Saved posted_jobs.json: 3719 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:37.011Z] [BOT] 💾 Marked as posted: Associate Data Science @ ORG_ae835968 media (instance #1)
💾 BEFORE ARCHIVING: 3720 jobs in database
[2026-01-21T18:26:37.014Z] [BOT] ✅ No jobs to archive (all 3720 jobs within 7-day window)
[2026-01-21T18:26:37.037Z] [BOT] 💾 Saved posted_jobs.json: 3720 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:37.038Z] [BOT] 📍 [ROUTING] "Staff Analytics Engineer" @ gohighlevel
   Category: AI (matched: "artificial intelligence")
[2026-01-21T18:26:37.038Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T18:26:37.213Z] [BOT] ✅ Posted message: Staff Analytics Engineer @ gohighlevel in #ai-jobs
[2026-01-21T18:26:37.213Z] [BOT] ✅ Industry: Staff Analytics Engineer @ gohighlevel
[2026-01-21T18:26:37.214Z] [BOT] 💾 Added channel posting: Staff Analytics Engineer @ gohighlevel → category channel (1 total channels)
[2026-01-21T18:26:37.214Z] [BOT] 💾 BEFORE ARCHIVING: 3721 jobs in database
[2026-01-21T18:26:37.216Z] [BOT] ✅ No jobs to archive (all 3721 jobs within 7-day window)
[2026-01-21T18:26:37.238Z] [BOT] 💾 Saved posted_jobs.json: 3721 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:38.740Z] [BOT] 💾 Marked as posted: Staff Analytics Engineer @ gohighlevel (instance #1)
[2026-01-21T18:26:38.740Z] [BOT] 💾 BEFORE ARCHIVING: 3722 jobs in database
[2026-01-21T18:26:38.743Z] [BOT] ✅ No jobs to archive (all 3722 jobs within 7-day window)
[2026-01-21T18:26:38.766Z] [BOT] 💾 Saved posted_jobs.json: 3722 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:38.767Z] [BOT] 📍 [ROUTING] "Senior Systems Engineer - Corporate Systems" @ ORG_9379ad87 International
   Category: AI (matched: "machine learning")
[2026-01-21T18:26:38.767Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T18:26:39.043Z] [BOT] ✅ Posted message: Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International in #ai-jobs
[2026-01-21T18:26:39.043Z] [BOT] ✅ Industry: Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International
[2026-01-21T18:26:39.044Z] [BOT] 💾 Added channel posting: Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International → category channel (1 total channels)
[2026-01-21T18:26:39.044Z] [BOT] 💾 BEFORE ARCHIVING: 3723 jobs in database
[2026-01-21T18:26:39.046Z] [BOT] ✅ No jobs to archive (all 3723 jobs within 7-day window)
[2026-01-21T18:26:39.069Z] [BOT] 💾 Saved posted_jobs.json: 3723 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:40.816Z] [BOT] ✅ Posted message: Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International in #JID_ead674af
[2026-01-21T18:26:40.817Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T18:26:40.817Z] [BOT] 💾 Added channel posting: Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International → location channel (2 total channels)
[2026-01-21T18:26:40.817Z] [BOT] 💾 BEFORE ARCHIVING: 3723 jobs in database
[2026-01-21T18:26:40.820Z] [BOT] ✅ No jobs to archive (all 3723 jobs within 7-day window)
[2026-01-21T18:26:40.842Z] [BOT] 💾 Saved posted_jobs.json: 3723 active jobs
[2026-01-21T18:26:40.842Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:42.344Z] [BOT] 💾 Marked as posted: Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International (instance #1)
[2026-01-21T18:26:42.344Z] [BOT] 💾 BEFORE ARCHIVING: 3724 jobs in database
[2026-01-21T18:26:42.346Z] [BOT] ✅ No jobs to archive (all 3724 jobs within 7-day window)
[2026-01-21T18:26:42.369Z] [BOT] 💾 Saved posted_jobs.json: 3724 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:42.369Z] [BOT] 📍 [ROUTING] "AI Developer" @ ORG_8fc44164 Consulting
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T18:26:42.369Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T18:26:42.834Z] [BOT] ✅ Posted message: AI Developer @ ORG_8fc44164 Consulting in #ai-jobs
  ✅ Industry: AI Developer @ ORG_8fc44164 Consulting
[2026-01-21T18:26:42.835Z] [BOT] 💾 Added channel posting: AI Developer @ ORG_8fc44164 Consulting → category channel (1 total channels)
[2026-01-21T18:26:42.835Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T18:26:42.838Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T18:26:42.861Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:44.361Z] [BOT] 💾 Marked as posted: AI Developer @ ORG_8fc44164 Consulting (instance #1)
[2026-01-21T18:26:44.362Z] [BOT] 💾 BEFORE ARCHIVING: 3726 jobs in database
[2026-01-21T18:26:44.364Z] [BOT] ✅ No jobs to archive (all 3726 jobs within 7-day window)
[2026-01-21T18:26:44.387Z] [BOT] 💾 Saved posted_jobs.json: 3726 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:26:47.388Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T18:26:47.389Z] [BOT] ⏭️  Skipping duplicate: JID_e3d43b6a (posted within 7 days)
[2026-01-21T18:26:47.390Z] [BOT] ⏭️  Skipping duplicate: JID_68d1a4d6 (posted within 7 days)
[2026-01-21T18:26:47.390Z] [BOT] ⏭️  Skipping duplicate: JID_62f2a8da (posted within 7 days)
[2026-01-21T18:26:47.390Z] [BOT] ⏭️  Skipping duplicate: JID_aa958bc9-science_r0016354 (posted within 7 days)
[2026-01-21T18:26:47.390Z] [BOT] ⏭️  Skipping duplicate: JID_773e7b6d-associate_347265 (posted within 7 days)
[2026-01-21T18:26:47.390Z] [BOT] ⏭️  Skipping duplicate: JID_6e5d6b65-us_corporate_jobs-JID_c1613c68-insights_r-2019782 (posted within 7 days)
[2026-01-21T18:26:47.391Z] [BOT] ⏭️  Skipping duplicate: JID_7845e4eb (posted within 7 days)
[2026-01-21T18:26:47.391Z] [BOT] ⏭️  Skipping duplicate: JID_25436736 (posted within 7 days)
[2026-01-21T18:26:47.391Z] [BOT] ⏭️  Skipping duplicate: JID_e3e16e88 (posted within 7 days)
[2026-01-21T18:26:47.391Z] [BOT] ⏭️  Skipping duplicate: JID_059fdb40 (posted within 7 days)
[2026-01-21T18:26:47.533Z] [BOT] ✅ Loaded pending queue: 2769 total (2749 pending, 20 enriched, 0 posted)
[2026-01-21T18:26:47.704Z] [BOT] ✅ Saved pending queue: 2769 total (2749 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T18:26:47.773Z] [BOT] 📂 Loaded 6011 existing routing entries
[2026-01-21T18:26:47.846Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6021
   Timestamp: 2026-01-21T18:26:47.824Z
[2026-01-21T18:26:47.848Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 4 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_fb739488: 2 posts
     5. #JID_98d4f0de: 2 posts
[STATS] Channel stats saved
[2026-01-21T18:26:49.865Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2762) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*