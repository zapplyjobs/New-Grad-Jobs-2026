# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T19:48:51.640Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T19:48:06.379Z] ========================================
[2026-02-01T19:48:06.381Z] Discord Bot Execution Log
[2026-02-01T19:48:06.381Z] Environment: GitHub Actions
[2026-02-01T19:48:06.381Z] Node Version: v20.20.0
[2026-02-01T19:48:06.381Z] ========================================
[2026-02-01T19:48:06.381Z] Environment Variables Check:
[2026-02-01T19:48:06.381Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T19:48:06.382Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T19:48:06.382Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T19:48:06.382Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T19:48:06.382Z] 
Multi-Channel Configuration:
[2026-02-01T19:48:06.382Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T19:48:06.382Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:48:06.382Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:48:06.382Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T19:48:06.382Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:48:06.382Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:48:06.382Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:48:06.382Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:48:06.383Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:48:06.383Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T19:48:06.383Z] 
Data Files Check:
[2026-02-01T19:48:06.384Z] .github/data/new_jobs.json: ✅ Exists (10 items, 86598 bytes)
[2026-02-01T19:48:06.436Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10776193 bytes)
[2026-02-01T19:48:06.436Z] 
========================================
[2026-02-01T19:48:06.436Z] Starting Enhanced Discord Bot...
[2026-02-01T19:48:06.436Z] ========================================
[2026-02-01T19:48:07.011Z] [BOT] ✅ Loaded V2 database: 2157 jobs
[2026-02-01T19:48:07.692Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T19:48:07.693Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T19:48:07.693Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T19:48:07.741Z] [BOT] ✅ Loaded pending queue: 785 total (735 pending, 50 enriched, 0 posted)
[2026-02-01T19:48:07.741Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate Software Engineer at Tubi
[2026-02-01T19:48:07.761Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T19:48:07.761Z] [BOT] 🚫 Skipping blacklisted job: Senior/Staff Software Engineer, Inference at anthropic
[2026-02-01T19:48:07.761Z] [BOT] 🚫 Skipping blacklisted job: Staff Infrastructure Engineer, Pre-training at anthropic
[2026-02-01T19:48:07.761Z] [BOT] 🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Senior Data Analyst - Associate - Data Analyst at Ameren
[2026-02-01T19:48:07.761Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
[2026-02-01T19:48:07.762Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
[2026-02-01T19:48:07.762Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Data Center Infrastructure at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
[2026-02-01T19:48:07.762Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer at Walmart
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
[2026-02-01T19:48:07.762Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
[2026-02-01T19:48:07.762Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
[2026-02-01T19:48:07.762Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Senior Data Scientist - Gusto 401(k) at gusto
🚫 Skipping blacklisted job: Staff Product Designer, Visual Systems at datadog
[2026-02-01T19:48:07.763Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer, Bits AI at datadog
🚫 Skipping blacklisted job: Director, Product Foundations at vercel
🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
[2026-02-01T19:48:07.763Z] [BOT] 🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
🚫 Skipping blacklisted job: Senior Manager, National Technology Partners at brex
🚫 Skipping blacklisted job: Senior Accountant - NYC at datadog
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-01T19:48:07.763Z] [BOT] 🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-02-01T19:48:07.812Z] [BOT] ✅ Loaded pending queue: 785 total (735 pending, 50 enriched, 0 posted)
[2026-02-01T19:48:07.886Z] [BOT] ✅ Saved pending queue: 744 total (735 pending, 9 enriched, 0 posted)
🗑️ Removed 41 blacklisted jobs from pending queue
[2026-02-01T19:48:07.886Z] [BOT] 📋 After blacklist filter: 9 jobs (41 blacklisted)
📋 After data quality filter: 9 jobs (0 invalid)
[2026-02-01T19:48:07.887Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-02-01T19:48:07.887Z] [BOT] ⏸️ Limiting to 10 jobs this run, 41 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T19:48:07.890Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-02-01T19:48:07.891Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_7b1987fb
[2026-02-01T19:48:07.891Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T19:48:07.909Z] [BOT ERROR] (node:3617) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T19:48:08.181Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_7b1987fb in #🤖・ai-jobs
[2026-02-01T19:48:08.181Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_7b1987fb
[2026-02-01T19:48:08.182Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_7b1987fb → category channel (1 total channels)
[2026-02-01T19:48:08.182Z] [BOT] 💾 BEFORE MERGE: 2158 jobs in memory (cached)
[2026-02-01T19:48:08.226Z] [BOT] ✅ Loaded V2 database: 2157 jobs
💾 DISK STATE: 2157 jobs on disk
[2026-02-01T19:48:08.227Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2158
[2026-02-01T19:48:08.232Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:48:08.232Z] [BOT] 💾 AFTER MERGE: 2158 jobs (merged disk + memory)
[2026-02-01T19:48:08.234Z] [BOT] ✅ No jobs to archive (all 2158 jobs within 7-day window)
[2026-02-01T19:48:08.359Z] [BOT] 💾 Saved posted_jobs.json: 2158 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:10.044Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_7b1987fb in #🌉・JID_739bbc0b
[2026-02-01T19:48:10.044Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T19:48:10.045Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_7b1987fb → location channel (2 total channels)
[2026-02-01T19:48:10.045Z] [BOT] 💾 BEFORE MERGE: 2158 jobs in memory (cached)
[2026-02-01T19:48:10.082Z] [BOT] ✅ Loaded V2 database: 2158 jobs
💾 DISK STATE: 2158 jobs on disk
[2026-02-01T19:48:10.082Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2158
[2026-02-01T19:48:10.087Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_7b1987fb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:48:10.087Z] [BOT] 💾 AFTER MERGE: 2158 jobs (merged disk + memory)
[2026-02-01T19:48:10.088Z] [BOT] ✅ No jobs to archive (all 2158 jobs within 7-day window)
[2026-02-01T19:48:10.196Z] [BOT] 💾 Saved posted_jobs.json: 2158 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:11.697Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_7b1987fb
[2026-02-01T19:48:11.697Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T19:48:11.943Z] [BOT] ✅ Posted message: Data Scientist @ ORG_7b1987fb in #🤖・ai-jobs
[2026-02-01T19:48:11.944Z] [BOT] ✅ Industry: Data Scientist @ ORG_7b1987fb
[2026-02-01T19:48:11.944Z] [BOT] 💾 Added channel posting: Data Scientist @ ORG_7b1987fb → category channel (1 total channels)
[2026-02-01T19:48:11.944Z] [BOT] 💾 BEFORE MERGE: 2159 jobs in memory (cached)
[2026-02-01T19:48:11.983Z] [BOT] ✅ Loaded V2 database: 2158 jobs
💾 DISK STATE: 2158 jobs on disk
[2026-02-01T19:48:11.984Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2159
[2026-02-01T19:48:11.988Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:48:11.988Z] [BOT] 💾 AFTER MERGE: 2159 jobs (merged disk + memory)
[2026-02-01T19:48:11.990Z] [BOT] ✅ No jobs to archive (all 2159 jobs within 7-day window)
[2026-02-01T19:48:12.096Z] [BOT] 💾 Saved posted_jobs.json: 2159 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:13.810Z] [BOT] ✅ Posted message: Data Scientist @ ORG_7b1987fb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T19:48:13.811Z] [BOT] 💾 Added channel posting: Data Scientist @ ORG_7b1987fb → location channel (2 total channels)
[2026-02-01T19:48:13.811Z] [BOT] 💾 BEFORE MERGE: 2159 jobs in memory (cached)
[2026-02-01T19:48:13.848Z] [BOT] ✅ Loaded V2 database: 2159 jobs
💾 DISK STATE: 2159 jobs on disk
[2026-02-01T19:48:13.849Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2159
[2026-02-01T19:48:13.853Z] [BOT] 🔀 Deep merged: Data Scientist @ ORG_7b1987fb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:48:13.853Z] [BOT] 💾 AFTER MERGE: 2159 jobs (merged disk + memory)
[2026-02-01T19:48:13.854Z] [BOT] ✅ No jobs to archive (all 2159 jobs within 7-day window)
[2026-02-01T19:48:13.969Z] [BOT] 💾 Saved posted_jobs.json: 2159 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:15.470Z] [BOT] 📍 [ROUTING] "Software Engineer – New Graduate - Seattle" @ ORG_09f42bbe
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T19:48:15.470Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T19:48:15.782Z] [BOT] ✅ Posted message: Software Engineer – New Graduate - Seattle @ ORG_09f42bbe in #🤖・ai-jobs
  ✅ Industry: Software Engineer – New Graduate - Seattle @ ORG_09f42bbe
[2026-02-01T19:48:15.783Z] [BOT] 💾 Added channel posting: Software Engineer – New Graduate - Seattle @ ORG_09f42bbe → category channel (1 total channels)
[2026-02-01T19:48:15.784Z] [BOT] 💾 BEFORE MERGE: 2160 jobs in memory (cached)
[2026-02-01T19:48:15.822Z] [BOT] ✅ Loaded V2 database: 2159 jobs
💾 DISK STATE: 2159 jobs on disk
[2026-02-01T19:48:15.822Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2160
[2026-02-01T19:48:15.828Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:48:15.828Z] [BOT] 💾 AFTER MERGE: 2160 jobs (merged disk + memory)
[2026-02-01T19:48:15.829Z] [BOT] ✅ No jobs to archive (all 2160 jobs within 7-day window)
[2026-02-01T19:48:15.936Z] [BOT] 💾 Saved posted_jobs.json: 2160 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:17.643Z] [BOT] ✅ Posted message: Software Engineer – New Graduate - Seattle @ ORG_09f42bbe in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T19:48:17.643Z] [BOT] 💾 Added channel posting: Software Engineer – New Graduate - Seattle @ ORG_09f42bbe → location channel (2 total channels)
[2026-02-01T19:48:17.643Z] [BOT] 💾 BEFORE MERGE: 2160 jobs in memory (cached)
[2026-02-01T19:48:17.681Z] [BOT] ✅ Loaded V2 database: 2160 jobs
💾 DISK STATE: 2160 jobs on disk
[2026-02-01T19:48:17.682Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2160
[2026-02-01T19:48:17.686Z] [BOT] 🔀 Deep merged: Software Engineer – New Graduate - Seattle @ ORG_09f42bbe (disk: 1 channels → merged: 2 channels)
[2026-02-01T19:48:17.686Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2160 jobs (merged disk + memory)
[2026-02-01T19:48:17.687Z] [BOT] ✅ No jobs to archive (all 2160 jobs within 7-day window)
[2026-02-01T19:48:17.820Z] [BOT] 💾 Saved posted_jobs.json: 2160 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:19.321Z] [BOT] 📍 [ROUTING] "IT Software Engineering - Data Engineer" @ ORG_66279f04 Investments
   Category: AI (matched: "AI/ML")
[2026-02-01T19:48:19.321Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T19:48:19.619Z] [BOT] ✅ Posted message: IT Software Engineering - Data Engineer @ ORG_66279f04 Investments in #🤖・ai-jobs
  ✅ Industry: IT Software Engineering - Data Engineer @ ORG_66279f04 Investments
[2026-02-01T19:48:19.620Z] [BOT] 💾 Added channel posting: IT Software Engineering - Data Engineer @ ORG_66279f04 Investments → category channel (1 total channels)
[2026-02-01T19:48:19.620Z] [BOT] 💾 BEFORE MERGE: 2161 jobs in memory (cached)
[2026-02-01T19:48:19.656Z] [BOT] ✅ Loaded V2 database: 2160 jobs
💾 DISK STATE: 2160 jobs on disk
[2026-02-01T19:48:19.656Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2161
[2026-02-01T19:48:19.660Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:48:19.660Z] [BOT] 💾 AFTER MERGE: 2161 jobs (merged disk + memory)
[2026-02-01T19:48:19.661Z] [BOT] ✅ No jobs to archive (all 2161 jobs within 7-day window)
[2026-02-01T19:48:19.759Z] [BOT] 💾 Saved posted_jobs.json: 2161 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:21.497Z] [BOT] ✅ Posted message: IT Software Engineering - Data Engineer @ ORG_66279f04 Investments in #📍・JID_6daed763
[2026-02-01T19:48:21.498Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T19:48:21.498Z] [BOT] 💾 Added channel posting: IT Software Engineering - Data Engineer @ ORG_66279f04 Investments → location channel (2 total channels)
[2026-02-01T19:48:21.498Z] [BOT] 💾 BEFORE MERGE: 2161 jobs in memory (cached)
[2026-02-01T19:48:21.533Z] [BOT] ✅ Loaded V2 database: 2161 jobs
💾 DISK STATE: 2161 jobs on disk
[2026-02-01T19:48:21.533Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2161
[2026-02-01T19:48:21.537Z] [BOT] 🔀 Deep merged: IT Software Engineering - Data Engineer @ ORG_66279f04 Investments (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:48:21.537Z] [BOT] 💾 AFTER MERGE: 2161 jobs (merged disk + memory)
[2026-02-01T19:48:21.538Z] [BOT] ✅ No jobs to archive (all 2161 jobs within 7-day window)
[2026-02-01T19:48:21.634Z] [BOT] 💾 Saved posted_jobs.json: 2161 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:26.136Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-02-01T19:48:26.138Z] [BOT] 📍 [ROUTING] "Entry Level Application Engineer - 2026 Start Date" @ ORG_ce1edfea
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T19:48:26.138Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:48:26.396Z] [BOT] ✅ Posted message: Entry Level Application Engineer - 2026 Start Date @ ORG_ce1edfea in #💻・tech-jobs
  ✅ Industry: Entry Level Application Engineer - 2026 Start Date @ ORG_ce1edfea
[2026-02-01T19:48:26.397Z] [BOT] 💾 Added channel posting: Entry Level Application Engineer - 2026 Start Date @ ORG_ce1edfea → category channel (1 total channels)
[2026-02-01T19:48:26.397Z] [BOT] 💾 BEFORE MERGE: 2162 jobs in memory (cached)
[2026-02-01T19:48:26.435Z] [BOT] ✅ Loaded V2 database: 2161 jobs
💾 DISK STATE: 2161 jobs on disk
[2026-02-01T19:48:26.435Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2162
[2026-02-01T19:48:26.439Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:48:26.439Z] [BOT] 💾 AFTER MERGE: 2162 jobs (merged disk + memory)
[2026-02-01T19:48:26.440Z] [BOT] ✅ No jobs to archive (all 2162 jobs within 7-day window)
[2026-02-01T19:48:26.545Z] [BOT] 💾 Saved posted_jobs.json: 2162 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:28.334Z] [BOT] ✅ Posted message: Entry Level Application Engineer - 2026 Start Date @ ORG_ce1edfea in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T19:48:28.335Z] [BOT] 💾 Added channel posting: Entry Level Application Engineer - 2026 Start Date @ ORG_ce1edfea → location channel (2 total channels)
[2026-02-01T19:48:28.335Z] [BOT] 💾 BEFORE MERGE: 2162 jobs in memory (cached)
[2026-02-01T19:48:28.378Z] [BOT] ✅ Loaded V2 database: 2162 jobs
[2026-02-01T19:48:28.380Z] [BOT] 💾 DISK STATE: 2162 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2162
[2026-02-01T19:48:28.390Z] [BOT] 🔀 Deep merged: Entry Level Application Engineer - 2026 Start Date @ ORG_ce1edfea (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:48:28.390Z] [BOT] 💾 AFTER MERGE: 2162 jobs (merged disk + memory)
[2026-02-01T19:48:28.392Z] [BOT] ✅ No jobs to archive (all 2162 jobs within 7-day window)
[2026-02-01T19:48:28.490Z] [BOT] 💾 Saved posted_jobs.json: 2162 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:29.992Z] [BOT] 📍 [ROUTING] "Sde 1 – Creator Monetization" @ ORG_a731a58c
   Category: TECH (default)
[2026-02-01T19:48:29.992Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:48:30.172Z] [BOT] ✅ Posted message: Sde 1 – Creator Monetization @ ORG_a731a58c in #💻・tech-jobs
  ✅ Industry: Sde 1 – Creator Monetization @ ORG_a731a58c
[2026-02-01T19:48:30.173Z] [BOT] 💾 Added channel posting: Sde 1 – Creator Monetization @ ORG_a731a58c → category channel (1 total channels)
[2026-02-01T19:48:30.174Z] [BOT] 💾 BEFORE MERGE: 2163 jobs in memory (cached)
[2026-02-01T19:48:30.227Z] [BOT] ✅ Loaded V2 database: 2162 jobs
💾 DISK STATE: 2162 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2163
[2026-02-01T19:48:30.229Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:48:30.229Z] [BOT] 💾 AFTER MERGE: 2163 jobs (merged disk + memory)
[2026-02-01T19:48:30.230Z] [BOT] ✅ No jobs to archive (all 2163 jobs within 7-day window)
[2026-02-01T19:48:30.327Z] [BOT] 💾 Saved posted_jobs.json: 2163 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:32.051Z] [BOT] ✅ Posted message: Sde 1 – Creator Monetization @ ORG_a731a58c in #🌉・JID_739bbc0b
[2026-02-01T19:48:32.051Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T19:48:32.051Z] [BOT] 💾 Added channel posting: Sde 1 – Creator Monetization @ ORG_a731a58c → location channel (2 total channels)
[2026-02-01T19:48:32.052Z] [BOT] 💾 BEFORE MERGE: 2163 jobs in memory (cached)
[2026-02-01T19:48:32.090Z] [BOT] ✅ Loaded V2 database: 2163 jobs
💾 DISK STATE: 2163 jobs on disk
[2026-02-01T19:48:32.090Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2163
[2026-02-01T19:48:32.094Z] [BOT] 🔀 Deep merged: Sde 1 – Creator Monetization @ ORG_a731a58c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:48:32.094Z] [BOT] 💾 AFTER MERGE: 2163 jobs (merged disk + memory)
[2026-02-01T19:48:32.095Z] [BOT] ✅ No jobs to archive (all 2163 jobs within 7-day window)
[2026-02-01T19:48:32.200Z] [BOT] 💾 Saved posted_jobs.json: 2163 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:33.702Z] [BOT] 📍 [ROUTING] "Warehouse Automation Software Engineer" @ ORG_ffd95542 Group
[2026-02-01T19:48:33.702Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:48:33.880Z] [BOT] ✅ Posted message: Warehouse Automation Software Engineer @ ORG_ffd95542 Group in #💻・tech-jobs
[2026-02-01T19:48:33.880Z] [BOT] ✅ Industry: Warehouse Automation Software Engineer @ ORG_ffd95542 Group
[2026-02-01T19:48:33.880Z] [BOT] 💾 Added channel posting: Warehouse Automation Software Engineer @ ORG_ffd95542 Group → category channel (1 total channels)
[2026-02-01T19:48:33.880Z] [BOT] 💾 BEFORE MERGE: 2164 jobs in memory (cached)
[2026-02-01T19:48:33.918Z] [BOT] ✅ Loaded V2 database: 2163 jobs
💾 DISK STATE: 2163 jobs on disk
[2026-02-01T19:48:33.919Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2164
[2026-02-01T19:48:33.922Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:48:33.922Z] [BOT] 💾 AFTER MERGE: 2164 jobs (merged disk + memory)
[2026-02-01T19:48:33.923Z] [BOT] ✅ No jobs to archive (all 2164 jobs within 7-day window)
[2026-02-01T19:48:34.028Z] [BOT] 💾 Saved posted_jobs.json: 2164 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:35.735Z] [BOT] ✅ Posted message: Warehouse Automation Software Engineer @ ORG_ffd95542 Group in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T19:48:35.736Z] [BOT] 💾 Added channel posting: Warehouse Automation Software Engineer @ ORG_ffd95542 Group → location channel (2 total channels)
[2026-02-01T19:48:35.736Z] [BOT] 💾 BEFORE MERGE: 2164 jobs in memory (cached)
[2026-02-01T19:48:35.773Z] [BOT] ✅ Loaded V2 database: 2164 jobs
💾 DISK STATE: 2164 jobs on disk
[2026-02-01T19:48:35.774Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2164
[2026-02-01T19:48:35.778Z] [BOT] 🔀 Deep merged: Warehouse Automation Software Engineer @ ORG_ffd95542 Group (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:48:35.778Z] [BOT] 💾 AFTER MERGE: 2164 jobs (merged disk + memory)
[2026-02-01T19:48:35.779Z] [BOT] ✅ No jobs to archive (all 2164 jobs within 7-day window)
[2026-02-01T19:48:35.883Z] [BOT] 💾 Saved posted_jobs.json: 2164 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:37.384Z] [BOT] 📍 [ROUTING] "Warehouse Automation Software Engineer" @ ORG_4b1f297a
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:48:37.678Z] [BOT] ✅ Posted message: Warehouse Automation Software Engineer @ ORG_4b1f297a in #💻・tech-jobs
  ✅ Industry: Warehouse Automation Software Engineer @ ORG_4b1f297a
[2026-02-01T19:48:37.678Z] [BOT] 💾 Added channel posting: Warehouse Automation Software Engineer @ ORG_4b1f297a → category channel (1 total channels)
[2026-02-01T19:48:37.679Z] [BOT] 💾 BEFORE MERGE: 2165 jobs in memory (cached)
[2026-02-01T19:48:37.716Z] [BOT] ✅ Loaded V2 database: 2164 jobs
💾 DISK STATE: 2164 jobs on disk
[2026-02-01T19:48:37.717Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2165
[2026-02-01T19:48:37.720Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:48:37.721Z] [BOT] 💾 AFTER MERGE: 2165 jobs (merged disk + memory)
[2026-02-01T19:48:37.722Z] [BOT] ✅ No jobs to archive (all 2165 jobs within 7-day window)
[2026-02-01T19:48:37.829Z] [BOT] 💾 Saved posted_jobs.json: 2165 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:39.603Z] [BOT] ✅ Posted message: Warehouse Automation Software Engineer @ ORG_4b1f297a in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T19:48:39.603Z] [BOT] 💾 Added channel posting: Warehouse Automation Software Engineer @ ORG_4b1f297a → location channel (2 total channels)
[2026-02-01T19:48:39.603Z] [BOT] 💾 BEFORE MERGE: 2165 jobs in memory (cached)
[2026-02-01T19:48:39.639Z] [BOT] ✅ Loaded V2 database: 2165 jobs
💾 DISK STATE: 2165 jobs on disk
[2026-02-01T19:48:39.639Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2165
[2026-02-01T19:48:39.643Z] [BOT] 🔀 Deep merged: Warehouse Automation Software Engineer @ ORG_4b1f297a (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:48:39.643Z] [BOT] 💾 AFTER MERGE: 2165 jobs (merged disk + memory)
[2026-02-01T19:48:39.645Z] [BOT] ✅ No jobs to archive (all 2165 jobs within 7-day window)
[2026-02-01T19:48:39.742Z] [BOT] 💾 Saved posted_jobs.json: 2165 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:41.245Z] [BOT] 📍 [ROUTING] "Analyst – Investment Data Management" @ ORG_66279f04 Investments
   Category: TECH (matched: "data")
[2026-02-01T19:48:41.245Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T19:48:41.473Z] [BOT] ✅ Posted message: Analyst – Investment Data Management @ ORG_66279f04 Investments in #💻・tech-jobs
  ✅ Industry: Analyst – Investment Data Management @ ORG_66279f04 Investments
[2026-02-01T19:48:41.474Z] [BOT] 💾 Added channel posting: Analyst – Investment Data Management @ ORG_66279f04 Investments → category channel (1 total channels)
💾 BEFORE MERGE: 2166 jobs in memory (cached)
[2026-02-01T19:48:41.512Z] [BOT] ✅ Loaded V2 database: 2165 jobs
💾 DISK STATE: 2165 jobs on disk
[2026-02-01T19:48:41.513Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2166
[2026-02-01T19:48:41.516Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:48:41.516Z] [BOT] 💾 AFTER MERGE: 2166 jobs (merged disk + memory)
[2026-02-01T19:48:41.517Z] [BOT] ✅ No jobs to archive (all 2166 jobs within 7-day window)
[2026-02-01T19:48:41.622Z] [BOT] 💾 Saved posted_jobs.json: 2166 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:43.319Z] [BOT] ✅ Posted message: Analyst – Investment Data Management @ ORG_66279f04 Investments in #📍・JID_6daed763
[2026-02-01T19:48:43.319Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T19:48:43.320Z] [BOT] 💾 Added channel posting: Analyst – Investment Data Management @ ORG_66279f04 Investments → location channel (2 total channels)
[2026-02-01T19:48:43.320Z] [BOT] 💾 BEFORE MERGE: 2166 jobs in memory (cached)
[2026-02-01T19:48:43.357Z] [BOT] ✅ Loaded V2 database: 2166 jobs
💾 DISK STATE: 2166 jobs on disk
[2026-02-01T19:48:43.358Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2166
[2026-02-01T19:48:43.361Z] [BOT] 🔀 Deep merged: Analyst – Investment Data Management @ ORG_66279f04 Investments (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:48:43.361Z] [BOT] 💾 AFTER MERGE: 2166 jobs (merged disk + memory)
[2026-02-01T19:48:43.362Z] [BOT] ✅ No jobs to archive (all 2166 jobs within 7-day window)
[2026-02-01T19:48:43.482Z] [BOT] 💾 Saved posted_jobs.json: 2166 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:47.981Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-02-01T19:48:47.983Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_39193cb1..." not found, but found as SHA256 "8f97f6961632d139"
[2026-02-01T19:48:47.983Z] [BOT] ⏭️  Skipping duplicate: JID_19637e19 (posted within 7 days)
[2026-02-01T19:48:47.983Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_39193cb1..." not found, but found as SHA256 "329f7eb63dcba97f"
[2026-02-01T19:48:47.984Z] [BOT] ⏭️  Skipping duplicate: JID_bb9d0646 (posted within 7 days)
[2026-02-01T19:48:47.984Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_978ad86c..." not found, but found as SHA256 "83468ee55336f8c8"
⏭️  Skipping duplicate: JID_11c73bbf-contractors_restricted-JID_0fdf4f20-date_168908-1 (posted within 7 days)
[2026-02-01T19:48:47.984Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4bb653e3..." not found, but found as SHA256 "7e45254ff34afd86"
[2026-02-01T19:48:47.984Z] [BOT] ⏭️  Skipping duplicate: JID_d3652f02 (posted within 7 days)
[2026-02-01T19:48:47.985Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_639813bf..." not found, but found as SHA256 "17821e47766b87f2"
[2026-02-01T19:48:47.985Z] [BOT] ⏭️  Skipping duplicate: JID_580e7fea-engineer_jr-0083243-1 (posted within 7 days)
[2026-02-01T19:48:47.985Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c5752838-kion_scs..." not found, but found as SHA256 "83aff107e97b7f05"
[2026-02-01T19:48:47.985Z] [BOT] ⏭️  Skipping duplicate: JID_c5752838-kion_scs-JID_e17fb0e6-engineer_jr-0083243 (posted within 7 days)
[2026-02-01T19:48:47.985Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a7edb670-..." not found, but found as SHA256 "5e22353315d2c696"
⏭️  Skipping duplicate: JID_f0cabd56 (posted within 7 days)
[2026-02-01T19:48:47.986Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9dd05098..." not found, but found as SHA256 "80961d557582b72a"
[2026-02-01T19:48:47.986Z] [BOT] ⏭️  Skipping duplicate: JID_3d7ea876-management_2119659 (posted within 7 days)
[2026-02-01T19:48:47.986Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fefebf41..." not found, but found as SHA256 "41fea93df7cf96ab"
[2026-02-01T19:48:47.986Z] [BOT] ⏭️  Skipping duplicate: JID_d6ffef89-engineer_2123335 (posted within 7 days)
[2026-02-01T19:48:48.024Z] [BOT] ✅ Loaded pending queue: 744 total (735 pending, 9 enriched, 0 posted)
[2026-02-01T19:48:48.088Z] [BOT] ✅ Saved pending queue: 744 total (735 pending, 0 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-02-01T19:48:48.089Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T19:48:48.194Z] [BOT] 📂 Loaded 12238 existing routing entries
[2026-02-01T19:48:48.313Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 12247
   Timestamp: 2026-02-01T19:48:48.263Z
[2026-02-01T19:48:48.314Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 59
[2026-02-01T19:48:48.314Z] [BOT] Successful: 18
   Failed: 0
   Skipped: 41
[2026-02-01T19:48:48.314Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 5
   Top channels:
[2026-02-01T19:48:48.314Z] [BOT] 1. #📍・JID_6daed763: 5 posts
     2. #💻・tech-jobs: 5 posts
     3. #🤖・ai-jobs: 4 posts
     4. #🌉・JID_739bbc0b: 3 posts
     5. #🌲・JID_efdf5921: 1 posts
[2026-02-01T19:48:48.315Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2166 jobs in memory (cached)
[2026-02-01T19:48:48.371Z] [BOT] ✅ Loaded V2 database: 2166 jobs
[2026-02-01T19:48:48.371Z] [BOT] 💾 DISK STATE: 2166 jobs on disk
[2026-02-01T19:48:48.371Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2166
[2026-02-01T19:48:48.375Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:48:48.375Z] [BOT] 💾 AFTER MERGE: 2166 jobs (merged disk + memory)
[2026-02-01T19:48:48.376Z] [BOT] ✅ No jobs to archive (all 2166 jobs within 7-day window)
[2026-02-01T19:48:48.490Z] [BOT] 💾 Saved posted_jobs.json: 2166 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:48:48.490Z] [BOT] ✅ Database saved successfully
[2026-02-01T19:48:50.518Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3617) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*