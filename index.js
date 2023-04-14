'use strict'


Array.prototype.random = function () {
	return this[Math.floor((Math.random()*this.length))];
}

const contoller = require("./src/controller");
const generateUserData = require("./script/generateUserData");
const generateRestaurantCuisine = require("./script/generateRestaurantCuisine");
const { GENERATE_MAX_RESTO_COUNT, GENERATE_MAX_USER_COUNT, RETURN_UNIQUE_RESTO_COUNT } = require("./src/constant");


/***
 * generating Users & Restaurant Cuisine collection 
 * */
global.UserDetails = generateUserData(GENERATE_MAX_USER_COUNT);
let RestaurantDetails = generateRestaurantCuisine(GENERATE_MAX_RESTO_COUNT);


/**
 * this is the Recommendation function 
 * */
const getRestaurantRecommendation = function(userId, restaurants=[]) {
	return contoller.recommendationEngine(userId, restaurants, RETURN_UNIQUE_RESTO_COUNT)
}

const restaurantIds = getRestaurantRecommendation(UserDetails.random().userId, RestaurantDetails);
console.log("rest: ", restaurantIds, restaurantIds.length)