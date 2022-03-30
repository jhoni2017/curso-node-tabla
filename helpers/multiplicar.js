const fs= require('fs');
const colors=require('colors');

const crearArchivo=async( base=5, listar=true, hasta=10 )=>{

    try {

       

        let salida='';
        let consola='';

        for(let i=1; i<=hasta;i++){
            salida+=` ${base} x ${i} =${base*i}\n `;
            consola+=` ${base} ${'X'.green} ${i} ${'='.green} ${base*i}\n `;


        }
        if (listar) {
            console.log('==========================='.green);
            console.log(`       TABLA DE BASE:`.green,colors.magenta(base), '  HASTA '.green,colors.magenta(hasta));
            console.log('==========================='.green);

            console.log(consola)
            
        }

        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); 

        return `tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }

        

}

module.exports={
    crearArchivo:crearArchivo
}