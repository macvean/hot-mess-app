# Hot Mess Tracker

A fun and interactive web application that helps you track how chaotic your day was. Rate your day using sliders for different "hot mess" categories and get sarcastic, motivational feedback based on your chaos level.

## Features

- 🎚️ **Interactive Sliders**: Track four categories of chaos:
  - Late to class
  - Lost charger
  - Sent risky text
  - Procrastination
- 😊 **Dynamic Emoji Feedback**: Get visual feedback based on your chaos score
- 💬 **Sarcastic Messages**: Receive humorous, motivational messages tailored to your chaos level
- 💾 **Save History**: Save your daily scores and view your chaos history (stored locally in your browser)
- 🎨 **Modern UI**: Beautiful, responsive design built with Tailwind CSS and shadcn/ui components

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

You can check if you have Node.js installed by running:
```bash
node --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/).

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd hot-mess-app-test
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   Or if you're using yarn:
   ```bash
   yarn install
   ```
   
   Or if you're using pnpm:
   ```bash
   pnpm install
   ```

## Running the Application

### Development Mode

To start the development server:

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

Or with pnpm:
```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

Open your browser and navigate to that URL to see the app. The page will automatically reload when you make changes to the code.

### Production Build

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

The production server will also run on [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm start` - Start the production server (requires `npm run build` first)
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
hot-mess-app-test/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page component
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── hot-mess-tracker.tsx  # Main tracker component
│   └── ui/                # UI components (shadcn/ui)
├── lib/                   # Utility functions
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## Technology Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **Radix UI** - Accessible component primitives

## Browser Support

This application uses modern web features and is best viewed in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Your saved scores are stored in your browser's localStorage, so they persist between sessions but are specific to each browser/device.
- The app is client-side only and doesn't require any backend services.

## Troubleshooting

**Port 3000 is already in use:**
- You can specify a different port by running: `npm run dev -- -p 3001`

**Dependencies won't install:**
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again

**Build errors:**
- Make sure you're using Node.js version 18 or higher
- Clear the `.next` directory and try building again

## License

This project is private and not licensed for public use.
