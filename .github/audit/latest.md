# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T22:53:57.218Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T22:53:00.995Z] ========================================
[2026-02-05T22:53:00.997Z] Discord Bot Execution Log
[2026-02-05T22:53:00.997Z] Environment: GitHub Actions
[2026-02-05T22:53:00.997Z] Node Version: v20.20.0
[2026-02-05T22:53:00.997Z] ========================================
[2026-02-05T22:53:00.997Z] Environment Variables Check:
[2026-02-05T22:53:00.997Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T22:53:00.997Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T22:53:00.997Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T22:53:00.997Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T22:53:00.997Z] 
Multi-Channel Configuration:
[2026-02-05T22:53:00.997Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T22:53:00.997Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:53:00.997Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:53:00.998Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T22:53:00.998Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:53:00.998Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:53:00.998Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:53:00.998Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:53:00.998Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:53:00.998Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T22:53:00.998Z] 
Data Files Check:
[2026-02-05T22:53:00.999Z] .github/data/new_jobs.json: ✅ Exists (10 items, 173525 bytes)
[2026-02-05T22:53:01.090Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11338676 bytes)
[2026-02-05T22:53:01.090Z] 
========================================
[2026-02-05T22:53:01.090Z] Starting Enhanced Discord Bot...
[2026-02-05T22:53:01.091Z] ========================================
[2026-02-05T22:53:01.662Z] [BOT] ✅ Loaded V2 database: 2244 jobs
[2026-02-05T22:53:02.144Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T22:53:02.144Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T22:53:02.145Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T22:53:02.163Z] [BOT] ✅ Loaded pending queue: 254 total (204 pending, 50 enriched, 0 posted)
[2026-02-05T22:53:02.163Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T22:53:02.165Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T22:53:02.165Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T22:53:02.165Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T22:53:02.165Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T22:53:02.166Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-05T22:53:02.166Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T22:53:02.166Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T22:53:02.167Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T22:53:02.176Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-05T22:53:02.176Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-05T22:53:02.179Z] [BOT] 📬 Found 45 new jobs (5 already posted)...
[2026-02-05T22:53:02.180Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
[2026-02-05T22:53:02.180Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
[2026-02-05T22:53:02.180Z] [BOT] 🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
[2026-02-05T22:53:02.181Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
[2026-02-05T22:53:02.205Z] [BOT] ✅ Loaded pending queue: 254 total (204 pending, 50 enriched, 0 posted)
[2026-02-05T22:53:02.226Z] [BOT] ✅ Saved pending queue: 222 total (204 pending, 18 enriched, 0 posted)
🗑️ Removed 32 blacklisted jobs from pending queue
📋 After blacklist filter: 13 jobs (32 blacklisted)
[2026-02-05T22:53:02.226Z] [BOT] 📋 After data quality filter: 13 jobs (0 invalid)
[2026-02-05T22:53:02.227Z] [BOT] 📋 After multi-location grouping: 11 unique jobs to post
[2026-02-05T22:53:02.227Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Head of Duolingo Store, Consumer Products @ duolingo: detroit, new york, seattle
⏸️ Limiting to 10 jobs this run, 35 deferred for next run
📤 Posting 10 jobs...
[2026-02-05T22:53:02.227Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T22:53:02.231Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-02-05T22:53:02.232Z] [BOT] 📍 [ROUTING] "Finance & Strategy, Compute Infrastructure" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-05T22:53:02.250Z] [BOT ERROR] (node:2828) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T22:53:02.650Z] [BOT] ✅ Posted message: Finance & Strategy, Compute Infrastructure @ anthropic in #💰・finance-jobs
[2026-02-05T22:53:02.650Z] [BOT] ✅ Industry: Finance & Strategy, Compute Infrastructure @ anthropic
[2026-02-05T22:53:02.651Z] [BOT] 💾 Added channel posting: Finance & Strategy, Compute Infrastructure @ anthropic → category channel (1 total channels)
[2026-02-05T22:53:02.652Z] [BOT] 💾 BEFORE MERGE: 2245 jobs in memory (cached)
[2026-02-05T22:53:02.701Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-05T22:53:02.702Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2245
[2026-02-05T22:53:02.707Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T22:53:02.707Z] [BOT] 💾 AFTER MERGE: 2245 jobs (merged disk + memory)
[2026-02-05T22:53:02.709Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-05T22:53:02.711Z] [BOT] 📦 Archived 13 jobs to 2026-01.json (13 total in archive)
[2026-02-05T22:53:02.712Z] [BOT] ✅ Archiving complete: 13 archived, 2232 active
[2026-02-05T22:53:02.834Z] [BOT] 💾 Saved posted_jobs.json: 2232 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:04.701Z] [BOT] ✅ Posted message: Finance & Strategy, Compute Infrastructure @ anthropic in #🌉・JID_739bbc0b
[2026-02-05T22:53:04.701Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T22:53:04.702Z] [BOT] 💾 Added channel posting: Finance & Strategy, Compute Infrastructure @ anthropic → location channel (2 total channels)
[2026-02-05T22:53:04.702Z] [BOT] 💾 BEFORE MERGE: 2232 jobs in memory (cached)
[2026-02-05T22:53:04.743Z] [BOT] ✅ Loaded V2 database: 2232 jobs
💾 DISK STATE: 2232 jobs on disk
[2026-02-05T22:53:04.744Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2232
[2026-02-05T22:53:04.748Z] [BOT] 🔀 Deep merged: Finance & Strategy, Compute Infrastructure @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-05T22:53:04.749Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2232 jobs (merged disk + memory)
[2026-02-05T22:53:04.750Z] [BOT] ✅ No jobs to archive (all 2232 jobs within 7-day window)
[2026-02-05T22:53:04.868Z] [BOT] 💾 Saved posted_jobs.json: 2232 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:06.371Z] [BOT] 📍 [ROUTING] "Compliance Specialist, GRCP" @ airtable
   Category: FINANCE (matched: "audit")
[2026-02-05T22:53:06.372Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-05T22:53:06.621Z] [BOT] ✅ Posted message: Compliance Specialist, GRCP @ airtable in #💰・finance-jobs
  ✅ Industry: Compliance Specialist, GRCP @ airtable
[2026-02-05T22:53:06.622Z] [BOT] 💾 Added channel posting: Compliance Specialist, GRCP @ airtable → category channel (1 total channels)
[2026-02-05T22:53:06.622Z] [BOT] 💾 BEFORE MERGE: 2233 jobs in memory (cached)
[2026-02-05T22:53:06.664Z] [BOT] ✅ Loaded V2 database: 2232 jobs
💾 DISK STATE: 2232 jobs on disk
[2026-02-05T22:53:06.665Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2233
[2026-02-05T22:53:06.669Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2233 jobs (merged disk + memory)
[2026-02-05T22:53:06.671Z] [BOT] ✅ No jobs to archive (all 2233 jobs within 7-day window)
[2026-02-05T22:53:06.801Z] [BOT] 💾 Saved posted_jobs.json: 2233 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:08.756Z] [BOT] ✅ Posted message: Compliance Specialist, GRCP @ airtable in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T22:53:08.757Z] [BOT] 💾 Added channel posting: Compliance Specialist, GRCP @ airtable → location channel (2 total channels)
[2026-02-05T22:53:08.757Z] [BOT] 💾 BEFORE MERGE: 2233 jobs in memory (cached)
[2026-02-05T22:53:08.797Z] [BOT] ✅ Loaded V2 database: 2233 jobs
💾 DISK STATE: 2233 jobs on disk
[2026-02-05T22:53:08.798Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2233
[2026-02-05T22:53:08.803Z] [BOT] 🔀 Deep merged: Compliance Specialist, GRCP @ airtable (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T22:53:08.803Z] [BOT] 💾 AFTER MERGE: 2233 jobs (merged disk + memory)
[2026-02-05T22:53:08.804Z] [BOT] ✅ No jobs to archive (all 2233 jobs within 7-day window)
[2026-02-05T22:53:08.918Z] [BOT] 💾 Saved posted_jobs.json: 2233 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:13.422Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-05T22:53:13.424Z] [BOT] 📍 [ROUTING] "Head of Duolingo Store, Consumer Products" @ duolingo
   Category: TECH (default)
[2026-02-05T22:53:13.424Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T22:53:13.939Z] [BOT] ✅ Posted message: Head of Duolingo Store, Consumer Products @ duolingo in #💻・tech-jobs
[2026-02-05T22:53:13.939Z] [BOT] ✅ Industry: Head of Duolingo Store, Consumer Products @ duolingo
[2026-02-05T22:53:13.940Z] [BOT] 💾 Added channel posting: Head of Duolingo Store, Consumer Products @ duolingo → category channel (1 total channels)
[2026-02-05T22:53:13.940Z] [BOT] 💾 BEFORE MERGE: 2234 jobs in memory (cached)
[2026-02-05T22:53:13.983Z] [BOT] ✅ Loaded V2 database: 2233 jobs
💾 DISK STATE: 2233 jobs on disk
[2026-02-05T22:53:13.984Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2234
[2026-02-05T22:53:13.988Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T22:53:13.988Z] [BOT] 💾 AFTER MERGE: 2234 jobs (merged disk + memory)
[2026-02-05T22:53:13.989Z] [BOT] ✅ No jobs to archive (all 2234 jobs within 7-day window)
[2026-02-05T22:53:14.125Z] [BOT] 💾 Saved posted_jobs.json: 2234 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:15.627Z] [BOT] 📍 [ROUTING] "Software Engineer, Inference Deployment" @ anthropic
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T22:53:15.763Z] [BOT] ✅ Posted message: Software Engineer, Inference Deployment @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Inference Deployment @ anthropic
[2026-02-05T22:53:15.764Z] [BOT] 💾 Added channel posting: Software Engineer, Inference Deployment @ anthropic → category channel (1 total channels)
[2026-02-05T22:53:15.764Z] [BOT] 💾 BEFORE MERGE: 2235 jobs in memory (cached)
[2026-02-05T22:53:15.805Z] [BOT] ✅ Loaded V2 database: 2234 jobs
💾 DISK STATE: 2234 jobs on disk
[2026-02-05T22:53:15.806Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2235
[2026-02-05T22:53:15.811Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T22:53:15.811Z] [BOT] 💾 AFTER MERGE: 2235 jobs (merged disk + memory)
[2026-02-05T22:53:15.812Z] [BOT] ✅ No jobs to archive (all 2235 jobs within 7-day window)
[2026-02-05T22:53:15.944Z] [BOT] 💾 Saved posted_jobs.json: 2235 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:17.923Z] [BOT] ✅ Posted message: Software Engineer, Inference Deployment @ anthropic in #🌉・JID_739bbc0b
[2026-02-05T22:53:17.923Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T22:53:17.924Z] [BOT] 💾 Added channel posting: Software Engineer, Inference Deployment @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 2235 jobs in memory (cached)
[2026-02-05T22:53:17.965Z] [BOT] ✅ Loaded V2 database: 2235 jobs
💾 DISK STATE: 2235 jobs on disk
[2026-02-05T22:53:17.966Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2235
[2026-02-05T22:53:17.971Z] [BOT] 🔀 Deep merged: Software Engineer, Inference Deployment @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T22:53:17.971Z] [BOT] 💾 AFTER MERGE: 2235 jobs (merged disk + memory)
[2026-02-05T22:53:17.972Z] [BOT] ✅ No jobs to archive (all 2235 jobs within 7-day window)
[2026-02-05T22:53:18.102Z] [BOT] 💾 Saved posted_jobs.json: 2235 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:19.600Z] [BOT] 📍 [ROUTING] "DX Engineer" @ vercel
   Category: TECH (matched: "engineer/engineering")
[2026-02-05T22:53:19.600Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T22:53:19.843Z] [BOT] ✅ Posted message: DX Engineer @ vercel in #💻・tech-jobs
  ✅ Industry: DX Engineer @ vercel
[2026-02-05T22:53:19.844Z] [BOT] 💾 Added channel posting: DX Engineer @ vercel → category channel (1 total channels)
[2026-02-05T22:53:19.844Z] [BOT] 💾 BEFORE MERGE: 2236 jobs in memory (cached)
[2026-02-05T22:53:19.886Z] [BOT] ✅ Loaded V2 database: 2235 jobs
💾 DISK STATE: 2235 jobs on disk
[2026-02-05T22:53:19.886Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2236
[2026-02-05T22:53:19.890Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T22:53:19.890Z] [BOT] 💾 AFTER MERGE: 2236 jobs (merged disk + memory)
[2026-02-05T22:53:19.892Z] [BOT] ✅ No jobs to archive (all 2236 jobs within 7-day window)
[2026-02-05T22:53:20.026Z] [BOT] 💾 Saved posted_jobs.json: 2236 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:23.088Z] [BOT] ✅ Posted message: DX Engineer @ vercel in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T22:53:23.089Z] [BOT] 💾 Added channel posting: DX Engineer @ vercel → location channel (2 total channels)
[2026-02-05T22:53:23.089Z] [BOT] 💾 BEFORE MERGE: 2236 jobs in memory (cached)
[2026-02-05T22:53:23.131Z] [BOT] ✅ Loaded V2 database: 2236 jobs
💾 DISK STATE: 2236 jobs on disk
[2026-02-05T22:53:23.131Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2236
[2026-02-05T22:53:23.136Z] [BOT] 🔀 Deep merged: DX Engineer @ vercel (disk: 1 channels → merged: 2 channels)
[2026-02-05T22:53:23.136Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2236 jobs (merged disk + memory)
[2026-02-05T22:53:23.137Z] [BOT] ✅ No jobs to archive (all 2236 jobs within 7-day window)
[2026-02-05T22:53:23.267Z] [BOT] 💾 Saved posted_jobs.json: 2236 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:27.769Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-05T22:53:27.771Z] [BOT] 📍 [ROUTING] "Sales Revenue Analyst - NYC" @ datadog
[2026-02-05T22:53:27.771Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-05T22:53:28.094Z] [BOT] ✅ Posted message: Sales Revenue Analyst - NYC @ datadog in #📊・JID_fb739488
  ✅ Industry: Sales Revenue Analyst - NYC @ datadog
[2026-02-05T22:53:28.095Z] [BOT] 💾 Added channel posting: Sales Revenue Analyst - NYC @ datadog → category channel (1 total channels)
[2026-02-05T22:53:28.095Z] [BOT] 💾 BEFORE MERGE: 2237 jobs in memory (cached)
[2026-02-05T22:53:28.139Z] [BOT] ✅ Loaded V2 database: 2236 jobs
💾 DISK STATE: 2236 jobs on disk
[2026-02-05T22:53:28.139Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2237
[2026-02-05T22:53:28.143Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T22:53:28.143Z] [BOT] 💾 AFTER MERGE: 2237 jobs (merged disk + memory)
[2026-02-05T22:53:28.145Z] [BOT] ✅ No jobs to archive (all 2237 jobs within 7-day window)
[2026-02-05T22:53:28.279Z] [BOT] 💾 Saved posted_jobs.json: 2237 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:29.927Z] [BOT] ✅ Posted message: Sales Revenue Analyst - NYC @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T22:53:29.928Z] [BOT] 💾 Added channel posting: Sales Revenue Analyst - NYC @ datadog → location channel (2 total channels)
[2026-02-05T22:53:29.928Z] [BOT] 💾 BEFORE MERGE: 2237 jobs in memory (cached)
[2026-02-05T22:53:29.969Z] [BOT] ✅ Loaded V2 database: 2237 jobs
💾 DISK STATE: 2237 jobs on disk
[2026-02-05T22:53:29.969Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2237
[2026-02-05T22:53:29.973Z] [BOT] 🔀 Deep merged: Sales Revenue Analyst - NYC @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T22:53:29.973Z] [BOT] 💾 AFTER MERGE: 2237 jobs (merged disk + memory)
[2026-02-05T22:53:29.975Z] [BOT] ✅ No jobs to archive (all 2237 jobs within 7-day window)
[2026-02-05T22:53:30.103Z] [BOT] 💾 Saved posted_jobs.json: 2237 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:34.602Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-02-05T22:53:34.604Z] [BOT] 📍 [ROUTING] "Software Engineer, Encoding Libraries" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-02-05T22:53:34.604Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T22:53:34.828Z] [BOT] ✅ Posted message: Software Engineer, Encoding Libraries @ anthropic in #🤖・ai-jobs
  ✅ Industry: Software Engineer, Encoding Libraries @ anthropic
[2026-02-05T22:53:34.829Z] [BOT] 💾 Added channel posting: Software Engineer, Encoding Libraries @ anthropic → category channel (1 total channels)
[2026-02-05T22:53:34.829Z] [BOT] 💾 BEFORE MERGE: 2238 jobs in memory (cached)
[2026-02-05T22:53:34.870Z] [BOT] ✅ Loaded V2 database: 2237 jobs
💾 DISK STATE: 2237 jobs on disk
[2026-02-05T22:53:34.871Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2238
[2026-02-05T22:53:34.875Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T22:53:34.875Z] [BOT] 💾 AFTER MERGE: 2238 jobs (merged disk + memory)
[2026-02-05T22:53:34.876Z] [BOT] ✅ No jobs to archive (all 2238 jobs within 7-day window)
[2026-02-05T22:53:35.013Z] [BOT] 💾 Saved posted_jobs.json: 2238 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:36.719Z] [BOT] ✅ Posted message: Software Engineer, Encoding Libraries @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T22:53:36.720Z] [BOT] 💾 Added channel posting: Software Engineer, Encoding Libraries @ anthropic → location channel (2 total channels)
[2026-02-05T22:53:36.720Z] [BOT] 💾 BEFORE MERGE: 2238 jobs in memory (cached)
[2026-02-05T22:53:36.762Z] [BOT] ✅ Loaded V2 database: 2238 jobs
💾 DISK STATE: 2238 jobs on disk
[2026-02-05T22:53:36.762Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2238
[2026-02-05T22:53:36.766Z] [BOT] 🔀 Deep merged: Software Engineer, Encoding Libraries @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T22:53:36.766Z] [BOT] 💾 AFTER MERGE: 2238 jobs (merged disk + memory)
[2026-02-05T22:53:36.768Z] [BOT] ✅ No jobs to archive (all 2238 jobs within 7-day window)
[2026-02-05T22:53:36.893Z] [BOT] 💾 Saved posted_jobs.json: 2238 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:38.394Z] [BOT] 📍 [ROUTING] "Enablement Systems Engineer" @ datadog
[2026-02-05T22:53:38.394Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T22:53:38.532Z] [BOT] ✅ Posted message: Enablement Systems Engineer @ datadog in #🤖・ai-jobs
  ✅ Industry: Enablement Systems Engineer @ datadog
[2026-02-05T22:53:38.533Z] [BOT] 💾 Added channel posting: Enablement Systems Engineer @ datadog → category channel (1 total channels)
[2026-02-05T22:53:38.533Z] [BOT] 💾 BEFORE MERGE: 2239 jobs in memory (cached)
[2026-02-05T22:53:38.574Z] [BOT] ✅ Loaded V2 database: 2238 jobs
💾 DISK STATE: 2238 jobs on disk
[2026-02-05T22:53:38.575Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2239
[2026-02-05T22:53:38.579Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2239 jobs (merged disk + memory)
[2026-02-05T22:53:38.581Z] [BOT] ✅ No jobs to archive (all 2239 jobs within 7-day window)
[2026-02-05T22:53:38.698Z] [BOT] 💾 Saved posted_jobs.json: 2239 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:40.415Z] [BOT] ✅ Posted message: Enablement Systems Engineer @ datadog in #🗽・JID_98d4f0de
[2026-02-05T22:53:40.416Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T22:53:40.416Z] [BOT] 💾 Added channel posting: Enablement Systems Engineer @ datadog → location channel (2 total channels)
[2026-02-05T22:53:40.416Z] [BOT] 💾 BEFORE MERGE: 2239 jobs in memory (cached)
[2026-02-05T22:53:40.459Z] [BOT] ✅ Loaded V2 database: 2239 jobs
💾 DISK STATE: 2239 jobs on disk
[2026-02-05T22:53:40.460Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2239
[2026-02-05T22:53:40.464Z] [BOT] 🔀 Deep merged: Enablement Systems Engineer @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T22:53:40.464Z] [BOT] 💾 AFTER MERGE: 2239 jobs (merged disk + memory)
[2026-02-05T22:53:40.465Z] [BOT] ✅ No jobs to archive (all 2239 jobs within 7-day window)
[2026-02-05T22:53:40.589Z] [BOT] 💾 Saved posted_jobs.json: 2239 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:42.093Z] [BOT] 📍 [ROUTING] "Compute Efficiency Engineer" @ anthropic
   Category: AI (matched: "machine learning")
[2026-02-05T22:53:42.093Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T22:53:42.297Z] [BOT] ✅ Posted message: Compute Efficiency Engineer @ anthropic in #🤖・ai-jobs
  ✅ Industry: Compute Efficiency Engineer @ anthropic
[2026-02-05T22:53:42.298Z] [BOT] 💾 Added channel posting: Compute Efficiency Engineer @ anthropic → category channel (1 total channels)
[2026-02-05T22:53:42.298Z] [BOT] 💾 BEFORE MERGE: 2240 jobs in memory (cached)
[2026-02-05T22:53:42.343Z] [BOT] ✅ Loaded V2 database: 2239 jobs
💾 DISK STATE: 2239 jobs on disk
[2026-02-05T22:53:42.344Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2240
[2026-02-05T22:53:42.348Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2240 jobs (merged disk + memory)
[2026-02-05T22:53:42.350Z] [BOT] ✅ No jobs to archive (all 2240 jobs within 7-day window)
[2026-02-05T22:53:42.493Z] [BOT] 💾 Saved posted_jobs.json: 2240 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:44.144Z] [BOT] ✅ Posted message: Compute Efficiency Engineer @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T22:53:44.145Z] [BOT] 💾 Added channel posting: Compute Efficiency Engineer @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 2240 jobs in memory (cached)
[2026-02-05T22:53:44.189Z] [BOT] ✅ Loaded V2 database: 2240 jobs
💾 DISK STATE: 2240 jobs on disk
[2026-02-05T22:53:44.190Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2240
[2026-02-05T22:53:44.195Z] [BOT] 🔀 Deep merged: Compute Efficiency Engineer @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2240 jobs (merged disk + memory)
[2026-02-05T22:53:44.197Z] [BOT] ✅ No jobs to archive (all 2240 jobs within 7-day window)
[2026-02-05T22:53:44.321Z] [BOT] 💾 Saved posted_jobs.json: 2240 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:45.823Z] [BOT] 📍 [ROUTING] "Software Engineer - Support Tooling (APAC/AMER)" @ supabase
   Category: AI (matched: "AI/ML")
[2026-02-05T22:53:45.823Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T22:53:47.309Z] [BOT] ✅ Posted message: Software Engineer - Support Tooling (APAC/AMER) @ supabase in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Support Tooling (APAC/AMER) @ supabase
[2026-02-05T22:53:47.310Z] [BOT] 💾 Added channel posting: Software Engineer - Support Tooling (APAC/AMER) @ supabase → category channel (1 total channels)
[2026-02-05T22:53:47.310Z] [BOT] 💾 BEFORE MERGE: 2241 jobs in memory (cached)
[2026-02-05T22:53:47.355Z] [BOT] ✅ Loaded V2 database: 2240 jobs
💾 DISK STATE: 2240 jobs on disk
[2026-02-05T22:53:47.356Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2241
[2026-02-05T22:53:47.360Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T22:53:47.361Z] [BOT] 💾 AFTER MERGE: 2241 jobs (merged disk + memory)
[2026-02-05T22:53:47.362Z] [BOT] ✅ No jobs to archive (all 2241 jobs within 7-day window)
[2026-02-05T22:53:47.494Z] [BOT] 💾 Saved posted_jobs.json: 2241 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:49.212Z] [BOT] ✅ Posted message: Software Engineer - Support Tooling (APAC/AMER) @ supabase in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-05T22:53:49.213Z] [BOT] 💾 Added channel posting: Software Engineer - Support Tooling (APAC/AMER) @ supabase → location channel (2 total channels)
[2026-02-05T22:53:49.213Z] [BOT] 💾 BEFORE MERGE: 2241 jobs in memory (cached)
[2026-02-05T22:53:49.259Z] [BOT] ✅ Loaded V2 database: 2241 jobs
💾 DISK STATE: 2241 jobs on disk
[2026-02-05T22:53:49.260Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2241
[2026-02-05T22:53:49.264Z] [BOT] 🔀 Deep merged: Software Engineer - Support Tooling (APAC/AMER) @ supabase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T22:53:49.265Z] [BOT] 💾 AFTER MERGE: 2241 jobs (merged disk + memory)
[2026-02-05T22:53:49.266Z] [BOT] ✅ No jobs to archive (all 2241 jobs within 7-day window)
[2026-02-05T22:53:49.401Z] [BOT] 💾 Saved posted_jobs.json: 2241 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:53.901Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-05T22:53:53.903Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "b17136453ad2e54d"
[2026-02-05T22:53:53.903Z] [BOT] ⏭️  Skipping duplicate: JID_fdf48626 (posted within 7 days)
[2026-02-05T22:53:53.903Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ee57b18a..." not found, but found as SHA256 "88a2c8157511b87e"
⏭️  Skipping duplicate: JID_ee57b18a (posted within 7 days)
[2026-02-05T22:53:53.904Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2801694e..." not found, but found as SHA256 "7ce53bba4c3734ef"
[2026-02-05T22:53:53.904Z] [BOT] ⏭️  Skipping duplicate: JID_2801694e (posted within 7 days)
[2026-02-05T22:53:53.904Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "d816c597a2b66e72"
⏭️  Skipping duplicate: JID_be8f7d42 (posted within 7 days)
[2026-02-05T22:53:53.904Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "aacb9b52faedc4fb"
[2026-02-05T22:53:53.904Z] [BOT] ⏭️  Skipping duplicate: JID_89c610c0 (posted within 7 days)
[2026-02-05T22:53:53.904Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4342582a..." not found, but found as SHA256 "81914704784343ca"
⏭️  Skipping duplicate: JID_4342582a (posted within 7 days)
[2026-02-05T22:53:53.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8822f512..." not found, but found as SHA256 "7b80eea0325e9e78"
[2026-02-05T22:53:53.905Z] [BOT] ⏭️  Skipping duplicate: JID_a030a583 (posted within 7 days)
[2026-02-05T22:53:53.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "30788db9b3883331"
[2026-02-05T22:53:53.905Z] [BOT] ⏭️  Skipping duplicate: JID_e601865e (posted within 7 days)
[2026-02-05T22:53:53.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "431c2acc397fc9a1"
[2026-02-05T22:53:53.905Z] [BOT] ⏭️  Skipping duplicate: JID_bc16035e (posted within 7 days)
[2026-02-05T22:53:53.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dcf1f287-..." not found, but found as SHA256 "93a3c10ec5ef88b0"
[2026-02-05T22:53:53.906Z] [BOT] ⏭️  Skipping duplicate: JID_b9782c54 (posted within 7 days)
[2026-02-05T22:53:53.919Z] [BOT] ✅ Loaded pending queue: 222 total (204 pending, 18 enriched, 0 posted)
[2026-02-05T22:53:53.943Z] [BOT] ✅ Saved pending queue: 222 total (204 pending, 8 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-05T22:53:53.943Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-05T22:53:54.044Z] [BOT] 📂 Loaded 12462 existing routing entries
[2026-02-05T22:53:54.173Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12472
[2026-02-05T22:53:54.173Z] [BOT] Timestamp: 2026-02-05T22:53:54.131Z
[2026-02-05T22:53:54.174Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
   Total attempts: 56
   Successful: 19
   Failed: 0
   Skipped: 37
[2026-02-05T22:53:54.174Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-05T22:53:54.174Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
[2026-02-05T22:53:54.174Z] [BOT] 1. #🌉・JID_739bbc0b: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 3 posts
     4. #💻・tech-jobs: 3 posts
[2026-02-05T22:53:54.174Z] [BOT] 5. #💰・finance-jobs: 2 posts
[2026-02-05T22:53:54.175Z] [BOT] [STATS] Channel stats saved
[2026-02-05T22:53:54.175Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2241 jobs in memory (cached)
[2026-02-05T22:53:54.236Z] [BOT] ✅ Loaded V2 database: 2241 jobs
[2026-02-05T22:53:54.238Z] [BOT] 💾 DISK STATE: 2241 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2241
[2026-02-05T22:53:54.243Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2241 jobs (merged disk + memory)
[2026-02-05T22:53:54.245Z] [BOT] ✅ No jobs to archive (all 2241 jobs within 7-day window)
[2026-02-05T22:53:54.366Z] [BOT] 💾 Saved posted_jobs.json: 2241 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:53:54.366Z] [BOT] ✅ Database saved successfully
[2026-02-05T22:53:56.390Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2828) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*