# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T03:37:12.450Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T03:36:51.033Z] ========================================
[2025-11-26T03:36:51.034Z] Discord Bot Execution Log
[2025-11-26T03:36:51.034Z] Environment: GitHub Actions
[2025-11-26T03:36:51.034Z] Node Version: v20.19.5
[2025-11-26T03:36:51.034Z] ========================================
[2025-11-26T03:36:51.034Z] Environment Variables Check:
[2025-11-26T03:36:51.034Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T03:36:51.035Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T03:36:51.035Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T03:36:51.035Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T03:36:51.035Z] 
Multi-Channel Configuration:
[2025-11-26T03:36:51.035Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T03:36:51.035Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T03:36:51.035Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T03:36:51.035Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T03:36:51.035Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T03:36:51.035Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T03:36:51.035Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T03:36:51.035Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T03:36:51.035Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T03:36:51.035Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T03:36:51.035Z] 
Data Files Check:
[2025-11-26T03:36:51.036Z] .github/data/new_jobs.json: ✅ Exists (6 items, 36571 bytes)
[2025-11-26T03:36:51.038Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328133 bytes)
[2025-11-26T03:36:51.038Z] 
========================================
[2025-11-26T03:36:51.038Z] Starting Enhanced Discord Bot...
[2025-11-26T03:36:51.038Z] ========================================
[2025-11-26T03:36:52.096Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T03:36:52.096Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 6 jobs to encrypted JSON...
[2025-11-26T03:36:52.097Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T03:36:52.174Z] [BOT] ✅ Export complete: Added 0, Skipped 6, Total 6
[2025-11-26T03:36:52.175Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T03:36:52.175Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 4 new jobs (2 already posted)...
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T03:36:52.178Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-26T03:36:52.178Z] [BOT] 📍 [ROUTING] "Software Development Engineer 1 - Salesforce" @ ORG_ca80fdf7 Parcel Service (UPS)
[2025-11-26T03:36:52.178Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T03:36:52.183Z] [BOT ERROR] (node:2649) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T03:36:52.384Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 - Salesforce @ ORG_ca80fdf7 Parcel Service (UPS) in #💻・tech-jobs
  ✅ Industry: Software Development Engineer 1 - Salesforce @ ORG_ca80fdf7 Parcel Service (UPS)
[2025-11-26T03:36:53.888Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T03:36:53.889Z] [BOT] 📍 [ROUTING] "DL System Software Engineer – New College Graduate - AI Platform" @ ORG_0890f456
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T03:36:54.081Z] [BOT] ✅ Created forum post: 🏢 DL System Software Engineer – New College Graduate - AI Platform @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: DL System Software Engineer – New College Graduate - AI Platform @ ORG_0890f456
[2025-11-26T03:36:56.146Z] [BOT] ✅ Created forum post: 🏢 DL System Software Engineer – New College Graduate - AI Platform @ ORG_0890f456 in #🌉・san-francisco
[2025-11-26T03:36:56.146Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-26T03:36:57.648Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T03:36:57.648Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T03:36:57.871Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-26T03:36:57.871Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T03:36:59.690Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T03:37:01.193Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T03:37:04.193Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-11-26T03:37:04.193Z] [BOT] 📍 [ROUTING] "Research Scientist – New College Grad 2026 - Fundamental LLM Research for Knowledge - Reasoning And Agents" @ ORG_0890f456
   Category: HR (matched: "benefits")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-26T03:37:04.621Z] [BOT] ✅ Created forum post: 🏢 Research Scientist – New College Grad 2026 - Fundamental LLM Research for Knowledge - Reasoning A in #📁・JID_e938df7b
  ✅ Industry: Research Scientist – New College Grad 2026 - Fundamental LLM Research for Knowledge - Reasoning And Agents @ ORG_0890f456
[2025-11-26T03:37:06.124Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T03:37:09.124Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T03:37:09.162Z] [BOT] 📂 Loaded 126 existing routing entries
[2025-11-26T03:37:09.199Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 130
   Timestamp: 2025-11-26T03:37:09.198Z
[2025-11-26T03:37:11.209Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2649) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*