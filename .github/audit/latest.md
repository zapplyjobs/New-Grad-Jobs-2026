# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T07:26:02.051Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T07:25:30.548Z] ========================================
[2025-12-12T07:25:30.550Z] Discord Bot Execution Log
[2025-12-12T07:25:30.550Z] Environment: GitHub Actions
[2025-12-12T07:25:30.550Z] Node Version: v20.19.6
[2025-12-12T07:25:30.550Z] ========================================
[2025-12-12T07:25:30.550Z] Environment Variables Check:
[2025-12-12T07:25:30.550Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T07:25:30.550Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T07:25:30.550Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T07:25:30.551Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T07:25:30.551Z] 
Multi-Channel Configuration:
[2025-12-12T07:25:30.551Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T07:25:30.551Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T07:25:30.551Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T07:25:30.551Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T07:25:30.551Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T07:25:30.551Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T07:25:30.551Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T07:25:30.551Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T07:25:30.551Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T07:25:30.551Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T07:25:30.552Z] 
Data Files Check:
[2025-12-12T07:25:30.553Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132337 bytes)
[2025-12-12T07:25:30.553Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 62176 bytes)
[2025-12-12T07:25:30.553Z] 
========================================
[2025-12-12T07:25:30.553Z] Starting Enhanced Discord Bot...
[2025-12-12T07:25:30.553Z] ========================================
[2025-12-12T07:25:31.119Z] [BOT] ✅ Loaded V2 database: 96 jobs
[2025-12-12T07:25:32.024Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T07:25:32.025Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T07:25:32.025Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T07:25:32.026Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T07:25:32.145Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 183
[2025-12-12T07:25:32.146Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T07:25:32.146Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
[2025-12-12T07:25:32.146Z] [BOT] ⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
[2025-12-12T07:25:32.146Z] [BOT] ⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
⏭️  Skipping duplicate: JID_3345e37e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer I, Frontend at Twitch
⏭️  Skipping duplicate: JID_abad3e00 (posted within 7 days)
⏭️ Skipping already posted: SAP Developer - Level 1 at Cintas
[2025-12-12T07:25:32.147Z] [BOT] 📬 Found 5 new jobs (5 already posted)...
[2025-12-12T07:25:32.147Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
📋 After data quality filter: 5 jobs (0 invalid)
[2025-12-12T07:25:32.148Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2025-12-12T07:25:32.148Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T07:25:32.149Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2025-12-12T07:25:32.149Z] [BOT] 📍 [ROUTING] "Senior Data Engineer" @ ORG_81885e17
[2025-12-12T07:25:32.150Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T07:25:32.154Z] [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T07:25:32.340Z] [BOT] ✅ Created forum post: 🏢 Senior Data Engineer @ ORG_81885e17 in #📈・JID_fb739488
[2025-12-12T07:25:32.340Z] [BOT] ✅ Industry: Senior Data Engineer @ ORG_81885e17
[2025-12-12T07:25:34.022Z] [BOT] ✅ Created forum post: 🏢 Senior Data Engineer @ ORG_81885e17 in #🌉・san-francisco
[2025-12-12T07:25:34.022Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-12T07:25:35.522Z] [BOT] 💾 Marked as posted: Senior Data Engineer @ ORG_81885e17 (instance #1)
[2025-12-12T07:25:35.522Z] [BOT] 💾 BEFORE ARCHIVING: 97 jobs in database
[2025-12-12T07:25:35.523Z] [BOT] ✅ No jobs to archive (all 97 jobs within 7-day window)
[2025-12-12T07:25:35.529Z] [BOT] 💾 Saved posted_jobs.json: 97 active jobs
[2025-12-12T07:25:35.529Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Data Scientist 1" @ ORG_3a21c69b
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T07:25:35.772Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_3a21c69b in #📈・JID_fb739488
[2025-12-12T07:25:35.772Z] [BOT] ✅ Industry: Data Scientist 1 @ ORG_3a21c69b
[2025-12-12T07:25:37.555Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_3a21c69b in #💻・remote-usa
[2025-12-12T07:25:37.555Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T07:25:39.055Z] [BOT] 💾 Marked as posted: Data Scientist 1 @ ORG_3a21c69b (instance #1)
[2025-12-12T07:25:39.055Z] [BOT] 💾 BEFORE ARCHIVING: 98 jobs in database
✅ No jobs to archive (all 98 jobs within 7-day window)
[2025-12-12T07:25:39.057Z] [BOT] 💾 Saved posted_jobs.json: 98 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T07:25:39.057Z] [BOT] 📍 [ROUTING] "Data Analyst - Python/SQL + Finance knowledge" @ ORG_23325912 Global
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-12T07:25:39.057Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T07:25:39.251Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global in #📈・JID_fb739488
[2025-12-12T07:25:39.251Z] [BOT] ✅ Industry: Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global
[2025-12-12T07:25:41.088Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-12T07:25:42.588Z] [BOT] 💾 Marked as posted: Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global (instance #1)
[2025-12-12T07:25:42.588Z] [BOT] 💾 BEFORE ARCHIVING: 99 jobs in database
✅ No jobs to archive (all 99 jobs within 7-day window)
[2025-12-12T07:25:42.591Z] [BOT] 💾 Saved posted_jobs.json: 99 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T07:25:45.591Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-12T07:25:45.591Z] [BOT] 📍 [ROUTING] "MDM – Master Data Management - Parts Specialist" @ ORG_cb30a57b
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T07:25:45.883Z] [BOT] ✅ Created forum post: 🏢 MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b in #💻・tech-jobs
  ✅ Industry: MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b
[2025-12-12T07:25:47.600Z] [BOT] ✅ Created forum post: 🏢 MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b in #💻・remote-usa
[2025-12-12T07:25:47.601Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T07:25:49.102Z] [BOT] 💾 Marked as posted: MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b (instance #1)
[2025-12-12T07:25:49.102Z] [BOT] 💾 BEFORE ARCHIVING: 100 jobs in database
✅ No jobs to archive (all 100 jobs within 7-day window)
[2025-12-12T07:25:49.104Z] [BOT] 💾 Saved posted_jobs.json: 100 active jobs
[2025-12-12T07:25:49.104Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T07:25:52.105Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-12T07:25:52.105Z] [BOT] 📍 [ROUTING] "Research Scientist – New College Grad 2026 - Embodied and Agentic AI" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T07:25:52.362Z] [BOT] ✅ Created forum post: 🏢 Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456 in #🤖・ai-jobs
[2025-12-12T07:25:52.362Z] [BOT] ✅ Industry: Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456
[2025-12-12T07:25:54.196Z] [BOT] ✅ Created forum post: 🏢 Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456 in #🌉・san-francisco
[2025-12-12T07:25:54.196Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-12T07:25:55.696Z] [BOT] 💾 Marked as posted: Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456 (instance #1)
[2025-12-12T07:25:55.696Z] [BOT] 💾 BEFORE ARCHIVING: 101 jobs in database
✅ No jobs to archive (all 101 jobs within 7-day window)
[2025-12-12T07:25:55.699Z] [BOT] 💾 Saved posted_jobs.json: 101 active jobs
[2025-12-12T07:25:55.699Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T07:25:58.699Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-12-12T07:25:58.699Z] [BOT] ⏭️  Skipping duplicate: JID_24d99260 (posted within 7 days)
[2025-12-12T07:25:58.699Z] [BOT] ⏭️  Skipping duplicate: JID_428dd745 (posted within 7 days)
[2025-12-12T07:25:58.699Z] [BOT] ⏭️  Skipping duplicate: JID_a1205612 (posted within 7 days)
⏭️  Skipping duplicate: JID_a13b88d4 (posted within 7 days)
⏭️  Skipping duplicate: JID_a997bf5d-2026_jr2009464 (posted within 7 days)
[2025-12-12T07:25:58.705Z] [BOT] ✅ Loaded pending queue: 934 total (924 pending, 10 enriched, 0 posted)
[2025-12-12T07:25:58.720Z] [BOT] ✅ Saved pending queue: 934 total (854 pending, 5 enriched, 75 posted)
📋 Updated queue: marked 75 jobs as posted
[2025-12-12T07:25:58.720Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-12T07:25:58.758Z] [BOT] 📂 Loaded 91 existing routing entries
[2025-12-12T07:25:58.794Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2025-12-12T07:25:58.794Z] [BOT] Total entries: 96
   Timestamp: 2025-12-12T07:25:58.793Z
[2025-12-12T07:26:00.805Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*