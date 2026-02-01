# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T22:49:56.071Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T22:49:43.675Z] ========================================
[2026-02-01T22:49:43.677Z] Discord Bot Execution Log
[2026-02-01T22:49:43.677Z] Environment: GitHub Actions
[2026-02-01T22:49:43.677Z] Node Version: v20.20.0
[2026-02-01T22:49:43.677Z] ========================================
[2026-02-01T22:49:43.677Z] Environment Variables Check:
[2026-02-01T22:49:43.677Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T22:49:43.677Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T22:49:43.678Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T22:49:43.678Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T22:49:43.678Z] 
Multi-Channel Configuration:
[2026-02-01T22:49:43.678Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T22:49:43.678Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:49:43.678Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:49:43.678Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T22:49:43.678Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:49:43.678Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:49:43.678Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:49:43.678Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:49:43.679Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T22:49:43.679Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T22:49:43.679Z] 
Data Files Check:
[2026-02-01T22:49:43.680Z] .github/data/new_jobs.json: ✅ Exists (10 items, 102577 bytes)
[2026-02-01T22:49:43.738Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11116231 bytes)
[2026-02-01T22:49:43.738Z] 
========================================
[2026-02-01T22:49:43.738Z] Starting Enhanced Discord Bot...
[2026-02-01T22:49:43.738Z] ========================================
[2026-02-01T22:49:44.307Z] [BOT] ✅ Loaded V2 database: 2211 jobs
[2026-02-01T22:49:45.024Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T22:49:45.025Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T22:49:45.025Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T22:49:45.072Z] [BOT] ✅ Loaded pending queue: 731 total (681 pending, 50 enriched, 0 posted)
[2026-02-01T22:49:45.073Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-01T22:49:45.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-01T22:49:45.074Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-01T22:49:45.093Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-01T22:49:45.093Z] [BOT] 🚫 Skipping blacklisted job: Senior Machine Learning Engineer at spotify
🚫 Skipping blacklisted job: Principal Research Scientist - Music at spotify
[2026-02-01T22:49:45.093Z] [BOT] 🚫 Skipping blacklisted job: Staff Research Scientist - Music at spotify
[2026-02-01T22:49:45.093Z] [BOT] 🚫 Skipping blacklisted job: Senior Research Scientist - Music at spotify
🚫 Skipping blacklisted job: Senior Staff Machine Learning Engineer at spotify
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
[2026-02-01T22:49:45.094Z] [BOT] 🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-01T22:49:45.094Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-02-01T22:49:45.094Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
[2026-02-01T22:49:45.094Z] [BOT] 🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-01T22:49:45.094Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
🚫 Skipping blacklisted job: Technical Enterprise Client Success Manager - Symmetry at gusto
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
[2026-02-01T22:49:45.094Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Staff Software Engineer, Database Infrastructure at gusto
[2026-02-01T22:49:45.095Z] [BOT] 🚫 Skipping blacklisted job: Manager of Sales Engineering, Majors/Commercial - AMER at vercel
🚫 Skipping blacklisted job: Senior Brand Designer at brex
[2026-02-01T22:49:45.095Z] [BOT] 🚫 Skipping blacklisted job: Director, Technical Accounting & Financial Reporting at vercel
🚫 Skipping blacklisted job: Staff Brand Designer, Magic at brex
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-01T22:49:45.095Z] [BOT] 🚫 Skipping blacklisted job: Senior Analyst - Enterprise Field Tools at AbbVie
🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
[2026-02-01T22:49:45.095Z] [BOT] 🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
[2026-02-01T22:49:45.095Z] [BOT] 🚫 Skipping blacklisted job: Public Policy, Events Lead at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
[2026-02-01T22:49:45.095Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
[2026-02-01T22:49:45.138Z] [BOT] ✅ Loaded pending queue: 731 total (681 pending, 50 enriched, 0 posted)
[2026-02-01T22:49:45.225Z] [BOT] ✅ Saved pending queue: 683 total (681 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (48 blacklisted)
[2026-02-01T22:49:45.226Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-01T22:49:45.226Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T22:49:45.226Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T22:49:45.228Z] [BOT] 📍 [ROUTING] "Data Scientist 2" @ ORG_f8d13f3b Health
[2026-02-01T22:49:45.228Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T22:49:45.245Z] [BOT ERROR] (node:2956) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T22:49:45.568Z] [BOT] ✅ Posted message: Data Scientist 2 @ ORG_f8d13f3b Health in #🤖・ai-jobs
[2026-02-01T22:49:45.568Z] [BOT] ✅ Industry: Data Scientist 2 @ ORG_f8d13f3b Health
[2026-02-01T22:49:45.569Z] [BOT] 💾 Added channel posting: Data Scientist 2 @ ORG_f8d13f3b Health → category channel (1 total channels)
[2026-02-01T22:49:45.569Z] [BOT] 💾 BEFORE MERGE: 2212 jobs in memory (cached)
[2026-02-01T22:49:45.614Z] [BOT] ✅ Loaded V2 database: 2211 jobs
💾 DISK STATE: 2211 jobs on disk
[2026-02-01T22:49:45.614Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2212
[2026-02-01T22:49:45.620Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:49:45.620Z] [BOT] 💾 AFTER MERGE: 2212 jobs (merged disk + memory)
[2026-02-01T22:49:45.621Z] [BOT] ✅ No jobs to archive (all 2212 jobs within 7-day window)
[2026-02-01T22:49:45.754Z] [BOT] 💾 Saved posted_jobs.json: 2212 active jobs
[2026-02-01T22:49:45.754Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T22:49:47.788Z] [BOT] ✅ Posted message: Data Scientist 2 @ ORG_f8d13f3b Health in #🗽・JID_98d4f0de
[2026-02-01T22:49:47.788Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T22:49:47.788Z] [BOT] 💾 Added channel posting: Data Scientist 2 @ ORG_f8d13f3b Health → location channel (2 total channels)
[2026-02-01T22:49:47.788Z] [BOT] 💾 BEFORE MERGE: 2212 jobs in memory (cached)
[2026-02-01T22:49:47.826Z] [BOT] ✅ Loaded V2 database: 2212 jobs
[2026-02-01T22:49:47.826Z] [BOT] 💾 DISK STATE: 2212 jobs on disk
[2026-02-01T22:49:47.827Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2212
[2026-02-01T22:49:47.831Z] [BOT] 🔀 Deep merged: Data Scientist 2 @ ORG_f8d13f3b Health (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T22:49:47.832Z] [BOT] 💾 AFTER MERGE: 2212 jobs (merged disk + memory)
[2026-02-01T22:49:47.833Z] [BOT] ✅ No jobs to archive (all 2212 jobs within 7-day window)
[2026-02-01T22:49:47.947Z] [BOT] 💾 Saved posted_jobs.json: 2212 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T22:49:52.448Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-01T22:49:52.449Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_42556291..." not found, but found as SHA256 "7d8b1d99be0d8f77"
[2026-02-01T22:49:52.449Z] [BOT] ⏭️  Skipping duplicate: JID_d8532bc8 (posted within 7 days)
[2026-02-01T22:49:52.490Z] [BOT] ✅ Loaded pending queue: 683 total (681 pending, 2 enriched, 0 posted)
[2026-02-01T22:49:52.560Z] [BOT] ✅ Saved pending queue: 683 total (681 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-01T22:49:52.560Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T22:49:52.654Z] [BOT] 📂 Loaded 12292 existing routing entries
[2026-02-01T22:49:52.789Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-01T22:49:52.789Z] [BOT] Total entries: 12293
   Timestamp: 2026-02-01T22:49:52.737Z
[2026-02-01T22:49:52.790Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T22:49:52.790Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-01T22:49:52.790Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2026-02-01T22:49:52.790Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🗽・JID_98d4f0de: 1 posts
[2026-02-01T22:49:52.790Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T22:49:52.790Z] [BOT] 💾 BEFORE MERGE: 2212 jobs in memory (cached)
[2026-02-01T22:49:52.833Z] [BOT] ✅ Loaded V2 database: 2212 jobs
💾 DISK STATE: 2212 jobs on disk
[2026-02-01T22:49:52.833Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2212
[2026-02-01T22:49:52.838Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T22:49:52.838Z] [BOT] 💾 AFTER MERGE: 2212 jobs (merged disk + memory)
[2026-02-01T22:49:52.839Z] [BOT] ✅ No jobs to archive (all 2212 jobs within 7-day window)
[2026-02-01T22:49:52.960Z] [BOT] 💾 Saved posted_jobs.json: 2212 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T22:49:54.987Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2956) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*