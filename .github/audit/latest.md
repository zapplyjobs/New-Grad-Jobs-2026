# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T13:26:49.806Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T13:25:59.147Z] ========================================
[2026-01-03T13:25:59.148Z] Discord Bot Execution Log
[2026-01-03T13:25:59.149Z] Environment: GitHub Actions
[2026-01-03T13:25:59.149Z] Node Version: v20.19.6
[2026-01-03T13:25:59.149Z] ========================================
[2026-01-03T13:25:59.149Z] Environment Variables Check:
[2026-01-03T13:25:59.149Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T13:25:59.149Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T13:25:59.149Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T13:25:59.149Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T13:25:59.149Z] 
Multi-Channel Configuration:
[2026-01-03T13:25:59.149Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T13:25:59.149Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T13:25:59.150Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T13:25:59.150Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T13:25:59.150Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T13:25:59.150Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T13:25:59.150Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T13:25:59.150Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T13:25:59.150Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T13:25:59.150Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T13:25:59.150Z] 
Data Files Check:
[2026-01-03T13:25:59.151Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166322 bytes)
[2026-01-03T13:25:59.153Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 253647 bytes)
[2026-01-03T13:25:59.153Z] 
========================================
[2026-01-03T13:25:59.153Z] Starting Enhanced Discord Bot...
[2026-01-03T13:25:59.153Z] ========================================
[2026-01-03T13:25:59.666Z] [BOT] ✅ Loaded V2 database: 483 jobs
[2026-01-03T13:26:00.241Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T13:26:00.242Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T13:26:00.242Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T13:26:00.243Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T13:26:00.313Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T13:26:00.408Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T13:26:00.410Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T13:26:00.410Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T13:26:00.410Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T13:26:00.411Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-03T13:26:00.411Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Staff Software Engineer @ datadog: boston, massachusetts, usa; new york, new york, usa, new york, new york, usa
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T13:26:00.416Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-03T13:26:00.416Z] [BOT] 📍 [ROUTING] "Senior Tax Accountant - NYC" @ datadog
[2026-01-03T13:26:00.416Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T13:26:00.421Z] [BOT ERROR] (node:2342) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T13:26:00.661Z] [BOT] ✅ Created forum post: 🏢 Senior Tax Accountant - NYC @ datadog in #💰・finance-jobs
[2026-01-03T13:26:00.661Z] [BOT] ✅ Industry: Senior Tax Accountant - NYC @ datadog
[2026-01-03T13:26:02.462Z] [BOT] ✅ Created forum post: 🏢 Senior Tax Accountant - NYC @ datadog in #🗽・new-york
[2026-01-03T13:26:02.462Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T13:26:03.962Z] [BOT] 💾 Marked as posted: Senior Tax Accountant - NYC @ datadog (instance #1)
[2026-01-03T13:26:03.962Z] [BOT] 💾 BEFORE ARCHIVING: 484 jobs in database
[2026-01-03T13:26:03.963Z] [BOT] ✅ No jobs to archive (all 484 jobs within 7-day window)
[2026-01-03T13:26:03.971Z] [BOT] 💾 Saved posted_jobs.json: 484 active jobs
[2026-01-03T13:26:03.971Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:26:03.972Z] [BOT] 📍 [ROUTING] "Staff Accountant II - NYC" @ datadog
[2026-01-03T13:26:03.972Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T13:26:04.173Z] [BOT] ✅ Created forum post: 🏢 Staff Accountant II - NYC @ datadog in #💰・finance-jobs
[2026-01-03T13:26:04.173Z] [BOT] ✅ Industry: Staff Accountant II - NYC @ datadog
[2026-01-03T13:26:05.851Z] [BOT] ✅ Created forum post: 🏢 Staff Accountant II - NYC @ datadog in #🗽・new-york
[2026-01-03T13:26:05.851Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T13:26:07.351Z] [BOT] 💾 Marked as posted: Staff Accountant II - NYC @ datadog (instance #1)
[2026-01-03T13:26:07.352Z] [BOT] 💾 BEFORE ARCHIVING: 485 jobs in database
[2026-01-03T13:26:07.352Z] [BOT] ✅ No jobs to archive (all 485 jobs within 7-day window)
[2026-01-03T13:26:07.356Z] [BOT] 💾 Saved posted_jobs.json: 485 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:26:10.357Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-03T13:26:10.358Z] [BOT] 📍 [ROUTING] "Senior Technical Program Manager, Knowledge Systems" @ datadog
[2026-01-03T13:26:10.358Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-03T13:26:10.584Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Program Manager, Knowledge Systems @ datadog in #📊・JID_9910249a
[2026-01-03T13:26:10.584Z] [BOT] ✅ Industry: Senior Technical Program Manager, Knowledge Systems @ datadog
[2026-01-03T13:26:12.304Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Program Manager, Knowledge Systems @ datadog in #🌉・san-francisco
[2026-01-03T13:26:12.304Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T13:26:13.804Z] [BOT] 💾 Marked as posted: Senior Technical Program Manager, Knowledge Systems @ datadog (instance #1)
[2026-01-03T13:26:13.805Z] [BOT] 💾 BEFORE ARCHIVING: 486 jobs in database
[2026-01-03T13:26:13.805Z] [BOT] ✅ No jobs to archive (all 486 jobs within 7-day window)
[2026-01-03T13:26:13.811Z] [BOT] 💾 Saved posted_jobs.json: 486 active jobs
[2026-01-03T13:26:13.811Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:26:16.811Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T13:26:16.812Z] [BOT] 📍 [ROUTING] "Senior Technical Writer, Documentation" @ datadog
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T13:26:17.158Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Writer, Documentation @ datadog in #📣・marketing-jobs
  ✅ Industry: Senior Technical Writer, Documentation @ datadog
[2026-01-03T13:26:19.064Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Writer, Documentation @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:26:20.565Z] [BOT] 💾 Marked as posted: Senior Technical Writer, Documentation @ datadog (instance #1)
[2026-01-03T13:26:20.565Z] [BOT] 💾 BEFORE ARCHIVING: 487 jobs in database
[2026-01-03T13:26:20.566Z] [BOT] ✅ No jobs to archive (all 487 jobs within 7-day window)
[2026-01-03T13:26:20.571Z] [BOT] 💾 Saved posted_jobs.json: 487 active jobs
[2026-01-03T13:26:20.571Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:26:23.572Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-03T13:26:23.572Z] [BOT] 📍 [ROUTING] "Services Architect 3 - New York" @ datadog
[2026-01-03T13:26:23.572Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T13:26:23.876Z] [BOT] ✅ Created forum post: 🏢 Services Architect 3 - New York @ datadog in #💲・sales-jobs
[2026-01-03T13:26:23.877Z] [BOT] ✅ Industry: Services Architect 3 - New York @ datadog
[2026-01-03T13:26:25.612Z] [BOT] ✅ Created forum post: 🏢 Services Architect 3 - New York @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:26:27.113Z] [BOT] 💾 Marked as posted: Services Architect 3 - New York @ datadog (instance #1)
[2026-01-03T13:26:27.113Z] [BOT] 💾 BEFORE ARCHIVING: 488 jobs in database
[2026-01-03T13:26:27.114Z] [BOT] ✅ No jobs to archive (all 488 jobs within 7-day window)
[2026-01-03T13:26:27.118Z] [BOT] 💾 Saved posted_jobs.json: 488 active jobs
[2026-01-03T13:26:27.118Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:26:30.118Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-03T13:26:30.119Z] [BOT] 📍 [ROUTING] "Staff GenAI Engineer - Application Performance Monitoring (APM)" @ datadog
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T13:26:30.119Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T13:26:30.441Z] [BOT] ✅ Created forum post: 🏢 Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog in #🤖・ai-jobs
  ✅ Industry: Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog
[2026-01-03T13:26:32.224Z] [BOT] ✅ Created forum post: 🏢 Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:26:33.725Z] [BOT] 💾 Marked as posted: Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog (instance #1)
[2026-01-03T13:26:33.725Z] [BOT] 💾 BEFORE ARCHIVING: 489 jobs in database
[2026-01-03T13:26:33.726Z] [BOT] ✅ No jobs to archive (all 489 jobs within 7-day window)
[2026-01-03T13:26:33.731Z] [BOT] 💾 Saved posted_jobs.json: 489 active jobs
[2026-01-03T13:26:33.731Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:26:33.731Z] [BOT] 📍 [ROUTING] "Staff Product Designer, Bits AI" @ datadog
[2026-01-03T13:26:33.731Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T13:26:33.964Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer, Bits AI @ datadog in #🤖・ai-jobs
  ✅ Industry: Staff Product Designer, Bits AI @ datadog
[2026-01-03T13:26:35.623Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer, Bits AI @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:26:37.124Z] [BOT] 💾 Marked as posted: Staff Product Designer, Bits AI @ datadog (instance #1)
[2026-01-03T13:26:37.124Z] [BOT] 💾 BEFORE ARCHIVING: 490 jobs in database
[2026-01-03T13:26:37.125Z] [BOT] ✅ No jobs to archive (all 490 jobs within 7-day window)
[2026-01-03T13:26:37.130Z] [BOT] 💾 Saved posted_jobs.json: 490 active jobs
[2026-01-03T13:26:37.130Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:26:40.131Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T13:26:40.131Z] [BOT] 📍 [ROUTING] "Staff Software Engineer" @ datadog
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T13:26:40.452Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer @ datadog in #💻・tech-jobs
  ✅ Industry: Staff Software Engineer @ datadog
[2026-01-03T13:26:42.139Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:26:43.640Z] [BOT] 💾 Marked as posted: Staff Software Engineer @ datadog (instance #1)
[2026-01-03T13:26:43.641Z] [BOT] 💾 BEFORE ARCHIVING: 491 jobs in database
[2026-01-03T13:26:43.641Z] [BOT] ✅ No jobs to archive (all 491 jobs within 7-day window)
[2026-01-03T13:26:43.645Z] [BOT] 💾 Saved posted_jobs.json: 491 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:26:43.646Z] [BOT] 💾 Marked as posted: Staff Software Engineer - Frontend @ datadog (instance #1)
[2026-01-03T13:26:43.646Z] [BOT] 💾 BEFORE ARCHIVING: 492 jobs in database
[2026-01-03T13:26:43.646Z] [BOT] ✅ No jobs to archive (all 492 jobs within 7-day window)
[2026-01-03T13:26:43.650Z] [BOT] 💾 Saved posted_jobs.json: 492 active jobs
[2026-01-03T13:26:43.650Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:26:43.650Z] [BOT] 💾 Marked as posted: Staff Software Engineer - Metrics Query @ datadog (instance #1)
[2026-01-03T13:26:43.650Z] [BOT] 💾 BEFORE ARCHIVING: 493 jobs in database
[2026-01-03T13:26:43.651Z] [BOT] ✅ No jobs to archive (all 493 jobs within 7-day window)
[2026-01-03T13:26:43.655Z] [BOT] 💾 Saved posted_jobs.json: 493 active jobs
[2026-01-03T13:26:43.655Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:26:46.656Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-03T13:26:46.656Z] [BOT] ⏭️  Skipping duplicate: JID_0f406816 (posted within 7 days)
[2026-01-03T13:26:46.657Z] [BOT] ⏭️  Skipping duplicate: JID_f63d02e6 (posted within 7 days)
[2026-01-03T13:26:46.657Z] [BOT] ⏭️  Skipping duplicate: JID_c40029b0 (posted within 7 days)
⏭️  Skipping duplicate: JID_bedfae36 (posted within 7 days)
[2026-01-03T13:26:46.657Z] [BOT] ⏭️  Skipping duplicate: JID_1f2e8001 (posted within 7 days)
⏭️  Skipping duplicate: JID_d63aa146 (posted within 7 days)
⏭️  Skipping duplicate: JID_fad4bacc (posted within 7 days)
[2026-01-03T13:26:46.657Z] [BOT] ⏭️  Skipping duplicate: JID_882f1da4 (posted within 7 days)
[2026-01-03T13:26:46.721Z] [BOT] ✅ Loaded pending queue: 805 total (785 pending, 20 enriched, 0 posted)
[2026-01-03T13:26:46.812Z] [BOT] ✅ Saved pending queue: 805 total (785 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-03T13:26:46.813Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T13:26:46.856Z] [BOT] 📂 Loaded 1470 existing routing entries
[2026-01-03T13:26:46.902Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 1478
   Timestamp: 2026-01-03T13:26:46.896Z
[2026-01-03T13:26:46.903Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 16
   Successful: 16
[2026-01-03T13:26:46.903Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-03T13:26:46.903Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T13:26:46.903Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 8
   Top channels:
[2026-01-03T13:26:46.903Z] [BOT] 1. #🗽・new-york: 7 posts
     2. #💰・finance-jobs: 2 posts
     3. #🤖・ai-jobs: 2 posts
     4. #📊・JID_9910249a: 1 posts
     5. #🌉・san-francisco: 1 posts
[2026-01-03T13:26:46.904Z] [BOT] [STATS] Channel stats saved
[2026-01-03T13:26:48.920Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2342) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*