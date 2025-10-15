// Science Trivia AI Chatbot
let apiKey = localStorage.getItem('openrouter_api_key');
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const configSection = document.getElementById('configSection');
const chatContainer = document.getElementById('chatContainer');

// Science-focused system prompt
const SYSTEM_PROMPT = `You are a specialized AI assistant focused on science trivia and scientific knowledge. Your expertise covers:

- Physics (classical mechanics, quantum physics, relativity, thermodynamics, electromagnetism)
- Chemistry (organic, inorganic, physical chemistry, biochemistry)
- Biology (molecular biology, genetics, evolution, ecology, anatomy, physiology)
- Earth Sciences (geology, meteorology, oceanography, astronomy)
- Scientific discoveries, innovations, and famous scientists
- Science trivia, fun facts, and interesting phenomena

Guidelines for responses:
1. Always be enthusiastic about science and learning
2. Explain complex concepts in an accessible way
3. Include interesting facts and trivia when relevant
4. Use emojis occasionally to make responses engaging (🧬🔬🌟⚡🌍)
5. If asked about non-science topics, gently redirect to science-related aspects
6. Encourage curiosity and further exploration of scientific topics
7. Keep responses informative but not overly lengthy
8. When appropriate, mention real scientists, discoveries, or experiments

Be friendly, educational, and passionate about sharing scientific knowledge!`;

// Initialize the application
function init() {
    if (apiKey) {
        showChatInterface();
    } else {
        showConfigSection();
    }
}

function showConfigSection() {
    configSection.style.display = 'block';
    chatContainer.style.display = 'none';
}

function showChatInterface() {
    configSection.style.display = 'none';
    chatContainer.style.display = 'flex';
    userInput.focus();
}

function saveApiKey() {
    const keyInput = document.getElementById('apiKey');
    const key = keyInput.value.trim();
    
    if (!key) {
        alert('Please enter a valid API key');
        return;
    }
    
    apiKey = key;
    localStorage.setItem('openrouter_api_key', key);
    keyInput.value = '';
    showChatInterface();
}

function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

function askExample(question) {
    userInput.value = question;
    sendMessage();
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, 'user');
    userInput.value = '';
    
    // Disable send button and show loading
    sendButton.disabled = true;
    sendButton.innerHTML = '<span class="loading"></span>';
    
    try {
        const response = await callOpenRouterAPI(message);
        addMessage(response, 'bot');
    } catch (error) {
        console.error('Error:', error);
        addMessage('Sorry, I encountered an error while processing your request. Please check your API key and try again. Error: ' + error.message, 'bot', true);
    } finally {
        // Re-enable send button
        sendButton.disabled = false;
        sendButton.innerHTML = 'Send';
        userInput.focus();
    }
}

function addMessage(content, sender, isError = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    if (isError) {
        messageContent.className += ' error-message';
    }
    
    // Convert markdown-like formatting to HTML
    const formattedContent = content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>');
    
    messageContent.innerHTML = formattedContent;
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function callOpenRouterAPI(userMessage) {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.origin,
            'X-Title': 'Science Trivia AI Chatbot'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: SYSTEM_PROMPT
                },
                {
                    role: 'user',
                    content: userMessage
                }
            ],
            temperature: 0.8,
            max_tokens: 500
        })
    });
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid response format from API');
    }
    
    return data.choices[0].message.content;
}

// Clear API key function (for debugging/testing)
function clearApiKey() {
    localStorage.removeItem('openrouter_api_key');
    apiKey = null;
    showConfigSection();
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', init);

// Add a settings button to change API key
function addSettingsButton() {
    const settingsBtn = document.createElement('button');
    settingsBtn.innerHTML = '⚙️ Settings';
    settingsBtn.style.position = 'fixed';
    settingsBtn.style.top = '20px';
    settingsBtn.style.right = '20px';
    settingsBtn.style.padding = '10px 15px';
    settingsBtn.style.background = '#4CAF50';
    settingsBtn.style.color = 'white';
    settingsBtn.style.border = 'none';
    settingsBtn.style.borderRadius = '20px';
    settingsBtn.style.cursor = 'pointer';
    settingsBtn.style.zIndex = '1000';
    settingsBtn.onclick = () => {
        const changeKey = confirm('Do you want to change your API key?');
        if (changeKey) {
            clearApiKey();
        }
    };
    document.body.appendChild(settingsBtn);
}

// Add settings button after page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(addSettingsButton, 1000);
});
