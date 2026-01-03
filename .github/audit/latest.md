# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T05:40:05.142Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T05:39:25.612Z] ========================================
[2026-01-03T05:39:25.614Z] Discord Bot Execution Log
[2026-01-03T05:39:25.614Z] Environment: GitHub Actions
[2026-01-03T05:39:25.614Z] Node Version: v20.19.6
[2026-01-03T05:39:25.614Z] ========================================
[2026-01-03T05:39:25.614Z] Environment Variables Check:
[2026-01-03T05:39:25.614Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T05:39:25.614Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T05:39:25.614Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T05:39:25.614Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T05:39:25.614Z] 
Multi-Channel Configuration:
[2026-01-03T05:39:25.615Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T05:39:25.615Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T05:39:25.615Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T05:39:25.615Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T05:39:25.615Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T05:39:25.615Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T05:39:25.615Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T05:39:25.615Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T05:39:25.615Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T05:39:25.615Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T05:39:25.615Z] 
Data Files Check:
[2026-01-03T05:39:25.616Z] .github/data/new_jobs.json: ✅ Exists (10 items, 149494 bytes)
[2026-01-03T05:39:25.617Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 108361 bytes)
[2026-01-03T05:39:25.617Z] 
========================================
[2026-01-03T05:39:25.617Z] Starting Enhanced Discord Bot...
[2026-01-03T05:39:25.617Z] ========================================
[2026-01-03T05:39:26.055Z] [BOT] ✅ Loaded V2 database: 185 jobs
[2026-01-03T05:39:26.761Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T05:39:26.762Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T05:39:26.762Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T05:39:26.763Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T05:39:26.876Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 105
[2026-01-03T05:39:26.877Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T05:39:26.878Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T05:39:26.878Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T05:39:26.878Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T05:39:26.879Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T05:39:26.883Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-03T05:39:26.884Z] [BOT] 📍 [ROUTING] "Global Enterprise Account Executive" @ verkada
[2026-01-03T05:39:26.884Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T05:39:26.888Z] [BOT ERROR] (node:2418) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T05:39:27.053Z] [BOT] ✅ Created forum post: 🏢 Global Enterprise Account Executive @ verkada in #💲・sales-jobs
  ✅ Industry: Global Enterprise Account Executive @ verkada
[2026-01-03T05:39:28.554Z] [BOT] 💾 Marked as posted: Global Enterprise Account Executive @ verkada (instance #1)
[2026-01-03T05:39:28.554Z] [BOT] 💾 BEFORE ARCHIVING: 186 jobs in database
[2026-01-03T05:39:28.555Z] [BOT] ✅ No jobs to archive (all 186 jobs within 7-day window)
[2026-01-03T05:39:28.560Z] [BOT] 💾 Saved posted_jobs.json: 186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:39:28.560Z] [BOT] 📍 [ROUTING] "Sales Engineer (Customer Success - Spanish Speaking)" @ datadog
   Category: SALES (matched: "sales")
[2026-01-03T05:39:28.560Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T05:39:28.823Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer (Customer Success - Spanish Speaking) @ datadog in #💲・sales-jobs
  ✅ Industry: Sales Engineer (Customer Success - Spanish Speaking) @ datadog
[2026-01-03T05:39:30.595Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer (Customer Success - Spanish Speaking) @ datadog in #🗽・new-york
[2026-01-03T05:39:30.595Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T05:39:32.096Z] [BOT] 💾 Marked as posted: Sales Engineer (Customer Success - Spanish Speaking) @ datadog (instance #1)
[2026-01-03T05:39:32.096Z] [BOT] 💾 BEFORE ARCHIVING: 187 jobs in database
[2026-01-03T05:39:32.096Z] [BOT] ✅ No jobs to archive (all 187 jobs within 7-day window)
[2026-01-03T05:39:32.098Z] [BOT] 💾 Saved posted_jobs.json: 187 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:39:32.099Z] [BOT] 📍 [ROUTING] "Key Accounts Executive (East)" @ datadog
   Category: SALES (matched: "sales")
[2026-01-03T05:39:32.099Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T05:39:32.261Z] [BOT] ✅ Created forum post: 🏢 Key Accounts Executive (East) @ datadog in #💲・sales-jobs
  ✅ Industry: Key Accounts Executive (East) @ datadog
[2026-01-03T05:39:34.038Z] [BOT] ✅ Created forum post: 🏢 Key Accounts Executive (East) @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T05:39:35.539Z] [BOT] 💾 Marked as posted: Key Accounts Executive (East) @ datadog (instance #1)
[2026-01-03T05:39:35.539Z] [BOT] 💾 BEFORE ARCHIVING: 188 jobs in database
[2026-01-03T05:39:35.539Z] [BOT] ✅ No jobs to archive (all 188 jobs within 7-day window)
[2026-01-03T05:39:35.542Z] [BOT] 💾 Saved posted_jobs.json: 188 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:39:35.543Z] [BOT] 📍 [ROUTING] "Account Development Representative Intern" @ samsara
[2026-01-03T05:39:35.543Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T05:39:35.773Z] [BOT] ✅ Created forum post: 🏢 Account Development Representative Intern @ samsara in #💲・sales-jobs
  ✅ Industry: Account Development Representative Intern @ samsara
[2026-01-03T05:39:37.276Z] [BOT] 💾 Marked as posted: Account Development Representative Intern @ samsara (instance #1)
💾 BEFORE ARCHIVING: 189 jobs in database
✅ No jobs to archive (all 189 jobs within 7-day window)
[2026-01-03T05:39:37.278Z] [BOT] 💾 Saved posted_jobs.json: 189 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:39:40.279Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-03T05:39:40.279Z] [BOT] 📍 [ROUTING] "Technical Support Engineer 2, Premier - Denver" @ datadog
   Category: TECH (matched: "engineer/engineering")
[2026-01-03T05:39:40.279Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T05:39:40.543Z] [BOT] ✅ Created forum post: 🏢 Technical Support Engineer 2, Premier - Denver @ datadog in #💻・tech-jobs
[2026-01-03T05:39:40.543Z] [BOT] ✅ Industry: Technical Support Engineer 2, Premier - Denver @ datadog
[2026-01-03T05:39:42.045Z] [BOT] 💾 Marked as posted: Technical Support Engineer 2, Premier - Denver @ datadog (instance #1)
[2026-01-03T05:39:42.045Z] [BOT] 💾 BEFORE ARCHIVING: 190 jobs in database
✅ No jobs to archive (all 190 jobs within 7-day window)
[2026-01-03T05:39:42.047Z] [BOT] 💾 Saved posted_jobs.json: 190 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:39:42.048Z] [BOT] 📍 [ROUTING] "Federal Support Engineer 2 - Denver" @ datadog
   Category: TECH (matched: "engineer/engineering")
[2026-01-03T05:39:42.048Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T05:39:42.242Z] [BOT] ✅ Created forum post: 🏢 Federal Support Engineer 2 - Denver @ datadog in #💻・tech-jobs
[2026-01-03T05:39:42.242Z] [BOT] ✅ Industry: Federal Support Engineer 2 - Denver @ datadog
[2026-01-03T05:39:43.743Z] [BOT] 💾 Marked as posted: Federal Support Engineer 2 - Denver @ datadog (instance #1)
[2026-01-03T05:39:43.743Z] [BOT] 💾 BEFORE ARCHIVING: 191 jobs in database
✅ No jobs to archive (all 191 jobs within 7-day window)
[2026-01-03T05:39:43.746Z] [BOT] 💾 Saved posted_jobs.json: 191 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:39:43.746Z] [BOT] 📍 [ROUTING] "Software Engineer: Platform Services" @ supabase
   Category: TECH (matched: "software")
[2026-01-03T05:39:43.746Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T05:39:43.982Z] [BOT] ✅ Created forum post: 🏢 Software Engineer: Platform Services @ supabase in #💻・tech-jobs
  ✅ Industry: Software Engineer: Platform Services @ supabase
[2026-01-03T05:39:45.483Z] [BOT] 💾 Marked as posted: Software Engineer: Platform Services @ supabase (instance #1)
💾 BEFORE ARCHIVING: 192 jobs in database
[2026-01-03T05:39:45.483Z] [BOT] ✅ No jobs to archive (all 192 jobs within 7-day window)
[2026-01-03T05:39:45.486Z] [BOT] 💾 Saved posted_jobs.json: 192 active jobs
[2026-01-03T05:39:45.486Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:39:45.486Z] [BOT] 📍 [ROUTING] "Manager 2, Premier Support Engineering -  Boston" @ datadog
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T05:39:45.697Z] [BOT] ✅ Created forum post: 🏢 Manager 2, Premier Support Engineering -  Boston @ datadog in #💻・tech-jobs
  ✅ Industry: Manager 2, Premier Support Engineering -  Boston @ datadog
[2026-01-03T05:39:47.395Z] [BOT] ✅ Created forum post: 🏢 Manager 2, Premier Support Engineering -  Boston @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-03T05:39:48.897Z] [BOT] 💾 Marked as posted: Manager 2, Premier Support Engineering -  Boston @ datadog (instance #1)
💾 BEFORE ARCHIVING: 193 jobs in database
[2026-01-03T05:39:48.897Z] [BOT] ✅ No jobs to archive (all 193 jobs within 7-day window)
[2026-01-03T05:39:48.899Z] [BOT] 💾 Saved posted_jobs.json: 193 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:39:48.899Z] [BOT] 📍 [ROUTING] "Content Engineer" @ vercel
   Category: TECH (matched: "engineer/engineering")
[2026-01-03T05:39:48.899Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T05:39:49.059Z] [BOT] ✅ Created forum post: 🏢 Content Engineer @ vercel in #💻・tech-jobs
[2026-01-03T05:39:49.059Z] [BOT] ✅ Industry: Content Engineer @ vercel
[2026-01-03T05:39:50.768Z] [BOT] ✅ Created forum post: 🏢 Content Engineer @ vercel in #🌉・san-francisco
[2026-01-03T05:39:50.768Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T05:39:52.269Z] [BOT] 💾 Marked as posted: Content Engineer @ vercel (instance #1)
[2026-01-03T05:39:52.269Z] [BOT] 💾 BEFORE ARCHIVING: 194 jobs in database
[2026-01-03T05:39:52.269Z] [BOT] ✅ No jobs to archive (all 194 jobs within 7-day window)
[2026-01-03T05:39:52.272Z] [BOT] 💾 Saved posted_jobs.json: 194 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:39:55.273Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T05:39:55.274Z] [BOT] 📍 [ROUTING] "Executive Assistant I - NYC" @ datadog
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T05:39:55.609Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant I - NYC @ datadog in #📣・marketing-jobs
[2026-01-03T05:39:55.609Z] [BOT] ✅ Industry: Executive Assistant I - NYC @ datadog
[2026-01-03T05:39:57.278Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant I - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T05:39:58.779Z] [BOT] 💾 Marked as posted: Executive Assistant I - NYC @ datadog (instance #1)
[2026-01-03T05:39:58.779Z] [BOT] 💾 BEFORE ARCHIVING: 195 jobs in database
[2026-01-03T05:39:58.780Z] [BOT] ✅ No jobs to archive (all 195 jobs within 7-day window)
[2026-01-03T05:39:58.783Z] [BOT] 💾 Saved posted_jobs.json: 195 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:40:01.784Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T05:40:01.784Z] [BOT] ⏭️  Skipping duplicate: JID_b2bcdce2 (posted within 7 days)
⏭️  Skipping duplicate: JID_37f7437b (posted within 7 days)
⏭️  Skipping duplicate: JID_9271b02d (posted within 7 days)
⏭️  Skipping duplicate: JID_e664e933 (posted within 7 days)
[2026-01-03T05:40:01.784Z] [BOT] ⏭️  Skipping duplicate: JID_3b55c255 (posted within 7 days)
[2026-01-03T05:40:01.784Z] [BOT] ⏭️  Skipping duplicate: JID_d092efb1 (posted within 7 days)
⏭️  Skipping duplicate: JID_101c6abb (posted within 7 days)
[2026-01-03T05:40:01.784Z] [BOT] ⏭️  Skipping duplicate: JID_03d6c806 (posted within 7 days)
[2026-01-03T05:40:01.784Z] [BOT] ⏭️  Skipping duplicate: JID_122347b6 (posted within 7 days)
⏭️  Skipping duplicate: JID_a7c57fc0 (posted within 7 days)
[2026-01-03T05:40:01.909Z] [BOT] ✅ Loaded pending queue: 1105 total (1085 pending, 20 enriched, 0 posted)
[2026-01-03T05:40:02.036Z] [BOT] ✅ Saved pending queue: 1105 total (1085 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T05:40:02.036Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T05:40:02.081Z] [BOT] 📂 Loaded 1254 existing routing entries
[2026-01-03T05:40:02.125Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1264
   Timestamp: 2026-01-03T05:40:02.120Z
[2026-01-03T05:40:02.125Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 15
   Successful: 15
[2026-01-03T05:40:02.126Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-03T05:40:02.126Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T05:40:02.126Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 6
   Top channels:
[2026-01-03T05:40:02.126Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #💲・sales-jobs: 4 posts
     3. #🗽・new-york: 3 posts
     4. #🚌・boston: 1 posts
[2026-01-03T05:40:02.126Z] [BOT] 5. #🌉・san-francisco: 1 posts
[2026-01-03T05:40:02.126Z] [BOT] [STATS] Channel stats saved
[2026-01-03T05:40:04.142Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2418) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*