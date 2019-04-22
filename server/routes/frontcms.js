var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var frontcms_controller = require('../controllers/frontcms');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', frontcms_controller.test);


router.post('/create', frontcms_controller.frontcms_create);



router.get('/getAll', frontcms_controller.frontcms_alls);

router.get('/:id', frontcms_controller.frontcms_details);

router.post('/update/:id', frontcms_controller.frontcms_update);

router.delete('/:id/delete', frontcms_controller.frontcms_delete);


module.exports = router;