require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

let message = "";

const Musica = require("./models/musica");


app.get("/login/:id", (req, res) => {
  res.render("detalhes",{message});
});

app.get("/login", async (req, res) => {
  
  const musica = await Musica.findAll(); 

  res.render("login", {
    musica, message
  });
});

app.get("/", async (req, res) => {
  
  const musica = await Musica.findAll(); 

  res.render("index", {
    musica, message
  });
});

app.get("/detalhes/:id", (req, res) => {
  res.render("detalhes",{message});
});

app.get("/detalhes/:id", async (req, res) => {

  const musica = await Musica.findByPk(req.params.id); 

  res.render("detalhes", {
    musica,
  });
});

app.get("/criar", (req, res) => {
  res.render("criar", {message});
});

app.post("/criar", async (req, res) => {

  const { nome, descricao, imagem } = req.body;

  if (!nome) {
    res.render("criar", {
      message: "Nome é obrigatório",
    });
  }

  else if (!imagem) {
    res.render("criar", {
      message: "Imagem é obrigatório",
    });
  }

  else {
    try {
      const musica = await Musica.create({
        nome,
        descricao,
        imagem,
      });

      res.redirect("/");
    } catch (err) {
      console.log(err);

      res.render("criar", {
        message: "Ocorreu um erro ao cadastrar da sua Musica!",
      });
    }
  }
});

app.get("/editar/:id", async (req, res) => {

  const musica = await Musica.findByPk(req.params.id);

  if (!musica) {
    res.render("editar", {
      filme,
      message: "Musica não encontrado!",
    });
  }

  res.render("editar", {
    musica, message
  });
});

app.post("/editar/:id", async (req, res) => {

  const musica = await Musica.findByPk(req.params.id);

  const { nome, descricao, imagem } = req.body;

  musica.nome = nome;
  musica.descricao = descricao;
  musica.imagem = imagem;

  const musicaEditado = await musica.save();

  res.render("editar", {
    musica: musicaEditado,
    message: "Musica editada com sucesso!",
  });
});

app.get("/deletar/:id", async (req, res) => {
  const musica = await Musica.findByPk(req.params.id);

  if (!musica) {
    res.render("deletar", {
      musica,
      message: "Musica não foi encontrado!",
    });
  }

    res.render("deletar", {
    musica, message
  });
});

app.post("/deletar/:id", async (req, res) => {
  const musica = await Musica.findByPk(req.params.id);

  if (!musica) {
    res.render("deletar", {
      mensagem: "Musica não foi encontrado!",
    });
  }

  await musica.destroy();

  res.redirect("/");
});

app.post("/", async (req, res) => {

  function login() {
         let login = document.querySelector('#login').value
         let senha = document.querySelector('#senha').value
         document.querySelector('#login').style.display = 'block'
  
         setTimeout(() => {
                if (login.trim() != 'rockmusic' && senha.trim() != '1234') {
                        res.render("index", {
                          message: "loading executado com sucesso",
                    });
             } else {
                       res.render("index", {
                          message: "loading errado tente novamente",
                    }); 
             }

    document.querySelector('#login').style.display = 'none'
}, 1000)
}

// FUNÇÃO PARA LOGAR COM ENTER
const enterLogin = document.querySelector('#senha')
        enterLogin.addEventListener('keyup', (e) => {
        let tecla = e.which || e.keycode
        if (tecla == 13) {
         login()
       }
   })
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);

