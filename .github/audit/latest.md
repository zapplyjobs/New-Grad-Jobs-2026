# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T05:28:47.046Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T05:28:35.199Z] ========================================
[2026-02-07T05:28:35.201Z] Discord Bot Execution Log
[2026-02-07T05:28:35.201Z] Environment: GitHub Actions
[2026-02-07T05:28:35.201Z] Node Version: v20.20.0
[2026-02-07T05:28:35.201Z] ========================================
[2026-02-07T05:28:35.201Z] Environment Variables Check:
[2026-02-07T05:28:35.201Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T05:28:35.202Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T05:28:35.202Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T05:28:35.202Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T05:28:35.202Z] 
Multi-Channel Configuration:
[2026-02-07T05:28:35.202Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T05:28:35.202Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:28:35.202Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:28:35.202Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T05:28:35.202Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:28:35.202Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:28:35.203Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:28:35.203Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:28:35.203Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:28:35.203Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T05:28:35.203Z] 
Data Files Check:
[2026-02-07T05:28:35.204Z] .github/data/new_jobs.json: ✅ Exists (10 items, 155474 bytes)
[2026-02-07T05:28:35.241Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7677319 bytes)
[2026-02-07T05:28:35.241Z] 
========================================
[2026-02-07T05:28:35.241Z] Starting Enhanced Discord Bot...
[2026-02-07T05:28:35.241Z] ========================================
[2026-02-07T05:28:35.813Z] [BOT] ✅ Loaded V2 database: 1688 jobs
[2026-02-07T05:28:36.443Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T05:28:36.443Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T05:28:36.444Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T05:28:36.457Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T05:28:36.457Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T05:28:36.458Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T05:28:36.458Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T05:28:36.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T05:28:36.459Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T05:28:36.473Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T05:28:36.473Z] [BOT] 🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-07T05:28:36.474Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-07T05:28:36.474Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
[2026-02-07T05:28:36.474Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
[2026-02-07T05:28:36.474Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
[2026-02-07T05:28:36.474Z] [BOT] 🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-07T05:28:36.474Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
[2026-02-07T05:28:36.474Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
[2026-02-07T05:28:36.474Z] [BOT] 🚫 Skipping blacklisted job: Solutions Marketing Lead, Beneficial Deployments  at anthropic
🚫 Skipping blacklisted job: Solutions Marketing Lead, Public Sector at anthropic
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Southeast (Remote) at verkada
[2026-02-07T05:28:36.474Z] [BOT] 🚫 Skipping blacklisted job: Senior Web Producer Manager at airtable
🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
[2026-02-07T05:28:36.474Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
[2026-02-07T05:28:36.475Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
[2026-02-07T05:28:36.475Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
[2026-02-07T05:28:36.475Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
[2026-02-07T05:28:36.489Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T05:28:36.518Z] [BOT] ✅ Saved pending queue: 170 total (167 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
[2026-02-07T05:28:36.518Z] [BOT] 📋 After blacklist filter: 1 jobs (47 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-07T05:28:36.519Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-07T05:28:36.519Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-07T05:28:36.520Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-07T05:28:36.521Z] [BOT] 📍 [ROUTING] "Software Engineer, Claude Code" @ anthropic
[2026-02-07T05:28:36.521Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-07T05:28:36.538Z] [BOT ERROR] (node:2807) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T05:28:37.039Z] [BOT] ✅ Posted message: Software Engineer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-02-07T05:28:37.040Z] [BOT] ✅ Industry: Software Engineer, Claude Code @ anthropic
[2026-02-07T05:28:37.041Z] [BOT] 💾 Added channel posting: Software Engineer, Claude Code @ anthropic → category channel (1 total channels)
[2026-02-07T05:28:37.041Z] [BOT] 💾 BEFORE MERGE: 1689 jobs in memory (cached)
[2026-02-07T05:28:37.068Z] [BOT] ✅ Loaded V2 database: 1688 jobs
💾 DISK STATE: 1688 jobs on disk
[2026-02-07T05:28:37.068Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1689
[2026-02-07T05:28:37.073Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T05:28:37.073Z] [BOT] 💾 AFTER MERGE: 1689 jobs (merged disk + memory)
[2026-02-07T05:28:37.075Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T05:28:37.081Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T05:28:37.081Z] [BOT] ✅ Archiving complete: 10 archived, 1679 active
[2026-02-07T05:28:37.181Z] [BOT] 💾 Saved posted_jobs.json: 1679 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T05:28:38.912Z] [BOT] ✅ Posted message: Software Engineer, Claude Code @ anthropic in #🌉・JID_739bbc0b
[2026-02-07T05:28:38.912Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-07T05:28:38.912Z] [BOT] 💾 Added channel posting: Software Engineer, Claude Code @ anthropic → location channel (2 total channels)
[2026-02-07T05:28:38.912Z] [BOT] 💾 BEFORE MERGE: 1679 jobs in memory (cached)
[2026-02-07T05:28:38.937Z] [BOT] ✅ Loaded V2 database: 1679 jobs
[2026-02-07T05:28:38.937Z] [BOT] 💾 DISK STATE: 1679 jobs on disk
[2026-02-07T05:28:38.937Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1679
[2026-02-07T05:28:38.941Z] [BOT] 🔀 Deep merged: Software Engineer, Claude Code @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T05:28:38.941Z] [BOT] 💾 AFTER MERGE: 1679 jobs (merged disk + memory)
[2026-02-07T05:28:38.942Z] [BOT] ✅ No jobs to archive (all 1679 jobs within 7-day window)
[2026-02-07T05:28:39.014Z] [BOT] 💾 Saved posted_jobs.json: 1679 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T05:28:43.516Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-07T05:28:43.517Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "64be361610816c85"
[2026-02-07T05:28:43.517Z] [BOT] ⏭️  Skipping duplicate: JID_9ea6dc5b (posted within 7 days)
[2026-02-07T05:28:43.527Z] [BOT] ✅ Loaded pending queue: 170 total (167 pending, 3 enriched, 0 posted)
[2026-02-07T05:28:43.544Z] [BOT] ✅ Saved pending queue: 170 total (167 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-07T05:28:43.544Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T05:28:43.642Z] [BOT] 📂 Loaded 12618 existing routing entries
[2026-02-07T05:28:43.787Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-07T05:28:43.787Z] [BOT] Total entries: 12619
   Timestamp: 2026-02-07T05:28:43.735Z
[2026-02-07T05:28:43.788Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-07T05:28:43.788Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-07T05:28:43.788Z] [BOT] [STATS] Channel stats saved
[2026-02-07T05:28:43.788Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1679 jobs in memory (cached)
[2026-02-07T05:28:43.812Z] [BOT] ✅ Loaded V2 database: 1679 jobs
💾 DISK STATE: 1679 jobs on disk
[2026-02-07T05:28:43.812Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1679
[2026-02-07T05:28:43.816Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T05:28:43.816Z] [BOT] 💾 AFTER MERGE: 1679 jobs (merged disk + memory)
[2026-02-07T05:28:43.817Z] [BOT] ✅ No jobs to archive (all 1679 jobs within 7-day window)
[2026-02-07T05:28:43.883Z] [BOT] 💾 Saved posted_jobs.json: 1679 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T05:28:43.884Z] [BOT] ✅ Database saved successfully
[2026-02-07T05:28:45.906Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2807) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*