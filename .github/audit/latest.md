# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T11:50:18.842Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T11:49:31.344Z] ========================================
[2026-02-01T11:49:31.346Z] Discord Bot Execution Log
[2026-02-01T11:49:31.346Z] Environment: GitHub Actions
[2026-02-01T11:49:31.346Z] Node Version: v20.20.0
[2026-02-01T11:49:31.346Z] ========================================
[2026-02-01T11:49:31.346Z] Environment Variables Check:
[2026-02-01T11:49:31.346Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T11:49:31.346Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T11:49:31.346Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T11:49:31.346Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T11:49:31.346Z] 
Multi-Channel Configuration:
[2026-02-01T11:49:31.347Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T11:49:31.347Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:49:31.347Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:49:31.347Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T11:49:31.347Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:49:31.347Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:49:31.347Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:49:31.347Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:49:31.347Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T11:49:31.347Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T11:49:31.347Z] 
Data Files Check:
[2026-02-01T11:49:31.348Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58377 bytes)
[2026-02-01T11:49:31.410Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9742014 bytes)
[2026-02-01T11:49:31.410Z] 
========================================
[2026-02-01T11:49:31.410Z] Starting Enhanced Discord Bot...
[2026-02-01T11:49:31.410Z] ========================================
[2026-02-01T11:49:31.926Z] [BOT] ✅ Loaded V2 database: 1827 jobs
[2026-02-01T11:49:32.542Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T11:49:32.542Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T11:49:32.542Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T11:49:32.696Z] [BOT] ✅ Loaded pending queue: 2948 total (1081 pending, 50 enriched, 1817 posted)
[2026-02-01T11:49:32.696Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T11:49:32.697Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T11:49:32.698Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T11:49:32.698Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T11:49:32.698Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T11:49:32.698Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-02-01T11:49:32.699Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T11:49:32.699Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T11:49:32.699Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T11:49:32.700Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T11:49:32.700Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T11:49:32.700Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T11:49:32.700Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T11:49:32.700Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T11:49:32.701Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T11:49:32.701Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
[2026-02-01T11:49:32.701Z] [BOT] ⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T11:49:32.711Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T11:49:32.711Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T11:49:32.711Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T11:49:32.712Z] [BOT] 📋 After multi-location grouping: 40 unique jobs to post
[2026-02-01T11:49:32.712Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Cloud Network Engineer Graduate(Physical Network Infra) @ ByteDance: san jose, seattle
   - Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T11:49:32.715Z] [BOT] 📌 Posting 10 jobs to #💻・tech-jobs
[2026-02-01T11:49:32.716Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-02-01T11:49:32.716Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:49:32.732Z] [BOT ERROR] (node:4572) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T11:49:32.947Z] [BOT] ✅ Posted message: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c in #💻・tech-jobs
[2026-02-01T11:49:32.947Z] [BOT] ✅ Industry: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c
[2026-02-01T11:49:32.948Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T11:49:32.948Z] [BOT] 💾 BEFORE MERGE: 1828 jobs in memory (cached)
[2026-02-01T11:49:33.004Z] [BOT] ✅ Loaded V2 database: 1827 jobs
💾 DISK STATE: 1827 jobs on disk
[2026-02-01T11:49:33.005Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1828
[2026-02-01T11:49:33.009Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:49:33.009Z] [BOT] 💾 AFTER MERGE: 1828 jobs (merged disk + memory)
[2026-02-01T11:49:33.011Z] [BOT] ✅ No jobs to archive (all 1828 jobs within 7-day window)
[2026-02-01T11:49:33.147Z] [BOT] 💾 Saved posted_jobs.json: 1828 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:49:35.019Z] [BOT] ✅ Posted message: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T11:49:35.019Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:49:35.019Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:49:35.020Z] [BOT] 💾 BEFORE MERGE: 1828 jobs in memory (cached)
[2026-02-01T11:49:35.073Z] [BOT] ✅ Loaded V2 database: 1828 jobs
💾 DISK STATE: 1828 jobs on disk
[2026-02-01T11:49:35.073Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1828
[2026-02-01T11:49:35.077Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:49:35.077Z] [BOT] 💾 AFTER MERGE: 1828 jobs (merged disk + memory)
[2026-02-01T11:49:35.079Z] [BOT] ✅ No jobs to archive (all 1828 jobs within 7-day window)
[2026-02-01T11:49:35.187Z] [BOT] 💾 Saved posted_jobs.json: 1828 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:49:36.690Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Cloud Native Infrastructure" @ ORG_08c9a13c
[2026-02-01T11:49:36.691Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:49:36.922Z] [BOT] ✅ Posted message: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c
[2026-02-01T11:49:36.923Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T11:49:36.923Z] [BOT] 💾 BEFORE MERGE: 1829 jobs in memory (cached)
[2026-02-01T11:49:36.971Z] [BOT] ✅ Loaded V2 database: 1828 jobs
💾 DISK STATE: 1828 jobs on disk
[2026-02-01T11:49:36.972Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1829
[2026-02-01T11:49:36.975Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:49:36.975Z] [BOT] 💾 AFTER MERGE: 1829 jobs (merged disk + memory)
[2026-02-01T11:49:36.977Z] [BOT] ✅ No jobs to archive (all 1829 jobs within 7-day window)
[2026-02-01T11:49:37.090Z] [BOT] 💾 Saved posted_jobs.json: 1829 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:49:38.954Z] [BOT] ✅ Posted message: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T11:49:38.954Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:49:38.955Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:49:38.955Z] [BOT] 💾 BEFORE MERGE: 1829 jobs in memory (cached)
[2026-02-01T11:49:39.003Z] [BOT] ✅ Loaded V2 database: 1829 jobs
💾 DISK STATE: 1829 jobs on disk
[2026-02-01T11:49:39.004Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1829
[2026-02-01T11:49:39.007Z] [BOT] 🔀 Deep merged: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:49:39.008Z] [BOT] 💾 AFTER MERGE: 1829 jobs (merged disk + memory)
[2026-02-01T11:49:39.009Z] [BOT] ✅ No jobs to archive (all 1829 jobs within 7-day window)
[2026-02-01T11:49:39.125Z] [BOT] 💾 Saved posted_jobs.json: 1829 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:49:40.627Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Production Infrastructure" @ ORG_f56b7436
[2026-02-01T11:49:40.627Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:49:41.116Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 in #💻・tech-jobs
[2026-02-01T11:49:41.116Z] [BOT] ✅ Industry: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436
[2026-02-01T11:49:41.117Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 → category channel (1 total channels)
[2026-02-01T11:49:41.117Z] [BOT] 💾 BEFORE MERGE: 1830 jobs in memory (cached)
[2026-02-01T11:49:41.171Z] [BOT] ✅ Loaded V2 database: 1829 jobs
💾 DISK STATE: 1829 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1830
[2026-02-01T11:49:41.178Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:49:41.178Z] [BOT] 💾 AFTER MERGE: 1830 jobs (merged disk + memory)
[2026-02-01T11:49:41.188Z] [BOT] ✅ No jobs to archive (all 1830 jobs within 7-day window)
[2026-02-01T11:49:41.299Z] [BOT] 💾 Saved posted_jobs.json: 1830 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:49:43.322Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 in #📍・JID_6daed763
[2026-02-01T11:49:43.323Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T11:49:43.323Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 → location channel (2 total channels)
[2026-02-01T11:49:43.323Z] [BOT] 💾 BEFORE MERGE: 1830 jobs in memory (cached)
[2026-02-01T11:49:43.372Z] [BOT] ✅ Loaded V2 database: 1830 jobs
[2026-02-01T11:49:43.372Z] [BOT] 💾 DISK STATE: 1830 jobs on disk
[2026-02-01T11:49:43.372Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1830
[2026-02-01T11:49:43.375Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:49:43.375Z] [BOT] 💾 AFTER MERGE: 1830 jobs (merged disk + memory)
[2026-02-01T11:49:43.376Z] [BOT] ✅ No jobs to archive (all 1830 jobs within 7-day window)
[2026-02-01T11:49:43.482Z] [BOT] 💾 Saved posted_jobs.json: 1830 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:49:44.984Z] [BOT] 📍 [ROUTING] "Cloud Network Engineer Graduate(Physical Network Infra)" @ ORG_08c9a13c
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T11:49:44.985Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:49:45.269Z] [BOT] ✅ Posted message: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c in #💻・tech-jobs
[2026-02-01T11:49:45.269Z] [BOT] ✅ Industry: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c
[2026-02-01T11:49:45.270Z] [BOT] 💾 Added channel posting: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T11:49:45.270Z] [BOT] 💾 BEFORE MERGE: 1831 jobs in memory (cached)
[2026-02-01T11:49:45.321Z] [BOT] ✅ Loaded V2 database: 1830 jobs
💾 DISK STATE: 1830 jobs on disk
[2026-02-01T11:49:45.321Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1831
[2026-02-01T11:49:45.324Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:49:45.324Z] [BOT] 💾 AFTER MERGE: 1831 jobs (merged disk + memory)
[2026-02-01T11:49:45.325Z] [BOT] ✅ No jobs to archive (all 1831 jobs within 7-day window)
[2026-02-01T11:49:45.450Z] [BOT] 💾 Saved posted_jobs.json: 1831 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:49:47.189Z] [BOT] ✅ Posted message: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:49:47.190Z] [BOT] 💾 Added channel posting: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:49:47.190Z] [BOT] 💾 BEFORE MERGE: 1831 jobs in memory (cached)
[2026-02-01T11:49:47.239Z] [BOT] ✅ Loaded V2 database: 1831 jobs
💾 DISK STATE: 1831 jobs on disk
[2026-02-01T11:49:47.239Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1831
[2026-02-01T11:49:47.243Z] [BOT] 🔀 Deep merged: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:49:47.243Z] [BOT] 💾 AFTER MERGE: 1831 jobs (merged disk + memory)
[2026-02-01T11:49:47.244Z] [BOT] ✅ No jobs to archive (all 1831 jobs within 7-day window)
[2026-02-01T11:49:47.350Z] [BOT] 💾 Saved posted_jobs.json: 1831 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:49:48.851Z] [BOT] 📍 [ROUTING] "Network Engineer Graduate (Physical Network Infra)" @ ORG_08c9a13c
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T11:49:48.852Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:49:49.065Z] [BOT] ✅ Posted message: Network Engineer Graduate (Physical Network Infra) @ ORG_08c9a13c in #💻・tech-jobs
[2026-02-01T11:49:49.065Z] [BOT] ✅ Industry: Network Engineer Graduate (Physical Network Infra) @ ORG_08c9a13c
[2026-02-01T11:49:49.066Z] [BOT] 💾 Added channel posting: Network Engineer Graduate (Physical Network Infra) @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T11:49:49.067Z] [BOT] 💾 BEFORE MERGE: 1832 jobs in memory (cached)
[2026-02-01T11:49:49.117Z] [BOT] ✅ Loaded V2 database: 1831 jobs
💾 DISK STATE: 1831 jobs on disk
[2026-02-01T11:49:49.118Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1832
[2026-02-01T11:49:49.121Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:49:49.121Z] [BOT] 💾 AFTER MERGE: 1832 jobs (merged disk + memory)
[2026-02-01T11:49:49.122Z] [BOT] ✅ No jobs to archive (all 1832 jobs within 7-day window)
[2026-02-01T11:49:49.228Z] [BOT] 💾 Saved posted_jobs.json: 1832 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:49:50.902Z] [BOT] ✅ Posted message: Network Engineer Graduate (Physical Network Infra) @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:49:50.902Z] [BOT] 💾 Added channel posting: Network Engineer Graduate (Physical Network Infra) @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:49:50.902Z] [BOT] 💾 BEFORE MERGE: 1832 jobs in memory (cached)
[2026-02-01T11:49:50.951Z] [BOT] ✅ Loaded V2 database: 1832 jobs
💾 DISK STATE: 1832 jobs on disk
[2026-02-01T11:49:50.952Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1832
[2026-02-01T11:49:50.955Z] [BOT] 🔀 Deep merged: Network Engineer Graduate (Physical Network Infra) @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:49:50.955Z] [BOT] 💾 AFTER MERGE: 1832 jobs (merged disk + memory)
[2026-02-01T11:49:50.956Z] [BOT] ✅ No jobs to archive (all 1832 jobs within 7-day window)
[2026-02-01T11:49:51.067Z] [BOT] 💾 Saved posted_jobs.json: 1832 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:49:52.571Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Edge Platform)" @ ORG_08c9a13c
[2026-02-01T11:49:52.571Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:49:52.814Z] [BOT] ✅ Posted message: Software Engineer Graduate (Edge Platform) @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (Edge Platform) @ ORG_08c9a13c
[2026-02-01T11:49:52.815Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Edge Platform) @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T11:49:52.815Z] [BOT] 💾 BEFORE MERGE: 1833 jobs in memory (cached)
[2026-02-01T11:49:52.864Z] [BOT] ✅ Loaded V2 database: 1832 jobs
💾 DISK STATE: 1832 jobs on disk
[2026-02-01T11:49:52.864Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1833
[2026-02-01T11:49:52.868Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:49:52.868Z] [BOT] 💾 AFTER MERGE: 1833 jobs (merged disk + memory)
[2026-02-01T11:49:52.869Z] [BOT] ✅ No jobs to archive (all 1833 jobs within 7-day window)
[2026-02-01T11:49:52.981Z] [BOT] 💾 Saved posted_jobs.json: 1833 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:49:54.730Z] [BOT] ✅ Posted message: Software Engineer Graduate (Edge Platform) @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:49:54.731Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Edge Platform) @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:49:54.731Z] [BOT] 💾 BEFORE MERGE: 1833 jobs in memory (cached)
[2026-02-01T11:49:54.785Z] [BOT] ✅ Loaded V2 database: 1833 jobs
💾 DISK STATE: 1833 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1833
[2026-02-01T11:49:54.791Z] [BOT] 🔀 Deep merged: Software Engineer Graduate (Edge Platform) @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:49:54.800Z] [BOT] 💾 AFTER MERGE: 1833 jobs (merged disk + memory)
✅ No jobs to archive (all 1833 jobs within 7-day window)
[2026-02-01T11:49:54.905Z] [BOT] 💾 Saved posted_jobs.json: 1833 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:49:56.406Z] [BOT] 📍 [ROUTING] "Site Reliability Engineer Graduate (Data Infrastructure)" @ ORG_08c9a13c
   Category: TECH (matched: "data")
[2026-02-01T11:49:56.406Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:49:56.621Z] [BOT] ✅ Posted message: Site Reliability Engineer Graduate (Data Infrastructure) @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Site Reliability Engineer Graduate (Data Infrastructure) @ ORG_08c9a13c
[2026-02-01T11:49:56.622Z] [BOT] 💾 Added channel posting: Site Reliability Engineer Graduate (Data Infrastructure) @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T11:49:56.622Z] [BOT] 💾 BEFORE MERGE: 1834 jobs in memory (cached)
[2026-02-01T11:49:56.670Z] [BOT] ✅ Loaded V2 database: 1833 jobs
💾 DISK STATE: 1833 jobs on disk
[2026-02-01T11:49:56.670Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1834
[2026-02-01T11:49:56.673Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:49:56.673Z] [BOT] 💾 AFTER MERGE: 1834 jobs (merged disk + memory)
[2026-02-01T11:49:56.675Z] [BOT] ✅ No jobs to archive (all 1834 jobs within 7-day window)
[2026-02-01T11:49:56.779Z] [BOT] 💾 Saved posted_jobs.json: 1834 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:49:58.560Z] [BOT] ✅ Posted message: Site Reliability Engineer Graduate (Data Infrastructure) @ ORG_08c9a13c in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T11:49:58.561Z] [BOT] 💾 Added channel posting: Site Reliability Engineer Graduate (Data Infrastructure) @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T11:49:58.561Z] [BOT] 💾 BEFORE MERGE: 1834 jobs in memory (cached)
[2026-02-01T11:49:58.612Z] [BOT] ✅ Loaded V2 database: 1834 jobs
💾 DISK STATE: 1834 jobs on disk
[2026-02-01T11:49:58.612Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1834
[2026-02-01T11:49:58.615Z] [BOT] 🔀 Deep merged: Site Reliability Engineer Graduate (Data Infrastructure) @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:49:58.615Z] [BOT] 💾 AFTER MERGE: 1834 jobs (merged disk + memory)
[2026-02-01T11:49:58.616Z] [BOT] ✅ No jobs to archive (all 1834 jobs within 7-day window)
[2026-02-01T11:49:58.724Z] [BOT] 💾 Saved posted_jobs.json: 1834 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:50:00.226Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Commerce Ads)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:50:00.549Z] [BOT] ✅ Posted message: Software Engineer Graduate (Commerce Ads) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (Commerce Ads) @ ORG_1bb6fcfb
[2026-02-01T11:50:00.550Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Commerce Ads) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T11:50:00.550Z] [BOT] 💾 BEFORE MERGE: 1835 jobs in memory (cached)
[2026-02-01T11:50:00.599Z] [BOT] ✅ Loaded V2 database: 1834 jobs
💾 DISK STATE: 1834 jobs on disk
[2026-02-01T11:50:00.599Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1835
[2026-02-01T11:50:00.602Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:50:00.603Z] [BOT] 💾 AFTER MERGE: 1835 jobs (merged disk + memory)
[2026-02-01T11:50:00.604Z] [BOT] ✅ No jobs to archive (all 1835 jobs within 7-day window)
[2026-02-01T11:50:00.717Z] [BOT] 💾 Saved posted_jobs.json: 1835 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:50:02.390Z] [BOT] ✅ Posted message: Software Engineer Graduate (Commerce Ads) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:50:02.390Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Commerce Ads) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T11:50:02.390Z] [BOT] 💾 BEFORE MERGE: 1835 jobs in memory (cached)
[2026-02-01T11:50:02.439Z] [BOT] ✅ Loaded V2 database: 1835 jobs
💾 DISK STATE: 1835 jobs on disk
[2026-02-01T11:50:02.440Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1835
[2026-02-01T11:50:02.443Z] [BOT] 🔀 Deep merged: Software Engineer Graduate (Commerce Ads) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:50:02.443Z] [BOT] 💾 AFTER MERGE: 1835 jobs (merged disk + memory)
[2026-02-01T11:50:02.444Z] [BOT] ✅ No jobs to archive (all 1835 jobs within 7-day window)
[2026-02-01T11:50:02.556Z] [BOT] 💾 Saved posted_jobs.json: 1835 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:50:04.059Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Media Platform)" @ ORG_1bb6fcfb
[2026-02-01T11:50:04.059Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:50:04.242Z] [BOT] ✅ Posted message: Software Engineer Graduate (Media Platform) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (Media Platform) @ ORG_1bb6fcfb
[2026-02-01T11:50:04.243Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Media Platform) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T11:50:04.243Z] [BOT] 💾 BEFORE MERGE: 1836 jobs in memory (cached)
[2026-02-01T11:50:04.291Z] [BOT] ✅ Loaded V2 database: 1835 jobs
💾 DISK STATE: 1835 jobs on disk
[2026-02-01T11:50:04.291Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1836
[2026-02-01T11:50:04.295Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:50:04.295Z] [BOT] 💾 AFTER MERGE: 1836 jobs (merged disk + memory)
[2026-02-01T11:50:04.297Z] [BOT] ✅ No jobs to archive (all 1836 jobs within 7-day window)
[2026-02-01T11:50:04.400Z] [BOT] 💾 Saved posted_jobs.json: 1836 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:50:06.330Z] [BOT] ✅ Posted message: Software Engineer Graduate (Media Platform) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:50:06.331Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Media Platform) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T11:50:06.331Z] [BOT] 💾 BEFORE MERGE: 1836 jobs in memory (cached)
[2026-02-01T11:50:06.379Z] [BOT] ✅ Loaded V2 database: 1836 jobs
💾 DISK STATE: 1836 jobs on disk
[2026-02-01T11:50:06.380Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1836
[2026-02-01T11:50:06.383Z] [BOT] 🔀 Deep merged: Software Engineer Graduate (Media Platform) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:50:06.383Z] [BOT] 💾 AFTER MERGE: 1836 jobs (merged disk + memory)
[2026-02-01T11:50:06.384Z] [BOT] ✅ No jobs to archive (all 1836 jobs within 7-day window)
[2026-02-01T11:50:06.499Z] [BOT] 💾 Saved posted_jobs.json: 1836 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:50:08.001Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Foundation Platform)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-02-01T11:50:08.001Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T11:50:08.215Z] [BOT] ✅ Posted message: Software Engineer Graduate (Foundation Platform) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (Foundation Platform) @ ORG_1bb6fcfb
[2026-02-01T11:50:08.216Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Foundation Platform) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T11:50:08.216Z] [BOT] 💾 BEFORE MERGE: 1837 jobs in memory (cached)
[2026-02-01T11:50:08.265Z] [BOT] ✅ Loaded V2 database: 1836 jobs
💾 DISK STATE: 1836 jobs on disk
[2026-02-01T11:50:08.266Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1837
[2026-02-01T11:50:08.269Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:50:08.269Z] [BOT] 💾 AFTER MERGE: 1837 jobs (merged disk + memory)
[2026-02-01T11:50:08.270Z] [BOT] ✅ No jobs to archive (all 1837 jobs within 7-day window)
[2026-02-01T11:50:08.382Z] [BOT] 💾 Saved posted_jobs.json: 1837 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:50:10.091Z] [BOT] ✅ Posted message: Software Engineer Graduate (Foundation Platform) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T11:50:10.091Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T11:50:10.091Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Foundation Platform) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T11:50:10.091Z] [BOT] 💾 BEFORE MERGE: 1837 jobs in memory (cached)
[2026-02-01T11:50:10.140Z] [BOT] ✅ Loaded V2 database: 1837 jobs
💾 DISK STATE: 1837 jobs on disk
[2026-02-01T11:50:10.141Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1837
[2026-02-01T11:50:10.144Z] [BOT] 🔀 Deep merged: Software Engineer Graduate (Foundation Platform) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T11:50:10.144Z] [BOT] 💾 AFTER MERGE: 1837 jobs (merged disk + memory)
[2026-02-01T11:50:10.145Z] [BOT] ✅ No jobs to archive (all 1837 jobs within 7-day window)
[2026-02-01T11:50:10.264Z] [BOT] 💾 Saved posted_jobs.json: 1837 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:50:14.764Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T11:50:14.765Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_90d6291a..." not found, but found as SHA256 "803fb674be7e3195"
[2026-02-01T11:50:14.765Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_6d7d5f71-detail (posted within 7 days)
[2026-02-01T11:50:14.765Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_07ae3119..." not found, but found as SHA256 "c29d17df759516bc"
[2026-02-01T11:50:14.766Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_4ddf4543-detail (posted within 7 days)
[2026-02-01T11:50:14.767Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_18474160..." not found, but found as SHA256 "bd06abc2a55da67d"
⏭️  Skipping duplicate: JID_d47ecc0c (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f4863a05..." not found, but found as SHA256 "496bfd932c2d3894"
⏭️  Skipping duplicate: JID_9e797e73-CH_b4a995b0 (posted within 7 days)
[2026-02-01T11:50:14.767Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4a9127aa..." not found, but found as SHA256 "61174bcaa59760c2"
[2026-02-01T11:50:14.767Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_29fb1444 (posted within 7 days)
[2026-02-01T11:50:14.767Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dd6bb7fe..." not found, but found as SHA256 "22c62b81a4dccb4b"
⏭️  Skipping duplicate: JID_9e797e73-CH_e49e2048 (posted within 7 days)
[2026-02-01T11:50:14.767Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7134e553..." not found, but found as SHA256 "0c987c4e792dd1d6"
[2026-02-01T11:50:14.768Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_e35097ea (posted within 7 days)
[2026-02-01T11:50:14.768Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bcbd598f..." not found, but found as SHA256 "348cbd8455b47d7f"
[2026-02-01T11:50:14.768Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_780d031e (posted within 7 days)
[2026-02-01T11:50:14.768Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_548576e9..." not found, but found as SHA256 "58258f645d46c2a2"
[2026-02-01T11:50:14.768Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_52c67f2c (posted within 7 days)
[2026-02-01T11:50:14.768Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_168aeccb..." not found, but found as SHA256 "777615021b0953c4"
[2026-02-01T11:50:14.768Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_68317bd5 (posted within 7 days)
[2026-02-01T11:50:14.910Z] [BOT] ✅ Loaded pending queue: 2948 total (1081 pending, 50 enriched, 1817 posted)
[2026-02-01T11:50:15.101Z] [BOT] ✅ Saved pending queue: 2948 total (1081 pending, 40 enriched, 1827 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T11:50:15.204Z] [BOT] 📂 Loaded 11908 existing routing entries
[2026-02-01T11:50:15.345Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11918
[2026-02-01T11:50:15.345Z] [BOT] Timestamp: 2026-02-01T11:50:15.301Z
[2026-02-01T11:50:15.346Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T11:50:15.346Z] [BOT] Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T11:50:15.346Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 4
[2026-02-01T11:50:15.346Z] [BOT] Top channels:
     1. #💻・tech-jobs: 10 posts
     2. #🌉・JID_739bbc0b: 8 posts
     3. #📍・JID_6daed763: 1 posts
     4. #🌲・JID_efdf5921: 1 posts
[2026-02-01T11:50:15.346Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1837 jobs in memory (cached)
[2026-02-01T11:50:15.396Z] [BOT] ✅ Loaded V2 database: 1837 jobs
💾 DISK STATE: 1837 jobs on disk
[2026-02-01T11:50:15.397Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1837
[2026-02-01T11:50:15.400Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T11:50:15.400Z] [BOT] 💾 AFTER MERGE: 1837 jobs (merged disk + memory)
[2026-02-01T11:50:15.401Z] [BOT] ✅ No jobs to archive (all 1837 jobs within 7-day window)
[2026-02-01T11:50:15.518Z] [BOT] 💾 Saved posted_jobs.json: 1837 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T11:50:15.518Z] [BOT] ✅ Database saved successfully
[2026-02-01T11:50:17.541Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4572) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*