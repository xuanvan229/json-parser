import data from './practitioner.json'

var json_results = []




for (let item of data._items){
	if(item.address){
		console.log(item.address.state)
				let check = false
				for(let item_result of json_results){
					console.log("***", item_result)
					if(item.address.state === item_result){
						check = true 
					}
				}
				console.log(check)
				if(!check){
					json_results.push(item.address.state)
				}
	}
}

json_results.sort()


console.log("-----------------------")
console.log(json_results)

