// src/utility/parseJobs.js

// ============================================================================
// README PARSER - Handles the specific format from readme-generator.js
// ============================================================================
//
// The README has TWO table formats:
//
// FORMAT 1 - Big companies (>10 jobs): Company header + 5-column table
//   #### 🏢 **CompanyName** (X positions)
//   | Role | Location | Posted | Level | Apply |
//   | Software Engineer 🏠 | San Jose, CA | 2d | ![Entry](...) | [<img...>](url) |
//
// FORMAT 2 - Small companies (≤10 jobs): Combined 6-column table
//   | Company | Role | Location | Posted | Level | Apply |
//   | 🏢 **Google** | Software Engineer | NYC, NY | 1d | ![Mid](...) | [<img...>](url) |
//

// Extract apply link from cell (handles img button format)
const extractApplyLink = (cell) => {
  if (!cell) return null;

  // Pattern: [<img src="images/apply.png" width="75" alt="Apply">](https://...)
  const imgLinkMatch = cell.match(/\[<img[^>]*>\]\(([^)]+)\)/);
  if (imgLinkMatch) return imgLinkMatch[1];

  // Pattern: [text](url)
  const simpleLinkMatch = cell.match(/\[.*?\]\(([^)]+)\)/);
  if (simpleLinkMatch) return simpleLinkMatch[1];

  return null;
};

// Extract level from shields.io badge or text
const extractLevel = (cell) => {
  if (!cell) return 'Entry-Level';

  const lower = cell.toLowerCase();

  // Check for shields.io badges: ![Entry](https://img.shields.io/badge/-Entry-...)
  if (lower.includes('badge/-entry') || lower.includes('![entry]')) return 'Entry-Level';
  if (lower.includes('badge/-mid') || lower.includes('![mid]')) return 'Mid-Level';
  if (lower.includes('badge/-senior') || lower.includes('![senior]')) return 'Senior';

  // Text-based
  if (lower.includes('entry') || lower.includes('junior') || lower.includes('new grad')) return 'Entry-Level';
  if (lower.includes('mid') || lower.includes('intermediate')) return 'Mid-Level';
  if (lower.includes('senior') || lower.includes('lead') || lower.includes('principal')) return 'Senior';
  if (lower.includes('intern')) return 'Internship';

  return 'Entry-Level';
};

// Extract company name and emoji from cell like "🏢 **Google**"
const extractCompanyFromCell = (cell) => {
  if (!cell) return { company: 'Unknown', emoji: '🏢' };

  // Pattern: 🏢 **CompanyName**
  const match = cell.match(/^([^\s*]+)\s*\*\*([^*]+)\*\*/);
  if (match) {
    return {
      emoji: match[1].trim(),
      company: match[2].trim()
    };
  }

  // Pattern: **CompanyName** (no emoji)
  const noEmojiMatch = cell.match(/\*\*([^*]+)\*\*/);
  if (noEmojiMatch) {
    return {
      emoji: '🏢',
      company: noEmojiMatch[1].trim()
    };
  }

  // Plain text
  return {
    emoji: '🏢',
    company: cell.replace(/[*_]/g, '').trim()
  };
};

// Extract company from header line like "#### 🏢 **CompanyName** (X positions)"
const extractCompanyFromHeader = (line) => {
  // Pattern 1: #### 🏢 **CompanyName** (X positions)
  const match1 = line.match(/^####\s*([^\s*]+)\s*\*\*([^*]+)\*\*/);
  if (match1) {
    return {
      emoji: match1[1].trim(),
      company: match1[2].trim().replace(/\([^)]*\)$/, '').trim()
    };
  }

  // Pattern 2: <summary><h4>🏢 <strong>CompanyName</strong>
  const match2 = line.match(/<summary><h4>([^\s<]+)\s*<strong>([^<]+)<\/strong>/);
  if (match2) {
    return {
      emoji: match2[1].trim(),
      company: match2[2].trim().replace(/\([^)]*\)$/, '').trim()
    };
  }

  return null;
};

// Check if line is a table header
const isTableHeader = (line) => {
  const lower = line.toLowerCase();
  return line.startsWith('|') && (
    (lower.includes('| role |') || lower.includes('|role|')) ||
    (lower.includes('| company |') || lower.includes('|company|'))
  );
};

// Check if line is a table separator
const isTableSeparator = (line) => {
  return line.includes('|---') || line.includes('| ---');
};

// Parse a table row into cells
const parseTableRow = (line) => {
  return line.split('|')
    .map(cell => cell.trim())
    .filter(cell => cell && !cell.match(/^-+$/));
};

// Main parsing function
export const parseJobsFromReadme = (readmeContent) => {
  const jobs = [];
  const lines = readmeContent.split('\n');

  let currentCompany = '';
  let currentEmoji = '🏢';
  let tableFormat = null; // 'with-company' (6 cols) or 'no-company' (5 cols)
  let inTable = false;

  console.log('🔍 Parsing README...');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip empty lines
    if (!line) continue;

    // Check for company headers (resets context for company-specific tables)
    const companyHeader = extractCompanyFromHeader(line);
    if (companyHeader) {
      currentCompany = companyHeader.company;
      currentEmoji = companyHeader.emoji;
      tableFormat = null;
      inTable = false;
      continue;
    }

    // Check for section headers (### headers) - these are NOT company headers
    if (line.match(/^###\s+[^#]/) && !line.match(/^####/)) {
      // Section header - keep current company context but reset table
      tableFormat = null;
      inTable = false;
      continue;
    }

    // Detect table header and format
    if (isTableHeader(line)) {
      const cells = parseTableRow(line);
      const lowerCells = cells.map(c => c.toLowerCase());

      if (lowerCells.includes('company')) {
        tableFormat = 'with-company';
        // Reset company since each row has its own
        currentCompany = '';
        currentEmoji = '🏢';
      } else if (lowerCells.includes('role')) {
        tableFormat = 'no-company';
        // Company comes from header above
      }

      inTable = true;
      console.log(`📊 Found ${tableFormat} table format`);
      continue;
    }

    // Skip separator rows
    if (isTableSeparator(line)) continue;

    // Parse data rows
    if (inTable && line.startsWith('|') && tableFormat) {
      const cells = parseTableRow(line);

      // Skip if too few cells
      if (cells.length < 4) continue;

      let job = {
        company: currentCompany,
        emoji: currentEmoji,
        role: '',
        location: '',
        posted: '',
        level: 'Entry-Level',
        category: 'Software Engineering',
        applyLink: '#',
        isRemote: false,
        isUSOnly: false
      };

      if (tableFormat === 'with-company') {
        // Format: | Company | Role | Location | Posted | Level | Apply |
        // Indices:    0        1       2         3        4       5
        if (cells.length >= 6) {
          const companyInfo = extractCompanyFromCell(cells[0]);
          job.company = companyInfo.company;
          job.emoji = companyInfo.emoji;
          job.role = cells[1];
          job.location = cells[2];
          job.posted = cells[3];
          job.level = extractLevel(cells[4]);
          job.applyLink = extractApplyLink(cells[5]) || '#';
        }
      } else if (tableFormat === 'no-company') {
        // Format: | Role | Location | Posted | Level | Apply |
        // Indices:    0       1         2        3       4
        if (cells.length >= 5) {
          job.role = cells[0];
          job.location = cells[1];
          job.posted = cells[2];
          job.level = extractLevel(cells[3]);
          job.applyLink = extractApplyLink(cells[4]) || '#';
        }
      }

      // Extract remote/US-only indicators from role
      if (job.role) {
        if (job.role.includes('🏠')) {
          job.isRemote = true;
          job.role = job.role.replace(/🏠/g, '').trim();
        }
        if (job.role.includes('🇺🇸')) {
          job.isUSOnly = true;
          job.role = job.role.replace(/🇺🇸/g, '').trim();
        }
      }

      // Also check location for remote
      if (job.location && job.location.toLowerCase().includes('remote')) {
        job.isRemote = true;
      }

      // Validate and add job
      if (job.role && job.role.length > 2 && job.company && job.company.length > 1) {
        // Skip header-like rows
        const roleLower = job.role.toLowerCase();
        if (roleLower === 'role' || roleLower.includes('no current')) {
          continue;
        }

        jobs.push(job);
      }
    }

    // Reset on major section breaks
    if (line.startsWith('---') || line.match(/^##\s+[^#]/)) {
      inTable = false;
      tableFormat = null;
    }

    // Reset on closing details tag
    if (line.includes('</details>')) {
      inTable = false;
      tableFormat = null;
    }
  }

  console.log(`✅ Parser found ${jobs.length} jobs`);

  return jobs;
};

// Clean and validate jobs
export const validateAndCleanJobs = (jobs) => {
  console.log('🧹 Cleaning jobs...');

  const cleanedJobs = jobs.filter(job => {
    // Basic validation
    if (!job.role || !job.company) return false;
    if (job.role.length < 3) return false;
    if (job.company.length < 2) return false;

    // Skip invalid entries
    if (job.company.toLowerCase().includes('archived')) return false;
    if (job.company.includes('<') || job.company.includes('>')) return false;
    if (job.role.toLowerCase().includes('check back')) return false;

    return true;
  }).map(job => ({
    ...job,
    // Clean up text
    company: job.company.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim(),
    role: job.role.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim(),
    location: job.location || 'USA',
    posted: job.posted || 'Recently',
    emoji: job.emoji || '🏢'
  }));

  // Remove duplicates
  const seen = new Set();
  const uniqueJobs = cleanedJobs.filter(job => {
    const key = `${job.company.toLowerCase()}|${job.role.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  console.log(`📈 ${jobs.length} → ${uniqueJobs.length} jobs after cleaning`);

  return uniqueJobs;
};
