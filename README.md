# 🧬 Science Trivia AI Chatbot

A specialized AI chatbot focused on science trivia and scientific knowledge, powered by the OpenRouter API.

## 🌟 Features

- **Science-Specialized**: Focused on physics, chemistry, biology, earth sciences, and scientific discoveries
- **Interactive Interface**: Clean, modern chat interface with real-time messaging
- **OpenRouter Integration**: Uses OpenRouter API for AI responses with customizable models
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Local Storage**: API key is stored securely in your browser
- **Example Questions**: Pre-built example questions to get started
- **Error Handling**: Robust error handling for API failures

## 🚀 Getting Started

### Prerequisites

- An OpenRouter API key (get one at [openrouter.ai](https://openrouter.ai))
- A modern web browser
- No server setup required - runs entirely in the browser!

### Setup Instructions

1. **Clone or Download** the project files:
   - `index.html` - Main chat interface
   - `style.css` - Styling and responsive design
   - `script.js` - JavaScript logic and API integration

2. **Open the Application**:
   - Simply open `index.html` in your web browser
   - No installation or server setup required

3. **Configure API Key**:
   - Enter your OpenRouter API key when prompted
   - The key is stored locally in your browser and never shared
   - You can change the key anytime using the Settings button

4. **Start Chatting**:
   - Ask science questions or use the example buttons
   - The AI will respond with science-focused answers and trivia

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

### API Configuration
- Uses OpenRouter API for AI responses
- Default model: GPT-3.5 Turbo (can be modified in `script.js`)
- Temperature: 0.8 for creative yet accurate responses
- Max tokens: 500 for concise answers

### File Structure
```
science-chatbot/
├── index.html      # Main interface
├── style.css       # Styling and responsive design
├── script.js       # JavaScript logic and API calls
└── README.md       # This documentation
```

### Browser Compatibility
- Chrome, Firefox, Safari, Edge (modern versions)
- Mobile browsers supported
- No plugins or extensions required

## 🛠️ Customization

### Changing the AI Model
Edit the `model` parameter in `script.js`:
```javascript
model: 'gpt-3.5-turbo', // Change to other OpenRouter models
```

### Modifying the System Prompt
Update the `SYSTEM_PROMPT` variable in `script.js` to change the AI's behavior and focus areas.

### Styling Changes
Modify `style.css` to change colors, fonts, or layout. The design is fully responsive and uses modern CSS features.

## 🔒 Security & Privacy

- API keys are stored locally in your browser only
- No data is sent to any server except OpenRouter
- All communication is encrypted (HTTPS)
- No tracking or analytics included

## 🐛 Troubleshooting

### Common Issues

1. **API Key Error**: Make sure your OpenRouter API key is valid and has sufficient credits
2. **Network Error**: Check your internet connection
3. **Loading Issues**: Try refreshing the page or clearing browser cache
4. **Mobile Display**: The interface is responsive, but very old browsers might have issues

### Error Messages
The chatbot includes detailed error messages to help diagnose issues:
- API key problems
- Network connectivity issues
- Rate limiting or quota exceeded
- Invalid responses

## 📝 License

This project is open source and available under the MIT License. Feel free to modify and distribute as needed.

## 🤝 Contributing

Feel free to:
- Report bugs or issues
- Suggest new features
- Improve the science knowledge base
- Enhance the user interface
- Add more example questions

## 🎯 Future Enhancements

Potential improvements:
- Chat history persistence
- Voice input/output
- Science quiz mode
- Image support for diagrams
- Integration with scientific databases
- Multi-language support

---

Enjoy exploring the fascinating world of science! 🌟🔬🧬
