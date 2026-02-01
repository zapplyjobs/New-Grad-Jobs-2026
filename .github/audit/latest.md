# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T22:00:44.273Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T22:00:06.463Z] ========================================
[2026-02-01T22:00:06.465Z] Discord Bot Execution Log
[2026-02-01T22:00:06.465Z] Environment: GitHub Actions
[2026-02-01T22:00:06.465Z] Node Version: v20.20.0
[2026-02-01T22:00:06.465Z] ========================================
[2026-02-01T22:00:06.465Z] Environment Variables Check:
[2026-02-01T22:00:06.465Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T22:00:06.465Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T22:00:06.465Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T22:00:06.466Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T22:00:06.466Z] 
Multi-Channel Configuration:
[2026-02-01T22:00:06.466Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T22:00:06.466Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:00:06.466Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:00:06.466Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T22:00:06.466Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:00:06.466Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:00:06.466Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:00:06.466Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:00:06.466Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:00:06.466Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T22:00:06.466Z] 
Data Files Check:
[2026-02-01T22:00:06.467Z] .github/data/new_jobs.json: ✅ Exists (10 items, 83526 bytes)
[2026-02-01T22:00:06.533Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11025204 bytes)
[2026-02-01T22:00:06.534Z] 
========================================
[2026-02-01T22:00:06.534Z] Starting Enhanced Discord Bot...
[2026-02-01T22:00:06.534Z] ========================================
[2026-02-01T22:00:07.061Z] [BOT] ✅ Loaded V2 database: 2199 jobs
[2026-02-01T22:00:07.710Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T22:00:07.711Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T22:00:07.711Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T22:00:07.777Z] [BOT] ✅ Loaded pending queue: 742 total (692 pending, 50 enriched, 0 posted)
[2026-02-01T22:00:07.777Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Upmarket Account Executive at brex
[2026-02-01T22:00:07.792Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T22:00:07.792Z] [BOT] 🚫 Skipping blacklisted job: Energy Supply GMS Analyst – Or Senior - Associate - Intermediate at Dominion Energy
🚫 Skipping blacklisted job: Load Forecasting Engineer – Engineer/Senior/Staff - Engineering Analytics & Modeling at Dominion Energy
[2026-02-01T22:00:07.792Z] [BOT] 🚫 Skipping blacklisted job: Principal Mission Assurance Engineer at Northrop Grumman
🚫 Skipping blacklisted job: Director of Sales, Emerging & Scaled (New Business) at spotify
[2026-02-01T22:00:07.792Z] [BOT] 🚫 Skipping blacklisted job: Senior – Data Scientist at Walmart
🚫 Skipping blacklisted job: Manager, Sales Operations – Commissions at spotify
[2026-02-01T22:00:07.792Z] [BOT] 🚫 Skipping blacklisted job: Senior CES Operations Manager at figma
🚫 Skipping blacklisted job: Software Engineer / Principal Software Engineer - Aht at Northrop Grumman
[2026-02-01T22:00:07.793Z] [BOT] 🚫 Skipping blacklisted job: Marketing Strategy Manager at figma
🚫 Skipping blacklisted job: Community Experiences Manager at figma
🚫 Skipping blacklisted job: Manager, GTM Finance at figma
🚫 Skipping blacklisted job: Postdoctoral Scholar-Neutrino Physics at PennState University
🚫 Skipping blacklisted job: Postdoctoral Scholar at University of Miami
🚫 Skipping blacklisted job: Postdoctoral Appointee - Cosmology - Spherex Galaxy Clusters at Argonne National Laboratory
[2026-02-01T22:00:07.793Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - Coastal-urban Flooding at Argonne National Laboratory
🚫 Skipping blacklisted job: Manager, Field Marketing at figma
🚫 Skipping blacklisted job: Product Manager, Billing at clerk
🚫 Skipping blacklisted job: Manager, Mid-Market Sales at figma
🚫 Skipping blacklisted job: Manager, Solutions Consulting at figma
[2026-02-01T22:00:07.793Z] [BOT] 🚫 Skipping blacklisted job: Partner Manager, Scaled at figma
🚫 Skipping blacklisted job: Manager, Software Engineering - Interaction Design at figma
🚫 Skipping blacklisted job: Manager, Software Engineering - Billing at figma
[2026-02-01T22:00:07.793Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Creation Engine at figma
🚫 Skipping blacklisted job: Product Manager, Sites at figma
🚫 Skipping blacklisted job: Product Manager, CMS at figma
[2026-02-01T22:00:07.793Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Growth at figma
🚫 Skipping blacklisted job: Director, Design - Communication Tools at figma
[2026-02-01T22:00:07.793Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Expressive AI at figma
🚫 Skipping blacklisted job: Manager, Software Engineering - Collaboration Tools at figma
🚫 Skipping blacklisted job: Sales Onboarding Program Manager at figma
🚫 Skipping blacklisted job: Demo Strategy & Effectiveness Manager  at figma
[2026-02-01T22:00:07.793Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Creation Engine at figma
🚫 Skipping blacklisted job: Product Manager, Scale at figma
🚫 Skipping blacklisted job: Director, Software Engineering - Growth at figma
[2026-02-01T22:00:07.793Z] [BOT] 🚫 Skipping blacklisted job: Director, Software Engineering - Product Platform at figma
🚫 Skipping blacklisted job: Product Manager, AI at figma
🚫 Skipping blacklisted job: Manager, Mid-Market Sales  at figma
[2026-02-01T22:00:07.793Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Design Tools at figma
🚫 Skipping blacklisted job: Postdoctoral Research Associate at Texas A&M University - Corpus Christi
[2026-02-01T22:00:07.793Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - Cosmological Physics & Advanced Computing - CPAC at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Researcher - Computer Vision - AI/ML Radiology and Oncology at Johnson & Johnson
[2026-02-01T22:00:07.793Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher at National Renewable Energy Laboratory
🚫 Skipping blacklisted job: Senior Lidar Specialist at Parkhill
[2026-02-01T22:00:07.794Z] [BOT] 🚫 Skipping blacklisted job: Sr. Director, Integrated Marketing at gohighlevel
[2026-02-01T22:00:07.860Z] [BOT] ✅ Loaded pending queue: 742 total (692 pending, 50 enriched, 0 posted)
[2026-02-01T22:00:07.931Z] [BOT] ✅ Saved pending queue: 698 total (692 pending, 6 enriched, 0 posted)
🗑️ Removed 44 blacklisted jobs from pending queue
📋 After blacklist filter: 6 jobs (44 blacklisted)
[2026-02-01T22:00:07.931Z] [BOT] 📋 After data quality filter: 6 jobs (0 invalid)
[2026-02-01T22:00:07.932Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
   (1 grouped as same job with different locations)
[2026-02-01T22:00:07.932Z] [BOT] 📍 1 jobs with multiple locations:
   - Upmarket Account Executive @ brex: new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 45 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T22:00:07.935Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-01T22:00:07.936Z] [BOT] 📍 [ROUTING] "Upmarket Account Executive" @ brex
   Category: FINANCE (matched: "finance")
[2026-02-01T22:00:07.936Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T22:00:07.953Z] [BOT ERROR] (node:4053) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T22:00:08.132Z] [BOT] ✅ Posted message: Upmarket Account Executive @ brex in #💰・finance-jobs
[2026-02-01T22:00:08.133Z] [BOT] ✅ Industry: Upmarket Account Executive @ brex
[2026-02-01T22:00:08.134Z] [BOT] 💾 Added channel posting: Upmarket Account Executive @ brex → category channel (1 total channels)
[2026-02-01T22:00:08.134Z] [BOT] 💾 BEFORE MERGE: 2200 jobs in memory (cached)
[2026-02-01T22:00:08.195Z] [BOT] ✅ Loaded V2 database: 2199 jobs
💾 DISK STATE: 2199 jobs on disk
[2026-02-01T22:00:08.196Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2200
[2026-02-01T22:00:08.201Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:00:08.201Z] [BOT] 💾 AFTER MERGE: 2200 jobs (merged disk + memory)
[2026-02-01T22:00:08.202Z] [BOT] ✅ No jobs to archive (all 2200 jobs within 7-day window)
[2026-02-01T22:00:08.343Z] [BOT] 💾 Saved posted_jobs.json: 2200 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:00:10.113Z] [BOT] ✅ Posted message: Upmarket Account Executive @ brex in #🗽・JID_98d4f0de
[2026-02-01T22:00:10.113Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T22:00:10.114Z] [BOT] 💾 Added channel posting: Upmarket Account Executive @ brex → location channel (2 total channels)
[2026-02-01T22:00:10.114Z] [BOT] 💾 BEFORE MERGE: 2200 jobs in memory (cached)
[2026-02-01T22:00:10.167Z] [BOT] ✅ Loaded V2 database: 2200 jobs
💾 DISK STATE: 2200 jobs on disk
[2026-02-01T22:00:10.168Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2200
[2026-02-01T22:00:10.172Z] [BOT] 🔀 Deep merged: Upmarket Account Executive @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T22:00:10.172Z] [BOT] 💾 AFTER MERGE: 2200 jobs (merged disk + memory)
[2026-02-01T22:00:10.173Z] [BOT] ✅ No jobs to archive (all 2200 jobs within 7-day window)
[2026-02-01T22:00:10.291Z] [BOT] 💾 Saved posted_jobs.json: 2200 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:00:14.793Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T22:00:14.795Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_e5e989f2 Energy
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T22:00:14.795Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T22:00:15.104Z] [BOT] ✅ Posted message: Associate Data Scientist @ ORG_e5e989f2 Energy in #📊・JID_fb739488
  ✅ Industry: Associate Data Scientist @ ORG_e5e989f2 Energy
[2026-02-01T22:00:15.105Z] [BOT] 💾 Added channel posting: Associate Data Scientist @ ORG_e5e989f2 Energy → category channel (1 total channels)
[2026-02-01T22:00:15.105Z] [BOT] 💾 BEFORE MERGE: 2201 jobs in memory (cached)
[2026-02-01T22:00:15.159Z] [BOT] ✅ Loaded V2 database: 2200 jobs
💾 DISK STATE: 2200 jobs on disk
[2026-02-01T22:00:15.160Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2201
[2026-02-01T22:00:15.164Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:00:15.164Z] [BOT] 💾 AFTER MERGE: 2201 jobs (merged disk + memory)
[2026-02-01T22:00:15.165Z] [BOT] ✅ No jobs to archive (all 2201 jobs within 7-day window)
[2026-02-01T22:00:15.288Z] [BOT] 💾 Saved posted_jobs.json: 2201 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:00:17.519Z] [BOT] ✅ Posted message: Associate Data Scientist @ ORG_e5e989f2 Energy in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T22:00:17.520Z] [BOT] 💾 Added channel posting: Associate Data Scientist @ ORG_e5e989f2 Energy → location channel (2 total channels)
[2026-02-01T22:00:17.520Z] [BOT] 💾 BEFORE MERGE: 2201 jobs in memory (cached)
[2026-02-01T22:00:17.573Z] [BOT] ✅ Loaded V2 database: 2201 jobs
💾 DISK STATE: 2201 jobs on disk
[2026-02-01T22:00:17.574Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2201
[2026-02-01T22:00:17.579Z] [BOT] 🔀 Deep merged: Associate Data Scientist @ ORG_e5e989f2 Energy (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T22:00:17.579Z] [BOT] 💾 AFTER MERGE: 2201 jobs (merged disk + memory)
[2026-02-01T22:00:17.580Z] [BOT] ✅ No jobs to archive (all 2201 jobs within 7-day window)
[2026-02-01T22:00:17.713Z] [BOT] 💾 Saved posted_jobs.json: 2201 active jobs
[2026-02-01T22:00:17.713Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T22:00:22.215Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-01T22:00:22.218Z] [BOT] 📍 [ROUTING] "Robot Operator - Swing Shift" @ 1X
   Category: TECH (default)
[2026-02-01T22:00:22.218Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T22:00:22.769Z] [BOT] ✅ Posted message: Robot Operator - Swing Shift @ 1X in #💻・tech-jobs
[2026-02-01T22:00:22.769Z] [BOT] ✅ Industry: Robot Operator - Swing Shift @ 1X
[2026-02-01T22:00:22.770Z] [BOT] 💾 Added channel posting: Robot Operator - Swing Shift @ 1X → category channel (1 total channels)
[2026-02-01T22:00:22.771Z] [BOT] 💾 BEFORE MERGE: 2202 jobs in memory (cached)
[2026-02-01T22:00:22.826Z] [BOT] ✅ Loaded V2 database: 2201 jobs
💾 DISK STATE: 2201 jobs on disk
[2026-02-01T22:00:22.826Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2202
[2026-02-01T22:00:22.831Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:00:22.831Z] [BOT] 💾 AFTER MERGE: 2202 jobs (merged disk + memory)
[2026-02-01T22:00:22.833Z] [BOT] ✅ No jobs to archive (all 2202 jobs within 7-day window)
[2026-02-01T22:00:22.966Z] [BOT] 💾 Saved posted_jobs.json: 2202 active jobs
[2026-02-01T22:00:22.969Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T22:00:24.742Z] [BOT] ✅ Posted message: Robot Operator - Swing Shift @ 1X in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T22:00:24.743Z] [BOT] 💾 Added channel posting: Robot Operator - Swing Shift @ 1X → location channel (2 total channels)
[2026-02-01T22:00:24.743Z] [BOT] 💾 BEFORE MERGE: 2202 jobs in memory (cached)
[2026-02-01T22:00:24.795Z] [BOT] ✅ Loaded V2 database: 2202 jobs
💾 DISK STATE: 2202 jobs on disk
[2026-02-01T22:00:24.795Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2202
[2026-02-01T22:00:24.799Z] [BOT] 🔀 Deep merged: Robot Operator - Swing Shift @ 1X (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T22:00:24.799Z] [BOT] 💾 AFTER MERGE: 2202 jobs (merged disk + memory)
[2026-02-01T22:00:24.801Z] [BOT] ✅ No jobs to archive (all 2202 jobs within 7-day window)
[2026-02-01T22:00:24.931Z] [BOT] 💾 Saved posted_jobs.json: 2202 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:00:29.432Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T22:00:29.435Z] [BOT] 📍 [ROUTING] "AI and Automation Programmer Analyst - Associate - SAP S/4HANA Implementation" @ ORG_59d85068
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T22:00:29.435Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T22:00:29.780Z] [BOT] ✅ Posted message: AI and Automation Programmer Analyst - Associate - SAP S/4HANA Implementation @ ORG_59d85068 in #🤖・ai-jobs
[2026-02-01T22:00:29.780Z] [BOT] ✅ Industry: AI and Automation Programmer Analyst - Associate - SAP S/4HANA Implementation @ ORG_59d85068
[2026-02-01T22:00:29.782Z] [BOT] 💾 Added channel posting: AI and Automation Programmer Analyst - Associate - SAP S/4HANA Implementation @ ORG_59d85068 → category channel (1 total channels)
[2026-02-01T22:00:29.782Z] [BOT] 💾 BEFORE MERGE: 2203 jobs in memory (cached)
[2026-02-01T22:00:29.835Z] [BOT] ✅ Loaded V2 database: 2202 jobs
💾 DISK STATE: 2202 jobs on disk
[2026-02-01T22:00:29.836Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2203
[2026-02-01T22:00:29.840Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2203 jobs (merged disk + memory)
[2026-02-01T22:00:29.841Z] [BOT] ✅ No jobs to archive (all 2203 jobs within 7-day window)
[2026-02-01T22:00:29.979Z] [BOT] 💾 Saved posted_jobs.json: 2203 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:00:31.771Z] [BOT] ✅ Posted message: AI and Automation Programmer Analyst - Associate - SAP S/4HANA Implementation @ ORG_59d85068 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T22:00:31.771Z] [BOT] 💾 Added channel posting: AI and Automation Programmer Analyst - Associate - SAP S/4HANA Implementation @ ORG_59d85068 → location channel (2 total channels)
[2026-02-01T22:00:31.771Z] [BOT] 💾 BEFORE MERGE: 2203 jobs in memory (cached)
[2026-02-01T22:00:31.833Z] [BOT] ✅ Loaded V2 database: 2203 jobs
💾 DISK STATE: 2203 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2203
[2026-02-01T22:00:31.842Z] [BOT] 🔀 Deep merged: AI and Automation Programmer Analyst - Associate - SAP S/4HANA Implementation @ ORG_59d85068 (disk: 1 channels → merged: 2 channels)
[2026-02-01T22:00:31.842Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2203 jobs (merged disk + memory)
[2026-02-01T22:00:31.844Z] [BOT] ✅ No jobs to archive (all 2203 jobs within 7-day window)
[2026-02-01T22:00:31.971Z] [BOT] 💾 Saved posted_jobs.json: 2203 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:00:33.474Z] [BOT] 📍 [ROUTING] "Engineer 1 - Applied LLM Team" @ ORG_f8b04bf3
   Category: AI (matched: "artificial intelligence")
[2026-02-01T22:00:33.474Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T22:00:33.669Z] [BOT] ✅ Posted message: Engineer 1 - Applied LLM Team @ ORG_f8b04bf3 in #🤖・ai-jobs
  ✅ Industry: Engineer 1 - Applied LLM Team @ ORG_f8b04bf3
[2026-02-01T22:00:33.670Z] [BOT] 💾 Added channel posting: Engineer 1 - Applied LLM Team @ ORG_f8b04bf3 → category channel (1 total channels)
[2026-02-01T22:00:33.670Z] [BOT] 💾 BEFORE MERGE: 2204 jobs in memory (cached)
[2026-02-01T22:00:33.722Z] [BOT] ✅ Loaded V2 database: 2203 jobs
💾 DISK STATE: 2203 jobs on disk
[2026-02-01T22:00:33.723Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2204
[2026-02-01T22:00:33.727Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:00:33.727Z] [BOT] 💾 AFTER MERGE: 2204 jobs (merged disk + memory)
[2026-02-01T22:00:33.728Z] [BOT] ✅ No jobs to archive (all 2204 jobs within 7-day window)
[2026-02-01T22:00:33.845Z] [BOT] 💾 Saved posted_jobs.json: 2204 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:00:35.578Z] [BOT] ✅ Posted message: Engineer 1 - Applied LLM Team @ ORG_f8b04bf3 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T22:00:35.579Z] [BOT] 💾 Added channel posting: Engineer 1 - Applied LLM Team @ ORG_f8b04bf3 → location channel (2 total channels)
[2026-02-01T22:00:35.579Z] [BOT] 💾 BEFORE MERGE: 2204 jobs in memory (cached)
[2026-02-01T22:00:35.633Z] [BOT] ✅ Loaded V2 database: 2204 jobs
💾 DISK STATE: 2204 jobs on disk
[2026-02-01T22:00:35.633Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2204
[2026-02-01T22:00:35.637Z] [BOT] 🔀 Deep merged: Engineer 1 - Applied LLM Team @ ORG_f8b04bf3 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T22:00:35.637Z] [BOT] 💾 AFTER MERGE: 2204 jobs (merged disk + memory)
[2026-02-01T22:00:35.638Z] [BOT] ✅ No jobs to archive (all 2204 jobs within 7-day window)
[2026-02-01T22:00:35.759Z] [BOT] 💾 Saved posted_jobs.json: 2204 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:00:40.260Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-02-01T22:00:40.262Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9de921a9..." not found, but found as SHA256 "b3ffbea34c1f9166"
[2026-02-01T22:00:40.262Z] [BOT] ⏭️  Skipping duplicate: JID_9de921a9 (posted within 7 days)
[2026-02-01T22:00:40.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3080c75e..." not found, but found as SHA256 "06511d7531717e1f"
⏭️  Skipping duplicate: JID_f4540c5c (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_14db4bd6-..." not found, but found as SHA256 "67313923a5f1e445"
⏭️  Skipping duplicate: JID_6ee883ff (posted within 7 days)
[2026-02-01T22:00:40.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_79aae14e..." not found, but found as SHA256 "e546b06b6a867d50"
[2026-02-01T22:00:40.264Z] [BOT] ⏭️  Skipping duplicate: JID_95b99166 (posted within 7 days)
[2026-02-01T22:00:40.264Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3512bc7a-..." not found, but found as SHA256 "898d0c19f352c492"
[2026-02-01T22:00:40.264Z] [BOT] ⏭️  Skipping duplicate: JID_87b93c14-team_r-01194 (posted within 7 days)
[2026-02-01T22:00:40.320Z] [BOT] ✅ Loaded pending queue: 698 total (692 pending, 6 enriched, 0 posted)
[2026-02-01T22:00:40.398Z] [BOT] ✅ Saved pending queue: 698 total (692 pending, 1 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T22:00:40.509Z] [BOT] 📂 Loaded 12280 existing routing entries
[2026-02-01T22:00:40.633Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 12285
   Timestamp: 2026-02-01T22:00:40.588Z
[2026-02-01T22:00:40.633Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T22:00:40.633Z] [BOT] Total attempts: 54
   Successful: 10
   Failed: 0
   Skipped: 44
[2026-02-01T22:00:40.634Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-01T22:00:40.634Z] [BOT] Total posts: 10
   Channels used: 7
   Top channels:
     1. #🗽・JID_98d4f0de: 2 posts
     2. #🌉・JID_739bbc0b: 2 posts
     3. #🤖・ai-jobs: 2 posts
[2026-02-01T22:00:40.634Z] [BOT] 4. #💰・finance-jobs: 1 posts
     5. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T22:00:40.634Z] [BOT] 💾 BEFORE MERGE: 2204 jobs in memory (cached)
[2026-02-01T22:00:40.691Z] [BOT] ✅ Loaded V2 database: 2204 jobs
💾 DISK STATE: 2204 jobs on disk
[2026-02-01T22:00:40.691Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2204
[2026-02-01T22:00:40.695Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:00:40.695Z] [BOT] 💾 AFTER MERGE: 2204 jobs (merged disk + memory)
[2026-02-01T22:00:40.696Z] [BOT] ✅ No jobs to archive (all 2204 jobs within 7-day window)
[2026-02-01T22:00:40.826Z] [BOT] 💾 Saved posted_jobs.json: 2204 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T22:00:42.848Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4053) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*