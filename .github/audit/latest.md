# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T20:18:17.716Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T20:18:06.005Z] ========================================
[2026-02-01T20:18:06.007Z] Discord Bot Execution Log
[2026-02-01T20:18:06.007Z] Environment: GitHub Actions
[2026-02-01T20:18:06.007Z] Node Version: v20.20.0
[2026-02-01T20:18:06.007Z] ========================================
[2026-02-01T20:18:06.007Z] Environment Variables Check:
[2026-02-01T20:18:06.007Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T20:18:06.007Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T20:18:06.007Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T20:18:06.007Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T20:18:06.007Z] 
Multi-Channel Configuration:
[2026-02-01T20:18:06.008Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T20:18:06.008Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:18:06.008Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:18:06.008Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T20:18:06.008Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:18:06.008Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:18:06.008Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:18:06.008Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:18:06.008Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:18:06.008Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T20:18:06.008Z] 
Data Files Check:
[2026-02-01T20:18:06.009Z] .github/data/new_jobs.json: ✅ Exists (10 items, 140804 bytes)
[2026-02-01T20:18:06.066Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10825390 bytes)
[2026-02-01T20:18:06.067Z] 
========================================
[2026-02-01T20:18:06.067Z] Starting Enhanced Discord Bot...
[2026-02-01T20:18:06.067Z] ========================================
[2026-02-01T20:18:06.626Z] [BOT] ✅ Loaded V2 database: 2170 jobs
[2026-02-01T20:18:07.245Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T20:18:07.245Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T20:18:07.245Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T20:18:07.294Z] [BOT] ✅ Loaded pending queue: 770 total (720 pending, 50 enriched, 0 posted)
[2026-02-01T20:18:07.295Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Staff Software Engineer, Mobile Architecture at discord
[2026-02-01T20:18:07.314Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T20:18:07.315Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
[2026-02-01T20:18:07.315Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-01T20:18:07.315Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
[2026-02-01T20:18:07.315Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
[2026-02-01T20:18:07.316Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager - Denver at datadog
🚫 Skipping blacklisted job: Senior Client Partner, Mid-Market (B2B Services)  at reddit
🚫 Skipping blacklisted job: Product Marketing Lead, PEO at gusto
🚫 Skipping blacklisted job: Manager II, Engineering - Runtime at datadog
[2026-02-01T20:18:07.316Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Serverless Monitoring) at datadog
🚫 Skipping blacklisted job: Director of Engineering, v0 at vercel
[2026-02-01T20:18:07.316Z] [BOT] 🚫 Skipping blacklisted job: Business Value Manager - Enterprise East at datadog
🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-01T20:18:07.316Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager - Boston (Portuguese-speaking) at datadog
🚫 Skipping blacklisted job: Datadog for Startups Engineering Lead at datadog
[2026-02-01T20:18:07.316Z] [BOT] 🚫 Skipping blacklisted job: Datadog for Startups Lead at datadog
🚫 Skipping blacklisted job: Director, Pricing and Monetization at datadog
🚫 Skipping blacklisted job: Director, Sales Field Enablement - NYC at datadog
🚫 Skipping blacklisted job: Director, Security Sales Engineering at datadog
[2026-02-01T20:18:07.316Z] [BOT] 🚫 Skipping blacklisted job: Director, Technical Product Partnerships at datadog
[2026-02-01T20:18:07.316Z] [BOT] 🚫 Skipping blacklisted job: Enablement Operations Senior Associate at datadog
[2026-02-01T20:18:07.316Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager I - Cyber Threat Intelligence at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Denver at datadog
[2026-02-01T20:18:07.317Z] [BOT] 🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
[2026-02-01T20:18:07.317Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager (LATAM South) at datadog
🚫 Skipping blacklisted job: Global Safety & Security Senior Manager - NYC at datadog
[2026-02-01T20:18:07.317Z] [BOT] 🚫 Skipping blacklisted job: GTM Strategy and Operations Senior Associate - AMER Commercial & Mid Market at datadog
🚫 Skipping blacklisted job: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
🚫 Skipping blacklisted job: Leadership Training Manager at datadog
[2026-02-01T20:18:07.317Z] [BOT] 🚫 Skipping blacklisted job: Lead UX Designer - New York at datadog
🚫 Skipping blacklisted job: Manager 1, Technical Account Management - Denver at datadog
🚫 Skipping blacklisted job: Manager 1, Technical Account Management - New York at datadog
🚫 Skipping blacklisted job: Manager 1, Technical Escalations Engineering - US-East at datadog
[2026-02-01T20:18:07.317Z] [BOT] 🚫 Skipping blacklisted job: Manager 2, Premier Support Engineering -  Boston at datadog
🚫 Skipping blacklisted job: Manager, Commercial Sales Engineering (AMER - East) at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - CCM Optimize  at datadog
🚫 Skipping blacklisted job: Manager, Commercial Sales Engineering (AMER - West) at datadog
[2026-02-01T20:18:07.317Z] [BOT] 🚫 Skipping blacklisted job: Manager, Customer Success - Denver at datadog
🚫 Skipping blacklisted job: Manager I, Developer Advocacy at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Cloud Security - Findings Prioritization at datadog
[2026-02-01T20:18:07.317Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Engineering - Infrastructure Remediation at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Language Platform at datadog
🚫 Skipping blacklisted job: Manager II, Engineering - Bits AI Security Analyst at datadog
🚫 Skipping blacklisted job: Manager, Networking at datadog
[2026-02-01T20:18:07.317Z] [BOT] 🚫 Skipping blacklisted job: Manager, People Analytics Data Platform at datadog
🚫 Skipping blacklisted job: Partner Marketing Manager (Public Sector) at datadog
🚫 Skipping blacklisted job: Principal Partner Manager - Cloud Alliances (AWS) at datadog
[2026-02-01T20:18:07.359Z] [BOT] ✅ Loaded pending queue: 770 total (720 pending, 50 enriched, 0 posted)
[2026-02-01T20:18:07.436Z] [BOT] ✅ Saved pending queue: 721 total (720 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-01T20:18:07.436Z] [BOT] 📋 After blacklist filter: 1 jobs (49 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-01T20:18:07.436Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-01T20:18:07.436Z] [BOT] ⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T20:18:07.439Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-01T20:18:07.440Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, State & Local Sales" @ anthropic
[2026-02-01T20:18:07.440Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T20:18:07.457Z] [BOT ERROR] (node:2607) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T20:18:07.665Z] [BOT] ✅ Posted message: Enterprise Account Executive, State & Local Sales @ anthropic in #💻・tech-jobs
[2026-02-01T20:18:07.666Z] [BOT] ✅ Industry: Enterprise Account Executive, State & Local Sales @ anthropic
💾 Added channel posting: Enterprise Account Executive, State & Local Sales @ anthropic → category channel (1 total channels)
[2026-02-01T20:18:07.667Z] [BOT] 💾 BEFORE MERGE: 2171 jobs in memory (cached)
[2026-02-01T20:18:07.732Z] [BOT] ✅ Loaded V2 database: 2170 jobs
💾 DISK STATE: 2170 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2171
[2026-02-01T20:18:07.739Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T20:18:07.739Z] [BOT] 💾 AFTER MERGE: 2171 jobs (merged disk + memory)
[2026-02-01T20:18:07.741Z] [BOT] ✅ No jobs to archive (all 2171 jobs within 7-day window)
[2026-02-01T20:18:07.860Z] [BOT] 💾 Saved posted_jobs.json: 2171 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:18:09.595Z] [BOT] ✅ Posted message: Enterprise Account Executive, State & Local Sales @ anthropic in #🌉・JID_739bbc0b
[2026-02-01T20:18:09.595Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T20:18:09.595Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, State & Local Sales @ anthropic → location channel (2 total channels)
[2026-02-01T20:18:09.596Z] [BOT] 💾 BEFORE MERGE: 2171 jobs in memory (cached)
[2026-02-01T20:18:09.634Z] [BOT] ✅ Loaded V2 database: 2171 jobs
[2026-02-01T20:18:09.634Z] [BOT] 💾 DISK STATE: 2171 jobs on disk
[2026-02-01T20:18:09.634Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2171
[2026-02-01T20:18:09.639Z] [BOT] 🔀 Deep merged: Enterprise Account Executive, State & Local Sales @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-01T20:18:09.639Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2171 jobs (merged disk + memory)
[2026-02-01T20:18:09.640Z] [BOT] ✅ No jobs to archive (all 2171 jobs within 7-day window)
[2026-02-01T20:18:09.746Z] [BOT] 💾 Saved posted_jobs.json: 2171 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:18:14.246Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-01T20:18:14.248Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-01T20:18:14.248Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-01T20:18:14.287Z] [BOT] ✅ Loaded pending queue: 721 total (720 pending, 1 enriched, 0 posted)
[2026-02-01T20:18:14.359Z] [BOT] ✅ Saved pending queue: 721 total (720 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-01T20:18:14.359Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T20:18:14.452Z] [BOT] 📂 Loaded 12251 existing routing entries
[2026-02-01T20:18:14.591Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12252
[2026-02-01T20:18:14.591Z] [BOT] Timestamp: 2026-02-01T20:18:14.539Z
[2026-02-01T20:18:14.591Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T20:18:14.591Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-01T20:18:14.592Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-01T20:18:14.592Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-01T20:18:14.592Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T20:18:14.592Z] [BOT] 💾 BEFORE MERGE: 2171 jobs in memory (cached)
[2026-02-01T20:18:14.637Z] [BOT] ✅ Loaded V2 database: 2171 jobs
💾 DISK STATE: 2171 jobs on disk
[2026-02-01T20:18:14.638Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2171
[2026-02-01T20:18:14.642Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T20:18:14.642Z] [BOT] 💾 AFTER MERGE: 2171 jobs (merged disk + memory)
[2026-02-01T20:18:14.644Z] [BOT] ✅ No jobs to archive (all 2171 jobs within 7-day window)
[2026-02-01T20:18:14.775Z] [BOT] 💾 Saved posted_jobs.json: 2171 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T20:18:16.804Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2607) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*