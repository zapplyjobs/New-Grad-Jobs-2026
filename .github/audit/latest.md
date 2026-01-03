# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T04:55:53.126Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T04:55:11.454Z] ========================================
[2026-01-03T04:55:11.456Z] Discord Bot Execution Log
[2026-01-03T04:55:11.457Z] Environment: GitHub Actions
[2026-01-03T04:55:11.457Z] Node Version: v20.19.6
[2026-01-03T04:55:11.457Z] ========================================
[2026-01-03T04:55:11.457Z] Environment Variables Check:
[2026-01-03T04:55:11.457Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T04:55:11.457Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T04:55:11.457Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T04:55:11.457Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T04:55:11.457Z] 
Multi-Channel Configuration:
[2026-01-03T04:55:11.457Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T04:55:11.458Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T04:55:11.458Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T04:55:11.458Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T04:55:11.458Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T04:55:11.458Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T04:55:11.458Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T04:55:11.458Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T04:55:11.458Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T04:55:11.458Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T04:55:11.458Z] 
Data Files Check:
[2026-01-03T04:55:11.459Z] .github/data/new_jobs.json: ✅ Exists (10 items, 176325 bytes)
[2026-01-03T04:55:11.460Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 93558 bytes)
[2026-01-03T04:55:11.460Z] 
========================================
[2026-01-03T04:55:11.460Z] Starting Enhanced Discord Bot...
[2026-01-03T04:55:11.460Z] ========================================
[2026-01-03T04:55:12.003Z] [BOT] ✅ Loaded V2 database: 155 jobs
[2026-01-03T04:55:12.668Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T04:55:12.669Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T04:55:12.669Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T04:55:12.670Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T04:55:12.773Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 75
[2026-01-03T04:55:12.775Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T04:55:12.775Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T04:55:12.776Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T04:55:12.776Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T04:55:12.776Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T04:55:12.778Z] [BOT] 📌 Posting 10 jobs to #🤖・ai-jobs
[2026-01-03T04:55:12.779Z] [BOT] 📍 [ROUTING] "Client Account Manager, Mid-Market (B2B Services)" @ reddit
[2026-01-03T04:55:12.779Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-03T04:55:12.784Z] [BOT ERROR] (node:2341) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T04:55:12.898Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Mid-Market (B2B Services) @ reddit in #🤖・ai-jobs
[2026-01-03T04:55:12.898Z] [BOT] ✅ Industry: Client Account Manager, Mid-Market (B2B Services) @ reddit
[2026-01-03T04:55:14.558Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Mid-Market (B2B Services) @ reddit in #🌉・san-francisco
[2026-01-03T04:55:14.558Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T04:55:16.059Z] [BOT] 💾 Marked as posted: Client Account Manager, Mid-Market (B2B Services) @ reddit (instance #1)
[2026-01-03T04:55:16.059Z] [BOT] 💾 BEFORE ARCHIVING: 156 jobs in database
[2026-01-03T04:55:16.060Z] [BOT] ✅ No jobs to archive (all 156 jobs within 7-day window)
[2026-01-03T04:55:16.067Z] [BOT] 💾 Saved posted_jobs.json: 156 active jobs
[2026-01-03T04:55:16.067Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T04:55:16.068Z] [BOT] 📍 [ROUTING] "Client Partner, Mid-Market (Agency Acquisitions)" @ reddit
[2026-01-03T04:55:16.069Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T04:55:16.380Z] [BOT] ✅ Created forum post: 🏢 Client Partner, Mid-Market (Agency Acquisitions) @ reddit in #🤖・ai-jobs
[2026-01-03T04:55:16.381Z] [BOT] ✅ Industry: Client Partner, Mid-Market (Agency Acquisitions) @ reddit
[2026-01-03T04:55:18.002Z] [BOT] ✅ Created forum post: 🏢 Client Partner, Mid-Market (Agency Acquisitions) @ reddit in #🗽・new-york
[2026-01-03T04:55:18.002Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T04:55:19.504Z] [BOT] 💾 Marked as posted: Client Partner, Mid-Market (Agency Acquisitions) @ reddit (instance #1)
[2026-01-03T04:55:19.504Z] [BOT] 💾 BEFORE ARCHIVING: 157 jobs in database
[2026-01-03T04:55:19.504Z] [BOT] ✅ No jobs to archive (all 157 jobs within 7-day window)
[2026-01-03T04:55:19.510Z] [BOT] 💾 Saved posted_jobs.json: 157 active jobs
[2026-01-03T04:55:19.510Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T04:55:19.510Z] [BOT] 📍 [ROUTING] "Client Partner, Mid-Market (Services Acquisitions)" @ reddit
[2026-01-03T04:55:19.510Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T04:55:19.697Z] [BOT] ✅ Created forum post: 🏢 Client Partner, Mid-Market (Services Acquisitions) @ reddit in #🤖・ai-jobs
  ✅ Industry: Client Partner, Mid-Market (Services Acquisitions) @ reddit
[2026-01-03T04:55:21.410Z] [BOT] ✅ Created forum post: 🏢 Client Partner, Mid-Market (Services Acquisitions) @ reddit in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-03T04:55:22.911Z] [BOT] 💾 Marked as posted: Client Partner, Mid-Market (Services Acquisitions) @ reddit (instance #1)
[2026-01-03T04:55:22.911Z] [BOT] 💾 BEFORE ARCHIVING: 158 jobs in database
[2026-01-03T04:55:22.911Z] [BOT] ✅ No jobs to archive (all 158 jobs within 7-day window)
[2026-01-03T04:55:22.914Z] [BOT] 💾 Saved posted_jobs.json: 158 active jobs
[2026-01-03T04:55:22.914Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T04:55:22.916Z] [BOT] 📍 [ROUTING] "Senior Client Partner, Mid-Market (B2B Services) " @ reddit
[2026-01-03T04:55:22.916Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T04:55:23.054Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Mid-Market (B2B Services)  @ reddit in #🤖・ai-jobs
[2026-01-03T04:55:23.054Z] [BOT] ✅ Industry: Senior Client Partner, Mid-Market (B2B Services)  @ reddit
[2026-01-03T04:55:24.696Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Mid-Market (B2B Services)  @ reddit in #🌉・san-francisco
[2026-01-03T04:55:24.696Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T04:55:26.197Z] [BOT] 💾 Marked as posted: Senior Client Partner, Mid-Market (B2B Services)  @ reddit (instance #1)
[2026-01-03T04:55:26.198Z] [BOT] 💾 BEFORE ARCHIVING: 159 jobs in database
[2026-01-03T04:55:26.198Z] [BOT] ✅ No jobs to archive (all 159 jobs within 7-day window)
[2026-01-03T04:55:26.200Z] [BOT] 💾 Saved posted_jobs.json: 159 active jobs
[2026-01-03T04:55:26.200Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T04:55:26.201Z] [BOT] 📍 [ROUTING] "Client Account Executive, Mid-Market (App Dev)" @ reddit
[2026-01-03T04:55:26.201Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-03T04:55:26.420Z] [BOT] ✅ Created forum post: 🏢 Client Account Executive, Mid-Market (App Dev) @ reddit in #🤖・ai-jobs
[2026-01-03T04:55:26.420Z] [BOT] ✅ Industry: Client Account Executive, Mid-Market (App Dev) @ reddit
[2026-01-03T04:55:28.266Z] [BOT] ✅ Created forum post: 🏢 Client Account Executive, Mid-Market (App Dev) @ reddit in #🗽・new-york
[2026-01-03T04:55:28.266Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T04:55:29.767Z] [BOT] 💾 Marked as posted: Client Account Executive, Mid-Market (App Dev) @ reddit (instance #1)
[2026-01-03T04:55:29.768Z] [BOT] 💾 BEFORE ARCHIVING: 160 jobs in database
✅ No jobs to archive (all 160 jobs within 7-day window)
[2026-01-03T04:55:29.770Z] [BOT] 💾 Saved posted_jobs.json: 160 active jobs
[2026-01-03T04:55:29.770Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T04:55:29.770Z] [BOT] 📍 [ROUTING] "Client Account Executive, Mid-Market Sales (B2B Services)" @ reddit
[2026-01-03T04:55:29.770Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-03T04:55:29.962Z] [BOT] ✅ Created forum post: 🏢 Client Account Executive, Mid-Market Sales (B2B Services) @ reddit in #🤖・ai-jobs
  ✅ Industry: Client Account Executive, Mid-Market Sales (B2B Services) @ reddit
[2026-01-03T04:55:31.618Z] [BOT] ✅ Created forum post: 🏢 Client Account Executive, Mid-Market Sales (B2B Services) @ reddit in #🌉・san-francisco
[2026-01-03T04:55:31.618Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T04:55:33.120Z] [BOT] 💾 Marked as posted: Client Account Executive, Mid-Market Sales (B2B Services) @ reddit (instance #1)
[2026-01-03T04:55:33.120Z] [BOT] 💾 BEFORE ARCHIVING: 161 jobs in database
✅ No jobs to archive (all 161 jobs within 7-day window)
[2026-01-03T04:55:33.122Z] [BOT] 💾 Saved posted_jobs.json: 161 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T04:55:33.123Z] [BOT] 📍 [ROUTING] "Client Account Executive, Mid-Market Sales (B2C Services)" @ reddit
[2026-01-03T04:55:33.123Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-03T04:55:33.270Z] [BOT] ✅ Created forum post: 🏢 Client Account Executive, Mid-Market Sales (B2C Services) @ reddit in #🤖・ai-jobs
  ✅ Industry: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit
[2026-01-03T04:55:34.956Z] [BOT] ✅ Created forum post: 🏢 Client Account Executive, Mid-Market Sales (B2C Services) @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T04:55:36.457Z] [BOT] 💾 Marked as posted: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit (instance #1)
[2026-01-03T04:55:36.457Z] [BOT] 💾 BEFORE ARCHIVING: 162 jobs in database
✅ No jobs to archive (all 162 jobs within 7-day window)
[2026-01-03T04:55:36.459Z] [BOT] 💾 Saved posted_jobs.json: 162 active jobs
[2026-01-03T04:55:36.459Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T04:55:36.460Z] [BOT] 📍 [ROUTING] "Accounting Intern" @ coinbase
[2026-01-03T04:55:36.461Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T04:55:36.805Z] [BOT] ✅ Created forum post: 🏢 Accounting Intern @ coinbase in #🤖・ai-jobs
[2026-01-03T04:55:36.806Z] [BOT] ✅ Industry: Accounting Intern @ coinbase
[2026-01-03T04:55:38.583Z] [BOT] ✅ Created forum post: 🏢 Accounting Intern @ coinbase in #🗽・new-york
[2026-01-03T04:55:38.583Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T04:55:40.084Z] [BOT] 💾 Marked as posted: Accounting Intern @ coinbase (instance #1)
[2026-01-03T04:55:40.084Z] [BOT] 💾 BEFORE ARCHIVING: 163 jobs in database
[2026-01-03T04:55:40.085Z] [BOT] ✅ No jobs to archive (all 163 jobs within 7-day window)
[2026-01-03T04:55:40.087Z] [BOT] 💾 Saved posted_jobs.json: 163 active jobs
[2026-01-03T04:55:40.087Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T04:55:40.087Z] [BOT] 📍 [ROUTING] "Senior IT Support Engineer, Snoo Operations & Support (SOS)" @ reddit
[2026-01-03T04:55:40.087Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T04:55:40.481Z] [BOT] ✅ Created forum post: 🏢 Senior IT Support Engineer, Snoo Operations & Support (SOS) @ reddit in #🤖・ai-jobs
[2026-01-03T04:55:40.481Z] [BOT] ✅ Industry: Senior IT Support Engineer, Snoo Operations & Support (SOS) @ reddit
[2026-01-03T04:55:42.345Z] [BOT] ✅ Created forum post: 🏢 Senior IT Support Engineer, Snoo Operations & Support (SOS) @ reddit in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-03T04:55:43.845Z] [BOT] 💾 Marked as posted: Senior IT Support Engineer, Snoo Operations & Support (SOS) @ reddit (instance #1)
[2026-01-03T04:55:43.845Z] [BOT] 💾 BEFORE ARCHIVING: 164 jobs in database
[2026-01-03T04:55:43.845Z] [BOT] ✅ No jobs to archive (all 164 jobs within 7-day window)
[2026-01-03T04:55:43.848Z] [BOT] 💾 Saved posted_jobs.json: 164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T04:55:43.849Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Android Test Engineering" @ reddit
[2026-01-03T04:55:43.849Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T04:55:43.994Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Android Test Engineering @ reddit in #🤖・ai-jobs
[2026-01-03T04:55:43.994Z] [BOT] ✅ Industry: Senior Software Engineer, Android Test Engineering @ reddit
[2026-01-03T04:55:45.696Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Android Test Engineering @ reddit in #🗽・new-york
[2026-01-03T04:55:45.696Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T04:55:47.197Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Android Test Engineering @ reddit (instance #1)
[2026-01-03T04:55:47.198Z] [BOT] 💾 BEFORE ARCHIVING: 165 jobs in database
[2026-01-03T04:55:47.198Z] [BOT] ✅ No jobs to archive (all 165 jobs within 7-day window)
[2026-01-03T04:55:47.201Z] [BOT] 💾 Saved posted_jobs.json: 165 active jobs
[2026-01-03T04:55:47.201Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T04:55:50.202Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T04:55:50.202Z] [BOT] ⏭️  Skipping duplicate: JID_9f055210 (posted within 7 days)
⏭️  Skipping duplicate: JID_7774d1e7 (posted within 7 days)
⏭️  Skipping duplicate: JID_322b88f9 (posted within 7 days)
[2026-01-03T04:55:50.202Z] [BOT] ⏭️  Skipping duplicate: JID_f54a9be9 (posted within 7 days)
⏭️  Skipping duplicate: JID_5e2048d2 (posted within 7 days)
⏭️  Skipping duplicate: JID_6fcd7373 (posted within 7 days)
[2026-01-03T04:55:50.202Z] [BOT] ⏭️  Skipping duplicate: JID_811cd046 (posted within 7 days)
⏭️  Skipping duplicate: JID_1a00b3ad (posted within 7 days)
[2026-01-03T04:55:50.203Z] [BOT] ⏭️  Skipping duplicate: JID_406a35ec (posted within 7 days)
[2026-01-03T04:55:50.203Z] [BOT] ⏭️  Skipping duplicate: JID_ebfd7f8f (posted within 7 days)
[2026-01-03T04:55:50.302Z] [BOT] ✅ Loaded pending queue: 1135 total (1115 pending, 20 enriched, 0 posted)
[2026-01-03T04:55:50.433Z] [BOT] ✅ Saved pending queue: 1135 total (1115 pending, 10 enriched, 10 posted)
[2026-01-03T04:55:50.433Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T04:55:50.477Z] [BOT] 📂 Loaded 1230 existing routing entries
[2026-01-03T04:55:50.523Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1240
   Timestamp: 2026-01-03T04:55:50.517Z
[2026-01-03T04:55:50.524Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T04:55:50.524Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-03T04:55:50.524Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T04:55:50.524Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
[2026-01-03T04:55:50.524Z] [BOT] 1. #🤖・ai-jobs: 10 posts
     2. #🗽・new-york: 5 posts
     3. #🌉・san-francisco: 3 posts
     4. #🦢・los-angeles: 1 posts
[2026-01-03T04:55:50.524Z] [BOT] 5. #🌆・chicago: 1 posts
[2026-01-03T04:55:50.524Z] [BOT] [STATS] Channel stats saved
[2026-01-03T04:55:52.547Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2341) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*