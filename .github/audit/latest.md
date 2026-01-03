# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T12:26:55.288Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T12:25:57.692Z] ========================================
[2026-01-03T12:25:57.694Z] Discord Bot Execution Log
[2026-01-03T12:25:57.694Z] Environment: GitHub Actions
[2026-01-03T12:25:57.694Z] Node Version: v20.19.6
[2026-01-03T12:25:57.694Z] ========================================
[2026-01-03T12:25:57.694Z] Environment Variables Check:
[2026-01-03T12:25:57.694Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T12:25:57.694Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T12:25:57.694Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T12:25:57.694Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T12:25:57.694Z] 
Multi-Channel Configuration:
[2026-01-03T12:25:57.694Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T12:25:57.695Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T12:25:57.695Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T12:25:57.695Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T12:25:57.695Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T12:25:57.695Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T12:25:57.695Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T12:25:57.695Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T12:25:57.695Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T12:25:57.695Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T12:25:57.695Z] 
Data Files Check:
[2026-01-03T12:25:57.696Z] .github/data/new_jobs.json: ✅ Exists (10 items, 172501 bytes)
[2026-01-03T12:25:57.698Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 239236 bytes)
[2026-01-03T12:25:57.699Z] 
========================================
[2026-01-03T12:25:57.699Z] Starting Enhanced Discord Bot...
[2026-01-03T12:25:57.699Z] ========================================
[2026-01-03T12:25:58.219Z] [BOT] ✅ Loaded V2 database: 453 jobs
[2026-01-03T12:26:00.202Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T12:26:00.202Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T12:26:00.203Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T12:26:00.204Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T12:26:00.271Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T12:26:00.367Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T12:26:00.369Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T12:26:00.369Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T12:26:00.369Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T12:26:00.370Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T12:26:00.370Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T12:26:00.374Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T12:26:00.375Z] [BOT] 📍 [ROUTING] "Security Sales Engineer - US East" @ datadog
[2026-01-03T12:26:00.375Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T12:26:00.379Z] [BOT ERROR] (node:2325) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T12:26:00.634Z] [BOT] ✅ Created forum post: 🏢 Security Sales Engineer - US East @ datadog in #💻・tech-jobs
  ✅ Industry: Security Sales Engineer - US East @ datadog
[2026-01-03T12:26:02.347Z] [BOT] ✅ Created forum post: 🏢 Security Sales Engineer - US East @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T12:26:03.848Z] [BOT] 💾 Marked as posted: Security Sales Engineer - US East @ datadog (instance #1)
[2026-01-03T12:26:03.849Z] [BOT] 💾 BEFORE ARCHIVING: 454 jobs in database
[2026-01-03T12:26:03.849Z] [BOT] ✅ No jobs to archive (all 454 jobs within 7-day window)
[2026-01-03T12:26:03.857Z] [BOT] 💾 Saved posted_jobs.json: 454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T12:26:06.857Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-03T12:26:06.858Z] [BOT] 📍 [ROUTING] "Senior AI Engineer - APM Experiences" @ datadog
[2026-01-03T12:26:06.859Z] [BOT] Category: AI (matched: "artificial intelligence")
[2026-01-03T12:26:06.859Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T12:26:07.124Z] [BOT] ✅ Created forum post: 🏢 Senior AI Engineer - APM Experiences @ datadog in #🤖・ai-jobs
[2026-01-03T12:26:07.124Z] [BOT] ✅ Industry: Senior AI Engineer - APM Experiences @ datadog
[2026-01-03T12:26:09.436Z] [BOT] ✅ Created forum post: 🏢 Senior AI Engineer - APM Experiences @ datadog in #🗽・new-york
[2026-01-03T12:26:09.436Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T12:26:10.937Z] [BOT] 💾 Marked as posted: Senior AI Engineer - APM Experiences @ datadog (instance #1)
[2026-01-03T12:26:10.938Z] [BOT] 💾 BEFORE ARCHIVING: 455 jobs in database
[2026-01-03T12:26:10.938Z] [BOT] ✅ No jobs to archive (all 455 jobs within 7-day window)
[2026-01-03T12:26:10.942Z] [BOT] 💾 Saved posted_jobs.json: 455 active jobs
[2026-01-03T12:26:10.943Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:26:10.944Z] [BOT] 📍 [ROUTING] "Senior Applied Scientist - Large Language Models / Generative AI" @ datadog
[2026-01-03T12:26:10.944Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T12:26:11.168Z] [BOT] ✅ Created forum post: 🏢 Senior Applied Scientist - Large Language Models / Generative AI @ datadog in #🤖・ai-jobs
  ✅ Industry: Senior Applied Scientist - Large Language Models / Generative AI @ datadog
[2026-01-03T12:26:12.884Z] [BOT] ✅ Created forum post: 🏢 Senior Applied Scientist - Large Language Models / Generative AI @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T12:26:14.385Z] [BOT] 💾 Marked as posted: Senior Applied Scientist - Large Language Models / Generative AI @ datadog (instance #1)
[2026-01-03T12:26:14.385Z] [BOT] 💾 BEFORE ARCHIVING: 456 jobs in database
[2026-01-03T12:26:14.385Z] [BOT] ✅ No jobs to archive (all 456 jobs within 7-day window)
[2026-01-03T12:26:14.390Z] [BOT] 💾 Saved posted_jobs.json: 456 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T12:26:14.391Z] [BOT] 📍 [ROUTING] "Senior Developer Advocate - Generative AI" @ datadog
[2026-01-03T12:26:14.391Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T12:26:14.890Z] [BOT] ✅ Created forum post: 🏢 Senior Developer Advocate - Generative AI @ datadog in #🤖・ai-jobs
  ✅ Industry: Senior Developer Advocate - Generative AI @ datadog
[2026-01-03T12:26:16.574Z] [BOT] ✅ Created forum post: 🏢 Senior Developer Advocate - Generative AI @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T12:26:18.074Z] [BOT] 💾 Marked as posted: Senior Developer Advocate - Generative AI @ datadog (instance #1)
[2026-01-03T12:26:18.074Z] [BOT] 💾 BEFORE ARCHIVING: 457 jobs in database
[2026-01-03T12:26:18.075Z] [BOT] ✅ No jobs to archive (all 457 jobs within 7-day window)
[2026-01-03T12:26:18.079Z] [BOT] 💾 Saved posted_jobs.json: 457 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T12:26:21.081Z] [BOT] 📌 Posting 3 jobs to #📣・marketing-jobs
[2026-01-03T12:26:21.081Z] [BOT] 📍 [ROUTING] "Senior Atlassian Administrator - Enterprise IT Operations" @ datadog
[2026-01-03T12:26:21.081Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T12:26:21.535Z] [BOT] ✅ Created forum post: 🏢 Senior Atlassian Administrator - Enterprise IT Operations @ datadog in #📣・marketing-jobs
  ✅ Industry: Senior Atlassian Administrator - Enterprise IT Operations @ datadog
[2026-01-03T12:26:23.321Z] [BOT] ✅ Created forum post: 🏢 Senior Atlassian Administrator - Enterprise IT Operations @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T12:26:24.822Z] [BOT] 💾 Marked as posted: Senior Atlassian Administrator - Enterprise IT Operations @ datadog (instance #1)
[2026-01-03T12:26:24.822Z] [BOT] 💾 BEFORE ARCHIVING: 458 jobs in database
[2026-01-03T12:26:24.823Z] [BOT] ✅ No jobs to archive (all 458 jobs within 7-day window)
[2026-01-03T12:26:24.827Z] [BOT] 💾 Saved posted_jobs.json: 458 active jobs
[2026-01-03T12:26:24.827Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:26:24.828Z] [BOT] 📍 [ROUTING] "Senior Counsel, Corporate & M&A" @ datadog
[2026-01-03T12:26:24.828Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T12:26:25.022Z] [BOT] ✅ Created forum post: 🏢 Senior Counsel, Corporate & M&A @ datadog in #📣・marketing-jobs
  ✅ Industry: Senior Counsel, Corporate & M&A @ datadog
[2026-01-03T12:26:26.890Z] [BOT] ✅ Created forum post: 🏢 Senior Counsel, Corporate & M&A @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T12:26:28.391Z] [BOT] 💾 Marked as posted: Senior Counsel, Corporate & M&A @ datadog (instance #1)
[2026-01-03T12:26:28.392Z] [BOT] 💾 BEFORE ARCHIVING: 459 jobs in database
[2026-01-03T12:26:28.392Z] [BOT] ✅ No jobs to archive (all 459 jobs within 7-day window)
[2026-01-03T12:26:28.397Z] [BOT] 💾 Saved posted_jobs.json: 459 active jobs
[2026-01-03T12:26:28.397Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:26:28.397Z] [BOT] 📍 [ROUTING] "Senior Field Marketing Manager (Global Event Meetings)" @ datadog
[2026-01-03T12:26:28.397Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T12:26:28.690Z] [BOT] ✅ Created forum post: 🏢 Senior Field Marketing Manager (Global Event Meetings) @ datadog in #📣・marketing-jobs
  ✅ Industry: Senior Field Marketing Manager (Global Event Meetings) @ datadog
[2026-01-03T12:26:30.411Z] [BOT] ✅ Created forum post: 🏢 Senior Field Marketing Manager (Global Event Meetings) @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T12:26:31.911Z] [BOT] 💾 Marked as posted: Senior Field Marketing Manager (Global Event Meetings) @ datadog (instance #1)
[2026-01-03T12:26:31.911Z] [BOT] 💾 BEFORE ARCHIVING: 460 jobs in database
[2026-01-03T12:26:31.911Z] [BOT] ✅ No jobs to archive (all 460 jobs within 7-day window)
[2026-01-03T12:26:31.916Z] [BOT] 💾 Saved posted_jobs.json: 460 active jobs
[2026-01-03T12:26:31.916Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:26:34.917Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-03T12:26:34.917Z] [BOT] 📍 [ROUTING] "Senior Customer Data Scientist" @ datadog
[2026-01-03T12:26:34.917Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T12:26:35.169Z] [BOT] ✅ Created forum post: 🏢 Senior Customer Data Scientist @ datadog in #📈・JID_fb739488
[2026-01-03T12:26:35.169Z] [BOT] ✅ Industry: Senior Customer Data Scientist @ datadog
[2026-01-03T12:26:36.940Z] [BOT] ✅ Created forum post: 🏢 Senior Customer Data Scientist @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T12:26:38.442Z] [BOT] 💾 Marked as posted: Senior Customer Data Scientist @ datadog (instance #1)
[2026-01-03T12:26:38.442Z] [BOT] 💾 BEFORE ARCHIVING: 461 jobs in database
[2026-01-03T12:26:38.442Z] [BOT] ✅ No jobs to archive (all 461 jobs within 7-day window)
[2026-01-03T12:26:38.448Z] [BOT] 💾 Saved posted_jobs.json: 461 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T12:26:38.448Z] [BOT] 📍 [ROUTING] "Senior FP&A Analyst - NYC" @ datadog
[2026-01-03T12:26:38.448Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-03T12:26:38.649Z] [BOT] ✅ Created forum post: 🏢 Senior FP&A Analyst - NYC @ datadog in #📈・JID_fb739488
  ✅ Industry: Senior FP&A Analyst - NYC @ datadog
[2026-01-03T12:26:40.434Z] [BOT] ✅ Created forum post: 🏢 Senior FP&A Analyst - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T12:26:41.934Z] [BOT] 💾 Marked as posted: Senior FP&A Analyst - NYC @ datadog (instance #1)
[2026-01-03T12:26:41.934Z] [BOT] 💾 BEFORE ARCHIVING: 462 jobs in database
[2026-01-03T12:26:41.935Z] [BOT] ✅ No jobs to archive (all 462 jobs within 7-day window)
[2026-01-03T12:26:41.939Z] [BOT] 💾 Saved posted_jobs.json: 462 active jobs
[2026-01-03T12:26:41.939Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:26:44.940Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-03T12:26:44.940Z] [BOT] 📍 [ROUTING] "Senior GTM Compensation Partner - NYC" @ datadog
[2026-01-03T12:26:44.940Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T12:26:45.426Z] [BOT] ✅ Created forum post: 🏢 Senior GTM Compensation Partner - NYC @ datadog in #💲・sales-jobs
[2026-01-03T12:26:45.426Z] [BOT] ✅ Industry: Senior GTM Compensation Partner - NYC @ datadog
[2026-01-03T12:26:47.323Z] [BOT] ✅ Created forum post: 🏢 Senior GTM Compensation Partner - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T12:26:48.824Z] [BOT] 💾 Marked as posted: Senior GTM Compensation Partner - NYC @ datadog (instance #1)
[2026-01-03T12:26:48.824Z] [BOT] 💾 BEFORE ARCHIVING: 463 jobs in database
[2026-01-03T12:26:48.825Z] [BOT] ✅ No jobs to archive (all 463 jobs within 7-day window)
[2026-01-03T12:26:48.829Z] [BOT] 💾 Saved posted_jobs.json: 463 active jobs
[2026-01-03T12:26:48.829Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:26:51.830Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T12:26:51.831Z] [BOT] ⏭️  Skipping duplicate: JID_da139ad6 (posted within 7 days)
[2026-01-03T12:26:51.831Z] [BOT] ⏭️  Skipping duplicate: JID_760f3023 (posted within 7 days)
⏭️  Skipping duplicate: JID_cfe9f212 (posted within 7 days)
[2026-01-03T12:26:51.831Z] [BOT] ⏭️  Skipping duplicate: JID_9373491e (posted within 7 days)
[2026-01-03T12:26:51.831Z] [BOT] ⏭️  Skipping duplicate: JID_365fb61f (posted within 7 days)
[2026-01-03T12:26:51.831Z] [BOT] ⏭️  Skipping duplicate: JID_96504ede (posted within 7 days)
[2026-01-03T12:26:51.831Z] [BOT] ⏭️  Skipping duplicate: JID_3398b2c2 (posted within 7 days)
[2026-01-03T12:26:51.831Z] [BOT] ⏭️  Skipping duplicate: JID_741407b1 (posted within 7 days)
⏭️  Skipping duplicate: JID_06fe009a (posted within 7 days)
[2026-01-03T12:26:51.831Z] [BOT] ⏭️  Skipping duplicate: JID_b7d554a6 (posted within 7 days)
[2026-01-03T12:26:51.899Z] [BOT] ✅ Loaded pending queue: 835 total (815 pending, 20 enriched, 0 posted)
[2026-01-03T12:26:51.995Z] [BOT] ✅ Saved pending queue: 835 total (815 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T12:26:51.995Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T12:26:52.039Z] [BOT] 📂 Loaded 1444 existing routing entries
[2026-01-03T12:26:52.086Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-03T12:26:52.086Z] [BOT] Total entries: 1454
   Timestamp: 2026-01-03T12:26:52.080Z
[2026-01-03T12:26:52.087Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T12:26:52.087Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-03T12:26:52.087Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T12:26:52.087Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
     1. #🗽・new-york: 8 posts
[2026-01-03T12:26:52.087Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #📣・marketing-jobs: 3 posts
     4. #🌉・san-francisco: 2 posts
[2026-01-03T12:26:52.087Z] [BOT] 5. #📈・JID_fb739488: 2 posts
[2026-01-03T12:26:52.088Z] [BOT] [STATS] Channel stats saved
[2026-01-03T12:26:54.103Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2325) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*