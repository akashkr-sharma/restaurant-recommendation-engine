const {getPriorityFilterType} = require("./helper")


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
        tmp = tmp.concat(restoIdsArr[i])

    return tmp
}


module.exports = {
    recommendationEngine
}