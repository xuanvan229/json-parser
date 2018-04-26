
import data from './practitioner.json'

var json_results = []




for (let item of data._items){
	if(item.primarySpec){
			let check = false
			for(let item_result of json_results){
				if(item.primarySpec.code === item_result.code ){
					check = true
				}
			}
			if(!check){
				json_results.push(item.primarySpec)
			}
	}
}
	let array_results = []

for ( let item of json_results ){
	let item_array = []
	console.log("item", item)
	item_array.push(item.code)
	item_array.push(item.text)
	array_results.push(item_array)
}


function Sortarray(array){
	return array.sort(function (a,b) {
		var x = a[1]
		var y = b[1]
		return ((x < y) ? -1 : ((x > y) ? 1 : 0))
	})
}


var result = Sortarray(array_results)

console.log("-----------------------")
console.log(array_results)



console.log("-----------------------")
console.log(result)


