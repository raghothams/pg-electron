var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  mainWindow = new BrowserWindow( {width: 1100, height: 800} );
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

});
