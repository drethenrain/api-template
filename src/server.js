const app = require('./app');
const { port } = require('./constants');

app.listen(port, () => console.log('api on'));
