# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T21:26:36.153Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T21:25:36.291Z] ========================================
[2026-01-12T21:25:36.293Z] Discord Bot Execution Log
[2026-01-12T21:25:36.293Z] Environment: GitHub Actions
[2026-01-12T21:25:36.293Z] Node Version: v20.19.6
[2026-01-12T21:25:36.293Z] ========================================
[2026-01-12T21:25:36.293Z] Environment Variables Check:
[2026-01-12T21:25:36.293Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T21:25:36.293Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T21:25:36.293Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T21:25:36.293Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T21:25:36.293Z] 
Multi-Channel Configuration:
[2026-01-12T21:25:36.294Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T21:25:36.294Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T21:25:36.294Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T21:25:36.294Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T21:25:36.294Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T21:25:36.294Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T21:25:36.294Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T21:25:36.294Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T21:25:36.294Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T21:25:36.294Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T21:25:36.294Z] 
Data Files Check:
[2026-01-12T21:25:36.296Z] .github/data/new_jobs.json: ✅ Exists (10 items, 175013 bytes)
[2026-01-12T21:25:36.298Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 280510 bytes)
[2026-01-12T21:25:36.298Z] 
========================================
[2026-01-12T21:25:36.298Z] Starting Enhanced Discord Bot...
[2026-01-12T21:25:36.298Z] ========================================
[2026-01-12T21:25:36.829Z] [BOT] ✅ Loaded V2 database: 513 jobs
[2026-01-12T21:25:37.360Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T21:25:37.360Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T21:25:37.360Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T21:25:37.469Z] [BOT] ✅ Loaded pending queue: 2658 total (2638 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior FP&A Analyst - NYC at datadog
[2026-01-12T21:25:37.470Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T21:25:37.470Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T21:25:37.471Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T21:25:37.471Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-12T21:25:37.472Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Senior Partner Solutions Architect (Security - NAMER) @ datadog: remote, boston, massachusetts, usa; denver, colorado, usa; new york, new york, usa; san francisco, california, usa
   - Senior Software Engineer  @ datadog: boston, massachusetts, usa; new york, new york, usa, new york, new york, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-12T21:25:37.472Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T21:25:37.476Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-12T21:25:37.477Z] [BOT] 📍 [ROUTING] "Senior FP&A Analyst - NYC" @ datadog
[2026-01-12T21:25:37.477Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-12T21:25:37.481Z] [BOT ERROR] (node:2336) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T21:25:37.682Z] [BOT] ✅ Created forum post: 🏢 Senior FP&A Analyst - NYC @ datadog in #📈・JID_fb739488
[2026-01-12T21:25:37.682Z] [BOT] ✅ Industry: Senior FP&A Analyst - NYC @ datadog
[2026-01-12T21:25:39.784Z] [BOT] ✅ Created forum post: 🏢 Senior FP&A Analyst - NYC @ datadog in #🗽・new-york
[2026-01-12T21:25:39.784Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T21:25:41.285Z] [BOT] 💾 Marked as posted: Senior FP&A Analyst - NYC @ datadog (instance #1)
[2026-01-12T21:25:41.285Z] [BOT] 💾 BEFORE ARCHIVING: 514 jobs in database
[2026-01-12T21:25:41.285Z] [BOT] ✅ No jobs to archive (all 514 jobs within 7-day window)
[2026-01-12T21:25:41.290Z] [BOT] 💾 Saved posted_jobs.json: 514 active jobs
[2026-01-12T21:25:41.290Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:25:44.291Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-12T21:25:44.291Z] [BOT] 📍 [ROUTING] "Senior GTM Compensation Partner - NYC" @ datadog
[2026-01-12T21:25:44.291Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T21:25:44.563Z] [BOT] ✅ Created forum post: 🏢 Senior GTM Compensation Partner - NYC @ datadog in #💲・sales-jobs
  ✅ Industry: Senior GTM Compensation Partner - NYC @ datadog
[2026-01-12T21:25:46.321Z] [BOT] ✅ Created forum post: 🏢 Senior GTM Compensation Partner - NYC @ datadog in #🗽・new-york
[2026-01-12T21:25:46.321Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T21:25:47.822Z] [BOT] 💾 Marked as posted: Senior GTM Compensation Partner - NYC @ datadog (instance #1)
[2026-01-12T21:25:47.823Z] [BOT] 💾 BEFORE ARCHIVING: 515 jobs in database
[2026-01-12T21:25:47.823Z] [BOT] ✅ No jobs to archive (all 515 jobs within 7-day window)
[2026-01-12T21:25:47.828Z] [BOT] 💾 Saved posted_jobs.json: 515 active jobs
[2026-01-12T21:25:47.828Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:25:47.829Z] [BOT] 📍 [ROUTING] "Senior Sales Engineer - Majors Northeast" @ datadog
[2026-01-12T21:25:47.829Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T21:25:48.072Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Engineer - Majors Northeast @ datadog in #💲・sales-jobs
[2026-01-12T21:25:48.072Z] [BOT] ✅ Industry: Senior Sales Engineer - Majors Northeast @ datadog
[2026-01-12T21:25:49.842Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Engineer - Majors Northeast @ datadog in #💻・remote-usa
[2026-01-12T21:25:49.842Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-12T21:25:51.343Z] [BOT] 💾 Marked as posted: Senior Sales Engineer - Majors Northeast @ datadog (instance #1)
[2026-01-12T21:25:51.343Z] [BOT] 💾 BEFORE ARCHIVING: 516 jobs in database
[2026-01-12T21:25:51.344Z] [BOT] ✅ No jobs to archive (all 516 jobs within 7-day window)
[2026-01-12T21:25:51.350Z] [BOT] 💾 Saved posted_jobs.json: 516 active jobs
[2026-01-12T21:25:51.350Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:25:54.349Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-12T21:25:54.349Z] [BOT] 📍 [ROUTING] "Senior Manager, People Business Partner - NYC" @ datadog
[2026-01-12T21:25:54.349Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T21:25:54.599Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, People Business Partner - NYC @ datadog in #📣・marketing-jobs
  ✅ Industry: Senior Manager, People Business Partner - NYC @ datadog
[2026-01-12T21:25:56.341Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, People Business Partner - NYC @ datadog in #🗽・new-york
[2026-01-12T21:25:56.341Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T21:25:57.841Z] [BOT] 💾 Marked as posted: Senior Manager, People Business Partner - NYC @ datadog (instance #1)
[2026-01-12T21:25:57.841Z] [BOT] 💾 BEFORE ARCHIVING: 517 jobs in database
[2026-01-12T21:25:57.842Z] [BOT] ✅ No jobs to archive (all 517 jobs within 7-day window)
[2026-01-12T21:25:57.847Z] [BOT] 💾 Saved posted_jobs.json: 517 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:25:57.847Z] [BOT] 📍 [ROUTING] "Senior Product Designer" @ datadog
[2026-01-12T21:25:57.847Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T21:25:58.078Z] [BOT] ✅ Created forum post: 🏢 Senior Product Designer @ datadog in #📣・marketing-jobs
[2026-01-12T21:25:58.078Z] [BOT] ✅ Industry: Senior Product Designer @ datadog
[2026-01-12T21:25:59.896Z] [BOT] ✅ Created forum post: 🏢 Senior Product Designer @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:26:01.396Z] [BOT] 💾 Marked as posted: Senior Product Designer @ datadog (instance #1)
[2026-01-12T21:26:01.396Z] [BOT] 💾 BEFORE ARCHIVING: 518 jobs in database
[2026-01-12T21:26:01.397Z] [BOT] ✅ No jobs to archive (all 518 jobs within 7-day window)
[2026-01-12T21:26:01.401Z] [BOT] 💾 Saved posted_jobs.json: 518 active jobs
[2026-01-12T21:26:01.401Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:26:04.402Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-12T21:26:04.403Z] [BOT] 📍 [ROUTING] "Senior Partner Solutions Architect (Security - NAMER)" @ datadog
   Category: TECH (matched: "security")
[2026-01-12T21:26:04.403Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T21:26:04.763Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Solutions Architect (Security - NAMER) @ datadog in #💻・tech-jobs
[2026-01-12T21:26:04.763Z] [BOT] ✅ Industry: Senior Partner Solutions Architect (Security - NAMER) @ datadog
[2026-01-12T21:26:06.700Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Solutions Architect (Security - NAMER) @ datadog in #💻・remote-usa
[2026-01-12T21:26:06.700Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-12T21:26:08.200Z] [BOT] 💾 Marked as posted: Senior Partner Solutions Architect (Security - NAMER) @ datadog (instance #1)
[2026-01-12T21:26:08.200Z] [BOT] 💾 BEFORE ARCHIVING: 519 jobs in database
[2026-01-12T21:26:08.201Z] [BOT] ✅ No jobs to archive (all 519 jobs within 7-day window)
[2026-01-12T21:26:08.207Z] [BOT] 💾 Saved posted_jobs.json: 519 active jobs
[2026-01-12T21:26:08.207Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:26:08.207Z] [BOT] 💾 Marked as posted: Senior Partner Solutions Architect (Security - NAMER) @ datadog (instance #1)
💾 BEFORE ARCHIVING: 520 jobs in database
[2026-01-12T21:26:08.207Z] [BOT] ✅ No jobs to archive (all 520 jobs within 7-day window)
[2026-01-12T21:26:08.212Z] [BOT] 💾 Saved posted_jobs.json: 520 active jobs
[2026-01-12T21:26:08.212Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:26:08.212Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager (AI Security)" @ datadog
[2026-01-12T21:26:08.212Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-12T21:26:08.395Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager (AI Security) @ datadog in #💻・tech-jobs
  ✅ Industry: Senior Product Marketing Manager (AI Security) @ datadog
[2026-01-12T21:26:10.180Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager (AI Security) @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T21:26:11.680Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager (AI Security) @ datadog (instance #1)
[2026-01-12T21:26:11.680Z] [BOT] 💾 BEFORE ARCHIVING: 521 jobs in database
[2026-01-12T21:26:11.680Z] [BOT] ✅ No jobs to archive (all 521 jobs within 7-day window)
[2026-01-12T21:26:11.685Z] [BOT] 💾 Saved posted_jobs.json: 521 active jobs
[2026-01-12T21:26:11.685Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:26:11.685Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager (Cloud Cost Management)" @ datadog
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-12T21:26:11.943Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager (Cloud Cost Management) @ datadog in #💻・tech-jobs
[2026-01-12T21:26:11.944Z] [BOT] ✅ Industry: Senior Product Marketing Manager (Cloud Cost Management) @ datadog
[2026-01-12T21:26:15.446Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager (Cloud Cost Management) @ datadog in #🌉・san-francisco
[2026-01-12T21:26:15.446Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T21:26:16.946Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager (Cloud Cost Management) @ datadog (instance #1)
[2026-01-12T21:26:16.947Z] [BOT] 💾 BEFORE ARCHIVING: 522 jobs in database
[2026-01-12T21:26:16.947Z] [BOT] ✅ No jobs to archive (all 522 jobs within 7-day window)
[2026-01-12T21:26:16.952Z] [BOT] 💾 Saved posted_jobs.json: 522 active jobs
[2026-01-12T21:26:16.952Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:26:19.953Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-12T21:26:19.953Z] [BOT] 📍 [ROUTING] "Senior Product Manager - Cost and Usage Experience" @ datadog
   Category: PRODUCT (matched: "product")
[2026-01-12T21:26:19.953Z] [BOT] Channel: 📦・product-jobs (1391...8889)
[2026-01-12T21:26:20.323Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager - Cost and Usage Experience @ datadog in #📦・product-jobs
  ✅ Industry: Senior Product Manager - Cost and Usage Experience @ datadog
[2026-01-12T21:26:22.020Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager - Cost and Usage Experience @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:26:23.520Z] [BOT] 💾 Marked as posted: Senior Product Manager - Cost and Usage Experience @ datadog (instance #1)
[2026-01-12T21:26:23.520Z] [BOT] 💾 BEFORE ARCHIVING: 523 jobs in database
[2026-01-12T21:26:23.521Z] [BOT] ✅ No jobs to archive (all 523 jobs within 7-day window)
[2026-01-12T21:26:23.526Z] [BOT] 💾 Saved posted_jobs.json: 523 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:26:23.526Z] [BOT] 💾 Marked as posted: Senior Product Manager - Database AI Optimization @ datadog (instance #1)
[2026-01-12T21:26:23.526Z] [BOT] 💾 BEFORE ARCHIVING: 524 jobs in database
[2026-01-12T21:26:23.526Z] [BOT] ✅ No jobs to archive (all 524 jobs within 7-day window)
[2026-01-12T21:26:23.531Z] [BOT] 💾 Saved posted_jobs.json: 524 active jobs
[2026-01-12T21:26:23.531Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:26:26.531Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-12T21:26:26.531Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager (AI)" @ datadog
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch, nonTechMatch (using ai)
[2026-01-12T21:26:26.741Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager (AI) @ datadog in #🤖・ai-jobs
  ✅ Industry: Senior Product Marketing Manager (AI) @ datadog
[2026-01-12T21:26:28.441Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager (AI) @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T21:26:29.942Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager (AI) @ datadog (instance #1)
[2026-01-12T21:26:29.942Z] [BOT] 💾 BEFORE ARCHIVING: 525 jobs in database
[2026-01-12T21:26:29.942Z] [BOT] ✅ No jobs to archive (all 525 jobs within 7-day window)
[2026-01-12T21:26:29.947Z] [BOT] 💾 Saved posted_jobs.json: 525 active jobs
[2026-01-12T21:26:29.947Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:26:32.947Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T21:26:32.948Z] [BOT] ⏭️  Skipping duplicate: JID_06fe009a (posted within 7 days)
[2026-01-12T21:26:32.948Z] [BOT] ⏭️  Skipping duplicate: JID_b7d554a6 (posted within 7 days)
[2026-01-12T21:26:32.948Z] [BOT] ⏭️  Skipping duplicate: JID_e5a693b8 (posted within 7 days)
⏭️  Skipping duplicate: JID_bb914d14 (posted within 7 days)
[2026-01-12T21:26:32.948Z] [BOT] ⏭️  Skipping duplicate: JID_0b600350 (posted within 7 days)
[2026-01-12T21:26:32.948Z] [BOT] ⏭️  Skipping duplicate: JID_22b239dd (posted within 7 days)
⏭️  Skipping duplicate: JID_33b8c7b0 (posted within 7 days)
[2026-01-12T21:26:32.948Z] [BOT] ⏭️  Skipping duplicate: JID_8d88551f (posted within 7 days)
[2026-01-12T21:26:32.948Z] [BOT] ⏭️  Skipping duplicate: JID_8ae984e3 (posted within 7 days)
[2026-01-12T21:26:32.948Z] [BOT] ⏭️  Skipping duplicate: JID_2e035db0 (posted within 7 days)
[2026-01-12T21:26:33.081Z] [BOT] ✅ Loaded pending queue: 2658 total (2638 pending, 20 enriched, 0 posted)
[2026-01-12T21:26:33.235Z] [BOT] ✅ Saved pending queue: 2658 total (2638 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-12T21:26:33.236Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T21:26:33.287Z] [BOT] 📂 Loaded 2692 existing routing entries
[2026-01-12T21:26:33.342Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2702
[2026-01-12T21:26:33.342Z] [BOT] Timestamp: 2026-01-12T21:26:33.331Z
[2026-01-12T21:26:33.343Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T21:26:33.343Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-12T21:26:33.344Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
     1. #🗽・new-york: 5 posts
     2. #💻・tech-jobs: 3 posts
     3. #🌉・san-francisco: 3 posts
     4. #💲・sales-jobs: 2 posts
     5. #💻・remote-usa: 2 posts
[2026-01-12T21:26:33.344Z] [BOT] [STATS] Channel stats saved
[2026-01-12T21:26:35.369Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2336) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*