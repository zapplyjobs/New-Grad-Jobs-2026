# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T17:09:34.298Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T17:09:20.754Z] ========================================
[2026-01-12T17:09:20.756Z] Discord Bot Execution Log
[2026-01-12T17:09:20.756Z] Environment: GitHub Actions
[2026-01-12T17:09:20.756Z] Node Version: v20.19.6
[2026-01-12T17:09:20.756Z] ========================================
[2026-01-12T17:09:20.756Z] Environment Variables Check:
[2026-01-12T17:09:20.757Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T17:09:20.757Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T17:09:20.757Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T17:09:20.757Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T17:09:20.757Z] 
Multi-Channel Configuration:
[2026-01-12T17:09:20.757Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T17:09:20.757Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T17:09:20.757Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T17:09:20.757Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T17:09:20.757Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T17:09:20.758Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T17:09:20.758Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T17:09:20.758Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T17:09:20.758Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T17:09:20.758Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T17:09:20.758Z] 
Data Files Check:
[2026-01-12T17:09:20.759Z] .github/data/new_jobs.json: ✅ Exists (10 items, 148059 bytes)
[2026-01-12T17:09:20.761Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 228219 bytes)
[2026-01-12T17:09:20.761Z] 
========================================
[2026-01-12T17:09:20.761Z] Starting Enhanced Discord Bot...
[2026-01-12T17:09:20.761Z] ========================================
[2026-01-12T17:09:21.291Z] [BOT] ✅ Loaded V2 database: 402 jobs
[2026-01-12T17:09:21.813Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T17:09:21.814Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T17:09:21.814Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T17:09:21.827Z] [BOT] ✅ Loaded pending queue: 275 total (255 pending, 20 enriched, 0 posted)
[2026-01-12T17:09:21.828Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Account Executive, Embedded Finance at brex
[2026-01-12T17:09:21.828Z] [BOT] ⏭️  Skipping duplicate: JID_d5d07e23 (posted within 7 days)
[2026-01-12T17:09:21.828Z] [BOT] ⏭️ Skipping already posted: Account Executive, Embedded Finance at brex
[2026-01-12T17:09:21.829Z] [BOT] ⏭️  Skipping duplicate: JID_fedccf21 (posted within 7 days)
[2026-01-12T17:09:21.829Z] [BOT] ⏭️ Skipping already posted: Account Executive, Embedded Finance at brex
⏭️  Skipping duplicate: JID_13d998db-i_r106463-1 (posted within 7 days)
[2026-01-12T17:09:21.829Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at RELX
⏭️  Skipping duplicate: JID_61e5c655 (posted within 7 days)
⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
[2026-01-12T17:09:21.829Z] [BOT] ⏭️  Skipping duplicate: JID_eebc56d7 (posted within 7 days)
⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
⏭️  Skipping duplicate: JID_6143f1ff (posted within 7 days)
⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
[2026-01-12T17:09:21.830Z] [BOT] ⏭️  Skipping duplicate: JID_e8716d5a (posted within 7 days)
[2026-01-12T17:09:21.830Z] [BOT] ⏭️ Skipping already posted: Manager, Commercial Sales Engineering (AMER - East) at datadog
⏭️  Skipping duplicate: JID_d85041c5 (posted within 7 days)
⏭️ Skipping already posted: Internal Communications Senior Manager (Global Sales) at reddit
[2026-01-12T17:09:21.830Z] [BOT] ⏭️  Skipping duplicate: JID_1f192e6d (posted within 7 days)
⏭️ Skipping already posted: Associate Manager, Compliance at coinbase
[2026-01-12T17:09:21.830Z] [BOT] ⏭️  Skipping duplicate: JID_8fc10dad (posted within 7 days)
⏭️ Skipping already posted: Director, Channels - Global Systems Integrators (AMER) at datadog
[2026-01-12T17:09:21.831Z] [BOT] ⏭️  Skipping duplicate: JID_4e8b8312 (posted within 7 days)
[2026-01-12T17:09:21.831Z] [BOT] ⏭️ Skipping already posted: Product Solutions Architect 3 - Synthetics at datadog
⏭️  Skipping duplicate: JID_e13e860d (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Boston) at datadog
[2026-01-12T17:09:21.831Z] [BOT] ⏭️  Skipping duplicate: JID_cc075897 (posted within 7 days)
⏭️ Skipping already posted: Senior Director, Product Design at datadog
[2026-01-12T17:09:21.831Z] [BOT] ⏭️  Skipping duplicate: JID_b1499239-i_jr107155 (posted within 7 days)
⏭️ Skipping already posted: Web/Digital Specialist 1 at Sabre
⏭️  Skipping duplicate: JID_08b95b67-i_r18423 (posted within 7 days)
⏭️ Skipping already posted: Workday Extend Developer 1 at Iowa State University
[2026-01-12T17:09:21.831Z] [BOT] ⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
⏭️ Skipping already posted: Application Support - Java skills - Associate at HEXAWARE
[2026-01-12T17:09:21.832Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_385c8ffa-6078908_13942096-1 (posted within 7 days)
[2026-01-12T17:09:21.832Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
📬 Found 2 new jobs (18 already posted)...
📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-12T17:09:21.832Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-12T17:09:21.833Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-12T17:09:21.833Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T17:09:21.833Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-12T17:09:21.835Z] [BOT] 📍 [ROUTING] "Legal Counsel, Audiobook Licensing" @ spotify
[2026-01-12T17:09:21.835Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T17:09:21.840Z] [BOT ERROR] (node:3129) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T17:09:22.016Z] [BOT] ✅ Created forum post: 🏢 Legal Counsel, Audiobook Licensing @ spotify in #🤖・ai-jobs
[2026-01-12T17:09:22.016Z] [BOT] ✅ Industry: Legal Counsel, Audiobook Licensing @ spotify
[2026-01-12T17:09:23.672Z] [BOT] ✅ Created forum post: 🏢 Legal Counsel, Audiobook Licensing @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T17:09:25.173Z] [BOT] 💾 Marked as posted: Legal Counsel, Audiobook Licensing @ spotify (instance #1)
[2026-01-12T17:09:25.174Z] [BOT] 💾 BEFORE ARCHIVING: 403 jobs in database
[2026-01-12T17:09:25.175Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T17:09:25.176Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-12T17:09:25.176Z] [BOT] ✅ Archiving complete: 5 archived, 398 active
[2026-01-12T17:09:25.179Z] [BOT] 💾 Saved posted_jobs.json: 398 active jobs
[2026-01-12T17:09:25.179Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T17:09:25.180Z] [BOT] 📍 [ROUTING] "Account Executive - Backstage" @ spotify
[2026-01-12T17:09:25.180Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-12T17:09:25.319Z] [BOT] ✅ Created forum post: 🏢 Account Executive - Backstage @ spotify in #🤖・ai-jobs
[2026-01-12T17:09:25.319Z] [BOT] ✅ Industry: Account Executive - Backstage @ spotify
[2026-01-12T17:09:26.982Z] [BOT] ✅ Created forum post: 🏢 Account Executive - Backstage @ spotify in #🗽・new-york
[2026-01-12T17:09:26.982Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T17:09:28.483Z] [BOT] 💾 Marked as posted: Account Executive - Backstage @ spotify (instance #1)
[2026-01-12T17:09:28.484Z] [BOT] 💾 BEFORE ARCHIVING: 399 jobs in database
[2026-01-12T17:09:28.484Z] [BOT] ✅ No jobs to archive (all 399 jobs within 7-day window)
[2026-01-12T17:09:28.489Z] [BOT] 💾 Saved posted_jobs.json: 399 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T17:09:31.490Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-12T17:09:31.490Z] [BOT] ⏭️  Skipping duplicate: JID_4b93d4f9 (posted within 7 days)
[2026-01-12T17:09:31.490Z] [BOT] ⏭️  Skipping duplicate: JID_458aaa8e (posted within 7 days)
[2026-01-12T17:09:31.503Z] [BOT] ✅ Loaded pending queue: 275 total (255 pending, 20 enriched, 0 posted)
[2026-01-12T17:09:31.521Z] [BOT] ✅ Saved pending queue: 275 total (255 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-12T17:09:31.522Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T17:09:31.586Z] [BOT] 📂 Loaded 2572 existing routing entries
[2026-01-12T17:09:31.642Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-12T17:09:31.642Z] [BOT] Total entries: 2574
   Timestamp: 2026-01-12T17:09:31.630Z
[2026-01-12T17:09:31.642Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 22
   Successful: 4
   Failed: 0
[2026-01-12T17:09:31.643Z] [BOT] Skipped: 18
[2026-01-12T17:09:31.643Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T17:09:31.643Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 2
   Top channels:
[2026-01-12T17:09:31.643Z] [BOT] 1. #🤖・ai-jobs: 2 posts
     2. #🗽・new-york: 2 posts
[2026-01-12T17:09:31.643Z] [BOT] [STATS] Channel stats saved
[2026-01-12T17:09:33.658Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3129) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*