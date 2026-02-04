# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T22:04:42.715Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T22:04:30.420Z] ========================================
[2026-02-04T22:04:30.422Z] Discord Bot Execution Log
[2026-02-04T22:04:30.422Z] Environment: GitHub Actions
[2026-02-04T22:04:30.422Z] Node Version: v20.20.0
[2026-02-04T22:04:30.423Z] ========================================
[2026-02-04T22:04:30.423Z] Environment Variables Check:
[2026-02-04T22:04:30.423Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T22:04:30.423Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T22:04:30.423Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T22:04:30.423Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T22:04:30.423Z] 
Multi-Channel Configuration:
[2026-02-04T22:04:30.423Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T22:04:30.423Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:04:30.424Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:04:30.424Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T22:04:30.424Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:04:30.424Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:04:30.424Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:04:30.424Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:04:30.424Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T22:04:30.424Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T22:04:30.424Z] 
Data Files Check:
[2026-02-04T22:04:30.425Z] .github/data/new_jobs.json: ✅ Exists (10 items, 143415 bytes)
[2026-02-04T22:04:30.492Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11455972 bytes)
[2026-02-04T22:04:30.492Z] 
========================================
[2026-02-04T22:04:30.492Z] Starting Enhanced Discord Bot...
[2026-02-04T22:04:30.492Z] ========================================
[2026-02-04T22:04:31.065Z] [BOT] ✅ Loaded V2 database: 2260 jobs
[2026-02-04T22:04:31.611Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T22:04:31.611Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T22:04:31.611Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T22:04:31.633Z] [BOT] ✅ Loaded pending queue: 328 total (278 pending, 50 enriched, 0 posted)
[2026-02-04T22:04:31.633Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T22:04:31.634Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T22:04:31.635Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T22:04:31.635Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T22:04:31.635Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T22:04:31.635Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T22:04:31.636Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T22:04:31.636Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T22:04:31.636Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-04T22:04:31.637Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-04T22:04:31.653Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-04T22:04:31.653Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
[2026-02-04T22:04:31.653Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
[2026-02-04T22:04:31.654Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
[2026-02-04T22:04:31.654Z] [BOT] 🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
[2026-02-04T22:04:31.654Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-02-04T22:04:31.654Z] [BOT] 🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
[2026-02-04T22:04:31.655Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
[2026-02-04T22:04:31.655Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
[2026-02-04T22:04:31.682Z] [BOT] ✅ Loaded pending queue: 328 total (278 pending, 50 enriched, 0 posted)
[2026-02-04T22:04:31.718Z] [BOT] ✅ Saved pending queue: 283 total (278 pending, 5 enriched, 0 posted)
🗑️ Removed 45 blacklisted jobs from pending queue
[2026-02-04T22:04:31.718Z] [BOT] 📋 After blacklist filter: 1 jobs (45 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-04T22:04:31.719Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 45 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-04T22:04:31.720Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-04T22:04:31.721Z] [BOT] 📍 [ROUTING] "Software Engineer, UI Platform" @ anthropic
[2026-02-04T22:04:31.721Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-04T22:04:31.738Z] [BOT ERROR] (node:2473) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T22:04:32.090Z] [BOT] ✅ Posted message: Software Engineer, UI Platform @ anthropic in #💻・tech-jobs
[2026-02-04T22:04:32.090Z] [BOT] ✅ Industry: Software Engineer, UI Platform @ anthropic
[2026-02-04T22:04:32.091Z] [BOT] 💾 Added channel posting: Software Engineer, UI Platform @ anthropic → category channel (1 total channels)
[2026-02-04T22:04:32.092Z] [BOT] 💾 BEFORE MERGE: 2261 jobs in memory (cached)
[2026-02-04T22:04:32.141Z] [BOT] ✅ Loaded V2 database: 2260 jobs
[2026-02-04T22:04:32.142Z] [BOT] 💾 DISK STATE: 2260 jobs on disk
[2026-02-04T22:04:32.142Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2261
[2026-02-04T22:04:32.151Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T22:04:32.151Z] [BOT] 💾 AFTER MERGE: 2261 jobs (merged disk + memory)
[2026-02-04T22:04:32.153Z] [BOT] ✅ No jobs to archive (all 2261 jobs within 7-day window)
[2026-02-04T22:04:32.282Z] [BOT] 💾 Saved posted_jobs.json: 2261 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T22:04:34.117Z] [BOT] ✅ Posted message: Software Engineer, UI Platform @ anthropic in #🌉・JID_739bbc0b
[2026-02-04T22:04:34.117Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-04T22:04:34.118Z] [BOT] 💾 Added channel posting: Software Engineer, UI Platform @ anthropic → location channel (2 total channels)
[2026-02-04T22:04:34.118Z] [BOT] 💾 BEFORE MERGE: 2261 jobs in memory (cached)
[2026-02-04T22:04:34.155Z] [BOT] ✅ Loaded V2 database: 2261 jobs
[2026-02-04T22:04:34.156Z] [BOT] 💾 DISK STATE: 2261 jobs on disk
[2026-02-04T22:04:34.156Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2261
[2026-02-04T22:04:34.161Z] [BOT] 🔀 Deep merged: Software Engineer, UI Platform @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-04T22:04:34.161Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2261 jobs (merged disk + memory)
[2026-02-04T22:04:34.162Z] [BOT] ✅ No jobs to archive (all 2261 jobs within 7-day window)
[2026-02-04T22:04:34.274Z] [BOT] 💾 Saved posted_jobs.json: 2261 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T22:04:38.776Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-04T22:04:38.777Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "692794245c95b867"
⏭️  Skipping duplicate: JID_45ed76bc (posted within 7 days)
[2026-02-04T22:04:38.797Z] [BOT] ✅ Loaded pending queue: 283 total (278 pending, 5 enriched, 0 posted)
[2026-02-04T22:04:38.833Z] [BOT] ✅ Saved pending queue: 283 total (278 pending, 4 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-04T22:04:38.929Z] [BOT] 📂 Loaded 12351 existing routing entries
[2026-02-04T22:04:39.069Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-04T22:04:39.069Z] [BOT] Total entries: 12352
   Timestamp: 2026-02-04T22:04:39.017Z
[2026-02-04T22:04:39.070Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T22:04:39.070Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-04T22:04:39.070Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-04T22:04:39.070Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-04T22:04:39.070Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-04T22:04:39.071Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2261 jobs in memory (cached)
[2026-02-04T22:04:39.114Z] [BOT] ✅ Loaded V2 database: 2261 jobs
💾 DISK STATE: 2261 jobs on disk
[2026-02-04T22:04:39.115Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2261
[2026-02-04T22:04:39.119Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T22:04:39.119Z] [BOT] 💾 AFTER MERGE: 2261 jobs (merged disk + memory)
[2026-02-04T22:04:39.121Z] [BOT] ✅ No jobs to archive (all 2261 jobs within 7-day window)
[2026-02-04T22:04:39.243Z] [BOT] 💾 Saved posted_jobs.json: 2261 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T22:04:41.267Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2473) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*