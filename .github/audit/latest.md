# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T17:53:22.460Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T17:53:12.005Z] ========================================
[2026-01-09T17:53:12.007Z] Discord Bot Execution Log
[2026-01-09T17:53:12.007Z] Environment: GitHub Actions
[2026-01-09T17:53:12.008Z] Node Version: v20.19.6
[2026-01-09T17:53:12.008Z] ========================================
[2026-01-09T17:53:12.008Z] Environment Variables Check:
[2026-01-09T17:53:12.008Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T17:53:12.008Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T17:53:12.008Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T17:53:12.008Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T17:53:12.008Z] 
Multi-Channel Configuration:
[2026-01-09T17:53:12.008Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T17:53:12.008Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T17:53:12.009Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T17:53:12.009Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T17:53:12.009Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T17:53:12.009Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T17:53:12.009Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T17:53:12.009Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T17:53:12.009Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T17:53:12.009Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T17:53:12.009Z] 
Data Files Check:
[2026-01-09T17:53:12.010Z] .github/data/new_jobs.json: ✅ Exists (10 items, 181859 bytes)
[2026-01-09T17:53:12.016Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 768155 bytes)
[2026-01-09T17:53:12.016Z] 
========================================
[2026-01-09T17:53:12.016Z] Starting Enhanced Discord Bot...
[2026-01-09T17:53:12.016Z] ========================================
[2026-01-09T17:53:12.541Z] [BOT] ✅ Loaded V2 database: 1496 jobs
[2026-01-09T17:53:13.157Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T17:53:13.158Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T17:53:13.158Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T17:53:13.169Z] [BOT] ✅ Loaded pending queue: 230 total (210 pending, 20 enriched, 0 posted)
[2026-01-09T17:53:13.169Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer - Direct To Cell at SpaceX
[2026-01-09T17:53:13.170Z] [BOT] ⏭️  Skipping duplicate: JID_e942e20e (posted within 7 days)
[2026-01-09T17:53:13.170Z] [BOT] ⏭️ Skipping already posted: FP&A Manager,  GTM at vercel
[2026-01-09T17:53:13.170Z] [BOT] ⏭️  Skipping duplicate: JID_08a687ec (posted within 7 days)
⏭️ Skipping already posted:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-01-09T17:53:13.171Z] [BOT] ⏭️  Skipping duplicate: JID_d964c21b (posted within 7 days)
⏭️ Skipping already posted: Meteorologist - NASA Ballon Program at Peraton
[2026-01-09T17:53:13.171Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer, Universes at anthropic
⏭️  Skipping duplicate: JID_bab53bb3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f7570db at samsara
⏭️  Skipping duplicate: JID_633791af (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Front End Web at Intuit
⏭️  Skipping duplicate: JID_648a0f2e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Tax Preparation Data Management at Intuit
[2026-01-09T17:53:13.172Z] [BOT] ⏭️  Skipping duplicate: JID_7ec53afc (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Asset & Wealth Management at anthropic
⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T17:53:13.172Z] [BOT] ⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ce65518c at USAA
⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
[2026-01-09T17:53:13.172Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T17:53:13.172Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T17:53:13.172Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T17:53:13.172Z] [BOT] ⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
[2026-01-09T17:53:13.172Z] [BOT] ⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T17:53:13.172Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T17:53:13.173Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T17:53:13.173Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T17:53:13.173Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T17:53:13.174Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-09T17:53:13.175Z] [BOT] 📍 [ROUTING] "Software Engineer - Direct To Cell" @ ORG_afd623b1
[2026-01-09T17:53:13.175Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T17:53:13.180Z] [BOT ERROR] (node:2745) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T17:53:13.367Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Direct To Cell @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Direct To Cell @ ORG_afd623b1
[2026-01-09T17:53:15.211Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Direct To Cell @ ORG_afd623b1 in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-09T17:53:16.713Z] [BOT] 💾 Marked as posted: Software Engineer - Direct To Cell @ ORG_afd623b1 (instance #1)
[2026-01-09T17:53:16.713Z] [BOT] 💾 BEFORE ARCHIVING: 1497 jobs in database
[2026-01-09T17:53:16.714Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T17:53:16.719Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-09T17:53:16.719Z] [BOT] ✅ Archiving complete: 1 archived, 1496 active
[2026-01-09T17:53:16.730Z] [BOT] 💾 Saved posted_jobs.json: 1496 active jobs
[2026-01-09T17:53:16.730Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T17:53:19.731Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T17:53:19.732Z] [BOT] ⏭️  Skipping duplicate: JID_305cb5c2 (posted within 7 days)
[2026-01-09T17:53:19.741Z] [BOT] ✅ Loaded pending queue: 230 total (210 pending, 20 enriched, 0 posted)
[2026-01-09T17:53:19.756Z] [BOT] ✅ Saved pending queue: 230 total (210 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-09T17:53:19.756Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T17:53:19.808Z] [BOT] 📂 Loaded 2504 existing routing entries
[2026-01-09T17:53:19.867Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-09T17:53:19.868Z] [BOT] Total entries: 2505
   Timestamp: 2026-01-09T17:53:19.853Z
[2026-01-09T17:53:19.868Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T17:53:19.868Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T17:53:19.868Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-09T17:53:19.869Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #☀️・sunnyvale: 1 posts
[2026-01-09T17:53:19.869Z] [BOT] [STATS] Channel stats saved
[2026-01-09T17:53:21.882Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2745) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*