const { CUISINE, COST_BRACKET } = require("../src/constant")
const { User, CuisineTracking, CostTracking } = require('../src/models')


const totalNoOfOrder = () => Math.floor((Math.random()*(100-5+1)+5))

const generateCuisineTracking = () => {
	return CUISINE.map((cuisine) => new CuisineTracking(cuisine, totalNoOfOrder())).sort((a,b)=> b.noOfOrders-a.noOfOrders)
}


const generateCostTracking = () => {
	return COST_BRACKET.map((cost) => new CostTracking(cost, totalNoOfOrder())).sort((a,b)=> b.noOfOrders-a.noOfOrders)
}


/**
 * generateUserData will generate multiple user based on maxcount 
 * maxCount is equivalant to GENERATE_MAX_USER_COUNT in constant file
 * */
const generateUserData = (maxCount) => {
	const userObjs = []
	for (let i=0; i< maxCount; i++){
		const cuisineTracking = generateCuisineTracking()
		const costTracking = generateCostTracking()
		const userObj = new User(cuisineTracking, costTracking)
		userObj.generateUserId()
		// console.log("userObj: ", userObj)
		// return userObj
		userObjs.push(userObj)
	}
	return userObjs
}

// generateUserData()

module.exports = generateUserData