const {getPriorityFilterType} = require("./helper")

const recommendationEngine = (userId, restaurant) => {
    return getPriorityFilterType.map((func) => {
        return func()
    })
}


module.exports = {
    recommendationEngine
}