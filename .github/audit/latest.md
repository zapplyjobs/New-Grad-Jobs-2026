# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T16:05:43.172Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T16:05:07.697Z] ========================================
[2026-01-04T16:05:07.699Z] Discord Bot Execution Log
[2026-01-04T16:05:07.699Z] Environment: GitHub Actions
[2026-01-04T16:05:07.699Z] Node Version: v20.19.6
[2026-01-04T16:05:07.699Z] ========================================
[2026-01-04T16:05:07.699Z] Environment Variables Check:
[2026-01-04T16:05:07.699Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T16:05:07.699Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T16:05:07.699Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T16:05:07.700Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T16:05:07.700Z] 
Multi-Channel Configuration:
[2026-01-04T16:05:07.700Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T16:05:07.700Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T16:05:07.700Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T16:05:07.700Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T16:05:07.700Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T16:05:07.700Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T16:05:07.700Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T16:05:07.700Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T16:05:07.700Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T16:05:07.700Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T16:05:07.700Z] 
Data Files Check:
[2026-01-04T16:05:07.701Z] .github/data/new_jobs.json: ✅ Exists (10 items, 115381 bytes)
[2026-01-04T16:05:07.706Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 603773 bytes)
[2026-01-04T16:05:07.706Z] 
========================================
[2026-01-04T16:05:07.706Z] Starting Enhanced Discord Bot...
[2026-01-04T16:05:07.706Z] ========================================
[2026-01-04T16:05:08.143Z] [BOT] ✅ Loaded V2 database: 1200 jobs
[2026-01-04T16:05:09.292Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T16:05:09.292Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T16:05:09.292Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T16:05:09.293Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T16:05:09.367Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T16:05:09.450Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T16:05:09.452Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T16:05:09.453Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T16:05:09.453Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T16:05:09.453Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T16:05:09.454Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T16:05:09.458Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-04T16:05:09.458Z] [BOT] 📍 [ROUTING] "Incident Manager" @ supabase
   Category: SALES (matched: "customer success")
[2026-01-04T16:05:09.459Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T16:05:09.475Z] [BOT ERROR] (node:3201) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T16:05:09.695Z] [BOT] ✅ Created forum post: 🏢 Incident Manager @ supabase in #💲・sales-jobs
[2026-01-04T16:05:09.695Z] [BOT] ✅ Industry: Incident Manager @ supabase
[2026-01-04T16:05:11.197Z] [BOT] 💾 Marked as posted: Incident Manager @ supabase (instance #1)
[2026-01-04T16:05:11.198Z] [BOT] 💾 BEFORE ARCHIVING: 1201 jobs in database
[2026-01-04T16:05:11.198Z] [BOT] ✅ No jobs to archive (all 1201 jobs within 7-day window)
[2026-01-04T16:05:11.209Z] [BOT] 💾 Saved posted_jobs.json: 1201 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:05:11.209Z] [BOT] 📍 [ROUTING] "Partner Solutions Architect" @ supabase
[2026-01-04T16:05:11.209Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T16:05:11.603Z] [BOT] ✅ Created forum post: 🏢 Partner Solutions Architect @ supabase in #💲・sales-jobs
[2026-01-04T16:05:11.604Z] [BOT] ✅ Industry: Partner Solutions Architect @ supabase
[2026-01-04T16:05:13.105Z] [BOT] 💾 Marked as posted: Partner Solutions Architect @ supabase (instance #1)
[2026-01-04T16:05:13.105Z] [BOT] 💾 BEFORE ARCHIVING: 1202 jobs in database
[2026-01-04T16:05:13.106Z] [BOT] ✅ No jobs to archive (all 1202 jobs within 7-day window)
[2026-01-04T16:05:13.113Z] [BOT] 💾 Saved posted_jobs.json: 1202 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:05:13.113Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (USA)" @ supabase
[2026-01-04T16:05:13.113Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T16:05:13.700Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (USA) @ supabase in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive (USA) @ supabase
[2026-01-04T16:05:15.412Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (USA) @ supabase in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-04T16:05:16.913Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (USA) @ supabase (instance #1)
[2026-01-04T16:05:16.913Z] [BOT] 💾 BEFORE ARCHIVING: 1203 jobs in database
[2026-01-04T16:05:16.914Z] [BOT] ✅ No jobs to archive (all 1203 jobs within 7-day window)
[2026-01-04T16:05:16.922Z] [BOT] 💾 Saved posted_jobs.json: 1203 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:05:16.922Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (APAC)" @ supabase
   Category: SALES (matched: "sales")
[2026-01-04T16:05:16.922Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T16:05:17.134Z] [BOT] ✅ Created forum post: 🏢 Customer Solution Architect (APAC) @ supabase in #💲・sales-jobs
  ✅ Industry: Customer Solution Architect (APAC) @ supabase
[2026-01-04T16:05:18.636Z] [BOT] 💾 Marked as posted: Customer Solution Architect (APAC) @ supabase (instance #1)
[2026-01-04T16:05:18.637Z] [BOT] 💾 BEFORE ARCHIVING: 1204 jobs in database
[2026-01-04T16:05:18.637Z] [BOT] ✅ No jobs to archive (all 1204 jobs within 7-day window)
[2026-01-04T16:05:18.644Z] [BOT] 💾 Saved posted_jobs.json: 1204 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:05:21.645Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-04T16:05:21.645Z] [BOT] 📍 [ROUTING] "Account Manager II" @ gohighlevel
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-04T16:05:21.923Z] [BOT] ✅ Created forum post: 🏢 Account Manager II @ gohighlevel in #🤖・ai-jobs
  ✅ Industry: Account Manager II @ gohighlevel
[2026-01-04T16:05:23.423Z] [BOT] 💾 Marked as posted: Account Manager II @ gohighlevel (instance #1)
[2026-01-04T16:05:23.424Z] [BOT] 💾 BEFORE ARCHIVING: 1205 jobs in database
[2026-01-04T16:05:23.424Z] [BOT] ✅ No jobs to archive (all 1205 jobs within 7-day window)
[2026-01-04T16:05:23.432Z] [BOT] 💾 Saved posted_jobs.json: 1205 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:05:23.432Z] [BOT] 📍 [ROUTING] "Accounting Manager" @ nominal
[2026-01-04T16:05:23.432Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T16:05:23.703Z] [BOT] ✅ Created forum post: 🏢 Accounting Manager @ nominal in #🤖・ai-jobs
  ✅ Industry: Accounting Manager @ nominal
[2026-01-04T16:05:25.442Z] [BOT] ✅ Created forum post: 🏢 Accounting Manager @ nominal in #🤠・austin
[2026-01-04T16:05:25.442Z] [BOT] ✅ Location: 🤠・austin
[2026-01-04T16:05:26.944Z] [BOT] 💾 Marked as posted: Accounting Manager @ nominal (instance #1)
[2026-01-04T16:05:26.944Z] [BOT] 💾 BEFORE ARCHIVING: 1206 jobs in database
[2026-01-04T16:05:26.945Z] [BOT] ✅ No jobs to archive (all 1206 jobs within 7-day window)
[2026-01-04T16:05:26.953Z] [BOT] 💾 Saved posted_jobs.json: 1206 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:05:29.955Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-04T16:05:29.955Z] [BOT] 📍 [ROUTING] "Platform Engineer: Kubernetes" @ supabase
[2026-01-04T16:05:29.955Z] [BOT] Category: TECH (matched: "data engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T16:05:30.235Z] [BOT] ✅ Created forum post: 🏢 Platform Engineer: Kubernetes @ supabase in #💻・tech-jobs
  ✅ Industry: Platform Engineer: Kubernetes @ supabase
[2026-01-04T16:05:31.737Z] [BOT] 💾 Marked as posted: Platform Engineer: Kubernetes @ supabase (instance #1)
[2026-01-04T16:05:31.737Z] [BOT] 💾 BEFORE ARCHIVING: 1207 jobs in database
[2026-01-04T16:05:31.738Z] [BOT] ✅ No jobs to archive (all 1207 jobs within 7-day window)
[2026-01-04T16:05:31.747Z] [BOT] 💾 Saved posted_jobs.json: 1207 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:05:31.747Z] [BOT] 📍 [ROUTING] "Support Engineer (EMEA - Weekends)" @ supabase
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T16:05:31.747Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T16:05:32.037Z] [BOT] ✅ Created forum post: 🏢 Support Engineer (EMEA - Weekends) @ supabase in #💻・tech-jobs
[2026-01-04T16:05:32.037Z] [BOT] ✅ Industry: Support Engineer (EMEA - Weekends) @ supabase
[2026-01-04T16:05:33.539Z] [BOT] 💾 Marked as posted: Support Engineer (EMEA - Weekends) @ supabase (instance #1)
[2026-01-04T16:05:33.539Z] [BOT] 💾 BEFORE ARCHIVING: 1208 jobs in database
[2026-01-04T16:05:33.540Z] [BOT] ✅ No jobs to archive (all 1208 jobs within 7-day window)
[2026-01-04T16:05:33.548Z] [BOT] 💾 Saved posted_jobs.json: 1208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:05:33.548Z] [BOT] 📍 [ROUTING] "Support Engineer (AMER - Weekends)" @ supabase
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T16:05:33.548Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T16:05:33.843Z] [BOT] ✅ Created forum post: 🏢 Support Engineer (AMER - Weekends) @ supabase in #💻・tech-jobs
[2026-01-04T16:05:33.843Z] [BOT] ✅ Industry: Support Engineer (AMER - Weekends) @ supabase
[2026-01-04T16:05:35.345Z] [BOT] 💾 Marked as posted: Support Engineer (AMER - Weekends) @ supabase (instance #1)
[2026-01-04T16:05:35.345Z] [BOT] 💾 BEFORE ARCHIVING: 1209 jobs in database
[2026-01-04T16:05:35.346Z] [BOT] ✅ No jobs to archive (all 1209 jobs within 7-day window)
[2026-01-04T16:05:35.354Z] [BOT] 💾 Saved posted_jobs.json: 1209 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:05:35.354Z] [BOT] 📍 [ROUTING] "Multigres Engineer" @ supabase
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T16:05:35.354Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T16:05:35.525Z] [BOT] ✅ Created forum post: 🏢 Multigres Engineer @ supabase in #💻・tech-jobs
  ✅ Industry: Multigres Engineer @ supabase
[2026-01-04T16:05:37.026Z] [BOT] 💾 Marked as posted: Multigres Engineer @ supabase (instance #1)
[2026-01-04T16:05:37.026Z] [BOT] 💾 BEFORE ARCHIVING: 1210 jobs in database
[2026-01-04T16:05:37.027Z] [BOT] ✅ No jobs to archive (all 1210 jobs within 7-day window)
[2026-01-04T16:05:37.035Z] [BOT] 💾 Saved posted_jobs.json: 1210 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:05:40.036Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T16:05:40.036Z] [BOT] ⏭️  Skipping duplicate: JID_c94d1677 (posted within 7 days)
[2026-01-04T16:05:40.037Z] [BOT] ⏭️  Skipping duplicate: JID_980bae0e (posted within 7 days)
⏭️  Skipping duplicate: JID_a0a2a3d6 (posted within 7 days)
⏭️  Skipping duplicate: JID_5073f585 (posted within 7 days)
⏭️  Skipping duplicate: JID_42a372db (posted within 7 days)
⏭️  Skipping duplicate: JID_6bdc77c1 (posted within 7 days)
⏭️  Skipping duplicate: JID_047d3e46 (posted within 7 days)
⏭️  Skipping duplicate: JID_d32f1699 (posted within 7 days)
⏭️  Skipping duplicate: JID_c6c11003 (posted within 7 days)
⏭️  Skipping duplicate: JID_d26bb4d7 (posted within 7 days)
[2026-01-04T16:05:40.040Z] [BOT] ✅ Loaded pending queue: 90 total (70 pending, 20 enriched, 0 posted)
[2026-01-04T16:05:40.043Z] [BOT] ✅ Saved pending queue: 90 total (70 pending, 10 enriched, 10 posted)
[2026-01-04T16:05:40.043Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T16:05:40.091Z] [BOT] 📂 Loaded 2115 existing routing entries
[2026-01-04T16:05:40.141Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2125
[2026-01-04T16:05:40.141Z] [BOT] Timestamp: 2026-01-04T16:05:40.132Z
[2026-01-04T16:05:40.141Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 12
[2026-01-04T16:05:40.142Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-04T16:05:40.142Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 5
   Top channels:
     1. #💲・sales-jobs: 4 posts
     2. #💻・tech-jobs: 4 posts
     3. #🤖・ai-jobs: 2 posts
[2026-01-04T16:05:40.142Z] [BOT] 4. #💻・remote-usa: 1 posts
     5. #🤠・austin: 1 posts
[2026-01-04T16:05:40.142Z] [BOT] [STATS] Channel stats saved
[2026-01-04T16:05:42.153Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3201) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*