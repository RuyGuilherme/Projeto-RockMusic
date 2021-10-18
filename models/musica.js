const database = require("./../database");
const Sequelize = require("sequelize");
console.log();

const musica = database.define("musica", {
     
  id: {
    type: Sequelize.undefined,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: Sequelize.STRING,
  imagem: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: false,
  updatedAt: false,
});

module.exports = musica;

musica = [{id: 1, nome: "ACϟDC", 
           descricao: "AC/DC (estilizado como ACϟDC) é uma banda australiana de rock formada em Sydney, Austrália em 1973, pelos irmãos escoceses Malcolm e Angus Young. O estilo musical da banda é normalmente classificado como hard rock e até mesmo blues rock. Integrantes: Angus Young; Phil Rudd; Stevie Young; Brian Johnson; Cliff Williams Ex-integrantes: Malcolm Young; Dave Evans; Larry Van Kriedt; Colin Burgess; Rob ... Gênero(s): Hard rock, rock and roll, blues rock ", 
           imagem: "https://images.app.goo.gl/wo9pGHarSBSBBtHCA"}, 
           {id: 2, nome: "Kiss", 
           descricao: "Kiss é uma banda de hard rock dos Estados Unidos, formada em Nova Iorque em 1973 por Paul Stanley e Gene Simmons. Conhecida mundialmente por suas maquiagens, e por seus concertos que incluem guitarras esfumaçantes, cuspir fogo e sangue, pirotecnias e outros efeitos.", 
           imagem: "https://images.app.goo.gl/56fV7XYh35XX1Fsx7"},
           {id: 3, nome: "Judas Priest", 
           descricao: "Judas Priest é uma banda britânica de heavy metal criada em meados de 1969, em Birmingham. Formada por K. K. Downing e Ian Hill, a banda é considerada uma das precursoras do heavy metal moderno, sendo um dos grupos mais influentes na história do gênero.", 
           imagem: "https://images.app.goo.gl/csrhjNkBVXCtdMVF7"},
           {id: 4, nome: "Judas Priest", 
           descricao: "Judas Priest é uma banda britânica de heavy metal criada em meados de 1969, em Birmingham. Formada por K. K. Downing e Ian Hill, a banda é considerada uma das precursoras do heavy metal moderno, sendo um dos grupos mais influentes na história do gênero.", 
           imagem: "https://images.app.goo.gl/csrhjNkBVXCtdMVF7"},
           {id: 5, nome: "Iron Maiden", 
           descricao: "é uma banda britânica de heavy metal, formada em 1975 pelo baixista Steve Harris, ex-integrante das bandas Gypsy's Kiss e Smiler. O nome `Iron Maiden`, homônimo de um instrumento de tortura medieval.", 
           imagem: "https://images.app.goo.gl/Hu2ELiLHshg6Ced76"},
          ]