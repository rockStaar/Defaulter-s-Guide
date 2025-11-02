export interface Session {
  time: string;
  subject: string;
  type: string;
  attended: boolean | null;
}

export function parseTimetable(rawText: string): Session[] {
  const lines = rawText.split('\n');
  const sessions: Session[] = [];

  lines.forEach(line => {
    const match = line.match(/(\w+):\s*(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})\s*(.*?)\s*\((Lecture|Lab)\)/i);
    if (match) {
      sessions.push({
        time: `${match[2]} - ${match[3]}`,
        subject: match[4].trim(),
        type: match[5],
        attended: null,
      });
    }
  });

  return sessions;
}
