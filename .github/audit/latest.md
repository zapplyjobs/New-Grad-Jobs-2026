# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T23:37:53.519Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-08T23:37:51.671Z] ========================================
[2026-01-08T23:37:51.673Z] Discord Bot Execution Log
[2026-01-08T23:37:51.673Z] Environment: GitHub Actions
[2026-01-08T23:37:51.674Z] Node Version: v20.19.6
[2026-01-08T23:37:51.674Z] ========================================
[2026-01-08T23:37:51.674Z] Environment Variables Check:
[2026-01-08T23:37:51.674Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T23:37:51.674Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T23:37:51.674Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T23:37:51.674Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T23:37:51.674Z] 
Multi-Channel Configuration:
[2026-01-08T23:37:51.674Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T23:37:51.674Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T23:37:51.674Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T23:37:51.675Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T23:37:51.675Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T23:37:51.675Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T23:37:51.675Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T23:37:51.675Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T23:37:51.675Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T23:37:51.675Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T23:37:51.675Z] 
Data Files Check:
[2026-01-08T23:37:51.676Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152342 bytes)
[2026-01-08T23:37:51.682Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 758966 bytes)
[2026-01-08T23:37:51.682Z] 
========================================
[2026-01-08T23:37:51.682Z] Starting Enhanced Discord Bot...
[2026-01-08T23:37:51.682Z] ========================================
[2026-01-08T23:37:52.228Z] [BOT] ✅ Loaded V2 database: 1479 jobs
[2026-01-08T23:37:52.749Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T23:37:52.750Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T23:37:52.750Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T23:37:52.759Z] [BOT] ✅ Loaded pending queue: 183 total (163 pending, 20 enriched, 0 posted)
[2026-01-08T23:37:52.759Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engineering Manager, Salesforce at brex
[2026-01-08T23:37:52.760Z] [BOT] ⏭️  Skipping duplicate: JID_bdba1f64 (posted within 7 days)
[2026-01-08T23:37:52.760Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, Salesforce at brex
[2026-01-08T23:37:52.760Z] [BOT] ⏭️  Skipping duplicate: JID_3653a38b (posted within 7 days)
[2026-01-08T23:37:52.760Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, Salesforce at brex
⏭️  Skipping duplicate: JID_19fd3815 (posted within 7 days)
[2026-01-08T23:37:52.761Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, GTM Engineering  at brex
[2026-01-08T23:37:52.761Z] [BOT] ⏭️  Skipping duplicate: JID_f62ee649 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, GTM Engineering  at brex
⏭️  Skipping duplicate: JID_7107faa1 (posted within 7 days)
[2026-01-08T23:37:52.761Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, GTM Engineering  at brex
[2026-01-08T23:37:52.761Z] [BOT] ⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
[2026-01-08T23:37:52.761Z] [BOT] ⏭️  Skipping duplicate: JID_7d40f03b (posted within 7 days)
⏭️ Skipping already posted: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-01-08T23:37:52.761Z] [BOT] ⏭️  Skipping duplicate: JID_5287f9fe (posted within 7 days)
⏭️ Skipping already posted: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-01-08T23:37:52.761Z] [BOT] ⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
[2026-01-08T23:37:52.761Z] [BOT] ⏭️ Skipping already posted: Product Engineer, Applied AI, Digital Natives Business at anthropic
[2026-01-08T23:37:52.762Z] [BOT] ⏭️  Skipping duplicate: JID_fa7d515d (posted within 7 days)
[2026-01-08T23:37:52.762Z] [BOT] ⏭️ Skipping already posted: ROLE_ebcb7463 at brex
[2026-01-08T23:37:52.762Z] [BOT] ⏭️  Skipping duplicate: JID_0bd523c4 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ebcb7463 at brex
[2026-01-08T23:37:52.762Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-08T23:37:52.762Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
⏭️  Skipping duplicate: JID_b6886da8 (posted within 7 days)
⏭️ Skipping already posted: Data Operations, Product Partnerships at anthropic
⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
[2026-01-08T23:37:52.762Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-08T23:37:52.762Z] [BOT] ⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BlueCross BlueShield of Tennessee
[2026-01-08T23:37:52.762Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378344-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-08T23:37:52.774Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*