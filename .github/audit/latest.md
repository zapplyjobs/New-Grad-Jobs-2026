# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T08:44:22.218Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T08:43:40.106Z] ========================================
[2025-12-16T08:43:40.108Z] Discord Bot Execution Log
[2025-12-16T08:43:40.108Z] Environment: GitHub Actions
[2025-12-16T08:43:40.108Z] Node Version: v20.19.6
[2025-12-16T08:43:40.108Z] ========================================
[2025-12-16T08:43:40.108Z] Environment Variables Check:
[2025-12-16T08:43:40.108Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T08:43:40.108Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T08:43:40.108Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T08:43:40.109Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T08:43:40.109Z] 
Multi-Channel Configuration:
[2025-12-16T08:43:40.109Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T08:43:40.109Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T08:43:40.109Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T08:43:40.109Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T08:43:40.109Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T08:43:40.109Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T08:43:40.109Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T08:43:40.109Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T08:43:40.109Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T08:43:40.109Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T08:43:40.109Z] 
Data Files Check:
[2025-12-16T08:43:40.110Z] .github/data/new_jobs.json: ✅ Exists (10 items, 25271 bytes)
[2025-12-16T08:43:40.112Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 243557 bytes)
[2025-12-16T08:43:40.112Z] 
========================================
[2025-12-16T08:43:40.112Z] Starting Enhanced Discord Bot...
[2025-12-16T08:43:40.112Z] ========================================
[2025-12-16T08:43:40.632Z] [BOT] ✅ Loaded V2 database: 395 jobs
[2025-12-16T08:43:41.301Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T08:43:41.301Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T08:43:41.302Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T08:43:41.302Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T08:43:41.358Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T08:43:41.423Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 197
[2025-12-16T08:43:41.425Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T08:43:41.425Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T08:43:41.426Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T08:43:41.426Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-16T08:43:41.427Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Undergrad Software Engineer - Oracle Cloud Infrastructure - Oci @ Oracle: nashville, austin
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T08:43:41.429Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-16T08:43:41.430Z] [BOT] 📍 [ROUTING] "AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD" @ ORG_08c9a13c
[2025-12-16T08:43:41.430Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T08:43:41.447Z] [BOT ERROR] (node:3226) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T08:43:41.805Z] [BOT] ✅ Created forum post: 🏢 AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_75e8f5ac in #🤖・ai-jobs
[2025-12-16T08:43:41.805Z] [BOT] ✅ Industry: AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_08c9a13c
[2025-12-16T08:43:43.554Z] [BOT] ✅ Created forum post: 🏢 AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_75e8f5ac in #🌉・san-francisco
[2025-12-16T08:43:43.554Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T08:43:45.053Z] [BOT] 💾 Marked as posted: AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_08c9a13c (instance #1)
[2025-12-16T08:43:45.054Z] [BOT] 💾 BEFORE ARCHIVING: 396 jobs in database
[2025-12-16T08:43:45.054Z] [BOT] ✅ No jobs to archive (all 396 jobs within 7-day window)
[2025-12-16T08:43:45.062Z] [BOT] 💾 Saved posted_jobs.json: 396 active jobs
[2025-12-16T08:43:45.062Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:43:45.063Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Multiple Teams" @ ORG_08c9a13c
[2025-12-16T08:43:45.063Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T08:43:45.366Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Multiple Teams @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Research Scientist - Multiple Teams @ ORG_08c9a13c
[2025-12-16T08:43:47.270Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Multiple Teams @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T08:43:48.769Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Multiple Teams @ ORG_08c9a13c (instance #1)
[2025-12-16T08:43:48.770Z] [BOT] 💾 BEFORE ARCHIVING: 397 jobs in database
[2025-12-16T08:43:48.770Z] [BOT] ✅ No jobs to archive (all 397 jobs within 7-day window)
[2025-12-16T08:43:48.774Z] [BOT] 💾 Saved posted_jobs.json: 397 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:43:48.774Z] [BOT] 📍 [ROUTING] "University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
[2025-12-16T08:43:48.775Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T08:43:48.964Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
[2025-12-16T08:43:48.964Z] [BOT] ✅ Industry: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2025-12-16T08:43:50.670Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-16T08:43:50.670Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T08:43:52.171Z] [BOT] 💾 Marked as posted: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 (instance #1)
[2025-12-16T08:43:52.171Z] [BOT] 💾 BEFORE ARCHIVING: 398 jobs in database
[2025-12-16T08:43:52.171Z] [BOT] ✅ No jobs to archive (all 398 jobs within 7-day window)
[2025-12-16T08:43:52.175Z] [BOT] 💾 Saved posted_jobs.json: 398 active jobs
[2025-12-16T08:43:52.175Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:43:52.176Z] [BOT] 📍 [ROUTING] "Analytic Science - Scientist I" @ ORG_4c4e186a
[2025-12-16T08:43:52.176Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T08:43:52.380Z] [BOT] ✅ Created forum post: 🏢 Analytic Science - Scientist I @ ORG_4c4e186a in #🤖・ai-jobs
[2025-12-16T08:43:52.380Z] [BOT] ✅ Industry: Analytic Science - Scientist I @ ORG_4c4e186a
[2025-12-16T08:43:54.263Z] [BOT] ✅ Created forum post: 🏢 Analytic Science - Scientist I @ ORG_4c4e186a in #💻・remote-usa
[2025-12-16T08:43:54.263Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T08:43:55.763Z] [BOT] 💾 Marked as posted: Analytic Science - Scientist I @ ORG_4c4e186a (instance #1)
[2025-12-16T08:43:55.763Z] [BOT] 💾 BEFORE ARCHIVING: 399 jobs in database
[2025-12-16T08:43:55.764Z] [BOT] ✅ No jobs to archive (all 399 jobs within 7-day window)
[2025-12-16T08:43:55.767Z] [BOT] 💾 Saved posted_jobs.json: 399 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:43:58.768Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-16T08:43:58.770Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Oracle Cloud Infrastructure - Oci" @ ORG_dc7620eb
[2025-12-16T08:43:58.770Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:43:59.006Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Oracle Cloud Infrastructure - Oci @ ORG_dc7620eb in #💻・tech-jobs
[2025-12-16T08:43:59.006Z] [BOT] ✅ Industry: Undergrad Software Engineer - Oracle Cloud Infrastructure - Oci @ ORG_dc7620eb
[2025-12-16T08:44:00.786Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Oracle Cloud Infrastructure - Oci @ ORG_dc7620eb in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T08:44:02.288Z] [BOT] 💾 Marked as posted: Undergrad Software Engineer - Oracle Cloud Infrastructure - Oci @ ORG_dc7620eb (instance #1)
[2025-12-16T08:44:02.288Z] [BOT] 💾 BEFORE ARCHIVING: 400 jobs in database
[2025-12-16T08:44:02.288Z] [BOT] ✅ No jobs to archive (all 400 jobs within 7-day window)
[2025-12-16T08:44:02.293Z] [BOT] 💾 Saved posted_jobs.json: 400 active jobs
[2025-12-16T08:44:02.293Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:44:02.293Z] [BOT] 💾 Marked as posted: Undergrad Software Engineer - Oracle Cloud Infrastructure - OCI @ ORG_dc7620eb (instance #1)
[2025-12-16T08:44:02.293Z] [BOT] 💾 BEFORE ARCHIVING: 401 jobs in database
[2025-12-16T08:44:02.294Z] [BOT] ✅ No jobs to archive (all 401 jobs within 7-day window)
[2025-12-16T08:44:02.297Z] [BOT] 💾 Saved posted_jobs.json: 401 active jobs
[2025-12-16T08:44:02.297Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:44:02.298Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Global Industries" @ ORG_dc7620eb
[2025-12-16T08:44:02.298Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:44:02.545Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Global Industries @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Undergrad Software Engineer - Global Industries @ ORG_dc7620eb
[2025-12-16T08:44:04.047Z] [BOT] 💾 Marked as posted: Undergrad Software Engineer - Global Industries @ ORG_dc7620eb (instance #1)
[2025-12-16T08:44:04.047Z] [BOT] 💾 BEFORE ARCHIVING: 402 jobs in database
[2025-12-16T08:44:04.048Z] [BOT] ✅ No jobs to archive (all 402 jobs within 7-day window)
[2025-12-16T08:44:04.052Z] [BOT] 💾 Saved posted_jobs.json: 402 active jobs
[2025-12-16T08:44:04.052Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:44:04.053Z] [BOT] 📍 [ROUTING] "Software Engineer & Computer Science – Recent Grad/Full Time - US Person Required" @ ORG_7a23266b
[2025-12-16T08:44:04.053Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:44:04.362Z] [BOT] ✅ Created forum post: 🏢 Software Engineer & Computer Science – Recent Grad/Full Time - US Person Required @ ORG_7a23266b in #💻・tech-jobs
  ✅ Industry: Software Engineer & Computer Science – Recent Grad/Full Time - US Person Required @ ORG_7a23266b
[2025-12-16T08:44:05.864Z] [BOT] 💾 Marked as posted: Software Engineer & Computer Science – Recent Grad/Full Time - US Person Required @ ORG_7a23266b (instance #1)
[2025-12-16T08:44:05.864Z] [BOT] 💾 BEFORE ARCHIVING: 403 jobs in database
[2025-12-16T08:44:05.864Z] [BOT] ✅ No jobs to archive (all 403 jobs within 7-day window)
[2025-12-16T08:44:05.869Z] [BOT] 💾 Saved posted_jobs.json: 403 active jobs
[2025-12-16T08:44:05.869Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:44:05.870Z] [BOT] 📍 [ROUTING] "Full Stack Engineer" @ ORG_b26219beina
[2025-12-16T08:44:05.870Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:44:06.089Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer @ ORG_b26219beina in #💻・tech-jobs
  ✅ Industry: Full Stack Engineer @ ORG_b26219beina
[2025-12-16T08:44:07.789Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer @ ORG_b26219beina in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T08:44:09.289Z] [BOT] 💾 Marked as posted: Full Stack Engineer @ ORG_b26219beina (instance #1)
[2025-12-16T08:44:09.289Z] [BOT] 💾 BEFORE ARCHIVING: 404 jobs in database
[2025-12-16T08:44:09.289Z] [BOT] ✅ No jobs to archive (all 404 jobs within 7-day window)
[2025-12-16T08:44:09.294Z] [BOT] 💾 Saved posted_jobs.json: 404 active jobs
[2025-12-16T08:44:09.294Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:44:12.295Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T08:44:12.296Z] [BOT] 📍 [ROUTING] "Financial Data Analyst" @ ORG_23325912 Global
[2025-12-16T08:44:12.296Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T08:44:12.671Z] [BOT] ✅ Created forum post: 🏢 Financial Data Analyst @ ORG_23325912 Global in #📈・JID_fb739488
  ✅ Industry: Financial Data Analyst @ ORG_23325912 Global
[2025-12-16T08:44:14.386Z] [BOT] ✅ Created forum post: 🏢 Financial Data Analyst @ ORG_23325912 Global in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-16T08:44:15.886Z] [BOT] 💾 Marked as posted: Financial Data Analyst @ ORG_23325912 Global (instance #1)
[2025-12-16T08:44:15.886Z] [BOT] 💾 BEFORE ARCHIVING: 405 jobs in database
[2025-12-16T08:44:15.887Z] [BOT] ✅ No jobs to archive (all 405 jobs within 7-day window)
[2025-12-16T08:44:15.892Z] [BOT] 💾 Saved posted_jobs.json: 405 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:44:18.893Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-16T08:44:18.893Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_44c705ca-detail (posted within 7 days)
[2025-12-16T08:44:18.894Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_5dbbf4c2-detail (posted within 7 days)
[2025-12-16T08:44:18.894Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-305993 (posted within 7 days)
⏭️  Skipping duplicate: JID_0a236e74 (posted within 7 days)
[2025-12-16T08:44:18.894Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-313437 (posted within 7 days)
⏭️  Skipping duplicate: JID_2d3360d6 (posted within 7 days)
[2025-12-16T08:44:18.895Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r160689 (posted within 7 days)
⏭️  Skipping duplicate: JID_e355194f-i_31198 (posted within 7 days)
⏭️  Skipping duplicate: JID_dd169aa0 (posted within 7 days)
[2025-12-16T08:44:18.898Z] [BOT] ✅ Loaded pending queue: 488 total (468 pending, 20 enriched, 0 posted)
[2025-12-16T08:44:18.905Z] [BOT] ✅ Saved pending queue: 488 total (468 pending, 11 enriched, 9 posted)
[2025-12-16T08:44:18.905Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T08:44:18.946Z] [BOT] 📂 Loaded 381 existing routing entries
[2025-12-16T08:44:18.985Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 390
   Timestamp: 2025-12-16T08:44:18.984Z
[2025-12-16T08:44:18.986Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T08:44:18.986Z] [BOT] Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2025-12-16T08:44:20.999Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3226) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*