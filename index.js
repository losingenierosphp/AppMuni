const { app, BrowserWindow } = require('electron')
const mysql = require('mysql')

const connection = mysql.createConnection({
   host:'35.226.224.5',
   user: 'root',
   password:'root',
   database: 'dataMuni'
})

connection.connect()

connection.query('SELECT 1 + 1 AS result', function (error, results, fields) {
  if (error) throw error;
  console.log('1 + 1 = ', results[0].result); 
});

connection.end();  

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('vistas/index.html')
}

app.on('ready', createWindow)