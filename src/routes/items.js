const { Router } = require('express');
const router = Router();

const items = [{ id: 1, text: 'item text', active: false }];

const validateParams = (params) => params.text;

const findByID = (id) => items.find(item => item.id == id);

router.get('/', (req, res) => {
    res.json(items);
});

router.get('/:id', (req, res) => {
    const item = findByID(req.params.id);

    if (item) {
        return res.json(item);
    }

    res.status(404).json({ error: `Item ${req.params.id} is not found` });
});

router.post('/', (req, res) => {

    if (validateParams(req.body)) {
        const newItem = {
            id: Date.now(),
            text: req.body.text,
            active: true
        }

        items.push(newItem);

        console.log(newItem)

        return res.status(201).json(newItem);
    }

    res.json({ error: 'Missing `text` attribute' });
});

router.delete('/:id', (req, res) => {
    res.status(500).json({ error: 'DELETE method is not implemented yet' });
});

module.exports = router;