# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T00:55:46.833Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T00:54:50.168Z] ========================================
[2026-01-20T00:54:50.170Z] Discord Bot Execution Log
[2026-01-20T00:54:50.170Z] Environment: GitHub Actions
[2026-01-20T00:54:50.170Z] Node Version: v20.19.6
[2026-01-20T00:54:50.170Z] ========================================
[2026-01-20T00:54:50.170Z] Environment Variables Check:
[2026-01-20T00:54:50.170Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T00:54:50.171Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T00:54:50.171Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T00:54:50.171Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T00:54:50.171Z] 
Multi-Channel Configuration:
[2026-01-20T00:54:50.171Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T00:54:50.171Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T00:54:50.171Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T00:54:50.171Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T00:54:50.171Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T00:54:50.171Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T00:54:50.171Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T00:54:50.171Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T00:54:50.171Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T00:54:50.172Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T00:54:50.172Z] 
Data Files Check:
[2026-01-20T00:54:50.172Z] .github/data/new_jobs.json: ✅ Exists (10 items, 104214 bytes)
[2026-01-20T00:54:50.182Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1533386 bytes)
[2026-01-20T00:54:50.182Z] 
========================================
[2026-01-20T00:54:50.182Z] Starting Enhanced Discord Bot...
[2026-01-20T00:54:50.182Z] ========================================
[2026-01-20T00:54:50.708Z] [BOT] ✅ Loaded V2 database: 2791 jobs
[2026-01-20T00:54:51.330Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T00:54:51.330Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T00:54:51.331Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T00:54:51.451Z] [BOT] ✅ Loaded pending queue: 2808 total (2788 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States at Uber
[2026-01-20T00:54:51.456Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T00:54:51.456Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T00:54:51.457Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T00:54:51.457Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-20T00:54:51.458Z] [BOT] (3 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T00:54:51.462Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-20T00:54:51.462Z] [BOT] 📍 [ROUTING] "Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States" @ ORG_3cfbdbc3
[2026-01-20T00:54:51.462Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T00:54:51.467Z] [BOT ERROR] (node:2669) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T00:54:51.618Z] [BOT ERROR] ❌ Error posting job Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ Uber',
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
[2026-01-20T00:54:51.618Z] [BOT] ❌ Industry post failed: Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States
⚠️  Channel full error count: 1/5
[2026-01-20T00:54:53.459Z] [BOT] ✅ Created forum post: 🏢 Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ ORG_3cfbdbc3 in #🌉・san-francisco
[2026-01-20T00:54:53.459Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-20T00:54:54.959Z] [BOT] 💾 Marked as posted: Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ ORG_3cfbdbc3 (instance #1)
[2026-01-20T00:54:54.959Z] [BOT] 💾 BEFORE ARCHIVING: 2792 jobs in database
[2026-01-20T00:54:54.962Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T00:54:54.966Z] [BOT] 📦 Archived 12 jobs to 2026-01.json (12 total in archive)
[2026-01-20T00:54:54.967Z] [BOT] ✅ Archiving complete: 12 archived, 2780 active
[2026-01-20T00:54:54.993Z] [BOT] 💾 Saved posted_jobs.json: 2780 active jobs
[2026-01-20T00:54:54.993Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T00:54:54.993Z] [BOT] 📍 [ROUTING] "Senior Software Engineer - Safety Processing" @ discord
[2026-01-20T00:54:54.993Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T00:54:55.216Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - Safety Processing @ discord in #🤖・ai-jobs
[2026-01-20T00:54:55.216Z] [BOT] ✅ Industry: Senior Software Engineer - Safety Processing @ discord
[2026-01-20T00:54:57.164Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - Safety Processing @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-20T00:54:58.664Z] [BOT] 💾 Marked as posted: Senior Software Engineer - Safety Processing @ discord (instance #1)
[2026-01-20T00:54:58.665Z] [BOT] 💾 BEFORE ARCHIVING: 2781 jobs in database
[2026-01-20T00:54:58.667Z] [BOT] ✅ No jobs to archive (all 2781 jobs within 7-day window)
[2026-01-20T00:54:58.682Z] [BOT] 💾 Saved posted_jobs.json: 2781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:54:58.682Z] [BOT] 💾 Marked as posted: Senior Software Engineer - Safety Experience @ discord (instance #1)
💾 BEFORE ARCHIVING: 2782 jobs in database
[2026-01-20T00:54:58.684Z] [BOT] ✅ No jobs to archive (all 2782 jobs within 7-day window)
[2026-01-20T00:54:58.701Z] [BOT] 💾 Saved posted_jobs.json: 2782 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:54:58.702Z] [BOT] 💾 Marked as posted: Senior Software Engineer - SEO @ discord (instance #1)
[2026-01-20T00:54:58.702Z] [BOT] 💾 BEFORE ARCHIVING: 2783 jobs in database
[2026-01-20T00:54:58.703Z] [BOT] ✅ No jobs to archive (all 2783 jobs within 7-day window)
[2026-01-20T00:54:58.721Z] [BOT] 💾 Saved posted_jobs.json: 2783 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:54:58.721Z] [BOT] 📍 [ROUTING] "Applied Safety Research Engineer, Safeguards" @ anthropic
[2026-01-20T00:54:58.721Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T00:54:58.928Z] [BOT] ✅ Created forum post: 🏢 Applied Safety Research Engineer, Safeguards @ anthropic in #🤖・ai-jobs
  ✅ Industry: Applied Safety Research Engineer, Safeguards @ anthropic
[2026-01-20T00:55:00.751Z] [BOT] ✅ Created forum post: 🏢 Applied Safety Research Engineer, Safeguards @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-20T00:55:02.251Z] [BOT] 💾 Marked as posted: Applied Safety Research Engineer, Safeguards @ anthropic (instance #1)
[2026-01-20T00:55:02.251Z] [BOT] 💾 BEFORE ARCHIVING: 2784 jobs in database
[2026-01-20T00:55:02.254Z] [BOT] ✅ No jobs to archive (all 2784 jobs within 7-day window)
[2026-01-20T00:55:02.272Z] [BOT] 💾 Saved posted_jobs.json: 2784 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:55:05.273Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-20T00:55:05.273Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aws" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-20T00:55:05.694Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
[2026-01-20T00:55:05.694Z] [BOT] ✅ Industry: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies
[2026-01-20T00:55:07.393Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-20T00:55:08.893Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies (instance #1)
[2026-01-20T00:55:08.894Z] [BOT] 💾 BEFORE ARCHIVING: 2785 jobs in database
[2026-01-20T00:55:08.896Z] [BOT] ✅ No jobs to archive (all 2785 jobs within 7-day window)
[2026-01-20T00:55:08.914Z] [BOT] 💾 Saved posted_jobs.json: 2785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:55:08.914Z] [BOT] 📍 [ROUTING] "Software Developer - Provisioning" @ ORG_865b30e2 Information Solutions Cooperative (NISC)
[2026-01-20T00:55:08.915Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-20T00:55:09.333Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC) in #💻・tech-jobs
  ✅ Industry: Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC)
[2026-01-20T00:55:11.162Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-20T00:55:12.664Z] [BOT] 💾 Marked as posted: Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC) (instance #1)
[2026-01-20T00:55:12.664Z] [BOT] 💾 BEFORE ARCHIVING: 2786 jobs in database
[2026-01-20T00:55:12.666Z] [BOT] ✅ No jobs to archive (all 2786 jobs within 7-day window)
[2026-01-20T00:55:12.683Z] [BOT] 💾 Saved posted_jobs.json: 2786 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:55:12.683Z] [BOT] 💾 Marked as posted: Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC) (instance #1)
[2026-01-20T00:55:12.683Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-20T00:55:12.685Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-20T00:55:12.701Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:55:15.703Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-20T00:55:15.703Z] [BOT] 📍 [ROUTING] "Customer Enablement Manager - Figma Weave (New York, United States)" @ figma
[2026-01-20T00:55:15.703Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-20T00:55:15.971Z] [BOT] ✅ Created forum post: 🏢 Customer Enablement Manager - Figma Weave (New York, United States) @ figma in #💲・sales-jobs
[2026-01-20T00:55:15.971Z] [BOT] ✅ Industry: Customer Enablement Manager - Figma Weave (New York, United States) @ figma
[2026-01-20T00:55:17.657Z] [BOT] ✅ Created forum post: 🏢 Customer Enablement Manager - Figma Weave (New York, United States) @ figma in #🗽・new-york
[2026-01-20T00:55:17.658Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-20T00:55:19.160Z] [BOT] 💾 Marked as posted: Customer Enablement Manager - Figma Weave (New York, United States) @ figma (instance #1)
[2026-01-20T00:55:19.160Z] [BOT] 💾 BEFORE ARCHIVING: 2788 jobs in database
[2026-01-20T00:55:19.162Z] [BOT] ✅ No jobs to archive (all 2788 jobs within 7-day window)
[2026-01-20T00:55:19.177Z] [BOT] 💾 Saved posted_jobs.json: 2788 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:55:19.177Z] [BOT] 📍 [ROUTING] "GTM Strategy and Operations Senior Associate - Product Strategy" @ datadog
[2026-01-20T00:55:19.177Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-20T00:55:19.476Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy and Operations Senior Associate - Product Strategy @ datadog in #💲・sales-jobs
[2026-01-20T00:55:19.476Z] [BOT] ✅ Industry: GTM Strategy and Operations Senior Associate - Product Strategy @ datadog
[2026-01-20T00:55:21.476Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy and Operations Senior Associate - Product Strategy @ datadog in #🗽・new-york
[2026-01-20T00:55:21.476Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-20T00:55:22.977Z] [BOT] 💾 Marked as posted: GTM Strategy and Operations Senior Associate - Product Strategy @ datadog (instance #1)
[2026-01-20T00:55:22.977Z] [BOT] 💾 BEFORE ARCHIVING: 2789 jobs in database
[2026-01-20T00:55:22.979Z] [BOT] ✅ No jobs to archive (all 2789 jobs within 7-day window)
[2026-01-20T00:55:22.995Z] [BOT] 💾 Saved posted_jobs.json: 2789 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:55:25.995Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-20T00:55:25.996Z] [BOT] 📍 [ROUTING] "Head of Technical Recruiting" @ gusto
[2026-01-20T00:55:25.996Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-20T00:55:26.336Z] [BOT] ✅ Created forum post: 🏢 Head of Technical Recruiting @ gusto in #📣・marketing-jobs
  ✅ Industry: Head of Technical Recruiting @ gusto
[2026-01-20T00:55:28.306Z] [BOT] ✅ Created forum post: 🏢 Head of Technical Recruiting @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-20T00:55:29.807Z] [BOT] 💾 Marked as posted: Head of Technical Recruiting @ gusto (instance #1)
[2026-01-20T00:55:29.808Z] [BOT] 💾 BEFORE ARCHIVING: 2790 jobs in database
[2026-01-20T00:55:29.809Z] [BOT] ✅ No jobs to archive (all 2790 jobs within 7-day window)
[2026-01-20T00:55:29.830Z] [BOT] 💾 Saved posted_jobs.json: 2790 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:55:29.831Z] [BOT] 📍 [ROUTING] "Member of Technical Staff 2" @ ORG_cc7e1d22
[2026-01-20T00:55:29.831Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-20T00:55:30.108Z] [BOT] ✅ Created forum post: 🏢 Member of Technical Staff 2 @ ORG_cc7e1d22 in #📣・marketing-jobs
[2026-01-20T00:55:30.109Z] [BOT] ✅ Industry: Member of Technical Staff 2 @ ORG_cc7e1d22
[2026-01-20T00:55:31.861Z] [BOT] ✅ Created forum post: 🏢 Member of Technical Staff 2 @ ORG_cc7e1d22 in #🌉・san-francisco
[2026-01-20T00:55:31.861Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-20T00:55:33.362Z] [BOT] 💾 Marked as posted: Member of Technical Staff 2 @ ORG_cc7e1d22 (instance #1)
[2026-01-20T00:55:33.363Z] [BOT] 💾 BEFORE ARCHIVING: 2791 jobs in database
[2026-01-20T00:55:33.365Z] [BOT] ✅ No jobs to archive (all 2791 jobs within 7-day window)
[2026-01-20T00:55:33.383Z] [BOT] 💾 Saved posted_jobs.json: 2791 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:55:36.384Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-20T00:55:36.384Z] [BOT] 📍 [ROUTING] "Data Scientist 1: Network and Contracts" @ ORG_ca66a852 Health
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-20T00:55:36.384Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T00:55:36.965Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health in #📈・JID_fb739488
[2026-01-20T00:55:36.966Z] [BOT] ✅ Industry: Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health
[2026-01-20T00:55:38.615Z] [BOT ERROR] ❌ Error posting job Data Scientist 1: Network and Contracts: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health',
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
  url: 'https://discord.com/api/v10/channels/CH_64745ef9/threads'
}
[2026-01-20T00:55:38.615Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-20T00:55:40.117Z] [BOT] 💾 Marked as posted: Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health (instance #1)
[2026-01-20T00:55:40.117Z] [BOT] 💾 BEFORE ARCHIVING: 2792 jobs in database
[2026-01-20T00:55:40.119Z] [BOT] ✅ No jobs to archive (all 2792 jobs within 7-day window)
[2026-01-20T00:55:40.134Z] [BOT] 💾 Saved posted_jobs.json: 2792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:55:43.134Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T00:55:43.135Z] [BOT] ⏭️  Skipping duplicate: JID_2f661158 (posted within 7 days)
[2026-01-20T00:55:43.135Z] [BOT] ⏭️  Skipping duplicate: JID_76a904f3 (posted within 7 days)
[2026-01-20T00:55:43.136Z] [BOT] ⏭️  Skipping duplicate: JID_5a1885b9-i_r-48464 (posted within 7 days)
[2026-01-20T00:55:43.136Z] [BOT] ⏭️  Skipping duplicate: JID_d3ba2a91 (posted within 7 days)
[2026-01-20T00:55:43.136Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
[2026-01-20T00:55:43.136Z] [BOT] ⏭️  Skipping duplicate: JID_4d64b10f (posted within 7 days)
[2026-01-20T00:55:43.136Z] [BOT] ⏭️  Skipping duplicate: JID_a457eafe (posted within 7 days)
[2026-01-20T00:55:43.136Z] [BOT] ⏭️  Skipping duplicate: JID_6b0fee8f (posted within 7 days)
[2026-01-20T00:55:43.137Z] [BOT] ⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
[2026-01-20T00:55:43.137Z] [BOT] ⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
[2026-01-20T00:55:43.260Z] [BOT] ✅ Loaded pending queue: 2808 total (2788 pending, 20 enriched, 0 posted)
[2026-01-20T00:55:43.427Z] [BOT] ✅ Saved pending queue: 2808 total (2788 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-20T00:55:43.427Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T00:55:43.488Z] [BOT] 📂 Loaded 5225 existing routing entries
[2026-01-20T00:55:43.558Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-20T00:55:43.558Z] [BOT] Total entries: 5235
   Timestamp: 2026-01-20T00:55:43.537Z
[2026-01-20T00:55:43.559Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T00:55:43.559Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-20T00:55:43.560Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 8
   Top channels:
     1. #🌉・san-francisco: 5 posts
     2. #🤖・ai-jobs: 2 posts
     3. #💻・tech-jobs: 2 posts
     4. #💻・remote-usa: 2 posts
     5. #💲・sales-jobs: 2 posts
[STATS] Channel stats saved
[2026-01-20T00:55:45.585Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2669) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States
- [BOT ERROR] ❌ Error posting job Data Scientist 1: Network and Contracts: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*