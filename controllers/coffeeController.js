// Importando o Express com ES6 Modules
import express from 'express';

const router = express.Router();

router.get('/coffee-break', function (req, res) {

  const bebidas = [
    { id: 1, nome:'Café de Coador', descricao: '1800ml', preco: 40.00, imagem: '/img/coffeeBreak/cafe-coador.jpg' },
    { id: 2,  nome:'Chá', descricao: '1800ml',  preco: 30.00, imagem: '/img/coffeeBreak/cha.jpg' },
    { id: 3,  nome: 'Leite Puro', descricao: '1800ml',  preco: 35.00, imagem: '/img/coffeeBreak/leite.jpg' },
    { id: 4,  nome: 'Suco de Caixa',  descricao: '1L', preco: 11.00, imagem: '/img/coffeeBreak/suco-caixa.jpg' },
    { id: 5,  nome: 'Chocolate Quente', descricao: '1800ml',  preco: 48.00, imagem: '/img/coffeeBreak/chocolate-quente.jpg' },
    { id: 6,  nome: 'Suco Natural One', descricao: '900ml',   preco: 23.90, imagem: '/img/coffeeBreak/suco-natural.jpg' }
  ];

  const miniSalgados = [
    
    { id: 1,  nome: 'Chipa', descricao: 'por unidade', preco: 3.50,  imagem: '/img/coffeeBreak/chipa.jpg' },
    { id: 2, nome: 'Barquete', descricao: 'por unidade', preco: 3.00,  imagem: '/img/coffeeBreak/barquete.jpg' },
    { id: 3, nome: 'Empada de Frango', descricao: 'por unidade', preco: 4.00,  imagem: '/img/coffeeBreak/empada-frango.jpg' },
    { id: 4, nome: 'Italianinho – Creme de Queijo, Muçarela, Manjericão e Tomate-cereja', descricao: 'por unidade', preco: 3.80, imagem: '/img/coffeeBreak/italianinho.jpg' },
    { id: 5, nome: 'Italianinho – Creme de Queijo e Alho Poró', descricao: 'por unidade', preco: 3.50, imagem: '/img/coffeeBreak/italianinho.jpg' }
  ];

  const miniSanduiches = [
    { id: 1,  nome: 'Misto no Pão Francês', descricao: 'por unidade', preco: 5.00, imagem: '/img/coffeeBreak/miniMisto.jpg' },
    { id: 2,  nome: 'Mini Australiano', descricao: 'Maionese, alface, tomate, salame e muçarela', preco: 3.00, imagem: '/img/coffeeBreak/miniSanduiche.jpg' },
    { id: 3,  nome: 'Mini Pão de Leite', descricao: 'Maionese, alface, tomate, peito de peru e queijo branco', preco: 3.00, imagem: '/img/coffeeBreak/miniSanduiche.jpg' },
    { id: 4,  nome: 'Mini Australiano Retangular', descricao: 'Abobrinha grelhada, azeite extra virgem, manjericão e pasta de tomate', preco: 3.00, imagem: '/img/coffeeBreak/miniSanduiche.jpg' },
    { id: 5,  nome: 'Mini Pão de Batata', descricao: 'Muçarela de búfala e pasta de ricota temperada com azeite e orégano', preco: 3.00, imagem: '/img/coffeeBreak/miniSanduiche.jpg' },
    
  ];

  res.render('coffee-break', {
    title: 'Coffee Break – Empório dos Pães',
    bebidas,
    miniSalgados,
    miniSanduiches
  });
});

export default router;
