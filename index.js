// Importando o Express com ES6 Modules
import express from 'express';

import homeController from './controllers/homeController.js';
import lanchesController  from './controllers/lanchesController.js';
import docesController    from './controllers/docesController.js';
import coffeeController   from './controllers/coffeeController.js';

const app = express();

// View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rotas
app.use("/", homeController );
app.use("/", lanchesController );
app.use("/", docesController );
app.use("/", coffeeController );

const port = 8080;
app.listen(port, function(erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
    }
});
