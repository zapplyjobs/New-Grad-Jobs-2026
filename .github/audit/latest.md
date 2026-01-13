# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T00:11:25.614Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T00:10:26.749Z] ========================================
[2026-01-13T00:10:26.751Z] Discord Bot Execution Log
[2026-01-13T00:10:26.751Z] Environment: GitHub Actions
[2026-01-13T00:10:26.751Z] Node Version: v20.19.6
[2026-01-13T00:10:26.751Z] ========================================
[2026-01-13T00:10:26.751Z] Environment Variables Check:
[2026-01-13T00:10:26.751Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T00:10:26.752Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T00:10:26.752Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T00:10:26.752Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T00:10:26.752Z] 
Multi-Channel Configuration:
[2026-01-13T00:10:26.752Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T00:10:26.752Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T00:10:26.752Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T00:10:26.752Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T00:10:26.752Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T00:10:26.752Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T00:10:26.752Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T00:10:26.752Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T00:10:26.753Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T00:10:26.753Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T00:10:26.753Z] 
Data Files Check:
[2026-01-13T00:10:26.754Z] .github/data/new_jobs.json: ✅ Exists (10 items, 168327 bytes)
[2026-01-13T00:10:26.757Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 339751 bytes)
[2026-01-13T00:10:26.757Z] 
========================================
[2026-01-13T00:10:26.757Z] Starting Enhanced Discord Bot...
[2026-01-13T00:10:26.757Z] ========================================
[2026-01-13T00:10:27.284Z] [BOT] ✅ Loaded V2 database: 637 jobs
[2026-01-13T00:10:28.249Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T00:10:28.249Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T00:10:28.250Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T00:10:28.359Z] [BOT] ✅ Loaded pending queue: 2676 total (2656 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sales Recruiter (12-month contract) at brex
[2026-01-13T00:10:28.361Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T00:10:28.361Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T00:10:28.362Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T00:10:28.362Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-13T00:10:28.363Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Sales Recruiter (12-month contract) @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states
   - iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit: los angeles, chicago, san francisco
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-13T00:10:28.363Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T00:10:28.367Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-13T00:10:28.368Z] [BOT] 📍 [ROUTING] "Sales Recruiter (12-month contract)" @ brex
[2026-01-13T00:10:28.368Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-13T00:10:28.372Z] [BOT ERROR] (node:2506) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T00:10:28.514Z] [BOT] ✅ Created forum post: 🏢 Sales Recruiter (12-month contract) @ brex in #📁・JID_e938df7b
[2026-01-13T00:10:28.514Z] [BOT] ✅ Industry: Sales Recruiter (12-month contract) @ brex
[2026-01-13T00:10:30.162Z] [BOT] ✅ Created forum post: 🏢 Sales Recruiter (12-month contract) @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T00:10:31.664Z] [BOT] 💾 Marked as posted: Sales Recruiter (12-month contract) @ brex (instance #1)
[2026-01-13T00:10:31.664Z] [BOT] 💾 BEFORE ARCHIVING: 638 jobs in database
[2026-01-13T00:10:31.664Z] [BOT] ✅ No jobs to archive (all 638 jobs within 7-day window)
[2026-01-13T00:10:31.673Z] [BOT] 💾 Saved posted_jobs.json: 638 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T00:10:31.673Z] [BOT] 💾 Marked as posted: Sales Recruiter (12-month contract) @ brex (instance #1)
💾 BEFORE ARCHIVING: 639 jobs in database
[2026-01-13T00:10:31.674Z] [BOT] ✅ No jobs to archive (all 639 jobs within 7-day window)
[2026-01-13T00:10:31.680Z] [BOT] 💾 Saved posted_jobs.json: 639 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T00:10:31.680Z] [BOT] 💾 Marked as posted: Sales Recruiter (12-month contract) @ brex (instance #1)
💾 BEFORE ARCHIVING: 640 jobs in database
[2026-01-13T00:10:31.681Z] [BOT] ✅ No jobs to archive (all 640 jobs within 7-day window)
[2026-01-13T00:10:31.686Z] [BOT] 💾 Saved posted_jobs.json: 640 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T00:10:34.687Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-13T00:10:34.687Z] [BOT] 📍 [ROUTING] "Senior Sales Strategy Manager, New Product" @ samsara
   Category: SALES (matched: "sales")
[2026-01-13T00:10:34.687Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T00:10:35.048Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Strategy Manager, New Product @ samsara in #💲・sales-jobs
  ✅ Industry: Senior Sales Strategy Manager, New Product @ samsara
[2026-01-13T00:10:36.913Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Strategy Manager, New Product @ samsara in #🌆・chicago
[2026-01-13T00:10:36.913Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-13T00:10:38.415Z] [BOT] 💾 Marked as posted: Senior Sales Strategy Manager, New Product @ samsara (instance #1)
[2026-01-13T00:10:38.415Z] [BOT] 💾 BEFORE ARCHIVING: 641 jobs in database
[2026-01-13T00:10:38.416Z] [BOT] ✅ No jobs to archive (all 641 jobs within 7-day window)
[2026-01-13T00:10:38.421Z] [BOT] 💾 Saved posted_jobs.json: 641 active jobs
[2026-01-13T00:10:38.421Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:10:38.421Z] [BOT] 📍 [ROUTING] "Tax Director" @ brex
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T00:10:38.667Z] [BOT] ✅ Created forum post: 🏢 Tax Director @ brex in #💲・sales-jobs
  ✅ Industry: Tax Director @ brex
[2026-01-13T00:10:40.364Z] [BOT] ✅ Created forum post: 🏢 Tax Director @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T00:10:41.866Z] [BOT] 💾 Marked as posted: Tax Director @ brex (instance #1)
[2026-01-13T00:10:41.866Z] [BOT] 💾 BEFORE ARCHIVING: 642 jobs in database
[2026-01-13T00:10:41.866Z] [BOT] ✅ No jobs to archive (all 642 jobs within 7-day window)
[2026-01-13T00:10:41.872Z] [BOT] 💾 Saved posted_jobs.json: 642 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T00:10:41.872Z] [BOT] 📍 [ROUTING] "Customer Activation Manager, Large-Scale Deployments" @ anthropic
[2026-01-13T00:10:41.873Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T00:10:42.734Z] [BOT] ✅ Created forum post: 🏢 Customer Activation Manager, Large-Scale Deployments @ anthropic in #💲・sales-jobs
[2026-01-13T00:10:42.734Z] [BOT] ✅ Industry: Customer Activation Manager, Large-Scale Deployments @ anthropic
[2026-01-13T00:10:44.535Z] [BOT] ✅ Created forum post: 🏢 Customer Activation Manager, Large-Scale Deployments @ anthropic in #🌉・san-francisco
[2026-01-13T00:10:44.535Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T00:10:46.035Z] [BOT] 💾 Marked as posted: Customer Activation Manager, Large-Scale Deployments @ anthropic (instance #1)
[2026-01-13T00:10:46.035Z] [BOT] 💾 BEFORE ARCHIVING: 643 jobs in database
[2026-01-13T00:10:46.036Z] [BOT] ✅ No jobs to archive (all 643 jobs within 7-day window)
[2026-01-13T00:10:46.041Z] [BOT] 💾 Saved posted_jobs.json: 643 active jobs
[2026-01-13T00:10:46.041Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:10:46.041Z] [BOT] 📍 [ROUTING] "Director, Product Marketing " @ figma
[2026-01-13T00:10:46.042Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T00:10:46.247Z] [BOT] ✅ Created forum post: 🏢 Director, Product Marketing  @ figma in #💲・sales-jobs
  ✅ Industry: Director, Product Marketing  @ figma
[2026-01-13T00:10:47.913Z] [BOT] ✅ Created forum post: 🏢 Director, Product Marketing  @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T00:10:49.414Z] [BOT] 💾 Marked as posted: Director, Product Marketing  @ figma (instance #1)
[2026-01-13T00:10:49.415Z] [BOT] 💾 BEFORE ARCHIVING: 644 jobs in database
[2026-01-13T00:10:49.415Z] [BOT] ✅ No jobs to archive (all 644 jobs within 7-day window)
[2026-01-13T00:10:49.421Z] [BOT] 💾 Saved posted_jobs.json: 644 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T00:10:52.422Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T00:10:52.422Z] [BOT] 📍 [ROUTING] "Software Engineer, Product Frontend (2-8 YOE)" @ airtable
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-13T00:10:52.422Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T00:10:52.708Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Product Frontend (2-8 YOE) @ airtable in #📈・JID_fb739488
  ✅ Industry: Software Engineer, Product Frontend (2-8 YOE) @ airtable
[2026-01-13T00:10:54.625Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Product Frontend (2-8 YOE) @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T00:10:56.126Z] [BOT] 💾 Marked as posted: Software Engineer, Product Frontend (2-8 YOE) @ airtable (instance #1)
[2026-01-13T00:10:56.126Z] [BOT] 💾 BEFORE ARCHIVING: 645 jobs in database
[2026-01-13T00:10:56.127Z] [BOT] ✅ No jobs to archive (all 645 jobs within 7-day window)
[2026-01-13T00:10:56.133Z] [BOT] 💾 Saved posted_jobs.json: 645 active jobs
[2026-01-13T00:10:56.133Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:10:59.134Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-13T00:10:59.134Z] [BOT] 📍 [ROUTING] "Senior Software Security Engineer" @ anthropic
[2026-01-13T00:10:59.135Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T00:10:59.398Z] [BOT] ✅ Created forum post: 🏢 Senior Software Security Engineer @ anthropic in #💻・tech-jobs
  ✅ Industry: Senior Software Security Engineer @ anthropic
[2026-01-13T00:11:01.194Z] [BOT] ✅ Created forum post: 🏢 Senior Software Security Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T00:11:02.695Z] [BOT] 💾 Marked as posted: Senior Software Security Engineer @ anthropic (instance #1)
[2026-01-13T00:11:02.695Z] [BOT] 💾 BEFORE ARCHIVING: 646 jobs in database
[2026-01-13T00:11:02.696Z] [BOT] ✅ No jobs to archive (all 646 jobs within 7-day window)
[2026-01-13T00:11:02.702Z] [BOT] 💾 Saved posted_jobs.json: 646 active jobs
[2026-01-13T00:11:02.702Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:11:02.702Z] [BOT] 📍 [ROUTING] "Software Engineer, Safeguards" @ anthropic
[2026-01-13T00:11:02.702Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T00:11:02.918Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Safeguards @ anthropic in #💻・tech-jobs
[2026-01-13T00:11:02.918Z] [BOT] ✅ Industry: Software Engineer, Safeguards @ anthropic
[2026-01-13T00:11:04.833Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Safeguards @ anthropic in #🌉・san-francisco
[2026-01-13T00:11:04.833Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T00:11:06.334Z] [BOT] 💾 Marked as posted: Software Engineer, Safeguards @ anthropic (instance #1)
[2026-01-13T00:11:06.334Z] [BOT] 💾 BEFORE ARCHIVING: 647 jobs in database
[2026-01-13T00:11:06.335Z] [BOT] ✅ No jobs to archive (all 647 jobs within 7-day window)
[2026-01-13T00:11:06.341Z] [BOT] 💾 Saved posted_jobs.json: 647 active jobs
[2026-01-13T00:11:06.341Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:11:09.341Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-13T00:11:09.341Z] [BOT] 📍 [ROUTING] "Staff Product Marketing Manager, v0" @ vercel
[2026-01-13T00:11:09.341Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T00:11:09.863Z] [BOT] ✅ Created forum post: 🏢 Staff Product Marketing Manager, v0 @ vercel in #📣・marketing-jobs
[2026-01-13T00:11:09.864Z] [BOT] ✅ Industry: Staff Product Marketing Manager, v0 @ vercel
[2026-01-13T00:11:11.613Z] [BOT] ✅ Created forum post: 🏢 Staff Product Marketing Manager, v0 @ vercel in #🌉・san-francisco
[2026-01-13T00:11:11.613Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T00:11:13.113Z] [BOT] 💾 Marked as posted: Staff Product Marketing Manager, v0 @ vercel (instance #1)
[2026-01-13T00:11:13.114Z] [BOT] 💾 BEFORE ARCHIVING: 648 jobs in database
[2026-01-13T00:11:13.114Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T00:11:13.116Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T00:11:13.116Z] [BOT] ✅ Archiving complete: 1 archived, 647 active
[2026-01-13T00:11:13.121Z] [BOT] 💾 Saved posted_jobs.json: 647 active jobs
[2026-01-13T00:11:13.121Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T00:11:16.122Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-13T00:11:16.123Z] [BOT] 📍 [ROUTING] "Analytics Engineer, Product Analytics" @ airtable
[2026-01-13T00:11:16.123Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T00:11:16.411Z] [BOT] ✅ Created forum post: 🏢 Analytics Engineer, Product Analytics @ airtable in #🤖・ai-jobs
  ✅ Industry: Analytics Engineer, Product Analytics @ airtable
[2026-01-13T00:11:18.052Z] [BOT] ✅ Created forum post: 🏢 Analytics Engineer, Product Analytics @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T00:11:19.552Z] [BOT] 💾 Marked as posted: Analytics Engineer, Product Analytics @ airtable (instance #1)
[2026-01-13T00:11:19.552Z] [BOT] 💾 BEFORE ARCHIVING: 648 jobs in database
[2026-01-13T00:11:19.554Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (2 total in archive)
[2026-01-13T00:11:19.554Z] [BOT] ✅ Archiving complete: 1 archived, 647 active
[2026-01-13T00:11:19.559Z] [BOT] 💾 Saved posted_jobs.json: 647 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T00:11:22.560Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T00:11:22.560Z] [BOT] ⏭️  Skipping duplicate: JID_588f7f3b (posted within 7 days)
[2026-01-13T00:11:22.560Z] [BOT] ⏭️  Skipping duplicate: JID_b4774644 (posted within 7 days)
[2026-01-13T00:11:22.560Z] [BOT] ⏭️  Skipping duplicate: JID_7fbd3e53 (posted within 7 days)
⏭️  Skipping duplicate: JID_5a3cb3c9 (posted within 7 days)
[2026-01-13T00:11:22.560Z] [BOT] ⏭️  Skipping duplicate: JID_21719862 (posted within 7 days)
⏭️  Skipping duplicate: JID_07c0c0a5 (posted within 7 days)
[2026-01-13T00:11:22.560Z] [BOT] ⏭️  Skipping duplicate: JID_8ec96c63 (posted within 7 days)
[2026-01-13T00:11:22.560Z] [BOT] ⏭️  Skipping duplicate: JID_f6b2d747 (posted within 7 days)
[2026-01-13T00:11:22.561Z] [BOT] ⏭️  Skipping duplicate: JID_e041e641 (posted within 7 days)
[2026-01-13T00:11:22.561Z] [BOT] ⏭️  Skipping duplicate: JID_c4ad9978 (posted within 7 days)
[2026-01-13T00:11:22.693Z] [BOT] ✅ Loaded pending queue: 2676 total (2656 pending, 20 enriched, 0 posted)
[2026-01-13T00:11:22.844Z] [BOT] ✅ Saved pending queue: 2676 total (2656 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-13T00:11:22.844Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T00:11:22.895Z] [BOT] 📂 Loaded 2798 existing routing entries
[2026-01-13T00:11:22.951Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-13T00:11:22.952Z] [BOT] New entries: 10
   Total entries: 2808
   Timestamp: 2026-01-13T00:11:22.940Z
[2026-01-13T00:11:22.952Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T00:11:22.952Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-13T00:11:22.952Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
[2026-01-13T00:11:22.953Z] [BOT] 1. #🌉・san-francisco: 8 posts
     2. #💲・sales-jobs: 4 posts
     3. #💻・tech-jobs: 2 posts
     4. #📁・JID_e938df7b: 1 posts
     5. #💻・remote-usa: 1 posts
[2026-01-13T00:11:22.953Z] [BOT] [STATS] Channel stats saved
[2026-01-13T00:11:24.978Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2506) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*