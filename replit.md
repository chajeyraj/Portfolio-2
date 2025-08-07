# Portfolio Website

## Overview

This is a modern, responsive portfolio website built with React and TypeScript. The application features a frontend-only architecture with a React SPA using shadcn/ui components, static data, and no backend dependencies.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### August 7, 2025 - Complete Frontend-Only Conversion
- **All Backend Files Removed**: Deleted all .NET Core backend files (Controllers, Models, Services, .cs, .csproj)
- **Express.js Server Removed**: Removed Node.js/Express backend server directory
- **Static Data Implementation**: Converted all dynamic content to use static data files instead of API calls
- **Pure React SPA**: Now runs as single-page application using only Vite development server
- **Simplified Dependencies**: Eliminated all backend frameworks and database dependencies
- **Static Project Gallery**: Projects display from hardcoded data with 4 categorized sections
- **Static Testimonials**: Client testimonials show from predefined data with horizontal scrolling
- **Demo Contact Form**: Contact form shows success messages without actual processing
- **Development Script**: Created dev-frontend.sh for easy frontend-only development

### July 21, 2025 - Previous Backend Features (Now Removed)
- **Horizontal Scrolling Layout**: Updated Recent Projects section to display all items in horizontal scrolling format
- **Enhanced Category Headers**: Improved visual design of the 4 category headings with gradient icons and decorative lines  
- **Custom Scrollbar Styling**: Added smooth custom scrollbars for better horizontal scrolling experience
- **Mobile-Optimized Scrolling**: Enhanced touch scrolling behavior for mobile devices
- **Public Review Collection**: Added "Leave a Review" button in Client Testimonials section with form fields for Name, Facebook ID, Comment, and Rating
- **Client Testimonials Horizontal Scrolling**: Converted testimonials to horizontal scrolling layout with scroll indicators

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

### Frontend-Only Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Data**: Static data files instead of API calls
- **Routing**: Wouter for client-side routing (single page application)
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite for development and production builds
- **Deployment**: Static site deployment ready

## Key Components

### Static Data Structure
The application uses four main data types stored in static files:
- **Projects**: Portfolio projects with title, description, technologies, and links (6 sample projects across 4 categories)
- **Experiences**: Work experience entries with company details and tech stack (2 sample experiences)
- **Contacts**: Contact form now shows demo messages only (no data storage)
- **Testimonials**: Client testimonials with ratings and content (4 sample testimonials)

### Frontend Components
- **Navigation**: Responsive navigation with theme switching
- **Hero Section**: Landing page with animated background
- **About Section**: Personal information and skills showcase
- **Projects Section**: Grid display of portfolio projects
- **Experience Section**: Timeline of work experience and testimonials
- **Contact Section**: Contact form with validation
- **Theme Provider**: Dark/light mode toggle functionality

### Static Data Management
- **Local Data Files**: TypeScript data files in client/src/data/ directory
- **Type Definitions**: Custom TypeScript interfaces in client/src/types/
- **No Database**: All content hardcoded in application
- **No API Layer**: Direct import and usage of static data

## Data Flow

1. **Static Imports**: Frontend components directly import data from local files
2. **Type Safety**: TypeScript interfaces ensure data structure consistency
3. **No Network Calls**: All content loads instantly from local data
4. **Demo Interactions**: Forms show success messages without actual processing

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
- **Frontend Only**: `./dev-frontend.sh` or `cd client && npx vite --host 0.0.0.0 --port 5000`
- **Hot Reloading**: Automatic refresh on file changes
- **Static Assets**: All assets served through Vite development server
- **No Backend**: Pure frontend React application

### Production Build
- **Frontend**: Vite builds optimized static React application
- **Static Site**: Ready for deployment to any static hosting service
- **No Backend**: No server-side components or dependencies

### Environment Configuration
- **No Database**: No environment variables required
- **Static Deployment**: Works with Netlify, Vercel, GitHub Pages, etc.
- **REPL_ID**: Replit-specific development features (optional)

The application follows a modern full-stack pattern with clear separation of concerns, type safety throughout, and responsive design principles.