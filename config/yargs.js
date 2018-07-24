const opt = {
  base: {
    alias: "b",
    demand: true
  },
  limite: {
    alias: "l",
    default: 10
  }
};
const argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicar",opt)
  .command("Crear", "Genera un archivo con la tabla de multiplicar", opt).argv;

module.exports = {
  argv
}
