const { CUISINE, COST_BRACKET } = require("../src/constant")
const { User, CuisineTracking, CostTracking } = require('../src/models')


Array.prototype.random = function () {
	return this[Math.floor((Math.random()*this.length))];
}


const totalNoOfOrder = () => Math.floor((Math.random()*(100-5+1)+5))

const generateCuisineTracking = () => {
	return CUISINE.map((cuisine) => new CuisineTracking(cuisine, totalNoOfOrder())).sort((a,b)=> b.noOfOrders-a.noOfOrders)
}


const generateCostTracking = () => {
	return COST_BRACKET.map((cost) => new CostTracking(cost, totalNoOfOrder())).sort((a,b)=> b.noOfOrders-a.noOfOrders)
}



const generateUserData = () => {
	const cuisineTracking = generateCuisineTracking()
	const costTracking = generateCostTracking()
	const userObj = new User(cuisineTracking, costTracking)
	userObj.generateUserId()
	// console.log("userObj: ", userObj)
	return userObj
}

// generateUserData()

module.exports = generateUserData