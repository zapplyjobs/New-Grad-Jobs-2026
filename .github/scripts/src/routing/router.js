#!/usr/bin/env node

/**
 * Enhanced Channel Router v3
 *
 * HIERARCHICAL ROUTING SYSTEM (Title-First Approach)
 *
 * Priority 1 (HIGHEST): Explicit Tech Title Detection
 *   - Checks job title for tech keywords
 *   - Prevents industry keywords in description from overriding tech roles
 *   - Covers: software, data, ML/AI, engineering, analytics, etc.
 *
 * Priority 2 (HIGH): Explicit Non-Tech Title Detection
 *   - Checks job title for specific role keywords
 *   - Only for unambiguous roles (Sales Manager, Marketing Director, etc.)
 *
 * Priority 3 (MEDIUM): Description Keyword Matching
 *   - Falls back to existing pattern matching
 *   - Only reached if title is ambiguous (Coordinator, Associate, etc.)
 *
 * Priority 4 (LOWEST): Default Fallback
 *   - Defaults to TECH (largest category, 76% of jobs)
 *
 * Created: 2025-11-17
 * Based on analysis of 539 real job titles showing 76% are tech roles
 */

/**
 * Check if job title indicates a tech role
 * @param {string} title - Job title (lowercase)
 * @returns {Object|null} Match details or null
 */
function isTechRole(title) {
  // Comprehensive tech keyword detection
  const techPatterns = [
    // Software engineering
    { regex: /\b(software|developer|programmer|coder|coding)\b/, keyword: 'software' },

    // Data & Analytics (CRITICAL - was causing misrouting to sales/supply-chain)
    { regex: /\b(data|database|sql|nosql)\b/, keyword: 'data' },
    { regex: /\b(data scien(ce|tist)|data engineer|data analyst)\b/, keyword: 'data science' },
    // Analytics/Analyst - BUT exclude Financial Analyst, Business Analyst (those are ambiguous)
    { regex: /\b(analytics|web analyst|marketing analyst|product analyst|business intelligence|bi)\b/, keyword: 'analytics' },

    // Machine Learning & AI (CRITICAL - was routing to supply-chain)
    { regex: /\b(machine learning|ml|artificial intelligence|ai|deep learning)\b/, keyword: 'machine learning' },
    { regex: /\b(computer vision|nlp|natural language)\b/, keyword: 'AI/ML' },

    // Specific engineer types (tech-specific only)
    { regex: /\b(backend|frontend|full[- ]?stack) engineer\b/, keyword: 'web engineer' },
    { regex: /\b(devops|sre|site reliability|cloud) engineer\b/, keyword: 'DevOps/SRE' },
    { regex: /\b(qa|quality assurance|test|testing) engineer\b/, keyword: 'QA engineer' },
    { regex: /\b(ml|machine learning|ai) engineer\b/, keyword: 'ML engineer' },
    { regex: /\b(data|database|platform) engineer\b/, keyword: 'data engineer' },

    // Generic "engineer" and "engineering" ONLY if NOT preceded by non-tech context
    // Excludes: Sales Engineer, Manufacturing Engineer, Biomedical Engineer, etc.
    // Includes: Systems Engineering, Software Engineering, Hardware Engineering
    { regex: /\b(engineer|engineering)\b/i, keyword: 'engineer/engineering',
      validate: (title) => !/(sales|manufacturing|biomedical|industrial|mechanical|civil|chemical|process)\s+(engineer|engineering)/i.test(title) },

    // Tech specializations
    { regex: /\b(web|mobile|ios|android|react|angular|vue)\b/, keyword: 'web/mobile dev' },
    { regex: /\b(cloud|aws|azure|gcp|kubernetes|docker)\b/, keyword: 'cloud' },
    { regex: /\b(security|cybersecurity|infosec|appsec)\b/, keyword: 'security' },

    // Programming languages (strong tech indicator)
    { regex: /\b(python|java|javascript|typescript|c\+\+|golang|rust|ruby)\b/, keyword: 'programming' }
  ];

  for (const pattern of techPatterns) {
    const match = title.match(pattern.regex);
    if (match) {
      // If pattern has a validate function, use it for additional checking
      if (pattern.validate && !pattern.validate(title)) {
        continue; // Skip this pattern, validation failed
      }

      return {
        matched: true,
        keyword: pattern.keyword,
        matchedText: match[0]
      };
    }
  }

  return null;
}

/**
 * Check if job title indicates a non-tech role
 * Only checks for EXPLICIT, UNAMBIGUOUS role titles
 * @param {string} title - Job title (lowercase)
 * @returns {Object|null} { category, keyword, matchedText } or null
 */
function isNonTechRole(title) {
  const nonTechPatterns = [
    // REMOVED: sales, marketing, healthcare, supply-chain, hr (archived channels)
    // These will now fall back to 'tech' as the default

    // Finance (explicit titles only)
    {
      category: 'finance',
      regex: /\b(financial analyst|accountant|controller|treasury|audit|tax (analyst|specialist)|investment (analyst|banker))\b/,
      keyword: 'finance'
    },

    // Product Management (consolidated into tech)
    {
      category: 'tech',
      regex: /\b(product manager|product owner|product lead)\b/,
      keyword: 'product'
    },

    // Project Management (consolidated into tech)
    {
      category: 'tech',
      regex: /\b(project manager|program manager|scrum master|agile coach)\b/,
      keyword: 'project-management'
    }
  ];

  for (const pattern of nonTechPatterns) {
    const match = title.match(pattern.regex);
    if (match) {
      return {
        category: pattern.category,
        keyword: pattern.keyword,
        matchedText: match[0]
      };
    }
  }

  return null;
}

/**
 * Check if job is AI/ML specific
 * @param {string} title - Job title (lowercase)
 * @param {string} description - Job description (lowercase)
 * @returns {Object|null} Match details or null
 */
function isAIRole(title, description) {
  const aiPatterns = [
    { regex: /\b(machine learning|ml engineer|deep learning)\b/, keyword: 'machine learning' },
    { regex: /\b(artificial intelligence|ai\s+(engineer|researcher|intern|analyst|developer|specialist|associate))\b/, keyword: 'artificial intelligence' },
    { regex: /\b(computer vision|nlp|natural language)\b/, keyword: 'AI specialization' },
    { regex: /\b(neural network|generative ai|large language model|llm)\b/, keyword: 'AI/ML' }
  ];

  const combined = `${title} ${description}`;

  for (const pattern of aiPatterns) {
    const match = combined.match(pattern.regex);
    if (match) {
      return {
        matched: true,
        keyword: pattern.keyword,
        matchedText: match[0]
      };
    }
  }

  return null;
}

/**
 * Check if job is Data Science specific
 * @param {string} title - Job title (lowercase)
 * @param {string} description - Job description (lowercase)
 * @returns {Object|null} Match details or null
 */
function isDataScienceRole(title, description) {
  const dsPatterns = [
    { regex: /\b(data scien(ce|tist))\b/, keyword: 'data science' },
    { regex: /\b(data analyst|business intelligence|bi analyst)\b/, keyword: 'data analytics' },
    { regex: /\b(data engineer(?!ing\s+(?:sales|manufacturing)))\b/, keyword: 'data engineering' },
    { regex: /\b(analytics engineer|data insights)\b/, keyword: 'analytics' }
  ];

  const combined = `${title} ${description}`;

  for (const pattern of dsPatterns) {
    const match = combined.match(pattern.regex);
    if (match) {
      return {
        matched: true,
        keyword: pattern.keyword,
        matchedText: match[0]
      };
    }
  }

  return null;
}

/**
 * Get detailed job channel routing information (v3 - Hierarchical with AI/DS)
 * @param {Object} job - Job object
 * @param {Object} CHANNEL_CONFIG - Channel configuration object
 * @returns {Object} { channelId, category, matchedKeyword, matchType, priority }
 */
function getJobChannelDetails(job, CHANNEL_CONFIG) {
  const title = (job.job_title || '').toLowerCase();
  const description = (job.job_description || '').toLowerCase();

  // ============================================================================
  // PRIORITY 0 (CRITICAL): AI/ML Roles (if AI channel configured)
  // ============================================================================
  if (CHANNEL_CONFIG.ai) {
    const aiMatch = isAIRole(title, description);
    if (aiMatch) {
      return {
        channelId: CHANNEL_CONFIG.ai,
        category: 'ai',
        matchedKeyword: aiMatch.keyword,
        matchType: 'ai-specialized',
        priority: 'CRITICAL',
        matchedText: aiMatch.matchedText,
        source: title.includes(aiMatch.matchedText) ? 'title' : 'description'
      };
    }
  }

  // ============================================================================
  // PRIORITY 0.5 (CRITICAL): Data Science Roles (if DS channel configured)
  // ============================================================================
  if (CHANNEL_CONFIG['data-science']) {
    const dsMatch = isDataScienceRole(title, description);
    if (dsMatch) {
      return {
        channelId: CHANNEL_CONFIG['data-science'],
        category: 'data-science',
        matchedKeyword: dsMatch.keyword,
        matchType: 'data-science-specialized',
        priority: 'CRITICAL',
        matchedText: dsMatch.matchedText,
        source: title.includes(dsMatch.matchedText) ? 'title' : 'description'
      };
    }
  }

  // ============================================================================
  // PRIORITY 1 (HIGHEST): Tech Title Detection (other tech roles)
  // ============================================================================
  const techMatch = isTechRole(title);
  if (techMatch) {
    return {
      channelId: CHANNEL_CONFIG.tech,
      category: 'tech',
      matchedKeyword: techMatch.keyword,
      matchType: 'title-tech-explicit',
      priority: 'HIGHEST',
      matchedText: techMatch.matchedText,
      source: 'title'
    };
  }

  // ============================================================================
  // PRIORITY 2 (HIGH): Non-Tech Explicit Title Detection
  // ============================================================================
  const nonTechMatch = isNonTechRole(title);
  if (nonTechMatch) {
    return {
      channelId: CHANNEL_CONFIG[nonTechMatch.category],
      category: nonTechMatch.category,
      matchedKeyword: nonTechMatch.keyword,
      matchType: 'title-explicit',
      priority: 'HIGH',
      matchedText: nonTechMatch.matchedText,
      source: 'title'
    };
  }

  // ============================================================================
  // PRIORITY 3 (MEDIUM): Description Keyword Matching
  // (Only reached if title is ambiguous: Coordinator, Associate, Intern, etc.)
  // ============================================================================
  const combined = `${title} ${description}`;

  const descriptionPatterns = [
    // REMOVED: sales, marketing, healthcare, supply-chain, hr (archived channels)
    // These will now fall back to 'tech' as the default
    {
      category: 'finance',
      channelId: CHANNEL_CONFIG.finance,
      regex: /\b(finance|accounting|financial analyst|controller|treasury|audit|tax|bookkeep|cfo|actuarial|investment|banker)\b/,
      keywords: ['finance', 'accounting', 'financial analyst', 'controller', 'treasury', 'audit', 'tax', 'bookkeep', 'cfo', 'actuarial', 'investment', 'banker']
    },
    {
      category: 'tech', // Product roles consolidated into tech
      channelId: CHANNEL_CONFIG.tech,
      regex: /\b(product manager|product owner|product marketing|(\bpm\b)|product lead|product strategy|product analyst)\b/,
      keywords: ['product manager', 'product owner', 'product marketing', 'pm', 'product lead', 'product strategy', 'product analyst']
    },
    {
      category: 'tech', // Project management roles consolidated into tech
      channelId: CHANNEL_CONFIG.tech,
      regex: /\b(project manager|program manager|scrum master|agile coach|pmo|project coordinator|delivery manager)\b/,
      keywords: ['project manager', 'program manager', 'scrum master', 'agile coach', 'pmo', 'project coordinator', 'delivery manager']
    }
  ];

  // Check description patterns
  for (const pattern of descriptionPatterns) {
    const match = combined.match(pattern.regex);
    if (match) {
      // Find which specific keyword was matched
      const matchedKeyword = pattern.keywords.find(keyword =>
        combined.includes(keyword.toLowerCase())
      ) || match[1];

      // Determine if match was in title or description
      const inTitle = title.match(pattern.regex);
      const source = inTitle ? 'title' : 'description';

      return {
        channelId: pattern.channelId,
        category: pattern.category,
        matchedKeyword: matchedKeyword,
        matchType: 'description-keyword',
        priority: 'MEDIUM',
        matchedPattern: pattern.regex.source,
        source: source
      };
    }
  }

  // ============================================================================
  // PRIORITY 4 (LOWEST): Default Fallback to TECH
  // (76% of jobs are tech, safest default)
  // ============================================================================
  return {
    channelId: CHANNEL_CONFIG.tech,
    category: 'tech',
    matchedKeyword: null,
    matchType: 'default-fallback',
    priority: 'LOWEST',
    source: 'default'
  };
}

/**
 * Backwards compatible wrapper (returns only channel ID)
 * @param {Object} job - Job object
 * @param {Object} CHANNEL_CONFIG - Channel configuration object
 * @returns {string} Channel ID
 */
function getJobChannel(job, CHANNEL_CONFIG) {
  return getJobChannelDetails(job, CHANNEL_CONFIG).channelId;
}

module.exports = {
  getJobChannelDetails,
  getJobChannel,
  // Export helper functions for testing
  isTechRole,
  isNonTechRole,
  isAIRole,
  isDataScienceRole
};
