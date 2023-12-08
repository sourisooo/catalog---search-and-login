

const { Router } = require('express');
const indexcontroller = require('./controller/indexcontroller');



const router = Router();


router.get('/', indexcontroller.rendersearch);

router.post('/', indexcontroller.login);



module.exports = router;