# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T21:16:27.432Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T21:15:37.272Z] ========================================
[2026-02-01T21:15:37.274Z] Discord Bot Execution Log
[2026-02-01T21:15:37.274Z] Environment: GitHub Actions
[2026-02-01T21:15:37.274Z] Node Version: v20.20.0
[2026-02-01T21:15:37.275Z] ========================================
[2026-02-01T21:15:37.275Z] Environment Variables Check:
[2026-02-01T21:15:37.275Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T21:15:37.275Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T21:15:37.275Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T21:15:37.275Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T21:15:37.275Z] 
Multi-Channel Configuration:
[2026-02-01T21:15:37.275Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T21:15:37.276Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:15:37.276Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:15:37.276Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T21:15:37.276Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:15:37.276Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:15:37.276Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:15:37.276Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:15:37.276Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:15:37.276Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T21:15:37.276Z] 
Data Files Check:
[2026-02-01T21:15:37.277Z] .github/data/new_jobs.json: ✅ Exists (10 items, 144975 bytes)
[2026-02-01T21:15:37.334Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10896302 bytes)
[2026-02-01T21:15:37.334Z] 
========================================
[2026-02-01T21:15:37.334Z] Starting Enhanced Discord Bot...
[2026-02-01T21:15:37.334Z] ========================================
[2026-02-01T21:15:37.927Z] [BOT] ✅ Loaded V2 database: 2179 jobs
[2026-02-01T21:15:38.523Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T21:15:38.523Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T21:15:38.524Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T21:15:38.573Z] [BOT] ✅ Loaded pending queue: 762 total (712 pending, 50 enriched, 0 posted)
[2026-02-01T21:15:38.573Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Email Operations Manager at figma
[2026-02-01T21:15:38.593Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T21:15:38.593Z] [BOT] 🚫 Skipping blacklisted job: Email Operations Manager at figma
[2026-02-01T21:15:38.593Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Operations Manager, Product-Led Growth at brex
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, B2B Sales at brex
[2026-02-01T21:15:38.594Z] [BOT] 🚫 Skipping blacklisted job: BizOps Lead, BD at brex
🚫 Skipping blacklisted job: BizOps Lead, BD at brex
[2026-02-01T21:15:38.594Z] [BOT] 🚫 Skipping blacklisted job:  BizOps Lead, BD at brex
🚫 Skipping blacklisted job: Manager, Global Yield Programs & Incentives at spotify
🚫 Skipping blacklisted job: Senior Associate - Analytics - Media at VaynerMedia
[2026-02-01T21:15:38.594Z] [BOT] 🚫 Skipping blacklisted job: Director, Corporate & Securities Counsel at figma
🚫 Skipping blacklisted job: Associate Manager, Compliance at coinbase
[2026-02-01T21:15:38.594Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist - Product at gusto
🚫 Skipping blacklisted job: Postdoctoral Research Associate - Mathematics at Northeastern University
🚫 Skipping blacklisted job: Postdoctoral Scholar - Interdisciplinary Data Science at University of Nevada Las Vegas (UNLV)
[2026-02-01T21:15:38.594Z] [BOT] 🚫 Skipping blacklisted job: People Technology Delivery Manager at gusto
🚫 Skipping blacklisted job: Senior Product Marketing Manager, HR Experiences at gusto
[2026-02-01T21:15:38.594Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Payroll GTM at gusto
🚫 Skipping blacklisted job: Government Affairs Lead (Small Business Healthcare, Benefits, and HR Policy) at gusto
🚫 Skipping blacklisted job: Corporate Tax Manager at gusto
[2026-02-01T21:15:38.595Z] [BOT] 🚫 Skipping blacklisted job: Process and Controls Financial Manager at gusto
🚫 Skipping blacklisted job: Sr Staff Software Engineer, Entity Management at gusto
🚫 Skipping blacklisted job: Expansion Account Manager  at gusto
🚫 Skipping blacklisted job: Principal Software Engineer - Payroll at gusto
🚫 Skipping blacklisted job: Corporate Development & Partnerships Deal Lead at gusto
[2026-02-01T21:15:38.595Z] [BOT] 🚫 Skipping blacklisted job: Software Engineering Manager, Symmetry  at gusto
🚫 Skipping blacklisted job: Manager, Partner Product and Delivery at spotify
[2026-02-01T21:15:38.595Z] [BOT] 🚫 Skipping blacklisted job: Associate Product Manager Intern at coinbase
🚫 Skipping blacklisted job: TRAIL Rising Leaders Program - Software Engineering at Newrez
🚫 Skipping blacklisted job: Engineering Manager, Salesforce at brex
[2026-02-01T21:15:38.595Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Salesforce at brex
🚫 Skipping blacklisted job: Engineering Manager, GTM Engineering  at brex
🚫 Skipping blacklisted job: Engineering Manager, GTM Engineering  at brex
🚫 Skipping blacklisted job: Engineering Manager, GTM Engineering  at brex
[2026-02-01T21:15:38.595Z] [BOT] 🚫 Skipping blacklisted job: Staff Economist at brex
🚫 Skipping blacklisted job: Senior Engineering Manager, Activation at brex
🚫 Skipping blacklisted job: BizOps Lead, BD at brex
🚫 Skipping blacklisted job: Community Marketing Manager - Figma Weave (New York, United States)  at figma
[2026-02-01T21:15:38.595Z] [BOT] 🚫 Skipping blacklisted job: Quality Engineer - Principal Quality Engineer at Northrop Grumman
🚫 Skipping blacklisted job: Strategic Program Manager, Contingent Workforce at figma
[2026-02-01T21:15:38.644Z] [BOT] ✅ Loaded pending queue: 762 total (712 pending, 50 enriched, 0 posted)
[2026-02-01T21:15:38.725Z] [BOT] ✅ Saved pending queue: 724 total (712 pending, 12 enriched, 0 posted)
🗑️ Removed 38 blacklisted jobs from pending queue
📋 After blacklist filter: 12 jobs (38 blacklisted)
[2026-02-01T21:15:38.725Z] [BOT] 📋 After data quality filter: 12 jobs (0 invalid)
[2026-02-01T21:15:38.726Z] [BOT] 📋 After multi-location grouping: 12 unique jobs to post
[2026-02-01T21:15:38.726Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T21:15:38.730Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T21:15:38.731Z] [BOT] 📍 [ROUTING] "Geospatial Data Operations Specialist - Fixed-Term - Montana or" @ onXmaps
[2026-02-01T21:15:38.731Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T21:15:38.749Z] [BOT ERROR] (node:4062) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T21:15:39.039Z] [BOT] ✅ Posted message: Geospatial Data Operations Specialist - Fixed-Term - Montana or @ onXmaps in #💻・tech-jobs
  ✅ Industry: Geospatial Data Operations Specialist - Fixed-Term - Montana or @ onXmaps
[2026-02-01T21:15:39.040Z] [BOT] 💾 Added channel posting: Geospatial Data Operations Specialist - Fixed-Term - Montana or @ onXmaps → category channel (1 total channels)
[2026-02-01T21:15:39.040Z] [BOT] 💾 BEFORE MERGE: 2180 jobs in memory (cached)
[2026-02-01T21:15:39.099Z] [BOT] ✅ Loaded V2 database: 2179 jobs
💾 DISK STATE: 2179 jobs on disk
[2026-02-01T21:15:39.100Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2180
[2026-02-01T21:15:39.106Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:15:39.107Z] [BOT] 💾 AFTER MERGE: 2180 jobs (merged disk + memory)
[2026-02-01T21:15:39.108Z] [BOT] ✅ No jobs to archive (all 2180 jobs within 7-day window)
[2026-02-01T21:15:39.270Z] [BOT] 💾 Saved posted_jobs.json: 2180 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:15:41.043Z] [BOT] ✅ Posted message: Geospatial Data Operations Specialist - Fixed-Term - Montana or @ onXmaps in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T21:15:41.044Z] [BOT] 💾 Added channel posting: Geospatial Data Operations Specialist - Fixed-Term - Montana or @ onXmaps → location channel (2 total channels)
[2026-02-01T21:15:41.044Z] [BOT] 💾 BEFORE MERGE: 2180 jobs in memory (cached)
[2026-02-01T21:15:41.082Z] [BOT] ✅ Loaded V2 database: 2180 jobs
[2026-02-01T21:15:41.082Z] [BOT] 💾 DISK STATE: 2180 jobs on disk
[2026-02-01T21:15:41.082Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2180
[2026-02-01T21:15:41.087Z] [BOT] 🔀 Deep merged: Geospatial Data Operations Specialist - Fixed-Term - Montana or @ onXmaps (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:15:41.087Z] [BOT] 💾 AFTER MERGE: 2180 jobs (merged disk + memory)
[2026-02-01T21:15:41.088Z] [BOT] ✅ No jobs to archive (all 2180 jobs within 7-day window)
[2026-02-01T21:15:41.197Z] [BOT] 💾 Saved posted_jobs.json: 2180 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:15:42.700Z] [BOT] 📍 [ROUTING] "Software Engineer - Ctj - Top Secret" @ ORG_c7bac469
[2026-02-01T21:15:42.700Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T21:15:42.948Z] [BOT] ✅ Posted message: Software Engineer - Ctj - Top Secret @ ORG_c7bac469 in #💻・tech-jobs
[2026-02-01T21:15:42.948Z] [BOT] ✅ Industry: Software Engineer - Ctj - Top Secret @ ORG_c7bac469
[2026-02-01T21:15:42.949Z] [BOT] 💾 Added channel posting: Software Engineer - Ctj - Top Secret @ ORG_c7bac469 → category channel (1 total channels)
[2026-02-01T21:15:42.949Z] [BOT] 💾 BEFORE MERGE: 2181 jobs in memory (cached)
[2026-02-01T21:15:42.988Z] [BOT] ✅ Loaded V2 database: 2180 jobs
💾 DISK STATE: 2180 jobs on disk
[2026-02-01T21:15:42.988Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2181
[2026-02-01T21:15:42.993Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:15:42.993Z] [BOT] 💾 AFTER MERGE: 2181 jobs (merged disk + memory)
[2026-02-01T21:15:42.995Z] [BOT] ✅ No jobs to archive (all 2181 jobs within 7-day window)
[2026-02-01T21:15:43.104Z] [BOT] 💾 Saved posted_jobs.json: 2181 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:15:44.878Z] [BOT] ✅ Posted message: Software Engineer - Ctj - Top Secret @ ORG_c7bac469 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T21:15:44.879Z] [BOT] 💾 Added channel posting: Software Engineer - Ctj - Top Secret @ ORG_c7bac469 → location channel (2 total channels)
[2026-02-01T21:15:44.879Z] [BOT] 💾 BEFORE MERGE: 2181 jobs in memory (cached)
[2026-02-01T21:15:44.918Z] [BOT] ✅ Loaded V2 database: 2181 jobs
💾 DISK STATE: 2181 jobs on disk
[2026-02-01T21:15:44.918Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2181
[2026-02-01T21:15:44.923Z] [BOT] 🔀 Deep merged: Software Engineer - Ctj - Top Secret @ ORG_c7bac469 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:15:44.923Z] [BOT] 💾 AFTER MERGE: 2181 jobs (merged disk + memory)
[2026-02-01T21:15:44.924Z] [BOT] ✅ No jobs to archive (all 2181 jobs within 7-day window)
[2026-02-01T21:15:45.031Z] [BOT] 💾 Saved posted_jobs.json: 2181 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:15:46.532Z] [BOT] 📍 [ROUTING] "Program Coordinator - Gift Services & Data Management" @ ORG_401f1721 Hutchinson Cancer Center
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T21:15:46.837Z] [BOT] ✅ Posted message: Program Coordinator - Gift Services & Data Management @ ORG_401f1721 Hutchinson Cancer Center in #💻・tech-jobs
  ✅ Industry: Program Coordinator - Gift Services & Data Management @ ORG_401f1721 Hutchinson Cancer Center
[2026-02-01T21:15:46.838Z] [BOT] 💾 Added channel posting: Program Coordinator - Gift Services & Data Management @ ORG_401f1721 Hutchinson Cancer Center → category channel (1 total channels)
[2026-02-01T21:15:46.838Z] [BOT] 💾 BEFORE MERGE: 2182 jobs in memory (cached)
[2026-02-01T21:15:46.874Z] [BOT] ✅ Loaded V2 database: 2181 jobs
💾 DISK STATE: 2181 jobs on disk
[2026-02-01T21:15:46.875Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2182
[2026-02-01T21:15:46.879Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2182 jobs (merged disk + memory)
[2026-02-01T21:15:46.881Z] [BOT] ✅ No jobs to archive (all 2182 jobs within 7-day window)
[2026-02-01T21:15:46.987Z] [BOT] 💾 Saved posted_jobs.json: 2182 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:15:48.669Z] [BOT] ✅ Posted message: Program Coordinator - Gift Services & Data Management @ ORG_401f1721 Hutchinson Cancer Center in #🌲・JID_efdf5921
[2026-02-01T21:15:48.669Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T21:15:48.669Z] [BOT] 💾 Added channel posting: Program Coordinator - Gift Services & Data Management @ ORG_401f1721 Hutchinson Cancer Center → location channel (2 total channels)
[2026-02-01T21:15:48.670Z] [BOT] 💾 BEFORE MERGE: 2182 jobs in memory (cached)
[2026-02-01T21:15:48.708Z] [BOT] ✅ Loaded V2 database: 2182 jobs
💾 DISK STATE: 2182 jobs on disk
[2026-02-01T21:15:48.709Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2182
[2026-02-01T21:15:48.713Z] [BOT] 🔀 Deep merged: Program Coordinator - Gift Services & Data Management @ ORG_401f1721 Hutchinson Cancer Center (disk: 1 channels → merged: 2 channels)
[2026-02-01T21:15:48.713Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2182 jobs (merged disk + memory)
[2026-02-01T21:15:48.714Z] [BOT] ✅ No jobs to archive (all 2182 jobs within 7-day window)
[2026-02-01T21:15:48.821Z] [BOT] 💾 Saved posted_jobs.json: 2182 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:15:50.322Z] [BOT] 📍 [ROUTING] "Software Engineer 2" @ ORG_e9c5e076 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T21:15:50.485Z] [BOT] ✅ Posted message: Software Engineer 2 @ ORG_e9c5e076 Technologies in #💻・tech-jobs
[2026-02-01T21:15:50.485Z] [BOT] ✅ Industry: Software Engineer 2 @ ORG_e9c5e076 Technologies
[2026-02-01T21:15:50.486Z] [BOT] 💾 Added channel posting: Software Engineer 2 @ ORG_e9c5e076 Technologies → category channel (1 total channels)
💾 BEFORE MERGE: 2183 jobs in memory (cached)
[2026-02-01T21:15:50.525Z] [BOT] ✅ Loaded V2 database: 2182 jobs
💾 DISK STATE: 2182 jobs on disk
[2026-02-01T21:15:50.525Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2183
[2026-02-01T21:15:50.529Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:15:50.530Z] [BOT] 💾 AFTER MERGE: 2183 jobs (merged disk + memory)
[2026-02-01T21:15:50.531Z] [BOT] ✅ No jobs to archive (all 2183 jobs within 7-day window)
[2026-02-01T21:15:50.650Z] [BOT] 💾 Saved posted_jobs.json: 2183 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:15:52.344Z] [BOT] ✅ Posted message: Software Engineer 2 @ ORG_e9c5e076 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T21:15:52.345Z] [BOT] 💾 Added channel posting: Software Engineer 2 @ ORG_e9c5e076 Technologies → location channel (2 total channels)
[2026-02-01T21:15:52.345Z] [BOT] 💾 BEFORE MERGE: 2183 jobs in memory (cached)
[2026-02-01T21:15:52.381Z] [BOT] ✅ Loaded V2 database: 2183 jobs
💾 DISK STATE: 2183 jobs on disk
[2026-02-01T21:15:52.382Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2183
[2026-02-01T21:15:52.387Z] [BOT] 🔀 Deep merged: Software Engineer 2 @ ORG_e9c5e076 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:15:52.387Z] [BOT] 💾 AFTER MERGE: 2183 jobs (merged disk + memory)
[2026-02-01T21:15:52.388Z] [BOT] ✅ No jobs to archive (all 2183 jobs within 7-day window)
[2026-02-01T21:15:52.499Z] [BOT] 💾 Saved posted_jobs.json: 2183 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:15:54.001Z] [BOT] 📍 [ROUTING] "New Grad-Software Engineer" @ ORG_65b25ee9
   Category: TECH (matched: "software")
[2026-02-01T21:15:54.001Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T21:15:54.165Z] [BOT] ✅ Posted message: New Grad-Software Engineer @ ORG_65b25ee9 in #💻・tech-jobs
[2026-02-01T21:15:54.166Z] [BOT] ✅ Industry: New Grad-Software Engineer @ ORG_65b25ee9
[2026-02-01T21:15:54.166Z] [BOT] 💾 Added channel posting: New Grad-Software Engineer @ ORG_65b25ee9 → category channel (1 total channels)
[2026-02-01T21:15:54.166Z] [BOT] 💾 BEFORE MERGE: 2184 jobs in memory (cached)
[2026-02-01T21:15:54.204Z] [BOT] ✅ Loaded V2 database: 2183 jobs
[2026-02-01T21:15:54.204Z] [BOT] 💾 DISK STATE: 2183 jobs on disk
[2026-02-01T21:15:54.205Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2184
[2026-02-01T21:15:54.209Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:15:54.209Z] [BOT] 💾 AFTER MERGE: 2184 jobs (merged disk + memory)
[2026-02-01T21:15:54.210Z] [BOT] ✅ No jobs to archive (all 2184 jobs within 7-day window)
[2026-02-01T21:15:54.318Z] [BOT] 💾 Saved posted_jobs.json: 2184 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:15:56.049Z] [BOT] ✅ Posted message: New Grad-Software Engineer @ ORG_65b25ee9 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T21:15:56.050Z] [BOT] 💾 Added channel posting: New Grad-Software Engineer @ ORG_65b25ee9 → location channel (2 total channels)
[2026-02-01T21:15:56.050Z] [BOT] 💾 BEFORE MERGE: 2184 jobs in memory (cached)
[2026-02-01T21:15:56.086Z] [BOT] ✅ Loaded V2 database: 2184 jobs
💾 DISK STATE: 2184 jobs on disk
[2026-02-01T21:15:56.087Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2184
[2026-02-01T21:15:56.091Z] [BOT] 🔀 Deep merged: New Grad-Software Engineer @ ORG_65b25ee9 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:15:56.091Z] [BOT] 💾 AFTER MERGE: 2184 jobs (merged disk + memory)
[2026-02-01T21:15:56.093Z] [BOT] ✅ No jobs to archive (all 2184 jobs within 7-day window)
[2026-02-01T21:15:56.198Z] [BOT] 💾 Saved posted_jobs.json: 2184 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:15:57.699Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_75f04b84
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T21:15:57.907Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_75f04b84
[2026-02-01T21:15:57.908Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_75f04b84 → category channel (1 total channels)
[2026-02-01T21:15:57.909Z] [BOT] 💾 BEFORE MERGE: 2185 jobs in memory (cached)
[2026-02-01T21:15:57.956Z] [BOT] ✅ Loaded V2 database: 2184 jobs
💾 DISK STATE: 2184 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2185
[2026-02-01T21:15:57.960Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:15:57.960Z] [BOT] 💾 AFTER MERGE: 2185 jobs (merged disk + memory)
[2026-02-01T21:15:57.962Z] [BOT] ✅ No jobs to archive (all 2185 jobs within 7-day window)
[2026-02-01T21:15:58.078Z] [BOT] 💾 Saved posted_jobs.json: 2185 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:15:59.580Z] [BOT] 📍 [ROUTING] "Technical Consultant 1" @ ORG_6be94934
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T21:15:59.897Z] [BOT] ✅ Posted message: Technical Consultant 1 @ ORG_6be94934 in #💻・tech-jobs
  ✅ Industry: Technical Consultant 1 @ ORG_6be94934
[2026-02-01T21:15:59.898Z] [BOT] 💾 Added channel posting: Technical Consultant 1 @ ORG_6be94934 → category channel (1 total channels)
[2026-02-01T21:15:59.899Z] [BOT] 💾 BEFORE MERGE: 2186 jobs in memory (cached)
[2026-02-01T21:15:59.938Z] [BOT] ✅ Loaded V2 database: 2185 jobs
💾 DISK STATE: 2185 jobs on disk
[2026-02-01T21:15:59.938Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2186
[2026-02-01T21:15:59.943Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:15:59.943Z] [BOT] 💾 AFTER MERGE: 2186 jobs (merged disk + memory)
[2026-02-01T21:15:59.944Z] [BOT] ✅ No jobs to archive (all 2186 jobs within 7-day window)
[2026-02-01T21:16:00.056Z] [BOT] 💾 Saved posted_jobs.json: 2186 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:16:01.832Z] [BOT] ✅ Posted message: Technical Consultant 1 @ ORG_6be94934 in #📍・JID_6daed763
[2026-02-01T21:16:01.832Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T21:16:01.833Z] [BOT] 💾 Added channel posting: Technical Consultant 1 @ ORG_6be94934 → location channel (2 total channels)
[2026-02-01T21:16:01.833Z] [BOT] 💾 BEFORE MERGE: 2186 jobs in memory (cached)
[2026-02-01T21:16:01.878Z] [BOT] ✅ Loaded V2 database: 2186 jobs
💾 DISK STATE: 2186 jobs on disk
[2026-02-01T21:16:01.878Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2186
[2026-02-01T21:16:01.883Z] [BOT] 🔀 Deep merged: Technical Consultant 1 @ ORG_6be94934 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:16:01.883Z] [BOT] 💾 AFTER MERGE: 2186 jobs (merged disk + memory)
[2026-02-01T21:16:01.884Z] [BOT] ✅ No jobs to archive (all 2186 jobs within 7-day window)
[2026-02-01T21:16:02.003Z] [BOT] 💾 Saved posted_jobs.json: 2186 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:16:06.506Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T21:16:06.507Z] [BOT] 📍 [ROUTING] "Data Scientist 1" @ ORG_cf80f848 Southwestern Medical Center
[2026-02-01T21:16:06.507Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T21:16:06.776Z] [BOT] ✅ Posted message: Data Scientist 1 @ ORG_cf80f848 Southwestern Medical Center in #📊・JID_fb739488
  ✅ Industry: Data Scientist 1 @ ORG_cf80f848 Southwestern Medical Center
[2026-02-01T21:16:06.777Z] [BOT] 💾 Added channel posting: Data Scientist 1 @ ORG_cf80f848 Southwestern Medical Center → category channel (1 total channels)
[2026-02-01T21:16:06.778Z] [BOT] 💾 BEFORE MERGE: 2187 jobs in memory (cached)
[2026-02-01T21:16:06.814Z] [BOT] ✅ Loaded V2 database: 2186 jobs
💾 DISK STATE: 2186 jobs on disk
[2026-02-01T21:16:06.814Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2187
[2026-02-01T21:16:06.818Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:16:06.818Z] [BOT] 💾 AFTER MERGE: 2187 jobs (merged disk + memory)
[2026-02-01T21:16:06.819Z] [BOT] ✅ No jobs to archive (all 2187 jobs within 7-day window)
[2026-02-01T21:16:06.928Z] [BOT] 💾 Saved posted_jobs.json: 2187 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:16:08.806Z] [BOT] ✅ Posted message: Data Scientist 1 @ ORG_cf80f848 Southwestern Medical Center in #📍・JID_6daed763
[2026-02-01T21:16:08.806Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T21:16:08.807Z] [BOT] 💾 Added channel posting: Data Scientist 1 @ ORG_cf80f848 Southwestern Medical Center → location channel (2 total channels)
[2026-02-01T21:16:08.807Z] [BOT] 💾 BEFORE MERGE: 2187 jobs in memory (cached)
[2026-02-01T21:16:08.844Z] [BOT] ✅ Loaded V2 database: 2187 jobs
💾 DISK STATE: 2187 jobs on disk
[2026-02-01T21:16:08.844Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2187
[2026-02-01T21:16:08.849Z] [BOT] 🔀 Deep merged: Data Scientist 1 @ ORG_cf80f848 Southwestern Medical Center (disk: 1 channels → merged: 2 channels)
[2026-02-01T21:16:08.849Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2187 jobs (merged disk + memory)
[2026-02-01T21:16:08.851Z] [BOT] ✅ No jobs to archive (all 2187 jobs within 7-day window)
[2026-02-01T21:16:08.969Z] [BOT] 💾 Saved posted_jobs.json: 2187 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:16:13.471Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-02-01T21:16:13.473Z] [BOT] 📍 [ROUTING] "Business Operations" @ figma
   Category: FINANCE (matched: "finance")
[2026-02-01T21:16:13.473Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T21:16:13.712Z] [BOT] ✅ Posted message: Business Operations @ figma in #💰・finance-jobs
  ✅ Industry: Business Operations @ figma
[2026-02-01T21:16:13.713Z] [BOT] 💾 Added channel posting: Business Operations @ figma → category channel (1 total channels)
[2026-02-01T21:16:13.713Z] [BOT] 💾 BEFORE MERGE: 2188 jobs in memory (cached)
[2026-02-01T21:16:13.750Z] [BOT] ✅ Loaded V2 database: 2187 jobs
💾 DISK STATE: 2187 jobs on disk
[2026-02-01T21:16:13.751Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2188
[2026-02-01T21:16:13.755Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:16:13.755Z] [BOT] 💾 AFTER MERGE: 2188 jobs (merged disk + memory)
[2026-02-01T21:16:13.757Z] [BOT] ✅ No jobs to archive (all 2188 jobs within 7-day window)
[2026-02-01T21:16:13.873Z] [BOT] 💾 Saved posted_jobs.json: 2188 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:16:15.755Z] [BOT] ✅ Posted message: Business Operations @ figma in #🌉・JID_739bbc0b
[2026-02-01T21:16:15.755Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T21:16:15.755Z] [BOT] 💾 Added channel posting: Business Operations @ figma → location channel (2 total channels)
[2026-02-01T21:16:15.755Z] [BOT] 💾 BEFORE MERGE: 2188 jobs in memory (cached)
[2026-02-01T21:16:15.793Z] [BOT] ✅ Loaded V2 database: 2188 jobs
💾 DISK STATE: 2188 jobs on disk
[2026-02-01T21:16:15.794Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2188
[2026-02-01T21:16:15.798Z] [BOT] 🔀 Deep merged: Business Operations @ figma (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:16:15.799Z] [BOT] 💾 AFTER MERGE: 2188 jobs (merged disk + memory)
[2026-02-01T21:16:15.800Z] [BOT] ✅ No jobs to archive (all 2188 jobs within 7-day window)
[2026-02-01T21:16:15.924Z] [BOT] 💾 Saved posted_jobs.json: 2188 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:16:17.422Z] [BOT] 📍 [ROUTING] "Fiber Network Mapping Specialist 3" @ ORG_8d0003a5
   Category: FINANCE (matched: "tax")
[2026-02-01T21:16:17.423Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T21:16:17.645Z] [BOT] ✅ Posted message: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 in #💰・finance-jobs
  ✅ Industry: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5
[2026-02-01T21:16:17.646Z] [BOT] 💾 Added channel posting: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 → category channel (1 total channels)
[2026-02-01T21:16:17.646Z] [BOT] 💾 BEFORE MERGE: 2189 jobs in memory (cached)
[2026-02-01T21:16:17.682Z] [BOT] ✅ Loaded V2 database: 2188 jobs
💾 DISK STATE: 2188 jobs on disk
[2026-02-01T21:16:17.683Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2189
[2026-02-01T21:16:17.687Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:16:17.687Z] [BOT] 💾 AFTER MERGE: 2189 jobs (merged disk + memory)
[2026-02-01T21:16:17.688Z] [BOT] ✅ No jobs to archive (all 2189 jobs within 7-day window)
[2026-02-01T21:16:17.809Z] [BOT] 💾 Saved posted_jobs.json: 2189 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:16:19.473Z] [BOT] ✅ Posted message: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 in #📍・JID_6daed763
[2026-02-01T21:16:19.473Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T21:16:19.474Z] [BOT] 💾 Added channel posting: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 → location channel (2 total channels)
💾 BEFORE MERGE: 2189 jobs in memory (cached)
[2026-02-01T21:16:19.510Z] [BOT] ✅ Loaded V2 database: 2189 jobs
💾 DISK STATE: 2189 jobs on disk
[2026-02-01T21:16:19.510Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2189
[2026-02-01T21:16:19.514Z] [BOT] 🔀 Deep merged: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:16:19.514Z] [BOT] 💾 AFTER MERGE: 2189 jobs (merged disk + memory)
[2026-02-01T21:16:19.516Z] [BOT] ✅ No jobs to archive (all 2189 jobs within 7-day window)
[2026-02-01T21:16:19.635Z] [BOT] 💾 Saved posted_jobs.json: 2189 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:16:24.133Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T21:16:24.135Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4513c102..." not found, but found as SHA256 "ecb50846115bfae1"
[2026-02-01T21:16:24.135Z] [BOT] ⏭️  Skipping duplicate: JID_bf33fc24 (posted within 7 days)
[2026-02-01T21:16:24.136Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5a8c3c23..." not found, but found as SHA256 "c88874a7f2b40d13"
⏭️  Skipping duplicate: JID_b6088c93 (posted within 7 days)
[2026-02-01T21:16:24.136Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cfdafb45-..." not found, but found as SHA256 "762ee50cb6c7ae65"
[2026-02-01T21:16:24.136Z] [BOT] ⏭️  Skipping duplicate: JID_637060d3 (posted within 7 days)
[2026-02-01T21:16:24.137Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_90bdb451..." not found, but found as SHA256 "394627fcaf536214"
⏭️  Skipping duplicate: JID_90bdb451 (posted within 7 days)
[2026-02-01T21:16:24.137Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d01bea12-..." not found, but found as SHA256 "aee43831ac97562c"
⏭️  Skipping duplicate: JID_41e3595e-2_r282942-2 (posted within 7 days)
[2026-02-01T21:16:24.137Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_723b63f9..." not found, but found as SHA256 "10413df630ebfa64"
⏭️  Skipping duplicate: JID_35613262 (posted within 7 days)
[2026-02-01T21:16:24.137Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_847a6a42..." not found, but found as SHA256 "7ac7522aed29db2e"
[2026-02-01T21:16:24.137Z] [BOT] ⏭️  Skipping duplicate: JID_73959120-engineer_r6310-1 (posted within 7 days)
[2026-02-01T21:16:24.138Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6957dde4-rec_rtx_e..." not found, but found as SHA256 "49d6d8f093987f2e"
[2026-02-01T21:16:24.138Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_e8c9e176-i_01820823-1 (posted within 7 days)
[2026-02-01T21:16:24.138Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a3ae9640..." not found, but found as SHA256 "37535ecabfe75787"
[2026-02-01T21:16:24.138Z] [BOT] ⏭️  Skipping duplicate: JID_4a61310b-i_jr4327 (posted within 7 days)
[2026-02-01T21:16:24.138Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_32e11206..." not found, but found as SHA256 "8d073202433896e8"
[2026-02-01T21:16:24.138Z] [BOT] ⏭️  Skipping duplicate: JID_c7109edb-iii_r0014037 (posted within 7 days)
[2026-02-01T21:16:24.180Z] [BOT] ✅ Loaded pending queue: 724 total (712 pending, 12 enriched, 0 posted)
[2026-02-01T21:16:24.262Z] [BOT] ✅ Saved pending queue: 724 total (712 pending, 2 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T21:16:24.262Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T21:16:24.371Z] [BOT] 📂 Loaded 12260 existing routing entries
[2026-02-01T21:16:24.493Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12270
[2026-02-01T21:16:24.494Z] [BOT] Timestamp: 2026-02-01T21:16:24.443Z
[2026-02-01T21:16:24.494Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T21:16:24.494Z] [BOT] Total attempts: 57
   Successful: 19
   Failed: 0
   Skipped: 38
[2026-02-01T21:16:24.495Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #📍・JID_6daed763: 5 posts
     3. #🌉・JID_739bbc0b: 2 posts
     4. #🌲・JID_efdf5921: 2 posts
     5. #💰・finance-jobs: 2 posts
[2026-02-01T21:16:24.495Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2189 jobs in memory (cached)
[2026-02-01T21:16:24.554Z] [BOT] ✅ Loaded V2 database: 2189 jobs
[2026-02-01T21:16:24.554Z] [BOT] 💾 DISK STATE: 2189 jobs on disk
[2026-02-01T21:16:24.555Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2189
[2026-02-01T21:16:24.559Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:16:24.559Z] [BOT] 💾 AFTER MERGE: 2189 jobs (merged disk + memory)
[2026-02-01T21:16:24.560Z] [BOT] ✅ No jobs to archive (all 2189 jobs within 7-day window)
[2026-02-01T21:16:24.677Z] [BOT] 💾 Saved posted_jobs.json: 2189 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:16:24.678Z] [BOT] ✅ Database saved successfully
[2026-02-01T21:16:26.706Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4062) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*