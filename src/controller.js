const {getPriorityFilterType} = require("./helper")


/***
 * filter user from user list by userId and store the value in global variable to easy access
 * store the restaurants in global value to easy access
 * calling getPriorityFilterType to get restaurant's ids as per the given condition
 * tmp is used to concatinate the array 
 * */
const recommendationEngine = (userId, restaurants, maxCount) => {
    global.UserDetail = UserDetails.find( user => user.userId == userId)
    global.RestaurantDetails = restaurants

    let count = maxCount
    const restoIdsArr = getPriorityFilterType.map((func) => {
        // return func()
        if(count>0){
            let ids = func(maxCount).splice(0, count);
            count -= ids.length
            return ids
        }else{
            return []
        }

    })

    let tmp = []
    for(let i=0; i<restoIdsArr.length; i++)
        if(restoIdsArr[i].length)
            tmp = tmp.concat(restoIdsArr[i])

    return tmp
}


module.exports = {
    recommendationEngine
}