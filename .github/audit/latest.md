# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T23:49:52.892Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T23:49:48.690Z] ========================================
[2026-02-06T23:49:48.692Z] Discord Bot Execution Log
[2026-02-06T23:49:48.692Z] Environment: GitHub Actions
[2026-02-06T23:49:48.692Z] Node Version: v20.20.0
[2026-02-06T23:49:48.692Z] ========================================
[2026-02-06T23:49:48.692Z] Environment Variables Check:
[2026-02-06T23:49:48.693Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T23:49:48.693Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T23:49:48.693Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T23:49:48.693Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T23:49:48.693Z] 
Multi-Channel Configuration:
[2026-02-06T23:49:48.693Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T23:49:48.693Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:49:48.693Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:49:48.693Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T23:49:48.693Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:49:48.693Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:49:48.693Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:49:48.693Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:49:48.693Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:49:48.693Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T23:49:48.694Z] 
Data Files Check:
[2026-02-06T23:49:48.695Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132392 bytes)
[2026-02-06T23:49:48.738Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8156815 bytes)
[2026-02-06T23:49:48.738Z] 
========================================
[2026-02-06T23:49:48.738Z] Starting Enhanced Discord Bot...
[2026-02-06T23:49:48.738Z] ========================================
[2026-02-06T23:49:49.308Z] [BOT] ✅ Loaded V2 database: 1771 jobs
[2026-02-06T23:49:49.830Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T23:49:49.830Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T23:49:49.830Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T23:49:49.849Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-06T23:49:49.850Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T23:49:49.851Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T23:49:49.851Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T23:49:49.851Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T23:49:49.851Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
[2026-02-06T23:49:49.852Z] [BOT] ⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T23:49:49.863Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T23:49:49.863Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
[2026-02-06T23:49:49.863Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
[2026-02-06T23:49:49.863Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
[2026-02-06T23:49:49.864Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
[2026-02-06T23:49:49.864Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-06T23:49:49.864Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
[2026-02-06T23:49:49.864Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
[2026-02-06T23:49:49.864Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-06T23:49:49.864Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Senior Software Engineer, Multi Cloud at discord
[2026-02-06T23:49:49.864Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
[2026-02-06T23:49:49.864Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
[2026-02-06T23:49:49.864Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-06T23:49:49.864Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
[2026-02-06T23:49:49.864Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
[2026-02-06T23:49:49.865Z] [BOT] 🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
[2026-02-06T23:49:49.878Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-06T23:49:49.901Z] [BOT] ✅ Saved pending queue: 171 total (169 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-06T23:49:49.901Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-06T23:49:49.901Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T23:49:49.902Z] [BOT] ℹ️ No routing entries to save
[2026-02-06T23:49:49.902Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T23:49:49.902Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-06T23:49:49.902Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-06T23:49:49.902Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-06T23:49:49.903Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T23:49:49.903Z] [BOT] 💾 BEFORE MERGE: 1771 jobs in memory (cached)
[2026-02-06T23:49:49.949Z] [BOT] ✅ Loaded V2 database: 1771 jobs
💾 DISK STATE: 1771 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1771
[2026-02-06T23:49:49.953Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T23:49:49.953Z] [BOT] 💾 AFTER MERGE: 1771 jobs (merged disk + memory)
[2026-02-06T23:49:49.954Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T23:49:49.960Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 1761 active
[2026-02-06T23:49:50.066Z] [BOT] 💾 Saved posted_jobs.json: 1761 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T23:49:50.066Z] [BOT] ✅ Database saved successfully
[2026-02-06T23:49:50.066Z] [BOT ERROR] (node:2598) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T23:49:52.089Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2598) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*