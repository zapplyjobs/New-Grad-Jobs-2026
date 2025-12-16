# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T01:53:47.208Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T01:53:01.234Z] ========================================
[2025-12-16T01:53:01.236Z] Discord Bot Execution Log
[2025-12-16T01:53:01.236Z] Environment: GitHub Actions
[2025-12-16T01:53:01.236Z] Node Version: v20.19.6
[2025-12-16T01:53:01.237Z] ========================================
[2025-12-16T01:53:01.237Z] Environment Variables Check:
[2025-12-16T01:53:01.237Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T01:53:01.237Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T01:53:01.237Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T01:53:01.237Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T01:53:01.237Z] 
Multi-Channel Configuration:
[2025-12-16T01:53:01.237Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T01:53:01.237Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T01:53:01.237Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T01:53:01.238Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T01:53:01.238Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T01:53:01.238Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T01:53:01.238Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T01:53:01.238Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T01:53:01.238Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T01:53:01.238Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T01:53:01.238Z] 
Data Files Check:
[2025-12-16T01:53:01.239Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58337 bytes)
[2025-12-16T01:53:01.240Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 110960 bytes)
[2025-12-16T01:53:01.240Z] 
========================================
[2025-12-16T01:53:01.240Z] Starting Enhanced Discord Bot...
[2025-12-16T01:53:01.240Z] ========================================
[2025-12-16T01:53:01.761Z] [BOT] ✅ Loaded V2 database: 175 jobs
[2025-12-16T01:53:02.279Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T01:53:02.279Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T01:53:02.280Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T01:53:02.280Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T01:53:02.401Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 181
[2025-12-16T01:53:02.403Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T01:53:02.403Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T01:53:02.403Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T01:53:02.404Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T01:53:02.404Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T01:53:02.406Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2025-12-16T01:53:02.407Z] [BOT] 📍 [ROUTING] "SWE1 – Data" @ ORG_0bbe3cb1
[2025-12-16T01:53:02.407Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T01:53:02.412Z] [BOT ERROR] (node:3609) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T01:53:02.815Z] [BOT] ✅ Created forum post: 🏢 SWE1 – Data @ ORG_0bbe3cb1 in #🤖・ai-jobs
  ✅ Industry: SWE1 – Data @ ORG_0bbe3cb1
[2025-12-16T01:53:04.450Z] [BOT] ✅ Created forum post: 🏢 SWE1 – Data @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-16T01:53:05.950Z] [BOT] 💾 Marked as posted: SWE1 – Data @ ORG_0bbe3cb1 (instance #1)
[2025-12-16T01:53:05.950Z] [BOT] 💾 BEFORE ARCHIVING: 176 jobs in database
[2025-12-16T01:53:05.951Z] [BOT] ✅ No jobs to archive (all 176 jobs within 7-day window)
[2025-12-16T01:53:05.957Z] [BOT] 💾 Saved posted_jobs.json: 176 active jobs
[2025-12-16T01:53:05.957Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T01:53:05.959Z] [BOT] 📍 [ROUTING] "Applied Researcher 2 - Search Ranking" @ eBay
[2025-12-16T01:53:05.959Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T01:53:06.182Z] [BOT] ✅ Created forum post: 🏢 Applied Researcher 2 - Search Ranking @ eBay in #🤖・ai-jobs
  ✅ Industry: Applied Researcher 2 - Search Ranking @ eBay
[2025-12-16T01:53:07.900Z] [BOT] ✅ Created forum post: 🏢 Applied Researcher 2 - Search Ranking @ eBay in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T01:53:09.401Z] [BOT] 💾 Marked as posted: Applied Researcher 2 - Search Ranking @ eBay (instance #1)
[2025-12-16T01:53:09.401Z] [BOT] 💾 BEFORE ARCHIVING: 177 jobs in database
✅ No jobs to archive (all 177 jobs within 7-day window)
[2025-12-16T01:53:09.403Z] [BOT] 💾 Saved posted_jobs.json: 177 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T01:53:09.404Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate - Machine Learning X-Ray Spectroscopy" @ ORG_13e36faa Lab
[2025-12-16T01:53:09.404Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T01:53:09.627Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Machine Learning X-Ray Spectroscopy @ ORG_13e36faa Lab in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate - Machine Learning X-Ray Spectroscopy @ ORG_13e36faa Lab
[2025-12-16T01:53:11.628Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Machine Learning X-Ray Spectroscopy @ ORG_13e36faa Lab in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T01:53:13.129Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate - Machine Learning X-Ray Spectroscopy @ ORG_13e36faa Lab (instance #1)
[2025-12-16T01:53:13.129Z] [BOT] 💾 BEFORE ARCHIVING: 178 jobs in database
✅ No jobs to archive (all 178 jobs within 7-day window)
[2025-12-16T01:53:13.132Z] [BOT] 💾 Saved posted_jobs.json: 178 active jobs
[2025-12-16T01:53:13.132Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T01:53:13.132Z] [BOT] 📍 [ROUTING] "Research Scientist, Embodied and Agentic AI" @ ORG_0890f456
[2025-12-16T01:53:13.132Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T01:53:13.305Z] [BOT] ✅ Created forum post: 🏢 Research Scientist, Embodied and Agentic AI @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Research Scientist, Embodied and Agentic AI @ ORG_0890f456
[2025-12-16T01:53:14.959Z] [BOT] ✅ Created forum post: 🏢 Research Scientist, Embodied and Agentic AI @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T01:53:16.459Z] [BOT] 💾 Marked as posted: Research Scientist, Embodied and Agentic AI @ ORG_0890f456 (instance #1)
[2025-12-16T01:53:16.460Z] [BOT] 💾 BEFORE ARCHIVING: 179 jobs in database
✅ No jobs to archive (all 179 jobs within 7-day window)
[2025-12-16T01:53:16.462Z] [BOT] 💾 Saved posted_jobs.json: 179 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T01:53:16.463Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_8b09cf05
[2025-12-16T01:53:16.463Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T01:53:16.670Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_8b09cf05 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_8b09cf05
[2025-12-16T01:53:18.306Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_8b09cf05 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T01:53:19.807Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_8b09cf05 (instance #1)
[2025-12-16T01:53:19.807Z] [BOT] 💾 BEFORE ARCHIVING: 180 jobs in database
[2025-12-16T01:53:19.808Z] [BOT] ✅ No jobs to archive (all 180 jobs within 7-day window)
[2025-12-16T01:53:19.812Z] [BOT] 💾 Saved posted_jobs.json: 180 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T01:53:19.814Z] [BOT] 📍 [ROUTING] "Software Quality Assurance Associate" @ ORG_285075a0
   Category: AI (matched: "AI/ML")
[2025-12-16T01:53:19.814Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T01:53:20.299Z] [BOT] ✅ Created forum post: 🏢 Software Quality Assurance Associate @ ORG_285075a0 in #🤖・ai-jobs
  ✅ Industry: Software Quality Assurance Associate @ ORG_285075a0
[2025-12-16T01:53:22.066Z] [BOT] ✅ Created forum post: 🏢 Software Quality Assurance Associate @ ORG_285075a0 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-16T01:53:23.567Z] [BOT] 💾 Marked as posted: Software Quality Assurance Associate @ ORG_285075a0 (instance #1)
[2025-12-16T01:53:23.567Z] [BOT] 💾 BEFORE ARCHIVING: 181 jobs in database
✅ No jobs to archive (all 181 jobs within 7-day window)
[2025-12-16T01:53:23.570Z] [BOT] 💾 Saved posted_jobs.json: 181 active jobs
[2025-12-16T01:53:23.570Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T01:53:26.571Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-16T01:53:26.572Z] [BOT] 📍 [ROUTING] "Web Application Developer" @ ORG_c910d474 Dynamics
[2025-12-16T01:53:26.572Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T01:53:26.823Z] [BOT] ✅ Created forum post: 🏢 Web Application Developer @ ORG_c910d474 Dynamics in #💻・tech-jobs
[2025-12-16T01:53:26.824Z] [BOT] ✅ Industry: Web Application Developer @ ORG_c910d474 Dynamics
[2025-12-16T01:53:29.034Z] [BOT] ✅ Created forum post: 🏢 Web Application Developer @ ORG_c910d474 Dynamics in #💻・remote-usa
[2025-12-16T01:53:29.035Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T01:53:30.535Z] [BOT] 💾 Marked as posted: Web Application Developer @ ORG_c910d474 Dynamics (instance #1)
[2025-12-16T01:53:30.535Z] [BOT] 💾 BEFORE ARCHIVING: 182 jobs in database
[2025-12-16T01:53:30.535Z] [BOT] ✅ No jobs to archive (all 182 jobs within 7-day window)
[2025-12-16T01:53:30.538Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
[2025-12-16T01:53:30.538Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T01:53:30.538Z] [BOT] 📍 [ROUTING] "Software Engineer - Junior" @ ORG_d6d2009d
[2025-12-16T01:53:30.538Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T01:53:30.872Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Junior @ ORG_d6d2009d in #💻・tech-jobs
[2025-12-16T01:53:30.872Z] [BOT] ✅ Industry: Software Engineer - Junior @ ORG_d6d2009d
[2025-12-16T01:53:32.515Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Junior @ ORG_d6d2009d in #💻・remote-usa
[2025-12-16T01:53:32.515Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T01:53:34.016Z] [BOT] 💾 Marked as posted: Software Engineer - Junior @ ORG_d6d2009d (instance #1)
[2025-12-16T01:53:34.016Z] [BOT] 💾 BEFORE ARCHIVING: 183 jobs in database
[2025-12-16T01:53:34.016Z] [BOT] ✅ No jobs to archive (all 183 jobs within 7-day window)
[2025-12-16T01:53:34.020Z] [BOT] 💾 Saved posted_jobs.json: 183 active jobs
[2025-12-16T01:53:34.020Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T01:53:34.020Z] [BOT] 📍 [ROUTING] "Staff Engineer I, Software Process Engineering" @ ORG_285075a0
[2025-12-16T01:53:34.020Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T01:53:34.269Z] [BOT] ✅ Created forum post: 🏢 Staff Engineer I, Software Process Engineering @ ORG_285075a0 in #💻・tech-jobs
[2025-12-16T01:53:34.269Z] [BOT] ✅ Industry: Staff Engineer I, Software Process Engineering @ ORG_285075a0
[2025-12-16T01:53:36.138Z] [BOT] ✅ Created forum post: 🏢 Staff Engineer I, Software Process Engineering @ ORG_285075a0 in #🌄・mountain-view
[2025-12-16T01:53:36.138Z] [BOT] ✅ Location: 🌄・mountain-view
[2025-12-16T01:53:37.638Z] [BOT] 💾 Marked as posted: Staff Engineer I, Software Process Engineering @ ORG_285075a0 (instance #1)
[2025-12-16T01:53:37.639Z] [BOT] 💾 BEFORE ARCHIVING: 184 jobs in database
[2025-12-16T01:53:37.639Z] [BOT] ✅ No jobs to archive (all 184 jobs within 7-day window)
[2025-12-16T01:53:37.642Z] [BOT] 💾 Saved posted_jobs.json: 184 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T01:53:37.642Z] [BOT] 📍 [ROUTING] "Software Developer I" @ ORG_df6ef51e
[2025-12-16T01:53:37.642Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T01:53:37.806Z] [BOT] ✅ Created forum post: 🏢 Software Developer I @ ORG_df6ef51e in #💻・tech-jobs
[2025-12-16T01:53:37.806Z] [BOT] ✅ Industry: Software Developer I @ ORG_df6ef51e
[2025-12-16T01:53:39.983Z] [BOT] ✅ Created forum post: 🏢 Software Developer I @ ORG_df6ef51e in #🚌・boston
[2025-12-16T01:53:39.984Z] [BOT] ✅ Location: 🚌・boston
[2025-12-16T01:53:41.484Z] [BOT] 💾 Marked as posted: Software Developer I @ ORG_df6ef51e (instance #1)
[2025-12-16T01:53:41.484Z] [BOT] 💾 BEFORE ARCHIVING: 185 jobs in database
[2025-12-16T01:53:41.484Z] [BOT] ✅ No jobs to archive (all 185 jobs within 7-day window)
[2025-12-16T01:53:41.487Z] [BOT] 💾 Saved posted_jobs.json: 185 active jobs
[2025-12-16T01:53:41.487Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T01:53:44.488Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T01:53:44.488Z] [BOT] ⏭️  Skipping duplicate: JID_957bc378 (posted within 7 days)
[2025-12-16T01:53:44.488Z] [BOT] ⏭️  Skipping duplicate: JID_559c7eeb-ranking_r0066187 (posted within 7 days)
[2025-12-16T01:53:44.489Z] [BOT] ⏭️  Skipping duplicate: JID_07f149dd (posted within 7 days)
⏭️  Skipping duplicate: JID_a338ee35 (posted within 7 days)
⏭️  Skipping duplicate: JID_20e8324f-spectroscopy_jr102174 (posted within 7 days)
⏭️  Skipping duplicate: JID_d065bb6e-2026_jr2009464 (posted within 7 days)
⏭️  Skipping duplicate: JID_6929dcbd (posted within 7 days)
⏭️  Skipping duplicate: JID_10906cde-samsung_careers-JID_0c584a3e-associate_r111947 (posted within 7 days)
⏭️  Skipping duplicate: JID_570c2ba3-samsung_careers-JID_15fae791-engineering_r112003 (posted within 7 days)
⏭️  Skipping duplicate: JID_79c9e5ff-i_r8120 (posted within 7 days)
[2025-12-16T01:53:44.495Z] [BOT] ✅ Loaded pending queue: 686 total (666 pending, 20 enriched, 0 posted)
[2025-12-16T01:53:44.506Z] [BOT] ✅ Saved pending queue: 686 total (666 pending, 10 enriched, 10 posted)
[2025-12-16T01:53:44.507Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T01:53:44.544Z] [BOT] 📂 Loaded 168 existing routing entries
[2025-12-16T01:53:44.582Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-16T01:53:44.582Z] [BOT] Total entries: 178
   Timestamp: 2025-12-16T01:53:44.581Z
[2025-12-16T01:53:44.582Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T01:53:44.582Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T01:53:46.593Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3609) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*