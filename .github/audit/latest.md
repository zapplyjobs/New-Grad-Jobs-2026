# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T21:38:39.302Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-06T21:38:37.306Z] ========================================
[2026-01-06T21:38:37.308Z] Discord Bot Execution Log
[2026-01-06T21:38:37.308Z] Environment: GitHub Actions
[2026-01-06T21:38:37.308Z] Node Version: v20.19.6
[2026-01-06T21:38:37.308Z] ========================================
[2026-01-06T21:38:37.308Z] Environment Variables Check:
[2026-01-06T21:38:37.308Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T21:38:37.308Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T21:38:37.308Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T21:38:37.308Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T21:38:37.308Z] 
Multi-Channel Configuration:
[2026-01-06T21:38:37.308Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T21:38:37.309Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T21:38:37.309Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T21:38:37.309Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T21:38:37.309Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T21:38:37.309Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T21:38:37.309Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T21:38:37.309Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T21:38:37.309Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T21:38:37.309Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T21:38:37.309Z] 
Data Files Check:
[2026-01-06T21:38:37.311Z] .github/data/new_jobs.json: ✅ Exists (10 items, 163053 bytes)
[2026-01-06T21:38:37.316Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 705860 bytes)
[2026-01-06T21:38:37.316Z] 
========================================
[2026-01-06T21:38:37.316Z] Starting Enhanced Discord Bot...
[2026-01-06T21:38:37.316Z] ========================================
[2026-01-06T21:38:37.854Z] [BOT] ✅ Loaded V2 database: 1381 jobs
[2026-01-06T21:38:38.496Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T21:38:38.496Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T21:38:38.496Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T21:38:38.498Z] [BOT] ✅ Loaded pending queue: 57 total (37 pending, 20 enriched, 0 posted)
[2026-01-06T21:38:38.498Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T21:38:38.498Z] [BOT] [BOT] 🔍 Sample enriched job: Enterprise Education Specialist (Contract) at anthropic
[2026-01-06T21:38:38.499Z] [BOT] ⏭️  Skipping duplicate: JID_617408df (posted within 7 days)
[2026-01-06T21:38:38.499Z] [BOT] ⏭️ Skipping already posted: Enterprise Education Specialist (Contract) at anthropic
[2026-01-06T21:38:38.499Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
[2026-01-06T21:38:38.499Z] [BOT] ⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-06T21:38:38.500Z] [BOT] ⏭️  Skipping duplicate: JID_65cdf179 (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Claude Developer Platform at anthropic
[2026-01-06T21:38:38.500Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
[2026-01-06T21:38:38.500Z] [BOT] ⏭️ Skipping already posted: Director of UI Engineering, Claude Consumer Products at anthropic
[2026-01-06T21:38:38.501Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_f82e6a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_58385d7a at anthropic
⏭️  Skipping duplicate: JID_f7d9cbb1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_e42d6991 at figma
⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-06T21:38:38.501Z] [BOT] ⏭️  Skipping duplicate: JID_b7f472ec (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager II - Personalization at spotify
⏭️  Skipping duplicate: JID_c3c61d5c (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Storage at reddit
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-06T21:38:38.501Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_655cfbb9-specialist_r-00172970 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0ebc6431 at Leidos
[2026-01-06T21:38:38.501Z] [BOT] ⏭️  Skipping duplicate: JID_fb69dbe6-icfexternal_career_site-JID_8dbb479e-researcher_r2600017 (posted within 7 days)
⏭️ Skipping already posted: ROLE_13d2701c at ICF International
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-06T21:38:38.501Z] [BOT] ⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
⏭️ Skipping already posted: AI Machine Learning Engineer 2 at Cisco
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-06T21:38:38.502Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T21:38:38.502Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-06T21:38:38.512Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*