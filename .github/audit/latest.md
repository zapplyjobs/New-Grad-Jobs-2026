# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T22:50:40.587Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T22:49:51.901Z] ========================================
[2025-12-18T22:49:51.903Z] Discord Bot Execution Log
[2025-12-18T22:49:51.903Z] Environment: GitHub Actions
[2025-12-18T22:49:51.903Z] Node Version: v20.19.6
[2025-12-18T22:49:51.903Z] ========================================
[2025-12-18T22:49:51.903Z] Environment Variables Check:
[2025-12-18T22:49:51.903Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T22:49:51.903Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T22:49:51.903Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T22:49:51.903Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T22:49:51.903Z] 
Multi-Channel Configuration:
[2025-12-18T22:49:51.903Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T22:49:51.904Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T22:49:51.904Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T22:49:51.904Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T22:49:51.904Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T22:49:51.904Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T22:49:51.904Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T22:49:51.904Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T22:49:51.904Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T22:49:51.904Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T22:49:51.904Z] 
Data Files Check:
[2025-12-18T22:49:51.905Z] .github/data/new_jobs.json: ✅ Exists (10 items, 45019 bytes)
[2025-12-18T22:49:51.908Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 370852 bytes)
[2025-12-18T22:49:51.908Z] 
========================================
[2025-12-18T22:49:51.908Z] Starting Enhanced Discord Bot...
[2025-12-18T22:49:51.908Z] ========================================
[2025-12-18T22:49:52.428Z] [BOT] ✅ Loaded V2 database: 615 jobs
[2025-12-18T22:49:53.309Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T22:49:53.310Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T22:49:53.310Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T22:49:53.313Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T22:49:53.360Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T22:49:53.412Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 100
[2025-12-18T22:49:53.415Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T22:49:53.415Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T22:49:53.415Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T22:49:53.416Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T22:49:53.416Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T22:49:53.420Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-18T22:49:53.420Z] [BOT] 📍 [ROUTING] "Manufacturing Software Engineer" @ ORG_05d2f9ea Electric
[2025-12-18T22:49:53.421Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:49:53.437Z] [BOT ERROR] (node:2828) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T22:49:53.743Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Software Engineer @ ORG_05d2f9ea Electric in #💻・tech-jobs
[2025-12-18T22:49:53.743Z] [BOT] ✅ Industry: Manufacturing Software Engineer @ ORG_05d2f9ea Electric
[2025-12-18T22:49:55.423Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Software Engineer @ ORG_05d2f9ea Electric in #💻・remote-usa
[2025-12-18T22:49:55.423Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T22:49:56.923Z] [BOT] 💾 Marked as posted: Manufacturing Software Engineer @ ORG_05d2f9ea Electric (instance #1)
[2025-12-18T22:49:56.924Z] [BOT] 💾 BEFORE ARCHIVING: 616 jobs in database
[2025-12-18T22:49:56.924Z] [BOT] ✅ No jobs to archive (all 616 jobs within 7-day window)
[2025-12-18T22:49:56.934Z] [BOT] 💾 Saved posted_jobs.json: 616 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T22:49:56.934Z] [BOT] 📍 [ROUTING] "Software Engineer - IT" @ ORG_05d2f9ea Electric
[2025-12-18T22:49:56.934Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:49:57.164Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - IT @ ORG_05d2f9ea Electric in #💻・tech-jobs
[2025-12-18T22:49:57.165Z] [BOT] ✅ Industry: Software Engineer - IT @ ORG_05d2f9ea Electric
[2025-12-18T22:49:58.901Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - IT @ ORG_05d2f9ea Electric in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T22:50:00.402Z] [BOT] 💾 Marked as posted: Software Engineer - IT @ ORG_05d2f9ea Electric (instance #1)
💾 BEFORE ARCHIVING: 617 jobs in database
[2025-12-18T22:50:00.403Z] [BOT] ✅ No jobs to archive (all 617 jobs within 7-day window)
[2025-12-18T22:50:00.408Z] [BOT] 💾 Saved posted_jobs.json: 617 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T22:50:00.408Z] [BOT] 📍 [ROUTING] "Systems Software Engineer 2" @ ORG_f4ab50d0 Engineered Systems
   Category: TECH (matched: "software")
[2025-12-18T22:50:00.408Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:50:00.651Z] [BOT] ✅ Created forum post: 🏢 Systems Software Engineer 2 @ ORG_f4ab50d0 Engineered Systems in #💻・tech-jobs
[2025-12-18T22:50:00.651Z] [BOT] ✅ Industry: Systems Software Engineer 2 @ ORG_f4ab50d0 Engineered Systems
[2025-12-18T22:50:02.409Z] [BOT] ✅ Created forum post: 🏢 Systems Software Engineer 2 @ ORG_f4ab50d0 Engineered Systems in #💻・remote-usa
[2025-12-18T22:50:02.409Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T22:50:03.910Z] [BOT] 💾 Marked as posted: Systems Software Engineer 2 @ ORG_f4ab50d0 Engineered Systems (instance #1)
[2025-12-18T22:50:03.911Z] [BOT] 💾 BEFORE ARCHIVING: 618 jobs in database
[2025-12-18T22:50:03.911Z] [BOT] ✅ No jobs to archive (all 618 jobs within 7-day window)
[2025-12-18T22:50:03.917Z] [BOT] 💾 Saved posted_jobs.json: 618 active jobs
[2025-12-18T22:50:03.918Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:50:03.919Z] [BOT] 📍 [ROUTING] "Digital Engineering Rotational Aspire" @ ORG_0baaf6f2 Bureau of Shipping
[2025-12-18T22:50:03.919Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:50:04.224Z] [BOT] ✅ Created forum post: 🏢 Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping in #💻・tech-jobs
[2025-12-18T22:50:04.224Z] [BOT] ✅ Industry: Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping
[2025-12-18T22:50:06.130Z] [BOT] ✅ Created forum post: 🏢 Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-18T22:50:07.631Z] [BOT] 💾 Marked as posted: Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping (instance #1)
[2025-12-18T22:50:07.631Z] [BOT] 💾 BEFORE ARCHIVING: 619 jobs in database
[2025-12-18T22:50:07.632Z] [BOT] ✅ No jobs to archive (all 619 jobs within 7-day window)
[2025-12-18T22:50:07.638Z] [BOT] 💾 Saved posted_jobs.json: 619 active jobs
[2025-12-18T22:50:07.639Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:50:10.639Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-18T22:50:10.640Z] [BOT] 📍 [ROUTING] "Assistant Scientist - Cnm" @ ORG_a867f63f National Laboratory
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-18T22:50:11.035Z] [BOT] ✅ Created forum post: 🏢 Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory in #📣・marketing-jobs
  ✅ Industry: Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory
[2025-12-18T22:50:12.703Z] [BOT] ✅ Created forum post: 🏢 Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-18T22:50:14.205Z] [BOT] 💾 Marked as posted: Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory (instance #1)
[2025-12-18T22:50:14.205Z] [BOT] 💾 BEFORE ARCHIVING: 620 jobs in database
[2025-12-18T22:50:14.205Z] [BOT] ✅ No jobs to archive (all 620 jobs within 7-day window)
[2025-12-18T22:50:14.211Z] [BOT] 💾 Saved posted_jobs.json: 620 active jobs
[2025-12-18T22:50:14.212Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:50:17.212Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2025-12-18T22:50:17.212Z] [BOT] 📍 [ROUTING] "Junior Web Developer" @ ORG_726232d3
[2025-12-18T22:50:17.212Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T22:50:17.650Z] [BOT] ✅ Created forum post: 🏢 Junior Web Developer @ ORG_726232d3 in #🤖・ai-jobs
[2025-12-18T22:50:17.650Z] [BOT] ✅ Industry: Junior Web Developer @ ORG_726232d3
[2025-12-18T22:50:19.390Z] [BOT] ✅ Created forum post: 🏢 Junior Web Developer @ ORG_726232d3 in #💻・remote-usa
[2025-12-18T22:50:19.390Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T22:50:20.891Z] [BOT] 💾 Marked as posted: Junior Web Developer @ ORG_726232d3 (instance #1)
[2025-12-18T22:50:20.891Z] [BOT] 💾 BEFORE ARCHIVING: 621 jobs in database
[2025-12-18T22:50:20.892Z] [BOT] ✅ No jobs to archive (all 621 jobs within 7-day window)
[2025-12-18T22:50:20.898Z] [BOT] 💾 Saved posted_jobs.json: 621 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T22:50:20.898Z] [BOT] 📍 [ROUTING] "Systems Engineer" @ ORG_05ce0396 Meter
[2025-12-18T22:50:20.898Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-18T22:50:21.100Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer @ ORG_05ce0396 Meter in #🤖・ai-jobs
  ✅ Industry: Systems Engineer @ ORG_05ce0396 Meter
[2025-12-18T22:50:22.798Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer @ ORG_05ce0396 Meter in #💻・remote-usa
[2025-12-18T22:50:22.798Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T22:50:24.299Z] [BOT] 💾 Marked as posted: Systems Engineer @ ORG_05ce0396 Meter (instance #1)
[2025-12-18T22:50:24.299Z] [BOT] 💾 BEFORE ARCHIVING: 622 jobs in database
[2025-12-18T22:50:24.300Z] [BOT] ✅ No jobs to archive (all 622 jobs within 7-day window)
[2025-12-18T22:50:24.306Z] [BOT] 💾 Saved posted_jobs.json: 622 active jobs
[2025-12-18T22:50:24.306Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:50:24.306Z] [BOT] 📍 [ROUTING] "R&D Machine Learning Engineer - Engineering Scientist Associate" @ ORG_9d38443e of Texas - Austin
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T22:50:24.306Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-18T22:50:24.546Z] [BOT] ✅ Created forum post: 🏢 R&D Machine Learning Engineer - Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
  ✅ Industry: R&D Machine Learning Engineer - Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin
[2025-12-18T22:50:26.244Z] [BOT] ✅ Created forum post: 🏢 R&D Machine Learning Engineer - Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-18T22:50:27.745Z] [BOT] 💾 Marked as posted: R&D Machine Learning Engineer - Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-18T22:50:27.745Z] [BOT] 💾 BEFORE ARCHIVING: 623 jobs in database
[2025-12-18T22:50:27.746Z] [BOT] ✅ No jobs to archive (all 623 jobs within 7-day window)
[2025-12-18T22:50:27.752Z] [BOT] 💾 Saved posted_jobs.json: 623 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T22:50:27.753Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ ORG_b26219beina
[2025-12-18T22:50:27.753Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T22:50:27.971Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ ORG_b26219beina in #🤖・ai-jobs
[2025-12-18T22:50:27.971Z] [BOT] ✅ Industry: Machine Learning Engineer @ ORG_b26219beina
[2025-12-18T22:50:29.766Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ ORG_b26219beina in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-18T22:50:31.267Z] [BOT] 💾 Marked as posted: Machine Learning Engineer @ ORG_b26219beina (instance #1)
[2025-12-18T22:50:31.267Z] [BOT] 💾 BEFORE ARCHIVING: 624 jobs in database
[2025-12-18T22:50:31.268Z] [BOT] ✅ No jobs to archive (all 624 jobs within 7-day window)
[2025-12-18T22:50:31.274Z] [BOT] 💾 Saved posted_jobs.json: 624 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T22:50:31.274Z] [BOT] 📍 [ROUTING] "OSTP Software Developer" @ ORG_85d40353
[2025-12-18T22:50:31.275Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T22:50:31.465Z] [BOT] ✅ Created forum post: 🏢 OSTP Software Developer @ ORG_85d40353 in #🤖・ai-jobs
  ✅ Industry: OSTP Software Developer @ ORG_85d40353
[2025-12-18T22:50:33.161Z] [BOT] ✅ Created forum post: 🏢 OSTP Software Developer @ ORG_85d40353 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-18T22:50:34.662Z] [BOT] 💾 Marked as posted: OSTP Software Developer @ ORG_85d40353 (instance #1)
[2025-12-18T22:50:34.663Z] [BOT] 💾 BEFORE ARCHIVING: 625 jobs in database
[2025-12-18T22:50:34.663Z] [BOT] ✅ No jobs to archive (all 625 jobs within 7-day window)
[2025-12-18T22:50:34.669Z] [BOT] 💾 Saved posted_jobs.json: 625 active jobs
[2025-12-18T22:50:34.669Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:50:37.670Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T22:50:37.670Z] [BOT] ⏭️  Skipping duplicate: JID_b02011d1-cx_1-JID_549fe46c (posted within 7 days)
[2025-12-18T22:50:37.670Z] [BOT] ⏭️  Skipping duplicate: JID_b02011d1-cx_1-JID_6d623086 (posted within 7 days)
[2025-12-18T22:50:37.671Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_698aa5c9-_421023 (posted within 7 days)
[2025-12-18T22:50:37.671Z] [BOT] ⏭️  Skipping duplicate: JID_b8c3774c (posted within 7 days)
[2025-12-18T22:50:37.671Z] [BOT] ⏭️  Skipping duplicate: JID_9926bfb5-us_careersite-JID_d04b27b8-engineer_4003 (posted within 7 days)
[2025-12-18T22:50:37.671Z] [BOT] ⏭️  Skipping duplicate: JID_da30acdb-cx_1-JID_ba2a955a (posted within 7 days)
[2025-12-18T22:50:37.671Z] [BOT] ⏭️  Skipping duplicate: JID_35ef4d31-_r_00041479 (posted within 7 days)
[2025-12-18T22:50:37.671Z] [BOT] ⏭️  Skipping duplicate: JID_58099246 (posted within 7 days)
[2025-12-18T22:50:37.671Z] [BOT] ⏭️  Skipping duplicate: JID_1c1f6075 (posted within 7 days)
[2025-12-18T22:50:37.671Z] [BOT] ⏭️  Skipping duplicate: JID_0cbe1638-cx_1-job-3499 (posted within 7 days)
[2025-12-18T22:50:37.674Z] [BOT] ✅ Loaded pending queue: 357 total (337 pending, 20 enriched, 0 posted)
[2025-12-18T22:50:37.679Z] [BOT] ✅ Saved pending queue: 357 total (337 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2025-12-18T22:50:37.680Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-18T22:50:37.720Z] [BOT] 📂 Loaded 595 existing routing entries
[2025-12-18T22:50:37.763Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 605
   Timestamp: 2025-12-18T22:50:37.758Z
📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
   Total attempts: 20
[2025-12-18T22:50:37.763Z] [BOT] Successful: 20
[2025-12-18T22:50:37.763Z] [BOT] Failed: 0
[2025-12-18T22:50:37.763Z] [BOT] Skipped: 0
[2025-12-18T22:50:37.763Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-18T22:50:37.764Z] [BOT] Last cleanup: Never
[2025-12-18T22:50:37.764Z] [BOT] Total posts: 20
[2025-12-18T22:50:37.764Z] [BOT] Channels used: 7
[2025-12-18T22:50:37.764Z] [BOT] Top channels:
[2025-12-18T22:50:37.767Z] [BOT] 1. #💻・remote-usa: 5 posts
     2. #🤖・ai-jobs: 5 posts
     3. #💻・tech-jobs: 4 posts
     4. #🤠・austin: 2 posts
     5. #🗽・new-york: 2 posts
[STATS] Channel stats saved
[2025-12-18T22:50:39.777Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2828) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*