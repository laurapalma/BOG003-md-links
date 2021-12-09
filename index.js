/* module.exports = () => {
  // ...
}; */

//Fyle System modulo nativo de Node.js, devuelve un objeto
const fs = require('fs');
//
const path = require('path');

//Guarda la ruta ingresada por el usuario
const routes = './archivos/readme-prueba.md'; 
console.log('Bienvenido a MDLinks')

//
const input1 = process.argv[2]

//Se realiza una promesa para leer el archivo
const readingFiles = (route) => {
  return new Promise((resolve, reject)=>{
    fs.readFile(route, 'UTF8', (error, data) => {
      if (error) {
        reject('La ruta no es la correcta')        
      }else{
        resolve(`Felicitaciones puedes continuar : ${data}`)
      }
    })
  })
}

// Resolve convierte la ruta relativa a absoluta 
const routeAbsolute = path.resolve(routes)
console.log(`La ruta absoluta es: ${routeAbsolute}`) 

const result = (route) => {
  /* console.log(input1) */
  return readingFiles(route)
      .then((data) => {
        console.log(data)
      }).catch((error)=> {
        console.log(error)
      })
}

/* resultado(input1) */
result(routes)


/* const pathExists = (ruta) => {
  if(fs.existsSync(ruta)){
    console.log("Felcitaciones puedes continuar")
  } else {
    console.log("lo siento la ruta no existe")
  }
}
pathExists("./archivos/readme-prueba.md")  */