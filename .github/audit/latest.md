# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T14:38:33.647Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T14:37:34.726Z] ========================================
[2026-01-03T14:37:34.728Z] Discord Bot Execution Log
[2026-01-03T14:37:34.728Z] Environment: GitHub Actions
[2026-01-03T14:37:34.728Z] Node Version: v20.19.6
[2026-01-03T14:37:34.728Z] ========================================
[2026-01-03T14:37:34.728Z] Environment Variables Check:
[2026-01-03T14:37:34.728Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T14:37:34.728Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T14:37:34.728Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T14:37:34.728Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T14:37:34.729Z] 
Multi-Channel Configuration:
[2026-01-03T14:37:34.729Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T14:37:34.729Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T14:37:34.729Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T14:37:34.729Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T14:37:34.729Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T14:37:34.729Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T14:37:34.729Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T14:37:34.729Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T14:37:34.729Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T14:37:34.729Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T14:37:34.729Z] 
Data Files Check:
[2026-01-03T14:37:34.731Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166129 bytes)
[2026-01-03T14:37:34.733Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 277772 bytes)
[2026-01-03T14:37:34.733Z] 
========================================
[2026-01-03T14:37:34.733Z] Starting Enhanced Discord Bot...
[2026-01-03T14:37:34.733Z] ========================================
[2026-01-03T14:37:35.247Z] [BOT] ✅ Loaded V2 database: 533 jobs
[2026-01-03T14:37:35.897Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T14:37:35.898Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T14:37:35.898Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T14:37:35.901Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T14:37:35.969Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T14:37:36.058Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T14:37:36.060Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T14:37:36.061Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T14:37:36.061Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T14:37:36.062Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T14:37:36.062Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T14:37:36.067Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-03T14:37:36.067Z] [BOT] 📍 [ROUTING] "Product Marketing Lead, Agents" @ anthropic
[2026-01-03T14:37:36.067Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:37:36.072Z] [BOT ERROR] (node:2334) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T14:37:36.258Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Lead, Agents @ anthropic in #💲・sales-jobs
[2026-01-03T14:37:36.258Z] [BOT] ✅ Industry: Product Marketing Lead, Agents @ anthropic
[2026-01-03T14:37:40.108Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Lead, Agents @ anthropic in #🌉・san-francisco
[2026-01-03T14:37:40.109Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:37:41.610Z] [BOT] 💾 Marked as posted: Product Marketing Lead, Agents @ anthropic (instance #1)
[2026-01-03T14:37:41.610Z] [BOT] 💾 BEFORE ARCHIVING: 534 jobs in database
[2026-01-03T14:37:41.611Z] [BOT] ✅ No jobs to archive (all 534 jobs within 7-day window)
[2026-01-03T14:37:41.618Z] [BOT] 💾 Saved posted_jobs.json: 534 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T14:37:41.618Z] [BOT] 📍 [ROUTING] "GSI & Consultancies, Partner Lead" @ vercel
   Category: SALES (matched: "sales")
[2026-01-03T14:37:41.619Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:37:42.170Z] [BOT] ✅ Created forum post: 🏢 GSI & Consultancies, Partner Lead @ vercel in #💲・sales-jobs
[2026-01-03T14:37:42.170Z] [BOT] ✅ Industry: GSI & Consultancies, Partner Lead @ vercel
[2026-01-03T14:37:43.859Z] [BOT] ✅ Created forum post: 🏢 GSI & Consultancies, Partner Lead @ vercel in #🌉・san-francisco
[2026-01-03T14:37:43.859Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:37:45.360Z] [BOT] 💾 Marked as posted: GSI & Consultancies, Partner Lead @ vercel (instance #1)
[2026-01-03T14:37:45.360Z] [BOT] 💾 BEFORE ARCHIVING: 535 jobs in database
[2026-01-03T14:37:45.361Z] [BOT] ✅ No jobs to archive (all 535 jobs within 7-day window)
[2026-01-03T14:37:45.366Z] [BOT] 💾 Saved posted_jobs.json: 535 active jobs
[2026-01-03T14:37:45.367Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:37:45.367Z] [BOT] 📍 [ROUTING] "Sales Enablement Manager " @ figma
[2026-01-03T14:37:45.367Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:37:45.669Z] [BOT] ✅ Created forum post: 🏢 Sales Enablement Manager  @ figma in #💲・sales-jobs
[2026-01-03T14:37:45.669Z] [BOT] ✅ Industry: Sales Enablement Manager  @ figma
[2026-01-03T14:37:47.473Z] [BOT] ✅ Created forum post: 🏢 Sales Enablement Manager  @ figma in #🌉・san-francisco
[2026-01-03T14:37:47.474Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:37:48.974Z] [BOT] 💾 Marked as posted: Sales Enablement Manager  @ figma (instance #1)
[2026-01-03T14:37:48.974Z] [BOT] 💾 BEFORE ARCHIVING: 536 jobs in database
[2026-01-03T14:37:48.975Z] [BOT] ✅ No jobs to archive (all 536 jobs within 7-day window)
[2026-01-03T14:37:48.980Z] [BOT] 💾 Saved posted_jobs.json: 536 active jobs
[2026-01-03T14:37:48.980Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:37:48.981Z] [BOT] 📍 [ROUTING] "Growth Account Executive" @ anthropic
[2026-01-03T14:37:48.981Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:37:49.205Z] [BOT] ✅ Created forum post: 🏢 Growth Account Executive @ anthropic in #💲・sales-jobs
[2026-01-03T14:37:49.206Z] [BOT] ✅ Industry: Growth Account Executive @ anthropic
[2026-01-03T14:37:51.099Z] [BOT] ✅ Created forum post: 🏢 Growth Account Executive @ anthropic in #🌉・san-francisco
[2026-01-03T14:37:51.099Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:37:52.601Z] [BOT] 💾 Marked as posted: Growth Account Executive @ anthropic (instance #1)
[2026-01-03T14:37:52.601Z] [BOT] 💾 BEFORE ARCHIVING: 537 jobs in database
[2026-01-03T14:37:52.601Z] [BOT] ✅ No jobs to archive (all 537 jobs within 7-day window)
[2026-01-03T14:37:52.606Z] [BOT] 💾 Saved posted_jobs.json: 537 active jobs
[2026-01-03T14:37:52.606Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:37:55.607Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T14:37:55.607Z] [BOT] 📍 [ROUTING] "Strategy & Operations Manager, Product Partnerships " @ anthropic
[2026-01-03T14:37:55.608Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T14:37:55.913Z] [BOT] ✅ Created forum post: 🏢 Strategy & Operations Manager, Product Partnerships  @ anthropic in #🤖・ai-jobs
[2026-01-03T14:37:55.913Z] [BOT] ✅ Industry: Strategy & Operations Manager, Product Partnerships  @ anthropic
[2026-01-03T14:37:58.057Z] [BOT] ✅ Created forum post: 🏢 Strategy & Operations Manager, Product Partnerships  @ anthropic in #🌉・san-francisco
[2026-01-03T14:37:58.057Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:37:59.558Z] [BOT] 💾 Marked as posted: Strategy & Operations Manager, Product Partnerships  @ anthropic (instance #1)
[2026-01-03T14:37:59.558Z] [BOT] 💾 BEFORE ARCHIVING: 538 jobs in database
[2026-01-03T14:37:59.559Z] [BOT] ✅ No jobs to archive (all 538 jobs within 7-day window)
[2026-01-03T14:37:59.564Z] [BOT] 💾 Saved posted_jobs.json: 538 active jobs
[2026-01-03T14:37:59.564Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:38:02.565Z] [BOT] 📌 Posting 3 jobs to #💰・finance-jobs
[2026-01-03T14:38:02.565Z] [BOT] 📍 [ROUTING] "Strategic Partner Development, Product Partnerships " @ anthropic
[2026-01-03T14:38:02.566Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T14:38:03.234Z] [BOT] ✅ Created forum post: 🏢 Strategic Partner Development, Product Partnerships  @ anthropic in #💰・finance-jobs
  ✅ Industry: Strategic Partner Development, Product Partnerships  @ anthropic
[2026-01-03T14:38:05.089Z] [BOT] ✅ Created forum post: 🏢 Strategic Partner Development, Product Partnerships  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:38:06.590Z] [BOT] 💾 Marked as posted: Strategic Partner Development, Product Partnerships  @ anthropic (instance #1)
[2026-01-03T14:38:06.590Z] [BOT] 💾 BEFORE ARCHIVING: 539 jobs in database
[2026-01-03T14:38:06.591Z] [BOT] ✅ No jobs to archive (all 539 jobs within 7-day window)
[2026-01-03T14:38:06.596Z] [BOT] 💾 Saved posted_jobs.json: 539 active jobs
[2026-01-03T14:38:06.596Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:38:06.596Z] [BOT] 📍 [ROUTING] "Technical Revenue Accountant" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-03T14:38:06.596Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T14:38:06.899Z] [BOT] ✅ Created forum post: 🏢 Technical Revenue Accountant @ anthropic in #💰・finance-jobs
  ✅ Industry: Technical Revenue Accountant @ anthropic
[2026-01-03T14:38:08.618Z] [BOT] ✅ Created forum post: 🏢 Technical Revenue Accountant @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:38:10.120Z] [BOT] 💾 Marked as posted: Technical Revenue Accountant @ anthropic (instance #1)
[2026-01-03T14:38:10.120Z] [BOT] 💾 BEFORE ARCHIVING: 540 jobs in database
[2026-01-03T14:38:10.120Z] [BOT] ✅ No jobs to archive (all 540 jobs within 7-day window)
[2026-01-03T14:38:10.126Z] [BOT] 💾 Saved posted_jobs.json: 540 active jobs
[2026-01-03T14:38:10.126Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:38:10.127Z] [BOT] 📍 [ROUTING] "Technical Accountant" @ anthropic
[2026-01-03T14:38:10.127Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T14:38:10.404Z] [BOT] ✅ Created forum post: 🏢 Technical Accountant @ anthropic in #💰・finance-jobs
[2026-01-03T14:38:10.404Z] [BOT] ✅ Industry: Technical Accountant @ anthropic
[2026-01-03T14:38:12.169Z] [BOT] ✅ Created forum post: 🏢 Technical Accountant @ anthropic in #🌉・san-francisco
[2026-01-03T14:38:12.169Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:38:13.670Z] [BOT] 💾 Marked as posted: Technical Accountant @ anthropic (instance #1)
[2026-01-03T14:38:13.671Z] [BOT] 💾 BEFORE ARCHIVING: 541 jobs in database
[2026-01-03T14:38:13.671Z] [BOT] ✅ No jobs to archive (all 541 jobs within 7-day window)
[2026-01-03T14:38:13.676Z] [BOT] 💾 Saved posted_jobs.json: 541 active jobs
[2026-01-03T14:38:13.676Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:38:16.677Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T14:38:16.677Z] [BOT] 📍 [ROUTING] "Software Engineer, CDN" @ vercel
   Category: TECH (matched: "software")
[2026-01-03T14:38:16.678Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T14:38:16.962Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, CDN @ vercel in #💻・tech-jobs
[2026-01-03T14:38:16.962Z] [BOT] ✅ Industry: Software Engineer, CDN @ vercel
[2026-01-03T14:38:18.755Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, CDN @ vercel in #🌉・san-francisco
[2026-01-03T14:38:18.756Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:38:20.256Z] [BOT] 💾 Marked as posted: Software Engineer, CDN @ vercel (instance #1)
[2026-01-03T14:38:20.256Z] [BOT] 💾 BEFORE ARCHIVING: 542 jobs in database
[2026-01-03T14:38:20.256Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2026-01-03T14:38:20.261Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
[2026-01-03T14:38:20.261Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:38:23.262Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T14:38:23.262Z] [BOT] 📍 [ROUTING] "Developer Operations Analyst" @ discord
[2026-01-03T14:38:23.263Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T14:38:23.559Z] [BOT] ✅ Created forum post: 🏢 Developer Operations Analyst @ discord in #📈・JID_fb739488
[2026-01-03T14:38:23.559Z] [BOT] ✅ Industry: Developer Operations Analyst @ discord
[2026-01-03T14:38:25.538Z] [BOT] ✅ Created forum post: 🏢 Developer Operations Analyst @ discord in #🌉・san-francisco
[2026-01-03T14:38:25.539Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:38:27.039Z] [BOT] 💾 Marked as posted: Developer Operations Analyst @ discord (instance #1)
[2026-01-03T14:38:27.039Z] [BOT] 💾 BEFORE ARCHIVING: 543 jobs in database
[2026-01-03T14:38:27.039Z] [BOT] ✅ No jobs to archive (all 543 jobs within 7-day window)
[2026-01-03T14:38:27.044Z] [BOT] 💾 Saved posted_jobs.json: 543 active jobs
[2026-01-03T14:38:27.044Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:38:30.045Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T14:38:30.046Z] [BOT] ⏭️  Skipping duplicate: JID_58c8d5e7 (posted within 7 days)
[2026-01-03T14:38:30.046Z] [BOT] ⏭️  Skipping duplicate: JID_6accfd5f (posted within 7 days)
[2026-01-03T14:38:30.046Z] [BOT] ⏭️  Skipping duplicate: JID_c90cc4ed (posted within 7 days)
[2026-01-03T14:38:30.046Z] [BOT] ⏭️  Skipping duplicate: JID_35252852 (posted within 7 days)
[2026-01-03T14:38:30.046Z] [BOT] ⏭️  Skipping duplicate: JID_7de6684a (posted within 7 days)
⏭️  Skipping duplicate: JID_e770cee7 (posted within 7 days)
[2026-01-03T14:38:30.046Z] [BOT] ⏭️  Skipping duplicate: JID_b09edb4f (posted within 7 days)
[2026-01-03T14:38:30.046Z] [BOT] ⏭️  Skipping duplicate: JID_fbb3116a (posted within 7 days)
[2026-01-03T14:38:30.046Z] [BOT] ⏭️  Skipping duplicate: JID_a093879d (posted within 7 days)
[2026-01-03T14:38:30.046Z] [BOT] ⏭️  Skipping duplicate: JID_78316e95 (posted within 7 days)
[2026-01-03T14:38:30.109Z] [BOT] ✅ Loaded pending queue: 756 total (736 pending, 20 enriched, 0 posted)
[2026-01-03T14:38:30.197Z] [BOT] ✅ Saved pending queue: 756 total (736 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T14:38:30.197Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T14:38:30.241Z] [BOT] 📂 Loaded 1508 existing routing entries
[2026-01-03T14:38:30.288Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1518
   Timestamp: 2026-01-03T14:38:30.281Z
[2026-01-03T14:38:30.288Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T14:38:30.288Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-03T14:38:30.289Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 10 posts
     2. #💲・sales-jobs: 4 posts
     3. #💰・finance-jobs: 3 posts
     4. #🤖・ai-jobs: 1 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-03T14:38:30.289Z] [BOT] [STATS] Channel stats saved
[2026-01-03T14:38:32.306Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2334) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*