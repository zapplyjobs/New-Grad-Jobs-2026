# Discord Bot Execution Audit
**Timestamp:** 2025-12-15T20:23:33.166Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-15T20:23:10.697Z] ========================================
[2025-12-15T20:23:10.699Z] Discord Bot Execution Log
[2025-12-15T20:23:10.699Z] Environment: GitHub Actions
[2025-12-15T20:23:10.699Z] Node Version: v20.19.6
[2025-12-15T20:23:10.699Z] ========================================
[2025-12-15T20:23:10.699Z] Environment Variables Check:
[2025-12-15T20:23:10.699Z] DISCORD_TOKEN: ✅ Set
[2025-12-15T20:23:10.699Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-15T20:23:10.700Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-15T20:23:10.700Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-15T20:23:10.700Z] 
Multi-Channel Configuration:
[2025-12-15T20:23:10.700Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-15T20:23:10.700Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-15T20:23:10.700Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-15T20:23:10.700Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-15T20:23:10.700Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-15T20:23:10.700Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-15T20:23:10.700Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-15T20:23:10.700Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-15T20:23:10.700Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-15T20:23:10.701Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-15T20:23:10.701Z] 
Data Files Check:
[2025-12-15T20:23:10.701Z] .github/data/new_jobs.json: ✅ Exists (4 items, 54026 bytes)
[2025-12-15T20:23:10.702Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 92188 bytes)
[2025-12-15T20:23:10.702Z] 
========================================
[2025-12-15T20:23:10.702Z] Starting Enhanced Discord Bot...
[2025-12-15T20:23:10.702Z] ========================================
[2025-12-15T20:23:11.260Z] [BOT] ✅ Loaded V2 database: 145 jobs
[2025-12-15T20:23:11.781Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-15T20:23:11.782Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-15T20:23:11.782Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-15T20:23:11.782Z] [BOT] 📦 Exporting 4 jobs to encrypted JSON...
[2025-12-15T20:23:11.890Z] [BOT] ✅ Export complete: Added 0, Skipped 4, Total 146
[2025-12-15T20:23:11.891Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2025-12-15T20:23:11.891Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
[2025-12-15T20:23:11.892Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2025-12-15T20:23:11.892Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2025-12-15T20:23:11.892Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-15T20:23:11.893Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-15T20:23:11.894Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c910d474 Dynamics Information Technology
[2025-12-15T20:23:11.894Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T20:23:11.898Z] [BOT ERROR] (node:2308) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-15T20:23:12.144Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_c910d474 Dynamics Information Technology
[2025-12-15T20:23:13.798Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-15T20:23:15.300Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_c910d474 Dynamics Information Technology (instance #1)
[2025-12-15T20:23:15.300Z] [BOT] 💾 BEFORE ARCHIVING: 146 jobs in database
[2025-12-15T20:23:15.300Z] [BOT] ✅ No jobs to archive (all 146 jobs within 7-day window)
[2025-12-15T20:23:15.308Z] [BOT] 💾 Saved posted_jobs.json: 146 active jobs
[2025-12-15T20:23:15.308Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Quality Assurance Engineer I" @ ORG_1b91b475 Automation
[2025-12-15T20:23:15.308Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T20:23:15.554Z] [BOT] ✅ Created forum post: 🏢 Software Quality Assurance Engineer I @ ORG_1b91b475 Automation in #💻・tech-jobs
[2025-12-15T20:23:15.554Z] [BOT] ✅ Industry: Software Quality Assurance Engineer I @ ORG_1b91b475 Automation
[2025-12-15T20:23:17.250Z] [BOT] ✅ Created forum post: 🏢 Software Quality Assurance Engineer I @ ORG_1b91b475 Automation in #🦢・los-angeles
[2025-12-15T20:23:17.251Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-15T20:23:18.751Z] [BOT] 💾 Marked as posted: Software Quality Assurance Engineer I @ ORG_1b91b475 Automation (instance #1)
[2025-12-15T20:23:18.751Z] [BOT] 💾 BEFORE ARCHIVING: 147 jobs in database
✅ No jobs to archive (all 147 jobs within 7-day window)
[2025-12-15T20:23:18.753Z] [BOT] 💾 Saved posted_jobs.json: 147 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T20:23:21.754Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-15T20:23:21.754Z] [BOT] 📍 [ROUTING] "Data Engineer 1" @ ORG_441f2234
[2025-12-15T20:23:21.754Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-15T20:23:22.117Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 @ ORG_441f2234 in #📈・JID_fb739488
  ✅ Industry: Data Engineer 1 @ ORG_441f2234
[2025-12-15T20:23:23.618Z] [BOT] 💾 Marked as posted: Data Engineer 1 @ ORG_441f2234 (instance #1)
[2025-12-15T20:23:23.619Z] [BOT] 💾 BEFORE ARCHIVING: 148 jobs in database
✅ No jobs to archive (all 148 jobs within 7-day window)
[2025-12-15T20:23:23.621Z] [BOT] 💾 Saved posted_jobs.json: 148 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T20:23:23.621Z] [BOT] 📍 [ROUTING] "Platform Data Analyst" @ ORG_85a39b42
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-15T20:23:23.621Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-15T20:23:24.295Z] [BOT] ✅ Created forum post: 🏢 Platform Data Analyst @ ORG_85a39b42 in #📈・JID_fb739488
[2025-12-15T20:23:24.295Z] [BOT] ✅ Industry: Platform Data Analyst @ ORG_85a39b42
[2025-12-15T20:23:25.982Z] [BOT] ✅ Created forum post: 🏢 Platform Data Analyst @ ORG_85a39b42 in #💻・remote-usa
[2025-12-15T20:23:25.982Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-15T20:23:27.483Z] [BOT] 💾 Marked as posted: Platform Data Analyst @ ORG_85a39b42 (instance #1)
[2025-12-15T20:23:27.483Z] [BOT] 💾 BEFORE ARCHIVING: 149 jobs in database
[2025-12-15T20:23:27.483Z] [BOT] ✅ No jobs to archive (all 149 jobs within 7-day window)
[2025-12-15T20:23:27.485Z] [BOT] 💾 Saved posted_jobs.json: 149 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T20:23:30.486Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2025-12-15T20:23:30.486Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_975bace0-engineer_rq211472-1 (posted within 7 days)
[2025-12-15T20:23:30.486Z] [BOT] ⏭️  Skipping duplicate: JID_c2bcf3af (posted within 7 days)
⏭️  Skipping duplicate: JID_6f58f2a4-centene_external-JID_524db41a-i_1624077 (posted within 7 days)
[2025-12-15T20:23:30.486Z] [BOT] ⏭️  Skipping duplicate: JID_559f2b67 (posted within 7 days)
[2025-12-15T20:23:30.487Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2025-12-15T20:23:30.488Z] [BOT] ✅ Saved pending queue: 4 total (0 pending, 0 enriched, 4 posted)
[2025-12-15T20:23:30.488Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-15T20:23:30.526Z] [BOT] 📂 Loaded 139 existing routing entries
[2025-12-15T20:23:30.564Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2025-12-15T20:23:30.564Z] [BOT] Total entries: 143
   Timestamp: 2025-12-15T20:23:30.563Z
[2025-12-15T20:23:32.575Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2308) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*