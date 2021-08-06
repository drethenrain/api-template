const { networkInterfaces } = require('os');

const app = require('./app');
const { port } = require('./constants');
const log = require('./log');

const network = networkInterfaces();

const ip = network.wlp1s0
  ? network.wlp1s0[0].address
  : network[Object.keys(network)[1]]?.[0]?.address;

app.listen(port, () => {
  log.sucess('[SERVER] 🚀 Api is running');
  log.misc(`[SERVER] http://${ip}:${port}`);
  log.misc(`[SERVER] http://localhost:${port}`);
});
