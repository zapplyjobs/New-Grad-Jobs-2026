# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T23:38:26.814Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T23:37:38.386Z] ========================================
[2026-01-05T23:37:38.388Z] Discord Bot Execution Log
[2026-01-05T23:37:38.388Z] Environment: GitHub Actions
[2026-01-05T23:37:38.388Z] Node Version: v20.19.6
[2026-01-05T23:37:38.388Z] ========================================
[2026-01-05T23:37:38.389Z] Environment Variables Check:
[2026-01-05T23:37:38.389Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T23:37:38.389Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T23:37:38.389Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T23:37:38.389Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T23:37:38.389Z] 
Multi-Channel Configuration:
[2026-01-05T23:37:38.389Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T23:37:38.389Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T23:37:38.389Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T23:37:38.389Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T23:37:38.390Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T23:37:38.390Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T23:37:38.390Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T23:37:38.390Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T23:37:38.390Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T23:37:38.390Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T23:37:38.390Z] 
Data Files Check:
[2026-01-05T23:37:38.391Z] .github/data/new_jobs.json: ✅ Exists (9 items, 61346 bytes)
[2026-01-05T23:37:38.396Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 671869 bytes)
[2026-01-05T23:37:38.396Z] 
========================================
[2026-01-05T23:37:38.396Z] Starting Enhanced Discord Bot...
[2026-01-05T23:37:38.396Z] ========================================
[2026-01-05T23:37:38.911Z] [BOT] ✅ Loaded V2 database: 1320 jobs
[2026-01-05T23:37:39.606Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T23:37:39.607Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T23:37:39.607Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T23:37:39.607Z] [BOT] ✅ Loaded pending queue: 9 total (0 pending, 9 enriched, 0 posted)
[2026-01-05T23:37:39.608Z] [BOT] [BOT] 📬 Found 9 enriched jobs ready to post from pending queue
[2026-01-05T23:37:39.608Z] [BOT] [BOT] 🔍 Sample enriched job: Product Operations Manager, Claude Code at anthropic
[2026-01-05T23:37:39.610Z] [BOT] 📬 Found 9 new jobs (0 already posted)...
[2026-01-05T23:37:39.610Z] [BOT] 📋 After blacklist filter: 9 jobs (0 blacklisted)
[2026-01-05T23:37:39.610Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2026-01-05T23:37:39.611Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-05T23:37:39.611Z] [BOT] 📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T23:37:39.616Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-05T23:37:39.616Z] [BOT] 📍 [ROUTING] "Product Operations Manager, Claude Code" @ anthropic
[2026-01-05T23:37:39.616Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-05T23:37:39.621Z] [BOT ERROR] (node:2586) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T23:37:40.012Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager, Claude Code @ anthropic in #💲・sales-jobs
[2026-01-05T23:37:40.012Z] [BOT] ✅ Industry: Product Operations Manager, Claude Code @ anthropic
[2026-01-05T23:37:41.690Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager, Claude Code @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-05T23:37:43.191Z] [BOT] 💾 Marked as posted: Product Operations Manager, Claude Code @ anthropic (instance #1)
[2026-01-05T23:37:43.191Z] [BOT] 💾 BEFORE ARCHIVING: 1321 jobs in database
[2026-01-05T23:37:43.192Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-05T23:37:43.196Z] [BOT] 📦 Archived 3 jobs to 2025-12.json (3 total in archive)
[2026-01-05T23:37:43.197Z] [BOT] ✅ Archiving complete: 3 archived, 1318 active
[2026-01-05T23:37:43.205Z] [BOT] 💾 Saved posted_jobs.json: 1318 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T23:37:46.206Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-05T23:37:46.206Z] [BOT] 📍 [ROUTING] "Premier Support Engineer 2 - New York" @ datadog
[2026-01-05T23:37:46.207Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T23:37:46.563Z] [BOT] ✅ Created forum post: 🏢 Premier Support Engineer 2 - New York @ datadog in #💻・tech-jobs
[2026-01-05T23:37:46.563Z] [BOT] ✅ Industry: Premier Support Engineer 2 - New York @ datadog
[2026-01-05T23:37:48.498Z] [BOT] ✅ Created forum post: 🏢 Premier Support Engineer 2 - New York @ datadog in #🗽・new-york
[2026-01-05T23:37:48.499Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-05T23:37:49.999Z] [BOT] 💾 Marked as posted: Premier Support Engineer 2 - New York @ datadog (instance #1)
[2026-01-05T23:37:49.999Z] [BOT] 💾 BEFORE ARCHIVING: 1319 jobs in database
[2026-01-05T23:37:50.000Z] [BOT] ✅ No jobs to archive (all 1319 jobs within 7-day window)
[2026-01-05T23:37:50.010Z] [BOT] 💾 Saved posted_jobs.json: 1319 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T23:37:50.011Z] [BOT] 📍 [ROUTING] "Senior Software Engineer in Test Prisma Access - AI Automation Engineer" @ ORG_94b92bc9 Alto Networks
[2026-01-05T23:37:50.011Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T23:37:50.270Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks in #💻・tech-jobs
[2026-01-05T23:37:50.270Z] [BOT] ✅ Industry: Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks
[2026-01-05T23:37:52.008Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks in #🌉・san-francisco
[2026-01-05T23:37:52.008Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-05T23:37:53.508Z] [BOT] 💾 Marked as posted: Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks (instance #1)
[2026-01-05T23:37:53.508Z] [BOT] 💾 BEFORE ARCHIVING: 1320 jobs in database
[2026-01-05T23:37:53.509Z] [BOT] ✅ No jobs to archive (all 1320 jobs within 7-day window)
[2026-01-05T23:37:53.517Z] [BOT] 💾 Saved posted_jobs.json: 1320 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T23:37:53.518Z] [BOT] 📍 [ROUTING] "CPM Data Processor 1" @ ORG_a3b50c47 of Montana
[2026-01-05T23:37:53.518Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T23:37:53.738Z] [BOT] ✅ Created forum post: 🏢 CPM Data Processor 1 @ ORG_a3b50c47 of Montana in #💻・tech-jobs
[2026-01-05T23:37:53.738Z] [BOT] ✅ Industry: CPM Data Processor 1 @ ORG_a3b50c47 of Montana
[2026-01-05T23:37:55.239Z] [BOT] 💾 Marked as posted: CPM Data Processor 1 @ ORG_a3b50c47 of Montana (instance #1)
[2026-01-05T23:37:55.240Z] [BOT] 💾 BEFORE ARCHIVING: 1321 jobs in database
[2026-01-05T23:37:55.240Z] [BOT] ✅ No jobs to archive (all 1321 jobs within 7-day window)
[2026-01-05T23:37:55.249Z] [BOT] 💾 Saved posted_jobs.json: 1321 active jobs
[2026-01-05T23:37:55.249Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Systems Analyst 1-Support - Support" @ ORG_dc7620eb
[2026-01-05T23:37:55.249Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T23:37:55.782Z] [BOT] ✅ Created forum post: 🔴 Systems Analyst 1-Support - Support @ ORG_dc7620eb in #💻・tech-jobs
[2026-01-05T23:37:55.782Z] [BOT] ✅ Industry: Systems Analyst 1-Support - Support @ ORG_dc7620eb
[2026-01-05T23:37:57.283Z] [BOT] 💾 Marked as posted: Systems Analyst 1-Support - Support @ ORG_dc7620eb (instance #1)
[2026-01-05T23:37:57.283Z] [BOT] 💾 BEFORE ARCHIVING: 1322 jobs in database
[2026-01-05T23:37:57.284Z] [BOT] ✅ No jobs to archive (all 1322 jobs within 7-day window)
[2026-01-05T23:37:57.292Z] [BOT] 💾 Saved posted_jobs.json: 1322 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T23:38:00.293Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-05T23:38:00.294Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry" @ ORG_7b717950
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-05T23:38:00.294Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-05T23:38:00.704Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Entry @ ORG_7b717950
[2026-01-05T23:38:02.574Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-05T23:38:04.075Z] [BOT] 💾 Marked as posted: Software Engineer - Entry @ ORG_7b717950 (instance #1)
[2026-01-05T23:38:04.075Z] [BOT] 💾 BEFORE ARCHIVING: 1323 jobs in database
[2026-01-05T23:38:04.076Z] [BOT] ✅ No jobs to archive (all 1323 jobs within 7-day window)
[2026-01-05T23:38:04.085Z] [BOT] 💾 Saved posted_jobs.json: 1323 active jobs
[2026-01-05T23:38:04.085Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T23:38:04.085Z] [BOT] 📍 [ROUTING] "AI Engineer" @ ORG_00a3af23
[2026-01-05T23:38:04.085Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-05T23:38:04.377Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ ORG_00a3af23 in #🤖・ai-jobs
  ✅ Industry: AI Engineer @ ORG_00a3af23
[2026-01-05T23:38:06.158Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ ORG_00a3af23 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-05T23:38:07.659Z] [BOT] 💾 Marked as posted: AI Engineer @ ORG_00a3af23 (instance #1)
[2026-01-05T23:38:07.659Z] [BOT] 💾 BEFORE ARCHIVING: 1324 jobs in database
[2026-01-05T23:38:07.660Z] [BOT] ✅ No jobs to archive (all 1324 jobs within 7-day window)
[2026-01-05T23:38:07.670Z] [BOT] 💾 Saved posted_jobs.json: 1324 active jobs
[2026-01-05T23:38:07.670Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T23:38:10.671Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-05T23:38:10.671Z] [BOT] 📍 [ROUTING] "BNY Analyst Program" @ ORG_01d9a8c4
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-05T23:38:10.978Z] [BOT] ✅ Created forum post: 🏢 BNY Analyst Program @ ORG_01d9a8c4 in #📣・marketing-jobs
[2026-01-05T23:38:10.978Z] [BOT] ✅ Industry: BNY Analyst Program @ ORG_01d9a8c4
[2026-01-05T23:38:12.949Z] [BOT] ✅ Created forum post: 🏢 BNY Analyst Program @ ORG_01d9a8c4 in #💻・remote-usa
[2026-01-05T23:38:12.949Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-05T23:38:14.451Z] [BOT] 💾 Marked as posted: BNY Analyst Program @ ORG_01d9a8c4 (instance #1)
[2026-01-05T23:38:14.451Z] [BOT] 💾 BEFORE ARCHIVING: 1325 jobs in database
[2026-01-05T23:38:14.452Z] [BOT] ✅ No jobs to archive (all 1325 jobs within 7-day window)
[2026-01-05T23:38:14.462Z] [BOT] 💾 Saved posted_jobs.json: 1325 active jobs
[2026-01-05T23:38:14.462Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T23:38:17.463Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-05T23:38:17.463Z] [BOT] 📍 [ROUTING] "Minor League Technology Operator" @ ORG_2bc58fcc League Baseball
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-05T23:38:17.727Z] [BOT] ✅ Created forum post: 🏢 Minor League Technology Operator @ ORG_2bc58fcc League Baseball in #🩺・healthcare-jobs
  ✅ Industry: Minor League Technology Operator @ ORG_2bc58fcc League Baseball
[2026-01-05T23:38:19.421Z] [BOT] ✅ Created forum post: 🏢 Minor League Technology Operator @ ORG_2bc58fcc League Baseball in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-05T23:38:20.922Z] [BOT] 💾 Marked as posted: Minor League Technology Operator @ ORG_2bc58fcc League Baseball (instance #1)
[2026-01-05T23:38:20.922Z] [BOT] 💾 BEFORE ARCHIVING: 1326 jobs in database
[2026-01-05T23:38:20.923Z] [BOT] ✅ No jobs to archive (all 1326 jobs within 7-day window)
[2026-01-05T23:38:20.933Z] [BOT] 💾 Saved posted_jobs.json: 1326 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T23:38:23.934Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-05T23:38:23.935Z] [BOT] ⏭️  Skipping duplicate: JID_206b832c (posted within 7 days)
[2026-01-05T23:38:23.935Z] [BOT] ⏭️  Skipping duplicate: JID_8311b1b4 (posted within 7 days)
[2026-01-05T23:38:23.935Z] [BOT] ⏭️  Skipping duplicate: JID_4d0639d7 (posted within 7 days)
[2026-01-05T23:38:23.935Z] [BOT] ⏭️  Skipping duplicate: JID_51dfa8fb (posted within 7 days)
[2026-01-05T23:38:23.935Z] [BOT] ⏭️  Skipping duplicate: JID_a3046b7d-engineer_2503867-1 (posted within 7 days)
[2026-01-05T23:38:23.936Z] [BOT] ⏭️  Skipping duplicate: JID_a3f17800-cx_1001-job-73110 (posted within 7 days)
[2026-01-05T23:38:23.936Z] [BOT] ⏭️  Skipping duplicate: JID_1185d0fc (posted within 7 days)
[2026-01-05T23:38:23.936Z] [BOT] ⏭️  Skipping duplicate: JID_f49f2620 (posted within 7 days)
[2026-01-05T23:38:23.936Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-319305 (posted within 7 days)
[2026-01-05T23:38:23.936Z] [BOT] ✅ Loaded pending queue: 9 total (0 pending, 9 enriched, 0 posted)
[2026-01-05T23:38:23.938Z] [BOT] ✅ Saved pending queue: 9 total (0 pending, 0 enriched, 9 posted)
[2026-01-05T23:38:23.938Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T23:38:23.991Z] [BOT] 📂 Loaded 2231 existing routing entries
[2026-01-05T23:38:24.051Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2026-01-05T23:38:24.052Z] [BOT] Total entries: 2240
   Timestamp: 2026-01-05T23:38:24.037Z
[2026-01-05T23:38:24.052Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
   Total attempts: 16
   Successful: 16
[2026-01-05T23:38:24.052Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-05T23:38:24.052Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-05T23:38:24.052Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 9
   Top channels:
[2026-01-05T23:38:24.053Z] [BOT] 1. #🌉・san-francisco: 4 posts
     2. #💻・tech-jobs: 4 posts
     3. #🤖・ai-jobs: 2 posts
     4. #💲・sales-jobs: 1 posts
     5. #🗽・new-york: 1 posts
[2026-01-05T23:38:24.053Z] [BOT] [STATS] Channel stats saved
[2026-01-05T23:38:26.063Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2586) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*