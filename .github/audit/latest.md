# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T00:29:31.348Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T00:29:27.026Z] ========================================
[2026-02-02T00:29:27.028Z] Discord Bot Execution Log
[2026-02-02T00:29:27.028Z] Environment: GitHub Actions
[2026-02-02T00:29:27.028Z] Node Version: v20.20.0
[2026-02-02T00:29:27.028Z] ========================================
[2026-02-02T00:29:27.028Z] Environment Variables Check:
[2026-02-02T00:29:27.028Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T00:29:27.028Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T00:29:27.028Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T00:29:27.028Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T00:29:27.029Z] 
Multi-Channel Configuration:
[2026-02-02T00:29:27.029Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T00:29:27.029Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:29:27.029Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:29:27.029Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T00:29:27.029Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:29:27.029Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:29:27.029Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:29:27.029Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:29:27.029Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:29:27.029Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T00:29:27.029Z] 
Data Files Check:
[2026-02-02T00:29:27.031Z] .github/data/new_jobs.json: ✅ Exists (10 items, 182986 bytes)
[2026-02-02T00:29:27.100Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11140016 bytes)
[2026-02-02T00:29:27.100Z] 
========================================
[2026-02-02T00:29:27.100Z] Starting Enhanced Discord Bot...
[2026-02-02T00:29:27.100Z] ========================================
[2026-02-02T00:29:27.595Z] [BOT] ✅ Loaded V2 database: 2214 jobs
[2026-02-02T00:29:27.970Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T00:29:27.971Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T00:29:27.971Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T00:29:28.035Z] [BOT] ✅ Loaded pending queue: 728 total (678 pending, 50 enriched, 0 posted)
[2026-02-02T00:29:28.036Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T00:29:28.037Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T00:29:28.037Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T00:29:28.037Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T00:29:28.051Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T00:29:28.051Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Documentation Specialist, Claude Developer Platform at anthropic
[2026-02-02T00:29:28.051Z] [BOT] 🚫 Skipping blacklisted job: Education Platform Engineering Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, AI Research at figma
🚫 Skipping blacklisted job: Manager, On-Site Executive IT Support (Residential Operations) at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Full-Stack at brex
[2026-02-02T00:29:28.051Z] [BOT] 🚫 Skipping blacklisted job: Data Architect Senior at Intermountain Healthcare
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, Product-Led Growth at brex
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, Product-Led Growth at brex
[2026-02-02T00:29:28.051Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Operations Manager, B2B Sales at brex
[2026-02-02T00:29:28.051Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Operations Manager, B2B Sales at brex
[2026-02-02T00:29:28.051Z] [BOT] 🚫 Skipping blacklisted job: Senior Fullstack Engineer - Backstage Portal, Data Experience at spotify
🚫 Skipping blacklisted job: Customer Enablement Manager - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Product Marketing Manager - Spotify for Artists, Campaign Kit at spotify
🚫 Skipping blacklisted job: Senior GRC Lead at brex
🚫 Skipping blacklisted job: Senior GRC Lead at brex
🚫 Skipping blacklisted job: Director, Sales Commissions at samsara
[2026-02-02T00:29:28.051Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales Commissions at samsara
🚫 Skipping blacklisted job: Manager Account Development - Atlanta at samsara
🚫 Skipping blacklisted job: Manager Account Development, Relocation to Atlanta at samsara
[2026-02-02T00:29:28.051Z] [BOT] 🚫 Skipping blacklisted job: Manager II, Shipping and Receiving Logistics at samsara
🚫 Skipping blacklisted job: Manager of Account Development at samsara
[2026-02-02T00:29:28.052Z] [BOT] 🚫 Skipping blacklisted job: Senior Hardware Reliability Engineer at samsara
🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
[2026-02-02T00:29:28.052Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
[2026-02-02T00:29:28.052Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Hardware Systems Engineer at samsara
[2026-02-02T00:29:28.052Z] [BOT] 🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: USA – Tax - Business Tax Services - Federal Tax Advisory','Fta','Jd/LLM','Staff 2 at Ernst & Young
[2026-02-02T00:29:28.052Z] [BOT] 🚫 Skipping blacklisted job: USA – Tax - Indirect Tax - Technology Staff at Ernst & Young
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
[2026-02-02T00:29:28.052Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-02T00:29:28.052Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
[2026-02-02T00:29:28.052Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
[2026-02-02T00:29:28.052Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-02T00:29:28.118Z] [BOT] ✅ Loaded pending queue: 728 total (678 pending, 50 enriched, 0 posted)
[2026-02-02T00:29:28.189Z] [BOT] ✅ Saved pending queue: 679 total (678 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T00:29:28.189Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T00:29:28.189Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T00:29:28.190Z] [BOT] ℹ️ No routing entries to save
[2026-02-02T00:29:28.190Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T00:29:28.190Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T00:29:28.190Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-02T00:29:28.190Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T00:29:28.191Z] [BOT] 💾 BEFORE MERGE: 2214 jobs in memory (cached)
[2026-02-02T00:29:28.252Z] [BOT] ✅ Loaded V2 database: 2214 jobs
💾 DISK STATE: 2214 jobs on disk
[2026-02-02T00:29:28.253Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2214
[2026-02-02T00:29:28.258Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T00:29:28.258Z] [BOT] 💾 AFTER MERGE: 2214 jobs (merged disk + memory)
[2026-02-02T00:29:28.260Z] [BOT] ✅ No jobs to archive (all 2214 jobs within 7-day window)
[2026-02-02T00:29:28.407Z] [BOT] 💾 Saved posted_jobs.json: 2214 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T00:29:28.407Z] [BOT ERROR] (node:2896) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T00:29:30.423Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2896) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*