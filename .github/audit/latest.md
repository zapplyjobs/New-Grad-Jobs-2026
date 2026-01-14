# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T05:27:35.037Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T05:26:43.671Z] ========================================
[2026-01-14T05:26:43.673Z] Discord Bot Execution Log
[2026-01-14T05:26:43.673Z] Environment: GitHub Actions
[2026-01-14T05:26:43.673Z] Node Version: v20.19.6
[2026-01-14T05:26:43.673Z] ========================================
[2026-01-14T05:26:43.673Z] Environment Variables Check:
[2026-01-14T05:26:43.673Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T05:26:43.673Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T05:26:43.673Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T05:26:43.674Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T05:26:43.674Z] 
Multi-Channel Configuration:
[2026-01-14T05:26:43.674Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T05:26:43.674Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T05:26:43.674Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T05:26:43.674Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T05:26:43.674Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T05:26:43.674Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T05:26:43.674Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T05:26:43.674Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T05:26:43.674Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T05:26:43.674Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T05:26:43.674Z] 
Data Files Check:
[2026-01-14T05:26:43.675Z] .github/data/new_jobs.json: ✅ Exists (10 items, 89865 bytes)
[2026-01-14T05:26:43.680Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 640001 bytes)
[2026-01-14T05:26:43.680Z] 
========================================
[2026-01-14T05:26:43.680Z] Starting Enhanced Discord Bot...
[2026-01-14T05:26:43.680Z] ========================================
[2026-01-14T05:26:44.206Z] [BOT] ✅ Loaded V2 database: 1215 jobs
[2026-01-14T05:26:44.900Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T05:26:44.900Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T05:26:44.900Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T05:26:45.011Z] [BOT] ✅ Loaded pending queue: 2737 total (2717 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate Nuclear Consultant/Engineer at Jensen Hughes
[2026-01-14T05:26:45.013Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T05:26:45.013Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T05:26:45.014Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T05:26:45.014Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T05:26:45.015Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T05:26:45.018Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-14T05:26:45.019Z] [BOT] 📍 [ROUTING] "Associate Nuclear Consultant/Engineer" @ ORG_f273c1b5 Hughes
[2026-01-14T05:26:45.019Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T05:26:45.036Z] [BOT ERROR] (node:2823) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T05:26:45.296Z] [BOT] ✅ Created forum post: 🏢 Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes in #🤖・ai-jobs
[2026-01-14T05:26:45.296Z] [BOT] ✅ Industry: Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes
[2026-01-14T05:26:47.046Z] [BOT] ✅ Created forum post: 🏢 Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes in #💻・remote-usa
[2026-01-14T05:26:47.046Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T05:26:48.547Z] [BOT] 💾 Marked as posted: Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes (instance #1)
[2026-01-14T05:26:48.547Z] [BOT] 💾 BEFORE ARCHIVING: 1216 jobs in database
[2026-01-14T05:26:48.548Z] [BOT] ✅ No jobs to archive (all 1216 jobs within 7-day window)
[2026-01-14T05:26:48.560Z] [BOT] 💾 Saved posted_jobs.json: 1216 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:26:48.560Z] [BOT] 📍 [ROUTING] "Research Scientist, Embodied and Agentic AI" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-14T05:26:48.560Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T05:26:48.773Z] [BOT] ✅ Created forum post: 🏢 Research Scientist, Embodied and Agentic AI @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-14T05:26:48.774Z] [BOT] ✅ Industry: Research Scientist, Embodied and Agentic AI @ ORG_0890f456
[2026-01-14T05:26:50.489Z] [BOT] ✅ Created forum post: 🏢 Research Scientist, Embodied and Agentic AI @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:26:51.991Z] [BOT] 💾 Marked as posted: Research Scientist, Embodied and Agentic AI @ ORG_0890f456 (instance #1)
💾 BEFORE ARCHIVING: 1217 jobs in database
[2026-01-14T05:26:51.992Z] [BOT] ✅ No jobs to archive (all 1217 jobs within 7-day window)
[2026-01-14T05:26:52.000Z] [BOT] 💾 Saved posted_jobs.json: 1217 active jobs
[2026-01-14T05:26:52.001Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:26:52.001Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_8b09cf05
[2026-01-14T05:26:52.001Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T05:26:52.566Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_8b09cf05 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_8b09cf05
[2026-01-14T05:26:56.206Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_8b09cf05 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T05:26:57.707Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_8b09cf05 (instance #1)
[2026-01-14T05:26:57.707Z] [BOT] 💾 BEFORE ARCHIVING: 1218 jobs in database
[2026-01-14T05:26:57.708Z] [BOT] ✅ No jobs to archive (all 1218 jobs within 7-day window)
[2026-01-14T05:26:57.717Z] [BOT] 💾 Saved posted_jobs.json: 1218 active jobs
[2026-01-14T05:26:57.717Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:27:00.718Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T05:27:00.719Z] [BOT] 📍 [ROUTING] "Product Marketing Manager, Claude Code" @ anthropic
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T05:27:00.975Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Claude Code @ anthropic in #📣・marketing-jobs
[2026-01-14T05:27:00.975Z] [BOT] ✅ Industry: Product Marketing Manager, Claude Code @ anthropic
[2026-01-14T05:27:02.707Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Claude Code @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:27:04.208Z] [BOT] 💾 Marked as posted: Product Marketing Manager, Claude Code @ anthropic (instance #1)
[2026-01-14T05:27:04.208Z] [BOT] 💾 BEFORE ARCHIVING: 1219 jobs in database
[2026-01-14T05:27:04.209Z] [BOT] ✅ No jobs to archive (all 1219 jobs within 7-day window)
[2026-01-14T05:27:04.219Z] [BOT] 💾 Saved posted_jobs.json: 1219 active jobs
[2026-01-14T05:27:04.219Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:27:07.219Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-14T05:27:07.220Z] [BOT] 📍 [ROUTING] "Research Operations & Strategy Lead, Coding & Cybersecurity Data" @ anthropic
[2026-01-14T05:27:07.220Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:27:07.433Z] [BOT] ✅ Created forum post: 🏢 Research Operations & Strategy Lead, Coding & Cybersecurity Data @ anthropic in #💻・tech-jobs
[2026-01-14T05:27:07.433Z] [BOT] ✅ Industry: Research Operations & Strategy Lead, Coding & Cybersecurity Data @ anthropic
[2026-01-14T05:27:09.539Z] [BOT] ✅ Created forum post: 🏢 Research Operations & Strategy Lead, Coding & Cybersecurity Data @ anthropic in #🌉・san-francisco
[2026-01-14T05:27:09.540Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T05:27:11.040Z] [BOT] 💾 Marked as posted: Research Operations & Strategy Lead, Coding & Cybersecurity Data @ anthropic (instance #1)
[2026-01-14T05:27:11.041Z] [BOT] 💾 BEFORE ARCHIVING: 1220 jobs in database
[2026-01-14T05:27:11.042Z] [BOT] ✅ No jobs to archive (all 1220 jobs within 7-day window)
[2026-01-14T05:27:11.051Z] [BOT] 💾 Saved posted_jobs.json: 1220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:27:11.052Z] [BOT] 📍 [ROUTING] "Data Operations Manager, Computer Use & Tool Use" @ anthropic
[2026-01-14T05:27:11.052Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:27:11.283Z] [BOT] ✅ Created forum post: 🏢 Data Operations Manager, Computer Use & Tool Use @ anthropic in #💻・tech-jobs
[2026-01-14T05:27:11.284Z] [BOT] ✅ Industry: Data Operations Manager, Computer Use & Tool Use @ anthropic
[2026-01-14T05:27:12.997Z] [BOT] ✅ Created forum post: 🏢 Data Operations Manager, Computer Use & Tool Use @ anthropic in #🌉・san-francisco
[2026-01-14T05:27:12.997Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T05:27:14.499Z] [BOT] 💾 Marked as posted: Data Operations Manager, Computer Use & Tool Use @ anthropic (instance #1)
[2026-01-14T05:27:14.499Z] [BOT] 💾 BEFORE ARCHIVING: 1221 jobs in database
[2026-01-14T05:27:14.500Z] [BOT] ✅ No jobs to archive (all 1221 jobs within 7-day window)
[2026-01-14T05:27:14.509Z] [BOT] 💾 Saved posted_jobs.json: 1221 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:27:14.509Z] [BOT] 📍 [ROUTING] "Software Quality Assurance Associate" @ ORG_285075a0
   Category: TECH (matched: "software")
[2026-01-14T05:27:14.509Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:27:14.725Z] [BOT] ✅ Created forum post: 🏢 Software Quality Assurance Associate @ ORG_285075a0 in #💻・tech-jobs
[2026-01-14T05:27:14.725Z] [BOT] ✅ Industry: Software Quality Assurance Associate @ ORG_285075a0
[2026-01-14T05:27:16.501Z] [BOT] ✅ Created forum post: 🏢 Software Quality Assurance Associate @ ORG_285075a0 in #🤠・austin
[2026-01-14T05:27:16.501Z] [BOT] ✅ Location: 🤠・austin
[2026-01-14T05:27:18.003Z] [BOT] 💾 Marked as posted: Software Quality Assurance Associate @ ORG_285075a0 (instance #1)
[2026-01-14T05:27:18.003Z] [BOT] 💾 BEFORE ARCHIVING: 1222 jobs in database
[2026-01-14T05:27:18.004Z] [BOT] ✅ No jobs to archive (all 1222 jobs within 7-day window)
[2026-01-14T05:27:18.013Z] [BOT] 💾 Saved posted_jobs.json: 1222 active jobs
[2026-01-14T05:27:18.013Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:27:18.013Z] [BOT] 📍 [ROUTING] "Staff Engineer I, Software Process Engineering" @ ORG_285075a0
[2026-01-14T05:27:18.013Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:27:18.250Z] [BOT] ✅ Created forum post: 🏢 Staff Engineer I, Software Process Engineering @ ORG_285075a0 in #💻・tech-jobs
[2026-01-14T05:27:18.250Z] [BOT] ✅ Industry: Staff Engineer I, Software Process Engineering @ ORG_285075a0
[2026-01-14T05:27:19.955Z] [BOT] ✅ Created forum post: 🏢 Staff Engineer I, Software Process Engineering @ ORG_285075a0 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-14T05:27:21.457Z] [BOT] 💾 Marked as posted: Staff Engineer I, Software Process Engineering @ ORG_285075a0 (instance #1)
💾 BEFORE ARCHIVING: 1223 jobs in database
[2026-01-14T05:27:21.458Z] [BOT] ✅ No jobs to archive (all 1223 jobs within 7-day window)
[2026-01-14T05:27:21.467Z] [BOT] 💾 Saved posted_jobs.json: 1223 active jobs
[2026-01-14T05:27:21.468Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:27:21.468Z] [BOT] 📍 [ROUTING] "Software Developer I" @ ORG_df6ef51e
   Category: TECH (matched: "software")
[2026-01-14T05:27:21.468Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:27:21.680Z] [BOT] ✅ Created forum post: 🏢 Software Developer I @ ORG_df6ef51e in #💻・tech-jobs
  ✅ Industry: Software Developer I @ ORG_df6ef51e
[2026-01-14T05:27:23.481Z] [BOT] ✅ Created forum post: 🏢 Software Developer I @ ORG_df6ef51e in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-14T05:27:24.982Z] [BOT] 💾 Marked as posted: Software Developer I @ ORG_df6ef51e (instance #1)
[2026-01-14T05:27:24.982Z] [BOT] 💾 BEFORE ARCHIVING: 1224 jobs in database
[2026-01-14T05:27:24.982Z] [BOT] ✅ No jobs to archive (all 1224 jobs within 7-day window)
[2026-01-14T05:27:24.992Z] [BOT] 💾 Saved posted_jobs.json: 1224 active jobs
[2026-01-14T05:27:24.992Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:27:24.992Z] [BOT] 📍 [ROUTING] "Junior Software Engineer, AI" @ ORG_307b6d84
[2026-01-14T05:27:24.992Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:27:25.255Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer, AI @ ORG_307b6d84 in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer, AI @ ORG_307b6d84
[2026-01-14T05:27:26.997Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer, AI @ ORG_307b6d84 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:27:28.499Z] [BOT] 💾 Marked as posted: Junior Software Engineer, AI @ ORG_307b6d84 (instance #1)
[2026-01-14T05:27:28.499Z] [BOT] 💾 BEFORE ARCHIVING: 1225 jobs in database
[2026-01-14T05:27:28.500Z] [BOT] ✅ No jobs to archive (all 1225 jobs within 7-day window)
[2026-01-14T05:27:28.510Z] [BOT] 💾 Saved posted_jobs.json: 1225 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:27:31.510Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T05:27:31.511Z] [BOT] ⏭️  Skipping duplicate: JID_4fd8b629 (posted within 7 days)
[2026-01-14T05:27:31.511Z] [BOT] ⏭️  Skipping duplicate: JID_8eb7eef1 (posted within 7 days)
[2026-01-14T05:27:31.511Z] [BOT] ⏭️  Skipping duplicate: JID_dbfe8872 (posted within 7 days)
[2026-01-14T05:27:31.511Z] [BOT] ⏭️  Skipping duplicate: JID_61bcf3d6 (posted within 7 days)
[2026-01-14T05:27:31.511Z] [BOT] ⏭️  Skipping duplicate: JID_d065bb6e-2026_jr2009464 (posted within 7 days)
[2026-01-14T05:27:31.511Z] [BOT] ⏭️  Skipping duplicate: JID_6929dcbd (posted within 7 days)
[2026-01-14T05:27:31.512Z] [BOT] ⏭️  Skipping duplicate: JID_10906cde-samsung_careers-JID_0c584a3e-associate_r111947 (posted within 7 days)
⏭️  Skipping duplicate: JID_570c2ba3-samsung_careers-JID_15fae791-engineering_r112003 (posted within 7 days)
⏭️  Skipping duplicate: JID_79c9e5ff-i_r8120 (posted within 7 days)
⏭️  Skipping duplicate: JID_3dd93fa8 (posted within 7 days)
[2026-01-14T05:27:31.625Z] [BOT] ✅ Loaded pending queue: 2737 total (2717 pending, 20 enriched, 0 posted)
[2026-01-14T05:27:31.804Z] [BOT] ✅ Saved pending queue: 2737 total (2717 pending, 10 enriched, 10 posted)
[2026-01-14T05:27:31.804Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T05:27:31.858Z] [BOT] 📂 Loaded 3335 existing routing entries
[2026-01-14T05:27:31.916Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3345
   Timestamp: 2026-01-14T05:27:31.903Z
[2026-01-14T05:27:31.917Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T05:27:31.917Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T05:27:31.918Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🌉・san-francisco: 5 posts
     3. #🤖・ai-jobs: 3 posts
     4. #💻・remote-usa: 2 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-14T05:27:31.918Z] [BOT] [STATS] Channel stats saved
[2026-01-14T05:27:33.943Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2823) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*