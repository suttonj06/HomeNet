var express = require('express');
var router = express.Router();
const controller = require('../../public/controllers/lights');

router.route('/')
  .get(controller.list)
  .post(controller.new);

router.route('/:id')
  .get(controller.get)
  .put(controller.update)
  .delete(controller.delete);

router.param('id', controller.id);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lights' });
});

module.exports = router;
