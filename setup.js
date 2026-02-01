#!/usr/bin/env node

/**
 * Quick Start Script for Portfolio Website
 *
 * This script helps you quickly customize the portfolio with your information
 * Run with: node setup.js
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('\n🚀 Welcome to Portfolio Setup!\n');
  console.log('This script will help you customize your portfolio website.\n');

  const name = await question('What is your full name? ');
  const title = await question('What is your job title? (e.g., Full Stack Developer) ');
  const tagline = await question('Write a short tagline about yourself: ');
  const email = await question('What is your email address? ');
  const location = await question('Where are you located? ');
  const github = await question('What is your GitHub username? ');
  const linkedin = await question('What is your LinkedIn username? ');

  console.log('\n✨ Great! Setting up your portfolio...\n');

  // Create a config file with user data
  const config = {
    name,
    title,
    tagline,
    email,
    location,
    github,
    linkedin,
    social: {
      github: `https://github.com/${github}`,
      linkedin: `https://linkedin.com/in/${linkedin}`,
      email: `mailto:${email}`
    }
  };

  const configPath = path.join(__dirname, 'portfolio.config.json');
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  console.log('✅ Configuration saved to portfolio.config.json\n');
  console.log('📝 Next steps:\n');
  console.log('1. Update components with your information (see CUSTOMIZATION.md)');
  console.log('2. Add your projects in app/components/Projects.tsx');
  console.log('3. Update your skills in app/components/Skills.tsx');
  console.log('4. Add your bio in app/components/About.tsx');
  console.log('5. Run "npm run dev" to preview your changes');
  console.log('6. Deploy to Vercel (see DEPLOYMENT.md)\n');

  console.log('🎨 Your portfolio configuration:');
  console.log(JSON.stringify(config, null, 2));
  console.log('\n');

  rl.close();
}

main().catch(console.error);
