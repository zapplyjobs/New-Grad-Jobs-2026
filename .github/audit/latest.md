# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T00:03:52.143Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T00:03:47.888Z] ========================================
[2026-02-04T00:03:47.889Z] Discord Bot Execution Log
[2026-02-04T00:03:47.889Z] Environment: GitHub Actions
[2026-02-04T00:03:47.890Z] Node Version: v20.20.0
[2026-02-04T00:03:47.890Z] ========================================
[2026-02-04T00:03:47.890Z] Environment Variables Check:
[2026-02-04T00:03:47.890Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T00:03:47.890Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T00:03:47.890Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T00:03:47.890Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T00:03:47.890Z] 
Multi-Channel Configuration:
[2026-02-04T00:03:47.890Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T00:03:47.890Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:03:47.890Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:03:47.890Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T00:03:47.890Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:03:47.891Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:03:47.891Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:03:47.891Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:03:47.891Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:03:47.891Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T00:03:47.891Z] 
Data Files Check:
[2026-02-04T00:03:47.892Z] .github/data/new_jobs.json: ✅ Exists (10 items, 118795 bytes)
[2026-02-04T00:03:47.955Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11434202 bytes)
[2026-02-04T00:03:47.955Z] 
========================================
[2026-02-04T00:03:47.955Z] Starting Enhanced Discord Bot...
[2026-02-04T00:03:47.955Z] ========================================
[2026-02-04T00:03:48.523Z] [BOT] ✅ Loaded V2 database: 2260 jobs
[2026-02-04T00:03:49.039Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T00:03:49.040Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T00:03:49.040Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T00:03:49.061Z] [BOT] ✅ Loaded pending queue: 315 total (265 pending, 50 enriched, 0 posted)
[2026-02-04T00:03:49.061Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T00:03:49.062Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T00:03:49.062Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T00:03:49.063Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T00:03:49.063Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T00:03:49.063Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T00:03:49.081Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T00:03:49.081Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
[2026-02-04T00:03:49.081Z] [BOT] 🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
[2026-02-04T00:03:49.081Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
[2026-02-04T00:03:49.082Z] [BOT] 🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Partner Marketing Lead, Cloud Partners at anthropic
[2026-02-04T00:03:49.082Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
[2026-02-04T00:03:49.082Z] [BOT] 🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
[2026-02-04T00:03:49.082Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
[2026-02-04T00:03:49.082Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
[2026-02-04T00:03:49.082Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
[2026-02-04T00:03:49.082Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
[2026-02-04T00:03:49.082Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-04T00:03:49.082Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-04T00:03:49.083Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
[2026-02-04T00:03:49.083Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
[2026-02-04T00:03:49.083Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-04T00:03:49.112Z] [BOT] ✅ Loaded pending queue: 315 total (265 pending, 50 enriched, 0 posted)
[2026-02-04T00:03:49.146Z] [BOT] ✅ Saved pending queue: 267 total (265 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-04T00:03:49.146Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T00:03:49.147Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-04T00:03:49.147Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T00:03:49.147Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T00:03:49.147Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T00:03:49.148Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T00:03:49.148Z] [BOT] 💾 BEFORE MERGE: 2260 jobs in memory (cached)
[2026-02-04T00:03:49.191Z] [BOT] ✅ Loaded V2 database: 2260 jobs
💾 DISK STATE: 2260 jobs on disk
[2026-02-04T00:03:49.192Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2260
[2026-02-04T00:03:49.197Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T00:03:49.197Z] [BOT] 💾 AFTER MERGE: 2260 jobs (merged disk + memory)
[2026-02-04T00:03:49.198Z] [BOT] ✅ No jobs to archive (all 2260 jobs within 7-day window)
[2026-02-04T00:03:49.334Z] [BOT] 💾 Saved posted_jobs.json: 2260 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T00:03:49.335Z] [BOT] ✅ Database saved successfully
[2026-02-04T00:03:49.335Z] [BOT ERROR] (node:2590) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T00:03:51.357Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2590) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*