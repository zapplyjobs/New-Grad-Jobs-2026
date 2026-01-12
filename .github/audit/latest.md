# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T22:52:49.299Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T22:51:49.884Z] ========================================
[2026-01-12T22:51:49.886Z] Discord Bot Execution Log
[2026-01-12T22:51:49.886Z] Environment: GitHub Actions
[2026-01-12T22:51:49.886Z] Node Version: v20.19.6
[2026-01-12T22:51:49.886Z] ========================================
[2026-01-12T22:51:49.886Z] Environment Variables Check:
[2026-01-12T22:51:49.886Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T22:51:49.886Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T22:51:49.886Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T22:51:49.886Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T22:51:49.886Z] 
Multi-Channel Configuration:
[2026-01-12T22:51:49.886Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T22:51:49.887Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T22:51:49.887Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T22:51:49.887Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T22:51:49.887Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T22:51:49.887Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T22:51:49.887Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T22:51:49.887Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T22:51:49.887Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T22:51:49.887Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T22:51:49.887Z] 
Data Files Check:
[2026-01-12T22:51:49.888Z] .github/data/new_jobs.json: ✅ Exists (10 items, 116084 bytes)
[2026-01-12T22:51:49.891Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 315522 bytes)
[2026-01-12T22:51:49.891Z] 
========================================
[2026-01-12T22:51:49.891Z] Starting Enhanced Discord Bot...
[2026-01-12T22:51:49.891Z] ========================================
[2026-01-12T22:51:50.404Z] [BOT] ✅ Loaded V2 database: 586 jobs
[2026-01-12T22:51:51.118Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T22:51:51.118Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T22:51:51.119Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T22:51:51.227Z] [BOT] ✅ Loaded pending queue: 2656 total (2636 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Manager of Solutions Architecture, Applied AI (Digital Native Businesses) at anthropic
[2026-01-12T22:51:51.229Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T22:51:51.229Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T22:51:51.230Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T22:51:51.230Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-12T22:51:51.231Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-12T22:51:51.231Z] [BOT] - Senior Product Manager, Math @ duolingo: new york, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T22:51:51.236Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-12T22:51:51.236Z] [BOT] 📍 [ROUTING] "Manager of Solutions Architecture, Applied AI (Digital Native Businesses)" @ anthropic
[2026-01-12T22:51:51.236Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T22:51:51.241Z] [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T22:51:51.441Z] [BOT] ✅ Created forum post: 🏢 Manager of Solutions Architecture, Applied AI (Digital Native Businesses) @ anthropic in #🤖・ai-jobs
[2026-01-12T22:51:51.441Z] [BOT] ✅ Industry: Manager of Solutions Architecture, Applied AI (Digital Native Businesses) @ anthropic
[2026-01-12T22:51:53.160Z] [BOT] ✅ Created forum post: 🏢 Manager of Solutions Architecture, Applied AI (Digital Native Businesses) @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:51:54.662Z] [BOT] 💾 Marked as posted: Manager of Solutions Architecture, Applied AI (Digital Native Businesses) @ anthropic (instance #1)
[2026-01-12T22:51:54.662Z] [BOT] 💾 BEFORE ARCHIVING: 587 jobs in database
[2026-01-12T22:51:54.663Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T22:51:54.668Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-12T22:51:54.668Z] [BOT] ✅ Archiving complete: 1 archived, 586 active
[2026-01-12T22:51:54.675Z] [BOT] 💾 Saved posted_jobs.json: 586 active jobs
[2026-01-12T22:51:54.675Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:51:57.676Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-12T22:51:57.677Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Data Science" @ figma
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-12T22:51:57.677Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch, nonTechMatch (using data-science)
[2026-01-12T22:51:57.938Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter, Data Science @ figma in #📈・JID_fb739488
[2026-01-12T22:51:57.938Z] [BOT] ✅ Industry: Technical Recruiter, Data Science @ figma
[2026-01-12T22:51:59.682Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter, Data Science @ figma in #🌉・san-francisco
[2026-01-12T22:51:59.683Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T22:52:01.184Z] [BOT] 💾 Marked as posted: Technical Recruiter, Data Science @ figma (instance #1)
[2026-01-12T22:52:01.185Z] [BOT] 💾 BEFORE ARCHIVING: 587 jobs in database
[2026-01-12T22:52:01.185Z] [BOT] ✅ No jobs to archive (all 587 jobs within 7-day window)
[2026-01-12T22:52:01.191Z] [BOT] 💾 Saved posted_jobs.json: 587 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:52:04.192Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-12T22:52:04.192Z] [BOT] 📍 [ROUTING] "Group Product Marketing Manager, Developer Commerce Solutions" @ discord
[2026-01-12T22:52:04.192Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-12T22:52:04.423Z] [BOT] ✅ Created forum post: 🏢 Group Product Marketing Manager, Developer Commerce Solutions @ discord in #💻・tech-jobs
  ✅ Industry: Group Product Marketing Manager, Developer Commerce Solutions @ discord
[2026-01-12T22:52:06.137Z] [BOT] ✅ Created forum post: 🏢 Group Product Marketing Manager, Developer Commerce Solutions @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T22:52:07.638Z] [BOT] 💾 Marked as posted: Group Product Marketing Manager, Developer Commerce Solutions @ discord (instance #1)
[2026-01-12T22:52:07.638Z] [BOT] 💾 BEFORE ARCHIVING: 588 jobs in database
[2026-01-12T22:52:07.639Z] [BOT] ✅ No jobs to archive (all 588 jobs within 7-day window)
[2026-01-12T22:52:07.645Z] [BOT] 💾 Saved posted_jobs.json: 588 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:52:07.645Z] [BOT] 📍 [ROUTING] "Director of Learning Design, Immersive Language Learning" @ duolingo
[2026-01-12T22:52:07.645Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T22:52:07.946Z] [BOT] ✅ Created forum post: 🏢 Director of Learning Design, Immersive Language Learning @ duolingo in #💻・tech-jobs
  ✅ Industry: Director of Learning Design, Immersive Language Learning @ duolingo
[2026-01-12T22:52:09.617Z] [BOT] ✅ Created forum post: 🏢 Director of Learning Design, Immersive Language Learning @ duolingo in #🗽・new-york
[2026-01-12T22:52:09.617Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T22:52:11.118Z] [BOT] 💾 Marked as posted: Director of Learning Design, Immersive Language Learning @ duolingo (instance #1)
[2026-01-12T22:52:11.118Z] [BOT] 💾 BEFORE ARCHIVING: 589 jobs in database
[2026-01-12T22:52:11.120Z] [BOT] ✅ No jobs to archive (all 589 jobs within 7-day window)
[2026-01-12T22:52:11.125Z] [BOT] 💾 Saved posted_jobs.json: 589 active jobs
[2026-01-12T22:52:11.125Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:52:11.125Z] [BOT] 📍 [ROUTING] "Director of Learning Design, New Subjects" @ duolingo
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T22:52:11.788Z] [BOT] ✅ Created forum post: 🏢 Director of Learning Design, New Subjects @ duolingo in #💻・tech-jobs
  ✅ Industry: Director of Learning Design, New Subjects @ duolingo
[2026-01-12T22:52:13.517Z] [BOT] ✅ Created forum post: 🏢 Director of Learning Design, New Subjects @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T22:52:15.018Z] [BOT] 💾 Marked as posted: Director of Learning Design, New Subjects @ duolingo (instance #1)
[2026-01-12T22:52:15.018Z] [BOT] 💾 BEFORE ARCHIVING: 590 jobs in database
[2026-01-12T22:52:15.019Z] [BOT] ✅ No jobs to archive (all 590 jobs within 7-day window)
[2026-01-12T22:52:15.024Z] [BOT] 💾 Saved posted_jobs.json: 590 active jobs
[2026-01-12T22:52:15.024Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:52:15.024Z] [BOT] 📍 [ROUTING] "Director of Product Management, Learning" @ duolingo
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T22:52:15.232Z] [BOT] ✅ Created forum post: 🏢 Director of Product Management, Learning @ duolingo in #💻・tech-jobs
  ✅ Industry: Director of Product Management, Learning @ duolingo
[2026-01-12T22:52:16.922Z] [BOT] ✅ Created forum post: 🏢 Director of Product Management, Learning @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T22:52:18.424Z] [BOT] 💾 Marked as posted: Director of Product Management, Learning @ duolingo (instance #1)
[2026-01-12T22:52:18.424Z] [BOT] 💾 BEFORE ARCHIVING: 591 jobs in database
[2026-01-12T22:52:18.424Z] [BOT] ✅ No jobs to archive (all 591 jobs within 7-day window)
[2026-01-12T22:52:18.431Z] [BOT] 💾 Saved posted_jobs.json: 591 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:52:18.431Z] [BOT] 📍 [ROUTING] "Engineering Director, Long-Form Learning" @ duolingo
   Category: TECH (matched: "engineer/engineering")
[2026-01-12T22:52:18.431Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T22:52:18.747Z] [BOT] ✅ Created forum post: 🏢 Engineering Director, Long-Form Learning @ duolingo in #💻・tech-jobs
  ✅ Industry: Engineering Director, Long-Form Learning @ duolingo
[2026-01-12T22:52:20.794Z] [BOT] ✅ Created forum post: 🏢 Engineering Director, Long-Form Learning @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T22:52:22.295Z] [BOT] 💾 Marked as posted: Engineering Director, Long-Form Learning @ duolingo (instance #1)
[2026-01-12T22:52:22.296Z] [BOT] 💾 BEFORE ARCHIVING: 592 jobs in database
[2026-01-12T22:52:22.296Z] [BOT] ✅ No jobs to archive (all 592 jobs within 7-day window)
[2026-01-12T22:52:22.303Z] [BOT] 💾 Saved posted_jobs.json: 592 active jobs
[2026-01-12T22:52:22.303Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:52:22.303Z] [BOT] 📍 [ROUTING] "Engineering Manager, Design Accelerator" @ duolingo
[2026-01-12T22:52:22.303Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T22:52:22.488Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Design Accelerator @ duolingo in #💻・tech-jobs
[2026-01-12T22:52:22.488Z] [BOT] ✅ Industry: Engineering Manager, Design Accelerator @ duolingo
[2026-01-12T22:52:24.328Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Design Accelerator @ duolingo in #🗽・new-york
[2026-01-12T22:52:24.328Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T22:52:25.829Z] [BOT] 💾 Marked as posted: Engineering Manager, Design Accelerator @ duolingo (instance #1)
[2026-01-12T22:52:25.829Z] [BOT] 💾 BEFORE ARCHIVING: 593 jobs in database
[2026-01-12T22:52:25.830Z] [BOT] ✅ No jobs to archive (all 593 jobs within 7-day window)
[2026-01-12T22:52:25.836Z] [BOT] 💾 Saved posted_jobs.json: 593 active jobs
[2026-01-12T22:52:25.836Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:52:28.837Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-12T22:52:28.837Z] [BOT] 📍 [ROUTING] "Ad Sales Lead" @ duolingo
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T22:52:31.344Z] [BOT] ✅ Created forum post: 🏢 Ad Sales Lead @ duolingo in #💲・sales-jobs
[2026-01-12T22:52:31.344Z] [BOT] ✅ Industry: Ad Sales Lead @ duolingo
[2026-01-12T22:52:33.233Z] [BOT] ✅ Created forum post: 🏢 Ad Sales Lead @ duolingo in #🗽・new-york
[2026-01-12T22:52:33.233Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T22:52:34.734Z] [BOT] 💾 Marked as posted: Ad Sales Lead @ duolingo (instance #1)
[2026-01-12T22:52:34.734Z] [BOT] 💾 BEFORE ARCHIVING: 594 jobs in database
[2026-01-12T22:52:34.734Z] [BOT] ✅ No jobs to archive (all 594 jobs within 7-day window)
[2026-01-12T22:52:34.740Z] [BOT] 💾 Saved posted_jobs.json: 594 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T22:52:37.740Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-12T22:52:37.741Z] [BOT] 📍 [ROUTING] "Director of Performance Marketing" @ duolingo
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T22:52:39.671Z] [BOT] ✅ Created forum post: 🏢 Director of Performance Marketing @ duolingo in #📣・marketing-jobs
  ✅ Industry: Director of Performance Marketing @ duolingo
[2026-01-12T22:52:41.470Z] [BOT] ✅ Created forum post: 🏢 Director of Performance Marketing @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T22:52:42.971Z] [BOT] 💾 Marked as posted: Director of Performance Marketing @ duolingo (instance #1)
[2026-01-12T22:52:42.971Z] [BOT] 💾 BEFORE ARCHIVING: 595 jobs in database
[2026-01-12T22:52:42.972Z] [BOT] ✅ No jobs to archive (all 595 jobs within 7-day window)
[2026-01-12T22:52:42.978Z] [BOT] 💾 Saved posted_jobs.json: 595 active jobs
[2026-01-12T22:52:42.978Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T22:52:45.979Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T22:52:45.979Z] [BOT] ⏭️  Skipping duplicate: JID_176ee686 (posted within 7 days)
[2026-01-12T22:52:45.979Z] [BOT] ⏭️  Skipping duplicate: JID_6841d348 (posted within 7 days)
[2026-01-12T22:52:45.979Z] [BOT] ⏭️  Skipping duplicate: JID_42aa0817 (posted within 7 days)
[2026-01-12T22:52:45.979Z] [BOT] ⏭️  Skipping duplicate: JID_b593142e (posted within 7 days)
⏭️  Skipping duplicate: JID_5ac86695 (posted within 7 days)
[2026-01-12T22:52:45.979Z] [BOT] ⏭️  Skipping duplicate: JID_c4a32929 (posted within 7 days)
[2026-01-12T22:52:45.979Z] [BOT] ⏭️  Skipping duplicate: JID_91a40c48 (posted within 7 days)
[2026-01-12T22:52:45.980Z] [BOT] ⏭️  Skipping duplicate: JID_2514eec0 (posted within 7 days)
[2026-01-12T22:52:45.980Z] [BOT] ⏭️  Skipping duplicate: JID_add361bc (posted within 7 days)
[2026-01-12T22:52:45.980Z] [BOT] ⏭️  Skipping duplicate: JID_5921c4f7 (posted within 7 days)
[2026-01-12T22:52:46.109Z] [BOT] ✅ Loaded pending queue: 2656 total (2636 pending, 20 enriched, 0 posted)
[2026-01-12T22:52:46.269Z] [BOT] ✅ Saved pending queue: 2656 total (2636 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-12T22:52:46.269Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T22:52:46.321Z] [BOT] 📂 Loaded 2750 existing routing entries
[2026-01-12T22:52:46.376Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2760
   Timestamp: 2026-01-12T22:52:46.365Z
[2026-01-12T22:52:46.377Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 20
[2026-01-12T22:52:46.377Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-12T22:52:46.377Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T22:52:46.377Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 7
[2026-01-12T22:52:46.377Z] [BOT] Top channels:
[2026-01-12T22:52:46.377Z] [BOT] 1. #🗽・new-york: 7 posts
     2. #💻・tech-jobs: 6 posts
     3. #🌉・san-francisco: 3 posts
[2026-01-12T22:52:46.377Z] [BOT] 4. #🤖・ai-jobs: 1 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-12T22:52:46.378Z] [BOT] [STATS] Channel stats saved
[2026-01-12T22:52:48.402Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*