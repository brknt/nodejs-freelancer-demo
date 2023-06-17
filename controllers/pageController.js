const Portfolio = require('../models/Portfolio');

const getIndexPage = async (req, res) =>{
    const portfolios = await Portfolio.find({}).sort('-createdAt');
      
      res.status(200).render('index',{
        portfolios
      })
   
}

const getAddPage = (req, res) =>{
    res.status(200).render('add');
}

const getAboutPage = (req, res) =>{
    res.status(200).render('about');
}

const getContactPage = (req, res) =>{
    res.status(200).render('contact');
}


module.exports = {
    getIndexPage,
    getAddPage,
    getAboutPage,
    getContactPage
}