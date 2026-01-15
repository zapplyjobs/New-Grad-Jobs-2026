# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T04:02:41.689Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T04:01:38.773Z] ========================================
[2026-01-15T04:01:38.775Z] Discord Bot Execution Log
[2026-01-15T04:01:38.776Z] Environment: GitHub Actions
[2026-01-15T04:01:38.776Z] Node Version: v20.19.6
[2026-01-15T04:01:38.776Z] ========================================
[2026-01-15T04:01:38.776Z] Environment Variables Check:
[2026-01-15T04:01:38.776Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T04:01:38.776Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T04:01:38.776Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T04:01:38.776Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T04:01:38.776Z] 
Multi-Channel Configuration:
[2026-01-15T04:01:38.776Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T04:01:38.777Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T04:01:38.777Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T04:01:38.777Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T04:01:38.777Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T04:01:38.777Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T04:01:38.777Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T04:01:38.777Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T04:01:38.777Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T04:01:38.777Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T04:01:38.777Z] 
Data Files Check:
[2026-01-15T04:01:38.778Z] .github/data/new_jobs.json: ✅ Exists (10 items, 118683 bytes)
[2026-01-15T04:01:38.784Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 826018 bytes)
[2026-01-15T04:01:38.784Z] 
========================================
[2026-01-15T04:01:38.784Z] Starting Enhanced Discord Bot...
[2026-01-15T04:01:38.784Z] ========================================
[2026-01-15T04:01:39.306Z] [BOT] ✅ Loaded V2 database: 1556 jobs
[2026-01-15T04:01:40.035Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T04:01:40.035Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T04:01:40.036Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T04:01:40.148Z] [BOT] ✅ Loaded pending queue: 2724 total (2704 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Fraud Specialist at vercel
[2026-01-15T04:01:40.150Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T04:01:40.150Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T04:01:40.151Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T04:01:40.151Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T04:01:40.152Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T04:01:40.156Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T04:01:40.156Z] [BOT] 📍 [ROUTING] "Fraud Specialist" @ vercel
   Category: AI (matched: "machine learning")
[2026-01-15T04:01:40.156Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T04:01:40.174Z] [BOT ERROR] (node:2613) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T04:01:40.409Z] [BOT] ✅ Created forum post: 🏢 Fraud Specialist @ vercel in #🤖・ai-jobs
  ✅ Industry: Fraud Specialist @ vercel
[2026-01-15T04:01:42.101Z] [BOT] ✅ Created forum post: 🏢 Fraud Specialist @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T04:01:43.601Z] [BOT] 💾 Marked as posted: Fraud Specialist @ vercel (instance #1)
[2026-01-15T04:01:43.601Z] [BOT] 💾 BEFORE ARCHIVING: 1557 jobs in database
[2026-01-15T04:01:43.603Z] [BOT] ✅ No jobs to archive (all 1557 jobs within 7-day window)
[2026-01-15T04:01:43.617Z] [BOT] 💾 Saved posted_jobs.json: 1557 active jobs
[2026-01-15T04:01:43.617Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T04:01:43.618Z] [BOT] 📍 [ROUTING] " IT Infrastructure Engineer " @ vercel
[2026-01-15T04:01:43.618Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T04:01:43.618Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T04:01:43.926Z] [BOT] ✅ Created forum post: 🏢  IT Infrastructure Engineer  @ vercel in #🤖・ai-jobs
[2026-01-15T04:01:43.927Z] [BOT] ✅ Industry:  IT Infrastructure Engineer  @ vercel
[2026-01-15T04:01:45.639Z] [BOT] ✅ Created forum post: 🏢  IT Infrastructure Engineer  @ vercel in #🌉・san-francisco
[2026-01-15T04:01:45.639Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T04:01:47.140Z] [BOT] 💾 Marked as posted:  IT Infrastructure Engineer  @ vercel (instance #1)
[2026-01-15T04:01:47.140Z] [BOT] 💾 BEFORE ARCHIVING: 1558 jobs in database
[2026-01-15T04:01:47.141Z] [BOT] ✅ No jobs to archive (all 1558 jobs within 7-day window)
[2026-01-15T04:01:47.150Z] [BOT] 💾 Saved posted_jobs.json: 1558 active jobs
[2026-01-15T04:01:47.150Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T04:01:47.151Z] [BOT] 📍 [ROUTING] "Product Engineer – v0" @ vercel
[2026-01-15T04:01:47.151Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T04:01:47.342Z] [BOT] ✅ Created forum post: 🏢 Product Engineer – v0 @ vercel in #🤖・ai-jobs
[2026-01-15T04:01:47.342Z] [BOT] ✅ Industry: Product Engineer – v0 @ vercel
[2026-01-15T04:01:49.086Z] [BOT] ✅ Created forum post: 🏢 Product Engineer – v0 @ vercel in #🌉・san-francisco
[2026-01-15T04:01:49.087Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T04:01:50.587Z] [BOT] 💾 Marked as posted: Product Engineer – v0 @ vercel (instance #1)
[2026-01-15T04:01:50.587Z] [BOT] 💾 BEFORE ARCHIVING: 1559 jobs in database
[2026-01-15T04:01:50.588Z] [BOT] ✅ No jobs to archive (all 1559 jobs within 7-day window)
[2026-01-15T04:01:50.600Z] [BOT] 💾 Saved posted_jobs.json: 1559 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:01:53.601Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-15T04:01:53.601Z] [BOT] 📍 [ROUTING] "Head of Product Marketing " @ vercel
   Category: SALES (matched: "sales")
[2026-01-15T04:01:53.601Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T04:01:55.208Z] [BOT] ✅ Created forum post: 🏢 Head of Product Marketing  @ vercel in #💲・sales-jobs
[2026-01-15T04:01:55.208Z] [BOT] ✅ Industry: Head of Product Marketing  @ vercel
[2026-01-15T04:01:56.951Z] [BOT] ✅ Created forum post: 🏢 Head of Product Marketing  @ vercel in #🌉・san-francisco
[2026-01-15T04:01:56.951Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T04:01:58.453Z] [BOT] 💾 Marked as posted: Head of Product Marketing  @ vercel (instance #1)
[2026-01-15T04:01:58.453Z] [BOT] 💾 BEFORE ARCHIVING: 1560 jobs in database
[2026-01-15T04:01:58.454Z] [BOT] ✅ No jobs to archive (all 1560 jobs within 7-day window)
[2026-01-15T04:01:58.466Z] [BOT] 💾 Saved posted_jobs.json: 1560 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:01:58.466Z] [BOT] 📍 [ROUTING] "Manager, Sales Development, v0" @ vercel
[2026-01-15T04:01:58.466Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T04:01:58.664Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Development, v0 @ vercel in #💲・sales-jobs
  ✅ Industry: Manager, Sales Development, v0 @ vercel
[2026-01-15T04:02:00.401Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Development, v0 @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T04:02:01.901Z] [BOT] 💾 Marked as posted: Manager, Sales Development, v0 @ vercel (instance #1)
[2026-01-15T04:02:01.902Z] [BOT] 💾 BEFORE ARCHIVING: 1561 jobs in database
[2026-01-15T04:02:01.903Z] [BOT] ✅ No jobs to archive (all 1561 jobs within 7-day window)
[2026-01-15T04:02:01.914Z] [BOT] 💾 Saved posted_jobs.json: 1561 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:02:04.915Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-15T04:02:04.915Z] [BOT] 📍 [ROUTING] "Platform Abuse Operations Lead, Trust & Safety" @ vercel
   Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-15T04:02:05.339Z] [BOT] ✅ Created forum post: 🏢 Platform Abuse Operations Lead, Trust & Safety @ vercel in #🩺・healthcare-jobs
  ✅ Industry: Platform Abuse Operations Lead, Trust & Safety @ vercel
[2026-01-15T04:02:07.149Z] [BOT] ✅ Created forum post: 🏢 Platform Abuse Operations Lead, Trust & Safety @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T04:02:08.649Z] [BOT] 💾 Marked as posted: Platform Abuse Operations Lead, Trust & Safety @ vercel (instance #1)
[2026-01-15T04:02:08.649Z] [BOT] 💾 BEFORE ARCHIVING: 1562 jobs in database
[2026-01-15T04:02:08.650Z] [BOT] ✅ No jobs to archive (all 1562 jobs within 7-day window)
[2026-01-15T04:02:08.661Z] [BOT] 💾 Saved posted_jobs.json: 1562 active jobs
[2026-01-15T04:02:08.661Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T04:02:11.662Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-15T04:02:11.662Z] [BOT] 📍 [ROUTING] "Product Manager - Accounts" @ vercel
[2026-01-15T04:02:11.662Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-15T04:02:11.982Z] [BOT] ✅ Created forum post: 🏢 Product Manager - Accounts @ vercel in #📦・product-jobs
  ✅ Industry: Product Manager - Accounts @ vercel
[2026-01-15T04:02:13.688Z] [BOT] ✅ Created forum post: 🏢 Product Manager - Accounts @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T04:02:15.190Z] [BOT] 💾 Marked as posted: Product Manager - Accounts @ vercel (instance #1)
[2026-01-15T04:02:15.190Z] [BOT] 💾 BEFORE ARCHIVING: 1563 jobs in database
[2026-01-15T04:02:15.191Z] [BOT] ✅ No jobs to archive (all 1563 jobs within 7-day window)
[2026-01-15T04:02:15.204Z] [BOT] 💾 Saved posted_jobs.json: 1563 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:02:18.206Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-15T04:02:18.206Z] [BOT] 📍 [ROUTING] "Senior Manager, People Systems" @ vercel
[2026-01-15T04:02:18.206Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-15T04:02:18.578Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, People Systems @ vercel in #💰・finance-jobs
[2026-01-15T04:02:18.578Z] [BOT] ✅ Industry: Senior Manager, People Systems @ vercel
[2026-01-15T04:02:20.302Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, People Systems @ vercel in #🌉・san-francisco
[2026-01-15T04:02:20.302Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T04:02:21.803Z] [BOT] 💾 Marked as posted: Senior Manager, People Systems @ vercel (instance #1)
[2026-01-15T04:02:21.803Z] [BOT] 💾 BEFORE ARCHIVING: 1564 jobs in database
[2026-01-15T04:02:21.805Z] [BOT] ✅ No jobs to archive (all 1564 jobs within 7-day window)
[2026-01-15T04:02:21.817Z] [BOT] 💾 Saved posted_jobs.json: 1564 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:02:24.816Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-15T04:02:24.817Z] [BOT] 📍 [ROUTING] "Senior Partner Marketing Manager" @ vercel
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-15T04:02:25.261Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Marketing Manager @ vercel in #📣・marketing-jobs
  ✅ Industry: Senior Partner Marketing Manager @ vercel
[2026-01-15T04:02:27.188Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Marketing Manager @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T04:02:28.690Z] [BOT] 💾 Marked as posted: Senior Partner Marketing Manager @ vercel (instance #1)
[2026-01-15T04:02:28.690Z] [BOT] 💾 BEFORE ARCHIVING: 1565 jobs in database
[2026-01-15T04:02:28.691Z] [BOT] ✅ No jobs to archive (all 1565 jobs within 7-day window)
[2026-01-15T04:02:28.703Z] [BOT] 💾 Saved posted_jobs.json: 1565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:02:31.704Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-15T04:02:31.705Z] [BOT] 📍 [ROUTING] "Software Engineer, AI SDK" @ vercel
[2026-01-15T04:02:31.705Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T04:02:31.951Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, AI SDK @ vercel in #💻・tech-jobs
  ✅ Industry: Software Engineer, AI SDK @ vercel
[2026-01-15T04:02:33.680Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, AI SDK @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T04:02:35.180Z] [BOT] 💾 Marked as posted: Software Engineer, AI SDK @ vercel (instance #1)
[2026-01-15T04:02:35.180Z] [BOT] 💾 BEFORE ARCHIVING: 1566 jobs in database
[2026-01-15T04:02:35.181Z] [BOT] ✅ No jobs to archive (all 1566 jobs within 7-day window)
[2026-01-15T04:02:35.193Z] [BOT] 💾 Saved posted_jobs.json: 1566 active jobs
[2026-01-15T04:02:35.193Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T04:02:38.194Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T04:02:38.195Z] [BOT] ⏭️  Skipping duplicate: JID_30d38ce0 (posted within 7 days)
[2026-01-15T04:02:38.195Z] [BOT] ⏭️  Skipping duplicate: JID_e4a172cc (posted within 7 days)
⏭️  Skipping duplicate: JID_bc9cd7c4 (posted within 7 days)
⏭️  Skipping duplicate: JID_2af45c41 (posted within 7 days)
⏭️  Skipping duplicate: JID_a4080f57 (posted within 7 days)
⏭️  Skipping duplicate: JID_fe97901d (posted within 7 days)
⏭️  Skipping duplicate: JID_489c26a2 (posted within 7 days)
[2026-01-15T04:02:38.196Z] [BOT] ⏭️  Skipping duplicate: JID_d2efcfd9 (posted within 7 days)
[2026-01-15T04:02:38.196Z] [BOT] ⏭️  Skipping duplicate: JID_9e661190 (posted within 7 days)
[2026-01-15T04:02:38.196Z] [BOT] ⏭️  Skipping duplicate: JID_acc905ae (posted within 7 days)
[2026-01-15T04:02:38.316Z] [BOT] ✅ Loaded pending queue: 2724 total (2704 pending, 20 enriched, 0 posted)
[2026-01-15T04:02:38.478Z] [BOT] ✅ Saved pending queue: 2724 total (2704 pending, 10 enriched, 10 posted)
[2026-01-15T04:02:38.478Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T04:02:38.533Z] [BOT] 📂 Loaded 3735 existing routing entries
[2026-01-15T04:02:38.599Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T04:02:38.599Z] [BOT] Total entries: 3745
   Timestamp: 2026-01-15T04:02:38.582Z
[2026-01-15T04:02:38.600Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T04:02:38.600Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
[2026-01-15T04:02:38.600Z] [BOT] Channels used: 8
   Top channels:
     1. #🌉・san-francisco: 10 posts
     2. #🤖・ai-jobs: 3 posts
     3. #💲・sales-jobs: 2 posts
[2026-01-15T04:02:38.601Z] [BOT] 4. #🩺・healthcare-jobs: 1 posts
     5. #📦・product-jobs: 1 posts
[2026-01-15T04:02:38.601Z] [BOT] [STATS] Channel stats saved
[2026-01-15T04:02:40.625Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2613) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*