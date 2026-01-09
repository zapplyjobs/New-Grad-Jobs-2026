# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T00:11:29.914Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 17
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T00:11:12.889Z] ========================================
[2026-01-09T00:11:12.891Z] Discord Bot Execution Log
[2026-01-09T00:11:12.891Z] Environment: GitHub Actions
[2026-01-09T00:11:12.891Z] Node Version: v20.19.6
[2026-01-09T00:11:12.891Z] ========================================
[2026-01-09T00:11:12.891Z] Environment Variables Check:
[2026-01-09T00:11:12.891Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T00:11:12.892Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T00:11:12.892Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T00:11:12.892Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T00:11:12.892Z] 
Multi-Channel Configuration:
[2026-01-09T00:11:12.892Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T00:11:12.892Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T00:11:12.892Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T00:11:12.892Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T00:11:12.892Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T00:11:12.892Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T00:11:12.892Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T00:11:12.893Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T00:11:12.893Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T00:11:12.893Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T00:11:12.893Z] 
Data Files Check:
[2026-01-09T00:11:12.894Z] .github/data/new_jobs.json: ✅ Exists (10 items, 85866 bytes)
[2026-01-09T00:11:12.900Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 761724 bytes)
[2026-01-09T00:11:12.900Z] 
========================================
[2026-01-09T00:11:12.900Z] Starting Enhanced Discord Bot...
[2026-01-09T00:11:12.900Z] ========================================
[2026-01-09T00:11:13.449Z] [BOT] ✅ Loaded V2 database: 1484 jobs
[2026-01-09T00:11:13.969Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T00:11:13.970Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T00:11:13.970Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T00:11:13.980Z] [BOT] ✅ Loaded pending queue: 190 total (170 pending, 20 enriched, 0 posted)
[2026-01-09T00:11:13.980Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer – New College Graduate at Vectra
[2026-01-09T00:11:13.981Z] [BOT] ⏭️  Skipping duplicate: JID_7cf3eb12 (posted within 7 days)
[2026-01-09T00:11:13.981Z] [BOT] ⏭️ Skipping already posted: Software Engineer – New College Graduate at Vectra
[2026-01-09T00:11:13.982Z] [BOT] ⏭️  Skipping duplicate: JID_72cf4298-2026_r0055622-1 (posted within 7 days)
[2026-01-09T00:11:13.982Z] [BOT] ⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
⏭️  Skipping duplicate: JID_ff0e5907 (posted within 7 days)
[2026-01-09T00:11:13.982Z] [BOT] ⏭️ Skipping already posted: ROLE_1f5f8642 at MCA Connect
[2026-01-09T00:11:13.982Z] [BOT] ⏭️  Skipping duplicate: JID_bf5593fa (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Jerry
[2026-01-09T00:11:13.983Z] [BOT] ⏭️  Skipping duplicate: JID_bdba1f64 (posted within 7 days)
[2026-01-09T00:11:13.983Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, Salesforce at brex
⏭️  Skipping duplicate: JID_3653a38b (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, Salesforce at brex
[2026-01-09T00:11:13.983Z] [BOT] ⏭️  Skipping duplicate: JID_19fd3815 (posted within 7 days)
[2026-01-09T00:11:13.983Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, GTM Engineering  at brex
⏭️  Skipping duplicate: JID_18ff52c7 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at ServiceNow
[2026-01-09T00:11:13.983Z] [BOT] ⏭️  Skipping duplicate: JID_f62ee649 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, GTM Engineering  at brex
[2026-01-09T00:11:13.984Z] [BOT] ⏭️  Skipping duplicate: JID_7107faa1 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, GTM Engineering  at brex
⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
⏭️  Skipping duplicate: JID_7d40f03b (posted within 7 days)
⏭️ Skipping already posted: Manager, Mid-Market Sales (Client Account Executives) at reddit
⏭️  Skipping duplicate: JID_5287f9fe (posted within 7 days)
⏭️ Skipping already posted: Manager, Mid-Market Sales (Client Account Executives) at reddit
⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer, Applied AI, Digital Natives Business at anthropic
[2026-01-09T00:11:13.984Z] [BOT] ⏭️  Skipping duplicate: JID_0bd523c4 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ebcb7463 at brex
[2026-01-09T00:11:13.984Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-09T00:11:13.984Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
📬 Found 3 new jobs (17 already posted)...
[2026-01-09T00:11:13.985Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2026-01-09T00:11:13.985Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-09T00:11:13.985Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-09T00:11:13.986Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T00:11:13.988Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-09T00:11:13.989Z] [BOT] 📍 [ROUTING] "Analyst 1 – Labor Analytics - Corporate - Las Vegas" @ ORG_742553d6 Entertainment
[2026-01-09T00:11:13.989Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T00:11:13.993Z] [BOT ERROR] (node:2685) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T00:11:14.153Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 – Labor Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment in #💻・tech-jobs
[2026-01-09T00:11:14.153Z] [BOT] ✅ Industry: Analyst 1 – Labor Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment
[2026-01-09T00:11:15.812Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 – Labor Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment in #💻・remote-usa
[2026-01-09T00:11:15.812Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-09T00:11:17.314Z] [BOT] 💾 Marked as posted: Analyst 1 – Labor Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment (instance #1)
[2026-01-09T00:11:17.314Z] [BOT] 💾 BEFORE ARCHIVING: 1485 jobs in database
[2026-01-09T00:11:17.315Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T00:11:17.320Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-09T00:11:17.320Z] [BOT] ✅ Archiving complete: 1 archived, 1484 active
[2026-01-09T00:11:17.334Z] [BOT] 💾 Saved posted_jobs.json: 1484 active jobs
[2026-01-09T00:11:17.334Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T00:11:17.335Z] [BOT] 📍 [ROUTING] "2026 Fulltime - Data Management Analyst I" @ ORG_75f04b84
[2026-01-09T00:11:17.335Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T00:11:17.600Z] [BOT] ✅ Created forum post: 🏢 2026 Fulltime - Data Management Analyst I @ ORG_75f04b84 in #💻・tech-jobs
[2026-01-09T00:11:17.600Z] [BOT] ✅ Industry: 2026 Fulltime - Data Management Analyst I @ ORG_75f04b84
[2026-01-09T00:11:19.266Z] [BOT] ✅ Created forum post: 🏢 2026 Fulltime - Data Management Analyst I @ ORG_75f04b84 in #💻・remote-usa
[2026-01-09T00:11:19.266Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-09T00:11:20.767Z] [BOT] 💾 Marked as posted: 2026 Fulltime - Data Management Analyst I @ ORG_75f04b84 (instance #1)
[2026-01-09T00:11:20.767Z] [BOT] 💾 BEFORE ARCHIVING: 1485 jobs in database
[2026-01-09T00:11:20.768Z] [BOT] ✅ No jobs to archive (all 1485 jobs within 7-day window)
[2026-01-09T00:11:20.778Z] [BOT] 💾 Saved posted_jobs.json: 1485 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T00:11:20.779Z] [BOT] 📍 [ROUTING] "Nuclear Analysis Technician - Engineering Techs - Physics Techs" @ ORG_41a6741einghouse Electric Company
[2026-01-09T00:11:20.779Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T00:11:20.955Z] [BOT] ✅ Created forum post: 🏢 Nuclear Analysis Technician - Engineering Techs - Physics Techs @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
  ✅ Industry: Nuclear Analysis Technician - Engineering Techs - Physics Techs @ ORG_41a6741einghouse Electric Company
[2026-01-09T00:11:22.647Z] [BOT] ✅ Created forum post: 🏢 Nuclear Analysis Technician - Engineering Techs - Physics Techs @ ORG_41a6741einghouse Electric Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-09T00:11:24.148Z] [BOT] 💾 Marked as posted: Nuclear Analysis Technician - Engineering Techs - Physics Techs @ ORG_41a6741einghouse Electric Company (instance #1)
[2026-01-09T00:11:24.148Z] [BOT] 💾 BEFORE ARCHIVING: 1486 jobs in database
[2026-01-09T00:11:24.150Z] [BOT] ✅ No jobs to archive (all 1486 jobs within 7-day window)
[2026-01-09T00:11:24.160Z] [BOT] 💾 Saved posted_jobs.json: 1486 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T00:11:27.161Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-09T00:11:27.161Z] [BOT] ⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-78241 (posted within 7 days)
[2026-01-09T00:11:27.162Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_e58e6cb8-onsite_01815653 (posted within 7 days)
[2026-01-09T00:11:27.162Z] [BOT] ⏭️  Skipping duplicate: JID_18900469 (posted within 7 days)
[2026-01-09T00:11:27.169Z] [BOT] ✅ Loaded pending queue: 190 total (170 pending, 20 enriched, 0 posted)
[2026-01-09T00:11:27.183Z] [BOT] ✅ Saved pending queue: 190 total (170 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-01-09T00:11:27.183Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T00:11:27.235Z] [BOT] 📂 Loaded 2455 existing routing entries
[2026-01-09T00:11:27.295Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 2458
[2026-01-09T00:11:27.295Z] [BOT] Timestamp: 2026-01-09T00:11:27.283Z
[2026-01-09T00:11:27.299Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 23
   Successful: 6
   Failed: 0
   Skipped: 17
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #💻・remote-usa: 3 posts
[STATS] Channel stats saved
[2026-01-09T00:11:29.311Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2685) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*