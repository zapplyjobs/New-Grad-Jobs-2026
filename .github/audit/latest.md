# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T03:57:48.733Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T03:57:04.285Z] ========================================
[2026-01-13T03:57:04.287Z] Discord Bot Execution Log
[2026-01-13T03:57:04.287Z] Environment: GitHub Actions
[2026-01-13T03:57:04.287Z] Node Version: v20.19.6
[2026-01-13T03:57:04.287Z] ========================================
[2026-01-13T03:57:04.287Z] Environment Variables Check:
[2026-01-13T03:57:04.287Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T03:57:04.287Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T03:57:04.287Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T03:57:04.288Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T03:57:04.288Z] 
Multi-Channel Configuration:
[2026-01-13T03:57:04.288Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T03:57:04.288Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T03:57:04.288Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T03:57:04.288Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T03:57:04.288Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T03:57:04.288Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T03:57:04.288Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T03:57:04.288Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T03:57:04.288Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T03:57:04.288Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T03:57:04.288Z] 
Data Files Check:
[2026-01-13T03:57:04.289Z] .github/data/new_jobs.json: ✅ Exists (10 items, 103322 bytes)
[2026-01-13T03:57:04.292Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 354296 bytes)
[2026-01-13T03:57:04.292Z] 
========================================
[2026-01-13T03:57:04.292Z] Starting Enhanced Discord Bot...
[2026-01-13T03:57:04.292Z] ========================================
[2026-01-13T03:57:04.804Z] [BOT] ✅ Loaded V2 database: 670 jobs
[2026-01-13T03:57:05.205Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T03:57:05.206Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T03:57:05.206Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T03:57:05.327Z] [BOT] ✅ Loaded pending queue: 2699 total (2679 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Regulatory Operations Specialist at spotify
[2026-01-13T03:57:05.328Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T03:57:05.328Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T03:57:05.330Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
📋 After multi-location grouping: 11 unique jobs to post
   (9 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-01-13T03:57:05.330Z] [BOT] - Account Development Representative Intern @ samsara: phoenix, arizona, atlanta
   - Account Development Representative (New Grad) @ samsara: atlanta, phoenix, arizona
   - Account Executive, Commercial @ samsara: columbus, denver, los angeles, salt lake, san diego, seattle, boston, atlanta
[2026-01-13T03:57:05.330Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T03:57:05.337Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-13T03:57:05.337Z] [BOT] 📍 [ROUTING] "Regulatory Operations Specialist" @ spotify
[2026-01-13T03:57:05.337Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T03:57:05.344Z] [BOT ERROR] (node:2368) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T03:57:05.490Z] [BOT] ✅ Created forum post: 🏢 Regulatory Operations Specialist @ spotify in #🤖・ai-jobs
[2026-01-13T03:57:05.490Z] [BOT] ✅ Industry: Regulatory Operations Specialist @ spotify
[2026-01-13T03:57:07.327Z] [BOT] ✅ Created forum post: 🏢 Regulatory Operations Specialist @ spotify in #🗽・new-york
[2026-01-13T03:57:07.327Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T03:57:08.828Z] [BOT] 💾 Marked as posted: Regulatory Operations Specialist @ spotify (instance #1)
[2026-01-13T03:57:08.828Z] [BOT] 💾 BEFORE ARCHIVING: 671 jobs in database
[2026-01-13T03:57:08.829Z] [BOT] ✅ No jobs to archive (all 671 jobs within 7-day window)
[2026-01-13T03:57:08.838Z] [BOT] 💾 Saved posted_jobs.json: 671 active jobs
[2026-01-13T03:57:08.838Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:57:08.839Z] [BOT] 📍 [ROUTING] "Automotive Mobile ADAS Technician" @ ORG_b344d80e Boyd Group
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T03:57:09.107Z] [BOT] ✅ Created forum post: 🏢 Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group in #🤖・ai-jobs
[2026-01-13T03:57:09.107Z] [BOT] ✅ Industry: Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group
[2026-01-13T03:57:10.810Z] [BOT] ✅ Created forum post: 🏢 Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T03:57:12.311Z] [BOT] 💾 Marked as posted: Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group (instance #1)
[2026-01-13T03:57:12.311Z] [BOT] 💾 BEFORE ARCHIVING: 672 jobs in database
[2026-01-13T03:57:12.312Z] [BOT] ✅ No jobs to archive (all 672 jobs within 7-day window)
[2026-01-13T03:57:12.318Z] [BOT] 💾 Saved posted_jobs.json: 672 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T03:57:12.318Z] [BOT] 📍 [ROUTING] "Entry/Mid Software Developer" @ ORG_1954b120
[2026-01-13T03:57:12.318Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T03:57:12.318Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T03:57:12.454Z] [BOT] ✅ Created forum post: 🏢 Entry/Mid Software Developer @ ORG_1954b120 in #🤖・ai-jobs
  ✅ Industry: Entry/Mid Software Developer @ ORG_1954b120
[2026-01-13T03:57:14.097Z] [BOT] ✅ Created forum post: 🏢 Entry/Mid Software Developer @ ORG_1954b120 in #💻・remote-usa
[2026-01-13T03:57:14.097Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T03:57:15.598Z] [BOT] 💾 Marked as posted: Entry/Mid Software Developer @ ORG_1954b120 (instance #1)
[2026-01-13T03:57:15.598Z] [BOT] 💾 BEFORE ARCHIVING: 673 jobs in database
[2026-01-13T03:57:15.599Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T03:57:15.600Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T03:57:15.600Z] [BOT] ✅ Archiving complete: 1 archived, 672 active
[2026-01-13T03:57:15.606Z] [BOT] 💾 Saved posted_jobs.json: 672 active jobs
[2026-01-13T03:57:15.606Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:57:18.607Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-13T03:57:18.607Z] [BOT] 📍 [ROUTING] "Global Enterprise Account Executive" @ verkada
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T03:57:18.937Z] [BOT] ✅ Created forum post: 🏢 Global Enterprise Account Executive @ verkada in #💲・sales-jobs
[2026-01-13T03:57:18.937Z] [BOT] ✅ Industry: Global Enterprise Account Executive @ verkada
[2026-01-13T03:57:20.439Z] [BOT] 💾 Marked as posted: Global Enterprise Account Executive @ verkada (instance #1)
[2026-01-13T03:57:20.439Z] [BOT] 💾 BEFORE ARCHIVING: 673 jobs in database
[2026-01-13T03:57:20.440Z] [BOT] ✅ No jobs to archive (all 673 jobs within 7-day window)
[2026-01-13T03:57:20.445Z] [BOT] 💾 Saved posted_jobs.json: 673 active jobs
[2026-01-13T03:57:20.445Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:57:20.446Z] [BOT] 📍 [ROUTING] "Account Development Representative Intern" @ samsara
[2026-01-13T03:57:20.446Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T03:57:20.943Z] [BOT] ✅ Created forum post: 🏢 Account Development Representative Intern @ samsara in #💲・sales-jobs
[2026-01-13T03:57:20.943Z] [BOT] ✅ Industry: Account Development Representative Intern @ samsara
[2026-01-13T03:57:22.445Z] [BOT] 💾 Marked as posted: Account Development Representative Intern @ samsara (instance #1)
[2026-01-13T03:57:22.445Z] [BOT] 💾 BEFORE ARCHIVING: 674 jobs in database
[2026-01-13T03:57:22.447Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (2 total in archive)
[2026-01-13T03:57:22.447Z] [BOT] ✅ Archiving complete: 1 archived, 673 active
[2026-01-13T03:57:22.452Z] [BOT] 💾 Saved posted_jobs.json: 673 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T03:57:22.452Z] [BOT] 💾 Marked as posted: Account Development Representative Intern  @ samsara (instance #1)
💾 BEFORE ARCHIVING: 674 jobs in database
[2026-01-13T03:57:22.453Z] [BOT] ✅ No jobs to archive (all 674 jobs within 7-day window)
[2026-01-13T03:57:22.458Z] [BOT] 💾 Saved posted_jobs.json: 674 active jobs
[2026-01-13T03:57:22.458Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:57:22.458Z] [BOT] 📍 [ROUTING] "Account Development Representative (New Grad)" @ samsara
[2026-01-13T03:57:22.459Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T03:57:22.816Z] [BOT] ✅ Created forum post: 🏢 Account Development Representative (New Grad) @ samsara in #💲・sales-jobs
[2026-01-13T03:57:22.816Z] [BOT] ✅ Industry: Account Development Representative (New Grad) @ samsara
[2026-01-13T03:57:24.318Z] [BOT] 💾 Marked as posted: Account Development Representative (New Grad) @ samsara (instance #1)
[2026-01-13T03:57:24.318Z] [BOT] 💾 BEFORE ARCHIVING: 675 jobs in database
[2026-01-13T03:57:24.319Z] [BOT] ✅ No jobs to archive (all 675 jobs within 7-day window)
[2026-01-13T03:57:24.324Z] [BOT] 💾 Saved posted_jobs.json: 675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T03:57:24.324Z] [BOT] 💾 Marked as posted: Account Development Representative (New Grad)  @ samsara (instance #1)
[2026-01-13T03:57:24.324Z] [BOT] 💾 BEFORE ARCHIVING: 676 jobs in database
[2026-01-13T03:57:24.325Z] [BOT] ✅ No jobs to archive (all 676 jobs within 7-day window)
[2026-01-13T03:57:24.329Z] [BOT] 💾 Saved posted_jobs.json: 676 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T03:57:27.330Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-13T03:57:27.330Z] [BOT] 📍 [ROUTING] "Materials Lab Technician" @ ORG_2fa25ffb
[2026-01-13T03:57:27.330Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T03:57:27.495Z] [BOT] ✅ Created forum post: 🏢 Materials Lab Technician @ ORG_2fa25ffb in #📣・marketing-jobs
  ✅ Industry: Materials Lab Technician @ ORG_2fa25ffb
[2026-01-13T03:57:29.151Z] [BOT] ✅ Created forum post: 🏢 Materials Lab Technician @ ORG_2fa25ffb in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-13T03:57:30.651Z] [BOT] 💾 Marked as posted: Materials Lab Technician @ ORG_2fa25ffb (instance #1)
[2026-01-13T03:57:30.651Z] [BOT] 💾 BEFORE ARCHIVING: 677 jobs in database
[2026-01-13T03:57:30.652Z] [BOT] ✅ No jobs to archive (all 677 jobs within 7-day window)
[2026-01-13T03:57:30.657Z] [BOT] 💾 Saved posted_jobs.json: 677 active jobs
[2026-01-13T03:57:30.657Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:57:33.657Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-13T03:57:33.657Z] [BOT] 📍 [ROUTING] "Associate Software Support - Java" @ DuCharme, McMillen & Associates
[2026-01-13T03:57:33.657Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T03:57:33.807Z] [BOT] ✅ Created forum post: 🏢 Associate Software Support - Java @ DuCharme, McMillen & Associates in #💻・tech-jobs
  ✅ Industry: Associate Software Support - Java @ DuCharme, McMillen & Associates
[2026-01-13T03:57:35.587Z] [BOT] ✅ Created forum post: 🏢 Associate Software Support - Java @ DuCharme, McMillen & Associates in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T03:57:37.089Z] [BOT] 💾 Marked as posted: Associate Software Support - Java @ DuCharme, McMillen & Associates (instance #1)
[2026-01-13T03:57:37.089Z] [BOT] 💾 BEFORE ARCHIVING: 678 jobs in database
[2026-01-13T03:57:37.089Z] [BOT] ✅ No jobs to archive (all 678 jobs within 7-day window)
[2026-01-13T03:57:37.095Z] [BOT] 💾 Saved posted_jobs.json: 678 active jobs
[2026-01-13T03:57:37.095Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:57:37.096Z] [BOT] 📍 [ROUTING] "Software Engineer: Platform Services" @ supabase
[2026-01-13T03:57:37.096Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T03:57:37.368Z] [BOT] ✅ Created forum post: 🏢 Software Engineer: Platform Services @ supabase in #💻・tech-jobs
[2026-01-13T03:57:37.368Z] [BOT] ✅ Industry: Software Engineer: Platform Services @ supabase
[2026-01-13T03:57:38.869Z] [BOT] 💾 Marked as posted: Software Engineer: Platform Services @ supabase (instance #1)
[2026-01-13T03:57:38.869Z] [BOT] 💾 BEFORE ARCHIVING: 679 jobs in database
[2026-01-13T03:57:38.870Z] [BOT] ✅ No jobs to archive (all 679 jobs within 7-day window)
[2026-01-13T03:57:38.875Z] [BOT] 💾 Saved posted_jobs.json: 679 active jobs
[2026-01-13T03:57:38.876Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:57:38.876Z] [BOT] 📍 [ROUTING] "Content Engineer" @ vercel
[2026-01-13T03:57:38.876Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T03:57:39.007Z] [BOT] ✅ Created forum post: 🏢 Content Engineer @ vercel in #💻・tech-jobs
  ✅ Industry: Content Engineer @ vercel
[2026-01-13T03:57:41.205Z] [BOT] ✅ Created forum post: 🏢 Content Engineer @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T03:57:42.706Z] [BOT] 💾 Marked as posted: Content Engineer @ vercel (instance #1)
[2026-01-13T03:57:42.707Z] [BOT] 💾 BEFORE ARCHIVING: 680 jobs in database
[2026-01-13T03:57:42.707Z] [BOT] ✅ No jobs to archive (all 680 jobs within 7-day window)
[2026-01-13T03:57:42.712Z] [BOT] 💾 Saved posted_jobs.json: 680 active jobs
[2026-01-13T03:57:42.712Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:57:45.713Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T03:57:45.713Z] [BOT] ⏭️  Skipping duplicate: JID_2ad527aa (posted within 7 days)
[2026-01-13T03:57:45.713Z] [BOT] ⏭️  Skipping duplicate: JID_b2bcdce2 (posted within 7 days)
[2026-01-13T03:57:45.713Z] [BOT] ⏭️  Skipping duplicate: JID_a53de753-technician_r055451 (posted within 7 days)
[2026-01-13T03:57:45.714Z] [BOT] ⏭️  Skipping duplicate: JID_6dabd0c4 (posted within 7 days)
[2026-01-13T03:57:45.714Z] [BOT] ⏭️  Skipping duplicate: JID_7f95c4dc-_req293 (posted within 7 days)
[2026-01-13T03:57:45.714Z] [BOT] ⏭️  Skipping duplicate: JID_44ba7e80-developer_320762 (posted within 7 days)
[2026-01-13T03:57:45.714Z] [BOT] ⏭️  Skipping duplicate: JID_3b55c255 (posted within 7 days)
[2026-01-13T03:57:45.714Z] [BOT] ⏭️  Skipping duplicate: JID_101c6abb (posted within 7 days)
[2026-01-13T03:57:45.714Z] [BOT] ⏭️  Skipping duplicate: JID_a7c57fc0 (posted within 7 days)
[2026-01-13T03:57:45.714Z] [BOT] ⏭️  Skipping duplicate: JID_1b0a9383 (posted within 7 days)
[2026-01-13T03:57:45.829Z] [BOT] ✅ Loaded pending queue: 2699 total (2679 pending, 20 enriched, 0 posted)
[2026-01-13T03:57:45.995Z] [BOT] ✅ Saved pending queue: 2699 total (2679 pending, 10 enriched, 10 posted)
[2026-01-13T03:57:45.995Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T03:57:46.045Z] [BOT] 📂 Loaded 2856 existing routing entries
[2026-01-13T03:57:46.099Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T03:57:46.099Z] [BOT] Total entries: 2866
   Timestamp: 2026-01-13T03:57:46.088Z
[2026-01-13T03:57:46.100Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T03:57:46.100Z] [BOT] Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-13T03:57:46.100Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T03:57:46.100Z] [BOT] Last cleanup: Never
[2026-01-13T03:57:46.100Z] [BOT] Total posts: 16
   Channels used: 8
   Top channels:
     1. #🤖・ai-jobs: 3 posts
     2. #💻・remote-usa: 3 posts
[2026-01-13T03:57:46.100Z] [BOT] 3. #💲・sales-jobs: 3 posts
     4. #💻・tech-jobs: 3 posts
     5. #🗽・new-york: 1 posts
[2026-01-13T03:57:46.101Z] [BOT] [STATS] Channel stats saved
[2026-01-13T03:57:48.126Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2368) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*