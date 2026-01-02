# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T15:38:22.919Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T15:37:58.576Z] ========================================
[2026-01-02T15:37:58.578Z] Discord Bot Execution Log
[2026-01-02T15:37:58.578Z] Environment: GitHub Actions
[2026-01-02T15:37:58.578Z] Node Version: v20.19.6
[2026-01-02T15:37:58.578Z] ========================================
[2026-01-02T15:37:58.579Z] Environment Variables Check:
[2026-01-02T15:37:58.579Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T15:37:58.579Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T15:37:58.579Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T15:37:58.579Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T15:37:58.579Z] 
Multi-Channel Configuration:
[2026-01-02T15:37:58.579Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T15:37:58.579Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T15:37:58.579Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T15:37:58.579Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T15:37:58.580Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T15:37:58.580Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T15:37:58.580Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T15:37:58.580Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T15:37:58.580Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T15:37:58.580Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T15:37:58.580Z] 
Data Files Check:
[2026-01-02T15:37:58.580Z] .github/data/new_jobs.json: ✅ Exists (3 items, 17967 bytes)
[2026-01-02T15:37:58.581Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 73824 bytes)
[2026-01-02T15:37:58.581Z] 
========================================
[2026-01-02T15:37:58.581Z] Starting Enhanced Discord Bot...
[2026-01-02T15:37:58.581Z] ========================================
[2026-01-02T15:37:59.084Z] [BOT] ✅ Loaded V2 database: 122 jobs
[2026-01-02T15:37:59.723Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T15:37:59.724Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T15:37:59.724Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T15:37:59.725Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2026-01-02T15:37:59.766Z] [BOT] 🧹 Cleaned up 3 jobs older than 7 days
[2026-01-02T15:37:59.815Z] [BOT] ✅ Export complete: Added 3, Skipped 0, Total 51
[2026-01-02T15:37:59.816Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2026-01-02T15:37:59.816Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2026-01-02T15:37:59.816Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-02T15:37:59.817Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-02T15:37:59.817Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T15:37:59.821Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-02T15:37:59.821Z] [BOT] 📍 [ROUTING] "Analyst – Customer Insights" @ ORG_85aef4c3
[2026-01-02T15:37:59.822Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-02T15:37:59.826Z] [BOT ERROR] (node:2509) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T15:38:00.190Z] [BOT] ✅ Created forum post: 🏢 Analyst – Customer Insights @ ORG_85aef4c3 in #📣・marketing-jobs
  ✅ Industry: Analyst – Customer Insights @ ORG_85aef4c3
[2026-01-02T15:38:01.915Z] [BOT] ✅ Created forum post: 🏢 Analyst – Customer Insights @ ORG_85aef4c3 in #🗽・new-york
[2026-01-02T15:38:01.916Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-02T15:38:03.416Z] [BOT] 💾 Marked as posted: Analyst – Customer Insights @ ORG_85aef4c3 (instance #1)
[2026-01-02T15:38:03.416Z] [BOT] 💾 BEFORE ARCHIVING: 123 jobs in database
[2026-01-02T15:38:03.417Z] [BOT] ✅ No jobs to archive (all 123 jobs within 7-day window)
[2026-01-02T15:38:03.422Z] [BOT] 💾 Saved posted_jobs.json: 123 active jobs
[2026-01-02T15:38:03.422Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T15:38:06.424Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-02T15:38:06.424Z] [BOT] 📍 [ROUTING] "Master Data Maintainer" @ ORG_152422dd Energy
[2026-01-02T15:38:06.424Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-02T15:38:06.424Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-02T15:38:06.627Z] [BOT] ✅ Created forum post: 🏢 Master Data Maintainer @ ORG_152422dd Energy in #📈・JID_fb739488
[2026-01-02T15:38:06.627Z] [BOT] ✅ Industry: Master Data Maintainer @ ORG_152422dd Energy
[2026-01-02T15:38:08.364Z] [BOT] ✅ Created forum post: 🏢 Master Data Maintainer @ ORG_152422dd Energy in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-02T15:38:09.865Z] [BOT] 💾 Marked as posted: Master Data Maintainer @ ORG_152422dd Energy (instance #1)
[2026-01-02T15:38:09.865Z] [BOT] 💾 BEFORE ARCHIVING: 124 jobs in database
[2026-01-02T15:38:09.865Z] [BOT] ✅ No jobs to archive (all 124 jobs within 7-day window)
[2026-01-02T15:38:09.867Z] [BOT] 💾 Saved posted_jobs.json: 124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T15:38:12.869Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-02T15:38:12.871Z] [BOT] 📍 [ROUTING] "Research Professional" @ ORG_9d38443e of Chicago
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-02T15:38:13.296Z] [BOT] ✅ Created forum post: 🏢 Research Professional @ ORG_9d38443e of Chicago in #💰・finance-jobs
  ✅ Industry: Research Professional @ ORG_9d38443e of Chicago
[2026-01-02T15:38:15.116Z] [BOT] ✅ Created forum post: 🏢 Research Professional @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-02T15:38:16.617Z] [BOT] 💾 Marked as posted: Research Professional @ ORG_9d38443e of Chicago (instance #1)
[2026-01-02T15:38:16.617Z] [BOT] 💾 BEFORE ARCHIVING: 125 jobs in database
✅ No jobs to archive (all 125 jobs within 7-day window)
[2026-01-02T15:38:16.620Z] [BOT] 💾 Saved posted_jobs.json: 125 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T15:38:19.620Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-02T15:38:19.621Z] [BOT] ⏭️  Skipping duplicate: JID_6e5d6b65-us_corporate_jobs-JID_c1613c68-insights_r-2019782 (posted within 7 days)
[2026-01-02T15:38:19.621Z] [BOT] ⏭️  Skipping duplicate: JID_db11c32a-maintainer_r25275 (posted within 7 days)
⏭️  Skipping duplicate: JID_32cb8765-professional_jr31451 (posted within 7 days)
[2026-01-02T15:38:19.621Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2026-01-02T15:38:19.622Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 0 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-01-02T15:38:19.622Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-02T15:38:19.666Z] [BOT] 📂 Loaded 1196 existing routing entries
[2026-01-02T15:38:19.714Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-02T15:38:19.714Z] [BOT] Total entries: 1199
   Timestamp: 2026-01-02T15:38:19.707Z
[2026-01-02T15:38:19.714Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T15:38:19.714Z] [BOT] Total attempts: 6
   Successful: 6
   Failed: 0
   Skipped: 0
[2026-01-02T15:38:19.715Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
[2026-01-02T15:38:19.715Z] [BOT] Channels used: 6
   Top channels:
     1. #📣・marketing-jobs: 1 posts
     2. #🗽・new-york: 1 posts
     3. #📈・JID_fb739488: 1 posts
     4. #🤠・austin: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-02T15:38:19.716Z] [BOT] [STATS] Channel stats saved
[2026-01-02T15:38:21.727Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2509) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*