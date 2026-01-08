# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T19:43:22.303Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 15
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T19:42:54.200Z] ========================================
[2026-01-08T19:42:54.202Z] Discord Bot Execution Log
[2026-01-08T19:42:54.202Z] Environment: GitHub Actions
[2026-01-08T19:42:54.202Z] Node Version: v20.19.6
[2026-01-08T19:42:54.202Z] ========================================
[2026-01-08T19:42:54.202Z] Environment Variables Check:
[2026-01-08T19:42:54.202Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T19:42:54.202Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T19:42:54.202Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T19:42:54.202Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T19:42:54.202Z] 
Multi-Channel Configuration:
[2026-01-08T19:42:54.202Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T19:42:54.203Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T19:42:54.203Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T19:42:54.203Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T19:42:54.203Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T19:42:54.203Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T19:42:54.203Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T19:42:54.203Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T19:42:54.203Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T19:42:54.203Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T19:42:54.203Z] 
Data Files Check:
[2026-01-08T19:42:54.204Z] .github/data/new_jobs.json: ✅ Exists (10 items, 139235 bytes)
[2026-01-08T19:42:54.210Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 755842 bytes)
[2026-01-08T19:42:54.210Z] 
========================================
[2026-01-08T19:42:54.210Z] Starting Enhanced Discord Bot...
[2026-01-08T19:42:54.210Z] ========================================
[2026-01-08T19:42:54.738Z] [BOT] ✅ Loaded V2 database: 1472 jobs
[2026-01-08T19:42:55.508Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T19:42:55.509Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T19:42:55.509Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T19:42:55.518Z] [BOT] ✅ Loaded pending queue: 173 total (153 pending, 20 enriched, 0 posted)
[2026-01-08T19:42:55.518Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sr. Field Marketing Manager (Federal / State) at verkada
[2026-01-08T19:42:55.519Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
[2026-01-08T19:42:55.519Z] [BOT] ⏭️ Skipping already posted: Sr. Field Marketing Manager (Federal / State) at verkada
[2026-01-08T19:42:55.519Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
[2026-01-08T19:42:55.519Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
[2026-01-08T19:42:55.519Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
[2026-01-08T19:42:55.521Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-08T19:42:55.521Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T19:42:55.521Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T19:42:55.521Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-08T19:42:55.521Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
[2026-01-08T19:42:55.521Z] [BOT] ⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-08T19:42:55.522Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T19:42:55.522Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-08T19:42:55.522Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T19:42:55.522Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
[2026-01-08T19:42:55.522Z] [BOT] ⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
[2026-01-08T19:42:55.522Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
[2026-01-08T19:42:55.523Z] [BOT] 📬 Found 5 new jobs (15 already posted)...
[2026-01-08T19:42:55.523Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2026-01-08T19:42:55.523Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-01-08T19:42:55.524Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-08T19:42:55.524Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T19:42:55.527Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-08T19:42:55.527Z] [BOT] 📍 [ROUTING] "Associate Software Engineer 1" @ ORG_07467eb4 BlueShield of Tennessee
[2026-01-08T19:42:55.528Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T19:42:55.532Z] [BOT ERROR] (node:3005) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T19:42:55.749Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer 1 @ ORG_07467eb4 BlueShield of Tennessee in #💻・tech-jobs
[2026-01-08T19:42:55.749Z] [BOT] ✅ Industry: Associate Software Engineer 1 @ ORG_07467eb4 BlueShield of Tennessee
[2026-01-08T19:42:57.556Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer 1 @ ORG_07467eb4 BlueShield of Tennessee in #💻・remote-usa
[2026-01-08T19:42:57.556Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-08T19:42:59.056Z] [BOT] 💾 Marked as posted: Associate Software Engineer 1 @ ORG_07467eb4 BlueShield of Tennessee (instance #1)
[2026-01-08T19:42:59.056Z] [BOT] 💾 BEFORE ARCHIVING: 1473 jobs in database
[2026-01-08T19:42:59.057Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T19:42:59.062Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-08T19:42:59.062Z] [BOT] ✅ Archiving complete: 1 archived, 1472 active
[2026-01-08T19:42:59.074Z] [BOT] 💾 Saved posted_jobs.json: 1472 active jobs
[2026-01-08T19:42:59.074Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T19:42:59.075Z] [BOT] 📍 [ROUTING] "Senior Software Engineer" @ ORG_3eab285c
[2026-01-08T19:42:59.075Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T19:42:59.491Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_3eab285c in #💻・tech-jobs
[2026-01-08T19:42:59.491Z] [BOT] ✅ Industry: Senior Software Engineer @ ORG_3eab285c
[2026-01-08T19:43:01.180Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_3eab285c in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-08T19:43:02.680Z] [BOT] 💾 Marked as posted: Senior Software Engineer @ ORG_3eab285c (instance #1)
[2026-01-08T19:43:02.681Z] [BOT] 💾 BEFORE ARCHIVING: 1473 jobs in database
[2026-01-08T19:43:02.682Z] [BOT] ✅ No jobs to archive (all 1473 jobs within 7-day window)
[2026-01-08T19:43:02.692Z] [BOT] 💾 Saved posted_jobs.json: 1473 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T19:43:02.692Z] [BOT] 💾 Marked as posted: Senior Software Engineer @ ORG_3eab285c (instance #1)
[2026-01-08T19:43:02.692Z] [BOT] 💾 BEFORE ARCHIVING: 1474 jobs in database
[2026-01-08T19:43:02.693Z] [BOT] ✅ No jobs to archive (all 1474 jobs within 7-day window)
[2026-01-08T19:43:02.705Z] [BOT] 💾 Saved posted_jobs.json: 1474 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T19:43:05.706Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-08T19:43:05.708Z] [BOT] 📍 [ROUTING] "Research Assistant - Csd - School of Computer Science" @ ORG_15a5b314 Mellon University
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-08T19:43:05.921Z] [BOT] ✅ Created forum post: 🏢 Research Assistant - Csd - School of Computer Science @ ORG_15a5b314 Mellon University in #📣・marketing-jobs
  ✅ Industry: Research Assistant - Csd - School of Computer Science @ ORG_15a5b314 Mellon University
[2026-01-08T19:43:07.687Z] [BOT] ✅ Created forum post: 🏢 Research Assistant - Csd - School of Computer Science @ ORG_15a5b314 Mellon University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T19:43:09.187Z] [BOT] 💾 Marked as posted: Research Assistant - Csd - School of Computer Science @ ORG_15a5b314 Mellon University (instance #1)
[2026-01-08T19:43:09.187Z] [BOT] 💾 BEFORE ARCHIVING: 1475 jobs in database
[2026-01-08T19:43:09.189Z] [BOT] ✅ No jobs to archive (all 1475 jobs within 7-day window)
[2026-01-08T19:43:09.200Z] [BOT] 💾 Saved posted_jobs.json: 1475 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T19:43:12.201Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-08T19:43:12.202Z] [BOT] 📍 [ROUTING] "Therapist-IOP/PHP" @ ORG_6a97f77a Behavioral Health
[2026-01-08T19:43:12.202Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-08T19:43:12.569Z] [BOT] ✅ Created forum post: 🏢 Therapist-IOP/PHP @ ORG_6a97f77a Behavioral Health in #🩺・healthcare-jobs
[2026-01-08T19:43:12.569Z] [BOT] ✅ Industry: Therapist-IOP/PHP @ ORG_6a97f77a Behavioral Health
[2026-01-08T19:43:14.325Z] [BOT] ✅ Created forum post: 🏢 Therapist-IOP/PHP @ ORG_6a97f77a Behavioral Health in #💻・remote-usa
[2026-01-08T19:43:14.326Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-08T19:43:15.826Z] [BOT] 💾 Marked as posted: Therapist-IOP/PHP @ ORG_6a97f77a Behavioral Health (instance #1)
[2026-01-08T19:43:15.826Z] [BOT] 💾 BEFORE ARCHIVING: 1476 jobs in database
[2026-01-08T19:43:15.827Z] [BOT] ✅ No jobs to archive (all 1476 jobs within 7-day window)
[2026-01-08T19:43:15.838Z] [BOT] 💾 Saved posted_jobs.json: 1476 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T19:43:18.838Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-08T19:43:18.839Z] [BOT] ⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
[2026-01-08T19:43:18.839Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
[2026-01-08T19:43:18.839Z] [BOT] ⏭️  Skipping duplicate: JID_a7381fab-science_2024014 (posted within 7 days)
[2026-01-08T19:43:18.839Z] [BOT] ⏭️  Skipping duplicate: JID_b76486ed-php_r5976 (posted within 7 days)
[2026-01-08T19:43:18.846Z] [BOT] ✅ Loaded pending queue: 173 total (153 pending, 20 enriched, 0 posted)
[2026-01-08T19:43:18.862Z] [BOT] ✅ Saved pending queue: 173 total (153 pending, 16 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T19:43:18.917Z] [BOT] 📂 Loaded 2435 existing routing entries
[2026-01-08T19:43:18.975Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 2439
   Timestamp: 2026-01-08T19:43:18.963Z
[2026-01-08T19:43:18.975Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T19:43:18.975Z] [BOT] Total attempts: 23
   Successful: 8
   Failed: 0
   Skipped: 15
[2026-01-08T19:43:18.976Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-08T19:43:18.976Z] [BOT] Last cleanup: Never
   Total posts: 8
   Channels used: 5
   Top channels:
     1. #💻・remote-usa: 3 posts
     2. #💻・tech-jobs: 2 posts
[2026-01-08T19:43:18.976Z] [BOT] 3. #☀️・sunnyvale: 1 posts
     4. #📣・marketing-jobs: 1 posts
     5. #🩺・healthcare-jobs: 1 posts
[2026-01-08T19:43:18.976Z] [BOT] [STATS] Channel stats saved
[2026-01-08T19:43:20.989Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3005) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*