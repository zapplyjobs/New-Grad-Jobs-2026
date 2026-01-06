# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T17:41:54.770Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T17:41:37.075Z] ========================================
[2026-01-06T17:41:37.077Z] Discord Bot Execution Log
[2026-01-06T17:41:37.077Z] Environment: GitHub Actions
[2026-01-06T17:41:37.077Z] Node Version: v20.19.6
[2026-01-06T17:41:37.077Z] ========================================
[2026-01-06T17:41:37.077Z] Environment Variables Check:
[2026-01-06T17:41:37.077Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T17:41:37.077Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T17:41:37.078Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T17:41:37.078Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T17:41:37.078Z] 
Multi-Channel Configuration:
[2026-01-06T17:41:37.078Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T17:41:37.078Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T17:41:37.078Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T17:41:37.078Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T17:41:37.078Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T17:41:37.078Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T17:41:37.078Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T17:41:37.078Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T17:41:37.078Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T17:41:37.079Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T17:41:37.079Z] 
Data Files Check:
[2026-01-06T17:41:37.080Z] .github/data/new_jobs.json: ✅ Exists (10 items, 124870 bytes)
[2026-01-06T17:41:37.085Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 701459 bytes)
[2026-01-06T17:41:37.085Z] 
========================================
[2026-01-06T17:41:37.085Z] Starting Enhanced Discord Bot...
[2026-01-06T17:41:37.085Z] ========================================
[2026-01-06T17:41:37.617Z] [BOT] ✅ Loaded V2 database: 1372 jobs
[2026-01-06T17:41:38.315Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T17:41:38.315Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T17:41:38.316Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T17:41:38.317Z] [BOT] ✅ Loaded pending queue: 49 total (29 pending, 20 enriched, 0 posted)
[2026-01-06T17:41:38.317Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Head of Protective Services at anthropic
[2026-01-06T17:41:38.318Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
[2026-01-06T17:41:38.318Z] [BOT] ⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-06T17:41:38.318Z] [BOT] ⏭️  Skipping duplicate: JID_c3c61d5c (posted within 7 days)
[2026-01-06T17:41:38.319Z] [BOT] ⏭️ Skipping already posted: Staff Software Engineer, Storage at reddit
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-06T17:41:38.319Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-06T17:41:38.322Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
[2026-01-06T17:41:38.323Z] [BOT] ⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
⏭️ Skipping already posted: AI Machine Learning Engineer 2 at Cisco
⏭️  Skipping duplicate: JID_38c7271e (posted within 7 days)
[2026-01-06T17:41:38.323Z] [BOT] ⏭️ Skipping already posted: ROLE_2237147a at Shiftsmart
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-06T17:41:38.323Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
[2026-01-06T17:41:38.323Z] [BOT] ⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T17:41:38.323Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T17:41:38.323Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T17:41:38.323Z] [BOT] ⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Cloud Growth at Temporal Technologies
[2026-01-06T17:41:38.324Z] [BOT] ⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
⏭️ Skipping already posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
[2026-01-06T17:41:38.324Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
[2026-01-06T17:41:38.324Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
[2026-01-06T17:41:38.324Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at American Express
⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
📬 Found 2 new jobs (18 already posted)...
[2026-01-06T17:41:38.324Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-06T17:41:38.325Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-06T17:41:38.325Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T17:41:38.329Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-06T17:41:38.330Z] [BOT] 📍 [ROUTING] "Visual Charting Specialist" @ ORG_d51736fa
[2026-01-06T17:41:38.330Z] [BOT] Category: HR (matched: "compensation")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-06T17:41:38.334Z] [BOT ERROR] (node:3042) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T17:41:38.593Z] [BOT] ✅ Created forum post: 🏢 Visual Charting Specialist @ ORG_d51736fa in #📁・JID_e938df7b
[2026-01-06T17:41:38.593Z] [BOT] ✅ Industry: Visual Charting Specialist @ ORG_d51736fa
[2026-01-06T17:41:40.332Z] [BOT] ✅ Created forum post: 🏢 Visual Charting Specialist @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T17:41:41.833Z] [BOT] 💾 Marked as posted: Visual Charting Specialist @ ORG_d51736fa (instance #1)
[2026-01-06T17:41:41.833Z] [BOT] 💾 BEFORE ARCHIVING: 1373 jobs in database
[2026-01-06T17:41:41.834Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-06T17:41:41.840Z] [BOT] 📦 Archived 3 jobs to 2025-12.json (3 total in archive)
[2026-01-06T17:41:41.840Z] [BOT] ✅ Archiving complete: 3 archived, 1370 active
[2026-01-06T17:41:41.849Z] [BOT] 💾 Saved posted_jobs.json: 1370 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T17:41:44.851Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-06T17:41:44.851Z] [BOT] 📍 [ROUTING] "Energy and Climate Researcher" @ ORG_d726578b International
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-06T17:41:44.851Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-06T17:41:45.101Z] [BOT] ✅ Created forum post: 🏢 Energy and Climate Researcher @ ORG_d726578b International in #🤖・ai-jobs
[2026-01-06T17:41:45.101Z] [BOT] ✅ Industry: Energy and Climate Researcher @ ORG_d726578b International
[2026-01-06T17:41:46.809Z] [BOT] ✅ Created forum post: 🏢 Energy and Climate Researcher @ ORG_d726578b International in #💻・remote-usa
[2026-01-06T17:41:46.809Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-06T17:41:48.310Z] [BOT] 💾 Marked as posted: Energy and Climate Researcher @ ORG_d726578b International (instance #1)
[2026-01-06T17:41:48.311Z] [BOT] 💾 BEFORE ARCHIVING: 1371 jobs in database
[2026-01-06T17:41:48.312Z] [BOT] ✅ No jobs to archive (all 1371 jobs within 7-day window)
[2026-01-06T17:41:48.322Z] [BOT] 💾 Saved posted_jobs.json: 1371 active jobs
[2026-01-06T17:41:48.322Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T17:41:51.323Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-06T17:41:51.323Z] [BOT] ⏭️  Skipping duplicate: JID_655cfbb9-specialist_r-00172970 (posted within 7 days)
[2026-01-06T17:41:51.323Z] [BOT] ⏭️  Skipping duplicate: JID_fb69dbe6-icfexternal_career_site-JID_8dbb479e-researcher_r2600017 (posted within 7 days)
[2026-01-06T17:41:51.325Z] [BOT] ✅ Loaded pending queue: 49 total (29 pending, 20 enriched, 0 posted)
[2026-01-06T17:41:51.328Z] [BOT] ✅ Saved pending queue: 49 total (29 pending, 18 enriched, 2 posted)
[2026-01-06T17:41:51.328Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T17:41:51.383Z] [BOT] 📂 Loaded 2298 existing routing entries
[2026-01-06T17:41:51.442Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2300
[2026-01-06T17:41:51.442Z] [BOT] Timestamp: 2026-01-06T17:41:51.431Z
[2026-01-06T17:41:51.446Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
   Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・remote-usa: 2 posts
     2. #📁・JID_e938df7b: 1 posts
     3. #🤖・ai-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-06T17:41:53.457Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3042) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*