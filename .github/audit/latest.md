# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T05:24:52.389Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T05:24:15.930Z] ========================================
[2026-01-03T05:24:15.932Z] Discord Bot Execution Log
[2026-01-03T05:24:15.932Z] Environment: GitHub Actions
[2026-01-03T05:24:15.932Z] Node Version: v20.19.6
[2026-01-03T05:24:15.932Z] ========================================
[2026-01-03T05:24:15.932Z] Environment Variables Check:
[2026-01-03T05:24:15.932Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T05:24:15.933Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T05:24:15.933Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T05:24:15.933Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T05:24:15.933Z] 
Multi-Channel Configuration:
[2026-01-03T05:24:15.933Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T05:24:15.933Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T05:24:15.933Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T05:24:15.933Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T05:24:15.933Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T05:24:15.933Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T05:24:15.933Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T05:24:15.934Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T05:24:15.934Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T05:24:15.934Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T05:24:15.934Z] 
Data Files Check:
[2026-01-03T05:24:15.935Z] .github/data/new_jobs.json: ✅ Exists (10 items, 186324 bytes)
[2026-01-03T05:24:15.937Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 103404 bytes)
[2026-01-03T05:24:15.937Z] 
========================================
[2026-01-03T05:24:15.937Z] Starting Enhanced Discord Bot...
[2026-01-03T05:24:15.937Z] ========================================
[2026-01-03T05:24:16.495Z] [BOT] ✅ Loaded V2 database: 175 jobs
[2026-01-03T05:24:17.307Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T05:24:17.307Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T05:24:17.307Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T05:24:17.309Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T05:24:17.421Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 95
[2026-01-03T05:24:17.423Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T05:24:17.423Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T05:24:17.423Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T05:24:17.424Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-03T05:24:17.424Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-03T05:24:17.424Z] [BOT] - Senior Client Account Manager, Large Customer Sales (CPG) @ reddit: new york, chicago
   - Director, Global Sales Enablement @ reddit: san francisco, new york
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T05:24:17.425Z] [BOT] 📌 Posting 8 jobs to #🤖・ai-jobs
[2026-01-03T05:24:17.427Z] [BOT] 📍 [ROUTING] "Senior Manager, Large Customer Sales (Retail - Apparel)" @ reddit
[2026-01-03T05:24:17.427Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T05:24:17.432Z] [BOT ERROR] (node:2949) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T05:24:17.637Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Large Customer Sales (Retail - Apparel) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Manager, Large Customer Sales (Retail - Apparel) @ reddit
[2026-01-03T05:24:19.438Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Large Customer Sales (Retail - Apparel) @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T05:24:20.938Z] [BOT] 💾 Marked as posted: Senior Manager, Large Customer Sales (Retail - Apparel) @ reddit (instance #1)
[2026-01-03T05:24:20.939Z] [BOT] 💾 BEFORE ARCHIVING: 176 jobs in database
[2026-01-03T05:24:20.939Z] [BOT] ✅ No jobs to archive (all 176 jobs within 7-day window)
[2026-01-03T05:24:20.949Z] [BOT] 💾 Saved posted_jobs.json: 176 active jobs
[2026-01-03T05:24:20.950Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:24:20.950Z] [BOT] 📍 [ROUTING] "Senior Client Account Manager, Large Customer Sales (CPG)" @ reddit
[2026-01-03T05:24:20.950Z] [BOT] Category: AI (matched: "artificial intelligence")
[2026-01-03T05:24:20.951Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-03T05:24:21.135Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (CPG) @ reddit in #🤖・ai-jobs
[2026-01-03T05:24:21.135Z] [BOT] ✅ Industry: Senior Client Account Manager, Large Customer Sales (CPG) @ reddit
[2026-01-03T05:24:22.921Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (CPG) @ reddit in #🗽・new-york
[2026-01-03T05:24:22.921Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T05:24:24.422Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Large Customer Sales (CPG) @ reddit (instance #1)
[2026-01-03T05:24:24.423Z] [BOT] 💾 BEFORE ARCHIVING: 177 jobs in database
✅ No jobs to archive (all 177 jobs within 7-day window)
[2026-01-03T05:24:24.426Z] [BOT] 💾 Saved posted_jobs.json: 177 active jobs
[2026-01-03T05:24:24.426Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:24:24.426Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Large Customer Sales (CPG) @ reddit (instance #1)
[2026-01-03T05:24:24.426Z] [BOT] 💾 BEFORE ARCHIVING: 178 jobs in database
[2026-01-03T05:24:24.426Z] [BOT] ✅ No jobs to archive (all 178 jobs within 7-day window)
[2026-01-03T05:24:24.429Z] [BOT] 💾 Saved posted_jobs.json: 178 active jobs
[2026-01-03T05:24:24.429Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:24:24.429Z] [BOT] 📍 [ROUTING] "Director, Global Sales Enablement" @ reddit
[2026-01-03T05:24:24.429Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T05:24:24.613Z] [BOT] ✅ Created forum post: 🏢 Director, Global Sales Enablement @ reddit in #🤖・ai-jobs
[2026-01-03T05:24:24.614Z] [BOT] ✅ Industry: Director, Global Sales Enablement @ reddit
[2026-01-03T05:24:26.364Z] [BOT] ✅ Created forum post: 🏢 Director, Global Sales Enablement @ reddit in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T05:24:27.864Z] [BOT] 💾 Marked as posted: Director, Global Sales Enablement @ reddit (instance #1)
[2026-01-03T05:24:27.864Z] [BOT] 💾 BEFORE ARCHIVING: 179 jobs in database
✅ No jobs to archive (all 179 jobs within 7-day window)
[2026-01-03T05:24:27.867Z] [BOT] 💾 Saved posted_jobs.json: 179 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:24:27.867Z] [BOT] 💾 Marked as posted: Director, Global Sales Enablement @ reddit (instance #1)
[2026-01-03T05:24:27.867Z] [BOT] 💾 BEFORE ARCHIVING: 180 jobs in database
[2026-01-03T05:24:27.868Z] [BOT] ✅ No jobs to archive (all 180 jobs within 7-day window)
[2026-01-03T05:24:27.871Z] [BOT] 💾 Saved posted_jobs.json: 180 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:24:27.873Z] [BOT] 📍 [ROUTING] "Senior Client Partner, Large Customer Sales (Alcohol)" @ reddit
[2026-01-03T05:24:27.873Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T05:24:28.217Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (Alcohol) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Client Partner, Large Customer Sales (Alcohol) @ reddit
[2026-01-03T05:24:29.969Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (Alcohol) @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T05:24:31.471Z] [BOT] 💾 Marked as posted: Senior Client Partner, Large Customer Sales (Alcohol) @ reddit (instance #1)
[2026-01-03T05:24:31.471Z] [BOT] 💾 BEFORE ARCHIVING: 181 jobs in database
✅ No jobs to archive (all 181 jobs within 7-day window)
[2026-01-03T05:24:31.474Z] [BOT] 💾 Saved posted_jobs.json: 181 active jobs
[2026-01-03T05:24:31.474Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:24:31.475Z] [BOT] 📍 [ROUTING] "Snoo Operations and IT Support (SOS) Manager" @ reddit
[2026-01-03T05:24:31.475Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T05:24:31.797Z] [BOT] ✅ Created forum post: 🏢 Snoo Operations and IT Support (SOS) Manager @ reddit in #🤖・ai-jobs
  ✅ Industry: Snoo Operations and IT Support (SOS) Manager @ reddit
[2026-01-03T05:24:33.643Z] [BOT] ✅ Created forum post: 🏢 Snoo Operations and IT Support (SOS) Manager @ reddit in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T05:24:35.143Z] [BOT] 💾 Marked as posted: Snoo Operations and IT Support (SOS) Manager @ reddit (instance #1)
[2026-01-03T05:24:35.143Z] [BOT] 💾 BEFORE ARCHIVING: 182 jobs in database
✅ No jobs to archive (all 182 jobs within 7-day window)
[2026-01-03T05:24:35.146Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
[2026-01-03T05:24:35.146Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:24:35.147Z] [BOT] 📍 [ROUTING] "Senior Client Account Manager, Large Customer Sales (Auto)" @ reddit
[2026-01-03T05:24:35.147Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, nonTechMatch (using ai)
[2026-01-03T05:24:35.348Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (Auto) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Client Account Manager, Large Customer Sales (Auto) @ reddit
[2026-01-03T05:24:37.069Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (Auto) @ reddit in #🗽・new-york
[2026-01-03T05:24:37.070Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T05:24:38.570Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Large Customer Sales (Auto) @ reddit (instance #1)
[2026-01-03T05:24:38.570Z] [BOT] 💾 BEFORE ARCHIVING: 183 jobs in database
[2026-01-03T05:24:38.570Z] [BOT] ✅ No jobs to archive (all 183 jobs within 7-day window)
[2026-01-03T05:24:38.575Z] [BOT] 💾 Saved posted_jobs.json: 183 active jobs
[2026-01-03T05:24:38.575Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:24:38.575Z] [BOT] 📍 [ROUTING] "Senior Client Account Manager, Large Customer Sales (Gaming & Tech)" @ reddit
[2026-01-03T05:24:38.575Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-03T05:24:38.892Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit
[2026-01-03T05:24:40.723Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit in #🗽・new-york
[2026-01-03T05:24:40.723Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T05:24:42.224Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit (instance #1)
[2026-01-03T05:24:42.224Z] [BOT] 💾 BEFORE ARCHIVING: 184 jobs in database
[2026-01-03T05:24:42.225Z] [BOT] ✅ No jobs to archive (all 184 jobs within 7-day window)
[2026-01-03T05:24:42.228Z] [BOT] 💾 Saved posted_jobs.json: 184 active jobs
[2026-01-03T05:24:42.228Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:24:42.228Z] [BOT] 📍 [ROUTING] "Regulatory Operations Specialist" @ spotify
[2026-01-03T05:24:42.228Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T05:24:42.547Z] [BOT] ✅ Created forum post: 🏢 Regulatory Operations Specialist @ spotify in #🤖・ai-jobs
[2026-01-03T05:24:42.547Z] [BOT] ✅ Industry: Regulatory Operations Specialist @ spotify
[2026-01-03T05:24:44.255Z] [BOT] ✅ Created forum post: 🏢 Regulatory Operations Specialist @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T05:24:45.755Z] [BOT] 💾 Marked as posted: Regulatory Operations Specialist @ spotify (instance #1)
[2026-01-03T05:24:45.755Z] [BOT] 💾 BEFORE ARCHIVING: 185 jobs in database
[2026-01-03T05:24:45.755Z] [BOT] ✅ No jobs to archive (all 185 jobs within 7-day window)
[2026-01-03T05:24:45.758Z] [BOT] 💾 Saved posted_jobs.json: 185 active jobs
[2026-01-03T05:24:45.758Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:24:48.759Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-03T05:24:48.759Z] [BOT] ⏭️  Skipping duplicate: JID_15b91944 (posted within 7 days)
⏭️  Skipping duplicate: JID_51dfa403 (posted within 7 days)
[2026-01-03T05:24:48.759Z] [BOT] ⏭️  Skipping duplicate: JID_27f782ab (posted within 7 days)
⏭️  Skipping duplicate: JID_eb8e81ec (posted within 7 days)
[2026-01-03T05:24:48.760Z] [BOT] ⏭️  Skipping duplicate: JID_66854faa (posted within 7 days)
[2026-01-03T05:24:48.760Z] [BOT] ⏭️  Skipping duplicate: JID_d42514cd (posted within 7 days)
⏭️  Skipping duplicate: JID_c3efc08f (posted within 7 days)
⏭️  Skipping duplicate: JID_2ad527aa (posted within 7 days)
[2026-01-03T05:24:48.857Z] [BOT] ✅ Loaded pending queue: 1115 total (1095 pending, 20 enriched, 0 posted)
[2026-01-03T05:24:48.985Z] [BOT] ✅ Saved pending queue: 1115 total (1095 pending, 12 enriched, 8 posted)
[2026-01-03T05:24:48.985Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T05:24:49.029Z] [BOT] 📂 Loaded 1246 existing routing entries
[2026-01-03T05:24:49.074Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
[2026-01-03T05:24:49.075Z] [BOT] Total entries: 1254
   Timestamp: 2026-01-03T05:24:49.069Z
[2026-01-03T05:24:49.075Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 16
[2026-01-03T05:24:49.075Z] [BOT] Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-03T05:24:49.076Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 16
   Channels used: 3
   Top channels:
[2026-01-03T05:24:49.076Z] [BOT] 1. #🤖・ai-jobs: 8 posts
     2. #🗽・new-york: 6 posts
     3. #🌉・san-francisco: 2 posts
[2026-01-03T05:24:49.076Z] [BOT] [STATS] Channel stats saved
[2026-01-03T05:24:51.096Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2949) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*