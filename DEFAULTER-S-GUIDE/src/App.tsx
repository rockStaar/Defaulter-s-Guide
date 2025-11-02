import { useState } from 'react';
import TimetableInput from './components/TimetableInput';
import SessionList from './components/SessionList';
import AttendanceStats from './components/AttendanceStats';
import AttendanceChart from './components/AttendanceChart';
import { parseTimetable, type Session } from './utils/parseTimetable';

function App() {
  const [sessions, setSessions] = useState<Session[]>([]);

  const handleParse = (text: string) => {
    const parsed = parseTimetable(text);
    setSessions(parsed);
  };

  const handleToggle = (index: number, attended: boolean) => {
    const updated = [...sessions];
    updated[index].attended = attended;
    setSessions(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Defaulter's Guide</h1>
      <TimetableInput onParse={handleParse} />
      <SessionList sessions={sessions} onToggle={handleToggle} />
      <AttendanceStats sessions={sessions} />
      <AttendanceChart sessions={sessions} />
    </div>
  );
}

export default App;
