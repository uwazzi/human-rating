# Human Rating - AI Companion Rating Platform

A collaborative, wiki-style platform for evaluating and rating AI systems and companions with a focus on human-centered metrics and transparent scoring.

## Overview

Human Rating is a platform designed to provide comprehensive, human-centered evaluations of AI systems and companions. It integrates a Stack Overflow-inspired reputation system, community-driven content, and a structured, multi-dimensional scoring system.

## Features

- **Humane Tech Scorecard**: Evaluate AI systems based on how they make users feel:
  - Cared for: Emotional support and empathy
  - Present: Attentiveness and engagement
  - Fulfilled: Accomplishment and satisfaction
  - Connected: Sense of belonging and connection

- **Wiki-Style Collaboration**: All AI entries and reviews are collaboratively editable, with version control and transparent edit histories.

- **Reputation System**: Users earn reputation through upvotes, accepted contributions, and approved edits, unlocking more privileges as their reputation increases.

- **Structured Impact Assessment**: Comprehensive evaluation framework covering intended use, technical capabilities, limitations, risks, and team information.

- **Comparative Testing**: Side-by-side comparisons of AI responses to understand relative strengths and weaknesses.

- **Red Team Findings**: Community members can probe AIs for harmful or biased outputs, reporting findings for transparency and improvement.

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: Prisma ORM with SQLite (can be configured for other databases)
- **Authentication**: (Placeholder for future implementation)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/human-rating.git
cd human-rating
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up the database
```bash
npx prisma migrate dev --name init
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src/app` - Next.js app router pages and layouts
- `/src/components` - Reusable React components
- `/src/lib` - Utilities and library code
- `/src/models` - Data models and types
- `/prisma` - Database schema and migrations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

This project was inspired by the need for more human-centered evaluation frameworks for AI systems, particularly as AI companions become more integrated into our daily lives.

## Deployment

### Deploying to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Sign up or log in to [Vercel](https://vercel.com)

3. Click "Add New" > "Project"

4. Select your Git repository

5. Configure the project:
   - Framework Preset: Next.js
   - Build Command: Leave as default (uses the vercel.json configuration)
   - Output Directory: Leave as default (.next)

6. Add the following environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `NEXTAUTH_URL`: The URL of your deployed site
   - `NEXTAUTH_SECRET`: A random string used for encryption

7. Click "Deploy"

### Database Setup for Production

For production, the application uses PostgreSQL instead of SQLite. You can use Vercel Postgres or any other PostgreSQL provider.

1. Set up a PostgreSQL database (Vercel Postgres, Supabase, Railway, etc.)

2. Get your PostgreSQL connection string

3. Set it as the `DATABASE_URL` environment variable in your Vercel project settings

4. The database migration will run automatically during deployment
