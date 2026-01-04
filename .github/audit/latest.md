# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T14:50:48.347Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T14:49:57.810Z] ========================================
[2026-01-04T14:49:57.812Z] Discord Bot Execution Log
[2026-01-04T14:49:57.812Z] Environment: GitHub Actions
[2026-01-04T14:49:57.813Z] Node Version: v20.19.6
[2026-01-04T14:49:57.813Z] ========================================
[2026-01-04T14:49:57.813Z] Environment Variables Check:
[2026-01-04T14:49:57.813Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T14:49:57.813Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T14:49:57.813Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T14:49:57.813Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T14:49:57.813Z] 
Multi-Channel Configuration:
[2026-01-04T14:49:57.813Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T14:49:57.813Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T14:49:57.814Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T14:49:57.814Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T14:49:57.814Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T14:49:57.814Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T14:49:57.814Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T14:49:57.814Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T14:49:57.814Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T14:49:57.814Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T14:49:57.814Z] 
Data Files Check:
[2026-01-04T14:49:57.815Z] .github/data/new_jobs.json: ✅ Exists (10 items, 104324 bytes)
[2026-01-04T14:49:57.819Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 577887 bytes)
[2026-01-04T14:49:57.819Z] 
========================================
[2026-01-04T14:49:57.819Z] Starting Enhanced Discord Bot...
[2026-01-04T14:49:57.819Z] ========================================
[2026-01-04T14:49:58.361Z] [BOT] ✅ Loaded V2 database: 1150 jobs
[2026-01-04T14:49:59.112Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T14:49:59.112Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T14:49:59.112Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T14:49:59.113Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T14:49:59.183Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T14:49:59.271Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T14:49:59.274Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T14:49:59.274Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T14:49:59.274Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T14:49:59.275Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T14:49:59.275Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T14:49:59.280Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-04T14:49:59.280Z] [BOT] 📍 [ROUTING] "Product Designer" @ railway
[2026-01-04T14:49:59.280Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T14:49:59.298Z] [BOT ERROR] (node:2919) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T14:49:59.694Z] [BOT] ✅ Created forum post: 🏢 Product Designer @ railway in #📣・marketing-jobs
[2026-01-04T14:49:59.694Z] [BOT] ✅ Industry: Product Designer @ railway
[2026-01-04T14:50:01.599Z] [BOT] ✅ Created forum post: 🏢 Product Designer @ railway in #💻・remote-usa
[2026-01-04T14:50:01.599Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-04T14:50:03.101Z] [BOT] 💾 Marked as posted: Product Designer @ railway (instance #1)
[2026-01-04T14:50:03.101Z] [BOT] 💾 BEFORE ARCHIVING: 1151 jobs in database
[2026-01-04T14:50:03.102Z] [BOT] ✅ No jobs to archive (all 1151 jobs within 7-day window)
[2026-01-04T14:50:03.114Z] [BOT] 💾 Saved posted_jobs.json: 1151 active jobs
[2026-01-04T14:50:03.114Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:50:03.114Z] [BOT] 📍 [ROUTING] "Head of Brand Campaigns" @ duolingo
[2026-01-04T14:50:03.115Z] [BOT] Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T14:50:03.296Z] [BOT] ✅ Created forum post: 🏢 Head of Brand Campaigns @ duolingo in #📣・marketing-jobs
[2026-01-04T14:50:03.296Z] [BOT] ✅ Industry: Head of Brand Campaigns @ duolingo
[2026-01-04T14:50:05.332Z] [BOT] ✅ Created forum post: 🏢 Head of Brand Campaigns @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T14:50:06.833Z] [BOT] 💾 Marked as posted: Head of Brand Campaigns @ duolingo (instance #1)
💾 BEFORE ARCHIVING: 1152 jobs in database
[2026-01-04T14:50:06.834Z] [BOT] ✅ No jobs to archive (all 1152 jobs within 7-day window)
[2026-01-04T14:50:06.840Z] [BOT] 💾 Saved posted_jobs.json: 1152 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:50:09.841Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-04T14:50:09.841Z] [BOT] 📍 [ROUTING] "Postgres Engineer" @ supabase
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:50:10.330Z] [BOT] ✅ Created forum post: 🏢 Postgres Engineer @ supabase in #💻・tech-jobs
[2026-01-04T14:50:10.330Z] [BOT] ✅ Industry: Postgres Engineer @ supabase
[2026-01-04T14:50:11.832Z] [BOT] 💾 Marked as posted: Postgres Engineer @ supabase (instance #1)
[2026-01-04T14:50:11.832Z] [BOT] 💾 BEFORE ARCHIVING: 1153 jobs in database
[2026-01-04T14:50:11.833Z] [BOT] ✅ No jobs to archive (all 1153 jobs within 7-day window)
[2026-01-04T14:50:11.840Z] [BOT] 💾 Saved posted_jobs.json: 1153 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:50:11.840Z] [BOT] 📍 [ROUTING] "Postgres Security Engineer" @ supabase
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:50:12.039Z] [BOT] ✅ Created forum post: 🏢 Postgres Security Engineer @ supabase in #💻・tech-jobs
  ✅ Industry: Postgres Security Engineer @ supabase
[2026-01-04T14:50:13.540Z] [BOT] 💾 Marked as posted: Postgres Security Engineer @ supabase (instance #1)
[2026-01-04T14:50:13.540Z] [BOT] 💾 BEFORE ARCHIVING: 1154 jobs in database
[2026-01-04T14:50:13.541Z] [BOT] ✅ No jobs to archive (all 1154 jobs within 7-day window)
[2026-01-04T14:50:13.548Z] [BOT] 💾 Saved posted_jobs.json: 1154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:50:16.549Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-04T14:50:16.549Z] [BOT] 📍 [ROUTING] "Senior Product Manager, Ads" @ duolingo
   Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-04T14:50:16.839Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Ads @ duolingo in #📦・product-jobs
[2026-01-04T14:50:16.839Z] [BOT] ✅ Industry: Senior Product Manager, Ads @ duolingo
[2026-01-04T14:50:18.545Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Ads @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T14:50:20.046Z] [BOT] 💾 Marked as posted: Senior Product Manager, Ads @ duolingo (instance #1)
[2026-01-04T14:50:20.046Z] [BOT] 💾 BEFORE ARCHIVING: 1155 jobs in database
[2026-01-04T14:50:20.047Z] [BOT] ✅ No jobs to archive (all 1155 jobs within 7-day window)
[2026-01-04T14:50:20.056Z] [BOT] 💾 Saved posted_jobs.json: 1155 active jobs
[2026-01-04T14:50:20.056Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:50:23.057Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-04T14:50:23.057Z] [BOT] 📍 [ROUTING] "Account Executive (USA)" @ supabase
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T14:50:23.407Z] [BOT] ✅ Created forum post: 🏢 Account Executive (USA) @ supabase in #💲・sales-jobs
  ✅ Industry: Account Executive (USA) @ supabase
[2026-01-04T14:50:25.259Z] [BOT] ✅ Created forum post: 🏢 Account Executive (USA) @ supabase in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-04T14:50:26.760Z] [BOT] 💾 Marked as posted: Account Executive (USA) @ supabase (instance #1)
[2026-01-04T14:50:26.760Z] [BOT] 💾 BEFORE ARCHIVING: 1156 jobs in database
[2026-01-04T14:50:26.761Z] [BOT] ✅ No jobs to archive (all 1156 jobs within 7-day window)
[2026-01-04T14:50:26.770Z] [BOT] 💾 Saved posted_jobs.json: 1156 active jobs
[2026-01-04T14:50:26.770Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:50:26.770Z] [BOT] 📍 [ROUTING] "Customer Solution Architect Team Lead (EMEA)" @ supabase
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T14:50:26.950Z] [BOT] ✅ Created forum post: 🏢 Customer Solution Architect Team Lead (EMEA) @ supabase in #💲・sales-jobs
  ✅ Industry: Customer Solution Architect Team Lead (EMEA) @ supabase
[2026-01-04T14:50:28.452Z] [BOT] 💾 Marked as posted: Customer Solution Architect Team Lead (EMEA) @ supabase (instance #1)
[2026-01-04T14:50:28.452Z] [BOT] 💾 BEFORE ARCHIVING: 1157 jobs in database
[2026-01-04T14:50:28.453Z] [BOT] ✅ No jobs to archive (all 1157 jobs within 7-day window)
[2026-01-04T14:50:28.461Z] [BOT] 💾 Saved posted_jobs.json: 1157 active jobs
[2026-01-04T14:50:28.461Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:50:31.462Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-04T14:50:31.462Z] [BOT] 📍 [ROUTING] "Recruiting Coordinator" @ nominal
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T14:50:31.781Z] [BOT] ✅ Created forum post: 🏢 Recruiting Coordinator @ nominal in #🤖・ai-jobs
[2026-01-04T14:50:31.781Z] [BOT] ✅ Industry: Recruiting Coordinator @ nominal
[2026-01-04T14:50:33.523Z] [BOT] ✅ Created forum post: 🏢 Recruiting Coordinator @ nominal in #🗽・new-york
[2026-01-04T14:50:33.523Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T14:50:35.024Z] [BOT] 💾 Marked as posted: Recruiting Coordinator @ nominal (instance #1)
[2026-01-04T14:50:35.024Z] [BOT] 💾 BEFORE ARCHIVING: 1158 jobs in database
[2026-01-04T14:50:35.025Z] [BOT] ✅ No jobs to archive (all 1158 jobs within 7-day window)
[2026-01-04T14:50:35.034Z] [BOT] 💾 Saved posted_jobs.json: 1158 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:50:35.034Z] [BOT] 📍 [ROUTING] "Events Partnerships Manager" @ gohighlevel
[2026-01-04T14:50:35.034Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T14:50:37.422Z] [BOT] ✅ Created forum post: 🏢 Events Partnerships Manager @ gohighlevel in #🤖・ai-jobs
[2026-01-04T14:50:37.423Z] [BOT] ✅ Industry: Events Partnerships Manager @ gohighlevel
[2026-01-04T14:50:38.923Z] [BOT] 💾 Marked as posted: Events Partnerships Manager @ gohighlevel (instance #1)
[2026-01-04T14:50:38.924Z] [BOT] 💾 BEFORE ARCHIVING: 1159 jobs in database
[2026-01-04T14:50:38.924Z] [BOT] ✅ No jobs to archive (all 1159 jobs within 7-day window)
[2026-01-04T14:50:38.932Z] [BOT] 💾 Saved posted_jobs.json: 1159 active jobs
[2026-01-04T14:50:38.932Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:50:38.933Z] [BOT] 📍 [ROUTING] "Staff Research Engineer - Music" @ spotify
[2026-01-04T14:50:38.933Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T14:50:39.224Z] [BOT] ✅ Created forum post: 🏢 Staff Research Engineer - Music @ spotify in #🤖・ai-jobs
[2026-01-04T14:50:39.224Z] [BOT] ✅ Industry: Staff Research Engineer - Music @ spotify
[2026-01-04T14:50:40.921Z] [BOT] ✅ Created forum post: 🏢 Staff Research Engineer - Music @ spotify in #🗽・new-york
[2026-01-04T14:50:40.921Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T14:50:42.422Z] [BOT] 💾 Marked as posted: Staff Research Engineer - Music @ spotify (instance #1)
[2026-01-04T14:50:42.422Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-04T14:50:42.424Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-04T14:50:42.432Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-04T14:50:42.433Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:50:45.432Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T14:50:45.433Z] [BOT] ⏭️  Skipping duplicate: JID_fe2e9e63 (posted within 7 days)
[2026-01-04T14:50:45.433Z] [BOT] ⏭️  Skipping duplicate: JID_24b2ac9b (posted within 7 days)
[2026-01-04T14:50:45.433Z] [BOT] ⏭️  Skipping duplicate: JID_243daf81 (posted within 7 days)
[2026-01-04T14:50:45.433Z] [BOT] ⏭️  Skipping duplicate: JID_cff2e5a7 (posted within 7 days)
[2026-01-04T14:50:45.433Z] [BOT] ⏭️  Skipping duplicate: JID_838eee4a (posted within 7 days)
[2026-01-04T14:50:45.433Z] [BOT] ⏭️  Skipping duplicate: JID_f5ef0997 (posted within 7 days)
[2026-01-04T14:50:45.434Z] [BOT] ⏭️  Skipping duplicate: JID_260b6884 (posted within 7 days)
[2026-01-04T14:50:45.434Z] [BOT] ⏭️  Skipping duplicate: JID_56f04e2f (posted within 7 days)
[2026-01-04T14:50:45.434Z] [BOT] ⏭️  Skipping duplicate: JID_344c9af2 (posted within 7 days)
[2026-01-04T14:50:45.434Z] [BOT] ⏭️  Skipping duplicate: JID_59b63486 (posted within 7 days)
[2026-01-04T14:50:45.440Z] [BOT] ✅ Loaded pending queue: 140 total (120 pending, 20 enriched, 0 posted)
[2026-01-04T14:50:45.446Z] [BOT] ✅ Saved pending queue: 140 total (120 pending, 10 enriched, 10 posted)
[2026-01-04T14:50:45.447Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T14:50:45.501Z] [BOT] 📂 Loaded 2069 existing routing entries
[2026-01-04T14:50:45.554Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T14:50:45.554Z] [BOT] Total entries: 2079
   Timestamp: 2026-01-04T14:50:45.543Z
[2026-01-04T14:50:45.555Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T14:50:45.555Z] [BOT] Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-04T14:50:45.555Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T14:50:45.555Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 7
   Top channels:
[2026-01-04T14:50:45.555Z] [BOT] 1. #🗽・new-york: 4 posts
     2. #🤖・ai-jobs: 3 posts
     3. #📣・marketing-jobs: 2 posts
     4. #💻・remote-usa: 2 posts
     5. #💻・tech-jobs: 2 posts
[2026-01-04T14:50:45.555Z] [BOT] [STATS] Channel stats saved
[2026-01-04T14:50:47.567Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2919) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*