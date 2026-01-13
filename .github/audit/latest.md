# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T07:42:01.418Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T07:41:10.643Z] ========================================
[2026-01-13T07:41:10.644Z] Discord Bot Execution Log
[2026-01-13T07:41:10.645Z] Environment: GitHub Actions
[2026-01-13T07:41:10.645Z] Node Version: v20.19.6
[2026-01-13T07:41:10.645Z] ========================================
[2026-01-13T07:41:10.645Z] Environment Variables Check:
[2026-01-13T07:41:10.645Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T07:41:10.645Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T07:41:10.645Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T07:41:10.645Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T07:41:10.645Z] 
Multi-Channel Configuration:
[2026-01-13T07:41:10.645Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T07:41:10.645Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T07:41:10.646Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T07:41:10.646Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T07:41:10.646Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T07:41:10.646Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T07:41:10.646Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T07:41:10.646Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T07:41:10.646Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T07:41:10.646Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T07:41:10.646Z] 
Data Files Check:
[2026-01-13T07:41:10.647Z] .github/data/new_jobs.json: ✅ Exists (10 items, 121011 bytes)
[2026-01-13T07:41:10.650Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 447369 bytes)
[2026-01-13T07:41:10.650Z] 
========================================
[2026-01-13T07:41:10.650Z] Starting Enhanced Discord Bot...
[2026-01-13T07:41:10.650Z] ========================================
[2026-01-13T07:41:11.176Z] [BOT] ✅ Loaded V2 database: 849 jobs
[2026-01-13T07:41:11.881Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T07:41:11.881Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T07:41:11.881Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T07:41:11.991Z] [BOT] ✅ Loaded pending queue: 2698 total (2678 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Center Network Modeling Technician 3 at Astreya
[2026-01-13T07:41:11.992Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T07:41:11.993Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T07:41:11.993Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T07:41:11.994Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T07:41:11.994Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T07:41:11.999Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-13T07:41:11.999Z] [BOT] 📍 [ROUTING] "Data Center Network Modeling Technician 3" @ ORG_8d0003a5
[2026-01-13T07:41:11.999Z] [BOT] Category: TECH (matched: "data")
[2026-01-13T07:41:11.999Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:41:12.004Z] [BOT ERROR] (node:2691) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T07:41:12.303Z] [BOT] ✅ Created forum post: 🏢 Data Center Network Modeling Technician 3 @ ORG_8d0003a5 in #💻・tech-jobs
  ✅ Industry: Data Center Network Modeling Technician 3 @ ORG_8d0003a5
[2026-01-13T07:41:14.106Z] [BOT] ✅ Created forum post: 🏢 Data Center Network Modeling Technician 3 @ ORG_8d0003a5 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T07:41:15.607Z] [BOT] 💾 Marked as posted: Data Center Network Modeling Technician 3 @ ORG_8d0003a5 (instance #1)
[2026-01-13T07:41:15.607Z] [BOT] 💾 BEFORE ARCHIVING: 850 jobs in database
[2026-01-13T07:41:15.608Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T07:41:15.613Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T07:41:15.613Z] [BOT] ✅ Archiving complete: 1 archived, 849 active
[2026-01-13T07:41:15.620Z] [BOT] 💾 Saved posted_jobs.json: 849 active jobs
[2026-01-13T07:41:15.620Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:41:15.620Z] [BOT] 📍 [ROUTING] "Incentive Compensation System Engineer" @ anthropic
[2026-01-13T07:41:15.620Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:41:15.940Z] [BOT] ✅ Created forum post: 🏢 Incentive Compensation System Engineer @ anthropic in #💻・tech-jobs
  ✅ Industry: Incentive Compensation System Engineer @ anthropic
[2026-01-13T07:41:17.794Z] [BOT] ✅ Created forum post: 🏢 Incentive Compensation System Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T07:41:19.296Z] [BOT] 💾 Marked as posted: Incentive Compensation System Engineer @ anthropic (instance #1)
[2026-01-13T07:41:19.296Z] [BOT] 💾 BEFORE ARCHIVING: 850 jobs in database
[2026-01-13T07:41:19.296Z] [BOT] ✅ No jobs to archive (all 850 jobs within 7-day window)
[2026-01-13T07:41:19.303Z] [BOT] 💾 Saved posted_jobs.json: 850 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:41:19.303Z] [BOT] 📍 [ROUTING] "Platform Engineer: General Compute" @ supabase
[2026-01-13T07:41:19.303Z] [BOT] Category: TECH (matched: "data engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:41:19.529Z] [BOT] ✅ Created forum post: 🏢 Platform Engineer: General Compute @ supabase in #💻・tech-jobs
  ✅ Industry: Platform Engineer: General Compute @ supabase
[2026-01-13T07:41:21.031Z] [BOT] 💾 Marked as posted: Platform Engineer: General Compute @ supabase (instance #1)
[2026-01-13T07:41:21.031Z] [BOT] 💾 BEFORE ARCHIVING: 851 jobs in database
[2026-01-13T07:41:21.032Z] [BOT] ✅ No jobs to archive (all 851 jobs within 7-day window)
[2026-01-13T07:41:21.039Z] [BOT] 💾 Saved posted_jobs.json: 851 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:41:21.040Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Platform Security" @ discord
[2026-01-13T07:41:21.040Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:41:21.291Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Platform Security @ discord in #💻・tech-jobs
[2026-01-13T07:41:21.291Z] [BOT] ✅ Industry: Senior Software Engineer, Platform Security @ discord
[2026-01-13T07:41:22.991Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Platform Security @ discord in #🌉・san-francisco
[2026-01-13T07:41:22.991Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T07:41:24.492Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Platform Security @ discord (instance #1)
[2026-01-13T07:41:24.492Z] [BOT] 💾 BEFORE ARCHIVING: 852 jobs in database
[2026-01-13T07:41:24.493Z] [BOT] ✅ No jobs to archive (all 852 jobs within 7-day window)
[2026-01-13T07:41:24.500Z] [BOT] 💾 Saved posted_jobs.json: 852 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:41:24.500Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Platform Security" @ discord
[2026-01-13T07:41:24.500Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:41:24.754Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Platform Security @ discord in #💻・tech-jobs
[2026-01-13T07:41:24.755Z] [BOT] ✅ Industry: Staff Software Engineer, Platform Security @ discord
[2026-01-13T07:41:26.448Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Platform Security @ discord in #🌉・san-francisco
[2026-01-13T07:41:26.448Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T07:41:27.948Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Platform Security @ discord (instance #1)
[2026-01-13T07:41:27.948Z] [BOT] 💾 BEFORE ARCHIVING: 853 jobs in database
[2026-01-13T07:41:27.949Z] [BOT] ✅ No jobs to archive (all 853 jobs within 7-day window)
[2026-01-13T07:41:27.955Z] [BOT] 💾 Saved posted_jobs.json: 853 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:41:30.956Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-13T07:41:30.956Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_180876eb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T07:41:31.220Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_180876eb in #🤖・ai-jobs
[2026-01-13T07:41:31.220Z] [BOT] ✅ Industry: Software Engineer @ ORG_180876eb
[2026-01-13T07:41:33.042Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_180876eb in #💻・remote-usa
[2026-01-13T07:41:33.043Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T07:41:34.543Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_180876eb (instance #1)
[2026-01-13T07:41:34.543Z] [BOT] 💾 BEFORE ARCHIVING: 854 jobs in database
[2026-01-13T07:41:34.544Z] [BOT] ✅ No jobs to archive (all 854 jobs within 7-day window)
[2026-01-13T07:41:34.552Z] [BOT] 💾 Saved posted_jobs.json: 854 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:41:34.552Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow in AI/ML Applications for Vaccine Research and Development" @ ORG_977ad75f
   Category: AI (matched: "machine learning")
[2026-01-13T07:41:34.552Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T07:41:34.769Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in AI/ML Applications for Vaccine Research and Development @ ORG_977ad75f in #🤖・ai-jobs
[2026-01-13T07:41:34.769Z] [BOT] ✅ Industry: Postdoctoral Fellow in AI/ML Applications for Vaccine Research and Development @ ORG_977ad75f
[2026-01-13T07:41:36.495Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in AI/ML Applications for Vaccine Research and Development @ ORG_977ad75f in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T07:41:37.996Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow in AI/ML Applications for Vaccine Research and Development @ ORG_977ad75f (instance #1)
[2026-01-13T07:41:37.997Z] [BOT] 💾 BEFORE ARCHIVING: 855 jobs in database
[2026-01-13T07:41:37.997Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2026-01-13T07:41:38.005Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
[2026-01-13T07:41:38.005Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:41:41.006Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-13T07:41:41.006Z] [BOT] 📍 [ROUTING] "Manager of Sales Engineering, Majors/Commercial - AMER" @ vercel
[2026-01-13T07:41:41.006Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T07:41:41.386Z] [BOT] ✅ Created forum post: 🏢 Manager of Sales Engineering, Majors/Commercial - AMER @ vercel in #💲・sales-jobs
[2026-01-13T07:41:41.386Z] [BOT] ✅ Industry: Manager of Sales Engineering, Majors/Commercial - AMER @ vercel
[2026-01-13T07:41:43.256Z] [BOT] ✅ Created forum post: 🏢 Manager of Sales Engineering, Majors/Commercial - AMER @ vercel in #🌉・san-francisco
[2026-01-13T07:41:43.256Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T07:41:44.757Z] [BOT] 💾 Marked as posted: Manager of Sales Engineering, Majors/Commercial - AMER @ vercel (instance #1)
[2026-01-13T07:41:44.758Z] [BOT] 💾 BEFORE ARCHIVING: 856 jobs in database
[2026-01-13T07:41:44.758Z] [BOT] ✅ No jobs to archive (all 856 jobs within 7-day window)
[2026-01-13T07:41:44.769Z] [BOT] 💾 Saved posted_jobs.json: 856 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:41:44.770Z] [BOT] 📍 [ROUTING] "Partner Operations Specialist" @ anthropic
[2026-01-13T07:41:44.770Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T07:41:44.975Z] [BOT] ✅ Created forum post: 🏢 Partner Operations Specialist @ anthropic in #💲・sales-jobs
[2026-01-13T07:41:44.976Z] [BOT] ✅ Industry: Partner Operations Specialist @ anthropic
[2026-01-13T07:41:46.691Z] [BOT] ✅ Created forum post: 🏢 Partner Operations Specialist @ anthropic in #🌉・san-francisco
[2026-01-13T07:41:46.691Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T07:41:48.192Z] [BOT] 💾 Marked as posted: Partner Operations Specialist @ anthropic (instance #1)
[2026-01-13T07:41:48.192Z] [BOT] 💾 BEFORE ARCHIVING: 857 jobs in database
[2026-01-13T07:41:48.193Z] [BOT] ✅ No jobs to archive (all 857 jobs within 7-day window)
[2026-01-13T07:41:48.200Z] [BOT] 💾 Saved posted_jobs.json: 857 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:41:51.201Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-13T07:41:51.201Z] [BOT] 📍 [ROUTING] "Field Marketing Manager, Startups" @ anthropic
[2026-01-13T07:41:51.202Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T07:41:51.417Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager, Startups @ anthropic in #📣・marketing-jobs
  ✅ Industry: Field Marketing Manager, Startups @ anthropic
[2026-01-13T07:41:53.275Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager, Startups @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T07:41:54.776Z] [BOT] 💾 Marked as posted: Field Marketing Manager, Startups @ anthropic (instance #1)
[2026-01-13T07:41:54.776Z] [BOT] 💾 BEFORE ARCHIVING: 858 jobs in database
[2026-01-13T07:41:54.777Z] [BOT] ✅ No jobs to archive (all 858 jobs within 7-day window)
[2026-01-13T07:41:54.785Z] [BOT] 💾 Saved posted_jobs.json: 858 active jobs
[2026-01-13T07:41:54.785Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:41:57.786Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T07:41:57.786Z] [BOT] ⏭️  Skipping duplicate: JID_17f073d0-iii_r0014121 (posted within 7 days)
[2026-01-13T07:41:57.786Z] [BOT] ⏭️  Skipping duplicate: JID_9fb079d8 (posted within 7 days)
[2026-01-13T07:41:57.786Z] [BOT] ⏭️  Skipping duplicate: JID_9d3fd4cc (posted within 7 days)
[2026-01-13T07:41:57.787Z] [BOT] ⏭️  Skipping duplicate: JID_92d01207 (posted within 7 days)
[2026-01-13T07:41:57.787Z] [BOT] ⏭️  Skipping duplicate: JID_f0befb2a (posted within 7 days)
⏭️  Skipping duplicate: JID_1659542d (posted within 7 days)
[2026-01-13T07:41:57.787Z] [BOT] ⏭️  Skipping duplicate: JID_b606c14e (posted within 7 days)
[2026-01-13T07:41:57.788Z] [BOT] ⏭️  Skipping duplicate: JID_df9e0885 (posted within 7 days)
⏭️  Skipping duplicate: JID_79b59292 (posted within 7 days)
⏭️  Skipping duplicate: JID_eabefd27-development_4948673-2 (posted within 7 days)
[2026-01-13T07:41:57.902Z] [BOT] ✅ Loaded pending queue: 2698 total (2678 pending, 20 enriched, 0 posted)
[2026-01-13T07:41:58.066Z] [BOT] ✅ Saved pending queue: 2698 total (2678 pending, 10 enriched, 10 posted)
[2026-01-13T07:41:58.066Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T07:41:58.118Z] [BOT] 📂 Loaded 2985 existing routing entries
[2026-01-13T07:41:58.176Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2995
[2026-01-13T07:41:58.176Z] [BOT] Timestamp: 2026-01-13T07:41:58.163Z
[2026-01-13T07:41:58.177Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T07:41:58.177Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-13T07:41:58.177Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
[2026-01-13T07:41:58.177Z] [BOT] 1. #🌉・san-francisco: 6 posts
     2. #💻・tech-jobs: 5 posts
     3. #💻・remote-usa: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #💲・sales-jobs: 2 posts
[2026-01-13T07:41:58.177Z] [BOT] [STATS] Channel stats saved
[2026-01-13T07:42:00.202Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2691) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*