# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T08:07:56.131Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T08:07:02.959Z] ========================================
[2026-01-13T08:07:02.961Z] Discord Bot Execution Log
[2026-01-13T08:07:02.961Z] Environment: GitHub Actions
[2026-01-13T08:07:02.961Z] Node Version: v20.19.6
[2026-01-13T08:07:02.961Z] ========================================
[2026-01-13T08:07:02.961Z] Environment Variables Check:
[2026-01-13T08:07:02.962Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T08:07:02.962Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T08:07:02.962Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T08:07:02.962Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T08:07:02.962Z] 
Multi-Channel Configuration:
[2026-01-13T08:07:02.962Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T08:07:02.962Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T08:07:02.962Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T08:07:02.962Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T08:07:02.962Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T08:07:02.963Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T08:07:02.963Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T08:07:02.963Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T08:07:02.963Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T08:07:02.963Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T08:07:02.963Z] 
Data Files Check:
[2026-01-13T08:07:02.964Z] .github/data/new_jobs.json: ✅ Exists (10 items, 126831 bytes)
[2026-01-13T08:07:02.967Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 458578 bytes)
[2026-01-13T08:07:02.967Z] 
========================================
[2026-01-13T08:07:02.967Z] Starting Enhanced Discord Bot...
[2026-01-13T08:07:02.967Z] ========================================
[2026-01-13T08:07:03.488Z] [BOT] ✅ Loaded V2 database: 868 jobs
[2026-01-13T08:07:04.085Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T08:07:04.086Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T08:07:04.086Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T08:07:04.194Z] [BOT] ✅ Loaded pending queue: 2699 total (2679 pending, 20 enriched, 0 posted)
[2026-01-13T08:07:04.196Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sales Enablement Manager  at figma
[2026-01-13T08:07:04.198Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T08:07:04.198Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T08:07:04.199Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T08:07:04.200Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T08:07:04.200Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T08:07:04.204Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-13T08:07:04.205Z] [BOT] 📍 [ROUTING] "Sales Enablement Manager " @ figma
[2026-01-13T08:07:04.205Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T08:07:04.209Z] [BOT ERROR] (node:3158) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T08:07:04.380Z] [BOT] ✅ Created forum post: 🏢 Sales Enablement Manager  @ figma in #💲・sales-jobs
[2026-01-13T08:07:04.380Z] [BOT] ✅ Industry: Sales Enablement Manager  @ figma
[2026-01-13T08:07:06.042Z] [BOT] ✅ Created forum post: 🏢 Sales Enablement Manager  @ figma in #🌉・san-francisco
[2026-01-13T08:07:06.042Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T08:07:07.543Z] [BOT] 💾 Marked as posted: Sales Enablement Manager  @ figma (instance #1)
[2026-01-13T08:07:07.543Z] [BOT] 💾 BEFORE ARCHIVING: 869 jobs in database
[2026-01-13T08:07:07.544Z] [BOT] ✅ No jobs to archive (all 869 jobs within 7-day window)
[2026-01-13T08:07:07.553Z] [BOT] 💾 Saved posted_jobs.json: 869 active jobs
[2026-01-13T08:07:07.554Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T08:07:07.554Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, LATAM Financial Services" @ anthropic
[2026-01-13T08:07:07.554Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T08:07:08.014Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, LATAM Financial Services @ anthropic in #💲・sales-jobs
  ✅ Industry: Strategic Account Executive, LATAM Financial Services @ anthropic
[2026-01-13T08:07:09.641Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, LATAM Financial Services @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T08:07:11.142Z] [BOT] 💾 Marked as posted: Strategic Account Executive, LATAM Financial Services @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 870 jobs in database
[2026-01-13T08:07:11.143Z] [BOT] ✅ No jobs to archive (all 870 jobs within 7-day window)
[2026-01-13T08:07:11.149Z] [BOT] 💾 Saved posted_jobs.json: 870 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:07:11.149Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Investment Banking & Capital Markets" @ anthropic
[2026-01-13T08:07:11.149Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T08:07:11.523Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Investment Banking & Capital Markets @ anthropic in #💲・sales-jobs
  ✅ Industry: Strategic Account Executive, Investment Banking & Capital Markets @ anthropic
[2026-01-13T08:07:13.242Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Investment Banking & Capital Markets @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T08:07:14.743Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Investment Banking & Capital Markets @ anthropic (instance #1)
[2026-01-13T08:07:14.744Z] [BOT] 💾 BEFORE ARCHIVING: 871 jobs in database
[2026-01-13T08:07:14.744Z] [BOT] ✅ No jobs to archive (all 871 jobs within 7-day window)
[2026-01-13T08:07:14.752Z] [BOT] 💾 Saved posted_jobs.json: 871 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:07:17.752Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-13T08:07:17.752Z] [BOT] 📍 [ROUTING] "Technical Revenue Accountant" @ anthropic
[2026-01-13T08:07:17.753Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-13T08:07:17.977Z] [BOT] ✅ Created forum post: 🏢 Technical Revenue Accountant @ anthropic in #💰・finance-jobs
  ✅ Industry: Technical Revenue Accountant @ anthropic
[2026-01-13T08:07:19.739Z] [BOT] ✅ Created forum post: 🏢 Technical Revenue Accountant @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T08:07:21.239Z] [BOT] 💾 Marked as posted: Technical Revenue Accountant @ anthropic (instance #1)
[2026-01-13T08:07:21.240Z] [BOT] 💾 BEFORE ARCHIVING: 872 jobs in database
[2026-01-13T08:07:21.240Z] [BOT] ✅ No jobs to archive (all 872 jobs within 7-day window)
[2026-01-13T08:07:21.248Z] [BOT] 💾 Saved posted_jobs.json: 872 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:07:24.248Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-13T08:07:24.248Z] [BOT] 📍 [ROUTING] "Software Engineer, CDN" @ vercel
[2026-01-13T08:07:24.249Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T08:07:25.093Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, CDN @ vercel in #💻・tech-jobs
  ✅ Industry: Software Engineer, CDN @ vercel
[2026-01-13T08:07:26.742Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, CDN @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T08:07:28.244Z] [BOT] 💾 Marked as posted: Software Engineer, CDN @ vercel (instance #1)
[2026-01-13T08:07:28.244Z] [BOT] 💾 BEFORE ARCHIVING: 873 jobs in database
[2026-01-13T08:07:28.244Z] [BOT] ✅ No jobs to archive (all 873 jobs within 7-day window)
[2026-01-13T08:07:28.252Z] [BOT] 💾 Saved posted_jobs.json: 873 active jobs
[2026-01-13T08:07:28.252Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T08:07:28.252Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend" @ ORG_086eec07 Mobile Telematics
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T08:07:28.416Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend @ ORG_086eec07 Mobile Telematics in #💻・tech-jobs
[2026-01-13T08:07:28.416Z] [BOT] ✅ Industry: Software Engineer - Backend @ ORG_086eec07 Mobile Telematics
[2026-01-13T08:07:30.213Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend @ ORG_086eec07 Mobile Telematics in #🚌・boston
[2026-01-13T08:07:30.214Z] [BOT] ✅ Location: 🚌・boston
[2026-01-13T08:07:31.715Z] [BOT] 💾 Marked as posted: Software Engineer - Backend @ ORG_086eec07 Mobile Telematics (instance #1)
[2026-01-13T08:07:31.715Z] [BOT] 💾 BEFORE ARCHIVING: 874 jobs in database
[2026-01-13T08:07:31.716Z] [BOT] ✅ No jobs to archive (all 874 jobs within 7-day window)
[2026-01-13T08:07:31.723Z] [BOT] 💾 Saved posted_jobs.json: 874 active jobs
[2026-01-13T08:07:31.724Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T08:07:34.725Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-13T08:07:34.725Z] [BOT] 📍 [ROUTING] "Fiber Network Mapping Specialist 4" @ ORG_8d0003a5
[2026-01-13T08:07:34.725Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T08:07:34.960Z] [BOT] ✅ Created forum post: 🏢 Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 in #📣・marketing-jobs
  ✅ Industry: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5
[2026-01-13T08:07:36.463Z] [BOT] 💾 Marked as posted: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 (instance #1)
[2026-01-13T08:07:36.463Z] [BOT] 💾 BEFORE ARCHIVING: 875 jobs in database
[2026-01-13T08:07:36.463Z] [BOT] ✅ No jobs to archive (all 875 jobs within 7-day window)
[2026-01-13T08:07:36.472Z] [BOT] 💾 Saved posted_jobs.json: 875 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:07:36.472Z] [BOT] 📍 [ROUTING] "Finance Manager" @ vercel
[2026-01-13T08:07:36.472Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T08:07:36.696Z] [BOT] ✅ Created forum post: 🏢 Finance Manager @ vercel in #📣・marketing-jobs
[2026-01-13T08:07:36.696Z] [BOT] ✅ Industry: Finance Manager @ vercel
[2026-01-13T08:07:38.408Z] [BOT] ✅ Created forum post: 🏢 Finance Manager @ vercel in #🌉・san-francisco
[2026-01-13T08:07:38.408Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T08:07:39.908Z] [BOT] 💾 Marked as posted: Finance Manager @ vercel (instance #1)
[2026-01-13T08:07:39.908Z] [BOT] 💾 BEFORE ARCHIVING: 876 jobs in database
[2026-01-13T08:07:39.909Z] [BOT] ✅ No jobs to archive (all 876 jobs within 7-day window)
[2026-01-13T08:07:39.917Z] [BOT] 💾 Saved posted_jobs.json: 876 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:07:42.918Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-13T08:07:42.918Z] [BOT] 📍 [ROUTING] "Staff Software Engineer - Safety Experience" @ discord
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-13T08:07:42.918Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T08:07:43.210Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer - Safety Experience @ discord in #📈・JID_fb739488
[2026-01-13T08:07:43.210Z] [BOT] ✅ Industry: Staff Software Engineer - Safety Experience @ discord
[2026-01-13T08:07:44.847Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer - Safety Experience @ discord in #🌉・san-francisco
[2026-01-13T08:07:44.848Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T08:07:46.349Z] [BOT] 💾 Marked as posted: Staff Software Engineer - Safety Experience @ discord (instance #1)
[2026-01-13T08:07:46.349Z] [BOT] 💾 BEFORE ARCHIVING: 877 jobs in database
[2026-01-13T08:07:46.351Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-13T08:07:46.358Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:07:46.358Z] [BOT] 📍 [ROUTING] "Senior Data Scientist, Analytics" @ discord
[2026-01-13T08:07:46.358Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T08:07:46.568Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Analytics @ discord in #📈・JID_fb739488
  ✅ Industry: Senior Data Scientist, Analytics @ discord
[2026-01-13T08:07:48.581Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Analytics @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T08:07:50.082Z] [BOT] 💾 Marked as posted: Senior Data Scientist, Analytics @ discord (instance #1)
[2026-01-13T08:07:50.083Z] [BOT] 💾 BEFORE ARCHIVING: 878 jobs in database
[2026-01-13T08:07:50.083Z] [BOT] ✅ No jobs to archive (all 878 jobs within 7-day window)
[2026-01-13T08:07:50.091Z] [BOT] 💾 Saved posted_jobs.json: 878 active jobs
[2026-01-13T08:07:50.091Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T08:07:53.092Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T08:07:53.092Z] [BOT] ⏭️  Skipping duplicate: JID_7de6684a (posted within 7 days)
[2026-01-13T08:07:53.092Z] [BOT] ⏭️  Skipping duplicate: JID_e770cee7 (posted within 7 days)
[2026-01-13T08:07:53.092Z] [BOT] ⏭️  Skipping duplicate: JID_fbb3116a (posted within 7 days)
[2026-01-13T08:07:53.092Z] [BOT] ⏭️  Skipping duplicate: JID_dd4e3939 (posted within 7 days)
⏭️  Skipping duplicate: JID_36106029 (posted within 7 days)
[2026-01-13T08:07:53.093Z] [BOT] ⏭️  Skipping duplicate: JID_c7109edb-iv_r0014039 (posted within 7 days)
⏭️  Skipping duplicate: JID_25c91802 (posted within 7 days)
[2026-01-13T08:07:53.093Z] [BOT] ⏭️  Skipping duplicate: JID_f45a8ec3 (posted within 7 days)
[2026-01-13T08:07:53.093Z] [BOT] ⏭️  Skipping duplicate: JID_abc00999 (posted within 7 days)
[2026-01-13T08:07:53.093Z] [BOT] ⏭️  Skipping duplicate: JID_1fe599b8 (posted within 7 days)
[2026-01-13T08:07:53.206Z] [BOT] ✅ Loaded pending queue: 2699 total (2679 pending, 20 enriched, 0 posted)
[2026-01-13T08:07:53.367Z] [BOT] ✅ Saved pending queue: 2699 total (2679 pending, 10 enriched, 10 posted)
[2026-01-13T08:07:53.367Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T08:07:53.420Z] [BOT] 📂 Loaded 3005 existing routing entries
[2026-01-13T08:07:53.477Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T08:07:53.477Z] [BOT] Total entries: 3015
   Timestamp: 2026-01-13T08:07:53.465Z
[2026-01-13T08:07:53.478Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T08:07:53.478Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-13T08:07:53.478Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-13T08:07:53.479Z] [BOT] Total posts: 19
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 8 posts
     2. #💲・sales-jobs: 3 posts
     3. #💻・tech-jobs: 2 posts
     4. #📣・marketing-jobs: 2 posts
     5. #📈・JID_fb739488: 2 posts
[STATS] Channel stats saved
[2026-01-13T08:07:55.503Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3158) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*