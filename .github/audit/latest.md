# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T17:54:51.086Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T17:54:32.201Z] ========================================
[2026-02-06T17:54:32.203Z] Discord Bot Execution Log
[2026-02-06T17:54:32.203Z] Environment: GitHub Actions
[2026-02-06T17:54:32.203Z] Node Version: v20.20.0
[2026-02-06T17:54:32.203Z] ========================================
[2026-02-06T17:54:32.203Z] Environment Variables Check:
[2026-02-06T17:54:32.203Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T17:54:32.203Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T17:54:32.203Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T17:54:32.203Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T17:54:32.204Z] 
Multi-Channel Configuration:
[2026-02-06T17:54:32.204Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T17:54:32.204Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:54:32.204Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:54:32.204Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T17:54:32.204Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:54:32.204Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:54:32.204Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:54:32.204Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:54:32.204Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:54:32.204Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T17:54:32.204Z] 
Data Files Check:
[2026-02-06T17:54:32.206Z] .github/data/new_jobs.json: ✅ Exists (10 items, 131868 bytes)
[2026-02-06T17:54:32.256Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9231331 bytes)
[2026-02-06T17:54:32.256Z] 
========================================
[2026-02-06T17:54:32.256Z] Starting Enhanced Discord Bot...
[2026-02-06T17:54:32.256Z] ========================================
[2026-02-06T17:54:32.807Z] [BOT] ✅ Loaded V2 database: 1933 jobs
[2026-02-06T17:54:33.303Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T17:54:33.303Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T17:54:33.303Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T17:54:33.322Z] [BOT] ✅ Loaded pending queue: 236 total (186 pending, 50 enriched, 0 posted)
[2026-02-06T17:54:33.322Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T17:54:33.323Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T17:54:33.323Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T17:54:33.324Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T17:54:33.324Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T17:54:33.341Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T17:54:33.341Z] [BOT] 🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-06T17:54:33.342Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-06T17:54:33.342Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
[2026-02-06T17:54:33.343Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
[2026-02-06T17:54:33.343Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-06T17:54:33.343Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
[2026-02-06T17:54:33.366Z] [BOT] ✅ Loaded pending queue: 236 total (186 pending, 50 enriched, 0 posted)
[2026-02-06T17:54:33.395Z] [BOT] ✅ Saved pending queue: 190 total (186 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-06T17:54:33.395Z] [BOT] 📋 After blacklist filter: 2 jobs (46 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-06T17:54:33.395Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-06T17:54:33.396Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T17:54:33.397Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T17:54:33.399Z] [BOT] 📍 [ROUTING] "2026 Summer Internship" @ Axtria, Inc.
[2026-02-06T17:54:33.399Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-02-06T17:54:33.415Z] [BOT ERROR] (node:2521) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T17:54:33.816Z] [BOT] ✅ Posted message: 2026 Summer Internship @ Axtria, Inc. in #🤖・ai-jobs
  ✅ Industry: 2026 Summer Internship @ Axtria, Inc.
[2026-02-06T17:54:33.817Z] [BOT] 💾 Added channel posting: 2026 Summer Internship @ Axtria, Inc. → category channel (1 total channels)
[2026-02-06T17:54:33.817Z] [BOT] 💾 BEFORE MERGE: 1934 jobs in memory (cached)
[2026-02-06T17:54:33.857Z] [BOT] ✅ Loaded V2 database: 1933 jobs
💾 DISK STATE: 1933 jobs on disk
[2026-02-06T17:54:33.857Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1934
[2026-02-06T17:54:33.862Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T17:54:33.862Z] [BOT] 💾 AFTER MERGE: 1934 jobs (merged disk + memory)
[2026-02-06T17:54:33.864Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T17:54:33.869Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T17:54:33.869Z] [BOT] ✅ Archiving complete: 10 archived, 1924 active
[2026-02-06T17:54:33.968Z] [BOT] 💾 Saved posted_jobs.json: 1924 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T17:54:35.663Z] [BOT] ✅ Posted message: 2026 Summer Internship @ Axtria, Inc. in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T17:54:35.663Z] [BOT] 💾 Added channel posting: 2026 Summer Internship @ Axtria, Inc. → location channel (2 total channels)
[2026-02-06T17:54:35.664Z] [BOT] 💾 BEFORE MERGE: 1924 jobs in memory (cached)
[2026-02-06T17:54:35.697Z] [BOT] ✅ Loaded V2 database: 1924 jobs
💾 DISK STATE: 1924 jobs on disk
[2026-02-06T17:54:35.697Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1924
[2026-02-06T17:54:35.701Z] [BOT] 🔀 Deep merged: 2026 Summer Internship @ Axtria, Inc. (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T17:54:35.702Z] [BOT] 💾 AFTER MERGE: 1924 jobs (merged disk + memory)
[2026-02-06T17:54:35.703Z] [BOT] ✅ No jobs to archive (all 1924 jobs within 7-day window)
[2026-02-06T17:54:35.828Z] [BOT] 💾 Saved posted_jobs.json: 1924 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T17:54:40.329Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T17:54:40.330Z] [BOT] 📍 [ROUTING] "Software Engineering Co-Op (Summer/Fall 2026) (Onsite)" @ ORG_80e2c77e Technologies
[2026-02-06T17:54:40.330Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T17:54:40.753Z] [BOT] ✅ Posted message: Software Engineering Co-Op (Summer/Fall 2026) (Onsite) @ ORG_80e2c77e Technologies in #💻・tech-jobs
  ✅ Industry: Software Engineering Co-Op (Summer/Fall 2026) (Onsite) @ ORG_80e2c77e Technologies
[2026-02-06T17:54:40.754Z] [BOT] 💾 Added channel posting: Software Engineering Co-Op (Summer/Fall 2026) (Onsite) @ ORG_80e2c77e Technologies → category channel (1 total channels)
[2026-02-06T17:54:40.754Z] [BOT] 💾 BEFORE MERGE: 1925 jobs in memory (cached)
[2026-02-06T17:54:40.787Z] [BOT] ✅ Loaded V2 database: 1924 jobs
💾 DISK STATE: 1924 jobs on disk
[2026-02-06T17:54:40.787Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1925
[2026-02-06T17:54:40.791Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T17:54:40.791Z] [BOT] 💾 AFTER MERGE: 1925 jobs (merged disk + memory)
[2026-02-06T17:54:40.793Z] [BOT] ✅ No jobs to archive (all 1925 jobs within 7-day window)
[2026-02-06T17:54:40.885Z] [BOT] 💾 Saved posted_jobs.json: 1925 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T17:54:42.722Z] [BOT] ✅ Posted message: Software Engineering Co-Op (Summer/Fall 2026) (Onsite) @ ORG_80e2c77e Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T17:54:42.723Z] [BOT] 💾 Added channel posting: Software Engineering Co-Op (Summer/Fall 2026) (Onsite) @ ORG_80e2c77e Technologies → location channel (2 total channels)
[2026-02-06T17:54:42.723Z] [BOT] 💾 BEFORE MERGE: 1925 jobs in memory (cached)
[2026-02-06T17:54:42.755Z] [BOT] ✅ Loaded V2 database: 1925 jobs
💾 DISK STATE: 1925 jobs on disk
[2026-02-06T17:54:42.755Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1925
[2026-02-06T17:54:42.759Z] [BOT] 🔀 Deep merged: Software Engineering Co-Op (Summer/Fall 2026) (Onsite) @ ORG_80e2c77e Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T17:54:42.759Z] [BOT] 💾 AFTER MERGE: 1925 jobs (merged disk + memory)
[2026-02-06T17:54:42.760Z] [BOT] ✅ No jobs to archive (all 1925 jobs within 7-day window)
[2026-02-06T17:54:42.857Z] [BOT] 💾 Saved posted_jobs.json: 1925 active jobs
[2026-02-06T17:54:42.860Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-06T17:54:47.360Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-06T17:54:47.361Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e4cabf77..." not found, but found as SHA256 "0c73370b30f161c8"
[2026-02-06T17:54:47.361Z] [BOT] ⏭️  Skipping duplicate: JID_d6df680b (posted within 7 days)
[2026-02-06T17:54:47.362Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_744027e0..." not found, but found as SHA256 "24be35b91ea87449"
[2026-02-06T17:54:47.362Z] [BOT] ⏭️  Skipping duplicate: JID_0298a35d (posted within 7 days)
[2026-02-06T17:54:47.372Z] [BOT] ✅ Loaded pending queue: 190 total (186 pending, 4 enriched, 0 posted)
[2026-02-06T17:54:47.390Z] [BOT] ✅ Saved pending queue: 190 total (186 pending, 2 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-02-06T17:54:47.390Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T17:54:47.501Z] [BOT] 📂 Loaded 12562 existing routing entries
[2026-02-06T17:54:47.627Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12564
[2026-02-06T17:54:47.627Z] [BOT] Timestamp: 2026-02-06T17:54:47.576Z
[2026-02-06T17:54:47.628Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 52
   Successful: 4
   Failed: 0
   Skipped: 48
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-06T17:54:47.628Z] [BOT] 3. #💻・tech-jobs: 1 posts
     4. #📍・JID_6daed763: 1 posts
[2026-02-06T17:54:47.629Z] [BOT] [STATS] Channel stats saved
[2026-02-06T17:54:47.629Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1925 jobs in memory (cached)
[2026-02-06T17:54:47.676Z] [BOT] ✅ Loaded V2 database: 1925 jobs
💾 DISK STATE: 1925 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1925
[2026-02-06T17:54:47.679Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T17:54:47.680Z] [BOT] 💾 AFTER MERGE: 1925 jobs (merged disk + memory)
[2026-02-06T17:54:47.681Z] [BOT] ✅ No jobs to archive (all 1925 jobs within 7-day window)
[2026-02-06T17:54:47.785Z] [BOT] 💾 Saved posted_jobs.json: 1925 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T17:54:49.802Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2521) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*