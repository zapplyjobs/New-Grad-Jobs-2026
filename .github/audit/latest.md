# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T01:15:05.220Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T01:14:48.248Z] ========================================
[2026-01-09T01:14:48.250Z] Discord Bot Execution Log
[2026-01-09T01:14:48.250Z] Environment: GitHub Actions
[2026-01-09T01:14:48.250Z] Node Version: v20.19.6
[2026-01-09T01:14:48.250Z] ========================================
[2026-01-09T01:14:48.250Z] Environment Variables Check:
[2026-01-09T01:14:48.250Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T01:14:48.250Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T01:14:48.251Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T01:14:48.251Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T01:14:48.251Z] 
Multi-Channel Configuration:
[2026-01-09T01:14:48.251Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T01:14:48.251Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T01:14:48.251Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T01:14:48.251Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T01:14:48.251Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T01:14:48.251Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T01:14:48.251Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T01:14:48.251Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T01:14:48.251Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T01:14:48.251Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T01:14:48.251Z] 
Data Files Check:
[2026-01-09T01:14:48.252Z] .github/data/new_jobs.json: ✅ Exists (10 items, 73574 bytes)
[2026-01-09T01:14:48.258Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 765261 bytes)
[2026-01-09T01:14:48.258Z] 
========================================
[2026-01-09T01:14:48.258Z] Starting Enhanced Discord Bot...
[2026-01-09T01:14:48.258Z] ========================================
[2026-01-09T01:14:48.781Z] [BOT] ✅ Loaded V2 database: 1489 jobs
[2026-01-09T01:14:49.338Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T01:14:49.338Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T01:14:49.338Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T01:14:49.348Z] [BOT] ✅ Loaded pending queue: 201 total (181 pending, 20 enriched, 0 posted)
[2026-01-09T01:14:49.348Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Junior Strategic Analyst - Super Day at Perpay
[2026-01-09T01:14:49.350Z] [BOT] ⏭️  Skipping duplicate: JID_22bbcb93 (posted within 7 days)
[2026-01-09T01:14:49.350Z] [BOT] ⏭️ Skipping already posted: Manager, Account Executive - Enterprise Sales  at anthropic
[2026-01-09T01:14:49.350Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23270 (posted within 7 days)
[2026-01-09T01:14:49.350Z] [BOT] ⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq212564-1 (posted within 7 days)
[2026-01-09T01:14:49.350Z] [BOT] ⏭️ Skipping already posted: ROLE_d1a2e1c0 at General Dynamics Information Technology
[2026-01-09T01:14:49.351Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ac961f8e-_jr2026490878-1 (posted within 7 days)
⏭️ Skipping already posted: Atmospheric Scientist – Associate or Mid-Level at The Boeing Company
⏭️  Skipping duplicate: JID_4bd2e4a1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9921d7a0 at Wing
⏭️  Skipping duplicate: JID_db56fd84-_r-48461 (posted within 7 days)
⏭️ Skipping already posted: Data Engineer 1 - Aws - Python at The Travelers Companies
[2026-01-09T01:14:49.351Z] [BOT] ⏭️  Skipping duplicate: JID_d37cac04-_r-48615 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Aws - Node at The Travelers Companies
[2026-01-09T01:14:49.351Z] [BOT] ⏭️  Skipping duplicate: JID_016b7cfb-_r-48474 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - .Net - Node.js','React at The Travelers Companies
[2026-01-09T01:14:49.351Z] [BOT] ⏭️  Skipping duplicate: JID_b3c53ec8 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Direct Issuance at StubHub
[2026-01-09T01:14:49.351Z] [BOT] ⏭️  Skipping duplicate: JID_7cf3eb12 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New College Graduate at Vectra
[2026-01-09T01:14:49.351Z] [BOT] ⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-78241 (posted within 7 days)
⏭️ Skipping already posted: Analyst 1 – Labor Analytics - Corporate - Las Vegas at Caesars Entertainment
[2026-01-09T01:14:49.352Z] [BOT] ⏭️  Skipping duplicate: JID_72cf4298-2026_r0055622-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
[2026-01-09T01:14:49.352Z] [BOT] ⏭️  Skipping duplicate: JID_ff0e5907 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at MCA Connect
⏭️  Skipping duplicate: JID_bf5593fa (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Jerry
[2026-01-09T01:14:49.352Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_e58e6cb8-onsite_01815653 (posted within 7 days)
⏭️ Skipping already posted: 2026 Fulltime - Data Management Analyst I at RTX
[2026-01-09T01:14:49.352Z] [BOT] ⏭️  Skipping duplicate: JID_18900469 (posted within 7 days)
⏭️ Skipping already posted: Nuclear Analysis Technician - Engineering Techs - Physics Techs at Westinghouse Electric Company
[2026-01-09T01:14:49.352Z] [BOT] ⏭️  Skipping duplicate: JID_bdba1f64 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, Salesforce at brex
[2026-01-09T01:14:49.352Z] [BOT] ⏭️  Skipping duplicate: JID_3653a38b (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, Salesforce at brex
📬 Found 2 new jobs (18 already posted)...
[2026-01-09T01:14:49.352Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-09T01:14:49.353Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-09T01:14:49.353Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-09T01:14:49.353Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T01:14:49.356Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-09T01:14:49.357Z] [BOT] 📍 [ROUTING] "Junior Strategic Analyst - Super Day" @ ORG_f5c0adc3
[2026-01-09T01:14:49.357Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-09T01:14:49.374Z] [BOT ERROR] (node:3269) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T01:14:49.647Z] [BOT] ✅ Created forum post: 🏢 Junior Strategic Analyst - Super Day @ ORG_f5c0adc3 in #📈・JID_fb739488
[2026-01-09T01:14:49.647Z] [BOT] ✅ Industry: Junior Strategic Analyst - Super Day @ ORG_f5c0adc3
[2026-01-09T01:14:51.394Z] [BOT] ✅ Created forum post: 🏢 Junior Strategic Analyst - Super Day @ ORG_f5c0adc3 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-09T01:14:52.895Z] [BOT] 💾 Marked as posted: Junior Strategic Analyst - Super Day @ ORG_f5c0adc3 (instance #1)
[2026-01-09T01:14:52.896Z] [BOT] 💾 BEFORE ARCHIVING: 1490 jobs in database
[2026-01-09T01:14:52.897Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T01:14:52.902Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-09T01:14:52.902Z] [BOT] ✅ Archiving complete: 1 archived, 1489 active
[2026-01-09T01:14:52.913Z] [BOT] 💾 Saved posted_jobs.json: 1489 active jobs
[2026-01-09T01:14:52.913Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T01:14:55.914Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-09T01:14:55.915Z] [BOT] 📍 [ROUTING] "Bilingual Material Handling Automation Specialist - Korean & English" @ ORG_b870b780 Electronics
[2026-01-09T01:14:55.915Z] [BOT] Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-09T01:14:56.164Z] [BOT] ✅ Created forum post: 🏢 Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics in #📣・marketing-jobs
[2026-01-09T01:14:56.164Z] [BOT] ✅ Industry: Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics
[2026-01-09T01:14:57.881Z] [BOT] ✅ Created forum post: 🏢 Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics in #💻・remote-usa
[2026-01-09T01:14:57.881Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-09T01:14:59.382Z] [BOT] 💾 Marked as posted: Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics (instance #1)
[2026-01-09T01:14:59.382Z] [BOT] 💾 BEFORE ARCHIVING: 1490 jobs in database
[2026-01-09T01:14:59.383Z] [BOT] ✅ No jobs to archive (all 1490 jobs within 7-day window)
[2026-01-09T01:14:59.394Z] [BOT] 💾 Saved posted_jobs.json: 1490 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T01:15:02.395Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-09T01:15:02.396Z] [BOT] ⏭️  Skipping duplicate: JID_ecd8556e (posted within 7 days)
[2026-01-09T01:15:02.396Z] [BOT] ⏭️  Skipping duplicate: JID_5595c1be (posted within 7 days)
[2026-01-09T01:15:02.406Z] [BOT] ✅ Loaded pending queue: 201 total (181 pending, 20 enriched, 0 posted)
[2026-01-09T01:15:02.424Z] [BOT] ✅ Saved pending queue: 201 total (181 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-09T01:15:02.481Z] [BOT] 📂 Loaded 2468 existing routing entries
[2026-01-09T01:15:02.537Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2470
[2026-01-09T01:15:02.538Z] [BOT] Timestamp: 2026-01-09T01:15:02.526Z
[2026-01-09T01:15:02.538Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T01:15:02.539Z] [BOT] Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・remote-usa: 2 posts
     2. #📈・JID_fb739488: 1 posts
     3. #📣・marketing-jobs: 1 posts
[2026-01-09T01:15:02.539Z] [BOT] [STATS] Channel stats saved
[2026-01-09T01:15:04.554Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3269) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*