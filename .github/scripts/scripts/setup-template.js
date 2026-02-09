#!/usr/bin/env node

/**
 * Template Setup Script
 *
 * Interactive script to help users set up their job board from this template.
 * Guides users through configuration, customization, and initial setup.
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Welcome to @zapplyjobs/new-grad-jobs-template Setup!');
console.log('='.repeat(60));
console.log('This script will guide you through setting up your job board.\n');

// Setup configuration
const setupConfig = {
  boardName: '',
  boardType: 'new-grad', // 'new-grad', 'internship', 'remote'
  discordWebhook: '',
  githubToken: '',
  jsearchApiKey: '',
  targetYear: new Date().getFullYear() + 1
};

// Helper function to prompt for input
function prompt(question, defaultValue = '') {
  return new Promise((resolve) => {
    const promptText = defaultValue
      ? `${question} [${defaultValue}]: `
      : `${question}: `;
    rl.question(promptText, (answer) => {
      resolve(answer || defaultValue);
    });
  });
}

// Helper function to prompt for yes/no
function promptYesNo(question, defaultYes = true) {
  return new Promise((resolve) => {
    const defaultText = defaultYes ? 'Y/n' : 'y/N';
    rl.question(`${question} [${defaultText}]: `, (answer) => {
      const lower = answer.toLowerCase().trim();
      if (lower === '') {
        resolve(defaultYes);
      } else {
        resolve(lower === 'y' || lower === 'yes');
      }
    });
  });
}

// Main setup flow
async function runSetup() {
  try {
    // Step 1: Board Information
    console.log('\n📋 Step 1: Board Information');
    console.log('-'.repeat(60));

    setupConfig.boardName = await prompt('What is your job board name? (e.g., "My Company Jobs")');
    setupConfig.boardType = await prompt(
      'What type of board is this?',
      'new-grad'
    );

    const validTypes = ['new-grad', 'internship', 'remote'];
    if (!validTypes.includes(setupConfig.boardType)) {
      console.log(`⚠️  Invalid board type. Using default: new-grad`);
      setupConfig.boardType = 'new-grad';
    }

    setupConfig.targetYear = await prompt(
      'Target graduation year?',
      new Date().getFullYear() + 1
    );

    // Step 2: API Keys
    console.log('\n🔑 Step 2: API Keys & Configuration');
    console.log('-'.repeat(60));
    console.log('You\'ll need to set up these API keys for full functionality:');
    console.log('  • GitHub Personal Access Token (for repository operations)');
    console.log('  • JSearch API Key (for job fetching)');
    console.log('  • Discord Webhook (for notifications)\n');

    const setupApiKeys = await promptYesNo('Do you want to configure API keys now?', false);

    if (setupApiKeys) {
      setupConfig.githubToken = await prompt('GitHub Personal Access Token');
      setupConfig.jsearchApiKey = await prompt('JSearch API Key');
      setupConfig.discordWebhook = await prompt('Discord Webhook URL');
    } else {
      console.log('⚠️  You can configure these later in GitHub Secrets or .env file.');
    }

    // Step 3: Customization Options
    console.log('\n🎨 Step 3: Customization Options');
    console.log('-'.repeat(60));

    const customizeBoard = await promptYesNo('Do you want to customize the board configuration?', false);

    if (customizeBoard) {
      console.log('\nConfiguration options:');
      console.log('  • Job sources to include (APIs, career pages)');
      console.log('  • Company filters (FAANG+, specific companies)');
      console.log('  • Location filters (US states, regions)');
      console.log('  • Job categories and keywords');

      const showConfigGuide = await promptYesNo('Show configuration guide?', true);
      if (showConfigGuide) {
        showConfigurationGuide();
      }
    }

    // Step 4: Generate Configuration Files
    console.log('\n📝 Step 4: Generate Configuration');
    console.log('-'.repeat(60));

    const generateConfigs = await promptYesNo('Generate configuration files now?', true);

    if (generateConfigs) {
      generateConfigurationFiles();
    }

    // Step 5: Final Instructions
    console.log('\n✅ Step 5: Next Steps');
    console.log('='.repeat(60));

    showNextSteps();

    // Ask if user wants to save setup config
    const saveConfig = await promptYesNo('\nSave setup configuration for reference?', true);

    if (saveConfig) {
      saveSetupConfig();
    }

    console.log('\n🎉 Setup complete! Good luck with your job board!');

  } catch (error) {
    console.error('\n❌ Setup error:', error.message);
  } finally {
    rl.close();
  }
}

function showConfigurationGuide() {
  console.log('\n📖 Configuration Guide');
  console.log('-'.repeat(60));

  console.log('\n1. Job Sources Configuration:');
  console.log('   Edit: .github/scripts/config/domain-config.js');
  console.log('   Add/remove job sources and career pages');

  console.log('\n2. Company Filters:');
  console.log('   Edit: .github/scripts/job-fetcher/companies.json');
  console.log('   Define FAANG+, target companies, and exclusions');

  console.log('\n3. JSearch Configuration:');
  console.log('   Edit: .github/scripts/config/jsearch-config.js');
  console.log('   Customize search queries and parameters');

  console.log('\n4. Environment Variables:');
  console.log('   Create: .github/scripts/.env');
  console.log('   Add API keys and sensitive configuration');

  console.log('\n5. GitHub Workflow Configuration:');
  console.log('   Edit: .github/workflows/');
  console.log('   Customize workflow schedules and triggers');
}

function generateConfigurationFiles() {
  console.log('\n📄 Generating configuration files...');

  // Generate .env.example
  const envExample = `# GitHub Configuration
GITHUB_TOKEN=your_github_token_here
GITHUB_REPOSITORY=your-username/your-repo-name

# Discord Configuration
DISCORD_WEBHOOK_URL=your_discord_webhook_url_here
DISCORD_CHANNEL_ID=your_discord_channel_id_here

# JSearch API Configuration
JSEARCH_API_KEY=your_jsearch_api_key_here
JSEARCH_RAPIDAPI_KEY=your_rapidapi_key_here

# Job Board Configuration
BOARD_TYPE=${setupConfig.boardType}
TARGET_YEAR=${setupConfig.targetYear}
BOARD_NAME=${setupConfig.boardName}

# Logging Configuration
LOG_LEVEL=INFO
ENCRYPTION_KEY=your_encryption_key_here

# Feature Flags
ENABLE_DISCORD_POSTING=true
ENABLE_DEDUPLICATION=true
ENABLE_ARCHIVING=true
`;

  const envExamplePath = path.join(__dirname, '../.env.example');
  fs.writeFileSync(envExamplePath, envExample);
  console.log('   ✅ Created .env.example');

  // Generate README customization section
  const readmeCustomization = `
## Customization for ${setupConfig.boardName}

This board has been customized from the @zapplyjobs/new-grad-jobs-template.

### Board Configuration
- **Board Type**: ${setupConfig.boardType}
- **Target Year**: ${setupConfig.targetYear}
- **Setup Date**: ${new Date().toISOString()}

### Local Modifications
Document any custom changes made to the template here:

1. Job Sources Modified:
   - [Document any changes to job sources]

2. Company Filters Updated:
   - [Document any changes to company filters]

3. Custom Workflows:
   - [Document any custom workflows added]

### Getting Started

1. Copy environment variables:
   \`\`\`bash
   cp .github/scripts/.env.example .github/scripts/.env
   \`\`\`

2. Edit `.github/scripts/.env` with your API keys

3. Run template verification:
   \`\`\`bash
   npm run template:verify
   \`\`\`

4. Test job fetching:
   \`\`\`bash
   node .github/scripts/job-fetcher/index.js
   \`\`\`
`;

  const customizationPath = path.join(__dirname, '../../CUSTOMIZATION.md');
  fs.writeFileSync(customizationPath, readmeCustomization);
  console.log('   ✅ Created CUSTOMIZATION.md');

  console.log('\n✅ Configuration files generated successfully!');
}

function showNextSteps() {
  console.log('\n📋 Recommended Next Steps:\n');

  console.log('1. Configure GitHub Secrets:');
  console.log('   • Go to: Repository Settings → Secrets and variables → Actions');
  console.log('   • Add: GITHUB_TOKEN, DISCORD_WEBHOOK_URL, JSEARCH_API_KEY');

  console.log('\n2. Set up local environment:');
  console.log('   • Copy .env.example to .env');
  console.log('   • Add your API keys to .env');

  console.log('\n3. Customize job sources:');
  console.log('   • Edit .github/scripts/config/domain-config.js');
  console.log('   • Edit .github/scripts/job-fetcher/companies.json');

  console.log('\n4. Test the setup:');
  console.log('   • Run: npm run template:verify');
  console.log('   • Run: npm run test');

  console.log('\n5. Run initial job fetch:');
  console.log('   • Run: node .github/scripts/job-fetcher/index.js');

  console.log('\n6. Enable GitHub Workflows:');
  console.log('   • Go to: Repository Actions');
  console.log('   • Enable workflows: job-fetcher.yml, daily-stats.yml');

  console.log('\n📚 Documentation:');
  console.log('   • CUSTOMIZATION.md - Your custom modifications');
  console.log('   • README.md - Main documentation');
  console.log('   • .github/scripts/docs/ - Additional docs');
}

function saveSetupConfig() {
  const configPath = path.join(__dirname, '../../.setup-config.json');
  fs.writeFileSync(configPath, JSON.stringify(setupConfig, null, 2));
  console.log('✅ Setup configuration saved to .setup-config.json');
}

// Run the setup
runSetup().catch(error => {
  console.error('Fatal error during setup:', error);
  process.exit(1);
});
