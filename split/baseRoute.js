const router = require('express').Router();


router.get('/',(request,response) => {
    response.send('<h1>hello world </h1>');
});

module.exports = router;
