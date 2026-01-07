# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T23:38:47.347Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 17
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T23:38:27.107Z] ========================================
[2026-01-07T23:38:27.109Z] Discord Bot Execution Log
[2026-01-07T23:38:27.109Z] Environment: GitHub Actions
[2026-01-07T23:38:27.109Z] Node Version: v20.19.6
[2026-01-07T23:38:27.110Z] ========================================
[2026-01-07T23:38:27.110Z] Environment Variables Check:
[2026-01-07T23:38:27.110Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T23:38:27.110Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T23:38:27.110Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T23:38:27.110Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T23:38:27.110Z] 
Multi-Channel Configuration:
[2026-01-07T23:38:27.110Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T23:38:27.110Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T23:38:27.110Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T23:38:27.110Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T23:38:27.111Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T23:38:27.111Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T23:38:27.111Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T23:38:27.111Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T23:38:27.111Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T23:38:27.111Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T23:38:27.111Z] 
Data Files Check:
[2026-01-07T23:38:27.112Z] .github/data/new_jobs.json: ✅ Exists (10 items, 138235 bytes)
[2026-01-07T23:38:27.118Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 736551 bytes)
[2026-01-07T23:38:27.118Z] 
========================================
[2026-01-07T23:38:27.118Z] Starting Enhanced Discord Bot...
[2026-01-07T23:38:27.118Z] ========================================
[2026-01-07T23:38:27.656Z] [BOT] ✅ Loaded V2 database: 1435 jobs
[2026-01-07T23:38:28.548Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T23:38:28.548Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T23:38:28.548Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T23:38:28.553Z] [BOT] ✅ Loaded pending queue: 111 total (91 pending, 20 enriched, 0 posted)
[2026-01-07T23:38:28.553Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sr. Field Marketing Manager (Federal / State) at verkada
[2026-01-07T23:38:28.555Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
[2026-01-07T23:38:28.555Z] [BOT] ⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-07T23:38:28.555Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-07T23:38:28.555Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-07T23:38:28.556Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-07T23:38:28.556Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-07T23:38:28.556Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-07T23:38:28.556Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-07T23:38:28.556Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-07T23:38:28.556Z] [BOT] ⏭️  Skipping duplicate: JID_16d85b73 (posted within 7 days)
⏭️ Skipping already posted: Security GRC Specialist, Public Sector at anthropic
[2026-01-07T23:38:28.556Z] [BOT] ⏭️  Skipping duplicate: JID_bfdf3422 (posted within 7 days)
⏭️ Skipping already posted: ROLE_02666a39 at coinbase
⏭️  Skipping duplicate: JID_b0371cb8 (posted within 7 days)
⏭️ Skipping already posted: ROLE_cb46b66c at vercel
[2026-01-07T23:38:28.557Z] [BOT] ⏭️  Skipping duplicate: JID_7ed7fe99 (posted within 7 days)
⏭️ Skipping already posted: ROLE_593bd0fe at anthropic
⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
[2026-01-07T23:38:28.557Z] [BOT] ⏭️  Skipping duplicate: JID_2ba6f373 (posted within 7 days)
⏭️ Skipping already posted: Strategic Program Manager, Contingent Workforce at figma
[2026-01-07T23:38:28.557Z] [BOT] ⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
⏭️ Skipping already posted: ROLE_80b579fc at Oklahoma State Government
📬 Found 3 new jobs (17 already posted)...
[2026-01-07T23:38:28.557Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2026-01-07T23:38:28.557Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-07T23:38:28.558Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-07T23:38:28.558Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T23:38:28.561Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-07T23:38:28.562Z] [BOT] 📍 [ROUTING] "Sr. Field Marketing Manager (Federal / State)" @ verkada
[2026-01-07T23:38:28.562Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-07T23:38:28.567Z] [BOT ERROR] (node:2442) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T23:38:28.892Z] [BOT] ✅ Created forum post: 🏢 Sr. Field Marketing Manager (Federal / State) @ verkada in #📣・marketing-jobs
  ✅ Industry: Sr. Field Marketing Manager (Federal / State) @ verkada
[2026-01-07T23:38:30.394Z] [BOT] 💾 Marked as posted: Sr. Field Marketing Manager (Federal / State) @ verkada (instance #1)
[2026-01-07T23:38:30.394Z] [BOT] 💾 BEFORE ARCHIVING: 1436 jobs in database
[2026-01-07T23:38:30.395Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-07T23:38:30.400Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (2 total in archive)
[2026-01-07T23:38:30.400Z] [BOT] ✅ Archiving complete: 2 archived, 1434 active
[2026-01-07T23:38:30.410Z] [BOT] 💾 Saved posted_jobs.json: 1434 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T23:38:33.410Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-07T23:38:33.411Z] [BOT] 📍 [ROUTING] "Senior Software Engineer in Test Prisma Access - AI Automation Engineer" @ ORG_94b92bc9 Alto Networks
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T23:38:33.666Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks in #💻・tech-jobs
  ✅ Industry: Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks
[2026-01-07T23:38:35.608Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-07T23:38:37.110Z] [BOT] 💾 Marked as posted: Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks (instance #1)
[2026-01-07T23:38:37.110Z] [BOT] 💾 BEFORE ARCHIVING: 1435 jobs in database
[2026-01-07T23:38:37.111Z] [BOT] ✅ No jobs to archive (all 1435 jobs within 7-day window)
[2026-01-07T23:38:37.121Z] [BOT] 💾 Saved posted_jobs.json: 1435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T23:38:37.123Z] [BOT] 📍 [ROUTING] "Field Application Engineer – New College Graduate - Ncg" @ ORG_54360ad7
[2026-01-07T23:38:37.123Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T23:38:37.403Z] [BOT] ✅ Created forum post: 🏢 Field Application Engineer – New College Graduate - Ncg @ ORG_54360ad7 in #💻・tech-jobs
[2026-01-07T23:38:37.403Z] [BOT] ✅ Industry: Field Application Engineer – New College Graduate - Ncg @ ORG_54360ad7
[2026-01-07T23:38:39.453Z] [BOT] ✅ Created forum post: 🏢 Field Application Engineer – New College Graduate - Ncg @ ORG_54360ad7 in #🗽・new-york
[2026-01-07T23:38:39.453Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-07T23:38:40.953Z] [BOT] 💾 Marked as posted: Field Application Engineer – New College Graduate - Ncg @ ORG_54360ad7 (instance #1)
[2026-01-07T23:38:40.954Z] [BOT] 💾 BEFORE ARCHIVING: 1436 jobs in database
[2026-01-07T23:38:40.955Z] [BOT] ✅ No jobs to archive (all 1436 jobs within 7-day window)
[2026-01-07T23:38:40.967Z] [BOT] 💾 Saved posted_jobs.json: 1436 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T23:38:43.969Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-07T23:38:43.969Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
[2026-01-07T23:38:43.969Z] [BOT] ⏭️  Skipping duplicate: JID_7d5ce5e4 (posted within 7 days)
[2026-01-07T23:38:43.969Z] [BOT] ⏭️  Skipping duplicate: JID_2179aa27 (posted within 7 days)
[2026-01-07T23:38:43.976Z] [BOT] ✅ Loaded pending queue: 111 total (91 pending, 20 enriched, 0 posted)
[2026-01-07T23:38:43.985Z] [BOT] ✅ Saved pending queue: 111 total (91 pending, 17 enriched, 3 posted)
[2026-01-07T23:38:43.985Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-07T23:38:44.048Z] [BOT] 📂 Loaded 2372 existing routing entries
[2026-01-07T23:38:44.101Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-07T23:38:44.101Z] [BOT] Total entries: 2375
   Timestamp: 2026-01-07T23:38:44.091Z
[2026-01-07T23:38:44.102Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T23:38:44.102Z] [BOT] Total attempts: 22
   Successful: 5
   Failed: 0
[2026-01-07T23:38:44.102Z] [BOT] Skipped: 17
[2026-01-07T23:38:44.102Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-07T23:38:44.103Z] [BOT] Last cleanup: Never
   Total posts: 5
   Channels used: 4
   Top channels:
[2026-01-07T23:38:44.103Z] [BOT] 1. #💻・tech-jobs: 2 posts
     2. #📣・marketing-jobs: 1 posts
     3. #🌉・san-francisco: 1 posts
     4. #🗽・new-york: 1 posts
[2026-01-07T23:38:44.103Z] [BOT] [STATS] Channel stats saved
[2026-01-07T23:38:46.116Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2442) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*