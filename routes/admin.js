const express = require('express');
const News = require('../models/news');
const router = express.Router();

router.all('*', (req, res, next) => {
  if (!req.session.admin) {
    res.redirect('login');

    return;
  };
  next();
})

/* GET home page. */
router.get('/', (req, res) => {

  // const newsDate = new News({
  //   title: 'Tytuł testowy',
  //   description: 'Opis'
  // })

  // newsDate.save((err) => {
  //   console.log(err);
  // });


  res.render('admin/index', {
    title: 'Admin'
  });
});

router.get('/news/add', (req, res) => {
});

module.exports = router;