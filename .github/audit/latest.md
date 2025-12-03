# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T07:07:13.241Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 47
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T07:06:56.304Z] ========================================
[2025-12-03T07:06:56.306Z] Discord Bot Execution Log
[2025-12-03T07:06:56.306Z] Environment: GitHub Actions
[2025-12-03T07:06:56.306Z] Node Version: v20.19.6
[2025-12-03T07:06:56.306Z] ========================================
[2025-12-03T07:06:56.306Z] Environment Variables Check:
[2025-12-03T07:06:56.306Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T07:06:56.306Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T07:06:56.306Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T07:06:56.306Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T07:06:56.306Z] 
Multi-Channel Configuration:
[2025-12-03T07:06:56.306Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T07:06:56.307Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T07:06:56.307Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T07:06:56.307Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T07:06:56.307Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T07:06:56.307Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T07:06:56.307Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T07:06:56.307Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T07:06:56.307Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T07:06:56.307Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T07:06:56.307Z] 
Data Files Check:
[2025-12-03T07:06:56.310Z] .github/data/new_jobs.json: ✅ Exists (50 items, 289222 bytes)
[2025-12-03T07:06:56.311Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333606 bytes)
[2025-12-03T07:06:56.311Z] 
========================================
[2025-12-03T07:06:56.311Z] Starting Enhanced Discord Bot...
[2025-12-03T07:06:56.312Z] ========================================
[2025-12-03T07:06:57.538Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T07:06:57.539Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T07:06:57.539Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T07:06:57.542Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-03T07:06:57.633Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 50
[2025-12-03T07:06:57.633Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T07:06:57.633Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T07:06:57.634Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T07:06:57.634Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T07:06:57.634Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T07:06:57.634Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T07:06:57.634Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T07:06:57.635Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T07:06:57.635Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T07:06:57.635Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T07:06:57.635Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T07:06:57.635Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T07:06:57.635Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T07:06:57.635Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T07:06:57.635Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T07:06:57.635Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T07:06:57.635Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T07:06:57.636Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T07:06:57.636Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T07:06:57.636Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T07:06:57.636Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T07:06:57.636Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
📬 Found 3 new jobs (47 already posted)...
[2025-12-03T07:06:57.636Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2025-12-03T07:06:57.636Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-03T07:06:57.637Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
   (1 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 1 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T07:06:57.640Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-03T07:06:57.640Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
[2025-12-03T07:06:57.640Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T07:06:57.645Z] [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T07:06:57.867Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-03T07:06:57.867Z] [BOT] ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-03T07:06:59.634Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T07:07:01.134Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T07:07:01.134Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T07:07:01.141Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T07:07:01.141Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T07:07:04.142Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-03T07:07:04.142Z] [BOT] 📍 [ROUTING] "IT Data Warehouse Specialist" @ ORG_969850e5 Therapies
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T07:07:04.311Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・tech-jobs
[2025-12-03T07:07:04.311Z] [BOT] ✅ Industry: IT Data Warehouse Specialist @ ORG_969850e5 Therapies
[2025-12-03T07:07:05.978Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・remote-usa
[2025-12-03T07:07:05.979Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T07:07:07.480Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T07:07:07.480Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T07:07:07.485Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T07:07:07.485Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T07:07:10.487Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-03T07:07:10.489Z] [BOT] ✅ Loaded pending queue: 52 total (2 pending, 50 enriched, 0 posted)
[2025-12-03T07:07:10.492Z] [BOT] ✅ Saved pending queue: 52 total (2 pending, 48 enriched, 2 posted)
[2025-12-03T07:07:10.492Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T07:07:10.532Z] [BOT] 📂 Loaded 700 existing routing entries
[2025-12-03T07:07:10.573Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 702
   Timestamp: 2025-12-03T07:07:10.571Z
[2025-12-03T07:07:12.586Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*