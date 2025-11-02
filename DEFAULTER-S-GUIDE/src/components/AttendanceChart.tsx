import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import type { Session } from '../utils/parseTimetable';

interface Props {
  sessions: Session[];
}

function AttendanceChart({ sessions }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy previous chart if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const labels = sessions.map((_, i) => `Session ${i + 1}`);
    const data = sessions.map(s => (s.attended === true ? 1 : s.attended === false ? 0 : null));

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Attendance (1 = Attended, 0 = Missed)',
            data,
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            tension: 0.3,
          },
        ],
      },
      options: {
        scales: {
          y: {
            min: 0,
            max: 1,
            ticks: {
              stepSize: 1,
              callback: val => (val === 1 ? 'Attended' : 'Missed'),
            },
          },
        },
      },
    });
  }, [sessions]);

  return (
    <div className="mt-6 p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Attendance Trend</h2>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default AttendanceChart;
