// Importando o Express com ES6 Modules
import express from 'express';

const router = express.Router();

router.get('/lanches', function (req, res) {
  const lanches = [
    {
      id: 1,
      nome: 'Beirute de Filé Mignon',
      descricao: 'Pão sírio, filé mignon, queijo prato, ovo, bacon, alface, tomate e maionese. Acompanha batata frita.',
      preco: 54.00,
      imagem: '/img/lanches/beirute-file-mignon.jpg'
    },
    {
      id: 2,
      nome: 'Beirute Filé de Frango',
      descricao: 'Pão sírio, filé de frango, ovo, queijo prato, alface, tomate e maionese.',
      preco: 51.50,
      imagem: '/img/lanches/beirute-frango.jpg'
    },
    
    {
      id: 3,
      nome: 'Xangrilá',
      descricao: 'Contra filé, queijo, bacon, maionese no pão ciabatta e batata frita.',
      preco: 37.50,
      imagem: '/img/lanches/xangrila.jpg'
    },
    
    {
      id: 4,
      nome: 'Tupi',
      descricao: 'Hambúrguer artesanal de fraldinha 120g, queijo cheddar, alface, tomate, maionese no pão australiano e batata frita.',
      preco: 19.90,
      imagem: '/img/lanches/tupi.jpg'
    },
    {
      id: 5,
      nome: 'Arapongal',
      descricao: 'Contrafilé, queijo, calabresa, bacon, alface, tomate, rodelas de pão francês e batata frita.',
      preco: 37.50,
      imagem: '/img/lanches/arapongal.jpg'
    },
    {
      id: 6,
      nome: 'São Francisco',
      descricao: 'Hambúrguer (120g), maionese temperada, bacon, ovo frito, muçarela, alface e tomate. Acompanha batata frita.',
      preco: 34.50,
      imagem: '/img/lanches/sao-francisco.jpg'
    }
  ];

  res.render('lanches', {
    title: 'Lanches – Empório dos Pães',
    lanches
  });
});

export default router;
