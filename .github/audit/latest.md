# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T00:00:15.562Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T00:00:10.316Z] ========================================
[2026-02-02T00:00:10.317Z] Discord Bot Execution Log
[2026-02-02T00:00:10.318Z] Environment: GitHub Actions
[2026-02-02T00:00:10.318Z] Node Version: v20.20.0
[2026-02-02T00:00:10.318Z] ========================================
[2026-02-02T00:00:10.318Z] Environment Variables Check:
[2026-02-02T00:00:10.318Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T00:00:10.318Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T00:00:10.318Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T00:00:10.318Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T00:00:10.318Z] 
Multi-Channel Configuration:
[2026-02-02T00:00:10.318Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T00:00:10.319Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:00:10.319Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:00:10.319Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T00:00:10.319Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:00:10.319Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:00:10.319Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:00:10.319Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:00:10.319Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:00:10.319Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T00:00:10.319Z] 
Data Files Check:
[2026-02-02T00:00:10.320Z] .github/data/new_jobs.json: ✅ Exists (10 items, 128758 bytes)
[2026-02-02T00:00:10.381Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11122164 bytes)
[2026-02-02T00:00:10.381Z] 
========================================
[2026-02-02T00:00:10.381Z] Starting Enhanced Discord Bot...
[2026-02-02T00:00:10.381Z] ========================================
[2026-02-02T00:00:10.991Z] [BOT] ✅ Loaded V2 database: 2212 jobs
[2026-02-02T00:00:11.695Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T00:00:11.696Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T00:00:11.696Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T00:00:11.748Z] [BOT] ✅ Loaded pending queue: 729 total (679 pending, 50 enriched, 0 posted)
[2026-02-02T00:00:11.748Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T00:00:11.750Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T00:00:11.750Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T00:00:11.750Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T00:00:11.769Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T00:00:11.769Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-02-02T00:00:11.770Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-02T00:00:11.770Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
[2026-02-02T00:00:11.770Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-02T00:00:11.770Z] [BOT] 🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Senior Accountant (Platform Accounting) at gusto
🚫 Skipping blacklisted job: Staff Software Engineer - Payroll Platform at gusto
🚫 Skipping blacklisted job: Creator & Affiliate Marketing Manager at figma
🚫 Skipping blacklisted job: Manager, Strategic Sales at figma
[2026-02-02T00:00:11.771Z] [BOT] 🚫 Skipping blacklisted job: Partner Manager - Alliances (Commercial) at datadog
[2026-02-02T00:00:11.771Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Recruiter at samsara
[2026-02-02T00:00:11.771Z] [BOT] 🚫 Skipping blacklisted job: Manager, Trial Experience -  SaaS at gohighlevel
[2026-02-02T00:00:11.771Z] [BOT] 🚫 Skipping blacklisted job: Principal Software Engineer - Pay Group Engineering at gusto
🚫 Skipping blacklisted job: Product Partnerships Deal Lead at gusto
[2026-02-02T00:00:11.771Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Builder Audience at figma
🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-02T00:00:11.771Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Recruiting at samsara
🚫 Skipping blacklisted job: Sr Staff Software Engineer, Gusto Pro at gusto
[2026-02-02T00:00:11.771Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, v0 at vercel
🚫 Skipping blacklisted job: Regional Sales Director, Enterprise Select-South East US at samsara
[2026-02-02T00:00:11.771Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
[2026-02-02T00:00:11.771Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - CCM Optimize  at datadog
[2026-02-02T00:00:11.772Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager - Denver at datadog
🚫 Skipping blacklisted job: Senior Client Partner, Mid-Market (B2B Services)  at reddit
[2026-02-02T00:00:11.772Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Lead, PEO at gusto
🚫 Skipping blacklisted job: Manager II, Engineering - Runtime at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Serverless Monitoring) at datadog
[2026-02-02T00:00:11.772Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, v0 at vercel
🚫 Skipping blacklisted job: Business Value Manager - Enterprise East at datadog
[2026-02-02T00:00:11.816Z] [BOT] ✅ Loaded pending queue: 729 total (679 pending, 50 enriched, 0 posted)
[2026-02-02T00:00:11.893Z] [BOT] ✅ Saved pending queue: 680 total (679 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T00:00:11.894Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T00:00:11.894Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T00:00:11.895Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T00:00:11.895Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T00:00:11.895Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-02T00:00:11.895Z] [BOT] Channels used: 0
[2026-02-02T00:00:11.896Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T00:00:11.896Z] [BOT] 💾 BEFORE MERGE: 2212 jobs in memory (cached)
[2026-02-02T00:00:11.938Z] [BOT] ✅ Loaded V2 database: 2212 jobs
💾 DISK STATE: 2212 jobs on disk
[2026-02-02T00:00:11.939Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2212
[2026-02-02T00:00:11.944Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T00:00:11.944Z] [BOT] 💾 AFTER MERGE: 2212 jobs (merged disk + memory)
[2026-02-02T00:00:11.946Z] [BOT] ✅ No jobs to archive (all 2212 jobs within 7-day window)
[2026-02-02T00:00:12.080Z] [BOT] 💾 Saved posted_jobs.json: 2212 active jobs
[2026-02-02T00:00:12.080Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-02T00:00:12.081Z] [BOT] ✅ Database saved successfully
[2026-02-02T00:00:12.081Z] [BOT ERROR] (node:2616) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T00:00:14.109Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2616) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*