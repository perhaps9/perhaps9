const path = require('path');
const { app, BrowserWindow, shell } = require('electron');

// Overwrite config with some electron-specific settings
const conf = require(path.join(process.cwd(), './config.conf'));
conf.autorun = false;
conf.listen = false;
conf.port = 8000;
conf.basicAuthMode = false;

let mainWindow = null

function main() {
  require('./server');
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, './public/favicon.ico')
  });
  mainWindow.loadURL(`http://localhost:8000/`)
  mainWindow.on('close', event => {
    mainWindow = null
  });
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });  
}

app.on('ready', main)