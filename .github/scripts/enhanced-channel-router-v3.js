#!/usr/bin/env node

/**
 * Enhanced Channel Router v3 - Data-Driven Improvement
 *
 * KEY IMPROVEMENTS based on pattern analysis:
 * 1. Explicit tech-first priority (addresses management concern)
 * 2. Negative lookaheads to prevent keyword contamination
 * 3. Data science/ML/AI explicitly categorized as TECH
 * 4. Stronger validation for non-tech categories
 *
 * TARGET: 90%+ accuracy for tech job board
 *
 * Created: 2025-11-20
 * Based on: Analysis of misclassification patterns from management feedback
 */

/**
 * TECH-FIRST ROUTING - Priority 1 (Highest)
 * Any tech indicators in title = IMMEDIATE tech categorization
 * This prevents description contamination from overriding clear tech roles
 */
function isExplicitTechRole(title) {
  // Comprehensive tech keyword detection - ALL variations route to TECH
  const techPatterns = [
    // Software Engineering (highest confidence)
    { regex: /\bsoftware engineer\b/i, confidence: 100 },
    { regex: /\bsoftware developer\b/i, confidence: 100 },
    { regex: /\bsoftware programmer\b/i, confidence: 100 },
    { regex: /\bbackend engineer\b/i, confidence: 100 },
    { regex: /\bfrontend engineer\b/i, confidence: 100 },
    { regex: /\bfull[-]?stack engineer\b/i, confidence: 100 },
    { regex: /\bfull[-]?stack developer\b/i, confidence: 100 },
    { regex: /\bweb developer\b/i, confidence: 100 },
    { regex: /\bweb engineer\b/i, confidence: 100 },

    // Data & Analytics (CRITICAL - was leaking to sales/marketing)
    { regex: /\bdata scientist\b/i, confidence: 100 },
    { regex: /\bdata engineer\b/i, confidence: 100 },
    { regex: /\bdata analyst\b/i, confidence: 100 },
    { regex: /\bbusiness intelligence engineer\b/i, confidence: 100 },
    { regex: /\bproduct analytics engineer\b/i, confidence: 100 },
    { regex: /\bmarketing data analyst\b/i, confidence: 100 },
    { regex: /\bsales data analyst\b/i, confidence: 100 },

    // Machine Learning & AI (CRITICAL - was leaking to marketing)
    { regex: /\bmachine learning engineer\b/i, confidence: 100 },
    { regex: /\bai engineer\b/i, confidence: 100 },
    { regex: /\bai researcher\b/i, confidence: 100 },
    { regex: /\bml engineer\b/i, confidence: 100 },
    { regex: /\bdeep learning engineer\b/i, confidence: 100 },
    { regex: /\bcomputer vision engineer\b/i, confidence: 100 },
    { regex: /\bnlp engineer\b/i, confidence: 100 },

    // Platform & Infrastructure (CRITICAL - was leaking to supply-chain)
    { regex: /\bplatform engineer\b/i, confidence: 100 },
    { regex: /\bcloud engineer\b/i, confidence: 100 },
    { regex: /\bdevops engineer\b/i, confidence: 100 },
    { regex: /\bsre\b/i, confidence: 100 },
    { regex: /\bsite reliability engineer\b/i, confidence: 100 },
    { regex: /\binfrastructure engineer\b/i, confidence: 100 },

    // QA & Testing (unambiguous tech roles)
    { regex: /\bqa engineer\b/i, confidence: 100 },
    { regex: /\bquality assurance engineer\b/i, confidence: 100 },
    { regex: /\btest engineer\b/i, confidence: 100 },
    { regex: /\bsoftware test engineer\b/i, confidence: 100 },
    { regex: /\bautomation engineer\b/i, confidence: 100 },

    // Security (unambiguous tech roles)
    { regex: /\bsecurity engineer\b/i, confidence: 100 },
    { regex: /\bcybersecurity engineer\b/i, confidence: 100 },
    { regex: /\bapplication security engineer\b/i, confidence: 100 },
    { regex: /\binfosec engineer\b/i, confidence: 100 },

    // Generic Engineer (but with exclusions for non-tech)
    { regex: /\bengineer\b/i,
      confidence: 90,
      validate: (title) => {
        // EXCLUDE non-tech engineering roles with negative lookahead
        const nonTechEngineerPatterns = [
          /sales engineer/i,
          /manufacturing engineer/i,
          /mechanical engineer/i,
          /civil engineer/i,
          /chemical engineer/i,
          /industrial engineer/i,
          /biomedical engineer/i,
          /process engineer/i,
          /electrical engineer/i,  // Could be tech, but often hardware
          /hardware engineer/i,
          /network engineer/i    // Could be tech, but often infrastructure
        ];

        return !nonTechEngineerPatterns.some(pattern => pattern.test(title));
      }
    },

    // Mobile Development
    { regex: /\bmobile developer\b/i, confidence: 100 },
    { regex: /\bios developer\b/i, confidence: 100 },
    { regex: /\bandroid developer\b/i, confidence: 100 },

    // Programming Languages (strong tech indicators)
    { regex: /\bpython developer\b/i, confidence: 100 },
    { regex: /\bjava developer\b/i, confidence: 100 },
    { regex: /\bjavascript developer\b/i, confidence: 100 },
    { regex: /\breact developer\b/i, confidence: 100 },
    { regex: /\bnode\.?js developer\b/i, confidence: 100 },

    // General Tech Terms
    { regex: /\bdeveloper\b/i, confidence: 80 },
    { regex: /\bprogrammer\b/i, confidence: 80 },
    { regex: /\bcoder\b/i, confidence: 80 },

    // Technical Leadership
    { regex: /\btech lead\b/i, confidence: 100 },
    { regex: /\bengineering manager\b/i, confidence: 100 },
    { regex: /\bprincipal engineer\b/i, confidence: 100 },
    { regex: /\bstaff engineer\b/i, confidence: 100 }
  ];

  for (const pattern of techPatterns) {
    const match = title.match(pattern.regex);
    if (match) {
      // If pattern has validation function, use it
      if (pattern.validate && !pattern.validate(title)) {
        continue; // Skip this pattern, validation failed
      }

      return {
        category: 'tech',
        confidence: pattern.confidence,
        source: 'title-tech-explicit',
        keyword: match[0],
        reason: 'Explicit tech role detected'
      };
    }
  }

  return null;
}

/**
 * NON-TECH EXPLICIT ROLES - Priority 2 (High)
 * Only categorize as non-tech if VERY clear and unambiguous
 */
function isExplicitNonTechRole(title) {
  const nonTechPatterns = [
    // Sales (very explicit only)
    {
      category: 'sales',
      regex: /\bsales (manager|director|executive|representative|rep|associate)\b/i,
      confidence: 90,
      validate: (title) => !/\b(data|analytics|intelligence)\b/i.test(title)
    },
    {
      category: 'sales',
      regex: /\baccount executive\b/i,
      confidence: 90
    },
    {
      category: 'sales',
      regex: /\bbdr\b|\bsdr\b/i,
      confidence: 90
    },

    // Marketing (very explicit only)
    {
      category: 'marketing',
      regex: /\bmarketing (manager|director|coordinator|specialist)\b/i,
      confidence: 90,
      validate: (title) => !/\b(data|analytics|product)\b/i.test(title)
    },
    {
      category: 'marketing',
      regex: /\bgrowth (manager|marketer)\b/i,
      confidence: 90
    },

    // Finance (very explicit only)
    {
      category: 'finance',
      regex: /\bfinancial analyst\b/i,
      confidence: 90
    },
    {
      category: 'finance',
      regex: /\baccountant\b/i,
      confidence: 90
    },
    {
      category: 'finance',
      regex: /\bcontroller\b/i,
      confidence: 90
    },

    // Healthcare (very explicit only)
    {
      category: 'healthcare',
      regex: /\b(registered nurse|rn)\b/i,
      confidence: 90
    },
    {
      category: 'healthcare',
      regex: /\b(doctor|physician)\b/i,
      confidence: 90
    },
    {
      category: 'healthcare',
      regex: /\bnurse (practitioner|assistant)\b/i,
      confidence: 90
    },

    // Product Management
    {
      category: 'product',
      regex: /\bproduct manager\b/i,
      confidence: 95
    },
    {
      category: 'product',
      regex: /\bproduct owner\b/i,
      confidence: 95
    },

    // Project Management
    {
      category: 'project-management',
      regex: /\bproject manager\b/i,
      confidence: 90
    },
    {
      category: 'project-management',
      regex: /\bprogram manager\b/i,
      confidence: 90
    },

    // HR (very explicit only)
    {
      category: 'hr',
      regex: /\bhr (manager|specialist|coordinator)\b/i,
      confidence: 90
    },
    {
      category: 'hr',
      regex: /\brecruiter\b/i,
      confidence: 90
    },
    {
      category: 'hr',
      regex: /\btalent acquisition\b/i,
      confidence: 90
    },

    // Supply Chain (very explicit only)
    {
      category: 'supply-chain',
      regex: /\bsupply chain (manager|analyst)\b/i,
      confidence: 90
    },
    {
      category: 'supply-chain',
      regex: /\blogistics (manager|coordinator)\b/i,
      confidence: 90
    }
  ];

  for (const pattern of nonTechPatterns) {
    const match = title.match(pattern.regex);
    if (match) {
      // If pattern has validation function, use it
      if (pattern.validate && !pattern.validate(title)) {
        continue; // Skip this pattern, validation failed
      }

      return {
        category: pattern.category,
        confidence: pattern.confidence,
        source: 'title-non-tech-explicit',
        keyword: match[0],
        reason: 'Explicit non-tech role detected'
      };
    }
  }

  return null;
}

/**
 * Get enhanced job channel routing (v3 - Data-Driven)
 * @param {Object} job - Job object
 * @param {Object} CHANNEL_CONFIG - Channel configuration object
 * @returns {Object} { categoryId, category, confidence, details }
 */
function getEnhancedJobChannelDetails(job, CHANNEL_CONFIG) {
  const title = (job.job_title || '').toLowerCase();
  const description = (job.job_description || '').toLowerCase();

  // ============================================================================
  // PRIORITY 1 (HIGHEST): Explicit Tech Roles - ZERO tolerance for overrides
  // ============================================================================
  const techMatch = isExplicitTechRole(title);
  if (techMatch) {
    return {
      channelId: CHANNEL_CONFIG.tech,
      category: 'tech',
      channelName: '💻・tech-jobs',
      confidence: techMatch.confidence,
      source: 'title-tech-explicit',
      keyword: techMatch.keyword,
      reason: techMatch.reason,
      details: `Tech role detected: ${techMatch.keyword}`
    };
  }

  // ============================================================================
  // PRIORITY 2 (HIGH): Explicit Non-Tech Roles (only unambiguous)
  // ============================================================================
  const nonTechMatch = isExplicitNonTechRole(title);
  if (nonTechMatch) {
    return {
      channelId: CHANNEL_CONFIG[nonTechMatch.category],
      category: nonTechMatch.category,
      channelName: getChannelName(nonTechMatch.category),
      confidence: nonTechMatch.confidence,
      source: 'title-non-tech-explicit',
      keyword: nonTechMatch.keyword,
      reason: nonTechMatch.reason,
      details: `Non-tech role detected: ${nonTechMatch.keyword}`
    };
  }

  // ============================================================================
  // PRIORITY 3 (MEDIUM): Ambiguous Titles - Limited Description Matching
  // Only reached for truly ambiguous titles (Analyst, Associate, Coordinator, etc.)
  // ============================================================================

  // Check if title is ambiguous (requires description matching)
  const ambiguousTitlePatterns = [
    /\b(analyst|associate|coordinator|specialist|assistant)\b/i,
    /\bintern(ship)?\b/i,
    /\bgraduate\b/i,
    /\btrainee\b/i
  ];

  const isAmbiguousTitle = ambiguousTitlePatterns.some(pattern => pattern.test(title));

  if (isAmbiguousTitle) {
    // For ambiguous titles, use limited description matching with strict validation
    const descriptionResult = checkDescriptionWithContext(title, description);
    if (descriptionResult) {
      return {
        channelId: CHANNEL_CONFIG[descriptionResult.category],
        category: descriptionResult.category,
        channelName: getChannelName(descriptionResult.category),
        confidence: 60, // Lower confidence for description-based routing
        source: 'description-context-aware',
        keyword: descriptionResult.keyword,
        reason: descriptionResult.reason,
        details: `Ambiguous title resolved by context: ${descriptionResult.keyword}`
      };
    }
  }

  // ============================================================================
  // PRIORITY 4 (LOWEST): Default Fallback
  // For a tech job board, default to tech but with low confidence
  // ============================================================================
  return {
    channelId: CHANNEL_CONFIG.tech,
    category: 'tech',
    channelName: '💻・tech-jobs',
    confidence: 30,
    source: 'default-tech-fallback',
    keyword: null,
    reason: 'Default fallback for tech job board',
    details: 'No clear categorization found - defaulting to tech'
  };
}

/**
 * Context-aware description checking for ambiguous titles
 */
function checkDescriptionWithContext(title, description) {
  const combined = `${title} ${description}`;

  // Data & Analytics - but ensure it's not sales/marketing focused
  if (/\b(data scientist|data engineer|data analyst|business intelligence|product analytics)\b/i.test(combined) &&
      !/\b(sales pipeline|revenue analytics|marketing campaign|customer acquisition)\b/i.test(combined)) {
    return {
      category: 'tech',
      keyword: 'data analytics',
      reason: 'Data/Analytics role with technical context'
    };
  }

  // Marketing Analytics - explicit marketing context
  if (/\b(marketing analytics|campaign analytics|customer analytics)\b/i.test(combined)) {
    return {
      category: 'marketing',
      keyword: 'marketing analytics',
      reason: 'Marketing-focused analytics role'
    };
  }

  // Sales Analytics - explicit sales context
  if (/\b(sales analytics|revenue analytics|sales intelligence)\b/i.test(combined)) {
    return {
      category: 'sales',
      keyword: 'sales analytics',
      reason: 'Sales-focused analytics role'
    };
  }

  // Healthcare - but ensure it's not health-tech
  if (/\b(healthcare|medical|clinical|nursing|patient care)\b/i.test(combined) &&
      !/\b(software engineer|developer|data scientist|health tech|healthtech)\b/i.test(combined)) {
    return {
      category: 'healthcare',
      keyword: 'healthcare',
      reason: 'Healthcare role (non-technical)'
    };
  }

  return null;
}

/**
 * Helper function to get channel name from category
 */
function getChannelName(category) {
  const channelNames = {
    'tech': '💻・tech-jobs',
    'sales': '💰・sales-jobs',
    'marketing': '📢・marketing-jobs',
    'finance': '💳・finance-jobs',
    'healthcare': '🏥・healthcare-jobs',
    'product': '📱・product-jobs',
    'supply-chain': '🚚・supply-chain-jobs',
    'project-management': '📋・project-management-jobs',
    'hr': '👥・hr-jobs'
  };
  return channelNames[category] || '💻・tech-jobs';
}

/**
 * Backwards compatible wrapper (returns only channel ID)
 */
function getEnhancedJobChannel(job, CHANNEL_CONFIG) {
  return getEnhancedJobChannelDetails(job, CHANNEL_CONFIG).channelId;
}

/**
 * Validate routing decision for training data
 */
function validateRouting(job, routingDetails) {
  const issues = [];

  // High confidence tech jobs going to non-tech channels = major issue
  if (routingDetails.category !== 'tech' && routingDetails.confidence >= 90) {
    issues.push('High confidence job not routed to tech');
  }

  // Tech keywords in non-tech routing = potential issue
  const techKeywords = /\b(software|engineer|developer|data|ai|ml|programming|backend|frontend|devops)\b/i;
  if (routingDetails.category !== 'tech' && techKeywords.test(job.job_title)) {
    issues.push('Tech job keywords detected in non-tech category');
  }

  // Very low confidence routing = needs review
  if (routingDetails.confidence < 40) {
    issues.push('Very low confidence routing');
  }

  return {
    isValid: issues.length === 0,
    issues: issues,
    needsReview: issues.length > 0
  };
}

module.exports = {
  getEnhancedJobChannelDetails,
  getEnhancedJobChannel,
  isExplicitTechRole,
  isExplicitNonTechRole,
  validateRouting
};