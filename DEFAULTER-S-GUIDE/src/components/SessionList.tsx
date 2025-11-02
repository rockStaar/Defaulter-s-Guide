
import type { Session } from '../utils/parseTimetable';

interface Props {
  sessions: Session[];
  onToggle: (index: number, attended: boolean) => void;
}

function SessionList({ sessions, onToggle }: Props) {
  return (
    <div className="space-y-4">
      {sessions.map((session, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded shadow flex flex-col sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-semibold">{session.subject}</p>
            <p className="text-sm text-gray-600">
              {session.time} • {session.type}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <button
              className={`px-3 py-1 rounded mr-2 ${
                session.attended === true ? 'bg-green-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => onToggle(index, true)}
            >
              Attended
            </button>
            <button
              className={`px-3 py-1 rounded ${
                session.attended === false ? 'bg-red-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => onToggle(index, false)}
            >
              Missed
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SessionList;
