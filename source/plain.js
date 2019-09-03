'use strict';

function plain (array){
	return array.reduce((accumulator, currentValue)=>{
	if( Array.isArray(currentValue)){
		const tempArray = plain(currentValue);
		accumulator = accumulator.concat(tempArray);
		return accumulator;
	}
	accumulator.push(currentValue);	
	return accumulator;
	}, []);
}
