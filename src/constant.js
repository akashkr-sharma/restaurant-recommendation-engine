Array.prototype.random = function () {
	return this[Math.floor((Math.random()*this.length))];
}

const CUISINE = ["North Indian", "Chinese", "South Indian"]
const COST_BRACKET = [1,2,3,4,5]
const GENERATE_MAX_RESTO_COUNT = 1000
const RETURN_UNIQUE_RESTO_COUNT = 100 // maximum no of unique restaurant as per the given requirement 
const GENERATE_MAX_USER_COUNT = 5
const GENERATE_RESTO_CUISINE_OF_RESTO_TIMES = 3 // to generate more cuisine in the restaurant this multiplier is added

module.exports = {
	CUISINE,
	COST_BRACKET,
	GENERATE_MAX_RESTO_COUNT,
	RETURN_UNIQUE_RESTO_COUNT,
	GENERATE_MAX_USER_COUNT,
	GENERATE_RESTO_CUISINE_OF_RESTO_TIMES
}