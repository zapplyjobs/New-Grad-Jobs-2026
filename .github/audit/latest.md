# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T14:35:19.623Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T14:35:07.701Z] ========================================
[2026-02-02T14:35:07.703Z] Discord Bot Execution Log
[2026-02-02T14:35:07.703Z] Environment: GitHub Actions
[2026-02-02T14:35:07.703Z] Node Version: v20.20.0
[2026-02-02T14:35:07.703Z] ========================================
[2026-02-02T14:35:07.703Z] Environment Variables Check:
[2026-02-02T14:35:07.703Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T14:35:07.703Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T14:35:07.703Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T14:35:07.703Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T14:35:07.703Z] 
Multi-Channel Configuration:
[2026-02-02T14:35:07.703Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T14:35:07.704Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:35:07.704Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:35:07.704Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T14:35:07.704Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:35:07.704Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:35:07.704Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:35:07.704Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:35:07.704Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T14:35:07.704Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T14:35:07.704Z] 
Data Files Check:
[2026-02-02T14:35:07.706Z] .github/data/new_jobs.json: ✅ Exists (10 items, 136186 bytes)
[2026-02-02T14:35:07.762Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11214263 bytes)
[2026-02-02T14:35:07.763Z] 
========================================
[2026-02-02T14:35:07.763Z] Starting Enhanced Discord Bot...
[2026-02-02T14:35:07.763Z] ========================================
[2026-02-02T14:35:08.341Z] [BOT] ✅ Loaded V2 database: 2225 jobs
[2026-02-02T14:35:08.958Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T14:35:08.959Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T14:35:08.959Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T14:35:08.981Z] [BOT] ✅ Loaded pending queue: 342 total (292 pending, 50 enriched, 0 posted)
[2026-02-02T14:35:08.982Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T14:35:08.983Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T14:35:08.983Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T14:35:08.983Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T14:35:09.001Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T14:35:09.002Z] [BOT] 🚫 Skipping blacklisted job: Staff Infrastructure Engineer, Pre-training at anthropic
[2026-02-02T14:35:09.002Z] [BOT] 🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director, Account Management at discord
[2026-02-02T14:35:09.002Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
[2026-02-02T14:35:09.002Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-02T14:35:09.002Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-02T14:35:09.003Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-02T14:35:09.003Z] [BOT] 🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
[2026-02-02T14:35:09.003Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
[2026-02-02T14:35:09.003Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
[2026-02-02T14:35:09.003Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
[2026-02-02T14:35:09.003Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Data Center Infrastructure at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
[2026-02-02T14:35:09.003Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Senior Data Scientist - Gusto 401(k) at gusto
🚫 Skipping blacklisted job: Staff Product Designer, Visual Systems at datadog
[2026-02-02T14:35:09.004Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer, Bits AI at datadog
🚫 Skipping blacklisted job: Director, Product Foundations at vercel
🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
[2026-02-02T14:35:09.033Z] [BOT] ✅ Loaded pending queue: 342 total (292 pending, 50 enriched, 0 posted)
[2026-02-02T14:35:09.069Z] [BOT] ✅ Saved pending queue: 294 total (292 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (48 blacklisted)
[2026-02-02T14:35:09.069Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-02T14:35:09.069Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-02T14:35:09.070Z] [BOT] ⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-02T14:35:09.070Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-02T14:35:09.072Z] [BOT] 📍 [ROUTING] "Software Development Engineer III - Location" @ gohighlevel
[2026-02-02T14:35:09.072Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-02T14:35:09.072Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-02T14:35:09.089Z] [BOT ERROR] (node:2706) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T14:35:09.401Z] [BOT] ✅ Posted message: Software Development Engineer III - Location @ gohighlevel in #🤖・ai-jobs
  ✅ Industry: Software Development Engineer III - Location @ gohighlevel
[2026-02-02T14:35:09.402Z] [BOT] 💾 Added channel posting: Software Development Engineer III - Location @ gohighlevel → category channel (1 total channels)
[2026-02-02T14:35:09.402Z] [BOT] 💾 BEFORE MERGE: 2226 jobs in memory (cached)
[2026-02-02T14:35:09.448Z] [BOT] ✅ Loaded V2 database: 2225 jobs
💾 DISK STATE: 2225 jobs on disk
[2026-02-02T14:35:09.448Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2226
[2026-02-02T14:35:09.453Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T14:35:09.454Z] [BOT] 💾 AFTER MERGE: 2226 jobs (merged disk + memory)
[2026-02-02T14:35:09.455Z] [BOT] ✅ No jobs to archive (all 2226 jobs within 7-day window)
[2026-02-02T14:35:09.601Z] [BOT] 💾 Saved posted_jobs.json: 2226 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T14:35:11.368Z] [BOT] ✅ Posted message: Software Development Engineer III - Location @ gohighlevel in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-02T14:35:11.369Z] [BOT] 💾 Added channel posting: Software Development Engineer III - Location @ gohighlevel → location channel (2 total channels)
[2026-02-02T14:35:11.369Z] [BOT] 💾 BEFORE MERGE: 2226 jobs in memory (cached)
[2026-02-02T14:35:11.406Z] [BOT] ✅ Loaded V2 database: 2226 jobs
💾 DISK STATE: 2226 jobs on disk
[2026-02-02T14:35:11.406Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2226
[2026-02-02T14:35:11.411Z] [BOT] 🔀 Deep merged: Software Development Engineer III - Location @ gohighlevel (disk: 1 channels → merged: 2 channels)
[2026-02-02T14:35:11.411Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2226 jobs (merged disk + memory)
[2026-02-02T14:35:11.412Z] [BOT] ✅ No jobs to archive (all 2226 jobs within 7-day window)
[2026-02-02T14:35:11.519Z] [BOT] 💾 Saved posted_jobs.json: 2226 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T14:35:16.021Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-02T14:35:16.022Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_51851e44-..." not found, but found as SHA256 "e13b74ddd769538e"
[2026-02-02T14:35:16.022Z] [BOT] ⏭️  Skipping duplicate: JID_253e99d3 (posted within 7 days)
[2026-02-02T14:35:16.039Z] [BOT] ✅ Loaded pending queue: 294 total (292 pending, 2 enriched, 0 posted)
[2026-02-02T14:35:16.073Z] [BOT] ✅ Saved pending queue: 294 total (292 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-02T14:35:16.073Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T14:35:16.164Z] [BOT] 📂 Loaded 12306 existing routing entries
[2026-02-02T14:35:16.303Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-02T14:35:16.303Z] [BOT] New entries: 1
   Total entries: 12307
   Timestamp: 2026-02-02T14:35:16.253Z
[2026-02-02T14:35:16.304Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T14:35:16.304Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-02T14:35:16.305Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🏠・JID_ead674af: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2226 jobs in memory (cached)
[2026-02-02T14:35:16.361Z] [BOT] ✅ Loaded V2 database: 2226 jobs
[2026-02-02T14:35:16.361Z] [BOT] 💾 DISK STATE: 2226 jobs on disk
[2026-02-02T14:35:16.364Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2226
[2026-02-02T14:35:16.369Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T14:35:16.369Z] [BOT] 💾 AFTER MERGE: 2226 jobs (merged disk + memory)
[2026-02-02T14:35:16.371Z] [BOT] ✅ No jobs to archive (all 2226 jobs within 7-day window)
[2026-02-02T14:35:16.483Z] [BOT] 💾 Saved posted_jobs.json: 2226 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T14:35:16.483Z] [BOT] ✅ Database saved successfully
[2026-02-02T14:35:18.510Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2706) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*