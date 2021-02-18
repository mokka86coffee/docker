const app = require('express')();
const config = require('./helpers/config');
app.get('/test', (req, resp) => resp.send('working!'));
app.listen(config.port, () => console.log('started api'));

