import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono().basePath('/api');

app.get('/total', (c) => {
  return c.json(1000000000);
});

app.get('/circulating', (c) => {
  return c.json(999987333);
});

serve(app)
