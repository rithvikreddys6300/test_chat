interface MessageProps {
  content: string;
  sender: 'user' | 'bot';
  isError?: boolean;
}

export default function Message({ content, sender, isError = false }: MessageProps) {
  const formattedContent = content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');

  return (
    <div className={`message ${sender}-message`}>
      <div 
        className={`message-content ${isError ? 'error-message' : ''}`}
        dangerouslySetInnerHTML={{ __html: formattedContent }}
      />
    </div>
  );
}
