# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T20:49:51.324Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T20:49:29.234Z] ========================================
[2026-02-01T20:49:29.236Z] Discord Bot Execution Log
[2026-02-01T20:49:29.236Z] Environment: GitHub Actions
[2026-02-01T20:49:29.236Z] Node Version: v20.20.0
[2026-02-01T20:49:29.236Z] ========================================
[2026-02-01T20:49:29.236Z] Environment Variables Check:
[2026-02-01T20:49:29.236Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T20:49:29.236Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T20:49:29.236Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T20:49:29.236Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T20:49:29.236Z] 
Multi-Channel Configuration:
[2026-02-01T20:49:29.236Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T20:49:29.237Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:49:29.237Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:49:29.237Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T20:49:29.237Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:49:29.237Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:49:29.237Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:49:29.237Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:49:29.237Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:49:29.237Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T20:49:29.237Z] 
Data Files Check:
[2026-02-01T20:49:29.238Z] .github/data/new_jobs.json: ✅ Exists (10 items, 170900 bytes)
[2026-02-01T20:49:29.297Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10860166 bytes)
[2026-02-01T20:49:29.297Z] 
========================================
[2026-02-01T20:49:29.297Z] Starting Enhanced Discord Bot...
[2026-02-01T20:49:29.297Z] ========================================
[2026-02-01T20:49:29.876Z] [BOT] ✅ Loaded V2 database: 2175 jobs
[2026-02-01T20:49:30.429Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T20:49:30.430Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T20:49:30.430Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T20:49:30.479Z] [BOT] ✅ Loaded pending queue: 765 total (715 pending, 50 enriched, 0 posted)
[2026-02-01T20:49:30.479Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-01T20:49:30.498Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T20:49:30.499Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-01T20:49:30.499Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-02-01T20:49:30.499Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-01T20:49:30.499Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-01T20:49:30.499Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Technical Documentation Specialist, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Education Platform Engineering Lead at anthropic
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
[2026-02-01T20:49:30.500Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Technical Program Manager, AI Research at figma
🚫 Skipping blacklisted job: Manager, On-Site Executive IT Support (Residential Operations) at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Full-Stack at brex
[2026-02-01T20:49:30.500Z] [BOT] 🚫 Skipping blacklisted job: Data Architect Senior at Intermountain Healthcare
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, Product-Led Growth at brex
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, Product-Led Growth at brex
[2026-02-01T20:49:30.500Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Operations Manager, B2B Sales at brex
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, B2B Sales at brex
🚫 Skipping blacklisted job: Senior Fullstack Engineer - Backstage Portal, Data Experience at spotify
[2026-02-01T20:49:30.500Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Customer Enablement Manager - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Product Marketing Manager - Spotify for Artists, Campaign Kit at spotify
🚫 Skipping blacklisted job: Senior GRC Lead at brex
[2026-02-01T20:49:30.500Z] [BOT] 🚫 Skipping blacklisted job: Senior GRC Lead at brex
[2026-02-01T20:49:30.500Z] [BOT] 🚫 Skipping blacklisted job: Staff Applied Scientist - Observability Data Platform at datadog
🚫 Skipping blacklisted job: Staff Applied Scientist - Observability Data Platform at datadog
[2026-02-01T20:49:30.500Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales Commissions at samsara
🚫 Skipping blacklisted job: Director, Sales Commissions at samsara
🚫 Skipping blacklisted job: Manager Account Development - Atlanta at samsara
🚫 Skipping blacklisted job: Manager Account Development, Relocation to Atlanta at samsara
[2026-02-01T20:49:30.500Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Manager II, Shipping and Receiving Logistics at samsara
🚫 Skipping blacklisted job: Manager of Account Development at samsara
[2026-02-01T20:49:30.500Z] [BOT] 🚫 Skipping blacklisted job: Senior Hardware Reliability Engineer at samsara
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Brand Marketing Director at gusto
[2026-02-01T20:49:30.500Z] [BOT] 🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
[2026-02-01T20:49:30.501Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Senior Staff Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: USA – Tax - Business Tax Services - Federal Tax Advisory','Fta','Jd/LLM','Staff 2 at Ernst & Young
🚫 Skipping blacklisted job: USA – Tax - Indirect Tax - Technology Staff at Ernst & Young
[2026-02-01T20:49:30.501Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
[2026-02-01T20:49:30.548Z] [BOT] ✅ Loaded pending queue: 765 total (715 pending, 50 enriched, 0 posted)
[2026-02-01T20:49:30.625Z] [BOT] ✅ Saved pending queue: 718 total (715 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 3 jobs (47 blacklisted)
[2026-02-01T20:49:30.626Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-01T20:49:30.626Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-02-01T20:49:30.626Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T20:49:30.628Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T20:49:30.629Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer, Reinforcement Learning" @ anthropic
[2026-02-01T20:49:30.629Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T20:49:30.629Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T20:49:30.647Z] [BOT ERROR] (node:2944) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T20:49:31.078Z] [BOT] ✅ Posted message: Full Stack Software Engineer, Reinforcement Learning @ anthropic in #🤖・ai-jobs
  ✅ Industry: Full Stack Software Engineer, Reinforcement Learning @ anthropic
[2026-02-01T20:49:31.079Z] [BOT] 💾 Added channel posting: Full Stack Software Engineer, Reinforcement Learning @ anthropic → category channel (1 total channels)
[2026-02-01T20:49:31.080Z] [BOT] 💾 BEFORE MERGE: 2176 jobs in memory (cached)
[2026-02-01T20:49:31.128Z] [BOT] ✅ Loaded V2 database: 2175 jobs
💾 DISK STATE: 2175 jobs on disk
[2026-02-01T20:49:31.128Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2176
[2026-02-01T20:49:31.133Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T20:49:31.133Z] [BOT] 💾 AFTER MERGE: 2176 jobs (merged disk + memory)
[2026-02-01T20:49:31.135Z] [BOT] ✅ No jobs to archive (all 2176 jobs within 7-day window)
[2026-02-01T20:49:31.272Z] [BOT] 💾 Saved posted_jobs.json: 2176 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:49:33.086Z] [BOT] ✅ Posted message: Full Stack Software Engineer, Reinforcement Learning @ anthropic in #🌉・JID_739bbc0b
[2026-02-01T20:49:33.087Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T20:49:33.087Z] [BOT] 💾 Added channel posting: Full Stack Software Engineer, Reinforcement Learning @ anthropic → location channel (2 total channels)
[2026-02-01T20:49:33.087Z] [BOT] 💾 BEFORE MERGE: 2176 jobs in memory (cached)
[2026-02-01T20:49:33.125Z] [BOT] ✅ Loaded V2 database: 2176 jobs
[2026-02-01T20:49:33.125Z] [BOT] 💾 DISK STATE: 2176 jobs on disk
[2026-02-01T20:49:33.125Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2176
[2026-02-01T20:49:33.130Z] [BOT] 🔀 Deep merged: Full Stack Software Engineer, Reinforcement Learning @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-01T20:49:33.130Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2176 jobs (merged disk + memory)
[2026-02-01T20:49:33.131Z] [BOT] ✅ No jobs to archive (all 2176 jobs within 7-day window)
[2026-02-01T20:49:33.236Z] [BOT] 💾 Saved posted_jobs.json: 2176 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:49:34.738Z] [BOT] 📍 [ROUTING] "Data Scientist, Claude Developer Platform" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-02-01T20:49:34.738Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T20:49:34.921Z] [BOT] ✅ Posted message: Data Scientist, Claude Developer Platform @ anthropic in #🤖・ai-jobs
  ✅ Industry: Data Scientist, Claude Developer Platform @ anthropic
[2026-02-01T20:49:34.921Z] [BOT] 💾 Added channel posting: Data Scientist, Claude Developer Platform @ anthropic → category channel (1 total channels)
[2026-02-01T20:49:34.922Z] [BOT] 💾 BEFORE MERGE: 2177 jobs in memory (cached)
[2026-02-01T20:49:34.959Z] [BOT] ✅ Loaded V2 database: 2176 jobs
💾 DISK STATE: 2176 jobs on disk
[2026-02-01T20:49:34.960Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2177
[2026-02-01T20:49:34.965Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2177 jobs (merged disk + memory)
[2026-02-01T20:49:34.966Z] [BOT] ✅ No jobs to archive (all 2177 jobs within 7-day window)
[2026-02-01T20:49:35.072Z] [BOT] 💾 Saved posted_jobs.json: 2177 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:49:36.763Z] [BOT] ✅ Posted message: Data Scientist, Claude Developer Platform @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T20:49:36.763Z] [BOT] 💾 Added channel posting: Data Scientist, Claude Developer Platform @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 2177 jobs in memory (cached)
[2026-02-01T20:49:36.802Z] [BOT] ✅ Loaded V2 database: 2177 jobs
💾 DISK STATE: 2177 jobs on disk
[2026-02-01T20:49:36.802Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2177
[2026-02-01T20:49:36.807Z] [BOT] 🔀 Deep merged: Data Scientist, Claude Developer Platform @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T20:49:36.807Z] [BOT] 💾 AFTER MERGE: 2177 jobs (merged disk + memory)
[2026-02-01T20:49:36.808Z] [BOT] ✅ No jobs to archive (all 2177 jobs within 7-day window)
[2026-02-01T20:49:36.924Z] [BOT] 💾 Saved posted_jobs.json: 2177 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:49:41.423Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-01T20:49:41.426Z] [BOT] 📍 [ROUTING] "Platform Security Engineering - Auditor" @ anthropic
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T20:49:41.616Z] [BOT] ✅ Posted message: Platform Security Engineering - Auditor @ anthropic in #💻・tech-jobs
  ✅ Industry: Platform Security Engineering - Auditor @ anthropic
[2026-02-01T20:49:41.617Z] [BOT] 💾 Added channel posting: Platform Security Engineering - Auditor @ anthropic → category channel (1 total channels)
[2026-02-01T20:49:41.617Z] [BOT] 💾 BEFORE MERGE: 2178 jobs in memory (cached)
[2026-02-01T20:49:41.653Z] [BOT] ✅ Loaded V2 database: 2177 jobs
💾 DISK STATE: 2177 jobs on disk
[2026-02-01T20:49:41.653Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2178
[2026-02-01T20:49:41.659Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T20:49:41.659Z] [BOT] 💾 AFTER MERGE: 2178 jobs (merged disk + memory)
[2026-02-01T20:49:41.661Z] [BOT] ✅ No jobs to archive (all 2178 jobs within 7-day window)
[2026-02-01T20:49:41.773Z] [BOT] 💾 Saved posted_jobs.json: 2178 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:49:43.425Z] [BOT] ✅ Posted message: Platform Security Engineering - Auditor @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T20:49:43.426Z] [BOT] 💾 Added channel posting: Platform Security Engineering - Auditor @ anthropic → location channel (2 total channels)
[2026-02-01T20:49:43.426Z] [BOT] 💾 BEFORE MERGE: 2178 jobs in memory (cached)
[2026-02-01T20:49:43.462Z] [BOT] ✅ Loaded V2 database: 2178 jobs
💾 DISK STATE: 2178 jobs on disk
[2026-02-01T20:49:43.463Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2178
[2026-02-01T20:49:43.466Z] [BOT] 🔀 Deep merged: Platform Security Engineering - Auditor @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T20:49:43.467Z] [BOT] 💾 AFTER MERGE: 2178 jobs (merged disk + memory)
[2026-02-01T20:49:43.468Z] [BOT] ✅ No jobs to archive (all 2178 jobs within 7-day window)
[2026-02-01T20:49:43.585Z] [BOT] 💾 Saved posted_jobs.json: 2178 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:49:48.087Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-02-01T20:49:48.088Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "41e285190d713bc7"
[2026-02-01T20:49:48.088Z] [BOT] ⏭️  Skipping duplicate: JID_9f994439 (posted within 7 days)
[2026-02-01T20:49:48.089Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "8d2a6c543101b03f"
[2026-02-01T20:49:48.089Z] [BOT] ⏭️  Skipping duplicate: JID_97623477 (posted within 7 days)
[2026-02-01T20:49:48.089Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "b0a17fe10cfdc4b9"
⏭️  Skipping duplicate: JID_a7cd84e0 (posted within 7 days)
[2026-02-01T20:49:48.126Z] [BOT] ✅ Loaded pending queue: 718 total (715 pending, 3 enriched, 0 posted)
[2026-02-01T20:49:48.188Z] [BOT] ✅ Saved pending queue: 718 total (715 pending, 0 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T20:49:48.280Z] [BOT] 📂 Loaded 12256 existing routing entries
[2026-02-01T20:49:48.429Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T20:49:48.429Z] [BOT] New entries: 3
   Total entries: 12259
   Timestamp: 2026-02-01T20:49:48.368Z
[2026-02-01T20:49:48.430Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T20:49:48.430Z] [BOT] Total attempts: 53
   Successful: 6
   Failed: 0
   Skipped: 47
[2026-02-01T20:49:48.430Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T20:49:48.430Z] [BOT] Last cleanup: Never
   Total posts: 6
[2026-02-01T20:49:48.431Z] [BOT] Channels used: 3
[2026-02-01T20:49:48.431Z] [BOT] Top channels:
     1. #🌉・JID_739bbc0b: 3 posts
     2. #🤖・ai-jobs: 2 posts
     3. #💻・tech-jobs: 1 posts
[2026-02-01T20:49:48.431Z] [BOT] [STATS] Channel stats saved
[2026-02-01T20:49:48.431Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2178 jobs in memory (cached)
[2026-02-01T20:49:48.474Z] [BOT] ✅ Loaded V2 database: 2178 jobs
💾 DISK STATE: 2178 jobs on disk
[2026-02-01T20:49:48.475Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2178
[2026-02-01T20:49:48.479Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T20:49:48.479Z] [BOT] 💾 AFTER MERGE: 2178 jobs (merged disk + memory)
[2026-02-01T20:49:48.481Z] [BOT] ✅ No jobs to archive (all 2178 jobs within 7-day window)
[2026-02-01T20:49:48.606Z] [BOT] 💾 Saved posted_jobs.json: 2178 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T20:49:50.634Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2944) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*