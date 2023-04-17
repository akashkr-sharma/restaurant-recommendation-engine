const restaurantFilterQuery = {
    sortByPrimaryCuisineCost_part1: [{
        key: "cuisine",
        value: UserDetail.cuisines[0].type,
        op: "=="
    }, {
        key: "costBracket",
        value: UserDetail.costs[0].type,
        op: "=="
    }, {
        key: "isRecommended",
        value: UserDetail.costs[0].type,
        op: "bool"
    }],
    
    sortByPrimaryCuisineCost_part2: [{
        key: "cuisine",
        value: UserDetail.cuisines[0].type,
        op: "=="
    }, {
        key: "costBracket",
        value: UserDetail.costs.slice(1, 2),
        op: "in"
    },{
        key: "isRecommended",
        value: UserDetail.costs[0].type,
        op: "bool"
    }],
    
    sortByPrimaryCuisineCost_part3: [{
        key: "cuisine",
        value: UserDetail.cuisines.slice(1, 2),
        op: "in"
    }, {
        key: "costBracket",
        value: UserDetail.costs[0].type,
        op: "in"
    },{
        key: "isRecommended",
        value: UserDetail.costs[0].type,
        op: "bool"
    }],




}


module.exports = {
    restaurantFilterQuery
}