# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T00:27:07.363Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 6
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T00:26:55.111Z] ========================================
[2026-02-06T00:26:55.113Z] Discord Bot Execution Log
[2026-02-06T00:26:55.113Z] Environment: GitHub Actions
[2026-02-06T00:26:55.113Z] Node Version: v20.20.0
[2026-02-06T00:26:55.113Z] ========================================
[2026-02-06T00:26:55.113Z] Environment Variables Check:
[2026-02-06T00:26:55.114Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T00:26:55.114Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T00:26:55.114Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T00:26:55.114Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T00:26:55.114Z] 
Multi-Channel Configuration:
[2026-02-06T00:26:55.114Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T00:26:55.114Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:26:55.114Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:26:55.114Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T00:26:55.114Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:26:55.114Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:26:55.115Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:26:55.115Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:26:55.115Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T00:26:55.115Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T00:26:55.115Z] 
Data Files Check:
[2026-02-06T00:26:55.116Z] .github/data/new_jobs.json: ✅ Exists (10 items, 165823 bytes)
[2026-02-06T00:26:55.178Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11362289 bytes)
[2026-02-06T00:26:55.178Z] 
========================================
[2026-02-06T00:26:55.178Z] Starting Enhanced Discord Bot...
[2026-02-06T00:26:55.178Z] ========================================
[2026-02-06T00:26:55.750Z] [BOT] ✅ Loaded V2 database: 2244 jobs
[2026-02-06T00:26:56.414Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T00:26:56.414Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T00:26:56.414Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T00:26:56.429Z] [BOT] ✅ Loaded pending queue: 221 total (171 pending, 50 enriched, 0 posted)
[2026-02-06T00:26:56.429Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T00:26:56.430Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-06T00:26:56.430Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T00:26:56.431Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T00:26:56.431Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T00:26:56.432Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T00:26:56.432Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T00:26:56.432Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T00:26:56.432Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-06T00:26:56.433Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-06T00:26:56.438Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T00:26:56.438Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T00:26:56.457Z] [BOT] 📬 Found 44 new jobs (6 already posted)...
[2026-02-06T00:26:56.457Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
[2026-02-06T00:26:56.458Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
[2026-02-06T00:26:56.458Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-06T00:26:56.458Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-06T00:26:56.458Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
[2026-02-06T00:26:56.458Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
[2026-02-06T00:26:56.458Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
[2026-02-06T00:26:56.458Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-06T00:26:56.458Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: SEO Lead at anthropic
[2026-02-06T00:26:56.458Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
[2026-02-06T00:26:56.459Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-06T00:26:56.459Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-06T00:26:56.459Z] [BOT] 🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-02-06T00:26:56.459Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-06T00:26:56.459Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
[2026-02-06T00:26:56.459Z] [BOT] 🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
[2026-02-06T00:26:56.459Z] [BOT] 🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
[2026-02-06T00:26:56.459Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-06T00:26:56.459Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-02-06T00:26:56.459Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-02-06T00:26:56.476Z] [BOT] ✅ Loaded pending queue: 221 total (171 pending, 50 enriched, 0 posted)
[2026-02-06T00:26:56.498Z] [BOT] ✅ Saved pending queue: 178 total (171 pending, 7 enriched, 0 posted)
🗑️ Removed 43 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (43 blacklisted)
[2026-02-06T00:26:56.498Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-06T00:26:56.499Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-06T00:26:56.499Z] [BOT] ⏸️ Limiting to 10 jobs this run, 43 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T00:26:56.499Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T00:26:56.501Z] [BOT] 📍 [ROUTING] "Software Engineer II (Co-op) United States" @ ORG_aa669b28
[2026-02-06T00:26:56.501Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-06T00:26:56.517Z] [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T00:26:56.786Z] [BOT] ✅ Posted message: Software Engineer II (Co-op) United States @ ORG_aa669b28 in #🤖・ai-jobs
[2026-02-06T00:26:56.786Z] [BOT] ✅ Industry: Software Engineer II (Co-op) United States @ ORG_aa669b28
[2026-02-06T00:26:56.788Z] [BOT] 💾 Added channel posting: Software Engineer II (Co-op) United States @ ORG_aa669b28 → category channel (1 total channels)
[2026-02-06T00:26:56.788Z] [BOT] 💾 BEFORE MERGE: 2245 jobs in memory (cached)
[2026-02-06T00:26:56.831Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-06T00:26:56.832Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2245
[2026-02-06T00:26:56.837Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T00:26:56.837Z] [BOT] 💾 AFTER MERGE: 2245 jobs (merged disk + memory)
[2026-02-06T00:26:56.839Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T00:26:56.845Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T00:26:56.845Z] [BOT] ✅ Archiving complete: 10 archived, 2235 active
[2026-02-06T00:26:56.972Z] [BOT] 💾 Saved posted_jobs.json: 2235 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T00:26:58.902Z] [BOT] ✅ Posted message: Software Engineer II (Co-op) United States @ ORG_aa669b28 in #🗽・JID_98d4f0de
[2026-02-06T00:26:58.902Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T00:26:58.902Z] [BOT] 💾 Added channel posting: Software Engineer II (Co-op) United States @ ORG_aa669b28 → location channel (2 total channels)
[2026-02-06T00:26:58.903Z] [BOT] 💾 BEFORE MERGE: 2235 jobs in memory (cached)
[2026-02-06T00:26:58.939Z] [BOT] ✅ Loaded V2 database: 2235 jobs
💾 DISK STATE: 2235 jobs on disk
[2026-02-06T00:26:58.940Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2235
[2026-02-06T00:26:58.944Z] [BOT] 🔀 Deep merged: Software Engineer II (Co-op) United States @ ORG_aa669b28 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T00:26:58.944Z] [BOT] 💾 AFTER MERGE: 2235 jobs (merged disk + memory)
[2026-02-06T00:26:58.946Z] [BOT] ✅ No jobs to archive (all 2235 jobs within 7-day window)
[2026-02-06T00:26:59.061Z] [BOT] 💾 Saved posted_jobs.json: 2235 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T00:27:03.562Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-06T00:27:03.564Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4afe9896..." not found, but found as SHA256 "6f9f0e541144e169"
[2026-02-06T00:27:03.564Z] [BOT] ⏭️  Skipping duplicate: JID_4af763b8 (posted within 7 days)
[2026-02-06T00:27:03.574Z] [BOT] ✅ Loaded pending queue: 178 total (171 pending, 7 enriched, 0 posted)
[2026-02-06T00:27:03.592Z] [BOT] ✅ Saved pending queue: 178 total (171 pending, 6 enriched, 1 posted)
[2026-02-06T00:27:03.592Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T00:27:03.687Z] [BOT] 📂 Loaded 12485 existing routing entries
[2026-02-06T00:27:03.828Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-06T00:27:03.828Z] [BOT] Total entries: 12486
   Timestamp: 2026-02-06T00:27:03.776Z
[2026-02-06T00:27:03.829Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-06T00:27:03.829Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-06T00:27:03.829Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🗽・JID_98d4f0de: 1 posts
[2026-02-06T00:27:03.830Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2235 jobs in memory (cached)
[2026-02-06T00:27:03.886Z] [BOT] ✅ Loaded V2 database: 2235 jobs
💾 DISK STATE: 2235 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2235
[2026-02-06T00:27:03.896Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2235 jobs (merged disk + memory)
✅ No jobs to archive (all 2235 jobs within 7-day window)
[2026-02-06T00:27:04.003Z] [BOT] 💾 Saved posted_jobs.json: 2235 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T00:27:04.003Z] [BOT] ✅ Database saved successfully
[2026-02-06T00:27:06.027Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*