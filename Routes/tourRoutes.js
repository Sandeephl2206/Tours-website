const express = require("express");
const router = express.Router()
const tourController = require("../Controller/toursControlller")

//Middleware param function 
router.param("id",tourController.checkid);
//routes
router.route("/").get(tourController.getAllTours).post(tourController.checkBody,tourController.createTour);
router.route("/:id").get(tourController.getToursById).patch(tourController.updateTour).delete(tourController.deleteTour);


module.exports = router;

//notes -router.param("id") will scan the url according to the condition provided 
//.post(tourController.checkBody,tourController.createTour); ----> for this post request first the middleware function is executed and according to that the function for the post request is executed 