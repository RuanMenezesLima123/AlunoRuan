const express = require('express');
const mongoose = require('mongoose');
const Usuario = require('./models/Usuario');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/login-app')
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Erro MongoDB:', err));

// Rota de cadastro (para teste)
app.post('/cadastro', async (req, res) => {
  const { email, senha } = req.body;

  const senhaHash = await bcrypt.hash(senha, 10);
  const usuario = new Usuario({ email, senha: senhaHash });

  try {
    await usuario.save();
    res.status(201).json({ mensagem: 'Usuário cadastrado!' });
  } catch (e) {
    res.status(400).json({ erro: 'Erro ao cadastrar usuário' });
  }
});

// Rota de login
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await Usuario.findOne({ email });
  if (!usuario) return res.status(400).json({ erro: 'Usuário não encontrado' });

  const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
  if (!senhaCorreta) return res.status(400).json({ erro: 'Senha incorreta' });

  res.json({ mensagem: 'Login bem-sucedido!' });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
