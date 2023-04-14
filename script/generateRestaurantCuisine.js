
const {Restaurant} = require('../src/models')
const {generateIds, randomDate} = require("../src/utils")
const { CUISINE, COST_BRACKET, GENERATE_RESTO_CUISINE_OF_RESTO_TIMES } = require("../src/constant")

Array.prototype.random = function () {
	return this[Math.floor((Math.random()*this.length))];
}

const restaurantsCuisine = []
var restaurantIds = []


const generatedRestaurantIds = (maxCount) => {
	restaurantIds = restaurantIds.concat(generateIds(maxCount))
}


const getRestaurantIds = () => {
	return restaurantIds.random()
}

const cuisine = () => {
	return CUISINE.random()
}


const costBracket = () => {
	return COST_BRACKET.random()
}

const rating = () => {
	return parseFloat((Math.random()*5).toFixed(2))
}


const isRecommended = () => {
	return [true, false].random()
}


const onboardedTime = () =>{
	return randomDate()
}


const generateRestaurantCuisine = (noOfResto) => {
	generatedRestaurantIds(noOfResto)
	const restaurantObj = {
		"restaurantId": getRestaurantIds,
		"cuisine": cuisine,
		"costBracket": costBracket,
		"rating": rating,
		"isRecommended": isRecommended,
		"onboardedTime": onboardedTime,
	}

	const noOfCousine = noOfResto*GENERATE_RESTO_CUISINE_OF_RESTO_TIMES;
	for(let i=0; i<noOfCousine; i++){
		const tmp = {}
		Object.keys(restaurantObj).forEach((key) => {
			tmp[key] = restaurantObj[key]()
		})
		tmpRes = new Restaurant(tmp.restaurantId, tmp.cuisine, tmp.costBracket, tmp.rating, tmp.isRecommended, tmp.onboardedTime)
		restaurantsCuisine.push(tmpRes)
	}

	return restaurantsCuisine

}


// generateRestaurantCuisine()



module.exports = generateRestaurantCuisine;