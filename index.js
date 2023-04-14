'use strict'

const { MAX_RESTO_COUNT } = require("./src/constant");
const generateUserData = require("./script/generateUserData");
const generateRestaurantCuisine = require("./script/generateRestaurantCuisine");

const contoller = require("./src/controller");

const getRestaurantRecommendation = function(userId, restaurants=[]) {
	return contoller.recommendationEngine(userId, restaurants)
}

global.UserDetail = generateUserData();
global.RestaurantDetails = generateRestaurantCuisine(MAX_RESTO_COUNT);

console.log("RestaurantDetails: ", RestaurantDetails)
console.log("UserDetail: ", UserDetail)
const restaurantIds = getRestaurantRecommendation(UserDetail.userId, RestaurantDetails);
console.log("rest: ", restaurantIds)



// const args = process.argv.slice(2);

// console.log("args: ", args);

// let restaurantsFile = []

// if(args[1]){
// 	restaurantsFile = require(args[1]).restaurants
// }

// getRestaurantRecommendation(0 || args[0], []||restaurantsFile)