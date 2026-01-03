# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T14:50:49.078Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T14:49:53.803Z] ========================================
[2026-01-03T14:49:53.805Z] Discord Bot Execution Log
[2026-01-03T14:49:53.805Z] Environment: GitHub Actions
[2026-01-03T14:49:53.805Z] Node Version: v20.19.6
[2026-01-03T14:49:53.805Z] ========================================
[2026-01-03T14:49:53.805Z] Environment Variables Check:
[2026-01-03T14:49:53.805Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T14:49:53.805Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T14:49:53.805Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T14:49:53.806Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T14:49:53.806Z] 
Multi-Channel Configuration:
[2026-01-03T14:49:53.806Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T14:49:53.806Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T14:49:53.806Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T14:49:53.806Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T14:49:53.806Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T14:49:53.806Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T14:49:53.806Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T14:49:53.806Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T14:49:53.806Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T14:49:53.806Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T14:49:53.806Z] 
Data Files Check:
[2026-01-03T14:49:53.807Z] .github/data/new_jobs.json: ✅ Exists (10 items, 141887 bytes)
[2026-01-03T14:49:53.810Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 282714 bytes)
[2026-01-03T14:49:53.810Z] 
========================================
[2026-01-03T14:49:53.810Z] Starting Enhanced Discord Bot...
[2026-01-03T14:49:53.810Z] ========================================
[2026-01-03T14:49:54.339Z] [BOT] ✅ Loaded V2 database: 543 jobs
[2026-01-03T14:49:54.792Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T14:49:54.793Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T14:49:54.793Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T14:49:54.797Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T14:49:54.864Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T14:49:54.955Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T14:49:54.958Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T14:49:54.958Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T14:49:54.958Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T14:49:54.959Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T14:49:54.959Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T14:49:54.965Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T14:49:54.965Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, LATAM Financial Services" @ anthropic
[2026-01-03T14:49:54.965Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:49:54.970Z] [BOT ERROR] (node:2321) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T14:49:55.176Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, LATAM Financial Services @ anthropic in #💲・sales-jobs
[2026-01-03T14:49:55.176Z] [BOT] ✅ Industry: Strategic Account Executive, LATAM Financial Services @ anthropic
[2026-01-03T14:49:56.933Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, LATAM Financial Services @ anthropic in #🌉・san-francisco
[2026-01-03T14:49:56.933Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:49:58.434Z] [BOT] 💾 Marked as posted: Strategic Account Executive, LATAM Financial Services @ anthropic (instance #1)
[2026-01-03T14:49:58.435Z] [BOT] 💾 BEFORE ARCHIVING: 544 jobs in database
[2026-01-03T14:49:58.436Z] [BOT] ✅ No jobs to archive (all 544 jobs within 7-day window)
[2026-01-03T14:49:58.445Z] [BOT] 💾 Saved posted_jobs.json: 544 active jobs
[2026-01-03T14:49:58.445Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:49:58.445Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Investment Banking & Capital Markets" @ anthropic
[2026-01-03T14:49:58.445Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:49:58.777Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Investment Banking & Capital Markets @ anthropic in #💲・sales-jobs
[2026-01-03T14:49:58.777Z] [BOT] ✅ Industry: Strategic Account Executive, Investment Banking & Capital Markets @ anthropic
[2026-01-03T14:50:00.469Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Investment Banking & Capital Markets @ anthropic in #🌉・san-francisco
[2026-01-03T14:50:00.469Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:50:01.970Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Investment Banking & Capital Markets @ anthropic (instance #1)
[2026-01-03T14:50:01.970Z] [BOT] 💾 BEFORE ARCHIVING: 545 jobs in database
[2026-01-03T14:50:01.970Z] [BOT] ✅ No jobs to archive (all 545 jobs within 7-day window)
[2026-01-03T14:50:01.975Z] [BOT] 💾 Saved posted_jobs.json: 545 active jobs
[2026-01-03T14:50:01.975Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:50:01.975Z] [BOT] 📍 [ROUTING] "Customer Activation Manager, Large-Scale Deployments" @ anthropic
   Category: SALES (matched: "customer success")
[2026-01-03T14:50:01.975Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:50:02.204Z] [BOT] ✅ Created forum post: 🏢 Customer Activation Manager, Large-Scale Deployments @ anthropic in #💲・sales-jobs
[2026-01-03T14:50:02.205Z] [BOT] ✅ Industry: Customer Activation Manager, Large-Scale Deployments @ anthropic
[2026-01-03T14:50:04.156Z] [BOT] ✅ Created forum post: 🏢 Customer Activation Manager, Large-Scale Deployments @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:50:05.657Z] [BOT] 💾 Marked as posted: Customer Activation Manager, Large-Scale Deployments @ anthropic (instance #1)
[2026-01-03T14:50:05.657Z] [BOT] 💾 BEFORE ARCHIVING: 546 jobs in database
[2026-01-03T14:50:05.658Z] [BOT] ✅ No jobs to archive (all 546 jobs within 7-day window)
[2026-01-03T14:50:05.663Z] [BOT] 💾 Saved posted_jobs.json: 546 active jobs
[2026-01-03T14:50:05.663Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:50:08.663Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-03T14:50:08.663Z] [BOT] 📍 [ROUTING] "Staff Software Engineer - Safety Experience" @ discord
[2026-01-03T14:50:08.663Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T14:50:08.863Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer - Safety Experience @ discord in #📈・JID_fb739488
[2026-01-03T14:50:08.863Z] [BOT] ✅ Industry: Staff Software Engineer - Safety Experience @ discord
[2026-01-03T14:50:10.645Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer - Safety Experience @ discord in #🌉・san-francisco
[2026-01-03T14:50:10.646Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:50:12.146Z] [BOT] 💾 Marked as posted: Staff Software Engineer - Safety Experience @ discord (instance #1)
[2026-01-03T14:50:12.146Z] [BOT] 💾 BEFORE ARCHIVING: 547 jobs in database
[2026-01-03T14:50:12.147Z] [BOT] ✅ No jobs to archive (all 547 jobs within 7-day window)
[2026-01-03T14:50:12.152Z] [BOT] 💾 Saved posted_jobs.json: 547 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T14:50:12.152Z] [BOT] 📍 [ROUTING] "Senior Data Scientist, Analytics" @ discord
[2026-01-03T14:50:12.152Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T14:50:12.306Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Analytics @ discord in #📈・JID_fb739488
[2026-01-03T14:50:12.306Z] [BOT] ✅ Industry: Senior Data Scientist, Analytics @ discord
[2026-01-03T14:50:13.978Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Analytics @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:50:15.479Z] [BOT] 💾 Marked as posted: Senior Data Scientist, Analytics @ discord (instance #1)
[2026-01-03T14:50:15.480Z] [BOT] 💾 BEFORE ARCHIVING: 548 jobs in database
[2026-01-03T14:50:15.480Z] [BOT] ✅ No jobs to archive (all 548 jobs within 7-day window)
[2026-01-03T14:50:15.486Z] [BOT] 💾 Saved posted_jobs.json: 548 active jobs
[2026-01-03T14:50:15.486Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:50:18.486Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-03T14:50:18.486Z] [BOT] 📍 [ROUTING] "Motion Design Animator, Thrive Intern" @ duolingo
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T14:50:18.758Z] [BOT] ✅ Created forum post: 🏢 Motion Design Animator, Thrive Intern @ duolingo in #💻・tech-jobs
  ✅ Industry: Motion Design Animator, Thrive Intern @ duolingo
[2026-01-03T14:50:20.259Z] [BOT] 💾 Marked as posted: Motion Design Animator, Thrive Intern @ duolingo (instance #1)
[2026-01-03T14:50:20.260Z] [BOT] 💾 BEFORE ARCHIVING: 549 jobs in database
[2026-01-03T14:50:20.260Z] [BOT] ✅ No jobs to archive (all 549 jobs within 7-day window)
[2026-01-03T14:50:20.265Z] [BOT] 💾 Saved posted_jobs.json: 549 active jobs
[2026-01-03T14:50:20.265Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:50:20.265Z] [BOT] 📍 [ROUTING] "Software Engineer - Realtime Infrastructure" @ discord
[2026-01-03T14:50:20.265Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T14:50:20.594Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Realtime Infrastructure @ discord in #💻・tech-jobs
  ✅ Industry: Software Engineer - Realtime Infrastructure @ discord
[2026-01-03T14:50:22.268Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Realtime Infrastructure @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:50:23.769Z] [BOT] 💾 Marked as posted: Software Engineer - Realtime Infrastructure @ discord (instance #1)
[2026-01-03T14:50:23.769Z] [BOT] 💾 BEFORE ARCHIVING: 550 jobs in database
[2026-01-03T14:50:23.769Z] [BOT] ✅ No jobs to archive (all 550 jobs within 7-day window)
[2026-01-03T14:50:23.774Z] [BOT] 💾 Saved posted_jobs.json: 550 active jobs
[2026-01-03T14:50:23.774Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:50:26.775Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T14:50:26.775Z] [BOT] 📍 [ROUTING] "Finance Manager" @ vercel
[2026-01-03T14:50:26.776Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T14:50:27.027Z] [BOT] ✅ Created forum post: 🏢 Finance Manager @ vercel in #📣・marketing-jobs
  ✅ Industry: Finance Manager @ vercel
[2026-01-03T14:50:28.678Z] [BOT] ✅ Created forum post: 🏢 Finance Manager @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:50:30.179Z] [BOT] 💾 Marked as posted: Finance Manager @ vercel (instance #1)
[2026-01-03T14:50:30.179Z] [BOT] 💾 BEFORE ARCHIVING: 551 jobs in database
[2026-01-03T14:50:30.179Z] [BOT] ✅ No jobs to archive (all 551 jobs within 7-day window)
[2026-01-03T14:50:30.185Z] [BOT] 💾 Saved posted_jobs.json: 551 active jobs
[2026-01-03T14:50:30.185Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:50:33.185Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T14:50:33.185Z] [BOT] 📍 [ROUTING] "Forward Deployed Engineer" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-03T14:50:33.185Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T14:50:33.375Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Engineer @ anthropic in #🤖・ai-jobs
  ✅ Industry: Forward Deployed Engineer @ anthropic
[2026-01-03T14:50:35.092Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:50:36.593Z] [BOT] 💾 Marked as posted: Forward Deployed Engineer @ anthropic (instance #1)
[2026-01-03T14:50:36.593Z] [BOT] 💾 BEFORE ARCHIVING: 552 jobs in database
[2026-01-03T14:50:36.593Z] [BOT] ✅ No jobs to archive (all 552 jobs within 7-day window)
[2026-01-03T14:50:36.599Z] [BOT] 💾 Saved posted_jobs.json: 552 active jobs
[2026-01-03T14:50:36.599Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:50:39.600Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-03T14:50:39.600Z] [BOT] 📍 [ROUTING] "Product Lead, Consumer" @ anthropic
[2026-01-03T14:50:39.600Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-03T14:50:39.986Z] [BOT] ✅ Created forum post: 🏢 Product Lead, Consumer @ anthropic in #📦・product-jobs
[2026-01-03T14:50:39.986Z] [BOT] ✅ Industry: Product Lead, Consumer @ anthropic
[2026-01-03T14:50:41.725Z] [BOT] ✅ Created forum post: 🏢 Product Lead, Consumer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:50:43.225Z] [BOT] 💾 Marked as posted: Product Lead, Consumer @ anthropic (instance #1)
[2026-01-03T14:50:43.225Z] [BOT] 💾 BEFORE ARCHIVING: 553 jobs in database
[2026-01-03T14:50:43.226Z] [BOT] ✅ No jobs to archive (all 553 jobs within 7-day window)
[2026-01-03T14:50:43.231Z] [BOT] 💾 Saved posted_jobs.json: 553 active jobs
[2026-01-03T14:50:43.231Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:50:46.231Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T14:50:46.231Z] [BOT] ⏭️  Skipping duplicate: JID_dd4e3939 (posted within 7 days)
[2026-01-03T14:50:46.231Z] [BOT] ⏭️  Skipping duplicate: JID_36106029 (posted within 7 days)
[2026-01-03T14:50:46.231Z] [BOT] ⏭️  Skipping duplicate: JID_25c91802 (posted within 7 days)
⏭️  Skipping duplicate: JID_cb60aed1 (posted within 7 days)
[2026-01-03T14:50:46.231Z] [BOT] ⏭️  Skipping duplicate: JID_9f9fd338 (posted within 7 days)
[2026-01-03T14:50:46.231Z] [BOT] ⏭️  Skipping duplicate: JID_f45a8ec3 (posted within 7 days)
[2026-01-03T14:50:46.232Z] [BOT] ⏭️  Skipping duplicate: JID_abc00999 (posted within 7 days)
[2026-01-03T14:50:46.232Z] [BOT] ⏭️  Skipping duplicate: JID_f6b2d747 (posted within 7 days)
[2026-01-03T14:50:46.232Z] [BOT] ⏭️  Skipping duplicate: JID_a5422c25 (posted within 7 days)
[2026-01-03T14:50:46.232Z] [BOT] ⏭️  Skipping duplicate: JID_e7aa0831 (posted within 7 days)
[2026-01-03T14:50:46.295Z] [BOT] ✅ Loaded pending queue: 746 total (726 pending, 20 enriched, 0 posted)
[2026-01-03T14:50:46.380Z] [BOT] ✅ Saved pending queue: 746 total (726 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T14:50:46.425Z] [BOT] 📂 Loaded 1518 existing routing entries
[2026-01-03T14:50:46.472Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1528
   Timestamp: 2026-01-03T14:50:46.466Z
[2026-01-03T14:50:46.473Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 19
[2026-01-03T14:50:46.473Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-03T14:50:46.473Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T14:50:46.473Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 9 posts
     2. #💲・sales-jobs: 3 posts
     3. #📈・JID_fb739488: 2 posts
     4. #💻・tech-jobs: 2 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-03T14:50:46.474Z] [BOT] [STATS] Channel stats saved
[2026-01-03T14:50:48.490Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2321) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*