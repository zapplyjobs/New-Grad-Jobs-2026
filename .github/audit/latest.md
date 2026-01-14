# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T05:55:57.302Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T05:55:00.327Z] ========================================
[2026-01-14T05:55:00.330Z] Discord Bot Execution Log
[2026-01-14T05:55:00.330Z] Environment: GitHub Actions
[2026-01-14T05:55:00.330Z] Node Version: v20.19.6
[2026-01-14T05:55:00.330Z] ========================================
[2026-01-14T05:55:00.330Z] Environment Variables Check:
[2026-01-14T05:55:00.330Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T05:55:00.330Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T05:55:00.330Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T05:55:00.330Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T05:55:00.330Z] 
Multi-Channel Configuration:
[2026-01-14T05:55:00.330Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T05:55:00.331Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T05:55:00.331Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T05:55:00.331Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T05:55:00.331Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T05:55:00.331Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T05:55:00.331Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T05:55:00.331Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T05:55:00.331Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T05:55:00.331Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T05:55:00.331Z] 
Data Files Check:
[2026-01-14T05:55:00.332Z] .github/data/new_jobs.json: ✅ Exists (10 items, 92054 bytes)
[2026-01-14T05:55:00.337Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 651782 bytes)
[2026-01-14T05:55:00.337Z] 
========================================
[2026-01-14T05:55:00.337Z] Starting Enhanced Discord Bot...
[2026-01-14T05:55:00.337Z] ========================================
[2026-01-14T05:55:00.857Z] [BOT] ✅ Loaded V2 database: 1235 jobs
[2026-01-14T05:55:01.355Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T05:55:01.355Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T05:55:01.355Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T05:55:01.467Z] [BOT] ✅ Loaded pending queue: 2737 total (2717 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Principal Mission Assurance Engineer at Northrop Grumman
[2026-01-14T05:55:01.469Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T05:55:01.469Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T05:55:01.470Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T05:55:01.471Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T05:55:01.471Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T05:55:01.475Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-14T05:55:01.476Z] [BOT] 📍 [ROUTING] "Principal Mission Assurance Engineer" @ ORG_f3f2248d Grumman
[2026-01-14T05:55:01.476Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:55:01.493Z] [BOT ERROR] (node:3750) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T05:55:01.679Z] [BOT] ✅ Created forum post: 🏢 Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-14T05:55:01.679Z] [BOT] ✅ Industry: Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman
[2026-01-14T05:55:03.308Z] [BOT] ✅ Created forum post: 🏢 Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman in #💻・remote-usa
[2026-01-14T05:55:03.308Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T05:55:04.810Z] [BOT] 💾 Marked as posted: Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman (instance #1)
[2026-01-14T05:55:04.810Z] [BOT] 💾 BEFORE ARCHIVING: 1236 jobs in database
[2026-01-14T05:55:04.811Z] [BOT] ✅ No jobs to archive (all 1236 jobs within 7-day window)
[2026-01-14T05:55:04.823Z] [BOT] 💾 Saved posted_jobs.json: 1236 active jobs
[2026-01-14T05:55:04.823Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:55:04.823Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_47ec0177 Mutual
   Category: TECH (matched: "software")
[2026-01-14T05:55:04.823Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:55:04.979Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_47ec0177 Mutual in #💻・tech-jobs
[2026-01-14T05:55:04.980Z] [BOT] ✅ Industry: Associate Software Developer @ ORG_47ec0177 Mutual
[2026-01-14T05:55:06.611Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_47ec0177 Mutual in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-14T05:55:08.112Z] [BOT] 💾 Marked as posted: Associate Software Developer @ ORG_47ec0177 Mutual (instance #1)
[2026-01-14T05:55:08.112Z] [BOT] 💾 BEFORE ARCHIVING: 1237 jobs in database
[2026-01-14T05:55:08.113Z] [BOT] ✅ No jobs to archive (all 1237 jobs within 7-day window)
[2026-01-14T05:55:08.121Z] [BOT] 💾 Saved posted_jobs.json: 1237 active jobs
[2026-01-14T05:55:08.121Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:55:11.122Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-14T05:55:11.123Z] [BOT] 📍 [ROUTING] "Senior Financial Reporting and Technical Accountant" @ discord
[2026-01-14T05:55:11.123Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-14T05:55:11.413Z] [BOT] ✅ Created forum post: 🏢 Senior Financial Reporting and Technical Accountant @ discord in #💰・finance-jobs
[2026-01-14T05:55:11.413Z] [BOT] ✅ Industry: Senior Financial Reporting and Technical Accountant @ discord
[2026-01-14T05:55:13.222Z] [BOT] ✅ Created forum post: 🏢 Senior Financial Reporting and Technical Accountant @ discord in #🌉・san-francisco
[2026-01-14T05:55:13.222Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T05:55:14.722Z] [BOT] 💾 Marked as posted: Senior Financial Reporting and Technical Accountant @ discord (instance #1)
[2026-01-14T05:55:14.722Z] [BOT] 💾 BEFORE ARCHIVING: 1238 jobs in database
[2026-01-14T05:55:14.724Z] [BOT] ✅ No jobs to archive (all 1238 jobs within 7-day window)
[2026-01-14T05:55:14.733Z] [BOT] 💾 Saved posted_jobs.json: 1238 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:55:17.734Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-14T05:55:17.735Z] [BOT] 📍 [ROUTING] "Director of Sales, Emerging & Scaled (New Business)" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T05:55:17.930Z] [BOT] ✅ Created forum post: 🏢 Director of Sales, Emerging & Scaled (New Business) @ spotify in #🤖・ai-jobs
  ✅ Industry: Director of Sales, Emerging & Scaled (New Business) @ spotify
[2026-01-14T05:55:19.753Z] [BOT] ✅ Created forum post: 🏢 Director of Sales, Emerging & Scaled (New Business) @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T05:55:21.254Z] [BOT] 💾 Marked as posted: Director of Sales, Emerging & Scaled (New Business) @ spotify (instance #1)
[2026-01-14T05:55:21.254Z] [BOT] 💾 BEFORE ARCHIVING: 1239 jobs in database
[2026-01-14T05:55:21.255Z] [BOT] ✅ No jobs to archive (all 1239 jobs within 7-day window)
[2026-01-14T05:55:21.265Z] [BOT] 💾 Saved posted_jobs.json: 1239 active jobs
[2026-01-14T05:55:21.265Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:55:21.266Z] [BOT] 📍 [ROUTING] "Enterprise Support Engineer, AMER" @ retool
   Category: AI (matched: "AI specialization")
[2026-01-14T05:55:21.266Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T05:55:21.452Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Engineer, AMER @ retool in #🤖・ai-jobs
  ✅ Industry: Enterprise Support Engineer, AMER @ retool
[2026-01-14T05:55:23.262Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Engineer, AMER @ retool in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T05:55:24.764Z] [BOT] 💾 Marked as posted: Enterprise Support Engineer, AMER @ retool (instance #1)
[2026-01-14T05:55:24.764Z] [BOT] 💾 BEFORE ARCHIVING: 1240 jobs in database
[2026-01-14T05:55:24.765Z] [BOT] ✅ No jobs to archive (all 1240 jobs within 7-day window)
[2026-01-14T05:55:24.774Z] [BOT] 💾 Saved posted_jobs.json: 1240 active jobs
[2026-01-14T05:55:24.774Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:55:24.774Z] [BOT] 📍 [ROUTING] "UX Researcher" @ retool
   Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T05:55:24.918Z] [BOT] ✅ Created forum post: 🏢 UX Researcher @ retool in #🤖・ai-jobs
  ✅ Industry: UX Researcher @ retool
[2026-01-14T05:55:26.752Z] [BOT] ✅ Created forum post: 🏢 UX Researcher @ retool in #🌉・san-francisco
[2026-01-14T05:55:26.753Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T05:55:28.253Z] [BOT] 💾 Marked as posted: UX Researcher @ retool (instance #1)
[2026-01-14T05:55:28.253Z] [BOT] 💾 BEFORE ARCHIVING: 1241 jobs in database
[2026-01-14T05:55:28.254Z] [BOT] ✅ No jobs to archive (all 1241 jobs within 7-day window)
[2026-01-14T05:55:28.262Z] [BOT] 💾 Saved posted_jobs.json: 1241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:55:31.263Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-14T05:55:31.263Z] [BOT] 📍 [ROUTING] "Manager, Global Accounts Receivable" @ discord
[2026-01-14T05:55:31.263Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T05:55:31.497Z] [BOT] ✅ Created forum post: 🏢 Manager, Global Accounts Receivable @ discord in #💲・sales-jobs
[2026-01-14T05:55:31.498Z] [BOT] ✅ Industry: Manager, Global Accounts Receivable @ discord
[2026-01-14T05:55:33.187Z] [BOT] ✅ Created forum post: 🏢 Manager, Global Accounts Receivable @ discord in #🌉・san-francisco
[2026-01-14T05:55:33.187Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T05:55:34.689Z] [BOT] 💾 Marked as posted: Manager, Global Accounts Receivable @ discord (instance #1)
[2026-01-14T05:55:34.689Z] [BOT] 💾 BEFORE ARCHIVING: 1242 jobs in database
[2026-01-14T05:55:34.690Z] [BOT] ✅ No jobs to archive (all 1242 jobs within 7-day window)
[2026-01-14T05:55:34.700Z] [BOT] 💾 Saved posted_jobs.json: 1242 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:55:34.700Z] [BOT] 📍 [ROUTING] "Vercel Development Representative, Majors" @ vercel
[2026-01-14T05:55:34.701Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T05:55:34.981Z] [BOT] ✅ Created forum post: 🏢 Vercel Development Representative, Majors @ vercel in #💲・sales-jobs
[2026-01-14T05:55:34.981Z] [BOT] ✅ Industry: Vercel Development Representative, Majors @ vercel
[2026-01-14T05:55:36.785Z] [BOT] ✅ Created forum post: 🏢 Vercel Development Representative, Majors @ vercel in #🌉・san-francisco
[2026-01-14T05:55:36.785Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T05:55:38.287Z] [BOT] 💾 Marked as posted: Vercel Development Representative, Majors @ vercel (instance #1)
[2026-01-14T05:55:38.287Z] [BOT] 💾 BEFORE ARCHIVING: 1243 jobs in database
[2026-01-14T05:55:38.288Z] [BOT] ✅ No jobs to archive (all 1243 jobs within 7-day window)
[2026-01-14T05:55:38.297Z] [BOT] 💾 Saved posted_jobs.json: 1243 active jobs
[2026-01-14T05:55:38.297Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:55:41.298Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T05:55:41.298Z] [BOT] 📍 [ROUTING] "Meter Data Analyst 1" @ ORG_48c95877 Energy
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-14T05:55:41.298Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T05:55:41.487Z] [BOT] ✅ Created forum post: 🏢 Meter Data Analyst 1 @ ORG_48c95877 Energy in #📈・JID_fb739488
  ✅ Industry: Meter Data Analyst 1 @ ORG_48c95877 Energy
[2026-01-14T05:55:43.230Z] [BOT] ✅ Created forum post: 🏢 Meter Data Analyst 1 @ ORG_48c95877 Energy in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T05:55:44.731Z] [BOT] 💾 Marked as posted: Meter Data Analyst 1 @ ORG_48c95877 Energy (instance #1)
[2026-01-14T05:55:44.731Z] [BOT] 💾 BEFORE ARCHIVING: 1244 jobs in database
[2026-01-14T05:55:44.732Z] [BOT] ✅ No jobs to archive (all 1244 jobs within 7-day window)
[2026-01-14T05:55:44.741Z] [BOT] 💾 Saved posted_jobs.json: 1244 active jobs
[2026-01-14T05:55:44.741Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:55:47.741Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T05:55:47.742Z] [BOT] 📍 [ROUTING] "Metering Specialist 1" @ ORG_b4d76491
[2026-01-14T05:55:47.742Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T05:55:47.939Z] [BOT] ✅ Created forum post: 🏢 Metering Specialist 1 @ ORG_b4d76491 in #📣・marketing-jobs
[2026-01-14T05:55:47.940Z] [BOT] ✅ Industry: Metering Specialist 1 @ ORG_b4d76491
[2026-01-14T05:55:49.690Z] [BOT] ✅ Created forum post: 🏢 Metering Specialist 1 @ ORG_b4d76491 in #💻・remote-usa
[2026-01-14T05:55:49.690Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T05:55:51.191Z] [BOT] 💾 Marked as posted: Metering Specialist 1 @ ORG_b4d76491 (instance #1)
[2026-01-14T05:55:51.191Z] [BOT] 💾 BEFORE ARCHIVING: 1245 jobs in database
[2026-01-14T05:55:51.192Z] [BOT] ✅ No jobs to archive (all 1245 jobs within 7-day window)
[2026-01-14T05:55:51.202Z] [BOT] 💾 Saved posted_jobs.json: 1245 active jobs
[2026-01-14T05:55:51.202Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:55:54.202Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T05:55:54.202Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_62b698da-16584_r10216305 (posted within 7 days)
[2026-01-14T05:55:54.202Z] [BOT] ⏭️  Skipping duplicate: JID_429d49b0-cx_1-job-41204 (posted within 7 days)
[2026-01-14T05:55:54.202Z] [BOT] ⏭️  Skipping duplicate: JID_2c430fc0 (posted within 7 days)
[2026-01-14T05:55:54.203Z] [BOT] ⏭️  Skipping duplicate: JID_9a45918c (posted within 7 days)
[2026-01-14T05:55:54.203Z] [BOT] ⏭️  Skipping duplicate: JID_325a066b (posted within 7 days)
[2026-01-14T05:55:54.203Z] [BOT] ⏭️  Skipping duplicate: JID_dbb558cc-i_jr-9238 (posted within 7 days)
[2026-01-14T05:55:54.203Z] [BOT] ⏭️  Skipping duplicate: JID_4936a540 (posted within 7 days)
[2026-01-14T05:55:54.203Z] [BOT] ⏭️  Skipping duplicate: JID_74470633 (posted within 7 days)
[2026-01-14T05:55:54.203Z] [BOT] ⏭️  Skipping duplicate: JID_46f18007 (posted within 7 days)
[2026-01-14T05:55:54.203Z] [BOT] ⏭️  Skipping duplicate: JID_34a0370d (posted within 7 days)
[2026-01-14T05:55:54.324Z] [BOT] ✅ Loaded pending queue: 2737 total (2717 pending, 20 enriched, 0 posted)
[2026-01-14T05:55:54.502Z] [BOT] ✅ Saved pending queue: 2737 total (2717 pending, 10 enriched, 10 posted)
[2026-01-14T05:55:54.502Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T05:55:54.556Z] [BOT] 📂 Loaded 3355 existing routing entries
[2026-01-14T05:55:54.616Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-14T05:55:54.616Z] [BOT] Total entries: 3365
   Timestamp: 2026-01-14T05:55:54.602Z
[2026-01-14T05:55:54.616Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T05:55:54.617Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T05:55:54.617Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T05:55:54.617Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 10
   Top channels:
     1. #🌉・san-francisco: 4 posts
[2026-01-14T05:55:54.617Z] [BOT] 2. #💻・remote-usa: 3 posts
     3. #🤖・ai-jobs: 3 posts
     4. #💻・tech-jobs: 2 posts
[2026-01-14T05:55:54.617Z] [BOT] 5. #🗽・new-york: 2 posts
[2026-01-14T05:55:54.617Z] [BOT] [STATS] Channel stats saved
[2026-01-14T05:55:56.642Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3750) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*