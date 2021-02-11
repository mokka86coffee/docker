const app = require('express')();
app.get('/test', (req, resp) => resp.send('working!'));
app.listen(3000, () => console.log('started api'));

