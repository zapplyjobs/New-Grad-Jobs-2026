# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T19:52:55.068Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T19:52:50.673Z] ========================================
[2026-02-04T19:52:50.675Z] Discord Bot Execution Log
[2026-02-04T19:52:50.675Z] Environment: GitHub Actions
[2026-02-04T19:52:50.675Z] Node Version: v20.20.0
[2026-02-04T19:52:50.676Z] ========================================
[2026-02-04T19:52:50.676Z] Environment Variables Check:
[2026-02-04T19:52:50.676Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T19:52:50.676Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T19:52:50.676Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T19:52:50.676Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T19:52:50.676Z] 
Multi-Channel Configuration:
[2026-02-04T19:52:50.676Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T19:52:50.676Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:52:50.676Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:52:50.677Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T19:52:50.677Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:52:50.677Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:52:50.677Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:52:50.677Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:52:50.677Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T19:52:50.677Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T19:52:50.677Z] 
Data Files Check:
[2026-02-04T19:52:50.678Z] .github/data/new_jobs.json: ✅ Exists (10 items, 146722 bytes)
[2026-02-04T19:52:50.739Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11510821 bytes)
[2026-02-04T19:52:50.739Z] 
========================================
[2026-02-04T19:52:50.739Z] Starting Enhanced Discord Bot...
[2026-02-04T19:52:50.739Z] ========================================
[2026-02-04T19:52:51.348Z] [BOT] ✅ Loaded V2 database: 2270 jobs
[2026-02-04T19:52:51.853Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-04T19:52:51.853Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T19:52:51.854Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T19:52:51.875Z] [BOT] ✅ Loaded pending queue: 316 total (266 pending, 50 enriched, 0 posted)
[2026-02-04T19:52:51.876Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T19:52:51.877Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T19:52:51.877Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T19:52:51.877Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T19:52:51.878Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T19:52:51.878Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T19:52:51.878Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T19:52:51.878Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T19:52:51.896Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-02-04T19:52:51.896Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
[2026-02-04T19:52:51.897Z] [BOT] 🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-04T19:52:51.897Z] [BOT] 🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
[2026-02-04T19:52:51.897Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
[2026-02-04T19:52:51.897Z] [BOT] 🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
[2026-02-04T19:52:51.897Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-02-04T19:52:51.897Z] [BOT] 🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
[2026-02-04T19:52:51.897Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
[2026-02-04T19:52:51.898Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Directors, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-04T19:52:51.898Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
[2026-02-04T19:52:51.899Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
[2026-02-04T19:52:51.927Z] [BOT] ✅ Loaded pending queue: 316 total (266 pending, 50 enriched, 0 posted)
[2026-02-04T19:52:51.963Z] [BOT] ✅ Saved pending queue: 269 total (266 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (47 blacklisted)
[2026-02-04T19:52:51.963Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T19:52:51.963Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T19:52:51.963Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T19:52:51.964Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T19:52:51.964Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T19:52:51.964Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T19:52:51.965Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T19:52:51.965Z] [BOT] 💾 BEFORE MERGE: 2270 jobs in memory (cached)
[2026-02-04T19:52:52.010Z] [BOT] ✅ Loaded V2 database: 2270 jobs
💾 DISK STATE: 2270 jobs on disk
[2026-02-04T19:52:52.011Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2270
[2026-02-04T19:52:52.016Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T19:52:52.016Z] [BOT] 💾 AFTER MERGE: 2270 jobs (merged disk + memory)
[2026-02-04T19:52:52.017Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-02-04T19:52:52.170Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T19:52:52.170Z] [BOT ERROR] (node:2614) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T19:52:54.193Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2614) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*