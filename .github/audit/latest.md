# Discord Bot Execution Audit
**Timestamp:** 2025-12-15T22:03:27.641Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-15T22:03:09.687Z] ========================================
[2025-12-15T22:03:09.689Z] Discord Bot Execution Log
[2025-12-15T22:03:09.689Z] Environment: GitHub Actions
[2025-12-15T22:03:09.689Z] Node Version: v20.19.6
[2025-12-15T22:03:09.689Z] ========================================
[2025-12-15T22:03:09.689Z] Environment Variables Check:
[2025-12-15T22:03:09.689Z] DISCORD_TOKEN: ✅ Set
[2025-12-15T22:03:09.689Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-15T22:03:09.689Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-15T22:03:09.689Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-15T22:03:09.689Z] 
Multi-Channel Configuration:
[2025-12-15T22:03:09.689Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-15T22:03:09.690Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-15T22:03:09.690Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-15T22:03:09.690Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-15T22:03:09.690Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-15T22:03:09.690Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-15T22:03:09.690Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-15T22:03:09.690Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-15T22:03:09.690Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-15T22:03:09.690Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-15T22:03:09.690Z] 
Data Files Check:
[2025-12-15T22:03:09.691Z] .github/data/new_jobs.json: ✅ Exists (2 items, 30029 bytes)
[2025-12-15T22:03:09.691Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 94561 bytes)
[2025-12-15T22:03:09.692Z] 
========================================
[2025-12-15T22:03:09.692Z] Starting Enhanced Discord Bot...
[2025-12-15T22:03:09.692Z] ========================================
[2025-12-15T22:03:10.249Z] [BOT] ✅ Loaded V2 database: 149 jobs
[2025-12-15T22:03:11.336Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-15T22:03:11.337Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-15T22:03:11.337Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-15T22:03:11.337Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-15T22:03:11.453Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 148
[2025-12-15T22:03:11.454Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-15T22:03:11.454Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-15T22:03:11.454Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2025-12-15T22:03:11.455Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2025-12-15T22:03:11.455Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-15T22:03:11.456Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-15T22:03:11.457Z] [BOT] 📍 [ROUTING] "Senior Member of Technical Staff" @ ORG_d1aff162
[2025-12-15T22:03:11.457Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-15T22:03:11.461Z] [BOT ERROR] (node:2514) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-15T22:03:11.638Z] [BOT] ✅ Created forum post: 🏢 Senior Member of Technical Staff @ ORG_d1aff162 in #🤖・ai-jobs
[2025-12-15T22:03:11.639Z] [BOT] ✅ Industry: Senior Member of Technical Staff @ ORG_d1aff162
[2025-12-15T22:03:13.542Z] [BOT] ✅ Created forum post: 🏢 Senior Member of Technical Staff @ ORG_d1aff162 in #🤠・austin
[2025-12-15T22:03:13.542Z] [BOT] ✅ Location: 🤠・austin
[2025-12-15T22:03:15.042Z] [BOT] 💾 Marked as posted: Senior Member of Technical Staff @ ORG_d1aff162 (instance #1)
[2025-12-15T22:03:15.042Z] [BOT] 💾 BEFORE ARCHIVING: 150 jobs in database
[2025-12-15T22:03:15.042Z] [BOT] ✅ No jobs to archive (all 150 jobs within 7-day window)
[2025-12-15T22:03:15.048Z] [BOT] 💾 Saved posted_jobs.json: 150 active jobs
[2025-12-15T22:03:15.048Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-15T22:03:18.049Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-15T22:03:18.049Z] [BOT] 📍 [ROUTING] "Entry Level Mainframe Systems Engineer" @ ORG_c910d474 Motors
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T22:03:18.307Z] [BOT] ✅ Created forum post: 🏢 Entry Level Mainframe Systems Engineer @ ORG_c910d474 Motors in #💻・tech-jobs
[2025-12-15T22:03:18.307Z] [BOT] ✅ Industry: Entry Level Mainframe Systems Engineer @ ORG_c910d474 Motors
[2025-12-15T22:03:20.014Z] [BOT] ✅ Created forum post: 🏢 Entry Level Mainframe Systems Engineer @ ORG_c910d474 Motors in #💻・remote-usa
[2025-12-15T22:03:20.014Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-15T22:03:21.515Z] [BOT] 💾 Marked as posted: Entry Level Mainframe Systems Engineer @ ORG_c910d474 Motors (instance #1)
[2025-12-15T22:03:21.515Z] [BOT] 💾 BEFORE ARCHIVING: 151 jobs in database
✅ No jobs to archive (all 151 jobs within 7-day window)
[2025-12-15T22:03:21.517Z] [BOT] 💾 Saved posted_jobs.json: 151 active jobs
[2025-12-15T22:03:21.517Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-15T22:03:24.518Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-15T22:03:24.518Z] [BOT] ⏭️  Skipping duplicate: JID_6493bacb-staff_r-92551 (posted within 7 days)
[2025-12-15T22:03:24.518Z] [BOT] ⏭️  Skipping duplicate: JID_c0603ac0-careers_gm-JID_ef45e9ba-engineer_jr-202524087 (posted within 7 days)
[2025-12-15T22:03:24.519Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-15T22:03:24.520Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2025-12-15T22:03:24.520Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-15T22:03:24.557Z] [BOT] 📂 Loaded 143 existing routing entries
[2025-12-15T22:03:24.594Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-15T22:03:24.594Z] [BOT] Total entries: 145
   Timestamp: 2025-12-15T22:03:24.593Z
[2025-12-15T22:03:26.606Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2514) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*