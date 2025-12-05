# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T23:48:52.280Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T23:48:33.029Z] ========================================
[2025-12-05T23:48:33.030Z] Discord Bot Execution Log
[2025-12-05T23:48:33.031Z] Environment: GitHub Actions
[2025-12-05T23:48:33.031Z] Node Version: v20.19.6
[2025-12-05T23:48:33.031Z] ========================================
[2025-12-05T23:48:33.031Z] Environment Variables Check:
[2025-12-05T23:48:33.031Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T23:48:33.031Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T23:48:33.031Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T23:48:33.031Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T23:48:33.031Z] 
Multi-Channel Configuration:
[2025-12-05T23:48:33.031Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T23:48:33.031Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T23:48:33.031Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T23:48:33.031Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T23:48:33.032Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T23:48:33.032Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T23:48:33.032Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T23:48:33.032Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T23:48:33.032Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T23:48:33.032Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T23:48:33.032Z] 
Data Files Check:
[2025-12-05T23:48:33.033Z] .github/data/new_jobs.json: ✅ Exists (10 items, 147550 bytes)
[2025-12-05T23:48:33.033Z] .github/data/posted_jobs.json: ✅ Exists (46 items, 4393 bytes)
[2025-12-05T23:48:33.033Z] 
========================================
[2025-12-05T23:48:33.033Z] Starting Enhanced Discord Bot...
[2025-12-05T23:48:33.033Z] ========================================
[2025-12-05T23:48:34.412Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T23:48:34.413Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T23:48:34.413Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T23:48:34.413Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-05T23:48:34.561Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 303
[2025-12-05T23:48:34.562Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-05T23:48:34.562Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-05T23:48:34.563Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T23:48:34.563Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T23:48:34.563Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Level 1 or 2 at Northrop Grumman, Colorado Springs (already posting one with this combination)
📋 After title+company+location dedup: 2 unique jobs to post
   (8 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 8 deferred for next run
📤 Posting 2 jobs...
[2025-12-05T23:48:34.563Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T23:48:34.566Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-05T23:48:34.566Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
[2025-12-05T23:48:34.566Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T23:48:34.570Z] [BOT ERROR] (node:2780) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T23:48:36.275Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
  ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-05T23:48:38.142Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:48:39.642Z] [BOT] 💾 BEFORE SAVE: Database has 47 jobs
[2025-12-05T23:48:39.646Z] [BOT] 💾 Saved 47 posted jobs to database
[2025-12-05T23:48:39.646Z] [BOT] ✅ Verified: Database file contains 47 jobs
[2025-12-05T23:48:42.648Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-05T23:48:42.648Z] [BOT] 📍 [ROUTING] "Software Engineer - Level 1 or 2" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:48:42.877Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level 1 or 2 @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Software Engineer - Level 1 or 2 @ ORG_f3f2248d Grumman
[2025-12-05T23:48:44.701Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level 1 or 2 @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:48:46.202Z] [BOT] 💾 BEFORE SAVE: Database has 48 jobs
[2025-12-05T23:48:46.203Z] [BOT] 💾 Saved 48 posted jobs to database
✅ Verified: Database file contains 48 jobs
[2025-12-05T23:48:49.205Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-05T23:48:49.206Z] [BOT] ✅ Loaded pending queue: 10 total (0 pending, 10 enriched, 0 posted)
[2025-12-05T23:48:49.207Z] [BOT] ✅ Saved pending queue: 10 total (0 pending, 6 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-05T23:48:49.247Z] [BOT] 📂 Loaded 157 existing routing entries
[2025-12-05T23:48:49.285Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 159
   Timestamp: 2025-12-05T23:48:49.284Z
[2025-12-05T23:48:51.293Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2780) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*