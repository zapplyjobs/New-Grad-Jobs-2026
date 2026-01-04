# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T15:05:51.629Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T15:05:06.680Z] ========================================
[2026-01-04T15:05:06.682Z] Discord Bot Execution Log
[2026-01-04T15:05:06.682Z] Environment: GitHub Actions
[2026-01-04T15:05:06.682Z] Node Version: v20.19.6
[2026-01-04T15:05:06.682Z] ========================================
[2026-01-04T15:05:06.682Z] Environment Variables Check:
[2026-01-04T15:05:06.682Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T15:05:06.682Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T15:05:06.682Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T15:05:06.682Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T15:05:06.682Z] 
Multi-Channel Configuration:
[2026-01-04T15:05:06.683Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T15:05:06.683Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T15:05:06.683Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T15:05:06.683Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T15:05:06.683Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T15:05:06.683Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T15:05:06.683Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T15:05:06.683Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T15:05:06.683Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T15:05:06.683Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T15:05:06.683Z] 
Data Files Check:
[2026-01-04T15:05:06.684Z] .github/data/new_jobs.json: ✅ Exists (10 items, 84562 bytes)
[2026-01-04T15:05:06.689Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 583033 bytes)
[2026-01-04T15:05:06.689Z] 
========================================
[2026-01-04T15:05:06.689Z] Starting Enhanced Discord Bot...
[2026-01-04T15:05:06.689Z] ========================================
[2026-01-04T15:05:07.233Z] [BOT] ✅ Loaded V2 database: 1160 jobs
[2026-01-04T15:05:07.926Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T15:05:07.926Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T15:05:07.926Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T15:05:07.927Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T15:05:07.999Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T15:05:08.089Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T15:05:08.092Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T15:05:08.092Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T15:05:08.092Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T15:05:08.093Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T15:05:08.093Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T15:05:08.098Z] [BOT] 📌 Posting 7 jobs to #🤖・ai-jobs
[2026-01-04T15:05:08.099Z] [BOT] 📍 [ROUTING] "Senior Research Engineer - Music" @ spotify
[2026-01-04T15:05:08.099Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T15:05:08.117Z] [BOT ERROR] (node:3387) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T15:05:08.343Z] [BOT] ✅ Created forum post: 🏢 Senior Research Engineer - Music @ spotify in #🤖・ai-jobs
  ✅ Industry: Senior Research Engineer - Music @ spotify
[2026-01-04T15:05:10.108Z] [BOT] ✅ Created forum post: 🏢 Senior Research Engineer - Music @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T15:05:11.608Z] [BOT] 💾 Marked as posted: Senior Research Engineer - Music @ spotify (instance #1)
[2026-01-04T15:05:11.608Z] [BOT] 💾 BEFORE ARCHIVING: 1161 jobs in database
[2026-01-04T15:05:11.609Z] [BOT] ✅ No jobs to archive (all 1161 jobs within 7-day window)
[2026-01-04T15:05:11.622Z] [BOT] 💾 Saved posted_jobs.json: 1161 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:05:11.623Z] [BOT] 📍 [ROUTING] "Principal Research Scientist - Music" @ spotify
[2026-01-04T15:05:11.623Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:05:12.008Z] [BOT] ✅ Created forum post: 🏢 Principal Research Scientist - Music @ spotify in #🤖・ai-jobs
  ✅ Industry: Principal Research Scientist - Music @ spotify
[2026-01-04T15:05:13.666Z] [BOT] ✅ Created forum post: 🏢 Principal Research Scientist - Music @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T15:05:15.167Z] [BOT] 💾 Marked as posted: Principal Research Scientist - Music @ spotify (instance #1)
💾 BEFORE ARCHIVING: 1162 jobs in database
[2026-01-04T15:05:15.168Z] [BOT] ✅ No jobs to archive (all 1162 jobs within 7-day window)
[2026-01-04T15:05:15.176Z] [BOT] 💾 Saved posted_jobs.json: 1162 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:05:15.176Z] [BOT] 📍 [ROUTING] "Staff Research Scientist - Music" @ spotify
[2026-01-04T15:05:15.176Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:05:15.331Z] [BOT] ✅ Created forum post: 🏢 Staff Research Scientist - Music @ spotify in #🤖・ai-jobs
[2026-01-04T15:05:15.332Z] [BOT] ✅ Industry: Staff Research Scientist - Music @ spotify
[2026-01-04T15:05:17.269Z] [BOT] ✅ Created forum post: 🏢 Staff Research Scientist - Music @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T15:05:18.770Z] [BOT] 💾 Marked as posted: Staff Research Scientist - Music @ spotify (instance #1)
[2026-01-04T15:05:18.771Z] [BOT] 💾 BEFORE ARCHIVING: 1163 jobs in database
[2026-01-04T15:05:18.771Z] [BOT] ✅ No jobs to archive (all 1163 jobs within 7-day window)
[2026-01-04T15:05:18.781Z] [BOT] 💾 Saved posted_jobs.json: 1163 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:05:18.782Z] [BOT] 📍 [ROUTING] "Senior Research Scientist - Music" @ spotify
[2026-01-04T15:05:18.782Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:05:18.964Z] [BOT] ✅ Created forum post: 🏢 Senior Research Scientist - Music @ spotify in #🤖・ai-jobs
  ✅ Industry: Senior Research Scientist - Music @ spotify
[2026-01-04T15:05:20.723Z] [BOT] ✅ Created forum post: 🏢 Senior Research Scientist - Music @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T15:05:22.223Z] [BOT] 💾 Marked as posted: Senior Research Scientist - Music @ spotify (instance #1)
[2026-01-04T15:05:22.224Z] [BOT] 💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-04T15:05:22.225Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-04T15:05:22.233Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:05:22.234Z] [BOT] 📍 [ROUTING] "Senior Content Accountant" @ spotify
[2026-01-04T15:05:22.234Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-04T15:05:22.403Z] [BOT] ✅ Created forum post: 🏢 Senior Content Accountant @ spotify in #🤖・ai-jobs
  ✅ Industry: Senior Content Accountant @ spotify
[2026-01-04T15:05:24.136Z] [BOT] ✅ Created forum post: 🏢 Senior Content Accountant @ spotify in #🗽・new-york
[2026-01-04T15:05:24.136Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T15:05:25.637Z] [BOT] 💾 Marked as posted: Senior Content Accountant @ spotify (instance #1)
[2026-01-04T15:05:25.638Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-04T15:05:25.639Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-04T15:05:25.648Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:05:25.649Z] [BOT] 📍 [ROUTING] "Payroll Specialist" @ spotify
[2026-01-04T15:05:25.649Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T15:05:25.874Z] [BOT] ✅ Created forum post: 🏢 Payroll Specialist @ spotify in #🤖・ai-jobs
[2026-01-04T15:05:25.874Z] [BOT] ✅ Industry: Payroll Specialist @ spotify
[2026-01-04T15:05:27.872Z] [BOT] ✅ Created forum post: 🏢 Payroll Specialist @ spotify in #🗽・new-york
[2026-01-04T15:05:27.873Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T15:05:29.373Z] [BOT] 💾 Marked as posted: Payroll Specialist @ spotify (instance #1)
[2026-01-04T15:05:29.373Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-04T15:05:29.374Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-04T15:05:29.383Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:05:29.383Z] [BOT] 📍 [ROUTING] "Senior Growth Engineer" @ clerk
[2026-01-04T15:05:29.383Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T15:05:29.522Z] [BOT] ✅ Created forum post: 🏢 Senior Growth Engineer @ clerk in #🤖・ai-jobs
[2026-01-04T15:05:29.523Z] [BOT] ✅ Industry: Senior Growth Engineer @ clerk
[2026-01-04T15:05:31.023Z] [BOT] 💾 Marked as posted: Senior Growth Engineer @ clerk (instance #1)
[2026-01-04T15:05:31.023Z] [BOT] 💾 BEFORE ARCHIVING: 1167 jobs in database
[2026-01-04T15:05:31.024Z] [BOT] ✅ No jobs to archive (all 1167 jobs within 7-day window)
[2026-01-04T15:05:31.032Z] [BOT] 💾 Saved posted_jobs.json: 1167 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:05:34.033Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-04T15:05:34.033Z] [BOT] 📍 [ROUTING] "Director of Learning Design, New Subjects" @ duolingo
[2026-01-04T15:05:34.034Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T15:05:34.359Z] [BOT] ✅ Created forum post: 🏢 Director of Learning Design, New Subjects @ duolingo in #💻・tech-jobs
  ✅ Industry: Director of Learning Design, New Subjects @ duolingo
[2026-01-04T15:05:36.198Z] [BOT] ✅ Created forum post: 🏢 Director of Learning Design, New Subjects @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T15:05:37.699Z] [BOT] 💾 Marked as posted: Director of Learning Design, New Subjects @ duolingo (instance #1)
[2026-01-04T15:05:37.699Z] [BOT] 💾 BEFORE ARCHIVING: 1168 jobs in database
[2026-01-04T15:05:37.700Z] [BOT] ✅ No jobs to archive (all 1168 jobs within 7-day window)
[2026-01-04T15:05:37.710Z] [BOT] 💾 Saved posted_jobs.json: 1168 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:05:40.710Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-04T15:05:40.710Z] [BOT] 📍 [ROUTING] "Account Executive , USA " @ supabase
   Category: SALES (matched: "sales")
[2026-01-04T15:05:40.710Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T15:05:40.911Z] [BOT] ✅ Created forum post: 🏢 Account Executive , USA  @ supabase in #💲・sales-jobs
  ✅ Industry: Account Executive , USA  @ supabase
[2026-01-04T15:05:42.647Z] [BOT] ✅ Created forum post: 🏢 Account Executive , USA  @ supabase in #💻・remote-usa
[2026-01-04T15:05:42.647Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-04T15:05:44.148Z] [BOT] 💾 Marked as posted: Account Executive , USA  @ supabase (instance #1)
[2026-01-04T15:05:44.149Z] [BOT] 💾 BEFORE ARCHIVING: 1169 jobs in database
[2026-01-04T15:05:44.150Z] [BOT] ✅ No jobs to archive (all 1169 jobs within 7-day window)
[2026-01-04T15:05:44.159Z] [BOT] 💾 Saved posted_jobs.json: 1169 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:05:44.159Z] [BOT] 📍 [ROUTING] " Account Executive, EMEA" @ supabase
[2026-01-04T15:05:44.159Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T15:05:44.353Z] [BOT] ✅ Created forum post: 🏢  Account Executive, EMEA @ supabase in #💲・sales-jobs
  ✅ Industry:  Account Executive, EMEA @ supabase
[2026-01-04T15:05:45.855Z] [BOT] 💾 Marked as posted:  Account Executive, EMEA @ supabase (instance #1)
[2026-01-04T15:05:45.855Z] [BOT] 💾 BEFORE ARCHIVING: 1170 jobs in database
[2026-01-04T15:05:45.856Z] [BOT] ✅ No jobs to archive (all 1170 jobs within 7-day window)
[2026-01-04T15:05:45.865Z] [BOT] 💾 Saved posted_jobs.json: 1170 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T15:05:48.867Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T15:05:48.867Z] [BOT] ⏭️  Skipping duplicate: JID_33936fee (posted within 7 days)
[2026-01-04T15:05:48.867Z] [BOT] ⏭️  Skipping duplicate: JID_3184f7b9 (posted within 7 days)
[2026-01-04T15:05:48.868Z] [BOT] ⏭️  Skipping duplicate: JID_1bbc12f0 (posted within 7 days)
⏭️  Skipping duplicate: JID_4d3af71c (posted within 7 days)
[2026-01-04T15:05:48.868Z] [BOT] ⏭️  Skipping duplicate: JID_b18dfc7e (posted within 7 days)
⏭️  Skipping duplicate: JID_c4a32929 (posted within 7 days)
[2026-01-04T15:05:48.868Z] [BOT] ⏭️  Skipping duplicate: JID_8807d73b (posted within 7 days)
[2026-01-04T15:05:48.868Z] [BOT] ⏭️  Skipping duplicate: JID_f55550ba (posted within 7 days)
⏭️  Skipping duplicate: JID_8612d4b2 (posted within 7 days)
⏭️  Skipping duplicate: JID_09497a40 (posted within 7 days)
[2026-01-04T15:05:48.872Z] [BOT] ✅ Loaded pending queue: 130 total (110 pending, 20 enriched, 0 posted)
[2026-01-04T15:05:48.879Z] [BOT] ✅ Saved pending queue: 130 total (110 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-04T15:05:48.880Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T15:05:48.928Z] [BOT] 📂 Loaded 2079 existing routing entries
[2026-01-04T15:05:48.984Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T15:05:48.985Z] [BOT] Total entries: 2089
   Timestamp: 2026-01-04T15:05:48.973Z
[2026-01-04T15:05:48.985Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T15:05:48.985Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-04T15:05:48.985Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T15:05:48.985Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 5
   Top channels:
     1. #🤖・ai-jobs: 7 posts
     2. #🗽・new-york: 7 posts
     3. #💲・sales-jobs: 2 posts
[2026-01-04T15:05:48.986Z] [BOT] 4. #💻・tech-jobs: 1 posts
     5. #💻・remote-usa: 1 posts
[2026-01-04T15:05:48.986Z] [BOT] [STATS] Channel stats saved
[2026-01-04T15:05:51.000Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3387) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*