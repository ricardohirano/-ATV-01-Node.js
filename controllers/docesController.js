// Importando o Express com ES6 Modules
import express from 'express';

const router = express.Router();

router.get('/doces', function (req, res) {
  const doces = [
    {
      id: 1,
      nome: 'Bolo de Cenoura Caseiro com Cobertura de Chocolate',
      descricao: 'Bolo caseiro de cenoura fofinho com generosa cobertura de chocolate.',
      preco: 30.00,
      imagem: '/img/doces/bolo-cenoura.jpg',
      categoria: 'Bolos & Tortas'
    },
    {
      id: 2,
      nome: 'Bolo de Chocolate com Cobertura de Nutella',
      descricao: 'Bolo de chocolate irresistível coberto com Nutella.',
      preco: 29.90,
      imagem: '/img/doces/bolo-chocolate-nutella.jpg',
      categoria: 'Bolos & Tortas'
    },
    {
      id: 3,
      nome: 'Bolo Caseiro de Laranja com Açúcar Gelado',
      descricao: 'Bolo caseiro de laranja coberto com açúcar gelado.',
      preco: 28.00,
      imagem: '/img/doces/bolo-laranja.jpg',
      categoria: 'Bolos & Tortas'
    },
    {
      id: 4,
      nome: 'Bolo Caseiro de Limão',
      descricao: 'Bolo caseiro de limão refrescante e levinho.',
      preco: 26.00,
      imagem: '/img/doces/bolo-limao.jpg',
      categoria: 'Bolos & Tortas'
    },
    {
      id: 5,
      nome: 'Brioche de Leite Condensado e Coco',
      descricao: 'Brioche artesanal com leite condensado e coco ralado.',
      preco: 19.90,
      imagem: '/img/doces/brioche-coco.jpg',
      categoria: 'Bolos & Tortas'
    },
    {
      id: 6,
      nome: 'Brownie Bandeja',
      descricao: 'Brownie artesanal em bandeja, crocante por fora e cremoso por dentro.',
      preco: 14.50,
      imagem: '/img/doces/brownie.jpg',
      categoria: 'Bolos & Tortas'
    },
    {
      id: 7,
      nome: 'Brigadeiro Gourmet',
      descricao: 'Brigadeiro artesanal gourmet com cacau premium.',
      preco: 3.90,
      imagem: '/img/doces/brigadeiro.jpg',
      categoria: 'Doces'
    },
    {
      id: 8,
      nome: 'Mini Croissant de Nutella 100g',
      descricao: 'Mini croissants folhados recheados com Nutella. 100g.',
      preco: 7.50,
      imagem: '/img/doces/mini-croissant-nutella.jpg',
      categoria: 'Doces'
    },
    {
      id: 9,
      nome: 'Cupcake',
      descricao: 'Cupcake artesanal com cobertura de chocolate.',
      preco: 13.00,
      imagem: '/img/doces/cupcake.jpg',
      categoria: 'Doces'
    },
    {
      id: 10,
      nome: 'Donuts',
      descricao: 'Donuts artesanais polvilhados com açúcar.',
      preco: 9.00,
      imagem: '/img/doces/donuts.jpg',
      categoria: 'Doces'
    },
    {
      id: 11,
      nome: 'Sonho',
      descricao: 'Sonho fofinho polvilhado com açúcar.',
      preco: 10.00,
      imagem: '/img/doces/sonho.jpg',
      categoria: 'Doces'
    },
    {
      id: 12,
      nome: 'Mini Sonho – Bandeja com 8 unidades',
      descricao: 'Mini sonhos artesanais em bandeja com 8 unidades.',
      preco: 15.00,
      imagem: '/img/doces/mini-sonho.jpg',
      categoria: 'Doces'
    }
  ];

  res.render('doces', {
    title: 'Doces – Empório dos Pães',
    doces
  });
});

export default router;
