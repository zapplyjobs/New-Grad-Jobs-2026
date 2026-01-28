# Discord Bot Execution Audit
**Timestamp:** 2026-01-28T21:22:58.985Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-28T21:22:20.825Z] ========================================
[2026-01-28T21:22:20.827Z] Discord Bot Execution Log
[2026-01-28T21:22:20.827Z] Environment: GitHub Actions
[2026-01-28T21:22:20.827Z] Node Version: v20.20.0
[2026-01-28T21:22:20.827Z] ========================================
[2026-01-28T21:22:20.827Z] Environment Variables Check:
[2026-01-28T21:22:20.827Z] DISCORD_TOKEN: ✅ Set
[2026-01-28T21:22:20.827Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-28T21:22:20.827Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-28T21:22:20.827Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-28T21:22:20.828Z] 
Multi-Channel Configuration:
[2026-01-28T21:22:20.828Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-28T21:22:20.828Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-28T21:22:20.828Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-28T21:22:20.828Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-28T21:22:20.828Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-28T21:22:20.828Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-28T21:22:20.828Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-28T21:22:20.828Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-28T21:22:20.828Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-28T21:22:20.828Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-28T21:22:20.828Z] 
Data Files Check:
[2026-01-28T21:22:20.829Z] .github/data/new_jobs.json: ✅ Exists (10 items, 49310 bytes)
[2026-01-28T21:22:20.830Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 37999 bytes)
[2026-01-28T21:22:20.830Z] 
========================================
[2026-01-28T21:22:20.830Z] Starting Enhanced Discord Bot...
[2026-01-28T21:22:20.830Z] ========================================
[2026-01-28T21:22:21.334Z] [BOT] ✅ Loaded V2 database: 62 jobs
[2026-01-28T21:22:22.072Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-28T21:22:22.073Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-28T21:22:22.073Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-28T21:22:22.196Z] [BOT] ✅ Loaded pending queue: 2999 total (2949 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-28T21:22:22.198Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-28T21:22:22.198Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher - Pier at Prairie View A&M University
[2026-01-28T21:22:22.198Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher - Pier at Prairie View A&M University
[2026-01-28T21:22:22.198Z] [BOT] 🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
[2026-01-28T21:22:22.199Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Interaction Design at figma
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
🚫 Skipping blacklisted job: Senior Sales Operations Analyst - Health Insurance at gusto
🚫 Skipping blacklisted job: Staff Infrastructure Engineer, Pre-training at anthropic
[2026-01-28T21:22:22.199Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Creator & Affiliate Marketing Manager at figma
[2026-01-28T21:22:22.199Z] [BOT] 🚫 Skipping blacklisted job: Manager, Strategic Sales at figma
🚫 Skipping blacklisted job: Partner Manager - Alliances (Commercial) at datadog
🚫 Skipping blacklisted job: Postdoctoral Research Associate at Fermilab
🚫 Skipping blacklisted job: Senior Technical Recruiter at samsara
🚫 Skipping blacklisted job: Senior Sales Operations Analyst - Business Insurance at gusto
🚫 Skipping blacklisted job: Manager, Trial Experience -  SaaS at gohighlevel
🚫 Skipping blacklisted job: Principal Software Engineer - Pay Group Engineering at gusto
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Financial Forecasting at duolingo
[2026-01-28T21:22:22.303Z] [BOT] ✅ Loaded pending queue: 2999 total (2949 pending, 50 enriched, 0 posted)
[2026-01-28T21:22:22.475Z] [BOT] ✅ Saved pending queue: 2981 total (2949 pending, 32 enriched, 0 posted)
🗑️ Removed 18 blacklisted jobs from pending queue
[2026-01-28T21:22:22.476Z] [BOT] 📋 After blacklist filter: 32 jobs (18 blacklisted)
📋 After data quality filter: 32 jobs (0 invalid)
[2026-01-28T21:22:22.477Z] [BOT] 📋 After multi-location grouping: 30 unique jobs to post
[2026-01-28T21:22:22.477Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-28T21:22:22.477Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-28T21:22:22.481Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-28T21:22:22.481Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-28T21:22:22.481Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T21:22:22.498Z] [BOT ERROR] (node:4277) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-28T21:22:22.951Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-28T21:22:22.951Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-28T21:22:22.951Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (1 total channels)
[2026-01-28T21:22:22.952Z] [BOT] 💾 BEFORE MERGE: 63 jobs in memory (cached)
[2026-01-28T21:22:22.952Z] [BOT] ✅ Loaded V2 database: 62 jobs
[2026-01-28T21:22:22.952Z] [BOT] 💾 DISK STATE: 62 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=63
[2026-01-28T21:22:22.953Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T21:22:22.953Z] [BOT] 💾 AFTER MERGE: 63 jobs (merged disk + memory)
[2026-01-28T21:22:22.953Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-28T21:22:22.958Z] [BOT] 📦 Archived 42 jobs to 2026-01.json (42 total in archive)
[2026-01-28T21:22:22.958Z] [BOT] ✅ Archiving complete: 42 archived, 21 active
[2026-01-28T21:22:22.959Z] [BOT] 💾 Saved posted_jobs.json: 21 active jobs
[2026-01-28T21:22:22.959Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T21:22:24.740Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-28T21:22:24.740Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 21 jobs in memory (cached)
[2026-01-28T21:22:24.740Z] [BOT] ✅ Loaded V2 database: 21 jobs
💾 DISK STATE: 21 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=21
  🔀 Deep merged: Analyst – Audience Activation @ ORG_5c1f65ea (disk: 1 channels → merged: 2 channels)
[2026-01-28T21:22:24.741Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 21 jobs (merged disk + memory)
✅ No jobs to archive (all 21 jobs within 7-day window)
[2026-01-28T21:22:24.741Z] [BOT] 💾 Saved posted_jobs.json: 21 active jobs
[2026-01-28T21:22:24.742Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T21:22:26.241Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
[2026-01-28T21:22:26.241Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T21:22:26.531Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-28T21:22:26.531Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (1 total channels)
[2026-01-28T21:22:26.531Z] [BOT] 💾 BEFORE MERGE: 22 jobs in memory (cached)
[2026-01-28T21:22:26.531Z] [BOT] ✅ Loaded V2 database: 21 jobs
💾 DISK STATE: 21 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=22
[2026-01-28T21:22:26.532Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 22 jobs (merged disk + memory)
[2026-01-28T21:22:26.532Z] [BOT] ✅ No jobs to archive (all 22 jobs within 7-day window)
[2026-01-28T21:22:26.533Z] [BOT] 💾 Saved posted_jobs.json: 22 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T21:22:28.381Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-28T21:22:28.381Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 22 jobs in memory (cached)
[2026-01-28T21:22:28.381Z] [BOT] ✅ Loaded V2 database: 22 jobs
💾 DISK STATE: 22 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=22
[2026-01-28T21:22:28.382Z] [BOT] 🔀 Deep merged: Meteorologist 1 @ ORG_b83ec2d4 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 22 jobs (merged disk + memory)
✅ No jobs to archive (all 22 jobs within 7-day window)
[2026-01-28T21:22:28.383Z] [BOT] 💾 Saved posted_jobs.json: 22 active jobs
[2026-01-28T21:22:28.383Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T21:22:29.884Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
[2026-01-28T21:22:29.884Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T21:22:30.131Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-01-28T21:22:30.131Z] [BOT] ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-28T21:22:30.131Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 23 jobs in memory (cached)
[2026-01-28T21:22:30.131Z] [BOT] ✅ Loaded V2 database: 22 jobs
💾 DISK STATE: 22 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=23
[2026-01-28T21:22:30.132Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T21:22:30.132Z] [BOT] 💾 AFTER MERGE: 23 jobs (merged disk + memory)
✅ No jobs to archive (all 23 jobs within 7-day window)
[2026-01-28T21:22:30.133Z] [BOT] 💾 Saved posted_jobs.json: 23 active jobs
[2026-01-28T21:22:30.133Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T21:22:31.635Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-28T21:22:31.635Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T21:22:32.034Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-28T21:22:32.034Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
[2026-01-28T21:22:32.034Z] [BOT] 💾 BEFORE MERGE: 24 jobs in memory (cached)
[2026-01-28T21:22:32.034Z] [BOT] ✅ Loaded V2 database: 23 jobs
[2026-01-28T21:22:32.034Z] [BOT] 💾 DISK STATE: 23 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=24
[2026-01-28T21:22:32.034Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 24 jobs (merged disk + memory)
[2026-01-28T21:22:32.034Z] [BOT] ✅ No jobs to archive (all 24 jobs within 7-day window)
[2026-01-28T21:22:32.036Z] [BOT] 💾 Saved posted_jobs.json: 24 active jobs
[2026-01-28T21:22:32.036Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T21:22:33.537Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T21:22:33.802Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
[2026-01-28T21:22:33.803Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 25 jobs in memory (cached)
[2026-01-28T21:22:33.803Z] [BOT] ✅ Loaded V2 database: 24 jobs
💾 DISK STATE: 24 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=25
💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 25 jobs (merged disk + memory)
✅ No jobs to archive (all 25 jobs within 7-day window)
[2026-01-28T21:22:33.805Z] [BOT] 💾 Saved posted_jobs.json: 25 active jobs
[2026-01-28T21:22:33.805Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T21:22:35.306Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T21:22:35.552Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-28T21:22:35.552Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
[2026-01-28T21:22:35.552Z] [BOT] 💾 BEFORE MERGE: 26 jobs in memory (cached)
[2026-01-28T21:22:35.553Z] [BOT] ✅ Loaded V2 database: 25 jobs
💾 DISK STATE: 25 jobs on disk
[2026-01-28T21:22:35.553Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=26
[2026-01-28T21:22:35.553Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 26 jobs (merged disk + memory)
✅ No jobs to archive (all 26 jobs within 7-day window)
[2026-01-28T21:22:35.555Z] [BOT] 💾 Saved posted_jobs.json: 26 active jobs
[2026-01-28T21:22:35.555Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T21:22:40.057Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-28T21:22:40.057Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-28T21:22:40.268Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-28T21:22:40.268Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-28T21:22:40.268Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (1 total channels)
💾 BEFORE MERGE: 27 jobs in memory (cached)
[2026-01-28T21:22:40.268Z] [BOT] ✅ Loaded V2 database: 26 jobs
[2026-01-28T21:22:40.268Z] [BOT] 💾 DISK STATE: 26 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=27
[2026-01-28T21:22:40.269Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 27 jobs (merged disk + memory)
[2026-01-28T21:22:40.269Z] [BOT] ✅ No jobs to archive (all 27 jobs within 7-day window)
[2026-01-28T21:22:40.271Z] [BOT] 💾 Saved posted_jobs.json: 27 active jobs
[2026-01-28T21:22:40.271Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T21:22:42.042Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
[2026-01-28T21:22:42.042Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
[2026-01-28T21:22:42.042Z] [BOT] 💾 BEFORE MERGE: 27 jobs in memory (cached)
[2026-01-28T21:22:42.044Z] [BOT] ✅ Loaded V2 database: 27 jobs
[2026-01-28T21:22:42.044Z] [BOT] 💾 DISK STATE: 27 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=27
[2026-01-28T21:22:42.044Z] [BOT] 🔀 Deep merged: Quality and Insights Analyst @ ORG_a4ae5447 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 27 jobs (merged disk + memory)
[2026-01-28T21:22:42.044Z] [BOT] ✅ No jobs to archive (all 27 jobs within 7-day window)
[2026-01-28T21:22:42.045Z] [BOT] 💾 Saved posted_jobs.json: 27 active jobs
[2026-01-28T21:22:42.045Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T21:22:43.546Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
[2026-01-28T21:22:43.546Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T21:22:43.954Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
[2026-01-28T21:22:43.954Z] [BOT] ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-28T21:22:43.954Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
[2026-01-28T21:22:43.954Z] [BOT] 💾 BEFORE MERGE: 28 jobs in memory (cached)
[2026-01-28T21:22:43.954Z] [BOT] ✅ Loaded V2 database: 27 jobs
[2026-01-28T21:22:43.955Z] [BOT] 💾 DISK STATE: 27 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=28
[2026-01-28T21:22:43.955Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 28 jobs (merged disk + memory)
[2026-01-28T21:22:43.955Z] [BOT] ✅ No jobs to archive (all 28 jobs within 7-day window)
[2026-01-28T21:22:43.957Z] [BOT] 💾 Saved posted_jobs.json: 28 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T21:22:45.458Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-28T21:22:45.458Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-28T21:22:46.111Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-28T21:22:46.111Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-28T21:22:46.113Z] [BOT] ✅ Loaded V2 database: 28 jobs
[2026-01-28T21:22:46.113Z] [BOT] 💾 DISK STATE: 28 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-28T21:22:46.113Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T21:22:46.113Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-28T21:22:46.115Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-28T21:22:46.115Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T21:22:50.617Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-28T21:22:50.617Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
   Category: FINANCE (matched: "audit")
[2026-01-28T21:22:50.617Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-28T21:22:50.876Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-28T21:22:50.876Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 30 jobs in memory (cached)
[2026-01-28T21:22:50.877Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-28T21:22:50.877Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=30
[2026-01-28T21:22:50.877Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 30 jobs (merged disk + memory)
✅ No jobs to archive (all 30 jobs within 7-day window)
[2026-01-28T21:22:50.879Z] [BOT] 💾 Saved posted_jobs.json: 30 active jobs
[2026-01-28T21:22:50.879Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T21:22:55.381Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-28T21:22:55.382Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-28T21:22:55.482Z] [BOT] 📂 Loaded 9771 existing routing entries
[2026-01-28T21:22:55.609Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-28T21:22:55.609Z] [BOT] Total entries: 9781
   Timestamp: 2026-01-28T21:22:55.562Z
[2026-01-28T21:22:55.610Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fb2c9de9.jsonl
[2026-01-28T21:22:55.610Z] [BOT] Total attempts: 31
   Successful: 13
   Failed: 0
   Skipped: 18
[2026-01-28T21:22:55.610Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
[2026-01-28T21:22:55.610Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-01-28T21:22:55.610Z] [BOT] 5. #💰・finance-jobs: 1 posts
[2026-01-28T21:22:55.610Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 30 jobs in memory (cached)
[2026-01-28T21:22:55.617Z] [BOT] ✅ Loaded V2 database: 30 jobs
💾 DISK STATE: 30 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=30
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 30 jobs (merged disk + memory)
✅ No jobs to archive (all 30 jobs within 7-day window)
[2026-01-28T21:22:55.621Z] [BOT] 💾 Saved posted_jobs.json: 30 active jobs
[2026-01-28T21:22:55.621Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-28T21:22:57.643Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4277) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*