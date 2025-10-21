interface ExampleQuestionsProps {
  onQuestionClick?: (question: string) => void;
}

export default function ExampleQuestions({ onQuestionClick }: ExampleQuestionsProps) {
  const examples = [
    'What is the speed of light?',
    'Tell me about DNA structure',
    'How do stars form?',
    'What causes rainbows?',
    'Explain photosynthesis'
  ];

  return (
    <div className="examples">
      <h3>Try these example questions:</h3>
      <div className="example-buttons">
        {examples.map((question, index) => (
          <button
            key={index}
            className="example-btn"
            onClick={() => onQuestionClick && onQuestionClick(question)}
          >
            {question.split(' ').slice(0, 2).join(' ')}
          </button>
        ))}
      </div>
    </div>
  );
}
