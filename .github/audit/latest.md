# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T20:42:17.410Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T20:41:25.454Z] ========================================
[2026-01-12T20:41:25.456Z] Discord Bot Execution Log
[2026-01-12T20:41:25.456Z] Environment: GitHub Actions
[2026-01-12T20:41:25.456Z] Node Version: v20.19.6
[2026-01-12T20:41:25.456Z] ========================================
[2026-01-12T20:41:25.456Z] Environment Variables Check:
[2026-01-12T20:41:25.456Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T20:41:25.456Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T20:41:25.456Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T20:41:25.456Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T20:41:25.457Z] 
Multi-Channel Configuration:
[2026-01-12T20:41:25.457Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T20:41:25.457Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T20:41:25.457Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T20:41:25.457Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T20:41:25.457Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T20:41:25.457Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T20:41:25.457Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T20:41:25.457Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T20:41:25.457Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T20:41:25.457Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T20:41:25.457Z] 
Data Files Check:
[2026-01-12T20:41:25.459Z] .github/data/new_jobs.json: ✅ Exists (10 items, 153862 bytes)
[2026-01-12T20:41:25.461Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 262940 bytes)
[2026-01-12T20:41:25.461Z] 
========================================
[2026-01-12T20:41:25.461Z] Starting Enhanced Discord Bot...
[2026-01-12T20:41:25.461Z] ========================================
[2026-01-12T20:41:25.985Z] [BOT] ✅ Loaded V2 database: 476 jobs
[2026-01-12T20:41:26.699Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T20:41:26.699Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T20:41:26.699Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T20:41:26.808Z] [BOT] ✅ Loaded pending queue: 2657 total (2637 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Manager 1, Technical Escalations Engineering - US-East at datadog
[2026-01-12T20:41:26.809Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T20:41:26.809Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T20:41:26.810Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T20:41:26.810Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-12T20:41:26.811Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Manager 2, Premier Support Engineering -  Boston @ datadog: boston, massachusetts, usa, new york, new york, usa
   - Mid Market Account Executive @ datadog: denver, colorado, usa, new york, new york, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-12T20:41:26.811Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T20:41:26.816Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-12T20:41:26.816Z] [BOT] 📍 [ROUTING] "Manager 1, Technical Escalations Engineering - US-East" @ datadog
[2026-01-12T20:41:26.816Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T20:41:26.821Z] [BOT ERROR] (node:2428) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T20:41:27.062Z] [BOT] ✅ Created forum post: 🏢 Manager 1, Technical Escalations Engineering - US-East @ datadog in #💻・tech-jobs
[2026-01-12T20:41:27.062Z] [BOT] ✅ Industry: Manager 1, Technical Escalations Engineering - US-East @ datadog
[2026-01-12T20:41:29.137Z] [BOT] ✅ Created forum post: 🏢 Manager 1, Technical Escalations Engineering - US-East @ datadog in #🗽・new-york
[2026-01-12T20:41:29.137Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T20:41:30.638Z] [BOT] 💾 Marked as posted: Manager 1, Technical Escalations Engineering - US-East @ datadog (instance #1)
[2026-01-12T20:41:30.638Z] [BOT] 💾 BEFORE ARCHIVING: 477 jobs in database
[2026-01-12T20:41:30.639Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T20:41:30.644Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-12T20:41:30.644Z] [BOT] ✅ Archiving complete: 1 archived, 476 active
[2026-01-12T20:41:30.649Z] [BOT] 💾 Saved posted_jobs.json: 476 active jobs
[2026-01-12T20:41:30.649Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:41:30.649Z] [BOT] 📍 [ROUTING] "Manager 2, Premier Support Engineering -  Boston" @ datadog
[2026-01-12T20:41:30.650Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T20:41:30.827Z] [BOT] ✅ Created forum post: 🏢 Manager 2, Premier Support Engineering -  Boston @ datadog in #💻・tech-jobs
[2026-01-12T20:41:30.828Z] [BOT] ✅ Industry: Manager 2, Premier Support Engineering -  Boston @ datadog
[2026-01-12T20:41:35.667Z] [BOT] ✅ Created forum post: 🏢 Manager 2, Premier Support Engineering -  Boston @ datadog in #🚌・boston
[2026-01-12T20:41:35.667Z] [BOT] ✅ Location: 🚌・boston
[2026-01-12T20:41:37.168Z] [BOT] 💾 Marked as posted: Manager 2, Premier Support Engineering -  Boston @ datadog (instance #1)
[2026-01-12T20:41:37.169Z] [BOT] 💾 BEFORE ARCHIVING: 477 jobs in database
[2026-01-12T20:41:37.169Z] [BOT] ✅ No jobs to archive (all 477 jobs within 7-day window)
[2026-01-12T20:41:37.174Z] [BOT] 💾 Saved posted_jobs.json: 477 active jobs
[2026-01-12T20:41:37.174Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:41:37.174Z] [BOT] 💾 Marked as posted: Manager 2, Premier Support Engineering - New York @ datadog (instance #1)
💾 BEFORE ARCHIVING: 478 jobs in database
[2026-01-12T20:41:37.175Z] [BOT] ✅ No jobs to archive (all 478 jobs within 7-day window)
[2026-01-12T20:41:37.179Z] [BOT] 💾 Saved posted_jobs.json: 478 active jobs
[2026-01-12T20:41:37.179Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:41:37.180Z] [BOT] 📍 [ROUTING] "Manager I, Developer Advocacy" @ datadog
[2026-01-12T20:41:37.180Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T20:41:37.393Z] [BOT] ✅ Created forum post: 🏢 Manager I, Developer Advocacy @ datadog in #💻・tech-jobs
[2026-01-12T20:41:37.393Z] [BOT] ✅ Industry: Manager I, Developer Advocacy @ datadog
[2026-01-12T20:41:39.103Z] [BOT] ✅ Created forum post: 🏢 Manager I, Developer Advocacy @ datadog in #🗽・new-york
[2026-01-12T20:41:39.103Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T20:41:40.604Z] [BOT] 💾 Marked as posted: Manager I, Developer Advocacy @ datadog (instance #1)
[2026-01-12T20:41:40.604Z] [BOT] 💾 BEFORE ARCHIVING: 479 jobs in database
[2026-01-12T20:41:40.605Z] [BOT] ✅ No jobs to archive (all 479 jobs within 7-day window)
[2026-01-12T20:41:40.610Z] [BOT] 💾 Saved posted_jobs.json: 479 active jobs
[2026-01-12T20:41:40.610Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:41:40.610Z] [BOT] 📍 [ROUTING] "Manager I, Engineering - APM SDK Capabilities" @ datadog
[2026-01-12T20:41:40.611Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T20:41:40.896Z] [BOT] ✅ Created forum post: 🏢 Manager I, Engineering - APM SDK Capabilities @ datadog in #💻・tech-jobs
  ✅ Industry: Manager I, Engineering - APM SDK Capabilities @ datadog
[2026-01-12T20:41:42.662Z] [BOT] ✅ Created forum post: 🏢 Manager I, Engineering - APM SDK Capabilities @ datadog in #🗽・new-york
[2026-01-12T20:41:42.663Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T20:41:44.163Z] [BOT] 💾 Marked as posted: Manager I, Engineering - APM SDK Capabilities @ datadog (instance #1)
[2026-01-12T20:41:44.163Z] [BOT] 💾 BEFORE ARCHIVING: 480 jobs in database
[2026-01-12T20:41:44.163Z] [BOT] ✅ No jobs to archive (all 480 jobs within 7-day window)
[2026-01-12T20:41:44.168Z] [BOT] 💾 Saved posted_jobs.json: 480 active jobs
[2026-01-12T20:41:44.168Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Manager I, Engineering - Infrastructure Remediation @ datadog (instance #1)
[2026-01-12T20:41:44.168Z] [BOT] 💾 BEFORE ARCHIVING: 481 jobs in database
[2026-01-12T20:41:44.168Z] [BOT] ✅ No jobs to archive (all 481 jobs within 7-day window)
[2026-01-12T20:41:44.173Z] [BOT] 💾 Saved posted_jobs.json: 481 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:41:44.173Z] [BOT] 💾 Marked as posted: Manager I, Engineering - Language Platform @ datadog (instance #1)
[2026-01-12T20:41:44.173Z] [BOT] 💾 BEFORE ARCHIVING: 482 jobs in database
[2026-01-12T20:41:44.174Z] [BOT] ✅ No jobs to archive (all 482 jobs within 7-day window)
[2026-01-12T20:41:44.178Z] [BOT] 💾 Saved posted_jobs.json: 482 active jobs
[2026-01-12T20:41:44.178Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:41:44.178Z] [BOT] 📍 [ROUTING] "Manager I, Engineering - Cloud SIEM - Security Data Enrichment" @ datadog
[2026-01-12T20:41:44.178Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T20:41:44.397Z] [BOT] ✅ Created forum post: 🏢 Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog in #💻・tech-jobs
[2026-01-12T20:41:44.397Z] [BOT] ✅ Industry: Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog
[2026-01-12T20:41:46.099Z] [BOT] ✅ Created forum post: 🏢 Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog in #🗽・new-york
[2026-01-12T20:41:46.099Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T20:41:47.600Z] [BOT] 💾 Marked as posted: Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog (instance #1)
[2026-01-12T20:41:47.600Z] [BOT] 💾 BEFORE ARCHIVING: 483 jobs in database
[2026-01-12T20:41:47.600Z] [BOT] ✅ No jobs to archive (all 483 jobs within 7-day window)
[2026-01-12T20:41:47.605Z] [BOT] 💾 Saved posted_jobs.json: 483 active jobs
[2026-01-12T20:41:47.605Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:41:47.606Z] [BOT] 📍 [ROUTING] "Manager, People Analytics Data Platform" @ datadog
[2026-01-12T20:41:47.606Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T20:41:47.919Z] [BOT] ✅ Created forum post: 🏢 Manager, People Analytics Data Platform @ datadog in #💻・tech-jobs
[2026-01-12T20:41:47.919Z] [BOT] ✅ Industry: Manager, People Analytics Data Platform @ datadog
[2026-01-12T20:41:49.677Z] [BOT] ✅ Created forum post: 🏢 Manager, People Analytics Data Platform @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T20:41:51.178Z] [BOT] 💾 Marked as posted: Manager, People Analytics Data Platform @ datadog (instance #1)
[2026-01-12T20:41:51.178Z] [BOT] 💾 BEFORE ARCHIVING: 484 jobs in database
[2026-01-12T20:41:51.179Z] [BOT] ✅ No jobs to archive (all 484 jobs within 7-day window)
[2026-01-12T20:41:51.183Z] [BOT] 💾 Saved posted_jobs.json: 484 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:41:54.184Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-12T20:41:54.185Z] [BOT] 📍 [ROUTING] "Manager, Commercial Sales Engineering (AMER - West)" @ datadog
[2026-01-12T20:41:54.185Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:41:54.805Z] [BOT] ✅ Created forum post: 🏢 Manager, Commercial Sales Engineering (AMER - West) @ datadog in #💲・sales-jobs
  ✅ Industry: Manager, Commercial Sales Engineering (AMER - West) @ datadog
[2026-01-12T20:41:56.306Z] [BOT] 💾 Marked as posted: Manager, Commercial Sales Engineering (AMER - West) @ datadog (instance #1)
[2026-01-12T20:41:56.306Z] [BOT] 💾 BEFORE ARCHIVING: 485 jobs in database
[2026-01-12T20:41:56.306Z] [BOT] ✅ No jobs to archive (all 485 jobs within 7-day window)
[2026-01-12T20:41:56.312Z] [BOT] 💾 Saved posted_jobs.json: 485 active jobs
[2026-01-12T20:41:56.312Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:41:56.312Z] [BOT] 📍 [ROUTING] "Manager, Customer Success - Denver" @ datadog
[2026-01-12T20:41:56.312Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:41:56.522Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Success - Denver @ datadog in #💲・sales-jobs
  ✅ Industry: Manager, Customer Success - Denver @ datadog
[2026-01-12T20:41:58.024Z] [BOT] 💾 Marked as posted: Manager, Customer Success - Denver @ datadog (instance #1)
[2026-01-12T20:41:58.024Z] [BOT] 💾 BEFORE ARCHIVING: 486 jobs in database
[2026-01-12T20:41:58.024Z] [BOT] ✅ No jobs to archive (all 486 jobs within 7-day window)
[2026-01-12T20:41:58.029Z] [BOT] 💾 Saved posted_jobs.json: 486 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:41:58.029Z] [BOT] 💾 Marked as posted: Manager, Customer Success - Denver @ datadog (instance #1)
[2026-01-12T20:41:58.030Z] [BOT] 💾 BEFORE ARCHIVING: 487 jobs in database
[2026-01-12T20:41:58.030Z] [BOT] ✅ No jobs to archive (all 487 jobs within 7-day window)
[2026-01-12T20:41:58.035Z] [BOT] 💾 Saved posted_jobs.json: 487 active jobs
[2026-01-12T20:41:58.035Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:42:01.036Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-12T20:42:01.036Z] [BOT] 📍 [ROUTING] "Manager II, Engineering - Bits AI Security Analyst" @ datadog
[2026-01-12T20:42:01.036Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T20:42:01.361Z] [BOT] ✅ Created forum post: 🏢 Manager II, Engineering - Bits AI Security Analyst @ datadog in #🤖・ai-jobs
  ✅ Industry: Manager II, Engineering - Bits AI Security Analyst @ datadog
[2026-01-12T20:42:03.085Z] [BOT] ✅ Created forum post: 🏢 Manager II, Engineering - Bits AI Security Analyst @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T20:42:04.585Z] [BOT] 💾 Marked as posted: Manager II, Engineering - Bits AI Security Analyst @ datadog (instance #1)
[2026-01-12T20:42:04.585Z] [BOT] 💾 BEFORE ARCHIVING: 488 jobs in database
[2026-01-12T20:42:04.585Z] [BOT] ✅ No jobs to archive (all 488 jobs within 7-day window)
[2026-01-12T20:42:04.591Z] [BOT] 💾 Saved posted_jobs.json: 488 active jobs
[2026-01-12T20:42:04.591Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:42:07.592Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-12T20:42:07.592Z] [BOT] 📍 [ROUTING] "Manager, Networking" @ datadog
[2026-01-12T20:42:07.592Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T20:42:07.890Z] [BOT] ✅ Created forum post: 🏢 Manager, Networking @ datadog in #📣・marketing-jobs
  ✅ Industry: Manager, Networking @ datadog
[2026-01-12T20:42:09.558Z] [BOT] ✅ Created forum post: 🏢 Manager, Networking @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T20:42:11.059Z] [BOT] 💾 Marked as posted: Manager, Networking @ datadog (instance #1)
[2026-01-12T20:42:11.059Z] [BOT] 💾 BEFORE ARCHIVING: 489 jobs in database
[2026-01-12T20:42:11.060Z] [BOT] ✅ No jobs to archive (all 489 jobs within 7-day window)
[2026-01-12T20:42:11.064Z] [BOT] 💾 Saved posted_jobs.json: 489 active jobs
[2026-01-12T20:42:11.064Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:42:14.064Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T20:42:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_ad0fd891 (posted within 7 days)
[2026-01-12T20:42:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_d092efb1 (posted within 7 days)
[2026-01-12T20:42:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_e2c56bbd (posted within 7 days)
[2026-01-12T20:42:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_15193999 (posted within 7 days)
⏭️  Skipping duplicate: JID_3ffc39ad (posted within 7 days)
⏭️  Skipping duplicate: JID_8de85186 (posted within 7 days)
[2026-01-12T20:42:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_582fe66a (posted within 7 days)
[2026-01-12T20:42:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_a336abed (posted within 7 days)
[2026-01-12T20:42:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_ace0ebe9 (posted within 7 days)
[2026-01-12T20:42:14.066Z] [BOT] ⏭️  Skipping duplicate: JID_b286e46f (posted within 7 days)
[2026-01-12T20:42:14.194Z] [BOT] ✅ Loaded pending queue: 2657 total (2637 pending, 20 enriched, 0 posted)
[2026-01-12T20:42:14.347Z] [BOT] ✅ Saved pending queue: 2657 total (2637 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T20:42:14.397Z] [BOT] 📂 Loaded 2662 existing routing entries
[2026-01-12T20:42:14.453Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2672
[2026-01-12T20:42:14.453Z] [BOT] Timestamp: 2026-01-12T20:42:14.441Z
[2026-01-12T20:42:14.454Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
[2026-01-12T20:42:14.454Z] [BOT] 1. #🗽・new-york: 7 posts
     2. #💻・tech-jobs: 6 posts
     3. #💲・sales-jobs: 2 posts
     4. #🚌・boston: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-12T20:42:14.454Z] [BOT] [STATS] Channel stats saved
[2026-01-12T20:42:16.479Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2428) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*