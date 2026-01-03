# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T05:05:46.357Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T05:05:18.068Z] ========================================
[2026-01-03T05:05:18.071Z] Discord Bot Execution Log
[2026-01-03T05:05:18.071Z] Environment: GitHub Actions
[2026-01-03T05:05:18.071Z] Node Version: v20.19.6
[2026-01-03T05:05:18.071Z] ========================================
[2026-01-03T05:05:18.071Z] Environment Variables Check:
[2026-01-03T05:05:18.071Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T05:05:18.071Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T05:05:18.071Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T05:05:18.071Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T05:05:18.072Z] 
Multi-Channel Configuration:
[2026-01-03T05:05:18.072Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T05:05:18.072Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T05:05:18.072Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T05:05:18.072Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T05:05:18.072Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T05:05:18.072Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T05:05:18.072Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T05:05:18.072Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T05:05:18.072Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T05:05:18.072Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T05:05:18.072Z] 
Data Files Check:
[2026-01-03T05:05:18.074Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157632 bytes)
[2026-01-03T05:05:18.074Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 98511 bytes)
[2026-01-03T05:05:18.074Z] 
========================================
[2026-01-03T05:05:18.074Z] Starting Enhanced Discord Bot...
[2026-01-03T05:05:18.074Z] ========================================
[2026-01-03T05:05:18.601Z] [BOT] ✅ Loaded V2 database: 165 jobs
[2026-01-03T05:05:19.302Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T05:05:19.302Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T05:05:19.303Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T05:05:19.304Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T05:05:19.410Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 85
[2026-01-03T05:05:19.412Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T05:05:19.412Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T05:05:19.413Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
📋 After multi-location grouping: 6 unique jobs to post
   (4 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Senior Software Engineer, Android Test Engineering @ reddit: chicago, los angeles, san francisco
   - Client Account Manager, Large Customer Sales (Retail) @ reddit: chicago, new york
   - Senior Client Partner, Large Customer Sales (CPG) @ reddit: new york, chicago
⏸️ Limiting to 10 jobs this run, 4 deferred for next run
📤 Posting 6 jobs...
[2026-01-03T05:05:19.413Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T05:05:19.414Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-03T05:05:19.415Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Android Test Engineering" @ reddit
[2026-01-03T05:05:19.416Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T05:05:19.420Z] [BOT ERROR] (node:2420) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T05:05:19.741Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Android Test Engineering @ reddit in #🤖・ai-jobs
[2026-01-03T05:05:19.741Z] [BOT] ✅ Industry: Senior Software Engineer, Android Test Engineering @ reddit
[2026-01-03T05:05:21.417Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Android Test Engineering @ reddit in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-03T05:05:22.917Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Android Test Engineering @ reddit (instance #1)
[2026-01-03T05:05:22.918Z] [BOT] 💾 BEFORE ARCHIVING: 166 jobs in database
[2026-01-03T05:05:22.918Z] [BOT] ✅ No jobs to archive (all 166 jobs within 7-day window)
[2026-01-03T05:05:22.924Z] [BOT] 💾 Saved posted_jobs.json: 166 active jobs
[2026-01-03T05:05:22.925Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:05:22.925Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Android Test Engineering @ reddit (instance #1)
💾 BEFORE ARCHIVING: 167 jobs in database
[2026-01-03T05:05:22.925Z] [BOT] ✅ No jobs to archive (all 167 jobs within 7-day window)
[2026-01-03T05:05:22.928Z] [BOT] 💾 Saved posted_jobs.json: 167 active jobs
[2026-01-03T05:05:22.928Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Software Engineer, Android Test Engineering @ reddit (instance #1)
[2026-01-03T05:05:22.928Z] [BOT] 💾 BEFORE ARCHIVING: 168 jobs in database
[2026-01-03T05:05:22.928Z] [BOT] ✅ No jobs to archive (all 168 jobs within 7-day window)
[2026-01-03T05:05:22.931Z] [BOT] 💾 Saved posted_jobs.json: 168 active jobs
[2026-01-03T05:05:22.931Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:05:22.932Z] [BOT] 📍 [ROUTING] "Client Account Manager, Large Customer Sales (Retail)" @ reddit
[2026-01-03T05:05:22.932Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-03T05:05:23.117Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Large Customer Sales (Retail) @ reddit in #🤖・ai-jobs
[2026-01-03T05:05:23.117Z] [BOT] ✅ Industry: Client Account Manager, Large Customer Sales (Retail) @ reddit
[2026-01-03T05:05:24.792Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Large Customer Sales (Retail) @ reddit in #🌆・chicago
[2026-01-03T05:05:24.792Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-03T05:05:26.292Z] [BOT] 💾 Marked as posted: Client Account Manager, Large Customer Sales (Retail) @ reddit (instance #1)
[2026-01-03T05:05:26.292Z] [BOT] 💾 BEFORE ARCHIVING: 169 jobs in database
✅ No jobs to archive (all 169 jobs within 7-day window)
[2026-01-03T05:05:26.294Z] [BOT] 💾 Saved posted_jobs.json: 169 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:05:26.295Z] [BOT] 💾 Marked as posted: Client Account Manager, Large Customer Sales (Retail) @ reddit (instance #1)
💾 BEFORE ARCHIVING: 170 jobs in database
[2026-01-03T05:05:26.295Z] [BOT] ✅ No jobs to archive (all 170 jobs within 7-day window)
[2026-01-03T05:05:26.297Z] [BOT] 💾 Saved posted_jobs.json: 170 active jobs
[2026-01-03T05:05:26.297Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:05:26.298Z] [BOT] 📍 [ROUTING] "Counsel, Product & Platform Compliance" @ reddit
[2026-01-03T05:05:26.298Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T05:05:26.718Z] [BOT] ✅ Created forum post: 🏢 Counsel, Product & Platform Compliance @ reddit in #🤖・ai-jobs
[2026-01-03T05:05:26.718Z] [BOT] ✅ Industry: Counsel, Product & Platform Compliance @ reddit
[2026-01-03T05:05:28.426Z] [BOT] ✅ Created forum post: 🏢 Counsel, Product & Platform Compliance @ reddit in #🗽・new-york
[2026-01-03T05:05:28.426Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T05:05:29.927Z] [BOT] 💾 Marked as posted: Counsel, Product & Platform Compliance @ reddit (instance #1)
[2026-01-03T05:05:29.928Z] [BOT] 💾 BEFORE ARCHIVING: 171 jobs in database
[2026-01-03T05:05:29.928Z] [BOT] ✅ No jobs to archive (all 171 jobs within 7-day window)
[2026-01-03T05:05:29.930Z] [BOT] 💾 Saved posted_jobs.json: 171 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:05:29.931Z] [BOT] 📍 [ROUTING] "Client Account Manager, Large Customer Sales (Finance)" @ reddit
[2026-01-03T05:05:29.932Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-03T05:05:30.116Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Large Customer Sales (Finance) @ reddit in #🤖・ai-jobs
[2026-01-03T05:05:30.116Z] [BOT] ✅ Industry: Client Account Manager, Large Customer Sales (Finance) @ reddit
[2026-01-03T05:05:31.786Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Large Customer Sales (Finance) @ reddit in #🗽・new-york
[2026-01-03T05:05:31.786Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T05:05:33.287Z] [BOT] 💾 Marked as posted: Client Account Manager, Large Customer Sales (Finance) @ reddit (instance #1)
[2026-01-03T05:05:33.288Z] [BOT] 💾 BEFORE ARCHIVING: 172 jobs in database
✅ No jobs to archive (all 172 jobs within 7-day window)
[2026-01-03T05:05:33.290Z] [BOT] 💾 Saved posted_jobs.json: 172 active jobs
[2026-01-03T05:05:33.290Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:05:33.291Z] [BOT] 📍 [ROUTING] "Senior Client Partner, Large Customer Sales (CPG)" @ reddit
[2026-01-03T05:05:33.292Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T05:05:33.526Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (CPG) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Client Partner, Large Customer Sales (CPG) @ reddit
[2026-01-03T05:05:35.271Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (CPG) @ reddit in #🗽・new-york
[2026-01-03T05:05:35.271Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T05:05:36.772Z] [BOT] 💾 Marked as posted: Senior Client Partner, Large Customer Sales (CPG) @ reddit (instance #1)
[2026-01-03T05:05:36.772Z] [BOT] 💾 BEFORE ARCHIVING: 173 jobs in database
✅ No jobs to archive (all 173 jobs within 7-day window)
[2026-01-03T05:05:36.775Z] [BOT] 💾 Saved posted_jobs.json: 173 active jobs
[2026-01-03T05:05:36.775Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Client Partner, Large Customer Sales (CPG) @ reddit (instance #1)
[2026-01-03T05:05:36.775Z] [BOT] 💾 BEFORE ARCHIVING: 174 jobs in database
[2026-01-03T05:05:36.775Z] [BOT] ✅ No jobs to archive (all 174 jobs within 7-day window)
[2026-01-03T05:05:36.777Z] [BOT] 💾 Saved posted_jobs.json: 174 active jobs
[2026-01-03T05:05:36.777Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:05:36.778Z] [BOT] 📍 [ROUTING] "Senior Manager, Large Customer Sales (Retail - Apparel)" @ reddit
[2026-01-03T05:05:36.778Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T05:05:36.965Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Large Customer Sales (Retail - Apparel) @ reddit in #🤖・ai-jobs
[2026-01-03T05:05:36.965Z] [BOT] ✅ Industry: Senior Manager, Large Customer Sales (Retail - Apparel) @ reddit
[2026-01-03T05:05:38.659Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Large Customer Sales (Retail - Apparel) @ reddit in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-03T05:05:40.161Z] [BOT] 💾 Marked as posted: Senior Manager, Large Customer Sales (Retail - Apparel) @ reddit (instance #1)
[2026-01-03T05:05:40.161Z] [BOT] 💾 BEFORE ARCHIVING: 175 jobs in database
✅ No jobs to archive (all 175 jobs within 7-day window)
[2026-01-03T05:05:40.164Z] [BOT] 💾 Saved posted_jobs.json: 175 active jobs
[2026-01-03T05:05:40.164Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:05:43.164Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-03T05:05:43.164Z] [BOT] ⏭️  Skipping duplicate: JID_70242766 (posted within 7 days)
⏭️  Skipping duplicate: JID_db79e8be (posted within 7 days)
[2026-01-03T05:05:43.164Z] [BOT] ⏭️  Skipping duplicate: JID_98004585 (posted within 7 days)
⏭️  Skipping duplicate: JID_4ab848ef (posted within 7 days)
⏭️  Skipping duplicate: JID_d2564dd9 (posted within 7 days)
[2026-01-03T05:05:43.165Z] [BOT] ⏭️  Skipping duplicate: JID_d3c3c497 (posted within 7 days)
[2026-01-03T05:05:43.264Z] [BOT] ✅ Loaded pending queue: 1125 total (1105 pending, 20 enriched, 0 posted)
[2026-01-03T05:05:43.392Z] [BOT] ✅ Saved pending queue: 1125 total (1105 pending, 14 enriched, 6 posted)
[2026-01-03T05:05:43.392Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T05:05:43.437Z] [BOT] 📂 Loaded 1240 existing routing entries
[2026-01-03T05:05:43.483Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 1246
[2026-01-03T05:05:43.484Z] [BOT] Timestamp: 2026-01-03T05:05:43.478Z
[2026-01-03T05:05:43.485Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 6 posts
     2. #🌆・chicago: 3 posts
     3. #🗽・new-york: 3 posts
[2026-01-03T05:05:43.485Z] [BOT] [STATS] Channel stats saved
[2026-01-03T05:05:45.505Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2420) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*