# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T22:39:00.700Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T22:38:04.172Z] ========================================
[2025-12-18T22:38:04.174Z] Discord Bot Execution Log
[2025-12-18T22:38:04.174Z] Environment: GitHub Actions
[2025-12-18T22:38:04.174Z] Node Version: v20.19.6
[2025-12-18T22:38:04.174Z] ========================================
[2025-12-18T22:38:04.174Z] Environment Variables Check:
[2025-12-18T22:38:04.174Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T22:38:04.175Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T22:38:04.175Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T22:38:04.175Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T22:38:04.175Z] 
Multi-Channel Configuration:
[2025-12-18T22:38:04.175Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T22:38:04.175Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T22:38:04.175Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T22:38:04.175Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T22:38:04.175Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T22:38:04.175Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T22:38:04.175Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T22:38:04.175Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T22:38:04.176Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T22:38:04.176Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T22:38:04.176Z] 
Data Files Check:
[2025-12-18T22:38:04.176Z] .github/data/new_jobs.json: ✅ Exists (10 items, 50956 bytes)
[2025-12-18T22:38:04.179Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 364969 bytes)
[2025-12-18T22:38:04.179Z] 
========================================
[2025-12-18T22:38:04.179Z] Starting Enhanced Discord Bot...
[2025-12-18T22:38:04.179Z] ========================================
[2025-12-18T22:38:04.706Z] [BOT] ✅ Loaded V2 database: 605 jobs
[2025-12-18T22:38:05.980Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T22:38:05.980Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T22:38:05.981Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T22:38:05.984Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T22:38:06.032Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T22:38:06.084Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 100
[2025-12-18T22:38:06.086Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T22:38:06.086Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T22:38:06.086Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T22:38:06.087Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T22:38:06.087Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T22:38:06.092Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-18T22:38:06.092Z] [BOT] 📍 [ROUTING] "Data Analyst - Insights and Product Analytics" @ ORG_0760d36d
[2025-12-18T22:38:06.092Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T22:38:06.110Z] [BOT ERROR] (node:2855) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T22:38:06.367Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Insights and Product Analytics @ ORG_0760d36d in #📈・JID_fb739488
[2025-12-18T22:38:06.367Z] [BOT] ✅ Industry: Data Analyst - Insights and Product Analytics @ ORG_0760d36d
[2025-12-18T22:38:08.120Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Insights and Product Analytics @ ORG_0760d36d in #💻・remote-usa
[2025-12-18T22:38:08.121Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T22:38:09.620Z] [BOT] 💾 Marked as posted: Data Analyst - Insights and Product Analytics @ ORG_0760d36d (instance #1)
[2025-12-18T22:38:09.620Z] [BOT] 💾 BEFORE ARCHIVING: 606 jobs in database
[2025-12-18T22:38:09.621Z] [BOT] ✅ No jobs to archive (all 606 jobs within 7-day window)
[2025-12-18T22:38:09.630Z] [BOT] 💾 Saved posted_jobs.json: 606 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T22:38:12.631Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-18T22:38:12.632Z] [BOT] 📍 [ROUTING] "X Memes and Headline Commentary Tutor" @ xAI
   Category: MARKETING (matched: "social media")
[2025-12-18T22:38:12.632Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2025-12-18T22:38:13.069Z] [BOT] ✅ Created forum post: 🏢 X Memes and Headline Commentary Tutor @ xAI in #📣・marketing-jobs
[2025-12-18T22:38:13.069Z] [BOT] ✅ Industry: X Memes and Headline Commentary Tutor @ xAI
[2025-12-18T22:38:14.822Z] [BOT] ✅ Created forum post: 🏢 X Memes and Headline Commentary Tutor @ xAI in #🌉・san-francisco
[2025-12-18T22:38:14.822Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-18T22:38:16.323Z] [BOT] 💾 Marked as posted: X Memes and Headline Commentary Tutor @ xAI (instance #1)
[2025-12-18T22:38:16.323Z] [BOT] 💾 BEFORE ARCHIVING: 607 jobs in database
[2025-12-18T22:38:16.323Z] [BOT] ✅ No jobs to archive (all 607 jobs within 7-day window)
[2025-12-18T22:38:16.329Z] [BOT] 💾 Saved posted_jobs.json: 607 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T22:38:19.330Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2025-12-18T22:38:19.331Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Data Scientist" @ ORG_72fd3ae0
[2025-12-18T22:38:19.331Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-18T22:38:19.820Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Data Scientist @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: 2026 University Graduate - Data Scientist @ ORG_72fd3ae0
[2025-12-18T22:38:21.650Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Data Scientist @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T22:38:23.150Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Data Scientist @ ORG_72fd3ae0 (instance #1)
[2025-12-18T22:38:23.151Z] [BOT] 💾 BEFORE ARCHIVING: 608 jobs in database
[2025-12-18T22:38:23.151Z] [BOT] ✅ No jobs to archive (all 608 jobs within 7-day window)
[2025-12-18T22:38:23.157Z] [BOT] 💾 Saved posted_jobs.json: 608 active jobs
[2025-12-18T22:38:23.158Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:38:23.159Z] [BOT] 📍 [ROUTING] "Linux/Windows Engineer" @ ORG_54f9eaef International Group (SIG)
[2025-12-18T22:38:23.159Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T22:38:23.413Z] [BOT] ✅ Created forum post: 🏢 Linux/Windows Engineer @ ORG_54f9eaef International Group (SIG) in #🤖・ai-jobs
  ✅ Industry: Linux/Windows Engineer @ ORG_54f9eaef International Group (SIG)
[2025-12-18T22:38:25.082Z] [BOT] ✅ Created forum post: 🏢 Linux/Windows Engineer @ ORG_54f9eaef International Group (SIG) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T22:38:26.582Z] [BOT] 💾 Marked as posted: Linux/Windows Engineer @ ORG_54f9eaef International Group (SIG) (instance #1)
[2025-12-18T22:38:26.583Z] [BOT] 💾 BEFORE ARCHIVING: 609 jobs in database
[2025-12-18T22:38:26.583Z] [BOT] ✅ No jobs to archive (all 609 jobs within 7-day window)
[2025-12-18T22:38:26.589Z] [BOT] 💾 Saved posted_jobs.json: 609 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T22:38:26.590Z] [BOT] 📍 [ROUTING] "Faculty Fellow" @ ORG_54f9eaef International Group (SIG)
[2025-12-18T22:38:26.590Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T22:38:26.900Z] [BOT] ✅ Created forum post: 🏢 Faculty Fellow @ ORG_54f9eaef International Group (SIG) in #🤖・ai-jobs
  ✅ Industry: Faculty Fellow @ ORG_54f9eaef International Group (SIG)
[2025-12-18T22:38:28.764Z] [BOT] ✅ Created forum post: 🏢 Faculty Fellow @ ORG_54f9eaef International Group (SIG) in #💻・remote-usa
[2025-12-18T22:38:28.765Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T22:38:30.265Z] [BOT] 💾 Marked as posted: Faculty Fellow @ ORG_54f9eaef International Group (SIG) (instance #1)
[2025-12-18T22:38:30.265Z] [BOT] 💾 BEFORE ARCHIVING: 610 jobs in database
[2025-12-18T22:38:30.265Z] [BOT] ✅ No jobs to archive (all 610 jobs within 7-day window)
[2025-12-18T22:38:30.271Z] [BOT] 💾 Saved posted_jobs.json: 610 active jobs
[2025-12-18T22:38:30.271Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:38:30.272Z] [BOT] 📍 [ROUTING] "Associate Linux/Windows Engineer - Platform Services" @ ORG_54f9eaef International Group (SIG)
[2025-12-18T22:38:30.272Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T22:38:30.550Z] [BOT] ✅ Created forum post: 🏢 Associate Linux/Windows Engineer - Platform Services @ ORG_54f9eaef International Group (SIG) in #🤖・ai-jobs
  ✅ Industry: Associate Linux/Windows Engineer - Platform Services @ ORG_54f9eaef International Group (SIG)
[2025-12-18T22:38:32.415Z] [BOT] ✅ Created forum post: 🏢 Associate Linux/Windows Engineer - Platform Services @ ORG_54f9eaef International Group (SIG) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T22:38:33.916Z] [BOT] 💾 Marked as posted: Associate Linux/Windows Engineer - Platform Services @ ORG_54f9eaef International Group (SIG) (instance #1)
[2025-12-18T22:38:33.917Z] [BOT] 💾 BEFORE ARCHIVING: 611 jobs in database
[2025-12-18T22:38:33.917Z] [BOT] ✅ No jobs to archive (all 611 jobs within 7-day window)
[2025-12-18T22:38:33.923Z] [BOT] 💾 Saved posted_jobs.json: 611 active jobs
[2025-12-18T22:38:33.923Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:38:33.924Z] [BOT] 📍 [ROUTING] "2026 Information Technology & Cybersecurity" @ ORG_314502c8
   Category: AI (matched: "machine learning")
[2025-12-18T22:38:33.924Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T22:38:33.924Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T22:38:34.283Z] [BOT] ✅ Created forum post: 🏢 2026 Information Technology & Cybersecurity @ ORG_314502c8 in #🤖・ai-jobs
  ✅ Industry: 2026 Information Technology & Cybersecurity @ ORG_314502c8
[2025-12-18T22:38:36.032Z] [BOT] ✅ Created forum post: 🏢 2026 Information Technology & Cybersecurity @ ORG_314502c8 in #💻・remote-usa
[2025-12-18T22:38:36.032Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T22:38:37.532Z] [BOT] 💾 Marked as posted: 2026 Information Technology & Cybersecurity @ ORG_314502c8 (instance #1)
[2025-12-18T22:38:37.532Z] [BOT] 💾 BEFORE ARCHIVING: 612 jobs in database
[2025-12-18T22:38:37.533Z] [BOT] ✅ No jobs to archive (all 612 jobs within 7-day window)
[2025-12-18T22:38:37.539Z] [BOT] 💾 Saved posted_jobs.json: 612 active jobs
[2025-12-18T22:38:37.539Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:38:37.539Z] [BOT] 📍 [ROUTING] "AI and Machine Learning Assistant Professor/Professional Practice Assistant Professor" @ ORG_82bce10b State University
[2025-12-18T22:38:37.540Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T22:38:38.420Z] [BOT] ✅ Created forum post: 🏢 AI and Machine Learning Assistant Professor/Professional Practice Assistant Professor @ ORG_82bce10b Stat in #🤖・ai-jobs
  ✅ Industry: AI and Machine Learning Assistant Professor/Professional Practice Assistant Professor @ ORG_82bce10b State University
[2025-12-18T22:38:40.284Z] [BOT] ✅ Created forum post: 🏢 AI and Machine Learning Assistant Professor/Professional Practice Assistant Professor @ ORG_82bce10b Stat in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T22:38:41.784Z] [BOT] 💾 Marked as posted: AI and Machine Learning Assistant Professor/Professional Practice Assistant Professor @ ORG_82bce10b State University (instance #1)
[2025-12-18T22:38:41.785Z] [BOT] 💾 BEFORE ARCHIVING: 613 jobs in database
[2025-12-18T22:38:41.785Z] [BOT] ✅ No jobs to archive (all 613 jobs within 7-day window)
[2025-12-18T22:38:41.792Z] [BOT] 💾 Saved posted_jobs.json: 613 active jobs
[2025-12-18T22:38:41.792Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:38:44.792Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-18T22:38:44.792Z] [BOT] 📍 [ROUTING] "Research Assistant" @ ORG_bb2e0909
[2025-12-18T22:38:44.792Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-18T22:38:45.116Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_bb2e0909 in #🩺・healthcare-jobs
[2025-12-18T22:38:45.116Z] [BOT] ✅ Industry: Research Assistant @ ORG_bb2e0909
[2025-12-18T22:38:46.810Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_bb2e0909 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-18T22:38:48.310Z] [BOT] 💾 Marked as posted: Research Assistant @ ORG_bb2e0909 (instance #1)
[2025-12-18T22:38:48.310Z] [BOT] 💾 BEFORE ARCHIVING: 614 jobs in database
[2025-12-18T22:38:48.311Z] [BOT] ✅ No jobs to archive (all 614 jobs within 7-day window)
[2025-12-18T22:38:48.317Z] [BOT] 💾 Saved posted_jobs.json: 614 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T22:38:51.318Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-18T22:38:51.318Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_05d2f9ea Electric
[2025-12-18T22:38:51.319Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:38:51.536Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_05d2f9ea Electric in #💻・tech-jobs
[2025-12-18T22:38:51.536Z] [BOT] ✅ Industry: Software Engineer @ ORG_05d2f9ea Electric
[2025-12-18T22:38:53.232Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_05d2f9ea Electric in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T22:38:54.733Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_05d2f9ea Electric (instance #1)
[2025-12-18T22:38:54.733Z] [BOT] 💾 BEFORE ARCHIVING: 615 jobs in database
[2025-12-18T22:38:54.734Z] [BOT] ✅ No jobs to archive (all 615 jobs within 7-day window)
[2025-12-18T22:38:54.740Z] [BOT] 💾 Saved posted_jobs.json: 615 active jobs
[2025-12-18T22:38:54.740Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:38:57.741Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T22:38:57.742Z] [BOT] ⏭️  Skipping duplicate: JID_c35b1f84-graduates_103573 (posted within 7 days)
[2025-12-18T22:38:57.742Z] [BOT] ⏭️  Skipping duplicate: JID_3944f0a7 (posted within 7 days)
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_814a1298-scientist_r158623 (posted within 7 days)
[2025-12-18T22:38:57.742Z] [BOT] ⏭️  Skipping duplicate: JID_f5f291d5 (posted within 7 days)
[2025-12-18T22:38:57.742Z] [BOT] ⏭️  Skipping duplicate: JID_9c658ec4 (posted within 7 days)
[2025-12-18T22:38:57.742Z] [BOT] ⏭️  Skipping duplicate: JID_f7c2fe33 (posted within 7 days)
[2025-12-18T22:38:57.742Z] [BOT] ⏭️  Skipping duplicate: JID_875ceda7-pentair_careers-JID_ba522ea0-program_r21984 (posted within 7 days)
[2025-12-18T22:38:57.742Z] [BOT] ⏭️  Skipping duplicate: JID_b4ea37de (posted within 7 days)
[2025-12-18T22:38:57.743Z] [BOT] ⏭️  Skipping duplicate: JID_5e965dd6 (posted within 7 days)
[2025-12-18T22:38:57.743Z] [BOT] ⏭️  Skipping duplicate: JID_b02011d1-cx_1-JID_7d21166b (posted within 7 days)
[2025-12-18T22:38:57.746Z] [BOT] ✅ Loaded pending queue: 367 total (347 pending, 20 enriched, 0 posted)
[2025-12-18T22:38:57.752Z] [BOT] ✅ Saved pending queue: 367 total (347 pending, 10 enriched, 10 posted)
[2025-12-18T22:38:57.752Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T22:38:57.794Z] [BOT] 📂 Loaded 585 existing routing entries
[2025-12-18T22:38:57.836Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-18T22:38:57.836Z] [BOT] Total entries: 595
   Timestamp: 2025-12-18T22:38:57.833Z
[2025-12-18T22:38:57.837Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
[2025-12-18T22:38:57.837Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-18T22:38:57.837Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-18T22:38:57.837Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
     1. #💻・remote-usa: 7 posts
[2025-12-18T22:38:57.838Z] [BOT] 2. #🤖・ai-jobs: 6 posts
[2025-12-18T22:38:57.838Z] [BOT] 3. #🌉・san-francisco: 2 posts
[2025-12-18T22:38:57.838Z] [BOT] 4. #📈・JID_fb739488: 1 posts
     5. #📣・marketing-jobs: 1 posts
[2025-12-18T22:38:57.838Z] [BOT] [STATS] Channel stats saved
[2025-12-18T22:38:59.851Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2855) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*