const express = require('express');
const router = express.Router();

const mySqlCon = require('../database')

router.get('/', (req, res) => {
    mySqlCon.query('select * from employees;', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    })
});


// GET An Employee
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mySqlCon.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});


// INSERT An Employee
router.post('/', (req, res) => {
    const { id, name, salary } = req.body;
    console.log(id, name, salary);
    const query = `
      CALL addOrEdit(?, ?, ?);
    `;
    mySqlCon.query(query, [id, name, salary], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Employeed Saved' });
        } else {
            console.log(err);
        }
    });

});


router.put('/:id', (req, res) => {
    const { name, salary } = req.body;
    console.log(req.params)
    const { id } = req.params
    console.log(id, name, salary);
    const query = `
      CALL addOrEdit(?, ?, ?);
    `;
    mySqlCon.query(query, [id, name, salary], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Employeed updated' });
        } else {
            console.log(err);
        }
    });

});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    mySqlCon.query('delete  FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Employeed deleted' });
        } else {
            console.log(err);
        }
    });

})




module.exports = router;
