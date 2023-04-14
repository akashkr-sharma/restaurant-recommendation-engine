const sortByPrimaryCuisineCost = () => {
    const primaryCuisine = UserDetail.cuisines[0].type
    const primaryCost = UserDetail.costs[0].type
    const secondaryCuisine = UserDetail.cuisines.slice(1, 2)
    const secondaryCost = UserDetail.costs.slice(1, 2)
    // console.log(secondaryCost, secondaryCuisine)
    return (
        RestaurantDetails
            .filter((resto, idx) => resto.cuisine == primaryCuisine && resto.costBracket == primaryCost)
            .map( resto => resto.restaurantId)
            ||
        RestaurantDetails
            .filter((resto) => ((resto.cuisine == primaryCuisine && resto.costBracket == secondaryCost) || (resto.cuisine == secondaryCuisine && resto.costBracket == primaryCost)))
            .map( resto => resto.restaurantId)
    ).filter((value, index, array) => array.indexOf(value) === index)
}



const getPriorityFilterType = [
    sortByPrimaryCuisineCost,
]


module.exports = {
    getPriorityFilterType
}