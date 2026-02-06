# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T11:35:44.393Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T11:35:16.089Z] ========================================
[2026-02-06T11:35:16.090Z] Discord Bot Execution Log
[2026-02-06T11:35:16.090Z] Environment: GitHub Actions
[2026-02-06T11:35:16.091Z] Node Version: v20.20.0
[2026-02-06T11:35:16.091Z] ========================================
[2026-02-06T11:35:16.091Z] Environment Variables Check:
[2026-02-06T11:35:16.091Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T11:35:16.091Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T11:35:16.091Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T11:35:16.091Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T11:35:16.091Z] 
Multi-Channel Configuration:
[2026-02-06T11:35:16.091Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T11:35:16.091Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:35:16.091Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:35:16.091Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T11:35:16.091Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:35:16.092Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:35:16.092Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:35:16.092Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:35:16.092Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:35:16.092Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T11:35:16.092Z] 
Data Files Check:
[2026-02-06T11:35:16.093Z] .github/data/new_jobs.json: ✅ Exists (10 items, 146381 bytes)
[2026-02-06T11:35:16.160Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10036906 bytes)
[2026-02-06T11:35:16.160Z] 
========================================
[2026-02-06T11:35:16.160Z] Starting Enhanced Discord Bot...
[2026-02-06T11:35:16.160Z] ========================================
[2026-02-06T11:35:16.673Z] [BOT] ✅ Loaded V2 database: 2062 jobs
[2026-02-06T11:35:17.514Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T11:35:17.515Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T11:35:17.515Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T11:35:17.534Z] [BOT] ✅ Loaded pending queue: 229 total (179 pending, 50 enriched, 0 posted)
[2026-02-06T11:35:17.535Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T11:35:17.536Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T11:35:17.536Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T11:35:17.536Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T11:35:17.537Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T11:35:17.537Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T11:35:17.538Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T11:35:17.549Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T11:35:17.550Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-06T11:35:17.550Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-06T11:35:17.550Z] [BOT] 🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-06T11:35:17.550Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
[2026-02-06T11:35:17.550Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
[2026-02-06T11:35:17.550Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
[2026-02-06T11:35:17.550Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
[2026-02-06T11:35:17.550Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-02-06T11:35:17.550Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
[2026-02-06T11:35:17.550Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
[2026-02-06T11:35:17.550Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-06T11:35:17.551Z] [BOT] 🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
[2026-02-06T11:35:17.551Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
[2026-02-06T11:35:17.551Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
[2026-02-06T11:35:17.572Z] [BOT] ✅ Loaded pending queue: 229 total (179 pending, 50 enriched, 0 posted)
[2026-02-06T11:35:17.595Z] [BOT] ✅ Saved pending queue: 188 total (179 pending, 9 enriched, 0 posted)
🗑️ Removed 41 blacklisted jobs from pending queue
📋 After blacklist filter: 5 jobs (41 blacklisted)
[2026-02-06T11:35:17.595Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-02-06T11:35:17.596Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-02-06T11:35:17.596Z] [BOT] ⏸️ Limiting to 10 jobs this run, 41 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T11:35:17.599Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-02-06T11:35:17.600Z] [BOT] 📍 [ROUTING] "Influencer Marketing, Intern" @ duolingo
   Category: TECH (default)
[2026-02-06T11:35:17.601Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T11:35:17.617Z] [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T11:35:17.898Z] [BOT] ✅ Posted message: Influencer Marketing, Intern @ duolingo in #💻・tech-jobs
[2026-02-06T11:35:17.898Z] [BOT] ✅ Industry: Influencer Marketing, Intern @ duolingo
[2026-02-06T11:35:17.899Z] [BOT] 💾 Added channel posting: Influencer Marketing, Intern @ duolingo → category channel (1 total channels)
[2026-02-06T11:35:17.900Z] [BOT] 💾 BEFORE MERGE: 2063 jobs in memory (cached)
[2026-02-06T11:35:17.955Z] [BOT] ✅ Loaded V2 database: 2062 jobs
💾 DISK STATE: 2062 jobs on disk
[2026-02-06T11:35:17.955Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2063
[2026-02-06T11:35:17.960Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T11:35:17.960Z] [BOT] 💾 AFTER MERGE: 2063 jobs (merged disk + memory)
[2026-02-06T11:35:17.961Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T11:35:17.966Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
✅ Archiving complete: 20 archived, 2043 active
[2026-02-06T11:35:18.094Z] [BOT] 💾 Saved posted_jobs.json: 2043 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:35:19.848Z] [BOT] ✅ Posted message: Influencer Marketing, Intern @ duolingo in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T11:35:19.849Z] [BOT] 💾 Added channel posting: Influencer Marketing, Intern @ duolingo → location channel (2 total channels)
[2026-02-06T11:35:19.849Z] [BOT] 💾 BEFORE MERGE: 2043 jobs in memory (cached)
[2026-02-06T11:35:19.908Z] [BOT] ✅ Loaded V2 database: 2043 jobs
💾 DISK STATE: 2043 jobs on disk
[2026-02-06T11:35:19.909Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2043
[2026-02-06T11:35:19.914Z] [BOT] 🔀 Deep merged: Influencer Marketing, Intern @ duolingo (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T11:35:19.914Z] [BOT] 💾 AFTER MERGE: 2043 jobs (merged disk + memory)
[2026-02-06T11:35:19.915Z] [BOT] ✅ No jobs to archive (all 2043 jobs within 7-day window)
[2026-02-06T11:35:20.036Z] [BOT] 💾 Saved posted_jobs.json: 2043 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:35:21.537Z] [BOT] 📍 [ROUTING] "QA Specialist, New Graduate" @ duolingo
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T11:35:21.791Z] [BOT] ✅ Posted message: QA Specialist, New Graduate @ duolingo in #💻・tech-jobs
[2026-02-06T11:35:21.792Z] [BOT] ✅ Industry: QA Specialist, New Graduate @ duolingo
[2026-02-06T11:35:21.792Z] [BOT] 💾 Added channel posting: QA Specialist, New Graduate @ duolingo → category channel (1 total channels)
[2026-02-06T11:35:21.792Z] [BOT] 💾 BEFORE MERGE: 2044 jobs in memory (cached)
[2026-02-06T11:35:21.841Z] [BOT] ✅ Loaded V2 database: 2043 jobs
💾 DISK STATE: 2043 jobs on disk
[2026-02-06T11:35:21.841Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2044
[2026-02-06T11:35:21.845Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T11:35:21.846Z] [BOT] 💾 AFTER MERGE: 2044 jobs (merged disk + memory)
[2026-02-06T11:35:21.847Z] [BOT] ✅ No jobs to archive (all 2044 jobs within 7-day window)
[2026-02-06T11:35:21.959Z] [BOT] 💾 Saved posted_jobs.json: 2044 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:35:23.651Z] [BOT] ✅ Posted message: QA Specialist, New Graduate @ duolingo in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T11:35:23.652Z] [BOT] 💾 Added channel posting: QA Specialist, New Graduate @ duolingo → location channel (2 total channels)
[2026-02-06T11:35:23.652Z] [BOT] 💾 BEFORE MERGE: 2044 jobs in memory (cached)
[2026-02-06T11:35:23.705Z] [BOT] ✅ Loaded V2 database: 2044 jobs
💾 DISK STATE: 2044 jobs on disk
[2026-02-06T11:35:23.705Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2044
[2026-02-06T11:35:23.709Z] [BOT] 🔀 Deep merged: QA Specialist, New Graduate @ duolingo (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T11:35:23.710Z] [BOT] 💾 AFTER MERGE: 2044 jobs (merged disk + memory)
[2026-02-06T11:35:23.711Z] [BOT] ✅ No jobs to archive (all 2044 jobs within 7-day window)
[2026-02-06T11:35:23.822Z] [BOT] 💾 Saved posted_jobs.json: 2044 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:35:25.323Z] [BOT] 📍 [ROUTING] "Social Content Creator, Intern" @ duolingo
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T11:35:25.468Z] [BOT] ✅ Posted message: Social Content Creator, Intern @ duolingo in #💻・tech-jobs
  ✅ Industry: Social Content Creator, Intern @ duolingo
[2026-02-06T11:35:25.469Z] [BOT] 💾 Added channel posting: Social Content Creator, Intern @ duolingo → category channel (1 total channels)
[2026-02-06T11:35:25.469Z] [BOT] 💾 BEFORE MERGE: 2045 jobs in memory (cached)
[2026-02-06T11:35:25.520Z] [BOT] ✅ Loaded V2 database: 2044 jobs
💾 DISK STATE: 2044 jobs on disk
[2026-02-06T11:35:25.521Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2045
[2026-02-06T11:35:25.525Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T11:35:25.525Z] [BOT] 💾 AFTER MERGE: 2045 jobs (merged disk + memory)
[2026-02-06T11:35:25.526Z] [BOT] ✅ No jobs to archive (all 2045 jobs within 7-day window)
[2026-02-06T11:35:25.639Z] [BOT] 💾 Saved posted_jobs.json: 2045 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:35:27.315Z] [BOT] ✅ Posted message: Social Content Creator, Intern @ duolingo in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T11:35:27.316Z] [BOT] 💾 Added channel posting: Social Content Creator, Intern @ duolingo → location channel (2 total channels)
[2026-02-06T11:35:27.316Z] [BOT] 💾 BEFORE MERGE: 2045 jobs in memory (cached)
[2026-02-06T11:35:27.373Z] [BOT] ✅ Loaded V2 database: 2045 jobs
💾 DISK STATE: 2045 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2045
[2026-02-06T11:35:27.385Z] [BOT] 🔀 Deep merged: Social Content Creator, Intern @ duolingo (disk: 1 channels → merged: 2 channels)
[2026-02-06T11:35:27.385Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T11:35:27.385Z] [BOT] 💾 AFTER MERGE: 2045 jobs (merged disk + memory)
[2026-02-06T11:35:27.387Z] [BOT] ✅ No jobs to archive (all 2045 jobs within 7-day window)
[2026-02-06T11:35:27.498Z] [BOT] 💾 Saved posted_jobs.json: 2045 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:35:28.999Z] [BOT] 📍 [ROUTING] "Platform Developer/Engineer Intern" @ ORG_8386f89b
   Category: TECH (matched: "software")
[2026-02-06T11:35:28.999Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T11:35:29.193Z] [BOT] ✅ Posted message: Platform Developer/Engineer Intern @ ORG_8386f89b in #💻・tech-jobs
  ✅ Industry: Platform Developer/Engineer Intern @ ORG_8386f89b
[2026-02-06T11:35:29.195Z] [BOT] 💾 Added channel posting: Platform Developer/Engineer Intern @ ORG_8386f89b → category channel (1 total channels)
[2026-02-06T11:35:29.195Z] [BOT] 💾 BEFORE MERGE: 2046 jobs in memory (cached)
[2026-02-06T11:35:29.244Z] [BOT] ✅ Loaded V2 database: 2045 jobs
💾 DISK STATE: 2045 jobs on disk
[2026-02-06T11:35:29.244Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2046
[2026-02-06T11:35:29.248Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2046 jobs (merged disk + memory)
[2026-02-06T11:35:29.249Z] [BOT] ✅ No jobs to archive (all 2046 jobs within 7-day window)
[2026-02-06T11:35:29.354Z] [BOT] 💾 Saved posted_jobs.json: 2046 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:35:32.324Z] [BOT] ✅ Posted message: Platform Developer/Engineer Intern @ ORG_8386f89b in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T11:35:32.324Z] [BOT] 💾 Added channel posting: Platform Developer/Engineer Intern @ ORG_8386f89b → location channel (2 total channels)
[2026-02-06T11:35:32.324Z] [BOT] 💾 BEFORE MERGE: 2046 jobs in memory (cached)
[2026-02-06T11:35:32.375Z] [BOT] ✅ Loaded V2 database: 2046 jobs
💾 DISK STATE: 2046 jobs on disk
[2026-02-06T11:35:32.375Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2046
[2026-02-06T11:35:32.379Z] [BOT] 🔀 Deep merged: Platform Developer/Engineer Intern @ ORG_8386f89b (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T11:35:32.379Z] [BOT] 💾 AFTER MERGE: 2046 jobs (merged disk + memory)
[2026-02-06T11:35:32.380Z] [BOT] ✅ No jobs to archive (all 2046 jobs within 7-day window)
[2026-02-06T11:35:32.492Z] [BOT] 💾 Saved posted_jobs.json: 2046 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:35:33.994Z] [BOT] 📍 [ROUTING] "Software Engineer Intern" @ ORG_8db5d17a
[2026-02-06T11:35:33.994Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T11:35:34.189Z] [BOT] ✅ Posted message: Software Engineer Intern @ ORG_8db5d17a in #💻・tech-jobs
  ✅ Industry: Software Engineer Intern @ ORG_8db5d17a
[2026-02-06T11:35:34.191Z] [BOT] 💾 Added channel posting: Software Engineer Intern @ ORG_8db5d17a → category channel (1 total channels)
[2026-02-06T11:35:34.192Z] [BOT] 💾 BEFORE MERGE: 2047 jobs in memory (cached)
[2026-02-06T11:35:34.246Z] [BOT] ✅ Loaded V2 database: 2046 jobs
💾 DISK STATE: 2046 jobs on disk
[2026-02-06T11:35:34.246Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2047
[2026-02-06T11:35:34.250Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T11:35:34.250Z] [BOT] 💾 AFTER MERGE: 2047 jobs (merged disk + memory)
[2026-02-06T11:35:34.251Z] [BOT] ✅ No jobs to archive (all 2047 jobs within 7-day window)
[2026-02-06T11:35:34.362Z] [BOT] 💾 Saved posted_jobs.json: 2047 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:35:36.027Z] [BOT] ✅ Posted message: Software Engineer Intern @ ORG_8db5d17a in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T11:35:36.028Z] [BOT] 💾 Added channel posting: Software Engineer Intern @ ORG_8db5d17a → location channel (2 total channels)
[2026-02-06T11:35:36.028Z] [BOT] 💾 BEFORE MERGE: 2047 jobs in memory (cached)
[2026-02-06T11:35:36.079Z] [BOT] ✅ Loaded V2 database: 2047 jobs
💾 DISK STATE: 2047 jobs on disk
[2026-02-06T11:35:36.079Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2047
[2026-02-06T11:35:36.083Z] [BOT] 🔀 Deep merged: Software Engineer Intern @ ORG_8db5d17a (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T11:35:36.083Z] [BOT] 💾 AFTER MERGE: 2047 jobs (merged disk + memory)
[2026-02-06T11:35:36.084Z] [BOT] ✅ No jobs to archive (all 2047 jobs within 7-day window)
[2026-02-06T11:35:36.195Z] [BOT] 💾 Saved posted_jobs.json: 2047 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:35:40.696Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-02-06T11:35:40.697Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e0290d68..." not found, but found as SHA256 "888532439bf0d113"
[2026-02-06T11:35:40.697Z] [BOT] ⏭️  Skipping duplicate: JID_e0290d68 (posted within 7 days)
[2026-02-06T11:35:40.698Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_af31af7c..." not found, but found as SHA256 "73e5496d13f6e2d9"
[2026-02-06T11:35:40.698Z] [BOT] ⏭️  Skipping duplicate: JID_af31af7c (posted within 7 days)
[2026-02-06T11:35:40.698Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_92e4bda1..." not found, but found as SHA256 "a289f8f9948527f6"
[2026-02-06T11:35:40.698Z] [BOT] ⏭️  Skipping duplicate: JID_92e4bda1 (posted within 7 days)
[2026-02-06T11:35:40.698Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e4a91343..." not found, but found as SHA256 "bd1efe2ef1890987"
[2026-02-06T11:35:40.699Z] [BOT] ⏭️  Skipping duplicate: JID_5adff171 (posted within 7 days)
[2026-02-06T11:35:40.699Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bd1219ea..." not found, but found as SHA256 "7be05deac8aabf85"
[2026-02-06T11:35:40.699Z] [BOT] ⏭️  Skipping duplicate: JID_bd1219ea (posted within 7 days)
[2026-02-06T11:35:40.714Z] [BOT] ✅ Loaded pending queue: 188 total (179 pending, 9 enriched, 0 posted)
[2026-02-06T11:35:40.731Z] [BOT] ✅ Saved pending queue: 188 total (179 pending, 4 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
[2026-02-06T11:35:40.731Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T11:35:40.857Z] [BOT] 📂 Loaded 12523 existing routing entries
[2026-02-06T11:35:40.976Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 12528
   Timestamp: 2026-02-06T11:35:40.929Z
[2026-02-06T11:35:40.976Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 55
[2026-02-06T11:35:40.977Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 45
[2026-02-06T11:35:40.977Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-06T11:35:40.977Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🗽・JID_98d4f0de: 3 posts
     3. #📍・JID_6daed763: 2 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T11:35:40.977Z] [BOT] 💾 BEFORE MERGE: 2047 jobs in memory (cached)
[2026-02-06T11:35:41.033Z] [BOT] ✅ Loaded V2 database: 2047 jobs
💾 DISK STATE: 2047 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2047
[2026-02-06T11:35:41.040Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T11:35:41.040Z] [BOT] 💾 AFTER MERGE: 2047 jobs (merged disk + memory)
[2026-02-06T11:35:41.049Z] [BOT] ✅ No jobs to archive (all 2047 jobs within 7-day window)
[2026-02-06T11:35:41.176Z] [BOT] 💾 Saved posted_jobs.json: 2047 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T11:35:43.190Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*