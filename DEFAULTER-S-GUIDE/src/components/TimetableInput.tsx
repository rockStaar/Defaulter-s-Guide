import { useState } from 'react';

interface Props {
  onParse: (text: string) => void;
}

function TimetableInput({ onParse }: Props) {
  const [text, setText] = useState('');

  return (
    <div className="mb-4">
      <textarea
        className="w-full p-2 border rounded"
        rows={6}
        placeholder="Paste your WhatsApp timetable here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => onParse(text)}
      >
        Parse Timetable
      </button>
    </div>
  );
}

export default TimetableInput;
