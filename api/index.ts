import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const config = {
  runtime: 'edge',
};

const app = new Hono().basePath('/api');

app.get('/total', (c) => {
  return c.json(1000000000);
});

app.get('/circulating', (c) => {
  return c.json(999987333);
});

export default handle(app);
