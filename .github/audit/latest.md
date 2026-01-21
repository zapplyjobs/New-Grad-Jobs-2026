# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T18:02:35.348Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T18:02:02.154Z] ========================================
[2026-01-21T18:02:02.156Z] Discord Bot Execution Log
[2026-01-21T18:02:02.156Z] Environment: GitHub Actions
[2026-01-21T18:02:02.156Z] Node Version: v20.19.6
[2026-01-21T18:02:02.156Z] ========================================
[2026-01-21T18:02:02.156Z] Environment Variables Check:
[2026-01-21T18:02:02.156Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T18:02:02.156Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T18:02:02.156Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T18:02:02.156Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T18:02:02.156Z] 
Multi-Channel Configuration:
[2026-01-21T18:02:02.156Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T18:02:02.157Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T18:02:02.157Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T18:02:02.157Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T18:02:02.157Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T18:02:02.157Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T18:02:02.157Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T18:02:02.157Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T18:02:02.157Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T18:02:02.157Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T18:02:02.157Z] 
Data Files Check:
[2026-01-21T18:02:02.158Z] .github/data/new_jobs.json: ✅ Exists (10 items, 86538 bytes)
[2026-01-21T18:02:02.172Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2114765 bytes)
[2026-01-21T18:02:02.172Z] 
========================================
[2026-01-21T18:02:02.172Z] Starting Enhanced Discord Bot...
[2026-01-21T18:02:02.172Z] ========================================
[2026-01-21T18:02:02.703Z] [BOT] ✅ Loaded V2 database: 3686 jobs
[2026-01-21T18:02:04.449Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T18:02:04.450Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T18:02:04.450Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T18:02:04.567Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Operations Manager, Computer Use & Tool Use at anthropic
[2026-01-21T18:02:04.571Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T18:02:04.571Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T18:02:04.572Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T18:02:04.573Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T18:02:04.573Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T18:02:04.576Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-21T18:02:04.576Z] [BOT] 📍 [ROUTING] "Data Operations Manager, Computer Use & Tool Use" @ anthropic
[2026-01-21T18:02:04.576Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T18:02:04.580Z] [BOT ERROR] (node:3054) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T18:02:04.872Z] [BOT] ✅ Posted message: Data Operations Manager, Computer Use & Tool Use @ anthropic in #tech-jobs
[2026-01-21T18:02:04.872Z] [BOT] ✅ Industry: Data Operations Manager, Computer Use & Tool Use @ anthropic
[2026-01-21T18:02:04.873Z] [BOT] 💾 Added channel posting: Data Operations Manager, Computer Use & Tool Use @ anthropic → category channel (1 total channels)
[2026-01-21T18:02:04.873Z] [BOT] 💾 BEFORE ARCHIVING: 3687 jobs in database
[2026-01-21T18:02:04.876Z] [BOT] ✅ No jobs to archive (all 3687 jobs within 7-day window)
[2026-01-21T18:02:04.903Z] [BOT] 💾 Saved posted_jobs.json: 3687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:06.406Z] [BOT] 💾 Marked as posted: Data Operations Manager, Computer Use & Tool Use @ anthropic (instance #1)
[2026-01-21T18:02:06.406Z] [BOT] 💾 BEFORE ARCHIVING: 3688 jobs in database
[2026-01-21T18:02:06.408Z] [BOT] ✅ No jobs to archive (all 3688 jobs within 7-day window)
[2026-01-21T18:02:06.430Z] [BOT] 💾 Saved posted_jobs.json: 3688 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:06.431Z] [BOT] 📍 [ROUTING] "Product Marketing Manager, Claude Code" @ anthropic
[2026-01-21T18:02:06.431Z] [BOT] Category: TECH (matched: "product marketing")
   Channel: tech-jobs (1462...4987)
[2026-01-21T18:02:06.654Z] [BOT] ✅ Posted message: Product Marketing Manager, Claude Code @ anthropic in #tech-jobs
[2026-01-21T18:02:06.654Z] [BOT] ✅ Industry: Product Marketing Manager, Claude Code @ anthropic
[2026-01-21T18:02:06.655Z] [BOT] 💾 Added channel posting: Product Marketing Manager, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-21T18:02:06.655Z] [BOT] 💾 BEFORE ARCHIVING: 3689 jobs in database
[2026-01-21T18:02:06.658Z] [BOT] ✅ No jobs to archive (all 3689 jobs within 7-day window)
[2026-01-21T18:02:06.682Z] [BOT] 💾 Saved posted_jobs.json: 3689 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:08.183Z] [BOT] 💾 Marked as posted: Product Marketing Manager, Claude Code @ anthropic (instance #1)
[2026-01-21T18:02:08.184Z] [BOT] 💾 BEFORE ARCHIVING: 3690 jobs in database
[2026-01-21T18:02:08.186Z] [BOT] ✅ No jobs to archive (all 3690 jobs within 7-day window)
[2026-01-21T18:02:08.210Z] [BOT] 💾 Saved posted_jobs.json: 3690 active jobs
[2026-01-21T18:02:08.210Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:08.211Z] [BOT] 📍 [ROUTING] "Research Operations & Strategy Lead, Coding & Cybersecurity Data" @ anthropic
[2026-01-21T18:02:08.211Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T18:02:08.428Z] [BOT] ✅ Posted message: Research Operations & Strategy Lead, Coding & Cybersecurity Data @ anthropic in #tech-jobs
  ✅ Industry: Research Operations & Strategy Lead, Coding & Cybersecurity Data @ anthropic
[2026-01-21T18:02:08.429Z] [BOT] 💾 Added channel posting: Research Operations & Strategy Lead, Coding & Cybersecurity Data @ anthropic → category channel (1 total channels)
[2026-01-21T18:02:08.429Z] [BOT] 💾 BEFORE ARCHIVING: 3691 jobs in database
[2026-01-21T18:02:08.431Z] [BOT] ✅ No jobs to archive (all 3691 jobs within 7-day window)
[2026-01-21T18:02:08.452Z] [BOT] 💾 Saved posted_jobs.json: 3691 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:09.953Z] [BOT] 💾 Marked as posted: Research Operations & Strategy Lead, Coding & Cybersecurity Data @ anthropic (instance #1)
[2026-01-21T18:02:09.953Z] [BOT] 💾 BEFORE ARCHIVING: 3692 jobs in database
[2026-01-21T18:02:09.955Z] [BOT] ✅ No jobs to archive (all 3692 jobs within 7-day window)
[2026-01-21T18:02:09.977Z] [BOT] 💾 Saved posted_jobs.json: 3692 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:09.977Z] [BOT] 📍 [ROUTING] "Software Quality Assurance Associate" @ ORG_285075a0
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T18:02:10.395Z] [BOT] ✅ Posted message: Software Quality Assurance Associate @ ORG_285075a0 in #tech-jobs
[2026-01-21T18:02:10.396Z] [BOT] ✅ Industry: Software Quality Assurance Associate @ ORG_285075a0
[2026-01-21T18:02:10.396Z] [BOT] 💾 Added channel posting: Software Quality Assurance Associate @ ORG_285075a0 → category channel (1 total channels)
[2026-01-21T18:02:10.396Z] [BOT] 💾 BEFORE ARCHIVING: 3693 jobs in database
[2026-01-21T18:02:10.399Z] [BOT] ✅ No jobs to archive (all 3693 jobs within 7-day window)
[2026-01-21T18:02:10.421Z] [BOT] 💾 Saved posted_jobs.json: 3693 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:11.923Z] [BOT] 💾 Marked as posted: Software Quality Assurance Associate @ ORG_285075a0 (instance #1)
[2026-01-21T18:02:11.923Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-21T18:02:11.926Z] [BOT] ✅ No jobs to archive (all 3694 jobs within 7-day window)
[2026-01-21T18:02:11.948Z] [BOT] 💾 Saved posted_jobs.json: 3694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:11.948Z] [BOT] 📍 [ROUTING] "Staff Engineer I, Software Process Engineering" @ ORG_285075a0
[2026-01-21T18:02:11.948Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T18:02:12.218Z] [BOT] ✅ Posted message: Staff Engineer I, Software Process Engineering @ ORG_285075a0 in #tech-jobs
  ✅ Industry: Staff Engineer I, Software Process Engineering @ ORG_285075a0
[2026-01-21T18:02:12.219Z] [BOT] 💾 Added channel posting: Staff Engineer I, Software Process Engineering @ ORG_285075a0 → category channel (1 total channels)
[2026-01-21T18:02:12.219Z] [BOT] 💾 BEFORE ARCHIVING: 3695 jobs in database
[2026-01-21T18:02:12.221Z] [BOT] ✅ No jobs to archive (all 3695 jobs within 7-day window)
[2026-01-21T18:02:12.242Z] [BOT] 💾 Saved posted_jobs.json: 3695 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:13.744Z] [BOT] 💾 Marked as posted: Staff Engineer I, Software Process Engineering @ ORG_285075a0 (instance #1)
[2026-01-21T18:02:13.744Z] [BOT] 💾 BEFORE ARCHIVING: 3696 jobs in database
[2026-01-21T18:02:13.747Z] [BOT] ✅ No jobs to archive (all 3696 jobs within 7-day window)
[2026-01-21T18:02:13.771Z] [BOT] 💾 Saved posted_jobs.json: 3696 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:13.772Z] [BOT] 📍 [ROUTING] "Software Developer I" @ ORG_df6ef51e
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T18:02:13.955Z] [BOT] ✅ Posted message: Software Developer I @ ORG_df6ef51e in #tech-jobs
  ✅ Industry: Software Developer I @ ORG_df6ef51e
[2026-01-21T18:02:13.956Z] [BOT] 💾 Added channel posting: Software Developer I @ ORG_df6ef51e → category channel (1 total channels)
[2026-01-21T18:02:13.956Z] [BOT] 💾 BEFORE ARCHIVING: 3697 jobs in database
[2026-01-21T18:02:13.958Z] [BOT] ✅ No jobs to archive (all 3697 jobs within 7-day window)
[2026-01-21T18:02:13.981Z] [BOT] 💾 Saved posted_jobs.json: 3697 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:15.483Z] [BOT] 💾 Marked as posted: Software Developer I @ ORG_df6ef51e (instance #1)
[2026-01-21T18:02:15.483Z] [BOT] 💾 BEFORE ARCHIVING: 3698 jobs in database
[2026-01-21T18:02:15.485Z] [BOT] ✅ No jobs to archive (all 3698 jobs within 7-day window)
[2026-01-21T18:02:15.511Z] [BOT] 💾 Saved posted_jobs.json: 3698 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:15.511Z] [BOT] 📍 [ROUTING] "Junior Software Engineer, AI" @ ORG_307b6d84
[2026-01-21T18:02:15.511Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T18:02:15.736Z] [BOT] ✅ Posted message: Junior Software Engineer, AI @ ORG_307b6d84 in #tech-jobs
[2026-01-21T18:02:15.736Z] [BOT] ✅ Industry: Junior Software Engineer, AI @ ORG_307b6d84
[2026-01-21T18:02:15.737Z] [BOT] 💾 Added channel posting: Junior Software Engineer, AI @ ORG_307b6d84 → category channel (1 total channels)
[2026-01-21T18:02:15.737Z] [BOT] 💾 BEFORE ARCHIVING: 3699 jobs in database
[2026-01-21T18:02:15.739Z] [BOT] ✅ No jobs to archive (all 3699 jobs within 7-day window)
[2026-01-21T18:02:15.761Z] [BOT] 💾 Saved posted_jobs.json: 3699 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:17.263Z] [BOT] 💾 Marked as posted: Junior Software Engineer, AI @ ORG_307b6d84 (instance #1)
[2026-01-21T18:02:17.263Z] [BOT] 💾 BEFORE ARCHIVING: 3700 jobs in database
[2026-01-21T18:02:17.266Z] [BOT] ✅ No jobs to archive (all 3700 jobs within 7-day window)
[2026-01-21T18:02:17.290Z] [BOT] 💾 Saved posted_jobs.json: 3700 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:20.291Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-21T18:02:20.291Z] [BOT] 📍 [ROUTING] "Associate Nuclear Consultant/Engineer" @ ORG_f273c1b5 Hughes
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T18:02:20.291Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T18:02:20.675Z] [BOT] ✅ Posted message: Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes in #ai-jobs
[2026-01-21T18:02:20.676Z] [BOT] ✅ Industry: Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes
[2026-01-21T18:02:20.676Z] [BOT] 💾 Added channel posting: Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes → category channel (1 total channels)
[2026-01-21T18:02:20.676Z] [BOT] 💾 BEFORE ARCHIVING: 3701 jobs in database
[2026-01-21T18:02:20.679Z] [BOT] ✅ No jobs to archive (all 3701 jobs within 7-day window)
[2026-01-21T18:02:20.701Z] [BOT] 💾 Saved posted_jobs.json: 3701 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:22.407Z] [BOT] ✅ Posted message: Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T18:02:22.408Z] [BOT] 💾 Added channel posting: Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes → location channel (2 total channels)
[2026-01-21T18:02:22.408Z] [BOT] 💾 BEFORE ARCHIVING: 3701 jobs in database
[2026-01-21T18:02:22.410Z] [BOT] ✅ No jobs to archive (all 3701 jobs within 7-day window)
[2026-01-21T18:02:22.435Z] [BOT] 💾 Saved posted_jobs.json: 3701 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:23.937Z] [BOT] 💾 Marked as posted: Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes (instance #1)
💾 BEFORE ARCHIVING: 3702 jobs in database
[2026-01-21T18:02:23.939Z] [BOT] ✅ No jobs to archive (all 3702 jobs within 7-day window)
[2026-01-21T18:02:23.961Z] [BOT] 💾 Saved posted_jobs.json: 3702 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:23.962Z] [BOT] 📍 [ROUTING] "Research Scientist, Embodied and Agentic AI" @ ORG_0890f456
[2026-01-21T18:02:23.962Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T18:02:24.218Z] [BOT] ✅ Posted message: Research Scientist, Embodied and Agentic AI @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Research Scientist, Embodied and Agentic AI @ ORG_0890f456
[2026-01-21T18:02:24.219Z] [BOT] 💾 Added channel posting: Research Scientist, Embodied and Agentic AI @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T18:02:24.219Z] [BOT] 💾 BEFORE ARCHIVING: 3703 jobs in database
[2026-01-21T18:02:24.222Z] [BOT] ✅ No jobs to archive (all 3703 jobs within 7-day window)
[2026-01-21T18:02:24.243Z] [BOT] 💾 Saved posted_jobs.json: 3703 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:25.744Z] [BOT] 💾 Marked as posted: Research Scientist, Embodied and Agentic AI @ ORG_0890f456 (instance #1)
[2026-01-21T18:02:25.744Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-21T18:02:25.746Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-21T18:02:25.768Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:25.768Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_8b09cf05
   Category: AI (matched: "artificial intelligence")
[2026-01-21T18:02:25.768Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T18:02:26.024Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_8b09cf05 in #ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_8b09cf05
[2026-01-21T18:02:26.025Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_8b09cf05 → category channel (1 total channels)
[2026-01-21T18:02:26.025Z] [BOT] 💾 BEFORE ARCHIVING: 3705 jobs in database
[2026-01-21T18:02:26.027Z] [BOT] ✅ No jobs to archive (all 3705 jobs within 7-day window)
[2026-01-21T18:02:26.048Z] [BOT] 💾 Saved posted_jobs.json: 3705 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:27.687Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_8b09cf05 in #JID_ead674af
[2026-01-21T18:02:27.688Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T18:02:27.688Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_8b09cf05 → location channel (2 total channels)
[2026-01-21T18:02:27.688Z] [BOT] 💾 BEFORE ARCHIVING: 3705 jobs in database
[2026-01-21T18:02:27.690Z] [BOT] ✅ No jobs to archive (all 3705 jobs within 7-day window)
[2026-01-21T18:02:27.714Z] [BOT] 💾 Saved posted_jobs.json: 3705 active jobs
[2026-01-21T18:02:27.714Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:29.215Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_8b09cf05 (instance #1)
[2026-01-21T18:02:29.215Z] [BOT] 💾 BEFORE ARCHIVING: 3706 jobs in database
[2026-01-21T18:02:29.217Z] [BOT] ✅ No jobs to archive (all 3706 jobs within 7-day window)
[2026-01-21T18:02:29.240Z] [BOT] 💾 Saved posted_jobs.json: 3706 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:02:32.241Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T18:02:32.242Z] [BOT] ⏭️  Skipping duplicate: JID_61bcf3d6 (posted within 7 days)
[2026-01-21T18:02:32.242Z] [BOT] ⏭️  Skipping duplicate: JID_8eb7eef1 (posted within 7 days)
[2026-01-21T18:02:32.242Z] [BOT] ⏭️  Skipping duplicate: JID_dbfe8872 (posted within 7 days)
[2026-01-21T18:02:32.243Z] [BOT] ⏭️  Skipping duplicate: JID_4fd8b629 (posted within 7 days)
[2026-01-21T18:02:32.243Z] [BOT] ⏭️  Skipping duplicate: JID_d065bb6e-2026_jr2009464 (posted within 7 days)
[2026-01-21T18:02:32.243Z] [BOT] ⏭️  Skipping duplicate: JID_6929dcbd (posted within 7 days)
[2026-01-21T18:02:32.243Z] [BOT] ⏭️  Skipping duplicate: JID_10906cde-samsung_careers-JID_0c584a3e-associate_r111947 (posted within 7 days)
[2026-01-21T18:02:32.243Z] [BOT] ⏭️  Skipping duplicate: JID_570c2ba3-samsung_careers-JID_15fae791-engineering_r112003 (posted within 7 days)
[2026-01-21T18:02:32.244Z] [BOT] ⏭️  Skipping duplicate: JID_79c9e5ff-i_r8120 (posted within 7 days)
[2026-01-21T18:02:32.244Z] [BOT] ⏭️  Skipping duplicate: JID_3dd93fa8 (posted within 7 days)
[2026-01-21T18:02:32.349Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[2026-01-21T18:02:32.522Z] [BOT] ✅ Saved pending queue: 2770 total (2750 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-21T18:02:32.522Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T18:02:32.588Z] [BOT] 📂 Loaded 6001 existing routing entries
[2026-01-21T18:02:32.669Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6011
   Timestamp: 2026-01-21T18:02:32.640Z
[2026-01-21T18:02:32.670Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T18:02:32.670Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-21T18:02:32.670Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T18:02:32.670Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 3
   Top channels:
     1. #tech-jobs: 7 posts
     2. #ai-jobs: 3 posts
     3. #JID_ead674af: 2 posts
[2026-01-21T18:02:32.670Z] [BOT] [STATS] Channel stats saved
[2026-01-21T18:02:34.694Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3054) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*