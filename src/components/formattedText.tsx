import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
}

/**
 * Renders a plain string with **bold** markers as <strong> tags.
 * Preserves newlines as <br /> elements.
 *
 * Usage: <FormattedText text="Use **React** for the frontend." />
 */
export const FormattedText: React.FC<FormattedTextProps> = ({ text, className }) => {
  const parseLine = (line: string, lineKey: number) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith('**') && part.endsWith('**')
        ? <strong key={`${lineKey}-${i}`}>{part.slice(2, -2)}</strong>
        : <span key={`${lineKey}-${i}`}>{part}</span>
    );
  };

  const lines = text.split('\n');

  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i}>
          {parseLine(line, i)}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </span>
  );
};