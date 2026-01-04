# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T10:25:00.512Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T10:24:15.401Z] ========================================
[2026-01-04T10:24:15.403Z] Discord Bot Execution Log
[2026-01-04T10:24:15.403Z] Environment: GitHub Actions
[2026-01-04T10:24:15.403Z] Node Version: v20.19.6
[2026-01-04T10:24:15.403Z] ========================================
[2026-01-04T10:24:15.403Z] Environment Variables Check:
[2026-01-04T10:24:15.403Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T10:24:15.403Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T10:24:15.403Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T10:24:15.404Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T10:24:15.404Z] 
Multi-Channel Configuration:
[2026-01-04T10:24:15.404Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T10:24:15.404Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T10:24:15.404Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T10:24:15.404Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T10:24:15.404Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T10:24:15.404Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T10:24:15.404Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T10:24:15.404Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T10:24:15.404Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T10:24:15.404Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T10:24:15.404Z] 
Data Files Check:
[2026-01-04T10:24:15.406Z] .github/data/new_jobs.json: ✅ Exists (10 items, 188532 bytes)
[2026-01-04T10:24:15.409Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 509192 bytes)
[2026-01-04T10:24:15.409Z] 
========================================
[2026-01-04T10:24:15.410Z] Starting Enhanced Discord Bot...
[2026-01-04T10:24:15.410Z] ========================================
[2026-01-04T10:24:15.965Z] [BOT] ✅ Loaded V2 database: 1011 jobs
[2026-01-04T10:24:16.512Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T10:24:16.513Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T10:24:16.513Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T10:24:16.514Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T10:24:16.581Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T10:24:16.672Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T10:24:16.675Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T10:24:16.675Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T10:24:16.675Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T10:24:16.676Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T10:24:16.676Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T10:24:16.679Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T10:24:16.681Z] [BOT] 📍 [ROUTING] "Product Operations Manager, Launch Readiness " @ anthropic
[2026-01-04T10:24:16.681Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T10:24:16.699Z] [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T10:24:16.855Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager, Launch Readiness  @ anthropic in #📣・marketing-jobs
  ✅ Industry: Product Operations Manager, Launch Readiness  @ anthropic
[2026-01-04T10:24:18.506Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager, Launch Readiness  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:24:20.008Z] [BOT] 💾 Marked as posted: Product Operations Manager, Launch Readiness  @ anthropic (instance #1)
[2026-01-04T10:24:20.009Z] [BOT] 💾 BEFORE ARCHIVING: 1012 jobs in database
[2026-01-04T10:24:20.009Z] [BOT] ✅ No jobs to archive (all 1012 jobs within 7-day window)
[2026-01-04T10:24:20.020Z] [BOT] 💾 Saved posted_jobs.json: 1012 active jobs
[2026-01-04T10:24:20.020Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T10:24:23.021Z] [BOT] 📌 Posting 9 jobs to #🤖・ai-jobs
[2026-01-04T10:24:23.021Z] [BOT] 📍 [ROUTING] "Research Engineer, Model Evaluations" @ anthropic
[2026-01-04T10:24:23.021Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:24:23.206Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Model Evaluations @ anthropic in #🤖・ai-jobs
[2026-01-04T10:24:23.206Z] [BOT] ✅ Industry: Research Engineer, Model Evaluations @ anthropic
[2026-01-04T10:24:25.110Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Model Evaluations @ anthropic in #🌉・san-francisco
[2026-01-04T10:24:25.110Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T10:24:26.612Z] [BOT] 💾 Marked as posted: Research Engineer, Model Evaluations @ anthropic (instance #1)
[2026-01-04T10:24:26.612Z] [BOT] 💾 BEFORE ARCHIVING: 1013 jobs in database
[2026-01-04T10:24:26.613Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-04T10:24:26.622Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T10:24:26.624Z] [BOT] 📍 [ROUTING] "Research Engineer, Pre-training" @ anthropic
[2026-01-04T10:24:26.624Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:24:26.953Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Pre-training @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Pre-training @ anthropic
[2026-01-04T10:24:28.629Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Pre-training @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:24:30.131Z] [BOT] 💾 Marked as posted: Research Engineer, Pre-training @ anthropic (instance #1)
[2026-01-04T10:24:30.131Z] [BOT] 💾 BEFORE ARCHIVING: 1014 jobs in database
[2026-01-04T10:24:30.132Z] [BOT] ✅ No jobs to archive (all 1014 jobs within 7-day window)
[2026-01-04T10:24:30.140Z] [BOT] 💾 Saved posted_jobs.json: 1014 active jobs
[2026-01-04T10:24:30.141Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T10:24:30.142Z] [BOT] 📍 [ROUTING] "Research Engineer, Pretraining Scaling" @ anthropic
[2026-01-04T10:24:30.142Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:24:30.330Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Pretraining Scaling @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Pretraining Scaling @ anthropic
[2026-01-04T10:24:32.010Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Pretraining Scaling @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:24:33.512Z] [BOT] 💾 Marked as posted: Research Engineer, Pretraining Scaling @ anthropic (instance #1)
[2026-01-04T10:24:33.512Z] [BOT] 💾 BEFORE ARCHIVING: 1015 jobs in database
[2026-01-04T10:24:33.513Z] [BOT] ✅ No jobs to archive (all 1015 jobs within 7-day window)
[2026-01-04T10:24:33.520Z] [BOT] 💾 Saved posted_jobs.json: 1015 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T10:24:33.520Z] [BOT] 📍 [ROUTING] "Research Engineer, Production Model Post Training" @ anthropic
[2026-01-04T10:24:33.520Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:24:33.687Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Production Model Post Training @ anthropic in #🤖・ai-jobs
[2026-01-04T10:24:33.688Z] [BOT] ✅ Industry: Research Engineer, Production Model Post Training @ anthropic
[2026-01-04T10:24:35.320Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Production Model Post Training @ anthropic in #🌉・san-francisco
[2026-01-04T10:24:35.320Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T10:24:36.821Z] [BOT] 💾 Marked as posted: Research Engineer, Production Model Post Training @ anthropic (instance #1)
[2026-01-04T10:24:36.821Z] [BOT] 💾 BEFORE ARCHIVING: 1016 jobs in database
[2026-01-04T10:24:36.822Z] [BOT] ✅ No jobs to archive (all 1016 jobs within 7-day window)
[2026-01-04T10:24:36.829Z] [BOT] 💾 Saved posted_jobs.json: 1016 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T10:24:36.830Z] [BOT] 📍 [ROUTING] "Research Engineer / Research Scientist, Biology & Life Sciences" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:24:37.514Z] [BOT] ✅ Created forum post: 🏢 Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic
[2026-01-04T10:24:39.163Z] [BOT] ✅ Created forum post: 🏢 Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:24:40.665Z] [BOT] 💾 Marked as posted: Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic (instance #1)
[2026-01-04T10:24:40.665Z] [BOT] 💾 BEFORE ARCHIVING: 1017 jobs in database
[2026-01-04T10:24:40.666Z] [BOT] ✅ No jobs to archive (all 1017 jobs within 7-day window)
[2026-01-04T10:24:40.673Z] [BOT] 💾 Saved posted_jobs.json: 1017 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T10:24:40.673Z] [BOT] 📍 [ROUTING] " Research Engineer / Research Scientist, Tokens" @ anthropic
[2026-01-04T10:24:40.673Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:24:40.949Z] [BOT] ✅ Created forum post: 🏢  Research Engineer / Research Scientist, Tokens @ anthropic in #🤖・ai-jobs
[2026-01-04T10:24:40.949Z] [BOT] ✅ Industry:  Research Engineer / Research Scientist, Tokens @ anthropic
[2026-01-04T10:24:43.077Z] [BOT] ✅ Created forum post: 🏢  Research Engineer / Research Scientist, Tokens @ anthropic in #🌉・san-francisco
[2026-01-04T10:24:43.077Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T10:24:44.578Z] [BOT] 💾 Marked as posted:  Research Engineer / Research Scientist, Tokens @ anthropic (instance #1)
[2026-01-04T10:24:44.578Z] [BOT] 💾 BEFORE ARCHIVING: 1018 jobs in database
[2026-01-04T10:24:44.579Z] [BOT] ✅ No jobs to archive (all 1018 jobs within 7-day window)
[2026-01-04T10:24:44.586Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T10:24:44.587Z] [BOT] 📍 [ROUTING] "Research Engineer / Scientist, Alignment Science" @ anthropic
[2026-01-04T10:24:44.587Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:24:44.717Z] [BOT] ✅ Created forum post: 🏢 Research Engineer / Scientist, Alignment Science @ anthropic in #🤖・ai-jobs
[2026-01-04T10:24:44.717Z] [BOT] ✅ Industry: Research Engineer / Scientist, Alignment Science @ anthropic
[2026-01-04T10:24:46.427Z] [BOT] ✅ Created forum post: 🏢 Research Engineer / Scientist, Alignment Science @ anthropic in #🌉・san-francisco
[2026-01-04T10:24:46.428Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T10:24:47.929Z] [BOT] 💾 Marked as posted: Research Engineer / Scientist, Alignment Science @ anthropic (instance #1)
[2026-01-04T10:24:47.929Z] [BOT] 💾 BEFORE ARCHIVING: 1019 jobs in database
[2026-01-04T10:24:47.930Z] [BOT] ✅ No jobs to archive (all 1019 jobs within 7-day window)
[2026-01-04T10:24:47.938Z] [BOT] 💾 Saved posted_jobs.json: 1019 active jobs
[2026-01-04T10:24:47.938Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T10:24:47.938Z] [BOT] 📍 [ROUTING] "Research Scientist, Interpretability" @ anthropic
[2026-01-04T10:24:47.938Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T10:24:48.199Z] [BOT] ✅ Created forum post: 🏢 Research Scientist, Interpretability @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Scientist, Interpretability @ anthropic
[2026-01-04T10:24:49.905Z] [BOT] ✅ Created forum post: 🏢 Research Scientist, Interpretability @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:24:51.406Z] [BOT] 💾 Marked as posted: Research Scientist, Interpretability @ anthropic (instance #1)
[2026-01-04T10:24:51.407Z] [BOT] 💾 BEFORE ARCHIVING: 1020 jobs in database
[2026-01-04T10:24:51.407Z] [BOT] ✅ No jobs to archive (all 1020 jobs within 7-day window)
[2026-01-04T10:24:51.415Z] [BOT] 💾 Saved posted_jobs.json: 1020 active jobs
[2026-01-04T10:24:51.415Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T10:24:51.415Z] [BOT] 📍 [ROUTING] "Senior+ Software Engineer, Research Tools" @ anthropic
[2026-01-04T10:24:51.415Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:24:51.603Z] [BOT] ✅ Created forum post: 🏢 Senior+ Software Engineer, Research Tools @ anthropic in #🤖・ai-jobs
  ✅ Industry: Senior+ Software Engineer, Research Tools @ anthropic
[2026-01-04T10:24:53.268Z] [BOT] ✅ Created forum post: 🏢 Senior+ Software Engineer, Research Tools @ anthropic in #🌉・san-francisco
[2026-01-04T10:24:53.268Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T10:24:54.769Z] [BOT] 💾 Marked as posted: Senior+ Software Engineer, Research Tools @ anthropic (instance #1)
[2026-01-04T10:24:54.770Z] [BOT] 💾 BEFORE ARCHIVING: 1021 jobs in database
[2026-01-04T10:24:54.771Z] [BOT] ✅ No jobs to archive (all 1021 jobs within 7-day window)
[2026-01-04T10:24:54.779Z] [BOT] 💾 Saved posted_jobs.json: 1021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T10:24:57.779Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T10:24:57.780Z] [BOT] ⏭️  Skipping duplicate: JID_b0a8869c (posted within 7 days)
[2026-01-04T10:24:57.780Z] [BOT] ⏭️  Skipping duplicate: JID_c0cecaa1 (posted within 7 days)
⏭️  Skipping duplicate: JID_f9915154 (posted within 7 days)
⏭️  Skipping duplicate: JID_da743159 (posted within 7 days)
⏭️  Skipping duplicate: JID_3d74887a (posted within 7 days)
⏭️  Skipping duplicate: JID_19245b78 (posted within 7 days)
⏭️  Skipping duplicate: JID_8b67b0cc (posted within 7 days)
⏭️  Skipping duplicate: JID_1dd0224e (posted within 7 days)
⏭️  Skipping duplicate: JID_15566316 (posted within 7 days)
[2026-01-04T10:24:57.781Z] [BOT] ⏭️  Skipping duplicate: JID_90e6f492 (posted within 7 days)
[2026-01-04T10:24:57.803Z] [BOT] ✅ Loaded pending queue: 279 total (259 pending, 20 enriched, 0 posted)
[2026-01-04T10:24:57.826Z] [BOT] ✅ Saved pending queue: 279 total (259 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-04T10:24:57.827Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T10:24:57.877Z] [BOT] 📂 Loaded 1919 existing routing entries
[2026-01-04T10:24:57.928Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T10:24:57.929Z] [BOT] Total entries: 1929
   Timestamp: 2026-01-04T10:24:57.920Z
[2026-01-04T10:24:57.929Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-04T10:24:57.929Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T10:24:57.930Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 3
   Top channels:
     1. #🌉・san-francisco: 10 posts
     2. #🤖・ai-jobs: 9 posts
[2026-01-04T10:24:57.930Z] [BOT] 3. #📣・marketing-jobs: 1 posts
[2026-01-04T10:24:57.930Z] [BOT] [STATS] Channel stats saved
[2026-01-04T10:24:59.945Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*