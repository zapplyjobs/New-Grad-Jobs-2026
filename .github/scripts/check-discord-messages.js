#!/usr/bin/env node

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const TECH_CHANNEL_ID = '1462988605306834987';

client.once('ready', async () => {
  try {
    const channel = await client.channels.fetch(TECH_CHANNEL_ID);
    const messages = await channel.messages.fetch({ limit: 20 });

    console.log('=== LAST 20 MESSAGES IN #tech-jobs ===\n');

    const sorted = Array.from(messages.values()).sort((a, b) => b.createdTimestamp - a.createdTimestamp);

    sorted.forEach((msg, i) => {
      if (msg.embeds && msg.embeds.length > 0) {
        const embed = msg.embeds[0];
        const company = embed.fields?.find(f => f.name === '🏢 Company')?.value || 'N/A';
        const timestamp = msg.createdAt.toISOString();
        console.log(`${i+1}. ${timestamp}`);
        console.log(`   ${embed.title} @ ${company}`);
        console.log();
      }
    });

    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
});

client.login(process.env.DISCORD_TOKEN);
