# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T08:32:10.577Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T08:31:29.447Z] ========================================
[2026-01-21T08:31:29.449Z] Discord Bot Execution Log
[2026-01-21T08:31:29.449Z] Environment: GitHub Actions
[2026-01-21T08:31:29.449Z] Node Version: v20.19.6
[2026-01-21T08:31:29.449Z] ========================================
[2026-01-21T08:31:29.449Z] Environment Variables Check:
[2026-01-21T08:31:29.449Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T08:31:29.449Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T08:31:29.449Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T08:31:29.450Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T08:31:29.450Z] 
Multi-Channel Configuration:
[2026-01-21T08:31:29.450Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T08:31:29.450Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T08:31:29.450Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T08:31:29.450Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T08:31:29.450Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T08:31:29.450Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T08:31:29.450Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T08:31:29.450Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T08:31:29.450Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T08:31:29.450Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T08:31:29.451Z] 
Data Files Check:
[2026-01-21T08:31:29.451Z] .github/data/new_jobs.json: ✅ Exists (10 items, 95898 bytes)
[2026-01-21T08:31:29.464Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1813749 bytes)
[2026-01-21T08:31:29.464Z] 
========================================
[2026-01-21T08:31:29.464Z] Starting Enhanced Discord Bot...
[2026-01-21T08:31:29.464Z] ========================================
[2026-01-21T08:31:30.006Z] [BOT] ✅ Loaded V2 database: 3187 jobs
[2026-01-21T08:31:30.621Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T08:31:30.622Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T08:31:30.622Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T08:31:30.736Z] [BOT] ✅ Loaded pending queue: 2742 total (2722 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer - Entry at Jerry
[2026-01-21T08:31:30.740Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T08:31:30.740Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T08:31:30.741Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T08:31:30.742Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T08:31:30.742Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T08:31:30.746Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-21T08:31:30.746Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry" @ ORG_7b717950
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T08:31:30.746Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T08:31:30.750Z] [BOT ERROR] (node:3145) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T08:31:30.962Z] [BOT] ✅ Posted message: Software Engineer - Entry @ ORG_7b717950 in #ai-jobs
  ✅ Industry: Software Engineer - Entry @ ORG_7b717950
[2026-01-21T08:31:30.964Z] [BOT] 💾 Added channel posting: Software Engineer - Entry @ ORG_7b717950 → category channel (1 total channels)
[2026-01-21T08:31:30.964Z] [BOT] 💾 BEFORE ARCHIVING: 3188 jobs in database
[2026-01-21T08:31:30.967Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T08:31:30.972Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T08:31:30.972Z] [BOT] ✅ Archiving complete: 10 archived, 3178 active
[2026-01-21T08:31:30.993Z] [BOT] 💾 Saved posted_jobs.json: 3178 active jobs
[2026-01-21T08:31:30.994Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:32.496Z] [BOT] 💾 Marked as posted: Software Engineer - Entry @ ORG_7b717950 (instance #1)
[2026-01-21T08:31:32.496Z] [BOT] 💾 BEFORE ARCHIVING: 3179 jobs in database
[2026-01-21T08:31:32.498Z] [BOT] ✅ No jobs to archive (all 3179 jobs within 7-day window)
[2026-01-21T08:31:32.517Z] [BOT] 💾 Saved posted_jobs.json: 3179 active jobs
[2026-01-21T08:31:32.517Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Senior Manager, Music Label Deal Analysis - FP&A" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T08:31:32.674Z] [BOT] ✅ Posted message: Senior Manager, Music Label Deal Analysis - FP&A @ spotify in #ai-jobs
[2026-01-21T08:31:32.674Z] [BOT] ✅ Industry: Senior Manager, Music Label Deal Analysis - FP&A @ spotify
[2026-01-21T08:31:32.675Z] [BOT] 💾 Added channel posting: Senior Manager, Music Label Deal Analysis - FP&A @ spotify → category channel (1 total channels)
[2026-01-21T08:31:32.675Z] [BOT] 💾 BEFORE ARCHIVING: 3180 jobs in database
[2026-01-21T08:31:32.677Z] [BOT] ✅ No jobs to archive (all 3180 jobs within 7-day window)
[2026-01-21T08:31:32.698Z] [BOT] 💾 Saved posted_jobs.json: 3180 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:34.433Z] [BOT] ✅ Posted message: Senior Manager, Music Label Deal Analysis - FP&A @ spotify in #JID_98d4f0de
[2026-01-21T08:31:34.433Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T08:31:34.434Z] [BOT] 💾 Added channel posting: Senior Manager, Music Label Deal Analysis - FP&A @ spotify → location channel (2 total channels)
[2026-01-21T08:31:34.434Z] [BOT] 💾 BEFORE ARCHIVING: 3180 jobs in database
[2026-01-21T08:31:34.436Z] [BOT] ✅ No jobs to archive (all 3180 jobs within 7-day window)
[2026-01-21T08:31:34.457Z] [BOT] 💾 Saved posted_jobs.json: 3180 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:35.959Z] [BOT] 💾 Marked as posted: Senior Manager, Music Label Deal Analysis - FP&A @ spotify (instance #1)
[2026-01-21T08:31:35.959Z] [BOT] 💾 BEFORE ARCHIVING: 3181 jobs in database
[2026-01-21T08:31:35.961Z] [BOT] ✅ No jobs to archive (all 3181 jobs within 7-day window)
[2026-01-21T08:31:35.983Z] [BOT] 💾 Saved posted_jobs.json: 3181 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:38.984Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-21T08:31:38.984Z] [BOT] 📍 [ROUTING] "Community Support Specialist" @ figma
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:31:39.242Z] [BOT] ✅ Posted message: Community Support Specialist @ figma in #tech-jobs
[2026-01-21T08:31:39.242Z] [BOT] ✅ Industry: Community Support Specialist @ figma
[2026-01-21T08:31:39.243Z] [BOT] 💾 Added channel posting: Community Support Specialist @ figma → category channel (1 total channels)
[2026-01-21T08:31:39.243Z] [BOT] 💾 BEFORE ARCHIVING: 3182 jobs in database
[2026-01-21T08:31:39.245Z] [BOT] ✅ No jobs to archive (all 3182 jobs within 7-day window)
[2026-01-21T08:31:39.268Z] [BOT] 💾 Saved posted_jobs.json: 3182 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:40.770Z] [BOT] 💾 Marked as posted: Community Support Specialist @ figma (instance #1)
[2026-01-21T08:31:40.770Z] [BOT] 💾 BEFORE ARCHIVING: 3183 jobs in database
[2026-01-21T08:31:40.773Z] [BOT] ✅ No jobs to archive (all 3183 jobs within 7-day window)
[2026-01-21T08:31:40.794Z] [BOT] 💾 Saved posted_jobs.json: 3183 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:40.795Z] [BOT] 📍 [ROUTING] "Therapist - Child & Adolescent" @ ORG_6a97f77a Behavioral Health
[2026-01-21T08:31:40.795Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:31:41.024Z] [BOT] ✅ Posted message: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health in #tech-jobs
[2026-01-21T08:31:41.024Z] [BOT] ✅ Industry: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health
[2026-01-21T08:31:41.025Z] [BOT] 💾 Added channel posting: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health → category channel (1 total channels)
[2026-01-21T08:31:41.025Z] [BOT] 💾 BEFORE ARCHIVING: 3184 jobs in database
[2026-01-21T08:31:41.027Z] [BOT] ✅ No jobs to archive (all 3184 jobs within 7-day window)
[2026-01-21T08:31:41.048Z] [BOT] 💾 Saved posted_jobs.json: 3184 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:42.838Z] [BOT] ✅ Posted message: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health in #JID_ead674af
[2026-01-21T08:31:42.838Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T08:31:42.838Z] [BOT] 💾 Added channel posting: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health → location channel (2 total channels)
[2026-01-21T08:31:42.838Z] [BOT] 💾 BEFORE ARCHIVING: 3184 jobs in database
[2026-01-21T08:31:42.841Z] [BOT] ✅ No jobs to archive (all 3184 jobs within 7-day window)
[2026-01-21T08:31:42.863Z] [BOT] 💾 Saved posted_jobs.json: 3184 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:44.365Z] [BOT] 💾 Marked as posted: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health (instance #1)
[2026-01-21T08:31:44.365Z] [BOT] 💾 BEFORE ARCHIVING: 3185 jobs in database
[2026-01-21T08:31:44.367Z] [BOT] ✅ No jobs to archive (all 3185 jobs within 7-day window)
[2026-01-21T08:31:44.388Z] [BOT] 💾 Saved posted_jobs.json: 3185 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:44.388Z] [BOT] 📍 [ROUTING] "Legal Operations Lead, CLM & Technology" @ figma
   Category: TECH (default)
[2026-01-21T08:31:44.388Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T08:31:44.629Z] [BOT] ✅ Posted message: Legal Operations Lead, CLM & Technology @ figma in #tech-jobs
[2026-01-21T08:31:44.629Z] [BOT] ✅ Industry: Legal Operations Lead, CLM & Technology @ figma
[2026-01-21T08:31:44.630Z] [BOT] 💾 Added channel posting: Legal Operations Lead, CLM & Technology @ figma → category channel (1 total channels)
[2026-01-21T08:31:44.630Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-21T08:31:44.632Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-21T08:31:44.651Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:46.153Z] [BOT] 💾 Marked as posted: Legal Operations Lead, CLM & Technology @ figma (instance #1)
[2026-01-21T08:31:46.153Z] [BOT] 💾 BEFORE ARCHIVING: 3187 jobs in database
[2026-01-21T08:31:46.155Z] [BOT] ✅ No jobs to archive (all 3187 jobs within 7-day window)
[2026-01-21T08:31:46.174Z] [BOT] 💾 Saved posted_jobs.json: 3187 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:46.174Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_1954b120
[2026-01-21T08:31:46.175Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:31:46.587Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_1954b120 in #tech-jobs
[2026-01-21T08:31:46.587Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_1954b120
[2026-01-21T08:31:46.588Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_1954b120 → category channel (1 total channels)
[2026-01-21T08:31:46.588Z] [BOT] 💾 BEFORE ARCHIVING: 3188 jobs in database
[2026-01-21T08:31:46.590Z] [BOT] ✅ No jobs to archive (all 3188 jobs within 7-day window)
[2026-01-21T08:31:46.608Z] [BOT] 💾 Saved posted_jobs.json: 3188 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:48.449Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_1954b120 in #JID_ead674af
[2026-01-21T08:31:48.449Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T08:31:48.449Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_1954b120 → location channel (2 total channels)
[2026-01-21T08:31:48.449Z] [BOT] 💾 BEFORE ARCHIVING: 3188 jobs in database
[2026-01-21T08:31:48.451Z] [BOT] ✅ No jobs to archive (all 3188 jobs within 7-day window)
[2026-01-21T08:31:48.470Z] [BOT] 💾 Saved posted_jobs.json: 3188 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:49.971Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_1954b120 (instance #1)
[2026-01-21T08:31:49.971Z] [BOT] 💾 BEFORE ARCHIVING: 3189 jobs in database
[2026-01-21T08:31:49.973Z] [BOT] ✅ No jobs to archive (all 3189 jobs within 7-day window)
[2026-01-21T08:31:49.992Z] [BOT] 💾 Saved posted_jobs.json: 3189 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:49.992Z] [BOT] 📍 [ROUTING] "Launch Strategy & Operations - Marketing & Comms" @ figma
   Category: TECH (matched: "product marketing")
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:31:50.124Z] [BOT] ✅ Posted message: Launch Strategy & Operations - Marketing & Comms @ figma in #tech-jobs
  ✅ Industry: Launch Strategy & Operations - Marketing & Comms @ figma
[2026-01-21T08:31:50.124Z] [BOT] 💾 Added channel posting: Launch Strategy & Operations - Marketing & Comms @ figma → category channel (1 total channels)
[2026-01-21T08:31:50.124Z] [BOT] 💾 BEFORE ARCHIVING: 3190 jobs in database
[2026-01-21T08:31:50.126Z] [BOT] ✅ No jobs to archive (all 3190 jobs within 7-day window)
[2026-01-21T08:31:50.146Z] [BOT] 💾 Saved posted_jobs.json: 3190 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:51.647Z] [BOT] 💾 Marked as posted: Launch Strategy & Operations - Marketing & Comms @ figma (instance #1)
[2026-01-21T08:31:51.648Z] [BOT] 💾 BEFORE ARCHIVING: 3191 jobs in database
[2026-01-21T08:31:51.650Z] [BOT] ✅ No jobs to archive (all 3191 jobs within 7-day window)
[2026-01-21T08:31:51.668Z] [BOT] 💾 Saved posted_jobs.json: 3191 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:51.668Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:31:51.834Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_0bbe3cb1 in #tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2026-01-21T08:31:51.835Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-21T08:31:51.835Z] [BOT] 💾 BEFORE ARCHIVING: 3192 jobs in database
[2026-01-21T08:31:51.837Z] [BOT] ✅ No jobs to archive (all 3192 jobs within 7-day window)
[2026-01-21T08:31:51.857Z] [BOT] 💾 Saved posted_jobs.json: 3192 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:53.520Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_0bbe3cb1 in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T08:31:53.521Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_0bbe3cb1 → location channel (2 total channels)
[2026-01-21T08:31:53.521Z] [BOT] 💾 BEFORE ARCHIVING: 3192 jobs in database
[2026-01-21T08:31:53.523Z] [BOT] ✅ No jobs to archive (all 3192 jobs within 7-day window)
[2026-01-21T08:31:53.543Z] [BOT] 💾 Saved posted_jobs.json: 3192 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:55.044Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2026-01-21T08:31:55.044Z] [BOT] 💾 BEFORE ARCHIVING: 3193 jobs in database
[2026-01-21T08:31:55.046Z] [BOT] ✅ No jobs to archive (all 3193 jobs within 7-day window)
[2026-01-21T08:31:55.067Z] [BOT] 💾 Saved posted_jobs.json: 3193 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:58.068Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T08:31:58.068Z] [BOT] 📍 [ROUTING] "Data Scientist, Social - PhD Early Career" @ ORG_0acab0cf
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T08:31:58.222Z] [BOT] ✅ Posted message: Data Scientist, Social - PhD Early Career @ ORG_0acab0cf in #JID_fb739488
  ✅ Industry: Data Scientist, Social - PhD Early Career @ ORG_0acab0cf
[2026-01-21T08:31:58.223Z] [BOT] 💾 Added channel posting: Data Scientist, Social - PhD Early Career @ ORG_0acab0cf → category channel (1 total channels)
[2026-01-21T08:31:58.223Z] [BOT] 💾 BEFORE ARCHIVING: 3194 jobs in database
[2026-01-21T08:31:58.226Z] [BOT] ✅ No jobs to archive (all 3194 jobs within 7-day window)
[2026-01-21T08:31:58.247Z] [BOT] 💾 Saved posted_jobs.json: 3194 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:31:59.748Z] [BOT] 💾 Marked as posted: Data Scientist, Social - PhD Early Career @ ORG_0acab0cf (instance #1)
💾 BEFORE ARCHIVING: 3195 jobs in database
[2026-01-21T08:31:59.750Z] [BOT] ✅ No jobs to archive (all 3195 jobs within 7-day window)
[2026-01-21T08:31:59.769Z] [BOT] 💾 Saved posted_jobs.json: 3195 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:32:02.770Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T08:32:02.770Z] [BOT] 📍 [ROUTING] "Senior Technical Revenue Manager" @ figma
[2026-01-21T08:32:02.771Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T08:32:02.935Z] [BOT] ✅ Posted message: Senior Technical Revenue Manager @ figma in #finance-jobs
  ✅ Industry: Senior Technical Revenue Manager @ figma
[2026-01-21T08:32:02.936Z] [BOT] 💾 Added channel posting: Senior Technical Revenue Manager @ figma → category channel (1 total channels)
[2026-01-21T08:32:02.936Z] [BOT] 💾 BEFORE ARCHIVING: 3196 jobs in database
[2026-01-21T08:32:02.938Z] [BOT] ✅ No jobs to archive (all 3196 jobs within 7-day window)
[2026-01-21T08:32:02.957Z] [BOT] 💾 Saved posted_jobs.json: 3196 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:32:04.458Z] [BOT] 💾 Marked as posted: Senior Technical Revenue Manager @ figma (instance #1)
[2026-01-21T08:32:04.459Z] [BOT] 💾 BEFORE ARCHIVING: 3197 jobs in database
[2026-01-21T08:32:04.460Z] [BOT] ✅ No jobs to archive (all 3197 jobs within 7-day window)
[2026-01-21T08:32:04.479Z] [BOT] 💾 Saved posted_jobs.json: 3197 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:32:07.479Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T08:32:07.479Z] [BOT] ⏭️  Skipping duplicate: JID_8786c6e5 (posted within 7 days)
[2026-01-21T08:32:07.480Z] [BOT] ⏭️  Skipping duplicate: JID_342592d0 (posted within 7 days)
[2026-01-21T08:32:07.480Z] [BOT] ⏭️  Skipping duplicate: JID_7cb5a7fa-iop_r5758 (posted within 7 days)
[2026-01-21T08:32:07.480Z] [BOT] ⏭️  Skipping duplicate: JID_e3889d25 (posted within 7 days)
[2026-01-21T08:32:07.480Z] [BOT] ⏭️  Skipping duplicate: JID_fb43f40b (posted within 7 days)
[2026-01-21T08:32:07.480Z] [BOT] ⏭️  Skipping duplicate: JID_dc8c6a6c (posted within 7 days)
[2026-01-21T08:32:07.480Z] [BOT] ⏭️  Skipping duplicate: JID_b75ac13d-engineer_320514 (posted within 7 days)
[2026-01-21T08:32:07.481Z] [BOT] ⏭️  Skipping duplicate: JID_d6dd207d (posted within 7 days)
⏭️  Skipping duplicate: JID_950b4696 (posted within 7 days)
⏭️  Skipping duplicate: JID_43d6f6bd (posted within 7 days)
[2026-01-21T08:32:07.586Z] [BOT] ✅ Loaded pending queue: 2742 total (2722 pending, 20 enriched, 0 posted)
[2026-01-21T08:32:07.775Z] [BOT] ✅ Saved pending queue: 2742 total (2722 pending, 10 enriched, 10 posted)
[2026-01-21T08:32:07.775Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T08:32:07.839Z] [BOT] 📂 Loaded 5765 existing routing entries
[2026-01-21T08:32:07.919Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5775
   Timestamp: 2026-01-21T08:32:07.892Z
[2026-01-21T08:32:07.919Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T08:32:07.919Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-21T08:32:07.920Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 6
   Top channels:
     1. #tech-jobs: 6 posts
     2. #ai-jobs: 2 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_ead674af: 2 posts
     5. #JID_fb739488: 1 posts
[2026-01-21T08:32:07.920Z] [BOT] [STATS] Channel stats saved
[2026-01-21T08:32:09.948Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3145) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*