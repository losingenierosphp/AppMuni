const { app, BrowserWindow } = require('electron')
const mysql = require('mysql')
/*
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
*/
function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800, //ancho de la ventana
    height: 600, //altura de la entana 
    frame: false, //ventana sin bordes 
   
    webPreferences: {
      nodeIntegration: true,
      devTools: false //bloquear el developer tools de los navegadores 
    }
  })

  // and load the index.html of the app.
  win.loadFile('vistas/index.html')
}

app.on('ready', createWindow)