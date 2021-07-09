const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET items
router.get('/', (req, res) => {
    // Get all of the items from the database
    const queryText = `SELECT * FROM items`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) =>{
    console.log('From the server', req.body);
    const newItem= req.body;
    const queryText= `INSERT INTO items (item, quantity, unit, purchase)
    VALUES ($1, $2, $3, $4);`;
    pool.query (queryText, [newItem.item, newItem.quantity, newItem.unit, newItem.purchase])
    .then((response)=>{
        res.sendStatus(201);
    }) .catch ((error)=>{
        console.log('Error in posting to server', error);
        res.sendStatus(500);
    });
});

module.exports = router;