#!/usr/bin/env node

/**
 * Template Verification Script
 *
 * Verifies that the NPM package structure is correct and all modules are properly exported.
 * Run this before publishing to ensure the package is ready.
 */

const path = require('path');
const fs = require('fs');

console.log('🔍 Verifying @zapplyjobs/new-grad-jobs-template package structure...\n');

// Check if dependencies are installed
const repoRoot = path.join(__dirname, '../../..');
const nodeModulesPath = path.join(repoRoot, 'node_modules');
const dependenciesInstalled = fs.existsSync(nodeModulesPath);

if (!dependenciesInstalled) {
  console.log('⚠️  WARNING: node_modules not found!');
  console.log('   Run: npm install');
  console.log('   Some verification checks will be skipped.\n');
}

// Track verification results
const results = {
  passed: [],
  failed: [],
  warnings: []
};

// Helper function to log results
function logCheck(name, passed, message, isWarning = false) {
  const status = passed ? '✅' : '⚠️';
  const type = isWarning ? 'warnings' : (passed ? 'passed' : 'failed');
  results[type].push({ name, message });
  console.log(`${status} ${name}: ${message}`);
}

// ============================================================================
// 1. Verify package.json
// ============================================================================

console.log('📦 Checking package.json...');

try {
  // __dirname is .github/scripts/scripts/, so we need to go up 3 levels to reach repo root
  const repoRoot = path.join(__dirname, '../../..');
  const packagePath = path.join(repoRoot, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

  // Check name
  if (pkg.name === '@zapplyjobs/new-grad-jobs-template') {
    logCheck('Package name', true, 'Correctly set to @zapplyjobs/new-grad-jobs-template');
  } else {
    logCheck('Package name', false, `Incorrect: ${pkg.name} (expected @zapplyjobs/new-grad-jobs-template)`);
  }

  // Check description
  if (pkg.description && pkg.description.includes('template')) {
    logCheck('Package description', true, 'Describes template purpose');
  } else {
    logCheck('Package description', false, 'Should mention template purpose', true);
  }

  // Check main entry point
  if (pkg.main === '.github/scripts/index.js') {
    logCheck('Main entry point', true, 'Points to .github/scripts/index.js');
  } else {
    logCheck('Main entry point', false, `Incorrect: ${pkg.main} (expected .github/scripts/index.js)`);
  }

  // Check keywords
  if (pkg.keywords && pkg.keywords.length > 0) {
    logCheck('Package keywords', true, `Has ${pkg.keywords.length} keywords for discoverability`);
  } else {
    logCheck('Package keywords', false, 'No keywords defined');
  }

  // Check scripts
  if (pkg.scripts['template:verify']) {
    logCheck('Template verify script', true, 'Script exists');
  } else {
    logCheck('Template verify script', false, 'Missing template:verify script');
  }

  if (pkg.scripts['template:setup']) {
    logCheck('Template setup script', true, 'Script exists');
  } else {
    logCheck('Template setup script', false, 'Missing template:setup script', true);
  }

} catch (error) {
  logCheck('package.json', false, `Error reading: ${error.message}`);
}

// ============================================================================
// 2. Verify .npmignore
// ============================================================================

console.log('\n📝 Checking .npmignore...');

try {
  const repoRoot = path.join(__dirname, '../../..');
  const npmignorePath = path.join(repoRoot, '.npmignore');
  const npmignore = fs.readFileSync(npmignorePath, 'utf8');

  // Check for critical exclusions
  const exclusions = [
    'node_modules/',
    '.jobs_data/',
    'test-*.js',
    '*.log',
    '.env',
    '.github/workflows/*.local.yml'
  ];

  let allExcluded = true;
  exclusions.forEach(exclusion => {
    if (!npmignore.includes(exclusion)) {
      logCheck(`Exclude ${exclusion}`, false, 'Not found in .npmignore', true);
      allExcluded = false;
    }
  });

  if (allExcluded) {
    logCheck('Critical exclusions', true, 'All critical exclusions present');
  }

} catch (error) {
  logCheck('.npmignore', false, `Error reading: ${error.message}`);
}

// ============================================================================
// 3. Verify index.js entry point
// ============================================================================

console.log('\n🚀 Checking index.js entry point...');

try {
  const indexPath = path.join(__dirname, '../index.js');

  if (fs.existsSync(indexPath)) {
    logCheck('index.js exists', true, 'Found at .github/scripts/index.js');

    // Only try to require if dependencies are installed
    if (dependenciesInstalled) {
      try {
        // Try to require it - using absolute path to avoid module resolution issues
        const absoluteIndexPath = path.resolve(indexPath);
        delete require.cache[require.resolve(absoluteIndexPath)];
        const pkgIndex = require(absoluteIndexPath);

        // Check for core exports
        const coreExports = [
          'jobFetcher',
          'utils',
          'config',
          'infrastructure',
          'discord',
          'analytics',
          'health',
          'diagnostics',
          'verification'
        ];

        let missingExports = [];
        coreExports.forEach(exportName => {
          if (!pkgIndex[exportName]) {
            missingExports.push(exportName);
          }
        });

        if (missingExports.length === 0) {
          logCheck('Core exports', true, 'All core modules exported');
        } else {
          logCheck('Core exports', false, `Missing exports: ${missingExports.join(', ')}`);
        }

        // Check for version info
        if (pkgIndex.version) {
          logCheck('Version export', true, `Version ${pkgIndex.version}`);
        } else {
          logCheck('Version export', false, 'Version not exported');
        }
      } catch (error) {
        logCheck('index.js loading', false, `Error requiring module: ${error.message}`);
      }
    } else {
      logCheck('Core exports', true, 'Skipped (dependencies not installed)', true);
      logCheck('Version export', true, 'Skipped (dependencies not installed)', true);
    }

  } else {
    logCheck('index.js exists', false, 'Not found at .github/scripts/index.js');
  }

} catch (error) {
  logCheck('index.js', false, `Error loading: ${error.message}`);
}

// ============================================================================
// 4. Verify lib directory exists
// ============================================================================

console.log('\n📚 Checking lib directory...');

try {
  const libPath = path.join(__dirname, '../lib');

  if (fs.existsSync(libPath)) {
    logCheck('lib directory', true, 'Directory exists');

    // Check for logger
    const loggerPath = path.join(libPath, 'logger.js');
    if (fs.existsSync(loggerPath)) {
      logCheck('logger.js', true, 'Infrastructure module exists');

      // Verify logger exports
      const absoluteLoggerPath = path.resolve(loggerPath);
      delete require.cache[require.resolve(absoluteLoggerPath)];
      const logger = require(absoluteLoggerPath);
      const loggerMethods = ['error', 'warn', 'info', 'debug'];
      const missingMethods = loggerMethods.filter(method => typeof logger[method] !== 'function');

      if (missingMethods.length === 0) {
        logCheck('Logger exports', true, 'All logging methods available');
      } else {
        logCheck('Logger exports', false, `Missing methods: ${missingMethods.join(', ')}`);
      }

    } else {
      logCheck('logger.js', false, 'Not found in lib directory');
    }

  } else {
    logCheck('lib directory', false, 'Directory does not exist');
  }

} catch (error) {
  logCheck('lib directory', false, `Error checking: ${error.message}`);
}

// ============================================================================
// 5. Verify config directory exists
// ============================================================================

console.log('\n⚙️  Checking config directory...');

try {
  const configPath = path.join(__dirname, '../config');

  if (fs.existsSync(configPath)) {
    logCheck('config directory', true, 'Directory exists');

    const configFiles = ['domain-config.js', 'jsearch-config.js'];
    let allConfigFiles = true;

    configFiles.forEach(file => {
      const filePath = path.join(configPath, file);
      if (!fs.existsSync(filePath)) {
        logCheck(`${file}`, false, 'Config file missing');
        allConfigFiles = false;
      }
    });

    if (allConfigFiles) {
      logCheck('Config files', true, 'All config files present');
    }

  } else {
    logCheck('config directory', false, 'Directory does not exist');
  }

} catch (error) {
  logCheck('config directory', false, `Error checking: ${error.message}`);
}

// ============================================================================
// 6. Verify job-fetcher module
// ============================================================================

console.log('\n💼 Checking job-fetcher module...');

try {
  const jobFetcherPath = path.join(__dirname, '../job-fetcher');

  if (fs.existsSync(jobFetcherPath)) {
    logCheck('job-fetcher directory', true, 'Directory exists');

    // Check for core files
    const coreFiles = [
      'index.js',
      'job-processor.js',
      'readme-generator.js',
      'jsearch-source.js'
    ];

    let allCoreFiles = true;
    coreFiles.forEach(file => {
      const filePath = path.join(jobFetcherPath, file);
      if (!fs.existsSync(filePath)) {
        logCheck(`${file}`, false, 'Core file missing');
        allCoreFiles = false;
      }
    });

    if (allCoreFiles) {
      logCheck('Core files', true, 'All core job-fetcher files present');
    }

    // Try to load job-processor
    const processorPath = path.join(jobFetcherPath, 'job-processor.js');
    if (fs.existsSync(processorPath)) {
      if (dependenciesInstalled) {
        try {
          const absoluteProcessorPath = path.resolve(processorPath);
          delete require.cache[require.resolve(absoluteProcessorPath)];
          const processor = require(absoluteProcessorPath);
          if (processor.processJobs && typeof processor.processJobs === 'function') {
            logCheck('processJobs export', true, 'Function exported correctly');
          } else {
            logCheck('processJobs export', false, 'processJobs not exported as function');
          }
        } catch (error) {
          logCheck('processJobs export', false, `Error loading: ${error.message}`);
        }
      } else {
        logCheck('processJobs export', true, 'Skipped (dependencies not installed)', true);
      }
    }

  } else {
    logCheck('job-fetcher directory', false, 'Directory does not exist');
  }

} catch (error) {
  logCheck('job-fetcher module', false, `Error checking: ${error.message}`);
}

// ============================================================================
// Final Summary
// ============================================================================

console.log('\n' + '='.repeat(60));
console.log('📊 VERIFICATION SUMMARY');
console.log('='.repeat(60));

console.log(`\n✅ Passed: ${results.passed.length}`);
console.log(`⚠️  Warnings: ${results.warnings.length}`);
console.log(`❌ Failed: ${results.failed.length}`);

if (results.failed.length > 0) {
  console.log('\n❌ Failed Checks:');
  results.failed.forEach(check => {
    console.log(`   • ${check.name}: ${check.message}`);
  });
}

if (results.warnings.length > 0) {
  console.log('\n⚠️  Warnings:');
  results.warnings.forEach(check => {
    console.log(`   • ${check.name}: ${check.message}`);
  });
}

// Exit with appropriate code
if (results.failed.length > 0) {
  console.log('\n❌ Template verification FAILED. Please fix the errors above.');
  process.exit(1);
} else {
  console.log('\n✅ Template verification PASSED! Package is ready for publication.');
  process.exit(0);
}
