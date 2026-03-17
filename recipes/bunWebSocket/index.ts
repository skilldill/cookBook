import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';

const PORT = process.env.PORT || 4000;
const INTERVAL = parseInt(process.env.INTERVAL || '5000');

const app = new Elysia().use(
  cors({
    origin: true,
  })
);

const encoder = new TextEncoder();
const clients = new Set<(data: string) => void>();

app.get('/health', () => {
  return { status: 'ok' };
});

app.post('/message', ({ body }: any) => {
  console.log('Received POST:', body);

  return {
    received: body,
    message: 'Data received successfully',
  };
});

app.get('/events', ({ request }) => {
  const stream = new ReadableStream({
    start(controller) {
      const send = (data: string) => {
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));
      };

      clients.add(send);

      console.log('SSE client connected');

      send('CONNECTED');

      request.signal.addEventListener('abort', () => {
        clients.delete(send);
        console.log('SSE client disconnected');
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
});

app.post('/sse-message', ({ body }: any) => {
  const message = JSON.stringify(body);

  console.log('Broadcast:', message);

  clients.forEach((send) => {
    send(message);
  });

  return {
    ok: true,
    clients: clients.size,
    sent: body,
  };
});

app.ws('/ws', {
  open(ws) {
    console.log('Client connected');
    ws.send('RECONNECTED');

    setInterval(() => {
      ws.send('CHECK CONNECTION');
    }, INTERVAL);
  },

  message(ws) {
    ws.send('PONG');
  },

  close() {
    console.log('Client disconnected');
  },
});

app.listen(PORT);

console.log(`Server is running on PORT ${PORT} 🚀`)