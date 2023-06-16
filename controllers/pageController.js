
const getIndexPage = (req, res) =>{
    res.status(200).render('index');
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