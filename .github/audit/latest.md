# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T18:46:54.459Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 16
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T18:46:24.424Z] ========================================
[2026-01-06T18:46:24.426Z] Discord Bot Execution Log
[2026-01-06T18:46:24.426Z] Environment: GitHub Actions
[2026-01-06T18:46:24.426Z] Node Version: v20.19.6
[2026-01-06T18:46:24.426Z] ========================================
[2026-01-06T18:46:24.426Z] Environment Variables Check:
[2026-01-06T18:46:24.426Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T18:46:24.426Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T18:46:24.427Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T18:46:24.427Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T18:46:24.427Z] 
Multi-Channel Configuration:
[2026-01-06T18:46:24.427Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T18:46:24.427Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T18:46:24.427Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T18:46:24.427Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T18:46:24.427Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T18:46:24.427Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T18:46:24.427Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T18:46:24.427Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T18:46:24.427Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T18:46:24.428Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T18:46:24.428Z] 
Data Files Check:
[2026-01-06T18:46:24.429Z] .github/data/new_jobs.json: ✅ Exists (10 items, 127215 bytes)
[2026-01-06T18:46:24.434Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 701389 bytes)
[2026-01-06T18:46:24.434Z] 
========================================
[2026-01-06T18:46:24.434Z] Starting Enhanced Discord Bot...
[2026-01-06T18:46:24.434Z] ========================================
[2026-01-06T18:46:24.964Z] [BOT] ✅ Loaded V2 database: 1372 jobs
[2026-01-06T18:46:25.762Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T18:46:25.762Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T18:46:25.762Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T18:46:25.767Z] [BOT] ✅ Loaded pending queue: 54 total (34 pending, 20 enriched, 0 posted)
[2026-01-06T18:46:25.767Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: People Analyst II at datadog
[2026-01-06T18:46:25.769Z] [BOT] ⏭️  Skipping duplicate: JID_f7d9cbb1 (posted within 7 days)
[2026-01-06T18:46:25.769Z] [BOT] ⏭️ Skipping already posted: ROLE_e42d6991 at figma
[2026-01-06T18:46:25.769Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-06T18:46:25.769Z] [BOT] ⏭️  Skipping duplicate: JID_c3c61d5c (posted within 7 days)
[2026-01-06T18:46:25.769Z] [BOT] ⏭️ Skipping already posted: Staff Software Engineer, Storage at reddit
[2026-01-06T18:46:25.770Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_655cfbb9-specialist_r-00172970 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0ebc6431 at Leidos
[2026-01-06T18:46:25.770Z] [BOT] ⏭️  Skipping duplicate: JID_fb69dbe6-icfexternal_career_site-JID_8dbb479e-researcher_r2600017 (posted within 7 days)
⏭️ Skipping already posted: ROLE_13d2701c at ICF International
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-06T18:46:25.770Z] [BOT] ⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
⏭️ Skipping already posted: AI Machine Learning Engineer 2 at Cisco
⏭️  Skipping duplicate: JID_38c7271e (posted within 7 days)
⏭️ Skipping already posted: ROLE_2237147a at Shiftsmart
[2026-01-06T18:46:25.770Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-06T18:46:25.770Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
[2026-01-06T18:46:25.771Z] [BOT] ⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T18:46:25.771Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T18:46:25.771Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T18:46:25.771Z] [BOT] ⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
[2026-01-06T18:46:25.771Z] [BOT] ⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Cloud Growth at Temporal Technologies
📬 Found 4 new jobs (16 already posted)...
[2026-01-06T18:46:25.771Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
[2026-01-06T18:46:25.771Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2026-01-06T18:46:25.772Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-06T18:46:25.772Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T18:46:25.776Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-06T18:46:25.777Z] [BOT] 📍 [ROUTING] "People Analyst II" @ datadog
[2026-01-06T18:46:25.777Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-06T18:46:25.781Z] [BOT ERROR] (node:2721) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T18:46:25.989Z] [BOT] ✅ Created forum post: 🏢 People Analyst II @ datadog in #📣・marketing-jobs
  ✅ Industry: People Analyst II @ datadog
[2026-01-06T18:46:27.722Z] [BOT] ✅ Created forum post: 🏢 People Analyst II @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-06T18:46:29.223Z] [BOT] 💾 Marked as posted: People Analyst II @ datadog (instance #1)
[2026-01-06T18:46:29.223Z] [BOT] 💾 BEFORE ARCHIVING: 1373 jobs in database
[2026-01-06T18:46:29.224Z] [BOT] ✅ No jobs to archive (all 1373 jobs within 7-day window)
[2026-01-06T18:46:29.239Z] [BOT] 💾 Saved posted_jobs.json: 1373 active jobs
[2026-01-06T18:46:29.240Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T18:46:32.241Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-06T18:46:32.241Z] [BOT] 📍 [ROUTING] "Internal Communications Program Manager" @ datadog
[2026-01-06T18:46:32.241Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-06T18:46:32.548Z] [BOT] ✅ Created forum post: 🏢 Internal Communications Program Manager @ datadog in #📊・JID_9910249a
[2026-01-06T18:46:32.548Z] [BOT] ✅ Industry: Internal Communications Program Manager @ datadog
[2026-01-06T18:46:34.221Z] [BOT] ✅ Created forum post: 🏢 Internal Communications Program Manager @ datadog in #🗽・new-york
[2026-01-06T18:46:34.222Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-06T18:46:35.723Z] [BOT] 💾 Marked as posted: Internal Communications Program Manager @ datadog (instance #1)
[2026-01-06T18:46:35.723Z] [BOT] 💾 BEFORE ARCHIVING: 1374 jobs in database
[2026-01-06T18:46:35.725Z] [BOT] ✅ No jobs to archive (all 1374 jobs within 7-day window)
[2026-01-06T18:46:35.735Z] [BOT] 💾 Saved posted_jobs.json: 1374 active jobs
[2026-01-06T18:46:35.735Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T18:46:38.735Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-06T18:46:38.738Z] [BOT] 📍 [ROUTING] "Application Security Engineer" @ anthropic
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T18:46:38.973Z] [BOT] ✅ Created forum post: 🏢 Application Security Engineer @ anthropic in #💻・tech-jobs
  ✅ Industry: Application Security Engineer @ anthropic
[2026-01-06T18:46:40.639Z] [BOT] ✅ Created forum post: 🏢 Application Security Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T18:46:42.140Z] [BOT] 💾 Marked as posted: Application Security Engineer @ anthropic (instance #1)
[2026-01-06T18:46:42.141Z] [BOT] 💾 BEFORE ARCHIVING: 1375 jobs in database
[2026-01-06T18:46:42.142Z] [BOT] ✅ No jobs to archive (all 1375 jobs within 7-day window)
[2026-01-06T18:46:42.152Z] [BOT] 💾 Saved posted_jobs.json: 1375 active jobs
[2026-01-06T18:46:42.152Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T18:46:45.153Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-06T18:46:45.154Z] [BOT] 📍 [ROUTING] "Engineering Manager II - Personalization" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-06T18:46:45.154Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-06T18:46:45.468Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager II - Personalization @ spotify in #🤖・ai-jobs
[2026-01-06T18:46:45.469Z] [BOT] ✅ Industry: Engineering Manager II - Personalization @ spotify
[2026-01-06T18:46:47.155Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager II - Personalization @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-06T18:46:48.655Z] [BOT] 💾 Marked as posted: Engineering Manager II - Personalization @ spotify (instance #1)
[2026-01-06T18:46:48.656Z] [BOT] 💾 BEFORE ARCHIVING: 1376 jobs in database
[2026-01-06T18:46:48.657Z] [BOT] ✅ No jobs to archive (all 1376 jobs within 7-day window)
[2026-01-06T18:46:48.667Z] [BOT] 💾 Saved posted_jobs.json: 1376 active jobs
[2026-01-06T18:46:48.667Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T18:46:51.668Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-06T18:46:51.668Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
[2026-01-06T18:46:51.668Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
[2026-01-06T18:46:51.669Z] [BOT] ⏭️  Skipping duplicate: JID_f82e6a29 (posted within 7 days)
[2026-01-06T18:46:51.669Z] [BOT] ⏭️  Skipping duplicate: JID_b7f472ec (posted within 7 days)
[2026-01-06T18:46:51.671Z] [BOT] ✅ Loaded pending queue: 54 total (34 pending, 20 enriched, 0 posted)
[2026-01-06T18:46:51.675Z] [BOT] ✅ Saved pending queue: 54 total (34 pending, 16 enriched, 4 posted)
[2026-01-06T18:46:51.675Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T18:46:51.736Z] [BOT] 📂 Loaded 2301 existing routing entries
[2026-01-06T18:46:51.792Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-06T18:46:51.792Z] [BOT] Total entries: 2305
   Timestamp: 2026-01-06T18:46:51.780Z
[2026-01-06T18:46:51.793Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T18:46:51.793Z] [BOT] Total attempts: 24
   Successful: 8
   Failed: 0
   Skipped: 16
[2026-01-06T18:46:51.793Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 8
   Channels used: 6
[2026-01-06T18:46:51.793Z] [BOT] Top channels:
     1. #🗽・new-york: 3 posts
     2. #📣・marketing-jobs: 1 posts
     3. #📊・JID_9910249a: 1 posts
[2026-01-06T18:46:51.794Z] [BOT] 4. #💻・tech-jobs: 1 posts
     5. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2026-01-06T18:46:53.805Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2721) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*