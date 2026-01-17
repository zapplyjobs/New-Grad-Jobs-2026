# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T05:08:45.002Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T05:07:57.498Z] ========================================
[2026-01-17T05:07:57.500Z] Discord Bot Execution Log
[2026-01-17T05:07:57.500Z] Environment: GitHub Actions
[2026-01-17T05:07:57.500Z] Node Version: v20.19.6
[2026-01-17T05:07:57.500Z] ========================================
[2026-01-17T05:07:57.500Z] Environment Variables Check:
[2026-01-17T05:07:57.500Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T05:07:57.500Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T05:07:57.500Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T05:07:57.500Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T05:07:57.501Z] 
Multi-Channel Configuration:
[2026-01-17T05:07:57.501Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T05:07:57.501Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T05:07:57.501Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T05:07:57.501Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T05:07:57.501Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T05:07:57.501Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T05:07:57.501Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T05:07:57.501Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T05:07:57.501Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T05:07:57.501Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T05:07:57.501Z] 
Data Files Check:
[2026-01-17T05:07:57.502Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7631 bytes)
[2026-01-17T05:07:57.510Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1223167 bytes)
[2026-01-17T05:07:57.510Z] 
========================================
[2026-01-17T05:07:57.510Z] Starting Enhanced Discord Bot...
[2026-01-17T05:07:57.510Z] ========================================
[2026-01-17T05:07:58.036Z] [BOT] ✅ Loaded V2 database: 2257 jobs
[2026-01-17T05:07:58.516Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T05:07:58.517Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T05:07:58.517Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T05:07:58.637Z] [BOT] ✅ Loaded pending queue: 2883 total (2863 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Graduate Machine Learning Engineer - Multiple Teams at TikTok
[2026-01-17T05:07:58.639Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T05:07:58.640Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T05:07:58.640Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T05:07:58.641Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-17T05:07:58.641Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-17T05:07:58.641Z] [BOT] - Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ TikTok: seattle, san jose
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T05:07:58.646Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-17T05:07:58.647Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Multiple Teams" @ ORG_1bb6fcfb
[2026-01-17T05:07:58.647Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T05:07:58.647Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:07:58.664Z] [BOT ERROR] (node:3013) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T05:07:58.746Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Machine Learning Engineer - Multiple Teams @ TikTok',
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
[2026-01-17T05:07:58.746Z] [BOT] ❌ Industry post failed: Graduate Machine Learning Engineer - Multiple Teams
⚠️  Channel full error count: 1/5
[2026-01-17T05:08:00.345Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:935:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Graduate Machine Learning Engineer - Multiple Teams @ TikTok',
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
[2026-01-17T05:08:00.345Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T05:08:01.847Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Scientist - Global E-commerce Content Recommendation" @ ORG_1bb6fcfb
[2026-01-17T05:08:01.847Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:08:02.065Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-17T05:08:02.065Z] [BOT] ✅ Industry: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb
[2026-01-17T05:08:03.738Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T05:08:05.239Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:08:05.239Z] [BOT] 💾 BEFORE ARCHIVING: 2258 jobs in database
[2026-01-17T05:08:05.241Z] [BOT] ✅ No jobs to archive (all 2258 jobs within 7-day window)
[2026-01-17T05:08:05.256Z] [BOT] 💾 Saved posted_jobs.json: 2258 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:08:05.256Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:08:05.257Z] [BOT] 💾 BEFORE ARCHIVING: 2259 jobs in database
[2026-01-17T05:08:05.258Z] [BOT] ✅ No jobs to archive (all 2259 jobs within 7-day window)
[2026-01-17T05:08:05.271Z] [BOT] 💾 Saved posted_jobs.json: 2259 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:08:05.271Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD" @ ORG_1bb6fcfb
[2026-01-17T05:08:05.271Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:08:05.476Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb
[2026-01-17T05:08:07.499Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T05:08:09.001Z] [BOT] 💾 Marked as posted: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:08:09.001Z] [BOT] 💾 BEFORE ARCHIVING: 2260 jobs in database
[2026-01-17T05:08:09.003Z] [BOT] ✅ No jobs to archive (all 2260 jobs within 7-day window)
[2026-01-17T05:08:09.019Z] [BOT] 💾 Saved posted_jobs.json: 2260 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:08:09.021Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Monetization Technology - GenAI" @ ORG_1bb6fcfb
[2026-01-17T05:08:09.021Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:08:09.189Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-17T05:08:09.189Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb
[2026-01-17T05:08:10.862Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T05:08:10.862Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T05:08:12.363Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:08:12.363Z] [BOT] 💾 BEFORE ARCHIVING: 2261 jobs in database
[2026-01-17T05:08:12.365Z] [BOT] ✅ No jobs to archive (all 2261 jobs within 7-day window)
[2026-01-17T05:08:12.381Z] [BOT] 💾 Saved posted_jobs.json: 2261 active jobs
[2026-01-17T05:08:12.381Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T05:08:12.382Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation" @ ORG_1bb6fcfb
[2026-01-17T05:08:12.382Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:08:12.606Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb
[2026-01-17T05:08:14.280Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T05:08:14.281Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T05:08:15.782Z] [BOT] 💾 Marked as posted: Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:08:15.782Z] [BOT] 💾 BEFORE ARCHIVING: 2262 jobs in database
[2026-01-17T05:08:15.784Z] [BOT] ✅ No jobs to archive (all 2262 jobs within 7-day window)
[2026-01-17T05:08:15.797Z] [BOT] 💾 Saved posted_jobs.json: 2262 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:08:15.797Z] [BOT] 📍 [ROUTING] "Engineer Graduate - Machine Learning Engineer Graduate-Data-Search-Tiktok - 2026 Start alternating BS/MS" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-01-17T05:08:15.797Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T05:08:15.798Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:08:15.968Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate - Machine Learning Engineer Graduate-Data-Search-Tiktok - 2026 Start alternatin in #🤖・ai-jobs
[2026-01-17T05:08:15.968Z] [BOT] ✅ Industry: Engineer Graduate - Machine Learning Engineer Graduate-Data-Search-Tiktok - 2026 Start alternating BS/MS @ ORG_1bb6fcfb
[2026-01-17T05:08:17.658Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate - Machine Learning Engineer Graduate-Data-Search-Tiktok - 2026 Start alternatin in #🌉・san-francisco
[2026-01-17T05:08:17.658Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T05:08:19.159Z] [BOT] 💾 Marked as posted: Engineer Graduate - Machine Learning Engineer Graduate-Data-Search-Tiktok - 2026 Start alternating BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:08:19.159Z] [BOT] 💾 BEFORE ARCHIVING: 2263 jobs in database
[2026-01-17T05:08:19.161Z] [BOT] ✅ No jobs to archive (all 2263 jobs within 7-day window)
[2026-01-17T05:08:19.176Z] [BOT] 💾 Saved posted_jobs.json: 2263 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:08:22.177Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-17T05:08:22.178Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Multiple Teams" @ ORG_1bb6fcfb
[2026-01-17T05:08:22.178Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T05:08:22.338Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-17T05:08:22.338Z] [BOT] ✅ Industry: Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb
[2026-01-17T05:08:24.032Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T05:08:24.032Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T05:08:25.533Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:08:25.533Z] [BOT] 💾 BEFORE ARCHIVING: 2264 jobs in database
[2026-01-17T05:08:25.535Z] [BOT] ✅ No jobs to archive (all 2264 jobs within 7-day window)
[2026-01-17T05:08:25.552Z] [BOT] 💾 Saved posted_jobs.json: 2264 active jobs
[2026-01-17T05:08:25.552Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T05:08:25.552Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Monetization GenAI @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:08:25.553Z] [BOT] 💾 BEFORE ARCHIVING: 2265 jobs in database
[2026-01-17T05:08:25.554Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-01-17T05:08:25.568Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
[2026-01-17T05:08:25.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T05:08:25.568Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - TikTok Recommendation @ ORG_1bb6fcfb (instance #1)
💾 BEFORE ARCHIVING: 2266 jobs in database
[2026-01-17T05:08:25.569Z] [BOT] ✅ No jobs to archive (all 2266 jobs within 7-day window)
[2026-01-17T05:08:25.583Z] [BOT] 💾 Saved posted_jobs.json: 2266 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:08:25.583Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist Graphics Engine" @ ORG_1bb6fcfb
[2026-01-17T05:08:25.583Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T05:08:25.876Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist Graphics Engine @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-17T05:08:25.876Z] [BOT] ✅ Industry: Graduate Research Scientist Graphics Engine @ ORG_1bb6fcfb
[2026-01-17T05:08:27.515Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist Graphics Engine @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T05:08:27.515Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T05:08:29.016Z] [BOT] 💾 Marked as posted: Graduate Research Scientist Graphics Engine @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:08:29.016Z] [BOT] 💾 BEFORE ARCHIVING: 2267 jobs in database
[2026-01-17T05:08:29.017Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-01-17T05:08:29.031Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:08:29.032Z] [BOT] 📍 [ROUTING] "General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD" @ ORG_1bb6fcfb
[2026-01-17T05:08:29.032Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T05:08:29.165Z] [BOT] ✅ Created forum post: 🏢 General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD  in #💻・tech-jobs
[2026-01-17T05:08:29.165Z] [BOT] ✅ Industry: General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD @ ORG_1bb6fcfb
[2026-01-17T05:08:30.854Z] [BOT] ✅ Created forum post: 🏢 General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD  in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T05:08:32.356Z] [BOT] 💾 Marked as posted: General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:08:32.356Z] [BOT] 💾 BEFORE ARCHIVING: 2268 jobs in database
[2026-01-17T05:08:32.357Z] [BOT] ✅ No jobs to archive (all 2268 jobs within 7-day window)
[2026-01-17T05:08:32.372Z] [BOT] 💾 Saved posted_jobs.json: 2268 active jobs
[2026-01-17T05:08:32.372Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T05:08:35.372Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T05:08:35.373Z] [BOT] 📍 [ROUTING] "Graduate Data Engineer - Data Platfrom TikTok BP - BS/MS" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-17T05:08:35.373Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T05:08:35.611Z] [BOT] ✅ Created forum post: 🏢 Graduate Data Engineer - Data Platfrom TikTok BP - BS/MS @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Graduate Data Engineer - Data Platfrom TikTok BP - BS/MS @ ORG_1bb6fcfb
[2026-01-17T05:08:37.356Z] [BOT] ✅ Created forum post: 🏢 Graduate Data Engineer - Data Platfrom TikTok BP - BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T05:08:38.857Z] [BOT] 💾 Marked as posted: Graduate Data Engineer - Data Platfrom TikTok BP - BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:08:38.857Z] [BOT] 💾 BEFORE ARCHIVING: 2269 jobs in database
[2026-01-17T05:08:38.859Z] [BOT] ✅ No jobs to archive (all 2269 jobs within 7-day window)
[2026-01-17T05:08:38.876Z] [BOT] 💾 Saved posted_jobs.json: 2269 active jobs
[2026-01-17T05:08:38.876Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T05:08:41.877Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-17T05:08:41.877Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_1c0a49b5 (posted within 7 days)
[2026-01-17T05:08:41.877Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_e6896b47 (posted within 7 days)
[2026-01-17T05:08:41.878Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_850f3060 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_e19e810b (posted within 7 days)
[2026-01-17T05:08:41.878Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_c70b6a26 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_1e0a24cf (posted within 7 days)
[2026-01-17T05:08:41.878Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f695f88b (posted within 7 days)
[2026-01-17T05:08:41.878Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_3e9658ab (posted within 7 days)
[2026-01-17T05:08:41.878Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_8cc0ebb3 (posted within 7 days)
[2026-01-17T05:08:42.002Z] [BOT] ✅ Loaded pending queue: 2883 total (2863 pending, 20 enriched, 0 posted)
[2026-01-17T05:08:42.185Z] [BOT] ✅ Saved pending queue: 2883 total (2863 pending, 11 enriched, 9 posted)
[2026-01-17T05:08:42.185Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T05:08:42.243Z] [BOT] 📂 Loaded 4475 existing routing entries
[2026-01-17T05:08:42.310Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4485
   Timestamp: 2026-01-17T05:08:42.291Z
[2026-01-17T05:08:42.310Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T05:08:42.310Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-17T05:08:42.310Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T05:08:42.311Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 7 posts
     2. #🤖・ai-jobs: 5 posts
     3. #💻・tech-jobs: 3 posts
     4. #🌧️・seattle: 2 posts
[2026-01-17T05:08:42.311Z] [BOT] 5. #📈・JID_fb739488: 1 posts
[2026-01-17T05:08:42.311Z] [BOT] [STATS] Channel stats saved
[2026-01-17T05:08:44.337Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3013) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Machine Learning Engineer - Multiple Teams
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*