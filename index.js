const Server = require('./models/server');
require('dotenv').config();

const server = new Server();

server.execute();









// server.listen(8080, () => {
//     console.log('Server corriendo en puerto :8080');
// });