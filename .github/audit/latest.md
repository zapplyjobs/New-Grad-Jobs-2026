# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T16:41:43.533Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T16:41:05.091Z] ========================================
[2026-01-03T16:41:05.093Z] Discord Bot Execution Log
[2026-01-03T16:41:05.093Z] Environment: GitHub Actions
[2026-01-03T16:41:05.093Z] Node Version: v20.19.6
[2026-01-03T16:41:05.093Z] ========================================
[2026-01-03T16:41:05.093Z] Environment Variables Check:
[2026-01-03T16:41:05.093Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T16:41:05.093Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T16:41:05.093Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T16:41:05.093Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T16:41:05.093Z] 
Multi-Channel Configuration:
[2026-01-03T16:41:05.093Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T16:41:05.094Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T16:41:05.094Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T16:41:05.094Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T16:41:05.094Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T16:41:05.094Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T16:41:05.094Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T16:41:05.094Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T16:41:05.094Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T16:41:05.094Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T16:41:05.094Z] 
Data Files Check:
[2026-01-03T16:41:05.095Z] .github/data/new_jobs.json: ✅ Exists (10 items, 139291 bytes)
[2026-01-03T16:41:05.098Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 317280 bytes)
[2026-01-03T16:41:05.098Z] 
========================================
[2026-01-03T16:41:05.098Z] Starting Enhanced Discord Bot...
[2026-01-03T16:41:05.098Z] ========================================
[2026-01-03T16:41:05.611Z] [BOT] ✅ Loaded V2 database: 613 jobs
[2026-01-03T16:41:06.370Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T16:41:06.371Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T16:41:06.371Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T16:41:06.372Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T16:41:06.443Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T16:41:06.534Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T16:41:06.537Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T16:41:06.537Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T16:41:06.537Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T16:41:06.538Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2026-01-03T16:41:06.538Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Senior Android Engineer, Apps Platform (Performance) @ reddit: new york, chicago
   - Senior iOS Software Engineer, iOS Platform @ reddit: new york, san francisco, los angeles
⏸️ Limiting to 10 jobs this run, 3 deferred for next run
📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T16:41:06.542Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-03T16:41:06.543Z] [BOT] 📍 [ROUTING] "Senior Android Engineer, Apps Platform (Performance)" @ reddit
[2026-01-03T16:41:06.543Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T16:41:06.548Z] [BOT ERROR] (node:2411) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T16:41:06.843Z] [BOT] ✅ Created forum post: 🏢 Senior Android Engineer, Apps Platform (Performance) @ reddit in #🤖・ai-jobs
[2026-01-03T16:41:06.844Z] [BOT] ✅ Industry: Senior Android Engineer, Apps Platform (Performance) @ reddit
[2026-01-03T16:41:08.628Z] [BOT] ✅ Created forum post: 🏢 Senior Android Engineer, Apps Platform (Performance) @ reddit in #🗽・new-york
[2026-01-03T16:41:08.628Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T16:41:10.129Z] [BOT] 💾 Marked as posted: Senior Android Engineer, Apps Platform (Performance) @ reddit (instance #1)
[2026-01-03T16:41:10.129Z] [BOT] 💾 BEFORE ARCHIVING: 614 jobs in database
[2026-01-03T16:41:10.130Z] [BOT] ✅ No jobs to archive (all 614 jobs within 7-day window)
[2026-01-03T16:41:10.138Z] [BOT] 💾 Saved posted_jobs.json: 614 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:41:10.138Z] [BOT] 💾 Marked as posted: Senior Android Engineer, Apps Platform (Performance) @ reddit (instance #1)
[2026-01-03T16:41:10.138Z] [BOT] 💾 BEFORE ARCHIVING: 615 jobs in database
[2026-01-03T16:41:10.139Z] [BOT] ✅ No jobs to archive (all 615 jobs within 7-day window)
[2026-01-03T16:41:10.143Z] [BOT] 💾 Saved posted_jobs.json: 615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:41:10.145Z] [BOT] 📍 [ROUTING] "Senior Client Account Manager, Large Customer Sales (B2B Tech)" @ reddit
[2026-01-03T16:41:10.146Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-03T16:41:10.368Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit
[2026-01-03T16:41:12.084Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T16:41:13.584Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit (instance #1)
[2026-01-03T16:41:13.585Z] [BOT] 💾 BEFORE ARCHIVING: 616 jobs in database
[2026-01-03T16:41:13.585Z] [BOT] ✅ No jobs to archive (all 616 jobs within 7-day window)
[2026-01-03T16:41:13.590Z] [BOT] 💾 Saved posted_jobs.json: 616 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:41:13.590Z] [BOT] 📍 [ROUTING] "Senior iOS Software Engineer, iOS Platform" @ reddit
[2026-01-03T16:41:13.591Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T16:41:13.591Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T16:41:13.833Z] [BOT] ✅ Created forum post: 🏢 Senior iOS Software Engineer, iOS Platform @ reddit in #🤖・ai-jobs
[2026-01-03T16:41:13.834Z] [BOT] ✅ Industry: Senior iOS Software Engineer, iOS Platform @ reddit
[2026-01-03T16:41:15.556Z] [BOT] ✅ Created forum post: 🏢 Senior iOS Software Engineer, iOS Platform @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T16:41:17.058Z] [BOT] 💾 Marked as posted: Senior iOS Software Engineer, iOS Platform @ reddit (instance #1)
[2026-01-03T16:41:17.058Z] [BOT] 💾 BEFORE ARCHIVING: 617 jobs in database
[2026-01-03T16:41:17.059Z] [BOT] ✅ No jobs to archive (all 617 jobs within 7-day window)
[2026-01-03T16:41:17.064Z] [BOT] 💾 Saved posted_jobs.json: 617 active jobs
[2026-01-03T16:41:17.064Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior iOS Software Engineer, iOS Platform @ reddit (instance #1)
[2026-01-03T16:41:17.064Z] [BOT] 💾 BEFORE ARCHIVING: 618 jobs in database
[2026-01-03T16:41:17.065Z] [BOT] ✅ No jobs to archive (all 618 jobs within 7-day window)
[2026-01-03T16:41:17.070Z] [BOT] 💾 Saved posted_jobs.json: 618 active jobs
[2026-01-03T16:41:17.070Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior iOS Software Engineer, iOS Platform @ reddit (instance #1)
[2026-01-03T16:41:17.070Z] [BOT] 💾 BEFORE ARCHIVING: 619 jobs in database
[2026-01-03T16:41:17.071Z] [BOT] ✅ No jobs to archive (all 619 jobs within 7-day window)
[2026-01-03T16:41:17.075Z] [BOT] 💾 Saved posted_jobs.json: 619 active jobs
[2026-01-03T16:41:17.075Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:41:17.077Z] [BOT] 📍 [ROUTING] "Data Scientist  - Business Analytics" @ spotify
[2026-01-03T16:41:17.077Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-03T16:41:17.356Z] [BOT] ✅ Created forum post: 🏢 Data Scientist  - Business Analytics @ spotify in #🤖・ai-jobs
  ✅ Industry: Data Scientist  - Business Analytics @ spotify
[2026-01-03T16:41:19.156Z] [BOT] ✅ Created forum post: 🏢 Data Scientist  - Business Analytics @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T16:41:20.658Z] [BOT] 💾 Marked as posted: Data Scientist  - Business Analytics @ spotify (instance #1)
[2026-01-03T16:41:20.658Z] [BOT] 💾 BEFORE ARCHIVING: 620 jobs in database
[2026-01-03T16:41:20.658Z] [BOT] ✅ No jobs to archive (all 620 jobs within 7-day window)
[2026-01-03T16:41:20.663Z] [BOT] 💾 Saved posted_jobs.json: 620 active jobs
[2026-01-03T16:41:20.663Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:41:23.664Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-03T16:41:23.666Z] [BOT] 📍 [ROUTING] "Community Support Specialist" @ figma
[2026-01-03T16:41:23.666Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T16:41:23.948Z] [BOT] ✅ Created forum post: 🏢 Community Support Specialist @ figma in #💲・sales-jobs
  ✅ Industry: Community Support Specialist @ figma
[2026-01-03T16:41:25.723Z] [BOT] ✅ Created forum post: 🏢 Community Support Specialist @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T16:41:27.224Z] [BOT] 💾 Marked as posted: Community Support Specialist @ figma (instance #1)
[2026-01-03T16:41:27.225Z] [BOT] 💾 BEFORE ARCHIVING: 621 jobs in database
[2026-01-03T16:41:27.225Z] [BOT] ✅ No jobs to archive (all 621 jobs within 7-day window)
[2026-01-03T16:41:27.230Z] [BOT] 💾 Saved posted_jobs.json: 621 active jobs
[2026-01-03T16:41:27.230Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:41:27.231Z] [BOT] 📍 [ROUTING] "Legal Operations Lead, CLM & Technology" @ figma
[2026-01-03T16:41:27.231Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T16:41:27.393Z] [BOT] ✅ Created forum post: 🏢 Legal Operations Lead, CLM & Technology @ figma in #💲・sales-jobs
[2026-01-03T16:41:27.393Z] [BOT] ✅ Industry: Legal Operations Lead, CLM & Technology @ figma
[2026-01-03T16:41:29.263Z] [BOT] ✅ Created forum post: 🏢 Legal Operations Lead, CLM & Technology @ figma in #🌉・san-francisco
[2026-01-03T16:41:29.263Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T16:41:30.765Z] [BOT] 💾 Marked as posted: Legal Operations Lead, CLM & Technology @ figma (instance #1)
[2026-01-03T16:41:30.765Z] [BOT] 💾 BEFORE ARCHIVING: 622 jobs in database
[2026-01-03T16:41:30.765Z] [BOT] ✅ No jobs to archive (all 622 jobs within 7-day window)
[2026-01-03T16:41:30.771Z] [BOT] 💾 Saved posted_jobs.json: 622 active jobs
[2026-01-03T16:41:30.771Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:41:33.772Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T16:41:33.773Z] [BOT] 📍 [ROUTING] " Senior Software Engineer, Backend" @ duolingo
[2026-01-03T16:41:33.773Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T16:41:34.253Z] [BOT] ✅ Created forum post: 🏢  Senior Software Engineer, Backend @ duolingo in #💻・tech-jobs
  ✅ Industry:  Senior Software Engineer, Backend @ duolingo
[2026-01-03T16:41:35.948Z] [BOT] ✅ Created forum post: 🏢  Senior Software Engineer, Backend @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T16:41:37.449Z] [BOT] 💾 Marked as posted:  Senior Software Engineer, Backend @ duolingo (instance #1)
[2026-01-03T16:41:37.449Z] [BOT] 💾 BEFORE ARCHIVING: 623 jobs in database
[2026-01-03T16:41:37.450Z] [BOT] ✅ No jobs to archive (all 623 jobs within 7-day window)
[2026-01-03T16:41:37.455Z] [BOT] 💾 Saved posted_jobs.json: 623 active jobs
[2026-01-03T16:41:37.455Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:41:40.456Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2026-01-03T16:41:40.456Z] [BOT] ⏭️  Skipping duplicate: JID_b0508a8e (posted within 7 days)
[2026-01-03T16:41:40.456Z] [BOT] ⏭️  Skipping duplicate: JID_70f48c09 (posted within 7 days)
[2026-01-03T16:41:40.457Z] [BOT] ⏭️  Skipping duplicate: JID_228ff5f7 (posted within 7 days)
⏭️  Skipping duplicate: JID_342592d0 (posted within 7 days)
[2026-01-03T16:41:40.457Z] [BOT] ⏭️  Skipping duplicate: JID_48163599 (posted within 7 days)
[2026-01-03T16:41:40.457Z] [BOT] ⏭️  Skipping duplicate: JID_59cf2219 (posted within 7 days)
[2026-01-03T16:41:40.457Z] [BOT] ⏭️  Skipping duplicate: JID_e3889d25 (posted within 7 days)
[2026-01-03T16:41:40.516Z] [BOT] ✅ Loaded pending queue: 676 total (656 pending, 20 enriched, 0 posted)
[2026-01-03T16:41:40.581Z] [BOT] ✅ Saved pending queue: 676 total (656 pending, 13 enriched, 7 posted)
📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T16:41:40.626Z] [BOT] 📂 Loaded 1583 existing routing entries
[2026-01-03T16:41:40.674Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
   Total entries: 1590
   Timestamp: 2026-01-03T16:41:40.667Z
[2026-01-03T16:41:40.675Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T16:41:40.675Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-03T16:41:40.675Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T16:41:40.675Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 5
   Top channels:
     1. #🗽・new-york: 5 posts
[2026-01-03T16:41:40.675Z] [BOT] 2. #🤖・ai-jobs: 4 posts
     3. #💲・sales-jobs: 2 posts
     4. #🌉・san-francisco: 2 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-03T16:41:40.676Z] [BOT] [STATS] Channel stats saved
[2026-01-03T16:41:42.692Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2411) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*