# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T18:55:27.356Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T18:54:31.004Z] ========================================
[2026-01-03T18:54:31.006Z] Discord Bot Execution Log
[2026-01-03T18:54:31.006Z] Environment: GitHub Actions
[2026-01-03T18:54:31.006Z] Node Version: v20.19.6
[2026-01-03T18:54:31.006Z] ========================================
[2026-01-03T18:54:31.006Z] Environment Variables Check:
[2026-01-03T18:54:31.006Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T18:54:31.006Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T18:54:31.007Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T18:54:31.007Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T18:54:31.007Z] 
Multi-Channel Configuration:
[2026-01-03T18:54:31.007Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T18:54:31.007Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T18:54:31.007Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T18:54:31.007Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T18:54:31.007Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T18:54:31.007Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T18:54:31.007Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T18:54:31.007Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T18:54:31.007Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T18:54:31.008Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T18:54:31.008Z] 
Data Files Check:
[2026-01-03T18:54:31.009Z] .github/data/new_jobs.json: ✅ Exists (10 items, 131921 bytes)
[2026-01-03T18:54:31.012Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 361367 bytes)
[2026-01-03T18:54:31.012Z] 
========================================
[2026-01-03T18:54:31.012Z] Starting Enhanced Discord Bot...
[2026-01-03T18:54:31.012Z] ========================================
[2026-01-03T18:54:31.517Z] [BOT] ✅ Loaded V2 database: 703 jobs
[2026-01-03T18:54:32.811Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T18:54:32.812Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T18:54:32.812Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T18:54:32.813Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T18:54:32.881Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T18:54:32.969Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T18:54:32.971Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T18:54:32.971Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T18:54:32.972Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T18:54:32.972Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T18:54:32.973Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T18:54:32.978Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T18:54:32.978Z] [BOT] 📍 [ROUTING] "Sales Engineer" @ vercel
[2026-01-03T18:54:32.978Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T18:54:32.983Z] [BOT ERROR] (node:2314) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T18:54:33.208Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer @ vercel in #💲・sales-jobs
[2026-01-03T18:54:33.208Z] [BOT] ✅ Industry: Sales Engineer @ vercel
[2026-01-03T18:54:34.984Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T18:54:36.484Z] [BOT] 💾 Marked as posted: Sales Engineer @ vercel (instance #1)
[2026-01-03T18:54:36.485Z] [BOT] 💾 BEFORE ARCHIVING: 704 jobs in database
[2026-01-03T18:54:36.485Z] [BOT] ✅ No jobs to archive (all 704 jobs within 7-day window)
[2026-01-03T18:54:36.496Z] [BOT] 💾 Saved posted_jobs.json: 704 active jobs
[2026-01-03T18:54:36.496Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:54:36.496Z] [BOT] 📍 [ROUTING] "Manager, Product Marketing " @ figma
[2026-01-03T18:54:36.496Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T18:54:36.894Z] [BOT] ✅ Created forum post: 🏢 Manager, Product Marketing  @ figma in #💲・sales-jobs
[2026-01-03T18:54:36.894Z] [BOT] ✅ Industry: Manager, Product Marketing  @ figma
[2026-01-03T18:54:38.660Z] [BOT] ✅ Created forum post: 🏢 Manager, Product Marketing  @ figma in #🌉・san-francisco
[2026-01-03T18:54:38.660Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T18:54:40.161Z] [BOT] 💾 Marked as posted: Manager, Product Marketing  @ figma (instance #1)
[2026-01-03T18:54:40.161Z] [BOT] 💾 BEFORE ARCHIVING: 705 jobs in database
[2026-01-03T18:54:40.161Z] [BOT] ✅ No jobs to archive (all 705 jobs within 7-day window)
[2026-01-03T18:54:40.167Z] [BOT] 💾 Saved posted_jobs.json: 705 active jobs
[2026-01-03T18:54:40.167Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:54:40.167Z] [BOT] 📍 [ROUTING] "Director, Federal Sales" @ figma
   Category: SALES (matched: "sales")
[2026-01-03T18:54:40.167Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T18:54:40.555Z] [BOT] ✅ Created forum post: 🏢 Director, Federal Sales @ figma in #💲・sales-jobs
  ✅ Industry: Director, Federal Sales @ figma
[2026-01-03T18:54:42.364Z] [BOT] ✅ Created forum post: 🏢 Director, Federal Sales @ figma in #🌉・san-francisco
[2026-01-03T18:54:42.364Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T18:54:43.866Z] [BOT] 💾 Marked as posted: Director, Federal Sales @ figma (instance #1)
[2026-01-03T18:54:43.866Z] [BOT] 💾 BEFORE ARCHIVING: 706 jobs in database
[2026-01-03T18:54:43.867Z] [BOT] ✅ No jobs to archive (all 706 jobs within 7-day window)
[2026-01-03T18:54:43.873Z] [BOT] 💾 Saved posted_jobs.json: 706 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:54:46.873Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-03T18:54:46.873Z] [BOT] 📍 [ROUTING] "Director of Learning Design, Immersive Language Learning" @ duolingo
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T18:54:47.177Z] [BOT] ✅ Created forum post: 🏢 Director of Learning Design, Immersive Language Learning @ duolingo in #💻・tech-jobs
  ✅ Industry: Director of Learning Design, Immersive Language Learning @ duolingo
[2026-01-03T18:54:48.915Z] [BOT] ✅ Created forum post: 🏢 Director of Learning Design, Immersive Language Learning @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T18:54:50.416Z] [BOT] 💾 Marked as posted: Director of Learning Design, Immersive Language Learning @ duolingo (instance #1)
[2026-01-03T18:54:50.416Z] [BOT] 💾 BEFORE ARCHIVING: 707 jobs in database
[2026-01-03T18:54:50.417Z] [BOT] ✅ No jobs to archive (all 707 jobs within 7-day window)
[2026-01-03T18:54:50.423Z] [BOT] 💾 Saved posted_jobs.json: 707 active jobs
[2026-01-03T18:54:50.423Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:54:50.423Z] [BOT] 📍 [ROUTING] "Engineering Director, Long-Form Learning" @ duolingo
[2026-01-03T18:54:50.423Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T18:54:50.628Z] [BOT] ✅ Created forum post: 🏢 Engineering Director, Long-Form Learning @ duolingo in #💻・tech-jobs
[2026-01-03T18:54:50.629Z] [BOT] ✅ Industry: Engineering Director, Long-Form Learning @ duolingo
[2026-01-03T18:54:52.396Z] [BOT] ✅ Created forum post: 🏢 Engineering Director, Long-Form Learning @ duolingo in #🗽・new-york
[2026-01-03T18:54:52.396Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T18:54:53.897Z] [BOT] 💾 Marked as posted: Engineering Director, Long-Form Learning @ duolingo (instance #1)
[2026-01-03T18:54:53.897Z] [BOT] 💾 BEFORE ARCHIVING: 708 jobs in database
[2026-01-03T18:54:53.898Z] [BOT] ✅ No jobs to archive (all 708 jobs within 7-day window)
[2026-01-03T18:54:53.904Z] [BOT] 💾 Saved posted_jobs.json: 708 active jobs
[2026-01-03T18:54:53.904Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:54:53.904Z] [BOT] 📍 [ROUTING] "Research Engineer, Data Ingestion" @ anthropic
[2026-01-03T18:54:53.904Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T18:54:54.403Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Data Ingestion @ anthropic in #💻・tech-jobs
[2026-01-03T18:54:54.403Z] [BOT] ✅ Industry: Research Engineer, Data Ingestion @ anthropic
[2026-01-03T18:54:56.172Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Data Ingestion @ anthropic in #🌉・san-francisco
[2026-01-03T18:54:56.172Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T18:54:57.672Z] [BOT] 💾 Marked as posted: Research Engineer, Data Ingestion @ anthropic (instance #1)
[2026-01-03T18:54:57.672Z] [BOT] 💾 BEFORE ARCHIVING: 709 jobs in database
[2026-01-03T18:54:57.673Z] [BOT] ✅ No jobs to archive (all 709 jobs within 7-day window)
[2026-01-03T18:54:57.679Z] [BOT] 💾 Saved posted_jobs.json: 709 active jobs
[2026-01-03T18:54:57.679Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:55:00.680Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-03T18:55:00.680Z] [BOT] 📍 [ROUTING] "Product Manager, Claude Code Growth" @ anthropic
[2026-01-03T18:55:00.680Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-03T18:55:01.006Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Claude Code Growth @ anthropic in #📦・product-jobs
[2026-01-03T18:55:01.006Z] [BOT] ✅ Industry: Product Manager, Claude Code Growth @ anthropic
[2026-01-03T18:55:02.741Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Claude Code Growth @ anthropic in #🌉・san-francisco
[2026-01-03T18:55:02.741Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T18:55:04.242Z] [BOT] 💾 Marked as posted: Product Manager, Claude Code Growth @ anthropic (instance #1)
[2026-01-03T18:55:04.242Z] [BOT] 💾 BEFORE ARCHIVING: 710 jobs in database
[2026-01-03T18:55:04.242Z] [BOT] ✅ No jobs to archive (all 710 jobs within 7-day window)
[2026-01-03T18:55:04.249Z] [BOT] 💾 Saved posted_jobs.json: 710 active jobs
[2026-01-03T18:55:04.249Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:55:07.250Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-03T18:55:07.250Z] [BOT] 📍 [ROUTING] "Staff+ Software Engineer, Infrastructure" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-03T18:55:07.250Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T18:55:07.473Z] [BOT] ✅ Created forum post: 🏢 Staff+ Software Engineer, Infrastructure @ anthropic in #🤖・ai-jobs
  ✅ Industry: Staff+ Software Engineer, Infrastructure @ anthropic
[2026-01-03T18:55:09.229Z] [BOT] ✅ Created forum post: 🏢 Staff+ Software Engineer, Infrastructure @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T18:55:10.729Z] [BOT] 💾 Marked as posted: Staff+ Software Engineer, Infrastructure @ anthropic (instance #1)
[2026-01-03T18:55:10.729Z] [BOT] 💾 BEFORE ARCHIVING: 711 jobs in database
[2026-01-03T18:55:10.729Z] [BOT] ✅ No jobs to archive (all 711 jobs within 7-day window)
[2026-01-03T18:55:10.735Z] [BOT] 💾 Saved posted_jobs.json: 711 active jobs
[2026-01-03T18:55:10.735Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:55:10.736Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Infrastructure " @ anthropic
[2026-01-03T18:55:10.736Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T18:55:11.051Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Infrastructure  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Senior Software Engineer, Infrastructure  @ anthropic
[2026-01-03T18:55:12.859Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Infrastructure  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T18:55:14.360Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Infrastructure  @ anthropic (instance #1)
[2026-01-03T18:55:14.360Z] [BOT] 💾 BEFORE ARCHIVING: 712 jobs in database
[2026-01-03T18:55:14.361Z] [BOT] ✅ No jobs to archive (all 712 jobs within 7-day window)
[2026-01-03T18:55:14.366Z] [BOT] 💾 Saved posted_jobs.json: 712 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T18:55:17.367Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T18:55:17.367Z] [BOT] 📍 [ROUTING] "Product Marketing Manager, Duolingo Chess" @ duolingo
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T18:55:17.636Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Duolingo Chess @ duolingo in #📣・marketing-jobs
[2026-01-03T18:55:17.636Z] [BOT] ✅ Industry: Product Marketing Manager, Duolingo Chess @ duolingo
[2026-01-03T18:55:19.361Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Duolingo Chess @ duolingo in #🗽・new-york
[2026-01-03T18:55:19.361Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T18:55:20.863Z] [BOT] 💾 Marked as posted: Product Marketing Manager, Duolingo Chess @ duolingo (instance #1)
[2026-01-03T18:55:20.863Z] [BOT] 💾 BEFORE ARCHIVING: 713 jobs in database
[2026-01-03T18:55:20.863Z] [BOT] ✅ No jobs to archive (all 713 jobs within 7-day window)
[2026-01-03T18:55:20.869Z] [BOT] 💾 Saved posted_jobs.json: 713 active jobs
[2026-01-03T18:55:20.869Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T18:55:23.870Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T18:55:23.870Z] [BOT] ⏭️  Skipping duplicate: JID_247a9cce (posted within 7 days)
[2026-01-03T18:55:23.870Z] [BOT] ⏭️  Skipping duplicate: JID_5ac86695 (posted within 7 days)
[2026-01-03T18:55:23.870Z] [BOT] ⏭️  Skipping duplicate: JID_add361bc (posted within 7 days)
[2026-01-03T18:55:23.871Z] [BOT] ⏭️  Skipping duplicate: JID_3a2e117d (posted within 7 days)
[2026-01-03T18:55:23.871Z] [BOT] ⏭️  Skipping duplicate: JID_9056ae39 (posted within 7 days)
[2026-01-03T18:55:23.871Z] [BOT] ⏭️  Skipping duplicate: JID_3d20dc96 (posted within 7 days)
[2026-01-03T18:55:23.871Z] [BOT] ⏭️  Skipping duplicate: JID_80718343 (posted within 7 days)
⏭️  Skipping duplicate: JID_09ee84c1 (posted within 7 days)
[2026-01-03T18:55:23.871Z] [BOT] ⏭️  Skipping duplicate: JID_e207b359 (posted within 7 days)
⏭️  Skipping duplicate: JID_0f51fd8b (posted within 7 days)
[2026-01-03T18:55:23.926Z] [BOT] ✅ Loaded pending queue: 586 total (566 pending, 20 enriched, 0 posted)
[2026-01-03T18:55:23.981Z] [BOT] ✅ Saved pending queue: 586 total (566 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T18:55:24.026Z] [BOT] 📂 Loaded 1657 existing routing entries
[2026-01-03T18:55:24.075Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1667
   Timestamp: 2026-01-03T18:55:24.067Z
[2026-01-03T18:55:24.075Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T18:55:24.075Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-03T18:55:24.076Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T18:55:24.076Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
[2026-01-03T18:55:24.076Z] [BOT] 1. #🌉・san-francisco: 7 posts
     2. #💲・sales-jobs: 3 posts
     3. #💻・tech-jobs: 3 posts
     4. #🗽・new-york: 3 posts
     5. #🤖・ai-jobs: 2 posts
[2026-01-03T18:55:24.076Z] [BOT] [STATS] Channel stats saved
[2026-01-03T18:55:26.090Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2314) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*