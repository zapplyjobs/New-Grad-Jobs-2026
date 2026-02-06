# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T07:43:01.911Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T07:42:43.337Z] ========================================
[2026-02-06T07:42:43.339Z] Discord Bot Execution Log
[2026-02-06T07:42:43.339Z] Environment: GitHub Actions
[2026-02-06T07:42:43.339Z] Node Version: v20.20.0
[2026-02-06T07:42:43.340Z] ========================================
[2026-02-06T07:42:43.340Z] Environment Variables Check:
[2026-02-06T07:42:43.340Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T07:42:43.340Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T07:42:43.340Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T07:42:43.340Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T07:42:43.340Z] 
Multi-Channel Configuration:
[2026-02-06T07:42:43.340Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T07:42:43.340Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:42:43.341Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:42:43.341Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T07:42:43.341Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:42:43.341Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:42:43.341Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:42:43.341Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:42:43.341Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:42:43.341Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T07:42:43.341Z] 
Data Files Check:
[2026-02-06T07:42:43.342Z] .github/data/new_jobs.json: ✅ Exists (10 items, 137397 bytes)
[2026-02-06T07:42:43.399Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10589155 bytes)
[2026-02-06T07:42:43.400Z] 
========================================
[2026-02-06T07:42:43.400Z] Starting Enhanced Discord Bot...
[2026-02-06T07:42:43.400Z] ========================================
[2026-02-06T07:42:43.987Z] [BOT] ✅ Loaded V2 database: 2146 jobs
[2026-02-06T07:42:44.441Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T07:42:44.441Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T07:42:44.441Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T07:42:44.456Z] [BOT] ✅ Loaded pending queue: 221 total (171 pending, 50 enriched, 0 posted)
[2026-02-06T07:42:44.456Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T07:42:44.457Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T07:42:44.457Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T07:42:44.458Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T07:42:44.458Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T07:42:44.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T07:42:44.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T07:42:44.459Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T07:42:44.476Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T07:42:44.476Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-06T07:42:44.477Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-02-06T07:42:44.477Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
[2026-02-06T07:42:44.477Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-06T07:42:44.477Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
[2026-02-06T07:42:44.477Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
[2026-02-06T07:42:44.477Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-02-06T07:42:44.477Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
[2026-02-06T07:42:44.477Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
[2026-02-06T07:42:44.478Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
[2026-02-06T07:42:44.478Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
[2026-02-06T07:42:44.478Z] [BOT] 🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
[2026-02-06T07:42:44.478Z] [BOT] 🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
[2026-02-06T07:42:44.492Z] [BOT] ✅ Loaded pending queue: 221 total (171 pending, 50 enriched, 0 posted)
[2026-02-06T07:42:44.520Z] [BOT] ✅ Saved pending queue: 177 total (171 pending, 6 enriched, 0 posted)
🗑️ Removed 44 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (44 blacklisted)
[2026-02-06T07:42:44.520Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-06T07:42:44.520Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-06T07:42:44.520Z] [BOT] ⏸️ Limiting to 10 jobs this run, 44 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T07:42:44.523Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-06T07:42:44.524Z] [BOT] 📍 [ROUTING] "Data Science Undergraduate Intern" @ Org_Subtype_BU023_Global_Services
[2026-02-06T07:42:44.524Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-06T07:42:44.524Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-06T07:42:44.541Z] [BOT ERROR] (node:2588) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T07:42:44.956Z] [BOT] ✅ Posted message: Data Science Undergraduate Intern @ Org_Subtype_BU023_Global_Services in #📊・JID_fb739488
[2026-02-06T07:42:44.956Z] [BOT] ✅ Industry: Data Science Undergraduate Intern @ Org_Subtype_BU023_Global_Services
[2026-02-06T07:42:44.958Z] [BOT] 💾 Added channel posting: Data Science Undergraduate Intern @ Org_Subtype_BU023_Global_Services → category channel (1 total channels)
[2026-02-06T07:42:44.958Z] [BOT] 💾 BEFORE MERGE: 2147 jobs in memory (cached)
[2026-02-06T07:42:45.000Z] [BOT] ✅ Loaded V2 database: 2146 jobs
💾 DISK STATE: 2146 jobs on disk
[2026-02-06T07:42:45.001Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2147
[2026-02-06T07:42:45.006Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T07:42:45.006Z] [BOT] 💾 AFTER MERGE: 2147 jobs (merged disk + memory)
[2026-02-06T07:42:45.008Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T07:42:45.013Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T07:42:45.014Z] [BOT] ✅ Archiving complete: 10 archived, 2137 active
[2026-02-06T07:42:45.135Z] [BOT] 💾 Saved posted_jobs.json: 2137 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T07:42:46.880Z] [BOT] ✅ Posted message: Data Science Undergraduate Intern @ Org_Subtype_BU023_Global_Services in #📍・JID_6daed763
[2026-02-06T07:42:46.880Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T07:42:46.881Z] [BOT] 💾 Added channel posting: Data Science Undergraduate Intern @ Org_Subtype_BU023_Global_Services → location channel (2 total channels)
[2026-02-06T07:42:46.881Z] [BOT] 💾 BEFORE MERGE: 2137 jobs in memory (cached)
[2026-02-06T07:42:46.923Z] [BOT] ✅ Loaded V2 database: 2137 jobs
[2026-02-06T07:42:46.926Z] [BOT] 💾 DISK STATE: 2137 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2137
[2026-02-06T07:42:46.931Z] [BOT] 🔀 Deep merged: Data Science Undergraduate Intern @ Org_Subtype_BU023_Global_Services (disk: 1 channels → merged: 2 channels)
[2026-02-06T07:42:46.931Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2137 jobs (merged disk + memory)
[2026-02-06T07:42:46.933Z] [BOT] ✅ No jobs to archive (all 2137 jobs within 7-day window)
[2026-02-06T07:42:47.044Z] [BOT] 💾 Saved posted_jobs.json: 2137 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T07:42:51.545Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-06T07:42:51.548Z] [BOT] 📍 [ROUTING] "Head of IT SOX" @ anthropic
[2026-02-06T07:42:51.548Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T07:42:51.807Z] [BOT] ✅ Posted message: Head of IT SOX @ anthropic in #💰・finance-jobs
[2026-02-06T07:42:51.807Z] [BOT] ✅ Industry: Head of IT SOX @ anthropic
[2026-02-06T07:42:51.808Z] [BOT] 💾 Added channel posting: Head of IT SOX @ anthropic → category channel (1 total channels)
[2026-02-06T07:42:51.808Z] [BOT] 💾 BEFORE MERGE: 2138 jobs in memory (cached)
[2026-02-06T07:42:51.845Z] [BOT] ✅ Loaded V2 database: 2137 jobs
💾 DISK STATE: 2137 jobs on disk
[2026-02-06T07:42:51.846Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2138
[2026-02-06T07:42:51.850Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T07:42:51.850Z] [BOT] 💾 AFTER MERGE: 2138 jobs (merged disk + memory)
[2026-02-06T07:42:51.852Z] [BOT] ✅ No jobs to archive (all 2138 jobs within 7-day window)
[2026-02-06T07:42:51.965Z] [BOT] 💾 Saved posted_jobs.json: 2138 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T07:42:54.071Z] [BOT] ✅ Posted message: Head of IT SOX @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T07:42:54.072Z] [BOT] 💾 Added channel posting: Head of IT SOX @ anthropic → location channel (2 total channels)
[2026-02-06T07:42:54.072Z] [BOT] 💾 BEFORE MERGE: 2138 jobs in memory (cached)
[2026-02-06T07:42:54.108Z] [BOT] ✅ Loaded V2 database: 2138 jobs
💾 DISK STATE: 2138 jobs on disk
[2026-02-06T07:42:54.109Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2138
[2026-02-06T07:42:54.115Z] [BOT] 🔀 Deep merged: Head of IT SOX @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-06T07:42:54.115Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2138 jobs (merged disk + memory)
[2026-02-06T07:42:54.116Z] [BOT] ✅ No jobs to archive (all 2138 jobs within 7-day window)
[2026-02-06T07:42:54.228Z] [BOT] 💾 Saved posted_jobs.json: 2138 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T07:42:58.730Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-06T07:42:58.732Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cf8f1049..." not found, but found as SHA256 "0e55c2c5263bab00"
[2026-02-06T07:42:58.732Z] [BOT] ⏭️  Skipping duplicate: JID_955099a3 (posted within 7 days)
[2026-02-06T07:42:58.733Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "30182ad44ab9f90c"
⏭️  Skipping duplicate: JID_cbc305b9 (posted within 7 days)
[2026-02-06T07:42:58.743Z] [BOT] ✅ Loaded pending queue: 177 total (171 pending, 6 enriched, 0 posted)
[2026-02-06T07:42:58.760Z] [BOT] ✅ Saved pending queue: 177 total (171 pending, 4 enriched, 2 posted)
[2026-02-06T07:42:58.761Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T07:42:58.858Z] [BOT] 📂 Loaded 12507 existing routing entries
[2026-02-06T07:42:59.001Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-06T07:42:59.001Z] [BOT] New entries: 2
   Total entries: 12509
   Timestamp: 2026-02-06T07:42:58.944Z
[2026-02-06T07:42:59.002Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T07:42:59.002Z] [BOT] Total attempts: 52
   Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-06T07:42:59.002Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T07:42:59.002Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
[2026-02-06T07:42:59.003Z] [BOT] 1. #📊・JID_fb739488: 1 posts
     2. #📍・JID_6daed763: 1 posts
     3. #💰・finance-jobs: 1 posts
     4. #🌉・JID_739bbc0b: 1 posts
[2026-02-06T07:42:59.003Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2138 jobs in memory (cached)
[2026-02-06T07:42:59.056Z] [BOT] ✅ Loaded V2 database: 2138 jobs
💾 DISK STATE: 2138 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2138
[2026-02-06T07:42:59.059Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T07:42:59.059Z] [BOT] 💾 AFTER MERGE: 2138 jobs (merged disk + memory)
[2026-02-06T07:42:59.061Z] [BOT] ✅ No jobs to archive (all 2138 jobs within 7-day window)
[2026-02-06T07:42:59.182Z] [BOT] 💾 Saved posted_jobs.json: 2138 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T07:43:01.202Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2588) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*