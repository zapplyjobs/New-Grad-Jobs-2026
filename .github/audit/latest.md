# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T19:53:10.043Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T19:53:06.141Z] ========================================
[2026-02-06T19:53:06.143Z] Discord Bot Execution Log
[2026-02-06T19:53:06.143Z] Environment: GitHub Actions
[2026-02-06T19:53:06.143Z] Node Version: v20.20.0
[2026-02-06T19:53:06.143Z] ========================================
[2026-02-06T19:53:06.143Z] Environment Variables Check:
[2026-02-06T19:53:06.143Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T19:53:06.143Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T19:53:06.143Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T19:53:06.143Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T19:53:06.143Z] 
Multi-Channel Configuration:
[2026-02-06T19:53:06.144Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T19:53:06.144Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:53:06.144Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:53:06.144Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T19:53:06.144Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:53:06.144Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:53:06.144Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:53:06.144Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:53:06.144Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:53:06.144Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T19:53:06.144Z] 
Data Files Check:
[2026-02-06T19:53:06.146Z] .github/data/new_jobs.json: ✅ Exists (10 items, 188018 bytes)
[2026-02-06T19:53:06.196Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9053162 bytes)
[2026-02-06T19:53:06.196Z] 
========================================
[2026-02-06T19:53:06.196Z] Starting Enhanced Discord Bot...
[2026-02-06T19:53:06.196Z] ========================================
[2026-02-06T19:53:06.767Z] [BOT] ✅ Loaded V2 database: 1908 jobs
[2026-02-06T19:53:07.129Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T19:53:07.130Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T19:53:07.130Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T19:53:07.143Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-06T19:53:07.144Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T19:53:07.145Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T19:53:07.145Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T19:53:07.145Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T19:53:07.146Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T19:53:07.160Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T19:53:07.161Z] [BOT] 🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-06T19:53:07.161Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-06T19:53:07.161Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-06T19:53:07.161Z] [BOT] 🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
[2026-02-06T19:53:07.161Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
[2026-02-06T19:53:07.161Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
[2026-02-06T19:53:07.161Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
[2026-02-06T19:53:07.162Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-06T19:53:07.162Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
[2026-02-06T19:53:07.162Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
[2026-02-06T19:53:07.162Z] [BOT] 🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-06T19:53:07.162Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: TPM Manager, Compute & Infrastructure at anthropic
🚫 Skipping blacklisted job: Manager II, Engineering - AI Platform Training, Serving and Storage (NorAm) at datadog
🚫 Skipping blacklisted job: Senior Product Manager - AAA/Telemetry Optimization at datadog
🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-02-06T19:53:07.177Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-06T19:53:07.203Z] [BOT] ✅ Saved pending queue: 171 total (169 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-06T19:53:07.203Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-06T19:53:07.204Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-06T19:53:07.204Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T19:53:07.205Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-06T19:53:07.205Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-06T19:53:07.205Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T19:53:07.205Z] [BOT] 💾 BEFORE MERGE: 1908 jobs in memory (cached)
[2026-02-06T19:53:07.238Z] [BOT] ✅ Loaded V2 database: 1908 jobs
💾 DISK STATE: 1908 jobs on disk
[2026-02-06T19:53:07.239Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1908
[2026-02-06T19:53:07.248Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T19:53:07.248Z] [BOT] 💾 AFTER MERGE: 1908 jobs (merged disk + memory)
[2026-02-06T19:53:07.249Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T19:53:07.255Z] [BOT] 📦 Archived 12 jobs to 2026-01.json (12 total in archive)
[2026-02-06T19:53:07.255Z] [BOT] ✅ Archiving complete: 12 archived, 1896 active
[2026-02-06T19:53:07.356Z] [BOT] 💾 Saved posted_jobs.json: 1896 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:53:07.357Z] [BOT] ✅ Database saved successfully
[2026-02-06T19:53:07.357Z] [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T19:53:09.378Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*