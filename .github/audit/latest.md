# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T18:45:19.022Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T18:45:00.686Z] ========================================
[2026-01-08T18:45:00.688Z] Discord Bot Execution Log
[2026-01-08T18:45:00.688Z] Environment: GitHub Actions
[2026-01-08T18:45:00.688Z] Node Version: v20.19.6
[2026-01-08T18:45:00.688Z] ========================================
[2026-01-08T18:45:00.688Z] Environment Variables Check:
[2026-01-08T18:45:00.688Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T18:45:00.688Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T18:45:00.688Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T18:45:00.688Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T18:45:00.688Z] 
Multi-Channel Configuration:
[2026-01-08T18:45:00.688Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T18:45:00.689Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T18:45:00.689Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T18:45:00.689Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T18:45:00.689Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T18:45:00.689Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T18:45:00.689Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T18:45:00.689Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T18:45:00.689Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T18:45:00.689Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T18:45:00.689Z] 
Data Files Check:
[2026-01-08T18:45:00.691Z] .github/data/new_jobs.json: ✅ Exists (10 items, 170184 bytes)
[2026-01-08T18:45:00.696Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 755998 bytes)
[2026-01-08T18:45:00.697Z] 
========================================
[2026-01-08T18:45:00.697Z] Starting Enhanced Discord Bot...
[2026-01-08T18:45:00.697Z] ========================================
[2026-01-08T18:45:01.248Z] [BOT] ✅ Loaded V2 database: 1471 jobs
[2026-01-08T18:45:02.232Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T18:45:02.233Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T18:45:02.233Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T18:45:02.242Z] [BOT] ✅ Loaded pending queue: 166 total (146 pending, 20 enriched, 0 posted)
[2026-01-08T18:45:02.243Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Software Engineer, Observability at airtable
[2026-01-08T18:45:02.244Z] [BOT] ⏭️  Skipping duplicate: JID_c15de4f7 (posted within 7 days)
[2026-01-08T18:45:02.244Z] [BOT] ⏭️ Skipping already posted: Product Marketing Lead, Agents at anthropic
[2026-01-08T18:45:02.245Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
[2026-01-08T18:45:02.245Z] [BOT] ⏭️  Skipping duplicate: JID_6e47819d (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T18:45:02.245Z] [BOT] ⏭️  Skipping duplicate: JID_b787de31 (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T18:45:02.245Z] [BOT] ⏭️  Skipping duplicate: JID_543d933c (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
⏭️  Skipping duplicate: JID_9d3cd40a (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
⏭️  Skipping duplicate: JID_e7506224 (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T18:45:02.245Z] [BOT] ⏭️  Skipping duplicate: JID_8a0f0600 (posted within 7 days)
⏭️ Skipping already posted: Finance Systems, Finance & Strategy Lead at anthropic
[2026-01-08T18:45:02.245Z] [BOT] ⏭️  Skipping duplicate: JID_8c1479dc (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T18:45:02.246Z] [BOT] ⏭️  Skipping duplicate: JID_3cc1a2d7 (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T18:45:02.246Z] [BOT] ⏭️  Skipping duplicate: JID_4c79ae31 (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T18:45:02.246Z] [BOT] ⏭️  Skipping duplicate: JID_b4d01207 (posted within 7 days)
⏭️ Skipping already posted:  BizOps Lead, BD at brex
⏭️  Skipping duplicate: JID_a3f17800-cx_1001-job-72536 (posted within 7 days)
⏭️ Skipping already posted: Specialist - Data Transfer - Integration & Quality at BNY
[2026-01-08T18:45:02.246Z] [BOT] ⏭️  Skipping duplicate: JID_ce63ae83 (posted within 7 days)
⏭️ Skipping already posted: Community Marketing Manager - Figma Weave (New York, United States)  at figma
[2026-01-08T18:45:02.246Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-08T18:45:02.246Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T18:45:02.247Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-08T18:45:02.247Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
[2026-01-08T18:45:02.247Z] [BOT] ⏭️ Skipping already posted: ROLE_a7374bfe at datadog
📬 Found 2 new jobs (18 already posted)...
[2026-01-08T18:45:02.247Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-08T18:45:02.248Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-08T18:45:02.248Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T18:45:02.250Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-08T18:45:02.251Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Observability" @ airtable
[2026-01-08T18:45:02.251Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-08T18:45:02.256Z] [BOT ERROR] (node:2338) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T18:45:02.544Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Observability @ airtable in #🤖・ai-jobs
[2026-01-08T18:45:02.544Z] [BOT] ✅ Industry: Senior Software Engineer, Observability @ airtable
[2026-01-08T18:45:04.369Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Observability @ airtable in #🌉・san-francisco
[2026-01-08T18:45:04.369Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-08T18:45:05.871Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Observability @ airtable (instance #1)
[2026-01-08T18:45:05.871Z] [BOT] 💾 BEFORE ARCHIVING: 1472 jobs in database
[2026-01-08T18:45:05.873Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T18:45:05.878Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
✅ Archiving complete: 2 archived, 1470 active
[2026-01-08T18:45:05.890Z] [BOT] 💾 Saved posted_jobs.json: 1470 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T18:45:08.890Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-08T18:45:08.891Z] [BOT] 📍 [ROUTING] "Sales Development Representative (LATAM - Spanish Speaking)" @ datadog
[2026-01-08T18:45:08.891Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-08T18:45:09.250Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative (LATAM - Spanish Speaking) @ datadog in #💲・sales-jobs
  ✅ Industry: Sales Development Representative (LATAM - Spanish Speaking) @ datadog
[2026-01-08T18:45:11.193Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative (LATAM - Spanish Speaking) @ datadog in #🚌・boston
[2026-01-08T18:45:11.193Z] [BOT] ✅ Location: 🚌・boston
[2026-01-08T18:45:12.695Z] [BOT] 💾 Marked as posted: Sales Development Representative (LATAM - Spanish Speaking) @ datadog (instance #1)
[2026-01-08T18:45:12.695Z] [BOT] 💾 BEFORE ARCHIVING: 1471 jobs in database
[2026-01-08T18:45:12.696Z] [BOT] ✅ No jobs to archive (all 1471 jobs within 7-day window)
[2026-01-08T18:45:12.707Z] [BOT] 💾 Saved posted_jobs.json: 1471 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T18:45:15.708Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-08T18:45:15.708Z] [BOT] ⏭️  Skipping duplicate: JID_82b91f04 (posted within 7 days)
[2026-01-08T18:45:15.708Z] [BOT] ⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
[2026-01-08T18:45:15.717Z] [BOT] ✅ Loaded pending queue: 166 total (146 pending, 20 enriched, 0 posted)
[2026-01-08T18:45:15.731Z] [BOT] ✅ Saved pending queue: 166 total (146 pending, 18 enriched, 2 posted)
[2026-01-08T18:45:15.731Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T18:45:15.785Z] [BOT] 📂 Loaded 2429 existing routing entries
[2026-01-08T18:45:15.855Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-08T18:45:15.855Z] [BOT] New entries: 2
   Total entries: 2431
   Timestamp: 2026-01-08T18:45:15.838Z
[2026-01-08T18:45:15.855Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T18:45:15.855Z] [BOT] Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-08T18:45:15.856Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
     3. #💲・sales-jobs: 1 posts
     4. #🚌・boston: 1 posts
[STATS] Channel stats saved
[2026-01-08T18:45:17.869Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2338) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*