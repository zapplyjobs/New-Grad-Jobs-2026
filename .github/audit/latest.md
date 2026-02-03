# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T16:26:55.886Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T16:26:51.619Z] ========================================
[2026-02-03T16:26:51.621Z] Discord Bot Execution Log
[2026-02-03T16:26:51.621Z] Environment: GitHub Actions
[2026-02-03T16:26:51.621Z] Node Version: v20.20.0
[2026-02-03T16:26:51.621Z] ========================================
[2026-02-03T16:26:51.621Z] Environment Variables Check:
[2026-02-03T16:26:51.621Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T16:26:51.621Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T16:26:51.621Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T16:26:51.622Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T16:26:51.622Z] 
Multi-Channel Configuration:
[2026-02-03T16:26:51.622Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T16:26:51.622Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T16:26:51.622Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T16:26:51.622Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T16:26:51.622Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T16:26:51.622Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T16:26:51.622Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T16:26:51.622Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T16:26:51.622Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T16:26:51.622Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T16:26:51.622Z] 
Data Files Check:
[2026-02-03T16:26:51.624Z] .github/data/new_jobs.json: ✅ Exists (10 items, 187617 bytes)
[2026-02-03T16:26:51.682Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11337576 bytes)
[2026-02-03T16:26:51.682Z] 
========================================
[2026-02-03T16:26:51.683Z] Starting Enhanced Discord Bot...
[2026-02-03T16:26:51.683Z] ========================================
[2026-02-03T16:26:52.278Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-02-03T16:26:52.796Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T16:26:52.797Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T16:26:52.797Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T16:26:52.819Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T16:26:52.819Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T16:26:52.820Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T16:26:52.820Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T16:26:52.820Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T16:26:52.839Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T16:26:52.839Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
[2026-02-03T16:26:52.840Z] [BOT] 🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Continuous Integration  at anthropic
[2026-02-03T16:26:52.840Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
[2026-02-03T16:26:52.840Z] [BOT] 🚫 Skipping blacklisted job: Senior/Staff Software Engineer, Inference at anthropic
[2026-02-03T16:26:52.840Z] [BOT] 🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
[2026-02-03T16:26:52.840Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-02-03T16:26:52.840Z] [BOT] 🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
[2026-02-03T16:26:52.840Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
[2026-02-03T16:26:52.841Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
[2026-02-03T16:26:52.841Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
[2026-02-03T16:26:52.841Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Senior Manager, Product Data Science  at gusto
[2026-02-03T16:26:52.841Z] [BOT] 🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Product Design Manager, Engagement at discord
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
[2026-02-03T16:26:52.841Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior AI Engineering Manager at duolingo
[2026-02-03T16:26:52.841Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
[2026-02-03T16:26:52.841Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-03T16:26:52.841Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
[2026-02-03T16:26:52.842Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
[2026-02-03T16:26:52.869Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T16:26:52.904Z] [BOT] ✅ Saved pending queue: 271 total (270 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-03T16:26:52.904Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T16:26:52.904Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T16:26:52.904Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T16:26:52.905Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T16:26:52.905Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T16:26:52.905Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T16:26:52.905Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T16:26:52.906Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T16:26:52.949Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-03T16:26:52.949Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T16:26:52.954Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T16:26:52.954Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T16:26:52.956Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T16:26:53.083Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T16:26:53.083Z] [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T16:26:55.106Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*