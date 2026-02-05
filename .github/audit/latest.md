# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T12:59:49.329Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-02-05T12:59:46.858Z] ========================================
[2026-02-05T12:59:46.860Z] Discord Bot Execution Log
[2026-02-05T12:59:46.860Z] Environment: GitHub Actions
[2026-02-05T12:59:46.860Z] Node Version: v20.20.0
[2026-02-05T12:59:46.860Z] ========================================
[2026-02-05T12:59:46.860Z] Environment Variables Check:
[2026-02-05T12:59:46.860Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T12:59:46.860Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T12:59:46.861Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T12:59:46.861Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T12:59:46.861Z] 
Multi-Channel Configuration:
[2026-02-05T12:59:46.861Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T12:59:46.861Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:59:46.861Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:59:46.861Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T12:59:46.861Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:59:46.861Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:59:46.861Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:59:46.861Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:59:46.862Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:59:46.862Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T12:59:46.862Z] 
Data Files Check:
[2026-02-05T12:59:46.862Z] .github/data/new_jobs.json: ✅ Exists (4 items, 69854 bytes)
[2026-02-05T12:59:46.935Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 12078880 bytes)
[2026-02-05T12:59:46.935Z] 
========================================
[2026-02-05T12:59:46.935Z] Starting Enhanced Discord Bot...
[2026-02-05T12:59:46.935Z] ========================================
[2026-02-05T12:59:47.764Z] [BOT] ✅ Loaded V2 database: 2359 jobs
[2026-02-05T12:59:48.314Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-05T12:59:48.314Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T12:59:48.315Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T12:59:48.315Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2026-02-05T12:59:48.315Z] [BOT] [BOT] 📬 Found 4 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T12:59:48.317Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T12:59:48.317Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T12:59:48.317Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T12:59:48.318Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T12:59:48.318Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T12:59:48.318Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T12:59:48.318Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T12:59:48.318Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2026-02-05T12:59:48.333Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*