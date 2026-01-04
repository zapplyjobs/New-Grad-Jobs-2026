# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T11:24:17.423Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T11:23:21.734Z] ========================================
[2026-01-04T11:23:21.736Z] Discord Bot Execution Log
[2026-01-04T11:23:21.736Z] Environment: GitHub Actions
[2026-01-04T11:23:21.736Z] Node Version: v20.19.6
[2026-01-04T11:23:21.736Z] ========================================
[2026-01-04T11:23:21.736Z] Environment Variables Check:
[2026-01-04T11:23:21.737Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T11:23:21.737Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T11:23:21.737Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T11:23:21.737Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T11:23:21.737Z] 
Multi-Channel Configuration:
[2026-01-04T11:23:21.737Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T11:23:21.737Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T11:23:21.737Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T11:23:21.737Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T11:23:21.737Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T11:23:21.738Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T11:23:21.738Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T11:23:21.738Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T11:23:21.738Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T11:23:21.738Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T11:23:21.738Z] 
Data Files Check:
[2026-01-04T11:23:21.739Z] .github/data/new_jobs.json: ✅ Exists (10 items, 148755 bytes)
[2026-01-04T11:23:21.743Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 523911 bytes)
[2026-01-04T11:23:21.743Z] 
========================================
[2026-01-04T11:23:21.743Z] Starting Enhanced Discord Bot...
[2026-01-04T11:23:21.743Z] ========================================
[2026-01-04T11:23:22.266Z] [BOT] ✅ Loaded V2 database: 1040 jobs
[2026-01-04T11:23:22.706Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T11:23:22.707Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T11:23:22.707Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T11:23:22.708Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T11:23:22.776Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T11:23:22.891Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T11:23:22.894Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T11:23:22.894Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T11:23:22.894Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T11:23:22.895Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T11:23:22.895Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T11:23:22.900Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-04T11:23:22.900Z] [BOT] 📍 [ROUTING] "Support Operations Specialist" @ anthropic
[2026-01-04T11:23:22.900Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-04T11:23:22.918Z] [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T11:23:23.065Z] [BOT] ✅ Created forum post: 🏢 Support Operations Specialist @ anthropic in #📈・JID_fb739488
[2026-01-04T11:23:23.065Z] [BOT] ✅ Industry: Support Operations Specialist @ anthropic
[2026-01-04T11:23:24.895Z] [BOT] ✅ Created forum post: 🏢 Support Operations Specialist @ anthropic in #🌉・san-francisco
[2026-01-04T11:23:24.896Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:23:26.397Z] [BOT] 💾 Marked as posted: Support Operations Specialist @ anthropic (instance #1)
[2026-01-04T11:23:26.397Z] [BOT] 💾 BEFORE ARCHIVING: 1041 jobs in database
[2026-01-04T11:23:26.398Z] [BOT] ✅ No jobs to archive (all 1041 jobs within 7-day window)
[2026-01-04T11:23:26.408Z] [BOT] 💾 Saved posted_jobs.json: 1041 active jobs
[2026-01-04T11:23:26.409Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:23:29.409Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-04T11:23:29.410Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Inference" @ anthropic
[2026-01-04T11:23:29.410Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-04T11:23:29.597Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Inference @ anthropic in #📊・JID_9910249a
[2026-01-04T11:23:29.597Z] [BOT] ✅ Industry: Technical Program Manager, Inference @ anthropic
[2026-01-04T11:23:31.494Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Inference @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:23:32.994Z] [BOT] 💾 Marked as posted: Technical Program Manager, Inference @ anthropic (instance #1)
[2026-01-04T11:23:32.995Z] [BOT] 💾 BEFORE ARCHIVING: 1042 jobs in database
[2026-01-04T11:23:32.995Z] [BOT] ✅ No jobs to archive (all 1042 jobs within 7-day window)
[2026-01-04T11:23:33.003Z] [BOT] 💾 Saved posted_jobs.json: 1042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:23:36.003Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-04T11:23:36.003Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Security" @ anthropic
[2026-01-04T11:23:36.004Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-04T11:23:36.196Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Security @ anthropic in #💻・tech-jobs
  ✅ Industry: Technical Program Manager, Security @ anthropic
[2026-01-04T11:23:37.854Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Security @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:23:39.354Z] [BOT] 💾 Marked as posted: Technical Program Manager, Security @ anthropic (instance #1)
[2026-01-04T11:23:39.355Z] [BOT] 💾 BEFORE ARCHIVING: 1043 jobs in database
[2026-01-04T11:23:39.355Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-04T11:23:39.364Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
[2026-01-04T11:23:39.364Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:23:39.365Z] [BOT] 📍 [ROUTING] "AV Engineer (Contractor)" @ instacart
[2026-01-04T11:23:39.366Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T11:23:39.518Z] [BOT] ✅ Created forum post: 🏢 AV Engineer (Contractor) @ instacart in #💻・tech-jobs
[2026-01-04T11:23:39.518Z] [BOT] ✅ Industry: AV Engineer (Contractor) @ instacart
[2026-01-04T11:23:41.280Z] [BOT] ✅ Created forum post: 🏢 AV Engineer (Contractor) @ instacart in #🌉・san-francisco
[2026-01-04T11:23:41.280Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:23:42.781Z] [BOT] 💾 Marked as posted: AV Engineer (Contractor) @ instacart (instance #1)
[2026-01-04T11:23:42.781Z] [BOT] 💾 BEFORE ARCHIVING: 1044 jobs in database
[2026-01-04T11:23:42.782Z] [BOT] ✅ No jobs to archive (all 1044 jobs within 7-day window)
[2026-01-04T11:23:42.790Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
[2026-01-04T11:23:42.790Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:23:42.791Z] [BOT] 📍 [ROUTING] "Product Designer, AI Models" @ figma
[2026-01-04T11:23:42.791Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T11:23:42.976Z] [BOT] ✅ Created forum post: 🏢 Product Designer, AI Models @ figma in #💻・tech-jobs
  ✅ Industry: Product Designer, AI Models @ figma
[2026-01-04T11:23:44.629Z] [BOT] ✅ Created forum post: 🏢 Product Designer, AI Models @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:23:46.130Z] [BOT] 💾 Marked as posted: Product Designer, AI Models @ figma (instance #1)
[2026-01-04T11:23:46.131Z] [BOT] 💾 BEFORE ARCHIVING: 1045 jobs in database
[2026-01-04T11:23:46.132Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-04T11:23:46.140Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:23:46.140Z] [BOT] 📍 [ROUTING] "Product Designer - Design, Dev, & AI Tools" @ figma
[2026-01-04T11:23:46.140Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T11:23:46.372Z] [BOT] ✅ Created forum post: 🏢 Product Designer - Design, Dev, & AI Tools @ figma in #💻・tech-jobs
  ✅ Industry: Product Designer - Design, Dev, & AI Tools @ figma
[2026-01-04T11:23:48.532Z] [BOT] ✅ Created forum post: 🏢 Product Designer - Design, Dev, & AI Tools @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:23:50.032Z] [BOT] 💾 Marked as posted: Product Designer - Design, Dev, & AI Tools @ figma (instance #1)
[2026-01-04T11:23:50.033Z] [BOT] 💾 BEFORE ARCHIVING: 1046 jobs in database
[2026-01-04T11:23:50.034Z] [BOT] ✅ No jobs to archive (all 1046 jobs within 7-day window)
[2026-01-04T11:23:50.041Z] [BOT] 💾 Saved posted_jobs.json: 1046 active jobs
[2026-01-04T11:23:50.041Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:23:53.043Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-04T11:23:53.043Z] [BOT] 📍 [ROUTING] "TPU Kernel Engineer" @ anthropic
[2026-01-04T11:23:53.043Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T11:23:54.940Z] [BOT] ✅ Created forum post: 🏢 TPU Kernel Engineer @ anthropic in #🤖・ai-jobs
[2026-01-04T11:23:54.940Z] [BOT] ✅ Industry: TPU Kernel Engineer @ anthropic
[2026-01-04T11:23:56.852Z] [BOT] ✅ Created forum post: 🏢 TPU Kernel Engineer @ anthropic in #🌉・san-francisco
[2026-01-04T11:23:56.852Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:23:58.353Z] [BOT] 💾 Marked as posted: TPU Kernel Engineer @ anthropic (instance #1)
[2026-01-04T11:23:58.354Z] [BOT] 💾 BEFORE ARCHIVING: 1047 jobs in database
[2026-01-04T11:23:58.354Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-04T11:23:58.363Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
[2026-01-04T11:23:58.363Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:23:58.363Z] [BOT] 📍 [ROUTING] "Security Engineer" @ nominal
[2026-01-04T11:23:58.363Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T11:23:58.522Z] [BOT] ✅ Created forum post: 🏢 Security Engineer @ nominal in #🤖・ai-jobs
[2026-01-04T11:23:58.522Z] [BOT] ✅ Industry: Security Engineer @ nominal
[2026-01-04T11:24:00.199Z] [BOT] ✅ Created forum post: 🏢 Security Engineer @ nominal in #🗽・new-york
[2026-01-04T11:24:00.199Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T11:24:01.699Z] [BOT] 💾 Marked as posted: Security Engineer @ nominal (instance #1)
[2026-01-04T11:24:01.699Z] [BOT] 💾 BEFORE ARCHIVING: 1048 jobs in database
[2026-01-04T11:24:01.700Z] [BOT] ✅ No jobs to archive (all 1048 jobs within 7-day window)
[2026-01-04T11:24:01.708Z] [BOT] 💾 Saved posted_jobs.json: 1048 active jobs
[2026-01-04T11:24:01.708Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:24:04.708Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-04T11:24:04.708Z] [BOT] 📍 [ROUTING] "Executive Assistant, Marketing & Communications" @ figma
[2026-01-04T11:24:04.708Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:24:05.045Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant, Marketing & Communications @ figma in #💲・sales-jobs
  ✅ Industry: Executive Assistant, Marketing & Communications @ figma
[2026-01-04T11:24:06.731Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant, Marketing & Communications @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:24:08.231Z] [BOT] 💾 Marked as posted: Executive Assistant, Marketing & Communications @ figma (instance #1)
[2026-01-04T11:24:08.232Z] [BOT] 💾 BEFORE ARCHIVING: 1049 jobs in database
[2026-01-04T11:24:08.233Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-04T11:24:08.241Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-04T11:24:08.241Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:24:08.241Z] [BOT] 📍 [ROUTING] "Product Designer, Growth & Monetization" @ figma
[2026-01-04T11:24:08.241Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:24:08.509Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Growth & Monetization @ figma in #💲・sales-jobs
[2026-01-04T11:24:08.509Z] [BOT] ✅ Industry: Product Designer, Growth & Monetization @ figma
[2026-01-04T11:24:10.175Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Growth & Monetization @ figma in #🌉・san-francisco
[2026-01-04T11:24:10.175Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:24:11.675Z] [BOT] 💾 Marked as posted: Product Designer, Growth & Monetization @ figma (instance #1)
[2026-01-04T11:24:11.676Z] [BOT] 💾 BEFORE ARCHIVING: 1050 jobs in database
[2026-01-04T11:24:11.676Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-04T11:24:11.685Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:24:14.685Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T11:24:14.685Z] [BOT] ⏭️  Skipping duplicate: JID_e0dce9a6 (posted within 7 days)
[2026-01-04T11:24:14.685Z] [BOT] ⏭️  Skipping duplicate: JID_45a2177a (posted within 7 days)
[2026-01-04T11:24:14.686Z] [BOT] ⏭️  Skipping duplicate: JID_ae8dd09b (posted within 7 days)
[2026-01-04T11:24:14.686Z] [BOT] ⏭️  Skipping duplicate: JID_b2f8ad02 (posted within 7 days)
[2026-01-04T11:24:14.686Z] [BOT] ⏭️  Skipping duplicate: JID_d8cb55fd (posted within 7 days)
[2026-01-04T11:24:14.686Z] [BOT] ⏭️  Skipping duplicate: JID_305597dd (posted within 7 days)
[2026-01-04T11:24:14.686Z] [BOT] ⏭️  Skipping duplicate: JID_ca830686 (posted within 7 days)
[2026-01-04T11:24:14.686Z] [BOT] ⏭️  Skipping duplicate: JID_731a6fae (posted within 7 days)
[2026-01-04T11:24:14.686Z] [BOT] ⏭️  Skipping duplicate: JID_685300d8 (posted within 7 days)
[2026-01-04T11:24:14.686Z] [BOT] ⏭️  Skipping duplicate: JID_6a802f99 (posted within 7 days)
[2026-01-04T11:24:14.698Z] [BOT] ✅ Loaded pending queue: 250 total (230 pending, 20 enriched, 0 posted)
[2026-01-04T11:24:14.722Z] [BOT] ✅ Saved pending queue: 250 total (230 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-04T11:24:14.723Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T11:24:14.775Z] [BOT] 📂 Loaded 1949 existing routing entries
[2026-01-04T11:24:14.823Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T11:24:14.823Z] [BOT] Total entries: 1959
   Timestamp: 2026-01-04T11:24:14.815Z
[2026-01-04T11:24:14.824Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-04T11:24:14.824Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
[2026-01-04T11:24:14.824Z] [BOT] 1. #🌉・san-francisco: 9 posts
     2. #💻・tech-jobs: 4 posts
     3. #🤖・ai-jobs: 2 posts
     4. #💲・sales-jobs: 2 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-04T11:24:14.825Z] [BOT] [STATS] Channel stats saved
[2026-01-04T11:24:16.837Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*