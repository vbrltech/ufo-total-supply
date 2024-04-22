import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const config = {
  runtime: 'edge',
};

const app = new Hono().basePath('/api');

app.get('/tgram/total', (c) => {
  return c.json(210000000000);
});

app.get('/tgram/circulating', (c) => {
  return c.json(209999999998);
});

export default handle(app);
