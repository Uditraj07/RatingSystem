const express=require('express')

const router=express.Router();

const userController=require('../Controllers/ratingController')

router.post('/add-rating',userController.addRating);

router.get('/get-rating-details',userController.getAllRatings)

module.exports=router;