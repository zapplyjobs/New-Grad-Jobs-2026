# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T21:24:43.546Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T21:23:58.689Z] ========================================
[2025-12-18T21:23:58.691Z] Discord Bot Execution Log
[2025-12-18T21:23:58.691Z] Environment: GitHub Actions
[2025-12-18T21:23:58.691Z] Node Version: v20.19.6
[2025-12-18T21:23:58.691Z] ========================================
[2025-12-18T21:23:58.691Z] Environment Variables Check:
[2025-12-18T21:23:58.691Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T21:23:58.691Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T21:23:58.691Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T21:23:58.691Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T21:23:58.691Z] 
Multi-Channel Configuration:
[2025-12-18T21:23:58.692Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T21:23:58.692Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T21:23:58.692Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T21:23:58.692Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T21:23:58.692Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T21:23:58.692Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T21:23:58.692Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T21:23:58.692Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T21:23:58.692Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T21:23:58.692Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T21:23:58.692Z] 
Data Files Check:
[2025-12-18T21:23:58.693Z] .github/data/new_jobs.json: ✅ Exists (10 items, 34242 bytes)
[2025-12-18T21:23:58.696Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 337107 bytes)
[2025-12-18T21:23:58.696Z] 
========================================
[2025-12-18T21:23:58.696Z] Starting Enhanced Discord Bot...
[2025-12-18T21:23:58.696Z] ========================================
[2025-12-18T21:23:59.225Z] [BOT] ✅ Loaded V2 database: 555 jobs
[2025-12-18T21:23:59.904Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T21:23:59.904Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T21:23:59.904Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T21:23:59.905Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T21:23:59.959Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T21:24:00.016Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 100
[2025-12-18T21:24:00.018Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T21:24:00.019Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T21:24:00.019Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T21:24:00.020Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-18T21:24:00.020Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
[2025-12-18T21:24:00.020Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T21:24:00.025Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-18T21:24:00.025Z] [BOT] 📍 [ROUTING] "Staff or Sr. Staff Environmental Engineer - Geologist - Or Scientist" @ ORG_77d789fe Consultants
[2025-12-18T21:24:00.026Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T21:24:00.043Z] [BOT ERROR] (node:2972) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T21:24:00.266Z] [BOT] ✅ Created forum post: 🏢 Staff or Sr. Staff Environmental Engineer - Geologist - Or Scientist @ ORG_77d789fe Consultants in #💻・tech-jobs
  ✅ Industry: Staff or Sr. Staff Environmental Engineer - Geologist - Or Scientist @ ORG_77d789fe Consultants
[2025-12-18T21:24:01.946Z] [BOT] ✅ Created forum post: 🏢 Staff or Sr. Staff Environmental Engineer - Geologist - Or Scientist @ ORG_77d789fe Consultants in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T21:24:03.448Z] [BOT] 💾 Marked as posted: Staff or Sr. Staff Environmental Engineer - Geologist - Or Scientist @ ORG_77d789fe Consultants (instance #1)
[2025-12-18T21:24:03.448Z] [BOT] 💾 BEFORE ARCHIVING: 556 jobs in database
[2025-12-18T21:24:03.449Z] [BOT] ✅ No jobs to archive (all 556 jobs within 7-day window)
[2025-12-18T21:24:03.458Z] [BOT] 💾 Saved posted_jobs.json: 556 active jobs
[2025-12-18T21:24:03.458Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:24:03.459Z] [BOT] 📍 [ROUTING] "Software Engineer - Schemas & Object Framework" @ ORG_c4edd50eing
[2025-12-18T21:24:03.459Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T21:24:03.651Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Schemas & Object Framework @ ORG_c4edd50eing in #💻・tech-jobs
[2025-12-18T21:24:03.651Z] [BOT] ✅ Industry: Software Engineer - Schemas & Object Framework @ ORG_c4edd50eing
[2025-12-18T21:24:05.333Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Schemas & Object Framework @ ORG_c4edd50eing in #🌉・san-francisco
[2025-12-18T21:24:05.333Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-18T21:24:06.835Z] [BOT] 💾 Marked as posted: Software Engineer - Schemas & Object Framework @ ORG_c4edd50eing (instance #1)
[2025-12-18T21:24:06.835Z] [BOT] 💾 BEFORE ARCHIVING: 557 jobs in database
[2025-12-18T21:24:06.835Z] [BOT] ✅ No jobs to archive (all 557 jobs within 7-day window)
[2025-12-18T21:24:06.840Z] [BOT] 💾 Saved posted_jobs.json: 557 active jobs
[2025-12-18T21:24:06.841Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:24:06.841Z] [BOT] 📍 [ROUTING] "Graduate Geoscientist" @ ORG_65eedb45
[2025-12-18T21:24:06.841Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T21:24:07.065Z] [BOT] ✅ Created forum post: 🏢 Graduate Geoscientist @ ORG_65eedb45 in #💻・tech-jobs
  ✅ Industry: Graduate Geoscientist @ ORG_65eedb45
[2025-12-18T21:24:08.880Z] [BOT] ✅ Created forum post: 🏢 Graduate Geoscientist @ ORG_65eedb45 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T21:24:10.382Z] [BOT] 💾 Marked as posted: Graduate Geoscientist @ ORG_65eedb45 (instance #1)
[2025-12-18T21:24:10.382Z] [BOT] 💾 BEFORE ARCHIVING: 558 jobs in database
[2025-12-18T21:24:10.383Z] [BOT] ✅ No jobs to archive (all 558 jobs within 7-day window)
[2025-12-18T21:24:10.388Z] [BOT] 💾 Saved posted_jobs.json: 558 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:24:10.388Z] [BOT] 📍 [ROUTING] "Forward Deployed Engineer – New Grad - 2026" @ ORG_1111d586ino Data Lab
[2025-12-18T21:24:10.389Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T21:24:10.634Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Engineer – New Grad - 2026 @ ORG_1111d586ino Data Lab in #💻・tech-jobs
  ✅ Industry: Forward Deployed Engineer – New Grad - 2026 @ ORG_1111d586ino Data Lab
[2025-12-18T21:24:12.334Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Engineer – New Grad - 2026 @ ORG_1111d586ino Data Lab in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-18T21:24:13.834Z] [BOT] 💾 Marked as posted: Forward Deployed Engineer – New Grad - 2026 @ ORG_1111d586ino Data Lab (instance #1)
[2025-12-18T21:24:13.834Z] [BOT] 💾 BEFORE ARCHIVING: 559 jobs in database
[2025-12-18T21:24:13.835Z] [BOT] ✅ No jobs to archive (all 559 jobs within 7-day window)
[2025-12-18T21:24:13.839Z] [BOT] 💾 Saved posted_jobs.json: 559 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:24:13.839Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd" @ ORG_08c9a13c
[2025-12-18T21:24:13.839Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T21:24:14.098Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c in #💻・tech-jobs
[2025-12-18T21:24:14.098Z] [BOT] ✅ Industry: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c
[2025-12-18T21:24:15.776Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-18T21:24:15.776Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-18T21:24:17.276Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c (instance #1)
[2025-12-18T21:24:17.277Z] [BOT] 💾 BEFORE ARCHIVING: 560 jobs in database
[2025-12-18T21:24:17.277Z] [BOT] ✅ No jobs to archive (all 560 jobs within 7-day window)
[2025-12-18T21:24:17.283Z] [BOT] 💾 Saved posted_jobs.json: 560 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:24:17.283Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c (instance #1)
[2025-12-18T21:24:17.283Z] [BOT] 💾 BEFORE ARCHIVING: 561 jobs in database
[2025-12-18T21:24:17.284Z] [BOT] ✅ No jobs to archive (all 561 jobs within 7-day window)
[2025-12-18T21:24:17.289Z] [BOT] 💾 Saved posted_jobs.json: 561 active jobs
[2025-12-18T21:24:17.289Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:24:20.289Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-18T21:24:20.290Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Risk Data Mining" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T21:24:20.633Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Risk Data Mining @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Risk Data Mining @ ORG_1bb6fcfb
[2025-12-18T21:24:22.606Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Risk Data Mining @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-18T21:24:22.606Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-18T21:24:24.107Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Risk Data Mining @ ORG_1bb6fcfb (instance #1)
[2025-12-18T21:24:24.108Z] [BOT] 💾 BEFORE ARCHIVING: 562 jobs in database
[2025-12-18T21:24:24.108Z] [BOT] ✅ No jobs to archive (all 562 jobs within 7-day window)
[2025-12-18T21:24:24.114Z] [BOT] 💾 Saved posted_jobs.json: 562 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:24:24.115Z] [BOT] 📍 [ROUTING] "Postdoc – Machine Learning" @ ORG_13e36faa Lab
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T21:24:24.115Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T21:24:24.333Z] [BOT] ✅ Created forum post: 🏢 Postdoc – Machine Learning @ ORG_13e36faa Lab in #🤖・ai-jobs
[2025-12-18T21:24:24.333Z] [BOT] ✅ Industry: Postdoc – Machine Learning @ ORG_13e36faa Lab
[2025-12-18T21:24:26.107Z] [BOT] ✅ Created forum post: 🏢 Postdoc – Machine Learning @ ORG_13e36faa Lab in #🗽・new-york
[2025-12-18T21:24:26.108Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-18T21:24:27.609Z] [BOT] 💾 Marked as posted: Postdoc – Machine Learning @ ORG_13e36faa Lab (instance #1)
[2025-12-18T21:24:27.609Z] [BOT] 💾 BEFORE ARCHIVING: 563 jobs in database
[2025-12-18T21:24:27.610Z] [BOT] ✅ No jobs to archive (all 563 jobs within 7-day window)
[2025-12-18T21:24:27.616Z] [BOT] 💾 Saved posted_jobs.json: 563 active jobs
[2025-12-18T21:24:27.616Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:24:30.616Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2025-12-18T21:24:30.616Z] [BOT] 📍 [ROUTING] "FAST Configuration Analyst" @ ORG_da05efaa
[2025-12-18T21:24:30.616Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-18T21:24:30.887Z] [BOT] ✅ Created forum post: 🏢 FAST Configuration Analyst @ ORG_da05efaa in #📣・marketing-jobs
[2025-12-18T21:24:30.888Z] [BOT] ✅ Industry: FAST Configuration Analyst @ ORG_da05efaa
[2025-12-18T21:24:32.565Z] [BOT] ✅ Created forum post: 🏢 FAST Configuration Analyst @ ORG_da05efaa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T21:24:34.066Z] [BOT] 💾 Marked as posted: FAST Configuration Analyst @ ORG_da05efaa (instance #1)
[2025-12-18T21:24:34.066Z] [BOT] 💾 BEFORE ARCHIVING: 564 jobs in database
[2025-12-18T21:24:34.066Z] [BOT] ✅ No jobs to archive (all 564 jobs within 7-day window)
[2025-12-18T21:24:34.073Z] [BOT] 💾 Saved posted_jobs.json: 564 active jobs
[2025-12-18T21:24:34.073Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:24:34.073Z] [BOT] 📍 [ROUTING] "Space Observations Scientist and Organizational Liaison" @ ORG_cfe9ed55
[2025-12-18T21:24:34.073Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-18T21:24:34.356Z] [BOT] ✅ Created forum post: 🏢 Space Observations Scientist and Organizational Liaison @ ORG_cfe9ed55 in #📣・marketing-jobs
[2025-12-18T21:24:34.356Z] [BOT] ✅ Industry: Space Observations Scientist and Organizational Liaison @ ORG_cfe9ed55
[2025-12-18T21:24:36.112Z] [BOT] ✅ Created forum post: 🏢 Space Observations Scientist and Organizational Liaison @ ORG_cfe9ed55 in #💻・remote-usa
[2025-12-18T21:24:36.112Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T21:24:37.613Z] [BOT] 💾 Marked as posted: Space Observations Scientist and Organizational Liaison @ ORG_cfe9ed55 (instance #1)
[2025-12-18T21:24:37.613Z] [BOT] 💾 BEFORE ARCHIVING: 565 jobs in database
[2025-12-18T21:24:37.614Z] [BOT] ✅ No jobs to archive (all 565 jobs within 7-day window)
[2025-12-18T21:24:37.620Z] [BOT] 💾 Saved posted_jobs.json: 565 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:24:40.621Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-18T21:24:40.621Z] [BOT] ⏭️  Skipping duplicate: JID_27e00ea5 (posted within 7 days)
[2025-12-18T21:24:40.621Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_0e378563 (posted within 7 days)
[2025-12-18T21:24:40.621Z] [BOT] ⏭️  Skipping duplicate: JID_32e70c42 (posted within 7 days)
⏭️  Skipping duplicate: JID_5cecdc45 (posted within 7 days)
[2025-12-18T21:24:40.621Z] [BOT] ⏭️  Skipping duplicate: JID_105a5de9 (posted within 7 days)
[2025-12-18T21:24:40.622Z] [BOT] ⏭️  Skipping duplicate: JID_52501e3f (posted within 7 days)
[2025-12-18T21:24:40.622Z] [BOT] ⏭️  Skipping duplicate: JID_06b62e1e (posted within 7 days)
[2025-12-18T21:24:40.622Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_ce0b3f57-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_3160a2f0-learning_jr102052 (posted within 7 days)
[2025-12-18T21:24:40.625Z] [BOT] ✅ Loaded pending queue: 417 total (397 pending, 20 enriched, 0 posted)
[2025-12-18T21:24:40.631Z] [BOT] ✅ Saved pending queue: 417 total (397 pending, 11 enriched, 9 posted)
[2025-12-18T21:24:40.632Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T21:24:40.673Z] [BOT] 📂 Loaded 538 existing routing entries
[2025-12-18T21:24:40.714Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-18T21:24:40.715Z] [BOT] Total entries: 547
   Timestamp: 2025-12-18T21:24:40.711Z
[2025-12-18T21:24:40.715Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
[2025-12-18T21:24:40.715Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2025-12-18T21:24:40.715Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-18T21:24:40.715Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2025-12-18T21:24:40.716Z] [BOT] 2. #💻・remote-usa: 4 posts
     3. #🌉・san-francisco: 3 posts
     4. #🗽・new-york: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2025-12-18T21:24:40.716Z] [BOT] [STATS] Channel stats saved
[2025-12-18T21:24:42.726Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2972) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*