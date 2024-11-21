const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 5000;

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'quebradaLounge',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar com o banco:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados');
});

// Habilitar CORS para aceitar requisições de outras origens (como o frontend)
app.use(cors());

// Middleware para processar JSON
app.use(bodyParser.json());

// Rota para cadastrar usuário
app.post('/cadastrar', (req, res) => {
  const { nomeCompleto, cpf, email, numTelefone, senha } = req.body;

  // Verifique se todos os campos são fornecidos
  if (!nomeCompleto || !cpf || !email || !numTelefone || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  // Verificando se o email já existe no banco
  const checkEmailQuery = 'SELECT * FROM usuarios WHERE email = ?';
  db.execute(checkEmailQuery, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao verificar email no banco de dados.' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Email já cadastrado.' });
    }

    // Inserir novo usuário no banco
    const insertQuery = 'INSERT INTO usuarios (nome_completo, cpf_usuario, email, telefone_usuario, senha_hash) VALUES (?, ?, ?, ?, ?)';
    db.execute(insertQuery, [nomeCompleto, cpf, email, numTelefone, senha], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
      }
      res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
    });
  });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
