# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T07:45:33.111Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T07:44:43.559Z] ========================================
[2026-01-19T07:44:43.561Z] Discord Bot Execution Log
[2026-01-19T07:44:43.561Z] Environment: GitHub Actions
[2026-01-19T07:44:43.561Z] Node Version: v20.19.6
[2026-01-19T07:44:43.561Z] ========================================
[2026-01-19T07:44:43.561Z] Environment Variables Check:
[2026-01-19T07:44:43.561Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T07:44:43.561Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T07:44:43.561Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T07:44:43.561Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T07:44:43.561Z] 
Multi-Channel Configuration:
[2026-01-19T07:44:43.562Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T07:44:43.562Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T07:44:43.562Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T07:44:43.562Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T07:44:43.562Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T07:44:43.562Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T07:44:43.562Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T07:44:43.562Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T07:44:43.562Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T07:44:43.562Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T07:44:43.562Z] 
Data Files Check:
[2026-01-19T07:44:43.563Z] .github/data/new_jobs.json: ✅ Exists (10 items, 103658 bytes)
[2026-01-19T07:44:43.574Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1578188 bytes)
[2026-01-19T07:44:43.575Z] 
========================================
[2026-01-19T07:44:43.575Z] Starting Enhanced Discord Bot...
[2026-01-19T07:44:43.575Z] ========================================
[2026-01-19T07:44:44.050Z] [BOT] ✅ Loaded V2 database: 2900 jobs
[2026-01-19T07:44:44.496Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T07:44:44.496Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T07:44:44.497Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T07:44:44.658Z] [BOT] ✅ Loaded pending queue: 2828 total (2808 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence at Prairie View A&M University
[2026-01-19T07:44:44.661Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T07:44:44.662Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T07:44:44.662Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T07:44:44.663Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-19T07:44:44.663Z] [BOT] 📍 2 jobs with multiple locations:
   - Lead Counsel - NYC @ datadog: new york, new york, usa, remote
   - Senior Demand Generation Marketing Manager (Public Sector) @ datadog: remote, new york, new york, usa; san francisco, california, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-19T07:44:44.663Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T07:44:44.668Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-19T07:44:44.668Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence" @ ORG_2380d607 View A&M University
   Category: AI (matched: "machine learning")
[2026-01-19T07:44:44.668Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T07:44:44.672Z] [BOT ERROR] (node:2656) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T07:44:44.824Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence @ ORG_2380d607 View A&M Universit in #🤖・ai-jobs
[2026-01-19T07:44:44.824Z] [BOT] ✅ Industry: Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence @ ORG_2380d607 View A&M University
[2026-01-19T07:44:46.507Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence @ ORG_2380d607 View A&M Universit in #🤠・austin
[2026-01-19T07:44:46.508Z] [BOT] ✅ Location: 🤠・austin
[2026-01-19T07:44:48.008Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence @ ORG_2380d607 View A&M University (instance #1)
[2026-01-19T07:44:48.009Z] [BOT] 💾 BEFORE ARCHIVING: 2901 jobs in database
[2026-01-19T07:44:48.011Z] [BOT] ✅ No jobs to archive (all 2901 jobs within 7-day window)
[2026-01-19T07:44:48.031Z] [BOT] 💾 Saved posted_jobs.json: 2901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:44:48.032Z] [BOT] 📍 [ROUTING] "AI Data Specialist" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T07:44:48.284Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-01-19T07:44:48.285Z] [BOT] ✅ Industry: AI Data Specialist @ ORG_f3ae3598
[2026-01-19T07:44:49.786Z] [BOT] 💾 Marked as posted: AI Data Specialist @ ORG_f3ae3598 (instance #1)
💾 BEFORE ARCHIVING: 2902 jobs in database
[2026-01-19T07:44:49.789Z] [BOT] ✅ No jobs to archive (all 2902 jobs within 7-day window)
[2026-01-19T07:44:49.805Z] [BOT] 💾 Saved posted_jobs.json: 2902 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:44:49.805Z] [BOT] 📍 [ROUTING] "Business Data Analyst" @ ORG_625eaf40
   Category: AI (matched: "machine learning")
[2026-01-19T07:44:49.805Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T07:44:49.977Z] [BOT] ✅ Created forum post: 🏢 Business Data Analyst @ ORG_625eaf40 in #🤖・ai-jobs
  ✅ Industry: Business Data Analyst @ ORG_625eaf40
[2026-01-19T07:44:51.737Z] [BOT] ✅ Created forum post: 🏢 Business Data Analyst @ ORG_625eaf40 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-19T07:44:53.239Z] [BOT] 💾 Marked as posted: Business Data Analyst @ ORG_625eaf40 (instance #1)
[2026-01-19T07:44:53.239Z] [BOT] 💾 BEFORE ARCHIVING: 2903 jobs in database
[2026-01-19T07:44:53.241Z] [BOT] ✅ No jobs to archive (all 2903 jobs within 7-day window)
[2026-01-19T07:44:53.260Z] [BOT] 💾 Saved posted_jobs.json: 2903 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:44:53.261Z] [BOT] 📍 [ROUTING] "Associate Operations Analyst" @ ORG_bac0256c
   Category: AI (matched: "artificial intelligence")
[2026-01-19T07:44:53.262Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T07:44:53.441Z] [BOT] ✅ Created forum post: 🏢 Associate Operations Analyst @ ORG_bac0256c in #🤖・ai-jobs
  ✅ Industry: Associate Operations Analyst @ ORG_bac0256c
[2026-01-19T07:44:55.236Z] [BOT] ✅ Created forum post: 🏢 Associate Operations Analyst @ ORG_bac0256c in #🗽・new-york
[2026-01-19T07:44:55.236Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-19T07:44:56.738Z] [BOT] 💾 Marked as posted: Associate Operations Analyst @ ORG_bac0256c (instance #1)
[2026-01-19T07:44:56.738Z] [BOT] 💾 BEFORE ARCHIVING: 2904 jobs in database
[2026-01-19T07:44:56.740Z] [BOT] ✅ No jobs to archive (all 2904 jobs within 7-day window)
[2026-01-19T07:44:56.758Z] [BOT] 💾 Saved posted_jobs.json: 2904 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:44:59.759Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T07:44:59.759Z] [BOT] 📍 [ROUTING] "Data Engineer, Economic Research" @ anthropic
[2026-01-19T07:44:59.759Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T07:44:59.977Z] [BOT] ✅ Created forum post: 🏢 Data Engineer, Economic Research @ anthropic in #📈・JID_fb739488
  ✅ Industry: Data Engineer, Economic Research @ anthropic
[2026-01-19T07:45:01.634Z] [BOT] ✅ Created forum post: 🏢 Data Engineer, Economic Research @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T07:45:03.136Z] [BOT] 💾 Marked as posted: Data Engineer, Economic Research @ anthropic (instance #1)
[2026-01-19T07:45:03.136Z] [BOT] 💾 BEFORE ARCHIVING: 2905 jobs in database
[2026-01-19T07:45:03.138Z] [BOT] ✅ No jobs to archive (all 2905 jobs within 7-day window)
[2026-01-19T07:45:03.156Z] [BOT] 💾 Saved posted_jobs.json: 2905 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:45:06.157Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-19T07:45:06.158Z] [BOT] 📍 [ROUTING] "Engineering Associate - Java API" @ ORG_332e04b7 Fargo
[2026-01-19T07:45:06.158Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T07:45:06.367Z] [BOT] ✅ Created forum post: 🏢 Engineering Associate - Java API @ ORG_332e04b7 Fargo in #💻・tech-jobs
  ✅ Industry: Engineering Associate - Java API @ ORG_332e04b7 Fargo
[2026-01-19T07:45:08.368Z] [BOT] ✅ Created forum post: 🏢 Engineering Associate - Java API @ ORG_332e04b7 Fargo in #🦢・los-angeles
[2026-01-19T07:45:08.368Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-19T07:45:09.868Z] [BOT] 💾 Marked as posted: Engineering Associate - Java API @ ORG_332e04b7 Fargo (instance #1)
[2026-01-19T07:45:09.868Z] [BOT] 💾 BEFORE ARCHIVING: 2906 jobs in database
[2026-01-19T07:45:09.871Z] [BOT] ✅ No jobs to archive (all 2906 jobs within 7-day window)
[2026-01-19T07:45:09.893Z] [BOT] 💾 Saved posted_jobs.json: 2906 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:45:09.893Z] [BOT] 📍 [ROUTING] "Geoint Analyst – Entry Level" @ ORG_84877948 Enterprises, LLC
   Category: TECH (default)
[2026-01-19T07:45:09.893Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T07:45:10.061Z] [BOT] ✅ Created forum post: 🏢 Geoint Analyst – Entry Level @ ORG_84877948 Enterprises, LLC in #💻・tech-jobs
[2026-01-19T07:45:10.061Z] [BOT] ✅ Industry: Geoint Analyst – Entry Level @ ORG_84877948 Enterprises, LLC
[2026-01-19T07:45:11.809Z] [BOT] ✅ Created forum post: 🏢 Geoint Analyst – Entry Level @ ORG_84877948 Enterprises, LLC in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T07:45:13.309Z] [BOT] 💾 Marked as posted: Geoint Analyst – Entry Level @ ORG_84877948 Enterprises, LLC (instance #1)
[2026-01-19T07:45:13.309Z] [BOT] 💾 BEFORE ARCHIVING: 2907 jobs in database
[2026-01-19T07:45:13.312Z] [BOT] ✅ No jobs to archive (all 2907 jobs within 7-day window)
[2026-01-19T07:45:13.331Z] [BOT] 💾 Saved posted_jobs.json: 2907 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:45:16.333Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-19T07:45:16.333Z] [BOT] 📍 [ROUTING] "Lead Counsel - NYC" @ datadog
[2026-01-19T07:45:16.333Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T07:45:16.638Z] [BOT] ✅ Created forum post: 🏢 Lead Counsel - NYC @ datadog in #💲・sales-jobs
[2026-01-19T07:45:16.638Z] [BOT] ✅ Industry: Lead Counsel - NYC @ datadog
[2026-01-19T07:45:18.338Z] [BOT] ✅ Created forum post: 🏢 Lead Counsel - NYC @ datadog in #🗽・new-york
[2026-01-19T07:45:18.338Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-19T07:45:19.840Z] [BOT] 💾 Marked as posted: Lead Counsel - NYC @ datadog (instance #1)
[2026-01-19T07:45:19.840Z] [BOT] 💾 BEFORE ARCHIVING: 2908 jobs in database
[2026-01-19T07:45:19.842Z] [BOT] ✅ No jobs to archive (all 2908 jobs within 7-day window)
[2026-01-19T07:45:19.860Z] [BOT] 💾 Saved posted_jobs.json: 2908 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:45:19.860Z] [BOT] 💾 Marked as posted: Lead Counsel @ datadog (instance #1)
[2026-01-19T07:45:19.860Z] [BOT] 💾 BEFORE ARCHIVING: 2909 jobs in database
[2026-01-19T07:45:19.862Z] [BOT] ✅ No jobs to archive (all 2909 jobs within 7-day window)
[2026-01-19T07:45:19.881Z] [BOT] 💾 Saved posted_jobs.json: 2909 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:45:19.881Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Asset & Wealth Management" @ anthropic
[2026-01-19T07:45:19.882Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T07:45:20.051Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Asset & Wealth Management @ anthropic in #💲・sales-jobs
  ✅ Industry: Strategic Account Executive, Asset & Wealth Management @ anthropic
[2026-01-19T07:45:21.828Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Asset & Wealth Management @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T07:45:23.330Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Asset & Wealth Management @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 2910 jobs in database
[2026-01-19T07:45:23.332Z] [BOT] ✅ No jobs to archive (all 2910 jobs within 7-day window)
[2026-01-19T07:45:23.349Z] [BOT] 💾 Saved posted_jobs.json: 2910 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:45:23.350Z] [BOT] 📍 [ROUTING] "Sr Enterprise Renewals Account Executive" @ samsara
   Category: SALES (matched: "sales")
[2026-01-19T07:45:23.350Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T07:45:23.507Z] [BOT] ✅ Created forum post: 🏢 Sr Enterprise Renewals Account Executive @ samsara in #💲・sales-jobs
  ✅ Industry: Sr Enterprise Renewals Account Executive @ samsara
[2026-01-19T07:45:25.271Z] [BOT] ✅ Created forum post: 🏢 Sr Enterprise Renewals Account Executive @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T07:45:26.772Z] [BOT] 💾 Marked as posted: Sr Enterprise Renewals Account Executive @ samsara (instance #1)
💾 BEFORE ARCHIVING: 2911 jobs in database
[2026-01-19T07:45:26.774Z] [BOT] ✅ No jobs to archive (all 2911 jobs within 7-day window)
[2026-01-19T07:45:26.790Z] [BOT] 💾 Saved posted_jobs.json: 2911 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:45:29.791Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-19T07:45:29.792Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-pvamu_external-JID_08c2ea1a-1_r-089887-1 (posted within 7 days)
[2026-01-19T07:45:29.792Z] [BOT] ⏭️  Skipping duplicate: JID_b2ca781f (posted within 7 days)
[2026-01-19T07:45:29.792Z] [BOT] ⏭️  Skipping duplicate: JID_1ba1fe85-api_r-516000 (posted within 7 days)
[2026-01-19T07:45:29.792Z] [BOT] ⏭️  Skipping duplicate: JID_07949c7a (posted within 7 days)
[2026-01-19T07:45:29.792Z] [BOT] ⏭️  Skipping duplicate: JID_7ec53afc (posted within 7 days)
[2026-01-19T07:45:29.793Z] [BOT] ⏭️  Skipping duplicate: JID_72796aa9 (posted within 7 days)
[2026-01-19T07:45:29.793Z] [BOT] ⏭️  Skipping duplicate: JID_85edbc51 (posted within 7 days)
[2026-01-19T07:45:29.793Z] [BOT] ⏭️  Skipping duplicate: JID_2d377cbc (posted within 7 days)
[2026-01-19T07:45:29.793Z] [BOT] ⏭️  Skipping duplicate: JID_abdacdd5-_jr1078475 (posted within 7 days)
[2026-01-19T07:45:29.793Z] [BOT] ⏭️  Skipping duplicate: JID_bab53bb3 (posted within 7 days)
[2026-01-19T07:45:29.950Z] [BOT] ✅ Loaded pending queue: 2828 total (2808 pending, 20 enriched, 0 posted)
[2026-01-19T07:45:30.126Z] [BOT] ✅ Saved pending queue: 2828 total (2808 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-19T07:45:30.126Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-19T07:45:30.192Z] [BOT] 📂 Loaded 5055 existing routing entries
[2026-01-19T07:45:30.262Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5065
   Timestamp: 2026-01-19T07:45:30.243Z
[2026-01-19T07:45:30.263Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 19
[2026-01-19T07:45:30.263Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-19T07:45:30.263Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T07:45:30.263Z] [BOT] Last cleanup: Never
[2026-01-19T07:45:30.263Z] [BOT] Total posts: 19
   Channels used: 10
   Top channels:
[2026-01-19T07:45:30.263Z] [BOT] 1. #🤖・ai-jobs: 4 posts
     2. #🌉・san-francisco: 3 posts
     3. #💲・sales-jobs: 3 posts
     4. #🗽・new-york: 2 posts
     5. #💻・tech-jobs: 2 posts
[2026-01-19T07:45:30.264Z] [BOT] [STATS] Channel stats saved
[2026-01-19T07:45:32.283Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2656) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*