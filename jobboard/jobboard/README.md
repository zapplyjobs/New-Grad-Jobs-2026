# New-Grad-Jobs API

## Overview

RESTful API serving real-time job postings with intelligent categorization and encryption for competitive intelligence protection.

## Features

- **🔄 Real-time Updates**: Jobs posted automatically from Discord integration
- **🎯 Smart Categorization**: AI-powered job categorization with 90%+ accuracy
- **🔒 Selective Encryption**: Competitive intelligence encrypted, public data accessible
- **📊 Rich Filtering**: Category, location, company, and text search
- **📱 Mobile Ready**: Responsive design for all devices
- **⚡ High Performance**: 5-minute cache, optimized queries

## API Endpoints

### Jobs
- `GET /api/jobs` - Get all jobs with pagination and filtering
- `GET /api/jobs/:id` - Get specific job by ID
- `GET /api/recent` - Get recent jobs (homepage use)
- `POST /api/search` - Advanced job search

### Categories & Stats
- `GET /api/categories` - Get categories with job counts
- `GET /api/stats` - Get job statistics

### System
- `GET /health` - API health check

## Usage Examples

### Get all tech jobs
```bash
curl "https://api.new-grad-jobs.com/api/jobs?category=tech&limit=10"
```

### Search for remote software engineer roles
```bash
curl -X POST "https://api.new-grad-jobs.com/api/search" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "software engineer",
    "category": "tech",
    "limit": 20
  }'
```

### Get recent jobs for homepage
```bash
curl "https://api.new-grad-jobs.com/api/recent?limit=5"
```

## Response Format

```json
{
  "jobs": [
    {
      "id": "company-title-location-timestamp",
      "title": "Software Engineer",
      "company": "Tech Corp",
      "location": "San Francisco, CA",
      "description": "Job description...",
      "applyLink": "https://example.com/apply",
      "postedAt": "2025-11-20T10:30:00.000Z",
      "category": "tech",
      "channelName": "💻・tech-jobs"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
```

## Deployment

### Local Development
```bash
cd jobboard
npm install
npm run dev
```

### Docker Deployment
```bash
cd jobboard
docker-compose up -d
```

### Production
```bash
cd jobboard
npm install
npm start
```

## Security

- **Competitive Intelligence**: Data sources, fetch URLs, and routing metrics are encrypted
- **Public Data**: Job titles, descriptions, and company names are public (needed by job seekers)
- **Rate Limiting**: Built-in rate limiting prevents abuse
- **Input Validation**: All inputs are validated and sanitized

## Data Sources

Jobs are automatically fetched from multiple sources:
- Ashby HQ
- Greenhouse
- Lever
- Workday
- And more...

## Support

For API support or issues, please refer to the main repository documentation.
