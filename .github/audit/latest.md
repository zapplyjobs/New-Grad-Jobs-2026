# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T07:27:24.682Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T07:26:35.416Z] ========================================
[2026-01-17T07:26:35.417Z] Discord Bot Execution Log
[2026-01-17T07:26:35.418Z] Environment: GitHub Actions
[2026-01-17T07:26:35.418Z] Node Version: v20.19.6
[2026-01-17T07:26:35.418Z] ========================================
[2026-01-17T07:26:35.418Z] Environment Variables Check:
[2026-01-17T07:26:35.418Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T07:26:35.418Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T07:26:35.418Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T07:26:35.418Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T07:26:35.418Z] 
Multi-Channel Configuration:
[2026-01-17T07:26:35.418Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T07:26:35.419Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T07:26:35.419Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T07:26:35.419Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T07:26:35.419Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T07:26:35.419Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T07:26:35.419Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T07:26:35.419Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T07:26:35.419Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T07:26:35.419Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T07:26:35.419Z] 
Data Files Check:
[2026-01-17T07:26:35.420Z] .github/data/new_jobs.json: ✅ Exists (10 items, 29319 bytes)
[2026-01-17T07:26:35.428Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1254621 bytes)
[2026-01-17T07:26:35.428Z] 
========================================
[2026-01-17T07:26:35.428Z] Starting Enhanced Discord Bot...
[2026-01-17T07:26:35.428Z] ========================================
[2026-01-17T07:26:35.935Z] [BOT] ✅ Loaded V2 database: 2318 jobs
[2026-01-17T07:26:36.640Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T07:26:36.641Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T07:26:36.641Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T07:26:36.759Z] [BOT] ✅ Loaded pending queue: 2884 total (2864 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Business Systems Analyst - Application Development at Global Lending Services
[2026-01-17T07:26:36.763Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T07:26:36.763Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T07:26:36.764Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T07:26:36.765Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-17T07:26:36.765Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-17T07:26:36.765Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T07:26:36.769Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-17T07:26:36.769Z] [BOT] 📍 [ROUTING] "Business Systems Analyst - Application Development" @ ORG_a258b30f Lending Services
[2026-01-17T07:26:36.769Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T07:26:36.786Z] [BOT ERROR] (node:2607) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T07:26:36.987Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services in #📣・marketing-jobs
[2026-01-17T07:26:36.987Z] [BOT] ✅ Industry: Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services
[2026-01-17T07:26:38.690Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T07:26:40.192Z] [BOT] 💾 Marked as posted: Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services (instance #1)
[2026-01-17T07:26:40.192Z] [BOT] 💾 BEFORE ARCHIVING: 2319 jobs in database
[2026-01-17T07:26:40.194Z] [BOT] ✅ No jobs to archive (all 2319 jobs within 7-day window)
[2026-01-17T07:26:40.211Z] [BOT] 💾 Saved posted_jobs.json: 2319 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:26:43.211Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-17T07:26:43.212Z] [BOT] 📍 [ROUTING] "New Grad 2026: Software Engineer/Mobile Engineer Graduate (Monetization Technology - Ads Core Demonstration)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:26:43.555Z] [BOT] ✅ Created forum post: 🏢 New Grad 2026: Software Engineer/Mobile Engineer Graduate (Monetization Technology - Ads Core Dem in #💻・tech-jobs
[2026-01-17T07:26:43.555Z] [BOT] ✅ Industry: New Grad 2026: Software Engineer/Mobile Engineer Graduate (Monetization Technology - Ads Core Demonstration) @ ORG_1bb6fcfb
[2026-01-17T07:26:45.300Z] [BOT] ✅ Created forum post: 🏢 New Grad 2026: Software Engineer/Mobile Engineer Graduate (Monetization Technology - Ads Core Dem in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T07:26:46.802Z] [BOT] 💾 Marked as posted: New Grad 2026: Software Engineer/Mobile Engineer Graduate (Monetization Technology - Ads Core Demonstration) @ ORG_1bb6fcfb (instance #1)
💾 BEFORE ARCHIVING: 2320 jobs in database
[2026-01-17T07:26:46.804Z] [BOT] ✅ No jobs to archive (all 2320 jobs within 7-day window)
[2026-01-17T07:26:46.820Z] [BOT] 💾 Saved posted_jobs.json: 2320 active jobs
[2026-01-17T07:26:46.821Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T07:26:46.821Z] [BOT] 📍 [ROUTING] "New Grad 2026: Software Engineer (Ads ML Infrastructure)" @ ORG_1bb6fcfb
[2026-01-17T07:26:46.821Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:26:47.121Z] [BOT] ✅ Created forum post: 🏢 New Grad 2026: Software Engineer (Ads ML Infrastructure) @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-17T07:26:47.121Z] [BOT] ✅ Industry: New Grad 2026: Software Engineer (Ads ML Infrastructure) @ ORG_1bb6fcfb
[2026-01-17T07:26:48.835Z] [BOT] ✅ Created forum post: 🏢 New Grad 2026: Software Engineer (Ads ML Infrastructure) @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T07:26:48.835Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T07:26:50.337Z] [BOT] 💾 Marked as posted: New Grad 2026: Software Engineer (Ads ML Infrastructure) @ ORG_1bb6fcfb (instance #1)
[2026-01-17T07:26:50.337Z] [BOT] 💾 BEFORE ARCHIVING: 2321 jobs in database
[2026-01-17T07:26:50.338Z] [BOT] ✅ No jobs to archive (all 2321 jobs within 7-day window)
[2026-01-17T07:26:50.354Z] [BOT] 💾 Saved posted_jobs.json: 2321 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:26:50.354Z] [BOT] 📍 [ROUTING] "Multiple Roles - Web Development Student Support" @ edX
[2026-01-17T07:26:50.354Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:26:50.593Z] [BOT] ✅ Created forum post: 🏢 Multiple Roles - Web Development Student Support @ edX in #💻・tech-jobs
  ✅ Industry: Multiple Roles - Web Development Student Support @ edX
[2026-01-17T07:26:52.343Z] [BOT] ✅ Created forum post: 🏢 Multiple Roles - Web Development Student Support @ edX in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T07:26:53.846Z] [BOT] 💾 Marked as posted: Multiple Roles - Web Development Student Support @ edX (instance #1)
[2026-01-17T07:26:53.846Z] [BOT] 💾 BEFORE ARCHIVING: 2322 jobs in database
[2026-01-17T07:26:53.847Z] [BOT] ✅ No jobs to archive (all 2322 jobs within 7-day window)
[2026-01-17T07:26:53.860Z] [BOT] 💾 Saved posted_jobs.json: 2322 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:26:53.861Z] [BOT] 📍 [ROUTING] "Production Programmer – Entry Level SQL Developer" @ ORG_9dc72f07 USA
[2026-01-17T07:26:53.861Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:26:54.118Z] [BOT] ✅ Created forum post: 🏢 Production Programmer – Entry Level SQL Developer @ ORG_9dc72f07 USA in #💻・tech-jobs
[2026-01-17T07:26:54.118Z] [BOT] ✅ Industry: Production Programmer – Entry Level SQL Developer @ ORG_9dc72f07 USA
[2026-01-17T07:26:55.859Z] [BOT] ✅ Created forum post: 🏢 Production Programmer – Entry Level SQL Developer @ ORG_9dc72f07 USA in #💻・remote-usa
[2026-01-17T07:26:55.859Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T07:26:57.361Z] [BOT] 💾 Marked as posted: Production Programmer – Entry Level SQL Developer @ ORG_9dc72f07 USA (instance #1)
[2026-01-17T07:26:57.361Z] [BOT] 💾 BEFORE ARCHIVING: 2323 jobs in database
[2026-01-17T07:26:57.363Z] [BOT] ✅ No jobs to archive (all 2323 jobs within 7-day window)
[2026-01-17T07:26:57.376Z] [BOT] 💾 Saved posted_jobs.json: 2323 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:26:57.377Z] [BOT] 📍 [ROUTING] "Graduate Leadership Program - AI & Software Engineering" @ ORG_b2822ace
[2026-01-17T07:26:57.377Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:26:57.568Z] [BOT] ✅ Created forum post: 🏢 Graduate Leadership Program - AI & Software Engineering @ ORG_b2822ace in #💻・tech-jobs
[2026-01-17T07:26:57.568Z] [BOT] ✅ Industry: Graduate Leadership Program - AI & Software Engineering @ ORG_b2822ace
[2026-01-17T07:26:59.271Z] [BOT] ✅ Created forum post: 🏢 Graduate Leadership Program - AI & Software Engineering @ ORG_b2822ace in #🤠・austin
[2026-01-17T07:26:59.271Z] [BOT] ✅ Location: 🤠・austin
[2026-01-17T07:27:00.772Z] [BOT] 💾 Marked as posted: Graduate Leadership Program - AI & Software Engineering @ ORG_b2822ace (instance #1)
[2026-01-17T07:27:00.772Z] [BOT] 💾 BEFORE ARCHIVING: 2324 jobs in database
[2026-01-17T07:27:00.774Z] [BOT] ✅ No jobs to archive (all 2324 jobs within 7-day window)
[2026-01-17T07:27:00.787Z] [BOT] 💾 Saved posted_jobs.json: 2324 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:27:00.788Z] [BOT] 💾 Marked as posted: Graduate Leadership Program - Data Analytics @ ORG_b2822ace (instance #1)
[2026-01-17T07:27:00.788Z] [BOT] 💾 BEFORE ARCHIVING: 2325 jobs in database
[2026-01-17T07:27:00.789Z] [BOT] ✅ No jobs to archive (all 2325 jobs within 7-day window)
[2026-01-17T07:27:00.801Z] [BOT] 💾 Saved posted_jobs.json: 2325 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:27:00.802Z] [BOT] 📍 [ROUTING] "Graduate C++ Software Engineer" @ ORG_2de802b0 Vinci
[2026-01-17T07:27:00.802Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:27:01.214Z] [BOT] ✅ Created forum post: 🏢 Graduate C++ Software Engineer @ ORG_2de802b0 Vinci in #💻・tech-jobs
  ✅ Industry: Graduate C++ Software Engineer @ ORG_2de802b0 Vinci
[2026-01-17T07:27:03.113Z] [BOT] ✅ Created forum post: 🏢 Graduate C++ Software Engineer @ ORG_2de802b0 Vinci in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T07:27:04.616Z] [BOT] 💾 Marked as posted: Graduate C++ Software Engineer @ ORG_2de802b0 Vinci (instance #1)
[2026-01-17T07:27:04.616Z] [BOT] 💾 BEFORE ARCHIVING: 2326 jobs in database
[2026-01-17T07:27:04.617Z] [BOT] ✅ No jobs to archive (all 2326 jobs within 7-day window)
[2026-01-17T07:27:04.630Z] [BOT] 💾 Saved posted_jobs.json: 2326 active jobs
[2026-01-17T07:27:04.630Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T07:27:07.632Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-17T07:27:07.632Z] [BOT] 📍 [ROUTING] "New Grad 2026: Machine Learning Engineer (Commerce Ads)" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T07:27:07.939Z] [BOT] ✅ Created forum post: 🏢 New Grad 2026: Machine Learning Engineer (Commerce Ads) @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: New Grad 2026: Machine Learning Engineer (Commerce Ads) @ ORG_1bb6fcfb
[2026-01-17T07:27:09.636Z] [BOT] ✅ Created forum post: 🏢 New Grad 2026: Machine Learning Engineer (Commerce Ads) @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T07:27:11.137Z] [BOT] 💾 Marked as posted: New Grad 2026: Machine Learning Engineer (Commerce Ads) @ ORG_1bb6fcfb (instance #1)
[2026-01-17T07:27:11.137Z] [BOT] 💾 BEFORE ARCHIVING: 2327 jobs in database
[2026-01-17T07:27:11.139Z] [BOT] ✅ No jobs to archive (all 2327 jobs within 7-day window)
[2026-01-17T07:27:11.153Z] [BOT] 💾 Saved posted_jobs.json: 2327 active jobs
[2026-01-17T07:27:11.153Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T07:27:11.153Z] [BOT] 📍 [ROUTING] "New Grad 2026: Machine Learning/Research Engineer (Ads Core Global)" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-01-17T07:27:11.154Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T07:27:11.349Z] [BOT] ✅ Created forum post: 🏢 New Grad 2026: Machine Learning/Research Engineer (Ads Core Global) @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-17T07:27:11.349Z] [BOT] ✅ Industry: New Grad 2026: Machine Learning/Research Engineer (Ads Core Global) @ ORG_1bb6fcfb
[2026-01-17T07:27:13.076Z] [BOT] ✅ Created forum post: 🏢 New Grad 2026: Machine Learning/Research Engineer (Ads Core Global) @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T07:27:13.077Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T07:27:14.579Z] [BOT] 💾 Marked as posted: New Grad 2026: Machine Learning/Research Engineer (Ads Core Global) @ ORG_1bb6fcfb (instance #1)
[2026-01-17T07:27:14.579Z] [BOT] 💾 BEFORE ARCHIVING: 2328 jobs in database
[2026-01-17T07:27:14.581Z] [BOT] ✅ No jobs to archive (all 2328 jobs within 7-day window)
[2026-01-17T07:27:14.594Z] [BOT] 💾 Saved posted_jobs.json: 2328 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:27:14.595Z] [BOT] 📍 [ROUTING] "2026 – Americas - Salt Lake City - Engineering New Analyst" @ ORG_d49bddaa Sachs
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T07:27:14.595Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T07:27:14.784Z] [BOT] ✅ Created forum post: 🏢 2026 – Americas - Salt Lake City - Engineering New Analyst @ ORG_d49bddaa Sachs in #🤖・ai-jobs
  ✅ Industry: 2026 – Americas - Salt Lake City - Engineering New Analyst @ ORG_d49bddaa Sachs
[2026-01-17T07:27:16.479Z] [BOT] ✅ Created forum post: 🏢 2026 – Americas - Salt Lake City - Engineering New Analyst @ ORG_d49bddaa Sachs in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T07:27:17.980Z] [BOT] 💾 Marked as posted: 2026 – Americas - Salt Lake City - Engineering New Analyst @ ORG_d49bddaa Sachs (instance #1)
[2026-01-17T07:27:17.981Z] [BOT] 💾 BEFORE ARCHIVING: 2329 jobs in database
[2026-01-17T07:27:17.982Z] [BOT] ✅ No jobs to archive (all 2329 jobs within 7-day window)
[2026-01-17T07:27:17.997Z] [BOT] 💾 Saved posted_jobs.json: 2329 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:27:20.997Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-17T07:27:20.998Z] [BOT] ⏭️  Skipping duplicate: JID_aba714f4 (posted within 7 days)
[2026-01-17T07:27:20.998Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_1ad6948f (posted within 7 days)
[2026-01-17T07:27:20.998Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_13c19059 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_e618d0d3 (posted within 7 days)
[2026-01-17T07:27:20.999Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_42df6b84 (posted within 7 days)
[2026-01-17T07:27:20.999Z] [BOT] ⏭️  Skipping duplicate: JID_ca942bfb (posted within 7 days)
[2026-01-17T07:27:20.999Z] [BOT] ⏭️  Skipping duplicate: JID_c851f929 (posted within 7 days)
⏭️  Skipping duplicate: JID_0e76d18f (posted within 7 days)
[2026-01-17T07:27:20.999Z] [BOT] ⏭️  Skipping duplicate: JID_e886390a (posted within 7 days)
[2026-01-17T07:27:20.999Z] [BOT] ⏭️  Skipping duplicate: JID_085b4a59 (posted within 7 days)
[2026-01-17T07:27:21.107Z] [BOT] ✅ Loaded pending queue: 2884 total (2864 pending, 20 enriched, 0 posted)
[2026-01-17T07:27:21.297Z] [BOT] ✅ Saved pending queue: 2884 total (2864 pending, 10 enriched, 10 posted)
[2026-01-17T07:27:21.298Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T07:27:21.355Z] [BOT] 📂 Loaded 4535 existing routing entries
[2026-01-17T07:27:21.423Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4545
[2026-01-17T07:27:21.423Z] [BOT] Timestamp: 2026-01-17T07:27:21.403Z
[2026-01-17T07:27:21.424Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T07:27:21.424Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-17T07:27:21.424Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T07:27:21.424Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
[2026-01-17T07:27:21.424Z] [BOT] 1. #💻・tech-jobs: 6 posts
[2026-01-17T07:27:21.425Z] [BOT] 2. #💻・remote-usa: 5 posts
     3. #🌉・san-francisco: 4 posts
     4. #🤖・ai-jobs: 3 posts
[2026-01-17T07:27:21.425Z] [BOT] 5. #📣・marketing-jobs: 1 posts
[2026-01-17T07:27:21.425Z] [BOT] [STATS] Channel stats saved
[2026-01-17T07:27:23.450Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2607) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*