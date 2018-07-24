const { crearAchivo, listarTabla } = require("./multiplicar/multiplicar");
const { argv } = require('./config/yargs')


//console.log(argv);

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;
  case "crear":
    crearAchivo(argv.base, argv.limite)
      .then(archivo => {
        console.log(`Achivo creado: ${archivo}`);
      })
      .catch(err => {
        console.log(err);
      });
    break;

  default:
    console.log("Comando No Reconocido");
    break;
}

/* let parametro = argv[2];
let base = parametro.split('=')[1]

crearAchivo(base)
.then((archivo) => {
  console.log(`Achivo creado: ${archivo}`);
}).catch((err) => {
  console.log(err);
}); */
