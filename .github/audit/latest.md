# Discord Bot Execution Audit
**Timestamp:** 2025-12-06T02:33:14.543Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-06T02:32:59.156Z] ========================================
[2025-12-06T02:32:59.158Z] Discord Bot Execution Log
[2025-12-06T02:32:59.158Z] Environment: GitHub Actions
[2025-12-06T02:32:59.158Z] Node Version: v20.19.6
[2025-12-06T02:32:59.158Z] ========================================
[2025-12-06T02:32:59.159Z] Environment Variables Check:
[2025-12-06T02:32:59.159Z] DISCORD_TOKEN: ✅ Set
[2025-12-06T02:32:59.159Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-06T02:32:59.159Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-06T02:32:59.159Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-06T02:32:59.159Z] 
Multi-Channel Configuration:
[2025-12-06T02:32:59.159Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-06T02:32:59.159Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-06T02:32:59.159Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-06T02:32:59.159Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-06T02:32:59.159Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-06T02:32:59.159Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-06T02:32:59.159Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-06T02:32:59.160Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-06T02:32:59.160Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-06T02:32:59.160Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-06T02:32:59.160Z] 
Data Files Check:
[2025-12-06T02:32:59.160Z] .github/data/new_jobs.json: ✅ Exists (2 items, 26971 bytes)
[2025-12-06T02:32:59.160Z] .github/data/posted_jobs.json: ✅ Exists (64 items, 6218 bytes)
[2025-12-06T02:32:59.160Z] 
========================================
[2025-12-06T02:32:59.161Z] Starting Enhanced Discord Bot...
[2025-12-06T02:32:59.161Z] ========================================
[2025-12-06T02:33:00.533Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-06T02:33:00.533Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-06T02:33:00.533Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-06T02:33:00.677Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 318
[2025-12-06T02:33:00.678Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-06T02:33:00.679Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-06T02:33:00.679Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-06T02:33:00.682Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-06T02:33:00.683Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Molten Salt Technology" @ ORG_a867f63f National Laboratory
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-06T02:33:00.687Z] [BOT ERROR] (node:2368) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-06T02:33:00.820Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Molten Salt Technology @ ORG_a867f63f National Laboratory in #📁・JID_e938df7b
[2025-12-06T02:33:00.821Z] [BOT] ✅ Industry: Postdoctoral Appointee - Molten Salt Technology @ ORG_a867f63f National Laboratory
[2025-12-06T02:33:02.534Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Molten Salt Technology @ ORG_a867f63f National Laboratory in #🌆・chicago
[2025-12-06T02:33:02.534Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-06T02:33:04.034Z] [BOT] 💾 BEFORE SAVE: Database has 65 jobs
[2025-12-06T02:33:04.040Z] [BOT] 💾 Saved 65 posted jobs to database
✅ Verified: Database file contains 65 jobs
[2025-12-06T02:33:07.041Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2025-12-06T02:33:07.041Z] [BOT] 📍 [ROUTING] "Turkish Language Specialist" @ ORG_188e5bb8
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1446...1106)
[2025-12-06T02:33:07.356Z] [BOT] ✅ Created forum post: 🏢 Turkish Language Specialist @ ORG_188e5bb8 in #ai-jobs
[2025-12-06T02:33:07.356Z] [BOT] ✅ Industry: Turkish Language Specialist @ ORG_188e5bb8
[2025-12-06T02:33:08.857Z] [BOT] 💾 BEFORE SAVE: Database has 66 jobs
[2025-12-06T02:33:08.859Z] [BOT] 💾 Saved 66 posted jobs to database
[2025-12-06T02:33:08.859Z] [BOT] ✅ Verified: Database file contains 66 jobs
[2025-12-06T02:33:11.859Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-06T02:33:11.860Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-06T02:33:11.861Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-06T02:33:11.897Z] [BOT] 📂 Loaded 175 existing routing entries
[2025-12-06T02:33:11.934Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 177
   Timestamp: 2025-12-06T02:33:11.933Z
[2025-12-06T02:33:13.945Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2368) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*