const { rejects } = require('assert');
const fs =  require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
  
  try {
    
    let salida = '';
    let consola = '';
    
    for (let i = 1; i <= hasta; i++) {
      salida += `${ base } x ${ i } = ${ base * i }\n`;
      consola += `${base} ${ 'x'.red } ${i} ${ '='.red} ${base * i}\n`;
    }
    
    if( listar === true ){
      console.log("=====================".rainbow);
      console.log("     Tabla del: ", base);
      console.log("=====================".rainbow);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
  
    return colors.red(`tabla-${ base }.txt`);
  } catch (err) {
    throw err;
  }


};

module.exports = {
  crearArchivo
}