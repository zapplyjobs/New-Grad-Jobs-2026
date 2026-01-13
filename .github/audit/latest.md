# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T04:20:08.913Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T04:19:39.472Z] ========================================
[2026-01-13T04:19:39.473Z] Discord Bot Execution Log
[2026-01-13T04:19:39.473Z] Environment: GitHub Actions
[2026-01-13T04:19:39.474Z] Node Version: v20.19.6
[2026-01-13T04:19:39.474Z] ========================================
[2026-01-13T04:19:39.474Z] Environment Variables Check:
[2026-01-13T04:19:39.474Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T04:19:39.474Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T04:19:39.474Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T04:19:39.474Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T04:19:39.474Z] 
Multi-Channel Configuration:
[2026-01-13T04:19:39.474Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T04:19:39.474Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T04:19:39.474Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T04:19:39.474Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T04:19:39.475Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T04:19:39.475Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T04:19:39.475Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T04:19:39.475Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T04:19:39.475Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T04:19:39.475Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T04:19:39.475Z] 
Data Files Check:
[2026-01-13T04:19:39.476Z] .github/data/new_jobs.json: ✅ Exists (10 items, 190547 bytes)
[2026-01-13T04:19:39.479Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 359201 bytes)
[2026-01-13T04:19:39.479Z] 
========================================
[2026-01-13T04:19:39.479Z] Starting Enhanced Discord Bot...
[2026-01-13T04:19:39.479Z] ========================================
[2026-01-13T04:19:39.995Z] [BOT] ✅ Loaded V2 database: 680 jobs
[2026-01-13T04:19:40.796Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T04:19:40.796Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T04:19:40.797Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T04:19:40.906Z] [BOT] ✅ Loaded pending queue: 2701 total (2681 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Account Executive, Commercial at samsara
[2026-01-13T04:19:40.907Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T04:19:40.907Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T04:19:40.908Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T04:19:40.908Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2026-01-13T04:19:40.909Z] [BOT] (13 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Account Executive, Commercial @ samsara: columbus, denver, los angeles, salt lake, san diego, seattle, boston, atlanta, phoenix, arizona, portland
   - Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara: austin, chicago, dallas, houston, texas
   - Director, Sales Commissions @ samsara: phoenix, arizona, united states, atlanta, georgia, united states
⏸️ Limiting to 10 jobs this run, 13 deferred for next run
[2026-01-13T04:19:40.909Z] [BOT] 📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T04:19:40.913Z] [BOT] 📌 Posting 6 jobs to #💲・sales-jobs
[2026-01-13T04:19:40.914Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial" @ samsara
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T04:19:40.918Z] [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T04:19:41.296Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Commercial @ samsara in #💲・sales-jobs
[2026-01-13T04:19:41.296Z] [BOT] ✅ Industry: Account Executive, Commercial @ samsara
[2026-01-13T04:19:42.799Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-13T04:19:42.799Z] [BOT] 💾 BEFORE ARCHIVING: 681 jobs in database
[2026-01-13T04:19:42.800Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T04:19:42.805Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T04:19:42.805Z] [BOT] ✅ Archiving complete: 1 archived, 680 active
[2026-01-13T04:19:42.811Z] [BOT] 💾 Saved posted_jobs.json: 680 active jobs
[2026-01-13T04:19:42.811Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T04:19:42.811Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
💾 BEFORE ARCHIVING: 681 jobs in database
[2026-01-13T04:19:42.812Z] [BOT] ✅ No jobs to archive (all 681 jobs within 7-day window)
[2026-01-13T04:19:42.816Z] [BOT] 💾 Saved posted_jobs.json: 681 active jobs
[2026-01-13T04:19:42.817Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
💾 BEFORE ARCHIVING: 682 jobs in database
[2026-01-13T04:19:42.817Z] [BOT] ✅ No jobs to archive (all 682 jobs within 7-day window)
[2026-01-13T04:19:42.822Z] [BOT] 💾 Saved posted_jobs.json: 682 active jobs
[2026-01-13T04:19:42.822Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-13T04:19:42.822Z] [BOT] 💾 BEFORE ARCHIVING: 683 jobs in database
[2026-01-13T04:19:42.823Z] [BOT] ✅ No jobs to archive (all 683 jobs within 7-day window)
[2026-01-13T04:19:42.827Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
[2026-01-13T04:19:42.828Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-13T04:19:42.828Z] [BOT] 💾 BEFORE ARCHIVING: 684 jobs in database
[2026-01-13T04:19:42.828Z] [BOT] ✅ No jobs to archive (all 684 jobs within 7-day window)
[2026-01-13T04:19:42.833Z] [BOT] 💾 Saved posted_jobs.json: 684 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:19:42.833Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-13T04:19:42.833Z] [BOT] 💾 BEFORE ARCHIVING: 685 jobs in database
[2026-01-13T04:19:42.834Z] [BOT] ✅ No jobs to archive (all 685 jobs within 7-day window)
[2026-01-13T04:19:42.839Z] [BOT] 💾 Saved posted_jobs.json: 685 active jobs
[2026-01-13T04:19:42.839Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T04:19:42.839Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
💾 BEFORE ARCHIVING: 686 jobs in database
[2026-01-13T04:19:42.839Z] [BOT] ✅ No jobs to archive (all 686 jobs within 7-day window)
[2026-01-13T04:19:42.844Z] [BOT] 💾 Saved posted_jobs.json: 686 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:19:42.844Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-13T04:19:42.844Z] [BOT] 💾 BEFORE ARCHIVING: 687 jobs in database
[2026-01-13T04:19:42.844Z] [BOT] ✅ No jobs to archive (all 687 jobs within 7-day window)
[2026-01-13T04:19:42.849Z] [BOT] 💾 Saved posted_jobs.json: 687 active jobs
[2026-01-13T04:19:42.849Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Account Executive, Commercial - (Phoenix, AR) @ samsara (instance #1)
[2026-01-13T04:19:42.849Z] [BOT] 💾 BEFORE ARCHIVING: 688 jobs in database
[2026-01-13T04:19:42.849Z] [BOT] ✅ No jobs to archive (all 688 jobs within 7-day window)
[2026-01-13T04:19:42.854Z] [BOT] 💾 Saved posted_jobs.json: 688 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:19:42.854Z] [BOT] 💾 Marked as posted: Account Executive, Commercial - (Portland, OR) @ samsara (instance #1)
[2026-01-13T04:19:42.854Z] [BOT] 💾 BEFORE ARCHIVING: 689 jobs in database
[2026-01-13T04:19:42.854Z] [BOT] ✅ No jobs to archive (all 689 jobs within 7-day window)
[2026-01-13T04:19:42.859Z] [BOT] 💾 Saved posted_jobs.json: 689 active jobs
[2026-01-13T04:19:42.859Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T04:19:42.859Z] [BOT] 📍 [ROUTING] "Customer Success Associate" @ samsara
[2026-01-13T04:19:42.860Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T04:19:43.931Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate @ samsara in #💲・sales-jobs
[2026-01-13T04:19:43.931Z] [BOT] ✅ Industry: Customer Success Associate @ samsara
[2026-01-13T04:19:45.635Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate @ samsara in #💻・remote-usa
[2026-01-13T04:19:45.635Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T04:19:47.136Z] [BOT] 💾 Marked as posted: Customer Success Associate @ samsara (instance #1)
[2026-01-13T04:19:47.136Z] [BOT] 💾 BEFORE ARCHIVING: 690 jobs in database
[2026-01-13T04:19:47.137Z] [BOT] ✅ No jobs to archive (all 690 jobs within 7-day window)
[2026-01-13T04:19:47.142Z] [BOT] 💾 Saved posted_jobs.json: 690 active jobs
[2026-01-13T04:19:47.142Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T04:19:47.142Z] [BOT] 📍 [ROUTING] "Director, Sales Commissions" @ samsara
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T04:19:47.370Z] [BOT] ✅ Created forum post: 🏢 Director, Sales Commissions @ samsara in #💲・sales-jobs
[2026-01-13T04:19:47.370Z] [BOT] ✅ Industry: Director, Sales Commissions @ samsara
[2026-01-13T04:19:48.870Z] [BOT] 💾 Marked as posted: Director, Sales Commissions @ samsara (instance #1)
[2026-01-13T04:19:48.870Z] [BOT] 💾 BEFORE ARCHIVING: 691 jobs in database
[2026-01-13T04:19:48.871Z] [BOT] ✅ No jobs to archive (all 691 jobs within 7-day window)
[2026-01-13T04:19:48.876Z] [BOT] 💾 Saved posted_jobs.json: 691 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:19:48.876Z] [BOT] 💾 Marked as posted: Director, Sales Commissions @ samsara (instance #1)
[2026-01-13T04:19:48.876Z] [BOT] 💾 BEFORE ARCHIVING: 692 jobs in database
[2026-01-13T04:19:48.877Z] [BOT] ✅ No jobs to archive (all 692 jobs within 7-day window)
[2026-01-13T04:19:48.882Z] [BOT] 💾 Saved posted_jobs.json: 692 active jobs
[2026-01-13T04:19:48.882Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T04:19:48.882Z] [BOT] 📍 [ROUTING] "Enterprise Account Development Representative - Outbound" @ samsara
[2026-01-13T04:19:48.882Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T04:19:49.165Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Development Representative - Outbound @ samsara in #💲・sales-jobs
  ✅ Industry: Enterprise Account Development Representative - Outbound @ samsara
[2026-01-13T04:19:50.668Z] [BOT] 💾 Marked as posted: Enterprise Account Development Representative - Outbound @ samsara (instance #1)
[2026-01-13T04:19:50.668Z] [BOT] 💾 BEFORE ARCHIVING: 693 jobs in database
[2026-01-13T04:19:50.669Z] [BOT] ✅ No jobs to archive (all 693 jobs within 7-day window)
[2026-01-13T04:19:50.675Z] [BOT] 💾 Saved posted_jobs.json: 693 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:19:50.675Z] [BOT] 📍 [ROUTING] "Enterprise Business Development Representative- Outbound" @ samsara
[2026-01-13T04:19:50.675Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T04:19:50.904Z] [BOT] ✅ Created forum post: 🏢 Enterprise Business Development Representative- Outbound @ samsara in #💲・sales-jobs
[2026-01-13T04:19:50.904Z] [BOT] ✅ Industry: Enterprise Business Development Representative- Outbound @ samsara
[2026-01-13T04:19:52.406Z] [BOT] 💾 Marked as posted: Enterprise Business Development Representative- Outbound @ samsara (instance #1)
[2026-01-13T04:19:52.406Z] [BOT] 💾 BEFORE ARCHIVING: 694 jobs in database
[2026-01-13T04:19:52.407Z] [BOT] ✅ No jobs to archive (all 694 jobs within 7-day window)
[2026-01-13T04:19:52.412Z] [BOT] 💾 Saved posted_jobs.json: 694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:19:52.412Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant" @ samsara
[2026-01-13T04:19:52.412Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T04:19:52.684Z] [BOT] ✅ Created forum post: 🏢 Enterprise Implementation Consultant @ samsara in #💲・sales-jobs
  ✅ Industry: Enterprise Implementation Consultant @ samsara
[2026-01-13T04:19:54.408Z] [BOT] ✅ Created forum post: 🏢 Enterprise Implementation Consultant @ samsara in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T04:19:55.910Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant @ samsara (instance #1)
[2026-01-13T04:19:55.910Z] [BOT] 💾 BEFORE ARCHIVING: 695 jobs in database
[2026-01-13T04:19:55.910Z] [BOT] ✅ No jobs to archive (all 695 jobs within 7-day window)
[2026-01-13T04:19:55.916Z] [BOT] 💾 Saved posted_jobs.json: 695 active jobs
[2026-01-13T04:19:55.916Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T04:19:58.917Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T04:19:58.917Z] [BOT] 📍 [ROUTING] "Core Enterprise Account Executive EST/CST - Remote - Austin, TX" @ samsara
[2026-01-13T04:19:58.918Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-13T04:19:59.269Z] [BOT] ✅ Created forum post: 🏢 Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara in #📈・JID_fb739488
  ✅ Industry: Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara
[2026-01-13T04:20:01.082Z] [BOT] ✅ Created forum post: 🏢 Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T04:20:02.582Z] [BOT] 💾 Marked as posted: Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara (instance #1)
[2026-01-13T04:20:02.582Z] [BOT] 💾 BEFORE ARCHIVING: 696 jobs in database
[2026-01-13T04:20:02.582Z] [BOT] ✅ No jobs to archive (all 696 jobs within 7-day window)
[2026-01-13T04:20:02.589Z] [BOT] 💾 Saved posted_jobs.json: 696 active jobs
[2026-01-13T04:20:02.589Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Core Enterprise Account Executive EST/CST - Remote - Chicago, IL @ samsara (instance #1)
[2026-01-13T04:20:02.589Z] [BOT] 💾 BEFORE ARCHIVING: 697 jobs in database
[2026-01-13T04:20:02.589Z] [BOT] ✅ No jobs to archive (all 697 jobs within 7-day window)
[2026-01-13T04:20:02.595Z] [BOT] 💾 Saved posted_jobs.json: 697 active jobs
[2026-01-13T04:20:02.595Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Core Enterprise Account Executive EST/CST - Remote - Dallas, TX @ samsara (instance #1)
💾 BEFORE ARCHIVING: 698 jobs in database
[2026-01-13T04:20:02.595Z] [BOT] ✅ No jobs to archive (all 698 jobs within 7-day window)
[2026-01-13T04:20:02.601Z] [BOT] 💾 Saved posted_jobs.json: 698 active jobs
[2026-01-13T04:20:02.601Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Core Enterprise Account Executive EST/CST - Remote - Houston, TX @ samsara (instance #1)
💾 BEFORE ARCHIVING: 699 jobs in database
[2026-01-13T04:20:02.601Z] [BOT] ✅ No jobs to archive (all 699 jobs within 7-day window)
[2026-01-13T04:20:02.606Z] [BOT] 💾 Saved posted_jobs.json: 699 active jobs
[2026-01-13T04:20:02.606Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T04:20:05.607Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2026-01-13T04:20:05.608Z] [BOT] ⏭️  Skipping duplicate: JID_70e975da (posted within 7 days)
[2026-01-13T04:20:05.608Z] [BOT] ⏭️  Skipping duplicate: JID_e437aa26 (posted within 7 days)
[2026-01-13T04:20:05.608Z] [BOT] ⏭️  Skipping duplicate: JID_49fc1d4b (posted within 7 days)
[2026-01-13T04:20:05.608Z] [BOT] ⏭️  Skipping duplicate: JID_6895993a (posted within 7 days)
[2026-01-13T04:20:05.608Z] [BOT] ⏭️  Skipping duplicate: JID_97f60550 (posted within 7 days)
[2026-01-13T04:20:05.608Z] [BOT] ⏭️  Skipping duplicate: JID_7f77c8d1 (posted within 7 days)
[2026-01-13T04:20:05.608Z] [BOT] ⏭️  Skipping duplicate: JID_ff256bbe (posted within 7 days)
[2026-01-13T04:20:05.719Z] [BOT] ✅ Loaded pending queue: 2701 total (2681 pending, 20 enriched, 0 posted)
[2026-01-13T04:20:05.880Z] [BOT] ✅ Saved pending queue: 2701 total (2681 pending, 13 enriched, 7 posted)
[2026-01-13T04:20:05.881Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T04:20:05.932Z] [BOT] 📂 Loaded 2866 existing routing entries
[2026-01-13T04:20:05.987Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-13T04:20:05.988Z] [BOT] New entries: 7
   Total entries: 2873
   Timestamp: 2026-01-13T04:20:05.975Z
[2026-01-13T04:20:05.988Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-13T04:20:05.988Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-13T04:20:05.988Z] [BOT] Total posts: 10
   Channels used: 4
   Top channels:
     1. #💲・sales-jobs: 6 posts
     2. #💻・remote-usa: 2 posts
     3. #📈・JID_fb739488: 1 posts
[2026-01-13T04:20:05.989Z] [BOT] 4. #🤠・austin: 1 posts
[2026-01-13T04:20:05.989Z] [BOT] [STATS] Channel stats saved
[2026-01-13T04:20:08.012Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*