import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import StatCard from '../../components/StatCard/StatCard';
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import FAQSection from '../../components/FAQSection/FAQSection';
import CommunitySection from '../../components/CommunitySection/CommunitySection';
import './Home.css';
import JobTable from '../../components/JobTables/jobtable';
import { parseJobsFromReadme, validateAndCleanJobs } from '../../utility/parseJobs';

// Convert posted time string to timestamp for sorting
const getPostedTimestamp = (posted) => {
  if (!posted) return 0;
  const p = posted.toLowerCase();
  const now = Date.now();
  const hour = 60 * 60 * 1000;
  const day = 24 * hour;

  if (p.includes('just now')) return now;
  if (p.includes('today')) return now - hour;

  const num = parseInt(p) || 1;
  if (p.includes('h')) return now - (num * hour);
  if (p.includes('d')) return now - (num * day);
  if (p.includes('w')) return now - (num * 7 * day);
  if (p.includes('mo')) return now - (num * 30 * day);

  return 0;
};

const Home = () => {
  const { isDarkMode } = useTheme();
  const [stats, setStats] = useState([
    { number: '0+', label: 'New Jobs', animated: false },
    { number: 0, label: 'Companies', animated: true },
    { number: 0, label: 'FAANG+ Roles', animated: true },
    { number: '1h', label: 'Updated', animated: false }
  ]);
  const [jobs, setJobs] = useState([]);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        console.log('🔍 Starting to load job data...');

        // Fetch README and parse job tables
        console.log('📄 Fetching README.md...');
        const response = await fetch('https://raw.githubusercontent.com/zapplyjobs/New-Grad-Jobs-2026/main/README.md');

        if (!response.ok) {
          throw new Error(`Failed to fetch README: ${response.status} ${response.statusText}`);
        }

        const readmeContent = await response.text();
        console.log(`📦 Fetched README (${readmeContent.length} chars)`);

        // Parse jobs from README
        const parsedJobs = parseJobsFromReadme(readmeContent);
        console.log(`🔍 Parsed ${parsedJobs.length} jobs from README`);

        // Clean and validate
        const cleanedJobs = validateAndCleanJobs(parsedJobs);
        console.log(`🧹 Cleaned to ${cleanedJobs.length} valid jobs`);

        // Add timestamp for sorting and sort by posted date (newest first)
        const jobsWithTimestamp = cleanedJobs.map(job => ({
          ...job,
          postedTimestamp: getPostedTimestamp(job.posted)
        })).sort((a, b) => b.postedTimestamp - a.postedTimestamp);

        console.log('📋 Sample jobs:', jobsWithTimestamp.slice(0, 3));

        setJobs(jobsWithTimestamp);
        
        // Calculate dynamic stats from job data
        const calculateStats = (jobsData) => {
          const totalJobs = jobsData.length;
          const companies = [...new Set(jobsData.map(job => job.company))].length;

          // Define FAANG+ companies
          const faangCompanies = [
            'Google', 'Apple', 'Meta', 'Amazon', 'Netflix', 'Microsoft',
            'Tesla', 'Nvidia', 'OpenAI', 'Uber', 'Airbnb', 'Stripe',
            'Palantir', 'Snowflake', 'Databricks', 'Figma', 'Discord',
            'Spotify', 'Slack', 'Zoom', 'Shopify', 'Square', 'Twitter',
            'LinkedIn', 'Salesforce', 'Adobe', 'Intel', 'AMD', 'ByteDance'
          ];

          const faangRoles = jobsData.filter(job =>
            faangCompanies.some(company =>
              job.company.toLowerCase().includes(company.toLowerCase())
            )
          ).length;

          return { totalJobs, companies, faangRoles };
        };

        const dynamicStats = calculateStats(jobsWithTimestamp);
        
        // Update stats with animation
        setStats([
          { number: dynamicStats.totalJobs, label: 'Jobs', animated: true },
          { number: dynamicStats.companies, label: 'Companies', animated: true },
          { number: dynamicStats.faangRoles, label: 'FAANG+ Roles', animated: true },
          { number: '15m', label: 'Updated', animated: false }
        ]);
        setIsLoadingStats(false);
        
      } catch (error) {
        console.error('❌ Failed to load data:', error);
        // setDebugInfo(`Error: ${error.message}`);
        // Keep default stats if fetch fails
      } finally {
        setIsLoading(false);
      }
    };

    loadData();

    // Scroll and animation effects
    const isMobile = window.innerWidth <= 768;
    const observerOptions = {
      threshold: isMobile ? 0.05 : 0.1,
      rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a small delay on mobile to prevent jarring animations
          if (isMobile) {
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, 100);
          } else {
            entry.target.classList.add('revealed');
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      const currentScrollY = window.scrollY;

      if (nav) {
        if (currentScrollY > 100) {
          nav.style.background = 'rgba(255, 255, 255, 0.95)';
          nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
          nav.style.background = 'rgba(255, 255, 255, 0.8)';
          nav.style.boxShadow = 'none';
        }

        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          nav.style.transform = 'translateY(-100%)';
        } else {
          nav.style.transform = 'translateY(0)';
        }
      }

      lastScrollY = currentScrollY;
    };

    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    };

    const combinedScrollHandler = () => {
      handleScroll();
      handleParallax();
    };

    window.addEventListener('scroll', combinedScrollHandler);

    return () => {
      window.removeEventListener('scroll', combinedScrollHandler);
      observer.disconnect();
    };
  }, []);



  const discordIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );


  // Helper function to scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="home">
      <Navbar />

      <section id="home" className="hero">
        {/* Animated background elements */}
        <div className="hero-bg-elements">
          
          {/* Option 2: Side Artistic Watermark - Skewed artistic side placement 
          <motion.img
            src={`${process.env.PUBLIC_URL}/mega-zapply.png`}
            alt="Zapply Background"
            className="mega-zapply-side"
            animate={{
              rotate: [-15, -10, -15],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          */}
          
          {/* Option 3: Floating Behind Text - 3D perspective behind text
          <motion.img
            src={`${process.env.PUBLIC_URL}/mega-zapply.png`}
            alt="Zapply Background"
            className="mega-zapply-float"
            animate={{
              rotateY: [10, -5, 10],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          */}
          
          {/* Option 4: Artistic Overlay Pattern - Blend mode artistic overlay
          <motion.img
            src={`${process.env.PUBLIC_URL}/mega-zapply.png`}
            alt="Zapply Background"
            className="mega-zapply-pattern"
            animate={{
              rotate: [12, 18, 12],
              scale: [1.1, 1.2, 1.1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          */}
          
          {/* Option 5: Dual Placement - Two smaller logos for dynamic effect
          <motion.img
            src={`${process.env.PUBLIC_URL}/mega-zapply.png`}
            alt="Zapply Background 1"
            className="mega-zapply-dual-1"
            animate={{
              rotate: [20, 25, 20],
              opacity: [0.12, 0.18, 0.12],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.img
            src={`${process.env.PUBLIC_URL}/mega-zapply.png`}
            alt="Zapply Background 2"
            className="mega-zapply-dual-2"
            animate={{
              rotate: [-30, -25, -30],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
          */}
          
          <motion.div 
            className="floating-shape shape-1"
            animate={{ 
              y: [0, -20, 0], 
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="floating-shape shape-2"
            animate={{ 
              y: [0, 20, 0], 
              rotate: [360, 180, 0] 
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="floating-shape shape-3"
            animate={{ 
              y: [0, -15, 0], 
              x: [0, 10, 0],
              rotate: [0, 270, 360] 
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
          <motion.div 
            className="floating-dots"
            animate={{ 
              y: [0, -30, 0], 
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        <div className="container">
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tech Jobs for
              <br />
              <TypingEffect />
            </motion.h1>

            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Curated opportunities from top tech companies.
              <br />
              No fluff. Just real jobs. Updated daily.
            </motion.p>

            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                onClick={() => scrollToSection('jobs')}
                variant="primary"
                size="large"
              >
                Explore Jobs
              </Button>
              <Button
                href="https://discord.gg/yKWw28q7Yq"
                variant="discord"
                size="large"
                target="_blank"
                rel="noopener noreferrer"
                icon={discordIcon}
              >
                Join Discord
              </Button>
              <Button
                href="https://github.com/zapplyjobs/New-Grad-Jobs-by-Zapply"
                variant="secondary"
                size="large"
                target="_blank"
                rel="noopener noreferrer"
              >
                ⭐ Star on GitHub
              </Button>
            </motion.div>

            <div className="stats">
              {isLoadingStats ? (
                <div className="stats-loading">Loading stats...</div>
              ) : (
                stats.map((stat, index) => (
                  <StatCard key={index} number={stat.number} label={stat.label} animated={stat.animated} />
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="companies-banner">
        <div className="companies-ticker">
          <div className="companies-header">
            <h3 className="companies-title">Trusted by professionals</h3>
            <div className="companies-separator">|</div>
            <p className="companies-subtitle">Join thousands of professionals working at world's leading tech companies</p>
          </div>
          <div className="companies-divider"></div>
          <div className="companies-track">
            {[...Array(10)].map((_, i) => (
              <img key={i} src={isDarkMode ? `${process.env.PUBLIC_URL}/companies-dark.svg` : `${process.env.PUBLIC_URL}/companies-banner.svg`} alt="Companies" className="companies-image" />
            ))}
            {[...Array(10)].map((_, i) => (
              <img key={`dup-${i}`} src={isDarkMode ? `${process.env.PUBLIC_URL}/companies-dark.svg` : `${process.env.PUBLIC_URL}/companies-banner.svg`} alt="Companies" className="companies-image" />
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="job-listings scroll-reveal">
        <div className="container">
          <h2 className="section-title">Current Job Openings</h2>
          <p className="section-subtitle">
            Filter and browse through the latest opportunities from elite tech companies
          </p>
          
          {isLoading ? (
            <div className="loading-jobs">
              <div className="loading-spinner"></div>
              <p>Loading job opportunities from README...</p>
            </div>
          ) : jobs.length > 0 ? (
            <JobTable jobs={jobs} />
          ) : (
            <div className="no-jobs-found">
              <h3>No jobs found in README</h3>
              <p>This could be due to:</p>
              <ul>
                <li>The README format has changed</li>
                <li>No jobs are currently available</li>
                <li>Parsing error with the README structure</li>
              </ul>
              <Button
                href="https://github.com/zapplyjobs/New-Grad-Jobs-by-Zapply"
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Button>
            </div>
          )}
        </div>
      </section>

      <CommunitySection />

      <FAQSection />

      <motion.footer 
        className="footer-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="footer-container">
          <div className="footer-brand">
            <img src={isDarkMode ? `${process.env.PUBLIC_URL}/logo.svg` : `${process.env.PUBLIC_URL}/logo-white.svg`} alt="Zapply Logo" className="footer-logo" />
            <div className="footer-socials">
              <a href="https://discord.gg/yKWw28q7Yq" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="footer-social-icon">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="https://github.com/zapplyjobs/New-Grad-Jobs-by-Zapply" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="footer-social-icon">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.reddit.com/r/Zapply/" target="_blank" rel="noopener noreferrer" aria-label="Reddit">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="footer-social-icon">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/zapply-jobs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="footer-social-icon">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@zapplyjobs" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="footer-social-icon">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/zapplyjobs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="footer-social-icon">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
            <div className="footer-stats-info">
              <div className="footer-stats">
                {stats[0]?.number || '825'} opportunities from {stats[1]?.number || '82'} companies
              </div>
              <div className="footer-note">
                Updated {stats[3]?.number.toLowerCase().includes('loading') ? 'daily at 9 AM UTC' : stats[3]?.number}
              </div>
            </div>
          </div>
          
          <div className="footer-links-mobile-wrapper">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <div className="footer-links">
                <a href="https://github.com/zapplyjobs/New-Grad-Jobs-by-Zapply">GitHub Repository</a>
                <a href="https://github.com/zapplyjobs/New-Grad-Jobs-by-Zapply/issues">Report Issues</a>
                <a href="#jobs" onClick={(e) => { e.preventDefault(); scrollToSection('jobs'); }}>Browse Jobs</a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3>Community</h3>
              <div className="footer-links">
                <a href="https://discord.gg/yKWw28q7Yq" target="_blank" rel="noopener noreferrer">Join Discord</a>
                <a href="#community" onClick={(e) => { e.preventDefault(); scrollToSection('community'); }}>Community</a>
                <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">2025 Zapply Job Board - Built with ❤️ for new grads</p>
          <p className="footer-disclaimer">Not affiliated with listed companies</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;