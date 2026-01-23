# T&R CarDetail Website

A modern, responsive website for T&R CarDetail, a premium car detailing service.

## Features

- 🎨 Modern dark theme with red accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🖼️ Image gallery with lightbox
- 📋 Service information with tabbed interface
- 💰 Pricing packages display
- 📝 Booking form with validation
- ✉️ Email integration (EmailJS)
- ⚡ Smooth scroll animations
- 🚀 Built with React and Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up EmailJS (optional):
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Copy `.env.example` to `.env`
   - Add your EmailJS credentials to `.env`

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Connect to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository: `https://github.com/BeCreativeRuben/TRCarDetail.be.git`
   - Vercel will automatically detect Vite and configure the build settings

2. **Environment Variables (Optional):**
   - If using EmailJS, add these in Vercel's project settings:
     - `VITE_EMAILJS_PUBLIC_KEY`
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`

3. **Deploy:**
   - Vercel will automatically deploy on every push to the `main` branch
   - Preview deployments are created for pull requests

The `vercel.json` file is already configured for optimal Vite deployment.

## Project Structure

```
trcardetail/
├── public/              # Static files
├── src/
│   ├── assets/         # Images and static assets
│   │   └── images/
│   │       ├── logo/   # Logo files
│   │       └── gallery/ # Gallery images
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── Gallery.jsx
│   │   ├── Stats.jsx
│   │   └── Booking.jsx
│   ├── styles/         # Global styles
│   │   ├── globals.css
│   │   └── variables.css
│   ├── utils/          # Utility functions
│   │   ├── emailService.js
│   │   └── scrollAnimation.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Services

- **Interieur** (€110): Complete interior cleaning
- **Exterieur** (€90): Complete exterior cleaning
- **Interieur + Exterieur** (€180): Combined service

## Technologies Used

- React 18
- Vite
- EmailJS
- React Icons
- CSS3 (Custom properties, Grid, Flexbox)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 T&R CarDetail. All rights reserved.
