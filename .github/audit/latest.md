# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T19:58:41.282Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T19:58:24.453Z] ========================================
[2026-02-01T19:58:24.455Z] Discord Bot Execution Log
[2026-02-01T19:58:24.455Z] Environment: GitHub Actions
[2026-02-01T19:58:24.455Z] Node Version: v20.20.0
[2026-02-01T19:58:24.455Z] ========================================
[2026-02-01T19:58:24.455Z] Environment Variables Check:
[2026-02-01T19:58:24.455Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T19:58:24.455Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T19:58:24.455Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T19:58:24.456Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T19:58:24.456Z] 
Multi-Channel Configuration:
[2026-02-01T19:58:24.456Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T19:58:24.456Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:58:24.456Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:58:24.456Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T19:58:24.456Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:58:24.456Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:58:24.456Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:58:24.456Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:58:24.456Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T19:58:24.456Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T19:58:24.457Z] 
Data Files Check:
[2026-02-01T19:58:24.457Z] .github/data/new_jobs.json: ✅ Exists (10 items, 92040 bytes)
[2026-02-01T19:58:24.510Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10804437 bytes)
[2026-02-01T19:58:24.511Z] 
========================================
[2026-02-01T19:58:24.511Z] Starting Enhanced Discord Bot...
[2026-02-01T19:58:24.511Z] ========================================
[2026-02-01T19:58:25.081Z] [BOT] ✅ Loaded V2 database: 2166 jobs
[2026-02-01T19:58:25.949Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T19:58:25.949Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T19:58:25.949Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T19:58:26.000Z] [BOT] ✅ Loaded pending queue: 775 total (725 pending, 50 enriched, 0 posted)
[2026-02-01T19:58:26.001Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Product Marketing Manager, Duolingo Chess at duolingo
[2026-02-01T19:58:26.021Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T19:58:26.022Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
[2026-02-01T19:58:26.022Z] [BOT] 🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-01T19:58:26.022Z] [BOT] 🚫 Skipping blacklisted job: Senior AI Engineering Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-01T19:58:26.022Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-01T19:58:26.022Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-01T19:58:26.023Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-01T19:58:26.024Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Monetization at duolingo
🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Financial Forecasting at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Manager Consumer Business Development, TV Partnerships at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer - Majors Northeast at datadog
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Director, Product Counseling at vercel
🚫 Skipping blacklisted job: Graduate Leadership Engineer - Computer Engineering at Westinghouse Electric Company
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Workforce Management Contact Routing Lead at gusto
🚫 Skipping blacklisted job: Data Science Senior Manager at gusto
🚫 Skipping blacklisted job: Technology Leadership Development Program Associate at Ameriprise Financial
🚫 Skipping blacklisted job: Senior Manager, Business Development at brex
🚫 Skipping blacklisted job: Senior Manager, Business Development (Embedded Finance) at brex
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Senior Solutions Consultant at airtable
🚫 Skipping blacklisted job: Lead Solutions Consultant at airtable
🚫 Skipping blacklisted job: Engineering Manager, AI Product at airtable
🚫 Skipping blacklisted job: Benefits Customer Onboarding Manager at gusto
🚫 Skipping blacklisted job: Senior Manager, National Technology Partners  at brex
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Manager I, Engineering - Applied AI - Natural Language & Conversational Interfaces at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-01T19:58:26.024Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer – Fabric at datadog
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Senior Sales Operations Analyst - Health Insurance at gusto
[2026-02-01T19:58:26.071Z] [BOT] ✅ Loaded pending queue: 775 total (725 pending, 50 enriched, 0 posted)
[2026-02-01T19:58:26.151Z] [BOT] ✅ Saved pending queue: 727 total (725 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (48 blacklisted)
[2026-02-01T19:58:26.151Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-01T19:58:26.152Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-01T19:58:26.152Z] [BOT] ⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T19:58:26.152Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T19:58:26.154Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Wisconsin - US" @ ORG_f3ae3598
[2026-02-01T19:58:26.154Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T19:58:26.171Z] [BOT ERROR] (node:2940) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T19:58:27.242Z] [BOT] ✅ Posted message: AI Data Specialist - Wisconsin - US @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-02-01T19:58:27.242Z] [BOT] ✅ Industry: AI Data Specialist - Wisconsin - US @ ORG_f3ae3598
[2026-02-01T19:58:27.243Z] [BOT] 💾 Added channel posting: AI Data Specialist - Wisconsin - US @ ORG_f3ae3598 → category channel (1 total channels)
[2026-02-01T19:58:27.243Z] [BOT] 💾 BEFORE MERGE: 2167 jobs in memory (cached)
[2026-02-01T19:58:27.290Z] [BOT] ✅ Loaded V2 database: 2166 jobs
💾 DISK STATE: 2166 jobs on disk
[2026-02-01T19:58:27.290Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2167
[2026-02-01T19:58:27.296Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:58:27.296Z] [BOT] 💾 AFTER MERGE: 2167 jobs (merged disk + memory)
[2026-02-01T19:58:27.297Z] [BOT] ✅ No jobs to archive (all 2167 jobs within 7-day window)
[2026-02-01T19:58:27.439Z] [BOT] 💾 Saved posted_jobs.json: 2167 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:58:29.161Z] [BOT] ✅ Posted message: AI Data Specialist - Wisconsin - US @ ORG_f3ae3598 in #📍・JID_6daed763
[2026-02-01T19:58:29.161Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T19:58:29.161Z] [BOT] 💾 Added channel posting: AI Data Specialist - Wisconsin - US @ ORG_f3ae3598 → location channel (2 total channels)
💾 BEFORE MERGE: 2167 jobs in memory (cached)
[2026-02-01T19:58:29.199Z] [BOT] ✅ Loaded V2 database: 2167 jobs
💾 DISK STATE: 2167 jobs on disk
[2026-02-01T19:58:29.199Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2167
[2026-02-01T19:58:29.204Z] [BOT] 🔀 Deep merged: AI Data Specialist - Wisconsin - US @ ORG_f3ae3598 (disk: 1 channels → merged: 2 channels)
[2026-02-01T19:58:29.204Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2167 jobs (merged disk + memory)
[2026-02-01T19:58:29.205Z] [BOT] ✅ No jobs to archive (all 2167 jobs within 7-day window)
[2026-02-01T19:58:29.309Z] [BOT] 💾 Saved posted_jobs.json: 2167 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:58:30.813Z] [BOT] 📍 [ROUTING] "AI Data Specialist - West Virginia - US" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
[2026-02-01T19:58:30.813Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T19:58:30.983Z] [BOT] ✅ Posted message: AI Data Specialist - West Virginia - US @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-02-01T19:58:30.983Z] [BOT] ✅ Industry: AI Data Specialist - West Virginia - US @ ORG_f3ae3598
[2026-02-01T19:58:30.984Z] [BOT] 💾 Added channel posting: AI Data Specialist - West Virginia - US @ ORG_f3ae3598 → category channel (1 total channels)
[2026-02-01T19:58:30.984Z] [BOT] 💾 BEFORE MERGE: 2168 jobs in memory (cached)
[2026-02-01T19:58:31.022Z] [BOT] ✅ Loaded V2 database: 2167 jobs
💾 DISK STATE: 2167 jobs on disk
[2026-02-01T19:58:31.023Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2168
[2026-02-01T19:58:31.027Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T19:58:31.027Z] [BOT] 💾 AFTER MERGE: 2168 jobs (merged disk + memory)
[2026-02-01T19:58:31.028Z] [BOT] ✅ No jobs to archive (all 2168 jobs within 7-day window)
[2026-02-01T19:58:31.139Z] [BOT] 💾 Saved posted_jobs.json: 2168 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:58:32.883Z] [BOT] ✅ Posted message: AI Data Specialist - West Virginia - US @ ORG_f3ae3598 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T19:58:32.884Z] [BOT] 💾 Added channel posting: AI Data Specialist - West Virginia - US @ ORG_f3ae3598 → location channel (2 total channels)
[2026-02-01T19:58:32.884Z] [BOT] 💾 BEFORE MERGE: 2168 jobs in memory (cached)
[2026-02-01T19:58:32.926Z] [BOT] ✅ Loaded V2 database: 2168 jobs
💾 DISK STATE: 2168 jobs on disk
[2026-02-01T19:58:32.929Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2168
[2026-02-01T19:58:32.939Z] [BOT] 🔀 Deep merged: AI Data Specialist - West Virginia - US @ ORG_f3ae3598 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T19:58:32.939Z] [BOT] 💾 AFTER MERGE: 2168 jobs (merged disk + memory)
[2026-02-01T19:58:32.941Z] [BOT] ✅ No jobs to archive (all 2168 jobs within 7-day window)
[2026-02-01T19:58:33.042Z] [BOT] 💾 Saved posted_jobs.json: 2168 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T19:58:37.545Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-01T19:58:37.546Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_28f48e8f..." not found, but found as SHA256 "e3cf31cb4ba709d0"
[2026-02-01T19:58:37.547Z] [BOT] ⏭️  Skipping duplicate: JID_ce06c044 (posted within 7 days)
[2026-02-01T19:58:37.547Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_798e791c..." not found, but found as SHA256 "5e54bf74a13ef5d4"
⏭️  Skipping duplicate: JID_a09e3828 (posted within 7 days)
[2026-02-01T19:58:37.586Z] [BOT] ✅ Loaded pending queue: 727 total (725 pending, 2 enriched, 0 posted)
[2026-02-01T19:58:37.656Z] [BOT] ✅ Saved pending queue: 727 total (725 pending, 0 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T19:58:37.747Z] [BOT] 📂 Loaded 12247 existing routing entries
[2026-02-01T19:58:37.885Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T19:58:37.885Z] [BOT] New entries: 2
   Total entries: 12249
   Timestamp: 2026-02-01T19:58:37.834Z
[2026-02-01T19:58:37.886Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T19:58:37.886Z] [BOT] Total attempts: 52
   Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-01T19:58:37.886Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T19:58:37.886Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2026-02-01T19:58:37.886Z] [BOT] 1. #🤖・ai-jobs: 2 posts
     2. #📍・JID_6daed763: 1 posts
     3. #🏠・JID_ead674af: 1 posts
[2026-02-01T19:58:37.886Z] [BOT] [STATS] Channel stats saved
[2026-02-01T19:58:37.887Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2168 jobs in memory (cached)
[2026-02-01T19:58:37.929Z] [BOT] ✅ Loaded V2 database: 2168 jobs
💾 DISK STATE: 2168 jobs on disk
[2026-02-01T19:58:37.929Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2168
[2026-02-01T19:58:37.933Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2168 jobs (merged disk + memory)
[2026-02-01T19:58:37.935Z] [BOT] ✅ No jobs to archive (all 2168 jobs within 7-day window)
[2026-02-01T19:58:38.053Z] [BOT] 💾 Saved posted_jobs.json: 2168 active jobs
[2026-02-01T19:58:38.053Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T19:58:40.082Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2940) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*