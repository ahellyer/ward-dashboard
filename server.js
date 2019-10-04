const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function(req, res) {
  return res.send('pong');
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);


// (1) Require Component + React
var Dashboard = require('./src/App'); // Your react app

// (2) React.createFactory
var App = React.createFactory(Dashboard);

// (3) React.renderToString
var reactHtml = React.renderToString(App({})); // make html to send to client

// (4) Include in template as variable
res.render('index.ejs', { reactOutput: reactHtml }); // give template html

// (5) Output in template (index.ejs)
<div id="root"> <%- reactOutput %> </div>