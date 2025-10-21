import { useState } from 'react';

interface ApiKeyConfigProps {
  onApiKeySaved: (key: string) => void;
}

export default function ApiKeyConfig({ onApiKeySaved }: ApiKeyConfigProps) {
  const [apiKey, setApiKey] = useState('');

  const handleSaveKey = () => {
    if (!apiKey.trim()) {
      alert('Please enter a valid API key');
      return;
    }
    onApiKeySaved(apiKey.trim());
    setApiKey('');
  };

  return (
    <div className="config-section">
      <div className="api-config">
        <label htmlFor="apiKey">OpenRouter API Key:</label>
        <input
          type="password"
          id="apiKey"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your OpenRouter API key"
          onKeyPress={(e) => e.key === 'Enter' && handleSaveKey()}
        />
        <button onClick={handleSaveKey}>Save Key</button>
        <small>Your API key is stored locally in your browser and never sent to any server except OpenRouter.</small>
      </div>
    </div>
  );
}
