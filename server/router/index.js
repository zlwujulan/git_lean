var express = require('express');
var router = express.Router();
// get prod pages.
/* router.get('/prod/:code/:type/!**.htm', (req, res, next) => {
  var session = req.session || {};

  res.render(req.params.type, {
    bizNo:session.bizNo,
    orgCode:session.orgCode,
    prodCode:session.prodCode,
    bizType:session.bizType,
    cdn_url : cdn_server_addr,
    uc : req.get('User-Agent').indexOf('UCBrowser') != -1,
    screen : `${req.params.code}/${req.params.type}/${req.params['0']}`
  })
});*/

module.exports = router;
