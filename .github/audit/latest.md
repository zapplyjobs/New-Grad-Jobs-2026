# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T23:40:46.012Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 12
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T23:40:00.671Z] ========================================
[2026-01-06T23:40:00.673Z] Discord Bot Execution Log
[2026-01-06T23:40:00.673Z] Environment: GitHub Actions
[2026-01-06T23:40:00.673Z] Node Version: v20.19.6
[2026-01-06T23:40:00.673Z] ========================================
[2026-01-06T23:40:00.673Z] Environment Variables Check:
[2026-01-06T23:40:00.673Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T23:40:00.673Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T23:40:00.673Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T23:40:00.673Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T23:40:00.673Z] 
Multi-Channel Configuration:
[2026-01-06T23:40:00.673Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T23:40:00.674Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T23:40:00.674Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T23:40:00.674Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T23:40:00.674Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T23:40:00.674Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T23:40:00.674Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T23:40:00.674Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T23:40:00.674Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T23:40:00.674Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T23:40:00.674Z] 
Data Files Check:
[2026-01-06T23:40:00.675Z] .github/data/new_jobs.json: ✅ Exists (10 items, 111115 bytes)
[2026-01-06T23:40:00.680Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 708815 bytes)
[2026-01-06T23:40:00.680Z] 
========================================
[2026-01-06T23:40:00.681Z] Starting Enhanced Discord Bot...
[2026-01-06T23:40:00.681Z] ========================================
[2026-01-06T23:40:01.218Z] [BOT] ✅ Loaded V2 database: 1387 jobs
[2026-01-06T23:40:01.876Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T23:40:01.876Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T23:40:01.877Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T23:40:01.879Z] [BOT] ✅ Loaded pending queue: 70 total (50 pending, 20 enriched, 0 posted)
[2026-01-06T23:40:01.879Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T23:40:01.879Z] [BOT] [BOT] 🔍 Sample enriched job: Staff Product Manager, Payments at discord
[2026-01-06T23:40:01.882Z] [BOT] ⏭️  Skipping duplicate: JID_7ed7fe99 (posted within 7 days)
[2026-01-06T23:40:01.882Z] [BOT] ⏭️ Skipping already posted: ROLE_593bd0fe at anthropic
[2026-01-06T23:40:01.883Z] [BOT] ⏭️  Skipping duplicate: JID_b8474f61 (posted within 7 days)
⏭️ Skipping already posted: Senior Data Scientist, Analytics - Growth/SEO at discord
⏭️  Skipping duplicate: JID_220d5816 (posted within 7 days)
[2026-01-06T23:40:01.883Z] [BOT] ⏭️ Skipping already posted: ROLE_08ee845d at dropbox
⏭️  Skipping duplicate: JID_4f5bc67c (posted within 7 days)
⏭️ Skipping already posted: Client Account Manager, Mid-Market (B2B Services) at reddit
[2026-01-06T23:40:01.883Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer - Claude Code at anthropic
⏭️  Skipping duplicate: JID_78c05d9c (posted within 7 days)
⏭️ Skipping already posted: ROLE_fe88b457 at anthropic
[2026-01-06T23:40:01.883Z] [BOT] ⏭️  Skipping duplicate: JID_617408df (posted within 7 days)
⏭️ Skipping already posted: Enterprise Education Specialist (Contract) at anthropic
[2026-01-06T23:40:01.883Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-06T23:40:01.883Z] [BOT] ⏭️  Skipping duplicate: JID_65cdf179 (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Claude Developer Platform at anthropic
⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Director of UI Engineering, Claude Consumer Products at anthropic
[2026-01-06T23:40:01.884Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-06T23:40:01.884Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-06T23:40:01.884Z] [BOT] 📬 Found 8 new jobs (12 already posted)...
[2026-01-06T23:40:01.884Z] [BOT] 📋 After blacklist filter: 8 jobs (0 blacklisted)
[2026-01-06T23:40:01.884Z] [BOT] 📋 After data quality filter: 8 jobs (0 invalid)
[2026-01-06T23:40:01.885Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-06T23:40:01.885Z] [BOT] 📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T23:40:01.888Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-06T23:40:01.889Z] [BOT] 📍 [ROUTING] "Staff Product Manager, Payments" @ discord
[2026-01-06T23:40:01.889Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-06T23:40:01.894Z] [BOT ERROR] (node:2382) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T23:40:02.165Z] [BOT] ✅ Created forum post: 🏢 Staff Product Manager, Payments @ discord in #📈・JID_fb739488
[2026-01-06T23:40:02.165Z] [BOT] ✅ Industry: Staff Product Manager, Payments @ discord
[2026-01-06T23:40:03.878Z] [BOT] ✅ Created forum post: 🏢 Staff Product Manager, Payments @ discord in #🌉・san-francisco
[2026-01-06T23:40:03.878Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-06T23:40:05.380Z] [BOT] 💾 Marked as posted: Staff Product Manager, Payments @ discord (instance #1)
[2026-01-06T23:40:05.380Z] [BOT] 💾 BEFORE ARCHIVING: 1388 jobs in database
[2026-01-06T23:40:05.381Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-06T23:40:05.384Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-06T23:40:05.384Z] [BOT] ✅ Archiving complete: 1 archived, 1387 active
[2026-01-06T23:40:05.393Z] [BOT] 💾 Saved posted_jobs.json: 1387 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T23:40:05.394Z] [BOT] 📍 [ROUTING] "Sales Analytics Engineer 1 - IV" @ ORG_aacf2bc5innati Financial
[2026-01-06T23:40:05.394Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-06T23:40:05.658Z] [BOT] ✅ Created forum post: 🏢 Sales Analytics Engineer 1 - IV @ ORG_aacf2bc5innati Financial in #📈・JID_fb739488
[2026-01-06T23:40:05.659Z] [BOT] ✅ Industry: Sales Analytics Engineer 1 - IV @ ORG_aacf2bc5innati Financial
[2026-01-06T23:40:07.519Z] [BOT] ✅ Created forum post: 🏢 Sales Analytics Engineer 1 - IV @ ORG_aacf2bc5innati Financial in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T23:40:09.021Z] [BOT] 💾 Marked as posted: Sales Analytics Engineer 1 - IV @ ORG_aacf2bc5innati Financial (instance #1)
[2026-01-06T23:40:09.021Z] [BOT] 💾 BEFORE ARCHIVING: 1388 jobs in database
[2026-01-06T23:40:09.022Z] [BOT] ✅ No jobs to archive (all 1388 jobs within 7-day window)
[2026-01-06T23:40:09.031Z] [BOT] 💾 Saved posted_jobs.json: 1388 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T23:40:09.032Z] [BOT] 📍 [ROUTING] "Prototype Data Analyst" @ ORG_0555fb46
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-06T23:40:09.032Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-06T23:40:09.784Z] [BOT] ✅ Created forum post: 🏢 Prototype Data Analyst @ ORG_0555fb46 in #📈・JID_fb739488
  ✅ Industry: Prototype Data Analyst @ ORG_0555fb46
[2026-01-06T23:40:11.901Z] [BOT] ✅ Created forum post: 🏢 Prototype Data Analyst @ ORG_0555fb46 in #🦢・los-angeles
[2026-01-06T23:40:11.902Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-06T23:40:13.402Z] [BOT] 💾 Marked as posted: Prototype Data Analyst @ ORG_0555fb46 (instance #1)
[2026-01-06T23:40:13.403Z] [BOT] 💾 BEFORE ARCHIVING: 1389 jobs in database
[2026-01-06T23:40:13.404Z] [BOT] ✅ No jobs to archive (all 1389 jobs within 7-day window)
[2026-01-06T23:40:13.413Z] [BOT] 💾 Saved posted_jobs.json: 1389 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T23:40:16.414Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-06T23:40:16.415Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Industries" @ anthropic
[2026-01-06T23:40:16.415Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-06T23:40:16.784Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Industries @ anthropic in #💲・sales-jobs
[2026-01-06T23:40:16.784Z] [BOT] ✅ Industry: Strategic Account Executive, Industries @ anthropic
[2026-01-06T23:40:18.597Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Industries @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T23:40:20.098Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Industries @ anthropic (instance #1)
[2026-01-06T23:40:20.098Z] [BOT] 💾 BEFORE ARCHIVING: 1390 jobs in database
[2026-01-06T23:40:20.099Z] [BOT] ✅ No jobs to archive (all 1390 jobs within 7-day window)
[2026-01-06T23:40:20.109Z] [BOT] 💾 Saved posted_jobs.json: 1390 active jobs
[2026-01-06T23:40:20.109Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T23:40:20.109Z] [BOT] 📍 [ROUTING] "SMB Account Executive, Industries" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-06T23:40:20.110Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-06T23:40:20.800Z] [BOT] ✅ Created forum post: 🏢 SMB Account Executive, Industries @ anthropic in #💲・sales-jobs
  ✅ Industry: SMB Account Executive, Industries @ anthropic
[2026-01-06T23:40:22.546Z] [BOT] ✅ Created forum post: 🏢 SMB Account Executive, Industries @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T23:40:24.048Z] [BOT] 💾 Marked as posted: SMB Account Executive, Industries @ anthropic (instance #1)
[2026-01-06T23:40:24.048Z] [BOT] 💾 BEFORE ARCHIVING: 1391 jobs in database
[2026-01-06T23:40:24.049Z] [BOT] ✅ No jobs to archive (all 1391 jobs within 7-day window)
[2026-01-06T23:40:24.058Z] [BOT] 💾 Saved posted_jobs.json: 1391 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T23:40:27.060Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-06T23:40:27.060Z] [BOT] 📍 [ROUTING] "Software Developer 1" @ ORG_dc7620eb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T23:40:27.354Z] [BOT] ✅ Created forum post: 🔴 Software Developer 1 @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Software Developer 1 @ ORG_dc7620eb
[2026-01-06T23:40:29.194Z] [BOT] ✅ Created forum post: 🔴 Software Developer 1 @ ORG_dc7620eb in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T23:40:30.695Z] [BOT] 💾 Marked as posted: Software Developer 1 @ ORG_dc7620eb (instance #1)
[2026-01-06T23:40:30.695Z] [BOT] 💾 BEFORE ARCHIVING: 1392 jobs in database
[2026-01-06T23:40:30.696Z] [BOT] ✅ No jobs to archive (all 1392 jobs within 7-day window)
[2026-01-06T23:40:30.706Z] [BOT] 💾 Saved posted_jobs.json: 1392 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T23:40:30.706Z] [BOT] 📍 [ROUTING] "Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Principal Engineer System Protection" @ ORG_6f8a62f0 Hathaway Energy
[2026-01-06T23:40:30.707Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T23:40:31.268Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Princip in #💻・tech-jobs
[2026-01-06T23:40:31.269Z] [BOT] ✅ Industry: Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Principal Engineer System Protection @ ORG_6f8a62f0 Hathaway Energy
[2026-01-06T23:40:32.964Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Princip in #💻・remote-usa
[2026-01-06T23:40:32.964Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-06T23:40:34.466Z] [BOT] 💾 Marked as posted: Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Principal Engineer System Protection @ ORG_6f8a62f0 Hathaway Energy (instance #1)
[2026-01-06T23:40:34.466Z] [BOT] 💾 BEFORE ARCHIVING: 1393 jobs in database
[2026-01-06T23:40:34.467Z] [BOT] ✅ No jobs to archive (all 1393 jobs within 7-day window)
[2026-01-06T23:40:34.478Z] [BOT] 💾 Saved posted_jobs.json: 1393 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T23:40:37.479Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-06T23:40:37.480Z] [BOT] 📍 [ROUTING] "Associate Data Engineer" @ ORG_3db6634d
[2026-01-06T23:40:37.480Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-06T23:40:38.035Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer @ ORG_3db6634d in #🤖・ai-jobs
  ✅ Industry: Associate Data Engineer @ ORG_3db6634d
[2026-01-06T23:40:39.537Z] [BOT] 💾 Marked as posted: Associate Data Engineer @ ORG_3db6634d (instance #1)
[2026-01-06T23:40:39.537Z] [BOT] 💾 BEFORE ARCHIVING: 1394 jobs in database
[2026-01-06T23:40:39.538Z] [BOT] ✅ No jobs to archive (all 1394 jobs within 7-day window)
[2026-01-06T23:40:39.548Z] [BOT] 💾 Saved posted_jobs.json: 1394 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T23:40:42.550Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-06T23:40:42.550Z] [BOT] ⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
[2026-01-06T23:40:42.550Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
[2026-01-06T23:40:42.550Z] [BOT] ⏭️  Skipping duplicate: JID_23521099 (posted within 7 days)
[2026-01-06T23:40:42.551Z] [BOT] ⏭️  Skipping duplicate: JID_5858d9d4 (posted within 7 days)
[2026-01-06T23:40:42.551Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-319271 (posted within 7 days)
[2026-01-06T23:40:42.551Z] [BOT] ⏭️  Skipping duplicate: JID_9d819ca6 (posted within 7 days)
[2026-01-06T23:40:42.551Z] [BOT] ⏭️  Skipping duplicate: JID_b288fb7c (posted within 7 days)
[2026-01-06T23:40:42.551Z] [BOT] ⏭️  Skipping duplicate: JID_b54cc3d5-cx_1-job-10003191 (posted within 7 days)
[2026-01-06T23:40:42.554Z] [BOT] ✅ Loaded pending queue: 70 total (50 pending, 20 enriched, 0 posted)
[2026-01-06T23:40:42.560Z] [BOT] ✅ Saved pending queue: 70 total (50 pending, 12 enriched, 8 posted)
[2026-01-06T23:40:42.560Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T23:40:42.619Z] [BOT] 📂 Loaded 2316 existing routing entries
[2026-01-06T23:40:42.678Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 2324
[2026-01-06T23:40:42.678Z] [BOT] Timestamp: 2026-01-06T23:40:42.667Z
[2026-01-06T23:40:42.679Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T23:40:42.679Z] [BOT] Total attempts: 27
   Successful: 15
   Failed: 0
   Skipped: 12
[2026-01-06T23:40:42.679Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-06T23:40:42.679Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 7
   Top channels:
     1. #📈・JID_fb739488: 3 posts
     2. #🌉・san-francisco: 3 posts
     3. #💻・remote-usa: 3 posts
[2026-01-06T23:40:42.679Z] [BOT] 4. #💲・sales-jobs: 2 posts
     5. #💻・tech-jobs: 2 posts
[2026-01-06T23:40:42.680Z] [BOT] [STATS] Channel stats saved
[2026-01-06T23:40:44.693Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2382) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*