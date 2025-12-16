# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T00:42:45.011Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T00:42:19.993Z] ========================================
[2025-12-16T00:42:19.995Z] Discord Bot Execution Log
[2025-12-16T00:42:19.995Z] Environment: GitHub Actions
[2025-12-16T00:42:19.995Z] Node Version: v20.19.6
[2025-12-16T00:42:19.995Z] ========================================
[2025-12-16T00:42:19.995Z] Environment Variables Check:
[2025-12-16T00:42:19.995Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T00:42:19.995Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T00:42:19.995Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T00:42:19.995Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T00:42:19.995Z] 
Multi-Channel Configuration:
[2025-12-16T00:42:19.995Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T00:42:19.995Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T00:42:19.995Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T00:42:19.995Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T00:42:19.995Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T00:42:19.996Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T00:42:19.996Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T00:42:19.996Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T00:42:19.996Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T00:42:19.996Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T00:42:19.996Z] 
Data Files Check:
[2025-12-16T00:42:19.996Z] .github/data/new_jobs.json: ✅ Exists (4 items, 58035 bytes)
[2025-12-16T00:42:19.997Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 101760 bytes)
[2025-12-16T00:42:19.997Z] 
========================================
[2025-12-16T00:42:19.997Z] Starting Enhanced Discord Bot...
[2025-12-16T00:42:19.997Z] ========================================
[2025-12-16T00:42:20.514Z] [BOT] ✅ Loaded V2 database: 161 jobs
[2025-12-16T00:42:21.259Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T00:42:21.260Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T00:42:21.260Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T00:42:21.260Z] [BOT] 📦 Exporting 4 jobs to encrypted JSON...
[2025-12-16T00:42:21.373Z] [BOT] ✅ Export complete: Added 0, Skipped 4, Total 161
[2025-12-16T00:42:21.374Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2025-12-16T00:42:21.375Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
📋 After data quality filter: 4 jobs (0 invalid)
[2025-12-16T00:42:21.375Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2025-12-16T00:42:21.375Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T00:42:21.377Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-16T00:42:21.377Z] [BOT] 📍 [ROUTING] "Data Science Analyst - Digital" @ ORG_f3e93c9b Automation
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T00:42:21.381Z] [BOT ERROR] (node:2729) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T00:42:21.769Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst - Digital @ ORG_f3e93c9b Automation in #🤖・ai-jobs
  ✅ Industry: Data Science Analyst - Digital @ ORG_f3e93c9b Automation
[2025-12-16T00:42:23.450Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst - Digital @ ORG_f3e93c9b Automation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T00:42:24.952Z] [BOT] 💾 Marked as posted: Data Science Analyst - Digital @ ORG_f3e93c9b Automation (instance #1)
[2025-12-16T00:42:24.952Z] [BOT] 💾 BEFORE ARCHIVING: 162 jobs in database
[2025-12-16T00:42:24.952Z] [BOT] ✅ No jobs to archive (all 162 jobs within 7-day window)
[2025-12-16T00:42:24.958Z] [BOT] 💾 Saved posted_jobs.json: 162 active jobs
[2025-12-16T00:42:24.959Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Research Scientist - AI-Mediated Reality and Interaction Research" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T00:42:25.148Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456
[2025-12-16T00:42:26.840Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T00:42:28.342Z] [BOT] 💾 Marked as posted: Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456 (instance #1)
[2025-12-16T00:42:28.342Z] [BOT] 💾 BEFORE ARCHIVING: 163 jobs in database
✅ No jobs to archive (all 163 jobs within 7-day window)
[2025-12-16T00:42:28.696Z] [BOT] 💾 Saved posted_jobs.json: 163 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T00:42:31.696Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-16T00:42:31.697Z] [BOT] 📍 [ROUTING] "2026 Fulltime - Raytheon Software Integration Engineer I" @ ORG_75f04b84
   Category: TECH (matched: "software")
[2025-12-16T00:42:31.697Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T00:42:32.072Z] [BOT] ✅ Created forum post: 🏢 2026 Fulltime - Raytheon Software Integration Engineer I @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: 2026 Fulltime - Raytheon Software Integration Engineer I @ ORG_75f04b84
[2025-12-16T00:42:33.811Z] [BOT] ✅ Created forum post: 🏢 2026 Fulltime - Raytheon Software Integration Engineer I @ ORG_75f04b84 in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-16T00:42:35.313Z] [BOT] 💾 Marked as posted: 2026 Fulltime - Raytheon Software Integration Engineer I @ ORG_75f04b84 (instance #1)
💾 BEFORE ARCHIVING: 164 jobs in database
[2025-12-16T00:42:35.313Z] [BOT] ✅ No jobs to archive (all 164 jobs within 7-day window)
[2025-12-16T00:42:35.316Z] [BOT] 💾 Saved posted_jobs.json: 164 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T00:42:35.316Z] [BOT] 📍 [ROUTING] "Backend Engineer - AI" @ ORG_dec20a22ing
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T00:42:35.604Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer - AI @ ORG_dec20a22ing in #💻・tech-jobs
  ✅ Industry: Backend Engineer - AI @ ORG_dec20a22ing
[2025-12-16T00:42:37.363Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer - AI @ ORG_dec20a22ing in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T00:42:38.864Z] [BOT] 💾 Marked as posted: Backend Engineer - AI @ ORG_dec20a22ing (instance #1)
💾 BEFORE ARCHIVING: 165 jobs in database
[2025-12-16T00:42:38.864Z] [BOT] ✅ No jobs to archive (all 165 jobs within 7-day window)
[2025-12-16T00:42:38.866Z] [BOT] 💾 Saved posted_jobs.json: 165 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T00:42:41.867Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2025-12-16T00:42:41.867Z] [BOT] ⏭️  Skipping duplicate: JID_719d2daf-external_rockwell_automation-JID_67be1b5f-digital_r25-7097-1 (posted within 7 days)
[2025-12-16T00:42:41.868Z] [BOT] ⏭️  Skipping duplicate: JID_23c6ec66-2026_jr2009485 (posted within 7 days)
⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_19fc2cde-_01812392 (posted within 7 days)
⏭️  Skipping duplicate: JID_35f7e58c (posted within 7 days)
[2025-12-16T00:42:41.869Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2025-12-16T00:42:41.870Z] [BOT] ✅ Saved pending queue: 4 total (0 pending, 0 enriched, 4 posted)
[2025-12-16T00:42:41.870Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T00:42:41.910Z] [BOT] 📂 Loaded 154 existing routing entries
[2025-12-16T00:42:41.948Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 158
   Timestamp: 2025-12-16T00:42:41.947Z
[2025-12-16T00:42:43.957Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2729) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*