# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T09:55:48.787Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T09:55:25.875Z] ========================================
[2026-02-06T09:55:25.877Z] Discord Bot Execution Log
[2026-02-06T09:55:25.877Z] Environment: GitHub Actions
[2026-02-06T09:55:25.877Z] Node Version: v20.20.0
[2026-02-06T09:55:25.877Z] ========================================
[2026-02-06T09:55:25.877Z] Environment Variables Check:
[2026-02-06T09:55:25.877Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T09:55:25.878Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T09:55:25.878Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T09:55:25.878Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T09:55:25.878Z] 
Multi-Channel Configuration:
[2026-02-06T09:55:25.878Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T09:55:25.878Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:55:25.878Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:55:25.878Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T09:55:25.878Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:55:25.878Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:55:25.878Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:55:25.878Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:55:25.878Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:55:25.878Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T09:55:25.878Z] 
Data Files Check:
[2026-02-06T09:55:25.880Z] .github/data/new_jobs.json: ✅ Exists (10 items, 138661 bytes)
[2026-02-06T09:55:25.947Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10254095 bytes)
[2026-02-06T09:55:25.947Z] 
========================================
[2026-02-06T09:55:25.947Z] Starting Enhanced Discord Bot...
[2026-02-06T09:55:25.947Z] ========================================
[2026-02-06T09:55:26.446Z] [BOT] ✅ Loaded V2 database: 2096 jobs
[2026-02-06T09:55:27.008Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T09:55:27.009Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T09:55:27.009Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T09:55:27.027Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T09:55:27.028Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T09:55:27.029Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T09:55:27.029Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-06T09:55:27.029Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T09:55:27.030Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T09:55:27.030Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T09:55:27.030Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T09:55:27.031Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T09:55:27.031Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T09:55:27.043Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T09:55:27.043Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
[2026-02-06T09:55:27.043Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
[2026-02-06T09:55:27.043Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
[2026-02-06T09:55:27.044Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
[2026-02-06T09:55:27.044Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-06T09:55:27.044Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-06T09:55:27.044Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
[2026-02-06T09:55:27.044Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
[2026-02-06T09:55:27.044Z] [BOT] 🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
[2026-02-06T09:55:27.044Z] [BOT] 🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-06T09:55:27.044Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
[2026-02-06T09:55:27.044Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
[2026-02-06T09:55:27.044Z] [BOT] 🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
[2026-02-06T09:55:27.044Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-06T09:55:27.045Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-06T09:55:27.062Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T09:55:27.087Z] [BOT] ✅ Saved pending queue: 177 total (170 pending, 7 enriched, 0 posted)
🗑️ Removed 43 blacklisted jobs from pending queue
[2026-02-06T09:55:27.087Z] [BOT] 📋 After blacklist filter: 3 jobs (43 blacklisted)
📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-06T09:55:27.088Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-02-06T09:55:27.088Z] [BOT] ⏸️ Limiting to 10 jobs this run, 43 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T09:55:27.089Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-06T09:55:27.091Z] [BOT] 📍 [ROUTING] "Software Engineer, Claude Code" @ anthropic
[2026-02-06T09:55:27.091Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-06T09:55:27.092Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-06T09:55:27.108Z] [BOT ERROR] (node:2552) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T09:55:27.393Z] [BOT] ✅ Posted message: Software Engineer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-02-06T09:55:27.393Z] [BOT] ✅ Industry: Software Engineer, Claude Code @ anthropic
[2026-02-06T09:55:27.394Z] [BOT] 💾 Added channel posting: Software Engineer, Claude Code @ anthropic → category channel (1 total channels)
[2026-02-06T09:55:27.394Z] [BOT] 💾 BEFORE MERGE: 2097 jobs in memory (cached)
[2026-02-06T09:55:27.450Z] [BOT] ✅ Loaded V2 database: 2096 jobs
💾 DISK STATE: 2096 jobs on disk
[2026-02-06T09:55:27.450Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2097
[2026-02-06T09:55:27.455Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T09:55:27.455Z] [BOT] 💾 AFTER MERGE: 2097 jobs (merged disk + memory)
[2026-02-06T09:55:27.457Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T09:55:27.462Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 2087 active
[2026-02-06T09:55:27.580Z] [BOT] 💾 Saved posted_jobs.json: 2087 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T09:55:29.552Z] [BOT] ✅ Posted message: Software Engineer, Claude Code @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T09:55:29.553Z] [BOT] 💾 Added channel posting: Software Engineer, Claude Code @ anthropic → location channel (2 total channels)
[2026-02-06T09:55:29.553Z] [BOT] 💾 BEFORE MERGE: 2087 jobs in memory (cached)
[2026-02-06T09:55:29.609Z] [BOT] ✅ Loaded V2 database: 2087 jobs
💾 DISK STATE: 2087 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2087
[2026-02-06T09:55:29.617Z] [BOT] 🔀 Deep merged: Software Engineer, Claude Code @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T09:55:29.617Z] [BOT] 💾 AFTER MERGE: 2087 jobs (merged disk + memory)
[2026-02-06T09:55:29.618Z] [BOT] ✅ No jobs to archive (all 2087 jobs within 7-day window)
[2026-02-06T09:55:29.737Z] [BOT] 💾 Saved posted_jobs.json: 2087 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T09:55:31.238Z] [BOT] 📍 [ROUTING] "AI Machine Learning Engineer II (Intern) - United States" @ ORG_aa669b28
[2026-02-06T09:55:31.238Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-06T09:55:31.478Z] [BOT] ✅ Posted message: AI Machine Learning Engineer II (Intern) - United States @ ORG_aa669b28 in #🤖・ai-jobs
  ✅ Industry: AI Machine Learning Engineer II (Intern) - United States @ ORG_aa669b28
[2026-02-06T09:55:31.479Z] [BOT] 💾 Added channel posting: AI Machine Learning Engineer II (Intern) - United States @ ORG_aa669b28 → category channel (1 total channels)
[2026-02-06T09:55:31.479Z] [BOT] 💾 BEFORE MERGE: 2088 jobs in memory (cached)
[2026-02-06T09:55:31.529Z] [BOT] ✅ Loaded V2 database: 2087 jobs
💾 DISK STATE: 2087 jobs on disk
[2026-02-06T09:55:31.529Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2088
[2026-02-06T09:55:31.533Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T09:55:31.533Z] [BOT] 💾 AFTER MERGE: 2088 jobs (merged disk + memory)
[2026-02-06T09:55:31.535Z] [BOT] ✅ No jobs to archive (all 2088 jobs within 7-day window)
[2026-02-06T09:55:31.648Z] [BOT] 💾 Saved posted_jobs.json: 2088 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T09:55:33.375Z] [BOT] ✅ Posted message: AI Machine Learning Engineer II (Intern) - United States @ ORG_aa669b28 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T09:55:33.376Z] [BOT] 💾 Added channel posting: AI Machine Learning Engineer II (Intern) - United States @ ORG_aa669b28 → location channel (2 total channels)
💾 BEFORE MERGE: 2088 jobs in memory (cached)
[2026-02-06T09:55:33.426Z] [BOT] ✅ Loaded V2 database: 2088 jobs
💾 DISK STATE: 2088 jobs on disk
[2026-02-06T09:55:33.426Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2088
[2026-02-06T09:55:33.430Z] [BOT] 🔀 Deep merged: AI Machine Learning Engineer II (Intern) - United States @ ORG_aa669b28 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T09:55:33.431Z] [BOT] 💾 AFTER MERGE: 2088 jobs (merged disk + memory)
[2026-02-06T09:55:33.432Z] [BOT] ✅ No jobs to archive (all 2088 jobs within 7-day window)
[2026-02-06T09:55:33.548Z] [BOT] 💾 Saved posted_jobs.json: 2088 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T09:55:38.049Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T09:55:38.051Z] [BOT] 📍 [ROUTING] "NetherRealm Software Engineering Intern Co-op : Chicago - Jun-Dec 2026" @ 2704 WB Games Inc.
[2026-02-06T09:55:38.051Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T09:55:38.425Z] [BOT] ✅ Posted message: NetherRealm Software Engineering Intern Co-op : Chicago - Jun-Dec 2026 @ 2704 WB Games Inc. in #💻・tech-jobs
[2026-02-06T09:55:38.425Z] [BOT] ✅ Industry: NetherRealm Software Engineering Intern Co-op : Chicago - Jun-Dec 2026 @ 2704 WB Games Inc.
[2026-02-06T09:55:38.426Z] [BOT] 💾 Added channel posting: NetherRealm Software Engineering Intern Co-op : Chicago - Jun-Dec 2026 @ 2704 WB Games Inc. → category channel (1 total channels)
💾 BEFORE MERGE: 2089 jobs in memory (cached)
[2026-02-06T09:55:38.492Z] [BOT] ✅ Loaded V2 database: 2088 jobs
💾 DISK STATE: 2088 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2089
[2026-02-06T09:55:38.496Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T09:55:38.496Z] [BOT] 💾 AFTER MERGE: 2089 jobs (merged disk + memory)
[2026-02-06T09:55:38.497Z] [BOT] ✅ No jobs to archive (all 2089 jobs within 7-day window)
[2026-02-06T09:55:38.622Z] [BOT] 💾 Saved posted_jobs.json: 2089 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T09:55:40.393Z] [BOT] ✅ Posted message: NetherRealm Software Engineering Intern Co-op : Chicago - Jun-Dec 2026 @ 2704 WB Games Inc. in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T09:55:40.393Z] [BOT] 💾 Added channel posting: NetherRealm Software Engineering Intern Co-op : Chicago - Jun-Dec 2026 @ 2704 WB Games Inc. → location channel (2 total channels)
[2026-02-06T09:55:40.394Z] [BOT] 💾 BEFORE MERGE: 2089 jobs in memory (cached)
[2026-02-06T09:55:40.443Z] [BOT] ✅ Loaded V2 database: 2089 jobs
💾 DISK STATE: 2089 jobs on disk
[2026-02-06T09:55:40.444Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2089
[2026-02-06T09:55:40.448Z] [BOT] 🔀 Deep merged: NetherRealm Software Engineering Intern Co-op : Chicago - Jun-Dec 2026 @ 2704 WB Games Inc. (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2089 jobs (merged disk + memory)
[2026-02-06T09:55:40.450Z] [BOT] ✅ No jobs to archive (all 2089 jobs within 7-day window)
[2026-02-06T09:55:40.577Z] [BOT] 💾 Saved posted_jobs.json: 2089 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T09:55:45.078Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-02-06T09:55:45.080Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "bc9f8c873b8eeb30"
[2026-02-06T09:55:45.080Z] [BOT] ⏭️  Skipping duplicate: JID_310f7e64 (posted within 7 days)
[2026-02-06T09:55:45.080Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e54bc5a3..." not found, but found as SHA256 "7f6173c34f7603ef"
[2026-02-06T09:55:45.080Z] [BOT] ⏭️  Skipping duplicate: JID_e54bc5a3 (posted within 7 days)
[2026-02-06T09:55:45.080Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4afe9896..." not found, but found as SHA256 "0d0e2ef761605d0f"
[2026-02-06T09:55:45.081Z] [BOT] ⏭️  Skipping duplicate: JID_41dc9556 (posted within 7 days)
[2026-02-06T09:55:45.095Z] [BOT] ✅ Loaded pending queue: 177 total (170 pending, 7 enriched, 0 posted)
[2026-02-06T09:55:45.110Z] [BOT] ✅ Saved pending queue: 177 total (170 pending, 4 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T09:55:45.219Z] [BOT] 📂 Loaded 12517 existing routing entries
[2026-02-06T09:55:45.352Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-02-06T09:55:45.352Z] [BOT] Total entries: 12520
   Timestamp: 2026-02-06T09:55:45.304Z
[2026-02-06T09:55:45.352Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T09:55:45.353Z] [BOT] Total attempts: 53
   Successful: 6
   Failed: 0
   Skipped: 47
[2026-02-06T09:55:45.353Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T09:55:45.353Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 2 posts
     2. #🌉・JID_739bbc0b: 2 posts
[2026-02-06T09:55:45.353Z] [BOT] 3. #💻・tech-jobs: 1 posts
     4. #📍・JID_6daed763: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2089 jobs in memory (cached)
[2026-02-06T09:55:45.413Z] [BOT] ✅ Loaded V2 database: 2089 jobs
💾 DISK STATE: 2089 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2089
[2026-02-06T09:55:45.425Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T09:55:45.426Z] [BOT] 💾 AFTER MERGE: 2089 jobs (merged disk + memory)
[2026-02-06T09:55:45.428Z] [BOT] ✅ No jobs to archive (all 2089 jobs within 7-day window)
[2026-02-06T09:55:45.548Z] [BOT] 💾 Saved posted_jobs.json: 2089 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T09:55:45.548Z] [BOT] ✅ Database saved successfully
[2026-02-06T09:55:47.566Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2552) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*