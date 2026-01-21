# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T04:34:53.193Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T04:34:17.649Z] ========================================
[2026-01-21T04:34:17.651Z] Discord Bot Execution Log
[2026-01-21T04:34:17.651Z] Environment: GitHub Actions
[2026-01-21T04:34:17.651Z] Node Version: v20.19.6
[2026-01-21T04:34:17.651Z] ========================================
[2026-01-21T04:34:17.651Z] Environment Variables Check:
[2026-01-21T04:34:17.651Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T04:34:17.651Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T04:34:17.651Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T04:34:17.651Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T04:34:17.651Z] 
Multi-Channel Configuration:
[2026-01-21T04:34:17.652Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T04:34:17.652Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T04:34:17.652Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T04:34:17.652Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T04:34:17.652Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T04:34:17.652Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T04:34:17.652Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T04:34:17.652Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T04:34:17.652Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T04:34:17.652Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T04:34:17.652Z] 
Data Files Check:
[2026-01-21T04:34:17.654Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157841 bytes)
[2026-01-21T04:34:17.665Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1746701 bytes)
[2026-01-21T04:34:17.665Z] 
========================================
[2026-01-21T04:34:17.665Z] Starting Enhanced Discord Bot...
[2026-01-21T04:34:17.665Z] ========================================
[2026-01-21T04:34:18.183Z] [BOT] ✅ Loaded V2 database: 3090 jobs
[2026-01-21T04:34:19.057Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T04:34:19.057Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T04:34:19.057Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T04:34:19.171Z] [BOT] ✅ Loaded pending queue: 2741 total (2721 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Staff Software Engineer, Player Experience at discord
[2026-01-21T04:34:19.174Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T04:34:19.175Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T04:34:19.175Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T04:34:19.176Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T04:34:19.176Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T04:34:19.180Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-21T04:34:19.181Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Player Experience" @ discord
[2026-01-21T04:34:19.181Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:34:19.185Z] [BOT ERROR] (node:3350) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T04:34:19.341Z] [BOT] ✅ Posted message: Staff Software Engineer, Player Experience @ discord in #tech-jobs
[2026-01-21T04:34:19.341Z] [BOT] ✅ Industry: Staff Software Engineer, Player Experience @ discord
[2026-01-21T04:34:19.342Z] [BOT] 💾 Added channel posting: Staff Software Engineer, Player Experience @ discord → category channel (1 total channels)
[2026-01-21T04:34:19.342Z] [BOT] 💾 BEFORE ARCHIVING: 3091 jobs in database
[2026-01-21T04:34:19.345Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T04:34:19.351Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-21T04:34:19.351Z] [BOT] ✅ Archiving complete: 20 archived, 3071 active
[2026-01-21T04:34:19.378Z] [BOT] 💾 Saved posted_jobs.json: 3071 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:20.881Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Player Experience @ discord (instance #1)
[2026-01-21T04:34:20.882Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-21T04:34:20.883Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-21T04:34:20.900Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:20.901Z] [BOT] 📍 [ROUTING] "Partner Development Manager, Build Partners" @ anthropic
[2026-01-21T04:34:20.901Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:34:21.194Z] [BOT] ✅ Posted message: Partner Development Manager, Build Partners @ anthropic in #tech-jobs
  ✅ Industry: Partner Development Manager, Build Partners @ anthropic
[2026-01-21T04:34:21.195Z] [BOT] 💾 Added channel posting: Partner Development Manager, Build Partners @ anthropic → category channel (1 total channels)
[2026-01-21T04:34:21.195Z] [BOT] 💾 BEFORE ARCHIVING: 3073 jobs in database
[2026-01-21T04:34:21.197Z] [BOT] ✅ No jobs to archive (all 3073 jobs within 7-day window)
[2026-01-21T04:34:21.218Z] [BOT] 💾 Saved posted_jobs.json: 3073 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:22.719Z] [BOT] 💾 Marked as posted: Partner Development Manager, Build Partners @ anthropic (instance #1)
[2026-01-21T04:34:22.719Z] [BOT] 💾 BEFORE ARCHIVING: 3074 jobs in database
[2026-01-21T04:34:22.721Z] [BOT] ✅ No jobs to archive (all 3074 jobs within 7-day window)
[2026-01-21T04:34:22.742Z] [BOT] 💾 Saved posted_jobs.json: 3074 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:22.742Z] [BOT] 📍 [ROUTING] "Associate – Application Engineer" @ ORG_86a62f4a
   Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:34:22.997Z] [BOT] ✅ Posted message: Associate – Application Engineer @ ORG_86a62f4a in #tech-jobs
[2026-01-21T04:34:22.997Z] [BOT] ✅ Industry: Associate – Application Engineer @ ORG_86a62f4a
[2026-01-21T04:34:22.998Z] [BOT] 💾 Added channel posting: Associate – Application Engineer @ ORG_86a62f4a → category channel (1 total channels)
[2026-01-21T04:34:22.998Z] [BOT] 💾 BEFORE ARCHIVING: 3075 jobs in database
[2026-01-21T04:34:23.000Z] [BOT] ✅ No jobs to archive (all 3075 jobs within 7-day window)
[2026-01-21T04:34:23.019Z] [BOT] 💾 Saved posted_jobs.json: 3075 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:24.795Z] [BOT] ✅ Posted message: Associate – Application Engineer @ ORG_86a62f4a in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T04:34:24.796Z] [BOT] 💾 Added channel posting: Associate – Application Engineer @ ORG_86a62f4a → location channel (2 total channels)
[2026-01-21T04:34:24.796Z] [BOT] 💾 BEFORE ARCHIVING: 3075 jobs in database
[2026-01-21T04:34:24.798Z] [BOT] ✅ No jobs to archive (all 3075 jobs within 7-day window)
[2026-01-21T04:34:24.815Z] [BOT] 💾 Saved posted_jobs.json: 3075 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:26.317Z] [BOT] 💾 Marked as posted: Associate – Application Engineer @ ORG_86a62f4a (instance #1)
💾 BEFORE ARCHIVING: 3076 jobs in database
[2026-01-21T04:34:26.319Z] [BOT] ✅ No jobs to archive (all 3076 jobs within 7-day window)
[2026-01-21T04:34:26.337Z] [BOT] 💾 Saved posted_jobs.json: 3076 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:26.337Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Platform Security" @ discord
   Category: TECH (matched: "software")
[2026-01-21T04:34:26.337Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T04:34:26.664Z] [BOT] ✅ Posted message: Staff Software Engineer, Platform Security @ discord in #tech-jobs
  ✅ Industry: Staff Software Engineer, Platform Security @ discord
[2026-01-21T04:34:26.665Z] [BOT] 💾 Added channel posting: Staff Software Engineer, Platform Security @ discord → category channel (1 total channels)
[2026-01-21T04:34:26.665Z] [BOT] 💾 BEFORE ARCHIVING: 3077 jobs in database
[2026-01-21T04:34:26.667Z] [BOT] ✅ No jobs to archive (all 3077 jobs within 7-day window)
[2026-01-21T04:34:26.684Z] [BOT] 💾 Saved posted_jobs.json: 3077 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:28.186Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Platform Security @ discord (instance #1)
[2026-01-21T04:34:28.186Z] [BOT] 💾 BEFORE ARCHIVING: 3078 jobs in database
[2026-01-21T04:34:28.188Z] [BOT] ✅ No jobs to archive (all 3078 jobs within 7-day window)
[2026-01-21T04:34:28.209Z] [BOT] 💾 Saved posted_jobs.json: 3078 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:28.209Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Platform Security" @ discord
[2026-01-21T04:34:28.210Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:34:28.355Z] [BOT] ✅ Posted message: Senior Software Engineer, Platform Security @ discord in #tech-jobs
[2026-01-21T04:34:28.355Z] [BOT] ✅ Industry: Senior Software Engineer, Platform Security @ discord
[2026-01-21T04:34:28.356Z] [BOT] 💾 Added channel posting: Senior Software Engineer, Platform Security @ discord → category channel (1 total channels)
[2026-01-21T04:34:28.356Z] [BOT] 💾 BEFORE ARCHIVING: 3079 jobs in database
[2026-01-21T04:34:28.358Z] [BOT] ✅ No jobs to archive (all 3079 jobs within 7-day window)
[2026-01-21T04:34:28.377Z] [BOT] 💾 Saved posted_jobs.json: 3079 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:29.878Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Platform Security @ discord (instance #1)
[2026-01-21T04:34:29.879Z] [BOT] 💾 BEFORE ARCHIVING: 3080 jobs in database
[2026-01-21T04:34:29.881Z] [BOT] ✅ No jobs to archive (all 3080 jobs within 7-day window)
[2026-01-21T04:34:29.901Z] [BOT] 💾 Saved posted_jobs.json: 3080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:29.901Z] [BOT] 📍 [ROUTING] "Field Marketing Manager, Startups" @ anthropic
[2026-01-21T04:34:29.901Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:34:30.292Z] [BOT] ✅ Posted message: Field Marketing Manager, Startups @ anthropic in #tech-jobs
  ✅ Industry: Field Marketing Manager, Startups @ anthropic
[2026-01-21T04:34:30.293Z] [BOT] 💾 Added channel posting: Field Marketing Manager, Startups @ anthropic → category channel (1 total channels)
[2026-01-21T04:34:30.293Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-21T04:34:30.295Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-21T04:34:30.313Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:31.814Z] [BOT] 💾 Marked as posted: Field Marketing Manager, Startups @ anthropic (instance #1)
[2026-01-21T04:34:31.814Z] [BOT] 💾 BEFORE ARCHIVING: 3082 jobs in database
[2026-01-21T04:34:31.816Z] [BOT] ✅ No jobs to archive (all 3082 jobs within 7-day window)
[2026-01-21T04:34:31.834Z] [BOT] 💾 Saved posted_jobs.json: 3082 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:34.835Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-21T04:34:34.835Z] [BOT] 📍 [ROUTING] "Director of Sales, Scaled Vendor Sales" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T04:34:35.082Z] [BOT] ✅ Posted message: Director of Sales, Scaled Vendor Sales @ spotify in #ai-jobs
  ✅ Industry: Director of Sales, Scaled Vendor Sales @ spotify
[2026-01-21T04:34:35.082Z] [BOT] 💾 Added channel posting: Director of Sales, Scaled Vendor Sales @ spotify → category channel (1 total channels)
[2026-01-21T04:34:35.082Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-21T04:34:35.084Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-21T04:34:35.102Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:36.872Z] [BOT] ✅ Posted message: Director of Sales, Scaled Vendor Sales @ spotify in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T04:34:36.872Z] [BOT] 💾 Added channel posting: Director of Sales, Scaled Vendor Sales @ spotify → location channel (2 total channels)
[2026-01-21T04:34:36.872Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-21T04:34:36.874Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-21T04:34:36.893Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:38.395Z] [BOT] 💾 Marked as posted: Director of Sales, Scaled Vendor Sales @ spotify (instance #1)
[2026-01-21T04:34:38.395Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-21T04:34:38.397Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-21T04:34:38.415Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:41.415Z] [BOT] 📌 Posting 3 jobs to #finance-jobs
[2026-01-21T04:34:41.416Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Colo & Networks" @ anthropic
[2026-01-21T04:34:41.416Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T04:34:41.668Z] [BOT] ✅ Posted message: Commercial Counsel, Colo & Networks @ anthropic in #finance-jobs
  ✅ Industry: Commercial Counsel, Colo & Networks @ anthropic
[2026-01-21T04:34:41.669Z] [BOT] 💾 Added channel posting: Commercial Counsel, Colo & Networks @ anthropic → category channel (1 total channels)
[2026-01-21T04:34:41.669Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-21T04:34:41.670Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-21T04:34:41.692Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:43.194Z] [BOT] 💾 Marked as posted: Commercial Counsel, Colo & Networks @ anthropic (instance #1)
[2026-01-21T04:34:43.194Z] [BOT] 💾 BEFORE ARCHIVING: 3086 jobs in database
[2026-01-21T04:34:43.196Z] [BOT] ✅ No jobs to archive (all 3086 jobs within 7-day window)
[2026-01-21T04:34:43.214Z] [BOT] 💾 Saved posted_jobs.json: 3086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:43.214Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Compute & Infrastructure" @ anthropic
[2026-01-21T04:34:43.214Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T04:34:43.441Z] [BOT] ✅ Posted message: Commercial Counsel, Compute & Infrastructure @ anthropic in #finance-jobs
[2026-01-21T04:34:43.442Z] [BOT] ✅ Industry: Commercial Counsel, Compute & Infrastructure @ anthropic
[2026-01-21T04:34:43.442Z] [BOT] 💾 Added channel posting: Commercial Counsel, Compute & Infrastructure @ anthropic → category channel (1 total channels)
[2026-01-21T04:34:43.442Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-21T04:34:43.444Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-21T04:34:43.463Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:44.965Z] [BOT] 💾 Marked as posted: Commercial Counsel, Compute & Infrastructure @ anthropic (instance #1)
[2026-01-21T04:34:44.965Z] [BOT] 💾 BEFORE ARCHIVING: 3088 jobs in database
[2026-01-21T04:34:44.967Z] [BOT] ✅ No jobs to archive (all 3088 jobs within 7-day window)
[2026-01-21T04:34:44.987Z] [BOT] 💾 Saved posted_jobs.json: 3088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:44.987Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Datacenters & Construction" @ anthropic
[2026-01-21T04:34:44.988Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T04:34:45.174Z] [BOT] ✅ Posted message: Commercial Counsel, Datacenters & Construction @ anthropic in #finance-jobs
  ✅ Industry: Commercial Counsel, Datacenters & Construction @ anthropic
[2026-01-21T04:34:45.175Z] [BOT] 💾 Added channel posting: Commercial Counsel, Datacenters & Construction @ anthropic → category channel (1 total channels)
[2026-01-21T04:34:45.175Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-21T04:34:45.177Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-21T04:34:45.196Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:46.698Z] [BOT] 💾 Marked as posted: Commercial Counsel, Datacenters & Construction @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 3090 jobs in database
[2026-01-21T04:34:46.700Z] [BOT] ✅ No jobs to archive (all 3090 jobs within 7-day window)
[2026-01-21T04:34:46.720Z] [BOT] 💾 Saved posted_jobs.json: 3090 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:34:49.721Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T04:34:49.721Z] [BOT] ⏭️  Skipping duplicate: JID_d9a2c64b (posted within 7 days)
[2026-01-21T04:34:49.722Z] [BOT] ⏭️  Skipping duplicate: JID_d03a4142 (posted within 7 days)
⏭️  Skipping duplicate: JID_c9e10682 (posted within 7 days)
[2026-01-21T04:34:49.722Z] [BOT] ⏭️  Skipping duplicate: JID_8d505e85 (posted within 7 days)
[2026-01-21T04:34:49.722Z] [BOT] ⏭️  Skipping duplicate: JID_dd670afe (posted within 7 days)
[2026-01-21T04:34:49.722Z] [BOT] ⏭️  Skipping duplicate: JID_7a5477b6 (posted within 7 days)
[2026-01-21T04:34:49.723Z] [BOT] ⏭️  Skipping duplicate: JID_d761c3b9-blackrock_professional-JID_dd388114-engineer_r258341-1 (posted within 7 days)
[2026-01-21T04:34:49.723Z] [BOT] ⏭️  Skipping duplicate: JID_79b59292 (posted within 7 days)
[2026-01-21T04:34:49.723Z] [BOT] ⏭️  Skipping duplicate: JID_df9e0885 (posted within 7 days)
[2026-01-21T04:34:49.723Z] [BOT] ⏭️  Skipping duplicate: JID_1659542d (posted within 7 days)
[2026-01-21T04:34:49.829Z] [BOT] ✅ Loaded pending queue: 2741 total (2721 pending, 20 enriched, 0 posted)
[2026-01-21T04:34:50.021Z] [BOT] ✅ Saved pending queue: 2741 total (2721 pending, 10 enriched, 10 posted)
[2026-01-21T04:34:50.021Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T04:34:50.085Z] [BOT] 📂 Loaded 5635 existing routing entries
[2026-01-21T04:34:50.163Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5645
   Timestamp: 2026-01-21T04:34:50.137Z
[2026-01-21T04:34:50.164Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 12
[2026-01-21T04:34:50.164Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-21T04:34:50.164Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 6 posts
[2026-01-21T04:34:50.164Z] [BOT] 2. #finance-jobs: 3 posts
     3. #JID_98d4f0de: 2 posts
     4. #ai-jobs: 1 posts
[2026-01-21T04:34:50.164Z] [BOT] [STATS] Channel stats saved
[2026-01-21T04:34:52.189Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3350) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*