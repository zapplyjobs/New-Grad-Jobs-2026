# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T02:46:46.932Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 6
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T02:46:34.836Z] ========================================
[2026-02-06T02:46:34.838Z] Discord Bot Execution Log
[2026-02-06T02:46:34.838Z] Environment: GitHub Actions
[2026-02-06T02:46:34.838Z] Node Version: v20.20.0
[2026-02-06T02:46:34.838Z] ========================================
[2026-02-06T02:46:34.838Z] Environment Variables Check:
[2026-02-06T02:46:34.838Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T02:46:34.838Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T02:46:34.838Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T02:46:34.839Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T02:46:34.839Z] 
Multi-Channel Configuration:
[2026-02-06T02:46:34.839Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T02:46:34.839Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T02:46:34.839Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T02:46:34.839Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T02:46:34.839Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T02:46:34.839Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T02:46:34.839Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T02:46:34.839Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T02:46:34.839Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T02:46:34.839Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T02:46:34.839Z] 
Data Files Check:
[2026-02-06T02:46:34.841Z] .github/data/new_jobs.json: ✅ Exists (10 items, 170314 bytes)
[2026-02-06T02:46:34.901Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11254964 bytes)
[2026-02-06T02:46:34.901Z] 
========================================
[2026-02-06T02:46:34.901Z] Starting Enhanced Discord Bot...
[2026-02-06T02:46:34.901Z] ========================================
[2026-02-06T02:46:35.471Z] [BOT] ✅ Loaded V2 database: 2228 jobs
[2026-02-06T02:46:36.039Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T02:46:36.040Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T02:46:36.040Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T02:46:36.054Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-06T02:46:36.054Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T02:46:36.055Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-06T02:46:36.055Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-06T02:46:36.055Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T02:46:36.056Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T02:46:36.056Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T02:46:36.056Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T02:46:36.057Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T02:46:36.057Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T02:46:36.057Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T02:46:36.057Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-06T02:46:36.058Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T02:46:36.058Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T02:46:36.074Z] [BOT] 📬 Found 44 new jobs (6 already posted)...
[2026-02-06T02:46:36.074Z] [BOT] 🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
[2026-02-06T02:46:36.074Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-06T02:46:36.074Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-06T02:46:36.074Z] [BOT] 🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
[2026-02-06T02:46:36.075Z] [BOT] 🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-06T02:46:36.075Z] [BOT] 🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Brand Designer at brex
[2026-02-06T02:46:36.075Z] [BOT] 🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
[2026-02-06T02:46:36.075Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
[2026-02-06T02:46:36.075Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
[2026-02-06T02:46:36.075Z] [BOT] 🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
[2026-02-06T02:46:36.075Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
[2026-02-06T02:46:36.075Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
[2026-02-06T02:46:36.089Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-06T02:46:36.114Z] [BOT] ✅ Saved pending queue: 176 total (169 pending, 7 enriched, 0 posted)
🗑️ Removed 43 blacklisted jobs from pending queue
[2026-02-06T02:46:36.114Z] [BOT] 📋 After blacklist filter: 1 jobs (43 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-06T02:46:36.115Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 43 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T02:46:36.116Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T02:46:36.117Z] [BOT] 📍 [ROUTING] "Data Center Controls Engineer" @ anthropic
[2026-02-06T02:46:36.117Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T02:46:36.134Z] [BOT ERROR] (node:2980) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T02:46:36.514Z] [BOT] ✅ Posted message: Data Center Controls Engineer @ anthropic in #💻・tech-jobs
  ✅ Industry: Data Center Controls Engineer @ anthropic
[2026-02-06T02:46:36.515Z] [BOT] 💾 Added channel posting: Data Center Controls Engineer @ anthropic → category channel (1 total channels)
[2026-02-06T02:46:36.515Z] [BOT] 💾 BEFORE MERGE: 2229 jobs in memory (cached)
[2026-02-06T02:46:36.559Z] [BOT] ✅ Loaded V2 database: 2228 jobs
💾 DISK STATE: 2228 jobs on disk
[2026-02-06T02:46:36.559Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2229
[2026-02-06T02:46:36.565Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T02:46:36.565Z] [BOT] 💾 AFTER MERGE: 2229 jobs (merged disk + memory)
[2026-02-06T02:46:36.567Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T02:46:36.573Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-02-06T02:46:36.573Z] [BOT] ✅ Archiving complete: 20 archived, 2209 active
[2026-02-06T02:46:36.687Z] [BOT] 💾 Saved posted_jobs.json: 2209 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T02:46:38.416Z] [BOT] ✅ Posted message: Data Center Controls Engineer @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T02:46:38.417Z] [BOT] 💾 Added channel posting: Data Center Controls Engineer @ anthropic → location channel (2 total channels)
[2026-02-06T02:46:38.417Z] [BOT] 💾 BEFORE MERGE: 2209 jobs in memory (cached)
[2026-02-06T02:46:38.460Z] [BOT] ✅ Loaded V2 database: 2209 jobs
[2026-02-06T02:46:38.463Z] [BOT] 💾 DISK STATE: 2209 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2209
[2026-02-06T02:46:38.467Z] [BOT] 🔀 Deep merged: Data Center Controls Engineer @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T02:46:38.467Z] [BOT] 💾 AFTER MERGE: 2209 jobs (merged disk + memory)
[2026-02-06T02:46:38.469Z] [BOT] ✅ No jobs to archive (all 2209 jobs within 7-day window)
[2026-02-06T02:46:38.579Z] [BOT] 💾 Saved posted_jobs.json: 2209 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T02:46:43.080Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-06T02:46:43.082Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "29e68e89167941ae"
[2026-02-06T02:46:43.082Z] [BOT] ⏭️  Skipping duplicate: JID_fe6a0bb3 (posted within 7 days)
[2026-02-06T02:46:43.091Z] [BOT] ✅ Loaded pending queue: 176 total (169 pending, 7 enriched, 0 posted)
[2026-02-06T02:46:43.110Z] [BOT] ✅ Saved pending queue: 176 total (169 pending, 6 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-06T02:46:43.110Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T02:46:43.202Z] [BOT] 📂 Loaded 12489 existing routing entries
[2026-02-06T02:46:43.335Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-06T02:46:43.335Z] [BOT] Total entries: 12490
   Timestamp: 2026-02-06T02:46:43.283Z
[2026-02-06T02:46:43.336Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-06T02:46:43.336Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T02:46:43.336Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-06T02:46:43.336Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-06T02:46:43.337Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2209 jobs in memory (cached)
[2026-02-06T02:46:43.385Z] [BOT] ✅ Loaded V2 database: 2209 jobs
💾 DISK STATE: 2209 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2209
[2026-02-06T02:46:43.394Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T02:46:43.394Z] [BOT] 💾 AFTER MERGE: 2209 jobs (merged disk + memory)
[2026-02-06T02:46:43.396Z] [BOT] ✅ No jobs to archive (all 2209 jobs within 7-day window)
[2026-02-06T02:46:43.501Z] [BOT] 💾 Saved posted_jobs.json: 2209 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T02:46:45.521Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2980) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*