const express = require('express');
const router = express.Router();

// ASN Schema
const ASN = require('../models/asn');

// Login data
router.get('/login', (req, res, next) => {
   ASN.find()
    .exec()
    .then(data => {
        const response = {
            code: 200,
            status: 'ok',
            data: {
                nip: data.nip,
                name: data.name,
                pos: data.pos,
                bossName: data.bossName,
                bossPos: data.bossPos,
                city: data.city
            }
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            code: 500,
            status: 'not ok',
            error: err
        });
    })
});


// Register data
router.post('/register', (req, res, next) => {
    const asn = new ASN({
        nip: req.body.nip,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        pos: req.body.pos,
        bossName: req.body.bossName,
        bossPos: req.body.bossPos,
        city: req.body.city
    });
    asn.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                code: 201,
                status: 'ok'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 500,
                status: 'not ok',
                error: err
            });
        });
});


module.exports = router;