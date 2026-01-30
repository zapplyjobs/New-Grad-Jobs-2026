# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T09:21:05.615Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 7
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T09:20:23.946Z] ========================================
[2026-01-30T09:20:23.948Z] Discord Bot Execution Log
[2026-01-30T09:20:23.948Z] Environment: GitHub Actions
[2026-01-30T09:20:23.948Z] Node Version: v20.20.0
[2026-01-30T09:20:23.948Z] ========================================
[2026-01-30T09:20:23.948Z] Environment Variables Check:
[2026-01-30T09:20:23.948Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T09:20:23.948Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T09:20:23.948Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T09:20:23.948Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T09:20:23.948Z] 
Multi-Channel Configuration:
[2026-01-30T09:20:23.949Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T09:20:23.949Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T09:20:23.949Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T09:20:23.949Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T09:20:23.949Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T09:20:23.949Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T09:20:23.949Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T09:20:23.949Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T09:20:23.949Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T09:20:23.949Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T09:20:23.949Z] 
Data Files Check:
[2026-01-30T09:20:23.950Z] .github/data/new_jobs.json: ✅ Exists (10 items, 97656 bytes)
[2026-01-30T09:20:23.965Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2335709 bytes)
[2026-01-30T09:20:23.965Z] 
========================================
[2026-01-30T09:20:23.965Z] Starting Enhanced Discord Bot...
[2026-01-30T09:20:23.965Z] ========================================
[2026-01-30T09:20:24.484Z] [BOT] ✅ Loaded V2 database: 349 jobs
[2026-01-30T09:20:25.041Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T09:20:25.041Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T09:20:25.042Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T09:20:25.159Z] [BOT] ✅ Loaded pending queue: 2922 total (2552 pending, 50 enriched, 320 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T09:20:25.159Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T09:20:25.162Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-30T09:20:25.162Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T09:20:25.162Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T09:20:25.162Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T09:20:25.165Z] [BOT] 📬 Found 43 new jobs (7 already posted)...
[2026-01-30T09:20:25.165Z] [BOT] 🚫 Skipping blacklisted job: Senior Solutions Consultant at airtable
[2026-01-30T09:20:25.165Z] [BOT] 🚫 Skipping blacklisted job: Lead Solutions Consultant at airtable
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
[2026-01-30T09:20:25.166Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI Product at airtable
🚫 Skipping blacklisted job: Benefits Customer Onboarding Manager at gusto
[2026-01-30T09:20:25.265Z] [BOT] ✅ Loaded pending queue: 2922 total (2552 pending, 50 enriched, 320 posted)
[2026-01-30T09:20:25.437Z] [BOT] ✅ Saved pending queue: 2917 total (2552 pending, 45 enriched, 320 posted)
[2026-01-30T09:20:25.438Z] [BOT] 🗑️ Removed 5 blacklisted jobs from pending queue
📋 After blacklist filter: 38 jobs (5 blacklisted)
[2026-01-30T09:20:25.438Z] [BOT] 📋 After data quality filter: 38 jobs (0 invalid)
[2026-01-30T09:20:25.439Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-01-30T09:20:25.439Z] [BOT] ⏸️ Limiting to 10 jobs this run, 33 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T09:20:25.443Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-30T09:20:25.443Z] [BOT] 📍 [ROUTING] "AI Data Specialist - South Carolina - US" @ ORG_f3ae3598
[2026-01-30T09:20:25.444Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T09:20:25.460Z] [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T09:20:25.651Z] [BOT] ✅ Posted message: AI Data Specialist - South Carolina - US @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-01-30T09:20:25.651Z] [BOT] ✅ Industry: AI Data Specialist - South Carolina - US @ ORG_f3ae3598
[2026-01-30T09:20:25.651Z] [BOT] 💾 Added channel posting: AI Data Specialist - South Carolina - US @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-30T09:20:25.652Z] [BOT] 💾 BEFORE MERGE: 350 jobs in memory (cached)
[2026-01-30T09:20:25.659Z] [BOT] ✅ Loaded V2 database: 349 jobs
💾 DISK STATE: 349 jobs on disk
[2026-01-30T09:20:25.659Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=350
[2026-01-30T09:20:25.661Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:20:25.661Z] [BOT] 💾 AFTER MERGE: 350 jobs (merged disk + memory)
[2026-01-30T09:20:25.661Z] [BOT] ✅ No jobs to archive (all 350 jobs within 7-day window)
[2026-01-30T09:20:25.687Z] [BOT] 💾 Saved posted_jobs.json: 350 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:27.189Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Missouri - US" @ ORG_f3ae3598
[2026-01-30T09:20:27.189Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T09:20:27.460Z] [BOT] ✅ Posted message: AI Data Specialist - Missouri - US @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-01-30T09:20:27.460Z] [BOT] ✅ Industry: AI Data Specialist - Missouri - US @ ORG_f3ae3598
[2026-01-30T09:20:27.460Z] [BOT] 💾 Added channel posting: AI Data Specialist - Missouri - US @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-30T09:20:27.460Z] [BOT] 💾 BEFORE MERGE: 351 jobs in memory (cached)
[2026-01-30T09:20:27.467Z] [BOT] ✅ Loaded V2 database: 350 jobs
[2026-01-30T09:20:27.467Z] [BOT] 💾 DISK STATE: 350 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=351
[2026-01-30T09:20:27.468Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:20:27.468Z] [BOT] 💾 AFTER MERGE: 351 jobs (merged disk + memory)
[2026-01-30T09:20:27.469Z] [BOT] ✅ No jobs to archive (all 351 jobs within 7-day window)
[2026-01-30T09:20:27.494Z] [BOT] 💾 Saved posted_jobs.json: 351 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:28.995Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Ohio - US" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T09:20:28.995Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T09:20:29.248Z] [BOT] ✅ Posted message: AI Data Specialist - Ohio - US @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-01-30T09:20:29.248Z] [BOT] ✅ Industry: AI Data Specialist - Ohio - US @ ORG_f3ae3598
[2026-01-30T09:20:29.249Z] [BOT] 💾 Added channel posting: AI Data Specialist - Ohio - US @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-30T09:20:29.249Z] [BOT] 💾 BEFORE MERGE: 352 jobs in memory (cached)
[2026-01-30T09:20:29.256Z] [BOT] ✅ Loaded V2 database: 351 jobs
[2026-01-30T09:20:29.256Z] [BOT] 💾 DISK STATE: 351 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=352
[2026-01-30T09:20:29.257Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:20:29.257Z] [BOT] 💾 AFTER MERGE: 352 jobs (merged disk + memory)
[2026-01-30T09:20:29.258Z] [BOT] ✅ No jobs to archive (all 352 jobs within 7-day window)
[2026-01-30T09:20:29.282Z] [BOT] 💾 Saved posted_jobs.json: 352 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:30.782Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Alabama - US" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T09:20:30.782Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T09:20:31.055Z] [BOT] ✅ Posted message: AI Data Specialist - Alabama - US @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-01-30T09:20:31.055Z] [BOT] ✅ Industry: AI Data Specialist - Alabama - US @ ORG_f3ae3598
[2026-01-30T09:20:31.055Z] [BOT] 💾 Added channel posting: AI Data Specialist - Alabama - US @ ORG_f3ae3598 → category channel (1 total channels)
💾 BEFORE MERGE: 353 jobs in memory (cached)
[2026-01-30T09:20:31.063Z] [BOT] ✅ Loaded V2 database: 352 jobs
💾 DISK STATE: 352 jobs on disk
[2026-01-30T09:20:31.063Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=353
[2026-01-30T09:20:31.064Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 353 jobs (merged disk + memory)
[2026-01-30T09:20:31.064Z] [BOT] ✅ No jobs to archive (all 353 jobs within 7-day window)
[2026-01-30T09:20:31.087Z] [BOT] 💾 Saved posted_jobs.json: 353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:35.589Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-30T09:20:35.590Z] [BOT] 📍 [ROUTING] "Head of Brand Campaigns" @ duolingo
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:20:35.938Z] [BOT] ✅ Posted message: Head of Brand Campaigns @ duolingo in #💻・tech-jobs
  ✅ Industry: Head of Brand Campaigns @ duolingo
[2026-01-30T09:20:35.938Z] [BOT] 💾 Added channel posting: Head of Brand Campaigns @ duolingo → category channel (1 total channels)
[2026-01-30T09:20:35.938Z] [BOT] 💾 BEFORE MERGE: 354 jobs in memory (cached)
[2026-01-30T09:20:35.950Z] [BOT] ✅ Loaded V2 database: 353 jobs
[2026-01-30T09:20:35.950Z] [BOT] 💾 DISK STATE: 353 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=354
[2026-01-30T09:20:35.953Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:20:35.953Z] [BOT] 💾 AFTER MERGE: 354 jobs (merged disk + memory)
[2026-01-30T09:20:35.953Z] [BOT] ✅ No jobs to archive (all 354 jobs within 7-day window)
[2026-01-30T09:20:35.984Z] [BOT] 💾 Saved posted_jobs.json: 354 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:37.701Z] [BOT] ✅ Posted message: Head of Brand Campaigns @ duolingo in #🗽・JID_98d4f0de
[2026-01-30T09:20:37.701Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Head of Brand Campaigns @ duolingo → location channel (2 total channels)
[2026-01-30T09:20:37.701Z] [BOT] 💾 BEFORE MERGE: 354 jobs in memory (cached)
[2026-01-30T09:20:37.709Z] [BOT] ✅ Loaded V2 database: 354 jobs
[2026-01-30T09:20:37.709Z] [BOT] 💾 DISK STATE: 354 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=354
[2026-01-30T09:20:37.710Z] [BOT] 🔀 Deep merged: Head of Brand Campaigns @ duolingo (disk: 1 channels → merged: 2 channels)
[2026-01-30T09:20:37.710Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 354 jobs (merged disk + memory)
[2026-01-30T09:20:37.710Z] [BOT] ✅ No jobs to archive (all 354 jobs within 7-day window)
[2026-01-30T09:20:37.740Z] [BOT] 💾 Saved posted_jobs.json: 354 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:39.241Z] [BOT] 📍 [ROUTING] "Influencer Marketing, Intern" @ duolingo
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:20:39.513Z] [BOT] ✅ Posted message: Influencer Marketing, Intern @ duolingo in #💻・tech-jobs
[2026-01-30T09:20:39.513Z] [BOT] ✅ Industry: Influencer Marketing, Intern @ duolingo
[2026-01-30T09:20:39.513Z] [BOT] 💾 Added channel posting: Influencer Marketing, Intern @ duolingo → category channel (1 total channels)
[2026-01-30T09:20:39.513Z] [BOT] 💾 BEFORE MERGE: 355 jobs in memory (cached)
[2026-01-30T09:20:39.521Z] [BOT] ✅ Loaded V2 database: 354 jobs
💾 DISK STATE: 354 jobs on disk
[2026-01-30T09:20:39.521Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=355
[2026-01-30T09:20:39.522Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:20:39.522Z] [BOT] 💾 AFTER MERGE: 355 jobs (merged disk + memory)
[2026-01-30T09:20:39.523Z] [BOT] ✅ No jobs to archive (all 355 jobs within 7-day window)
[2026-01-30T09:20:39.546Z] [BOT] 💾 Saved posted_jobs.json: 355 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:41.268Z] [BOT] ✅ Posted message: Influencer Marketing, Intern @ duolingo in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T09:20:41.268Z] [BOT] 💾 Added channel posting: Influencer Marketing, Intern @ duolingo → location channel (2 total channels)
💾 BEFORE MERGE: 355 jobs in memory (cached)
[2026-01-30T09:20:41.275Z] [BOT] ✅ Loaded V2 database: 355 jobs
💾 DISK STATE: 355 jobs on disk
[2026-01-30T09:20:41.276Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=355
[2026-01-30T09:20:41.276Z] [BOT] 🔀 Deep merged: Influencer Marketing, Intern @ duolingo (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T09:20:41.277Z] [BOT] 💾 AFTER MERGE: 355 jobs (merged disk + memory)
[2026-01-30T09:20:41.277Z] [BOT] ✅ No jobs to archive (all 355 jobs within 7-day window)
[2026-01-30T09:20:41.298Z] [BOT] 💾 Saved posted_jobs.json: 355 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:42.799Z] [BOT] 📍 [ROUTING] "QA Specialist, New Graduate" @ duolingo
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:20:43.025Z] [BOT] ✅ Posted message: QA Specialist, New Graduate @ duolingo in #💻・tech-jobs
  ✅ Industry: QA Specialist, New Graduate @ duolingo
[2026-01-30T09:20:43.026Z] [BOT] 💾 Added channel posting: QA Specialist, New Graduate @ duolingo → category channel (1 total channels)
[2026-01-30T09:20:43.026Z] [BOT] 💾 BEFORE MERGE: 356 jobs in memory (cached)
[2026-01-30T09:20:43.033Z] [BOT] ✅ Loaded V2 database: 355 jobs
💾 DISK STATE: 355 jobs on disk
[2026-01-30T09:20:43.033Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=356
[2026-01-30T09:20:43.034Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:20:43.035Z] [BOT] 💾 AFTER MERGE: 356 jobs (merged disk + memory)
[2026-01-30T09:20:43.035Z] [BOT] ✅ No jobs to archive (all 356 jobs within 7-day window)
[2026-01-30T09:20:43.059Z] [BOT] 💾 Saved posted_jobs.json: 356 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:44.998Z] [BOT] ✅ Posted message: QA Specialist, New Graduate @ duolingo in #🗽・JID_98d4f0de
[2026-01-30T09:20:44.998Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: QA Specialist, New Graduate @ duolingo → location channel (2 total channels)
[2026-01-30T09:20:44.998Z] [BOT] 💾 BEFORE MERGE: 356 jobs in memory (cached)
[2026-01-30T09:20:45.006Z] [BOT] ✅ Loaded V2 database: 356 jobs
[2026-01-30T09:20:45.006Z] [BOT] 💾 DISK STATE: 356 jobs on disk
[2026-01-30T09:20:45.006Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=356
[2026-01-30T09:20:45.007Z] [BOT] 🔀 Deep merged: QA Specialist, New Graduate @ duolingo (disk: 1 channels → merged: 2 channels)
[2026-01-30T09:20:45.007Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 356 jobs (merged disk + memory)
[2026-01-30T09:20:45.008Z] [BOT] ✅ No jobs to archive (all 356 jobs within 7-day window)
[2026-01-30T09:20:45.029Z] [BOT] 💾 Saved posted_jobs.json: 356 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:46.531Z] [BOT] 📍 [ROUTING] "Social Content Creator, Intern" @ duolingo
[2026-01-30T09:20:46.531Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:20:46.882Z] [BOT] ✅ Posted message: Social Content Creator, Intern @ duolingo in #💻・tech-jobs
[2026-01-30T09:20:46.883Z] [BOT] ✅ Industry: Social Content Creator, Intern @ duolingo
[2026-01-30T09:20:46.883Z] [BOT] 💾 Added channel posting: Social Content Creator, Intern @ duolingo → category channel (1 total channels)
[2026-01-30T09:20:46.883Z] [BOT] 💾 BEFORE MERGE: 357 jobs in memory (cached)
[2026-01-30T09:20:46.890Z] [BOT] ✅ Loaded V2 database: 356 jobs
[2026-01-30T09:20:46.890Z] [BOT] 💾 DISK STATE: 356 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=357
[2026-01-30T09:20:46.891Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:20:46.891Z] [BOT] 💾 AFTER MERGE: 357 jobs (merged disk + memory)
[2026-01-30T09:20:46.892Z] [BOT] ✅ No jobs to archive (all 357 jobs within 7-day window)
[2026-01-30T09:20:46.916Z] [BOT] 💾 Saved posted_jobs.json: 357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:48.651Z] [BOT] ✅ Posted message: Social Content Creator, Intern @ duolingo in #🗽・JID_98d4f0de
[2026-01-30T09:20:48.651Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T09:20:48.651Z] [BOT] 💾 Added channel posting: Social Content Creator, Intern @ duolingo → location channel (2 total channels)
💾 BEFORE MERGE: 357 jobs in memory (cached)
[2026-01-30T09:20:48.659Z] [BOT] ✅ Loaded V2 database: 357 jobs
💾 DISK STATE: 357 jobs on disk
[2026-01-30T09:20:48.659Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=357
[2026-01-30T09:20:48.660Z] [BOT] 🔀 Deep merged: Social Content Creator, Intern @ duolingo (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T09:20:48.660Z] [BOT] 💾 AFTER MERGE: 357 jobs (merged disk + memory)
[2026-01-30T09:20:48.661Z] [BOT] ✅ No jobs to archive (all 357 jobs within 7-day window)
[2026-01-30T09:20:48.682Z] [BOT] 💾 Saved posted_jobs.json: 357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:50.183Z] [BOT] 📍 [ROUTING] "Enterprise Sales Engineer" @ datadog
[2026-01-30T09:20:50.183Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:20:50.427Z] [BOT] ✅ Posted message: Enterprise Sales Engineer @ datadog in #💻・tech-jobs
  ✅ Industry: Enterprise Sales Engineer @ datadog
[2026-01-30T09:20:50.427Z] [BOT] 💾 Added channel posting: Enterprise Sales Engineer @ datadog → category channel (1 total channels)
[2026-01-30T09:20:50.428Z] [BOT] 💾 BEFORE MERGE: 358 jobs in memory (cached)
[2026-01-30T09:20:50.435Z] [BOT] ✅ Loaded V2 database: 357 jobs
💾 DISK STATE: 357 jobs on disk
[2026-01-30T09:20:50.436Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=358
[2026-01-30T09:20:50.436Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:20:50.437Z] [BOT] 💾 AFTER MERGE: 358 jobs (merged disk + memory)
[2026-01-30T09:20:50.437Z] [BOT] ✅ No jobs to archive (all 358 jobs within 7-day window)
[2026-01-30T09:20:50.461Z] [BOT] 💾 Saved posted_jobs.json: 358 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:52.221Z] [BOT] ✅ Posted message: Enterprise Sales Engineer @ datadog in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-30T09:20:52.221Z] [BOT] 💾 Added channel posting: Enterprise Sales Engineer @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 358 jobs in memory (cached)
[2026-01-30T09:20:52.229Z] [BOT] ✅ Loaded V2 database: 358 jobs
💾 DISK STATE: 358 jobs on disk
[2026-01-30T09:20:52.229Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=358
[2026-01-30T09:20:52.230Z] [BOT] 🔀 Deep merged: Enterprise Sales Engineer @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T09:20:52.230Z] [BOT] 💾 AFTER MERGE: 358 jobs (merged disk + memory)
[2026-01-30T09:20:52.230Z] [BOT] ✅ No jobs to archive (all 358 jobs within 7-day window)
[2026-01-30T09:20:52.252Z] [BOT] 💾 Saved posted_jobs.json: 358 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:20:56.754Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T09:20:56.754Z] [BOT] 📍 [ROUTING] "Application Analyst" @ ORG_10a0c5f8 General Brigham
[2026-01-30T09:20:56.754Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T09:20:57.008Z] [BOT] ✅ Posted message: Application Analyst @ ORG_10a0c5f8 General Brigham in #📊・JID_fb739488
  ✅ Industry: Application Analyst @ ORG_10a0c5f8 General Brigham
[2026-01-30T09:20:57.009Z] [BOT] 💾 Added channel posting: Application Analyst @ ORG_10a0c5f8 General Brigham → category channel (1 total channels)
[2026-01-30T09:20:57.009Z] [BOT] 💾 BEFORE MERGE: 359 jobs in memory (cached)
[2026-01-30T09:20:57.017Z] [BOT] ✅ Loaded V2 database: 358 jobs
[2026-01-30T09:20:57.017Z] [BOT] 💾 DISK STATE: 358 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=359
[2026-01-30T09:20:57.018Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:20:57.018Z] [BOT] 💾 AFTER MERGE: 359 jobs (merged disk + memory)
[2026-01-30T09:20:57.018Z] [BOT] ✅ No jobs to archive (all 359 jobs within 7-day window)
[2026-01-30T09:20:57.043Z] [BOT] 💾 Saved posted_jobs.json: 359 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:21:01.546Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T09:21:01.548Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dc163d26..." not found, but found as SHA256 "32d573c1ac98265c"
[2026-01-30T09:21:01.548Z] [BOT] ⏭️  Skipping duplicate: JID_b60efc5a (posted within 7 days)
[2026-01-30T09:21:01.548Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6940afcd..." not found, but found as SHA256 "f3a9bfbb5f23051a"
⏭️  Skipping duplicate: JID_be19ee2d (posted within 7 days)
[2026-01-30T09:21:01.548Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8479be47..." not found, but found as SHA256 "ba9db10a61525929"
[2026-01-30T09:21:01.548Z] [BOT] ⏭️  Skipping duplicate: JID_854364ec (posted within 7 days)
[2026-01-30T09:21:01.548Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a75bb8df..." not found, but found as SHA256 "6820e7f9a973a7ab"
⏭️  Skipping duplicate: JID_459a8edc (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_838eee4a..." not found, but found as SHA256 "6b7e31ceefc7c6eb"
[2026-01-30T09:21:01.548Z] [BOT] ⏭️  Skipping duplicate: JID_838eee4a (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e0290d68..." not found, but found as SHA256 "888532439bf0d113"
⏭️  Skipping duplicate: JID_e0290d68 (posted within 7 days)
[2026-01-30T09:21:01.548Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_af31af7c..." not found, but found as SHA256 "73e5496d13f6e2d9"
[2026-01-30T09:21:01.548Z] [BOT] ⏭️  Skipping duplicate: JID_af31af7c (posted within 7 days)
[2026-01-30T09:21:01.549Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_92e4bda1..." not found, but found as SHA256 "a289f8f9948527f6"
⏭️  Skipping duplicate: JID_92e4bda1 (posted within 7 days)
[2026-01-30T09:21:01.549Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_20b447ad..." not found, but found as SHA256 "d5a618fb3fa696d4"
⏭️  Skipping duplicate: JID_20b447ad (posted within 7 days)
[2026-01-30T09:21:01.549Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_052d497a..." not found, but found as SHA256 "46062013ac689ffe"
⏭️  Skipping duplicate: JID_99c93385-analyst_rq4041089 (posted within 7 days)
[2026-01-30T09:21:01.653Z] [BOT] ✅ Loaded pending queue: 2917 total (2552 pending, 45 enriched, 320 posted)
[2026-01-30T09:21:01.858Z] [BOT] ✅ Saved pending queue: 2917 total (2552 pending, 35 enriched, 330 posted)
[2026-01-30T09:21:01.859Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T09:21:01.944Z] [BOT] 📂 Loaded 10411 existing routing entries
[2026-01-30T09:21:02.064Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10421
   Timestamp: 2026-01-30T09:21:02.021Z
[2026-01-30T09:21:02.065Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 27
   Successful: 15
   Failed: 0
   Skipped: 12
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 4 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #📊・JID_fb739488: 1 posts
[2026-01-30T09:21:02.065Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T09:21:02.065Z] [BOT] 💾 BEFORE MERGE: 359 jobs in memory (cached)
[2026-01-30T09:21:02.072Z] [BOT] ✅ Loaded V2 database: 359 jobs
💾 DISK STATE: 359 jobs on disk
[2026-01-30T09:21:02.072Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=359
[2026-01-30T09:21:02.073Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:21:02.073Z] [BOT] 💾 AFTER MERGE: 359 jobs (merged disk + memory)
[2026-01-30T09:21:02.074Z] [BOT] ✅ No jobs to archive (all 359 jobs within 7-day window)
[2026-01-30T09:21:02.097Z] [BOT] 💾 Saved posted_jobs.json: 359 active jobs
[2026-01-30T09:21:02.097Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-30T09:21:04.129Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*