# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T16:09:35.653Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T16:09:30.122Z] ========================================
[2026-02-02T16:09:30.124Z] Discord Bot Execution Log
[2026-02-02T16:09:30.124Z] Environment: GitHub Actions
[2026-02-02T16:09:30.124Z] Node Version: v20.20.0
[2026-02-02T16:09:30.125Z] ========================================
[2026-02-02T16:09:30.125Z] Environment Variables Check:
[2026-02-02T16:09:30.125Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T16:09:30.125Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T16:09:30.125Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T16:09:30.125Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T16:09:30.125Z] 
Multi-Channel Configuration:
[2026-02-02T16:09:30.125Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T16:09:30.125Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T16:09:30.126Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T16:09:30.126Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T16:09:30.126Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T16:09:30.126Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T16:09:30.126Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T16:09:30.126Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T16:09:30.126Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T16:09:30.126Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T16:09:30.126Z] 
Data Files Check:
[2026-02-02T16:09:30.127Z] .github/data/new_jobs.json: ✅ Exists (10 items, 205206 bytes)
[2026-02-02T16:09:30.194Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11223189 bytes)
[2026-02-02T16:09:30.194Z] 
========================================
[2026-02-02T16:09:30.194Z] Starting Enhanced Discord Bot...
[2026-02-02T16:09:30.194Z] ========================================
[2026-02-02T16:09:30.829Z] [BOT] ✅ Loaded V2 database: 2226 jobs
[2026-02-02T16:09:31.748Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T16:09:31.749Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T16:09:31.749Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T16:09:31.772Z] [BOT] ✅ Loaded pending queue: 344 total (294 pending, 50 enriched, 0 posted)
[2026-02-02T16:09:31.773Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T16:09:31.774Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T16:09:31.774Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T16:09:31.775Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T16:09:31.794Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T16:09:31.794Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
[2026-02-02T16:09:31.795Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
[2026-02-02T16:09:31.795Z] [BOT] 🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
[2026-02-02T16:09:31.795Z] [BOT] 🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
[2026-02-02T16:09:31.795Z] [BOT] 🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Services at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Inference Azure at anthropic
[2026-02-02T16:09:31.795Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
[2026-02-02T16:09:31.795Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
[2026-02-02T16:09:31.795Z] [BOT] 🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Public Policy, Events Lead at anthropic
[2026-02-02T16:09:31.796Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
[2026-02-02T16:09:31.796Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
[2026-02-02T16:09:31.796Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
[2026-02-02T16:09:31.796Z] [BOT] 🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
[2026-02-02T16:09:31.796Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher at Brookhaven Lab
🚫 Skipping blacklisted job: Staff Software Engineer,  Infrastructure  at gusto
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
[2026-02-02T16:09:31.796Z] [BOT] 🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
[2026-02-02T16:09:31.796Z] [BOT] 🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
🚫 Skipping blacklisted job: Technical Enterprise Client Success Manager - Symmetry at gusto
[2026-02-02T16:09:31.797Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Staff Software Engineer, Database Infrastructure at gusto
🚫 Skipping blacklisted job: Manager of Sales Engineering, Majors/Commercial - AMER at vercel
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior AI Engineering Manager at duolingo
[2026-02-02T16:09:31.827Z] [BOT] ✅ Loaded pending queue: 344 total (294 pending, 50 enriched, 0 posted)
[2026-02-02T16:09:31.864Z] [BOT] ✅ Saved pending queue: 295 total (294 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-02T16:09:31.864Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-02T16:09:31.865Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-02T16:09:31.865Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T16:09:31.865Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-02T16:09:31.865Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-02T16:09:31.866Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-02T16:09:31.866Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T16:09:31.866Z] [BOT] 💾 BEFORE MERGE: 2226 jobs in memory (cached)
[2026-02-02T16:09:31.913Z] [BOT] ✅ Loaded V2 database: 2226 jobs
💾 DISK STATE: 2226 jobs on disk
[2026-02-02T16:09:31.914Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2226
[2026-02-02T16:09:31.920Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T16:09:31.920Z] [BOT] 💾 AFTER MERGE: 2226 jobs (merged disk + memory)
[2026-02-02T16:09:31.922Z] [BOT] ✅ No jobs to archive (all 2226 jobs within 7-day window)
[2026-02-02T16:09:32.051Z] [BOT] 💾 Saved posted_jobs.json: 2226 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T16:09:32.052Z] [BOT ERROR] (node:2712) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T16:09:34.076Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2712) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*