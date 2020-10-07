const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();
const path = require('path');

const videoChatRouter = require('./src/routes/videoChat/index');

app.set('port', process.env.PORT || 3006);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/videochat', videoChatRouter);

app.listen(app.locals.settings.port, () => {
    console.log('Server started on port ' + app.locals.settings.port);
})

