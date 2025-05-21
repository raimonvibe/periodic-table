# AI-Powered Periodic Table

A comprehensive interactive periodic table application with AI integration, detailed element information, and dark/light mode support.

## Features

- **Complete Periodic Table**: Interactive display of all 118 elements with color-coding by category
- **Detailed Element Information**: Properties, earthly items, and uses for each element
- **AI Integration**: Ask questions about elements using OpenAI's API
- **Credit Tracking System**: Monitor and limit your OpenAI API usage
- **Dark/Light Mode**: Toggle between dark and light themes with system preference detection

## Screenshots

### Light Mode
![Periodic Table - Light Mode](https://app.devin.ai/attachments/154939f7-b6a6-47b0-a863-411ed39908a0/localhost_5173_195718.png)

### Dark Mode
![Element Detail - Dark Mode](https://app.devin.ai/attachments/ccfb3cfa-bb3a-4371-8b26-07d57464e351/localhost_5173_195538.png)

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Download and extract the project zip file
2. Navigate to the project directory:
   ```
   cd periodic-table-ai/periodic-table-ai
   ```
3. Install dependencies:
   ```
   npm install
   ```
   or with yarn:
   ```
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```
   npm run dev
   ```
   or with yarn:
   ```
   yarn dev
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Building for Production

To create a production build:
```
npm run build
```

The build files will be in the `dist` directory and can be served using any static file server.

## Using the Application

### Navigating the Periodic Table

- The main page displays the complete periodic table with all 118 elements
- Elements are color-coded by category (metals, non-metals, noble gases, etc.)
- Click on any element to view detailed information

### Element Details

- Each element page shows comprehensive properties including:
  - Atomic mass, category, group, period
  - Electron configuration, density, melting/boiling points
  - Earthly items and uses

### AI Integration

1. Navigate to Settings tab to add your OpenAI API key
2. Set a monthly budget to control API usage
3. On any element detail page, use the AI query box to ask questions
4. Track your credit usage in the Credits tab

### Theme Toggle

- Click the sun/moon icon in the top-right corner to switch between light and dark modes
- The application automatically detects your system preference on first load

## Technical Details

- Built with React, TypeScript, and Vite
- Styled with Tailwind CSS and shadcn/ui components
- Uses React Router for navigation
- OpenAI API integration for AI queries
- Local storage for data persistence

## Notes

- Your OpenAI API key is stored locally in your browser and never sent to any server
- The application runs entirely in the browser with no backend requirements
- For testing without an OpenAI API key, the application includes a fallback AI system
