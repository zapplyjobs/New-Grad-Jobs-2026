# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T14:00:23.991Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-12T14:00:22.051Z] ========================================
[2026-01-12T14:00:22.053Z] Discord Bot Execution Log
[2026-01-12T14:00:22.053Z] Environment: GitHub Actions
[2026-01-12T14:00:22.053Z] Node Version: v20.19.6
[2026-01-12T14:00:22.054Z] ========================================
[2026-01-12T14:00:22.054Z] Environment Variables Check:
[2026-01-12T14:00:22.054Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T14:00:22.054Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T14:00:22.054Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T14:00:22.054Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T14:00:22.054Z] 
Multi-Channel Configuration:
[2026-01-12T14:00:22.054Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T14:00:22.054Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T14:00:22.054Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T14:00:22.054Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T14:00:22.055Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T14:00:22.055Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T14:00:22.055Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T14:00:22.055Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T14:00:22.055Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T14:00:22.055Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T14:00:22.055Z] 
Data Files Check:
[2026-01-12T14:00:22.056Z] .github/data/new_jobs.json: ✅ Exists (10 items, 51674 bytes)
[2026-01-12T14:00:22.057Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 224703 bytes)
[2026-01-12T14:00:22.057Z] 
========================================
[2026-01-12T14:00:22.057Z] Starting Enhanced Discord Bot...
[2026-01-12T14:00:22.057Z] ========================================
[2026-01-12T14:00:22.599Z] [BOT] ✅ Loaded V2 database: 394 jobs
[2026-01-12T14:00:23.304Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-12T14:00:23.304Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T14:00:23.304Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T14:00:23.317Z] [BOT] ✅ Loaded pending queue: 262 total (242 pending, 20 enriched, 0 posted)
[2026-01-12T14:00:23.317Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: AI Lab Junior Machine Learning Engineer at Hewlett Packard (HP)
[2026-01-12T14:00:23.317Z] [BOT] ⏭️  Skipping duplicate: JID_b5dc7f29-engineer_3150991-2 (posted within 7 days)
[2026-01-12T14:00:23.318Z] [BOT] ⏭️ Skipping already posted: ROLE_a6074d1b at Hewlett Packard (HP)
[2026-01-12T14:00:23.318Z] [BOT] ⏭️  Skipping duplicate: JID_b1499239-i_jr107155 (posted within 7 days)
⏭️ Skipping already posted: Web/Digital Specialist 1 at Sabre
[2026-01-12T14:00:23.318Z] [BOT] ⏭️  Skipping duplicate: JID_08b95b67-i_r18423 (posted within 7 days)
[2026-01-12T14:00:23.318Z] [BOT] ⏭️ Skipping already posted: Workday Extend Developer 1 at Iowa State University
⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
⏭️ Skipping already posted: Application Support - Java skills - Associate at HEXAWARE
[2026-01-12T14:00:23.318Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_385c8ffa-6078908_13942096-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
[2026-01-12T14:00:23.318Z] [BOT] ⏭️ Skipping already posted: Systems/Software Engineer 1 at Hewlett Packard Enterprise
⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
[2026-01-12T14:00:23.319Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer / Software Engineer at Northrop Grumman
[2026-01-12T14:00:23.319Z] [BOT] ⏭️  Skipping duplicate: JID_bc80fdc0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
[2026-01-12T14:00:23.319Z] [BOT] ⏭️  Skipping duplicate: JID_160d6d87 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
[2026-01-12T14:00:23.319Z] [BOT] ⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
⏭️ Skipping already posted: Software Development Engineer 1 - Early Career at Blue Origin
[2026-01-12T14:00:23.319Z] [BOT] ⏭️  Skipping duplicate: JID_1fec24fe-1_r016047 (posted within 7 days)
⏭️ Skipping already posted: Financial Crimes Data Analyst 1 at Hancock Whitney
[2026-01-12T14:00:23.319Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
[2026-01-12T14:00:23.319Z] [BOT] ⏭️  Skipping duplicate: JID_b87a4832 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Graduate at Distyl AI
⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
⏭️ Skipping already posted: Applied Safety Research Engineer, Safeguards at anthropic
[2026-01-12T14:00:23.319Z] [BOT] ⏭️  Skipping duplicate: JID_33d25482 (posted within 7 days)
⏭️ Skipping already posted: Configuration Analyst 1 at Huntington Ingalls Industries
[2026-01-12T14:00:23.319Z] [BOT] ⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Microsoft
[2026-01-12T14:00:23.320Z] [BOT] ⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - AI Video Agent at OpusClip
⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-12T14:00:23.332Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*