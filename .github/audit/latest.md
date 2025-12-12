# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T07:39:04.031Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T07:38:31.592Z] ========================================
[2025-12-12T07:38:31.593Z] Discord Bot Execution Log
[2025-12-12T07:38:31.594Z] Environment: GitHub Actions
[2025-12-12T07:38:31.594Z] Node Version: v20.19.6
[2025-12-12T07:38:31.594Z] ========================================
[2025-12-12T07:38:31.594Z] Environment Variables Check:
[2025-12-12T07:38:31.594Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T07:38:31.594Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T07:38:31.594Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T07:38:31.594Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T07:38:31.594Z] 
Multi-Channel Configuration:
[2025-12-12T07:38:31.594Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T07:38:31.594Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T07:38:31.595Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T07:38:31.595Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T07:38:31.595Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T07:38:31.595Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T07:38:31.595Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T07:38:31.595Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T07:38:31.595Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T07:38:31.595Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T07:38:31.595Z] 
Data Files Check:
[2025-12-12T07:38:31.596Z] .github/data/new_jobs.json: ✅ Exists (10 items, 115615 bytes)
[2025-12-12T07:38:31.596Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 64985 bytes)
[2025-12-12T07:38:31.597Z] 
========================================
[2025-12-12T07:38:31.597Z] Starting Enhanced Discord Bot...
[2025-12-12T07:38:31.597Z] ========================================
[2025-12-12T07:38:32.173Z] [BOT] ✅ Loaded V2 database: 101 jobs
[2025-12-12T07:38:32.774Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T07:38:32.774Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T07:38:32.774Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T07:38:32.775Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T07:38:32.890Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 169
[2025-12-12T07:38:32.891Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T07:38:32.891Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
[2025-12-12T07:38:32.891Z] [BOT] ⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
[2025-12-12T07:38:32.891Z] [BOT] ⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
⏭️  Skipping duplicate: JID_3345e37e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer I, Frontend at Twitch
⏭️  Skipping duplicate: JID_abad3e00 (posted within 7 days)
⏭️ Skipping already posted: SAP Developer - Level 1 at Cintas
[2025-12-12T07:38:32.892Z] [BOT] 📬 Found 5 new jobs (5 already posted)...
[2025-12-12T07:38:32.893Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
📋 After data quality filter: 5 jobs (0 invalid)
[2025-12-12T07:38:32.893Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2025-12-12T07:38:32.893Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T07:38:32.897Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-12T07:38:32.898Z] [BOT] 📍 [ROUTING] "Business Intelligence Developer 1" @ ORG_d5eef8ad Nevada Corporation
[2025-12-12T07:38:32.898Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T07:38:32.902Z] [BOT ERROR] (node:2868) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T07:38:33.106Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation in #📈・JID_fb739488
  ✅ Industry: Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation
[2025-12-12T07:38:34.761Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation in #💻・remote-usa
[2025-12-12T07:38:34.762Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T07:38:36.263Z] [BOT] 💾 Marked as posted: Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation (instance #1)
[2025-12-12T07:38:36.263Z] [BOT] 💾 BEFORE ARCHIVING: 102 jobs in database
[2025-12-12T07:38:36.264Z] [BOT] ✅ No jobs to archive (all 102 jobs within 7-day window)
[2025-12-12T07:38:36.270Z] [BOT] 💾 Saved posted_jobs.json: 102 active jobs
[2025-12-12T07:38:36.270Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T07:38:39.270Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-12T07:38:39.270Z] [BOT] 📍 [ROUTING] "Modeling Simulation and Analysis Engineer 2" @ ORG_75f04b84
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T07:38:39.606Z] [BOT] ✅ Created forum post: 🏢 Modeling Simulation and Analysis Engineer 2 @ ORG_75f04b84 in #💻・tech-jobs
[2025-12-12T07:38:39.606Z] [BOT] ✅ Industry: Modeling Simulation and Analysis Engineer 2 @ ORG_75f04b84
[2025-12-12T07:38:41.341Z] [BOT] ✅ Created forum post: 🏢 Modeling Simulation and Analysis Engineer 2 @ ORG_75f04b84 in #💻・remote-usa
[2025-12-12T07:38:41.342Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T07:38:42.843Z] [BOT] 💾 Marked as posted: Modeling Simulation and Analysis Engineer 2 @ ORG_75f04b84 (instance #1)
[2025-12-12T07:38:42.843Z] [BOT] 💾 BEFORE ARCHIVING: 103 jobs in database
[2025-12-12T07:38:42.843Z] [BOT] ✅ No jobs to archive (all 103 jobs within 7-day window)
[2025-12-12T07:38:42.845Z] [BOT] 💾 Saved posted_jobs.json: 103 active jobs
[2025-12-12T07:38:42.845Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Member of Technical Staff" @ ORG_dc7620eb
   Category: TECH (default)
[2025-12-12T07:38:42.845Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T07:38:43.246Z] [BOT] ✅ Created forum post: 🔴 Member of Technical Staff @ ORG_dc7620eb in #💻・tech-jobs
[2025-12-12T07:38:43.246Z] [BOT] ✅ Industry: Member of Technical Staff @ ORG_dc7620eb
[2025-12-12T07:38:45.273Z] [BOT] ✅ Created forum post: 🔴 Member of Technical Staff @ ORG_dc7620eb in #🌧️・seattle
[2025-12-12T07:38:45.273Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-12T07:38:46.774Z] [BOT] 💾 Marked as posted: Member of Technical Staff @ ORG_dc7620eb (instance #1)
[2025-12-12T07:38:46.774Z] [BOT] 💾 BEFORE ARCHIVING: 104 jobs in database
✅ No jobs to archive (all 104 jobs within 7-day window)
[2025-12-12T07:38:46.777Z] [BOT] 💾 Saved posted_jobs.json: 104 active jobs
[2025-12-12T07:38:46.777Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Developer 1" @ ORG_dc7620eb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T07:38:46.912Z] [BOT] ✅ Created forum post: 🔴 Software Developer 1 @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Software Developer 1 @ ORG_dc7620eb
[2025-12-12T07:38:48.605Z] [BOT] ✅ Created forum post: 🔴 Software Developer 1 @ ORG_dc7620eb in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T07:38:50.107Z] [BOT] 💾 Marked as posted: Software Developer 1 @ ORG_dc7620eb (instance #1)
[2025-12-12T07:38:50.107Z] [BOT] 💾 BEFORE ARCHIVING: 105 jobs in database
✅ No jobs to archive (all 105 jobs within 7-day window)
[2025-12-12T07:38:50.109Z] [BOT] 💾 Saved posted_jobs.json: 105 active jobs
[2025-12-12T07:38:50.109Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T07:38:53.108Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-12T07:38:53.108Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-12T07:38:54.829Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #🩺・healthcare-jobs
  ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-12T07:38:56.602Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-12T07:38:56.603Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T07:38:58.104Z] [BOT] 💾 Marked as posted: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares (instance #1)
[2025-12-12T07:38:58.104Z] [BOT] 💾 BEFORE ARCHIVING: 106 jobs in database
✅ No jobs to archive (all 106 jobs within 7-day window)
[2025-12-12T07:38:58.106Z] [BOT] 💾 Saved posted_jobs.json: 106 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T07:39:01.107Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-12-12T07:39:01.107Z] [BOT] ⏭️  Skipping duplicate: JID_3b249bf5-snc_external_career_site-JID_2b23b585-i_r0028996-1 (posted within 7 days)
[2025-12-12T07:39:01.107Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_b63e2e3b-az_01794105 (posted within 7 days)
[2025-12-12T07:39:01.107Z] [BOT] ⏭️  Skipping duplicate: JID_d9f39df3-_r0067554 (posted within 7 days)
⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-317794 (posted within 7 days)
[2025-12-12T07:39:01.108Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-318639 (posted within 7 days)
[2025-12-12T07:39:01.112Z] [BOT] ✅ Loaded pending queue: 964 total (954 pending, 10 enriched, 0 posted)
[2025-12-12T07:39:01.127Z] [BOT] ✅ Saved pending queue: 964 total (909 pending, 5 enriched, 50 posted)
📋 Updated queue: marked 50 jobs as posted
[2025-12-12T07:39:01.127Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-12T07:39:01.165Z] [BOT] 📂 Loaded 96 existing routing entries
[2025-12-12T07:39:01.201Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2025-12-12T07:39:01.201Z] [BOT] Total entries: 101
   Timestamp: 2025-12-12T07:39:01.200Z
[2025-12-12T07:39:03.212Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2868) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*