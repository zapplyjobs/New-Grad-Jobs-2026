# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T22:26:37.588Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T22:25:43.209Z] ========================================
[2026-01-12T22:25:43.211Z] Discord Bot Execution Log
[2026-01-12T22:25:43.211Z] Environment: GitHub Actions
[2026-01-12T22:25:43.211Z] Node Version: v20.19.6
[2026-01-12T22:25:43.211Z] ========================================
[2026-01-12T22:25:43.211Z] Environment Variables Check:
[2026-01-12T22:25:43.211Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T22:25:43.211Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T22:25:43.211Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T22:25:43.211Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T22:25:43.211Z] 
Multi-Channel Configuration:
[2026-01-12T22:25:43.212Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T22:25:43.212Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T22:25:43.212Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T22:25:43.212Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T22:25:43.212Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T22:25:43.212Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T22:25:43.212Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T22:25:43.212Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T22:25:43.212Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T22:25:43.212Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T22:25:43.212Z] 
Data Files Check:
[2026-01-12T22:25:43.214Z] .github/data/new_jobs.json: ✅ Exists (10 items, 170061 bytes)
[2026-01-12T22:25:43.216Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 306149 bytes)
[2026-01-12T22:25:43.216Z] 
========================================
[2026-01-12T22:25:43.216Z] Starting Enhanced Discord Bot...
[2026-01-12T22:25:43.216Z] ========================================
[2026-01-12T22:25:43.669Z] [BOT] ✅ Loaded V2 database: 567 jobs
[2026-01-12T22:25:44.258Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T22:25:44.258Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T22:25:44.258Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T22:25:44.402Z] [BOT] ✅ Loaded pending queue: 2658 total (2638 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Client Account Manager, Mid-Market (B2B Services) at reddit
[2026-01-12T22:25:44.404Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T22:25:44.404Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T22:25:44.404Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T22:25:44.405Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-12T22:25:44.405Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T22:25:44.409Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-12T22:25:44.409Z] [BOT] 📍 [ROUTING] "Client Account Manager, Mid-Market (B2B Services)" @ reddit
[2026-01-12T22:25:44.410Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-12T22:25:44.414Z] [BOT ERROR] (node:2439) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T22:25:45.143Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Mid-Market (B2B Services) @ reddit in #🤖・ai-jobs
[2026-01-12T22:25:45.143Z] [BOT] ✅ Industry: Client Account Manager, Mid-Market (B2B Services) @ reddit
[2026-01-12T22:25:46.932Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Mid-Market (B2B Services) @ reddit in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:25:48.433Z] [BOT] 💾 Marked as posted: Client Account Manager, Mid-Market (B2B Services) @ reddit (instance #1)
💾 BEFORE ARCHIVING: 568 jobs in database
[2026-01-12T22:25:48.433Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T22:25:48.436Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-12T22:25:48.437Z] [BOT] ✅ Archiving complete: 1 archived, 567 active
[2026-01-12T22:25:48.441Z] [BOT] 💾 Saved posted_jobs.json: 567 active jobs
[2026-01-12T22:25:48.441Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:25:48.441Z] [BOT] 📍 [ROUTING] "Partner Solutions Architect, Applied AI" @ anthropic
[2026-01-12T22:25:48.442Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-12T22:25:48.736Z] [BOT] ✅ Created forum post: 🏢 Partner Solutions Architect, Applied AI @ anthropic in #🤖・ai-jobs
[2026-01-12T22:25:48.736Z] [BOT] ✅ Industry: Partner Solutions Architect, Applied AI @ anthropic
[2026-01-12T22:25:50.418Z] [BOT] ✅ Created forum post: 🏢 Partner Solutions Architect, Applied AI @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:25:51.918Z] [BOT] 💾 Marked as posted: Partner Solutions Architect, Applied AI @ anthropic (instance #1)
[2026-01-12T22:25:51.919Z] [BOT] 💾 BEFORE ARCHIVING: 568 jobs in database
[2026-01-12T22:25:51.919Z] [BOT] ✅ No jobs to archive (all 568 jobs within 7-day window)
[2026-01-12T22:25:51.923Z] [BOT] 💾 Saved posted_jobs.json: 568 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:25:51.923Z] [BOT] 📍 [ROUTING] "Forward Deployed Engineer" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-12T22:25:51.924Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T22:25:52.242Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Engineer @ anthropic in #🤖・ai-jobs
  ✅ Industry: Forward Deployed Engineer @ anthropic
[2026-01-12T22:25:53.999Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:25:55.499Z] [BOT] 💾 Marked as posted: Forward Deployed Engineer @ anthropic (instance #1)
[2026-01-12T22:25:55.499Z] [BOT] 💾 BEFORE ARCHIVING: 569 jobs in database
[2026-01-12T22:25:55.499Z] [BOT] ✅ No jobs to archive (all 569 jobs within 7-day window)
[2026-01-12T22:25:55.504Z] [BOT] 💾 Saved posted_jobs.json: 569 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:25:55.506Z] [BOT] 📍 [ROUTING] "Engineering Manager, Product Platform & Accounts Platform" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-12T22:25:55.506Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T22:25:55.718Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Product Platform & Accounts Platform @ anthropic in #🤖・ai-jobs
  ✅ Industry: Engineering Manager, Product Platform & Accounts Platform @ anthropic
[2026-01-12T22:25:57.411Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Product Platform & Accounts Platform @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:25:58.910Z] [BOT] 💾 Marked as posted: Engineering Manager, Product Platform & Accounts Platform @ anthropic (instance #1)
[2026-01-12T22:25:58.910Z] [BOT] 💾 BEFORE ARCHIVING: 570 jobs in database
[2026-01-12T22:25:58.911Z] [BOT] ✅ No jobs to archive (all 570 jobs within 7-day window)
[2026-01-12T22:25:58.915Z] [BOT] 💾 Saved posted_jobs.json: 570 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:25:58.916Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Activation" @ brex
   Category: AI (matched: "AI/ML")
[2026-01-12T22:25:58.916Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T22:25:59.158Z] [BOT] ✅ Created forum post: 🏢 Senior Engineering Manager, Activation @ brex in #🤖・ai-jobs
  ✅ Industry: Senior Engineering Manager, Activation @ brex
[2026-01-12T22:26:00.895Z] [BOT] ✅ Created forum post: 🏢 Senior Engineering Manager, Activation @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:26:02.396Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Activation @ brex (instance #1)
[2026-01-12T22:26:02.397Z] [BOT] 💾 BEFORE ARCHIVING: 571 jobs in database
[2026-01-12T22:26:02.397Z] [BOT] ✅ No jobs to archive (all 571 jobs within 7-day window)
[2026-01-12T22:26:02.402Z] [BOT] 💾 Saved posted_jobs.json: 571 active jobs
[2026-01-12T22:26:02.402Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:26:05.403Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-12T22:26:05.403Z] [BOT] 📍 [ROUTING] "Staff Product Manager, Growth & SEO" @ discord
   Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-12T22:26:05.801Z] [BOT] ✅ Created forum post: 🏢 Staff Product Manager, Growth & SEO @ discord in #📦・product-jobs
[2026-01-12T22:26:05.801Z] [BOT] ✅ Industry: Staff Product Manager, Growth & SEO @ discord
[2026-01-12T22:26:07.457Z] [BOT] ✅ Created forum post: 🏢 Staff Product Manager, Growth & SEO @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:26:08.958Z] [BOT] 💾 Marked as posted: Staff Product Manager, Growth & SEO @ discord (instance #1)
💾 BEFORE ARCHIVING: 572 jobs in database
[2026-01-12T22:26:08.958Z] [BOT] ✅ No jobs to archive (all 572 jobs within 7-day window)
[2026-01-12T22:26:08.964Z] [BOT] 💾 Saved posted_jobs.json: 572 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:26:11.964Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
📍 [ROUTING] "Vercel Development Representative, Majors, v0" @ vercel
[2026-01-12T22:26:11.964Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T22:26:12.240Z] [BOT] ✅ Created forum post: 🏢 Vercel Development Representative, Majors, v0 @ vercel in #💲・sales-jobs
[2026-01-12T22:26:12.240Z] [BOT] ✅ Industry: Vercel Development Representative, Majors, v0 @ vercel
[2026-01-12T22:26:14.011Z] [BOT] ✅ Created forum post: 🏢 Vercel Development Representative, Majors, v0 @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:26:15.511Z] [BOT] 💾 Marked as posted: Vercel Development Representative, Majors, v0 @ vercel (instance #1)
💾 BEFORE ARCHIVING: 573 jobs in database
[2026-01-12T22:26:15.511Z] [BOT] ✅ No jobs to archive (all 573 jobs within 7-day window)
[2026-01-12T22:26:15.516Z] [BOT] 💾 Saved posted_jobs.json: 573 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:26:15.516Z] [BOT] 📍 [ROUTING] "Staff Economist" @ brex
[2026-01-12T22:26:15.516Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T22:26:15.833Z] [BOT] ✅ Created forum post: 🏢 Staff Economist @ brex in #💲・sales-jobs
[2026-01-12T22:26:15.833Z] [BOT] ✅ Industry: Staff Economist @ brex
[2026-01-12T22:26:17.664Z] [BOT] ✅ Created forum post: 🏢 Staff Economist @ brex in #🗽・new-york
[2026-01-12T22:26:17.664Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T22:26:19.163Z] [BOT] 💾 Marked as posted: Staff Economist @ brex (instance #1)
[2026-01-12T22:26:19.164Z] [BOT] 💾 BEFORE ARCHIVING: 574 jobs in database
[2026-01-12T22:26:19.164Z] [BOT] ✅ No jobs to archive (all 574 jobs within 7-day window)
[2026-01-12T22:26:19.169Z] [BOT] 💾 Saved posted_jobs.json: 574 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:26:22.169Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-12T22:26:22.170Z] [BOT] 📍 [ROUTING] "Analytics Data Engineer" @ anthropic
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-12T22:26:22.170Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T22:26:22.821Z] [BOT] ✅ Created forum post: 🏢 Analytics Data Engineer @ anthropic in #📈・JID_fb739488
  ✅ Industry: Analytics Data Engineer @ anthropic
[2026-01-12T22:26:26.212Z] [BOT] ✅ Created forum post: 🏢 Analytics Data Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:26:27.713Z] [BOT] 💾 Marked as posted: Analytics Data Engineer @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 575 jobs in database
[2026-01-12T22:26:27.713Z] [BOT] ✅ No jobs to archive (all 575 jobs within 7-day window)
[2026-01-12T22:26:27.718Z] [BOT] 💾 Saved posted_jobs.json: 575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:26:27.718Z] [BOT] 📍 [ROUTING] "Cross-functional Prompt Engineer" @ anthropic
[2026-01-12T22:26:27.719Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T22:26:27.907Z] [BOT] ✅ Created forum post: 🏢 Cross-functional Prompt Engineer @ anthropic in #📈・JID_fb739488
  ✅ Industry: Cross-functional Prompt Engineer @ anthropic
[2026-01-12T22:26:29.894Z] [BOT] ✅ Created forum post: 🏢 Cross-functional Prompt Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:26:31.396Z] [BOT] 💾 Marked as posted: Cross-functional Prompt Engineer @ anthropic (instance #1)
[2026-01-12T22:26:31.396Z] [BOT] 💾 BEFORE ARCHIVING: 576 jobs in database
[2026-01-12T22:26:31.396Z] [BOT] ✅ No jobs to archive (all 576 jobs within 7-day window)
[2026-01-12T22:26:31.401Z] [BOT] 💾 Saved posted_jobs.json: 576 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:26:34.402Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T22:26:34.403Z] [BOT] ⏭️  Skipping duplicate: JID_9f055210 (posted within 7 days)
⏭️  Skipping duplicate: JID_90fbb5bf (posted within 7 days)
⏭️  Skipping duplicate: JID_21e304e2 (posted within 7 days)
⏭️  Skipping duplicate: JID_0ab0ba0f (posted within 7 days)
⏭️  Skipping duplicate: JID_d4f45886 (posted within 7 days)
⏭️  Skipping duplicate: JID_a5422c25 (posted within 7 days)
[2026-01-12T22:26:34.403Z] [BOT] ⏭️  Skipping duplicate: JID_8a8316ad (posted within 7 days)
⏭️  Skipping duplicate: JID_eb557646 (posted within 7 days)
[2026-01-12T22:26:34.403Z] [BOT] ⏭️  Skipping duplicate: JID_f257189a (posted within 7 days)
[2026-01-12T22:26:34.404Z] [BOT] ⏭️  Skipping duplicate: JID_97a7cfc5 (posted within 7 days)
[2026-01-12T22:26:34.554Z] [BOT] ✅ Loaded pending queue: 2658 total (2638 pending, 20 enriched, 0 posted)
[2026-01-12T22:26:34.712Z] [BOT] ✅ Saved pending queue: 2658 total (2638 pending, 10 enriched, 10 posted)
[2026-01-12T22:26:34.712Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T22:26:34.765Z] [BOT] 📂 Loaded 2730 existing routing entries
[2026-01-12T22:26:34.818Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2740
   Timestamp: 2026-01-12T22:26:34.809Z
[2026-01-12T22:26:34.819Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T22:26:34.819Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-12T22:26:34.819Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T22:26:34.819Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 6
[2026-01-12T22:26:34.819Z] [BOT] Top channels:
[2026-01-12T22:26:34.820Z] [BOT] 1. #🌉・san-francisco: 9 posts
     2. #🤖・ai-jobs: 5 posts
     3. #💲・sales-jobs: 2 posts
[2026-01-12T22:26:34.820Z] [BOT] 4. #📈・JID_fb739488: 2 posts
     5. #📦・product-jobs: 1 posts
[2026-01-12T22:26:34.820Z] [BOT] [STATS] Channel stats saved
[2026-01-12T22:26:36.837Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2439) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*