import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { Connection, PublicKey } from '@solana/web3.js';
const connection = new Connection('https://api.mainnet-beta.solana.com');
const tokenMintAddress = new PublicKey('99myne1mVnsSv2kAkzZDfNnwf5Xb4SASJnaCRXdbpump');

const app = new Hono().basePath('/api');

async function getTotalAmount() {
  const supply = await connection.getTokenSupply(tokenMintAddress);
  return supply.value.uiAmount;
}

app.get('/max', (c) => {
  return c.json(1000000000);
});

app.get('/total', async (c) => {
  const supply = await getTotalAmount();
  return c.json(supply);
});


app.get('/circulating', async (c) => {
  const supply = await getTotalAmount();
  return c.json(supply);
});

serve(app)
