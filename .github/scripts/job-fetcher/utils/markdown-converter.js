#!/usr/bin/env node

/**
 * HTML-to-Markdown Converter for Job Descriptions
 *
 * Purpose: Convert job descriptions from HTML to Markdown format for:
 * - Storage optimization (30-50% size reduction)
 * - Improved Discord rendering (native Markdown support)
 * - Better data portability and parsing
 * - Security (removes tracking pixels, scripts, XSS)
 *
 * Features:
 * - 6-layer fallback system for safety
 * - HTML sanitization (XSS protection)
 * - Smart truncation at word boundaries
 * - Compression metrics tracking
 * - Platform-agnostic (handles all ATS platforms)
 */

const TurndownService = require('turndown');
const { gfm } = require('turndown-plugin-gfm');
const sanitizeHtml = require('sanitize-html');

/**
 * Convert HTML job description to Markdown with sanitization and error handling
 *
 * @param {string} html - Raw HTML description from ATS platform
 * @param {Object} options - Conversion options
 * @param {number} options.maxLength - Maximum length for output (default: 5000)
 * @param {string} options.fallbackMessage - Message if description missing (default: "No description available")
 * @param {boolean} options.strictSanitization - Enable strict HTML sanitization (default: true)
 * @param {boolean} options.gfmSupport - Enable GitHub Flavored Markdown (default: true)
 *
 * @returns {Object} Conversion result
 * @returns {string} result.markdown - Converted Markdown text
 * @returns {string} result.originalHtml - Sanitized HTML backup
 * @returns {Object} result.metadata - Conversion metadata
 * @returns {boolean} result.metadata.conversionSuccess - Whether conversion succeeded
 * @returns {number} result.metadata.originalSize - Original HTML size in bytes
 * @returns {number} result.metadata.markdownSize - Markdown size in bytes
 * @returns {number} result.metadata.compressionRatio - Size ratio (0-1, lower is better compression)
 * @returns {number} result.metadata.conversionTime - Time taken in milliseconds
 * @returns {string[]} result.metadata.sanitizationActions - What was sanitized
 * @returns {string} result.metadata.error - Error message if conversion failed
 */
function convertHtmlToMarkdown(html, options = {}) {
  const {
    maxLength = 5000,
    fallbackMessage = "No description available",
    gfmSupport = true
  } = options;

  const metadata = {
    conversionSuccess: false,
    sanitizationActions: [],
    originalSize: 0,
    markdownSize: 0,
    compressionRatio: 0,
    conversionTime: 0
  };

  const startTime = Date.now();

  try {
    // LAYER 1: INPUT VALIDATION
    if (html === null || html === undefined) {
      return {
        markdown: fallbackMessage,
        originalHtml: '',
        metadata
      };
    }

    if (typeof html !== 'string') {
      throw new TypeError(`Expected string, got ${typeof html}`);
    }

    if (html.trim() === '') {
      return {
        markdown: fallbackMessage,
        originalHtml: '',
        metadata
      };
    }

    metadata.originalSize = Buffer.byteLength(html, 'utf8');

    // LAYER 1.5: HTML ENTITY DECODING
    // Decode HTML entities (e.g., &lt; → <, &gt; → >, &amp; → &)
    // This must happen BEFORE sanitization to properly convert HTML
    let decodedHtml = html;
    const htmlEntities = {
      '&lt;': '<',
      '&gt;': '>',
      '&amp;': '&',
      '&quot;': '"',
      '&#39;': "'",
      '&apos;': "'",
      '&nbsp;': ' ',
      '&#x27;': "'",
      '&#x2F;': '/'
    };

    for (const [entity, char] of Object.entries(htmlEntities)) {
      decodedHtml = decodedHtml.replace(new RegExp(entity, 'g'), char);
    }

    // Decode numeric HTML entities (&#xxx; and &#xHHH;)
    decodedHtml = decodedHtml.replace(/&#(\d+);/g, (match, dec) => {
      return String.fromCharCode(dec);
    });
    decodedHtml = decodedHtml.replace(/&#x([0-9A-Fa-f]+);/g, (match, hex) => {
      return String.fromCharCode(parseInt(hex, 16));
    });

    // Track if decoding happened
    if (html !== decodedHtml) {
      metadata.sanitizationActions.push('decoded HTML entities');
    }

    // LAYER 2: HTML SANITIZATION (XSS protection)
    const sanitizeConfig = {
      allowedTags: [
        'p', 'br', 'hr',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'ul', 'ol', 'li',
        'strong', 'b', 'em', 'i', 'u',
        'a', 'code', 'pre',
        'blockquote',
        'table', 'thead', 'tbody', 'tr', 'td', 'th'
      ],
      allowedAttributes: {
        'a': ['href', 'title']
      },
      transformTags: {
        'b': 'strong',
        'i': 'em'
      },
      // Remove tracking pixels (1x1 images)
      exclusiveFilter: (frame) => {
        if (frame.tag === 'img') {
          const src = frame.attribs.src || '';
          // Detect 1x1 tracking pixels
          if (src.includes('1x1') ||
              (frame.attribs.width === '1' && frame.attribs.height === '1')) {
            return true; // Exclude this element
          }
        }
        return false;
      }
    };

    const sanitizedHtml = sanitizeHtml(decodedHtml, sanitizeConfig);

    // Track sanitization actions for debugging
    if (decodedHtml !== sanitizedHtml) {
      const removedScripts = (decodedHtml.match(/<script/gi) || []).length;
      const removedStyles = (decodedHtml.match(/<style/gi) || []).length;
      const removedTracking = (decodedHtml.match(/1x1/g) || []).length;

      if (removedScripts > 0) {
        metadata.sanitizationActions.push(`removed ${removedScripts} script tag(s)`);
      }
      if (removedStyles > 0) {
        metadata.sanitizationActions.push(`removed ${removedStyles} style tag(s)`);
      }
      if (removedTracking > 0) {
        metadata.sanitizationActions.push(`removed ${removedTracking} tracking pixel(s)`);
      }
    }

    // LAYER 3: MARKDOWN CONVERSION
    const turndownService = new TurndownService({
      headingStyle: 'atx',           // Use ## for headings
      hr: '---',                     // Horizontal rule style
      bulletListMarker: '-',         // Use - for bullet lists
      codeBlockStyle: 'fenced',      // Use ``` for code blocks
      fence: '```',                  // Code fence marker
      emDelimiter: '*',              // Use * for emphasis
      strongDelimiter: '**',         // Use ** for strong
      linkStyle: 'inlined',          // Use [text](url) format
      linkReferenceStyle: 'full'     // Use full reference links if needed
    });

    // Add GitHub Flavored Markdown support (tables, strikethrough, task lists)
    if (gfmSupport) {
      turndownService.use(gfm);
    }

    let markdown = turndownService.turndown(sanitizedHtml);

    // LAYER 4: POST-PROCESSING
    // Trim excessive whitespace
    markdown = markdown.replace(/\n{3,}/g, '\n\n');  // Max 2 consecutive newlines

    // Ensure proper list formatting (blank line before lists)
    markdown = markdown.replace(/([^\n])\n([*-])/g, '$1\n\n$2');

    // Trim leading/trailing whitespace
    markdown = markdown.trim();

    // LAYER 5: SMART TRUNCATION (if needed)
    if (markdown.length > maxLength) {
      let truncated = markdown.substring(0, maxLength);

      // Try to break at last word boundary (within last 20% of limit)
      const lastSpace = truncated.lastIndexOf(' ');
      if (lastSpace > maxLength * 0.8) {
        truncated = truncated.substring(0, lastSpace);
      }

      markdown = truncated + '...';
    }

    // LAYER 6: METADATA COLLECTION
    metadata.markdownSize = Buffer.byteLength(markdown, 'utf8');
    metadata.compressionRatio = metadata.markdownSize / metadata.originalSize;
    metadata.conversionTime = Date.now() - startTime;
    metadata.conversionSuccess = true;

    return {
      markdown,
      originalHtml: sanitizedHtml,
      metadata
    };

  } catch (error) {
    console.error('[markdown-converter] Conversion error:', error.message);
    metadata.conversionTime = Date.now() - startTime;
    metadata.error = error.message;

    // FALLBACK: Strip HTML tags manually
    try {
      const fallbackMarkdown = html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')   // Remove styles
        .replace(/<[^>]*>/g, '')                                             // Remove all tags
        .replace(/\s+/g, ' ')                                                // Normalize whitespace
        .trim() || fallbackMessage;

      return {
        markdown: fallbackMarkdown,
        originalHtml: html,
        metadata
      };
    } catch (fallbackError) {
      // Ultimate fallback
      return {
        markdown: fallbackMessage,
        originalHtml: html,
        metadata: { ...metadata, error: `${error.message}; Fallback failed: ${fallbackError.message}` }
      };
    }
  }
}

/**
 * Batch convert multiple job descriptions with progress tracking
 *
 * @param {Array<Object>} jobs - Array of job objects with description fields
 * @param {Object} options - Conversion options (same as convertHtmlToMarkdown)
 * @returns {Object} Batch conversion result
 * @returns {Array<Object>} result.jobs - Jobs with converted descriptions
 * @returns {Object} result.stats - Batch statistics
 */
function convertBatch(jobs, options = {}) {
  const stats = {
    total: jobs.length,
    successful: 0,
    failed: 0,
    avgCompressionRatio: 0,
    avgConversionTime: 0,
    totalOriginalSize: 0,
    totalMarkdownSize: 0
  };

  const convertedJobs = jobs.map((job) => {
    const description = job.description || job.job_description;

    if (!description) {
      stats.failed++;
      return {
        ...job,
        description_format: 'html'
      };
    }

    const result = convertHtmlToMarkdown(description, options);

    if (result.metadata.conversionSuccess) {
      stats.successful++;
      stats.totalOriginalSize += result.metadata.originalSize;
      stats.totalMarkdownSize += result.metadata.markdownSize;
      stats.avgConversionTime += result.metadata.conversionTime;

      return {
        ...job,
        description: result.markdown,
        description_html: result.originalHtml,
        description_format: 'markdown'
      };
    } else {
      stats.failed++;
      return {
        ...job,
        description_html: description,
        description_format: 'html'
      };
    }
  });

  // Calculate averages
  if (stats.successful > 0) {
    stats.avgCompressionRatio = stats.totalMarkdownSize / stats.totalOriginalSize;
    stats.avgConversionTime = stats.avgConversionTime / stats.successful;
  }

  return {
    jobs: convertedJobs,
    stats
  };
}

module.exports = {
  convertHtmlToMarkdown,
  convertBatch
};
