# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T05:14:04.496Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T05:13:12.442Z] ========================================
[2026-01-14T05:13:12.444Z] Discord Bot Execution Log
[2026-01-14T05:13:12.444Z] Environment: GitHub Actions
[2026-01-14T05:13:12.444Z] Node Version: v20.19.6
[2026-01-14T05:13:12.445Z] ========================================
[2026-01-14T05:13:12.445Z] Environment Variables Check:
[2026-01-14T05:13:12.445Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T05:13:12.445Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T05:13:12.445Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T05:13:12.445Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T05:13:12.445Z] 
Multi-Channel Configuration:
[2026-01-14T05:13:12.445Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T05:13:12.445Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T05:13:12.445Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T05:13:12.446Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T05:13:12.446Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T05:13:12.446Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T05:13:12.446Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T05:13:12.446Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T05:13:12.446Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T05:13:12.446Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T05:13:12.446Z] 
Data Files Check:
[2026-01-14T05:13:12.447Z] .github/data/new_jobs.json: ✅ Exists (10 items, 146704 bytes)
[2026-01-14T05:13:12.452Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 634707 bytes)
[2026-01-14T05:13:12.452Z] 
========================================
[2026-01-14T05:13:12.452Z] Starting Enhanced Discord Bot...
[2026-01-14T05:13:12.452Z] ========================================
[2026-01-14T05:13:12.970Z] [BOT] ✅ Loaded V2 database: 1205 jobs
[2026-01-14T05:13:13.501Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T05:13:13.501Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T05:13:13.501Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T05:13:13.608Z] [BOT] ✅ Loaded pending queue: 2738 total (2718 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Policy Communications Manager at anthropic
[2026-01-14T05:13:13.611Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T05:13:13.612Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T05:13:13.612Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T05:13:13.613Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T05:13:13.613Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T05:13:13.618Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-14T05:13:13.618Z] [BOT] 📍 [ROUTING] "Policy Communications Manager" @ anthropic
[2026-01-14T05:13:13.619Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T05:13:13.636Z] [BOT ERROR] (node:3268) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T05:13:13.821Z] [BOT] ✅ Created forum post: 🏢 Policy Communications Manager @ anthropic in #💲・sales-jobs
[2026-01-14T05:13:13.821Z] [BOT] ✅ Industry: Policy Communications Manager @ anthropic
[2026-01-14T05:13:15.529Z] [BOT] ✅ Created forum post: 🏢 Policy Communications Manager @ anthropic in #🌉・san-francisco
[2026-01-14T05:13:15.530Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T05:13:17.030Z] [BOT] 💾 Marked as posted: Policy Communications Manager @ anthropic (instance #1)
[2026-01-14T05:13:17.030Z] [BOT] 💾 BEFORE ARCHIVING: 1206 jobs in database
[2026-01-14T05:13:17.031Z] [BOT] ✅ No jobs to archive (all 1206 jobs within 7-day window)
[2026-01-14T05:13:17.043Z] [BOT] 💾 Saved posted_jobs.json: 1206 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:13:17.044Z] [BOT] 📍 [ROUTING] "Business Development, Strategic Technology Partnerships" @ anthropic
[2026-01-14T05:13:17.044Z] [BOT] Category: SALES (matched: "sales")
[2026-01-14T05:13:17.044Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T05:13:17.185Z] [BOT] ✅ Created forum post: 🏢 Business Development, Strategic Technology Partnerships @ anthropic in #💲・sales-jobs
[2026-01-14T05:13:17.185Z] [BOT] ✅ Industry: Business Development, Strategic Technology Partnerships @ anthropic
[2026-01-14T05:13:18.980Z] [BOT] ✅ Created forum post: 🏢 Business Development, Strategic Technology Partnerships @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:13:20.481Z] [BOT] 💾 Marked as posted: Business Development, Strategic Technology Partnerships @ anthropic (instance #1)
[2026-01-14T05:13:20.482Z] [BOT] 💾 BEFORE ARCHIVING: 1207 jobs in database
[2026-01-14T05:13:20.483Z] [BOT] ✅ No jobs to archive (all 1207 jobs within 7-day window)
[2026-01-14T05:13:20.492Z] [BOT] 💾 Saved posted_jobs.json: 1207 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:13:23.493Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-14T05:13:23.494Z] [BOT] 📍 [ROUTING] "Software Engineer, Android" @ anthropic
[2026-01-14T05:13:23.494Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:13:23.676Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Android @ anthropic in #💻・tech-jobs
[2026-01-14T05:13:23.676Z] [BOT] ✅ Industry: Software Engineer, Android @ anthropic
[2026-01-14T05:13:25.377Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Android @ anthropic in #🌉・san-francisco
[2026-01-14T05:13:25.377Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T05:13:26.878Z] [BOT] 💾 Marked as posted: Software Engineer, Android @ anthropic (instance #1)
[2026-01-14T05:13:26.878Z] [BOT] 💾 BEFORE ARCHIVING: 1208 jobs in database
[2026-01-14T05:13:26.879Z] [BOT] ✅ No jobs to archive (all 1208 jobs within 7-day window)
[2026-01-14T05:13:26.888Z] [BOT] 💾 Saved posted_jobs.json: 1208 active jobs
[2026-01-14T05:13:26.889Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:13:26.889Z] [BOT] 📍 [ROUTING] "Software Engineer, iOS" @ anthropic
[2026-01-14T05:13:26.889Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:13:27.074Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, iOS @ anthropic in #💻・tech-jobs
[2026-01-14T05:13:27.074Z] [BOT] ✅ Industry: Software Engineer, iOS @ anthropic
[2026-01-14T05:13:28.829Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, iOS @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:13:30.331Z] [BOT] 💾 Marked as posted: Software Engineer, iOS @ anthropic (instance #1)
[2026-01-14T05:13:30.331Z] [BOT] 💾 BEFORE ARCHIVING: 1209 jobs in database
[2026-01-14T05:13:30.332Z] [BOT] ✅ No jobs to archive (all 1209 jobs within 7-day window)
[2026-01-14T05:13:30.341Z] [BOT] 💾 Saved posted_jobs.json: 1209 active jobs
[2026-01-14T05:13:30.341Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:13:30.342Z] [BOT] 📍 [ROUTING] "Applied Researcher 2 - Search Ranking" @ eBay
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:13:30.502Z] [BOT] ✅ Created forum post: 🏢 Applied Researcher 2 - Search Ranking @ eBay in #💻・tech-jobs
  ✅ Industry: Applied Researcher 2 - Search Ranking @ eBay
[2026-01-14T05:13:32.508Z] [BOT] ✅ Created forum post: 🏢 Applied Researcher 2 - Search Ranking @ eBay in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:13:34.009Z] [BOT] 💾 Marked as posted: Applied Researcher 2 - Search Ranking @ eBay (instance #1)
[2026-01-14T05:13:34.009Z] [BOT] 💾 BEFORE ARCHIVING: 1210 jobs in database
[2026-01-14T05:13:34.010Z] [BOT] ✅ No jobs to archive (all 1210 jobs within 7-day window)
[2026-01-14T05:13:34.018Z] [BOT] 💾 Saved posted_jobs.json: 1210 active jobs
[2026-01-14T05:13:34.018Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:13:37.019Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-14T05:13:37.019Z] [BOT] 📍 [ROUTING] "Fluid Properties Technologist" @ ORG_6adce842
[2026-01-14T05:13:37.019Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-14T05:13:37.223Z] [BOT] ✅ Created forum post: 🏢 Fluid Properties Technologist @ ORG_6adce842 in #💰・finance-jobs
  ✅ Industry: Fluid Properties Technologist @ ORG_6adce842
[2026-01-14T05:13:38.950Z] [BOT] ✅ Created forum post: 🏢 Fluid Properties Technologist @ ORG_6adce842 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-14T05:13:40.451Z] [BOT] 💾 Marked as posted: Fluid Properties Technologist @ ORG_6adce842 (instance #1)
[2026-01-14T05:13:40.451Z] [BOT] 💾 BEFORE ARCHIVING: 1211 jobs in database
[2026-01-14T05:13:40.452Z] [BOT] ✅ No jobs to archive (all 1211 jobs within 7-day window)
[2026-01-14T05:13:40.462Z] [BOT] 💾 Saved posted_jobs.json: 1211 active jobs
[2026-01-14T05:13:40.462Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:13:43.462Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-14T05:13:43.464Z] [BOT] 📍 [ROUTING] "Research Engineer – Cybersecurity RL" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T05:13:43.464Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T05:13:43.753Z] [BOT] ✅ Created forum post: 🏢 Research Engineer – Cybersecurity RL @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer – Cybersecurity RL @ anthropic
[2026-01-14T05:13:45.386Z] [BOT] ✅ Created forum post: 🏢 Research Engineer – Cybersecurity RL @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:13:46.887Z] [BOT] 💾 Marked as posted: Research Engineer – Cybersecurity RL @ anthropic (instance #1)
[2026-01-14T05:13:46.887Z] [BOT] 💾 BEFORE ARCHIVING: 1212 jobs in database
[2026-01-14T05:13:46.888Z] [BOT] ✅ No jobs to archive (all 1212 jobs within 7-day window)
[2026-01-14T05:13:46.902Z] [BOT] 💾 Saved posted_jobs.json: 1212 active jobs
✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Enterprise Support Specialist, Portuguese Speaking" @ figma
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T05:13:47.059Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Portuguese Speaking @ figma in #🤖・ai-jobs
  ✅ Industry: Enterprise Support Specialist, Portuguese Speaking @ figma
[2026-01-14T05:13:48.711Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Portuguese Speaking @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:13:50.212Z] [BOT] 💾 Marked as posted: Enterprise Support Specialist, Portuguese Speaking @ figma (instance #1)
[2026-01-14T05:13:50.212Z] [BOT] 💾 BEFORE ARCHIVING: 1213 jobs in database
[2026-01-14T05:13:50.213Z] [BOT] ✅ No jobs to archive (all 1213 jobs within 7-day window)
[2026-01-14T05:13:50.222Z] [BOT] 💾 Saved posted_jobs.json: 1213 active jobs
[2026-01-14T05:13:50.222Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:13:50.222Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Korean Speaking" @ figma
   Category: AI (matched: "machine learning")
[2026-01-14T05:13:50.222Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T05:13:50.459Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Korean Speaking @ figma in #🤖・ai-jobs
  ✅ Industry: Enterprise Support Specialist, Korean Speaking @ figma
[2026-01-14T05:13:52.134Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Korean Speaking @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:13:53.634Z] [BOT] 💾 Marked as posted: Enterprise Support Specialist, Korean Speaking @ figma (instance #1)
[2026-01-14T05:13:53.635Z] [BOT] 💾 BEFORE ARCHIVING: 1214 jobs in database
[2026-01-14T05:13:53.636Z] [BOT] ✅ No jobs to archive (all 1214 jobs within 7-day window)
[2026-01-14T05:13:53.644Z] [BOT] 💾 Saved posted_jobs.json: 1214 active jobs
[2026-01-14T05:13:53.644Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:13:53.644Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Japanese Speaking" @ figma
[2026-01-14T05:13:53.644Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T05:13:53.955Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Japanese Speaking @ figma in #🤖・ai-jobs
  ✅ Industry: Enterprise Support Specialist, Japanese Speaking @ figma
[2026-01-14T05:13:56.973Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Japanese Speaking @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:13:58.474Z] [BOT] 💾 Marked as posted: Enterprise Support Specialist, Japanese Speaking @ figma (instance #1)
[2026-01-14T05:13:58.474Z] [BOT] 💾 BEFORE ARCHIVING: 1215 jobs in database
[2026-01-14T05:13:58.475Z] [BOT] ✅ No jobs to archive (all 1215 jobs within 7-day window)
[2026-01-14T05:13:58.484Z] [BOT] 💾 Saved posted_jobs.json: 1215 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:14:01.485Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T05:14:01.485Z] [BOT] ⏭️  Skipping duplicate: JID_cdbf504d (posted within 7 days)
[2026-01-14T05:14:01.485Z] [BOT] ⏭️  Skipping duplicate: JID_18e6eb79 (posted within 7 days)
[2026-01-14T05:14:01.485Z] [BOT] ⏭️  Skipping duplicate: JID_5f23f2e1 (posted within 7 days)
[2026-01-14T05:14:01.485Z] [BOT] ⏭️  Skipping duplicate: JID_7bf52a08 (posted within 7 days)
[2026-01-14T05:14:01.486Z] [BOT] ⏭️  Skipping duplicate: JID_d8f788f3 (posted within 7 days)
⏭️  Skipping duplicate: JID_559c7eeb-ranking_r0066187 (posted within 7 days)
⏭️  Skipping duplicate: JID_3008de4b (posted within 7 days)
⏭️  Skipping duplicate: JID_a84fdeff (posted within 7 days)
[2026-01-14T05:14:01.486Z] [BOT] ⏭️  Skipping duplicate: JID_88d8e6a9 (posted within 7 days)
⏭️  Skipping duplicate: JID_a0ec39cd (posted within 7 days)
[2026-01-14T05:14:01.599Z] [BOT] ✅ Loaded pending queue: 2738 total (2718 pending, 20 enriched, 0 posted)
[2026-01-14T05:14:01.762Z] [BOT] ✅ Saved pending queue: 2738 total (2718 pending, 10 enriched, 10 posted)
[2026-01-14T05:14:01.763Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T05:14:01.814Z] [BOT] 📂 Loaded 3325 existing routing entries
[2026-01-14T05:14:01.872Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-14T05:14:01.872Z] [BOT] Total entries: 3335
   Timestamp: 2026-01-14T05:14:01.859Z
[2026-01-14T05:14:01.873Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T05:14:01.873Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
[2026-01-14T05:14:01.873Z] [BOT] Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 9 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💻・tech-jobs: 3 posts
[2026-01-14T05:14:01.873Z] [BOT] 4. #💲・sales-jobs: 2 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-14T05:14:01.873Z] [BOT] [STATS] Channel stats saved
[2026-01-14T05:14:03.896Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3268) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*