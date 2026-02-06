# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T21:35:38.502Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T21:35:19.746Z] ========================================
[2026-02-06T21:35:19.748Z] Discord Bot Execution Log
[2026-02-06T21:35:19.748Z] Environment: GitHub Actions
[2026-02-06T21:35:19.748Z] Node Version: v20.20.0
[2026-02-06T21:35:19.748Z] ========================================
[2026-02-06T21:35:19.748Z] Environment Variables Check:
[2026-02-06T21:35:19.748Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T21:35:19.748Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T21:35:19.748Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T21:35:19.749Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T21:35:19.749Z] 
Multi-Channel Configuration:
[2026-02-06T21:35:19.749Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T21:35:19.749Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:35:19.749Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:35:19.749Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T21:35:19.749Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:35:19.749Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:35:19.749Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:35:19.749Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:35:19.749Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:35:19.749Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T21:35:19.749Z] 
Data Files Check:
[2026-02-06T21:35:19.751Z] .github/data/new_jobs.json: ✅ Exists (10 items, 170387 bytes)
[2026-02-06T21:35:19.803Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8605116 bytes)
[2026-02-06T21:35:19.803Z] 
========================================
[2026-02-06T21:35:19.803Z] Starting Enhanced Discord Bot...
[2026-02-06T21:35:19.803Z] ========================================
[2026-02-06T21:35:20.375Z] [BOT] ✅ Loaded V2 database: 1845 jobs
[2026-02-06T21:35:21.020Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T21:35:21.020Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T21:35:21.020Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T21:35:21.041Z] [BOT] ✅ Loaded pending queue: 224 total (174 pending, 50 enriched, 0 posted)
[2026-02-06T21:35:21.042Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T21:35:21.043Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T21:35:21.043Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T21:35:21.044Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T21:35:21.044Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T21:35:21.057Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T21:35:21.057Z] [BOT] 🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
[2026-02-06T21:35:21.057Z] [BOT] 🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
[2026-02-06T21:35:21.057Z] [BOT] 🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-06T21:35:21.057Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
[2026-02-06T21:35:21.058Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-02-06T21:35:21.058Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-06T21:35:21.058Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Southeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Web Producer Manager at airtable
[2026-02-06T21:35:21.058Z] [BOT] 🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Brand Designer at brex
[2026-02-06T21:35:21.058Z] [BOT] 🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
[2026-02-06T21:35:21.058Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
[2026-02-06T21:35:21.058Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
[2026-02-06T21:35:21.058Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
[2026-02-06T21:35:21.058Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-06T21:35:21.079Z] [BOT] ✅ Loaded pending queue: 224 total (174 pending, 50 enriched, 0 posted)
[2026-02-06T21:35:21.105Z] [BOT] ✅ Saved pending queue: 178 total (174 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (46 blacklisted)
[2026-02-06T21:35:21.105Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-06T21:35:21.106Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-06T21:35:21.106Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T21:35:21.107Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T21:35:21.108Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer Intern - Global Industries" @ ORG_6a73c304
[2026-02-06T21:35:21.109Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-06T21:35:21.126Z] [BOT ERROR] (node:2831) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T21:35:21.720Z] [BOT] ✅ Posted message: Undergrad Software Engineer Intern - Global Industries @ ORG_6a73c304 in #🤖・ai-jobs
[2026-02-06T21:35:21.720Z] [BOT] ✅ Industry: Undergrad Software Engineer Intern - Global Industries @ ORG_6a73c304
[2026-02-06T21:35:21.722Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer Intern - Global Industries @ ORG_6a73c304 → category channel (1 total channels)
[2026-02-06T21:35:21.722Z] [BOT] 💾 BEFORE MERGE: 1846 jobs in memory (cached)
[2026-02-06T21:35:21.761Z] [BOT] ✅ Loaded V2 database: 1845 jobs
💾 DISK STATE: 1845 jobs on disk
[2026-02-06T21:35:21.762Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1846
[2026-02-06T21:35:21.770Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T21:35:21.770Z] [BOT] 💾 AFTER MERGE: 1846 jobs (merged disk + memory)
[2026-02-06T21:35:21.772Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T21:35:21.778Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 1836 active
[2026-02-06T21:35:21.888Z] [BOT] 💾 Saved posted_jobs.json: 1836 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:35:23.845Z] [BOT] ✅ Posted message: Undergrad Software Engineer Intern - Global Industries @ ORG_6a73c304 in #📍・JID_6daed763
[2026-02-06T21:35:23.846Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T21:35:23.846Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer Intern - Global Industries @ ORG_6a73c304 → location channel (2 total channels)
[2026-02-06T21:35:23.846Z] [BOT] 💾 BEFORE MERGE: 1836 jobs in memory (cached)
[2026-02-06T21:35:23.877Z] [BOT] ✅ Loaded V2 database: 1836 jobs
💾 DISK STATE: 1836 jobs on disk
[2026-02-06T21:35:23.877Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1836
[2026-02-06T21:35:23.885Z] [BOT] 🔀 Deep merged: Undergrad Software Engineer Intern - Global Industries @ ORG_6a73c304 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T21:35:23.885Z] [BOT] 💾 AFTER MERGE: 1836 jobs (merged disk + memory)
[2026-02-06T21:35:23.886Z] [BOT] ✅ No jobs to archive (all 1836 jobs within 7-day window)
[2026-02-06T21:35:23.975Z] [BOT] 💾 Saved posted_jobs.json: 1836 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:35:28.477Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T21:35:28.479Z] [BOT] 📍 [ROUTING] "Computer Engineering Intern" @ ORG_324d13b9 Connect North America
[2026-02-06T21:35:28.479Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T21:35:28.860Z] [BOT] ✅ Posted message: Computer Engineering Intern @ ORG_324d13b9 Connect North America in #💻・tech-jobs
  ✅ Industry: Computer Engineering Intern @ ORG_324d13b9 Connect North America
[2026-02-06T21:35:28.861Z] [BOT] 💾 Added channel posting: Computer Engineering Intern @ ORG_324d13b9 Connect North America → category channel (1 total channels)
[2026-02-06T21:35:28.861Z] [BOT] 💾 BEFORE MERGE: 1837 jobs in memory (cached)
[2026-02-06T21:35:28.892Z] [BOT] ✅ Loaded V2 database: 1836 jobs
💾 DISK STATE: 1836 jobs on disk
[2026-02-06T21:35:28.893Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1837
[2026-02-06T21:35:28.901Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T21:35:28.901Z] [BOT] 💾 AFTER MERGE: 1837 jobs (merged disk + memory)
[2026-02-06T21:35:28.902Z] [BOT] ✅ No jobs to archive (all 1837 jobs within 7-day window)
[2026-02-06T21:35:29.009Z] [BOT] 💾 Saved posted_jobs.json: 1837 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:35:30.664Z] [BOT] ✅ Posted message: Computer Engineering Intern @ ORG_324d13b9 Connect North America in #📍・JID_6daed763
[2026-02-06T21:35:30.664Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T21:35:30.665Z] [BOT] 💾 Added channel posting: Computer Engineering Intern @ ORG_324d13b9 Connect North America → location channel (2 total channels)
[2026-02-06T21:35:30.665Z] [BOT] 💾 BEFORE MERGE: 1837 jobs in memory (cached)
[2026-02-06T21:35:30.696Z] [BOT] ✅ Loaded V2 database: 1837 jobs
💾 DISK STATE: 1837 jobs on disk
[2026-02-06T21:35:30.696Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1837
[2026-02-06T21:35:30.702Z] [BOT] 🔀 Deep merged: Computer Engineering Intern @ ORG_324d13b9 Connect North America (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T21:35:30.702Z] [BOT] 💾 AFTER MERGE: 1837 jobs (merged disk + memory)
[2026-02-06T21:35:30.703Z] [BOT] ✅ No jobs to archive (all 1837 jobs within 7-day window)
[2026-02-06T21:35:30.800Z] [BOT] 💾 Saved posted_jobs.json: 1837 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:35:35.300Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-06T21:35:35.301Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ee8f87fa..." not found, but found as SHA256 "85ffcb544f3e4bd1"
[2026-02-06T21:35:35.301Z] [BOT] ⏭️  Skipping duplicate: JID_689176cd (posted within 7 days)
[2026-02-06T21:35:35.302Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2565358c..." not found, but found as SHA256 "44c4d9473a5040a1"
⏭️  Skipping duplicate: JID_51a5d0a3 (posted within 7 days)
[2026-02-06T21:35:35.313Z] [BOT] ✅ Loaded pending queue: 178 total (174 pending, 4 enriched, 0 posted)
[2026-02-06T21:35:35.329Z] [BOT] ✅ Saved pending queue: 178 total (174 pending, 2 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T21:35:35.433Z] [BOT] 📂 Loaded 12595 existing routing entries
[2026-02-06T21:35:35.567Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12597
   Timestamp: 2026-02-06T21:35:35.520Z
[2026-02-06T21:35:35.568Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 52
[2026-02-06T21:35:35.568Z] [BOT] Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-06T21:35:35.568Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
[2026-02-06T21:35:35.569Z] [BOT] Channels used: 3
   Top channels:
     1. #📍・JID_6daed763: 2 posts
     2. #🤖・ai-jobs: 1 posts
     3. #💻・tech-jobs: 1 posts
[2026-02-06T21:35:35.569Z] [BOT] [STATS] Channel stats saved
[2026-02-06T21:35:35.569Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1837 jobs in memory (cached)
[2026-02-06T21:35:35.615Z] [BOT] ✅ Loaded V2 database: 1837 jobs
💾 DISK STATE: 1837 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1837
[2026-02-06T21:35:35.618Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1837 jobs (merged disk + memory)
[2026-02-06T21:35:35.620Z] [BOT] ✅ No jobs to archive (all 1837 jobs within 7-day window)
[2026-02-06T21:35:35.735Z] [BOT] 💾 Saved posted_jobs.json: 1837 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T21:35:37.755Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2831) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*