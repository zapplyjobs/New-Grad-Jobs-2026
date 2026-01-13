# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T01:56:30.922Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T01:55:36.107Z] ========================================
[2026-01-13T01:55:36.109Z] Discord Bot Execution Log
[2026-01-13T01:55:36.109Z] Environment: GitHub Actions
[2026-01-13T01:55:36.109Z] Node Version: v20.19.6
[2026-01-13T01:55:36.109Z] ========================================
[2026-01-13T01:55:36.109Z] Environment Variables Check:
[2026-01-13T01:55:36.109Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T01:55:36.109Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T01:55:36.109Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T01:55:36.110Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T01:55:36.110Z] 
Multi-Channel Configuration:
[2026-01-13T01:55:36.110Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T01:55:36.110Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T01:55:36.110Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T01:55:36.110Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T01:55:36.110Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T01:55:36.110Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T01:55:36.110Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T01:55:36.110Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T01:55:36.110Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T01:55:36.110Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T01:55:36.111Z] 
Data Files Check:
[2026-01-13T01:55:36.112Z] .github/data/new_jobs.json: ✅ Exists (10 items, 139614 bytes)
[2026-01-13T01:55:36.115Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 344904 bytes)
[2026-01-13T01:55:36.115Z] 
========================================
[2026-01-13T01:55:36.115Z] Starting Enhanced Discord Bot...
[2026-01-13T01:55:36.115Z] ========================================
[2026-01-13T01:55:36.635Z] [BOT] ✅ Loaded V2 database: 650 jobs
[2026-01-13T01:55:37.275Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T01:55:37.276Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T01:55:37.276Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T01:55:37.383Z] [BOT] ✅ Loaded pending queue: 2693 total (2673 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Processing Technician at Booz Allen
[2026-01-13T01:55:37.385Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T01:55:37.385Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-13T01:55:37.385Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-13T01:55:37.475Z] [BOT] ✅ Loaded pending queue: 2693 total (2673 pending, 20 enriched, 0 posted)
[2026-01-13T01:55:37.629Z] [BOT] ✅ Saved pending queue: 2689 total (2673 pending, 16 enriched, 0 posted)
🗑️ Removed 4 blacklisted jobs from pending queue
[2026-01-13T01:55:37.629Z] [BOT] 📋 After blacklist filter: 16 jobs (4 blacklisted)
📋 After data quality filter: 16 jobs (0 invalid)
[2026-01-13T01:55:37.630Z] [BOT] 📋 After multi-location grouping: 11 unique jobs to post
[2026-01-13T01:55:37.630Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Technical Consultant @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states, salt lake city, utah, united states
   - Associate Technical Consultant @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T01:55:37.634Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T01:55:37.634Z] [BOT] 📍 [ROUTING] "Data Processing Technician" @ ORG_39417f32 Allen
[2026-01-13T01:55:37.634Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T01:55:37.639Z] [BOT ERROR] (node:2394) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T01:55:37.852Z] [BOT] ✅ Created forum post: 🏢 Data Processing Technician @ ORG_39417f32 Allen in #📈・JID_fb739488
[2026-01-13T01:55:37.852Z] [BOT] ✅ Industry: Data Processing Technician @ ORG_39417f32 Allen
[2026-01-13T01:55:39.606Z] [BOT] ✅ Created forum post: 🏢 Data Processing Technician @ ORG_39417f32 Allen in #🌆・chicago
[2026-01-13T01:55:39.606Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-13T01:55:41.106Z] [BOT] 💾 Marked as posted: Data Processing Technician @ ORG_39417f32 Allen (instance #1)
[2026-01-13T01:55:41.106Z] [BOT] 💾 BEFORE ARCHIVING: 651 jobs in database
[2026-01-13T01:55:41.107Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T01:55:41.112Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-13T01:55:41.112Z] [BOT] ✅ Archiving complete: 10 archived, 641 active
[2026-01-13T01:55:41.118Z] [BOT] 💾 Saved posted_jobs.json: 641 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T01:55:44.119Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-13T01:55:44.119Z] [BOT] 📍 [ROUTING] "Technical Consultant" @ brex
   Category: FINANCE (matched: "finance")
[2026-01-13T01:55:44.119Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2026-01-13T01:55:44.575Z] [BOT] ✅ Created forum post: 🏢 Technical Consultant @ brex in #💰・finance-jobs
  ✅ Industry: Technical Consultant @ brex
[2026-01-13T01:55:46.448Z] [BOT] ✅ Created forum post: 🏢 Technical Consultant @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T01:55:47.948Z] [BOT] 💾 Marked as posted: Technical Consultant @ brex (instance #1)
[2026-01-13T01:55:47.949Z] [BOT] 💾 BEFORE ARCHIVING: 642 jobs in database
[2026-01-13T01:55:47.949Z] [BOT] ✅ No jobs to archive (all 642 jobs within 7-day window)
[2026-01-13T01:55:47.955Z] [BOT] 💾 Saved posted_jobs.json: 642 active jobs
[2026-01-13T01:55:47.955Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:55:47.955Z] [BOT] 💾 Marked as posted: Technical Consultant @ brex (instance #1)
💾 BEFORE ARCHIVING: 643 jobs in database
[2026-01-13T01:55:47.956Z] [BOT] ✅ No jobs to archive (all 643 jobs within 7-day window)
[2026-01-13T01:55:47.961Z] [BOT] 💾 Saved posted_jobs.json: 643 active jobs
[2026-01-13T01:55:47.961Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Technical Consultant @ brex (instance #1)
💾 BEFORE ARCHIVING: 644 jobs in database
[2026-01-13T01:55:47.962Z] [BOT] ✅ No jobs to archive (all 644 jobs within 7-day window)
[2026-01-13T01:55:47.967Z] [BOT] 💾 Saved posted_jobs.json: 644 active jobs
[2026-01-13T01:55:47.967Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Technical Consultant @ brex (instance #1)
[2026-01-13T01:55:47.967Z] [BOT] 💾 BEFORE ARCHIVING: 645 jobs in database
[2026-01-13T01:55:47.968Z] [BOT] ✅ No jobs to archive (all 645 jobs within 7-day window)
[2026-01-13T01:55:47.972Z] [BOT] 💾 Saved posted_jobs.json: 645 active jobs
[2026-01-13T01:55:47.972Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:55:47.974Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant" @ brex
[2026-01-13T01:55:47.974Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-13T01:55:48.234Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant @ brex in #💰・finance-jobs
  ✅ Industry: Associate Technical Consultant @ brex
[2026-01-13T01:55:49.926Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T01:55:51.426Z] [BOT] 💾 Marked as posted: Associate Technical Consultant @ brex (instance #1)
[2026-01-13T01:55:51.426Z] [BOT] 💾 BEFORE ARCHIVING: 646 jobs in database
[2026-01-13T01:55:51.427Z] [BOT] ✅ No jobs to archive (all 646 jobs within 7-day window)
[2026-01-13T01:55:51.432Z] [BOT] 💾 Saved posted_jobs.json: 646 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T01:55:51.432Z] [BOT] 💾 Marked as posted: Associate Technical Consultant @ brex (instance #1)
[2026-01-13T01:55:51.432Z] [BOT] 💾 BEFORE ARCHIVING: 647 jobs in database
[2026-01-13T01:55:51.432Z] [BOT] ✅ No jobs to archive (all 647 jobs within 7-day window)
[2026-01-13T01:55:51.437Z] [BOT] 💾 Saved posted_jobs.json: 647 active jobs
[2026-01-13T01:55:51.437Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Associate Technical Consultant @ brex (instance #1)
💾 BEFORE ARCHIVING: 648 jobs in database
[2026-01-13T01:55:51.438Z] [BOT] ✅ No jobs to archive (all 648 jobs within 7-day window)
[2026-01-13T01:55:51.443Z] [BOT] 💾 Saved posted_jobs.json: 648 active jobs
[2026-01-13T01:55:51.443Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:55:54.444Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-13T01:55:54.445Z] [BOT] 📍 [ROUTING] "Business Partner, Global Revenue Strategy & Operations " @ reddit
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T01:55:54.445Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-13T01:55:54.769Z] [BOT] ✅ Created forum post: 🏢 Business Partner, Global Revenue Strategy & Operations  @ reddit in #🤖・ai-jobs
  ✅ Industry: Business Partner, Global Revenue Strategy & Operations  @ reddit
[2026-01-13T01:55:56.636Z] [BOT] ✅ Created forum post: 🏢 Business Partner, Global Revenue Strategy & Operations  @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T01:55:58.137Z] [BOT] 💾 Marked as posted: Business Partner, Global Revenue Strategy & Operations  @ reddit (instance #1)
[2026-01-13T01:55:58.137Z] [BOT] 💾 BEFORE ARCHIVING: 649 jobs in database
[2026-01-13T01:55:58.138Z] [BOT] ✅ No jobs to archive (all 649 jobs within 7-day window)
[2026-01-13T01:55:58.144Z] [BOT] 💾 Saved posted_jobs.json: 649 active jobs
[2026-01-13T01:55:58.144Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:55:58.144Z] [BOT] 📍 [ROUTING] "Analyst 2" @ ORG_17ed0843 Mutual
[2026-01-13T01:55:58.144Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-13T01:55:58.506Z] [BOT] ✅ Created forum post: 🏢 Analyst 2 @ ORG_17ed0843 Mutual in #🤖・ai-jobs
  ✅ Industry: Analyst 2 @ ORG_17ed0843 Mutual
[2026-01-13T01:56:00.228Z] [BOT] ✅ Created forum post: 🏢 Analyst 2 @ ORG_17ed0843 Mutual in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-13T01:56:01.728Z] [BOT] 💾 Marked as posted: Analyst 2 @ ORG_17ed0843 Mutual (instance #1)
[2026-01-13T01:56:01.729Z] [BOT] 💾 BEFORE ARCHIVING: 650 jobs in database
[2026-01-13T01:56:01.729Z] [BOT] ✅ No jobs to archive (all 650 jobs within 7-day window)
[2026-01-13T01:56:01.735Z] [BOT] 💾 Saved posted_jobs.json: 650 active jobs
[2026-01-13T01:56:01.735Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:56:01.735Z] [BOT] 📍 [ROUTING] "Client Partner, Mid-Market (Agency Acquisitions)" @ reddit
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T01:56:01.973Z] [BOT] ✅ Created forum post: 🏢 Client Partner, Mid-Market (Agency Acquisitions) @ reddit in #🤖・ai-jobs
  ✅ Industry: Client Partner, Mid-Market (Agency Acquisitions) @ reddit
[2026-01-13T01:56:03.702Z] [BOT] ✅ Created forum post: 🏢 Client Partner, Mid-Market (Agency Acquisitions) @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T01:56:05.203Z] [BOT] 💾 Marked as posted: Client Partner, Mid-Market (Agency Acquisitions) @ reddit (instance #1)
[2026-01-13T01:56:05.203Z] [BOT] 💾 BEFORE ARCHIVING: 651 jobs in database
[2026-01-13T01:56:05.204Z] [BOT] ✅ No jobs to archive (all 651 jobs within 7-day window)
[2026-01-13T01:56:05.210Z] [BOT] 💾 Saved posted_jobs.json: 651 active jobs
[2026-01-13T01:56:05.210Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:56:05.210Z] [BOT] 📍 [ROUTING] "Client Partner, Mid-Market (Services Acquisitions)" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-13T01:56:05.210Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T01:56:05.474Z] [BOT] ✅ Created forum post: 🏢 Client Partner, Mid-Market (Services Acquisitions) @ reddit in #🤖・ai-jobs
  ✅ Industry: Client Partner, Mid-Market (Services Acquisitions) @ reddit
[2026-01-13T01:56:07.336Z] [BOT] ✅ Created forum post: 🏢 Client Partner, Mid-Market (Services Acquisitions) @ reddit in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-13T01:56:08.836Z] [BOT] 💾 Marked as posted: Client Partner, Mid-Market (Services Acquisitions) @ reddit (instance #1)
[2026-01-13T01:56:08.837Z] [BOT] 💾 BEFORE ARCHIVING: 652 jobs in database
[2026-01-13T01:56:08.837Z] [BOT] ✅ No jobs to archive (all 652 jobs within 7-day window)
[2026-01-13T01:56:08.844Z] [BOT] 💾 Saved posted_jobs.json: 652 active jobs
[2026-01-13T01:56:08.844Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:56:08.844Z] [BOT] 📍 [ROUTING] "Client Account Executive, Mid-Market (App Dev)" @ reddit
[2026-01-13T01:56:08.844Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-13T01:56:09.076Z] [BOT] ✅ Created forum post: 🏢 Client Account Executive, Mid-Market (App Dev) @ reddit in #🤖・ai-jobs
[2026-01-13T01:56:09.076Z] [BOT] ✅ Industry: Client Account Executive, Mid-Market (App Dev) @ reddit
[2026-01-13T01:56:11.151Z] [BOT] ✅ Created forum post: 🏢 Client Account Executive, Mid-Market (App Dev) @ reddit in #🗽・new-york
[2026-01-13T01:56:11.151Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T01:56:12.651Z] [BOT] 💾 Marked as posted: Client Account Executive, Mid-Market (App Dev) @ reddit (instance #1)
[2026-01-13T01:56:12.652Z] [BOT] 💾 BEFORE ARCHIVING: 653 jobs in database
[2026-01-13T01:56:12.652Z] [BOT] ✅ No jobs to archive (all 653 jobs within 7-day window)
[2026-01-13T01:56:12.658Z] [BOT] 💾 Saved posted_jobs.json: 653 active jobs
[2026-01-13T01:56:12.658Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:56:12.659Z] [BOT] 📍 [ROUTING] "Client Account Executive, Mid-Market Sales (B2B Services)" @ reddit
[2026-01-13T01:56:12.659Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-13T01:56:13.030Z] [BOT] ✅ Created forum post: 🏢 Client Account Executive, Mid-Market Sales (B2B Services) @ reddit in #🤖・ai-jobs
[2026-01-13T01:56:13.031Z] [BOT] ✅ Industry: Client Account Executive, Mid-Market Sales (B2B Services) @ reddit
[2026-01-13T01:56:14.784Z] [BOT] ✅ Created forum post: 🏢 Client Account Executive, Mid-Market Sales (B2B Services) @ reddit in #🌉・san-francisco
[2026-01-13T01:56:14.785Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T01:56:16.285Z] [BOT] 💾 Marked as posted: Client Account Executive, Mid-Market Sales (B2B Services) @ reddit (instance #1)
[2026-01-13T01:56:16.285Z] [BOT] 💾 BEFORE ARCHIVING: 654 jobs in database
[2026-01-13T01:56:16.285Z] [BOT] ✅ No jobs to archive (all 654 jobs within 7-day window)
[2026-01-13T01:56:16.291Z] [BOT] 💾 Saved posted_jobs.json: 654 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T01:56:19.292Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-13T01:56:19.292Z] [BOT] 📍 [ROUTING] "Product Manager, Claude Code (Enterprise)" @ anthropic
[2026-01-13T01:56:19.292Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-13T01:56:21.116Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Claude Code (Enterprise) @ anthropic in #📦・product-jobs
[2026-01-13T01:56:21.116Z] [BOT] ✅ Industry: Product Manager, Claude Code (Enterprise) @ anthropic
[2026-01-13T01:56:22.841Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Claude Code (Enterprise) @ anthropic in #🌉・san-francisco
[2026-01-13T01:56:22.842Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T01:56:24.342Z] [BOT] 💾 Marked as posted: Product Manager, Claude Code (Enterprise) @ anthropic (instance #1)
[2026-01-13T01:56:24.342Z] [BOT] 💾 BEFORE ARCHIVING: 655 jobs in database
[2026-01-13T01:56:24.342Z] [BOT] ✅ No jobs to archive (all 655 jobs within 7-day window)
[2026-01-13T01:56:24.348Z] [BOT] 💾 Saved posted_jobs.json: 655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T01:56:27.348Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T01:56:27.349Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_5851cc87-technician_r0231593 (posted within 7 days)
[2026-01-13T01:56:27.349Z] [BOT] ⏭️  Skipping duplicate: JID_027996fc (posted within 7 days)
[2026-01-13T01:56:27.349Z] [BOT] ⏭️  Skipping duplicate: JID_b2d91260 (posted within 7 days)
⏭️  Skipping duplicate: JID_fa49d8be (posted within 7 days)
[2026-01-13T01:56:27.349Z] [BOT] ⏭️  Skipping duplicate: JID_35c57ace (posted within 7 days)
[2026-01-13T01:56:27.349Z] [BOT] ⏭️  Skipping duplicate: JID_7a782813 (posted within 7 days)
[2026-01-13T01:56:27.349Z] [BOT] ⏭️  Skipping duplicate: JID_7774d1e7 (posted within 7 days)
[2026-01-13T01:56:27.349Z] [BOT] ⏭️  Skipping duplicate: JID_322b88f9 (posted within 7 days)
[2026-01-13T01:56:27.349Z] [BOT] ⏭️  Skipping duplicate: JID_5e2048d2 (posted within 7 days)
[2026-01-13T01:56:27.349Z] [BOT] ⏭️  Skipping duplicate: JID_6fcd7373 (posted within 7 days)
[2026-01-13T01:56:27.464Z] [BOT] ✅ Loaded pending queue: 2689 total (2673 pending, 16 enriched, 0 posted)
[2026-01-13T01:56:27.610Z] [BOT] ✅ Saved pending queue: 2689 total (2673 pending, 6 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-13T01:56:27.610Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T01:56:27.661Z] [BOT] 📂 Loaded 2828 existing routing entries
[2026-01-13T01:56:27.716Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T01:56:27.716Z] [BOT] Total entries: 2838
   Timestamp: 2026-01-13T01:56:27.704Z
[2026-01-13T01:56:27.717Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T01:56:27.717Z] [BOT] Total attempts: 24
   Successful: 20
   Failed: 0
   Skipped: 4
[2026-01-13T01:56:27.717Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-13T01:56:27.717Z] [BOT] Total posts: 20
   Channels used: 10
   Top channels:
     1. #🤖・ai-jobs: 6 posts
     2. #🌉・san-francisco: 3 posts
     3. #🗽・new-york: 3 posts
     4. #💰・finance-jobs: 2 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-13T01:56:27.718Z] [BOT] [STATS] Channel stats saved
[2026-01-13T01:56:29.745Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2394) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*