import { Elysia } from 'elysia';

const PORT = process.env.PORT || 4000;
const INTERVAL = parseInt(process.env.INTERVAL || '5000');

const app = new Elysia();

app.get('/health', () => {
  return { status: 'ok' };
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

console.log(`Server is running on PORT ${PORT} 🚀`);