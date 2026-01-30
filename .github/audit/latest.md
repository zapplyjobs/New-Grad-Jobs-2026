# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T07:58:07.682Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T07:57:38.118Z] ========================================
[2026-01-30T07:57:38.120Z] Discord Bot Execution Log
[2026-01-30T07:57:38.120Z] Environment: GitHub Actions
[2026-01-30T07:57:38.120Z] Node Version: v20.20.0
[2026-01-30T07:57:38.120Z] ========================================
[2026-01-30T07:57:38.120Z] Environment Variables Check:
[2026-01-30T07:57:38.120Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T07:57:38.121Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T07:57:38.121Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T07:57:38.121Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T07:57:38.121Z] 
Multi-Channel Configuration:
[2026-01-30T07:57:38.121Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T07:57:38.121Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T07:57:38.121Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T07:57:38.121Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T07:57:38.121Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T07:57:38.121Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T07:57:38.121Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T07:57:38.121Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T07:57:38.122Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T07:57:38.122Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T07:57:38.122Z] 
Data Files Check:
[2026-01-30T07:57:38.123Z] .github/data/new_jobs.json: ✅ Exists (10 items, 189694 bytes)
[2026-01-30T07:57:38.136Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2026760 bytes)
[2026-01-30T07:57:38.136Z] 
========================================
[2026-01-30T07:57:38.136Z] Starting Enhanced Discord Bot...
[2026-01-30T07:57:38.136Z] ========================================
[2026-01-30T07:57:38.688Z] [BOT] ✅ Loaded V2 database: 309 jobs
[2026-01-30T07:57:39.209Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T07:57:39.209Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T07:57:39.209Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T07:57:39.333Z] [BOT] ✅ Loaded pending queue: 2923 total (2593 pending, 50 enriched, 280 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T07:57:39.335Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T07:57:39.335Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T07:57:39.338Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-01-30T07:57:39.338Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
[2026-01-30T07:57:39.338Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Security - Detection & Response at anthropic
[2026-01-30T07:57:39.338Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
[2026-01-30T07:57:39.339Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager at brex
🚫 Skipping blacklisted job: Senior Data Scientist - Gusto 401(k) at gusto
🚫 Skipping blacklisted job: Manager I, Engineering - CCM Optimize  at datadog
[2026-01-30T07:57:39.339Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer, Visual Systems at datadog
🚫 Skipping blacklisted job: Staff Product Designer, Bits AI at datadog
🚫 Skipping blacklisted job: Director, Product Foundations at vercel
🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
[2026-01-30T07:57:39.450Z] [BOT] ✅ Loaded pending queue: 2923 total (2593 pending, 50 enriched, 280 posted)
[2026-01-30T07:57:39.624Z] [BOT] ✅ Saved pending queue: 2910 total (2593 pending, 37 enriched, 280 posted)
🗑️ Removed 13 blacklisted jobs from pending queue
[2026-01-30T07:57:39.624Z] [BOT] 📋 After blacklist filter: 34 jobs (13 blacklisted)
[2026-01-30T07:57:39.624Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-30T07:57:39.625Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-01-30T07:57:39.625Z] [BOT] ⏸️ Limiting to 10 jobs this run, 37 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T07:57:39.627Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-30T07:57:39.628Z] [BOT] 📍 [ROUTING] "Software Engineer, iOS" @ anthropic
   Category: TECH (matched: "software")
[2026-01-30T07:57:39.628Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:57:39.646Z] [BOT ERROR] (node:2498) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T07:57:40.022Z] [BOT] ✅ Posted message: Software Engineer, iOS @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, iOS @ anthropic
[2026-01-30T07:57:40.022Z] [BOT] 💾 Added channel posting: Software Engineer, iOS @ anthropic → category channel (1 total channels)
[2026-01-30T07:57:40.023Z] [BOT] 💾 BEFORE MERGE: 310 jobs in memory (cached)
[2026-01-30T07:57:40.031Z] [BOT] ✅ Loaded V2 database: 309 jobs
💾 DISK STATE: 309 jobs on disk
[2026-01-30T07:57:40.031Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=310
[2026-01-30T07:57:40.032Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 310 jobs (merged disk + memory)
[2026-01-30T07:57:40.033Z] [BOT] ✅ No jobs to archive (all 310 jobs within 7-day window)
[2026-01-30T07:57:40.058Z] [BOT] 💾 Saved posted_jobs.json: 310 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:57:41.561Z] [BOT] 📍 [ROUTING] "Software Engineer, ML Networking" @ anthropic
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:57:41.740Z] [BOT] ✅ Posted message: Software Engineer, ML Networking @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, ML Networking @ anthropic
[2026-01-30T07:57:41.741Z] [BOT] 💾 Added channel posting: Software Engineer, ML Networking @ anthropic → category channel (1 total channels)
[2026-01-30T07:57:41.741Z] [BOT] 💾 BEFORE MERGE: 311 jobs in memory (cached)
[2026-01-30T07:57:41.749Z] [BOT] ✅ Loaded V2 database: 310 jobs
[2026-01-30T07:57:41.749Z] [BOT] 💾 DISK STATE: 310 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=311
[2026-01-30T07:57:41.750Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:57:41.750Z] [BOT] 💾 AFTER MERGE: 311 jobs (merged disk + memory)
[2026-01-30T07:57:41.750Z] [BOT] ✅ No jobs to archive (all 311 jobs within 7-day window)
[2026-01-30T07:57:41.770Z] [BOT] 💾 Saved posted_jobs.json: 311 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:57:43.272Z] [BOT] 📍 [ROUTING] "Software Engineer, Public Sector" @ anthropic
   Category: TECH (matched: "software")
[2026-01-30T07:57:43.272Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:57:43.471Z] [BOT] ✅ Posted message: Software Engineer, Public Sector @ anthropic in #💻・tech-jobs
[2026-01-30T07:57:43.471Z] [BOT] ✅ Industry: Software Engineer, Public Sector @ anthropic
[2026-01-30T07:57:43.471Z] [BOT] 💾 Added channel posting: Software Engineer, Public Sector @ anthropic → category channel (1 total channels)
[2026-01-30T07:57:43.471Z] [BOT] 💾 BEFORE MERGE: 312 jobs in memory (cached)
[2026-01-30T07:57:43.478Z] [BOT] ✅ Loaded V2 database: 311 jobs
💾 DISK STATE: 311 jobs on disk
[2026-01-30T07:57:43.478Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=312
[2026-01-30T07:57:43.479Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:57:43.479Z] [BOT] 💾 AFTER MERGE: 312 jobs (merged disk + memory)
[2026-01-30T07:57:43.479Z] [BOT] ✅ No jobs to archive (all 312 jobs within 7-day window)
[2026-01-30T07:57:43.499Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:57:45.000Z] [BOT] 📍 [ROUTING] "Software Engineer, Python Language" @ anthropic
   Category: TECH (matched: "software")
[2026-01-30T07:57:45.001Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:57:45.182Z] [BOT] ✅ Posted message: Software Engineer, Python Language @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Python Language @ anthropic
[2026-01-30T07:57:45.182Z] [BOT] 💾 Added channel posting: Software Engineer, Python Language @ anthropic → category channel (1 total channels)
[2026-01-30T07:57:45.182Z] [BOT] 💾 BEFORE MERGE: 313 jobs in memory (cached)
[2026-01-30T07:57:45.190Z] [BOT] ✅ Loaded V2 database: 312 jobs
💾 DISK STATE: 312 jobs on disk
[2026-01-30T07:57:45.190Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=313
[2026-01-30T07:57:45.191Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:57:45.191Z] [BOT] 💾 AFTER MERGE: 313 jobs (merged disk + memory)
[2026-01-30T07:57:45.191Z] [BOT] ✅ No jobs to archive (all 313 jobs within 7-day window)
[2026-01-30T07:57:45.211Z] [BOT] 💾 Saved posted_jobs.json: 313 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:57:46.712Z] [BOT] 📍 [ROUTING] "Software Engineer, Safeguards" @ anthropic
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:57:47.065Z] [BOT] ✅ Posted message: Software Engineer, Safeguards @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Safeguards @ anthropic
[2026-01-30T07:57:47.065Z] [BOT] 💾 Added channel posting: Software Engineer, Safeguards @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 314 jobs in memory (cached)
[2026-01-30T07:57:47.072Z] [BOT] ✅ Loaded V2 database: 313 jobs
💾 DISK STATE: 313 jobs on disk
[2026-01-30T07:57:47.072Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=314
[2026-01-30T07:57:47.073Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 314 jobs (merged disk + memory)
[2026-01-30T07:57:47.073Z] [BOT] ✅ No jobs to archive (all 314 jobs within 7-day window)
[2026-01-30T07:57:47.093Z] [BOT] 💾 Saved posted_jobs.json: 314 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:57:48.595Z] [BOT] 📍 [ROUTING] "Software Engineer, Sandboxing (Systems)" @ anthropic
[2026-01-30T07:57:48.595Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:57:48.754Z] [BOT] ✅ Posted message: Software Engineer, Sandboxing (Systems) @ anthropic in #💻・tech-jobs
[2026-01-30T07:57:48.754Z] [BOT] ✅ Industry: Software Engineer, Sandboxing (Systems) @ anthropic
[2026-01-30T07:57:48.754Z] [BOT] 💾 Added channel posting: Software Engineer, Sandboxing (Systems) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 315 jobs in memory (cached)
[2026-01-30T07:57:48.765Z] [BOT] ✅ Loaded V2 database: 314 jobs
💾 DISK STATE: 314 jobs on disk
[2026-01-30T07:57:48.765Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=315
[2026-01-30T07:57:48.766Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:57:48.766Z] [BOT] 💾 AFTER MERGE: 315 jobs (merged disk + memory)
[2026-01-30T07:57:48.766Z] [BOT] ✅ No jobs to archive (all 315 jobs within 7-day window)
[2026-01-30T07:57:48.791Z] [BOT] 💾 Saved posted_jobs.json: 315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:57:53.294Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-30T07:57:53.294Z] [BOT] 📍 [ROUTING] "Software Engineer, Labs" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T07:57:53.294Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T07:57:53.572Z] [BOT] ✅ Posted message: Software Engineer, Labs @ anthropic in #🤖・ai-jobs
  ✅ Industry: Software Engineer, Labs @ anthropic
[2026-01-30T07:57:53.572Z] [BOT] 💾 Added channel posting: Software Engineer, Labs @ anthropic → category channel (1 total channels)
[2026-01-30T07:57:53.572Z] [BOT] 💾 BEFORE MERGE: 316 jobs in memory (cached)
[2026-01-30T07:57:53.579Z] [BOT] ✅ Loaded V2 database: 315 jobs
💾 DISK STATE: 315 jobs on disk
[2026-01-30T07:57:53.579Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=316
[2026-01-30T07:57:53.580Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 316 jobs (merged disk + memory)
[2026-01-30T07:57:53.580Z] [BOT] ✅ No jobs to archive (all 316 jobs within 7-day window)
[2026-01-30T07:57:53.607Z] [BOT] 💾 Saved posted_jobs.json: 316 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:57:55.109Z] [BOT] 📍 [ROUTING] "Software Engineer, Platform" @ anthropic
   Category: AI (matched: "AI specialization")
[2026-01-30T07:57:55.110Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T07:57:55.398Z] [BOT] ✅ Posted message: Software Engineer, Platform @ anthropic in #🤖・ai-jobs
  ✅ Industry: Software Engineer, Platform @ anthropic
[2026-01-30T07:57:55.399Z] [BOT] 💾 Added channel posting: Software Engineer, Platform @ anthropic → category channel (1 total channels)
[2026-01-30T07:57:55.399Z] [BOT] 💾 BEFORE MERGE: 317 jobs in memory (cached)
[2026-01-30T07:57:55.406Z] [BOT] ✅ Loaded V2 database: 316 jobs
💾 DISK STATE: 316 jobs on disk
[2026-01-30T07:57:55.406Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=317
[2026-01-30T07:57:55.407Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:57:55.407Z] [BOT] 💾 AFTER MERGE: 317 jobs (merged disk + memory)
[2026-01-30T07:57:55.407Z] [BOT] ✅ No jobs to archive (all 317 jobs within 7-day window)
[2026-01-30T07:57:55.429Z] [BOT] 💾 Saved posted_jobs.json: 317 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:57:56.931Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (Beneficial Deployments)" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T07:57:56.932Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T07:57:57.266Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (Beneficial Deployments) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (Beneficial Deployments) @ anthropic
[2026-01-30T07:57:57.267Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (Beneficial Deployments) @ anthropic → category channel (1 total channels)
[2026-01-30T07:57:57.267Z] [BOT] 💾 BEFORE MERGE: 318 jobs in memory (cached)
[2026-01-30T07:57:57.277Z] [BOT] ✅ Loaded V2 database: 317 jobs
💾 DISK STATE: 317 jobs on disk
[2026-01-30T07:57:57.277Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=318
[2026-01-30T07:57:57.278Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:57:57.278Z] [BOT] 💾 AFTER MERGE: 318 jobs (merged disk + memory)
[2026-01-30T07:57:57.278Z] [BOT] ✅ No jobs to archive (all 318 jobs within 7-day window)
[2026-01-30T07:57:57.306Z] [BOT] 💾 Saved posted_jobs.json: 318 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:57:58.808Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (Digital Native Business)" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-30T07:57:58.809Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T07:57:59.102Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (Digital Native Business) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (Digital Native Business) @ anthropic
[2026-01-30T07:57:59.102Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (Digital Native Business) @ anthropic → category channel (1 total channels)
[2026-01-30T07:57:59.103Z] [BOT] 💾 BEFORE MERGE: 319 jobs in memory (cached)
[2026-01-30T07:57:59.110Z] [BOT] ✅ Loaded V2 database: 318 jobs
💾 DISK STATE: 318 jobs on disk
[2026-01-30T07:57:59.110Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=319
[2026-01-30T07:57:59.111Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:57:59.111Z] [BOT] 💾 AFTER MERGE: 319 jobs (merged disk + memory)
[2026-01-30T07:57:59.112Z] [BOT] ✅ No jobs to archive (all 319 jobs within 7-day window)
[2026-01-30T07:57:59.132Z] [BOT] 💾 Saved posted_jobs.json: 319 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:58:03.634Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T07:58:03.635Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "be711265d741ad25"
[2026-01-30T07:58:03.635Z] [BOT] ⏭️  Skipping duplicate: JID_5f23f2e1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "f3364ae6c0bfe734"
[2026-01-30T07:58:03.636Z] [BOT] ⏭️  Skipping duplicate: JID_c700fd53 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "84024d3b89355c3a"
⏭️  Skipping duplicate: JID_fe906425 (posted within 7 days)
[2026-01-30T07:58:03.636Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c51812475489cfd2"
⏭️  Skipping duplicate: JID_000b2714 (posted within 7 days)
[2026-01-30T07:58:03.636Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1efbfb254bb42bde"
⏭️  Skipping duplicate: JID_e91d1e6d (posted within 7 days)
[2026-01-30T07:58:03.636Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "f3a3e59a06755563"
⏭️  Skipping duplicate: JID_ffe128ac (posted within 7 days)
[2026-01-30T07:58:03.636Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "cf4b05a9ccc483e3"
⏭️  Skipping duplicate: JID_8ec96c63 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "70bd8d4d81293ca1"
[2026-01-30T07:58:03.636Z] [BOT] ⏭️  Skipping duplicate: JID_59f7845f (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "d43ebdd001bc7535"
⏭️  Skipping duplicate: JID_30e00939 (posted within 7 days)
[2026-01-30T07:58:03.637Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860212b9a5c9f3c5"
⏭️  Skipping duplicate: JID_387bec1a (posted within 7 days)
[2026-01-30T07:58:03.750Z] [BOT] ✅ Loaded pending queue: 2910 total (2593 pending, 37 enriched, 280 posted)
[2026-01-30T07:58:03.941Z] [BOT] ✅ Saved pending queue: 2910 total (2593 pending, 27 enriched, 290 posted)
[2026-01-30T07:58:03.941Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T07:58:04.028Z] [BOT] 📂 Loaded 10371 existing routing entries
[2026-01-30T07:58:04.150Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T07:58:04.150Z] [BOT] Total entries: 10381
   Timestamp: 2026-01-30T07:58:04.107Z
[2026-01-30T07:58:04.151Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T07:58:04.151Z] [BOT] Total attempts: 26
   Successful: 10
   Failed: 0
   Skipped: 16
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 2
[2026-01-30T07:58:04.151Z] [BOT] Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-30T07:58:04.151Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 319 jobs in memory (cached)
[2026-01-30T07:58:04.159Z] [BOT] ✅ Loaded V2 database: 319 jobs
[2026-01-30T07:58:04.159Z] [BOT] 💾 DISK STATE: 319 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=319
[2026-01-30T07:58:04.160Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:58:04.160Z] [BOT] 💾 AFTER MERGE: 319 jobs (merged disk + memory)
[2026-01-30T07:58:04.160Z] [BOT] ✅ No jobs to archive (all 319 jobs within 7-day window)
[2026-01-30T07:58:04.181Z] [BOT] 💾 Saved posted_jobs.json: 319 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:58:04.182Z] [BOT] ✅ Database saved successfully
[2026-01-30T07:58:06.215Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2498) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*