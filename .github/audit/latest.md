# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T05:57:56.634Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T05:57:52.490Z] ========================================
[2026-02-04T05:57:52.492Z] Discord Bot Execution Log
[2026-02-04T05:57:52.492Z] Environment: GitHub Actions
[2026-02-04T05:57:52.492Z] Node Version: v20.20.0
[2026-02-04T05:57:52.492Z] ========================================
[2026-02-04T05:57:52.492Z] Environment Variables Check:
[2026-02-04T05:57:52.492Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T05:57:52.492Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T05:57:52.492Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T05:57:52.492Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T05:57:52.493Z] 
Multi-Channel Configuration:
[2026-02-04T05:57:52.493Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T05:57:52.493Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:57:52.493Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:57:52.493Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T05:57:52.493Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:57:52.493Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:57:52.493Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:57:52.493Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:57:52.493Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T05:57:52.493Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T05:57:52.493Z] 
Data Files Check:
[2026-02-04T05:57:52.495Z] .github/data/new_jobs.json: ✅ Exists (10 items, 199958 bytes)
[2026-02-04T05:57:52.553Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11471726 bytes)
[2026-02-04T05:57:52.553Z] 
========================================
[2026-02-04T05:57:52.553Z] Starting Enhanced Discord Bot...
[2026-02-04T05:57:52.553Z] ========================================
[2026-02-04T05:57:53.141Z] [BOT] ✅ Loaded V2 database: 2265 jobs
[2026-02-04T05:57:53.671Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T05:57:53.672Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T05:57:53.672Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T05:57:53.693Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T05:57:53.693Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T05:57:53.694Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T05:57:53.694Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T05:57:53.695Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T05:57:53.695Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T05:57:53.713Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T05:57:53.713Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
[2026-02-04T05:57:53.713Z] [BOT] 🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
[2026-02-04T05:57:53.713Z] [BOT] 🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
[2026-02-04T05:57:53.714Z] [BOT] 🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
[2026-02-04T05:57:53.714Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
[2026-02-04T05:57:53.714Z] [BOT] 🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-04T05:57:53.714Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployment) at anthropic
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
[2026-02-04T05:57:53.714Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
[2026-02-04T05:57:53.714Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-04T05:57:53.714Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
[2026-02-04T05:57:53.714Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
[2026-02-04T05:57:53.714Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-04T05:57:53.715Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
[2026-02-04T05:57:53.715Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
[2026-02-04T05:57:53.741Z] [BOT] ✅ Loaded pending queue: 314 total (264 pending, 50 enriched, 0 posted)
[2026-02-04T05:57:53.775Z] [BOT] ✅ Saved pending queue: 266 total (264 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-04T05:57:53.775Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T05:57:53.776Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T05:57:53.776Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T05:57:53.776Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 50
[2026-02-04T05:57:53.776Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T05:57:53.777Z] [BOT] [STATS] Channel stats saved
[2026-02-04T05:57:53.777Z] [BOT] 💾 Saving posted jobs database...
[2026-02-04T05:57:53.777Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-04T05:57:53.820Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-04T05:57:53.821Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-04T05:57:53.826Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T05:57:53.826Z] [BOT] 💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-04T05:57:53.827Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-04T05:57:53.965Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T05:57:53.966Z] [BOT ERROR] (node:2482) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T05:57:55.987Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2482) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*