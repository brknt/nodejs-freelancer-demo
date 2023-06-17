const Portfolio = require('../models/Portfolio');
const fs = require('fs');


const createPortfolio =  async(req, res) => {
    try {
    
      
      let uploadDir = "public/uploads";
  
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
  
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
      }
  
      let uploadImage = req.files.image;
     
      let uploadPath = __dirname + "/../public/uploads/" + uploadImage.name;
      console.log(req.body);
      
      uploadImage.mv(uploadPath, async () => {
        await Portfolio.create({
          ...req.body,
          image: "/uploads/" + uploadImage.name,
        });
        res.redirect("/");
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        error,
      });
    }
  };





module.exports = {
    createPortfolio
    
}