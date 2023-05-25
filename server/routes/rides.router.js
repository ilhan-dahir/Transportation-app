const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
    sqlText = `SELECT * FROM "rides";`;
    pool
        .query(sqlText)
        .then((results) => res.send(results.rows))
        .catch((error) => {
            console.log('Error making SELECT for rides:', error);
            res.sendStatus(500);
        });


});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;
