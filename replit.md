# Portfolio Website

## Overview

This is a modern, responsive portfolio website built with React, TypeScript, and Express.js. The application features a full-stack architecture with a React frontend using shadcn/ui components and a Node.js backend with PostgreSQL database integration via Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### July 14, 2025 - Enhanced About Section & Footer
- **About Section Redesign**: Complete layout overhaul with centered card design, improved visual hierarchy, and better content organization
- **Enhanced Background Animation**: Added flowing wave animations with layered particle effects for more dynamic visual appeal
- **Modern Footer Implementation**: Created comprehensive footer with brand section, navigation links, social media icons, and smooth hover animations
- **Glass Effect Enhancements**: Added additional CSS classes for stronger glass morphism effects throughout the application
- **Mobile Responsiveness**: Improved responsive design for all new components across different screen sizes

### July 14, 2025 - Project Categorization System
- **Project Categories**: Divided projects into four distinct categories with unique visual styling:
  - **Figma Work**: UI/UX design and prototypes (pink/purple gradient)
  - **Frontend Work**: React, HTML, CSS, animations (blue/cyan gradient)
  - **Full Stack Projects**: Backend integration, APIs, databases (green/emerald gradient)
  - **Animation Work**: Creative motion design, scroll effects, interactive UI (orange/red gradient)
- **Enhanced Project Layout**: Each category has its own section with themed header, icons, and color-coded project cards
- **Database Schema Update**: Added category field to projects table with proper TypeScript integration
- **Sample Project Data**: Created representative projects for each category to demonstrate the portfolio range

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack React Query for server state
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Style**: RESTful JSON APIs
- **Development**: Hot module replacement with Vite integration

## Key Components

### Database Schema
The application uses four main entities:
- **Projects**: Portfolio projects with title, description, technologies, and links
- **Experiences**: Work experience entries with company details and tech stack
- **Contacts**: Contact form submissions with client information
- **Testimonials**: Client testimonials with ratings and content

### Frontend Components
- **Navigation**: Responsive navigation with theme switching
- **Hero Section**: Landing page with animated background
- **About Section**: Personal information and skills showcase
- **Projects Section**: Grid display of portfolio projects
- **Experience Section**: Timeline of work experience and testimonials
- **Contact Section**: Contact form with validation
- **Theme Provider**: Dark/light mode toggle functionality

### Backend Services
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **API Routes**: RESTful endpoints for all CRUD operations
- **Middleware**: Request logging and error handling
- **Development Server**: Vite integration for hot reloading

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack React Query
2. **API Processing**: Express.js routes handle requests and validate data
3. **Database Operations**: Drizzle ORM executes PostgreSQL queries
4. **Response Handling**: JSON responses sent back to client
5. **State Updates**: React Query manages cache invalidation and updates

## External Dependencies

### Core Libraries
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database queries
- **@neondatabase/serverless**: PostgreSQL connection
- **framer-motion**: Animation library
- **react-hook-form**: Form handling with validation
- **zod**: Runtime type validation

### UI Components
- **@radix-ui/***: Accessible UI primitives
- **lucide-react**: Icon library
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Variant-based styling

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production
- **vite**: Development server and build tool

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` - Runs development server with hot reloading
- **Database**: Uses Drizzle push for schema synchronization
- **Assets**: Served through Vite development server

### Production Build
- **Frontend**: Vite builds optimized React application
- **Backend**: esbuild bundles Node.js server with ESM format
- **Database**: Migrations handled through Drizzle Kit
- **Static Assets**: Built to `dist/public` directory

### Environment Configuration
- **DATABASE_URL**: Required PostgreSQL connection string
- **NODE_ENV**: Environment detection for conditional features
- **REPL_ID**: Replit-specific development features

The application follows a modern full-stack pattern with clear separation of concerns, type safety throughout, and responsive design principles.