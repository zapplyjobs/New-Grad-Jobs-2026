# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T06:44:16.758Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T06:43:40.089Z] ========================================
[2026-02-05T06:43:40.091Z] Discord Bot Execution Log
[2026-02-05T06:43:40.091Z] Environment: GitHub Actions
[2026-02-05T06:43:40.091Z] Node Version: v20.20.0
[2026-02-05T06:43:40.091Z] ========================================
[2026-02-05T06:43:40.091Z] Environment Variables Check:
[2026-02-05T06:43:40.092Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T06:43:40.092Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T06:43:40.092Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T06:43:40.092Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T06:43:40.092Z] 
Multi-Channel Configuration:
[2026-02-05T06:43:40.092Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T06:43:40.092Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:43:40.092Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:43:40.092Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T06:43:40.092Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:43:40.092Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:43:40.093Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:43:40.093Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:43:40.093Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T06:43:40.093Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T06:43:40.093Z] 
Data Files Check:
[2026-02-05T06:43:40.094Z] .github/data/new_jobs.json: ✅ Exists (10 items, 149723 bytes)
[2026-02-05T06:43:40.152Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11521285 bytes)
[2026-02-05T06:43:40.153Z] 
========================================
[2026-02-05T06:43:40.153Z] Starting Enhanced Discord Bot...
[2026-02-05T06:43:40.153Z] ========================================
[2026-02-05T06:43:40.739Z] [BOT] ✅ Loaded V2 database: 2268 jobs
[2026-02-05T06:43:41.303Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T06:43:41.303Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T06:43:41.303Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T06:43:41.309Z] [BOT] ✅ Loaded pending queue: 114 total (64 pending, 50 enriched, 0 posted)
[2026-02-05T06:43:41.309Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T06:43:41.310Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T06:43:41.310Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T06:43:41.310Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T06:43:41.311Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-05T06:43:41.311Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T06:43:41.312Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T06:43:41.312Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T06:43:41.312Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T06:43:41.312Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T06:43:41.330Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T06:43:41.330Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
[2026-02-05T06:43:41.330Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
[2026-02-05T06:43:41.330Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-02-05T06:43:41.330Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
[2026-02-05T06:43:41.330Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-02-05T06:43:41.330Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-05T06:43:41.331Z] [BOT] 🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
[2026-02-05T06:43:41.331Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
[2026-02-05T06:43:41.331Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-05T06:43:41.331Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-05T06:43:41.331Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
[2026-02-05T06:43:41.331Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
[2026-02-05T06:43:41.331Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
[2026-02-05T06:43:41.331Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
[2026-02-05T06:43:41.331Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
[2026-02-05T06:43:41.332Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
[2026-02-05T06:43:41.332Z] [BOT] 🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
[2026-02-05T06:43:41.332Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
[2026-02-05T06:43:41.337Z] [BOT] ✅ Loaded pending queue: 114 total (64 pending, 50 enriched, 0 posted)
[2026-02-05T06:43:41.341Z] [BOT] ✅ Saved pending queue: 74 total (64 pending, 10 enriched, 0 posted)
🗑️ Removed 40 blacklisted jobs from pending queue
[2026-02-05T06:43:41.341Z] [BOT] 📋 After blacklist filter: 6 jobs (40 blacklisted)
[2026-02-05T06:43:41.341Z] [BOT] 📋 After data quality filter: 6 jobs (0 invalid)
[2026-02-05T06:43:41.342Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2026-02-05T06:43:41.342Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T06:43:41.344Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-05T06:43:41.345Z] [BOT] 📍 [ROUTING] "Jr. Java Software Engineer" @ ORG_19602d23 IT Resources
[2026-02-05T06:43:41.345Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T06:43:41.362Z] [BOT ERROR] (node:2601) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T06:43:41.679Z] [BOT] ✅ Posted message: Jr. Java Software Engineer @ ORG_19602d23 IT Resources in #💻・tech-jobs
[2026-02-05T06:43:41.679Z] [BOT] ✅ Industry: Jr. Java Software Engineer @ ORG_19602d23 IT Resources
[2026-02-05T06:43:41.680Z] [BOT] 💾 Added channel posting: Jr. Java Software Engineer @ ORG_19602d23 IT Resources → category channel (1 total channels)
[2026-02-05T06:43:41.680Z] [BOT] 💾 BEFORE MERGE: 2269 jobs in memory (cached)
[2026-02-05T06:43:41.729Z] [BOT] ✅ Loaded V2 database: 2268 jobs
💾 DISK STATE: 2268 jobs on disk
[2026-02-05T06:43:41.729Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2269
[2026-02-05T06:43:41.734Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T06:43:41.735Z] [BOT] 💾 AFTER MERGE: 2269 jobs (merged disk + memory)
[2026-02-05T06:43:41.736Z] [BOT] ✅ No jobs to archive (all 2269 jobs within 7-day window)
[2026-02-05T06:43:41.856Z] [BOT] 💾 Saved posted_jobs.json: 2269 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T06:43:43.597Z] [BOT] ✅ Posted message: Jr. Java Software Engineer @ ORG_19602d23 IT Resources in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T06:43:43.598Z] [BOT] 💾 Added channel posting: Jr. Java Software Engineer @ ORG_19602d23 IT Resources → location channel (2 total channels)
💾 BEFORE MERGE: 2269 jobs in memory (cached)
[2026-02-05T06:43:43.646Z] [BOT] ✅ Loaded V2 database: 2269 jobs
💾 DISK STATE: 2269 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2269
[2026-02-05T06:43:43.651Z] [BOT] 🔀 Deep merged: Jr. Java Software Engineer @ ORG_19602d23 IT Resources (disk: 1 channels → merged: 2 channels)
[2026-02-05T06:43:43.651Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2269 jobs (merged disk + memory)
[2026-02-05T06:43:43.652Z] [BOT] ✅ No jobs to archive (all 2269 jobs within 7-day window)
[2026-02-05T06:43:43.767Z] [BOT] 💾 Saved posted_jobs.json: 2269 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T06:43:45.269Z] [BOT] 📍 [ROUTING] "POS Engineer-Direct Hire-NO CTC/H1B" @ ORG_2f17a0f8 via Dice
[2026-02-05T06:43:45.270Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T06:43:45.446Z] [BOT] ✅ Posted message: POS Engineer-Direct Hire-NO CTC/H1B @ ORG_2f17a0f8 via Dice in #💻・tech-jobs
[2026-02-05T06:43:45.446Z] [BOT] ✅ Industry: POS Engineer-Direct Hire-NO CTC/H1B @ ORG_2f17a0f8 via Dice
[2026-02-05T06:43:45.446Z] [BOT] 💾 Added channel posting: POS Engineer-Direct Hire-NO CTC/H1B @ ORG_2f17a0f8 via Dice → category channel (1 total channels)
[2026-02-05T06:43:45.447Z] [BOT] 💾 BEFORE MERGE: 2270 jobs in memory (cached)
[2026-02-05T06:43:45.486Z] [BOT] ✅ Loaded V2 database: 2269 jobs
💾 DISK STATE: 2269 jobs on disk
[2026-02-05T06:43:45.486Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2270
[2026-02-05T06:43:45.491Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T06:43:45.491Z] [BOT] 💾 AFTER MERGE: 2270 jobs (merged disk + memory)
[2026-02-05T06:43:45.492Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-02-05T06:43:45.603Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T06:43:47.462Z] [BOT] ✅ Posted message: POS Engineer-Direct Hire-NO CTC/H1B @ ORG_2f17a0f8 via Dice in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T06:43:47.462Z] [BOT] 💾 Added channel posting: POS Engineer-Direct Hire-NO CTC/H1B @ ORG_2f17a0f8 via Dice → location channel (2 total channels)
[2026-02-05T06:43:47.462Z] [BOT] 💾 BEFORE MERGE: 2270 jobs in memory (cached)
[2026-02-05T06:43:47.503Z] [BOT] ✅ Loaded V2 database: 2270 jobs
💾 DISK STATE: 2270 jobs on disk
[2026-02-05T06:43:47.504Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2270
[2026-02-05T06:43:47.508Z] [BOT] 🔀 Deep merged: POS Engineer-Direct Hire-NO CTC/H1B @ ORG_2f17a0f8 via Dice (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T06:43:47.508Z] [BOT] 💾 AFTER MERGE: 2270 jobs (merged disk + memory)
[2026-02-05T06:43:47.510Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-02-05T06:43:47.620Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T06:43:49.122Z] [BOT] 📍 [ROUTING] "Software Engineer (Ruby on Rails)" @ ORG_631e8f19
[2026-02-05T06:43:49.122Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T06:43:49.442Z] [BOT] ✅ Posted message: Software Engineer (Ruby on Rails) @ ORG_631e8f19 in #💻・tech-jobs
  ✅ Industry: Software Engineer (Ruby on Rails) @ ORG_631e8f19
[2026-02-05T06:43:49.443Z] [BOT] 💾 Added channel posting: Software Engineer (Ruby on Rails) @ ORG_631e8f19 → category channel (1 total channels)
[2026-02-05T06:43:49.443Z] [BOT] 💾 BEFORE MERGE: 2271 jobs in memory (cached)
[2026-02-05T06:43:49.481Z] [BOT] ✅ Loaded V2 database: 2270 jobs
💾 DISK STATE: 2270 jobs on disk
[2026-02-05T06:43:49.482Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2271
[2026-02-05T06:43:49.487Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2271 jobs (merged disk + memory)
[2026-02-05T06:43:49.488Z] [BOT] ✅ No jobs to archive (all 2271 jobs within 7-day window)
[2026-02-05T06:43:49.597Z] [BOT] 💾 Saved posted_jobs.json: 2271 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T06:43:51.498Z] [BOT] ✅ Posted message: Software Engineer (Ruby on Rails) @ ORG_631e8f19 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T06:43:51.499Z] [BOT] 💾 Added channel posting: Software Engineer (Ruby on Rails) @ ORG_631e8f19 → location channel (2 total channels)
[2026-02-05T06:43:51.499Z] [BOT] 💾 BEFORE MERGE: 2271 jobs in memory (cached)
[2026-02-05T06:43:51.540Z] [BOT] ✅ Loaded V2 database: 2271 jobs
💾 DISK STATE: 2271 jobs on disk
[2026-02-05T06:43:51.540Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2271
[2026-02-05T06:43:51.544Z] [BOT] 🔀 Deep merged: Software Engineer (Ruby on Rails) @ ORG_631e8f19 (disk: 1 channels → merged: 2 channels)
[2026-02-05T06:43:51.544Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2271 jobs (merged disk + memory)
[2026-02-05T06:43:51.546Z] [BOT] ✅ No jobs to archive (all 2271 jobs within 7-day window)
[2026-02-05T06:43:51.669Z] [BOT] 💾 Saved posted_jobs.json: 2271 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T06:43:56.168Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-02-05T06:43:56.169Z] [BOT] 📍 [ROUTING] "Java, Javascript, Python, NodeJS Software Engineer" @ ORG_3eab285c
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-05T06:43:56.169Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-05T06:43:56.500Z] [BOT] ✅ Posted message: Java, Javascript, Python, NodeJS Software Engineer @ ORG_3eab285c in #📊・JID_fb739488
[2026-02-05T06:43:56.500Z] [BOT] ✅ Industry: Java, Javascript, Python, NodeJS Software Engineer @ ORG_3eab285c
[2026-02-05T06:43:56.501Z] [BOT] 💾 Added channel posting: Java, Javascript, Python, NodeJS Software Engineer @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T06:43:56.501Z] [BOT] 💾 BEFORE MERGE: 2272 jobs in memory (cached)
[2026-02-05T06:43:56.539Z] [BOT] ✅ Loaded V2 database: 2271 jobs
💾 DISK STATE: 2271 jobs on disk
[2026-02-05T06:43:56.539Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2272
[2026-02-05T06:43:56.544Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T06:43:56.544Z] [BOT] 💾 AFTER MERGE: 2272 jobs (merged disk + memory)
[2026-02-05T06:43:56.545Z] [BOT] ✅ No jobs to archive (all 2272 jobs within 7-day window)
[2026-02-05T06:43:56.665Z] [BOT] 💾 Saved posted_jobs.json: 2272 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T06:43:58.449Z] [BOT] ✅ Posted message: Java, Javascript, Python, NodeJS Software Engineer @ ORG_3eab285c in #📍・JID_6daed763
[2026-02-05T06:43:58.449Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T06:43:58.450Z] [BOT] 💾 Added channel posting: Java, Javascript, Python, NodeJS Software Engineer @ ORG_3eab285c → location channel (2 total channels)
[2026-02-05T06:43:58.450Z] [BOT] 💾 BEFORE MERGE: 2272 jobs in memory (cached)
[2026-02-05T06:43:58.488Z] [BOT] ✅ Loaded V2 database: 2272 jobs
[2026-02-05T06:43:58.488Z] [BOT] 💾 DISK STATE: 2272 jobs on disk
[2026-02-05T06:43:58.489Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2272
[2026-02-05T06:43:58.493Z] [BOT] 🔀 Deep merged: Java, Javascript, Python, NodeJS Software Engineer @ ORG_3eab285c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T06:43:58.493Z] [BOT] 💾 AFTER MERGE: 2272 jobs (merged disk + memory)
[2026-02-05T06:43:58.495Z] [BOT] ✅ No jobs to archive (all 2272 jobs within 7-day window)
[2026-02-05T06:43:58.620Z] [BOT] 💾 Saved posted_jobs.json: 2272 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T06:44:00.120Z] [BOT] 📍 [ROUTING] "Software Engineer–Systems (Associate/Experienced)" @ ORG_6181447bing
[2026-02-05T06:44:00.120Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-05T06:44:00.271Z] [BOT] ✅ Posted message: Software Engineer–Systems (Associate/Experienced) @ ORG_6181447bing in #📊・JID_fb739488
[2026-02-05T06:44:00.271Z] [BOT] ✅ Industry: Software Engineer–Systems (Associate/Experienced) @ ORG_6181447bing
[2026-02-05T06:44:00.272Z] [BOT] 💾 Added channel posting: Software Engineer–Systems (Associate/Experienced) @ ORG_6181447bing → category channel (1 total channels)
[2026-02-05T06:44:00.272Z] [BOT] 💾 BEFORE MERGE: 2273 jobs in memory (cached)
[2026-02-05T06:44:00.310Z] [BOT] ✅ Loaded V2 database: 2272 jobs
💾 DISK STATE: 2272 jobs on disk
[2026-02-05T06:44:00.310Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2273
[2026-02-05T06:44:00.315Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T06:44:00.316Z] [BOT] 💾 AFTER MERGE: 2273 jobs (merged disk + memory)
[2026-02-05T06:44:00.318Z] [BOT] ✅ No jobs to archive (all 2273 jobs within 7-day window)
[2026-02-05T06:44:00.445Z] [BOT] 💾 Saved posted_jobs.json: 2273 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T06:44:02.114Z] [BOT] ✅ Posted message: Software Engineer–Systems (Associate/Experienced) @ ORG_6181447bing in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T06:44:02.114Z] [BOT] 💾 Added channel posting: Software Engineer–Systems (Associate/Experienced) @ ORG_6181447bing → location channel (2 total channels)
[2026-02-05T06:44:02.114Z] [BOT] 💾 BEFORE MERGE: 2273 jobs in memory (cached)
[2026-02-05T06:44:02.153Z] [BOT] ✅ Loaded V2 database: 2273 jobs
💾 DISK STATE: 2273 jobs on disk
[2026-02-05T06:44:02.153Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2273
[2026-02-05T06:44:02.157Z] [BOT] 🔀 Deep merged: Software Engineer–Systems (Associate/Experienced) @ ORG_6181447bing (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T06:44:02.157Z] [BOT] 💾 AFTER MERGE: 2273 jobs (merged disk + memory)
[2026-02-05T06:44:02.158Z] [BOT] ✅ No jobs to archive (all 2273 jobs within 7-day window)
[2026-02-05T06:44:02.279Z] [BOT] 💾 Saved posted_jobs.json: 2273 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T06:44:06.778Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-05T06:44:06.780Z] [BOT] 📍 [ROUTING] "Software Engineer III" @ ORG_3eab285c
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-05T06:44:06.780Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T06:44:06.950Z] [BOT] ✅ Posted message: Software Engineer III @ ORG_3eab285c in #🤖・ai-jobs
  ✅ Industry: Software Engineer III @ ORG_3eab285c
[2026-02-05T06:44:06.951Z] [BOT] 💾 Added channel posting: Software Engineer III @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T06:44:06.951Z] [BOT] 💾 BEFORE MERGE: 2274 jobs in memory (cached)
[2026-02-05T06:44:06.989Z] [BOT] ✅ Loaded V2 database: 2273 jobs
💾 DISK STATE: 2273 jobs on disk
[2026-02-05T06:44:06.989Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2274
[2026-02-05T06:44:06.994Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T06:44:06.994Z] [BOT] 💾 AFTER MERGE: 2274 jobs (merged disk + memory)
[2026-02-05T06:44:06.995Z] [BOT] ✅ No jobs to archive (all 2274 jobs within 7-day window)
[2026-02-05T06:44:07.129Z] [BOT] 💾 Saved posted_jobs.json: 2274 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T06:44:08.782Z] [BOT] ✅ Posted message: Software Engineer III @ ORG_3eab285c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T06:44:08.782Z] [BOT] 💾 Added channel posting: Software Engineer III @ ORG_3eab285c → location channel (2 total channels)
[2026-02-05T06:44:08.783Z] [BOT] 💾 BEFORE MERGE: 2274 jobs in memory (cached)
[2026-02-05T06:44:08.822Z] [BOT] ✅ Loaded V2 database: 2274 jobs
💾 DISK STATE: 2274 jobs on disk
[2026-02-05T06:44:08.823Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2274
[2026-02-05T06:44:08.827Z] [BOT] 🔀 Deep merged: Software Engineer III @ ORG_3eab285c (disk: 1 channels → merged: 2 channels)
[2026-02-05T06:44:08.827Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2274 jobs (merged disk + memory)
[2026-02-05T06:44:08.829Z] [BOT] ✅ No jobs to archive (all 2274 jobs within 7-day window)
[2026-02-05T06:44:08.956Z] [BOT] 💾 Saved posted_jobs.json: 2274 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T06:44:13.455Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-02-05T06:44:13.457Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a9b65038..." not found, but found as SHA256 "e732a45d4a8329ff"
[2026-02-05T06:44:13.457Z] [BOT] ⏭️  Skipping duplicate: JID_e41a95ff (posted within 7 days)
[2026-02-05T06:44:13.458Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bf902498-..." not found, but found as SHA256 "a8214405427e3466"
⏭️  Skipping duplicate: JID_0480b23b (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_9d4aee5d..." not found, but found as SHA256 "65b0f2107b47bb40"
⏭️  Skipping duplicate: JID_4f408095 (posted within 7 days)
[2026-02-05T06:44:13.458Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7d526783-..." not found, but found as SHA256 "901eb27179689fae"
⏭️  Skipping duplicate: JID_2c7cce71 (posted within 7 days)
[2026-02-05T06:44:13.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5dacedaa..." not found, but found as SHA256 "778d8f9282e7d2e3"
[2026-02-05T06:44:13.459Z] [BOT] ⏭️  Skipping duplicate: JID_b4776297 (posted within 7 days)
[2026-02-05T06:44:13.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d4aee5d..." not found, but found as SHA256 "f4cbb23a58c5be7a"
[2026-02-05T06:44:13.459Z] [BOT] ⏭️  Skipping duplicate: JID_13ab5eb5 (posted within 7 days)
[2026-02-05T06:44:13.461Z] [BOT] ✅ Loaded pending queue: 74 total (64 pending, 10 enriched, 0 posted)
[2026-02-05T06:44:13.465Z] [BOT] ✅ Saved pending queue: 74 total (64 pending, 4 enriched, 6 posted)
[2026-02-05T06:44:13.465Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T06:44:13.557Z] [BOT] 📂 Loaded 12359 existing routing entries
[2026-02-05T06:44:13.691Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 12365
[2026-02-05T06:44:13.691Z] [BOT] Timestamp: 2026-02-05T06:44:13.637Z
[2026-02-05T06:44:13.692Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T06:44:13.692Z] [BOT] Total attempts: 56
   Successful: 12
   Failed: 0
   Skipped: 44
[2026-02-05T06:44:13.692Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-05T06:44:13.692Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 6
   Top channels:
     1. #📍・JID_6daed763: 4 posts
[2026-02-05T06:44:13.692Z] [BOT] 2. #💻・tech-jobs: 3 posts
     3. #📊・JID_fb739488: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-02-05T06:44:13.692Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-05T06:44:13.699Z] [BOT] 💾 BEFORE MERGE: 2274 jobs in memory (cached)
[2026-02-05T06:44:13.742Z] [BOT] ✅ Loaded V2 database: 2274 jobs
💾 DISK STATE: 2274 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2274
[2026-02-05T06:44:13.750Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T06:44:13.751Z] [BOT] 💾 AFTER MERGE: 2274 jobs (merged disk + memory)
[2026-02-05T06:44:13.752Z] [BOT] ✅ No jobs to archive (all 2274 jobs within 7-day window)
[2026-02-05T06:44:13.879Z] [BOT] 💾 Saved posted_jobs.json: 2274 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T06:44:15.900Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2601) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*