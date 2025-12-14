const { app, BrowserWindow , ipcMain} = require('electron/main')
const path = require('node:path')
const { spawn } = require('child_process'); 
function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('HTML/index.html')
}


ipcMain.handle('run-bat-admin', (event, batName) => {
  const allowedBats = ['Window.bat', 'glpi.bat', 'Rufus.bat','v.bat', 'renew.bat', 'ClearDns.bat', 'Office.bat', 'Disk.bat', 'Hiren.bat'];

  if (!allowedBats.includes(batName)) {
    throw new Error('BAT non autorisé');
  }

  const basePath = app.isPackaged
    ? path.join(process.resourcesPath, 'scripts')
    : path.join(__dirname, 'scripts');

  const batPath = path.join(basePath, batName);

  spawn('powershell.exe', [
    '-Command',
    `Start-Process "${batPath}" -Verb RunAs`
  ], {
    windowsHide: true
  });
});



app.setPath('userData', path.join(app.getPath('appData'), 'FlemmeCache'));

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

