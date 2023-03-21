const fs = require("fs");
const Tour = require("../Modal/tourModel");
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../starter/dev-data/data/tours-simple.json`)
);

const getAllTours = async(req, res) => {
  try {
    const tours = await Tour.find({})
    res.status(200).json({
    status: "success",
    data:  tours ,
    })
  } catch (error) {
    res.status(404).json({
      status: "failure",
      data: error
      })
  }
}

const getToursById = async (req, res) => {
  try {
    console.log(req.params.id)
    const tour = await Tour.findOne({_id:req.params.id}) 
    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      status: "failure",
      data: error
    });
  }
};

const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    console.log(newTour)
    res.status(200).json({
      status: "success",
      result: newTour
    });
    
  } catch (error) {
    res.status(404).json({
      status: "failure",
      result: error
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id,req.body,{
      new: true,
      // runValidators:true
    })
    res.status(200).json({
      status: "success",
      result: tour
    });
  } catch (error) {
    res.status(404).json({
      status: "failure",
      result: error
    });
  }
};

const deleteTour = async(req,res)=>{
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      result: null
    })
  } catch (error) {
    res.status(404).json({
      status: "failure",
      result: error
    });
  }
}
//middleware functions
const checkid = (req, res, next, val) => {
  const id = +val;
  if (id > tours.length) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Tour Id",
    });
  }
  next();
};

const checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing Price or Name",
    });
  }
  next();
};

module.exports = {
  updateTour,
  getAllTours,
  createTour,
  getToursById,
  deleteTour,
  checkid,
  checkBody,
}
