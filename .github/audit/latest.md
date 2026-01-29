# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T22:32:45.505Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T22:32:06.645Z] ========================================
[2026-01-29T22:32:06.647Z] Discord Bot Execution Log
[2026-01-29T22:32:06.647Z] Environment: GitHub Actions
[2026-01-29T22:32:06.647Z] Node Version: v20.20.0
[2026-01-29T22:32:06.647Z] ========================================
[2026-01-29T22:32:06.647Z] Environment Variables Check:
[2026-01-29T22:32:06.647Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T22:32:06.648Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T22:32:06.648Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T22:32:06.648Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T22:32:06.648Z] 
Multi-Channel Configuration:
[2026-01-29T22:32:06.648Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T22:32:06.648Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T22:32:06.648Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T22:32:06.648Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T22:32:06.648Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T22:32:06.648Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T22:32:06.649Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T22:32:06.649Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T22:32:06.649Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T22:32:06.649Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T22:32:06.649Z] 
Data Files Check:
[2026-01-29T22:32:06.650Z] .github/data/new_jobs.json: ✅ Exists (10 items, 135201 bytes)
[2026-01-29T22:32:06.656Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 822476 bytes)
[2026-01-29T22:32:06.656Z] 
========================================
[2026-01-29T22:32:06.656Z] Starting Enhanced Discord Bot...
[2026-01-29T22:32:06.656Z] ========================================
[2026-01-29T22:32:07.176Z] [BOT] ✅ Loaded V2 database: 149 jobs
[2026-01-29T22:32:07.747Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T22:32:07.748Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T22:32:07.748Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T22:32:07.870Z] [BOT] ✅ Loaded pending queue: 2883 total (2713 pending, 50 enriched, 120 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Expansion Account Executive, Enterprise at brex
[2026-01-29T22:32:07.874Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T22:32:07.875Z] [BOT] 🚫 Skipping blacklisted job: Strategy & Operations Lead, Core Tech at anthropic
[2026-01-29T22:32:07.994Z] [BOT] ✅ Loaded pending queue: 2883 total (2713 pending, 50 enriched, 120 posted)
[2026-01-29T22:32:08.169Z] [BOT] ✅ Saved pending queue: 2882 total (2713 pending, 49 enriched, 120 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-29T22:32:08.170Z] [BOT] 📋 After blacklist filter: 49 jobs (1 blacklisted)
[2026-01-29T22:32:08.170Z] [BOT] 📋 After data quality filter: 49 jobs (0 invalid)
[2026-01-29T22:32:08.171Z] [BOT] 📋 After multi-location grouping: 47 unique jobs to post
[2026-01-29T22:32:08.171Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Expansion Account Executive, Enterprise @ brex: salt lake city, utah, united states, seattle, washington, united states
   - Engineering Associate - Auto Lending @ ORG_332e04b7 Fargo: charlotte, phoenix
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-29T22:32:08.171Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T22:32:08.175Z] [BOT] 📌 Posting 3 jobs to #💰・finance-jobs
[2026-01-29T22:32:08.176Z] [BOT] 📍 [ROUTING] "Expansion Account Executive, Enterprise" @ brex
[2026-01-29T22:32:08.176Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T22:32:08.193Z] [BOT ERROR] (node:2871) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T22:32:08.785Z] [BOT] ✅ Posted message: Expansion Account Executive, Enterprise @ brex in #💰・finance-jobs
[2026-01-29T22:32:08.786Z] [BOT] ✅ Industry: Expansion Account Executive, Enterprise @ brex
[2026-01-29T22:32:08.786Z] [BOT] 💾 Added channel posting: Expansion Account Executive, Enterprise @ brex → category channel (1 total channels)
[2026-01-29T22:32:08.786Z] [BOT] 💾 BEFORE MERGE: 150 jobs in memory (cached)
[2026-01-29T22:32:08.791Z] [BOT] ✅ Loaded V2 database: 149 jobs
[2026-01-29T22:32:08.791Z] [BOT] 💾 DISK STATE: 149 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=150
[2026-01-29T22:32:08.792Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:32:08.792Z] [BOT] 💾 AFTER MERGE: 150 jobs (merged disk + memory)
[2026-01-29T22:32:08.792Z] [BOT] ✅ No jobs to archive (all 150 jobs within 7-day window)
[2026-01-29T22:32:08.806Z] [BOT] 💾 Saved posted_jobs.json: 150 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:32:10.725Z] [BOT] ✅ Posted message: Expansion Account Executive, Enterprise @ brex in #🏠・JID_ead674af
[2026-01-29T22:32:10.725Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Expansion Account Executive, Enterprise @ brex → location channel (2 total channels)
[2026-01-29T22:32:10.725Z] [BOT] 💾 BEFORE MERGE: 150 jobs in memory (cached)
[2026-01-29T22:32:10.729Z] [BOT] ✅ Loaded V2 database: 150 jobs
💾 DISK STATE: 150 jobs on disk
[2026-01-29T22:32:10.729Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=150
[2026-01-29T22:32:10.729Z] [BOT] 🔀 Deep merged: Expansion Account Executive, Enterprise @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-29T22:32:10.729Z] [BOT] 💾 AFTER MERGE: 150 jobs (merged disk + memory)
[2026-01-29T22:32:10.730Z] [BOT] ✅ No jobs to archive (all 150 jobs within 7-day window)
[2026-01-29T22:32:10.738Z] [BOT] 💾 Saved posted_jobs.json: 150 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:32:12.240Z] [BOT] 📍 [ROUTING] "Corporate Counsel " @ supabase
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T22:32:12.734Z] [BOT] ✅ Posted message: Corporate Counsel  @ supabase in #💰・finance-jobs
  ✅ Industry: Corporate Counsel  @ supabase
[2026-01-29T22:32:12.734Z] [BOT] 💾 Added channel posting: Corporate Counsel  @ supabase → category channel (1 total channels)
💾 BEFORE MERGE: 151 jobs in memory (cached)
[2026-01-29T22:32:12.737Z] [BOT] ✅ Loaded V2 database: 150 jobs
💾 DISK STATE: 150 jobs on disk
[2026-01-29T22:32:12.738Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=151
[2026-01-29T22:32:12.738Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:32:12.738Z] [BOT] 💾 AFTER MERGE: 151 jobs (merged disk + memory)
[2026-01-29T22:32:12.738Z] [BOT] ✅ No jobs to archive (all 151 jobs within 7-day window)
[2026-01-29T22:32:12.747Z] [BOT] 💾 Saved posted_jobs.json: 151 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:32:14.249Z] [BOT] 📍 [ROUTING] "Tax Operations Advocate" @ gusto
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T22:32:14.728Z] [BOT] ✅ Posted message: Tax Operations Advocate @ gusto in #💰・finance-jobs
  ✅ Industry: Tax Operations Advocate @ gusto
[2026-01-29T22:32:14.729Z] [BOT] 💾 Added channel posting: Tax Operations Advocate @ gusto → category channel (1 total channels)
[2026-01-29T22:32:14.729Z] [BOT] 💾 BEFORE MERGE: 152 jobs in memory (cached)
[2026-01-29T22:32:14.732Z] [BOT] ✅ Loaded V2 database: 151 jobs
💾 DISK STATE: 151 jobs on disk
[2026-01-29T22:32:14.732Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=152
[2026-01-29T22:32:14.733Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:32:14.733Z] [BOT] 💾 AFTER MERGE: 152 jobs (merged disk + memory)
[2026-01-29T22:32:14.733Z] [BOT] ✅ No jobs to archive (all 152 jobs within 7-day window)
[2026-01-29T22:32:14.742Z] [BOT] 💾 Saved posted_jobs.json: 152 active jobs
[2026-01-29T22:32:14.742Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:32:19.243Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T22:32:19.244Z] [BOT] 📍 [ROUTING] "Founding Design Engineer, AI Capability Development, Education Labs" @ anthropic
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:32:19.455Z] [BOT] ✅ Posted message: Founding Design Engineer, AI Capability Development, Education Labs @ anthropic in #💻・tech-jobs
  ✅ Industry: Founding Design Engineer, AI Capability Development, Education Labs @ anthropic
[2026-01-29T22:32:19.455Z] [BOT] 💾 Added channel posting: Founding Design Engineer, AI Capability Development, Education Labs @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 153 jobs in memory (cached)
[2026-01-29T22:32:19.460Z] [BOT] ✅ Loaded V2 database: 152 jobs
[2026-01-29T22:32:19.461Z] [BOT] 💾 DISK STATE: 152 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=153
[2026-01-29T22:32:19.461Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:32:19.461Z] [BOT] 💾 AFTER MERGE: 153 jobs (merged disk + memory)
[2026-01-29T22:32:19.461Z] [BOT] ✅ No jobs to archive (all 153 jobs within 7-day window)
[2026-01-29T22:32:19.474Z] [BOT] 💾 Saved posted_jobs.json: 153 active jobs
[2026-01-29T22:32:19.474Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:32:20.975Z] [BOT] 📍 [ROUTING] "Certification Content and Systems Architect" @ anthropic
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:32:21.186Z] [BOT] ✅ Posted message: Certification Content and Systems Architect @ anthropic in #💻・tech-jobs
  ✅ Industry: Certification Content and Systems Architect @ anthropic
[2026-01-29T22:32:21.186Z] [BOT] 💾 Added channel posting: Certification Content and Systems Architect @ anthropic → category channel (1 total channels)
[2026-01-29T22:32:21.186Z] [BOT] 💾 BEFORE MERGE: 154 jobs in memory (cached)
[2026-01-29T22:32:21.190Z] [BOT] ✅ Loaded V2 database: 153 jobs
💾 DISK STATE: 153 jobs on disk
[2026-01-29T22:32:21.190Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=154
[2026-01-29T22:32:21.190Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 154 jobs (merged disk + memory)
[2026-01-29T22:32:21.191Z] [BOT] ✅ No jobs to archive (all 154 jobs within 7-day window)
[2026-01-29T22:32:21.201Z] [BOT] 💾 Saved posted_jobs.json: 154 active jobs
[2026-01-29T22:32:21.202Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:32:22.703Z] [BOT] 📍 [ROUTING] "Software Engineer, Healthcare & Financial Services" @ anthropic
[2026-01-29T22:32:22.703Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:32:25.419Z] [BOT] ✅ Posted message: Software Engineer, Healthcare & Financial Services @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Healthcare & Financial Services @ anthropic
[2026-01-29T22:32:25.419Z] [BOT] 💾 Added channel posting: Software Engineer, Healthcare & Financial Services @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 155 jobs in memory (cached)
[2026-01-29T22:32:25.423Z] [BOT] ✅ Loaded V2 database: 154 jobs
💾 DISK STATE: 154 jobs on disk
[2026-01-29T22:32:25.423Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=155
[2026-01-29T22:32:25.423Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 155 jobs (merged disk + memory)
[2026-01-29T22:32:25.423Z] [BOT] ✅ No jobs to archive (all 155 jobs within 7-day window)
[2026-01-29T22:32:25.434Z] [BOT] 💾 Saved posted_jobs.json: 155 active jobs
[2026-01-29T22:32:25.434Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:32:26.936Z] [BOT] 📍 [ROUTING] "Mobile Engineer" @ vercel
[2026-01-29T22:32:26.936Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:32:27.183Z] [BOT] ✅ Posted message: Mobile Engineer @ vercel in #💻・tech-jobs
[2026-01-29T22:32:27.183Z] [BOT] ✅ Industry: Mobile Engineer @ vercel
[2026-01-29T22:32:27.183Z] [BOT] 💾 Added channel posting: Mobile Engineer @ vercel → category channel (1 total channels)
💾 BEFORE MERGE: 156 jobs in memory (cached)
[2026-01-29T22:32:27.187Z] [BOT] ✅ Loaded V2 database: 155 jobs
[2026-01-29T22:32:27.187Z] [BOT] 💾 DISK STATE: 155 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=156
[2026-01-29T22:32:27.188Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 156 jobs (merged disk + memory)
[2026-01-29T22:32:27.188Z] [BOT] ✅ No jobs to archive (all 156 jobs within 7-day window)
[2026-01-29T22:32:27.200Z] [BOT] 💾 Saved posted_jobs.json: 156 active jobs
[2026-01-29T22:32:27.200Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:32:28.995Z] [BOT] ✅ Posted message: Mobile Engineer @ vercel in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T22:32:28.995Z] [BOT] 💾 Added channel posting: Mobile Engineer @ vercel → location channel (2 total channels)
💾 BEFORE MERGE: 156 jobs in memory (cached)
[2026-01-29T22:32:28.998Z] [BOT] ✅ Loaded V2 database: 156 jobs
💾 DISK STATE: 156 jobs on disk
[2026-01-29T22:32:28.998Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=156
[2026-01-29T22:32:28.999Z] [BOT] 🔀 Deep merged: Mobile Engineer @ vercel (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 156 jobs (merged disk + memory)
[2026-01-29T22:32:28.999Z] [BOT] ✅ No jobs to archive (all 156 jobs within 7-day window)
[2026-01-29T22:32:29.008Z] [BOT] 💾 Saved posted_jobs.json: 156 active jobs
[2026-01-29T22:32:29.008Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:32:30.509Z] [BOT] 📍 [ROUTING] "EBI Database Developer 1" @ ORG_54f638ab Clinic
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:32:30.679Z] [BOT] ✅ Posted message: EBI Database Developer 1 @ ORG_54f638ab Clinic in #💻・tech-jobs
[2026-01-29T22:32:30.679Z] [BOT] ✅ Industry: EBI Database Developer 1 @ ORG_54f638ab Clinic
[2026-01-29T22:32:30.679Z] [BOT] 💾 Added channel posting: EBI Database Developer 1 @ ORG_54f638ab Clinic → category channel (1 total channels)
💾 BEFORE MERGE: 157 jobs in memory (cached)
[2026-01-29T22:32:30.683Z] [BOT] ✅ Loaded V2 database: 156 jobs
💾 DISK STATE: 156 jobs on disk
[2026-01-29T22:32:30.683Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=157
[2026-01-29T22:32:30.683Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 157 jobs (merged disk + memory)
[2026-01-29T22:32:30.683Z] [BOT] ✅ No jobs to archive (all 157 jobs within 7-day window)
[2026-01-29T22:32:30.695Z] [BOT] 💾 Saved posted_jobs.json: 157 active jobs
[2026-01-29T22:32:30.695Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:32:32.197Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_d811773d Financial Group
[2026-01-29T22:32:32.197Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:32:32.532Z] [BOT] ✅ Posted message: Software Engineer @ ORG_d811773d Financial Group in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_d811773d Financial Group
[2026-01-29T22:32:32.532Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_d811773d Financial Group → category channel (1 total channels)
[2026-01-29T22:32:32.532Z] [BOT] 💾 BEFORE MERGE: 158 jobs in memory (cached)
[2026-01-29T22:32:32.536Z] [BOT] ✅ Loaded V2 database: 157 jobs
💾 DISK STATE: 157 jobs on disk
[2026-01-29T22:32:32.536Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=158
[2026-01-29T22:32:32.536Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 158 jobs (merged disk + memory)
[2026-01-29T22:32:32.537Z] [BOT] ✅ No jobs to archive (all 158 jobs within 7-day window)
[2026-01-29T22:32:32.547Z] [BOT] 💾 Saved posted_jobs.json: 158 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:32:37.049Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-29T22:32:37.049Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_cb4c8a2c Aerospace
[2026-01-29T22:32:37.049Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T22:32:37.459Z] [BOT] ✅ Posted message: Data Analyst @ ORG_cb4c8a2c Aerospace in #📊・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_cb4c8a2c Aerospace
[2026-01-29T22:32:37.459Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_cb4c8a2c Aerospace → category channel (1 total channels)
[2026-01-29T22:32:37.459Z] [BOT] 💾 BEFORE MERGE: 159 jobs in memory (cached)
[2026-01-29T22:32:37.463Z] [BOT] ✅ Loaded V2 database: 158 jobs
💾 DISK STATE: 158 jobs on disk
[2026-01-29T22:32:37.463Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=159
[2026-01-29T22:32:37.464Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 159 jobs (merged disk + memory)
[2026-01-29T22:32:37.464Z] [BOT] ✅ No jobs to archive (all 159 jobs within 7-day window)
[2026-01-29T22:32:37.476Z] [BOT] 💾 Saved posted_jobs.json: 159 active jobs
[2026-01-29T22:32:37.476Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:32:41.979Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T22:32:41.980Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_61e5c655..." not found, but found as SHA256 "38acb8b92d7249c0"
[2026-01-29T22:32:41.980Z] [BOT] ⏭️  Skipping duplicate: JID_61e5c655 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "e0dbb98e40797433"
⏭️  Skipping duplicate: JID_d875e421 (posted within 7 days)
[2026-01-29T22:32:41.980Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c2c7bc39d6458996"
⏭️  Skipping duplicate: JID_9fe8863a (posted within 7 days)
[2026-01-29T22:32:41.980Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cda680ff-..." not found, but found as SHA256 "93e2e989d8f2eefa"
⏭️  Skipping duplicate: JID_fd255cf2 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "64d2b854a5c4dc76"
⏭️  Skipping duplicate: JID_2a6e2437 (posted within 7 days)
[2026-01-29T22:32:41.980Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_39e4385b..." not found, but found as SHA256 "facb7a09e2969beb"
⏭️  Skipping duplicate: JID_65f02b6a (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_73e67226..." not found, but found as SHA256 "bb1aa88453bec2d4"
⏭️  Skipping duplicate: JID_13223fd1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_8ef4f5c9..." not found, but found as SHA256 "1a594f923d2cc409"
⏭️  Skipping duplicate: JID_7e7f6f49-i_320481 (posted within 7 days)
[2026-01-29T22:32:41.980Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e410b4a0..." not found, but found as SHA256 "42e3b9ade24a4d19"
⏭️  Skipping duplicate: JID_e59c0167-cx_1-job-44410 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c50c6482..." not found, but found as SHA256 "17def344fef67262"
⏭️  Skipping duplicate: JID_f4367d86-cx_1-job-115897 (posted within 7 days)
[2026-01-29T22:32:42.097Z] [BOT] ✅ Loaded pending queue: 2882 total (2713 pending, 49 enriched, 120 posted)
[2026-01-29T22:32:42.285Z] [BOT] ✅ Saved pending queue: 2882 total (2713 pending, 39 enriched, 130 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-29T22:32:42.285Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T22:32:42.367Z] [BOT] 📂 Loaded 10211 existing routing entries
[2026-01-29T22:32:42.475Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T22:32:42.475Z] [BOT] Total entries: 10221
   Timestamp: 2026-01-29T22:32:42.431Z
[2026-01-29T22:32:42.476Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T22:32:42.476Z] [BOT] Total attempts: 13
   Successful: 12
   Failed: 0
   Skipped: 1
[2026-01-29T22:32:42.476Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 5
   Top channels:
[2026-01-29T22:32:42.476Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #💰・finance-jobs: 3 posts
     3. #🏠・JID_ead674af: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-01-29T22:32:42.476Z] [BOT] 5. #📊・JID_fb739488: 1 posts
[2026-01-29T22:32:42.477Z] [BOT] [STATS] Channel stats saved
[2026-01-29T22:32:42.477Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 159 jobs in memory (cached)
[2026-01-29T22:32:42.481Z] [BOT] ✅ Loaded V2 database: 159 jobs
[2026-01-29T22:32:42.481Z] [BOT] 💾 DISK STATE: 159 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=159
[2026-01-29T22:32:42.481Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:32:42.482Z] [BOT] 💾 AFTER MERGE: 159 jobs (merged disk + memory)
[2026-01-29T22:32:42.482Z] [BOT] ✅ No jobs to archive (all 159 jobs within 7-day window)
[2026-01-29T22:32:42.491Z] [BOT] 💾 Saved posted_jobs.json: 159 active jobs
[2026-01-29T22:32:42.492Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T22:32:44.522Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2871) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*