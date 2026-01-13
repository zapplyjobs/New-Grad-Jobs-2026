# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T07:01:50.138Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T07:01:06.130Z] ========================================
[2026-01-13T07:01:06.132Z] Discord Bot Execution Log
[2026-01-13T07:01:06.132Z] Environment: GitHub Actions
[2026-01-13T07:01:06.133Z] Node Version: v20.19.6
[2026-01-13T07:01:06.133Z] ========================================
[2026-01-13T07:01:06.133Z] Environment Variables Check:
[2026-01-13T07:01:06.133Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T07:01:06.133Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T07:01:06.133Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T07:01:06.133Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T07:01:06.133Z] 
Multi-Channel Configuration:
[2026-01-13T07:01:06.133Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T07:01:06.133Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T07:01:06.134Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T07:01:06.134Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T07:01:06.134Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T07:01:06.134Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T07:01:06.134Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T07:01:06.134Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T07:01:06.134Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T07:01:06.134Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T07:01:06.134Z] 
Data Files Check:
[2026-01-13T07:01:06.135Z] .github/data/new_jobs.json: ✅ Exists (10 items, 101164 bytes)
[2026-01-13T07:01:06.138Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 429685 bytes)
[2026-01-13T07:01:06.138Z] 
========================================
[2026-01-13T07:01:06.138Z] Starting Enhanced Discord Bot...
[2026-01-13T07:01:06.138Z] ========================================
[2026-01-13T07:01:06.669Z] [BOT] ✅ Loaded V2 database: 818 jobs
[2026-01-13T07:01:07.244Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T07:01:07.244Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T07:01:07.244Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T07:01:07.356Z] [BOT] ✅ Loaded pending queue: 2699 total (2679 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Developer at Cisive
[2026-01-13T07:01:07.358Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T07:01:07.358Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T07:01:07.358Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T07:01:07.359Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-13T07:01:07.359Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-13T07:01:07.359Z] [BOT] - Android Sales Expert @ 2020 Companies: sf, alameda
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T07:01:07.363Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-13T07:01:07.364Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_6468cf88
[2026-01-13T07:01:07.364Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:01:07.369Z] [BOT ERROR] (node:2684) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T07:01:07.501Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_6468cf88 in #💻・tech-jobs
[2026-01-13T07:01:07.502Z] [BOT] ✅ Industry: Software Developer @ ORG_6468cf88
[2026-01-13T07:01:09.003Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_6468cf88 (instance #1)
[2026-01-13T07:01:09.003Z] [BOT] 💾 BEFORE ARCHIVING: 819 jobs in database
[2026-01-13T07:01:09.004Z] [BOT] ✅ No jobs to archive (all 819 jobs within 7-day window)
[2026-01-13T07:01:09.015Z] [BOT] 💾 Saved posted_jobs.json: 819 active jobs
[2026-01-13T07:01:09.015Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:01:09.016Z] [BOT] 📍 [ROUTING] "Software Engineer - Full Stack Entry - Mid" @ ORG_fee50aac
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:01:09.276Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac in #💻・tech-jobs
  ✅ Industry: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac
[2026-01-13T07:01:10.923Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T07:01:12.424Z] [BOT] 💾 Marked as posted: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac (instance #1)
[2026-01-13T07:01:12.424Z] [BOT] 💾 BEFORE ARCHIVING: 820 jobs in database
[2026-01-13T07:01:12.425Z] [BOT] ✅ No jobs to archive (all 820 jobs within 7-day window)
[2026-01-13T07:01:12.431Z] [BOT] 💾 Saved posted_jobs.json: 820 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:01:12.431Z] [BOT] 📍 [ROUTING] "Android Sales Expert" @ 2020 Companies
[2026-01-13T07:01:12.432Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:01:12.649Z] [BOT] ✅ Created forum post: 🏢 Android Sales Expert @ 2020 Companies in #💻・tech-jobs
[2026-01-13T07:01:12.650Z] [BOT] ✅ Industry: Android Sales Expert @ 2020 Companies
[2026-01-13T07:01:14.355Z] [BOT] ✅ Created forum post: 🏢 Android Sales Expert @ 2020 Companies in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T07:01:15.855Z] [BOT] 💾 Marked as posted: Android Sales Expert @ 2020 Companies (instance #1)
[2026-01-13T07:01:15.855Z] [BOT] 💾 BEFORE ARCHIVING: 821 jobs in database
[2026-01-13T07:01:15.856Z] [BOT] ✅ No jobs to archive (all 821 jobs within 7-day window)
[2026-01-13T07:01:15.862Z] [BOT] 💾 Saved posted_jobs.json: 821 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:01:15.863Z] [BOT] 💾 Marked as posted: Android Sales Expert @ 2020 Companies (instance #1)
[2026-01-13T07:01:15.863Z] [BOT] 💾 BEFORE ARCHIVING: 822 jobs in database
[2026-01-13T07:01:15.864Z] [BOT] ✅ No jobs to archive (all 822 jobs within 7-day window)
[2026-01-13T07:01:15.870Z] [BOT] 💾 Saved posted_jobs.json: 822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:01:15.872Z] [BOT] 📍 [ROUTING] "Appian Associate Technical Consultant" @ ORG_60d01372
[2026-01-13T07:01:15.872Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:01:16.014Z] [BOT] ✅ Created forum post: 🏢 Appian Associate Technical Consultant @ ORG_60d01372 in #💻・tech-jobs
  ✅ Industry: Appian Associate Technical Consultant @ ORG_60d01372
[2026-01-13T07:01:17.712Z] [BOT] ✅ Created forum post: 🏢 Appian Associate Technical Consultant @ ORG_60d01372 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T07:01:19.213Z] [BOT] 💾 Marked as posted: Appian Associate Technical Consultant @ ORG_60d01372 (instance #1)
[2026-01-13T07:01:19.213Z] [BOT] 💾 BEFORE ARCHIVING: 823 jobs in database
[2026-01-13T07:01:19.214Z] [BOT] ✅ No jobs to archive (all 823 jobs within 7-day window)
[2026-01-13T07:01:19.220Z] [BOT] 💾 Saved posted_jobs.json: 823 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:01:22.221Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-13T07:01:22.223Z] [BOT] 📍 [ROUTING] "Manager, On-Site Executive IT Support (Residential Operations)" @ coinbase
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T07:01:22.397Z] [BOT] ✅ Created forum post: 🏢 Manager, On-Site Executive IT Support (Residential Operations) @ coinbase in #🤖・ai-jobs
  ✅ Industry: Manager, On-Site Executive IT Support (Residential Operations) @ coinbase
[2026-01-13T07:01:24.030Z] [BOT] ✅ Created forum post: 🏢 Manager, On-Site Executive IT Support (Residential Operations) @ coinbase in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-13T07:01:25.531Z] [BOT] 💾 Marked as posted: Manager, On-Site Executive IT Support (Residential Operations) @ coinbase (instance #1)
[2026-01-13T07:01:25.531Z] [BOT] 💾 BEFORE ARCHIVING: 824 jobs in database
[2026-01-13T07:01:25.532Z] [BOT] ✅ No jobs to archive (all 824 jobs within 7-day window)
[2026-01-13T07:01:25.541Z] [BOT] 💾 Saved posted_jobs.json: 824 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:01:25.542Z] [BOT] 📍 [ROUTING] "On‑Site IT Support Engineer (Residential Operations)" @ coinbase
[2026-01-13T07:01:25.542Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T07:01:25.718Z] [BOT] ✅ Created forum post: 🏢 On‑Site IT Support Engineer (Residential Operations) @ coinbase in #🤖・ai-jobs
[2026-01-13T07:01:25.718Z] [BOT] ✅ Industry: On‑Site IT Support Engineer (Residential Operations) @ coinbase
[2026-01-13T07:01:27.570Z] [BOT] ✅ Created forum post: 🏢 On‑Site IT Support Engineer (Residential Operations) @ coinbase in #🦢・los-angeles
[2026-01-13T07:01:27.570Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-13T07:01:29.071Z] [BOT] 💾 Marked as posted: On‑Site IT Support Engineer (Residential Operations) @ coinbase (instance #1)
[2026-01-13T07:01:29.072Z] [BOT] 💾 BEFORE ARCHIVING: 825 jobs in database
[2026-01-13T07:01:29.072Z] [BOT] ✅ No jobs to archive (all 825 jobs within 7-day window)
[2026-01-13T07:01:29.079Z] [BOT] 💾 Saved posted_jobs.json: 825 active jobs
[2026-01-13T07:01:29.079Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:01:29.079Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Experimental AI" @ ORG_a867f63f National Laboratory
[2026-01-13T07:01:29.079Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T07:01:29.317Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Experimental AI @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
[2026-01-13T07:01:29.317Z] [BOT] ✅ Industry: Postdoctoral Appointee - Experimental AI @ ORG_a867f63f National Laboratory
[2026-01-13T07:01:30.981Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Experimental AI @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-13T07:01:32.482Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Experimental AI @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-13T07:01:32.482Z] [BOT] 💾 BEFORE ARCHIVING: 826 jobs in database
[2026-01-13T07:01:32.483Z] [BOT] ✅ No jobs to archive (all 826 jobs within 7-day window)
[2026-01-13T07:01:32.489Z] [BOT] 💾 Saved posted_jobs.json: 826 active jobs
[2026-01-13T07:01:32.489Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:01:32.489Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Product Development" @ ORG_9f75058b
[2026-01-13T07:01:32.490Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T07:01:32.669Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Product Development @ ORG_9f75058b in #🤖・ai-jobs
[2026-01-13T07:01:32.670Z] [BOT] ✅ Industry: Software Engineer 1 - Product Development @ ORG_9f75058b
[2026-01-13T07:01:34.322Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Product Development @ ORG_9f75058b in #🌉・san-francisco
[2026-01-13T07:01:34.322Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T07:01:35.822Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Product Development @ ORG_9f75058b (instance #1)
[2026-01-13T07:01:35.822Z] [BOT] 💾 BEFORE ARCHIVING: 827 jobs in database
[2026-01-13T07:01:35.823Z] [BOT] ✅ No jobs to archive (all 827 jobs within 7-day window)
[2026-01-13T07:01:35.829Z] [BOT] 💾 Saved posted_jobs.json: 827 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:01:38.829Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-13T07:01:38.830Z] [BOT] 📍 [ROUTING] "Senior Product Design Manager, Growth & Safety" @ discord
[2026-01-13T07:01:38.830Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-13T07:01:39.011Z] [BOT] ✅ Created forum post: 🏢 Senior Product Design Manager, Growth & Safety @ discord in #📈・JID_fb739488
[2026-01-13T07:01:39.011Z] [BOT] ✅ Industry: Senior Product Design Manager, Growth & Safety @ discord
[2026-01-13T07:01:40.512Z] [BOT] 💾 Marked as posted: Senior Product Design Manager, Growth & Safety @ discord (instance #1)
[2026-01-13T07:01:40.512Z] [BOT] 💾 BEFORE ARCHIVING: 828 jobs in database
[2026-01-13T07:01:40.513Z] [BOT] ✅ No jobs to archive (all 828 jobs within 7-day window)
[2026-01-13T07:01:40.520Z] [BOT] 💾 Saved posted_jobs.json: 828 active jobs
[2026-01-13T07:01:40.520Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:01:40.520Z] [BOT] 📍 [ROUTING] "Associate – Business Intelligence Analyst - Cincinnati - OH" @ L3Harris Technologies
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-13T07:01:40.520Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T07:01:40.747Z] [BOT] ✅ Created forum post: 🏢 Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies in #📈・JID_fb739488
  ✅ Industry: Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies
[2026-01-13T07:01:42.537Z] [BOT] ✅ Created forum post: 🏢 Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T07:01:44.040Z] [BOT] 💾 Marked as posted: Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies (instance #1)
[2026-01-13T07:01:44.040Z] [BOT] 💾 BEFORE ARCHIVING: 829 jobs in database
[2026-01-13T07:01:44.041Z] [BOT] ✅ No jobs to archive (all 829 jobs within 7-day window)
[2026-01-13T07:01:44.048Z] [BOT] 💾 Saved posted_jobs.json: 829 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:01:47.049Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T07:01:47.050Z] [BOT] ⏭️  Skipping duplicate: JID_679ebc85-developer_jr100173 (posted within 7 days)
[2026-01-13T07:01:47.050Z] [BOT] ⏭️  Skipping duplicate: JID_f0618e51 (posted within 7 days)
⏭️  Skipping duplicate: JID_df37ce36 (posted within 7 days)
[2026-01-13T07:01:47.050Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_89ac2162-ai_421579 (posted within 7 days)
[2026-01-13T07:01:47.050Z] [BOT] ⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_8424b0e0-mid_r2116871 (posted within 7 days)
⏭️  Skipping duplicate: JID_652438ef (posted within 7 days)
[2026-01-13T07:01:47.050Z] [BOT] ⏭️  Skipping duplicate: JID_83f6c242 (posted within 7 days)
[2026-01-13T07:01:47.050Z] [BOT] ⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_aabf8ae3-expert_req_096760 (posted within 7 days)
[2026-01-13T07:01:47.051Z] [BOT] ⏭️  Skipping duplicate: JID_79342241 (posted within 7 days)
[2026-01-13T07:01:47.051Z] [BOT] ⏭️  Skipping duplicate: JID_cbd01f26-cx_1-job-2025003734 (posted within 7 days)
[2026-01-13T07:01:47.181Z] [BOT] ✅ Loaded pending queue: 2699 total (2679 pending, 20 enriched, 0 posted)
[2026-01-13T07:01:47.342Z] [BOT] ✅ Saved pending queue: 2699 total (2679 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-13T07:01:47.343Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T07:01:47.396Z] [BOT] 📂 Loaded 2955 existing routing entries
[2026-01-13T07:01:47.455Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2965
[2026-01-13T07:01:47.455Z] [BOT] Timestamp: 2026-01-13T07:01:47.442Z
[2026-01-13T07:01:47.455Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-13T07:01:47.456Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T07:01:47.456Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 8
   Top channels:
[2026-01-13T07:01:47.456Z] [BOT] 1. #💻・tech-jobs: 4 posts
[2026-01-13T07:01:47.456Z] [BOT] 2. #🤖・ai-jobs: 4 posts
[2026-01-13T07:01:47.456Z] [BOT] 3. #💻・remote-usa: 2 posts
     4. #🌉・san-francisco: 2 posts
     5. #🦢・los-angeles: 2 posts
[2026-01-13T07:01:47.456Z] [BOT] [STATS] Channel stats saved
[2026-01-13T07:01:49.484Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2684) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*