import { useState, useEffect } from 'react';
import Head from 'next/head';
import ChatInterface from '../components/ChatInterface';
import ApiKeyConfig from '../components/ApiKeyConfig';
import Header from '../components/Header';
import ExampleQuestions from '../components/ExampleQuestions';

export default function Home() {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedApiKey = localStorage.getItem('openrouter_api_key');
    setApiKey(savedApiKey);
    setIsLoading(false);
  }, []);

  const handleApiKeySaved = (key: string) => {
    setApiKey(key);
    localStorage.setItem('openrouter_api_key', key);
  };

  const handleClearApiKey = () => {
    setApiKey(null);
    localStorage.removeItem('openrouter_api_key');
  };

  if (isLoading) {
    return (
      <div className="container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Science Trivia AI Chatbot</title>
        <meta name="description" content="AI chatbot specialized in science trivia and scientific knowledge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Header />
        
        {!apiKey ? (
          <>
            <ApiKeyConfig onApiKeySaved={handleApiKeySaved} />
            <ExampleQuestions />
          </>
        ) : (
          <ChatInterface 
            apiKey={apiKey} 
            onClearApiKey={handleClearApiKey}
          />
        )}
      </div>
    </>
  );
}
