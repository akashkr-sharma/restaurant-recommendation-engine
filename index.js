'use strict'


Array.prototype.random = function () {
	return this[Math.floor((Math.random()*this.length))];
}

const { GENERATE_MAX_RESTO_COUNT, GENERATE_MAX_USER_COUNT, RETURN_UNIQUE_RESTO_COUNT } = require("./src/constant");
const generateUserData = require("./script/generateUserData");
const generateRestaurantCuisine = require("./script/generateRestaurantCuisine");

const contoller = require("./src/controller");

const getRestaurantRecommendation = function(userId, restaurants=[]) {
	return contoller.recommendationEngine(userId, restaurants, RETURN_UNIQUE_RESTO_COUNT)
}


global.UserDetails = generateUserData(GENERATE_MAX_USER_COUNT);
let RestaurantDetails = generateRestaurantCuisine(GENERATE_MAX_RESTO_COUNT);

const restaurantIds = getRestaurantRecommendation(UserDetails.random().userId, RestaurantDetails);
console.log("rest: ", restaurantIds, restaurantIds.length)