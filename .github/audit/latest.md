# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T15:26:24.094Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T15:26:12.908Z] ========================================
[2026-01-06T15:26:12.910Z] Discord Bot Execution Log
[2026-01-06T15:26:12.910Z] Environment: GitHub Actions
[2026-01-06T15:26:12.910Z] Node Version: v20.19.6
[2026-01-06T15:26:12.910Z] ========================================
[2026-01-06T15:26:12.910Z] Environment Variables Check:
[2026-01-06T15:26:12.910Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T15:26:12.910Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T15:26:12.910Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T15:26:12.910Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T15:26:12.911Z] 
Multi-Channel Configuration:
[2026-01-06T15:26:12.911Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T15:26:12.911Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T15:26:12.911Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T15:26:12.911Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T15:26:12.911Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T15:26:12.911Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T15:26:12.911Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T15:26:12.911Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T15:26:12.911Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T15:26:12.911Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T15:26:12.911Z] 
Data Files Check:
[2026-01-06T15:26:12.912Z] .github/data/new_jobs.json: ✅ Exists (10 items, 79847 bytes)
[2026-01-06T15:26:12.917Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 696239 bytes)
[2026-01-06T15:26:12.917Z] 
========================================
[2026-01-06T15:26:12.917Z] Starting Enhanced Discord Bot...
[2026-01-06T15:26:12.917Z] ========================================
[2026-01-06T15:26:13.442Z] [BOT] ✅ Loaded V2 database: 1362 jobs
[2026-01-06T15:26:14.057Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T15:26:14.057Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T15:26:14.057Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T15:26:14.061Z] [BOT] ✅ Loaded pending queue: 39 total (19 pending, 20 enriched, 0 posted)
[2026-01-06T15:26:14.061Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Staff Software Engineer, Platform at anthropic
[2026-01-06T15:26:14.062Z] [BOT] ⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
[2026-01-06T15:26:14.062Z] [BOT] ⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T15:26:14.063Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T15:26:14.063Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T15:26:14.063Z] [BOT] ⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
[2026-01-06T15:26:14.063Z] [BOT] ⏭️ Skipping already posted: Software Engineer - Cloud Growth at Temporal Technologies
⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
⏭️ Skipping already posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
[2026-01-06T15:26:14.063Z] [BOT] ⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
[2026-01-06T15:26:14.063Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T15:26:14.064Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2026-01-06T15:26:14.064Z] [BOT] ⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_3b9cda67 at brex
⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
[2026-01-06T15:26:14.064Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-06T15:26:14.064Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
[2026-01-06T15:26:14.064Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
[2026-01-06T15:26:14.064Z] [BOT] ⏭️ Skipping already posted: Quantitative Model Analyst 1 at U.S. Bank
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_10617304-industrial_r10218122 (posted within 7 days)
⏭️ Skipping already posted: Industrial Engineer / Principal Industrial Engineer at Northrop Grumman
[2026-01-06T15:26:14.064Z] [BOT] ⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ea28857 at Jones Lang LaSalle (JLL)
[2026-01-06T15:26:14.064Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bf8ed4e at Allstate Insurance Company
[2026-01-06T15:26:14.065Z] [BOT] 📬 Found 1 new jobs (19 already posted)...
[2026-01-06T15:26:14.065Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-06T15:26:14.065Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T15:26:14.065Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T15:26:14.066Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-06T15:26:14.067Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Platform" @ anthropic
[2026-01-06T15:26:14.067Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-06T15:26:14.072Z] [BOT ERROR] (node:3497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T15:26:14.440Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Platform @ anthropic in #🤖・ai-jobs
  ✅ Industry: Staff Software Engineer, Platform @ anthropic
[2026-01-06T15:26:16.149Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Platform @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T15:26:17.649Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Platform @ anthropic (instance #1)
[2026-01-06T15:26:17.649Z] [BOT] 💾 BEFORE ARCHIVING: 1363 jobs in database
[2026-01-06T15:26:17.650Z] [BOT] ✅ No jobs to archive (all 1363 jobs within 7-day window)
[2026-01-06T15:26:17.663Z] [BOT] 💾 Saved posted_jobs.json: 1363 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T15:26:20.664Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T15:26:20.664Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
[2026-01-06T15:26:20.666Z] [BOT] ✅ Loaded pending queue: 39 total (19 pending, 20 enriched, 0 posted)
[2026-01-06T15:26:20.668Z] [BOT] ✅ Saved pending queue: 39 total (19 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T15:26:20.722Z] [BOT] 📂 Loaded 2288 existing routing entries
[2026-01-06T15:26:20.778Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2289
[2026-01-06T15:26:20.779Z] [BOT] Timestamp: 2026-01-06T15:26:20.767Z
[2026-01-06T15:26:20.779Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T15:26:20.779Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-06T15:26:20.780Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2026-01-06T15:26:22.790Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*