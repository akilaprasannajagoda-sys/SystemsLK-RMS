const { app, BrowserWindow } = require('electron');

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

  // 🌐 LIVE CLOUD AUTO-SYNC (ඔබ Code එක වෙනස් කළ සැණින් සියලු PC වල Update වේ)
  mainWindow.loadURL('https://akilaprasannajagoda-sys.github.io/SystemsLK-RMS/');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
