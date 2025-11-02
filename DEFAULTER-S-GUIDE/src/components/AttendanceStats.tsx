import type { Session } from '../utils/parseTimetable';

interface Props {
  sessions: Session[];
}

function AttendanceStats({ sessions }: Props) {
  const total = sessions.length;
  const attended = sessions.filter(s => s.attended === true).length;
  const percentage = total > 0 ? Math.round((attended / total) * 100) : 0;
  const isDefaulter = percentage < 75;

  // Calculate how many sessions to attend to reach 75%
  const neededToRecover = isDefaulter
    ? Math.max(0, Math.ceil((0.75 * total - attended) / 0.25))
    : 0;

  return (
    <div className="mt-6 p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Attendance Status</h2>
      <div className="space-y-1">
        <p>Total Sessions: <strong>{total}</strong></p>
        <p>Attended: <strong>{attended}</strong></p>
        <p>
          Attendance:{" "}
          <span className={isDefaulter ? 'text-red-600 font-bold' : 'text-green-600 font-bold'}>
            {percentage}%
          </span>
        </p>
      </div>

      {isDefaulter && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          🚨 You're below 75%! Attend the next{" "}
          <strong>{neededToRecover}</strong> session{neededToRecover > 1 ? 's' : ''} to recover.
        </div>
      )}
    </div>
  );
}

export default AttendanceStats;
