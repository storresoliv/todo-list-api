const express = require('express');
const morgan = require('morgan');
const app = express();

// config
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// routes
app.use('/api', require('./routes/index.js'));
app.use('/api/items', require('./routes/items.js'));

// start server
app.listen(app.get('port'), () => {
    console.log(`starting server on port ${app.get('port')}`);
});