# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T17:49:56.764Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T17:49:06.164Z] ========================================
[2026-01-03T17:49:06.166Z] Discord Bot Execution Log
[2026-01-03T17:49:06.166Z] Environment: GitHub Actions
[2026-01-03T17:49:06.166Z] Node Version: v20.19.6
[2026-01-03T17:49:06.166Z] ========================================
[2026-01-03T17:49:06.166Z] Environment Variables Check:
[2026-01-03T17:49:06.166Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T17:49:06.167Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T17:49:06.167Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T17:49:06.167Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T17:49:06.167Z] 
Multi-Channel Configuration:
[2026-01-03T17:49:06.167Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T17:49:06.167Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T17:49:06.167Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T17:49:06.167Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T17:49:06.167Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T17:49:06.167Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T17:49:06.167Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T17:49:06.167Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T17:49:06.168Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T17:49:06.168Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T17:49:06.168Z] 
Data Files Check:
[2026-01-03T17:49:06.169Z] .github/data/new_jobs.json: ✅ Exists (10 items, 135923 bytes)
[2026-01-03T17:49:06.172Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 342111 bytes)
[2026-01-03T17:49:06.172Z] 
========================================
[2026-01-03T17:49:06.172Z] Starting Enhanced Discord Bot...
[2026-01-03T17:49:06.172Z] ========================================
[2026-01-03T17:49:06.719Z] [BOT] ✅ Loaded V2 database: 663 jobs
[2026-01-03T17:49:07.351Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T17:49:07.352Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T17:49:07.352Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T17:49:07.353Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T17:49:07.423Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T17:49:07.512Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T17:49:07.514Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T17:49:07.515Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T17:49:07.515Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T17:49:07.515Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-03T17:49:07.516Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Growth Marketing Manager @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T17:49:07.520Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-03T17:49:07.521Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer, Personalization" @ spotify
[2026-01-03T17:49:07.521Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-03T17:49:07.525Z] [BOT ERROR] (node:2537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T17:49:07.824Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, Personalization @ spotify in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer, Personalization @ spotify
[2026-01-03T17:49:10.928Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, Personalization @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T17:49:12.429Z] [BOT] 💾 Marked as posted: Machine Learning Engineer, Personalization @ spotify (instance #1)
[2026-01-03T17:49:12.430Z] [BOT] 💾 BEFORE ARCHIVING: 664 jobs in database
[2026-01-03T17:49:12.430Z] [BOT] ✅ No jobs to archive (all 664 jobs within 7-day window)
[2026-01-03T17:49:12.439Z] [BOT] 💾 Saved posted_jobs.json: 664 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T17:49:12.439Z] [BOT] 📍 [ROUTING] "Product Manager - Podcast" @ spotify
[2026-01-03T17:49:12.439Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-03T17:49:12.737Z] [BOT] ✅ Created forum post: 🏢 Product Manager - Podcast @ spotify in #🤖・ai-jobs
  ✅ Industry: Product Manager - Podcast @ spotify
[2026-01-03T17:49:14.518Z] [BOT] ✅ Created forum post: 🏢 Product Manager - Podcast @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T17:49:16.019Z] [BOT] 💾 Marked as posted: Product Manager - Podcast @ spotify (instance #1)
[2026-01-03T17:49:16.019Z] [BOT] 💾 BEFORE ARCHIVING: 665 jobs in database
[2026-01-03T17:49:16.019Z] [BOT] ✅ No jobs to archive (all 665 jobs within 7-day window)
[2026-01-03T17:49:16.024Z] [BOT] 💾 Saved posted_jobs.json: 665 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T17:49:19.024Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-03T17:49:19.025Z] [BOT] 📍 [ROUTING] "Compliance Manager, Customer Trust & Third Party Risk" @ figma
[2026-01-03T17:49:19.025Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T17:49:19.220Z] [BOT] ✅ Created forum post: 🏢 Compliance Manager, Customer Trust & Third Party Risk @ figma in #💲・sales-jobs
  ✅ Industry: Compliance Manager, Customer Trust & Third Party Risk @ figma
[2026-01-03T17:49:20.931Z] [BOT] ✅ Created forum post: 🏢 Compliance Manager, Customer Trust & Third Party Risk @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T17:49:22.432Z] [BOT] 💾 Marked as posted: Compliance Manager, Customer Trust & Third Party Risk @ figma (instance #1)
[2026-01-03T17:49:22.432Z] [BOT] 💾 BEFORE ARCHIVING: 666 jobs in database
[2026-01-03T17:49:22.433Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-03T17:49:22.438Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T17:49:22.439Z] [BOT] 📍 [ROUTING] "Senior Manager, Revenue Transformation" @ figma
[2026-01-03T17:49:22.439Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T17:49:22.706Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Revenue Transformation @ figma in #💲・sales-jobs
  ✅ Industry: Senior Manager, Revenue Transformation @ figma
[2026-01-03T17:49:24.813Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Revenue Transformation @ figma in #🌉・san-francisco
[2026-01-03T17:49:24.813Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:49:26.314Z] [BOT] 💾 Marked as posted: Senior Manager, Revenue Transformation @ figma (instance #1)
[2026-01-03T17:49:26.314Z] [BOT] 💾 BEFORE ARCHIVING: 667 jobs in database
[2026-01-03T17:49:26.315Z] [BOT] ✅ No jobs to archive (all 667 jobs within 7-day window)
[2026-01-03T17:49:26.321Z] [BOT] 💾 Saved posted_jobs.json: 667 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T17:49:29.322Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-03T17:49:29.322Z] [BOT] 📍 [ROUTING] "Senior Growth Marketing Manager" @ brex
[2026-01-03T17:49:29.323Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T17:49:29.617Z] [BOT] ✅ Created forum post: 🏢 Senior Growth Marketing Manager @ brex in #📣・marketing-jobs
  ✅ Industry: Senior Growth Marketing Manager @ brex
[2026-01-03T17:49:31.397Z] [BOT] ✅ Created forum post: 🏢 Senior Growth Marketing Manager @ brex in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-03T17:49:32.898Z] [BOT] 💾 Marked as posted: Senior Growth Marketing Manager @ brex (instance #1)
[2026-01-03T17:49:32.898Z] [BOT] 💾 BEFORE ARCHIVING: 668 jobs in database
[2026-01-03T17:49:32.899Z] [BOT] ✅ No jobs to archive (all 668 jobs within 7-day window)
[2026-01-03T17:49:32.904Z] [BOT] 💾 Saved posted_jobs.json: 668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T17:49:32.904Z] [BOT] 💾 Marked as posted: Senior Growth Marketing Manager @ brex (instance #1)
[2026-01-03T17:49:32.905Z] [BOT] 💾 BEFORE ARCHIVING: 669 jobs in database
[2026-01-03T17:49:32.905Z] [BOT] ✅ No jobs to archive (all 669 jobs within 7-day window)
[2026-01-03T17:49:32.911Z] [BOT] 💾 Saved posted_jobs.json: 669 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T17:49:32.911Z] [BOT] 💾 Marked as posted: Senior Growth Marketing Manager @ brex (instance #1)
[2026-01-03T17:49:32.911Z] [BOT] 💾 BEFORE ARCHIVING: 670 jobs in database
[2026-01-03T17:49:32.911Z] [BOT] ✅ No jobs to archive (all 670 jobs within 7-day window)
[2026-01-03T17:49:32.917Z] [BOT] 💾 Saved posted_jobs.json: 670 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T17:49:32.918Z] [BOT] 📍 [ROUTING] "Director, People Business Partners" @ discord
[2026-01-03T17:49:32.918Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T17:49:33.268Z] [BOT] ✅ Created forum post: 🏢 Director, People Business Partners @ discord in #📣・marketing-jobs
[2026-01-03T17:49:33.268Z] [BOT] ✅ Industry: Director, People Business Partners @ discord
[2026-01-03T17:49:35.067Z] [BOT] ✅ Created forum post: 🏢 Director, People Business Partners @ discord in #🌉・san-francisco
[2026-01-03T17:49:35.067Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:49:36.568Z] [BOT] 💾 Marked as posted: Director, People Business Partners @ discord (instance #1)
[2026-01-03T17:49:36.568Z] [BOT] 💾 BEFORE ARCHIVING: 671 jobs in database
[2026-01-03T17:49:36.568Z] [BOT] ✅ No jobs to archive (all 671 jobs within 7-day window)
[2026-01-03T17:49:36.574Z] [BOT] 💾 Saved posted_jobs.json: 671 active jobs
[2026-01-03T17:49:36.574Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:49:39.574Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-03T17:49:39.575Z] [BOT] 📍 [ROUTING] "Senior Manager, Treasury Operations" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-03T17:49:39.575Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T17:49:39.810Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Treasury Operations @ anthropic in #💰・finance-jobs
  ✅ Industry: Senior Manager, Treasury Operations @ anthropic
[2026-01-03T17:49:41.499Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Treasury Operations @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T17:49:43.000Z] [BOT] 💾 Marked as posted: Senior Manager, Treasury Operations @ anthropic (instance #1)
[2026-01-03T17:49:43.000Z] [BOT] 💾 BEFORE ARCHIVING: 672 jobs in database
[2026-01-03T17:49:43.000Z] [BOT] ✅ No jobs to archive (all 672 jobs within 7-day window)
[2026-01-03T17:49:43.011Z] [BOT] 💾 Saved posted_jobs.json: 672 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T17:49:46.012Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T17:49:46.012Z] [BOT] 📍 [ROUTING] "Senior Product Manager, Commerce" @ discord
[2026-01-03T17:49:46.012Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-03T17:49:46.553Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Commerce @ discord in #📈・JID_fb739488
  ✅ Industry: Senior Product Manager, Commerce @ discord
[2026-01-03T17:49:48.752Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Commerce @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T17:49:50.253Z] [BOT] 💾 Marked as posted: Senior Product Manager, Commerce @ discord (instance #1)
[2026-01-03T17:49:50.253Z] [BOT] 💾 BEFORE ARCHIVING: 673 jobs in database
[2026-01-03T17:49:50.254Z] [BOT] ✅ No jobs to archive (all 673 jobs within 7-day window)
[2026-01-03T17:49:50.259Z] [BOT] 💾 Saved posted_jobs.json: 673 active jobs
[2026-01-03T17:49:50.260Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:49:53.261Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-03T17:49:53.261Z] [BOT] ⏭️  Skipping duplicate: JID_f10069af (posted within 7 days)
[2026-01-03T17:49:53.261Z] [BOT] ⏭️  Skipping duplicate: JID_000d52dc (posted within 7 days)
[2026-01-03T17:49:53.261Z] [BOT] ⏭️  Skipping duplicate: JID_7ec2eb0c (posted within 7 days)
[2026-01-03T17:49:53.261Z] [BOT] ⏭️  Skipping duplicate: JID_f7ba943f (posted within 7 days)
[2026-01-03T17:49:53.262Z] [BOT] ⏭️  Skipping duplicate: JID_a95f4592 (posted within 7 days)
[2026-01-03T17:49:53.262Z] [BOT] ⏭️  Skipping duplicate: JID_3ade1c4e (posted within 7 days)
⏭️  Skipping duplicate: JID_9dceecac (posted within 7 days)
[2026-01-03T17:49:53.262Z] [BOT] ⏭️  Skipping duplicate: JID_a2a62cb6 (posted within 7 days)
[2026-01-03T17:49:53.322Z] [BOT] ✅ Loaded pending queue: 626 total (606 pending, 20 enriched, 0 posted)
[2026-01-03T17:49:53.382Z] [BOT] ✅ Saved pending queue: 626 total (606 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-03T17:49:53.383Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T17:49:53.429Z] [BOT] 📂 Loaded 1629 existing routing entries
[2026-01-03T17:49:53.479Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 1637
   Timestamp: 2026-01-03T17:49:53.471Z
[2026-01-03T17:49:53.479Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T17:49:53.479Z] [BOT] Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-03T17:49:53.480Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 16
   Channels used: 8
   Top channels:
[2026-01-03T17:49:53.480Z] [BOT] 1. #🌉・san-francisco: 5 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🗽・new-york: 2 posts
     4. #💲・sales-jobs: 2 posts
     5. #📣・marketing-jobs: 2 posts
[2026-01-03T17:49:53.480Z] [BOT] [STATS] Channel stats saved
[2026-01-03T17:49:55.496Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*