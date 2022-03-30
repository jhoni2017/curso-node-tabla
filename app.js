

const {crearArchivo}=require('./helpers/multiplicar');
const colors=require('colors');
//require('colors');
const argv=require('./config/yargs');

console.clear();


console.log(argv);

//const base=5;

  crearArchivo( argv.b, argv.l, argv.h)
  .then(nombreArchivo=>console.log(nombreArchivo.rainbow, 'creado'))
  .catch(err=>console.log(err));