'use strict';

function plain (array){
	return array.reduce((accumulator, currentValue)=>{
	if( Array.isArray(currentValue)){
		const tempArray = plain(currentValue);
		return [...accumulator,...tempArray];
	}
	return [...accumulator, currentValue];
	}, []);
}
