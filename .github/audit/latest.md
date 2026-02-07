# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T14:51:27.280Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T14:51:04.840Z] ========================================
[2026-02-07T14:51:04.841Z] Discord Bot Execution Log
[2026-02-07T14:51:04.841Z] Environment: GitHub Actions
[2026-02-07T14:51:04.841Z] Node Version: v20.20.0
[2026-02-07T14:51:04.841Z] ========================================
[2026-02-07T14:51:04.842Z] Environment Variables Check:
[2026-02-07T14:51:04.842Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T14:51:04.842Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T14:51:04.842Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T14:51:04.842Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T14:51:04.842Z] 
Multi-Channel Configuration:
[2026-02-07T14:51:04.842Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T14:51:04.842Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:51:04.842Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:51:04.842Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T14:51:04.842Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:51:04.842Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:51:04.842Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:51:04.842Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:51:04.842Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:51:04.843Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T14:51:04.843Z] 
Data Files Check:
[2026-02-07T14:51:04.844Z] .github/data/new_jobs.json: ✅ Exists (10 items, 149360 bytes)
[2026-02-07T14:51:04.882Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6078360 bytes)
[2026-02-07T14:51:04.882Z] 
========================================
[2026-02-07T14:51:04.882Z] Starting Enhanced Discord Bot...
[2026-02-07T14:51:04.882Z] ========================================
[2026-02-07T14:51:05.379Z] [BOT] ✅ Loaded V2 database: 1378 jobs
[2026-02-07T14:51:05.971Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T14:51:05.972Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T14:51:06.010Z] [BOT] ✅ Loaded pending queue: 405 total (355 pending, 50 enriched, 0 posted)
[2026-02-07T14:51:06.011Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-07T14:51:06.011Z] [BOT] [BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T14:51:06.012Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T14:51:06.012Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T14:51:06.013Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T14:51:06.013Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T14:51:06.022Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T14:51:06.022Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-07T14:51:06.022Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-07T14:51:06.022Z] [BOT] 🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-02-07T14:51:06.023Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
[2026-02-07T14:51:06.023Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
[2026-02-07T14:51:06.023Z] [BOT] 🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
[2026-02-07T14:51:06.023Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-07T14:51:06.023Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
[2026-02-07T14:51:06.023Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
[2026-02-07T14:51:06.023Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Solutions Marketing Lead, Beneficial Deployments  at anthropic
[2026-02-07T14:51:06.023Z] [BOT] 🚫 Skipping blacklisted job: Solutions Marketing Lead, Public Sector at anthropic
[2026-02-07T14:51:06.023Z] [BOT] 🚫 Skipping blacklisted job: Software Engineering Manager, Growth at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Southeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Web Producer Manager at airtable
🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
[2026-02-07T14:51:06.023Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
[2026-02-07T14:51:06.023Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
[2026-02-07T14:51:06.023Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
[2026-02-07T14:51:06.023Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
[2026-02-07T14:51:06.024Z] [BOT] 🚫 Skipping blacklisted job: Senior Partner Manager - Channels - DACH   at datadog
[2026-02-07T14:51:06.085Z] [BOT] ✅ Loaded pending queue: 405 total (355 pending, 50 enriched, 0 posted)
[2026-02-07T14:51:06.122Z] [BOT] ✅ Saved pending queue: 362 total (355 pending, 7 enriched, 0 posted)
🗑️ Removed 43 blacklisted jobs from pending queue
📋 After blacklist filter: 5 jobs (43 blacklisted)
[2026-02-07T14:51:06.122Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-02-07T14:51:06.122Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-02-07T14:51:06.123Z] [BOT] ⏸️ Limiting to 10 jobs this run, 43 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-07T14:51:06.126Z] [BOT] 📌 Posting 3 jobs to #💰・finance-jobs
[2026-02-07T14:51:06.127Z] [BOT] 📍 [ROUTING] " Marketing (Sales) Development Representative " @ verkada
[2026-02-07T14:51:06.127Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T14:51:06.127Z] [BOT] 🔢 Initialized channel CH_bd916e08 counter at 61 (active: 61, archive: 0)
[2026-02-07T14:51:06.144Z] [BOT ERROR] (node:2867) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T14:51:06.359Z] [BOT] ✅ Posted message:  Marketing (Sales) Development Representative  @ verkada in #💰・finance-jobs
[2026-02-07T14:51:06.359Z] [BOT] ✅ Industry:  Marketing (Sales) Development Representative  @ verkada
[2026-02-07T14:51:06.360Z] [BOT] 💾 Added channel posting:  Marketing (Sales) Development Representative  @ verkada → category channel (1 total channels)
[2026-02-07T14:51:06.360Z] [BOT] 💾 BEFORE MERGE: 1379 jobs in memory (cached)
[2026-02-07T14:51:06.393Z] [BOT] ✅ Loaded V2 database: 1378 jobs
💾 DISK STATE: 1378 jobs on disk
[2026-02-07T14:51:06.393Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1379
[2026-02-07T14:51:06.397Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T14:51:06.397Z] [BOT] 💾 AFTER MERGE: 1379 jobs (merged disk + memory)
[2026-02-07T14:51:06.398Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T14:51:06.402Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 1369 active
[2026-02-07T14:51:06.477Z] [BOT] 💾 Saved posted_jobs.json: 1369 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T14:51:07.980Z] [BOT] 📍 [ROUTING] "(Sr) Associate, Strategic Finance & Business Operations" @ verkada
   Category: FINANCE (matched: "finance")
[2026-02-07T14:51:07.980Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T14:51:08.422Z] [BOT] ✅ Posted message: (Sr) Associate, Strategic Finance & Business Operations @ verkada in #💰・finance-jobs
[2026-02-07T14:51:08.422Z] [BOT] ✅ Industry: (Sr) Associate, Strategic Finance & Business Operations @ verkada
[2026-02-07T14:51:08.423Z] [BOT] 💾 Added channel posting: (Sr) Associate, Strategic Finance & Business Operations @ verkada → category channel (1 total channels)
[2026-02-07T14:51:08.423Z] [BOT] 💾 BEFORE MERGE: 1370 jobs in memory (cached)
[2026-02-07T14:51:08.452Z] [BOT] ✅ Loaded V2 database: 1369 jobs
💾 DISK STATE: 1369 jobs on disk
[2026-02-07T14:51:08.452Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1370
[2026-02-07T14:51:08.455Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T14:51:08.455Z] [BOT] 💾 AFTER MERGE: 1370 jobs (merged disk + memory)
[2026-02-07T14:51:08.456Z] [BOT] ✅ No jobs to archive (all 1370 jobs within 7-day window)
[2026-02-07T14:51:08.521Z] [BOT] 💾 Saved posted_jobs.json: 1370 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T14:51:10.023Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T14:51:10.415Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
  ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-02-07T14:51:10.416Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-02-07T14:51:10.416Z] [BOT] 💾 BEFORE MERGE: 1371 jobs in memory (cached)
[2026-02-07T14:51:10.444Z] [BOT] ✅ Loaded V2 database: 1370 jobs
💾 DISK STATE: 1370 jobs on disk
[2026-02-07T14:51:10.445Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1371
[2026-02-07T14:51:10.448Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1371 jobs (merged disk + memory)
[2026-02-07T14:51:10.449Z] [BOT] ✅ No jobs to archive (all 1371 jobs within 7-day window)
[2026-02-07T14:51:10.515Z] [BOT] 💾 Saved posted_jobs.json: 1371 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T14:51:15.018Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-07T14:51:15.018Z] [BOT] 📍 [ROUTING] "Embedded Linux Software Engineer" @ verkada
[2026-02-07T14:51:15.019Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T14:51:15.019Z] [BOT] 🔢 Initialized channel CH_44b6ec5f counter at 831 (active: 831, archive: 0)
[2026-02-07T14:51:15.457Z] [BOT] ✅ Posted message: Embedded Linux Software Engineer @ verkada in #💻・tech-jobs
  ✅ Industry: Embedded Linux Software Engineer @ verkada
[2026-02-07T14:51:15.458Z] [BOT] 💾 Added channel posting: Embedded Linux Software Engineer @ verkada → category channel (1 total channels)
[2026-02-07T14:51:15.458Z] [BOT] 💾 BEFORE MERGE: 1372 jobs in memory (cached)
[2026-02-07T14:51:15.486Z] [BOT] ✅ Loaded V2 database: 1371 jobs
💾 DISK STATE: 1371 jobs on disk
[2026-02-07T14:51:15.487Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1372
[2026-02-07T14:51:15.489Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T14:51:15.490Z] [BOT] 💾 AFTER MERGE: 1372 jobs (merged disk + memory)
[2026-02-07T14:51:15.490Z] [BOT] ✅ No jobs to archive (all 1372 jobs within 7-day window)
[2026-02-07T14:51:15.556Z] [BOT] 💾 Saved posted_jobs.json: 1372 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T14:51:17.060Z] [BOT] 📍 [ROUTING] "Head of Duolingo Store, Consumer Products" @ duolingo
[2026-02-07T14:51:17.060Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T14:51:17.286Z] [BOT] ✅ Posted message: Head of Duolingo Store, Consumer Products @ duolingo in #💻・tech-jobs
[2026-02-07T14:51:17.286Z] [BOT] ✅ Industry: Head of Duolingo Store, Consumer Products @ duolingo
[2026-02-07T14:51:17.287Z] [BOT] 💾 Added channel posting: Head of Duolingo Store, Consumer Products @ duolingo → category channel (1 total channels)
[2026-02-07T14:51:17.287Z] [BOT] 💾 BEFORE MERGE: 1373 jobs in memory (cached)
[2026-02-07T14:51:17.318Z] [BOT] ✅ Loaded V2 database: 1372 jobs
💾 DISK STATE: 1372 jobs on disk
[2026-02-07T14:51:17.319Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1373
[2026-02-07T14:51:17.322Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1373 jobs (merged disk + memory)
[2026-02-07T14:51:17.323Z] [BOT] ✅ No jobs to archive (all 1373 jobs within 7-day window)
[2026-02-07T14:51:17.401Z] [BOT] 💾 Saved posted_jobs.json: 1373 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T14:51:18.901Z] [BOT] 🔢 Initialized channel CH_4b72af5c counter at 302 (active: 302, archive: 0)
[2026-02-07T14:51:19.115Z] [BOT] ✅ Posted message: Head of Duolingo Store, Consumer Products @ duolingo in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-07T14:51:19.116Z] [BOT] 💾 Added channel posting: Head of Duolingo Store, Consumer Products @ duolingo → location channel (2 total channels)
[2026-02-07T14:51:19.116Z] [BOT] 💾 BEFORE MERGE: 1373 jobs in memory (cached)
[2026-02-07T14:51:19.145Z] [BOT] ✅ Loaded V2 database: 1373 jobs
💾 DISK STATE: 1373 jobs on disk
[2026-02-07T14:51:19.145Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1373
[2026-02-07T14:51:19.148Z] [BOT] 🔀 Deep merged: Head of Duolingo Store, Consumer Products @ duolingo (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T14:51:19.148Z] [BOT] 💾 AFTER MERGE: 1373 jobs (merged disk + memory)
[2026-02-07T14:51:19.149Z] [BOT] ✅ No jobs to archive (all 1373 jobs within 7-day window)
[2026-02-07T14:51:19.212Z] [BOT] 💾 Saved posted_jobs.json: 1373 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T14:51:23.715Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-02-07T14:51:23.716Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "cac405334264f755"
[2026-02-07T14:51:23.716Z] [BOT] ⏭️  Skipping duplicate: JID_9614429e (posted within 7 days)
[2026-02-07T14:51:23.717Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da41ab0c..." not found, but found as SHA256 "d2313aca0398e4c2"
[2026-02-07T14:51:23.717Z] [BOT] ⏭️  Skipping duplicate: JID_81577bfd (posted within 7 days)
[2026-02-07T14:51:23.717Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "1dfc153a315531a7"
[2026-02-07T14:51:23.717Z] [BOT] ⏭️  Skipping duplicate: JID_4f90521a (posted within 7 days)
[2026-02-07T14:51:23.717Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3cf5b472..." not found, but found as SHA256 "94bf609cf045c0a1"
[2026-02-07T14:51:23.717Z] [BOT] ⏭️  Skipping duplicate: JID_3cf5b472 (posted within 7 days)
[2026-02-07T14:51:23.718Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "0445586edc5f6618"
[2026-02-07T14:51:23.718Z] [BOT] ⏭️  Skipping duplicate: JID_748f5889 (posted within 7 days)
[2026-02-07T14:51:23.747Z] [BOT] ✅ Loaded pending queue: 362 total (355 pending, 7 enriched, 0 posted)
[2026-02-07T14:51:23.783Z] [BOT] ✅ Saved pending queue: 362 total (355 pending, 2 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-07T14:51:23.906Z] [BOT] 📂 Loaded 12626 existing routing entries
[2026-02-07T14:51:24.025Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 12631
   Timestamp: 2026-02-07T14:51:23.979Z
[2026-02-07T14:51:24.026Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T14:51:24.026Z] [BOT] Total attempts: 51
   Successful: 6
   Failed: 0
   Skipped: 45
[2026-02-07T14:51:24.026Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
[2026-02-07T14:51:24.026Z] [BOT] Channels used: 3
   Top channels:
     1. #💰・finance-jobs: 3 posts
     2. #💻・tech-jobs: 2 posts
     3. #📍・JID_6daed763: 1 posts
[2026-02-07T14:51:24.026Z] [BOT] [STATS] Channel stats saved
[2026-02-07T14:51:24.026Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1373 jobs in memory (cached)
[2026-02-07T14:51:24.054Z] [BOT] ✅ Loaded V2 database: 1373 jobs
💾 DISK STATE: 1373 jobs on disk
[2026-02-07T14:51:24.055Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1373
[2026-02-07T14:51:24.058Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1373 jobs (merged disk + memory)
[2026-02-07T14:51:24.060Z] [BOT] ✅ No jobs to archive (all 1373 jobs within 7-day window)
[2026-02-07T14:51:24.142Z] [BOT] 💾 Saved posted_jobs.json: 1373 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-07T14:51:26.158Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2867) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*