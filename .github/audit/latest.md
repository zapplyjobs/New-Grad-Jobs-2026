# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T13:13:59.498Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T13:13:41.274Z] ========================================
[2025-12-05T13:13:41.275Z] Discord Bot Execution Log
[2025-12-05T13:13:41.276Z] Environment: GitHub Actions
[2025-12-05T13:13:41.276Z] Node Version: v20.19.6
[2025-12-05T13:13:41.276Z] ========================================
[2025-12-05T13:13:41.276Z] Environment Variables Check:
[2025-12-05T13:13:41.276Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T13:13:41.276Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T13:13:41.276Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T13:13:41.276Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T13:13:41.276Z] 
Multi-Channel Configuration:
[2025-12-05T13:13:41.276Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T13:13:41.277Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T13:13:41.277Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T13:13:41.277Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T13:13:41.277Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T13:13:41.277Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T13:13:41.277Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T13:13:41.277Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T13:13:41.277Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T13:13:41.277Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T13:13:41.277Z] 
Data Files Check:
[2025-12-05T13:13:41.282Z] .github/data/new_jobs.json: ✅ Exists (50 items, 691406 bytes)
[2025-12-05T13:13:41.282Z] .github/data/posted_jobs.json: ✅ Exists (0 items, 3 bytes)
[2025-12-05T13:13:41.282Z] 
========================================
[2025-12-05T13:13:41.282Z] Starting Enhanced Discord Bot...
[2025-12-05T13:13:41.282Z] ========================================
[2025-12-05T13:13:42.492Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T13:13:42.493Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T13:13:42.493Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T13:13:42.496Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-05T13:13:42.588Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 50
[2025-12-05T13:13:42.592Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2025-12-05T13:13:42.592Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2025-12-05T13:13:42.593Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
[2025-12-05T13:13:42.593Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
[2025-12-05T13:13:42.593Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
[2025-12-05T13:13:42.593Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
[2025-12-05T13:13:42.593Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Developer at Leidos, Bethesda (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Developer at Leidos, Bethesda (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Developer at Leidos, Bethesda (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
[2025-12-05T13:13:42.594Z] [BOT] ⏭️ Skipping duplicate title+company+location: Entry Level Software Developer at Leidos, Bethesda (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Developer at Leidos, Bethesda (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Developer at Leidos, Bethesda (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Developer at Leidos, Bethesda (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
[2025-12-05T13:13:42.594Z] [BOT] ⏭️ Skipping duplicate title+company+location: Entry Level Software Developer at Leidos, Bethesda (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Developer at Leidos, Bethesda (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Developer at Leidos, Bethesda (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
[2025-12-05T13:13:42.594Z] [BOT] ⏭️ Skipping duplicate title+company+location: Entry Level Software Developer at Leidos, Bethesda (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at McDonald's, Chicago (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New Grad - 2026 Start at Zip, SF (already posting one with this combination)
📋 After title+company+location dedup: 3 unique jobs to post
   (47 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 47 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T13:13:42.595Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-05T13:13:42.595Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ McDonald's
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:13:42.601Z] [BOT ERROR] (node:2280) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T13:13:42.828Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ McDonald's in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ McDonald's
[2025-12-05T13:13:44.546Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ McDonald's in #🌆・chicago
[2025-12-05T13:13:44.546Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-05T13:13:46.045Z] [BOT] 💾 BEFORE SAVE: Database has 1 jobs
[2025-12-05T13:13:46.059Z] [BOT] 💾 Saved 1 posted jobs to database
✅ Verified: Database file contains 1 jobs
[2025-12-05T13:13:46.059Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - 2026 Start" @ ORG_7bc88ebb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:13:46.308Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb in #💻・tech-jobs
[2025-12-05T13:13:46.308Z] [BOT] ✅ Industry: Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb
[2025-12-05T13:13:48.089Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb in #🌉・san-francisco
[2025-12-05T13:13:48.089Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-05T13:13:49.589Z] [BOT] 💾 BEFORE SAVE: Database has 2 jobs
[2025-12-05T13:13:49.593Z] [BOT] 💾 Saved 2 posted jobs to database
[2025-12-05T13:13:49.593Z] [BOT] ✅ Verified: Database file contains 2 jobs
📍 [ROUTING] "Entry Level Software Developer" @ ORG_d51736fa
   Category: TECH (matched: "software")
[2025-12-05T13:13:49.593Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:13:49.793Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_d51736fa in #💻・tech-jobs
[2025-12-05T13:13:49.793Z] [BOT] ✅ Industry: Entry Level Software Developer @ ORG_d51736fa
[2025-12-05T13:13:51.582Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T13:13:53.084Z] [BOT] 💾 BEFORE SAVE: Database has 3 jobs
[2025-12-05T13:13:53.085Z] [BOT] 💾 Saved 3 posted jobs to database
[2025-12-05T13:13:53.085Z] [BOT] ✅ Verified: Database file contains 3 jobs
[2025-12-05T13:13:56.084Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-05T13:13:56.094Z] [BOT] ✅ Loaded pending queue: 1493 total (1443 pending, 50 enriched, 0 posted)
[2025-12-05T13:13:56.113Z] [BOT] ✅ Saved pending queue: 1493 total (1237 pending, 0 enriched, 256 posted)
📋 Updated queue: marked 256 jobs as posted
[2025-12-05T13:13:56.113Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-05T13:13:56.151Z] [BOT] ⚠️ Failed to load existing logs: Unsupported state or unable to authenticate data
[2025-12-05T13:13:56.187Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 3
   Timestamp: 2025-12-05T13:13:56.187Z
[2025-12-05T13:13:58.199Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2280) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*