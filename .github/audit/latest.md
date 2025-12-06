# Discord Bot Execution Audit
**Timestamp:** 2025-12-06T00:16:19.026Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-06T00:15:25.109Z] ========================================
[2025-12-06T00:15:25.110Z] Discord Bot Execution Log
[2025-12-06T00:15:25.110Z] Environment: GitHub Actions
[2025-12-06T00:15:25.110Z] Node Version: v20.19.6
[2025-12-06T00:15:25.111Z] ========================================
[2025-12-06T00:15:25.111Z] Environment Variables Check:
[2025-12-06T00:15:25.111Z] DISCORD_TOKEN: ✅ Set
[2025-12-06T00:15:25.111Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-06T00:15:25.111Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-06T00:15:25.111Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-06T00:15:25.111Z] 
Multi-Channel Configuration:
[2025-12-06T00:15:25.111Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-06T00:15:25.111Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-06T00:15:25.111Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-06T00:15:25.111Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-06T00:15:25.111Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-06T00:15:25.111Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-06T00:15:25.111Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-06T00:15:25.111Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-06T00:15:25.111Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-06T00:15:25.111Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-06T00:15:25.112Z] 
Data Files Check:
[2025-12-06T00:15:25.114Z] .github/data/new_jobs.json: ✅ Exists (17 items, 254029 bytes)
[2025-12-06T00:15:25.114Z] .github/data/posted_jobs.json: ✅ Exists (48 items, 4652 bytes)
[2025-12-06T00:15:25.114Z] 
========================================
[2025-12-06T00:15:25.114Z] Starting Enhanced Discord Bot...
[2025-12-06T00:15:25.114Z] ========================================
[2025-12-06T00:15:26.306Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-06T00:15:26.306Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-06T00:15:26.306Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-06T00:15:26.307Z] [BOT] 📦 Exporting 17 jobs to encrypted JSON...
[2025-12-06T00:15:26.455Z] [BOT] ✅ Export complete: Added 0, Skipped 17, Total 311
[2025-12-06T00:15:26.457Z] [BOT] 📬 Found 17 new jobs (0 already posted)...
[2025-12-06T00:15:26.457Z] [BOT] 📋 After blacklist filter: 17 jobs (0 blacklisted)
[2025-12-06T00:15:26.457Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-06T00:15:26.457Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-06T00:15:26.457Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-06T00:15:26.458Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 9 unique jobs to post
   (8 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 8 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-06T00:15:26.462Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-06T00:15:26.463Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-06T00:15:26.467Z] [BOT ERROR] (node:3202) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-06T00:15:26.973Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-06T00:15:26.973Z] [BOT] ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-06T00:15:28.781Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-06T00:15:30.282Z] [BOT] 💾 BEFORE SAVE: Database has 49 jobs
[2025-12-06T00:15:30.286Z] [BOT] 💾 Saved 49 posted jobs to database
✅ Verified: Database file contains 49 jobs
[2025-12-06T00:15:33.288Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-06T00:15:33.288Z] [BOT] 📍 [ROUTING] "Process Analyst 1" @ ORG_f62822f0
   Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-06T00:15:33.599Z] [BOT] ✅ Created forum post: 🏢 Process Analyst 1 @ ORG_f62822f0 in #📣・marketing-jobs
  ✅ Industry: Process Analyst 1 @ ORG_f62822f0
[2025-12-06T00:15:35.318Z] [BOT] ✅ Created forum post: 🏢 Process Analyst 1 @ ORG_f62822f0 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-06T00:15:36.820Z] [BOT] 💾 BEFORE SAVE: Database has 50 jobs
[2025-12-06T00:15:36.820Z] [BOT] 💾 Saved 50 posted jobs to database
✅ Verified: Database file contains 50 jobs
[2025-12-06T00:15:39.822Z] [BOT] 📌 Posting 3 jobs to #JID_fb739488
📍 [ROUTING] "Software Engineer-Associate/Experienced" @ ORG_b344d80e Boeing Company
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1446...2761)
[2025-12-06T00:15:40.124Z] [BOT] ✅ Created forum post: 🏢 Software Engineer-Associate/Experienced @ ORG_b344d80e Boeing Company in #JID_fb739488
  ✅ Industry: Software Engineer-Associate/Experienced @ ORG_b344d80e Boeing Company
[2025-12-06T00:15:42.119Z] [BOT] ✅ Created forum post: 🏢 Software Engineer-Associate/Experienced @ ORG_b344d80e Boeing Company in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-06T00:15:43.620Z] [BOT] 💾 BEFORE SAVE: Database has 51 jobs
[2025-12-06T00:15:43.621Z] [BOT] 💾 Saved 51 posted jobs to database
✅ Verified: Database file contains 51 jobs
[2025-12-06T00:15:43.621Z] [BOT] 📍 [ROUTING] "Linux System Administrator" @ ORG_b344d80e Boeing Company
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1446...2761)
[2025-12-06T00:15:43.897Z] [BOT] ✅ Created forum post: 🏢 Linux System Administrator @ ORG_b344d80e Boeing Company in #JID_fb739488
  ✅ Industry: Linux System Administrator @ ORG_b344d80e Boeing Company
[2025-12-06T00:15:45.654Z] [BOT] ✅ Created forum post: 🏢 Linux System Administrator @ ORG_b344d80e Boeing Company in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-06T00:15:47.154Z] [BOT] 💾 BEFORE SAVE: Database has 52 jobs
[2025-12-06T00:15:47.155Z] [BOT] 💾 Saved 52 posted jobs to database
✅ Verified: Database file contains 52 jobs
[2025-12-06T00:15:47.155Z] [BOT] 📍 [ROUTING] "Business Intelligence & Analytics Senior Analyst" @ ORG_9d38443e of Chicago
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1446...2761)
[2025-12-06T00:15:47.324Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago in #JID_fb739488
  ✅ Industry: Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago
[2025-12-06T00:15:49.035Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-06T00:15:50.536Z] [BOT] 💾 BEFORE SAVE: Database has 53 jobs
[2025-12-06T00:15:50.537Z] [BOT] 💾 Saved 53 posted jobs to database
✅ Verified: Database file contains 53 jobs
[2025-12-06T00:15:53.537Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-06T00:15:53.537Z] [BOT] 📍 [ROUTING] "Atmospheric Scientist – Associate or Mid-Level" @ ORG_b344d80e Boeing Company
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-06T00:15:53.819Z] [BOT] ✅ Created forum post: 🏢 Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company in #🩺・healthcare-jobs
  ✅ Industry: Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company
[2025-12-06T00:15:55.483Z] [BOT] ✅ Created forum post: 🏢 Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-06T00:15:56.985Z] [BOT] 💾 BEFORE SAVE: Database has 54 jobs
[2025-12-06T00:15:56.986Z] [BOT] 💾 Saved 54 posted jobs to database
[2025-12-06T00:15:56.986Z] [BOT] ✅ Verified: Database file contains 54 jobs
[2025-12-06T00:15:59.986Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-06T00:15:59.986Z] [BOT] 📍 [ROUTING] "Provider Data Management Analyst 1" @ ORG_441f2234
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-06T00:16:00.222Z] [BOT] ✅ Created forum post: 🏢 Provider Data Management Analyst 1 @ ORG_441f2234 in #💻・tech-jobs
  ✅ Industry: Provider Data Management Analyst 1 @ ORG_441f2234
[2025-12-06T00:16:01.885Z] [BOT] ✅ Created forum post: 🏢 Provider Data Management Analyst 1 @ ORG_441f2234 in #💻・remote-usa
[2025-12-06T00:16:01.885Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-06T00:16:03.385Z] [BOT] 💾 BEFORE SAVE: Database has 55 jobs
[2025-12-06T00:16:03.387Z] [BOT] 💾 Saved 55 posted jobs to database
✅ Verified: Database file contains 55 jobs
[2025-12-06T00:16:03.387Z] [BOT] 📍 [ROUTING] "Software Engineer - Performance and Observability" @ ORG_cc7e1d22
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-06T00:16:03.582Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Performance and Observability @ ORG_cc7e1d22 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Performance and Observability @ ORG_cc7e1d22
[2025-12-06T00:16:05.278Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Performance and Observability @ ORG_cc7e1d22 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-06T00:16:06.779Z] [BOT] 💾 BEFORE SAVE: Database has 56 jobs
[2025-12-06T00:16:06.779Z] [BOT] 💾 Saved 56 posted jobs to database
✅ Verified: Database file contains 56 jobs
[2025-12-06T00:16:09.781Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
📍 [ROUTING] "Software Engineer 1" @ ORG_7b717950
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...3278)
[2025-12-06T00:16:09.976Z] [BOT] ✅ Posted message: Software Engineer 1 at Jerry in #ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_7b717950
[2025-12-06T00:16:11.682Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-06T00:16:13.182Z] [BOT] 💾 BEFORE SAVE: Database has 57 jobs
[2025-12-06T00:16:13.183Z] [BOT] 💾 Saved 57 posted jobs to database
✅ Verified: Database file contains 57 jobs
[2025-12-06T00:16:16.185Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-06T00:16:16.187Z] [BOT] ✅ Loaded pending queue: 17 total (0 pending, 17 enriched, 0 posted)
[2025-12-06T00:16:16.190Z] [BOT] ✅ Saved pending queue: 17 total (0 pending, 6 enriched, 11 posted)
[2025-12-06T00:16:16.190Z] [BOT] 📋 Updated queue: marked 11 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-06T00:16:16.227Z] [BOT] 📂 Loaded 159 existing routing entries
[2025-12-06T00:16:16.264Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 168
   Timestamp: 2025-12-06T00:16:16.264Z
[2025-12-06T00:16:18.273Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3202) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*