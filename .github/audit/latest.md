# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T04:03:33.303Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T04:02:54.594Z] ========================================
[2026-01-21T04:02:54.596Z] Discord Bot Execution Log
[2026-01-21T04:02:54.596Z] Environment: GitHub Actions
[2026-01-21T04:02:54.596Z] Node Version: v20.19.6
[2026-01-21T04:02:54.596Z] ========================================
[2026-01-21T04:02:54.596Z] Environment Variables Check:
[2026-01-21T04:02:54.596Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T04:02:54.597Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T04:02:54.597Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T04:02:54.597Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T04:02:54.597Z] 
Multi-Channel Configuration:
[2026-01-21T04:02:54.597Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T04:02:54.597Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T04:02:54.597Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T04:02:54.597Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T04:02:54.597Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T04:02:54.597Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T04:02:54.597Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T04:02:54.597Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T04:02:54.597Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T04:02:54.598Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T04:02:54.598Z] 
Data Files Check:
[2026-01-21T04:02:54.599Z] .github/data/new_jobs.json: ✅ Exists (10 items, 71192 bytes)
[2026-01-21T04:02:54.610Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1741835 bytes)
[2026-01-21T04:02:54.610Z] 
========================================
[2026-01-21T04:02:54.610Z] Starting Enhanced Discord Bot...
[2026-01-21T04:02:54.610Z] ========================================
[2026-01-21T04:02:55.145Z] [BOT] ✅ Loaded V2 database: 3089 jobs
[2026-01-21T04:02:55.737Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T04:02:55.738Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T04:02:55.738Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T04:02:55.855Z] [BOT] ✅ Loaded pending queue: 2732 total (2712 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at Blackhawk Network Holdings
[2026-01-21T04:02:55.860Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T04:02:55.860Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T04:02:55.861Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T04:02:55.861Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-21T04:02:55.862Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-21T04:02:55.862Z] [BOT] - Android Sales Expert @ 2020 Companies: sf, alameda
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T04:02:55.866Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-21T04:02:55.866Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_a23d95bc Network Holdings
[2026-01-21T04:02:55.866Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:02:55.870Z] [BOT ERROR] (node:2600) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T04:02:56.150Z] [BOT] ✅ Posted message: Software Engineer @ ORG_a23d95bc Network Holdings in #tech-jobs
[2026-01-21T04:02:56.150Z] [BOT] ✅ Industry: Software Engineer @ ORG_a23d95bc Network Holdings
[2026-01-21T04:02:56.151Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_a23d95bc Network Holdings → category channel (1 total channels)
[2026-01-21T04:02:56.151Z] [BOT] 💾 BEFORE ARCHIVING: 3090 jobs in database
[2026-01-21T04:02:56.154Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T04:02:56.160Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-21T04:02:56.160Z] [BOT] ✅ Archiving complete: 20 archived, 3070 active
[2026-01-21T04:02:56.180Z] [BOT] 💾 Saved posted_jobs.json: 3070 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:02:57.683Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_a23d95bc Network Holdings (instance #1)
[2026-01-21T04:02:57.683Z] [BOT] 💾 BEFORE ARCHIVING: 3071 jobs in database
[2026-01-21T04:02:57.685Z] [BOT] ✅ No jobs to archive (all 3071 jobs within 7-day window)
[2026-01-21T04:02:57.702Z] [BOT] 💾 Saved posted_jobs.json: 3071 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:02:57.703Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_6468cf88
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:02:57.904Z] [BOT] ✅ Posted message: Software Developer @ ORG_6468cf88 in #tech-jobs
[2026-01-21T04:02:57.904Z] [BOT] ✅ Industry: Software Developer @ ORG_6468cf88
[2026-01-21T04:02:57.905Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_6468cf88 → category channel (1 total channels)
[2026-01-21T04:02:57.905Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-21T04:02:57.907Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-21T04:02:57.928Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:02:59.429Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_6468cf88 (instance #1)
[2026-01-21T04:02:59.429Z] [BOT] 💾 BEFORE ARCHIVING: 3073 jobs in database
[2026-01-21T04:02:59.431Z] [BOT] ✅ No jobs to archive (all 3073 jobs within 7-day window)
[2026-01-21T04:02:59.451Z] [BOT] 💾 Saved posted_jobs.json: 3073 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:02:59.451Z] [BOT] 📍 [ROUTING] "Software Engineer - Full Stack Entry - Mid" @ ORG_fee50aac
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:02:59.632Z] [BOT] ✅ Posted message: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac in #tech-jobs
[2026-01-21T04:02:59.632Z] [BOT] ✅ Industry: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac
[2026-01-21T04:02:59.633Z] [BOT] 💾 Added channel posting: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac → category channel (1 total channels)
[2026-01-21T04:02:59.633Z] [BOT] 💾 BEFORE ARCHIVING: 3074 jobs in database
[2026-01-21T04:02:59.635Z] [BOT] ✅ No jobs to archive (all 3074 jobs within 7-day window)
[2026-01-21T04:02:59.655Z] [BOT] 💾 Saved posted_jobs.json: 3074 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:01.364Z] [BOT] ✅ Posted message: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T04:03:01.364Z] [BOT] 💾 Added channel posting: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac → location channel (2 total channels)
[2026-01-21T04:03:01.364Z] [BOT] 💾 BEFORE ARCHIVING: 3074 jobs in database
[2026-01-21T04:03:01.366Z] [BOT] ✅ No jobs to archive (all 3074 jobs within 7-day window)
[2026-01-21T04:03:01.384Z] [BOT] 💾 Saved posted_jobs.json: 3074 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:02.885Z] [BOT] 💾 Marked as posted: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac (instance #1)
💾 BEFORE ARCHIVING: 3075 jobs in database
[2026-01-21T04:03:02.887Z] [BOT] ✅ No jobs to archive (all 3075 jobs within 7-day window)
[2026-01-21T04:03:02.906Z] [BOT] 💾 Saved posted_jobs.json: 3075 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:02.906Z] [BOT] 📍 [ROUTING] "Android Sales Expert" @ 2020 Companies
[2026-01-21T04:03:02.907Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:03:03.094Z] [BOT] ✅ Posted message: Android Sales Expert @ 2020 Companies in #tech-jobs
[2026-01-21T04:03:03.094Z] [BOT] ✅ Industry: Android Sales Expert @ 2020 Companies
[2026-01-21T04:03:03.095Z] [BOT] 💾 Added channel posting: Android Sales Expert @ 2020 Companies → category channel (1 total channels)
[2026-01-21T04:03:03.095Z] [BOT] 💾 BEFORE ARCHIVING: 3076 jobs in database
[2026-01-21T04:03:03.097Z] [BOT] ✅ No jobs to archive (all 3076 jobs within 7-day window)
[2026-01-21T04:03:03.129Z] [BOT] 💾 Saved posted_jobs.json: 3076 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:04.630Z] [BOT] 💾 Marked as posted: Android Sales Expert @ 2020 Companies (instance #1)
[2026-01-21T04:03:04.631Z] [BOT] 💾 BEFORE ARCHIVING: 3077 jobs in database
[2026-01-21T04:03:04.633Z] [BOT] ✅ No jobs to archive (all 3077 jobs within 7-day window)
[2026-01-21T04:03:04.656Z] [BOT] 💾 Saved posted_jobs.json: 3077 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:04.657Z] [BOT] 💾 Marked as posted: Android Sales Expert @ 2020 Companies (instance #1)
[2026-01-21T04:03:04.657Z] [BOT] 💾 BEFORE ARCHIVING: 3078 jobs in database
[2026-01-21T04:03:04.659Z] [BOT] ✅ No jobs to archive (all 3078 jobs within 7-day window)
[2026-01-21T04:03:04.681Z] [BOT] 💾 Saved posted_jobs.json: 3078 active jobs
[2026-01-21T04:03:04.681Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:04.681Z] [BOT] 📍 [ROUTING] "Appian Associate Technical Consultant" @ ORG_60d01372
[2026-01-21T04:03:04.681Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:03:04.937Z] [BOT] ✅ Posted message: Appian Associate Technical Consultant @ ORG_60d01372 in #tech-jobs
  ✅ Industry: Appian Associate Technical Consultant @ ORG_60d01372
[2026-01-21T04:03:04.938Z] [BOT] 💾 Added channel posting: Appian Associate Technical Consultant @ ORG_60d01372 → category channel (1 total channels)
[2026-01-21T04:03:04.938Z] [BOT] 💾 BEFORE ARCHIVING: 3079 jobs in database
[2026-01-21T04:03:04.940Z] [BOT] ✅ No jobs to archive (all 3079 jobs within 7-day window)
[2026-01-21T04:03:04.960Z] [BOT] 💾 Saved posted_jobs.json: 3079 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:06.461Z] [BOT] 💾 Marked as posted: Appian Associate Technical Consultant @ ORG_60d01372 (instance #1)
[2026-01-21T04:03:06.461Z] [BOT] 💾 BEFORE ARCHIVING: 3080 jobs in database
[2026-01-21T04:03:06.463Z] [BOT] ✅ No jobs to archive (all 3080 jobs within 7-day window)
[2026-01-21T04:03:06.485Z] [BOT] 💾 Saved posted_jobs.json: 3080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:06.486Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, New Gaming Features" @ discord
   Category: TECH (matched: "software")
[2026-01-21T04:03:06.486Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T04:03:06.898Z] [BOT] ✅ Posted message: Staff Software Engineer, New Gaming Features @ discord in #tech-jobs
[2026-01-21T04:03:06.898Z] [BOT] ✅ Industry: Staff Software Engineer, New Gaming Features @ discord
[2026-01-21T04:03:06.899Z] [BOT] 💾 Added channel posting: Staff Software Engineer, New Gaming Features @ discord → category channel (1 total channels)
[2026-01-21T04:03:06.899Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-21T04:03:06.901Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-21T04:03:06.920Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:08.422Z] [BOT] 💾 Marked as posted: Staff Software Engineer, New Gaming Features @ discord (instance #1)
[2026-01-21T04:03:08.422Z] [BOT] 💾 BEFORE ARCHIVING: 3082 jobs in database
[2026-01-21T04:03:08.424Z] [BOT] ✅ No jobs to archive (all 3082 jobs within 7-day window)
[2026-01-21T04:03:08.442Z] [BOT] 💾 Saved posted_jobs.json: 3082 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:11.444Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-21T04:03:11.444Z] [BOT] 📍 [ROUTING] "Manager, On-Site Executive IT Support (Residential Operations)" @ coinbase
[2026-01-21T04:03:11.444Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T04:03:11.766Z] [BOT] ✅ Posted message: Manager, On-Site Executive IT Support (Residential Operations) @ coinbase in #ai-jobs
  ✅ Industry: Manager, On-Site Executive IT Support (Residential Operations) @ coinbase
[2026-01-21T04:03:11.767Z] [BOT] 💾 Added channel posting: Manager, On-Site Executive IT Support (Residential Operations) @ coinbase → category channel (1 total channels)
[2026-01-21T04:03:11.767Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-21T04:03:11.769Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-21T04:03:11.786Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:13.288Z] [BOT] 💾 Marked as posted: Manager, On-Site Executive IT Support (Residential Operations) @ coinbase (instance #1)
[2026-01-21T04:03:13.288Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-21T04:03:13.290Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-21T04:03:13.309Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:13.309Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Experimental AI" @ ORG_a867f63f National Laboratory
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T04:03:13.309Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T04:03:13.618Z] [BOT] ✅ Posted message: Postdoctoral Appointee - Experimental AI @ ORG_a867f63f National Laboratory in #ai-jobs
  ✅ Industry: Postdoctoral Appointee - Experimental AI @ ORG_a867f63f National Laboratory
[2026-01-21T04:03:13.618Z] [BOT] 💾 Added channel posting: Postdoctoral Appointee - Experimental AI @ ORG_a867f63f National Laboratory → category channel (1 total channels)
[2026-01-21T04:03:13.619Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-21T04:03:13.620Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-21T04:03:13.640Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:15.142Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Experimental AI @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-21T04:03:15.142Z] [BOT] 💾 BEFORE ARCHIVING: 3086 jobs in database
[2026-01-21T04:03:15.145Z] [BOT] ✅ No jobs to archive (all 3086 jobs within 7-day window)
[2026-01-21T04:03:15.162Z] [BOT] 💾 Saved posted_jobs.json: 3086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:18.162Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T04:03:18.163Z] [BOT] 📍 [ROUTING] "Associate – Business Intelligence Analyst - Cincinnati - OH" @ L3Harris Technologies
[2026-01-21T04:03:18.163Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T04:03:18.458Z] [BOT] ✅ Posted message: Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies in #JID_fb739488
[2026-01-21T04:03:18.459Z] [BOT] ✅ Industry: Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies
[2026-01-21T04:03:18.459Z] [BOT] 💾 Added channel posting: Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies → category channel (1 total channels)
[2026-01-21T04:03:18.459Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-21T04:03:18.461Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-21T04:03:18.481Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:20.196Z] [BOT] ✅ Posted message: Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies in #JID_ead674af
[2026-01-21T04:03:20.197Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T04:03:20.197Z] [BOT] 💾 Added channel posting: Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies → location channel (2 total channels)
[2026-01-21T04:03:20.197Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-21T04:03:20.199Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-21T04:03:20.220Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:21.722Z] [BOT] 💾 Marked as posted: Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies (instance #1)
[2026-01-21T04:03:21.723Z] [BOT] 💾 BEFORE ARCHIVING: 3088 jobs in database
[2026-01-21T04:03:21.724Z] [BOT] ✅ No jobs to archive (all 3088 jobs within 7-day window)
[2026-01-21T04:03:21.743Z] [BOT] 💾 Saved posted_jobs.json: 3088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:24.745Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T04:03:24.745Z] [BOT] 📍 [ROUTING] "Senior Director, Corporate Development" @ discord
[2026-01-21T04:03:24.745Z] [BOT] Category: FINANCE (matched: "investment")
   Channel: finance-jobs (1462...4023)
[2026-01-21T04:03:25.051Z] [BOT] ✅ Posted message: Senior Director, Corporate Development @ discord in #finance-jobs
  ✅ Industry: Senior Director, Corporate Development @ discord
[2026-01-21T04:03:25.051Z] [BOT] 💾 Added channel posting: Senior Director, Corporate Development @ discord → category channel (1 total channels)
[2026-01-21T04:03:25.052Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-21T04:03:25.054Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-21T04:03:25.079Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:26.580Z] [BOT] 💾 Marked as posted: Senior Director, Corporate Development @ discord (instance #1)
[2026-01-21T04:03:26.581Z] [BOT] 💾 BEFORE ARCHIVING: 3090 jobs in database
[2026-01-21T04:03:26.582Z] [BOT] ✅ No jobs to archive (all 3090 jobs within 7-day window)
[2026-01-21T04:03:26.600Z] [BOT] 💾 Saved posted_jobs.json: 3090 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:03:29.601Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T04:03:29.602Z] [BOT] ⏭️  Skipping duplicate: JID_50a9794b (posted within 7 days)
[2026-01-21T04:03:29.602Z] [BOT] ⏭️  Skipping duplicate: JID_679ebc85-developer_jr100173 (posted within 7 days)
[2026-01-21T04:03:29.602Z] [BOT] ⏭️  Skipping duplicate: JID_f0618e51 (posted within 7 days)
[2026-01-21T04:03:29.603Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_89ac2162-ai_421579 (posted within 7 days)
[2026-01-21T04:03:29.603Z] [BOT] ⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_8424b0e0-mid_r2116871 (posted within 7 days)
[2026-01-21T04:03:29.603Z] [BOT] ⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_aabf8ae3-expert_req_096760 (posted within 7 days)
⏭️  Skipping duplicate: JID_79342241 (posted within 7 days)
[2026-01-21T04:03:29.603Z] [BOT] ⏭️  Skipping duplicate: JID_cbd01f26-cx_1-job-2025003734 (posted within 7 days)
[2026-01-21T04:03:29.603Z] [BOT] ⏭️  Skipping duplicate: JID_015a83de (posted within 7 days)
[2026-01-21T04:03:29.603Z] [BOT] ⏭️  Skipping duplicate: JID_8f7b81a6 (posted within 7 days)
[2026-01-21T04:03:29.709Z] [BOT] ✅ Loaded pending queue: 2732 total (2712 pending, 20 enriched, 0 posted)
[2026-01-21T04:03:29.900Z] [BOT] ✅ Saved pending queue: 2732 total (2712 pending, 10 enriched, 10 posted)
[2026-01-21T04:03:29.900Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T04:03:29.965Z] [BOT] 📂 Loaded 5625 existing routing entries
[2026-01-21T04:03:30.042Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5635
[2026-01-21T04:03:30.042Z] [BOT] Timestamp: 2026-01-21T04:03:30.017Z
[2026-01-21T04:03:30.043Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T04:03:30.043Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-21T04:03:30.043Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 5
   Top channels:
[2026-01-21T04:03:30.043Z] [BOT] 1. #tech-jobs: 6 posts
     2. #JID_ead674af: 2 posts
     3. #ai-jobs: 2 posts
     4. #JID_fb739488: 1 posts
     5. #finance-jobs: 1 posts
[2026-01-21T04:03:30.044Z] [BOT] [STATS] Channel stats saved
[2026-01-21T04:03:32.071Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2600) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*