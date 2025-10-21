# 🧬 Science Trivia AI Chatbot - Next.js Version

A modern, responsive AI chatbot built with Next.js, specialized in science trivia and scientific knowledge, powered by the OpenRouter API.

## 🌟 Features

- **Next.js Framework**: Built with Next.js 14 for optimal performance and SEO
- **React Components**: Modular, reusable React components with TypeScript
- **Science-Specialized**: Focused on physics, chemistry, biology, earth sciences, and scientific discoveries
- **Static Export**: Can be exported as static files for easy deployment
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **OpenRouter Integration**: Uses OpenRouter API for AI responses with customizable models
- **Local Storage**: API key is stored securely in your browser
- **TypeScript Support**: Full TypeScript support for better development experience
- **Error Handling**: Robust error handling for API failures

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- An OpenRouter API key (get one at [openrouter.ai](https://openrouter.ai))

### Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Development Mode**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Production Build**:
   ```bash
   npm run build
   npm start
   ```

4. **Static Export** (for hosting on static platforms):
   ```bash
   npm run build
   npm run export
   ```
   The static files will be in the `out/` directory.

### Setup Instructions

1. **Configure API Key**:
   - Enter your OpenRouter API key when prompted
   - The key is stored locally in your browser and never shared
   - You can change the key anytime using the Settings button

2. **Start Chatting**:
   - Ask science questions or use the example buttons
   - The AI will respond with science-focused answers and trivia

## 📁 Project Structure

```
science-trivia-ai-nextjs/
├── components/           # React components
│   ├── ApiKeyConfig.tsx    # API key configuration
│   ├── ChatInterface.tsx   # Main chat interface
│   ├── ExampleQuestions.tsx # Example question buttons
│   ├── Header.tsx          # App header
│   └── Message.tsx         # Chat message component
├── pages/               # Next.js pages
│   ├── _app.tsx           # App wrapper
│   ├── _document.tsx      # HTML document
│   └── index.tsx          # Home page
├── styles/              # CSS styles
│   └── globals.css        # Global styles
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🧪 Example Questions to Try

- "What is the speed of light?"
- "Tell me about DNA structure"
- "How do stars form?"
- "What causes rainbows?"
- "Explain photosynthesis"
- "Tell me a fun fact about black holes"
- "What's the most abundant element in the universe?"
- "How do vaccines work?"

## 🔬 Science Topics Covered

The AI specializes in:

### Physics
- Classical mechanics, quantum physics, relativity
- Thermodynamics, electromagnetism
- Particle physics, astrophysics

### Chemistry  
- Organic, inorganic, physical chemistry
- Biochemistry, molecular interactions
- Chemical reactions and compounds

### Biology
- Molecular biology, genetics, evolution
- Ecology, anatomy, physiology
- Cell biology, biotechnology

### Earth Sciences
- Geology, meteorology, oceanography
- Astronomy, environmental science
- Climate and weather systems

### Science History
- Famous scientists and discoveries
- Scientific innovations and breakthroughs
- Timeline of scientific progress

## ⚙️ Technical Details

### Technology Stack
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules / Global CSS
- **API**: OpenRouter API
- **Storage**: Browser LocalStorage

### API Configuration
- Uses OpenRouter API for AI responses
- Default model: GPT-3.5 Turbo (can be modified in `ChatInterface.tsx`)
- Temperature: 0.8 for creative yet accurate responses
- Max tokens: 500 for concise answers

### Deployment Options

#### Static Export (Recommended)
```bash
npm run build
npm run export
```
Deploy the `out/` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

#### Server-side Rendering
```bash
npm run build
npm start
```
Deploy to:
- Vercel (automatic)
- Netlify
- AWS, Google Cloud, etc.

### Environment Variables
No environment variables needed - the app runs entirely in the browser with user-provided API keys.

## 🛠️ Customization

### Changing the AI Model
Edit the model in `components/ChatInterface.tsx`:
```typescript
model: 'gpt-3.5-turbo', // Change to other OpenRouter models
```

### Modifying the System Prompt
Update the `SYSTEM_PROMPT` constant in `components/ChatInterface.tsx` to change the AI's behavior.

### Styling Changes
Modify `styles/globals.css` to change colors, fonts, or layout. The design is fully responsive.

### Adding New Components
Create new components in the `components/` directory and import them in your pages.

## 🔒 Security & Privacy

- API keys are stored locally in browser localStorage only
- No data is sent to any server except OpenRouter
- All communication is encrypted (HTTPS)
- No tracking or analytics included
- Static export option ensures no server-side data processing

## 📱 Browser Compatibility

- Chrome, Firefox, Safari, Edge (modern versions)
- Mobile browsers supported
- Progressive Web App capabilities
- No plugins or extensions required

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Make sure you have Node.js 18+ installed
2. **API Key Error**: Verify your OpenRouter API key is valid and has credits
3. **Network Error**: Check your internet connection
4. **TypeScript Errors**: Run `npm run lint` to check for issues

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Your app will be available at your-app.vercel.app

### Netlify
1. Build the static export: `npm run build && npm run export`
2. Upload the `out/` folder to Netlify
3. Configure redirects if needed

### Other Platforms
The static export can be deployed to any static hosting platform.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to:
- Report bugs or issues
- Suggest new features
- Improve the science knowledge base
- Enhance the user interface
- Add more interactive elements

## 🎯 Next.js Advantages

- **Performance**: Optimized builds and automatic code splitting
- **SEO**: Better search engine optimization with server-side rendering
- **Developer Experience**: Hot reloading, TypeScript support, and great debugging
- **Deployment**: Easy deployment to Vercel, Netlify, and other platforms
- **Scalability**: Can easily add API routes, database integration, etc.
- **Modern React**: Latest React features and patterns

## 🔄 Migration from Vanilla HTML

This Next.js version includes all the functionality of the original HTML/CSS/JS version with these improvements:

- Component-based architecture
- TypeScript for better code quality
- Better state management with React hooks
- Improved performance with Next.js optimizations
- Better mobile experience
- Easier maintenance and feature additions

---

Enjoy exploring the fascinating world of science with this modern Next.js application! 🌟🔬🧬
