# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T05:30:33.688Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T05:29:36.260Z] ========================================
[2026-01-04T05:29:36.262Z] Discord Bot Execution Log
[2026-01-04T05:29:36.262Z] Environment: GitHub Actions
[2026-01-04T05:29:36.262Z] Node Version: v20.19.6
[2026-01-04T05:29:36.262Z] ========================================
[2026-01-04T05:29:36.262Z] Environment Variables Check:
[2026-01-04T05:29:36.262Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T05:29:36.262Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T05:29:36.262Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T05:29:36.262Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T05:29:36.262Z] 
Multi-Channel Configuration:
[2026-01-04T05:29:36.262Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T05:29:36.263Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T05:29:36.263Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T05:29:36.263Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T05:29:36.263Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T05:29:36.263Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T05:29:36.263Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T05:29:36.263Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T05:29:36.263Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T05:29:36.263Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T05:29:36.263Z] 
Data Files Check:
[2026-01-04T05:29:36.264Z] .github/data/new_jobs.json: ✅ Exists (10 items, 138292 bytes)
[2026-01-04T05:29:36.267Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 447969 bytes)
[2026-01-04T05:29:36.267Z] 
========================================
[2026-01-04T05:29:36.268Z] Starting Enhanced Discord Bot...
[2026-01-04T05:29:36.268Z] ========================================
[2026-01-04T05:29:36.775Z] [BOT] ✅ Loaded V2 database: 888 jobs
[2026-01-04T05:29:38.944Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T05:29:38.945Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T05:29:38.945Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T05:29:38.946Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T05:29:39.013Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T05:29:39.101Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T05:29:39.104Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T05:29:39.104Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T05:29:39.104Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T05:29:39.105Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T05:29:39.105Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T05:29:39.110Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-04T05:29:39.111Z] [BOT] 📍 [ROUTING] "Security Engineer, Operating Systems" @ anthropic
[2026-01-04T05:29:39.111Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T05:29:39.115Z] [BOT ERROR] (node:2342) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T05:29:39.294Z] [BOT] ✅ Created forum post: 🏢 Security Engineer, Operating Systems @ anthropic in #💻・tech-jobs
[2026-01-04T05:29:39.294Z] [BOT] ✅ Industry: Security Engineer, Operating Systems @ anthropic
[2026-01-04T05:29:41.118Z] [BOT] ✅ Created forum post: 🏢 Security Engineer, Operating Systems @ anthropic in #🌉・san-francisco
[2026-01-04T05:29:41.118Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T05:29:42.619Z] [BOT] 💾 Marked as posted: Security Engineer, Operating Systems @ anthropic (instance #1)
[2026-01-04T05:29:42.619Z] [BOT] 💾 BEFORE ARCHIVING: 889 jobs in database
[2026-01-04T05:29:42.620Z] [BOT] ✅ No jobs to archive (all 889 jobs within 7-day window)
[2026-01-04T05:29:42.629Z] [BOT] 💾 Saved posted_jobs.json: 889 active jobs
[2026-01-04T05:29:42.630Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:29:42.630Z] [BOT] 📍 [ROUTING] "Systems Integrity Security Architect" @ anthropic
[2026-01-04T05:29:42.630Z] [BOT] Category: TECH (matched: "security")
[2026-01-04T05:29:42.630Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T05:29:42.797Z] [BOT] ✅ Created forum post: 🏢 Systems Integrity Security Architect @ anthropic in #💻・tech-jobs
[2026-01-04T05:29:42.797Z] [BOT] ✅ Industry: Systems Integrity Security Architect @ anthropic
[2026-01-04T05:29:44.541Z] [BOT] ✅ Created forum post: 🏢 Systems Integrity Security Architect @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:29:46.042Z] [BOT] 💾 Marked as posted: Systems Integrity Security Architect @ anthropic (instance #1)
[2026-01-04T05:29:46.042Z] [BOT] 💾 BEFORE ARCHIVING: 890 jobs in database
[2026-01-04T05:29:46.042Z] [BOT] ✅ No jobs to archive (all 890 jobs within 7-day window)
[2026-01-04T05:29:46.048Z] [BOT] 💾 Saved posted_jobs.json: 890 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:29:49.049Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-04T05:29:49.050Z] [BOT] 📍 [ROUTING] "Corporate Communications Manager " @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T05:29:49.751Z] [BOT] ✅ Created forum post: 🏢 Corporate Communications Manager  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Corporate Communications Manager  @ anthropic
[2026-01-04T05:29:51.545Z] [BOT] ✅ Created forum post: 🏢 Corporate Communications Manager  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:29:53.046Z] [BOT] 💾 Marked as posted: Corporate Communications Manager  @ anthropic (instance #1)
[2026-01-04T05:29:53.046Z] [BOT] 💾 BEFORE ARCHIVING: 891 jobs in database
[2026-01-04T05:29:53.047Z] [BOT] ✅ No jobs to archive (all 891 jobs within 7-day window)
[2026-01-04T05:29:53.054Z] [BOT] 💾 Saved posted_jobs.json: 891 active jobs
[2026-01-04T05:29:53.054Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:29:53.054Z] [BOT] 📍 [ROUTING] "Developer Relations, MCP" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-04T05:29:53.054Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T05:29:53.213Z] [BOT] ✅ Created forum post: 🏢 Developer Relations, MCP @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Relations, MCP @ anthropic
[2026-01-04T05:29:54.908Z] [BOT] ✅ Created forum post: 🏢 Developer Relations, MCP @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:29:56.410Z] [BOT] 💾 Marked as posted: Developer Relations, MCP @ anthropic (instance #1)
[2026-01-04T05:29:56.410Z] [BOT] 💾 BEFORE ARCHIVING: 892 jobs in database
[2026-01-04T05:29:56.411Z] [BOT] ✅ No jobs to archive (all 892 jobs within 7-day window)
[2026-01-04T05:29:56.419Z] [BOT] 💾 Saved posted_jobs.json: 892 active jobs
[2026-01-04T05:29:56.419Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:29:56.420Z] [BOT] 📍 [ROUTING] "Manager, Sales Operations – Commissions" @ spotify
[2026-01-04T05:29:56.420Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T05:29:56.710Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Operations – Commissions @ spotify in #🤖・ai-jobs
[2026-01-04T05:29:56.711Z] [BOT] ✅ Industry: Manager, Sales Operations – Commissions @ spotify
[2026-01-04T05:29:58.381Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Operations – Commissions @ spotify in #🗽・new-york
[2026-01-04T05:29:58.382Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T05:29:59.883Z] [BOT] 💾 Marked as posted: Manager, Sales Operations – Commissions @ spotify (instance #1)
[2026-01-04T05:29:59.883Z] [BOT] 💾 BEFORE ARCHIVING: 893 jobs in database
[2026-01-04T05:29:59.884Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-04T05:29:59.891Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
[2026-01-04T05:29:59.891Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:30:02.892Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-04T05:30:02.893Z] [BOT] 📍 [ROUTING] "Technical Recruiter" @ figma
[2026-01-04T05:30:02.893Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-04T05:30:03.498Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter @ figma in #📁・JID_e938df7b
[2026-01-04T05:30:03.498Z] [BOT] ✅ Industry: Technical Recruiter @ figma
[2026-01-04T05:30:06.204Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter @ figma in #🌉・san-francisco
[2026-01-04T05:30:06.205Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T05:30:07.705Z] [BOT] 💾 Marked as posted: Technical Recruiter @ figma (instance #1)
[2026-01-04T05:30:07.705Z] [BOT] 💾 BEFORE ARCHIVING: 894 jobs in database
[2026-01-04T05:30:07.706Z] [BOT] ✅ No jobs to archive (all 894 jobs within 7-day window)
[2026-01-04T05:30:07.715Z] [BOT] 💾 Saved posted_jobs.json: 894 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:30:10.716Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-04T05:30:10.716Z] [BOT] 📍 [ROUTING] "Director of Performance Marketing" @ duolingo
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T05:30:11.032Z] [BOT] ✅ Created forum post: 🏢 Director of Performance Marketing @ duolingo in #📣・marketing-jobs
  ✅ Industry: Director of Performance Marketing @ duolingo
[2026-01-04T05:30:12.705Z] [BOT] ✅ Created forum post: 🏢 Director of Performance Marketing @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T05:30:14.205Z] [BOT] 💾 Marked as posted: Director of Performance Marketing @ duolingo (instance #1)
[2026-01-04T05:30:14.206Z] [BOT] 💾 BEFORE ARCHIVING: 895 jobs in database
[2026-01-04T05:30:14.206Z] [BOT] ✅ No jobs to archive (all 895 jobs within 7-day window)
[2026-01-04T05:30:14.217Z] [BOT] 💾 Saved posted_jobs.json: 895 active jobs
[2026-01-04T05:30:14.217Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:30:14.218Z] [BOT] 📍 [ROUTING] "Influencer Marketing, Intern" @ duolingo
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T05:30:14.396Z] [BOT] ✅ Created forum post: 🏢 Influencer Marketing, Intern @ duolingo in #📣・marketing-jobs
  ✅ Industry: Influencer Marketing, Intern @ duolingo
[2026-01-04T05:30:16.140Z] [BOT] ✅ Created forum post: 🏢 Influencer Marketing, Intern @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T05:30:17.642Z] [BOT] 💾 Marked as posted: Influencer Marketing, Intern @ duolingo (instance #1)
[2026-01-04T05:30:17.642Z] [BOT] 💾 BEFORE ARCHIVING: 896 jobs in database
[2026-01-04T05:30:17.642Z] [BOT] ✅ No jobs to archive (all 896 jobs within 7-day window)
[2026-01-04T05:30:17.650Z] [BOT] 💾 Saved posted_jobs.json: 896 active jobs
[2026-01-04T05:30:17.650Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:30:20.651Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-04T05:30:20.652Z] [BOT] 📍 [ROUTING] "Vercel Development Representative, Majors, v0" @ vercel
[2026-01-04T05:30:20.652Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T05:30:20.901Z] [BOT] ✅ Created forum post: 🏢 Vercel Development Representative, Majors, v0 @ vercel in #💲・sales-jobs
[2026-01-04T05:30:20.902Z] [BOT] ✅ Industry: Vercel Development Representative, Majors, v0 @ vercel
[2026-01-04T05:30:22.629Z] [BOT] ✅ Created forum post: 🏢 Vercel Development Representative, Majors, v0 @ vercel in #🌉・san-francisco
[2026-01-04T05:30:22.630Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T05:30:24.131Z] [BOT] 💾 Marked as posted: Vercel Development Representative, Majors, v0 @ vercel (instance #1)
[2026-01-04T05:30:24.131Z] [BOT] 💾 BEFORE ARCHIVING: 897 jobs in database
[2026-01-04T05:30:24.132Z] [BOT] ✅ No jobs to archive (all 897 jobs within 7-day window)
[2026-01-04T05:30:24.139Z] [BOT] 💾 Saved posted_jobs.json: 897 active jobs
[2026-01-04T05:30:24.139Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:30:24.139Z] [BOT] 📍 [ROUTING] "Microsoft GTM Partnership, Enterprise" @ anthropic
[2026-01-04T05:30:24.139Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T05:30:24.382Z] [BOT] ✅ Created forum post: 🏢 Microsoft GTM Partnership, Enterprise @ anthropic in #💲・sales-jobs
[2026-01-04T05:30:24.382Z] [BOT] ✅ Industry: Microsoft GTM Partnership, Enterprise @ anthropic
[2026-01-04T05:30:26.179Z] [BOT] ✅ Created forum post: 🏢 Microsoft GTM Partnership, Enterprise @ anthropic in #🌉・san-francisco
[2026-01-04T05:30:26.180Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T05:30:27.680Z] [BOT] 💾 Marked as posted: Microsoft GTM Partnership, Enterprise @ anthropic (instance #1)
[2026-01-04T05:30:27.681Z] [BOT] 💾 BEFORE ARCHIVING: 898 jobs in database
[2026-01-04T05:30:27.681Z] [BOT] ✅ No jobs to archive (all 898 jobs within 7-day window)
[2026-01-04T05:30:27.689Z] [BOT] 💾 Saved posted_jobs.json: 898 active jobs
[2026-01-04T05:30:27.689Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:30:30.689Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T05:30:30.689Z] [BOT] ⏭️  Skipping duplicate: JID_9f32d073 (posted within 7 days)
[2026-01-04T05:30:30.690Z] [BOT] ⏭️  Skipping duplicate: JID_1dcfc3bd (posted within 7 days)
[2026-01-04T05:30:30.690Z] [BOT] ⏭️  Skipping duplicate: JID_479f288f (posted within 7 days)
⏭️  Skipping duplicate: JID_c4b3a057 (posted within 7 days)
[2026-01-04T05:30:30.690Z] [BOT] ⏭️  Skipping duplicate: JID_e9d8a165 (posted within 7 days)
[2026-01-04T05:30:30.690Z] [BOT] ⏭️  Skipping duplicate: JID_91a40c48 (posted within 7 days)
[2026-01-04T05:30:30.690Z] [BOT] ⏭️  Skipping duplicate: JID_e0290d68 (posted within 7 days)
⏭️  Skipping duplicate: JID_21e304e2 (posted within 7 days)
⏭️  Skipping duplicate: JID_be985fce (posted within 7 days)
[2026-01-04T05:30:30.690Z] [BOT] ⏭️  Skipping duplicate: JID_55a5b826 (posted within 7 days)
[2026-01-04T05:30:30.726Z] [BOT] ✅ Loaded pending queue: 401 total (381 pending, 20 enriched, 0 posted)
[2026-01-04T05:30:30.763Z] [BOT] ✅ Saved pending queue: 401 total (381 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-04T05:30:30.763Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T05:30:30.811Z] [BOT] 📂 Loaded 1789 existing routing entries
[2026-01-04T05:30:30.860Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1799
   Timestamp: 2026-01-04T05:30:30.852Z
[2026-01-04T05:30:30.861Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T05:30:30.861Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-04T05:30:30.861Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T05:30:30.861Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 7 posts
[2026-01-04T05:30:30.861Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #🗽・new-york: 3 posts
     4. #💻・tech-jobs: 2 posts
     5. #📣・marketing-jobs: 2 posts
[2026-01-04T05:30:30.861Z] [BOT] [STATS] Channel stats saved
[2026-01-04T05:30:32.877Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2342) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*