# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T02:41:38.842Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T02:41:01.153Z] ========================================
[2026-01-13T02:41:01.155Z] Discord Bot Execution Log
[2026-01-13T02:41:01.155Z] Environment: GitHub Actions
[2026-01-13T02:41:01.155Z] Node Version: v20.19.6
[2026-01-13T02:41:01.155Z] ========================================
[2026-01-13T02:41:01.155Z] Environment Variables Check:
[2026-01-13T02:41:01.155Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T02:41:01.156Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T02:41:01.156Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T02:41:01.156Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T02:41:01.156Z] 
Multi-Channel Configuration:
[2026-01-13T02:41:01.156Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T02:41:01.156Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T02:41:01.156Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T02:41:01.156Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T02:41:01.156Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T02:41:01.156Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T02:41:01.156Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T02:41:01.156Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T02:41:01.157Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T02:41:01.157Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T02:41:01.157Z] 
Data Files Check:
[2026-01-13T02:41:01.157Z] .github/data/new_jobs.json: ✅ Exists (10 items, 67288 bytes)
[2026-01-13T02:41:01.160Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 345865 bytes)
[2026-01-13T02:41:01.160Z] 
========================================
[2026-01-13T02:41:01.160Z] Starting Enhanced Discord Bot...
[2026-01-13T02:41:01.161Z] ========================================
[2026-01-13T02:41:01.703Z] [BOT] ✅ Loaded V2 database: 655 jobs
[2026-01-13T02:41:02.666Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T02:41:02.666Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T02:41:02.667Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T02:41:02.778Z] [BOT] ✅ Loaded pending queue: 2691 total (2671 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Client Account Executive, Mid-Market Sales (B2C Services) at reddit
[2026-01-13T02:41:02.780Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T02:41:02.780Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-13T02:41:02.780Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-13T02:41:02.781Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-13T02:41:02.781Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-13T02:41:02.870Z] [BOT] ✅ Loaded pending queue: 2691 total (2671 pending, 20 enriched, 0 posted)
[2026-01-13T02:41:03.026Z] [BOT] ✅ Saved pending queue: 2684 total (2671 pending, 13 enriched, 0 posted)
🗑️ Removed 7 blacklisted jobs from pending queue
[2026-01-13T02:41:03.026Z] [BOT] 📋 After blacklist filter: 13 jobs (7 blacklisted)
📋 After data quality filter: 13 jobs (0 invalid)
[2026-01-13T02:41:03.027Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-13T02:41:03.027Z] [BOT] (5 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Senior Software Engineer, Android Test Engineering @ reddit: new york, chicago, san francisco, los angeles
   - Client Account Manager, Large Customer Sales (Retail) @ reddit: chicago, new york
   - Senior Client Account Manager, Large Customer Sales (CPG) @ reddit: chicago, new york
⏸️ Limiting to 10 jobs this run, 12 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T02:41:03.028Z] [BOT] 📌 Posting 8 jobs to #🤖・ai-jobs
[2026-01-13T02:41:03.030Z] [BOT] 📍 [ROUTING] "Client Account Executive, Mid-Market Sales (B2C Services)" @ reddit
[2026-01-13T02:41:03.030Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-13T02:41:03.035Z] [BOT ERROR] (node:2415) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T02:41:03.433Z] [BOT] ✅ Created forum post: 🏢 Client Account Executive, Mid-Market Sales (B2C Services) @ reddit in #🤖・ai-jobs
[2026-01-13T02:41:03.434Z] [BOT] ✅ Industry: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit
[2026-01-13T02:41:05.259Z] [BOT] ✅ Created forum post: 🏢 Client Account Executive, Mid-Market Sales (B2C Services) @ reddit in #🗽・new-york
[2026-01-13T02:41:05.259Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T02:41:06.760Z] [BOT] 💾 Marked as posted: Client Account Executive, Mid-Market Sales (B2C Services) @ reddit (instance #1)
[2026-01-13T02:41:06.761Z] [BOT] 💾 BEFORE ARCHIVING: 656 jobs in database
[2026-01-13T02:41:06.761Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T02:41:06.766Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-13T02:41:06.767Z] [BOT] ✅ Archiving complete: 3 archived, 653 active
[2026-01-13T02:41:06.773Z] [BOT] 💾 Saved posted_jobs.json: 653 active jobs
[2026-01-13T02:41:06.773Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T02:41:06.774Z] [BOT] 📍 [ROUTING] "Accounting Intern" @ coinbase
[2026-01-13T02:41:06.774Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T02:41:07.100Z] [BOT] ✅ Created forum post: 🏢 Accounting Intern @ coinbase in #🤖・ai-jobs
  ✅ Industry: Accounting Intern @ coinbase
[2026-01-13T02:41:08.798Z] [BOT] ✅ Created forum post: 🏢 Accounting Intern @ coinbase in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T02:41:10.299Z] [BOT] 💾 Marked as posted: Accounting Intern @ coinbase (instance #1)
💾 BEFORE ARCHIVING: 654 jobs in database
[2026-01-13T02:41:10.300Z] [BOT] ✅ No jobs to archive (all 654 jobs within 7-day window)
[2026-01-13T02:41:10.305Z] [BOT] 💾 Saved posted_jobs.json: 654 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T02:41:10.306Z] [BOT] 📍 [ROUTING] "Senior IT Support Engineer, Snoo Operations & Support (SOS)" @ reddit
[2026-01-13T02:41:10.306Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T02:41:10.636Z] [BOT] ✅ Created forum post: 🏢 Senior IT Support Engineer, Snoo Operations & Support (SOS) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior IT Support Engineer, Snoo Operations & Support (SOS) @ reddit
[2026-01-13T02:41:12.508Z] [BOT] ✅ Created forum post: 🏢 Senior IT Support Engineer, Snoo Operations & Support (SOS) @ reddit in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-13T02:41:14.010Z] [BOT] 💾 Marked as posted: Senior IT Support Engineer, Snoo Operations & Support (SOS) @ reddit (instance #1)
[2026-01-13T02:41:14.010Z] [BOT] 💾 BEFORE ARCHIVING: 655 jobs in database
[2026-01-13T02:41:14.011Z] [BOT] ✅ No jobs to archive (all 655 jobs within 7-day window)
[2026-01-13T02:41:14.017Z] [BOT] 💾 Saved posted_jobs.json: 655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T02:41:14.018Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Android Test Engineering" @ reddit
[2026-01-13T02:41:14.019Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T02:41:14.281Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Android Test Engineering @ reddit in #🤖・ai-jobs
[2026-01-13T02:41:14.281Z] [BOT] ✅ Industry: Senior Software Engineer, Android Test Engineering @ reddit
[2026-01-13T02:41:16.131Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Android Test Engineering @ reddit in #🗽・new-york
[2026-01-13T02:41:16.131Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T02:41:17.633Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Android Test Engineering @ reddit (instance #1)
[2026-01-13T02:41:17.633Z] [BOT] 💾 BEFORE ARCHIVING: 656 jobs in database
[2026-01-13T02:41:17.634Z] [BOT] ✅ No jobs to archive (all 656 jobs within 7-day window)
[2026-01-13T02:41:17.641Z] [BOT] 💾 Saved posted_jobs.json: 656 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T02:41:17.641Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Android Test Engineering @ reddit (instance #1)
[2026-01-13T02:41:17.641Z] [BOT] 💾 BEFORE ARCHIVING: 657 jobs in database
[2026-01-13T02:41:17.641Z] [BOT] ✅ No jobs to archive (all 657 jobs within 7-day window)
[2026-01-13T02:41:17.647Z] [BOT] 💾 Saved posted_jobs.json: 657 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T02:41:17.647Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Android Test Engineering @ reddit (instance #1)
[2026-01-13T02:41:17.648Z] [BOT] 💾 BEFORE ARCHIVING: 658 jobs in database
[2026-01-13T02:41:17.648Z] [BOT] ✅ No jobs to archive (all 658 jobs within 7-day window)
[2026-01-13T02:41:17.653Z] [BOT] 💾 Saved posted_jobs.json: 658 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T02:41:17.654Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Android Test Engineering @ reddit (instance #1)
💾 BEFORE ARCHIVING: 659 jobs in database
[2026-01-13T02:41:17.654Z] [BOT] ✅ No jobs to archive (all 659 jobs within 7-day window)
[2026-01-13T02:41:17.659Z] [BOT] 💾 Saved posted_jobs.json: 659 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T02:41:17.660Z] [BOT] 📍 [ROUTING] "Client Account Manager, Large Customer Sales (Retail)" @ reddit
[2026-01-13T02:41:17.660Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-13T02:41:17.862Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Large Customer Sales (Retail) @ reddit in #🤖・ai-jobs
[2026-01-13T02:41:17.863Z] [BOT] ✅ Industry: Client Account Manager, Large Customer Sales (Retail) @ reddit
[2026-01-13T02:41:19.596Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Large Customer Sales (Retail) @ reddit in #🌆・chicago
[2026-01-13T02:41:19.596Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-13T02:41:21.097Z] [BOT] 💾 Marked as posted: Client Account Manager, Large Customer Sales (Retail) @ reddit (instance #1)
[2026-01-13T02:41:21.098Z] [BOT] 💾 BEFORE ARCHIVING: 660 jobs in database
[2026-01-13T02:41:21.098Z] [BOT] ✅ No jobs to archive (all 660 jobs within 7-day window)
[2026-01-13T02:41:21.103Z] [BOT] 💾 Saved posted_jobs.json: 660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T02:41:21.103Z] [BOT] 💾 Marked as posted: Client Account Manager, Large Customer Sales (Retail) @ reddit (instance #1)
[2026-01-13T02:41:21.103Z] [BOT] 💾 BEFORE ARCHIVING: 661 jobs in database
[2026-01-13T02:41:21.104Z] [BOT] ✅ No jobs to archive (all 661 jobs within 7-day window)
[2026-01-13T02:41:21.109Z] [BOT] 💾 Saved posted_jobs.json: 661 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T02:41:21.110Z] [BOT] 📍 [ROUTING] "Counsel, Product & Platform Compliance" @ reddit
[2026-01-13T02:41:21.110Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T02:41:21.307Z] [BOT] ✅ Created forum post: 🏢 Counsel, Product & Platform Compliance @ reddit in #🤖・ai-jobs
[2026-01-13T02:41:21.308Z] [BOT] ✅ Industry: Counsel, Product & Platform Compliance @ reddit
[2026-01-13T02:41:23.072Z] [BOT] ✅ Created forum post: 🏢 Counsel, Product & Platform Compliance @ reddit in #🗽・new-york
[2026-01-13T02:41:23.072Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T02:41:24.573Z] [BOT] 💾 Marked as posted: Counsel, Product & Platform Compliance @ reddit (instance #1)
[2026-01-13T02:41:24.574Z] [BOT] 💾 BEFORE ARCHIVING: 662 jobs in database
[2026-01-13T02:41:24.574Z] [BOT] ✅ No jobs to archive (all 662 jobs within 7-day window)
[2026-01-13T02:41:24.580Z] [BOT] 💾 Saved posted_jobs.json: 662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T02:41:24.581Z] [BOT] 📍 [ROUTING] "Senior Client Account Manager, Large Customer Sales (CPG)" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-13T02:41:24.581Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-13T02:41:24.808Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (CPG) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Client Account Manager, Large Customer Sales (CPG) @ reddit
[2026-01-13T02:41:26.667Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (CPG) @ reddit in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-13T02:41:28.169Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Large Customer Sales (CPG) @ reddit (instance #1)
[2026-01-13T02:41:28.169Z] [BOT] 💾 BEFORE ARCHIVING: 663 jobs in database
[2026-01-13T02:41:28.170Z] [BOT] ✅ No jobs to archive (all 663 jobs within 7-day window)
[2026-01-13T02:41:28.177Z] [BOT] 💾 Saved posted_jobs.json: 663 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T02:41:28.177Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Large Customer Sales (CPG) @ reddit (instance #1)
💾 BEFORE ARCHIVING: 664 jobs in database
[2026-01-13T02:41:28.177Z] [BOT] ✅ No jobs to archive (all 664 jobs within 7-day window)
[2026-01-13T02:41:28.183Z] [BOT] 💾 Saved posted_jobs.json: 664 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T02:41:28.184Z] [BOT] 📍 [ROUTING] "Director, Global Sales Enablement" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-13T02:41:28.184Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T02:41:28.882Z] [BOT] ✅ Created forum post: 🏢 Director, Global Sales Enablement @ reddit in #🤖・ai-jobs
  ✅ Industry: Director, Global Sales Enablement @ reddit
[2026-01-13T02:41:30.611Z] [BOT] ✅ Created forum post: 🏢 Director, Global Sales Enablement @ reddit in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T02:41:32.112Z] [BOT] 💾 Marked as posted: Director, Global Sales Enablement @ reddit (instance #1)
[2026-01-13T02:41:32.112Z] [BOT] 💾 BEFORE ARCHIVING: 665 jobs in database
[2026-01-13T02:41:32.115Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (4 total in archive)
[2026-01-13T02:41:32.115Z] [BOT] ✅ Archiving complete: 1 archived, 664 active
[2026-01-13T02:41:32.120Z] [BOT] 💾 Saved posted_jobs.json: 664 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T02:41:35.121Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-13T02:41:35.121Z] [BOT] ⏭️  Skipping duplicate: JID_811cd046 (posted within 7 days)
[2026-01-13T02:41:35.121Z] [BOT] ⏭️  Skipping duplicate: JID_1a00b3ad (posted within 7 days)
⏭️  Skipping duplicate: JID_406a35ec (posted within 7 days)
[2026-01-13T02:41:35.122Z] [BOT] ⏭️  Skipping duplicate: JID_ebfd7f8f (posted within 7 days)
[2026-01-13T02:41:35.122Z] [BOT] ⏭️  Skipping duplicate: JID_db79e8be (posted within 7 days)
[2026-01-13T02:41:35.122Z] [BOT] ⏭️  Skipping duplicate: JID_98004585 (posted within 7 days)
⏭️  Skipping duplicate: JID_5304459e (posted within 7 days)
[2026-01-13T02:41:35.122Z] [BOT] ⏭️  Skipping duplicate: JID_27f782ab (posted within 7 days)
[2026-01-13T02:41:35.239Z] [BOT] ✅ Loaded pending queue: 2684 total (2671 pending, 13 enriched, 0 posted)
[2026-01-13T02:41:35.392Z] [BOT] ✅ Saved pending queue: 2684 total (2671 pending, 5 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-13T02:41:35.392Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T02:41:35.445Z] [BOT] 📂 Loaded 2838 existing routing entries
[2026-01-13T02:41:35.502Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 2846
[2026-01-13T02:41:35.502Z] [BOT] Timestamp: 2026-01-13T02:41:35.490Z
[2026-01-13T02:41:35.503Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T02:41:35.503Z] [BOT] Total attempts: 23
   Successful: 16
   Failed: 0
   Skipped: 7
[2026-01-13T02:41:35.503Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-13T02:41:35.503Z] [BOT] Total posts: 16
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 8 posts
     2. #🗽・new-york: 4 posts
     3. #🌆・chicago: 3 posts
[2026-01-13T02:41:35.503Z] [BOT] 4. #🌉・san-francisco: 1 posts
[2026-01-13T02:41:35.504Z] [BOT] [STATS] Channel stats saved
[2026-01-13T02:41:37.534Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2415) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*