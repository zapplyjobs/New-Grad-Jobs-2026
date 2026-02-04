# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T00:25:20.670Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T00:25:15.760Z] ========================================
[2026-02-04T00:25:15.762Z] Discord Bot Execution Log
[2026-02-04T00:25:15.762Z] Environment: GitHub Actions
[2026-02-04T00:25:15.763Z] Node Version: v20.20.0
[2026-02-04T00:25:15.763Z] ========================================
[2026-02-04T00:25:15.763Z] Environment Variables Check:
[2026-02-04T00:25:15.763Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T00:25:15.763Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T00:25:15.763Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T00:25:15.763Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T00:25:15.763Z] 
Multi-Channel Configuration:
[2026-02-04T00:25:15.763Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T00:25:15.763Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:25:15.764Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:25:15.764Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T00:25:15.764Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:25:15.764Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:25:15.764Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:25:15.764Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:25:15.764Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:25:15.764Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T00:25:15.764Z] 
Data Files Check:
[2026-02-04T00:25:15.765Z] .github/data/new_jobs.json: ✅ Exists (10 items, 143102 bytes)
[2026-02-04T00:25:15.823Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11434202 bytes)
[2026-02-04T00:25:15.823Z] 
========================================
[2026-02-04T00:25:15.823Z] Starting Enhanced Discord Bot...
[2026-02-04T00:25:15.823Z] ========================================
[2026-02-04T00:25:16.416Z] [BOT] ✅ Loaded V2 database: 2260 jobs
[2026-02-04T00:25:17.049Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T00:25:17.049Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T00:25:17.050Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T00:25:17.070Z] [BOT] ✅ Loaded pending queue: 315 total (265 pending, 50 enriched, 0 posted)
[2026-02-04T00:25:17.071Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T00:25:17.072Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T00:25:17.072Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T00:25:17.072Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T00:25:17.073Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T00:25:17.091Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T00:25:17.092Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
[2026-02-04T00:25:17.092Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
[2026-02-04T00:25:17.092Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
[2026-02-04T00:25:17.092Z] [BOT] 🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
[2026-02-04T00:25:17.093Z] [BOT] 🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-02-04T00:25:17.093Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
[2026-02-04T00:25:17.093Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
[2026-02-04T00:25:17.093Z] [BOT] 🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
[2026-02-04T00:25:17.093Z] [BOT] 🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
[2026-02-04T00:25:17.093Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
[2026-02-04T00:25:17.093Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
[2026-02-04T00:25:17.093Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
[2026-02-04T00:25:17.094Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
[2026-02-04T00:25:17.094Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-04T00:25:17.094Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
[2026-02-04T00:25:17.094Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
[2026-02-04T00:25:17.094Z] [BOT] 🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
[2026-02-04T00:25:17.094Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
[2026-02-04T00:25:17.122Z] [BOT] ✅ Loaded pending queue: 315 total (265 pending, 50 enriched, 0 posted)
[2026-02-04T00:25:17.157Z] [BOT] ✅ Saved pending queue: 267 total (265 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-04T00:25:17.157Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T00:25:17.157Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T00:25:17.157Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T00:25:17.158Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T00:25:17.158Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T00:25:17.158Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-04T00:25:17.158Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T00:25:17.159Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T00:25:17.159Z] [BOT] 💾 BEFORE MERGE: 2260 jobs in memory (cached)
[2026-02-04T00:25:17.203Z] [BOT] ✅ Loaded V2 database: 2260 jobs
💾 DISK STATE: 2260 jobs on disk
[2026-02-04T00:25:17.204Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2260
[2026-02-04T00:25:17.209Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T00:25:17.209Z] [BOT] 💾 AFTER MERGE: 2260 jobs (merged disk + memory)
[2026-02-04T00:25:17.210Z] [BOT] ✅ No jobs to archive (all 2260 jobs within 7-day window)
[2026-02-04T00:25:17.353Z] [BOT] 💾 Saved posted_jobs.json: 2260 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T00:25:17.353Z] [BOT ERROR] (node:2565) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T00:25:19.375Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2565) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*