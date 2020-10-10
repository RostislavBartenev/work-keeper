const express = require('express');
const orgController = require('../controllers/organizationController/organization');

const router = express.Router();

router.get('/', orgController.getAllInfo);
router.post('/', orgController.create);
router.patch('/:id', orgController.update);
router.delete('/:id', orgController.delete);



module.exports = router;
