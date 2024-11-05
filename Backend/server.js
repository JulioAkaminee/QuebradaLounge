
const express = require('express');
const mysql = require('mysql2');
const app = express();
const porta =  5001;

//Fazendo conexão com o banco de dados
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quebradaLounge',
});

//Verificando conexão com banco de dados
conexao.connect((err) =>{
    if(err){
        console.error('Erro de conexão ' + err.stack);
        return;
    }
    console.log('Conectado ao banco de dado ')
})


//Rota principal do meu servidor
app.get('/', (req, res) => {
  res.send('página principal');
});


//Rota para cadastro de usuarios
app.get('/cadastroUsuario', (req, res) => {
    conexao.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
          console.error(err);
          return;
        }
        res.send(results); });
    });

//Subindo o servidor na porta da variavel porta    
app.listen(porta, () => {
  console.log(`server rodando na porta: http://localhost:${porta}`);
});
