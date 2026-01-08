# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T18:57:45.641Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T18:57:34.759Z] ========================================
[2026-01-08T18:57:34.761Z] Discord Bot Execution Log
[2026-01-08T18:57:34.761Z] Environment: GitHub Actions
[2026-01-08T18:57:34.762Z] Node Version: v20.19.6
[2026-01-08T18:57:34.762Z] ========================================
[2026-01-08T18:57:34.762Z] Environment Variables Check:
[2026-01-08T18:57:34.762Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T18:57:34.762Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T18:57:34.762Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T18:57:34.762Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T18:57:34.762Z] 
Multi-Channel Configuration:
[2026-01-08T18:57:34.762Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T18:57:34.763Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T18:57:34.763Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T18:57:34.763Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T18:57:34.763Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T18:57:34.763Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T18:57:34.763Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T18:57:34.763Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T18:57:34.763Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T18:57:34.763Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T18:57:34.763Z] 
Data Files Check:
[2026-01-08T18:57:34.765Z] .github/data/new_jobs.json: ✅ Exists (10 items, 158289 bytes)
[2026-01-08T18:57:34.771Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 755662 bytes)
[2026-01-08T18:57:34.771Z] 
========================================
[2026-01-08T18:57:34.771Z] Starting Enhanced Discord Bot...
[2026-01-08T18:57:34.771Z] ========================================
[2026-01-08T18:57:35.314Z] [BOT] ✅ Loaded V2 database: 1471 jobs
[2026-01-08T18:57:36.035Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T18:57:36.036Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T18:57:36.036Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T18:57:36.045Z] [BOT] ✅ Loaded pending queue: 169 total (149 pending, 20 enriched, 0 posted)
[2026-01-08T18:57:36.046Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Data Scientist, Finance  at brex
[2026-01-08T18:57:36.047Z] [BOT] ⏭️  Skipping duplicate: JID_82b91f04 (posted within 7 days)
[2026-01-08T18:57:36.047Z] [BOT] ⏭️ Skipping already posted: Senior Software Engineer, Observability at airtable
[2026-01-08T18:57:36.048Z] [BOT] ⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
[2026-01-08T18:57:36.048Z] [BOT] ⏭️  Skipping duplicate: JID_c15de4f7 (posted within 7 days)
⏭️ Skipping already posted: Product Marketing Lead, Agents at anthropic
[2026-01-08T18:57:36.048Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
[2026-01-08T18:57:36.048Z] [BOT] ⏭️  Skipping duplicate: JID_6e47819d (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
⏭️  Skipping duplicate: JID_b787de31 (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T18:57:36.048Z] [BOT] ⏭️  Skipping duplicate: JID_543d933c (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T18:57:36.049Z] [BOT] ⏭️  Skipping duplicate: JID_9d3cd40a (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T18:57:36.049Z] [BOT] ⏭️  Skipping duplicate: JID_e7506224 (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T18:57:36.049Z] [BOT] ⏭️  Skipping duplicate: JID_8a0f0600 (posted within 7 days)
⏭️ Skipping already posted: Finance Systems, Finance & Strategy Lead at anthropic
[2026-01-08T18:57:36.049Z] [BOT] ⏭️  Skipping duplicate: JID_8c1479dc (posted within 7 days)
[2026-01-08T18:57:36.049Z] [BOT] ⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T18:57:36.049Z] [BOT] ⏭️  Skipping duplicate: JID_3cc1a2d7 (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T18:57:36.049Z] [BOT] ⏭️  Skipping duplicate: JID_4c79ae31 (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T18:57:36.049Z] [BOT] ⏭️  Skipping duplicate: JID_b4d01207 (posted within 7 days)
⏭️ Skipping already posted:  BizOps Lead, BD at brex
[2026-01-08T18:57:36.049Z] [BOT] ⏭️  Skipping duplicate: JID_a3f17800-cx_1001-job-72536 (posted within 7 days)
⏭️ Skipping already posted: Specialist - Data Transfer - Integration & Quality at BNY
[2026-01-08T18:57:36.050Z] [BOT] ⏭️  Skipping duplicate: JID_ce63ae83 (posted within 7 days)
⏭️ Skipping already posted: Community Marketing Manager - Figma Weave (New York, United States)  at figma
⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T18:57:36.050Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T18:57:36.050Z] [BOT] 📬 Found 2 new jobs (18 already posted)...
[2026-01-08T18:57:36.050Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-08T18:57:36.050Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-08T18:57:36.051Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T18:57:36.051Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Data Scientist, Finance  @ brex: new york, new york, united states, san francisco, california, united states
[2026-01-08T18:57:36.051Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T18:57:36.051Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-08T18:57:36.053Z] [BOT] 📍 [ROUTING] "Senior Data Scientist, Finance " @ brex
[2026-01-08T18:57:36.053Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-08T18:57:36.057Z] [BOT ERROR] (node:2329) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T18:57:36.271Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Finance  @ brex in #🤖・ai-jobs
[2026-01-08T18:57:36.271Z] [BOT] ✅ Industry: Senior Data Scientist, Finance  @ brex
[2026-01-08T18:57:38.012Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Finance  @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-08T18:57:39.514Z] [BOT] 💾 Marked as posted: Senior Data Scientist, Finance  @ brex (instance #1)
[2026-01-08T18:57:39.515Z] [BOT] 💾 BEFORE ARCHIVING: 1472 jobs in database
[2026-01-08T18:57:39.516Z] [BOT] ✅ No jobs to archive (all 1472 jobs within 7-day window)
[2026-01-08T18:57:39.533Z] [BOT] 💾 Saved posted_jobs.json: 1472 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T18:57:39.533Z] [BOT] 💾 Marked as posted: Senior Data Scientist, Finance  @ brex (instance #1)
💾 BEFORE ARCHIVING: 1473 jobs in database
[2026-01-08T18:57:39.535Z] [BOT] ✅ No jobs to archive (all 1473 jobs within 7-day window)
[2026-01-08T18:57:39.552Z] [BOT] 💾 Saved posted_jobs.json: 1473 active jobs
[2026-01-08T18:57:39.552Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T18:57:42.552Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T18:57:42.553Z] [BOT] ⏭️  Skipping duplicate: JID_d55d35a3 (posted within 7 days)
[2026-01-08T18:57:42.559Z] [BOT] ✅ Loaded pending queue: 169 total (149 pending, 20 enriched, 0 posted)
[2026-01-08T18:57:42.573Z] [BOT] ✅ Saved pending queue: 169 total (149 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-08T18:57:42.573Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T18:57:42.630Z] [BOT] 📂 Loaded 2431 existing routing entries
[2026-01-08T18:57:42.688Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2432
[2026-01-08T18:57:42.688Z] [BOT] Timestamp: 2026-01-08T18:57:42.677Z
[2026-01-08T18:57:42.689Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T18:57:42.689Z] [BOT] Total attempts: 20
   Successful: 2
   Failed: 0
   Skipped: 18
[2026-01-08T18:57:42.689Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-08T18:57:42.689Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-08T18:57:42.689Z] [BOT] [STATS] Channel stats saved
[2026-01-08T18:57:44.703Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2329) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*