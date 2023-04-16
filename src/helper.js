

/***
 * get all Featured restaurants of primary cuisine and primary cost bracket. 
 * If none, then all featured restaurants of primary cuisine, secondary cost and secondary cuisine, primary cost
 * */

const operators = {
    "==": function(rv, lv){
        return rv == lv
    },
    "!=": function(rv, lv){
        return rv != lv
    },
    ">=": function(rv, lv){
        return rv>=lv
    },
    "<=": function(rv, lv){
        return rv<=lv
    },
    ">": function(rv, lv){
        return rv > lv
    },
    "<": function(rv, lv){
        return rv < lv
    },
    "in": function(rv, lv){
        return lv.includes(rv)
    },
    "bool": function(rv){
        return rv
    }

}




const getUniqueRestaurantIds = (restaurantIds) => {
    return restaurantIds.filter((value, index, array) => array.indexOf(value) === index)
}

const filterRestaurants = (model, filters, maxCount) => {
    try{
        const filterData = model
            .filter((resto, idx) => {
                let condition;
                filters.forEach((filter, idx) => {
                    const res = operators[filter.op](resto[filter.key], filter.value);
                    if(idx==0){
                        condition = res;
                    }else{
                        condition = condition && res
                    }
                })
                if(condition){
                    RestaurantDetails.splice(idx, 1)
                    return resto
                }
            })
            .map( resto => resto.restaurantId)

        return getUniqueRestaurantIds(filterData).splice(0, maxCount)
    }catch(e){
        console.log(`error in filterRestaurants: ${err.message}`);
        throw(err)
    }
}

const sortByPrimaryCuisineCost = (maxCount) => {
    console.log("RestaurantDetails1: ", RestaurantDetails.length)
    const primaryCuisine = UserDetail.cuisines[0].type
    const primaryCost = UserDetail.costs[0].type
    const secondaryCuisine = UserDetail.cuisines.slice(1, 2)
    const secondaryCost = UserDetail.costs.slice(1, 2)

    return (
        RestaurantDetails
            .filter((resto, idx) => {
                if(resto.cuisine == primaryCuisine && resto.costBracket == primaryCost && resto.isRecommended){
                    RestaurantDetails.splice(idx, 1)
                    return resto
                }
            })
            .map( resto => resto.restaurantId)
            ||
        RestaurantDetails
            .filter((resto) => {
                if((resto.cuisine == primaryCuisine && secondaryCost.includes(resto.costBracket) && resto.isRecommended) || (secondaryCuisine.includes(resto.cuisine) && resto.costBracket == primaryCost && resto.isRecommended)) {
                    RestaurantDetails.splice(idx, 1)
                    return resto
                }
            })
            .map( resto => resto.restaurantId)
    )
    .filter((value, index, array) => array.indexOf(value) === index)
    .splice(0, maxCount)
}

/***
 * All restaurants of Primary cuisine, primary cost bracket with rating >= 4
 * */
const sortByPrimaryCuisineCostRating4 = (maxCount) => {
    console.log("RestaurantDetails2: ", RestaurantDetails.length)
    const primaryCuisine = UserDetail.cuisines[0].type
    const primaryCost = UserDetail.costs[0].type
    const rating = 4

    return RestaurantDetails
        .filter((resto, idx) => {
            if(resto.cuisine == primaryCuisine && resto.costBracket == primaryCost && resto.rating>= rating){
                RestaurantDetails.splice(idx, 1)
                return resto
            }
        })
        .map( resto => resto.restaurantId)
        .filter((value, index, array) => array.indexOf(value) === index)
        .splice(0, maxCount)

}


/**
 * All restaurants of Primary cuisine, secondary cost bracket with rating >= 4.5
 * */
const sortByPrimaryCuisineSecondaryCostRating4_5 = (maxCount) => {
    console.log("RestaurantDetails3: ", RestaurantDetails.length)
    const primaryCuisine = UserDetail.cuisines[0].type
    const secondaryCost = UserDetail.costs.slice(1, 2)
    const rating = 4.5

    return RestaurantDetails
        .filter((resto, idx) => {
            if(resto.cuisine == primaryCuisine && secondaryCost.includes(resto.costBracket) && resto.rating>= rating){
                RestaurantDetails.splice(idx, 1)
                return resto
            }
        })
        .map( resto => resto.restaurantId)
        .filter((value, index, array) => array.indexOf(value) === index)
        .splice(0, maxCount)

}


/**
 * All restaurants of secondary cuisine, primary cost bracket with rating >= 4.5
 * */
const sortBySecondaryCuisinePrimaryCostRating4_5 = (maxCount) => {
    console.log("RestaurantDetails4: ", RestaurantDetails.length)
    const primaryCost = UserDetail.costs[0].type
    const secondaryCuisine = UserDetail.cuisines.slice(1, 2)
    const rating = 4.5

    return RestaurantDetails
        .filter((resto, idx) => {
            if(secondaryCuisine.includes(resto.cuisine) && resto.costBracket == primaryCost && resto.rating>= rating){
                RestaurantDetails.splice(idx, 1)
                return resto
            }
        })
        .map( resto => resto.restaurantId)
        .filter((value, index, array) => array.indexOf(value) === index)
        .splice(0, maxCount)

}


/**
 * Top 4 newly created restaurants by rating
 * */
const top4NewlyCreatedRestaurantByRating = (maxCount) => {
    console.log("RestaurantDetails5: ", RestaurantDetails.length)
    const today = new Date()
    const newRestaurantDate = new Date()
    newRestaurantDate.setDate(today.getDate()-2)
    newRestaurantDate.setHours(0, 0)
    
    return RestaurantDetails
        .filter((resto, idx) => {
            if(resto.onboardedTime >= newRestaurantDate){
                RestaurantDetails.splice(idx, 1)
                return resto
            }
        })
        .map( resto => resto.restaurantId)
        .filter((value, index, array) => array.indexOf(value) === index)
        .splice(0, maxCount)
}


/**
 * All restaurants of Primary cuisine, primary cost bracket with rating < 4
 * */
const sortByPrimaryCuisineCostRating4Less = (maxCount) => {
    console.log("RestaurantDetails6: ", RestaurantDetails.length)
    const primaryCuisine = UserDetail.cuisines[0].type
    const primaryCost = UserDetail.costs[0].type
    const rating = 4

    return RestaurantDetails
        .filter((resto, idx) => {
            if(resto.cuisine == primaryCuisine && resto.costBracket == primaryCost && resto.rating < rating){
                RestaurantDetails.splice(idx, 1)
                return resto
            }
        })
        .map( resto => resto.restaurantId)
        .filter((value, index, array) => array.indexOf(value) === index)
        .splice(0, maxCount)

}


/**
 * All restaurants of Primary cuisine, secondary cost bracket with rating < 4.5
 * */
const sortByPrimaryCuisineSecondaryCostRating4_5Less = (maxCount) => {
    console.log("RestaurantDetails7: ", RestaurantDetails.length)
    const primaryCuisine = UserDetail.cuisines[0].type
    const secondaryCost = UserDetail.costs.slice(1, 2)
    const rating = 4.5

    return RestaurantDetails
        .filter((resto, idx) => {
            if(resto.cuisine == primaryCuisine && secondaryCost.includes(resto.costBracket) && resto.rating < rating){
                RestaurantDetails.splice(idx, 1)
                return resto
            }
        })
        .map( resto => resto.restaurantId)
        .filter((value, index, array) => array.indexOf(value) === index)
        .splice(0, maxCount)

}


/**
 * All restaurants of secondary cuisine, primary cost bracket with rating < 4.5
 * */
const sortBySecondaryCuisinePrimaryCostRating4_5Less = (maxCount) => {
    console.log("RestaurantDetails8: ", RestaurantDetails.length)
    const primaryCost = UserDetail.costs[0].type
    const secondaryCuisine = UserDetail.cuisines.slice(1, 2)
    const rating = 4.5

    return RestaurantDetails
        .filter((resto, idx) => {
            if(secondaryCuisine.includes(resto.cuisine) && resto.costBracket == primaryCost && resto.rating < rating){
                RestaurantDetails.splice(idx, 1)
                return resto
            }
        })
        .map( resto => resto.restaurantId)
        .filter((value, index, array) => array.indexOf(value) === index)
        .splice(0, maxCount)

}


/**
 * All restaurants of any cuisine, any cost bracket
 * */
const max100RestoAnyCuisineCost = (maxCount) => {
    console.log("RestaurantDetails9: ", RestaurantDetails.length)
    return RestaurantDetails.splice(0, maxCount).map( resto => resto.restaurantId)
}




/**
 * getPriorityFilterType array give us the liability to change the priority order of our filter logic
 */

const getPriorityFilterType = [
    sortByPrimaryCuisineCost,
    sortByPrimaryCuisineCostRating4,
    sortByPrimaryCuisineSecondaryCostRating4_5,
    sortBySecondaryCuisinePrimaryCostRating4_5,
    top4NewlyCreatedRestaurantByRating,
    sortByPrimaryCuisineCostRating4Less,
    sortByPrimaryCuisineSecondaryCostRating4_5Less,
    sortBySecondaryCuisinePrimaryCostRating4_5Less,
    max100RestoAnyCuisineCost
]


module.exports = {
    getPriorityFilterType
}