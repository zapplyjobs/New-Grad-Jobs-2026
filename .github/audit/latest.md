# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T18:44:11.048Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T18:43:27.364Z] ========================================
[2026-01-03T18:43:27.366Z] Discord Bot Execution Log
[2026-01-03T18:43:27.366Z] Environment: GitHub Actions
[2026-01-03T18:43:27.366Z] Node Version: v20.19.6
[2026-01-03T18:43:27.366Z] ========================================
[2026-01-03T18:43:27.366Z] Environment Variables Check:
[2026-01-03T18:43:27.366Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T18:43:27.367Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T18:43:27.367Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T18:43:27.367Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T18:43:27.367Z] 
Multi-Channel Configuration:
[2026-01-03T18:43:27.367Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T18:43:27.367Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T18:43:27.367Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T18:43:27.367Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T18:43:27.367Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T18:43:27.367Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T18:43:27.367Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T18:43:27.367Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T18:43:27.368Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T18:43:27.368Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T18:43:27.368Z] 
Data Files Check:
[2026-01-03T18:43:27.369Z] .github/data/new_jobs.json: ✅ Exists (10 items, 126195 bytes)
[2026-01-03T18:43:27.371Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 356592 bytes)
[2026-01-03T18:43:27.371Z] 
========================================
[2026-01-03T18:43:27.372Z] Starting Enhanced Discord Bot...
[2026-01-03T18:43:27.372Z] ========================================
[2026-01-03T18:43:27.891Z] [BOT] ✅ Loaded V2 database: 693 jobs
[2026-01-03T18:43:29.049Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T18:43:29.050Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T18:43:29.050Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T18:43:29.051Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T18:43:29.121Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T18:43:29.214Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T18:43:29.217Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T18:43:29.217Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T18:43:29.218Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T18:43:29.218Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2026-01-03T18:43:29.218Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Enterprise Customer Success Manager @ brex: salt lake city, utah, united states, san francisco, california, united states, new york, new york, united states, seattle, washington, united states
⏸️ Limiting to 10 jobs this run, 3 deferred for next run
📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T18:43:29.223Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T18:43:29.224Z] [BOT] 📍 [ROUTING] "GTM Partner Enablement" @ anthropic
[2026-01-03T18:43:29.224Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T18:43:29.228Z] [BOT ERROR] (node:2330) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T18:43:29.572Z] [BOT] ✅ Created forum post: 🏢 GTM Partner Enablement @ anthropic in #💲・sales-jobs
[2026-01-03T18:43:29.572Z] [BOT] ✅ Industry: GTM Partner Enablement @ anthropic
[2026-01-03T18:43:31.321Z] [BOT] ✅ Created forum post: 🏢 GTM Partner Enablement @ anthropic in #🌉・san-francisco
[2026-01-03T18:43:31.322Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T18:43:32.822Z] [BOT] 💾 Marked as posted: GTM Partner Enablement @ anthropic (instance #1)
[2026-01-03T18:43:32.822Z] [BOT] 💾 BEFORE ARCHIVING: 694 jobs in database
[2026-01-03T18:43:32.823Z] [BOT] ✅ No jobs to archive (all 694 jobs within 7-day window)
[2026-01-03T18:43:32.832Z] [BOT] 💾 Saved posted_jobs.json: 694 active jobs
[2026-01-03T18:43:32.832Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:43:32.833Z] [BOT] 📍 [ROUTING] "Enterprise Customer Success Manager" @ brex
[2026-01-03T18:43:32.833Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T18:43:33.034Z] [BOT] ✅ Created forum post: 🏢 Enterprise Customer Success Manager @ brex in #💲・sales-jobs
[2026-01-03T18:43:33.034Z] [BOT] ✅ Industry: Enterprise Customer Success Manager @ brex
[2026-01-03T18:43:34.807Z] [BOT] ✅ Created forum post: 🏢 Enterprise Customer Success Manager @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T18:43:36.306Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager @ brex (instance #1)
[2026-01-03T18:43:36.306Z] [BOT] 💾 BEFORE ARCHIVING: 695 jobs in database
[2026-01-03T18:43:36.307Z] [BOT] ✅ No jobs to archive (all 695 jobs within 7-day window)
[2026-01-03T18:43:36.312Z] [BOT] 💾 Saved posted_jobs.json: 695 active jobs
[2026-01-03T18:43:36.312Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:43:36.312Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager @ brex (instance #1)
[2026-01-03T18:43:36.312Z] [BOT] 💾 BEFORE ARCHIVING: 696 jobs in database
[2026-01-03T18:43:36.313Z] [BOT] ✅ No jobs to archive (all 696 jobs within 7-day window)
[2026-01-03T18:43:36.317Z] [BOT] 💾 Saved posted_jobs.json: 696 active jobs
[2026-01-03T18:43:36.318Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Enterprise Customer Success Manager @ brex (instance #1)
[2026-01-03T18:43:36.318Z] [BOT] 💾 BEFORE ARCHIVING: 697 jobs in database
[2026-01-03T18:43:36.318Z] [BOT] ✅ No jobs to archive (all 697 jobs within 7-day window)
[2026-01-03T18:43:36.323Z] [BOT] 💾 Saved posted_jobs.json: 697 active jobs
[2026-01-03T18:43:36.323Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Enterprise Customer Success Manager @ brex (instance #1)
[2026-01-03T18:43:36.323Z] [BOT] 💾 BEFORE ARCHIVING: 698 jobs in database
[2026-01-03T18:43:36.324Z] [BOT] ✅ No jobs to archive (all 698 jobs within 7-day window)
[2026-01-03T18:43:36.328Z] [BOT] 💾 Saved posted_jobs.json: 698 active jobs
[2026-01-03T18:43:36.328Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:43:36.328Z] [BOT] 📍 [ROUTING] "Customer Solution Architect Team Lead (AMER)" @ supabase
[2026-01-03T18:43:36.328Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T18:43:36.558Z] [BOT] ✅ Created forum post: 🏢 Customer Solution Architect Team Lead (AMER) @ supabase in #💲・sales-jobs
  ✅ Industry: Customer Solution Architect Team Lead (AMER) @ supabase
[2026-01-03T18:43:38.059Z] [BOT] 💾 Marked as posted: Customer Solution Architect Team Lead (AMER) @ supabase (instance #1)
[2026-01-03T18:43:38.059Z] [BOT] 💾 BEFORE ARCHIVING: 699 jobs in database
[2026-01-03T18:43:38.059Z] [BOT] ✅ No jobs to archive (all 699 jobs within 7-day window)
[2026-01-03T18:43:38.064Z] [BOT] 💾 Saved posted_jobs.json: 699 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:43:41.065Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T18:43:41.066Z] [BOT] 📍 [ROUTING] "GM, AI Foundation" @ spotify
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T18:43:41.066Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T18:43:41.280Z] [BOT] ✅ Created forum post: 🏢 GM, AI Foundation @ spotify in #🤖・ai-jobs
  ✅ Industry: GM, AI Foundation @ spotify
[2026-01-03T18:43:43.315Z] [BOT] ✅ Created forum post: 🏢 GM, AI Foundation @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T18:43:44.815Z] [BOT] 💾 Marked as posted: GM, AI Foundation @ spotify (instance #1)
[2026-01-03T18:43:44.816Z] [BOT] 💾 BEFORE ARCHIVING: 700 jobs in database
[2026-01-03T18:43:44.816Z] [BOT] ✅ No jobs to archive (all 700 jobs within 7-day window)
[2026-01-03T18:43:44.822Z] [BOT] 💾 Saved posted_jobs.json: 700 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:43:47.823Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T18:43:47.824Z] [BOT] 📍 [ROUTING] "Director of Product Management, Learning" @ duolingo
[2026-01-03T18:43:47.824Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T18:43:48.198Z] [BOT] ✅ Created forum post: 🏢 Director of Product Management, Learning @ duolingo in #💻・tech-jobs
  ✅ Industry: Director of Product Management, Learning @ duolingo
[2026-01-03T18:43:49.911Z] [BOT] ✅ Created forum post: 🏢 Director of Product Management, Learning @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T18:43:51.413Z] [BOT] 💾 Marked as posted: Director of Product Management, Learning @ duolingo (instance #1)
[2026-01-03T18:43:51.413Z] [BOT] 💾 BEFORE ARCHIVING: 701 jobs in database
[2026-01-03T18:43:51.414Z] [BOT] ✅ No jobs to archive (all 701 jobs within 7-day window)
[2026-01-03T18:43:51.420Z] [BOT] 💾 Saved posted_jobs.json: 701 active jobs
[2026-01-03T18:43:51.420Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:43:54.420Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-03T18:43:54.420Z] [BOT] 📍 [ROUTING] "Senior Product Manager, Monetization" @ duolingo
   Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-03T18:43:54.726Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Monetization @ duolingo in #📦・product-jobs
  ✅ Industry: Senior Product Manager, Monetization @ duolingo
[2026-01-03T18:43:56.437Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Monetization @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T18:43:57.937Z] [BOT] 💾 Marked as posted: Senior Product Manager, Monetization @ duolingo (instance #1)
[2026-01-03T18:43:57.938Z] [BOT] 💾 BEFORE ARCHIVING: 702 jobs in database
[2026-01-03T18:43:57.938Z] [BOT] ✅ No jobs to archive (all 702 jobs within 7-day window)
[2026-01-03T18:43:57.945Z] [BOT] 💾 Saved posted_jobs.json: 702 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:44:00.945Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T18:44:00.945Z] [BOT] 📍 [ROUTING] "Product Marketing Manager, Ads " @ discord
[2026-01-03T18:44:00.945Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T18:44:01.185Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Ads  @ discord in #📣・marketing-jobs
[2026-01-03T18:44:01.186Z] [BOT] ✅ Industry: Product Marketing Manager, Ads  @ discord
[2026-01-03T18:44:03.193Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Ads  @ discord in #🌉・san-francisco
[2026-01-03T18:44:03.193Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T18:44:04.693Z] [BOT] 💾 Marked as posted: Product Marketing Manager, Ads  @ discord (instance #1)
[2026-01-03T18:44:04.693Z] [BOT] 💾 BEFORE ARCHIVING: 703 jobs in database
[2026-01-03T18:44:04.694Z] [BOT] ✅ No jobs to archive (all 703 jobs within 7-day window)
[2026-01-03T18:44:04.699Z] [BOT] 💾 Saved posted_jobs.json: 703 active jobs
[2026-01-03T18:44:04.699Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:44:07.700Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2026-01-03T18:44:07.701Z] [BOT] ⏭️  Skipping duplicate: JID_4fd6c10c (posted within 7 days)
[2026-01-03T18:44:07.701Z] [BOT] ⏭️  Skipping duplicate: JID_b8d16eff (posted within 7 days)
[2026-01-03T18:44:07.701Z] [BOT] ⏭️  Skipping duplicate: JID_a9cdfa5a (posted within 7 days)
[2026-01-03T18:44:07.701Z] [BOT] ⏭️  Skipping duplicate: JID_4d632599 (posted within 7 days)
[2026-01-03T18:44:07.701Z] [BOT] ⏭️  Skipping duplicate: JID_2514eec0 (posted within 7 days)
⏭️  Skipping duplicate: JID_b0c0d61c (posted within 7 days)
[2026-01-03T18:44:07.701Z] [BOT] ⏭️  Skipping duplicate: JID_c7bdff19 (posted within 7 days)
[2026-01-03T18:44:07.755Z] [BOT] ✅ Loaded pending queue: 596 total (576 pending, 20 enriched, 0 posted)
[2026-01-03T18:44:07.813Z] [BOT] ✅ Saved pending queue: 596 total (576 pending, 13 enriched, 7 posted)
📋 Updated queue: marked 7 jobs as posted
[2026-01-03T18:44:07.813Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T18:44:07.858Z] [BOT] 📂 Loaded 1650 existing routing entries
[2026-01-03T18:44:07.906Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-03T18:44:07.907Z] [BOT] New entries: 7
   Total entries: 1657
   Timestamp: 2026-01-03T18:44:07.899Z
[2026-01-03T18:44:07.907Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T18:44:07.907Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-03T18:44:07.907Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-03T18:44:07.907Z] [BOT] Total posts: 13
   Channels used: 8
   Top channels:
[2026-01-03T18:44:07.907Z] [BOT] 1. #💲・sales-jobs: 3 posts
     2. #🗽・new-york: 3 posts
     3. #🌉・san-francisco: 2 posts
     4. #💻・remote-usa: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-03T18:44:07.908Z] [BOT] [STATS] Channel stats saved
[2026-01-03T18:44:09.923Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2330) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*