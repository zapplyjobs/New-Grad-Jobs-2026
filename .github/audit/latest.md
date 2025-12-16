# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T09:42:51.534Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T09:41:59.454Z] ========================================
[2025-12-16T09:41:59.456Z] Discord Bot Execution Log
[2025-12-16T09:41:59.456Z] Environment: GitHub Actions
[2025-12-16T09:41:59.456Z] Node Version: v20.19.6
[2025-12-16T09:41:59.456Z] ========================================
[2025-12-16T09:41:59.456Z] Environment Variables Check:
[2025-12-16T09:41:59.456Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T09:41:59.456Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T09:41:59.457Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T09:41:59.457Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T09:41:59.457Z] 
Multi-Channel Configuration:
[2025-12-16T09:41:59.457Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T09:41:59.457Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T09:41:59.457Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T09:41:59.457Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T09:41:59.457Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T09:41:59.457Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T09:41:59.457Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T09:41:59.457Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T09:41:59.457Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T09:41:59.457Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T09:41:59.458Z] 
Data Files Check:
[2025-12-16T09:41:59.458Z] .github/data/new_jobs.json: ✅ Exists (10 items, 39841 bytes)
[2025-12-16T09:41:59.460Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 268979 bytes)
[2025-12-16T09:41:59.460Z] 
========================================
[2025-12-16T09:41:59.460Z] Starting Enhanced Discord Bot...
[2025-12-16T09:41:59.460Z] ========================================
[2025-12-16T09:41:59.975Z] [BOT] ✅ Loaded V2 database: 435 jobs
[2025-12-16T09:42:00.699Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T09:42:00.699Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T09:42:00.699Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T09:42:00.702Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T09:42:00.758Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T09:42:00.828Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 196
[2025-12-16T09:42:00.829Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T09:42:00.829Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T09:42:00.830Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T09:42:00.830Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T09:42:00.830Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T09:42:00.834Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2025-12-16T09:42:00.835Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar" @ ORG_438a7d59 State University
[2025-12-16T09:42:00.835Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-16T09:42:00.852Z] [BOT ERROR] (node:2904) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T09:42:01.043Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar @ ORG_438a7d59 State University in #📣・marketing-jobs
[2025-12-16T09:42:01.043Z] [BOT] ✅ Industry: Postdoctoral Scholar @ ORG_438a7d59 State University
[2025-12-16T09:42:02.750Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar @ ORG_438a7d59 State University in #💻・remote-usa
[2025-12-16T09:42:02.750Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T09:42:04.250Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar @ ORG_438a7d59 State University (instance #1)
[2025-12-16T09:42:04.250Z] [BOT] 💾 BEFORE ARCHIVING: 436 jobs in database
[2025-12-16T09:42:04.251Z] [BOT] ✅ No jobs to archive (all 436 jobs within 7-day window)
[2025-12-16T09:42:04.258Z] [BOT] 💾 Saved posted_jobs.json: 436 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T09:42:04.259Z] [BOT] 📍 [ROUTING] "Asset and Wealth Management Analyst" @ ORG_d49bddaa Sachs
[2025-12-16T09:42:04.259Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-16T09:42:04.505Z] [BOT] ✅ Created forum post: 🏢 Asset and Wealth Management Analyst @ ORG_d49bddaa Sachs in #📣・marketing-jobs
[2025-12-16T09:42:04.505Z] [BOT] ✅ Industry: Asset and Wealth Management Analyst @ ORG_d49bddaa Sachs
[2025-12-16T09:42:06.215Z] [BOT] ✅ Created forum post: 🏢 Asset and Wealth Management Analyst @ ORG_d49bddaa Sachs in #💻・remote-usa
[2025-12-16T09:42:06.215Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T09:42:07.717Z] [BOT] 💾 Marked as posted: Asset and Wealth Management Analyst @ ORG_d49bddaa Sachs (instance #1)
[2025-12-16T09:42:07.717Z] [BOT] 💾 BEFORE ARCHIVING: 437 jobs in database
[2025-12-16T09:42:07.717Z] [BOT] ✅ No jobs to archive (all 437 jobs within 7-day window)
[2025-12-16T09:42:07.721Z] [BOT] 💾 Saved posted_jobs.json: 437 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T09:42:10.722Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-16T09:42:10.723Z] [BOT] 📍 [ROUTING] "Web Software Engineer - Commerce Engineering" @ ORG_bfe7eb5a
[2025-12-16T09:42:10.723Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:42:10.932Z] [BOT] ✅ Created forum post: 🏢 Web Software Engineer - Commerce Engineering @ ORG_bfe7eb5a in #💻・tech-jobs
[2025-12-16T09:42:10.932Z] [BOT] ✅ Industry: Web Software Engineer - Commerce Engineering @ ORG_bfe7eb5a
[2025-12-16T09:42:12.611Z] [BOT] ✅ Created forum post: 🏢 Web Software Engineer - Commerce Engineering @ ORG_bfe7eb5a in #🌉・san-francisco
[2025-12-16T09:42:12.612Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T09:42:14.113Z] [BOT] 💾 Marked as posted: Web Software Engineer - Commerce Engineering @ ORG_bfe7eb5a (instance #1)
[2025-12-16T09:42:14.113Z] [BOT] 💾 BEFORE ARCHIVING: 438 jobs in database
[2025-12-16T09:42:14.113Z] [BOT] ✅ No jobs to archive (all 438 jobs within 7-day window)
[2025-12-16T09:42:14.118Z] [BOT] 💾 Saved posted_jobs.json: 438 active jobs
[2025-12-16T09:42:14.118Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:42:14.119Z] [BOT] 📍 [ROUTING] "Entry-Level C++ Software Engineer" @ ORG_096a7f3dine Trading
[2025-12-16T09:42:14.119Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:42:14.303Z] [BOT] ✅ Created forum post: 🏢 Entry-Level C++ Software Engineer @ ORG_096a7f3dine Trading in #💻・tech-jobs
[2025-12-16T09:42:14.303Z] [BOT] ✅ Industry: Entry-Level C++ Software Engineer @ ORG_096a7f3dine Trading
[2025-12-16T09:42:16.125Z] [BOT] ✅ Created forum post: 🏢 Entry-Level C++ Software Engineer @ ORG_096a7f3dine Trading in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T09:42:17.627Z] [BOT] 💾 Marked as posted: Entry-Level C++ Software Engineer @ ORG_096a7f3dine Trading (instance #1)
[2025-12-16T09:42:17.627Z] [BOT] 💾 BEFORE ARCHIVING: 439 jobs in database
[2025-12-16T09:42:17.628Z] [BOT] ✅ No jobs to archive (all 439 jobs within 7-day window)
[2025-12-16T09:42:17.632Z] [BOT] 💾 Saved posted_jobs.json: 439 active jobs
[2025-12-16T09:42:17.632Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:42:20.633Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2025-12-16T09:42:20.633Z] [BOT] 📍 [ROUTING] "Lilt Cantonese AI Content Experts" @ ORG_3cba2ebe
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T09:42:20.634Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T09:42:20.975Z] [BOT] ✅ Created forum post: 🏢 Lilt Cantonese AI Content Experts @ ORG_3cba2ebe in #🤖・ai-jobs
  ✅ Industry: Lilt Cantonese AI Content Experts @ ORG_3cba2ebe
[2025-12-16T09:42:22.831Z] [BOT] ✅ Created forum post: 🏢 Lilt Cantonese AI Content Experts @ ORG_3cba2ebe in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T09:42:24.332Z] [BOT] 💾 Marked as posted: Lilt Cantonese AI Content Experts @ ORG_3cba2ebe (instance #1)
[2025-12-16T09:42:24.332Z] [BOT] 💾 BEFORE ARCHIVING: 440 jobs in database
[2025-12-16T09:42:24.332Z] [BOT] ✅ No jobs to archive (all 440 jobs within 7-day window)
[2025-12-16T09:42:24.337Z] [BOT] 💾 Saved posted_jobs.json: 440 active jobs
[2025-12-16T09:42:24.337Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:42:24.337Z] [BOT] 📍 [ROUTING] "Lilt Cantonese Linguists for AI Projects" @ ORG_3cba2ebe
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T09:42:24.338Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T09:42:24.550Z] [BOT] ✅ Created forum post: 🏢 Lilt Cantonese Linguists for AI Projects @ ORG_3cba2ebe in #🤖・ai-jobs
  ✅ Industry: Lilt Cantonese Linguists for AI Projects @ ORG_3cba2ebe
[2025-12-16T09:42:26.475Z] [BOT] ✅ Created forum post: 🏢 Lilt Cantonese Linguists for AI Projects @ ORG_3cba2ebe in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T09:42:27.977Z] [BOT] 💾 Marked as posted: Lilt Cantonese Linguists for AI Projects @ ORG_3cba2ebe (instance #1)
[2025-12-16T09:42:27.977Z] [BOT] 💾 BEFORE ARCHIVING: 441 jobs in database
[2025-12-16T09:42:27.978Z] [BOT] ✅ No jobs to archive (all 441 jobs within 7-day window)
[2025-12-16T09:42:27.983Z] [BOT] 💾 Saved posted_jobs.json: 441 active jobs
[2025-12-16T09:42:27.983Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:42:27.983Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Researcher" @ ORG_9505081b Trading
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T09:42:28.194Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Researcher @ ORG_9505081b Trading in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Researcher @ ORG_9505081b Trading
[2025-12-16T09:42:30.021Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Researcher @ ORG_9505081b Trading in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T09:42:31.522Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Researcher @ ORG_9505081b Trading (instance #1)
[2025-12-16T09:42:31.522Z] [BOT] 💾 BEFORE ARCHIVING: 442 jobs in database
[2025-12-16T09:42:31.523Z] [BOT] ✅ No jobs to archive (all 442 jobs within 7-day window)
[2025-12-16T09:42:31.528Z] [BOT] 💾 Saved posted_jobs.json: 442 active jobs
[2025-12-16T09:42:31.528Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:42:31.528Z] [BOT] 📍 [ROUTING] "Associate Image Processing Engineer" @ L3Harris Technologies
[2025-12-16T09:42:31.529Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T09:42:31.738Z] [BOT] ✅ Created forum post: 🏢 Associate Image Processing Engineer @ L3Harris Technologies in #🤖・ai-jobs
  ✅ Industry: Associate Image Processing Engineer @ L3Harris Technologies
[2025-12-16T09:42:33.520Z] [BOT] ✅ Created forum post: 🏢 Associate Image Processing Engineer @ L3Harris Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T09:42:35.022Z] [BOT] 💾 Marked as posted: Associate Image Processing Engineer @ L3Harris Technologies (instance #1)
[2025-12-16T09:42:35.022Z] [BOT] 💾 BEFORE ARCHIVING: 443 jobs in database
[2025-12-16T09:42:35.022Z] [BOT] ✅ No jobs to archive (all 443 jobs within 7-day window)
[2025-12-16T09:42:35.027Z] [BOT] 💾 Saved posted_jobs.json: 443 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T09:42:35.027Z] [BOT] 📍 [ROUTING] "R&D Software Engineer" @ ORG_64dba1b4
   Category: AI (matched: "machine learning")
[2025-12-16T09:42:35.027Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T09:42:35.279Z] [BOT] ✅ Created forum post: 🏢 R&D Software Engineer @ ORG_64dba1b4 in #🤖・ai-jobs
  ✅ Industry: R&D Software Engineer @ ORG_64dba1b4
[2025-12-16T09:42:37.092Z] [BOT] ✅ Created forum post: 🏢 R&D Software Engineer @ ORG_64dba1b4 in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-16T09:42:38.593Z] [BOT] 💾 Marked as posted: R&D Software Engineer @ ORG_64dba1b4 (instance #1)
[2025-12-16T09:42:38.593Z] [BOT] 💾 BEFORE ARCHIVING: 444 jobs in database
[2025-12-16T09:42:38.593Z] [BOT] ✅ No jobs to archive (all 444 jobs within 7-day window)
[2025-12-16T09:42:38.598Z] [BOT] 💾 Saved posted_jobs.json: 444 active jobs
[2025-12-16T09:42:38.598Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:42:41.599Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-16T09:42:41.600Z] [BOT] 📍 [ROUTING] "Geologist" @ ORG_f53e9086
   Category: FINANCE (matched: "investment")
[2025-12-16T09:42:41.600Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2025-12-16T09:42:41.851Z] [BOT] ✅ Created forum post: 🏢 Geologist @ ORG_f53e9086 in #💰・finance-jobs
[2025-12-16T09:42:41.852Z] [BOT] ✅ Industry: Geologist @ ORG_f53e9086
[2025-12-16T09:42:43.635Z] [BOT] ✅ Created forum post: 🏢 Geologist @ ORG_f53e9086 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-16T09:42:45.136Z] [BOT] 💾 Marked as posted: Geologist @ ORG_f53e9086 (instance #1)
[2025-12-16T09:42:45.136Z] [BOT] 💾 BEFORE ARCHIVING: 445 jobs in database
[2025-12-16T09:42:45.136Z] [BOT] ✅ No jobs to archive (all 445 jobs within 7-day window)
[2025-12-16T09:42:45.141Z] [BOT] 💾 Saved posted_jobs.json: 445 active jobs
[2025-12-16T09:42:45.141Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:42:48.141Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T09:42:48.142Z] [BOT] ⏭️  Skipping duplicate: JID_b59780e1-scholar_r139161-1 (posted within 7 days)
[2025-12-16T09:42:48.142Z] [BOT] ⏭️  Skipping duplicate: JID_18a10bca (posted within 7 days)
[2025-12-16T09:42:48.142Z] [BOT] ⏭️  Skipping duplicate: JID_f942855b (posted within 7 days)
[2025-12-16T09:42:48.142Z] [BOT] ⏭️  Skipping duplicate: JID_b8ff9d42 (posted within 7 days)
⏭️  Skipping duplicate: JID_b285be64 (posted within 7 days)
[2025-12-16T09:42:48.142Z] [BOT] ⏭️  Skipping duplicate: JID_bd69bf03 (posted within 7 days)
[2025-12-16T09:42:48.142Z] [BOT] ⏭️  Skipping duplicate: JID_9818bc64-hilcorp_energy_company-JID_69f18b1c-geologist_r004690 (posted within 7 days)
[2025-12-16T09:42:48.142Z] [BOT] ⏭️  Skipping duplicate: JID_404029d3 (posted within 7 days)
[2025-12-16T09:42:48.142Z] [BOT] ⏭️  Skipping duplicate: JID_fd5bc9ee (posted within 7 days)
[2025-12-16T09:42:48.142Z] [BOT] ⏭️  Skipping duplicate: JID_6e3a4ccc-engineer_r123231 (posted within 7 days)
[2025-12-16T09:42:48.146Z] [BOT] ✅ Loaded pending queue: 448 total (428 pending, 20 enriched, 0 posted)
[2025-12-16T09:42:48.153Z] [BOT] ✅ Saved pending queue: 448 total (428 pending, 10 enriched, 10 posted)
[2025-12-16T09:42:48.153Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T09:42:48.192Z] [BOT] 📂 Loaded 420 existing routing entries
[2025-12-16T09:42:48.231Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 430
   Timestamp: 2025-12-16T09:42:48.229Z
[2025-12-16T09:42:48.232Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T09:42:48.232Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T09:42:50.244Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2904) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*