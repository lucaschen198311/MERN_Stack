const express = require('express');
const cors = require('cors')    /* This is new */
const app = express();
const port = 8000;
app.use(cors());                 /* This is new */
require('./config/mongoose.config');               /* This is to connect mongo db */
app.use(express.json(), express.urlencoded({ extended: true }));   /* This is required before routes*/

require('./routes/pet.routes')(app);  

app.listen(port, () => console.log(`Listening on port: ${port}`) );