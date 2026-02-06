# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T06:42:13.194Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 6
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T06:41:54.678Z] ========================================
[2026-02-06T06:41:54.680Z] Discord Bot Execution Log
[2026-02-06T06:41:54.680Z] Environment: GitHub Actions
[2026-02-06T06:41:54.680Z] Node Version: v20.20.0
[2026-02-06T06:41:54.680Z] ========================================
[2026-02-06T06:41:54.680Z] Environment Variables Check:
[2026-02-06T06:41:54.680Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T06:41:54.680Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T06:41:54.680Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T06:41:54.680Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T06:41:54.680Z] 
Multi-Channel Configuration:
[2026-02-06T06:41:54.681Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T06:41:54.681Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:41:54.681Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:41:54.681Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T06:41:54.681Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:41:54.681Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:41:54.681Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:41:54.681Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:41:54.681Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T06:41:54.681Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T06:41:54.681Z] 
Data Files Check:
[2026-02-06T06:41:54.682Z] .github/data/new_jobs.json: ✅ Exists (10 items, 178056 bytes)
[2026-02-06T06:41:54.739Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10761519 bytes)
[2026-02-06T06:41:54.739Z] 
========================================
[2026-02-06T06:41:54.739Z] Starting Enhanced Discord Bot...
[2026-02-06T06:41:54.739Z] ========================================
[2026-02-06T06:41:55.309Z] [BOT] ✅ Loaded V2 database: 2168 jobs
[2026-02-06T06:41:55.795Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T06:41:55.796Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T06:41:55.796Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T06:41:55.810Z] [BOT] ✅ Loaded pending queue: 223 total (173 pending, 50 enriched, 0 posted)
[2026-02-06T06:41:55.810Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T06:41:55.811Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-06T06:41:55.811Z] [BOT] ⏭️  Skipping old job: JID_5b0ef192 (original posting 10 days ago, max is 7)
[2026-02-06T06:41:55.811Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T06:41:55.812Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T06:41:55.812Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T06:41:55.813Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T06:41:55.813Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T06:41:55.813Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T06:41:55.813Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-06T06:41:55.814Z] [BOT] ⏭️  Skipping old job: JID_da200308 (original posting 10 days ago, max is 7)
[2026-02-06T06:41:55.814Z] [BOT] ⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-06T06:41:55.814Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T06:41:55.814Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T06:41:55.831Z] [BOT] 📬 Found 44 new jobs (6 already posted)...
[2026-02-06T06:41:55.831Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
[2026-02-06T06:41:55.832Z] [BOT] 🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
[2026-02-06T06:41:55.832Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-06T06:41:55.832Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-06T06:41:55.832Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-06T06:41:55.832Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
[2026-02-06T06:41:55.832Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-06T06:41:55.832Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-06T06:41:55.832Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T06:41:55.832Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
[2026-02-06T06:41:55.832Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-06T06:41:55.833Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
[2026-02-06T06:41:55.833Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
[2026-02-06T06:41:55.833Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-06T06:41:55.833Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
[2026-02-06T06:41:55.833Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
[2026-02-06T06:41:55.833Z] [BOT] 🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
[2026-02-06T06:41:55.833Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-06T06:41:55.833Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
[2026-02-06T06:41:55.848Z] [BOT] ✅ Loaded pending queue: 223 total (173 pending, 50 enriched, 0 posted)
[2026-02-06T06:41:55.872Z] [BOT] ✅ Saved pending queue: 182 total (173 pending, 9 enriched, 0 posted)
🗑️ Removed 41 blacklisted jobs from pending queue
[2026-02-06T06:41:55.872Z] [BOT] 📋 After blacklist filter: 3 jobs (41 blacklisted)
📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-06T06:41:55.873Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-02-06T06:41:55.873Z] [BOT] ⏸️ Limiting to 10 jobs this run, 41 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T06:41:55.875Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-06T06:41:55.877Z] [BOT] 📍 [ROUTING] "Mobile dev" @ ORG_1e257f5f Technologies
[2026-02-06T06:41:55.877Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T06:41:55.894Z] [BOT ERROR] (node:2565) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T06:41:56.115Z] [BOT] ✅ Posted message: Mobile dev @ ORG_1e257f5f Technologies in #💻・tech-jobs
[2026-02-06T06:41:56.115Z] [BOT] ✅ Industry: Mobile dev @ ORG_1e257f5f Technologies
[2026-02-06T06:41:56.116Z] [BOT] 💾 Added channel posting: Mobile dev @ ORG_1e257f5f Technologies → category channel (1 total channels)
[2026-02-06T06:41:56.116Z] [BOT] 💾 BEFORE MERGE: 2169 jobs in memory (cached)
[2026-02-06T06:41:56.158Z] [BOT] ✅ Loaded V2 database: 2168 jobs
💾 DISK STATE: 2168 jobs on disk
[2026-02-06T06:41:56.159Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2169
[2026-02-06T06:41:56.163Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T06:41:56.164Z] [BOT] 💾 AFTER MERGE: 2169 jobs (merged disk + memory)
[2026-02-06T06:41:56.165Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T06:41:56.172Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
✅ Archiving complete: 20 archived, 2149 active
[2026-02-06T06:41:56.277Z] [BOT] 💾 Saved posted_jobs.json: 2149 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:41:58.111Z] [BOT] ✅ Posted message: Mobile dev @ ORG_1e257f5f Technologies in #📍・JID_6daed763
[2026-02-06T06:41:58.111Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T06:41:58.112Z] [BOT] 💾 Added channel posting: Mobile dev @ ORG_1e257f5f Technologies → location channel (2 total channels)
[2026-02-06T06:41:58.112Z] [BOT] 💾 BEFORE MERGE: 2149 jobs in memory (cached)
[2026-02-06T06:41:58.157Z] [BOT] ✅ Loaded V2 database: 2149 jobs
💾 DISK STATE: 2149 jobs on disk
[2026-02-06T06:41:58.158Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2149
[2026-02-06T06:41:58.162Z] [BOT] 🔀 Deep merged: Mobile dev @ ORG_1e257f5f Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T06:41:58.162Z] [BOT] 💾 AFTER MERGE: 2149 jobs (merged disk + memory)
[2026-02-06T06:41:58.164Z] [BOT] ✅ No jobs to archive (all 2149 jobs within 7-day window)
[2026-02-06T06:41:58.276Z] [BOT] 💾 Saved posted_jobs.json: 2149 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:41:59.776Z] [BOT] 📍 [ROUTING] "NetherRealm Software Engineering Intern Co-op: Chicago - Jun-Dec 2026" @ ORG_dc008d0e Bros. Discovery
   Category: TECH (matched: "software")
[2026-02-06T06:41:59.776Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T06:41:59.917Z] [BOT] ✅ Posted message: NetherRealm Software Engineering Intern Co-op: Chicago - Jun-Dec 2026 @ ORG_dc008d0e Bros. Discovery in #💻・tech-jobs
[2026-02-06T06:41:59.917Z] [BOT] ✅ Industry: NetherRealm Software Engineering Intern Co-op: Chicago - Jun-Dec 2026 @ ORG_dc008d0e Bros. Discovery
[2026-02-06T06:41:59.918Z] [BOT] 💾 Added channel posting: NetherRealm Software Engineering Intern Co-op: Chicago - Jun-Dec 2026 @ ORG_dc008d0e Bros. Discovery → category channel (1 total channels)
[2026-02-06T06:41:59.918Z] [BOT] 💾 BEFORE MERGE: 2150 jobs in memory (cached)
[2026-02-06T06:41:59.953Z] [BOT] ✅ Loaded V2 database: 2149 jobs
💾 DISK STATE: 2149 jobs on disk
[2026-02-06T06:41:59.953Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2150
[2026-02-06T06:41:59.958Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T06:41:59.958Z] [BOT] 💾 AFTER MERGE: 2150 jobs (merged disk + memory)
[2026-02-06T06:41:59.959Z] [BOT] ✅ No jobs to archive (all 2150 jobs within 7-day window)
[2026-02-06T06:42:00.064Z] [BOT] 💾 Saved posted_jobs.json: 2150 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:42:01.692Z] [BOT] ✅ Posted message: NetherRealm Software Engineering Intern Co-op: Chicago - Jun-Dec 2026 @ ORG_dc008d0e Bros. Discovery in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T06:42:01.693Z] [BOT] 💾 Added channel posting: NetherRealm Software Engineering Intern Co-op: Chicago - Jun-Dec 2026 @ ORG_dc008d0e Bros. Discovery → location channel (2 total channels)
[2026-02-06T06:42:01.693Z] [BOT] 💾 BEFORE MERGE: 2150 jobs in memory (cached)
[2026-02-06T06:42:01.743Z] [BOT] ✅ Loaded V2 database: 2150 jobs
💾 DISK STATE: 2150 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2150
[2026-02-06T06:42:01.746Z] [BOT] 🔀 Deep merged: NetherRealm Software Engineering Intern Co-op: Chicago - Jun-Dec 2026 @ ORG_dc008d0e Bros. Discovery (disk: 1 channels → merged: 2 channels)
[2026-02-06T06:42:01.746Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2150 jobs (merged disk + memory)
[2026-02-06T06:42:01.748Z] [BOT] ✅ No jobs to archive (all 2150 jobs within 7-day window)
[2026-02-06T06:42:01.853Z] [BOT] 💾 Saved posted_jobs.json: 2150 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:42:03.355Z] [BOT] 📍 [ROUTING] "Software Engineer Intern - Americas Campus (Summer 2026)" @ ORG_e7345cd4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T06:42:03.552Z] [BOT] ✅ Posted message: Software Engineer Intern - Americas Campus (Summer 2026) @ ORG_e7345cd4 in #💻・tech-jobs
  ✅ Industry: Software Engineer Intern - Americas Campus (Summer 2026) @ ORG_e7345cd4
[2026-02-06T06:42:03.553Z] [BOT] 💾 Added channel posting: Software Engineer Intern - Americas Campus (Summer 2026) @ ORG_e7345cd4 → category channel (1 total channels)
[2026-02-06T06:42:03.553Z] [BOT] 💾 BEFORE MERGE: 2151 jobs in memory (cached)
[2026-02-06T06:42:03.588Z] [BOT] ✅ Loaded V2 database: 2150 jobs
💾 DISK STATE: 2150 jobs on disk
[2026-02-06T06:42:03.588Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2151
[2026-02-06T06:42:03.593Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T06:42:03.593Z] [BOT] 💾 AFTER MERGE: 2151 jobs (merged disk + memory)
[2026-02-06T06:42:03.594Z] [BOT] ✅ No jobs to archive (all 2151 jobs within 7-day window)
[2026-02-06T06:42:03.696Z] [BOT] 💾 Saved posted_jobs.json: 2151 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:42:05.329Z] [BOT] ✅ Posted message: Software Engineer Intern - Americas Campus (Summer 2026) @ ORG_e7345cd4 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T06:42:05.330Z] [BOT] 💾 Added channel posting: Software Engineer Intern - Americas Campus (Summer 2026) @ ORG_e7345cd4 → location channel (2 total channels)
[2026-02-06T06:42:05.330Z] [BOT] 💾 BEFORE MERGE: 2151 jobs in memory (cached)
[2026-02-06T06:42:05.367Z] [BOT] ✅ Loaded V2 database: 2151 jobs
💾 DISK STATE: 2151 jobs on disk
[2026-02-06T06:42:05.368Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2151
[2026-02-06T06:42:05.372Z] [BOT] 🔀 Deep merged: Software Engineer Intern - Americas Campus (Summer 2026) @ ORG_e7345cd4 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T06:42:05.372Z] [BOT] 💾 AFTER MERGE: 2151 jobs (merged disk + memory)
[2026-02-06T06:42:05.373Z] [BOT] ✅ No jobs to archive (all 2151 jobs within 7-day window)
[2026-02-06T06:42:05.485Z] [BOT] 💾 Saved posted_jobs.json: 2151 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T06:42:09.986Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-02-06T06:42:09.988Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1c93bce7..." not found, but found as SHA256 "c7fda4a6183e7a3e"
[2026-02-06T06:42:09.988Z] [BOT] ⏭️  Skipping duplicate: JID_f5c398cd (posted within 7 days)
[2026-02-06T06:42:09.988Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c303b37f..." not found, but found as SHA256 "659537b152636b89"
[2026-02-06T06:42:09.989Z] [BOT] ⏭️  Skipping duplicate: JID_ac55fd34 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_9d4aee5d..." not found, but found as SHA256 "03a61c3ae839c1e8"
⏭️  Skipping duplicate: JID_87bc30e1 (posted within 7 days)
[2026-02-06T06:42:09.999Z] [BOT] ✅ Loaded pending queue: 182 total (173 pending, 9 enriched, 0 posted)
[2026-02-06T06:42:10.015Z] [BOT] ✅ Saved pending queue: 182 total (173 pending, 6 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-02-06T06:42:10.015Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T06:42:10.110Z] [BOT] 📂 Loaded 12499 existing routing entries
[2026-02-06T06:42:10.247Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-06T06:42:10.247Z] [BOT] New entries: 3
   Total entries: 12502
   Timestamp: 2026-02-06T06:42:10.191Z
[2026-02-06T06:42:10.248Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T06:42:10.248Z] [BOT] Total attempts: 53
   Successful: 6
   Failed: 0
   Skipped: 47
[2026-02-06T06:42:10.248Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T06:42:10.248Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 2
   Top channels:
[2026-02-06T06:42:10.248Z] [BOT] 1. #💻・tech-jobs: 3 posts
     2. #📍・JID_6daed763: 3 posts
[2026-02-06T06:42:10.249Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T06:42:10.249Z] [BOT] 💾 BEFORE MERGE: 2151 jobs in memory (cached)
[2026-02-06T06:42:10.299Z] [BOT] ✅ Loaded V2 database: 2151 jobs
💾 DISK STATE: 2151 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2151
[2026-02-06T06:42:10.304Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T06:42:10.304Z] [BOT] 💾 AFTER MERGE: 2151 jobs (merged disk + memory)
[2026-02-06T06:42:10.306Z] [BOT] ✅ No jobs to archive (all 2151 jobs within 7-day window)
[2026-02-06T06:42:10.422Z] [BOT] 💾 Saved posted_jobs.json: 2151 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T06:42:12.444Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2565) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*