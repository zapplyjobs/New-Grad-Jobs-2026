# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T22:55:41.788Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T22:54:45.633Z] ========================================
[2026-01-14T22:54:45.634Z] Discord Bot Execution Log
[2026-01-14T22:54:45.635Z] Environment: GitHub Actions
[2026-01-14T22:54:45.635Z] Node Version: v20.19.6
[2026-01-14T22:54:45.635Z] ========================================
[2026-01-14T22:54:45.635Z] Environment Variables Check:
[2026-01-14T22:54:45.635Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T22:54:45.635Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T22:54:45.635Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T22:54:45.635Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T22:54:45.635Z] 
Multi-Channel Configuration:
[2026-01-14T22:54:45.635Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T22:54:45.635Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T22:54:45.635Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T22:54:45.636Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T22:54:45.636Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T22:54:45.636Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T22:54:45.636Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T22:54:45.636Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T22:54:45.636Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T22:54:45.636Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T22:54:45.636Z] 
Data Files Check:
[2026-01-14T22:54:45.637Z] .github/data/new_jobs.json: ✅ Exists (10 items, 106693 bytes)
[2026-01-14T22:54:45.643Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 792299 bytes)
[2026-01-14T22:54:45.643Z] 
========================================
[2026-01-14T22:54:45.643Z] Starting Enhanced Discord Bot...
[2026-01-14T22:54:45.643Z] ========================================
[2026-01-14T22:54:46.164Z] [BOT] ✅ Loaded V2 database: 1486 jobs
[2026-01-14T22:54:46.804Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T22:54:46.805Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T22:54:46.805Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T22:54:46.917Z] [BOT] ✅ Loaded pending queue: 2729 total (2709 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Commercial Account Executive, Greenfield  at vercel
[2026-01-14T22:54:46.919Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T22:54:46.919Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T22:54:46.920Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T22:54:46.920Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T22:54:46.921Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T22:54:46.925Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-14T22:54:46.925Z] [BOT] 📍 [ROUTING] "Commercial Account Executive, Greenfield " @ vercel
[2026-01-14T22:54:46.925Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T22:54:46.942Z] [BOT ERROR] (node:2374) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T22:54:47.298Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive, Greenfield  @ vercel in #💲・sales-jobs
[2026-01-14T22:54:47.298Z] [BOT] ✅ Industry: Commercial Account Executive, Greenfield  @ vercel
[2026-01-14T22:54:49.175Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive, Greenfield  @ vercel in #🌉・san-francisco
[2026-01-14T22:54:49.176Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T22:54:50.676Z] [BOT] 💾 Marked as posted: Commercial Account Executive, Greenfield  @ vercel (instance #1)
[2026-01-14T22:54:50.677Z] [BOT] 💾 BEFORE ARCHIVING: 1487 jobs in database
[2026-01-14T22:54:50.678Z] [BOT] ✅ No jobs to archive (all 1487 jobs within 7-day window)
[2026-01-14T22:54:50.689Z] [BOT] 💾 Saved posted_jobs.json: 1487 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:54:50.689Z] [BOT] 📍 [ROUTING] "Director of Sales Engineering, AMER" @ vercel
[2026-01-14T22:54:50.689Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T22:54:50.933Z] [BOT] ✅ Created forum post: 🏢 Director of Sales Engineering, AMER @ vercel in #💲・sales-jobs
[2026-01-14T22:54:50.933Z] [BOT] ✅ Industry: Director of Sales Engineering, AMER @ vercel
[2026-01-14T22:54:52.806Z] [BOT] ✅ Created forum post: 🏢 Director of Sales Engineering, AMER @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T22:54:54.305Z] [BOT] 💾 Marked as posted: Director of Sales Engineering, AMER @ vercel (instance #1)
💾 BEFORE ARCHIVING: 1488 jobs in database
[2026-01-14T22:54:54.307Z] [BOT] ✅ No jobs to archive (all 1488 jobs within 7-day window)
[2026-01-14T22:54:54.316Z] [BOT] 💾 Saved posted_jobs.json: 1488 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:54:54.317Z] [BOT] 📍 [ROUTING] "Corporate Development & Strategy, M&A Integration" @ figma
   Category: SALES (matched: "sales")
[2026-01-14T22:54:54.317Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T22:54:54.563Z] [BOT] ✅ Created forum post: 🏢 Corporate Development & Strategy, M&A Integration @ figma in #💲・sales-jobs
  ✅ Industry: Corporate Development & Strategy, M&A Integration @ figma
[2026-01-14T22:54:57.741Z] [BOT] ✅ Created forum post: 🏢 Corporate Development & Strategy, M&A Integration @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T22:54:59.241Z] [BOT] 💾 Marked as posted: Corporate Development & Strategy, M&A Integration @ figma (instance #1)
[2026-01-14T22:54:59.242Z] [BOT] 💾 BEFORE ARCHIVING: 1489 jobs in database
[2026-01-14T22:54:59.243Z] [BOT] ✅ No jobs to archive (all 1489 jobs within 7-day window)
[2026-01-14T22:54:59.255Z] [BOT] 💾 Saved posted_jobs.json: 1489 active jobs
[2026-01-14T22:54:59.255Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:55:02.254Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-14T22:55:02.256Z] [BOT] 📍 [ROUTING] "Global Head of Sales Operations & Strategy" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T22:55:02.256Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-14T22:55:02.553Z] [BOT] ✅ Created forum post: 🏢 Global Head of Sales Operations & Strategy @ spotify in #🤖・ai-jobs
  ✅ Industry: Global Head of Sales Operations & Strategy @ spotify
[2026-01-14T22:55:04.333Z] [BOT] ✅ Created forum post: 🏢 Global Head of Sales Operations & Strategy @ spotify in #🗽・new-york
[2026-01-14T22:55:04.333Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T22:55:05.835Z] [BOT] 💾 Marked as posted: Global Head of Sales Operations & Strategy @ spotify (instance #1)
[2026-01-14T22:55:05.835Z] [BOT] 💾 BEFORE ARCHIVING: 1490 jobs in database
[2026-01-14T22:55:05.836Z] [BOT] ✅ No jobs to archive (all 1490 jobs within 7-day window)
[2026-01-14T22:55:05.848Z] [BOT] 💾 Saved posted_jobs.json: 1490 active jobs
[2026-01-14T22:55:05.848Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:55:05.848Z] [BOT] 📍 [ROUTING] "Manager, SEO" @ figma
[2026-01-14T22:55:05.848Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-14T22:55:06.189Z] [BOT] ✅ Created forum post: 🏢 Manager, SEO @ figma in #🤖・ai-jobs
  ✅ Industry: Manager, SEO @ figma
[2026-01-14T22:55:07.951Z] [BOT] ✅ Created forum post: 🏢 Manager, SEO @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T22:55:09.451Z] [BOT] 💾 Marked as posted: Manager, SEO @ figma (instance #1)
[2026-01-14T22:55:09.451Z] [BOT] 💾 BEFORE ARCHIVING: 1491 jobs in database
[2026-01-14T22:55:09.452Z] [BOT] ✅ No jobs to archive (all 1491 jobs within 7-day window)
[2026-01-14T22:55:09.463Z] [BOT] 💾 Saved posted_jobs.json: 1491 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:55:12.463Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T22:55:12.463Z] [BOT] 📍 [ROUTING] "Staff Data Engineer, Ads" @ discord
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-14T22:55:12.464Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T22:55:12.735Z] [BOT] ✅ Created forum post: 🏢 Staff Data Engineer, Ads @ discord in #📈・JID_fb739488
  ✅ Industry: Staff Data Engineer, Ads @ discord
[2026-01-14T22:55:14.590Z] [BOT] ✅ Created forum post: 🏢 Staff Data Engineer, Ads @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T22:55:16.091Z] [BOT] 💾 Marked as posted: Staff Data Engineer, Ads @ discord (instance #1)
[2026-01-14T22:55:16.091Z] [BOT] 💾 BEFORE ARCHIVING: 1492 jobs in database
[2026-01-14T22:55:16.092Z] [BOT] ✅ No jobs to archive (all 1492 jobs within 7-day window)
[2026-01-14T22:55:16.103Z] [BOT] 💾 Saved posted_jobs.json: 1492 active jobs
[2026-01-14T22:55:16.103Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:55:19.104Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-14T22:55:19.104Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer" @ ORG_0728f366 Panalytical
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:55:19.444Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer @ ORG_0728f366 Panalytical in #💻・tech-jobs
[2026-01-14T22:55:19.444Z] [BOT] ✅ Industry: Graduate Software Engineer @ ORG_0728f366 Panalytical
[2026-01-14T22:55:21.332Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer @ ORG_0728f366 Panalytical in #🚌・boston
[2026-01-14T22:55:21.332Z] [BOT] ✅ Location: 🚌・boston
[2026-01-14T22:55:22.832Z] [BOT] 💾 Marked as posted: Graduate Software Engineer @ ORG_0728f366 Panalytical (instance #1)
[2026-01-14T22:55:22.832Z] [BOT] 💾 BEFORE ARCHIVING: 1493 jobs in database
[2026-01-14T22:55:22.833Z] [BOT] ✅ No jobs to archive (all 1493 jobs within 7-day window)
[2026-01-14T22:55:22.845Z] [BOT] 💾 Saved posted_jobs.json: 1493 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:55:22.845Z] [BOT] 📍 [ROUTING] "Entry-Level Software Engineer" @ ORG_20eac5aa Dynamics Laboratory
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:55:23.146Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer @ ORG_20eac5aa Dynamics Laboratory in #💻・tech-jobs
[2026-01-14T22:55:23.146Z] [BOT] ✅ Industry: Entry-Level Software Engineer @ ORG_20eac5aa Dynamics Laboratory
[2026-01-14T22:55:24.897Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer @ ORG_20eac5aa Dynamics Laboratory in #💻・remote-usa
[2026-01-14T22:55:24.897Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T22:55:26.399Z] [BOT] 💾 Marked as posted: Entry-Level Software Engineer @ ORG_20eac5aa Dynamics Laboratory (instance #1)
[2026-01-14T22:55:26.399Z] [BOT] 💾 BEFORE ARCHIVING: 1494 jobs in database
[2026-01-14T22:55:26.400Z] [BOT] ✅ No jobs to archive (all 1494 jobs within 7-day window)
[2026-01-14T22:55:26.411Z] [BOT] 💾 Saved posted_jobs.json: 1494 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:55:26.411Z] [BOT] 📍 [ROUTING] "Business Systems Architect, AI" @ figma
[2026-01-14T22:55:26.411Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:55:26.968Z] [BOT] ✅ Created forum post: 🏢 Business Systems Architect, AI @ figma in #💻・tech-jobs
  ✅ Industry: Business Systems Architect, AI @ figma
[2026-01-14T22:55:28.764Z] [BOT] ✅ Created forum post: 🏢 Business Systems Architect, AI @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T22:55:30.265Z] [BOT] 💾 Marked as posted: Business Systems Architect, AI @ figma (instance #1)
[2026-01-14T22:55:30.265Z] [BOT] 💾 BEFORE ARCHIVING: 1495 jobs in database
[2026-01-14T22:55:30.266Z] [BOT] ✅ No jobs to archive (all 1495 jobs within 7-day window)
[2026-01-14T22:55:30.276Z] [BOT] 💾 Saved posted_jobs.json: 1495 active jobs
[2026-01-14T22:55:30.276Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:55:33.276Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-14T22:55:33.277Z] [BOT] 📍 [ROUTING] "Product Manager, Billing" @ clerk
   Category: PRODUCT (matched: "product")
[2026-01-14T22:55:33.277Z] [BOT] Channel: 📦・product-jobs (1391...8889)
[2026-01-14T22:55:33.580Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Billing @ clerk in #📦・product-jobs
  ✅ Industry: Product Manager, Billing @ clerk
[2026-01-14T22:55:35.082Z] [BOT] 💾 Marked as posted: Product Manager, Billing @ clerk (instance #1)
[2026-01-14T22:55:35.082Z] [BOT] 💾 BEFORE ARCHIVING: 1496 jobs in database
[2026-01-14T22:55:35.083Z] [BOT] ✅ No jobs to archive (all 1496 jobs within 7-day window)
[2026-01-14T22:55:35.093Z] [BOT] 💾 Saved posted_jobs.json: 1496 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:55:38.093Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T22:55:38.093Z] [BOT] ⏭️  Skipping duplicate: JID_a323b072 (posted within 7 days)
[2026-01-14T22:55:38.094Z] [BOT] ⏭️  Skipping duplicate: JID_06424e64 (posted within 7 days)
[2026-01-14T22:55:38.094Z] [BOT] ⏭️  Skipping duplicate: JID_34f5f73e (posted within 7 days)
[2026-01-14T22:55:38.094Z] [BOT] ⏭️  Skipping duplicate: JID_620b2058 (posted within 7 days)
[2026-01-14T22:55:38.094Z] [BOT] ⏭️  Skipping duplicate: JID_3fd56fb0-malvern_panalytical_careers-JID_686911c2-engineer_16693 (posted within 7 days)
[2026-01-14T22:55:38.094Z] [BOT] ⏭️  Skipping duplicate: JID_02c8e9ca (posted within 7 days)
[2026-01-14T22:55:38.094Z] [BOT] ⏭️  Skipping duplicate: JID_2f3100fc (posted within 7 days)
⏭️  Skipping duplicate: JID_13c7c220 (posted within 7 days)
[2026-01-14T22:55:38.094Z] [BOT] ⏭️  Skipping duplicate: JID_976601b2 (posted within 7 days)
⏭️  Skipping duplicate: JID_509fb2e3 (posted within 7 days)
[2026-01-14T22:55:38.225Z] [BOT] ✅ Loaded pending queue: 2729 total (2709 pending, 20 enriched, 0 posted)
[2026-01-14T22:55:38.377Z] [BOT] ✅ Saved pending queue: 2729 total (2709 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-14T22:55:38.378Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-14T22:55:38.431Z] [BOT] 📂 Loaded 3625 existing routing entries
[2026-01-14T22:55:38.491Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-14T22:55:38.491Z] [BOT] Total entries: 3635
   Timestamp: 2026-01-14T22:55:38.476Z
[2026-01-14T22:55:38.492Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 19
   Successful: 19
[2026-01-14T22:55:38.492Z] [BOT] Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 9
   Top channels:
[2026-01-14T22:55:38.492Z] [BOT] 1. #🌉・san-francisco: 6 posts
     2. #💲・sales-jobs: 3 posts
     3. #💻・tech-jobs: 3 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🗽・new-york: 1 posts
[2026-01-14T22:55:38.493Z] [BOT] [STATS] Channel stats saved
[2026-01-14T22:55:40.516Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2374) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*