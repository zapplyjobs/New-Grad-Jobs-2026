# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T20:30:36.285Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T20:29:33.282Z] ========================================
[2026-01-19T20:29:33.284Z] Discord Bot Execution Log
[2026-01-19T20:29:33.284Z] Environment: GitHub Actions
[2026-01-19T20:29:33.284Z] Node Version: v20.19.6
[2026-01-19T20:29:33.285Z] ========================================
[2026-01-19T20:29:33.285Z] Environment Variables Check:
[2026-01-19T20:29:33.285Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T20:29:33.285Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T20:29:33.285Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T20:29:33.285Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T20:29:33.285Z] 
Multi-Channel Configuration:
[2026-01-19T20:29:33.285Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T20:29:33.285Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T20:29:33.285Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T20:29:33.286Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T20:29:33.286Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T20:29:33.286Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T20:29:33.286Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T20:29:33.286Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T20:29:33.286Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T20:29:33.286Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T20:29:33.286Z] 
Data Files Check:
[2026-01-19T20:29:33.287Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167163 bytes)
[2026-01-19T20:29:33.297Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1587704 bytes)
[2026-01-19T20:29:33.297Z] 
========================================
[2026-01-19T20:29:33.298Z] Starting Enhanced Discord Bot...
[2026-01-19T20:29:33.298Z] ========================================
[2026-01-19T20:29:33.854Z] [BOT] ✅ Loaded V2 database: 2907 jobs
[2026-01-19T20:29:34.439Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T20:29:34.440Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T20:29:34.440Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T20:29:34.559Z] [BOT] ✅ Loaded pending queue: 2819 total (2799 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Workforce Management Program Manager at gusto
[2026-01-19T20:29:34.563Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T20:29:34.564Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T20:29:34.564Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T20:29:34.565Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T20:29:34.565Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T20:29:34.570Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-19T20:29:34.571Z] [BOT] 📍 [ROUTING] "Workforce Management Program Manager" @ gusto
[2026-01-19T20:29:34.571Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-19T20:29:34.576Z] [BOT ERROR] (node:2431) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T20:29:34.823Z] [BOT] ✅ Created forum post: 🏢 Workforce Management Program Manager @ gusto in #📊・JID_9910249a
[2026-01-19T20:29:34.823Z] [BOT] ✅ Industry: Workforce Management Program Manager @ gusto
[2026-01-19T20:29:36.962Z] [BOT] ✅ Created forum post: 🏢 Workforce Management Program Manager @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T20:29:38.463Z] [BOT] 💾 Marked as posted: Workforce Management Program Manager @ gusto (instance #1)
[2026-01-19T20:29:38.464Z] [BOT] 💾 BEFORE ARCHIVING: 2908 jobs in database
[2026-01-19T20:29:38.466Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T20:29:38.471Z] [BOT] 📦 Archived 12 jobs to 2026-01.json (12 total in archive)
[2026-01-19T20:29:38.471Z] [BOT] ✅ Archiving complete: 12 archived, 2896 active
[2026-01-19T20:29:38.497Z] [BOT] 💾 Saved posted_jobs.json: 2896 active jobs
[2026-01-19T20:29:38.497Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T20:29:41.497Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T20:29:41.497Z] [BOT] 📍 [ROUTING] "Workforce Management Scheduling Team Lead" @ gusto
[2026-01-19T20:29:41.498Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T20:29:41.736Z] [BOT] ✅ Created forum post: 🏢 Workforce Management Scheduling Team Lead @ gusto in #📈・JID_fb739488
  ✅ Industry: Workforce Management Scheduling Team Lead @ gusto
[2026-01-19T20:29:43.406Z] [BOT] ✅ Created forum post: 🏢 Workforce Management Scheduling Team Lead @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T20:29:44.908Z] [BOT] 💾 Marked as posted: Workforce Management Scheduling Team Lead @ gusto (instance #1)
[2026-01-19T20:29:44.908Z] [BOT] 💾 BEFORE ARCHIVING: 2897 jobs in database
[2026-01-19T20:29:44.911Z] [BOT] ✅ No jobs to archive (all 2897 jobs within 7-day window)
[2026-01-19T20:29:44.930Z] [BOT] 💾 Saved posted_jobs.json: 2897 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:29:47.932Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-19T20:29:47.932Z] [BOT] 📍 [ROUTING] "Sr Staff Software Engineer, Gusto Pro" @ gusto
   Category: TECH (matched: "software")
[2026-01-19T20:29:47.932Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T20:29:48.120Z] [BOT] ✅ Created forum post: 🏢 Sr Staff Software Engineer, Gusto Pro @ gusto in #💻・tech-jobs
  ✅ Industry: Sr Staff Software Engineer, Gusto Pro @ gusto
[2026-01-19T20:29:50.374Z] [BOT] ✅ Created forum post: 🏢 Sr Staff Software Engineer, Gusto Pro @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T20:29:51.874Z] [BOT] 💾 Marked as posted: Sr Staff Software Engineer, Gusto Pro @ gusto (instance #1)
[2026-01-19T20:29:51.875Z] [BOT] 💾 BEFORE ARCHIVING: 2898 jobs in database
[2026-01-19T20:29:51.877Z] [BOT] ✅ No jobs to archive (all 2898 jobs within 7-day window)
[2026-01-19T20:29:51.894Z] [BOT] 💾 Saved posted_jobs.json: 2898 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:29:51.895Z] [BOT] 📍 [ROUTING] "Principal Engineer" @ gusto
[2026-01-19T20:29:51.895Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T20:29:52.158Z] [BOT] ✅ Created forum post: 🏢 Principal Engineer @ gusto in #💻・tech-jobs
  ✅ Industry: Principal Engineer @ gusto
[2026-01-19T20:29:54.248Z] [BOT] ✅ Created forum post: 🏢 Principal Engineer @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T20:29:55.750Z] [BOT] 💾 Marked as posted: Principal Engineer @ gusto (instance #1)
[2026-01-19T20:29:55.750Z] [BOT] 💾 BEFORE ARCHIVING: 2899 jobs in database
[2026-01-19T20:29:55.752Z] [BOT] ✅ No jobs to archive (all 2899 jobs within 7-day window)
[2026-01-19T20:29:55.770Z] [BOT] 💾 Saved posted_jobs.json: 2899 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:29:58.771Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-19T20:29:58.771Z] [BOT] 📍 [ROUTING] "Sales Associate" @ gusto
[2026-01-19T20:29:58.771Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T20:29:59.057Z] [BOT] ✅ Created forum post: 🏢 Sales Associate @ gusto in #💲・sales-jobs
  ✅ Industry: Sales Associate @ gusto
[2026-01-19T20:30:01.094Z] [BOT] ✅ Created forum post: 🏢 Sales Associate @ gusto in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-19T20:30:02.596Z] [BOT] 💾 Marked as posted: Sales Associate @ gusto (instance #1)
💾 BEFORE ARCHIVING: 2900 jobs in database
[2026-01-19T20:30:02.598Z] [BOT] ✅ No jobs to archive (all 2900 jobs within 7-day window)
[2026-01-19T20:30:02.616Z] [BOT] 💾 Saved posted_jobs.json: 2900 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:30:02.616Z] [BOT] 📍 [ROUTING] "Senior Manager, Revenue Accounting" @ gusto
[2026-01-19T20:30:02.616Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T20:30:03.030Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Revenue Accounting @ gusto in #💲・sales-jobs
  ✅ Industry: Senior Manager, Revenue Accounting @ gusto
[2026-01-19T20:30:04.853Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Revenue Accounting @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T20:30:06.355Z] [BOT] 💾 Marked as posted: Senior Manager, Revenue Accounting @ gusto (instance #1)
[2026-01-19T20:30:06.355Z] [BOT] 💾 BEFORE ARCHIVING: 2901 jobs in database
[2026-01-19T20:30:06.357Z] [BOT] ✅ No jobs to archive (all 2901 jobs within 7-day window)
[2026-01-19T20:30:06.373Z] [BOT] 💾 Saved posted_jobs.json: 2901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:30:09.374Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-19T20:30:09.375Z] [BOT] 📍 [ROUTING] "Senior Motion Designer, Brand Studio" @ gusto
   Category: MARKETING (matched: "marketing")
[2026-01-19T20:30:09.375Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T20:30:09.736Z] [BOT] ✅ Created forum post: 🏢 Senior Motion Designer, Brand Studio @ gusto in #📣・marketing-jobs
  ✅ Industry: Senior Motion Designer, Brand Studio @ gusto
[2026-01-19T20:30:11.473Z] [BOT] ✅ Created forum post: 🏢 Senior Motion Designer, Brand Studio @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T20:30:12.973Z] [BOT] 💾 Marked as posted: Senior Motion Designer, Brand Studio @ gusto (instance #1)
[2026-01-19T20:30:12.973Z] [BOT] 💾 BEFORE ARCHIVING: 2902 jobs in database
[2026-01-19T20:30:12.975Z] [BOT] ✅ No jobs to archive (all 2902 jobs within 7-day window)
[2026-01-19T20:30:12.994Z] [BOT] 💾 Saved posted_jobs.json: 2902 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:30:12.994Z] [BOT] 📍 [ROUTING] "Product Partnerships Deal Lead" @ gusto
[2026-01-19T20:30:12.995Z] [BOT] Category: MARKETING (matched: "growth")
[2026-01-19T20:30:12.995Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T20:30:13.293Z] [BOT] ✅ Created forum post: 🏢 Product Partnerships Deal Lead @ gusto in #📣・marketing-jobs
  ✅ Industry: Product Partnerships Deal Lead @ gusto
[2026-01-19T20:30:15.332Z] [BOT] ✅ Created forum post: 🏢 Product Partnerships Deal Lead @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T20:30:16.834Z] [BOT] 💾 Marked as posted: Product Partnerships Deal Lead @ gusto (instance #1)
[2026-01-19T20:30:16.834Z] [BOT] 💾 BEFORE ARCHIVING: 2903 jobs in database
[2026-01-19T20:30:16.836Z] [BOT] ✅ No jobs to archive (all 2903 jobs within 7-day window)
[2026-01-19T20:30:16.853Z] [BOT] 💾 Saved posted_jobs.json: 2903 active jobs
[2026-01-19T20:30:16.854Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T20:30:19.854Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-19T20:30:19.854Z] [BOT] 📍 [ROUTING] "Tax Resolution Advocate" @ gusto
[2026-01-19T20:30:19.854Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-19T20:30:20.062Z] [BOT] ✅ Created forum post: 🏢 Tax Resolution Advocate @ gusto in #💰・finance-jobs
  ✅ Industry: Tax Resolution Advocate @ gusto
[2026-01-19T20:30:21.772Z] [BOT] ✅ Created forum post: 🏢 Tax Resolution Advocate @ gusto in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-19T20:30:23.273Z] [BOT] 💾 Marked as posted: Tax Resolution Advocate @ gusto (instance #1)
[2026-01-19T20:30:23.273Z] [BOT] 💾 BEFORE ARCHIVING: 2904 jobs in database
[2026-01-19T20:30:23.275Z] [BOT] ✅ No jobs to archive (all 2904 jobs within 7-day window)
[2026-01-19T20:30:23.293Z] [BOT] 💾 Saved posted_jobs.json: 2904 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:30:26.294Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-19T20:30:26.295Z] [BOT] 📍 [ROUTING] "Tools Administration Lead" @ gusto
[2026-01-19T20:30:26.295Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T20:30:26.537Z] [BOT] ✅ Created forum post: 🏢 Tools Administration Lead @ gusto in #🩺・healthcare-jobs
[2026-01-19T20:30:26.537Z] [BOT] ✅ Industry: Tools Administration Lead @ gusto
[2026-01-19T20:30:28.449Z] [BOT] ✅ Created forum post: 🏢 Tools Administration Lead @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T20:30:29.951Z] [BOT] 💾 Marked as posted: Tools Administration Lead @ gusto (instance #1)
[2026-01-19T20:30:29.951Z] [BOT] 💾 BEFORE ARCHIVING: 2905 jobs in database
[2026-01-19T20:30:29.953Z] [BOT] ✅ No jobs to archive (all 2905 jobs within 7-day window)
[2026-01-19T20:30:29.969Z] [BOT] 💾 Saved posted_jobs.json: 2905 active jobs
[2026-01-19T20:30:29.969Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T20:30:32.970Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-19T20:30:32.971Z] [BOT] ⏭️  Skipping duplicate: JID_570fa866 (posted within 7 days)
[2026-01-19T20:30:32.971Z] [BOT] ⏭️  Skipping duplicate: JID_ef94eb28 (posted within 7 days)
[2026-01-19T20:30:32.971Z] [BOT] ⏭️  Skipping duplicate: JID_46954a8b (posted within 7 days)
[2026-01-19T20:30:32.972Z] [BOT] ⏭️  Skipping duplicate: JID_8c91a537 (posted within 7 days)
[2026-01-19T20:30:32.972Z] [BOT] ⏭️  Skipping duplicate: JID_ed70bc0b (posted within 7 days)
[2026-01-19T20:30:32.972Z] [BOT] ⏭️  Skipping duplicate: JID_9fd12e1d (posted within 7 days)
[2026-01-19T20:30:32.972Z] [BOT] ⏭️  Skipping duplicate: JID_8ca6d2d1 (posted within 7 days)
[2026-01-19T20:30:32.972Z] [BOT] ⏭️  Skipping duplicate: JID_be27abfe (posted within 7 days)
[2026-01-19T20:30:32.972Z] [BOT] ⏭️  Skipping duplicate: JID_dac1b909 (posted within 7 days)
[2026-01-19T20:30:32.972Z] [BOT] ⏭️  Skipping duplicate: JID_8a23ff6d (posted within 7 days)
[2026-01-19T20:30:33.102Z] [BOT] ✅ Loaded pending queue: 2819 total (2799 pending, 20 enriched, 0 posted)
[2026-01-19T20:30:33.269Z] [BOT] ✅ Saved pending queue: 2819 total (2799 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-19T20:30:33.270Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-19T20:30:33.330Z] [BOT] 📂 Loaded 5135 existing routing entries
[2026-01-19T20:30:33.402Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5145
[2026-01-19T20:30:33.402Z] [BOT] Timestamp: 2026-01-19T20:30:33.380Z
[2026-01-19T20:30:33.403Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T20:30:33.403Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
     1. #🌉・san-francisco: 8 posts
     2. #💻・tech-jobs: 2 posts
     3. #💲・sales-jobs: 2 posts
[2026-01-19T20:30:33.403Z] [BOT] 4. #🌆・chicago: 2 posts
     5. #📣・marketing-jobs: 2 posts
[2026-01-19T20:30:33.403Z] [BOT] [STATS] Channel stats saved
[2026-01-19T20:30:35.428Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2431) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*