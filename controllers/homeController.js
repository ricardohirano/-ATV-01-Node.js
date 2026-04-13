// Importando o Express com ES6 Modules
import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
  const destaques = [
    {
      nome: 'Pão Francês Artesanal',
      descricao: 'Fresquinho, saindo do forno todos os dias. Crocante por fora, macio por dentro.',
      icon: '🥖',
      tag: 'Clássico'
    },
    {
      nome: 'Croissant de Manteiga',
      descricao: 'Feito com manteiga francesa importada, camadas folhadas e aroma inconfundível.',
      icon: '🥐',
      tag: 'Especial'
    },
    {
      nome: 'Bolo de Chocolate Belga',
      descricao: 'Receita exclusiva com chocolate belga 70% cacau. Uma explosão de sabor.',
      icon: '🎂',
      tag: 'Destaque'
    },
    {
      nome: 'Coffee Break Premium',
      descricao: 'Soluções completas para eventos e reuniões. Monte o seu combo ideal.',
      icon: '☕',
      tag: 'Empresarial'
    }
  ];

  res.render('index', {
    title: 'Empório dos Pães – Início',
    destaques
  });
});

export default router;
