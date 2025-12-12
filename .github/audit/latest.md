# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T05:07:15.865Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T05:06:37.050Z] ========================================
[2025-12-12T05:06:37.052Z] Discord Bot Execution Log
[2025-12-12T05:06:37.052Z] Environment: GitHub Actions
[2025-12-12T05:06:37.052Z] Node Version: v20.19.6
[2025-12-12T05:06:37.052Z] ========================================
[2025-12-12T05:06:37.052Z] Environment Variables Check:
[2025-12-12T05:06:37.052Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T05:06:37.052Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T05:06:37.052Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T05:06:37.053Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T05:06:37.053Z] 
Multi-Channel Configuration:
[2025-12-12T05:06:37.053Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T05:06:37.053Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T05:06:37.053Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T05:06:37.053Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T05:06:37.053Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T05:06:37.053Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T05:06:37.053Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T05:06:37.053Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T05:06:37.053Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T05:06:37.053Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T05:06:37.053Z] 
Data Files Check:
[2025-12-12T05:06:37.055Z] .github/data/new_jobs.json: ✅ Exists (10 items, 154327 bytes)
[2025-12-12T05:06:37.055Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 26517 bytes)
[2025-12-12T05:06:37.055Z] 
========================================
[2025-12-12T05:06:37.055Z] Starting Enhanced Discord Bot...
[2025-12-12T05:06:37.055Z] ========================================
[2025-12-12T05:06:37.553Z] [BOT] ✅ Loaded V2 database: 41 jobs
[2025-12-12T05:06:38.499Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T05:06:38.499Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T05:06:38.499Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T05:06:38.500Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T05:06:38.609Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 150
[2025-12-12T05:06:38.610Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T05:06:38.610Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
[2025-12-12T05:06:38.610Z] [BOT] ⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2025-12-12T05:06:38.611Z] [BOT] 📬 Found 7 new jobs (3 already posted)...
[2025-12-12T05:06:38.611Z] [BOT] 📋 After blacklist filter: 7 jobs (0 blacklisted)
[2025-12-12T05:06:38.611Z] [BOT] 📋 After data quality filter: 7 jobs (0 invalid)
[2025-12-12T05:06:38.612Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2025-12-12T05:06:38.612Z] [BOT] 📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T05:06:38.613Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-12T05:06:38.613Z] [BOT] 📍 [ROUTING] "Associate AI Engineer" @ ORG_57e8a431 Brands
[2025-12-12T05:06:38.613Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T05:06:38.617Z] [BOT ERROR] (node:2694) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T05:06:38.917Z] [BOT] ✅ Created forum post: 🏢 Associate AI Engineer @ ORG_57e8a431 Brands in #🤖・ai-jobs
[2025-12-12T05:06:38.917Z] [BOT] ✅ Industry: Associate AI Engineer @ ORG_57e8a431 Brands
[2025-12-12T05:06:40.612Z] [BOT] ✅ Created forum post: 🏢 Associate AI Engineer @ ORG_57e8a431 Brands in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-12T05:06:42.113Z] [BOT] 💾 Marked as posted: Associate AI Engineer @ ORG_57e8a431 Brands (instance #1)
[2025-12-12T05:06:42.113Z] [BOT] 💾 BEFORE ARCHIVING: 42 jobs in database
[2025-12-12T05:06:42.113Z] [BOT] ✅ No jobs to archive (all 42 jobs within 7-day window)
[2025-12-12T05:06:42.118Z] [BOT] 💾 Saved posted_jobs.json: 42 active jobs
[2025-12-12T05:06:42.118Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "WordPress Website Administrator & Designer" @ ORG_9d38443e of Southern California
[2025-12-12T05:06:42.118Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T05:06:42.329Z] [BOT] ✅ Created forum post: 🏢 WordPress Website Administrator & Designer @ ORG_9d38443e of Southern California in #🤖・ai-jobs
  ✅ Industry: WordPress Website Administrator & Designer @ ORG_9d38443e of Southern California
[2025-12-12T05:06:44.029Z] [BOT] ✅ Created forum post: 🏢 WordPress Website Administrator & Designer @ ORG_9d38443e of Southern California in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-12T05:06:45.531Z] [BOT] 💾 Marked as posted: WordPress Website Administrator & Designer @ ORG_9d38443e of Southern California (instance #1)
💾 BEFORE ARCHIVING: 43 jobs in database
✅ No jobs to archive (all 43 jobs within 7-day window)
[2025-12-12T05:06:45.754Z] [BOT] 💾 Saved posted_jobs.json: 43 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T05:06:45.754Z] [BOT] 📍 [ROUTING] "Forward Deployed Engineer" @ ORG_5792b661
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T05:06:46.170Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Engineer @ ORG_5792b661 in #🤖・ai-jobs
  ✅ Industry: Forward Deployed Engineer @ ORG_5792b661
[2025-12-12T05:06:47.907Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Engineer @ ORG_5792b661 in #💻・remote-usa
[2025-12-12T05:06:47.907Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T05:06:49.407Z] [BOT] 💾 Marked as posted: Forward Deployed Engineer @ ORG_5792b661 (instance #1)
[2025-12-12T05:06:49.407Z] [BOT] 💾 BEFORE ARCHIVING: 44 jobs in database
✅ No jobs to archive (all 44 jobs within 7-day window)
[2025-12-12T05:06:49.409Z] [BOT] 💾 Saved posted_jobs.json: 44 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T05:06:52.409Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-12T05:06:52.409Z] [BOT] 📍 [ROUTING] "Vulnerability Assurance Software Engineer 1" @ ORG_b93825c5 Bank
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:06:52.696Z] [BOT] ✅ Created forum post: 🏢 Vulnerability Assurance Software Engineer 1 @ ORG_b93825c5 Bank in #💻・tech-jobs
  ✅ Industry: Vulnerability Assurance Software Engineer 1 @ ORG_b93825c5 Bank
[2025-12-12T05:06:54.400Z] [BOT] ✅ Created forum post: 🏢 Vulnerability Assurance Software Engineer 1 @ ORG_b93825c5 Bank in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T05:06:55.902Z] [BOT] 💾 Marked as posted: Vulnerability Assurance Software Engineer 1 @ ORG_b93825c5 Bank (instance #1)
[2025-12-12T05:06:55.902Z] [BOT] 💾 BEFORE ARCHIVING: 45 jobs in database
✅ No jobs to archive (all 45 jobs within 7-day window)
[2025-12-12T05:06:55.903Z] [BOT] 💾 Saved posted_jobs.json: 45 active jobs
[2025-12-12T05:06:55.903Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Developer" @ ORG_df6ef51e
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:06:56.130Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_df6ef51e in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_df6ef51e
[2025-12-12T05:06:57.913Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_df6ef51e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T05:06:59.415Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_df6ef51e (instance #1)
💾 BEFORE ARCHIVING: 46 jobs in database
✅ No jobs to archive (all 46 jobs within 7-day window)
[2025-12-12T05:06:59.416Z] [BOT] 💾 Saved posted_jobs.json: 46 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T05:06:59.416Z] [BOT] 📍 [ROUTING] "Technical Orders Product Data Management Specialist" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:06:59.625Z] [BOT] ✅ Created forum post: 🏢 Technical Orders Product Data Management Specialist @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Technical Orders Product Data Management Specialist @ ORG_b344d80e Boeing Company
[2025-12-12T05:07:01.442Z] [BOT] ✅ Created forum post: 🏢 Technical Orders Product Data Management Specialist @ ORG_b344d80e Boeing Company in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-12T05:07:02.942Z] [BOT] 💾 Marked as posted: Technical Orders Product Data Management Specialist @ ORG_b344d80e Boeing Company (instance #1)
💾 BEFORE ARCHIVING: 47 jobs in database
[2025-12-12T05:07:02.942Z] [BOT] ✅ No jobs to archive (all 47 jobs within 7-day window)
[2025-12-12T05:07:02.944Z] [BOT] 💾 Saved posted_jobs.json: 47 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T05:07:05.944Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-12T05:07:05.945Z] [BOT] 📍 [ROUTING] "Financial Data Analyst" @ ORG_fb165686inder
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T05:07:06.358Z] [BOT] ✅ Created forum post: 🏢 Financial Data Analyst @ ORG_fb165686inder in #📈・JID_fb739488
  ✅ Industry: Financial Data Analyst @ ORG_fb165686inder
[2025-12-12T05:07:08.054Z] [BOT] ✅ Created forum post: 🏢 Financial Data Analyst @ ORG_fb165686inder in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-12T05:07:09.555Z] [BOT] 💾 Marked as posted: Financial Data Analyst @ ORG_fb165686inder (instance #1)
[2025-12-12T05:07:09.555Z] [BOT] 💾 BEFORE ARCHIVING: 48 jobs in database
✅ No jobs to archive (all 48 jobs within 7-day window)
[2025-12-12T05:07:09.557Z] [BOT] 💾 Saved posted_jobs.json: 48 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T05:07:12.557Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-12-12T05:07:12.558Z] [BOT] ⏭️  Skipping duplicate: JID_dc8a9f48 (posted within 7 days)
⏭️  Skipping duplicate: JID_9a1417fb-designer_req20168294 (posted within 7 days)
⏭️  Skipping duplicate: JID_2606aa9d-i_r0108995 (posted within 7 days)
⏭️  Skipping duplicate: JID_998c6457-developer_r8219 (posted within 7 days)
⏭️  Skipping duplicate: JID_699adb0d (posted within 7 days)
[2025-12-12T05:07:12.558Z] [BOT] ⏭️  Skipping duplicate: JID_d0b472e8 (posted within 7 days)
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_460ca2f4-specialist_jr2025486739-1 (posted within 7 days)
[2025-12-12T05:07:12.561Z] [BOT] ✅ Loaded pending queue: 517 total (507 pending, 10 enriched, 0 posted)
[2025-12-12T05:07:12.570Z] [BOT] ✅ Saved pending queue: 517 total (472 pending, 3 enriched, 42 posted)
📋 Updated queue: marked 42 jobs as posted
[2025-12-12T05:07:12.570Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-12T05:07:12.608Z] [BOT] 📂 Loaded 38 existing routing entries
[2025-12-12T05:07:12.643Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
   Total entries: 45
   Timestamp: 2025-12-12T05:07:12.643Z
[2025-12-12T05:07:14.652Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2694) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*