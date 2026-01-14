# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T05:02:43.463Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T05:01:50.845Z] ========================================
[2026-01-14T05:01:50.847Z] Discord Bot Execution Log
[2026-01-14T05:01:50.848Z] Environment: GitHub Actions
[2026-01-14T05:01:50.848Z] Node Version: v20.19.6
[2026-01-14T05:01:50.848Z] ========================================
[2026-01-14T05:01:50.848Z] Environment Variables Check:
[2026-01-14T05:01:50.848Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T05:01:50.848Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T05:01:50.848Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T05:01:50.848Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T05:01:50.848Z] 
Multi-Channel Configuration:
[2026-01-14T05:01:50.848Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T05:01:50.849Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T05:01:50.849Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T05:01:50.849Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T05:01:50.849Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T05:01:50.849Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T05:01:50.849Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T05:01:50.849Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T05:01:50.849Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T05:01:50.849Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T05:01:50.849Z] 
Data Files Check:
[2026-01-14T05:01:50.850Z] .github/data/new_jobs.json: ✅ Exists (10 items, 76043 bytes)
[2026-01-14T05:01:50.854Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 629020 bytes)
[2026-01-14T05:01:50.855Z] 
========================================
[2026-01-14T05:01:50.855Z] Starting Enhanced Discord Bot...
[2026-01-14T05:01:50.855Z] ========================================
[2026-01-14T05:01:51.387Z] [BOT] ✅ Loaded V2 database: 1195 jobs
[2026-01-14T05:01:51.968Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T05:01:51.969Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T05:01:51.969Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T05:01:52.076Z] [BOT] ✅ Loaded pending queue: 2736 total (2716 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-14T05:01:52.077Z] [BOT] [BOT] 🔍 Sample enriched job: Application Engineer at Cadence Design Systems
[2026-01-14T05:01:52.080Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T05:01:52.081Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T05:01:52.081Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T05:01:52.082Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T05:01:52.082Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-14T05:01:52.082Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T05:01:52.086Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-14T05:01:52.087Z] [BOT] 📍 [ROUTING] "Application Engineer" @ ORG_316d43c0 Design Systems
[2026-01-14T05:01:52.087Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:01:52.104Z] [BOT ERROR] (node:3002) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T05:01:52.419Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_316d43c0 Design Systems in #💻・tech-jobs
  ✅ Industry: Application Engineer @ ORG_316d43c0 Design Systems
[2026-01-14T05:01:54.191Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_316d43c0 Design Systems in #🌉・san-francisco
[2026-01-14T05:01:54.192Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T05:01:55.692Z] [BOT] 💾 Marked as posted: Application Engineer @ ORG_316d43c0 Design Systems (instance #1)
[2026-01-14T05:01:55.692Z] [BOT] 💾 BEFORE ARCHIVING: 1196 jobs in database
[2026-01-14T05:01:55.693Z] [BOT] ✅ No jobs to archive (all 1196 jobs within 7-day window)
[2026-01-14T05:01:55.705Z] [BOT] 💾 Saved posted_jobs.json: 1196 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:01:58.706Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-14T05:01:58.706Z] [BOT] 📍 [ROUTING] "AI Engineer 2" @ ORG_37856574 Health
[2026-01-14T05:01:58.706Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T05:01:58.888Z] [BOT] ✅ Created forum post: 🏢 AI Engineer 2 @ ORG_37856574 Health in #🤖・ai-jobs
  ✅ Industry: AI Engineer 2 @ ORG_37856574 Health
[2026-01-14T05:02:00.571Z] [BOT] ✅ Created forum post: 🏢 AI Engineer 2 @ ORG_37856574 Health in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-14T05:02:02.072Z] [BOT] 💾 Marked as posted: AI Engineer 2 @ ORG_37856574 Health (instance #1)
[2026-01-14T05:02:02.072Z] [BOT] 💾 BEFORE ARCHIVING: 1197 jobs in database
[2026-01-14T05:02:02.073Z] [BOT] ✅ No jobs to archive (all 1197 jobs within 7-day window)
[2026-01-14T05:02:02.083Z] [BOT] 💾 Saved posted_jobs.json: 1197 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:02:02.085Z] [BOT] 📍 [ROUTING] "Vibe Marketer" @ ORG_f102986b AI
[2026-01-14T05:02:02.085Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T05:02:02.366Z] [BOT] ✅ Created forum post: 🏢 Vibe Marketer @ ORG_f102986b AI in #🤖・ai-jobs
[2026-01-14T05:02:02.366Z] [BOT] ✅ Industry: Vibe Marketer @ ORG_f102986b AI
[2026-01-14T05:02:04.281Z] [BOT] ✅ Created forum post: 🏢 Vibe Marketer @ ORG_f102986b AI in #🌉・san-francisco
[2026-01-14T05:02:04.281Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T05:02:05.782Z] [BOT] 💾 Marked as posted: Vibe Marketer @ ORG_f102986b AI (instance #1)
[2026-01-14T05:02:05.783Z] [BOT] 💾 BEFORE ARCHIVING: 1198 jobs in database
[2026-01-14T05:02:05.784Z] [BOT] ✅ No jobs to archive (all 1198 jobs within 7-day window)
[2026-01-14T05:02:05.792Z] [BOT] 💾 Saved posted_jobs.json: 1198 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:02:05.793Z] [BOT] 📍 [ROUTING] "Research Scientist – New College Grad 2026 - Embodied and Agentic AI" @ ORG_0890f456
[2026-01-14T05:02:05.793Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T05:02:05.991Z] [BOT] ✅ Created forum post: 🏢 Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456
[2026-01-14T05:02:07.659Z] [BOT] ✅ Created forum post: 🏢 Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:02:09.159Z] [BOT] 💾 Marked as posted: Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456 (instance #1)
[2026-01-14T05:02:09.159Z] [BOT] 💾 BEFORE ARCHIVING: 1199 jobs in database
[2026-01-14T05:02:09.160Z] [BOT] ✅ No jobs to archive (all 1199 jobs within 7-day window)
[2026-01-14T05:02:09.168Z] [BOT] 💾 Saved posted_jobs.json: 1199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:02:12.169Z] [BOT] 📌 Posting 4 jobs to #📈・JID_fb739488
[2026-01-14T05:02:12.170Z] [BOT] 📍 [ROUTING] "Senior Data Engineer" @ ORG_81885e17
[2026-01-14T05:02:12.170Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T05:02:12.497Z] [BOT] ✅ Created forum post: 🏢 Senior Data Engineer @ ORG_81885e17 in #📈・JID_fb739488
[2026-01-14T05:02:12.497Z] [BOT] ✅ Industry: Senior Data Engineer @ ORG_81885e17
[2026-01-14T05:02:14.166Z] [BOT] ✅ Created forum post: 🏢 Senior Data Engineer @ ORG_81885e17 in #🌉・san-francisco
[2026-01-14T05:02:14.166Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T05:02:15.668Z] [BOT] 💾 Marked as posted: Senior Data Engineer @ ORG_81885e17 (instance #1)
[2026-01-14T05:02:15.668Z] [BOT] 💾 BEFORE ARCHIVING: 1200 jobs in database
[2026-01-14T05:02:15.669Z] [BOT] ✅ No jobs to archive (all 1200 jobs within 7-day window)
[2026-01-14T05:02:15.678Z] [BOT] 💾 Saved posted_jobs.json: 1200 active jobs
[2026-01-14T05:02:15.678Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:02:15.678Z] [BOT] 📍 [ROUTING] "Data Scientist 1" @ ORG_3a21c69b
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-14T05:02:15.679Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T05:02:15.955Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_3a21c69b in #📈・JID_fb739488
[2026-01-14T05:02:15.955Z] [BOT] ✅ Industry: Data Scientist 1 @ ORG_3a21c69b
[2026-01-14T05:02:17.659Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_3a21c69b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T05:02:19.160Z] [BOT] 💾 Marked as posted: Data Scientist 1 @ ORG_3a21c69b (instance #1)
[2026-01-14T05:02:19.161Z] [BOT] 💾 BEFORE ARCHIVING: 1201 jobs in database
[2026-01-14T05:02:19.161Z] [BOT] ✅ No jobs to archive (all 1201 jobs within 7-day window)
[2026-01-14T05:02:19.171Z] [BOT] 💾 Saved posted_jobs.json: 1201 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:02:19.171Z] [BOT] 📍 [ROUTING] "Data Analyst - Python/SQL + Finance knowledge" @ ORG_23325912 Global
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-14T05:02:19.171Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-14T05:02:19.171Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T05:02:20.434Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global in #📈・JID_fb739488
  ✅ Industry: Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global
[2026-01-14T05:02:22.130Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-14T05:02:23.631Z] [BOT] 💾 Marked as posted: Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global (instance #1)
[2026-01-14T05:02:23.631Z] [BOT] 💾 BEFORE ARCHIVING: 1202 jobs in database
[2026-01-14T05:02:23.632Z] [BOT] ✅ No jobs to archive (all 1202 jobs within 7-day window)
[2026-01-14T05:02:23.641Z] [BOT] 💾 Saved posted_jobs.json: 1202 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:02:23.641Z] [BOT] 📍 [ROUTING] "Business Intelligence Developer 1" @ ORG_d5eef8ad Nevada Corporation
[2026-01-14T05:02:23.641Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T05:02:23.810Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation in #📈・JID_fb739488
  ✅ Industry: Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation
[2026-01-14T05:02:25.513Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T05:02:27.013Z] [BOT] 💾 Marked as posted: Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation (instance #1)
[2026-01-14T05:02:27.013Z] [BOT] 💾 BEFORE ARCHIVING: 1203 jobs in database
[2026-01-14T05:02:27.014Z] [BOT] ✅ No jobs to archive (all 1203 jobs within 7-day window)
[2026-01-14T05:02:27.024Z] [BOT] 💾 Saved posted_jobs.json: 1203 active jobs
[2026-01-14T05:02:27.024Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:02:30.025Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-14T05:02:30.026Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Partnerships & Alliances" @ anthropic
[2026-01-14T05:02:30.026Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T05:02:30.355Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Partnerships & Alliances @ anthropic in #💲・sales-jobs
[2026-01-14T05:02:30.355Z] [BOT] ✅ Industry: Commercial Counsel, Partnerships & Alliances @ anthropic
[2026-01-14T05:02:32.243Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Partnerships & Alliances @ anthropic in #🌉・san-francisco
[2026-01-14T05:02:32.243Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T05:02:33.744Z] [BOT] 💾 Marked as posted: Commercial Counsel, Partnerships & Alliances @ anthropic (instance #1)
[2026-01-14T05:02:33.744Z] [BOT] 💾 BEFORE ARCHIVING: 1204 jobs in database
[2026-01-14T05:02:33.745Z] [BOT] ✅ No jobs to archive (all 1204 jobs within 7-day window)
[2026-01-14T05:02:33.754Z] [BOT] 💾 Saved posted_jobs.json: 1204 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:02:33.754Z] [BOT] 📍 [ROUTING] "Senior Manager, Tax Operations, Provision & Compliance" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-14T05:02:33.754Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T05:02:34.030Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Tax Operations, Provision & Compliance @ anthropic in #💲・sales-jobs
  ✅ Industry: Senior Manager, Tax Operations, Provision & Compliance @ anthropic
[2026-01-14T05:02:35.742Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Tax Operations, Provision & Compliance @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:02:37.243Z] [BOT] 💾 Marked as posted: Senior Manager, Tax Operations, Provision & Compliance @ anthropic (instance #1)
[2026-01-14T05:02:37.243Z] [BOT] 💾 BEFORE ARCHIVING: 1205 jobs in database
[2026-01-14T05:02:37.244Z] [BOT] ✅ No jobs to archive (all 1205 jobs within 7-day window)
[2026-01-14T05:02:37.254Z] [BOT] 💾 Saved posted_jobs.json: 1205 active jobs
[2026-01-14T05:02:37.254Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:02:40.254Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T05:02:40.255Z] [BOT] ⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_62bb63d8-engineer_r52105 (posted within 7 days)
[2026-01-14T05:02:40.255Z] [BOT] ⏭️  Skipping duplicate: JID_0c2d9b4d-vcuhealth_careers-JID_c8a25921-ii_r40510 (posted within 7 days)
[2026-01-14T05:02:40.255Z] [BOT] ⏭️  Skipping duplicate: JID_24d99260 (posted within 7 days)
[2026-01-14T05:02:40.255Z] [BOT] ⏭️  Skipping duplicate: JID_428dd745 (posted within 7 days)
[2026-01-14T05:02:40.255Z] [BOT] ⏭️  Skipping duplicate: JID_08c34893 (posted within 7 days)
[2026-01-14T05:02:40.255Z] [BOT] ⏭️  Skipping duplicate: JID_a13b88d4 (posted within 7 days)
[2026-01-14T05:02:40.256Z] [BOT] ⏭️  Skipping duplicate: JID_a997bf5d-2026_jr2009464 (posted within 7 days)
[2026-01-14T05:02:40.256Z] [BOT] ⏭️  Skipping duplicate: JID_3b249bf5-snc_external_career_site-JID_2b23b585-i_r0028996-1 (posted within 7 days)
[2026-01-14T05:02:40.256Z] [BOT] ⏭️  Skipping duplicate: JID_979f27ac (posted within 7 days)
[2026-01-14T05:02:40.256Z] [BOT] ⏭️  Skipping duplicate: JID_52319a13 (posted within 7 days)
[2026-01-14T05:02:40.375Z] [BOT] ✅ Loaded pending queue: 2736 total (2716 pending, 20 enriched, 0 posted)
[2026-01-14T05:02:40.537Z] [BOT] ✅ Saved pending queue: 2736 total (2716 pending, 10 enriched, 10 posted)
[2026-01-14T05:02:40.537Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T05:02:40.590Z] [BOT] 📂 Loaded 3315 existing routing entries
[2026-01-14T05:02:40.649Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-14T05:02:40.649Z] [BOT] Total entries: 3325
   Timestamp: 2026-01-14T05:02:40.635Z
[2026-01-14T05:02:40.649Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 20
[2026-01-14T05:02:40.650Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T05:02:40.650Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
[2026-01-14T05:02:40.650Z] [BOT] 1. #🌉・san-francisco: 6 posts
     2. #📈・JID_fb739488: 4 posts
[2026-01-14T05:02:40.650Z] [BOT] 3. #🤖・ai-jobs: 3 posts
[2026-01-14T05:02:40.650Z] [BOT] 4. #💻・remote-usa: 2 posts
     5. #💲・sales-jobs: 2 posts
[2026-01-14T05:02:40.650Z] [BOT] [STATS] Channel stats saved
[2026-01-14T05:02:42.676Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3002) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*