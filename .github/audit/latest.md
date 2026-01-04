# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T01:32:53.448Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T01:31:54.544Z] ========================================
[2026-01-04T01:31:54.546Z] Discord Bot Execution Log
[2026-01-04T01:31:54.546Z] Environment: GitHub Actions
[2026-01-04T01:31:54.546Z] Node Version: v20.19.6
[2026-01-04T01:31:54.546Z] ========================================
[2026-01-04T01:31:54.546Z] Environment Variables Check:
[2026-01-04T01:31:54.546Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T01:31:54.546Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T01:31:54.546Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T01:31:54.546Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T01:31:54.547Z] 
Multi-Channel Configuration:
[2026-01-04T01:31:54.547Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T01:31:54.547Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T01:31:54.547Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T01:31:54.547Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T01:31:54.547Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T01:31:54.547Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T01:31:54.547Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T01:31:54.547Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T01:31:54.547Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T01:31:54.547Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T01:31:54.547Z] 
Data Files Check:
[2026-01-04T01:31:54.549Z] .github/data/new_jobs.json: ✅ Exists (10 items, 144847 bytes)
[2026-01-04T01:31:54.552Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 432522 bytes)
[2026-01-04T01:31:54.552Z] 
========================================
[2026-01-04T01:31:54.552Z] Starting Enhanced Discord Bot...
[2026-01-04T01:31:54.552Z] ========================================
[2026-01-04T01:31:55.084Z] [BOT] ✅ Loaded V2 database: 857 jobs
[2026-01-04T01:31:55.980Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T01:31:55.981Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T01:31:55.981Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T01:31:55.982Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T01:31:56.053Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T01:31:56.141Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T01:31:56.144Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T01:31:56.144Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T01:31:56.144Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T01:31:56.145Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T01:31:56.145Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T01:31:56.150Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-04T01:31:56.151Z] [BOT] 📍 [ROUTING] "Support Specialist I (Remote)" @ brex
[2026-01-04T01:31:56.151Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T01:31:56.155Z] [BOT ERROR] (node:2339) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T01:31:56.455Z] [BOT] ✅ Created forum post: 🏢 Support Specialist I (Remote) @ brex in #💲・sales-jobs
[2026-01-04T01:31:56.455Z] [BOT] ✅ Industry: Support Specialist I (Remote) @ brex
[2026-01-04T01:31:58.303Z] [BOT] ✅ Created forum post: 🏢 Support Specialist I (Remote) @ brex in #💻・remote-usa
[2026-01-04T01:31:58.303Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-04T01:31:59.804Z] [BOT] 💾 Marked as posted: Support Specialist I (Remote) @ brex (instance #1)
[2026-01-04T01:31:59.804Z] [BOT] 💾 BEFORE ARCHIVING: 858 jobs in database
[2026-01-04T01:31:59.805Z] [BOT] ✅ No jobs to archive (all 858 jobs within 7-day window)
[2026-01-04T01:31:59.819Z] [BOT] 💾 Saved posted_jobs.json: 858 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T01:31:59.819Z] [BOT] 📍 [ROUTING] "Tax Director" @ brex
[2026-01-04T01:31:59.819Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T01:32:00.203Z] [BOT] ✅ Created forum post: 🏢 Tax Director @ brex in #💲・sales-jobs
  ✅ Industry: Tax Director @ brex
[2026-01-04T01:32:02.067Z] [BOT] ✅ Created forum post: 🏢 Tax Director @ brex in #🌉・san-francisco
[2026-01-04T01:32:02.067Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T01:32:03.568Z] [BOT] 💾 Marked as posted: Tax Director @ brex (instance #1)
[2026-01-04T01:32:03.568Z] [BOT] 💾 BEFORE ARCHIVING: 859 jobs in database
[2026-01-04T01:32:03.568Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-04T01:32:03.574Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-04T01:32:03.575Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T01:32:03.575Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Partnerships & Alliances" @ anthropic
[2026-01-04T01:32:03.575Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T01:32:03.792Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Partnerships & Alliances @ anthropic in #💲・sales-jobs
[2026-01-04T01:32:03.793Z] [BOT] ✅ Industry: Commercial Counsel, Partnerships & Alliances @ anthropic
[2026-01-04T01:32:05.564Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Partnerships & Alliances @ anthropic in #🌉・san-francisco
[2026-01-04T01:32:05.564Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T01:32:07.065Z] [BOT] 💾 Marked as posted: Commercial Counsel, Partnerships & Alliances @ anthropic (instance #1)
[2026-01-04T01:32:07.065Z] [BOT] 💾 BEFORE ARCHIVING: 860 jobs in database
[2026-01-04T01:32:07.066Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-04T01:32:07.072Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T01:32:10.073Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-04T01:32:10.073Z] [BOT] 📍 [ROUTING] "Fullstack Engineer - Subscriptions" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T01:32:10.073Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T01:32:10.332Z] [BOT] ✅ Created forum post: 🏢 Fullstack Engineer - Subscriptions @ spotify in #🤖・ai-jobs
[2026-01-04T01:32:10.332Z] [BOT] ✅ Industry: Fullstack Engineer - Subscriptions @ spotify
[2026-01-04T01:32:12.016Z] [BOT] ✅ Created forum post: 🏢 Fullstack Engineer - Subscriptions @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T01:32:13.516Z] [BOT] 💾 Marked as posted: Fullstack Engineer - Subscriptions @ spotify (instance #1)
[2026-01-04T01:32:13.516Z] [BOT] 💾 BEFORE ARCHIVING: 861 jobs in database
[2026-01-04T01:32:13.517Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-04T01:32:13.524Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T01:32:16.525Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-04T01:32:16.525Z] [BOT] 📍 [ROUTING] "Product Manager, Platform Developer Experiences" @ anthropic
[2026-01-04T01:32:16.525Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-04T01:32:16.957Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Platform Developer Experiences @ anthropic in #💻・tech-jobs
  ✅ Industry: Product Manager, Platform Developer Experiences @ anthropic
[2026-01-04T01:32:18.884Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Platform Developer Experiences @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T01:32:20.385Z] [BOT] 💾 Marked as posted: Product Manager, Platform Developer Experiences @ anthropic (instance #1)
[2026-01-04T01:32:20.385Z] [BOT] 💾 BEFORE ARCHIVING: 862 jobs in database
[2026-01-04T01:32:20.386Z] [BOT] ✅ No jobs to archive (all 862 jobs within 7-day window)
[2026-01-04T01:32:20.393Z] [BOT] 💾 Saved posted_jobs.json: 862 active jobs
[2026-01-04T01:32:20.393Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T01:32:20.393Z] [BOT] 📍 [ROUTING] "Lead Product Manager, Developer Services" @ anthropic
[2026-01-04T01:32:20.393Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-04T01:32:20.768Z] [BOT] ✅ Created forum post: 🏢 Lead Product Manager, Developer Services @ anthropic in #💻・tech-jobs
  ✅ Industry: Lead Product Manager, Developer Services @ anthropic
[2026-01-04T01:32:22.506Z] [BOT] ✅ Created forum post: 🏢 Lead Product Manager, Developer Services @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T01:32:24.007Z] [BOT] 💾 Marked as posted: Lead Product Manager, Developer Services @ anthropic (instance #1)
[2026-01-04T01:32:24.007Z] [BOT] 💾 BEFORE ARCHIVING: 863 jobs in database
[2026-01-04T01:32:24.008Z] [BOT] ✅ No jobs to archive (all 863 jobs within 7-day window)
[2026-01-04T01:32:24.014Z] [BOT] 💾 Saved posted_jobs.json: 863 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T01:32:24.015Z] [BOT] 📍 [ROUTING] "Software Engineer, Android" @ anthropic
[2026-01-04T01:32:24.015Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T01:32:24.231Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Android @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Android @ anthropic
[2026-01-04T01:32:26.353Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Android @ anthropic in #🌉・san-francisco
[2026-01-04T01:32:26.353Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T01:32:27.853Z] [BOT] 💾 Marked as posted: Software Engineer, Android @ anthropic (instance #1)
[2026-01-04T01:32:27.854Z] [BOT] 💾 BEFORE ARCHIVING: 864 jobs in database
[2026-01-04T01:32:27.854Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-04T01:32:27.862Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-04T01:32:27.862Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T01:32:30.863Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-04T01:32:30.863Z] [BOT] 📍 [ROUTING] "Senior Manager, Tax Operations, Provision & Compliance" @ anthropic
[2026-01-04T01:32:30.863Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-04T01:32:31.134Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Tax Operations, Provision & Compliance @ anthropic in #💰・finance-jobs
[2026-01-04T01:32:31.134Z] [BOT] ✅ Industry: Senior Manager, Tax Operations, Provision & Compliance @ anthropic
[2026-01-04T01:32:33.002Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Tax Operations, Provision & Compliance @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T01:32:34.503Z] [BOT] 💾 Marked as posted: Senior Manager, Tax Operations, Provision & Compliance @ anthropic (instance #1)
[2026-01-04T01:32:34.503Z] [BOT] 💾 BEFORE ARCHIVING: 865 jobs in database
[2026-01-04T01:32:34.503Z] [BOT] ✅ No jobs to archive (all 865 jobs within 7-day window)
[2026-01-04T01:32:34.510Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
[2026-01-04T01:32:34.510Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T01:32:37.510Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T01:32:37.510Z] [BOT] 📍 [ROUTING] "Policy Communications Manager" @ anthropic
[2026-01-04T01:32:37.511Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T01:32:37.711Z] [BOT] ✅ Created forum post: 🏢 Policy Communications Manager @ anthropic in #📣・marketing-jobs
  ✅ Industry: Policy Communications Manager @ anthropic
[2026-01-04T01:32:39.504Z] [BOT] ✅ Created forum post: 🏢 Policy Communications Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T01:32:41.005Z] [BOT] 💾 Marked as posted: Policy Communications Manager @ anthropic (instance #1)
[2026-01-04T01:32:41.005Z] [BOT] 💾 BEFORE ARCHIVING: 866 jobs in database
[2026-01-04T01:32:41.006Z] [BOT] ✅ No jobs to archive (all 866 jobs within 7-day window)
[2026-01-04T01:32:41.013Z] [BOT] 💾 Saved posted_jobs.json: 866 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T01:32:44.014Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-04T01:32:44.014Z] [BOT] 📍 [ROUTING] "Recruiter, Marketing" @ anthropic
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-04T01:32:44.325Z] [BOT] ✅ Created forum post: 🏢 Recruiter, Marketing @ anthropic in #📁・JID_e938df7b
  ✅ Industry: Recruiter, Marketing @ anthropic
[2026-01-04T01:32:45.966Z] [BOT ERROR] ❌ Error posting job Recruiter, Marketing: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Recruiter, Marketing @ anthropic',
      auto_archive_duration: 1440,
      rate_limit_per_user: undefined,
      applied_tags: undefined,
      message: [Object]
    }
  },
  rawError: { message: 'Maximum number of active threads reached', code: 160006 },
  code: 160006,
  status: 400,
  method: 'POST',
  url: 'https://discord.com/api/v10/channels/CH_fac6befb/threads'
}
[2026-01-04T01:32:45.966Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T01:32:47.467Z] [BOT] 💾 Marked as posted: Recruiter, Marketing @ anthropic (instance #1)
[2026-01-04T01:32:47.468Z] [BOT] 💾 BEFORE ARCHIVING: 867 jobs in database
[2026-01-04T01:32:47.468Z] [BOT] ✅ No jobs to archive (all 867 jobs within 7-day window)
[2026-01-04T01:32:47.475Z] [BOT] 💾 Saved posted_jobs.json: 867 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T01:32:50.476Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T01:32:50.476Z] [BOT] ⏭️  Skipping duplicate: JID_89b48b67 (posted within 7 days)
[2026-01-04T01:32:50.477Z] [BOT] ⏭️  Skipping duplicate: JID_7fbd3e53 (posted within 7 days)
[2026-01-04T01:32:50.477Z] [BOT] ⏭️  Skipping duplicate: JID_5a7a02bf (posted within 7 days)
[2026-01-04T01:32:50.477Z] [BOT] ⏭️  Skipping duplicate: JID_70dfe10b (posted within 7 days)
[2026-01-04T01:32:50.477Z] [BOT] ⏭️  Skipping duplicate: JID_29f8bf58 (posted within 7 days)
⏭️  Skipping duplicate: JID_979f27ac (posted within 7 days)
[2026-01-04T01:32:50.477Z] [BOT] ⏭️  Skipping duplicate: JID_52319a13 (posted within 7 days)
[2026-01-04T01:32:50.477Z] [BOT] ⏭️  Skipping duplicate: JID_cdbf504d (posted within 7 days)
[2026-01-04T01:32:50.477Z] [BOT] ⏭️  Skipping duplicate: JID_15772c96 (posted within 7 days)
[2026-01-04T01:32:50.478Z] [BOT] ⏭️  Skipping duplicate: JID_18e6eb79 (posted within 7 days)
[2026-01-04T01:32:50.517Z] [BOT] ✅ Loaded pending queue: 433 total (413 pending, 20 enriched, 0 posted)
[2026-01-04T01:32:50.558Z] [BOT] ✅ Saved pending queue: 433 total (413 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-04T01:32:50.558Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T01:32:50.608Z] [BOT] 📂 Loaded 1759 existing routing entries
[2026-01-04T01:32:50.657Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T01:32:50.657Z] [BOT] Total entries: 1769
   Timestamp: 2026-01-04T01:32:50.649Z
[2026-01-04T01:32:50.658Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T01:32:50.658Z] [BOT] Total attempts: 20
   Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-04T01:32:50.658Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T01:32:50.658Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 9
   Top channels:
     1. #🌉・san-francisco: 7 posts
[2026-01-04T01:32:50.658Z] [BOT] 2. #💲・sales-jobs: 3 posts
     3. #💻・tech-jobs: 3 posts
     4. #💻・remote-usa: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-04T01:32:50.659Z] [BOT] [STATS] Channel stats saved
[2026-01-04T01:32:52.674Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2339) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Recruiter, Marketing: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*