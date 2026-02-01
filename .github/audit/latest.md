# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T20:08:47.439Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T20:08:29.147Z] ========================================
[2026-02-01T20:08:29.149Z] Discord Bot Execution Log
[2026-02-01T20:08:29.149Z] Environment: GitHub Actions
[2026-02-01T20:08:29.149Z] Node Version: v20.20.0
[2026-02-01T20:08:29.149Z] ========================================
[2026-02-01T20:08:29.149Z] Environment Variables Check:
[2026-02-01T20:08:29.149Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T20:08:29.150Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T20:08:29.150Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T20:08:29.150Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T20:08:29.150Z] 
Multi-Channel Configuration:
[2026-02-01T20:08:29.150Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T20:08:29.150Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:08:29.150Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:08:29.150Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T20:08:29.150Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:08:29.150Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:08:29.150Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:08:29.150Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:08:29.151Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:08:29.151Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T20:08:29.151Z] 
Data Files Check:
[2026-02-01T20:08:29.152Z] .github/data/new_jobs.json: ✅ Exists (10 items, 148707 bytes)
[2026-02-01T20:08:29.208Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10811403 bytes)
[2026-02-01T20:08:29.208Z] 
========================================
[2026-02-01T20:08:29.208Z] Starting Enhanced Discord Bot...
[2026-02-01T20:08:29.208Z] ========================================
[2026-02-01T20:08:29.777Z] [BOT] ✅ Loaded V2 database: 2168 jobs
[2026-02-01T20:08:30.323Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T20:08:30.323Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T20:08:30.324Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T20:08:30.373Z] [BOT] ✅ Loaded pending queue: 773 total (723 pending, 50 enriched, 0 posted)
[2026-02-01T20:08:30.374Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Creator & Affiliate Marketing Manager at figma
[2026-02-01T20:08:30.393Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T20:08:30.393Z] [BOT] 🚫 Skipping blacklisted job: Creator & Affiliate Marketing Manager at figma
[2026-02-01T20:08:30.393Z] [BOT] 🚫 Skipping blacklisted job: Manager, Strategic Sales at figma
[2026-02-01T20:08:30.393Z] [BOT] 🚫 Skipping blacklisted job: Partner Manager - Alliances (Commercial) at datadog
🚫 Skipping blacklisted job: Senior Technical Recruiter at samsara
[2026-02-01T20:08:30.394Z] [BOT] 🚫 Skipping blacklisted job: Manager, Trial Experience -  SaaS at gohighlevel
[2026-02-01T20:08:30.394Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Payroll Platform at gusto
🚫 Skipping blacklisted job: Principal Software Engineer - Pay Group Engineering at gusto
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
[2026-02-01T20:08:30.394Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-01T20:08:30.394Z] [BOT] 🚫 Skipping blacklisted job: Product Partnerships Deal Lead at gusto
🚫 Skipping blacklisted job: Product Marketing Manager, Builder Audience at figma
[2026-02-01T20:08:30.394Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-01T20:08:30.394Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Senior Manager, Recruiting at samsara
🚫 Skipping blacklisted job: Sr Staff Software Engineer, Gusto Pro at gusto
🚫 Skipping blacklisted job: Product Lead, v0 at vercel
[2026-02-01T20:08:30.395Z] [BOT] 🚫 Skipping blacklisted job: Senior Accountant (Platform Accounting) at gusto
🚫 Skipping blacklisted job: Regional Sales Director, Enterprise Select-South East US at samsara
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
[2026-02-01T20:08:30.395Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
[2026-02-01T20:08:30.395Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-01T20:08:30.395Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
[2026-02-01T20:08:30.395Z] [BOT] 🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
[2026-02-01T20:08:30.395Z] [BOT] 🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Product Manager, Core Product at discord
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
[2026-02-01T20:08:30.395Z] [BOT] 🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-02-01T20:08:30.395Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-02-01T20:08:30.395Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-01T20:08:30.395Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-01T20:08:30.396Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
[2026-02-01T20:08:30.397Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-01T20:08:30.446Z] [BOT] ✅ Loaded pending queue: 773 total (723 pending, 50 enriched, 0 posted)
[2026-02-01T20:08:30.522Z] [BOT] ✅ Saved pending queue: 725 total (723 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-01T20:08:30.523Z] [BOT] 📋 After blacklist filter: 2 jobs (48 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-01T20:08:30.523Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-01T20:08:30.523Z] [BOT] ⏸️ Limiting to 10 jobs this run, 48 deferred for next run
[2026-02-01T20:08:30.523Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T20:08:30.526Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T20:08:30.527Z] [BOT] 📍 [ROUTING] "Air Handling Unit Application Engineer" @ ORG_3013b18f Controls
[2026-02-01T20:08:30.527Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T20:08:30.527Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T20:08:30.545Z] [BOT ERROR] (node:2755) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T20:08:30.792Z] [BOT] ✅ Posted message: Air Handling Unit Application Engineer @ ORG_3013b18f Controls in #🤖・ai-jobs
[2026-02-01T20:08:30.792Z] [BOT] ✅ Industry: Air Handling Unit Application Engineer @ ORG_3013b18f Controls
[2026-02-01T20:08:30.793Z] [BOT] 💾 Added channel posting: Air Handling Unit Application Engineer @ ORG_3013b18f Controls → category channel (1 total channels)
[2026-02-01T20:08:30.793Z] [BOT] 💾 BEFORE MERGE: 2169 jobs in memory (cached)
[2026-02-01T20:08:30.836Z] [BOT] ✅ Loaded V2 database: 2168 jobs
💾 DISK STATE: 2168 jobs on disk
[2026-02-01T20:08:30.837Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2169
[2026-02-01T20:08:30.842Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T20:08:30.842Z] [BOT] 💾 AFTER MERGE: 2169 jobs (merged disk + memory)
[2026-02-01T20:08:30.843Z] [BOT] ✅ No jobs to archive (all 2169 jobs within 7-day window)
[2026-02-01T20:08:30.973Z] [BOT] 💾 Saved posted_jobs.json: 2169 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:08:32.641Z] [BOT] ✅ Posted message: Air Handling Unit Application Engineer @ ORG_3013b18f Controls in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T20:08:32.642Z] [BOT] 💾 Added channel posting: Air Handling Unit Application Engineer @ ORG_3013b18f Controls → location channel (2 total channels)
💾 BEFORE MERGE: 2169 jobs in memory (cached)
[2026-02-01T20:08:32.678Z] [BOT] ✅ Loaded V2 database: 2169 jobs
[2026-02-01T20:08:32.678Z] [BOT] 💾 DISK STATE: 2169 jobs on disk
[2026-02-01T20:08:32.679Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2169
[2026-02-01T20:08:32.683Z] [BOT] 🔀 Deep merged: Air Handling Unit Application Engineer @ ORG_3013b18f Controls (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T20:08:32.683Z] [BOT] 💾 AFTER MERGE: 2169 jobs (merged disk + memory)
[2026-02-01T20:08:32.684Z] [BOT] ✅ No jobs to archive (all 2169 jobs within 7-day window)
[2026-02-01T20:08:32.790Z] [BOT] 💾 Saved posted_jobs.json: 2169 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:08:37.292Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-01T20:08:37.294Z] [BOT] 📍 [ROUTING] "Account Executive, Academic Medical Centers - Beneficial Deployments" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T20:08:37.675Z] [BOT] ✅ Posted message: Account Executive, Academic Medical Centers - Beneficial Deployments @ anthropic in #💰・finance-jobs
  ✅ Industry: Account Executive, Academic Medical Centers - Beneficial Deployments @ anthropic
[2026-02-01T20:08:37.676Z] [BOT] 💾 Added channel posting: Account Executive, Academic Medical Centers - Beneficial Deployments @ anthropic → category channel (1 total channels)
[2026-02-01T20:08:37.676Z] [BOT] 💾 BEFORE MERGE: 2170 jobs in memory (cached)
[2026-02-01T20:08:37.715Z] [BOT] ✅ Loaded V2 database: 2169 jobs
💾 DISK STATE: 2169 jobs on disk
[2026-02-01T20:08:37.715Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2170
[2026-02-01T20:08:37.720Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T20:08:37.720Z] [BOT] 💾 AFTER MERGE: 2170 jobs (merged disk + memory)
[2026-02-01T20:08:37.721Z] [BOT] ✅ No jobs to archive (all 2170 jobs within 7-day window)
[2026-02-01T20:08:37.836Z] [BOT] 💾 Saved posted_jobs.json: 2170 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:08:39.563Z] [BOT] ✅ Posted message: Account Executive, Academic Medical Centers - Beneficial Deployments @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T20:08:39.564Z] [BOT] 💾 Added channel posting: Account Executive, Academic Medical Centers - Beneficial Deployments @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 2170 jobs in memory (cached)
[2026-02-01T20:08:39.599Z] [BOT] ✅ Loaded V2 database: 2170 jobs
💾 DISK STATE: 2170 jobs on disk
[2026-02-01T20:08:39.599Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2170
[2026-02-01T20:08:39.604Z] [BOT] 🔀 Deep merged: Account Executive, Academic Medical Centers - Beneficial Deployments @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-01T20:08:39.604Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2170 jobs (merged disk + memory)
[2026-02-01T20:08:39.605Z] [BOT] ✅ No jobs to archive (all 2170 jobs within 7-day window)
[2026-02-01T20:08:39.720Z] [BOT] 💾 Saved posted_jobs.json: 2170 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:08:44.219Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-01T20:08:44.220Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_315b49e0..." not found, but found as SHA256 "7deaad990e184756"
[2026-02-01T20:08:44.221Z] [BOT] ⏭️  Skipping duplicate: JID_3c8bddb3-ii_wd30259010-1 (posted within 7 days)
[2026-02-01T20:08:44.221Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "b203d2d5456d7ea1"
[2026-02-01T20:08:44.221Z] [BOT] ⏭️  Skipping duplicate: JID_676a842c (posted within 7 days)
[2026-02-01T20:08:44.260Z] [BOT] ✅ Loaded pending queue: 725 total (723 pending, 2 enriched, 0 posted)
[2026-02-01T20:08:44.327Z] [BOT] ✅ Saved pending queue: 725 total (723 pending, 0 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-02-01T20:08:44.328Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T20:08:44.433Z] [BOT] 📂 Loaded 12249 existing routing entries
[2026-02-01T20:08:44.554Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-02-01T20:08:44.554Z] [BOT] Total entries: 12251
   Timestamp: 2026-02-01T20:08:44.503Z
[2026-02-01T20:08:44.555Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T20:08:44.555Z] [BOT] Total attempts: 52
   Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-01T20:08:44.555Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T20:08:44.555Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
[2026-02-01T20:08:44.555Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #📍・JID_6daed763: 1 posts
     3. #💰・finance-jobs: 1 posts
     4. #🌉・JID_739bbc0b: 1 posts
[2026-02-01T20:08:44.556Z] [BOT] [STATS] Channel stats saved
[2026-02-01T20:08:44.556Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2170 jobs in memory (cached)
[2026-02-01T20:08:44.619Z] [BOT] ✅ Loaded V2 database: 2170 jobs
[2026-02-01T20:08:44.619Z] [BOT] 💾 DISK STATE: 2170 jobs on disk
[2026-02-01T20:08:44.620Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2170
[2026-02-01T20:08:44.624Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T20:08:44.624Z] [BOT] 💾 AFTER MERGE: 2170 jobs (merged disk + memory)
[2026-02-01T20:08:44.626Z] [BOT] ✅ No jobs to archive (all 2170 jobs within 7-day window)
[2026-02-01T20:08:44.738Z] [BOT] 💾 Saved posted_jobs.json: 2170 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:08:44.738Z] [BOT] ✅ Database saved successfully
[2026-02-01T20:08:46.765Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2755) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*