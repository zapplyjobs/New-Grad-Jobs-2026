# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T14:25:12.465Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T14:24:18.038Z] ========================================
[2026-01-03T14:24:18.040Z] Discord Bot Execution Log
[2026-01-03T14:24:18.040Z] Environment: GitHub Actions
[2026-01-03T14:24:18.040Z] Node Version: v20.19.6
[2026-01-03T14:24:18.040Z] ========================================
[2026-01-03T14:24:18.040Z] Environment Variables Check:
[2026-01-03T14:24:18.040Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T14:24:18.040Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T14:24:18.040Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T14:24:18.040Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T14:24:18.041Z] 
Multi-Channel Configuration:
[2026-01-03T14:24:18.041Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T14:24:18.041Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T14:24:18.041Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T14:24:18.041Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T14:24:18.041Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T14:24:18.041Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T14:24:18.041Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T14:24:18.041Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T14:24:18.041Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T14:24:18.041Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T14:24:18.041Z] 
Data Files Check:
[2026-01-03T14:24:18.043Z] .github/data/new_jobs.json: ✅ Exists (10 items, 153249 bytes)
[2026-01-03T14:24:18.045Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 272737 bytes)
[2026-01-03T14:24:18.045Z] 
========================================
[2026-01-03T14:24:18.045Z] Starting Enhanced Discord Bot...
[2026-01-03T14:24:18.045Z] ========================================
[2026-01-03T14:24:18.575Z] [BOT] ✅ Loaded V2 database: 523 jobs
[2026-01-03T14:24:19.840Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T14:24:19.840Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T14:24:19.840Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T14:24:19.844Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T14:24:19.915Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T14:24:20.004Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T14:24:20.007Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T14:24:20.007Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T14:24:20.007Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T14:24:20.008Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T14:24:20.008Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T14:24:20.013Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-03T14:24:20.013Z] [BOT] 📍 [ROUTING] "Global Technology Partner Lead" @ anthropic
[2026-01-03T14:24:20.014Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:24:20.019Z] [BOT ERROR] (node:2324) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T14:24:20.224Z] [BOT] ✅ Created forum post: 🏢 Global Technology Partner Lead @ anthropic in #💲・sales-jobs
[2026-01-03T14:24:20.224Z] [BOT] ✅ Industry: Global Technology Partner Lead @ anthropic
[2026-01-03T14:24:21.925Z] [BOT] ✅ Created forum post: 🏢 Global Technology Partner Lead @ anthropic in #🌉・san-francisco
[2026-01-03T14:24:21.925Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:24:23.426Z] [BOT] 💾 Marked as posted: Global Technology Partner Lead @ anthropic (instance #1)
[2026-01-03T14:24:23.426Z] [BOT] 💾 BEFORE ARCHIVING: 524 jobs in database
[2026-01-03T14:24:23.427Z] [BOT] ✅ No jobs to archive (all 524 jobs within 7-day window)
[2026-01-03T14:24:23.435Z] [BOT] 💾 Saved posted_jobs.json: 524 active jobs
[2026-01-03T14:24:23.435Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:24:23.436Z] [BOT] 📍 [ROUTING] "Manager of Sales Engineering, Majors/Commercial - AMER" @ vercel
   Category: SALES (matched: "sales")
[2026-01-03T14:24:23.437Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:24:23.646Z] [BOT] ✅ Created forum post: 🏢 Manager of Sales Engineering, Majors/Commercial - AMER @ vercel in #💲・sales-jobs
[2026-01-03T14:24:23.646Z] [BOT] ✅ Industry: Manager of Sales Engineering, Majors/Commercial - AMER @ vercel
[2026-01-03T14:24:25.312Z] [BOT] ✅ Created forum post: 🏢 Manager of Sales Engineering, Majors/Commercial - AMER @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:24:26.812Z] [BOT] 💾 Marked as posted: Manager of Sales Engineering, Majors/Commercial - AMER @ vercel (instance #1)
[2026-01-03T14:24:26.812Z] [BOT] 💾 BEFORE ARCHIVING: 525 jobs in database
[2026-01-03T14:24:26.813Z] [BOT] ✅ No jobs to archive (all 525 jobs within 7-day window)
[2026-01-03T14:24:26.817Z] [BOT] 💾 Saved posted_jobs.json: 525 active jobs
[2026-01-03T14:24:26.817Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:24:26.817Z] [BOT] 📍 [ROUTING] "Partner Operations Specialist" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-03T14:24:26.817Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:24:27.047Z] [BOT] ✅ Created forum post: 🏢 Partner Operations Specialist @ anthropic in #💲・sales-jobs
  ✅ Industry: Partner Operations Specialist @ anthropic
[2026-01-03T14:24:28.915Z] [BOT] ✅ Created forum post: 🏢 Partner Operations Specialist @ anthropic in #🌉・san-francisco
[2026-01-03T14:24:28.916Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:24:30.416Z] [BOT] 💾 Marked as posted: Partner Operations Specialist @ anthropic (instance #1)
[2026-01-03T14:24:30.416Z] [BOT] 💾 BEFORE ARCHIVING: 526 jobs in database
[2026-01-03T14:24:30.417Z] [BOT] ✅ No jobs to archive (all 526 jobs within 7-day window)
[2026-01-03T14:24:30.422Z] [BOT] 💾 Saved posted_jobs.json: 526 active jobs
[2026-01-03T14:24:30.422Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:24:30.422Z] [BOT] 📍 [ROUTING] "Technical Product Marketing Lead" @ anthropic
[2026-01-03T14:24:30.422Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:24:30.721Z] [BOT] ✅ Created forum post: 🏢 Technical Product Marketing Lead @ anthropic in #💲・sales-jobs
[2026-01-03T14:24:30.722Z] [BOT] ✅ Industry: Technical Product Marketing Lead @ anthropic
[2026-01-03T14:24:32.431Z] [BOT] ✅ Created forum post: 🏢 Technical Product Marketing Lead @ anthropic in #🌉・san-francisco
[2026-01-03T14:24:32.431Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T14:24:33.932Z] [BOT] 💾 Marked as posted: Technical Product Marketing Lead @ anthropic (instance #1)
[2026-01-03T14:24:33.932Z] [BOT] 💾 BEFORE ARCHIVING: 527 jobs in database
[2026-01-03T14:24:33.932Z] [BOT] ✅ No jobs to archive (all 527 jobs within 7-day window)
[2026-01-03T14:24:33.937Z] [BOT] 💾 Saved posted_jobs.json: 527 active jobs
[2026-01-03T14:24:33.937Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:24:36.938Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T14:24:36.939Z] [BOT] 📍 [ROUTING] "Cross-functional Prompt Engineer" @ anthropic
[2026-01-03T14:24:36.939Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-03T14:24:36.939Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T14:24:37.415Z] [BOT] ✅ Created forum post: 🏢 Cross-functional Prompt Engineer @ anthropic in #📈・JID_fb739488
[2026-01-03T14:24:37.415Z] [BOT] ✅ Industry: Cross-functional Prompt Engineer @ anthropic
[2026-01-03T14:24:39.244Z] [BOT] ✅ Created forum post: 🏢 Cross-functional Prompt Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:24:40.745Z] [BOT] 💾 Marked as posted: Cross-functional Prompt Engineer @ anthropic (instance #1)
[2026-01-03T14:24:40.745Z] [BOT] 💾 BEFORE ARCHIVING: 528 jobs in database
[2026-01-03T14:24:40.746Z] [BOT] ✅ No jobs to archive (all 528 jobs within 7-day window)
[2026-01-03T14:24:40.751Z] [BOT] 💾 Saved posted_jobs.json: 528 active jobs
[2026-01-03T14:24:40.751Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:24:43.752Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-03T14:24:43.752Z] [BOT] 📍 [ROUTING] "Incentive Compensation System Engineer" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-01-03T14:24:43.752Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T14:24:44.109Z] [BOT] ✅ Created forum post: 🏢 Incentive Compensation System Engineer @ anthropic in #💻・tech-jobs
  ✅ Industry: Incentive Compensation System Engineer @ anthropic
[2026-01-03T14:24:45.782Z] [BOT] ✅ Created forum post: 🏢 Incentive Compensation System Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:24:47.283Z] [BOT] 💾 Marked as posted: Incentive Compensation System Engineer @ anthropic (instance #1)
[2026-01-03T14:24:47.283Z] [BOT] 💾 BEFORE ARCHIVING: 529 jobs in database
[2026-01-03T14:24:47.283Z] [BOT] ✅ No jobs to archive (all 529 jobs within 7-day window)
[2026-01-03T14:24:47.288Z] [BOT] 💾 Saved posted_jobs.json: 529 active jobs
[2026-01-03T14:24:47.288Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:24:47.288Z] [BOT] 📍 [ROUTING] "Platform Engineer: General Compute" @ supabase
[2026-01-03T14:24:47.289Z] [BOT] Category: TECH (matched: "data engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T14:24:47.821Z] [BOT] ✅ Created forum post: 🏢 Platform Engineer: General Compute @ supabase in #💻・tech-jobs
[2026-01-03T14:24:47.821Z] [BOT] ✅ Industry: Platform Engineer: General Compute @ supabase
[2026-01-03T14:24:49.322Z] [BOT] 💾 Marked as posted: Platform Engineer: General Compute @ supabase (instance #1)
[2026-01-03T14:24:49.322Z] [BOT] 💾 BEFORE ARCHIVING: 530 jobs in database
[2026-01-03T14:24:49.323Z] [BOT] ✅ No jobs to archive (all 530 jobs within 7-day window)
[2026-01-03T14:24:49.328Z] [BOT] 💾 Saved posted_jobs.json: 530 active jobs
[2026-01-03T14:24:49.328Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:24:49.328Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Platform Security" @ discord
[2026-01-03T14:24:49.328Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T14:24:49.550Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Platform Security @ discord in #💻・tech-jobs
  ✅ Industry: Senior Software Engineer, Platform Security @ discord
[2026-01-03T14:24:51.371Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Platform Security @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:24:52.872Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Platform Security @ discord (instance #1)
[2026-01-03T14:24:52.872Z] [BOT] 💾 BEFORE ARCHIVING: 531 jobs in database
[2026-01-03T14:24:52.872Z] [BOT] ✅ No jobs to archive (all 531 jobs within 7-day window)
[2026-01-03T14:24:52.877Z] [BOT] 💾 Saved posted_jobs.json: 531 active jobs
[2026-01-03T14:24:52.878Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:24:55.877Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T14:24:55.878Z] [BOT] 📍 [ROUTING] "Field Marketing Manager, Startups" @ anthropic
[2026-01-03T14:24:55.878Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T14:24:56.216Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager, Startups @ anthropic in #📣・marketing-jobs
  ✅ Industry: Field Marketing Manager, Startups @ anthropic
[2026-01-03T14:24:57.920Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager, Startups @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:24:59.421Z] [BOT] 💾 Marked as posted: Field Marketing Manager, Startups @ anthropic (instance #1)
[2026-01-03T14:24:59.421Z] [BOT] 💾 BEFORE ARCHIVING: 532 jobs in database
[2026-01-03T14:24:59.421Z] [BOT] ✅ No jobs to archive (all 532 jobs within 7-day window)
[2026-01-03T14:24:59.426Z] [BOT] 💾 Saved posted_jobs.json: 532 active jobs
[2026-01-03T14:24:59.426Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:25:02.426Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-03T14:25:02.427Z] [BOT] 📍 [ROUTING] "Staff Product Manager, Growth" @ discord
[2026-01-03T14:25:02.427Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-03T14:25:02.841Z] [BOT] ✅ Created forum post: 🏢 Staff Product Manager, Growth @ discord in #📦・product-jobs
  ✅ Industry: Staff Product Manager, Growth @ discord
[2026-01-03T14:25:04.588Z] [BOT] ✅ Created forum post: 🏢 Staff Product Manager, Growth @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:25:06.089Z] [BOT] 💾 Marked as posted: Staff Product Manager, Growth @ discord (instance #1)
[2026-01-03T14:25:06.089Z] [BOT] 💾 BEFORE ARCHIVING: 533 jobs in database
[2026-01-03T14:25:06.089Z] [BOT] ✅ No jobs to archive (all 533 jobs within 7-day window)
[2026-01-03T14:25:06.094Z] [BOT] 💾 Saved posted_jobs.json: 533 active jobs
[2026-01-03T14:25:06.094Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:25:09.094Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T14:25:09.094Z] [BOT] ⏭️  Skipping duplicate: JID_894b5313 (posted within 7 days)
⏭️  Skipping duplicate: JID_97a7cfc5 (posted within 7 days)
[2026-01-03T14:25:09.094Z] [BOT] ⏭️  Skipping duplicate: JID_9fb079d8 (posted within 7 days)
[2026-01-03T14:25:09.095Z] [BOT] ⏭️  Skipping duplicate: JID_92d01207 (posted within 7 days)
⏭️  Skipping duplicate: JID_f0befb2a (posted within 7 days)
[2026-01-03T14:25:09.095Z] [BOT] ⏭️  Skipping duplicate: JID_1659542d (posted within 7 days)
⏭️  Skipping duplicate: JID_b606c14e (posted within 7 days)
[2026-01-03T14:25:09.095Z] [BOT] ⏭️  Skipping duplicate: JID_df9e0885 (posted within 7 days)
[2026-01-03T14:25:09.095Z] [BOT] ⏭️  Skipping duplicate: JID_90fbb5bf (posted within 7 days)
[2026-01-03T14:25:09.095Z] [BOT] ⏭️  Skipping duplicate: JID_be04a6b5 (posted within 7 days)
[2026-01-03T14:25:09.162Z] [BOT] ✅ Loaded pending queue: 766 total (746 pending, 20 enriched, 0 posted)
[2026-01-03T14:25:09.254Z] [BOT] ✅ Saved pending queue: 766 total (746 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T14:25:09.254Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T14:25:09.300Z] [BOT] 📂 Loaded 1498 existing routing entries
[2026-01-03T14:25:09.348Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1508
   Timestamp: 2026-01-03T14:25:09.341Z
[2026-01-03T14:25:09.348Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 19
[2026-01-03T14:25:09.349Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-03T14:25:09.349Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T14:25:09.349Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 9 posts
     2. #💲・sales-jobs: 4 posts
[2026-01-03T14:25:09.349Z] [BOT] 3. #💻・tech-jobs: 3 posts
     4. #📈・JID_fb739488: 1 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-03T14:25:09.349Z] [BOT] [STATS] Channel stats saved
[2026-01-03T14:25:11.365Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2324) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*