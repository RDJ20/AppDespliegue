const express = require('express');
const userController = require('./controller');

const router = express.Router();

router.post('/usuarios', userController.create);
router.get('/usuarios/:id', userController.read);
router.put('/usuarios/:id', userController.update);
router.delete('/usuarios/:id', userController.delete);

module.exports = router;