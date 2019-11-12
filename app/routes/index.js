// Server Routes
const express = require('express');
const router = express.Router();
// Controllers
const Obras = require('../controllers/obras');

router.get('/', (req, res) => {
    console.log(req.query);

    if(req.query.compositor && req.query.duracao) {
        console.log(`Compositor: ${req.query.compositor}\nDuracao: ${req.query.duracao}`);

        Obras.list({compositor: req.query.compositor, duracao: { $gt: req.query.duracao } })
            .then(data => res.jsonp(data))
            .catch(err => res.jsonp(err));
    }
    else if( req.query.ano ) {
        console.log(`Ano: ${req.query.ano}`);

        Obras.list({ anoCriacao: req.query.ano })
            .then(data => res.jsonp(data))
            .catch(err => res.status(500).jsonp(err));
    }
    else if( req.query.periodo ) {
        console.log(`Periodo ${req.query.periodo}`);

        Obras.list({ periodo: req.query.periodo})
            .then(data => res.jsonp(data))
            .catch(err => res.status(500).jsonp(err));
    }
    else {
        Obras.list()
            .then(data => res.jsonp(data))
            .catch(err => res.status(500).jsonp(err));
    }

});

router.get('/:id', (req, res) => {
    Obras.list({ _id: req.params.id})
        .then(data => res.jsonp(data))
        .catch(err => res.status(500).jsonp(err));
});

// Export Routes for Index
module.exports = router;