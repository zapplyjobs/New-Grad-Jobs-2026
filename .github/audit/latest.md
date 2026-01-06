# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T16:45:57.080Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 16
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T16:45:30.191Z] ========================================
[2026-01-06T16:45:30.193Z] Discord Bot Execution Log
[2026-01-06T16:45:30.193Z] Environment: GitHub Actions
[2026-01-06T16:45:30.193Z] Node Version: v20.19.6
[2026-01-06T16:45:30.193Z] ========================================
[2026-01-06T16:45:30.193Z] Environment Variables Check:
[2026-01-06T16:45:30.193Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T16:45:30.193Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T16:45:30.193Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T16:45:30.193Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T16:45:30.194Z] 
Multi-Channel Configuration:
[2026-01-06T16:45:30.194Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T16:45:30.194Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T16:45:30.194Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T16:45:30.194Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T16:45:30.194Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T16:45:30.194Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T16:45:30.194Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T16:45:30.194Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T16:45:30.194Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T16:45:30.194Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T16:45:30.194Z] 
Data Files Check:
[2026-01-06T16:45:30.195Z] .github/data/new_jobs.json: ✅ Exists (10 items, 115920 bytes)
[2026-01-06T16:45:30.200Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 697204 bytes)
[2026-01-06T16:45:30.200Z] 
========================================
[2026-01-06T16:45:30.200Z] Starting Enhanced Discord Bot...
[2026-01-06T16:45:30.200Z] ========================================
[2026-01-06T16:45:30.715Z] [BOT] ✅ Loaded V2 database: 1364 jobs
[2026-01-06T16:45:31.113Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T16:45:31.113Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T16:45:31.113Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T16:45:31.115Z] [BOT] ✅ Loaded pending queue: 43 total (23 pending, 20 enriched, 0 posted)
[2026-01-06T16:45:31.115Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T16:45:31.115Z] [BOT] [BOT] 🔍 Sample enriched job: Senior Machine Learning Engineer - Ads R&D at spotify
[2026-01-06T16:45:31.117Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
[2026-01-06T16:45:31.117Z] [BOT] ⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-06T16:45:31.117Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
[2026-01-06T16:45:31.117Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T16:45:31.118Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
[2026-01-06T16:45:31.118Z] [BOT] ⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Cloud Growth at Temporal Technologies
[2026-01-06T16:45:31.118Z] [BOT] ⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
⏭️ Skipping already posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
[2026-01-06T16:45:31.118Z] [BOT] ⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
[2026-01-06T16:45:31.118Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
[2026-01-06T16:45:31.118Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T16:45:31.118Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2026-01-06T16:45:31.119Z] [BOT] ⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T16:45:31.119Z] [BOT] ⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_3b9cda67 at brex
[2026-01-06T16:45:31.119Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
[2026-01-06T16:45:31.122Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
[2026-01-06T16:45:31.122Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
📬 Found 4 new jobs (16 already posted)...
[2026-01-06T16:45:31.122Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
[2026-01-06T16:45:31.123Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2026-01-06T16:45:31.123Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-06T16:45:31.123Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T16:45:31.126Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-06T16:45:31.127Z] [BOT] 📍 [ROUTING] "Senior Machine Learning Engineer - Ads R&D" @ spotify
[2026-01-06T16:45:31.127Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-06T16:45:31.127Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-06T16:45:31.144Z] [BOT ERROR] (node:3106) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T16:45:31.388Z] [BOT] ✅ Created forum post: 🏢 Senior Machine Learning Engineer - Ads R&D @ spotify in #🤖・ai-jobs
  ✅ Industry: Senior Machine Learning Engineer - Ads R&D @ spotify
[2026-01-06T16:45:33.134Z] [BOT] ✅ Created forum post: 🏢 Senior Machine Learning Engineer - Ads R&D @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-06T16:45:34.636Z] [BOT] 💾 Marked as posted: Senior Machine Learning Engineer - Ads R&D @ spotify (instance #1)
[2026-01-06T16:45:34.636Z] [BOT] 💾 BEFORE ARCHIVING: 1365 jobs in database
[2026-01-06T16:45:34.638Z] [BOT] ✅ No jobs to archive (all 1365 jobs within 7-day window)
[2026-01-06T16:45:34.651Z] [BOT] 💾 Saved posted_jobs.json: 1365 active jobs
[2026-01-06T16:45:34.651Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T16:45:34.652Z] [BOT] 📍 [ROUTING] "AI Machine Learning Engineer 2" @ ORG_aa669b28
[2026-01-06T16:45:34.652Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-06T16:45:34.826Z] [BOT] ✅ Created forum post: 🏢 AI Machine Learning Engineer 2 @ ORG_aa669b28 in #🤖・ai-jobs
[2026-01-06T16:45:34.826Z] [BOT] ✅ Industry: AI Machine Learning Engineer 2 @ ORG_aa669b28
[2026-01-06T16:45:36.496Z] [BOT] ✅ Created forum post: 🏢 AI Machine Learning Engineer 2 @ ORG_aa669b28 in #🌉・san-francisco
[2026-01-06T16:45:36.497Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-06T16:45:37.998Z] [BOT] 💾 Marked as posted: AI Machine Learning Engineer 2 @ ORG_aa669b28 (instance #1)
[2026-01-06T16:45:37.998Z] [BOT] 💾 BEFORE ARCHIVING: 1366 jobs in database
[2026-01-06T16:45:38.000Z] [BOT] ✅ No jobs to archive (all 1366 jobs within 7-day window)
[2026-01-06T16:45:38.008Z] [BOT] 💾 Saved posted_jobs.json: 1366 active jobs
[2026-01-06T16:45:38.009Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T16:45:41.010Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-06T16:45:41.011Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive " @ datadog
   Category: SALES (matched: "sales")
[2026-01-06T16:45:41.012Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-06T16:45:41.477Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive  @ datadog in #💲・sales-jobs
[2026-01-06T16:45:41.477Z] [BOT] ✅ Industry: Enterprise Sales Executive  @ datadog
[2026-01-06T16:45:43.283Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive  @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-06T16:45:44.784Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive  @ datadog (instance #1)
[2026-01-06T16:45:44.784Z] [BOT] 💾 BEFORE ARCHIVING: 1367 jobs in database
[2026-01-06T16:45:44.785Z] [BOT] ✅ No jobs to archive (all 1367 jobs within 7-day window)
[2026-01-06T16:45:44.795Z] [BOT] 💾 Saved posted_jobs.json: 1367 active jobs
[2026-01-06T16:45:44.795Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T16:45:47.795Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-06T16:45:47.796Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_a66ed0d9
[2026-01-06T16:45:47.796Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T16:45:48.038Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_a66ed0d9 in #💻・tech-jobs
[2026-01-06T16:45:48.038Z] [BOT] ✅ Industry: Early Career Software Engineer @ ORG_a66ed0d9
[2026-01-06T16:45:49.812Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_a66ed0d9 in #🗽・new-york
[2026-01-06T16:45:49.812Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-06T16:45:51.313Z] [BOT] 💾 Marked as posted: Early Career Software Engineer @ ORG_a66ed0d9 (instance #1)
[2026-01-06T16:45:51.313Z] [BOT] 💾 BEFORE ARCHIVING: 1368 jobs in database
[2026-01-06T16:45:51.315Z] [BOT] ✅ No jobs to archive (all 1368 jobs within 7-day window)
[2026-01-06T16:45:51.325Z] [BOT] 💾 Saved posted_jobs.json: 1368 active jobs
[2026-01-06T16:45:51.325Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T16:45:54.326Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-06T16:45:54.326Z] [BOT] ⏭️  Skipping duplicate: JID_00c77ec6 (posted within 7 days)
[2026-01-06T16:45:54.327Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
[2026-01-06T16:45:54.327Z] [BOT] ⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
[2026-01-06T16:45:54.327Z] [BOT] ⏭️  Skipping duplicate: JID_38c7271e (posted within 7 days)
[2026-01-06T16:45:54.329Z] [BOT] ✅ Loaded pending queue: 43 total (23 pending, 20 enriched, 0 posted)
[2026-01-06T16:45:54.331Z] [BOT] ✅ Saved pending queue: 43 total (23 pending, 16 enriched, 4 posted)
[2026-01-06T16:45:54.331Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T16:45:54.390Z] [BOT] 📂 Loaded 2290 existing routing entries
[2026-01-06T16:45:54.447Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-06T16:45:54.448Z] [BOT] Total entries: 2294
   Timestamp: 2026-01-06T16:45:54.436Z
[2026-01-06T16:45:54.448Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T16:45:54.448Z] [BOT] Total attempts: 24
   Successful: 8
   Failed: 0
   Skipped: 16
[2026-01-06T16:45:54.448Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 8
   Channels used: 5
   Top channels:
[2026-01-06T16:45:54.449Z] [BOT] 1. #🗽・new-york: 3 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🌉・san-francisco: 1 posts
     4. #💲・sales-jobs: 1 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-06T16:45:54.449Z] [BOT] [STATS] Channel stats saved
[2026-01-06T16:45:56.460Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3106) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*