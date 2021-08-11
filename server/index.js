const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');
    const mongoose = require("mongoose");

    const indexRouter = require('./routes/index');

    const app = express();

    //Mongoose Connection
    const mongoDB = "mongodb+srv://christianAdmin:mongopassword@cluster0.ubkpu.mongodb.net/leanIdea?retryWrites=true&w=majority";
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;

    db.on("connected", () => console.log("connected to mongo (*_*)"));
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/api', indexRouter);

    app.get('*', (req, res) => {
        return handle(req, res)
    })

    app.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})