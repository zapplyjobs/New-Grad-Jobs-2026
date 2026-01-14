# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T04:40:25.211Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T04:39:31.513Z] ========================================
[2026-01-14T04:39:31.515Z] Discord Bot Execution Log
[2026-01-14T04:39:31.515Z] Environment: GitHub Actions
[2026-01-14T04:39:31.515Z] Node Version: v20.19.6
[2026-01-14T04:39:31.515Z] ========================================
[2026-01-14T04:39:31.516Z] Environment Variables Check:
[2026-01-14T04:39:31.516Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T04:39:31.516Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T04:39:31.516Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T04:39:31.516Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T04:39:31.516Z] 
Multi-Channel Configuration:
[2026-01-14T04:39:31.516Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T04:39:31.516Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T04:39:31.516Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T04:39:31.516Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T04:39:31.517Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T04:39:31.517Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T04:39:31.517Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T04:39:31.517Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T04:39:31.517Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T04:39:31.517Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T04:39:31.517Z] 
Data Files Check:
[2026-01-14T04:39:31.518Z] .github/data/new_jobs.json: ✅ Exists (10 items, 149821 bytes)
[2026-01-14T04:39:31.523Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 622181 bytes)
[2026-01-14T04:39:31.523Z] 
========================================
[2026-01-14T04:39:31.523Z] Starting Enhanced Discord Bot...
[2026-01-14T04:39:31.523Z] ========================================
[2026-01-14T04:39:32.064Z] [BOT] ✅ Loaded V2 database: 1180 jobs
[2026-01-14T04:39:32.584Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T04:39:32.584Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T04:39:32.584Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T04:39:32.696Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Software Engineer, Full-Stack at brex
[2026-01-14T04:39:32.698Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T04:39:32.698Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T04:39:32.698Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T04:39:32.699Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-14T04:39:32.699Z] [BOT] (5 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Software Engineer II, Product  @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states
   - Staff Product Designer @ brex: new york, new york, united states, san francisco, california, united states
   - Startups Account Executive @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-14T04:39:32.699Z] [BOT] - Startups Ambassador @ brex: new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T04:39:32.704Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-14T04:39:32.705Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Full-Stack" @ brex
[2026-01-14T04:39:32.705Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T04:39:32.723Z] [BOT ERROR] (node:2739) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T04:39:32.933Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Full-Stack @ brex in #🤖・ai-jobs
  ✅ Industry: Senior Software Engineer, Full-Stack @ brex
[2026-01-14T04:39:34.565Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Full-Stack @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T04:39:36.067Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Full-Stack @ brex (instance #1)
[2026-01-14T04:39:36.067Z] [BOT] 💾 BEFORE ARCHIVING: 1181 jobs in database
[2026-01-14T04:39:36.068Z] [BOT] ✅ No jobs to archive (all 1181 jobs within 7-day window)
[2026-01-14T04:39:36.081Z] [BOT] 💾 Saved posted_jobs.json: 1181 active jobs
[2026-01-14T04:39:36.081Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T04:39:39.082Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-14T04:39:39.083Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Product " @ brex
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T04:39:39.549Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Product  @ brex in #💻・tech-jobs
[2026-01-14T04:39:39.549Z] [BOT] ✅ Industry: Senior Software Engineer, Product  @ brex
[2026-01-14T04:39:41.233Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Product  @ brex in #🗽・new-york
[2026-01-14T04:39:41.234Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T04:39:42.735Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Product  @ brex (instance #1)
[2026-01-14T04:39:42.735Z] [BOT] 💾 BEFORE ARCHIVING: 1182 jobs in database
[2026-01-14T04:39:42.737Z] [BOT] ✅ No jobs to archive (all 1182 jobs within 7-day window)
[2026-01-14T04:39:42.746Z] [BOT] 💾 Saved posted_jobs.json: 1182 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:39:42.746Z] [BOT] 📍 [ROUTING] "Software Engineer II, Product " @ brex
[2026-01-14T04:39:42.746Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T04:39:42.880Z] [BOT] ✅ Created forum post: 🏢 Software Engineer II, Product  @ brex in #💻・tech-jobs
[2026-01-14T04:39:42.881Z] [BOT] ✅ Industry: Software Engineer II, Product  @ brex
[2026-01-14T04:39:44.526Z] [BOT] ✅ Created forum post: 🏢 Software Engineer II, Product  @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T04:39:46.027Z] [BOT] 💾 Marked as posted: Software Engineer II, Product  @ brex (instance #1)
[2026-01-14T04:39:46.027Z] [BOT] 💾 BEFORE ARCHIVING: 1183 jobs in database
[2026-01-14T04:39:46.028Z] [BOT] ✅ No jobs to archive (all 1183 jobs within 7-day window)
[2026-01-14T04:39:46.037Z] [BOT] 💾 Saved posted_jobs.json: 1183 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:39:46.037Z] [BOT] 💾 Marked as posted: Software Engineer II, Product  @ brex (instance #1)
[2026-01-14T04:39:46.038Z] [BOT] 💾 BEFORE ARCHIVING: 1184 jobs in database
[2026-01-14T04:39:46.038Z] [BOT] ✅ No jobs to archive (all 1184 jobs within 7-day window)
[2026-01-14T04:39:46.046Z] [BOT] 💾 Saved posted_jobs.json: 1184 active jobs
[2026-01-14T04:39:46.046Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T04:39:46.046Z] [BOT] 💾 Marked as posted: Software Engineer II, Product  @ brex (instance #1)
[2026-01-14T04:39:46.047Z] [BOT] 💾 BEFORE ARCHIVING: 1185 jobs in database
[2026-01-14T04:39:46.048Z] [BOT] ✅ No jobs to archive (all 1185 jobs within 7-day window)
[2026-01-14T04:39:46.056Z] [BOT] 💾 Saved posted_jobs.json: 1185 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:39:49.057Z] [BOT] 📌 Posting 3 jobs to #📣・marketing-jobs
[2026-01-14T04:39:49.058Z] [BOT] 📍 [ROUTING] "Staff Brand Designer" @ brex
[2026-01-14T04:39:49.058Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T04:39:49.272Z] [BOT] ✅ Created forum post: 🏢 Staff Brand Designer @ brex in #📣・marketing-jobs
  ✅ Industry: Staff Brand Designer @ brex
[2026-01-14T04:39:50.966Z] [BOT] ✅ Created forum post: 🏢 Staff Brand Designer @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T04:39:52.468Z] [BOT] 💾 Marked as posted: Staff Brand Designer @ brex (instance #1)
[2026-01-14T04:39:52.468Z] [BOT] 💾 BEFORE ARCHIVING: 1186 jobs in database
[2026-01-14T04:39:52.469Z] [BOT] ✅ No jobs to archive (all 1186 jobs within 7-day window)
[2026-01-14T04:39:52.478Z] [BOT] 💾 Saved posted_jobs.json: 1186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:39:52.478Z] [BOT] 📍 [ROUTING] "Staff Brand Designer, Interactive" @ brex
[2026-01-14T04:39:52.479Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T04:39:52.619Z] [BOT] ✅ Created forum post: 🏢 Staff Brand Designer, Interactive @ brex in #📣・marketing-jobs
  ✅ Industry: Staff Brand Designer, Interactive @ brex
[2026-01-14T04:39:54.432Z] [BOT] ✅ Created forum post: 🏢 Staff Brand Designer, Interactive @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T04:39:55.933Z] [BOT] 💾 Marked as posted: Staff Brand Designer, Interactive @ brex (instance #1)
💾 BEFORE ARCHIVING: 1187 jobs in database
[2026-01-14T04:39:55.934Z] [BOT] ✅ No jobs to archive (all 1187 jobs within 7-day window)
[2026-01-14T04:39:55.943Z] [BOT] 💾 Saved posted_jobs.json: 1187 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:39:55.944Z] [BOT] 📍 [ROUTING] "Staff Product Designer" @ brex
[2026-01-14T04:39:55.944Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T04:39:56.172Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer @ brex in #📣・marketing-jobs
[2026-01-14T04:39:56.172Z] [BOT] ✅ Industry: Staff Product Designer @ brex
[2026-01-14T04:39:57.845Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer @ brex in #🗽・new-york
[2026-01-14T04:39:57.845Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T04:39:59.346Z] [BOT] 💾 Marked as posted: Staff Product Designer @ brex (instance #1)
[2026-01-14T04:39:59.346Z] [BOT] 💾 BEFORE ARCHIVING: 1188 jobs in database
[2026-01-14T04:39:59.347Z] [BOT] ✅ No jobs to archive (all 1188 jobs within 7-day window)
[2026-01-14T04:39:59.356Z] [BOT] 💾 Saved posted_jobs.json: 1188 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:39:59.356Z] [BOT] 💾 Marked as posted: Staff Product Designer @ brex (instance #1)
[2026-01-14T04:39:59.356Z] [BOT] 💾 BEFORE ARCHIVING: 1189 jobs in database
[2026-01-14T04:39:59.357Z] [BOT] ✅ No jobs to archive (all 1189 jobs within 7-day window)
[2026-01-14T04:39:59.365Z] [BOT] 💾 Saved posted_jobs.json: 1189 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:40:02.365Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-14T04:40:02.366Z] [BOT] 📍 [ROUTING] "Startups Account Executive" @ brex
[2026-01-14T04:40:02.366Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T04:40:02.713Z] [BOT] ✅ Created forum post: 🏢 Startups Account Executive @ brex in #💲・sales-jobs
  ✅ Industry: Startups Account Executive @ brex
[2026-01-14T04:40:04.343Z] [BOT] ✅ Created forum post: 🏢 Startups Account Executive @ brex in #🌉・san-francisco
[2026-01-14T04:40:04.343Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T04:40:05.844Z] [BOT] 💾 Marked as posted: Startups Account Executive @ brex (instance #1)
[2026-01-14T04:40:05.844Z] [BOT] 💾 BEFORE ARCHIVING: 1190 jobs in database
[2026-01-14T04:40:05.845Z] [BOT] ✅ No jobs to archive (all 1190 jobs within 7-day window)
[2026-01-14T04:40:05.854Z] [BOT] 💾 Saved posted_jobs.json: 1190 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:40:05.854Z] [BOT] 💾 Marked as posted: Startups Account Executive @ brex (instance #1)
[2026-01-14T04:40:05.854Z] [BOT] 💾 BEFORE ARCHIVING: 1191 jobs in database
[2026-01-14T04:40:05.855Z] [BOT] ✅ No jobs to archive (all 1191 jobs within 7-day window)
[2026-01-14T04:40:05.865Z] [BOT] 💾 Saved posted_jobs.json: 1191 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:40:05.865Z] [BOT] 📍 [ROUTING] "Startups Ambassador" @ brex
[2026-01-14T04:40:05.865Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T04:40:06.002Z] [BOT] ✅ Created forum post: 🏢 Startups Ambassador @ brex in #💲・sales-jobs
  ✅ Industry: Startups Ambassador @ brex
[2026-01-14T04:40:07.852Z] [BOT] ✅ Created forum post: 🏢 Startups Ambassador @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T04:40:09.353Z] [BOT] 💾 Marked as posted: Startups Ambassador @ brex (instance #1)
[2026-01-14T04:40:09.354Z] [BOT] 💾 BEFORE ARCHIVING: 1192 jobs in database
[2026-01-14T04:40:09.355Z] [BOT] ✅ No jobs to archive (all 1192 jobs within 7-day window)
[2026-01-14T04:40:09.366Z] [BOT] 💾 Saved posted_jobs.json: 1192 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:40:09.366Z] [BOT] 💾 Marked as posted: Startups Ambassador @ brex (instance #1)
[2026-01-14T04:40:09.366Z] [BOT] 💾 BEFORE ARCHIVING: 1193 jobs in database
[2026-01-14T04:40:09.367Z] [BOT] ✅ No jobs to archive (all 1193 jobs within 7-day window)
[2026-01-14T04:40:09.375Z] [BOT] 💾 Saved posted_jobs.json: 1193 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:40:09.375Z] [BOT] 📍 [ROUTING] "Support Specialist I (Remote)" @ brex
[2026-01-14T04:40:09.375Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T04:40:09.546Z] [BOT] ✅ Created forum post: 🏢 Support Specialist I (Remote) @ brex in #💲・sales-jobs
[2026-01-14T04:40:09.547Z] [BOT] ✅ Industry: Support Specialist I (Remote) @ brex
[2026-01-14T04:40:11.240Z] [BOT] ✅ Created forum post: 🏢 Support Specialist I (Remote) @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T04:40:12.741Z] [BOT] 💾 Marked as posted: Support Specialist I (Remote) @ brex (instance #1)
[2026-01-14T04:40:12.741Z] [BOT] 💾 BEFORE ARCHIVING: 1194 jobs in database
[2026-01-14T04:40:12.742Z] [BOT] ✅ No jobs to archive (all 1194 jobs within 7-day window)
[2026-01-14T04:40:12.751Z] [BOT] 💾 Saved posted_jobs.json: 1194 active jobs
[2026-01-14T04:40:12.751Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T04:40:15.752Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T04:40:15.752Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst" @ ORG_f931030b
[2026-01-14T04:40:15.752Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T04:40:15.971Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_f931030b in #📈・JID_fb739488
[2026-01-14T04:40:15.972Z] [BOT] ✅ Industry: Business Intelligence Analyst @ ORG_f931030b
[2026-01-14T04:40:17.658Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_f931030b in #💻・remote-usa
[2026-01-14T04:40:17.658Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T04:40:19.159Z] [BOT] 💾 Marked as posted: Business Intelligence Analyst @ ORG_f931030b (instance #1)
[2026-01-14T04:40:19.159Z] [BOT] 💾 BEFORE ARCHIVING: 1195 jobs in database
[2026-01-14T04:40:19.160Z] [BOT] ✅ No jobs to archive (all 1195 jobs within 7-day window)
[2026-01-14T04:40:19.169Z] [BOT] 💾 Saved posted_jobs.json: 1195 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T04:40:22.170Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T04:40:22.170Z] [BOT] ⏭️  Skipping duplicate: JID_baae5752 (posted within 7 days)
[2026-01-14T04:40:22.170Z] [BOT] ⏭️  Skipping duplicate: JID_7ea6b88d (posted within 7 days)
[2026-01-14T04:40:22.170Z] [BOT] ⏭️  Skipping duplicate: JID_e617f383 (posted within 7 days)
[2026-01-14T04:40:22.171Z] [BOT] ⏭️  Skipping duplicate: JID_1108fddb (posted within 7 days)
[2026-01-14T04:40:22.171Z] [BOT] ⏭️  Skipping duplicate: JID_b41975d9 (posted within 7 days)
[2026-01-14T04:40:22.171Z] [BOT] ⏭️  Skipping duplicate: JID_6f99385b (posted within 7 days)
⏭️  Skipping duplicate: JID_2f67d2f3 (posted within 7 days)
[2026-01-14T04:40:22.171Z] [BOT] ⏭️  Skipping duplicate: JID_4d36c8c9 (posted within 7 days)
[2026-01-14T04:40:22.171Z] [BOT] ⏭️  Skipping duplicate: JID_89b48b67 (posted within 7 days)
[2026-01-14T04:40:22.171Z] [BOT] ⏭️  Skipping duplicate: JID_20575f82-analyst_r233902 (posted within 7 days)
[2026-01-14T04:40:22.306Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[2026-01-14T04:40:22.463Z] [BOT] ✅ Saved pending queue: 2734 total (2714 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-14T04:40:22.463Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-14T04:40:22.517Z] [BOT] 📂 Loaded 3305 existing routing entries
[2026-01-14T04:40:22.578Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3315
   Timestamp: 2026-01-14T04:40:22.563Z
[2026-01-14T04:40:22.578Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T04:40:22.578Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T04:40:22.579Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T04:40:22.579Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
     1. #🌉・san-francisco: 5 posts
     2. #🗽・new-york: 3 posts
[2026-01-14T04:40:22.579Z] [BOT] 3. #📣・marketing-jobs: 3 posts
     4. #💲・sales-jobs: 3 posts
     5. #💻・tech-jobs: 2 posts
[2026-01-14T04:40:22.579Z] [BOT] [STATS] Channel stats saved
[2026-01-14T04:40:24.605Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2739) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*