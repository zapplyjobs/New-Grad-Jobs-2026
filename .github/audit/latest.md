# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T22:52:58.910Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 17
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T22:52:35.454Z] ========================================
[2026-01-06T22:52:35.456Z] Discord Bot Execution Log
[2026-01-06T22:52:35.456Z] Environment: GitHub Actions
[2026-01-06T22:52:35.456Z] Node Version: v20.19.6
[2026-01-06T22:52:35.456Z] ========================================
[2026-01-06T22:52:35.456Z] Environment Variables Check:
[2026-01-06T22:52:35.456Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T22:52:35.457Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T22:52:35.457Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T22:52:35.457Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T22:52:35.457Z] 
Multi-Channel Configuration:
[2026-01-06T22:52:35.457Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T22:52:35.457Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T22:52:35.457Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T22:52:35.457Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T22:52:35.457Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T22:52:35.457Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T22:52:35.457Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T22:52:35.458Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T22:52:35.458Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T22:52:35.458Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T22:52:35.458Z] 
Data Files Check:
[2026-01-06T22:52:35.459Z] .github/data/new_jobs.json: ✅ Exists (10 items, 168952 bytes)
[2026-01-06T22:52:35.465Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 706858 bytes)
[2026-01-06T22:52:35.465Z] 
========================================
[2026-01-06T22:52:35.465Z] Starting Enhanced Discord Bot...
[2026-01-06T22:52:35.465Z] ========================================
[2026-01-06T22:52:36.020Z] [BOT] ✅ Loaded V2 database: 1383 jobs
[2026-01-06T22:52:36.521Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T22:52:36.521Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T22:52:36.522Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T22:52:36.527Z] [BOT] ✅ Loaded pending queue: 61 total (41 pending, 20 enriched, 0 posted)
[2026-01-06T22:52:36.527Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Data Scientist, Analytics - Growth/SEO at discord
[2026-01-06T22:52:36.529Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-06T22:52:36.529Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer - Claude Code at anthropic
[2026-01-06T22:52:36.529Z] [BOT] ⏭️  Skipping duplicate: JID_78c05d9c (posted within 7 days)
⏭️ Skipping already posted: ROLE_fe88b457 at anthropic
[2026-01-06T22:52:36.529Z] [BOT] ⏭️  Skipping duplicate: JID_617408df (posted within 7 days)
[2026-01-06T22:52:36.529Z] [BOT] ⏭️ Skipping already posted: Enterprise Education Specialist (Contract) at anthropic
[2026-01-06T22:52:36.529Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_65cdf179 (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Claude Developer Platform at anthropic
⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
[2026-01-06T22:52:36.530Z] [BOT] ⏭️ Skipping already posted: Director of UI Engineering, Claude Consumer Products at anthropic
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-06T22:52:36.530Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-06T22:52:36.530Z] [BOT] ⏭️  Skipping duplicate: JID_f82e6a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_58385d7a at anthropic
[2026-01-06T22:52:36.530Z] [BOT] ⏭️  Skipping duplicate: JID_f7d9cbb1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_e42d6991 at figma
[2026-01-06T22:52:36.530Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
⏭️  Skipping duplicate: JID_b7f472ec (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager II - Personalization at spotify
[2026-01-06T22:52:36.530Z] [BOT] ⏭️  Skipping duplicate: JID_c3c61d5c (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Storage at reddit
[2026-01-06T22:52:36.530Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_655cfbb9-specialist_r-00172970 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0ebc6431 at Leidos
[2026-01-06T22:52:36.531Z] [BOT] ⏭️  Skipping duplicate: JID_fb69dbe6-icfexternal_career_site-JID_8dbb479e-researcher_r2600017 (posted within 7 days)
⏭️ Skipping already posted: ROLE_13d2701c at ICF International
[2026-01-06T22:52:36.531Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-06T22:52:36.531Z] [BOT] 📬 Found 3 new jobs (17 already posted)...
[2026-01-06T22:52:36.531Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2026-01-06T22:52:36.531Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-06T22:52:36.531Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-06T22:52:36.532Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T22:52:36.536Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-06T22:52:36.537Z] [BOT] 📍 [ROUTING] "Senior Data Scientist, Analytics - Growth/SEO" @ discord
[2026-01-06T22:52:36.537Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-06T22:52:36.541Z] [BOT ERROR] (node:2641) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T22:52:37.012Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Analytics - Growth/SEO @ discord in #📈・JID_fb739488
  ✅ Industry: Senior Data Scientist, Analytics - Growth/SEO @ discord
[2026-01-06T22:52:38.748Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Analytics - Growth/SEO @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T22:52:40.248Z] [BOT] 💾 Marked as posted: Senior Data Scientist, Analytics - Growth/SEO @ discord (instance #1)
[2026-01-06T22:52:40.248Z] [BOT] 💾 BEFORE ARCHIVING: 1384 jobs in database
[2026-01-06T22:52:40.250Z] [BOT] ✅ No jobs to archive (all 1384 jobs within 7-day window)
[2026-01-06T22:52:40.267Z] [BOT] 💾 Saved posted_jobs.json: 1384 active jobs
[2026-01-06T22:52:40.268Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T22:52:43.269Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-06T22:52:43.270Z] [BOT] 📍 [ROUTING] "Administrative Business Partner" @ dropbox
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T22:52:43.545Z] [BOT] ✅ Created forum post: 🏢 Administrative Business Partner @ dropbox in #💻・tech-jobs
[2026-01-06T22:52:43.545Z] [BOT] ✅ Industry: Administrative Business Partner @ dropbox
[2026-01-06T22:52:45.243Z] [BOT] ✅ Created forum post: 🏢 Administrative Business Partner @ dropbox in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T22:52:46.744Z] [BOT] 💾 Marked as posted: Administrative Business Partner @ dropbox (instance #1)
[2026-01-06T22:52:46.744Z] [BOT] 💾 BEFORE ARCHIVING: 1385 jobs in database
[2026-01-06T22:52:46.745Z] [BOT] ✅ No jobs to archive (all 1385 jobs within 7-day window)
[2026-01-06T22:52:46.755Z] [BOT] 💾 Saved posted_jobs.json: 1385 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T22:52:49.756Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-06T22:52:49.757Z] [BOT] 📍 [ROUTING] "Client Account Manager, Mid-Market (B2B Services)" @ reddit
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-06T22:52:49.757Z] [BOT] ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-06T22:52:49.951Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Mid-Market (B2B Services) @ reddit in #🤖・ai-jobs
[2026-01-06T22:52:49.952Z] [BOT] ✅ Industry: Client Account Manager, Mid-Market (B2B Services) @ reddit
[2026-01-06T22:52:51.631Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Mid-Market (B2B Services) @ reddit in #🗽・new-york
[2026-01-06T22:52:51.631Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-06T22:52:53.132Z] [BOT] 💾 Marked as posted: Client Account Manager, Mid-Market (B2B Services) @ reddit (instance #1)
[2026-01-06T22:52:53.132Z] [BOT] 💾 BEFORE ARCHIVING: 1386 jobs in database
[2026-01-06T22:52:53.133Z] [BOT] ✅ No jobs to archive (all 1386 jobs within 7-day window)
[2026-01-06T22:52:53.144Z] [BOT] 💾 Saved posted_jobs.json: 1386 active jobs
[2026-01-06T22:52:53.144Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T22:52:56.144Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-06T22:52:56.145Z] [BOT] ⏭️  Skipping duplicate: JID_b8474f61 (posted within 7 days)
[2026-01-06T22:52:56.145Z] [BOT] ⏭️  Skipping duplicate: JID_220d5816 (posted within 7 days)
[2026-01-06T22:52:56.145Z] [BOT] ⏭️  Skipping duplicate: JID_4f5bc67c (posted within 7 days)
[2026-01-06T22:52:56.147Z] [BOT] ✅ Loaded pending queue: 61 total (41 pending, 20 enriched, 0 posted)
[2026-01-06T22:52:56.153Z] [BOT] ✅ Saved pending queue: 61 total (41 pending, 17 enriched, 3 posted)
[2026-01-06T22:52:56.153Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T22:52:56.207Z] [BOT] 📂 Loaded 2312 existing routing entries
[2026-01-06T22:52:56.272Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-06T22:52:56.273Z] [BOT] Total entries: 2315
   Timestamp: 2026-01-06T22:52:56.256Z
[2026-01-06T22:52:56.273Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
   Total attempts: 23
   Successful: 6
   Failed: 0
   Skipped: 17
[2026-01-06T22:52:56.274Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 5
   Top channels:
[2026-01-06T22:52:56.274Z] [BOT] 1. #🌉・san-francisco: 2 posts
     2. #📈・JID_fb739488: 1 posts
     3. #💻・tech-jobs: 1 posts
     4. #🤖・ai-jobs: 1 posts
     5. #🗽・new-york: 1 posts
[2026-01-06T22:52:56.274Z] [BOT] [STATS] Channel stats saved
[2026-01-06T22:52:58.286Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2641) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*