# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T22:53:50.331Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T22:53:07.643Z] ========================================
[2026-01-16T22:53:07.645Z] Discord Bot Execution Log
[2026-01-16T22:53:07.645Z] Environment: GitHub Actions
[2026-01-16T22:53:07.645Z] Node Version: v20.19.6
[2026-01-16T22:53:07.645Z] ========================================
[2026-01-16T22:53:07.645Z] Environment Variables Check:
[2026-01-16T22:53:07.645Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T22:53:07.645Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T22:53:07.646Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T22:53:07.646Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T22:53:07.646Z] 
Multi-Channel Configuration:
[2026-01-16T22:53:07.646Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T22:53:07.646Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T22:53:07.646Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T22:53:07.646Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T22:53:07.646Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T22:53:07.646Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T22:53:07.646Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T22:53:07.646Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T22:53:07.646Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T22:53:07.646Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T22:53:07.647Z] 
Data Files Check:
[2026-01-16T22:53:07.647Z] .github/data/new_jobs.json: ✅ Exists (10 items, 18013 bytes)
[2026-01-16T22:53:07.655Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1180148 bytes)
[2026-01-16T22:53:07.655Z] 
========================================
[2026-01-16T22:53:07.655Z] Starting Enhanced Discord Bot...
[2026-01-16T22:53:07.656Z] ========================================
[2026-01-16T22:53:08.176Z] [BOT] ✅ Loaded V2 database: 2174 jobs
[2026-01-16T22:53:08.730Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T22:53:08.730Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T22:53:08.731Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T22:53:08.851Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Java Developer at AG Technologies
[2026-01-16T22:53:08.852Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T22:53:08.852Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T22:53:08.853Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T22:53:08.853Z] [BOT] 📋 After multi-location grouping: 11 unique jobs to post
[2026-01-16T22:53:08.854Z] [BOT] (9 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies: dallas, chesterfield
   - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: chesterfield, san francisco, san diego, dayton, new york, dallas
   - Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san antonio, tampa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-16T22:53:08.854Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T22:53:08.858Z] [BOT] 📌 Posting 10 jobs to #💻・tech-jobs
[2026-01-16T22:53:08.859Z] [BOT] 📍 [ROUTING] "Java Developer" @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:08.859Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:53:08.877Z] [BOT ERROR] (node:2369) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T22:53:08.987Z] [BOT ERROR] ❌ Error posting job Java Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Java Developer @ ORG_9af9eef3 Technologies',
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
  url: 'https://discord.com/api/v10/channels/CH_717e47bc/threads'
}
[2026-01-16T22:53:08.987Z] [BOT] ❌ Industry post failed: Java Developer
⚠️  Channel full error count: 1/5
[2026-01-16T22:53:10.648Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_9af9eef3 Technologies in #🤠・austin
[2026-01-16T22:53:10.648Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T22:53:12.148Z] [BOT] 💾 Marked as posted: Java Developer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:12.148Z] [BOT] 💾 BEFORE ARCHIVING: 2175 jobs in database
[2026-01-16T22:53:12.150Z] [BOT] ✅ No jobs to archive (all 2175 jobs within 7-day window)
[2026-01-16T22:53:12.192Z] [BOT] 💾 Saved posted_jobs.json: 2175 active jobs
[2026-01-16T22:53:12.192Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Java Informatica MicroStrategy Training" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:53:12.601Z] [BOT] ✅ Created forum post: 🏢 Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-01-16T22:53:12.601Z] [BOT] ✅ Industry: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:14.407Z] [BOT] ✅ Created forum post: 🏢 Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T22:53:15.907Z] [BOT] 💾 Marked as posted: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:15.907Z] [BOT] 💾 BEFORE ARCHIVING: 2176 jobs in database
[2026-01-16T22:53:15.909Z] [BOT] ✅ No jobs to archive (all 2176 jobs within 7-day window)
[2026-01-16T22:53:15.921Z] [BOT] 💾 Saved posted_jobs.json: 2176 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:15.922Z] [BOT] 📍 [ROUTING] "Hiring for OPT/H4EAD/GC" @ ORG_9af9eef3 Technologies
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:53:16.273Z] [BOT] ✅ Created forum post: 🏢 Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:17.997Z] [BOT] ✅ Created forum post: 🏢 Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T22:53:19.499Z] [BOT] 💾 Marked as posted: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:19.499Z] [BOT] 💾 BEFORE ARCHIVING: 2177 jobs in database
[2026-01-16T22:53:19.501Z] [BOT] ✅ No jobs to archive (all 2177 jobs within 7-day window)
[2026-01-16T22:53:19.518Z] [BOT] 💾 Saved posted_jobs.json: 2177 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:19.518Z] [BOT] 💾 Marked as posted: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:19.518Z] [BOT] 💾 BEFORE ARCHIVING: 2178 jobs in database
[2026-01-16T22:53:19.520Z] [BOT] ✅ No jobs to archive (all 2178 jobs within 7-day window)
[2026-01-16T22:53:19.534Z] [BOT] 💾 Saved posted_jobs.json: 2178 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:19.535Z] [BOT] 💾 Marked as posted: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:19.535Z] [BOT] 💾 BEFORE ARCHIVING: 2179 jobs in database
[2026-01-16T22:53:19.536Z] [BOT] ✅ No jobs to archive (all 2179 jobs within 7-day window)
[2026-01-16T22:53:19.549Z] [BOT] 💾 Saved posted_jobs.json: 2179 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:19.549Z] [BOT] 💾 Marked as posted: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:19.550Z] [BOT] 💾 BEFORE ARCHIVING: 2180 jobs in database
[2026-01-16T22:53:19.551Z] [BOT] ✅ No jobs to archive (all 2180 jobs within 7-day window)
[2026-01-16T22:53:19.567Z] [BOT] 💾 Saved posted_jobs.json: 2180 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:19.568Z] [BOT] 📍 [ROUTING] "Software Engineer openings for OPT/GC/EAD" @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:19.568Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:53:19.890Z] [BOT] ✅ Created forum post: 🏢 Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-01-16T22:53:19.890Z] [BOT] ✅ Industry: Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:21.673Z] [BOT] ✅ Created forum post: 🏢 Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies in #🤠・austin
[2026-01-16T22:53:21.673Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T22:53:23.175Z] [BOT] 💾 Marked as posted: Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:23.175Z] [BOT] 💾 BEFORE ARCHIVING: 2181 jobs in database
[2026-01-16T22:53:23.176Z] [BOT] ✅ No jobs to archive (all 2181 jobs within 7-day window)
[2026-01-16T22:53:23.188Z] [BOT] 💾 Saved posted_jobs.json: 2181 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:23.189Z] [BOT] 📍 [ROUTING] "Training and Placement on Java Informatica Fullstack" @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:23.189Z] [BOT] Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:53:23.320Z] [BOT] ✅ Created forum post: 🏢 Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-01-16T22:53:23.320Z] [BOT] ✅ Industry: Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:25.005Z] [BOT] ✅ Created forum post: 🏢 Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies in #💻・remote-usa
[2026-01-16T22:53:25.005Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T22:53:26.505Z] [BOT] 💾 Marked as posted: Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:26.506Z] [BOT] 💾 BEFORE ARCHIVING: 2182 jobs in database
[2026-01-16T22:53:26.507Z] [BOT] ✅ No jobs to archive (all 2182 jobs within 7-day window)
[2026-01-16T22:53:26.520Z] [BOT] 💾 Saved posted_jobs.json: 2182 active jobs
[2026-01-16T22:53:26.520Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:26.520Z] [BOT] 📍 [ROUTING] "OBIEE Salesforce Training and Placement" @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:26.521Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:53:26.690Z] [BOT] ✅ Created forum post: 🏢 OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:28.414Z] [BOT] ✅ Created forum post: 🏢 OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T22:53:29.916Z] [BOT] 💾 Marked as posted: OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:29.916Z] [BOT] 💾 BEFORE ARCHIVING: 2183 jobs in database
[2026-01-16T22:53:29.917Z] [BOT] ✅ No jobs to archive (all 2183 jobs within 7-day window)
[2026-01-16T22:53:29.934Z] [BOT] 💾 Saved posted_jobs.json: 2183 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:29.934Z] [BOT] 📍 [ROUTING] "Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack - Web Logic and Sales Force" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:53:30.198Z] [BOT] ✅ Created forum post: 🏢 Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack -  in #💻・tech-jobs
[2026-01-16T22:53:30.198Z] [BOT] ✅ Industry: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack - Web Logic and Sales Force @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:31.953Z] [BOT] ✅ Created forum post: 🏢 Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack -  in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T22:53:33.454Z] [BOT] 💾 Marked as posted: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack - Web Logic and Sales Force @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:33.455Z] [BOT] 💾 BEFORE ARCHIVING: 2184 jobs in database
[2026-01-16T22:53:33.456Z] [BOT] ✅ No jobs to archive (all 2184 jobs within 7-day window)
[2026-01-16T22:53:33.468Z] [BOT] 💾 Saved posted_jobs.json: 2184 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:33.469Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:53:33.731Z] [BOT] ✅ Created forum post: 🏢 Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-01-16T22:53:33.731Z] [BOT] ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:35.694Z] [BOT] ✅ Created forum post: 🏢 Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T22:53:37.196Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
💾 BEFORE ARCHIVING: 2185 jobs in database
[2026-01-16T22:53:37.197Z] [BOT] ✅ No jobs to archive (all 2185 jobs within 7-day window)
[2026-01-16T22:53:37.212Z] [BOT] 💾 Saved posted_jobs.json: 2185 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:37.212Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:37.212Z] [BOT] 💾 BEFORE ARCHIVING: 2186 jobs in database
[2026-01-16T22:53:37.213Z] [BOT] ✅ No jobs to archive (all 2186 jobs within 7-day window)
[2026-01-16T22:53:37.226Z] [BOT] 💾 Saved posted_jobs.json: 2186 active jobs
[2026-01-16T22:53:37.226Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:37.226Z] [BOT] 💾 BEFORE ARCHIVING: 2187 jobs in database
[2026-01-16T22:53:37.227Z] [BOT] ✅ No jobs to archive (all 2187 jobs within 7-day window)
[2026-01-16T22:53:37.241Z] [BOT] 💾 Saved posted_jobs.json: 2187 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:37.241Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:37.241Z] [BOT] 💾 BEFORE ARCHIVING: 2188 jobs in database
[2026-01-16T22:53:37.242Z] [BOT] ✅ No jobs to archive (all 2188 jobs within 7-day window)
[2026-01-16T22:53:37.257Z] [BOT] 💾 Saved posted_jobs.json: 2188 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:37.257Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:37.257Z] [BOT] 💾 BEFORE ARCHIVING: 2189 jobs in database
[2026-01-16T22:53:37.259Z] [BOT] ✅ No jobs to archive (all 2189 jobs within 7-day window)
[2026-01-16T22:53:37.271Z] [BOT] 💾 Saved posted_jobs.json: 2189 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:37.271Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
💾 BEFORE ARCHIVING: 2190 jobs in database
[2026-01-16T22:53:37.272Z] [BOT] ✅ No jobs to archive (all 2190 jobs within 7-day window)
[2026-01-16T22:53:37.285Z] [BOT] 💾 Saved posted_jobs.json: 2190 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:37.285Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:37.285Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:53:37.493Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:39.175Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T22:53:40.677Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:40.677Z] [BOT] 💾 BEFORE ARCHIVING: 2191 jobs in database
[2026-01-16T22:53:40.679Z] [BOT] ✅ No jobs to archive (all 2191 jobs within 7-day window)
[2026-01-16T22:53:40.694Z] [BOT] 💾 Saved posted_jobs.json: 2191 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:40.694Z] [BOT] 💾 Marked as posted: Entry Level software engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:40.694Z] [BOT] 💾 BEFORE ARCHIVING: 2192 jobs in database
[2026-01-16T22:53:40.695Z] [BOT] ✅ No jobs to archive (all 2192 jobs within 7-day window)
[2026-01-16T22:53:40.708Z] [BOT] 💾 Saved posted_jobs.json: 2192 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:40.708Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer - " @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:53:40.926Z] [BOT] ✅ Created forum post: 🏢 Hiring Entry Level Software Engineer -  @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Entry Level Software Engineer -  @ ORG_9af9eef3 Technologies
[2026-01-16T22:53:42.722Z] [BOT ERROR] ❌ Error posting job Hiring Entry Level Software Engineer - : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Hiring Entry Level Software Engineer -  @ ORG_9af9eef3 Technologies',
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
  url: 'https://discord.com/api/v10/channels/CH_c4049df6/threads'
}
[2026-01-16T22:53:42.722Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-16T22:53:44.222Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer -  @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T22:53:44.222Z] [BOT] 💾 BEFORE ARCHIVING: 2193 jobs in database
[2026-01-16T22:53:44.224Z] [BOT] ✅ No jobs to archive (all 2193 jobs within 7-day window)
[2026-01-16T22:53:44.236Z] [BOT] 💾 Saved posted_jobs.json: 2193 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:53:47.237Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T22:53:47.238Z] [BOT] ⏭️  Skipping duplicate: JID_aa3587dd (posted within 7 days)
[2026-01-16T22:53:47.238Z] [BOT] ⏭️  Skipping duplicate: JID_8924f07e (posted within 7 days)
[2026-01-16T22:53:47.238Z] [BOT] ⏭️  Skipping duplicate: JID_c114392d (posted within 7 days)
[2026-01-16T22:53:47.238Z] [BOT] ⏭️  Skipping duplicate: JID_3278d02d (posted within 7 days)
⏭️  Skipping duplicate: JID_e33c64fd (posted within 7 days)
[2026-01-16T22:53:47.238Z] [BOT] ⏭️  Skipping duplicate: JID_747d14a2 (posted within 7 days)
[2026-01-16T22:53:47.238Z] [BOT] ⏭️  Skipping duplicate: JID_59cfe0ef (posted within 7 days)
[2026-01-16T22:53:47.239Z] [BOT] ⏭️  Skipping duplicate: JID_72644321 (posted within 7 days)
[2026-01-16T22:53:47.239Z] [BOT] ⏭️  Skipping duplicate: JID_72590c33 (posted within 7 days)
[2026-01-16T22:53:47.239Z] [BOT] ⏭️  Skipping duplicate: JID_a9dbdeb6 (posted within 7 days)
[2026-01-16T22:53:47.343Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[2026-01-16T22:53:47.522Z] [BOT] ✅ Saved pending queue: 2784 total (2764 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T22:53:47.583Z] [BOT] 📂 Loaded 4405 existing routing entries
[2026-01-16T22:53:47.649Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T22:53:47.649Z] [BOT] Total entries: 4415
   Timestamp: 2026-01-16T22:53:47.631Z
[2026-01-16T22:53:47.650Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T22:53:47.650Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-16T22:53:47.651Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 9 posts
     2. #🤠・austin: 5 posts
     3. #💻・remote-usa: 3 posts
     4. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2026-01-16T22:53:49.676Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2369) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Java Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Java Developer
- [BOT ERROR] ❌ Error posting job Hiring Entry Level Software Engineer - : DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*