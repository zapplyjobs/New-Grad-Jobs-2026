# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T22:33:46.529Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T22:33:27.092Z] ========================================
[2026-02-06T22:33:27.094Z] Discord Bot Execution Log
[2026-02-06T22:33:27.094Z] Environment: GitHub Actions
[2026-02-06T22:33:27.094Z] Node Version: v20.20.0
[2026-02-06T22:33:27.095Z] ========================================
[2026-02-06T22:33:27.095Z] Environment Variables Check:
[2026-02-06T22:33:27.095Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T22:33:27.095Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T22:33:27.095Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T22:33:27.095Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T22:33:27.095Z] 
Multi-Channel Configuration:
[2026-02-06T22:33:27.095Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T22:33:27.095Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:33:27.095Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:33:27.095Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T22:33:27.096Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:33:27.096Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:33:27.096Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:33:27.096Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:33:27.096Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:33:27.096Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T22:33:27.096Z] 
Data Files Check:
[2026-02-06T22:33:27.097Z] .github/data/new_jobs.json: ✅ Exists (10 items, 141835 bytes)
[2026-02-06T22:33:27.139Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8413780 bytes)
[2026-02-06T22:33:27.139Z] 
========================================
[2026-02-06T22:33:27.139Z] Starting Enhanced Discord Bot...
[2026-02-06T22:33:27.139Z] ========================================
[2026-02-06T22:33:27.719Z] [BOT] ✅ Loaded V2 database: 1814 jobs
[2026-02-06T22:33:28.738Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T22:33:28.739Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T22:33:28.739Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T22:33:28.757Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-06T22:33:28.757Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T22:33:28.758Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T22:33:28.759Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T22:33:28.759Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T22:33:28.759Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T22:33:28.776Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T22:33:28.776Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
[2026-02-06T22:33:28.776Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
[2026-02-06T22:33:28.776Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
[2026-02-06T22:33:28.777Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
[2026-02-06T22:33:28.777Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
[2026-02-06T22:33:28.777Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
[2026-02-06T22:33:28.777Z] [BOT] 🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-06T22:33:28.777Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
[2026-02-06T22:33:28.777Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Southeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Web Producer Manager at airtable
🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
[2026-02-06T22:33:28.777Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
[2026-02-06T22:33:28.777Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
[2026-02-06T22:33:28.777Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
[2026-02-06T22:33:28.777Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-06T22:33:28.798Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-06T22:33:28.825Z] [BOT] ✅ Saved pending queue: 172 total (168 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-06T22:33:28.825Z] [BOT] 📋 After blacklist filter: 2 jobs (46 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-06T22:33:28.826Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-06T22:33:28.826Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T22:33:28.828Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-06T22:33:28.830Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ brex
[2026-02-06T22:33:28.830Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T22:33:28.847Z] [BOT ERROR] (node:2840) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T22:33:29.253Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #💰・finance-jobs
[2026-02-06T22:33:29.253Z] [BOT] ✅ Industry: Account Executive, Mid Market @ brex
[2026-02-06T22:33:29.254Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → category channel (1 total channels)
[2026-02-06T22:33:29.254Z] [BOT] 💾 BEFORE MERGE: 1815 jobs in memory (cached)
[2026-02-06T22:33:29.289Z] [BOT] ✅ Loaded V2 database: 1814 jobs
💾 DISK STATE: 1814 jobs on disk
[2026-02-06T22:33:29.290Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1815
[2026-02-06T22:33:29.294Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T22:33:29.294Z] [BOT] 💾 AFTER MERGE: 1815 jobs (merged disk + memory)
[2026-02-06T22:33:29.299Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T22:33:29.305Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 1805 active
[2026-02-06T22:33:29.395Z] [BOT] 💾 Saved posted_jobs.json: 1805 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:33:31.112Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #🌲・JID_efdf5921
[2026-02-06T22:33:31.112Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-06T22:33:31.112Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → location channel (2 total channels)
[2026-02-06T22:33:31.113Z] [BOT] 💾 BEFORE MERGE: 1805 jobs in memory (cached)
[2026-02-06T22:33:31.141Z] [BOT] ✅ Loaded V2 database: 1805 jobs
💾 DISK STATE: 1805 jobs on disk
[2026-02-06T22:33:31.141Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1805
[2026-02-06T22:33:31.145Z] [BOT] 🔀 Deep merged: Account Executive, Mid Market @ brex (disk: 1 channels → merged: 2 channels)
[2026-02-06T22:33:31.145Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1805 jobs (merged disk + memory)
[2026-02-06T22:33:31.147Z] [BOT] ✅ No jobs to archive (all 1805 jobs within 7-day window)
[2026-02-06T22:33:31.232Z] [BOT] 💾 Saved posted_jobs.json: 1805 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:33:35.734Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T22:33:35.735Z] [BOT] 📍 [ROUTING] "Business Data Analytics Intern, Market Analysis" @ ORG_ee996eba Corporation
   Category: TECH (matched: "data")
[2026-02-06T22:33:35.735Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T22:33:36.001Z] [BOT] ✅ Posted message: Business Data Analytics Intern, Market Analysis @ ORG_ee996eba Corporation in #💻・tech-jobs
  ✅ Industry: Business Data Analytics Intern, Market Analysis @ ORG_ee996eba Corporation
[2026-02-06T22:33:36.002Z] [BOT] 💾 Added channel posting: Business Data Analytics Intern, Market Analysis @ ORG_ee996eba Corporation → category channel (1 total channels)
[2026-02-06T22:33:36.002Z] [BOT] 💾 BEFORE MERGE: 1806 jobs in memory (cached)
[2026-02-06T22:33:36.031Z] [BOT] ✅ Loaded V2 database: 1805 jobs
💾 DISK STATE: 1805 jobs on disk
[2026-02-06T22:33:36.031Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1806
[2026-02-06T22:33:36.035Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T22:33:36.035Z] [BOT] 💾 AFTER MERGE: 1806 jobs (merged disk + memory)
[2026-02-06T22:33:36.036Z] [BOT] ✅ No jobs to archive (all 1806 jobs within 7-day window)
[2026-02-06T22:33:36.136Z] [BOT] 💾 Saved posted_jobs.json: 1806 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:33:38.083Z] [BOT] ✅ Posted message: Business Data Analytics Intern, Market Analysis @ ORG_ee996eba Corporation in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T22:33:38.084Z] [BOT] 💾 Added channel posting: Business Data Analytics Intern, Market Analysis @ ORG_ee996eba Corporation → location channel (2 total channels)
💾 BEFORE MERGE: 1806 jobs in memory (cached)
[2026-02-06T22:33:38.112Z] [BOT] ✅ Loaded V2 database: 1806 jobs
💾 DISK STATE: 1806 jobs on disk
[2026-02-06T22:33:38.113Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1806
[2026-02-06T22:33:38.117Z] [BOT] 🔀 Deep merged: Business Data Analytics Intern, Market Analysis @ ORG_ee996eba Corporation (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T22:33:38.117Z] [BOT] 💾 AFTER MERGE: 1806 jobs (merged disk + memory)
[2026-02-06T22:33:38.118Z] [BOT] ✅ No jobs to archive (all 1806 jobs within 7-day window)
[2026-02-06T22:33:38.209Z] [BOT] 💾 Saved posted_jobs.json: 1806 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:33:42.710Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-06T22:33:42.711Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8636ed19..." not found, but found as SHA256 "2f0c0b8cc2958f32"
[2026-02-06T22:33:42.712Z] [BOT] ⏭️  Skipping duplicate: JID_8636ed19 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_259f2ad2..." not found, but found as SHA256 "9e21228b30fa38df"
⏭️  Skipping duplicate: JID_d3ae3869 (posted within 7 days)
[2026-02-06T22:33:42.722Z] [BOT] ✅ Loaded pending queue: 172 total (168 pending, 4 enriched, 0 posted)
[2026-02-06T22:33:42.739Z] [BOT] ✅ Saved pending queue: 172 total (168 pending, 2 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T22:33:42.849Z] [BOT] 📂 Loaded 12604 existing routing entries
[2026-02-06T22:33:42.975Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-02-06T22:33:42.976Z] [BOT] Total entries: 12606
   Timestamp: 2026-02-06T22:33:42.922Z
[2026-02-06T22:33:42.976Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 52
[2026-02-06T22:33:42.976Z] [BOT] Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-06T22:33:42.976Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T22:33:42.977Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
[2026-02-06T22:33:42.977Z] [BOT] 1. #💰・finance-jobs: 1 posts
     2. #🌲・JID_efdf5921: 1 posts
     3. #💻・tech-jobs: 1 posts
     4. #📍・JID_6daed763: 1 posts
[2026-02-06T22:33:42.977Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1806 jobs in memory (cached)
[2026-02-06T22:33:43.018Z] [BOT] ✅ Loaded V2 database: 1806 jobs
💾 DISK STATE: 1806 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1806
[2026-02-06T22:33:43.021Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T22:33:43.021Z] [BOT] 💾 AFTER MERGE: 1806 jobs (merged disk + memory)
[2026-02-06T22:33:43.022Z] [BOT] ✅ No jobs to archive (all 1806 jobs within 7-day window)
[2026-02-06T22:33:43.122Z] [BOT] 💾 Saved posted_jobs.json: 1806 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T22:33:45.142Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2840) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*