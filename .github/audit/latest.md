# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T07:27:57.906Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T07:27:06.747Z] ========================================
[2026-01-18T07:27:06.749Z] Discord Bot Execution Log
[2026-01-18T07:27:06.749Z] Environment: GitHub Actions
[2026-01-18T07:27:06.749Z] Node Version: v20.19.6
[2026-01-18T07:27:06.749Z] ========================================
[2026-01-18T07:27:06.749Z] Environment Variables Check:
[2026-01-18T07:27:06.749Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T07:27:06.750Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T07:27:06.750Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T07:27:06.750Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T07:27:06.750Z] 
Multi-Channel Configuration:
[2026-01-18T07:27:06.750Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T07:27:06.750Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T07:27:06.750Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T07:27:06.750Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T07:27:06.750Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T07:27:06.750Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T07:27:06.750Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T07:27:06.751Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T07:27:06.751Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T07:27:06.751Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T07:27:06.751Z] 
Data Files Check:
[2026-01-18T07:27:06.752Z] .github/data/new_jobs.json: ✅ Exists (10 items, 98667 bytes)
[2026-01-18T07:27:06.762Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1421735 bytes)
[2026-01-18T07:27:06.762Z] 
========================================
[2026-01-18T07:27:06.762Z] Starting Enhanced Discord Bot...
[2026-01-18T07:27:06.762Z] ========================================
[2026-01-18T07:27:07.318Z] [BOT] ✅ Loaded V2 database: 2625 jobs
[2026-01-18T07:27:07.914Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T07:27:07.915Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T07:27:07.915Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T07:27:08.034Z] [BOT] ✅ Loaded pending queue: 2856 total (2836 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer at Carnegie Mellon University
[2026-01-18T07:27:08.037Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T07:27:08.038Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T07:27:08.038Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T07:27:08.039Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T07:27:08.039Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-18T07:27:08.039Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T07:27:08.044Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T07:27:08.045Z] [BOT] 📍 [ROUTING] "Data Engineer" @ ORG_15a5b314 Mellon University
[2026-01-18T07:27:08.045Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T07:27:08.045Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T07:27:08.050Z] [BOT ERROR] (node:2786) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T07:27:08.135Z] [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineer @ ORG_15a5b314 Mellon University',
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
[2026-01-18T07:27:08.135Z] [BOT] ❌ Industry post failed: Data Engineer
⚠️  Channel full error count: 1/5
[2026-01-18T07:27:09.725Z] [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineer @ ORG_15a5b314 Mellon University',
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
  url: 'https://discord.com/api/v10/channels/CH_7bf909b6/threads'
}
[2026-01-18T07:27:09.725Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T07:27:11.225Z] [BOT] 📍 [ROUTING] "Technical Cyber Threat Investigator " @ anthropic
[2026-01-18T07:27:11.225Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T07:27:11.814Z] [BOT] ✅ Created forum post: 🏢 Technical Cyber Threat Investigator  @ anthropic in #🤖・ai-jobs
[2026-01-18T07:27:11.814Z] [BOT] ✅ Industry: Technical Cyber Threat Investigator  @ anthropic
[2026-01-18T07:27:13.685Z] [BOT] ✅ Created forum post: 🏢 Technical Cyber Threat Investigator  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T07:27:15.187Z] [BOT] 💾 Marked as posted: Technical Cyber Threat Investigator  @ anthropic (instance #1)
[2026-01-18T07:27:15.187Z] [BOT] 💾 BEFORE ARCHIVING: 2626 jobs in database
[2026-01-18T07:27:15.189Z] [BOT] ✅ No jobs to archive (all 2626 jobs within 7-day window)
[2026-01-18T07:27:15.209Z] [BOT] 💾 Saved posted_jobs.json: 2626 active jobs
[2026-01-18T07:27:15.209Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T07:27:18.210Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-18T07:27:18.211Z] [BOT] 📍 [ROUTING] "Vie – Research Associate - m/f/d" @ ORG_29dc8914
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T07:27:18.426Z] [BOT] ✅ Created forum post: 🏢 Vie – Research Associate - m/f/d @ ORG_29dc8914 in #💻・tech-jobs
  ✅ Industry: Vie – Research Associate - m/f/d @ ORG_29dc8914
[2026-01-18T07:27:20.104Z] [BOT] ✅ Created forum post: 🏢 Vie – Research Associate - m/f/d @ ORG_29dc8914 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T07:27:21.606Z] [BOT] 💾 Marked as posted: Vie – Research Associate - m/f/d @ ORG_29dc8914 (instance #1)
[2026-01-18T07:27:21.606Z] [BOT] 💾 BEFORE ARCHIVING: 2627 jobs in database
[2026-01-18T07:27:21.608Z] [BOT] ✅ No jobs to archive (all 2627 jobs within 7-day window)
[2026-01-18T07:27:21.628Z] [BOT] 💾 Saved posted_jobs.json: 2627 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:27:21.629Z] [BOT] 📍 [ROUTING] "Analyst & Simulation Developer" @ Trace3
[2026-01-18T07:27:21.629Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T07:27:21.826Z] [BOT] ✅ Created forum post: 🏢 Analyst & Simulation Developer @ Trace3 in #💻・tech-jobs
  ✅ Industry: Analyst & Simulation Developer @ Trace3
[2026-01-18T07:27:23.501Z] [BOT] ✅ Created forum post: 🏢 Analyst & Simulation Developer @ Trace3 in #🌉・san-francisco
[2026-01-18T07:27:23.502Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T07:27:25.003Z] [BOT] 💾 Marked as posted: Analyst & Simulation Developer @ Trace3 (instance #1)
[2026-01-18T07:27:25.003Z] [BOT] 💾 BEFORE ARCHIVING: 2628 jobs in database
[2026-01-18T07:27:25.005Z] [BOT] ✅ No jobs to archive (all 2628 jobs within 7-day window)
[2026-01-18T07:27:25.021Z] [BOT] 💾 Saved posted_jobs.json: 2628 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:27:25.022Z] [BOT] 📍 [ROUTING] "Ground Software Engineer 1/2" @ ORG_d40a5aca Lab USA
[2026-01-18T07:27:25.022Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T07:27:25.210Z] [BOT] ✅ Created forum post: 🏢 Ground Software Engineer 1/2 @ ORG_d40a5aca Lab USA in #💻・tech-jobs
[2026-01-18T07:27:25.210Z] [BOT] ✅ Industry: Ground Software Engineer 1/2 @ ORG_d40a5aca Lab USA
[2026-01-18T07:27:26.929Z] [BOT] ✅ Created forum post: 🏢 Ground Software Engineer 1/2 @ ORG_d40a5aca Lab USA in #💻・remote-usa
[2026-01-18T07:27:26.930Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T07:27:28.430Z] [BOT] 💾 Marked as posted: Ground Software Engineer 1/2 @ ORG_d40a5aca Lab USA (instance #1)
[2026-01-18T07:27:28.430Z] [BOT] 💾 BEFORE ARCHIVING: 2629 jobs in database
[2026-01-18T07:27:28.433Z] [BOT] ✅ No jobs to archive (all 2629 jobs within 7-day window)
[2026-01-18T07:27:28.449Z] [BOT] 💾 Saved posted_jobs.json: 2629 active jobs
[2026-01-18T07:27:28.449Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T07:27:28.449Z] [BOT] 📍 [ROUTING] "Senior Security Compliance Specialist (DoD)" @ cloudflare
[2026-01-18T07:27:28.449Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T07:27:28.649Z] [BOT] ✅ Created forum post: 🏢 Senior Security Compliance Specialist (DoD) @ cloudflare in #💻・tech-jobs
  ✅ Industry: Senior Security Compliance Specialist (DoD) @ cloudflare
[2026-01-18T07:27:30.429Z] [BOT] ✅ Created forum post: 🏢 Senior Security Compliance Specialist (DoD) @ cloudflare in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T07:27:31.930Z] [BOT] 💾 Marked as posted: Senior Security Compliance Specialist (DoD) @ cloudflare (instance #1)
[2026-01-18T07:27:31.930Z] [BOT] 💾 BEFORE ARCHIVING: 2630 jobs in database
[2026-01-18T07:27:31.932Z] [BOT] ✅ No jobs to archive (all 2630 jobs within 7-day window)
[2026-01-18T07:27:31.948Z] [BOT] 💾 Saved posted_jobs.json: 2630 active jobs
[2026-01-18T07:27:31.948Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T07:27:31.948Z] [BOT] 📍 [ROUTING] "Application Engineer 1" @ ORG_f3574a02
[2026-01-18T07:27:31.948Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T07:27:32.098Z] [BOT] ✅ Created forum post: 🏢 Application Engineer 1 @ ORG_f3574a02 in #💻・tech-jobs
[2026-01-18T07:27:32.099Z] [BOT] ✅ Industry: Application Engineer 1 @ ORG_f3574a02
[2026-01-18T07:27:33.753Z] [BOT] ✅ Created forum post: 🏢 Application Engineer 1 @ ORG_f3574a02 in #🌉・san-francisco
[2026-01-18T07:27:33.753Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T07:27:35.253Z] [BOT] 💾 Marked as posted: Application Engineer 1 @ ORG_f3574a02 (instance #1)
[2026-01-18T07:27:35.253Z] [BOT] 💾 BEFORE ARCHIVING: 2631 jobs in database
[2026-01-18T07:27:35.255Z] [BOT] ✅ No jobs to archive (all 2631 jobs within 7-day window)
[2026-01-18T07:27:35.271Z] [BOT] 💾 Saved posted_jobs.json: 2631 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:27:35.271Z] [BOT] 📍 [ROUTING] "Software Engineer - Beam Planning - Starlink" @ ORG_afd623b1
[2026-01-18T07:27:35.271Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T07:27:35.590Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Beam Planning - Starlink @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Beam Planning - Starlink @ ORG_afd623b1
[2026-01-18T07:27:37.401Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Beam Planning - Starlink @ ORG_afd623b1 in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-18T07:27:38.901Z] [BOT] 💾 Marked as posted: Software Engineer - Beam Planning - Starlink @ ORG_afd623b1 (instance #1)
[2026-01-18T07:27:38.902Z] [BOT] 💾 BEFORE ARCHIVING: 2632 jobs in database
[2026-01-18T07:27:38.903Z] [BOT] ✅ No jobs to archive (all 2632 jobs within 7-day window)
[2026-01-18T07:27:38.919Z] [BOT] 💾 Saved posted_jobs.json: 2632 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:27:41.919Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T07:27:41.920Z] [BOT] 📍 [ROUTING] "Consultant - Digital Transformation and Reporting" @ ORG_b344d80e Hartford 
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T07:27:42.093Z] [BOT] ✅ Created forum post: 🏢 Consultant - Digital Transformation and Reporting @ ORG_b344d80e Hartford  in #📣・marketing-jobs
  ✅ Industry: Consultant - Digital Transformation and Reporting @ ORG_b344d80e Hartford
[2026-01-18T07:27:43.790Z] [BOT] ✅ Created forum post: 🏢 Consultant - Digital Transformation and Reporting @ ORG_b344d80e Hartford  in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-18T07:27:45.291Z] [BOT] 💾 Marked as posted: Consultant - Digital Transformation and Reporting @ ORG_b344d80e Hartford  (instance #1)
[2026-01-18T07:27:45.292Z] [BOT] 💾 BEFORE ARCHIVING: 2633 jobs in database
[2026-01-18T07:27:45.293Z] [BOT] ✅ No jobs to archive (all 2633 jobs within 7-day window)
[2026-01-18T07:27:45.309Z] [BOT] 💾 Saved posted_jobs.json: 2633 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:27:48.309Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-18T07:27:48.310Z] [BOT] 📍 [ROUTING] "Finance and Strategy, People & Headcount Planning" @ anthropic
[2026-01-18T07:27:48.310Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T07:27:48.595Z] [BOT] ✅ Created forum post: 🏢 Finance and Strategy, People & Headcount Planning @ anthropic in #💲・sales-jobs
[2026-01-18T07:27:48.595Z] [BOT] ✅ Industry: Finance and Strategy, People & Headcount Planning @ anthropic
[2026-01-18T07:27:50.305Z] [BOT] ✅ Created forum post: 🏢 Finance and Strategy, People & Headcount Planning @ anthropic in #🌉・san-francisco
[2026-01-18T07:27:50.305Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T07:27:51.805Z] [BOT] 💾 Marked as posted: Finance and Strategy, People & Headcount Planning @ anthropic (instance #1)
[2026-01-18T07:27:51.806Z] [BOT] 💾 BEFORE ARCHIVING: 2634 jobs in database
[2026-01-18T07:27:51.807Z] [BOT] ✅ No jobs to archive (all 2634 jobs within 7-day window)
[2026-01-18T07:27:51.825Z] [BOT] 💾 Saved posted_jobs.json: 2634 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:27:54.826Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-18T07:27:54.827Z] [BOT] ⏭️  Skipping duplicate: JID_0c1f72ff-_r10082121 (posted within 7 days)
[2026-01-18T07:27:54.827Z] [BOT] ⏭️  Skipping duplicate: JID_6dd9bdcd (posted within 7 days)
[2026-01-18T07:27:54.827Z] [BOT] ⏭️  Skipping duplicate: JID_efcd0bf0 (posted within 7 days)
[2026-01-18T07:27:54.827Z] [BOT] ⏭️  Skipping duplicate: JID_51af957b-careers_external-JID_5c946e6c-reporting_r2623644 (posted within 7 days)
[2026-01-18T07:27:54.827Z] [BOT] ⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
[2026-01-18T07:27:54.828Z] [BOT] ⏭️  Skipping duplicate: JID_9b98abb5 (posted within 7 days)
[2026-01-18T07:27:54.828Z] [BOT] ⏭️  Skipping duplicate: JID_4d41a9b2-championx_external-JID_062c05d5-i_r00134579 (posted within 7 days)
[2026-01-18T07:27:54.828Z] [BOT] ⏭️  Skipping duplicate: JID_78106ab2 (posted within 7 days)
[2026-01-18T07:27:54.828Z] [BOT] ⏭️  Skipping duplicate: JID_55616ea4 (posted within 7 days)
[2026-01-18T07:27:54.943Z] [BOT] ✅ Loaded pending queue: 2856 total (2836 pending, 20 enriched, 0 posted)
[2026-01-18T07:27:55.119Z] [BOT] ✅ Saved pending queue: 2856 total (2836 pending, 11 enriched, 9 posted)
[2026-01-18T07:27:55.119Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T07:27:55.178Z] [BOT] 📂 Loaded 4785 existing routing entries
[2026-01-18T07:27:55.248Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4795
[2026-01-18T07:27:55.249Z] [BOT] Timestamp: 2026-01-18T07:27:55.227Z
[2026-01-18T07:27:55.249Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T07:27:55.249Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-18T07:27:55.249Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T07:27:55.249Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-01-18T07:27:55.250Z] [BOT] 2. #🌉・san-francisco: 5 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🗽・new-york: 1 posts
     5. #💻・remote-usa: 1 posts
[2026-01-18T07:27:55.250Z] [BOT] [STATS] Channel stats saved
[2026-01-18T07:27:57.275Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2786) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Engineer
- [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*