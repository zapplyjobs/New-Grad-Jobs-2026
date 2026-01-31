# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T00:00:23.708Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T23:59:47.680Z] ========================================
[2026-01-30T23:59:47.682Z] Discord Bot Execution Log
[2026-01-30T23:59:47.682Z] Environment: GitHub Actions
[2026-01-30T23:59:47.682Z] Node Version: v20.20.0
[2026-01-30T23:59:47.682Z] ========================================
[2026-01-30T23:59:47.683Z] Environment Variables Check:
[2026-01-30T23:59:47.683Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T23:59:47.683Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T23:59:47.683Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T23:59:47.683Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T23:59:47.683Z] 
Multi-Channel Configuration:
[2026-01-30T23:59:47.683Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T23:59:47.683Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T23:59:47.683Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T23:59:47.683Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T23:59:47.683Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T23:59:47.684Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T23:59:47.684Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T23:59:47.684Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T23:59:47.684Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T23:59:47.684Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T23:59:47.684Z] 
Data Files Check:
[2026-01-30T23:59:47.685Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T23:59:47.714Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5198254 bytes)
[2026-01-30T23:59:47.714Z] 
========================================
[2026-01-30T23:59:47.714Z] Starting Enhanced Discord Bot...
[2026-01-30T23:59:47.714Z] ========================================
[2026-01-30T23:59:48.283Z] [BOT] ✅ Loaded V2 database: 788 jobs
[2026-01-30T23:59:48.871Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T23:59:48.872Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T23:59:48.872Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T23:59:49.003Z] [BOT] ✅ Loaded pending queue: 2945 total (2136 pending, 50 enriched, 759 posted)
[2026-01-30T23:59:49.004Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T23:59:49.004Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T23:59:49.005Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T23:59:49.005Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T23:59:49.005Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T23:59:49.005Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T23:59:49.005Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T23:59:49.006Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-01-30T23:59:49.006Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T23:59:49.006Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T23:59:49.006Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T23:59:49.006Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T23:59:49.007Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-30T23:59:49.007Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T23:59:49.007Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-30T23:59:49.007Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T23:59:49.007Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T23:59:49.007Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-30T23:59:49.008Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T23:59:49.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T23:59:49.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T23:59:49.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T23:59:49.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T23:59:49.014Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T23:59:49.014Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Salesforce at brex
[2026-01-30T23:59:49.014Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Salesforce at brex
🚫 Skipping blacklisted job: Engineering Manager, GTM Engineering  at brex
🚫 Skipping blacklisted job: Engineering Manager, GTM Engineering  at brex
🚫 Skipping blacklisted job: Engineering Manager, GTM Engineering  at brex
[2026-01-30T23:59:49.014Z] [BOT] 🚫 Skipping blacklisted job: Staff Economist at brex
[2026-01-30T23:59:49.135Z] [BOT] ✅ Loaded pending queue: 2945 total (2136 pending, 50 enriched, 759 posted)
[2026-01-30T23:59:49.325Z] [BOT] ✅ Saved pending queue: 2939 total (2136 pending, 44 enriched, 759 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
[2026-01-30T23:59:49.326Z] [BOT] 📋 After blacklist filter: 30 jobs (6 blacklisted)
[2026-01-30T23:59:49.326Z] [BOT] 📋 After data quality filter: 30 jobs (0 invalid)
[2026-01-30T23:59:49.327Z] [BOT] 📋 After multi-location grouping: 29 unique jobs to post
[2026-01-30T23:59:49.327Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ AbbVie: waukegan, cambridge
[2026-01-30T23:59:49.327Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T23:59:49.331Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-30T23:59:49.332Z] [BOT] 📍 [ROUTING] "Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights" @ ORG_1b9f0910
[2026-01-30T23:59:49.332Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T23:59:49.350Z] [BOT ERROR] (node:3217) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T23:59:49.649Z] [BOT] ✅ Posted message: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 in #🤖・ai-jobs
[2026-01-30T23:59:49.649Z] [BOT] ✅ Industry: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910
[2026-01-30T23:59:49.650Z] [BOT] 💾 Added channel posting: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 → category channel (1 total channels)
[2026-01-30T23:59:49.650Z] [BOT] 💾 BEFORE MERGE: 789 jobs in memory (cached)
[2026-01-30T23:59:49.669Z] [BOT] ✅ Loaded V2 database: 788 jobs
💾 DISK STATE: 788 jobs on disk
[2026-01-30T23:59:49.670Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=789
[2026-01-30T23:59:49.672Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:59:49.672Z] [BOT] 💾 AFTER MERGE: 789 jobs (merged disk + memory)
[2026-01-30T23:59:49.673Z] [BOT] ✅ No jobs to archive (all 789 jobs within 7-day window)
[2026-01-30T23:59:49.735Z] [BOT] 💾 Saved posted_jobs.json: 789 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:59:51.238Z] [BOT] 📍 [ROUTING] "Enterprise Application AI Architect" @ gusto
   Category: AI (matched: "AI/ML")
[2026-01-30T23:59:51.238Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T23:59:51.437Z] [BOT] ✅ Posted message: Enterprise Application AI Architect @ gusto in #🤖・ai-jobs
  ✅ Industry: Enterprise Application AI Architect @ gusto
[2026-01-30T23:59:51.437Z] [BOT] 💾 Added channel posting: Enterprise Application AI Architect @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 790 jobs in memory (cached)
[2026-01-30T23:59:51.453Z] [BOT] ✅ Loaded V2 database: 789 jobs
💾 DISK STATE: 789 jobs on disk
[2026-01-30T23:59:51.453Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=790
[2026-01-30T23:59:51.455Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:59:51.455Z] [BOT] 💾 AFTER MERGE: 790 jobs (merged disk + memory)
[2026-01-30T23:59:51.456Z] [BOT] ✅ No jobs to archive (all 790 jobs within 7-day window)
[2026-01-30T23:59:51.507Z] [BOT] 💾 Saved posted_jobs.json: 790 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:59:56.009Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-30T23:59:56.009Z] [BOT] 📍 [ROUTING] "People Tech Integrations Developer" @ gusto
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:59:56.180Z] [BOT] ✅ Posted message: People Tech Integrations Developer @ gusto in #💻・tech-jobs
[2026-01-30T23:59:56.180Z] [BOT] ✅ Industry: People Tech Integrations Developer @ gusto
[2026-01-30T23:59:56.181Z] [BOT] 💾 Added channel posting: People Tech Integrations Developer @ gusto → category channel (1 total channels)
[2026-01-30T23:59:56.181Z] [BOT] 💾 BEFORE MERGE: 791 jobs in memory (cached)
[2026-01-30T23:59:56.196Z] [BOT] ✅ Loaded V2 database: 790 jobs
💾 DISK STATE: 790 jobs on disk
[2026-01-30T23:59:56.196Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=791
[2026-01-30T23:59:56.198Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:59:56.198Z] [BOT] 💾 AFTER MERGE: 791 jobs (merged disk + memory)
[2026-01-30T23:59:56.199Z] [BOT] ✅ No jobs to archive (all 791 jobs within 7-day window)
[2026-01-30T23:59:56.250Z] [BOT] 💾 Saved posted_jobs.json: 791 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:59:57.752Z] [BOT] 📍 [ROUTING] "Executive Operations R&D" @ gusto
[2026-01-30T23:59:57.752Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:59:57.957Z] [BOT] ✅ Posted message: Executive Operations R&D @ gusto in #💻・tech-jobs
  ✅ Industry: Executive Operations R&D @ gusto
[2026-01-30T23:59:57.958Z] [BOT] 💾 Added channel posting: Executive Operations R&D @ gusto → category channel (1 total channels)
[2026-01-30T23:59:57.958Z] [BOT] 💾 BEFORE MERGE: 792 jobs in memory (cached)
[2026-01-30T23:59:57.988Z] [BOT] ✅ Loaded V2 database: 791 jobs
[2026-01-30T23:59:57.990Z] [BOT] 💾 DISK STATE: 791 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=792
[2026-01-30T23:59:57.991Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:59:57.991Z] [BOT] 💾 AFTER MERGE: 792 jobs (merged disk + memory)
[2026-01-30T23:59:57.992Z] [BOT] ✅ No jobs to archive (all 792 jobs within 7-day window)
[2026-01-30T23:59:58.058Z] [BOT] 💾 Saved posted_jobs.json: 792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:59:59.557Z] [BOT] 📍 [ROUTING] "Sr. Platform Engineer" @ gusto
   Category: TECH (matched: "data engineer")
[2026-01-30T23:59:59.557Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T00:00:00.001Z] [BOT] ✅ Posted message: Sr. Platform Engineer @ gusto in #💻・tech-jobs
  ✅ Industry: Sr. Platform Engineer @ gusto
[2026-01-31T00:00:00.001Z] [BOT] 💾 Added channel posting: Sr. Platform Engineer @ gusto → category channel (1 total channels)
[2026-01-31T00:00:00.001Z] [BOT] 💾 BEFORE MERGE: 793 jobs in memory (cached)
[2026-01-31T00:00:00.017Z] [BOT] ✅ Loaded V2 database: 792 jobs
💾 DISK STATE: 792 jobs on disk
[2026-01-31T00:00:00.017Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=793
[2026-01-31T00:00:00.019Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T00:00:00.020Z] [BOT] 💾 AFTER MERGE: 793 jobs (merged disk + memory)
[2026-01-31T00:00:00.020Z] [BOT] ✅ No jobs to archive (all 793 jobs within 7-day window)
[2026-01-31T00:00:00.079Z] [BOT] 💾 Saved posted_jobs.json: 793 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:00:01.581Z] [BOT] 📍 [ROUTING] "Future Opportunities: Benefits Advocate" @ gusto
[2026-01-31T00:00:01.582Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T00:00:01.819Z] [BOT] ✅ Posted message: Future Opportunities: Benefits Advocate @ gusto in #💻・tech-jobs
  ✅ Industry: Future Opportunities: Benefits Advocate @ gusto
[2026-01-31T00:00:01.820Z] [BOT] 💾 Added channel posting: Future Opportunities: Benefits Advocate @ gusto → category channel (1 total channels)
[2026-01-31T00:00:01.820Z] [BOT] 💾 BEFORE MERGE: 794 jobs in memory (cached)
[2026-01-31T00:00:01.836Z] [BOT] ✅ Loaded V2 database: 793 jobs
💾 DISK STATE: 793 jobs on disk
[2026-01-31T00:00:01.836Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=794
[2026-01-31T00:00:01.838Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 794 jobs (merged disk + memory)
[2026-01-31T00:00:01.839Z] [BOT] ✅ No jobs to archive (all 794 jobs within 7-day window)
[2026-01-31T00:00:01.890Z] [BOT] 💾 Saved posted_jobs.json: 794 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:00:03.391Z] [BOT] 📍 [ROUTING] "Future Opportunities: Payroll Advocate" @ gusto
   Category: TECH (default)
[2026-01-31T00:00:03.392Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T00:00:03.849Z] [BOT] ✅ Posted message: Future Opportunities: Payroll Advocate @ gusto in #💻・tech-jobs
  ✅ Industry: Future Opportunities: Payroll Advocate @ gusto
[2026-01-31T00:00:03.850Z] [BOT] 💾 Added channel posting: Future Opportunities: Payroll Advocate @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 795 jobs in memory (cached)
[2026-01-31T00:00:03.867Z] [BOT] ✅ Loaded V2 database: 794 jobs
💾 DISK STATE: 794 jobs on disk
[2026-01-31T00:00:03.867Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=795
[2026-01-31T00:00:03.869Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T00:00:03.869Z] [BOT] 💾 AFTER MERGE: 795 jobs (merged disk + memory)
[2026-01-31T00:00:03.870Z] [BOT] ✅ No jobs to archive (all 795 jobs within 7-day window)
[2026-01-31T00:00:03.930Z] [BOT] 💾 Saved posted_jobs.json: 795 active jobs
[2026-01-31T00:00:03.931Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T00:00:05.431Z] [BOT] 📍 [ROUTING] "Future Opportunities: Retirement Advocate" @ gusto
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T00:00:06.025Z] [BOT] ✅ Posted message: Future Opportunities: Retirement Advocate @ gusto in #💻・tech-jobs
  ✅ Industry: Future Opportunities: Retirement Advocate @ gusto
[2026-01-31T00:00:06.026Z] [BOT] 💾 Added channel posting: Future Opportunities: Retirement Advocate @ gusto → category channel (1 total channels)
[2026-01-31T00:00:06.026Z] [BOT] 💾 BEFORE MERGE: 796 jobs in memory (cached)
[2026-01-31T00:00:06.042Z] [BOT] ✅ Loaded V2 database: 795 jobs
💾 DISK STATE: 795 jobs on disk
[2026-01-31T00:00:06.042Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=796
[2026-01-31T00:00:06.044Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T00:00:06.044Z] [BOT] 💾 AFTER MERGE: 796 jobs (merged disk + memory)
[2026-01-31T00:00:06.044Z] [BOT] ✅ No jobs to archive (all 796 jobs within 7-day window)
[2026-01-31T00:00:06.097Z] [BOT] 💾 Saved posted_jobs.json: 796 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:00:10.599Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T00:00:10.600Z] [BOT] 📍 [ROUTING] "People Technology Workday Developer" @ gusto
   Category: DATA-SCIENCE (matched: "analytics")
[2026-01-31T00:00:10.600Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T00:00:10.882Z] [BOT] ✅ Posted message: People Technology Workday Developer @ gusto in #📊・JID_fb739488
  ✅ Industry: People Technology Workday Developer @ gusto
[2026-01-31T00:00:10.883Z] [BOT] 💾 Added channel posting: People Technology Workday Developer @ gusto → category channel (1 total channels)
[2026-01-31T00:00:10.883Z] [BOT] 💾 BEFORE MERGE: 797 jobs in memory (cached)
[2026-01-31T00:00:10.898Z] [BOT] ✅ Loaded V2 database: 796 jobs
💾 DISK STATE: 796 jobs on disk
[2026-01-31T00:00:10.898Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=797
[2026-01-31T00:00:10.900Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T00:00:10.900Z] [BOT] 💾 AFTER MERGE: 797 jobs (merged disk + memory)
[2026-01-31T00:00:10.901Z] [BOT] ✅ No jobs to archive (all 797 jobs within 7-day window)
[2026-01-31T00:00:10.952Z] [BOT] 💾 Saved posted_jobs.json: 797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:00:15.453Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-31T00:00:15.455Z] [BOT] 📍 [ROUTING] "Head of Business Systems Analysts, Revenue" @ gusto
[2026-01-31T00:00:15.455Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T00:00:15.772Z] [BOT] ✅ Posted message: Head of Business Systems Analysts, Revenue @ gusto in #💰・finance-jobs
[2026-01-31T00:00:15.773Z] [BOT] ✅ Industry: Head of Business Systems Analysts, Revenue @ gusto
[2026-01-31T00:00:15.773Z] [BOT] 💾 Added channel posting: Head of Business Systems Analysts, Revenue @ gusto → category channel (1 total channels)
[2026-01-31T00:00:15.773Z] [BOT] 💾 BEFORE MERGE: 798 jobs in memory (cached)
[2026-01-31T00:00:15.789Z] [BOT] ✅ Loaded V2 database: 797 jobs
💾 DISK STATE: 797 jobs on disk
[2026-01-31T00:00:15.789Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=798
[2026-01-31T00:00:15.791Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 798 jobs (merged disk + memory)
[2026-01-31T00:00:15.792Z] [BOT] ✅ No jobs to archive (all 798 jobs within 7-day window)
[2026-01-31T00:00:15.842Z] [BOT] 💾 Saved posted_jobs.json: 798 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:00:20.345Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T00:00:20.346Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_74d11c99..." not found, but found as SHA256 "2a88394df0a5bcaa"
[2026-01-31T00:00:20.346Z] [BOT] ⏭️  Skipping duplicate: JID_09f269c8 (posted within 7 days)
[2026-01-31T00:00:20.346Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_39e4385b..." not found, but found as SHA256 "93ae27295d0e497d"
⏭️  Skipping duplicate: JID_db8248a9 (posted within 7 days)
[2026-01-31T00:00:20.347Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_39e4385b..." not found, but found as SHA256 "4e79685dbacb6172"
[2026-01-31T00:00:20.347Z] [BOT] ⏭️  Skipping duplicate: JID_5382cd2b (posted within 7 days)
[2026-01-31T00:00:20.347Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_de79313d..." not found, but found as SHA256 "d1ecbd9fd7eb7937"
[2026-01-31T00:00:20.347Z] [BOT] ⏭️  Skipping duplicate: JID_bc52b898 (posted within 7 days)
[2026-01-31T00:00:20.348Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8d08e91d..." not found, but found as SHA256 "c144bced3c7237fa"
⏭️  Skipping duplicate: JID_70fb3976 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_dda01a7b..." not found, but found as SHA256 "66f041d6c7d44f4c"
⏭️  Skipping duplicate: JID_91470a5e (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_dda01a7b..." not found, but found as SHA256 "dd5d32519d57db9a"
⏭️  Skipping duplicate: JID_426660b7 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_dda01a7b..." not found, but found as SHA256 "644ec1cb476318d5"
⏭️  Skipping duplicate: JID_5def375d (posted within 7 days)
[2026-01-31T00:00:20.348Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b4a99673..." not found, but found as SHA256 "c6b9a4922191fc8c"
⏭️  Skipping duplicate: JID_f4a28838 (posted within 7 days)
[2026-01-31T00:00:20.348Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e6c938e2..." not found, but found as SHA256 "4077ddb04db17523"
⏭️  Skipping duplicate: JID_e5f75dc6 (posted within 7 days)
[2026-01-31T00:00:20.461Z] [BOT] ✅ Loaded pending queue: 2939 total (2136 pending, 44 enriched, 759 posted)
[2026-01-31T00:00:20.649Z] [BOT] ✅ Saved pending queue: 2939 total (2136 pending, 34 enriched, 769 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T00:00:20.649Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T00:00:20.735Z] [BOT] 📂 Loaded 10850 existing routing entries
[2026-01-31T00:00:20.882Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T00:00:20.882Z] [BOT] New entries: 10
   Total entries: 10860
   Timestamp: 2026-01-31T00:00:20.818Z
[2026-01-31T00:00:20.883Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T00:00:20.883Z] [BOT] Total attempts: 30
   Successful: 10
   Failed: 0
   Skipped: 20
[2026-01-31T00:00:20.883Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T00:00:20.883Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 2 posts
     3. #📊・JID_fb739488: 1 posts
[2026-01-31T00:00:20.884Z] [BOT] 4. #💰・finance-jobs: 1 posts
[2026-01-31T00:00:20.884Z] [BOT] [STATS] Channel stats saved
[2026-01-31T00:00:20.884Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 798 jobs in memory (cached)
[2026-01-31T00:00:20.900Z] [BOT] ✅ Loaded V2 database: 798 jobs
💾 DISK STATE: 798 jobs on disk
[2026-01-31T00:00:20.900Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=798
[2026-01-31T00:00:20.902Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T00:00:20.902Z] [BOT] 💾 AFTER MERGE: 798 jobs (merged disk + memory)
[2026-01-31T00:00:20.903Z] [BOT] ✅ No jobs to archive (all 798 jobs within 7-day window)
[2026-01-31T00:00:20.953Z] [BOT] 💾 Saved posted_jobs.json: 798 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:00:20.954Z] [BOT] ✅ Database saved successfully
[2026-01-31T00:00:22.984Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3217) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*