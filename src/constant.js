Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

const CUISINE = ["North Indian", "Chinese", "South Indian"]
const COST_BRACKET = [1,2,3,4,5]
const MAX_RESTO_COUNT = 100

module.exports = {
	CUISINE,
	COST_BRACKET,
	MAX_RESTO_COUNT
}