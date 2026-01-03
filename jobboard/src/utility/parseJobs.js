// src/utility/parseJobs.js

// ============================================================================
// SMART README PARSER - Dynamically detects column positions
// ============================================================================

// Column name variations we recognize (case-insensitive)
const COLUMN_ALIASES = {
  company: ['company', 'employer', 'org', 'organization'],
  role: ['role', 'title', 'position', 'job', 'job title'],
  location: ['location', 'loc', 'place', 'city', 'where'],
  posted: ['posted', 'date', 'when', 'time', 'added', 'created'],
  level: ['level', 'experience', 'exp', 'seniority', 'type'],
  category: ['category', 'cat', 'dept', 'department', 'team', 'field'],
  apply: ['apply', 'link', 'url', 'action', 'application']
};

// Patterns to detect what type of content a cell contains
const CONTENT_PATTERNS = {
  // Apply link patterns - various formats
  applyLink: [
    /\[.*?\]\(([^)]+)\)/,                    // [text](url) or [<img>](url)
    /\[<img[^>]*>\]\(([^)]+)\)/,             // [<img src="...">](url)
    /href=["']([^"']+)["']/,                 // href="url"
    /<a[^>]*href=["']([^"']+)["'][^>]*>/     // <a href="url">
  ],
  // Posted date patterns
  posted: [
    /^\d+[hdwmy]\s*ago$/i,                   // 2d ago, 1h ago
    /^(today|yesterday|just now)$/i,         // today, yesterday
    /^\d+\s*(hour|day|week|month|year)s?\s*ago$/i,  // 2 days ago
    /^\d{1,2}\/\d{1,2}(\/\d{2,4})?$/,       // 12/25 or 12/25/2024
    /^\d{4}-\d{2}-\d{2}$/                    // 2024-12-25
  ],
  // Location patterns
  location: [
    /^[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*,?\s*[A-Z]{2}$/,  // City, ST
    /^remote/i,                              // Remote
    /^hybrid/i,                              // Hybrid
    /^[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*$/,     // City name
    /^[A-Z]{2,3}$/                           // State abbreviation
  ],
  // Level/experience patterns (including badge images)
  level: [
    /entry|junior|new\s*grad|intern/i,
    /mid|intermediate/i,
    /senior|lead|principal|staff/i,
    /!\[Entry\]/i,                           // Badge: ![Entry](...)
    /!\[Mid\]/i,                             // Badge: ![Mid](...)
    /!\[Senior\]/i,                          // Badge: ![Senior](...)
    /img\.shields\.io\/badge\/-?(Entry|Mid|Senior)/i  // Shield badge URL
  ],
  // Category patterns
  category: [
    /engineer|development|software|backend|frontend|full\s*stack/i,
    /data|ml|ai|machine\s*learning|analytics/i,
    /devops|infrastructure|cloud|sre/i,
    /mobile|ios|android/i,
    /security|product|design/i
  ]
};

// Helper function to map level values
const mapToExperienceLevel = (value) => {
  if (!value) return 'Entry-Level';

  const lowerValue = value.toLowerCase();

  // Check shield badge patterns first
  if (lowerValue.includes('![entry]') || lowerValue.includes('badge/-entry') || lowerValue.includes('badge/-entry')) {
    return 'Entry-Level';
  }
  if (lowerValue.includes('![mid]') || lowerValue.includes('badge/-mid')) {
    return 'Mid-Level';
  }
  if (lowerValue.includes('![senior]') || lowerValue.includes('badge/-senior')) {
    return 'Senior';
  }

  // Text-based detection
  if (lowerValue.includes('entry') || lowerValue.includes('junior') || lowerValue.includes('new grad')) {
    return 'Entry-Level';
  }
  if (lowerValue.includes('mid') || lowerValue.includes('intermediate')) {
    return 'Mid-Level';
  }
  if (lowerValue.includes('senior') || lowerValue.includes('lead') || lowerValue.includes('principal')) {
    return 'Senior';
  }
  if (lowerValue.includes('intern')) {
    return 'Internship';
  }

  // If it looks like a time value, default to Entry-Level
  if (/\d+[hdwmy]\s*ago/i.test(lowerValue) || /hour|day|week|month|year/i.test(lowerValue)) {
    return 'Entry-Level';
  }

  return 'Entry-Level';
};

// Detect if a cell contains an apply link
const extractApplyLink = (cell) => {
  if (!cell) return null;

  for (const pattern of CONTENT_PATTERNS.applyLink) {
    const match = cell.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
};

// Detect if content looks like a posted date
const looksLikePostedDate = (value) => {
  if (!value) return false;
  return CONTENT_PATTERNS.posted.some(pattern => pattern.test(value.trim()));
};

// Detect if content looks like a location
const looksLikeLocation = (value) => {
  if (!value) return false;
  const trimmed = value.trim();
  // Check patterns
  if (CONTENT_PATTERNS.location.some(pattern => pattern.test(trimmed))) {
    return true;
  }
  // Check for common location keywords
  const locationKeywords = ['remote', 'hybrid', 'onsite', 'on-site', 'usa', 'us', 'canada', 'uk'];
  return locationKeywords.some(kw => trimmed.toLowerCase().includes(kw));
};

// Detect if content looks like a level/experience
const looksLikeLevel = (value) => {
  if (!value) return false;
  return CONTENT_PATTERNS.level.some(pattern => pattern.test(value));
};

// Detect if content looks like a category
const looksLikeCategory = (value) => {
  if (!value) return false;
  return CONTENT_PATTERNS.category.some(pattern => pattern.test(value));
};

// Normalize column header name to standard field name
const normalizeColumnName = (header) => {
  const cleaned = header.toLowerCase().trim().replace(/[*_#]/g, '');

  for (const [fieldName, aliases] of Object.entries(COLUMN_ALIASES)) {
    if (aliases.some(alias => cleaned.includes(alias))) {
      return fieldName;
    }
  }
  return null;
};

// Parse table header row to create column mapping
const parseTableHeader = (headerRow) => {
  const cells = headerRow.split('|').map(cell => cell.trim()).filter(cell => cell);
  const columnMap = {};

  cells.forEach((cell, index) => {
    const fieldName = normalizeColumnName(cell);
    if (fieldName) {
      columnMap[fieldName] = index;
    }
  });

  return { columnMap, columnCount: cells.length };
};

// Smart cell content detection when column position is unknown
const detectCellType = (cell, existingData = {}) => {
  if (!cell || cell.includes('---')) return { type: null, value: null };

  const trimmed = cell.trim();

  // Check for apply link first (most distinctive)
  const applyLink = extractApplyLink(trimmed);
  if (applyLink) {
    return { type: 'apply', value: applyLink };
  }

  // Check for level badges (shields.io or markdown badges)
  if (looksLikeLevel(trimmed)) {
    return { type: 'level', value: trimmed };
  }

  // Check for posted date
  if (looksLikePostedDate(trimmed)) {
    return { type: 'posted', value: trimmed };
  }

  // Check for location
  if (looksLikeLocation(trimmed) && !existingData.location) {
    return { type: 'location', value: trimmed };
  }

  // Check for category
  if (looksLikeCategory(trimmed) && !existingData.category) {
    return { type: 'category', value: trimmed };
  }

  return { type: 'unknown', value: trimmed };
};

// Extract company info from various header formats
const extractCompanyInfo = (line) => {
  let company = null;
  let emoji = '🏢';

  // Pattern 1: #### 🏢 **CompanyName** (X positions)
  const headerMatch = line.match(/#{3,4}\s*([^\s*]+)\s*\*\*([^*]+)\*\*/);
  if (headerMatch) {
    emoji = headerMatch[1];
    company = headerMatch[2].trim().replace(/\([^)]*\)/, '').trim();
    return { company, emoji };
  }

  // Pattern 2: <summary><h4>🏢 <strong>CompanyName</strong>
  const summaryH4Match = line.match(/<summary><h4>([^\s<]+)\s*<strong>([^<]+)<\/strong>/);
  if (summaryH4Match) {
    emoji = summaryH4Match[1];
    company = summaryH4Match[2].trim().replace(/\([^)]*\)/, '').trim();
    return { company, emoji };
  }

  // Pattern 3: <summary><strong>🏢 CompanyName</strong>
  const summaryStrongMatch = line.match(/<summary><strong>([^\s]+)\s+([^<]+)<\/strong>/);
  if (summaryStrongMatch) {
    emoji = summaryStrongMatch[1];
    company = summaryStrongMatch[2].trim().replace(/\([^)]*\)/, '').trim();
    return { company, emoji };
  }

  // Pattern 4: Any <strong> in summary
  const summaryAnyMatch = line.match(/<summary>.*?<strong>([^<]+)<\/strong>/);
  if (summaryAnyMatch) {
    const fullText = summaryAnyMatch[1].trim();
    const parts = fullText.split(/\s+/);
    if (parts.length >= 2 && /[\u{1F300}-\u{1FAFF}]/u.test(parts[0])) {
      emoji = parts[0];
      company = parts.slice(1).join(' ').replace(/\([^)]*\)/, '').trim();
    } else {
      company = fullText.replace(/\([^)]*\)/, '').trim();
    }
    return { company, emoji };
  }

  return null;
};

// Main parsing function
export const parseJobsFromReadme = (readmeContent) => {
  const jobs = [];
  const lines = readmeContent.split('\n');

  let currentCompany = '';
  let currentEmoji = '🏢';
  let currentColumnMap = null;
  let inJobTable = false;
  let hasCompanyColumn = false;

  console.log('🧠 Smart parser starting...');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip empty lines
    if (!line) continue;

    // Check for company headers
    const companyInfo = extractCompanyInfo(line);
    if (companyInfo) {
      currentCompany = companyInfo.company;
      currentEmoji = companyInfo.emoji;
      inJobTable = false;
      currentColumnMap = null;
      continue;
    }

    // Check for table header row (contains column names)
    if (line.startsWith('|') && (
      line.toLowerCase().includes('role') ||
      line.toLowerCase().includes('company') ||
      line.toLowerCase().includes('location') ||
      line.toLowerCase().includes('apply')
    )) {
      const { columnMap, columnCount } = parseTableHeader(line);

      if (Object.keys(columnMap).length >= 2) {
        currentColumnMap = columnMap;
        hasCompanyColumn = 'company' in columnMap;
        inJobTable = true;
        console.log(`📊 Detected table with columns:`, Object.keys(columnMap).join(', '));
      }
      continue;
    }

    // Skip separator rows
    if (line.includes('|---') || line.includes('|===') || line.includes('| ---')) {
      continue;
    }

    // Parse data rows
    if (inJobTable && line.startsWith('|') && currentColumnMap) {
      const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);

      // Skip if too few cells
      if (cells.length < 3) continue;

      // Build job object using column map
      const job = {
        company: currentCompany,
        emoji: currentEmoji,
        role: '',
        location: '',
        posted: '',
        level: '',
        category: '',
        applyLink: '#',
        isRemote: false,
        isUSOnly: false
      };

      // Map known columns
      for (const [fieldName, colIndex] of Object.entries(currentColumnMap)) {
        if (colIndex < cells.length) {
          const cellValue = cells[colIndex];

          switch (fieldName) {
            case 'company':
              // Extract company name, handling emoji prefixes like "🏢 **Google**"
              const companyMatch = cellValue.match(/\*\*([^*]+)\*\*/);
              if (companyMatch) {
                job.company = companyMatch[1].trim();
                // Try to extract emoji
                const emojiMatch = cellValue.match(/^([^\s*]+)\s*\*\*/);
                if (emojiMatch && /[\u{1F300}-\u{1FAFF}]/u.test(emojiMatch[1])) {
                  job.emoji = emojiMatch[1];
                }
              } else {
                job.company = cellValue.replace(/[*_]/g, '').trim();
              }
              break;

            case 'role':
              job.role = cellValue;
              // Check for indicators in role
              if (cellValue.includes('🏠')) job.isRemote = true;
              if (cellValue.includes('🇺🇸')) job.isUSOnly = true;
              // Clean role
              job.role = cellValue.replace(/🏠|🇺🇸/g, '').trim();
              break;

            case 'location':
              job.location = cellValue;
              if (cellValue.toLowerCase().includes('remote')) job.isRemote = true;
              break;

            case 'posted':
              job.posted = cellValue;
              break;

            case 'level':
              job.level = cellValue;
              break;

            case 'category':
              job.category = cellValue;
              break;

            case 'apply':
              const link = extractApplyLink(cellValue);
              if (link) job.applyLink = link;
              break;
          }
        }
      }

      // For cells not mapped, try smart detection
      const mappedIndices = new Set(Object.values(currentColumnMap));
      cells.forEach((cell, idx) => {
        if (!mappedIndices.has(idx) && cell) {
          const detected = detectCellType(cell, job);

          if (detected.type === 'apply' && job.applyLink === '#') {
            job.applyLink = detected.value;
          } else if (detected.type === 'level' && !job.level) {
            job.level = detected.value;
          } else if (detected.type === 'posted' && !job.posted) {
            job.posted = detected.value;
          } else if (detected.type === 'location' && !job.location) {
            job.location = detected.value;
          } else if (detected.type === 'category' && !job.category) {
            job.category = detected.value;
          }
        }
      });

      // Validate job has minimum required fields
      if (job.role && job.role.length > 2 && job.company && job.company.length > 1) {
        // Skip header-like rows
        if (job.role.toLowerCase().includes('role') && job.location.toLowerCase().includes('location')) {
          continue;
        }

        jobs.push(job);
      }
    }

    // Reset on section breaks
    if (line.startsWith('---') || (line.match(/^##\s/) && !line.match(/^#{3,4}\s/))) {
      inJobTable = false;
      if (!hasCompanyColumn) {
        currentCompany = '';
        currentEmoji = '🏢';
      }
      currentColumnMap = null;
    }

    // Reset on closing details tag
    if (line.includes('</details>')) {
      inJobTable = false;
      currentColumnMap = null;
    }
  }

  console.log(`✅ Smart parser found ${jobs.length} jobs`);

  // Fallback to alternative parser if no jobs found
  if (jobs.length === 0) {
    console.log('🔄 Trying fallback parser...');
    return parseJobsFallback(readmeContent);
  }

  return jobs;
};

// Fallback parser for edge cases
const parseJobsFallback = (readmeContent) => {
  const jobs = [];
  const lines = readmeContent.split('\n');

  // Find all table rows that look like job data
  const tableRowRegex = /^\|(.+)\|$/;

  let currentCompany = '';
  let currentEmoji = '🏢';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Check for company context
    const companyInfo = extractCompanyInfo(line);
    if (companyInfo) {
      currentCompany = companyInfo.company;
      currentEmoji = companyInfo.emoji;
      continue;
    }

    // Skip non-table rows
    if (!tableRowRegex.test(line)) continue;

    // Skip header and separator rows
    if (line.includes('---') || line.toLowerCase().includes('| role |')) continue;

    const cells = line.split('|').map(c => c.trim()).filter(c => c);
    if (cells.length < 3) continue;

    // Try to intelligently parse the row
    const job = {
      company: currentCompany || 'Unknown',
      emoji: currentEmoji,
      role: '',
      location: '',
      posted: 'Recently',
      level: 'Entry-Level',
      category: 'Software Engineering',
      applyLink: '#',
      isRemote: false,
      isUSOnly: false
    };

    // Find apply link first (most reliable anchor)
    let applyColIndex = -1;
    cells.forEach((cell, idx) => {
      const link = extractApplyLink(cell);
      if (link) {
        job.applyLink = link;
        applyColIndex = idx;
      }
    });

    // Process remaining cells
    let roleFound = false;
    cells.forEach((cell, idx) => {
      if (idx === applyColIndex) return;

      const detected = detectCellType(cell, job);

      // First substantial text cell is likely the role
      if (!roleFound && detected.type === 'unknown' && cell.length > 5) {
        // Check if it might be a company
        if (cell.includes('**')) {
          const compMatch = cell.match(/\*\*([^*]+)\*\*/);
          if (compMatch) {
            job.company = compMatch[1].trim();
            const emojiMatch = cell.match(/^([^\s*]+)/);
            if (emojiMatch && /[\u{1F300}-\u{1FAFF}]/u.test(emojiMatch[1])) {
              job.emoji = emojiMatch[1];
            }
          }
        } else {
          job.role = cell.replace(/🏠|🇺🇸/g, '').trim();
          if (cell.includes('🏠')) job.isRemote = true;
          if (cell.includes('🇺🇸')) job.isUSOnly = true;
          roleFound = true;
        }
      } else if (detected.type === 'location' && !job.location) {
        job.location = detected.value;
        if (detected.value.toLowerCase().includes('remote')) job.isRemote = true;
      } else if (detected.type === 'posted') {
        job.posted = detected.value;
      } else if (detected.type === 'level') {
        job.level = detected.value;
      } else if (detected.type === 'category') {
        job.category = detected.value;
      }
    });

    // Validate
    if (job.role && job.role.length > 2 && job.company && job.company !== 'Unknown') {
      jobs.push(job);
    }
  }

  console.log(`🔄 Fallback parser found ${jobs.length} jobs`);
  return jobs;
};

// Utility function to clean and validate jobs
export const validateAndCleanJobs = (jobs) => {
  console.log('🧹 Cleaning and validating jobs...');
  console.log('📊 Raw job companies found:', [...new Set(jobs.map(job => job.company))]);

  const cleanedJobs = jobs.filter(job => {
    // Remove invalid jobs
    if (!job.role || !job.company) return false;
    if (job.role.length < 2) return false;
    if (job.company.length < 2) return false;
    if (job.role.toLowerCase().includes('no current openings')) return false;
    if (job.company.toLowerCase().includes('more companies')) return false;
    if (job.company.toLowerCase().includes('archived')) return false;
    if (job.company.includes('<') || job.company.includes('>')) return false;
    if (job.company.toLowerCase().includes('strong')) return false;
    if (job.company.toLowerCase().includes('summary')) return false;
    if (job.company.toLowerCase().includes('details')) return false;
    if (/^[<>&"'\s]*$/.test(job.company)) return false;

    // Detect misaligned columns
    const locationLower = (job.location || '').toLowerCase();
    const suspiciousLocationKeywords = ['engineer', 'developer', 'manager', 'intern', 'analyst', 'scientist', 'designer', 'architect', 'specialist'];
    const isMisaligned = suspiciousLocationKeywords.some(keyword => locationLower.includes(keyword));

    if (isMisaligned) {
      console.log(`⚠️ Skipping misaligned job: ${job.company} - ${job.role}`);
      return false;
    }

    return true;
  }).map(job => ({
    ...job,
    // Normalize data
    company: job.company
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/\*\*/g, '')
      .replace(/\s+/g, ' ')
      .trim(),
    role: job.role
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim(),
    emoji: job.emoji && /[\u{1F300}-\u{1FAFF}]/u.test(job.emoji) ? job.emoji : '🏢',
    location: job.location || 'Not specified',
    posted: job.posted || 'Recently',
    level: mapToExperienceLevel(job.level),
    category: job.category || 'Software Engineering',
    applyLink: job.applyLink || '#'
  }));

  // Remove duplicates
  const uniqueJobs = [];
  const seen = new Set();

  for (const job of cleanedJobs) {
    const key = `${job.company.toLowerCase()}|${job.role.toLowerCase()}|${job.location.toLowerCase()}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueJobs.push(job);
    }
  }

  console.log('✅ Final cleaned companies:', [...new Set(uniqueJobs.map(job => job.company))]);
  console.log(`📈 Jobs: ${jobs.length} → ${cleanedJobs.length} after cleaning → ${uniqueJobs.length} after deduplication`);

  return uniqueJobs;
};
