# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T14:10:40.159Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T14:10:29.160Z] ========================================
[2026-01-12T14:10:29.162Z] Discord Bot Execution Log
[2026-01-12T14:10:29.162Z] Environment: GitHub Actions
[2026-01-12T14:10:29.162Z] Node Version: v20.19.6
[2026-01-12T14:10:29.162Z] ========================================
[2026-01-12T14:10:29.162Z] Environment Variables Check:
[2026-01-12T14:10:29.162Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T14:10:29.162Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T14:10:29.162Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T14:10:29.162Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T14:10:29.162Z] 
Multi-Channel Configuration:
[2026-01-12T14:10:29.162Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T14:10:29.163Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T14:10:29.163Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T14:10:29.163Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T14:10:29.163Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T14:10:29.163Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T14:10:29.163Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T14:10:29.163Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T14:10:29.163Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T14:10:29.163Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T14:10:29.163Z] 
Data Files Check:
[2026-01-12T14:10:29.164Z] .github/data/new_jobs.json: ✅ Exists (10 items, 53108 bytes)
[2026-01-12T14:10:29.165Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 224703 bytes)
[2026-01-12T14:10:29.165Z] 
========================================
[2026-01-12T14:10:29.165Z] Starting Enhanced Discord Bot...
[2026-01-12T14:10:29.165Z] ========================================
[2026-01-12T14:10:29.697Z] [BOT] ✅ Loaded V2 database: 394 jobs
[2026-01-12T14:10:30.540Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-12T14:10:30.541Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T14:10:30.541Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T14:10:30.554Z] [BOT] ✅ Loaded pending queue: 262 total (242 pending, 20 enriched, 0 posted)
[2026-01-12T14:10:30.554Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Scientist - Personalization at spotify
[2026-01-12T14:10:30.555Z] [BOT] ⏭️  Skipping duplicate: JID_b5dc7f29-engineer_3150991-2 (posted within 7 days)
[2026-01-12T14:10:30.555Z] [BOT] ⏭️ Skipping already posted: ROLE_a6074d1b at Hewlett Packard (HP)
[2026-01-12T14:10:30.556Z] [BOT] ⏭️  Skipping duplicate: JID_b1499239-i_jr107155 (posted within 7 days)
⏭️ Skipping already posted: Web/Digital Specialist 1 at Sabre
[2026-01-12T14:10:30.556Z] [BOT] ⏭️  Skipping duplicate: JID_08b95b67-i_r18423 (posted within 7 days)
⏭️ Skipping already posted: Workday Extend Developer 1 at Iowa State University
[2026-01-12T14:10:30.556Z] [BOT] ⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
⏭️ Skipping already posted: Application Support - Java skills - Associate at HEXAWARE
[2026-01-12T14:10:30.556Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_385c8ffa-6078908_13942096-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
⏭️ Skipping already posted: Systems/Software Engineer 1 at Hewlett Packard Enterprise
⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
[2026-01-12T14:10:30.556Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer / Software Engineer at Northrop Grumman
[2026-01-12T14:10:30.556Z] [BOT] ⏭️  Skipping duplicate: JID_bc80fdc0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
[2026-01-12T14:10:30.557Z] [BOT] ⏭️  Skipping duplicate: JID_160d6d87 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
⏭️ Skipping already posted: Software Development Engineer 1 - Early Career at Blue Origin
[2026-01-12T14:10:30.557Z] [BOT] ⏭️  Skipping duplicate: JID_1fec24fe-1_r016047 (posted within 7 days)
⏭️ Skipping already posted: Financial Crimes Data Analyst 1 at Hancock Whitney
[2026-01-12T14:10:30.557Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
⏭️  Skipping duplicate: JID_b87a4832 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Graduate at Distyl AI
⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
⏭️ Skipping already posted: Applied Safety Research Engineer, Safeguards at anthropic
⏭️  Skipping duplicate: JID_33d25482 (posted within 7 days)
⏭️ Skipping already posted: Configuration Analyst 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Microsoft
⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - AI Video Agent at OpusClip
📬 Found 1 new jobs (19 already posted)...
[2026-01-12T14:10:30.557Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-12T14:10:30.557Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-12T14:10:30.558Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-12T14:10:30.558Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T14:10:30.559Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-12T14:10:30.561Z] [BOT] 📍 [ROUTING] "Research Scientist - Personalization" @ spotify
[2026-01-12T14:10:30.561Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-12T14:10:30.567Z] [BOT ERROR] (node:3790) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T14:10:30.843Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Personalization @ spotify in #🤖・ai-jobs
  ✅ Industry: Research Scientist - Personalization @ spotify
[2026-01-12T14:10:32.622Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Personalization @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T14:10:34.122Z] [BOT] 💾 Marked as posted: Research Scientist - Personalization @ spotify (instance #1)
[2026-01-12T14:10:34.123Z] [BOT] 💾 BEFORE ARCHIVING: 395 jobs in database
[2026-01-12T14:10:34.124Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T14:10:34.131Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
✅ Archiving complete: 2 archived, 393 active
[2026-01-12T14:10:34.135Z] [BOT] 💾 Saved posted_jobs.json: 393 active jobs
[2026-01-12T14:10:34.135Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T14:10:37.136Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-12T14:10:37.136Z] [BOT] ⏭️  Skipping duplicate: JID_5814f844 (posted within 7 days)
[2026-01-12T14:10:37.147Z] [BOT] ✅ Loaded pending queue: 262 total (242 pending, 20 enriched, 0 posted)
[2026-01-12T14:10:37.166Z] [BOT] ✅ Saved pending queue: 262 total (242 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-12T14:10:37.166Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T14:10:37.216Z] [BOT] 📂 Loaded 2561 existing routing entries
[2026-01-12T14:10:37.274Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2562
[2026-01-12T14:10:37.275Z] [BOT] Timestamp: 2026-01-12T14:10:37.260Z
[2026-01-12T14:10:37.275Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T14:10:37.276Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-12T14:10:37.276Z] [BOT] [STATS] Channel stats saved
[2026-01-12T14:10:39.292Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3790) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*