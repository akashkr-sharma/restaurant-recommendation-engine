const { v4 } = require('uuid');

const generateIds = (maxCount) => {
	const ids = []
	for(let i=0; i<maxCount; i++)
		ids.push(v4())
	return ids
}

const start = new Date("2022-01-01"), end = new Date("2022-12-31");

const randomDate = (startHour=0, endHour=0) => {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}


module.exports = {
	generateIds,
	randomDate
}