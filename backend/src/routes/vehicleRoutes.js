const { Router } = require('express');
const ctl = require('../controllers/vehicleController');
const router = Router();

router.post('/', ctl.create);
router.get('/', ctl.list);
router.get('/:id', ctl.getOne);
router.put('/:id', ctl.update);
router.delete('/:id', ctl.remove);

module.exports = router;