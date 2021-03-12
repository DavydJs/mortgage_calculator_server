const {Router} = require('express');
const router = Router();
const controller = require('../controllers/bank');

router.get('/receive', controller.receive);
router.post('/create', controller.create);
router.put('/edit',controller.update);
router.delete('/delete', controller.remove);
router.post('/calculation', controller.addCalculation);
router.get('/history', controller.show);

module.exports = router;