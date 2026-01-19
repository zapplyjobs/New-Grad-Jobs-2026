# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T01:21:25.617Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T01:20:31.771Z] ========================================
[2026-01-19T01:20:31.773Z] Discord Bot Execution Log
[2026-01-19T01:20:31.773Z] Environment: GitHub Actions
[2026-01-19T01:20:31.773Z] Node Version: v20.19.6
[2026-01-19T01:20:31.773Z] ========================================
[2026-01-19T01:20:31.773Z] Environment Variables Check:
[2026-01-19T01:20:31.773Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T01:20:31.773Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T01:20:31.773Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T01:20:31.773Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T01:20:31.773Z] 
Multi-Channel Configuration:
[2026-01-19T01:20:31.773Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T01:20:31.774Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T01:20:31.774Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T01:20:31.774Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T01:20:31.774Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T01:20:31.774Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T01:20:31.774Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T01:20:31.774Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T01:20:31.774Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T01:20:31.774Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T01:20:31.774Z] 
Data Files Check:
[2026-01-19T01:20:31.775Z] .github/data/new_jobs.json: ✅ Exists (10 items, 98086 bytes)
[2026-01-19T01:20:31.785Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1534198 bytes)
[2026-01-19T01:20:31.785Z] 
========================================
[2026-01-19T01:20:31.785Z] Starting Enhanced Discord Bot...
[2026-01-19T01:20:31.785Z] ========================================
[2026-01-19T01:20:32.307Z] [BOT] ✅ Loaded V2 database: 2825 jobs
[2026-01-19T01:20:32.875Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T01:20:32.875Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T01:20:32.876Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T01:20:33.024Z] [BOT] ✅ Loaded pending queue: 2832 total (2812 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineering Manager at discord
[2026-01-19T01:20:33.029Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T01:20:33.030Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T01:20:33.030Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T01:20:33.031Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-19T01:20:33.031Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Mid Market @ brex: seattle, washington, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-19T01:20:33.031Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T01:20:33.036Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-19T01:20:33.036Z] [BOT] 📍 [ROUTING] "Data Engineering Manager" @ discord
[2026-01-19T01:20:33.036Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T01:20:33.041Z] [BOT ERROR] (node:2513) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T01:20:33.272Z] [BOT ERROR] ❌ Error posting job Data Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:866:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Data Engineering Manager @ discord',
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
  url: 'https://discord.com/api/v10/channels/CH_36e7e449/threads'
}
[2026-01-19T01:20:33.272Z] [BOT] ❌ Industry post failed: Data Engineering Manager
⚠️  Channel full error count: 1/5
[2026-01-19T01:20:34.774Z] [BOT] 📍 [ROUTING] "Business Development Representative - Backstage" @ spotify
   Category: AI (matched: "artificial intelligence")
[2026-01-19T01:20:34.774Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T01:20:35.015Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative - Backstage @ spotify in #🤖・ai-jobs
[2026-01-19T01:20:35.015Z] [BOT] ✅ Industry: Business Development Representative - Backstage @ spotify
[2026-01-19T01:20:36.710Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative - Backstage @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T01:20:38.211Z] [BOT] 💾 Marked as posted: Business Development Representative - Backstage @ spotify (instance #1)
[2026-01-19T01:20:38.211Z] [BOT] 💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-19T01:20:38.213Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-19T01:20:38.233Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T01:20:38.234Z] [BOT] 📍 [ROUTING] "Product Engineer, Applied AI, Digital Natives Business" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T01:20:38.435Z] [BOT] ✅ Created forum post: 🏢 Product Engineer, Applied AI, Digital Natives Business @ anthropic in #🤖・ai-jobs
[2026-01-19T01:20:38.435Z] [BOT] ✅ Industry: Product Engineer, Applied AI, Digital Natives Business @ anthropic
[2026-01-19T01:20:40.195Z] [BOT] ✅ Created forum post: 🏢 Product Engineer, Applied AI, Digital Natives Business @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T01:20:41.696Z] [BOT] 💾 Marked as posted: Product Engineer, Applied AI, Digital Natives Business @ anthropic (instance #1)
[2026-01-19T01:20:41.696Z] [BOT] 💾 BEFORE ARCHIVING: 2827 jobs in database
[2026-01-19T01:20:41.698Z] [BOT] ✅ No jobs to archive (all 2827 jobs within 7-day window)
[2026-01-19T01:20:41.717Z] [BOT] 💾 Saved posted_jobs.json: 2827 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T01:20:44.718Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-19T01:20:44.718Z] [BOT] 📍 [ROUTING] "Senior Software Engineer" @ ORG_3eab285c
[2026-01-19T01:20:44.718Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T01:20:44.931Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_3eab285c in #💻・tech-jobs
  ✅ Industry: Senior Software Engineer @ ORG_3eab285c
[2026-01-19T01:20:46.644Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_3eab285c in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-19T01:20:48.145Z] [BOT] 💾 Marked as posted: Senior Software Engineer @ ORG_3eab285c (instance #1)
[2026-01-19T01:20:48.145Z] [BOT] 💾 BEFORE ARCHIVING: 2828 jobs in database
[2026-01-19T01:20:48.148Z] [BOT] ✅ No jobs to archive (all 2828 jobs within 7-day window)
[2026-01-19T01:20:48.169Z] [BOT] 💾 Saved posted_jobs.json: 2828 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T01:20:48.170Z] [BOT] 💾 Marked as posted: Senior Software Engineer @ ORG_3eab285c (instance #1)
[2026-01-19T01:20:48.170Z] [BOT] 💾 BEFORE ARCHIVING: 2829 jobs in database
[2026-01-19T01:20:48.172Z] [BOT] ✅ No jobs to archive (all 2829 jobs within 7-day window)
[2026-01-19T01:20:48.189Z] [BOT] 💾 Saved posted_jobs.json: 2829 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T01:20:48.190Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_1550f0e6 ABLOY
[2026-01-19T01:20:48.190Z] [BOT] Category: TECH (matched: "software")
[2026-01-19T01:20:48.190Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T01:20:48.427Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_1550f0e6 ABLOY in #💻・tech-jobs
[2026-01-19T01:20:48.427Z] [BOT] ✅ Industry: Software Developer @ ORG_1550f0e6 ABLOY
[2026-01-19T01:20:50.175Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_1550f0e6 ABLOY in #💻・remote-usa
[2026-01-19T01:20:50.175Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T01:20:51.676Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_1550f0e6 ABLOY (instance #1)
[2026-01-19T01:20:51.676Z] [BOT] 💾 BEFORE ARCHIVING: 2830 jobs in database
[2026-01-19T01:20:51.677Z] [BOT] ✅ No jobs to archive (all 2830 jobs within 7-day window)
[2026-01-19T01:20:51.695Z] [BOT] 💾 Saved posted_jobs.json: 2830 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T01:20:54.696Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-19T01:20:54.696Z] [BOT] 📍 [ROUTING] "Research Assistant - Csd - School of Computer Science" @ ORG_15a5b314 Mellon University
[2026-01-19T01:20:54.696Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T01:20:54.955Z] [BOT] ✅ Created forum post: 🏢 Research Assistant - Csd - School of Computer Science @ ORG_15a5b314 Mellon University in #📣・marketing-jobs
[2026-01-19T01:20:54.955Z] [BOT] ✅ Industry: Research Assistant - Csd - School of Computer Science @ ORG_15a5b314 Mellon University
[2026-01-19T01:20:56.831Z] [BOT] ✅ Created forum post: 🏢 Research Assistant - Csd - School of Computer Science @ ORG_15a5b314 Mellon University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T01:20:58.333Z] [BOT] 💾 Marked as posted: Research Assistant - Csd - School of Computer Science @ ORG_15a5b314 Mellon University (instance #1)
[2026-01-19T01:20:58.334Z] [BOT] 💾 BEFORE ARCHIVING: 2831 jobs in database
[2026-01-19T01:20:58.335Z] [BOT] ✅ No jobs to archive (all 2831 jobs within 7-day window)
[2026-01-19T01:20:58.354Z] [BOT] 💾 Saved posted_jobs.json: 2831 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T01:20:58.354Z] [BOT] 📍 [ROUTING] "Marketing Operations Coordinator" @ datadog
[2026-01-19T01:20:58.354Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T01:20:58.681Z] [BOT] ✅ Created forum post: 🏢 Marketing Operations Coordinator @ datadog in #📣・marketing-jobs
  ✅ Industry: Marketing Operations Coordinator @ datadog
[2026-01-19T01:21:00.372Z] [BOT] ✅ Created forum post: 🏢 Marketing Operations Coordinator @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T01:21:01.872Z] [BOT] 💾 Marked as posted: Marketing Operations Coordinator @ datadog (instance #1)
[2026-01-19T01:21:01.873Z] [BOT] 💾 BEFORE ARCHIVING: 2832 jobs in database
[2026-01-19T01:21:01.875Z] [BOT] ✅ No jobs to archive (all 2832 jobs within 7-day window)
[2026-01-19T01:21:01.891Z] [BOT] 💾 Saved posted_jobs.json: 2832 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T01:21:04.891Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-19T01:21:04.892Z] [BOT] 📍 [ROUTING] "Therapist-IOP/PHP" @ ORG_6a97f77a Behavioral Health
[2026-01-19T01:21:04.892Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T01:21:05.315Z] [BOT] ✅ Created forum post: 🏢 Therapist-IOP/PHP @ ORG_6a97f77a Behavioral Health in #🩺・healthcare-jobs
  ✅ Industry: Therapist-IOP/PHP @ ORG_6a97f77a Behavioral Health
[2026-01-19T01:21:07.090Z] [BOT] ✅ Created forum post: 🏢 Therapist-IOP/PHP @ ORG_6a97f77a Behavioral Health in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T01:21:08.590Z] [BOT] 💾 Marked as posted: Therapist-IOP/PHP @ ORG_6a97f77a Behavioral Health (instance #1)
[2026-01-19T01:21:08.590Z] [BOT] 💾 BEFORE ARCHIVING: 2833 jobs in database
[2026-01-19T01:21:08.592Z] [BOT] ✅ No jobs to archive (all 2833 jobs within 7-day window)
[2026-01-19T01:21:08.613Z] [BOT] 💾 Saved posted_jobs.json: 2833 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T01:21:11.613Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-19T01:21:11.614Z] [BOT] 📍 [ROUTING] "Customer Success Associate - Boston" @ datadog
[2026-01-19T01:21:11.614Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T01:21:11.835Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Boston @ datadog in #💲・sales-jobs
  ✅ Industry: Customer Success Associate - Boston @ datadog
[2026-01-19T01:21:13.747Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Boston @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-19T01:21:15.247Z] [BOT] 💾 Marked as posted: Customer Success Associate - Boston @ datadog (instance #1)
[2026-01-19T01:21:15.248Z] [BOT] 💾 BEFORE ARCHIVING: 2834 jobs in database
[2026-01-19T01:21:15.249Z] [BOT] ✅ No jobs to archive (all 2834 jobs within 7-day window)
[2026-01-19T01:21:15.267Z] [BOT] 💾 Saved posted_jobs.json: 2834 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T01:21:15.267Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ brex
[2026-01-19T01:21:15.267Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T01:21:15.683Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market @ brex in #💲・sales-jobs
  ✅ Industry: Account Executive, Mid Market @ brex
[2026-01-19T01:21:17.470Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market @ brex in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-19T01:21:18.971Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market @ brex (instance #1)
[2026-01-19T01:21:18.971Z] [BOT] 💾 BEFORE ARCHIVING: 2835 jobs in database
[2026-01-19T01:21:18.972Z] [BOT] ✅ No jobs to archive (all 2835 jobs within 7-day window)
[2026-01-19T01:21:18.990Z] [BOT] 💾 Saved posted_jobs.json: 2835 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T01:21:18.990Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market @ brex (instance #1)
[2026-01-19T01:21:18.990Z] [BOT] 💾 BEFORE ARCHIVING: 2836 jobs in database
[2026-01-19T01:21:18.992Z] [BOT] ✅ No jobs to archive (all 2836 jobs within 7-day window)
[2026-01-19T01:21:19.009Z] [BOT] 💾 Saved posted_jobs.json: 2836 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T01:21:22.010Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-19T01:21:22.011Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
[2026-01-19T01:21:22.011Z] [BOT] ⏭️  Skipping duplicate: JID_a7381fab-science_2024014 (posted within 7 days)
[2026-01-19T01:21:22.011Z] [BOT] ⏭️  Skipping duplicate: JID_b76486ed-php_r5976 (posted within 7 days)
⏭️  Skipping duplicate: JID_90dd935f (posted within 7 days)
⏭️  Skipping duplicate: JID_1701addd (posted within 7 days)
⏭️  Skipping duplicate: JID_d57147e5 (posted within 7 days)
[2026-01-19T01:21:22.012Z] [BOT] ⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
[2026-01-19T01:21:22.012Z] [BOT] ⏭️  Skipping duplicate: JID_6f96ceb6 (posted within 7 days)
[2026-01-19T01:21:22.012Z] [BOT] ⏭️  Skipping duplicate: JID_8636ed19 (posted within 7 days)
[2026-01-19T01:21:22.127Z] [BOT] ✅ Loaded pending queue: 2832 total (2812 pending, 20 enriched, 0 posted)
[2026-01-19T01:21:22.297Z] [BOT] ✅ Saved pending queue: 2832 total (2812 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-19T01:21:22.297Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-19T01:21:22.357Z] [BOT] 📂 Loaded 4965 existing routing entries
[2026-01-19T01:21:22.427Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4975
   Timestamp: 2026-01-19T01:21:22.407Z
[2026-01-19T01:21:22.429Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 19
   Successful: 18
   Failed: 1
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 11
   Top channels:
     1. #💻・remote-usa: 3 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🗽・new-york: 2 posts
     4. #💻・tech-jobs: 2 posts
     5. #📣・marketing-jobs: 2 posts
[STATS] Channel stats saved
[2026-01-19T01:21:24.451Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2513) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Engineering Manager
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*