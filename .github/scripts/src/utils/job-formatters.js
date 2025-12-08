/**
 * Job Formatting Utilities
 *
 * Helper functions for formatting job data for display
 */

/**
 * Format posted date with graceful fallbacks
 * @param {string} dateString - ISO date string
 * @returns {string} Human-readable date string
 */
function formatPostedDate(dateString) {
  if (!dateString) return 'Recently';

  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Recently';

    // Calculate relative time
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${diffDays >= 14 ? 's' : ''} ago`;

    // For older posts, show the actual date
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  } catch (error) {
    console.error('Date parsing error:', error);
    return 'Recently';
  }
}

/**
 * Clean job descriptions by removing metadata and formatting
 * @param {string} description - Raw job description
 * @param {string} format - Description format ('markdown' or 'html')
 * @returns {string|null} Cleaned description or null if too short
 */
function cleanJobDescription(description, format) {
  if (!description || typeof description !== 'string') return null;

  let cleaned;
  if (format === 'markdown') {
    // Use Markdown as-is (Discord supports natively)
    cleaned = description
      .replace(/Category:\s*[\w\s]+\.\s*/gi, '')
      .replace(/Level:\s*[\w_]+\.\s*/gi, '')
      .replace(/Posted:\s*[\w\s]+\.\s*/gi, '')
      .replace(/Full Title:\s*[^.]+\.\s*/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
  } else {
    // Legacy HTML - strip tags (current behavior)
    cleaned = description
      .replace(/Category:\s*[\w\s]+\.\s*/gi, '')
      .replace(/Level:\s*[\w_]+\.\s*/gi, '')
      .replace(/Posted:\s*[\w\s]+\.\s*/gi, '')
      .replace(/Full Title:\s*[^.]+\.\s*/gi, '')
      .replace(/<[^>]*>/g, '')  // Strip HTML
      .replace(/\s+/g, ' ')
      .trim();
  }

  // If description is too short after cleaning, return null
  if (cleaned.length < 20) return null;

  return cleaned;
}

module.exports = {
  formatPostedDate,
  cleanJobDescription
};
