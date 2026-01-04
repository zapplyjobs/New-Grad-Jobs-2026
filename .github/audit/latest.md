# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T05:17:06.471Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T05:16:11.930Z] ========================================
[2026-01-04T05:16:11.932Z] Discord Bot Execution Log
[2026-01-04T05:16:11.932Z] Environment: GitHub Actions
[2026-01-04T05:16:11.932Z] Node Version: v20.19.6
[2026-01-04T05:16:11.932Z] ========================================
[2026-01-04T05:16:11.932Z] Environment Variables Check:
[2026-01-04T05:16:11.932Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T05:16:11.933Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T05:16:11.933Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T05:16:11.933Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T05:16:11.933Z] 
Multi-Channel Configuration:
[2026-01-04T05:16:11.933Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T05:16:11.933Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T05:16:11.933Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T05:16:11.933Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T05:16:11.933Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T05:16:11.933Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T05:16:11.933Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T05:16:11.933Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T05:16:11.934Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T05:16:11.934Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T05:16:11.934Z] 
Data Files Check:
[2026-01-04T05:16:11.935Z] .github/data/new_jobs.json: ✅ Exists (10 items, 143240 bytes)
[2026-01-04T05:16:11.938Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 442990 bytes)
[2026-01-04T05:16:11.938Z] 
========================================
[2026-01-04T05:16:11.938Z] Starting Enhanced Discord Bot...
[2026-01-04T05:16:11.938Z] ========================================
[2026-01-04T05:16:12.472Z] [BOT] ✅ Loaded V2 database: 878 jobs
[2026-01-04T05:16:13.003Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T05:16:13.003Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T05:16:13.003Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T05:16:13.008Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T05:16:13.078Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T05:16:13.168Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T05:16:13.171Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T05:16:13.171Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T05:16:13.171Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T05:16:13.172Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T05:16:13.172Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T05:16:13.176Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-04T05:16:13.177Z] [BOT] 📍 [ROUTING] "Engineering Manager, Enterprise Foundations" @ anthropic
[2026-01-04T05:16:13.177Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T05:16:13.182Z] [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T05:16:13.368Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Enterprise Foundations @ anthropic in #💻・tech-jobs
[2026-01-04T05:16:13.368Z] [BOT] ✅ Industry: Engineering Manager, Enterprise Foundations @ anthropic
[2026-01-04T05:16:15.057Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Enterprise Foundations @ anthropic in #🌉・san-francisco
[2026-01-04T05:16:15.057Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T05:16:16.557Z] [BOT] 💾 Marked as posted: Engineering Manager, Enterprise Foundations @ anthropic (instance #1)
[2026-01-04T05:16:16.557Z] [BOT] 💾 BEFORE ARCHIVING: 879 jobs in database
[2026-01-04T05:16:16.558Z] [BOT] ✅ No jobs to archive (all 879 jobs within 7-day window)
[2026-01-04T05:16:16.568Z] [BOT] 💾 Saved posted_jobs.json: 879 active jobs
[2026-01-04T05:16:16.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:16:19.569Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-04T05:16:19.569Z] [BOT] 📍 [ROUTING] "Software Engineer, Labs" @ anthropic
[2026-01-04T05:16:19.569Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T05:16:19.757Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Labs @ anthropic in #🤖・ai-jobs
[2026-01-04T05:16:19.757Z] [BOT] ✅ Industry: Software Engineer, Labs @ anthropic
[2026-01-04T05:16:21.448Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Labs @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:16:22.948Z] [BOT] 💾 Marked as posted: Software Engineer, Labs @ anthropic (instance #1)
[2026-01-04T05:16:22.948Z] [BOT] 💾 BEFORE ARCHIVING: 880 jobs in database
[2026-01-04T05:16:22.949Z] [BOT] ✅ No jobs to archive (all 880 jobs within 7-day window)
[2026-01-04T05:16:22.954Z] [BOT] 💾 Saved posted_jobs.json: 880 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:16:22.955Z] [BOT] 📍 [ROUTING] "Director of Sales, Emerging & Scaled (New Business)" @ spotify
[2026-01-04T05:16:22.955Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T05:16:23.159Z] [BOT] ✅ Created forum post: 🏢 Director of Sales, Emerging & Scaled (New Business) @ spotify in #🤖・ai-jobs
  ✅ Industry: Director of Sales, Emerging & Scaled (New Business) @ spotify
[2026-01-04T05:16:24.968Z] [BOT] ✅ Created forum post: 🏢 Director of Sales, Emerging & Scaled (New Business) @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T05:16:26.468Z] [BOT] 💾 Marked as posted: Director of Sales, Emerging & Scaled (New Business) @ spotify (instance #1)
[2026-01-04T05:16:26.469Z] [BOT] 💾 BEFORE ARCHIVING: 881 jobs in database
[2026-01-04T05:16:26.469Z] [BOT] ✅ No jobs to archive (all 881 jobs within 7-day window)
[2026-01-04T05:16:26.475Z] [BOT] 💾 Saved posted_jobs.json: 881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:16:26.475Z] [BOT] 📍 [ROUTING] "Enterprise Support Engineer, AMER" @ retool
[2026-01-04T05:16:26.475Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T05:16:26.782Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Engineer, AMER @ retool in #🤖・ai-jobs
  ✅ Industry: Enterprise Support Engineer, AMER @ retool
[2026-01-04T05:16:28.458Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Engineer, AMER @ retool in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T05:16:29.958Z] [BOT] 💾 Marked as posted: Enterprise Support Engineer, AMER @ retool (instance #1)
[2026-01-04T05:16:29.958Z] [BOT] 💾 BEFORE ARCHIVING: 882 jobs in database
[2026-01-04T05:16:29.959Z] [BOT] ✅ No jobs to archive (all 882 jobs within 7-day window)
[2026-01-04T05:16:29.966Z] [BOT] 💾 Saved posted_jobs.json: 882 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:16:29.966Z] [BOT] 📍 [ROUTING] "UX Researcher" @ retool
[2026-01-04T05:16:29.967Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T05:16:30.145Z] [BOT] ✅ Created forum post: 🏢 UX Researcher @ retool in #🤖・ai-jobs
  ✅ Industry: UX Researcher @ retool
[2026-01-04T05:16:31.964Z] [BOT] ✅ Created forum post: 🏢 UX Researcher @ retool in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:16:33.464Z] [BOT] 💾 Marked as posted: UX Researcher @ retool (instance #1)
[2026-01-04T05:16:33.464Z] [BOT] 💾 BEFORE ARCHIVING: 883 jobs in database
[2026-01-04T05:16:33.465Z] [BOT] ✅ No jobs to archive (all 883 jobs within 7-day window)
[2026-01-04T05:16:33.472Z] [BOT] 💾 Saved posted_jobs.json: 883 active jobs
[2026-01-04T05:16:33.472Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:16:33.473Z] [BOT] 📍 [ROUTING] "Research Recruiting Sourcer" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T05:16:33.632Z] [BOT] ✅ Created forum post: 🏢 Research Recruiting Sourcer @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Recruiting Sourcer @ anthropic
[2026-01-04T05:16:35.439Z] [BOT] ✅ Created forum post: 🏢 Research Recruiting Sourcer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:16:36.941Z] [BOT] 💾 Marked as posted: Research Recruiting Sourcer @ anthropic (instance #1)
[2026-01-04T05:16:36.941Z] [BOT] 💾 BEFORE ARCHIVING: 884 jobs in database
[2026-01-04T05:16:36.942Z] [BOT] ✅ No jobs to archive (all 884 jobs within 7-day window)
[2026-01-04T05:16:36.949Z] [BOT] 💾 Saved posted_jobs.json: 884 active jobs
[2026-01-04T05:16:36.949Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:16:39.950Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-04T05:16:39.950Z] [BOT] 📍 [ROUTING] "Senior Financial Reporting and Technical Accountant" @ discord
   Category: FINANCE (matched: "finance")
[2026-01-04T05:16:39.950Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2026-01-04T05:16:40.162Z] [BOT] ✅ Created forum post: 🏢 Senior Financial Reporting and Technical Accountant @ discord in #💰・finance-jobs
  ✅ Industry: Senior Financial Reporting and Technical Accountant @ discord
[2026-01-04T05:16:42.071Z] [BOT] ✅ Created forum post: 🏢 Senior Financial Reporting and Technical Accountant @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:16:43.571Z] [BOT] 💾 Marked as posted: Senior Financial Reporting and Technical Accountant @ discord (instance #1)
[2026-01-04T05:16:43.571Z] [BOT] 💾 BEFORE ARCHIVING: 885 jobs in database
[2026-01-04T05:16:43.572Z] [BOT] ✅ No jobs to archive (all 885 jobs within 7-day window)
[2026-01-04T05:16:43.580Z] [BOT] 💾 Saved posted_jobs.json: 885 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:16:46.580Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-04T05:16:46.580Z] [BOT] 📍 [ROUTING] "Manager, Global Accounts Receivable" @ discord
[2026-01-04T05:16:46.581Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T05:16:46.869Z] [BOT] ✅ Created forum post: 🏢 Manager, Global Accounts Receivable @ discord in #💲・sales-jobs
  ✅ Industry: Manager, Global Accounts Receivable @ discord
[2026-01-04T05:16:48.843Z] [BOT] ✅ Created forum post: 🏢 Manager, Global Accounts Receivable @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:16:50.343Z] [BOT] 💾 Marked as posted: Manager, Global Accounts Receivable @ discord (instance #1)
[2026-01-04T05:16:50.343Z] [BOT] 💾 BEFORE ARCHIVING: 886 jobs in database
[2026-01-04T05:16:50.344Z] [BOT] ✅ No jobs to archive (all 886 jobs within 7-day window)
[2026-01-04T05:16:50.352Z] [BOT] 💾 Saved posted_jobs.json: 886 active jobs
[2026-01-04T05:16:50.353Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:16:50.353Z] [BOT] 📍 [ROUTING] "Vercel Development Representative, Majors" @ vercel
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T05:16:50.552Z] [BOT] ✅ Created forum post: 🏢 Vercel Development Representative, Majors @ vercel in #💲・sales-jobs
  ✅ Industry: Vercel Development Representative, Majors @ vercel
[2026-01-04T05:16:52.325Z] [BOT] ✅ Created forum post: 🏢 Vercel Development Representative, Majors @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:16:53.825Z] [BOT] 💾 Marked as posted: Vercel Development Representative, Majors @ vercel (instance #1)
[2026-01-04T05:16:53.825Z] [BOT] 💾 BEFORE ARCHIVING: 887 jobs in database
[2026-01-04T05:16:53.826Z] [BOT] ✅ No jobs to archive (all 887 jobs within 7-day window)
[2026-01-04T05:16:53.834Z] [BOT] 💾 Saved posted_jobs.json: 887 active jobs
[2026-01-04T05:16:53.834Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:16:56.834Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-04T05:16:56.835Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Data Science" @ figma
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-04T05:16:56.835Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch, nonTechMatch (using data-science)
[2026-01-04T05:16:57.211Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter, Data Science @ figma in #📈・JID_fb739488
  ✅ Industry: Technical Recruiter, Data Science @ figma
[2026-01-04T05:16:59.012Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter, Data Science @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:17:00.512Z] [BOT] 💾 Marked as posted: Technical Recruiter, Data Science @ figma (instance #1)
[2026-01-04T05:17:00.513Z] [BOT] 💾 BEFORE ARCHIVING: 888 jobs in database
[2026-01-04T05:17:00.514Z] [BOT] ✅ No jobs to archive (all 888 jobs within 7-day window)
[2026-01-04T05:17:00.521Z] [BOT] 💾 Saved posted_jobs.json: 888 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:17:03.521Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T05:17:03.521Z] [BOT] ⏭️  Skipping duplicate: JID_534316bd (posted within 7 days)
[2026-01-04T05:17:03.522Z] [BOT] ⏭️  Skipping duplicate: JID_c700fd53 (posted within 7 days)
[2026-01-04T05:17:03.522Z] [BOT] ⏭️  Skipping duplicate: JID_2c430fc0 (posted within 7 days)
[2026-01-04T05:17:03.522Z] [BOT] ⏭️  Skipping duplicate: JID_9a45918c (posted within 7 days)
[2026-01-04T05:17:03.522Z] [BOT] ⏭️  Skipping duplicate: JID_325a066b (posted within 7 days)
[2026-01-04T05:17:03.522Z] [BOT] ⏭️  Skipping duplicate: JID_6841d348 (posted within 7 days)
⏭️  Skipping duplicate: JID_74470633 (posted within 7 days)
⏭️  Skipping duplicate: JID_46f18007 (posted within 7 days)
[2026-01-04T05:17:03.522Z] [BOT] ⏭️  Skipping duplicate: JID_34a0370d (posted within 7 days)
[2026-01-04T05:17:03.523Z] [BOT] ⏭️  Skipping duplicate: JID_0d766a35 (posted within 7 days)
[2026-01-04T05:17:03.561Z] [BOT] ✅ Loaded pending queue: 411 total (391 pending, 20 enriched, 0 posted)
[2026-01-04T05:17:03.600Z] [BOT] ✅ Saved pending queue: 411 total (391 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-04T05:17:03.600Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T05:17:03.651Z] [BOT] 📂 Loaded 1779 existing routing entries
[2026-01-04T05:17:03.701Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T05:17:03.702Z] [BOT] Total entries: 1789
   Timestamp: 2026-01-04T05:17:03.694Z
[2026-01-04T05:17:03.702Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T05:17:03.702Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-04T05:17:03.702Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T05:17:03.703Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 8 posts
     2. #🤖・ai-jobs: 5 posts
[2026-01-04T05:17:03.703Z] [BOT] 3. #🗽・new-york: 2 posts
     4. #💲・sales-jobs: 2 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-04T05:17:03.703Z] [BOT] [STATS] Channel stats saved
[2026-01-04T05:17:05.719Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*