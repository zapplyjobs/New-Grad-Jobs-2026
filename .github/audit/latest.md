# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T17:27:11.592Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-12T17:27:09.596Z] ========================================
[2026-01-12T17:27:09.597Z] Discord Bot Execution Log
[2026-01-12T17:27:09.597Z] Environment: GitHub Actions
[2026-01-12T17:27:09.597Z] Node Version: v20.19.6
[2026-01-12T17:27:09.597Z] ========================================
[2026-01-12T17:27:09.597Z] Environment Variables Check:
[2026-01-12T17:27:09.598Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T17:27:09.598Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T17:27:09.598Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T17:27:09.598Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T17:27:09.598Z] 
Multi-Channel Configuration:
[2026-01-12T17:27:09.598Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T17:27:09.598Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T17:27:09.598Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T17:27:09.598Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T17:27:09.598Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T17:27:09.598Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T17:27:09.598Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T17:27:09.598Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T17:27:09.598Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T17:27:09.598Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T17:27:09.598Z] 
Data Files Check:
[2026-01-12T17:27:09.600Z] .github/data/new_jobs.json: ✅ Exists (10 items, 143282 bytes)
[2026-01-12T17:27:09.602Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 226499 bytes)
[2026-01-12T17:27:09.602Z] 
========================================
[2026-01-12T17:27:09.602Z] Starting Enhanced Discord Bot...
[2026-01-12T17:27:09.602Z] ========================================
[2026-01-12T17:27:10.066Z] [BOT] ✅ Loaded V2 database: 399 jobs
[2026-01-12T17:27:10.824Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T17:27:10.825Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T17:27:10.825Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T17:27:10.841Z] [BOT] ✅ Loaded pending queue: 275 total (255 pending, 20 enriched, 0 posted)
[2026-01-12T17:27:10.841Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Applied Safety Research Engineer, Safeguards at anthropic
[2026-01-12T17:27:10.841Z] [BOT] ⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
[2026-01-12T17:27:10.842Z] [BOT] ⏭️ Skipping already posted: Applied Safety Research Engineer, Safeguards at anthropic
[2026-01-12T17:27:10.842Z] [BOT] ⏭️  Skipping duplicate: JID_fedccf21 (posted within 7 days)
⏭️ Skipping already posted: Account Executive, Embedded Finance at brex
[2026-01-12T17:27:10.842Z] [BOT] ⏭️  Skipping duplicate: JID_d5d07e23 (posted within 7 days)
[2026-01-12T17:27:10.842Z] [BOT] ⏭️ Skipping already posted: Account Executive, Embedded Finance at brex
⏭️  Skipping duplicate: JID_13d998db-i_r106463-1 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at RELX
[2026-01-12T17:27:10.842Z] [BOT] ⏭️  Skipping duplicate: JID_61e5c655 (posted within 7 days)
⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
⏭️  Skipping duplicate: JID_eebc56d7 (posted within 7 days)
⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
⏭️  Skipping duplicate: JID_6143f1ff (posted within 7 days)
⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
[2026-01-12T17:27:10.842Z] [BOT] ⏭️  Skipping duplicate: JID_4b93d4f9 (posted within 7 days)
⏭️ Skipping already posted: Legal Counsel, Audiobook Licensing at spotify
⏭️  Skipping duplicate: JID_e8716d5a (posted within 7 days)
⏭️ Skipping already posted: Manager, Commercial Sales Engineering (AMER - East) at datadog
[2026-01-12T17:27:10.843Z] [BOT] ⏭️  Skipping duplicate: JID_d85041c5 (posted within 7 days)
⏭️ Skipping already posted: Internal Communications Senior Manager (Global Sales) at reddit
[2026-01-12T17:27:10.843Z] [BOT] ⏭️  Skipping duplicate: JID_1f192e6d (posted within 7 days)
⏭️ Skipping already posted: Associate Manager, Compliance at coinbase
[2026-01-12T17:27:10.843Z] [BOT] ⏭️  Skipping duplicate: JID_8fc10dad (posted within 7 days)
⏭️ Skipping already posted: Director, Channels - Global Systems Integrators (AMER) at datadog
[2026-01-12T17:27:10.843Z] [BOT] ⏭️  Skipping duplicate: JID_458aaa8e (posted within 7 days)
⏭️ Skipping already posted: Account Executive - Backstage at spotify
[2026-01-12T17:27:10.843Z] [BOT] ⏭️  Skipping duplicate: JID_4e8b8312 (posted within 7 days)
⏭️ Skipping already posted: Product Solutions Architect 3 - Synthetics at datadog
[2026-01-12T17:27:10.843Z] [BOT] ⏭️  Skipping duplicate: JID_e13e860d (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Boston) at datadog
⏭️  Skipping duplicate: JID_cc075897 (posted within 7 days)
[2026-01-12T17:27:10.843Z] [BOT] ⏭️ Skipping already posted: Senior Director, Product Design at datadog
⏭️  Skipping duplicate: JID_b1499239-i_jr107155 (posted within 7 days)
⏭️ Skipping already posted: Web/Digital Specialist 1 at Sabre
[2026-01-12T17:27:10.843Z] [BOT] ⏭️  Skipping duplicate: JID_08b95b67-i_r18423 (posted within 7 days)
[2026-01-12T17:27:10.843Z] [BOT] ⏭️ Skipping already posted: Workday Extend Developer 1 at Iowa State University
[2026-01-12T17:27:10.843Z] [BOT] ⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
⏭️ Skipping already posted: Application Support - Java skills - Associate at HEXAWARE
⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-12T17:27:10.852Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*