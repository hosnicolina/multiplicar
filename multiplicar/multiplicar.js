const fs = require("fs");

let listarTabla = (base,limite = 10)=>{
  if (!Number(limite) || !Number(base)) {
     console.log('Los agumentos no son validos')
     return
  }
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${ base * i}`);
  }
}

let crearAchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    let data = "";

    if (!Number(base)) {
      reject(`${base} no es un numero`);
      return;
    }
    if (!Number(limite)) {
      reject(`${limite} no es un numero`);
      return;
    }

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`tabla-${base}`);
    });
  });
};

module.exports = {
  crearAchivo,
  listarTabla
};
