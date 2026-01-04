# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T15:50:02.444Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T15:49:21.840Z] ========================================
[2026-01-04T15:49:21.842Z] Discord Bot Execution Log
[2026-01-04T15:49:21.842Z] Environment: GitHub Actions
[2026-01-04T15:49:21.842Z] Node Version: v20.19.6
[2026-01-04T15:49:21.842Z] ========================================
[2026-01-04T15:49:21.842Z] Environment Variables Check:
[2026-01-04T15:49:21.842Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T15:49:21.842Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T15:49:21.842Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T15:49:21.843Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T15:49:21.843Z] 
Multi-Channel Configuration:
[2026-01-04T15:49:21.843Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T15:49:21.843Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T15:49:21.843Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T15:49:21.843Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T15:49:21.843Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T15:49:21.843Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T15:49:21.843Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T15:49:21.843Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T15:49:21.843Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T15:49:21.843Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T15:49:21.843Z] 
Data Files Check:
[2026-01-04T15:49:21.844Z] .github/data/new_jobs.json: ✅ Exists (10 items, 111908 bytes)
[2026-01-04T15:49:21.849Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 598476 bytes)
[2026-01-04T15:49:21.849Z] 
========================================
[2026-01-04T15:49:21.849Z] Starting Enhanced Discord Bot...
[2026-01-04T15:49:21.849Z] ========================================
[2026-01-04T15:49:22.363Z] [BOT] ✅ Loaded V2 database: 1190 jobs
[2026-01-04T15:49:22.942Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T15:49:22.943Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T15:49:22.943Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T15:49:22.944Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T15:49:23.011Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T15:49:23.097Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T15:49:23.100Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T15:49:23.100Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T15:49:23.100Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T15:49:23.101Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T15:49:23.101Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T15:49:23.105Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-04T15:49:23.106Z] [BOT] 📍 [ROUTING] "Product Marketing Manager " @ supabase
[2026-01-04T15:49:23.106Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-04T15:49:23.123Z] [BOT ERROR] (node:2507) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T15:49:23.350Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager  @ supabase in #🤖・ai-jobs
[2026-01-04T15:49:23.350Z] [BOT] ✅ Industry: Product Marketing Manager  @ supabase
[2026-01-04T15:49:24.853Z] [BOT] 💾 Marked as posted: Product Marketing Manager  @ supabase (instance #1)
[2026-01-04T15:49:24.853Z] [BOT] 💾 BEFORE ARCHIVING: 1191 jobs in database
[2026-01-04T15:49:24.854Z] [BOT] ✅ No jobs to archive (all 1191 jobs within 7-day window)
[2026-01-04T15:49:24.866Z] [BOT] 💾 Saved posted_jobs.json: 1191 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:49:24.866Z] [BOT] 📍 [ROUTING] "Government Contracts Strategist" @ nominal
[2026-01-04T15:49:24.866Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:49:25.034Z] [BOT] ✅ Created forum post: 🏢 Government Contracts Strategist @ nominal in #🤖・ai-jobs
[2026-01-04T15:49:25.034Z] [BOT] ✅ Industry: Government Contracts Strategist @ nominal
[2026-01-04T15:49:26.536Z] [BOT] 💾 Marked as posted: Government Contracts Strategist @ nominal (instance #1)
[2026-01-04T15:49:26.536Z] [BOT] 💾 BEFORE ARCHIVING: 1192 jobs in database
[2026-01-04T15:49:26.537Z] [BOT] ✅ No jobs to archive (all 1192 jobs within 7-day window)
[2026-01-04T15:49:26.544Z] [BOT] 💾 Saved posted_jobs.json: 1192 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:49:26.544Z] [BOT] 📍 [ROUTING] "Workday Payroll Specialist" @ spotify
[2026-01-04T15:49:26.544Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:49:26.973Z] [BOT] ✅ Created forum post: 🏢 Workday Payroll Specialist @ spotify in #🤖・ai-jobs
[2026-01-04T15:49:26.973Z] [BOT] ✅ Industry: Workday Payroll Specialist @ spotify
[2026-01-04T15:49:28.683Z] [BOT] ✅ Created forum post: 🏢 Workday Payroll Specialist @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T15:49:30.184Z] [BOT] 💾 Marked as posted: Workday Payroll Specialist @ spotify (instance #1)
[2026-01-04T15:49:30.184Z] [BOT] 💾 BEFORE ARCHIVING: 1193 jobs in database
[2026-01-04T15:49:30.186Z] [BOT] ✅ No jobs to archive (all 1193 jobs within 7-day window)
[2026-01-04T15:49:30.192Z] [BOT] 💾 Saved posted_jobs.json: 1193 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:49:30.192Z] [BOT] 📍 [ROUTING] "Associate Director, Customer Care" @ gohighlevel
[2026-01-04T15:49:30.192Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:49:30.380Z] [BOT] ✅ Created forum post: 🏢 Associate Director, Customer Care @ gohighlevel in #🤖・ai-jobs
  ✅ Industry: Associate Director, Customer Care @ gohighlevel
[2026-01-04T15:49:31.882Z] [BOT] 💾 Marked as posted: Associate Director, Customer Care @ gohighlevel (instance #1)
[2026-01-04T15:49:31.882Z] [BOT] 💾 BEFORE ARCHIVING: 1194 jobs in database
[2026-01-04T15:49:31.883Z] [BOT] ✅ No jobs to archive (all 1194 jobs within 7-day window)
[2026-01-04T15:49:31.891Z] [BOT] 💾 Saved posted_jobs.json: 1194 active jobs
[2026-01-04T15:49:31.891Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:49:31.892Z] [BOT] 📍 [ROUTING] "Senior Staff Machine Learning Engineer" @ spotify
[2026-01-04T15:49:31.892Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-04T15:49:32.070Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Machine Learning Engineer @ spotify in #🤖・ai-jobs
[2026-01-04T15:49:32.070Z] [BOT] ✅ Industry: Senior Staff Machine Learning Engineer @ spotify
[2026-01-04T15:49:33.742Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Machine Learning Engineer @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T15:49:35.243Z] [BOT] 💾 Marked as posted: Senior Staff Machine Learning Engineer @ spotify (instance #1)
[2026-01-04T15:49:35.243Z] [BOT] 💾 BEFORE ARCHIVING: 1195 jobs in database
[2026-01-04T15:49:35.244Z] [BOT] ✅ No jobs to archive (all 1195 jobs within 7-day window)
[2026-01-04T15:49:35.252Z] [BOT] 💾 Saved posted_jobs.json: 1195 active jobs
[2026-01-04T15:49:35.253Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:49:35.253Z] [BOT] 📍 [ROUTING] "Sales Development Representative" @ nominal
[2026-01-04T15:49:35.253Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:49:35.556Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative @ nominal in #🤖・ai-jobs
  ✅ Industry: Sales Development Representative @ nominal
[2026-01-04T15:49:37.268Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative @ nominal in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-04T15:49:38.769Z] [BOT] 💾 Marked as posted: Sales Development Representative @ nominal (instance #1)
[2026-01-04T15:49:38.769Z] [BOT] 💾 BEFORE ARCHIVING: 1196 jobs in database
[2026-01-04T15:49:38.770Z] [BOT] ✅ No jobs to archive (all 1196 jobs within 7-day window)
[2026-01-04T15:49:38.777Z] [BOT] 💾 Saved posted_jobs.json: 1196 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:49:41.778Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T15:49:41.779Z] [BOT] 📍 [ROUTING] "Head of Databases" @ supabase
   Category: MARKETING (matched: "growth")
[2026-01-04T15:49:41.779Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T15:49:41.954Z] [BOT] ✅ Created forum post: 🏢 Head of Databases @ supabase in #📣・marketing-jobs
  ✅ Industry: Head of Databases @ supabase
[2026-01-04T15:49:43.457Z] [BOT] 💾 Marked as posted: Head of Databases @ supabase (instance #1)
[2026-01-04T15:49:43.457Z] [BOT] 💾 BEFORE ARCHIVING: 1197 jobs in database
[2026-01-04T15:49:43.457Z] [BOT] ✅ No jobs to archive (all 1197 jobs within 7-day window)
[2026-01-04T15:49:43.466Z] [BOT] 💾 Saved posted_jobs.json: 1197 active jobs
[2026-01-04T15:49:43.466Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:49:46.467Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T15:49:46.468Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (EMEA)" @ supabase
[2026-01-04T15:49:46.468Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T15:49:46.867Z] [BOT] ✅ Created forum post: 🏢 Customer Solution Architect (EMEA) @ supabase in #💲・sales-jobs
[2026-01-04T15:49:46.867Z] [BOT] ✅ Industry: Customer Solution Architect (EMEA) @ supabase
[2026-01-04T15:49:48.368Z] [BOT] 💾 Marked as posted: Customer Solution Architect (EMEA) @ supabase (instance #1)
[2026-01-04T15:49:48.369Z] [BOT] 💾 BEFORE ARCHIVING: 1198 jobs in database
[2026-01-04T15:49:48.369Z] [BOT] ✅ No jobs to archive (all 1198 jobs within 7-day window)
[2026-01-04T15:49:48.378Z] [BOT] 💾 Saved posted_jobs.json: 1198 active jobs
[2026-01-04T15:49:48.378Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:49:51.379Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-04T15:49:51.379Z] [BOT] 📍 [ROUTING] "Cloud Partnerships Manager" @ supabase
[2026-01-04T15:49:51.380Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T15:49:51.783Z] [BOT] ✅ Created forum post: 🏢 Cloud Partnerships Manager @ supabase in #💻・tech-jobs
[2026-01-04T15:49:51.783Z] [BOT] ✅ Industry: Cloud Partnerships Manager @ supabase
[2026-01-04T15:49:53.284Z] [BOT] 💾 Marked as posted: Cloud Partnerships Manager @ supabase (instance #1)
[2026-01-04T15:49:53.284Z] [BOT] 💾 BEFORE ARCHIVING: 1199 jobs in database
[2026-01-04T15:49:53.285Z] [BOT] ✅ No jobs to archive (all 1199 jobs within 7-day window)
[2026-01-04T15:49:53.294Z] [BOT] 💾 Saved posted_jobs.json: 1199 active jobs
[2026-01-04T15:49:53.294Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:49:53.294Z] [BOT] 📍 [ROUTING] "Developer Relations Engineer (San Francisco, CA)" @ supabase
[2026-01-04T15:49:53.294Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T15:49:53.516Z] [BOT] ✅ Created forum post: 🏢 Developer Relations Engineer (San Francisco, CA) @ supabase in #💻・tech-jobs
[2026-01-04T15:49:53.516Z] [BOT] ✅ Industry: Developer Relations Engineer (San Francisco, CA) @ supabase
[2026-01-04T15:49:55.179Z] [BOT] ✅ Created forum post: 🏢 Developer Relations Engineer (San Francisco, CA) @ supabase in #🌉・san-francisco
[2026-01-04T15:49:55.179Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T15:49:56.681Z] [BOT] 💾 Marked as posted: Developer Relations Engineer (San Francisco, CA) @ supabase (instance #1)
[2026-01-04T15:49:56.681Z] [BOT] 💾 BEFORE ARCHIVING: 1200 jobs in database
[2026-01-04T15:49:56.682Z] [BOT] ✅ No jobs to archive (all 1200 jobs within 7-day window)
[2026-01-04T15:49:56.692Z] [BOT] 💾 Saved posted_jobs.json: 1200 active jobs
[2026-01-04T15:49:56.692Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T15:49:59.692Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T15:49:59.693Z] [BOT] ⏭️  Skipping duplicate: JID_59fa8df9 (posted within 7 days)
[2026-01-04T15:49:59.693Z] [BOT] ⏭️  Skipping duplicate: JID_b4a39376 (posted within 7 days)
[2026-01-04T15:49:59.693Z] [BOT] ⏭️  Skipping duplicate: JID_1d431543 (posted within 7 days)
[2026-01-04T15:49:59.693Z] [BOT] ⏭️  Skipping duplicate: JID_b067a36b (posted within 7 days)
[2026-01-04T15:49:59.693Z] [BOT] ⏭️  Skipping duplicate: JID_75c19651 (posted within 7 days)
[2026-01-04T15:49:59.693Z] [BOT] ⏭️  Skipping duplicate: JID_ad26d112 (posted within 7 days)
[2026-01-04T15:49:59.693Z] [BOT] ⏭️  Skipping duplicate: JID_59583867 (posted within 7 days)
[2026-01-04T15:49:59.693Z] [BOT] ⏭️  Skipping duplicate: JID_c8d334f4 (posted within 7 days)
[2026-01-04T15:49:59.694Z] [BOT] ⏭️  Skipping duplicate: JID_fc6276fd (posted within 7 days)
[2026-01-04T15:49:59.694Z] [BOT] ⏭️  Skipping duplicate: JID_fe7b93db (posted within 7 days)
[2026-01-04T15:49:59.696Z] [BOT] ✅ Loaded pending queue: 100 total (80 pending, 20 enriched, 0 posted)
[2026-01-04T15:49:59.701Z] [BOT] ✅ Saved pending queue: 100 total (80 pending, 10 enriched, 10 posted)
[2026-01-04T15:49:59.701Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T15:49:59.749Z] [BOT] 📂 Loaded 2105 existing routing entries
[2026-01-04T15:49:59.801Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2115
   Timestamp: 2026-01-04T15:49:59.791Z
[2026-01-04T15:49:59.802Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T15:49:59.802Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-04T15:49:59.802Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 7
   Top channels:
[2026-01-04T15:49:59.802Z] [BOT] 1. #🤖・ai-jobs: 6 posts
     2. #🗽・new-york: 2 posts
     3. #💻・tech-jobs: 2 posts
     4. #🤠・austin: 1 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-04T15:49:59.803Z] [BOT] [STATS] Channel stats saved
[2026-01-04T15:50:01.816Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2507) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*