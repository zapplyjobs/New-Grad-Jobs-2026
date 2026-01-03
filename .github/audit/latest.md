# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T19:35:34.324Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T19:35:01.109Z] ========================================
[2026-01-03T19:35:01.111Z] Discord Bot Execution Log
[2026-01-03T19:35:01.111Z] Environment: GitHub Actions
[2026-01-03T19:35:01.111Z] Node Version: v20.19.6
[2026-01-03T19:35:01.111Z] ========================================
[2026-01-03T19:35:01.111Z] Environment Variables Check:
[2026-01-03T19:35:01.111Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T19:35:01.111Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T19:35:01.111Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T19:35:01.111Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T19:35:01.111Z] 
Multi-Channel Configuration:
[2026-01-03T19:35:01.111Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T19:35:01.112Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T19:35:01.112Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T19:35:01.112Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T19:35:01.112Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T19:35:01.112Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T19:35:01.112Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T19:35:01.112Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T19:35:01.112Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T19:35:01.112Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T19:35:01.112Z] 
Data Files Check:
[2026-01-03T19:35:01.114Z] .github/data/new_jobs.json: ✅ Exists (10 items, 239450 bytes)
[2026-01-03T19:35:01.117Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 376273 bytes)
[2026-01-03T19:35:01.117Z] 
========================================
[2026-01-03T19:35:01.117Z] Starting Enhanced Discord Bot...
[2026-01-03T19:35:01.117Z] ========================================
[2026-01-03T19:35:01.638Z] [BOT] ✅ Loaded V2 database: 733 jobs
[2026-01-03T19:35:02.279Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T19:35:02.279Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T19:35:02.280Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T19:35:02.281Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T19:35:02.350Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T19:35:02.447Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T19:35:02.449Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T19:35:02.449Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T19:35:02.450Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T19:35:02.450Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T19:35:02.451Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T19:35:02.451Z] [BOT] 📌 Posting 10 jobs to #🤖・ai-jobs
[2026-01-03T19:35:02.453Z] [BOT] 📍 [ROUTING] "Associate Manager, Transaction Monitoring Compliance" @ coinbase
[2026-01-03T19:35:02.454Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:35:02.458Z] [BOT ERROR] (node:2422) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T19:35:02.701Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, Transaction Monitoring Compliance @ coinbase in #🤖・ai-jobs
[2026-01-03T19:35:02.702Z] [BOT] ✅ Industry: Associate Manager, Transaction Monitoring Compliance @ coinbase
[2026-01-03T19:35:04.204Z] [BOT] 💾 Marked as posted: Associate Manager, Transaction Monitoring Compliance @ coinbase (instance #1)
[2026-01-03T19:35:04.205Z] [BOT] 💾 BEFORE ARCHIVING: 734 jobs in database
[2026-01-03T19:35:04.205Z] [BOT] ✅ No jobs to archive (all 734 jobs within 7-day window)
[2026-01-03T19:35:04.215Z] [BOT] 💾 Saved posted_jobs.json: 734 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:35:04.216Z] [BOT] 📍 [ROUTING] "Associate Product Manager Intern" @ coinbase
[2026-01-03T19:35:04.217Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-03T19:35:04.495Z] [BOT] ✅ Created forum post: 🏢 Associate Product Manager Intern @ coinbase in #🤖・ai-jobs
[2026-01-03T19:35:04.495Z] [BOT] ✅ Industry: Associate Product Manager Intern @ coinbase
[2026-01-03T19:35:06.320Z] [BOT] ✅ Created forum post: 🏢 Associate Product Manager Intern @ coinbase in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:35:07.821Z] [BOT] 💾 Marked as posted: Associate Product Manager Intern @ coinbase (instance #1)
[2026-01-03T19:35:07.821Z] [BOT] 💾 BEFORE ARCHIVING: 735 jobs in database
[2026-01-03T19:35:07.821Z] [BOT] ✅ No jobs to archive (all 735 jobs within 7-day window)
[2026-01-03T19:35:07.826Z] [BOT] 💾 Saved posted_jobs.json: 735 active jobs
[2026-01-03T19:35:07.826Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:35:07.827Z] [BOT] 📍 [ROUTING] "Concierge, Customer Success Team" @ coinbase
[2026-01-03T19:35:07.828Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:35:08.148Z] [BOT] ✅ Created forum post: 🏢 Concierge, Customer Success Team @ coinbase in #🤖・ai-jobs
[2026-01-03T19:35:08.148Z] [BOT] ✅ Industry: Concierge, Customer Success Team @ coinbase
[2026-01-03T19:35:09.649Z] [BOT] 💾 Marked as posted: Concierge, Customer Success Team @ coinbase (instance #1)
[2026-01-03T19:35:09.649Z] [BOT] 💾 BEFORE ARCHIVING: 736 jobs in database
[2026-01-03T19:35:09.650Z] [BOT] ✅ No jobs to archive (all 736 jobs within 7-day window)
[2026-01-03T19:35:09.655Z] [BOT] 💾 Saved posted_jobs.json: 736 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:35:09.656Z] [BOT] 📍 [ROUTING] "Employee & Workplace Experience Intern" @ coinbase
[2026-01-03T19:35:09.656Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:35:09.845Z] [BOT] ✅ Created forum post: 🏢 Employee & Workplace Experience Intern @ coinbase in #🤖・ai-jobs
[2026-01-03T19:35:09.845Z] [BOT] ✅ Industry: Employee & Workplace Experience Intern @ coinbase
[2026-01-03T19:35:11.525Z] [BOT] ✅ Created forum post: 🏢 Employee & Workplace Experience Intern @ coinbase in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T19:35:13.026Z] [BOT] 💾 Marked as posted: Employee & Workplace Experience Intern @ coinbase (instance #1)
[2026-01-03T19:35:13.026Z] [BOT] 💾 BEFORE ARCHIVING: 737 jobs in database
[2026-01-03T19:35:13.027Z] [BOT] ✅ No jobs to archive (all 737 jobs within 7-day window)
[2026-01-03T19:35:13.032Z] [BOT] 💾 Saved posted_jobs.json: 737 active jobs
[2026-01-03T19:35:13.032Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:35:13.032Z] [BOT] 📍 [ROUTING] "Lead EDD Compliance Analyst" @ coinbase
[2026-01-03T19:35:13.032Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:35:13.309Z] [BOT] ✅ Created forum post: 🏢 Lead EDD Compliance Analyst @ coinbase in #🤖・ai-jobs
[2026-01-03T19:35:13.310Z] [BOT] ✅ Industry: Lead EDD Compliance Analyst @ coinbase
[2026-01-03T19:35:14.811Z] [BOT] 💾 Marked as posted: Lead EDD Compliance Analyst @ coinbase (instance #1)
[2026-01-03T19:35:14.811Z] [BOT] 💾 BEFORE ARCHIVING: 738 jobs in database
[2026-01-03T19:35:14.811Z] [BOT] ✅ No jobs to archive (all 738 jobs within 7-day window)
[2026-01-03T19:35:14.816Z] [BOT] 💾 Saved posted_jobs.json: 738 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:35:14.817Z] [BOT] 📍 [ROUTING] "Lead TMS Compliance Analyst " @ coinbase
[2026-01-03T19:35:14.817Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:35:15.015Z] [BOT] ✅ Created forum post: 🏢 Lead TMS Compliance Analyst  @ coinbase in #🤖・ai-jobs
[2026-01-03T19:35:15.015Z] [BOT] ✅ Industry: Lead TMS Compliance Analyst  @ coinbase
[2026-01-03T19:35:16.517Z] [BOT] 💾 Marked as posted: Lead TMS Compliance Analyst  @ coinbase (instance #1)
[2026-01-03T19:35:16.517Z] [BOT] 💾 BEFORE ARCHIVING: 739 jobs in database
[2026-01-03T19:35:16.518Z] [BOT] ✅ No jobs to archive (all 739 jobs within 7-day window)
[2026-01-03T19:35:16.523Z] [BOT] 💾 Saved posted_jobs.json: 739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:35:16.524Z] [BOT] 📍 [ROUTING] "Lead TMS Quality Compliance Analyst" @ coinbase
[2026-01-03T19:35:16.524Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:35:16.742Z] [BOT] ✅ Created forum post: 🏢 Lead TMS Quality Compliance Analyst @ coinbase in #🤖・ai-jobs
  ✅ Industry: Lead TMS Quality Compliance Analyst @ coinbase
[2026-01-03T19:35:18.243Z] [BOT] 💾 Marked as posted: Lead TMS Quality Compliance Analyst @ coinbase (instance #1)
[2026-01-03T19:35:18.244Z] [BOT] 💾 BEFORE ARCHIVING: 740 jobs in database
[2026-01-03T19:35:18.244Z] [BOT] ✅ No jobs to archive (all 740 jobs within 7-day window)
[2026-01-03T19:35:18.250Z] [BOT] 💾 Saved posted_jobs.json: 740 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:35:18.251Z] [BOT] 📍 [ROUTING] "Marketing Events Intern" @ coinbase
[2026-01-03T19:35:18.251Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:35:18.967Z] [BOT] ✅ Created forum post: 🏢 Marketing Events Intern @ coinbase in #🤖・ai-jobs
[2026-01-03T19:35:18.968Z] [BOT] ✅ Industry: Marketing Events Intern @ coinbase
[2026-01-03T19:35:20.777Z] [BOT] ✅ Created forum post: 🏢 Marketing Events Intern @ coinbase in #🗽・new-york
[2026-01-03T19:35:20.777Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T19:35:22.278Z] [BOT] 💾 Marked as posted: Marketing Events Intern @ coinbase (instance #1)
[2026-01-03T19:35:22.278Z] [BOT] 💾 BEFORE ARCHIVING: 741 jobs in database
[2026-01-03T19:35:22.279Z] [BOT] ✅ No jobs to archive (all 741 jobs within 7-day window)
[2026-01-03T19:35:22.285Z] [BOT] 💾 Saved posted_jobs.json: 741 active jobs
[2026-01-03T19:35:22.285Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:35:22.285Z] [BOT] 📍 [ROUTING] "Policy Intern" @ coinbase
[2026-01-03T19:35:22.285Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:35:22.729Z] [BOT] ✅ Created forum post: 🏢 Policy Intern @ coinbase in #🤖・ai-jobs
  ✅ Industry: Policy Intern @ coinbase
[2026-01-03T19:35:24.230Z] [BOT] 💾 Marked as posted: Policy Intern @ coinbase (instance #1)
💾 BEFORE ARCHIVING: 742 jobs in database
[2026-01-03T19:35:24.231Z] [BOT] ✅ No jobs to archive (all 742 jobs within 7-day window)
[2026-01-03T19:35:24.237Z] [BOT] 💾 Saved posted_jobs.json: 742 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:35:24.237Z] [BOT] 📍 [ROUTING] "Product Design Intern" @ coinbase
[2026-01-03T19:35:24.237Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:35:24.543Z] [BOT] ✅ Created forum post: 🏢 Product Design Intern @ coinbase in #🤖・ai-jobs
[2026-01-03T19:35:24.543Z] [BOT] ✅ Industry: Product Design Intern @ coinbase
[2026-01-03T19:35:26.318Z] [BOT] ✅ Created forum post: 🏢 Product Design Intern @ coinbase in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:35:27.819Z] [BOT] 💾 Marked as posted: Product Design Intern @ coinbase (instance #1)
[2026-01-03T19:35:27.819Z] [BOT] 💾 BEFORE ARCHIVING: 743 jobs in database
[2026-01-03T19:35:27.820Z] [BOT] ✅ No jobs to archive (all 743 jobs within 7-day window)
[2026-01-03T19:35:27.827Z] [BOT] 💾 Saved posted_jobs.json: 743 active jobs
[2026-01-03T19:35:27.827Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:35:30.827Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T19:35:30.828Z] [BOT] ⏭️  Skipping duplicate: JID_de7dc187 (posted within 7 days)
[2026-01-03T19:35:30.828Z] [BOT] ⏭️  Skipping duplicate: JID_e4d0fb77 (posted within 7 days)
[2026-01-03T19:35:30.828Z] [BOT] ⏭️  Skipping duplicate: JID_de687c4d (posted within 7 days)
[2026-01-03T19:35:30.828Z] [BOT] ⏭️  Skipping duplicate: JID_b885468f (posted within 7 days)
[2026-01-03T19:35:30.828Z] [BOT] ⏭️  Skipping duplicate: JID_a3af3853 (posted within 7 days)
[2026-01-03T19:35:30.828Z] [BOT] ⏭️  Skipping duplicate: JID_bdfb2c7a (posted within 7 days)
⏭️  Skipping duplicate: JID_5837088b (posted within 7 days)
[2026-01-03T19:35:30.828Z] [BOT] ⏭️  Skipping duplicate: JID_6dba5654 (posted within 7 days)
[2026-01-03T19:35:30.828Z] [BOT] ⏭️  Skipping duplicate: JID_4f403c0c (posted within 7 days)
[2026-01-03T19:35:30.828Z] [BOT] ⏭️  Skipping duplicate: JID_0cd4e9de (posted within 7 days)
[2026-01-03T19:35:30.874Z] [BOT] ✅ Loaded pending queue: 556 total (536 pending, 20 enriched, 0 posted)
[2026-01-03T19:35:30.935Z] [BOT] ✅ Saved pending queue: 556 total (536 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T19:35:30.935Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T19:35:30.981Z] [BOT] 📂 Loaded 1687 existing routing entries
[2026-01-03T19:35:31.030Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-03T19:35:31.031Z] [BOT] Total entries: 1697
   Timestamp: 2026-01-03T19:35:31.022Z
[2026-01-03T19:35:31.031Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T19:35:31.031Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-03T19:35:31.031Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T19:35:31.032Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 10 posts
     2. #🌉・san-francisco: 2 posts
     3. #🗽・new-york: 2 posts
[2026-01-03T19:35:31.032Z] [BOT] [STATS] Channel stats saved
[2026-01-03T19:35:33.048Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2422) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*