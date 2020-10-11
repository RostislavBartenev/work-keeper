const express = require('express');
const departController = require('../controllers/departmentController/department');

const router = express.Router();

router.get('/', departController.getAllInfo);
router.post('/', departController.create);
router.patch('/:id', departController.update);
router.delete('/:id', departController.delete);



module.exports = router;
