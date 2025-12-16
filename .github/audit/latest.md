# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T07:24:31.793Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T07:23:43.327Z] ========================================
[2025-12-16T07:23:43.329Z] Discord Bot Execution Log
[2025-12-16T07:23:43.329Z] Environment: GitHub Actions
[2025-12-16T07:23:43.329Z] Node Version: v20.19.6
[2025-12-16T07:23:43.329Z] ========================================
[2025-12-16T07:23:43.329Z] Environment Variables Check:
[2025-12-16T07:23:43.329Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T07:23:43.329Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T07:23:43.329Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T07:23:43.329Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T07:23:43.329Z] 
Multi-Channel Configuration:
[2025-12-16T07:23:43.329Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T07:23:43.330Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T07:23:43.330Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T07:23:43.330Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T07:23:43.330Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T07:23:43.330Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T07:23:43.330Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T07:23:43.330Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T07:23:43.330Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T07:23:43.330Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T07:23:43.330Z] 
Data Files Check:
[2025-12-16T07:23:43.331Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7601 bytes)
[2025-12-16T07:23:43.332Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 216744 bytes)
[2025-12-16T07:23:43.332Z] 
========================================
[2025-12-16T07:23:43.332Z] Starting Enhanced Discord Bot...
[2025-12-16T07:23:43.332Z] ========================================
[2025-12-16T07:23:43.842Z] [BOT] ✅ Loaded V2 database: 345 jobs
[2025-12-16T07:23:44.347Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T07:23:44.348Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T07:23:44.348Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T07:23:44.348Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T07:23:44.406Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T07:23:44.477Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T07:23:44.479Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T07:23:44.479Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T07:23:44.480Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T07:23:44.480Z] [BOT] 📤 Posting 10 jobs...
[2025-12-16T07:23:44.480Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T07:23:44.482Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-16T07:23:44.483Z] [BOT] 📍 [ROUTING] "Research Scientist - Seed Infra Machine Learning Systems" @ ORG_08c9a13c
[2025-12-16T07:23:44.484Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:23:44.500Z] [BOT ERROR] (node:2547) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T07:23:44.639Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Seed Infra Machine Learning Systems @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T07:23:44.639Z] [BOT] ✅ Industry: Research Scientist - Seed Infra Machine Learning Systems @ ORG_08c9a13c
[2025-12-16T07:23:46.772Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Seed Infra Machine Learning Systems @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-16T07:23:46.772Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T07:23:48.272Z] [BOT] 💾 Marked as posted: Research Scientist - Seed Infra Machine Learning Systems @ ORG_08c9a13c (instance #1)
[2025-12-16T07:23:48.273Z] [BOT] 💾 BEFORE ARCHIVING: 346 jobs in database
[2025-12-16T07:23:48.273Z] [BOT] ✅ No jobs to archive (all 346 jobs within 7-day window)
[2025-12-16T07:23:48.280Z] [BOT] 💾 Saved posted_jobs.json: 346 active jobs
[2025-12-16T07:23:48.280Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:23:48.281Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP" @ ORG_08c9a13c
[2025-12-16T07:23:48.281Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:23:48.398Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T07:23:48.399Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c
[2025-12-16T07:23:50.048Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T07:23:51.549Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c (instance #1)
[2025-12-16T07:23:51.549Z] [BOT] 💾 BEFORE ARCHIVING: 347 jobs in database
[2025-12-16T07:23:51.549Z] [BOT] ✅ No jobs to archive (all 347 jobs within 7-day window)
[2025-12-16T07:23:51.553Z] [BOT] 💾 Saved posted_jobs.json: 347 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:23:51.553Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2025-12-16T07:23:51.553Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:23:51.880Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T07:23:51.881Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c
[2025-12-16T07:23:53.544Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T07:23:55.044Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c (instance #1)
[2025-12-16T07:23:55.044Z] [BOT] 💾 BEFORE ARCHIVING: 348 jobs in database
[2025-12-16T07:23:55.044Z] [BOT] ✅ No jobs to archive (all 348 jobs within 7-day window)
[2025-12-16T07:23:55.049Z] [BOT] 💾 Saved posted_jobs.json: 348 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:23:55.049Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Conversational AI" @ ORG_08c9a13c
[2025-12-16T07:23:55.049Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:23:55.179Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c
[2025-12-16T07:23:57.010Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:23:58.510Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c (instance #1)
[2025-12-16T07:23:58.511Z] [BOT] 💾 BEFORE ARCHIVING: 349 jobs in database
[2025-12-16T07:23:58.511Z] [BOT] ✅ No jobs to archive (all 349 jobs within 7-day window)
[2025-12-16T07:23:58.514Z] [BOT] 💾 Saved posted_jobs.json: 349 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:24:01.514Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-16T07:24:01.516Z] [BOT] 📍 [ROUTING] "Software Engineer - Agents" @ ORG_af294da6 AI
[2025-12-16T07:24:01.516Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:24:02.065Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Agents @ ORG_af294da6 AI in #💻・tech-jobs
[2025-12-16T07:24:02.065Z] [BOT] ✅ Industry: Software Engineer - Agents @ ORG_af294da6 AI
[2025-12-16T07:24:03.721Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Agents @ ORG_af294da6 AI in #🗽・new-york
[2025-12-16T07:24:03.722Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-16T07:24:05.222Z] [BOT] 💾 Marked as posted: Software Engineer - Agents @ ORG_af294da6 AI (instance #1)
[2025-12-16T07:24:05.222Z] [BOT] 💾 BEFORE ARCHIVING: 350 jobs in database
[2025-12-16T07:24:05.222Z] [BOT] ✅ No jobs to archive (all 350 jobs within 7-day window)
[2025-12-16T07:24:05.227Z] [BOT] 💾 Saved posted_jobs.json: 350 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:24:05.227Z] [BOT] 📍 [ROUTING] "3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd" @ ORG_08c9a13c
[2025-12-16T07:24:05.227Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:24:05.475Z] [BOT] ✅ Created forum post: 🏢 3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd @ ORG_08c9a13c in #💻・tech-jobs
[2025-12-16T07:24:05.475Z] [BOT] ✅ Industry: 3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd @ ORG_08c9a13c
[2025-12-16T07:24:07.187Z] [BOT] ✅ Created forum post: 🏢 3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:24:08.687Z] [BOT] 💾 Marked as posted: 3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd @ ORG_08c9a13c (instance #1)
[2025-12-16T07:24:08.688Z] [BOT] 💾 BEFORE ARCHIVING: 351 jobs in database
[2025-12-16T07:24:08.688Z] [BOT] ✅ No jobs to archive (all 351 jobs within 7-day window)
[2025-12-16T07:24:08.692Z] [BOT] 💾 Saved posted_jobs.json: 351 active jobs
[2025-12-16T07:24:08.692Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:24:08.692Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Global Site Reliability Engineer" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:24:09.024Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Global Site Reliability Engineer @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer - Global Site Reliability Engineer @ ORG_1bb6fcfb
[2025-12-16T07:24:10.714Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Global Site Reliability Engineer @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:24:12.214Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Global Site Reliability Engineer @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:24:12.215Z] [BOT] 💾 BEFORE ARCHIVING: 352 jobs in database
[2025-12-16T07:24:12.215Z] [BOT] ✅ No jobs to archive (all 352 jobs within 7-day window)
[2025-12-16T07:24:12.219Z] [BOT] 💾 Saved posted_jobs.json: 352 active jobs
[2025-12-16T07:24:12.220Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:24:12.220Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:24:12.742Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-16T07:24:12.742Z] [BOT] ✅ Industry: Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS @ ORG_1bb6fcfb
[2025-12-16T07:24:14.550Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-16T07:24:14.550Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T07:24:16.050Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:24:16.051Z] [BOT] 💾 BEFORE ARCHIVING: 353 jobs in database
[2025-12-16T07:24:16.051Z] [BOT] ✅ No jobs to archive (all 353 jobs within 7-day window)
[2025-12-16T07:24:16.055Z] [BOT] 💾 Saved posted_jobs.json: 353 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:24:16.056Z] [BOT] 📍 [ROUTING] "Model Development Engineer - Global Future Leaders Program 2026" @ ORG_acec4064
[2025-12-16T07:24:16.056Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:24:16.375Z] [BOT] ✅ Created forum post: 🏢 Model Development Engineer - Global Future Leaders Program 2026 @ ORG_acec4064 in #💻・tech-jobs
[2025-12-16T07:24:16.375Z] [BOT] ✅ Industry: Model Development Engineer - Global Future Leaders Program 2026 @ ORG_acec4064
[2025-12-16T07:24:18.238Z] [BOT] ✅ Created forum post: 🏢 Model Development Engineer - Global Future Leaders Program 2026 @ ORG_acec4064 in #💻・remote-usa
[2025-12-16T07:24:18.238Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T07:24:19.738Z] [BOT] 💾 Marked as posted: Model Development Engineer - Global Future Leaders Program 2026 @ ORG_acec4064 (instance #1)
[2025-12-16T07:24:19.738Z] [BOT] 💾 BEFORE ARCHIVING: 354 jobs in database
[2025-12-16T07:24:19.739Z] [BOT] ✅ No jobs to archive (all 354 jobs within 7-day window)
[2025-12-16T07:24:19.743Z] [BOT] 💾 Saved posted_jobs.json: 354 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:24:22.744Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T07:24:22.744Z] [BOT] 📍 [ROUTING] "Data Scientist - TikTok Ads" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T07:24:22.918Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - TikTok Ads @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Scientist - TikTok Ads @ ORG_1bb6fcfb
[2025-12-16T07:24:24.582Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - TikTok Ads @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:24:26.084Z] [BOT] 💾 Marked as posted: Data Scientist - TikTok Ads @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:24:26.084Z] [BOT] 💾 BEFORE ARCHIVING: 355 jobs in database
[2025-12-16T07:24:26.085Z] [BOT] ✅ No jobs to archive (all 355 jobs within 7-day window)
[2025-12-16T07:24:26.088Z] [BOT] 💾 Saved posted_jobs.json: 355 active jobs
[2025-12-16T07:24:26.088Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:24:29.089Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T07:24:29.089Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_6f71abaf-detail (posted within 7 days)
[2025-12-16T07:24:29.090Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2d5eb380-detail (posted within 7 days)
[2025-12-16T07:24:29.090Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_852fbee9-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_a6e4719b (posted within 7 days)
[2025-12-16T07:24:29.090Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_7a8774a4 (posted within 7 days)
[2025-12-16T07:24:29.090Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_5729a83b-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_510ed91e-detail (posted within 7 days)
[2025-12-16T07:24:29.090Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_0124a43b (posted within 7 days)
[2025-12-16T07:24:29.090Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_7939bf4b (posted within 7 days)
[2025-12-16T07:24:29.090Z] [BOT] ⏭️  Skipping duplicate: JID_c2156082-en_us-JID_f9e0abc6 (posted within 7 days)
[2025-12-16T07:24:29.093Z] [BOT] ✅ Loaded pending queue: 533 total (513 pending, 20 enriched, 0 posted)
[2025-12-16T07:24:29.100Z] [BOT] ✅ Saved pending queue: 533 total (513 pending, 10 enriched, 10 posted)
[2025-12-16T07:24:29.101Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T07:24:29.141Z] [BOT] 📂 Loaded 333 existing routing entries
[2025-12-16T07:24:29.181Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 343
   Timestamp: 2025-12-16T07:24:29.179Z
[2025-12-16T07:24:29.182Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
   Total attempts: 20
[2025-12-16T07:24:29.182Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T07:24:31.193Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2547) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*