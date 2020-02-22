const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Todo api is working!');
});

module.exports = router;
