# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T18:25:55.510Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T18:25:17.988Z] ========================================
[2026-01-03T18:25:17.990Z] Discord Bot Execution Log
[2026-01-03T18:25:17.990Z] Environment: GitHub Actions
[2026-01-03T18:25:17.990Z] Node Version: v20.19.6
[2026-01-03T18:25:17.990Z] ========================================
[2026-01-03T18:25:17.990Z] Environment Variables Check:
[2026-01-03T18:25:17.990Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T18:25:17.991Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T18:25:17.991Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T18:25:17.991Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T18:25:17.991Z] 
Multi-Channel Configuration:
[2026-01-03T18:25:17.991Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T18:25:17.991Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T18:25:17.991Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T18:25:17.991Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T18:25:17.991Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T18:25:17.991Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T18:25:17.991Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T18:25:17.991Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T18:25:17.991Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T18:25:17.992Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T18:25:17.992Z] 
Data Files Check:
[2026-01-03T18:25:17.993Z] .github/data/new_jobs.json: ✅ Exists (10 items, 143209 bytes)
[2026-01-03T18:25:17.996Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 351825 bytes)
[2026-01-03T18:25:17.996Z] 
========================================
[2026-01-03T18:25:17.996Z] Starting Enhanced Discord Bot...
[2026-01-03T18:25:17.996Z] ========================================
[2026-01-03T18:25:18.462Z] [BOT] ✅ Loaded V2 database: 683 jobs
[2026-01-03T18:25:19.079Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T18:25:19.079Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T18:25:19.080Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T18:25:19.083Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T18:25:19.160Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T18:25:19.244Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T18:25:19.246Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T18:25:19.246Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T18:25:19.246Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T18:25:19.247Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2026-01-03T18:25:19.247Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Senior Product Manager, Math @ duolingo: new york, seattle
   - Senior Solutions Consultant, Enterprise @ brex: salt lake city, utah, united states, seattle, washington, united states, san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 4 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T18:25:19.251Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-03T18:25:19.251Z] [BOT] 📍 [ROUTING] "Manager, Inside Sales" @ figma
   Category: SALES (matched: "sales")
[2026-01-03T18:25:19.251Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T18:25:19.256Z] [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T18:25:19.562Z] [BOT] ✅ Created forum post: 🏢 Manager, Inside Sales @ figma in #💲・sales-jobs
[2026-01-03T18:25:19.562Z] [BOT] ✅ Industry: Manager, Inside Sales @ figma
[2026-01-03T18:25:21.321Z] [BOT] ✅ Created forum post: 🏢 Manager, Inside Sales @ figma in #🗽・new-york
[2026-01-03T18:25:21.322Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T18:25:22.821Z] [BOT] 💾 Marked as posted: Manager, Inside Sales @ figma (instance #1)
[2026-01-03T18:25:22.821Z] [BOT] 💾 BEFORE ARCHIVING: 684 jobs in database
[2026-01-03T18:25:22.822Z] [BOT] ✅ No jobs to archive (all 684 jobs within 7-day window)
[2026-01-03T18:25:22.829Z] [BOT] 💾 Saved posted_jobs.json: 684 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:25:22.829Z] [BOT] 📍 [ROUTING] "Senior Solutions Consultant, Enterprise" @ brex
   Category: SALES (matched: "sales")
[2026-01-03T18:25:22.829Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T18:25:23.275Z] [BOT] ✅ Created forum post: 🏢 Senior Solutions Consultant, Enterprise @ brex in #💲・sales-jobs
  ✅ Industry: Senior Solutions Consultant, Enterprise @ brex
[2026-01-03T18:25:24.972Z] [BOT] ✅ Created forum post: 🏢 Senior Solutions Consultant, Enterprise @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T18:25:26.474Z] [BOT] 💾 Marked as posted: Senior Solutions Consultant, Enterprise @ brex (instance #1)
💾 BEFORE ARCHIVING: 685 jobs in database
[2026-01-03T18:25:26.474Z] [BOT] ✅ No jobs to archive (all 685 jobs within 7-day window)
[2026-01-03T18:25:26.479Z] [BOT] 💾 Saved posted_jobs.json: 685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:25:26.480Z] [BOT] 💾 Marked as posted: Senior Solutions Consultant, Enterprise @ brex (instance #1)
[2026-01-03T18:25:26.480Z] [BOT] 💾 BEFORE ARCHIVING: 686 jobs in database
[2026-01-03T18:25:26.480Z] [BOT] ✅ No jobs to archive (all 686 jobs within 7-day window)
[2026-01-03T18:25:26.485Z] [BOT] 💾 Saved posted_jobs.json: 686 active jobs
[2026-01-03T18:25:26.485Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Solutions Consultant, Enterprise @ brex (instance #1)
[2026-01-03T18:25:26.485Z] [BOT] 💾 BEFORE ARCHIVING: 687 jobs in database
[2026-01-03T18:25:26.486Z] [BOT] ✅ No jobs to archive (all 687 jobs within 7-day window)
[2026-01-03T18:25:26.490Z] [BOT] 💾 Saved posted_jobs.json: 687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:25:26.490Z] [BOT] 💾 Marked as posted: Senior Solutions Consultant, Enterprise @ brex (instance #1)
💾 BEFORE ARCHIVING: 688 jobs in database
[2026-01-03T18:25:26.490Z] [BOT] ✅ No jobs to archive (all 688 jobs within 7-day window)
[2026-01-03T18:25:26.494Z] [BOT] 💾 Saved posted_jobs.json: 688 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:25:29.496Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-03T18:25:29.497Z] [BOT] 📍 [ROUTING] "Senior Product Manager, Math" @ duolingo
[2026-01-03T18:25:29.497Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-03T18:25:29.719Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Math @ duolingo in #📦・product-jobs
  ✅ Industry: Senior Product Manager, Math @ duolingo
[2026-01-03T18:25:31.441Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Math @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T18:25:32.943Z] [BOT] 💾 Marked as posted: Senior Product Manager, Math @ duolingo (instance #1)
💾 BEFORE ARCHIVING: 689 jobs in database
[2026-01-03T18:25:32.944Z] [BOT] ✅ No jobs to archive (all 689 jobs within 7-day window)
[2026-01-03T18:25:32.950Z] [BOT] 💾 Saved posted_jobs.json: 689 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:25:32.950Z] [BOT] 💾 Marked as posted: Senior Product Manager, Math @ duolingo (instance #1)
💾 BEFORE ARCHIVING: 690 jobs in database
[2026-01-03T18:25:32.950Z] [BOT] ✅ No jobs to archive (all 690 jobs within 7-day window)
[2026-01-03T18:25:32.955Z] [BOT] 💾 Saved posted_jobs.json: 690 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:25:35.955Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-03T18:25:35.956Z] [BOT] 📍 [ROUTING] "Associate Director, Programmatic Platform Operations" @ spotify
[2026-01-03T18:25:35.956Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T18:25:36.143Z] [BOT] ✅ Created forum post: 🏢 Associate Director, Programmatic Platform Operations @ spotify in #🤖・ai-jobs
  ✅ Industry: Associate Director, Programmatic Platform Operations @ spotify
[2026-01-03T18:25:37.891Z] [BOT] ✅ Created forum post: 🏢 Associate Director, Programmatic Platform Operations @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T18:25:39.393Z] [BOT] 💾 Marked as posted: Associate Director, Programmatic Platform Operations @ spotify (instance #1)
[2026-01-03T18:25:39.393Z] [BOT] 💾 BEFORE ARCHIVING: 691 jobs in database
[2026-01-03T18:25:39.393Z] [BOT] ✅ No jobs to archive (all 691 jobs within 7-day window)
[2026-01-03T18:25:39.399Z] [BOT] 💾 Saved posted_jobs.json: 691 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:25:39.399Z] [BOT] 📍 [ROUTING] " [Expression of Interest] Research Manager, Interpretability" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-03T18:25:39.399Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T18:25:39.867Z] [BOT] ✅ Created forum post: 🏢  [Expression of Interest] Research Manager, Interpretability @ anthropic in #🤖・ai-jobs
[2026-01-03T18:25:39.867Z] [BOT] ✅ Industry:  [Expression of Interest] Research Manager, Interpretability @ anthropic
[2026-01-03T18:25:41.624Z] [BOT] ✅ Created forum post: 🏢  [Expression of Interest] Research Manager, Interpretability @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T18:25:43.125Z] [BOT] 💾 Marked as posted:  [Expression of Interest] Research Manager, Interpretability @ anthropic (instance #1)
[2026-01-03T18:25:43.126Z] [BOT] 💾 BEFORE ARCHIVING: 692 jobs in database
[2026-01-03T18:25:43.126Z] [BOT] ✅ No jobs to archive (all 692 jobs within 7-day window)
[2026-01-03T18:25:43.132Z] [BOT] 💾 Saved posted_jobs.json: 692 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:25:46.132Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T18:25:46.132Z] [BOT] 📍 [ROUTING] "Segment Marketing Manager, Startups" @ anthropic
   Category: MARKETING (matched: "marketing")
[2026-01-03T18:25:46.133Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T18:25:46.375Z] [BOT] ✅ Created forum post: 🏢 Segment Marketing Manager, Startups @ anthropic in #📣・marketing-jobs
  ✅ Industry: Segment Marketing Manager, Startups @ anthropic
[2026-01-03T18:25:48.067Z] [BOT] ✅ Created forum post: 🏢 Segment Marketing Manager, Startups @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T18:25:49.567Z] [BOT] 💾 Marked as posted: Segment Marketing Manager, Startups @ anthropic (instance #1)
[2026-01-03T18:25:49.568Z] [BOT] 💾 BEFORE ARCHIVING: 693 jobs in database
[2026-01-03T18:25:49.568Z] [BOT] ✅ No jobs to archive (all 693 jobs within 7-day window)
[2026-01-03T18:25:49.573Z] [BOT] 💾 Saved posted_jobs.json: 693 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:25:52.574Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-03T18:25:52.575Z] [BOT] ⏭️  Skipping duplicate: JID_60d64f1d (posted within 7 days)
[2026-01-03T18:25:52.575Z] [BOT] ⏭️  Skipping duplicate: JID_00abb0d2 (posted within 7 days)
⏭️  Skipping duplicate: JID_0b6e38d6 (posted within 7 days)
⏭️  Skipping duplicate: JID_8a767604 (posted within 7 days)
[2026-01-03T18:25:52.575Z] [BOT] ⏭️  Skipping duplicate: JID_b3f780e6 (posted within 7 days)
⏭️  Skipping duplicate: JID_0aff1ccc (posted within 7 days)
[2026-01-03T18:25:52.640Z] [BOT] ✅ Loaded pending queue: 606 total (586 pending, 20 enriched, 0 posted)
[2026-01-03T18:25:52.702Z] [BOT] ✅ Saved pending queue: 606 total (586 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T18:25:52.748Z] [BOT] 📂 Loaded 1644 existing routing entries
[2026-01-03T18:25:52.794Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 1650
   Timestamp: 2026-01-03T18:25:52.788Z
[2026-01-03T18:25:52.794Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T18:25:52.794Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-03T18:25:52.794Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T18:25:52.794Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 7
   Top channels:
     1. #🗽・new-york: 3 posts
[2026-01-03T18:25:52.794Z] [BOT] 2. #💲・sales-jobs: 2 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🌉・san-francisco: 2 posts
     5. #💻・remote-usa: 1 posts
[2026-01-03T18:25:52.795Z] [BOT] [STATS] Channel stats saved
[2026-01-03T18:25:54.809Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*