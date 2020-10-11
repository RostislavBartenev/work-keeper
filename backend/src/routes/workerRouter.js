const express = require('express');
const workerController = require('../controllers/workerController/worker');

const router = express.Router();

router.get('/', workerController.getAllInfo);
router.post('/', workerController.create);
router.patch('/:id', workerController.update);
router.delete('/:id', workerController.delete);



module.exports = router;
