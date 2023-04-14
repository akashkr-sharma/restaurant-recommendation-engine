
const { v4 } = require('uuid');


class CuisineTracking {
	constructor(type="", noOfOrders=0){
		this.type = type
		this.noOfOrders = noOfOrders
	}
}


class CostTracking {
	constructor(type=0, noOfOrders=0){
		this.type = type
		this.noOfOrders = noOfOrders
	}
}


class User{
	constructor(cuisines=[], costBracket=[]){
		this.cuisines = cuisines
		this.costs = costBracket
		this.userId = null
	}

	generateUserId(){
		this.userId = v4()
	}


}


class Restaurant {
	constructor(restaurantId, cuisine, costBracket, rating, isRecommended, onboardedTime){
		this.restaurantId = restaurantId;
		this.cuisine = cuisine;
		this.costBracket = costBracket;
		this.rating = rating;
		this.isRecommended = isRecommended;
		this.onboardedTime = onboardedTime;
	}
}


module.exports = {
	Restaurant,
	User,
	CuisineTracking,
	CostTracking
};