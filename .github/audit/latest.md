# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T23:51:21.235Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T23:50:38.228Z] ========================================
[2026-01-12T23:50:38.230Z] Discord Bot Execution Log
[2026-01-12T23:50:38.230Z] Environment: GitHub Actions
[2026-01-12T23:50:38.230Z] Node Version: v20.19.6
[2026-01-12T23:50:38.230Z] ========================================
[2026-01-12T23:50:38.230Z] Environment Variables Check:
[2026-01-12T23:50:38.230Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T23:50:38.230Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T23:50:38.230Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T23:50:38.231Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T23:50:38.231Z] 
Multi-Channel Configuration:
[2026-01-12T23:50:38.231Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T23:50:38.231Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T23:50:38.231Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T23:50:38.231Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T23:50:38.231Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T23:50:38.231Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T23:50:38.231Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T23:50:38.231Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T23:50:38.231Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T23:50:38.231Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T23:50:38.232Z] 
Data Files Check:
[2026-01-12T23:50:38.233Z] .github/data/new_jobs.json: ✅ Exists (10 items, 187095 bytes)
[2026-01-12T23:50:38.235Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 334782 bytes)
[2026-01-12T23:50:38.236Z] 
========================================
[2026-01-12T23:50:38.236Z] Starting Enhanced Discord Bot...
[2026-01-12T23:50:38.236Z] ========================================
[2026-01-12T23:50:38.758Z] [BOT] ✅ Loaded V2 database: 626 jobs
[2026-01-12T23:50:39.566Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T23:50:39.566Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T23:50:39.567Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T23:50:39.673Z] [BOT] ✅ Loaded pending queue: 2667 total (2647 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engineering Manager, Claude Developer Platform at anthropic
[2026-01-12T23:50:39.676Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T23:50:39.676Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T23:50:39.677Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T23:50:39.677Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-12T23:50:39.678Z] [BOT] (12 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   -  Mid-Market Account Executive - PubSec @ samsara: boston, charleston, denver, baltimore, louisville, chicago, dallas, san antonio, salt lake, houston, texas
   - Account Executive, Mid Market (MST/PST) @ samsara: san francisco, ca, united states, phoenix, arizona, united states
⏸️ Limiting to 10 jobs this run, 12 deferred for next run
[2026-01-12T23:50:39.678Z] [BOT] 📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T23:50:39.681Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-12T23:50:39.682Z] [BOT] 📍 [ROUTING] "Engineering Manager, Claude Developer Platform" @ anthropic
[2026-01-12T23:50:39.682Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:50:39.686Z] [BOT ERROR] (node:2396) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T23:50:39.955Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Claude Developer Platform @ anthropic in #💻・tech-jobs
[2026-01-12T23:50:39.956Z] [BOT] ✅ Industry: Engineering Manager, Claude Developer Platform @ anthropic
[2026-01-12T23:50:41.707Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Claude Developer Platform @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T23:50:43.207Z] [BOT] 💾 Marked as posted: Engineering Manager, Claude Developer Platform @ anthropic (instance #1)
[2026-01-12T23:50:43.207Z] [BOT] 💾 BEFORE ARCHIVING: 627 jobs in database
[2026-01-12T23:50:43.208Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T23:50:43.210Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-12T23:50:43.210Z] [BOT] ✅ Archiving complete: 9 archived, 618 active
[2026-01-12T23:50:43.214Z] [BOT] 💾 Saved posted_jobs.json: 618 active jobs
[2026-01-12T23:50:43.214Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:50:43.215Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Claude Developer Platform (Backend)" @ anthropic
[2026-01-12T23:50:43.215Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:50:43.497Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Claude Developer Platform (Backend) @ anthropic in #💻・tech-jobs
[2026-01-12T23:50:43.497Z] [BOT] ✅ Industry: Staff Software Engineer, Claude Developer Platform (Backend) @ anthropic
[2026-01-12T23:50:45.186Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Claude Developer Platform (Backend) @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T23:50:46.686Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Claude Developer Platform (Backend) @ anthropic (instance #1)
[2026-01-12T23:50:46.686Z] [BOT] 💾 BEFORE ARCHIVING: 619 jobs in database
[2026-01-12T23:50:46.687Z] [BOT] ✅ No jobs to archive (all 619 jobs within 7-day window)
[2026-01-12T23:50:46.691Z] [BOT] 💾 Saved posted_jobs.json: 619 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T23:50:46.692Z] [BOT] 📍 [ROUTING] "MDM – Master Data Management - Parts Specialist" @ ORG_cb30a57b
[2026-01-12T23:50:46.692Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:50:46.907Z] [BOT] ✅ Created forum post: 🏢 MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b in #💻・tech-jobs
[2026-01-12T23:50:46.907Z] [BOT] ✅ Industry: MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b
[2026-01-12T23:50:48.614Z] [BOT] ✅ Created forum post: 🏢 MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-12T23:50:50.115Z] [BOT] 💾 Marked as posted: MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b (instance #1)
[2026-01-12T23:50:50.115Z] [BOT] 💾 BEFORE ARCHIVING: 620 jobs in database
[2026-01-12T23:50:50.116Z] [BOT] ✅ No jobs to archive (all 620 jobs within 7-day window)
[2026-01-12T23:50:50.124Z] [BOT] 💾 Saved posted_jobs.json: 620 active jobs
[2026-01-12T23:50:50.124Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:50:53.126Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-12T23:50:53.127Z] [BOT] 📍 [ROUTING] "Senior Client Partner, Large Customer Sales (Retail Beauty)" @ reddit
[2026-01-12T23:50:53.127Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T23:50:53.888Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit
[2026-01-12T23:50:55.729Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit in #🗽・new-york
[2026-01-12T23:50:55.729Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T23:50:57.230Z] [BOT] 💾 Marked as posted: Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit (instance #1)
[2026-01-12T23:50:57.230Z] [BOT] 💾 BEFORE ARCHIVING: 621 jobs in database
[2026-01-12T23:50:57.230Z] [BOT] ✅ No jobs to archive (all 621 jobs within 7-day window)
[2026-01-12T23:50:57.236Z] [BOT] 💾 Saved posted_jobs.json: 621 active jobs
[2026-01-12T23:50:57.236Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:50:57.237Z] [BOT] 📍 [ROUTING] "Senior Contracts Manager, Procurement and AI" @ airtable
[2026-01-12T23:50:57.237Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T23:50:57.407Z] [BOT] ✅ Created forum post: 🏢 Senior Contracts Manager, Procurement and AI @ airtable in #🤖・ai-jobs
[2026-01-12T23:50:57.408Z] [BOT] ✅ Industry: Senior Contracts Manager, Procurement and AI @ airtable
[2026-01-12T23:50:59.245Z] [BOT] ✅ Created forum post: 🏢 Senior Contracts Manager, Procurement and AI @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T23:51:00.745Z] [BOT] 💾 Marked as posted: Senior Contracts Manager, Procurement and AI @ airtable (instance #1)
[2026-01-12T23:51:00.745Z] [BOT] 💾 BEFORE ARCHIVING: 622 jobs in database
[2026-01-12T23:51:00.746Z] [BOT] ✅ No jobs to archive (all 622 jobs within 7-day window)
[2026-01-12T23:51:00.751Z] [BOT] 💾 Saved posted_jobs.json: 622 active jobs
[2026-01-12T23:51:00.751Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:51:03.753Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-12T23:51:03.753Z] [BOT] 📍 [ROUTING] " Mid-Market Account Executive - PubSec" @ samsara
   Category: SALES (matched: "sales")
[2026-01-12T23:51:03.753Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T23:51:03.971Z] [BOT] ✅ Created forum post: 🏢  Mid-Market Account Executive - PubSec @ samsara in #💲・sales-jobs
  ✅ Industry:  Mid-Market Account Executive - PubSec @ samsara
[2026-01-12T23:51:06.400Z] [BOT] ✅ Created forum post: 🏢  Mid-Market Account Executive - PubSec @ samsara in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-12T23:51:07.900Z] [BOT] 💾 Marked as posted:  Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-12T23:51:07.901Z] [BOT] 💾 BEFORE ARCHIVING: 623 jobs in database
[2026-01-12T23:51:07.901Z] [BOT] ✅ No jobs to archive (all 623 jobs within 7-day window)
[2026-01-12T23:51:07.907Z] [BOT] 💾 Saved posted_jobs.json: 623 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T23:51:07.907Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-12T23:51:07.907Z] [BOT] 💾 BEFORE ARCHIVING: 624 jobs in database
[2026-01-12T23:51:07.908Z] [BOT] ✅ No jobs to archive (all 624 jobs within 7-day window)
[2026-01-12T23:51:07.913Z] [BOT] 💾 Saved posted_jobs.json: 624 active jobs
[2026-01-12T23:51:07.913Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-12T23:51:07.913Z] [BOT] 💾 BEFORE ARCHIVING: 625 jobs in database
[2026-01-12T23:51:07.913Z] [BOT] ✅ No jobs to archive (all 625 jobs within 7-day window)
[2026-01-12T23:51:07.918Z] [BOT] 💾 Saved posted_jobs.json: 625 active jobs
[2026-01-12T23:51:07.918Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:51:07.918Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 626 jobs in database
[2026-01-12T23:51:07.919Z] [BOT] ✅ No jobs to archive (all 626 jobs within 7-day window)
[2026-01-12T23:51:07.924Z] [BOT] 💾 Saved posted_jobs.json: 626 active jobs
[2026-01-12T23:51:07.924Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:51:07.924Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 627 jobs in database
[2026-01-12T23:51:07.924Z] [BOT] ✅ No jobs to archive (all 627 jobs within 7-day window)
[2026-01-12T23:51:07.929Z] [BOT] 💾 Saved posted_jobs.json: 627 active jobs
[2026-01-12T23:51:07.929Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 628 jobs in database
[2026-01-12T23:51:07.929Z] [BOT] ✅ No jobs to archive (all 628 jobs within 7-day window)
[2026-01-12T23:51:07.933Z] [BOT] 💾 Saved posted_jobs.json: 628 active jobs
[2026-01-12T23:51:07.933Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 629 jobs in database
[2026-01-12T23:51:07.934Z] [BOT] ✅ No jobs to archive (all 629 jobs within 7-day window)
[2026-01-12T23:51:07.938Z] [BOT] 💾 Saved posted_jobs.json: 629 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T23:51:07.938Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 630 jobs in database
[2026-01-12T23:51:07.939Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-12T23:51:07.943Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-12T23:51:07.943Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:51:07.943Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-12T23:51:07.943Z] [BOT] 💾 BEFORE ARCHIVING: 631 jobs in database
[2026-01-12T23:51:07.944Z] [BOT] ✅ No jobs to archive (all 631 jobs within 7-day window)
[2026-01-12T23:51:07.947Z] [BOT] 💾 Saved posted_jobs.json: 631 active jobs
[2026-01-12T23:51:07.948Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 632 jobs in database
[2026-01-12T23:51:07.948Z] [BOT] ✅ No jobs to archive (all 632 jobs within 7-day window)
[2026-01-12T23:51:07.952Z] [BOT] 💾 Saved posted_jobs.json: 632 active jobs
[2026-01-12T23:51:07.953Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 633 jobs in database
[2026-01-12T23:51:07.953Z] [BOT] ✅ No jobs to archive (all 633 jobs within 7-day window)
[2026-01-12T23:51:07.957Z] [BOT] 💾 Saved posted_jobs.json: 633 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T23:51:07.957Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market (MST/PST)" @ samsara
[2026-01-12T23:51:07.957Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T23:51:08.129Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market (MST/PST) @ samsara in #💲・sales-jobs
  ✅ Industry: Account Executive, Mid Market (MST/PST) @ samsara
[2026-01-12T23:51:09.884Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market (MST/PST) @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T23:51:11.387Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market (MST/PST) @ samsara (instance #1)
[2026-01-12T23:51:11.387Z] [BOT] 💾 BEFORE ARCHIVING: 634 jobs in database
[2026-01-12T23:51:11.388Z] [BOT] ✅ No jobs to archive (all 634 jobs within 7-day window)
[2026-01-12T23:51:11.393Z] [BOT] 💾 Saved posted_jobs.json: 634 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T23:51:11.393Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market (MST/PST) @ samsara (instance #1)
💾 BEFORE ARCHIVING: 635 jobs in database
[2026-01-12T23:51:11.393Z] [BOT] ✅ No jobs to archive (all 635 jobs within 7-day window)
[2026-01-12T23:51:11.398Z] [BOT] 💾 Saved posted_jobs.json: 635 active jobs
[2026-01-12T23:51:11.398Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:51:11.398Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market (EST/CST)" @ samsara
   Category: SALES (matched: "sales")
[2026-01-12T23:51:11.398Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T23:51:11.628Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market (EST/CST) @ samsara in #💲・sales-jobs
  ✅ Industry: Account Executive, Mid Market (EST/CST) @ samsara
[2026-01-12T23:51:13.360Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market (EST/CST) @ samsara in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-12T23:51:14.861Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market (EST/CST) @ samsara (instance #1)
[2026-01-12T23:51:14.861Z] [BOT] 💾 BEFORE ARCHIVING: 636 jobs in database
[2026-01-12T23:51:14.862Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2026-01-12T23:51:14.868Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
[2026-01-12T23:51:14.868Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Account Executive, Mid Market (EST/CST) @ samsara (instance #1)
[2026-01-12T23:51:14.868Z] [BOT] 💾 BEFORE ARCHIVING: 637 jobs in database
[2026-01-12T23:51:14.868Z] [BOT] ✅ No jobs to archive (all 637 jobs within 7-day window)
[2026-01-12T23:51:14.873Z] [BOT] 💾 Saved posted_jobs.json: 637 active jobs
[2026-01-12T23:51:14.873Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:51:17.874Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-12T23:51:17.874Z] [BOT] ⏭️  Skipping duplicate: JID_a88e8770 (posted within 7 days)
[2026-01-12T23:51:17.874Z] [BOT] ⏭️  Skipping duplicate: JID_c37304c6 (posted within 7 days)
⏭️  Skipping duplicate: JID_61d9ceb5 (posted within 7 days)
[2026-01-12T23:51:17.875Z] [BOT] ⏭️  Skipping duplicate: JID_efed3126 (posted within 7 days)
[2026-01-12T23:51:17.875Z] [BOT] ⏭️  Skipping duplicate: JID_a1205612 (posted within 7 days)
[2026-01-12T23:51:17.875Z] [BOT] ⏭️  Skipping duplicate: JID_7c2dc632 (posted within 7 days)
[2026-01-12T23:51:17.875Z] [BOT] ⏭️  Skipping duplicate: JID_d4aacde2 (posted within 7 days)
⏭️  Skipping duplicate: JID_b66c3f15 (posted within 7 days)
[2026-01-12T23:51:18.004Z] [BOT] ✅ Loaded pending queue: 2667 total (2647 pending, 20 enriched, 0 posted)
[2026-01-12T23:51:18.156Z] [BOT] ✅ Saved pending queue: 2667 total (2647 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T23:51:18.207Z] [BOT] 📂 Loaded 2790 existing routing entries
[2026-01-12T23:51:18.262Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
[2026-01-12T23:51:18.262Z] [BOT] Total entries: 2798
   Timestamp: 2026-01-12T23:51:18.250Z
[2026-01-12T23:51:18.263Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-12T23:51:18.263Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T23:51:18.263Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 8
   Top channels:
[2026-01-12T23:51:18.263Z] [BOT] 1. #🌉・san-francisco: 4 posts
     2. #💻・tech-jobs: 3 posts
     3. #💲・sales-jobs: 3 posts
     4. #🤖・ai-jobs: 2 posts
     5. #💻・remote-usa: 1 posts
[2026-01-12T23:51:18.263Z] [BOT] [STATS] Channel stats saved
[2026-01-12T23:51:20.289Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2396) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*