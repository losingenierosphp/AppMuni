const { app, BrowserWindow,Menu } = require('electron')
const shell = require('electron').shell
const mysql = require('mysql')


const connection = mysql.createConnection({
   host:'localhost',
   user: 'root',
   port:'8080',
   password:'root',
   database: 'app-muni'
})

connection.connect(function(err){
  if(err){
    console.log("conexion fallida");
    
  }else{
   console.log("conexion exitosa")
  }
})

connection.query('SELECT 1 + 1 AS result', function (error, results, fields) {
  if (error) throw error;
  console.log('1 + 1 = ', results[0].result); 
});

connection.end();  

function createWindow () {
  // crea una ventana 
  let win = new BrowserWindow({
    width: 800, //ancho de la ventana
    height: 600, //altura de la entana 
   // frame: false, //ventana sin bordes 
    icon: "vistas/img/icon.png",
    webPreferences: {
      nodeIntegration: true,
      devTools: true //bloquear el developer tools de los navegadores 
    }
  }
  )

  // and load the index.html of the app.
  win.loadFile('vistas/index.html')

  //menu personalizado de la ventana electron 
      var menu = Menu.buildFromTemplate([
        {
            label: 'INICIO',
            submenu: [
                {label:'ir al la documentacion del proyecto',
                click() { 
                  shell.openExternal('https://github.com/losingenierosphp/AppMuni')
              } 
              },
              {label:'Cerrar', 
                click() { 
                    app.quit() 
                } }
            ]
        }
    ])
    Menu.setApplicationMenu(menu); 
      //fin menu personalizado de la ventana electron 
}


app.on('ready', createWindow)