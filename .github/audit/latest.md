# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T14:01:30.470Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T14:01:10.597Z] ========================================
[2026-02-06T14:01:10.599Z] Discord Bot Execution Log
[2026-02-06T14:01:10.599Z] Environment: GitHub Actions
[2026-02-06T14:01:10.599Z] Node Version: v20.20.0
[2026-02-06T14:01:10.599Z] ========================================
[2026-02-06T14:01:10.600Z] Environment Variables Check:
[2026-02-06T14:01:10.600Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T14:01:10.600Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T14:01:10.600Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T14:01:10.600Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T14:01:10.600Z] 
Multi-Channel Configuration:
[2026-02-06T14:01:10.600Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T14:01:10.600Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:01:10.600Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:01:10.600Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T14:01:10.601Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:01:10.601Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:01:10.601Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:01:10.601Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:01:10.601Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T14:01:10.601Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T14:01:10.601Z] 
Data Files Check:
[2026-02-06T14:01:10.602Z] .github/data/new_jobs.json: ✅ Exists (10 items, 150392 bytes)
[2026-02-06T14:01:10.656Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9772657 bytes)
[2026-02-06T14:01:10.656Z] 
========================================
[2026-02-06T14:01:10.656Z] Starting Enhanced Discord Bot...
[2026-02-06T14:01:10.656Z] ========================================
[2026-02-06T14:01:11.249Z] [BOT] ✅ Loaded V2 database: 2017 jobs
[2026-02-06T14:01:12.238Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T14:01:12.238Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T14:01:12.239Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T14:01:12.252Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-06T14:01:12.252Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T14:01:12.253Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T14:01:12.253Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T14:01:12.254Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T14:01:12.254Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T14:01:12.270Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T14:01:12.271Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
[2026-02-06T14:01:12.271Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
[2026-02-06T14:01:12.271Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-02-06T14:01:12.271Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
[2026-02-06T14:01:12.271Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
[2026-02-06T14:01:12.272Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
[2026-02-06T14:01:12.272Z] [BOT] 🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-06T14:01:12.272Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
[2026-02-06T14:01:12.272Z] [BOT] 🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
[2026-02-06T14:01:12.272Z] [BOT] 🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
[2026-02-06T14:01:12.272Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-06T14:01:12.272Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
[2026-02-06T14:01:12.272Z] [BOT] 🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
[2026-02-06T14:01:12.284Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-06T14:01:12.308Z] [BOT] ✅ Saved pending queue: 171 total (167 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-06T14:01:12.308Z] [BOT] 📋 After blacklist filter: 2 jobs (46 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-06T14:01:12.309Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-06T14:01:12.309Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T14:01:12.311Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-06T14:01:12.312Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
[2026-02-06T14:01:12.312Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T14:01:12.329Z] [BOT ERROR] (node:2759) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T14:01:13.316Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
  ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-02-06T14:01:13.317Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-02-06T14:01:13.317Z] [BOT] 💾 BEFORE MERGE: 2018 jobs in memory (cached)
[2026-02-06T14:01:13.361Z] [BOT] ✅ Loaded V2 database: 2017 jobs
💾 DISK STATE: 2017 jobs on disk
[2026-02-06T14:01:13.362Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2018
[2026-02-06T14:01:13.367Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T14:01:13.367Z] [BOT] 💾 AFTER MERGE: 2018 jobs (merged disk + memory)
[2026-02-06T14:01:13.368Z] [BOT] ✅ No jobs to archive (all 2018 jobs within 7-day window)
[2026-02-06T14:01:13.469Z] [BOT] 💾 Saved posted_jobs.json: 2018 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T14:01:17.973Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T14:01:17.974Z] [BOT] 📍 [ROUTING] "Software Engineer II - Kentico" @ ORG_489cae25 USA Experienced Career Site
[2026-02-06T14:01:17.974Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T14:01:20.113Z] [BOT] ✅ Posted message: Software Engineer II - Kentico @ ORG_489cae25 USA Experienced Career Site in #💻・tech-jobs
[2026-02-06T14:01:20.113Z] [BOT] ✅ Industry: Software Engineer II - Kentico @ ORG_489cae25 USA Experienced Career Site
[2026-02-06T14:01:20.114Z] [BOT] 💾 Added channel posting: Software Engineer II - Kentico @ ORG_489cae25 USA Experienced Career Site → category channel (1 total channels)
[2026-02-06T14:01:20.114Z] [BOT] 💾 BEFORE MERGE: 2019 jobs in memory (cached)
[2026-02-06T14:01:20.149Z] [BOT] ✅ Loaded V2 database: 2018 jobs
[2026-02-06T14:01:20.149Z] [BOT] 💾 DISK STATE: 2018 jobs on disk
[2026-02-06T14:01:20.149Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2019
[2026-02-06T14:01:20.154Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T14:01:20.154Z] [BOT] 💾 AFTER MERGE: 2019 jobs (merged disk + memory)
[2026-02-06T14:01:20.155Z] [BOT] ✅ No jobs to archive (all 2019 jobs within 7-day window)
[2026-02-06T14:01:20.264Z] [BOT] 💾 Saved posted_jobs.json: 2019 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T14:01:22.028Z] [BOT] ✅ Posted message: Software Engineer II - Kentico @ ORG_489cae25 USA Experienced Career Site in #🌲・JID_efdf5921
[2026-02-06T14:01:22.028Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-06T14:01:22.029Z] [BOT] 💾 Added channel posting: Software Engineer II - Kentico @ ORG_489cae25 USA Experienced Career Site → location channel (2 total channels)
[2026-02-06T14:01:22.029Z] [BOT] 💾 BEFORE MERGE: 2019 jobs in memory (cached)
[2026-02-06T14:01:22.062Z] [BOT] ✅ Loaded V2 database: 2019 jobs
💾 DISK STATE: 2019 jobs on disk
[2026-02-06T14:01:22.063Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2019
[2026-02-06T14:01:22.067Z] [BOT] 🔀 Deep merged: Software Engineer II - Kentico @ ORG_489cae25 USA Experienced Career Site (disk: 1 channels → merged: 2 channels)
[2026-02-06T14:01:22.067Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2019 jobs (merged disk + memory)
[2026-02-06T14:01:22.068Z] [BOT] ✅ No jobs to archive (all 2019 jobs within 7-day window)
[2026-02-06T14:01:22.177Z] [BOT] 💾 Saved posted_jobs.json: 2019 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T14:01:26.676Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-06T14:01:26.678Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "ec82164949ddd5be"
[2026-02-06T14:01:26.678Z] [BOT] ⏭️  Skipping duplicate: JID_ec27db39 (posted within 7 days)
[2026-02-06T14:01:26.678Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4adc40df..." not found, but found as SHA256 "6c24f0a5a27593e0"
⏭️  Skipping duplicate: JID_8c6f7e88 (posted within 7 days)
[2026-02-06T14:01:26.688Z] [BOT] ✅ Loaded pending queue: 171 total (167 pending, 4 enriched, 0 posted)
[2026-02-06T14:01:26.704Z] [BOT] ✅ Saved pending queue: 171 total (167 pending, 2 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-02-06T14:01:26.704Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T14:01:26.816Z] [BOT] 📂 Loaded 12546 existing routing entries
[2026-02-06T14:01:26.940Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12548
[2026-02-06T14:01:26.940Z] [BOT] Timestamp: 2026-02-06T14:01:26.886Z
[2026-02-06T14:01:26.940Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T14:01:26.940Z] [BOT] Total attempts: 51
   Successful: 3
   Failed: 0
   Skipped: 48
[2026-02-06T14:01:26.941Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T14:01:26.941Z] [BOT] Last cleanup: Never
   Total posts: 3
   Channels used: 3
   Top channels:
[2026-02-06T14:01:26.941Z] [BOT] 1. #💰・finance-jobs: 1 posts
     2. #💻・tech-jobs: 1 posts
     3. #🌲・JID_efdf5921: 1 posts
[2026-02-06T14:01:26.941Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T14:01:26.941Z] [BOT] 💾 BEFORE MERGE: 2019 jobs in memory (cached)
[2026-02-06T14:01:26.992Z] [BOT] ✅ Loaded V2 database: 2019 jobs
💾 DISK STATE: 2019 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2019
[2026-02-06T14:01:26.997Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T14:01:26.998Z] [BOT] 💾 AFTER MERGE: 2019 jobs (merged disk + memory)
[2026-02-06T14:01:26.999Z] [BOT] ✅ No jobs to archive (all 2019 jobs within 7-day window)
[2026-02-06T14:01:27.128Z] [BOT] 💾 Saved posted_jobs.json: 2019 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T14:01:29.148Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2759) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*