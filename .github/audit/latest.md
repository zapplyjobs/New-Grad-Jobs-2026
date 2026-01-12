# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T21:07:25.233Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T21:06:28.375Z] ========================================
[2026-01-12T21:06:28.377Z] Discord Bot Execution Log
[2026-01-12T21:06:28.377Z] Environment: GitHub Actions
[2026-01-12T21:06:28.377Z] Node Version: v20.19.6
[2026-01-12T21:06:28.377Z] ========================================
[2026-01-12T21:06:28.377Z] Environment Variables Check:
[2026-01-12T21:06:28.377Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T21:06:28.377Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T21:06:28.377Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T21:06:28.377Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T21:06:28.377Z] 
Multi-Channel Configuration:
[2026-01-12T21:06:28.378Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T21:06:28.378Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T21:06:28.378Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T21:06:28.378Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T21:06:28.378Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T21:06:28.378Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T21:06:28.378Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T21:06:28.378Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T21:06:28.378Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T21:06:28.378Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T21:06:28.378Z] 
Data Files Check:
[2026-01-12T21:06:28.379Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166052 bytes)
[2026-01-12T21:06:28.382Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 274780 bytes)
[2026-01-12T21:06:28.382Z] 
========================================
[2026-01-12T21:06:28.382Z] Starting Enhanced Discord Bot...
[2026-01-12T21:06:28.382Z] ========================================
[2026-01-12T21:06:28.839Z] [BOT] ✅ Loaded V2 database: 501 jobs
[2026-01-12T21:06:29.628Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T21:06:29.629Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T21:06:29.629Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T21:06:29.773Z] [BOT] ✅ Loaded pending queue: 2659 total (2639 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) at datadog
[2026-01-12T21:06:29.775Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T21:06:29.775Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T21:06:29.775Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T21:06:29.776Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-12T21:06:29.776Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Sales Engineer (Customer Success) - Boston @ datadog: boston, massachusetts, usa, denver, colorado, usa, boston, massachusetts, usa; new york, new york, usa
   - Senior Partner Solutions Architect (Security - NAMER) @ datadog: remote, boston, massachusetts, usa; denver, colorado, usa; new york, new york, usa; san francisco, california, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-12T21:06:29.776Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T21:06:29.781Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-12T21:06:29.781Z] [BOT] 📍 [ROUTING] "Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking)" @ datadog
[2026-01-12T21:06:29.781Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T21:06:29.786Z] [BOT ERROR] (node:2361) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T21:06:30.120Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog in #💲・sales-jobs
  ✅ Industry: Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog
[2026-01-12T21:06:32.017Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog in #🚌・boston
[2026-01-12T21:06:32.018Z] [BOT] ✅ Location: 🚌・boston
[2026-01-12T21:06:33.518Z] [BOT] 💾 Marked as posted: Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog (instance #1)
[2026-01-12T21:06:33.519Z] [BOT] 💾 BEFORE ARCHIVING: 502 jobs in database
[2026-01-12T21:06:33.519Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T21:06:33.523Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-12T21:06:33.524Z] [BOT] ✅ Archiving complete: 1 archived, 501 active
[2026-01-12T21:06:33.529Z] [BOT] 💾 Saved posted_jobs.json: 501 active jobs
[2026-01-12T21:06:33.529Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:06:33.529Z] [BOT] 💾 Marked as posted: Sales Development Representative - Summer 2026 Graduates (Spanish Speaking) @ datadog (instance #1)
[2026-01-12T21:06:33.529Z] [BOT] 💾 BEFORE ARCHIVING: 502 jobs in database
[2026-01-12T21:06:33.530Z] [BOT] ✅ No jobs to archive (all 502 jobs within 7-day window)
[2026-01-12T21:06:33.534Z] [BOT] 💾 Saved posted_jobs.json: 502 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:06:33.535Z] [BOT] 📍 [ROUTING] "Sales Engineer (Customer Success) - Boston" @ datadog
[2026-01-12T21:06:33.535Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T21:06:33.924Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer (Customer Success) - Boston @ datadog in #💲・sales-jobs
  ✅ Industry: Sales Engineer (Customer Success) - Boston @ datadog
[2026-01-12T21:06:35.657Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer (Customer Success) - Boston @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-12T21:06:37.158Z] [BOT] 💾 Marked as posted: Sales Engineer (Customer Success) - Boston @ datadog (instance #1)
💾 BEFORE ARCHIVING: 503 jobs in database
[2026-01-12T21:06:37.159Z] [BOT] ✅ No jobs to archive (all 503 jobs within 7-day window)
[2026-01-12T21:06:37.163Z] [BOT] 💾 Saved posted_jobs.json: 503 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:06:37.163Z] [BOT] 💾 Marked as posted: Sales Engineer (Customer Success) - Denver @ datadog (instance #1)
[2026-01-12T21:06:37.163Z] [BOT] 💾 BEFORE ARCHIVING: 504 jobs in database
[2026-01-12T21:06:37.163Z] [BOT] ✅ No jobs to archive (all 504 jobs within 7-day window)
[2026-01-12T21:06:37.167Z] [BOT] 💾 Saved posted_jobs.json: 504 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:06:37.167Z] [BOT] 💾 Marked as posted: Sales Engineer (Customer Success - Spanish Speaking) @ datadog (instance #1)
💾 BEFORE ARCHIVING: 505 jobs in database
[2026-01-12T21:06:37.168Z] [BOT] ✅ No jobs to archive (all 505 jobs within 7-day window)
[2026-01-12T21:06:37.171Z] [BOT] 💾 Saved posted_jobs.json: 505 active jobs
[2026-01-12T21:06:37.171Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:06:40.172Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-12T21:06:40.173Z] [BOT] 📍 [ROUTING] "Security Engineer II, Risk Engineering" @ datadog
[2026-01-12T21:06:40.173Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T21:06:40.801Z] [BOT] ✅ Created forum post: 🏢 Security Engineer II, Risk Engineering @ datadog in #💻・tech-jobs
  ✅ Industry: Security Engineer II, Risk Engineering @ datadog
[2026-01-12T21:06:42.649Z] [BOT] ✅ Created forum post: 🏢 Security Engineer II, Risk Engineering @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:06:44.150Z] [BOT] 💾 Marked as posted: Security Engineer II, Risk Engineering @ datadog (instance #1)
💾 BEFORE ARCHIVING: 506 jobs in database
[2026-01-12T21:06:44.151Z] [BOT] ✅ No jobs to archive (all 506 jobs within 7-day window)
[2026-01-12T21:06:44.155Z] [BOT] 💾 Saved posted_jobs.json: 506 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:06:44.156Z] [BOT] 📍 [ROUTING] "Security Sales Engineer - US East" @ datadog
[2026-01-12T21:06:44.156Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T21:06:44.375Z] [BOT] ✅ Created forum post: 🏢 Security Sales Engineer - US East @ datadog in #💻・tech-jobs
  ✅ Industry: Security Sales Engineer - US East @ datadog
[2026-01-12T21:06:46.209Z] [BOT] ✅ Created forum post: 🏢 Security Sales Engineer - US East @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:06:47.710Z] [BOT] 💾 Marked as posted: Security Sales Engineer - US East @ datadog (instance #1)
[2026-01-12T21:06:47.710Z] [BOT] 💾 BEFORE ARCHIVING: 507 jobs in database
[2026-01-12T21:06:47.710Z] [BOT] ✅ No jobs to archive (all 507 jobs within 7-day window)
[2026-01-12T21:06:47.715Z] [BOT] 💾 Saved posted_jobs.json: 507 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:06:50.716Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-12T21:06:50.716Z] [BOT] 📍 [ROUTING] "Senior AI Engineer - APM Experiences" @ datadog
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T21:06:51.061Z] [BOT] ✅ Created forum post: 🏢 Senior AI Engineer - APM Experiences @ datadog in #🤖・ai-jobs
  ✅ Industry: Senior AI Engineer - APM Experiences @ datadog
[2026-01-12T21:06:52.850Z] [BOT] ✅ Created forum post: 🏢 Senior AI Engineer - APM Experiences @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:06:54.351Z] [BOT] 💾 Marked as posted: Senior AI Engineer - APM Experiences @ datadog (instance #1)
💾 BEFORE ARCHIVING: 508 jobs in database
[2026-01-12T21:06:54.352Z] [BOT] ✅ No jobs to archive (all 508 jobs within 7-day window)
[2026-01-12T21:06:54.356Z] [BOT] 💾 Saved posted_jobs.json: 508 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:06:54.357Z] [BOT] 📍 [ROUTING] "Senior Applied Scientist - Large Language Models / Generative AI" @ datadog
   Category: AI (matched: "machine learning")
[2026-01-12T21:06:54.357Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T21:06:54.645Z] [BOT] ✅ Created forum post: 🏢 Senior Applied Scientist - Large Language Models / Generative AI @ datadog in #🤖・ai-jobs
  ✅ Industry: Senior Applied Scientist - Large Language Models / Generative AI @ datadog
[2026-01-12T21:06:56.432Z] [BOT] ✅ Created forum post: 🏢 Senior Applied Scientist - Large Language Models / Generative AI @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:06:57.934Z] [BOT] 💾 Marked as posted: Senior Applied Scientist - Large Language Models / Generative AI @ datadog (instance #1)
💾 BEFORE ARCHIVING: 509 jobs in database
[2026-01-12T21:06:57.934Z] [BOT] ✅ No jobs to archive (all 509 jobs within 7-day window)
[2026-01-12T21:06:57.940Z] [BOT] 💾 Saved posted_jobs.json: 509 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:06:57.940Z] [BOT] 📍 [ROUTING] "Senior Developer Advocate - Generative AI" @ datadog
   Category: AI (matched: "AI/ML")
[2026-01-12T21:06:57.941Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T21:06:58.316Z] [BOT] ✅ Created forum post: 🏢 Senior Developer Advocate - Generative AI @ datadog in #🤖・ai-jobs
[2026-01-12T21:06:58.316Z] [BOT] ✅ Industry: Senior Developer Advocate - Generative AI @ datadog
[2026-01-12T21:07:00.128Z] [BOT] ✅ Created forum post: 🏢 Senior Developer Advocate - Generative AI @ datadog in #🌉・san-francisco
[2026-01-12T21:07:00.128Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T21:07:01.628Z] [BOT] 💾 Marked as posted: Senior Developer Advocate - Generative AI @ datadog (instance #1)
[2026-01-12T21:07:01.629Z] [BOT] 💾 BEFORE ARCHIVING: 510 jobs in database
[2026-01-12T21:07:01.629Z] [BOT] ✅ No jobs to archive (all 510 jobs within 7-day window)
[2026-01-12T21:07:01.634Z] [BOT] 💾 Saved posted_jobs.json: 510 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:07:04.635Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-12T21:07:04.635Z] [BOT] 📍 [ROUTING] "Senior Atlassian Administrator - Enterprise IT Operations" @ datadog
[2026-01-12T21:07:04.635Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T21:07:04.930Z] [BOT] ✅ Created forum post: 🏢 Senior Atlassian Administrator - Enterprise IT Operations @ datadog in #📣・marketing-jobs
[2026-01-12T21:07:04.930Z] [BOT] ✅ Industry: Senior Atlassian Administrator - Enterprise IT Operations @ datadog
[2026-01-12T21:07:06.638Z] [BOT] ✅ Created forum post: 🏢 Senior Atlassian Administrator - Enterprise IT Operations @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:07:08.140Z] [BOT] 💾 Marked as posted: Senior Atlassian Administrator - Enterprise IT Operations @ datadog (instance #1)
[2026-01-12T21:07:08.140Z] [BOT] 💾 BEFORE ARCHIVING: 511 jobs in database
[2026-01-12T21:07:08.140Z] [BOT] ✅ No jobs to archive (all 511 jobs within 7-day window)
[2026-01-12T21:07:08.146Z] [BOT] 💾 Saved posted_jobs.json: 511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:07:08.146Z] [BOT] 📍 [ROUTING] "Senior Counsel, Corporate & M&A" @ datadog
[2026-01-12T21:07:08.146Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T21:07:08.711Z] [BOT] ✅ Created forum post: 🏢 Senior Counsel, Corporate & M&A @ datadog in #📣・marketing-jobs
  ✅ Industry: Senior Counsel, Corporate & M&A @ datadog
[2026-01-12T21:07:10.443Z] [BOT] ✅ Created forum post: 🏢 Senior Counsel, Corporate & M&A @ datadog in #🗽・new-york
[2026-01-12T21:07:10.444Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T21:07:11.945Z] [BOT] 💾 Marked as posted: Senior Counsel, Corporate & M&A @ datadog (instance #1)
[2026-01-12T21:07:11.945Z] [BOT] 💾 BEFORE ARCHIVING: 512 jobs in database
[2026-01-12T21:07:11.945Z] [BOT] ✅ No jobs to archive (all 512 jobs within 7-day window)
[2026-01-12T21:07:11.950Z] [BOT] 💾 Saved posted_jobs.json: 512 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:07:14.950Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-12T21:07:14.950Z] [BOT] 📍 [ROUTING] "Senior Customer Data Scientist" @ datadog
[2026-01-12T21:07:14.951Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T21:07:15.327Z] [BOT] ✅ Created forum post: 🏢 Senior Customer Data Scientist @ datadog in #📈・JID_fb739488
  ✅ Industry: Senior Customer Data Scientist @ datadog
[2026-01-12T21:07:17.134Z] [BOT] ✅ Created forum post: 🏢 Senior Customer Data Scientist @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:07:18.637Z] [BOT] 💾 Marked as posted: Senior Customer Data Scientist @ datadog (instance #1)
[2026-01-12T21:07:18.637Z] [BOT] 💾 BEFORE ARCHIVING: 513 jobs in database
[2026-01-12T21:07:18.637Z] [BOT] ✅ No jobs to archive (all 513 jobs within 7-day window)
[2026-01-12T21:07:18.643Z] [BOT] 💾 Saved posted_jobs.json: 513 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:07:21.644Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T21:07:21.644Z] [BOT] ⏭️  Skipping duplicate: JID_932a4860 (posted within 7 days)
[2026-01-12T21:07:21.644Z] [BOT] ⏭️  Skipping duplicate: JID_594f09b2 (posted within 7 days)
[2026-01-12T21:07:21.644Z] [BOT] ⏭️  Skipping duplicate: JID_3c74a7c8 (posted within 7 days)
⏭️  Skipping duplicate: JID_da139ad6 (posted within 7 days)
[2026-01-12T21:07:21.644Z] [BOT] ⏭️  Skipping duplicate: JID_760f3023 (posted within 7 days)
[2026-01-12T21:07:21.644Z] [BOT] ⏭️  Skipping duplicate: JID_cfe9f212 (posted within 7 days)
[2026-01-12T21:07:21.644Z] [BOT] ⏭️  Skipping duplicate: JID_9373491e (posted within 7 days)
[2026-01-12T21:07:21.645Z] [BOT] ⏭️  Skipping duplicate: JID_365fb61f (posted within 7 days)
[2026-01-12T21:07:21.645Z] [BOT] ⏭️  Skipping duplicate: JID_96504ede (posted within 7 days)
[2026-01-12T21:07:21.645Z] [BOT] ⏭️  Skipping duplicate: JID_3398b2c2 (posted within 7 days)
[2026-01-12T21:07:21.811Z] [BOT] ✅ Loaded pending queue: 2659 total (2639 pending, 20 enriched, 0 posted)
[2026-01-12T21:07:21.960Z] [BOT] ✅ Saved pending queue: 2659 total (2639 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-12T21:07:21.960Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T21:07:22.012Z] [BOT] 📂 Loaded 2682 existing routing entries
[2026-01-12T21:07:22.066Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2692
   Timestamp: 2026-01-12T21:07:22.057Z
[2026-01-12T21:07:22.067Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T21:07:22.067Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-12T21:07:22.067Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T21:07:22.067Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
     1. #🗽・new-york: 7 posts
[2026-01-12T21:07:22.067Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #💲・sales-jobs: 2 posts
     4. #🚌・boston: 2 posts
     5. #💻・tech-jobs: 2 posts
[2026-01-12T21:07:22.067Z] [BOT] [STATS] Channel stats saved
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2361) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*