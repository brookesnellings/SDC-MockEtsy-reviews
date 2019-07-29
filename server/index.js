const app = require('./app.js');

// const { PORT, HOST } = require('../config.js');
// const port = PORT || 3002;
// const host = HOST || '0.0.0.0';

const port = 3002;
const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`
-------------------------------------------\n
|         Regretsy Reviews Server         |\n
|    Eavesdropping on ${host} at ${port}     |\n
-------------------------------------------`);
});
