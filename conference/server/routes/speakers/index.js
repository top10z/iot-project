const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/',(req, res, next) =>{
        return res.send('All Speakers');
    });

    router.get('/:name',(req, res, next) =>{
        return res.send(`Speakers detail page for ${req.params.name}`);
    });

    return router;
}