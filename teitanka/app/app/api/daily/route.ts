import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const apiKey = process.env.DAILY_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'DAILY_API_KEY not set' }, { status: 500 });
  }

  const { roomName } = await request.json();

  const res = await fetch('https://api.daily.co/v1/rooms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      name: roomName || undefined,
      properties: {
        enable_chat: true,
        enable_screenshare: true,
        exp: Math.floor(Date.now() / 1000) + 3600,
        max_participants: 10,
      },
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    return NextResponse.json({ error: err }, { status: res.status });
  }

  const room = await res.json();
  return NextResponse.json({ url: room.url, name: room.name });
}
