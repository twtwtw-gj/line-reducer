# line-reducer

A web tool that automatically cleans up excess line breaks from text pasted from OneNote and other applications.

## Overview

When copying and pasting text from OneNote, unnecessary line breaks and whitespace are often included. This tool automatically resolves such issues and formats text for better readability.

## Features

- **Reduce consecutive line breaks**: Combines two or more consecutive line breaks into one
- **Remove trailing whitespace**: Removes unnecessary whitespace at the end of each line
- **Remove leading/trailing line breaks**: Removes line breaks at the beginning and end of the entire text
- **Real-time processing**: Automatically formats text as you type
- **One-click copy**: Copy formatted text to clipboard
- **Character count**: Displays character count for both input and output

## Tech Stack

- **React**: UI framework
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **Lucide React**: Icons

## Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/line-reducer.git
cd line-reducer

# Install dependencies
npm install

# Start development server
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## Deploy to GitHub Pages

This project is hosted on GitHub Pages.

```bash
# Build and deploy
npm run build
npm run deploy
```

## About Claude AI

This project was developed using [Claude AI](https://claude.ai/)'s Artifacts feature. Claude Artifacts is a feature that allows interactive creation and editing of React components, enabling development with real-time preview.

## License

MIT License

## Author

[@twtwtw-gj](https://github.com/twtwtw-gj)  
Developed with [Claude AI](https://claude.ai/) using the Artifacts feature