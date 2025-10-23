# Kuli Marketing Website

A modern, responsive marketing website for Kuli - built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Features

- **Hero Section** - Bold value proposition with clear CTA
- **External CMO Section** - Positioning as in-house marketing team
- **Services Section** - Complete service offering showcase
- **Why Different Section** - Three key differentiators
- **Process Section** - 4-step workflow visualization
- **Contact Form** - Simple lead capture
- **Responsive Design** - Mobile-first approach
- **Modern Stack** - Next.js 16, TypeScript, Tailwind CSS v4

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
npm run build
npm start
```

## Deployment to Vercel

This project is optimized for Vercel deployment.

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Import the project in [Vercel Dashboard](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

## Project Structure

```
kuli-site/
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   └── Navigation.tsx    # Header navigation
├── public/               # Static assets (add images here)
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  'kuli-orange': '#FF6B35',   // Primary CTA color
  'kuli-blue': '#2563EB',     // Secondary color
  'kuli-dark': '#0F172A',     // Dark backgrounds
}
```

### Content

All content is in `app/page.tsx` - edit the text directly in the component.

### Images

Add images to the `/public` folder and reference them in your components:

```tsx
<img src="/your-image.jpg" alt="Description" />
```

## Performance

- Static Site Generation (SSG) for optimal performance
- Optimized build with Turbopack
- Responsive images and lazy loading ready
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Kuli Marketing

## Support

For questions or issues, contact your development team.
