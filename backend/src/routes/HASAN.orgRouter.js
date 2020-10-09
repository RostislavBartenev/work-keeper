const express = require('express');
const orgController = require('../controllers/organizationController/organization');

const router = express.Router();

router.get('/:idOfUser', orgController.getByIdofUser);
router.post('/', orgController.create);
router.patch('/:id', orgController.update);
router.delete('/:id', orgController.delete);



module.exports = router;
