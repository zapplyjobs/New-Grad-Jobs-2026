# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T23:52:23.345Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 15
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T23:51:54.043Z] ========================================
[2026-01-08T23:51:54.045Z] Discord Bot Execution Log
[2026-01-08T23:51:54.045Z] Environment: GitHub Actions
[2026-01-08T23:51:54.045Z] Node Version: v20.19.6
[2026-01-08T23:51:54.045Z] ========================================
[2026-01-08T23:51:54.045Z] Environment Variables Check:
[2026-01-08T23:51:54.045Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T23:51:54.045Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T23:51:54.045Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T23:51:54.045Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T23:51:54.045Z] 
Multi-Channel Configuration:
[2026-01-08T23:51:54.046Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T23:51:54.046Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T23:51:54.046Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T23:51:54.046Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T23:51:54.046Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T23:51:54.046Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T23:51:54.046Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T23:51:54.046Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T23:51:54.046Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T23:51:54.046Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T23:51:54.046Z] 
Data Files Check:
[2026-01-08T23:51:54.047Z] .github/data/new_jobs.json: ✅ Exists (10 items, 106712 bytes)
[2026-01-08T23:51:54.053Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 758966 bytes)
[2026-01-08T23:51:54.053Z] 
========================================
[2026-01-08T23:51:54.053Z] Starting Enhanced Discord Bot...
[2026-01-08T23:51:54.053Z] ========================================
[2026-01-08T23:51:54.569Z] [BOT] ✅ Loaded V2 database: 1479 jobs
[2026-01-08T23:51:55.214Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T23:51:55.215Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T23:51:55.215Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T23:51:55.227Z] [BOT] ✅ Loaded pending queue: 185 total (165 pending, 20 enriched, 0 posted)
[2026-01-08T23:51:55.228Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer – New College Graduate at Vectra
[2026-01-08T23:51:55.230Z] [BOT] ⏭️  Skipping duplicate: JID_bdba1f64 (posted within 7 days)
[2026-01-08T23:51:55.230Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, Salesforce at brex
[2026-01-08T23:51:55.230Z] [BOT] ⏭️  Skipping duplicate: JID_3653a38b (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, Salesforce at brex
[2026-01-08T23:51:55.230Z] [BOT] ⏭️  Skipping duplicate: JID_19fd3815 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, GTM Engineering  at brex
[2026-01-08T23:51:55.230Z] [BOT] ⏭️  Skipping duplicate: JID_f62ee649 (posted within 7 days)
[2026-01-08T23:51:55.231Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, GTM Engineering  at brex
⏭️  Skipping duplicate: JID_7107faa1 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, GTM Engineering  at brex
⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
[2026-01-08T23:51:55.231Z] [BOT] ⏭️  Skipping duplicate: JID_7d40f03b (posted within 7 days)
⏭️ Skipping already posted: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-01-08T23:51:55.231Z] [BOT] ⏭️  Skipping duplicate: JID_5287f9fe (posted within 7 days)
⏭️ Skipping already posted: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-01-08T23:51:55.231Z] [BOT] ⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer, Applied AI, Digital Natives Business at anthropic
[2026-01-08T23:51:55.231Z] [BOT] ⏭️  Skipping duplicate: JID_0bd523c4 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ebcb7463 at brex
[2026-01-08T23:51:55.231Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
[2026-01-08T23:51:55.232Z] [BOT] ⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-08T23:51:55.232Z] [BOT] ⏭️  Skipping duplicate: JID_b6886da8 (posted within 7 days)
⏭️ Skipping already posted: Data Operations, Product Partnerships at anthropic
[2026-01-08T23:51:55.232Z] [BOT] ⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
[2026-01-08T23:51:55.232Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
📬 Found 5 new jobs (15 already posted)...
[2026-01-08T23:51:55.232Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2026-01-08T23:51:55.232Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-01-08T23:51:55.233Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-08T23:51:55.233Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T23:51:55.235Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-08T23:51:55.236Z] [BOT] 📍 [ROUTING] "Software Engineer – New College Graduate" @ ORG_2bee1653
[2026-01-08T23:51:55.236Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T23:51:55.240Z] [BOT ERROR] (node:2552) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T23:51:55.793Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Graduate @ ORG_2bee1653 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New College Graduate @ ORG_2bee1653
[2026-01-08T23:51:57.884Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Graduate @ ORG_2bee1653 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-08T23:51:59.384Z] [BOT] 💾 Marked as posted: Software Engineer – New College Graduate @ ORG_2bee1653 (instance #1)
[2026-01-08T23:51:59.385Z] [BOT] 💾 BEFORE ARCHIVING: 1480 jobs in database
[2026-01-08T23:51:59.386Z] [BOT] ✅ No jobs to archive (all 1480 jobs within 7-day window)
[2026-01-08T23:51:59.400Z] [BOT] 💾 Saved posted_jobs.json: 1480 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T23:51:59.401Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_332e75fd
[2026-01-08T23:51:59.401Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T23:51:59.659Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_332e75fd in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_332e75fd
[2026-01-08T23:52:01.415Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_332e75fd in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T23:52:02.916Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_332e75fd (instance #1)
[2026-01-08T23:52:02.916Z] [BOT] 💾 BEFORE ARCHIVING: 1481 jobs in database
[2026-01-08T23:52:02.917Z] [BOT] ✅ No jobs to archive (all 1481 jobs within 7-day window)
[2026-01-08T23:52:02.927Z] [BOT] 💾 Saved posted_jobs.json: 1481 active jobs
[2026-01-08T23:52:02.928Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T23:52:02.929Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_a11413b0
[2026-01-08T23:52:02.929Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T23:52:03.156Z] [BOT] ✅ Created forum post: 🔧 Associate Software Engineer @ ORG_a11413b0 in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_a11413b0
[2026-01-08T23:52:04.982Z] [BOT] ✅ Created forum post: 🔧 Associate Software Engineer @ ORG_a11413b0 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-08T23:52:06.484Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_a11413b0 (instance #1)
[2026-01-08T23:52:06.484Z] [BOT] 💾 BEFORE ARCHIVING: 1482 jobs in database
[2026-01-08T23:52:06.485Z] [BOT] ✅ No jobs to archive (all 1482 jobs within 7-day window)
[2026-01-08T23:52:06.495Z] [BOT] 💾 Saved posted_jobs.json: 1482 active jobs
[2026-01-08T23:52:06.495Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T23:52:09.496Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-08T23:52:09.497Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_94a7900a Connect
[2026-01-08T23:52:09.498Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-08T23:52:09.733Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_94a7900a Connect in #🤖・ai-jobs
[2026-01-08T23:52:09.733Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_94a7900a Connect
[2026-01-08T23:52:11.544Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_94a7900a Connect in #💻・remote-usa
[2026-01-08T23:52:11.544Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-08T23:52:13.045Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_94a7900a Connect (instance #1)
[2026-01-08T23:52:13.046Z] [BOT] 💾 BEFORE ARCHIVING: 1483 jobs in database
[2026-01-08T23:52:13.047Z] [BOT] ✅ No jobs to archive (all 1483 jobs within 7-day window)
[2026-01-08T23:52:13.058Z] [BOT] 💾 Saved posted_jobs.json: 1483 active jobs
[2026-01-08T23:52:13.058Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T23:52:13.058Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_7b717950
[2026-01-08T23:52:13.059Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-08T23:52:13.543Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_7b717950 in #🤖・ai-jobs
[2026-01-08T23:52:13.544Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_7b717950
[2026-01-08T23:52:15.430Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_7b717950 in #🌉・san-francisco
[2026-01-08T23:52:15.430Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-08T23:52:16.932Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_7b717950 (instance #1)
[2026-01-08T23:52:16.932Z] [BOT] 💾 BEFORE ARCHIVING: 1484 jobs in database
[2026-01-08T23:52:16.933Z] [BOT] ✅ No jobs to archive (all 1484 jobs within 7-day window)
[2026-01-08T23:52:16.943Z] [BOT] 💾 Saved posted_jobs.json: 1484 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T23:52:19.943Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-08T23:52:19.943Z] [BOT] ⏭️  Skipping duplicate: JID_7cf3eb12 (posted within 7 days)
[2026-01-08T23:52:19.944Z] [BOT] ⏭️  Skipping duplicate: JID_72cf4298-2026_r0055622-1 (posted within 7 days)
[2026-01-08T23:52:19.944Z] [BOT] ⏭️  Skipping duplicate: JID_ff0e5907 (posted within 7 days)
[2026-01-08T23:52:19.944Z] [BOT] ⏭️  Skipping duplicate: JID_bf5593fa (posted within 7 days)
[2026-01-08T23:52:19.944Z] [BOT] ⏭️  Skipping duplicate: JID_18ff52c7 (posted within 7 days)
[2026-01-08T23:52:19.955Z] [BOT] ✅ Loaded pending queue: 185 total (165 pending, 20 enriched, 0 posted)
[2026-01-08T23:52:19.971Z] [BOT] ✅ Saved pending queue: 185 total (165 pending, 15 enriched, 5 posted)
[2026-01-08T23:52:19.972Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T23:52:20.029Z] [BOT] 📂 Loaded 2450 existing routing entries
[2026-01-08T23:52:20.083Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-01-08T23:52:20.083Z] [BOT] Total entries: 2455
   Timestamp: 2026-01-08T23:52:20.072Z
[2026-01-08T23:52:20.084Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
   Total attempts: 25
   Successful: 10
   Failed: 0
   Skipped: 15
[2026-01-08T23:52:20.084Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #💻・remote-usa: 2 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🤠・austin: 1 posts
     5. #🦢・los-angeles: 1 posts
[2026-01-08T23:52:20.085Z] [BOT] [STATS] Channel stats saved
[2026-01-08T23:52:22.098Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2552) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*