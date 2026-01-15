# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T07:42:17.033Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T07:41:29.410Z] ========================================
[2026-01-15T07:41:29.412Z] Discord Bot Execution Log
[2026-01-15T07:41:29.412Z] Environment: GitHub Actions
[2026-01-15T07:41:29.412Z] Node Version: v20.19.6
[2026-01-15T07:41:29.412Z] ========================================
[2026-01-15T07:41:29.412Z] Environment Variables Check:
[2026-01-15T07:41:29.413Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T07:41:29.413Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T07:41:29.413Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T07:41:29.413Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T07:41:29.413Z] 
Multi-Channel Configuration:
[2026-01-15T07:41:29.413Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T07:41:29.413Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T07:41:29.413Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T07:41:29.413Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T07:41:29.413Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T07:41:29.413Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T07:41:29.414Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T07:41:29.414Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T07:41:29.414Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T07:41:29.414Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T07:41:29.414Z] 
Data Files Check:
[2026-01-15T07:41:29.414Z] .github/data/new_jobs.json: ✅ Exists (10 items, 28583 bytes)
[2026-01-15T07:41:29.421Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 903876 bytes)
[2026-01-15T07:41:29.421Z] 
========================================
[2026-01-15T07:41:29.421Z] Starting Enhanced Discord Bot...
[2026-01-15T07:41:29.421Z] ========================================
[2026-01-15T07:41:29.944Z] [BOT] ✅ Loaded V2 database: 1689 jobs
[2026-01-15T07:41:30.604Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T07:41:30.605Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T07:41:30.605Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T07:41:30.722Z] [BOT] ✅ Loaded pending queue: 2731 total (2711 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Graduate Leadership Program - AI Strategy - Solutions & Automation Track at PMG
[2026-01-15T07:41:30.725Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T07:41:30.725Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T07:41:30.726Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T07:41:30.726Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T07:41:30.727Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-15T07:41:30.727Z] [BOT] - Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T07:41:30.731Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-15T07:41:30.731Z] [BOT] 📍 [ROUTING] "Graduate Leadership Program - AI Strategy - Solutions & Automation Track" @ ORG_b2822ace
[2026-01-15T07:41:30.732Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:41:30.748Z] [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T07:41:30.979Z] [BOT] ✅ Created forum post: 🏢 Graduate Leadership Program - AI Strategy - Solutions & Automation Track @ ORG_b2822ace in #💻・tech-jobs
  ✅ Industry: Graduate Leadership Program - AI Strategy - Solutions & Automation Track @ ORG_b2822ace
[2026-01-15T07:41:32.682Z] [BOT] ✅ Created forum post: 🏢 Graduate Leadership Program - AI Strategy - Solutions & Automation Track @ ORG_b2822ace in #🤠・austin
[2026-01-15T07:41:32.682Z] [BOT] ✅ Location: 🤠・austin
[2026-01-15T07:41:34.184Z] [BOT] 💾 Marked as posted: Graduate Leadership Program - AI Strategy - Solutions & Automation Track @ ORG_b2822ace (instance #1)
[2026-01-15T07:41:34.184Z] [BOT] 💾 BEFORE ARCHIVING: 1690 jobs in database
[2026-01-15T07:41:34.186Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T07:41:34.191Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-15T07:41:34.191Z] [BOT] ✅ Archiving complete: 1 archived, 1689 active
[2026-01-15T07:41:34.206Z] [BOT] 💾 Saved posted_jobs.json: 1689 active jobs
[2026-01-15T07:41:34.207Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:41:34.207Z] [BOT] 📍 [ROUTING] "Software Engineer & Computer Science – Recent Grad/Full Time" @ ORG_7a23266b
[2026-01-15T07:41:34.208Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:41:34.564Z] [BOT] ✅ Created forum post: 🏢 Software Engineer & Computer Science – Recent Grad/Full Time @ ORG_7a23266b in #💻・tech-jobs
  ✅ Industry: Software Engineer & Computer Science – Recent Grad/Full Time @ ORG_7a23266b
[2026-01-15T07:41:36.066Z] [BOT] 💾 Marked as posted: Software Engineer & Computer Science – Recent Grad/Full Time @ ORG_7a23266b (instance #1)
[2026-01-15T07:41:36.066Z] [BOT] 💾 BEFORE ARCHIVING: 1690 jobs in database
[2026-01-15T07:41:36.067Z] [BOT] ✅ No jobs to archive (all 1690 jobs within 7-day window)
[2026-01-15T07:41:36.077Z] [BOT] 💾 Saved posted_jobs.json: 1690 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:41:36.078Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate Social - BS/MS" @ ORG_1bb6fcfb
[2026-01-15T07:41:36.078Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:41:36.340Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate Social - BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate Social - BS/MS @ ORG_1bb6fcfb
[2026-01-15T07:41:38.003Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate Social - BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T07:41:39.503Z] [BOT] 💾 Marked as posted: Software Engineer Graduate Social - BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-15T07:41:39.504Z] [BOT] 💾 BEFORE ARCHIVING: 1691 jobs in database
[2026-01-15T07:41:39.505Z] [BOT] ✅ No jobs to archive (all 1691 jobs within 7-day window)
[2026-01-15T07:41:39.517Z] [BOT] 💾 Saved posted_jobs.json: 1691 active jobs
[2026-01-15T07:41:39.517Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:41:39.519Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model Speech Multimodal Interactions" @ ORG_08c9a13c
[2026-01-15T07:41:39.519Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:41:39.878Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Foundation Model Speech Multimodal Interactions @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - Foundation Model Speech Multimodal Interactions @ ORG_08c9a13c
[2026-01-15T07:41:41.796Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Foundation Model Speech Multimodal Interactions @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T07:41:43.297Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Foundation Model Speech Multimodal Interactions @ ORG_08c9a13c (instance #1)
[2026-01-15T07:41:43.298Z] [BOT] 💾 BEFORE ARCHIVING: 1692 jobs in database
[2026-01-15T07:41:43.299Z] [BOT] ✅ No jobs to archive (all 1692 jobs within 7-day window)
[2026-01-15T07:41:43.310Z] [BOT] 💾 Saved posted_jobs.json: 1692 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:41:46.311Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-15T07:41:46.312Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_ab8a4f6b
[2026-01-15T07:41:46.312Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T07:41:46.630Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_ab8a4f6b in #📈・JID_fb739488
  ✅ Industry: Associate Data Scientist @ ORG_ab8a4f6b
[2026-01-15T07:41:48.389Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_ab8a4f6b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T07:41:49.890Z] [BOT] 💾 Marked as posted: Associate Data Scientist @ ORG_ab8a4f6b (instance #1)
[2026-01-15T07:41:49.890Z] [BOT] 💾 BEFORE ARCHIVING: 1693 jobs in database
[2026-01-15T07:41:49.891Z] [BOT] ✅ No jobs to archive (all 1693 jobs within 7-day window)
[2026-01-15T07:41:49.902Z] [BOT] 💾 Saved posted_jobs.json: 1693 active jobs
[2026-01-15T07:41:49.902Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:41:49.902Z] [BOT] 📍 [ROUTING] "2026 BNY Analyst Program-Engineering - Data Science" @ ORG_b344d80e Bank of New York Mellon
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T07:41:50.326Z] [BOT] ✅ Created forum post: 🏢 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon in #📈・JID_fb739488
  ✅ Industry: 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon
[2026-01-15T07:41:52.113Z] [BOT] ✅ Created forum post: 🏢 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T07:41:53.614Z] [BOT] 💾 Marked as posted: 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon (instance #1)
[2026-01-15T07:41:53.615Z] [BOT] 💾 BEFORE ARCHIVING: 1694 jobs in database
[2026-01-15T07:41:53.616Z] [BOT] ✅ No jobs to archive (all 1694 jobs within 7-day window)
[2026-01-15T07:41:53.626Z] [BOT] 💾 Saved posted_jobs.json: 1694 active jobs
[2026-01-15T07:41:53.626Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:41:56.628Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-15T07:41:56.628Z] [BOT] 📍 [ROUTING] "Associate Software Engineer in Test" @ ORG_d0ca1d93 Systems
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T07:41:56.628Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T07:41:56.834Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer in Test @ ORG_d0ca1d93 Systems in #🤖・ai-jobs
  ✅ Industry: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems
[2026-01-15T07:41:58.519Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer in Test @ ORG_d0ca1d93 Systems in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T07:42:00.020Z] [BOT] 💾 Marked as posted: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems (instance #1)
[2026-01-15T07:42:00.020Z] [BOT] 💾 BEFORE ARCHIVING: 1695 jobs in database
[2026-01-15T07:42:00.021Z] [BOT] ✅ No jobs to archive (all 1695 jobs within 7-day window)
[2026-01-15T07:42:00.031Z] [BOT] 💾 Saved posted_jobs.json: 1695 active jobs
[2026-01-15T07:42:00.032Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:42:00.032Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – Seeking 2025 & 2026 Grads - Engineering Development Program" @ ORG_d0ca1d93 Systems
[2026-01-15T07:42:00.032Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T07:42:00.339Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer – Seeking 2025 & 2026 Grads - Engineering Development Program @ ORG_d0ca1d93 in #🤖・ai-jobs
[2026-01-15T07:42:00.339Z] [BOT] ✅ Industry: Associate Software Engineer – Seeking 2025 & 2026 Grads - Engineering Development Program @ ORG_d0ca1d93 Systems
[2026-01-15T07:42:02.150Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer – Seeking 2025 & 2026 Grads - Engineering Development Program @ ORG_d0ca1d93 in #💻・remote-usa
[2026-01-15T07:42:02.150Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T07:42:03.651Z] [BOT] 💾 Marked as posted: Associate Software Engineer – Seeking 2025 & 2026 Grads - Engineering Development Program @ ORG_d0ca1d93 Systems (instance #1)
[2026-01-15T07:42:03.651Z] [BOT] 💾 BEFORE ARCHIVING: 1696 jobs in database
[2026-01-15T07:42:03.653Z] [BOT] ✅ No jobs to archive (all 1696 jobs within 7-day window)
[2026-01-15T07:42:03.666Z] [BOT] 💾 Saved posted_jobs.json: 1696 active jobs
[2026-01-15T07:42:03.666Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:42:03.666Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start" @ ORG_08c9a13c
[2026-01-15T07:42:03.666Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T07:42:03.946Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_75e8f5ac in #🤖・ai-jobs
[2026-01-15T07:42:03.946Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_08c9a13c
[2026-01-15T07:42:05.689Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_75e8f5ac in #🌉・san-francisco
[2026-01-15T07:42:05.689Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T07:42:07.190Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-15T07:42:07.191Z] [BOT] 💾 BEFORE ARCHIVING: 1697 jobs in database
[2026-01-15T07:42:07.192Z] [BOT] ✅ No jobs to archive (all 1697 jobs within 7-day window)
[2026-01-15T07:42:07.205Z] [BOT] 💾 Saved posted_jobs.json: 1697 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:42:07.205Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-15T07:42:07.205Z] [BOT] 💾 BEFORE ARCHIVING: 1698 jobs in database
[2026-01-15T07:42:07.206Z] [BOT] ✅ No jobs to archive (all 1698 jobs within 7-day window)
[2026-01-15T07:42:07.222Z] [BOT] 💾 Saved posted_jobs.json: 1698 active jobs
✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Full Stack Developer" @ ORG_23325912 Global
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T07:42:07.584Z] [BOT] ✅ Created forum post: 🏢 Full Stack Developer @ ORG_23325912 Global in #🤖・ai-jobs
[2026-01-15T07:42:07.584Z] [BOT] ✅ Industry: Full Stack Developer @ ORG_23325912 Global
[2026-01-15T07:42:09.268Z] [BOT] ✅ Created forum post: 🏢 Full Stack Developer @ ORG_23325912 Global in #💻・remote-usa
[2026-01-15T07:42:09.268Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T07:42:10.768Z] [BOT] 💾 Marked as posted: Full Stack Developer @ ORG_23325912 Global (instance #1)
[2026-01-15T07:42:10.769Z] [BOT] 💾 BEFORE ARCHIVING: 1699 jobs in database
[2026-01-15T07:42:10.770Z] [BOT] ✅ No jobs to archive (all 1699 jobs within 7-day window)
[2026-01-15T07:42:10.781Z] [BOT] 💾 Saved posted_jobs.json: 1699 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:42:13.781Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T07:42:13.782Z] [BOT] ⏭️  Skipping duplicate: JID_1e36024d (posted within 7 days)
[2026-01-15T07:42:13.782Z] [BOT] ⏭️  Skipping duplicate: JID_caa9f031-scientist_r0132263-1 (posted within 7 days)
[2026-01-15T07:42:13.782Z] [BOT] ⏭️  Skipping duplicate: JID_38e07217 (posted within 7 days)
⏭️  Skipping duplicate: JID_5cc5ba5b (posted within 7 days)
[2026-01-15T07:42:13.783Z] [BOT] ⏭️  Skipping duplicate: JID_124936eb (posted within 7 days)
[2026-01-15T07:42:13.783Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_96109f8a-detail (posted within 7 days)
[2026-01-15T07:42:13.783Z] [BOT] ⏭️  Skipping duplicate: JID_0f40ceab (posted within 7 days)
[2026-01-15T07:42:13.783Z] [BOT] ⏭️  Skipping duplicate: JID_40e7d34f (posted within 7 days)
[2026-01-15T07:42:13.783Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_fbfd7eeb (posted within 7 days)
[2026-01-15T07:42:13.783Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_4beb9e59-detail (posted within 7 days)
[2026-01-15T07:42:13.895Z] [BOT] ✅ Loaded pending queue: 2731 total (2711 pending, 20 enriched, 0 posted)
[2026-01-15T07:42:14.052Z] [BOT] ✅ Saved pending queue: 2731 total (2711 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-15T07:42:14.053Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T07:42:14.107Z] [BOT] 📂 Loaded 3865 existing routing entries
[2026-01-15T07:42:14.169Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T07:42:14.169Z] [BOT] Total entries: 3875
   Timestamp: 2026-01-15T07:42:14.153Z
[2026-01-15T07:42:14.173Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #🌉・san-francisco: 4 posts
     3. #🤖・ai-jobs: 4 posts
     4. #💻・remote-usa: 3 posts
     5. #📈・JID_fb739488: 2 posts
[STATS] Channel stats saved
[2026-01-15T07:42:16.193Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*