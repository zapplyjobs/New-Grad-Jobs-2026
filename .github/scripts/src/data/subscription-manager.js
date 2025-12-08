/**
 * Subscription Manager
 *
 * Manages user subscriptions to job tags for notification purposes
 * Stores subscriptions in subscriptions.json
 */

const fs = require('fs');
const path = require('path');

// Data paths
const dataDir = path.join(process.cwd(), '.github', 'data');
const subscriptionsPath = path.join(dataDir, 'subscriptions.json');

class SubscriptionManager {
  constructor() {
    this.subscriptions = this.loadSubscriptions();
  }

  loadSubscriptions() {
    try {
      if (fs.existsSync(subscriptionsPath)) {
        return JSON.parse(fs.readFileSync(subscriptionsPath, 'utf8'));
      }
    } catch (error) {
      console.error('Error loading subscriptions:', error);
    }
    return {};
  }

  saveSubscriptions() {
    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(subscriptionsPath, JSON.stringify(this.subscriptions, null, 2));
    } catch (error) {
      console.error('Error saving subscriptions:', error);
    }
  }

  subscribe(userId, tag) {
    if (!this.subscriptions[userId]) {
      this.subscriptions[userId] = [];
    }
    if (!this.subscriptions[userId].includes(tag)) {
      this.subscriptions[userId].push(tag);
      this.saveSubscriptions();
      return true;
    }
    return false;
  }

  unsubscribe(userId, tag) {
    if (this.subscriptions[userId]) {
      const index = this.subscriptions[userId].indexOf(tag);
      if (index > -1) {
        this.subscriptions[userId].splice(index, 1);
        if (this.subscriptions[userId].length === 0) {
          delete this.subscriptions[userId];
        }
        this.saveSubscriptions();
        return true;
      }
    }
    return false;
  }

  getUsersForTags(tags) {
    const users = new Set();
    for (const [userId, userTags] of Object.entries(this.subscriptions)) {
      if (userTags.some(tag => tags.includes(tag))) {
        users.add(userId);
      }
    }
    return Array.from(users);
  }

  getUserSubscriptions(userId) {
    return this.subscriptions[userId] || [];
  }
}

module.exports = SubscriptionManager;
