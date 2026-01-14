# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T22:08:56.992Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T22:07:56.279Z] ========================================
[2026-01-14T22:07:56.281Z] Discord Bot Execution Log
[2026-01-14T22:07:56.281Z] Environment: GitHub Actions
[2026-01-14T22:07:56.281Z] Node Version: v20.19.6
[2026-01-14T22:07:56.281Z] ========================================
[2026-01-14T22:07:56.281Z] Environment Variables Check:
[2026-01-14T22:07:56.281Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T22:07:56.281Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T22:07:56.281Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T22:07:56.281Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T22:07:56.281Z] 
Multi-Channel Configuration:
[2026-01-14T22:07:56.282Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T22:07:56.282Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T22:07:56.282Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T22:07:56.282Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T22:07:56.282Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T22:07:56.282Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T22:07:56.282Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T22:07:56.282Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T22:07:56.282Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T22:07:56.282Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T22:07:56.282Z] 
Data Files Check:
[2026-01-14T22:07:56.283Z] .github/data/new_jobs.json: ✅ Exists (10 items, 110652 bytes)
[2026-01-14T22:07:56.289Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 775695 bytes)
[2026-01-14T22:07:56.289Z] 
========================================
[2026-01-14T22:07:56.289Z] Starting Enhanced Discord Bot...
[2026-01-14T22:07:56.289Z] ========================================
[2026-01-14T22:07:56.804Z] [BOT] ✅ Loaded V2 database: 1456 jobs
[2026-01-14T22:07:57.441Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T22:07:57.442Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T22:07:57.442Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T22:07:57.555Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Product Designer - Design, Dev, & AI Tools at figma
[2026-01-14T22:07:57.557Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T22:07:57.557Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T22:07:57.557Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T22:07:57.558Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-14T22:07:57.558Z] [BOT] (2 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T22:07:57.563Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-14T22:07:57.564Z] [BOT] 📍 [ROUTING] "Product Designer - Design, Dev, & AI Tools" @ figma
   Category: TECH (matched: "machine learning")
[2026-01-14T22:07:57.564Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:07:57.581Z] [BOT ERROR] (node:3083) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T22:07:57.948Z] [BOT] ✅ Created forum post: 🏢 Product Designer - Design, Dev, & AI Tools @ figma in #💻・tech-jobs
  ✅ Industry: Product Designer - Design, Dev, & AI Tools @ figma
[2026-01-14T22:07:59.644Z] [BOT] ✅ Created forum post: 🏢 Product Designer - Design, Dev, & AI Tools @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T22:08:01.144Z] [BOT] 💾 Marked as posted: Product Designer - Design, Dev, & AI Tools @ figma (instance #1)
[2026-01-14T22:08:01.145Z] [BOT] 💾 BEFORE ARCHIVING: 1457 jobs in database
[2026-01-14T22:08:01.146Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T22:08:01.151Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
✅ Archiving complete: 2 archived, 1455 active
[2026-01-14T22:08:01.161Z] [BOT] 💾 Saved posted_jobs.json: 1455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:08:01.161Z] [BOT] 💾 Marked as posted: Product Designer  @ figma (instance #1)
[2026-01-14T22:08:01.162Z] [BOT] 💾 BEFORE ARCHIVING: 1456 jobs in database
[2026-01-14T22:08:01.163Z] [BOT] ✅ No jobs to archive (all 1456 jobs within 7-day window)
[2026-01-14T22:08:01.175Z] [BOT] 💾 Saved posted_jobs.json: 1456 active jobs
[2026-01-14T22:08:01.175Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:08:01.175Z] [BOT] 📍 [ROUTING] "Systems Software Engineer" @ ORG_f223faa9
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:08:01.425Z] [BOT] ✅ Created forum post: 🍎 Systems Software Engineer @ ORG_f223faa9 in #💻・tech-jobs
[2026-01-14T22:08:01.426Z] [BOT] ✅ Industry: Systems Software Engineer @ ORG_f223faa9
[2026-01-14T22:08:03.416Z] [BOT] ✅ Created forum post: 🍎 Systems Software Engineer @ ORG_f223faa9 in #🦢・los-angeles
[2026-01-14T22:08:03.416Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-14T22:08:04.917Z] [BOT] 💾 Marked as posted: Systems Software Engineer @ ORG_f223faa9 (instance #1)
[2026-01-14T22:08:04.917Z] [BOT] 💾 BEFORE ARCHIVING: 1457 jobs in database
[2026-01-14T22:08:04.918Z] [BOT] ✅ No jobs to archive (all 1457 jobs within 7-day window)
[2026-01-14T22:08:04.927Z] [BOT] 💾 Saved posted_jobs.json: 1457 active jobs
[2026-01-14T22:08:04.927Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:08:04.927Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_877b2190
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:08:05.199Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_877b2190 in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_877b2190
[2026-01-14T22:08:07.196Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_877b2190 in #🤠・austin
[2026-01-14T22:08:07.197Z] [BOT] ✅ Location: 🤠・austin
[2026-01-14T22:08:08.697Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_877b2190 (instance #1)
[2026-01-14T22:08:08.697Z] [BOT] 💾 BEFORE ARCHIVING: 1458 jobs in database
[2026-01-14T22:08:08.698Z] [BOT] ✅ No jobs to archive (all 1458 jobs within 7-day window)
[2026-01-14T22:08:08.709Z] [BOT] 💾 Saved posted_jobs.json: 1458 active jobs
[2026-01-14T22:08:08.709Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:08:08.709Z] [BOT] 📍 [ROUTING] "Software Engineer (Web Performance), v0" @ vercel
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:08:08.930Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (Web Performance), v0 @ vercel in #💻・tech-jobs
  ✅ Industry: Software Engineer (Web Performance), v0 @ vercel
[2026-01-14T22:08:10.740Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (Web Performance), v0 @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T22:08:12.242Z] [BOT] 💾 Marked as posted: Software Engineer (Web Performance), v0 @ vercel (instance #1)
[2026-01-14T22:08:12.242Z] [BOT] 💾 BEFORE ARCHIVING: 1459 jobs in database
[2026-01-14T22:08:12.243Z] [BOT] ✅ No jobs to archive (all 1459 jobs within 7-day window)
[2026-01-14T22:08:12.253Z] [BOT] 💾 Saved posted_jobs.json: 1459 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:08:15.253Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-14T22:08:15.254Z] [BOT] 📍 [ROUTING] "Product Designer, Growth & Monetization" @ figma
   Category: SALES (matched: "sales")
[2026-01-14T22:08:15.254Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T22:08:15.557Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Growth & Monetization @ figma in #💲・sales-jobs
  ✅ Industry: Product Designer, Growth & Monetization @ figma
[2026-01-14T22:08:17.633Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Growth & Monetization @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T22:08:19.134Z] [BOT] 💾 Marked as posted: Product Designer, Growth & Monetization @ figma (instance #1)
[2026-01-14T22:08:19.134Z] [BOT] 💾 BEFORE ARCHIVING: 1460 jobs in database
[2026-01-14T22:08:19.135Z] [BOT] ✅ No jobs to archive (all 1460 jobs within 7-day window)
[2026-01-14T22:08:19.146Z] [BOT] 💾 Saved posted_jobs.json: 1460 active jobs
[2026-01-14T22:08:19.146Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:08:19.146Z] [BOT] 📍 [ROUTING] "Solutions Consultant" @ figma
[2026-01-14T22:08:19.146Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T22:08:19.536Z] [BOT] ✅ Created forum post: 🏢 Solutions Consultant @ figma in #💲・sales-jobs
[2026-01-14T22:08:19.536Z] [BOT] ✅ Industry: Solutions Consultant @ figma
[2026-01-14T22:08:21.656Z] [BOT] ✅ Created forum post: 🏢 Solutions Consultant @ figma in #🌉・san-francisco
[2026-01-14T22:08:21.656Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T22:08:23.156Z] [BOT] 💾 Marked as posted: Solutions Consultant @ figma (instance #1)
[2026-01-14T22:08:23.156Z] [BOT] 💾 BEFORE ARCHIVING: 1461 jobs in database
[2026-01-14T22:08:23.157Z] [BOT] ✅ No jobs to archive (all 1461 jobs within 7-day window)
[2026-01-14T22:08:23.168Z] [BOT] 💾 Saved posted_jobs.json: 1461 active jobs
[2026-01-14T22:08:23.168Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:08:26.169Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-14T22:08:26.169Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_0aa5052d State University (LSU)
[2026-01-14T22:08:26.169Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-14T22:08:26.444Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💰・finance-jobs
  ✅ Industry: Postdoctoral Researcher @ ORG_0aa5052d State University (LSU)
[2026-01-14T22:08:28.404Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T22:08:29.905Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) (instance #1)
[2026-01-14T22:08:29.905Z] [BOT] 💾 BEFORE ARCHIVING: 1462 jobs in database
[2026-01-14T22:08:29.906Z] [BOT] ✅ No jobs to archive (all 1462 jobs within 7-day window)
[2026-01-14T22:08:29.917Z] [BOT] 💾 Saved posted_jobs.json: 1462 active jobs
[2026-01-14T22:08:29.917Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:08:29.917Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) (instance #1)
💾 BEFORE ARCHIVING: 1463 jobs in database
[2026-01-14T22:08:29.919Z] [BOT] ✅ No jobs to archive (all 1463 jobs within 7-day window)
[2026-01-14T22:08:29.928Z] [BOT] 💾 Saved posted_jobs.json: 1463 active jobs
[2026-01-14T22:08:29.928Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:08:32.929Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T22:08:32.929Z] [BOT] 📍 [ROUTING] "Technical Program Manager, AI Platform" @ figma
[2026-01-14T22:08:32.929Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch, nonTechMatch (using data-science)
[2026-01-14T22:08:33.440Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, AI Platform @ figma in #📈・JID_fb739488
[2026-01-14T22:08:33.440Z] [BOT] ✅ Industry: Technical Program Manager, AI Platform @ figma
[2026-01-14T22:08:35.191Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, AI Platform @ figma in #🌉・san-francisco
[2026-01-14T22:08:35.191Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T22:08:36.692Z] [BOT] 💾 Marked as posted: Technical Program Manager, AI Platform @ figma (instance #1)
[2026-01-14T22:08:36.692Z] [BOT] 💾 BEFORE ARCHIVING: 1464 jobs in database
[2026-01-14T22:08:36.693Z] [BOT] ✅ No jobs to archive (all 1464 jobs within 7-day window)
[2026-01-14T22:08:36.705Z] [BOT] 💾 Saved posted_jobs.json: 1464 active jobs
[2026-01-14T22:08:36.705Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:08:39.705Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-14T22:08:39.706Z] [BOT] 📍 [ROUTING] "Graduate University Engineer - Machine Learning Engineer" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T22:08:39.706Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T22:08:40.525Z] [BOT] ✅ Created forum post: 🎨 Graduate University Engineer - Machine Learning Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: Graduate University Engineer - Machine Learning Engineer @ ORG_72fd3ae0
[2026-01-14T22:08:42.223Z] [BOT] ✅ Created forum post: 🎨 Graduate University Engineer - Machine Learning Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T22:08:43.724Z] [BOT] 💾 Marked as posted: Graduate University Engineer - Machine Learning Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-14T22:08:43.724Z] [BOT] 💾 BEFORE ARCHIVING: 1465 jobs in database
[2026-01-14T22:08:43.725Z] [BOT] ✅ No jobs to archive (all 1465 jobs within 7-day window)
[2026-01-14T22:08:43.736Z] [BOT] 💾 Saved posted_jobs.json: 1465 active jobs
[2026-01-14T22:08:43.737Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:08:46.737Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-14T22:08:46.738Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Coastal-urban Flooding" @ ORG_a867f63f National Laboratory
   Category: HR (matched: "benefits")
[2026-01-14T22:08:46.738Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-14T22:08:47.137Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Coastal-urban Flooding @ ORG_a867f63f National Laboratory in #📁・JID_e938df7b
  ✅ Industry: Postdoctoral Appointee - Coastal-urban Flooding @ ORG_a867f63f National Laboratory
[2026-01-14T22:08:49.005Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Coastal-urban Flooding @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-14T22:08:50.506Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Coastal-urban Flooding @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-14T22:08:50.506Z] [BOT] 💾 BEFORE ARCHIVING: 1466 jobs in database
[2026-01-14T22:08:50.508Z] [BOT] ✅ No jobs to archive (all 1466 jobs within 7-day window)
[2026-01-14T22:08:50.523Z] [BOT] 💾 Saved posted_jobs.json: 1466 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:08:53.523Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T22:08:53.523Z] [BOT] ⏭️  Skipping duplicate: JID_685300d8 (posted within 7 days)
[2026-01-14T22:08:53.523Z] [BOT] ⏭️  Skipping duplicate: JID_6a802f99 (posted within 7 days)
[2026-01-14T22:08:53.523Z] [BOT] ⏭️  Skipping duplicate: JID_15cacb35 (posted within 7 days)
[2026-01-14T22:08:53.524Z] [BOT] ⏭️  Skipping duplicate: JID_2c8eadeb-researcher_r00111205 (posted within 7 days)
[2026-01-14T22:08:53.524Z] [BOT] ⏭️  Skipping duplicate: JID_e696f85b (posted within 7 days)
[2026-01-14T22:08:53.524Z] [BOT] ⏭️  Skipping duplicate: JID_947e5f00 (posted within 7 days)
[2026-01-14T22:08:53.524Z] [BOT] ⏭️  Skipping duplicate: JID_853975cb (posted within 7 days)
[2026-01-14T22:08:53.524Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r160652 (posted within 7 days)
[2026-01-14T22:08:53.524Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_d79db3e9-flooding_421450 (posted within 7 days)
[2026-01-14T22:08:53.524Z] [BOT] ⏭️  Skipping duplicate: JID_1b547e55 (posted within 7 days)
[2026-01-14T22:08:53.642Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[2026-01-14T22:08:53.808Z] [BOT] ✅ Saved pending queue: 2733 total (2713 pending, 10 enriched, 10 posted)
[2026-01-14T22:08:53.809Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T22:08:53.862Z] [BOT] 📂 Loaded 3595 existing routing entries
[2026-01-14T22:08:53.923Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-14T22:08:53.923Z] [BOT] Total entries: 3605
   Timestamp: 2026-01-14T22:08:53.908Z
[2026-01-14T22:08:53.923Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T22:08:53.924Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T22:08:53.924Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 11
   Top channels:
[2026-01-14T22:08:53.924Z] [BOT] 1. #🌉・san-francisco: 6 posts
     2. #💻・tech-jobs: 4 posts
     3. #💲・sales-jobs: 2 posts
     4. #🦢・los-angeles: 1 posts
[2026-01-14T22:08:53.924Z] [BOT] 5. #🤠・austin: 1 posts
[2026-01-14T22:08:53.924Z] [BOT] [STATS] Channel stats saved
[2026-01-14T22:08:55.948Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3083) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*