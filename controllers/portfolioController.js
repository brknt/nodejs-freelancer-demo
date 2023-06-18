const Portfolio = require("../models/Portfolio");
const fs = require("fs");

const createPortfolio = async (req, res) => {
  try {
    let uploadDir = "public/uploads";

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
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
      status: "fail",
      error,
    });
  }
};

const deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ _id: req.params.id });
    let deletedImage = __dirname + "/../public" + portfolio.name;

    if (fs.existsSync(deletedImage)) {
      fs.unlinkSync(deletedImage);
    }
    await Portfolio.findByIdAndRemove(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

const getEditPage = async (req, res) => {
  const portfolio = await Portfolio.findById({ _id: req.params.id });
  res.status(200).render("edit", {
    portfolio: portfolio,
  });
};

const updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById({ _id: req.params.id });
    portfolio.title = req.body.title;
    portfolio.description = req.body.description;
    portfolio.save();

    res.redirect("/");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

module.exports = {
  createPortfolio,
  deletePortfolio,
  getEditPage,
  updatePortfolio,
};
