'use strict';

function plain(array){
	let newArray = [];
	for (let element of array) {
		if( Array.isArray(element)){
			if(element.length > 0){
				let tempArray = plain(element);
				for (let subElement of tempArray){
					newArray.push(subElement);	
				}
			}
		}
		else{
			newArray.push(element);	
		}
	}
	return newArray;
}
