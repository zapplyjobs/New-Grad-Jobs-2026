# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T12:49:44.478Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 17
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T12:49:23.053Z] ========================================
[2026-01-12T12:49:23.055Z] Discord Bot Execution Log
[2026-01-12T12:49:23.055Z] Environment: GitHub Actions
[2026-01-12T12:49:23.055Z] Node Version: v20.19.6
[2026-01-12T12:49:23.055Z] ========================================
[2026-01-12T12:49:23.056Z] Environment Variables Check:
[2026-01-12T12:49:23.056Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T12:49:23.056Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T12:49:23.056Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T12:49:23.056Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T12:49:23.056Z] 
Multi-Channel Configuration:
[2026-01-12T12:49:23.056Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T12:49:23.056Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T12:49:23.056Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T12:49:23.056Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T12:49:23.057Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T12:49:23.057Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T12:49:23.057Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T12:49:23.057Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T12:49:23.057Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T12:49:23.057Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T12:49:23.057Z] 
Data Files Check:
[2026-01-12T12:49:23.058Z] .github/data/new_jobs.json: ✅ Exists (10 items, 56888 bytes)
[2026-01-12T12:49:23.059Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 222683 bytes)
[2026-01-12T12:49:23.060Z] 
========================================
[2026-01-12T12:49:23.060Z] Starting Enhanced Discord Bot...
[2026-01-12T12:49:23.060Z] ========================================
[2026-01-12T12:49:23.573Z] [BOT] ✅ Loaded V2 database: 391 jobs
[2026-01-12T12:49:24.109Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T12:49:24.109Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T12:49:24.109Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T12:49:24.121Z] [BOT] ✅ Loaded pending queue: 261 total (241 pending, 20 enriched, 0 posted)
[2026-01-12T12:49:24.122Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: AI Lab Junior Machine Learning Engineer at Hewlett Packard (HP)
[2026-01-12T12:49:24.123Z] [BOT] ⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
[2026-01-12T12:49:24.123Z] [BOT] ⏭️ Skipping already posted: Application Support - Java skills - Associate at HEXAWARE
[2026-01-12T12:49:24.123Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_385c8ffa-6078908_13942096-1 (posted within 7 days)
[2026-01-12T12:49:24.123Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
⏭️ Skipping already posted: Systems/Software Engineer 1 at Hewlett Packard Enterprise
[2026-01-12T12:49:24.123Z] [BOT] ⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
[2026-01-12T12:49:24.124Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer / Software Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_bc80fdc0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
⏭️  Skipping duplicate: JID_160d6d87 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
[2026-01-12T12:49:24.124Z] [BOT] ⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
⏭️ Skipping already posted: Software Development Engineer 1 - Early Career at Blue Origin
[2026-01-12T12:49:24.124Z] [BOT] ⏭️  Skipping duplicate: JID_1fec24fe-1_r016047 (posted within 7 days)
⏭️ Skipping already posted: Financial Crimes Data Analyst 1 at Hancock Whitney
[2026-01-12T12:49:24.124Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
[2026-01-12T12:49:24.124Z] [BOT] ⏭️  Skipping duplicate: JID_b87a4832 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Graduate at Distyl AI
⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
⏭️ Skipping already posted: Applied Safety Research Engineer, Safeguards at anthropic
[2026-01-12T12:49:24.124Z] [BOT] ⏭️  Skipping duplicate: JID_33d25482 (posted within 7 days)
⏭️ Skipping already posted: Configuration Analyst 1 at Huntington Ingalls Industries
[2026-01-12T12:49:24.124Z] [BOT] ⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Microsoft
[2026-01-12T12:49:24.124Z] [BOT] ⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - AI Video Agent at OpusClip
[2026-01-12T12:49:24.124Z] [BOT] ⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
📬 Found 3 new jobs (17 already posted)...
[2026-01-12T12:49:24.125Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-12T12:49:24.125Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-12T12:49:24.126Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T12:49:24.127Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-12T12:49:24.128Z] [BOT] 📍 [ROUTING] "AI Lab Junior Machine Learning Engineer" @ ORG_a5257743 Packard (HP)
[2026-01-12T12:49:24.128Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-12T12:49:24.133Z] [BOT ERROR] (node:3372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T12:49:24.450Z] [BOT] ✅ Created forum post: 🏢 AI Lab Junior Machine Learning Engineer @ ORG_a5257743 Packard (HP) in #🤖・ai-jobs
  ✅ Industry: AI Lab Junior Machine Learning Engineer @ ORG_a5257743 Packard (HP)
[2026-01-12T12:49:26.840Z] [BOT] ✅ Created forum post: 🏢 AI Lab Junior Machine Learning Engineer @ ORG_a5257743 Packard (HP) in #🌉・san-francisco
[2026-01-12T12:49:26.840Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T12:49:28.341Z] [BOT] 💾 Marked as posted: AI Lab Junior Machine Learning Engineer @ ORG_a5257743 Packard (HP) (instance #1)
[2026-01-12T12:49:28.341Z] [BOT] 💾 BEFORE ARCHIVING: 392 jobs in database
[2026-01-12T12:49:28.342Z] [BOT] ✅ No jobs to archive (all 392 jobs within 7-day window)
[2026-01-12T12:49:28.349Z] [BOT] 💾 Saved posted_jobs.json: 392 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T12:49:31.350Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-12T12:49:31.351Z] [BOT] 📍 [ROUTING] "Web/Digital Specialist 1" @ ORG_a12a3115
   Category: TECH (matched: "web/mobile dev")
[2026-01-12T12:49:31.351Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T12:49:31.579Z] [BOT] ✅ Created forum post: 🏢 Web/Digital Specialist 1 @ ORG_a12a3115 in #💻・tech-jobs
[2026-01-12T12:49:31.580Z] [BOT] ✅ Industry: Web/Digital Specialist 1 @ ORG_a12a3115
[2026-01-12T12:49:33.616Z] [BOT] ✅ Created forum post: 🏢 Web/Digital Specialist 1 @ ORG_a12a3115 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T12:49:35.117Z] [BOT] 💾 Marked as posted: Web/Digital Specialist 1 @ ORG_a12a3115 (instance #1)
[2026-01-12T12:49:35.118Z] [BOT] 💾 BEFORE ARCHIVING: 393 jobs in database
[2026-01-12T12:49:35.118Z] [BOT] ✅ No jobs to archive (all 393 jobs within 7-day window)
[2026-01-12T12:49:35.122Z] [BOT] 💾 Saved posted_jobs.json: 393 active jobs
[2026-01-12T12:49:35.122Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T12:49:35.124Z] [BOT] 📍 [ROUTING] "Workday Extend Developer 1" @ ORG_722b29f2 State University
[2026-01-12T12:49:35.124Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T12:49:35.298Z] [BOT] ✅ Created forum post: 🏢 Workday Extend Developer 1 @ ORG_722b29f2 State University in #💻・tech-jobs
  ✅ Industry: Workday Extend Developer 1 @ ORG_722b29f2 State University
[2026-01-12T12:49:37.053Z] [BOT] ✅ Created forum post: 🏢 Workday Extend Developer 1 @ ORG_722b29f2 State University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-12T12:49:38.554Z] [BOT] 💾 Marked as posted: Workday Extend Developer 1 @ ORG_722b29f2 State University (instance #1)
[2026-01-12T12:49:38.555Z] [BOT] 💾 BEFORE ARCHIVING: 394 jobs in database
[2026-01-12T12:49:38.555Z] [BOT] ✅ No jobs to archive (all 394 jobs within 7-day window)
[2026-01-12T12:49:38.559Z] [BOT] 💾 Saved posted_jobs.json: 394 active jobs
[2026-01-12T12:49:38.559Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T12:49:41.560Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-12T12:49:41.560Z] [BOT] ⏭️  Skipping duplicate: JID_b5dc7f29-engineer_3150991-2 (posted within 7 days)
[2026-01-12T12:49:41.560Z] [BOT] ⏭️  Skipping duplicate: JID_b1499239-i_jr107155 (posted within 7 days)
[2026-01-12T12:49:41.560Z] [BOT] ⏭️  Skipping duplicate: JID_08b95b67-i_r18423 (posted within 7 days)
[2026-01-12T12:49:41.574Z] [BOT] ✅ Loaded pending queue: 261 total (241 pending, 20 enriched, 0 posted)
[2026-01-12T12:49:41.597Z] [BOT] ✅ Saved pending queue: 261 total (241 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T12:49:41.648Z] [BOT] 📂 Loaded 2558 existing routing entries
[2026-01-12T12:49:41.708Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-12T12:49:41.709Z] [BOT] Total entries: 2561
   Timestamp: 2026-01-12T12:49:41.697Z
[2026-01-12T12:49:41.709Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T12:49:41.709Z] [BOT] Total attempts: 23
   Successful: 6
   Failed: 0
   Skipped: 17
[2026-01-12T12:49:41.709Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T12:49:41.710Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 4
   Top channels:
     1. #🌉・san-francisco: 2 posts
     2. #💻・tech-jobs: 2 posts
     3. #🤖・ai-jobs: 1 posts
     4. #💻・remote-usa: 1 posts
[2026-01-12T12:49:41.710Z] [BOT] [STATS] Channel stats saved
[2026-01-12T12:49:43.722Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*