# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T09:25:18.606Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T09:24:22.596Z] ========================================
[2025-12-16T09:24:22.598Z] Discord Bot Execution Log
[2025-12-16T09:24:22.598Z] Environment: GitHub Actions
[2025-12-16T09:24:22.598Z] Node Version: v20.19.6
[2025-12-16T09:24:22.598Z] ========================================
[2025-12-16T09:24:22.598Z] Environment Variables Check:
[2025-12-16T09:24:22.598Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T09:24:22.598Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T09:24:22.598Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T09:24:22.599Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T09:24:22.599Z] 
Multi-Channel Configuration:
[2025-12-16T09:24:22.599Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T09:24:22.599Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T09:24:22.599Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T09:24:22.599Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T09:24:22.599Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T09:24:22.599Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T09:24:22.599Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T09:24:22.599Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T09:24:22.599Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T09:24:22.599Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T09:24:22.600Z] 
Data Files Check:
[2025-12-16T09:24:22.600Z] .github/data/new_jobs.json: ✅ Exists (10 items, 53235 bytes)
[2025-12-16T09:24:22.602Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 262710 bytes)
[2025-12-16T09:24:22.603Z] 
========================================
[2025-12-16T09:24:22.603Z] Starting Enhanced Discord Bot...
[2025-12-16T09:24:22.603Z] ========================================
[2025-12-16T09:24:23.122Z] [BOT] ✅ Loaded V2 database: 425 jobs
[2025-12-16T09:24:24.068Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T09:24:24.069Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T09:24:24.069Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T09:24:24.069Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T09:24:24.125Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T09:24:24.192Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 196
[2025-12-16T09:24:24.193Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T09:24:24.194Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T09:24:24.194Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T09:24:24.194Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T09:24:24.195Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T09:24:24.199Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-16T09:24:24.200Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate" @ ORG_08c9a13c
[2025-12-16T09:24:24.200Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:24:24.217Z] [BOT ERROR] (node:2782) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T09:24:24.407Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer Graduate @ ORG_08c9a13c
[2025-12-16T09:24:26.091Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T09:24:27.592Z] [BOT] 💾 Marked as posted: Backend Software Engineer Graduate @ ORG_08c9a13c (instance #1)
[2025-12-16T09:24:27.592Z] [BOT] 💾 BEFORE ARCHIVING: 426 jobs in database
[2025-12-16T09:24:27.593Z] [BOT] ✅ No jobs to archive (all 426 jobs within 7-day window)
[2025-12-16T09:24:27.600Z] [BOT] 💾 Saved posted_jobs.json: 426 active jobs
[2025-12-16T09:24:27.600Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:24:27.600Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Onsite Redwood City - CA" @ ORG_b8b5d30e
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:24:28.133Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Onsite Redwood City - CA @ ORG_b8b5d30e in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer - Onsite Redwood City - CA @ ORG_b8b5d30e
[2025-12-16T09:24:29.811Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Onsite Redwood City - CA @ ORG_b8b5d30e in #🦢・los-angeles
[2025-12-16T09:24:29.811Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-16T09:24:31.312Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Onsite Redwood City - CA @ ORG_b8b5d30e (instance #1)
[2025-12-16T09:24:31.312Z] [BOT] 💾 BEFORE ARCHIVING: 427 jobs in database
[2025-12-16T09:24:31.312Z] [BOT] ✅ No jobs to archive (all 427 jobs within 7-day window)
[2025-12-16T09:24:31.317Z] [BOT] 💾 Saved posted_jobs.json: 427 active jobs
[2025-12-16T09:24:31.317Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:24:31.318Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
[2025-12-16T09:24:31.318Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:24:31.507Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ Q2
[2025-12-16T09:24:33.202Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-16T09:24:34.703Z] [BOT] 💾 Marked as posted: Software Engineer @ Q2 (instance #1)
[2025-12-16T09:24:34.704Z] [BOT] 💾 BEFORE ARCHIVING: 428 jobs in database
[2025-12-16T09:24:34.704Z] [BOT] ✅ No jobs to archive (all 428 jobs within 7-day window)
[2025-12-16T09:24:34.709Z] [BOT] 💾 Saved posted_jobs.json: 428 active jobs
[2025-12-16T09:24:34.709Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:24:34.710Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b08efd2b
[2025-12-16T09:24:34.710Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:24:34.895Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b08efd2b in #💻・tech-jobs
[2025-12-16T09:24:34.896Z] [BOT] ✅ Industry: Software Engineer @ ORG_b08efd2b
[2025-12-16T09:24:36.581Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b08efd2b in #🌉・san-francisco
[2025-12-16T09:24:36.581Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T09:24:38.082Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_b08efd2b (instance #1)
[2025-12-16T09:24:38.083Z] [BOT] 💾 BEFORE ARCHIVING: 429 jobs in database
[2025-12-16T09:24:38.083Z] [BOT] ✅ No jobs to archive (all 429 jobs within 7-day window)
[2025-12-16T09:24:38.088Z] [BOT] 💾 Saved posted_jobs.json: 429 active jobs
[2025-12-16T09:24:38.088Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:24:38.088Z] [BOT] 📍 [ROUTING] "Software Engineer - University Hire 2026" @ ORG_b344d80e Voleon Group
   Category: TECH (matched: "software")
[2025-12-16T09:24:38.088Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:24:38.286Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - University Hire 2026 @ ORG_b344d80e Voleon Group in #💻・tech-jobs
[2025-12-16T09:24:38.286Z] [BOT] ✅ Industry: Software Engineer - University Hire 2026 @ ORG_b344d80e Voleon Group
[2025-12-16T09:24:40.628Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - University Hire 2026 @ ORG_b344d80e Voleon Group in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T09:24:42.129Z] [BOT] 💾 Marked as posted: Software Engineer - University Hire 2026 @ ORG_b344d80e Voleon Group (instance #1)
[2025-12-16T09:24:42.129Z] [BOT] 💾 BEFORE ARCHIVING: 430 jobs in database
[2025-12-16T09:24:42.129Z] [BOT] ✅ No jobs to archive (all 430 jobs within 7-day window)
[2025-12-16T09:24:42.134Z] [BOT] 💾 Saved posted_jobs.json: 430 active jobs
[2025-12-16T09:24:42.134Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:24:45.135Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T09:24:45.135Z] [BOT] 📍 [ROUTING] "Campus Graduate - Research & Development - Bachelor/Master" @ ORG_2771ce87 Chemical Company
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-16T09:24:45.344Z] [BOT] ✅ Created forum post: 🏢 Campus Graduate - Research & Development - Bachelor/Master @ ORG_2771ce87 Chemical Company in #📈・JID_fb739488
  ✅ Industry: Campus Graduate - Research & Development - Bachelor/Master @ ORG_2771ce87 Chemical Company
[2025-12-16T09:24:47.498Z] [BOT] ✅ Created forum post: 🏢 Campus Graduate - Research & Development - Bachelor/Master @ ORG_2771ce87 Chemical Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T09:24:48.999Z] [BOT] 💾 Marked as posted: Campus Graduate - Research & Development - Bachelor/Master @ ORG_2771ce87 Chemical Company (instance #1)
[2025-12-16T09:24:48.999Z] [BOT] 💾 BEFORE ARCHIVING: 431 jobs in database
[2025-12-16T09:24:49.000Z] [BOT] ✅ No jobs to archive (all 431 jobs within 7-day window)
[2025-12-16T09:24:49.005Z] [BOT] 💾 Saved posted_jobs.json: 431 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T09:24:52.006Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-16T09:24:52.006Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee" @ ORG_a867f63f National Laboratory
[2025-12-16T09:24:52.006Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T09:24:52.323Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Appointee @ ORG_a867f63f National Laboratory
[2025-12-16T09:24:54.063Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T09:24:55.564Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee @ ORG_a867f63f National Laboratory (instance #1)
[2025-12-16T09:24:55.564Z] [BOT] 💾 BEFORE ARCHIVING: 432 jobs in database
[2025-12-16T09:24:55.564Z] [BOT] ✅ No jobs to archive (all 432 jobs within 7-day window)
[2025-12-16T09:24:55.570Z] [BOT] 💾 Saved posted_jobs.json: 432 active jobs
[2025-12-16T09:24:55.570Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:24:55.570Z] [BOT] 📍 [ROUTING] "Post-Doctoral Associate" @ ORG_9d38443e of Maryland - College Park
[2025-12-16T09:24:55.570Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T09:24:55.840Z] [BOT] ✅ Created forum post: 🏢 Post-Doctoral Associate @ ORG_9d38443e of Maryland - College Park in #🤖・ai-jobs
[2025-12-16T09:24:55.840Z] [BOT] ✅ Industry: Post-Doctoral Associate @ ORG_9d38443e of Maryland - College Park
[2025-12-16T09:24:57.550Z] [BOT] ✅ Created forum post: 🏢 Post-Doctoral Associate @ ORG_9d38443e of Maryland - College Park in #💻・remote-usa
[2025-12-16T09:24:57.550Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T09:24:59.052Z] [BOT] 💾 Marked as posted: Post-Doctoral Associate @ ORG_9d38443e of Maryland - College Park (instance #1)
[2025-12-16T09:24:59.052Z] [BOT] 💾 BEFORE ARCHIVING: 433 jobs in database
[2025-12-16T09:24:59.052Z] [BOT] ✅ No jobs to archive (all 433 jobs within 7-day window)
[2025-12-16T09:24:59.057Z] [BOT] 💾 Saved posted_jobs.json: 433 active jobs
[2025-12-16T09:24:59.057Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:25:02.058Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-16T09:25:02.058Z] [BOT] 📍 [ROUTING] "Research Professional" @ ORG_9d38443e of Chicago
[2025-12-16T09:25:02.058Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-16T09:25:02.332Z] [BOT] ✅ Created forum post: 🏢 Research Professional @ ORG_9d38443e of Chicago in #🩺・healthcare-jobs
  ✅ Industry: Research Professional @ ORG_9d38443e of Chicago
[2025-12-16T09:25:04.182Z] [BOT] ✅ Created forum post: 🏢 Research Professional @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T09:25:05.683Z] [BOT] 💾 Marked as posted: Research Professional @ ORG_9d38443e of Chicago (instance #1)
[2025-12-16T09:25:05.684Z] [BOT] 💾 BEFORE ARCHIVING: 434 jobs in database
[2025-12-16T09:25:05.684Z] [BOT] ✅ No jobs to archive (all 434 jobs within 7-day window)
[2025-12-16T09:25:05.689Z] [BOT] 💾 Saved posted_jobs.json: 434 active jobs
[2025-12-16T09:25:05.689Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:25:08.690Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-16T09:25:08.690Z] [BOT] 📍 [ROUTING] "Annotation Specialist 1 - Part time - 3rd Eye" @ ORG_09a1e473
[2025-12-16T09:25:08.690Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1391...2941)
[2025-12-16T09:25:08.991Z] [BOT] ✅ Created forum post: 🏢 Annotation Specialist 1 - Part time - 3rd Eye @ ORG_09a1e473 in #💰・finance-jobs
  ✅ Industry: Annotation Specialist 1 - Part time - 3rd Eye @ ORG_09a1e473
[2025-12-16T09:25:10.735Z] [BOT] ✅ Created forum post: 🏢 Annotation Specialist 1 - Part time - 3rd Eye @ ORG_09a1e473 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-16T09:25:12.236Z] [BOT] 💾 Marked as posted: Annotation Specialist 1 - Part time - 3rd Eye @ ORG_09a1e473 (instance #1)
[2025-12-16T09:25:12.236Z] [BOT] 💾 BEFORE ARCHIVING: 435 jobs in database
[2025-12-16T09:25:12.236Z] [BOT] ✅ No jobs to archive (all 435 jobs within 7-day window)
[2025-12-16T09:25:12.241Z] [BOT] 💾 Saved posted_jobs.json: 435 active jobs
[2025-12-16T09:25:12.241Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:25:15.242Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T09:25:15.242Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_cb26526c-detail (posted within 7 days)
[2025-12-16T09:25:15.242Z] [BOT] ⏭️  Skipping duplicate: JID_ada53d77-_r2060619 (posted within 7 days)
[2025-12-16T09:25:15.242Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_ed1f0cfa-science_421248 (posted within 7 days)
[2025-12-16T09:25:15.243Z] [BOT] ⏭️  Skipping duplicate: JID_4bde36d7 (posted within 7 days)
[2025-12-16T09:25:15.243Z] [BOT] ⏭️  Skipping duplicate: JID_32cb8765-professional_jr31354 (posted within 7 days)
⏭️  Skipping duplicate: JID_79063f25-engineer_req-11665 (posted within 7 days)
[2025-12-16T09:25:15.243Z] [BOT] ⏭️  Skipping duplicate: JID_59bd0186-associate_jr100737 (posted within 7 days)
[2025-12-16T09:25:15.243Z] [BOT] ⏭️  Skipping duplicate: JID_13f83d10 (posted within 7 days)
⏭️  Skipping duplicate: JID_6336b91f-eye_req-8931 (posted within 7 days)
[2025-12-16T09:25:15.243Z] [BOT] ⏭️  Skipping duplicate: JID_1a44f75e (posted within 7 days)
[2025-12-16T09:25:15.246Z] [BOT] ✅ Loaded pending queue: 458 total (438 pending, 20 enriched, 0 posted)
[2025-12-16T09:25:15.253Z] [BOT] ✅ Saved pending queue: 458 total (438 pending, 10 enriched, 10 posted)
[2025-12-16T09:25:15.253Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T09:25:15.293Z] [BOT] 📂 Loaded 410 existing routing entries
[2025-12-16T09:25:15.332Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-16T09:25:15.332Z] [BOT] Total entries: 420
   Timestamp: 2025-12-16T09:25:15.330Z
[2025-12-16T09:25:15.333Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T09:25:15.333Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T09:25:17.345Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2782) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*