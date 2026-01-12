# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T11:26:29.778Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-12T11:26:28.118Z] ========================================
[2026-01-12T11:26:28.120Z] Discord Bot Execution Log
[2026-01-12T11:26:28.120Z] Environment: GitHub Actions
[2026-01-12T11:26:28.120Z] Node Version: v20.19.6
[2026-01-12T11:26:28.120Z] ========================================
[2026-01-12T11:26:28.120Z] Environment Variables Check:
[2026-01-12T11:26:28.120Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T11:26:28.120Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T11:26:28.120Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T11:26:28.120Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T11:26:28.120Z] 
Multi-Channel Configuration:
[2026-01-12T11:26:28.121Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T11:26:28.121Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T11:26:28.121Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T11:26:28.121Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T11:26:28.121Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T11:26:28.121Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T11:26:28.121Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T11:26:28.121Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T11:26:28.121Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T11:26:28.121Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T11:26:28.121Z] 
Data Files Check:
[2026-01-12T11:26:28.122Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66052 bytes)
[2026-01-12T11:26:28.124Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 223283 bytes)
[2026-01-12T11:26:28.124Z] 
========================================
[2026-01-12T11:26:28.124Z] Starting Enhanced Discord Bot...
[2026-01-12T11:26:28.124Z] ========================================
[2026-01-12T11:26:28.657Z] [BOT] ✅ Loaded V2 database: 392 jobs
[2026-01-12T11:26:29.178Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T11:26:29.179Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T11:26:29.179Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T11:26:29.191Z] [BOT] ✅ Loaded pending queue: 259 total (239 pending, 20 enriched, 0 posted)
[2026-01-12T11:26:29.191Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at Accenture
[2026-01-12T11:26:29.192Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
[2026-01-12T11:26:29.192Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-12T11:26:29.192Z] [BOT] ⏭️  Skipping duplicate: JID_385c8ffa-6078908_13942096-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-12T11:26:29.192Z] [BOT] ⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
⏭️ Skipping already posted: Systems/Software Engineer 1 at Hewlett Packard Enterprise
[2026-01-12T11:26:29.192Z] [BOT] ⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer / Software Engineer at Northrop Grumman
[2026-01-12T11:26:29.193Z] [BOT] ⏭️  Skipping duplicate: JID_bc80fdc0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
⏭️  Skipping duplicate: JID_160d6d87 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
⏭️ Skipping already posted: Software Development Engineer 1 - Early Career at Blue Origin
[2026-01-12T11:26:29.193Z] [BOT] ⏭️  Skipping duplicate: JID_1fec24fe-1_r016047 (posted within 7 days)
⏭️ Skipping already posted: Financial Crimes Data Analyst 1 at Hancock Whitney
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
[2026-01-12T11:26:29.193Z] [BOT] ⏭️  Skipping duplicate: JID_b87a4832 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Graduate at Distyl AI
[2026-01-12T11:26:29.193Z] [BOT] ⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
⏭️ Skipping already posted: Applied Safety Research Engineer, Safeguards at anthropic
⏭️  Skipping duplicate: JID_33d25482 (posted within 7 days)
⏭️ Skipping already posted: Configuration Analyst 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Microsoft
⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - AI Video Agent at OpusClip
⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
[2026-01-12T11:26:29.194Z] [BOT] ⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Launches at anthropic
⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_b52ff88b (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Business at anthropic
[2026-01-12T11:26:29.194Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-allstate_careers-JID_0836cfe9-_r25322-1 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer - Multiple Levels Available at Allstate Insurance Company
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-12T11:26:29.206Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*