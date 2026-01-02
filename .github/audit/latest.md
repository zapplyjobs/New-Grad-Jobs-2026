# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T13:42:53.795Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T13:42:35.660Z] ========================================
[2026-01-02T13:42:35.662Z] Discord Bot Execution Log
[2026-01-02T13:42:35.662Z] Environment: GitHub Actions
[2026-01-02T13:42:35.662Z] Node Version: v20.19.6
[2026-01-02T13:42:35.662Z] ========================================
[2026-01-02T13:42:35.662Z] Environment Variables Check:
[2026-01-02T13:42:35.662Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T13:42:35.663Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T13:42:35.663Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T13:42:35.663Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T13:42:35.663Z] 
Multi-Channel Configuration:
[2026-01-02T13:42:35.663Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T13:42:35.663Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T13:42:35.663Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T13:42:35.663Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T13:42:35.663Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T13:42:35.663Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T13:42:35.663Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T13:42:35.663Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T13:42:35.664Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T13:42:35.664Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T13:42:35.664Z] 
Data Files Check:
[2026-01-02T13:42:35.664Z] .github/data/new_jobs.json: ✅ Exists (2 items, 11418 bytes)
[2026-01-02T13:42:35.665Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 70502 bytes)
[2026-01-02T13:42:35.665Z] 
========================================
[2026-01-02T13:42:35.665Z] Starting Enhanced Discord Bot...
[2026-01-02T13:42:35.665Z] ========================================
[2026-01-02T13:42:36.179Z] [BOT] ✅ Loaded V2 database: 117 jobs
[2026-01-02T13:42:36.727Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T13:42:36.728Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T13:42:36.728Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T13:42:36.728Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-02T13:42:36.770Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-02T13:42:36.817Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 50
[2026-01-02T13:42:36.818Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-02T13:42:36.819Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-02T13:42:36.820Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
📋 After multi-location grouping: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T13:42:36.823Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-02T13:42:36.824Z] [BOT] 📍 [ROUTING] "Gas Quality Analyst" @ ORG_d5ef0f0e Energy
[2026-01-02T13:42:36.824Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-02T13:42:36.828Z] [BOT ERROR] (node:2503) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T13:42:37.047Z] [BOT] ✅ Created forum post: 🏢 Gas Quality Analyst @ ORG_d5ef0f0e Energy in #📁・JID_e938df7b
[2026-01-02T13:42:37.048Z] [BOT] ✅ Industry: Gas Quality Analyst @ ORG_d5ef0f0e Energy
[2026-01-02T13:42:39.419Z] [BOT] ✅ Created forum post: 🏢 Gas Quality Analyst @ ORG_d5ef0f0e Energy in #💻・remote-usa
[2026-01-02T13:42:39.420Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-02T13:42:40.920Z] [BOT] 💾 Marked as posted: Gas Quality Analyst @ ORG_d5ef0f0e Energy (instance #1)
[2026-01-02T13:42:40.920Z] [BOT] 💾 BEFORE ARCHIVING: 118 jobs in database
[2026-01-02T13:42:40.921Z] [BOT] ✅ No jobs to archive (all 118 jobs within 7-day window)
[2026-01-02T13:42:40.926Z] [BOT] 💾 Saved posted_jobs.json: 118 active jobs
[2026-01-02T13:42:40.926Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T13:42:43.928Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-02T13:42:43.928Z] [BOT] 📍 [ROUTING] "Applications Analyst 1" @ ORG_66ea81b5 Health
[2026-01-02T13:42:43.928Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-02T13:42:44.322Z] [BOT] ✅ Created forum post: 🏢 Applications Analyst 1 @ ORG_66ea81b5 Health in #📣・marketing-jobs
  ✅ Industry: Applications Analyst 1 @ ORG_66ea81b5 Health
[2026-01-02T13:42:46.011Z] [BOT] ✅ Created forum post: 🏢 Applications Analyst 1 @ ORG_66ea81b5 Health in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-02T13:42:47.512Z] [BOT] 💾 Marked as posted: Applications Analyst 1 @ ORG_66ea81b5 Health (instance #1)
[2026-01-02T13:42:47.512Z] [BOT] 💾 BEFORE ARCHIVING: 119 jobs in database
✅ No jobs to archive (all 119 jobs within 7-day window)
[2026-01-02T13:42:47.514Z] [BOT] 💾 Saved posted_jobs.json: 119 active jobs
[2026-01-02T13:42:47.514Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T13:42:50.515Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-02T13:42:50.515Z] [BOT] ⏭️  Skipping duplicate: JID_007722bc-career_site_tc-JID_0aa07ff2-analyst_jr-09532 (posted within 7 days)
[2026-01-02T13:42:50.516Z] [BOT] ⏭️  Skipping duplicate: JID_3984b544-i_r36505 (posted within 7 days)
[2026-01-02T13:42:50.516Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-02T13:42:50.517Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T13:42:50.561Z] [BOT] 📂 Loaded 1191 existing routing entries
[2026-01-02T13:42:50.608Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-02T13:42:50.608Z] [BOT] New entries: 2
   Total entries: 1193
   Timestamp: 2026-01-02T13:42:50.602Z
[2026-01-02T13:42:50.609Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
   Total attempts: 4
   Successful: 4
[2026-01-02T13:42:50.609Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-02T13:42:50.609Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-02T13:42:50.609Z] [BOT] Total posts: 4
   Channels used: 4
   Top channels:
     1. #📁・JID_e938df7b: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-02T13:42:50.609Z] [BOT] 3. #📣・marketing-jobs: 1 posts
     4. #🌆・chicago: 1 posts
[2026-01-02T13:42:50.609Z] [BOT] [STATS] Channel stats saved
[2026-01-02T13:42:52.621Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2503) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*