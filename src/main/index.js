import { app, BrowserWindow,ipcMain } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development' ?
    `http://localhost:9080` :
    `file://${__dirname}/index.html`

function createWindow() {
    //启动server

    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        height: 768,
        useContentSize: true,
        width: 1024,
        frame: false,
        minWidth: 1024,
        minHeight: 768

    })

    mainWindow.setTitle("软帝云音乐·杨标");
    mainWindow.loadURL(winURL)

    mainWindow.on('closed', () => {
        mainWindow = null
    });
    mainWindow.setMenu(null);
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});
ipcMain.on("window-close",()=>{
    if(mainWindow!==null){
        app.quit();
    }
});
ipcMain.on("window-min",()=>{
    if(mainWindow!==null){
        mainWindow.minimize();
    }
});
ipcMain.on("window-max",()=>{
   if(mainWindow!=null){
        if(mainWindow.isMaximized()){
            mainWindow.restore();  
        }else{
            mainWindow.maximize(); 
        }
   }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */