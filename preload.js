const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
});

contextBridge.exposeInMainWorld('api', {
  runBatAdmin: (batName) => {
    console.log('PRELOAD → MAIN :', batName); // debug
    return ipcRenderer.invoke('run-bat-admin', batName);
  }
});
