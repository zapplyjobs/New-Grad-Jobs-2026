# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T19:07:26.891Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T19:07:08.706Z] ========================================
[2026-01-08T19:07:08.708Z] Discord Bot Execution Log
[2026-01-08T19:07:08.708Z] Environment: GitHub Actions
[2026-01-08T19:07:08.708Z] Node Version: v20.19.6
[2026-01-08T19:07:08.708Z] ========================================
[2026-01-08T19:07:08.708Z] Environment Variables Check:
[2026-01-08T19:07:08.708Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T19:07:08.708Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T19:07:08.708Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T19:07:08.709Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T19:07:08.709Z] 
Multi-Channel Configuration:
[2026-01-08T19:07:08.709Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T19:07:08.709Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T19:07:08.709Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T19:07:08.709Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T19:07:08.709Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T19:07:08.709Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T19:07:08.709Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T19:07:08.709Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T19:07:08.709Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T19:07:08.709Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T19:07:08.710Z] 
Data Files Check:
[2026-01-08T19:07:08.711Z] .github/data/new_jobs.json: ✅ Exists (10 items, 149014 bytes)
[2026-01-08T19:07:08.716Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 756553 bytes)
[2026-01-08T19:07:08.716Z] 
========================================
[2026-01-08T19:07:08.716Z] Starting Enhanced Discord Bot...
[2026-01-08T19:07:08.716Z] ========================================
[2026-01-08T19:07:09.228Z] [BOT] ✅ Loaded V2 database: 1473 jobs
[2026-01-08T19:07:10.300Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T19:07:10.300Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T19:07:10.300Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T19:07:10.309Z] [BOT] ✅ Loaded pending queue: 169 total (149 pending, 20 enriched, 0 posted)
[2026-01-08T19:07:10.309Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Finance Program Manager at spotify
[2026-01-08T19:07:10.311Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
[2026-01-08T19:07:10.311Z] [BOT] ⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
[2026-01-08T19:07:10.311Z] [BOT] ⏭️  Skipping duplicate: JID_d55d35a3 (posted within 7 days)
[2026-01-08T19:07:10.312Z] [BOT] ⏭️ Skipping already posted: Senior Data Scientist, Finance  at brex
⏭️  Skipping duplicate: JID_48157790 (posted within 7 days)
⏭️ Skipping already posted: Senior Data Scientist, Finance  at brex
[2026-01-08T19:07:10.312Z] [BOT] ⏭️  Skipping duplicate: JID_82b91f04 (posted within 7 days)
[2026-01-08T19:07:10.312Z] [BOT] ⏭️ Skipping already posted: Senior Software Engineer, Observability at airtable
⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
⏭️  Skipping duplicate: JID_c15de4f7 (posted within 7 days)
⏭️ Skipping already posted: Product Marketing Lead, Agents at anthropic
[2026-01-08T19:07:10.312Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
[2026-01-08T19:07:10.312Z] [BOT] ⏭️  Skipping duplicate: JID_6e47819d (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T19:07:10.312Z] [BOT] ⏭️  Skipping duplicate: JID_b787de31 (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T19:07:10.312Z] [BOT] ⏭️  Skipping duplicate: JID_543d933c (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T19:07:10.312Z] [BOT] ⏭️  Skipping duplicate: JID_9d3cd40a (posted within 7 days)
[2026-01-08T19:07:10.312Z] [BOT] ⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T19:07:10.313Z] [BOT] ⏭️  Skipping duplicate: JID_e7506224 (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
⏭️  Skipping duplicate: JID_8a0f0600 (posted within 7 days)
[2026-01-08T19:07:10.313Z] [BOT] ⏭️ Skipping already posted: Finance Systems, Finance & Strategy Lead at anthropic
[2026-01-08T19:07:10.313Z] [BOT] ⏭️  Skipping duplicate: JID_8c1479dc (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T19:07:10.313Z] [BOT] ⏭️  Skipping duplicate: JID_3cc1a2d7 (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T19:07:10.313Z] [BOT] ⏭️  Skipping duplicate: JID_4c79ae31 (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
⏭️  Skipping duplicate: JID_b4d01207 (posted within 7 days)
[2026-01-08T19:07:10.313Z] [BOT] ⏭️ Skipping already posted:  BizOps Lead, BD at brex
⏭️  Skipping duplicate: JID_a3f17800-cx_1001-job-72536 (posted within 7 days)
⏭️ Skipping already posted: Specialist - Data Transfer - Integration & Quality at BNY
📬 Found 2 new jobs (18 already posted)...
[2026-01-08T19:07:10.313Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-08T19:07:10.314Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-08T19:07:10.314Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-08T19:07:10.314Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T19:07:10.318Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-08T19:07:10.319Z] [BOT] 📍 [ROUTING] "Finance Program Manager" @ spotify
[2026-01-08T19:07:10.319Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-08T19:07:10.336Z] [BOT ERROR] (node:2457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T19:07:10.805Z] [BOT] ✅ Created forum post: 🏢 Finance Program Manager @ spotify in #📊・JID_9910249a
  ✅ Industry: Finance Program Manager @ spotify
[2026-01-08T19:07:12.625Z] [BOT] ✅ Created forum post: 🏢 Finance Program Manager @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-08T19:07:14.125Z] [BOT] 💾 Marked as posted: Finance Program Manager @ spotify (instance #1)
[2026-01-08T19:07:14.125Z] [BOT] 💾 BEFORE ARCHIVING: 1474 jobs in database
[2026-01-08T19:07:14.127Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T19:07:14.132Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
✅ Archiving complete: 4 archived, 1470 active
[2026-01-08T19:07:14.144Z] [BOT] 💾 Saved posted_jobs.json: 1470 active jobs
[2026-01-08T19:07:14.144Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T19:07:17.145Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-08T19:07:17.145Z] [BOT] 📍 [ROUTING] "FAST Configuration Analyst" @ ORG_da05efaa
   Category: MARKETING (matched: "growth")
[2026-01-08T19:07:17.145Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-08T19:07:17.428Z] [BOT] ✅ Created forum post: 🏢 FAST Configuration Analyst @ ORG_da05efaa in #📣・marketing-jobs
  ✅ Industry: FAST Configuration Analyst @ ORG_da05efaa
[2026-01-08T19:07:19.458Z] [BOT] ✅ Created forum post: 🏢 FAST Configuration Analyst @ ORG_da05efaa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T19:07:20.958Z] [BOT] 💾 Marked as posted: FAST Configuration Analyst @ ORG_da05efaa (instance #1)
[2026-01-08T19:07:20.959Z] [BOT] 💾 BEFORE ARCHIVING: 1471 jobs in database
[2026-01-08T19:07:20.960Z] [BOT] ✅ No jobs to archive (all 1471 jobs within 7-day window)
[2026-01-08T19:07:20.971Z] [BOT] 💾 Saved posted_jobs.json: 1471 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T19:07:23.971Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-08T19:07:23.971Z] [BOT] ⏭️  Skipping duplicate: JID_4e0104da (posted within 7 days)
[2026-01-08T19:07:23.972Z] [BOT] ⏭️  Skipping duplicate: JID_c4ab4833 (posted within 7 days)
[2026-01-08T19:07:23.980Z] [BOT] ✅ Loaded pending queue: 169 total (149 pending, 20 enriched, 0 posted)
[2026-01-08T19:07:23.991Z] [BOT] ✅ Saved pending queue: 169 total (149 pending, 18 enriched, 2 posted)
[2026-01-08T19:07:23.991Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T19:07:24.051Z] [BOT] 📂 Loaded 2432 existing routing entries
[2026-01-08T19:07:24.107Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-08T19:07:24.107Z] [BOT] Total entries: 2434
   Timestamp: 2026-01-08T19:07:24.095Z
[2026-01-08T19:07:24.107Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T19:07:24.107Z] [BOT] Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-08T19:07:24.108Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
[2026-01-08T19:07:24.108Z] [BOT] 1. #📊・JID_9910249a: 1 posts
     2. #🗽・new-york: 1 posts
     3. #📣・marketing-jobs: 1 posts
     4. #💻・remote-usa: 1 posts
[2026-01-08T19:07:24.108Z] [BOT] [STATS] Channel stats saved
[2026-01-08T19:07:26.123Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*