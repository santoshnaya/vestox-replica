# Vestox Replica

A dynamic and modern cryptocurrency exchange landing page clone of vestox.webflow.io, featuring bold visuals, smooth scroll-triggered transitions, interactive stats sections, and modular components—all powered by GSAP and built with Next.js.

## 🌟 Live Demo

**Repository**: [https://github.com/santoshnaya/vestox-replica](https://github.com/santoshnaya/vestox-replica)

## Features

- 🎨 **Modern Design**: Dark theme with orange accents
- ⚡ **GSAP Animations**: Smooth scroll-triggered transitions and counters
- 📱 **Responsive**: Mobile-first design that works across all devices
- 🚀 **Performance**: Optimized for fast loading and smooth interactions
- 🎯 **Pixel Perfect**: Accurate recreation of the original Vestox design

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: GSAP with ScrollTrigger
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/santoshnaya/vestox-replica.git
cd vestox-replica
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Sections

- **Hero**: Main landing section with animated title
- **Stats**: Interactive statistics cards with counter animations
- **Investment**: Large text section about investment for the future
- **Mission**: Company mission with decorative 3D elements
- **Profit**: Profit showcase with animated metrics
- **Work**: Work results and team section
- **Contacts**: Contact information and newsletter signup
- **Footer**: Links and copyright information

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub ✅
2. Connect your repository to Vercel
3. Deploy automatically

## Project Structure

```
vestox-replica/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── StatsSection.tsx # Statistics cards
│   ├── InvestmentSection.tsx # Investment content
│   ├── MissionSection.tsx    # Company mission
│   ├── ProfitSection.tsx     # Profit showcase
│   ├── WorkSection.tsx       # Work results
│   ├── ContactsSection.tsx   # Contact info
│   ├── Footer.tsx           # Footer
│   └── TickerTape.tsx       # Bottom ticker
└── ...config files
```

## Performance

- ✅ **Build Size**: ~3.3MB source code (under 100MB requirement)
- ✅ **No ESLint Errors**: Clean code
- ✅ **TypeScript**: Fully typed
- ✅ **Responsive**: Mobile-first design

## License

This project is a clone for educational purposes. Original design credit goes to Vestox/Webflow.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.