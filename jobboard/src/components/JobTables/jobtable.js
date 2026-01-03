// src/components/JobTables/JobTable.js
import React, { useState, useEffect } from 'react';
import './JobTable.css';

// Company name to domain mapping for accurate favicon fetching
const COMPANY_DOMAINS = {
  // FAANG+
  'amazon': 'amazon.com',
  'google': 'google.com',
  'meta': 'meta.com',
  'apple': 'apple.com',
  'netflix': 'netflix.com',
  'microsoft': 'microsoft.com',

  // Big Tech
  'bytedance': 'bytedance.com',
  'salesforce': 'salesforce.com',
  'nvidia': 'nvidia.com',
  'tesla': 'tesla.com',
  'spacex': 'spacex.com',
  'uber': 'uber.com',
  'lyft': 'lyft.com',
  'airbnb': 'airbnb.com',
  'stripe': 'stripe.com',
  'oracle': 'oracle.com',
  'ibm': 'ibm.com',
  'intel': 'intel.com',
  'amd': 'amd.com',
  'cisco': 'cisco.com',
  'adobe': 'adobe.com',
  'vmware': 'vmware.com',
  'dell': 'dell.com',
  'hp': 'hp.com',
  'qualcomm': 'qualcomm.com',
  'broadcom': 'broadcom.com',

  // Finance
  'jpmorgan': 'jpmorgan.com',
  'goldman sachs': 'goldmansachs.com',
  'morgan stanley': 'morganstanley.com',
  'citi': 'citi.com',
  'capital one': 'capitalone.com',
  'bank of america': 'bankofamerica.com',
  'wells fargo': 'wellsfargo.com',
  'pnc': 'pnc.com',
  'pnc financial': 'pnc.com',
  'pnc financial services': 'pnc.com',
  'mufg': 'mufg.jp',
  'chicago trading': 'chicagotrading.com',
  'chicago trading company': 'chicagotrading.com',

  // Defense/Aerospace
  'lockheed martin': 'lockheedmartin.com',
  'raytheon': 'rtx.com',
  'rtx': 'rtx.com',
  'northrop grumman': 'northropgrumman.com',
  'boeing': 'boeing.com',
  'general dynamics': 'gd.com',
  'l3harris': 'l3harris.com',
  'bae systems': 'baesystems.com',
  'peraton': 'peraton.com',
  'caci': 'caci.com',
  'booz allen': 'boozallen.com',
  'booz allen hamilton': 'boozallen.com',

  // Retail
  'walmart': 'walmart.com',
  'target': 'target.com',
  'costco': 'costco.com',
  'home depot': 'homedepot.com',
  'best buy': 'bestbuy.com',
  'wayfair': 'wayfair.com',
  'chewy': 'chewy.com',

  // Tech Companies
  'rubrik': 'rubrik.com',
  'snowflake': 'snowflake.com',
  'databricks': 'databricks.com',
  'datadog': 'datadoghq.com',
  'cloudflare': 'cloudflare.com',
  'mongodb': 'mongodb.com',
  'elastic': 'elastic.co',
  'splunk': 'splunk.com',
  'crowdstrike': 'crowdstrike.com',
  'palo alto': 'paloaltonetworks.com',
  'okta': 'okta.com',
  'twilio': 'twilio.com',
  'servicenow': 'servicenow.com',
  'workday': 'workday.com',
  'atlassian': 'atlassian.com',
  'docusign': 'docusign.com',
  'dropbox': 'dropbox.com',
  'box': 'box.com',
  'asana': 'asana.com',
  'hubspot': 'hubspot.com',
  'zendesk': 'zendesk.com',
  'toast': 'toasttab.com',
  'doordash': 'doordash.com',
  'instacart': 'instacart.com',
  'coinbase': 'coinbase.com',
  'robinhood': 'robinhood.com',
  'plaid': 'plaid.com',
  'affirm': 'affirm.com',
  'reddit': 'reddit.com',
  'pinterest': 'pinterest.com',
  'snap': 'snap.com',
  'discord': 'discord.com',
  'spotify': 'spotify.com',
  'slack': 'slack.com',
  'zoom': 'zoom.us',
  'shopify': 'shopify.com',
  'figma': 'figma.com',
  'canva': 'canva.com',
  'notion': 'notion.so',
  'airtable': 'airtable.com',

  // Healthcare/Insurance
  'unitedhealth': 'uhg.com',
  'cvs': 'cvs.com',
  'cigna': 'cigna.com',
  'humana': 'humana.com',
  'anthem': 'anthem.com',
  'kaiser': 'kaiserpermanente.org',
  'molina': 'molinahealthcare.com',
  'molina healthcare': 'molinahealthcare.com',
  'davita': 'davita.com',
  'rogers behavioral': 'rogersbh.org',
  'rogers behavioral health': 'rogersbh.org',
  'solace': 'solace.com',
  'solace health': 'solace.com',

  // Consulting
  'deloitte': 'deloitte.com',
  'pwc': 'pwc.com',
  'ey': 'ey.com',
  'kpmg': 'kpmg.com',
  'accenture': 'accenture.com',
  'mckinsey': 'mckinsey.com',
  'bcg': 'bcg.com',
  'bain': 'bain.com',

  // Other companies from README
  'ge vernova': 'gevernova.com',
  'general electric': 'ge.com',
  'ge': 'ge.com',
  'honeywell': 'honeywell.com',
  'emerson': 'emerson.com',
  'emerson electric': 'emerson.com',
  'fanatics': 'fanatics.com',
  'liberty mutual': 'libertymutual.com',
  'cox': 'cox.com',
  'western digital': 'westerndigital.com',
  'factset': 'factset.com',
  'niagara': 'niagarawater.com',
  'niagara bottling': 'niagarawater.com',
  'aramark': 'aramark.com',
  'freeform': 'freeform.co',
  'varex': 'vareximaging.com',
  'varex imaging': 'vareximaging.com',
  'pattern data': 'patterndata.com',
  'wash u': 'wustl.edu',
  'jerry': 'getjerry.com',
  'rws': 'rws.com',
  'citizen health': 'citizenhealth.io',
  'cottingham': 'cottinghambutler.com',
  'cottingham & butler': 'cottinghambutler.com',
  'ducharme': 'dmainc.com',
  'the boyd group': 'boydgroup.com',
  'american institutes': 'air.org',
  'american institutes for research': 'air.org',
  'national renewable': 'nrel.gov',
  'national renewable energy': 'nrel.gov',
  'the job sauce': 'thejobsauce.com',
};

// Companies to skip favicon for (icons don't load properly)
const SKIP_FAVICON = ['bytedance', 'tiktok'];

// Get favicon URL for a company
const getFaviconUrl = (companyName) => {
  if (!companyName) return null;

  const lowerName = companyName.toLowerCase().trim();

  // Skip certain companies that don't have proper favicons
  if (SKIP_FAVICON.some(skip => lowerName.includes(skip))) {
    return null;
  }

  // Try direct match first
  if (COMPANY_DOMAINS[lowerName]) {
    return `https://www.google.com/s2/favicons?domain=${COMPANY_DOMAINS[lowerName]}&sz=64`;
  }

  // Try partial match - check if company name contains a known key
  for (const [key, domain] of Object.entries(COMPANY_DOMAINS)) {
    if (lowerName.includes(key)) {
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    }
  }

  // Fallback: clean company name and try as domain
  const cleaned = lowerName
    .replace(/\s*(inc\.?|llc\.?|ltd\.?|corp\.?|corporation|company|co\.?|group|holdings?|services?)$/gi, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();

  if (cleaned.length > 2) {
    return `https://www.google.com/s2/favicons?domain=${cleaned}.com&sz=64`;
  }

  return null;
};

const JobTable = ({ jobs }) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [filters, setFilters] = useState({
    search: '',
    company: '',
    location: '',
    posted: '',
    level: '',
    category: '',
    remote: '',
    sponsorship: ''
  });
  const [sortBy, setSortBy] = useState('posted');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  // Extract unique values for filters
  const companies = [...new Set(jobs.map(job => job.company))].sort();
  const locations = [...new Set(jobs.map(job => job.location))].sort();
  const levels = [...new Set(jobs.map(job => job.level))].sort();
  const categories = [...new Set(jobs.map(job => job.category))].sort();

  // Apply filters when they change
  useEffect(() => {
    let result = [...jobs];
    
    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(job => 
        job.role.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm) ||
        job.category.toLowerCase().includes(searchTerm)
      );
    }
    
    // Company filter
    if (filters.company) {
      result = result.filter(job => job.company === filters.company);
    }
    
    // Location filter
    if (filters.location) {
      result = result.filter(job => job.location === filters.location);
    }
    
    // Posted filter
    if (filters.posted) {
      const days = parseInt(filters.posted);
      result = result.filter(job => {
        if (!job.posted) return true;
        
        // Parse posted date (e.g., "2h ago", "1d ago", "1w ago")
        let hoursAgo = 0;
        const posted = job.posted.toLowerCase();
        
        if (posted.includes('today') || posted.includes('just now')) {
          hoursAgo = 0;
        } else if (posted.includes('yesterday')) {
          hoursAgo = 24;
        } else if (posted.includes('h ago')) {
          hoursAgo = parseInt(posted);
        } else if (posted.includes('d ago')) {
          hoursAgo = parseInt(posted) * 24;
        } else if (posted.includes('w ago')) {
          hoursAgo = parseInt(posted) * 24 * 7;
        } else if (posted.includes('mo ago')) {
          hoursAgo = parseInt(posted) * 24 * 30;
        }
        
        const daysAgo = hoursAgo / 24;
        return daysAgo <= days;
      });
    }
    
    // Level filter
    if (filters.level) {
      result = result.filter(job => job.level === filters.level);
    }
    
    // Category filter
    if (filters.category) {
      result = result.filter(job => job.category === filters.category);
    }
    
    // Remote filter
    if (filters.remote === 'Yes') {
      result = result.filter(job => job.isRemote);
    } else if (filters.remote === 'No') {
      result = result.filter(job => !job.isRemote);
    }
    
    // Sponsorship filter
    if (filters.sponsorship === 'Yes') {
      result = result.filter(job => !job.isUSOnly);
    } else if (filters.sponsorship === 'No') {
      result = result.filter(job => job.isUSOnly);
    }
    
    // Sorting
    result.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'company':
          comparison = a.company.localeCompare(b.company);
          break;
        case 'role':
          comparison = a.role.localeCompare(b.role);
          break;
        case 'location':
          comparison = a.location.localeCompare(b.location);
          break;
        case 'level':
          const levelOrder = { 'Entry-Level': 1, 'Mid-Level': 2, 'Senior': 3 };
          comparison = (levelOrder[a.level] || 2) - (levelOrder[b.level] || 2);
          break;
        case 'posted':
        default:
          // Sort by timestamp if available, otherwise parse posted string
          if (a.postedTimestamp && b.postedTimestamp) {
            comparison = b.postedTimestamp - a.postedTimestamp;
          } else {
            const getTimeValue = (posted) => {
              if (!posted) return 0;
              const p = posted.toLowerCase();
              if (p.includes('just now')) return 10000;
              if (p.includes('today')) return 9000;
              if (p.includes('yesterday')) return 500;
              // Handle formats like "1h", "2d", "1w", "1mo"
              const num = parseInt(p) || 0;
              if (p.includes('h')) return 1000 - num;
              if (p.includes('d')) return 500 - num;
              if (p.includes('w')) return 100 - num;
              if (p.includes('mo')) return 50 - num;
              return 0;
            };
            comparison = getTimeValue(b.posted) - getTimeValue(a.posted);
          }
          break;
      }
      
      return sortOrder === 'desc' ? comparison : -comparison;
    });
    
    setFilteredJobs(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters, jobs, sortBy, sortOrder]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      company: '',
      location: '',
      posted: '',
      level: '',
      category: '',
      remote: '',
      sponsorship: ''
    });
    setCurrentPage(1);
  };

  const getSortIcon = (column) => {
    if (sortBy !== column) {
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="sort-icon">
          <path d="M6 3L8 5H4L6 3Z" fill="currentColor" opacity="0.3"/>
          <path d="M6 9L8 7H4L6 9Z" fill="currentColor" opacity="0.3"/>
        </svg>
      );
    }
    return sortOrder === 'asc' ? (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="sort-icon active">
        <path d="M6 3L8 5H4L6 3Z" fill="currentColor"/>
      </svg>
    ) : (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="sort-icon active">
        <path d="M6 9L8 7H4L6 9Z" fill="currentColor"/>
      </svg>
    );
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of table
    document.querySelector('.job-table-container')?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        if (totalPages > 5) pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        if (totalPages > 5) pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  // SVG Icons for cards
  const locationIcon = (
    <svg className="job-card-detail-icon" viewBox="0 0 14 14" fill="currentColor">
      <path d="M7 0C4.23858 0 2 2.23858 2 5C2 8.5 7 14 7 14C7 14 12 8.5 12 5C12 2.23858 9.76142 0 7 0ZM7 7C5.89543 7 5 6.10457 5 5C5 3.89543 5.89543 3 7 3C8.10457 3 9 3.89543 9 5C9 6.10457 8.10457 7 7 7Z"/>
    </svg>
  );

  return (
    <div className="job-table-container">
      {/* Search Bar */}
      <div className="search-section">
        <div className="search-wrapper">
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
            placeholder="Search roles, companies, locations..."
            className="search-input"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="job-filters">
        <div className="filter-row">
          <select 
            name="company" 
            value={filters.company}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">Companies</option>
            {companies.map((company, i) => (
              <option key={i} value={company}>{company}</option>
            ))}
          </select>
          
          <select 
            name="location" 
            value={filters.location}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">All Locations</option>
            {locations.map((loc, i) => (
              <option key={i} value={loc}>{loc}</option>
            ))}
          </select>
          
          <select 
            name="posted" 
            value={filters.posted}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">Any Time</option>
            <option value="1">Last 24 hours</option>
            <option value="3">Last 3 days</option>
            <option value="7">Last week</option>
            <option value="30">Last month</option>
          </select>
          
          <select 
            name="level" 
            value={filters.level}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">All Levels</option>
            {levels.map((level, i) => (
              <option key={i} value={level}>{level}</option>
            ))}
          </select>
          
          <select 
            name="category" 
            value={filters.category}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">Categories</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
          
          <select 
          name="remote" 
          value={filters.remote}
          onChange={handleFilterChange}
          className="filter-select"
          style={{ display: 'none' }}
        >
          <option value="">Mode</option>
          <option value="Yes">Remote Only</option>
          <option value="No">On-site Only</option>
        </select>

          <select 
            name="sponsorship" 
            value={filters.sponsorship}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">Visa Status</option>
            <option value="Yes">Sponsorship Available</option>
            <option value="No">US Citizens Only</option>
          </select>
          
          <button onClick={resetFilters} className="reset-filters">
            Reset Filters
          </button>
        </div>
      </div>
      
      
      {/* Job Table */}
      <div className="job-table-wrapper">
        <table className="job-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('company')} className="sortable">
                <div className="th-content">
                  <span>Company</span>
                  {getSortIcon('company')}
                </div>
              </th>
              <th onClick={() => handleSort('role')} className="sortable">
                <div className="th-content">
                  <span>Role</span>
                  {getSortIcon('role')}
                </div>
              </th>
              <th onClick={() => handleSort('location')} className="sortable">
                <div className="th-content">
                  <span>Location</span>
                  {getSortIcon('location')}
                </div>
              </th>
              <th onClick={() => handleSort('posted')} className="sortable">
                <div className="th-content">
                  <span>Posted</span>
                  {getSortIcon('posted')}
                </div>
              </th>
              <th onClick={() => handleSort('level')} className="sortable">
                <div className="th-content">
                  <span>Level</span>
                  {getSortIcon('level')}
                </div>
              </th>
              <th>Category</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.length > 0 ? (
              currentJobs.map((job, index) => (
                <tr key={index} className="job-row">
                  <td>
                    <div className="company-cell">
                      {getFaviconUrl(job.company) ? (
                        <img
                          src={getFaviconUrl(job.company)}
                          alt=""
                          className="company-favicon"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : (
                        <span className="company-emoji">{job.emoji}</span>
                      )}
                      <span className="company-name">{job.company}</span>
                    </div>
                  </td>
                  <td>
                    <div className="role-cell">
                      <span className="role-title">{job.role}</span>
                      <div className="role-badges">
                        {job.isRemote && <span className="badge remote">🏠 Remote</span>}
                        {job.isUSOnly && <span className="badge us-only">🇺🇸 US Only</span>}
                      </div>
                    </div>
                  </td>
                  <td className="location-cell">{job.location}</td>
                  <td className="posted-cell">{job.posted}</td>
                  <td>
                    <span className={`level-badge level-${job.level.toLowerCase().replace(/[^a-z]/g, '')}`}>
                      {job.level}
                    </span>
                  </td>
                  <td className="category-cell">{job.category}</td>
                  <td>
                    <a 
                      href={job.applyLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="apply-button"
                    >
                      Apply
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-jobs">
                  <div className="no-results">
                    <h3>No jobs match your filters</h3>
                    <p>Try adjusting your search criteria or clearing some filters.</p>
                    <button onClick={resetFilters} className="clear-filters-btn">
                      Clear All Filters
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Mobile Card View */}
      <div className="job-cards">
        {currentJobs.length > 0 ? (
          currentJobs.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-card-header">
                <div className="job-card-company">
                  {getFaviconUrl(job.company) ? (
                    <img
                      src={getFaviconUrl(job.company)}
                      alt=""
                      className="job-card-favicon"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ) : (
                    <span className="job-card-emoji">{job.emoji}</span>
                  )}
                  <span className="job-card-company-name">{job.company}</span>
                </div>
                <span className="job-card-posted">{job.posted}</span>
              </div>
              
              <h3 className="job-card-role">{job.role}</h3>
              
              <div className="job-card-details">
                <div className="job-card-detail">
                  {locationIcon}
                  <span>{job.location}</span>
                </div>
              </div>
              
              <div className="job-card-badges">
                <span className={`job-card-badge level-${job.level.toLowerCase().replace(/[^a-z]/g, '')}`}>
                  {job.level}
                </span>
                <span className="job-card-badge category">{job.category}</span>
                {job.isRemote && <span className="job-card-badge remote">🏠 Remote</span>}
                {job.isUSOnly && <span className="job-card-badge us-only">🇺🇸 US Only</span>}
              </div>
              
              <a 
                href={job.applyLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="job-card-apply"
              >
                Apply Now →
              </a>
            </div>
          ))
        ) : (
          <div className="no-jobs-card">
            <h3>No jobs match your filters</h3>
            <p>Try adjusting your search criteria or clearing some filters.</p>
            <button onClick={resetFilters} className="reset-filters">
              Clear All Filters
            </button>
          </div>
        )}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn pagination-prev"
          >
            ← Previous
          </button>
          
          <div className="pagination-numbers">
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && handlePageChange(page)}
                className={`pagination-number ${
                  currentPage === page ? 'active' : ''
                } ${typeof page !== 'number' ? 'dots' : ''}`}
                disabled={typeof page !== 'number'}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn pagination-next"
          >
            Next →
          </button>
        </div>
      )}
      
      {/* Footer */}
      <div className="job-table-footer">
        <div className="footer-stats">
          <span className="job-count">
            Page {currentPage} of {totalPages} • {filteredJobs.length} total jobs
          </span>
          <span className="separator">•</span>
          <span className="companies-count">
            {companies.length} companies
          </span>
        </div>
        <div className="last-updated">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default JobTable;