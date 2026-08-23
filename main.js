const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    minWidth: 1024,
    minHeight: 700,
    title: "Grand Ceylon Enterprise ERP",
    autoHideMenuBar: true, // Browser menus සම්පූර්ණයෙන්ම සඟවයි
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Load our single-file ERP system
  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
