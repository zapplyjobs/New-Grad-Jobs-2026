# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T17:27:50.369Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T17:27:44.892Z] ========================================
[2026-02-02T17:27:44.894Z] Discord Bot Execution Log
[2026-02-02T17:27:44.894Z] Environment: GitHub Actions
[2026-02-02T17:27:44.894Z] Node Version: v20.20.0
[2026-02-02T17:27:44.894Z] ========================================
[2026-02-02T17:27:44.894Z] Environment Variables Check:
[2026-02-02T17:27:44.894Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T17:27:44.894Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T17:27:44.894Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T17:27:44.894Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T17:27:44.895Z] 
Multi-Channel Configuration:
[2026-02-02T17:27:44.895Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T17:27:44.895Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:27:44.895Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:27:44.895Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T17:27:44.895Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:27:44.895Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:27:44.895Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:27:44.895Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:27:44.895Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:27:44.895Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T17:27:44.895Z] 
Data Files Check:
[2026-02-02T17:27:44.896Z] .github/data/new_jobs.json: ✅ Exists (10 items, 130988 bytes)
[2026-02-02T17:27:44.955Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11223189 bytes)
[2026-02-02T17:27:44.955Z] 
========================================
[2026-02-02T17:27:44.955Z] Starting Enhanced Discord Bot...
[2026-02-02T17:27:44.955Z] ========================================
[2026-02-02T17:27:45.520Z] [BOT] ✅ Loaded V2 database: 2226 jobs
[2026-02-02T17:27:46.127Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-02T17:27:46.127Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T17:27:46.127Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T17:27:46.149Z] [BOT] ✅ Loaded pending queue: 347 total (297 pending, 50 enriched, 0 posted)
[2026-02-02T17:27:46.150Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T17:27:46.151Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T17:27:46.151Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T17:27:46.151Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T17:27:46.169Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T17:27:46.169Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
[2026-02-02T17:27:46.170Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-02T17:27:46.170Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
[2026-02-02T17:27:46.170Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-02T17:27:46.170Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Staff Infrastructure Engineer, Pre-training at anthropic
[2026-02-02T17:27:46.170Z] [BOT] 🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-02-02T17:27:46.171Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
[2026-02-02T17:27:46.171Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
[2026-02-02T17:27:46.171Z] [BOT] 🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
[2026-02-02T17:27:46.171Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Data Center Infrastructure at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
[2026-02-02T17:27:46.171Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
[2026-02-02T17:27:46.171Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
[2026-02-02T17:27:46.171Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Senior Data Scientist - Gusto 401(k) at gusto
🚫 Skipping blacklisted job: Staff Product Designer, Visual Systems at datadog
🚫 Skipping blacklisted job: Staff Product Designer, Bits AI at datadog
🚫 Skipping blacklisted job: Director, Product Foundations at vercel
🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
[2026-02-02T17:27:46.172Z] [BOT] 🚫 Skipping blacklisted job: Energy Supply GMS Analyst – Or Senior - Associate - Intermediate at Dominion Energy
[2026-02-02T17:27:46.200Z] [BOT] ✅ Loaded pending queue: 347 total (297 pending, 50 enriched, 0 posted)
[2026-02-02T17:27:46.237Z] [BOT] ✅ Saved pending queue: 298 total (297 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T17:27:46.237Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T17:27:46.237Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T17:27:46.237Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T17:27:46.238Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T17:27:46.238Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T17:27:46.238Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-02T17:27:46.238Z] [BOT] [STATS] Channel stats saved
[2026-02-02T17:27:46.239Z] [BOT] 💾 Saving posted jobs database...
[2026-02-02T17:27:46.239Z] [BOT] 💾 BEFORE MERGE: 2226 jobs in memory (cached)
[2026-02-02T17:27:46.282Z] [BOT] ✅ Loaded V2 database: 2226 jobs
💾 DISK STATE: 2226 jobs on disk
[2026-02-02T17:27:46.283Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2226
[2026-02-02T17:27:46.288Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T17:27:46.288Z] [BOT] 💾 AFTER MERGE: 2226 jobs (merged disk + memory)
[2026-02-02T17:27:46.290Z] [BOT] ✅ No jobs to archive (all 2226 jobs within 7-day window)
[2026-02-02T17:27:46.437Z] [BOT] 💾 Saved posted_jobs.json: 2226 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T17:27:46.437Z] [BOT ERROR] (node:2529) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T17:27:48.459Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2529) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*