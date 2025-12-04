# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T00:16:17.036Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 6
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-04T00:15:54.318Z] ========================================
[2025-12-04T00:15:54.320Z] Discord Bot Execution Log
[2025-12-04T00:15:54.320Z] Environment: GitHub Actions
[2025-12-04T00:15:54.320Z] Node Version: v20.19.6
[2025-12-04T00:15:54.320Z] ========================================
[2025-12-04T00:15:54.320Z] Environment Variables Check:
[2025-12-04T00:15:54.320Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T00:15:54.320Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T00:15:54.320Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T00:15:54.320Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T00:15:54.320Z] 
Multi-Channel Configuration:
[2025-12-04T00:15:54.321Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T00:15:54.321Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T00:15:54.321Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T00:15:54.321Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T00:15:54.321Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T00:15:54.321Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T00:15:54.321Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T00:15:54.321Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T00:15:54.321Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T00:15:54.321Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T00:15:54.321Z] 
Data Files Check:
[2025-12-04T00:15:54.322Z] .github/data/new_jobs.json: ✅ Exists (17 items, 87824 bytes)
[2025-12-04T00:15:54.324Z] .github/data/posted_jobs.json: ✅ Exists (3538 items, 237232 bytes)
[2025-12-04T00:15:54.324Z] 
========================================
[2025-12-04T00:15:54.324Z] Starting Enhanced Discord Bot...
[2025-12-04T00:15:54.324Z] ========================================
[2025-12-04T00:15:55.561Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T00:15:55.562Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T00:15:55.562Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T00:15:55.563Z] [BOT] 📦 Exporting 17 jobs to encrypted JSON...
[2025-12-04T00:15:55.648Z] [BOT] ✅ Export complete: Added 0, Skipped 17, Total 17
[2025-12-04T00:15:55.648Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T00:15:55.649Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T00:15:55.649Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T00:15:55.650Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T00:15:55.650Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T00:15:55.650Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
📬 Found 11 new jobs (6 already posted)...
[2025-12-04T00:15:55.651Z] [BOT] 📋 After blacklist filter: 11 jobs (0 blacklisted)
[2025-12-04T00:15:55.651Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-04T00:15:55.651Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Early Career Software Engineer at Citizen Health, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-04T00:15:55.651Z] [BOT] ⏭️ Skipping duplicate title+company+location: Early Career Software Engineer at Citizen Health, SF (already posting one with this combination)
📋 After title+company+location dedup: 4 unique jobs to post
   (7 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 7 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-04T00:15:55.654Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-04T00:15:55.655Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T00:15:55.658Z] [BOT ERROR] (node:2753) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-04T00:15:55.846Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
  ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2025-12-04T00:15:57.611Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #🌉・san-francisco
[2025-12-04T00:15:57.612Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-04T00:15:59.112Z] [BOT] 💾 BEFORE SAVE: Database has 3539 jobs
[2025-12-04T00:15:59.118Z] [BOT] 💾 Saved 3539 posted jobs to database
[2025-12-04T00:15:59.118Z] [BOT] ✅ Verified: Database file contains 3539 jobs
📍 [ROUTING] "Appian Application Developer" @ ORG_36b7cbc3
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T00:15:59.297Z] [BOT] ✅ Created forum post: 🏢 Appian Application Developer @ ORG_36b7cbc3 in #💻・tech-jobs
[2025-12-04T00:15:59.297Z] [BOT] ✅ Industry: Appian Application Developer @ ORG_36b7cbc3
[2025-12-04T00:16:01.027Z] [BOT] ✅ Created forum post: 🏢 Appian Application Developer @ ORG_36b7cbc3 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-04T00:16:02.528Z] [BOT] 💾 BEFORE SAVE: Database has 3540 jobs
[2025-12-04T00:16:02.532Z] [BOT] 💾 Saved 3540 posted jobs to database
✅ Verified: Database file contains 3540 jobs
[2025-12-04T00:16:02.532Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_e34691a8 Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T00:16:02.736Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_e34691a8 Health in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_e34691a8 Health
[2025-12-04T00:16:04.238Z] [BOT] 💾 BEFORE SAVE: Database has 3541 jobs
[2025-12-04T00:16:04.241Z] [BOT] 💾 Saved 3541 posted jobs to database
✅ Verified: Database file contains 3541 jobs
[2025-12-04T00:16:07.242Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-04T00:16:07.243Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-04T00:16:07.454Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
  ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-04T00:16:09.206Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-04T00:16:10.707Z] [BOT] 💾 BEFORE SAVE: Database has 3542 jobs
[2025-12-04T00:16:10.710Z] [BOT] 💾 Saved 3542 posted jobs to database
[2025-12-04T00:16:10.711Z] [BOT] ✅ Verified: Database file contains 3542 jobs
[2025-12-04T00:16:13.711Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2025-12-04T00:16:13.712Z] [BOT] ✅ Loaded pending queue: 17 total (0 pending, 17 enriched, 0 posted)
[2025-12-04T00:16:13.714Z] [BOT] ✅ Saved pending queue: 17 total (0 pending, 10 enriched, 7 posted)
📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-04T00:16:13.751Z] [BOT] 📂 Loaded 38 existing routing entries
[2025-12-04T00:16:13.789Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-04T00:16:13.789Z] [BOT] New entries: 4
   Total entries: 42
   Timestamp: 2025-12-04T00:16:13.788Z
[2025-12-04T00:16:15.801Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2753) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*