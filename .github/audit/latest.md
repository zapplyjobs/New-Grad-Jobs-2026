# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T19:51:13.092Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-02-05T19:51:09.786Z] ========================================
[2026-02-05T19:51:09.788Z] Discord Bot Execution Log
[2026-02-05T19:51:09.788Z] Environment: GitHub Actions
[2026-02-05T19:51:09.788Z] Node Version: v20.20.0
[2026-02-05T19:51:09.788Z] ========================================
[2026-02-05T19:51:09.788Z] Environment Variables Check:
[2026-02-05T19:51:09.788Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T19:51:09.788Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T19:51:09.788Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T19:51:09.788Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T19:51:09.788Z] 
Multi-Channel Configuration:
[2026-02-05T19:51:09.789Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T19:51:09.789Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T19:51:09.789Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T19:51:09.789Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T19:51:09.789Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T19:51:09.789Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T19:51:09.789Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T19:51:09.789Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T19:51:09.789Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T19:51:09.789Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T19:51:09.789Z] 
Data Files Check:
[2026-02-05T19:51:09.790Z] .github/data/new_jobs.json: ✅ Exists (4 items, 69854 bytes)
[2026-02-05T19:51:09.847Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 12096367 bytes)
[2026-02-05T19:51:09.847Z] 
========================================
[2026-02-05T19:51:09.847Z] Starting Enhanced Discord Bot...
[2026-02-05T19:51:09.847Z] ========================================
[2026-02-05T19:51:10.435Z] [BOT] ✅ Loaded V2 database: 2363 jobs
[2026-02-05T19:51:11.171Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T19:51:11.172Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T19:51:11.172Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T19:51:11.172Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2026-02-05T19:51:11.173Z] [BOT] [BOT] 📬 Found 4 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T19:51:11.174Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T19:51:11.174Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T19:51:11.175Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T19:51:11.175Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T19:51:11.176Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T19:51:11.176Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
ℹ️ No new jobs to post - all jobs have been posted already
[2026-02-05T19:51:11.194Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*