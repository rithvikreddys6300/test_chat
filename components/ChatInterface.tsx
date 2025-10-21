import { useState, useRef, useEffect } from 'react';
import Message from './Message';
import ExampleQuestions from './ExampleQuestions';

interface ChatInterfaceProps {
  apiKey: string;
  onClearApiKey: () => void;
}

interface ChatMessage {
  content: string;
  sender: 'user' | 'bot';
  isError?: boolean;
}

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

export default function ChatInterface({ apiKey, onClearApiKey }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      content: `🧪 Hello! I'm your Science Trivia AI assistant. I specialize in:
      <ul>
        <li>Physics, Chemistry, Biology, and Earth Sciences</li>
        <li>Science trivia and fun facts</li>
        <li>Scientific discoveries and innovations</li>
        <li>Explaining complex concepts simply</li>
      </ul>
      Ask me anything about science! Try questions like:
      <ul>
        <li>"Tell me a fun fact about black holes"</li>
        <li>"What's the most abundant element in the universe?"</li>
        <li>"How do vaccines work?"</li>
      </ul>`,
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callOpenRouterAPI = async (userMessage: string): Promise<string> => {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : '',
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
  };

  const handleSendMessage = async (message?: string) => {
    const messageToSend = message || input.trim();
    if (!messageToSend) return;

    // Add user message
    const newUserMessage: ChatMessage = {
      content: messageToSend,
      sender: 'user'
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await callOpenRouterAPI(messageToSend);
      const newBotMessage: ChatMessage = {
        content: response,
        sender: 'bot'
      };
      setMessages(prev => [...prev, newBotMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: ChatMessage = {
        content: `Sorry, I encountered an error while processing your request. Please check your API key and try again. Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        sender: 'bot',
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <Message
              key={index}
              content={message.content}
              sender={message.sender}
              isError={message.isError}
            />
          ))}
          {isLoading && (
            <div className="message bot-message">
              <div className="message-content">
                <div className="loading"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me a science question..."
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button 
            onClick={() => handleSendMessage()} 
            disabled={isLoading}
          >
            {isLoading ? <div className="loading"></div> : 'Send'}
          </button>
        </div>
      </div>

      <ExampleQuestions onQuestionClick={handleSendMessage} />

      <button 
        className="settings-btn"
        onClick={() => {
          const changeKey = confirm('Do you want to change your API key?');
          if (changeKey) {
            onClearApiKey();
          }
        }}
      >
        ⚙️ Settings
      </button>
    </>
  );
}
