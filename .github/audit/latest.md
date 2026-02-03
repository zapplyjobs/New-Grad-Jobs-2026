# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T19:28:07.119Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T19:27:54.206Z] ========================================
[2026-02-03T19:27:54.209Z] Discord Bot Execution Log
[2026-02-03T19:27:54.209Z] Environment: GitHub Actions
[2026-02-03T19:27:54.209Z] Node Version: v20.20.0
[2026-02-03T19:27:54.209Z] ========================================
[2026-02-03T19:27:54.209Z] Environment Variables Check:
[2026-02-03T19:27:54.209Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T19:27:54.209Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T19:27:54.209Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T19:27:54.209Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T19:27:54.209Z] 
Multi-Channel Configuration:
[2026-02-03T19:27:54.209Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T19:27:54.209Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:27:54.210Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:27:54.210Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T19:27:54.210Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:27:54.210Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:27:54.210Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:27:54.210Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:27:54.210Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T19:27:54.210Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T19:27:54.210Z] 
Data Files Check:
[2026-02-03T19:27:54.212Z] .github/data/new_jobs.json: ✅ Exists (10 items, 175818 bytes)
[2026-02-03T19:27:54.279Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11350523 bytes)
[2026-02-03T19:27:54.279Z] 
========================================
[2026-02-03T19:27:54.279Z] Starting Enhanced Discord Bot...
[2026-02-03T19:27:54.279Z] ========================================
[2026-02-03T19:27:54.859Z] [BOT] ✅ Loaded V2 database: 2248 jobs
[2026-02-03T19:27:56.157Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T19:27:56.157Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T19:27:56.157Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T19:27:56.180Z] [BOT] ✅ Loaded pending queue: 331 total (281 pending, 50 enriched, 0 posted)
[2026-02-03T19:27:56.180Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T19:27:56.181Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T19:27:56.181Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T19:27:56.182Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T19:27:56.200Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T19:27:56.200Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-02-03T19:27:56.200Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
[2026-02-03T19:27:56.200Z] [BOT] 🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
[2026-02-03T19:27:56.201Z] [BOT] 🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
[2026-02-03T19:27:56.201Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
[2026-02-03T19:27:56.201Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, API  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
[2026-02-03T19:27:56.201Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
🚫 Skipping blacklisted job: Retirement AI Senior Staff Engineer at gusto
[2026-02-03T19:27:56.201Z] [BOT] 🚫 Skipping blacklisted job: Workforce Management Tools Administration Lead at gusto
🚫 Skipping blacklisted job: Workforce Management Program Manager at gusto
🚫 Skipping blacklisted job: Senior Manager, People Systems at vercel
[2026-02-03T19:27:56.201Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-03T19:27:56.201Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Senior Manager, Product Data Science  at gusto
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Product Design Manager, Engagement at discord
[2026-02-03T19:27:56.202Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-03T19:27:56.202Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
[2026-02-03T19:27:56.202Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
[2026-02-03T19:27:56.202Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
[2026-02-03T19:27:56.229Z] [BOT] ✅ Loaded pending queue: 331 total (281 pending, 50 enriched, 0 posted)
[2026-02-03T19:27:56.264Z] [BOT] ✅ Saved pending queue: 283 total (281 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-03T19:27:56.265Z] [BOT] 📋 After blacklist filter: 1 jobs (48 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-03T19:27:56.265Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-03T19:27:56.265Z] [BOT] ⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T19:27:56.267Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-03T19:27:56.269Z] [BOT] 📍 [ROUTING] "Sr. Sales Enablement Specialist - Onboarding" @ samsara
[2026-02-03T19:27:56.269Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T19:27:56.286Z] [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T19:27:56.517Z] [BOT] ✅ Posted message: Sr. Sales Enablement Specialist - Onboarding @ samsara in #💻・tech-jobs
[2026-02-03T19:27:56.517Z] [BOT] ✅ Industry: Sr. Sales Enablement Specialist - Onboarding @ samsara
[2026-02-03T19:27:56.518Z] [BOT] 💾 Added channel posting: Sr. Sales Enablement Specialist - Onboarding @ samsara → category channel (1 total channels)
[2026-02-03T19:27:56.519Z] [BOT] 💾 BEFORE MERGE: 2249 jobs in memory (cached)
[2026-02-03T19:27:56.563Z] [BOT] ✅ Loaded V2 database: 2248 jobs
💾 DISK STATE: 2248 jobs on disk
[2026-02-03T19:27:56.564Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2249
[2026-02-03T19:27:56.569Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T19:27:56.569Z] [BOT] 💾 AFTER MERGE: 2249 jobs (merged disk + memory)
[2026-02-03T19:27:56.571Z] [BOT] ✅ No jobs to archive (all 2249 jobs within 7-day window)
[2026-02-03T19:27:56.705Z] [BOT] 💾 Saved posted_jobs.json: 2249 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T19:27:58.475Z] [BOT] ✅ Posted message: Sr. Sales Enablement Specialist - Onboarding @ samsara in #🌉・JID_739bbc0b
[2026-02-03T19:27:58.476Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T19:27:58.476Z] [BOT] 💾 Added channel posting: Sr. Sales Enablement Specialist - Onboarding @ samsara → location channel (2 total channels)
[2026-02-03T19:27:58.476Z] [BOT] 💾 BEFORE MERGE: 2249 jobs in memory (cached)
[2026-02-03T19:27:58.513Z] [BOT] ✅ Loaded V2 database: 2249 jobs
💾 DISK STATE: 2249 jobs on disk
[2026-02-03T19:27:58.513Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2249
[2026-02-03T19:27:58.518Z] [BOT] 🔀 Deep merged: Sr. Sales Enablement Specialist - Onboarding @ samsara (disk: 1 channels → merged: 2 channels)
[2026-02-03T19:27:58.518Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2249 jobs (merged disk + memory)
[2026-02-03T19:27:58.519Z] [BOT] ✅ No jobs to archive (all 2249 jobs within 7-day window)
[2026-02-03T19:27:58.628Z] [BOT] 💾 Saved posted_jobs.json: 2249 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T19:28:03.130Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-03T19:28:03.131Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f7c297c1..." not found, but found as SHA256 "465eabd2bd4668ee"
[2026-02-03T19:28:03.131Z] [BOT] ⏭️  Skipping duplicate: JID_77f32f42 (posted within 7 days)
[2026-02-03T19:28:03.148Z] [BOT] ✅ Loaded pending queue: 283 total (281 pending, 2 enriched, 0 posted)
[2026-02-03T19:28:03.183Z] [BOT] ✅ Saved pending queue: 283 total (281 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-03T19:28:03.275Z] [BOT] 📂 Loaded 12329 existing routing entries
[2026-02-03T19:28:03.412Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-03T19:28:03.413Z] [BOT] Total entries: 12330
   Timestamp: 2026-02-03T19:28:03.361Z
[2026-02-03T19:28:03.413Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T19:28:03.413Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-03T19:28:03.413Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-03T19:28:03.414Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2249 jobs in memory (cached)
[2026-02-03T19:28:03.457Z] [BOT] ✅ Loaded V2 database: 2249 jobs
💾 DISK STATE: 2249 jobs on disk
[2026-02-03T19:28:03.458Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2249
[2026-02-03T19:28:03.462Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T19:28:03.462Z] [BOT] 💾 AFTER MERGE: 2249 jobs (merged disk + memory)
[2026-02-03T19:28:03.464Z] [BOT] ✅ No jobs to archive (all 2249 jobs within 7-day window)
[2026-02-03T19:28:03.584Z] [BOT] 💾 Saved posted_jobs.json: 2249 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T19:28:05.608Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*