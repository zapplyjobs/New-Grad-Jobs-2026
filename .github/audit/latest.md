# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T01:04:21.580Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T01:03:34.405Z] ========================================
[2026-02-03T01:03:34.408Z] Discord Bot Execution Log
[2026-02-03T01:03:34.409Z] Environment: GitHub Actions
[2026-02-03T01:03:34.409Z] Node Version: v20.20.0
[2026-02-03T01:03:34.409Z] ========================================
[2026-02-03T01:03:34.409Z] Environment Variables Check:
[2026-02-03T01:03:34.409Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T01:03:34.409Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T01:03:34.409Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T01:03:34.409Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T01:03:34.410Z] 
Multi-Channel Configuration:
[2026-02-03T01:03:34.410Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T01:03:34.410Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:03:34.410Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:03:34.410Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T01:03:34.410Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:03:34.410Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:03:34.410Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:03:34.410Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:03:34.410Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:03:34.410Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T01:03:34.410Z] 
Data Files Check:
[2026-02-03T01:03:34.412Z] .github/data/new_jobs.json: ✅ Exists (10 items, 147394 bytes)
[2026-02-03T01:03:34.475Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11251167 bytes)
[2026-02-03T01:03:34.475Z] 
========================================
[2026-02-03T01:03:34.475Z] Starting Enhanced Discord Bot...
[2026-02-03T01:03:34.475Z] ========================================
[2026-02-03T01:03:35.046Z] [BOT] ✅ Loaded V2 database: 2232 jobs
[2026-02-03T01:03:35.513Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T01:03:35.514Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T01:03:35.514Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T01:03:35.536Z] [BOT] ✅ Loaded pending queue: 339 total (289 pending, 50 enriched, 0 posted)
[2026-02-03T01:03:35.536Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T01:03:35.538Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T01:03:35.538Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T01:03:35.538Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T01:03:35.556Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T01:03:35.556Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
[2026-02-03T01:03:35.556Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Data Science Senior Manager at gusto
[2026-02-03T01:03:35.557Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-03T01:03:35.558Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior AI Engineering Manager at duolingo
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
[2026-02-03T01:03:35.558Z] [BOT] 🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Services at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
[2026-02-03T01:03:35.558Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Public Policy, Events Lead at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
[2026-02-03T01:03:35.558Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
[2026-02-03T01:03:35.588Z] [BOT] ✅ Loaded pending queue: 339 total (289 pending, 50 enriched, 0 posted)
[2026-02-03T01:03:35.624Z] [BOT] ✅ Saved pending queue: 299 total (289 pending, 10 enriched, 0 posted)
🗑️ Removed 40 blacklisted jobs from pending queue
📋 After blacklist filter: 9 jobs (40 blacklisted)
[2026-02-03T01:03:35.624Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2026-02-03T01:03:35.625Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T01:03:35.628Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-03T01:03:35.629Z] [BOT] 📍 [ROUTING] "Startup Account Executive, Greenfield" @ vercel
   Category: TECH (default)
[2026-02-03T01:03:35.630Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T01:03:35.646Z] [BOT ERROR] (node:2465) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T01:03:35.823Z] [BOT] ✅ Posted message: Startup Account Executive, Greenfield @ vercel in #💻・tech-jobs
[2026-02-03T01:03:35.823Z] [BOT] ✅ Industry: Startup Account Executive, Greenfield @ vercel
[2026-02-03T01:03:35.824Z] [BOT] 💾 Added channel posting: Startup Account Executive, Greenfield @ vercel → category channel (1 total channels)
[2026-02-03T01:03:35.825Z] [BOT] 💾 BEFORE MERGE: 2233 jobs in memory (cached)
[2026-02-03T01:03:35.868Z] [BOT] ✅ Loaded V2 database: 2232 jobs
💾 DISK STATE: 2232 jobs on disk
[2026-02-03T01:03:35.868Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2233
[2026-02-03T01:03:35.873Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T01:03:35.874Z] [BOT] 💾 AFTER MERGE: 2233 jobs (merged disk + memory)
[2026-02-03T01:03:35.875Z] [BOT] ✅ No jobs to archive (all 2233 jobs within 7-day window)
[2026-02-03T01:03:36.006Z] [BOT] 💾 Saved posted_jobs.json: 2233 active jobs
[2026-02-03T01:03:36.007Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-03T01:03:37.752Z] [BOT] ✅ Posted message: Startup Account Executive, Greenfield @ vercel in #🌉・JID_739bbc0b
[2026-02-03T01:03:37.752Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T01:03:37.752Z] [BOT] 💾 Added channel posting: Startup Account Executive, Greenfield @ vercel → location channel (2 total channels)
[2026-02-03T01:03:37.753Z] [BOT] 💾 BEFORE MERGE: 2233 jobs in memory (cached)
[2026-02-03T01:03:37.789Z] [BOT] ✅ Loaded V2 database: 2233 jobs
💾 DISK STATE: 2233 jobs on disk
[2026-02-03T01:03:37.790Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2233
[2026-02-03T01:03:37.794Z] [BOT] 🔀 Deep merged: Startup Account Executive, Greenfield @ vercel (disk: 1 channels → merged: 2 channels)
[2026-02-03T01:03:37.794Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2233 jobs (merged disk + memory)
[2026-02-03T01:03:37.796Z] [BOT] ✅ No jobs to archive (all 2233 jobs within 7-day window)
[2026-02-03T01:03:37.906Z] [BOT] 💾 Saved posted_jobs.json: 2233 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:03:39.407Z] [BOT] 📍 [ROUTING] "Model Quality Software Engineer, Claude Code" @ anthropic
   Category: TECH (matched: "software")
[2026-02-03T01:03:39.407Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T01:03:39.600Z] [BOT] ✅ Posted message: Model Quality Software Engineer, Claude Code @ anthropic in #💻・tech-jobs
[2026-02-03T01:03:39.600Z] [BOT] ✅ Industry: Model Quality Software Engineer, Claude Code @ anthropic
[2026-02-03T01:03:39.601Z] [BOT] 💾 Added channel posting: Model Quality Software Engineer, Claude Code @ anthropic → category channel (1 total channels)
[2026-02-03T01:03:39.601Z] [BOT] 💾 BEFORE MERGE: 2234 jobs in memory (cached)
[2026-02-03T01:03:39.642Z] [BOT] ✅ Loaded V2 database: 2233 jobs
💾 DISK STATE: 2233 jobs on disk
[2026-02-03T01:03:39.643Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2234
[2026-02-03T01:03:39.647Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T01:03:39.648Z] [BOT] 💾 AFTER MERGE: 2234 jobs (merged disk + memory)
[2026-02-03T01:03:39.649Z] [BOT] ✅ No jobs to archive (all 2234 jobs within 7-day window)
[2026-02-03T01:03:39.761Z] [BOT] 💾 Saved posted_jobs.json: 2234 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:03:41.477Z] [BOT] ✅ Posted message: Model Quality Software Engineer, Claude Code @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T01:03:41.478Z] [BOT] 💾 Added channel posting: Model Quality Software Engineer, Claude Code @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 2234 jobs in memory (cached)
[2026-02-03T01:03:41.519Z] [BOT] ✅ Loaded V2 database: 2234 jobs
💾 DISK STATE: 2234 jobs on disk
[2026-02-03T01:03:41.520Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2234
[2026-02-03T01:03:41.524Z] [BOT] 🔀 Deep merged: Model Quality Software Engineer, Claude Code @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-03T01:03:41.525Z] [BOT] 💾 AFTER MERGE: 2234 jobs (merged disk + memory)
[2026-02-03T01:03:41.526Z] [BOT] ✅ No jobs to archive (all 2234 jobs within 7-day window)
[2026-02-03T01:03:41.679Z] [BOT] 💾 Saved posted_jobs.json: 2234 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:03:43.182Z] [BOT] 📍 [ROUTING] "Solutions Engineer" @ verkada
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T01:03:43.428Z] [BOT] ✅ Posted message: Solutions Engineer @ verkada in #💻・tech-jobs
  ✅ Industry: Solutions Engineer @ verkada
[2026-02-03T01:03:43.429Z] [BOT] 💾 Added channel posting: Solutions Engineer @ verkada → category channel (1 total channels)
[2026-02-03T01:03:43.429Z] [BOT] 💾 BEFORE MERGE: 2235 jobs in memory (cached)
[2026-02-03T01:03:43.466Z] [BOT] ✅ Loaded V2 database: 2234 jobs
💾 DISK STATE: 2234 jobs on disk
[2026-02-03T01:03:43.467Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2235
[2026-02-03T01:03:43.472Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T01:03:43.472Z] [BOT] 💾 AFTER MERGE: 2235 jobs (merged disk + memory)
[2026-02-03T01:03:43.473Z] [BOT] ✅ No jobs to archive (all 2235 jobs within 7-day window)
[2026-02-03T01:03:43.592Z] [BOT] 💾 Saved posted_jobs.json: 2235 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:03:45.093Z] [BOT] 📍 [ROUTING] "Integrations Developer" @ anthropic
   Category: TECH (matched: "software")
[2026-02-03T01:03:45.093Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T01:03:45.283Z] [BOT] ✅ Posted message: Integrations Developer @ anthropic in #💻・tech-jobs
[2026-02-03T01:03:45.284Z] [BOT] ✅ Industry: Integrations Developer @ anthropic
[2026-02-03T01:03:45.284Z] [BOT] 💾 Added channel posting: Integrations Developer @ anthropic → category channel (1 total channels)
[2026-02-03T01:03:45.284Z] [BOT] 💾 BEFORE MERGE: 2236 jobs in memory (cached)
[2026-02-03T01:03:45.323Z] [BOT] ✅ Loaded V2 database: 2235 jobs
💾 DISK STATE: 2235 jobs on disk
[2026-02-03T01:03:45.324Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2236
[2026-02-03T01:03:45.331Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T01:03:45.331Z] [BOT] 💾 AFTER MERGE: 2236 jobs (merged disk + memory)
[2026-02-03T01:03:45.333Z] [BOT] ✅ No jobs to archive (all 2236 jobs within 7-day window)
[2026-02-03T01:03:45.445Z] [BOT] 💾 Saved posted_jobs.json: 2236 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:03:47.153Z] [BOT] ✅ Posted message: Integrations Developer @ anthropic in #🌉・JID_739bbc0b
[2026-02-03T01:03:47.154Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T01:03:47.154Z] [BOT] 💾 Added channel posting: Integrations Developer @ anthropic → location channel (2 total channels)
[2026-02-03T01:03:47.154Z] [BOT] 💾 BEFORE MERGE: 2236 jobs in memory (cached)
[2026-02-03T01:03:47.191Z] [BOT] ✅ Loaded V2 database: 2236 jobs
💾 DISK STATE: 2236 jobs on disk
[2026-02-03T01:03:47.191Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2236
[2026-02-03T01:03:47.195Z] [BOT] 🔀 Deep merged: Integrations Developer @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-03T01:03:47.195Z] [BOT] 💾 AFTER MERGE: 2236 jobs (merged disk + memory)
[2026-02-03T01:03:47.197Z] [BOT] ✅ No jobs to archive (all 2236 jobs within 7-day window)
[2026-02-03T01:03:47.309Z] [BOT] 💾 Saved posted_jobs.json: 2236 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:03:48.812Z] [BOT] 📍 [ROUTING] "Business Systems Analyst - GTM" @ anthropic
[2026-02-03T01:03:48.812Z] [BOT] Category: TECH (matched: "product manager")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T01:03:49.488Z] [BOT] ✅ Posted message: Business Systems Analyst - GTM @ anthropic in #💻・tech-jobs
[2026-02-03T01:03:49.488Z] [BOT] ✅ Industry: Business Systems Analyst - GTM @ anthropic
[2026-02-03T01:03:49.489Z] [BOT] 💾 Added channel posting: Business Systems Analyst - GTM @ anthropic → category channel (1 total channels)
[2026-02-03T01:03:49.489Z] [BOT] 💾 BEFORE MERGE: 2237 jobs in memory (cached)
[2026-02-03T01:03:49.537Z] [BOT] ✅ Loaded V2 database: 2236 jobs
💾 DISK STATE: 2236 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2237
[2026-02-03T01:03:49.541Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T01:03:49.541Z] [BOT] 💾 AFTER MERGE: 2237 jobs (merged disk + memory)
[2026-02-03T01:03:49.542Z] [BOT] ✅ No jobs to archive (all 2237 jobs within 7-day window)
[2026-02-03T01:03:49.661Z] [BOT] 💾 Saved posted_jobs.json: 2237 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:03:51.480Z] [BOT] ✅ Posted message: Business Systems Analyst - GTM @ anthropic in #🌉・JID_739bbc0b
[2026-02-03T01:03:51.480Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T01:03:51.481Z] [BOT] 💾 Added channel posting: Business Systems Analyst - GTM @ anthropic → location channel (2 total channels)
[2026-02-03T01:03:51.481Z] [BOT] 💾 BEFORE MERGE: 2237 jobs in memory (cached)
[2026-02-03T01:03:51.520Z] [BOT] ✅ Loaded V2 database: 2237 jobs
💾 DISK STATE: 2237 jobs on disk
[2026-02-03T01:03:51.520Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2237
[2026-02-03T01:03:51.524Z] [BOT] 🔀 Deep merged: Business Systems Analyst - GTM @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-03T01:03:51.524Z] [BOT] 💾 AFTER MERGE: 2237 jobs (merged disk + memory)
[2026-02-03T01:03:51.525Z] [BOT] ✅ No jobs to archive (all 2237 jobs within 7-day window)
[2026-02-03T01:03:51.641Z] [BOT] 💾 Saved posted_jobs.json: 2237 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:03:53.143Z] [BOT] 📍 [ROUTING] "AI Research Engineer, New PhD Graduate" @ duolingo
   Category: TECH (matched: "machine learning")
[2026-02-03T01:03:53.144Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T01:03:53.380Z] [BOT] ✅ Posted message: AI Research Engineer, New PhD Graduate @ duolingo in #💻・tech-jobs
  ✅ Industry: AI Research Engineer, New PhD Graduate @ duolingo
[2026-02-03T01:03:53.381Z] [BOT] 💾 Added channel posting: AI Research Engineer, New PhD Graduate @ duolingo → category channel (1 total channels)
[2026-02-03T01:03:53.381Z] [BOT] 💾 BEFORE MERGE: 2238 jobs in memory (cached)
[2026-02-03T01:03:53.418Z] [BOT] ✅ Loaded V2 database: 2237 jobs
💾 DISK STATE: 2237 jobs on disk
[2026-02-03T01:03:53.419Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2238
[2026-02-03T01:03:53.423Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T01:03:53.423Z] [BOT] 💾 AFTER MERGE: 2238 jobs (merged disk + memory)
[2026-02-03T01:03:53.424Z] [BOT] ✅ No jobs to archive (all 2238 jobs within 7-day window)
[2026-02-03T01:03:53.529Z] [BOT] 💾 Saved posted_jobs.json: 2238 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:03:55.322Z] [BOT] ✅ Posted message: AI Research Engineer, New PhD Graduate @ duolingo in #🗽・JID_98d4f0de
[2026-02-03T01:03:55.322Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-03T01:03:55.322Z] [BOT] 💾 Added channel posting: AI Research Engineer, New PhD Graduate @ duolingo → location channel (2 total channels)
[2026-02-03T01:03:55.322Z] [BOT] 💾 BEFORE MERGE: 2238 jobs in memory (cached)
[2026-02-03T01:03:55.361Z] [BOT] ✅ Loaded V2 database: 2238 jobs
💾 DISK STATE: 2238 jobs on disk
[2026-02-03T01:03:55.361Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2238
[2026-02-03T01:03:55.365Z] [BOT] 🔀 Deep merged: AI Research Engineer, New PhD Graduate @ duolingo (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-03T01:03:55.365Z] [BOT] 💾 AFTER MERGE: 2238 jobs (merged disk + memory)
[2026-02-03T01:03:55.367Z] [BOT] ✅ No jobs to archive (all 2238 jobs within 7-day window)
[2026-02-03T01:03:55.477Z] [BOT] 💾 Saved posted_jobs.json: 2238 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:03:59.979Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-03T01:03:59.980Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ reddit
[2026-02-03T01:03:59.980Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-03T01:04:00.184Z] [BOT] ✅ Posted message: Machine Learning Engineer @ reddit in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer @ reddit
[2026-02-03T01:04:00.185Z] [BOT] 💾 Added channel posting: Machine Learning Engineer @ reddit → category channel (1 total channels)
[2026-02-03T01:04:00.185Z] [BOT] 💾 BEFORE MERGE: 2239 jobs in memory (cached)
[2026-02-03T01:04:00.236Z] [BOT] ✅ Loaded V2 database: 2238 jobs
💾 DISK STATE: 2238 jobs on disk
[2026-02-03T01:04:00.237Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2239
[2026-02-03T01:04:00.241Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T01:04:00.241Z] [BOT] 💾 AFTER MERGE: 2239 jobs (merged disk + memory)
[2026-02-03T01:04:00.243Z] [BOT] ✅ No jobs to archive (all 2239 jobs within 7-day window)
[2026-02-03T01:04:00.356Z] [BOT] 💾 Saved posted_jobs.json: 2239 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:04:02.092Z] [BOT] ✅ Posted message: Machine Learning Engineer @ reddit in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T01:04:02.093Z] [BOT] 💾 Added channel posting: Machine Learning Engineer @ reddit → location channel (2 total channels)
[2026-02-03T01:04:02.093Z] [BOT] 💾 BEFORE MERGE: 2239 jobs in memory (cached)
[2026-02-03T01:04:02.149Z] [BOT] ✅ Loaded V2 database: 2239 jobs
💾 DISK STATE: 2239 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2239
[2026-02-03T01:04:02.154Z] [BOT] 🔀 Deep merged: Machine Learning Engineer @ reddit (disk: 1 channels → merged: 2 channels)
[2026-02-03T01:04:02.154Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2239 jobs (merged disk + memory)
[2026-02-03T01:04:02.156Z] [BOT] ✅ No jobs to archive (all 2239 jobs within 7-day window)
[2026-02-03T01:04:02.263Z] [BOT] 💾 Saved posted_jobs.json: 2239 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:04:03.766Z] [BOT] 📍 [ROUTING] "Software Engineer" @ reddit
[2026-02-03T01:04:03.766Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-03T01:04:03.981Z] [BOT] ✅ Posted message: Software Engineer @ reddit in #🤖・ai-jobs
[2026-02-03T01:04:03.981Z] [BOT] ✅ Industry: Software Engineer @ reddit
[2026-02-03T01:04:03.982Z] [BOT] 💾 Added channel posting: Software Engineer @ reddit → category channel (1 total channels)
💾 BEFORE MERGE: 2240 jobs in memory (cached)
[2026-02-03T01:04:04.025Z] [BOT] ✅ Loaded V2 database: 2239 jobs
💾 DISK STATE: 2239 jobs on disk
[2026-02-03T01:04:04.025Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2240
[2026-02-03T01:04:04.029Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T01:04:04.029Z] [BOT] 💾 AFTER MERGE: 2240 jobs (merged disk + memory)
[2026-02-03T01:04:04.030Z] [BOT] ✅ No jobs to archive (all 2240 jobs within 7-day window)
[2026-02-03T01:04:04.142Z] [BOT] 💾 Saved posted_jobs.json: 2240 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:04:05.850Z] [BOT] ✅ Posted message: Software Engineer @ reddit in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T01:04:05.851Z] [BOT] 💾 Added channel posting: Software Engineer @ reddit → location channel (2 total channels)
[2026-02-03T01:04:05.851Z] [BOT] 💾 BEFORE MERGE: 2240 jobs in memory (cached)
[2026-02-03T01:04:05.892Z] [BOT] ✅ Loaded V2 database: 2240 jobs
💾 DISK STATE: 2240 jobs on disk
[2026-02-03T01:04:05.893Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2240
[2026-02-03T01:04:05.897Z] [BOT] 🔀 Deep merged: Software Engineer @ reddit (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-03T01:04:05.897Z] [BOT] 💾 AFTER MERGE: 2240 jobs (merged disk + memory)
[2026-02-03T01:04:05.898Z] [BOT] ✅ No jobs to archive (all 2240 jobs within 7-day window)
[2026-02-03T01:04:06.009Z] [BOT] 💾 Saved posted_jobs.json: 2240 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:04:10.511Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-03T01:04:10.512Z] [BOT] 📍 [ROUTING] "Paid Social, Brand Campaigns" @ anthropic
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-03T01:04:10.937Z] [BOT] ✅ Posted message: Paid Social, Brand Campaigns @ anthropic in #📊・JID_fb739488
  ✅ Industry: Paid Social, Brand Campaigns @ anthropic
[2026-02-03T01:04:10.938Z] [BOT] 💾 Added channel posting: Paid Social, Brand Campaigns @ anthropic → category channel (1 total channels)
[2026-02-03T01:04:10.938Z] [BOT] 💾 BEFORE MERGE: 2241 jobs in memory (cached)
[2026-02-03T01:04:10.988Z] [BOT] ✅ Loaded V2 database: 2240 jobs
💾 DISK STATE: 2240 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2241
[2026-02-03T01:04:10.997Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T01:04:10.998Z] [BOT] 💾 AFTER MERGE: 2241 jobs (merged disk + memory)
[2026-02-03T01:04:10.999Z] [BOT] ✅ No jobs to archive (all 2241 jobs within 7-day window)
[2026-02-03T01:04:11.114Z] [BOT] 💾 Saved posted_jobs.json: 2241 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:04:13.090Z] [BOT] ✅ Posted message: Paid Social, Brand Campaigns @ anthropic in #🌉・JID_739bbc0b
[2026-02-03T01:04:13.090Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T01:04:13.091Z] [BOT] 💾 Added channel posting: Paid Social, Brand Campaigns @ anthropic → location channel (2 total channels)
[2026-02-03T01:04:13.091Z] [BOT] 💾 BEFORE MERGE: 2241 jobs in memory (cached)
[2026-02-03T01:04:13.129Z] [BOT] ✅ Loaded V2 database: 2241 jobs
💾 DISK STATE: 2241 jobs on disk
[2026-02-03T01:04:13.129Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2241
[2026-02-03T01:04:13.133Z] [BOT] 🔀 Deep merged: Paid Social, Brand Campaigns @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-03T01:04:13.133Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2241 jobs (merged disk + memory)
[2026-02-03T01:04:13.135Z] [BOT] ✅ No jobs to archive (all 2241 jobs within 7-day window)
[2026-02-03T01:04:13.257Z] [BOT] 💾 Saved posted_jobs.json: 2241 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:04:17.756Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-02-03T01:04:17.759Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f61cab7b..." not found, but found as SHA256 "3d8c09fd356b880f"
[2026-02-03T01:04:17.759Z] [BOT] ⏭️  Skipping duplicate: JID_1ea2d8a3 (posted within 7 days)
[2026-02-03T01:04:17.759Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "32358e3da490c244"
⏭️  Skipping duplicate: JID_5e57916c (posted within 7 days)
[2026-02-03T01:04:17.759Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b6a7840..." not found, but found as SHA256 "3567a45bfda8bac6"
[2026-02-03T01:04:17.760Z] [BOT] ⏭️  Skipping duplicate: JID_e2a145f9 (posted within 7 days)
[2026-02-03T01:04:17.760Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9f904f01..." not found, but found as SHA256 "7de99c11d8a12879"
[2026-02-03T01:04:17.760Z] [BOT] ⏭️  Skipping duplicate: JID_010e7cfd (posted within 7 days)
[2026-02-03T01:04:17.760Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_43a378d2..." not found, but found as SHA256 "50470024651e6d41"
⏭️  Skipping duplicate: JID_eedc3453 (posted within 7 days)
[2026-02-03T01:04:17.760Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "654d8eb687becf87"
[2026-02-03T01:04:17.761Z] [BOT] ⏭️  Skipping duplicate: JID_464427a6 (posted within 7 days)
[2026-02-03T01:04:17.761Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "eed1139daa06c1b7"
[2026-02-03T01:04:17.761Z] [BOT] ⏭️  Skipping duplicate: JID_3190f496 (posted within 7 days)
[2026-02-03T01:04:17.761Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "942333cea06049e8"
[2026-02-03T01:04:17.761Z] [BOT] ⏭️  Skipping duplicate: JID_07c33d11 (posted within 7 days)
[2026-02-03T01:04:17.762Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a5c56d68..." not found, but found as SHA256 "51657926f755c1f3"
[2026-02-03T01:04:17.762Z] [BOT] ⏭️  Skipping duplicate: JID_a5c56d68 (posted within 7 days)
[2026-02-03T01:04:17.779Z] [BOT] ✅ Loaded pending queue: 299 total (289 pending, 10 enriched, 0 posted)
[2026-02-03T01:04:17.811Z] [BOT] ✅ Saved pending queue: 299 total (289 pending, 1 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-02-03T01:04:17.811Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T01:04:17.912Z] [BOT] 📂 Loaded 12313 existing routing entries
[2026-02-03T01:04:18.047Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 12322
   Timestamp: 2026-02-03T01:04:17.996Z
[2026-02-03T01:04:18.048Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T01:04:18.048Z] [BOT] Total attempts: 58
[2026-02-03T01:04:18.048Z] [BOT] Successful: 17
   Failed: 0
   Skipped: 41
[2026-02-03T01:04:18.049Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-03T01:04:18.049Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 5
   Top channels:
     1. #🌉・JID_739bbc0b: 7 posts
[2026-02-03T01:04:18.049Z] [BOT] 2. #💻・tech-jobs: 6 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
     5. #📊・JID_fb739488: 1 posts
[2026-02-03T01:04:18.051Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2241 jobs in memory (cached)
[2026-02-03T01:04:18.091Z] [BOT] ✅ Loaded V2 database: 2241 jobs
💾 DISK STATE: 2241 jobs on disk
[2026-02-03T01:04:18.092Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2241
[2026-02-03T01:04:18.096Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T01:04:18.096Z] [BOT] 💾 AFTER MERGE: 2241 jobs (merged disk + memory)
[2026-02-03T01:04:18.097Z] [BOT] ✅ No jobs to archive (all 2241 jobs within 7-day window)
[2026-02-03T01:04:18.221Z] [BOT] 💾 Saved posted_jobs.json: 2241 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:04:18.221Z] [BOT] ✅ Database saved successfully
[2026-02-03T01:04:20.243Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2465) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*