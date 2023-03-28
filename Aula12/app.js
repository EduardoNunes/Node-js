//criando rotas usando express e passando parâmetros

const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

//config
    //template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Body Parser
    app.use(bodyParser.urlencoded({extend: false}))
    app.use(bodyParser.json())

    // Conexão com o banco de dados MySQL
    const sequelize = new Sequelize('psytrancelegends', 'root', '', {
        host: "localhost",
        dialect: 'mysql'
    })
// Rotas

    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo);
    })

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
});
