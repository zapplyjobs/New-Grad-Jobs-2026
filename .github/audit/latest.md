# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T09:55:10.388Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T09:55:00.053Z] ========================================
[2026-01-09T09:55:00.055Z] Discord Bot Execution Log
[2026-01-09T09:55:00.055Z] Environment: GitHub Actions
[2026-01-09T09:55:00.055Z] Node Version: v20.19.6
[2026-01-09T09:55:00.055Z] ========================================
[2026-01-09T09:55:00.056Z] Environment Variables Check:
[2026-01-09T09:55:00.056Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T09:55:00.056Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T09:55:00.056Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T09:55:00.056Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T09:55:00.056Z] 
Multi-Channel Configuration:
[2026-01-09T09:55:00.056Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T09:55:00.056Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T09:55:00.056Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T09:55:00.056Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T09:55:00.057Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T09:55:00.057Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T09:55:00.057Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T09:55:00.057Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T09:55:00.057Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T09:55:00.057Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T09:55:00.057Z] 
Data Files Check:
[2026-01-09T09:55:00.058Z] .github/data/new_jobs.json: ✅ Exists (10 items, 112800 bytes)
[2026-01-09T09:55:00.064Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 773796 bytes)
[2026-01-09T09:55:00.064Z] 
========================================
[2026-01-09T09:55:00.064Z] Starting Enhanced Discord Bot...
[2026-01-09T09:55:00.064Z] ========================================
[2026-01-09T09:55:00.597Z] [BOT] ✅ Loaded V2 database: 1503 jobs
[2026-01-09T09:55:01.258Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T09:55:01.259Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T09:55:01.259Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T09:55:01.269Z] [BOT] ✅ Loaded pending queue: 220 total (200 pending, 20 enriched, 0 posted)
[2026-01-09T09:55:01.270Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T09:55:01.271Z] [BOT] ⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
[2026-01-09T09:55:01.271Z] [BOT] ⏭️ Skipping already posted: ROLE_ce65518c at USAA
[2026-01-09T09:55:01.271Z] [BOT] ⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T09:55:01.272Z] [BOT] ⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
[2026-01-09T09:55:01.272Z] [BOT] ⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T09:55:01.272Z] [BOT] ⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
[2026-01-09T09:55:01.273Z] [BOT] ⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
[2026-01-09T09:55:01.273Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T09:55:01.273Z] [BOT] ⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
[2026-01-09T09:55:01.273Z] [BOT] ⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
[2026-01-09T09:55:01.273Z] [BOT] ⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T09:55:01.273Z] [BOT] ⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T09:55:01.273Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
[2026-01-09T09:55:01.273Z] [BOT] ⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
[2026-01-09T09:55:01.273Z] [BOT] ⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
[2026-01-09T09:55:01.274Z] [BOT] ⏭️  Skipping duplicate: JID_8d58a7c2-ft_r197676 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Advocate Health Care
[2026-01-09T09:55:01.274Z] [BOT] ⏭️  Skipping duplicate: JID_5280a14a-scientist_r2517664 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d69b468e at Applied Materials
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T09:55:01.274Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T09:55:01.274Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T09:55:01.274Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T09:55:01.277Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-09T09:55:01.278Z] [BOT] 📍 [ROUTING] "GTM Strategy and Operations Senior Associate - Product Strategy" @ datadog
[2026-01-09T09:55:01.278Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-09T09:55:01.283Z] [BOT ERROR] (node:3052) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T09:55:01.414Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy and Operations Senior Associate - Product Strategy @ datadog in #💲・sales-jobs
[2026-01-09T09:55:01.414Z] [BOT] ✅ Industry: GTM Strategy and Operations Senior Associate - Product Strategy @ datadog
[2026-01-09T09:55:03.162Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy and Operations Senior Associate - Product Strategy @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-09T09:55:04.664Z] [BOT] 💾 Marked as posted: GTM Strategy and Operations Senior Associate - Product Strategy @ datadog (instance #1)
[2026-01-09T09:55:04.664Z] [BOT] 💾 BEFORE ARCHIVING: 1504 jobs in database
[2026-01-09T09:55:04.666Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T09:55:04.671Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-09T09:55:04.671Z] [BOT] ✅ Archiving complete: 1 archived, 1503 active
[2026-01-09T09:55:04.682Z] [BOT] 💾 Saved posted_jobs.json: 1503 active jobs
[2026-01-09T09:55:04.682Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T09:55:07.683Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T09:55:07.683Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
[2026-01-09T09:55:07.691Z] [BOT] ✅ Loaded pending queue: 220 total (200 pending, 20 enriched, 0 posted)
[2026-01-09T09:55:07.706Z] [BOT] ✅ Saved pending queue: 220 total (200 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-09T09:55:07.706Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T09:55:07.756Z] [BOT] 📂 Loaded 2489 existing routing entries
[2026-01-09T09:55:07.810Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2490
   Timestamp: 2026-01-09T09:55:07.800Z
[2026-01-09T09:55:07.810Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T09:55:07.810Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T09:55:07.811Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-09T09:55:07.811Z] [BOT] 1. #💲・sales-jobs: 1 posts
[2026-01-09T09:55:07.811Z] [BOT] 2. #🗽・new-york: 1 posts
[2026-01-09T09:55:07.811Z] [BOT] [STATS] Channel stats saved
[2026-01-09T09:55:09.825Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3052) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*