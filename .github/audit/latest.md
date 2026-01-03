# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T16:52:51.609Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T16:52:07.840Z] ========================================
[2026-01-03T16:52:07.842Z] Discord Bot Execution Log
[2026-01-03T16:52:07.842Z] Environment: GitHub Actions
[2026-01-03T16:52:07.842Z] Node Version: v20.19.6
[2026-01-03T16:52:07.842Z] ========================================
[2026-01-03T16:52:07.842Z] Environment Variables Check:
[2026-01-03T16:52:07.842Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T16:52:07.842Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T16:52:07.842Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T16:52:07.843Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T16:52:07.843Z] 
Multi-Channel Configuration:
[2026-01-03T16:52:07.843Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T16:52:07.843Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T16:52:07.843Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T16:52:07.843Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T16:52:07.843Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T16:52:07.843Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T16:52:07.843Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T16:52:07.843Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T16:52:07.843Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T16:52:07.843Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T16:52:07.843Z] 
Data Files Check:
[2026-01-03T16:52:07.845Z] .github/data/new_jobs.json: ✅ Exists (10 items, 154629 bytes)
[2026-01-03T16:52:07.847Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 322178 bytes)
[2026-01-03T16:52:07.847Z] 
========================================
[2026-01-03T16:52:07.847Z] Starting Enhanced Discord Bot...
[2026-01-03T16:52:07.847Z] ========================================
[2026-01-03T16:52:08.396Z] [BOT] ✅ Loaded V2 database: 623 jobs
[2026-01-03T16:52:08.960Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T16:52:08.961Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T16:52:08.961Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T16:52:08.965Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T16:52:09.035Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T16:52:09.126Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T16:52:09.128Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T16:52:09.128Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T16:52:09.129Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T16:52:09.129Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T16:52:09.129Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T16:52:09.134Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-03T16:52:09.134Z] [BOT] 📍 [ROUTING] "Recruiter, Applied AI" @ anthropic
[2026-01-03T16:52:09.135Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-03T16:52:09.139Z] [BOT ERROR] (node:2353) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T16:52:09.367Z] [BOT] ✅ Created forum post: 🏢 Recruiter, Applied AI @ anthropic in #💻・tech-jobs
[2026-01-03T16:52:09.367Z] [BOT] ✅ Industry: Recruiter, Applied AI @ anthropic
[2026-01-03T16:52:11.150Z] [BOT] ✅ Created forum post: 🏢 Recruiter, Applied AI @ anthropic in #🌉・san-francisco
[2026-01-03T16:52:11.150Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T16:52:12.651Z] [BOT] 💾 Marked as posted: Recruiter, Applied AI @ anthropic (instance #1)
[2026-01-03T16:52:12.651Z] [BOT] 💾 BEFORE ARCHIVING: 624 jobs in database
[2026-01-03T16:52:12.652Z] [BOT] ✅ No jobs to archive (all 624 jobs within 7-day window)
[2026-01-03T16:52:12.660Z] [BOT] 💾 Saved posted_jobs.json: 624 active jobs
[2026-01-03T16:52:12.660Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:52:12.661Z] [BOT] 📍 [ROUTING] "Data Center Hardware Operations Lead" @ anthropic
[2026-01-03T16:52:12.661Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T16:52:12.824Z] [BOT] ✅ Created forum post: 🏢 Data Center Hardware Operations Lead @ anthropic in #💻・tech-jobs
[2026-01-03T16:52:12.824Z] [BOT] ✅ Industry: Data Center Hardware Operations Lead @ anthropic
[2026-01-03T16:52:14.490Z] [BOT] ✅ Created forum post: 🏢 Data Center Hardware Operations Lead @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T16:52:15.992Z] [BOT] 💾 Marked as posted: Data Center Hardware Operations Lead @ anthropic (instance #1)
[2026-01-03T16:52:15.992Z] [BOT] 💾 BEFORE ARCHIVING: 625 jobs in database
[2026-01-03T16:52:15.993Z] [BOT] ✅ No jobs to archive (all 625 jobs within 7-day window)
[2026-01-03T16:52:15.999Z] [BOT] 💾 Saved posted_jobs.json: 625 active jobs
[2026-01-03T16:52:15.999Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:52:16.000Z] [BOT] 📍 [ROUTING] "Database Support Engineer (APAC)" @ supabase
[2026-01-03T16:52:16.000Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T16:52:16.147Z] [BOT] ✅ Created forum post: 🏢 Database Support Engineer (APAC) @ supabase in #💻・tech-jobs
  ✅ Industry: Database Support Engineer (APAC) @ supabase
[2026-01-03T16:52:17.650Z] [BOT] 💾 Marked as posted: Database Support Engineer (APAC) @ supabase (instance #1)
[2026-01-03T16:52:17.650Z] [BOT] 💾 BEFORE ARCHIVING: 626 jobs in database
[2026-01-03T16:52:17.650Z] [BOT] ✅ No jobs to archive (all 626 jobs within 7-day window)
[2026-01-03T16:52:17.655Z] [BOT] 💾 Saved posted_jobs.json: 626 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:52:17.655Z] [BOT] 📍 [ROUTING] "Database Support Engineer (EMEA)" @ supabase
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T16:52:17.882Z] [BOT] ✅ Created forum post: 🏢 Database Support Engineer (EMEA) @ supabase in #💻・tech-jobs
[2026-01-03T16:52:17.883Z] [BOT] ✅ Industry: Database Support Engineer (EMEA) @ supabase
[2026-01-03T16:52:19.383Z] [BOT] 💾 Marked as posted: Database Support Engineer (EMEA) @ supabase (instance #1)
[2026-01-03T16:52:19.384Z] [BOT] 💾 BEFORE ARCHIVING: 627 jobs in database
[2026-01-03T16:52:19.384Z] [BOT] ✅ No jobs to archive (all 627 jobs within 7-day window)
[2026-01-03T16:52:19.389Z] [BOT] 💾 Saved posted_jobs.json: 627 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:52:19.390Z] [BOT] 📍 [ROUTING] "Database Support Engineer (AMER)" @ supabase
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T16:52:19.542Z] [BOT] ✅ Created forum post: 🏢 Database Support Engineer (AMER) @ supabase in #💻・tech-jobs
  ✅ Industry: Database Support Engineer (AMER) @ supabase
[2026-01-03T16:52:21.044Z] [BOT] 💾 Marked as posted: Database Support Engineer (AMER) @ supabase (instance #1)
[2026-01-03T16:52:21.045Z] [BOT] 💾 BEFORE ARCHIVING: 628 jobs in database
[2026-01-03T16:52:21.045Z] [BOT] ✅ No jobs to archive (all 628 jobs within 7-day window)
[2026-01-03T16:52:21.051Z] [BOT] 💾 Saved posted_jobs.json: 628 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:52:24.052Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-03T16:52:24.053Z] [BOT] 📍 [ROUTING] "Finance Variable Compensation Lead" @ anthropic
[2026-01-03T16:52:24.053Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T16:52:24.244Z] [BOT] ✅ Created forum post: 🏢 Finance Variable Compensation Lead @ anthropic in #💲・sales-jobs
  ✅ Industry: Finance Variable Compensation Lead @ anthropic
[2026-01-03T16:52:27.373Z] [BOT] ✅ Created forum post: 🏢 Finance Variable Compensation Lead @ anthropic in #🌉・san-francisco
[2026-01-03T16:52:27.373Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T16:52:28.874Z] [BOT] 💾 Marked as posted: Finance Variable Compensation Lead @ anthropic (instance #1)
[2026-01-03T16:52:28.875Z] [BOT] 💾 BEFORE ARCHIVING: 629 jobs in database
[2026-01-03T16:52:28.875Z] [BOT] ✅ No jobs to archive (all 629 jobs within 7-day window)
[2026-01-03T16:52:28.881Z] [BOT] 💾 Saved posted_jobs.json: 629 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:52:28.882Z] [BOT] 📍 [ROUTING] "Launch Strategy & Operations - Marketing & Comms" @ figma
[2026-01-03T16:52:28.882Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T16:52:29.035Z] [BOT] ✅ Created forum post: 🏢 Launch Strategy & Operations - Marketing & Comms @ figma in #💲・sales-jobs
  ✅ Industry: Launch Strategy & Operations - Marketing & Comms @ figma
[2026-01-03T16:52:30.925Z] [BOT] ✅ Created forum post: 🏢 Launch Strategy & Operations - Marketing & Comms @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T16:52:32.426Z] [BOT] 💾 Marked as posted: Launch Strategy & Operations - Marketing & Comms @ figma (instance #1)
[2026-01-03T16:52:32.427Z] [BOT] 💾 BEFORE ARCHIVING: 630 jobs in database
[2026-01-03T16:52:32.427Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-03T16:52:32.439Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-03T16:52:32.439Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:52:32.439Z] [BOT] 📍 [ROUTING] "Senior Technical Revenue Manager" @ figma
[2026-01-03T16:52:32.440Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T16:52:32.592Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Revenue Manager @ figma in #💲・sales-jobs
  ✅ Industry: Senior Technical Revenue Manager @ figma
[2026-01-03T16:52:34.259Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Revenue Manager @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T16:52:35.760Z] [BOT] 💾 Marked as posted: Senior Technical Revenue Manager @ figma (instance #1)
[2026-01-03T16:52:35.760Z] [BOT] 💾 BEFORE ARCHIVING: 631 jobs in database
[2026-01-03T16:52:35.761Z] [BOT] ✅ No jobs to archive (all 631 jobs within 7-day window)
[2026-01-03T16:52:35.766Z] [BOT] 💾 Saved posted_jobs.json: 631 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:52:35.767Z] [BOT] 📍 [ROUTING] "Administrative Business Partner, Sales and GTM" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-03T16:52:35.767Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T16:52:35.956Z] [BOT] ✅ Created forum post: 🏢 Administrative Business Partner, Sales and GTM @ anthropic in #💲・sales-jobs
  ✅ Industry: Administrative Business Partner, Sales and GTM @ anthropic
[2026-01-03T16:52:37.636Z] [BOT] ✅ Created forum post: 🏢 Administrative Business Partner, Sales and GTM @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T16:52:39.137Z] [BOT] 💾 Marked as posted: Administrative Business Partner, Sales and GTM @ anthropic (instance #1)
[2026-01-03T16:52:39.137Z] [BOT] 💾 BEFORE ARCHIVING: 632 jobs in database
[2026-01-03T16:52:39.137Z] [BOT] ✅ No jobs to archive (all 632 jobs within 7-day window)
[2026-01-03T16:52:39.143Z] [BOT] 💾 Saved posted_jobs.json: 632 active jobs
[2026-01-03T16:52:39.144Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:52:42.144Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T16:52:42.144Z] [BOT] 📍 [ROUTING] "Senior Research Scientist, Reward Models" @ anthropic
[2026-01-03T16:52:42.144Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T16:52:42.574Z] [BOT] ✅ Created forum post: 🏢 Senior Research Scientist, Reward Models @ anthropic in #🤖・ai-jobs
  ✅ Industry: Senior Research Scientist, Reward Models @ anthropic
[2026-01-03T16:52:44.275Z] [BOT] ✅ Created forum post: 🏢 Senior Research Scientist, Reward Models @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T16:52:45.776Z] [BOT] 💾 Marked as posted: Senior Research Scientist, Reward Models @ anthropic (instance #1)
[2026-01-03T16:52:45.777Z] [BOT] 💾 BEFORE ARCHIVING: 633 jobs in database
[2026-01-03T16:52:45.777Z] [BOT] ✅ No jobs to archive (all 633 jobs within 7-day window)
[2026-01-03T16:52:45.783Z] [BOT] 💾 Saved posted_jobs.json: 633 active jobs
[2026-01-03T16:52:45.783Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:52:48.784Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T16:52:48.784Z] [BOT] ⏭️  Skipping duplicate: JID_6f02cdd5 (posted within 7 days)
[2026-01-03T16:52:48.784Z] [BOT] ⏭️  Skipping duplicate: JID_8466d1ec (posted within 7 days)
[2026-01-03T16:52:48.784Z] [BOT] ⏭️  Skipping duplicate: JID_d6dd207d (posted within 7 days)
[2026-01-03T16:52:48.785Z] [BOT] ⏭️  Skipping duplicate: JID_43d6f6bd (posted within 7 days)
[2026-01-03T16:52:48.785Z] [BOT] ⏭️  Skipping duplicate: JID_22cf8397 (posted within 7 days)
[2026-01-03T16:52:48.785Z] [BOT] ⏭️  Skipping duplicate: JID_de199501 (posted within 7 days)
[2026-01-03T16:52:48.785Z] [BOT] ⏭️  Skipping duplicate: JID_010025e8 (posted within 7 days)
[2026-01-03T16:52:48.785Z] [BOT] ⏭️  Skipping duplicate: JID_2c984041 (posted within 7 days)
[2026-01-03T16:52:48.785Z] [BOT] ⏭️  Skipping duplicate: JID_eba04086 (posted within 7 days)
[2026-01-03T16:52:48.785Z] [BOT] ⏭️  Skipping duplicate: JID_11f66bd4 (posted within 7 days)
[2026-01-03T16:52:48.845Z] [BOT] ✅ Loaded pending queue: 666 total (646 pending, 20 enriched, 0 posted)
[2026-01-03T16:52:48.910Z] [BOT] ✅ Saved pending queue: 666 total (646 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T16:52:48.956Z] [BOT] 📂 Loaded 1590 existing routing entries
[2026-01-03T16:52:49.006Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1600
   Timestamp: 2026-01-03T16:52:48.998Z
[2026-01-03T16:52:49.007Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 17
   Successful: 17
   Failed: 0
   Skipped: 0
[2026-01-03T16:52:49.007Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-03T16:52:49.007Z] [BOT] Total posts: 17
   Channels used: 4
   Top channels:
     1. #🌉・san-francisco: 7 posts
     2. #💻・tech-jobs: 5 posts
     3. #💲・sales-jobs: 4 posts
[2026-01-03T16:52:49.007Z] [BOT] 4. #🤖・ai-jobs: 1 posts
[2026-01-03T16:52:49.007Z] [BOT] [STATS] Channel stats saved
[2026-01-03T16:52:51.023Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2353) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*