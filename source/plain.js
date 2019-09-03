'use strict';

function reducer (accumulator, currentValue){
	if( Array.isArray(currentValue)){
		if(currentValue.length === 0){
			return accumulator;
		}
		let tempArray = plain(currentValue);
		for (let subElement of tempArray){
			accumulator.push(subElement);	
		}
	}
	else {
		accumulator.push(currentValue);	
	}
	return accumulator;
}

function plain (array){
	let newArray = [];
	newArray = array.reduce(reducer, newArray);
	return newArray;
}
