# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T11:49:55.960Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T11:49:03.632Z] ========================================
[2026-01-04T11:49:03.634Z] Discord Bot Execution Log
[2026-01-04T11:49:03.634Z] Environment: GitHub Actions
[2026-01-04T11:49:03.634Z] Node Version: v20.19.6
[2026-01-04T11:49:03.634Z] ========================================
[2026-01-04T11:49:03.634Z] Environment Variables Check:
[2026-01-04T11:49:03.634Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T11:49:03.634Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T11:49:03.634Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T11:49:03.635Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T11:49:03.635Z] 
Multi-Channel Configuration:
[2026-01-04T11:49:03.635Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T11:49:03.635Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T11:49:03.635Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T11:49:03.635Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T11:49:03.635Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T11:49:03.635Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T11:49:03.635Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T11:49:03.635Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T11:49:03.635Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T11:49:03.635Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T11:49:03.635Z] 
Data Files Check:
[2026-01-04T11:49:03.637Z] .github/data/new_jobs.json: ✅ Exists (10 items, 169355 bytes)
[2026-01-04T11:49:03.641Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 533697 bytes)
[2026-01-04T11:49:03.641Z] 
========================================
[2026-01-04T11:49:03.641Z] Starting Enhanced Discord Bot...
[2026-01-04T11:49:03.641Z] ========================================
[2026-01-04T11:49:04.164Z] [BOT] ✅ Loaded V2 database: 1060 jobs
[2026-01-04T11:49:04.566Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T11:49:04.566Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T11:49:04.566Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T11:49:04.567Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T11:49:04.636Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T11:49:04.724Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T11:49:04.727Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T11:49:04.727Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T11:49:04.727Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T11:49:04.728Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T11:49:04.728Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T11:49:04.733Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-04T11:49:04.734Z] [BOT] 📍 [ROUTING] "Product Manager, Billing" @ clerk
[2026-01-04T11:49:04.734Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-04T11:49:04.751Z] [BOT ERROR] (node:2440) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T11:49:05.018Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Billing @ clerk in #📦・product-jobs
  ✅ Industry: Product Manager, Billing @ clerk
[2026-01-04T11:49:06.520Z] [BOT] 💾 Marked as posted: Product Manager, Billing @ clerk (instance #1)
[2026-01-04T11:49:06.520Z] [BOT] 💾 BEFORE ARCHIVING: 1061 jobs in database
[2026-01-04T11:49:06.521Z] [BOT] ✅ No jobs to archive (all 1061 jobs within 7-day window)
[2026-01-04T11:49:06.535Z] [BOT] 💾 Saved posted_jobs.json: 1061 active jobs
[2026-01-04T11:49:06.535Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:49:09.535Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-04T11:49:09.535Z] [BOT] 📍 [ROUTING] "Manager, SEO" @ figma
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T11:49:09.536Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-04T11:49:10.126Z] [BOT] ✅ Created forum post: 🏢 Manager, SEO @ figma in #🤖・ai-jobs
[2026-01-04T11:49:10.127Z] [BOT] ✅ Industry: Manager, SEO @ figma
[2026-01-04T11:49:11.944Z] [BOT] ✅ Created forum post: 🏢 Manager, SEO @ figma in #🌉・san-francisco
[2026-01-04T11:49:11.944Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:49:13.444Z] [BOT] 💾 Marked as posted: Manager, SEO @ figma (instance #1)
[2026-01-04T11:49:13.445Z] [BOT] 💾 BEFORE ARCHIVING: 1062 jobs in database
[2026-01-04T11:49:13.445Z] [BOT] ✅ No jobs to archive (all 1062 jobs within 7-day window)
[2026-01-04T11:49:13.455Z] [BOT] 💾 Saved posted_jobs.json: 1062 active jobs
[2026-01-04T11:49:13.455Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:49:16.456Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-04T11:49:16.456Z] [BOT] 📍 [ROUTING] "Business Systems Architect, AI" @ figma
[2026-01-04T11:49:16.456Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T11:49:16.674Z] [BOT] ✅ Created forum post: 🏢 Business Systems Architect, AI @ figma in #💻・tech-jobs
  ✅ Industry: Business Systems Architect, AI @ figma
[2026-01-04T11:49:18.358Z] [BOT] ✅ Created forum post: 🏢 Business Systems Architect, AI @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:49:19.858Z] [BOT] 💾 Marked as posted: Business Systems Architect, AI @ figma (instance #1)
[2026-01-04T11:49:19.858Z] [BOT] 💾 BEFORE ARCHIVING: 1063 jobs in database
[2026-01-04T11:49:19.859Z] [BOT] ✅ No jobs to archive (all 1063 jobs within 7-day window)
[2026-01-04T11:49:19.868Z] [BOT] 💾 Saved posted_jobs.json: 1063 active jobs
[2026-01-04T11:49:19.868Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:49:19.868Z] [BOT] 📍 [ROUTING] "Integration Engineer, QA" @ figma
[2026-01-04T11:49:19.868Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T11:49:20.289Z] [BOT] ✅ Created forum post: 🏢 Integration Engineer, QA @ figma in #💻・tech-jobs
  ✅ Industry: Integration Engineer, QA @ figma
[2026-01-04T11:49:21.926Z] [BOT] ✅ Created forum post: 🏢 Integration Engineer, QA @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:49:23.426Z] [BOT] 💾 Marked as posted: Integration Engineer, QA @ figma (instance #1)
[2026-01-04T11:49:23.426Z] [BOT] 💾 BEFORE ARCHIVING: 1064 jobs in database
[2026-01-04T11:49:23.427Z] [BOT] ✅ No jobs to archive (all 1064 jobs within 7-day window)
[2026-01-04T11:49:23.436Z] [BOT] 💾 Saved posted_jobs.json: 1064 active jobs
[2026-01-04T11:49:23.436Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:49:26.436Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-04T11:49:26.436Z] [BOT] 📍 [ROUTING] "Corporate Development & Strategy, M&A Integration" @ figma
   Category: SALES (matched: "sales")
[2026-01-04T11:49:26.436Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:49:26.961Z] [BOT] ✅ Created forum post: 🏢 Corporate Development & Strategy, M&A Integration @ figma in #💲・sales-jobs
  ✅ Industry: Corporate Development & Strategy, M&A Integration @ figma
[2026-01-04T11:49:28.644Z] [BOT] ✅ Created forum post: 🏢 Corporate Development & Strategy, M&A Integration @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:49:30.146Z] [BOT] 💾 Marked as posted: Corporate Development & Strategy, M&A Integration @ figma (instance #1)
[2026-01-04T11:49:30.146Z] [BOT] 💾 BEFORE ARCHIVING: 1065 jobs in database
[2026-01-04T11:49:30.147Z] [BOT] ✅ No jobs to archive (all 1065 jobs within 7-day window)
[2026-01-04T11:49:30.155Z] [BOT] 💾 Saved posted_jobs.json: 1065 active jobs
[2026-01-04T11:49:30.155Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:49:30.155Z] [BOT] 📍 [ROUTING] "Director, Payroll Operations" @ figma
[2026-01-04T11:49:30.155Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:49:30.304Z] [BOT] ✅ Created forum post: 🏢 Director, Payroll Operations @ figma in #💲・sales-jobs
  ✅ Industry: Director, Payroll Operations @ figma
[2026-01-04T11:49:31.952Z] [BOT] ✅ Created forum post: 🏢 Director, Payroll Operations @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:49:33.453Z] [BOT] 💾 Marked as posted: Director, Payroll Operations @ figma (instance #1)
[2026-01-04T11:49:33.454Z] [BOT] 💾 BEFORE ARCHIVING: 1066 jobs in database
[2026-01-04T11:49:33.454Z] [BOT] ✅ No jobs to archive (all 1066 jobs within 7-day window)
[2026-01-04T11:49:33.462Z] [BOT] 💾 Saved posted_jobs.json: 1066 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:49:33.463Z] [BOT] 📍 [ROUTING] "Manager, Mid-Market Sales" @ figma
   Category: SALES (matched: "sales")
[2026-01-04T11:49:33.463Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:49:33.628Z] [BOT] ✅ Created forum post: 🏢 Manager, Mid-Market Sales @ figma in #💲・sales-jobs
  ✅ Industry: Manager, Mid-Market Sales @ figma
[2026-01-04T11:49:35.342Z] [BOT] ✅ Created forum post: 🏢 Manager, Mid-Market Sales @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:49:36.843Z] [BOT] 💾 Marked as posted: Manager, Mid-Market Sales @ figma (instance #1)
[2026-01-04T11:49:36.843Z] [BOT] 💾 BEFORE ARCHIVING: 1067 jobs in database
[2026-01-04T11:49:36.844Z] [BOT] ✅ No jobs to archive (all 1067 jobs within 7-day window)
[2026-01-04T11:49:36.852Z] [BOT] 💾 Saved posted_jobs.json: 1067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:49:36.852Z] [BOT] 📍 [ROUTING] "Manager, Solutions Consulting" @ figma
   Category: SALES (matched: "sales")
[2026-01-04T11:49:36.852Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:49:37.023Z] [BOT] ✅ Created forum post: 🏢 Manager, Solutions Consulting @ figma in #💲・sales-jobs
[2026-01-04T11:49:37.023Z] [BOT] ✅ Industry: Manager, Solutions Consulting @ figma
[2026-01-04T11:49:38.767Z] [BOT] ✅ Created forum post: 🏢 Manager, Solutions Consulting @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:49:40.267Z] [BOT] 💾 Marked as posted: Manager, Solutions Consulting @ figma (instance #1)
[2026-01-04T11:49:40.267Z] [BOT] 💾 BEFORE ARCHIVING: 1068 jobs in database
[2026-01-04T11:49:40.268Z] [BOT] ✅ No jobs to archive (all 1068 jobs within 7-day window)
[2026-01-04T11:49:40.275Z] [BOT] 💾 Saved posted_jobs.json: 1068 active jobs
[2026-01-04T11:49:40.275Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:49:40.276Z] [BOT] 📍 [ROUTING] "Partner Manager, Scaled" @ figma
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:49:40.442Z] [BOT] ✅ Created forum post: 🏢 Partner Manager, Scaled @ figma in #💲・sales-jobs
[2026-01-04T11:49:40.442Z] [BOT] ✅ Industry: Partner Manager, Scaled @ figma
[2026-01-04T11:49:42.127Z] [BOT] ✅ Created forum post: 🏢 Partner Manager, Scaled @ figma in #🌉・san-francisco
[2026-01-04T11:49:42.127Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:49:43.628Z] [BOT] 💾 Marked as posted: Partner Manager, Scaled @ figma (instance #1)
[2026-01-04T11:49:43.628Z] [BOT] 💾 BEFORE ARCHIVING: 1069 jobs in database
[2026-01-04T11:49:43.629Z] [BOT] ✅ No jobs to archive (all 1069 jobs within 7-day window)
[2026-01-04T11:49:43.639Z] [BOT] 💾 Saved posted_jobs.json: 1069 active jobs
[2026-01-04T11:49:43.639Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:49:46.640Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T11:49:46.641Z] [BOT] 📍 [ROUTING] "Growth Marketing Manager, Creator & Affiliate" @ figma
   Category: MARKETING (matched: "marketing")
[2026-01-04T11:49:46.641Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T11:49:47.025Z] [BOT] ✅ Created forum post: 🏢 Growth Marketing Manager, Creator & Affiliate @ figma in #📣・marketing-jobs
  ✅ Industry: Growth Marketing Manager, Creator & Affiliate @ figma
[2026-01-04T11:49:48.701Z] [BOT] ✅ Created forum post: 🏢 Growth Marketing Manager, Creator & Affiliate @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:49:50.201Z] [BOT] 💾 Marked as posted: Growth Marketing Manager, Creator & Affiliate @ figma (instance #1)
[2026-01-04T11:49:50.201Z] [BOT] 💾 BEFORE ARCHIVING: 1070 jobs in database
[2026-01-04T11:49:50.202Z] [BOT] ✅ No jobs to archive (all 1070 jobs within 7-day window)
[2026-01-04T11:49:50.210Z] [BOT] 💾 Saved posted_jobs.json: 1070 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:49:53.210Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T11:49:53.210Z] [BOT] ⏭️  Skipping duplicate: JID_2f3100fc (posted within 7 days)
[2026-01-04T11:49:53.210Z] [BOT] ⏭️  Skipping duplicate: JID_13c7c220 (posted within 7 days)
[2026-01-04T11:49:53.210Z] [BOT] ⏭️  Skipping duplicate: JID_976601b2 (posted within 7 days)
[2026-01-04T11:49:53.211Z] [BOT] ⏭️  Skipping duplicate: JID_509fb2e3 (posted within 7 days)
[2026-01-04T11:49:53.211Z] [BOT] ⏭️  Skipping duplicate: JID_ec3f0bda (posted within 7 days)
[2026-01-04T11:49:53.211Z] [BOT] ⏭️  Skipping duplicate: JID_ca57f095 (posted within 7 days)
⏭️  Skipping duplicate: JID_6fc69b29 (posted within 7 days)
[2026-01-04T11:49:53.211Z] [BOT] ⏭️  Skipping duplicate: JID_4aa9ae38 (posted within 7 days)
[2026-01-04T11:49:53.211Z] [BOT] ⏭️  Skipping duplicate: JID_e1299199 (posted within 7 days)
[2026-01-04T11:49:53.211Z] [BOT] ⏭️  Skipping duplicate: JID_caf7d4ef (posted within 7 days)
[2026-01-04T11:49:53.226Z] [BOT] ✅ Loaded pending queue: 230 total (210 pending, 20 enriched, 0 posted)
[2026-01-04T11:49:53.248Z] [BOT] ✅ Saved pending queue: 230 total (210 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-04T11:49:53.248Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T11:49:53.298Z] [BOT] 📂 Loaded 1969 existing routing entries
[2026-01-04T11:49:53.348Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T11:49:53.349Z] [BOT] Total entries: 1979
   Timestamp: 2026-01-04T11:49:53.339Z
[2026-01-04T11:49:53.349Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T11:49:53.349Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-04T11:49:53.349Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T11:49:53.349Z] [BOT] Last cleanup: Never
   Total posts: 19
[2026-01-04T11:49:53.350Z] [BOT] Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 9 posts
     2. #💲・sales-jobs: 5 posts
     3. #💻・tech-jobs: 2 posts
[2026-01-04T11:49:53.350Z] [BOT] 4. #📦・product-jobs: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-04T11:49:53.350Z] [BOT] [STATS] Channel stats saved
[2026-01-04T11:49:55.363Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2440) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*