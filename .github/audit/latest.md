# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T12:56:45.238Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T12:56:10.043Z] ========================================
[2026-01-21T12:56:10.045Z] Discord Bot Execution Log
[2026-01-21T12:56:10.045Z] Environment: GitHub Actions
[2026-01-21T12:56:10.045Z] Node Version: v20.19.6
[2026-01-21T12:56:10.045Z] ========================================
[2026-01-21T12:56:10.045Z] Environment Variables Check:
[2026-01-21T12:56:10.045Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T12:56:10.045Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T12:56:10.045Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T12:56:10.045Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T12:56:10.046Z] 
Multi-Channel Configuration:
[2026-01-21T12:56:10.046Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T12:56:10.046Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T12:56:10.046Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T12:56:10.046Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T12:56:10.046Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T12:56:10.046Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T12:56:10.046Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T12:56:10.046Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T12:56:10.046Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T12:56:10.046Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T12:56:10.046Z] 
Data Files Check:
[2026-01-21T12:56:10.047Z] .github/data/new_jobs.json: ✅ Exists (10 items, 82133 bytes)
[2026-01-21T12:56:10.060Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1963490 bytes)
[2026-01-21T12:56:10.060Z] 
========================================
[2026-01-21T12:56:10.060Z] Starting Enhanced Discord Bot...
[2026-01-21T12:56:10.060Z] ========================================
[2026-01-21T12:56:10.587Z] [BOT] ✅ Loaded V2 database: 3422 jobs
[2026-01-21T12:56:11.302Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T12:56:11.302Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T12:56:11.303Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T12:56:11.418Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Product Marketing Manager, Ads  at discord
[2026-01-21T12:56:11.423Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T12:56:11.424Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T12:56:11.424Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T12:56:11.425Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T12:56:11.425Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T12:56:11.429Z] [BOT] 📌 Posting 8 jobs to #tech-jobs
[2026-01-21T12:56:11.429Z] [BOT] 📍 [ROUTING] "Product Marketing Manager, Ads " @ discord
[2026-01-21T12:56:11.429Z] [BOT] Category: TECH (matched: "product marketing")
   Channel: tech-jobs (1462...4987)
[2026-01-21T12:56:11.433Z] [BOT ERROR] (node:2492) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T12:56:11.597Z] [BOT] ✅ Posted message: Product Marketing Manager, Ads  @ discord in #tech-jobs
[2026-01-21T12:56:11.597Z] [BOT] ✅ Industry: Product Marketing Manager, Ads  @ discord
[2026-01-21T12:56:11.599Z] [BOT] 💾 Added channel posting: Product Marketing Manager, Ads  @ discord → category channel (1 total channels)
[2026-01-21T12:56:11.599Z] [BOT] 💾 BEFORE ARCHIVING: 3423 jobs in database
[2026-01-21T12:56:11.601Z] [BOT] ✅ No jobs to archive (all 3423 jobs within 7-day window)
[2026-01-21T12:56:11.630Z] [BOT] 💾 Saved posted_jobs.json: 3423 active jobs
[2026-01-21T12:56:11.630Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:13.133Z] [BOT] 💾 Marked as posted: Product Marketing Manager, Ads  @ discord (instance #1)
[2026-01-21T12:56:13.133Z] [BOT] 💾 BEFORE ARCHIVING: 3424 jobs in database
[2026-01-21T12:56:13.135Z] [BOT] ✅ No jobs to archive (all 3424 jobs within 7-day window)
[2026-01-21T12:56:13.155Z] [BOT] 💾 Saved posted_jobs.json: 3424 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:13.155Z] [BOT] 📍 [ROUTING] "Product Manager, Claude Code Growth" @ anthropic
   Category: TECH (matched: "product")
[2026-01-21T12:56:13.156Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T12:56:13.408Z] [BOT] ✅ Posted message: Product Manager, Claude Code Growth @ anthropic in #tech-jobs
  ✅ Industry: Product Manager, Claude Code Growth @ anthropic
[2026-01-21T12:56:13.409Z] [BOT] 💾 Added channel posting: Product Manager, Claude Code Growth @ anthropic → category channel (1 total channels)
[2026-01-21T12:56:13.409Z] [BOT] 💾 BEFORE ARCHIVING: 3425 jobs in database
[2026-01-21T12:56:13.412Z] [BOT] ✅ No jobs to archive (all 3425 jobs within 7-day window)
[2026-01-21T12:56:13.434Z] [BOT] 💾 Saved posted_jobs.json: 3425 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:14.934Z] [BOT] 💾 Marked as posted: Product Manager, Claude Code Growth @ anthropic (instance #1)
[2026-01-21T12:56:14.934Z] [BOT] 💾 BEFORE ARCHIVING: 3426 jobs in database
[2026-01-21T12:56:14.936Z] [BOT] ✅ No jobs to archive (all 3426 jobs within 7-day window)
[2026-01-21T12:56:14.958Z] [BOT] 💾 Saved posted_jobs.json: 3426 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:14.959Z] [BOT] 📍 [ROUTING] "Sales Engineer" @ vercel
   Category: TECH (default)
[2026-01-21T12:56:14.959Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T12:56:15.199Z] [BOT] ✅ Posted message: Sales Engineer @ vercel in #tech-jobs
[2026-01-21T12:56:15.199Z] [BOT] ✅ Industry: Sales Engineer @ vercel
[2026-01-21T12:56:15.199Z] [BOT] 💾 Added channel posting: Sales Engineer @ vercel → category channel (1 total channels)
[2026-01-21T12:56:15.200Z] [BOT] 💾 BEFORE ARCHIVING: 3427 jobs in database
[2026-01-21T12:56:15.202Z] [BOT] ✅ No jobs to archive (all 3427 jobs within 7-day window)
[2026-01-21T12:56:15.223Z] [BOT] 💾 Saved posted_jobs.json: 3427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:16.724Z] [BOT] 💾 Marked as posted: Sales Engineer @ vercel (instance #1)
[2026-01-21T12:56:16.725Z] [BOT] 💾 BEFORE ARCHIVING: 3428 jobs in database
[2026-01-21T12:56:16.727Z] [BOT] ✅ No jobs to archive (all 3428 jobs within 7-day window)
[2026-01-21T12:56:16.747Z] [BOT] 💾 Saved posted_jobs.json: 3428 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:16.747Z] [BOT] 📍 [ROUTING] "Associate Software Quality Engineer I" @ ORG_df6ef51e
[2026-01-21T12:56:16.747Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T12:56:16.978Z] [BOT] ✅ Posted message: Associate Software Quality Engineer I @ ORG_df6ef51e in #tech-jobs
[2026-01-21T12:56:16.978Z] [BOT] ✅ Industry: Associate Software Quality Engineer I @ ORG_df6ef51e
[2026-01-21T12:56:16.979Z] [BOT] 💾 Added channel posting: Associate Software Quality Engineer I @ ORG_df6ef51e → category channel (1 total channels)
[2026-01-21T12:56:16.979Z] [BOT] 💾 BEFORE ARCHIVING: 3429 jobs in database
[2026-01-21T12:56:16.981Z] [BOT] ✅ No jobs to archive (all 3429 jobs within 7-day window)
[2026-01-21T12:56:17.001Z] [BOT] 💾 Saved posted_jobs.json: 3429 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:18.766Z] [BOT] ✅ Posted message: Associate Software Quality Engineer I @ ORG_df6ef51e in #JID_ead674af
[2026-01-21T12:56:18.766Z] [BOT] ✅ Location: JID_ead674af
💾 Added channel posting: Associate Software Quality Engineer I @ ORG_df6ef51e → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3429 jobs in database
[2026-01-21T12:56:18.770Z] [BOT] ✅ No jobs to archive (all 3429 jobs within 7-day window)
[2026-01-21T12:56:18.790Z] [BOT] 💾 Saved posted_jobs.json: 3429 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:20.291Z] [BOT] 💾 Marked as posted: Associate Software Quality Engineer I @ ORG_df6ef51e (instance #1)
[2026-01-21T12:56:20.291Z] [BOT] 💾 BEFORE ARCHIVING: 3430 jobs in database
[2026-01-21T12:56:20.293Z] [BOT] ✅ No jobs to archive (all 3430 jobs within 7-day window)
[2026-01-21T12:56:20.316Z] [BOT] 💾 Saved posted_jobs.json: 3430 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:20.317Z] [BOT] 📍 [ROUTING] "Associate Cloud Engineer" @ ORG_591935b1 Storage
[2026-01-21T12:56:20.317Z] [BOT] Category: TECH (matched: "DevOps/SRE")
   Channel: tech-jobs (1462...4987)
[2026-01-21T12:56:20.480Z] [BOT] ✅ Posted message: Associate Cloud Engineer @ ORG_591935b1 Storage in #tech-jobs
[2026-01-21T12:56:20.480Z] [BOT] ✅ Industry: Associate Cloud Engineer @ ORG_591935b1 Storage
[2026-01-21T12:56:20.481Z] [BOT] 💾 Added channel posting: Associate Cloud Engineer @ ORG_591935b1 Storage → category channel (1 total channels)
[2026-01-21T12:56:20.481Z] [BOT] 💾 BEFORE ARCHIVING: 3431 jobs in database
[2026-01-21T12:56:20.483Z] [BOT] ✅ No jobs to archive (all 3431 jobs within 7-day window)
[2026-01-21T12:56:20.504Z] [BOT] 💾 Saved posted_jobs.json: 3431 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:22.006Z] [BOT] 💾 Marked as posted: Associate Cloud Engineer @ ORG_591935b1 Storage (instance #1)
[2026-01-21T12:56:22.006Z] [BOT] 💾 BEFORE ARCHIVING: 3432 jobs in database
[2026-01-21T12:56:22.009Z] [BOT] ✅ No jobs to archive (all 3432 jobs within 7-day window)
[2026-01-21T12:56:22.030Z] [BOT] 💾 Saved posted_jobs.json: 3432 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:22.031Z] [BOT] 📍 [ROUTING] "Manager, Product Marketing " @ figma
[2026-01-21T12:56:22.031Z] [BOT] Category: TECH (matched: "product marketing")
   Channel: tech-jobs (1462...4987)
[2026-01-21T12:56:22.249Z] [BOT] ✅ Posted message: Manager, Product Marketing  @ figma in #tech-jobs
  ✅ Industry: Manager, Product Marketing  @ figma
[2026-01-21T12:56:22.250Z] [BOT] 💾 Added channel posting: Manager, Product Marketing  @ figma → category channel (1 total channels)
[2026-01-21T12:56:22.250Z] [BOT] 💾 BEFORE ARCHIVING: 3433 jobs in database
[2026-01-21T12:56:22.252Z] [BOT] ✅ No jobs to archive (all 3433 jobs within 7-day window)
[2026-01-21T12:56:22.271Z] [BOT] 💾 Saved posted_jobs.json: 3433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:23.773Z] [BOT] 💾 Marked as posted: Manager, Product Marketing  @ figma (instance #1)
[2026-01-21T12:56:23.773Z] [BOT] 💾 BEFORE ARCHIVING: 3434 jobs in database
[2026-01-21T12:56:23.775Z] [BOT] ✅ No jobs to archive (all 3434 jobs within 7-day window)
[2026-01-21T12:56:23.795Z] [BOT] 💾 Saved posted_jobs.json: 3434 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:23.795Z] [BOT] 📍 [ROUTING] "Probabilistic Risk Assessment Engineer 1" @ ORG_41a6741einghouse Electric Company
[2026-01-21T12:56:23.796Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T12:56:23.966Z] [BOT] ✅ Posted message: Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company in #tech-jobs
  ✅ Industry: Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company
[2026-01-21T12:56:23.967Z] [BOT] 💾 Added channel posting: Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company → category channel (1 total channels)
[2026-01-21T12:56:23.967Z] [BOT] 💾 BEFORE ARCHIVING: 3435 jobs in database
[2026-01-21T12:56:23.969Z] [BOT] ✅ No jobs to archive (all 3435 jobs within 7-day window)
[2026-01-21T12:56:23.988Z] [BOT] 💾 Saved posted_jobs.json: 3435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:25.490Z] [BOT] 💾 Marked as posted: Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company (instance #1)
[2026-01-21T12:56:25.490Z] [BOT] 💾 BEFORE ARCHIVING: 3436 jobs in database
[2026-01-21T12:56:25.492Z] [BOT] ✅ No jobs to archive (all 3436 jobs within 7-day window)
[2026-01-21T12:56:25.512Z] [BOT] 💾 Saved posted_jobs.json: 3436 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:25.513Z] [BOT] 📍 [ROUTING] "Energy Storage Application Engineer" @ ORG_74da6415
[2026-01-21T12:56:25.513Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T12:56:25.738Z] [BOT] ✅ Posted message: Energy Storage Application Engineer @ ORG_74da6415 in #tech-jobs
  ✅ Industry: Energy Storage Application Engineer @ ORG_74da6415
[2026-01-21T12:56:25.739Z] [BOT] 💾 Added channel posting: Energy Storage Application Engineer @ ORG_74da6415 → category channel (1 total channels)
[2026-01-21T12:56:25.739Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-21T12:56:25.741Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-21T12:56:25.761Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:27.458Z] [BOT] ✅ Posted message: Energy Storage Application Engineer @ ORG_74da6415 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T12:56:27.458Z] [BOT] 💾 Added channel posting: Energy Storage Application Engineer @ ORG_74da6415 → location channel (2 total channels)
[2026-01-21T12:56:27.458Z] [BOT] 💾 BEFORE ARCHIVING: 3437 jobs in database
[2026-01-21T12:56:27.460Z] [BOT] ✅ No jobs to archive (all 3437 jobs within 7-day window)
[2026-01-21T12:56:27.480Z] [BOT] 💾 Saved posted_jobs.json: 3437 active jobs
[2026-01-21T12:56:27.480Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:28.981Z] [BOT] 💾 Marked as posted: Energy Storage Application Engineer @ ORG_74da6415 (instance #1)
[2026-01-21T12:56:28.982Z] [BOT] 💾 BEFORE ARCHIVING: 3438 jobs in database
[2026-01-21T12:56:28.984Z] [BOT] ✅ No jobs to archive (all 3438 jobs within 7-day window)
[2026-01-21T12:56:29.004Z] [BOT] 💾 Saved posted_jobs.json: 3438 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:32.004Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-21T12:56:32.004Z] [BOT] 📍 [ROUTING] "Software Developer - 2026 Leadership Development Program - Houston" @ ORG_49d0893a Group
[2026-01-21T12:56:32.004Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T12:56:32.554Z] [BOT] ✅ Posted message: Software Developer - 2026 Leadership Development Program - Houston @ ORG_49d0893a Group in #ai-jobs
[2026-01-21T12:56:32.555Z] [BOT] ✅ Industry: Software Developer - 2026 Leadership Development Program - Houston @ ORG_49d0893a Group
[2026-01-21T12:56:32.555Z] [BOT] 💾 Added channel posting: Software Developer - 2026 Leadership Development Program - Houston @ ORG_49d0893a Group → category channel (1 total channels)
[2026-01-21T12:56:32.555Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-21T12:56:32.557Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-21T12:56:32.577Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:34.079Z] [BOT] 💾 Marked as posted: Software Developer - 2026 Leadership Development Program - Houston @ ORG_49d0893a Group (instance #1)
[2026-01-21T12:56:34.079Z] [BOT] 💾 BEFORE ARCHIVING: 3440 jobs in database
[2026-01-21T12:56:34.081Z] [BOT] ✅ No jobs to archive (all 3440 jobs within 7-day window)
[2026-01-21T12:56:34.102Z] [BOT] 💾 Saved posted_jobs.json: 3440 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:37.103Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T12:56:37.103Z] [BOT] 📍 [ROUTING] "Senior Director, Internal Audit" @ discord
[2026-01-21T12:56:37.104Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T12:56:37.325Z] [BOT] ✅ Posted message: Senior Director, Internal Audit @ discord in #finance-jobs
[2026-01-21T12:56:37.325Z] [BOT] ✅ Industry: Senior Director, Internal Audit @ discord
[2026-01-21T12:56:37.325Z] [BOT] 💾 Added channel posting: Senior Director, Internal Audit @ discord → category channel (1 total channels)
[2026-01-21T12:56:37.326Z] [BOT] 💾 BEFORE ARCHIVING: 3441 jobs in database
[2026-01-21T12:56:37.327Z] [BOT] ✅ No jobs to archive (all 3441 jobs within 7-day window)
[2026-01-21T12:56:37.347Z] [BOT] 💾 Saved posted_jobs.json: 3441 active jobs
[2026-01-21T12:56:37.347Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:38.849Z] [BOT] 💾 Marked as posted: Senior Director, Internal Audit @ discord (instance #1)
[2026-01-21T12:56:38.849Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-21T12:56:38.851Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-21T12:56:38.871Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:56:41.871Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T12:56:41.871Z] [BOT] ⏭️  Skipping duplicate: JID_c7bdff19 (posted within 7 days)
[2026-01-21T12:56:41.872Z] [BOT] ⏭️  Skipping duplicate: JID_9056ae39 (posted within 7 days)
⏭️  Skipping duplicate: JID_247a9cce (posted within 7 days)
⏭️  Skipping duplicate: JID_9573866e-i_r8298-1 (posted within 7 days)
[2026-01-21T12:56:41.872Z] [BOT] ⏭️  Skipping duplicate: JID_a4d142a8 (posted within 7 days)
[2026-01-21T12:56:41.873Z] [BOT] ⏭️  Skipping duplicate: JID_4eca8e55 (posted within 7 days)
[2026-01-21T12:56:41.873Z] [BOT] ⏭️  Skipping duplicate: JID_3d20dc96 (posted within 7 days)
[2026-01-21T12:56:41.873Z] [BOT] ⏭️  Skipping duplicate: JID_292d0ae8 (posted within 7 days)
[2026-01-21T12:56:41.873Z] [BOT] ⏭️  Skipping duplicate: JID_1834e261 (posted within 7 days)
[2026-01-21T12:56:41.873Z] [BOT] ⏭️  Skipping duplicate: JID_33a6531d (posted within 7 days)
[2026-01-21T12:56:41.983Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[2026-01-21T12:56:42.157Z] [BOT] ✅ Saved pending queue: 2768 total (2748 pending, 10 enriched, 10 posted)
[2026-01-21T12:56:42.158Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T12:56:42.223Z] [BOT] 📂 Loaded 5885 existing routing entries
[2026-01-21T12:56:42.302Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T12:56:42.303Z] [BOT] Total entries: 5895
   Timestamp: 2026-01-21T12:56:42.276Z
[2026-01-21T12:56:42.303Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T12:56:42.303Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-21T12:56:42.304Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 8 posts
     2. #JID_ead674af: 2 posts
     3. #ai-jobs: 1 posts
     4. #finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-21T12:56:44.330Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2492) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*