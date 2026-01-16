# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T07:31:31.229Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T07:30:41.968Z] ========================================
[2026-01-16T07:30:41.969Z] Discord Bot Execution Log
[2026-01-16T07:30:41.970Z] Environment: GitHub Actions
[2026-01-16T07:30:41.970Z] Node Version: v20.19.6
[2026-01-16T07:30:41.970Z] ========================================
[2026-01-16T07:30:41.970Z] Environment Variables Check:
[2026-01-16T07:30:41.970Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T07:30:41.970Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T07:30:41.970Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T07:30:41.970Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T07:30:41.970Z] 
Multi-Channel Configuration:
[2026-01-16T07:30:41.970Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T07:30:41.971Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T07:30:41.971Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T07:30:41.971Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T07:30:41.971Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T07:30:41.971Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T07:30:41.971Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T07:30:41.971Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T07:30:41.971Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T07:30:41.971Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T07:30:41.971Z] 
Data Files Check:
[2026-01-16T07:30:41.972Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58037 bytes)
[2026-01-16T07:30:41.980Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1062843 bytes)
[2026-01-16T07:30:41.980Z] 
========================================
[2026-01-16T07:30:41.980Z] Starting Enhanced Discord Bot...
[2026-01-16T07:30:41.980Z] ========================================
[2026-01-16T07:30:42.510Z] [BOT] ✅ Loaded V2 database: 1972 jobs
[2026-01-16T07:30:43.175Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T07:30:43.175Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T07:30:43.176Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T07:30:43.288Z] [BOT] ✅ Loaded pending queue: 2763 total (2743 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Engineer – Entry Level at Toyota Connected
[2026-01-16T07:30:43.291Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T07:30:43.291Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T07:30:43.292Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T07:30:43.292Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-16T07:30:43.292Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Enterprise Account Executive @ nominal: new york, austin
   - AI Research Engineer @ ORG_facb5814ingo: new york, pittsburgh
[2026-01-16T07:30:43.293Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T07:30:43.295Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-16T07:30:43.296Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer – Entry Level" @ ORG_abf215e6 Connected
[2026-01-16T07:30:43.296Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T07:30:43.297Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T07:30:43.314Z] [BOT ERROR] (node:3495) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T07:30:43.682Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer – Entry Level @ ORG_abf215e6 Connected in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer – Entry Level @ ORG_abf215e6 Connected
[2026-01-16T07:30:46.982Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer – Entry Level @ ORG_abf215e6 Connected in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T07:30:48.483Z] [BOT] 💾 Marked as posted: Machine Learning Engineer – Entry Level @ ORG_abf215e6 Connected (instance #1)
[2026-01-16T07:30:48.484Z] [BOT] 💾 BEFORE ARCHIVING: 1973 jobs in database
[2026-01-16T07:30:48.485Z] [BOT] ✅ No jobs to archive (all 1973 jobs within 7-day window)
[2026-01-16T07:30:48.501Z] [BOT] 💾 Saved posted_jobs.json: 1973 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:30:48.502Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ nominal
   Category: AI (matched: "artificial intelligence")
[2026-01-16T07:30:48.503Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-16T07:30:48.689Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ nominal in #🤖・ai-jobs
[2026-01-16T07:30:48.690Z] [BOT] ✅ Industry: Enterprise Account Executive @ nominal
[2026-01-16T07:30:50.417Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ nominal in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T07:30:51.917Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ nominal (instance #1)
[2026-01-16T07:30:51.918Z] [BOT] 💾 BEFORE ARCHIVING: 1974 jobs in database
[2026-01-16T07:30:51.919Z] [BOT] ✅ No jobs to archive (all 1974 jobs within 7-day window)
[2026-01-16T07:30:51.934Z] [BOT] 💾 Saved posted_jobs.json: 1974 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:30:51.934Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ nominal (instance #1)
[2026-01-16T07:30:51.935Z] [BOT] 💾 BEFORE ARCHIVING: 1975 jobs in database
[2026-01-16T07:30:51.936Z] [BOT] ✅ No jobs to archive (all 1975 jobs within 7-day window)
[2026-01-16T07:30:51.950Z] [BOT] 💾 Saved posted_jobs.json: 1975 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:30:51.951Z] [BOT] 📍 [ROUTING] "Junior Artificial Intelligence (AI) / Machine Learning (ML) Engineer" @ ORG_8bc2a0e9ind
[2026-01-16T07:30:51.951Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T07:30:52.196Z] [BOT] ✅ Created forum post: 🏢 Junior Artificial Intelligence (AI) / Machine Learning (ML) Engineer @ ORG_8bc2a0e9ind in #🤖・ai-jobs
  ✅ Industry: Junior Artificial Intelligence (AI) / Machine Learning (ML) Engineer @ ORG_8bc2a0e9ind
[2026-01-16T07:30:53.987Z] [BOT] ✅ Created forum post: 🏢 Junior Artificial Intelligence (AI) / Machine Learning (ML) Engineer @ ORG_8bc2a0e9ind in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T07:30:55.488Z] [BOT] 💾 Marked as posted: Junior Artificial Intelligence (AI) / Machine Learning (ML) Engineer @ ORG_8bc2a0e9ind (instance #1)
[2026-01-16T07:30:55.489Z] [BOT] 💾 BEFORE ARCHIVING: 1976 jobs in database
[2026-01-16T07:30:55.490Z] [BOT] ✅ No jobs to archive (all 1976 jobs within 7-day window)
[2026-01-16T07:30:55.502Z] [BOT] 💾 Saved posted_jobs.json: 1976 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:30:55.503Z] [BOT] 📍 [ROUTING] "Product Support Engineer" @ nominal
[2026-01-16T07:30:55.503Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T07:30:55.726Z] [BOT] ✅ Created forum post: 🏢 Product Support Engineer @ nominal in #🤖・ai-jobs
[2026-01-16T07:30:55.726Z] [BOT] ✅ Industry: Product Support Engineer @ nominal
[2026-01-16T07:30:57.500Z] [BOT] ✅ Created forum post: 🏢 Product Support Engineer @ nominal in #🗽・new-york
[2026-01-16T07:30:57.500Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T07:30:59.001Z] [BOT] 💾 Marked as posted: Product Support Engineer @ nominal (instance #1)
[2026-01-16T07:30:59.001Z] [BOT] 💾 BEFORE ARCHIVING: 1977 jobs in database
[2026-01-16T07:30:59.002Z] [BOT] ✅ No jobs to archive (all 1977 jobs within 7-day window)
[2026-01-16T07:30:59.016Z] [BOT] 💾 Saved posted_jobs.json: 1977 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:30:59.017Z] [BOT] 📍 [ROUTING] "Manager, Digital Marketing" @ gohighlevel
[2026-01-16T07:30:59.017Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T07:30:59.304Z] [BOT] ✅ Created forum post: 🏢 Manager, Digital Marketing @ gohighlevel in #🤖・ai-jobs
[2026-01-16T07:30:59.304Z] [BOT] ✅ Industry: Manager, Digital Marketing @ gohighlevel
[2026-01-16T07:31:00.805Z] [BOT] 💾 Marked as posted: Manager, Digital Marketing @ gohighlevel (instance #1)
[2026-01-16T07:31:00.805Z] [BOT] 💾 BEFORE ARCHIVING: 1978 jobs in database
[2026-01-16T07:31:00.807Z] [BOT] ✅ No jobs to archive (all 1978 jobs within 7-day window)
[2026-01-16T07:31:00.821Z] [BOT] 💾 Saved posted_jobs.json: 1978 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:31:03.823Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-16T07:31:03.823Z] [BOT] 📍 [ROUTING] "Technical Account Executive" @ clerk
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-16T07:31:04.052Z] [BOT] ✅ Created forum post: 🏢 Technical Account Executive @ clerk in #💲・sales-jobs
  ✅ Industry: Technical Account Executive @ clerk
[2026-01-16T07:31:05.775Z] [BOT] ✅ Created forum post: 🏢 Technical Account Executive @ clerk in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T07:31:07.276Z] [BOT] 💾 Marked as posted: Technical Account Executive @ clerk (instance #1)
[2026-01-16T07:31:07.277Z] [BOT] 💾 BEFORE ARCHIVING: 1979 jobs in database
[2026-01-16T07:31:07.278Z] [BOT] ✅ No jobs to archive (all 1979 jobs within 7-day window)
[2026-01-16T07:31:07.293Z] [BOT] 💾 Saved posted_jobs.json: 1979 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:31:10.294Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-16T07:31:10.295Z] [BOT] 📍 [ROUTING] "Macy's Tech Early Careers - Software Engineer" @ Macy's
   Category: TECH (matched: "software")
[2026-01-16T07:31:10.295Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:31:10.656Z] [BOT] ✅ Created forum post: 🏢 Macy's Tech Early Careers - Software Engineer @ Macy's in #💻・tech-jobs
[2026-01-16T07:31:10.656Z] [BOT] ✅ Industry: Macy's Tech Early Careers - Software Engineer @ Macy's
[2026-01-16T07:31:12.363Z] [BOT] ✅ Created forum post: 🏢 Macy's Tech Early Careers - Software Engineer @ Macy's in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T07:31:13.864Z] [BOT] 💾 Marked as posted: Macy's Tech Early Careers - Software Engineer @ Macy's (instance #1)
[2026-01-16T07:31:13.864Z] [BOT] 💾 BEFORE ARCHIVING: 1980 jobs in database
[2026-01-16T07:31:13.866Z] [BOT] ✅ No jobs to archive (all 1980 jobs within 7-day window)
[2026-01-16T07:31:13.878Z] [BOT] 💾 Saved posted_jobs.json: 1980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:31:13.879Z] [BOT] 📍 [ROUTING] "Software Engineer - Direct To Cell" @ ORG_afd623b1
[2026-01-16T07:31:13.879Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:31:14.161Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Direct To Cell @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Direct To Cell @ ORG_afd623b1
[2026-01-16T07:31:15.859Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Direct To Cell @ ORG_afd623b1 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2026-01-16T07:31:17.361Z] [BOT] 💾 Marked as posted: Software Engineer - Direct To Cell @ ORG_afd623b1 (instance #1)
[2026-01-16T07:31:17.361Z] [BOT] 💾 BEFORE ARCHIVING: 1981 jobs in database
[2026-01-16T07:31:17.362Z] [BOT] ✅ No jobs to archive (all 1981 jobs within 7-day window)
[2026-01-16T07:31:17.376Z] [BOT] 💾 Saved posted_jobs.json: 1981 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:31:17.376Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_7b717950
[2026-01-16T07:31:17.376Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:31:17.833Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_7b717950 in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_7b717950
[2026-01-16T07:31:19.535Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T07:31:21.036Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_7b717950 (instance #1)
[2026-01-16T07:31:21.037Z] [BOT] 💾 BEFORE ARCHIVING: 1982 jobs in database
[2026-01-16T07:31:21.038Z] [BOT] ✅ No jobs to archive (all 1982 jobs within 7-day window)
[2026-01-16T07:31:21.051Z] [BOT] 💾 Saved posted_jobs.json: 1982 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:31:21.051Z] [BOT] 📍 [ROUTING] "Sentinel Gatekeeper Associate Software Engineer/Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:31:21.271Z] [BOT] ✅ Created forum post: 🏢 Sentinel Gatekeeper Associate Software Engineer/Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Sentinel Gatekeeper Associate Software Engineer/Software Engineer @ ORG_f3f2248d Grumman
[2026-01-16T07:31:22.981Z] [BOT] ✅ Created forum post: 🏢 Sentinel Gatekeeper Associate Software Engineer/Software Engineer @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T07:31:24.484Z] [BOT] 💾 Marked as posted: Sentinel Gatekeeper Associate Software Engineer/Software Engineer @ ORG_f3f2248d Grumman (instance #1)
[2026-01-16T07:31:24.484Z] [BOT] 💾 BEFORE ARCHIVING: 1983 jobs in database
[2026-01-16T07:31:24.485Z] [BOT] ✅ No jobs to archive (all 1983 jobs within 7-day window)
[2026-01-16T07:31:24.499Z] [BOT] 💾 Saved posted_jobs.json: 1983 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:31:27.499Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T07:31:27.500Z] [BOT] ⏭️  Skipping duplicate: JID_0bd4b2be-job_app (posted within 7 days)
[2026-01-16T07:31:27.500Z] [BOT] ⏭️  Skipping duplicate: JID_be56f432 (posted within 7 days)
[2026-01-16T07:31:27.500Z] [BOT] ⏭️  Skipping duplicate: JID_278f1ad3 (posted within 7 days)
[2026-01-16T07:31:27.500Z] [BOT] ⏭️  Skipping duplicate: JID_110a55cc (posted within 7 days)
[2026-01-16T07:31:27.500Z] [BOT] ⏭️  Skipping duplicate: JID_161dae0c-cx_1001-JID_51fb64eb (posted within 7 days)
[2026-01-16T07:31:27.500Z] [BOT] ⏭️  Skipping duplicate: JID_506248f0 (posted within 7 days)
[2026-01-16T07:31:27.501Z] [BOT] ⏭️  Skipping duplicate: JID_5a14ec1a (posted within 7 days)
[2026-01-16T07:31:27.501Z] [BOT] ⏭️  Skipping duplicate: JID_1f4eb4ff (posted within 7 days)
[2026-01-16T07:31:27.501Z] [BOT] ⏭️  Skipping duplicate: JID_df5a25b8 (posted within 7 days)
[2026-01-16T07:31:27.501Z] [BOT] ⏭️  Skipping duplicate: JID_d93ab0bf-northrop_grumman_external_site-JID_b79e84b3-_r10207436 (posted within 7 days)
[2026-01-16T07:31:27.612Z] [BOT] ✅ Loaded pending queue: 2763 total (2743 pending, 20 enriched, 0 posted)
[2026-01-16T07:31:27.785Z] [BOT] ✅ Saved pending queue: 2763 total (2743 pending, 10 enriched, 10 posted)
[2026-01-16T07:31:27.785Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T07:31:27.842Z] [BOT] 📂 Loaded 4195 existing routing entries
[2026-01-16T07:31:27.910Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T07:31:27.910Z] [BOT] Total entries: 4205
   Timestamp: 2026-01-16T07:31:27.891Z
[2026-01-16T07:31:27.910Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T07:31:27.910Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-16T07:31:27.911Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T07:31:27.911Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 8
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💻・remote-usa: 3 posts
     4. #🗽・new-york: 2 posts
     5. #🌉・san-francisco: 2 posts
[2026-01-16T07:31:27.911Z] [BOT] [STATS] Channel stats saved
[2026-01-16T07:31:29.936Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3495) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*