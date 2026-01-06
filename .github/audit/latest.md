# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T17:53:11.533Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-06T17:53:09.832Z] ========================================
[2026-01-06T17:53:09.834Z] Discord Bot Execution Log
[2026-01-06T17:53:09.834Z] Environment: GitHub Actions
[2026-01-06T17:53:09.834Z] Node Version: v20.19.6
[2026-01-06T17:53:09.834Z] ========================================
[2026-01-06T17:53:09.834Z] Environment Variables Check:
[2026-01-06T17:53:09.834Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T17:53:09.834Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T17:53:09.834Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T17:53:09.835Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T17:53:09.835Z] 
Multi-Channel Configuration:
[2026-01-06T17:53:09.835Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T17:53:09.835Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T17:53:09.835Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T17:53:09.835Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T17:53:09.835Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T17:53:09.835Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T17:53:09.835Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T17:53:09.835Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T17:53:09.835Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T17:53:09.835Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T17:53:09.835Z] 
Data Files Check:
[2026-01-06T17:53:09.836Z] .github/data/new_jobs.json: ✅ Exists (10 items, 124870 bytes)
[2026-01-06T17:53:09.842Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 700910 bytes)
[2026-01-06T17:53:09.842Z] 
========================================
[2026-01-06T17:53:09.842Z] Starting Enhanced Discord Bot...
[2026-01-06T17:53:09.842Z] ========================================
[2026-01-06T17:53:10.368Z] [BOT] ✅ Loaded V2 database: 1371 jobs
[2026-01-06T17:53:10.847Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T17:53:10.848Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T17:53:10.848Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T17:53:10.852Z] [BOT] ✅ Loaded pending queue: 49 total (29 pending, 20 enriched, 0 posted)
[2026-01-06T17:53:10.852Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T17:53:10.852Z] [BOT] [BOT] 🔍 Sample enriched job: Head of Protective Services at anthropic
[2026-01-06T17:53:10.853Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
[2026-01-06T17:53:10.853Z] [BOT] ⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-06T17:53:10.853Z] [BOT] ⏭️  Skipping duplicate: JID_c3c61d5c (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Storage at reddit
[2026-01-06T17:53:10.853Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-06T17:53:10.853Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_655cfbb9-specialist_r-00172970 (posted within 7 days)
[2026-01-06T17:53:10.854Z] [BOT] ⏭️ Skipping already posted: ROLE_0ebc6431 at Leidos
⏭️  Skipping duplicate: JID_fb69dbe6-icfexternal_career_site-JID_8dbb479e-researcher_r2600017 (posted within 7 days)
[2026-01-06T17:53:10.854Z] [BOT] ⏭️ Skipping already posted: ROLE_13d2701c at ICF International
[2026-01-06T17:53:10.854Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-06T17:53:10.854Z] [BOT] ⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
⏭️ Skipping already posted: AI Machine Learning Engineer 2 at Cisco
[2026-01-06T17:53:10.854Z] [BOT] ⏭️  Skipping duplicate: JID_38c7271e (posted within 7 days)
[2026-01-06T17:53:10.854Z] [BOT] ⏭️ Skipping already posted: ROLE_2237147a at Shiftsmart
[2026-01-06T17:53:10.854Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-06T17:53:10.854Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
[2026-01-06T17:53:10.855Z] [BOT] ⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T17:53:10.855Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T17:53:10.855Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
[2026-01-06T17:53:10.855Z] [BOT] ⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Cloud Growth at Temporal Technologies
[2026-01-06T17:53:10.855Z] [BOT] ⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
⏭️ Skipping already posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
[2026-01-06T17:53:10.855Z] [BOT] ⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
[2026-01-06T17:53:10.855Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
[2026-01-06T17:53:10.855Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
[2026-01-06T17:53:10.856Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Intuit
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-06T17:53:10.866Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*