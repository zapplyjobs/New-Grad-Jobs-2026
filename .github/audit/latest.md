# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T03:46:27.486Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T03:46:16.206Z] ========================================
[2026-02-03T03:46:16.208Z] Discord Bot Execution Log
[2026-02-03T03:46:16.208Z] Environment: GitHub Actions
[2026-02-03T03:46:16.208Z] Node Version: v20.20.0
[2026-02-03T03:46:16.208Z] ========================================
[2026-02-03T03:46:16.208Z] Environment Variables Check:
[2026-02-03T03:46:16.208Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T03:46:16.209Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T03:46:16.209Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T03:46:16.209Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T03:46:16.209Z] 
Multi-Channel Configuration:
[2026-02-03T03:46:16.209Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T03:46:16.209Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T03:46:16.209Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T03:46:16.209Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T03:46:16.209Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T03:46:16.209Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T03:46:16.209Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T03:46:16.209Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T03:46:16.210Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T03:46:16.210Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T03:46:16.210Z] 
Data Files Check:
[2026-02-03T03:46:16.211Z] .github/data/new_jobs.json: ✅ Exists (10 items, 191537 bytes)
[2026-02-03T03:46:16.269Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11313471 bytes)
[2026-02-03T03:46:16.269Z] 
========================================
[2026-02-03T03:46:16.270Z] Starting Enhanced Discord Bot...
[2026-02-03T03:46:16.270Z] ========================================
[2026-02-03T03:46:16.849Z] [BOT] ✅ Loaded V2 database: 2242 jobs
[2026-02-03T03:46:17.382Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T03:46:17.383Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T03:46:17.383Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T03:46:17.412Z] [BOT] ✅ Loaded pending queue: 325 total (275 pending, 50 enriched, 0 posted)
[2026-02-03T03:46:17.412Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T03:46:17.413Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T03:46:17.413Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T03:46:17.433Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T03:46:17.433Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
[2026-02-03T03:46:17.433Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
[2026-02-03T03:46:17.433Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
[2026-02-03T03:46:17.434Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
[2026-02-03T03:46:17.434Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
[2026-02-03T03:46:17.434Z] [BOT] 🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
[2026-02-03T03:46:17.434Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-03T03:46:17.434Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
[2026-02-03T03:46:17.434Z] [BOT] 🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
[2026-02-03T03:46:17.435Z] [BOT] 🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior/Staff Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Staff Infrastructure Engineer, Pre-training at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
[2026-02-03T03:46:17.463Z] [BOT] ✅ Loaded pending queue: 325 total (275 pending, 50 enriched, 0 posted)
[2026-02-03T03:46:17.497Z] [BOT] ✅ Saved pending queue: 277 total (275 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (48 blacklisted)
[2026-02-03T03:46:17.498Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-03T03:46:17.498Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T03:46:17.500Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-03T03:46:17.502Z] [BOT] 📍 [ROUTING] "Research Scientist, Frontier Red Team (Emerging Risks)" @ anthropic
[2026-02-03T03:46:17.502Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T03:46:17.518Z] [BOT ERROR] (node:2607) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T03:46:17.665Z] [BOT] ✅ Posted message: Research Scientist, Frontier Red Team (Emerging Risks) @ anthropic in #💻・tech-jobs
[2026-02-03T03:46:17.665Z] [BOT] ✅ Industry: Research Scientist, Frontier Red Team (Emerging Risks) @ anthropic
[2026-02-03T03:46:17.666Z] [BOT] 💾 Added channel posting: Research Scientist, Frontier Red Team (Emerging Risks) @ anthropic → category channel (1 total channels)
[2026-02-03T03:46:17.667Z] [BOT] 💾 BEFORE MERGE: 2243 jobs in memory (cached)
[2026-02-03T03:46:17.709Z] [BOT] ✅ Loaded V2 database: 2242 jobs
💾 DISK STATE: 2242 jobs on disk
[2026-02-03T03:46:17.710Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2243
[2026-02-03T03:46:17.715Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T03:46:17.715Z] [BOT] 💾 AFTER MERGE: 2243 jobs (merged disk + memory)
[2026-02-03T03:46:17.716Z] [BOT] ✅ No jobs to archive (all 2243 jobs within 7-day window)
[2026-02-03T03:46:17.846Z] [BOT] 💾 Saved posted_jobs.json: 2243 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T03:46:19.639Z] [BOT] ✅ Posted message: Research Scientist, Frontier Red Team (Emerging Risks) @ anthropic in #🌉・JID_739bbc0b
[2026-02-03T03:46:19.639Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T03:46:19.640Z] [BOT] 💾 Added channel posting: Research Scientist, Frontier Red Team (Emerging Risks) @ anthropic → location channel (2 total channels)
[2026-02-03T03:46:19.640Z] [BOT] 💾 BEFORE MERGE: 2243 jobs in memory (cached)
[2026-02-03T03:46:19.677Z] [BOT] ✅ Loaded V2 database: 2243 jobs
💾 DISK STATE: 2243 jobs on disk
[2026-02-03T03:46:19.678Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2243
[2026-02-03T03:46:19.683Z] [BOT] 🔀 Deep merged: Research Scientist, Frontier Red Team (Emerging Risks) @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-03T03:46:19.683Z] [BOT] 💾 AFTER MERGE: 2243 jobs (merged disk + memory)
[2026-02-03T03:46:19.684Z] [BOT] ✅ No jobs to archive (all 2243 jobs within 7-day window)
[2026-02-03T03:46:19.792Z] [BOT] 💾 Saved posted_jobs.json: 2243 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T03:46:24.293Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-03T03:46:24.294Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "b90c8613d7d895ad"
[2026-02-03T03:46:24.294Z] [BOT] ⏭️  Skipping duplicate: JID_0e8f3e22 (posted within 7 days)
[2026-02-03T03:46:24.310Z] [BOT] ✅ Loaded pending queue: 277 total (275 pending, 2 enriched, 0 posted)
[2026-02-03T03:46:24.344Z] [BOT] ✅ Saved pending queue: 277 total (275 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-03T03:46:24.344Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T03:46:24.436Z] [BOT] 📂 Loaded 12323 existing routing entries
[2026-02-03T03:46:24.573Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12324
   Timestamp: 2026-02-03T03:46:24.522Z
[2026-02-03T03:46:24.574Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-03T03:46:24.574Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-03T03:46:24.575Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-03T03:46:24.575Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T03:46:24.575Z] [BOT] 💾 BEFORE MERGE: 2243 jobs in memory (cached)
[2026-02-03T03:46:24.619Z] [BOT] ✅ Loaded V2 database: 2243 jobs
💾 DISK STATE: 2243 jobs on disk
[2026-02-03T03:46:24.619Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2243
[2026-02-03T03:46:24.624Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T03:46:24.624Z] [BOT] 💾 AFTER MERGE: 2243 jobs (merged disk + memory)
[2026-02-03T03:46:24.625Z] [BOT] ✅ No jobs to archive (all 2243 jobs within 7-day window)
[2026-02-03T03:46:24.760Z] [BOT] 💾 Saved posted_jobs.json: 2243 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T03:46:26.783Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2607) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*