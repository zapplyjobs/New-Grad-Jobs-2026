# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T08:05:00.059Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T08:04:15.021Z] ========================================
[2025-12-16T08:04:15.023Z] Discord Bot Execution Log
[2025-12-16T08:04:15.023Z] Environment: GitHub Actions
[2025-12-16T08:04:15.023Z] Node Version: v20.19.6
[2025-12-16T08:04:15.024Z] ========================================
[2025-12-16T08:04:15.024Z] Environment Variables Check:
[2025-12-16T08:04:15.024Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T08:04:15.024Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T08:04:15.024Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T08:04:15.024Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T08:04:15.024Z] 
Multi-Channel Configuration:
[2025-12-16T08:04:15.024Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T08:04:15.024Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T08:04:15.024Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T08:04:15.024Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T08:04:15.024Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T08:04:15.024Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T08:04:15.025Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T08:04:15.025Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T08:04:15.025Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T08:04:15.025Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T08:04:15.025Z] 
Data Files Check:
[2025-12-16T08:04:15.025Z] .github/data/new_jobs.json: ✅ Exists (10 items, 6853 bytes)
[2025-12-16T08:04:15.027Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 232886 bytes)
[2025-12-16T08:04:15.027Z] 
========================================
[2025-12-16T08:04:15.027Z] Starting Enhanced Discord Bot...
[2025-12-16T08:04:15.027Z] ========================================
[2025-12-16T08:04:15.532Z] [BOT] ✅ Loaded V2 database: 375 jobs
[2025-12-16T08:04:16.185Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T08:04:16.185Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T08:04:16.185Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T08:04:16.186Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T08:04:16.242Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T08:04:16.306Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 198
[2025-12-16T08:04:16.308Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T08:04:16.308Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T08:04:16.309Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T08:04:16.309Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T08:04:16.309Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T08:04:16.314Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2025-12-16T08:04:16.314Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS" @ ORG_1bb6fcfb
[2025-12-16T08:04:16.314Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:04:16.331Z] [BOT ERROR] (node:2340) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T08:04:16.509Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-16T08:04:16.509Z] [BOT] ✅ Industry: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS @ ORG_1bb6fcfb
[2025-12-16T08:04:18.279Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-16T08:04:18.279Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T08:04:19.779Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS @ ORG_1bb6fcfb (instance #1)
[2025-12-16T08:04:19.780Z] [BOT] 💾 BEFORE ARCHIVING: 376 jobs in database
[2025-12-16T08:04:19.780Z] [BOT] ✅ No jobs to archive (all 376 jobs within 7-day window)
[2025-12-16T08:04:19.788Z] [BOT] 💾 Saved posted_jobs.json: 376 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:04:19.788Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Quality and Efficiency Technology" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:04:19.943Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Quality and Efficiency Technology @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-16T08:04:19.943Z] [BOT] ✅ Industry: Software Engineer Graduate - Quality and Efficiency Technology @ ORG_1bb6fcfb
[2025-12-16T08:04:21.635Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Quality and Efficiency Technology @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-16T08:04:21.635Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T08:04:23.137Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Quality and Efficiency Technology @ ORG_1bb6fcfb (instance #1)
[2025-12-16T08:04:23.137Z] [BOT] 💾 BEFORE ARCHIVING: 377 jobs in database
[2025-12-16T08:04:23.137Z] [BOT] ✅ No jobs to archive (all 377 jobs within 7-day window)
[2025-12-16T08:04:23.141Z] [BOT] 💾 Saved posted_jobs.json: 377 active jobs
[2025-12-16T08:04:23.141Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:04:23.142Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate Online Architecture-2026 Start - PhD" @ ORG_1bb6fcfb
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:04:23.399Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate Online Architecture-2026 Start - PhD @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Research Engineer Graduate Online Architecture-2026 Start - PhD @ ORG_1bb6fcfb
[2025-12-16T08:04:25.201Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate Online Architecture-2026 Start - PhD @ ORG_1bb6fcfb in #🌧️・seattle
[2025-12-16T08:04:25.201Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-16T08:04:26.701Z] [BOT] 💾 Marked as posted: Research Engineer Graduate Online Architecture-2026 Start - PhD @ ORG_1bb6fcfb (instance #1)
[2025-12-16T08:04:26.702Z] [BOT] 💾 BEFORE ARCHIVING: 378 jobs in database
[2025-12-16T08:04:26.702Z] [BOT] ✅ No jobs to archive (all 378 jobs within 7-day window)
[2025-12-16T08:04:26.706Z] [BOT] 💾 Saved posted_jobs.json: 378 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:04:26.708Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Monetization Technology - Tiktok Ads Creator Monetization" @ ORG_1bb6fcfb
[2025-12-16T08:04:26.708Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:04:27.071Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Monetization Technology - Tiktok Ads Creator Monetization @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Monetization Technology - Tiktok Ads Creator Monetization @ ORG_1bb6fcfb
[2025-12-16T08:04:28.784Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Monetization Technology - Tiktok Ads Creator Monetization @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T08:04:30.284Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Monetization Technology - Tiktok Ads Creator Monetization @ ORG_1bb6fcfb (instance #1)
[2025-12-16T08:04:30.284Z] [BOT] 💾 BEFORE ARCHIVING: 379 jobs in database
[2025-12-16T08:04:30.285Z] [BOT] ✅ No jobs to archive (all 379 jobs within 7-day window)
[2025-12-16T08:04:30.289Z] [BOT] 💾 Saved posted_jobs.json: 379 active jobs
[2025-12-16T08:04:30.289Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:04:30.289Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer - Global CRM Platform" @ ORG_1bb6fcfb
[2025-12-16T08:04:30.289Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:04:30.461Z] [BOT] ✅ Created forum post: 🏢 Frontend Software Engineer - Global CRM Platform @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Frontend Software Engineer - Global CRM Platform @ ORG_1bb6fcfb
[2025-12-16T08:04:32.138Z] [BOT] ✅ Created forum post: 🏢 Frontend Software Engineer - Global CRM Platform @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T08:04:33.639Z] [BOT] 💾 Marked as posted: Frontend Software Engineer - Global CRM Platform @ ORG_1bb6fcfb (instance #1)
[2025-12-16T08:04:33.639Z] [BOT] 💾 BEFORE ARCHIVING: 380 jobs in database
[2025-12-16T08:04:33.639Z] [BOT] ✅ No jobs to archive (all 380 jobs within 7-day window)
[2025-12-16T08:04:33.644Z] [BOT] 💾 Saved posted_jobs.json: 380 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:04:33.645Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Ads Infrastructure Ranking" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:04:33.935Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Ads Infrastructure Ranking @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-16T08:04:33.935Z] [BOT] ✅ Industry: Graduate Software Engineer - Ads Infrastructure Ranking @ ORG_1bb6fcfb
[2025-12-16T08:04:35.615Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Ads Infrastructure Ranking @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T08:04:37.116Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Ads Infrastructure Ranking @ ORG_1bb6fcfb (instance #1)
[2025-12-16T08:04:37.116Z] [BOT] 💾 BEFORE ARCHIVING: 381 jobs in database
[2025-12-16T08:04:37.117Z] [BOT] ✅ No jobs to archive (all 381 jobs within 7-day window)
[2025-12-16T08:04:37.121Z] [BOT] 💾 Saved posted_jobs.json: 381 active jobs
[2025-12-16T08:04:37.121Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:04:37.121Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Global SRE - 2026 Start" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:04:37.459Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Global SRE - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Global SRE - 2026 Start @ ORG_1bb6fcfb
[2025-12-16T08:04:39.172Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Global SRE - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T08:04:40.673Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Global SRE - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-16T08:04:40.673Z] [BOT] 💾 BEFORE ARCHIVING: 382 jobs in database
[2025-12-16T08:04:40.673Z] [BOT] ✅ No jobs to archive (all 382 jobs within 7-day window)
[2025-12-16T08:04:40.678Z] [BOT] 💾 Saved posted_jobs.json: 382 active jobs
[2025-12-16T08:04:40.678Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:04:40.678Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)" @ ORG_08c9a13c
[2025-12-16T08:04:40.678Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:04:40.868Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ORG_08c9a13c in #💻・tech-jobs
[2025-12-16T08:04:40.868Z] [BOT] ✅ Industry: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ORG_08c9a13c
[2025-12-16T08:04:42.532Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-16T08:04:42.532Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T08:04:44.033Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ORG_08c9a13c (instance #1)
[2025-12-16T08:04:44.034Z] [BOT] 💾 BEFORE ARCHIVING: 383 jobs in database
[2025-12-16T08:04:44.034Z] [BOT] ✅ No jobs to archive (all 383 jobs within 7-day window)
[2025-12-16T08:04:44.038Z] [BOT] 💾 Saved posted_jobs.json: 383 active jobs
[2025-12-16T08:04:44.038Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:04:44.038Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate - Capcut - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:04:44.288Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate - Capcut - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer Graduate - Capcut - 2026 Start @ ORG_08c9a13c
[2025-12-16T08:04:45.958Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate - Capcut - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-16T08:04:45.958Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T08:04:47.459Z] [BOT] 💾 Marked as posted: Backend Software Engineer Graduate - Capcut - 2026 Start @ ORG_08c9a13c (instance #1)
[2025-12-16T08:04:47.460Z] [BOT] 💾 BEFORE ARCHIVING: 384 jobs in database
[2025-12-16T08:04:47.460Z] [BOT] ✅ No jobs to archive (all 384 jobs within 7-day window)
[2025-12-16T08:04:47.465Z] [BOT] 💾 Saved posted_jobs.json: 384 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:04:50.465Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-16T08:04:50.465Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist Generative AI - Intelligent Creation" @ ORG_1bb6fcfb
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T08:04:50.851Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist Generative AI - Intelligent Creation @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Research Scientist Generative AI - Intelligent Creation @ ORG_1bb6fcfb
[2025-12-16T08:04:52.657Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist Generative AI - Intelligent Creation @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T08:04:54.158Z] [BOT] 💾 Marked as posted: Graduate Research Scientist Generative AI - Intelligent Creation @ ORG_1bb6fcfb (instance #1)
[2025-12-16T08:04:54.159Z] [BOT] 💾 BEFORE ARCHIVING: 385 jobs in database
[2025-12-16T08:04:54.159Z] [BOT] ✅ No jobs to archive (all 385 jobs within 7-day window)
[2025-12-16T08:04:54.164Z] [BOT] 💾 Saved posted_jobs.json: 385 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:04:57.165Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T08:04:57.166Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_088e76f1 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_6c68685a (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_75a24adf (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_6a40454b (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_11d3f9d6 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_7969274b (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_2667a390 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_b25229b4 (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_f529a541-detail (posted within 7 days)
[2025-12-16T08:04:57.166Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_3fcb955b-detail (posted within 7 days)
[2025-12-16T08:04:57.168Z] [BOT] ✅ Loaded pending queue: 508 total (488 pending, 20 enriched, 0 posted)
[2025-12-16T08:04:57.176Z] [BOT] ✅ Saved pending queue: 508 total (488 pending, 10 enriched, 10 posted)
[2025-12-16T08:04:57.176Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T08:04:57.216Z] [BOT] 📂 Loaded 362 existing routing entries
[2025-12-16T08:04:57.255Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 372
[2025-12-16T08:04:57.255Z] [BOT] Timestamp: 2025-12-16T08:04:57.253Z
[2025-12-16T08:04:57.256Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T08:04:57.256Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T08:04:59.269Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2340) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*