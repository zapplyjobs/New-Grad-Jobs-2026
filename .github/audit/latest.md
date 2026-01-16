# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T04:49:25.666Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T04:48:39.640Z] ========================================
[2026-01-16T04:48:39.642Z] Discord Bot Execution Log
[2026-01-16T04:48:39.642Z] Environment: GitHub Actions
[2026-01-16T04:48:39.642Z] Node Version: v20.19.6
[2026-01-16T04:48:39.642Z] ========================================
[2026-01-16T04:48:39.642Z] Environment Variables Check:
[2026-01-16T04:48:39.642Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T04:48:39.642Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T04:48:39.643Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T04:48:39.643Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T04:48:39.643Z] 
Multi-Channel Configuration:
[2026-01-16T04:48:39.643Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T04:48:39.643Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T04:48:39.643Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T04:48:39.643Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T04:48:39.643Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T04:48:39.643Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T04:48:39.643Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T04:48:39.643Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T04:48:39.643Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T04:48:39.644Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T04:48:39.644Z] 
Data Files Check:
[2026-01-16T04:48:39.644Z] .github/data/new_jobs.json: ✅ Exists (10 items, 30692 bytes)
[2026-01-16T04:48:39.651Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1026529 bytes)
[2026-01-16T04:48:39.651Z] 
========================================
[2026-01-16T04:48:39.651Z] Starting Enhanced Discord Bot...
[2026-01-16T04:48:39.652Z] ========================================
[2026-01-16T04:48:40.185Z] [BOT] ✅ Loaded V2 database: 1910 jobs
[2026-01-16T04:48:40.944Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T04:48:40.945Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T04:48:40.945Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T04:48:41.059Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Postdoctoral Scholar at PennState University
[2026-01-16T04:48:41.062Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T04:48:41.062Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T04:48:41.063Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T04:48:41.063Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-16T04:48:41.063Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T04:48:41.066Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-16T04:48:41.068Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar" @ ORG_478e100e University
[2026-01-16T04:48:41.068Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T04:48:41.085Z] [BOT ERROR] (node:2461) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T04:48:41.256Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar @ ORG_478e100e University in #🤖・ai-jobs
[2026-01-16T04:48:41.256Z] [BOT] ✅ Industry: Postdoctoral Scholar @ ORG_478e100e University
[2026-01-16T04:48:42.956Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T04:48:44.457Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar @ ORG_478e100e University (instance #1)
[2026-01-16T04:48:44.457Z] [BOT] 💾 BEFORE ARCHIVING: 1911 jobs in database
[2026-01-16T04:48:44.459Z] [BOT] ✅ No jobs to archive (all 1911 jobs within 7-day window)
[2026-01-16T04:48:44.478Z] [BOT] 💾 Saved posted_jobs.json: 1911 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T04:48:44.479Z] [BOT] 📍 [ROUTING] "Associate AI Engineer" @ T-Mobile
[2026-01-16T04:48:44.479Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T04:48:44.649Z] [BOT] ✅ Created forum post: 🏢 Associate AI Engineer @ T-Mobile in #🤖・ai-jobs
[2026-01-16T04:48:44.650Z] [BOT] ✅ Industry: Associate AI Engineer @ T-Mobile
[2026-01-16T04:48:46.482Z] [BOT] ✅ Created forum post: 🏢 Associate AI Engineer @ T-Mobile in #🌧️・seattle
[2026-01-16T04:48:46.483Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-16T04:48:47.984Z] [BOT] 💾 Marked as posted: Associate AI Engineer @ T-Mobile (instance #1)
[2026-01-16T04:48:47.984Z] [BOT] 💾 BEFORE ARCHIVING: 1912 jobs in database
[2026-01-16T04:48:47.985Z] [BOT] ✅ No jobs to archive (all 1912 jobs within 7-day window)
[2026-01-16T04:48:47.996Z] [BOT] 💾 Saved posted_jobs.json: 1912 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T04:48:47.997Z] [BOT] 📍 [ROUTING] "Software Engineer, Agent" @ ORG_d5eef8ad
[2026-01-16T04:48:47.997Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T04:48:48.180Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Agent @ ORG_d5eef8ad in #🤖・ai-jobs
[2026-01-16T04:48:48.180Z] [BOT] ✅ Industry: Software Engineer, Agent @ ORG_d5eef8ad
[2026-01-16T04:48:49.980Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Agent @ ORG_d5eef8ad in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T04:48:51.481Z] [BOT] 💾 Marked as posted: Software Engineer, Agent @ ORG_d5eef8ad (instance #1)
[2026-01-16T04:48:51.481Z] [BOT] 💾 BEFORE ARCHIVING: 1913 jobs in database
[2026-01-16T04:48:51.483Z] [BOT] ✅ No jobs to archive (all 1913 jobs within 7-day window)
[2026-01-16T04:48:51.497Z] [BOT] 💾 Saved posted_jobs.json: 1913 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T04:48:54.497Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-16T04:48:54.498Z] [BOT] 📍 [ROUTING] "Associate Embedded Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:48:54.913Z] [BOT] ✅ Created forum post: 🏢 Associate Embedded Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-16T04:48:54.913Z] [BOT] ✅ Industry: Associate Embedded Software Engineer @ ORG_f3f2248d Grumman
[2026-01-16T04:48:56.639Z] [BOT] ✅ Created forum post: 🏢 Associate Embedded Software Engineer @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T04:48:58.139Z] [BOT] 💾 Marked as posted: Associate Embedded Software Engineer @ ORG_f3f2248d Grumman (instance #1)
[2026-01-16T04:48:58.140Z] [BOT] 💾 BEFORE ARCHIVING: 1914 jobs in database
[2026-01-16T04:48:58.141Z] [BOT] ✅ No jobs to archive (all 1914 jobs within 7-day window)
[2026-01-16T04:48:58.155Z] [BOT] 💾 Saved posted_jobs.json: 1914 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T04:48:58.155Z] [BOT] 📍 [ROUTING] "Software Engineer 0" @ ORG_438280e0 Engineering
[2026-01-16T04:48:58.156Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:48:58.363Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 0 @ ORG_438280e0 Engineering in #💻・tech-jobs
  ✅ Industry: Software Engineer 0 @ ORG_438280e0 Engineering
[2026-01-16T04:49:00.089Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 0 @ ORG_438280e0 Engineering in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T04:49:01.590Z] [BOT] 💾 Marked as posted: Software Engineer 0 @ ORG_438280e0 Engineering (instance #1)
[2026-01-16T04:49:01.590Z] [BOT] 💾 BEFORE ARCHIVING: 1915 jobs in database
[2026-01-16T04:49:01.591Z] [BOT] ✅ No jobs to archive (all 1915 jobs within 7-day window)
[2026-01-16T04:49:01.603Z] [BOT] 💾 Saved posted_jobs.json: 1915 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T04:49:01.604Z] [BOT] 📍 [ROUTING] "University Grad - Product Engineer - 2026" @ ORG_b7d7c983 Labs
[2026-01-16T04:49:01.604Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:49:01.807Z] [BOT] ✅ Created forum post: 🏢 University Grad - Product Engineer - 2026 @ ORG_b7d7c983 Labs in #💻・tech-jobs
  ✅ Industry: University Grad - Product Engineer - 2026 @ ORG_b7d7c983 Labs
[2026-01-16T04:49:03.866Z] [BOT] ✅ Created forum post: 🏢 University Grad - Product Engineer - 2026 @ ORG_b7d7c983 Labs in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T04:49:05.366Z] [BOT] 💾 Marked as posted: University Grad - Product Engineer - 2026 @ ORG_b7d7c983 Labs (instance #1)
[2026-01-16T04:49:05.367Z] [BOT] 💾 BEFORE ARCHIVING: 1916 jobs in database
[2026-01-16T04:49:05.368Z] [BOT] ✅ No jobs to archive (all 1916 jobs within 7-day window)
[2026-01-16T04:49:05.380Z] [BOT] 💾 Saved posted_jobs.json: 1916 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T04:49:05.381Z] [BOT] 📍 [ROUTING] "Fullstack Software Engineer" @ ORG_60cbfc1e Health
[2026-01-16T04:49:05.381Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:49:05.826Z] [BOT] ✅ Created forum post: 🏢 Fullstack Software Engineer @ ORG_60cbfc1e Health in #💻・tech-jobs
[2026-01-16T04:49:05.826Z] [BOT] ✅ Industry: Fullstack Software Engineer @ ORG_60cbfc1e Health
[2026-01-16T04:49:07.588Z] [BOT] ✅ Created forum post: 🏢 Fullstack Software Engineer @ ORG_60cbfc1e Health in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T04:49:09.089Z] [BOT] 💾 Marked as posted: Fullstack Software Engineer @ ORG_60cbfc1e Health (instance #1)
[2026-01-16T04:49:09.089Z] [BOT] 💾 BEFORE ARCHIVING: 1917 jobs in database
[2026-01-16T04:49:09.090Z] [BOT] ✅ No jobs to archive (all 1917 jobs within 7-day window)
[2026-01-16T04:49:09.104Z] [BOT] 💾 Saved posted_jobs.json: 1917 active jobs
[2026-01-16T04:49:09.104Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T04:49:09.105Z] [BOT] 📍 [ROUTING] "Design Engineer" @ ORG_60cbfc1e Health
[2026-01-16T04:49:09.105Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:49:09.303Z] [BOT] ✅ Created forum post: 🏢 Design Engineer @ ORG_60cbfc1e Health in #💻・tech-jobs
  ✅ Industry: Design Engineer @ ORG_60cbfc1e Health
[2026-01-16T04:49:10.963Z] [BOT] ✅ Created forum post: 🏢 Design Engineer @ ORG_60cbfc1e Health in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T04:49:12.463Z] [BOT] 💾 Marked as posted: Design Engineer @ ORG_60cbfc1e Health (instance #1)
[2026-01-16T04:49:12.464Z] [BOT] 💾 BEFORE ARCHIVING: 1918 jobs in database
[2026-01-16T04:49:12.465Z] [BOT] ✅ No jobs to archive (all 1918 jobs within 7-day window)
[2026-01-16T04:49:12.478Z] [BOT] 💾 Saved posted_jobs.json: 1918 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T04:49:12.479Z] [BOT] 📍 [ROUTING] "Pricing Engineer" @ ORG_60cbfc1e Health
[2026-01-16T04:49:12.479Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:49:12.678Z] [BOT] ✅ Created forum post: 🏢 Pricing Engineer @ ORG_60cbfc1e Health in #💻・tech-jobs
  ✅ Industry: Pricing Engineer @ ORG_60cbfc1e Health
[2026-01-16T04:49:14.337Z] [BOT] ✅ Created forum post: 🏢 Pricing Engineer @ ORG_60cbfc1e Health in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T04:49:15.837Z] [BOT] 💾 Marked as posted: Pricing Engineer @ ORG_60cbfc1e Health (instance #1)
[2026-01-16T04:49:15.838Z] [BOT] 💾 BEFORE ARCHIVING: 1919 jobs in database
[2026-01-16T04:49:15.839Z] [BOT] ✅ No jobs to archive (all 1919 jobs within 7-day window)
[2026-01-16T04:49:15.852Z] [BOT] 💾 Saved posted_jobs.json: 1919 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T04:49:15.852Z] [BOT] 📍 [ROUTING] "Product Engineer" @ ORG_60cbfc1e Health
[2026-01-16T04:49:15.852Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:49:15.998Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ ORG_60cbfc1e Health in #💻・tech-jobs
  ✅ Industry: Product Engineer @ ORG_60cbfc1e Health
[2026-01-16T04:49:17.657Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ ORG_60cbfc1e Health in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T04:49:19.159Z] [BOT] 💾 Marked as posted: Product Engineer @ ORG_60cbfc1e Health (instance #1)
[2026-01-16T04:49:19.159Z] [BOT] 💾 BEFORE ARCHIVING: 1920 jobs in database
[2026-01-16T04:49:19.160Z] [BOT] ✅ No jobs to archive (all 1920 jobs within 7-day window)
[2026-01-16T04:49:19.173Z] [BOT] 💾 Saved posted_jobs.json: 1920 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T04:49:22.173Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T04:49:22.174Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_40a990de-scholar_req_0000072094-1 (posted within 7 days)
[2026-01-16T04:49:22.174Z] [BOT] ⏭️  Skipping duplicate: JID_d93ab0bf-northrop_grumman_external_site-JID_1a29c647-engineer_r10208121-1 (posted within 7 days)
[2026-01-16T04:49:22.174Z] [BOT] ⏭️  Skipping duplicate: JID_ad2d598d-engineer_req333189 (posted within 7 days)
[2026-01-16T04:49:22.174Z] [BOT] ⏭️  Skipping duplicate: JID_5687a871 (posted within 7 days)
[2026-01-16T04:49:22.175Z] [BOT] ⏭️  Skipping duplicate: JID_4ec87338 (posted within 7 days)
[2026-01-16T04:49:22.175Z] [BOT] ⏭️  Skipping duplicate: JID_f7ac97f2 (posted within 7 days)
[2026-01-16T04:49:22.175Z] [BOT] ⏭️  Skipping duplicate: JID_fdb28f9e (posted within 7 days)
[2026-01-16T04:49:22.175Z] [BOT] ⏭️  Skipping duplicate: JID_dbc5ca0f (posted within 7 days)
[2026-01-16T04:49:22.175Z] [BOT] ⏭️  Skipping duplicate: JID_811bbf1a (posted within 7 days)
[2026-01-16T04:49:22.175Z] [BOT] ⏭️  Skipping duplicate: JID_f7f7997d (posted within 7 days)
[2026-01-16T04:49:22.293Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[2026-01-16T04:49:22.467Z] [BOT] ✅ Saved pending queue: 2772 total (2752 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-16T04:49:22.467Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-16T04:49:22.525Z] [BOT] 📂 Loaded 4135 existing routing entries
[2026-01-16T04:49:22.603Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-16T04:49:22.603Z] [BOT] New entries: 10
   Total entries: 4145
   Timestamp: 2026-01-16T04:49:22.573Z
[2026-01-16T04:49:22.604Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T04:49:22.604Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-16T04:49:22.604Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
[2026-01-16T04:49:22.604Z] [BOT] 1. #💻・tech-jobs: 7 posts
[2026-01-16T04:49:22.604Z] [BOT] 2. #🗽・new-york: 4 posts
     3. #🤖・ai-jobs: 3 posts
     4. #💻・remote-usa: 3 posts
     5. #🌉・san-francisco: 2 posts
[2026-01-16T04:49:22.605Z] [BOT] [STATS] Channel stats saved
[2026-01-16T04:49:24.627Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2461) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*