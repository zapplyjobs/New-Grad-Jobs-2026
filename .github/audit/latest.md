# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T16:08:30.935Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T16:08:04.396Z] ========================================
[2026-02-06T16:08:04.397Z] Discord Bot Execution Log
[2026-02-06T16:08:04.398Z] Environment: GitHub Actions
[2026-02-06T16:08:04.398Z] Node Version: v20.20.0
[2026-02-06T16:08:04.398Z] ========================================
[2026-02-06T16:08:04.398Z] Environment Variables Check:
[2026-02-06T16:08:04.398Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T16:08:04.398Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T16:08:04.398Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T16:08:04.398Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T16:08:04.398Z] 
Multi-Channel Configuration:
[2026-02-06T16:08:04.398Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T16:08:04.398Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:08:04.399Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:08:04.399Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T16:08:04.399Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:08:04.399Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:08:04.399Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:08:04.399Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:08:04.399Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T16:08:04.399Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T16:08:04.399Z] 
Data Files Check:
[2026-02-06T16:08:04.400Z] .github/data/new_jobs.json: ✅ Exists (10 items, 137009 bytes)
[2026-02-06T16:08:04.453Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9510249 bytes)
[2026-02-06T16:08:04.453Z] 
========================================
[2026-02-06T16:08:04.453Z] Starting Enhanced Discord Bot...
[2026-02-06T16:08:04.453Z] ========================================
[2026-02-06T16:08:05.027Z] [BOT] ✅ Loaded V2 database: 1976 jobs
[2026-02-06T16:08:05.505Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T16:08:05.505Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T16:08:05.506Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T16:08:05.523Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-06T16:08:05.524Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T16:08:05.524Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T16:08:05.525Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T16:08:05.525Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T16:08:05.525Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T16:08:05.543Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T16:08:05.543Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
[2026-02-06T16:08:05.543Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
[2026-02-06T16:08:05.543Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
[2026-02-06T16:08:05.544Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-06T16:08:05.544Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-06T16:08:05.544Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-06T16:08:05.544Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
[2026-02-06T16:08:05.544Z] [BOT] 🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
[2026-02-06T16:08:05.544Z] [BOT] 🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
[2026-02-06T16:08:05.544Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-06T16:08:05.544Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-06T16:08:05.544Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-02-06T16:08:05.544Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
[2026-02-06T16:08:05.563Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-06T16:08:05.587Z] [BOT] ✅ Saved pending queue: 172 total (166 pending, 6 enriched, 0 posted)
[2026-02-06T16:08:05.588Z] [BOT] 🗑️ Removed 44 blacklisted jobs from pending queue
📋 After blacklist filter: 4 jobs (44 blacklisted)
📋 After data quality filter: 4 jobs (0 invalid)
[2026-02-06T16:08:05.588Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-02-06T16:08:05.588Z] [BOT] ⏸️ Limiting to 10 jobs this run, 44 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T16:08:05.591Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-06T16:08:05.592Z] [BOT] 📍 [ROUTING] "Coordinator, Business Recruiting - Contract" @ datadog
[2026-02-06T16:08:05.592Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T16:08:05.609Z] [BOT ERROR] (node:2542) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T16:08:05.915Z] [BOT] ✅ Posted message: Coordinator, Business Recruiting - Contract @ datadog in #💻・tech-jobs
[2026-02-06T16:08:05.915Z] [BOT] ✅ Industry: Coordinator, Business Recruiting - Contract @ datadog
[2026-02-06T16:08:05.916Z] [BOT] 💾 Added channel posting: Coordinator, Business Recruiting - Contract @ datadog → category channel (1 total channels)
[2026-02-06T16:08:05.916Z] [BOT] 💾 BEFORE MERGE: 1977 jobs in memory (cached)
[2026-02-06T16:08:05.957Z] [BOT] ✅ Loaded V2 database: 1976 jobs
💾 DISK STATE: 1976 jobs on disk
[2026-02-06T16:08:05.958Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1977
[2026-02-06T16:08:05.962Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T16:08:05.962Z] [BOT] 💾 AFTER MERGE: 1977 jobs (merged disk + memory)
[2026-02-06T16:08:05.964Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T16:08:05.969Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T16:08:05.969Z] [BOT] ✅ Archiving complete: 10 archived, 1967 active
[2026-02-06T16:08:06.088Z] [BOT] 💾 Saved posted_jobs.json: 1967 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:08:07.821Z] [BOT] ✅ Posted message: Coordinator, Business Recruiting - Contract @ datadog in #🗽・JID_98d4f0de
[2026-02-06T16:08:07.821Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T16:08:07.821Z] [BOT] 💾 Added channel posting: Coordinator, Business Recruiting - Contract @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 1967 jobs in memory (cached)
[2026-02-06T16:08:07.855Z] [BOT] ✅ Loaded V2 database: 1967 jobs
[2026-02-06T16:08:07.855Z] [BOT] 💾 DISK STATE: 1967 jobs on disk
[2026-02-06T16:08:07.855Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1967
[2026-02-06T16:08:07.859Z] [BOT] 🔀 Deep merged: Coordinator, Business Recruiting - Contract @ datadog (disk: 1 channels → merged: 2 channels)
[2026-02-06T16:08:07.860Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1967 jobs (merged disk + memory)
[2026-02-06T16:08:07.861Z] [BOT] ✅ No jobs to archive (all 1967 jobs within 7-day window)
[2026-02-06T16:08:07.954Z] [BOT] 💾 Saved posted_jobs.json: 1967 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:08:09.456Z] [BOT] 📍 [ROUTING] "Software Engineer, Mobile" @ discord
   Category: TECH (matched: "software")
[2026-02-06T16:08:09.456Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T16:08:09.655Z] [BOT] ✅ Posted message: Software Engineer, Mobile @ discord in #💻・tech-jobs
[2026-02-06T16:08:09.656Z] [BOT] ✅ Industry: Software Engineer, Mobile @ discord
[2026-02-06T16:08:09.656Z] [BOT] 💾 Added channel posting: Software Engineer, Mobile @ discord → category channel (1 total channels)
[2026-02-06T16:08:09.656Z] [BOT] 💾 BEFORE MERGE: 1968 jobs in memory (cached)
[2026-02-06T16:08:09.688Z] [BOT] ✅ Loaded V2 database: 1967 jobs
💾 DISK STATE: 1967 jobs on disk
[2026-02-06T16:08:09.688Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1968
[2026-02-06T16:08:09.692Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T16:08:09.692Z] [BOT] 💾 AFTER MERGE: 1968 jobs (merged disk + memory)
[2026-02-06T16:08:09.693Z] [BOT] ✅ No jobs to archive (all 1968 jobs within 7-day window)
[2026-02-06T16:08:09.783Z] [BOT] 💾 Saved posted_jobs.json: 1968 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:08:11.535Z] [BOT] ✅ Posted message: Software Engineer, Mobile @ discord in #🌉・JID_739bbc0b
[2026-02-06T16:08:11.535Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T16:08:11.535Z] [BOT] 💾 Added channel posting: Software Engineer, Mobile @ discord → location channel (2 total channels)
[2026-02-06T16:08:11.535Z] [BOT] 💾 BEFORE MERGE: 1968 jobs in memory (cached)
[2026-02-06T16:08:11.570Z] [BOT] ✅ Loaded V2 database: 1968 jobs
💾 DISK STATE: 1968 jobs on disk
[2026-02-06T16:08:11.570Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1968
[2026-02-06T16:08:11.574Z] [BOT] 🔀 Deep merged: Software Engineer, Mobile @ discord (disk: 1 channels → merged: 2 channels)
[2026-02-06T16:08:11.574Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1968 jobs (merged disk + memory)
[2026-02-06T16:08:11.575Z] [BOT] ✅ No jobs to archive (all 1968 jobs within 7-day window)
[2026-02-06T16:08:11.669Z] [BOT] 💾 Saved posted_jobs.json: 1968 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:08:13.170Z] [BOT] 📍 [ROUTING] "Software Engineer - Realtime Infrastructure" @ discord
[2026-02-06T16:08:13.170Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T16:08:13.422Z] [BOT] ✅ Posted message: Software Engineer - Realtime Infrastructure @ discord in #💻・tech-jobs
[2026-02-06T16:08:13.422Z] [BOT] ✅ Industry: Software Engineer - Realtime Infrastructure @ discord
[2026-02-06T16:08:13.423Z] [BOT] 💾 Added channel posting: Software Engineer - Realtime Infrastructure @ discord → category channel (1 total channels)
[2026-02-06T16:08:13.423Z] [BOT] 💾 BEFORE MERGE: 1969 jobs in memory (cached)
[2026-02-06T16:08:13.455Z] [BOT] ✅ Loaded V2 database: 1968 jobs
💾 DISK STATE: 1968 jobs on disk
[2026-02-06T16:08:13.455Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1969
[2026-02-06T16:08:13.459Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T16:08:13.459Z] [BOT] 💾 AFTER MERGE: 1969 jobs (merged disk + memory)
[2026-02-06T16:08:13.461Z] [BOT] ✅ No jobs to archive (all 1969 jobs within 7-day window)
[2026-02-06T16:08:13.548Z] [BOT] 💾 Saved posted_jobs.json: 1969 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:08:15.417Z] [BOT] ✅ Posted message: Software Engineer - Realtime Infrastructure @ discord in #🌉・JID_739bbc0b
[2026-02-06T16:08:15.417Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T16:08:15.417Z] [BOT] 💾 Added channel posting: Software Engineer - Realtime Infrastructure @ discord → location channel (2 total channels)
[2026-02-06T16:08:15.418Z] [BOT] 💾 BEFORE MERGE: 1969 jobs in memory (cached)
[2026-02-06T16:08:15.451Z] [BOT] ✅ Loaded V2 database: 1969 jobs
💾 DISK STATE: 1969 jobs on disk
[2026-02-06T16:08:15.452Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1969
[2026-02-06T16:08:15.456Z] [BOT] 🔀 Deep merged: Software Engineer - Realtime Infrastructure @ discord (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T16:08:15.456Z] [BOT] 💾 AFTER MERGE: 1969 jobs (merged disk + memory)
[2026-02-06T16:08:15.457Z] [BOT] ✅ No jobs to archive (all 1969 jobs within 7-day window)
[2026-02-06T16:08:15.548Z] [BOT] 💾 Saved posted_jobs.json: 1969 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:08:20.050Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-06T16:08:20.051Z] [BOT] 📍 [ROUTING] "Software Engineer, Payments" @ discord
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-06T16:08:20.052Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-06T16:08:20.493Z] [BOT] ✅ Posted message: Software Engineer, Payments @ discord in #📊・JID_fb739488
[2026-02-06T16:08:20.494Z] [BOT] ✅ Industry: Software Engineer, Payments @ discord
[2026-02-06T16:08:20.494Z] [BOT] 💾 Added channel posting: Software Engineer, Payments @ discord → category channel (1 total channels)
💾 BEFORE MERGE: 1970 jobs in memory (cached)
[2026-02-06T16:08:20.528Z] [BOT] ✅ Loaded V2 database: 1969 jobs
💾 DISK STATE: 1969 jobs on disk
[2026-02-06T16:08:20.529Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1970
[2026-02-06T16:08:20.533Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T16:08:20.533Z] [BOT] 💾 AFTER MERGE: 1970 jobs (merged disk + memory)
[2026-02-06T16:08:20.534Z] [BOT] ✅ No jobs to archive (all 1970 jobs within 7-day window)
[2026-02-06T16:08:20.640Z] [BOT] 💾 Saved posted_jobs.json: 1970 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:08:22.522Z] [BOT] ✅ Posted message: Software Engineer, Payments @ discord in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T16:08:22.522Z] [BOT] 💾 Added channel posting: Software Engineer, Payments @ discord → location channel (2 total channels)
[2026-02-06T16:08:22.522Z] [BOT] 💾 BEFORE MERGE: 1970 jobs in memory (cached)
[2026-02-06T16:08:22.555Z] [BOT] ✅ Loaded V2 database: 1970 jobs
[2026-02-06T16:08:22.555Z] [BOT] 💾 DISK STATE: 1970 jobs on disk
[2026-02-06T16:08:22.555Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1970
[2026-02-06T16:08:22.559Z] [BOT] 🔀 Deep merged: Software Engineer, Payments @ discord (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1970 jobs (merged disk + memory)
[2026-02-06T16:08:22.561Z] [BOT] ✅ No jobs to archive (all 1970 jobs within 7-day window)
[2026-02-06T16:08:22.659Z] [BOT] 💾 Saved posted_jobs.json: 1970 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T16:08:27.161Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-02-06T16:08:27.163Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_304f6b44..." not found, but found as SHA256 "790a57ab96f8532a"
[2026-02-06T16:08:27.163Z] [BOT] ⏭️  Skipping duplicate: JID_304f6b44 (posted within 7 days)
[2026-02-06T16:08:27.163Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d68ea353..." not found, but found as SHA256 "878b22e664a5233c"
[2026-02-06T16:08:27.163Z] [BOT] ⏭️  Skipping duplicate: JID_041d5ff5 (posted within 7 days)
[2026-02-06T16:08:27.163Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "26f1a7e718d687dd"
[2026-02-06T16:08:27.164Z] [BOT] ⏭️  Skipping duplicate: JID_b454904b (posted within 7 days)
[2026-02-06T16:08:27.164Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "34fe655b32ee3e93"
[2026-02-06T16:08:27.164Z] [BOT] ⏭️  Skipping duplicate: JID_9f9fd338 (posted within 7 days)
[2026-02-06T16:08:27.173Z] [BOT] ✅ Loaded pending queue: 172 total (166 pending, 6 enriched, 0 posted)
[2026-02-06T16:08:27.189Z] [BOT] ✅ Saved pending queue: 172 total (166 pending, 2 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
[2026-02-06T16:08:27.189Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T16:08:27.298Z] [BOT] 📂 Loaded 12555 existing routing entries
[2026-02-06T16:08:27.419Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 12559
   Timestamp: 2026-02-06T16:08:27.366Z
[2026-02-06T16:08:27.419Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T16:08:27.420Z] [BOT] Total attempts: 54
   Successful: 8
   Failed: 0
   Skipped: 46
[2026-02-06T16:08:27.420Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T16:08:27.420Z] [BOT] Last cleanup: Never
   Total posts: 8
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #🌉・JID_739bbc0b: 3 posts
     3. #🗽・JID_98d4f0de: 1 posts
[2026-02-06T16:08:27.420Z] [BOT] 4. #📊・JID_fb739488: 1 posts
[2026-02-06T16:08:27.420Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T16:08:27.420Z] [BOT] 💾 BEFORE MERGE: 1970 jobs in memory (cached)
[2026-02-06T16:08:27.472Z] [BOT] ✅ Loaded V2 database: 1970 jobs
💾 DISK STATE: 1970 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1970
[2026-02-06T16:08:27.474Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T16:08:27.474Z] [BOT] 💾 AFTER MERGE: 1970 jobs (merged disk + memory)
[2026-02-06T16:08:27.475Z] [BOT] ✅ No jobs to archive (all 1970 jobs within 7-day window)
[2026-02-06T16:08:27.586Z] [BOT] 💾 Saved posted_jobs.json: 1970 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T16:08:29.603Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2542) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*