const { networkInterfaces } = require('os');

const network = networkInterfaces();

const app = require('./app');
const { PORT } = require('./constants');
const { connect } = require('./database');
const log = require('./log');

const ip = network.wlp1s0
  ? network.wlp1s0[0].address
  : network[Object.keys(network)[1]]?.[0]?.address;

connect();

app.listen(PORT, () => {
  log.sucess('[SERVER] 🚀 Api is running');
  log.misc(`[SERVER] http://${ip}:${PORT}`);
  log.misc(`[SERVER] http://localhost:${PORT}`);
});
