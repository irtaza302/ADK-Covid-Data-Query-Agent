# COVID-19 Data Query Agent

A modern web application that allows users to query COVID-19 statistics through a chat interface and visualize the data through tables and charts.

## Features

- Interactive chat interface for natural language queries about COVID-19 statistics
- Data visualization with tables and charts
- Responsive design that works on desktop and mobile
- Server components architecture with Next.js

## Tech Stack

- Next.js 15.3
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui for UI components
- Recharts for data visualization

## Getting Started

### Prerequisites

- Node.js 20.x or later
- PNPM 10.x or later

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ask-covid-data-query-agent.git
cd ask-covid-data-query-agent
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/` - Next.js pages and layouts
- `components/` - UI components
  - `chat/` - Chat interface components
  - `data-display/` - Data visualization components
  - `layout/` - Layout components (header, footer)
  - `ui/` - shadcn/ui components
- `lib/` - Utility functions and type definitions
- `public/` - Static assets

## Development

This project is built with Next.js and uses the App Router for routing. Server components are used by default, with client components marked with `'use client'` directive when needed.

### Adding shadcn/ui Components

To add more shadcn/ui components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

### TypeScript

The project is configured with strict TypeScript typing. All components and functions should be properly typed.
