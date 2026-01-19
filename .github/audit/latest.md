# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T07:56:37.113Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T07:55:50.419Z] ========================================
[2026-01-19T07:55:50.421Z] Discord Bot Execution Log
[2026-01-19T07:55:50.421Z] Environment: GitHub Actions
[2026-01-19T07:55:50.421Z] Node Version: v20.19.6
[2026-01-19T07:55:50.422Z] ========================================
[2026-01-19T07:55:50.422Z] Environment Variables Check:
[2026-01-19T07:55:50.422Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T07:55:50.422Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T07:55:50.422Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T07:55:50.422Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T07:55:50.422Z] 
Multi-Channel Configuration:
[2026-01-19T07:55:50.422Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T07:55:50.422Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T07:55:50.422Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T07:55:50.423Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T07:55:50.423Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T07:55:50.423Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T07:55:50.423Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T07:55:50.423Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T07:55:50.423Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T07:55:50.423Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T07:55:50.423Z] 
Data Files Check:
[2026-01-19T07:55:50.424Z] .github/data/new_jobs.json: ✅ Exists (10 items, 109044 bytes)
[2026-01-19T07:55:50.434Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1584274 bytes)
[2026-01-19T07:55:50.434Z] 
========================================
[2026-01-19T07:55:50.434Z] Starting Enhanced Discord Bot...
[2026-01-19T07:55:50.434Z] ========================================
[2026-01-19T07:55:50.969Z] [BOT] ✅ Loaded V2 database: 2911 jobs
[2026-01-19T07:55:51.678Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T07:55:51.679Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T07:55:51.679Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T07:55:51.795Z] [BOT] ✅ Loaded pending queue: 2828 total (2808 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Frontend Software Engineer – University Graduate 2026 at Verkada
[2026-01-19T07:55:51.799Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T07:55:51.799Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T07:55:51.799Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T07:55:51.800Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-19T07:55:51.800Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Senior Demand Generation Marketing Manager (Public Sector) @ datadog: remote, new york, new york, usa; san francisco, california, usa
   - USA – Tax - Indirect Tax - California Controversy Group','Sacramento','Jd/LLM','Staff 2 @ ORG_b54c9975 & Young: sacramento, chicago, nyc
[2026-01-19T07:55:51.800Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T07:55:51.804Z] [BOT] 📌 Posting 7 jobs to #🤖・ai-jobs
[2026-01-19T07:55:51.805Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer – University Graduate 2026" @ ORG_175f350d
[2026-01-19T07:55:51.805Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T07:55:51.810Z] [BOT ERROR] (node:2496) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T07:55:52.007Z] [BOT] ✅ Created forum post: 🏢 Frontend Software Engineer – University Graduate 2026 @ ORG_175f350d in #🤖・ai-jobs
  ✅ Industry: Frontend Software Engineer – University Graduate 2026 @ ORG_175f350d
[2026-01-19T07:55:53.815Z] [BOT] ✅ Created forum post: 🏢 Frontend Software Engineer – University Graduate 2026 @ ORG_175f350d in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-19T07:55:55.315Z] [BOT] 💾 Marked as posted: Frontend Software Engineer – University Graduate 2026 @ ORG_175f350d (instance #1)
[2026-01-19T07:55:55.315Z] [BOT] 💾 BEFORE ARCHIVING: 2912 jobs in database
[2026-01-19T07:55:55.317Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T07:55:55.322Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-19T07:55:55.322Z] [BOT] ✅ Archiving complete: 1 archived, 2911 active
[2026-01-19T07:55:55.338Z] [BOT] 💾 Saved posted_jobs.json: 2911 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:55:55.339Z] [BOT] 📍 [ROUTING] "Research Engineer, Universes" @ anthropic
[2026-01-19T07:55:55.339Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T07:55:55.633Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Universes @ anthropic in #🤖・ai-jobs
[2026-01-19T07:55:55.633Z] [BOT] ✅ Industry: Research Engineer, Universes @ anthropic
[2026-01-19T07:55:57.340Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Universes @ anthropic in #🌉・san-francisco
[2026-01-19T07:55:57.340Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T07:55:58.840Z] [BOT] 💾 Marked as posted: Research Engineer, Universes @ anthropic (instance #1)
[2026-01-19T07:55:58.841Z] [BOT] 💾 BEFORE ARCHIVING: 2912 jobs in database
[2026-01-19T07:55:58.843Z] [BOT] ✅ No jobs to archive (all 2912 jobs within 7-day window)
[2026-01-19T07:55:58.859Z] [BOT] 💾 Saved posted_jobs.json: 2912 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:55:58.860Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Virginia - US" @ ORG_f3ae3598
[2026-01-19T07:55:58.860Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T07:55:58.860Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T07:55:59.169Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Virginia - US @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-01-19T07:55:59.169Z] [BOT] ✅ Industry: AI Data Specialist - Virginia - US @ ORG_f3ae3598
[2026-01-19T07:56:00.670Z] [BOT] 💾 Marked as posted: AI Data Specialist - Virginia - US @ ORG_f3ae3598 (instance #1)
[2026-01-19T07:56:00.671Z] [BOT] 💾 BEFORE ARCHIVING: 2913 jobs in database
[2026-01-19T07:56:00.672Z] [BOT] ✅ No jobs to archive (all 2913 jobs within 7-day window)
[2026-01-19T07:56:00.693Z] [BOT] 💾 Saved posted_jobs.json: 2913 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:56:00.695Z] [BOT] 📍 [ROUTING] "USA – Tax - Business Tax Services - Federal Tax Advisory','Fta','Jd/LLM','Staff 2" @ ORG_b54c9975 & Young
[2026-01-19T07:56:00.695Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T07:56:00.881Z] [BOT] ✅ Created forum post: 🏢 USA – Tax - Business Tax Services - Federal Tax Advisory','Fta','Jd/LLM','Staff 2 @ ORG_b54c9975 & Young in #🤖・ai-jobs
  ✅ Industry: USA – Tax - Business Tax Services - Federal Tax Advisory','Fta','Jd/LLM','Staff 2 @ ORG_b54c9975 & Young
[2026-01-19T07:56:02.595Z] [BOT] ✅ Created forum post: 🏢 USA – Tax - Business Tax Services - Federal Tax Advisory','Fta','Jd/LLM','Staff 2 @ ORG_b54c9975 & Young in #💻・remote-usa
[2026-01-19T07:56:02.595Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T07:56:04.095Z] [BOT] 💾 Marked as posted: USA – Tax - Business Tax Services - Federal Tax Advisory','Fta','Jd/LLM','Staff 2 @ ORG_b54c9975 & Young (instance #1)
[2026-01-19T07:56:04.095Z] [BOT] 💾 BEFORE ARCHIVING: 2914 jobs in database
[2026-01-19T07:56:04.097Z] [BOT] ✅ No jobs to archive (all 2914 jobs within 7-day window)
[2026-01-19T07:56:04.116Z] [BOT] 💾 Saved posted_jobs.json: 2914 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:56:04.117Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_fee50aac
[2026-01-19T07:56:04.117Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T07:56:04.275Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_fee50aac in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_fee50aac
[2026-01-19T07:56:05.934Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_fee50aac in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T07:56:07.434Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_fee50aac (instance #1)
[2026-01-19T07:56:07.434Z] [BOT] 💾 BEFORE ARCHIVING: 2915 jobs in database
[2026-01-19T07:56:07.436Z] [BOT] ✅ No jobs to archive (all 2915 jobs within 7-day window)
[2026-01-19T07:56:07.453Z] [BOT] 💾 Saved posted_jobs.json: 2915 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:56:07.454Z] [BOT] 📍 [ROUTING] "USA – Tax - Indirect Tax - California Controversy Group','Sacramento','Jd/LLM','Staff 2" @ ORG_b54c9975 & Young
[2026-01-19T07:56:07.454Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T07:56:07.726Z] [BOT] ✅ Created forum post: 🏢 USA – Tax - Indirect Tax - California Controversy Group','Sacramento','Jd/LLM','Staff 2 @ ORG_b54c9975 & in #🤖・ai-jobs
  ✅ Industry: USA – Tax - Indirect Tax - California Controversy Group','Sacramento','Jd/LLM','Staff 2 @ ORG_b54c9975 & Young
[2026-01-19T07:56:09.438Z] [BOT] ✅ Created forum post: 🏢 USA – Tax - Indirect Tax - California Controversy Group','Sacramento','Jd/LLM','Staff 2 @ ORG_b54c9975 & in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-19T07:56:10.940Z] [BOT] 💾 Marked as posted: USA – Tax - Indirect Tax - California Controversy Group','Sacramento','Jd/LLM','Staff 2 @ ORG_b54c9975 & Young (instance #1)
[2026-01-19T07:56:10.940Z] [BOT] 💾 BEFORE ARCHIVING: 2916 jobs in database
[2026-01-19T07:56:10.942Z] [BOT] ✅ No jobs to archive (all 2916 jobs within 7-day window)
[2026-01-19T07:56:10.961Z] [BOT] 💾 Saved posted_jobs.json: 2916 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:56:10.961Z] [BOT] 💾 Marked as posted: USA – Tax - Indirect Tax - Technology Staff @ ORG_b54c9975 & Young (instance #1)
[2026-01-19T07:56:10.961Z] [BOT] 💾 BEFORE ARCHIVING: 2917 jobs in database
[2026-01-19T07:56:10.963Z] [BOT] ✅ No jobs to archive (all 2917 jobs within 7-day window)
[2026-01-19T07:56:10.981Z] [BOT] 💾 Saved posted_jobs.json: 2917 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:56:10.982Z] [BOT] 💾 Marked as posted: USA – Tax - Indirect Tax - State Income Tax @ ORG_b54c9975 & Young (instance #1)
[2026-01-19T07:56:10.982Z] [BOT] 💾 BEFORE ARCHIVING: 2918 jobs in database
[2026-01-19T07:56:10.983Z] [BOT] ✅ No jobs to archive (all 2918 jobs within 7-day window)
[2026-01-19T07:56:11.001Z] [BOT] 💾 Saved posted_jobs.json: 2918 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:56:11.001Z] [BOT] 📍 [ROUTING] "USA – Service Delivery Center - Business Technology - Associate Analyst" @ ORG_b54c9975 & Young
[2026-01-19T07:56:11.001Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T07:56:11.177Z] [BOT] ✅ Created forum post: 🏢 USA – Service Delivery Center - Business Technology - Associate Analyst @ ORG_b54c9975 & Young in #🤖・ai-jobs
  ✅ Industry: USA – Service Delivery Center - Business Technology - Associate Analyst @ ORG_b54c9975 & Young
[2026-01-19T07:56:12.887Z] [BOT] ✅ Created forum post: 🏢 USA – Service Delivery Center - Business Technology - Associate Analyst @ ORG_b54c9975 & Young in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T07:56:14.387Z] [BOT] 💾 Marked as posted: USA – Service Delivery Center - Business Technology - Associate Analyst @ ORG_b54c9975 & Young (instance #1)
[2026-01-19T07:56:14.387Z] [BOT] 💾 BEFORE ARCHIVING: 2919 jobs in database
[2026-01-19T07:56:14.389Z] [BOT] ✅ No jobs to archive (all 2919 jobs within 7-day window)
[2026-01-19T07:56:14.406Z] [BOT] 💾 Saved posted_jobs.json: 2919 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:56:17.407Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T07:56:17.408Z] [BOT] 📍 [ROUTING] "Senior Demand Generation Marketing Manager (Public Sector)" @ datadog
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T07:56:17.703Z] [BOT] ✅ Created forum post: 🏢 Senior Demand Generation Marketing Manager (Public Sector) @ datadog in #📣・marketing-jobs
  ✅ Industry: Senior Demand Generation Marketing Manager (Public Sector) @ datadog
[2026-01-19T07:56:19.398Z] [BOT] ✅ Created forum post: 🏢 Senior Demand Generation Marketing Manager (Public Sector) @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T07:56:20.899Z] [BOT] 💾 Marked as posted: Senior Demand Generation Marketing Manager (Public Sector) @ datadog (instance #1)
[2026-01-19T07:56:20.900Z] [BOT] 💾 BEFORE ARCHIVING: 2920 jobs in database
[2026-01-19T07:56:20.902Z] [BOT] ✅ No jobs to archive (all 2920 jobs within 7-day window)
[2026-01-19T07:56:20.918Z] [BOT] 💾 Saved posted_jobs.json: 2920 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:56:20.918Z] [BOT] 💾 Marked as posted: Senior Demand Generation Marketing Manager (Public Sector) @ datadog (instance #1)
[2026-01-19T07:56:20.918Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-19T07:56:20.920Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-19T07:56:20.937Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:56:23.937Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-19T07:56:23.937Z] [BOT] 📍 [ROUTING] " Strategy and Messaging Communications Lead, Narrative" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-19T07:56:23.937Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T07:56:24.202Z] [BOT] ✅ Created forum post: 🏢  Strategy and Messaging Communications Lead, Narrative @ anthropic in #💲・sales-jobs
  ✅ Industry:  Strategy and Messaging Communications Lead, Narrative @ anthropic
[2026-01-19T07:56:25.879Z] [BOT] ✅ Created forum post: 🏢  Strategy and Messaging Communications Lead, Narrative @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T07:56:27.379Z] [BOT] 💾 Marked as posted:  Strategy and Messaging Communications Lead, Narrative @ anthropic (instance #1)
[2026-01-19T07:56:27.379Z] [BOT] 💾 BEFORE ARCHIVING: 2922 jobs in database
[2026-01-19T07:56:27.381Z] [BOT] ✅ No jobs to archive (all 2922 jobs within 7-day window)
[2026-01-19T07:56:27.398Z] [BOT] 💾 Saved posted_jobs.json: 2922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:56:27.399Z] [BOT] 📍 [ROUTING] "FP&A Manager,  GTM" @ vercel
[2026-01-19T07:56:27.399Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T07:56:27.564Z] [BOT] ✅ Created forum post: 🏢 FP&A Manager,  GTM @ vercel in #💲・sales-jobs
  ✅ Industry: FP&A Manager,  GTM @ vercel
[2026-01-19T07:56:29.209Z] [BOT] ✅ Created forum post: 🏢 FP&A Manager,  GTM @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T07:56:30.710Z] [BOT] 💾 Marked as posted: FP&A Manager,  GTM @ vercel (instance #1)
[2026-01-19T07:56:30.711Z] [BOT] 💾 BEFORE ARCHIVING: 2923 jobs in database
[2026-01-19T07:56:30.712Z] [BOT] ✅ No jobs to archive (all 2923 jobs within 7-day window)
[2026-01-19T07:56:30.730Z] [BOT] 💾 Saved posted_jobs.json: 2923 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:56:33.731Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-19T07:56:33.732Z] [BOT] ⏭️  Skipping duplicate: JID_944fc5fc (posted within 7 days)
[2026-01-19T07:56:33.732Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
[2026-01-19T07:56:33.732Z] [BOT] ⏭️  Skipping duplicate: JID_8b4fe7ac (posted within 7 days)
[2026-01-19T07:56:33.733Z] [BOT] ⏭️  Skipping duplicate: JID_49f2e917 (posted within 7 days)
[2026-01-19T07:56:33.733Z] [BOT] ⏭️  Skipping duplicate: JID_443500d1 (posted within 7 days)
[2026-01-19T07:56:33.733Z] [BOT] ⏭️  Skipping duplicate: JID_08a687ec (posted within 7 days)
[2026-01-19T07:56:33.733Z] [BOT] ⏭️  Skipping duplicate: JID_e942e20e (posted within 7 days)
[2026-01-19T07:56:33.733Z] [BOT] ⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_6350ced2-i_r2117676 (posted within 7 days)
[2026-01-19T07:56:33.733Z] [BOT] ⏭️  Skipping duplicate: JID_6c81483f (posted within 7 days)
[2026-01-19T07:56:33.733Z] [BOT] ⏭️  Skipping duplicate: JID_3a6233d2 (posted within 7 days)
[2026-01-19T07:56:33.841Z] [BOT] ✅ Loaded pending queue: 2828 total (2808 pending, 20 enriched, 0 posted)
[2026-01-19T07:56:34.024Z] [BOT] ✅ Saved pending queue: 2828 total (2808 pending, 10 enriched, 10 posted)
[2026-01-19T07:56:34.024Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T07:56:34.085Z] [BOT] 📂 Loaded 5065 existing routing entries
[2026-01-19T07:56:34.161Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5075
[2026-01-19T07:56:34.161Z] [BOT] Timestamp: 2026-01-19T07:56:34.138Z
[2026-01-19T07:56:34.162Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T07:56:34.162Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-19T07:56:34.162Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-19T07:56:34.162Z] [BOT] Total posts: 19
   Channels used: 6
   Top channels:
     1. #🤖・ai-jobs: 7 posts
     2. #💻・remote-usa: 4 posts
[2026-01-19T07:56:34.162Z] [BOT] 3. #🌉・san-francisco: 3 posts
     4. #🦢・los-angeles: 2 posts
     5. #💲・sales-jobs: 2 posts
[2026-01-19T07:56:34.162Z] [BOT] [STATS] Channel stats saved
[2026-01-19T07:56:36.186Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2496) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*