import { networkInterfaces } from 'os';

import app from "./app";

const PORT = process.env.PORT || 3333;
const network = networkInterfaces();

const ip = network.wlp1s0
    ? network.wlp1s0[0].address
    : network[Object.keys(network)[1]]?.[0]?.address;

app.listen(3333, () => {
  console.log('[SERVER] 🚀 Api is running');
  console.log(`[SERVER] http://${ip}:${PORT}`);
  console.log(`[SERVER] http://localhost:${PORT}`);
});